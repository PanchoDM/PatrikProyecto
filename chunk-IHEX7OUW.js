import {
  FlightService,
  STATUS_LABELS,
  isFlightUrgent
} from "./chunk-E3RH3F2K.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OEBDVQ23.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-A7NZCF3Z.js";

// src/app/shared/countdown-timer/countdown-timer.component.ts
function CountdownTimerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1, "VENCIDO");
    \u0275\u0275domElementEnd();
  }
}
function CountdownTimerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1, "CRITICO");
    \u0275\u0275domElementEnd();
  }
}
var CountdownTimerComponent = class _CountdownTimerComponent {
  timer = input.required(...ngDevMode ? [{ debugName: "timer" }] : (
    /* istanbul ignore next */
    []
  ));
  remaining = signal(0, ...ngDevMode ? [{ debugName: "remaining" }] : (
    /* istanbul ignore next */
    []
  ));
  intervalId;
  display = computed(() => this.formatSeconds(this.remaining()), ...ngDevMode ? [{ debugName: "display" }] : (
    /* istanbul ignore next */
    []
  ));
  isOvertime = computed(() => this.remaining() < 0, ...ngDevMode ? [{ debugName: "isOvertime" }] : (
    /* istanbul ignore next */
    []
  ));
  progressPercent = computed(() => {
    const t = this.timer();
    if (!t.totalSeconds)
      return 0;
    const pct = this.remaining() / t.totalSeconds * 100;
    return Math.max(0, Math.min(100, pct));
  }, ...ngDevMode ? [{ debugName: "progressPercent" }] : (
    /* istanbul ignore next */
    []
  ));
  levelClass = computed(() => {
    switch (this.timer().level) {
      case "A_TIEMPO":
        return "timer-ok";
      case "PROXIMO":
        return "timer-warning";
      case "CRITICO":
        return "timer-critical";
      case "VENCIDO":
        return "timer-expired";
      default:
        return "timer-ok";
    }
  }, ...ngDevMode ? [{ debugName: "levelClass" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      this.remaining.set(this.timer().remainingSeconds);
    });
    this.intervalId = setInterval(() => {
      if (this.timer().active) {
        this.remaining.update((v) => v - 1);
      }
    }, 1e3);
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  formatSeconds(totalSeconds) {
    const overtime = totalSeconds < 0;
    const s = Math.abs(totalSeconds);
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor(s % 3600 / 60);
    const seconds = s % 60;
    const pad = (n) => n.toString().padStart(2, "0");
    const base = hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
    return overtime ? `+${base}` : base;
  }
  static \u0275fac = function CountdownTimerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountdownTimerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountdownTimerComponent, selectors: [["app-countdown-timer"]], inputs: { timer: [1, "timer"] }, decls: 10, vars: 9, consts: [[1, "countdown"], [1, "countdown-header"], [1, "countdown-label"], [1, "badge-live"], [1, "countdown-value"], [1, "countdown-track"], [1, "countdown-fill"]], template: function CountdownTimerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, CountdownTimerComponent_Conditional_4_Template, 2, 0, "span", 3)(5, CountdownTimerComponent_Conditional_5_Template, 2, 0, "span", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 4);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5);
      \u0275\u0275domElement(9, "div", 6);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.levelClass());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.timer().label);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.timer().level === "VENCIDO" ? 4 : ctx.timer().level === "CRITICO" ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-overtime", ctx.isOvertime());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.display(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.progressPercent(), "%");
    }
  }, styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.countdown[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: var(--tc-surface-2);\n  border: 1px solid var(--tc-border);\n  backdrop-filter: blur(var(--tc-glass-blur, 0));\n  -webkit-backdrop-filter: blur(var(--tc-glass-blur, 0));\n  transition:\n    background-color 0.35s ease,\n    border-color 0.35s ease,\n    box-shadow 0.35s ease;\n}\n.countdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.25rem;\n}\n.countdown-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--tc-muted);\n}\n.badge-live[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 0.1rem 0.45rem;\n  border-radius: 999px;\n  background: currentColor;\n  color: #fff;\n  letter-spacing: 0.04em;\n}\n.countdown-value[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-feature-settings: "tnum" 1;\n  font-size: 1.9rem;\n  font-weight: 700;\n  line-height: 1.1;\n  transition: color 0.3s ease, transform 0.15s ease;\n  will-change: transform;\n}\n.countdown-value.is-overtime[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_overtime-pop 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_overtime-pop {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.08);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.countdown-track[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  height: 5px;\n  border-radius: 999px;\n  background: var(--tc-border);\n  overflow: hidden;\n}\n.countdown-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: currentColor;\n  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.timer-ok[_ngcontent-%COMP%] {\n  color: var(--tc-ok);\n}\n.timer-ok[_ngcontent-%COMP%]   .countdown-value[_ngcontent-%COMP%] {\n  color: var(--tc-ok);\n}\n.timer-warning[_ngcontent-%COMP%] {\n  color: var(--tc-warning);\n}\n.timer-warning[_ngcontent-%COMP%]   .countdown-value[_ngcontent-%COMP%] {\n  color: var(--tc-warning);\n}\n.timer-critical[_ngcontent-%COMP%] {\n  color: var(--tc-critical);\n}\n.timer-critical[_ngcontent-%COMP%]   .countdown-value[_ngcontent-%COMP%] {\n  color: var(--tc-critical);\n}\n.timer-critical[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px color-mix(in srgb, var(--tc-critical) 40%, transparent);\n}\n.timer-expired[_ngcontent-%COMP%] {\n  color: var(--tc-critical);\n}\n.timer-expired[_ngcontent-%COMP%]   .countdown-value[_ngcontent-%COMP%] {\n  color: var(--tc-critical);\n}\n.timer-expired[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_blink-bg 1s infinite;\n}\n@keyframes _ngcontent-%COMP%_blink-bg {\n  0%, 100% {\n    background: var(--tc-surface-2);\n    box-shadow: 0 0 0 1px color-mix(in srgb, var(--tc-critical) 55%, transparent);\n  }\n  50% {\n    background: color-mix(in srgb, var(--tc-critical) 16%, var(--tc-surface-2));\n    box-shadow: 0 0 0 1px var(--tc-critical);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .timer-expired[_ngcontent-%COMP%], \n   .countdown-value.is-overtime[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=countdown-timer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountdownTimerComponent, [{
    type: Component,
    args: [{ selector: "app-countdown-timer", standalone: true, template: `<div class="countdown" [class]="levelClass()">
  <div class="countdown-header">
    <span class="countdown-label">{{ timer().label }}</span>
    @if (timer().level === 'VENCIDO') {
      <span class="badge-live">VENCIDO</span>
    } @else if (timer().level === 'CRITICO') {
      <span class="badge-live">CRITICO</span>
    }
  </div>

  <div class="countdown-value" [class.is-overtime]="isOvertime()">
    {{ display() }}
  </div>

  <div class="countdown-track">
    <div class="countdown-fill" [style.width.%]="progressPercent()"></div>
  </div>
</div>
`, styles: ['/* src/app/shared/countdown-timer/countdown-timer.component.css */\n:host {\n  display: block;\n}\n.countdown {\n  border-radius: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: var(--tc-surface-2);\n  border: 1px solid var(--tc-border);\n  backdrop-filter: blur(var(--tc-glass-blur, 0));\n  -webkit-backdrop-filter: blur(var(--tc-glass-blur, 0));\n  transition:\n    background-color 0.35s ease,\n    border-color 0.35s ease,\n    box-shadow 0.35s ease;\n}\n.countdown-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.25rem;\n}\n.countdown-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--tc-muted);\n}\n.badge-live {\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 0.1rem 0.45rem;\n  border-radius: 999px;\n  background: currentColor;\n  color: #fff;\n  letter-spacing: 0.04em;\n}\n.countdown-value {\n  font-variant-numeric: tabular-nums;\n  font-feature-settings: "tnum" 1;\n  font-size: 1.9rem;\n  font-weight: 700;\n  line-height: 1.1;\n  transition: color 0.3s ease, transform 0.15s ease;\n  will-change: transform;\n}\n.countdown-value.is-overtime {\n  animation: overtime-pop 0.4s ease;\n}\n@keyframes overtime-pop {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.08);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.countdown-track {\n  margin-top: 0.5rem;\n  height: 5px;\n  border-radius: 999px;\n  background: var(--tc-border);\n  overflow: hidden;\n}\n.countdown-fill {\n  height: 100%;\n  border-radius: 999px;\n  background: currentColor;\n  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.timer-ok {\n  color: var(--tc-ok);\n}\n.timer-ok .countdown-value {\n  color: var(--tc-ok);\n}\n.timer-warning {\n  color: var(--tc-warning);\n}\n.timer-warning .countdown-value {\n  color: var(--tc-warning);\n}\n.timer-critical {\n  color: var(--tc-critical);\n}\n.timer-critical .countdown-value {\n  color: var(--tc-critical);\n}\n.timer-critical {\n  box-shadow: 0 0 0 1px color-mix(in srgb, var(--tc-critical) 40%, transparent);\n}\n.timer-expired {\n  color: var(--tc-critical);\n}\n.timer-expired .countdown-value {\n  color: var(--tc-critical);\n}\n.timer-expired {\n  animation: blink-bg 1s infinite;\n}\n@keyframes blink-bg {\n  0%, 100% {\n    background: var(--tc-surface-2);\n    box-shadow: 0 0 0 1px color-mix(in srgb, var(--tc-critical) 55%, transparent);\n  }\n  50% {\n    background: color-mix(in srgb, var(--tc-critical) 16%, var(--tc-surface-2));\n    box-shadow: 0 0 0 1px var(--tc-critical);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .timer-expired,\n  .countdown-value.is-overtime {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=countdown-timer.component.css.map */\n'] }]
  }], () => [], { timer: [{ type: Input, args: [{ isSignal: true, alias: "timer", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountdownTimerComponent, { className: "CountdownTimerComponent", filePath: "src/app/shared/countdown-timer/countdown-timer.component.ts", lineNumber: 10 });
})();

// src/app/features/nfd-modal/nfd-modal.component.ts
var _c0 = ["modalRoot"];
function NfdModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275text(1, " Debe responder ambas preguntas antes de continuar. ");
    \u0275\u0275domElementEnd();
  }
}
var NfdModalComponent = class _NfdModalComponent {
  flightNumber = input.required(...ngDevMode ? [{ debugName: "flightNumber" }] : (
    /* istanbul ignore next */
    []
  ));
  answered = output();
  modalRoot = viewChild.required("modalRoot");
  bsModal;
  anticipado = signal(null, ...ngDevMode ? [{ debugName: "anticipado" }] : (
    /* istanbul ignore next */
    []
  ));
  correos = signal(null, ...ngDevMode ? [{ debugName: "correos" }] : (
    /* istanbul ignore next */
    []
  ));
  incomplete = signal(false, ...ngDevMode ? [{ debugName: "incomplete" }] : (
    /* istanbul ignore next */
    []
  ));
  ngAfterViewInit() {
    this.bsModal = new bootstrap.Modal(this.modalRoot().nativeElement, {
      backdrop: "static",
      keyboard: false
    });
  }
  show() {
    this.anticipado.set(null);
    this.correos.set(null);
    this.incomplete.set(false);
    this.bsModal?.show();
  }
  setAnticipado(value) {
    this.anticipado.set(value);
  }
  setCorreos(value) {
    this.correos.set(value);
  }
  confirm() {
    const a = this.anticipado();
    const c = this.correos();
    if (a === null || c === null) {
      this.incomplete.set(true);
      return;
    }
    this.answered.emit({ anticipado: a, correos: c });
    this.bsModal?.hide();
  }
  static \u0275fac = function NfdModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NfdModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NfdModalComponent, selectors: [["app-nfd-modal"]], viewQuery: function NfdModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.modalRoot, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { flightNumber: [1, "flightNumber"] }, outputs: { answered: "answered" }, decls: 31, vars: 18, consts: [["modalRoot", ""], ["tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "fade-in"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-clipboard-check", "me-2"], [1, "modal-body"], [1, "text-body-secondary", "small", "mb-4"], [1, "mb-4"], [1, "form-label", "fw-semibold"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-action", "flex-fill", 3, "click"], [1, "mb-2"], [1, "alert", "alert-warning", "py-2", "mt-3", "mb-0", "small"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-action", "w-100", 3, "click"]], template: function NfdModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1, 0)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275domElement(6, "i", 6);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 7)(9, "p", 8);
      \u0275\u0275text(10, ' Responda ambas preguntas para continuar. Si responde "Si" a cualquiera, se activara el temporizador de Tarja (15 minutos). ');
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 9)(12, "label", 10);
      \u0275\u0275text(13, "\xBFCuenta con Anticipado?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "div", 11)(15, "button", 12);
      \u0275\u0275domListener("click", function NfdModalComponent_Template_button_click_15_listener() {
        return ctx.setAnticipado(true);
      });
      \u0275\u0275text(16, " Si ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "button", 12);
      \u0275\u0275domListener("click", function NfdModalComponent_Template_button_click_17_listener() {
        return ctx.setAnticipado(false);
      });
      \u0275\u0275text(18, " No ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(19, "div", 13)(20, "label", 10);
      \u0275\u0275text(21, "\xBFCuenta con Correos?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "div", 11)(23, "button", 12);
      \u0275\u0275domListener("click", function NfdModalComponent_Template_button_click_23_listener() {
        return ctx.setCorreos(true);
      });
      \u0275\u0275text(24, " Si ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "button", 12);
      \u0275\u0275domListener("click", function NfdModalComponent_Template_button_click_25_listener() {
        return ctx.setCorreos(false);
      });
      \u0275\u0275text(26, " No ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(27, NfdModalComponent_Conditional_27_Template, 2, 0, "div", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "div", 15)(29, "button", 16);
      \u0275\u0275domListener("click", function NfdModalComponent_Template_button_click_29_listener() {
        return ctx.confirm();
      });
      \u0275\u0275text(30, " Completar NFD ");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Cuestionario NFD \u2014 Vuelo ", ctx.flightNumber(), " ");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("btn-success", ctx.anticipado() === true)("btn-outline-success", ctx.anticipado() !== true);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-secondary", ctx.anticipado() === false)("btn-outline-secondary", ctx.anticipado() !== false);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("btn-success", ctx.correos() === true)("btn-outline-success", ctx.correos() !== true);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-secondary", ctx.correos() === false)("btn-outline-secondary", ctx.correos() !== false);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.incomplete() ? 27 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NfdModalComponent, [{
    type: Component,
    args: [{ selector: "app-nfd-modal", standalone: true, template: '<div #modalRoot class="modal fade" tabindex="-1" aria-hidden="true">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content fade-in">\n      <div class="modal-header">\n        <h5 class="modal-title">\n          <i class="bi bi-clipboard-check me-2"></i>Cuestionario NFD &mdash; Vuelo {{ flightNumber() }}\n        </h5>\n      </div>\n\n      <div class="modal-body">\n        <p class="text-body-secondary small mb-4">\n          Responda ambas preguntas para continuar. Si responde "Si" a cualquiera, se activara el\n          temporizador de Tarja (15 minutos).\n        </p>\n\n        <div class="mb-4">\n          <label class="form-label fw-semibold">\xBFCuenta con Anticipado?</label>\n          <div class="d-flex gap-2">\n            <button\n              type="button"\n              class="btn btn-action flex-fill"\n              [class.btn-success]="anticipado() === true"\n              [class.btn-outline-success]="anticipado() !== true"\n              (click)="setAnticipado(true)"\n            >\n              Si\n            </button>\n            <button\n              type="button"\n              class="btn btn-action flex-fill"\n              [class.btn-secondary]="anticipado() === false"\n              [class.btn-outline-secondary]="anticipado() !== false"\n              (click)="setAnticipado(false)"\n            >\n              No\n            </button>\n          </div>\n        </div>\n\n        <div class="mb-2">\n          <label class="form-label fw-semibold">\xBFCuenta con Correos?</label>\n          <div class="d-flex gap-2">\n            <button\n              type="button"\n              class="btn btn-action flex-fill"\n              [class.btn-success]="correos() === true"\n              [class.btn-outline-success]="correos() !== true"\n              (click)="setCorreos(true)"\n            >\n              Si\n            </button>\n            <button\n              type="button"\n              class="btn btn-action flex-fill"\n              [class.btn-secondary]="correos() === false"\n              [class.btn-outline-secondary]="correos() !== false"\n              (click)="setCorreos(false)"\n            >\n              No\n            </button>\n          </div>\n        </div>\n\n        @if (incomplete()) {\n          <div class="alert alert-warning py-2 mt-3 mb-0 small">\n            Debe responder ambas preguntas antes de continuar.\n          </div>\n        }\n      </div>\n\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary btn-action w-100" (click)="confirm()">\n          Completar NFD\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n' }]
  }], null, { flightNumber: [{ type: Input, args: [{ isSignal: true, alias: "flightNumber", required: true }] }], answered: [{ type: Output, args: ["answered"] }], modalRoot: [{ type: ViewChild, args: ["modalRoot", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NfdModalComponent, { className: "NfdModalComponent", filePath: "src/app/features/nfd-modal/nfd-modal.component.ts", lineNumber: 18 });
})();

// src/app/features/flight-card/flight-card.component.ts
var _forTrack0 = ($index, $item) => $item.type;
function FlightCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2, "Sin carga ");
    \u0275\u0275elementEnd();
  }
}
function FlightCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2, "Urgente ");
    \u0275\u0275elementEnd();
  }
}
function FlightCardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.flight().origen);
  }
}
function FlightCardComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-countdown-timer", 20);
  }
  if (rf & 2) {
    const timer_r2 = ctx.$implicit;
    \u0275\u0275property("timer", timer_r2);
  }
}
function FlightCardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, FlightCardComponent_Conditional_12_For_2_Template, 1, 1, "app-countdown-timer", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.flight().timers);
  }
}
function FlightCardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Sin temporizadores activos.");
    \u0275\u0275elementEnd();
  }
}
function FlightCardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function FlightCardComponent_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "label", 22);
    \u0275\u0275text(2, " Hora real de arribo (ATA) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "input", 24);
    \u0275\u0275listener("ngModelChange", function FlightCardComponent_Case_16_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ataTime.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function FlightCardComponent_Case_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetAtaTimeToNow());
    });
    \u0275\u0275element(6, "i", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function FlightCardComponent_Case_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.registerAta());
    });
    \u0275\u0275element(8, "i", 28);
    \u0275\u0275text(9, "Registrar ATA ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", "ata-time-" + ctx_r0.flight().id);
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "ata-time-" + ctx_r0.flight().id)("ngModel", ctx_r0.ataTime())("disabled", ctx_r0.busy());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.busy());
  }
}
function FlightCardComponent_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function FlightCardComponent_Case_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDescarga());
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2, "Confirmar Termino de Descarga ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.busy());
  }
}
function FlightCardComponent_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function FlightCardComponent_Case_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openNfdModal());
    });
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275text(2, "Modal NFD ");
    \u0275\u0275elementEnd();
  }
}
function FlightCardComponent_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function FlightCardComponent_Case_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.completeTarja());
    });
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2, "Realizar la Tarja ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.busy());
  }
}
function FlightCardComponent_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2, "Proceso completado");
    \u0275\u0275elementEnd();
  }
}
var FlightCardComponent = class _FlightCardComponent {
  flightService = inject(FlightService);
  flight = input.required(...ngDevMode ? [{ debugName: "flight" }] : (
    /* istanbul ignore next */
    []
  ));
  statusLabels = STATUS_LABELS;
  isUrgent = computed(() => isFlightUrgent(this.flight()), ...ngDevMode ? [{ debugName: "isUrgent" }] : (
    /* istanbul ignore next */
    []
  ));
  nfdModal = viewChild(NfdModalComponent, ...ngDevMode ? [{ debugName: "nfdModal" }] : (
    /* istanbul ignore next */
    []
  ));
  lastStatus = null;
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Hora real de ATA (HH:mm), editable por el operador antes de registrar. */
  ataTime = signal(this.nowHHmm(), ...ngDevMode ? [{ debugName: "ataTime" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const current = this.flight();
      if (current.status === "ESPERANDO_NFD" && this.lastStatus !== "ESPERANDO_NFD") {
        this.nfdModal()?.show();
      }
      if (current.status === "ESPERANDO_ATA" && this.lastStatus !== "ESPERANDO_ATA") {
        this.ataTime.set(this.nowHHmm());
      }
      this.lastStatus = current.status;
    });
  }
  openNfdModal() {
    this.nfdModal()?.show();
  }
  resetAtaTimeToNow() {
    this.ataTime.set(this.nowHHmm());
  }
  registerAta() {
    const ata = this.combineTodayWithTime(this.ataTime());
    this.run(() => this.flightService.registerAta(this.flight().id, ata));
  }
  confirmDescarga() {
    this.run(() => this.flightService.confirmDescarga(this.flight().id));
  }
  submitNfd(answers) {
    this.run(() => this.flightService.submitNfd(this.flight().id, answers.anticipado, answers.correos));
  }
  completeTarja() {
    this.run(() => this.flightService.completeTarja(this.flight().id));
  }
  run(action) {
    this.busy.set(true);
    this.errorMessage.set(null);
    action().subscribe({
      next: () => this.busy.set(false),
      error: (err) => {
        this.busy.set(false);
        this.errorMessage.set(err?.error?.message ?? "No se pudo completar la accion");
      }
    });
  }
  nowHHmm() {
    const d = /* @__PURE__ */ new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  /** Combina el HH:mm elegido con la fecha de hoy (zona horaria local del navegador). */
  combineTodayWithTime(hhmm) {
    const [hours, minutes] = hhmm.split(":").map(Number);
    const d = /* @__PURE__ */ new Date();
    d.setHours(hours, minutes, 0, 0);
    return d.toISOString();
  }
  static \u0275fac = function FlightCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlightCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlightCardComponent, selectors: [["app-flight-card"]], viewQuery: function FlightCardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.nfdModal, NfdModalComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { flight: [1, "flight"] }, decls: 22, vars: 19, consts: [[1, "flight-card", "fade-in"], [1, "flight-card-header"], [1, "flight-id"], [1, "flight-number"], [1, "prefix-badge"], ["title", "Flujo simplificado: termina al registrar el ATA", 1, "carga-badge"], ["title", "Cronometro a 5 minutos o menos", 1, "urgent-badge"], [1, "status-badge"], [1, "flight-origen"], [1, "timers-grid"], [1, "text-body-secondary", "small", "mb-0", "py-2"], [1, "alert", "alert-danger", "py-2", "small", "mt-2", "mb-0"], [1, "flight-card-actions"], ["type", "button", 1, "btn", "btn-primary", "btn-action", "w-100", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-action", "w-100"], [1, "text-success", "small"], [3, "answered", "flightNumber"], [1, "bi", "bi-box", "me-1"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"], [1, "bi", "bi-geo-alt", "me-1"], [3, "timer"], [1, "ata-time-picker"], [1, "form-label", "small", "fw-semibold", "mb-1", 3, "for"], [1, "d-flex", "gap-2"], ["type", "time", 1, "form-control", "form-control-lg", 3, "ngModelChange", "id", "ngModel", "disabled"], ["type", "button", "title", "Usar la hora actual", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-clock-history"], ["type", "button", 1, "btn", "btn-primary", "btn-action", "w-100", 3, "click", "disabled"], [1, "bi", "bi-check2-circle", "me-2"], [1, "bi", "bi-box-seam", "me-2"], ["type", "button", 1, "btn", "btn-primary", "btn-action", "w-100", 3, "click"], [1, "bi", "bi-clipboard-check", "me-2"], [1, "bi", "bi-file-earmark-check", "me-2"], [1, "bi", "bi-check-circle-fill", "me-1"]], template: function FlightCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, FlightCardComponent_Conditional_7_Template, 3, 0, "span", 5);
      \u0275\u0275conditionalCreate(8, FlightCardComponent_Conditional_8_Template, 3, 0, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, FlightCardComponent_Conditional_11_Template, 3, 1, "div", 8);
      \u0275\u0275conditionalCreate(12, FlightCardComponent_Conditional_12_Template, 3, 0, "div", 9)(13, FlightCardComponent_Conditional_13_Template, 2, 0, "p", 10);
      \u0275\u0275conditionalCreate(14, FlightCardComponent_Conditional_14_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275conditionalCreate(16, FlightCardComponent_Case_16_Template, 10, 6)(17, FlightCardComponent_Case_17_Template, 3, 1, "button", 13)(18, FlightCardComponent_Case_18_Template, 3, 0, "button", 14)(19, FlightCardComponent_Case_19_Template, 3, 1, "button", 13)(20, FlightCardComponent_Case_20_Template, 3, 0, "span", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "app-nfd-modal", 16);
      \u0275\u0275listener("answered", function FlightCardComponent_Template_app_nfd_modal_answered_21_listener($event) {
        return ctx.submitNfd($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_13_0;
      \u0275\u0275classProp("is-terminal", ctx.flight().status === "COMPLETADO")("is-urgent", ctx.isUrgent());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.flight().flightNumber);
      \u0275\u0275advance();
      \u0275\u0275classProp("prefix-la", ctx.flight().prefix === "LA")("prefix-uc", ctx.flight().prefix === "UC");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.flight().prefix, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.flight().conCarga ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isUrgent() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("data-status", ctx.flight().status);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.statusLabels[ctx.flight().status]);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.flight().origen ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.flight().timers.length > 0 ? 12 : 13);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMessage() ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_13_0 = ctx.flight().status) === "ESPERANDO_ATA" ? 16 : tmp_13_0 === "EN_DESCARGA" ? 17 : tmp_13_0 === "ESPERANDO_NFD" ? 18 : tmp_13_0 === "EN_TARJA" ? 19 : tmp_13_0 === "COMPLETADO" ? 20 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("flightNumber", ctx.flight().flightNumber);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CountdownTimerComponent, NfdModalComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.flight-card[_ngcontent-%COMP%] {\n  background: var(--tc-surface);\n  border: 1px solid var(--tc-border);\n  border-radius: 1rem;\n  padding: 1.1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  backdrop-filter: blur(var(--tc-glass-blur, 0));\n  -webkit-backdrop-filter: blur(var(--tc-glass-blur, 0));\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  transition:\n    border-color 0.3s ease,\n    transform 0.2s ease,\n    box-shadow 0.3s ease;\n}\n.flight-card[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--tc-primary) 45%, var(--tc-border));\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);\n}\n.flight-origen[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--tc-muted);\n  margin-top: -0.4rem;\n}\n.flight-card.is-terminal[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.flight-card.is-urgent[_ngcontent-%COMP%] {\n  border-color: var(--tc-critical);\n  box-shadow: 0 0 0 1px var(--tc-critical), 0 10px 28px color-mix(in srgb, var(--tc-critical) 25%, transparent);\n}\n.urgent-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.4rem;\n  background: var(--tc-critical);\n  color: #fff;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_urgent-badge-pulse 1.1s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_urgent-badge-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.55;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .urgent-badge[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.flight-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.flight-id[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.flight-number[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  font-variant-numeric: tabular-nums;\n}\n.prefix-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.15rem 0.45rem;\n  border-radius: 0.4rem;\n}\n.carga-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 0.15rem 0.45rem;\n  border-radius: 0.4rem;\n  background: var(--tc-surface-2);\n  color: var(--tc-muted);\n  white-space: nowrap;\n}\n.prefix-la[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--tc-primary) 20%, transparent);\n  color: var(--tc-primary-2);\n}\n.prefix-uc[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #a855f7 20%, transparent);\n  color: #c4b5fd;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.3rem 0.6rem;\n  border-radius: 999px;\n  background: var(--tc-surface-2);\n  color: var(--tc-muted);\n  white-space: nowrap;\n}\n.status-badge[data-status=COMPLETADO][_ngcontent-%COMP%] {\n  color: var(--tc-ok);\n}\n.status-badge[data-status=ESPERANDO_NFD][_ngcontent-%COMP%] {\n  color: var(--tc-warning);\n}\n.timers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 0.6rem;\n}\n.flight-card-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 0.25rem;\n}\n.ata-time-picker[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n}\n.ata-time-picker[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=flight-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlightCardComponent, [{
    type: Component,
    args: [{ selector: "app-flight-card", standalone: true, imports: [FormsModule, CountdownTimerComponent, NfdModalComponent], template: `<div
  class="flight-card fade-in"
  [class.is-terminal]="flight().status === 'COMPLETADO'"
  [class.is-urgent]="isUrgent()"
>
  <div class="flight-card-header">
    <div class="flight-id">
      <span class="flight-number">{{ flight().flightNumber }}</span>
      <span class="prefix-badge" [class.prefix-la]="flight().prefix === 'LA'" [class.prefix-uc]="flight().prefix === 'UC'">
        {{ flight().prefix }}
      </span>
      @if (!flight().conCarga) {
        <span class="carga-badge" title="Flujo simplificado: termina al registrar el ATA">
          <i class="bi bi-box me-1"></i>Sin carga
        </span>
      }
      @if (isUrgent()) {
        <span class="urgent-badge" title="Cronometro a 5 minutos o menos">
          <i class="bi bi-exclamation-triangle-fill me-1"></i>Urgente
        </span>
      }
    </div>
    <span class="status-badge" [attr.data-status]="flight().status">{{ statusLabels[flight().status] }}</span>
  </div>

  @if (flight().origen) {
    <div class="flight-origen"><i class="bi bi-geo-alt me-1"></i>{{ flight().origen }}</div>
  }

  @if (flight().timers.length > 0) {
    <div class="timers-grid">
      @for (timer of flight().timers; track timer.type) {
        <app-countdown-timer [timer]="timer" />
      }
    </div>
  } @else {
    <p class="text-body-secondary small mb-0 py-2">Sin temporizadores activos.</p>
  }

  @if (errorMessage()) {
    <div class="alert alert-danger py-2 small mt-2 mb-0">{{ errorMessage() }}</div>
  }

  <div class="flight-card-actions">
    @switch (flight().status) {
      @case ('ESPERANDO_ATA') {
        <div class="ata-time-picker">
          <label [for]="'ata-time-' + flight().id" class="form-label small fw-semibold mb-1">
            Hora real de arribo (ATA)
          </label>
          <div class="d-flex gap-2">
            <input
              [id]="'ata-time-' + flight().id"
              type="time"
              class="form-control form-control-lg"
              [ngModel]="ataTime()"
              (ngModelChange)="ataTime.set($event)"
              [disabled]="busy()"
            />
            <button
              type="button"
              class="btn btn-outline-secondary"
              title="Usar la hora actual"
              [disabled]="busy()"
              (click)="resetAtaTimeToNow()"
            >
              <i class="bi bi-clock-history"></i>
            </button>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-action w-100" [disabled]="busy()" (click)="registerAta()">
          <i class="bi bi-check2-circle me-2"></i>Registrar ATA
        </button>
      }
      @case ('EN_DESCARGA') {
        <button type="button" class="btn btn-primary btn-action w-100" [disabled]="busy()" (click)="confirmDescarga()">
          <i class="bi bi-box-seam me-2"></i>Confirmar Termino de Descarga
        </button>
      }
      @case ('ESPERANDO_NFD') {
        <button type="button" class="btn btn-primary btn-action w-100" (click)="openNfdModal()">
          <i class="bi bi-clipboard-check me-2"></i>Modal NFD
        </button>
      }
      @case ('EN_TARJA') {
        <button type="button" class="btn btn-primary btn-action w-100" [disabled]="busy()" (click)="completeTarja()">
          <i class="bi bi-file-earmark-check me-2"></i>Realizar la Tarja
        </button>
      }
      @case ('COMPLETADO') {
        <span class="text-success small"><i class="bi bi-check-circle-fill me-1"></i>Proceso completado</span>
      }
    }
  </div>
</div>

<app-nfd-modal [flightNumber]="flight().flightNumber" (answered)="submitNfd($event)" />
`, styles: ["/* src/app/features/flight-card/flight-card.component.css */\n:host {\n  display: block;\n}\n.flight-card {\n  background: var(--tc-surface);\n  border: 1px solid var(--tc-border);\n  border-radius: 1rem;\n  padding: 1.1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  backdrop-filter: blur(var(--tc-glass-blur, 0));\n  -webkit-backdrop-filter: blur(var(--tc-glass-blur, 0));\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  transition:\n    border-color 0.3s ease,\n    transform 0.2s ease,\n    box-shadow 0.3s ease;\n}\n.flight-card:hover {\n  border-color: color-mix(in srgb, var(--tc-primary) 45%, var(--tc-border));\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);\n}\n.flight-origen {\n  font-size: 0.72rem;\n  color: var(--tc-muted);\n  margin-top: -0.4rem;\n}\n.flight-card.is-terminal {\n  opacity: 0.7;\n}\n.flight-card.is-urgent {\n  border-color: var(--tc-critical);\n  box-shadow: 0 0 0 1px var(--tc-critical), 0 10px 28px color-mix(in srgb, var(--tc-critical) 25%, transparent);\n}\n.urgent-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.4rem;\n  background: var(--tc-critical);\n  color: #fff;\n  white-space: nowrap;\n  animation: urgent-badge-pulse 1.1s ease-in-out infinite;\n}\n@keyframes urgent-badge-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.55;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .urgent-badge {\n    animation: none;\n  }\n}\n.flight-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.flight-id {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.flight-number {\n  font-size: 1.35rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  font-variant-numeric: tabular-nums;\n}\n.prefix-badge {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.15rem 0.45rem;\n  border-radius: 0.4rem;\n}\n.carga-badge {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 0.15rem 0.45rem;\n  border-radius: 0.4rem;\n  background: var(--tc-surface-2);\n  color: var(--tc-muted);\n  white-space: nowrap;\n}\n.prefix-la {\n  background: color-mix(in srgb, var(--tc-primary) 20%, transparent);\n  color: var(--tc-primary-2);\n}\n.prefix-uc {\n  background: color-mix(in srgb, #a855f7 20%, transparent);\n  color: #c4b5fd;\n}\n.status-badge {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.3rem 0.6rem;\n  border-radius: 999px;\n  background: var(--tc-surface-2);\n  color: var(--tc-muted);\n  white-space: nowrap;\n}\n.status-badge[data-status=COMPLETADO] {\n  color: var(--tc-ok);\n}\n.status-badge[data-status=ESPERANDO_NFD] {\n  color: var(--tc-warning);\n}\n.timers-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 0.6rem;\n}\n.flight-card-actions {\n  margin-top: auto;\n  padding-top: 0.25rem;\n}\n.ata-time-picker {\n  margin-bottom: 0.6rem;\n}\n.ata-time-picker input[type=time] {\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=flight-card.component.css.map */\n"] }]
  }], () => [], { flight: [{ type: Input, args: [{ isSignal: true, alias: "flight", required: true }] }], nfdModal: [{ type: ViewChild, args: [forwardRef(() => NfdModalComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlightCardComponent, { className: "FlightCardComponent", filePath: "src/app/features/flight-card/flight-card.component.ts", lineNumber: 15 });
})();

export {
  FlightCardComponent
};
//# sourceMappingURL=chunk-IHEX7OUW.js.map
