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
  Router,
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

// angular:jit:template:src/app/auth/forgot-password/forgot-password.component.html
var forgot_password_component_default;
var init_forgot_password_component = __esm({
  "angular:jit:template:src/app/auth/forgot-password/forgot-password.component.html"() {
    forgot_password_component_default = '<div class="main-wrapper auth-bg">\n  <div class="container-fuild">\n    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n      <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n        <div class="col-lg-4 mx-auto">\n          <form (ngSubmit)="redirectPage()" class="d-flex justify-content-center align-items-center">\n            <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">\n              <div class=" mx-auto mb-5 text-center">\n                <img src="assets/img/logo.svg"\n                  class="img-fluid" alt="Logo">\n              </div>\n              <div class="card border-0 p-lg-3 shadow-lg rounded-2">\n                <div class="card-body">\n                  <div class="text-center mb-3">\n                    <h5 class="mb-2">Forgot Password</h5>\n                    <p class="mb-0">No worries, we\u2019ll send you reset instructions</p>\n                  </div>\n                  <div class="mb-3">\n                    <label class="form-label">Email Address</label>\n                    <div class="input-group">\n                      <span class="input-group-text border-end-0">\n                        <i class="isax isax-sms-notification"></i>\n                      </span>\n                      <input type="text" value="" class="form-control border-start-0 ps-0" placeholder="Enter Email Address">\n                    </div>\n                  </div>\n                  <div class="mb-3">\n                    <button type="submit" class="btn bg-primary-gradient text-white w-100">Reset Password</button>\n                  </div>\n                  <div class="text-center">\n                    <h6 class="fw-normal fs-14 text-dark mb-0">Return to\n                      <a [routerLink]="routes.index" class="hover-a"> Sign In</a>\n                    </h6>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/auth/forgot-password/forgot-password.component.scss
var forgot_password_component_default2;
var init_forgot_password_component2 = __esm({
  "angular:jit:style:src/app/auth/forgot-password/forgot-password.component.scss"() {
    forgot_password_component_default2 = "/* src/app/auth/forgot-password/forgot-password.component.scss */\n/*# sourceMappingURL=forgot-password.component.css.map */\n";
  }
});

// src/app/auth/forgot-password/forgot-password.component.ts
var ForgotPasswordComponent;
var init_forgot_password_component3 = __esm({
  "src/app/auth/forgot-password/forgot-password.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_forgot_password_component();
    init_forgot_password_component2();
    init_core();
    init_router();
    init_core_index();
    init_common();
    init_forms();
    ForgotPasswordComponent = class ForgotPasswordComponent2 {
      router;
      routes = routes;
      constructor(router) {
        this.router = router;
      }
      redirectPage() {
        this.router.navigate([routes.emailVerification]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    ForgotPasswordComponent = __decorate([
      Component({
        selector: "app-forgot-password",
        template: forgot_password_component_default,
        imports: [CommonModule, RouterLink, FormsModule],
        styles: [forgot_password_component_default2]
      })
    ], ForgotPasswordComponent);
  }
});

// src/app/auth/forgot-password/forgot-password.component.spec.ts
var require_forgot_password_component_spec = __commonJS({
  "src/app/auth/forgot-password/forgot-password.component.spec.ts"(exports) {
    init_testing();
    init_forgot_password_component3();
    describe("ForgotPasswordComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ForgotPasswordComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ForgotPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_forgot_password_component_spec();
//# sourceMappingURL=spec-app-auth-forgot-password-forgot-password.component.spec.js.map
