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

// angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.html
var ai_configuration_settings_component_default;
var init_ai_configuration_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.html"() {
    ai_configuration_settings_component_default = '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom">\n        <h6 class="fw-bold mb-0">AI Configuration</h6>\n    </div>\n    <form>\n\n        <!-- start row -->\n        <div class="row align-items-center mb-3">\n            <div class="col-md-8">\n                <label class="form-label text-dark d-block mb-0">API Key</label>\n                <span class="fs-13">Enter Your API Key</span>\n            </div><!-- end col -->\n            <div class="col-md-4">\n                <div class="d-flex justify-content-end">\n                    <input type="text" class="form-control">\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <!-- start row -->\n        <div class="row align-items-center mb-3">\n            <div class="col-9">\n                <label class="form-label d-block mb-0 text-dark">Enable AI Chat Globally</label>\n                <span class="fs-13">Seamless AI Chat Support Across the Globe</span>\n            </div><!-- end col -->\n            <div class="col-3">\n                <div class="d-flex justify-content-end">\n                    <div class="form-check form-check-sm form-switch">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                    </div>\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <!-- start row -->\n        <div class="row align-items-center mb-3">\n            <div class="col-9">\n                <label class="form-label d-block mb-0 text-dark">Enable AI for Admin</label>\n                <span class="fs-13">Empower Admins with AI-Driven Automation</span>\n            </div><!-- end col -->\n            <div class="col-3">\n                <div class="d-flex justify-content-end">\n                    <div class="form-check form-check-sm form-switch">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                    </div>\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <!-- start row -->\n        <div class="row align-items-center mb-3">\n            <div class="col-9">\n                <label class="form-label d-block mb-0 text-dark">Enable AI for Users</label>\n                <span class="fs-13">Enhance User Experience with AI Assistance</span>\n            </div><!-- end col -->\n            <div class="col-3">\n                <div class="d-flex justify-content-end">\n                    <div class="form-check form-check-sm form-switch">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                    </div>\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <div class="pt-4 mt-4 border-top mb-3">\n            <div class="d-flex justify-content-between">\n                <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n        </div>\n    </form>\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.scss
var ai_configuration_settings_component_default2;
var init_ai_configuration_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.scss"() {
    ai_configuration_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.scss */\n/*# sourceMappingURL=ai-configuration-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.ts
var AiConfigurationSettingsComponent;
var init_ai_configuration_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ai_configuration_settings_component();
    init_ai_configuration_settings_component2();
    init_core();
    AiConfigurationSettingsComponent = class AiConfigurationSettingsComponent2 {
    };
    AiConfigurationSettingsComponent = __decorate([
      Component({
        selector: "app-ai-configuration-settings",
        imports: [],
        template: ai_configuration_settings_component_default,
        styles: [ai_configuration_settings_component_default2]
      })
    ], AiConfigurationSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.spec.ts
var require_ai_configuration_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.spec.ts"(exports) {
    init_testing();
    init_ai_configuration_settings_component3();
    describe("AiConfigurationSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AiConfigurationSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AiConfigurationSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ai_configuration_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-website-settings-ai-configuration-settings-ai-configuration-settings.component.spec.js.map
