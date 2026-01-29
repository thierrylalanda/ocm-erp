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

// angular:jit:template:src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.html
var coffee_shop_invoice_component_default;
var init_coffee_shop_invoice_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.html"() {
    coffee_shop_invoice_component_default = '        <!-- Start Content -->\n        <div class="p-4">\n\n            <!-- start row -->\n            <div class="row justify-content-center">\n                <div class="col-md-10">\n                    <div class="mb-3">\n                        <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n                    </div>\n                    <div class="mb-3">\n                        <div class="d-flex align-items-center justify-content-end">\n                            <div class="d-flex align-items-center">\n                                <a href="javascript:void(0);" class="btn btn-outline-white me-2 d-inline-flex align-items-center"><i class="isax isax-document-like me-1"></i>Download PDF</a>\n                                <a href="javascript:void(0);" class="btn btn-outline-white me-2 d-inline-flex align-items-center"><i class="isax isax-message-notif me-1"></i>Send Email</a>\n                                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-printer me-1"></i>Print</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="pb-3 mb-3 border-bottom border-3 border-dark">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap gap-2 p-3 rounded">\n                            <div>\n                                <img src="assets/img/invoice-logo.svg" class="mb-2" alt="User Img">\n                                <p class="mb-1">Date : <span class="text-dark">05/12/2024</span></p>\n                                <div class="inv-details">\n                                    <div class="inv-date-no">\n                                        <p class="text-start text-white fs-14">Invoice No: <span>INV 000500</span></p>\n                                    </div>\n                                    <div class="triangle-right"></div>\n                                </div>\n                            </div>\n                            <div class="text-end">\n                                <p class="mb-1">Original For Recipient</p>\n                                <h6 class="mb-2">TAX INVOICE</h6>\n                                <div>\n                                    <h6 class="mb-1">Dreams Cineplex</h6>\n                                    <div>\n                                        <p class="mb-1">Address : <span class="text-dark">15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.</span></p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Customer Info :</p>\n                            <h6 class="mb-1 fs-16">John Williams</h6>\n                        </div>\n                    </div>\n                    <div class="row mb-3">\n                        <div class="col-md-12">\n                            <div class="table-responsive">\n                                <table class="table">\n                                    <thead class="thead-primary">\n                                        <tr>\n                                            <th>#</th>\n                                            <th>Item</th>\n                                            <th>Rate/Item</th>\n                                            <th>Qty</th>\n                                            <th>Total</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>1</td>\n                                            <td>\n                                                <div class="d-flex flex-column">\n                                                    <span class="text-dark mb-1">Colombia Dark Roast</span>\n                                                    <span>22 July 2024 at 2.30pm</span>\n                                                </div>\n                                            </td>\n                                            <td><span class="text-dark">$350</span></td>\n                                            <td><span class="text-dark">1</span></td>\n                                            <td><span class="text-dark">$350</span></td>\n                                        </tr>\n                                        <tr>\n                                            <td>2</td>\n                                            <td>\n                                                <div class="d-flex flex-column">\n                                                    <span class="text-dark mb-1">Coffee Mug</span>\n                                                    <span>22 July 2024 at 2.30pm</span>\n                                                </div>\n                                            </td>\n                                            <td><span class="text-dark">$600</span></td>\n                                            <td><span class="text-dark">1</span></td>\n                                            <td><span class="text-dark">$600</span></td>\n                                        </tr>\n                                        <tr>\n                                            <td>3</td>\n                                            <td>\n                                                <div class="d-flex flex-column">\n                                                    <span class="text-dark mb-1">Medium Cafe Mocha</span>\n                                                    <span>22 July 2024 at 2.30pm</span>\n                                                </div>\n                                            </td>\n                                            <td><span class="text-dark">$200</span></td>\n                                            <td><span class="text-dark">2</span></td>\n                                            <td><span class="text-dark">$400</span></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- start row -->\n                    <div class="row mb-2 ">\n                        <div class="col-md-8">\n                        </div><!-- end col -->\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between ">\n                                <div class="d-flex flex-column">\n                                    <span class="text-dark text-end fw-semibold mb-1">Taxable Amount</span>\n                                    <span class="text-dark text-end fw-semibold">IGST 18.0%</span>\n                                </div>\n                                <div class="d-flex flex-column text-end">\n                                    <span class="text-dark fw-semibold mb-1">$1650.00</span>\n                                    <span class="text-dark fw-semibold">$165.00</span>\n                                </div>\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row border-top border-bottom border-3 border-dark p-2">\n                        <div class="col-md-8">\n                            <span class="text-dark">Total Items / Qty : 3 / 3.00</span>\n                        </div><!-- end col -->\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between ">\n                                <div class=" text-end">\n                                    <span class="fw-bold fs-18 text-end text-dark">Total</span>\n                                </div>\n                                <div class="text-end">\n                                    <span class="fw-bold fs-18 text-dark">$1,815.00</span>\n                                </div>\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row py-3 border-bottom  border-bottom border-3 border-dark mb-3 d-flex align-items-center">\n                        <div class="col-lg-12">\n                            <div class="d-flex align-items-center justify-content-end">\n                                <p class="text-dark">Total amount ( in words): One Thousand Eight Hundred Fifteen Dollars Only.</p>\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <div class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3">\n                        <div class="mb-3">\n                            <h6 class="mb-2">Payment Info:</h6>\n                            <div>\n                                <p class="mb-1">Debit Card : <span class="text-dark">465 *************645</span></p>\n                                <p class="mb-1">Amount : <span class="text-dark">$1,815</span></p>\n                            </div>\n                        </div>\n                        <div class="mb-3">\n                            <h6 class="mb-2">Terms & Conditions : </h6>\n                            <p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n                            <p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                        </div>\n                    </div>\n                    <div class="border-bottom text-center text-white bg-primary p-2">\n                        <p>Thanks for your Business</p>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n        <!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.scss
var coffee_shop_invoice_component_default2;
var init_coffee_shop_invoice_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.scss"() {
    coffee_shop_invoice_component_default2 = "/* src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.scss */\n/*# sourceMappingURL=coffee-shop-invoice.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.ts
var CoffeeShopInvoiceComponent;
var init_coffee_shop_invoice_component3 = __esm({
  "src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_coffee_shop_invoice_component();
    init_coffee_shop_invoice_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    CoffeeShopInvoiceComponent = class CoffeeShopInvoiceComponent2 {
      routes = routes;
    };
    CoffeeShopInvoiceComponent = __decorate([
      Component({
        selector: "app-coffee-shop-invoice",
        imports: [CommonModule, RouterLink],
        template: coffee_shop_invoice_component_default,
        styles: [coffee_shop_invoice_component_default2]
      })
    ], CoffeeShopInvoiceComponent);
  }
});

// src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.spec.ts
var require_coffee_shop_invoice_component_spec = __commonJS({
  "src/app/features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component.spec.ts"(exports) {
    init_testing();
    init_coffee_shop_invoice_component3();
    describe("CoffeeShopInvoiceComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CoffeeShopInvoiceComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CoffeeShopInvoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_coffee_shop_invoice_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-coffee-shop-invoice-coffee-shop-invoice.component.spec.js.map
