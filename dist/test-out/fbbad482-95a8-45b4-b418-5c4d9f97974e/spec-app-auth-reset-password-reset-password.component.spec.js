import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
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

// angular:jit:template:src/app/auth/reset-password/reset-password.component.html
var reset_password_component_default;
var init_reset_password_component = __esm({
  "angular:jit:template:src/app/auth/reset-password/reset-password.component.html"() {
    reset_password_component_default = `<div class="main-wrapper auth-bg">

    <!-- Start Container -->
    <div class="container-fuild">
        <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
            <!-- Start row -->
            <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
                <div class="col-lg-4 mx-auto">
                    <form (ngSubmit)="redirectPage()" class="d-flex justify-content-center align-items-center">
                        <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                            <div class="mx-auto mb-5 text-center">
                                <img src="assets/img/logo.svg"
                                    class="img-fluid" alt="Logo">
                            </div>
                            <div class="card border-0 p-lg-3 shadow-lg rounded-2">
                                <div class="card-body">
                                    <div class="text-center mb-3">
                                        <h5 class="mb-2">Reset Password</h5>
                                        <p class="mb-0">Enter new password</p>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">New Password</label>
                                        <div class="pass-group input-group">
                                            <span class="input-group-text border-end-0">
                                                <i class="isax isax-lock"></i>
                                            </span>
                                            <span class="isax toggle-password" (click)="togglePassword(0)"
                                            [ngClass]="
                                            show_password [0]
                                              ? 'isax-eye'
                                              : 'isax-eye-slash'
                                          "></span>
                                            <input type="password"  [type]="show_password[0] ? 'text' : 'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Confirm Password</label>
                                        <div class="pass-group input-group">
                                            <span class="input-group-text border-end-0">
                                                <i class="isax isax-lock"></i>
                                            </span>
                                            <span class="isax toggle-password" (click)="togglePassword(1)"
                                            [ngClass]="
                                            show_password [1]
                                              ? 'isax-eye'
                                              : 'isax-eye-slash'
                                          "></span>
                                            <input type="password"  [type]="show_password[1] ? 'text' : 'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check form-check-md mb-0">
                                                <input class="form-check-input" id="remember_me" type="checkbox">
                                                <label for="remember_me" class="form-check-label mt-0">I agree to the</label>
                                                <div class="d-inline-flex"><a href="" class="text-decoration-underline me-1">Terms of Service</a> and <a href="javascript:void(0);" class="text-decoration-underline ms-1"> Privacy Policy</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <button type="submit" class="btn bg-primary-gradient text-white w-100">Reset Password</button>
                                    </div>
                                    <div class="text-center">
                                        <h6 class="fw-normal fs-14 text-dark mb-0">Return to
                                            <a [routerLink]="routes.login" class="hover-a"> Sign In</a>
                                        </h6>
                                    </div>
                                </div><!-- End card body -->
                            </div><!-- End card -->
                        </div>
                    </form>
                </div><!-- End col -->
            </div>
            <!-- End row -->
        </div>
    </div>
    <!-- End Container -->

</div>`;
  }
});

// angular:jit:style:src/app/auth/reset-password/reset-password.component.scss
var reset_password_component_default2;
var init_reset_password_component2 = __esm({
  "angular:jit:style:src/app/auth/reset-password/reset-password.component.scss"() {
    reset_password_component_default2 = "/* src/app/auth/reset-password/reset-password.component.scss */\n/*# sourceMappingURL=reset-password.component.css.map */\n";
  }
});

// src/app/auth/reset-password/reset-password.component.ts
var ResetPasswordComponent;
var init_reset_password_component3 = __esm({
  "src/app/auth/reset-password/reset-password.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_reset_password_component();
    init_reset_password_component2();
    init_core();
    init_router();
    init_core_index();
    init_common();
    init_forms();
    ResetPasswordComponent = class ResetPasswordComponent2 {
      router;
      routes = routes;
      constructor(router) {
        this.router = router;
      }
      redirectPage() {
        this.router.navigate([routes.success]);
      }
      show_password = [false];
      togglePassword(index) {
        this.show_password[index] = !this.show_password[index];
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    ResetPasswordComponent = __decorate([
      Component({
        selector: "app-reset-password",
        template: reset_password_component_default,
        imports: [CommonModule, RouterLink, FormsModule],
        styles: [reset_password_component_default2]
      })
    ], ResetPasswordComponent);
  }
});

// src/app/auth/reset-password/reset-password.component.spec.ts
var require_reset_password_component_spec = __commonJS({
  "src/app/auth/reset-password/reset-password.component.spec.ts"(exports) {
    init_testing();
    init_reset_password_component3();
    describe("ResetPasswordComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ResetPasswordComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_reset_password_component_spec();
//# sourceMappingURL=spec-app-auth-reset-password-reset-password.component.spec.js.map
