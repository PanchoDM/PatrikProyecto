import {
  FlightCardComponent
} from "./chunk-IHEX7OUW.js";
import {
  FlightService
} from "./chunk-E3RH3F2K.js";
import "./chunk-OEBDVQ23.js";
import {
  Component,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A7NZCF3Z.js";

// src/app/features/calendario/calendario.component.ts
var _forTrack0 = ($index, $item) => $item.date.getTime();
var _forTrack1 = ($index, $item) => $item.id;
function CalendarioComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function CalendarioComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r1);
  }
}
function CalendarioComponent_For_29_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", cell_r3.count + " vuelos programados");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r3.count);
  }
}
function CalendarioComponent_For_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function CalendarioComponent_For_29_For_2_Template_button_click_0_listener() {
      const cell_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectDay(cell_r3));
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CalendarioComponent_For_29_For_2_Conditional_3_Template, 2, 2, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-out", !cell_r3.inMonth)("is-today", cell_r3.isToday)("is-selected", ctx_r3.isSelected(cell_r3.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r3.day);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r3.count > 0 ? 3 : -1);
  }
}
function CalendarioComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, CalendarioComponent_For_29_For_2_Template, 4, 8, "button", 26, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(week_r5);
  }
}
function CalendarioComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "No hay vuelos programados este d\xEDa.");
    \u0275\u0275elementEnd();
  }
}
function CalendarioComponent_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-flight-card", 30);
  }
  if (rf & 2) {
    const flight_r6 = ctx.$implicit;
    \u0275\u0275property("flight", flight_r6);
  }
}
function CalendarioComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, CalendarioComponent_Conditional_35_For_2_Template, 1, 1, "app-flight-card", 30, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.selectedDayFlights());
  }
}
var MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
var DIAS_SEMANA = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"];
var DIAS_CORTOS = ["Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b", "Dom"];
var CalendarioComponent = class _CalendarioComponent {
  flightService = inject(FlightService);
  today = /* @__PURE__ */ new Date();
  viewYear = signal(this.today.getFullYear(), ...ngDevMode ? [{ debugName: "viewYear" }] : (
    /* istanbul ignore next */
    []
  ));
  viewMonth = signal(this.today.getMonth(), ...ngDevMode ? [{ debugName: "viewMonth" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedDate = signal(this.stripTime(this.today), ...ngDevMode ? [{ debugName: "selectedDate" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  monthFlights = signal([], ...ngDevMode ? [{ debugName: "monthFlights" }] : (
    /* istanbul ignore next */
    []
  ));
  weekDayLabels = DIAS_CORTOS;
  monthLabel = computed(() => `${MESES[this.viewMonth()]} ${this.viewYear()}`, ...ngDevMode ? [{ debugName: "monthLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedDateLabel = computed(() => {
    const d = this.selectedDate();
    return `${DIAS_SEMANA[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;
  }, ...ngDevMode ? [{ debugName: "selectedDateLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  countsByDay = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const f of this.monthFlights()) {
      if (!f.eta)
        continue;
      const key = this.dayKey(new Date(f.eta));
      map.set(key, (map.get(key) ?? 0) + 1);
    }
    return map;
  }, ...ngDevMode ? [{ debugName: "countsByDay" }] : (
    /* istanbul ignore next */
    []
  ));
  weeks = computed(() => {
    const year = this.viewYear();
    const month = this.viewMonth();
    const gridStart = this.gridStart(year, month);
    const counts = this.countsByDay();
    const cells = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
      cells.push({
        date: d,
        day: d.getDate(),
        inMonth: d.getMonth() === month,
        isToday: this.isSameDay(d, this.today),
        count: counts.get(this.dayKey(d)) ?? 0
      });
    }
    const weeks = [];
    for (let i = 0; i < 6; i++) {
      weeks.push(cells.slice(i * 7, i * 7 + 7));
    }
    return weeks;
  }, ...ngDevMode ? [{ debugName: "weeks" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedDayFlights = computed(() => {
    const sel = this.selectedDate();
    return this.monthFlights().filter((f) => f.eta && this.isSameDay(new Date(f.eta), sel)).sort((a, b) => a.eta < b.eta ? -1 : a.eta > b.eta ? 1 : 0);
  }, ...ngDevMode ? [{ debugName: "selectedDayFlights" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadMonth();
  }
  previousMonth() {
    this.shiftMonth(-1);
  }
  nextMonth() {
    this.shiftMonth(1);
  }
  goToday() {
    this.viewYear.set(this.today.getFullYear());
    this.viewMonth.set(this.today.getMonth());
    this.selectedDate.set(this.stripTime(this.today));
    this.loadMonth();
  }
  selectDay(cell) {
    this.selectedDate.set(this.stripTime(cell.date));
    if (!cell.inMonth) {
      this.viewYear.set(cell.date.getFullYear());
      this.viewMonth.set(cell.date.getMonth());
      this.loadMonth();
    }
  }
  isSelected(date) {
    return this.isSameDay(date, this.selectedDate());
  }
  shiftMonth(delta) {
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
  loadMonth() {
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
      }
    });
  }
  /** Primer dia de la grilla (lunes de la semana que contiene el dia 1 del mes). */
  gridStart(year, month) {
    const firstOfMonth = new Date(year, month, 1);
    const firstWeekday = (firstOfMonth.getDay() + 6) % 7;
    return new Date(year, month, 1 - firstWeekday);
  }
  stripTime(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
  dayKey(d) {
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  }
  static \u0275fac = function CalendarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarioComponent, selectors: [["app-calendario"]], decls: 36, vars: 4, consts: [[1, "container-fluid", "py-4"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3", "mb-4"], [1, "h3", "mb-1"], [1, "text-body-secondary", "small", "mb-0"], ["routerLink", "/torre-control", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left", "me-1"], [1, "row", "g-4"], [1, "col-12", "col-lg-7"], [1, "card", "fade-in", "p-3", "p-md-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], ["type", "button", "aria-label", "Mes anterior", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "d-flex", "align-items-center", "gap-2"], [1, "h5", "mb-0", "text-capitalize"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-body-secondary"], ["type", "button", "aria-label", "Mes siguiente", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-chevron-right"], [1, "text-end", "mb-2"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "p-0", "text-decoration-none", 3, "click"], [1, "calendar-grid", "calendar-header"], [1, "calendar-weekday"], [1, "calendar-grid"], [1, "col-12", "col-lg-5"], [1, "card", "fade-in", "p-3", "p-md-4", "h-100"], [1, "h6", "mb-3"], [1, "d-flex", "flex-column", "gap-3"], ["type", "button", 1, "calendar-cell", 3, "is-out", "is-today", "is-selected"], ["type", "button", 1, "calendar-cell", 3, "click"], [1, "cell-day"], [1, "cell-dot"], [3, "flight"]], template: function CalendarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Calendario de vuelos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Consulta los vuelos programados por fecha (ETA).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, "Volver a Torre de Control ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function CalendarioComponent_Template_button_click_14_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "h2", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, CalendarioComponent_Conditional_19_Template, 1, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 15);
      \u0275\u0275listener("click", function CalendarioComponent_Template_button_click_20_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
      \u0275\u0275listener("click", function CalendarioComponent_Template_button_click_23_listener() {
        return ctx.goToday();
      });
      \u0275\u0275text(24, "Hoy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 19);
      \u0275\u0275repeaterCreate(26, CalendarioComponent_For_27_Template, 2, 1, "div", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(28, CalendarioComponent_For_29_Template, 3, 0, "div", 21, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 22)(31, "div", 23)(32, "h2", 24);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, CalendarioComponent_Conditional_34_Template, 2, 0, "p", 3)(35, CalendarioComponent_Conditional_35_Template, 3, 0, "div", 25);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate(ctx.monthLabel());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 19 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.weekDayLabels);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.weeks());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.selectedDateLabel());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedDayFlights().length === 0 ? 34 : 35);
    }
  }, dependencies: [RouterLink, FlightCardComponent], styles: ["\n.calendar-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 6px;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.calendar-weekday[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--tc-muted);\n  padding-bottom: 4px;\n}\n.calendar-grid[_ngcontent-%COMP%]    + .calendar-grid[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.calendar-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1 / 1;\n  border: 1px solid var(--tc-border);\n  border-radius: 0.6rem;\n  background: var(--tc-surface-2);\n  color: var(--tc-text);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  padding: 0;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    background-color 0.2s ease,\n    transform 0.15s ease;\n}\n.calendar-cell[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--tc-primary) 45%, var(--tc-border));\n  transform: translateY(-1px);\n}\n.calendar-cell.is-out[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n.calendar-cell.is-today[_ngcontent-%COMP%] {\n  border-color: var(--tc-primary);\n  box-shadow: 0 0 0 1px color-mix(in srgb, var(--tc-primary) 35%, transparent);\n}\n.calendar-cell.is-selected[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--tc-primary) 22%, var(--tc-surface-2));\n  border-color: var(--tc-primary);\n}\n.cell-day[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.cell-dot[_ngcontent-%COMP%] {\n  min-width: 1.15rem;\n  height: 1.15rem;\n  padding: 0 0.3rem;\n  border-radius: 999px;\n  background: var(--tc-primary);\n  color: var(--tc-primary-contrast);\n  font-size: 0.62rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n@media (max-width: 420px) {\n  .cell-day[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=calendario.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarioComponent, [{
    type: Component,
    args: [{ selector: "app-calendario", standalone: true, imports: [RouterLink, FlightCardComponent], template: `<div class="container-fluid py-4">
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
    <div>
      <h1 class="h3 mb-1">Calendario de vuelos</h1>
      <p class="text-body-secondary small mb-0">Consulta los vuelos programados por fecha (ETA).</p>
    </div>
    <a routerLink="/torre-control" class="btn btn-outline-secondary btn-sm">
      <i class="bi bi-arrow-left me-1"></i>Volver a Torre de Control
    </a>
  </div>

  <div class="row g-4">
    <div class="col-12 col-lg-7">
      <div class="card fade-in p-3 p-md-4">
        <div class="d-flex align-items-center justify-content-between mb-1">
          <button type="button" class="btn btn-outline-secondary btn-sm" (click)="previousMonth()" aria-label="Mes anterior">
            <i class="bi bi-chevron-left"></i>
          </button>
          <div class="d-flex align-items-center gap-2">
            <h2 class="h5 mb-0 text-capitalize">{{ monthLabel() }}</h2>
            @if (loading()) {
              <span class="spinner-border spinner-border-sm text-body-secondary" role="status"></span>
            }
          </div>
          <button type="button" class="btn btn-outline-secondary btn-sm" (click)="nextMonth()" aria-label="Mes siguiente">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>

        <div class="text-end mb-2">
          <button type="button" class="btn btn-link btn-sm p-0 text-decoration-none" (click)="goToday()">Hoy</button>
        </div>

        <div class="calendar-grid calendar-header">
          @for (label of weekDayLabels; track label) {
            <div class="calendar-weekday">{{ label }}</div>
          }
        </div>

        @for (week of weeks(); track $index) {
          <div class="calendar-grid">
            @for (cell of week; track cell.date.getTime()) {
              <button
                type="button"
                class="calendar-cell"
                [class.is-out]="!cell.inMonth"
                [class.is-today]="cell.isToday"
                [class.is-selected]="isSelected(cell.date)"
                (click)="selectDay(cell)"
              >
                <span class="cell-day">{{ cell.day }}</span>
                @if (cell.count > 0) {
                  <span class="cell-dot" [attr.aria-label]="cell.count + ' vuelos programados'">{{ cell.count }}</span>
                }
              </button>
            }
          </div>
        }
      </div>
    </div>

    <div class="col-12 col-lg-5">
      <div class="card fade-in p-3 p-md-4 h-100">
        <h2 class="h6 mb-3">{{ selectedDateLabel() }}</h2>

        @if (selectedDayFlights().length === 0) {
          <p class="text-body-secondary small mb-0">No hay vuelos programados este d\xEDa.</p>
        } @else {
          <div class="d-flex flex-column gap-3">
            @for (flight of selectedDayFlights(); track flight.id) {
              <app-flight-card [flight]="flight" />
            }
          </div>
        }
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/calendario/calendario.component.css */\n.calendar-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 6px;\n}\n.calendar-header {\n  margin-bottom: 6px;\n}\n.calendar-weekday {\n  text-align: center;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--tc-muted);\n  padding-bottom: 4px;\n}\n.calendar-grid + .calendar-grid {\n  margin-top: 6px;\n}\n.calendar-cell {\n  aspect-ratio: 1 / 1;\n  border: 1px solid var(--tc-border);\n  border-radius: 0.6rem;\n  background: var(--tc-surface-2);\n  color: var(--tc-text);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  padding: 0;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    background-color 0.2s ease,\n    transform 0.15s ease;\n}\n.calendar-cell:hover {\n  border-color: color-mix(in srgb, var(--tc-primary) 45%, var(--tc-border));\n  transform: translateY(-1px);\n}\n.calendar-cell.is-out {\n  opacity: 0.35;\n}\n.calendar-cell.is-today {\n  border-color: var(--tc-primary);\n  box-shadow: 0 0 0 1px color-mix(in srgb, var(--tc-primary) 35%, transparent);\n}\n.calendar-cell.is-selected {\n  background: color-mix(in srgb, var(--tc-primary) 22%, var(--tc-surface-2));\n  border-color: var(--tc-primary);\n}\n.cell-day {\n  font-size: 0.92rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.cell-dot {\n  min-width: 1.15rem;\n  height: 1.15rem;\n  padding: 0 0.3rem;\n  border-radius: 999px;\n  background: var(--tc-primary);\n  color: var(--tc-primary-contrast);\n  font-size: 0.62rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n@media (max-width: 420px) {\n  .cell-day {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=calendario.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarioComponent, { className: "CalendarioComponent", filePath: "src/app/features/calendario/calendario.component.ts", lineNumber: 29 });
})();
export {
  CalendarioComponent
};
//# sourceMappingURL=chunk-UK7UQTIU.js.map
