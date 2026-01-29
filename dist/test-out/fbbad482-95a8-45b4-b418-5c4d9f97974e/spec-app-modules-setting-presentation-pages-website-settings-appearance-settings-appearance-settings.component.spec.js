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

// angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.html
var appearance_settings_component_default;
var init_appearance_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.html"() {
    appearance_settings_component_default = '<div class="">\n    <div class="mb-3 pb-3 border-bottom">\n        <h6 class="fw-bold mb-0">Appearance</h6>\n    </div>\n    <form>\n        <div class="mb-3">\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-xl-4 col-md-4">\n                    <div class="setting-info mb-3">\n                        <h6 class="fs-14 mb-1 fw-semibold">Select Theme</h6>\n                        <span>Choose theme of website</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-8 col-md-8">\n                    <div class="row theme-type-images d-flex align-items-center">\n                        <div class="col-md-4">\n                            <div class="card theme-image" [class.active]="active[0]" (click)="toggleActive(0)">\n                                <div class="card-body p-2">\n                                    <a href="javascript:void(0);">\n                                        <div class="border rounded border-gray mb-2">\n                                            <img src="assets/img/theme/light.jpg" class="img-fluid rounded" alt="theme">\n                                        </div>\n                                        <p class="text-center fw-medium text-truncate">Light</p>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-4">\n                            <div class="card theme-image" [class.active]="active[1]" (click)="toggleActive(1)">\n                                <div class="card-body p-2">\n                                    <a href="javascript:void(0);">\n                                        <div class="border rounded border-gray mb-2">\n                                            <img src="assets/img/theme/dark.jpg" class="img-fluid rounded" alt="theme">\n                                        </div>\n                                        <p class="text-center fw-medium text-truncate">Dark</p>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-4">\n                            <div class="card theme-image" [class.active]="active[2]" (click)="toggleActive(2)">\n                                <div class="card-body p-2">\n                                    <a href="javascript:void(0);">\n                                        <div class="border rounded border-gray mb-2">\n                                            <img src="assets/img/theme/automatic.jpg" class="img-fluid rounded" alt="theme">\n                                        </div>\n                                        <p class="text-center fw-medium text-truncate">Automatic</p>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-xl-4 col-md-4">\n                    <div class="setting-info mb-3">\n                        <h6 class="fs-14 mb-1 fw-semibold">Accent Color</h6>\n                        <span>Choose accent colour of website</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-8 col-md-8">\n                    <div class="theme-colors d-flex align-items-center justify-content-end mb-3">\n                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">\n                            <li>\n                                <span class="themecolorset" [class.active]="active2[0]" (click)="toggleActive2(0)">\n                                    <span class="primecolor bg-primary">\n                                        <span class="colorcheck text-white"><i class="ti ti-check text-primary fs-10"></i></span>\n                                </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class="themecolorset" [class.active]="active2[1]" (click)="toggleActive2(1)">\n                                    <span class="primecolor bg-secondary">\n                                        <span class="colorcheck text-white"><i class="ti ti-check text-primary fs-10"></i></span>\n                                </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class="themecolorset" [class.active]="active2[2]" (click)="toggleActive2(2)">\n                                    <span class="primecolor bg-info">\n                                        <span class="colorcheck text-white"><i class="ti ti-check text-primary fs-10"></i></span>\n                                </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class="themecolorset" [class.active]="active2[3]" (click)="toggleActive2(3)">\n                                    <span class="primecolor bg-danger">\n                                        <span class="colorcheck text-white"><i class="ti ti-check text-primary fs-10"></i></span>\n                                </span>\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center justify-content-between mb-3">\n                <div class="col-xl-4 col-md-4">\n                    <div class="">\n                        <h6 class="fs-14 mb-1 fw-semibold">Expand Sidebar</h6>\n                        <span>Choose expand sidebar</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-3 col-md-4">\n                    <div class="d-flex align-items-center justify-content-end">\n                        <div class="form-check form-switch">\n                            <input class="form-check-input m-0" type="checkbox" checked="">\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center justify-content-between mb-3">\n                <div class="col-xl-4 col-md-4">\n                    <div class="">\n                        <h6 class="fs-14 mb-1 fw-semibold">Sidebar Size</h6>\n                        <span>Select size of the sidebar to display</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-3 col-md-4">\n                    <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">\n                        <mat-select class="custom-mat-select select" placeholder="Medium - 250px">\n                            <mat-option value="1">Small - 200px </mat-option>\n                            <mat-option value="1">Medium - 250px</mat-option>\n                            <mat-option value="1">Large - 300px</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center justify-content-between mb-3">\n                <div class="col-xl-4 col-md-4">\n                    <div class="">\n                        <h6 class="fs-14 mb-1 fw-semibold">Font Family</h6>\n                        <span>Select font family of website</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-3 col-md-4">\n                    <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">\n                        <mat-select class="custom-mat-select select" placeholder="Instrument Sans">\n                            <mat-option value="1">Instrument Sans</mat-option>\n                            <mat-option value="1">Nunito</mat-option>\n                            <mat-option value="1">Poppins</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n\n        <div class="text-end settings-bottom-btn mt-0 border-top d-flex align-items-center justify-content-between pt-4 mb-3">\n            <button type="button" class="btn btn-outline-white btn-md me-2">Cancel</button>\n            <button type="submit" class="btn btn-primary btn-md">Save Changes</button>\n        </div>\n\n    </form>\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.scss
var appearance_settings_component_default2;
var init_appearance_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.scss"() {
    appearance_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.scss */\n/*# sourceMappingURL=appearance-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.ts
var AppearanceSettingsComponent;
var init_appearance_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_appearance_settings_component();
    init_appearance_settings_component2();
    init_common();
    init_core();
    init_select();
    AppearanceSettingsComponent = class AppearanceSettingsComponent2 {
      active = [true, false, false];
      toggleActive(index) {
        this.active = this.active.map((_, i) => i === index);
      }
      active2 = [true, false, false];
      toggleActive2(index) {
        this.active2 = this.active2.map((_, i) => i === index);
      }
    };
    AppearanceSettingsComponent = __decorate([
      Component({
        selector: "app-appearance-settings",
        imports: [CommonModule, MatSelectModule],
        template: appearance_settings_component_default,
        styles: [appearance_settings_component_default2]
      })
    ], AppearanceSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.spec.ts
var require_appearance_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.spec.ts"(exports) {
    init_testing();
    init_appearance_settings_component3();
    describe("AppearanceSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AppearanceSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AppearanceSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_appearance_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-website-settings-appearance-settings-appearance-settings.component.spec.js.map
