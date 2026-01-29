import {
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
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

// angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.html
var language_settings_component_default;
var init_language_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.html"() {
    language_settings_component_default = '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-3">\n        <h6 class="fw-bold mb-0">Language</h6>\n        <div class="d-flex align-items-center">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                    <i class="isax isax-language-square me-1"></i>Language\n                </a>\n                <ul class="dropdown-menu dropdown-menu-lg p-2">\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            English\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            German\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            Arabic\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            French\n                        </label>\n                    </li>\n                </ul>\n            </div>\n            <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center"><i class="isax isax-add-circle5 me-1"></i>Add New Language</a>\n        </div>\n    </div>\n\n    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="input-icon-start position-relative me-2">\n                <span class="input-icon-addon">\n                    <i class="isax isax-search-normal"></i>\n                </span>\n                <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">                                      \n            </div>\n        </div>\n        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-import me-1"></i>Import Sample</a>\n    </div>\n\n    <!-- Custom Data Table -->\n    <div class="custom-datatable-filter table-nowrap table-responsive border rounded mb-3">\n        <table class="table mb-0 dataTable">\n            <thead class="table-light">\n                <tr>\n                    <th>Language</th>\n                    <th>Code</th>\n                    <th>RTL</th>\n                    <th>Default</th>\n                    <th>Status</th>\n                    <th></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class=" me-2 flex-shrink-0"><img src="assets/img/flags/us.svg" alt="img" class="avatar avatar-xs rounded-circle"></a>\n                            <a [routerLink]="routes.languageSettings2">English</a>\n                        </div>\n                    </td>\n                    <td>\n                        en\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex rounded-circle p-1 align-items-center justify-content-center btn-sm" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="flex-shrink-0 me-2"><img src="assets/img/flags/de.svg" alt="img" class="avatar avatar-xs rounded-circle"></a>\n                            <a [routerLink]="routes.languageSettings2">German</a>\n                        </div>\n                    </td>\n                    <td>\n                        de\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch">\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex rounded-circle p-1 align-items-center justify-content-center btn-sm" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="flex-shrink-0 me-2"><img src="assets/img/flags/ae.svg" alt="img" class="avatar avatar-xs rounded-circle"></a>\n                            <a [routerLink]="routes.languageSettings2">Arabic</a>\n                        </div>\n                    </td>\n                    <td>\n                        ar\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch">\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex rounded-circle p-1 align-items-center justify-content-center btn-sm" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="flex-shrink-0 me-2"><img src="assets/img/flags/fr.svg" alt="img" class="avatar avatar-xs rounded-circle"></a>\n                            <a [routerLink]="routes.languageSettings2">French</a>\n                        </div>\n                    </td>\n                    <td>\n                        fr\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch">\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex rounded-circle p-1 align-items-center justify-content-center btn-sm" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <!-- Custom Data Table -->\n</div><!-- end col -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.scss
var language_settings_component_default2;
var init_language_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.scss"() {
    language_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.scss */\n/*# sourceMappingURL=language-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.ts
var LanguageSettingsComponent;
var init_language_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_language_settings_component();
    init_language_settings_component2();
    init_core();
    init_common();
    init_router();
    init_core_index();
    LanguageSettingsComponent = class LanguageSettingsComponent2 {
      routes = routes;
    };
    LanguageSettingsComponent = __decorate([
      Component({
        selector: "app-language-settings",
        imports: [CommonModule, RouterLink],
        template: language_settings_component_default,
        styles: [language_settings_component_default2]
      })
    ], LanguageSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.spec.ts
var require_language_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.spec.ts"(exports) {
    init_testing();
    init_language_settings_component3();
    describe("LanguageSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [LanguageSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LanguageSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_language_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-website-settings-language-settings-language-settings.component.spec.js.map
