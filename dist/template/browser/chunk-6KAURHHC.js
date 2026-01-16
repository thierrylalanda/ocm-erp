import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-5H6GXSFV.js";
import "./chunk-YETY7SH2.js";
import "./chunk-M4MC2D7Y.js";
import "./chunk-UNWSAGEL.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import "./chunk-BLAAMQ2R.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/app-settings/thermal-printer/thermal-printer.component.ts
var ThermalPrinterComponent = class _ThermalPrinterComponent {
  static \u0275fac = function ThermalPrinterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThermalPrinterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThermalPrinterComponent, selectors: [["app-thermal-printer"]], decls: 72, vars: 0, consts: [[1, ""], [1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "row", "align-items-center"], [1, "col-9"], [1, "form-label", "fw-medium", "mb-3"], [1, "col-3", "mb-3"], [1, "form-check", "form-switch", "d-flex", "justify-content-end"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], [1, "col-md-8", "col-sm-12"], [1, "form-label", "fw-medium"], [1, "col-md-4", "col-sm-12"], ["type", "text", "value", "24", 1, "form-control"], [1, "row", "align-items-center", "mb-3"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-md-6", "col-sm-12"], ["placeholder", "", 1, "form-control"]], template: function ThermalPrinterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
      \u0275\u0275text(4, "Thermal Printer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "form")(6, "div", 0)(7, "div", 4)(8, "div", 5)(9, "label", 6);
      \u0275\u0275text(10, "Show Terms on ThermalPrint ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
      \u0275\u0275element(13, "input", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 4)(15, "div", 5)(16, "label", 6);
      \u0275\u0275text(17, "Show Google Reviews QR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 7)(19, "div", 8);
      \u0275\u0275element(20, "input", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 4)(22, "div", 5)(23, "label", 6);
      \u0275\u0275text(24, "Show Taxable Amount ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 7)(26, "div", 8);
      \u0275\u0275element(27, "input", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 4)(29, "div", 5)(30, "label", 6);
      \u0275\u0275text(31, "Show Company Details ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 7)(33, "div", 8);
      \u0275\u0275element(34, "input", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 4)(36, "div", 5)(37, "label", 6);
      \u0275\u0275text(38, "Show Item Description ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 7)(40, "div", 8);
      \u0275\u0275element(41, "input", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 4)(43, "div", 10)(44, "label", 11);
      \u0275\u0275text(45, "Organization Name Font Size ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 12)(47, "div")(48, "div", 1);
      \u0275\u0275element(49, "input", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 4)(51, "div", 10)(52, "label", 11);
      \u0275\u0275text(53, "Company Name Font Size ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 12)(55, "div")(56, "div", 1);
      \u0275\u0275element(57, "input", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 14)(59, "div", 10)(60, "label", 11);
      \u0275\u0275text(61, "Select Printer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 12)(63, "mat-select", 15)(64, "mat-option", 16);
      \u0275\u0275text(65, "Thermal Printer 80 mm");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 4)(67, "div", 17)(68, "label", 11);
      \u0275\u0275text(69, "Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 17);
      \u0275\u0275element(71, "textarea", 18);
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThermalPrinterComponent, [{
    type: Component,
    args: [{ selector: "app-thermal-printer", imports: [CommonModule, MatSelectModule], template: '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Thermal Printer</h6>\n        </div>\n        <form>\n            <div class="">\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Terms on ThermalPrint </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Google Reviews QR </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Taxable Amount </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Company Details </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium mb-3">Show Item Description </label>\n                    </div><!-- end col -->\n                    <div class="col-3 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Organization Name Font Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="24">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Company Name Font Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="24">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Select Printer </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Thermal Printer 80 mm</mat-option>\n                        </mat-select>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-6 col-sm-12">\n                        <label class="form-label fw-medium">Notes </label>\n                    </div><!-- end col -->\n                    <div class="col-md-6 col-sm-12">\n                        <textarea class="form-control" placeholder=""></textarea>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n        </form>\n    </div>\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThermalPrinterComponent, { className: "ThermalPrinterComponent", filePath: "src/app/modules/setting/presentation/pages/app-settings/thermal-printer/thermal-printer.component.ts", lineNumber: 11 });
})();
export {
  ThermalPrinterComponent
};
//# sourceMappingURL=chunk-6KAURHHC.js.map
