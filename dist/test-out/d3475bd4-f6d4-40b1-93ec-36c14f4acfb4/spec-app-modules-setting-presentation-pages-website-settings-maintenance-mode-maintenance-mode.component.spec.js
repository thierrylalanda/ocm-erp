import {
  Editor,
  NgxEditorModule,
  init_ngx_editor
} from "./chunk-BWQRL5BR.js";
import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
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

// angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.html
var maintenance_mode_component_default;
var init_maintenance_mode_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.html"() {
    maintenance_mode_component_default = '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom">\n        <h6 class="fw-bold mb-0">Maintenance Mode</h6>\n    </div>\n    <form>\n        <div class="mb-3">\n            <label class="form-label">Image <span class="text-danger">*</span></label>\n            <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">\n                <div class="d-flex align-items-center bg-light justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">\n                    <i class="isax isax-image text-gray-4 fs-12"></i>\n                </div>\n                <div class="profile-upload">\n                    <div class="profile-uploader d-flex align-items-center">\n                        <div class="drag-upload-btn btn btn-md btn-primary">\n                            <i class="isax isax-image fs-14 me-1"></i> Upload Image\n                            <input type="file" class="form-control image-sign" multiple="">\n                        </div>\n                    </div>\n                    <div class="mt-2">\n                        <p class="fs-12">JPG or PNG format, not exceeding 5MB.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="mb-3">\n            <label class="form-label">Meta Description<span class="text-danger ms-1">*</span></label>\n            <ngx-editor [editor]="editor">\n                <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                </ngx-editor-menu>\n             </ngx-editor>\n        </div>\n        <div class="form-check form-check-sm form-switch me-2">\n            <label class="form-check-label form-label mt-0 mb-0 fw-normal">\n                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked> Status\n            </label>\n        </div>\n        <div class="pt-4 mt-4 border-top mb-3">\n            <div class="d-flex justify-content-between">\n                <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n        </div>\n    </form>\n    <!-- end Form -->\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.scss
var maintenance_mode_component_default2;
var init_maintenance_mode_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.scss"() {
    maintenance_mode_component_default2 = "/* src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.scss */\n/*# sourceMappingURL=maintenance-mode.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.ts
var MaintenanceModeComponent;
var init_maintenance_mode_component3 = __esm({
  "src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_maintenance_mode_component();
    init_maintenance_mode_component2();
    init_common();
    init_core();
    init_forms();
    init_ngx_editor();
    MaintenanceModeComponent = class MaintenanceModeComponent2 {
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
    MaintenanceModeComponent = __decorate([
      Component({
        selector: "app-maintenance-mode",
        imports: [CommonModule, FormsModule, NgxEditorModule],
        template: maintenance_mode_component_default,
        styles: [maintenance_mode_component_default2]
      })
    ], MaintenanceModeComponent);
  }
});

// src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.spec.ts
var require_maintenance_mode_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component.spec.ts"(exports) {
    init_testing();
    init_maintenance_mode_component3();
    describe("MaintenanceModeComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [MaintenanceModeComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(MaintenanceModeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_maintenance_mode_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-website-settings-maintenance-mode-maintenance-mode.component.spec.js.map
