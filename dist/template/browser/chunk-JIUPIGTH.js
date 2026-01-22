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
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import {
  FormsModule
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

// src/app/features/purchases/debit-notes/edit-debit-notes/edit-debit-notes.component.ts
var _c0 = (a0) => ({ "display": a0 });
function EditDebitNotesComponent_ng_container_235_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td");
    \u0275\u0275element(3, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div")(18, "a", 82);
    \u0275\u0275listener("click", function EditDebitNotesComponent_ng_container_235_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 83);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var EditDebitNotesComponent = class _EditDebitNotesComponent {
  routes = routes;
  trash = false;
  isTrash() {
    this.trash = true;
  }
  formData = [];
  // Initialize with an empty object to start with one row
  addNewRow() {
    this.formData.push({});
  }
  removeRow(index) {
    this.formData.splice(index, 1);
  }
  trackByIndex(index, item) {
    return index;
  }
  static \u0275fac = function EditDebitNotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditDebitNotesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditDebitNotesComponent, selectors: [["app-edit-debit-notes"]], decls: 363, vars: 6, consts: [[1, "row"], [1, "col-md-11", "mx-auto"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "top-content"], [1, "purchase-header", "mb-3"], [1, "col-md-6"], [1, "purchase-top-content"], [1, "mb-3"], [1, "form-label"], ["type", "text", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-md-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1", "text-primary"], [1, "logo-image"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], ["placeholder", "Paid", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "$", 1, "custom-mat-select", "select"], [1, "p-2", "border", "rounded", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-switch", "form-check-reverse", "d-flex", "align-items-center", "mb-0"], ["type", "checkbox", "role", "switch", "id", "notify", "checked", "", 1, "form-check-input"], [1, "text-gray-9"], ["href", "javascript:void(0);"], [1, "bg-primary-subtle", "p-1", "rounded"], [1, "isax", "isax-setting-2", "text-primary"], [1, "bill-content"], [1, "card", "box-shadow-0"], [1, "card-header", "border-0"], ["placeholder", "Kanakku", 1, "custom-mat-select", "select"], [1, "p-3", "bg-light", "rounded", "border"], [1, "d-flex"], [1, "me-3"], [1, "p-2", "rounded", "border"], ["src", "assets/img/logo-small.svg", "alt", "image", 1, "img-fluid"], [1, "fs-14", "mb-1"], [1, "mb-0"], [1, "text-dark", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], ["placeholder", "Timesquare Tech", 1, "custom-mat-select", "select"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "items-details"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "gap-3"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["placeholder", "Nike Jordon", 1, "custom-mat-select", "select"], [1, "table-responsive", "rounded", "border-bottom-0", "border", "mb-3"], [1, "table", "table-nowrap", "add-table", "mb-0"], [1, "thead", "bg-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "0%", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [1, "isax", "isax-close-circle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data", 3, "click"], [1, "extra-info"], [1, "col-md-7"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-solid-primary", "mb-3"], ["role", "presentation", 1, "nav-item", "me-2"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document", "me-1"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], ["placeholder", "Andrew - 5225655545555454 (Swiss Bank)", 1, "custom-mat-select", "select"], [1, "col-md-5"], [1, "mb-0", "ps-0", "list-unstyled"], [1, "fw-semibold", "fs-14", "text-gray-9", "mb-0"], [1, "fs-14"], ["placeholder", "Select", 1, "custom-mat-select", "select"], [1, "pb-3", "border-gray", "border-bottom"], [1, "p-2", "d-flex", "justify-content-between"], [1, "mt-3", "pb-3", "border-bottom", "border-gray"], [1, "fs-14", "fw-semibold"], [1, "mt-3", "mb-3"], ["placeholder", "Adrian", 1, "custom-mat-select", "select"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "singnature-upload", "bg-light", "d-flex", "align-items-center", "justify-content-center"], [1, "drag-upload-btn", "bg-light", "position-relative", "mb-2", "fs-14", "fw-normal", "text-gray-5"], [1, "isax", "isax-image", "me-1", "text-primary"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"]], template: function EditDebitNotesComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(19, "div")(20, "div", 0)(21, "div", 13)(22, "div", 14)(23, "div", 0)(24, "div", 13)(25, "div", 15)(26, "label", 16);
      \u0275\u0275text(27, "Debit Note Id");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 13)(30, "div", 15)(31, "label", 16);
      \u0275\u0275text(32, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 19)(35, "label", 16);
      \u0275\u0275text(36, "Debit Note Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 20);
      \u0275\u0275element(38, "input", 21);
      \u0275\u0275elementStart(39, "span", 22);
      \u0275\u0275element(40, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div")(42, "a", 24);
      \u0275\u0275element(43, "i", 25);
      \u0275\u0275text(44, "Add Due Date");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 13)(46, "div", 14)(47, "div", 0)(48, "div", 19)(49, "div", 15)(50, "div", 26);
      \u0275\u0275element(51, "img", 27)(52, "img", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 13)(54, "div", 15)(55, "mat-select", 29)(56, "mat-option", 30);
      \u0275\u0275text(57, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 30);
      \u0275\u0275text(59, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 30);
      \u0275\u0275text(61, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 30);
      \u0275\u0275text(63, "Cancelled");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 13)(65, "div", 15)(66, "mat-select", 31)(67, "mat-option", 30);
      \u0275\u0275text(68, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-option", 30);
      \u0275\u0275text(70, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 30);
      \u0275\u0275text(72, "\u20AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-option", 30);
      \u0275\u0275text(74, "\u20B9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 19)(76, "div", 32)(77, "div", 33)(78, "div", 34);
      \u0275\u0275element(79, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "p", 36);
      \u0275\u0275text(81, "Enable Tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div")(83, "a", 37)(84, "span", 38);
      \u0275\u0275element(85, "i", 39);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(86, "div", 40)(87, "div", 0)(88, "div", 13)(89, "div", 41)(90, "div", 42)(91, "h6");
      \u0275\u0275text(92, "Bill From");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 10)(94, "div", 15)(95, "label", 16);
      \u0275\u0275text(96, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-select", 43)(98, "mat-option", 30);
      \u0275\u0275text(99, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "mat-option", 30);
      \u0275\u0275text(101, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 44)(103, "div", 45)(104, "div", 46)(105, "span", 47);
      \u0275\u0275element(106, "img", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div")(108, "h6", 49);
      \u0275\u0275text(109, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 50);
      \u0275\u0275text(111, "15 Hodges Mews, HP12 3JL, United Kingdom ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 50);
      \u0275\u0275text(113, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p", 50);
      \u0275\u0275text(115, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 51);
      \u0275\u0275text(117, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(118, "div", 13)(119, "div", 41)(120, "div", 42)(121, "h6");
      \u0275\u0275text(122, "Bill To");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 10)(124, "div", 15)(125, "div", 52)(126, "label", 16);
      \u0275\u0275text(127, "Vendor Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 24);
      \u0275\u0275element(129, "i", 53);
      \u0275\u0275text(130, "Add New");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "mat-select", 54)(132, "mat-option", 30);
      \u0275\u0275text(133, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-option", 30);
      \u0275\u0275text(135, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 44)(137, "div", 45)(138, "div", 46)(139, "span");
      \u0275\u0275element(140, "img", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div")(142, "h6", 49);
      \u0275\u0275text(143, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 50);
      \u0275\u0275text(145, "299 Star Trek Drive, Florida, 32405, USA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "p", 50);
      \u0275\u0275text(147, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "p", 50);
      \u0275\u0275text(149, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 51);
      \u0275\u0275text(151, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(152, "div", 56)(153, "div", 12)(154, "h6");
      \u0275\u0275text(155, "Items & Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 0)(157, "div", 57)(158, "div", 15)(159, "h6", 49);
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
      \u0275\u0275elementStart(170, "div", 15)(171, "label", 16);
      \u0275\u0275text(172, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-select", 64)(174, "mat-option", 30);
      \u0275\u0275text(175, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "mat-option", 30);
      \u0275\u0275text(177, "Nike Jordon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 30);
      \u0275\u0275text(179, "Enter Product Name");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(180, "div", 65)(181, "table", 66)(182, "thead", 67)(183, "tr")(184, "th");
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
      \u0275\u0275elementStart(199, "tbody", 68)(200, "tr")(201, "td");
      \u0275\u0275element(202, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "td");
      \u0275\u0275element(204, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "td");
      \u0275\u0275element(206, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "td");
      \u0275\u0275element(208, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "td");
      \u0275\u0275element(210, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "td");
      \u0275\u0275element(212, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "td");
      \u0275\u0275element(214, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275element(215, "td");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "tr", 76)(217, "td");
      \u0275\u0275element(218, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "td");
      \u0275\u0275element(220, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "td");
      \u0275\u0275element(222, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "td");
      \u0275\u0275element(224, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "td");
      \u0275\u0275element(226, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "td");
      \u0275\u0275element(228, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "td");
      \u0275\u0275element(230, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "td")(232, "div")(233, "a", 82);
      \u0275\u0275listener("click", function EditDebitNotesComponent_Template_a_click_233_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(234, "i", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(235, EditDebitNotesComponent_ng_container_235_Template, 20, 0, "ng-container", 84);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(236, "div")(237, "a", 85);
      \u0275\u0275listener("click", function EditDebitNotesComponent_Template_a_click_237_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(238, "i", 53);
      \u0275\u0275text(239, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "div", 86)(241, "div", 0)(242, "div", 87)(243, "div", 15)(244, "h6", 15);
      \u0275\u0275text(245, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div")(247, "ul", 88)(248, "li", 89)(249, "a", 90);
      \u0275\u0275element(250, "i", 91);
      \u0275\u0275text(251, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "li", 89)(253, "a", 92);
      \u0275\u0275element(254, "i", 93);
      \u0275\u0275text(255, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "li", 94)(257, "a", 95);
      \u0275\u0275element(258, "i", 96);
      \u0275\u0275text(259, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(260, "div", 97)(261, "div", 98)(262, "label", 16);
      \u0275\u0275text(263, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "textarea", 99);
      \u0275\u0275text(265, "Please ensure all payment details are correct before processing. Late payments may incur additional fees. Contact support for queries. Keep this invoice for your records.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "div", 100)(267, "label", 16);
      \u0275\u0275text(268, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(269, "textarea", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div", 101)(271, "label", 16);
      \u0275\u0275text(272, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "mat-select", 102)(274, "mat-option", 30);
      \u0275\u0275text(275, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "mat-option", 30);
      \u0275\u0275text(277, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "mat-option", 30);
      \u0275\u0275text(279, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "mat-option", 30);
      \u0275\u0275text(281, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "mat-option", 30);
      \u0275\u0275text(283, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "mat-option", 30);
      \u0275\u0275text(285, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(286, "div", 103)(287, "ul", 104)(288, "li", 15)(289, "div", 52)(290, "p", 105);
      \u0275\u0275text(291, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "h6", 106);
      \u0275\u0275text(293, "$ 565");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(294, "li", 15)(295, "div", 52)(296, "p", 105);
      \u0275\u0275text(297, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "h6", 106);
      \u0275\u0275text(299, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(300, "li", 15)(301, "div", 52)(302, "p", 105);
      \u0275\u0275text(303, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "h6", 106);
      \u0275\u0275text(305, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(306, "li", 15)(307, "a", 24);
      \u0275\u0275element(308, "i", 53);
      \u0275\u0275text(309, "Add Additional Charges");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "li", 15)(311, "div", 52)(312, "p", 105);
      \u0275\u0275text(313, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div")(315, "mat-select", 107)(316, "mat-option", 30);
      \u0275\u0275text(317, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "mat-option", 30);
      \u0275\u0275text(319, "0 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "mat-option", 30);
      \u0275\u0275text(321, "1 %");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(322, "li", 108)(323, "div", 109)(324, "div", 33)(325, "div", 34);
      \u0275\u0275element(326, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "p", 36);
      \u0275\u0275text(328, "Round Off Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div")(330, "h6", 106);
      \u0275\u0275text(331, "$596");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(332, "li", 110)(333, "div", 52)(334, "h6");
      \u0275\u0275text(335, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "h6");
      \u0275\u0275text(337, "$ 596");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(338, "li", 110)(339, "h6", 111);
      \u0275\u0275text(340, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "p");
      \u0275\u0275text(342, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "li", 112)(344, "div")(345, "mat-select", 113)(346, "mat-option", 30);
      \u0275\u0275text(347, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "mat-option", 30);
      \u0275\u0275text(349, "Adrian");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(350, "li", 15)(351, "div", 114);
      \u0275\u0275text(352, " OR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "li", 115)(354, "div", 15)(355, "label", 16);
      \u0275\u0275text(356, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(357, "input", 116);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div", 117)(359, "div", 118);
      \u0275\u0275element(360, "i", 119);
      \u0275\u0275text(361, "Upload Image ");
      \u0275\u0275element(362, "input", 120);
      \u0275\u0275elementEnd()()()()()()()()()();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditDebitNotesComponent, [{
    type: Component,
    args: [{ selector: "app-edit-debit-notes", imports: [MatSelectModule, CommonModule, FormsModule, RouterLink, BsDatepickerModule], template: ` <!-- start row -->
 <div class="row">
    <div class="col-md-11 mx-auto">
        <!-- Page Header -->
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
        <!-- End Page Header -->

        <div class="card">
            <div class="card-body">
                <div class="top-content">
                    <div class="purchase-header mb-3">
                        <h6>Purchase Order Details</h6>
                    </div>
                    <div>

                        <!-- start row -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="purchase-top-content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Debit Note Id</label>
                                                <input type="text" class="form-control" readonly>
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
                            </div>
                            <div class="col-md-6">
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
                                                <mat-select class="custom-mat-select select" placeholder="Paid">
                                                    <mat-option value="1">Select Status</mat-option>
                                                    <mat-option value="1">Paid</mat-option>
                                                    <mat-option value="1">Pending</mat-option>
                                                    <mat-option value="1">Cancelled</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <mat-select class="custom-mat-select select" placeholder="$">
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
                                                    <div class="form-check form-switch form-check-reverse d-flex align-items-center mb-0">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="notify" checked>
                                                    </div>
                                                    <p class="text-gray-9">Enable Tax</p>
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
                            </div>
                        </div>
                        <!-- end row -->

                    </div>
                </div>
                <div class="bill-content">

                    <!-- start row -->
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card box-shadow-0">
                                <div class="card-header border-0">
                                    <h6>Bill From</h6>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">Billed By</label>
                                        <mat-select class="custom-mat-select select" placeholder="Kanakku">
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
                                <div class="card-header border-0">
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

                                        <mat-select class="custom-mat-select select" placeholder="Timesquare Tech">
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
                                <mat-select class="custom-mat-select select" placeholder="Nike Jordon">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Nike Jordon</mat-option>
                                    <mat-option value="1">Enter Product Name</mat-option>
                                </mat-select>
                            </div>

                        </div><!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="table-responsive rounded border-bottom-0 border mb-3">
                        <table class="table table-nowrap add-table mb-0">
                            <thead class="thead bg-dark">
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
                                            <textarea class="form-control">Please ensure all payment details are correct before processing. Late payments may incur additional fees. Contact support for queries. Keep this invoice for your records.</textarea>
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
                                <li class="pb-3 border-gray border-bottom">
                                    <div class="p-2  d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check form-switch form-check-reverse d-flex align-items-center mb-0">
                                                <input class="form-check-input" type="checkbox" role="switch" id="notify" checked>
                                            </div>
                                            <p class="text-gray-9">Round Off Total</p>
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
                                        <mat-select class="custom-mat-select select" placeholder="Adrian">
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
                                <div class="singnature-upload bg-light d-flex align-items-center justify-content-center">
                                    <div class="drag-upload-btn bg-light position-relative mb-2 fs-14 fw-normal text-gray-5">
                                        <i class="isax isax-image me-1 text-primary"></i>Upload Image
                                        <input type="file" class="form-control image-sign" multiple="">
                                    </div>
                                </div>
                            </ul>
                        </div><!-- end col -->
                    </div>
                    <!-- end row -->
                </div>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->
</div>
<!-- end row -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditDebitNotesComponent, { className: "EditDebitNotesComponent", filePath: "src/app/features/purchases/debit-notes/edit-debit-notes/edit-debit-notes.component.ts", lineNumber: 15 });
})();
export {
  EditDebitNotesComponent
};
//# sourceMappingURL=chunk-JIUPIGTH.js.map
