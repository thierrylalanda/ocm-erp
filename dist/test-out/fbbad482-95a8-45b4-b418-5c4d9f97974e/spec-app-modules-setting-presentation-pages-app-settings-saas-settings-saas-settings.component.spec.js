import {
  MatSelectModule,
  init_select
} from "./chunk-PJP4EZYQ.js";
import "./chunk-ZLTBFUHR.js";
import "./chunk-N2Q3HONL.js";
import "./chunk-ZQVU7KV2.js";
import "./chunk-Y46UO4F7.js";
import "./chunk-WYJ2IQUD.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import "./chunk-2RBILSOV.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
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

// angular:jit:template:src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.html
var saas_settings_component_default;
var init_saas_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.html"() {
    saas_settings_component_default = '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Saas Settings</h6>\n        </div>\n        <form>\n            <div class="card-body vh-100 border-bottom mb-3">\n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Default Currency</label>\n                    </div>\n                    <div class="col-md-4 col-sm-12">\n                        <mat-select class="custom-mat-select select" placeholder="Dollar">\n                            <mat-option value="1">Dollar</mat-option>\n                            <mat-option value="1">USD</mat-option>\n                            <mat-option value="1">Euro</mat-option>\n                            <mat-option value="1">Pound</mat-option>\n                            <mat-option value="1">Rupee</mat-option>\n                        </mat-select>\n                    </div>\n                </div>\n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Days between initial warning and subscription ends</label>\n                    </div>\n                    <div class="col-md-4 col-sm-12">\n                        <input type="text" class="form-control">\n                    </div>\n                </div> \n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Interval days between warnings</label>\n                    </div>\n                    <div class="col-md-4 col-sm-12">\n                        <input type="text" class="form-control">\n                    </div>\n                </div>\n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Maximum Free Domain A Subscriber Can Create</label>\n                    </div>\n                    <div class="col-md-4 col-sm-12">\n                        <input type="text" class="form-control">\n                    </div>\n                </div>\n                <div class="row align-items-center mb-3">\n                    <div class="col-9">\n                        <label class="form-label fw-medium">Email Verification</label>\n                    </div>\n                    <div class="col-3 d-flex justify-content-end">\n                        <div class="form-check form-switch">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div>\n                </div>\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium">Auto approve Domain creation request</label>\n                    </div>\n                    <div class="col-3 d-flex justify-content-end">\n                        <div class="form-check form-switch">\n                            <input class="form-check-input" type="checkbox" role="switch" checked />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class="modal-footer justify-content-between">\n                <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-back me-2 border">Cancel</a>\n                <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary">Save Changes</a>\n            </div>\n        </form>\n    </div>\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.scss
var saas_settings_component_default2;
var init_saas_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.scss"() {
    saas_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.scss */\n/*# sourceMappingURL=saas-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.ts
var SaasSettingsComponent;
var init_saas_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_saas_settings_component();
    init_saas_settings_component2();
    init_common();
    init_core();
    init_select();
    SaasSettingsComponent = class SaasSettingsComponent2 {
    };
    SaasSettingsComponent = __decorate([
      Component({
        selector: "app-saas-settings",
        imports: [CommonModule, MatSelectModule],
        template: saas_settings_component_default,
        styles: [saas_settings_component_default2]
      })
    ], SaasSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.spec.ts
var require_saas_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.spec.ts"(exports) {
    init_testing();
    init_saas_settings_component3();
    describe("SaasSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SaasSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SaasSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_saas_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-app-settings-saas-settings-saas-settings.component.spec.js.map
