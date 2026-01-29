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

// angular:jit:template:src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.html
var plugin_manager_component_default;
var init_plugin_manager_component = __esm({
  "angular:jit:template:src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.html"() {
    plugin_manager_component_default = '<div class="">\n    <div class="mb-3 pb-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-3">\n        <h6 class="fw-bold mb-0">Plugin Manager</h6>\n        <div class="d-flex align-items-center">\n            <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#google_login"><i class="isax isax-add-circle5 me-1"></i>New Plugin</a>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-6">\n            <div class="card shadow-none">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-0 mb-3 pb-0 flex-wrap gap-2">\n                        <div class="d-flex align-items-center">\n                            <span class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"><img src="assets/img/icons/paypal.svg" alt="Img"></span>\n                            <p class="fw-medium text-gray-9">PayPal</p>\n                        </div>\n                        <span class="badge badge-soft-primary">Version : 8.78.1</span>\n                    </div>\n                    <p class="text-truncate line-clamb-2">PayPal is a global digital payments platform that enables secure, fast online transactions.</p>\n                </div>\n                <div class="card-footer bg-light d-flex align-items-center justify-content-between ">\n                    <div class="d-flex align-items-center">\n                        <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                        <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#google_login"><i class="isax isax-setting-2"></i></a>\n                    </div>\n                    <div class="form-check form-switch">\n                        <input class="form-check-input m-0" type="checkbox" checked>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-6">\n            <div class="card shadow-none">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-0 mb-3 pb-0 flex-wrap gap-2">\n                        <div class="d-flex align-items-center">\n                            <span class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"><img src="assets/img/icons/google-analytics.svg" alt="Img"></span>\n                            <p class="fw-medium text-gray-9">Google Analytics</p>\n                        </div>\n                        <span class="badge badge-soft-primary">Version : GA4</span>\n                    </div>\n                    <p class="text-truncate line-clamb-2">Google Analytics tracks and analyzes website traffic & user interactions to provide insights.</p>\n                </div>\n                <div class="card-footer bg-light d-flex align-items-center justify-content-between ">\n                    <div class="d-flex align-items-center">\n                        <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                        <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#google_login"><i class="isax isax-setting-2"></i></a>\n                    </div>\n                    <div class="form-check form-switch">\n                        <input class="form-check-input m-0" type="checkbox" checked>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> <!-- end col -->\n\n        <!-- Start Google Login Settings -->\n        <div class="modal fade" id="google_login">\n            <div class="modal-dialog modal-dialog-centered modal-md">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h5 class="mb-0">Add Plugin</h5>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <div class="modal-body">\n                        <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">\n                            <span class="upload-img d-block mb-2"><i class="isax isax-image text-primary"></i></span>\n                            <p class="mb-0 text-gray-9 fw-semibold">Drop Your Files or <a href="javascript:void(0);" class="text-primary text-decoration-underline">Browse</a></p>\n                            <input type="file" accept="video/image">\n                            <p>Maximum size : 50 MB</p>\n                        </div>\n                    </div>\n                    <div class="modal-footer d-flex align-items-center justify-content-between">\n                        <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Install</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Google Login Settings -->\n\n		<!-- Start Delete Modal  -->\n		<div class="modal fade" id="delete_modal">\n			<div class="modal-dialog modal-dialog-centered modal-sm">\n				<div class="modal-content">\n					<div class="modal-body text-center">\n						<div class="mb-3">\n							<img src="assets/img/icons/delete.svg" alt="img">\n						</div>\n						<h6 class="mb-1">Delete</h6>\n						<p class="mb-3">Are you sure,  you want to delete?</p>\n						<div class="d-flex justify-content-center">\n							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n						</div>\n					</div><!-- End modal body -->\n				</div><!-- End modal content -->\n			</div><!-- End modal dialog -->\n		</div>\n		<!-- End Delete Modal  -->';
  }
});

// angular:jit:style:src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.scss
var plugin_manager_component_default2;
var init_plugin_manager_component2 = __esm({
  "angular:jit:style:src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.scss"() {
    plugin_manager_component_default2 = "/* src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.scss */\n/*# sourceMappingURL=plugin-manager.component.css.map */\n";
  }
});

// src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.ts
var PluginManagerComponent;
var init_plugin_manager_component3 = __esm({
  "src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_plugin_manager_component();
    init_plugin_manager_component2();
    init_core();
    PluginManagerComponent = class PluginManagerComponent2 {
    };
    PluginManagerComponent = __decorate([
      Component({
        selector: "app-plugin-manager",
        imports: [],
        template: plugin_manager_component_default,
        styles: [plugin_manager_component_default2]
      })
    ], PluginManagerComponent);
  }
});

// src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.spec.ts
var require_plugin_manager_component_spec = __commonJS({
  "src/app/features/setting/website-settings/plugin-manager/plugin-manager.component.spec.ts"(exports) {
    init_testing();
    init_plugin_manager_component3();
    describe("PluginManagerComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PluginManagerComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PluginManagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_plugin_manager_component_spec();
//# sourceMappingURL=spec-app-features-setting-website-settings-plugin-manager-plugin-manager.component.spec.js.map
