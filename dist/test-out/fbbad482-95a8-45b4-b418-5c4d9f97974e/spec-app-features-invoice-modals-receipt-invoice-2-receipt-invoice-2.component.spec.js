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

// angular:jit:template:src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.html
var receipt_invoice_2_component_default;
var init_receipt_invoice_2_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.html"() {
    receipt_invoice_2_component_default = '<div class="invoice-wrapper receipt-page">\n    <div class="mb-3">\n        <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n    </div>\n    <div class="card m-auto shadow-none">\n        <div class="card-body">\n            <div class="bg-light p-2 text-center mb-2">\n                <img src="assets/img/receipt-logo.svg" alt="User Img">\n            </div>\n            <h6 class="fs-16 fw-semibold text-center mb-2">Dreams Technologies Pvt Ltd.,</h6>\n            <p class=" text-center mb-2">15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.\n                Email: demo&#64;gmail.com</p>\n            <span class="retail-receipt fs-12 text-dark text-center fw-semibold mb-2">RETAIL RECEIPT</span>\n            <div class="mb-2">\n\n                <!-- start row -->\n                <div class="row mb-2 row-gap-3">\n                    <div class="col-sm-6 col-md-6">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <p class=" mb-0">Name:</p>\n                            <p class=" text-dark">John Doe</p>\n                        </div>\n                    </div><!-- end col -->\n                    <div class="col-sm-6 col-md-6">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <p class=" mb-0">Invoice No:</p>\n                            <p class=" text-dark">CS132453</p>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row row-gap-3">\n                    <div class="col-sm-6 col-md-6">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <p class=" mb-0">Customer Id:</p>\n                            <p class=" text-dark">#LL93784</p>\n                        </div>\n                    </div><!-- end col -->\n                    <div class="col-sm-6 col-md-6">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <p class=" mb-0">Date :</p>\n                            <p class=" text-dark">01.07.2024</p>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n                 \n            </div>\n            <div class="receipt-header">\n                <table class="table table-nowrap border-dashed mb-2">\n                    <thead>\n                        <tr class="mb-2">\n                            <th class="fs-10 border-0 pe-0">SL</th>\n                            <th class="fs-10 border-0 ps-0">Item</th>\n                            <th class="fs-10 border-0 pe-0 text-end">Price</th>\n                            <th class="fs-10 border-0 pe-0 text-end">Qty</th>\n                            <th class="fs-10 border-0 pe-0 text-end">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class="fs-10 border-0 p-1 pe-0">1.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Sugarfree</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">3</td>\n                            <td class="fs-10 border-0 p-1 text-end">$150</td>\n                        </tr>\n                        <tr>\n                            <td class="fs-10 border-0 p-1 pe-0">2.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Onion (Loose) (5kg)</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">2</td>\n                            <td class="fs-10 border-0 p-1 text-end">$100</td>\n                        </tr>\n                        <tr>\n                            <td class="fs-10 border-0 p-1 pe-0">3.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Mushrooms - Button 1 pack</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">3</td>\n                            <td class="fs-10 border-0 p-1 text-end">$150</td>\n                        </tr>\n                        <tr>\n                            <td class="fs-10 border-0 p-1 pe-0">4.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Tea 1kg</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">3</td>\n                            <td class="fs-10 border-0 p-1 text-end">$150</td>\n                        </tr>\n                        <tr class="border-dashed">\n                            <td class="fs-10 border-0 p-1 pe-0">5.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Diet Coke Soft Drink 300ml</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">3</td>\n                            <td class="fs-10 border-0 p-1 text-end">$150</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">Sub Total :</td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">$700.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-end">Discount :</td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-end">-$50.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">Service Charge :</td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">0.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-end">Tax(5%) :</td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-end">$5.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">Total Bill :</td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">$655.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">Due :</td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">$0.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-dark text-end fw-semibold">Total Payable :</td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-dark text-end fw-semibold">$655.00</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <p class="text-center mb-2">12332345698234592384</p>\n                <img src="assets/img/barcode.svg" class="img-fluid mb-2" alt="img">\n                <p class="text-center border-dashed pb-2 mb-2">**VAT against this challan is payable through central registration. Thank you for your business!</p>\n                <p class="text-center">Thank You</p>\n            </div>\n        </div><!-- end card body -->\n    </div><!-- end card -->\n</div>';
  }
});

// angular:jit:style:src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.scss
var receipt_invoice_2_component_default2;
var init_receipt_invoice_2_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.scss"() {
    receipt_invoice_2_component_default2 = "/* src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.scss */\n/*# sourceMappingURL=receipt-invoice-2.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.ts
var ReceiptInvoice2Component;
var init_receipt_invoice_2_component3 = __esm({
  "src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_receipt_invoice_2_component();
    init_receipt_invoice_2_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    ReceiptInvoice2Component = class ReceiptInvoice2Component2 {
      routes = routes;
    };
    ReceiptInvoice2Component = __decorate([
      Component({
        selector: "app-receipt-invoice-2",
        imports: [CommonModule, RouterLink],
        template: receipt_invoice_2_component_default,
        styles: [receipt_invoice_2_component_default2]
      })
    ], ReceiptInvoice2Component);
  }
});

// src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.spec.ts
var require_receipt_invoice_2_component_spec = __commonJS({
  "src/app/features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component.spec.ts"(exports) {
    init_testing();
    init_receipt_invoice_2_component3();
    describe("ReceiptInvoice2Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ReceiptInvoice2Component]
        }).compileComponents();
        fixture = TestBed.createComponent(ReceiptInvoice2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_receipt_invoice_2_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-receipt-invoice-2-receipt-invoice-2.component.spec.js.map
