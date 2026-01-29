import {
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
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

// angular:jit:template:src/app/features/customers/settings/settings.component.html
var settings_component_default;
var init_settings_component = __esm({
  "angular:jit:template:src/app/features/customers/settings/settings.component.html"() {
    settings_component_default = '			<!-- Start Content -->\n            <div class="">\n\n				<!-- start row -->\n                <div class="row justify-content-center">\n                    <div class="col-xl-11">\n\n						<!-- start row -->\n                        <div class=" row settings-wrapper d-flex">\n                            <div class="col-xl-3 col-lg-4">\n                                <div class="card settings-card">\n                                    <div class="card-header">\n                                        <h6 class="mb-0">Settings</h6>\n                                    </div>\n                                    <div class="card-body">\n                                        <div class="sidebars settings-sidebar">\n                                            <div class="sidebar-inner">\n                                                <div class="sidebar-menu p-0">\n                                                    <ul>\n                                                        <li>\n                                                            <a [routerLink]="routes.customerAccountsettings" routerLinkActive="active" class="fs-14 fw-medium d-flex align-items-center"><i class="isax isax-user-octagon fs-18 me-1"></i>Account Settings</a>\n                                                        </li>\n                                                        <li>\n                                                            <a [routerLink]="routes.customerSecuritysettings" routerLinkActive="active" class="fs-14 fw-medium d-flex align-items-center active"><i class="isax isax-security-safe fs-18 me-1"></i>Security</a>\n                                                        </li>\n                                                        <li>\n                                                            <a [routerLink]="routes.customerPlanssettings" routerLinkActive="active" class="fs-14 fw-medium d-flex align-items-center"><i class="isax isax-transaction-minus fs-18 me-1"></i>Plans & Billings</a>\n                                                        </li>\n                                                        <li>\n                                                            <a [routerLink]="routes.customerNotificationsettings" routerLinkActive="active" class="fs-14 fw-medium d-flex align-items-center"><i class="isax isax-notification fs-18 me-1"></i>Notifications</a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div><!-- end col -->\n                            <div class="col-xl-9 col-lg-8">\n                                <router-outlet></router-outlet>\n                            </div><!-- end col -->\n                        </div>\n						<!-- end row -->\n\n                    </div><!-- end col -->\n                </div>\n				<!-- end row -->\n\n            </div>\n			<!-- End Content -->\n\n';
  }
});

// angular:jit:style:src/app/features/customers/settings/settings.component.scss
var settings_component_default2;
var init_settings_component2 = __esm({
  "angular:jit:style:src/app/features/customers/settings/settings.component.scss"() {
    settings_component_default2 = "/* src/app/features/customers/settings/settings.component.scss */\n/*# sourceMappingURL=settings.component.css.map */\n";
  }
});

// src/app/features/customers/settings/settings.component.ts
var SettingsComponent;
var init_settings_component3 = __esm({
  "src/app/features/customers/settings/settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_settings_component();
    init_settings_component2();
    init_core();
    init_core_index();
    init_router();
    SettingsComponent = class SettingsComponent2 {
      routes = routes;
    };
    SettingsComponent = __decorate([
      Component({
        selector: "app-settings",
        imports: [RouterModule],
        template: settings_component_default,
        styles: [settings_component_default2]
      })
    ], SettingsComponent);
  }
});

// src/app/features/customers/settings/settings.component.spec.ts
var require_settings_component_spec = __commonJS({
  "src/app/features/customers/settings/settings.component.spec.ts"(exports) {
    init_testing();
    init_settings_component3();
    describe("SettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_settings_component_spec();
//# sourceMappingURL=spec-app-features-customers-settings-settings.component.spec.js.map
