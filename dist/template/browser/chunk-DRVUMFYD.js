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

// src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.ts
var StorageComponent = class _StorageComponent {
  static \u0275fac = function StorageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorageComponent, selectors: [["app-storage"]], decls: 77, vars: 0, consts: [[1, ""], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "row"], [1, "col-md-6"], [1, "card", "shadow-none"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "bg-light", "rounded", "p-2", "me-2"], ["src", "assets/img/icons/storage-icon-01.svg", "alt", "Img", 1, "img-fluid"], [1, "fw-medium", "text-dark"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "user1", "role", "switch", "checked", "", 1, "form-check-input"], ["src", "assets/img/icons/storage-icon-02.svg", "alt", "Img", 1, "img-fluid"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#aws_modal", 1, "btn", "btn-sm", "btn-light", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2"], [1, "isax", "isax-setting-2", "fs-14"], ["type", "checkbox", "id", "user2", "role", "switch", "checked", "", 1, "form-check-input"], ["id", "aws_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close", "btn-close-modal"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function StorageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "Storage");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "span", 9);
      \u0275\u0275domElement(12, "img", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "p", 11);
      \u0275\u0275text(14, "Local Storage");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "div", 8)(16, "div", 12);
      \u0275\u0275domElement(17, "input", 13);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(18, "div", 4)(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8)(23, "span", 9);
      \u0275\u0275domElement(24, "img", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "p", 11);
      \u0275\u0275text(26, "AWS");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "div", 8)(28, "a", 15);
      \u0275\u0275domElement(29, "i", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "div", 12);
      \u0275\u0275domElement(31, "input", 17);
      \u0275\u0275domElementEnd()()()()()()()()();
      \u0275\u0275domElementStart(32, "div", 18)(33, "div", 19)(34, "div", 20)(35, "div", 21)(36, "h4", 22);
      \u0275\u0275text(37, "AWS");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "button", 23);
      \u0275\u0275domElement(39, "i", 24);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "form")(41, "div", 25)(42, "div", 26)(43, "label", 27);
      \u0275\u0275text(44, "AWS Access Key ");
      \u0275\u0275domElementStart(45, "span", 28);
      \u0275\u0275text(46, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(47, "input", 29);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "div", 26)(49, "label", 27);
      \u0275\u0275text(50, "Secret Key ");
      \u0275\u0275domElementStart(51, "span", 28);
      \u0275\u0275text(52, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(53, "input", 29);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "div", 26)(55, "label", 27);
      \u0275\u0275text(56, "Bucket Name ");
      \u0275\u0275domElementStart(57, "span", 28);
      \u0275\u0275text(58, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(59, "input", 29);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(60, "div", 26)(61, "label", 27);
      \u0275\u0275text(62, "Region ");
      \u0275\u0275domElementStart(63, "span", 28);
      \u0275\u0275text(64, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(65, "input", 29);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "div")(67, "label", 27);
      \u0275\u0275text(68, "Base URL ");
      \u0275\u0275domElementStart(69, "span", 28);
      \u0275\u0275text(70, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(71, "input", 29);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(72, "div", 30)(73, "button", 31);
      \u0275\u0275text(74, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "button", 32);
      \u0275\u0275text(76, "Submit");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageComponent, [{
    type: Component,
    args: [{ selector: "app-storage", imports: [], template: '<div class="">\n    <div>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Storage</h6>\n        </div>\n\n        <!-- start row -->\n        <div class="row">\n            <div class="col-md-6">\n                <div class="card shadow-none">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-md bg-light rounded p-2 me-2">\n                                    <img src="assets/img/icons/storage-icon-01.svg" class="img-fluid" alt="Img">\n                                </span>\n                                <p class="fw-medium text-dark">Local Storage</p>\n                            </div>\n                            <div class="d-flex align-items-center">\n                                <div class="form-check form-switch">\n                                    <input type="checkbox" id="user1" class="form-check-input" role="switch" checked>\n                                </div>\n                            </div>\n                        </div>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n            </div>\n            <div class="col-md-6">\n                <div class="card shadow-none">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-md bg-light rounded p-2 me-2">\n                                    <img src="assets/img/icons/storage-icon-02.svg" class="img-fluid" alt="Img">\n                                </span>\n                                <p class="fw-medium text-dark">AWS</p>\n                            </div>\n                            <div class="d-flex align-items-center">\n                                <a href="javascript:void(0);" class="btn btn-sm btn-light rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" data-bs-toggle="modal" data-bs-target="#aws_modal"><i class="isax isax-setting-2 fs-14"></i></a>\n                                <div class="form-check form-switch">\n                                    <input type="checkbox" id="user2" class="form-check-input" role="switch" checked>\n                                </div>\n                            </div>\n                        </div>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n            </div>\n        </div>\n        <!-- end row -->\n\n    </div>\n</div>\n\n        <!-- Start Modal  -->\n        <div id="aws_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">AWS</h4>\n                        <button type="button" class="btn-close custom-btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-3">\n                                <label class="form-label">AWS Access Key <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Secret Key <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Bucket Name <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Region <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div>\n                                <label class="form-label">Base URL <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Modal -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorageComponent, { className: "StorageComponent", filePath: "src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.ts", lineNumber: 9 });
})();
export {
  StorageComponent
};
//# sourceMappingURL=chunk-DRVUMFYD.js.map
