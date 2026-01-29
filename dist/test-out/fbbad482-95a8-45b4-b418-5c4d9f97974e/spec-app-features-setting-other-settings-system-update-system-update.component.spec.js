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

// angular:jit:template:src/app/features/setting/other-settings/system-update/system-update.component.html
var system_update_component_default;
var init_system_update_component = __esm({
  "angular:jit:template:src/app/features/setting/other-settings/system-update/system-update.component.html"() {
    system_update_component_default = `<div class="">
    <form>
        <div class="d-flex justify-content-between align-items-center pb-3 border-bottom mb-3">
            <h6 class="mb-0">System Update</h6>
            <a href="javascript:void(0);" class="btn btn-primary">Check for Updates</a>
        </div>
        <div class="d-flex align-items-center mb-3 pb-1">
            <span class="avatar avatar-md bg-light rounded-circle me-2"><i class="isax isax-tick-circle5 text-primary fs-24"></i></span>
            <div>
                <p class="text-dark fw-medium mb-1">You are up to date <span class="ms-2 badge badge-soft-primary badge-sm">Current Version : 8.0</span></p>
                <p class="fs-13">Last Checked : Today 10:30 AM</p>
            </div>
        </div>
        <div class="mb-3">
            <div class="alert alert-dismissible d-flex align-items-center fade show bg-light border mb-1" role="alert">
                <i class="isax isax-info-circle text-info me-2"></i>Before updating, it's best to back up your files and database and review the changelog.
            </div>
        </div>
        <!-- start row -->
        <div class="row">
            <div class="col-md-6 mb-3">
                <div>
                    <label class="form-label">Purchase Key <span class="text-danger">*</span></label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div>
                    <label class="form-label">User Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
        <!-- end row -->
    </form>
</div><!-- end col -->`;
  }
});

// angular:jit:style:src/app/features/setting/other-settings/system-update/system-update.component.scss
var system_update_component_default2;
var init_system_update_component2 = __esm({
  "angular:jit:style:src/app/features/setting/other-settings/system-update/system-update.component.scss"() {
    system_update_component_default2 = "/* src/app/features/setting/other-settings/system-update/system-update.component.scss */\n/*# sourceMappingURL=system-update.component.css.map */\n";
  }
});

// src/app/features/setting/other-settings/system-update/system-update.component.ts
var SystemUpdateComponent;
var init_system_update_component3 = __esm({
  "src/app/features/setting/other-settings/system-update/system-update.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_system_update_component();
    init_system_update_component2();
    init_core();
    SystemUpdateComponent = class SystemUpdateComponent2 {
    };
    SystemUpdateComponent = __decorate([
      Component({
        selector: "app-system-update",
        imports: [],
        template: system_update_component_default,
        styles: [system_update_component_default2]
      })
    ], SystemUpdateComponent);
  }
});

// src/app/features/setting/other-settings/system-update/system-update.component.spec.ts
var require_system_update_component_spec = __commonJS({
  "src/app/features/setting/other-settings/system-update/system-update.component.spec.ts"(exports) {
    init_testing();
    init_system_update_component3();
    describe("SystemUpdateComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SystemUpdateComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SystemUpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_system_update_component_spec();
//# sourceMappingURL=spec-app-features-setting-other-settings-system-update-system-update.component.spec.js.map
