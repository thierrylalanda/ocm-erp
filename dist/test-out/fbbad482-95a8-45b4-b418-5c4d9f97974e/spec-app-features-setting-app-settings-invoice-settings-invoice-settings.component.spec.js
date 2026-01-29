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

// angular:jit:template:src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.html
var invoice_settings_component_default;
var init_invoice_settings_component = __esm({
  "angular:jit:template:src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.html"() {
    invoice_settings_component_default = '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Invoice Settings</h6>\n        </div>\n        <form>\n\n            <!-- start row -->\n            <div class="row">\n                <div class="col-md-12">\n                    <div class="mb-3">\n                        <label class="form-label">Invoice Image<span class="text-danger ms-1">*</span></label>\n                        <div class="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                \n                            <div class="d-flex align-items-center bg-light justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">\n                                <i class="isax isax-image text-primary fs-24"></i>\n                            </div>                                              \n                            <div class="profile-upload">\n                                <div class="profile-uploader d-flex align-items-center">\n                                    <div class="drag-upload-btn btn btn-md btn-primary">\n                                        <i class="isax isax-image text-white fs-16 me-1"></i>\n                                        Upload Image\n                                        <input type="file" class="form-control image-sign" multiple="">\n                                    </div>\n                                </div>\n                                <div class="mt-2">\n                                    <p class="fs-12">JPG or PNG format, not exceeding 5MB.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-md-8 col-sm-12">\n                    <label class="form-label fw-medium">Invoice Prefix </label>\n                </div><!-- end col -->\n                <div class="col-md-4 col-sm-12">\n                    <div class="mb-3">\n                        <input type="text" class="form-control">\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-md-8 col-sm-12">\n                    <label class="form-label fw-medium">Invoice Round Off </label>\n                </div><!-- end col -->\n                <div class="col-md-3 col-sm-12">\n                    <div class="mb-3 d-flex align-items-center">\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">5</mat-option>\n                            <mat-option value="1">10</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-md-1 col-sm-12">\n                    <div class="ms-1 d-flex align-items-center mb-3">\n                        <div class="form-check form-check-sm form-switch">\n                            <label class="form-check-label form-label m-0">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                            </label>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-md-8 col-sm-12">\n                    <label class="form-label fw-medium">Show Company Details </label>\n                </div><!-- end col -->\n                <div class="col-md-4 col-sm-12">\n                    <div class="form-check form-check-sm form-switch text-end">\n                        <label class="form-check-label form-label m-0">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </label>\n                    </div>\n                </div><!-- end col -->\n            </div>	\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-md-4 col-sm-12">\n                    <label class="form-label fw-medium">Invoice Terms </label>\n                </div><!-- end col -->\n                <div class="col-md-8 col-sm-12">\n                    <ngx-editor [editor]="editor">\n                        <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                        </ngx-editor-menu>\n                     </ngx-editor>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </form>\n    </div>\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.scss
var invoice_settings_component_default2;
var init_invoice_settings_component2 = __esm({
  "angular:jit:style:src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.scss"() {
    invoice_settings_component_default2 = "/* src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.scss */\n/*# sourceMappingURL=invoice-settings.component.css.map */\n";
  }
});

// src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.ts
var InvoiceSettingsComponent;
var init_invoice_settings_component3 = __esm({
  "src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_invoice_settings_component();
    init_invoice_settings_component2();
    init_common();
    init_core();
    init_select();
    init_ngx_editor();
    InvoiceSettingsComponent = class InvoiceSettingsComponent2 {
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
    InvoiceSettingsComponent = __decorate([
      Component({
        selector: "app-invoice-settings",
        imports: [CommonModule, NgxEditorModule, MatSelectModule],
        template: invoice_settings_component_default,
        styles: [invoice_settings_component_default2]
      })
    ], InvoiceSettingsComponent);
  }
});

// src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.spec.ts
var require_invoice_settings_component_spec = __commonJS({
  "src/app/features/setting/app-settings/invoice-settings/invoice-settings.component.spec.ts"(exports) {
    init_testing();
    init_invoice_settings_component3();
    describe("InvoiceSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [InvoiceSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(InvoiceSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_invoice_settings_component_spec();
//# sourceMappingURL=spec-app-features-setting-app-settings-invoice-settings-invoice-settings.component.spec.js.map
