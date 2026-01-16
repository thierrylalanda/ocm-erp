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

// src/app/features/pages/starter/starter.component.ts
var StarterComponent = class _StarterComponent {
  static \u0275fac = function StarterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StarterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarterComponent, selectors: [["app-starter"]], decls: 3, vars: 0, consts: [[1, "content-two"], [1, "mb-0"]], template: function StarterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h6", 1);
      \u0275\u0275text(2, "Starter Page");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarterComponent, [{
    type: Component,
    args: [{ selector: "app-starter", imports: [], template: '<div class="content-two">\n    <h6 class="mb-0">Starter Page</h6>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarterComponent, { className: "StarterComponent", filePath: "src/app/features/pages/starter/starter.component.ts", lineNumber: 9 });
})();
export {
  StarterComponent
};
//# sourceMappingURL=chunk-JSI5ITJ4.js.map
