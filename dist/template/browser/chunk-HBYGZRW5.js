import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/under-construction/under-construction.component.ts
var UnderConstructionComponent = class _UnderConstructionComponent {
  routes = routes;
  static \u0275fac = function UnderConstructionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnderConstructionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnderConstructionComponent, selectors: [["app-under-construction"]], decls: 20, vars: 1, consts: [[1, "bg-white", "coming-soon"], [1, "auth-bg"], [1, "container-fuild"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-lg-6"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "error-images", "mb-3"], ["src", "assets/img/under-construction.svg", "alt", "image", 1, "img-fluid"], [1, "text-center"], [1, "mb-3"], [1, "fs-16", "text-center"], [1, "d-flex", "justify-content-center", "pb-3"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"]], template: function UnderConstructionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "h4", 10);
      \u0275\u0275text(11, "We are Under Construction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 11);
      \u0275\u0275text(13, "Sorry for any inconvenience caused, we have almost done ");
      \u0275\u0275element(14, "br");
      \u0275\u0275text(15, " Will get back soon! ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "a", 13);
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275text(19, "Back to Dashboard");
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.index);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnderConstructionComponent, [{
    type: Component,
    args: [{ selector: "app-under-construction", imports: [CommonModule, RouterLink], template: '<div class="bg-white coming-soon">\n\n    <!-- Begin Wrapper -->\n    <div class="auth-bg">\n\n\n        <!-- Start Content -->\n		<div class="container-fuild">\n			<div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n				<div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n					<div class="col-lg-6">\n                        <div class="d-flex flex-column align-items-center justify-content-center">\n                            <div class="error-images mb-3">\n                                <img src="assets/img/under-construction.svg" alt="image" class="img-fluid">\n                            </div>\n                            <div class="text-center">\n                                <h4 class="mb-3">We are Under Construction</h4>\n                                <p class="fs-16 text-center">Sorry for any inconvenience caused, we have almost done \n                                    <br> Will get back soon! \n                                </p>\n                                <div class="d-flex justify-content-center pb-3">\n                                    <a [routerLink]="routes.index" class="btn btn-primary d-flex align-items-center "><i class="isax isax-arrow-left me-2"></i>Back to Dashboard</a>\n                                </div>\n                            </div>\n                        </div>                   \n                    </div>\n                </div>\n			</div>\n		</div>\n        <!-- End Content -->\n\n    </div>\n    <!-- End Wrapper -->\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnderConstructionComponent, { className: "UnderConstructionComponent", filePath: "src/app/features/pages/under-construction/under-construction.component.ts", lineNumber: 12 });
})();
export {
  UnderConstructionComponent
};
//# sourceMappingURL=chunk-HBYGZRW5.js.map
