import {
  MatSelectModule,
  init_select
} from "./chunk-PJP4EZYQ.js";
import "./chunk-ZLTBFUHR.js";
import "./chunk-N2Q3HONL.js";
import "./chunk-ZQVU7KV2.js";
import "./chunk-Y46UO4F7.js";
import "./chunk-WYJ2IQUD.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import {
  BsDatepickerModule,
  init_ngx_bootstrap_datepicker
} from "./chunk-WSBEZP5X.js";
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import "./chunk-SR4JAI3W.js";
import "./chunk-2RBILSOV.js";
import "./chunk-5B5ZAECM.js";
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

// angular:jit:template:src/app/features/pages/profile/profile.component.html
var profile_component_default;
var init_profile_component = __esm({
  "angular:jit:template:src/app/features/pages/profile/profile.component.html"() {
    profile_component_default = '            <!-- Start Container  -->\n            <div class="content-two">\n\n                <!-- start row  -->\n                <div class="row justify-content-center">\n                    <div class="col-lg-10">\n                        <div class="mb-3 border-bottom pb-3">\n                            <h6 class="mb-0">Profile</h6>\n                        </div>\n                        <div class="card mb-0">\n                            <div class="card-body">\n                                <div class="d-flex align-items-center mb-3">\n                                    <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-info-circle fs-14"></i></span>\n                                    <h6 class="fs-16 fw-semibold mb-0">General Information</h6>\n                                </div>\n                                <form>\n                                    <div class="mb-3">\n                                        <span class="text-gray-9 fw-bold mb-2 d-flex">Profile Image</span>\n                                        <div class="d-flex align-items-center">\n                                            <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                                <div class="position-relative d-flex align-items-center">\n                                                    <img src="assets/img/users/user-01.jpg" class="avatar avatar-xl " alt="User Img">\n                                                    <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                                                </div>\n                                            </div>\n                                            <div class="d-inline-flex flex-column align-items-start">\n                                                <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                                    <i class="isax isax-image me-1"></i>Upload Image\n                                                    <input type="file" class="form-control image-sign" multiple="">\n                                                </div>\n                                                <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="border-bottom mb-3 pb-2">\n\n										<!-- start row -->\n                                        <div class="row gx-3">\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Name <span class="text-danger">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Email <span class="text-danger">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Mobile Number <span class="text-danger">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Gender</label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">Male</mat-option>\n                                                        <mat-option value="1">Female</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-lg-4 col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">DOB</label>\n                                                    <div class="input-group position-relative mb-3">\n                                                        <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker placeholder="25 Mar 2025">\n                                                        <span class="input-icon-addon fs-16 text-gray-9">\n                                                            <i class="isax isax-calendar-2"></i>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div><!-- end col -->\n                                        </div>\n										<!-- end row -->\n\n                                    </div>\n                                    <div class="border-bottom mb-3">\n                                        <div class="d-flex align-items-center mb-3">\n                                            <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-info-circle fs-14"></i></span>\n                                            <h6 class="fs-16 fw-semibold mb-0">Address Information</h6>\n                                        </div>\n\n										<!-- start row -->\n                                        <div class="row gx-3">\n                                            <div class="col-lg-12">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Address</label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Country</label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">United States</mat-option>\n                                                        <mat-option value="1">Canada</mat-option>\n                                                        <mat-option value="1">UK</mat-option>\n                                                        <mat-option value="1">Germany</mat-option>\n                                                        <mat-option value="1">France</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">State</label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">California</mat-option>\n                                                        <mat-option value="1">Ontario</mat-option>\n                                                        <mat-option value="1">Bavaria</mat-option>\n                                                        <mat-option value="1">Wellington</mat-option>\n                                                        <mat-option value="1">Le-de-France</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">City<span class="text-danger ms-1">*</span></label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">Select</mat-option>\n                                                        <mat-option value="1">Los Angeles</mat-option>\n                                                        <mat-option value="1">Toronto</mat-option>\n                                                        <mat-option value="1">London</mat-option>\n                                                        <mat-option value="1">Munich</mat-option>\n                                                        <mat-option value="1">Sydney</mat-option>\n                                                    </mat-select>\n                                                </div>\n                                            </div><!-- end col -->\n                                            <div class="col-md-6">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n                                                    <input type="text" class="form-control">\n                                                </div>\n                                            </div><!-- end col -->\n                                        </div>\n										<!-- end row -->\n\n                                    </div>\n                                    <div class="d-flex align-items-center justify-content-between">\n                                        <button type="button" class="btn btn-outline-white">Cancel</button>\n                                        <button type="submit" class="btn btn-primary">Save Changes</button>\n                                    </div>\n                                </form>\n                            </div><!-- end card body  -->\n                        </div><!-- end card  -->\n                    </div><!-- end col  -->\n                </div>\n                <!-- end row  -->\n\n            </div>\n            <!-- container  -->';
  }
});

// angular:jit:style:src/app/features/pages/profile/profile.component.scss
var profile_component_default2;
var init_profile_component2 = __esm({
  "angular:jit:style:src/app/features/pages/profile/profile.component.scss"() {
    profile_component_default2 = "/* src/app/features/pages/profile/profile.component.scss */\n/*# sourceMappingURL=profile.component.css.map */\n";
  }
});

// src/app/features/pages/profile/profile.component.ts
var ProfileComponent;
var init_profile_component3 = __esm({
  "src/app/features/pages/profile/profile.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_profile_component();
    init_profile_component2();
    init_common();
    init_core();
    init_select();
    init_ngx_bootstrap_datepicker();
    ProfileComponent = class ProfileComponent2 {
    };
    ProfileComponent = __decorate([
      Component({
        selector: "app-profile",
        imports: [CommonModule, BsDatepickerModule, MatSelectModule],
        template: profile_component_default,
        styles: [profile_component_default2]
      })
    ], ProfileComponent);
  }
});

// src/app/features/pages/profile/profile.component.spec.ts
var require_profile_component_spec = __commonJS({
  "src/app/features/pages/profile/profile.component.spec.ts"(exports) {
    init_testing();
    init_profile_component3();
    describe("ProfileComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ProfileComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_profile_component_spec();
//# sourceMappingURL=spec-app-features-pages-profile-profile.component.spec.js.map
