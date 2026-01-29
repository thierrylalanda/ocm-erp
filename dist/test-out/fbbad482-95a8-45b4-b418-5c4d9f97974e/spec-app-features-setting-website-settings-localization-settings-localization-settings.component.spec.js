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

// angular:jit:template:src/app/features/setting/website-settings/localization-settings/localization-settings.component.html
var localization_settings_component_default;
var init_localization_settings_component = __esm({
  "angular:jit:template:src/app/features/setting/website-settings/localization-settings/localization-settings.component.html"() {
    localization_settings_component_default = `<div class="mb-3 pb-2">
    <div class="mb-3 pb-3 border-bottom">
        <h6 class="fw-bold mb-0">Localization</h6>
    </div>
    <div class="d-flex align-items-center mb-3">
        <span class="p-1 rounded-2 bg-dark text-white d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-info-circle"></i></span>
        <h6 class="fw-semibold fs-16 mb-0 d-inline-flex align-items-center">Basic Information</h6>
    </div>
    <div class="row align-items-center row-gap-3 mb-3">
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Time Zone<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="(+5:30) GMT">
                    <mat-option value="1">(+5:30) GMT</mat-option>
                    <mat-option value="1">(GMT -10:00) Hawaii</mat-option>
                    <mat-option value="1">(GMT -9:30) Taiohae</mat-option>
                    <mat-option value="1">(GMT -9:00) Alaska </mat-option>
                    <mat-option value="1">(GMT -8:00) Pacific Time, Canada</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Start Week On<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="Monday">
                    <mat-option value="1">Monday</mat-option>
                    <mat-option value="1">Tuesday</mat-option>
                    <mat-option value="1">Wednesday</mat-option>
                    <mat-option value="1">Thursday</mat-option>
                    <mat-option value="1">Friday</mat-option>
                    <mat-option value="1">Saturday</mat-option>
                    <mat-option value="1">Sunday</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Date Format<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="18 Mar 2025">
                    <mat-option value="1">18 Mar 2025</mat-option>
                    <mat-option value="1">Mar 18 2025</mat-option>
                    <mat-option value="1">2025 Mar 18</mat-option>
                </mat-select>
            </div>

        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Time Format<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="12 hrs">
                    <mat-option value="1">12 hrs</mat-option>
                    <mat-option value="1">24hrs</mat-option>
                </mat-select>
            </div>

        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Default Language<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="English">
                    <mat-option value="1">English</mat-option>
                    <mat-option value="1">German</mat-option>
                    <mat-option value="1">Arabic</mat-option>
                    <mat-option value="1">French</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Language Switcher<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <div class="form-check form-switch ps-0">
                    <input class="form-check-input m-0" type="checkbox" checked="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="border-top mt-2 pt-4">
                <div class="d-flex align-items-center mb-3">
                    <span class="p-1 rounded-2 bg-dark text-white d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-dollar-square"></i></span>
                    <h5 class="fw-semibold fs-16 mb-0 d-inline-flex align-items-center">Currency Information</h5>
                </div>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Currency<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="USD">
                    <mat-option value="1">USD</mat-option>
                    <mat-option value="1">Dollar</mat-option>
                    <mat-option value="1">Euro</mat-option>
                    <mat-option value="1">Pound</mat-option>
                    <mat-option value="1">Rupee</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Currency Symbol <span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="$">
                    <mat-option value="1">$</mat-option>
                    <mat-option value="1">\u20B9</mat-option>
                    <mat-option value="1">\xA3</mat-option>
                    <mat-option value="1">\u20AC</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Currency Position<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder="$100">
                    <mat-option value="1">$100</mat-option>
                    <mat-option value="1">100$</mat-option>
                    <mat-option value="1">$ 100</mat-option>
                    <mat-option value="1">100 $</mat-option>
                </mat-select>
            </div>
        </div>
        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Decimal Separator<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select" placeholder=".">
                    <mat-option value="1">.</mat-option>
                    <mat-option value="1">,</mat-option>
                </mat-select>
            </div>
        </div>

        <div class="col-xl-9 col-sm-7">
            <div class="setting-info">
                <h6 class="fs-14 fw-medium mb-0">Thousand Separator<span class="text-danger ms-1">*</span></h6>
            </div>
        </div>
        <div class="col-xl-3 col-sm-5 float-sm-end">
            <div>
                <mat-select class="custom-mat-select select lh-2" placeholder=".">
                    <mat-option value="1">.</mat-option>
                    <mat-option value="1">,</mat-option>
                    <mat-option value="1">'</mat-option>
                </mat-select>
            </div>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-between settings-bottom-btn mt-0 border-top pt-3">
        <button type="button" class="btn btn-outline-white btn-md me-2">Cancel</button>
        <button type="submit" class="btn btn-primary btn-md">Save Changes</button>
    </div>
</div>`;
  }
});

// angular:jit:style:src/app/features/setting/website-settings/localization-settings/localization-settings.component.scss
var localization_settings_component_default2;
var init_localization_settings_component2 = __esm({
  "angular:jit:style:src/app/features/setting/website-settings/localization-settings/localization-settings.component.scss"() {
    localization_settings_component_default2 = "/* src/app/features/setting/website-settings/localization-settings/localization-settings.component.scss */\n/*# sourceMappingURL=localization-settings.component.css.map */\n";
  }
});

// src/app/features/setting/website-settings/localization-settings/localization-settings.component.ts
var LocalizationSettingsComponent;
var init_localization_settings_component3 = __esm({
  "src/app/features/setting/website-settings/localization-settings/localization-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_localization_settings_component();
    init_localization_settings_component2();
    init_common();
    init_core();
    init_select();
    LocalizationSettingsComponent = class LocalizationSettingsComponent2 {
    };
    LocalizationSettingsComponent = __decorate([
      Component({
        selector: "app-localization-settings",
        imports: [CommonModule, MatSelectModule],
        template: localization_settings_component_default,
        styles: [localization_settings_component_default2]
      })
    ], LocalizationSettingsComponent);
  }
});

// src/app/features/setting/website-settings/localization-settings/localization-settings.component.spec.ts
var require_localization_settings_component_spec = __commonJS({
  "src/app/features/setting/website-settings/localization-settings/localization-settings.component.spec.ts"(exports) {
    init_testing();
    init_localization_settings_component3();
    describe("LocalizationSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [LocalizationSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LocalizationSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_localization_settings_component_spec();
//# sourceMappingURL=spec-app-features-setting-website-settings-localization-settings-localization-settings.component.spec.js.map
