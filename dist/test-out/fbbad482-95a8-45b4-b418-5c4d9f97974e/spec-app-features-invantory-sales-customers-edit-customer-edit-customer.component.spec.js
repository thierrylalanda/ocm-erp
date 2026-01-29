import {
  BsDatepickerModule,
  init_ngx_bootstrap_datepicker
} from "./chunk-WSBEZP5X.js";
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
import "./chunk-SR4JAI3W.js";
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import "./chunk-2RBILSOV.js";
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
import "./chunk-HQHIWYWO.js";
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

// angular:jit:template:src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.html
var edit_customer_component_default;
var init_edit_customer_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.html"() {
    edit_customer_component_default = ' <!-- start row -->\n <div class="row">\n    <div class="col-md-10 mx-auto">\n        <div>\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6><a [routerLink]="routes.customerList"><i class="isax isax-arrow-left me-2"></i>Customer</a></h6>\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>\n            </div>\n            <div class="card">\n                <div class="card-body">\n                    <h6 class="mb-3">Basic Details</h6>\n                    <form>\n                        <div class="mb-3">\n                            <span class="text-gray-9 fw-bold mb-2 d-flex">Project Image <span class="text-danger">*</span></span>\n                            <div class="d-flex align-items-center">\n                                <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                    <div class="position-relative d-flex align-items-center">\n                                        <img src="assets/img/profiles/avatar-16.jpg" class="avatar avatar-xl " alt="User Img">\n                                        <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                                    </div>\n                                </div>\n                                <div class="d-inline-flex flex-column align-items-start">\n                                    <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                        <i class="isax isax-image me-1"></i>Upload Image\n                                        <input type="file" class="form-control image-sign" multiple="">\n                                    </div>\n                                    <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row gx-3">\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Name <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" value="Mitchel Johnson">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Email <span class="text-danger">*</span></label>\n                                    <input type="email" class="form-control" value="mitchel@example.com">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Phone Number <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" value="+1 9876543210">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Currency</label>\n                                    <mat-select class="custom-mat-select select" placeholder="Dollar">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">Dollar</mat-option>\n                                        <mat-option value="1">Euro</mat-option>\n                                        <mat-option value="1">Yen</mat-option>\n                                        <mat-option value="1">Pound</mat-option>\n                                        <mat-option value="1">Rupee</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Website</label>\n                                    <input type="text" class="form-control" value="https://www.example.com">\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-6">\n                                <div class="mb-3">\n                                    <label class="form-label">Notes</label>\n                                    <input type="text" class="form-control" value="Ensure all details are accurate.">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="border-top my-2">\n                            <div class="row gx-5">\n                                <div class="col-md-6 ">\n                                    <h6 class="mb-3 pt-4">Billing Address</h6>\n                                    <div class="row">\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Name</label>\n                                                <input type="text" class="form-control" value="Mitchel Johnson">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 1</label>\n                                                <input type="text" class="form-control" value="1234, Sunset Boulevard">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 2</label>\n                                                <input type="text" class="form-control" value="Los Angeles, CA 900026, USA">\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Country</label>\n                                                <mat-select class="custom-mat-select select" placeholder="United States">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">United States</mat-option>\n                                                    <mat-option value="1">Canada</mat-option>\n                                                    <mat-option value="1">UK</mat-option>\n                                                    <mat-option value="1">Germany</mat-option>\n                                                    <mat-option value="1">France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">State</label>\n                                                <mat-select class="custom-mat-select select" placeholder="California">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">California</mat-option>\n                                                    <mat-option value="1">Ontario</mat-option>\n                                                    <mat-option value="1">Bavaria</mat-option>\n                                                    <mat-option value="1">Wellington</mat-option>\n                                                    <mat-option value="1">Le-de-France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">City</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Los Angeles">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">Los Angeles</mat-option>\n                                                    <mat-option value="1">Toronto</mat-option>\n                                                    <mat-option value="1">London</mat-option>\n                                                    <mat-option value="1">Munich</mat-option>\n                                                    <mat-option value="1">Sydney</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Pincode</label>\n                                                <input type="text" class="form-control" value="900026">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-md-6">\n                                    <div class="d-flex align-items-center justify-content-between mb-3 pt-4">\n                                        <h6>Shipping Address</h6>\n                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center text-primary text-decoration-underline fs-13">\n                                            <i class="isax isax-document-copy me-1"></i>Copy From Billing\n                                        </a>\n                                    </div>\n                                    <div class="row">\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Name</label>\n                                                <input type="text" class="form-control" value="Mitchel Johnson">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 1</label>\n                                                <input type="text" class="form-control" value="1234, Sunset Boulevard">\n                                            </div>\n                                        </div>\n                                        <div class="col-12">\n                                            <div class="mb-3">\n                                                <label class="form-label">Address Line 2</label>\n                                                <input type="text" class="form-control" value="Los Angeles, CA 900026, USA">\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Country</label>\n                                                <mat-select class="custom-mat-select select" placeholder="United States">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">United States</mat-option>\n                                                    <mat-option value="1">Canada</mat-option>\n                                                    <mat-option value="1">UK</mat-option>\n                                                    <mat-option value="1">Germany</mat-option>\n                                                    <mat-option value="1">France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">State</label>\n                                                <mat-select class="custom-mat-select select" placeholder="California">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">California</mat-option>\n                                                    <mat-option value="1">Ontario</mat-option>\n                                                    <mat-option value="1">Bavaria</mat-option>\n                                                    <mat-option value="1">Wellington</mat-option>\n                                                    <mat-option value="1">Le-de-France</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">City</label>\n                                                <mat-select class="custom-mat-select select" placeholder="Los Angeles">\n                                                    <mat-option value="1">Select</mat-option>\n                                                    <mat-option value="1">Los Angeles</mat-option>\n                                                    <mat-option value="1">Toronto</mat-option>\n                                                    <mat-option value="1">London</mat-option>\n                                                    <mat-option value="1">Munich</mat-option>\n                                                    <mat-option value="1">Sydney</mat-option>\n                                                </mat-select>\n                                            </div>\n                                        </div>\n                                        <div class="col-md-6">\n                                            <div class="mb-3">\n                                                <label class="form-label">Pincode</label>\n                                                <input type="text" class="form-control" value="900026">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="border-top my-2">\n                            <h6 class="mb-3 pt-4">Banking Details</h6>\n                            <div class="row gx-3">\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Bank Name</label>\n                                        <input type="text" class="form-control" value="ABCD International Bank">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Branch</label>\n                                        <input type="text" class="form-control" value="MNOP Branch">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Account Holder</label>\n                                        <input type="text" class="form-control" value="Mitchel Johnson">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Account Number</label>\n                                        <input type="text" class="form-control" value="988722543618">\n                                    </div>\n                                </div>\n                                <div class="col-lg-4 col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">IFSC</label>\n                                        <input type="text" class="form-control" value="ABCD00001234">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between pt-4 border-top">\n                            <button type="button" class="btn btn-outline-white">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Save Changes</button>\n                        </div>\n                    </form>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n    </div><!-- end col -->\n</div>\n<!-- end row -->';
  }
});

// angular:jit:style:src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.scss
var edit_customer_component_default2;
var init_edit_customer_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.scss"() {
    edit_customer_component_default2 = "/* src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.scss */\n/*# sourceMappingURL=edit-customer.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.ts
var EditCustomerComponent;
var init_edit_customer_component3 = __esm({
  "src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_edit_customer_component();
    init_edit_customer_component2();
    init_core();
    init_core_index();
    init_select();
    init_router();
    init_ngx_bootstrap_datepicker();
    EditCustomerComponent = class EditCustomerComponent2 {
      routes = routes;
    };
    EditCustomerComponent = __decorate([
      Component({
        selector: "app-edit-customer",
        imports: [MatSelectModule, RouterLink, BsDatepickerModule],
        template: edit_customer_component_default,
        styles: [edit_customer_component_default2]
      })
    ], EditCustomerComponent);
  }
});

// src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.spec.ts
var require_edit_customer_component_spec = __commonJS({
  "src/app/features/invantory-sales/customers/edit-customer/edit-customer.component.spec.ts"(exports) {
    init_testing();
    init_edit_customer_component3();
    describe("EditCustomerComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [EditCustomerComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(EditCustomerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_edit_customer_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-customers-edit-customer-edit-customer.component.spec.js.map
