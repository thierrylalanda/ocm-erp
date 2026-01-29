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

// angular:jit:template:src/app/features/setting/app-settings/custom-fields/custom-fields.component.html
var custom_fields_component_default;
var init_custom_fields_component = __esm({
  "angular:jit:template:src/app/features/setting/app-settings/custom-fields/custom-fields.component.html"() {
    custom_fields_component_default = '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Custom Fields</h6>\n        </div>\n        <form>\n            <div class="mb-3">\n                <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                    <div class="d-flex align-items-center flex-wrap gap-2">\n                        <div class="input-icon-start position-relative">\n                            <span class="input-icon-addon">\n                                <i class="isax isax-search-normal"></i>\n                            </span>\n                            <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center flex-wrap gap-2">\n                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_customfield" class="btn btn-primary d-flex align-items-center"><i class="isax isax-add-circle5 me-2"></i>New Field</a>\n                    </div>\n                </div>\n            </div>\n            <div class="table-responsive table-nowrap">\n                <table class="table border dataTable">\n                    <thead class="table-light">\n                        <tr>\n                            <th class="no-sort">Module</th>\n                            <th>Label</th>\n                            <th>Type</th>\n                            <th>Default Value</th>\n                            <th>Required</th>\n                            <th>Status</th>\n                            <th class="no-sort"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <a href="javascript:void(0);" class="text-dark">Customers</a>\n                            </td>\n                            <td>Type </td>\n                            <td>Select </td>\n                            <td>Retail</td>\n                            <td>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                </div>\n                            </td>\n                            <td>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                </div>\n                            </td>\n                            <td class="action-item">\n                                <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                    <i class="isax isax-more"></i>\n                                </a>\n                                <ul class="dropdown-menu">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_customfield"><i class="isax isax-edit me-2"></i>Edit</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                    </li>\n                                </ul>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <a href="javascript:void(0);" class="text-dark">Supplier</a>\n                            </td>\n                            <td>Payment Method </td>\n                            <td>Select </td>\n                            <td>PayPal</td>\n                            <td>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch">\n                                </div>\n                            </td>\n                            <td>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                </div>\n                            </td>\n                            <td class="action-item">\n                                <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                    <i class="isax isax-more"></i>\n                                </a>\n                                <ul class="dropdown-menu">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_customfield"><i class="isax isax-edit me-2"></i>Edit</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                    </li>\n                                </ul>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </form>\n    </div>\n</div><!-- end col -->\n\n\n\n        <!-- Start Add Modal  -->\n        <div id="add_customfield" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add Custom Field</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-3">\n                                <label class="form-label">Module <span class="text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Customers</mat-option>\n                                    <mat-option value="1">Supplier</mat-option>\n                                </mat-select>\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Input Type <span class="text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Select</mat-option>\n                                </mat-select>\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Label <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Default Value <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div>\n                                <div class="d-flex align-items-center justify-content-between">\n                                    <label class="form-label">Required <span class="text-danger">*</span></label>\n                                    <div class="form-check form-switch">\n                                        <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Add Modal -->\n\n        <!-- Start Edit Modal  -->\n        <div id="edit_customfield" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit Custom Field</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-3">\n                                <label class="form-label">Module <span class="text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Customers">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Customers</mat-option>\n                                    <mat-option value="1">Supplier</mat-option>\n                                </mat-select>\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Input Type <span class="text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Select</mat-option>\n                                </mat-select>\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Label <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control" value="Type">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Default Value <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control" value="Retail">\n                            </div>\n                            <div class="mb-3">\n                                <div class="d-flex align-items-center justify-content-between">\n                                    <label class="form-label">Required <span class="text-danger">*</span></label>\n                                    <div class="form-check form-switch">\n                                        <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                    </div>\n                                </div>\n                            </div>\n                            <div>\n                                <div class="d-flex align-items-center justify-content-between">\n                                    <label class="form-label">Status <span class="text-danger">*</span></label>\n                                    <div class="form-check form-switch">\n                                        <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Modal -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Custom Field</h6>\n                        <p class="mb-3">Are you sure, you want to delete custom field?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->';
  }
});

// angular:jit:style:src/app/features/setting/app-settings/custom-fields/custom-fields.component.scss
var custom_fields_component_default2;
var init_custom_fields_component2 = __esm({
  "angular:jit:style:src/app/features/setting/app-settings/custom-fields/custom-fields.component.scss"() {
    custom_fields_component_default2 = "/* src/app/features/setting/app-settings/custom-fields/custom-fields.component.scss */\n/*# sourceMappingURL=custom-fields.component.css.map */\n";
  }
});

// src/app/features/setting/app-settings/custom-fields/custom-fields.component.ts
var CustomFieldsComponent;
var init_custom_fields_component3 = __esm({
  "src/app/features/setting/app-settings/custom-fields/custom-fields.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_custom_fields_component();
    init_custom_fields_component2();
    init_common();
    init_core();
    init_select();
    CustomFieldsComponent = class CustomFieldsComponent2 {
    };
    CustomFieldsComponent = __decorate([
      Component({
        selector: "app-custom-fields",
        imports: [CommonModule, MatSelectModule],
        template: custom_fields_component_default,
        styles: [custom_fields_component_default2]
      })
    ], CustomFieldsComponent);
  }
});

// src/app/features/setting/app-settings/custom-fields/custom-fields.component.spec.ts
var require_custom_fields_component_spec = __commonJS({
  "src/app/features/setting/app-settings/custom-fields/custom-fields.component.spec.ts"(exports) {
    init_testing();
    init_custom_fields_component3();
    describe("CustomFieldsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CustomFieldsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CustomFieldsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_custom_fields_component_spec();
//# sourceMappingURL=spec-app-features-setting-app-settings-custom-fields-custom-fields.component.spec.js.map
