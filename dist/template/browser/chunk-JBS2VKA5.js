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
import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink
} from "./chunk-WOBWH5QA.js";
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

// src/app/features/content/blogs/edit-blogs/edit-blogs.component.ts
var EditBlogsComponent = class _EditBlogsComponent {
  routes = routes;
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
  static \u0275fac = function EditBlogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditBlogsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditBlogsComponent, selectors: [["app-edit-blogs"]], decls: 96, vars: 4, consts: [[1, ""], [1, "row"], [1, "col-md-10", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "mb-2"], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", "value", "Small Businesses Automate Accounting", 1, "form-control"], ["placeholder", "Accounting", 1, "custom-mat-select", "select"], ["value", "1"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "specialist", "value", "Main, Accounts", 1, "input-tags", "form-control"], [1, "col-lg-12"], [3, "editor"], [3, "editor", "toolbar"], [1, "mb-3", "pb-3", "border-bottom"], [1, "file-upload", "drag-file", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "d-block", "mb-2"], [1, "isax", "isax-folder-open", "text-primary", "fs-16"], [1, "mb-0", "text-gray-9"], ["href", "javascript:void(0);", 1, "text-primary", "text-decoration-underline"], ["type", "file", "accept", "video/image"], [1, "fs-13"], [1, "row", "mb-3", "border-bottom"], [1, "col-lg-4"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["src", "assets/img/media/img-07.png", "alt", "img", 1, "avatar", "avatar-lg", "rounded", "me-2"], ["href", "javascript:void(0);", 1, "fs-14", "fw-medium", "d-block"], ["href", "javascript:void(0);", 1, "btn", "p-1", "btn-light", "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditBlogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "h6")(6, "a", 4);
      \u0275\u0275element(7, "i", 5);
      \u0275\u0275text(8, "All Blogs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "h5", 10);
      \u0275\u0275text(15, "Edit Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "form")(17, "div", 10)(18, "h6", 11);
      \u0275\u0275text(19, "Basic Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 10)(23, "label", 14);
      \u0275\u0275text(24, "Title");
      \u0275\u0275elementStart(25, "span", 15);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 13)(29, "div", 10)(30, "label", 14);
      \u0275\u0275text(31, "Category");
      \u0275\u0275elementStart(32, "span", 15);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "mat-select", 17)(35, "mat-option", 18);
      \u0275\u0275text(36, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-option", 18);
      \u0275\u0275text(38, "Invoicing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-option", 18);
      \u0275\u0275text(40, "Accounting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "mat-option", 18);
      \u0275\u0275text(42, "ExpenseManagement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-option", 18);
      \u0275\u0275text(44, "BusinessFinance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-option", 18);
      \u0275\u0275text(46, "Technology");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 13)(48, "div", 10)(49, "label", 14);
      \u0275\u0275text(50, "Tag");
      \u0275\u0275elementStart(51, "span", 15);
      \u0275\u0275text(52, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(53, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 20)(55, "div", 10)(56, "label", 14);
      \u0275\u0275text(57, "Content");
      \u0275\u0275elementStart(58, "span", 15);
      \u0275\u0275text(59, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "ngx-editor", 21);
      \u0275\u0275element(61, "ngx-editor-menu", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 20)(63, "div", 23)(64, "label", 14);
      \u0275\u0275text(65, "Images");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 24)(67, "span", 25);
      \u0275\u0275element(68, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p", 27);
      \u0275\u0275text(70, "Drop your files here or");
      \u0275\u0275elementStart(71, "a", 28);
      \u0275\u0275text(72, " browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(73, "input", 29);
      \u0275\u0275elementStart(74, "p", 30);
      \u0275\u0275text(75, "Maximum size : 50 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 20)(77, "div", 31)(78, "div", 32)(79, "div", 8)(80, "div", 9)(81, "div", 33)(82, "div", 34);
      \u0275\u0275element(83, "img", 35);
      \u0275\u0275elementStart(84, "div")(85, "a", 36);
      \u0275\u0275text(86, "Blog1.jpg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span", 30);
      \u0275\u0275text(88, "15.45 KB");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "a", 37);
      \u0275\u0275element(90, "i", 38);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(91, "div", 33)(92, "button", 39);
      \u0275\u0275text(93, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "button", 40);
      \u0275\u0275text(95, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.allBlogs);
      \u0275\u0275advance(54);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    }
  }, dependencies: [CommonModule, NgxEditorModule, NgxEditorComponent, MenuComponent, MatSelectModule, MatSelect, MatOption, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditBlogsComponent, [{
    type: Component,
    args: [{ selector: "app-edit-blogs", imports: [CommonModule, NgxEditorModule, MatSelectModule, RouterLink], template: '			<!-- Start Content -->\n            <div class="">\n\n                <!-- start row -->\n                <div class="row">\n                    <div class="col-md-10 mx-auto">\n                        <div>\n                            <div class="d-flex align-items-center justify-content-between mb-3">\n                                <h6><a [routerLink]="routes.allBlogs"><i class="isax isax-arrow-left me-2"></i>All Blogs</a></h6>\n                                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>\n                            </div>\n                            <div class="card">\n                                <div class="card-body">\n                                    <h5 class="mb-3">Edit Blog</h5>\n                                    <form>\n                                        <div class="mb-3">\n                                            <h6 class=" mb-2">Basic Details</h6>\n                                        </div>\n                                        <div class="row gx-3">\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Title<span class="text-danger ms-1">*</span></label>\n                                                    <input type="text" class="form-control" value="Small Businesses Automate Accounting">\n                                                </div>\n                                            </div>\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Accounting">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">Invoicing</mat-option>\n                                                        <mat-option value="1">Accounting</mat-option>\n                                                        <mat-option value="1">ExpenseManagement</mat-option>\n                                                        <mat-option value="1">BusinessFinance</mat-option>\n                                                        <mat-option value="1">Technology</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div>\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Tag<span class="text-danger ms-1">*</span></label>\n                                                    <input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput" name="specialist" value="Main, Accounts">\n                                                </div>\n                                            </div>\n                                            <div class="col-lg-12">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Content<span class="text-danger ms-1">*</span></label>\n                                                    <ngx-editor [editor]="editor">\n                                                        <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                                                        </ngx-editor-menu>\n                                                     </ngx-editor>\n                                                </div>\n                                            </div>\n                                            <div class="col-lg-12">\n                                                <div class="mb-3 pb-3 border-bottom">\n                                                    <label class="form-label">Images</label>\n                                                    <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">\n                                                        <span class="upload-img d-block mb-2"><i class="isax isax-folder-open text-primary fs-16"></i></span>\n                                                        <p class="mb-0 text-gray-9">Drop your files here or<a href="javascript:void(0);" class="text-primary text-decoration-underline">\n																browse</a></p>\n                                                        <input type="file" accept="video/image">\n                                                        <p class="fs-13">Maximum size : 50 MB</p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class="col-lg-12">\n                                                <div class="row mb-3 border-bottom">\n                                                    <div class="col-lg-4">\n                                                        <div class="card">\n                                                            <div class="card-body">\n                                                                <div class="d-flex align-items-center justify-content-between">\n                                                                    <div class="d-flex align-items-center">\n                                                                        <img src="assets/img/media/img-07.png" alt="img" class="avatar avatar-lg rounded me-2">\n                                                                        <div>\n                                                                            <a href="javascript:void(0);" class="fs-14 fw-medium d-block">Blog1.jpg</a>\n                                                                            <span class="fs-13">15.45 KB</span>\n                                                                        </div>\n                                                                    </div>\n                                                                    <a href="javascript:void(0);" class="btn p-1 btn-light rounded-circle d-inline-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class="d-flex align-items-center justify-content-between">\n                                            <button type="button" class="btn btn-outline-white">Cancel</button>\n                                            <button type="submit" class="btn btn-primary">Save Changes</button>\n                                        </div>\n                                    </form>\n                                </div><!-- end card body -->\n                            </div><!-- end card -->\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n			<!-- End Content -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditBlogsComponent, { className: "EditBlogsComponent", filePath: "src/app/features/content/blogs/edit-blogs/edit-blogs.component.ts", lineNumber: 14 });
})();
export {
  EditBlogsComponent
};
//# sourceMappingURL=chunk-JBS2VKA5.js.map
