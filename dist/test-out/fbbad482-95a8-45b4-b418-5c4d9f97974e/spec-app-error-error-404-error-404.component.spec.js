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

// angular:jit:template:src/app/error/error-404/error-404.component.html
var error_404_component_default;
var init_error_404_component = __esm({
  "angular:jit:template:src/app/error/error-404/error-404.component.html"() {
    error_404_component_default = '<div class="bg-white coming-soon">\n\n    <!-- Begin Wrapper -->\n    <div class="auth-bg">\n\n        <!-- Start Content -->\n        <div class="container-fuild">\n            <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n                <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n                    <div class="col-lg-6">\n                        <div class="d-flex flex-column align-items-center justify-content-center">\n                            <div class="error-images mb-5">\n                                <img src="assets/img/error-404.svg" alt="image" class="img-fluid">\n                            </div>\n                            <div class="text-center">\n                                <h4 class="mb-3 fw-bold">Oops, something went wrong</h4>\n                                <p class="fs-16 text-center">Error 404 Page not found. Sorry the page you looking for\n                                    <br>doesn\u2019t exist or has been moved</p>\n                                <div class="d-flex justify-content-center pb-3">\n                                    <a [routerLink]="routes.index" class="btn btn-primary d-flex align-items-center "><i class="isax isax-arrow-left me-2"></i>Back to Dashboard</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Content -->\n\n    </div>\n    <!-- End Wrapper -->\n</div>';
  }
});

// angular:jit:style:src/app/error/error-404/error-404.component.scss
var error_404_component_default2;
var init_error_404_component2 = __esm({
  "angular:jit:style:src/app/error/error-404/error-404.component.scss"() {
    error_404_component_default2 = "/* src/app/error/error-404/error-404.component.scss */\n/*# sourceMappingURL=error-404.component.css.map */\n";
  }
});

// src/app/error/error-404/error-404.component.ts
var Error404Component;
var init_error_404_component3 = __esm({
  "src/app/error/error-404/error-404.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_error_404_component();
    init_error_404_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    Error404Component = class Error404Component2 {
      routes = routes;
    };
    Error404Component = __decorate([
      Component({
        selector: "app-error-404",
        imports: [CommonModule, RouterLink],
        template: error_404_component_default,
        styles: [error_404_component_default2]
      })
    ], Error404Component);
  }
});

// src/app/error/error-404/error-404.component.spec.ts
var require_error_404_component_spec = __commonJS({
  "src/app/error/error-404/error-404.component.spec.ts"(exports) {
    init_testing();
    init_error_404_component3();
    describe("Error404Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [Error404Component]
        }).compileComponents();
        fixture = TestBed.createComponent(Error404Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_error_404_component_spec();
//# sourceMappingURL=spec-app-error-error-404-error-404.component.spec.js.map
