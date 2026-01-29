import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
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

// angular:jit:template:src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.html
var form_grid_gutters_component_default;
var init_form_grid_gutters_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.html"() {
    form_grid_gutters_component_default = '              <!-- Page Header -->\n              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n                <div class="flex-grow-1">\n                    <h4 class="fs-18 fw-semibold mb-0">Grid Gutters</h4>\n                </div>\n                <div class="text-end">\n                    <ol class="breadcrumb m-0 py-0">\n                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                        <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n                        <li class="breadcrumb-item active">Grid Gutters</li>\n                    </ol>\n                </div>\n            </div>\n            <!-- End Page Header -->\n<div class="row">\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Form Grid\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="row">\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">First Name</label>\n                        <input type="text" class="form-control" placeholder="First Name">\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">Last Name</label>\n                        <input type="text" class="form-control" placeholder="Last Name">\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">Address</label>\n                        <div class="row">\n                            <div class="col-xl-12 mb-3">\n                                <input type="text" class="form-control" placeholder="Street">\n                            </div>\n                            <div class="col-xl-12 mb-3">\n                                <input type="text" class="form-control" placeholder="Landmark">\n                            </div>\n                            <div class="col-xxl-6 col-xl-12 mb-3">\n                                <input type="text" class="form-control" placeholder="City">\n                            </div>\n                            <div class="col-xxl-6 col-xl-12 mb-3">\n                                <select id="inputState1" class="form-select">\n                                    <option selected="">State</option>\n                                    <option>...</option>\n                                </select>\n                            </div>\n                            <div class="col-xxl-6 col-xl-12 mb-3">\n                                <input type="text" class="form-control" placeholder="Postal/Zip code">\n                            </div>\n                            <div class="col-xxl-6 col-xl-12 mb-3">\n                                <select id="inputCountry" class="form-select">\n                                    <option selected="">Country</option>\n                                    <option>...</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <div class="row">\n                            <div class="col-xl-12 mb-3">\n                                <label class="form-label">Email</label>\n                                <input type="email" class="form-control" placeholder="Email">\n                            </div>\n                            <div class="col-xl-12 mb-3">\n                                <label class="form-label">DOB</label>\n                                <input type="date" class="form-control" bsDatepicker>\n                            </div>\n                            <div class="col-xl-12 mb-3">\n                                <div class="row">\n                                    <label class="form-label mb-1">Maritial Status</label>\n                                    <div class="col-xl-6">\n                                        <div class="form-check">\n                                            <input class="form-check-input" type="checkbox" value="" id="status-married" required="">\n                                            <label class="form-check-label" for="status-married">\n                                                Married\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div class="col-xl-6">\n                                        <div class="form-check">\n                                            <input class="form-check-input" type="checkbox" value="" id="status-unmarried" required="">\n                                            <label class="form-check-label" for="status-unmarried">\n                                                Single\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-xl-12">\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">Contact Number</label>\n                        <input type="number" class="form-control" placeholder="Phone Number">\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">Alternative Contact</label>\n                        <input type="number" class="form-control" placeholder="Phone Number">\n                    </div>\n                    <div class="col-md-12">\n                        <div class="form-check mb-3">\n                            <input class="form-check-input" type="checkbox" id="gridCheck">\n                            <label class="form-check-label" for="gridCheck">\n                                Check me out\n                            </label>\n                        </div>\n                    </div>\n                    <div class="col-md-12">\n                        <button type="submit" class="btn btn-primary">Sign in</button>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Gutters\n                </div>\n                \n            </div>\n            <div class="card-body">\n                <form class="row g-3 mt-0">\n                    <div class="col-md-6">\n                        <label class="form-label">First Name</label>\n                        <input type="text" class="form-control" placeholder="First Name">\n                    </div>\n                    <div class="col-md-6">\n                        <label class="form-label">Last Name</label>\n                        <input type="text" class="form-control" placeholder="Last Name">\n                    </div>\n                    <div class="col-md-6">\n                        <label for="inputEmail4" class="form-label">Email</label>\n                        <input type="email" class="form-control" id="inputEmail4">\n                    </div>\n                    <div class="col-md-6">\n                        <label for="inputPassword4" class="form-label">Password</label>\n                        <input type="password" class="form-control" id="inputPassword4">\n                    </div>\n                    <div class="col-12">\n                        <label for="inputAddress" class="form-label">Address</label>\n                        <input type="text" class="form-control" id="inputAddress">\n                    </div>\n                    <div class="col-12">\n                        <label for="inputAddress2" class="form-label">Address 2</label>\n                        <input type="text" class="form-control" id="inputAddress2">\n                    </div>\n                    <div class="col-md-6">\n                        <label for="inputCity" class="form-label">City</label>\n                        <input type="text" class="form-control" id="inputCity">\n                    </div>\n                    <div class="col-md-4">\n                        <label for="inputState" class="form-label">State</label>\n                        <select id="inputState" class="form-select">\n                            <option selected="">Choose...</option>\n                            <option>...</option>\n                        </select>\n                    </div>\n                    <div class="col-md-2">\n                        <label for="inputZip" class="form-label">Zip</label>\n                        <input type="text" class="form-control" id="inputZip">\n                    </div>\n                    <div class="col-12">\n                        <div class="form-check">\n                            <input class="form-check-input" type="checkbox" id="gridCheck3">\n                            <label class="form-check-label" for="gridCheck3">\n                                Check me out\n                            </label>\n                        </div>\n                    </div>\n                    <div class="col-12">\n                        <button type="submit" class="btn btn-primary">Sign in</button>\n                    </div>\n                </form>\n            </div>\n            \n        </div>\n    </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.scss
var form_grid_gutters_component_default2;
var init_form_grid_gutters_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.scss"() {
    form_grid_gutters_component_default2 = "/* src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.scss */\n/*# sourceMappingURL=form-grid-gutters.component.css.map */\n";
  }
});

// src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.ts
var FormGridGuttersComponent;
var init_form_grid_gutters_component3 = __esm({
  "src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_form_grid_gutters_component();
    init_form_grid_gutters_component2();
    init_core();
    init_common();
    init_forms();
    FormGridGuttersComponent = class FormGridGuttersComponent2 {
    };
    FormGridGuttersComponent = __decorate([
      Component({
        selector: "app-form-grid-gutters",
        template: form_grid_gutters_component_default,
        imports: [CommonModule, FormsModule],
        styles: [form_grid_gutters_component_default2]
      })
    ], FormGridGuttersComponent);
  }
});

// src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.spec.ts
var require_form_grid_gutters_component_spec = __commonJS({
  "src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.spec.ts"(exports) {
    init_testing();
    init_form_grid_gutters_component3();
    describe("FormGridGuttersComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [FormGridGuttersComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(FormGridGuttersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_form_grid_gutters_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-forms-form-grid-gutters-form-grid-gutters.component.spec.js.map
