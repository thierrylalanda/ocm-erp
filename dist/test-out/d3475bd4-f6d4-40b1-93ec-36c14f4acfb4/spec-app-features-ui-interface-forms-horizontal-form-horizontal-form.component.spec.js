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
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
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
import "./chunk-EDGRTZKC.js";
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

// angular:jit:template:src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.html
var horizontal_form_component_default;
var init_horizontal_form_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.html"() {
    horizontal_form_component_default = '    <!-- Page Header -->\n    <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n    <div class="flex-grow-1">\n        <h4 class="fs-18 fw-semibold mb-0">Horizontal Form</h4>\n    </div>\n    <div class="text-end">\n        <ol class="breadcrumb m-0 py-0">\n            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n            <li class="breadcrumb-item active">Horizontal Form</li>\n        </ol>\n    </div>\n</div>\n<!-- End Page Header -->\n  \n  <div class="row">\n    <div class="col-xl-6 d-flex">\n      <div class="card flex-fill">\n        <div class="card-header">\n          <h5 class="card-title">Basic Form</h5>\n        </div>\n        <div class="card-body">\n          <form action="#">\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">First Name</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Last Name</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Email Address</label>\n              <div class="col-lg-9">\n                <input type="email" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Username</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Password</label>\n              <div class="col-lg-9">\n                <input type="password" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Repeat Password</label>\n              <div class="col-lg-9">\n                <input type="password" class="form-control">\n              </div>\n            </div>\n            <div class="text-end">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class="col-xl-6 d-flex">\n      <div class="card flex-fill">\n        <div class="card-header">\n          <h5 class="card-title">Address Form</h5>\n        </div>\n        <div class="card-body">\n          <form action="#">\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Address 1</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Address 2</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">City</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">State</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Country</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Postal Code</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="text-end">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-12">\n      <div class="card">\n        <div class="card-header">\n          <h5 class="card-title">Two Column Horizontal Form</h5>\n        </div>\n        <div class="card-body">\n          <h6 class="mb-3">Personal Information</h6>\n          <form action="#">\n            <div class="row">\n              <div class="col-xl-6">\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">First Name</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Last Name</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Gender</label>\n                  <div class="col-lg-9">\n                    <div class="form-check form-check-inline">\n                      <input class="form-check-input" type="radio" name="gender" id="gender_male" value="option1" checked>\n                      <label class="form-check-label" for="gender_male">\n                        Male\n                      </label>\n                    </div>\n                    <div class="form-check form-check-inline">\n                      <input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2">\n                      <label class="form-check-label" for="gender_female">\n                        Female\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Blood Group</label>\n                  <div class="col-lg-9">\n                    <mat-select [(ngModel)]="selectedValue1" [ngModelOptions]="{standalone: true}" class="select"\n                      placeholder="Select">\n                      @for (data of selectedList1; track data) {\n                      <mat-option [value]="data.value">\n                        {{data.value}}\n                      </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6">\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Username</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Email</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Password</label>\n                  <div class="col-lg-9">\n                    <input type="password" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Repeat Password</label>\n                  <div class="col-lg-9">\n                    <input type="password" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <h6 class="mb-3">Address</h6>\n            <div class="row">\n              <div class="col-xl-6">\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Address Line 1</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Address Line 2</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">State</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6">\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">City</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Country</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Postal Code</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="text-end">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-12">\n      <div class="card">\n        <div class="card-header">\n          <h5 class="card-title">Two Column Horizontal Form 2</h5>\n        </div>\n        <div class="card-body">\n          <form action="#">\n            <div class="row">\n              <div class="col-xl-6">\n                <h6 class="mb-3">Personal Information</h6>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">First Name</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Last Name</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Password</label>\n                  <div class="col-lg-9">\n                    <input type="password" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">State</label>\n                  <div class="col-lg-9">\n                    <mat-select [(ngModel)]="selectedValue2" [ngModelOptions]="{standalone: true}" class="select"\n                      placeholder="Select State">\n                      @for (data of selectedList2; track data) {\n                      <mat-option [value]="data.value">\n                        {{data.value}}\n                      </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">About</label>\n                  <div class="col-lg-9">\n                    <textarea rows="4" cols="5" class="form-control" placeholder="Enter message"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6">\n                <h6 class="mb-3">Personal Details</h6>\n                <div class="row">\n                  <label class="col-lg-3 col-form-label">Name</label>\n                  <div class="col-lg-9">\n                    <div class="row">\n                      <div class="col-md-6">\n                        <div class="mb-3">\n                          <input type="text" placeholder="First Name" class="form-control">\n                        </div>\n                      </div>\n                      <div class="col-md-6">\n                        <div class="mb-3">\n                          <input type="text" placeholder="Last Name" class="form-control">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Email</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Phone</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Address</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                    <div class="row mt-4">\n                      <div class="col-md-6">\n                        <div class="mb-3">\n                          <mat-select [(ngModel)]="selectedValue3" [ngModelOptions]="{standalone: true}" class="select"\n                            placeholder="Select Country">\n                            @for (data of selectedList3; track data) {\n                            <mat-option [value]="data.value">\n                              {{data.value}}\n                            </mat-option>\n                            }\n                          </mat-select>\n                        </div>\n                        <div class="mb-3">\n                          <input type="text" placeholder="ZIP code" class="form-control">\n                        </div>\n                      </div>\n                      <div class="col-md-6">\n                        <div class="mb-3">\n                          <input type="text" placeholder="State/Province" class="form-control">\n                        </div>\n                        <div class="mb-3">\n                          <input type="text" placeholder="City" class="form-control">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="text-end">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n  \n    <div class="col-xl-6">\n      <div class="card">\n        <div class="card-header justify-content-between">\n          <div class="card-title">\n            Horizontal form With Icons\n          </div>\n  \n        </div>\n        <div class="card-body">\n          <form>\n            <div class="row mb-3">\n              <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>\n              <div class="col-sm-10">\n                <div class="input-group">\n                  <input type="email" class="form-control" id="inputEmail1">\n                  <div class="input-group-text">\n                    <i class="feather icon-mail"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label for="inputPassword1" class="col-sm-2 col-form-label">Password</label>\n              <div class="col-sm-10">\n                <div class="input-group">\n                  <input type="password" class="form-control" id="inputPassword1">\n                  <div class="input-group-text">\n                    <i class="feather icon-lock"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n  \n            <button type="submit" class="btn btn-primary">Sign in</button>\n          </form>\n        </div>\n  \n      </div>\n    </div>\n    <div class="col-xl-6">\n      <div class="card">\n        <div class="card-header justify-content-between">\n          <div class="card-title">\n            Horizontal form label sizing\n          </div>\n  \n        </div>\n        <div class="card-body">\n          <div class="row mb-3">\n            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>\n            <div class="col-sm-10">\n              <input type="email" class="form-control form-control-sm" id="colFormLabelSm"\n                placeholder="col-form-label-sm">\n            </div>\n          </div>\n          <div class="row mb-3">\n            <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>\n            <div class="col-sm-10">\n              <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">\n            </div>\n          </div>\n          <div class="row">\n            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>\n            <div class="col-sm-10">\n              <input type="email" class="form-control form-control-lg" id="colFormLabelLg"\n                placeholder="col-form-label-lg">\n            </div>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-xl-12">\n      <div class="card">\n        <div class="card-header justify-content-between">\n          <div class="card-title">\n            Auto sizing\n          </div>\n  \n        </div>\n        <div class="card-body">\n          <form class="row gy-2 gx-3 align-items-center mb-4">\n            <div class="col-auto">\n              <label class="visually-hidden" for="autoSizingInput">Name</label>\n              <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">\n            </div>\n            <div class="col-auto">\n              <label class="visually-hidden" for="autoSizingInputGroup">Username</label>\n              <div class="input-group">\n                <div class="input-group-text">&#64;</div>\n                <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">\n              </div>\n            </div>\n            <div class="col-auto">\n              <label class="visually-hidden" for="autoSizingSelect">Preference</label>\n              <mat-select [(ngModel)]="selectedValue4" [ngModelOptions]="{standalone: true}" class="select"\n                placeholder="Choose...">\n                @for (data of selectedList4; track data) {\n                <mat-option [value]="data.value">\n                  {{data.value}}\n                </mat-option>\n                }\n              </mat-select>\n            </div>\n            <div class="col-auto">\n              <div class="form-check">\n                <input class="form-check-input" type="checkbox" id="autoSizingCheck">\n                <label class="form-check-label" for="autoSizingCheck">\n                  Remember me\n                </label>\n              </div>\n            </div>\n            <div class="col-auto">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n          <span class="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific column\n            classes.</span>\n          <form class="row gx-3 gy-2 align-items-center mt-0">\n            <div class="col-sm-3">\n              <label class="visually-hidden" for="specificSizeInputName">Name</label>\n              <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">\n            </div>\n            <div class="col-sm-3">\n              <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>\n              <div class="input-group">\n                <div class="input-group-text">&#64;</div>\n                <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">\n              </div>\n            </div>\n            <div class="col-sm-3">\n              <label class="visually-hidden" for="specificSizeSelect">Preference</label>\n              <mat-select [(ngModel)]="selectedValue5" [ngModelOptions]="{standalone: true}" class="select"\n                placeholder="Choose...">\n                @for (data of selectedList5; track data) {\n                <mat-option [value]="data.value">\n                  {{data.value}}\n                </mat-option>\n                }\n              </mat-select>\n            </div>\n            <div class="col-auto">\n              <div class="form-check">\n                <input class="form-check-input" type="checkbox" id="autoSizingCheck2">\n                <label class="form-check-label" for="autoSizingCheck2">\n                  Remember me\n                </label>\n              </div>\n            </div>\n            <div class="col-auto">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n  \n      </div>\n    </div>\n  </div>';
  }
});

// angular:jit:style:src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.scss
var horizontal_form_component_default2;
var init_horizontal_form_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.scss"() {
    horizontal_form_component_default2 = "/* src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.scss */\n/*# sourceMappingURL=horizontal-form.component.css.map */\n";
  }
});

// src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.ts
var HorizontalFormComponent;
var init_horizontal_form_component3 = __esm({
  "src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_horizontal_form_component();
    init_horizontal_form_component2();
    init_core();
    init_common();
    init_core_index();
    init_select();
    init_forms();
    HorizontalFormComponent = class HorizontalFormComponent2 {
      routes = routes;
      selectedValue1 = "";
      selectedValue2 = "";
      selectedValue3 = "";
      selectedValue4 = "";
      selectedValue5 = "";
      selectedList1 = [
        { value: "A+" },
        { value: "O+" },
        { value: "B+" },
        { value: "AB+" }
      ];
      selectedList2 = [
        { value: "Select State" },
        { value: "California" },
        { value: "Texas" },
        { value: "Florida" }
      ];
      selectedList3 = [
        { value: "Select Country" },
        { value: "USA" },
        { value: "France" },
        { value: "India" },
        { value: "Spain" }
      ];
      selectedList4 = [
        { value: "Choose..." },
        { value: "One" },
        { value: "Two" },
        { value: "Three" }
      ];
      selectedList5 = [
        { value: "Choose..." },
        { value: "One" },
        { value: "Two" },
        { value: "Three" }
      ];
    };
    HorizontalFormComponent = __decorate([
      Component({
        selector: "app-horizontal-form",
        template: horizontal_form_component_default,
        imports: [CommonModule, MatSelectModule, FormsModule],
        styles: [horizontal_form_component_default2]
      })
    ], HorizontalFormComponent);
  }
});

// src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.spec.ts
var require_horizontal_form_component_spec = __commonJS({
  "src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.spec.ts"(exports) {
    init_testing();
    init_horizontal_form_component3();
    describe("HorizontalFormComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [HorizontalFormComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(HorizontalFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_horizontal_form_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-forms-horizontal-form-horizontal-form.component.spec.js.map
