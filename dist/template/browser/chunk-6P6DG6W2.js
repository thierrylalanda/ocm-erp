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
  Router,
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
  ɵɵdirectiveInject,
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

// src/app/features/invantory-sales/credit-notes/edit-credit-notes/edit-credit-notes.component.ts
var _c0 = (a0) => ({ "display": a0 });
function EditCreditNotesComponent_ng_container_233_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function EditCreditNotesComponent_ng_container_233_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 75);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var EditCreditNotesComponent = class _EditCreditNotesComponent {
  router;
  routes = routes;
  formData = [];
  trash = false;
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
  constructor(router) {
    this.router = router;
  }
  redirectPage() {
    this.router.navigate([routes.creditNotes]);
  }
  static \u0275fac = function EditCreditNotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditCreditNotesComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditCreditNotesComponent, selectors: [["app-edit-credit-notes"]], decls: 629, vars: 6, consts: [[1, "row"], [1, "col-xxl-11", "col-lg-11", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_notes", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [3, "ngSubmit"], [1, "border-bottom", "mb-3", "pb-1"], [1, "row", "justify-content-between"], [1, "col-xl-5", "col-lg-7"], [1, "row", "gx-3"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "placeholder", "9876543", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-lg-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "25-03-2025", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "col-md-12"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], [1, "col-xl-5", "col-lg-5"], [1, "border", "border-dashed", "bg-light", "rounded", "text-center", "p-3", "mb-3"], ["src", "assets/img/invoice-logo.svg", "alt", ""], ["placeholder", "Paid", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "$", 1, "custom-mat-select", "select"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "rounded", "p-2", "mb-3"], [1, "form-check", "form-switch", "me-4"], ["type", "checkbox", "role", "switch", "id", "enabe_tax", "checked", "", 1, "form-check-input"], ["for", "enabe_tax", 1, "form-check-label"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "btn-soft-primary"], [1, "isax", "isax-setting-2", "text-primary", "fs-16"], [1, "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "card", "shadow-none"], ["placeholder", "Select", 1, "custom-mat-select", "select"], [1, "p-3", "bg-light", "rounded", "border"], [1, "d-flex"], [1, "me-3"], [1, "p-2", "rounded", "border"], ["src", "assets/img/logo-small.svg", "alt", "image", 1, "img-fluid"], [1, "fs-14", "mb-1", "fw-semibold"], [1, "mb-1", "fs-13"], [1, "text-dark", "mb-0", "fs-13"], [1, "d-flex", "align-items-center", "justify-content-between"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "border-bottom", "mb-3", "pb-3"], [1, "col-xl-4", "col-md-6"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], ["placeholder", "Lenovo 3rd Generation", 1, "custom-mat-select", "select"], [1, "table-responsive", "rounded", "border-bottom-0", "border", "mb-3"], [1, "table", "table-nowrap", "add-table", "m-0"], [1, "thead-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "0%", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table"], [1, "isax", "isax-close-circle"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data"], [1, "col-lg-7"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-style-1", "border-0", "p-0", "d-flex", "flex-wrap", "row-gap-3"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold"], [1, "isax", "isax-document", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], ["placeholder", "Andrew - 5225655545555454 (Swiss Bank)", 1, "custom-mat-select", "select"], [1, "col-lg-5"], [1, "fs-14", "fw-semibold"], ["type", "text", "value", "0%", 1, "form-control", 2, "width", "106px"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], ["type", "checkbox", "role", "switch", "id", "require_check_2", "checked", "", 1, "form-check-input"], ["for", "require_check_2", 1, "form-check-label"], [1, "fs-14", "fw-semibold", "mb-1"], ["placeholder", "Adrian", 1, "custom-mat-select", "select"], [1, "mb-0", "text-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "file-upload", "drag-file", "w-100", "h-auto", "py-3", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "d-block"], [1, "isax", "isax-image", "text-primary", "me-1"], ["type", "file", "accept", "video/image"], ["type", "button", 1, "btn", "btn-outline-white", "border"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "view_notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-body"], [1, "d-flex", "mb-3", "pb-3", "align-items-center", "justify-content-between", "border-bottom"], [1, "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "text-danger", "bg-transparent", "border-0", "outline-0", "p-0", "lh-sm"], [1, "isax", "isax-close-circle5", "fs-16"], [1, "d-flex", "align-items-center", "justify-content-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", ""], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2"], [1, "mb-1"], [1, "me-4"], ["src", "assets/img/icons/not-paid.png", "alt", "", "width", "48", "height", "48"], [1, "row", "gy-3"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "badge-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "me-2"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table"], [1, "col-xl-8", "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], ["src", "assets/img/icons/qr.png", "alt", ""], [1, "col-xl-4", "col-lg-6"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "text-lg-end", "mb-3"], ["src", "assets/img/icons/sign.png", "alt", ""], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg", "flex-wrap", "gap-2"]], template: function EditCreditNotesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "h6")(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275text(7, "Credit Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "h6", 9);
      \u0275\u0275text(14, "Credit Note Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form", 10);
      \u0275\u0275listener("ngSubmit", function EditCreditNotesComponent_Template_form_ngSubmit_15_listener() {
        return ctx.redirectPage();
      });
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 9)(22, "label", 16);
      \u0275\u0275text(23, "Credit Note Id");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 9)(27, "label", 16);
      \u0275\u0275text(28, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 19)(31, "label", 16);
      \u0275\u0275text(32, "Credit Note Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 20);
      \u0275\u0275element(34, "input", 21);
      \u0275\u0275elementStart(35, "span", 22);
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 24)(38, "div", 9)(39, "a", 25);
      \u0275\u0275element(40, "i", 26);
      \u0275\u0275text(41, "Add Due Date");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 27)(43, "div", 0)(44, "div", 19)(45, "div", 28);
      \u0275\u0275element(46, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 19)(48, "div", 14)(49, "div", 15)(50, "div", 9)(51, "mat-select", 30)(52, "mat-option", 31);
      \u0275\u0275text(53, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "mat-option", 31);
      \u0275\u0275text(55, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-option", 31);
      \u0275\u0275text(57, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 31);
      \u0275\u0275text(59, "Partially Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 31);
      \u0275\u0275text(61, "Uncollectable");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "div", 15)(63, "div", 9)(64, "mat-select", 32)(65, "mat-option", 31);
      \u0275\u0275text(66, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "mat-option", 31);
      \u0275\u0275text(68, "\u20AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-option", 31);
      \u0275\u0275text(70, "\xA3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 31);
      \u0275\u0275text(72, "\u20B9");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(73, "div", 24)(74, "div", 33)(75, "div", 34);
      \u0275\u0275element(76, "input", 35);
      \u0275\u0275elementStart(77, "label", 36);
      \u0275\u0275text(78, "Enable Tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div")(80, "a", 37);
      \u0275\u0275element(81, "i", 38);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(82, "div", 39)(83, "div", 0)(84, "div", 40)(85, "div", 41)(86, "div", 8)(87, "h6", 9);
      \u0275\u0275text(88, "Bill From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 9)(90, "label", 16);
      \u0275\u0275text(91, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "mat-select", 42)(93, "mat-option", 31);
      \u0275\u0275text(94, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 43)(96, "div", 44)(97, "div", 45)(98, "span", 46);
      \u0275\u0275element(99, "img", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div")(101, "h6", 48);
      \u0275\u0275text(102, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p", 49);
      \u0275\u0275text(104, "15 Hodges Mews, HP12 3JL, United Kingdom ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p", 49);
      \u0275\u0275text(106, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p", 49);
      \u0275\u0275text(108, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 50);
      \u0275\u0275text(110, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(111, "div", 40)(112, "div", 41)(113, "div", 8)(114, "h6", 9);
      \u0275\u0275text(115, "Bill To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 9)(117, "div", 51)(118, "label", 16);
      \u0275\u0275text(119, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "a", 25);
      \u0275\u0275element(121, "i", 26);
      \u0275\u0275text(122, "Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "mat-select", 42)(124, "mat-option", 31);
      \u0275\u0275text(125, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 43)(127, "div", 44)(128, "div", 45)(129, "span");
      \u0275\u0275element(130, "img", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div")(132, "h6", 48);
      \u0275\u0275text(133, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p", 49);
      \u0275\u0275text(135, "299 Star Trek Drive, Florida, 32405, USA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 49);
      \u0275\u0275text(137, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p", 49);
      \u0275\u0275text(139, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p", 50);
      \u0275\u0275text(141, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(142, "div", 53)(143, "div", 0)(144, "div", 54)(145, "h6", 9);
      \u0275\u0275text(146, "Items & Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div")(148, "label", 16);
      \u0275\u0275text(149, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 55)(151, "div", 56);
      \u0275\u0275element(152, "input", 57);
      \u0275\u0275elementStart(153, "label", 58);
      \u0275\u0275text(154, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 59);
      \u0275\u0275element(156, "input", 60);
      \u0275\u0275elementStart(157, "label", 61);
      \u0275\u0275text(158, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(159, "div", 9)(160, "label", 16);
      \u0275\u0275text(161, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "mat-select", 62)(163, "mat-option", 31);
      \u0275\u0275text(164, "Lenovo 3rd Generation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "mat-option", 31);
      \u0275\u0275text(166, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "mat-option", 31);
      \u0275\u0275text(168, "Dell XPS 13 9310");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "mat-option", 31);
      \u0275\u0275text(170, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "mat-option", 31);
      \u0275\u0275text(172, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-option", 31);
      \u0275\u0275text(174, "Adidas Ultraboost ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(175, "div", 63)(176, "table", 64)(177, "thead", 65)(178, "tr")(179, "th");
      \u0275\u0275text(180, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "th");
      \u0275\u0275text(182, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "th");
      \u0275\u0275text(184, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "th");
      \u0275\u0275text(186, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "th");
      \u0275\u0275text(188, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "th");
      \u0275\u0275text(190, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "th");
      \u0275\u0275text(192, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(193, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "tbody", 66)(195, "tr")(196, "td");
      \u0275\u0275element(197, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "td");
      \u0275\u0275element(199, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "td");
      \u0275\u0275element(201, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "td");
      \u0275\u0275element(203, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "td");
      \u0275\u0275element(205, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "td");
      \u0275\u0275element(207, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "td");
      \u0275\u0275element(209, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "td")(211, "div")(212, "a", 74);
      \u0275\u0275element(213, "i", 75);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(214, "tr", 76)(215, "td");
      \u0275\u0275element(216, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "td");
      \u0275\u0275element(218, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "td");
      \u0275\u0275element(220, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "td");
      \u0275\u0275element(222, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "td");
      \u0275\u0275element(224, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "td");
      \u0275\u0275element(226, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "td");
      \u0275\u0275element(228, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "td")(230, "div")(231, "a", 82);
      \u0275\u0275listener("click", function EditCreditNotesComponent_Template_a_click_231_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(232, "i", 75);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(233, EditCreditNotesComponent_ng_container_233_Template, 20, 0, "ng-container", 83);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(234, "div")(235, "a", 84);
      \u0275\u0275element(236, "i", 26);
      \u0275\u0275text(237, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "div", 39)(239, "div", 0)(240, "div", 85)(241, "div", 9)(242, "h6", 9);
      \u0275\u0275text(243, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "div")(245, "ul", 86)(246, "li", 87)(247, "a", 88);
      \u0275\u0275element(248, "i", 89);
      \u0275\u0275text(249, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "li", 87)(251, "a", 90);
      \u0275\u0275element(252, "i", 91);
      \u0275\u0275text(253, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "li", 87)(255, "a", 92);
      \u0275\u0275element(256, "i", 93);
      \u0275\u0275text(257, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(258, "div", 94)(259, "div", 95)(260, "label", 16);
      \u0275\u0275text(261, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "textarea", 96);
      \u0275\u0275text(263, "Please ensure all payment details are correct before processing. Late payments may incur additional fees. Contact support for queries. Keep this invoice for your records.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "div", 97)(265, "label", 16);
      \u0275\u0275text(266, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(267, "textarea", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 98)(269, "label", 16);
      \u0275\u0275text(270, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "mat-select", 99)(272, "mat-option", 31);
      \u0275\u0275text(273, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "mat-option", 31);
      \u0275\u0275text(275, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "mat-option", 31);
      \u0275\u0275text(277, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "mat-option", 31);
      \u0275\u0275text(279, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "mat-option", 31);
      \u0275\u0275text(281, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "mat-option", 31);
      \u0275\u0275text(283, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(284, "div", 100)(285, "div", 9)(286, "div", 2)(287, "h6", 101);
      \u0275\u0275text(288, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "h6", 101);
      \u0275\u0275text(290, "$565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "div", 2)(292, "h6", 101);
      \u0275\u0275text(293, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "h6", 101);
      \u0275\u0275text(295, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "div", 2)(297, "h6", 101);
      \u0275\u0275text(298, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "h6", 101);
      \u0275\u0275text(300, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "div", 9)(302, "a", 25);
      \u0275\u0275element(303, "i", 26);
      \u0275\u0275text(304, "Add Additional Charges ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "div", 2)(306, "h6", 101);
      \u0275\u0275text(307, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(308, "input", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "div", 103)(310, "div", 34);
      \u0275\u0275element(311, "input", 104);
      \u0275\u0275elementStart(312, "label", 105);
      \u0275\u0275text(313, "Round Off Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "h6", 101);
      \u0275\u0275text(315, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "div", 103)(317, "h6");
      \u0275\u0275text(318, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "h6");
      \u0275\u0275text(320, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(321, "div", 53)(322, "h6", 106);
      \u0275\u0275text(323, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "p");
      \u0275\u0275text(325, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "div", 9)(327, "div", 9)(328, "mat-select", 107)(329, "mat-option", 31);
      \u0275\u0275text(330, "Adrian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "mat-option", 31);
      \u0275\u0275text(332, "Emily Clark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "mat-option", 31);
      \u0275\u0275text(334, "John Carter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "mat-option", 31);
      \u0275\u0275text(336, "Michael Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "mat-option", 31);
      \u0275\u0275text(338, "Olivia Harris");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(339, "p", 108);
      \u0275\u0275text(340, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "div", 109)(342, "label", 16);
      \u0275\u0275text(343, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(344, "input", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "div", 111)(346, "span", 112);
      \u0275\u0275element(347, "i", 113);
      \u0275\u0275text(348, "Upload Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275element(349, "input", 114);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(350, "div", 51)(351, "button", 115);
      \u0275\u0275text(352, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "button", 116);
      \u0275\u0275text(354, "Save");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(355, "div", 117)(356, "div", 118)(357, "div", 119)(358, "div", 120)(359, "div", 121)(360, "h5", 122);
      \u0275\u0275text(361, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "button", 123);
      \u0275\u0275element(363, "i", 124);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(364, "div")(365, "div", 125)(366, "div", 126)(367, "a", 127);
      \u0275\u0275element(368, "i", 128);
      \u0275\u0275text(369, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "a", 127);
      \u0275\u0275element(371, "i", 129);
      \u0275\u0275text(372, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "a", 127);
      \u0275\u0275element(374, "i", 130);
      \u0275\u0275text(375, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(376, "div", 131)(377, "div", 132);
      \u0275\u0275element(378, "img", 133);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "div", 134)(380, "div", 9)(381, "h4", 135);
      \u0275\u0275text(382, "Credit Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "div", 126)(384, "div", 136)(385, "h6", 106);
      \u0275\u0275text(386, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "p");
      \u0275\u0275text(388, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(389, "span");
      \u0275\u0275element(390, "img", 137);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(391, "div", 9);
      \u0275\u0275element(392, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(393, "div", 138)(394, "div", 139)(395, "div")(396, "h6", 140);
      \u0275\u0275text(397, "Credit Notes Details Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "div")(399, "p", 135);
      \u0275\u0275text(400, "Credit Note Id : ");
      \u0275\u0275elementStart(401, "span", 141);
      \u0275\u0275text(402, "9876543");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(403, "p", 135);
      \u0275\u0275text(404, "Credit Note Date : ");
      \u0275\u0275elementStart(405, "span", 141);
      \u0275\u0275text(406, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(407, "p", 135);
      \u0275\u0275text(408, "Due Date : ");
      \u0275\u0275elementStart(409, "span", 141);
      \u0275\u0275text(410, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(411, "span", 142);
      \u0275\u0275text(412, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(413, "div", 139)(414, "div")(415, "h6", 140);
      \u0275\u0275text(416, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "div")(418, "h6", 106);
      \u0275\u0275text(419, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "p", 135);
      \u0275\u0275text(421, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "p", 135);
      \u0275\u0275text(423, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "p", 135);
      \u0275\u0275text(425, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "p", 135);
      \u0275\u0275text(427, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(428, "div", 139)(429, "div")(430, "h6", 140);
      \u0275\u0275text(431, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "div", 143)(433, "div", 144)(434, "div", 145)(435, "span");
      \u0275\u0275element(436, "img", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(437, "h6", 101);
      \u0275\u0275text(438, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(439, "p", 135);
      \u0275\u0275text(440, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(441, "p", 135);
      \u0275\u0275text(442, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "p", 135);
      \u0275\u0275text(444, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "p", 122);
      \u0275\u0275text(446, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(447, "div", 9)(448, "h6", 9);
      \u0275\u0275text(449, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "div", 146)(451, "table", 147)(452, "thead", 65)(453, "tr")(454, "th");
      \u0275\u0275text(455, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "th");
      \u0275\u0275text(457, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "th");
      \u0275\u0275text(459, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "th");
      \u0275\u0275text(461, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "th");
      \u0275\u0275text(463, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "th");
      \u0275\u0275text(465, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "th");
      \u0275\u0275text(467, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "th");
      \u0275\u0275text(469, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(470, "tbody")(471, "tr")(472, "td");
      \u0275\u0275text(473, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "td", 141);
      \u0275\u0275text(475, "T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "td");
      \u0275\u0275text(477, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "td");
      \u0275\u0275text(479, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "td");
      \u0275\u0275text(481, "$200.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "td");
      \u0275\u0275text(483, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "td");
      \u0275\u0275text(485, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "td");
      \u0275\u0275text(487, "$396.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(488, "tr")(489, "td");
      \u0275\u0275text(490, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "td", 141);
      \u0275\u0275text(492, "Office Chair");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "td");
      \u0275\u0275text(494, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "td");
      \u0275\u0275text(496, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "td");
      \u0275\u0275text(498, "$350.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "td");
      \u0275\u0275text(500, "5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "td");
      \u0275\u0275text(502, "$33.25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "td");
      \u0275\u0275text(504, "$365.75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(505, "tr")(506, "td");
      \u0275\u0275text(507, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "td", 141);
      \u0275\u0275text(509, "LED Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "td");
      \u0275\u0275text(511, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "td");
      \u0275\u0275text(513, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "td");
      \u0275\u0275text(515, "$399.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "td");
      \u0275\u0275text(517, "2%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "td");
      \u0275\u0275text(519, "$39.10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(520, "td");
      \u0275\u0275text(521, "$398.90");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(522, "tr")(523, "td");
      \u0275\u0275text(524, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "td", 141);
      \u0275\u0275text(526, "Smartphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "td");
      \u0275\u0275text(528, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "td");
      \u0275\u0275text(530, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(531, "td");
      \u0275\u0275text(532, "$100.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "td");
      \u0275\u0275text(534, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "td");
      \u0275\u0275text(536, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "td");
      \u0275\u0275text(538, "$396.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(539, "div", 39)(540, "div", 0)(541, "div", 148)(542, "div", 149)(543, "div", 45)(544, "p", 109);
      \u0275\u0275text(545, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "span");
      \u0275\u0275element(547, "img", 150);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(548, "div")(549, "h6", 109);
      \u0275\u0275text(550, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "div")(552, "p", 135);
      \u0275\u0275text(553, "Bank Name : ");
      \u0275\u0275elementStart(554, "span", 141);
      \u0275\u0275text(555, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(556, "p", 135);
      \u0275\u0275text(557, "Account Number : ");
      \u0275\u0275elementStart(558, "span", 141);
      \u0275\u0275text(559, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(560, "p", 135);
      \u0275\u0275text(561, "IFSC Code : ");
      \u0275\u0275elementStart(562, "span", 141);
      \u0275\u0275text(563, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "p", 122);
      \u0275\u0275text(565, "Payment Reference : ");
      \u0275\u0275elementStart(566, "span", 141);
      \u0275\u0275text(567, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(568, "div", 151)(569, "div", 9)(570, "div", 2)(571, "h6", 101);
      \u0275\u0275text(572, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(573, "h6", 101);
      \u0275\u0275text(574, "$1,793.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(575, "div", 2)(576, "h6", 101);
      \u0275\u0275text(577, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(578, "h6", 101);
      \u0275\u0275text(579, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(580, "div", 2)(581, "h6", 101);
      \u0275\u0275text(582, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "h6", 101);
      \u0275\u0275text(584, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(585, "div", 103)(586, "h6", 101);
      \u0275\u0275text(587, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "h6", 152);
      \u0275\u0275text(589, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(590, "div", 103)(591, "h6");
      \u0275\u0275text(592, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "h6");
      \u0275\u0275text(594, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(595, "div")(596, "h6", 106);
      \u0275\u0275text(597, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "p");
      \u0275\u0275text(599, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(600, "div", 0)(601, "div", 85)(602, "div", 9)(603, "div", 9)(604, "h6", 106);
      \u0275\u0275text(605, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "p");
      \u0275\u0275text(607, "The Payment must be returned in the same condition.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(608, "div")(609, "h6", 106);
      \u0275\u0275text(610, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "p");
      \u0275\u0275text(612, "All charges are final and include applicable taxes, fees, and additional costs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(613, "div", 100)(614, "div", 153)(615, "span");
      \u0275\u0275element(616, "img", 154);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "h6", 106);
      \u0275\u0275text(618, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(619, "p");
      \u0275\u0275text(620, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(621, "div", 155)(622, "div")(623, "h6", 106);
      \u0275\u0275text(624, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "p");
      \u0275\u0275text(626, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(627, "div");
      \u0275\u0275element(628, "img", 29);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.creditNotes);
      \u0275\u0275advance(209);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.trash ? "none" : ""));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [CommonModule, NgForOf, NgStyle, MatSelectModule, MatSelect, MatOption, RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditCreditNotesComponent, [{
    type: Component,
    args: [{ selector: "app-edit-credit-notes", imports: [CommonModule, MatSelectModule, RouterLink, BsDatepickerModule], template: `<!-- start row -->
<div class="row">
    <div class="col-xxl-11 col-lg-11 mx-auto">
        <div>
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h6><a [routerLink]="routes.creditNotes"><i class="isax isax-arrow-left me-2"></i>Credit Notes</a></h6>
                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_notes"><i class="isax isax-eye me-1"></i>Preview</a>
            </div>
            <div class="card">
                <div class="card-body">
                    <h6 class="mb-3">Credit Note Details</h6>
                    <form (ngSubmit)="redirectPage()">
                        <div class="border-bottom mb-3 pb-1">

                            <!-- start row -->
                            <div class="row justify-content-between">
                                <div class="col-xl-5 col-lg-7">

                                    <!-- start row -->
                                    <div class="row gx-3">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Credit Note Id</label>
                                                <input type="text" class="form-control" placeholder="9876543" readonly="">
                                            </div>
                                        </div><!-- end col -->
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Reference Number</label>
                                                <input type="text" class="form-control" value="1254569">
                                            </div>
                                        </div><!-- end col -->
                                        <div class="col-lg-12">
                                            <label class="form-label">Credit Note Date</label>
                                            <div class="input-group position-relative mb-3">
                                                <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker placeholder="25-03-2025">
                                                <span class="input-icon-addon fs-16 text-gray-9">
                                                    <i class="isax isax-calendar-2"></i>
                                                </span>
                                            </div>
                                        </div><!-- end col -->
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="isax isax-add-circle5 text-primary me-1"></i>Add Due Date</a>
                                            </div>
                                        </div><!-- end col -->
                                    </div>
                                    <!-- end row -->

                                </div><!-- end col -->
                                <div class="col-xl-5 col-lg-5">

                                    <!-- start row -->
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="border border-dashed bg-light rounded text-center p-3 mb-3">
                                                <img src="assets/img/invoice-logo.svg" alt="">
                                            </div>
                                        </div><!-- end col -->
                                        <div class="col-lg-12">
                                            <div class="row gx-3">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <mat-select class="custom-mat-select select" placeholder="Paid">
                                                            <mat-option value="1">Paid</mat-option>
                                                            <mat-option value="1">Pending</mat-option>
                                                            <mat-option value="1">Cancelled</mat-option>
                                                            <mat-option value="1">Partially Paid</mat-option>
                                                            <mat-option value="1">Uncollectable</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <mat-select class="custom-mat-select select" placeholder="$">
                                                            <mat-option value="1">$</mat-option>
                                                            <mat-option value="1">\u20AC</mat-option>
                                                            <mat-option value="1">\xA3</mat-option>
                                                            <mat-option value="1">\u20B9</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end col -->
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
                                        </div><!-- end col -->
                                    </div>
                                    <!-- end row -->

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
                                                    <mat-option value="1">Kanakku</mat-option>
                                                </mat-select>
                                            </div>
                                            <div class="p-3 bg-light rounded border">
                                                <div class="d-flex">
                                                    <div class="me-3">
                                                        <span class="p-2 rounded border"><img src="assets/img/logo-small.svg" alt="image" class="img-fluid"></span>
                                                    </div>
                                                    <div>
                                                        <h6 class="fs-14 mb-1 fw-semibold">Kanakku Invoice Management</h6>
                                                        <p class="mb-1 fs-13">15 Hodges Mews, HP12 3JL, United Kingdom
                                                        </p>
                                                        <p class="mb-1 fs-13">Phone : +1 54664 75945</p>
                                                        <p class="mb-1 fs-13">Email : info&#64;example.com</p>
                                                        <p class="text-dark mb-0 fs-13">GST : 243E45767889</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- end col -->
                                <div class="col-lg-6">
                                    <div class="card shadow-none">
                                        <div class="card-body">
                                            <h6 class="mb-3">Bill To</h6>
                                            <div class="mb-3">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <label class="form-label">Customer Name</label>
                                                    <a href="javascript:void(0);" class="d-inline-flex align-items-center">
                                                        <i class="isax isax-add-circle5 text-primary me-1"></i>Add New
                                                    </a>
                                                </div>
                                                <mat-select class="custom-mat-select select" placeholder="Select">
                                                    <mat-option value="1">Timesquare Tech</mat-option>
                                                </mat-select>
                                            </div>
                                            <div class="p-3 bg-light rounded border">
                                                <div class="d-flex">
                                                    <div class="me-3">
                                                        <span><img src="assets/img/icons/timesquare-icon.svg" alt="image" class="img-fluid rounded"></span>
                                                    </div>
                                                    <div>
                                                        <h6 class="fs-14 mb-1 fw-semibold">Timesquare Tech</h6>
                                                        <p class="mb-1 fs-13">299 Star Trek Drive, Florida, 32405, USA
                                                        </p>
                                                        <p class="mb-1 fs-13">Phone : +1 54664 75945</p>
                                                        <p class="mb-1 fs-13">Email : info&#64;example.com</p>
                                                        <p class="text-dark mb-0 fs-13">GST : 243E45767889</p>
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
                                        <mat-select class="custom-mat-select select" placeholder="Lenovo 3rd Generation">
                                            <mat-option value="1">Lenovo 3rd Generation</mat-option>
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
                            <button type="button" class="btn btn-outline-white border">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div>
    </div><!-- end col -->
</div>
<!-- start row -->



        <!-- view notes Start -->
        <div class="modal fade" id="view_notes">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex mb-3 pb-3 align-items-center justify-content-between border-bottom">
                            <h5 class="mb-0">Preview</h5>
                            <button type="button" class="text-danger bg-transparent border-0 outline-0 p-0 lh-sm" data-bs-dismiss="modal" aria-label="Close">
                                <i class="isax isax-close-circle5 fs-16"></i>
                            </button>
                        </div>
                        <div>
                            <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
                                <div class="d-flex align-items-center flex-wrap row-gap-3">
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-document-like me-1"></i>Download PDF</a>
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-message-notif me-1"></i>Send Email</a>
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-printer me-1"></i>Print</a>
                                </div>
                            </div>
                            <div class="bg-light p-4 rounded position-relative mb-3">
                                <div class="position-absolute top-0 end-0">
                                    <img src="assets/img/bg/card-bg.png" alt="">
                                </div>
                                <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2">
                                    <div class="mb-3">
                                        <h4 class="mb-1">Credit Notes</h4>
                                        <div class="d-flex align-items-center flex-wrap row-gap-3">
                                            <div class="me-4">
                                                <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                                <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                            </div>
                                            <span><img src="assets/img/icons/not-paid.png" alt="" width="48" height="48"></span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <img src="assets/img/invoice-logo.svg" alt="">
                                    </div>
                                </div>

								<!-- start row -->
                                <div class="row gy-3">
                                    <div class="col-lg-4">
                                        <div>
                                            <h6 class="mb-2 fs-16 fw-semibold">Credit Notes Details Details</h6>
                                            <div>
                                                <p class="mb-1">Credit Note Id : <span class="text-dark">9876543</span></p>
                                                <p class="mb-1">Credit Note Date : <span class="text-dark">25 Jan 2025</span></p>
                                                <p class="mb-1">Due Date : <span class="text-dark">31 Jan 2025</span></p>
                                                <span class="badge badge-danger">Due in 8 days</span>
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
                                                    <div class="me-2">
                                                        <span><img src="assets/img/icons/timesquare-icon.svg" alt="image" class="img-fluid rounded"></span>
                                                    </div>
                                                    <h6 class="fs-14 fw-semibold">Timesquare Tech</h6>
                                                </div>
                                                <p class="mb-1">299 Star Trek Drive, Florida, 3240, USA</p>
                                                <p class="mb-1">Phone : +1 54664 75945</p>
                                                <p class="mb-1">Email : info&#64;example.com</p>
                                                <p class="mb-0">GST : 243E45767889</p>
                                            </div>
                                        </div>
                                    </div><!-- end col -->
                                </div>
								<!-- end row -->

                            </div>
                            <div class="mb-3">
                                <h6 class="mb-3">Product / Service Items</h6>
                                <div class="table-responsive rounded border-bottom-0 border">
                                    <table class="table">
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
                                <div class="row">
                                    <div class="col-xl-8 col-lg-6">
                                        <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                                            <div class="me-3">
                                                <p class="mb-2">Scan to the pay</p>
                                                <span><img src="assets/img/icons/qr.png" alt=""></span>
                                            </div>
                                            <div>
                                                <h6 class="mb-2">Bank Details</h6>
                                                <div>
                                                    <p class="mb-1">Bank Name : <span class="text-dark">ABC Bank</span></p>
                                                    <p class="mb-1">Account Number : <span class="text-dark">782459739212</span></p>
                                                    <p class="mb-1">IFSC Code : <span class="text-dark">ABC0001345</span></p>
                                                    <p class="mb-0">Payment Reference : <span class="text-dark">INV-20250220-001</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6">
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
                                                <h6>$596</h6>
                                            </div>
                                            <div>
                                                <h6 class="fs-14 fw-semibold mb-1">Total In Words</h6>
                                                <p>Five Hundred &amp; Ninety Six Dollars</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                        <span><img src="assets/img/icons/sign.png" alt=""></span>
                                        <h6 class="fs-14 fw-semibold mb-1">Ted M. Davis</h6>
                                        <p>Manager</p>
                                    </div>
                                </div><!-- end col -->
                            </div>
							<!-- end row -->

                            <div class="bg-light d-flex align-items-center justify-content-between p-4 rounded card-bg flex-wrap gap-2">
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                    <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                </div>
                                <div>
                                    <img src="assets/img/invoice-logo.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- view notes End -->` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditCreditNotesComponent, { className: "EditCreditNotesComponent", filePath: "src/app/features/invantory-sales/credit-notes/edit-credit-notes/edit-credit-notes.component.ts", lineNumber: 14 });
})();
export {
  EditCreditNotesComponent
};
//# sourceMappingURL=chunk-6P6DG6W2.js.map
