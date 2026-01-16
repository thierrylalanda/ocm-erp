import {
  TagInputComponent,
  TagInputModule
} from "./chunk-LSAJTI6Q.js";
import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule
} from "./chunk-I5UCRYM6.js";
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
import "./chunk-SCUCSJ4X.js";
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
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.ts
var _c0 = () => ({ standalone: true });
var SeoSetupComponent = class _SeoSetupComponent {
  editor;
  editor1;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  ngOnInit() {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
    this.editor1.destroy();
  }
  tags = ["Test"];
  static \u0275fac = function SeoSetupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoSetupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SeoSetupComponent, selectors: [["app-seo-setup"]], decls: 75, vars: 14, consts: [[1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], [1, "mb-3", "border-bottom"], [1, "fw-semibold", "fs-16", "mb-3"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [3, "editor"], [3, "editor", "toolbar"], [3, "ngModelChange", "ngModelOptions", "ngModel", "placeholder"], [1, "fs-13", "mt-1", "d-flex"], [1, "fw-bold", "fs-16", "mb-3"], [1, "text-danger"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "bg-light", "justify-content-center", "avatar", "avatar-xxl", "border", "me-3", "flex-shrink-0", "text-dark", "frames"], [1, "isax", "isax-image", "text-gray-4", "fs-12"], [1, "profile-upload"], [1, "profile-uploader", "d-flex", "align-items-center"], [1, "drag-upload-btn", "btn", "btn-md", "btn-primary"], [1, "isax", "isax-image", "fs-14", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "mt-2"], [1, "fs-12"], [1, "d-flex", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["type", "submit", 1, "btn", "btn-primary"]], template: function SeoSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "SEO Setup");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form")(5, "div", 3)(6, "h6", 4);
      \u0275\u0275text(7, "SEO Setup - Site Meta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "label", 6);
      \u0275\u0275text(10, "Meta Title");
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 5)(15, "label", 6);
      \u0275\u0275text(16, "Site Description");
      \u0275\u0275elementStart(17, "span", 7);
      \u0275\u0275text(18, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "ngx-editor", 9);
      \u0275\u0275element(20, "ngx-editor-menu", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 1)(22, "label", 6);
      \u0275\u0275text(23, "Keywords");
      \u0275\u0275elementStart(24, "span", 7);
      \u0275\u0275text(25, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "tag-input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function SeoSetupComponent_Template_tag_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 12);
      \u0275\u0275text(28, "Enter value separated by comma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "h6", 13);
      \u0275\u0275text(30, "SEO Setup - OG Meta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 5)(32, "label", 6);
      \u0275\u0275text(33, "Meta Image ");
      \u0275\u0275elementStart(34, "span", 14);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 15)(37, "div", 16);
      \u0275\u0275element(38, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 18)(40, "div", 19)(41, "div", 20);
      \u0275\u0275element(42, "i", 21);
      \u0275\u0275text(43, " Upload Image ");
      \u0275\u0275element(44, "input", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 23)(46, "p", 24);
      \u0275\u0275text(47, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 5)(49, "label", 6);
      \u0275\u0275text(50, "Meta Title");
      \u0275\u0275elementStart(51, "span", 7);
      \u0275\u0275text(52, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(53, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 5)(55, "label", 6);
      \u0275\u0275text(56, "Site Description");
      \u0275\u0275elementStart(57, "span", 7);
      \u0275\u0275text(58, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "ngx-editor", 9);
      \u0275\u0275element(60, "ngx-editor-menu", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 5)(62, "label", 6);
      \u0275\u0275text(63, "Keywords");
      \u0275\u0275elementStart(64, "span", 7);
      \u0275\u0275text(65, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "tag-input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function SeoSetupComponent_Template_tag_input_ngModelChange_66_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span", 12);
      \u0275\u0275text(68, "Enter value separated by comma");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 5)(70, "div", 25)(71, "a", 26);
      \u0275\u0275text(72, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 27);
      \u0275\u0275text(74, "Save Changes");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.tags);
      \u0275\u0275property("placeholder", "Add new");
      \u0275\u0275advance(33);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.tags);
      \u0275\u0275property("placeholder", "Add new");
    }
  }, dependencies: [NgxEditorModule, NgxEditorComponent, MenuComponent, TagInputModule, TagInputComponent, CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoSetupComponent, [{
    type: Component,
    args: [{ selector: "app-seo-setup", imports: [NgxEditorModule, TagInputModule, CommonModule, FormsModule], template: `<div class="mb-3 pb-2">
    <div class="mb-3 pb-3 border-bottom">
        <h6 class="fw-bold mb-0">SEO Setup</h6>
    </div>
    <form>
        <div class="mb-3 border-bottom">
            <h6 class="fw-semibold fs-16 mb-3">SEO Setup - Site Meta</h6>
            <div class="mb-3">
                <label class="form-label">Meta Title<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Site Description<span class="text-danger ms-1">*</span></label>
                <ngx-editor [editor]="editor">
                    <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                    </ngx-editor-menu>
                 </ngx-editor>
            </div>
            <div class="mb-3 pb-3 border-bottom">
                <label class="form-label">Keywords<span class="text-danger ms-1">*</span></label>
                <tag-input [ngModelOptions]="{standalone: true}" [(ngModel)]="tags" [placeholder]="'Add new'"></tag-input>
                <span class="fs-13 mt-1 d-flex">Enter value separated by comma</span>
            </div>
            <h6 class="fw-bold fs-16 mb-3">SEO Setup - OG Meta</h6>
            <div class="mb-3">
                <label class="form-label">Meta Image <span class="text-danger">*</span></label>
                <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                    <div class="d-flex align-items-center bg-light justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                        <i class="isax isax-image text-gray-4 fs-12"></i>
                    </div>
                    <div class="profile-upload">
                        <div class="profile-uploader d-flex align-items-center">
                            <div class="drag-upload-btn btn btn-md btn-primary">
                                <i class="isax isax-image fs-14 me-1"></i> Upload Image
                                <input type="file" class="form-control image-sign" multiple="">
                            </div>
                        </div>
                        <div class="mt-2">
                            <p class="fs-12">JPG or PNG format, not exceeding 5MB.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Meta Title<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Site Description<span class="text-danger ms-1">*</span></label>
                    <ngx-editor [editor]="editor1">
                        <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >
                        </ngx-editor-menu>
                     </ngx-editor>
            </div>
            <div class="mb-3">
                <label class="form-label">Keywords<span class="text-danger ms-1">*</span></label>
                <tag-input [ngModelOptions]="{standalone: true}" [(ngModel)]="tags" [placeholder]="'Add new'"></tag-input>
                <!-- <input class="input-tags form-control" id="inputBox1" type="text" data-role="tagsinput" name="specialist" value="Test"> -->
                <span class="fs-13 mt-1 d-flex">Enter value separated by comma</span>
            </div>
        </div>
        <div class="mb-3">
            <div class="d-flex justify-content-between">
                <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
        </div>
    </form>
</div><!-- end col -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeoSetupComponent, { className: "SeoSetupComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.ts", lineNumber: 13 });
})();
export {
  SeoSetupComponent
};
//# sourceMappingURL=chunk-VWZL3X7K.js.map
