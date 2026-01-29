import {
  RouterModule,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
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

// angular:jit:template:src/app/features/setting/general-settings/general-settings.component.html
var general_settings_component_default;
var init_general_settings_component = __esm({
  "angular:jit:template:src/app/features/setting/general-settings/general-settings.component.html"() {
    general_settings_component_default = "<router-outlet></router-outlet>\n";
  }
});

// angular:jit:style:src/app/features/setting/general-settings/general-settings.component.scss
var general_settings_component_default2;
var init_general_settings_component2 = __esm({
  "angular:jit:style:src/app/features/setting/general-settings/general-settings.component.scss"() {
    general_settings_component_default2 = "/* src/app/features/setting/general-settings/general-settings.component.scss */\n/*# sourceMappingURL=general-settings.component.css.map */\n";
  }
});

// src/app/features/setting/general-settings/general-settings.component.ts
var GeneralSettingsComponent;
var init_general_settings_component3 = __esm({
  "src/app/features/setting/general-settings/general-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_general_settings_component();
    init_general_settings_component2();
    init_core();
    init_router();
    GeneralSettingsComponent = class GeneralSettingsComponent2 {
    };
    GeneralSettingsComponent = __decorate([
      Component({
        selector: "app-general-settings",
        imports: [RouterModule],
        template: general_settings_component_default,
        styles: [general_settings_component_default2]
      })
    ], GeneralSettingsComponent);
  }
});

// src/app/features/setting/general-settings/general-settings.component.spec.ts
var require_general_settings_component_spec = __commonJS({
  "src/app/features/setting/general-settings/general-settings.component.spec.ts"(exports) {
    init_testing();
    init_general_settings_component3();
    describe("GeneralSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [GeneralSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(GeneralSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_general_settings_component_spec();
//# sourceMappingURL=spec-app-features-setting-general-settings-general-settings.component.spec.js.map
