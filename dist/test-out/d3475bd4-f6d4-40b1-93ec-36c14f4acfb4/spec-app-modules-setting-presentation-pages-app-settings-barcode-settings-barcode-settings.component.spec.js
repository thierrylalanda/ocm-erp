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

// angular:jit:template:src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.html
var barcode_settings_component_default;
var init_barcode_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.html"() {
    barcode_settings_component_default = '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Barcode</h6>\n        </div>\n        <form>\n            <div class="vh-100 border-bottom mb-3">\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-8">\n                        <label class="form-label fw-medium mb-3">Show Package Date </label>\n                    </div><!-- end col -->\n                    <div class="col-4 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium mb-3">MRP Label </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="MRP">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-8">\n                        <label class="form-label fw-medium mb-3">Show Package Date </label>\n                    </div><!-- end col -->\n                    <div class="col-4 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium mb-3">Product Name Font Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="16">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium mb-3">MRP Font Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="16">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium mb-3">Barcode Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="10">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n\n            <div class="modal-footer justify-content-between">\n                <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-back me-2 border">Cancel</a>\n                <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary">Save Changes</a>\n            </div>\n\n        </form>\n    </div>\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.scss
var barcode_settings_component_default2;
var init_barcode_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.scss"() {
    barcode_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.scss */\n/*# sourceMappingURL=barcode-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.ts
var BarcodeSettingsComponent;
var init_barcode_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_barcode_settings_component();
    init_barcode_settings_component2();
    init_core();
    BarcodeSettingsComponent = class BarcodeSettingsComponent2 {
    };
    BarcodeSettingsComponent = __decorate([
      Component({
        selector: "app-barcode-settings",
        imports: [],
        template: barcode_settings_component_default,
        styles: [barcode_settings_component_default2]
      })
    ], BarcodeSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.spec.ts
var require_barcode_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.spec.ts"(exports) {
    init_testing();
    init_barcode_settings_component3();
    describe("BarcodeSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [BarcodeSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BarcodeSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_barcode_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-app-settings-barcode-settings-barcode-settings.component.spec.js.map
