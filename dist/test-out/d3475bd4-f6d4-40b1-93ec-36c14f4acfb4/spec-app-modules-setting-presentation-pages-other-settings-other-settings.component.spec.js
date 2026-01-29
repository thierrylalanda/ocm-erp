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

// angular:jit:template:src/app/modules/setting/presentation/pages/other-settings/other-settings.component.html
var other_settings_component_default;
var init_other_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/other-settings/other-settings.component.html"() {
    other_settings_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/other-settings/other-settings.component.scss
var other_settings_component_default2;
var init_other_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/other-settings/other-settings.component.scss"() {
    other_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/other-settings/other-settings.component.scss */\n/*# sourceMappingURL=other-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/other-settings/other-settings.component.ts
var OtherSettingsComponent;
var init_other_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/other-settings/other-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_other_settings_component();
    init_other_settings_component2();
    init_core();
    init_router();
    OtherSettingsComponent = class OtherSettingsComponent2 {
    };
    OtherSettingsComponent = __decorate([
      Component({
        selector: "app-other-settings",
        imports: [RouterModule],
        template: other_settings_component_default,
        styles: [other_settings_component_default2]
      })
    ], OtherSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/other-settings/other-settings.component.spec.ts
var require_other_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/other-settings/other-settings.component.spec.ts"(exports) {
    init_testing();
    init_other_settings_component3();
    describe("OtherSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [OtherSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(OtherSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_other_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-other-settings-other-settings.component.spec.js.map
