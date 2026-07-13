import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlightService } from '../../core/services/flight.service';
import { FlightState } from '../../core/models/flight.model';
import { FlightCardComponent } from '../flight-card/flight-card.component';

const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];
const DIAS_SEMANA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const DIAS_CORTOS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

interface DayCell {
  date: Date;
  day: number;
  inMonth: boolean;
  isToday: boolean;
  count: number;
}

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [RouterLink, FlightCardComponent],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css',
})
export class CalendarioComponent implements OnInit {
  private readonly flightService = inject(FlightService);

  private readonly today = new Date();
  readonly viewYear = signal(this.today.getFullYear());
  readonly viewMonth = signal(this.today.getMonth());
  readonly selectedDate = signal<Date>(this.stripTime(this.today));

  readonly loading = signal(false);
  readonly monthFlights = signal<FlightState[]>([]);

  readonly weekDayLabels = DIAS_CORTOS;

  readonly monthLabel = computed(() => `${MESES[this.viewMonth()]} ${this.viewYear()}`);

  readonly selectedDateLabel = computed(() => {
    const d = this.selectedDate();
    return `${DIAS_SEMANA[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;
  });

  private readonly countsByDay = computed(() => {
    const map = new Map<string, number>();
    for (const f of this.monthFlights()) {
      if (!f.eta) continue;
      const key = this.dayKey(new Date(f.eta));
      map.set(key, (map.get(key) ?? 0) + 1);
    }
    return map;
  });

  readonly weeks = computed<DayCell[][]>(() => {
    const year = this.viewYear();
    const month = this.viewMonth();
    const gridStart = this.gridStart(year, month);
    const counts = this.countsByDay();

    const cells: DayCell[] = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
      cells.push({
        date: d,
        day: d.getDate(),
        inMonth: d.getMonth() === month,
        isToday: this.isSameDay(d, this.today),
        count: counts.get(this.dayKey(d)) ?? 0,
      });
    }

    const weeks: DayCell[][] = [];
    for (let i = 0; i < 6; i++) {
      weeks.push(cells.slice(i * 7, i * 7 + 7));
    }
    return weeks;
  });

  readonly selectedDayFlights = computed(() => {
    const sel = this.selectedDate();
    return this.monthFlights()
      .filter((f) => f.eta && this.isSameDay(new Date(f.eta), sel))
      .sort((a, b) => (a.eta! < b.eta! ? -1 : a.eta! > b.eta! ? 1 : 0));
  });

  ngOnInit(): void {
    this.loadMonth();
  }

  previousMonth(): void {
    this.shiftMonth(-1);
  }

  nextMonth(): void {
    this.shiftMonth(1);
  }

  goToday(): void {
    this.viewYear.set(this.today.getFullYear());
    this.viewMonth.set(this.today.getMonth());
    this.selectedDate.set(this.stripTime(this.today));
    this.loadMonth();
  }

  selectDay(cell: DayCell): void {
    this.selectedDate.set(this.stripTime(cell.date));
    if (!cell.inMonth) {
      this.viewYear.set(cell.date.getFullYear());
      this.viewMonth.set(cell.date.getMonth());
      this.loadMonth();
    }
  }

  isSelected(date: Date): boolean {
    return this.isSameDay(date, this.selectedDate());
  }

  private shiftMonth(delta: number): void {
    let month = this.viewMonth() + delta;
    let year = this.viewYear();
    if (month < 0) {
      month = 11;
      year -= 1;
    } else if (month > 11) {
      month = 0;
      year += 1;
    }
    this.viewMonth.set(month);
    this.viewYear.set(year);
    this.loadMonth();
  }

  private loadMonth(): void {
    this.loading.set(true);
    const gridStart = this.gridStart(this.viewYear(), this.viewMonth());
    const gridEnd = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + 42);

    this.flightService.getByRange(gridStart, gridEnd).subscribe({
      next: (flights) => {
        this.monthFlights.set(flights);
        this.loading.set(false);
      },
      error: () => {
        this.monthFlights.set([]);
        this.loading.set(false);
      },
    });
  }

  /** Primer dia de la grilla (lunes de la semana que contiene el dia 1 del mes). */
  private gridStart(year: number, month: number): Date {
    const firstOfMonth = new Date(year, month, 1);
    const firstWeekday = (firstOfMonth.getDay() + 6) % 7; // 0 = lunes
    return new Date(year, month, 1 - firstWeekday);
  }

  private stripTime(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  private isSameDay(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  private dayKey(d: Date): string {
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  }
}
