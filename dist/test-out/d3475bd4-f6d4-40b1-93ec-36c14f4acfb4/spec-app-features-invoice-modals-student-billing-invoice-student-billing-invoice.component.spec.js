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

// angular:jit:template:src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.html
var student_billing_invoice_component_default;
var init_student_billing_invoice_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.html"() {
    student_billing_invoice_component_default = '<div class="p-4">\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-md-10 mx-auto">\n            <div class="mb-3">\n                <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n            </div>\n            <div class="pb-3 mb-3 border-bottom border-3 border-light">\n                <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-3 rounded">\n                    <div>\n                        <img src="assets/img/invoice-logo.svg" class="mb-2" alt="User Img">\n                    </div>\n                    <div class="text-end">\n                        <h6 class="text-primary fw-bold mb-2">UNIVERSITY NAME</h6>\n                        <span class="text-gray mb-2">Original For Recipient</span>\n                    </div>\n\n                </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-center mb-3">\n                <div>\n                    <h6 class="mb-1 fs-16">Tax Invoice</h6>\n                </div>\n            </div>\n            <!-- start row -->\n            <div class="row">\n                <div class="col-lg-4">\n                    <div class="mb-3 border-light">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-2 rounded">\n                            <div class="text-gray fw-normal">Student Name :</div>\n                            <span class="text-dark fw-medium">Walter Roberson</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="mb-3 border-light">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-2 rounded">\n                            <div class="text-gray fw-normal">Student ID :</div>\n                            <span class="text-dark fw-medium">DD465123</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="mb-3 border-light">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-2 rounded">\n                            <div class="text-gray fw-normal">Term :</div>\n                            <span class="text-dark fw-medium">Winter</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="mb-3 border-light">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-2 rounded">\n                            <div class="text-gray fw-normal">Balance Due :</div>\n                            <span class="text-dark fw-medium">$1815</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="mb-3 border-light">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-2 rounded">\n                            <div class="text-gray fw-normal">Due Date :</div>\n                            <span class="text-dark fw-medium">05/01/2023</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="mb-3 border-light">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-2 rounded">\n                            <div class="text-gray fw-normal">Statement For :</div>\n                            <span class="text-dark fw-medium">2023 Spring</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end row -->\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <div>\n                    <p class="mb-1 fw-bold d-block">Bill To :</p>\n                    <span class="mb-1 fw-noraml text-dark d-block">Walter Roberson</span>\n                    <span class="mb-1 fw-noraml text-dark d-block">299 Star Trek Drive, Panama City, Florida, 32405, USA.</span>\n                    <span class="mb-1 fw-noraml text-dark d-block">walter&#64;gmail.com</span>\n                    <span class="mb-1 fw-noraml text-dark d-block">+45 5421 4523</span>\n                </div>\n            </div>\n            <!-- start row -->\n            <div class="row mb-3">\n                <div class="col-md-12">\n                    <table class="table">\n                        <thead class="thead-light border border-gray border-start-0 border-end-0">\n                            <tr>\n                                <th>#</th>\n                                <th>Item</th>\n                                <th>Due Date</th>\n                                <th class="text-end">Total</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr class="border-gray">\n                                <td class="text-dark">1</td>\n                                <td>\n                                    <div class="d-flex flex-column">\n                                        <span class="text-dark">Semester Fee</span>\n                                    </div>\n                                </td>\n                                <td><span class="text-dark">01Jan 2024</span></td>\n                                <td class="text-end"><span class="text-dark">$350</span></td>\n                            </tr>\n                            <tr class="border-gray">\n                                <td class="text-dark">2</td>\n                                <td>\n                                    <div class="d-flex flex-column">\n                                        <span class="text-dark">Exam Fee</span>\n                                    </div>\n                                </td>\n                                <td><span class="text-dark">01Jan 2024</span></td>\n                                <td class="text-end"><span class="text-dark">$600</span></td>\n                            </tr>\n                            <tr class="border-gray">\n                                <td class="text-dark">3</td>\n                                <td>\n                                    <div class="d-flex flex-column">\n                                        <span class="text-dark">Tansport Fee</span>\n                                    </div>\n                                </td>\n                                <td><span class="text-dark">01Jan 2024</span></td>\n                                <td class="text-end"><span class="text-dark">$400</span></td>\n                            </tr>\n                            <tr class="border-gray">\n                                <td class="text-dark">4</td>\n                                <td>\n                                    <div class="d-flex flex-column">\n                                        <span class="text-dark">Hostel Fee</span>\n                                    </div>\n                                </td>\n                                <td><span class="text-dark">01Jan 2024</span></td>\n                                <td class="text-end"><span class="text-dark">$300</span></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <!-- end row -->\n            <!-- start row -->\n            <div class="row">\n                <div class="col-md-9">\n                    <p class="mb-1 fw-normal">Important Note :</p>\n                    <span class="mb-1 fw-noraml text-dark">Delivery dates are not guaranteed and Seller has no liability for damages that may be incurred due to any delay.</span>\n                </div>\n                <div class="col-md-3">\n                    <div class="">\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <p class="fs-14 fw-medium mb-0 text-dark">Taxable Amount</p>\n                            <p class="fs-14 fw-medium mb-0 text-dark">$1650.00</p>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <p class="fs-14 fw-medium mb-0 text-dark">Discount 0%</p>\n                            <p class="fs-14 fw-medium mb-0 text-dark">+ $0.00</p>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <p class="fs-14 fw-medium mb-0 text-dark">IGST 18.0%</p>\n                            <p class="fs-14 fw-medium mb-0 text-dark">$165.00</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end row -->\n            <!-- start row -->\n            <div class="row mb-2 border-top border-bottom border-3 border-light">\n                <div class="col-md-9 pb-3">\n                    <p class="mb-1 fw-normal pt-3">Total amount ( in words):</p>\n                    <span class="mb-1 fw-noraml text-dark">One Thousand, Eight Hundred and Fifteen Dollars Only.</span>\n                </div>\n                <div class="col-md-3">\n                    <div class="mb-3 pt-4 align-items-center">\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <h6 class="fs-18 fw-bold">Amount Payable</h6>\n                            <h6 class="fs-18 fw-bold">$1,815.00</h6>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end row -->\n            <!-- start row -->\n            <div class="row d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3">\n                <div class="col-md-9">\n                    <div class="mb-3">\n                        <h6 class="mb-2">Payment Info :</h6>\n                        <div>\n                            <p class="mb-1">Debit Card : <span class="text-dark">465 *************645</span></p>\n                            <p class="mb-1">Amount : <span class="text-dark">$1,815</span></p>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-md-3">\n                    <div class="text-end mb-3">\n                        <p class="mb-1">For Dreamstechnologies</p>\n                        <span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n                    </div>\n                </div>\n                <div class="d-flex align-items-center justify-content-center mb-3">\n                    <div>\n                        <h6 class="mb-2 fs-16 text-center">Terms & Conditions : </h6>\n                        <p class="mb-0 fs-13">1. We are not the manufactures, company will stand for warrenty as per their terms and conditions. </p>\n                    </div>\n                </div>\n            </div>\n            <!-- end row -->\n            <!-- start row -->\n            <div class="row border-bottom pb-3 text-center">\n                <div class="col-md-12">\n                    <p class="text-gray">Thanks for your Business</p>\n                </div>\n            </div>\n            <!-- end row -->\n        </div><!-- end col -->\n    </div>\n    <!-- end row -->\n     \n</div>';
  }
});

// angular:jit:style:src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.scss
var student_billing_invoice_component_default2;
var init_student_billing_invoice_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.scss"() {
    student_billing_invoice_component_default2 = "/* src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.scss */\n/*# sourceMappingURL=student-billing-invoice.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.ts
var StudentBillingInvoiceComponent;
var init_student_billing_invoice_component3 = __esm({
  "src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_student_billing_invoice_component();
    init_student_billing_invoice_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    StudentBillingInvoiceComponent = class StudentBillingInvoiceComponent2 {
      routes = routes;
    };
    StudentBillingInvoiceComponent = __decorate([
      Component({
        selector: "app-student-billing-invoice",
        imports: [CommonModule, RouterLink],
        template: student_billing_invoice_component_default,
        styles: [student_billing_invoice_component_default2]
      })
    ], StudentBillingInvoiceComponent);
  }
});

// src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.spec.ts
var require_student_billing_invoice_component_spec = __commonJS({
  "src/app/features/invoice-modals/student-billing-invoice/student-billing-invoice.component.spec.ts"(exports) {
    init_testing();
    init_student_billing_invoice_component3();
    describe("StudentBillingInvoiceComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [StudentBillingInvoiceComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(StudentBillingInvoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_student_billing_invoice_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-student-billing-invoice-student-billing-invoice.component.spec.js.map
