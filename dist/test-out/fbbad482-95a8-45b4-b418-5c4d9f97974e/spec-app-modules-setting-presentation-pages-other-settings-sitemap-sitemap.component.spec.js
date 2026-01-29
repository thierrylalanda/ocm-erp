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

// angular:jit:template:src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.html
var sitemap_component_default;
var init_sitemap_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.html"() {
    sitemap_component_default = '<div class="">\n    <div>\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Sitemap</h6>\n        </div>\n        <div class="mb-3">\n            <!-- Table Search -->\n\n             <!-- start row -->\n            <div class="row">\n                <div class="col-md-3">\n                    <div class="input-icon-start position-relative me-2 mb-3">\n                        <span class="input-icon-addon">\n                            <i class="isax isax-search-normal"></i>\n                        </span>\n                        <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">\n                    \n                    </div>\n                </div><!-- end col -->\n                <div class="col-md-9">\n                    <div class="d-flex justify-content-end align-items-center flex-wrap gap-2 mb-3">\n                        <div>\n                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>Generate Sitemap</a>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n            <!-- /Table Search -->\n            \n            <!-- Table List -->\n            <div class="table-responsive table-nowrap">\n                <table class="table border dataTable">\n                    <thead class="table-light">\n                        <tr>\n                            <th>URL</th>\n                            <th>File Name</th>\n                            <th class="no-sort"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><h6 class="fs-14 fw-normal">https://localhost/Kanakku</h6></td>\n                            <td>sitemap18725604.xml</td>\n                            <td class="action-item">\n                                <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                    <i class="isax isax-more"></i>\n                                </a>\n                                <ul class="dropdown-menu">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                    </li>\n                                </ul>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <!-- /Table List -->\n        </div>\n    </div>\n</div><!-- end col -->\n\n\n\n<!-- Start Add Modal  -->\n<div id="add_modal" class="modal fade">\n    <div class="modal-dialog modal-dialog-centered">\n        <div class="modal-content">\n            <!-- Start modal header -->\n            <div class="modal-header">\n                <h4 class="modal-title">Add Sitemap</h4>\n                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n            </div>\n            <!-- End modal header -->\n            <form>\n                <div class="modal-body">\n\n                    <!-- start row -->\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div>\n                                <label class="form-label">Sitemap URL <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                </div>\n\n                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>\n                </div>\n\n            </form>\n        </div><!-- End modal content-->\n    </div><!-- End modal dialog-->\n</div>\n<!-- / End  Add Modal -->\n\n<!-- Start Edit Modal  -->\n<div id="edit_modal" class="modal fade">\n    <div class="modal-dialog modal-dialog-centered">\n        <div class="modal-content">\n            <!-- Start modal header -->\n            <div class="modal-header">\n                <h4 class="modal-title">Edit Sitemap</h4>\n                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n            </div>\n            <!-- End modal header -->\n            <form>\n                <div class="modal-body">\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div>\n                                <label class="form-label">Sitemap URL <span class="text-danger">*</span></label>\n                                <input type="text" value="https://localhost/Kanakku" class="form-control">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                </div>\n            </form>\n        </div><!-- End modal content-->\n    </div><!-- End modal dialog-->\n</div>\n<!-- / End Edit Modal -->\n\n<!-- Start Delete Modal  -->\n<div class="modal fade" id="delete_modal">\n    <div class="modal-dialog modal-dialog-centered modal-sm">\n        <div class="modal-content">\n            <div class="modal-body text-center">\n                <div class="mb-3">\n                    <img src="assets/img/icons/delete.svg" alt="img">\n                </div>\n                <h6 class="mb-1">Delete Sitemap</h6>\n                <p class="mb-3">Are you sure,  you want to delete Sitemap?</p>\n                <div class="d-flex justify-content-center">\n                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                </div>\n            </div><!-- End modal body -->\n        </div><!-- End modal content -->\n    </div><!-- End modal dialog -->\n</div>\n<!-- End Delete Modal  -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.scss
var sitemap_component_default2;
var init_sitemap_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.scss"() {
    sitemap_component_default2 = "/* src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.scss */\n/*# sourceMappingURL=sitemap.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.ts
var SitemapComponent;
var init_sitemap_component3 = __esm({
  "src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_sitemap_component();
    init_sitemap_component2();
    init_core();
    SitemapComponent = class SitemapComponent2 {
    };
    SitemapComponent = __decorate([
      Component({
        selector: "app-sitemap",
        imports: [],
        template: sitemap_component_default,
        styles: [sitemap_component_default2]
      })
    ], SitemapComponent);
  }
});

// src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.spec.ts
var require_sitemap_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/other-settings/sitemap/sitemap.component.spec.ts"(exports) {
    init_testing();
    init_sitemap_component3();
    describe("SitemapComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SitemapComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SitemapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_sitemap_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-other-settings-sitemap-sitemap.component.spec.js.map
