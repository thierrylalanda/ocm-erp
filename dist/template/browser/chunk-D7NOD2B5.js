import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/timeline/timeline.component.ts
var TimelineComponent = class _TimelineComponent {
  static \u0275fac = function TimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineComponent, selectors: [["app-timeline"]], decls: 48, vars: 0, consts: [[1, "content-two"], [1, "row", "justify-content-center"], [1, "col-lg-10"], [1, "mb-3", "border-bottom", "pb-3"], [1, "mb-0"], [1, "card", "mb-0"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "text-dark", "me-4", "mb-0", "timeline-date", "flex-shrink-0"], [1, "border-start", "ps-4", "py-4", "border-circle", "position-relative"], [1, "text-dark", "fw-semibold", "mb-1"]], template: function TimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
      \u0275\u0275text(5, "Timeline");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
      \u0275\u0275text(10, "07 Apr 2025");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 9)(12, "p", 10);
      \u0275\u0275text(13, "Invoice Marked as Paid");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "p");
      \u0275\u0275text(15, "Status updated to Paid");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 7)(17, "p", 8);
      \u0275\u0275text(18, "07 Apr 2025");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "div", 9)(20, "p", 10);
      \u0275\u0275text(21, "Payment Received");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "p");
      \u0275\u0275text(23, "Payment received for Invoice #INV-1025");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(24, "div", 7)(25, "p", 8);
      \u0275\u0275text(26, "03 Apr 2025");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "div", 9)(28, "p", 10);
      \u0275\u0275text(29, "Invoice Sent to Client");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "p");
      \u0275\u0275text(31, "Invoice #INV-1025 emailed to billing@abccorp.com");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(32, "div", 7)(33, "p", 8);
      \u0275\u0275text(34, "02 Apr 2025");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "div", 9)(36, "p", 10);
      \u0275\u0275text(37, "Invoice Approved");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "p");
      \u0275\u0275text(39, "Invoice #INV-1025 approved for processing");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(40, "div", 7)(41, "p", 8);
      \u0275\u0275text(42, "01 Apr 2025");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "div", 9)(44, "p", 10);
      \u0275\u0275text(45, "Invoice Created");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "p");
      \u0275\u0275text(47, "Invoice #INV-1025 was generated for Client: ABC Corp.");
      \u0275\u0275domElementEnd()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineComponent, [{
    type: Component,
    args: [{ selector: "app-timeline", imports: [], template: '			<!-- Start Content -->\n            <div class="content-two">\n\n                <!-- start row -->\n                <div class="row justify-content-center">\n                    <div class="col-lg-10">\n                        <div class="mb-3 border-bottom pb-3">\n                            <h6 class="mb-0">Timeline</h6>\n                        </div>\n                        <div class="card mb-0">\n                            <div class="card-body">\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">07 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Invoice Marked as Paid</p>\n                                        <p>Status updated to Paid</p>\n                                    </div>\n                                </div>\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">07 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Payment Received</p>\n                                        <p>Payment received for Invoice #INV-1025</p>\n                                    </div>\n                                </div>\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">03 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Invoice Sent to Client</p>\n                                        <p>Invoice #INV-1025 emailed to billing&#64;abccorp.com</p>\n                                    </div>\n                                </div>\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">02 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Invoice Approved</p>\n                                        <p>Invoice #INV-1025 approved for processing</p>\n                                    </div>\n                                </div>\n                                <div class="d-flex align-items-center">\n                                    <p class="text-dark me-4 mb-0 timeline-date flex-shrink-0">01 Apr 2025</p>\n                                    <div class="border-start ps-4 py-4 border-circle position-relative">\n                                        <p class="text-dark fw-semibold mb-1">Invoice Created</p>\n                                        <p>Invoice #INV-1025 was generated for Client: ABC Corp.</p>\n                                    </div>\n                                </div>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n			<!-- End Content -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineComponent, { className: "TimelineComponent", filePath: "src/app/features/pages/timeline/timeline.component.ts", lineNumber: 9 });
})();
export {
  TimelineComponent
};
//# sourceMappingURL=chunk-D7NOD2B5.js.map
