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

// angular:jit:template:src/app/features/setting/system-settings/system-settings.component.html
var system_settings_component_default;
var init_system_settings_component = __esm({
  "angular:jit:template:src/app/features/setting/system-settings/system-settings.component.html"() {
    system_settings_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/setting/system-settings/system-settings.component.scss
var system_settings_component_default2;
var init_system_settings_component2 = __esm({
  "angular:jit:style:src/app/features/setting/system-settings/system-settings.component.scss"() {
    system_settings_component_default2 = "/* src/app/features/setting/system-settings/system-settings.component.scss */\n/*# sourceMappingURL=system-settings.component.css.map */\n";
  }
});

// src/app/features/setting/system-settings/system-settings.component.ts
var SystemSettingsComponent;
var init_system_settings_component3 = __esm({
  "src/app/features/setting/system-settings/system-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_system_settings_component();
    init_system_settings_component2();
    init_core();
    init_router();
    SystemSettingsComponent = class SystemSettingsComponent2 {
    };
    SystemSettingsComponent = __decorate([
      Component({
        selector: "app-system-settings",
        imports: [RouterModule],
        template: system_settings_component_default,
        styles: [system_settings_component_default2]
      })
    ], SystemSettingsComponent);
  }
});

// src/app/features/setting/system-settings/system-settings.component.spec.ts
var require_system_settings_component_spec = __commonJS({
  "src/app/features/setting/system-settings/system-settings.component.spec.ts"(exports) {
    init_testing();
    init_system_settings_component3();
    describe("SystemSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SystemSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SystemSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_system_settings_component_spec();
//# sourceMappingURL=spec-app-features-setting-system-settings-system-settings.component.spec.js.map
