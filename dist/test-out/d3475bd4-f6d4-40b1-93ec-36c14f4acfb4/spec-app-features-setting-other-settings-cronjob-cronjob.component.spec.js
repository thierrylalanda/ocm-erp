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

// angular:jit:template:src/app/features/setting/other-settings/cronjob/cronjob.component.html
var cronjob_component_default;
var init_cronjob_component = __esm({
  "angular:jit:template:src/app/features/setting/other-settings/cronjob/cronjob.component.html"() {
    cronjob_component_default = '<div class="">\n    <form>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Cronjob</h6>\n        </div>\n        <div class="mb-3">\n            <div class="row align-items-center mb-3">\n                <div class="col-md-4">\n                    <p class="text-dark fw-medium">Cronjob Link</p>\n                </div>\n                <div class="col-md-8">\n                    <input type="text" class="form-control" value="https://example.com/cronjob">\n                </div>\n            </div>\n            <div class="row align-items-center">\n                <div class="col-md-4">\n                    <p class="text-dark fw-medium">Execution Interval</p>\n                </div>\n                <div class="col-md-8">\n                    <input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput" value="1 Day, 1 Hour">\n                </div>\n            </div>\n        </div>\n        <div class="d-flex align-items-center justify-content-between border-top pt-4">\n            <a href="javascript:void(0);" class="btn btn-outline-white">Cancel</a>\n            <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>\n        </div>\n    </form>\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/features/setting/other-settings/cronjob/cronjob.component.scss
var cronjob_component_default2;
var init_cronjob_component2 = __esm({
  "angular:jit:style:src/app/features/setting/other-settings/cronjob/cronjob.component.scss"() {
    cronjob_component_default2 = "/* src/app/features/setting/other-settings/cronjob/cronjob.component.scss */\n/*# sourceMappingURL=cronjob.component.css.map */\n";
  }
});

// src/app/features/setting/other-settings/cronjob/cronjob.component.ts
var CronjobComponent;
var init_cronjob_component3 = __esm({
  "src/app/features/setting/other-settings/cronjob/cronjob.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_cronjob_component();
    init_cronjob_component2();
    init_core();
    CronjobComponent = class CronjobComponent2 {
    };
    CronjobComponent = __decorate([
      Component({
        selector: "app-cronjob",
        imports: [],
        template: cronjob_component_default,
        styles: [cronjob_component_default2]
      })
    ], CronjobComponent);
  }
});

// src/app/features/setting/other-settings/cronjob/cronjob.component.spec.ts
var require_cronjob_component_spec = __commonJS({
  "src/app/features/setting/other-settings/cronjob/cronjob.component.spec.ts"(exports) {
    init_testing();
    init_cronjob_component3();
    describe("CronjobComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CronjobComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CronjobComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_cronjob_component_spec();
//# sourceMappingURL=spec-app-features-setting-other-settings-cronjob-cronjob.component.spec.js.map
