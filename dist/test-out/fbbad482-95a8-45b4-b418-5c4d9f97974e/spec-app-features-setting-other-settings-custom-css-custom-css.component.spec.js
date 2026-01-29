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

// angular:jit:template:src/app/features/setting/other-settings/custom-css/custom-css.component.html
var custom_css_component_default;
var init_custom_css_component = __esm({
  "angular:jit:template:src/app/features/setting/other-settings/custom-css/custom-css.component.html"() {
    custom_css_component_default = `<div class="">
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
</div>`;
  }
});

// angular:jit:style:src/app/features/setting/other-settings/custom-css/custom-css.component.scss
var custom_css_component_default2;
var init_custom_css_component2 = __esm({
  "angular:jit:style:src/app/features/setting/other-settings/custom-css/custom-css.component.scss"() {
    custom_css_component_default2 = "/* src/app/features/setting/other-settings/custom-css/custom-css.component.scss */\n/*# sourceMappingURL=custom-css.component.css.map */\n";
  }
});

// src/app/features/setting/other-settings/custom-css/custom-css.component.ts
var CustomCssComponent;
var init_custom_css_component3 = __esm({
  "src/app/features/setting/other-settings/custom-css/custom-css.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_custom_css_component();
    init_custom_css_component2();
    init_core();
    CustomCssComponent = class CustomCssComponent2 {
    };
    CustomCssComponent = __decorate([
      Component({
        selector: "app-custom-css",
        imports: [],
        template: custom_css_component_default,
        styles: [custom_css_component_default2]
      })
    ], CustomCssComponent);
  }
});

// src/app/features/setting/other-settings/custom-css/custom-css.component.spec.ts
var require_custom_css_component_spec = __commonJS({
  "src/app/features/setting/other-settings/custom-css/custom-css.component.spec.ts"(exports) {
    init_testing();
    init_custom_css_component3();
    describe("CustomCssComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CustomCssComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CustomCssComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_custom_css_component_spec();
//# sourceMappingURL=spec-app-features-setting-other-settings-custom-css-custom-css.component.spec.js.map
