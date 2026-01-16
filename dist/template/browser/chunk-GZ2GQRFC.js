import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.ts
var BarcodeSettingsComponent = class _BarcodeSettingsComponent {
  static \u0275fac = function BarcodeSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarcodeSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarcodeSettingsComponent, selectors: [["app-barcode-settings"]], decls: 58, vars: 0, consts: [[1, ""], [1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "vh-100", "border-bottom", "mb-3"], [1, "row", "align-items-center"], [1, "col-8"], [1, "form-label", "fw-medium", "mb-3"], [1, "col-4", "mb-3"], [1, "form-check", "form-switch", "d-flex", "justify-content-end"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], [1, "col-md-8", "col-sm-12"], [1, "col-md-4", "col-sm-12"], ["type", "text", "value", "MRP", 1, "form-control"], ["type", "text", "value", "16", 1, "form-control"], ["type", "text", "value", "10", 1, "form-control"], [1, "modal-footer", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-back", "me-2", "border"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function BarcodeSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
      \u0275\u0275text(4, "Barcode");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "form")(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
      \u0275\u0275text(10, "Show Package Date ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 8)(12, "div", 9);
      \u0275\u0275domElement(13, "input", 10);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "div", 5)(15, "div", 11)(16, "label", 7);
      \u0275\u0275text(17, "MRP Label ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "div", 12)(19, "div")(20, "div", 1);
      \u0275\u0275domElement(21, "input", 13);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(22, "div", 5)(23, "div", 6)(24, "label", 7);
      \u0275\u0275text(25, "Show Package Date ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 8)(27, "div", 9);
      \u0275\u0275domElement(28, "input", 10);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(29, "div", 5)(30, "div", 11)(31, "label", 7);
      \u0275\u0275text(32, "Product Name Font Size ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(33, "div", 12)(34, "div")(35, "div", 1);
      \u0275\u0275domElement(36, "input", 14);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(37, "div", 5)(38, "div", 11)(39, "label", 7);
      \u0275\u0275text(40, "MRP Font Size ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(41, "div", 12)(42, "div")(43, "div", 1);
      \u0275\u0275domElement(44, "input", 14);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(45, "div", 5)(46, "div", 11)(47, "label", 7);
      \u0275\u0275text(48, "Barcode Size ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(49, "div", 12)(50, "div")(51, "div", 1);
      \u0275\u0275domElement(52, "input", 15);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(53, "div", 16)(54, "a", 17);
      \u0275\u0275text(55, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "a", 18);
      \u0275\u0275text(57, "Save Changes");
      \u0275\u0275domElementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarcodeSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-barcode-settings", imports: [], template: '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Barcode</h6>\n        </div>\n        <form>\n            <div class="vh-100 border-bottom mb-3">\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-8">\n                        <label class="form-label fw-medium mb-3">Show Package Date </label>\n                    </div><!-- end col -->\n                    <div class="col-4 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium mb-3">MRP Label </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="MRP">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-8">\n                        <label class="form-label fw-medium mb-3">Show Package Date </label>\n                    </div><!-- end col -->\n                    <div class="col-4 mb-3">\n                        <div class="form-check form-switch d-flex justify-content-end">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium mb-3">Product Name Font Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="16">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium mb-3">MRP Font Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="16">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row align-items-center">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium mb-3">Barcode Size </label>\n                    </div><!-- end col -->\n                    <div class="col-md-4 col-sm-12">\n                        <div>\n                            <div class="mb-3">\n                                <input type="text" class="form-control" value="10">\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n\n            <div class="modal-footer justify-content-between">\n                <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-back me-2 border">Cancel</a>\n                <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary">Save Changes</a>\n            </div>\n\n        </form>\n    </div>\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarcodeSettingsComponent, { className: "BarcodeSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component.ts", lineNumber: 9 });
})();
export {
  BarcodeSettingsComponent
};
//# sourceMappingURL=chunk-GZ2GQRFC.js.map
