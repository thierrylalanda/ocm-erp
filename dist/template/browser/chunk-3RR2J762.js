import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/other-settings/cronjob/cronjob.component.ts
var CronjobComponent = class _CronjobComponent {
  static \u0275fac = function CronjobComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CronjobComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CronjobComponent, selectors: [["app-cronjob"]], decls: 23, vars: 0, consts: [[1, ""], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "mb-3"], [1, "row", "align-items-center", "mb-3"], [1, "col-md-4"], [1, "text-dark", "fw-medium"], [1, "col-md-8"], ["type", "text", "value", "https://example.com/cronjob", 1, "form-control"], [1, "row", "align-items-center"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "value", "1 Day, 1 Hour", 1, "input-tags", "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-4"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function CronjobComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "form")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "Cronjob");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "p", 6);
      \u0275\u0275text(9, "Cronjob Link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 7);
      \u0275\u0275domElement(11, "input", 8);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 9)(13, "div", 5)(14, "p", 6);
      \u0275\u0275text(15, "Execution Interval");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div", 7);
      \u0275\u0275domElement(17, "input", 10);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(18, "div", 11)(19, "a", 12);
      \u0275\u0275text(20, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "a", 13);
      \u0275\u0275text(22, "Save Changes");
      \u0275\u0275domElementEnd()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CronjobComponent, [{
    type: Component,
    args: [{ selector: "app-cronjob", imports: [], template: '<div class="">\n    <form>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Cronjob</h6>\n        </div>\n        <div class="mb-3">\n            <div class="row align-items-center mb-3">\n                <div class="col-md-4">\n                    <p class="text-dark fw-medium">Cronjob Link</p>\n                </div>\n                <div class="col-md-8">\n                    <input type="text" class="form-control" value="https://example.com/cronjob">\n                </div>\n            </div>\n            <div class="row align-items-center">\n                <div class="col-md-4">\n                    <p class="text-dark fw-medium">Execution Interval</p>\n                </div>\n                <div class="col-md-8">\n                    <input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput" value="1 Day, 1 Hour">\n                </div>\n            </div>\n        </div>\n        <div class="d-flex align-items-center justify-content-between border-top pt-4">\n            <a href="javascript:void(0);" class="btn btn-outline-white">Cancel</a>\n            <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>\n        </div>\n    </form>\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CronjobComponent, { className: "CronjobComponent", filePath: "src/app/modules/setting/presentation/pages/other-settings/cronjob/cronjob.component.ts", lineNumber: 9 });
})();
export {
  CronjobComponent
};
//# sourceMappingURL=chunk-3RR2J762.js.map
