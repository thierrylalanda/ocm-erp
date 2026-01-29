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

// angular:jit:template:src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.html
var restaurants_invoice_component_default;
var init_restaurants_invoice_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.html"() {
    restaurants_invoice_component_default = '	<!-- Begin Wrapper -->\n	<div class="main-wrapper">\n        \n        <!-- Start Content -->\n        <div class="content p-4">\n\n            <!-- start row -->\n			<div class="row">\n				<div class="col-md-10 mx-auto">\n                    <div class="mb-3">\n                        <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n                    </div>\n                    <div class="pb-3 mb-3 border-bottom border-3 border-primary">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-3 rounded">\n                            <div>\n                                <img src="assets/img/invoice-logo.svg" class="mb-2" alt="User Img">\n                                <p class="mb-1">Date : <span class="text-dark">05/12/2024</span></p>\n                                <div class="inv-details">\n                                    <div class="inv-date-rest">\n                                        <p class="text-start text-white">Invoice No: <span>INV 000500</span></p>                                \n                                    </div>\n                                    <div class="triangle-right"></div>                            \n                                </div>\n                            </div>\n                            <div class="text-end">\n                                <p class="mb-1">Original For Recipient</p>\n                                <h6 class="text-primary mb-2">TAX INVOICE</h6>\n                                <div>\n                                    <h6 class="mb-1">Dreamguys Restaurent</h6>\n                                    <div> \n                                        <p class="mb-1">Address : <span>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.</span></p>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Customer Info :</p>\n                            <h6 class="mb-1 fs-16">John Williams</h6>\n                        </div>                \n                    </div>\n                    \n                    <!-- start row -->\n                    <div class="row mb-3">\n                        <div class="col-md-12">\n                            <table class="table">\n                                <thead class="thead border-top border-start-0 border-end-0 border-bottom border-3 border-dark p-2">\n                                    <tr>\n                                        <th>#</th>\n                                        <th>Item</th>\n                                        <th>Rate/Item</th>\n                                        <th>Qty</th>\n                                        <th>Total</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr class="border-dark">\n                                        <td>1</td>\n                                        <td>\n                                            <div class="d-flex flex-column">\n                                                <span class="text-dark mb-1">Finest Ramen</span>\n                                                <span>22 July 2024 at 2.30pm</span>\n                                            </div>\n                                        </td>\n                                        <td><span class="text-dark">$350</span></td>\n                                        <td><span class="text-dark">1</span></td>\n                                        <td><span class="text-dark">$350</span></td>\n                                    </tr>\n                                    <tr class="border-dark">\n                                        <td>2</td>\n                                        <td>\n                                            <div class="d-flex flex-column">\n                                                <span class="text-dark mb-1">Sushi tray</span>\n                                                <span>22 July 2024 at 2.30pm</span>\n                                            </div>\n                                        </td>\n                                        <td><span class="text-dark">$600</span></td>\n                                        <td><span class="text-dark">1</span></td>\n                                        <td><span class="text-dark">$600</span></td>\n                                    </tr>\n                                    <tr class="border-dark">\n                                        <td>3</td>\n                                        <td>\n                                            <div class="d-flex flex-column">\n                                                <span class="text-dark mb-1">Extra Condiments</span>\n                                                <span>22 July 2024 at 2.30pm</span>\n                                            </div>\n                                        </td>\n                                        <td><span class="text-dark">$200</span></td>\n                                        <td><span class="text-dark">2</span></td>\n                                        <td><span class="text-dark">$400</span></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row mb-2 ">\n                        <div class="col-md-8">\n                            \n                        </div><!-- end col -->\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between ">\n                                <div class="d-flex flex-column">\n                                    <span class="text-dark text-end fw-semibold mb-1">Taxable Amount</span>\n                                    <span class="text-dark text-end fw-semibold">IGST 18.0%</span>\n                                </div>\n                                <div class="d-flex flex-column text-end">\n                                    <span class="text-dark fw-semibold mb-1">$1650.00</span>\n                                    <span class="text-dark fw-semibold">$165.00</span>\n                                </div>\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row border-top border-bottom border-3 border-dark p-3 align-items-center">\n                        <div class="col-md-8">\n                            <span class="text-dark">Total Items / Qty : 3 / 3.00</span>\n                        </div><!-- end col -->\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between">\n                                <div class=" text-end">\n                                    <span class="fw-bold fs-18 text-end text-dark">Total</span>\n                                </div>\n                                <div class="text-end">\n                                    <span class="fw-bold fs-18 text-dark">$1,815.00</span>\n                                </div>\n                            </div>\n                        </div><!-- end col -->               \n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row py-3 border-bottom  border-bottom border-3 border-dark mb-3 d-flex align-items-center">\n                        <div class="col-md-12">\n                            <div class="d-flex align-items-center justify-content-end">\n                                <p class="text-gary">Total amount ( in words):<span class="text-dark"> One Thousand Eight Hundred Fifteen Dollars Only.</span></p>\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row d-flex align-items-center flex-wrap border-bottom mb-3">\n                        <div class="col-md-4">\n                            <div class="mb-3">\n                                <h6 class="mb-2">Payment Info:</h6>\n                                <div>\n                                    <p class="mb-1">Debit Card :  <span class="text-dark">465 *************645</span></p>\n                                    <p class="mb-1">Amount :  <span class="text-dark">$1,815</span></p>\n                                </div>\n                            </div>\n                        </div><!-- end col -->\n                        <div class="col-md-8">\n                            <div class="mb-3">\n                                <h6 class="mb-2">Terms & Conditions : </h6>\n                            <p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n                            <p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                            </div>\n                        </div><!-- end col -->                   \n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row border border-start-0 border-end-0 border-dark text-center text-white bg-light p-2">\n                        <div class="col-md-12">\n                            <p class="text-gray">Thanks for your Business</p>\n                        </div><!-- end col -->\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n        </div>\n        <!-- End Content -->\n\n	</div>\n	<!-- End Wrapper -->';
  }
});

// angular:jit:style:src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.scss
var restaurants_invoice_component_default2;
var init_restaurants_invoice_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.scss"() {
    restaurants_invoice_component_default2 = "/* src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.scss */\n/*# sourceMappingURL=restaurants-invoice.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.ts
var RestaurantsInvoiceComponent;
var init_restaurants_invoice_component3 = __esm({
  "src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_restaurants_invoice_component();
    init_restaurants_invoice_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    RestaurantsInvoiceComponent = class RestaurantsInvoiceComponent2 {
      routes = routes;
    };
    RestaurantsInvoiceComponent = __decorate([
      Component({
        selector: "app-restaurants-invoice",
        imports: [CommonModule, RouterLink],
        template: restaurants_invoice_component_default,
        styles: [restaurants_invoice_component_default2]
      })
    ], RestaurantsInvoiceComponent);
  }
});

// src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.spec.ts
var require_restaurants_invoice_component_spec = __commonJS({
  "src/app/features/invoice-modals/restaurants-invoice/restaurants-invoice.component.spec.ts"(exports) {
    init_testing();
    init_restaurants_invoice_component3();
    describe("RestaurantsInvoiceComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [RestaurantsInvoiceComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(RestaurantsInvoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_restaurants_invoice_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-restaurants-invoice-restaurants-invoice.component.spec.js.map
