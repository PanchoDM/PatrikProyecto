import { Component, effect, input, OnDestroy, signal, computed } from '@angular/core';
import { TimerSnapshot } from '../../core/models/flight.model';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.css',
})
export class CountdownTimerComponent implements OnDestroy {
  readonly timer = input.required<TimerSnapshot>();

  private readonly remaining = signal(0);
  private intervalId?: ReturnType<typeof setInterval>;

  readonly display = computed(() => this.formatSeconds(this.remaining()));
  readonly isOvertime = computed(() => this.remaining() < 0);
  readonly progressPercent = computed(() => {
    const t = this.timer();
    if (!t.totalSeconds) return 0;
    const pct = (this.remaining() / t.totalSeconds) * 100;
    return Math.max(0, Math.min(100, pct));
  });

  readonly levelClass = computed(() => {
    switch (this.timer().level) {
      case 'A_TIEMPO':
        return 'timer-ok';
      case 'PROXIMO':
        return 'timer-warning';
      case 'CRITICO':
        return 'timer-critical';
      case 'VENCIDO':
        return 'timer-expired';
      default:
        return 'timer-ok';
    }
  });

  constructor() {
    effect(() => {
      // Reset local counter whenever a fresh snapshot arrives del backend,
      // luego el intervalo local interpola segundo a segundo para que el
      // reloj se vea fluido incluso si la red tarda en traer el proximo tick.
      this.remaining.set(this.timer().remainingSeconds);
    });

    this.intervalId = setInterval(() => {
      if (this.timer().active) {
        this.remaining.update((v) => v - 1);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private formatSeconds(totalSeconds: number): string {
    const overtime = totalSeconds < 0;
    const s = Math.abs(totalSeconds);
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;

    const pad = (n: number) => n.toString().padStart(2, '0');
    const base = hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
    return overtime ? `+${base}` : base;
  }
}
