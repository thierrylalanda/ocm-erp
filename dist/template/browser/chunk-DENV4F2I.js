import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/website-settings/prefixes-settings/prefixes-settings.component.ts
var PrefixesSettingsComponent = class _PrefixesSettingsComponent {
  static \u0275fac = function PrefixesSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrefixesSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrefixesSettingsComponent, selectors: [["app-prefixes-settings"]], decls: 101, vars: 0, consts: [[1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], [1, "row"], [1, "col-md-4"], [1, "mb-3"], [1, "form-label"], [1, "input-group", "d-flex", "align-items-center", "mb-3"], [1, "input-group-text", "border-end-0", "fs-14", "pe-1"], ["type", "text", "aria-label", "Username", 1, "form-control", "border-start-0", "ps-0"]], template: function PrefixesSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Prefixes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label", 6);
      \u0275\u0275text(8, "Product");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 7)(10, "span", 8);
      \u0275\u0275text(11, "PRO -");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(12, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(13, "div", 4)(14, "div", 5)(15, "label", 6);
      \u0275\u0275text(16, "Invoice");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "div", 7)(18, "span", 8);
      \u0275\u0275text(19, "INV -");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(20, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(21, "div", 4)(22, "div", 5)(23, "label", 6);
      \u0275\u0275text(24, "Transaction");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div", 7)(26, "span", 8);
      \u0275\u0275text(27, "TXN -");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(28, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(29, "div", 4)(30, "div", 5)(31, "label", 6);
      \u0275\u0275text(32, "Purchase");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div", 7)(34, "span", 8);
      \u0275\u0275text(35, "PUR - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(36, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(37, "div", 4)(38, "div", 5)(39, "label", 6);
      \u0275\u0275text(40, "Reference Number");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "div", 7)(42, "span", 8);
      \u0275\u0275text(43, "REF - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(44, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(45, "div", 4)(46, "div", 5)(47, "label", 6);
      \u0275\u0275text(48, "Debit Note");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "div", 7)(50, "span", 8);
      \u0275\u0275text(51, "DN - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(52, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(53, "div", 4)(54, "div", 5)(55, "label", 6);
      \u0275\u0275text(56, "Credit Note");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "div", 7)(58, "span", 8);
      \u0275\u0275text(59, "CN - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(60, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(61, "div", 4)(62, "div", 5)(63, "label", 6);
      \u0275\u0275text(64, "Purchase Order");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "div", 7)(66, "span", 8);
      \u0275\u0275text(67, "PO - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(68, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(69, "div", 4)(70, "div", 5)(71, "label", 6);
      \u0275\u0275text(72, "Payments");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "div", 7)(74, "span", 8);
      \u0275\u0275text(75, "PAY - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(76, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(77, "div", 4)(78, "div", 5)(79, "label", 6);
      \u0275\u0275text(80, "Quotation");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "div", 7)(82, "span", 8);
      \u0275\u0275text(83, "QUO - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(84, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(85, "div", 4)(86, "div", 5)(87, "label", 6);
      \u0275\u0275text(88, "Expense");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(89, "div", 7)(90, "span", 8);
      \u0275\u0275text(91, "EXP - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(92, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(93, "div", 4)(94, "div", 5)(95, "label", 6);
      \u0275\u0275text(96, "Income");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "div", 7)(98, "span", 8);
      \u0275\u0275text(99, "INC - ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(100, "input", 9);
      \u0275\u0275domElementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixesSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-prefixes-settings", imports: [], template: '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom">\n        <h6 class="fw-bold mb-0">Prefixes</h6>\n    </div>\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Product</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">PRO -</span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Invoice</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">INV -</span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Transaction</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">TXN -</span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Purchase</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">PUR - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Reference Number</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">REF - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Debit Note</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">DN - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Credit Note</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">CN - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Purchase Order</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">PO - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Payments</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">PAY - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Quotation</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">QUO - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Expense</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">EXP - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n        <div class="col-md-4">\n            <div class="mb-3">\n                <label class="form-label">Income</label>\n                <div class="input-group d-flex align-items-center mb-3">\n                    <span class="input-group-text border-end-0 fs-14 pe-1">INC - </span>\n                    <input type="text" class="form-control border-start-0 ps-0" aria-label="Username">\n                </div>\n            </div>\n        </div><!-- end col -->\n    </div>\n    <!-- end row -->\n\n</div> <!-- end col  -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrefixesSettingsComponent, { className: "PrefixesSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/prefixes-settings/prefixes-settings.component.ts", lineNumber: 9 });
})();
export {
  PrefixesSettingsComponent
};
//# sourceMappingURL=chunk-DENV4F2I.js.map
