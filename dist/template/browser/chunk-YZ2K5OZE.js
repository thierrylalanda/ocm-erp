import {
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-5P3VLMEM.js";
import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-Q45D2WIA.js";
import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/application/email-reply/email-reply.component.ts
var _c0 = (a0) => ({ "display": a0 });
var EmailReplyComponent = class _EmailReplyComponent {
  routes = routes;
  show = [false];
  toggleMenu(index) {
    this.show[index] = !this.show[index];
  }
  lightGallery;
  needRefresh = false;
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  static \u0275fac = function EmailReplyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailReplyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailReplyComponent, selectors: [["app-email-reply"]], decls: 389, vars: 17, consts: [[1, "content-two", "p-0"], [1, "d-md-flex"], [1, "email-sidebar", "border-end", "border-bottom"], [1, "active", "slimscroll", "h-100"], [1, "slimscroll-active-sidebar", "email-scroll"], [1, "p-3"], [1, "border", "bg-white", "rounded", "p-2", "mb-3"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "flex-shrink-0", "me-2"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "Img", 1, "rounded-circle"], [1, "mb-1", "fs-16", "fw-medium"], ["href", "javascript:void(0);"], [1, "fs-14"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#email-view", 1, "btn", "btn-primary", "w-100"], [1, "ti", "ti-edit", "me-2"], [1, "mt-4"], [1, "mb-2"], [1, "d-block", "mb-3", "pb-3", "border-bottom", "email-tags"], ["href", "javascript:void(0);", 1, "d-flex", "bg-light", "align-items-center", "justify-content-between", "p-2", "rounded", "active"], [1, "d-flex", "align-items-center", "fw-medium"], [1, "ti", "ti-inbox", "text-gray", "me-2"], [1, "badge", "bg-danger", "bg-danger", "rounded-pill", "badge-xs"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "justify-content-between", "p-2", "rounded"], [1, "ti", "ti-star", "text-gray", "me-2"], [1, "fw-semibold", "fs-12", "rounded-pill"], [1, "ti", "ti-rocket", "text-gray", "me-2"], [1, "rounded-pill"], [1, "ti", "ti-file", "text-gray", "me-2"], [1, "ti", "ti-trash", "text-gray", "me-2"], [1, "ti", "ti-info-octagon", "text-gray", "me-2"], [1, "more-menu", 3, "ngStyle"], [1, "ti", "ti-location-up", "text-gray", "me-2"], [1, "ti", "ti-transition-top", "text-gray", "me-2"], [1, "view-all", "mt-2"], ["href", "javascript:void(0);", 1, "viewall-button", "fw-medium", 3, "click"], [1, "fa", "fs-10", "ms-2", 3, "ngClass"], [1, "border-bottom", "mb-3", "pb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "ti", "ti-square-rounded-plus-filled", "text-primary", "fs-16"], ["href", "javascript:void(0);", 1, "fw-medium", "d-flex", "align-items-center", "text-dark", "py-1"], [1, "ti", "ti-square-rounded", "text-success", "me-2"], [1, "ti", "ti-square-rounded", "text-warning", "me-2"], [1, "ti", "ti-square-rounded", "text-danger", "me-2"], [1, "ti", "ti-square-rounded", "text-skyblue", "me-2"], [1, "more-menu-2", 3, "ngStyle"], [1, "ti", "ti-square-rounded", "text-purple", "me-2"], [1, "ti", "ti-square-rounded", "text-info", "me-2"], [1, "ti", "ti-folder-filled", "text-danger", "me-2"], [1, "ti", "ti-folder-filled", "text-warning", "me-2"], [1, "ti", "ti-folder-filled", "text-success", "me-2"], [1, "more-menu-3", 3, "ngStyle"], [1, "ti", "ti-folder-filled", "text-info", "me-2"], [1, "ti", "ti-folder-filled", "text-primary", "me-2"], [1, "mail-detail", "bg-white", "border-bottom", "p-3"], [1, "d-flex", "align-items-center", "table-header", "justify-content-between", "flex-wrap", "row-gap-2", "border-bottom", "mb-3", "pb-3"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "border", "dropdown-toggle"], [1, "badge", "bg-dark", "rounded-circle", "badge-xs", "me-1"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "rounded-circle"], [1, "ti", "ti-arrow-back-up"], [1, "ti", "ti-arrow-back-up-double"], [1, "ti", "ti-arrow-forward"], [1, "ti", "ti-bookmarks-filled"], [1, "ti", "ti-archive-filled"], [1, "ti", "ti-mail-opened-filled"], [1, "ti", "ti-printer"], [1, "ti", "ti-star-filled", "text-warning"], [1, "bg-light", "rounded", "p-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-fill", "border-bottom", "mb-3", "pb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/profiles/avatar-01.jpg", "alt", "Img"], [1, "flex-fill"], [1, "d-flex", "align-items-start", "justify-content-between", "flex-wrap", "row-gap-2"], [1, "mb-1"], [1, "me-2", "mb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-2"], [1, "mb-0", "text-dark", "me-3"], [1, "text-gray"], [1, "mb-0", "text-dark"], [1, "card", "shadow-none"], [1, "card-body"], [1, "mb-3"], [1, "text-dark"], [1, "fw-medium", "d-flex", "mt-1"], [1, "d-flex", "align-items-center", "justify-content-between", "my-3", "pt-3", "border-top"], ["href", "javascript:void(0);", 1, "text-primary", "fw-medium"], [1, "d-flex", "align-items-center", "email-attach"], [3, "settings", "onBeforeSlide"], ["href", "assets/img/media/email-attach-big-01.jpg", "data-fancybox", "gallery", 1, "avatar", "avatar-xl", "me-3", "gallery-item"], ["src", "assets/img/media/email-attach-01.jpg", "alt", "img", 1, "rounded"], [1, "avatar", "avatar-md", "avatar-rounded"], [1, "ti", "ti-eye"], ["href", "assets/img/media/email-attach-big-02.jpg", "data-fancybox", "gallery", 1, "avatar", "avatar-xl", "me-3", "gallery-item"], ["src", "assets/img/media/email-attach-02.jpg", "alt", "img", 1, "rounded"], ["href", "assets/img/media/email-attach-big-03.jpg", "data-fancybox", "gallery", 1, "avatar", "avatar-xl", "me-3", "gallery-item"], ["src", "assets/img/media/email-attach-03.jpg", "alt", "img", 1, "rounded"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-2", "flex-fill"], [1, "mb-0"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "dropdown-toggle", "bg-transparent", "text-dark", "border-0", "p-0", "btn-sm"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "fw-medium", "d-inline-flex", "mt-1"], [1, "border", "rounded", "mt-3"], [1, "p-3", "position-relative", "border-bottom"], [1, "tag-with-img", "d-flex", "align-items-center"], [1, "form-label", "me-2", "mb-0"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "Label", "value", "Angela Thomas", 1, "input-tags", "form-control", "border-0", "h-100"], [1, "d-flex", "align-items-center", "email-cc"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2"], ["href", "javascript:void(0);", 1, "d-inline-flex"], ["rows", "2", 1, "form-control", "border-0", "p-0", "bg-transparent"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "p-3", "flex-wrap"], [1, "ti", "ti-paperclip"], [1, "ti", "ti-photo"], [1, "ti", "ti-link"], [1, "ti", "ti-pencil"], [1, "ti", "ti-mood-smile"], [1, "ti", "ti-calendar-repeat"], [1, "ti", "ti-trash"], ["type", "submit", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "ms-2"], [1, "ti", "ti-arrow-right", "ms-2"], [1, "text-center"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-sm"], ["id", "email-view", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "bg-white", "border-0", "rounded", "compose-view"], [1, "compose-header", "d-flex", "align-items-center", "justify-content-between", "bg-dark", "p-3"], [1, "text-white"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2", "text-white", "fs-16"], [1, "ti", "ti-minus"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2", "fs-16", "text-white"], [1, "ti", "ti-maximize"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close", "bg-transparent", "fs-16", "text-white", "position-static"], [1, "ti", "ti-x"], [1, "p-3", "position-relative", "pb-2", "border-bottom"], [1, "p-3", "border-bottom"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["rows", "7", "placeholder", "Compose Email", 1, "form-control"], [1, "p-3", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "compose-footer"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "ms-2"]], template: function EmailReplyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8);
      \u0275\u0275element(9, "img", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div")(11, "h6", 10)(12, "a", 11);
      \u0275\u0275text(13, "James Hong");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 12);
      \u0275\u0275text(15, "Jnh343@example.com");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "a", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275text(18, "Compose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 15)(20, "h5", 16);
      \u0275\u0275text(21, "Emails");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 17)(23, "a", 18)(24, "span", 19);
      \u0275\u0275element(25, "i", 20);
      \u0275\u0275text(26, "Inbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 21);
      \u0275\u0275text(28, "56");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "a", 22)(30, "span", 19);
      \u0275\u0275element(31, "i", 23);
      \u0275\u0275text(32, "Starred");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 24);
      \u0275\u0275text(34, "46");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "a", 22)(36, "span", 19);
      \u0275\u0275element(37, "i", 25);
      \u0275\u0275text(38, "Sent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 26);
      \u0275\u0275text(40, "14");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "a", 22)(42, "span", 19);
      \u0275\u0275element(43, "i", 27);
      \u0275\u0275text(44, "Drafts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 26);
      \u0275\u0275text(46, "12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "a", 22)(48, "span", 19);
      \u0275\u0275element(49, "i", 28);
      \u0275\u0275text(50, "Deleted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 26);
      \u0275\u0275text(52, "08");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "a", 22)(54, "span", 19);
      \u0275\u0275element(55, "i", 29);
      \u0275\u0275text(56, "Spam");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 26);
      \u0275\u0275text(58, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div")(60, "div", 30)(61, "a", 22)(62, "span", 19);
      \u0275\u0275element(63, "i", 31);
      \u0275\u0275text(64, "Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 26);
      \u0275\u0275text(66, "12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "a", 22)(68, "span", 19);
      \u0275\u0275element(69, "i", 32);
      \u0275\u0275text(70, "All Emails");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span", 26);
      \u0275\u0275text(72, "34");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 33)(74, "a", 34);
      \u0275\u0275listener("click", function EmailReplyComponent_Template_a_click_74_listener() {
        return ctx.toggleMenu(0);
      });
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76);
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "i", 35);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(78, "div", 36)(79, "div", 37)(80, "h5");
      \u0275\u0275text(81, "Labels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "a", 11);
      \u0275\u0275element(83, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div")(85, "a", 39);
      \u0275\u0275element(86, "i", 40);
      \u0275\u0275text(87, " Team Events ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "a", 39);
      \u0275\u0275element(89, "i", 41);
      \u0275\u0275text(90, " Work ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "a", 39);
      \u0275\u0275element(92, "i", 42);
      \u0275\u0275text(93, " External ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "a", 39);
      \u0275\u0275element(95, "i", 43);
      \u0275\u0275text(96, " Projects ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div")(98, "div", 44)(99, "a", 39);
      \u0275\u0275element(100, "i", 45);
      \u0275\u0275text(101, " Applications ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "a", 39);
      \u0275\u0275element(103, "i", 46);
      \u0275\u0275text(104, " Desgin ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 33)(106, "a", 34);
      \u0275\u0275listener("click", function EmailReplyComponent_Template_a_click_106_listener() {
        return ctx.toggleMenu(1);
      });
      \u0275\u0275elementStart(107, "span");
      \u0275\u0275text(108);
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "i", 35);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(110, "div")(111, "div", 37)(112, "h5");
      \u0275\u0275text(113, "Folders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 11);
      \u0275\u0275element(115, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div")(117, "a", 39);
      \u0275\u0275element(118, "i", 47);
      \u0275\u0275text(119, " Projects ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "a", 39);
      \u0275\u0275element(121, "i", 48);
      \u0275\u0275text(122, " Personal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "a", 39);
      \u0275\u0275element(124, "i", 49);
      \u0275\u0275text(125, " Finance ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div")(127, "div", 50)(128, "a", 39);
      \u0275\u0275element(129, "i", 51);
      \u0275\u0275text(130, " Projects ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "a", 39);
      \u0275\u0275element(132, "i", 52);
      \u0275\u0275text(133, " Personal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 33)(135, "a", 34);
      \u0275\u0275listener("click", function EmailReplyComponent_Template_a_click_135_listener() {
        return ctx.toggleMenu(2);
      });
      \u0275\u0275elementStart(136, "span");
      \u0275\u0275text(137);
      \u0275\u0275elementEnd();
      \u0275\u0275element(138, "i", 35);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(139, "div", 53)(140, "div", 3)(141, "div", 4)(142, "div", 54)(143, "div", 55)(144, "button", 56)(145, "span", 57);
      \u0275\u0275text(146, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, " Peoples ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "ul", 58)(149, "li")(150, "a", 59);
      \u0275\u0275text(151, "Peoples");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "li")(153, "a", 59);
      \u0275\u0275text(154, "Rufana");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "li")(156, "a", 59);
      \u0275\u0275text(157, "Sean Hill");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "li")(159, "a", 59);
      \u0275\u0275text(160, "Cameron Drake");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(161, "div", 7)(162, "a", 60);
      \u0275\u0275element(163, "i", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "a", 60);
      \u0275\u0275element(165, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "a", 60);
      \u0275\u0275element(167, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "a", 60);
      \u0275\u0275element(169, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "a", 60);
      \u0275\u0275element(171, "i", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "a", 60);
      \u0275\u0275element(173, "i", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "a", 60);
      \u0275\u0275element(175, "i", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "a", 60);
      \u0275\u0275element(177, "i", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "div", 69)(179, "div", 70)(180, "a", 71);
      \u0275\u0275element(181, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 73)(183, "div", 74)(184, "div")(185, "h6", 75)(186, "a", 11);
      \u0275\u0275text(187, "Angela Thomas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "p");
      \u0275\u0275text(189, "Subject: Client Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "div", 7)(191, "p", 76);
      \u0275\u0275text(192, "12:45 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "a", 60);
      \u0275\u0275element(194, "i", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "a", 60);
      \u0275\u0275element(196, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "a", 60);
      \u0275\u0275element(198, "i", 67);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(199, "div", 77)(200, "p", 78)(201, "span", 79);
      \u0275\u0275text(202, "From: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(203, " Arman Janes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "p", 78)(205, "span", 79);
      \u0275\u0275text(206, "To: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(207, " Angela Thomas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "p", 80)(209, "span", 79);
      \u0275\u0275text(210, "Cc: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(211, " Angela Thomas, Justin Lapointe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(212, "div", 81)(213, "div", 82)(214, "div")(215, "h6", 83);
      \u0275\u0275text(216, "Dear Angela");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "p", 84);
      \u0275\u0275text(218, "I am writing to request a meeting to discuss the progress and next steps for Project. We have reached a critical milestone, and I believe a discussion will help align our efforts and ensure we are on track to meet our goals. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "p", 84);
      \u0275\u0275text(220, " am available on Tuesday and Thursday afternoons, but I am flexible and can adjust to a time that suits you best ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "p", 84);
      \u0275\u0275text(222, " Looking forward to your response. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "p", 84);
      \u0275\u0275text(224, "Best regards, ");
      \u0275\u0275element(225, "br");
      \u0275\u0275elementStart(226, "b", 85);
      \u0275\u0275text(227, "Arman");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(228, "div", 86)(229, "h5");
      \u0275\u0275text(230, "Attachments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "a", 87);
      \u0275\u0275text(232, "Download All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 88)(234, "lightgallery", 89)(235, "a", 90);
      \u0275\u0275element(236, "img", 91);
      \u0275\u0275elementStart(237, "span", 92);
      \u0275\u0275element(238, "i", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "a", 94);
      \u0275\u0275element(240, "img", 95);
      \u0275\u0275elementStart(241, "span", 92);
      \u0275\u0275element(242, "i", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "a", 96);
      \u0275\u0275element(244, "img", 97);
      \u0275\u0275elementStart(245, "span", 92);
      \u0275\u0275element(246, "i", 93);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(247, "div", 81)(248, "div", 82)(249, "div", 69)(250, "div", 98)(251, "a", 71);
      \u0275\u0275element(252, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 73)(254, "div", 74)(255, "div")(256, "h6", 75)(257, "a", 11);
      \u0275\u0275text(258, "Arman Janes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 7)(260, "p", 99)(261, "span");
      \u0275\u0275text(262, "To: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(263, " Me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 55);
      \u0275\u0275element(265, "button", 100);
      \u0275\u0275elementStart(266, "ul", 101)(267, "li")(268, "a", 102)(269, "span", 79);
      \u0275\u0275text(270, "From :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(271, " Arman Janes arman343@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "li")(273, "a", 102)(274, "span", 79);
      \u0275\u0275text(275, "To :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(276, " Angela Thomas ange4565@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "li")(278, "a", 102)(279, "span", 79);
      \u0275\u0275text(280, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(281, " 12 May 2025, 09:45 PM ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(282, "div", 7)(283, "p", 76);
      \u0275\u0275text(284, "Yesterday 01:22 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "a", 60);
      \u0275\u0275element(286, "i", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "a", 60);
      \u0275\u0275element(288, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "a", 60);
      \u0275\u0275element(290, "i", 67);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(291, "div")(292, "h6", 16);
      \u0275\u0275text(293, "Dear Arman");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "p", 84);
      \u0275\u0275text(295, "Introduction Mail from Techsolutions!!!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "p", 84);
      \u0275\u0275text(297, "Best regards ");
      \u0275\u0275element(298, "br");
      \u0275\u0275elementStart(299, "b", 103);
      \u0275\u0275text(300, "Arman");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "form")(302, "div", 104)(303, "div", 105)(304, "div", 106)(305, "label", 107);
      \u0275\u0275text(306, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(307, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "div", 109)(309, "a", 110);
      \u0275\u0275text(310, "Cc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "a", 111);
      \u0275\u0275text(312, "Bcc");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(313, "div", 5)(314, "div", 83);
      \u0275\u0275element(315, "textarea", 112);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "div", 113)(317, "div", 7)(318, "a", 60);
      \u0275\u0275element(319, "i", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "a", 60);
      \u0275\u0275element(321, "i", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "a", 60);
      \u0275\u0275element(323, "i", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "a", 60);
      \u0275\u0275element(325, "i", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "a", 60);
      \u0275\u0275element(327, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "div", 7)(329, "a", 60);
      \u0275\u0275element(330, "i", 119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "a", 60);
      \u0275\u0275element(332, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "button", 121);
      \u0275\u0275text(334, "Send ");
      \u0275\u0275element(335, "i", 122);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(336, "div", 123)(337, "a", 124);
      \u0275\u0275text(338, "View Older Messages");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(339, "div", 125)(340, "div", 126)(341, "div", 127)(342, "div", 128)(343, "div", 129)(344, "h5", 130);
      \u0275\u0275text(345, "Compose New Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "div", 7)(347, "a", 131);
      \u0275\u0275element(348, "i", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "a", 133);
      \u0275\u0275element(350, "i", 134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "button", 135);
      \u0275\u0275element(352, "i", 136);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(353, "form")(354, "div", 137)(355, "div", 106)(356, "label", 107);
      \u0275\u0275text(357, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(358, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "div", 109)(360, "a", 110);
      \u0275\u0275text(361, "Cc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "a", 111);
      \u0275\u0275text(363, "Bcc");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(364, "div", 138)(365, "div", 83);
      \u0275\u0275element(366, "input", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "div", 99);
      \u0275\u0275element(368, "textarea", 140);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(369, "div", 141)(370, "div", 7)(371, "a", 60);
      \u0275\u0275element(372, "i", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "a", 60);
      \u0275\u0275element(374, "i", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "a", 60);
      \u0275\u0275element(376, "i", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "a", 60);
      \u0275\u0275element(378, "i", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "a", 60);
      \u0275\u0275element(380, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(381, "div", 142)(382, "a", 60);
      \u0275\u0275element(383, "i", 119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "a", 60);
      \u0275\u0275element(385, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "button", 143);
      \u0275\u0275text(387, "Send ");
      \u0275\u0275element(388, "i", 122);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(60);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(11, _c0, ctx.show[0] ? "" : "none"));
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1(" ", ctx.show[0] ? "Less" : "Show More", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.show[0] ? "fa-chevron-up" : "fa-chevron-down");
      \u0275\u0275advance(21);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(13, _c0, ctx.show[1] ? "" : "none"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.show[1] ? "Less" : "Show More", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.show[1] ? "fa-chevron-up" : "fa-chevron-down");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(15, _c0, ctx.show[2] ? "" : "none"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.show[2] ? "Less" : "Show More", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.show[2] ? "fa-chevron-up" : "fa-chevron-down");
      \u0275\u0275advance(96);
      \u0275\u0275property("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
    }
  }, dependencies: [CommonModule, NgClass, NgStyle, LightgalleryModule, LightgalleryComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailReplyComponent, [{
    type: Component,
    args: [{ selector: "app-email-reply", imports: [CommonModule, LightgalleryModule], template: `            <!-- Start Content -->
            <div class="content-two p-0">
                <div class="d-md-flex">
                    <div class="email-sidebar border-end border-bottom">
                        <div class="active slimscroll h-100">
                            <div class="slimscroll-active-sidebar email-scroll">
                                <div class="p-3">
                                    <div class="border bg-white rounded p-2 mb-3">
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
                                                <img src="assets/img/profiles/avatar-02.jpg" class="rounded-circle" alt="Img">
                                            </a>
                                            <div>
                                                <h6 class="mb-1 fs-16 fw-medium"><a href="javascript:void(0);">James Hong</a></h6>
                                                <p class="fs-14">Jnh343&#64;example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#email-view"><i class="ti ti-edit me-2"></i>Compose</a>
                                    <div class="mt-4">
                                        <h5 class="mb-2">Emails</h5>
                                        <div class="d-block mb-3 pb-3 border-bottom email-tags">
                                            <a href="javascript:void(0);" class="d-flex bg-light align-items-center justify-content-between p-2 rounded active">
                                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-inbox text-gray me-2"></i>Inbox</span>
                                                <span class="badge bg-danger bg-danger rounded-pill badge-xs">56</span>
                                            </a>
                                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-star text-gray me-2"></i>Starred</span>
                                                <span class="fw-semibold fs-12 rounded-pill">46</span>
                                            </a>
                                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-rocket text-gray me-2"></i>Sent</span>
                                                <span class="rounded-pill">14</span>
                                            </a>
                                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-file text-gray me-2"></i>Drafts</span>
                                                <span class="rounded-pill">12</span>
                                            </a>
                                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-trash text-gray me-2"></i>Deleted</span>
                                                <span class="rounded-pill">08</span>
                                            </a>
                                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-info-octagon text-gray me-2"></i>Spam</span>
                                                <span class="rounded-pill">0</span>
                                            </a>
                                            <div>
                                                <div class="more-menu" [ngStyle]="{'display':show[0]?'':'none'}">
                                                    <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                                        <span class="d-flex align-items-center fw-medium"><i class="ti ti-location-up text-gray me-2"></i>Important</span>
                                                        <span class="rounded-pill">12</span>
                                                    </a>
                                                    <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                                        <span class="d-flex align-items-center fw-medium"><i class="ti ti-transition-top text-gray me-2"></i>All Emails</span>
                                                        <span class="rounded-pill">34</span>
                                                    </a>
                                                </div>
                                                <div class="view-all mt-2">
                                                    <a href="javascript:void(0);" class="viewall-button fw-medium" (click)=toggleMenu(0)><span>
                                                     {{show[0]? 'Less':'Show More'}}
                                                    </span><i class="fa fs-10 ms-2" [ngClass]="show[0]?'fa-chevron-up':'fa-chevron-down'"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-bottom mb-3 pb-3">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <h5>Labels</h5>
                                            <a href="javascript:void(0);"><i class="ti ti-square-rounded-plus-filled text-primary fs-16"></i></a>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                <i class="ti ti-square-rounded text-success me-2"></i> Team Events
                                            </a>
                                            <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                <i class="ti ti-square-rounded text-warning me-2"></i> Work
                                            </a>
                                            <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                <i class="ti ti-square-rounded text-danger me-2"></i> External
                                            </a>
                                            <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                <i class="ti ti-square-rounded text-skyblue me-2"></i> Projects
                                            </a>
                                            <div>
                                                <div class="more-menu-2" [ngStyle]="{'display':show[1]?'':'none'}">
                                                    <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                        <i class="ti ti-square-rounded text-purple me-2"></i> Applications
                                                    </a>
                                                    <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                        <i class="ti ti-square-rounded text-info me-2"></i> Desgin
                                                    </a>
                                                </div>
                                                <div class="view-all mt-2">
                                                  <a href="javascript:void(0);" class="viewall-button fw-medium" (click)=toggleMenu(1)><span>
                                                   {{show[1]? 'Less':'Show More'}}
                                                  </span><i class="fa fs-10 ms-2" [ngClass]="show[1]?'fa-chevron-up':'fa-chevron-down'"></i></a>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <h5>Folders</h5>
                                            <a href="javascript:void(0);"><i class="ti ti-square-rounded-plus-filled text-primary fs-16"></i></a>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                <i class="ti ti-folder-filled text-danger me-2"></i> Projects
                                            </a>
                                            <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                <i class="ti ti-folder-filled text-warning me-2"></i> Personal
                                            </a>
                                            <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                <i class="ti ti-folder-filled text-success me-2"></i> Finance
                                            </a>
                                            <div>
                                                <div class="more-menu-3" [ngStyle]="{'display':show[2]?'':'none'}">
                                                    <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                        <i class="ti ti-folder-filled text-info me-2"></i> Projects
                                                    </a>
                                                    <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                                        <i class="ti ti-folder-filled text-primary me-2"></i> Personal
                                                    </a>
                                                </div>
                                                <div class="view-all mt-2">
                                                  <a href="javascript:void(0);" class="viewall-button fw-medium" (click)=toggleMenu(2)><span>
                                                   {{show[2]? 'Less':'Show More'}}
                                                  </span><i class="fa fs-10 ms-2" [ngClass]="show[2]?'fa-chevron-up':'fa-chevron-down'"></i></a>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mail-detail bg-white border-bottom p-3">
                        <div class="active slimscroll h-100">
                            <div class="slimscroll-active-sidebar email-scroll">
                                <div class="d-flex align-items-center table-header justify-content-between flex-wrap row-gap-2 border-bottom mb-3 pb-3">
                                    <div class="dropdown">
                                        <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="badge bg-dark rounded-circle badge-xs me-1">5</span> Peoples
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                                <a class="dropdown-item rounded-1" href="javascript:void(0);">Peoples</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item rounded-1" href="javascript:void(0);">Rufana</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item rounded-1" href="javascript:void(0);">Sean Hill</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item rounded-1" href="javascript:void(0);">Cameron Drake</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up-double"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-forward"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-bookmarks-filled"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-archive-filled"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-mail-opened-filled"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-printer"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-star-filled text-warning"></i></a>
                                    </div>
                                </div>
                                <div class="bg-light rounded p-3 mb-3">
                                    <div class="d-flex align-items-center flex-fill border-bottom mb-3 pb-3">
                                        <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/profiles/avatar-01.jpg" alt="Img">
                                        </a>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-start justify-content-between flex-wrap row-gap-2">
                                                <div>
                                                    <h6 class="mb-1"><a href="javascript:void(0);">Angela Thomas</a></h6>
                                                    <p>Subject: Client Dashboard</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <p class="me-2 mb-0">12:45 AM</p>
                                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up"></i></a>
                                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up-double"></i></a>
                                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-printer"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap row-gap-2">
                                        <p class="mb-0 text-dark me-3"><span class="text-gray">From: </span> Arman Janes</p>
                                        <p class="mb-0 text-dark me-3"><span class="text-gray">To: </span> Angela Thomas</p>
                                        <p class="mb-0 text-dark"><span class="text-gray">Cc: </span> Angela Thomas, Justin Lapointe</p>
                                    </div>
                                </div>
                                <div class="card shadow-none">
                                    <div class="card-body">
                                        <div>
                                            <h6 class="mb-3">Dear Angela</h6>
                                            <p class="text-dark">I am writing to request a meeting to discuss the progress and next steps for Project. We have reached a critical milestone, and I believe a discussion will help align our efforts and ensure we are on track to
                                                meet our goals.
                                            </p>
                                            <p class="text-dark">
                                                am available on Tuesday and Thursday afternoons, but I am flexible and can adjust to a time that suits you best
                                            </p>
                                            <p class="text-dark">
                                                Looking forward to your response.
                                            </p>
                                            <p class="text-dark">Best regards,
                                                <br><b class="fw-medium d-flex mt-1">Arman</b> </p>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between my-3 pt-3 border-top">
                                            <h5>Attachments</h5>
                                            <a href="javascript:void(0);" class="text-primary fw-medium">Download All</a>
                                        </div>
                                        <div class="d-flex align-items-center email-attach">
                                            <lightgallery [settings]="settings" [onBeforeSlide]="onBeforeSlide">
                                            <a href="assets/img/media/email-attach-big-01.jpg" data-fancybox="gallery" class="avatar avatar-xl me-3 gallery-item">
                                                <img src="assets/img/media/email-attach-01.jpg" class=" rounded" alt="img">
                                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                                            </a>
                                            <a href="assets/img/media/email-attach-big-02.jpg" data-fancybox="gallery" class="avatar avatar-xl me-3 gallery-item">
                                                <img src="assets/img/media/email-attach-02.jpg" class="rounded" alt="img">
                                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                                            </a>
                                            <a href="assets/img/media/email-attach-big-03.jpg" data-fancybox="gallery" class="avatar avatar-xl me-3 gallery-item">
                                                <img src="assets/img/media/email-attach-03.jpg" class="rounded" alt="img">
                                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                                            </a>
                                        </lightgallery>
                                        </div>
                                    </div>
                                </div>
                                <div class="card shadow-none">
                                    <div class="card-body">
                                        <div class="bg-light rounded p-3 mb-3">
                                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                                    <img src="assets/img/profiles/avatar-01.jpg" alt="Img">
                                                </a>
                                                <div class="flex-fill">
                                                    <div class="d-flex align-items-start justify-content-between flex-wrap row-gap-2">
                                                        <div>
                                                            <h6 class="mb-1"><a href="javascript:void(0);">Arman Janes</a></h6>
                                                            <div class="d-flex align-items-center">
                                                                <p class="mb-0"><span>To: </span> Me</p>
                                                                <div class="dropdown">
                                                                    <button class="btn btn-icon dropdown-toggle bg-transparent text-dark border-0 p-0 btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a class="dropdown-item" href="javascript:void(0);"><span class="text-gray">From :</span> Arman Janes arman343&#64;example.com</a>
                                                                        </li>
                                                                        <li>
                                                                            <a class="dropdown-item" href="javascript:void(0);"><span class="text-gray">To :</span> Angela Thomas ange4565&#64;example.com</a>
                                                                        </li>
                                                                        <li>
                                                                            <a class="dropdown-item" href="javascript:void(0);"><span class="text-gray">Date :</span> 12 May 2025, 09:45 PM </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <p class="me-2 mb-0">Yesterday 01:22 AM</p>
                                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up"></i></a>
                                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up-double"></i></a>
                                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-printer"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-2">Dear Arman</h6>
                                            <p class="text-dark">Introduction Mail from Techsolutions!!!</p>
                                            <p class="text-dark">Best regards
                                                <br><b class="fw-medium d-inline-flex mt-1">Arman</b></p>
                                        </div>
                                        <form>
                                            <div class="border rounded mt-3">
                                                <div class="p-3 position-relative border-bottom">
                                                    <div class="tag-with-img d-flex align-items-center">
                                                        <label class="form-label me-2 mb-0">To</label>
                                                        <input class="input-tags form-control border-0 h-100" id="inputBox" type="text" data-role="tagsinput" name="Label" value="Angela Thomas">
                                                    </div>
                                                    <div class="d-flex align-items-center email-cc">
                                                        <a href="javascript:void(0);" class="d-inline-flex me-2">Cc</a>
                                                        <a href="javascript:void(0);" class="d-inline-flex">Bcc</a>
                                                    </div>
                                                </div>
                                                <div class="p-3">
                                                    <div class="mb-3">
                                                        <textarea rows="2" class="form-control border-0 p-0 bg-transparent"></textarea>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between border-top p-3 flex-wrap">
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-paperclip"></i></a>
                                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-photo"></i></a>
                                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-link"></i></a>
                                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-mood-smile"></i></a>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-calendar-repeat"></i></a>
                                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-trash"></i></a>
                                                        <button type="submit" class="btn btn-primary d-inline-flex align-items-center ms-2">Send <i class="ti ti-arrow-right ms-2"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <a href="javascript:void(0);" class="btn btn-dark btn-sm">View Older Messages</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Content -->


                    <!-- Compose Mail Start-->
        <div id="email-view" class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-md">
                <div class="modal-content">
                    <div class="bg-white border-0 rounded compose-view">
                        <div class="compose-header d-flex align-items-center justify-content-between bg-dark p-3">
                            <h5 class="text-white">Compose New Email</h5>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="d-inline-flex me-2 text-white fs-16"><i class="ti ti-minus"></i></a>
                                <a href="javascript:void(0);" class="d-inline-flex me-2 fs-16 text-white"><i class="ti ti-maximize"></i></a>
                                <button type="button" class="btn-close btn-close-modal custom-btn-close bg-transparent fs-16 text-white position-static" data-bs-dismiss="modal" aria-label="Close">
                                    <i class="ti ti-x"></i>
                                </button>
                            </div>
                        </div>
                        <form>
                            <div class="p-3 position-relative pb-2 border-bottom">
                                <div class="tag-with-img d-flex align-items-center">
                                    <label class="form-label me-2 mb-0">To</label>
                                    <input class="input-tags form-control border-0 h-100" id="inputBox" type="text" data-role="tagsinput" name="Label" value="Angela Thomas">
                                </div>
                                <div class="d-flex align-items-center email-cc">
                                    <a href="javascript:void(0);" class="d-inline-flex me-2">Cc</a>
                                    <a href="javascript:void(0);" class="d-inline-flex">Bcc</a>
                                </div>
                            </div>
                            <div class="p-3 border-bottom">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Subject">
                                </div>
                                <div class="mb-0">
                                    <textarea rows="7" class="form-control" placeholder="Compose Email"></textarea>
                                </div>
                            </div>
                            <div class="p-3 d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-paperclip"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-photo"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-link"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-pencil"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-mood-smile"></i></a>
                                </div>
                                <div class="d-flex align-items-center compose-footer">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-calendar-repeat"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-trash"></i></a>
                                    <button type="submit" class="btn btn-primary d-inline-flex align-items-center ms-2" data-bs-dismiss="modal">Send <i class="ti ti-arrow-right ms-2"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        <!-- Compose Mail End-->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailReplyComponent, { className: "EmailReplyComponent", filePath: "src/app/features/application/email-reply/email-reply.component.ts", lineNumber: 15 });
})();
export {
  EmailReplyComponent
};
//# sourceMappingURL=chunk-YZ2K5OZE.js.map
