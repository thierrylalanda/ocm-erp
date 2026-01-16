import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.ts
var ClearCacheComponent = class _ClearCacheComponent {
  static \u0275fac = function ClearCacheComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClearCacheComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClearCacheComponent, selectors: [["app-clear-cache"]], decls: 10, vars: 0, consts: [[1, ""], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "mb-3"], [1, "fw-medium", "text-gray-5"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function ClearCacheComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "Clear Cache");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "p", 4);
      \u0275\u0275text(7, "Clearing the cache may improve performance but will remove temporary files, stored preferences, and cached data from websites and applications.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "a", 5);
      \u0275\u0275text(9, "Clear Cache");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCacheComponent, [{
    type: Component,
    args: [{ selector: "app-clear-cache", imports: [], template: '<div class="">\n    <div>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Clear Cache</h6>\n        </div>\n        <div class="mb-3">\n            <p class="fw-medium text-gray-5">Clearing the cache may improve performance but will remove temporary files, stored preferences, and cached data from websites and applications.</p>\n        </div>\n        <a href="javascript:void(0);" class="btn btn-primary">Clear Cache</a>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClearCacheComponent, { className: "ClearCacheComponent", filePath: "src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.ts", lineNumber: 9 });
})();
export {
  ClearCacheComponent
};
//# sourceMappingURL=chunk-SOESXXIX.js.map
