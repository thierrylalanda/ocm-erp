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

// angular:jit:template:src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.html
var bus_booking_invoice_component_default;
var init_bus_booking_invoice_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.html"() {
    bus_booking_invoice_component_default = '        <!-- Start invoice -->\n        <div class="invoice-wrapper">\n\n            <!-- start row -->\n            <div class="row justify-content-center">\n                <div class="col-lg-10">\n                    <div class="mb-3">\n                        <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n                    </div>\n                    <div class="pb-3 mb-3 border-bottom">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-3 rounded">\n                            <div>\n                                <img src="assets/img/invoice-logo.svg" alt="User Img">\n                            </div>\n                            <div class="text-end">\n                                <h6 class="mb-2">Dreams Bus</h6>\n                                <p>Original For Recipient</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <h6 class="mb-1 fs-16">Dreams Bus Line Pvt Ltd.</h6>\n                            <p>299 Star Trek Drive, Panama City, Florida, 32405, USA</p>\n                        </div>\n                        <div>\n                            <h5 class="mb-0">Tax Invoice</h5>\n                        </div>\n                    </div>\n\n                    <!-- start row -->\n                    <div class="row mb-3 ">\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between bg-light p-2">\n                                <span>Customer ID:</span>\n                                <span class="text-dark fw-medium">#326725</span>\n                            </div>\n                        </div>\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between p-2">\n                                <span>Invoice Date</span>\n                                <span class="text-dark fw-medium">05/01/2023</span>\n                            </div>\n                        </div>\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between p-2">\n                                <span>Invoice No:</span>\n                                <span class="text-dark fw-medium">#00001</span>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row mb-3 ">\n                        <div class="col-md-6">\n                            <div class="d-flex align-items-center justify-content-between bg-light p-3">\n                                <div class="d-flex flex-column">\n                                    <span class="mb-1">Passenger Name</span>\n                                    <span>Seat Number</span>\n                                </div>\n                                <div class="d-flex flex-column text-end">\n                                    <span class="text-dark mb-1">Jennifer Richards</span>\n                                    <span class="text-dark">SBA1, SBA2, A30</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="d-flex align-items-center justify-content-between bg-light p-3">\n                                <div class="d-flex flex-column">\n                                    <span class="mb-1">Journey Date </span>\n                                    <span>Ticket Number</span>\n                                </div>\n                                <div class="d-flex flex-column text-end">\n                                    <span class="text-dark mb-1">05 Feb 2024</span>\n                                    <span class="text-dark">#SM75692</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row mb-3">\n                        <div class="col-md-12">\n                            <table class="table table-nowrap invoice-tables">\n                                <thead class="thead-light">\n                                    <tr>\n                                        <th>#</th>\n                                        <th>Bus Details</th>\n                                        <th>Base Fare</th>\n                                        <th>Qty</th>\n                                        <th class="text-end">Total</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>1</td>\n                                        <td>\n                                            <div class="d-flex flex-column">\n                                                <span class="text-dark mb-1">Dreams Bus Line Pvt Ltd., - Business Seat</span>\n                                                <span>Date: 25 Jan 2024, Sat 8:30AM</span>\n                                            </div>\n                                        </td>\n                                        <td><span class="text-dark">$350</span></td>\n                                        <td><span class="text-dark">1</span></td>\n                                        <td class="text-end"><span class="text-dark">$350</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>2</td>\n                                        <td>\n                                            <div class="d-flex flex-column">\n                                                <span class="text-dark mb-1">Dreams Bus Line Pvt Ltd., - Economy Seat</span>\n                                                <span>Date: 25 Jan 2024, Sat 8:30AM</span>\n                                            </div>\n                                        </td>\n                                        <td><span class="text-dark">$600</span></td>\n                                        <td><span class="text-dark">1</span></td>\n                                        <td class="text-end"><span class="text-dark">$600</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>3</td>\n                                        <td>\n                                            <div class="d-flex flex-column">\n                                                <span class="text-dark mb-1">Bullet Train</span>\n                                                <span>22 July 2024 at 2.30pm - General Seat</span>\n                                            </div>\n                                        </td>\n                                        <td><span class="text-dark">$200</span></td>\n                                        <td><span class="text-dark">2</span></td>\n                                        <td class="text-end"><span class="text-dark">$400</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" class="border-0"></td>\n                                        <td colspan="2" class="text-dark text-end fw-medium border-0">Taxable Amount</td>\n                                        <td class="text-dark text-end fw-medium border-0">$1650.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" class="border-bottom-transparent"></td>\n                                        <td colspan="2" class="text-dark text-end fw-medium border-bottom-transparent">IGST 18.0%</td>\n                                        <td class="text-dark text-end fw-medium border-bottom-transparent">$165.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" class="text-dark border-0 bg-light">Total Items / Qty : 4 / 4.00</td>\n                                        <td colspan="2" class="text-dark bg-light border-0 text-end fw-medium">\n                                            <h6>Total</h6>\n                                        </td>\n                                        <td class="text-dark bg-light text-end border-0 fw-medium">\n                                            <h6>$1,815.00</h6>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" class="border-bottom-transparent">\n                                            <div class="d-flex flex-column">\n                                                <span>Total amount ( in words):</span>\n                                                <span class="text-dark mb-1">One Thousand, Eight Hundred and Fifteen Dollars Only</span>\n                                            </div>\n                                        </td>\n                                        <td colspan="2" class="text-dark text-end border-bottom-transparent fw-medium">\n                                            <h6>Amount Payable</h6>\n                                        </td>\n                                        <td class="text-dark border-bottom-transparent text-end fw-medium">\n                                            <h6>$1,815.00</h6>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end row -->\n\n                    <div class="d-flex align-items-center justify-content-between flex-wrap mb-3 p-3">\n                        <div class="mb-3">\n                            <h6 class="mb-2">Payment Info:</h6>\n                            <div>\n                                <p class="mb-1">Debit Card : <span class="text-dark">465 *************645</span></p>\n                                <p class="mb-1">Amount : <span class="text-dark">$1,815</span></p>\n                            </div>\n                        </div>\n                        <div class="text-center mb-3">\n                            <p class="mb-1">For Dreamguys</p>\n                            <span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n                        </div>\n                    </div>\n                    <div class="border-bottom mb-3 p-3">\n                        <h6 class="mb-2">Terms &amp; Conditions : </h6>\n                        <p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n                        <p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                    </div>\n                    <div class="border-bottom text-center pb-3">\n                        <p>Thanks for your Business</p>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n        <!-- End invoice -->\n';
  }
});

// angular:jit:style:src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.scss
var bus_booking_invoice_component_default2;
var init_bus_booking_invoice_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.scss"() {
    bus_booking_invoice_component_default2 = "/* src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.scss */\n/*# sourceMappingURL=bus-booking-invoice.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.ts
var BusBookingInvoiceComponent;
var init_bus_booking_invoice_component3 = __esm({
  "src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_bus_booking_invoice_component();
    init_bus_booking_invoice_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    BusBookingInvoiceComponent = class BusBookingInvoiceComponent2 {
      routes = routes;
    };
    BusBookingInvoiceComponent = __decorate([
      Component({
        selector: "app-bus-booking-invoice",
        imports: [CommonModule, RouterLink],
        template: bus_booking_invoice_component_default,
        styles: [bus_booking_invoice_component_default2]
      })
    ], BusBookingInvoiceComponent);
  }
});

// src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.spec.ts
var require_bus_booking_invoice_component_spec = __commonJS({
  "src/app/features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component.spec.ts"(exports) {
    init_testing();
    init_bus_booking_invoice_component3();
    describe("BusBookingInvoiceComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [BusBookingInvoiceComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BusBookingInvoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_bus_booking_invoice_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-bus-booking-invoice-bus-booking-invoice.component.spec.js.map
