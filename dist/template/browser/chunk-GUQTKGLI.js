import {
  LanguageSelectorComponent
} from "./chunk-CMWWECF4.js";
import {
  TranslatePipe
} from "./chunk-42UJGEGX.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-NAWYXTZ5.js";
import {
  AuthService,
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  Router,
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/login/login.component.ts
function LoginComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.usernameRequired"), "\n");
  }
}
function LoginComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.passwordRequired"), "\n");
  }
}
function LoginComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.signIn"));
  }
}
function LoginComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "login.signingIn"), " ");
  }
}
var LoginComponent = class _LoginComponent {
  router;
  fb;
  authService;
  routes = routes;
  show_password = true;
  loginForm;
  isLoading = false;
  errorMessage = "";
  constructor(router, fb, authService) {
    this.router = router;
    this.fb = fb;
    this.authService = authService;
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      rememberMe: [false]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    const { username, password, rememberMe } = this.loginForm.value;
    this.authService.authenticate(username, password, rememberMe).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log("Login successful", response);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || "\xC9chec de la connexion. Veuillez v\xE9rifier vos identifiants.";
        console.error("Login error", error);
      }
    });
  }
  // Méthode pour la compatibilité avec l'ancien code
  redirectPage() {
    this.router.navigate([routes.index]);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 57, vars: 34, consts: [[1, "main-wrapper", "auth-bg"], [1, "container-fuild"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-lg-4", "mx-auto"], [1, "d-flex", "justify-content-center", "align-items-center", 3, "ngSubmit", "formGroup"], [1, "d-flex", "flex-column", "justify-content-lg-center", "p-4", "p-lg-0", "pb-0", "flex-fill"], [1, "mx-auto", "mb-5", "text-center"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid", "mb-3"], [1, "d-flex", "justify-content-end"], [1, "card", "border-0", "p-lg-3", "shadow-lg"], [1, "card-body"], [1, "text-center", "mb-3"], [1, "mb-2"], [1, "mb-0"], [1, "mb-3"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "border-end-0"], [1, "isax", "isax-user"], ["type", "text", "formControlName", "username", 1, "form-control", "border-start-0", "ps-0", 3, "placeholder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "pass-group", "input-group"], [1, "isax", "isax-lock"], ["formControlName", "password", 1, "pass-inputs", "form-control", "border-start-0", "ps-0", 3, "type", "placeholder"], [1, "isax", "toggle-password", 3, "click", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-check-md", "mb-0"], ["id", "remember_me", "type", "checkbox", "formControlName", "rememberMe", 1, "form-check-input"], ["for", "remember_me", 1, "form-check-label", "mt-0"], [1, "text-end"], [3, "routerLink"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "mb-1"], ["type", "submit", 1, "btn", "bg-primary-gradient", "text-white", "w-100", 3, "disabled"], [4, "ngIf"], [1, "text-danger", "small", "mt-1"], [1, "alert", "alert-danger", "py-2", "mb-3"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementStart(9, "div", 9);
      \u0275\u0275element(10, "app-language-selector");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "h5", 13);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 14);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 15)(21, "label", 16);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 17)(25, "span", 18);
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 20);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, LoginComponent_div_29_Template, 3, 3, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 15)(31, "label", 16);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 22)(35, "span", 18);
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 24);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementStart(39, "span", 25);
      \u0275\u0275listener("click", function LoginComponent_Template_span_click_39_listener() {
        return ctx.show_password = !ctx.show_password;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, LoginComponent_div_40_Template, 3, 3, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 26)(42, "div", 27)(43, "div", 28);
      \u0275\u0275element(44, "input", 29);
      \u0275\u0275elementStart(45, "label", 30);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 31)(49, "a", 32);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(52, LoginComponent_div_52_Template, 2, 1, "div", 33);
      \u0275\u0275elementStart(53, "div", 34)(54, "button", 35);
      \u0275\u0275template(55, LoginComponent_span_55_Template, 3, 3, "span", 36)(56, LoginComponent_span_56_Template, 4, 3, "span", 36);
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_10_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "login.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "login.subtitle"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 22, "login.username"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 24, "login.usernamePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.loginForm.get("username")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("username")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 26, "login.password"));
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.show_password ? "password" : "text")("placeholder", \u0275\u0275pipeBind1(38, 28, "login.passwordPlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.show_password === true ? "toggle-password isax-eye-slash" : "toggle-password isax-eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.loginForm.get("password")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.loginForm.get("password")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 30, "login.rememberMe"));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.forgot_password);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 32, "login.forgotPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LanguageSelectorComponent, TranslatePipe], styles: ["\n\n.right-side-views[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, RouterLink, ReactiveFormsModule, TranslatePipe, LanguageSelectorComponent], template: `<div class="main-wrapper auth-bg">
  <div class="container-fuild">
    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div class="col-lg-4 mx-auto">
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
              <div class="mx-auto mb-5 text-center">
                <img src="assets/img/logo.svg" class="img-fluid mb-3" alt="Logo">
                <div class="d-flex justify-content-end">
                  <app-language-selector></app-language-selector>
                </div>
              </div>
              <div class="card border-0 p-lg-3 shadow-lg">
                <div class="card-body">
<div class="text-center mb-3">
  <h5 class="mb-2">{{ 'login.title' | translate }}</h5>
  <p class="mb-0">{{ 'login.subtitle' | translate }}</p>
</div>
                  <div class="mb-3">
                    <label class="form-label">{{ 'login.username' | translate }}</label>
                    <div class="input-group">
                      <span class="input-group-text border-end-0">
                        <i class="isax isax-user"></i>
                      </span>
                      <input type="text" formControlName="username" class="form-control border-start-0 ps-0" [placeholder]="'login.usernamePlaceholder' | translate">
                    </div>
<div *ngIf="loginForm.get('username')?.invalid && loginForm.get('username')?.touched" class="text-danger small mt-1">
  {{ 'login.usernameRequired' | translate }}
</div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">{{ 'login.password' | translate }}</label>
                    <div class="pass-group input-group">
                      <span class="input-group-text border-end-0">
                        <i class="isax isax-lock"></i>
                      </span>
                      <input [type]="show_password ? 'password' : 'text'" formControlName="password" class="pass-inputs form-control border-start-0 ps-0" [placeholder]="'login.passwordPlaceholder' | translate">
                      <span class="isax toggle-password" (click)="show_password = !show_password"
                        [ngClass]="
                        show_password === true
                          ? 'toggle-password isax-eye-slash'
                          : 'toggle-password isax-eye'
                      "></span>
                    </div>
<div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" class="text-danger small mt-1">
  {{ 'login.passwordRequired' | translate }}
</div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                      <div class="form-check form-check-md mb-0">
                        <input class="form-check-input" id="remember_me" type="checkbox" formControlName="rememberMe">
                        <label for="remember_me" class="form-check-label mt-0">{{ 'login.rememberMe' | translate }}</label>
                      </div>
                    </div>
                    <div class="text-end">
                      <a [routerLink]="routes.forgot_password">{{ 'login.forgotPassword' | translate }}</a>
                    </div>
                  </div>
                  <!-- Error message -->
                  <div *ngIf="errorMessage" class="alert alert-danger py-2 mb-3">
                    {{ errorMessage }}
                  </div>
                  
                  <div class="mb-1">
<button type="submit" class="btn bg-primary-gradient text-white w-100" [disabled]="loginForm.invalid || isLoading">
  <span *ngIf="!isLoading">{{ 'login.signIn' | translate }}</span>
  <span *ngIf="isLoading">
    <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
    {{ 'login.signingIn' | translate }}
  </span>
</button>
                  </div>
                  <!-- <div class="login-or">
                    <span class="span-or">{{ 'login.or' | translate }}</span>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-center flex-wrap">
                      <div class="text-center me-2 flex-fill">
                        <a href="javascript:void(0);"
                          class="br-10 p-1 btn btn-light d-flex align-items-center justify-content-center">
                          <img class="img-fluid m-1" src="assets/img/icons/facebook-logo.svg" alt="Facebook">
                        </a>
                      </div>
                      <div class="text-center me-2 flex-fill">
                        <a href="javascript:void(0);"
                          class="br-10 p-1 btn btn-light d-flex align-items-center justify-content-center">
                          <img class="img-fluid m-1" src="assets/img/icons/google-logo.svg" alt="Google">
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <h6 class="fw-normal fs-14 text-dark mb-0">{{ 'login.dontHaveAccount' | translate }}
                      <a [routerLink]="routes.register" class="hover-a"> {{ 'login.register' | translate }}</a>
                    </h6>
                  </div> -->
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/auth/login/login.component.scss */\n.right-side-views {\n  display: none;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: FormBuilder }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-GUQTKGLI.js.map
