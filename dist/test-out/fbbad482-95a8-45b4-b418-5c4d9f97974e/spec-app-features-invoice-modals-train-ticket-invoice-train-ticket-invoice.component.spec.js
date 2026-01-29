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

// angular:jit:template:src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.html
var train_ticket_invoice_component_default;
var init_train_ticket_invoice_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.html"() {
    train_ticket_invoice_component_default = '<div class="invoice-wrapper">\n    <!-- start row -->\n    <div class="row">\n        <div class="col-lg-10 mx-auto">\n            <div class="mb-3">\n                <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n            </div>\n            <div class="mb-3">\n                <div class="d-flex align-items-center justify-content-between bg-primary flex-wrap p-3 rounded">\n\n                    <div>\n                        <p class="text-white mb-2">Original For Recipient</p>\n                        <h6 class="mb-0 text-white">Tax Invoice</h6>\n\n                    </div>\n                    <div>\n                        <img src="assets/img/logo-white.svg" alt="User Img">\n                    </div>\n                </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <div>\n                    <h6 class="mb-1 fs-16">Dreams Railways</h6>\n                    <p>299 Star Trek Drive, Panama City, Florida, 32405, USA</p>\n                </div>\n                <div class="text-end">\n                    <h6 class="mb-1 fs-18 fw-medium">Info:</h6>\n                    <p class="invoice-info">Seating is on a first come, first served basis unless you have purchased ticket for a Reserved Seating performance. Please arrive early for best seat section.</p>\n                </div>\n\n            </div>\n            <!-- start row -->\n            <div class="row mb-3 ">\n                <div class="col-md-4">\n                    <div class="bg-light">\n                        <div class="d-flex justify-content-center align-items-center p-2">\n                            <span class="me-3">Date:</span>\n                            <span class="text-dark fw-medium">05/12/2024</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-md-4">\n                    <div class="bg-light">\n                        <div class="d-flex justify-content-center align-items-center p-2">\n                            <span class="me-3">Journy Date:</span>\n                            <span class="text-dark fw-medium">05/01/2023</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-md-4">\n                    <div class="bg-light">\n                        <div class="d-flex justify-content-center align-items-center p-2">\n                            <span class="me-3">Invoice No:</span>\n                            <span class="text-dark fw-medium">#00001</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end row -->\n            <!-- start row -->\n            <div class="row mb-3 ">\n                <div class="col-md-4 d-flex">\n                    <div class="d-flex align-items-center  bg-light px-3 py-4 flex-fill">\n                        <ul class="activity-feed bg-light rounded">\n                            <li class="feed-item timeline-item">\n                                <p class="mb-1 text-gray-5 fw-semibold fs-16">From Station</p>\n                            </li>\n                            <li class="feed-item timeline-item">\n                                <div><span class="text-dark fw-semibold">Acton GTR 3:00PM</span></div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-md-4 d-flex">\n                    <div class="d-flex align-items-center bg-light px-3 py-4 flex-fill">\n                        <ul class="activity-feed bg-light rounded">\n                            <li class="feed-item timeline-item">\n                                <p class="mb-1 text-gray-5 fw-semibold fs-16">To Station</p>\n                            </li>\n                            <li class="feed-item timeline-item">\n                                <div><span class="text-dark fw-semibold">Acton GWR 4:30PM</span></div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-md-4 d-flex">\n                    <div class="d-flex align-items-center justify-content-center bg-light px-3 py-4 flex-fill">\n                        <div class="text-center">\n                            <p class="mb-2 text-gray-5 fw-semibold fs-16">Seat No</p>\n                            <p class="mb-0 text-primary fw-semibold fs-16">SBA1, SBA2, A30</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end row -->\n            <!-- start row -->\n            <div class="row mb-3 ">\n                <div class="col-md-4">\n                    <div class="ribbon-tittle">\n                        <div class="ribbon-text">\n                            <span class="text-white">Passenger & Ticket Information</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end row -->\n            <!-- start row -->\n            <div class="row mb-3 ">\n                <div class="col-md-6">\n                    <div class="d-flex align-items-center justify-content-between bg-light p-3">\n                        <div class="d-flex flex-column">\n                            <span class="mb-1">Passenger Name:</span>\n                            <span class="mb-1">Email:</span>\n                            <span class="mb-1">Ticket Numbe:</span>\n                            <span class="mb-1">Adult:</span>\n                            <span>Child:</span>\n                        </div>\n                        <div class="d-flex flex-column text-end">\n                            <span class="text-dark mb-1">Jennifer Richards</span>\n                            <span class="text-dark mb-1">Jenni&#64;gmail.com</span>\n                            <span class="text-dark mb-1">#SM98765</span>\n                            <span class="text-dark mb-1">03</span>\n                            <span class="text-dark">01</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-md-6">\n                    <div class="d-flex align-items-center justify-content-between bg-light p-3">\n                        <div class="d-flex flex-column">\n                            <span class="mb-1">Phone:</span>\n                            <span class="mb-1">Address:</span>\n                            <span class="mb-1">PNR Code : Train</span>\n                            <span class="mb-1">Name:</span>\n                            <span>Issued Date:</span>\n\n                        </div>\n                        <div class="d-flex flex-column text-end">\n                            <span class="text-dark mb-1">+91 79845 61324</span>\n                            <span class="text-dark mb-1">15 Hodges Mews, High Wycombe HP12 3JL United</span>\n                            <span class="text-dark mb-1">Kingdom</span>\n                            <span class="text-dark mb-1">M6DZT</span>\n                            <span class="text-dark">Dreams Railway</span>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <!-- end row -->\n            <h6 class="mb-3 fs-16">Travel Information</h6>\n            <div class="row mb-3">\n                <div class="col-md-12">\n                    <table class="table table-nowrap invoice-tables">\n                        <thead class="thead-light">\n                            <tr>\n                                <th>#</th>\n                                <th>Train Details</th>\n                                <th>Base Fare</th>\n                                <th>Qty</th>\n                                <th class="text-end">Total</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>\n                                    <div class="d-flex flex-column">\n                                        <span class="text-dark mb-1">Dreams Railways., - Business Seat</span>\n                                        <span>Date: 25 Jan 2024, Sat 8:30AM</span>\n                                    </div>\n                                </td>\n                                <td><span class="text-dark">$350</span></td>\n                                <td><span class="text-dark">1</span></td>\n                                <td class="text-end"><span class="text-dark">$350</span></td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>\n                                    <div class="d-flex flex-column">\n                                        <span class="text-dark mb-1">Dreams Railways., - Economy Seat</span>\n                                        <span>Date: 25 Jan 2024, Sat 8:30AM</span>\n                                    </div>\n                                </td>\n                                <td><span class="text-dark">$600</span></td>\n                                <td><span class="text-dark">1</span></td>\n                                <td class="text-end"><span class="text-dark">$600</span></td>\n                            </tr>\n\n                            <tr>\n                                <td colspan="2" class="border-0"></td>\n                                <td colspan="2" class="text-dark text-end fw-medium border-0">Taxable Amount</td>\n                                <td class="text-dark text-end fw-medium border-0">$1650.00</td>\n                            </tr>\n                            <tr>\n                                <td colspan="2" class="border-bottom-transparent"></td>\n                                <td colspan="2" class="text-dark text-end fw-medium border-bottom-transparent">IGST 18.0%</td>\n                                <td class="text-dark text-end fw-medium border-bottom-transparent">$165.00</td>\n                            </tr>\n                            <tr>\n                                <td colspan="2" class="text-dark border-0 bg-light">Total Items / Qty : 4 / 4.00</td>\n                                <td colspan="2" class="text-dark bg-light border-0 text-end fw-medium">\n                                    <h6>Total</h6></td>\n                                <td class="text-dark bg-light text-end border-0 fw-medium">\n                                    <h6>$1,815.00</h6></td>\n                            </tr>\n                            <tr>\n                                <td colspan="2" class="border-bottom-transparent">\n                                    <div class="d-flex flex-column">\n                                        <span>Total amount ( in words):</span>\n                                        <span class="text-dark mb-1">One Thousand, Eight Hundred and Fifteen Dollars Only</span>\n                                    </div>\n                                </td>\n                                <td colspan="2" class="text-dark text-end border-bottom-transparent fw-medium">\n                                    <h6>Amount Payable</h6></td>\n                                <td class="text-dark border-bottom-transparent text-end fw-medium">\n                                    <h6>$1,815.00</h6></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-between flex-wrap mb-3 p-3">\n                <div class="mb-3">\n                    <h6 class="mb-2">Payment Info:</h6>\n                    <div>\n                        <p class="mb-1">Debit Card : <span class="text-dark">465 *************645</span></p>\n                        <p class="mb-1">Amount : <span class="text-dark">$1,815</span></p>\n                    </div>\n                </div>\n\n            </div>\n            <div class="border-bottom mb-3 p-3">\n                <h6 class="mb-2">Terms &amp; Conditions : </h6>\n                <p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n                <p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n            </div>\n            <div class="border-bottom text-center pb-3">\n                <p>Thanks for your Business</p>\n            </div>\n        </div>\n    </div>\n    <!-- end row -->\n</div>';
  }
});

// angular:jit:style:src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.scss
var train_ticket_invoice_component_default2;
var init_train_ticket_invoice_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.scss"() {
    train_ticket_invoice_component_default2 = "/* src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.scss */\n/*# sourceMappingURL=train-ticket-invoice.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.ts
var TrainTicketInvoiceComponent;
var init_train_ticket_invoice_component3 = __esm({
  "src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_train_ticket_invoice_component();
    init_train_ticket_invoice_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    TrainTicketInvoiceComponent = class TrainTicketInvoiceComponent2 {
      routes = routes;
    };
    TrainTicketInvoiceComponent = __decorate([
      Component({
        selector: "app-train-ticket-invoice",
        imports: [CommonModule, RouterLink],
        template: train_ticket_invoice_component_default,
        styles: [train_ticket_invoice_component_default2]
      })
    ], TrainTicketInvoiceComponent);
  }
});

// src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.spec.ts
var require_train_ticket_invoice_component_spec = __commonJS({
  "src/app/features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component.spec.ts"(exports) {
    init_testing();
    init_train_ticket_invoice_component3();
    describe("TrainTicketInvoiceComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [TrainTicketInvoiceComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TrainTicketInvoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_train_ticket_invoice_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-train-ticket-invoice-train-ticket-invoice.component.spec.js.map
