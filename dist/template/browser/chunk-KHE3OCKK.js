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
  Router,
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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/credit-notes/add-credit-notes/add-credit-notes.component.ts
var _c0 = (a0) => ({ "display": a0 });
function AddCreditNotesComponent_ng_container_237_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function AddCreditNotesComponent_ng_container_237_Template_a_click_18_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(19, "i", 74);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var AddCreditNotesComponent = class _AddCreditNotesComponent {
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
  static \u0275fac = function AddCreditNotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddCreditNotesComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddCreditNotesComponent, selectors: [["app-add-credit-notes"]], decls: 634, vars: 6, consts: [[1, "row"], [1, "col-xxl-10", "col-lg-11", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_notes", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-eye", "me-1"], [1, "card"], [1, "card-body"], [1, "mb-3"], [3, "ngSubmit"], [1, "border-bottom", "mb-3", "pb-1"], [1, "row", "justify-content-between"], [1, "col-xl-5", "col-lg-7"], [1, "row", "gx-3"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "placeholder", "9876543", "readonly", "", 1, "form-control"], ["type", "text", "value", "1254569", 1, "form-control"], [1, "col-lg-12"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "col-md-12"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], [1, "col-xl-5", "col-lg-5"], [1, "border", "border-dashed", "bg-light", "rounded", "text-center", "p-3", "mb-3"], ["src", "assets/img/invoice-logo.svg", "alt", ""], ["placeholder", "Select Status", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "Currency", 1, "custom-mat-select", "select"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "rounded", "p-2", "mb-3"], [1, "form-check", "form-switch", "me-4"], ["type", "checkbox", "role", "switch", "id", "enabe_tax", "checked", "", 1, "form-check-input"], ["for", "enabe_tax", 1, "form-check-label"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "btn-soft-primary"], [1, "isax", "isax-setting-2", "text-primary", "fs-16"], [1, "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "card", "shadow-none"], ["placeholder", "Select", 1, "custom-mat-select", "select"], [1, "p-3", "bg-light", "rounded", "border"], [1, "d-flex"], [1, "me-3"], [1, "p-2", "rounded", "border"], ["src", "assets/img/logo-small.svg", "alt", "image", 1, "img-fluid"], [1, "fs-14", "mb-1", "fw-semibold"], [1, "mb-1", "fs-13"], [1, "text-dark", "mb-0", "fs-13"], [1, "d-flex", "align-items-center", "justify-content-between"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "border-bottom", "mb-3", "pb-3"], [1, "col-xl-4", "col-md-6"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "table-responsive", "rounded", "table-nowrap", "border-bottom-0", "border", "mb-3"], [1, "table", "mb-0", "add-table"], [1, "table-dark"], [1, "add-tbody"], ["type", "text", "value", "Nike Jordon", 1, "form-control"], ["type", "text", "value", "1", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "Pcs", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1360.00", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "0%", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "18", 1, "form-control", 2, "min-width", "66px"], ["type", "text", "value", "$1358.00", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table"], [1, "isax", "isax-close-circle"], [3, "ngStyle"], ["type", "text", "value", "Enter Product Name", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control"], ["type", "text", "value", "Unit", 1, "form-control"], ["type", "text", "value", "0%", 1, "form-control"], ["type", "text", "value", "0", 1, "form-control", 2, "min-width", "66px"], ["href", "javascript:void(0);", 1, "text-danger", "remove-table", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "add-invoice-data", 3, "click"], [1, "col-lg-7"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-solid-primary", "tab-style-1", "border-0", "p-0", "d-flex", "flex-wrap", "gap-3", "mb-3"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#notes", "aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-document-text", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#terms", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-document", "me-1"], ["data-bs-toggle", "tab", "data-bs-target", "#bank", "href", "javascript:void(0);", 1, "nav-link", "d-inline-flex", "align-items-center", "border", "fs-12", "fw-semibold", "rounded-2"], [1, "isax", "isax-bank", "me-1"], [1, "tab-content"], ["id", "notes", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "form-control"], ["id", "terms", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "bank", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "col-lg-5"], [1, "fs-14", "fw-semibold"], ["type", "text", "value", "0%", 1, "form-control", 2, "width", "106px"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], ["type", "checkbox", "role", "switch", "id", "require_check_2", "checked", "", 1, "form-check-input"], ["for", "require_check_2", 1, "form-check-label"], [1, "fs-14", "fw-semibold", "mb-1"], ["placeholder", "Select Signature", 1, "custom-mat-select", "select"], [1, "mb-0", "text-center"], [1, "mb-2"], ["type", "text", "value", "Adrian", 1, "form-control"], [1, "file-upload", "drag-file", "w-100", "h-auto", "py-3", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "d-block"], [1, "isax", "isax-image", "text-primary", "me-1"], ["type", "file", "accept", "video/image"], ["type", "button", 1, "btn", "btn-outline-white", "border"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "view_notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-body"], [1, "d-flex", "mb-3", "pb-3", "align-items-center", "justify-content-between", "border-bottom"], [1, "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "text-danger", "bg-transparent", "border-0", "outline-0", "p-0", "lh-sm"], [1, "isax", "isax-close-circle5", "fs-16"], [1, "d-flex", "align-items-center", "justify-content-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", ""], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2"], [1, "mb-1"], [1, "me-4"], ["src", "assets/img/icons/not-paid.png", "alt", "", "width", "48", "height", "48"], [1, "row", "gy-3"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "badge-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "me-2"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table", "mb-0"], [1, "col-xl-8", "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], ["src", "assets/img/icons/qr.png", "alt", ""], [1, "col-xl-4", "col-lg-6"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "text-lg-end", "mb-3"], ["src", "assets/img/icons/sign.png", "alt", ""], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg", "flex-wrap", "gap-2"]], template: function AddCreditNotesComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("ngSubmit", function AddCreditNotesComponent_Template_form_ngSubmit_15_listener() {
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
      \u0275\u0275text(53, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "mat-option", 31);
      \u0275\u0275text(55, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-option", 31);
      \u0275\u0275text(57, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 31);
      \u0275\u0275text(59, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 31);
      \u0275\u0275text(61, "Partially Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 31);
      \u0275\u0275text(63, "Uncollectable");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 15)(65, "div", 9)(66, "mat-select", 32)(67, "mat-option", 31);
      \u0275\u0275text(68, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-option", 31);
      \u0275\u0275text(70, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 31);
      \u0275\u0275text(72, "\u20AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-option", 31);
      \u0275\u0275text(74, "\xA3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "mat-option", 31);
      \u0275\u0275text(76, "\u20B9");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(77, "div", 24)(78, "div", 33)(79, "div", 34);
      \u0275\u0275element(80, "input", 35);
      \u0275\u0275elementStart(81, "label", 36);
      \u0275\u0275text(82, "Enable Tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div")(84, "a", 37);
      \u0275\u0275element(85, "i", 38);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(86, "div", 39)(87, "div", 0)(88, "div", 40)(89, "div", 41)(90, "div", 8)(91, "h6", 9);
      \u0275\u0275text(92, "Bill From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 9)(94, "label", 16);
      \u0275\u0275text(95, "Billed By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "mat-select", 42)(97, "mat-option", 31);
      \u0275\u0275text(98, "Kanakku");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 43)(100, "div", 44)(101, "div", 45)(102, "span", 46);
      \u0275\u0275element(103, "img", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div")(105, "h6", 48);
      \u0275\u0275text(106, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p", 49);
      \u0275\u0275text(108, "15 Hodges Mews, HP12 3JL, United Kingdom ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 49);
      \u0275\u0275text(110, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p", 49);
      \u0275\u0275text(112, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 50);
      \u0275\u0275text(114, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(115, "div", 40)(116, "div", 41)(117, "div", 8)(118, "h6", 9);
      \u0275\u0275text(119, "Bill To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 9)(121, "div", 51)(122, "label", 16);
      \u0275\u0275text(123, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "a", 25);
      \u0275\u0275element(125, "i", 26);
      \u0275\u0275text(126, "Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "mat-select", 42)(128, "mat-option", 31);
      \u0275\u0275text(129, "Timesquare Tech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 43)(131, "div", 44)(132, "div", 45)(133, "span");
      \u0275\u0275element(134, "img", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div")(136, "h6", 48);
      \u0275\u0275text(137, "Timesquare Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p", 49);
      \u0275\u0275text(139, "299 Star Trek Drive, Florida, 32405, USA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p", 49);
      \u0275\u0275text(141, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p", 49);
      \u0275\u0275text(143, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 50);
      \u0275\u0275text(145, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(146, "div", 53)(147, "div", 0)(148, "div", 54)(149, "h6", 9);
      \u0275\u0275text(150, "Items & Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div")(152, "label", 16);
      \u0275\u0275text(153, "Item Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 55)(155, "div", 56);
      \u0275\u0275element(156, "input", 57);
      \u0275\u0275elementStart(157, "label", 58);
      \u0275\u0275text(158, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 59);
      \u0275\u0275element(160, "input", 60);
      \u0275\u0275elementStart(161, "label", 61);
      \u0275\u0275text(162, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(163, "div", 9)(164, "label", 16);
      \u0275\u0275text(165, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "mat-select", 42)(167, "mat-option", 31);
      \u0275\u0275text(168, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "mat-option", 31);
      \u0275\u0275text(170, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "mat-option", 31);
      \u0275\u0275text(172, "Dell XPS 13 9310");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-option", 31);
      \u0275\u0275text(174, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "mat-option", 31);
      \u0275\u0275text(176, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "mat-option", 31);
      \u0275\u0275text(178, "Adidas Ultraboost ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(179, "div", 62)(180, "table", 63)(181, "thead", 64)(182, "tr")(183, "th");
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
      \u0275\u0275elementStart(198, "tbody", 65)(199, "tr")(200, "td");
      \u0275\u0275element(201, "input", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "td");
      \u0275\u0275element(203, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "td");
      \u0275\u0275element(205, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "td");
      \u0275\u0275element(207, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "td");
      \u0275\u0275element(209, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "td");
      \u0275\u0275element(211, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "td");
      \u0275\u0275element(213, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "td")(215, "div")(216, "a", 73);
      \u0275\u0275element(217, "i", 74);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(218, "tr", 75)(219, "td");
      \u0275\u0275element(220, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "td");
      \u0275\u0275element(222, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "td");
      \u0275\u0275element(224, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "td");
      \u0275\u0275element(226, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "td");
      \u0275\u0275element(228, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "td");
      \u0275\u0275element(230, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "td");
      \u0275\u0275element(232, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "td")(234, "div")(235, "a", 81);
      \u0275\u0275listener("click", function AddCreditNotesComponent_Template_a_click_235_listener() {
        return ctx.isTrash();
      });
      \u0275\u0275element(236, "i", 74);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(237, AddCreditNotesComponent_ng_container_237_Template, 20, 0, "ng-container", 82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "div")(239, "a", 83);
      \u0275\u0275listener("click", function AddCreditNotesComponent_Template_a_click_239_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(240, "i", 26);
      \u0275\u0275text(241, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(242, "div", 39)(243, "div", 0)(244, "div", 84)(245, "div", 9)(246, "h6", 9);
      \u0275\u0275text(247, "Extra Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div")(249, "ul", 85)(250, "li", 86)(251, "a", 87);
      \u0275\u0275element(252, "i", 88);
      \u0275\u0275text(253, "Add Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "li", 86)(255, "a", 89);
      \u0275\u0275element(256, "i", 90);
      \u0275\u0275text(257, "Add Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "li", 86)(259, "a", 91);
      \u0275\u0275element(260, "i", 92);
      \u0275\u0275text(261, "Bank Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(262, "div", 93)(263, "div", 94)(264, "label", 16);
      \u0275\u0275text(265, "Additional Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(266, "textarea", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "div", 96)(268, "label", 16);
      \u0275\u0275text(269, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(270, "textarea", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "div", 97)(272, "label", 16);
      \u0275\u0275text(273, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "mat-select", 42)(275, "mat-option", 31);
      \u0275\u0275text(276, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "mat-option", 31);
      \u0275\u0275text(278, "Andrew - 5225655545555454 (Swiss Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "mat-option", 31);
      \u0275\u0275text(280, "Mark Salween - 4654145644566 (International Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "mat-option", 31);
      \u0275\u0275text(282, "Sophia Martinez - 7890123456789012 (Global Finance)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "mat-option", 31);
      \u0275\u0275text(284, "David Chen - 2345678901234567 (National Bank)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "mat-option", 31);
      \u0275\u0275text(286, "Emily Johnson - 3456789012345678 (Community Credit Union)");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(287, "div", 98)(288, "div", 9)(289, "div", 2)(290, "h6", 99);
      \u0275\u0275text(291, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "h6", 99);
      \u0275\u0275text(293, "$565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "div", 2)(295, "h6", 99);
      \u0275\u0275text(296, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "h6", 99);
      \u0275\u0275text(298, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "div", 2)(300, "h6", 99);
      \u0275\u0275text(301, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "h6", 99);
      \u0275\u0275text(303, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 9)(305, "a", 25);
      \u0275\u0275element(306, "i", 26);
      \u0275\u0275text(307, "Add Additional Charges ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "div", 2)(309, "h6", 99);
      \u0275\u0275text(310, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(311, "input", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "div", 101)(313, "div", 34);
      \u0275\u0275element(314, "input", 102);
      \u0275\u0275elementStart(315, "label", 103);
      \u0275\u0275text(316, "Round Off Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(317, "h6", 99);
      \u0275\u0275text(318, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "div", 101)(320, "h6");
      \u0275\u0275text(321, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "h6");
      \u0275\u0275text(323, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "div", 53)(325, "h6", 104);
      \u0275\u0275text(326, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "p");
      \u0275\u0275text(328, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div", 9)(330, "div", 9)(331, "mat-select", 105)(332, "mat-option", 31);
      \u0275\u0275text(333, "Select Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "mat-option", 31);
      \u0275\u0275text(335, "Adrian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "mat-option", 31);
      \u0275\u0275text(337, "Emily Clark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "mat-option", 31);
      \u0275\u0275text(339, "John Carter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "mat-option", 31);
      \u0275\u0275text(341, "Michael Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "mat-option", 31);
      \u0275\u0275text(343, "Olivia Harris");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(344, "p", 106);
      \u0275\u0275text(345, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "div", 107)(347, "label", 16);
      \u0275\u0275text(348, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(349, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "div", 109)(351, "span", 110);
      \u0275\u0275element(352, "i", 111);
      \u0275\u0275text(353, "Upload Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275element(354, "input", 112);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(355, "div", 51)(356, "button", 113);
      \u0275\u0275text(357, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "button", 114);
      \u0275\u0275text(359, "Save");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(360, "div", 115)(361, "div", 116)(362, "div", 117)(363, "div", 118)(364, "div", 119)(365, "h5", 120);
      \u0275\u0275text(366, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "button", 121);
      \u0275\u0275element(368, "i", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(369, "div")(370, "div", 123)(371, "div", 124)(372, "a", 125);
      \u0275\u0275element(373, "i", 126);
      \u0275\u0275text(374, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "a", 125);
      \u0275\u0275element(376, "i", 127);
      \u0275\u0275text(377, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "a", 125);
      \u0275\u0275element(379, "i", 128);
      \u0275\u0275text(380, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(381, "div", 129)(382, "div", 130);
      \u0275\u0275element(383, "img", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "div", 132)(385, "div", 9)(386, "h4", 133);
      \u0275\u0275text(387, "Credit Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "div", 124)(389, "div", 134)(390, "h6", 104);
      \u0275\u0275text(391, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "p");
      \u0275\u0275text(393, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "span");
      \u0275\u0275element(395, "img", 135);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(396, "div", 9);
      \u0275\u0275element(397, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(398, "div", 136)(399, "div", 137)(400, "div")(401, "h6", 138);
      \u0275\u0275text(402, "Credit Notes Details Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "div")(404, "p", 133);
      \u0275\u0275text(405, "Credit Note Id : ");
      \u0275\u0275elementStart(406, "span", 139);
      \u0275\u0275text(407, "9876543");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(408, "p", 133);
      \u0275\u0275text(409, "Credit Note Date : ");
      \u0275\u0275elementStart(410, "span", 139);
      \u0275\u0275text(411, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(412, "p", 133);
      \u0275\u0275text(413, "Due Date : ");
      \u0275\u0275elementStart(414, "span", 139);
      \u0275\u0275text(415, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "span", 140);
      \u0275\u0275text(417, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(418, "div", 137)(419, "div")(420, "h6", 138);
      \u0275\u0275text(421, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "div")(423, "h6", 104);
      \u0275\u0275text(424, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "p", 133);
      \u0275\u0275text(426, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "p", 133);
      \u0275\u0275text(428, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "p", 133);
      \u0275\u0275text(430, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "p", 133);
      \u0275\u0275text(432, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(433, "div", 137)(434, "div")(435, "h6", 138);
      \u0275\u0275text(436, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "div", 141)(438, "div", 142)(439, "div", 143)(440, "span");
      \u0275\u0275element(441, "img", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(442, "h6", 99);
      \u0275\u0275text(443, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(444, "p", 133);
      \u0275\u0275text(445, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "p", 133);
      \u0275\u0275text(447, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "p", 133);
      \u0275\u0275text(449, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "p", 120);
      \u0275\u0275text(451, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(452, "div", 9)(453, "h6", 9);
      \u0275\u0275text(454, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "div", 144)(456, "table", 145)(457, "thead", 64)(458, "tr")(459, "th");
      \u0275\u0275text(460, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "th");
      \u0275\u0275text(462, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "th");
      \u0275\u0275text(464, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "th");
      \u0275\u0275text(466, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "th");
      \u0275\u0275text(468, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "th");
      \u0275\u0275text(470, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "th");
      \u0275\u0275text(472, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "th");
      \u0275\u0275text(474, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(475, "tbody")(476, "tr")(477, "td");
      \u0275\u0275text(478, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "td", 139);
      \u0275\u0275text(480, "T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "td");
      \u0275\u0275text(482, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "td");
      \u0275\u0275text(484, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "td");
      \u0275\u0275text(486, "$200.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(487, "td");
      \u0275\u0275text(488, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "td");
      \u0275\u0275text(490, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "td");
      \u0275\u0275text(492, "$396.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(493, "tr")(494, "td");
      \u0275\u0275text(495, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "td", 139);
      \u0275\u0275text(497, "Office Chair");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "td");
      \u0275\u0275text(499, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "td");
      \u0275\u0275text(501, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "td");
      \u0275\u0275text(503, "$350.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "td");
      \u0275\u0275text(505, "5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "td");
      \u0275\u0275text(507, "$33.25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "td");
      \u0275\u0275text(509, "$365.75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(510, "tr")(511, "td");
      \u0275\u0275text(512, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(513, "td", 139);
      \u0275\u0275text(514, "LED Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "td");
      \u0275\u0275text(516, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "td");
      \u0275\u0275text(518, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "td");
      \u0275\u0275text(520, "$399.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(521, "td");
      \u0275\u0275text(522, "2%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "td");
      \u0275\u0275text(524, "$39.10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "td");
      \u0275\u0275text(526, "$398.90");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(527, "tr")(528, "td");
      \u0275\u0275text(529, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(530, "td", 139);
      \u0275\u0275text(531, "Smartphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "td");
      \u0275\u0275text(533, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "td");
      \u0275\u0275text(535, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "td");
      \u0275\u0275text(537, "$100.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "td");
      \u0275\u0275text(539, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "td");
      \u0275\u0275text(541, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "td");
      \u0275\u0275text(543, "$396.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(544, "div", 39)(545, "div", 0)(546, "div", 146)(547, "div", 147)(548, "div", 45)(549, "p", 107);
      \u0275\u0275text(550, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "span");
      \u0275\u0275element(552, "img", 148);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "div")(554, "h6", 107);
      \u0275\u0275text(555, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "div")(557, "p", 133);
      \u0275\u0275text(558, "Bank Name : ");
      \u0275\u0275elementStart(559, "span", 139);
      \u0275\u0275text(560, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "p", 133);
      \u0275\u0275text(562, "Account Number : ");
      \u0275\u0275elementStart(563, "span", 139);
      \u0275\u0275text(564, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(565, "p", 133);
      \u0275\u0275text(566, "IFSC Code : ");
      \u0275\u0275elementStart(567, "span", 139);
      \u0275\u0275text(568, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(569, "p", 120);
      \u0275\u0275text(570, "Payment Reference : ");
      \u0275\u0275elementStart(571, "span", 139);
      \u0275\u0275text(572, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(573, "div", 149)(574, "div", 9)(575, "div", 2)(576, "h6", 99);
      \u0275\u0275text(577, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(578, "h6", 99);
      \u0275\u0275text(579, "$1,793.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(580, "div", 2)(581, "h6", 99);
      \u0275\u0275text(582, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "h6", 99);
      \u0275\u0275text(584, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(585, "div", 2)(586, "h6", 99);
      \u0275\u0275text(587, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "h6", 99);
      \u0275\u0275text(589, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(590, "div", 101)(591, "h6", 99);
      \u0275\u0275text(592, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "h6", 150);
      \u0275\u0275text(594, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(595, "div", 101)(596, "h6");
      \u0275\u0275text(597, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "h6");
      \u0275\u0275text(599, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(600, "div")(601, "h6", 104);
      \u0275\u0275text(602, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "p");
      \u0275\u0275text(604, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(605, "div", 0)(606, "div", 84)(607, "div", 9)(608, "div", 9)(609, "h6", 104);
      \u0275\u0275text(610, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "p");
      \u0275\u0275text(612, "The Payment must be returned in the same condition.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(613, "div")(614, "h6", 104);
      \u0275\u0275text(615, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "p");
      \u0275\u0275text(617, "All charges are final and include applicable taxes, fees, and additional costs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(618, "div", 98)(619, "div", 151)(620, "span");
      \u0275\u0275element(621, "img", 152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "h6", 104);
      \u0275\u0275text(623, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "p");
      \u0275\u0275text(625, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(626, "div", 153)(627, "div")(628, "h6", 104);
      \u0275\u0275text(629, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(630, "p");
      \u0275\u0275text(631, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(632, "div");
      \u0275\u0275element(633, "img", 29);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.creditNotes);
      \u0275\u0275advance(213);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx.trash ? "none" : ""));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.formData)("ngForTrackBy", ctx.trackByIndex);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgStyle, RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCreditNotesComponent, [{
    type: Component,
    args: [{ selector: "app-add-credit-notes", imports: [MatSelectModule, CommonModule, RouterLink, BsDatepickerModule], template: `<!-- start row -->
<div class="row">
    <div class="col-xxl-10 col-lg-11 mx-auto">
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
                                    <div class="row gx-3">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Credit Note Id</label>
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
                                            <label class="form-label">Credit Note Date</label>
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
                                                        <mat-select class="custom-mat-select select" placeholder="Select Status">
                                                            <mat-option value="1">Select Status</mat-option>
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
                                                        <mat-select class="custom-mat-select select" placeholder="Currency">
                                                            <mat-option value="1">Currency</mat-option>
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

                            <div class="table-responsive rounded table-nowrap border-bottom-0 border mb-3">
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
                            <button type="button" class="btn btn-outline-white border">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>

                    </form>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div>
    </div><!-- end col -->
</div>
<!-- end row -->


        <!-- Start view notes -->
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
                                    </div>
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
                                    </div>
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
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <h6 class="mb-3">Product / Service Items</h6>
                                <div class="table-responsive rounded border-bottom-0 border">
                                    <table class="table mb-0">
                                        <thead class="table-dark">
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
                                </div>
                                <div class="col-lg-5">
                                    <div class="text-lg-end mb-3">
                                        <span><img src="assets/img/icons/sign.png" alt=""></span>
                                        <h6 class="fs-14 fw-semibold mb-1">Ted M. Davis</h6>
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </div>
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
        <!-- End view notes -->` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddCreditNotesComponent, { className: "AddCreditNotesComponent", filePath: "src/app/features/invantory-sales/credit-notes/add-credit-notes/add-credit-notes.component.ts", lineNumber: 14 });
})();
export {
  AddCreditNotesComponent
};
//# sourceMappingURL=chunk-KHE3OCKK.js.map
