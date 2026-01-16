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

// src/app/modules/setting/presentation/pages/website-settings/preference-settings/preference-settings.component.ts
var PreferenceSettingsComponent = class _PreferenceSettingsComponent {
  static \u0275fac = function PreferenceSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreferenceSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreferenceSettingsComponent, selectors: [["app-preference-settings"]], decls: 119, vars: 0, consts: [[1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], [1, "row"], [1, "col-xxl-4", "col-xl-4", "col-sm-6"], [1, "d-flex", "justify-content-between", "align-items-center", "border", "rounded", "bg-white", "p-3", "mb-3"], [1, "text-gray-9", "mb-0"], [1, "form-check", "form-switch", "ps-2"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0"]], template: function PreferenceSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Preferences");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "p", 6);
      \u0275\u0275text(8, "Products");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 7);
      \u0275\u0275domElement(10, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(11, "div", 4)(12, "div", 5)(13, "p", 6);
      \u0275\u0275text(14, "Inventory");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "div", 7);
      \u0275\u0275domElement(16, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(17, "div", 4)(18, "div", 5)(19, "p", 6);
      \u0275\u0275text(20, "Invoices");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "div", 7);
      \u0275\u0275domElement(22, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(23, "div", 4)(24, "div", 5)(25, "p", 6);
      \u0275\u0275text(26, "Credit Notes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "div", 7);
      \u0275\u0275domElement(28, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(29, "div", 4)(30, "div", 5)(31, "p", 6);
      \u0275\u0275text(32, "Quotations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div", 7);
      \u0275\u0275domElement(34, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(35, "div", 4)(36, "div", 5)(37, "p", 6);
      \u0275\u0275text(38, "Delivery Challans");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "div", 7);
      \u0275\u0275domElement(40, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(41, "div", 4)(42, "div", 5)(43, "p", 6);
      \u0275\u0275text(44, "Customers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "div", 7);
      \u0275\u0275domElement(46, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(47, "div", 4)(48, "div", 5)(49, "p", 6);
      \u0275\u0275text(50, "Purchases");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "div", 7);
      \u0275\u0275domElement(52, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(53, "div", 4)(54, "div", 5)(55, "p", 6);
      \u0275\u0275text(56, "Purchase Order");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "div", 7);
      \u0275\u0275domElement(58, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(59, "div", 4)(60, "div", 5)(61, "p", 6);
      \u0275\u0275text(62, "Debit Notes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "div", 7);
      \u0275\u0275domElement(64, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(65, "div", 4)(66, "div", 5)(67, "p", 6);
      \u0275\u0275text(68, "Suppliers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(69, "div", 7);
      \u0275\u0275domElement(70, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(71, "div", 4)(72, "div", 5)(73, "p", 6);
      \u0275\u0275text(74, "Supplier Payments");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "div", 7);
      \u0275\u0275domElement(76, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(77, "div", 4)(78, "div", 5)(79, "p", 6);
      \u0275\u0275text(80, "Expenses");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "div", 7);
      \u0275\u0275domElement(82, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(83, "div", 4)(84, "div", 5)(85, "p", 6);
      \u0275\u0275text(86, "Incomes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "div", 7);
      \u0275\u0275domElement(88, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(89, "div", 4)(90, "div", 5)(91, "p", 6);
      \u0275\u0275text(92, "Payments");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(93, "div", 7);
      \u0275\u0275domElement(94, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(95, "div", 4)(96, "div", 5)(97, "p", 6);
      \u0275\u0275text(98, "Transactions");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(99, "div", 7);
      \u0275\u0275domElement(100, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(101, "div", 4)(102, "div", 5)(103, "p", 6);
      \u0275\u0275text(104, "Bank Accounts");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(105, "div", 7);
      \u0275\u0275domElement(106, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(107, "div", 4)(108, "div", 5)(109, "p", 6);
      \u0275\u0275text(110, "Reports");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(111, "div", 7);
      \u0275\u0275domElement(112, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(113, "div", 4)(114, "div", 5)(115, "p", 6);
      \u0275\u0275text(116, "User Management");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(117, "div", 7);
      \u0275\u0275domElement(118, "input", 8);
      \u0275\u0275domElementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreferenceSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-preference-settings", imports: [], template: '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom">\n        <h6 class="fw-bold mb-0">Preferences</h6>\n    </div>\n    <div class="row">\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Products</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Inventory</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Invoices</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Credit Notes</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Quotations</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Delivery Challans</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Customers</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Purchases</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Purchase Order</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Debit Notes</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Suppliers</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Supplier Payments</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Expenses</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Incomes</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Payments</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Transactions</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Bank Accounts</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">Reports</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n        <div class="col-xxl-4 col-xl-4 col-sm-6">\n            <div class="d-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">\n                <p class="text-gray-9 mb-0">User Management</p>\n                <div class="form-check form-switch ps-2">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>  <!-- end col-->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreferenceSettingsComponent, { className: "PreferenceSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/preference-settings/preference-settings.component.ts", lineNumber: 9 });
})();
export {
  PreferenceSettingsComponent
};
//# sourceMappingURL=chunk-6MFVIWY4.js.map
