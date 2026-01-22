import {
  FormControl,
  FormGroup,
  Validators
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
  NgClass
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/register/register.component.ts
var RegisterComponent = class _RegisterComponent {
  router;
  auth;
  isValidConfirmPassword = false;
  CustomControler;
  routes = routes;
  show_password = [false];
  togglePassword(index) {
    this.show_password[index] = !this.show_password[index];
  }
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });
  get f() {
    return this.form.controls;
  }
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
  }
  submit() {
    if (this.form.value.password != this.form.value.confirmPassword) {
      this.isValidConfirmPassword = true;
    } else {
      this.isValidConfirmPassword = false;
      this.auth.login();
    }
  }
  redirectPage() {
    this.router.navigate([routes.login]);
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 77, vars: 5, consts: [[1, "main-wrapper", "auth-bg"], [1, "container-fuild"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-lg-4", "mx-auto"], [1, "d-flex", "justify-content-center", "align-items-center", 3, "ngSubmit"], [1, "d-flex", "flex-column", "justify-content-lg-center", "p-4", "p-lg-0", "pt-lg-4", "pb-0", "flex-fill"], [1, "mx-auto", "mb-5", "text-center"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "card", "border-0", "p-lg-3", "shadow-lg", "rounded-2"], [1, "card-body"], [1, "text-center", "mb-3"], [1, "mb-2"], [1, "mb-0"], [1, "mb-3"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "border-end-0"], [1, "isax", "isax-profile"], ["type", "text", "value", "", "placeholder", "Name", 1, "form-control", "border-start-0", "ps-0"], [1, "isax", "isax-sms-notification"], ["type", "text", "value", "", "placeholder", "Enter Email Address", 1, "form-control", "border-start-0", "ps-0"], [1, "pass-group", "input-group"], [1, "isax", "isax-lock"], [1, "isax", "toggle-password", 3, "click", "ngClass"], ["type", "password", "placeholder", "****************", 1, "pass-input", "form-control", "border-start-0", "ps-0", 3, "type"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-check-md", "mb-0"], ["id", "remember_me", "type", "checkbox", 1, "form-check-input"], ["for", "remember_me", 1, "form-check-label", "mt-0"], [1, "d-inline-flex"], ["href", "", 1, "text-decoration-underline", "me-1"], ["href", "javascript:void(0);", 1, "text-decoration-underline", "ms-1"], [1, "mb-1"], ["type", "submit", 1, "btn", "bg-primary-gradient", "text-white", "w-100"], [1, "login-or"], [1, "span-or"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap"], [1, "text-center", "me-2", "flex-fill"], ["href", "javascript:void(0);", 1, "br-10", "p-1", "btn", "btn-light", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], ["src", "assets/img/icons/google-logo.svg", "alt", "Google", 1, "img-fluid", "m-1"], [1, "text-center"], [1, "fw-normal", "fs-14", "text-dark", "mb-0"], [1, "hover-a", 3, "routerLink"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() {
        return ctx.redirectPage();
      });
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h5", 12);
      \u0275\u0275text(13, "Sign Up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 13);
      \u0275\u0275text(15, "Please enter your details to create account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "label", 15);
      \u0275\u0275text(18, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 16)(20, "span", 17);
      \u0275\u0275element(21, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "label", 15);
      \u0275\u0275text(25, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16)(27, "span", 17);
      \u0275\u0275element(28, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 14)(31, "label", 15);
      \u0275\u0275text(32, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 22)(34, "span", 17);
      \u0275\u0275element(35, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 24);
      \u0275\u0275listener("click", function RegisterComponent_Template_span_click_36_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 14)(39, "label", 15);
      \u0275\u0275text(40, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 22)(42, "span", 17);
      \u0275\u0275element(43, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 24);
      \u0275\u0275listener("click", function RegisterComponent_Template_span_click_44_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 26)(47, "div", 27)(48, "div", 28);
      \u0275\u0275element(49, "input", 29);
      \u0275\u0275elementStart(50, "label", 30);
      \u0275\u0275text(51, "I agree to the");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 31)(53, "a", 32);
      \u0275\u0275text(54, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " and ");
      \u0275\u0275elementStart(56, "a", 33);
      \u0275\u0275text(57, " Privacy Policy");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(58, "div", 34)(59, "button", 35);
      \u0275\u0275text(60, "Sign Up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 36)(62, "span", 37);
      \u0275\u0275text(63, "Or");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 14)(65, "div", 38)(66, "div", 39)(67, "a", 40);
      \u0275\u0275element(68, "img", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 39)(70, "a", 40);
      \u0275\u0275element(71, "img", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 43)(73, "h6", 44);
      \u0275\u0275text(74, "Already have an account? ");
      \u0275\u0275elementStart(75, "a", 45);
      \u0275\u0275text(76, " Sign In");
      \u0275\u0275elementEnd()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(36);
      \u0275\u0275property("ngClass", ctx.show_password[0] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.show_password[0] ? "text" : "password");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", ctx.show_password[1] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.show_password[1] ? "text" : "password");
      \u0275\u0275advance(30);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", imports: [CommonModule, RouterLink], template: `<div class="main-wrapper auth-bg">

  <!-- Start Container -->
  <div class="container-fuild">
    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <!-- Start row -->
      <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div class="col-lg-4 mx-auto">
          <form (ngSubmit)="redirectPage()" class="d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pt-lg-4 pb-0 flex-fill">
              <div class="mx-auto mb-5 text-center">
                <img src="assets/img/logo.svg"
                  class="img-fluid" alt="Logo">
              </div>
              <div class="card border-0 p-lg-3 shadow-lg rounded-2">
                <div class="card-body">
                  <div class="text-center mb-3">
                    <h5 class="mb-2">Sign Up</h5>
                    <p class="mb-0">Please enter your details to create account</p>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <div class="input-group">
                      <span class="input-group-text border-end-0">
                        <i class="isax isax-profile"></i>
                      </span>
                      <input type="text" value="" class="form-control border-start-0 ps-0" placeholder="Name">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <div class="input-group">
                      <span class="input-group-text border-end-0">
                        <i class="isax isax-sms-notification"></i>
                      </span>
                      <input type="text" value="" class="form-control border-start-0 ps-0" placeholder="Enter Email Address">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <div class="pass-group input-group">
                      <span class="input-group-text border-end-0">
                        <i class="isax isax-lock"></i>
                      </span>
                      <span class="isax toggle-password" (click)="togglePassword(0)"
                      [ngClass]="
                      show_password [0]
                        ? 'isax-eye'
                        : 'isax-eye-slash'
                    "></span>
                      <input type="password"  [type]="show_password[0] ? 'text' : 'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Confirm Password</label>
                    <div class="pass-group input-group">
                      <span class="input-group-text border-end-0">
                        <i class="isax isax-lock"></i>
                      </span>
                      <span class="isax toggle-password" (click)="togglePassword(1)"
                      [ngClass]="
                      show_password [1]
                        ? 'isax-eye'
                        : 'isax-eye-slash'
                    "></span>
                      <input type="password"  [type]="show_password[1] ? 'text' : 'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                      <div class="form-check form-check-md mb-0">
                        <input class="form-check-input" id="remember_me" type="checkbox">
                        <label for="remember_me" class="form-check-label mt-0">I agree to the</label>
                        <div class="d-inline-flex"><a href="" class="text-decoration-underline me-1">Terms of Service</a> and <a href="javascript:void(0);" class="text-decoration-underline ms-1"> Privacy Policy</a></div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-1">
                    <button type="submit" class="btn bg-primary-gradient text-white w-100">Sign Up</button>
                  </div>
                  <div class="login-or">
                    <span class="span-or">Or</span>
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
                    <h6 class="fw-normal fs-14 text-dark mb-0">Already have an account?
                      <a [routerLink]="routes.login" class="hover-a"> Sign In</a>
                    </h6>
                  </div>
                </div><!-- End card body -->
              </div><!-- End card -->
            </div>
          </form>
        </div><!-- End col -->
      </div>
      <!-- End row -->
    </div>
  </div>
  <!-- End Container -->

</div>` }]
  }], () => [{ type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/auth/register/register.component.ts", lineNumber: 12 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-6F26J2H5.js.map
