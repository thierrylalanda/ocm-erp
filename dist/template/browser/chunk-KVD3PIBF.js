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

// src/app/modules/setting/presentation/pages/other-settings/custom-js/custom-js.component.ts
var CustomJsComponent = class _CustomJsComponent {
  static \u0275fac = function CustomJsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomJsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomJsComponent, selectors: [["app-custom-js"]], decls: 18, vars: 6, consts: [[1, ""], [1, "pb-3", "d-flex", "border-bottom", "mb-3"], [1, "mb-0"], [1, "mb-3"], [1, "mb-3", "text-dark", "fs-14"], [1, "bg-light", "text-gray-9", "rounded-3", "border"], [1, "language-markup", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-4"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function CustomJsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "Custom JS");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "h5", 4);
      \u0275\u0275text(7, "Write Custom JS");
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
      \u0275\u0275textInterpolate6('\ndocument.addEventListener("DOMContentLoaded", function () ', "{", '\nconst scrollers = document.querySelectorAll(".horizontal-slide");\nscrollers.forEach((scroller) => ', "{", '\nscroller.setAttribute("data-animated", true);\nconst scrollerInner = scroller.querySelector(".slide-list");\nconst scrollerContent = Array.from(scrollerInner.children);\nscrollerContent.forEach((item) => ', "{", '\nconst duplicatedItem = item.cloneNode(true);\nduplicatedItem.setAttribute("aria-hidden", true);\nscrollerInner.appendChild(duplicatedItem);\n', "}", ");\n", "}", "); \n", "}", ");\n");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomJsComponent, [{
    type: Component,
    args: [{ selector: "app-custom-js", imports: [], template: `<div class="">
    <div>
        <div class="pb-3 d-flex border-bottom mb-3">
            <h6 class="mb-0">Custom JS</h6>
            
        </div>
        <div class="mb-3">
            <h5 class="mb-3 text-dark fs-14">Write Custom JS</h5>
            <div class="bg-light text-gray-9 rounded-3 border">
<pre class="language-markup mb-0">
<code class="language-markup mb-0">
document.addEventListener("DOMContentLoaded", function () {{'{'}}
const scrollers = document.querySelectorAll(".horizontal-slide");
scrollers.forEach((scroller) => {{'{'}}
scroller.setAttribute("data-animated", true);
const scrollerInner = scroller.querySelector(".slide-list");
const scrollerContent = Array.from(scrollerInner.children);
scrollerContent.forEach((item) => {{'{'}}
const duplicatedItem = item.cloneNode(true);
duplicatedItem.setAttribute("aria-hidden", true);
scrollerInner.appendChild(duplicatedItem);
{{'}'}});
{{'}'}}); 
{{'}'}});
</code>
</pre>
            </div>
            
        </div>
        <div class="d-flex align-items-center justify-content-between border-top pt-4">
            <a href="javascript:void(0);" class="btn btn-outline-white">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
        </div>
    </div>
</div><!-- end col -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomJsComponent, { className: "CustomJsComponent", filePath: "src/app/modules/setting/presentation/pages/other-settings/custom-js/custom-js.component.ts", lineNumber: 9 });
})();
export {
  CustomJsComponent
};
//# sourceMappingURL=chunk-KVD3PIBF.js.map
