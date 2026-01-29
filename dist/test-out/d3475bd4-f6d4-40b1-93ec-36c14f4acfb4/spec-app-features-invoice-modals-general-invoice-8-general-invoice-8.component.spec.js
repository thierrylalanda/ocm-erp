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

// angular:jit:template:src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.html
var general_invoice_8_component_default;
var init_general_invoice_8_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.html"() {
    general_invoice_8_component_default = '\n<div class="p-4">\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-md-10 mx-auto">\n            <div class="mb-3">\n                <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n            </div>\n            <div>\n                <div class="d-flex align-items-center justify-content-between rounded flex-wrap row-gap-3 mb-2">\n                    <h5 class="text-primary">Invoice</h5>\n                    <div>\n                        <div class="mb-1"><img src="assets/img/invoice-logo.svg" alt="User Img"></div>\n                    </div>							\n                </div>\n                <div class="mb-3">\n                    <div class="row">\n                        <div class="mb-2">\n                            <h6 class="fs-16 mb-1">Dreamstechnologies</h6>\n                            <p class="mb-1">GST IN : <span class="text-dark">22AABCU9603R1ZX</span></p>\n                            <p class="mb-1">Address : <span class="text-dark">15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.</span></p>\n                            <p class="mb-1">Mobile  : <span class="text-dark">+91 98765 43210</span></p>\n                        </div>\n                    </div> <!-- end row -->\n                </div>\n                <div class="card rounded-0 shadow-none mb-3 border-bottom">\n                    <div class="card-body p-0">\n                        <div class="row gx-0">\n                            <div class="col-lg-7 d-flex">\n                                <div class="p-3 border-end flex-fill">\n                                     <div class="mb-3">\n                                        <h6 class="fs-16 text-gray-5 mb-2">Billing Address :</h6>\n                                        <div>\n                                            <p class="mb-0 text-dark">Walter Roberson</p>\n                                            <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                                            <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                                            <p class="mb-0 text-dark">+45 5421 4523</p>\n                                        </div>\n                                    </div>\n                                    <div class="mb-3">\n                                        <h6 class="fs-16 text-gray-5 mb-2">Shipping Address :</h6>\n                                        <div>\n                                            <p class="mb-0 text-dark">Walter Roberson</p>\n                                            <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                                            <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                                            <p class="mb-0 text-dark">+45 5421 4523</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div> <!-- end col -->\n                            <div class="col-lg-5 d-flex">\n                                <div class="row flex-fill gx-0 align-items-center">\n                                    <div class="col-md-6">\n                                        <div class="border-end border-bottom text-center p-3">\n                                            <span class="d-block mb-1">Invoice No:</span>\n                                            <p class="fw-semibold text-primary">#10077005</p>\n                                        </div>\n                                    </div> <!-- end col -->\n                                    <div class="col-md-6">\n                                        <div class="border-bottom text-center p-3">\n                                            <span class="d-block mb-1">Invoice Date:</span>\n                                            <p class="fw-semibold text-primary">07/12/2023</p>\n                                        </div>\n                                    </div> <!-- end col -->\n                                    <div class="col-md-6">\n                                        <div class="border-end p-3">\n                                            <div class="text-center">\n                                                <span class="d-block mb-1">Payment Status :</span>\n                                                <p class="fw-semibold text-primary">NOT PAID</p>\n                                            </div>\n                                        </div>\n                                    </div> <!-- end col -->\n                                    <div class="col-md-6">\n                                        <div class="p-3">\n                                            <div class="text-center">\n                                                <span class="d-block mb-1">Due Date:</span>\n                                                <p class="fw-semibold text-primary">07/31/2023</p>\n                                            </div>\n                                        </div>\n                                    </div> <!-- end col -->\n                                </div> <!-- end row -->\n                            </div> <!-- end col -->\n                        </div> <!-- end row -->\n                    </div> <!-- end card-body -->\n                </div> <!-- end card -->\n                <div class="table-responsive">\n                    <table class="table">\n                        <thead class="thead-light">\n                            <tr>\n                                <th>#</th>\n                                <th>Tax Value</th>\n                                <th>Qty</th>\n                                <th>Tax Value</th>\n                                <th>Discount</th>\n                                <th class="text-end">Total</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class="text-dark">1</td>\n                                <td>Accounting Software Maintainence</td>\n                                <td class="text-dark">1</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block mb-1">$500</span>\n                                        <p class="text-primary">after disc. $450.00</p>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$350</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">2</td>\n                                <td>Man Power Support</td>\n                                <td class="text-dark">1</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block">$100</span>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$600</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">3</td>\n                                <td>Transportation Fee</td>\n                                <td class="text-dark">2</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block mb-1">$500</span>\n                                        <p class="text-primary">after disc. $450.00</p>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$400</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">4</td>\n                                <td>Spars Replacement Charges</td>\n                                <td class="text-dark">3</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block">$100</span>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$300</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">5</td>\n                                <td>Materials Handling</td>\n                                <td class="text-dark">3</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block mb-1">$500</span>\n                                        <p class="text-primary">after disc. $450.00</p>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$300</td>\n                            </tr>\n                            <tr>\n                                <td colspan="4">\n                                    \n                                </td>\n                                <td class="text-dark">\n                                    <div>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">Taxable Amount</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">IGST 18.0%</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">Extra Discount Promo (5%)</h6>\n                                        <h6 class="fs-14 fw-medium mb-0">Round Off</h6>\n                                    </div>\n                                </td>\n                                <td class="text-dark text-end fw-medium">\n                                    <div>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">$1650.00</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">$165.00</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">$165.00</h6>\n                                        <h6 class="fs-14 fw-medium mb-0">$165.00</h6>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class="py-3 border-top-0 border-bottom mb-3 d-flex align-items-center justify-content-between">\n                    <p class="text-dark">Total amount ( in words): <br>  One Thousand Eight Hundred Fifteen Dollars Only.</p>\n                    <div class="d-flex align-items-center">\n                        <span class="border-end-0"></span>\n                        <span class="text-dark fw-medium border-end-0 border-start-0 text-center me-2"><h6>Amount Payable</h6></span>\n                        <span class="text-dark text-end fw-medium border-start-0"><h6>$1,815.00</h6></span>\n                    </div>\n                </div>\n                <div class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3">\n                    <div class="mb-3">								\n                        <div class="d-flex align-items-center">\n                            <div class="me-3">\n                                <h6 class="mb-2">Bank Details</h6>\n                                <p class="mb-1">Bank Name :  <span class="text-dark">YES Bank</span></p>\n                                <p class="mb-1">Account # :  <span class="text-dark">6677889944551</span></p>\n                                <p class="mb-1">IFSC :  <span class="text-dark">YESBBIN4567</span></p>\n                                <p class="mb-0">BRANCH :  <span class="text-dark">RS Puram</span></p>\n                            </div>\n                            <div class="me-4">\n                                <span class="d-block mb-2"><img src="assets/img/icons/qr.png" alt="User Img"></span>\n                                <p class="text-dark">Scan to View Receipt</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="text-center mb-3">\n                        <p class="mb-1">For Dreamstechnologies</p>\n                        <span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n                    </div>\n                </div>\n                <div class="border-bottom mb-3">\n                    <p class="bg-primary-subtle p-2 text-dark fs-13 mb-3">NOTES: All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</p>\n                </div>\n                <div class="border-bottom pb-3">\n                    <p>Thanks for your Business</p>\n                </div>\n            </div>\n        </div> <!-- end col -->\n    </div>\n    <!-- end row -->\n\n</div>';
  }
});

// angular:jit:style:src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.scss
var general_invoice_8_component_default2;
var init_general_invoice_8_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.scss"() {
    general_invoice_8_component_default2 = "/* src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.scss */\n/*# sourceMappingURL=general-invoice-8.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.ts
var GeneralInvoice8Component;
var init_general_invoice_8_component3 = __esm({
  "src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_general_invoice_8_component();
    init_general_invoice_8_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    GeneralInvoice8Component = class GeneralInvoice8Component2 {
      routes = routes;
    };
    GeneralInvoice8Component = __decorate([
      Component({
        selector: "app-general-invoice-8",
        imports: [CommonModule, RouterLink],
        template: general_invoice_8_component_default,
        styles: [general_invoice_8_component_default2]
      })
    ], GeneralInvoice8Component);
  }
});

// src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.spec.ts
var require_general_invoice_8_component_spec = __commonJS({
  "src/app/features/invoice-modals/general-invoice-8/general-invoice-8.component.spec.ts"(exports) {
    init_testing();
    init_general_invoice_8_component3();
    describe("GeneralInvoice8Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [GeneralInvoice8Component]
        }).compileComponents();
        fixture = TestBed.createComponent(GeneralInvoice8Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_general_invoice_8_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-general-invoice-8-general-invoice-8.component.spec.js.map
