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

// src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.ts
var IntegrationsSettingsComponent = class _IntegrationsSettingsComponent {
  static \u0275fac = function IntegrationsSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntegrationsSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IntegrationsSettingsComponent, selectors: [["app-integrations-settings"]], decls: 51, vars: 0, consts: [[1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], [1, "row"], [1, "col-md-6"], [1, "card", "shadow-none"], [1, "card-body"], [1, "d-flex", "align-items-center", "border-0", "mb-3", "pb-0"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "p-2", "bg-light", "rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/icons/mail-icon.svg", "alt", "Img"], [1, "fw-medium", "text-gray-9"], [1, "card-footer", "bg-light", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "p-1"], [1, "isax", "isax-trash"], [1, "form-check", "form-switch"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0"], ["src", "assets/img/icons/calender-icon.svg", "alt", "Img"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], [1, "mb-3"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function IntegrationsSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h6", 1);
      \u0275\u0275text(2, "Integrations");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
      \u0275\u0275domElement(10, "img", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p", 10);
      \u0275\u0275text(12, "Gmail");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(13, "p");
      \u0275\u0275text(14, "Send invoices, payment reminders and customer communication directly ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "div", 11)(16, "a", 12);
      \u0275\u0275domElement(17, "i", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "div", 14);
      \u0275\u0275domElement(19, "input", 15);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(20, "div", 3)(21, "div", 4)(22, "div", 5)(23, "div", 6)(24, "div", 7)(25, "span", 8);
      \u0275\u0275domElement(26, "img", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "p", 10);
      \u0275\u0275text(28, "Google Calendar");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(29, "p");
      \u0275\u0275text(30, "Automatically schedule invoice due dates and set up payment follow-up.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "div", 11)(32, "a", 12);
      \u0275\u0275domElement(33, "i", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "div", 14);
      \u0275\u0275domElement(35, "input", 15);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(36, "div", 17)(37, "div", 18)(38, "div", 19)(39, "div", 20)(40, "div", 21);
      \u0275\u0275domElement(41, "img", 22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "h6", 23);
      \u0275\u0275text(43, "Delete");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "p", 21);
      \u0275\u0275text(45, "Are you sure, you want to delete?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "div", 24)(47, "a", 25);
      \u0275\u0275text(48, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "a", 26);
      \u0275\u0275text(50, "Yes, Delete");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntegrationsSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-integrations-settings", imports: [], template: '<div class="mb-3 pb-3 border-bottom">\n    <h6 class="fw-bold mb-0">Integrations</h6>\n</div>\n\n<!-- start row -->\n<div class="row">\n\n    <div class="col-md-6">\n        <div class="card shadow-none">\n            <div class="card-body">\n                <div class="d-flex align-items-center border-0 mb-3 pb-0">\n                    <div class="d-flex align-items-center">\n                        <span class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"><img src="assets/img/icons/mail-icon.svg" alt="Img"></span>\n                        <p class="fw-medium text-gray-9">Gmail</p>\n                    </div>\n                </div>\n                <p>Send invoices, payment reminders and customer communication directly </p>\n            </div> <!-- end card body -->\n            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">\n                <a class="btn btn-sm btn-dark rounded-2 p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                <div class="form-check form-switch">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div> <!-- end card footer -->\n        </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-6">\n        <div class="card shadow-none">\n            <div class="card-body">\n                <div class="d-flex align-items-center border-0 mb-3 pb-0">\n                    <div class="d-flex align-items-center">\n                        <span class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"><img src="assets/img/icons/calender-icon.svg" alt="Img"></span>\n                        <p class="fw-medium text-gray-9">Google Calendar</p>\n                    </div>\n                </div>\n                <p>Automatically schedule invoice due dates and set up payment follow-up.</p>\n            </div> <!-- end card body -->\n            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">\n                <a class="btn btn-sm btn-dark rounded-2 p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                <div class="form-check form-switch">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div> <!-- end card footer -->\n        </div> <!-- end card -->\n    </div> <!-- end col -->\n</div>\n<!-- end row -->\n\n\n		<!-- Start Delete Modal  -->\n		<div class="modal fade" id="delete_modal">\n			<div class="modal-dialog modal-dialog-centered modal-sm">\n				<div class="modal-content">\n					<div class="modal-body text-center">\n						<div class="mb-3">\n							<img src="assets/img/icons/delete.svg" alt="img">\n						</div>\n						<h6 class="mb-1">Delete</h6>\n						<p class="mb-3">Are you sure,  you want to delete?</p>\n						<div class="d-flex justify-content-center">\n							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n						</div>\n					</div><!-- End modal body -->\n				</div><!-- End modal content -->\n			</div><!-- End modal dialog -->\n		</div>\n		<!-- End Delete Modal  -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IntegrationsSettingsComponent, { className: "IntegrationsSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.ts", lineNumber: 9 });
})();
export {
  IntegrationsSettingsComponent
};
//# sourceMappingURL=chunk-RJFOZJTV.js.map
