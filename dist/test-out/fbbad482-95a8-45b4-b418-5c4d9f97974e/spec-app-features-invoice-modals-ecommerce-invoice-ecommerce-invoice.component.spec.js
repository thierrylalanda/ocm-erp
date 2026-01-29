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

// angular:jit:template:src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.html
var ecommerce_invoice_component_default;
var init_ecommerce_invoice_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.html"() {
    ecommerce_invoice_component_default = '<div class="p-4">\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-md-8 mx-auto">\n            <div class="mb-3">\n                <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n            </div>\n            <div>\n                <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 mb-3 pb-3">\n                    <div>\n                        <h5 class="mb-2">TAX INVOICE</h5>\n                        <div>\n                            <h6 class="mb-1">Dreamstechnologies</h6>\n                            <div>\n                                <p class="mb-1">GST IN : <span class="text-dark">22AABCU9603R1ZX</span></p>\n                                <p class="mb-1">Address : <span class="text-dark">15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.</span></p>\n                                <p class="mb-1">Mobile : <span class="text-dark">+91 98765 43210</span></p>\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <div class="mb-1"><img src="assets/img/invoice-logo.svg" alt="User Img"></div>\n                        <p class="mb-1 text-end">Original For Recipient</p>\n                        <p class="mb-1 text-end">Invoice No: <span class="text-dark">INV 00001</span></p>\n                        <p class="mb-1 text-end">Date: <span class="text-dark">05/12/2024</span></p>\n                    </div>\n                </div>\n\n                <!-- start row -->\n                <div class="row">\n                    <div class="col-lg-7">\n\n                        <!-- start row -->\n                        <div class="row">\n                            <div class="col-md-6">\n                                <div class="mb-3">\n                                    <h6 class="fs-16 text-gray mb-2">Customer Details :</h6>\n                                    <div>\n                                        <p class="mb-0 fs-18 text-dark">John Williams</p>\n                                    </div>\n                                </div>\n                            </div><!-- end col -->\n                            <div class="col-md-6">\n                                <div class="mb-3">\n                                    <h6 class="fs-16 text-gray mb-2">Billing Address :</h6>\n                                    <div>\n                                        <p class="mb-0 text-dark">Walter Roberson</p>\n                                        <p class="mb-0 text-dark">299 Star Trek Drive, Panama City\n                                            <br> Florida, 32405,</p>\n                                        <p class="mb-0 text-dark">USA</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div> <!-- end col -->\n                    <div class="col-lg-5">\n                        <div class="mb-3">\n                            <h6 class="fs-16 text-gray mb-2">Shipping Address :</h6>\n                            <div>\n                                <p class="mb-0 text-dark">Walter Roberson</p>\n                                <p class="mb-0 text-dark">299 Star Trek Drive, Panama City\n                                    <br> Florida, 32405,</p>\n                                <p class="mb-0 text-dark">USA</p>\n                            </div>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <div class="table-responsive">\n                    <table class="table table-nowrap table-bordered">\n                        <thead class="thead-primary">\n                            <tr>\n                                <th>#</th>\n                                <th>Item</th>\n                                <th>Rate/Item</th>\n                                <th>Qty</th>\n                                <th>Tax Value</th>\n                                <th>Tax Amount</th>\n                                <th class="text-end">Total</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class="text-dark">1</td>\n                                <td>\n                                    <div>\n                                        <p class="text-dark mb-0">Samsung Galaxy M32 Prime Edition...</p>\n                                        <span class="d-block">( Light Blue, 4GB RAM, 64GB )</span>\n                                    </div>\n                                </td>\n                                <td class="text-dark">15,677.15</td>\n                                <td>1</td>\n                                <td class="text-dark">15,677.15</td>\n                                <td>2,821.88(18%)</td>\n                                <td class="text-dark text-end">18,49.00</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">2</td>\n                                <td>\n                                    <div>\n                                        <p class="text-dark mb-0">OPPO A74 5G...</p>\n                                        <span class="d-block">( Fluid Black, 6GB RAM, 128GB Storage )</span>\n                                    </div>\n                                </td>\n                                <td class="text-dark">2541.53</td>\n                                <td>2</td>\n                                <td class="text-dark">2541.53</td>\n                                <td>457.48(18%)</td>\n                                <td class="text-dark text-end">2,999.00</td>\n                            </tr>\n                            <tr>\n                                <td colspan="5" class="border-0"></td>\n                                <td class="text-dark fw-medium border-0">Taxable Amount</td>\n                                <td class="text-dark text-end fw-medium border-0">$1650.00</td>\n                            </tr>\n                            <tr>\n                                <td colspan="5" class="border-0"></td>\n                                <td class="text-dark fw-medium border-0">IGST 18.0%</td>\n                                <td class="text-dark text-end fw-medium border-0">$165.00</td>\n                            </tr>\n                            <tr>\n                                <td colspan="5" class="text-dark border-0">Total Items / Qty : 2 / 2.00</td>\n                                <td class="text-dark fw-medium border-0">\n                                    <h6>Total</h6></td>\n                                <td class="text-dark text-end fw-medium border-0">\n                                    <h6>$1,815.00</h6></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class="py-3 border-bottom mb-3 d-flex align-items-center justify-content-between">\n                    <p class="text-dark">Total amount ( in words):\n                        <br> One Thousand Eight Hundred Fifteen Dollars Only.</p>\n                    <div class="d-flex align-items-center">\n                        <span class="border-end-0"></span>\n                        <span class="text-dark fw-medium border-end-0 border-start-0 text-center me-2"><h6>Amount Payable</h6></span>\n                        <span class="text-dark text-end fw-medium border-start-0"><h6>$21,498.00</h6></span>\n                    </div>\n                </div>\n                <div class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3">\n                    <div class="mb-3">\n                        <h6 class="mb-2">Bank Details</h6>\n                        <div>\n                            <p class="mb-1">Bank Name : <span class="text-dark">YES Bank</span></p>\n                            <p class="mb-1">Account # : <span class="text-dark">6677889944551</span></p>\n                            <p class="mb-1">IFSC : <span class="text-dark">YESBBIN4567</span></p>\n                            <p class="mb-0">BRANCH : <span class="text-dark">RS Puram</span></p>\n                        </div>\n                    </div>\n                    <div class="text-center mb-3">\n                        <p class="mb-1">For Dreamstechnologies</p>\n                        <span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n                    </div>\n                </div>\n                <div class="border-bottom mb-3 pb-3">\n                    <h6 class="mb-2">Terms & Conditions : </h6>\n                    <p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n                    <p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                </div>\n                <div class="border-bottom text-center pb-3">\n                    <p>Thanks for your Business</p>\n                </div>\n            </div>\n        </div> <!-- end col -->\n    </div>\n    <!-- end row -->\n\n</div>';
  }
});

// angular:jit:style:src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.scss
var ecommerce_invoice_component_default2;
var init_ecommerce_invoice_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.scss"() {
    ecommerce_invoice_component_default2 = "/* src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.scss */\n/*# sourceMappingURL=ecommerce-invoice.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.ts
var EcommerceInvoiceComponent;
var init_ecommerce_invoice_component3 = __esm({
  "src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ecommerce_invoice_component();
    init_ecommerce_invoice_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    EcommerceInvoiceComponent = class EcommerceInvoiceComponent2 {
      routes = routes;
    };
    EcommerceInvoiceComponent = __decorate([
      Component({
        selector: "app-ecommerce-invoice",
        imports: [CommonModule, RouterLink],
        template: ecommerce_invoice_component_default,
        styles: [ecommerce_invoice_component_default2]
      })
    ], EcommerceInvoiceComponent);
  }
});

// src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.spec.ts
var require_ecommerce_invoice_component_spec = __commonJS({
  "src/app/features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component.spec.ts"(exports) {
    init_testing();
    init_ecommerce_invoice_component3();
    describe("EcommerceInvoiceComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [EcommerceInvoiceComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(EcommerceInvoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ecommerce_invoice_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-ecommerce-invoice-ecommerce-invoice.component.spec.js.map
