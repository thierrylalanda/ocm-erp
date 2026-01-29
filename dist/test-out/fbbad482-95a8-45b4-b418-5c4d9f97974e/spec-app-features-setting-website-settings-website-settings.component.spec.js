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

// angular:jit:template:src/app/features/setting/website-settings/website-settings.component.html
var website_settings_component_default;
var init_website_settings_component = __esm({
  "angular:jit:template:src/app/features/setting/website-settings/website-settings.component.html"() {
    website_settings_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/setting/website-settings/website-settings.component.scss
var website_settings_component_default2;
var init_website_settings_component2 = __esm({
  "angular:jit:style:src/app/features/setting/website-settings/website-settings.component.scss"() {
    website_settings_component_default2 = "/* src/app/features/setting/website-settings/website-settings.component.scss */\n/*# sourceMappingURL=website-settings.component.css.map */\n";
  }
});

// src/app/features/setting/website-settings/website-settings.component.ts
var WebsiteSettingsComponent;
var init_website_settings_component3 = __esm({
  "src/app/features/setting/website-settings/website-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_website_settings_component();
    init_website_settings_component2();
    init_core();
    init_router();
    WebsiteSettingsComponent = class WebsiteSettingsComponent2 {
    };
    WebsiteSettingsComponent = __decorate([
      Component({
        selector: "app-website-settings",
        imports: [RouterModule],
        template: website_settings_component_default,
        styles: [website_settings_component_default2]
      })
    ], WebsiteSettingsComponent);
  }
});

// src/app/features/setting/website-settings/website-settings.component.spec.ts
var require_website_settings_component_spec = __commonJS({
  "src/app/features/setting/website-settings/website-settings.component.spec.ts"(exports) {
    init_testing();
    init_website_settings_component3();
    describe("WebsiteSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [WebsiteSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(WebsiteSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_website_settings_component_spec();
//# sourceMappingURL=spec-app-features-setting-website-settings-website-settings.component.spec.js.map
