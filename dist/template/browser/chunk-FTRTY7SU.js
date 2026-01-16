import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.ts
var EmailTemplatesComponent = class _EmailTemplatesComponent {
  static \u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailTemplatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["app-email-templates"]], decls: 369, vars: 46, consts: [[1, ""], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "mb-3"], [1, "row"], [1, "col-md-3"], [1, "input-icon-start", "position-relative", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm", "bg-white"], [1, "col-md-9"], [1, "d-flex", "justify-content-end", "align-items-center", "flex-wrap", "gap-2", "mb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "table-responsive", "table-nowrap"], [1, "table", "border", "mb-0", "dataTable"], [1, "table-light"], [1, "fw-medium", "fs-14"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_email"], [1, "text-dark"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_email", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "col-lg-12"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "border", "br-10", "p-2", "mb-3"], [1, "text-info"], [1, "border", "rounded-3", "p-3", "mb-3"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-label", "mb-0"], ["id", "view_email", 1, "modal", "fade"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "Email Templates");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "span", 7);
      \u0275\u0275domElement(10, "i", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(11, "input", 9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 10)(13, "div", 11)(14, "div")(15, "a", 12);
      \u0275\u0275domElement(16, "i", 13);
      \u0275\u0275text(17, "New Templates");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(18, "div", 14)(19, "table", 15)(20, "thead", 16)(21, "tr")(22, "th");
      \u0275\u0275text(23, "Template Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "th");
      \u0275\u0275text(25, "Created On");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "th");
      \u0275\u0275text(27, "Status");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(28, "th");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "tbody")(30, "tr")(31, "td")(32, "h6", 17)(33, "a", 18);
      \u0275\u0275text(34, "Welcome Email");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(35, "td")(36, "p", 19);
      \u0275\u0275text(37, "24 Jan 2025");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "td")(39, "div", 20);
      \u0275\u0275domElement(40, "input", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(41, "td")(42, "div", 22)(43, "a", 23);
      \u0275\u0275domElement(44, "i", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "ul", 25)(46, "li")(47, "a", 26);
      \u0275\u0275domElement(48, "i", 27);
      \u0275\u0275text(49, "View");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(50, "li")(51, "a", 28);
      \u0275\u0275domElement(52, "i", 29);
      \u0275\u0275text(53, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "li")(55, "a", 30);
      \u0275\u0275domElement(56, "i", 31);
      \u0275\u0275text(57, "Delete");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(58, "tr")(59, "td")(60, "h6", 17)(61, "a", 18);
      \u0275\u0275text(62, "Booking Confirmation");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(63, "td")(64, "p", 19);
      \u0275\u0275text(65, "27 Dec 2025");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(66, "td")(67, "div", 20);
      \u0275\u0275domElement(68, "input", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(69, "td")(70, "div", 22)(71, "a", 23);
      \u0275\u0275domElement(72, "i", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "ul", 25)(74, "li")(75, "a", 26);
      \u0275\u0275domElement(76, "i", 27);
      \u0275\u0275text(77, "View");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(78, "li")(79, "a", 28);
      \u0275\u0275domElement(80, "i", 29);
      \u0275\u0275text(81, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(82, "li")(83, "a", 30);
      \u0275\u0275domElement(84, "i", 31);
      \u0275\u0275text(85, "Delete");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(86, "tr")(87, "td")(88, "h6", 17)(89, "a", 18);
      \u0275\u0275text(90, "Booking Reminder");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(91, "td")(92, "p", 19);
      \u0275\u0275text(93, "19 Dec 2025");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(94, "td")(95, "div", 20);
      \u0275\u0275domElement(96, "input", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(97, "td")(98, "div", 22)(99, "a", 23);
      \u0275\u0275domElement(100, "i", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(101, "ul", 25)(102, "li")(103, "a", 26);
      \u0275\u0275domElement(104, "i", 27);
      \u0275\u0275text(105, "View");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(106, "li")(107, "a", 28);
      \u0275\u0275domElement(108, "i", 29);
      \u0275\u0275text(109, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(110, "li")(111, "a", 30);
      \u0275\u0275domElement(112, "i", 31);
      \u0275\u0275text(113, "Delete");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(114, "tr")(115, "td")(116, "h6", 17)(117, "a", 18);
      \u0275\u0275text(118, "Booking Cancellation");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(119, "td")(120, "p", 19);
      \u0275\u0275text(121, "08 Dec 2025");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(122, "td")(123, "div", 20);
      \u0275\u0275domElement(124, "input", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(125, "td")(126, "div", 22)(127, "a", 23);
      \u0275\u0275domElement(128, "i", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(129, "ul", 25)(130, "li")(131, "a", 26);
      \u0275\u0275domElement(132, "i", 27);
      \u0275\u0275text(133, "View");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(134, "li")(135, "a", 28);
      \u0275\u0275domElement(136, "i", 29);
      \u0275\u0275text(137, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(138, "li")(139, "a", 30);
      \u0275\u0275domElement(140, "i", 31);
      \u0275\u0275text(141, "Delete");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(142, "tr")(143, "td")(144, "h6", 17)(145, "a", 18);
      \u0275\u0275text(146, "Seasonal Promotions & Discounts");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(147, "td")(148, "p", 19);
      \u0275\u0275text(149, "25 Nov 2025");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(150, "td")(151, "div", 20);
      \u0275\u0275domElement(152, "input", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(153, "td")(154, "div", 22)(155, "a", 23);
      \u0275\u0275domElement(156, "i", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(157, "ul", 25)(158, "li")(159, "a", 26);
      \u0275\u0275domElement(160, "i", 27);
      \u0275\u0275text(161, "View");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(162, "li")(163, "a", 28);
      \u0275\u0275domElement(164, "i", 29);
      \u0275\u0275text(165, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(166, "li")(167, "a", 30);
      \u0275\u0275domElement(168, "i", 31);
      \u0275\u0275text(169, "Delete");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(170, "tr")(171, "td")(172, "h6", 17)(173, "a", 18);
      \u0275\u0275text(174, "System Update");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(175, "td")(176, "p", 19);
      \u0275\u0275text(177, "20 Nov 2025");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(178, "td")(179, "div", 20);
      \u0275\u0275domElement(180, "input", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(181, "td")(182, "div", 22)(183, "a", 23);
      \u0275\u0275domElement(184, "i", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(185, "ul", 25)(186, "li")(187, "a", 26);
      \u0275\u0275domElement(188, "i", 27);
      \u0275\u0275text(189, "View");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(190, "li")(191, "a", 28);
      \u0275\u0275domElement(192, "i", 29);
      \u0275\u0275text(193, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(194, "li")(195, "a", 30);
      \u0275\u0275domElement(196, "i", 31);
      \u0275\u0275text(197, "Delete");
      \u0275\u0275domElementEnd()()()()()()()()()()()();
      \u0275\u0275domElementStart(198, "div", 32)(199, "div", 33)(200, "div", 34)(201, "div", 35)(202, "h5", 2);
      \u0275\u0275text(203, "Add Template");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(204, "button", 36);
      \u0275\u0275domElement(205, "i", 37);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(206, "div", 38)(207, "div", 4)(208, "div", 39)(209, "div", 2)(210, "label", 40);
      \u0275\u0275text(211, "Template Name ");
      \u0275\u0275domElementStart(212, "span", 41);
      \u0275\u0275text(213, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(214, "input", 42);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(215, "div", 43)(216, "button", 44);
      \u0275\u0275text(217, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(218, "button", 45);
      \u0275\u0275text(219, "Add New");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(220, "div", 46)(221, "div", 47)(222, "div", 34)(223, "div", 35)(224, "h5", 2);
      \u0275\u0275text(225, "Edit Template");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(226, "button", 36);
      \u0275\u0275domElement(227, "i", 37);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(228, "div", 38)(229, "div", 4)(230, "div", 39)(231, "div", 48)(232, "p");
      \u0275\u0275text(233, " Hi ");
      \u0275\u0275domElementStart(234, "span", 49);
      \u0275\u0275text(235);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(236, ", ");
      \u0275\u0275domElement(237, "br");
      \u0275\u0275text(238, " Welcome to ");
      \u0275\u0275domElementStart(239, "span", 49);
      \u0275\u0275text(240);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(241, "! ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(242, "p");
      \u0275\u0275text(243, " We\u2019re thrilled to have you as part of our community and are excited to support you in finding the perfect car rental solution. Thank you for choosing us \u2013 we truly appreciate your trust and confidence. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(244, "p");
      \u0275\u0275text(245, " At ");
      \u0275\u0275domElementStart(246, "span", 49);
      \u0275\u0275text(247);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(248, ", our mission is to make your experience as smooth and efficient as possible. Whether you\u2019re looking for the perfect vehicle or need assistance with booking, we\u2019re here to help you every step of the way. If you have any questions or need help, our dedicated support team is always ready to assist you. Feel free to reach out at any time \u2013 we\u2019re committed to ensuring you have the best experience possible ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(249, "p");
      \u0275\u0275text(250, " Thank you again for choosing ");
      \u0275\u0275domElementStart(251, "span", 49);
      \u0275\u0275text(252);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(253, ". We\u2019re excited to be part of your journey and look forward to supporting you throughout your rental experience. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(254, "p");
      \u0275\u0275text(255, " Best ");
      \u0275\u0275domElement(256, "br");
      \u0275\u0275text(257, " The ");
      \u0275\u0275domElementStart(258, "span", 49);
      \u0275\u0275text(259);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(260, "Team ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(261, "div", 50)(262, "label", 40);
      \u0275\u0275text(263, "Tags");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(264, "ul", 51)(265, "li")(266, "span", 49);
      \u0275\u0275text(267);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(268, "li")(269, "span", 49);
      \u0275\u0275text(270);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(271, "li")(272, "span", 49);
      \u0275\u0275text(273);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(274, "li")(275, "span", 49);
      \u0275\u0275text(276);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(277, "li")(278, "span", 49);
      \u0275\u0275text(279);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(280, "li")(281, "span", 49);
      \u0275\u0275text(282);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(283, "li")(284, "span", 49);
      \u0275\u0275text(285);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(286, "li")(287, "span", 49);
      \u0275\u0275text(288);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(289, "li")(290, "span", 49);
      \u0275\u0275text(291);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(292, "li")(293, "span", 49);
      \u0275\u0275text(294);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(295, "li")(296, "span", 49);
      \u0275\u0275text(297);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(298, "li")(299, "span", 49);
      \u0275\u0275text(300);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(301, "li")(302, "span", 49);
      \u0275\u0275text(303);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(304, "div", 52)(305, "label", 53);
      \u0275\u0275text(306, " Status ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(307, "div", 20);
      \u0275\u0275domElement(308, "input", 21);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(309, "div", 43)(310, "button", 44);
      \u0275\u0275text(311, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(312, "button", 45);
      \u0275\u0275text(313, "Save Changes");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(314, "div", 54)(315, "div", 33)(316, "div", 34)(317, "div", 35)(318, "h5", 2);
      \u0275\u0275text(319, "Preview Template");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(320, "button", 36);
      \u0275\u0275domElement(321, "i", 37);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(322, "div", 38)(323, "div", 4)(324, "div", 39)(325, "p");
      \u0275\u0275text(326, " Hi ");
      \u0275\u0275domElementStart(327, "span", 49);
      \u0275\u0275text(328);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(329, ", ");
      \u0275\u0275domElement(330, "br");
      \u0275\u0275text(331, " Welcome to ");
      \u0275\u0275domElementStart(332, "span", 49);
      \u0275\u0275text(333);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(334, "! ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(335, "p");
      \u0275\u0275text(336, " We\u2019re thrilled to have you as part of our community and are excited to support you in finding the perfect car rental solution. Thank you for choosing us \u2013 we truly appreciate your trust and confidence. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(337, "p");
      \u0275\u0275text(338, " At ");
      \u0275\u0275domElementStart(339, "span", 49);
      \u0275\u0275text(340);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(341, ", our mission is to make your experience as smooth and efficient as possible. Whether you\u2019re looking for the perfect vehicle or need assistance with booking, we\u2019re here to help you every step of the way. If you have any questions or need help, our dedicated support team is always ready to assist you. Feel free to reach out at any time \u2013 we\u2019re committed to ensuring you have the best experience possible ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(342, "p");
      \u0275\u0275text(343, " Thank you again for choosing ");
      \u0275\u0275domElementStart(344, "span", 49);
      \u0275\u0275text(345);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(346, ". We\u2019re excited to be part of your journey and look forward to supporting you throughout your rental experience. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(347, "p");
      \u0275\u0275text(348, " Best ");
      \u0275\u0275domElement(349, "br");
      \u0275\u0275text(350, " The ");
      \u0275\u0275domElementStart(351, "span", 49);
      \u0275\u0275text(352);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(353, "Team ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(354, "div", 55)(355, "div", 56)(356, "div", 34)(357, "div", 57)(358, "div", 3);
      \u0275\u0275domElement(359, "img", 58);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(360, "h6", 59);
      \u0275\u0275text(361, "Delete Email Template");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(362, "p", 3);
      \u0275\u0275text(363, "Are you sure, you want to delete email template?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(364, "div", 60)(365, "a", 61);
      \u0275\u0275text(366, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(367, "a", 62);
      \u0275\u0275text(368, "Yes, Delete");
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(235);
      \u0275\u0275textInterpolate2("", "{", "Customer Name", "}");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Booking Number", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Booking Date", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Car Name", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Invoice ID", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Receipt ID", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Pickup Location", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Pickup Date", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Drop-off Location", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Drop-off Date", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Rental Price", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Website URL", "}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", "{", "Discount Code", "}");
      \u0275\u0275advance(25);
      \u0275\u0275textInterpolate2("", "{", "Customer Name", "}");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplatesComponent, [{
    type: Component,
    args: [{ selector: "app-email-templates", imports: [], template: `<div class="">
    <div>
        <div class="pb-3 border-bottom mb-3">
            <h6 class="mb-0">Email Templates</h6>
        </div>
        <div class="mb-3">
            
            <!-- start row -->
            <div class="row">
                <div class="col-md-3">
                    <div class="input-icon-start position-relative mb-3">
                        <span class="input-icon-addon">
                            <i class="isax isax-search-normal"></i>
                        </span>
                        <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">

                    </div>
                </div><!-- end col -->
                <div class="col-md-9">
                    <div class="d-flex justify-content-end align-items-center flex-wrap gap-2 mb-3">
                        <div>
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>New Templates</a>
                        </div>
                    </div>
                </div><!-- end col -->
            </div>
            <!-- end row -->

            <!-- Table List -->
            <div class="table-responsive table-nowrap">
                <table class="table border mb-0 dataTable">
                    <thead class="table-light">
                        <tr>
                            <th>Template Name</th>
                            <th>Created On</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Welcome Email</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">24 Jan 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Booking Confirmation</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">27 Dec 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Booking Reminder</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">19 Dec 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Booking Cancellation</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">08 Dec 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Seasonal Promotions & Discounts</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">25 Nov 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">System Update</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">20 Nov 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <!-- /Table List -->
        </div>
    </div>
</div><!-- end col -->



		<!-- Start Add Modal -->
        <div class="modal fade" id="add_modal">
            <div class="modal-dialog modal-dialog-centered modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="mb-0">Add Template</h5>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-0">
                                    <label class="form-label">Template Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>
                    </div>
                </div>
            </div>
        </div>
		<!-- End Edit Modal -->

		<!-- Start Edit Modal -->
        <div class="modal fade" id="edit_modal">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="mb-0">Edit Template</h5>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="border br-10 p-2 mb-3">
                                    <p>
                                        Hi <span class="text-info">{{'{'}}Customer Name{{'}'}}</span>,
                                        <br> Welcome to <span class="text-info">{{'{'}}Company Name{{'}'}}</span>!

                                    </p>
                                    <p>
                                        We\u2019re thrilled to have you as part of our community and are excited to support you in finding the perfect car rental solution. Thank you for choosing us \u2013 we truly appreciate your trust and confidence.
                                    </p>
                                    <p>
                                        At <span class="text-info">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience as smooth and efficient as possible. Whether you\u2019re looking for the perfect vehicle or need assistance with booking, we\u2019re
                                        here to help you every step of the way. If you have any questions or need help, our dedicated support team is always ready to assist you. Feel free to reach out at any time \u2013 we\u2019re committed to ensuring you have
                                        the best experience possible
                                    </p>
                                    <p>
                                        Thank you again for choosing <span class="text-info">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you throughout your rental experience.
                                    </p>
                                    <p>
                                        Best
                                        <br> The <span class="text-info">{{'{'}}Company Name{{'}'}}</span>Team
                                    </p>
                                </div>
                                <div class="border rounded-3 p-3 mb-3">
                                    <label class="form-label">Tags</label>
                                    <ul class="d-flex flex-wrap gap-2">
                                        <li><span class="text-info">{{'{'}}Company Name{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Booking Number{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Booking Date{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Car Name{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Invoice ID{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Receipt ID{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Pickup Location{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Pickup Date{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Drop-off Location{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Drop-off Date{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Rental Price{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Website URL{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Discount Code{{'}'}}</span></li>
                                    </ul>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <label class="form-label mb-0">
                                        Status
                                    </label>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" checked>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
		<!-- End Edit Modal -->

		<!-- Start View Email -->
        <div class="modal fade" id="view_email">
            <div class="modal-dialog modal-dialog-centered modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="mb-0">Preview Template</h5>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <div class="row">
                            <div class="col-lg-12">
                                <p>
                                    Hi <span class="text-info">{{'{'}}Customer Name{{'}'}}</span>,
                                    <br> Welcome to <span class="text-info">{{'{'}}Company Name{{'}'}}</span>!

                                </p>
                                <p>
                                    We\u2019re thrilled to have you as part of our community and are excited to support you in finding the perfect car rental solution. Thank you for choosing us \u2013 we truly appreciate your trust and confidence.
                                </p>
                                <p>
                                    At <span class="text-info">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience as smooth and efficient as possible. Whether you\u2019re looking for the perfect vehicle or need assistance with booking, we\u2019re here
                                    to help you every step of the way. If you have any questions or need help, our dedicated support team is always ready to assist you. Feel free to reach out at any time \u2013 we\u2019re committed to ensuring you have the best
                                    experience possible
                                </p>
                                <p>
                                    Thank you again for choosing <span class="text-info">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you throughout your rental experience.
                                </p>
                                <p>
                                    Best
                                    <br> The <span class="text-info">{{'{'}}Company Name{{'}'}}</span>Team
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<!-- End View Email -->

        <!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Email Template</h6>
                        <p class="mb-3">Are you sure, you want to delete email template?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Delete Modal  -->
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.ts", lineNumber: 9 });
})();
export {
  EmailTemplatesComponent
};
//# sourceMappingURL=chunk-FTRTY7SU.js.map
