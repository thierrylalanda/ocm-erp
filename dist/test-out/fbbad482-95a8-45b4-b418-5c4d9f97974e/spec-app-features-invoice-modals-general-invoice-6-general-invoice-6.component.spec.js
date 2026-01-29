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

// angular:jit:template:src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.html
var general_invoice_6_component_default;
var init_general_invoice_6_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.html"() {
    general_invoice_6_component_default = '<div class="p-4">\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-md-10 mx-auto">\n            <div class="mb-3">\n                <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n            </div>\n            <div>\n                <div class="border-bottom mb-3">\n\n                    <!-- start row -->\n                    <div class="row align-items-center">\n                        <div class="col-lg-4">\n                            <div class="mb-3">\n                                <h5 class="text-primary mb-3">Invoice</h5>\n                                <div class="p-4 invoice-design-6">\n                                    <p class="fw-semibold text-dark mb-1">Dreams Technologies Pvt Ltd</p>\n                                    <p class="text-dark">Address : 15 Hodges Mews, <br> High Wycombe HP12 3JL, United Kingdom.</p>\n                                </div>\n                            </div>\n                        </div> <!-- end col -->\n                        <div class="col-lg-8">\n                            <div class="text-lg-end mb-2">\n                                <div class="mb-1"><img src="assets/img/invoice-logo.svg" alt="User Img"></div>\n                                <p class="mb-1">Invoice No : <span class="text-dark">#005</span></p>\n                                <p class="mb-1">Invoice Date : <span class="text-dark">05/10/2024</span></p>\n                                <p class="mb-1">Due Date  : <span class="text-dark">05/12/2024</span></p>\n                            </div>\n                        </div> <!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                </div>\n                <div class="bg-light p-2 mb-3">\n                    <p>Customer Information</p>\n                </div>\n\n                <!-- start row -->\n                <div class="row">\n                    <div class="col-lg-4">\n                        <div class="mb-3">\n                            <h6 class="fs-16 text-gray-5 mb-2">Customer Details :</h6>\n                            <div>\n                                <h6 class="mb-1">John Williams</h6>\n                                <p class="mb-0">GSTIN : ACWR000054321</p>\n                            </div>\n                        </div>\n                    </div> <!-- end col -->\n                    <div class="col-lg-4">\n                        <div class="mb-3">\n                            <h6 class="fs-16 text-gray-5 mb-2">Billing Address :</h6>\n                            <div>\n                                <p class="mb-0 text-dark">Walter Roberson</p>\n                                <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                                <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                                <p class="mb-0 text-dark">+45 5421 4523</p>\n                            </div>\n                        </div>\n                    </div> <!-- end col -->\n                    <div class="col-lg-4">\n                        <div class="mb-3">\n                            <h6 class="fs-16 text-gray-5 mb-2">Shipping Address :</h6>\n                            <div>\n                                <p class="mb-0 text-dark">Walter Roberson</p>\n                                <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                                <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                                <p class="mb-0 text-dark">+45 5421 4523</p>\n                            </div>\n                        </div>\n                    </div> <!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <div class="mb-3">\n                    <h6 class="fs-16 text-gray-5 mb-3">Payment Status</h6>\n                    <span class="text-success fs-18 fw-semibold">PAID</span>\n                </div>\n                <div class="table-responsive mb-3">\n                    <table class="table">\n                        <thead class="thead-light">\n                            <tr>\n                                <th>#</th>\n                                <th>Tax Value</th>\n                                <th>Qty</th>\n                                <th>Tax Value</th>\n                                <th>Discount</th>\n                                <th class="text-end">Total</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class="text-dark">1</td>\n                                <td>Accounting Software Maintainence</td>\n                                <td class="text-dark">1</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block mb-1">$500</span>\n                                        <p class="text-primary">after disc. $450.00</p>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$350</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">2</td>\n                                <td>Man Power Support</td>\n                                <td class="text-dark">1</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block">$100</span>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$600</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">3</td>\n                                <td>Transportation Fee</td>\n                                <td class="text-dark">2</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block mb-1">$500</span>\n                                        <p class="text-primary">after disc. $450.00</p>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$400</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">4</td>\n                                <td>Spars Replacement Charges</td>\n                                <td class="text-dark">3</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block">$100</span>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$300</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">5</td>\n                                <td>Materials Handling</td>\n                                <td class="text-dark">3</td>\n                                <td>\n                                    <div>\n                                        <span class="d-block mb-1">$500</span>\n                                        <p class="text-primary">after disc. $450.00</p>\n                                    </div>\n                                </td>\n                                <td class="text-dark">10%</td>\n                                <td class="text-dark text-end">$300</td>\n                            </tr>\n                            <tr>\n                                <td colspan="4">\n                                    \n                                </td>\n                                <td class="text-dark">\n                                    <div>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">Taxable Amount</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">IGST 18.0%</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">Extra Discount Promo (5%)</h6>\n                                        <h6 class="fs-14 fw-medium mb-0">Round Off</h6>\n                                    </div>\n                                </td>\n                                <td class="text-dark text-end fw-medium">\n                                    <div>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">$1650.00</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">$165.00</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2">$165.00</h6>\n                                        <h6 class="fs-14 fw-medium mb-0">$165.00</h6>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td colspan="4" class="text-dark"></td>\n                                <td class="text-dark fw-medium"><h6>Total</h6></td>\n                                <td class="text-dark text-end fw-medium"><h6>$1,815.00</h6></td>\n                            </tr>\n                            <tr>\n                                <td colspan="6" class="text-end">Total amount ( in words):   One Thousand Eight Hundred Fifteen Dollars Only.</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class="d-flex align-items-center justify-content-between flex-wrap border-bottom">\n                    <div class="d-flex align-items-start mb-3">\n                        <div class="me-4">\n                            <span class="d-block mb-2"><img src="assets/img/icons/qr.png" alt="User Img"></span>\n                            <p class="text-dark">Scan to View Receipt</p>\n                        </div>\n                        <div>\n                            <h6 class="mb-2">Payment Info :</h6>\n                            <div>\n                                <p class="mb-1">Debit Card : <span class="text-dark">465 *************645</span></p>\n                                <p class="mb-1">Amount : <span class="text-dark">$1,815</span></p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <p class="mb-2">Terms & Conditions : </p>\n                        <p class="mb-1 text-dark">1. Goods Once sold cannot be taken back or exchanged.</p>\n                        <p class="text-dark">2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                    </div>\n                </div>\n                <div class="border-bottom py-3 bg-light text-center">\n                    <p>Thanks for your Business</p>\n                </div>\n            </div>\n        </div> <!-- end col -->\n    </div>\n    <!-- end row -->\n\n</div>';
  }
});

// angular:jit:style:src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.scss
var general_invoice_6_component_default2;
var init_general_invoice_6_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.scss"() {
    general_invoice_6_component_default2 = "/* src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.scss */\n/*# sourceMappingURL=general-invoice-6.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.ts
var GeneralInvoice6Component;
var init_general_invoice_6_component3 = __esm({
  "src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_general_invoice_6_component();
    init_general_invoice_6_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    GeneralInvoice6Component = class GeneralInvoice6Component2 {
      routes = routes;
    };
    GeneralInvoice6Component = __decorate([
      Component({
        selector: "app-general-invoice-6",
        imports: [CommonModule, RouterLink],
        template: general_invoice_6_component_default,
        styles: [general_invoice_6_component_default2]
      })
    ], GeneralInvoice6Component);
  }
});

// src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.spec.ts
var require_general_invoice_6_component_spec = __commonJS({
  "src/app/features/invoice-modals/general-invoice-6/general-invoice-6.component.spec.ts"(exports) {
    init_testing();
    init_general_invoice_6_component3();
    describe("GeneralInvoice6Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [GeneralInvoice6Component]
        }).compileComponents();
        fixture = TestBed.createComponent(GeneralInvoice6Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_general_invoice_6_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-general-invoice-6-general-invoice-6.component.spec.js.map
