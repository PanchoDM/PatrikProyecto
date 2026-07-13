import { Component, effect, inject, input, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../../core/services/flight.service';
import { FlightState, STATUS_LABELS } from '../../core/models/flight.model';
import { CountdownTimerComponent } from '../../shared/countdown-timer/countdown-timer.component';
import { NfdAnswers, NfdModalComponent } from '../nfd-modal/nfd-modal.component';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [FormsModule, CountdownTimerComponent, NfdModalComponent],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css',
})
export class FlightCardComponent {
  private readonly flightService = inject(FlightService);

  readonly flight = input.required<FlightState>();
  readonly statusLabels = STATUS_LABELS;

  private readonly nfdModal = viewChild(NfdModalComponent);
  private lastStatus: string | null = null;

  readonly busy = signal(false);
  readonly errorMessage = signal<string | null>(null);

  /** Hora real de ATA (HH:mm), editable por el operador antes de registrar. */
  readonly ataTime = signal<string>(this.nowHHmm());

  constructor() {
    effect(() => {
      const current = this.flight();
      if (current.status === 'ESPERANDO_NFD' && this.lastStatus !== 'ESPERANDO_NFD') {
        this.nfdModal()?.show();
      }
      if (current.status === 'ESPERANDO_ATA' && this.lastStatus !== 'ESPERANDO_ATA') {
        // El contador de ATA recien aparece: la hora sugerida arranca en "ahora".
        this.ataTime.set(this.nowHHmm());
      }
      this.lastStatus = current.status;
    });
  }

  openNfdModal(): void {
    this.nfdModal()?.show();
  }

  resetAtaTimeToNow(): void {
    this.ataTime.set(this.nowHHmm());
  }

  registerAta(): void {
    const ata = this.combineTodayWithTime(this.ataTime());
    this.run(() => this.flightService.registerAta(this.flight().id, ata));
  }

  confirmDescarga(): void {
    this.run(() => this.flightService.confirmDescarga(this.flight().id));
  }

  submitNfd(answers: NfdAnswers): void {
    this.run(() => this.flightService.submitNfd(this.flight().id, answers.anticipado, answers.correos));
  }

  completeTarja(): void {
    this.run(() => this.flightService.completeTarja(this.flight().id));
  }

  private run(action: () => ReturnType<FlightService['registerAta']>): void {
    this.busy.set(true);
    this.errorMessage.set(null);
    action().subscribe({
      next: () => this.busy.set(false),
      error: (err) => {
        this.busy.set(false);
        this.errorMessage.set(err?.error?.message ?? 'No se pudo completar la accion');
      },
    });
  }

  private nowHHmm(): string {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  /** Combina el HH:mm elegido con la fecha de hoy (zona horaria local del navegador). */
  private combineTodayWithTime(hhmm: string): string {
    const [hours, minutes] = hhmm.split(':').map(Number);
    const d = new Date();
    d.setHours(hours, minutes, 0, 0);
    return d.toISOString();
  }
}
