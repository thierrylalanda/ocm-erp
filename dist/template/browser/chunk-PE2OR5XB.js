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
  CommonModule
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/email-verification/email-verification.component.ts
var EmailVerificationComponent = class _EmailVerificationComponent {
  router;
  routes = routes;
  constructor(router) {
    this.router = router;
  }
  redirectPage() {
    this.router.navigate([routes.twoStepVerification]);
  }
  static \u0275fac = function EmailVerificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailVerificationComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 22, vars: 1, consts: [[1, "main-wrapper", "auth-bg"], [1, "container-fuild"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-lg-4", "mx-auto"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "d-flex", "flex-column", "justify-content-lg-center", "p-4", "p-lg-0", "pb-0", "flex-fill"], [1, "mx-auto", "mb-5", "text-center"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "card", "border-0", "p-lg-3", "shadow-lg", "rounded-2"], [1, "card-body"], [1, "mb-3", "text-center"], [1, "isax", "isax-tick-circle5", "text-success", "fs-48"], [1, "text-center", "mb-3"], [1, "mb-2"], [1, "mb-0"], [1, "btn", "bg-primary-gradient", "text-white", "w-100", 3, "routerLink"]], template: function EmailVerificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "span");
      \u0275\u0275element(13, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 13)(15, "h5", 14);
      \u0275\u0275text(16, "Email Sent!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 15);
      \u0275\u0275text(18, "Check your email & change your password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div")(20, "a", 16);
      \u0275\u0275text(21, "Reset Password");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.twoStepVerification);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailVerificationComponent, [{
    type: Component,
    args: [{ selector: "app-email-verification", imports: [CommonModule, RouterLink], template: '<div class="main-wrapper auth-bg">\n    <!-- Start Container -->\n<div class="container-fuild">\n    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n        <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n            <div class="col-lg-4 mx-auto">\n                <div class="d-flex justify-content-center align-items-center">\n                    <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">\n                        <div class=" mx-auto mb-5 text-center">\n                            <img src="assets/img/logo.svg"\n                                class="img-fluid" alt="Logo">\n                        </div>\n                        <div class="card border-0 p-lg-3 shadow-lg rounded-2">\n                            <div class="card-body">\n                                <div class="mb-3 text-center">\n                                    <span><i class="isax isax-tick-circle5 text-success fs-48"></i></span>\n                                </div>\n                                <div class="text-center mb-3">\n                                    <h5 class="mb-2">Email Sent!</h5>\n                                    <p class="mb-0">Check your email & change your password</p>\n                                </div>\n                                <div>\n                                    <a [routerLink]="routes.twoStepVerification" class="btn bg-primary-gradient text-white w-100">Reset Password</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- container -->\n</div>' }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailVerificationComponent, { className: "EmailVerificationComponent", filePath: "src/app/auth/email-verification/email-verification.component.ts", lineNumber: 12 });
})();
export {
  EmailVerificationComponent
};
//# sourceMappingURL=chunk-PE2OR5XB.js.map
