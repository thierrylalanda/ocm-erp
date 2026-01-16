import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule
} from "./chunk-I5UCRYM6.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.ts
var MaintenanceModeComponent = class _MaintenanceModeComponent {
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
  static \u0275fac = function MaintenanceModeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceModeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceModeComponent, selectors: [["app-maintenance-mode"]], decls: 39, vars: 3, consts: [[1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "bg-light", "justify-content-center", "avatar", "avatar-xxl", "border", "me-3", "flex-shrink-0", "text-dark", "frames"], [1, "isax", "isax-image", "text-gray-4", "fs-12"], [1, "profile-upload"], [1, "profile-uploader", "d-flex", "align-items-center"], [1, "drag-upload-btn", "btn", "btn-md", "btn-primary"], [1, "isax", "isax-image", "fs-14", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "mt-2"], [1, "fs-12"], [1, "text-danger", "ms-1"], [3, "editor"], [3, "editor", "toolbar"], [1, "form-check", "form-check-sm", "form-switch", "me-2"], [1, "form-check-label", "form-label", "mt-0", "mb-0", "fw-normal"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input", "form-label", "me-2"], [1, "pt-4", "mt-4", "border-top", "mb-3"], [1, "d-flex", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["type", "submit", 1, "btn", "btn-primary"]], template: function MaintenanceModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Maintenance Mode");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form")(5, "div", 3)(6, "label", 4);
      \u0275\u0275text(7, "Image ");
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11);
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17, " Upload Image ");
      \u0275\u0275element(18, "input", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "p", 15);
      \u0275\u0275text(21, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(22, "div", 3)(23, "label", 4);
      \u0275\u0275text(24, "Meta Description");
      \u0275\u0275elementStart(25, "span", 16);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "ngx-editor", 17);
      \u0275\u0275element(28, "ngx-editor-menu", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 19)(30, "label", 20);
      \u0275\u0275element(31, "input", 21);
      \u0275\u0275text(32, " Status ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 22)(34, "div", 23)(35, "a", 24);
      \u0275\u0275text(36, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 25);
      \u0275\u0275text(38, "Save Changes");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, NgxEditorModule, NgxEditorComponent, MenuComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceModeComponent, [{
    type: Component,
    args: [{ selector: "app-maintenance-mode", imports: [CommonModule, FormsModule, NgxEditorModule], template: '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom">\n        <h6 class="fw-bold mb-0">Maintenance Mode</h6>\n    </div>\n    <form>\n        <div class="mb-3">\n            <label class="form-label">Image <span class="text-danger">*</span></label>\n            <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">\n                <div class="d-flex align-items-center bg-light justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">\n                    <i class="isax isax-image text-gray-4 fs-12"></i>\n                </div>\n                <div class="profile-upload">\n                    <div class="profile-uploader d-flex align-items-center">\n                        <div class="drag-upload-btn btn btn-md btn-primary">\n                            <i class="isax isax-image fs-14 me-1"></i> Upload Image\n                            <input type="file" class="form-control image-sign" multiple="">\n                        </div>\n                    </div>\n                    <div class="mt-2">\n                        <p class="fs-12">JPG or PNG format, not exceeding 5MB.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="mb-3">\n            <label class="form-label">Meta Description<span class="text-danger ms-1">*</span></label>\n            <ngx-editor [editor]="editor">\n                <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                </ngx-editor-menu>\n             </ngx-editor>\n        </div>\n        <div class="form-check form-check-sm form-switch me-2">\n            <label class="form-check-label form-label mt-0 mb-0 fw-normal">\n                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked> Status\n            </label>\n        </div>\n        <div class="pt-4 mt-4 border-top mb-3">\n            <div class="d-flex justify-content-between">\n                <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n        </div>\n    </form>\n    <!-- end Form -->\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceModeComponent, { className: "MaintenanceModeComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.ts", lineNumber: 12 });
})();
export {
  MaintenanceModeComponent
};
//# sourceMappingURL=chunk-UZ7UOLPB.js.map
