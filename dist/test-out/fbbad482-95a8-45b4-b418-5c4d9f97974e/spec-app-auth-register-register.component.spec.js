import {
  FormControl,
  FormGroup,
  Validators,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  AuthService,
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

// angular:jit:template:src/app/auth/register/register.component.html
var register_component_default;
var init_register_component = __esm({
  "angular:jit:template:src/app/auth/register/register.component.html"() {
    register_component_default = `<div class="main-wrapper auth-bg">

  <!-- Start Container -->
  <div class="container-fuild">
    <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <!-- Start row -->
      <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div class="col-lg-4 mx-auto">
          <form (ngSubmit)="redirectPage()" class="d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pt-lg-4 pb-0 flex-fill">
              <div class="mx-auto mb-5 text-center">
                <img src="assets/img/logo.svg"
                  class="img-fluid" alt="Logo">
              </div>
              <div class="card border-0 p-lg-3 shadow-lg rounded-2">
                <div class="card-body">
                  <div class="text-center mb-3">
                    <h5 class="mb-2">Sign Up</h5>
                    <p class="mb-0">Please enter your details to create account</p>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <div class="input-group">
                      <span class="input-group-text border-end-0">
                        <i class="isax isax-profile"></i>
                      </span>
                      <input type="text" value="" class="form-control border-start-0 ps-0" placeholder="Name">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <div class="input-group">
                      <span class="input-group-text border-end-0">
                        <i class="isax isax-sms-notification"></i>
                      </span>
                      <input type="text" value="" class="form-control border-start-0 ps-0" placeholder="Enter Email Address">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
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
                  <div class="mb-1">
                    <button type="submit" class="btn bg-primary-gradient text-white w-100">Sign Up</button>
                  </div>
                  <div class="login-or">
                    <span class="span-or">Or</span>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-center flex-wrap">
                      <div class="text-center me-2 flex-fill">
                        <a href="javascript:void(0);"
                          class="br-10 p-1 btn btn-light d-flex align-items-center justify-content-center">
                          <img class="img-fluid m-1" src="assets/img/icons/facebook-logo.svg" alt="Facebook">
                        </a>
                      </div>
                      <div class="text-center me-2 flex-fill">
                        <a href="javascript:void(0);"
                          class="br-10 p-1 btn btn-light d-flex align-items-center justify-content-center">
                          <img class="img-fluid m-1" src="assets/img/icons/google-logo.svg" alt="Google">
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <h6 class="fw-normal fs-14 text-dark mb-0">Already have an account?
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

// angular:jit:style:src/app/auth/register/register.component.scss
var register_component_default2;
var init_register_component2 = __esm({
  "angular:jit:style:src/app/auth/register/register.component.scss"() {
    register_component_default2 = "/* src/app/auth/register/register.component.scss */\n/*# sourceMappingURL=register.component.css.map */\n";
  }
});

// src/app/auth/register/register.component.ts
var RegisterComponent;
var init_register_component3 = __esm({
  "src/app/auth/register/register.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_register_component();
    init_register_component2();
    init_core();
    init_forms();
    init_router();
    init_core_index();
    init_common();
    RegisterComponent = class RegisterComponent2 {
      router;
      auth;
      isValidConfirmPassword = false;
      CustomControler;
      routes = routes;
      show_password = [false];
      togglePassword(index) {
        this.show_password[index] = !this.show_password[index];
      }
      form = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
        confirmPassword: new FormControl("", [Validators.required])
      });
      get f() {
        return this.form.controls;
      }
      constructor(router, auth) {
        this.router = router;
        this.auth = auth;
      }
      submit() {
        if (this.form.value.password != this.form.value.confirmPassword) {
          this.isValidConfirmPassword = true;
        } else {
          this.isValidConfirmPassword = false;
          this.auth.login();
        }
      }
      redirectPage() {
        this.router.navigate([routes.login]);
      }
      static ctorParameters = () => [
        { type: Router },
        { type: AuthService }
      ];
    };
    RegisterComponent = __decorate([
      Component({
        selector: "app-register",
        template: register_component_default,
        imports: [CommonModule, RouterLink],
        styles: [register_component_default2]
      })
    ], RegisterComponent);
  }
});

// src/app/auth/register/register.component.spec.ts
var require_register_component_spec = __commonJS({
  "src/app/auth/register/register.component.spec.ts"(exports) {
    init_testing();
    init_register_component3();
    describe("RegisterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [RegisterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_register_component_spec();
//# sourceMappingURL=spec-app-auth-register-register.component.spec.js.map
