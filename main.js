import {
  AuthService
} from "./chunk-RLGQ6OG6.js";
import {
  Component,
  Injectable,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  computed,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  signal,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A7NZCF3Z.js";

// src/app/core/guards/auth.guard.ts
var authGuard = async () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  while (auth.loading()) {
    await new Promise((resolve) => setTimeout(resolve, 30));
  }
  if (auth.session()) {
    return true;
  }
  return router.parseUrl("/login");
};

// src/app/app.routes.ts
var routes = [
  { path: "", pathMatch: "full", redirectTo: "torre-control" },
  {
    path: "login",
    loadComponent: () => import("./chunk-ES346OCZ.js").then((m) => m.LoginComponent)
  },
  {
    path: "torre-control",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-4FNCXQND.js").then((m) => m.TorreControlComponent)
  },
  {
    path: "nuevo-vuelo",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-R6CJGPE7.js").then((m) => m.VueloIngresoComponent)
  },
  {
    path: "calendario",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-CV7YPTT2.js").then((m) => m.CalendarioComponent)
  },
  { path: "**", redirectTo: "torre-control" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.accessToken;
  if (!token) {
    return next(req);
  }
  return next(req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/core/services/theme.service.ts
var STORAGE_KEY = "tc-theme";
var ThemeService = class _ThemeService {
  theme = signal(this.readInitialTheme(), ...ngDevMode ? [{ debugName: "theme" }] : (
    /* istanbul ignore next */
    []
  ));
  isDark = computed(() => this.theme() === "dark", ...ngDevMode ? [{ debugName: "isDark" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.applyTheme(this.theme());
  }
  toggle() {
    const next = this.isDark() ? "light" : "dark";
    this.theme.set(next);
    this.applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }
  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  readInitialTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" ? "light" : "dark";
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/app.ts
function App_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2, "Calendario ");
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function App_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275element(3, "i", 11);
    \u0275\u0275text(4, "Salir ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.auth.session()) == null ? null : tmp_1_0.user == null ? null : tmp_1_0.user.email);
  }
}
var App = class _App {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  router = inject(Router);
  async logout() {
    await this.auth.signOut();
    this.router.navigateByUrl("/login");
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 11, vars: 7, consts: [[1, "navbar", "navbar-tc", "navbar-expand", "sticky-top", "py-3"], [1, "container-fluid"], ["routerLink", "/torre-control", 1, "navbar-brand", "fw-bold", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-broadcast", "text-primary"], [1, "d-flex", "align-items-center", "gap-3"], ["routerLink", "/calendario", "routerLinkActive", "active", 1, "nav-link-calendario", "d-none", "d-md-inline-flex", "align-items-center", "gap-1"], ["type", "button", "title", "Cambiar tema", 1, "btn", "btn-outline-secondary", "btn-sm", "theme-toggle", 3, "click"], [1, "bi"], [1, "bi", "bi-calendar3"], [1, "text-body-secondary", "small", "d-none", "d-sm-inline"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-1"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, " KPI ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, App_Conditional_6_Template, 3, 0, "a", 5);
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function App_Template_button_click_7_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, App_Conditional_9_Template, 5, 1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(10, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.auth.session() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.theme.isDark() ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
      \u0275\u0275advance();
      \u0275\u0275classProp("bi-sun-fill", ctx.theme.isDark())("bi-moon-stars-fill", !ctx.theme.isDark());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.session() ? 9 : -1);
    }
  }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n.nav-link-calendario[_ngcontent-%COMP%] {\n  color: var(--tc-muted);\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 0.35rem 0.7rem;\n  border-radius: 0.5rem;\n  transition: color 0.2s ease, background-color 0.2s ease;\n}\n.nav-link-calendario[_ngcontent-%COMP%]:hover {\n  color: var(--tc-text);\n  background: var(--tc-surface-2);\n}\n.nav-link-calendario.active[_ngcontent-%COMP%] {\n  color: var(--tc-primary);\n  background: color-mix(in srgb, var(--tc-primary) 14%, transparent);\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, RouterLink, RouterLinkActive], template: `<nav class="navbar navbar-tc navbar-expand sticky-top py-3">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold d-flex align-items-center gap-2" routerLink="/torre-control">
      <i class="bi bi-broadcast text-primary"></i>
      KPI
    </a>

    <div class="d-flex align-items-center gap-3">
      @if (auth.session()) {
        <a routerLink="/calendario" routerLinkActive="active" class="nav-link-calendario d-none d-md-inline-flex align-items-center gap-1">
          <i class="bi bi-calendar3"></i>Calendario
        </a>
      }

      <button
        type="button"
        class="btn btn-outline-secondary btn-sm theme-toggle"
        (click)="theme.toggle()"
        [attr.aria-label]="theme.isDark() ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
        title="Cambiar tema"
      >
        <i class="bi" [class.bi-sun-fill]="theme.isDark()" [class.bi-moon-stars-fill]="!theme.isDark()"></i>
      </button>

      @if (auth.session()) {
        <span class="text-body-secondary small d-none d-sm-inline">{{ auth.session()?.user?.email }}</span>
        <button type="button" class="btn btn-outline-secondary btn-sm" (click)="logout()">
          <i class="bi bi-box-arrow-right me-1"></i>Salir
        </button>
      }
    </div>
  </div>
</nav>

<router-outlet />
`, styles: ["/* src/app/app.css */\n.nav-link-calendario {\n  color: var(--tc-muted);\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 0.35rem 0.7rem;\n  border-radius: 0.5rem;\n  transition: color 0.2s ease, background-color 0.2s ease;\n}\n.nav-link-calendario:hover {\n  color: var(--tc-text);\n  background: var(--tc-surface-2);\n}\n.nav-link-calendario.active {\n  color: var(--tc-primary);\n  background: color-mix(in srgb, var(--tc-primary) 14%, transparent);\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
