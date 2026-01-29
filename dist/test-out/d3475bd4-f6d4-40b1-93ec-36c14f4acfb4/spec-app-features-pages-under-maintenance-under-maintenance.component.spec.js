import {
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
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

// angular:jit:template:src/app/features/pages/under-maintenance/under-maintenance.component.html
var under_maintenance_component_default;
var init_under_maintenance_component = __esm({
  "angular:jit:template:src/app/features/pages/under-maintenance/under-maintenance.component.html"() {
    under_maintenance_component_default = '<div class="bg-white coming-soon">\n\n    <!-- Begin Wrapper -->\n    <div class="auth-bg">\n\n\n        <!-- Start Content -->\n		<div class="container-fuild">\n			<div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n\n				<!-- start row -->\n				<div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n					<div class="col-lg-6">\n                        <div class="d-flex flex-column align-items-center justify-content-center">\n                            <div class="error-images mb-3">\n                                <img src="assets/img/under-construction.svg" alt="image" class="img-fluid">\n                            </div>\n                            <div class="text-center">\n                                <h4 class="mb-3">We are Under Maintenance</h4>\n                                <p class="fs-16 text-center">Sorry for any inconvenience caused, we have almost done  <br> Will get back soon!  </p>\n                                <div class="d-flex justify-content-center pb-3">\n                                    <a [routerLink]="routes.index" class="btn btn-primary d-flex align-items-center "><i class="isax isax-arrow-left me-2"></i>Back to Dashboard</a>\n                                </div>\n                            </div>\n                        </div>                   \n                    </div><!-- end col -->\n                </div>\n				<!-- end row -->\n				 \n			</div>\n		</div>\n        <!-- End Content -->\n\n    </div>\n    <!-- End Wrapper -->\n</div>';
  }
});

// angular:jit:style:src/app/features/pages/under-maintenance/under-maintenance.component.scss
var under_maintenance_component_default2;
var init_under_maintenance_component2 = __esm({
  "angular:jit:style:src/app/features/pages/under-maintenance/under-maintenance.component.scss"() {
    under_maintenance_component_default2 = "/* src/app/features/pages/under-maintenance/under-maintenance.component.scss */\n/*# sourceMappingURL=under-maintenance.component.css.map */\n";
  }
});

// src/app/features/pages/under-maintenance/under-maintenance.component.ts
var UnderMaintenanceComponent;
var init_under_maintenance_component3 = __esm({
  "src/app/features/pages/under-maintenance/under-maintenance.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_under_maintenance_component();
    init_under_maintenance_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    UnderMaintenanceComponent = class UnderMaintenanceComponent2 {
      routes = routes;
    };
    UnderMaintenanceComponent = __decorate([
      Component({
        selector: "app-under-maintenance",
        imports: [CommonModule, RouterLink],
        template: under_maintenance_component_default,
        styles: [under_maintenance_component_default2]
      })
    ], UnderMaintenanceComponent);
  }
});

// src/app/features/pages/under-maintenance/under-maintenance.component.spec.ts
var require_under_maintenance_component_spec = __commonJS({
  "src/app/features/pages/under-maintenance/under-maintenance.component.spec.ts"(exports) {
    init_testing();
    init_under_maintenance_component3();
    describe("UnderMaintenanceComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [UnderMaintenanceComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(UnderMaintenanceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_under_maintenance_component_spec();
//# sourceMappingURL=spec-app-features-pages-under-maintenance-under-maintenance.component.spec.js.map
