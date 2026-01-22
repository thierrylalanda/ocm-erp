import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate6
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/other-settings/custom-css/custom-css.component.ts
var CustomCssComponent = class _CustomCssComponent {
  static \u0275fac = function CustomCssComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomCssComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomCssComponent, selectors: [["app-custom-css"]], decls: 18, vars: 6, consts: [[1, ""], [1, "pb-3", "d-flex", "border-bottom", "mb-3"], [1, "mb-0"], [1, "mb-3"], [1, "mb-3", "text-dark", "fs-14"], [1, "bg-light", "text-gray-9", "rounded-3", "border"], [1, "language-markup", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-4"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function CustomCssComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "Custom CSS");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "h5", 4);
      \u0275\u0275text(7, "Write Custom CSS");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5)(9, "pre", 6)(10, "code", 6);
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(12, "\n");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(13, "div", 7)(14, "a", 8);
      \u0275\u0275text(15, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "a", 9);
      \u0275\u0275text(17, "Save Changes");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate6("\n.section-header ", "{", "\nmargin-bottom: 50px;\n", "}", "\n.section-header h2", "{", "\nfont-size: 36px;\nfont-weight: 700;\ncolor: #0A0A0A;\nmargin-bottom: 14px;\n", "}", "\n.section-header h5 ", "{", "\nfont-size: 18px;\ncolor: #680A83;\nfont-weight: 600;\ntext-align: center;\nmargin-bottom: 8px;\n", "}", "\n");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomCssComponent, [{
    type: Component,
    args: [{ selector: "app-custom-css", imports: [], template: `<div class="">
    <div>
        <div class="pb-3 d-flex border-bottom mb-3">
            <h6 class="mb-0">Custom CSS</h6>                                        
        </div>
        <div class="mb-3">
            <h5 class="mb-3 text-dark fs-14">Write Custom CSS</h5>
            <div class="bg-light text-gray-9 rounded-3 border">
<pre class="language-markup mb-0">
<code class="language-markup mb-0">
.section-header {{'{'}}
margin-bottom: 50px;
{{'}'}}
.section-header h2{{'{'}}
font-size: 36px;
font-weight: 700;
color: #0A0A0A;
margin-bottom: 14px;
{{'}'}}
.section-header h5 {{'{'}}
font-size: 18px;
color: #680A83;
font-weight: 600;
text-align: center;
margin-bottom: 8px;
{{'}'}}
</code>
</pre>
            </div>
            
        </div>
        <div class="d-flex align-items-center justify-content-between border-top pt-4">
            <a href="javascript:void(0);" class="btn btn-outline-white">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomCssComponent, { className: "CustomCssComponent", filePath: "src/app/modules/setting/presentation/pages/other-settings/custom-css/custom-css.component.ts", lineNumber: 9 });
})();
export {
  CustomCssComponent
};
//# sourceMappingURL=chunk-RQECNARD.js.map
