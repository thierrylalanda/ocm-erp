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

// src/app/features/purchases/purchase-orders/add-purchases-orders/add-purchases-orders.component.ts
var _c0 = (a0) => ({ "display": a0 });
function AddPurchasesOrdersComponent_ng_container_234_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td");
    \u0275\u0275element(3, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div")(18, "a", 80);
    \u0275\u0275listener("click", function AddPurchasesOrdersComponent_ng_container_234_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var AddPurchasesOrdersComponent = class _AddPurchasesOrdersComponent {
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
  static \u0275fac = function AddPurchasesOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPurchasesOrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPurchasesOrdersComponent, selectors: [["app-add-purchases-orders"]], decls: 368, vars: 6, consts: [[1, "row"], [1, "col-md-11", "mx-auto"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "top-content"], [1, "purchase-header", "mb-3"], [1, "row", "justify-content-between"], [1, "col-xl-5"], [1, "purchase-top-content"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "9876543", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-md-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25 Mar 2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1", "text-primary"], [1, "col-xl-4"], [1, "logo-image"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "p-2", "border", "rounded", "d-flex", "justify-content-between"], [1, "form-check", "form-switch", "me-4"], ["type", "checkbox", "role", "switch", "id", "enabe_tax", "checked", "", 1, "form-check-input"], ["for", "enabe_tax", 1, "form-check-label"], ["href", "javascript:void(0);"], [1, "bg-primary-subtle", "p-1", "rounded"], [1, "isax", "isax-setting-2", "text-primary"], [1, "bill-content", "pb-0"], [1, "card", "box-shadow-0"], [1, "card-header", "border-0", "pb-0"], [1, "p-3", "bg-light", "rounded", "border"], [1, "d-flex"], [1, "me-3"], [1, "p-2", "rounded", "border"], ["src", "assets/img/logo-small.svg", "alt", "image", 1, "img-fluid"], [1, "fs-14", "mb-1"], [1, "mb-0"], [1, "text-dark", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "items-details"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "gap-3"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "table-responsive", "rounded", "border-bottom-0", "border", "mb-3"], [1, "table", "table-nowrap", "add-table", "mb-0"], [1, "table-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "0%", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [1, "isax", "isax-close-circle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data", 3, "click"], [1, "extra-info"], [1, "col-md-7"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-solid-primary", "mb-3"], ["role", "presentation", 1, "nav-item", "me-2"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-document", "me-1"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "border", "fs-12", "fw-semibold", "rounded"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "col-md-5"], [1, "mb-0", "ps-0", "list-unstyled"], [1, "fw-semibold", "fs-14", "text-gray-9", "mb-0"], [1, "fs-14"], [1, "pb-3", "border-gray", "border-bottom"], [1, "p-2", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "mt-3", "pb-3", "border-bottom", "border-gray"], [1, "fs-14", "fw-semibold"], [1, "mt-3", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "singnature-upload", "bg-light", "d-flex", "align-items-center", "justify-content-center"], [1, "drag-upload-btn", "bg-light", "position-relative", "mb-2", "fs-14", "fw-normal", "text-gray-5"], [1, "isax", "isax-image", "me-1", "text-primary"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "card-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function AddPurchasesOrdersComponent_Template(rf, ctx) {
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
      \u0275\u0275text(27, "Purchase Order Id");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "label", 18);
      \u0275\u0275text(32, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 21)(35, "label", 18);
      \u0275\u0275text(36, "Purchase Order Date");
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
      \u0275\u0275elementStart(64, "div", 16)(65, "div", 17)(66, "mat-select", 32)(67, "mat-option", 33);
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
      \u0275\u0275elementStart(75, "div", 21)(76, "div", 34)(77, "div", 35);
      \u0275\u0275element(78, "input", 36);
      \u0275\u0275elementStart(79, "label", 37);
      \u0275\u0275text(80, "Enable Tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div")(82, "a", 38)(83, "span", 39);
      \u0275\u0275element(84, "i", 40);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(85, "div", 41)(86, "div", 0)(87, "div", 16)(88, "div", 42)(89, "div", 43)(90, "h6");
      \u0275\u0275text(91, "Bill From");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 10)(93, "div", 17)(94, "label", 18);
      \u0275\u0275text(95, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "mat-select", 32)(97, "mat-option", 33);
      \u0275\u0275text(98, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "mat-option", 33);
      \u0275\u0275text(100, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 44)(102, "div", 45)(103, "div", 46)(104, "span", 47);
      \u0275\u0275element(105, "img", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div")(107, "h6", 49);
      \u0275\u0275text(108, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 50);
      \u0275\u0275text(110, "15 Hodges Mews, HP12 3JL, United Kingdom ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p", 50);
      \u0275\u0275text(112, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 50);
      \u0275\u0275text(114, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p", 51);
      \u0275\u0275text(116, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(117, "div", 16)(118, "div", 42)(119, "div", 43)(120, "h6");
      \u0275\u0275text(121, "Bill To");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 10)(123, "div", 17)(124, "div", 52)(125, "label", 18);
      \u0275\u0275text(126, "Vendor Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "a", 26);
      \u0275\u0275element(128, "i", 53);
      \u0275\u0275text(129, "Add New");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "mat-select", 32)(131, "mat-option", 33);
      \u0275\u0275text(132, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "mat-option", 33);
      \u0275\u0275text(134, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "div", 44)(136, "div", 45)(137, "div", 46)(138, "span");
      \u0275\u0275element(139, "img", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div")(141, "h6", 49);
      \u0275\u0275text(142, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p", 50);
      \u0275\u0275text(144, "299 Star Trek Drive, Florida, 32405, USA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p", 50);
      \u0275\u0275text(146, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 50);
      \u0275\u0275text(148, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "p", 51);
      \u0275\u0275text(150, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(151, "div", 55)(152, "div", 12)(153, "h6");
      \u0275\u0275text(154, "Items & Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 0)(156, "div", 56)(157, "div", 17)(158, "h6", 49);
      \u0275\u0275text(159, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 57)(161, "div", 58);
      \u0275\u0275element(162, "input", 59);
      \u0275\u0275elementStart(163, "label", 60);
      \u0275\u0275text(164, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 58);
      \u0275\u0275element(166, "input", 61);
      \u0275\u0275elementStart(167, "label", 62);
      \u0275\u0275text(168, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(169, "div", 17)(170, "label", 18);
      \u0275\u0275text(171, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "mat-select", 32)(173, "mat-option", 33);
      \u0275\u0275text(174, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "mat-option", 33);
      \u0275\u0275text(176, "Nike Jordon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "mat-option", 33);
      \u0275\u0275text(178, "Enter Product Name");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(179, "div", 63)(180, "table", 64)(181, "thead", 65)(182, "tr")(183, "th");
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
      \u0275\u0275elementStart(198, "tbody", 66)(199, "tr")(200, "td");
      \u0275\u0275element(201, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "td");
      \u0275\u0275element(203, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "td");
      \u0275\u0275element(205, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "td");
      \u0275\u0275element(207, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "td");
      \u0275\u0275element(209, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "td");
      \u0275\u0275element(211, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "td");
      \u0275\u0275element(213, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "td");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "tr", 74)(216, "td");
      \u0275\u0275element(217, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "td");
      \u0275\u0275element(219, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "td");
      \u0275\u0275element(221, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "td");
      \u0275\u0275element(223, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "td");
      \u0275\u0275element(225, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "td");
      \u0275\u0275element(227, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "td");
      \u0275\u0275element(229, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "td")(231, "div")(232, "a", 80);
      \u0275\u0275listener("click", function AddPurchasesOrdersComponent_Template_a_click_232_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(233, "i", 81);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(234, AddPurchasesOrdersComponent_ng_container_234_Template, 20, 0, "ng-container", 82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "div")(236, "a", 83);
      \u0275\u0275listener("click", function AddPurchasesOrdersComponent_Template_a_click_236_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(237, "i", 53);
      \u0275\u0275text(238, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(239, "div", 84)(240, "div", 0)(241, "div", 85)(242, "div", 17)(243, "h6", 17);
      \u0275\u0275text(244, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div")(246, "ul", 86)(247, "li", 87)(248, "a", 88);
      \u0275\u0275element(249, "i", 89);
      \u0275\u0275text(250, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "li", 87)(252, "a", 90);
      \u0275\u0275element(253, "i", 91);
      \u0275\u0275text(254, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "li", 92)(256, "a", 93);
      \u0275\u0275element(257, "i", 94);
      \u0275\u0275text(258, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(259, "div", 95)(260, "div", 96)(261, "label", 18);
      \u0275\u0275text(262, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(263, "textarea", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 98)(265, "label", 18);
      \u0275\u0275text(266, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(267, "textarea", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 99)(269, "label", 18);
      \u0275\u0275text(270, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "mat-select", 32)(272, "mat-option", 33);
      \u0275\u0275text(273, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "mat-option", 33);
      \u0275\u0275text(275, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "mat-option", 33);
      \u0275\u0275text(277, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "mat-option", 33);
      \u0275\u0275text(279, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "mat-option", 33);
      \u0275\u0275text(281, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "mat-option", 33);
      \u0275\u0275text(283, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(284, "div", 100)(285, "ul", 101)(286, "li", 17)(287, "div", 52)(288, "p", 102);
      \u0275\u0275text(289, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "h6", 103);
      \u0275\u0275text(291, "$ 565");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(292, "li", 17)(293, "div", 52)(294, "p", 102);
      \u0275\u0275text(295, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "h6", 103);
      \u0275\u0275text(297, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(298, "li", 17)(299, "div", 52)(300, "p", 102);
      \u0275\u0275text(301, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "h6", 103);
      \u0275\u0275text(303, "$18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(304, "li", 17)(305, "a", 26);
      \u0275\u0275element(306, "i", 53);
      \u0275\u0275text(307, "Add Additional Charges");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "li", 17)(309, "div", 52)(310, "p", 102);
      \u0275\u0275text(311, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "div")(313, "mat-select", 32)(314, "mat-option", 33);
      \u0275\u0275text(315, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "mat-option", 33);
      \u0275\u0275text(317, "0 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "mat-option", 33);
      \u0275\u0275text(319, "1 %");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(320, "li", 104)(321, "div", 105)(322, "div", 106)(323, "div", 35);
      \u0275\u0275element(324, "input", 36);
      \u0275\u0275elementStart(325, "label", 37);
      \u0275\u0275text(326, "Round Off Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(327, "div")(328, "h6", 103);
      \u0275\u0275text(329, "$596");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(330, "li", 107)(331, "div", 52)(332, "h6");
      \u0275\u0275text(333, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "h6");
      \u0275\u0275text(335, "$ 596");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(336, "li", 107)(337, "h6", 108);
      \u0275\u0275text(338, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "p");
      \u0275\u0275text(340, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "li", 109)(342, "div")(343, "mat-select", 32)(344, "mat-option", 33);
      \u0275\u0275text(345, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "mat-option", 33);
      \u0275\u0275text(347, "Adrian");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(348, "li", 17)(349, "div", 110);
      \u0275\u0275text(350, " OR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "li", 111)(352, "div", 17)(353, "label", 18);
      \u0275\u0275text(354, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(355, "input", 112);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(356, "li")(357, "div", 113)(358, "div", 114);
      \u0275\u0275element(359, "i", 115);
      \u0275\u0275text(360, "Upload Image ");
      \u0275\u0275element(361, "input", 116);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(362, "div", 117)(363, "div", 52)(364, "a", 118);
      \u0275\u0275text(365, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "a", 119);
      \u0275\u0275text(367, "Save");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.purchaseOrderList);
      \u0275\u0275advance(210);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.trash ? "none" : ""));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgStyle, FormsModule, RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPurchasesOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-add-purchases-orders", imports: [MatSelectModule, CommonModule, FormsModule, RouterLink, BsDatepickerModule], template: `            <!-- start row -->
            <div class="row">
                <div class="col-md-11 mx-auto">

                    <!-- Start Breadcrumb -->
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
                                        <div class="col-xl-5">
                                            <div class="purchase-top-content">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Purchase Order Id</label>
                                                            <input type="text" class="form-control" placeholder="9876543" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Reference Number</label>
                                                            <input type="text" class="form-control" value="1254569">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="form-label">Purchase Order Date</label>
                                                        <div class="input-group position-relative mb-3">
                                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker placeholder="25 Mar 2025">
                                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                                <i class="isax isax-calendar-2"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center "><i class="isax isax-add-circle5 me-1 text-primary"></i>Add Due Date</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end col -->
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
                                                            <div class="form-check form-switch me-4">
                                                                <input class="form-check-input" type="checkbox" role="switch" id="enabe_tax" checked>
                                                                <label class="form-check-label" for="enabe_tax">Enable Tax</label>
                                                            </div>
                                                            <div>
                                                                <a href="javascript:void(0);"><span class="bg-primary-subtle p-1 rounded"><i class="isax isax-setting-2 text-primary"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <!-- end col -->
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
                                                        <a href="javascript:void(0);" class="d-flex align-items-center"><i class="isax isax-add-circle5 text-primary me-1"></i>Add New</a>
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

                                <!-- Table List Start -->
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
                                                    <div class="d-flex align-items-center">
                                                        <div class="form-check form-switch me-4">
                                                            <input class="form-check-input" type="checkbox" role="switch" id="enabe_tax" checked>
                                                            <label class="form-check-label" for="enabe_tax">Round Off Total</label>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPurchasesOrdersComponent, { className: "AddPurchasesOrdersComponent", filePath: "src/app/features/purchases/purchase-orders/add-purchases-orders/add-purchases-orders.component.ts", lineNumber: 16 });
})();
export {
  AddPurchasesOrdersComponent
};
//# sourceMappingURL=chunk-62IS5WKS.js.map
