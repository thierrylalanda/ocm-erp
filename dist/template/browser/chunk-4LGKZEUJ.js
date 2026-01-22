import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule
} from "./chunk-T6JEQ3C5.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MUITGCTV.js";
import "./chunk-O6CHOV5Y.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-ZTQFL2WC.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import "./chunk-NAWYXTZ5.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/app-settings/invoice-settings/invoice-settings.component.ts
var InvoiceSettingsComponent = class _InvoiceSettingsComponent {
  editor;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static \u0275fac = function InvoiceSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceSettingsComponent, selectors: [["app-invoice-settings"]], decls: 65, vars: 3, consts: [[1, ""], [1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "row"], [1, "col-md-12"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "bg-light", "justify-content-center", "avatar", "avatar-xxl", "border", "me-3", "flex-shrink-0", "text-dark", "frames"], [1, "isax", "isax-image", "text-primary", "fs-24"], [1, "profile-upload"], [1, "profile-uploader", "d-flex", "align-items-center"], [1, "drag-upload-btn", "btn", "btn-md", "btn-primary"], [1, "isax", "isax-image", "text-white", "fs-16", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "mt-2"], [1, "fs-12"], [1, "row", "align-items-center"], [1, "col-md-8", "col-sm-12"], [1, "form-label", "fw-medium"], [1, "col-md-4", "col-sm-12"], ["type", "text", 1, "form-control"], [1, "col-md-3", "col-sm-12"], [1, "mb-3", "d-flex", "align-items-center"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-md-1", "col-sm-12"], [1, "ms-1", "d-flex", "align-items-center", "mb-3"], [1, "form-check", "form-check-sm", "form-switch"], [1, "form-check-label", "form-label", "m-0"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input", "form-label"], [1, "form-check", "form-check-sm", "form-switch", "text-end"], [3, "editor"], [3, "editor", "toolbar"]], template: function InvoiceSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
      \u0275\u0275text(4, "Invoice Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "form")(6, "div", 4)(7, "div", 5)(8, "div", 1)(9, "label", 6);
      \u0275\u0275text(10, "Invoice Image");
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
      \u0275\u0275element(15, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "div", 13);
      \u0275\u0275element(19, "i", 14);
      \u0275\u0275text(20, " Upload Image ");
      \u0275\u0275element(21, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 16)(23, "p", 17);
      \u0275\u0275text(24, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "label", 20);
      \u0275\u0275text(28, "Invoice Prefix ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 21)(30, "div", 1);
      \u0275\u0275element(31, "input", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "label", 20);
      \u0275\u0275text(35, "Invoice Round Off ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 23)(37, "div", 24)(38, "mat-select", 25)(39, "mat-option", 26);
      \u0275\u0275text(40, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "mat-option", 26);
      \u0275\u0275text(42, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-option", 26);
      \u0275\u0275text(44, "10");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 27)(46, "div", 28)(47, "div", 29)(48, "label", 30);
      \u0275\u0275element(49, "input", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 18)(51, "div", 19)(52, "label", 20);
      \u0275\u0275text(53, "Show Company Details ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 21)(55, "div", 32)(56, "label", 30);
      \u0275\u0275element(57, "input", 31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 18)(59, "div", 21)(60, "label", 20);
      \u0275\u0275text(61, "Invoice Terms ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 19)(63, "ngx-editor", 33);
      \u0275\u0275element(64, "ngx-editor-menu", 34);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(63);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    }
  }, dependencies: [CommonModule, NgxEditorModule, NgxEditorComponent, MenuComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-settings", imports: [CommonModule, NgxEditorModule, MatSelectModule], template: '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Invoice Settings</h6>\n        </div>\n        <form>\n\n            <!-- start row -->\n            <div class="row">\n                <div class="col-md-12">\n                    <div class="mb-3">\n                        <label class="form-label">Invoice Image<span class="text-danger ms-1">*</span></label>\n                        <div class="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                \n                            <div class="d-flex align-items-center bg-light justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">\n                                <i class="isax isax-image text-primary fs-24"></i>\n                            </div>                                              \n                            <div class="profile-upload">\n                                <div class="profile-uploader d-flex align-items-center">\n                                    <div class="drag-upload-btn btn btn-md btn-primary">\n                                        <i class="isax isax-image text-white fs-16 me-1"></i>\n                                        Upload Image\n                                        <input type="file" class="form-control image-sign" multiple="">\n                                    </div>\n                                </div>\n                                <div class="mt-2">\n                                    <p class="fs-12">JPG or PNG format, not exceeding 5MB.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-md-8 col-sm-12">\n                    <label class="form-label fw-medium">Invoice Prefix </label>\n                </div><!-- end col -->\n                <div class="col-md-4 col-sm-12">\n                    <div class="mb-3">\n                        <input type="text" class="form-control">\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-md-8 col-sm-12">\n                    <label class="form-label fw-medium">Invoice Round Off </label>\n                </div><!-- end col -->\n                <div class="col-md-3 col-sm-12">\n                    <div class="mb-3 d-flex align-items-center">\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">5</mat-option>\n                            <mat-option value="1">10</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-md-1 col-sm-12">\n                    <div class="ms-1 d-flex align-items-center mb-3">\n                        <div class="form-check form-check-sm form-switch">\n                            <label class="form-check-label form-label m-0">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                            </label>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-md-8 col-sm-12">\n                    <label class="form-label fw-medium">Show Company Details </label>\n                </div><!-- end col -->\n                <div class="col-md-4 col-sm-12">\n                    <div class="form-check form-check-sm form-switch text-end">\n                        <label class="form-check-label form-label m-0">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </label>\n                    </div>\n                </div><!-- end col -->\n            </div>	\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-md-4 col-sm-12">\n                    <label class="form-label fw-medium">Invoice Terms </label>\n                </div><!-- end col -->\n                <div class="col-md-8 col-sm-12">\n                    <ngx-editor [editor]="editor">\n                        <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                        </ngx-editor-menu>\n                     </ngx-editor>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </form>\n    </div>\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceSettingsComponent, { className: "InvoiceSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/app-settings/invoice-settings/invoice-settings.component.ts", lineNumber: 12 });
})();
export {
  InvoiceSettingsComponent
};
//# sourceMappingURL=chunk-4LGKZEUJ.js.map
