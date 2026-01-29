import {
  Editor,
  NgxEditorModule,
  init_ngx_editor
} from "./chunk-BWQRL5BR.js";
import {
  MatSelectModule,
  init_select
} from "./chunk-PJP4EZYQ.js";
import "./chunk-ZLTBFUHR.js";
import "./chunk-N2Q3HONL.js";
import "./chunk-ZQVU7KV2.js";
import "./chunk-Y46UO4F7.js";
import "./chunk-WYJ2IQUD.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import "./chunk-2RBILSOV.js";
import {
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import {
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/content/blogs/add-blogs/add-blogs.component.html
var add_blogs_component_default;
var init_add_blogs_component = __esm({
  "angular:jit:template:src/app/features/content/blogs/add-blogs/add-blogs.component.html"() {
    add_blogs_component_default = '            <!-- Start Content -->\n            <div class="">\n\n                <!-- start row -->\n                <div class="row">\n                    <div class="col-md-10 mx-auto">\n                        <div>\n                            <div class="d-flex align-items-center justify-content-between mb-3">\n                                <h6><a [routerLink]="routes.allBlogs"><i class="isax isax-arrow-left me-2"></i>All Blogs</a></h6>\n                                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>\n                            </div>\n                            <div class="card">\n                                <div class="card-body">\n                                    <h5 class="mb-3">Add Blog</h5>\n                                    <form>\n                                        <div class="mb-3">\n                                            <h6 class=" mb-2">Basic Details</h6>\n                                        </div>\n\n                                        <!-- start row -->\n                                        <div class="row gx-3">\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Title<span class="text-danger ms-1">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">Invoicing</mat-option>\n                                                        <mat-option value="1">Accounting</mat-option>\n                                                        <mat-option value="1">ExpenseManagement</mat-option>\n                                                        <mat-option value="1">BusinessFinance</mat-option>\n                                                        <mat-option value="1">Technology</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Tag<span class="text-danger ms-1">*</span></label>\n                                                    <input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput" name="specialist">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-12">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Content<span class="text-danger ms-1">*</span></label>\n                                                    <ngx-editor [editor]="editor">\n                                                        <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                                                        </ngx-editor-menu>\n                                                     </ngx-editor>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-12">\n                                                <div class="mb-3 pb-3 border-bottom">\n                                                    <label class="form-label">Images</label>\n                                                    <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">\n                                                        <span class="upload-img d-block mb-2"><i class="isax isax-folder-open text-primary fs-16"></i></span>\n                                                        <p class="mb-0 text-gray-9">Drop your files here or<a href="javascript:void(0);" class="text-primary text-decoration-underline">\n																browse</a></p>\n                                                        <input type="file" accept="video/image">\n                                                        <p class="fs-13">Maximum size : 50 MB</p>\n                                                    </div>\n                                                </div>\n                                            </div><!-- end col -->\n                                        </div>\n                                        <!-- end row -->\n\n                                        <div class="d-flex align-items-center justify-content-between">\n                                            <button type="button" class="btn btn-outline-white">Cancel</button>\n                                            <button type="submit" class="btn btn-primary">Create New</button>\n                                        </div>\n                                    </form>\n                                </div><!-- end card body -->\n                            </div><!-- end card -->\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n            </div>\n            <!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/content/blogs/add-blogs/add-blogs.component.scss
var add_blogs_component_default2;
var init_add_blogs_component2 = __esm({
  "angular:jit:style:src/app/features/content/blogs/add-blogs/add-blogs.component.scss"() {
    add_blogs_component_default2 = "/* src/app/features/content/blogs/add-blogs/add-blogs.component.scss */\n/*# sourceMappingURL=add-blogs.component.css.map */\n";
  }
});

// src/app/features/content/blogs/add-blogs/add-blogs.component.ts
var AddBlogsComponent;
var init_add_blogs_component3 = __esm({
  "src/app/features/content/blogs/add-blogs/add-blogs.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_add_blogs_component();
    init_add_blogs_component2();
    init_core();
    init_ngx_editor();
    init_core_index();
    init_common();
    init_select();
    init_router();
    AddBlogsComponent = class AddBlogsComponent2 {
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
    };
    AddBlogsComponent = __decorate([
      Component({
        selector: "app-add-blogs",
        imports: [CommonModule, NgxEditorModule, MatSelectModule, RouterLink],
        template: add_blogs_component_default,
        styles: [add_blogs_component_default2]
      })
    ], AddBlogsComponent);
  }
});

// src/app/features/content/blogs/add-blogs/add-blogs.component.spec.ts
var require_add_blogs_component_spec = __commonJS({
  "src/app/features/content/blogs/add-blogs/add-blogs.component.spec.ts"(exports) {
    init_testing();
    init_add_blogs_component3();
    describe("AddBlogsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AddBlogsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AddBlogsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_add_blogs_component_spec();
//# sourceMappingURL=spec-app-features-content-blogs-add-blogs-add-blogs.component.spec.js.map
