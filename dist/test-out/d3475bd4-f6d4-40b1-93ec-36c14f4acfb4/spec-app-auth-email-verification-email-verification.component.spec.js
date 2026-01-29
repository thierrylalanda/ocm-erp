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

// angular:jit:template:src/app/auth/email-verification/email-verification.component.html
var email_verification_component_default;
var init_email_verification_component = __esm({
  "angular:jit:template:src/app/auth/email-verification/email-verification.component.html"() {
    email_verification_component_default = '<div class="main-wrapper auth-bg">\n    <!-- Start Container -->\n<div class="container-fuild">\n    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n        <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n            <div class="col-lg-4 mx-auto">\n                <div class="d-flex justify-content-center align-items-center">\n                    <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">\n                        <div class=" mx-auto mb-5 text-center">\n                            <img src="assets/img/logo.svg"\n                                class="img-fluid" alt="Logo">\n                        </div>\n                        <div class="card border-0 p-lg-3 shadow-lg rounded-2">\n                            <div class="card-body">\n                                <div class="mb-3 text-center">\n                                    <span><i class="isax isax-tick-circle5 text-success fs-48"></i></span>\n                                </div>\n                                <div class="text-center mb-3">\n                                    <h5 class="mb-2">Email Sent!</h5>\n                                    <p class="mb-0">Check your email & change your password</p>\n                                </div>\n                                <div>\n                                    <a [routerLink]="routes.twoStepVerification" class="btn bg-primary-gradient text-white w-100">Reset Password</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- container -->\n</div>';
  }
});

// angular:jit:style:src/app/auth/email-verification/email-verification.component.scss
var email_verification_component_default2;
var init_email_verification_component2 = __esm({
  "angular:jit:style:src/app/auth/email-verification/email-verification.component.scss"() {
    email_verification_component_default2 = "/* src/app/auth/email-verification/email-verification.component.scss */\n/*# sourceMappingURL=email-verification.component.css.map */\n";
  }
});

// src/app/auth/email-verification/email-verification.component.ts
var EmailVerificationComponent;
var init_email_verification_component3 = __esm({
  "src/app/auth/email-verification/email-verification.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_email_verification_component();
    init_email_verification_component2();
    init_core();
    init_router();
    init_core_index();
    init_common();
    EmailVerificationComponent = class EmailVerificationComponent2 {
      router;
      routes = routes;
      constructor(router) {
        this.router = router;
      }
      redirectPage() {
        this.router.navigate([routes.twoStepVerification]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    EmailVerificationComponent = __decorate([
      Component({
        selector: "app-email-verification",
        template: email_verification_component_default,
        imports: [CommonModule, RouterLink],
        styles: [email_verification_component_default2]
      })
    ], EmailVerificationComponent);
  }
});

// src/app/auth/email-verification/email-verification.component.spec.ts
var require_email_verification_component_spec = __commonJS({
  "src/app/auth/email-verification/email-verification.component.spec.ts"(exports) {
    init_testing();
    init_email_verification_component3();
    describe("EmailVerificationComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [EmailVerificationComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(EmailVerificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_email_verification_component_spec();
//# sourceMappingURL=spec-app-auth-email-verification-email-verification.component.spec.js.map
