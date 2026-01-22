import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invoice-modals/receipt-invoice-3/receipt-invoice-3.component.ts
var ReceiptInvoice3Component = class _ReceiptInvoice3Component {
  routes = routes;
  static \u0275fac = function ReceiptInvoice3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceiptInvoice3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceiptInvoice3Component, selectors: [["app-receipt-invoice-3"]], decls: 157, vars: 1, consts: [[1, "invoice-wrapper", "receipt-page"], [1, "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-1"], [1, "card", "m-auto", "shadow-none"], [1, "card-body"], [1, "p-2", "text-center", "mb-2"], [1, "fs-16"], [1, "fs-10", "fw-bold", "text-center", "text-gray-5", "border-dashed", "pb-2", "mb-2"], [1, "mb-2"], [1, "row", "mb-2", "row-gap-3"], [1, "col-sm-6", "col-md-6"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "text-dark"], [1, "row", "row-gap-3"], [1, "receipt-header"], [1, "table", "table-nowrap", "border-dashed", "mb-2"], [1, "fs-10", "border-0", "pe-0"], [1, "fs-10", "border-0", "ps-0"], [1, "fs-10", "border-0", "pe-0", "text-end"], [1, "fs-10", "border-0", "p-1", "pe-0"], [1, "fs-10", "border-0", "p-1", "ps-0"], [1, "fs-10", "border-0", "p-1", "text-end"], [1, "border-dashed"], [1, "border-0"], ["colspan", "2", 1, "fs-10", "border-0", "p-1", "text-end"], ["colspan", "2", 1, "fs-10", "border-dashed", "p-1", "text-end"], ["colspan", "2", 1, "fs-10", "border-dashed", "p-1", "text-dark", "text-end", "fw-semibold"], [1, "text-center", "mb-2"], ["src", "assets/img/barcode.svg", "alt", "img", 1, "img-fluid", "mb-2", "pb-2", "border-dashed"], [1, "text-center", "pb-2", "border-dashed"]], template: function ReceiptInvoice3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6")(3, "a", 2);
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, "Back");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h6", 7);
      \u0275\u0275text(10, "Cash Receipt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "h6", 8);
      \u0275\u0275text(12, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "p", 13);
      \u0275\u0275text(18, "Name:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 14);
      \u0275\u0275text(20, "John Doe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "p", 13);
      \u0275\u0275text(24, "Invoice No:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 14);
      \u0275\u0275text(26, "CS132453");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 15)(28, "div", 11)(29, "div", 12)(30, "p", 13);
      \u0275\u0275text(31, "Customer Id:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 14);
      \u0275\u0275text(33, "#LL93784");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "p", 13);
      \u0275\u0275text(37, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 14);
      \u0275\u0275text(39, "01.07.2024");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 16)(41, "table", 17)(42, "thead")(43, "tr", 9)(44, "th", 18);
      \u0275\u0275text(45, "SL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 19);
      \u0275\u0275text(47, "Item");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 20);
      \u0275\u0275text(49, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 20);
      \u0275\u0275text(51, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 20);
      \u0275\u0275text(53, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "tbody")(55, "tr")(56, "td", 21);
      \u0275\u0275text(57, "1.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "td", 22);
      \u0275\u0275text(59, "Sugarfree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "td", 23);
      \u0275\u0275text(61, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "td", 23);
      \u0275\u0275text(63, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "td", 23);
      \u0275\u0275text(65, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "tr")(67, "td", 21);
      \u0275\u0275text(68, "2.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td", 22);
      \u0275\u0275text(70, "Onion (Loose) (5kg)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "td", 23);
      \u0275\u0275text(72, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "td", 23);
      \u0275\u0275text(74, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "td", 23);
      \u0275\u0275text(76, "$100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "tr")(78, "td", 21);
      \u0275\u0275text(79, "3.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "td", 22);
      \u0275\u0275text(81, "Mushrooms - Button 1 pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "td", 23);
      \u0275\u0275text(83, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "td", 23);
      \u0275\u0275text(85, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "td", 23);
      \u0275\u0275text(87, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "tr")(89, "td", 21);
      \u0275\u0275text(90, "4.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "td", 22);
      \u0275\u0275text(92, "Tea 1kg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "td", 23);
      \u0275\u0275text(94, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "td", 23);
      \u0275\u0275text(96, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "td", 23);
      \u0275\u0275text(98, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "tr", 24)(100, "td", 21);
      \u0275\u0275text(101, "5.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "td", 22);
      \u0275\u0275text(103, "Diet Coke Soft Drink 300ml");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "td", 23);
      \u0275\u0275text(105, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "td", 23);
      \u0275\u0275text(107, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "td", 23);
      \u0275\u0275text(109, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "tr");
      \u0275\u0275element(111, "td", 25);
      \u0275\u0275elementStart(112, "td", 26);
      \u0275\u0275text(113, "Sub Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "td", 26);
      \u0275\u0275text(115, "$700.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "tr");
      \u0275\u0275element(117, "td", 25);
      \u0275\u0275elementStart(118, "td", 27);
      \u0275\u0275text(119, "Discount :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "td", 27);
      \u0275\u0275text(121, "-$50.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "tr");
      \u0275\u0275element(123, "td", 25);
      \u0275\u0275elementStart(124, "td", 26);
      \u0275\u0275text(125, "Service Charge :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "td", 26);
      \u0275\u0275text(127, "0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "tr");
      \u0275\u0275element(129, "td", 25);
      \u0275\u0275elementStart(130, "td", 27);
      \u0275\u0275text(131, "Tax (5%) :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "td", 27);
      \u0275\u0275text(133, "$5.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "tr");
      \u0275\u0275element(135, "td", 25);
      \u0275\u0275elementStart(136, "td", 26);
      \u0275\u0275text(137, "Total Bill :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "td", 26);
      \u0275\u0275text(139, "$655.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "tr");
      \u0275\u0275element(141, "td", 25);
      \u0275\u0275elementStart(142, "td", 26);
      \u0275\u0275text(143, "Due :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "td", 26);
      \u0275\u0275text(145, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "tr");
      \u0275\u0275element(147, "td", 25);
      \u0275\u0275elementStart(148, "td", 28);
      \u0275\u0275text(149, "Total Payable :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "td", 28);
      \u0275\u0275text(151, "$655.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(152, "p", 29);
      \u0275\u0275text(153, "12332345698234592384");
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "img", 30);
      \u0275\u0275elementStart(155, "p", 31);
      \u0275\u0275text(156, "Thank You");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.invoiceTemplate);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceiptInvoice3Component, [{
    type: Component,
    args: [{ selector: "app-receipt-invoice-3", imports: [CommonModule, RouterLink], template: '<div class="invoice-wrapper receipt-page">\n    <div class="mb-3">\n        <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n    </div>\n    <div class="card m-auto shadow-none">\n        <div class="card-body">\n            <div class="p-2 text-center mb-2">\n                <h6 class="fs-16">Cash Receipt</h6>\n            </div>\n            <h6 class="fs-10 fw-bold text-center text-gray-5 border-dashed pb-2 mb-2">Dreams Technologies Pvt Ltd.,</h6>\n            <div class="mb-2">\n\n                <!-- start row -->\n                <div class="row mb-2 row-gap-3">\n                    <div class="col-sm-6 col-md-6">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <p class=" mb-0">Name:</p>\n                            <p class=" text-dark">John Doe</p>\n                        </div>\n                    </div><!-- end col -->\n                    <div class="col-sm-6 col-md-6">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <p class=" mb-0">Invoice No:</p>\n                            <p class=" text-dark">CS132453</p>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- start row -->\n                <div class="row row-gap-3">\n                    <div class="col-sm-6 col-md-6">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <p class=" mb-0">Customer Id:</p>\n                            <p class=" text-dark">#LL93784</p>\n                        </div>\n                    </div><!-- end col -->\n                    <div class="col-sm-6 col-md-6">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <p class=" mb-0">Date :</p>\n                            <p class=" text-dark">01.07.2024</p>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n                 \n            </div>\n            <div class="receipt-header">\n                <table class="table table-nowrap border-dashed mb-2">\n                    <thead>\n                        <tr class="mb-2">\n                            <th class="fs-10 border-0 pe-0">SL</th>\n                            <th class="fs-10 border-0 ps-0">Item</th>\n                            <th class="fs-10 border-0 pe-0 text-end">Price</th>\n                            <th class="fs-10 border-0 pe-0 text-end">Qty</th>\n                            <th class="fs-10 border-0 pe-0 text-end">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class="fs-10 border-0 p-1 pe-0">1.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Sugarfree</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">3</td>\n                            <td class="fs-10 border-0 p-1 text-end">$150</td>\n                        </tr>\n                        <tr>\n                            <td class="fs-10 border-0 p-1 pe-0">2.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Onion (Loose) (5kg)</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">2</td>\n                            <td class="fs-10 border-0 p-1 text-end">$100</td>\n                        </tr>\n                        <tr>\n                            <td class="fs-10 border-0 p-1 pe-0">3.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Mushrooms - Button 1 pack</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">3</td>\n                            <td class="fs-10 border-0 p-1 text-end">$150</td>\n                        </tr>\n                        <tr>\n                            <td class="fs-10 border-0 p-1 pe-0">4.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Tea 1kg</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">3</td>\n                            <td class="fs-10 border-0 p-1 text-end">$150</td>\n                        </tr>\n                        <tr class="border-dashed">\n                            <td class="fs-10 border-0 p-1 pe-0">5.</td>\n                            <td class="fs-10 border-0 p-1 ps-0">Diet Coke Soft Drink 300ml</td>\n                            <td class="fs-10 border-0 p-1 text-end">$50</td>\n                            <td class="fs-10 border-0 p-1 text-end">3</td>\n                            <td class="fs-10 border-0 p-1 text-end">$150</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">Sub Total :</td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">$700.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-end">Discount :</td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-end">-$50.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">Service Charge :</td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">0.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-end">Tax (5%) :</td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-end">$5.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">Total Bill :</td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">$655.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">Due :</td>\n                            <td colspan="2" class="fs-10 border-0 p-1 text-end">$0.00</td>\n                        </tr>\n                        <tr>\n                            <td class="border-0"></td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-dark text-end fw-semibold">Total Payable :</td>\n                            <td colspan="2" class="fs-10 border-dashed p-1 text-dark text-end fw-semibold">$655.00</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <p class="text-center mb-2">12332345698234592384</p>\n                <img src="assets/img/barcode.svg" class="img-fluid mb-2 pb-2 border-dashed" alt="img">\n                <p class="text-center pb-2 border-dashed">Thank You</p>\n            </div>\n        </div><!-- end card body -->\n    </div><!-- end card -->\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceiptInvoice3Component, { className: "ReceiptInvoice3Component", filePath: "src/app/features/invoice-modals/receipt-invoice-3/receipt-invoice-3.component.ts", lineNumber: 12 });
})();
export {
  ReceiptInvoice3Component
};
//# sourceMappingURL=chunk-V6C673JV.js.map
