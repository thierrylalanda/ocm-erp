import {
  MatSliderModule
} from "./chunk-Z5WPXIQX.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-NAWYXTZ5.js";
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
  CommonModule,
  NgClass
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/customers/invoice-details/invoice-details.component.ts
var InvoiceDetailsComponent = class _InvoiceDetailsComponent {
  routes = routes;
  modal = false;
  closeModal() {
    this.modal = !this.modal;
    const backdrop = document.querySelector(".modal-backdrop.fade.show");
    if (backdrop) {
      backdrop.classList.add("d-none");
    }
  }
  static \u0275fac = function InvoiceDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceDetailsComponent, selectors: [["app-invoice-details"]], decls: 557, vars: 2, consts: [[1, ""], [1, "row"], [1, "col-md-10", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas2", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center"], [1, "isax", "isax-money-send5", "me-1"], [1, "card"], [1, "card-body"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", "User Img"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2"], [1, "mb-3"], [1, "mb-1"], [1, "me-4"], [1, "fs-14", "fw-semibold", "mb-1"], ["src", "assets/img/icons/not-paid.png", "alt", "User Img", "width", "48", "height", "48"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], [1, "row", "gy-3"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "bg-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "avatar", "avatar-md", "border", "border-gray-100", "border-2", "me-2"], ["src", "assets/img/invoice/timesquare.png", "alt", "User Img"], [1, "text-dark", "fw-semibold"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table", "table-nowrap", "add-table"], [1, "thead-dark"], [1, "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "me-3"], [1, "mb-2"], ["src", "assets/img/icons/qr.png", "alt", "User Img"], [1, "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fs-14", "fw-semibold"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "col-lg-7"], [1, "col-lg-5"], [1, "text-lg-end", "mb-3"], ["src", "assets/img/icons/sign.png", "alt", "img", 1, "sign-dark"], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["tabindex", "-1", "id", "customcanvas2", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "activity-feed", "bg-light", "rounded", "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "text-primary", "fw-semibold", "mb-1"], [1, "fs-13"], [1, "text-dark", "fw-semibold", "mb-1"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fs-16"], ["data-bs-dismiss", "offcanvas", "data-bs-toggle", "modal", "data-bs-target", "#add_card", 1, "d-flex", "align-items-center", "text-dark"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], [1, "border", "rounded", "px-3", "py-2", "mb-2"], [1, "form-check", "d-flex", "align-items-center"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input", "mt-0"], [1, "ms-2"], ["for", "flexRadioDefault1", 1, "form-check-label", "fw-semibold", "text-dark"], [1, "fs-13", "text-gray-5", "fw-normal", "mb-0"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input", "mt-0"], ["for", "flexRadioDefault2", 1, "form-check-label", "fw-semibold", "text-dark"], [1, "border", "rounded", "px-3", "py-2", "mb-2", "d-flex", "align-items-center", "h-60"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault3", 1, "form-check-input", "mt-0"], ["for", "flexRadioDefault3", 1, "form-check-label", "fw-semibold", "text-dark"], [1, "border", "rounded", "px-3", "py-2", "mb-2", "d-flex", "align-items-center", "h-60", "mb-3"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault4", 1, "form-check-input", "mt-0"], ["for", "flexRadioDefault4", 1, "form-check-label", "fw-semibold", "text-dark"], [1, "fs-16", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-3", "d-flex", "align-items-center", "justify-content-between"], [1, "bg-success-100", "p-2", "d-flex", "align-items-center", "justify-content-center", "mb-3"], [1, "isax", "isax-security-safe5", "text-success", "fs-40", "me-2"], [1, "text-dark", "fw-semibold", "mb-0"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#success_modal", 1, "btn", "btn-primary", "w-100"], [1, "offcanvas-footer"], ["data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["id", "add_card", 1, "modal", "fade"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row", "mb-3"], [1, "col-md-6"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["type", "text", 1, "form-control", "rounded-end"], [1, "isax", "isax-lock-1"], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "success_modal", 1, "modal", "fade", "custom-modal", 3, "ngClass"], [1, "isax", "isax-tick-circle5", "fs-48", "text-success"], [1, "mb-3", "text-center"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas3", 1, "btn", "btn-primary", "close-modal", 3, "click"], ["tabindex", "-1", "id", "customcanvas3", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-purple", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-orange", "me-1"], [1, "fs-16", "fw-semibold", "mb-2"], [1, "border-bottom", "mb-3", "pb-3"], [1, "col-6"], [1, "d-flex", "align-items-center"], [1, "badge", "bg-danger", "ms-2"], [1, "activity-feed", "bg-light", "rounded"], [1, "feed-item", "timeline-item"], [1, "invoice-date"], [1, "isax", "isax-calendar", "me-1"], ["href", "javascript:void(0);", 1, "text-primary"]], template: function InvoiceDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "h6")(6, "a", 4);
      \u0275\u0275element(7, "i", 5);
      \u0275\u0275text(8, "Invoice (Customer)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "a", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 7);
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275text(15, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 7);
      \u0275\u0275element(17, "i", 10);
      \u0275\u0275text(18, "Print");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275element(20, "i", 12);
      \u0275\u0275text(21, "Pay Invoice ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "div", 16);
      \u0275\u0275element(26, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "div", 19)(29, "h4", 20);
      \u0275\u0275text(30, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 6)(32, "div", 21)(33, "h6", 22);
      \u0275\u0275text(34, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p");
      \u0275\u0275text(36, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275element(38, "img", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 19);
      \u0275\u0275element(40, "img", 24)(41, "img", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 26)(43, "div", 27)(44, "div")(45, "h6", 28);
      \u0275\u0275text(46, "Invoice Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div")(48, "p", 20);
      \u0275\u0275text(49, "Invoice Number : ");
      \u0275\u0275elementStart(50, "span", 29);
      \u0275\u0275text(51, "INV215654");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "p", 20);
      \u0275\u0275text(53, "Issued On : ");
      \u0275\u0275elementStart(54, "span", 29);
      \u0275\u0275text(55, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "p", 20);
      \u0275\u0275text(57, "Due Date : ");
      \u0275\u0275elementStart(58, "span", 29);
      \u0275\u0275text(59, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "p", 20);
      \u0275\u0275text(61, "Recurring Invoice : ");
      \u0275\u0275elementStart(62, "span", 29);
      \u0275\u0275text(63, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "span", 30);
      \u0275\u0275text(65, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 27)(67, "div")(68, "h6", 28);
      \u0275\u0275text(69, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div")(71, "h6", 22);
      \u0275\u0275text(72, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 20);
      \u0275\u0275text(74, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p", 20);
      \u0275\u0275text(76, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 20);
      \u0275\u0275text(78, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 20);
      \u0275\u0275text(80, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "div", 27)(82, "div")(83, "h6", 28);
      \u0275\u0275text(84, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 31)(86, "div", 32)(87, "span", 33);
      \u0275\u0275element(88, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p", 35);
      \u0275\u0275text(90, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "p", 20);
      \u0275\u0275text(92, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 20);
      \u0275\u0275text(94, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "p", 20);
      \u0275\u0275text(96, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 20);
      \u0275\u0275text(98, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(99, "div", 19)(100, "h6", 19);
      \u0275\u0275text(101, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 36)(103, "table", 37)(104, "thead", 38)(105, "tr")(106, "th");
      \u0275\u0275text(107, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th");
      \u0275\u0275text(109, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th");
      \u0275\u0275text(111, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th");
      \u0275\u0275text(113, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th");
      \u0275\u0275text(115, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th");
      \u0275\u0275text(117, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th");
      \u0275\u0275text(119, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th");
      \u0275\u0275text(121, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "tbody")(123, "tr")(124, "td");
      \u0275\u0275text(125, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "td", 29);
      \u0275\u0275text(127, "T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "td");
      \u0275\u0275text(129, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "td");
      \u0275\u0275text(131, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "td");
      \u0275\u0275text(133, "$200.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "td");
      \u0275\u0275text(135, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "td");
      \u0275\u0275text(137, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "td");
      \u0275\u0275text(139, "$396.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "tr")(141, "td");
      \u0275\u0275text(142, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "td", 29);
      \u0275\u0275text(144, "Office Chair");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "td");
      \u0275\u0275text(146, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "td");
      \u0275\u0275text(148, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "td");
      \u0275\u0275text(150, "$350.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "td");
      \u0275\u0275text(152, "5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "td");
      \u0275\u0275text(154, "$33.25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "td");
      \u0275\u0275text(156, "$365.75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "tr")(158, "td");
      \u0275\u0275text(159, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "td", 29);
      \u0275\u0275text(161, "LED Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "td");
      \u0275\u0275text(163, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "td");
      \u0275\u0275text(165, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "td");
      \u0275\u0275text(167, "$399.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "td");
      \u0275\u0275text(169, "2%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "td");
      \u0275\u0275text(171, "$39.10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "td");
      \u0275\u0275text(173, "$398.90");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "tr")(175, "td");
      \u0275\u0275text(176, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "td", 29);
      \u0275\u0275text(178, "Smartphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "td");
      \u0275\u0275text(180, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "td");
      \u0275\u0275text(182, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "td");
      \u0275\u0275text(184, "$100.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "td");
      \u0275\u0275text(186, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "td");
      \u0275\u0275text(188, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "td");
      \u0275\u0275text(190, "$396.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(191, "div", 39)(192, "div", 1)(193, "div", 40)(194, "div", 41)(195, "div", 42)(196, "p", 43);
      \u0275\u0275text(197, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "span");
      \u0275\u0275element(199, "img", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div")(201, "h6", 43);
      \u0275\u0275text(202, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "div")(204, "p", 20);
      \u0275\u0275text(205, "Bank Name : ");
      \u0275\u0275elementStart(206, "span", 29);
      \u0275\u0275text(207, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "p", 20);
      \u0275\u0275text(209, "Account Number : ");
      \u0275\u0275elementStart(210, "span", 29);
      \u0275\u0275text(211, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "p", 20);
      \u0275\u0275text(213, "IFSC Code : ");
      \u0275\u0275elementStart(214, "span", 29);
      \u0275\u0275text(215, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "p", 45);
      \u0275\u0275text(217, "Payment Reference : ");
      \u0275\u0275elementStart(218, "span", 29);
      \u0275\u0275text(219, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(220, "div", 40)(221, "div", 19)(222, "div", 46)(223, "h6", 47);
      \u0275\u0275text(224, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "h6", 47);
      \u0275\u0275text(226, "$1,793.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 46)(228, "h6", 47);
      \u0275\u0275text(229, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "h6", 47);
      \u0275\u0275text(231, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "div", 46)(233, "h6", 47);
      \u0275\u0275text(234, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "h6", 47);
      \u0275\u0275text(236, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 48)(238, "h6", 47);
      \u0275\u0275text(239, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "h6", 49);
      \u0275\u0275text(241, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "div", 48)(243, "h6");
      \u0275\u0275text(244, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "h6");
      \u0275\u0275text(246, "$1811.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "div")(248, "h6", 22);
      \u0275\u0275text(249, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "p");
      \u0275\u0275text(251, "One thousand eight hundred & eleven dollars & twelve cents.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(252, "div", 1)(253, "div", 50)(254, "div", 19)(255, "div", 19)(256, "h6", 22);
      \u0275\u0275text(257, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "p");
      \u0275\u0275text(259, "The Payment must be returned in the same condition.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div")(261, "h6", 22);
      \u0275\u0275text(262, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "p");
      \u0275\u0275text(264, "All charges are final and include applicable taxes, fees, and additional costs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(265, "div", 51)(266, "div", 52)(267, "span");
      \u0275\u0275element(268, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "h6", 22);
      \u0275\u0275text(270, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "p");
      \u0275\u0275text(272, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(273, "div", 54)(274, "div")(275, "h6", 22);
      \u0275\u0275text(276, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "p");
      \u0275\u0275text(278, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div");
      \u0275\u0275element(280, "img", 24)(281, "img", 25);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(282, "div", 55)(283, "div", 56)(284, "div", 57)(285, "div", 58)(286, "div", 19);
      \u0275\u0275element(287, "img", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "h6", 20);
      \u0275\u0275text(289, "Delete Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "p", 19);
      \u0275\u0275text(291, "Are you sure, you want to delete Invoice?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "div", 60)(293, "a", 61);
      \u0275\u0275text(294, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "a", 62);
      \u0275\u0275text(296, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(297, "div", 63)(298, "div", 64)(299, "div", 65)(300, "h6", 66);
      \u0275\u0275text(301, "Pay Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "button", 67);
      \u0275\u0275element(303, "i", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(304, "div", 69)(305, "form", 70)(306, "div", 71)(307, "div")(308, "p", 72);
      \u0275\u0275text(309, "#INV00001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "p", 73);
      \u0275\u0275text(311, "Due Date :\xA0");
      \u0275\u0275elementStart(312, "span", 29);
      \u0275\u0275text(313, "03 Jun 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(314, "div")(315, "p", 74);
      \u0275\u0275text(316, "Invoice Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "p", 73);
      \u0275\u0275text(318, "$2560.25");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(319, "div", 19)(320, "label", 75);
      \u0275\u0275text(321, "Amount to be Paid ");
      \u0275\u0275elementStart(322, "span", 76);
      \u0275\u0275text(323, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(324, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "div", 19)(326, "div", 78)(327, "h6", 79);
      \u0275\u0275text(328, "Select a Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "span", 80);
      \u0275\u0275element(330, "i", 81);
      \u0275\u0275text(331, "Add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div", 82)(333, "div", 83);
      \u0275\u0275element(334, "input", 84);
      \u0275\u0275elementStart(335, "div", 85)(336, "label", 86);
      \u0275\u0275text(337, " Visa *******5658 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "P", 87);
      \u0275\u0275text(339, "Expires on: 12/26");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(340, "div", 82)(341, "div", 83);
      \u0275\u0275element(342, "input", 88);
      \u0275\u0275elementStart(343, "div", 85)(344, "label", 89);
      \u0275\u0275text(345, " Visa *******5258 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "P", 87);
      \u0275\u0275text(347, "Expires on: 10/26");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(348, "div", 90)(349, "div", 83);
      \u0275\u0275element(350, "input", 91);
      \u0275\u0275elementStart(351, "div", 85)(352, "label", 92);
      \u0275\u0275text(353, " Stripe ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(354, "div", 93)(355, "div", 83);
      \u0275\u0275element(356, "input", 94);
      \u0275\u0275elementStart(357, "div", 85)(358, "label", 95);
      \u0275\u0275text(359, " Paypal ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(360, "div", 39)(361, "h6", 96);
      \u0275\u0275text(362, "Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "div", 19)(364, "div", 97)(365, "p", 45);
      \u0275\u0275text(366, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "p");
      \u0275\u0275text(368, "$565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(369, "div", 98)(370, "p", 45);
      \u0275\u0275text(371, "Platform Fees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "p");
      \u0275\u0275text(373, "$18");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(374, "div", 99)(375, "h6");
      \u0275\u0275text(376, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "h6");
      \u0275\u0275text(378, "$596");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(379, "div", 100);
      \u0275\u0275element(380, "i", 101);
      \u0275\u0275elementStart(381, "div")(382, "p", 102);
      \u0275\u0275text(383, "100% Cashback Guarantee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "p", 73);
      \u0275\u0275text(385, "We Protect Your Money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(386, "div", 43)(387, "a", 103);
      \u0275\u0275text(388, "Pay Now $596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(389, "div", 104)(390, "button", 105);
      \u0275\u0275text(391, "Cancel");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(392, "div", 106)(393, "div", 56)(394, "div", 57)(395, "div", 107)(396, "h5", 108);
      \u0275\u0275text(397, "Add New Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "button", 109);
      \u0275\u0275element(399, "i", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "div", 110)(401, "form")(402, "div", 19)(403, "label", 75);
      \u0275\u0275text(404, "Card Number ");
      \u0275\u0275elementStart(405, "span", 76);
      \u0275\u0275text(406, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(407, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "div", 19)(409, "label", 75);
      \u0275\u0275text(410, "Name on Card ");
      \u0275\u0275elementStart(411, "span", 76);
      \u0275\u0275text(412, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(413, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "div", 111)(415, "div", 112)(416, "label", 75);
      \u0275\u0275text(417, "Expiry Date ");
      \u0275\u0275elementStart(418, "span", 76);
      \u0275\u0275text(419, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "div", 113);
      \u0275\u0275element(421, "input", 114);
      \u0275\u0275elementStart(422, "span", 115);
      \u0275\u0275element(423, "i", 116);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(424, "div", 112)(425, "label", 75);
      \u0275\u0275text(426, "Security Number ");
      \u0275\u0275elementStart(427, "span", 76);
      \u0275\u0275text(428, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(429, "div", 113);
      \u0275\u0275element(430, "input", 117);
      \u0275\u0275elementStart(431, "span", 115);
      \u0275\u0275element(432, "i", 118);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(433, "div", 119)(434, "a", 61);
      \u0275\u0275text(435, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "button", 120);
      \u0275\u0275text(437, "Add");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(438, "div", 121)(439, "div", 56)(440, "div", 57)(441, "div", 58)(442, "div", 19);
      \u0275\u0275element(443, "i", 122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "h6", 20);
      \u0275\u0275text(445, "Payment Successful");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "p", 123);
      \u0275\u0275text(447, "Your invoice payment has been successfully completed! Reference Number: #INV54896");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "div", 60)(449, "a", 61);
      \u0275\u0275text(450, "Back to Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "a", 124);
      \u0275\u0275listener("click", function InvoiceDetailsComponent_Template_a_click_451_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(452, "View Details");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(453, "div", 125)(454, "div", 64)(455, "div", 65)(456, "h6", 66);
      \u0275\u0275text(457, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "button", 67);
      \u0275\u0275element(459, "i", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(460, "div", 69)(461, "form")(462, "div", 19)(463, "label", 75);
      \u0275\u0275text(464, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "div", 126)(466, "a", 127);
      \u0275\u0275text(467, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "div", 128)(469, "ul", 19)(470, "li")(471, "label", 129);
      \u0275\u0275element(472, "input", 130)(473, "i", 131);
      \u0275\u0275text(474, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(475, "li")(476, "label", 129);
      \u0275\u0275element(477, "input", 130)(478, "i", 132);
      \u0275\u0275text(479, "Unpaid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(480, "li")(481, "label", 129);
      \u0275\u0275element(482, "input", 130)(483, "i", 133);
      \u0275\u0275text(484, "Cancelled ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(485, "li")(486, "label", 129);
      \u0275\u0275element(487, "input", 130)(488, "i", 134);
      \u0275\u0275text(489, "Partially Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "li")(491, "label", 129);
      \u0275\u0275element(492, "input", 130)(493, "i", 135);
      \u0275\u0275text(494, "Overdue ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(495, "div")(496, "h6", 136);
      \u0275\u0275text(497, "Payment Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "div", 137)(499, "div", 1)(500, "div", 138)(501, "div", 19)(502, "h6", 22);
      \u0275\u0275text(503, "PayPal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "p");
      \u0275\u0275text(505, "examplepaypal.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(506, "div", 138)(507, "div", 19)(508, "h6", 22);
      \u0275\u0275text(509, "Account ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "p");
      \u0275\u0275text(511, "examplepaypal.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(512, "div", 138)(513, "div", 19)(514, "h6", 22);
      \u0275\u0275text(515, "Payment Term");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "p", 139);
      \u0275\u0275text(517, "15 Days ");
      \u0275\u0275elementStart(518, "span", 140);
      \u0275\u0275text(519, "Due in 8 days");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(520, "div")(521, "h6", 96);
      \u0275\u0275text(522, "Invoice History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "ul", 141)(524, "li", 142)(525, "p", 20);
      \u0275\u0275text(526, "Status Changed to ");
      \u0275\u0275elementStart(527, "span", 35);
      \u0275\u0275text(528, "Partially Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(529, "div", 143)(530, "span");
      \u0275\u0275element(531, "i", 144);
      \u0275\u0275text(532, "17 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(533, "li", 142)(534, "p", 20)(535, "span", 35);
      \u0275\u0275text(536, "$300 ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(537, " Partial Amount Paid on ");
      \u0275\u0275elementStart(538, "span", 35);
      \u0275\u0275text(539, "Paypal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(540, "div", 143)(541, "span");
      \u0275\u0275element(542, "i", 144);
      \u0275\u0275text(543, "16 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(544, "li", 142)(545, "p", 20)(546, "span", 35);
      \u0275\u0275text(547, "John Smith ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(548, " Created ");
      \u0275\u0275elementStart(549, "span", 35);
      \u0275\u0275text(550, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "a", 145);
      \u0275\u0275text(552, "#INV1254");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "div", 143)(554, "span");
      \u0275\u0275element(555, "i", 144);
      \u0275\u0275text(556, "16 Jan 2025");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.customerInvoices);
      \u0275\u0275advance(432);
      \u0275\u0275property("ngClass", ctx.modal ? "d-none" : "");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    MatSliderModule,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    NgForm,
    RouterLink
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-details", imports: [
      CommonModule,
      MatSliderModule,
      FormsModule,
      RouterLink
    ], template: `			<!-- Start Content -->
			<div class="">

				<!-- start row -->
				<div class="row">
					<div class="col-md-10 mx-auto">
						<div>
							<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
								<h6><a [routerLink]="routes.customerInvoices"><i class="isax isax-arrow-left me-2"></i>Invoice (Customer)</a></h6>
								<div class="d-flex align-items-center flex-wrap row-gap-3">
									<a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-document-like me-1"></i>Download PDF</a>
									<a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-message-notif me-1"></i>Send Email</a>
									<a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-printer me-1"></i>Print</a>
									<a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#customcanvas2">
										<i class="isax isax-money-send5 me-1"></i>Pay Invoice
									</a>
								</div>
							</div>
							<div class="card">
								<div class="card-body">
									<div class="bg-light p-4 rounded position-relative mb-3">
										<div class="position-absolute top-0 end-0">
											<img src="assets/img/bg/card-bg.png" alt="User Img">
										</div>
										<div class="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2">
											<div class="mb-3">
												<h4 class="mb-1">Invoice</h4>
												<div class="d-flex align-items-center flex-wrap row-gap-3">
													<div class="me-4">
														<h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
														<p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
													</div>
													<span><img src="assets/img/icons/not-paid.png" alt="User Img" width="48" height="48"></span>
												</div>
											</div>
											<div class="mb-3">
												<img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
												<img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
											</div>
										</div>

										<!-- start row -->
										<div class="row gy-3">
											<div class="col-lg-4">
												<div>
													<h6 class="mb-2 fs-16 fw-semibold">Invoice Details</h6>
													<div>
														<p class="mb-1">Invoice Number : <span class="text-dark">INV215654</span></p>
														<p class="mb-1">Issued On : <span class="text-dark">25 Jan 2025</span></p>
														<p class="mb-1">Due Date :  <span class="text-dark">31 Jan 2025</span></p>
														<p class="mb-1">Recurring Invoice  :  <span class="text-dark">Monthly</span></p>
														<span class="badge bg-danger">Due in 8 days</span>
													</div>
												</div>
											</div><!-- end col -->
											<div class="col-lg-4">
												<div>
													<h6 class="mb-2 fs-16 fw-semibold">Billing From</h6>
													<div>
														<h6 class="fs-14 fw-semibold mb-1">Kanakku Invoice Management</h6>
														<p class="mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>
														<p class="mb-1">Phone : +1 54664 75945</p>
														<p class="mb-1">Email : info&#64;example.com</p>
														<p class="mb-1">GST : 243E45767889</p>
													</div>
												</div>
											</div><!-- end col -->
											<div class="col-lg-4">
												<div>
													<h6 class="mb-2 fs-16 fw-semibold">Billing To</h6>
                                                    
													<div class="bg-white rounded p-3">
                                                        <div class="d-flex align-items-center mb-1">
                                                            <span class="avatar avatar-md border border-gray-100 border-2 me-2">
                                                                <img src="assets/img/invoice/timesquare.png" alt="User Img">
                                                            </span>
                                                            <p class="text-dark fw-semibold">Timesquare Tech</p>
                                                        </div>
														<p class="mb-1">299 Star Trek Drive, Florida, 3240, USA</p>
														<p class="mb-1">Phone : +1 54664 75945</p>
														<p class="mb-1">Email : info&#64;example.com</p>
														<p class="mb-1">GST : 243E45767889</p>
													</div>
												</div>
											</div><!-- end col -->
										</div>
										<!-- end row -->

									</div>
									<div class="mb-3">
										<h6 class="mb-3">Product / Service Items</h6>
										<div class="table-responsive rounded border-bottom-0 border">
											<table class="table table-nowrap add-table">
												<thead class="thead-dark">
													<tr>
														<th>#</th>
														<th>Product/Service</th>
														<th>Quantity</th>
														<th>Unit</th>
														<th>Rate</th>
														<th>Discount</th>
														<th>Tax (%)</th>
														<th>Amount</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td class="text-dark">T-Shirt</td>
														<td>2</td>
														<td>Pcs</td>
														<td>$200.00</td>
														<td>10%</td>
														<td>$36.00</td>
														<td>$396.00</td>
													</tr>
													<tr>
														<td>2</td>
														<td class="text-dark">Office Chair</td>
														<td>1</td>
														<td>Pcs</td>
														<td>$350.00</td>
														<td>5%</td>
														<td>$33.25</td>
														<td>$365.75</td>
													</tr>
													<tr>
														<td>3</td>
														<td class="text-dark">LED Monitor</td>
														<td>1</td>
														<td>Pcs</td>
														<td>$399.00</td>
														<td>2%</td>
														<td>$39.10</td>
														<td>$398.90</td>
													</tr>
													<tr>
														<td>4</td>
														<td class="text-dark">Smartphone</td>
														<td>4</td>
														<td>Pcs</td>
														<td>$100.00</td>
														<td>10%</td>
														<td>$36.00</td>
														<td>$396.00</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>

									<div class="border-bottom mb-3">

										<!-- start row -->
										<div class="row">
											<div class="col-lg-6">
												<div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
													<div class="me-3">
														<p class="mb-2">Scan to the pay</p>
														<span><img src="assets/img/icons/qr.png" alt="User Img"></span>
													</div>
													<div>
														<h6 class="mb-2">Bank Details</h6>
														<div>
															<p class="mb-1">Bank Name :  <span class="text-dark">ABC Bank</span></p>
															<p class="mb-1">Account Number :  <span class="text-dark">782459739212</span></p>
															<p class="mb-1">IFSC Code :  <span class="text-dark">ABC0001345</span></p>
															<p class="mb-0">Payment Reference :  <span class="text-dark">INV-20250220-001</span></p>
														</div>
													</div>
												</div>
											</div><!-- end col -->
											<div class="col-lg-6">
												<div class="mb-3">
													<div class="d-flex align-items-center justify-content-between mb-3">
														<h6 class="fs-14 fw-semibold">Amount</h6>
														<h6 class="fs-14 fw-semibold">$1,793.12</h6>
													</div>
													<div class="d-flex align-items-center justify-content-between mb-3">
														<h6 class="fs-14 fw-semibold">CGST (9%)</h6>
														<h6 class="fs-14 fw-semibold">$18</h6>
													</div>
													<div class="d-flex align-items-center justify-content-between mb-3">
														<h6 class="fs-14 fw-semibold">SGST (9%)</h6>
														<h6 class="fs-14 fw-semibold">$18</h6>
													</div>
													<div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
														<h6 class="fs-14 fw-semibold">Discount</h6>
														<h6 class="fs-14 fw-semibold text-danger">$18</h6>
													</div>
													<div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
														<h6>Total (USD)</h6>
														<h6>$1811.12</h6>
													</div>
													<div>
														<h6 class="fs-14 fw-semibold mb-1">Total In Words</h6>
														<p>One thousand eight hundred &amp; eleven dollars &amp; twelve cents.</p>
													</div>
												</div>
											</div><!-- end col -->
										</div>
										<!-- end row -->

									</div>

									<!-- start row -->
									<div class="row">
										<div class="col-lg-7">
											<div class="mb-3">
												<div class="mb-3">
													<h6 class="fs-14 fw-semibold mb-1">Terms and Conditions</h6>
													<p>The Payment must be returned in the same condition.</p>
												</div>
												<div>
													<h6 class="fs-14 fw-semibold mb-1">Notes</h6>
													<p>All charges are final and include applicable taxes, fees, and additional costs</p>
												</div>
											</div>
										</div><!-- end col -->
										<div class="col-lg-5">
											<div class="text-lg-end mb-3">
												<span><img src="assets/img/icons/sign.png" class="sign-dark" alt="img"></span>
												<h6 class="fs-14 fw-semibold mb-1">Ted M. Davis</h6>
												<p>Manager</p>
											</div>
										</div><!-- end col -->
									</div>
									<!-- end row -->

									<div class="bg-light d-flex align-items-center justify-content-between p-4 rounded card-bg">
										<div>
											<h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
											<p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
										</div>
										<div>
											<img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
											<img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div>
					</div><!-- end col -->
				</div>
				<!-- end row -->

			</div>
			<!-- End Content -->




<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Invoice</h6>
                <p class="mb-3">Are you sure, you want to delete Invoice?</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Start Delete Modal  -->

<!-- Start Filter -->
<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas2">
    <div class="offcanvas-header d-block pb-0">
        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
            <h6 class="offcanvas-title">Pay Invoice</h6>
            <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>
    <div class="offcanvas-body pt-3">
        <form action="#">
            <div class="activity-feed bg-light rounded d-flex align-items-center justify-content-between mb-3">
                <div>
                    <p class="text-primary fw-semibold mb-1">#INV00001</p>
                    <p class="fs-13">Due Date :\xA0<span class="text-dark">03 Jun 2025</span></p>
                </div>
                <div>
                    <p class="text-dark fw-semibold mb-1">Invoice Total</p>
                    <p class="fs-13">$2560.25</p>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Amount to be Paid <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <h6 class="fs-16">Select a Payment Method</h6>
                    <span class="d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" data-bs-toggle="modal" data-bs-target="#add_card"><i class="isax isax-add-circle5 text-primary me-1"></i>Add</span>
                </div>
                <div class="border rounded px-3 py-2 mb-2">
                    <div class="form-check d-flex align-items-center">
                        <input class="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <div class="ms-2">
                            <label class="form-check-label fw-semibold text-dark" for="flexRadioDefault1">
                                Visa *******5658
                            </label>
                            <P class="fs-13 text-gray-5 fw-normal mb-0">Expires on: 12/26</P>
                        </div>
                    </div>
                </div>
                <div class="border rounded px-3 py-2 mb-2">
                    <div class="form-check d-flex align-items-center">
                        <input class="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <div class="ms-2">
                            <label class="form-check-label fw-semibold text-dark" for="flexRadioDefault2">
                                Visa *******5258
                            </label>
                            <P class="fs-13 text-gray-5 fw-normal mb-0">Expires on: 10/26</P>
                        </div>
                    </div>
                </div>
                <div class="border rounded px-3 py-2 mb-2 d-flex align-items-center h-60">
                    <div class="form-check d-flex align-items-center">
                        <input class="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                        <div class="ms-2">
                            <label class="form-check-label fw-semibold text-dark" for="flexRadioDefault3">
                                Stripe
                            </label>
                        </div>
                    </div>
                </div>
                <div class="border rounded px-3 py-2 mb-2 d-flex align-items-center h-60 mb-3">
                    <div class="form-check d-flex align-items-center">
                        <input class="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                        <div class="ms-2">
                            <label class="form-check-label fw-semibold text-dark" for="flexRadioDefault4">
                                Paypal
                            </label>
                        </div>
                    </div>
                </div>
                <div class="border-bottom mb-3">
                    <h6 class="fs-16 mb-2">Summary</h6>
                    <div class=" mb-3">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                            <p class="mb-0">Payment</p>
                            <p>$565</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">Platform Fees</p>
                            <p>$18</p>
                        </div>
                    </div>
                </div>
                <div class="mb-3 d-flex align-items-center justify-content-between">
                    <h6>Total (USD)</h6>
                    <h6>$596</h6>
                </div>
            </div>
            <div class="bg-success-100 p-2 d-flex align-items-center justify-content-center mb-3">
                <i class="isax isax-security-safe5 text-success fs-40 me-2"></i>
                <div>
                    <p class="text-dark fw-semibold mb-0">100% Cashback Guarantee</p>
                    <p class="fs-13">We Protect Your Money</p>
                </div>
            </div>
            <div class="mb-2">
                <a href="javascript:void(0);" class="btn btn-primary w-100 " data-bs-toggle="modal" data-bs-target="#success_modal">Pay Now $596</a>
            </div>
            <div class="offcanvas-footer">
                <button data-bs-dismiss="offcanvas" class="btn btn-outline-white w-100">Cancel</button>
            </div>
        </form>
    </div>
</div>
<!-- End Filter -->

<!-- Add New Card -->
<div class="modal fade" id="add_card">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Card</h5>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Card Number <span class="text-danger">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Name on Card <span class="text-danger">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label">Expiry Date <span class="text-danger">*</span></label>
                            <div class="input-group position-relative mb-3">
                                <input type="text" class="form-control datetimepicker rounded-end">
                                <span class="input-icon-addon fs-16 text-gray-9">
                                    <i class="isax isax-calendar-2"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Security Number <span class="text-danger">*</span></label>
                            <div class="input-group position-relative mb-3">
                                <input type="text" class="form-control rounded-end">
                                <span class="input-icon-addon fs-16 text-gray-9">
                                    <i class="isax isax-lock-1"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Add New Card -->

<!-- Success -->
<div class="modal fade custom-modal" id="success_modal" [ngClass]="modal?'d-none':''">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <i class="isax isax-tick-circle5 fs-48 text-success"></i>
                </div>
                <h6 class="mb-1">Payment Successful</h6>
                <p class="mb-3 text-center">Your invoice payment has been successfully completed! Reference Number: #INV54896</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Back to Invoices</a>
                    <a href="javascript:void(0);" class="btn btn-primary close-modal" data-bs-toggle="offcanvas" data-bs-target="#customcanvas3" (click)="closeModal()">View  Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Success -->

<!-- Start Filter -->
<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas3">
    <div class="offcanvas-header d-block pb-0">
        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
            <h6 class="offcanvas-title">Details</h6>
            <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>
    <div class="offcanvas-body pt-3">
        <form>
            <div class="mb-3">
                <label class="form-label">Status</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                        <ul class="mb-3">
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Paid
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Unpaid
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Cancelled
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-purple me-1"></i>Partially Paid
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-orange me-1"></i>Overdue
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h6 class="fs-16 fw-semibold mb-2">Payment Details</h6>
                <div class="border-bottom mb-3 pb-3">
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <h6 class="fs-14 fw-semibold mb-1">PayPal</h6>
                                <p>examplepaypal.com</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <h6 class="fs-14 fw-semibold mb-1">Account </h6>
                                <p>examplepaypal.com</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <h6 class="fs-14 fw-semibold mb-1">Payment Term</h6>
                                <p class="d-flex align-items-center">15 Days <span class="badge bg-danger ms-2">Due in 8 days</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6 class="fs-16 mb-2">Invoice History</h6>
                <ul class="activity-feed bg-light rounded">
                    <li class="feed-item timeline-item">
                        <p class="mb-1">Status Changed to <span class="text-dark fw-semibold">Partially Paid</span></p>
                        <div class="invoice-date"><span><i class="isax isax-calendar me-1"></i>17 Jan 2025</span></div>
                    </li>
                    <li class="feed-item timeline-item">
                        <p class="mb-1"><span class="text-dark fw-semibold">$300 </span> Partial Amount Paid on <span class="text-dark fw-semibold">Paypal</span></p>
                        <div class="invoice-date"><span><i class="isax isax-calendar me-1"></i>16 Jan 2025</span></div>
                    </li>
                    <li class="feed-item timeline-item">
                        <p class="mb-1"><span class="text-dark fw-semibold">John Smith </span> Created <span class="text-dark fw-semibold">Invoice</span><a href="javascript:void(0);" class="text-primary">#INV1254</a></p>
                        <div class="invoice-date"><span><i class="isax isax-calendar me-1"></i>16 Jan 2025</span></div>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</div>
<!-- End Filter -->
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceDetailsComponent, { className: "InvoiceDetailsComponent", filePath: "src/app/features/customers/invoice-details/invoice-details.component.ts", lineNumber: 16 });
})();
export {
  InvoiceDetailsComponent
};
//# sourceMappingURL=chunk-YDQON4NE.js.map
