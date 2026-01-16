import {
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import {
  RouterLink
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invoice-modals/flight-booking-invoice/flight-booking-invoice.component.ts
var FlightBookingInvoiceComponent = class _FlightBookingInvoiceComponent {
  routes = routes;
  static \u0275fac = function FlightBookingInvoiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlightBookingInvoiceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlightBookingInvoiceComponent, selectors: [["app-flight-booking-invoice"]], decls: 230, vars: 1, consts: [[1, "row"], [1, "col-lg-10", "mx-auto"], [1, "invoice-wrapper"], [1, "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-1"], [1, "pb-3", "mb-3", "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between", "bg-light", "flex-wrap", "p-3", "rounded"], [1, "mb-2"], [1, "text-end"], ["src", "assets/img/invoice-logo.svg", "alt", "User Img"], [1, "text-primary", "text-center", "mb-3"], [1, "row", "mb-3"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "justify-content-between", "bg-light", "p-2"], [1, "text-dark", "fw-medium"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-8", "text-gray-5", "fs-16"], [1, "text-dark", "mb-0"], [1, "text-dark"], [1, "col-md-6"], [1, "bg-light", "p-3"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "flex-column"], [1, "mb-1"], [1, "d-flex", "flex-column", "text-end"], [1, "text-dark", "mb-1"], [1, "col-md-12"], [1, "table", "table-nowrap", "invoice-tables"], [1, "thead-primary"], ["colspan", "3", 1, "border-0"], ["colspan", "2", 1, "text-dark", "text-end", "fw-medium", "border-0"], [1, "text-dark", "text-end", "fw-medium", "border-0"], ["colspan", "3", 1, "border-bottom-transparent"], ["colspan", "2", 1, "text-dark", "text-end", "fw-medium", "border-bottom-transparent"], [1, "text-dark", "text-end", "fw-medium", "border-bottom-transparent"], ["colspan", "3", 1, "text-dark", "border-0", "bg-light"], ["colspan", "2", 1, "text-dark", "bg-light", "border-0", "text-end", "fw-medium"], [1, "fs-16"], [1, "text-dark", "bg-light", "text-end", "border-0", "fw-medium"], ["colspan", "2", 1, "text-dark", "text-end", "border-bottom-transparent", "fw-medium"], [1, "text-dark", "border-bottom-transparent", "text-end", "fw-medium"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-3", "p-3"], [1, "text-center", "mb-3"], ["src", "assets/img/icons/sign-01.png", "alt", "User Img"], [1, "border-bottom", "mb-3", "p-3"], [1, "border-bottom", "text-center", "pb-3"]], template: function FlightBookingInvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6")(5, "a", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275text(7, "Back");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div")(11, "h6", 8);
      \u0275\u0275text(12, "Dreams Flights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Original For Recipient");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275element(16, "img", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "h5", 11);
      \u0275\u0275text(18, "Tax Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "span");
      \u0275\u0275text(23, "Customer ID:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275text(25, "#326725");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 13)(27, "div", 14)(28, "span");
      \u0275\u0275text(29, "Journey Date:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 15);
      \u0275\u0275text(31, "05/01/2023");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 13)(33, "div", 14)(34, "span");
      \u0275\u0275text(35, "Invoice No:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 15);
      \u0275\u0275text(37, "#00001");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 16)(39, "div")(40, "h6", 17);
      \u0275\u0275text(41, "Bill To :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 18);
      \u0275\u0275text(43, "Walter Roberson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 18);
      \u0275\u0275text(45, "299 Star Trek Drive, Panama City, Florida, 32405, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 18);
      \u0275\u0275text(47, " walter@gmail.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 19);
      \u0275\u0275text(49, "+45 5421 4523");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div")(51, "h6", 17);
      \u0275\u0275text(52, "Pay To :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 18);
      \u0275\u0275text(54, "Lowell H. Dominguez");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 18);
      \u0275\u0275text(56, "84 Spilman Street, London United King");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 18);
      \u0275\u0275text(58, "domlowell@gmail.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 18);
      \u0275\u0275text(60, " +45 5421 2154");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 12)(62, "div", 20)(63, "div", 21)(64, "h6", 3);
      \u0275\u0275text(65, "Passenger & Ticket Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 22)(67, "div", 23)(68, "span", 24);
      \u0275\u0275text(69, "Passenger Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 24);
      \u0275\u0275text(71, "Ticket Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "span", 24);
      \u0275\u0275text(73, "Issued By Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75, "Booking Reference");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 25)(77, "span", 26);
      \u0275\u0275text(78, "Jennifer Richards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span", 26);
      \u0275\u0275text(80, "#SM75692");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 26);
      \u0275\u0275text(82, "05 Feb 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 19);
      \u0275\u0275text(84, "HC76SW");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 20)(86, "div", 21)(87, "h6", 3);
      \u0275\u0275text(88, "Payment Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 22)(90, "div", 23)(91, "span", 24);
      \u0275\u0275text(92, "Payment Gatway");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span", 24);
      \u0275\u0275text(94, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span", 24);
      \u0275\u0275text(96, "Transaction ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98, "Total Amount");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 25)(100, "span", 26);
      \u0275\u0275text(101, "American Express");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "span", 26);
      \u0275\u0275text(103, "25 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "span", 26);
      \u0275\u0275text(105, "SI2534687");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span", 19);
      \u0275\u0275text(107, "$2440");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(108, "div", 12)(109, "div", 27)(110, "table", 28)(111, "thead", 29)(112, "tr")(113, "th");
      \u0275\u0275text(114, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th");
      \u0275\u0275text(116, "Flight Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th");
      \u0275\u0275text(118, "Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th");
      \u0275\u0275text(120, "Base Fare");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th");
      \u0275\u0275text(122, "Tax Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 9);
      \u0275\u0275text(124, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "tbody")(126, "tr")(127, "td");
      \u0275\u0275text(128, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "td")(130, "div", 23)(131, "span", 26);
      \u0275\u0275text(132, "Air canada 1S-2539 Toronto- New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "Date: 25 Jan 2024, Sat 8:30AM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "td")(136, "span", 19);
      \u0275\u0275text(137, "Business Seat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "td")(139, "span", 19);
      \u0275\u0275text(140, "$200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "td")(142, "span", 19);
      \u0275\u0275text(143, "$350");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "td", 9)(145, "span", 19);
      \u0275\u0275text(146, "$350");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "tr")(148, "td");
      \u0275\u0275text(149, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "td")(151, "div", 23)(152, "span", 26);
      \u0275\u0275text(153, "Air canada 1S-2539 Toronto- New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "span");
      \u0275\u0275text(155, "Date: 25 Jan 2024, Sat 8:30AM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(156, "td")(157, "span", 19);
      \u0275\u0275text(158, "Economy Seat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "td")(160, "span", 19);
      \u0275\u0275text(161, "$500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "td")(163, "span", 19);
      \u0275\u0275text(164, "$600");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "td", 9)(166, "span", 19);
      \u0275\u0275text(167, "$350");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "tr");
      \u0275\u0275element(169, "td", 30);
      \u0275\u0275elementStart(170, "td", 31);
      \u0275\u0275text(171, "Taxable Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "td", 32);
      \u0275\u0275text(173, "$1650.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "tr");
      \u0275\u0275element(175, "td", 33);
      \u0275\u0275elementStart(176, "td", 34);
      \u0275\u0275text(177, "IGST 18.0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "td", 35);
      \u0275\u0275text(179, "$165.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "tr")(181, "td", 36);
      \u0275\u0275text(182, "Total Items / Qty : 2 / 2.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "td", 37)(184, "h6", 38);
      \u0275\u0275text(185, "Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "td", 39)(187, "h6", 38);
      \u0275\u0275text(188, "$944.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "tr")(190, "td", 33)(191, "div", 23)(192, "span");
      \u0275\u0275text(193, "Total amount ( in words):");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "span", 26);
      \u0275\u0275text(195, "Nine Hundred and Fourty Four Dollars Only.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(196, "td", 40)(197, "h6");
      \u0275\u0275text(198, "Amount Payable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "td", 41)(200, "h6");
      \u0275\u0275text(201, "$944.00");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(202, "div", 42)(203, "div", 3)(204, "h6", 8);
      \u0275\u0275text(205, "Payment Info:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div")(207, "p", 24);
      \u0275\u0275text(208, "Debit Card : ");
      \u0275\u0275elementStart(209, "span", 19);
      \u0275\u0275text(210, "465 *************645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "p", 24);
      \u0275\u0275text(212, "Amount : ");
      \u0275\u0275elementStart(213, "span", 19);
      \u0275\u0275text(214, "$1,815");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(215, "div", 43)(216, "p", 24);
      \u0275\u0275text(217, "For Dreamguys");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "span");
      \u0275\u0275element(219, "img", 44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(220, "div", 45)(221, "h6", 8);
      \u0275\u0275text(222, "Terms & Conditions : ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "p", 24);
      \u0275\u0275text(224, "1. Goods Once sold cannot be taken back or exchanged.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "p");
      \u0275\u0275text(226, "2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 46)(228, "p");
      \u0275\u0275text(229, "Thanks for your Business");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.invoiceTemplate);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlightBookingInvoiceComponent, [{
    type: Component,
    args: [{ selector: "app-flight-booking-invoice", imports: [CommonModule, RouterLink], template: '        <!-- start row -->\n		<div class="row">\n            <div class="col-lg-10 mx-auto">\n                <div class="invoice-wrapper">\n                    <div class="mb-3">\n                        <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n                    </div>\n                    <div class="pb-3 mb-3 border-bottom">\n                        <div class="d-flex align-items-center justify-content-between bg-light flex-wrap p-3 rounded">\n                            <div>\n                                <h6 class="mb-2">Dreams Flights</h6>\n                                <p>Original For Recipient</p>\n                               \n                            </div>\n                            <div class="text-end">\n                                <img src="assets/img/invoice-logo.svg" alt="User Img">\n                            </div>\n                        </div>\n                    </div>\n                    <h5 class="text-primary text-center mb-3">Tax Invoice</h5>\n\n                    <!-- start row -->\n                    <div class="row mb-3 ">\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between bg-light p-2">\n                                <span>Customer ID:</span>\n                                <span class="text-dark fw-medium">#326725</span>\n                            </div>\n                        </div><!-- end col -->\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between bg-light p-2">\n                                <span>Journey Date:</span>\n                                <span class="text-dark fw-medium">05/01/2023</span>\n                            </div>\n                        </div><!-- end col -->\n                        <div class="col-md-4">\n                            <div class="d-flex align-items-center justify-content-between bg-light p-2">\n                                <span>Invoice No:</span>\n                                <span class="text-dark fw-medium">#00001</span>\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <h6 class="mb-8 text-gray-5 fs-16">Bill To :</h6>\n                            <p class="text-dark mb-0">Walter Roberson</p>\n                            <p class="text-dark mb-0">299 Star Trek Drive, Panama City, Florida, 32405, USA</p>\n                            <p class="text-dark mb-0"> walter&#64;gmail.com</p>\n                            <p class="text-dark">+45 5421 4523</p>\n                        </div>\n                        <div>\n                            <h6 class="mb-8 text-gray-5 fs-16">Pay To :</h6>\n                            <p class="text-dark mb-0">Lowell H. Dominguez</p>\n                            <p class="text-dark mb-0">84 Spilman Street, London United King</p>\n                            <p class="text-dark mb-0">domlowell&#64;gmail.com</p>\n                            <p class="text-dark mb-0"> +45 5421 2154</p>\n                        </div>\n                    </div>\n                    \n                    <!-- start row -->\n                    <div class="row mb-3 ">\n                        <div class="col-md-6">\n                            <div class="bg-light p-3">\n                                <h6 class="mb-3">Passenger & Ticket Information</h6>\n                                <div class="d-flex align-items-center justify-content-between ">\n                                    <div class="d-flex flex-column">\n                                        <span class="mb-1">Passenger Name</span>\n                                        <span class="mb-1">Ticket Number</span>\n                                        <span class="mb-1">Issued By Date</span>\n                                        <span>Booking Reference</span>\n                                    </div>\n                                    <div class="d-flex flex-column text-end">\n                                        <span class="text-dark mb-1">Jennifer Richards</span>\n                                        <span class="text-dark mb-1">#SM75692</span>\n                                        <span class="text-dark mb-1">05 Feb 2024</span>\n                                        <span class="text-dark">HC76SW</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div><!-- end col -->\n                        <div class="col-md-6">\n                            <div class="bg-light p-3">\n                                <h6 class="mb-3">Payment Information</h6>\n                                <div class="d-flex align-items-center justify-content-between ">\n                                    <div class="d-flex flex-column">\n                                        <span class="mb-1">Payment Gatway</span>\n                                        <span class="mb-1">Date</span>\n                                        <span class="mb-1">Transaction ID</span>\n                                        <span>Total Amount</span>\n                                    </div>\n                                    <div class="d-flex flex-column text-end">\n                                        <span class="text-dark mb-1">American Express</span>\n                                        <span class="text-dark mb-1">25 Jan 2024</span>\n                                        <span class="text-dark mb-1">SI2534687</span>\n                                        <span class="text-dark">$2440</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <!-- start row -->\n                    <div class="row mb-3">\n                        <div class="col-md-12">\n                            <table class="table table-nowrap invoice-tables">\n                                <thead class="thead-primary">\n                                    <tr>\n                                        <th>#</th>\n                                        <th>Flight Details</th>\n                                        <th>Class</th>\n                                        <th>Base Fare</th>\n                                        <th>Tax Amount</th>\n                                        <th class="text-end">Total</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>1</td>\n                                        <td>\n                                            <div class="d-flex flex-column">\n                                                <span class="text-dark mb-1">Air canada 1S-2539 Toronto- New York</span>\n                                                <span>Date: 25 Jan 2024, Sat 8:30AM</span>\n                                            </div>\n                                        </td>\n                                        <td><span class="text-dark">Business Seat</span></td>\n                                        <td><span class="text-dark">$200</span></td>\n                                        <td><span class="text-dark">$350</span></td>\n                                        <td class="text-end"><span class="text-dark">$350</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>2</td>\n                                        <td>\n                                            <div class="d-flex flex-column">\n                                                <span class="text-dark mb-1">Air canada 1S-2539 Toronto- New York</span>\n                                                <span>Date: 25 Jan 2024, Sat 8:30AM</span>\n                                            </div>\n                                        </td>\n                                        <td><span class="text-dark">Economy Seat</span></td>\n                                        <td><span class="text-dark">$500</span></td>\n                                        <td><span class="text-dark">$600</span></td>\n                                        <td class="text-end"><span class="text-dark">$350</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="3" class="border-0"></td>\n                                        <td colspan="2" class="text-dark text-end fw-medium border-0">Taxable Amount</td>\n                                        <td class="text-dark text-end fw-medium border-0">$1650.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="3" class="border-bottom-transparent"></td>\n                                        <td colspan="2" class="text-dark text-end fw-medium border-bottom-transparent">IGST 18.0%</td>\n                                        <td class="text-dark text-end fw-medium border-bottom-transparent">$165.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="3" class="text-dark border-0 bg-light">Total Items / Qty : 2 / 2.00</td>\n                                        <td colspan="2" class="text-dark bg-light border-0 text-end fw-medium "><h6 class="fs-16">Total</h6></td>\n                                        <td class="text-dark bg-light text-end border-0 fw-medium "><h6 class="fs-16">$944.00</h6></td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="3" class="border-bottom-transparent">\n                                            <div class="d-flex flex-column">\n                                                <span>Total amount ( in words):</span>\n                                                <span class="text-dark mb-1">Nine Hundred and Fourty Four Dollars Only.</span>\n                                            </div>\n                                        </td>\n                                        <td colspan="2" class="text-dark text-end border-bottom-transparent fw-medium"><h6>Amount Payable</h6></td>\n                                        <td class="text-dark border-bottom-transparent text-end fw-medium"><h6>$944.00</h6></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div><!-- end col -->\n                    </div>\n                    <!-- end row -->\n\n                    <div class="d-flex align-items-center justify-content-between flex-wrap mb-3 p-3">\n                        <div class="mb-3">\n                            <h6 class="mb-2">Payment Info:</h6>\n                            <div>\n                                <p class="mb-1">Debit Card :  <span class="text-dark">465 *************645</span></p>\n                                <p class="mb-1">Amount :  <span class="text-dark">$1,815</span></p>\n                            </div>\n                        </div>\n                        <div class="text-center mb-3">\n                            <p class="mb-1">For Dreamguys</p>\n                            <span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n                        </div>\n                    </div>\n                    <div class="border-bottom mb-3 p-3">\n                        <h6 class="mb-2">Terms &amp; Conditions : </h6>\n                        <p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n                        <p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n                    </div>\n                    <div class="border-bottom text-center pb-3">\n                        <p>Thanks for your Business</p>\n                    </div>\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlightBookingInvoiceComponent, { className: "FlightBookingInvoiceComponent", filePath: "src/app/features/invoice-modals/flight-booking-invoice/flight-booking-invoice.component.ts", lineNumber: 12 });
})();
export {
  FlightBookingInvoiceComponent
};
//# sourceMappingURL=chunk-OA2LMMBG.js.map
