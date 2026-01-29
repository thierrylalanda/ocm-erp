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

// angular:jit:template:src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.html
var thermal_printer_component_default;
var init_thermal_printer_component = __esm({
  "angular:jit:template:src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.html"() {
    thermal_printer_component_default = '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Thermal Printer</h6>\n        </div>\n        <form>\n            <div class="">\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Terms on ThermalPrint </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Google Reviews QR </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Taxable Amount </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Company Details </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Item Description </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Organization Name Font Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="24">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Company Name Font Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="24">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Select Printer </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Thermal Printer 80 mm</mat-option>\n                        </mat-select>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-6 col-sm-12">\n                        <label class="form-label fw-medium">Notes </label>\n                    </div><!-- end col -->\n                    <div class="col-md-6 col-sm-12">\n                        <textarea class="form-control" placeholder=""></textarea>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n        </form>\n    </div>\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.scss
var thermal_printer_component_default2;
var init_thermal_printer_component2 = __esm({
  "angular:jit:style:src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.scss"() {
    thermal_printer_component_default2 = "/* src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.scss */\n/*# sourceMappingURL=thermal-printer.component.css.map */\n";
  }
});

// src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.ts
var ThermalPrinterComponent;
var init_thermal_printer_component3 = __esm({
  "src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_thermal_printer_component();
    init_thermal_printer_component2();
    init_common();
    init_core();
    init_select();
    ThermalPrinterComponent = class ThermalPrinterComponent2 {
    };
    ThermalPrinterComponent = __decorate([
      Component({
        selector: "app-thermal-printer",
        imports: [CommonModule, MatSelectModule],
        template: thermal_printer_component_default,
        styles: [thermal_printer_component_default2]
      })
    ], ThermalPrinterComponent);
  }
});

// src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.spec.ts
var require_thermal_printer_component_spec = __commonJS({
  "src/app/features/setting/app-settings/thermal-printer/thermal-printer.component.spec.ts"(exports) {
    init_testing();
    init_thermal_printer_component3();
    describe("ThermalPrinterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ThermalPrinterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ThermalPrinterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_thermal_printer_component_spec();
//# sourceMappingURL=spec-app-features-setting-app-settings-thermal-printer-thermal-printer.component.spec.js.map
