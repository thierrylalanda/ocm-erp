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

// angular:jit:template:src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.html
var integrations_settings_component_default;
var init_integrations_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.html"() {
    integrations_settings_component_default = '<div class="mb-3 pb-3 border-bottom">\n    <h6 class="fw-bold mb-0">Integrations</h6>\n</div>\n\n<!-- start row -->\n<div class="row">\n\n    <div class="col-md-6">\n        <div class="card shadow-none">\n            <div class="card-body">\n                <div class="d-flex align-items-center border-0 mb-3 pb-0">\n                    <div class="d-flex align-items-center">\n                        <span class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"><img src="assets/img/icons/mail-icon.svg" alt="Img"></span>\n                        <p class="fw-medium text-gray-9">Gmail</p>\n                    </div>\n                </div>\n                <p>Send invoices, payment reminders and customer communication directly </p>\n            </div> <!-- end card body -->\n            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">\n                <a class="btn btn-sm btn-dark rounded-2 p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                <div class="form-check form-switch">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div> <!-- end card footer -->\n        </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-6">\n        <div class="card shadow-none">\n            <div class="card-body">\n                <div class="d-flex align-items-center border-0 mb-3 pb-0">\n                    <div class="d-flex align-items-center">\n                        <span class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"><img src="assets/img/icons/calender-icon.svg" alt="Img"></span>\n                        <p class="fw-medium text-gray-9">Google Calendar</p>\n                    </div>\n                </div>\n                <p>Automatically schedule invoice due dates and set up payment follow-up.</p>\n            </div> <!-- end card body -->\n            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">\n                <a class="btn btn-sm btn-dark rounded-2 p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                <div class="form-check form-switch">\n                    <input class="form-check-input m-0" type="checkbox" checked="">\n                </div>\n            </div> <!-- end card footer -->\n        </div> <!-- end card -->\n    </div> <!-- end col -->\n</div>\n<!-- end row -->\n\n\n		<!-- Start Delete Modal  -->\n		<div class="modal fade" id="delete_modal">\n			<div class="modal-dialog modal-dialog-centered modal-sm">\n				<div class="modal-content">\n					<div class="modal-body text-center">\n						<div class="mb-3">\n							<img src="assets/img/icons/delete.svg" alt="img">\n						</div>\n						<h6 class="mb-1">Delete</h6>\n						<p class="mb-3">Are you sure,  you want to delete?</p>\n						<div class="d-flex justify-content-center">\n							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n						</div>\n					</div><!-- End modal body -->\n				</div><!-- End modal content -->\n			</div><!-- End modal dialog -->\n		</div>\n		<!-- End Delete Modal  -->';
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.scss
var integrations_settings_component_default2;
var init_integrations_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.scss"() {
    integrations_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.scss */\n/*# sourceMappingURL=integrations-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.ts
var IntegrationsSettingsComponent;
var init_integrations_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_integrations_settings_component();
    init_integrations_settings_component2();
    init_core();
    IntegrationsSettingsComponent = class IntegrationsSettingsComponent2 {
    };
    IntegrationsSettingsComponent = __decorate([
      Component({
        selector: "app-integrations-settings",
        imports: [],
        template: integrations_settings_component_default,
        styles: [integrations_settings_component_default2]
      })
    ], IntegrationsSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.spec.ts
var require_integrations_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component.spec.ts"(exports) {
    init_testing();
    init_integrations_settings_component3();
    describe("IntegrationsSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [IntegrationsSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(IntegrationsSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_integrations_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-general-settings-integrations-settings-integrations-settings.component.spec.js.map
