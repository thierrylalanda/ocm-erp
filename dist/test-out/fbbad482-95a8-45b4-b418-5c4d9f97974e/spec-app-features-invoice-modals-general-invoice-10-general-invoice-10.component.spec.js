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

// angular:jit:template:src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.html
var general_invoice_10_component_default;
var init_general_invoice_10_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.html"() {
    general_invoice_10_component_default = '<div class="p-4">\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-md-10 mx-auto">\n            <div class="mb-3">\n                <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n            </div>\n            <div class="mb-3 p-2 bg-light">\n                <div class="d-flex align-items-center justify-content-between flex-wrap p-3 rounded">\n                    <div class="">\n                        <img src="assets/img/invoice-logo.svg" class="mb-2" alt="User Img"> \n                    </div>\n                    <div class="text-end">\n                        <h6 class="mb-2 text-primary">INVOICE</h6>\n                    </div>\n                </div>\n            </div>\n            <div class="invoice-five-details d-flex">\n                <div class="gradient-block me-4"></div>\n                <div class="d-flex align-items-center gap-2">\n                    <div class="text-dark fs-13 me-4">Invoice No :<span>#005</span> </div>\n                    <div class="text-dark fs-13">Invoice Date :<span> 07-10-2023</span></div>\n                </div>\n            </div>  \n            <div class="row bg-light p-2 mb-3">\n                <div class="col-lg-7">\n                    <div class="row">\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <h6 class="fs-16 text-gray mb-2">Invoice To:</h6>\n                                <div>\n                                    <p class="mb-0 text-dark">Walter Roberson</p>\n                                    <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                                    <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                                    <p class="mb-0 text-dark">+45 5421 4523</p>\n                                </div>\n                            </div>\n                        </div> <!-- end col -->\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <h6 class="fs-16 text-gray mb-2">Pay To:</h6>\n                                <div>\n                                    <p class="mb-0 text-dark">Walter Roberson</p>\n                                    <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                                    <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                                    <p class="mb-0 text-dark">+45 5421 4523</p>\n                                </div>\n                            </div>\n                        </div> <!-- end col -->\n                    </div> <!-- end row -->\n                </div> <!-- end col -->\n                <div class="col-lg-5">\n                    <div class="mb-3">\n                        <div>\n                            <p class="mb-3 text-dark">Date <br> <span class="badge bg-orange-transparent text-orange">07/19/2023</span></p>\n                            <p class="text-dark">Payment Status <br> <span class="text-info">Not Paid</span></p>\n                        </div>\n                    </div>\n                </div> <!-- end col -->\n            </div> <!-- end row -->\n            <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 mb-3 pb-3">							\n                <div>\n                    <h5 class="mb-2">Customer Details :</h5>\n                    <div>\n                        <h6 class="mb-1">John Williams</h6>\n                        <div class="mb-2"> \n                            <p>GSTIN : <span class="text-dark">ACWR000054321</span></p>\n                        </div>\n                        <h6 class="mb-1 fw-semibold text-gray mb-2">Payment Status</h6>\n                        <h6 class="mb-1 text-success">PAID</h6>\n                    </div>\n                </div>\n                <div>\n                    <h6 class="mb-2 text-end">Dreamstechnologies</h6>\n                    <p class="mb-1 text-end">GST IN : <span class="text-dark">22AABCU9603R1ZX</span></p>\n                    <p class="mb-1 text-end">Address : <span class="text-dark">15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.</span></p>\n                    <p class="mb-1 text-end">Mobile : <span class="text-dark"> +91 98765 43210</span></p>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-md-6">\n                    <div class="mb-3">\n                        <h6 class="fs-16 text-gray-5 mb-2">Billing Address :</h6>\n                        <div>\n                            <p class="mb-0 text-dark">Walter Roberson</p>\n                            <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                            <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                            <p class="mb-0 text-dark">+45 5421 4523</p>\n                        </div>\n                    </div>\n                </div> <!-- end col -->\n                <div class="col-md-6 text-end">\n                    <div class="mb-3">\n                        <h6 class="fs-16 text-gray-5 mb-2">Shipping Address :</h6>\n                        <div>\n                            <p class="mb-0 text-dark">Walter Roberson</p>\n                            <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                            <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                            <p class="mb-0 text-dark">+45 5421 4523</p>\n                        </div>\n                    </div>\n                </div> <!-- end col -->\n            </div> <!-- end row -->\n            <div class="table-responsive">\n                <table class="table">\n                    <thead class="thead-light">\n                        <tr>\n                            <th>#</th>\n                            <th>Tax Value</th>\n                            <th>Qty</th>\n                            <th>Tax Value</th>\n                            <th>Discount</th>\n                            <th class="text-end">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class="text-dark">1</td>\n                            <td>Accounting Software Maintainence</td>\n                            <td class="text-dark">1</td>\n                            <td>\n                                <div>\n                                    <span class="d-block mb-1">$500</span>\n                                    <p class="text-primary">after disc. $450.00</p>\n                                </div>\n                            </td>\n                            <td class="text-dark">10%</td>\n                            <td class="text-dark text-end">$350</td>\n                        </tr>\n                        <tr>\n                            <td class="text-dark">2</td>\n                            <td>Man Power Support</td>\n                            <td class="text-dark">1</td>\n                            <td>\n                                <div>\n                                    <span class="d-block">$100</span>\n                                </div>\n                            </td>\n                            <td class="text-dark">10%</td>\n                            <td class="text-dark text-end">$600</td>\n                        </tr>\n                        <tr>\n                            <td class="text-dark">3</td>\n                            <td>Transportation Fee</td>\n                            <td class="text-dark">2</td>\n                            <td>\n                                <div>\n                                    <span class="d-block mb-1">$500</span>\n                                    <p class="text-primary">after disc. $450.00</p>\n                                </div>\n                            </td>\n                            <td class="text-dark">10%</td>\n                            <td class="text-dark text-end">$400</td>\n                        </tr>\n                        <tr>\n                            <td class="text-dark">4</td>\n                            <td>Spars Replacement Charges</td>\n                            <td class="text-dark">3</td>\n                            <td>\n                                <div>\n                                    <span class="d-block">$100</span>\n                                </div>\n                            </td>\n                            <td class="text-dark">10%</td>\n                            <td class="text-dark text-end">$300</td>\n                        </tr>\n                        <tr>\n                            <td class="text-dark">5</td>\n                            <td>Materials Handling</td>\n                            <td class="text-dark">3</td>\n                            <td>\n                                <div>\n                                    <span class="d-block mb-1">$500</span>\n                                    <p class="text-primary">after disc. $450.00</p>\n                                </div>\n                            </td>\n                            <td class="text-dark">10%</td>\n                            <td class="text-dark text-end">$300</td>\n                        </tr>\n                        <tr>\n                            <td colspan="4">\n                                \n                            </td>\n                            <td class="text-dark">\n                                <div>\n                                    <h6 class="fs-14 fw-medium mb-2 pb-2">Taxable Amount</h6>\n                                    <h6 class="fs-14 fw-medium mb-2 pb-2">IGST 18.0%</h6>\n                                    <h6 class="fs-14 fw-medium mb-2 pb-2">Extra Discount Promo (5%)</h6>\n                                    <h6 class="fs-14 fw-medium mb-0">Round Off</h6>\n                                </div>\n                            </td>\n                            <td class="text-dark text-end fw-medium">\n                                <div>\n                                    <h6 class="fs-14 fw-medium mb-2 pb-2">$1650.00</h6>\n                                    <h6 class="fs-14 fw-medium mb-2 pb-2">$165.00</h6>\n                                    <h6 class="fs-14 fw-medium mb-2 pb-2">$165.00</h6>\n                                    <h6 class="fs-14 fw-medium mb-0">$165.00</h6>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table> <!-- end table -->\n            </div>\n            <div class="py-3 border-top-0 border-bottom d-flex align-items-center justify-content-between">\n                <p class="text-dark mb-0">Total amount ( in words): <br>  One Thousand Eight Hundred Fifteen Dollars Only.</p>\n                <div class="d-flex align-items-center">\n                    <span class="border-end-0"></span>\n                    <span class="text-dark fw-medium border-end-0 border-start-0 text-center me-2"><h6>Amount Payable</h6></span>\n                    <span class="text-dark text-end fw-medium border-start-0"><h6>$1,815.00</h6></span>\n                </div>\n            </div>\n            <div class="d-flex align-items-center py-3 justify-content-between flex-wrap border-bottom mb-3">\n                <div class="mb-3">								\n                    <div class="d-flex align-items-center">\n                        <div class="me-3">\n                            <h6 class="mb-2">Bank Details</h6>\n                            <p class="mb-1">Bank Name :  <span class="text-dark">YES Bank</span></p>\n                            <p class="mb-1">Account # :  <span class="text-dark">6677889944551</span></p>\n                            <p class="mb-1">IFSC :  <span class="text-dark">YESBBIN4567</span></p>\n                            <p class="mb-0">BRANCH :  <span class="text-dark">RS Puram</span></p>\n                        </div>\n                        <div class="me-4">\n                            <span class="d-block mb-2"><img src="assets/img/icons/qr.png" alt="User Img"></span>\n                            <p class="text-dark">Scan to View Receipt</p>\n                        </div>\n                    </div>\n                </div>\n                <div class="text-center mb-3">\n                    <p class="mb-1">For Dreamstechnologies</p>\n                    <span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n                </div>\n            </div>\n            <div class="d-flex align-items-center flex-wrap border-bottom mb-3">\n                <div class="mb-3">\n                    <p class="mb-2 fs-13 text-gray">Terms & Conditions : </p>\n                    <p class="mb-1 text-dark">1. Goods Once sold cannot be taken back or exchanged.</p>\n                    <p class="text-dark">2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                </div>\n            </div>\n            <div class="border-bottom pb-3">\n                <p>Thanks for your Business</p>\n            </div>\n        </div> <!-- end col -->\n    </div>\n    <!-- end row -->\n</div>';
  }
});

// angular:jit:style:src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.scss
var general_invoice_10_component_default2;
var init_general_invoice_10_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.scss"() {
    general_invoice_10_component_default2 = "/* src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.scss */\n/*# sourceMappingURL=general-invoice-10.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.ts
var GeneralInvoice10Component;
var init_general_invoice_10_component3 = __esm({
  "src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_general_invoice_10_component();
    init_general_invoice_10_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    GeneralInvoice10Component = class GeneralInvoice10Component2 {
      routes = routes;
    };
    GeneralInvoice10Component = __decorate([
      Component({
        selector: "app-general-invoice-10",
        imports: [CommonModule, RouterLink],
        template: general_invoice_10_component_default,
        styles: [general_invoice_10_component_default2]
      })
    ], GeneralInvoice10Component);
  }
});

// src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.spec.ts
var require_general_invoice_10_component_spec = __commonJS({
  "src/app/features/invoice-modals/general-invoice-10/general-invoice-10.component.spec.ts"(exports) {
    init_testing();
    init_general_invoice_10_component3();
    describe("GeneralInvoice10Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [GeneralInvoice10Component]
        }).compileComponents();
        fixture = TestBed.createComponent(GeneralInvoice10Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_general_invoice_10_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-general-invoice-10-general-invoice-10.component.spec.js.map
