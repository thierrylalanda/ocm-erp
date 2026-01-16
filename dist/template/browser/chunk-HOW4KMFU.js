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

// src/app/features/purchases/purchases/add-purchase/add-purchase.component.ts
var _c0 = (a0) => ({ "display": a0 });
function AddPurchaseComponent_ng_container_234_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td");
    \u0275\u0275element(3, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div")(18, "a", 77);
    \u0275\u0275listener("click", function AddPurchaseComponent_ng_container_234_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 78);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var AddPurchaseComponent = class _AddPurchaseComponent {
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
  static \u0275fac = function AddPurchaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPurchaseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPurchaseComponent, selectors: [["app-add-purchase"]], decls: 367, vars: 6, consts: [[1, "row"], [1, "col-md-11", "mx-auto"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "top-content"], [1, "purchase-header", "mb-3"], [1, "col-md-6"], [1, "purchase-top-content"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "1254569", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-md-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1", "text-primary"], [1, "logo-image"], ["src", "assets/img/invoice-logo.svg", "alt", "User Img", 1, "img-fluid"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "p-2", "border", "rounded", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-switch", "me-4"], ["type", "checkbox", "role", "switch", "id", "enabe_tax", "checked", "", 1, "form-check-input"], ["for", "enabe_tax", 1, "form-check-label"], ["href", "javascript:void(0);"], [1, "bg-primary-subtle", "p-1", "rounded"], [1, "isax", "isax-setting-2", "text-primary"], [1, "bill-content", "pb-0"], [1, "card", "box-shadow-0"], [1, "card-header", "border-0", "pb-0"], [1, "p-3", "bg-light", "rounded", "border"], [1, "d-flex"], [1, "me-3"], [1, "p-2", "rounded", "border"], ["src", "assets/img/logo-small.svg", "alt", "image", 1, "img-fluid"], [1, "fs-14", "mb-1"], [1, "mb-0"], [1, "text-dark", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "items-details"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "gap-3"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "table-responsive", "rounded", "border-bottom-0", "border", "mb-3"], [1, "table", "table-nowrap", "add-table", "mb-0"], [1, "table-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "0%", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [1, "isax", "isax-close-circle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data", 3, "click"], [1, "extra-info"], [1, "col-md-7"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-solid-primary", "mb-3"], ["role", "presentation", 1, "nav-item", "me-2"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document", "me-1"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "col-md-5"], [1, "mb-0", "ps-0", "list-unstyled"], [1, "fw-semibold", "fs-14", "text-gray-9", "mb-0"], [1, "fs-14"], [1, "pb-3", "border-gray", "border-bottom"], [1, "p-2", "d-flex", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "enabe_tax1", "checked", "", 1, "form-check-input"], ["for", "enabe_tax1", 1, "form-check-label"], [1, "mt-3", "pb-3", "border-bottom", "border-gray"], [1, "fs-14", "fw-semibold"], [1, "mt-3", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "singnature-upload", "bg-light", "d-flex", "align-items-center", "justify-content-center"], [1, "drag-upload-btn", "bg-light", "position-relative", "mb-2", "fs-14", "fw-normal", "text-gray-5"], [1, "isax", "isax-image", "me-1", "text-primary"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "card-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function AddPurchaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Purchase");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "a", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, "Preview ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h6");
      \u0275\u0275text(18, "Purchase Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div")(20, "div", 0)(21, "div", 13)(22, "div", 14)(23, "div", 0)(24, "div", 13)(25, "div", 15)(26, "label", 16);
      \u0275\u0275text(27, "Purchase Id");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 13)(30, "div", 15)(31, "label", 16);
      \u0275\u0275text(32, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 19)(35, "label", 16);
      \u0275\u0275text(36, "Purchase Date");
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
      \u0275\u0275element(51, "img", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 13)(53, "div", 15)(54, "mat-select", 28)(55, "mat-option", 29);
      \u0275\u0275text(56, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-option", 29);
      \u0275\u0275text(58, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 29);
      \u0275\u0275text(60, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "mat-option", 29);
      \u0275\u0275text(62, "Cancelled");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 13)(64, "div", 15)(65, "mat-select", 28)(66, "mat-option", 29);
      \u0275\u0275text(67, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-option", 29);
      \u0275\u0275text(69, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "mat-option", 29);
      \u0275\u0275text(71, "\u20AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "mat-option", 29);
      \u0275\u0275text(73, "\u20B9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "div", 19)(75, "div", 30)(76, "div", 31)(77, "div", 32);
      \u0275\u0275element(78, "input", 33);
      \u0275\u0275elementStart(79, "label", 34);
      \u0275\u0275text(80, "Enable Tax");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div")(82, "a", 35)(83, "span", 36);
      \u0275\u0275element(84, "i", 37);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(85, "div", 38)(86, "div", 0)(87, "div", 13)(88, "div", 39)(89, "div", 40)(90, "h6");
      \u0275\u0275text(91, "Bill From");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 10)(93, "div", 15)(94, "label", 16);
      \u0275\u0275text(95, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "mat-select", 28)(97, "mat-option", 29);
      \u0275\u0275text(98, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "mat-option", 29);
      \u0275\u0275text(100, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 41)(102, "div", 42)(103, "div", 43)(104, "span", 44);
      \u0275\u0275element(105, "img", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div")(107, "h6", 46);
      \u0275\u0275text(108, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 47);
      \u0275\u0275text(110, "15 Hodges Mews, HP12 3JL, United Kingdom ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p", 47);
      \u0275\u0275text(112, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 47);
      \u0275\u0275text(114, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p", 48);
      \u0275\u0275text(116, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(117, "div", 13)(118, "div", 39)(119, "div", 40)(120, "h6");
      \u0275\u0275text(121, "Bill To");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 10)(123, "div", 15)(124, "div", 49)(125, "label", 16);
      \u0275\u0275text(126, "Vendor Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "a", 24);
      \u0275\u0275element(128, "i", 50);
      \u0275\u0275text(129, "Add New");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "mat-select", 28)(131, "mat-option", 29);
      \u0275\u0275text(132, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "mat-option", 29);
      \u0275\u0275text(134, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "div", 41)(136, "div", 42)(137, "div", 43)(138, "span");
      \u0275\u0275element(139, "img", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div")(141, "h6", 46);
      \u0275\u0275text(142, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p", 47);
      \u0275\u0275text(144, "299 Star Trek Drive, Florida, 32405, USA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p", 47);
      \u0275\u0275text(146, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 47);
      \u0275\u0275text(148, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "p", 48);
      \u0275\u0275text(150, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(151, "div", 52)(152, "div", 12)(153, "h6");
      \u0275\u0275text(154, "Items & Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 0)(156, "div", 53)(157, "div", 15)(158, "h6", 46);
      \u0275\u0275text(159, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 54)(161, "div", 55);
      \u0275\u0275element(162, "input", 56);
      \u0275\u0275elementStart(163, "label", 57);
      \u0275\u0275text(164, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 55);
      \u0275\u0275element(166, "input", 58);
      \u0275\u0275elementStart(167, "label", 59);
      \u0275\u0275text(168, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(169, "div", 15)(170, "label", 16);
      \u0275\u0275text(171, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "mat-select", 28)(173, "mat-option", 29);
      \u0275\u0275text(174, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "mat-option", 29);
      \u0275\u0275text(176, "Nike Jordon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "mat-option", 29);
      \u0275\u0275text(178, "Enter Product Name");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(179, "div", 60)(180, "table", 61)(181, "thead", 62)(182, "tr")(183, "th");
      \u0275\u0275text(184, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "th");
      \u0275\u0275text(186, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "th");
      \u0275\u0275text(188, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "th");
      \u0275\u0275text(190, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "th");
      \u0275\u0275text(192, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "th");
      \u0275\u0275text(194, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "th");
      \u0275\u0275text(196, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(197, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "tbody", 63)(199, "tr")(200, "td");
      \u0275\u0275element(201, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "td");
      \u0275\u0275element(203, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "td");
      \u0275\u0275element(205, "input", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "td");
      \u0275\u0275element(207, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "td");
      \u0275\u0275element(209, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "td");
      \u0275\u0275element(211, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "td");
      \u0275\u0275element(213, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "td");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "tr", 71)(216, "td");
      \u0275\u0275element(217, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "td");
      \u0275\u0275element(219, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "td");
      \u0275\u0275element(221, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "td");
      \u0275\u0275element(223, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "td");
      \u0275\u0275element(225, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "td");
      \u0275\u0275element(227, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "td");
      \u0275\u0275element(229, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "td")(231, "div")(232, "a", 77);
      \u0275\u0275listener("click", function AddPurchaseComponent_Template_a_click_232_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(233, "i", 78);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(234, AddPurchaseComponent_ng_container_234_Template, 20, 0, "ng-container", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "div")(236, "a", 80);
      \u0275\u0275listener("click", function AddPurchaseComponent_Template_a_click_236_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(237, "i", 50);
      \u0275\u0275text(238, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(239, "div", 81)(240, "div", 0)(241, "div", 82)(242, "div", 15)(243, "h6", 15);
      \u0275\u0275text(244, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div")(246, "ul", 83)(247, "li", 84)(248, "a", 85);
      \u0275\u0275element(249, "i", 86);
      \u0275\u0275text(250, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "li", 84)(252, "a", 87);
      \u0275\u0275element(253, "i", 88);
      \u0275\u0275text(254, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "li", 89)(256, "a", 90);
      \u0275\u0275element(257, "i", 91);
      \u0275\u0275text(258, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(259, "div", 92)(260, "div", 93)(261, "label", 16);
      \u0275\u0275text(262, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(263, "textarea", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 95)(265, "label", 16);
      \u0275\u0275text(266, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(267, "textarea", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 96)(269, "label", 16);
      \u0275\u0275text(270, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "mat-select", 28)(272, "mat-option", 29);
      \u0275\u0275text(273, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "mat-option", 29);
      \u0275\u0275text(275, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "mat-option", 29);
      \u0275\u0275text(277, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "mat-option", 29);
      \u0275\u0275text(279, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "mat-option", 29);
      \u0275\u0275text(281, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "mat-option", 29);
      \u0275\u0275text(283, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(284, "div", 97)(285, "ul", 98)(286, "li", 15)(287, "div", 49)(288, "p", 99);
      \u0275\u0275text(289, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "h6", 100);
      \u0275\u0275text(291, "$ 565");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(292, "li", 15)(293, "div", 49)(294, "p", 99);
      \u0275\u0275text(295, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "h6", 100);
      \u0275\u0275text(297, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(298, "li", 15)(299, "div", 49)(300, "p", 99);
      \u0275\u0275text(301, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "h6", 100);
      \u0275\u0275text(303, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(304, "li", 15)(305, "a", 24);
      \u0275\u0275element(306, "i", 50);
      \u0275\u0275text(307, "Add Additional Charges");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "li", 15)(309, "div", 49)(310, "p", 99);
      \u0275\u0275text(311, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "div")(313, "mat-select", 28)(314, "mat-option", 29);
      \u0275\u0275text(315, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "mat-option", 29);
      \u0275\u0275text(317, "0 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "mat-option", 29);
      \u0275\u0275text(319, "1 %");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(320, "li", 101)(321, "div", 102)(322, "div", 32);
      \u0275\u0275element(323, "input", 103);
      \u0275\u0275elementStart(324, "label", 104);
      \u0275\u0275text(325, "Round Off Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "div")(327, "h6", 100);
      \u0275\u0275text(328, "$596");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(329, "li", 105)(330, "div", 49)(331, "h6");
      \u0275\u0275text(332, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "h6");
      \u0275\u0275text(334, "$ 596");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(335, "li", 105)(336, "h6", 106);
      \u0275\u0275text(337, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "p");
      \u0275\u0275text(339, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "li", 107)(341, "div")(342, "mat-select", 28)(343, "mat-option", 29);
      \u0275\u0275text(344, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "mat-option", 29);
      \u0275\u0275text(346, "Adrian");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(347, "li", 15)(348, "div", 108);
      \u0275\u0275text(349, " OR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "li", 109)(351, "div", 15)(352, "label", 16);
      \u0275\u0275text(353, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(354, "input", 110);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "li")(356, "div", 111)(357, "div", 112);
      \u0275\u0275element(358, "i", 113);
      \u0275\u0275text(359, "Upload Image ");
      \u0275\u0275element(360, "input", 114);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(361, "div", 115)(362, "div", 49)(363, "a", 116);
      \u0275\u0275text(364, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "a", 117);
      \u0275\u0275text(366, "Save");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.purchaseList);
      \u0275\u0275advance(210);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.trash ? "none" : ""));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgStyle, FormsModule, RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPurchaseComponent, [{
    type: Component,
    args: [{ selector: "app-add-purchase", imports: [MatSelectModule, CommonModule, FormsModule, RouterLink, BsDatepickerModule], template: `<!-- start row -->
<div class="row">
    <div class="col-md-11 mx-auto">

        <!-- Start Breadcrumb -->
        <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
            <div>
                <h6><a [routerLink]="routes.purchaseList" class="d-flex align-items-center "><i
                            class="isax isax-arrow-left me-2"></i>Purchase</a></h6>
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
                        <h6>Purchase Details</h6>
                    </div>
                    <div>

                        <!-- start row -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="purchase-top-content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Purchase Id</label>
                                                <input type="text" class="form-control" placeholder="1254569" readonly>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Reference Number</label>
                                                <input type="text" class="form-control" value="1254569">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="form-label">Purchase Date</label>
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
                            <div class="col-md-6">
                                <div class="purchase-top-content">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <div class="logo-image">
                                                    <img src="assets/img/invoice-logo.svg" alt="User Img" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <mat-select class="custom-mat-select select" placeholder="Select">
                                                    <mat-option value="1">Select Status</mat-option>
                                                    <mat-option value="1">Paid</mat-option>
                                                    <mat-option value="1">Pending</mat-option>
                                                    <mat-option value="1">Cancelled</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <mat-select class="custom-mat-select select" placeholder="Select">
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
                                                <span class="p-2 rounded border">
                                                    <img src="assets/img/logo-small.svg" alt="image" class="img-fluid">
                                                </span>
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
                                <li class="pb-3 border-gray border-bottom">
                                    <div class="p-2  d-flex justify-content-between">
                                        <div class="form-check form-switch me-4">
                                            <input class="form-check-input" type="checkbox" role="switch" id="enabe_tax1" checked>
                                            <label class="form-check-label" for="enabe_tax1">Round Off Total</label>
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
            <div class="card-footer">
                <div class="d-flex align-items-center justify-content-between">
                    <a href="javascript:void(0);" class="btn btn-outline-white">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary">Save</a>
                </div>
            </div><!-- end card footer -->
        </div><!-- end card -->
    </div>
</div>
<!-- end row -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPurchaseComponent, { className: "AddPurchaseComponent", filePath: "src/app/features/purchases/purchases/add-purchase/add-purchase.component.ts", lineNumber: 15 });
})();
export {
  AddPurchaseComponent
};
//# sourceMappingURL=chunk-HOW4KMFU.js.map
