import {
  MatSortModule
} from "./chunk-HOUK7BRS.js";
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
import "./chunk-ZV6UYXXV.js";
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
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/manage/tickets/tickets-list/tickets-list.component.ts
var TicketsListComponent = class _TicketsListComponent {
  routes = routes;
  static \u0275fac = function TicketsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TicketsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketsListComponent, selectors: [["app-tickets-list"]], decls: 406, vars: 3, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-outline-white", "p-2", "d-inline-flex", "align-items-center", "justify-content-center", "me-2", 3, "routerLink"], [1, "isax", "isax-menu-1"], [1, "btn", "btn-primary", "p-2", "d-inline-flex", "align-items-center", "justify-content-center", "me-2", 3, "routerLink"], [1, "isax", "isax-grid-25"], [1, "btn", "btn-outline-white", "p-2", "d-inline-flex", "align-items-center", "justify-content-center", "me-1", 3, "routerLink"], [1, "isax", "isax-kanban"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-2", "border-bottom"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "bg-primary", "rounded-circle"], [1, "isax", "isax-receipt-item"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "end-0", "bottom-0"], ["src", "assets/img/bg/card-overlay-01.svg", "alt", "User Img"], [1, "avatar", "bg-success", "rounded-circle"], [1, "isax", "isax-tick-circle"], ["src", "assets/img/bg/card-overlay-02.svg", "alt", "User Img"], [1, "avatar", "bg-warning", "rounded-circle"], [1, "isax", "isax-timer"], ["src", "assets/img/bg/card-overlay-03.svg", "alt", "User Img"], [1, "avatar", "bg-danger", "rounded-circle"], [1, "isax", "isax-information"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], ["src", "assets/img/bg/card-overlay-04.svg", "alt", "User Img"], [1, "nav", "nav-tabs", "nav-bordered", "mb-3", "ticket-list-tab"], [1, "nav-item"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab-1", 1, "nav-link", "active"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab-2", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab-3", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab-4", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab-5", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "tab-1", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "card", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "flex-wrap"], [1, "fs-14", "me-2", "fw-semibold"], [1, "badge", "badge-soft-success", "badge-sm", "d-inline-flex", "align-items-center"], [1, "badge-dot", "bg-success", "me-2"], [1, "d-flex", "align-items-center", "text-gray-9", "fs-12"], [1, "isax", "isax-clock", "me-1"], [1, "badge", "badge-soft-danger", "badge-sm", "d-flex", "align-items-center", "justify-content-center", "me-3"], [1, "badge", "badge-soft-light", "text-dark", "badge-sm", "d-flex", "align-items-center", "justify-content-center", "me-3"], [1, "fs-12", "text-gray-9"], [1, "isax", "isax-message-text", "me-1", "text-gray-9"], [1, "fs-14", "me-2", "fw-semibold", "text-capitalize"], [1, "badge", "badge-soft-warning", "badge-sm", "d-inline-flex", "align-items-center"], [1, "badge-dot", "bg-warning", "me-2"], [1, "badge", "badge-soft-primary", "badge-sm", "d-flex", "align-items-center", "justify-content-center", "me-3"], [1, "card", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "flex-wrap", "gap-2"], [1, "badge", "badge-soft-light", "text-dark", "badge-sm", "d-inline-flex", "align-items-center"], [1, "badge-dot", "bg-dark", "me-2"], ["id", "tab-2", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "gap-2", "flex-wrap"], [1, "isax", "isax-message-text", "me-1"], ["id", "tab-3", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "tab-4", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "tab-5", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "badge", "badge-soft-danger", "badge-xs", "d-flex", "align-items-center", "justify-content-center", "me-3"], [1, "badge", "badge-soft-light", "text-dark", "badge-xs", "d-flex", "align-items-center", "justify-content-center", "me-3"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["id", "dateRangePicker", 1, "form-label"], [1, "input-group", "position-relative", "mb-3", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "input-group", "position-relative", "mb-3", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-group", "position-relative", "mb-3", "ngxdate2"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate2", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-md-12"], [1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function TicketsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Tickets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275text(16, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ul", 13)(18, "li")(19, "a", 14);
      \u0275\u0275text(20, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 14);
      \u0275\u0275text(23, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div")(25, "a", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, "New Ticket ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div")(34, "p", 22);
      \u0275\u0275text(35, "Total Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h6", 23);
      \u0275\u0275text(37, "298");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div")(39, "span", 24);
      \u0275\u0275element(40, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "p", 26)(42, "span", 27);
      \u0275\u0275element(43, "i", 28);
      \u0275\u0275text(44, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, "from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 29);
      \u0275\u0275element(47, "img", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 19)(50, "div", 20)(51, "div", 21)(52, "div")(53, "p", 22);
      \u0275\u0275text(54, "Completed Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "h6", 23);
      \u0275\u0275text(56, "185");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div")(58, "span", 31);
      \u0275\u0275element(59, "i", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "p", 26)(61, "span", 27);
      \u0275\u0275element(62, "i", 28);
      \u0275\u0275text(63, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 29);
      \u0275\u0275element(66, "img", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 18)(68, "div", 19)(69, "div", 20)(70, "div", 21)(71, "div")(72, "p", 22);
      \u0275\u0275text(73, "In Progress Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h6", 23);
      \u0275\u0275text(75, "32");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div")(77, "span", 34);
      \u0275\u0275element(78, "i", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "p", 26)(80, "span", 27);
      \u0275\u0275element(81, "i", 28);
      \u0275\u0275text(82, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 29);
      \u0275\u0275element(85, "img", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "div", 18)(87, "div", 19)(88, "div", 20)(89, "div", 21)(90, "div")(91, "p", 22);
      \u0275\u0275text(92, "Closed Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "h6", 23);
      \u0275\u0275text(94, "24");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div")(96, "span", 37);
      \u0275\u0275element(97, "i", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "p", 26)(99, "span", 39);
      \u0275\u0275element(100, "i", 40);
      \u0275\u0275text(101, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span", 29);
      \u0275\u0275element(104, "img", 41);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(105, "ul", 42)(106, "li", 43)(107, "a", 44);
      \u0275\u0275text(108, "All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "li", 43)(110, "a", 45);
      \u0275\u0275text(111, "Open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "li", 43)(113, "a", 46);
      \u0275\u0275text(114, "Resolved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "li", 43)(116, "a", 47);
      \u0275\u0275text(117, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "li", 43)(119, "a", 48);
      \u0275\u0275text(120, "Closed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "div", 49)(122, "div", 50)(123, "div")(124, "div", 51)(125, "div", 20)(126, "div", 52)(127, "div", 3)(128, "h6", 53);
      \u0275\u0275text(129, "Support For Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "span", 54);
      \u0275\u0275element(131, "span", 55);
      \u0275\u0275text(132, "Resolved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "span", 56);
      \u0275\u0275element(134, "i", 57);
      \u0275\u0275text(135, "Just Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "p");
      \u0275\u0275text(137, "Our support ticket system ensures quick resolution for your queries. Easily submit tickets for technical issues, billing inquiries, or feature requests. Track your ticket status in real-time and receive prompt assistance from our support team. Stay organized and get the help you need efficiently.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 3)(139, "span", 58);
      \u0275\u0275text(140, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "span", 59);
      \u0275\u0275text(142, "#1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "span", 60);
      \u0275\u0275element(144, "i", 61);
      \u0275\u0275text(145, "14");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(146, "div", 51)(147, "div", 20)(148, "div", 52)(149, "div", 3)(150, "h6", 62);
      \u0275\u0275text(151, "Verify your email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "span", 63);
      \u0275\u0275element(153, "span", 64);
      \u0275\u0275text(154, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "span", 56);
      \u0275\u0275element(156, "i", 57);
      \u0275\u0275text(157, "Just Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "p");
      \u0275\u0275text(159, "Please verify your email to activate your account and access all features. Click the verification link sent to your inbox. If you haven\u2019t received it, check your spam folder or request a new link. Secure your account and start managing your finances effortlessly!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 3)(161, "span", 58);
      \u0275\u0275text(162, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "span", 59);
      \u0275\u0275text(164, "#1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "span", 60);
      \u0275\u0275element(166, "i", 61);
      \u0275\u0275text(167, "14");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(168, "div", 51)(169, "div", 20)(170, "div", 52)(171, "div", 3)(172, "h6", 62);
      \u0275\u0275text(173, "Calling for help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "span", 54);
      \u0275\u0275element(175, "span", 55);
      \u0275\u0275text(176, "Open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "span", 56);
      \u0275\u0275element(178, "i", 57);
      \u0275\u0275text(179, "Just Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "p");
      \u0275\u0275text(181, "If you require immediate support, don't hesitate to call our help center. Our dedicated team is available to assist with technical issues, billing inquiries, and general questions. Contact us for quick and reliable support to keep your accounting operations running smoothly!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 3)(183, "span", 65);
      \u0275\u0275text(184, "low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "span", 59);
      \u0275\u0275text(186, "#1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "span", 60);
      \u0275\u0275element(188, "i", 61);
      \u0275\u0275text(189, "14");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "div", 66)(191, "div", 20)(192, "div", 67)(193, "div", 3)(194, "h6", 62);
      \u0275\u0275text(195, "Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "span", 68);
      \u0275\u0275element(197, "span", 69);
      \u0275\u0275text(198, "Closed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "span", 56);
      \u0275\u0275element(200, "i", 57);
      \u0275\u0275text(201, "Just Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "p");
      \u0275\u0275text(203, "Streamline your business operations with smart financial management tools. Automate invoicing, track expenses, generate reports, and stay tax-compliant with ease. Manage everything from one centralized platform, ensuring efficiency, accuracy, and growth. Take control of your finances and focus on what truly matters\u2014your business success!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 3)(205, "span", 58);
      \u0275\u0275text(206, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "span", 59);
      \u0275\u0275text(208, "#1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "span", 60);
      \u0275\u0275element(210, "i", 61);
      \u0275\u0275text(211, "14");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(212, "div", 70)(213, "div", 51)(214, "div", 20)(215, "div", 71)(216, "div", 3)(217, "h6", 62);
      \u0275\u0275text(218, "Calling for help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "span", 54);
      \u0275\u0275element(220, "span", 55);
      \u0275\u0275text(221, "Open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "span", 56);
      \u0275\u0275element(223, "i", 57);
      \u0275\u0275text(224, "Just Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "p");
      \u0275\u0275text(226, "If you require immediate support, don't hesitate to call our help center. Our dedicated team is available to assist with technical issues, billing inquiries, and general questions. Contact us for quick and reliable support to keep your accounting operations running smoothly!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "div", 3)(228, "span", 65);
      \u0275\u0275text(229, "low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "span", 59);
      \u0275\u0275text(231, "#1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "span", 60);
      \u0275\u0275element(233, "i", 72);
      \u0275\u0275text(234, "14");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(235, "div", 73)(236, "div", 51)(237, "div", 20)(238, "div", 71)(239, "div", 3)(240, "h6", 62);
      \u0275\u0275text(241, "Support For Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "span", 54);
      \u0275\u0275element(243, "span", 55);
      \u0275\u0275text(244, "Resolved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "span", 56);
      \u0275\u0275element(246, "i", 57);
      \u0275\u0275text(247, "Just Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "p");
      \u0275\u0275text(249, "Our support ticket system ensures quick resolution for your queries. Easily submit tickets for technical issues, billing inquiries, or feature requests. Track your ticket status in real-time and receive prompt assistance from our support team. Stay organized and get the help you need efficiently.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "div", 3)(251, "span", 58);
      \u0275\u0275text(252, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "span", 59);
      \u0275\u0275text(254, "#1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "span", 60);
      \u0275\u0275element(256, "i", 72);
      \u0275\u0275text(257, "14");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(258, "div", 74)(259, "div", 51)(260, "div", 20)(261, "div", 71)(262, "div", 3)(263, "h6", 62);
      \u0275\u0275text(264, "Verify your email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "span", 63);
      \u0275\u0275element(266, "span", 64);
      \u0275\u0275text(267, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "span", 56);
      \u0275\u0275element(269, "i", 57);
      \u0275\u0275text(270, "Just Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "p");
      \u0275\u0275text(272, "Please verify your email to activate your account and access all features. Click the verification link sent to your inbox. If you haven\u2019t received it, check your spam folder or request a new link. Secure your account and start managing your finances effortlessly!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 3)(274, "span", 58);
      \u0275\u0275text(275, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "span", 59);
      \u0275\u0275text(277, "#1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "span", 60);
      \u0275\u0275element(279, "i", 72);
      \u0275\u0275text(280, "14");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(281, "div", 75)(282, "div", 66)(283, "div", 20)(284, "div", 71)(285, "div", 3)(286, "h6", 53);
      \u0275\u0275text(287, "Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "span", 68);
      \u0275\u0275element(289, "span", 69);
      \u0275\u0275text(290, "Closed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "span", 56);
      \u0275\u0275element(292, "i", 57);
      \u0275\u0275text(293, "Just Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "p");
      \u0275\u0275text(295, "Streamline your business operations with smart financial management tools. Automate invoicing, track expenses, generate reports, and stay tax-compliant with ease. Manage everything from one centralized platform, ensuring efficiency, accuracy, and growth. Take control of your finances and focus on what truly matters\u2014your business success!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "div", 3)(297, "span", 76);
      \u0275\u0275text(298, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "span", 77);
      \u0275\u0275text(300, "#1234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "span");
      \u0275\u0275element(302, "i", 72);
      \u0275\u0275text(303, "14");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(304, "div", 78)(305, "div", 79)(306, "div", 80)(307, "div", 81)(308, "h4", 82);
      \u0275\u0275text(309, "Add New Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "button", 83);
      \u0275\u0275element(311, "i", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "form")(313, "div", 85)(314, "div", 17)(315, "div", 86)(316, "div", 87)(317, "label", 88);
      \u0275\u0275text(318, "Subject");
      \u0275\u0275elementStart(319, "span", 89);
      \u0275\u0275text(320, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(321, "input", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 86)(323, "div", 87)(324, "label", 88);
      \u0275\u0275text(325, "Assigned Name");
      \u0275\u0275elementStart(326, "span", 89);
      \u0275\u0275text(327, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(328, "input", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div", 86)(330, "div", 87)(331, "label", 91);
      \u0275\u0275text(332, "Assigned Date");
      \u0275\u0275elementStart(333, "span", 89);
      \u0275\u0275text(334, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "div", 92);
      \u0275\u0275element(336, "input", 93);
      \u0275\u0275elementStart(337, "span", 94);
      \u0275\u0275element(338, "i", 95);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(339, "div", 86)(340, "div", 87)(341, "label", 91);
      \u0275\u0275text(342, "Created Date");
      \u0275\u0275elementStart(343, "span", 89);
      \u0275\u0275text(344, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "div", 96);
      \u0275\u0275element(346, "input", 97);
      \u0275\u0275elementStart(347, "span", 94);
      \u0275\u0275element(348, "i", 95);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(349, "div", 86)(350, "div", 87)(351, "label", 91);
      \u0275\u0275text(352, "Due Date");
      \u0275\u0275elementStart(353, "span", 89);
      \u0275\u0275text(354, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "div", 98);
      \u0275\u0275element(356, "input", 99);
      \u0275\u0275elementStart(357, "span", 94);
      \u0275\u0275element(358, "i", 95);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(359, "div", 86)(360, "div", 87)(361, "label", 88);
      \u0275\u0275text(362, "Assignee Name");
      \u0275\u0275elementStart(363, "span", 89);
      \u0275\u0275text(364, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(365, "input", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "div", 86)(367, "div", 87)(368, "label", 88);
      \u0275\u0275text(369, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "mat-select", 100)(371, "mat-option", 101);
      \u0275\u0275text(372, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "mat-option", 101);
      \u0275\u0275text(374, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "mat-option", 101);
      \u0275\u0275text(376, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "mat-option", 101);
      \u0275\u0275text(378, "High");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(379, "div", 86)(380, "div", 87)(381, "label", 88);
      \u0275\u0275text(382, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "mat-select", 100)(384, "mat-option", 101);
      \u0275\u0275text(385, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "mat-option", 101);
      \u0275\u0275text(387, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "mat-option", 101);
      \u0275\u0275text(389, "Closed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "mat-option", 101);
      \u0275\u0275text(391, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "mat-option", 101);
      \u0275\u0275text(393, "Pending");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(394, "div", 102)(395, "div")(396, "label", 88);
      \u0275\u0275text(397, "Content");
      \u0275\u0275elementStart(398, "span", 89);
      \u0275\u0275text(399, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(400, "textarea", 103);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(401, "div", 104)(402, "button", 105);
      \u0275\u0275text(403, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "button", 106);
      \u0275\u0275text(405, "Create");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.ticketLists);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.ticketList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.ticketKanban);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, RouterLink, MatSortModule, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketsListComponent, [{
    type: Component,
    args: [{ selector: "app-tickets-list", imports: [MatSelectModule, RouterLink, MatSortModule, BsDatepickerModule], template: `            <!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Tickets</h6>
                    </div>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <a [routerLink]="routes.ticketLists" class="btn btn-outline-white p-2 d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-menu-1"></i></a>
                            <a [routerLink]="routes.ticketList" class="btn btn-primary p-2 d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-grid-25"></i></a>
                            <a [routerLink]="routes.ticketKanban" class="btn btn-outline-white p-2 d-inline-flex align-items-center justify-content-center me-1"><i class="isax isax-kanban"></i></a>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="isax isax-export-1 me-1"></i>Export
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                <i class="isax isax-add-circle5 me-1"></i>New Ticket
                            </a>
                        </div>
                    </div>
                </div>
                <!-- End Page Header -->

                <!-- start row -->
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                    <div>
                                        <p class="mb-1">Total Tickets</p>
                                        <h6 class="fs-16 fw-semibold">298</h6>
                                    </div>
                                    <div>
                                        <span class="avatar bg-primary rounded-circle">
											<i class="isax isax-receipt-item"></i>
										</span>
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span>from last month</p>
                                <span class="position-absolute end-0 bottom-0">
									<img src="assets/img/bg/card-overlay-01.svg" alt="User Img">
								</span>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- end col -->
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                    <div>
                                        <p class="mb-1">Completed Tickets</p>
                                        <h6 class="fs-16 fw-semibold">185</h6>
                                    </div>
                                    <div>
                                        <span class="avatar bg-success rounded-circle">
											<i class="isax isax-tick-circle"></i>
										</span>
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month</p>
                                <span class="position-absolute end-0 bottom-0">
									<img src="assets/img/bg/card-overlay-02.svg" alt="User Img">
								</span>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- end col -->
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                    <div>
                                        <p class="mb-1">In Progress Tickets</p>
                                        <h6 class="fs-16 fw-semibold">32</h6>
                                    </div>
                                    <div>
                                        <span class="avatar bg-warning rounded-circle">
											<i class="isax isax-timer"></i>
										</span>
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month</p>
                                <span class="position-absolute end-0 bottom-0">
									<img src="assets/img/bg/card-overlay-03.svg" alt="User Img">
								</span>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- end col -->
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                    <div>
                                        <p class="mb-1">Closed Tickets</p>
                                        <h6 class="fs-16 fw-semibold">24</h6>
                                    </div>
                                    <div>
                                        <span class="avatar bg-danger rounded-circle">
											<i class="isax isax-information"></i>
										</span>
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-danger"><i class="isax isax-received text-danger me-1"></i>7.45%</span> from last month</p>
                                <span class="position-absolute end-0 bottom-0">
									<img src="assets/img/bg/card-overlay-04.svg" alt="User Img">
								</span>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- end col -->
                </div>
                <!-- end row -->

                <ul class="nav nav-tabs nav-bordered mb-3 ticket-list-tab">
                    <li class="nav-item"><a class="nav-link active" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab-1">All</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab-2">Open</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab-3">Resolved</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab-4">Pending</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab-5">Closed</a></li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="tab-1" role="tabpanel">
                        <div>
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                        <div class="d-flex align-items-center">
                                            <h6 class="fs-14 me-2 fw-semibold">Support For Theme</h6>
                                            <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center"><span class="badge-dot bg-success me-2"></span>Resolved</span>
                                        </div>
                                        <span class="d-flex align-items-center text-gray-9 fs-12"><i class="isax isax-clock me-1"></i>Just Now</span>
                                    </div>
                                    <p>Our support ticket system ensures quick resolution for your queries. Easily submit tickets for technical issues, billing inquiries, or feature requests. Track your ticket status in real-time and receive prompt assistance from our support team. Stay organized and get the help you need efficiently.</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge badge-soft-danger badge-sm d-flex align-items-center justify-content-center me-3">Medium</span>
                                        <span class="badge badge-soft-light text-dark badge-sm d-flex align-items-center justify-content-center me-3">#1234</span>
                                        <span class="fs-12 text-gray-9"><i class="isax isax-message-text me-1 text-gray-9"></i>14</span>
                                    </div>
                                </div><!-- end card body -->
                            </div><!-- end card -->

                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                        <div class="d-flex align-items-center">
                                            <h6 class="fs-14 me-2 fw-semibold text-capitalize">Verify your email</h6>
                                            <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center"><span class="badge-dot bg-warning me-2"></span>Pending</span>
                                        </div>
                                        <span class="d-flex align-items-center text-gray-9 fs-12"><i class="isax isax-clock me-1"></i>Just Now</span>
                                    </div>
                                    <p>Please verify your email to activate your account and access all features. Click the verification link sent to your inbox. If you haven\u2019t received it, check your spam folder or request a new link. Secure your account and start managing your finances effortlessly!</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge badge-soft-danger badge-sm d-flex align-items-center justify-content-center me-3">High</span>
                                        <span class="badge badge-soft-light text-dark badge-sm d-flex align-items-center justify-content-center me-3">#1234</span>
                                        <span class="fs-12 text-gray-9"><i class="isax isax-message-text me-1 text-gray-9"></i>14</span>
                                    </div>
                                </div><!-- end card body -->
                            </div><!-- end card -->

                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                        <div class="d-flex align-items-center">
                                            <h6 class="fs-14 me-2 fw-semibold text-capitalize">Calling for help</h6>
                                            <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center"><span class="badge-dot bg-success me-2"></span>Open</span>
                                        </div>
                                        <span class="d-flex align-items-center text-gray-9 fs-12"><i class="isax isax-clock me-1"></i>Just Now</span>
                                    </div>
                                    <p>If you require immediate support, don't hesitate to call our help center. Our dedicated team is available to assist with technical issues, billing inquiries, and general questions. Contact us for quick and reliable support to keep your accounting operations running smoothly!</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge badge-soft-primary badge-sm d-flex align-items-center justify-content-center me-3">low</span>
                                        <span class="badge badge-soft-light text-dark badge-sm d-flex align-items-center justify-content-center me-3">#1234</span>
                                        <span class="fs-12 text-gray-9"><i class="isax isax-message-text me-1 text-gray-9"></i>14</span>
                                    </div>
                                </div><!-- end card body -->
                            </div><!-- end card -->

                            <div class="card mb-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                                        <div class="d-flex align-items-center">
                                            <h6 class="fs-14 me-2 fw-semibold text-capitalize">Management</h6>
                                            <span class="badge badge-soft-light text-dark badge-sm d-inline-flex align-items-center"><span class="badge-dot bg-dark me-2"></span>Closed</span>
                                        </div>
                                        <span class="d-flex align-items-center text-gray-9 fs-12"><i class="isax isax-clock me-1"></i>Just Now</span>
                                    </div>
                                    <p>Streamline your business operations with smart financial management tools. Automate invoicing, track expenses, generate reports, and stay tax-compliant with ease. Manage everything from one centralized platform, ensuring efficiency, accuracy, and growth. Take control of your finances and focus on what truly matters\u2014your business success!</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge badge-soft-danger badge-sm d-flex align-items-center justify-content-center me-3">Medium</span>
                                        <span class="badge badge-soft-light text-dark badge-sm d-flex align-items-center justify-content-center me-3">#1234</span>
                                        <span class="fs-12 text-gray-9"><i class="isax isax-message-text me-1 text-gray-9"></i>14</span>
                                    </div>
                                </div><!-- end card body -->
                            </div><!-- end card -->
                            
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tab-2" role="tabpanel">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">
                                    <div class="d-flex align-items-center">
                                        <h6 class="fs-14 me-2 fw-semibold text-capitalize">Calling for help</h6>
                                        <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center"><span class="badge-dot bg-success me-2"></span>Open</span>
                                    </div>
                                    <span class="d-flex align-items-center text-gray-9 fs-12"><i class="isax isax-clock me-1"></i>Just Now</span>
                                </div>
                                <p>If you require immediate support, don't hesitate to call our help center. Our dedicated team is available to assist with technical issues, billing inquiries, and general questions. Contact us for quick and reliable support to keep your accounting operations running smoothly!</p>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-soft-primary badge-sm d-flex align-items-center justify-content-center me-3">low</span>
                                    <span class="badge badge-soft-light text-dark badge-sm d-flex align-items-center justify-content-center me-3">#1234</span>
                                    <span class="fs-12 text-gray-9"><i class="isax isax-message-text me-1 "></i>14</span>
                                </div>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div>
                    <div class="tab-pane fade" id="tab-3" role="tabpanel">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">
                                    <div class="d-flex align-items-center">
                                        <h6 class="fs-14 me-2 fw-semibold text-capitalize">Support For Theme</h6>
                                        <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center"><span class="badge-dot bg-success me-2"></span>Resolved</span>
                                    </div>
                                    <span class="d-flex align-items-center text-gray-9 fs-12"><i class="isax isax-clock me-1"></i>Just Now</span>
                                </div>
                                <p>Our support ticket system ensures quick resolution for your queries. Easily submit tickets for technical issues, billing inquiries, or feature requests. Track your ticket status in real-time and receive prompt assistance from our support team. Stay organized and get the help you need efficiently.</p>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-soft-danger badge-sm d-flex align-items-center justify-content-center me-3">Medium</span>
                                    <span class="badge badge-soft-light text-dark badge-sm d-flex align-items-center justify-content-center me-3">#1234</span>
                                    <span class="fs-12 text-gray-9"><i class="isax isax-message-text me-1"></i>14</span>
                                </div>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div>
                    <div class="tab-pane fade" id="tab-4" role="tabpanel">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">
                                    <div class="d-flex align-items-center">
                                        <h6 class="fs-14 me-2 fw-semibold text-capitalize">Verify your email</h6>
                                        <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center"><span class="badge-dot bg-warning me-2"></span>Pending</span>
                                    </div>
                                    <span class="d-flex align-items-center text-gray-9 fs-12"><i class="isax isax-clock me-1"></i>Just Now</span>
                                </div>
                                <p>Please verify your email to activate your account and access all features. Click the verification link sent to your inbox. If you haven\u2019t received it, check your spam folder or request a new link. Secure your account and start managing your finances effortlessly!</p>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-soft-danger badge-sm d-flex align-items-center justify-content-center me-3">High</span>
                                    <span class="badge badge-soft-light text-dark badge-sm d-flex align-items-center justify-content-center me-3">#1234</span>
                                    <span class="fs-12 text-gray-9"><i class="isax isax-message-text me-1"></i>14</span>
                                </div>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div>
                    <div class="tab-pane fade" id="tab-5" role="tabpanel">
                        <div class="card mb-0">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">
                                    <div class="d-flex align-items-center">
                                        <h6 class="fs-14 me-2 fw-semibold">Management</h6>
                                        <span class="badge badge-soft-light text-dark badge-sm d-inline-flex align-items-center"><span class="badge-dot bg-dark me-2"></span>Closed</span>
                                    </div>
                                    <span class="d-flex align-items-center text-gray-9 fs-12"><i class="isax isax-clock me-1"></i>Just Now</span>
                                </div>
                                <p>Streamline your business operations with smart financial management tools. Automate invoicing, track expenses, generate reports, and stay tax-compliant with ease. Manage everything from one centralized platform, ensuring efficiency, accuracy, and growth. Take control of your finances and focus on what truly matters\u2014your business success!</p>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-soft-danger badge-xs d-flex align-items-center justify-content-center me-3">Medium</span>
                                    <span class="badge badge-soft-light text-dark badge-xs d-flex align-items-center justify-content-center me-3">#1234</span>
                                    <span><i class="isax isax-message-text me-1"></i>14</span>
                                </div>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div>
                </div>

            </div>
            <!-- End Content -->



                    <!-- Add Modal Start -->
        <div id="add_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Ticket</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Subject<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assigned Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Assigned Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Created Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate1">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate1" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Due Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate2">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate2" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assignee Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                            <mat-option value="1">High</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Resolved</mat-option>
                                            <mat-option value="1">Closed</mat-option>
                                            <mat-option value="1">Open</mat-option>
                                            <mat-option value="1">Pending</mat-option>
                                        </mat-select>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Content<span class="text-danger ms-1">*</span></label>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Add Modal End -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketsListComponent, { className: "TicketsListComponent", filePath: "src/app/features/manage/tickets/tickets-list/tickets-list.component.ts", lineNumber: 15 });
})();
export {
  TicketsListComponent
};
//# sourceMappingURL=chunk-FYAN2LRO.js.map
