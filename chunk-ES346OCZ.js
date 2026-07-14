import {
  AuthService
} from "./chunk-RLGQ6OG6.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OEBDVQ23.js";
import {
  Component,
  Router,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A7NZCF3Z.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
var LoginComponent = class _LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  form = new FormGroup({
    email: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl("", { nonNullable: true, validators: [Validators.required] })
  });
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  async submit() {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.errorMessage.set(null);
    const { email, password } = this.form.getRawValue();
    const error = await this.auth.signIn(email, password);
    this.submitting.set(false);
    if (error) {
      this.errorMessage.set("Credenciales invalidas o cuenta inactiva.");
      return;
    }
    this.router.navigateByUrl("/torre-control");
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 21, vars: 4, consts: [[1, "login-shell", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "fade-in", "p-4", "p-md-5", 2, "max-width", "420px", "width", "100%"], [1, "text-center", "mb-4"], [1, "bi", "bi-broadcast", "display-5", "text-primary"], [1, "h4", "mt-3", "mb-1"], [1, "text-body-secondary", "small", "mb-0"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "username", 1, "form-control", "form-control-lg"], [1, "mb-4"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control", "form-control-lg"], [1, "alert", "alert-danger", "py-2", "small"], ["type", "submit", 1, "btn", "btn-primary", "btn-action", "w-100", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "h1", 4);
      \u0275\u0275text(5, "KPI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Acceso de operadores y supervisores");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, "Correo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "label", 11);
      \u0275\u0275text(15, "Contrasena");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, LoginComponent_Conditional_17_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(18, "button", 14);
      \u0275\u0275conditionalCreate(19, LoginComponent_Conditional_19_Template, 1, 0, "span", 15);
      \u0275\u0275text(20, " Ingresar ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.errorMessage() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitting() ? 19 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n.login-shell[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [ReactiveFormsModule], template: '<div class="login-shell d-flex align-items-center justify-content-center">\n  <div class="card fade-in p-4 p-md-5" style="max-width: 420px; width: 100%;">\n    <div class="text-center mb-4">\n      <i class="bi bi-broadcast display-5 text-primary"></i>\n      <h1 class="h4 mt-3 mb-1">KPI</h1>\n      <p class="text-body-secondary small mb-0">Acceso de operadores y supervisores</p>\n    </div>\n\n    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>\n      <div class="mb-3">\n        <label for="email" class="form-label">Correo</label>\n        <input\n          id="email"\n          type="email"\n          class="form-control form-control-lg"\n          formControlName="email"\n          autocomplete="username"\n        />\n      </div>\n\n      <div class="mb-4">\n        <label for="password" class="form-label">Contrasena</label>\n        <input\n          id="password"\n          type="password"\n          class="form-control form-control-lg"\n          formControlName="password"\n          autocomplete="current-password"\n        />\n      </div>\n\n      @if (errorMessage()) {\n        <div class="alert alert-danger py-2 small">{{ errorMessage() }}</div>\n      }\n\n      <button type="submit" class="btn btn-primary btn-action w-100" [disabled]="form.invalid || submitting()">\n        @if (submitting()) {\n          <span class="spinner-border spinner-border-sm me-2"></span>\n        }\n        Ingresar\n      </button>\n    </form>\n  </div>\n</div>\n', styles: ["/* src/app/features/login/login.component.css */\n.login-shell {\n  min-height: 100dvh;\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-ES346OCZ.js.map
