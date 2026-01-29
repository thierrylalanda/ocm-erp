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
import "./chunk-HQHIWYWO.js";
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

// angular:jit:template:src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.html
var invoice_details_component_default;
var init_invoice_details_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.html"() {
    invoice_details_component_default = '<div class="row">\n    <div class="col-md-10 mx-auto">\n        <div>\n            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">\n                <h6><a [routerLink]="routes.invoiceList"><i class="isax isax-arrow-left me-2"></i>Invoice (Admin)</a></h6>\n                <div class="d-flex align-items-center flex-wrap row-gap-3">\n                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-document-like me-1"></i>Download PDF</a>\n                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-message-notif me-1"></i>Send Email</a>\n                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-printer me-1"></i>Print</a>\n                    <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                        <i class="isax isax-eye me-1"></i>View Details\n                    </a>\n                </div>\n            </div>\n            <div class="card">\n                <div class="card-body">\n                    <div class="bg-light p-4 rounded position-relative mb-3">\n                        <div class="position-absolute top-0 end-0 z-0">\n                            <img src="assets/img/bg/card-bg.png" alt="img">\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2 position-relative z-1">\n                            <div class="mb-3">\n                                <h4 class="mb-1">Invoice</h4>\n                                <div class="d-flex align-items-center flex-wrap row-gap-3">\n                                    <div class="me-4">\n                                        <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>\n                                        <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>\n                                    </div>\n                                    <span><img src="assets/img/icons/not-paid.png" alt="img" width="48" height="48"></span>\n                                </div>\n                            </div>\n                            <div class="mb-3">\n                                <img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">\n												<img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">\n                            </div>\n                        </div>\n                        <div class="row gy-3 position-relative z-1">\n                            <div class="col-lg-4">\n                                <div>\n                                    <h6 class="mb-2 fs-16 fw-semibold">Invoice Details</h6>\n                                    <div>\n                                        <p class="mb-1">Invoice Number : <span class="text-dark">INV215654</span></p>\n                                        <p class="mb-1">Issued On : <span class="text-dark">25 Jan 2025</span></p>\n                                        <p class="mb-1">Due Date :  <span class="text-dark">31 Jan 2025</span></p>\n                                        <p class="mb-1">Recurring Invoice  :  <span class="text-dark">Monthly</span></p>\n                                        <span class="badge bg-danger badge-sm">Due in 8 days</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-4">\n                                <div>\n                                    <h6 class="mb-2 fs-16 fw-semibold">Billing From</h6>\n                                    <div>\n                                        <h6 class="fs-14 fw-semibold mb-1">Kanakku Invoice Management</h6>\n                                        <p class="mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>\n                                        <p class="mb-1">Phone : +1 54664 75945</p>\n                                        <p class="mb-1">Email : info&#64;example.com</p>\n                                        <p class="mb-0">GST : 243E45767889</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-4">\n                                <div>\n                                    <h6 class="mb-2 fs-16 fw-semibold">Billing To</h6>\n                                    <div class="bg-white rounded p-3">\n                                        <div class="d-flex align-items-center mb-1">\n                                            <img src="assets/img/icons/billing-to-image.svg" alt="img" class="avatar avatar-lg me-2">\n                                            <div>\n                                                <h6 class="fs-14 fw-semibold">Timesquare Tech</h6>\n                                            </div>\n                                        </div>\n                                        <p class="mb-1">299 Star Trek Drive, Florida, 3240, USA</p>\n                                        <p class="mb-1">Phone : +1 54664 75945</p>\n                                        <p class="mb-1">Email : info&#64;example.com</p>\n                                        <p class="mb-0">GST : 243E45767889</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <h6 class="mb-3">Product / Service Items</h6>\n                        <div class="table-responsive rounded border-bottom-0 border table-nowrap">\n                            <table class="table m-0">\n                                <thead class="table-dark">\n                                    <tr>\n                                        <th>#</th>\n                                        <th>Product/Service</th>\n                                        <th>Quantity</th>\n                                        <th>Unit</th>\n                                        <th>Rate</th>\n                                        <th>Discount</th>\n                                        <th>Tax (%)</th>\n                                        <th>Amount</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>1</td>\n                                        <td class="text-dark">T-Shirt</td>\n                                        <td>2</td>\n                                        <td>Pcs</td>\n                                        <td>$200.00</td>\n                                        <td>10%</td>\n                                        <td>$36.00</td>\n                                        <td>$396.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2</td>\n                                        <td class="text-dark">Office Chair</td>\n                                        <td>1</td>\n                                        <td>Pcs</td>\n                                        <td>$350.00</td>\n                                        <td>5%</td>\n                                        <td>$33.25</td>\n                                        <td>$365.75</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3</td>\n                                        <td class="text-dark">LED Monitor</td>\n                                        <td>1</td>\n                                        <td>Pcs</td>\n                                        <td>$399.00</td>\n                                        <td>2%</td>\n                                        <td>$39.10</td>\n                                        <td>$398.90</td>\n                                    </tr>\n                                    <tr>\n                                        <td>4</td>\n                                        <td class="text-dark">Smartphone</td>\n                                        <td>4</td>\n                                        <td>Pcs</td>\n                                        <td>$100.00</td>\n                                        <td>10%</td>\n                                        <td>$36.00</td>\n                                        <td>$396.00</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class="border-bottom mb-3">\n                        <div class="row">\n                            <div class="col-lg-6">\n                                <div class="d-flex align-items-center p-4 mb-3">\n                                    <div class="me-3">\n                                        <p class="mb-2">Scan to the pay</p>\n                                        <span><img src="assets/img/icons/qr.png" alt="QR"></span>\n                                    </div>\n                                    <div>\n                                        <h6 class="mb-2">Bank Details</h6>\n                                        <div>\n                                            <p class="mb-1">Bank Name :  <span class="text-dark">ABC Bank</span></p>\n                                            <p class="mb-1">Account Number :  <span class="text-dark">782459739212</span></p>\n                                            <p class="mb-1">IFSC Code :  <span class="text-dark">ABC0001345</span></p>\n                                            <p class="mb-0">Payment Reference :  <span class="text-dark">INV-20250220-001</span></p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-6">\n                                <div class="mb-3 p-4">\n                                    <div class="d-flex align-items-center justify-content-between mb-3">\n                                        <h6 class="fs-14 fw-semibold">Amount</h6>\n                                        <h6 class="fs-14 fw-semibold">$1,793.12</h6>\n                                    </div>\n                                    <div class="d-flex align-items-center justify-content-between mb-3">\n                                        <h6 class="fs-14 fw-semibold">CGST (9%)</h6>\n                                        <h6 class="fs-14 fw-semibold">$18</h6>\n                                    </div>\n                                    <div class="d-flex align-items-center justify-content-between mb-3">\n                                        <h6 class="fs-14 fw-semibold">SGST (9%)</h6>\n                                        <h6 class="fs-14 fw-semibold">$18</h6>\n                                    </div>\n                                    <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n                                        <h6 class="fs-14 fw-semibold">Discount</h6>\n                                        <h6 class="fs-14 fw-semibold text-danger">$18</h6>\n                                    </div>\n                                    <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n                                        <h6>Total (USD)</h6>\n                                        <h6>$1,972.43</h6>\n                                    </div>\n                                    <div>\n                                        <h6 class="fs-14 fw-semibold mb-1">Total In Words</h6>\n                                        <p>Five Hundred &amp; Ninety Six Dollars</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col-lg-7">\n                            <div class="mb-3">\n                                <div class="mb-3">\n                                    <h6 class="fs-14 fw-semibold mb-1">Terms and Conditions</h6>\n                                    <p>The Payment must be returned in the same condition.</p>\n                                </div>\n                                <div>\n                                    <h6 class="fs-14 fw-semibold mb-1">Notes</h6>\n                                    <p>All charges are final and include applicable taxes, fees, and additional costs</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-lg-5">\n                            <div class="text-lg-end mb-3">\n                                <span><img src="assets/img/icons/sign.png" alt="img"></span>\n                                <h6 class="fs-14 fw-semibold mb-1">Ted M. Davis</h6>\n                                <p>Manager</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="bg-light d-flex align-items-center justify-content-between p-4 rounded card-bg">\n                        <div>\n                            <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>\n                            <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>\n                        </div>\n                        <div>\n                            <img src="assets/img/invoice-logo.svg" alt="img">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.scss
var invoice_details_component_default2;
var init_invoice_details_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.scss"() {
    invoice_details_component_default2 = "/* src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.scss */\n/*# sourceMappingURL=invoice-details.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.ts
var InvoiceDetailsComponent;
var init_invoice_details_component3 = __esm({
  "src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_invoice_details_component();
    init_invoice_details_component2();
    init_core();
    init_core_index();
    init_router();
    InvoiceDetailsComponent = class InvoiceDetailsComponent2 {
      routes = routes;
    };
    InvoiceDetailsComponent = __decorate([
      Component({
        selector: "app-invoice-details",
        template: invoice_details_component_default,
        imports: [RouterLink],
        styles: [invoice_details_component_default2]
      })
    ], InvoiceDetailsComponent);
  }
});

// src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.spec.ts
var require_invoice_details_component_spec = __commonJS({
  "src/app/features/invantory-sales/invoices/invoice-details/invoice-details.component.spec.ts"(exports) {
    init_testing();
    init_invoice_details_component3();
    describe("InvoiceDetailsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [InvoiceDetailsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(InvoiceDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_invoice_details_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-invoices-invoice-details-invoice-details.component.spec.js.map
