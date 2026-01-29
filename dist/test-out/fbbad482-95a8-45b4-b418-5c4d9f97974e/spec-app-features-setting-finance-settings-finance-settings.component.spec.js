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

// angular:jit:template:src/app/features/setting/finance-settings/finance-settings.component.html
var finance_settings_component_default;
var init_finance_settings_component = __esm({
  "angular:jit:template:src/app/features/setting/finance-settings/finance-settings.component.html"() {
    finance_settings_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/setting/finance-settings/finance-settings.component.scss
var finance_settings_component_default2;
var init_finance_settings_component2 = __esm({
  "angular:jit:style:src/app/features/setting/finance-settings/finance-settings.component.scss"() {
    finance_settings_component_default2 = "/* src/app/features/setting/finance-settings/finance-settings.component.scss */\n/*# sourceMappingURL=finance-settings.component.css.map */\n";
  }
});

// src/app/features/setting/finance-settings/finance-settings.component.ts
var FinanceSettingsComponent;
var init_finance_settings_component3 = __esm({
  "src/app/features/setting/finance-settings/finance-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_finance_settings_component();
    init_finance_settings_component2();
    init_core();
    init_router();
    FinanceSettingsComponent = class FinanceSettingsComponent2 {
    };
    FinanceSettingsComponent = __decorate([
      Component({
        selector: "app-finance-settings",
        imports: [RouterModule],
        template: finance_settings_component_default,
        styles: [finance_settings_component_default2]
      })
    ], FinanceSettingsComponent);
  }
});

// src/app/features/setting/finance-settings/finance-settings.component.spec.ts
var require_finance_settings_component_spec = __commonJS({
  "src/app/features/setting/finance-settings/finance-settings.component.spec.ts"(exports) {
    init_testing();
    init_finance_settings_component3();
    describe("FinanceSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [FinanceSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(FinanceSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_finance_settings_component_spec();
//# sourceMappingURL=spec-app-features-setting-finance-settings-finance-settings.component.spec.js.map
