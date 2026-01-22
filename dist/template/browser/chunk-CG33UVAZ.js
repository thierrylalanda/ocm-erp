import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/base-ui/list-group/list-group.component.ts
var ListGroupComponent = class _ListGroupComponent {
  static \u0275fac = function ListGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListGroupComponent, selectors: [["app-list-group"]], decls: 415, vars: 2, consts: [[1, ""], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-muted"], [1, "list-group"], [1, "list-group-item"], [1, "ti", "ti-brand-slack", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-nextcloud", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-zoom", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-stripe", "me-1", "align-middle", "fs-18"], [1, "list-group-item", "active"], [1, "ti", "ti-brand-notion", "me-1", "align-middle", "fs-18"], ["aria-disabled", "true", 1, "list-group-item", "disabled"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "active"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action"], ["type", "button", 1, "list-group-item", "list-group-item-action"], ["href", "javascript:void(0);", "tabindex", "-1", "aria-disabled", "true", 1, "list-group-item", "list-group-item-action", "disabled"], [1, "list-group", "list-group-flush"], [1, "list-group", "list-group-numbered"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-start"], [1, "ms-2", "me-auto"], [1, "fw-bold"], [1, "badge", "bg-primary", "rounded-pill"], [1, "list-group-item", "list-group-item-primary"], [1, "list-group-item", "list-group-item-secondary"], [1, "list-group-item", "list-group-item-success"], [1, "list-group-item", "list-group-item-danger"], [1, "list-group-item", "list-group-item-warning"], [1, "list-group-item", "list-group-item-info"], [1, "list-group-item", "list-group-item-light"], [1, "list-group-item", "list-group-item-dark"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-primary"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-secondary"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-success"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-danger"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-warning"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-info"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-light"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-dark"], [1, "d-flex", "w-100", "justify-content-between"], [1, "fs-16", "mb-1"], [1, "mb-1"], [1, "list-group", "list-group-horizontal", "mb-3"], [1, "ti", "ti-brand-trello", "me-1", "align-middle", "fs-18"], [1, "list-group", "list-group-horizontal-sm", "mb-3"], [1, "ti", "ti-brand-dropbox", "me-1", "align-middle", "fs-18"], [1, "list-group", "list-group-horizontal-md"], [1, "ti", "ti-brand-github", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-discord", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-asana", "me-1", "align-middle", "fs-18"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "bg-success", "rounded-pill"], [1, "badge", "bg-danger", "rounded-pill"], [1, "badge", "bg-warning", "rounded-pill"], ["type", "checkbox", "value", "", "id", "firstCheckbox", 1, "form-check-input", "me-1"], ["for", "firstCheckbox", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "secondCheckbox", 1, "form-check-input", "me-1"], ["for", "secondCheckbox", 1, "form-check-label"], [1, "list-group", "mt-2"], ["type", "radio", "name", "listGroupRadio", "value", "", "id", "firstRadio", "checked", "", 1, "form-check-input", "me-1"], ["for", "firstRadio", 1, "form-check-label"], ["type", "radio", "name", "listGroupRadio", "value", "", "id", "secondRadio", 1, "form-check-input", "me-1"], ["for", "secondRadio", 1, "form-check-label"]], template: function ListGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "List Group");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li", 6)(11, "a", 7);
      \u0275\u0275text(12, "Base UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 8);
      \u0275\u0275text(14, "List Group");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h5", 13);
      \u0275\u0275text(20, "Basic example");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 14)(22, "p", 15);
      \u0275\u0275text(23, "The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "ul", 16)(25, "li", 17);
      \u0275\u0275domElement(26, "i", 18);
      \u0275\u0275text(27, " Slack Collaboration ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "li", 17);
      \u0275\u0275domElement(29, "i", 19);
      \u0275\u0275text(30, " Nextcloud File Sharing ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "li", 17);
      \u0275\u0275domElement(32, "i", 20);
      \u0275\u0275text(33, " Zoom Video Meetings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "li", 17);
      \u0275\u0275domElement(35, "i", 21);
      \u0275\u0275text(36, " Stripe Billing System ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(37, "div", 10)(38, "div", 11)(39, "div", 12)(40, "h5", 13);
      \u0275\u0275text(41, "Active Items");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "div", 14)(43, "p", 15);
      \u0275\u0275text(44, "Add ");
      \u0275\u0275domElementStart(45, "code");
      \u0275\u0275text(46, ".active");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(47, " to a ");
      \u0275\u0275domElementStart(48, "code");
      \u0275\u0275text(49, ".list-group-item");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(50, " to indicate the current active selection.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "ul", 16)(52, "li", 22);
      \u0275\u0275domElement(53, "i", 18);
      \u0275\u0275text(54, " Slack Collaboration ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "li", 17);
      \u0275\u0275domElement(56, "i", 19);
      \u0275\u0275text(57, " Nextcloud File Sharing ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(58, "li", 17);
      \u0275\u0275domElement(59, "i", 20);
      \u0275\u0275text(60, " Zoom Video Meetings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "li", 17);
      \u0275\u0275domElement(62, "i", 23);
      \u0275\u0275text(63, " Notion Workspace ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(64, "li", 17);
      \u0275\u0275domElement(65, "i", 21);
      \u0275\u0275text(66, " Stripe Billing System ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(67, "div", 10)(68, "div", 11)(69, "div", 12)(70, "h5", 13);
      \u0275\u0275text(71, "Disabled Items");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(72, "div", 14)(73, "p");
      \u0275\u0275text(74, "Add ");
      \u0275\u0275domElementStart(75, "code");
      \u0275\u0275text(76, ".disabled");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(77, " to a ");
      \u0275\u0275domElementStart(78, "code");
      \u0275\u0275text(79, ".list-group-item");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(80, " to make it ");
      \u0275\u0275domElementStart(81, "em");
      \u0275\u0275text(82, "appear");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(83, " disabled. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "ul", 16)(85, "li", 24);
      \u0275\u0275domElement(86, "i", 18);
      \u0275\u0275text(87, " Slack Collaboration ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(88, "li", 17);
      \u0275\u0275domElement(89, "i", 19);
      \u0275\u0275text(90, " Nextcloud File Sharing ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "li", 17);
      \u0275\u0275domElement(92, "i", 20);
      \u0275\u0275text(93, " Zoom Video Meetings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(94, "li", 17);
      \u0275\u0275domElement(95, "i", 23);
      \u0275\u0275text(96, " Notion Workspace ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "li", 17);
      \u0275\u0275domElement(98, "i", 21);
      \u0275\u0275text(99, " Stripe Billing System ");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(100, "div", 9)(101, "div", 10)(102, "div", 11)(103, "div", 12)(104, "h5", 13);
      \u0275\u0275text(105, "Links and Buttons");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(106, "div", 14)(107, "p", 15);
      \u0275\u0275text(108, "Use ");
      \u0275\u0275domElementStart(109, "code");
      \u0275\u0275text(110, "<a>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(111, "s or ");
      \u0275\u0275domElementStart(112, "code");
      \u0275\u0275text(113, "<button>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(114, "s to create ");
      \u0275\u0275domElementStart(115, "em");
      \u0275\u0275text(116, "actionable");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(117, " list group items with hover, disabled, and active states by adding ");
      \u0275\u0275domElementStart(118, "code");
      \u0275\u0275text(119, ".list-group-item-action");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(120, ". ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(121, "div", 16)(122, "a", 25);
      \u0275\u0275domElement(123, "i", 18);
      \u0275\u0275text(124, " Slack Collaboration ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "a", 26);
      \u0275\u0275domElement(126, "i", 19);
      \u0275\u0275text(127, " Nextcloud File Sharing ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(128, "button", 27);
      \u0275\u0275domElement(129, "i", 20);
      \u0275\u0275text(130, " Zoom Video Meetings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(131, "button", 27);
      \u0275\u0275domElement(132, "i", 23);
      \u0275\u0275text(133, " Notion Workspace ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(134, "a", 28);
      \u0275\u0275domElement(135, "i", 21);
      \u0275\u0275text(136, " Stripe Billing System ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(137, "div", 10)(138, "div", 11)(139, "div", 12)(140, "h5", 13);
      \u0275\u0275text(141, "Flush");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(142, "div", 14)(143, "p", 15);
      \u0275\u0275text(144, "Add ");
      \u0275\u0275domElementStart(145, "code");
      \u0275\u0275text(146, ".list-group-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(147, " to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(148, "ul", 29)(149, "li", 17);
      \u0275\u0275domElement(150, "i", 18);
      \u0275\u0275text(151, " Slack Collaboration");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(152, "li", 17);
      \u0275\u0275domElement(153, "i", 19);
      \u0275\u0275text(154, " Nextcloud File Sharing");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(155, "li", 17);
      \u0275\u0275domElement(156, "i", 20);
      \u0275\u0275text(157, " Zoom Video Meetings");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(158, "li", 17);
      \u0275\u0275domElement(159, "i", 23);
      \u0275\u0275text(160, " Notion Workspace");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(161, "li", 17);
      \u0275\u0275domElement(162, "i", 21);
      \u0275\u0275text(163, " Stripe Billing System");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(164, "div", 10)(165, "div", 11)(166, "div", 12)(167, "h5", 13);
      \u0275\u0275text(168, "Numbered");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(169, "div", 14)(170, "p", 15);
      \u0275\u0275text(171, "Numbers are generated by ");
      \u0275\u0275domElementStart(172, "code");
      \u0275\u0275text(173, "counter-reset");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(174, " on the ");
      \u0275\u0275domElementStart(175, "code");
      \u0275\u0275text(176, "<ol>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(177, ", and then styled and placed with a ");
      \u0275\u0275domElementStart(178, "code");
      \u0275\u0275text(179, "::before");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(180, " psuedo-element on the ");
      \u0275\u0275domElementStart(181, "code");
      \u0275\u0275text(182, "<li>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(183, " with ");
      \u0275\u0275domElementStart(184, "code");
      \u0275\u0275text(185, "counter-increment");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(186, " and ");
      \u0275\u0275domElementStart(187, "code");
      \u0275\u0275text(188, "content");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(189, ". ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(190, "ol", 30)(191, "li", 31)(192, "div", 32)(193, "div", 33);
      \u0275\u0275text(194, "SmartOne Admin");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(195, " SmartOne Admin ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(196, "span", 34);
      \u0275\u0275text(197, "865");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(198, "li", 31)(199, "div", 32)(200, "div", 33);
      \u0275\u0275text(201, "SmartOne React Admin");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(202, " SmartOne React Admin ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(203, "span", 34);
      \u0275\u0275text(204, "140");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(205, "li", 31)(206, "div", 32)(207, "div", 33);
      \u0275\u0275text(208, "Angular Version");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(209, " Angular Version ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(210, "span", 34);
      \u0275\u0275text(211, "85");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(212, "div", 9)(213, "div", 10)(214, "div", 11)(215, "div", 12)(216, "h5", 13);
      \u0275\u0275text(217, "Contextual Classes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(218, "div", 14)(219, "p", 15);
      \u0275\u0275text(220, "Use contextual classes to style list items with a stateful background and color.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(221, "ul", 16)(222, "li", 17);
      \u0275\u0275text(223, "Dapibus ac facilisis in");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(224, "li", 35);
      \u0275\u0275text(225, "A simple primary list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(226, "li", 36);
      \u0275\u0275text(227, "A simple secondary list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(228, "li", 37);
      \u0275\u0275text(229, "A simple success list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(230, "li", 38);
      \u0275\u0275text(231, "A simple danger list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(232, "li", 39);
      \u0275\u0275text(233, "A simple warning list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(234, "li", 40);
      \u0275\u0275text(235, "A simple info list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(236, "li", 41);
      \u0275\u0275text(237, "A simple light list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(238, "li", 42);
      \u0275\u0275text(239, "A simple dark list group item");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(240, "div", 10)(241, "div", 11)(242, "div", 12)(243, "h5", 13);
      \u0275\u0275text(244, "Contextual Classes with Link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(245, "div", 14)(246, "p", 15);
      \u0275\u0275text(247, "Use contextual classes to style list items with a stateful background and color.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(248, "div", 16)(249, "a", 26);
      \u0275\u0275text(250, "Darius ac facilities in");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(251, "a", 43);
      \u0275\u0275text(252, "A simple primary list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(253, "a", 44);
      \u0275\u0275text(254, "A simple secondary list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(255, "a", 45);
      \u0275\u0275text(256, "A simple success list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(257, "a", 46);
      \u0275\u0275text(258, "A simple danger list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(259, "a", 47);
      \u0275\u0275text(260, "A simple warning list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(261, "a", 48);
      \u0275\u0275text(262, "A simple info list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(263, "a", 49);
      \u0275\u0275text(264, "A simple light list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(265, "a", 50);
      \u0275\u0275text(266, "A simple dark list group item");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(267, "div", 10)(268, "div", 11)(269, "div", 12)(270, "h5", 13);
      \u0275\u0275text(271, "Custom content");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(272, "div", 14)(273, "p", 15);
      \u0275\u0275text(274, "Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(275, "div", 16)(276, "a", 25)(277, "div", 51)(278, "h5", 52);
      \u0275\u0275text(279, "List group item heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(280, "small");
      \u0275\u0275text(281, "3 days ago");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(282, "p", 53);
      \u0275\u0275text(283, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(284, "small");
      \u0275\u0275text(285, "Donec id elit non mi porta.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(286, "a", 26)(287, "div", 51)(288, "h5", 52);
      \u0275\u0275text(289, "List group item heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(290, "small", 15);
      \u0275\u0275text(291, "3 days ago");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(292, "p", 53);
      \u0275\u0275text(293, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(294, "small", 15);
      \u0275\u0275text(295, "Donec id elit non mi porta.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(296, "a", 26)(297, "div", 51)(298, "h5", 52);
      \u0275\u0275text(299, "List group item heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(300, "small", 15);
      \u0275\u0275text(301, "3 days ago");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(302, "p", 53);
      \u0275\u0275text(303, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(304, "small", 15);
      \u0275\u0275text(305, "Donec id elit non mi porta.");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(306, "div", 9)(307, "div", 10)(308, "div", 11)(309, "div", 12)(310, "h5", 13);
      \u0275\u0275text(311, "Horizontal");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(312, "div", 14)(313, "p");
      \u0275\u0275text(314, "Add ");
      \u0275\u0275domElementStart(315, "code");
      \u0275\u0275text(316, ".list-group-horizontal");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(317, " to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant ");
      \u0275\u0275domElementStart(318, "code");
      \u0275\u0275text(319);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(320, " to make a list group horizontal starting at that breakpoint\u2019s ");
      \u0275\u0275domElementStart(321, "code");
      \u0275\u0275text(322, "min-width");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(323, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(324, "ul", 54)(325, "li", 17);
      \u0275\u0275domElement(326, "i", 18);
      \u0275\u0275text(327, " Slack ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(328, "li", 17);
      \u0275\u0275domElement(329, "i", 20);
      \u0275\u0275text(330, " Zoom ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(331, "li", 17);
      \u0275\u0275domElement(332, "i", 55);
      \u0275\u0275text(333, " Trello ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(334, "ul", 56)(335, "li", 17);
      \u0275\u0275domElement(336, "i", 23);
      \u0275\u0275text(337, " Notion ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(338, "li", 17);
      \u0275\u0275domElement(339, "i", 21);
      \u0275\u0275text(340, " Stripe ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(341, "li", 17);
      \u0275\u0275domElement(342, "i", 57);
      \u0275\u0275text(343, " Dropbox ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(344, "ul", 58)(345, "li", 17);
      \u0275\u0275domElement(346, "i", 59);
      \u0275\u0275text(347, " GitHub ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(348, "li", 17);
      \u0275\u0275domElement(349, "i", 60);
      \u0275\u0275text(350, " Discord ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(351, "li", 17);
      \u0275\u0275domElement(352, "i", 61);
      \u0275\u0275text(353, " Asana ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(354, "div", 10)(355, "div", 11)(356, "div", 12)(357, "h5", 13);
      \u0275\u0275text(358, "With Badges");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(359, "div", 14)(360, "p", 15);
      \u0275\u0275text(361, "Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(362, "ul", 16)(363, "li", 62);
      \u0275\u0275text(364, " New Task Assignments ");
      \u0275\u0275domElementStart(365, "span", 34);
      \u0275\u0275text(366, "5");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(367, "li", 62);
      \u0275\u0275text(368, " Upcoming Meetings ");
      \u0275\u0275domElementStart(369, "span", 63);
      \u0275\u0275text(370, "3");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(371, "li", 62);
      \u0275\u0275text(372, " System Notifications ");
      \u0275\u0275domElementStart(373, "span", 64);
      \u0275\u0275text(374, "15+");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(375, "li", 62);
      \u0275\u0275text(376, " Completed Projects ");
      \u0275\u0275domElementStart(377, "span", 63);
      \u0275\u0275text(378, "8");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(379, "li", 62);
      \u0275\u0275text(380, " Overdue Tasks ");
      \u0275\u0275domElementStart(381, "span", 65);
      \u0275\u0275text(382, "2");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(383, "div", 10)(384, "div", 11)(385, "div", 12)(386, "h5", 13);
      \u0275\u0275text(387, "Checkboxes and Radios");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(388, "div", 14)(389, "p", 15);
      \u0275\u0275text(390, "Place Bootstrap\u2019s checkboxes and radios within list group items and customize as needed. You can use them without ");
      \u0275\u0275domElementStart(391, "code");
      \u0275\u0275text(392, "<label>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(393, "s, but please remember to include an ");
      \u0275\u0275domElementStart(394, "code");
      \u0275\u0275text(395, "aria-label");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(396, " attribute and value for accessibility. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(397, "ul", 16)(398, "li", 17);
      \u0275\u0275domElement(399, "input", 66);
      \u0275\u0275domElementStart(400, "label", 67);
      \u0275\u0275text(401, "First checkbox");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(402, "li", 17);
      \u0275\u0275domElement(403, "input", 68);
      \u0275\u0275domElementStart(404, "label", 69);
      \u0275\u0275text(405, "Second checkbox");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(406, "ul", 70)(407, "li", 17);
      \u0275\u0275domElement(408, "input", 71);
      \u0275\u0275domElementStart(409, "label", 72);
      \u0275\u0275text(410, "First radio");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(411, "li", 17);
      \u0275\u0275domElement(412, "input", 73);
      \u0275\u0275domElementStart(413, "label", 74);
      \u0275\u0275text(414, "Second radio");
      \u0275\u0275domElementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(319);
      \u0275\u0275textInterpolate2(".list-group-horizontal-", "{", "sm|md|lg|xl|xxl", "}");
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupComponent, [{
    type: Component,
    args: [{ selector: "app-list-group", imports: [CommonModule], template: `			<!-- Start Content -->
            <div class="">

                <!-- Page Header -->
                <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                    <div class="flex-grow-1">
                        <h4 class="fs-18 fw-semibold mb-0">List Group</h4>
                    </div>

                    <div class="text-end">
                        <ol class="breadcrumb m-0 py-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                            <li class="breadcrumb-item active">List Group</li>
                        </ol>
                    </div>
				</div>
				<!-- End Page Header -->
                
				<!-- start row -->
                <div class="row">
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Basic example</h5>
                            </div>

                            <div class="card-body">

                                <p class="text-muted">The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>
								
								<ul class="list-group">
									<li class="list-group-item">
										<i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System
									</li>
								</ul>

                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Active Items</h5>
                            </div>

                            <div class="card-body">
                                <p class="text-muted">Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>
								
								<ul class="list-group">
									<li class="list-group-item active">
										<i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion Workspace
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System
									</li>
								</ul>

                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Disabled Items</h5>
                            </div>

                            <div class="card-body">
                                <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it
                                    <em>appear</em> disabled.
                                </p>
								
								<ul class="list-group">
									<li class="list-group-item disabled" aria-disabled="true">
										<i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion Workspace
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System
									</li>
								</ul>

                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->
                </div>
                <!-- end row -->

                <div class="row">
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Links and Buttons</h5>
                            </div>

                            <div class="card-body">
                                <p class="text-muted">Use <code>&lt;a&gt;</code>s or
                                    <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with
                                    hover, disabled, and active states by adding
                                    <code>.list-group-item-action</code>.
                                </p>

								<div class="list-group">
									<a href="javascript:void(0);" class="list-group-item list-group-item-action active">
										<i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration
									</a>
									<a href="javascript:void(0);" class="list-group-item list-group-item-action">
										<i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing 
									</a>
									<button type="button" class="list-group-item list-group-item-action">
										<i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings
									</button>
									<button type="button" class="list-group-item list-group-item-action">
										<i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion Workspace
									</button>
									<a href="javascript:void(0);" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">
										<i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System
									</a>
								</div>
							</div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Flush</h5>
                            </div>

                            <div class="card-body">
                                <p class="text-muted">Add <code>.list-group-flush</code> to remove some
                                    borders and rounded corners to render list group items edge-to-edge in a parent
                                    container (e.g., cards).</p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration</li>
                                    <li class="list-group-item"><i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing</li>
                                    <li class="list-group-item"><i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings</li>
                                    <li class="list-group-item"><i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion Workspace</li>
                                    <li class="list-group-item"><i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System</li>
                                </ul>
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Numbered</h5>
                            </div>

                            <div class="card-body">
                                <p class="text-muted">Numbers are generated by <code>counter-reset</code> on
                                    the <code>&lt;ol&gt;</code>, and then styled and placed with a
                                    <code>::before</code> psuedo-element on the <code>&lt;li&gt;</code> with
                                    <code>counter-increment</code> and <code>content</code>.
                                </p>

                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">SmartOne Admin</div>
                                            SmartOne Admin
                                        </div>
                                        <span class="badge bg-primary rounded-pill">865</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">SmartOne React Admin</div>
                                            SmartOne React Admin
                                        </div>
                                        <span class="badge bg-primary rounded-pill">140</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Angular Version</div>
                                            Angular Version
                                        </div>
                                        <span class="badge bg-primary rounded-pill">85</span>
                                    </li>
                                </ol>

                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->
                </div>
                <!-- end row -->

                <div class="row">
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Contextual Classes</h5>
                            </div>

                            <div class="card-body">
                                <p class="text-muted">Use contextual classes to style list items with a stateful background and color.</p>

                                <ul class="list-group">
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
                                    <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                                    <li class="list-group-item list-group-item-success">A simple success list group item</li>
                                    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
                                    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
                                    <li class="list-group-item list-group-item-info">A simple info list group item</li>
                                    <li class="list-group-item list-group-item-light">A simple light list group item</li>
                                    <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
                                </ul>
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Contextual Classes with Link</h5>
                            </div>

                            <div class="card-body">
                                <p class="text-muted">Use contextual classes to style list items with a stateful background and color.</p>

                                <div class="list-group">
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">Darius ac facilities in</a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
                                </div>
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Custom content</h5>
                            </div>

                            <div class="card-body">
                                <p class="text-muted">Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.</p>

                                <div class="list-group">
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="fs-16 mb-1">List group item heading</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small>Donec id elit non mi porta.</small>
                                    </a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="fs-16 mb-1">List group item heading</h5>
                                            <small class="text-muted">3 days ago</small>
                                        </div>
                                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small class="text-muted">Donec id elit non mi porta.</small>
                                    </a>
                                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="fs-16 mb-1">List group item heading</h5>
                                            <small class="text-muted">3 days ago</small>
                                        </div>
                                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small class="text-muted">Donec id elit non mi porta.</small>
                                    </a>
                                </div>
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                </div>
                <!-- end row -->

                <div class="row">

                    <div class="col-xl-4">
						<div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Horizontal</h5>
                            </div>

							<div class="card-body">
								<p>Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant <code>.list-group-horizontal-{{'{'}}sm|md|lg|xl|xxl{{'}'}}</code> to make a list group horizontal starting at that breakpoint\u2019s <code>min-width</code>.</p>

								<ul class="list-group list-group-horizontal mb-3">
									<li class="list-group-item">
										<i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-trello me-1 align-middle fs-18"></i> Trello
									</li>
								</ul>

								<ul class="list-group list-group-horizontal-sm mb-3">
									<li class="list-group-item">
										<i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-dropbox me-1 align-middle fs-18"></i> Dropbox
									</li>
								</ul>

								<ul class="list-group list-group-horizontal-md">
									<li class="list-group-item">
										<i class="ti ti-brand-github me-1 align-middle fs-18"></i> GitHub
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-discord me-1 align-middle fs-18"></i> Discord
									</li>
									<li class="list-group-item">
										<i class="ti ti-brand-asana me-1 align-middle fs-18"></i> Asana
									</li>
								</ul>

							</div>
							<!-- end card body -->
						</div>
						<!-- end card -->
                    </div> <!-- end col -->
					
                    <div class="col-xl-4">
						<div class="card">
                            <div class="card-header">
                                <h5 class="card-title">With Badges</h5>
                            </div>

							<div class="card-body">
								<p class="text-muted">Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.</p>

								<ul class="list-group">
									<li class="list-group-item d-flex justify-content-between align-items-center">
										New Task Assignments
										<span class="badge bg-primary rounded-pill">5</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										Upcoming Meetings
										<span class="badge bg-success rounded-pill">3</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										System Notifications
										<span class="badge bg-danger rounded-pill">15+</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										Completed Projects
										<span class="badge bg-success rounded-pill">8</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										Overdue Tasks
										<span class="badge bg-warning rounded-pill">2</span>
									</li>
								</ul>
							</div>
							<!-- end card body -->
						</div>
						<!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Checkboxes and Radios</h5>
                            </div>

                            <div class="card-body">
                                <p class="text-muted">Place Bootstrap\u2019s checkboxes and radios within list
                                    group items and customize as needed. You can use them without
                                    <code>&lt;label&gt;</code>s, but please remember to include an
                                    <code>aria-label</code> attribute and value for accessibility.
                                </p>

                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                                        <label class="form-check-label" for="firstCheckbox">First checkbox</label>
                                    </li>
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
                                        <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
                                    </li>
                                </ul>

                                <ul class="list-group mt-2">
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                                        <label class="form-check-label" for="firstRadio">First radio</label>
                                    </li>
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
                                        <label class="form-check-label" for="secondRadio">Second radio</label>
                                    </li>
                                </ul>
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->
                </div>
				<!-- end row -->
				
            </div>
			<!-- End Content -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListGroupComponent, { className: "ListGroupComponent", filePath: "src/app/features/ui-interface/base-ui/list-group/list-group.component.ts", lineNumber: 10 });
})();
export {
  ListGroupComponent
};
//# sourceMappingURL=chunk-CG33UVAZ.js.map
