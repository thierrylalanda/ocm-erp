import {
  TagInputComponent,
  TagInputModule
} from "./chunk-LSAJTI6Q.js";
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
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
import "./chunk-SCUCSJ4X.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/application/notes/notes.component.ts
var _c0 = () => ({ standalone: true });
var NotesComponent = class _NotesComponent {
  tags = ["Pending", "Done"];
  static \u0275fac = function NotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesComponent, selectors: [["app-notes"]], decls: 1317, vars: 8, consts: [[1, ""], [1, "mb-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "mb-1", "fw-bold"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "table-header"], [1, "me-2", "mb-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "ti", "ti-file-export", "me-2"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-file-type-pdf", "me-1"], [1, "ti", "ti-file-type-xls", "me-1"], [1, "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_note", 1, "btn", "btn-primary", "btn-md", "d-flex", "align-items-center"], [1, "ti", "ti-circle-plus", "me-2"], [1, "row"], [1, "col-xl-3", "col-md-12", "sidebars-righ", "section-bulk-widget"], [1, "border", "rounded-3", "bg-white", "p-3", "mb-3"], [1, "mb-3", "pb-3", "border-bottom"], [1, "d-flex", "align-items-center", "mb-0"], [1, "ti", "ti-file-text", "me-2"], [1, "border-bottom", "pb-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-profile", "type", "button", "role", "tab", "aria-controls", "v-pills-profile", "aria-selected", "true", 1, "d-flex", "text-start", "align-items-center", "fw-medium", "fs-15", "nav-link", "active", "mb-1"], [1, "ti", "ti-inbox", "me-2"], [1, "ms-2"], ["id", "v-pills-messages-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-messages", "type", "button", "role", "tab", "aria-controls", "v-pills-messages", "aria-selected", "false", 1, "d-flex", "text-start", "align-items-center", "fw-medium", "fs-15", "nav-link", "mb-1"], [1, "ti", "ti-star", "me-2"], ["id", "v-pills-settings-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-settings", "type", "button", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "d-flex", "text-start", "align-items-center", "fw-medium", "fs-15", "nav-link", "mb-0"], [1, "ti", "ti-trash", "me-2"], [1, "mt-3"], [1, "border-bottom", "px-2", "pb-3", "mb-3"], [1, "d-flex", "flex-column", "mt-2"], ["href", "javascript:void(0);", 1, "text-info", "mb-2"], [1, "text-info", "me-2"], [1, "fas", "fa-square", "square-rotate", "fs-10"], ["href", "javascript:void(0);", 1, "text-danger", "mb-2"], [1, "text-danger", "me-2"], ["href", "javascript:void(0);", 1, "text-warning", "mb-2"], [1, "text-warning", "me-2"], ["href", "javascript:void(0);", 1, "text-success"], [1, "text-success", "me-2"], [1, "px-2"], ["href", "javascript:void(0);", 1, "text-success", "mb-2"], ["href", "javascript:void(0);", 1, "text-danger"], [1, "col-xl-9", "budget-role-notes"], [1, "bg-white", "border", "rounded-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-3", "p-3", "pb-0"], [1, "d-flex", "align-items-center", "mb-3"], [1, "me-3"], ["placeholder", "Bulk Actions", 1, "custom-mat-select", "select"], ["value", "1"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], [1, "form-sort", "mb-3", "position-relative"], [1, "ti", "ti-filter", "feather-filter", "info-img", "mb-2"], ["placeholder", "Recent", 1, "custom-mat-select", "notes-select", "select"], ["id", "v-pills-tabContent2", 1, "tab-content"], ["id", "v-pills-profile", "role", "tabpanel", "aria-labelledby", "v-pills-profile-tab", 1, "tab-pane", "fade", "active", "show"], [1, "border-bottom", "mb-3", "pb-3"], [1, "col-md-12"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-2"], [1, "owl-nav", "slide-nav5", "text-end", "nav-control", "ms-3"], [1, "notes-close", "mb-3"], ["href", "javascript:void(0);", 1, "text-danger", "fs-15"], [1, "fas", "fa-times", "me-1"], [1, "notes-slider", "owl-carousel"], [1, "card", "rounded-3", "mb-0"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "badge", "badge-outline-warning", "d-inline-flex", "align-items-center"], [1, "fas", "fa-circle", "fs-6", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-menu", "notes-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-note-units", 1, "dropdown-item"], ["data-feather", "edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item"], ["data-feather", "trash-2"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["data-feather", "star"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-note-units", 1, "dropdown-item"], ["data-feather", "eye"], [1, "my-3"], [1, "text-truncate", "mb-1"], ["href", "javascript:void(0);"], [1, "mb-3", "d-flex", "align-items-center", "text-dark"], [1, "ti", "ti-calendar", "me-1"], [1, "text-truncate", "line-clamb-2", "text-wrap"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-3"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "./assets/img/profiles/avatar-01.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "text-info", "d-flex", "align-items-center"], [1, "fas", "fa-square", "square-rotate", "fs-10", "me-1"], ["href", "javascript:void(0);", 1, "me-2"], [1, "fas", "fa-star", "text-warning"], [1, "ti", "ti-trash", "text-danger"], [1, "badge", "badge-outline-danger", "d-inline-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-02.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "text-success", "d-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-03.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "col-md-4", "d-flex"], [1, "card", "rounded-3", "mb-3", "flex-fill"], [1, "badge", "badge-outline-success", "d-inline-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-05.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], ["src", "./assets/img/profiles/avatar-06.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], ["src", "./assets/img/profiles/avatar-07.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "text-warning", "d-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-08.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], ["src", "./assets/img/profiles/avatar-09.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "badge", "badge-outline-info", "d-inline-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-10.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], ["id", "v-pills-messages", "role", "tabpanel", "aria-labelledby", "v-pills-messages-tab", 1, "tab-pane", "fade"], ["id", "v-pills-settings", "role", "tabpanel", "aria-labelledby", "v-pills-settings-tab", 1, "tab-pane", "fade"], [1, "col-12", "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn", "btn-danger", "mb-3"], [1, "ti", "ti-trash", "f-20", "me-2"], ["id", "add_note", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "ti", "ti-x"], [1, "modal-body"], [1, "col-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], [1, "col-6"], [3, "ngModelChange", "ngModelOptions", "ngModel", "placeholder"], [1, "input-blocks", "todo-calendar"], [1, "input-groupicon", "calender-input", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd-mm-yyyy", 1, "form-control", "datetimepicker"], [1, "col-lg-12"], [1, "mb-0", "summer-description-box"], [1, "quill-editor"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit-note-units", 1, "modal", "fade"], ["type", "text", "value", "Team meet at Starbucks", 1, "form-control"], ["placeholder", "Kathleen", 1, "custom-mat-select", "select"], ["placeholder", "Medium", 1, "custom-mat-select", "select"], [1, "input-groupicon", "calender-input", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "Select", "value", "25-10-2025", 1, "form-control", "datetimepicker"], ["placeholder", "Active", 1, "custom-mat-select", "select"], [1, "quill-editor", "mb-2"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "view-note-units", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-title", "me-3"], [1, "text-info"], [1, "badge", "badge-outline-danger", "d-inline-flex", "align-items-center", "mb-0"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-danger"]], template: function NotesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h4", 2);
      \u0275\u0275text(4, "Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "a", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275text(10, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 8)(12, "li")(13, "a", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275text(15, "Export as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 9);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275text(19, "Export as Excel ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(20, "div", 12)(21, "a", 13);
      \u0275\u0275element(22, "i", 14);
      \u0275\u0275text(23, "Add Notes");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "h6", 19);
      \u0275\u0275element(29, "i", 20);
      \u0275\u0275text(30, "Notes List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 21)(32, "div", 22)(33, "button", 23);
      \u0275\u0275element(34, "i", 24);
      \u0275\u0275text(35, "All Notes");
      \u0275\u0275elementStart(36, "span", 25);
      \u0275\u0275text(37, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "button", 26);
      \u0275\u0275element(39, "i", 27);
      \u0275\u0275text(40, "Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 28);
      \u0275\u0275element(42, "i", 29);
      \u0275\u0275text(43, "Trash");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 30)(45, "div", 31)(46, "h6", 12);
      \u0275\u0275text(47, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 32)(49, "a", 33)(50, "span", 34);
      \u0275\u0275element(51, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 36)(54, "span", 37);
      \u0275\u0275element(55, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, "Onhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "a", 38)(58, "span", 39);
      \u0275\u0275element(59, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, "Inprogress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "a", 40)(62, "span", 41);
      \u0275\u0275element(63, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, "Done");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 42)(66, "h6", 12);
      \u0275\u0275text(67, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 32)(69, "a", 38)(70, "span", 39);
      \u0275\u0275element(71, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 43)(74, "span", 41);
      \u0275\u0275element(75, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(76, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 44)(78, "span", 37);
      \u0275\u0275element(79, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, "Low");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(81, "div", 45)(82, "div", 46)(83, "div", 47)(84, "div", 48)(85, "mat-select", 49)(86, "mat-option", 50);
      \u0275\u0275text(87, "Bulk Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "mat-option", 50);
      \u0275\u0275text(89, "Delete Marked");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "mat-option", 50);
      \u0275\u0275text(91, "Unmark All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "mat-option", 50);
      \u0275\u0275text(93, "Mark All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "a", 51);
      \u0275\u0275text(95, "Apply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 52);
      \u0275\u0275element(97, "i", 53);
      \u0275\u0275elementStart(98, "mat-select", 54)(99, "mat-option", 50);
      \u0275\u0275text(100, "Recent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "mat-option", 50);
      \u0275\u0275text(102, "Last Modified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "mat-option", 50);
      \u0275\u0275text(104, "Last Modified by me");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(105, "div", 55)(106, "div", 56)(107, "div", 57)(108, "div", 15)(109, "div", 58)(110, "div", 59)(111, "div", 47)(112, "h4");
      \u0275\u0275text(113, "Important Notes ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "div", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 61)(116, "a", 62);
      \u0275\u0275element(117, "i", 63);
      \u0275\u0275text(118, " Close ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(119, "div", 58)(120, "div", 64)(121, "div", 65)(122, "div", 66)(123, "div", 67)(124, "span", 68);
      \u0275\u0275element(125, "i", 69);
      \u0275\u0275text(126, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div")(128, "a", 70);
      \u0275\u0275element(129, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 72)(131, "a", 73)(132, "span");
      \u0275\u0275element(133, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(134, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "a", 75)(136, "span");
      \u0275\u0275element(137, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(138, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "a", 77)(140, "span");
      \u0275\u0275element(141, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(142, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "a", 79)(144, "span");
      \u0275\u0275element(145, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(146, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 81)(148, "h6", 82)(149, "a", 83);
      \u0275\u0275text(150, "Plan a trip to another country");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "p", 84);
      \u0275\u0275element(152, "i", 85);
      \u0275\u0275text(153, "20 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p", 86);
      \u0275\u0275text(155, "Space, the final frontier. These are the voyages of the Starship Enterprise. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 87)(157, "div", 88)(158, "a", 89);
      \u0275\u0275element(159, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span", 91);
      \u0275\u0275element(161, "i", 92);
      \u0275\u0275text(162, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 88)(164, "a", 93)(165, "span");
      \u0275\u0275element(166, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "a", 83)(168, "span");
      \u0275\u0275element(169, "i", 95);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(170, "div", 65)(171, "div", 66)(172, "div", 67)(173, "span", 96);
      \u0275\u0275element(174, "i", 69);
      \u0275\u0275text(175, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div")(177, "a", 70);
      \u0275\u0275element(178, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 72)(180, "a", 73)(181, "span");
      \u0275\u0275element(182, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(183, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "a", 75)(185, "span");
      \u0275\u0275element(186, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(187, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "a", 77)(189, "span");
      \u0275\u0275element(190, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(191, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "a", 79)(193, "span");
      \u0275\u0275element(194, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(195, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "div", 81)(197, "h6", 82)(198, "a", 83);
      \u0275\u0275text(199, "Improve touch typing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "p", 84);
      \u0275\u0275element(201, "i", 85);
      \u0275\u0275text(202, "22 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "p", 86);
      \u0275\u0275text(204, "Well, the way they make shows is, they make one show.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "div", 87)(206, "div", 88)(207, "a", 89);
      \u0275\u0275element(208, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "span", 98);
      \u0275\u0275element(210, "i", 92);
      \u0275\u0275text(211, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 88)(213, "a", 93)(214, "span");
      \u0275\u0275element(215, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "a", 83)(217, "span");
      \u0275\u0275element(218, "i", 95);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(219, "div", 65)(220, "div", 66)(221, "div", 67)(222, "span", 96);
      \u0275\u0275element(223, "i", 69);
      \u0275\u0275text(224, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div")(226, "a", 70);
      \u0275\u0275element(227, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div", 72)(229, "a", 73)(230, "span");
      \u0275\u0275element(231, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(232, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "a", 75)(234, "span");
      \u0275\u0275element(235, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(236, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "a", 77)(238, "span");
      \u0275\u0275element(239, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(240, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "a", 79)(242, "span");
      \u0275\u0275element(243, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(244, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(245, "div", 81)(246, "h6", 82)(247, "a", 83);
      \u0275\u0275text(248, "Learn calligraphy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "p", 84);
      \u0275\u0275element(250, "i", 85);
      \u0275\u0275text(251, "24 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "p", 86);
      \u0275\u0275text(253, "Calligraphy, the art of beautiful handwriting. The term may derive from the Greek words. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "div", 87)(255, "div", 88)(256, "a", 89);
      \u0275\u0275element(257, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "span", 91);
      \u0275\u0275element(259, "i", 92);
      \u0275\u0275text(260, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 88)(262, "a", 93)(263, "span");
      \u0275\u0275element(264, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "a", 83)(266, "span");
      \u0275\u0275element(267, "i", 95);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(268, "div", 65)(269, "div", 66)(270, "div", 67)(271, "span", 68);
      \u0275\u0275element(272, "i", 69);
      \u0275\u0275text(273, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div")(275, "a", 70);
      \u0275\u0275element(276, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "div", 72)(278, "a", 73)(279, "span");
      \u0275\u0275element(280, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(281, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "a", 75)(283, "span");
      \u0275\u0275element(284, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(285, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "a", 77)(287, "span");
      \u0275\u0275element(288, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(289, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "a", 79)(291, "span");
      \u0275\u0275element(292, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(293, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(294, "div", 81)(295, "h6", 82)(296, "a", 83);
      \u0275\u0275text(297, "Plan a trip to another country");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "p", 84);
      \u0275\u0275element(299, "i", 85);
      \u0275\u0275text(300, "25 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "p", 86);
      \u0275\u0275text(302, "Space, the final frontier. These are the voyages of the Starship Enterprise. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "div", 87)(304, "div", 88)(305, "a", 89);
      \u0275\u0275element(306, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "span", 91);
      \u0275\u0275element(308, "i", 92);
      \u0275\u0275text(309, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "div", 88)(311, "a", 93)(312, "span");
      \u0275\u0275element(313, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "a", 83)(315, "span");
      \u0275\u0275element(316, "i", 95);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(317, "div", 65)(318, "div", 66)(319, "div", 67)(320, "span", 96);
      \u0275\u0275element(321, "i", 69);
      \u0275\u0275text(322, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div")(324, "a", 70);
      \u0275\u0275element(325, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "div", 72)(327, "a", 73)(328, "span");
      \u0275\u0275element(329, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(330, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "a", 75)(332, "span");
      \u0275\u0275element(333, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(334, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "a", 77)(336, "span");
      \u0275\u0275element(337, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(338, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "a", 79)(340, "span");
      \u0275\u0275element(341, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(342, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(343, "div", 81)(344, "h6", 82)(345, "a", 83);
      \u0275\u0275text(346, "Improve touch typing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(347, "p", 84);
      \u0275\u0275element(348, "i", 85);
      \u0275\u0275text(349, "26 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "p", 86);
      \u0275\u0275text(351, "Well, the way they make shows is, they make one show.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "div", 87)(353, "div", 88)(354, "a", 89);
      \u0275\u0275element(355, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "span", 98);
      \u0275\u0275element(357, "i", 92);
      \u0275\u0275text(358, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "div", 88)(360, "a", 93)(361, "span");
      \u0275\u0275element(362, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "a", 83)(364, "span");
      \u0275\u0275element(365, "i", 95);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(366, "div", 15)(367, "div", 100)(368, "div", 101)(369, "div", 66)(370, "div", 67)(371, "span", 102);
      \u0275\u0275element(372, "i", 69);
      \u0275\u0275text(373, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "div")(375, "a", 70);
      \u0275\u0275element(376, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div", 72)(378, "a", 73)(379, "span");
      \u0275\u0275element(380, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(381, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "a", 75)(383, "span");
      \u0275\u0275element(384, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(385, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "a", 77)(387, "span");
      \u0275\u0275element(388, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(389, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "a", 79)(391, "span");
      \u0275\u0275element(392, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(393, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(394, "div", 81)(395, "h6", 82)(396, "a", 83);
      \u0275\u0275text(397, "Backup Files EOD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(398, "p", 84);
      \u0275\u0275element(399, "i", 85);
      \u0275\u0275text(400, "20 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(401, "p", 86);
      \u0275\u0275text(402, "Project files should be took backup before end of the day.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(403, "div", 87)(404, "div", 88)(405, "a", 89);
      \u0275\u0275element(406, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "span", 91);
      \u0275\u0275element(408, "i", 92);
      \u0275\u0275text(409, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(410, "div", 88)(411, "a", 93)(412, "span");
      \u0275\u0275element(413, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(414, "a", 83)(415, "span");
      \u0275\u0275element(416, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(417, "div", 100)(418, "div", 101)(419, "div", 66)(420, "div", 67)(421, "span", 96);
      \u0275\u0275element(422, "i", 69);
      \u0275\u0275text(423, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "div")(425, "a", 70);
      \u0275\u0275element(426, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "div", 72)(428, "a", 73)(429, "span");
      \u0275\u0275element(430, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(431, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "a", 75)(433, "span");
      \u0275\u0275element(434, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(435, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "a", 77)(437, "span");
      \u0275\u0275element(438, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(439, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "a", 79)(441, "span");
      \u0275\u0275element(442, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(443, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(444, "div", 81)(445, "h6", 82)(446, "a", 83);
      \u0275\u0275text(447, "Download Server Logs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "p", 84);
      \u0275\u0275element(449, "i", 85);
      \u0275\u0275text(450, "25 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "p", 86);
      \u0275\u0275text(452, "Server log is a text document that contains a record of all activity.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(453, "div", 87)(454, "div", 88)(455, "a", 89);
      \u0275\u0275element(456, "img", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "span", 98);
      \u0275\u0275element(458, "i", 92);
      \u0275\u0275text(459, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(460, "div", 88)(461, "a", 93)(462, "span");
      \u0275\u0275element(463, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(464, "a", 83)(465, "span");
      \u0275\u0275element(466, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(467, "div", 100)(468, "div", 101)(469, "div", 66)(470, "div", 67)(471, "span", 68);
      \u0275\u0275element(472, "i", 69);
      \u0275\u0275text(473, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "div")(475, "a", 70);
      \u0275\u0275element(476, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "div", 72)(478, "a", 73)(479, "span");
      \u0275\u0275element(480, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(481, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "a", 75)(483, "span");
      \u0275\u0275element(484, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(485, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "a", 77)(487, "span");
      \u0275\u0275element(488, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(489, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "a", 79)(491, "span");
      \u0275\u0275element(492, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(493, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(494, "div", 81)(495, "h6", 82)(496, "a", 83);
      \u0275\u0275text(497, "Team meet at Starbucks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "p", 84);
      \u0275\u0275element(499, "i", 85);
      \u0275\u0275text(500, "26 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "p", 86);
      \u0275\u0275text(502, "Meeting all teamets at Starbucks for identifying them all.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(503, "div", 87)(504, "div", 88)(505, "a", 89);
      \u0275\u0275element(506, "img", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "span", 106);
      \u0275\u0275element(508, "i", 92);
      \u0275\u0275text(509, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(510, "div", 88)(511, "a", 93)(512, "span");
      \u0275\u0275element(513, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(514, "a", 83)(515, "span");
      \u0275\u0275element(516, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(517, "div", 100)(518, "div", 101)(519, "div", 66)(520, "div", 67)(521, "span", 102);
      \u0275\u0275element(522, "i", 69);
      \u0275\u0275text(523, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "div")(525, "a", 70);
      \u0275\u0275element(526, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "div", 72)(528, "a", 73)(529, "span");
      \u0275\u0275element(530, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(531, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "a", 75)(533, "span");
      \u0275\u0275element(534, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(535, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "a", 77)(537, "span");
      \u0275\u0275element(538, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(539, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "a", 79)(541, "span");
      \u0275\u0275element(542, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(543, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(544, "div", 81)(545, "h6", 82)(546, "a", 83);
      \u0275\u0275text(547, "Create a compost pile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(548, "p", 84);
      \u0275\u0275element(549, "i", 85);
      \u0275\u0275text(550, "27 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "p", 86);
      \u0275\u0275text(552, "Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc.. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "div", 87)(554, "div", 88)(555, "a", 89);
      \u0275\u0275element(556, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "span", 106);
      \u0275\u0275element(558, "i", 92);
      \u0275\u0275text(559, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(560, "div", 88)(561, "a", 93)(562, "span");
      \u0275\u0275element(563, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "a", 83)(565, "span");
      \u0275\u0275element(566, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(567, "div", 100)(568, "div", 101)(569, "div", 66)(570, "div", 67)(571, "span", 96);
      \u0275\u0275element(572, "i", 69);
      \u0275\u0275text(573, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "div")(575, "a", 70);
      \u0275\u0275element(576, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "div", 72)(578, "a", 73)(579, "span");
      \u0275\u0275element(580, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(581, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "a", 75)(583, "span");
      \u0275\u0275element(584, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(585, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "a", 77)(587, "span");
      \u0275\u0275element(588, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(589, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "a", 79)(591, "span");
      \u0275\u0275element(592, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(593, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(594, "div", 81)(595, "h6", 82)(596, "a", 83);
      \u0275\u0275text(597, "Take a hike at a local park");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(598, "p", 84);
      \u0275\u0275element(599, "i", 85);
      \u0275\u0275text(600, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(601, "p", 86);
      \u0275\u0275text(602, "Hiking involves a long energetic walk in a natural environment.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(603, "div", 87)(604, "div", 88)(605, "a", 89);
      \u0275\u0275element(606, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "span", 91);
      \u0275\u0275element(608, "i", 92);
      \u0275\u0275text(609, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(610, "div", 88)(611, "a", 93)(612, "span");
      \u0275\u0275element(613, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(614, "a", 83)(615, "span");
      \u0275\u0275element(616, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(617, "div", 100)(618, "div", 101)(619, "div", 66)(620, "div", 67)(621, "span", 109);
      \u0275\u0275element(622, "i", 69);
      \u0275\u0275text(623, "medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "div")(625, "a", 70);
      \u0275\u0275element(626, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "div", 72)(628, "a", 73)(629, "span");
      \u0275\u0275element(630, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(631, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(632, "a", 75)(633, "span");
      \u0275\u0275element(634, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(635, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "a", 77)(637, "span");
      \u0275\u0275element(638, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(639, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "a", 79)(641, "span");
      \u0275\u0275element(642, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(643, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(644, "div", 81)(645, "h6", 82)(646, "a", 83);
      \u0275\u0275text(647, "Research a topic interested");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(648, "p", 84);
      \u0275\u0275element(649, "i", 85);
      \u0275\u0275text(650, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(651, "p", 86);
      \u0275\u0275text(652, "Research a topic interested by listen actively and attentively.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(653, "div", 87)(654, "div", 88)(655, "a", 89);
      \u0275\u0275element(656, "img", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(657, "span", 98);
      \u0275\u0275element(658, "i", 92);
      \u0275\u0275text(659, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(660, "div", 88)(661, "a", 93)(662, "span");
      \u0275\u0275element(663, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(664, "a", 83)(665, "span");
      \u0275\u0275element(666, "i", 95);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(667, "div", 111)(668, "div", 15)(669, "div", 100)(670, "div", 101)(671, "div", 66)(672, "div", 67)(673, "span", 102);
      \u0275\u0275element(674, "i", 69);
      \u0275\u0275text(675, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "div")(677, "a", 70);
      \u0275\u0275element(678, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "div", 72)(680, "a", 73)(681, "span");
      \u0275\u0275element(682, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(683, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(684, "a", 75)(685, "span");
      \u0275\u0275element(686, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(687, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "a", 77)(689, "span");
      \u0275\u0275element(690, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(691, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "a", 79)(693, "span");
      \u0275\u0275element(694, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(695, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(696, "div", 81)(697, "h6", 82)(698, "a", 83);
      \u0275\u0275text(699, "Backup Files EOD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(700, "p", 84);
      \u0275\u0275element(701, "i", 85);
      \u0275\u0275text(702, "20 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(703, "p", 86);
      \u0275\u0275text(704, "Project files should be took backup before end of the day.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(705, "div", 87)(706, "div", 88)(707, "a", 89);
      \u0275\u0275element(708, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(709, "span", 91);
      \u0275\u0275element(710, "i", 92);
      \u0275\u0275text(711, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(712, "div", 88)(713, "a", 93)(714, "span");
      \u0275\u0275element(715, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(716, "a", 83)(717, "span");
      \u0275\u0275element(718, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(719, "div", 100)(720, "div", 101)(721, "div", 66)(722, "div", 67)(723, "span", 96);
      \u0275\u0275element(724, "i", 69);
      \u0275\u0275text(725, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "div")(727, "a", 70);
      \u0275\u0275element(728, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(729, "div", 72)(730, "a", 73)(731, "span");
      \u0275\u0275element(732, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(733, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(734, "a", 75)(735, "span");
      \u0275\u0275element(736, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(737, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(738, "a", 77)(739, "span");
      \u0275\u0275element(740, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(741, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "a", 79)(743, "span");
      \u0275\u0275element(744, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(745, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(746, "div", 81)(747, "h6", 82)(748, "a", 83);
      \u0275\u0275text(749, "Download Server Logs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(750, "p", 84);
      \u0275\u0275element(751, "i", 85);
      \u0275\u0275text(752, "25 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(753, "p", 86);
      \u0275\u0275text(754, "Server log is a text document that contains a record of all activity.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(755, "div", 87)(756, "div", 88)(757, "a", 89);
      \u0275\u0275element(758, "img", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(759, "span", 98);
      \u0275\u0275element(760, "i", 92);
      \u0275\u0275text(761, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(762, "div", 88)(763, "a", 93)(764, "span");
      \u0275\u0275element(765, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(766, "a", 83)(767, "span");
      \u0275\u0275element(768, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(769, "div", 100)(770, "div", 101)(771, "div", 66)(772, "div", 67)(773, "span", 68);
      \u0275\u0275element(774, "i", 69);
      \u0275\u0275text(775, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(776, "div")(777, "a", 70);
      \u0275\u0275element(778, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(779, "div", 72)(780, "a", 73)(781, "span");
      \u0275\u0275element(782, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(783, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(784, "a", 75)(785, "span");
      \u0275\u0275element(786, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(787, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(788, "a", 77)(789, "span");
      \u0275\u0275element(790, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(791, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(792, "a", 79)(793, "span");
      \u0275\u0275element(794, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(795, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(796, "div", 81)(797, "h6", 82)(798, "a", 83);
      \u0275\u0275text(799, "Team meet at Starbucks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(800, "p", 84);
      \u0275\u0275element(801, "i", 85);
      \u0275\u0275text(802, "26 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "p", 86);
      \u0275\u0275text(804, "Meeting all teamets at Starbucks for identifying them all.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(805, "div", 87)(806, "div", 88)(807, "a", 89);
      \u0275\u0275element(808, "img", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(809, "span", 106);
      \u0275\u0275element(810, "i", 92);
      \u0275\u0275text(811, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(812, "div", 88)(813, "a", 93)(814, "span");
      \u0275\u0275element(815, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(816, "a", 83)(817, "span");
      \u0275\u0275element(818, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(819, "div", 100)(820, "div", 101)(821, "div", 66)(822, "div", 67)(823, "span", 102);
      \u0275\u0275element(824, "i", 69);
      \u0275\u0275text(825, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(826, "div")(827, "a", 70);
      \u0275\u0275element(828, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(829, "div", 72)(830, "a", 73)(831, "span");
      \u0275\u0275element(832, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(833, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(834, "a", 75)(835, "span");
      \u0275\u0275element(836, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(837, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "a", 77)(839, "span");
      \u0275\u0275element(840, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(841, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(842, "a", 79)(843, "span");
      \u0275\u0275element(844, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(845, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(846, "div", 81)(847, "h6", 82)(848, "a", 83);
      \u0275\u0275text(849, "Create a compost pile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(850, "p", 84);
      \u0275\u0275element(851, "i", 85);
      \u0275\u0275text(852, "27 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(853, "p", 86);
      \u0275\u0275text(854, "Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc.. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(855, "div", 87)(856, "div", 88)(857, "a", 89);
      \u0275\u0275element(858, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(859, "span", 106);
      \u0275\u0275element(860, "i", 92);
      \u0275\u0275text(861, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(862, "div", 88)(863, "a", 93)(864, "span");
      \u0275\u0275element(865, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(866, "a", 83)(867, "span");
      \u0275\u0275element(868, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(869, "div", 100)(870, "div", 101)(871, "div", 66)(872, "div", 67)(873, "span", 96);
      \u0275\u0275element(874, "i", 69);
      \u0275\u0275text(875, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "div")(877, "a", 70);
      \u0275\u0275element(878, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(879, "div", 72)(880, "a", 73)(881, "span");
      \u0275\u0275element(882, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(883, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(884, "a", 75)(885, "span");
      \u0275\u0275element(886, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(887, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(888, "a", 77)(889, "span");
      \u0275\u0275element(890, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(891, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(892, "a", 79)(893, "span");
      \u0275\u0275element(894, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(895, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(896, "div", 81)(897, "h6", 82)(898, "a", 83);
      \u0275\u0275text(899, "Take a hike at a local park");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(900, "p", 84);
      \u0275\u0275element(901, "i", 85);
      \u0275\u0275text(902, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(903, "p", 86);
      \u0275\u0275text(904, "Hiking involves a long energetic walk in a natural environment.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(905, "div", 87)(906, "div", 88)(907, "a", 89);
      \u0275\u0275element(908, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(909, "span", 91);
      \u0275\u0275element(910, "i", 92);
      \u0275\u0275text(911, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(912, "div", 88)(913, "a", 93)(914, "span");
      \u0275\u0275element(915, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(916, "a", 83)(917, "span");
      \u0275\u0275element(918, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(919, "div", 100)(920, "div", 101)(921, "div", 66)(922, "div", 67)(923, "span", 109);
      \u0275\u0275element(924, "i", 69);
      \u0275\u0275text(925, "medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(926, "div")(927, "a", 70);
      \u0275\u0275element(928, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(929, "div", 72)(930, "a", 73)(931, "span");
      \u0275\u0275element(932, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(933, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(934, "a", 75)(935, "span");
      \u0275\u0275element(936, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(937, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(938, "a", 77)(939, "span");
      \u0275\u0275element(940, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(941, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(942, "a", 79)(943, "span");
      \u0275\u0275element(944, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(945, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(946, "div", 81)(947, "h6", 82)(948, "a", 83);
      \u0275\u0275text(949, "Research a topic interested");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(950, "p", 84);
      \u0275\u0275element(951, "i", 85);
      \u0275\u0275text(952, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(953, "p", 86);
      \u0275\u0275text(954, "Research a topic interested by listen actively and attentively.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(955, "div", 87)(956, "div", 88)(957, "a", 89);
      \u0275\u0275element(958, "img", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(959, "span", 98);
      \u0275\u0275element(960, "i", 92);
      \u0275\u0275text(961, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(962, "div", 88)(963, "a", 93)(964, "span");
      \u0275\u0275element(965, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(966, "a", 83)(967, "span");
      \u0275\u0275element(968, "i", 95);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(969, "div", 112)(970, "div", 15)(971, "div", 113)(972, "a", 114)(973, "span");
      \u0275\u0275element(974, "i", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275text(975, " Restore all ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(976, "div", 15)(977, "div", 100)(978, "div", 101)(979, "div", 66)(980, "div", 67)(981, "span", 102);
      \u0275\u0275element(982, "i", 69);
      \u0275\u0275text(983, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(984, "div")(985, "a", 70);
      \u0275\u0275element(986, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(987, "div", 72)(988, "a", 73)(989, "span");
      \u0275\u0275element(990, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(991, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(992, "a", 75)(993, "span");
      \u0275\u0275element(994, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(995, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(996, "a", 77)(997, "span");
      \u0275\u0275element(998, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(999, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1e3, "a", 79)(1001, "span");
      \u0275\u0275element(1002, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1003, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1004, "div", 81)(1005, "h6", 82)(1006, "a", 83);
      \u0275\u0275text(1007, "Create a compost pile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1008, "p", 84);
      \u0275\u0275element(1009, "i", 85);
      \u0275\u0275text(1010, "27 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1011, "p", 86);
      \u0275\u0275text(1012, "Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc.. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1013, "div", 87)(1014, "div", 88)(1015, "a", 89);
      \u0275\u0275element(1016, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1017, "span", 106);
      \u0275\u0275element(1018, "i", 92);
      \u0275\u0275text(1019, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1020, "div", 88)(1021, "a", 93)(1022, "span");
      \u0275\u0275element(1023, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1024, "a", 83)(1025, "span");
      \u0275\u0275element(1026, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1027, "div", 100)(1028, "div", 101)(1029, "div", 66)(1030, "div", 67)(1031, "span", 96);
      \u0275\u0275element(1032, "i", 69);
      \u0275\u0275text(1033, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1034, "div")(1035, "a", 70);
      \u0275\u0275element(1036, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1037, "div", 72)(1038, "a", 73)(1039, "span");
      \u0275\u0275element(1040, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1041, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1042, "a", 75)(1043, "span");
      \u0275\u0275element(1044, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1045, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1046, "a", 77)(1047, "span");
      \u0275\u0275element(1048, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1049, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1050, "a", 79)(1051, "span");
      \u0275\u0275element(1052, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1053, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1054, "div", 81)(1055, "h6", 82)(1056, "a", 83);
      \u0275\u0275text(1057, "Take a hike at a local park");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1058, "p", 84);
      \u0275\u0275element(1059, "i", 85);
      \u0275\u0275text(1060, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1061, "p", 86);
      \u0275\u0275text(1062, "Hiking involves a long energetic walk in a natural environment.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1063, "div", 87)(1064, "div", 88)(1065, "a", 89);
      \u0275\u0275element(1066, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1067, "span", 91);
      \u0275\u0275element(1068, "i", 92);
      \u0275\u0275text(1069, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1070, "div", 88)(1071, "a", 93)(1072, "span");
      \u0275\u0275element(1073, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1074, "a", 83)(1075, "span");
      \u0275\u0275element(1076, "i", 95);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1077, "div", 100)(1078, "div", 101)(1079, "div", 66)(1080, "div", 67)(1081, "span", 109);
      \u0275\u0275element(1082, "i", 69);
      \u0275\u0275text(1083, "medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1084, "div")(1085, "a", 70);
      \u0275\u0275element(1086, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1087, "div", 72)(1088, "a", 73)(1089, "span");
      \u0275\u0275element(1090, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1091, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1092, "a", 75)(1093, "span");
      \u0275\u0275element(1094, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1095, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1096, "a", 77)(1097, "span");
      \u0275\u0275element(1098, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1099, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1100, "a", 79)(1101, "span");
      \u0275\u0275element(1102, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1103, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1104, "div", 81)(1105, "h6", 82)(1106, "a", 83);
      \u0275\u0275text(1107, "Research a topic interested");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1108, "p", 84);
      \u0275\u0275element(1109, "i", 85);
      \u0275\u0275text(1110, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1111, "p", 86);
      \u0275\u0275text(1112, "Research a topic interested by listen actively and attentively.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1113, "div", 87)(1114, "div", 88)(1115, "a", 89);
      \u0275\u0275element(1116, "img", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1117, "span", 98);
      \u0275\u0275element(1118, "i", 92);
      \u0275\u0275text(1119, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1120, "div", 88)(1121, "a", 93)(1122, "span");
      \u0275\u0275element(1123, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1124, "a", 83)(1125, "span");
      \u0275\u0275element(1126, "i", 95);
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(1127, "div", 116)(1128, "div", 117)(1129, "div", 118)(1130, "div", 119)(1131, "h4", 120);
      \u0275\u0275text(1132, "Add Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1133, "button", 121);
      \u0275\u0275element(1134, "i", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1135, "form")(1136, "div", 123)(1137, "div", 15)(1138, "div", 124)(1139, "div", 125)(1140, "label", 126);
      \u0275\u0275text(1141, "Note Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1142, "input", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1143, "div", 124)(1144, "div", 125)(1145, "label", 126);
      \u0275\u0275text(1146, "Assignee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1147, "mat-select", 128)(1148, "mat-option", 50);
      \u0275\u0275text(1149, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1150, "mat-option", 50);
      \u0275\u0275text(1151, "Kathleen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1152, "mat-option", 50);
      \u0275\u0275text(1153, "Gifford");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1154, "div", 129)(1155, "div", 125)(1156, "label", 126);
      \u0275\u0275text(1157, "Tag");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1158, "tag-input", 130);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_tag_input_ngModelChange_1158_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1159, "div", 129)(1160, "div", 125)(1161, "label", 126);
      \u0275\u0275text(1162, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1163, "mat-select", 128)(1164, "mat-option", 50);
      \u0275\u0275text(1165, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1166, "mat-option", 50);
      \u0275\u0275text(1167, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1168, "mat-option", 50);
      \u0275\u0275text(1169, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1170, "mat-option", 50);
      \u0275\u0275text(1171, "Low");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1172, "div", 129)(1173, "div", 131)(1174, "label", 126);
      \u0275\u0275text(1175, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1176, "div", 132);
      \u0275\u0275element(1177, "input", 133);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1178, "div", 129)(1179, "div", 125)(1180, "label", 126);
      \u0275\u0275text(1181, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1182, "mat-select", 128)(1183, "mat-option", 50);
      \u0275\u0275text(1184, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1185, "mat-option", 50);
      \u0275\u0275text(1186, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1187, "mat-option", 50);
      \u0275\u0275text(1188, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1189, "div", 134)(1190, "div", 135)(1191, "label", 126);
      \u0275\u0275text(1192, "Descriptions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1193, "div", 136);
      \u0275\u0275elementStart(1194, "small");
      \u0275\u0275text(1195, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1196, "div", 137)(1197, "button", 138);
      \u0275\u0275text(1198, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1199, "button", 139);
      \u0275\u0275text(1200, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1201, "div", 140)(1202, "div", 117)(1203, "div", 118)(1204, "div", 119)(1205, "h4", 120);
      \u0275\u0275text(1206, "Edit Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1207, "button", 121);
      \u0275\u0275element(1208, "i", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1209, "form")(1210, "div", 123)(1211, "div", 15)(1212, "div", 124)(1213, "div", 125)(1214, "label", 126);
      \u0275\u0275text(1215, "Note Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1216, "input", 141);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1217, "div", 124)(1218, "div", 125)(1219, "label", 126);
      \u0275\u0275text(1220, "Assignee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1221, "mat-select", 142)(1222, "mat-option", 50);
      \u0275\u0275text(1223, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1224, "mat-option", 50);
      \u0275\u0275text(1225, "Kathleen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1226, "mat-option", 50);
      \u0275\u0275text(1227, "Gifford");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1228, "div", 129)(1229, "div", 125)(1230, "label", 126);
      \u0275\u0275text(1231, "Tag");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1232, "tag-input", 130);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_tag_input_ngModelChange_1232_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1233, "div", 129)(1234, "div", 125)(1235, "label", 126);
      \u0275\u0275text(1236, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1237, "mat-select", 143)(1238, "mat-option", 50);
      \u0275\u0275text(1239, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1240, "mat-option", 50);
      \u0275\u0275text(1241, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1242, "mat-option", 50);
      \u0275\u0275text(1243, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1244, "mat-option", 50);
      \u0275\u0275text(1245, "Low");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1246, "div", 129)(1247, "div", 131)(1248, "label", 126);
      \u0275\u0275text(1249, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1250, "div", 144);
      \u0275\u0275element(1251, "input", 145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1252, "div", 129)(1253, "div", 125)(1254, "label", 126);
      \u0275\u0275text(1255, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1256, "mat-select", 146)(1257, "mat-option", 50);
      \u0275\u0275text(1258, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1259, "mat-option", 50);
      \u0275\u0275text(1260, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1261, "mat-option", 50);
      \u0275\u0275text(1262, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1263, "div", 134)(1264, "div", 135)(1265, "label", 126);
      \u0275\u0275text(1266, "Descriptions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1267, "div", 147);
      \u0275\u0275elementStart(1268, "small");
      \u0275\u0275text(1269, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1270, "div", 137)(1271, "button", 138);
      \u0275\u0275text(1272, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1273, "button", 139);
      \u0275\u0275text(1274, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1275, "div", 148)(1276, "div", 149)(1277, "div", 118)(1278, "div", 150)(1279, "div", 125);
      \u0275\u0275element(1280, "img", 151);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1281, "h6", 152);
      \u0275\u0275text(1282, "Delete Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1283, "p", 125);
      \u0275\u0275text(1284, "Are you sure, you want to delete Notes?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1285, "div", 153)(1286, "a", 154);
      \u0275\u0275text(1287, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1288, "a", 155);
      \u0275\u0275text(1289, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1290, "div", 156)(1291, "div", 117)(1292, "div", 118)(1293, "div", 157)(1294, "div", 158)(1295, "div", 119)(1296, "div", 88)(1297, "h4", 159);
      \u0275\u0275text(1298, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1299, "p", 160);
      \u0275\u0275text(1300, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1301, "button", 121);
      \u0275\u0275element(1302, "i", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1303, "div", 123)(1304, "div", 15)(1305, "div", 124)(1306, "div")(1307, "h4", 12);
      \u0275\u0275text(1308, "Meet Lisa to discuss project details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1309, "p");
      \u0275\u0275text(1310, "Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century. Religious pilgrimages have existed much longer but they involve walking long distances for a spiritual purpose associated with specific religions and also we achieve inner peace while we hike at a local park.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1311, "p", 161);
      \u0275\u0275element(1312, "i", 69);
      \u0275\u0275text(1313, " High");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1314, "div", 137)(1315, "a", 162);
      \u0275\u0275text(1316, "Close");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(1158);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.tags);
      \u0275\u0275property("placeholder", "Add new");
      \u0275\u0275advance(74);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.tags);
      \u0275\u0275property("placeholder", "Add new");
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption, TagInputModule, TagInputComponent, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotesComponent, [{
    type: Component,
    args: [{ selector: "app-notes", imports: [CommonModule, MatSelectModule, TagInputModule, FormsModule, BsDatepickerModule], template: `            <!-- Start Content -->
            <div class="">

                <div class="mb-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                        <h4 class="mb-1 fw-bold">Notes</h4>
                    </div>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap table-header">
                        <div class="me-2 mb-2">
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                    <i class="ti ti-file-export me-2"></i>Export
                                </a>
                                <ul class="dropdown-menu  dropdown-menu-end p-3">
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-file-type-xls me-1"></i>Export as Excel </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-2">
                            <a href="javascript:void(0);" class="btn btn-primary btn-md d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_note"><i class="ti ti-circle-plus me-2"></i>Add Notes</a>
                        </div>
                    </div>
                </div>

                <!-- start row -->
                <div class="row">
                    <div class="col-xl-3 col-md-12 sidebars-righ section-bulk-widget">
                        <div class="border rounded-3 bg-white p-3 mb-3">
                            <div class="mb-3 pb-3 border-bottom">
                                <h6 class="d-flex align-items-center mb-0"><i class="ti ti-file-text me-2"></i>Notes List</h6>
                            </div>
                            <div class="border-bottom pb-3 ">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="d-flex text-start align-items-center fw-medium fs-15 nav-link active mb-1" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true"><i class="ti ti-inbox me-2"></i>All Notes<span class="ms-2">1</span></button>
                                    <button class="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-1" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="ti ti-star me-2"></i>Important</button>
                                    <button class="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="ti ti-trash me-2"></i>Trash</button>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div class="border-bottom px-2 pb-3 mb-3">
                                    <h6 class="mb-2">Tags</h6>
                                    <div class="d-flex flex-column mt-2">
                                        <a href="javascript:void(0);" class="text-info mb-2"><span
                                            class="text-info me-2"><i
                                                class="fas fa-square square-rotate fs-10"></i></span>Pending</a>
                                        <a href="javascript:void(0);" class="text-danger mb-2"><span
                                            class="text-danger me-2"><i
                                                class="fas fa-square square-rotate fs-10"></i></span>Onhold</a>
                                        <a href="javascript:void(0);" class="text-warning mb-2"><span
                                            class="text-warning me-2"><i
                                                class="fas fa-square square-rotate fs-10"></i></span>Inprogress</a>
                                        <a href="javascript:void(0);" class="text-success"><span
                                            class="text-success me-2"><i
                                                class="fas fa-square square-rotate fs-10"></i></span>Done</a>
                                    </div>
                                </div>
                                <div class="px-2">
                                    <h6 class="mb-2">Priority</h6>
                                    <div class="d-flex flex-column mt-2">
                                        <a href="javascript:void(0);" class="text-warning mb-2"><span
                                            class="text-warning me-2"><i
                                                class="fas fa-square square-rotate fs-10"></i></span>Medium</a>
                                        <a href="javascript:void(0);" class="text-success mb-2"><span
                                            class="text-success me-2"><i
                                                class="fas fa-square square-rotate fs-10"></i></span>High</a>
                                        <a href="javascript:void(0);" class="text-danger"><span
                                            class="text-danger me-2"><i
                                                class="fas fa-square square-rotate fs-10"></i></span>Low</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col-xl-9 budget-role-notes">
                        <div class="bg-white border rounded-3 d-flex align-items-center justify-content-between flex-wrap mb-3 p-3 pb-0">
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-3">
                                    <mat-select class="custom-mat-select select" placeholder="Bulk Actions">
                                        <mat-option value="1">Bulk Actions</mat-option>
                                        <mat-option value="1">Delete Marked</mat-option>
                                        <mat-option value="1">Unmark All</mat-option>
                                        <mat-option value="1">Mark All</mat-option>
                                    </mat-select>
                                </div>
                                <a href="javascript:void(0);" class="btn btn-light">Apply</a>
                            </div>
                            <div class="form-sort mb-3 position-relative">
                                <i class="ti ti-filter feather-filter info-img mb-2"></i>
                                <mat-select class="custom-mat-select notes-select select" placeholder="Recent">
                                    <mat-option value="1">Recent</mat-option>
                                    <mat-option value="1">Last Modified</mat-option>
                                    <mat-option value="1">Last Modified by me</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="tab-content" id="v-pills-tabContent2">

                            <!-- Items -->
                            <div class="tab-pane fade active show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div class="border-bottom mb-3 pb-3">

                                    <!-- start row -->
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap mb-2">
                                                <div class="d-flex align-items-center mb-3">
                                                    <h4>Important Notes </h4>
                                                    <div class="owl-nav slide-nav5 text-end nav-control ms-3"></div>
                                                </div>
                                                <div class="notes-close mb-3">
                                                    <a href="javascript:void(0);" class="text-danger fs-15"><i
                                                        class="fas fa-times me-1"></i> Close </a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end col -->
                                        <div class="col-md-12">
                                            <div class="notes-slider owl-carousel">
                                                <div class="card rounded-3 mb-0">
                                                    <div class="card-body p-4">
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="badge badge-outline-warning d-inline-flex align-items-center"><i
                                                                class="fas fa-circle fs-6 me-1"></i>Medium</span>
                                                            <div>
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="fas fa-ellipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span>
																		<i data-feather="edit"></i></span>Edit</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                            data-feather="trash-2"></i></span>Delete</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                            data-feather="star"></i></span>Not
                                                                    Important</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                            data-feather="eye"></i></span>View</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="my-3">
                                                            <h6 class="text-truncate mb-1"><a
                                                                href="javascript:void(0);">Plan a trip to another
                                                                country</a></h6>
                                                            <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>20 Jan 2024</p>
                                                            <p class="text-truncate line-clamb-2 text-wrap">Space, the final frontier. These are the voyages of the Starship Enterprise.
                                                            </p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                                    <img src="./assets/img/profiles/avatar-01.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                                </a>
                                                                <span class="text-info d-flex align-items-center"><i
                                                                    class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="me-2">
                                                                    <span><i
                                                                        class="fas fa-star text-warning"></i></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i class="ti ti-trash text-danger"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card rounded-3 mb-0">
                                                    <div class="card-body p-4">
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                                class="fas fa-circle fs-6 me-1"></i>Low</span>
                                                            <div>
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="fas fa-ellipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                            data-feather="edit"></i></span>Edit</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                            data-feather="trash-2"></i></span>Delete</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                            data-feather="star"></i></span>Not
                                                                    Important</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                            data-feather="eye"></i></span>View</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="my-3">
                                                            <h6 class="text-truncate mb-1"><a
                                                                href="javascript:void(0);">Improve touch typing</a>
                                                        </h6>
                                                            <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>22 Jan 2024</p>
                                                            <p class="text-truncate line-clamb-2 text-wrap">Well, the way they make shows is, they make one show.</p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                                    <img src="./assets/img/profiles/avatar-02.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                                </a>
                                                                <span class="text-success d-flex align-items-center"><i
                                                                    class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="me-2">
                                                                    <span><i
                                                                        class="fas fa-star text-warning"></i></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i class="ti ti-trash text-danger"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card rounded-3 mb-0">
                                                    <div class="card-body p-4">
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                                class="fas fa-circle fs-6 me-1"></i>Low</span>
                                                            <div>
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="fas fa-ellipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                            data-feather="edit"></i></span>Edit</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                            data-feather="trash-2"></i></span>Delete</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                            data-feather="star"></i></span>Not
                                                                    Important</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                            data-feather="eye"></i></span>View</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="my-3">
                                                            <h6 class="text-truncate mb-1"><a
                                                                href="javascript:void(0);">Learn calligraphy</a>
                                                        </h6>
                                                            <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>24 Jan 2024</p>
                                                            <p class="text-truncate line-clamb-2 text-wrap">Calligraphy, the art of beautiful handwriting. The term may derive from the Greek words. </p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                                    <img src="./assets/img/profiles/avatar-03.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                                </a>
                                                                <span class="text-info d-flex align-items-center"><i
                                                                    class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="me-2">
                                                                    <span><i
                                                                        class="fas fa-star text-warning"></i></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i class="ti ti-trash text-danger"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card rounded-3 mb-0">
                                                    <div class="card-body p-4">
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="badge badge-outline-warning d-inline-flex align-items-center"><i
                                                                class="fas fa-circle fs-6 me-1"></i>Medium</span>
                                                            <div>
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="fas fa-ellipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                            data-feather="edit"></i></span>Edit</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                            data-feather="trash-2"></i></span>Delete</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                            data-feather="star"></i></span>Not
                                                                    Important</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                            data-feather="eye"></i></span>View</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="my-3">
                                                            <h6 class="text-truncate mb-1"><a
                                                                href="javascript:void(0);">Plan a trip to another
                                                                country</a></h6>
                                                            <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>25 Jan 2024</p>
                                                            <p class="text-truncate line-clamb-2 text-wrap">Space, the final frontier. These are the voyages of the Starship Enterprise.
                                                            </p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                                    <img src="./assets/img/profiles/avatar-01.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                                </a>
                                                                <span class="text-info d-flex align-items-center"><i
                                                                    class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="me-2">
                                                                    <span><i
                                                                        class="fas fa-star text-warning"></i></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i class="ti ti-trash text-danger"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card rounded-3 mb-0">
                                                    <div class="card-body p-4">
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                                class="fas fa-circle fs-6 me-1"></i>Low</span>
                                                            <div>
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="fas fa-ellipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                            data-feather="edit"></i></span>Edit</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                            data-feather="trash-2"></i></span>Delete</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                            data-feather="star"></i></span>Not
                                                                    Important</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                            data-feather="eye"></i></span>View</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="my-3">
                                                            <h6 class="text-truncate mb-1"><a
                                                                href="javascript:void(0);">Improve touch typing</a>
                                                        </h6>
                                                            <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>26 Jan 2024</p>
                                                            <p class="text-truncate line-clamb-2 text-wrap">Well, the way they make shows is, they make one show.</p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                                    <img src="./assets/img/profiles/avatar-02.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                                </a>
                                                                <span class="text-success d-flex align-items-center"><i
                                                                    class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <a href="javascript:void(0);" class="me-2">
                                                                    <span><i
                                                                        class="fas fa-star text-warning"></i></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i class="ti ti-trash text-danger"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end row -->
                                </div>
                                <!-- start row -->
                                <div class="row">
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-success d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>High</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Backup
                                                        Files EOD</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>20 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Project files should be took backup before end of the day.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-05.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-info d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end col -->


                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a
                                                        href="javascript:void(0);">Download Server Logs</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>25 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Server log is a text document that contains a record of all activity.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-06.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-success d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end card body -->
                                        </div>
                                        <!-- end card -->
                                    </div>
                                    <!-- end col -->


                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-warning d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>Medium</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Team
                                                        meet at Starbucks</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>26 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Meeting all teamets at Starbucks for identifying them all.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-07.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-warning d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end card body -->
                                        </div>
                                        <!-- end card -->
                                    </div>
                                    <!-- end col -->


                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-success d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>High</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Create
                                                        a compost pile</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>27 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc..
                                                    </p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-08.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-warning d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end card body -->
                                        </div>
                                        <!-- end card -->
                                    </div>
                                    <!-- end col -->


                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Take a
                                                        hike at a local park</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Hiking involves a long energetic walk in a natural environment.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-09.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-info d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end card body -->
                                        </div>
                                        <!-- end card -->
                                    </div>
                                    <!-- end col -->


                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-info d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>medium</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a
                                                        href="javascript:void(0);">Research a topic interested</a>
                                                </h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Research a topic interested by listen actively and attentively.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-10.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-success d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end card body -->
                                        </div>
                                        <!-- end card -->
                                    </div>
                                    <!-- end col -->
                                </div>
                                <!-- end row -->
                            </div>

                            <!-- Items -->
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div class="row">
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-success d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>High</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Backup
                                                        Files EOD</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>20 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Project files should be took backup before end of the day.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-05.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-info d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a
                                                        href="javascript:void(0);">Download Server Logs</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>25 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Server log is a text document that contains a record of all activity.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-06.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-success d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-warning d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>Medium</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Team
                                                        meet at Starbucks</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>26 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Meeting all teamets at Starbucks for identifying them all.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-07.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-warning d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-success d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>High</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Create
                                                        a compost pile</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>27 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc..
                                                    </p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-08.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-warning d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Take a
                                                        hike at a local park</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Hiking involves a long energetic walk in a natural environment.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-09.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-info d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-info d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>medium</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a
                                                        href="javascript:void(0);">Research a topic interested</a>
                                                </h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Research a topic interested by listen actively and attentively.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-10.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-success d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Items -->
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div class="row">
                                    <div class="col-12 d-flex align-items-center justify-content-end">
                                        <a href="javascript:void(0);" class="btn btn-danger mb-3">
                                            <span> <i class="ti ti-trash f-20 me-2"></i> </span> Restore all
                                        </a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-success d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>High</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Create
                                                        a compost pile</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>27 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc..
                                                    </p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-08.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-warning d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a href="javascript:void(0);">Take a
                                                        hike at a local park</a></h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Hiking involves a long energetic walk in a natural environment.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-09.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-info d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                        <div class="card rounded-3 mb-3 flex-fill">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="badge badge-outline-info d-inline-flex align-items-center"><i
                                                        class="fas fa-circle fs-6 me-1"></i>medium</span>
                                                    <div>
                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fas fa-ellipsis-v"></i>
                                                        </a>
                                                        <div class="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i
                                                                    data-feather="edit"></i></span>Edit</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_modal"><span><i
                                                                    data-feather="trash-2"></i></span>Delete</a>
                                                            <a href="javascript:void(0);" class="dropdown-item"><span><i
                                                                    data-feather="star"></i></span>Not Important</a>
                                                            <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i
                                                                    data-feather="eye"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-3">
                                                    <h6 class="text-truncate mb-1"><a
                                                        href="javascript:void(0);">Research a topic interested</a>
                                                </h6>
                                                    <p class="mb-3 d-flex align-items-center text-dark"><i class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p class="text-truncate line-clamb-2 text-wrap">Research a topic interested by listen actively and attentively.</p>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                            <img src="./assets/img/profiles/avatar-10.jpg" alt="Profile" class="img-fluid rounded-circle">
                                                        </a>
                                                        <span class="text-success d-flex align-items-center"><i
                                                            class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="me-2">
                                                            <span><i class="fas fa-star text-warning"></i></span>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <span><i class="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->
                </div>
                <!-- end row -->

            </div>
            <!-- End Content -->


                    <!-- Start Add Note -->
        <div class="modal fade" id="add_note">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Notes</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="ti ti-x"></i>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label class="form-label">Note Title</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label class="form-label">Assignee</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Choose</mat-option>
                                            <mat-option value="1">Kathleen</mat-option>
                                            <mat-option value="1">Gifford</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Tag</label>
                                        <tag-input [ngModelOptions]="{standalone: true}" [(ngModel)]="tags" [placeholder]="'Add new'"></tag-input>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                            <mat-option value="1">High</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-blocks todo-calendar ">
                                        <label class="form-label">Due Date</label>
                                        <div class="input-groupicon calender-input ngxdate1">
                                            <input type="text" class="form-control  datetimepicker" bsDatepicker container=".ngxdate1" placeholder="dd-mm-yyyy">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Active</mat-option>
                                            <mat-option value="1">Inactive</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mb-0 summer-description-box">
                                        <label class="form-label">Descriptions</label>
                                        <div class="quill-editor"></div>
                                        <small>Maximum 60 Characters</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Add Note -->

        <!-- Start Edit Note -->
        <div class="modal fade" id="edit-note-units">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Notes</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="ti ti-x"></i>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label class="form-label">Note Title</label>
                                        <input type="text" class="form-control" value="Team meet at Starbucks">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label class="form-label">Assignee</label>
                                        <mat-select class="custom-mat-select select" placeholder="Kathleen">
                                            <mat-option value="1">Choose</mat-option>
                                            <mat-option value="1">Kathleen</mat-option>
                                            <mat-option value="1">Gifford</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Tag</label>
                                        <tag-input [ngModelOptions]="{standalone: true}" [(ngModel)]="tags" [placeholder]="'Add new'"></tag-input>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority</label>
                                        <mat-select class="custom-mat-select select" placeholder="Medium">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                            <mat-option value="1">High</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-blocks todo-calendar ">
                                        <label class="form-label">Due Date</label>
                                        <div class="input-groupicon calender-input ngxdate">
                                            <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate" placeholder="Select" value="25-10-2025">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <mat-select class="custom-mat-select select" placeholder="Active">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Active</mat-option>
                                            <mat-option value="1">Inactive</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mb-0 summer-description-box">
                                        <label class="form-label">Descriptions</label>
                                        <div class="quill-editor mb-2"></div>
                                        <small>Maximum 60 Characters</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Edit Note -->

        <!-- Start Delete -->
		<div class="modal fade" id="delete_modal">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<div class="modal-content">
					<div class="modal-body text-center">
						<div class="mb-3">
							<img src="assets/img/icons/delete.svg" alt="img">
						</div>
						<h6 class="mb-1">Delete Notes</h6>
						<p class="mb-3">Are you sure,  you want to delete Notes?</p>
						<div class="d-flex justify-content-center">
							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Delete -->

        <!-- Start View Note -->
        <div class="modal fade" id="view-note-units">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="page-wrapper-new p-0">
                        <div class="content">
                            <div class="modal-header">
                                <div class="d-flex align-items-center">
                                    <h4 class="modal-title me-3">Notes</h4>
                                    <p class="text-info">Personal</p>
                                </div>
                                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <i class="ti ti-x"></i>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div>
                                            <h4 class="mb-2">Meet Lisa to discuss project details</h4>
                                            <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century. Religious pilgrimages have existed much longer but
                                                they involve walking long distances for a spiritual purpose associated with specific religions and also we achieve inner peace while we hike at a local park.</p>

                                            <p class="badge badge-outline-danger d-inline-flex align-items-center mb-0"><i class="fas fa-circle fs-6 me-1"></i> High</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End View Note -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesComponent, { className: "NotesComponent", filePath: "src/app/features/application/notes/notes.component.ts", lineNumber: 14 });
})();
export {
  NotesComponent
};
//# sourceMappingURL=chunk-CVTQBDPO.js.map
