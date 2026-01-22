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

// src/app/features/purchases/purchase-orders/edit-purchases-orders/edit-purchases-orders.component.ts
var _c0 = (a0) => ({ "display": a0 });
function EditPurchasesOrdersComponent_ng_container_235_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td");
    \u0275\u0275element(3, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "input", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "input", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div")(18, "a", 85);
    \u0275\u0275listener("click", function EditPurchasesOrdersComponent_ng_container_235_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 86);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var EditPurchasesOrdersComponent = class _EditPurchasesOrdersComponent {
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
  static \u0275fac = function EditPurchasesOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditPurchasesOrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPurchasesOrdersComponent, selectors: [["app-edit-purchases-orders"]], decls: 363, vars: 6, consts: [[1, "row"], [1, "col-md-11", "mx-auto"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "top-content"], [1, "purchase-header", "mb-3"], [1, "row", "justify-content-between"], [1, "col-xl-5"], [1, "purchase-top-content"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], ["type", "text", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-md-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1", "text-primary"], [1, "col-xl-4"], [1, "logo-image"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], ["placeholder", "Paid", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "$", 1, "custom-mat-select", "select"], [1, "p-2", "border", "rounded", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-switch", "form-check-reverse", "d-flex", "align-items-center", "mb-0"], ["type", "checkbox", "role", "switch", "id", "notify", "checked", "", 1, "form-check-input"], [1, "text-gray-9"], ["href", "javascript:void(0);"], [1, "bg-primary-subtle", "p-1", "rounded"], [1, "isax", "isax-setting-2", "text-primary"], [1, "bill-content"], [1, "card", "box-shadow-0"], [1, "card-header", "border-0"], ["placeholder", "Kanakku", 1, "custom-mat-select", "select"], [1, "p-3", "bg-light", "rounded", "border"], [1, "d-flex"], [1, "me-3"], [1, "p-2", "rounded", "border"], ["src", "assets/img/logo-small.svg", "alt", "image", 1, "img-fluid"], [1, "fs-14", "mb-1"], [1, "mb-0"], [1, "text-dark", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "items-details"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "gap-3"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["placeholder", "Nike Jordon", 1, "custom-mat-select", "select"], [1, "table-responsive", "rounded", "border-bottom-0", "border", "mb-3"], [1, "table", "table-nowrap", "add-table", "mb-0"], [1, "thead", "bg-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "0%", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [1, "isax", "isax-close-circle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data", 3, "click"], [1, "extra-info"], [1, "col-md-7"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-solid-primary", "mb-3"], ["role", "presentation", 1, "nav-item", "me-2"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document", "me-1"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], ["placeholder", "Andrew - 5225655545555454 (Swiss Bank)", 1, "custom-mat-select", "select"], [1, "col-md-5"], [1, "mb-0", "ps-0", "list-unstyled"], [1, "fw-semibold", "fs-14", "text-gray-9", "mb-0"], [1, "fs-14"], [1, "pb-3", "border-gray", "border-bottom"], [1, "p-2", "d-flex", "justify-content-between"], [1, "mt-3", "pb-3", "border-bottom", "border-gray"], [1, "fs-14", "fw-semibold"], [1, "mt-3", "mb-3"], ["placeholder", "Adrian", 1, "custom-mat-select", "select"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "singnature-upload", "bg-light", "d-flex", "align-items-center", "justify-content-center"], [1, "drag-upload-btn", "bg-light", "position-relative", "mb-2", "fs-14", "fw-normal", "text-gray-5"], [1, "isax", "isax-image", "me-1", "text-primary"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"]], template: function EditPurchasesOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Purchase Order");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "a", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, "Preview ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h6");
      \u0275\u0275text(18, "Purchase Order Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div")(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "div", 0)(24, "div", 16)(25, "div", 17)(26, "label", 18);
      \u0275\u0275text(27, "Purchase Id");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "label", 18);
      \u0275\u0275text(32, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 21)(35, "label", 18);
      \u0275\u0275text(36, "Purchase Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 22);
      \u0275\u0275element(38, "input", 23);
      \u0275\u0275elementStart(39, "span", 24);
      \u0275\u0275element(40, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div")(42, "a", 26);
      \u0275\u0275element(43, "i", 27);
      \u0275\u0275text(44, "Add Due Date");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 28)(46, "div", 15)(47, "div", 0)(48, "div", 21)(49, "div", 17)(50, "div", 29);
      \u0275\u0275element(51, "img", 30)(52, "img", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 16)(54, "div", 17)(55, "mat-select", 32)(56, "mat-option", 33);
      \u0275\u0275text(57, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 33);
      \u0275\u0275text(59, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 33);
      \u0275\u0275text(61, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 33);
      \u0275\u0275text(63, "Cancelled");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 16)(65, "div", 17)(66, "mat-select", 34)(67, "mat-option", 33);
      \u0275\u0275text(68, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-option", 33);
      \u0275\u0275text(70, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 33);
      \u0275\u0275text(72, "\u20AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-option", 33);
      \u0275\u0275text(74, "\u20B9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 21)(76, "div", 35)(77, "div", 36)(78, "div", 37);
      \u0275\u0275element(79, "input", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "p", 39);
      \u0275\u0275text(81, "Enable Tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div")(83, "a", 40)(84, "span", 41);
      \u0275\u0275element(85, "i", 42);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(86, "div", 43)(87, "div", 0)(88, "div", 16)(89, "div", 44)(90, "div", 45)(91, "h6");
      \u0275\u0275text(92, "Bill From");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 10)(94, "div", 17)(95, "label", 18);
      \u0275\u0275text(96, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-select", 46)(98, "mat-option", 33);
      \u0275\u0275text(99, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "mat-option", 33);
      \u0275\u0275text(101, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 47)(103, "div", 48)(104, "div", 49)(105, "span", 50);
      \u0275\u0275element(106, "img", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div")(108, "h6", 52);
      \u0275\u0275text(109, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 53);
      \u0275\u0275text(111, "15 Hodges Mews, HP12 3JL, United Kingdom ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 53);
      \u0275\u0275text(113, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p", 53);
      \u0275\u0275text(115, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 54);
      \u0275\u0275text(117, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(118, "div", 16)(119, "div", 44)(120, "div", 45)(121, "h6");
      \u0275\u0275text(122, "Bill To");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 10)(124, "div", 17)(125, "div", 55)(126, "label", 18);
      \u0275\u0275text(127, "Vendor Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 26);
      \u0275\u0275element(129, "i", 56);
      \u0275\u0275text(130, "Add New");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "mat-select", 57)(132, "mat-option", 33);
      \u0275\u0275text(133, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-option", 33);
      \u0275\u0275text(135, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 47)(137, "div", 48)(138, "div", 49)(139, "span");
      \u0275\u0275element(140, "img", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div")(142, "h6", 52);
      \u0275\u0275text(143, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 53);
      \u0275\u0275text(145, "299 Star Trek Drive, Florida, 32405, USA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "p", 53);
      \u0275\u0275text(147, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "p", 53);
      \u0275\u0275text(149, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 54);
      \u0275\u0275text(151, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(152, "div", 59)(153, "div", 12)(154, "h6");
      \u0275\u0275text(155, "Items & Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 0)(157, "div", 60)(158, "div", 17)(159, "h6", 52);
      \u0275\u0275text(160, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 61)(162, "div", 62);
      \u0275\u0275element(163, "input", 63);
      \u0275\u0275elementStart(164, "label", 64);
      \u0275\u0275text(165, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 62);
      \u0275\u0275element(167, "input", 65);
      \u0275\u0275elementStart(168, "label", 66);
      \u0275\u0275text(169, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(170, "div", 17)(171, "label", 18);
      \u0275\u0275text(172, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-select", 67)(174, "mat-option", 33);
      \u0275\u0275text(175, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "mat-option", 33);
      \u0275\u0275text(177, "Nike Jordon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 33);
      \u0275\u0275text(179, "Enter Product Name");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(180, "div", 68)(181, "table", 69)(182, "thead", 70)(183, "tr")(184, "th");
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
      \u0275\u0275elementStart(199, "tbody", 71)(200, "tr")(201, "td");
      \u0275\u0275element(202, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "td");
      \u0275\u0275element(204, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "td");
      \u0275\u0275element(206, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "td");
      \u0275\u0275element(208, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "td");
      \u0275\u0275element(210, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "td");
      \u0275\u0275element(212, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "td");
      \u0275\u0275element(214, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275element(215, "td");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "tr", 79)(217, "td");
      \u0275\u0275element(218, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "td");
      \u0275\u0275element(220, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "td");
      \u0275\u0275element(222, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "td");
      \u0275\u0275element(224, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "td");
      \u0275\u0275element(226, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "td");
      \u0275\u0275element(228, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "td");
      \u0275\u0275element(230, "input", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "td")(232, "div")(233, "a", 85);
      \u0275\u0275listener("click", function EditPurchasesOrdersComponent_Template_a_click_233_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(234, "i", 86);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(235, EditPurchasesOrdersComponent_ng_container_235_Template, 20, 0, "ng-container", 87);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(236, "div")(237, "a", 88);
      \u0275\u0275listener("click", function EditPurchasesOrdersComponent_Template_a_click_237_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(238, "i", 56);
      \u0275\u0275text(239, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "div", 89)(241, "div", 0)(242, "div", 90)(243, "div", 17)(244, "h6", 17);
      \u0275\u0275text(245, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div")(247, "ul", 91)(248, "li", 92)(249, "a", 93);
      \u0275\u0275element(250, "i", 94);
      \u0275\u0275text(251, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "li", 92)(253, "a", 95);
      \u0275\u0275element(254, "i", 96);
      \u0275\u0275text(255, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "li", 97)(257, "a", 98);
      \u0275\u0275element(258, "i", 99);
      \u0275\u0275text(259, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(260, "div", 100)(261, "div", 101)(262, "label", 18);
      \u0275\u0275text(263, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "textarea", 102);
      \u0275\u0275text(265, "Please ensure all payment details are correct before processing. Late payments may incur additional fees. Contact support for queries. Keep this invoice for your records.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "div", 103)(267, "label", 18);
      \u0275\u0275text(268, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(269, "textarea", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div", 104)(271, "label", 18);
      \u0275\u0275text(272, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "mat-select", 105)(274, "mat-option", 33);
      \u0275\u0275text(275, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "mat-option", 33);
      \u0275\u0275text(277, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "mat-option", 33);
      \u0275\u0275text(279, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "mat-option", 33);
      \u0275\u0275text(281, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "mat-option", 33);
      \u0275\u0275text(283, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "mat-option", 33);
      \u0275\u0275text(285, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(286, "div", 106)(287, "ul", 107)(288, "li", 17)(289, "div", 55)(290, "p", 108);
      \u0275\u0275text(291, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "h6", 109);
      \u0275\u0275text(293, "$ 565");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(294, "li", 17)(295, "div", 55)(296, "p", 108);
      \u0275\u0275text(297, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "h6", 109);
      \u0275\u0275text(299, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(300, "li", 17)(301, "div", 55)(302, "p", 108);
      \u0275\u0275text(303, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "h6", 109);
      \u0275\u0275text(305, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(306, "li", 17)(307, "a", 26);
      \u0275\u0275element(308, "i", 56);
      \u0275\u0275text(309, "Add Additional Charges");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "li", 17)(311, "div", 55)(312, "p", 108);
      \u0275\u0275text(313, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div")(315, "mat-select", 57)(316, "mat-option", 33);
      \u0275\u0275text(317, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "mat-option", 33);
      \u0275\u0275text(319, "0 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "mat-option", 33);
      \u0275\u0275text(321, "1 %");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(322, "li", 110)(323, "div", 111)(324, "div", 36)(325, "div", 37);
      \u0275\u0275element(326, "input", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "p", 39);
      \u0275\u0275text(328, "Round Off Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div")(330, "h6", 109);
      \u0275\u0275text(331, "$596");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(332, "li", 112)(333, "div", 55)(334, "h6");
      \u0275\u0275text(335, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "h6");
      \u0275\u0275text(337, "$ 596");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(338, "li", 112)(339, "h6", 113);
      \u0275\u0275text(340, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "p");
      \u0275\u0275text(342, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "li", 114)(344, "div")(345, "mat-select", 115)(346, "mat-option", 33);
      \u0275\u0275text(347, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "mat-option", 33);
      \u0275\u0275text(349, "Adrian");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(350, "li", 17)(351, "div", 116);
      \u0275\u0275text(352, " OR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "li", 117)(354, "div", 17)(355, "label", 18);
      \u0275\u0275text(356, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(357, "input", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div", 119)(359, "div", 120);
      \u0275\u0275element(360, "i", 121);
      \u0275\u0275text(361, "Upload Image ");
      \u0275\u0275element(362, "input", 122);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.purchaseOrderList);
      \u0275\u0275advance(211);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.trash ? "none" : ""));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgStyle, FormsModule, RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditPurchasesOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-edit-purchases-orders", imports: [MatSelectModule, CommonModule, FormsModule, RouterLink, BsDatepickerModule], template: `                <!-- start row -->
                <div class="row">
                    <div class="col-md-11 mx-auto">
                        
						<!-- Page Header -->
                        <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                            <div>
                                <h6><a [routerLink]="routes.purchaseOrderList" class="d-flex align-items-center "><i class="isax isax-arrow-left me-2"></i>Purchase Order</a></h6>
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
                                        <div class="row justify-content-between">
                                            <div class="col-xl-5">
                                                <div class="purchase-top-content">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="mb-3">
                                                                <label class="form-label">Purchase Id</label>
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
                                            </div> <!-- end col -->
                                            <div class="col-xl-4">
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
                                            </div> <!-- end col -->
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
                                        </div> <!-- end col -->
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
                                                <mat-select class="custom-mat-select select" placeholder="Nike Jordon">
                                                    <mat-option value="1">Select</mat-option>
                                                    <mat-option value="1">Nike Jordon</mat-option>
                                                    <mat-option value="1">Enter Product Name</mat-option>
                                                </mat-select>
                                            </div>

                                        </div> <!-- end col -->
                                    </div>
                                    <!-- end row -->

                                    <!-- Table List Start -->
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
                                    <!-- Table List End -->
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
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->
                </div>
                <!-- end row -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPurchasesOrdersComponent, { className: "EditPurchasesOrdersComponent", filePath: "src/app/features/purchases/purchase-orders/edit-purchases-orders/edit-purchases-orders.component.ts", lineNumber: 15 });
})();
export {
  EditPurchasesOrdersComponent
};
//# sourceMappingURL=chunk-LWNCES6P.js.map
