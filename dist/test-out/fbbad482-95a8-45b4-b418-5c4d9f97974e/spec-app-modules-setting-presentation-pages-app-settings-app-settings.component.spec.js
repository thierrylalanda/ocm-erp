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

// angular:jit:template:src/app/modules/setting/presentation/pages/app-settings/app-settings.component.html
var app_settings_component_default;
var init_app_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/app-settings/app-settings.component.html"() {
    app_settings_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/app-settings/app-settings.component.scss
var app_settings_component_default2;
var init_app_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/app-settings/app-settings.component.scss"() {
    app_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/app-settings/app-settings.component.scss */\n/*# sourceMappingURL=app-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/app-settings/app-settings.component.ts
var AppSettingsComponent;
var init_app_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/app-settings/app-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_app_settings_component();
    init_app_settings_component2();
    init_core();
    init_router();
    AppSettingsComponent = class AppSettingsComponent2 {
    };
    AppSettingsComponent = __decorate([
      Component({
        selector: "app-app-settings",
        imports: [RouterModule],
        template: app_settings_component_default,
        styles: [app_settings_component_default2]
      })
    ], AppSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/app-settings/app-settings.component.spec.ts
var require_app_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/app-settings/app-settings.component.spec.ts"(exports) {
    init_testing();
    init_app_settings_component3();
    describe("AppSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AppSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AppSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_app_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-app-settings-app-settings.component.spec.js.map
