import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MUITGCTV.js";
import "./chunk-O6CHOV5Y.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-ZTQFL2WC.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import {
  BsDatepickerModule
} from "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import "./chunk-NAWYXTZ5.js";
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
  NgForOf,
  NgStyle
} from "./chunk-LNSVVXVJ.js";
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/quotations/edit-quotation/edit-quotation.component.ts
var _c0 = (a0) => ({ "display": a0 });
function EditQuotationComponent_ng_container_273_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function EditQuotationComponent_ng_container_273_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 79);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var EditQuotationComponent = class _EditQuotationComponent {
  routes = routes;
  trash = false;
  formData = [];
  isTrash() {
    this.trash = true;
  }
  addNewRow() {
    this.formData.push({});
  }
  removeRow(index) {
    this.formData.splice(index, 1);
  }
  trackByIndex(index, item) {
    return index;
  }
  static \u0275fac = function EditQuotationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditQuotationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditQuotationComponent, selectors: [["app-edit-quotation"]], decls: 396, vars: 6, consts: [[1, "row"], [1, "col-md-11", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "border-bottom", "mb-3", "pb-1"], [1, "row", "justify-content-between"], [1, "col-xl-5", "col-lg-7"], [1, "row", "gx-3"], [1, "col-md-12"], [1, "form-label"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio-2", "id", "Radio-sm-1", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio-2", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "col-md-6"], ["type", "text", "value", "1254569", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-lg-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["placeholder", "With GST", 1, "custom-mat-select", "select"], ["value", "1"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], [1, "col-xl-4", "col-lg-5"], [1, "border", "border-dashed", "bg-light", "rounded", "text-center", "p-3", "mb-3"], ["src", "assets/img/invoice-logo.svg", "alt", ""], ["placeholder", "Paid", 1, "custom-mat-select", "select"], ["placeholder", "Dollar", 1, "custom-mat-select", "select"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "rounded", "p-2", "mb-3"], [1, "form-check", "form-switch", "me-4"], ["type", "checkbox", "role", "switch", "id", "enabe_tax", "checked", "", 1, "form-check-input"], ["for", "enabe_tax", 1, "form-check-label"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "btn-soft-primary"], [1, "isax", "isax-setting-2", "text-primary", "fs-16"], [1, "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "card", "shadow-none"], ["placeholder", "Kanakku", 1, "custom-mat-select", "select"], [1, "bg-light", "border", "rounded", "p-3", "d-flex", "align-items-start"], [1, "avatar", "avatar-lg", "border", "flex-shrink-0", "me-3"], ["src", "assets/img/logo-small.svg", "alt", ""], [1, "fs-14", "fw-semibold", "mb-1"], [1, "mb-1", "fs-13"], [1, "text-dark", "fs-13"], [1, "d-flex", "align-items-center", "justify-content-between"], ["placeholder", "Timesquare Tech", 1, "custom-mat-select", "select"], [1, "avatar", "avatar-lg", "border", "bg-dark", "flex-shrink-0", "me-3"], ["src", "assets/img/icons/black-icon.png", "alt", ""], [1, "border-bottom", "mb-3", "pb-3"], [1, "col-xl-4", "col-md-6"], ["type", "radio", "name", "Radio", "id", "Radio-sm-3", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-3", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm-4", 1, "form-check-input"], ["for", "Radio-sm-4", 1, "form-check-label"], ["placeholder", "Lenovo 3rd Generation", 1, "custom-mat-select", "select"], [1, "table-responsive", "rounded", "table-nowrap", "border-bottom-0", "border", "mb-3"], [1, "table", "mb-0", "add-table"], [1, "table-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table"], [1, "isax", "isax-close-circle"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data"], [1, "col-lg-7"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-solid-primary", "tab-style-1", "border-0", "p-0", "d-flex", "flex-wrap", "gap-3", "mb-3"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-document", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "col-lg-5"], [1, "fs-14", "fw-semibold"], ["type", "text", "value", "0%", 1, "form-control", 2, "width", "106px"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], ["type", "checkbox", "role", "switch", "id", "require_check_2", "checked", "", 1, "form-check-input"], ["for", "require_check_2", 1, "form-check-label"], ["placeholder", "Adrian", 1, "custom-mat-select", "select"], [1, "mb-0", "text-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "file-upload", "drag-file", "w-100", "h-auto", "py-3", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "d-block"], [1, "isax", "isax-image", "text-primary", "me-1"], ["type", "file", "accept", "video/image"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditQuotationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Quotations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "h6", 9);
      \u0275\u0275text(14, "Quotation Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form")(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "label", 15);
      \u0275\u0275text(22, "Document Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 16)(24, "div", 17);
      \u0275\u0275element(25, "input", 18);
      \u0275\u0275elementStart(26, "label", 19);
      \u0275\u0275text(27, " Quotation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275element(29, "input", 21);
      \u0275\u0275elementStart(30, "label", 22);
      \u0275\u0275text(31, " Estimate ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 23)(33, "div", 9)(34, "label", 15);
      \u0275\u0275text(35, "Quotation ID");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 23)(38, "div", 9)(39, "label", 15);
      \u0275\u0275text(40, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 26)(43, "label", 15);
      \u0275\u0275text(44, "Quotation Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 27);
      \u0275\u0275element(46, "input", 28);
      \u0275\u0275elementStart(47, "span", 29);
      \u0275\u0275element(48, "i", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 26)(50, "div", 9)(51, "label", 15);
      \u0275\u0275text(52, "Create Quotation with/without GST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "mat-select", 31)(54, "mat-option", 32);
      \u0275\u0275text(55, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-option", 32);
      \u0275\u0275text(57, "With GST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 32);
      \u0275\u0275text(59, "Without GST");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 14)(61, "div", 9)(62, "a", 33);
      \u0275\u0275element(63, "i", 34);
      \u0275\u0275text(64, "Add Due Date");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "div", 35)(66, "div", 0)(67, "div", 26)(68, "div", 36);
      \u0275\u0275element(69, "img", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 26)(71, "div", 13)(72, "div", 23)(73, "div", 9)(74, "mat-select", 38)(75, "mat-option", 32);
      \u0275\u0275text(76, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "mat-option", 32);
      \u0275\u0275text(78, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "mat-option", 32);
      \u0275\u0275text(80, "Unpaid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "mat-option", 32);
      \u0275\u0275text(82, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "mat-option", 32);
      \u0275\u0275text(84, "Partially Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "mat-option", 32);
      \u0275\u0275text(86, "Uncollectable");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "div", 23)(88, "div", 9)(89, "mat-select", 39)(90, "mat-option", 32);
      \u0275\u0275text(91, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "mat-option", 32);
      \u0275\u0275text(93, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "mat-option", 32);
      \u0275\u0275text(95, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "mat-option", 32);
      \u0275\u0275text(97, "Yen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "mat-option", 32);
      \u0275\u0275text(99, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "mat-option", 32);
      \u0275\u0275text(101, "Rupee");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(102, "div", 14)(103, "div", 40)(104, "div", 41);
      \u0275\u0275element(105, "input", 42);
      \u0275\u0275elementStart(106, "label", 43);
      \u0275\u0275text(107, "Enable Tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div")(109, "a", 44);
      \u0275\u0275element(110, "i", 45);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(111, "div", 46)(112, "div", 0)(113, "div", 47)(114, "div", 48)(115, "div", 8)(116, "h6", 9);
      \u0275\u0275text(117, "Bill From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 9)(119, "label", 15);
      \u0275\u0275text(120, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "mat-select", 49)(122, "mat-option", 32);
      \u0275\u0275text(123, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "mat-option", 32);
      \u0275\u0275text(125, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 50)(127, "span", 51);
      \u0275\u0275element(128, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div")(130, "h6", 53);
      \u0275\u0275text(131, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "p", 54);
      \u0275\u0275text(133, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p", 54);
      \u0275\u0275text(135, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 54);
      \u0275\u0275text(137, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p", 55);
      \u0275\u0275text(139, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(140, "div", 47)(141, "div", 48)(142, "div", 8)(143, "h6", 9);
      \u0275\u0275text(144, "Bill To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "div")(146, "div", 56)(147, "label", 15);
      \u0275\u0275text(148, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "a", 33);
      \u0275\u0275element(150, "i", 34);
      \u0275\u0275text(151, "Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 9)(153, "mat-select", 57)(154, "mat-option", 32);
      \u0275\u0275text(155, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "mat-option", 32);
      \u0275\u0275text(157, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "div", 50)(159, "span", 58);
      \u0275\u0275element(160, "img", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div")(162, "h6", 53);
      \u0275\u0275text(163, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p", 54);
      \u0275\u0275text(165, "299 Star Trek Drive, Florida, 32405, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "p", 54);
      \u0275\u0275text(167, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "p", 54);
      \u0275\u0275text(169, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p", 55);
      \u0275\u0275text(171, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(172, "div", 60)(173, "div", 0)(174, "div", 61)(175, "h6", 9);
      \u0275\u0275text(176, "Items & Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div")(178, "label", 15);
      \u0275\u0275text(179, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 16)(181, "div", 17);
      \u0275\u0275element(182, "input", 62);
      \u0275\u0275elementStart(183, "label", 63);
      \u0275\u0275text(184, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "div", 20);
      \u0275\u0275element(186, "input", 64);
      \u0275\u0275elementStart(187, "label", 65);
      \u0275\u0275text(188, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(189, "div", 9)(190, "label", 15);
      \u0275\u0275text(191, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "mat-select", 66)(193, "mat-option", 32);
      \u0275\u0275text(194, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "mat-option", 32);
      \u0275\u0275text(196, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "mat-option", 32);
      \u0275\u0275text(198, "Lenovo 3rd Generation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "mat-option", 32);
      \u0275\u0275text(200, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "mat-option", 32);
      \u0275\u0275text(202, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "mat-option", 32);
      \u0275\u0275text(204, "Adidas Ultraboost ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(205, "div", 67)(206, "table", 68)(207, "thead", 69)(208, "tr")(209, "th");
      \u0275\u0275text(210, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "th");
      \u0275\u0275text(212, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "th");
      \u0275\u0275text(214, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "th");
      \u0275\u0275text(216, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "th");
      \u0275\u0275text(218, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "th");
      \u0275\u0275text(220, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "th");
      \u0275\u0275text(222, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(223, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "tbody", 70)(225, "tr")(226, "td");
      \u0275\u0275element(227, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "td");
      \u0275\u0275element(229, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "td");
      \u0275\u0275element(231, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "td");
      \u0275\u0275element(233, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "td")(235, "mat-select", 75)(236, "mat-option", 32);
      \u0275\u0275text(237, "0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "mat-option", 32);
      \u0275\u0275text(239, "25%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "mat-option", 32);
      \u0275\u0275text(241, "50%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "mat-option", 32);
      \u0275\u0275text(243, "75%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "mat-option", 32);
      \u0275\u0275text(245, "100%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(246, "td");
      \u0275\u0275element(247, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "td");
      \u0275\u0275element(249, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "td")(251, "div")(252, "a", 78);
      \u0275\u0275element(253, "i", 79);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(254, "tr", 80)(255, "td");
      \u0275\u0275element(256, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "td");
      \u0275\u0275element(258, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "td");
      \u0275\u0275element(260, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "td");
      \u0275\u0275element(262, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "td");
      \u0275\u0275element(264, "input", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "td");
      \u0275\u0275element(266, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "td");
      \u0275\u0275element(268, "input", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "td")(270, "div")(271, "a", 86);
      \u0275\u0275listener("click", function EditQuotationComponent_Template_a_click_271_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(272, "i", 79);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(273, EditQuotationComponent_ng_container_273_Template, 20, 0, "ng-container", 87);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(274, "div")(275, "a", 88);
      \u0275\u0275element(276, "i", 34);
      \u0275\u0275text(277, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "div", 46)(279, "div", 0)(280, "div", 89)(281, "div", 9)(282, "h6", 9);
      \u0275\u0275text(283, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "div")(285, "ul", 90)(286, "li", 91)(287, "a", 92);
      \u0275\u0275element(288, "i", 93);
      \u0275\u0275text(289, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "li", 91)(291, "a", 94);
      \u0275\u0275element(292, "i", 95);
      \u0275\u0275text(293, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "li", 91)(295, "a", 96);
      \u0275\u0275element(296, "i", 97);
      \u0275\u0275text(297, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(298, "div", 98)(299, "div", 99)(300, "label", 15);
      \u0275\u0275text(301, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(302, "textarea", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "div", 101)(304, "label", 15);
      \u0275\u0275text(305, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(306, "textarea", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "div", 102)(308, "label", 15);
      \u0275\u0275text(309, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-select", 75)(311, "mat-option", 32);
      \u0275\u0275text(312, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "mat-option", 32);
      \u0275\u0275text(314, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "mat-option", 32);
      \u0275\u0275text(316, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "mat-option", 32);
      \u0275\u0275text(318, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "mat-option", 32);
      \u0275\u0275text(320, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "mat-option", 32);
      \u0275\u0275text(322, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(323, "div", 103)(324, "div", 9)(325, "div", 2)(326, "h6", 104);
      \u0275\u0275text(327, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "h6", 104);
      \u0275\u0275text(329, "$565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "div", 2)(331, "h6", 104);
      \u0275\u0275text(332, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "h6", 104);
      \u0275\u0275text(334, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "div", 2)(336, "h6", 104);
      \u0275\u0275text(337, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "h6", 104);
      \u0275\u0275text(339, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "div", 9)(341, "a", 33);
      \u0275\u0275element(342, "i", 34);
      \u0275\u0275text(343, "Add Additional Charges ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "div", 2)(345, "h6", 104);
      \u0275\u0275text(346, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(347, "input", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "div", 106)(349, "div", 41);
      \u0275\u0275element(350, "input", 107);
      \u0275\u0275elementStart(351, "label", 108);
      \u0275\u0275text(352, "Round Off Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "h6", 104);
      \u0275\u0275text(354, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "div", 106)(356, "h6");
      \u0275\u0275text(357, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "h6");
      \u0275\u0275text(359, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "div", 60)(361, "h6", 53);
      \u0275\u0275text(362, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "p");
      \u0275\u0275text(364, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "div", 9)(366, "div", 9)(367, "mat-select", 109)(368, "mat-option", 32);
      \u0275\u0275text(369, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "mat-option", 32);
      \u0275\u0275text(371, "Adrian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "mat-option", 32);
      \u0275\u0275text(373, "Emily Clark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "mat-option", 32);
      \u0275\u0275text(375, "John Carter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "mat-option", 32);
      \u0275\u0275text(377, "Michael Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "mat-option", 32);
      \u0275\u0275text(379, "Olivia Harris");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(380, "p", 110);
      \u0275\u0275text(381, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(382, "div", 111)(383, "label", 15);
      \u0275\u0275text(384, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(385, "input", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "div", 113)(387, "span", 114);
      \u0275\u0275element(388, "i", 115);
      \u0275\u0275text(389, "Upload Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275element(390, "input", 116);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(391, "div", 56)(392, "button", 117);
      \u0275\u0275text(393, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "button", 118);
      \u0275\u0275text(395, "Save");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.quotationList);
      \u0275\u0275advance(249);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.trash ? "none" : ""));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [BsDatepickerModule, MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditQuotationComponent, [{
    type: Component,
    args: [{ selector: "app-edit-quotation", imports: [BsDatepickerModule, MatSelectModule, CommonModule, RouterLink], template: `<!-- start row -->
<div class="row">
    <div class="col-md-11 mx-auto">
        <div>
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h6><a [routerLink]="routes.quotationList"><i class="isax isax-arrow-left me-2"></i>Quotations</a></h6>
                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>
            </div>
            <div class="card">
                <div class="card-body">
                    <h6 class="mb-3">Quotation Details</h6>
                    <form>
                        <div class="border-bottom mb-3 pb-1">
                            <div class="row justify-content-between">
                                <div class="col-xl-5 col-lg-7">
                                    <div class="row gx-3">
                                        <div class="col-md-12">
                                            <label class="form-label">Document Title</label>
                                            <div class="d-flex align-items-center mb-3">
                                                <div class="form-check me-3">
                                                    <input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-1" checked="">
                                                    <label class="form-check-label" for="Radio-sm-1">
                                                        Quotation
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-2">
                                                    <label class="form-check-label" for="Radio-sm-2">
                                                        Estimate
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Quotation ID</label>
                                                <input type="text" class="form-control" value="1254569" readonly="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Reference Number</label>
                                                <input type="text" class="form-control" value="1254569">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <label class="form-label">Quotation Date</label>
                                            <div class="input-group position-relative mb-3">
                                                <input type="text" class="form-control datetimepicker rounded-end" placeholder="25 Mar 2025">
                                                <span class="input-icon-addon fs-16 text-gray-9">
                                                    <i class="isax isax-calendar-2"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label class="form-label">Create Quotation with/without GST</label>
                                                <mat-select class="custom-mat-select select" placeholder="With GST">
                                                    <mat-option value="1">Select</mat-option>
                                                    <mat-option value="1">With GST</mat-option>
                                                    <mat-option value="1">Without GST</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="isax isax-add-circle5 text-primary me-1"></i>Add Due Date</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-5">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="border border-dashed bg-light rounded text-center p-3 mb-3">
                                                <img src="assets/img/invoice-logo.svg" alt="">
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
                                </div>
                            </div>
                        </div>
                        <div class="border-bottom mb-3">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card shadow-none">
                                        <div class="card-body">
                                            <h6 class="mb-3">Bill From</h6>
                                            <div class="mb-3">
                                                <label class="form-label">Billed By</label>
                                                <mat-select class="custom-mat-select select" placeholder="Kanakku">
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
                                </div>
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
                                                    <mat-select class="custom-mat-select select" placeholder="Timesquare Tech">
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
                                </div>
                            </div>
                        </div>
                        <div class="border-bottom mb-3 pb-3">
                            <div class="row">
                                <div class="col-xl-4 col-md-6">
                                    <h6 class="mb-3">Items & Details</h6>
                                    <div>
                                        <label class="form-label">Item Type</label>
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="form-check me-3">
                                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-3" checked="">
                                                <label class="form-check-label" for="Radio-sm-3">
                                                    Product
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-4">
                                                <label class="form-check-label" for="Radio-sm-4">
                                                    Service
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Products/Services</label>
                                        <mat-select class="custom-mat-select select" placeholder="Lenovo 3rd Generation">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Apple iPhone 15</mat-option>
                                            <mat-option value="1">Lenovo 3rd Generation</mat-option>
                                            <mat-option value="1">Bose QuietComfort 45</mat-option>
                                            <mat-option value="1">Nike Dri-FIT T-shirt</mat-option>
                                            <mat-option value="1">Adidas Ultraboost </mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive rounded table-nowrap border-bottom-0 border mb-3">
                                <table class="table mb-0  add-table">
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
                                                <mat-select class="custom-mat-select select" placeholder="Select">
                                                    <mat-option value="1">0%</mat-option>
                                                    <mat-option value="1">25%</mat-option>
                                                    <mat-option value="1">50%</mat-option>
                                                    <mat-option value="1">75%</mat-option>
                                                    <mat-option value="1">100%</mat-option>
                                                </mat-select>
                                            </td>
                                            <td>
                                                <input type="text" class="form-control" value="18" style="min-width: 66px;">
                                            </td>
                                            <td>
                                                <input type="text" class="form-control" value="$1358.00" style="min-width: 66px;">
                                            </td>
                                            <td>
                                                <div>
                                                    <a href="javascript:void(0);" class="text-danger remove-table"><i class="isax isax-close-circle"></i></a>
                                                </div>
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
                            <div>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center add-invoice-data"><i class="isax isax-add-circle5 text-primary me-1"></i>Add New</a>
                            </div>
                        </div>
                        <div class="border-bottom mb-3">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="mb-3">
                                        <h6 class="mb-3">Extra Information</h6>
                                        <div>
                                            <ul class="nav nav-tabs nav-solid-primary tab-style-1 border-0 p-0 d-flex flex-wrap gap-3 mb-3" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active d-inline-flex align-items-center border fs-12 fw-semibold rounded-2" data-bs-toggle="tab" data-bs-target="#notes" aria-current="page" href="javascript:void(0);"><i class="isax isax-document-text me-1"></i>Add Notes</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link d-inline-flex align-items-center border fs-12 fw-semibold rounded-2" data-bs-toggle="tab" data-bs-target="#terms" href="javascript:void(0);"><i class="isax isax-document me-1"></i>Add Terms & Conditions</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link d-inline-flex align-items-center border fs-12 fw-semibold rounded-2" data-bs-toggle="tab" data-bs-target="#bank" href="javascript:void(0);"><i class="isax isax-bank me-1"></i>Bank Details</a>
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
                                </div>
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
                                                <mat-select class="custom-mat-select select" placeholder="Adrian">
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
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <button type="button" class="btn btn-outline-white">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
 <!-- end row -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditQuotationComponent, { className: "EditQuotationComponent", filePath: "src/app/features/invantory-sales/quotations/edit-quotation/edit-quotation.component.ts", lineNumber: 14 });
})();
export {
  EditQuotationComponent
};
//# sourceMappingURL=chunk-YHFFMENC.js.map
