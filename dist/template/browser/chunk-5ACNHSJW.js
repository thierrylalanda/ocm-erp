import {
  RouterModule,
  RouterOutlet
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/base-ui/base-ui.component.ts
var BaseUIComponent = class _BaseUIComponent {
  page = "";
  base = "";
  layoutPosition = "";
  static \u0275fac = function BaseUIComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseUIComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BaseUIComponent, selectors: [["app-base-ui"]], decls: 1, vars: 0, template: function BaseUIComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseUIComponent, [{
    type: Component,
    args: [{ selector: "app-base-ui", imports: [RouterModule], template: "\n  <router-outlet></router-outlet>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BaseUIComponent, { className: "BaseUIComponent", filePath: "src/app/features/ui-interface/base-ui/base-ui.component.ts", lineNumber: 10 });
})();
export {
  BaseUIComponent
};
//# sourceMappingURL=chunk-5ACNHSJW.js.map
