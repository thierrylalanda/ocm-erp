import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
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

// angular:jit:template:src/app/auth/success/success.component.html
var success_component_default;
var init_success_component = __esm({
  "angular:jit:template:src/app/auth/success/success.component.html"() {
    success_component_default = '    <!-- Main Wrapper -->\n    <div class="main-wrapper auth-bg">\n        <div class="container-fuild">\n            <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n                \n                <!-- row start -->\n                <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n                    <div class="col-lg-4 mx-auto">\n                        <div class="d-flex justify-content-center align-items-center">\n                            <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">\n                                <div class=" mx-auto mb-5 text-center">\n                                    <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">\n                                </div>\n								<!-- card start -->\n                                <div class="card border-0 p-lg-3">\n									<!-- card body start -->\n                                    <div class="card-body">\n                                        <div class="mb-3 text-center">\n                                            <span><i class="isax isax-tick-circle5 text-success fs-48"></i></span>\n                                        </div>\n                                        <div class="text-center mb-3">\n                                            <h5 class="mb-2">Success</h5>\n                                            <p class="mb-0">Your new password has been successfully saved.</p>\n                                        </div>\n                                        <div>\n                                            <a [routerLink]="routes.login" class="btn btn-primary bg-gradient w-100">Back to Sign In</a>\n                                        </div>\n                                    </div>\n                                    <!-- card body end -->\n                                </div>\n                                <!-- card end -->\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- row end -->\n            </div>\n        </div>\n    </div>\n    <!-- /Main Wrapper -->';
  }
});

// angular:jit:style:src/app/auth/success/success.component.scss
var success_component_default2;
var init_success_component2 = __esm({
  "angular:jit:style:src/app/auth/success/success.component.scss"() {
    success_component_default2 = "/* src/app/auth/success/success.component.scss */\n/*# sourceMappingURL=success.component.css.map */\n";
  }
});

// src/app/auth/success/success.component.ts
var SuccessComponent;
var init_success_component3 = __esm({
  "src/app/auth/success/success.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_success_component();
    init_success_component2();
    init_core();
    init_core_index();
    init_common();
    init_forms();
    init_router();
    SuccessComponent = class SuccessComponent2 {
      routes = routes;
    };
    SuccessComponent = __decorate([
      Component({
        selector: "app-success",
        template: success_component_default,
        imports: [CommonModule, FormsModule, RouterLink],
        styles: [success_component_default2]
      })
    ], SuccessComponent);
  }
});

// src/app/auth/success/success.component.spec.ts
var require_success_component_spec = __commonJS({
  "src/app/auth/success/success.component.spec.ts"(exports) {
    init_testing();
    init_success_component3();
    describe("SuccessComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SuccessComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SuccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_success_component_spec();
//# sourceMappingURL=spec-app-auth-success-success.component.spec.js.map
