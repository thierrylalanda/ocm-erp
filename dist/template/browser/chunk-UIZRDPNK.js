import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
import {
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import {
  Router,
  RouterLink
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/forgot-password/forgot-password.component.ts
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  router;
  routes = routes;
  constructor(router) {
    this.router = router;
  }
  redirectPage() {
    this.router.navigate([routes.emailVerification]);
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 31, vars: 1, consts: [[1, "main-wrapper", "auth-bg"], [1, "container-fuild"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-lg-4", "mx-auto"], [1, "d-flex", "justify-content-center", "align-items-center", 3, "ngSubmit"], [1, "d-flex", "flex-column", "justify-content-lg-center", "p-4", "p-lg-0", "pb-0", "flex-fill"], [1, "mx-auto", "mb-5", "text-center"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "card", "border-0", "p-lg-3", "shadow-lg", "rounded-2"], [1, "card-body"], [1, "text-center", "mb-3"], [1, "mb-2"], [1, "mb-0"], [1, "mb-3"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "border-end-0"], [1, "isax", "isax-sms-notification"], ["type", "text", "value", "", "placeholder", "Enter Email Address", 1, "form-control", "border-start-0", "ps-0"], ["type", "submit", 1, "btn", "bg-primary-gradient", "text-white", "w-100"], [1, "text-center"], [1, "fw-normal", "fs-14", "text-dark", "mb-0"], [1, "hover-a", 3, "routerLink"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_5_listener() {
        return ctx.redirectPage();
      });
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h5", 12);
      \u0275\u0275text(13, "Forgot Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 13);
      \u0275\u0275text(15, "No worries, we\u2019ll send you reset instructions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "label", 15);
      \u0275\u0275text(18, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 16)(20, "span", 17);
      \u0275\u0275element(21, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "button", 20);
      \u0275\u0275text(25, "Reset Password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 21)(27, "h6", 22);
      \u0275\u0275text(28, "Return to ");
      \u0275\u0275elementStart(29, "a", 23);
      \u0275\u0275text(30, " Sign In");
      \u0275\u0275elementEnd()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275property("routerLink", ctx.routes.index);
    }
  }, dependencies: [CommonModule, RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", imports: [CommonModule, RouterLink, FormsModule], template: '<div class="main-wrapper auth-bg">\n  <div class="container-fuild">\n    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n      <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n        <div class="col-lg-4 mx-auto">\n          <form (ngSubmit)="redirectPage()" class="d-flex justify-content-center align-items-center">\n            <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">\n              <div class=" mx-auto mb-5 text-center">\n                <img src="assets/img/logo.svg"\n                  class="img-fluid" alt="Logo">\n              </div>\n              <div class="card border-0 p-lg-3 shadow-lg rounded-2">\n                <div class="card-body">\n                  <div class="text-center mb-3">\n                    <h5 class="mb-2">Forgot Password</h5>\n                    <p class="mb-0">No worries, we\u2019ll send you reset instructions</p>\n                  </div>\n                  <div class="mb-3">\n                    <label class="form-label">Email Address</label>\n                    <div class="input-group">\n                      <span class="input-group-text border-end-0">\n                        <i class="isax isax-sms-notification"></i>\n                      </span>\n                      <input type="text" value="" class="form-control border-start-0 ps-0" placeholder="Enter Email Address">\n                    </div>\n                  </div>\n                  <div class="mb-3">\n                    <button type="submit" class="btn bg-primary-gradient text-white w-100">Reset Password</button>\n                  </div>\n                  <div class="text-center">\n                    <h6 class="fw-normal fs-14 text-dark mb-0">Return to\n                      <a [routerLink]="routes.index" class="hover-a"> Sign In</a>\n                    </h6>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.component.ts", lineNumber: 13 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-UIZRDPNK.js.map
