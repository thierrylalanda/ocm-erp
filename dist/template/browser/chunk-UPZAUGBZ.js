import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/application/calls/incoming-call/incoming-call.component.ts
var IncomingCallComponent = class _IncomingCallComponent {
  static \u0275fac = function IncomingCallComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncomingCallComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncomingCallComponent, selectors: [["app-incoming-call"]], decls: 16, vars: 0, consts: [[1, "content-two"], [1, "row"], [1, "col-xxl-12"], [1, "card", "incoming-call", "mb-0", "shadow-none"], [1, "card-body", "text-center", "d-flex", "flex-column", "justify-content-center"], [1, "voice-call-img", "mb-3"], ["src", "assets/img/users/user-01.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", 1, "btn", "btn-success", "call-item", "p-0", "d-flex", "align-items-center", "justify-content-center", "me-3"], [1, "ti", "ti-phone", "fs-20"], ["href", "javascript:void(0);", 1, "btn", "btn-danger", "call-item", "p-0", "d-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-phone-off", "fs-20"]], template: function IncomingCallComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275domElement(6, "img", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "h5");
      \u0275\u0275text(8, "Anthony Lewis");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p");
      \u0275\u0275text(10, "Calling...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 7)(12, "a", 8);
      \u0275\u0275domElement(13, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "a", 10);
      \u0275\u0275domElement(15, "i", 11);
      \u0275\u0275domElementEnd()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncomingCallComponent, [{
    type: Component,
    args: [{ selector: "app-incoming-call", imports: [CommonModule], template: '<div class="content-two">\n             \n    <!-- start row -->\n    <div class="row">\n        <div class="col-xxl-12">\n            <div class="card incoming-call mb-0 shadow-none">\n                <div class="card-body text-center d-flex flex-column justify-content-center">\n                    <div class="voice-call-img mb-3">\n                        <img src="assets/img/users/user-01.jpg" class="img-fluid rounded-circle" alt="img">\n                    </div>\n                    <h5>Anthony Lewis</h5>\n                    <p>Calling...</p>\n                    <div class="d-flex align-items-center justify-content-center">\n                        <a href="javascript:void(0);" class="btn btn-success call-item p-0 d-flex align-items-center justify-content-center me-3"><i class="ti ti-phone fs-20"></i></a>\n                        <a href="javascript:void(0);" class="btn btn-danger call-item p-0 d-flex align-items-center justify-content-center"><i class="ti ti-phone-off fs-20"></i></a>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n    </div>\n    <!-- end row -->\n\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncomingCallComponent, { className: "IncomingCallComponent", filePath: "src/app/features/application/calls/incoming-call/incoming-call.component.ts", lineNumber: 10 });
})();
export {
  IncomingCallComponent
};
//# sourceMappingURL=chunk-UPZAUGBZ.js.map
