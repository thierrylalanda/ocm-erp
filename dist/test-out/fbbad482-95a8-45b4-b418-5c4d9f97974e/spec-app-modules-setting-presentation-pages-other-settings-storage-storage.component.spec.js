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

// angular:jit:template:src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.html
var storage_component_default;
var init_storage_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.html"() {
    storage_component_default = '<div class="">\n    <div>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Storage</h6>\n        </div>\n\n        <!-- start row -->\n        <div class="row">\n            <div class="col-md-6">\n                <div class="card shadow-none">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-md bg-light rounded p-2 me-2">\n                                    <img src="assets/img/icons/storage-icon-01.svg" class="img-fluid" alt="Img">\n                                </span>\n                                <p class="fw-medium text-dark">Local Storage</p>\n                            </div>\n                            <div class="d-flex align-items-center">\n                                <div class="form-check form-switch">\n                                    <input type="checkbox" id="user1" class="form-check-input" role="switch" checked>\n                                </div>\n                            </div>\n                        </div>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n            </div>\n            <div class="col-md-6">\n                <div class="card shadow-none">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-md bg-light rounded p-2 me-2">\n                                    <img src="assets/img/icons/storage-icon-02.svg" class="img-fluid" alt="Img">\n                                </span>\n                                <p class="fw-medium text-dark">AWS</p>\n                            </div>\n                            <div class="d-flex align-items-center">\n                                <a href="javascript:void(0);" class="btn btn-sm btn-light rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" data-bs-toggle="modal" data-bs-target="#aws_modal"><i class="isax isax-setting-2 fs-14"></i></a>\n                                <div class="form-check form-switch">\n                                    <input type="checkbox" id="user2" class="form-check-input" role="switch" checked>\n                                </div>\n                            </div>\n                        </div>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n            </div>\n        </div>\n        <!-- end row -->\n\n    </div>\n</div>\n\n        <!-- Start Modal  -->\n        <div id="aws_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">AWS</h4>\n                        <button type="button" class="btn-close custom-btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-3">\n                                <label class="form-label">AWS Access Key <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Secret Key <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Bucket Name <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Region <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div>\n                                <label class="form-label">Base URL <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Modal -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.scss
var storage_component_default2;
var init_storage_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.scss"() {
    storage_component_default2 = "/* src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.scss */\n/*# sourceMappingURL=storage.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.ts
var StorageComponent;
var init_storage_component3 = __esm({
  "src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_storage_component();
    init_storage_component2();
    init_core();
    StorageComponent = class StorageComponent2 {
    };
    StorageComponent = __decorate([
      Component({
        selector: "app-storage",
        imports: [],
        template: storage_component_default,
        styles: [storage_component_default2]
      })
    ], StorageComponent);
  }
});

// src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.spec.ts
var require_storage_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/other-settings/storage/storage.component.spec.ts"(exports) {
    init_testing();
    init_storage_component3();
    describe("StorageComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [StorageComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(StorageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_storage_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-other-settings-storage-storage.component.spec.js.map
