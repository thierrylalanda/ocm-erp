import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-NAWYXTZ5.js";
import {
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

// src/app/auth/reset-password/reset-password.component.ts
var ResetPasswordComponent = class _ResetPasswordComponent {
  router;
  routes = routes;
  constructor(router) {
    this.router = router;
  }
  redirectPage() {
    this.router.navigate([routes.success]);
  }
  show_password = [false];
  togglePassword(index) {
    this.show_password[index] = !this.show_password[index];
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 52, vars: 5, consts: [[1, "main-wrapper", "auth-bg"], [1, "container-fuild"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-lg-4", "mx-auto"], [1, "d-flex", "justify-content-center", "align-items-center", 3, "ngSubmit"], [1, "d-flex", "flex-column", "justify-content-lg-center", "p-4", "p-lg-0", "pb-0", "flex-fill"], [1, "mx-auto", "mb-5", "text-center"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "card", "border-0", "p-lg-3", "shadow-lg", "rounded-2"], [1, "card-body"], [1, "text-center", "mb-3"], [1, "mb-2"], [1, "mb-0"], [1, "mb-3"], [1, "form-label"], [1, "pass-group", "input-group"], [1, "input-group-text", "border-end-0"], [1, "isax", "isax-lock"], [1, "isax", "toggle-password", 3, "click", "ngClass"], ["type", "password", "placeholder", "****************", 1, "pass-input", "form-control", "border-start-0", "ps-0", 3, "type"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-check-md", "mb-0"], ["id", "remember_me", "type", "checkbox", 1, "form-check-input"], ["for", "remember_me", 1, "form-check-label", "mt-0"], [1, "d-inline-flex"], ["href", "", 1, "text-decoration-underline", "me-1"], ["href", "javascript:void(0);", 1, "text-decoration-underline", "ms-1"], ["type", "submit", 1, "btn", "bg-primary-gradient", "text-white", "w-100"], [1, "text-center"], [1, "fw-normal", "fs-14", "text-dark", "mb-0"], [1, "hover-a", 3, "routerLink"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_5_listener() {
        return ctx.redirectPage();
      });
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h5", 12);
      \u0275\u0275text(13, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 13);
      \u0275\u0275text(15, "Enter new password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "label", 15);
      \u0275\u0275text(18, "New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 16)(20, "span", 17);
      \u0275\u0275element(21, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 19);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_span_click_22_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 14)(25, "label", 15);
      \u0275\u0275text(26, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 16)(28, "span", 17);
      \u0275\u0275element(29, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_span_click_30_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 21)(33, "div", 22)(34, "div", 23);
      \u0275\u0275element(35, "input", 24);
      \u0275\u0275elementStart(36, "label", 25);
      \u0275\u0275text(37, "I agree to the");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 26)(39, "a", 27);
      \u0275\u0275text(40, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " and ");
      \u0275\u0275elementStart(42, "a", 28);
      \u0275\u0275text(43, " Privacy Policy");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(44, "div", 14)(45, "button", 29);
      \u0275\u0275text(46, "Reset Password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 30)(48, "h6", 31);
      \u0275\u0275text(49, "Return to ");
      \u0275\u0275elementStart(50, "a", 32);
      \u0275\u0275text(51, " Sign In");
      \u0275\u0275elementEnd()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("ngClass", ctx.show_password[0] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.show_password[0] ? "text" : "password");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", ctx.show_password[1] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.show_password[1] ? "text" : "password");
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", imports: [CommonModule, RouterLink, FormsModule], template: `<div class="main-wrapper auth-bg">

    <!-- Start Container -->
    <div class="container-fuild">
        <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
            <!-- Start row -->
            <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
                <div class="col-lg-4 mx-auto">
                    <form (ngSubmit)="redirectPage()" class="d-flex justify-content-center align-items-center">
                        <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                            <div class="mx-auto mb-5 text-center">
                                <img src="assets/img/logo.svg"
                                    class="img-fluid" alt="Logo">
                            </div>
                            <div class="card border-0 p-lg-3 shadow-lg rounded-2">
                                <div class="card-body">
                                    <div class="text-center mb-3">
                                        <h5 class="mb-2">Reset Password</h5>
                                        <p class="mb-0">Enter new password</p>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">New Password</label>
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
                                    <div class="mb-3">
                                        <button type="submit" class="btn bg-primary-gradient text-white w-100">Reset Password</button>
                                    </div>
                                    <div class="text-center">
                                        <h6 class="fw-normal fs-14 text-dark mb-0">Return to
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
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/auth/reset-password/reset-password.component.ts", lineNumber: 13 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-5FBXZOGK.js.map
