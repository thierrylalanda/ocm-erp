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

// angular:jit:template:src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.html
var general_invoice_4_component_default;
var init_general_invoice_4_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.html"() {
    general_invoice_4_component_default = '<div class="p-4">\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-md-10 mx-auto">\n            <div class="mb-3">\n                <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n            </div>\n            <div>\n                <div class="d-flex align-items-center justify-content-between bg-light p-3 rounded flex-wrap row-gap-3 mb-3">\n                    <div>\n                        <div class="mb-1"><img src="assets/img/invoice-logo.svg" alt="User Img"></div>\n                    </div>\n                    <div>\n                        <h5 class="mb-1">TAX INVOICE</h5>\n                        <p>Original For Recipient</p>\n                    </div>\n                </div>\n                <div class="border-bottom mb-3">\n                    <h6 class="mb-2 fs-16">Dreamstechnologies</h6>\n                    <div class="row">\n                        <div class="col-lg-4">\n                            <div class="row">\n                                <div class="col-md-6">\n                                    <div class="mb-2">\n                                        <span class="d-block mb-1">GST IN :</span>\n                                        <p class="text-dark">22AABCU9603R1ZX</p>\n                                    </div>\n                                </div>\n                                <div class="col-md-6">\n                                    <div class="mb-2">\n                                        <span class="d-block mb-1">Mobile :</span>\n                                        <p class="text-dark">+91 98765 43210</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> <!-- end col -->\n                        <div class="col-lg-8">\n                            <div class="text-lg-end mb-2">\n                                <p class="mb-1">Invoice No: <span class="text-dark">INV 00001</span></p>\n                                <p class="mb-1">Date: <span class="text-dark">05/12/2024</span></p>\n                            </div>\n                        </div> <!-- end col -->\n                        <div class="col-md-12">\n                            <div class="mb-3">\n                                <span class="d-block mb-1">Address :</span>\n                                <p class="text-dark">15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.</p>\n                            </div>\n                        </div> <!-- end col -->\n                    </div> <!-- end row -->\n                </div>\n                <div class="row">\n                    <div class="col-md-6">\n                        <div class="mb-3">\n                            <h6 class="fs-16 text-gray-5 mb-2">Invoice To :</h6>\n                            <div>\n                                <p class="mb-0 text-dark">Walter Roberson</p>\n                                <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, Florida, 32405, USA.</p>\n                                <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                                <p class="mb-0 text-dark">+45 5421 4523</p>\n                            </div>\n                        </div>\n                    </div> <!-- end col -->\n                    <div class="col-md-6">\n                        <div class="mb-3">\n                            <h6 class="fs-16 text-gray-5 mb-2">Pay To :</h6>\n                            <div>\n                                <p class="mb-0 text-dark">Lowell H. Dominguez</p>\n                                <p class="mb-0 text-dark">84 Spilman Street, London <br> United King</p>\n                                <p class="mb-0 text-dark">domlowell&#64;gmail.com</p>\n                                <p class="mb-0 text-dark">+45 5421 2154</p>\n                            </div>\n                        </div>\n                    </div> <!-- end col -->\n                </div> <!-- end row -->\n                <div class="table-responsive mb-3">\n                    <table class="table table-nowrap table-bordered">\n                        <thead class="thead-light">\n                            <tr>\n                                <th>#</th>\n                                <th>Item</th>\n                                <th>Tax Value</th>\n                                <th>Qty</th>\n                                <th>Price</th>\n                                <th class="text-end">Total</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class="text-dark">1</td>\n                                <td class="text-dark">Website Design</td>\n                                <td class="text-dark">Four plus web pages design and two rivision</td>\n                                <td class="text-dark">1</td>\n                                <td class="text-dark">$350</td>\n                                <td class="text-dark text-end">$350</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">2</td>\n                                <td class="text-dark">Web Development</td>\n                                <td class="text-dark">Dynamic frontend design</td>\n                                <td class="text-dark">1</td>\n                                <td class="text-dark">$600</td>\n                                <td class="text-dark text-end">$600</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">3</td>\n                                <td class="text-dark">App Development</td>\n                                <td class="text-dark">Android and Ios App design</td>\n                                <td class="text-dark">2</td>\n                                <td class="text-dark">$200</td>\n                                <td class="text-dark text-end">$400</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">4</td>\n                                <td class="text-dark">Digital Marketing</td>\n                                <td class="text-dark">Facebook and instagram marketing</td>\n                                <td class="text-dark">3</td>\n                                <td class="text-dark">$100</td>\n                                <td class="text-dark text-end">$300</td>\n                            </tr>\n                            <tr>\n                                <td colspan="3" class="border-end-0">\n                                    <div>\n                                        <span>Important Note:  </span>\n                                        <p class="text-dark">Delivery dates are not guaranteed and Seller has <br>\n                                            no liability for damages that may be incurred <br>\n                                            due to any delay.\n                                        </p>\n                                    </div>\n                                </td>\n                                <td colspan="2" class="text-dark border-0 pe-0">\n                                    <div>\n                                        <h6 class="fs-14 fw-medium mb-2 pb-2 border-bottom pb-2">Taxable Amount</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 border-bottom pb-2">Discount 0%</h6>\n                                        <h6 class="fs-14 fw-medium mb-0">IGST 18.0%</h6>\n                                    </div>\n                                </td>\n                                <td class="text-dark text-end fw-medium border-start-0 ps-0">\n                                    <div>\n                                        <h6 class="fs-14 fw-medium mb-2 border-bottom pb-2">$1650.00</h6>\n                                        <h6 class="fs-14 fw-medium mb-2 border-bottom pb-2">+ $0.00</h6>\n                                        <h6 class="fs-14 fw-medium mb-0">$165.00</h6>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td colspan="3" class="text-dark border-end-0">Total Items / Qty : 4 / 4.00</td>\n                                <td colspan="2" class="text-dark fw-medium border-end-0 border-start-0"><h6>Total</h6></td>\n                                <td class="text-dark text-end fw-medium border-start-0"><h6>$1,815.00</h6></td>\n                            </tr>\n                            <tr>\n                                <td colspan="6">Total amount ( in words): One Thousand Eight Hundred Fifteen Dollars Only.</td>\n                            </tr>\n                        </tbody>\n                    </table>  <!-- end table -->\n                </div>\n                <div class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3">\n                    <div class="mb-3">\n                        <h6 class="mb-2">Payment Info :</h6>\n                        <div>\n                            <p class="mb-1">Debit Card : <span class="text-dark">465 *************645</span></p>\n                            <p class="mb-1">Amount : <span class="text-dark">$1,815</span></p>\n                        </div>\n                    </div>\n                    <div class="text-center mb-3">\n                        <p class="mb-1">For Dreamstechnologies</p>\n                        <span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n                    </div>\n                </div>\n                <div class="border-bottom mb-3 pb-3">\n                    <h6 class="mb-2">Terms & Conditions : </h6>\n                    <p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n                    <p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                </div>\n                <div class="border-bottom pb-3 text-center">\n                    <p>Thanks for your Business</p>\n                </div>\n            </div>\n        </div> <!-- end col -->\n    </div>\n    <!-- end row -->\n\n</div>\n';
  }
});

// angular:jit:style:src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.scss
var general_invoice_4_component_default2;
var init_general_invoice_4_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.scss"() {
    general_invoice_4_component_default2 = "/* src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.scss */\n/*# sourceMappingURL=general-invoice-4.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.ts
var GeneralInvoice4Component;
var init_general_invoice_4_component3 = __esm({
  "src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_general_invoice_4_component();
    init_general_invoice_4_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    GeneralInvoice4Component = class GeneralInvoice4Component2 {
      routes = routes;
    };
    GeneralInvoice4Component = __decorate([
      Component({
        selector: "app-general-invoice-4",
        imports: [CommonModule, RouterLink],
        template: general_invoice_4_component_default,
        styles: [general_invoice_4_component_default2]
      })
    ], GeneralInvoice4Component);
  }
});

// src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.spec.ts
var require_general_invoice_4_component_spec = __commonJS({
  "src/app/features/invoice-modals/general-invoice-4/general-invoice-4.component.spec.ts"(exports) {
    init_testing();
    init_general_invoice_4_component3();
    describe("GeneralInvoice4Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [GeneralInvoice4Component]
        }).compileComponents();
        fixture = TestBed.createComponent(GeneralInvoice4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_general_invoice_4_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-general-invoice-4-general-invoice-4.component.spec.js.map
