import {
  TagInputModule,
  init_ngx_chips
} from "./chunk-PLNAKAZW.js";
import {
  Editor,
  NgxEditorModule,
  init_ngx_editor
} from "./chunk-BWQRL5BR.js";
import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import "./chunk-5B5ZAECM.js";
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

// angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.html
var seo_setup_component_default;
var init_seo_setup_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.html"() {
    seo_setup_component_default = `<div class="mb-3 pb-2">
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
</div><!-- end col -->`;
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.scss
var seo_setup_component_default2;
var init_seo_setup_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.scss"() {
    seo_setup_component_default2 = "/* src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.scss */\n/*# sourceMappingURL=seo-setup.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.ts
var SeoSetupComponent;
var init_seo_setup_component3 = __esm({
  "src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_seo_setup_component();
    init_seo_setup_component2();
    init_common();
    init_core();
    init_forms();
    init_ngx_chips();
    init_ngx_editor();
    SeoSetupComponent = class SeoSetupComponent2 {
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
    };
    SeoSetupComponent = __decorate([
      Component({
        selector: "app-seo-setup",
        imports: [NgxEditorModule, TagInputModule, CommonModule, FormsModule],
        template: seo_setup_component_default,
        styles: [seo_setup_component_default2]
      })
    ], SeoSetupComponent);
  }
});

// src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.spec.ts
var require_seo_setup_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/website-settings/seo-setup/seo-setup.component.spec.ts"(exports) {
    init_testing();
    init_seo_setup_component3();
    describe("SeoSetupComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SeoSetupComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SeoSetupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_seo_setup_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-website-settings-seo-setup-seo-setup.component.spec.js.map
