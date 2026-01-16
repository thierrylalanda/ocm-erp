import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-5H6GXSFV.js";
import "./chunk-YETY7SH2.js";
import "./chunk-M4MC2D7Y.js";
import "./chunk-UNWSAGEL.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-6H2KZBXU.js";
import "./chunk-KKWHEPUK.js";
import {
  FormsModule
} from "./chunk-BLAAMQ2R.js";
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
  CommonModule,
  NgForOf,
  NgStyle
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/purchases/debit-notes/add-debit-notes/add-debit-notes.component.ts
var _c0 = (a0) => ({ "display": a0 });
function AddDebitNotesComponent_ng_container_235_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td");
    \u0275\u0275element(3, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div")(18, "a", 81);
    \u0275\u0275listener("click", function AddDebitNotesComponent_ng_container_235_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 82);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var AddDebitNotesComponent = class _AddDebitNotesComponent {
  routes = routes;
  trash = false;
  isTrash() {
    this.trash = true;
  }
  formData = [];
  addNewRow() {
    this.formData.push({});
  }
  removeRow(index) {
    this.formData.splice(index, 1);
  }
  trackByIndex(index, item) {
    return index;
  }
  static \u0275fac = function AddDebitNotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddDebitNotesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddDebitNotesComponent, selectors: [["app-add-debit-notes"]], decls: 368, vars: 6, consts: [[1, "row"], [1, "col-md-11", "mx-auto"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "top-content"], [1, "purchase-header", "mb-3"], [1, "row", "justify-content-between"], [1, "col-md-6"], [1, "purchase-top-content"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "9876543", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-md-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1", "text-primary"], [1, "col-md-4"], [1, "logo-image"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], ["placeholder", "Select Status", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "Currency", 1, "custom-mat-select", "select"], [1, "p-2", "border", "rounded", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-switch", "me-4"], ["type", "checkbox", "role", "switch", "id", "enabe_tax", "checked", "", 1, "form-check-input"], ["for", "enabe_tax", 1, "form-check-label"], ["href", "javascript:void(0);"], [1, "bg-primary-subtle", "p-1", "rounded"], [1, "isax", "isax-setting-2", "text-primary"], [1, "bill-content", "pb-0"], [1, "card", "box-shadow-0"], [1, "card-header", "border-0", "pb-0"], ["placeholder", "Select", 1, "custom-mat-select", "select"], [1, "p-3", "bg-light", "rounded", "border"], [1, "d-flex"], [1, "me-3"], [1, "p-2", "rounded", "border"], ["src", "assets/img/logo-small.svg", "alt", "image", 1, "img-fluid"], [1, "fs-14", "mb-1"], [1, "mb-0"], [1, "text-dark", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "items-details"], [1, "d-flex", "align-items-center", "gap-3"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "table-responsive", "rounded", "border-bottom-0", "border", "mb-3"], [1, "table", "table-nowrap", "add-table", "mb-0"], [1, "table-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "0%", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [1, "isax", "isax-close-circle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data", 3, "click"], [1, "extra-info"], [1, "col-md-7"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-solid-primary", "mb-3"], ["role", "presentation", 1, "nav-item", "me-2"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document", "me-1"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "col-md-5"], [1, "mb-0", "ps-0", "list-unstyled"], [1, "fw-semibold", "fs-14", "text-gray-9", "mb-0"], [1, "fs-14"], [1, "pb-2", "border-gray", "border-bottom"], [1, "p-2", "d-flex", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "enabe_tax1", "checked", "", 1, "form-check-input"], ["for", "enabe_tax1", 1, "form-check-label"], [1, "mt-3", "pb-3", "border-bottom", "border-gray"], [1, "fs-14", "fw-semibold"], [1, "mt-3", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "singnature-upload", "bg-light", "d-flex", "align-items-center", "justify-content-center"], [1, "drag-upload-btn", "bg-light", "position-relative", "mb-2", "fs-14", "fw-normal", "text-gray-5"], [1, "isax", "isax-image", "me-1", "text-primary"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AddDebitNotesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Debit Note");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "a", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, "Preview ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h6");
      \u0275\u0275text(18, "Purchase Order Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div")(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "div", 0)(24, "div", 14)(25, "div", 16)(26, "label", 17);
      \u0275\u0275text(27, "Debit Note Id");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 14)(30, "div", 16)(31, "label", 17);
      \u0275\u0275text(32, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 20)(35, "label", 17);
      \u0275\u0275text(36, "Debit Note Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 21);
      \u0275\u0275element(38, "input", 22);
      \u0275\u0275elementStart(39, "span", 23);
      \u0275\u0275element(40, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div")(42, "a", 25);
      \u0275\u0275element(43, "i", 26);
      \u0275\u0275text(44, "Add Due Date");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 27)(46, "div", 15)(47, "div", 0)(48, "div", 20)(49, "div", 16)(50, "div", 28);
      \u0275\u0275element(51, "img", 29)(52, "img", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 14)(54, "div", 16)(55, "mat-select", 31)(56, "mat-option", 32);
      \u0275\u0275text(57, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 32);
      \u0275\u0275text(59, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 32);
      \u0275\u0275text(61, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 32);
      \u0275\u0275text(63, "Cancelled");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 14)(65, "div", 16)(66, "mat-select", 33)(67, "mat-option", 32);
      \u0275\u0275text(68, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-option", 32);
      \u0275\u0275text(70, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 32);
      \u0275\u0275text(72, "\u20AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-option", 32);
      \u0275\u0275text(74, "\u20B9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 20)(76, "div", 34)(77, "div", 35)(78, "div", 36);
      \u0275\u0275element(79, "input", 37);
      \u0275\u0275elementStart(80, "label", 38);
      \u0275\u0275text(81, "Enable Tax");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div")(83, "a", 39)(84, "span", 40);
      \u0275\u0275element(85, "i", 41);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(86, "div", 42)(87, "div", 0)(88, "div", 14)(89, "div", 43)(90, "div", 44)(91, "h6");
      \u0275\u0275text(92, "Bill From");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 10)(94, "div", 16)(95, "label", 17);
      \u0275\u0275text(96, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-select", 45)(98, "mat-option", 32);
      \u0275\u0275text(99, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "mat-option", 32);
      \u0275\u0275text(101, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 46)(103, "div", 47)(104, "div", 48)(105, "span", 49);
      \u0275\u0275element(106, "img", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div")(108, "h6", 51);
      \u0275\u0275text(109, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 52);
      \u0275\u0275text(111, "15 Hodges Mews, HP12 3JL, United Kingdom ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 52);
      \u0275\u0275text(113, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p", 52);
      \u0275\u0275text(115, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 53);
      \u0275\u0275text(117, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(118, "div", 14)(119, "div", 43)(120, "div", 44)(121, "h6");
      \u0275\u0275text(122, "Bill To");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 10)(124, "div", 16)(125, "div", 54)(126, "label", 17);
      \u0275\u0275text(127, "Vendor Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 25);
      \u0275\u0275element(129, "i", 55);
      \u0275\u0275text(130, "Add New");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "mat-select", 45)(132, "mat-option", 32);
      \u0275\u0275text(133, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-option", 32);
      \u0275\u0275text(135, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 46)(137, "div", 47)(138, "div", 48)(139, "span");
      \u0275\u0275element(140, "img", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div")(142, "h6", 51);
      \u0275\u0275text(143, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 52);
      \u0275\u0275text(145, "299 Star Trek Drive, Florida, 32405, USA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "p", 52);
      \u0275\u0275text(147, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "p", 52);
      \u0275\u0275text(149, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 53);
      \u0275\u0275text(151, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(152, "div", 57)(153, "div", 12)(154, "h6");
      \u0275\u0275text(155, "Items & Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 0)(157, "div", 27)(158, "div", 16)(159, "h6", 51);
      \u0275\u0275text(160, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 58)(162, "div", 59);
      \u0275\u0275element(163, "input", 60);
      \u0275\u0275elementStart(164, "label", 61);
      \u0275\u0275text(165, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 59);
      \u0275\u0275element(167, "input", 62);
      \u0275\u0275elementStart(168, "label", 63);
      \u0275\u0275text(169, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(170, "div", 16)(171, "label", 17);
      \u0275\u0275text(172, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-select", 45)(174, "mat-option", 32);
      \u0275\u0275text(175, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "mat-option", 32);
      \u0275\u0275text(177, "Nike Jordon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 32);
      \u0275\u0275text(179, "Enter Product Name");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(180, "div", 64)(181, "table", 65)(182, "thead", 66)(183, "tr")(184, "th");
      \u0275\u0275text(185, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "th");
      \u0275\u0275text(187, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "th");
      \u0275\u0275text(189, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "th");
      \u0275\u0275text(191, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "th");
      \u0275\u0275text(193, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "th");
      \u0275\u0275text(195, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "th");
      \u0275\u0275text(197, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(198, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "tbody", 67)(200, "tr")(201, "td");
      \u0275\u0275element(202, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "td");
      \u0275\u0275element(204, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "td");
      \u0275\u0275element(206, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "td");
      \u0275\u0275element(208, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "td");
      \u0275\u0275element(210, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "td");
      \u0275\u0275element(212, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "td");
      \u0275\u0275element(214, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275element(215, "td");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "tr", 75)(217, "td");
      \u0275\u0275element(218, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "td");
      \u0275\u0275element(220, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "td");
      \u0275\u0275element(222, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "td");
      \u0275\u0275element(224, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "td");
      \u0275\u0275element(226, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "td");
      \u0275\u0275element(228, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "td");
      \u0275\u0275element(230, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "td")(232, "div")(233, "a", 81);
      \u0275\u0275listener("click", function AddDebitNotesComponent_Template_a_click_233_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(234, "i", 82);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(235, AddDebitNotesComponent_ng_container_235_Template, 20, 0, "ng-container", 83);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(236, "div")(237, "a", 84);
      \u0275\u0275listener("click", function AddDebitNotesComponent_Template_a_click_237_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(238, "i", 55);
      \u0275\u0275text(239, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "div", 85)(241, "div", 0)(242, "div", 86)(243, "div", 16)(244, "h6", 16);
      \u0275\u0275text(245, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div")(247, "ul", 87)(248, "li", 88)(249, "a", 89);
      \u0275\u0275element(250, "i", 90);
      \u0275\u0275text(251, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "li", 88)(253, "a", 91);
      \u0275\u0275element(254, "i", 92);
      \u0275\u0275text(255, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "li", 93)(257, "a", 94);
      \u0275\u0275element(258, "i", 95);
      \u0275\u0275text(259, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(260, "div", 96)(261, "div", 97)(262, "label", 17);
      \u0275\u0275text(263, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(264, "textarea", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div", 99)(266, "label", 17);
      \u0275\u0275text(267, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(268, "textarea", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "div", 100)(270, "label", 17);
      \u0275\u0275text(271, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "mat-select", 45)(273, "mat-option", 32);
      \u0275\u0275text(274, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "mat-option", 32);
      \u0275\u0275text(276, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "mat-option", 32);
      \u0275\u0275text(278, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "mat-option", 32);
      \u0275\u0275text(280, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "mat-option", 32);
      \u0275\u0275text(282, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "mat-option", 32);
      \u0275\u0275text(284, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(285, "div", 101)(286, "ul", 102)(287, "li", 16)(288, "div", 54)(289, "p", 103);
      \u0275\u0275text(290, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "h6", 104);
      \u0275\u0275text(292, "$ 565");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(293, "li", 16)(294, "div", 54)(295, "p", 103);
      \u0275\u0275text(296, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "h6", 104);
      \u0275\u0275text(298, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(299, "li", 16)(300, "div", 54)(301, "p", 103);
      \u0275\u0275text(302, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "h6", 104);
      \u0275\u0275text(304, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(305, "li", 16)(306, "a", 25);
      \u0275\u0275element(307, "i", 55);
      \u0275\u0275text(308, "Add Additional Charges");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "li", 16)(310, "div", 54)(311, "p", 103);
      \u0275\u0275text(312, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "div")(314, "mat-select", 45)(315, "mat-option", 32);
      \u0275\u0275text(316, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "mat-option", 32);
      \u0275\u0275text(318, "0 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "mat-option", 32);
      \u0275\u0275text(320, "1 %");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(321, "li", 105)(322, "div", 106)(323, "div", 35)(324, "div", 36);
      \u0275\u0275element(325, "input", 107);
      \u0275\u0275elementStart(326, "label", 108);
      \u0275\u0275text(327, "Round Off Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(328, "div")(329, "h6", 104);
      \u0275\u0275text(330, "$596");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(331, "li", 109)(332, "div", 54)(333, "h6");
      \u0275\u0275text(334, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "h6");
      \u0275\u0275text(336, "$ 596");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "li", 109)(338, "h6", 110);
      \u0275\u0275text(339, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "p");
      \u0275\u0275text(341, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "li", 111)(343, "div")(344, "mat-select", 45)(345, "mat-option", 32);
      \u0275\u0275text(346, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "mat-option", 32);
      \u0275\u0275text(348, "Adrian");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(349, "li", 16)(350, "div", 112);
      \u0275\u0275text(351, " OR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "li", 113)(353, "div", 16)(354, "label", 17);
      \u0275\u0275text(355, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(356, "input", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "li")(358, "div", 115)(359, "div", 116);
      \u0275\u0275element(360, "i", 117);
      \u0275\u0275text(361, "Upload Image ");
      \u0275\u0275element(362, "input", 118);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(363, "div", 119)(364, "button", 120);
      \u0275\u0275text(365, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "button", 121);
      \u0275\u0275text(367, "Create New");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.debitNoteList);
      \u0275\u0275advance(211);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.trash ? "none" : ""));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgStyle, FormsModule, RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddDebitNotesComponent, [{
    type: Component,
    args: [{ selector: "app-add-debit-notes", imports: [MatSelectModule, CommonModule, FormsModule, RouterLink, BsDatepickerModule], template: `  <!-- start row -->
  <div class="row">
    <div class="col-md-11 mx-auto">

        <!-- Start Breadcrumb -->
        <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
            <div>
                <h6><a [routerLink]="routes.debitNoteList" class="d-flex align-items-center "><i
                            class="isax isax-arrow-left me-2"></i>Debit Note</a></h6>
            </div>
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
                <div class="me-1">
                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center">
                        <i class="isax isax-eye me-1"></i>Preview
                    </a>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->

        <div class="card">
            <div class="card-body">
                <div class="top-content">
                    <div class="purchase-header mb-3">
                        <h6>Purchase Order Details</h6>
                    </div>
                    <div>

                        <!-- start row -->
                        <div class="row justify-content-between">
                            <div class="col-md-6">
                                <div class="purchase-top-content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Debit Note Id</label>
                                                <input type="text" class="form-control" placeholder="9876543" readonly="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Reference Number</label>
                                                <input type="text" class="form-control" value="1254569">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="form-label">Debit Note Date</label>
                                            <div class="input-group position-relative mb-3">
                                                <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker placeholder="25 Mar 2025">
                                                <span class="input-icon-addon fs-16 text-gray-9">
                                                    <i class="isax isax-calendar-2"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);" class="d-flex align-items-center "><i
                                                    class="isax isax-add-circle5 me-1 text-primary"></i>Add
                                                Due Date</a>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- end col -->
                            <div class="col-md-4">
                                <div class="purchase-top-content">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <div class="logo-image">
                                                    <img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
                                                    <img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <mat-select class="custom-mat-select select" placeholder="Select Status">
                                                    <mat-option value="1">Select Status</mat-option>
                                                    <mat-option value="1">Paid</mat-option>
                                                    <mat-option value="1">Pending</mat-option>
                                                    <mat-option value="1">Cancelled</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <mat-select class="custom-mat-select select" placeholder="Currency">
                                                    <mat-option value="1">Currency</mat-option>
                                                    <mat-option value="1">$</mat-option>
                                                    <mat-option value="1">\u20AC</mat-option>
                                                    <mat-option value="1">\u20B9</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="p-2 border rounded d-flex justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <div class="form-check form-switch me-4">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="enabe_tax" checked>
                                                        <label class="form-check-label" for="enabe_tax">Enable Tax</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"><span
                                                            class="bg-primary-subtle p-1 rounded"><i
                                                                class="isax isax-setting-2 text-primary"></i></span></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div><!-- end col -->
                        </div>
                        <!-- end row -->

                    </div>
                </div>
                <div class="bill-content pb-0">

                    <!-- start row -->
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card box-shadow-0">
                                <div class="card-header border-0 pb-0">
                                    <h6>Bill From</h6>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">Billed By</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Kanakku</mat-option>
                                        </mat-select>
                                    </div>
                                    <div class="p-3 bg-light rounded border">
                                        <div class="d-flex">
                                            <div class="me-3">
                                                <span class="p-2 rounded border"><img
                                                        src="assets/img/logo-small.svg" alt="image"
                                                        class="img-fluid"></span>
                                            </div>
                                            <div>
                                                <h6 class="fs-14 mb-1">Kanakku Invoice Management</h6>
                                                <p class="mb-0">15 Hodges Mews, HP12 3JL, United Kingdom
                                                </p>
                                                <p class="mb-0">Phone : +1 54664 75945</p>
                                                <p class="mb-0">Email : info&#64;example.com</p>
                                                <p class="text-dark mb-0">GST : 243E45767889</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div><!-- end col -->
                        <div class="col-md-6">
                            <div class="card box-shadow-0">
                                <div class="card-header border-0 pb-0">
                                    <h6>Bill To</h6>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <label class="form-label">Vendor Name</label>
                                            <a href="javascript:void(0);" class="d-flex align-items-center"><i
                                                    class="isax isax-add-circle5 text-primary me-1"></i>Add
                                                New</a>
                                        </div>

                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Timesquare Tech</mat-option>
                                        </mat-select>
                                    </div>
                                    <div class="p-3 bg-light rounded border">
                                        <div class="d-flex">
                                            <div class="me-3">
                                                <span><img src="assets/img/icons/timesquare-icon.svg"
                                                        alt="image" class="img-fluid rounded"></span>
                                            </div>
                                            <div>
                                                <h6 class="fs-14 mb-1">Timesquare Tech</h6>
                                                <p class="mb-0">299 Star Trek Drive, Florida, 32405, USA
                                                </p>
                                                <p class="mb-0">Phone : +1 54664 75945</p>
                                                <p class="mb-0">Email : info&#64;example.com</p>
                                                <p class="text-dark mb-0">GST : 243E45767889</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div><!-- end col -->
                    </div>
                    <!-- end row -->

                </div>
                <div class="items-details">
                    <div class="purchase-header mb-3">
                        <h6>Items & Details</h6>
                    </div>

                    <!-- start row -->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-3">
                                <h6 class="fs-14 mb-1">Item Type</h6>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Product
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Service
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Products/Services</label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Nike Jordon</mat-option>
                                    <mat-option value="1">Enter Product Name</mat-option>
                                </mat-select>
                            </div>

                        </div><!-- end col -->
                    </div>
                    <!-- end row -->

                    <!-- Table list start -->
                    <div class="table-responsive rounded border-bottom-0 border mb-3">
                        <table class="table table-nowrap add-table mb-0">
                            <thead class="table-dark">
                                <tr>
                                    <th>Product/Service</th>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    <th>Rate</th>
                                    <th>Discount</th>
                                    <th>Tax (%)</th>
                                    <th>Amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody class="add-tbody">
                                <tr>
                                    <td>
                                        <input type="text" class="form-control" value="Nike Jordon">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="1" style="min-width: 66px;">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="Pcs" style="min-width: 66px;">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="$1360.00" style="min-width: 66px;">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="0%" style="min-width: 66px;">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="18" style="min-width: 66px;">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="$1358.00" style="min-width: 66px;">
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr [ngStyle]="{'display':trash?'none':''}">
                                    <td>
                                        <input type="text" class="form-control" value="Enter Product Name">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="0">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="Unit">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="0">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="0%">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="0">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" value="0" style="min-width: 66px;">
                                    </td>
                                    <td>
                                        <div>
                                            <a href="javascript:void(0);" class="text-danger remove-table" (click)="isTrash()"><i class="isax isax-close-circle"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <ng-container  *ngFor="let item of formData; let i = index; trackBy: trackByIndex">
                                    <tr>
                                        <td>
                                            <input type="text" class="form-control" value="Enter Product Name">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" value="0">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" value="Unit">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" value="0">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" value="0%">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" value="0">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" value="0" style="min-width: 66px;">
                                        </td>
                                        <td>
                                            <div>
                                                <a href="javascript:void(0);" class="text-danger remove-table" (click)="removeRow(i)"><i class="isax isax-close-circle"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                </ng-container>
                            </tbody>
                        </table>
                    </div>
                    <!-- Table list end -->

                    <div>
                        <a href="javascript:void(0);" class="d-inline-flex align-items-center add-invoice-data" (click)="addNewRow()"><i class="isax isax-add-circle5 text-primary me-1"></i>Add New</a>
                    </div>

                </div>

                <div class="extra-info">

                    <!-- start row -->
                    <div class="row">
                        <div class="col-md-7">
                            <div class="mb-3">
                                <h6 class="mb-3">Extra Information</h6>
                                <div>
                                    <ul class="nav nav-tabs nav-solid-primary mb-3" role="tablist">
                                        <li class="nav-item me-2" role="presentation">
                                            <a class="nav-link active border fs-12 fw-semibold rounded" data-bs-toggle="tab" data-bs-target="#notes" aria-current="page" href="javascript:void(0);"><i class="isax isax-document-text me-1"></i>Add Notes</a>
                                        </li>
                                        <li class="nav-item me-2" role="presentation">
                                            <a class="nav-link border fs-12 fw-semibold rounded" data-bs-toggle="tab" data-bs-target="#terms" href="javascript:void(0);"><i class="isax isax-document me-1"></i>Add Terms & Conditions</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link border fs-12 fw-semibold rounded" data-bs-toggle="tab" data-bs-target="#bank" href="javascript:void(0);"><i class="isax isax-bank me-1"></i>Bank Details</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane active show" id="notes" role="tabpanel">
                                            <label class="form-label">Additional Notes</label>
                                            <textarea class="form-control"></textarea>
                                        </div>
                                        <div class="tab-pane fade" id="terms" role="tabpanel">
                                            <label class="form-label">Terms & Conditions</label>
                                            <textarea class="form-control"></textarea>
                                        </div>
                                        <div class="tab-pane fade" id="bank" role="tabpanel">
                                            <label class="form-label">Account</label>
                                            <mat-select class="custom-mat-select select" placeholder="Select">
                                                <mat-option value="1">Select</mat-option>
                                                <mat-option value="1">Andrew - 5225655545555454 (Swiss Bank)</mat-option>
                                                <mat-option value="1">Mark Salween - 4654145644566 (International Bank)</mat-option>
                                                <mat-option value="1">Sophia Martinez - 7890123456789012 (Global Finance)</mat-option>
                                                <mat-option value="1">David Chen - 2345678901234567 (National Bank)</mat-option>
                                                <mat-option value="1">Emily Johnson - 3456789012345678 (Community Credit Union)</mat-option>
                                            </mat-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end col -->
                        <div class="col-md-5">
                            <ul class="mb-0 ps-0 list-unstyled">
                                <li class="mb-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="fw-semibold fs-14 text-gray-9 mb-0">Amount</p>
                                        <h6 class="fs-14">$ 565</h6>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="fw-semibold fs-14 text-gray-9 mb-0">CGST (9%)</p>
                                        <h6 class="fs-14">$18</h6>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="fw-semibold fs-14 text-gray-9 mb-0">SGST (9%)</p>
                                        <h6 class="fs-14">$18</h6>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <a href="javascript:void(0);" class="d-flex align-items-center "><i class="isax isax-add-circle5 text-primary me-1"></i>Add Additional Charges</a>
                                </li>
                                <li class="mb-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="fw-semibold fs-14 text-gray-9 mb-0">Discount</p>
                                        <div>
                                            <mat-select class="custom-mat-select select" placeholder="Select">
                                                <mat-option value="1">Select</mat-option>
                                                <mat-option value="1">0 %</mat-option>
                                                <mat-option value="1">1 %</mat-option>
                                            </mat-select>
                                        </div>
                                    </div>
                                </li>
                                <li class="pb-2 border-gray border-bottom">
                                    <div class="p-2 d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check form-switch me-4">
                                                <input class="form-check-input" type="checkbox" role="switch" id="enabe_tax1" checked>
                                                <label class="form-check-label" for="enabe_tax1">Round Off Total</label>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="fs-14">$596</h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="mt-3 pb-3 border-bottom border-gray">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h6>Total (USD)</h6>
                                        <h6>$ 596</h6>
                                    </div>
                                </li>
                                <li class="mt-3 pb-3 border-bottom border-gray">
                                    <h6 class="fs-14 fw-semibold">Total In Words</h6>
                                    <p>Five Hundred & Ninety Six Dollars</p>
                                </li>
                                <li class="mt-3 mb-3">
                                    <div>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select Signature</mat-option>
                                            <mat-option value="1">Adrian</mat-option>
                                        </mat-select>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="d-flex align-items-center justify-content-center">
                                        OR
                                    </div>

                                </li>
                                <li class="mb-2">
                                    <div class="mb-3">
                                        <label class="form-label">Signature Name</label>
                                        <input type="text" class="form-control" value="Adrian">
                                    </div>
                                </li>
                                <li>
                                    <div class="singnature-upload bg-light d-flex align-items-center justify-content-center">
                                        <div class="drag-upload-btn bg-light position-relative mb-2 fs-14 fw-normal text-gray-5">
                                            <i class="isax isax-image me-1 text-primary"></i>Upload Image
                                            <input type="file" class="form-control image-sign" multiple="">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div><!-- end col -->
                    </div>
                    <!-- end row -->

                </div>
            </div><!-- end card body -->

            <div class=" card-footer d-flex align-items-center justify-content-between">
                <button type="button" class="btn btn-outline-white">Cancel</button>
                <button type="submit" class="btn btn-primary">Create New</button>
            </div><!-- end card footer -->
        </div><!-- end card -->
    </div><!-- end col -->
</div>
<!-- end row -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddDebitNotesComponent, { className: "AddDebitNotesComponent", filePath: "src/app/features/purchases/debit-notes/add-debit-notes/add-debit-notes.component.ts", lineNumber: 15 });
})();
export {
  AddDebitNotesComponent
};
//# sourceMappingURL=chunk-DVF2COFE.js.map
