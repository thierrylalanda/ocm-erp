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

// angular:jit:template:src/app/features/setting/website-settings/language-settings2/language-settings2.component.html
var language_settings2_component_default;
var init_language_settings2_component = __esm({
  "angular:jit:template:src/app/features/setting/website-settings/language-settings2/language-settings2.component.html"() {
    language_settings2_component_default = '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-3">\n        <h6 class="fw-bold mb-0">Language</h6>\n        <div class="d-flex align-items-center">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                    <i class="isax isax-language-square me-1"></i>Language\n                </a>\n                <ul class="dropdown-menu dropdown-menu-lg p-2">\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            English\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            German\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            Arabic\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            French\n                        </label>\n                    </li>\n                </ul>\n            </div>\n            <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center"><i class="isax isax-add-circle5 me-1"></i>New Language</a>\n        </div>\n    </div>\n\n    <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="input-icon-start position-relative me-2">\n                <span class="input-icon-addon">\n                    <i class="isax isax-search-normal"></i>\n                </span>\n                <input type="text" class="form-control form-control-sm bg-white" placeholder="Search"> \n            </div>\n        </div>\n        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-arrow-left me-1"></i>Back to Translations</a>\n    </div>\n\n    <!-- Custom Data Table -->\n    <div class="custom-datatable-filter table-responsive border rounded mb-3">\n        <table class="table mb-0 dataTable">\n            <thead class="table-light">\n                <tr>\n                    <th>Module</th>\n                    <th>Total</th>\n                    <th>Done</th>\n                    <th></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);">Inventory</a>\n                    </td>\n                    <td>\n                        1620\n                    </td>\n                    <td>\n                        1296\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white rounded-circle btn-sm d-inline-flex align-items-center p-1 justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);">Sales</a>\n                    </td>\n                    <td>\n                        1620\n                    </td>\n                    <td>\n                        972\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white rounded-circle btn-sm d-inline-flex align-items-center p-1 justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);">Purchases</a>\n                    </td>\n                    <td>\n                        1620\n                    </td>\n                    <td>\n                        810\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white rounded-circle btn-sm d-inline-flex align-items-center p-1 justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);">Finance & Accounts</a>\n                    </td>\n                    <td>\n                        1620\n                    </td>\n                    <td>\n                        324\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white rounded-circle btn-sm d-inline-flex align-items-center p-1 justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <!-- Custom Data Table -->\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/features/setting/website-settings/language-settings2/language-settings2.component.scss
var language_settings2_component_default2;
var init_language_settings2_component2 = __esm({
  "angular:jit:style:src/app/features/setting/website-settings/language-settings2/language-settings2.component.scss"() {
    language_settings2_component_default2 = "/* src/app/features/setting/website-settings/language-settings2/language-settings2.component.scss */\n/*# sourceMappingURL=language-settings2.component.css.map */\n";
  }
});

// src/app/features/setting/website-settings/language-settings2/language-settings2.component.ts
var LanguageSettings2Component;
var init_language_settings2_component3 = __esm({
  "src/app/features/setting/website-settings/language-settings2/language-settings2.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_language_settings2_component();
    init_language_settings2_component2();
    init_core();
    LanguageSettings2Component = class LanguageSettings2Component2 {
    };
    LanguageSettings2Component = __decorate([
      Component({
        selector: "app-language-settings2",
        imports: [],
        template: language_settings2_component_default,
        styles: [language_settings2_component_default2]
      })
    ], LanguageSettings2Component);
  }
});

// src/app/features/setting/website-settings/language-settings2/language-settings2.component.spec.ts
var require_language_settings2_component_spec = __commonJS({
  "src/app/features/setting/website-settings/language-settings2/language-settings2.component.spec.ts"(exports) {
    init_testing();
    init_language_settings2_component3();
    describe("LanguageSettings2Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [LanguageSettings2Component]
        }).compileComponents();
        fixture = TestBed.createComponent(LanguageSettings2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_language_settings2_component_spec();
//# sourceMappingURL=spec-app-features-setting-website-settings-language-settings2-language-settings2.component.spec.js.map
