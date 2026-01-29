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

// angular:jit:template:src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.html
var clear_cache_component_default;
var init_clear_cache_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.html"() {
    clear_cache_component_default = '<div class="">\n    <div>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Clear Cache</h6>\n        </div>\n        <div class="mb-3">\n            <p class="fw-medium text-gray-5">Clearing the cache may improve performance but will remove temporary files, stored preferences, and cached data from websites and applications.</p>\n        </div>\n        <a href="javascript:void(0);" class="btn btn-primary">Clear Cache</a>\n    </div>\n</div>';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.scss
var clear_cache_component_default2;
var init_clear_cache_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.scss"() {
    clear_cache_component_default2 = "/* src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.scss */\n/*# sourceMappingURL=clear-cache.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.ts
var ClearCacheComponent;
var init_clear_cache_component3 = __esm({
  "src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_clear_cache_component();
    init_clear_cache_component2();
    init_core();
    ClearCacheComponent = class ClearCacheComponent2 {
    };
    ClearCacheComponent = __decorate([
      Component({
        selector: "app-clear-cache",
        imports: [],
        template: clear_cache_component_default,
        styles: [clear_cache_component_default2]
      })
    ], ClearCacheComponent);
  }
});

// src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.spec.ts
var require_clear_cache_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/other-settings/clear-cache/clear-cache.component.spec.ts"(exports) {
    init_testing();
    init_clear_cache_component3();
    describe("ClearCacheComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ClearCacheComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ClearCacheComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_clear_cache_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-other-settings-clear-cache-clear-cache.component.spec.js.map
