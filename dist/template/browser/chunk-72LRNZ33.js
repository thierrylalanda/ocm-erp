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
import "./chunk-BLAAMQ2R.js";
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

// src/app/features/invantory-sales/invoices/edit-invoice/edit-invoice.component.ts
var _c0 = (a0) => ({ "display": a0 });
function EditInvoiceComponent_ng_container_259_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td");
    \u0275\u0275element(3, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "input", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "input", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "input", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div")(18, "a", 86);
    \u0275\u0275listener("click", function EditInvoiceComponent_ng_container_259_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 87);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var EditInvoiceComponent = class _EditInvoiceComponent {
  routes = routes;
  trash = true;
  isTrash() {
    this.trash = false;
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
  static \u0275fac = function EditInvoiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditInvoiceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditInvoiceComponent, selectors: [["app-edit-invoice"]], decls: 382, vars: 7, consts: [[1, "row"], [1, "col-md-11", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], [1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "border-bottom", "mb-3", "pb-1"], [1, "row", "justify-content-between"], [1, "col-xl-5", "col-lg-7"], [1, "row", "gx-3"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "placeholder", "1254569", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-lg-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "col-md-12"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2", "mb-3"], [1, "form-check", "form-switch", "me-4"], ["type", "checkbox", "role", "switch", "id", "require_check", "checked", "", 1, "form-check-input"], ["for", "require_check", 1, "form-check-label"], [1, "d-flex", "align-items-center", "flex-fill"], [1, "flex-fill", "me-3"], ["placeholder", "Monthly", 1, "custom-mat-select", "select"], ["value", "1"], [1, "flex-fill"], ["placeholder", "1 Month", 1, "custom-mat-select", "select"], [1, "col-xl-4", "col-lg-5"], [1, "border", "border-dashed", "bg-light", "rounded", "text-center", "p-3", "mb-3"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], ["placeholder", "Paid", 1, "custom-mat-select", "select"], ["placeholder", "Dollar", 1, "custom-mat-select", "select"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "rounded", "p-2", "mb-3"], ["type", "checkbox", "role", "switch", "id", "enabe_tax", "checked", "", 1, "form-check-input"], ["for", "enabe_tax", 1, "form-check-label"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "btn-soft-primary"], [1, "isax", "isax-setting-2", "text-primary", "fs-16"], [1, "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "card", "shadow-none"], ["placeholder", "Select", 1, "custom-mat-select", "select"], [1, "bg-light", "border", "rounded", "p-3", "d-flex", "align-items-start"], [1, "avatar", "avatar-lg", "border", "flex-shrink-0", "me-3"], ["src", "assets/img/logo-small.svg", "alt", ""], [1, "fs-14", "fw-semibold", "mb-1"], [1, "mb-1", "fs-13"], [1, "text-dark", "fs-13"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "avatar", "avatar-lg", "border", "bg-dark", "flex-shrink-0", "me-3"], ["src", "assets/img/icons/black-icon.png", "alt", ""], [1, "border-bottom", "mb-3", "pb-3"], [1, "col-xl-4", "col-md-6"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "table-responsive", "rounded", "border-bottom-0", "border", "mb-3"], [1, "table", "table-nowrap", "add-table", "m-0"], [1, "thead-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "0%", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [1, "isax", "isax-close-circle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void();", 1, "d-inline-flex", "align-items-center", "add-invoice-data", 3, "click"], [1, "col-lg-7"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-style-1", "border-0", "p-0", "d-flex", "flex-wrap", "row-gap-3"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold"], [1, "isax", "isax-document", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], ["placeholder", "Andrew - 5225655545555454 (Swiss Bank)", 1, "custom-mat-select", "select"], [1, "col-lg-5"], [1, "fs-14", "fw-semibold"], ["type", "text", "value", "0%", 1, "form-control", 2, "width", "106px"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], ["type", "checkbox", "role", "switch", "id", "require_check_2", "checked", "", 1, "form-check-input"], ["for", "require_check_2", 1, "form-check-label"], ["placeholder", "Select Signature", 1, "custom-mat-select", "select"], [1, "mb-0", "text-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "file-upload", "drag-file", "w-100", "h-auto", "py-3", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "d-block"], [1, "isax", "isax-image", "text-primary", "me-1"], ["type", "file", "accept", "video/image"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditInvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Invoice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "h6", 9);
      \u0275\u0275text(14, "Invoice Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form")(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 9)(22, "label", 15);
      \u0275\u0275text(23, "Invoice Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 14)(26, "div", 9)(27, "label", 15);
      \u0275\u0275text(28, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 19);
      \u0275\u0275element(32, "input", 20);
      \u0275\u0275elementStart(33, "span", 21);
      \u0275\u0275element(34, "i", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 9)(37, "a", 24);
      \u0275\u0275element(38, "i", 25);
      \u0275\u0275text(39, "Add Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 23)(41, "div", 26)(42, "div", 27);
      \u0275\u0275element(43, "input", 28);
      \u0275\u0275elementStart(44, "label", 29);
      \u0275\u0275text(45, "Recurring");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 30)(47, "div", 31)(48, "mat-select", 32)(49, "mat-option", 33);
      \u0275\u0275text(50, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "mat-option", 33);
      \u0275\u0275text(52, "Weekly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "mat-option", 33);
      \u0275\u0275text(54, "Yearly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 34)(56, "mat-select", 35)(57, "mat-option", 33);
      \u0275\u0275text(58, "1 Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 33);
      \u0275\u0275text(60, "1 Week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "mat-option", 33);
      \u0275\u0275text(62, "1 Year");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(63, "div", 36)(64, "div", 0)(65, "div", 18)(66, "div", 37);
      \u0275\u0275element(67, "img", 38)(68, "img", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 18)(70, "div", 13)(71, "div", 14)(72, "div", 9)(73, "mat-select", 40)(74, "mat-option", 33);
      \u0275\u0275text(75, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-option", 33);
      \u0275\u0275text(77, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "mat-option", 33);
      \u0275\u0275text(79, "Unpaid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "mat-option", 33);
      \u0275\u0275text(81, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "mat-option", 33);
      \u0275\u0275text(83, "Partially Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "mat-option", 33);
      \u0275\u0275text(85, "Uncollectable");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "div", 14)(87, "div", 9)(88, "mat-select", 41)(89, "mat-option", 33);
      \u0275\u0275text(90, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "mat-option", 33);
      \u0275\u0275text(92, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "mat-option", 33);
      \u0275\u0275text(94, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "mat-option", 33);
      \u0275\u0275text(96, "Yen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-option", 33);
      \u0275\u0275text(98, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "mat-option", 33);
      \u0275\u0275text(100, "Rupee");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(101, "div", 23)(102, "div", 42)(103, "div", 27);
      \u0275\u0275element(104, "input", 43);
      \u0275\u0275elementStart(105, "label", 44);
      \u0275\u0275text(106, "Enable Tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div")(108, "a", 45);
      \u0275\u0275element(109, "i", 46);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(110, "div", 47)(111, "div", 0)(112, "div", 48)(113, "div", 49)(114, "div", 8)(115, "h6", 9);
      \u0275\u0275text(116, "Bill From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 9)(118, "label", 15);
      \u0275\u0275text(119, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "mat-select", 50)(121, "mat-option", 33);
      \u0275\u0275text(122, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "mat-option", 33);
      \u0275\u0275text(124, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "div", 51)(126, "span", 52);
      \u0275\u0275element(127, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div")(129, "h6", 54);
      \u0275\u0275text(130, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "p", 55);
      \u0275\u0275text(132, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "p", 55);
      \u0275\u0275text(134, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "p", 55);
      \u0275\u0275text(136, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "p", 56);
      \u0275\u0275text(138, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(139, "div", 48)(140, "div", 49)(141, "div", 8)(142, "h6", 9);
      \u0275\u0275text(143, "Bill To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div")(145, "div", 57)(146, "label", 15);
      \u0275\u0275text(147, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "a", 24);
      \u0275\u0275element(149, "i", 25);
      \u0275\u0275text(150, "Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 9)(152, "mat-select", 50)(153, "mat-option", 33);
      \u0275\u0275text(154, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "mat-option", 33);
      \u0275\u0275text(156, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "div", 51)(158, "span", 58);
      \u0275\u0275element(159, "img", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div")(161, "h6", 54);
      \u0275\u0275text(162, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "p", 55);
      \u0275\u0275text(164, "299 Star Trek Drive, Florida, 32405, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "p", 55);
      \u0275\u0275text(166, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p", 55);
      \u0275\u0275text(168, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "p", 56);
      \u0275\u0275text(170, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(171, "div", 60)(172, "div", 0)(173, "div", 61)(174, "h6", 9);
      \u0275\u0275text(175, "Items & Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div")(177, "label", 15);
      \u0275\u0275text(178, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 62)(180, "div", 63);
      \u0275\u0275element(181, "input", 64);
      \u0275\u0275elementStart(182, "label", 65);
      \u0275\u0275text(183, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 66);
      \u0275\u0275element(185, "input", 67);
      \u0275\u0275elementStart(186, "label", 68);
      \u0275\u0275text(187, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(188, "div", 9)(189, "label", 15);
      \u0275\u0275text(190, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "mat-select", 50)(192, "mat-option", 33);
      \u0275\u0275text(193, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "mat-option", 33);
      \u0275\u0275text(195, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "mat-option", 33);
      \u0275\u0275text(197, "Dell XPS 13 9310");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "mat-option", 33);
      \u0275\u0275text(199, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "mat-option", 33);
      \u0275\u0275text(201, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "mat-option", 33);
      \u0275\u0275text(203, "Adidas Ultraboost ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(204, "div", 69)(205, "table", 70)(206, "thead", 71)(207, "tr")(208, "th");
      \u0275\u0275text(209, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "th");
      \u0275\u0275text(211, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "th");
      \u0275\u0275text(213, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "th");
      \u0275\u0275text(215, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "th");
      \u0275\u0275text(217, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "th");
      \u0275\u0275text(219, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "th");
      \u0275\u0275text(221, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(222, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "tbody", 72)(224, "tr")(225, "td");
      \u0275\u0275element(226, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "td");
      \u0275\u0275element(228, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "td");
      \u0275\u0275element(230, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "td");
      \u0275\u0275element(232, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "td");
      \u0275\u0275element(234, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "td");
      \u0275\u0275element(236, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "td");
      \u0275\u0275element(238, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275element(239, "td");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "tr", 80)(241, "td");
      \u0275\u0275element(242, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "td");
      \u0275\u0275element(244, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "td");
      \u0275\u0275element(246, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "td");
      \u0275\u0275element(248, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "td");
      \u0275\u0275element(250, "input", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "td");
      \u0275\u0275element(252, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "td");
      \u0275\u0275element(254, "input", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "td")(256, "div")(257, "a", 86);
      \u0275\u0275listener("click", function EditInvoiceComponent_Template_a_click_257_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(258, "i", 87);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(259, EditInvoiceComponent_ng_container_259_Template, 20, 0, "ng-container", 88);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(260, "div")(261, "a", 89);
      \u0275\u0275listener("click", function EditInvoiceComponent_Template_a_click_261_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(262, "i", 25);
      \u0275\u0275text(263, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(264, "div", 47)(265, "div", 0)(266, "div", 90)(267, "div", 9)(268, "h6", 9);
      \u0275\u0275text(269, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div")(271, "ul", 91)(272, "li", 92)(273, "a", 93);
      \u0275\u0275element(274, "i", 94);
      \u0275\u0275text(275, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li", 92)(277, "a", 95);
      \u0275\u0275element(278, "i", 96);
      \u0275\u0275text(279, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "li", 92)(281, "a", 97);
      \u0275\u0275element(282, "i", 98);
      \u0275\u0275text(283, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(284, "div", 99)(285, "div", 100)(286, "label", 15);
      \u0275\u0275text(287, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(288, "textarea", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "div", 102)(290, "label", 15);
      \u0275\u0275text(291, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(292, "textarea", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "div", 103)(294, "label", 15);
      \u0275\u0275text(295, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "mat-select", 104)(297, "mat-option", 33);
      \u0275\u0275text(298, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "mat-option", 33);
      \u0275\u0275text(300, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "mat-option", 33);
      \u0275\u0275text(302, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "mat-option", 33);
      \u0275\u0275text(304, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "mat-option", 33);
      \u0275\u0275text(306, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "mat-option", 33);
      \u0275\u0275text(308, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(309, "div", 105)(310, "div", 9)(311, "div", 2)(312, "h6", 106);
      \u0275\u0275text(313, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "h6", 106);
      \u0275\u0275text(315, "$565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "div", 2)(317, "h6", 106);
      \u0275\u0275text(318, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "h6", 106);
      \u0275\u0275text(320, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(321, "div", 2)(322, "h6", 106);
      \u0275\u0275text(323, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "h6", 106);
      \u0275\u0275text(325, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "div", 9)(327, "a", 24);
      \u0275\u0275element(328, "i", 25);
      \u0275\u0275text(329, "Add Additional Charges ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "div", 2)(331, "h6", 106);
      \u0275\u0275text(332, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(333, "input", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "div", 108)(335, "div", 27);
      \u0275\u0275element(336, "input", 109);
      \u0275\u0275elementStart(337, "label", 110);
      \u0275\u0275text(338, "Round Off Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "h6", 106);
      \u0275\u0275text(340, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "div", 108)(342, "h6");
      \u0275\u0275text(343, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "h6");
      \u0275\u0275text(345, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "div", 60)(347, "h6", 54);
      \u0275\u0275text(348, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "p");
      \u0275\u0275text(350, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "div", 9)(352, "div", 9)(353, "mat-select", 111)(354, "mat-option", 33);
      \u0275\u0275text(355, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "mat-option", 33);
      \u0275\u0275text(357, "Adrian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "mat-option", 33);
      \u0275\u0275text(359, "Emily Clark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "mat-option", 33);
      \u0275\u0275text(361, "John Carter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "mat-option", 33);
      \u0275\u0275text(363, "Michael Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "mat-option", 33);
      \u0275\u0275text(365, "Olivia Harris");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(366, "p", 112);
      \u0275\u0275text(367, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(368, "div", 113)(369, "label", 15);
      \u0275\u0275text(370, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(371, "input", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "div", 115)(373, "span", 116);
      \u0275\u0275element(374, "i", 117);
      \u0275\u0275text(375, "Upload Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275element(376, "input", 118);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(377, "div", 57)(378, "button", 119);
      \u0275\u0275text(379, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "button", 120);
      \u0275\u0275text(381, "Save");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(232);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, ctx.trash ? "" : "none"));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, CommonModule, NgForOf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditInvoiceComponent, [{
    type: Component,
    args: [{ selector: "app-edit-invoice", imports: [MatSelectModule, BsDatepickerModule, CommonModule, RouterLink], template: ` <!-- start row -->
 <div class="row">
    <div class="col-md-11 mx-auto">
        <div>
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h6><a [routerLink]="routes.invoiceList"><i class="isax isax-arrow-left me-2"></i>Invoice</a></h6>
                <a [routerLink]="routes.invoiceDetails" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>
            </div>
            <div class="card">
                <div class="card-body">
                    <h6 class="mb-3">Invoice Details</h6>
                    <form>
                        <div class="border-bottom mb-3 pb-1">

                            <!-- start row -->
                            <div class="row justify-content-between">
                                <div class="col-xl-5 col-lg-7">
                                    <div class="row gx-3">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Invoice Number</label>
                                                <input type="text" class="form-control" placeholder="1254569" readonly="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Reference Number</label>
                                                <input type="text" class="form-control" value="1254569">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-group position-relative mb-3">
                                                <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker placeholder="25 Mar 2025">
                                                <span class="input-icon-addon fs-16 text-gray-9">
                                                    <i class="isax isax-calendar-2"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="isax isax-add-circle5 text-primary me-1"></i>Add Due Date</a>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="d-flex align-items-center flex-wrap gap-2 mb-3">
                                                <div class="form-check form-switch me-4">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="require_check" checked>
                                                    <label class="form-check-label" for="require_check">Recurring</label>
                                                </div>
                                                <div class="d-flex align-items-center flex-fill">
                                                    <div class="flex-fill me-3">
                                                        <mat-select class="custom-mat-select select" placeholder="Monthly">
                                                            <mat-option value="1">Monthly</mat-option>
                                                            <mat-option value="1">Weekly</mat-option>
                                                            <mat-option value="1">Yearly</mat-option>
                                                        </mat-select>
                                                    </div>
                                                    <div class="flex-fill">
                                                        <mat-select class="custom-mat-select select" placeholder="1 Month">
                                                            <mat-option value="1">1 Month</mat-option>
                                                            <mat-option value="1">1 Week</mat-option>
                                                            <mat-option value="1">1 Year</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- end col -->
                                <div class="col-xl-4 col-lg-5">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="border border-dashed bg-light rounded text-center p-3 mb-3">
                                                <img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
												<img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="row gx-3">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <mat-select class="custom-mat-select select" placeholder="Paid">
                                                            <mat-option value="1">Select Status</mat-option>
                                                            <mat-option value="1">Paid</mat-option>
                                                            <mat-option value="1">Unpaid</mat-option>
                                                            <mat-option value="1">Cancelled</mat-option>
                                                            <mat-option value="1">Partially Paid</mat-option>
                                                            <mat-option value="1">Uncollectable</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <mat-select class="custom-mat-select select" placeholder="Dollar">
                                                            <mat-option value="1">Currency</mat-option>
                                                            <mat-option value="1">Dollar</mat-option>
                                                            <mat-option value="1">Euro</mat-option>
                                                            <mat-option value="1">Yen</mat-option>
                                                            <mat-option value="1">Pound</mat-option>
                                                            <mat-option value="1">Rupee</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="d-flex align-items-center justify-content-between border rounded p-2 mb-3">
                                                <div class="form-check form-switch me-4">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="enabe_tax" checked>
                                                    <label class="form-check-label" for="enabe_tax">Enable Tax</label>
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-soft-primary"><i class="isax isax-setting-2 text-primary fs-16"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- end col -->
                            </div>
                            <!-- end row -->

                        </div>
                        <div class="border-bottom mb-3">

                            <!-- start row -->
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card shadow-none">
                                        <div class="card-body">
                                            <h6 class="mb-3">Bill From</h6>
                                            <div class="mb-3">
                                                <label class="form-label">Billed By</label>
                                                <mat-select class="custom-mat-select select" placeholder="Select">
                                                    <mat-option value="1">Select</mat-option>
                                                    <mat-option value="1">Kanakku</mat-option>
                                                </mat-select>
                                            </div>
                                            <div class="bg-light border rounded p-3 d-flex align-items-start">
                                                <span class="avatar avatar-lg border flex-shrink-0 me-3"><img src="assets/img/logo-small.svg" alt=""></span>
                                                <div>
                                                    <h6 class="fs-14 fw-semibold mb-1">Kanakku Invoice Management</h6>
                                                    <p class="mb-1 fs-13">15 Hodges Mews, HP12 3JL, United Kingdom</p>
                                                    <p class="mb-1 fs-13">Phone : +1 54664 75945</p>
                                                    <p class="mb-1 fs-13">Email : info&#64;example.com</p>
                                                    <p class="text-dark fs-13">GST : 243E45767889</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- end col -->
                                <div class="col-lg-6">
                                    <div class="card shadow-none">
                                        <div class="card-body">
                                            <h6 class="mb-3">Bill To</h6>
                                            <div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label class="form-label">Customer Name</label>
                                                    <a href="javascript:void(0);" class="d-inline-flex align-items-center">
                                                        <i class="isax isax-add-circle5 text-primary me-1"></i>Add New
                                                    </a>
                                                </div>
                                                <div class="mb-3">
                                                    <mat-select class="custom-mat-select select" placeholder="Select">
                                                        <mat-option value="1">Select</mat-option>
                                                        <mat-option value="1">Timesquare Tech</mat-option>
                                                    </mat-select>
                                                </div>
                                                <div class="bg-light border rounded p-3 d-flex align-items-start">
                                                    <span class="avatar avatar-lg border bg-dark flex-shrink-0 me-3"><img src="assets/img/icons/black-icon.png" alt=""></span>
                                                    <div>
                                                        <h6 class="fs-14 fw-semibold mb-1">Timesquare Tech</h6>
                                                        <p class="mb-1 fs-13">299 Star Trek Drive, Florida, 32405, USA</p>
                                                        <p class="mb-1 fs-13">Phone : +1 54664 75945</p>
                                                        <p class="mb-1 fs-13">Email : info&#64;example.com</p>
                                                        <p class="text-dark fs-13">GST : 243E45767889</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- end col -->
                            </div>
                            <!-- end row -->

                        </div>
                        <div class="border-bottom mb-3 pb-3">

                            <!-- start row -->
                            <div class="row">
                                <div class="col-xl-4 col-md-6">
                                    <h6 class="mb-3">Items & Details</h6>
                                    <div>
                                        <label class="form-label">Item Type</label>
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="form-check me-3">
                                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1" checked="">
                                                <label class="form-check-label" for="Radio-sm-1">
                                                    Product
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2">
                                                <label class="form-check-label" for="Radio-sm-2">
                                                    Service
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Products/Services</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Apple iPhone 15</mat-option>
                                            <mat-option value="1">Dell XPS 13 9310</mat-option>
                                            <mat-option value="1">Bose QuietComfort 45</mat-option>
                                            <mat-option value="1">Nike Dri-FIT T-shirt</mat-option>
                                            <mat-option value="1">Adidas Ultraboost </mat-option>
                                        </mat-select>
                                    </div>
                                </div><!-- end col -->
                            </div>
                            <!-- end row -->

                            <div class="table-responsive rounded border-bottom-0 border mb-3">
                                <table class="table table-nowrap add-table m-0">
                                    <thead class="thead-dark">
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
                                        <tr [ngStyle]="{'display':trash?'':'none'}">
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
                            <div>
                                <a href="javascript:void();" class="d-inline-flex align-items-center add-invoice-data" (click)="addNewRow()"><i class="isax isax-add-circle5 text-primary me-1"></i>Add New</a>
                            </div>
                        </div>
                        <div class="border-bottom mb-3">

                            <!-- start row -->
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="mb-3">
                                        <h6 class="mb-3">Extra Information</h6>
                                        <div>
                                            <ul class="nav nav-tabs tab-style-1 border-0 p-0 d-flex flex-wrap row-gap-3" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active d-inline-flex align-items-center border fs-12 fw-semibold" data-bs-toggle="tab" data-bs-target="#notes" aria-current="page" href="javascript:void(0);"><i class="isax isax-document-text me-1"></i>Add Notes</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link d-inline-flex align-items-center border fs-12 fw-semibold" data-bs-toggle="tab" data-bs-target="#terms" href="javascript:void(0);"><i class="isax isax-document me-1"></i>Add Terms & Conditions</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link d-inline-flex align-items-center border fs-12 fw-semibold" data-bs-toggle="tab" data-bs-target="#bank" href="javascript:void(0);"><i class="isax isax-bank me-1"></i>Bank Details</a>
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
                                                    <mat-select class="custom-mat-select select" placeholder="Andrew - 5225655545555454 (Swiss Bank)">
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
                                <div class="col-lg-5">
                                    <div class="mb-3">
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6 class="fs-14 fw-semibold">Amount</h6>
                                            <h6 class="fs-14 fw-semibold">$565</h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6 class="fs-14 fw-semibold">CGST (9%)</h6>
                                            <h6 class="fs-14 fw-semibold">$18</h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6 class="fs-14 fw-semibold">SGST (9%)</h6>
                                            <h6 class="fs-14 fw-semibold">$18</h6>
                                        </div>
                                        <div class="mb-3">
                                            <a href="javascript:void(0);" class="d-inline-flex align-items-center">
                                                <i class="isax isax-add-circle5 text-primary me-1"></i>Add Additional Charges
                                            </a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6 class="fs-14 fw-semibold">Discount</h6>
                                            <input type="text" class="form-control" value="0%" style="width: 106px;">
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                            <div class="form-check form-switch me-4">
                                                <input class="form-check-input" type="checkbox" role="switch" id="require_check_2" checked="">
                                                <label class="form-check-label" for="require_check_2">Round Off Total</label>
                                            </div>
                                            <h6 class="fs-14 fw-semibold">$596</h6>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                            <h6>Total (USD)</h6>
                                            <h6>$596</h6>
                                        </div>
                                        <div class="border-bottom mb-3 pb-3">
                                            <h6 class="fs-14 fw-semibold mb-1">Total In Words</h6>
                                            <p>Five Hundred &amp; Ninety Six Dollars</p>
                                        </div>
                                        <div class="mb-3">
                                            <div class="mb-3">
                                                <mat-select class="custom-mat-select select" placeholder="Select Signature">
                                                    <mat-option value="1">Select Signature</mat-option>
                                                    <mat-option value="1">Adrian</mat-option>
                                                    <mat-option value="1">Emily Clark</mat-option>
                                                    <mat-option value="1">John Carter</mat-option>
                                                    <mat-option value="1">Michael Johnson</mat-option>
                                                    <mat-option value="1">Olivia Harris</mat-option>
                                                </mat-select>
                                            </div>
                                            <p class="mb-0 text-center">OR</p>
                                        </div>
                                        <div class="mb-2">
                                            <label class="form-label">Signature Name</label>
                                            <input type="text" class="form-control" value="Adrian">
                                        </div>
                                        <div class="file-upload drag-file w-100 h-auto py-3 d-flex align-items-center justify-content-center flex-column">
                                            <span class="upload-img d-block"><i class="isax isax-image text-primary me-1"></i>Upload Signature</span>
                                            <input type="file" accept="video/image">
                                        </div>
                                    </div>
                                </div><!-- end col -->
                            </div>
                            <!-- end row -->

                        </div>

                        <div class="d-flex align-items-center justify-content-between">
                            <button type="button" class="btn btn-outline-white">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                        
                    </form>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div>
    </div><!-- end col -->
</div>
<!-- end row -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditInvoiceComponent, { className: "EditInvoiceComponent", filePath: "src/app/features/invantory-sales/invoices/edit-invoice/edit-invoice.component.ts", lineNumber: 14 });
})();
export {
  EditInvoiceComponent
};
//# sourceMappingURL=chunk-72LRNZ33.js.map
