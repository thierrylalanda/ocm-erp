import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/application/chat/chat.component.ts
var ChatComponent = class _ChatComponent {
  chatSearch = false;
  showChatSearch() {
    this.chatSearch = !this.chatSearch;
  }
  static \u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], decls: 621, vars: 0, consts: [[1, "pb-4"], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "index.html"], ["href", "javascript:void(0);"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "card", "shadow-none", "border-top-0", "mb-0"], [1, "card-body", "p-0"], [1, "d-md-flex"], [1, "chat-user-nav", "border-end-0"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "border-start-0", "border-end-0", "p-3"], [1, "d-flex", "align-items-center"], [1, "avatar", "me-2", "flex-shrink-0"], ["src", "assets/img/users/user-01.jpg", "alt", "user"], [1, "fs-14", "mb-1"], [1, "mb-0"], ["href", "#", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "New Chat", 1, "btn", "p-2", "btn-primary"], [1, "ti", "ti-plus"], [1, "input-group", "w-auto", "input-group-flat", "p-4", "pb-0"], [1, "input-group-text", "border-end-0"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search Keyword", 1, "form-control"], ["data-simplebar", "init", 1, "chat-users", "p-4", "simplebar-scrollable-y"], [1, "simplebar-wrapper", 2, "margin", "-24px"], [1, "simplebar-height-auto-observer-wrapper"], [1, "simplebar-height-auto-observer"], [1, "simplebar-mask"], [1, "simplebar-offset", 2, "right", "0px", "bottom", "0px"], ["tabindex", "0", "role", "region", "aria-label", "scrollable content", 1, "simplebar-content-wrapper", 2, "height", "auto", "overflow", "hidden scroll"], [1, "simplebar-content", 2, "padding", "24px"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "rounded", "p-3", "user-list", "active", "mb-1"], ["href", "#", 1, "avatar", "me-2", "flex-shrink-0"], ["src", "assets/img/users/user-02.jpg", "alt", "user"], ["href", "#"], [1, "mb-0", "text-truncate"], [1, "text-dark", "d-block"], [1, "d-block", "text-success"], [1, "ti", "ti-checks"], [1, "d-flex", "align-items-center", "justify-content-between", "rounded", "p-3", "user-list", "mb-1"], ["src", "assets/img/users/user-03.jpg", "alt", "user"], [1, "text-dark", "d-block", "mb-1"], [1, "badge", "ms-auto", "bg-danger", "rounded-circle", "message-count"], ["src", "assets/img/users/user-04.jpg", "alt", "user"], ["src", "assets/img/users/user-05.jpg", "alt", "user"], [1, "d-block", "text-light"], ["href", "#", 1, "avatar", "badge-soft-purple", "fw-semibold", "me-2", "flex-shrink-0"], [1, "ti", "ti-checks", "text-success"], ["src", "assets/img/users/user-06.jpg", "alt", "user"], [1, "ti", "ti-check", "text-light"], ["src", "assets/img/users/user-07.jpg", "alt", "user"], [1, "ti", "ti-checks", "text-light"], ["src", "assets/img/users/user-08.jpg", "alt", "user"], [1, "d-flex", "align-items-center", "justify-content-between", "rounded", "p-3", "user-list"], ["src", "assets/img/users/user-09.jpg", "alt", "user"], [1, "simplebar-placeholder", 2, "width", "350px", "height", "806px"], [1, "simplebar-track", "simplebar-horizontal", 2, "visibility", "hidden"], [1, "simplebar-scrollbar", 2, "width", "0px", "display", "none"], [1, "simplebar-track", "simplebar-vertical", 2, "visibility", "visible"], [1, "simplebar-scrollbar", 2, "height", "25px", "transform", "translate3d(0px, 0px, 0px)", "display", "block"], [1, "flex-fill", "chat-messages"], [1, "card", "border", "border-bottom-0", "mb-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "p-3"], ["src", "assets/img/users/user-10.jpg", "alt", "user"], [1, "fs-14", "fw-semibold", "mb-1"], [1, "mb-0", "d-inline-flex", "align-items-center"], [1, "ti", "ti-point-filled", "text-success"], [1, "gap-2", "d-flex", "align-items-center", "flex-wrap"], ["href", "voice-call.html", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "aria-label", "Refresh", "data-bs-original-title", "Voice Call", 1, "btn", "btn-icon", "btn-light"], [1, "ti", "ti-phone"], ["href", "video-call.html", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "aria-label", "Refresh", "data-bs-original-title", "Video Call", 1, "btn", "btn-icon", "btn-light"], [1, "ti", "ti-video"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "aria-label", "Refresh", "data-bs-original-title", "Info", 1, "btn", "btn-icon", "btn-light"], [1, "ti", "ti-info-circle"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-light", "close-chat", "d-md-none"], [1, "ti", "ti-x"], ["data-simplebar", "init", 1, "message-body", "p-4", "simplebar-scrollable-y"], [1, "chat-list", "mb-3"], [1, "d-flex", "align-items-start"], [1, "avatar", "online", "me-2", "flex-shrink-0"], [1, "d-flex", "align-items-center", "mb-1"], [1, "fs-14", "mb-0"], [1, "ti", "ti-point-filled", "mx-2"], [1, "message-box", "receive-message", "p-3"], [1, "mb-0", "fs-16"], [1, "ms-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "ti", "ti-dots-vertical"], [1, "dropdown-menu", "p-2"], ["href", "#", 1, "dropdown-item"], [1, "ti", "ti-heart", "me-1"], [1, "ti", "ti-pinned", "me-1"], [1, "ti", "ti-file-export", "me-1"], [1, "ti", "ti-trash", "me-1"], [1, "ti", "ti-check", "me-1"], [1, "ti", "ti-box-align-right", "me-1"], [1, "chat-list", "ms-auto", "mb-3"], [1, "d-flex", "align-items-start", "justify-content-end"], [1, "d-flex", "align-items-center", "justify-content-end", "mb-1"], [1, "ti", "ti-checks", "text-success", "me-1"], [1, "fs-14", "fw-semibold", "mb-0"], [1, "me-2"], [1, "message-box", "sent-message", "p-3"], [1, "avatar", "ms-2", "online", "flex-shrink-0"], ["src", "assets/img/users/user-11.jpg", "alt", "user"], [1, "mb-2", "fs-16"], [1, "d-flex", "align-items-center", "gap-2", "d-none"], [1, "bg-white", "d-block", "rounded", "p-1"], ["src", "assets/img/favicon.png", "alt", "attachment", 1, "rounded"], [1, "text-center"], [1, "badge", "bg-light", "rounded-pill", "px-3", "text-dark", "fs-14"], [1, "chat-list"], [1, "simplebar-placeholder", 2, "width", "599px", "height", "819px"], [1, "message-footer", "d-flex", "align-items-center", "border-top", "p-3"], [1, "flex-fill"], ["type", "text", "placeholder", "Type Something...", 1, "form-control", "border-0"], [1, "d-flex", "align-items-center", "gap-2"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-light"], [1, "ti", "ti-photo-plus"], [1, "ti", "ti-mood-smile-beam"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-label", "more options", 1, "btn", "btn-icon", "btn-outline-light"], [1, "ti", "ti-camera-selfie", "me-2"], [1, "ti", "ti-photo-up", "me-2"], [1, "ti", "ti-music", "me-2"], [1, "ti", "ti-map-pin-share", "me-2"], [1, "ti", "ti-user-check", "me-2"]], template: function ChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li", 6)(11, "a", 8);
      \u0275\u0275text(12, "Applications");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 9);
      \u0275\u0275text(14, "Chat");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div")(20, "div", 14)(21, "div", 15)(22, "span", 16);
      \u0275\u0275domElement(23, "img", 17);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "div")(25, "h6", 18);
      \u0275\u0275text(26, "James Hong ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "p", 19);
      \u0275\u0275text(28, "Admin");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(29, "a", 20);
      \u0275\u0275domElement(30, "i", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "div")(32, "div", 22)(33, "span", 23);
      \u0275\u0275domElement(34, "i", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(35, "input", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "div", 26)(37, "div", 27)(38, "div", 28);
      \u0275\u0275domElement(39, "div", 29);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "div", 30)(41, "div", 31)(42, "div", 32)(43, "div", 33)(44, "h6", 34);
      \u0275\u0275text(45, "All Messages");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "div", 35)(47, "div", 15)(48, "a", 36);
      \u0275\u0275domElement(49, "img", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "div")(51, "h6", 18)(52, "a", 38);
      \u0275\u0275text(53, "Mark Smith");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "p", 39);
      \u0275\u0275text(55, "Hey Sam! Did you Ch...");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(56, "div", 4)(57, "span", 40);
      \u0275\u0275text(58, "10:10 AM");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "span", 41);
      \u0275\u0275domElement(60, "i", 42);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(61, "div", 43)(62, "div", 15)(63, "a", 36);
      \u0275\u0275domElement(64, "img", 44);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "div")(66, "h6", 18)(67, "a", 38);
      \u0275\u0275text(68, "Eugene Sikora");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(69, "p", 39);
      \u0275\u0275text(70, "How are your Today");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(71, "div", 4)(72, "span", 45);
      \u0275\u0275text(73, "08:26 AM");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "span", 46);
      \u0275\u0275text(75, "5");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(76, "div", 43)(77, "div", 15)(78, "a", 36);
      \u0275\u0275domElement(79, "img", 47);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(80, "div")(81, "h6", 18)(82, "a", 38);
      \u0275\u0275text(83, "Robert Fassett");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(84, "p", 39);
      \u0275\u0275text(85, "Here are some of ve...");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(86, "div", 4)(87, "span", 45);
      \u0275\u0275text(88, "yesterday");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(89, "span", 46);
      \u0275\u0275text(90, "5");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(91, "div", 43)(92, "div", 15)(93, "a", 36);
      \u0275\u0275domElement(94, "img", 48);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "div")(96, "h6", 18)(97, "a", 38);
      \u0275\u0275text(98, "Andrew Fletcher");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(99, "p", 39);
      \u0275\u0275text(100, "Use tools like Trello...");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(101, "div", 4)(102, "span", 45);
      \u0275\u0275text(103, "yesterday");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(104, "span", 49);
      \u0275\u0275domElement(105, "i", 42);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(106, "div", 43)(107, "div", 15)(108, "a", 50);
      \u0275\u0275text(109, "TD");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(110, "div")(111, "h6", 18)(112, "a", 38);
      \u0275\u0275text(113, "Tyron Derby");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(114, "p", 39);
      \u0275\u0275text(115, "Let's reconvene next...");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(116, "div", 4)(117, "span", 45);
      \u0275\u0275text(118, "12:55 PM");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(119, "span", 49);
      \u0275\u0275domElement(120, "i", 51);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(121, "div", 43)(122, "div", 15)(123, "a", 36);
      \u0275\u0275domElement(124, "img", 52);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "div")(126, "h6", 18)(127, "a", 38);
      \u0275\u0275text(128, "Anna Johnson");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(129, "p", 39);
      \u0275\u0275text(130, "How are your Today");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(131, "div", 4)(132, "span", 45);
      \u0275\u0275text(133, "12:54 PM");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(134, "span", 49);
      \u0275\u0275domElement(135, "i", 53);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(136, "div", 43)(137, "div", 15)(138, "a", 36);
      \u0275\u0275domElement(139, "img", 54);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(140, "div")(141, "h6", 18)(142, "a", 38);
      \u0275\u0275text(143, "Emily Davis");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(144, "p", 39);
      \u0275\u0275text(145, "Sure, I can help with...");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(146, "div", 4)(147, "span", 45);
      \u0275\u0275text(148, "11:47 PM");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(149, "span", 49);
      \u0275\u0275domElement(150, "i", 55);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(151, "div", 43)(152, "div", 15)(153, "a", 36);
      \u0275\u0275domElement(154, "img", 56);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(155, "div")(156, "h6", 18)(157, "a", 38);
      \u0275\u0275text(158, "Susan Denton");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(159, "p", 39);
      \u0275\u0275text(160, "I'll share the meeting...");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(161, "div", 4)(162, "span", 45);
      \u0275\u0275text(163, "10:43 PM");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(164, "span", 49);
      \u0275\u0275domElement(165, "i", 55);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(166, "div", 57)(167, "div", 15)(168, "a", 36);
      \u0275\u0275domElement(169, "img", 58);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(170, "div")(171, "h6", 18)(172, "a", 38);
      \u0275\u0275text(173, "David Cruz");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(174, "p", 39);
      \u0275\u0275text(175, "Let me know if you...");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(176, "div", 4)(177, "span", 45);
      \u0275\u0275text(178, "10:43 PM");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(179, "span", 49);
      \u0275\u0275domElement(180, "i", 55);
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElement(181, "div", 59);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(182, "div", 60);
      \u0275\u0275domElement(183, "div", 61);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(184, "div", 62);
      \u0275\u0275domElement(185, "div", 63);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(186, "div", 64)(187, "div", 65)(188, "div", 66)(189, "div", 15)(190, "span", 16);
      \u0275\u0275domElement(191, "img", 67);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(192, "div")(193, "h6", 68);
      \u0275\u0275text(194, "Mark Smith");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(195, "p", 69);
      \u0275\u0275domElement(196, "i", 70);
      \u0275\u0275text(197, "Online");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(198, "div", 71)(199, "a", 72);
      \u0275\u0275domElement(200, "i", 73);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(201, "a", 74);
      \u0275\u0275domElement(202, "i", 75);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(203, "a", 76);
      \u0275\u0275domElement(204, "i", 77);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(205, "a", 78);
      \u0275\u0275domElement(206, "i", 79);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(207, "div", 11)(208, "div", 80)(209, "div", 27)(210, "div", 28);
      \u0275\u0275domElement(211, "div", 29);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(212, "div", 30)(213, "div", 31)(214, "div", 32)(215, "div", 33)(216, "div", 81)(217, "div", 82)(218, "span", 83);
      \u0275\u0275domElement(219, "img", 67);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(220, "div")(221, "div", 84)(222, "h6", 85);
      \u0275\u0275text(223, "Mark Smith");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(224, "p", 69);
      \u0275\u0275domElement(225, "i", 86);
      \u0275\u0275text(226, "02:39 PM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(227, "div", 15)(228, "div", 87)(229, "p", 88);
      \u0275\u0275text(230, "Hey mark! Did you check out the new logo design?");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(231, "div", 89)(232, "a", 90);
      \u0275\u0275domElement(233, "i", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(234, "ul", 92)(235, "li")(236, "a", 93);
      \u0275\u0275domElement(237, "i", 94);
      \u0275\u0275text(238, "Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(239, "li")(240, "a", 93);
      \u0275\u0275domElement(241, "i", 95);
      \u0275\u0275text(242, "Forward");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(243, "li")(244, "a", 93);
      \u0275\u0275domElement(245, "i", 96);
      \u0275\u0275text(246, "Copy");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(247, "li")(248, "a", 93);
      \u0275\u0275domElement(249, "i", 94);
      \u0275\u0275text(250, "Mark as Favourite");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(251, "li")(252, "a", 93);
      \u0275\u0275domElement(253, "i", 97);
      \u0275\u0275text(254, "Delete");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(255, "li")(256, "a", 93);
      \u0275\u0275domElement(257, "i", 98);
      \u0275\u0275text(258, "Mark as Unread");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(259, "li")(260, "a", 93);
      \u0275\u0275domElement(261, "i", 99);
      \u0275\u0275text(262, "Archeive Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(263, "li")(264, "a", 93);
      \u0275\u0275domElement(265, "i", 95);
      \u0275\u0275text(266, "Pin Chat");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(267, "div", 100)(268, "div", 101)(269, "div")(270, "div", 102)(271, "p", 69);
      \u0275\u0275domElement(272, "i", 103);
      \u0275\u0275text(273, "02:39 PM");
      \u0275\u0275domElement(274, "i", 86);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(275, "h6", 104);
      \u0275\u0275text(276, "You");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(277, "div", 15)(278, "div", 105)(279, "a", 90);
      \u0275\u0275domElement(280, "i", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(281, "ul", 92)(282, "li")(283, "a", 93);
      \u0275\u0275domElement(284, "i", 94);
      \u0275\u0275text(285, "Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(286, "li")(287, "a", 93);
      \u0275\u0275domElement(288, "i", 95);
      \u0275\u0275text(289, "Forward");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(290, "li")(291, "a", 93);
      \u0275\u0275domElement(292, "i", 96);
      \u0275\u0275text(293, "Copy");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(294, "li")(295, "a", 93);
      \u0275\u0275domElement(296, "i", 94);
      \u0275\u0275text(297, "Mark as Favourite");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(298, "li")(299, "a", 93);
      \u0275\u0275domElement(300, "i", 97);
      \u0275\u0275text(301, "Delete");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(302, "li")(303, "a", 93);
      \u0275\u0275domElement(304, "i", 98);
      \u0275\u0275text(305, "Mark as Unread");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(306, "li")(307, "a", 93);
      \u0275\u0275domElement(308, "i", 99);
      \u0275\u0275text(309, "Archeive Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(310, "li")(311, "a", 93);
      \u0275\u0275domElement(312, "i", 95);
      \u0275\u0275text(313, "Pin Chat");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(314, "div", 106)(315, "p", 88);
      \u0275\u0275text(316, "Not yet. Can you send it here?");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(317, "span", 107);
      \u0275\u0275domElement(318, "img", 108);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(319, "div", 81)(320, "div", 82)(321, "span", 83);
      \u0275\u0275domElement(322, "img", 67);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(323, "div")(324, "div", 84)(325, "h6", 85);
      \u0275\u0275text(326, "Mark Smith");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(327, "p", 69);
      \u0275\u0275domElement(328, "i", 86);
      \u0275\u0275text(329, "02:39 PM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(330, "div", 15)(331, "div", 87)(332, "p", 109);
      \u0275\u0275text(333, "Sure! Please check the below logo Attached!!!");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(334, "div", 110)(335, "span", 111);
      \u0275\u0275domElement(336, "img", 112);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(337, "span", 111);
      \u0275\u0275domElement(338, "img", 112);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(339, "div", 89)(340, "a", 90);
      \u0275\u0275domElement(341, "i", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(342, "ul", 92)(343, "li")(344, "a", 93);
      \u0275\u0275domElement(345, "i", 94);
      \u0275\u0275text(346, "Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(347, "li")(348, "a", 93);
      \u0275\u0275domElement(349, "i", 95);
      \u0275\u0275text(350, "Forward");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(351, "li")(352, "a", 93);
      \u0275\u0275domElement(353, "i", 96);
      \u0275\u0275text(354, "Copy");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(355, "li")(356, "a", 93);
      \u0275\u0275domElement(357, "i", 94);
      \u0275\u0275text(358, "Mark as Favourite");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(359, "li")(360, "a", 93);
      \u0275\u0275domElement(361, "i", 97);
      \u0275\u0275text(362, "Delete");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(363, "li")(364, "a", 93);
      \u0275\u0275domElement(365, "i", 98);
      \u0275\u0275text(366, "Mark as Unread");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(367, "li")(368, "a", 93);
      \u0275\u0275domElement(369, "i", 99);
      \u0275\u0275text(370, "Archeive Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(371, "li")(372, "a", 93);
      \u0275\u0275domElement(373, "i", 95);
      \u0275\u0275text(374, "Pin Chat");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(375, "div", 113)(376, "span", 114);
      \u0275\u0275text(377, "Today");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(378, "div", 100)(379, "div", 101)(380, "div")(381, "div", 102)(382, "p", 69);
      \u0275\u0275domElement(383, "i", 103);
      \u0275\u0275text(384, "10:00 AM");
      \u0275\u0275domElement(385, "i", 86);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(386, "h6", 104);
      \u0275\u0275text(387, "You");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(388, "div", 15)(389, "div", 105)(390, "a", 90);
      \u0275\u0275domElement(391, "i", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(392, "ul", 92)(393, "li")(394, "a", 93);
      \u0275\u0275domElement(395, "i", 94);
      \u0275\u0275text(396, "Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(397, "li")(398, "a", 93);
      \u0275\u0275domElement(399, "i", 95);
      \u0275\u0275text(400, "Forward");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(401, "li")(402, "a", 93);
      \u0275\u0275domElement(403, "i", 96);
      \u0275\u0275text(404, "Copy");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(405, "li")(406, "a", 93);
      \u0275\u0275domElement(407, "i", 94);
      \u0275\u0275text(408, "Mark as Favourite");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(409, "li")(410, "a", 93);
      \u0275\u0275domElement(411, "i", 97);
      \u0275\u0275text(412, "Delete");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(413, "li")(414, "a", 93);
      \u0275\u0275domElement(415, "i", 98);
      \u0275\u0275text(416, "Mark as Unread");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(417, "li")(418, "a", 93);
      \u0275\u0275domElement(419, "i", 99);
      \u0275\u0275text(420, "Archeive Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(421, "li")(422, "a", 93);
      \u0275\u0275domElement(423, "i", 95);
      \u0275\u0275text(424, "Pin Chat");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(425, "div", 106)(426, "p", 88);
      \u0275\u0275text(427, "Looks clean! I like the font. Maybe try a slightly darker blue?");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(428, "span", 107);
      \u0275\u0275domElement(429, "img", 108);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(430, "div", 81)(431, "div", 82)(432, "span", 83);
      \u0275\u0275domElement(433, "img", 67);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(434, "div")(435, "div", 84)(436, "h6", 85);
      \u0275\u0275text(437, "Mark Smith");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(438, "p", 69);
      \u0275\u0275domElement(439, "i", 86);
      \u0275\u0275text(440, "10:05 AM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(441, "div", 15)(442, "div", 87)(443, "p", 88);
      \u0275\u0275text(444, "Perfect! That layout will work great on the landing page. \u{1F44D}");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(445, "div", 89)(446, "a", 90);
      \u0275\u0275domElement(447, "i", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(448, "ul", 92)(449, "li")(450, "a", 93);
      \u0275\u0275domElement(451, "i", 94);
      \u0275\u0275text(452, "Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(453, "li")(454, "a", 93);
      \u0275\u0275domElement(455, "i", 95);
      \u0275\u0275text(456, "Forward");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(457, "li")(458, "a", 93);
      \u0275\u0275domElement(459, "i", 96);
      \u0275\u0275text(460, "Copy");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(461, "li")(462, "a", 93);
      \u0275\u0275domElement(463, "i", 94);
      \u0275\u0275text(464, "Mark as Favourite");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(465, "li")(466, "a", 93);
      \u0275\u0275domElement(467, "i", 97);
      \u0275\u0275text(468, "Delete");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(469, "li")(470, "a", 93);
      \u0275\u0275domElement(471, "i", 98);
      \u0275\u0275text(472, "Mark as Unread");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(473, "li")(474, "a", 93);
      \u0275\u0275domElement(475, "i", 99);
      \u0275\u0275text(476, "Archeive Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(477, "li")(478, "a", 93);
      \u0275\u0275domElement(479, "i", 95);
      \u0275\u0275text(480, "Pin Chat");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(481, "div", 100)(482, "div", 101)(483, "div")(484, "div", 102)(485, "p", 69);
      \u0275\u0275domElement(486, "i", 103);
      \u0275\u0275text(487, "10:00 AM");
      \u0275\u0275domElement(488, "i", 86);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(489, "h6", 104);
      \u0275\u0275text(490, "You");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(491, "div", 15)(492, "div", 105)(493, "a", 90);
      \u0275\u0275domElement(494, "i", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(495, "ul", 92)(496, "li")(497, "a", 93);
      \u0275\u0275domElement(498, "i", 94);
      \u0275\u0275text(499, "Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(500, "li")(501, "a", 93);
      \u0275\u0275domElement(502, "i", 95);
      \u0275\u0275text(503, "Forward");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(504, "li")(505, "a", 93);
      \u0275\u0275domElement(506, "i", 96);
      \u0275\u0275text(507, "Copy");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(508, "li")(509, "a", 93);
      \u0275\u0275domElement(510, "i", 94);
      \u0275\u0275text(511, "Mark as Favourite");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(512, "li")(513, "a", 93);
      \u0275\u0275domElement(514, "i", 97);
      \u0275\u0275text(515, "Delete");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(516, "li")(517, "a", 93);
      \u0275\u0275domElement(518, "i", 98);
      \u0275\u0275text(519, "Mark as Unread");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(520, "li")(521, "a", 93);
      \u0275\u0275domElement(522, "i", 99);
      \u0275\u0275text(523, "Archeive Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(524, "li")(525, "a", 93);
      \u0275\u0275domElement(526, "i", 95);
      \u0275\u0275text(527, "Pin Chat");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(528, "div", 106)(529, "p", 88);
      \u0275\u0275text(530, "Perfect It looks Great!!!");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(531, "span", 107);
      \u0275\u0275domElement(532, "img", 108);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(533, "div", 115)(534, "div", 82)(535, "span", 83);
      \u0275\u0275domElement(536, "img", 67);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(537, "div")(538, "div", 84)(539, "h6", 85);
      \u0275\u0275text(540, "Mark Smith");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(541, "p", 69);
      \u0275\u0275domElement(542, "i", 86);
      \u0275\u0275text(543, "02:39 PM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(544, "div", 15)(545, "div", 87)(546, "p", 88);
      \u0275\u0275text(547, "Hey mark! Did you check out the new logo design?");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(548, "div", 89)(549, "a", 90);
      \u0275\u0275domElement(550, "i", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(551, "ul", 92)(552, "li")(553, "a", 93);
      \u0275\u0275domElement(554, "i", 94);
      \u0275\u0275text(555, "Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(556, "li")(557, "a", 93);
      \u0275\u0275domElement(558, "i", 95);
      \u0275\u0275text(559, "Forward");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(560, "li")(561, "a", 93);
      \u0275\u0275domElement(562, "i", 96);
      \u0275\u0275text(563, "Copy");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(564, "li")(565, "a", 93);
      \u0275\u0275domElement(566, "i", 94);
      \u0275\u0275text(567, "Mark as Favourite");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(568, "li")(569, "a", 93);
      \u0275\u0275domElement(570, "i", 97);
      \u0275\u0275text(571, "Delete");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(572, "li")(573, "a", 93);
      \u0275\u0275domElement(574, "i", 98);
      \u0275\u0275text(575, "Mark as Unread");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(576, "li")(577, "a", 93);
      \u0275\u0275domElement(578, "i", 99);
      \u0275\u0275text(579, "Archeive Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(580, "li")(581, "a", 93);
      \u0275\u0275domElement(582, "i", 95);
      \u0275\u0275text(583, "Pin Chat");
      \u0275\u0275domElementEnd()()()()()()()()()()()();
      \u0275\u0275domElement(584, "div", 116);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(585, "div", 60);
      \u0275\u0275domElement(586, "div", 61);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(587, "div", 62);
      \u0275\u0275domElement(588, "div", 63);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(589, "div", 117)(590, "div", 118);
      \u0275\u0275domElement(591, "input", 119);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(592, "div", 120)(593, "a", 121);
      \u0275\u0275domElement(594, "i", 122);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(595, "a", 121);
      \u0275\u0275domElement(596, "i", 123);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(597, "div")(598, "a", 124);
      \u0275\u0275domElement(599, "i", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(600, "ul", 92)(601, "li")(602, "a", 93);
      \u0275\u0275domElement(603, "i", 125);
      \u0275\u0275text(604, "Camera");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(605, "li")(606, "a", 93);
      \u0275\u0275domElement(607, "i", 126);
      \u0275\u0275text(608, "Gallery");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(609, "li")(610, "a", 93);
      \u0275\u0275domElement(611, "i", 127);
      \u0275\u0275text(612, "Audio");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(613, "li")(614, "a", 93);
      \u0275\u0275domElement(615, "i", 128);
      \u0275\u0275text(616, "Location");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(617, "li")(618, "a", 93);
      \u0275\u0275domElement(619, "i", 129);
      \u0275\u0275text(620, "Contact");
      \u0275\u0275domElementEnd()()()()()()()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatComponent, [{
    type: Component,
    args: [{ selector: "app-chat", imports: [CommonModule], template: `<div class="pb-4">

                <!-- Page Header -->
                <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                    <div class="flex-grow-1">
                        <h4 class="fs-18 fw-semibold mb-0">Chat</h4>
                    </div>
                    <div class="text-end">
                        <ol class="breadcrumb m-0 py-0">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>                              
                            <li class="breadcrumb-item"><a href="javascript:void(0);">Applications</a></li>                              
                            <li class="breadcrumb-item active" aria-current="page">Chat</li>
                        </ol>
                    </div>
				</div>
				<!-- End Page Header -->

                <div class="card shadow-none border-top-0 mb-0">
                    <div class="card-body p-0"> 

                        <div class="d-md-flex">
                            <div class="chat-user-nav  border-end-0">
                                <div>
                                    <div class="d-flex align-items-center justify-content-between border border-start-0 border-end-0 p-3">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-01.jpg" alt="user"></span>
                                            <div>
                                                <h6 class="fs-14 mb-1">James Hong </h6>
                                                <p class="mb-0">Admin</p>
                                            </div>
                                        </div>
                                        <a href="#" class="btn p-2 btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="New Chat"><i class="ti ti-plus"></i></a>
                                    </div>
                                    <div>
                                        <div class="input-group w-auto input-group-flat p-4 pb-0">
                                            <span class="input-group-text border-end-0"><i class="ti ti-search"></i></span>
                                            <input type="text" class="form-control" placeholder="Search Keyword">
                                        </div>
                                        <div class="chat-users p-4 simplebar-scrollable-y" data-simplebar="init"><div class="simplebar-wrapper" style="margin: -24px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 24px;">
                                            <h6 class="mb-3">All Messages</h6>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list active mb-1">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-02.jpg" alt="user"></a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">Mark Smith</a></h6>
                                                        <p class="mb-0 text-truncate">Hey Sam! Did you Ch...</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block">10:10 AM</span>
                                                    <span class="d-block text-success"><i class="ti ti-checks"></i></span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-03.jpg" alt="user"></a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">Eugene Sikora</a></h6>
                                                        <p class="mb-0 text-truncate">How are your Today</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block mb-1">08:26 AM</span>
                                                    <span class="badge ms-auto bg-danger rounded-circle message-count">5</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-04.jpg" alt="user"></a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">Robert Fassett</a></h6>
                                                        <p class="mb-0 text-truncate">Here are some of ve...</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block mb-1">yesterday</span>
                                                    <span class="badge ms-auto bg-danger rounded-circle message-count">5</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-05.jpg" alt="user"></a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">Andrew Fletcher</a></h6>
                                                        <p class="mb-0 text-truncate">Use tools like Trello...</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block mb-1">yesterday</span>
                                                    <span class="d-block text-light"><i class="ti ti-checks"></i></span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar badge-soft-purple fw-semibold me-2 flex-shrink-0">TD</a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">Tyron Derby</a></h6>
                                                        <p class="mb-0 text-truncate">Let's reconvene next...</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block mb-1">12:55 PM</span>
                                                    <span class="d-block text-light"><i class="ti ti-checks text-success"></i></span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-06.jpg" alt="user"></a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">Anna Johnson</a></h6>
                                                        <p class="mb-0 text-truncate">How are your Today</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block mb-1">12:54 PM</span>
                                                    <span class="d-block text-light"><i class="ti ti-check text-light"></i></span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-07.jpg" alt="user"></a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">Emily Davis</a></h6>
                                                        <p class="mb-0 text-truncate">Sure, I can help with...</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block mb-1">11:47 PM</span>
                                                    <span class="d-block text-light"><i class="ti ti-checks text-light"></i></span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-08.jpg" alt="user"></a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">Susan Denton</a></h6>
                                                        <p class="mb-0 text-truncate">I'll share the meeting...</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block mb-1">10:43 PM</span>
                                                    <span class="d-block text-light"><i class="ti ti-checks text-light"></i></span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between rounded p-3 user-list">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-09.jpg" alt="user"></a>
                                                    <div>
                                                        <h6 class="fs-14 mb-1"><a href="#">David Cruz</a></h6>
                                                        <p class="mb-0 text-truncate">Let me know if you...</p>
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <span class="text-dark d-block mb-1">10:43 PM</span>
                                                    <span class="d-block text-light"><i class="ti ti-checks text-light"></i></span>
                                                </div>
                                            </div>
                                        </div></div></div></div><div class="simplebar-placeholder" style="width: 350px; height: 806px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 25px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div>
                                    </div>

                                </div><!-- end card body -->
                            </div>
                            <div class="flex-fill chat-messages">
                                <!-- card start -->
                                <div class="card border border-bottom-0 mb-0">

                                    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3 p-3">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar me-2 flex-shrink-0"><img src="assets/img/users/user-10.jpg" alt="user"></span>
                                            <div>
                                                <h6 class="fs-14 fw-semibold mb-1">Mark Smith</h6>
                                                <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-point-filled text-success"></i>Online</p>
                                            </div>
                                        </div>
                                        <div class="gap-2 d-flex align-items-center flex-wrap">
                                            <a href="voice-call.html" class="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Voice Call"><i class="ti ti-phone"></i></a>
                                            <a href="video-call.html" class="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Video Call"><i class="ti ti-video"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Info"><i class="ti ti-info-circle"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-light close-chat d-md-none"><i class="ti ti-x"></i></a>
                                        </div>
                                    </div>

                                    <div class="card-body p-0">
                                        <div class="message-body p-4 simplebar-scrollable-y" data-simplebar="init"><div class="simplebar-wrapper" style="margin: -24px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 24px;">
                                            <div class="chat-list mb-3">
                                                <div class="d-flex align-items-start">
                                                    <span class="avatar online me-2 flex-shrink-0"><img src="assets/img/users/user-10.jpg" alt="user"></span>
                                                    <div>
                                                        <div class="d-flex align-items-center mb-1">
                                                            <h6 class="fs-14 mb-0">Mark Smith</h6>
                                                            <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-point-filled mx-2"></i>02:39 PM</p>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <div class="message-box receive-message p-3">
                                                                <p class="mb-0 fs-16">Hey mark! Did you check out the new logo design?</p>
                                                            </div>
                                                            <div class="ms-2">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a>
                                                                <ul class="dropdown-menu p-2">
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Reply</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Forward</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-file-export me-1"></i>Copy</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Mark as Favourite</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-trash me-1"></i>Delete</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-check me-1"></i>Mark as Unread</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-box-align-right me-1"></i>Archeive Chat</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Pin Chat</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat-list ms-auto mb-3">
                                                <div class="d-flex align-items-start justify-content-end">
                                                    <div>
                                                        <div class="d-flex align-items-center justify-content-end mb-1">
                                                            <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-checks text-success me-1"></i>02:39 PM<i class="ti ti-point-filled mx-2"></i></p>
                                                            <h6 class="fs-14 fw-semibold mb-0">You</h6>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <div class="me-2">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a>
                                                                <ul class="dropdown-menu p-2">
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Reply</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Forward</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-file-export me-1"></i>Copy</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Mark as Favourite</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-trash me-1"></i>Delete</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-check me-1"></i>Mark as Unread</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-box-align-right me-1"></i>Archeive Chat</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Pin Chat</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="message-box sent-message p-3">
                                                                <p class="mb-0 fs-16">Not yet. Can you send it here?</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="avatar ms-2 online flex-shrink-0"><img src="assets/img/users/user-11.jpg" alt="user"></span>
                                                </div>
                                            </div>
                                            <div class="chat-list mb-3">
                                                <div class="d-flex align-items-start">
                                                    <span class="avatar online me-2 flex-shrink-0"><img src="assets/img/users/user-10.jpg" alt="user"></span>
                                                    <div>
                                                        <div class="d-flex align-items-center mb-1">
                                                            <h6 class="fs-14 mb-0">Mark Smith</h6>
                                                            <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-point-filled mx-2"></i>02:39 PM</p>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <div class="message-box receive-message p-3">
                                                                <p class="mb-2 fs-16">Sure! Please check the below logo Attached!!!</p>
                                                                <div class="d-flex align-items-center gap-2 d-none">
                                                                    <span class="bg-white d-block rounded p-1"><img src="assets/img/favicon.png" class="rounded" alt="attachment"></span>
                                                                    <span class="bg-white d-block rounded p-1"><img src="assets/img/favicon.png" class="rounded" alt="attachment"></span>
                                                                </div>
                                                            </div>
                                                            <div class="ms-2">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a>
                                                                <ul class="dropdown-menu p-2">
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Reply</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Forward</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-file-export me-1"></i>Copy</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Mark as Favourite</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-trash me-1"></i>Delete</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-check me-1"></i>Mark as Unread</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-box-align-right me-1"></i>Archeive Chat</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Pin Chat</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center"><span class="badge bg-light rounded-pill px-3 text-dark fs-14">Today</span></div>
                                            <div class="chat-list ms-auto mb-3">
                                                <div class="d-flex align-items-start justify-content-end">
                                                    <div>
                                                        <div class="d-flex align-items-center justify-content-end mb-1">
                                                            <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-checks text-success me-1"></i>10:00 AM<i class="ti ti-point-filled mx-2"></i></p>
                                                            <h6 class="fs-14 fw-semibold mb-0">You</h6>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <div class="me-2">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a>
                                                                <ul class="dropdown-menu p-2">
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Reply</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Forward</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-file-export me-1"></i>Copy</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Mark as Favourite</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-trash me-1"></i>Delete</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-check me-1"></i>Mark as Unread</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-box-align-right me-1"></i>Archeive Chat</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Pin Chat</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="message-box sent-message p-3">
                                                                <p class="mb-0 fs-16">Looks clean! I like the font. Maybe try a slightly darker blue?</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="avatar ms-2 online flex-shrink-0"><img src="assets/img/users/user-11.jpg" alt="user"></span>
                                                </div>
                                            </div>
                                            <div class="chat-list mb-3">
                                                <div class="d-flex align-items-start">
                                                    <span class="avatar online me-2 flex-shrink-0"><img src="assets/img/users/user-10.jpg" alt="user"></span>
                                                    <div>
                                                        <div class="d-flex align-items-center mb-1">
                                                            <h6 class="fs-14 mb-0">Mark Smith</h6>
                                                            <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-point-filled mx-2"></i>10:05 AM</p>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <div class="message-box receive-message p-3">
                                                                <p class="mb-0 fs-16">Perfect! That layout will work great on the landing page. \u{1F44D}</p>
                                                            </div>
                                                            <div class="ms-2">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a>
                                                                <ul class="dropdown-menu p-2">
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Reply</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Forward</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-file-export me-1"></i>Copy</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Mark as Favourite</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-trash me-1"></i>Delete</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-check me-1"></i>Mark as Unread</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-box-align-right me-1"></i>Archeive Chat</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Pin Chat</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat-list ms-auto mb-3">
                                                <div class="d-flex align-items-start justify-content-end">
                                                    <div>
                                                        <div class="d-flex align-items-center justify-content-end mb-1">
                                                            <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-checks text-success me-1"></i>10:00 AM<i class="ti ti-point-filled mx-2"></i></p>
                                                            <h6 class="fs-14 fw-semibold mb-0">You</h6>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <div class="me-2">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a>
                                                                <ul class="dropdown-menu p-2">
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Reply</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Forward</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-file-export me-1"></i>Copy</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Mark as Favourite</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-trash me-1"></i>Delete</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-check me-1"></i>Mark as Unread</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-box-align-right me-1"></i>Archeive Chat</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Pin Chat</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="message-box sent-message p-3">
                                                                <p class="mb-0 fs-16">Perfect It looks Great!!!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="avatar ms-2 online flex-shrink-0"><img src="assets/img/users/user-11.jpg" alt="user"></span>
                                                </div>
                                            </div>
                                            <div class="chat-list">
                                                <div class="d-flex align-items-start">
                                                    <span class="avatar online me-2 flex-shrink-0"><img src="assets/img/users/user-10.jpg" alt="user"></span>
                                                    <div>
                                                        <div class="d-flex align-items-center mb-1">
                                                            <h6 class="fs-14 mb-0">Mark Smith</h6>
                                                            <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-point-filled mx-2"></i>02:39 PM</p>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <div class="message-box receive-message p-3">
                                                                <p class="mb-0 fs-16">Hey mark! Did you check out the new logo design?</p>
                                                            </div>
                                                            <div class="ms-2">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a>
                                                                <ul class="dropdown-menu p-2">
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Reply</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Forward</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-file-export me-1"></i>Copy</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-heart me-1"></i>Mark as Favourite</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-trash me-1"></i>Delete</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-check me-1"></i>Mark as Unread</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-box-align-right me-1"></i>Archeive Chat</a></li>
                                                                    <li><a class="dropdown-item" href="#"><i class="ti ti-pinned me-1"></i>Pin Chat</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div></div></div><div class="simplebar-placeholder" style="width: 599px; height: 819px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 25px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div>
                                        <div class="message-footer d-flex align-items-center border-top p-3">
                                            <div class="flex-fill">
                                                <input type="text" class="form-control border-0" placeholder="Type Something...">
                                            </div>
                                            <div class="d-flex align-items-center gap-2">
                                                <a href="javascript:void(0);" class="btn btn-icon btn-light"><i class="ti ti-photo-plus"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-light"><i class="ti ti-mood-smile-beam"></i></a>
                                                <div>
                                                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i class="ti ti-dots-vertical"></i></a>
                                                    <ul class="dropdown-menu p-2">
                                                        <li>
                                                            <a href="#" class="dropdown-item"><i class="ti ti-camera-selfie me-2"></i>Camera</a>
                                                        </li>                                       
                                                        <li>
                                                            <a href="#" class="dropdown-item"><i class="ti ti-photo-up me-2"></i>Gallery</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="dropdown-item"><i class="ti ti-music me-2"></i>Audio</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="dropdown-item"><i class="ti ti-map-pin-share me-2"></i>Location</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="dropdown-item"><i class="ti ti-user-check me-2"></i>Contact</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- card start -->
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
                                
            </div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "src/app/features/application/chat/chat.component.ts", lineNumber: 10 });
})();
export {
  ChatComponent
};
//# sourceMappingURL=chunk-7ZKK6XFH.js.map
