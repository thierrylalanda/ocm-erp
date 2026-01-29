import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/setting/other-settings/custom-js/custom-js.component.html
var custom_js_component_default;
var init_custom_js_component = __esm({
  "angular:jit:template:src/app/features/setting/other-settings/custom-js/custom-js.component.html"() {
    custom_js_component_default = `<div class="">
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
</div><!-- end col -->`;
  }
});

// angular:jit:style:src/app/features/setting/other-settings/custom-js/custom-js.component.scss
var custom_js_component_default2;
var init_custom_js_component2 = __esm({
  "angular:jit:style:src/app/features/setting/other-settings/custom-js/custom-js.component.scss"() {
    custom_js_component_default2 = "/* src/app/features/setting/other-settings/custom-js/custom-js.component.scss */\n/*# sourceMappingURL=custom-js.component.css.map */\n";
  }
});

// src/app/features/setting/other-settings/custom-js/custom-js.component.ts
var CustomJsComponent;
var init_custom_js_component3 = __esm({
  "src/app/features/setting/other-settings/custom-js/custom-js.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_custom_js_component();
    init_custom_js_component2();
    init_core();
    CustomJsComponent = class CustomJsComponent2 {
    };
    CustomJsComponent = __decorate([
      Component({
        selector: "app-custom-js",
        imports: [],
        template: custom_js_component_default,
        styles: [custom_js_component_default2]
      })
    ], CustomJsComponent);
  }
});

// src/app/features/setting/other-settings/custom-js/custom-js.component.spec.ts
var require_custom_js_component_spec = __commonJS({
  "src/app/features/setting/other-settings/custom-js/custom-js.component.spec.ts"(exports) {
    init_testing();
    init_custom_js_component3();
    describe("CustomJsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CustomJsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CustomJsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_custom_js_component_spec();
//# sourceMappingURL=spec-app-features-setting-other-settings-custom-js-custom-js.component.spec.js.map
