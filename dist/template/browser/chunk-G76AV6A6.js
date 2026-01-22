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

// src/app/features/invantory-sales/delivery-challans/add-delivery-challan/add-delivery-challan.component.ts
var _c0 = (a0) => ({ "display": a0 });
function AddDeliveryChallanComponent_ng_container_251_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td");
    \u0275\u0275element(3, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div")(18, "a", 79);
    \u0275\u0275listener("click", function AddDeliveryChallanComponent_ng_container_251_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 72);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var AddDeliveryChallanComponent = class _AddDeliveryChallanComponent {
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
  static \u0275fac = function AddDeliveryChallanComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddDeliveryChallanComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddDeliveryChallanComponent, selectors: [["app-add-delivery-challan"]], decls: 374, vars: 6, consts: [[1, "row"], [1, "col-md-11", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "border-bottom", "mb-3", "pb-1"], [1, "row", "justify-content-between"], [1, "col-xl-5", "col-lg-7"], [1, "row", "gx-3"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "placeholder", "9876543", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-lg-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "col-md-12"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], [1, "col-xl-4", "col-lg-5"], [1, "border", "border-dashed", "bg-light", "rounded", "text-center", "p-3", "mb-3"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], ["placeholder", "Select Status", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "Currency", 1, "custom-mat-select", "select"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "rounded", "p-2", "mb-3"], [1, "form-check", "form-switch", "me-4"], ["type", "checkbox", "role", "switch", "id", "enabe_tax", "checked", "", 1, "form-check-input"], ["for", "enabe_tax", 1, "form-check-label"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "btn-soft-primary"], [1, "isax", "isax-setting-2", "text-primary", "fs-16"], [1, "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "card", "shadow-none"], ["placeholder", "Select", 1, "custom-mat-select", "select"], [1, "bg-light", "border", "rounded", "p-3", "d-flex", "align-items-start"], [1, "avatar", "avatar-lg", "border", "flex-shrink-0", "me-3"], ["src", "assets/img/logo-small.svg", "alt", "User Img"], [1, "fs-14", "fw-semibold", "mb-1"], [1, "mb-1", "fs-13"], [1, "text-dark", "fs-13"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "avatar", "avatar-lg", "border", "bg-dark", "flex-shrink-0", "me-3"], ["src", "assets/img/icons/black-icon.png", "alt", "User Img"], [1, "border-bottom", "mb-3", "pb-3"], [1, "col-xl-4", "col-md-6"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-3", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-3", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-4", 1, "form-check-input"], ["for", "Radio-sm-4", 1, "form-check-label"], [1, "table-responsive", "table-nowrap", "rounded", "border-bottom-0", "border", "mb-3"], [1, "table", "mb-0", "add-table"], [1, "table-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table"], [1, "isax", "isax-close-circle"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data", 3, "click"], [1, "col-lg-7"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-solid-primary", "tab-style-1", "border-0", "p-0", "d-flex", "flex-wrap", "gap-3", "mb-3"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-document", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "col-lg-5"], [1, "fs-14", "fw-semibold"], ["type", "text", "value", "0%", 1, "form-control", 2, "width", "106px"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], ["type", "checkbox", "role", "switch", "id", "require_check_2", "checked", "", 1, "form-check-input"], ["for", "require_check_2", 1, "form-check-label"], ["placeholder", "Select Signature", 1, "custom-mat-select", "select"], [1, "mb-0", "text-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "file-upload", "drag-file", "w-100", "h-auto", "py-3", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "d-block"], [1, "isax", "isax-image", "text-primary", "me-1"], ["type", "file", "accept", "video/image"], ["type", "button", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AddDeliveryChallanComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Delivery Challan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "h6", 9);
      \u0275\u0275text(14, "Delivery Challan Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form")(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 9)(22, "label", 15);
      \u0275\u0275text(23, "Delivery Challan Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 14)(26, "div", 9)(27, "label", 15);
      \u0275\u0275text(28, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "label", 15);
      \u0275\u0275text(32, "Delivery Challan Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 19);
      \u0275\u0275element(34, "input", 20);
      \u0275\u0275elementStart(35, "span", 21);
      \u0275\u0275element(36, "i", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 23)(38, "div", 9)(39, "a", 24);
      \u0275\u0275element(40, "i", 25);
      \u0275\u0275text(41, "Add Due Date");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 26)(43, "div", 0)(44, "div", 18)(45, "div", 27);
      \u0275\u0275element(46, "img", 28)(47, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 13)(50, "div", 14)(51, "div", 9)(52, "mat-select", 30)(53, "mat-option", 31);
      \u0275\u0275text(54, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-option", 31);
      \u0275\u0275text(56, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-option", 31);
      \u0275\u0275text(58, "Unpaid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 31);
      \u0275\u0275text(60, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "mat-option", 31);
      \u0275\u0275text(62, "Partially Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "mat-option", 31);
      \u0275\u0275text(64, "Uncollectable");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 14)(66, "div", 9)(67, "mat-select", 32)(68, "mat-option", 31);
      \u0275\u0275text(69, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "mat-option", 31);
      \u0275\u0275text(71, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "mat-option", 31);
      \u0275\u0275text(73, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 31);
      \u0275\u0275text(75, "Yen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-option", 31);
      \u0275\u0275text(77, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "mat-option", 31);
      \u0275\u0275text(79, "Rupee");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(80, "div", 23)(81, "div", 33)(82, "div", 34);
      \u0275\u0275element(83, "input", 35);
      \u0275\u0275elementStart(84, "label", 36);
      \u0275\u0275text(85, "Enable Tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div")(87, "a", 37);
      \u0275\u0275element(88, "i", 38);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(89, "div", 39)(90, "div", 0)(91, "div", 40)(92, "div", 41)(93, "div", 8)(94, "h6", 9);
      \u0275\u0275text(95, "Bill From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 9)(97, "label", 15);
      \u0275\u0275text(98, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "mat-select", 42)(100, "mat-option", 31);
      \u0275\u0275text(101, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "mat-option", 31);
      \u0275\u0275text(103, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 43)(105, "span", 44);
      \u0275\u0275element(106, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div")(108, "h6", 46);
      \u0275\u0275text(109, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 47);
      \u0275\u0275text(111, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 47);
      \u0275\u0275text(113, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p", 47);
      \u0275\u0275text(115, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 48);
      \u0275\u0275text(117, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(118, "div", 40)(119, "div", 41)(120, "div", 8)(121, "h6", 9);
      \u0275\u0275text(122, "Bill To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div")(124, "div", 49)(125, "label", 15);
      \u0275\u0275text(126, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "a", 24);
      \u0275\u0275element(128, "i", 25);
      \u0275\u0275text(129, "Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 9)(131, "mat-select", 42)(132, "mat-option", 31);
      \u0275\u0275text(133, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-option", 31);
      \u0275\u0275text(135, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 43)(137, "span", 50);
      \u0275\u0275element(138, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div")(140, "h6", 46);
      \u0275\u0275text(141, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p", 47);
      \u0275\u0275text(143, "299 Star Trek Drive, Florida, 32405, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 47);
      \u0275\u0275text(145, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "p", 47);
      \u0275\u0275text(147, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "p", 48);
      \u0275\u0275text(149, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(150, "div", 52)(151, "div", 0)(152, "div", 53)(153, "h6", 9);
      \u0275\u0275text(154, "Items & Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div")(156, "label", 15);
      \u0275\u0275text(157, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 54)(159, "div", 55);
      \u0275\u0275element(160, "input", 56);
      \u0275\u0275elementStart(161, "label", 57);
      \u0275\u0275text(162, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 58);
      \u0275\u0275element(164, "input", 59);
      \u0275\u0275elementStart(165, "label", 60);
      \u0275\u0275text(166, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(167, "div", 9)(168, "label", 15);
      \u0275\u0275text(169, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "mat-select", 42)(171, "mat-option", 31);
      \u0275\u0275text(172, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-option", 31);
      \u0275\u0275text(174, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "mat-option", 31);
      \u0275\u0275text(176, "Lenovo 3rd Generation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "mat-option", 31);
      \u0275\u0275text(178, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "mat-option", 31);
      \u0275\u0275text(180, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "mat-option", 31);
      \u0275\u0275text(182, "Adidas Ultraboost ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(183, "div", 61)(184, "table", 62)(185, "thead", 63)(186, "tr")(187, "th");
      \u0275\u0275text(188, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "th");
      \u0275\u0275text(190, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "th");
      \u0275\u0275text(192, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "th");
      \u0275\u0275text(194, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "th");
      \u0275\u0275text(196, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "th");
      \u0275\u0275text(198, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "th");
      \u0275\u0275text(200, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(201, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "tbody", 64)(203, "tr")(204, "td");
      \u0275\u0275element(205, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "td");
      \u0275\u0275element(207, "input", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "td");
      \u0275\u0275element(209, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "td");
      \u0275\u0275element(211, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "td")(213, "mat-select", 42)(214, "mat-option", 31);
      \u0275\u0275text(215, "0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "mat-option", 31);
      \u0275\u0275text(217, "25%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "mat-option", 31);
      \u0275\u0275text(219, "50%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "mat-option", 31);
      \u0275\u0275text(221, "75%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "mat-option", 31);
      \u0275\u0275text(223, "100%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(224, "td");
      \u0275\u0275element(225, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "td");
      \u0275\u0275element(227, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "td")(229, "div")(230, "a", 71);
      \u0275\u0275element(231, "i", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(232, "tr", 73)(233, "td");
      \u0275\u0275element(234, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "td");
      \u0275\u0275element(236, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "td");
      \u0275\u0275element(238, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "td");
      \u0275\u0275element(240, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "td");
      \u0275\u0275element(242, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "td");
      \u0275\u0275element(244, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "td");
      \u0275\u0275element(246, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "td")(248, "div")(249, "a", 79);
      \u0275\u0275listener("click", function AddDeliveryChallanComponent_Template_a_click_249_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(250, "i", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(251, AddDeliveryChallanComponent_ng_container_251_Template, 20, 0, "ng-container", 80);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(252, "div")(253, "a", 81);
      \u0275\u0275listener("click", function AddDeliveryChallanComponent_Template_a_click_253_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(254, "i", 25);
      \u0275\u0275text(255, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(256, "div", 39)(257, "div", 0)(258, "div", 82)(259, "div", 9)(260, "h6", 9);
      \u0275\u0275text(261, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "div")(263, "ul", 83)(264, "li", 84)(265, "a", 85);
      \u0275\u0275element(266, "i", 86);
      \u0275\u0275text(267, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "li", 84)(269, "a", 87);
      \u0275\u0275element(270, "i", 88);
      \u0275\u0275text(271, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "li", 84)(273, "a", 89);
      \u0275\u0275element(274, "i", 90);
      \u0275\u0275text(275, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(276, "div", 91)(277, "div", 92)(278, "label", 15);
      \u0275\u0275text(279, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "textarea", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div", 94)(282, "label", 15);
      \u0275\u0275text(283, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(284, "textarea", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 95)(286, "label", 15);
      \u0275\u0275text(287, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "mat-select", 42)(289, "mat-option", 31);
      \u0275\u0275text(290, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "mat-option", 31);
      \u0275\u0275text(292, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "mat-option", 31);
      \u0275\u0275text(294, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "mat-option", 31);
      \u0275\u0275text(296, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "mat-option", 31);
      \u0275\u0275text(298, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "mat-option", 31);
      \u0275\u0275text(300, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(301, "div", 96)(302, "div", 9)(303, "div", 2)(304, "h6", 97);
      \u0275\u0275text(305, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "h6", 97);
      \u0275\u0275text(307, "$565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "div", 2)(309, "h6", 97);
      \u0275\u0275text(310, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "h6", 97);
      \u0275\u0275text(312, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(313, "div", 2)(314, "h6", 97);
      \u0275\u0275text(315, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "h6", 97);
      \u0275\u0275text(317, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "div", 9)(319, "a", 24);
      \u0275\u0275element(320, "i", 25);
      \u0275\u0275text(321, "Add Additional Charges ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 2)(323, "h6", 97);
      \u0275\u0275text(324, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(325, "input", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "div", 99)(327, "div", 34);
      \u0275\u0275element(328, "input", 100);
      \u0275\u0275elementStart(329, "label", 101);
      \u0275\u0275text(330, "Round Off Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "h6", 97);
      \u0275\u0275text(332, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "div", 99)(334, "h6");
      \u0275\u0275text(335, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "h6");
      \u0275\u0275text(337, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(338, "div", 52)(339, "h6", 46);
      \u0275\u0275text(340, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "p");
      \u0275\u0275text(342, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "div", 9)(344, "div", 9)(345, "mat-select", 102)(346, "mat-option", 31);
      \u0275\u0275text(347, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "mat-option", 31);
      \u0275\u0275text(349, "Adrian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "mat-option", 31);
      \u0275\u0275text(351, "Emily Clark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "mat-option", 31);
      \u0275\u0275text(353, "John Carter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "mat-option", 31);
      \u0275\u0275text(355, "Michael Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "mat-option", 31);
      \u0275\u0275text(357, "Olivia Harris");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(358, "p", 103);
      \u0275\u0275text(359, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "div", 104)(361, "label", 15);
      \u0275\u0275text(362, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(363, "input", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "div", 106)(365, "span", 107);
      \u0275\u0275element(366, "i", 108);
      \u0275\u0275text(367, "Upload Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275element(368, "input", 109);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(369, "div", 49)(370, "button", 110);
      \u0275\u0275text(371, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "button", 111);
      \u0275\u0275text(373, "Save");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.deliveryChallanList);
      \u0275\u0275advance(227);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.trash ? "none" : ""));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgStyle, RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddDeliveryChallanComponent, [{
    type: Component,
    args: [{ selector: "app-add-delivery-challan", imports: [MatSelectModule, CommonModule, RouterLink, BsDatepickerModule], template: `  <!-- start row -->
  <div class="row">
    <div class="col-md-11 mx-auto">
        <div>
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h6><a [routerLink]="routes.deliveryChallanList"><i class="isax isax-arrow-left me-2"></i>Delivery Challan</a></h6>
                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-eye me-1"></i>Preview</a>
            </div>
            <div class="card">
                <div class="card-body">
                    <h6 class="mb-3">Delivery Challan Details</h6>
                    <form>
                        <div class="border-bottom mb-3 pb-1">
                            
                            <!-- start row -->
                            <div class="row justify-content-between">
                                <div class="col-xl-5 col-lg-7">
                                    <div class="row gx-3">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Delivery Challan Number</label>
                                                <input type="text" class="form-control" placeholder="9876543" readonly="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Reference Number</label>
                                                <input type="text" class="form-control" value="1254569">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <label class="form-label">Delivery Challan Date</label>
                                            <div class="input-group position-relative mb-3">
                                                <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker placeholder="dd/mm/yyyy">
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
                                                        <mat-select class="custom-mat-select select" placeholder="Select Status">
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
                                                        <mat-select class="custom-mat-select select" placeholder="Currency">
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
                                                <span class="avatar avatar-lg border flex-shrink-0 me-3"><img src="assets/img/logo-small.svg" alt="User Img"></span>
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
                                                    <span class="avatar avatar-lg border bg-dark flex-shrink-0 me-3"><img src="assets/img/icons/black-icon.png" alt="User Img"></span>
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
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Apple iPhone 15</mat-option>
                                            <mat-option value="1">Lenovo 3rd Generation</mat-option>
                                            <mat-option value="1">Bose QuietComfort 45</mat-option>
                                            <mat-option value="1">Nike Dri-FIT T-shirt</mat-option>
                                            <mat-option value="1">Adidas Ultraboost </mat-option>
                                        </mat-select>
                                    </div>
                                </div><!-- end col -->
                            </div>
                            <!-- end row -->

                            <!-- Table List start -->
                            <div class="table-responsive table-nowrap rounded border-bottom-0 border mb-3">
                                <table class="table mb-0 add-table">
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
                            <!-- Table List end -->

                            <div>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center add-invoice-data" (click)="addNewRow()"><i class="isax isax-add-circle5 text-primary me-1"></i>Add New</a>
                            </div>

                        </div>

                        <div class="border-bottom mb-3">

                            <!-- start row -->
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddDeliveryChallanComponent, { className: "AddDeliveryChallanComponent", filePath: "src/app/features/invantory-sales/delivery-challans/add-delivery-challan/add-delivery-challan.component.ts", lineNumber: 14 });
})();
export {
  AddDeliveryChallanComponent
};
//# sourceMappingURL=chunk-G76AV6A6.js.map
