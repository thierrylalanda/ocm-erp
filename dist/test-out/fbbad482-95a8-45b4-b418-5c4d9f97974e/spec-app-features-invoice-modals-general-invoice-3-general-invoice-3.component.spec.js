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

// angular:jit:template:src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.html
var general_invoice_3_component_default;
var init_general_invoice_3_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.html"() {
    general_invoice_3_component_default = '<div class="p-4">\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-md-10 mx-auto">\n            <div class="mb-3">\n                <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n            </div>\n            <div>\n                <div class="card rounded-0 shadow-none mb-0 border-bottom-0">\n                    <div class="card-header py-2">\n                        <div class="d-flex align-items-center justify-content-between">\n                            <h5>TAX INVOICE</h5>\n                            <p>Original For Recipient</p>\n                        </div>\n                    </div> <!-- end card-header -->\n                    <div class="card-body p-0">\n                        <div class="row gx-0">\n                            <div class="col-lg-5 d-flex">\n                                <div class="p-3 border-end flex-fill">\n                                    <div class="mb-3"><img src="assets/img/invoice-logo.svg" alt="User Img"></div>\n                                    <h6 class="fs-16 fw-semibold mb-2">Dreamstechnologies</h6>\n                                    <div class="row align-items-center">\n                                        <div class="col-md-6">\n                                            <div class="mb-2">\n                                                <span class="d-block mb-1">GST IN :</span>\n                                                <p class="text-dark">22AABCU9603R1ZX</p>\n                                            </div>\n                                        </div> <!-- end col -->\n                                        <div class="col-md-6">\n                                            <div class="mb-2">\n                                                <span class="d-block mb-1">Mobile :</span>\n                                                <p class="text-dark">+91 98765 43210</p>\n                                            </div>\n                                        </div> <!-- end col -->\n                                        <div class="col-md-12">\n                                            <div>\n                                                <span class="d-block mb-1">Address :</span>\n                                                <p class="text-dark">15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.</p>\n                                            </div>\n                                        </div> <!-- end col -->\n                                    </div> <!-- end row -->\n                                </div>\n                            </div> <!-- end col -->\n                            <div class="col-lg-7 d-flex">\n                                <div class="row flex-fill gx-0 align-items-center">\n                                    <div class="col-md-6">\n                                        <div class="border-end border-bottom p-3">\n                                            <span class="d-block mb-1">Invoice No:</span>\n                                            <p class="text-dark">INV 00001</p>\n                                        </div>\n                                    </div> <!-- end col -->\n                                    <div class="col-md-6">\n                                        <div class="border-bottom p-3">\n                                            <span class="d-block mb-1">Invoice Date:</span>\n                                            <p class="text-dark">05/12/2024</p>\n                                        </div>\n                                    </div> <!-- end col -->\n                                    <div class="col-md-6">\n                                        <div class="border-end p-3">\n                                            <h6 class="fs-16 text-gray-5 mb-2">Invoice To :</h6>\n                                            <div>\n                                                <p class="mb-0 text-dark">Walter Roberson</p>\n                                                <p class="mb-0 text-dark">299 Star Trek Drive, Panama City, <br> Florida, 32405, USA.</p>\n                                                <p class="mb-0 text-dark">walter&#64;gmail.com</p>\n                                                <p class="mb-0 text-dark">+45 5421 4523</p>\n                                            </div>\n                                        </div>\n                                    </div> <!-- end col -->\n                                    <div class="col-md-6">\n                                        <div class="p-3">\n                                            <h6 class="fs-16 text-gray-5 mb-2">Pay To :</h6>\n                                            <div>\n                                                <p class="mb-0 text-dark">Lowell H. Dominguez</p>\n                                                <p class="mb-0 text-dark">84 Spilman Street, London <br> United King</p>\n                                                <p class="mb-0 text-dark">domlowell&#64;gmail.com</p>\n                                                <p class="mb-0 text-dark">+45 5421 2154</p>\n                                            </div>\n                                        </div>\n                                    </div> <!-- end col -->\n                                </div> <!-- end row -->\n                            </div> <!-- end col -->\n                        </div> <!-- end row -->\n                    </div> <!-- end card-body -->\n                </div> <!-- end card -->\n                <div class="table-responsive">\n                    <table class="table table-nowrap table-bordered">\n                        <thead class="thead-light">\n                            <tr>\n                                <th>#</th>\n                                <th>Item</th>\n                                <th>Rate/Item</th>\n                                <th>Qty</th>\n                                <th>Tax Value</th>\n                                <th>Tax Amount</th>\n                                <th class="text-end">Total</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class="text-dark">1</td>\n                                <td>\n                                    <div>\n                                        <p class="text-dark mb-0">Samsung Galaxy M32 Prime Edition...</p>\n                                        <span class="d-block">( Light Blue, 4GB RAM, 64GB )</span>\n                                    </div>\n                                </td>\n                                <td class="text-dark">15,677.15</td>\n                                <td>1</td>\n                                <td class="text-dark">15,677.15</td>\n                                <td>2,821.88(18%)</td>\n                                <td class="text-dark text-end">18,49.00</td>\n                            </tr>\n                            <tr>\n                                <td class="text-dark">2</td>\n                                <td>\n                                    <div>\n                                        <p class="text-dark mb-0">OPPO A74 5G...</p>\n                                        <span class="d-block">( Fluid Black, 6GB RAM, 128GB Storage )</span>\n                                    </div>\n                                </td>\n                                <td class="text-dark">2541.53</td>\n                                <td>2</td>\n                                <td class="text-dark">2541.53</td>\n                                <td>457.48(18%)</td>\n                                <td class="text-dark text-end">2,999.00</td>\n                            </tr>\n                            <tr>\n                                <td colspan="5" class="border-0 border-start text-dark">Total Items / Qty : 2 / 2.00</td>\n                                <td class="text-dark fw-medium border-0 text-center">Total</td>\n                                <td class="text-dark text-end fw-medium border-0 border-end">$21,498.00</td>\n                            </tr>\n                            <tr>\n                                <td colspan="5" class="border-end-0"></td>\n                                <td class="text-dark fw-medium border-end-0 border-start-0 text-center">IGST 18.5%</td>\n                                <td class="text-dark text-end fw-medium border-start-0">$21,498.00</td>\n                            </tr>\n                            <tr>\n                                <td colspan="4" class="border-end-0"></td>\n                                <td colspan="2" class="text-dark fw-medium border-end-0 border-start-0 text-center"><h6>Amount Payable</h6></td>\n                                <td class="text-dark text-end fw-medium border-start-0"><h6>$21,498.00</h6></td>\n                            </tr>\n                        </tbody>\n                    </table>  <!-- end table -->\n                </div>\n                <div class="p-3 border border-top-0 text-center">\n                    <p class="text-dark">Total amount ( in words):   One Thousand Eight Hundred Fifteen Dollars Only.</p>\n                </div>\n                <div class="d-flex justify-content-between align-items-center flex-wrap border border-top-0">\n                    <div class="p-3 flex-fill">\n                        <h6 class="mb-2">Bank Details</h6>\n                        <div class="d-flex align-items-center">\n                            <div class="me-2">\n                                <p class="mb-1">Bank Name :  <span class="text-dark">YES Bank</span></p>\n                                <p class="mb-0">Account # :  <span class="text-dark">6677889944551</span></p>\n                            </div>\n                            <div>\n                                <p class="mb-1">IFSC :  <span class="text-dark">YESBBIN4567</span></p>\n                                <p class="mb-0">BRANCH :  <span class="text-dark">RS Puram</span></p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="text-center border-start p-3">\n                        <p class="mb-1">For Dreamstechnologies</p>\n                        <span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n                    </div>\n                </div>\n                <div class="border border-top-0">\n                    <div class="row align-items-center">\n                        <div class="col-lg-3 col-md-6 d-flex">\n                            <div class="p-3 flex-fill">\n                                <span class="d-block mb-1">Notes:</span>\n                                <p class="text-dark">Thanks for your Business</p>\n                            </div>\n                        </div> <!-- end col -->\n                        <div class="col-lg-9 col-md-6 d-flex">\n                            <div class="p-3 ps-5 flex-fill border-start">\n                                <h6 class="mb-2">Terms & Conditions : </h6>\n                                <p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n                                <p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                            </div>\n                        </div> <!-- end col -->\n                    </div> <!-- end row -->							\n                </div>\n            </div>\n        </div> <!-- end col -->\n    </div> \n    <!-- end row -->\n\n</div>';
  }
});

// angular:jit:style:src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.scss
var general_invoice_3_component_default2;
var init_general_invoice_3_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.scss"() {
    general_invoice_3_component_default2 = "/* src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.scss */\n/*# sourceMappingURL=general-invoice-3.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.ts
var GeneralInvoice3Component;
var init_general_invoice_3_component3 = __esm({
  "src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_general_invoice_3_component();
    init_general_invoice_3_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    GeneralInvoice3Component = class GeneralInvoice3Component2 {
      routes = routes;
    };
    GeneralInvoice3Component = __decorate([
      Component({
        selector: "app-general-invoice-3",
        imports: [CommonModule, RouterLink],
        template: general_invoice_3_component_default,
        styles: [general_invoice_3_component_default2]
      })
    ], GeneralInvoice3Component);
  }
});

// src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.spec.ts
var require_general_invoice_3_component_spec = __commonJS({
  "src/app/features/invoice-modals/general-invoice-3/general-invoice-3.component.spec.ts"(exports) {
    init_testing();
    init_general_invoice_3_component3();
    describe("GeneralInvoice3Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [GeneralInvoice3Component]
        }).compileComponents();
        fixture = TestBed.createComponent(GeneralInvoice3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_general_invoice_3_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-general-invoice-3-general-invoice-3.component.spec.js.map
