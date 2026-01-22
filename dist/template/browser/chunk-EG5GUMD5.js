import {
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-5P3VLMEM.js";
import {
  LightgalleryModule
} from "./chunk-Q45D2WIA.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/application/social-feed/social-feed.component.ts
var SocialFeedComponent = class _SocialFeedComponent {
  lightGallery;
  needRefresh = false;
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  ngAfterViewInit() {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  static \u0275fac = function SocialFeedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialFeedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SocialFeedComponent, selectors: [["app-social-feed"]], decls: 782, vars: 0, consts: [[1, ""], [1, "row"], [1, "col-xl-3", "theiaStickySidebar"], [1, "card"], [1, "card-body"], [1, "bg-light", "rounded", "p-3", "mb-3"], [1, "text-center", "mb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-xl", "online", "avatar-rounded"], ["src", "assets/img/users/user-02.jpg", "alt", "Img"], [1, "mb-1"], ["href", "javascript:void(0);"], [1, "fs-12"], [1, "row", "g-2"], [1, "col-sm-6"], [1, "rounded", "bg-white", "text-center", "p-2"], [1, "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "justify-content-center", "w-100"], [1, "ti", "ti-circle-plus", "me-2"], [1, "files-list", "border-bottom", "pb-2", "mb-3"], ["href", "javscript:void(0);", 1, "d-flex", "align-items-center", "justify-content-between", "active", "fw-medium", "p-2"], [1, "ti", "ti-brand-feedly", "me-2"], [1, "badge", "bg-danger", "badge-xs", "rounded-pill"], ["href", "javscript:void(0);", 1, "d-flex", "align-items-center", "fw-medium", "p-2"], [1, "ti", "ti-mood-search", "me-2"], [1, "ti", "ti-mail-check", "me-2"], [1, "ti", "ti-list", "me-2"], [1, "ti", "ti-bookmark", "me-2"], [1, "ti", "ti-coffee", "me-2"], ["href", "javscript:void(0);", 1, "d-flex", "align-items-center", "justify-content-between", "fw-medium", "p-2"], [1, "ti", "ti-file-text", "me-2"], [1, "badge", "bg-info", "badge-xs", "rounded-pill"], [1, "ti", "ti-music", "me-2"], [1, "ti", "ti-user-share", "me-2"], [1, "mb-2"], ["href", "javscript:void(0);", 1, "fw-medium", "d-flex", "align-items-center", "justify-content-between", "text-dark", "py-1", "mb-2"], [1, "d-inline-flex", "align-items-center"], ["src", "assets/img/icons/liked-page-01.svg", "alt", "Img", 1, "me-2"], [1, "btn", "btn-icon", "btn-sm"], [1, "ti", "ti-thumb-down"], ["src", "assets/img/icons/liked-page-02.svg", "alt", "Img", 1, "me-2"], ["href", "javscript:void(0);", 1, "fw-medium", "d-flex", "align-items-center", "justify-content-between", "text-dark", "py-1"], ["src", "assets/img/icons/liked-page-03.svg", "alt", "Img", 1, "me-2"], [1, "more-menu-3"], ["src", "assets/img/icons/liked-page-04.svg", "alt", "Img", 1, "me-2"], [1, "view-all", "mt-2"], ["href", "javascript:void(0);", 1, "viewall-button-3", "fw-medium"], [1, "fa", "fa-chevron-down", "fs-10", "ms-2"], [1, "col-xl-6"], [1, "form-label", "fs-16"], [1, "position-relative"], ["rows", "3", "placeholder", "What's on your mind?", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "rounded-circle"], [1, "ti", "ti-photo", "fs-16"], [1, "ti", "ti-link", "fs-16"], [1, "ti", "ti-paperclip", "fs-16"], [1, "ti", "ti-video", "fs-16"], [1, "ti", "ti-hash", "fs-16"], [1, "ti", "ti-map-pin-heart", "fs-16"], [1, "ti", "ti-mood-smile", "fs-16"], [1, "ti", "ti-refresh", "fs-16"], [1, "ti", "ti-trash", "fs-16"], [1, "ti", "ti-world", "fs-16"], ["type", "submit", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "ms-2"], [1, "ti", "ti-circle-plus", "fs-16", "me-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "me-2"], [1, "owl-nav", "custom-nav", "nav-control"], [1, "channels-slider", "owl-carousel"], ["src", "assets/img/icons/channel-01.svg", "alt", "Img"], ["src", "assets/img/icons/channel-02.svg", "alt", "Img"], ["src", "assets/img/icons/channel-03.svg", "alt", "Img"], ["src", "assets/img/icons/channel-04.svg", "alt", "Img"], ["src", "assets/img/icons/channel-05.svg", "alt", "Img"], ["src", "assets/img/icons/channel-06.svg", "alt", "Img"], ["src", "assets/img/icons/channel-07.svg", "alt", "Img"], ["src", "assets/img/icons/channel-08.svg", "alt", "Img"], [1, "card-header", "border-0", "pb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "row-gap-3", "pb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/users/user-03.jpg", "alt", "Img"], [1, "ti", "ti-circle-check-filled", "text-success"], [1, "text-info"], [1, "ti", "ti-circle-filled", "fs-5", "mx-2"], [1, "mb-0", "text-dark"], [1, "dropdown", "ms-3", "me-1"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "dropdown-toggle", "bg-transparent", "d-flex", "align-items-center", "text-dark", "border-0", "p-0", "btn-sm"], [1, "ti", "ti-world", "pe-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "true", 1, "d-inline-flex", "align-items-center", "show"], [1, "ti", "ti-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-edit", "me-2"], [1, "ti", "ti-eye", "me-2"], [1, "ti", "ti-report", "me-2"], [1, "ti", "ti-trash-x", "me-2"], [1, "text-dark", "fw-medium"], ["href", "javascript:void(0);", 1, "text-info", "link-hover"], ["src", "assets/img/social/social-feed-01.jpg", "alt", "Img", 1, "rounded"], [1, "social-gallery-slider", "owl-carousel", "mb-3"], ["href", "assets/img/social/gallery-big-01.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/social/gallery-01.jpg", "alt", "img", 1, "rounded"], [1, "avatar", "avatar-md", "avatar-rounded"], [1, "ti", "ti-eye"], ["href", "assets/img/social/gallery-big-02.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/social/gallery-02.jpg", "alt", "img", 1, "rounded"], ["href", "assets/img/social/gallery-big-03.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/social/gallery-03.jpg", "alt", "img", 1, "rounded"], ["href", "assets/img/social/gallery-big-04.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/social/gallery-04.jpg", "alt", "img", 1, "rounded"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "me-3"], [1, "ti", "ti-heart", "me-2"], [1, "ti", "ti-message-dots", "me-2"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center"], [1, "ti", "ti-share-3", "me-2"], [1, "ti", "ti-heart-filled", "text-danger"], [1, "ti", "ti-share"], [1, "ti", "ti-message-star"], [1, "ti", "ti-bookmark-filled", "text-warning"], [1, "d-flex", "align-items-start"], ["href", "javascript:void(0);", 1, "avatar", "avatar-rounded", "me-2", "flex-shrink-0"], ["src", "assets/img/users/user-04.jpg", "alt", "Img"], ["type", "text", "placeholder", "Enter Comments", 1, "form-control"], ["src", "assets/img/users/user-05.jpg", "alt", "Img"], [1, "card", "shadow-none", "mb-3"], [1, "card-img", "card-img-hover", "rounded-0"], ["href", "javascript:void(0);", 1, "rounded-top"], ["src", "assets/img/social/social-feed-02.jpg", "alt", "Img", 1, "rounded-top"], [1, "card-body", "p-2"], [1, "mb-1", "text-truncate"], [1, "ti", "ti-heart"], [1, "ti", "ti-bookmark"], [1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/social/social-feed-03.jpg", "alt", "Img", 1, "rounded"], [1, "d-flex", "align-items-start", "mb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "Img"], [1, "bg-light", "rounded", "flex-fill", "p-2"], [1, "d-flex", "align-items-center", "mb-1"], [1, "ms-2"], [1, "d-flex", "align-items-start", "mb-3", "ms-4", "ps-2"], ["src", "assets/img/profiles/avatar-01.jpg", "alt", "Img"], ["src", "assets/img/profiles/avatar-04.jpg", "alt", "Img"], [1, "more-menu"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "Img"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "Img"], [1, "view-all", "text-center", "mb-3"], ["href", "javascript:void(0);", 1, "viewall-button", "text-primary", "fw-medium"], [1, "avatar", "avatar-rounded", "me-2", "flex-shrink-0"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "border", "d-flex", "p-2", "rounded", "mb-3"], ["role", "presentation", 1, "nav-item", "flex-fill"], ["data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-selected", "true", 1, "nav-link", "btn", "active", "w-100"], ["data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link", "btn", "w-100"], [1, "tab-content"], ["id", "pills-home", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "fs-14", "fw-medium", "mb-1"], [1, "ti", "ti-circle-check-filled", "text-success", "ms-1"], [1, "fs-12", "d-block"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-icon"], [1, "ti", "ti-user-x"], ["src", "assets/img/users/user-01.jpg", "alt", "Img"], [1, "d-inline-flex", "align-items-center", "fw-medium", "mb-1"], ["src", "assets/img/users/user-09.jpg", "alt", "Img"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "w-100", "border"], [1, "ti", "ti-arrow-right", "ms-2"], ["id", "pills-profile", "role", "tabpanel", 1, "tab-pane", "fade"], ["src", "assets/img/profiles/avatar-11.jpg", "alt", "Img"], [1, "d-inline-flex", "fs-14", "align-items-center", "fw-medium", "mb-1"], ["src", "assets/img/users/user-10.jpg", "alt", "Img"], ["src", "assets/img/users/user-08.jpg", "alt", "Img"], ["src", "assets/img/users/user-07.jpg", "alt", "Img"], ["src", "assets/img/users/user-06.jpg", "alt", "Img"], [1, "bg-light", "rounded", "p-2", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center"], ["src", "assets/img/icons/feeds-01.svg", "alt", "Img", 1, "me-2"], [1, "fs-12", "fw-medium"], ["src", "assets/img/icons/feeds-02.svg", "alt", "Img", 1, "me-2"], ["src", "assets/img/icons/feeds-03.svg", "alt", "Img", 1, "me-2"], [1, "bg-light", "rounded", "p-2"], ["src", "assets/img/icons/feeds-04.svg", "alt", "Img", 1, "me-2"], [1, "mt-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-1"], ["href", "javascript:void(0);", 1, "text-info", "d-inline-flex", "link-hover"], [1, "card-img", "card-img-hover", "mb-3"], ["href", "javascript:void(0);", 1, "rounded"], ["src", "assets/img/social/social-feed-04.jpg", "alt", "Img", 1, "rounded"], [1, "text-center", "fs-14"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-center", "template-more-links", "gap-3"], ["href", "javascript:void(0);", 1, "d-inline-flex"]], template: function SocialFeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
      \u0275\u0275domElement(8, "img", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "h6", 9)(10, "a", 10);
      \u0275\u0275text(11, "James Hong ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "p", 11);
      \u0275\u0275text(13, "@James Hong324");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "h6", 9);
      \u0275\u0275text(18, "89K");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "p", 11);
      \u0275\u0275text(20, "Followers");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(21, "div", 13)(22, "div", 14)(23, "h6", 9);
      \u0275\u0275text(24, "45");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "p", 11);
      \u0275\u0275text(26, "Follows");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(27, "div", 15)(28, "a", 16);
      \u0275\u0275domElement(29, "i", 17);
      \u0275\u0275text(30, "Create Post");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "div", 18)(32, "a", 19)(33, "span");
      \u0275\u0275domElement(34, "i", 20);
      \u0275\u0275text(35, "All Feeds");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "span", 21);
      \u0275\u0275text(37, "56");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "a", 22);
      \u0275\u0275domElement(39, "i", 23);
      \u0275\u0275text(40, "Explore");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "a", 22);
      \u0275\u0275domElement(42, "i", 24);
      \u0275\u0275text(43, "Messages");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "a", 22);
      \u0275\u0275domElement(45, "i", 25);
      \u0275\u0275text(46, "Lists");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "a", 22);
      \u0275\u0275domElement(48, "i", 26);
      \u0275\u0275text(49, "Bookmark");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "a", 22);
      \u0275\u0275domElement(51, "i", 27);
      \u0275\u0275text(52, "Marketplace");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "a", 28)(54, "span");
      \u0275\u0275domElement(55, "i", 29);
      \u0275\u0275text(56, "Files");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "span", 30);
      \u0275\u0275text(58, "14");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(59, "a", 22);
      \u0275\u0275domElement(60, "i", 31);
      \u0275\u0275text(61, "Media");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(62, "a", 22);
      \u0275\u0275domElement(63, "i", 32);
      \u0275\u0275text(64, "Profile");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(65, "div")(66, "div", 33)(67, "h6");
      \u0275\u0275text(68, "Pages You Liked");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(69, "div")(70, "a", 34)(71, "span", 35);
      \u0275\u0275domElement(72, "img", 36);
      \u0275\u0275text(73, "Dribble ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "span", 37);
      \u0275\u0275domElement(75, "i", 38);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(76, "a", 34)(77, "span", 35);
      \u0275\u0275domElement(78, "img", 39);
      \u0275\u0275text(79, "UI/UX Designs ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(80, "span", 37);
      \u0275\u0275domElement(81, "i", 38);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(82, "a", 40)(83, "span", 35);
      \u0275\u0275domElement(84, "img", 41);
      \u0275\u0275text(85, "Figma Update ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "span", 37);
      \u0275\u0275domElement(87, "i", 38);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(88, "div")(89, "div", 42)(90, "a", 34)(91, "span", 35);
      \u0275\u0275domElement(92, "img", 43);
      \u0275\u0275text(93, "I Am Techie ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(94, "span", 37);
      \u0275\u0275domElement(95, "i", 38);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(96, "div", 44)(97, "a", 45)(98, "span");
      \u0275\u0275text(99, "Show More");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(100, "i", 46);
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(101, "div", 47)(102, "div")(103, "div", 3)(104, "div", 4)(105, "form")(106, "div", 15)(107, "label", 48);
      \u0275\u0275text(108, "Create Post");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(109, "div", 49);
      \u0275\u0275domElement(110, "textarea", 50);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(111, "div", 51)(112, "div", 52)(113, "a", 53);
      \u0275\u0275domElement(114, "i", 54);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(115, "a", 53);
      \u0275\u0275domElement(116, "i", 55);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(117, "a", 53);
      \u0275\u0275domElement(118, "i", 56);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(119, "a", 53);
      \u0275\u0275domElement(120, "i", 57);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(121, "a", 53);
      \u0275\u0275domElement(122, "i", 58);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(123, "a", 53);
      \u0275\u0275domElement(124, "i", 59);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "a", 53);
      \u0275\u0275domElement(126, "i", 60);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(127, "div", 52)(128, "a", 53);
      \u0275\u0275domElement(129, "i", 61);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(130, "a", 53);
      \u0275\u0275domElement(131, "i", 62);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(132, "a", 53);
      \u0275\u0275domElement(133, "i", 63);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(134, "button", 64);
      \u0275\u0275domElement(135, "i", 65);
      \u0275\u0275text(136, "Share Post");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(137, "div", 3)(138, "div", 4)(139, "div", 66)(140, "h6", 67);
      \u0275\u0275text(141, "Popular Channels");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(142, "div", 68);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(143, "div", 69)(144, "a", 10);
      \u0275\u0275domElement(145, "img", 70);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(146, "a", 10);
      \u0275\u0275domElement(147, "img", 71);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(148, "a", 10);
      \u0275\u0275domElement(149, "img", 72);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(150, "a", 10);
      \u0275\u0275domElement(151, "img", 73);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(152, "a", 10);
      \u0275\u0275domElement(153, "img", 74);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(154, "a", 10);
      \u0275\u0275domElement(155, "img", 75);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(156, "a", 10);
      \u0275\u0275domElement(157, "img", 76);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(158, "a", 10);
      \u0275\u0275domElement(159, "img", 77);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(160, "div", 3)(161, "div", 78)(162, "div", 79)(163, "div", 52)(164, "a", 80);
      \u0275\u0275domElement(165, "img", 81);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(166, "div")(167, "h6", 9)(168, "a", 10);
      \u0275\u0275text(169, "Richard Smith ");
      \u0275\u0275domElement(170, "i", 82);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(171, "p", 52)(172, "span", 83);
      \u0275\u0275text(173, "@richard442");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(174, "i", 84);
      \u0275\u0275text(175, " United Kingdom ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(176, "div", 52)(177, "p", 85);
      \u0275\u0275text(178, "About 1 hr ago");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(179, "div", 86)(180, "button", 87);
      \u0275\u0275domElement(181, "i", 88);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(182, "ul", 89)(183, "li")(184, "a", 90);
      \u0275\u0275text(185, "Private");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(186, "li")(187, "a", 90);
      \u0275\u0275text(188, "Public");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(189, "div", 91)(190, "a", 92);
      \u0275\u0275domElement(191, "i", 93);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(192, "ul", 94)(193, "li")(194, "a", 95);
      \u0275\u0275domElement(195, "i", 96);
      \u0275\u0275text(196, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(197, "li")(198, "a", 95);
      \u0275\u0275domElement(199, "i", 97);
      \u0275\u0275text(200, "Hide Post");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(201, "li")(202, "a", 95);
      \u0275\u0275domElement(203, "i", 98);
      \u0275\u0275text(204, "Report");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(205, "li")(206, "a", 95);
      \u0275\u0275domElement(207, "i", 99);
      \u0275\u0275text(208, "Delete");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(209, "div", 4)(210, "div", 33)(211, "p", 100);
      \u0275\u0275text(212, '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. ');
      \u0275\u0275domElementStart(213, "a", 101);
      \u0275\u0275text(214, "#MotivationMonday");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(215, "a", 101);
      \u0275\u0275text(216, "#Inspiration");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(217, ' \u{1F31F}" ');
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(218, "div", 33);
      \u0275\u0275domElement(219, "img", 102);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(220, "div", 103)(221, "a", 104);
      \u0275\u0275domElement(222, "img", 105);
      \u0275\u0275domElementStart(223, "span", 106);
      \u0275\u0275domElement(224, "i", 107);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(225, "a", 108);
      \u0275\u0275domElement(226, "img", 109);
      \u0275\u0275domElementStart(227, "span", 106);
      \u0275\u0275domElement(228, "i", 107);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(229, "a", 110);
      \u0275\u0275domElement(230, "img", 111);
      \u0275\u0275domElementStart(231, "span", 106);
      \u0275\u0275domElement(232, "i", 107);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(233, "a", 112);
      \u0275\u0275domElement(234, "img", 113);
      \u0275\u0275domElementStart(235, "span", 106);
      \u0275\u0275domElement(236, "i", 107);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(237, "a", 104);
      \u0275\u0275domElement(238, "img", 105);
      \u0275\u0275domElementStart(239, "span", 106);
      \u0275\u0275domElement(240, "i", 107);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(241, "div", 114)(242, "div", 115)(243, "a", 116);
      \u0275\u0275domElement(244, "i", 117);
      \u0275\u0275text(245, "340K Likes ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(246, "a", 116);
      \u0275\u0275domElement(247, "i", 118);
      \u0275\u0275text(248, "45 Comments ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(249, "a", 119);
      \u0275\u0275domElement(250, "i", 120);
      \u0275\u0275text(251, "28 Share ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(252, "div", 52)(253, "a", 53);
      \u0275\u0275domElement(254, "i", 121);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(255, "a", 53);
      \u0275\u0275domElement(256, "i", 122);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(257, "a", 53);
      \u0275\u0275domElement(258, "i", 123);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(259, "a", 53);
      \u0275\u0275domElement(260, "i", 124);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(261, "div", 125)(262, "a", 126);
      \u0275\u0275domElement(263, "img", 127);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(264, "input", 128);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(265, "div", 3)(266, "div", 78)(267, "div", 79)(268, "div", 52)(269, "a", 80);
      \u0275\u0275domElement(270, "img", 129);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(271, "div")(272, "h6", 9)(273, "a", 10);
      \u0275\u0275text(274, "Jason Heier ");
      \u0275\u0275domElement(275, "i", 82);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(276, "p", 52)(277, "span", 83);
      \u0275\u0275text(278, "@jason118");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(279, "i", 84);
      \u0275\u0275text(280, " United Kingdom ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(281, "div", 52)(282, "p", 85);
      \u0275\u0275text(283, "About 1 hr ago");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(284, "div", 86)(285, "button", 87);
      \u0275\u0275domElement(286, "i", 88);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(287, "ul", 89)(288, "li")(289, "a", 90);
      \u0275\u0275text(290, "Private");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(291, "li")(292, "a", 90);
      \u0275\u0275text(293, "Public");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(294, "div", 91)(295, "a", 92);
      \u0275\u0275domElement(296, "i", 93);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(297, "ul", 94)(298, "li")(299, "a", 95);
      \u0275\u0275domElement(300, "i", 96);
      \u0275\u0275text(301, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(302, "li")(303, "a", 95);
      \u0275\u0275domElement(304, "i", 97);
      \u0275\u0275text(305, "Hide Post");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(306, "li")(307, "a", 95);
      \u0275\u0275domElement(308, "i", 98);
      \u0275\u0275text(309, "Report");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(310, "li")(311, "a", 95);
      \u0275\u0275domElement(312, "i", 99);
      \u0275\u0275text(313, "Delete");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(314, "div", 4)(315, "div", 33)(316, "p", 100);
      \u0275\u0275text(317, " Drinking water boosts skin health and beauty. Stay hydrated! ");
      \u0275\u0275domElementStart(318, "a", 101);
      \u0275\u0275text(319, "#HealthTips ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(320, "a", 101);
      \u0275\u0275text(321, " #Wellness");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(322, " \u{1F4A7} ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(323, "div", 130)(324, "div", 131)(325, "a", 132);
      \u0275\u0275domElement(326, "img", 133);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(327, "div", 134)(328, "h6", 135)(329, "a", 10);
      \u0275\u0275text(330, "Drinking water boosts skin health and beauty. Stay hydrated!\u{1F4A7}");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(331, "a", 10);
      \u0275\u0275text(332, "Health.com");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(333, "div", 51)(334, "div", 115)(335, "a", 116);
      \u0275\u0275domElement(336, "i", 117);
      \u0275\u0275text(337, "340K Likes ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(338, "a", 116);
      \u0275\u0275domElement(339, "i", 118);
      \u0275\u0275text(340, "45 Comments ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(341, "a", 119);
      \u0275\u0275domElement(342, "i", 120);
      \u0275\u0275text(343, "28 Share ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(344, "div", 52)(345, "a", 53);
      \u0275\u0275domElement(346, "i", 136);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(347, "a", 53);
      \u0275\u0275domElement(348, "i", 122);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(349, "a", 53);
      \u0275\u0275domElement(350, "i", 123);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(351, "a", 53);
      \u0275\u0275domElement(352, "i", 137);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(353, "div", 3)(354, "div", 78)(355, "div", 79)(356, "div", 52)(357, "span", 138);
      \u0275\u0275domElement(358, "img", 127);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(359, "div")(360, "h6", 9)(361, "a", 10);
      \u0275\u0275text(362, "Sophie Headrick ");
      \u0275\u0275domElement(363, "i", 82);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(364, "p", 52)(365, "span", 83);
      \u0275\u0275text(366, "@sophie241");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(367, "i", 84);
      \u0275\u0275text(368, " United Kingdom ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(369, "div", 52)(370, "p", 85);
      \u0275\u0275text(371, "About 1 hr ago");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(372, "div", 86)(373, "button", 87);
      \u0275\u0275domElement(374, "i", 88);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(375, "ul", 89)(376, "li")(377, "a", 90);
      \u0275\u0275text(378, "Private");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(379, "li")(380, "a", 90);
      \u0275\u0275text(381, "Public");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(382, "div", 91)(383, "a", 92);
      \u0275\u0275domElement(384, "i", 93);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(385, "ul", 94)(386, "li")(387, "a", 95);
      \u0275\u0275domElement(388, "i", 96);
      \u0275\u0275text(389, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(390, "li")(391, "a", 95);
      \u0275\u0275domElement(392, "i", 97);
      \u0275\u0275text(393, "Hide Post");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(394, "li")(395, "a", 95);
      \u0275\u0275domElement(396, "i", 98);
      \u0275\u0275text(397, "Report");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(398, "li")(399, "a", 95);
      \u0275\u0275domElement(400, "i", 99);
      \u0275\u0275text(401, "Delete");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(402, "div", 4)(403, "div", 33)(404, "p", 100);
      \u0275\u0275text(405, " Excited to announce the launch of our new product! Get yours now and enjoy a special discount. ");
      \u0275\u0275domElementStart(406, "a", 101);
      \u0275\u0275text(407, "#NewRelease ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(408, "a", 101);
      \u0275\u0275text(409, " #Innovation");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(410, " \u{1F389} ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(411, "div", 33);
      \u0275\u0275domElement(412, "img", 139);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(413, "div", 114)(414, "div", 115)(415, "a", 116);
      \u0275\u0275domElement(416, "i", 117);
      \u0275\u0275text(417, "340K Likes ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(418, "a", 116);
      \u0275\u0275domElement(419, "i", 118);
      \u0275\u0275text(420, "45 Comments ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(421, "a", 119);
      \u0275\u0275domElement(422, "i", 120);
      \u0275\u0275text(423, "28 Share ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(424, "div", 52)(425, "a", 53);
      \u0275\u0275domElement(426, "i", 121);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(427, "a", 53);
      \u0275\u0275domElement(428, "i", 122);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(429, "a", 53);
      \u0275\u0275domElement(430, "i", 123);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(431, "a", 53);
      \u0275\u0275domElement(432, "i", 124);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(433, "div", 140)(434, "a", 141);
      \u0275\u0275domElement(435, "img", 142);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(436, "div", 143)(437, "div", 144)(438, "h6")(439, "a", 10);
      \u0275\u0275text(440, "Frank Hoffman");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(441, "span", 145);
      \u0275\u0275text(442, "12:45 PM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(443, "p", 9);
      \u0275\u0275text(444, "Congratulations on the launch! I've been eagerly waiting for this product, and the special discount makes it even more exciting. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(445, "a", 119);
      \u0275\u0275domElement(446, "i", 120);
      \u0275\u0275text(447, "Reply");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(448, "div", 146)(449, "a", 141);
      \u0275\u0275domElement(450, "img", 147);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(451, "div", 143)(452, "div", 144)(453, "h6")(454, "a", 10);
      \u0275\u0275text(455, "Sophie Headrick");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(456, "span", 145);
      \u0275\u0275text(457, "12:45 PM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(458, "p", 9);
      \u0275\u0275text(459, " Thank you so much for your enthusiasm and support! ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(460, "a", 119);
      \u0275\u0275domElement(461, "i", 120);
      \u0275\u0275text(462, "Reply");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(463, "div", 140)(464, "a", 141);
      \u0275\u0275domElement(465, "img", 148);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(466, "div", 143)(467, "div", 144)(468, "h6")(469, "a", 10);
      \u0275\u0275text(470, "Samuel Butler");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(471, "span", 145);
      \u0275\u0275text(472, "12:40 PM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(473, "p", 9);
      \u0275\u0275text(474, " So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(475, "a", 119);
      \u0275\u0275domElement(476, "i", 120);
      \u0275\u0275text(477, "Reply");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(478, "div")(479, "div", 149)(480, "div", 140)(481, "a", 141);
      \u0275\u0275domElement(482, "img", 150);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(483, "div", 143)(484, "div", 144)(485, "h6")(486, "a", 10);
      \u0275\u0275text(487, "Samuel Butler");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(488, "span", 145);
      \u0275\u0275text(489, "12:40 PM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(490, "p", 9);
      \u0275\u0275text(491, " So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(492, "a", 119);
      \u0275\u0275domElement(493, "i", 120);
      \u0275\u0275text(494, "Reply");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(495, "div", 140)(496, "a", 141);
      \u0275\u0275domElement(497, "img", 151);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(498, "div", 143)(499, "div", 144)(500, "h6")(501, "a", 10);
      \u0275\u0275text(502, "Samuel Butler");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(503, "span", 145);
      \u0275\u0275text(504, "12:40 PM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(505, "p", 9);
      \u0275\u0275text(506, " So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(507, "a", 119);
      \u0275\u0275domElement(508, "i", 120);
      \u0275\u0275text(509, "Reply");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(510, "div", 152)(511, "a", 153)(512, "span");
      \u0275\u0275text(513, "View All 200 Comments");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(514, "i", 46);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(515, "div", 125)(516, "span", 154);
      \u0275\u0275domElement(517, "img", 129);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(518, "input", 128);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(519, "div", 2)(520, "div", 3)(521, "div", 4)(522, "h6", 15);
      \u0275\u0275text(523, "Peoples");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(524, "ul", 155)(525, "li", 156)(526, "button", 157);
      \u0275\u0275text(527, " General ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(528, "li", 156)(529, "button", 158);
      \u0275\u0275text(530, " Primary ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(531, "div", 159)(532, "div", 160)(533, "div")(534, "div", 161)(535, "div", 52)(536, "a", 141);
      \u0275\u0275domElement(537, "img", 147);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(538, "div")(539, "h6", 162)(540, "a", 10);
      \u0275\u0275text(541, "Anthony Lewis");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(542, "i", 163);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(543, "span", 164);
      \u0275\u0275text(544, "United States");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(545, "a", 165);
      \u0275\u0275domElement(546, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(547, "div", 161)(548, "div", 52)(549, "a", 141);
      \u0275\u0275domElement(550, "img", 167);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(551, "div")(552, "h6", 162)(553, "a", 10);
      \u0275\u0275text(554, "Harvey Smith");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(555, "span", 164);
      \u0275\u0275text(556, "Ukrain");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(557, "a", 165);
      \u0275\u0275domElement(558, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(559, "div", 161)(560, "div", 52)(561, "a", 141);
      \u0275\u0275domElement(562, "img", 167);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(563, "div")(564, "h6", 168)(565, "a", 10);
      \u0275\u0275text(566, "Stephan Peralt");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(567, "span", 164);
      \u0275\u0275text(568, "Isreal");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(569, "a", 165);
      \u0275\u0275domElement(570, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(571, "div", 161)(572, "div", 52)(573, "a", 141);
      \u0275\u0275domElement(574, "img", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(575, "div")(576, "h6", 162)(577, "a", 10);
      \u0275\u0275text(578, "Doglas Martini");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(579, "span", 164);
      \u0275\u0275text(580, "Belgium");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(581, "a", 165);
      \u0275\u0275domElement(582, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(583, "div", 161)(584, "div", 52)(585, "a", 141);
      \u0275\u0275domElement(586, "img", 169);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(587, "div")(588, "h6", 162)(589, "a", 10);
      \u0275\u0275text(590, "Brian Villalobos");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(591, "i", 163);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(592, "span", 164);
      \u0275\u0275text(593, "United Kingdom");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(594, "a", 165);
      \u0275\u0275domElement(595, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(596, "div", 161)(597, "div", 52)(598, "a", 141);
      \u0275\u0275domElement(599, "img", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(600, "div")(601, "h6", 162)(602, "a", 10);
      \u0275\u0275text(603, "Linda Ray");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(604, "span", 164);
      \u0275\u0275text(605, "Argentina");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(606, "a", 165);
      \u0275\u0275domElement(607, "i", 166);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(608, "div")(609, "a", 170);
      \u0275\u0275text(610, "View All ");
      \u0275\u0275domElement(611, "i", 171);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(612, "div", 172)(613, "div")(614, "div", 161)(615, "div", 52)(616, "a", 141);
      \u0275\u0275domElement(617, "img", 173);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(618, "div")(619, "h6", 174)(620, "a", 10);
      \u0275\u0275text(621, "Anthony Lewis");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(622, "i", 163);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(623, "span", 164);
      \u0275\u0275text(624, "United States");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(625, "a", 165);
      \u0275\u0275domElement(626, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(627, "div", 161)(628, "div", 52)(629, "a", 141);
      \u0275\u0275domElement(630, "img", 175);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(631, "div")(632, "h6", 162)(633, "a", 10);
      \u0275\u0275text(634, "Harvey Smith");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(635, "span", 164);
      \u0275\u0275text(636, "Ukrain");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(637, "a", 165);
      \u0275\u0275domElement(638, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(639, "div", 161)(640, "div", 52)(641, "a", 141);
      \u0275\u0275domElement(642, "img", 169);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(643, "div")(644, "h6", 162)(645, "a", 10);
      \u0275\u0275text(646, "Stephan Peralt");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(647, "span", 164);
      \u0275\u0275text(648, "Isreal");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(649, "a", 165);
      \u0275\u0275domElement(650, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(651, "div", 161)(652, "div", 52)(653, "a", 141);
      \u0275\u0275domElement(654, "img", 176);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(655, "div")(656, "h6", 174)(657, "a", 10);
      \u0275\u0275text(658, "Doglas Martini");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(659, "span", 164);
      \u0275\u0275text(660, "Belgium");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(661, "a", 165);
      \u0275\u0275domElement(662, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(663, "div", 161)(664, "div", 52)(665, "a", 141);
      \u0275\u0275domElement(666, "img", 177);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(667, "div")(668, "h6", 174)(669, "a", 10);
      \u0275\u0275text(670, "Brian Villalobos");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(671, "i", 163);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(672, "span", 164);
      \u0275\u0275text(673, "United Kingdom");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(674, "a", 165);
      \u0275\u0275domElement(675, "i", 166);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(676, "div", 161)(677, "div", 52)(678, "a", 141);
      \u0275\u0275domElement(679, "img", 178);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(680, "div")(681, "h6", 162)(682, "a", 10);
      \u0275\u0275text(683, "Linda Ray");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(684, "span", 164);
      \u0275\u0275text(685, "Argentina");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(686, "a", 165);
      \u0275\u0275domElement(687, "i", 166);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(688, "div")(689, "a", 170);
      \u0275\u0275text(690, "View All ");
      \u0275\u0275domElement(691, "i", 171);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(692, "div", 3)(693, "div", 4)(694, "h6", 15);
      \u0275\u0275text(695, "Saved Feeds");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(696, "div", 179)(697, "div", 180)(698, "a", 181)(699, "span");
      \u0275\u0275domElement(700, "img", 182);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(701, "p", 183);
      \u0275\u0275text(702, "World Health");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(703, "a", 10);
      \u0275\u0275domElement(704, "i", 124);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(705, "p", 100)(706, "a", 10);
      \u0275\u0275text(707, "Retail investor party continues even as");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(708, "div", 179)(709, "div", 180)(710, "a", 181)(711, "span");
      \u0275\u0275domElement(712, "img", 184);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(713, "p", 183);
      \u0275\u0275text(714, "T3 Tech");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(715, "a", 10);
      \u0275\u0275domElement(716, "i", 124);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(717, "p", 100)(718, "a", 10);
      \u0275\u0275text(719, "Ipad Air (2020) vs Samsung Galaxy Tab");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(720, "div", 179)(721, "div", 180)(722, "a", 181)(723, "span");
      \u0275\u0275domElement(724, "img", 185);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(725, "p", 183);
      \u0275\u0275text(726, "Fstoppers");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(727, "a", 10);
      \u0275\u0275domElement(728, "i", 124);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(729, "p", 100)(730, "a", 10);
      \u0275\u0275text(731, "Beyond capital gains tax! Top 50 stock");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(732, "div", 186)(733, "div", 180)(734, "a", 181)(735, "span");
      \u0275\u0275domElement(736, "img", 187);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(737, "p", 183);
      \u0275\u0275text(738, "Evernote");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(739, "a", 10);
      \u0275\u0275domElement(740, "i", 124);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(741, "p", 100)(742, "a", 10);
      \u0275\u0275text(743, "Sony Just Destroyed the Competition");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(744, "div", 188)(745, "a", 170);
      \u0275\u0275text(746, "View All ");
      \u0275\u0275domElement(747, "i", 171);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(748, "div", 3)(749, "div", 4)(750, "h6", 15);
      \u0275\u0275text(751, "Trending Hastags");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(752, "div", 189)(753, "a", 190);
      \u0275\u0275text(754, "#HealthTips");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(755, "a", 190);
      \u0275\u0275text(756, "#Wellness");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(757, "a", 190);
      \u0275\u0275text(758, "#Motivation");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(759, "a", 190);
      \u0275\u0275text(760, "#Inspiration ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(761, "div", 3)(762, "div", 4)(763, "div", 191)(764, "a", 192);
      \u0275\u0275domElement(765, "img", 193);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(766, "h6", 194)(767, "a", 10);
      \u0275\u0275text(768, "Enjoy Unlimited Access on a small price monthly.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(769, "div", 188)(770, "a", 170);
      \u0275\u0275text(771, "Upgrade Now ");
      \u0275\u0275domElement(772, "i", 171);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(773, "div", 195)(774, "a", 196);
      \u0275\u0275text(775, "About");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(776, "a", 196);
      \u0275\u0275text(777, "Privacy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(778, "a", 196);
      \u0275\u0275text(779, "Terms");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(780, "a", 196);
      \u0275\u0275text(781, "Help");
      \u0275\u0275domElementEnd()()()()();
    }
  }, dependencies: [CommonModule, LightgalleryModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SocialFeedComponent, [{
    type: Component,
    args: [{ selector: "app-social-feed", imports: [CommonModule, LightgalleryModule], template: `<div class="">

    <!-- start row -->
    <div class="row">
        <div class="col-xl-3 theiaStickySidebar">
            <div class="card">
                <div class="card-body">
                    <div class="bg-light rounded p-3 mb-3">
                        <div class="text-center mb-3">
                            <a href="javascript:void(0);" class="avatar avatar-xl online avatar-rounded">
                                <img src="assets/img/users/user-02.jpg" alt="Img">
                            </a>
                            <h6 class="mb-1"><a href="javascript:void(0);">James Hong </a></h6>
                            <p class="fs-12">@James Hong324</p>
                        </div>
                        <div class="row g-2">
                            <div class="col-sm-6">
                                <div class="rounded bg-white text-center p-2">
                                    <h6 class="mb-1">89K</h6>
                                    <p class="fs-12">Followers</p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="rounded bg-white text-center p-2">
                                    <h6 class="mb-1">45</h6>
                                    <p class="fs-12">Follows</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center justify-content-center w-100"><i class="ti ti-circle-plus me-2"></i>Create Post</a>
                    </div>
                    <div class="files-list border-bottom pb-2 mb-3">
                        <a href="javscript:void(0);" class="d-flex align-items-center justify-content-between active fw-medium p-2">
                            <span><i class="ti ti-brand-feedly me-2"></i>All Feeds</span>
                            <span class="badge bg-danger badge-xs rounded-pill">56</span>
                        </a>
                        <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-mood-search me-2"></i>Explore</a>
                        <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-mail-check me-2"></i>Messages</a>
                        <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-list me-2"></i>Lists</a>
                        <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-bookmark me-2"></i>Bookmark</a>
                        <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-coffee me-2"></i>Marketplace</a>
                        <a href="javscript:void(0);" class="d-flex align-items-center justify-content-between fw-medium p-2">
                            <span><i class="ti ti-file-text me-2"></i>Files</span>
                            <span class="badge bg-info badge-xs rounded-pill">14</span>
                        </a>
                        <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-music me-2"></i>Media</a>
                        <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-user-share me-2"></i>Profile</a>
                    </div>
                    <div>
                        <div class="mb-2">
                            <h6>Pages You Liked</h6>
                        </div>
                        <div>
                            <a href="javscript:void(0);" class="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2">
                                <span class="d-inline-flex align-items-center">
                                    <img src="assets/img/icons/liked-page-01.svg" class="me-2" alt="Img">Dribble
                                </span>
                                <span class="btn btn-icon btn-sm"><i class="ti ti-thumb-down"></i></span>
                            </a>
                            <a href="javscript:void(0);" class="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2">
                                <span class="d-inline-flex align-items-center">
                                    <img src="assets/img/icons/liked-page-02.svg" class="me-2" alt="Img">UI/UX Designs
                                </span>
                                <span class="btn btn-icon btn-sm"><i class="ti ti-thumb-down"></i></span>
                            </a>
                            <a href="javscript:void(0);" class="fw-medium d-flex align-items-center justify-content-between text-dark py-1">
                                <span class="d-inline-flex align-items-center">
                                    <img src="assets/img/icons/liked-page-03.svg" class="me-2" alt="Img">Figma Update
                                </span>
                                <span class="btn btn-icon btn-sm"><i class="ti ti-thumb-down"></i></span>
                            </a>
                            <div>
                                <div class="more-menu-3">
                                    <a href="javscript:void(0);" class="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2">
                                        <span class="d-inline-flex align-items-center">
                                            <img src="assets/img/icons/liked-page-04.svg" class="me-2" alt="Img">I Am Techie
                                        </span>
                                        <span class="btn btn-icon btn-sm"><i class="ti ti-thumb-down"></i></span>
                                    </a>
                                </div>
                                <div class="view-all mt-2">
                                    <a href="javascript:void(0);" class="viewall-button-3 fw-medium"><span>Show More</span><i class="fa fa-chevron-down fs-10 ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div><!-- end col -->
        <div class="col-xl-6">
            <div>
                <div class="card">
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label fs-16">Create Post</label>
                                <div class="position-relative">
                                    <textarea class="form-control" rows="3" placeholder="What's on your mind?"></textarea>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-photo fs-16"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-link fs-16"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-paperclip fs-16"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-video fs-16"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-hash fs-16"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-map-pin-heart fs-16"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-mood-smile fs-16"></i></a>
                                </div>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-refresh fs-16"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-trash fs-16"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-world fs-16"></i></a>
                                    <button type="submit" class="btn btn-primary d-inline-flex align-items-center ms-2"><i class="ti ti-circle-plus fs-16 me-2"></i>Share Post</button>
                                </div>
                            </div>
                        </form>
                    </div><!-- end card body -->
                </div><!-- end card -->
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <h6 class="me-2">Popular Channels</h6>
                            <div class="owl-nav custom-nav nav-control"></div>
                        </div>
                        <div class="channels-slider owl-carousel">
                            <a href="javascript:void(0);">
                                <img src="assets/img/icons/channel-01.svg" alt="Img">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="assets/img/icons/channel-02.svg" alt="Img">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="assets/img/icons/channel-03.svg" alt="Img">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="assets/img/icons/channel-04.svg" alt="Img">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="assets/img/icons/channel-05.svg" alt="Img">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="assets/img/icons/channel-06.svg" alt="Img">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="assets/img/icons/channel-07.svg" alt="Img">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="assets/img/icons/channel-08.svg" alt="Img">
                            </a>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
                <div class="card">
                    <div class="card-header border-0 pb-0">
                        <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="assets/img/users/user-03.jpg" alt="Img"></a>
                                <div>
                                    <h6 class="mb-1"><a href="javascript:void(0);">Richard Smith <i class="ti ti-circle-check-filled text-success"></i></a></h6>
                                    <p class="d-flex align-items-center">
                                        <span class="text-info">@richard442</span>
                                        <i class="ti ti-circle-filled fs-5 mx-2"></i> United Kingdom
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <p class="mb-0 text-dark">About 1 hr ago</p>
                                <div class="dropdown ms-3 me-1">
                                    <button class="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="ti ti-world pe-1"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);">Private</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);">Public</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="d-inline-flex align-items-center show" data-bs-toggle="dropdown" aria-expanded="true">
                                        <i class="ti ti-dots-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end p-3">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>Hide Post</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-report me-2"></i>Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                            <p class="text-dark fw-medium">"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.
                                <a href="javascript:void(0);" class="text-info link-hover">#MotivationMonday</a>
                                <a href="javascript:void(0);" class="text-info link-hover">#Inspiration</a> \u{1F31F}"
                            </p>
                        </div>
                        <div class="mb-2">
                            <img src="assets/img/social/social-feed-01.jpg" class="rounded" alt="Img">
                        </div>
                        <div class="social-gallery-slider owl-carousel mb-3">
                            <a href="assets/img/social/gallery-big-01.jpg" data-fancybox="gallery" class="gallery-item">
                                <img src="assets/img/social/gallery-01.jpg" class="rounded" alt="img">
                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                            </a>
                            <a href="assets/img/social/gallery-big-02.jpg" data-fancybox="gallery" class="gallery-item">
                                <img src="assets/img/social/gallery-02.jpg" class="rounded" alt="img">
                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                            </a>
                            <a href="assets/img/social/gallery-big-03.jpg" data-fancybox="gallery" class="gallery-item">
                                <img src="assets/img/social/gallery-03.jpg" class="rounded" alt="img">
                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                            </a>
                            <a href="assets/img/social/gallery-big-04.jpg" data-fancybox="gallery" class="gallery-item">
                                <img src="assets/img/social/gallery-04.jpg" class="rounded" alt="img">
                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                            </a>
                            <a href="assets/img/social/gallery-big-01.jpg" data-fancybox="gallery" class="gallery-item">
                                <img src="assets/img/social/gallery-01.jpg" class="rounded" alt="img">
                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                            </a>
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
                                    <i class="ti ti-heart me-2"></i>340K Likes
                                </a>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
                                    <i class="ti ti-message-dots me-2"></i>45 Comments
                                </a>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center">
                                    <i class="ti ti-share-3 me-2"></i>28 Share
                                </a>
                            </div>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-heart-filled text-danger"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-share"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-message-star"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-bookmark-filled text-warning"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-start">
                            <a href="javascript:void(0);" class="avatar avatar-rounded me-2 flex-shrink-0"><img src="assets/img/users/user-04.jpg" alt="Img"></a>
                            <input type="text" class="form-control" placeholder="Enter Comments">
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
                <div class="card">
                    <div class="card-header border-0 pb-0">
                        <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="assets/img/users/user-05.jpg" alt="Img"></a>
                                <div>
                                    <h6 class="mb-1"><a href="javascript:void(0);">Jason Heier <i class="ti ti-circle-check-filled text-success"></i></a></h6>
                                    <p class="d-flex align-items-center">
                                        <span class="text-info">@jason118</span>
                                        <i class="ti ti-circle-filled fs-5 mx-2"></i> United Kingdom
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <p class="mb-0 text-dark">About 1 hr ago</p>
                                <div class="dropdown ms-3 me-1">
                                    <button class="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="ti ti-world pe-1"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);">Private</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);">Public</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="d-inline-flex align-items-center show" data-bs-toggle="dropdown" aria-expanded="true">
                                        <i class="ti ti-dots-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end p-3">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>Hide Post</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-report me-2"></i>Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                            <p class="text-dark fw-medium">
                                Drinking water boosts skin health and beauty. Stay hydrated!
                                <a href="javascript:void(0);" class="text-info link-hover">#HealthTips </a>
                                <a href="javascript:void(0);" class="text-info link-hover"> #Wellness</a> \u{1F4A7}
                            </p>
                        </div>
                        <div class="card shadow-none mb-3">
                            <div class="card-img card-img-hover rounded-0">
                                <a href="javascript:void(0);" class="rounded-top"><img src="assets/img/social/social-feed-02.jpg" class="rounded-top" alt="Img"></a>
                            </div>
                            <div class="card-body p-2">
                                <h6 class="mb-1 text-truncate"><a href="javascript:void(0);">Drinking water boosts skin health and beauty. Stay hydrated!\u{1F4A7}</a></h6>
                                <a href="javascript:void(0);">Health.com</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
                                    <i class="ti ti-heart me-2"></i>340K Likes
                                </a>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
                                    <i class="ti ti-message-dots me-2"></i>45 Comments
                                </a>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center">
                                    <i class="ti ti-share-3 me-2"></i>28 Share
                                </a>
                            </div>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-heart"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-share"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-message-star"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-bookmark"></i></a>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
                <div class="card">
                    <div class="card-header border-0 pb-0">
                        <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
                            <div class="d-flex align-items-center">
                                <span class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="assets/img/users/user-04.jpg" alt="Img"></span>
                                <div>
                                    <h6 class="mb-1"><a href="javascript:void(0);">Sophie Headrick <i class="ti ti-circle-check-filled text-success"></i></a></h6>
                                    <p class="d-flex align-items-center">
                                        <span class="text-info">@sophie241</span>
                                        <i class="ti ti-circle-filled fs-5 mx-2"></i> United Kingdom
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <p class="mb-0 text-dark">About 1 hr ago</p>
                                <div class="dropdown ms-3 me-1">
                                    <button class="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="ti ti-world pe-1"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);">Private</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);">Public</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="d-inline-flex align-items-center show" data-bs-toggle="dropdown" aria-expanded="true">
                                        <i class="ti ti-dots-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end p-3">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>Hide Post</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-report me-2"></i>Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                            <p class="text-dark fw-medium">
                                Excited to announce the launch of our new product! Get yours now and enjoy a special discount.
                                <a href="javascript:void(0);" class="text-info link-hover">#NewRelease </a>
                                <a href="javascript:void(0);" class="text-info link-hover">  #Innovation</a> \u{1F389}
                            </p>
                        </div>
                        <div class="mb-2">
                            <img src="assets/img/social/social-feed-03.jpg" class="rounded" alt="Img">
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
                                    <i class="ti ti-heart me-2"></i>340K Likes
                                </a>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
                                    <i class="ti ti-message-dots me-2"></i>45 Comments
                                </a>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center">
                                    <i class="ti ti-share-3 me-2"></i>28 Share
                                </a>
                            </div>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-heart-filled text-danger"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-share"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-message-star"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-bookmark-filled text-warning"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-3">
                            <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/profiles/avatar-02.jpg" alt="Img">
                            </a>
                            <div class="bg-light rounded flex-fill p-2">
                                <div class="d-flex align-items-center mb-1">
                                    <h6><a href="javascript:void(0);">Frank Hoffman</a></h6>
                                    <span class="ms-2">12:45 PM</span>
                                </div>
                                <p class="mb-1">Congratulations on the launch! I've been eagerly waiting for this product, and the special discount makes it even more exciting.
                                </p>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-3 ms-4 ps-2">
                            <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/profiles/avatar-01.jpg" alt="Img">
                            </a>
                            <div class="bg-light rounded flex-fill p-2">
                                <div class="d-flex align-items-center mb-1">
                                    <h6><a href="javascript:void(0);">Sophie Headrick</a></h6>
                                    <span class="ms-2">12:45 PM</span>
                                </div>
                                <p class="mb-1">
                                    Thank you so much for your enthusiasm and support!
                                </p>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-3">
                            <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/profiles/avatar-04.jpg" alt="Img">
                            </a>
                            <div class="bg-light rounded flex-fill p-2">
                                <div class="d-flex align-items-center mb-1">
                                    <h6><a href="javascript:void(0);">Samuel Butler</a></h6>
                                    <span class="ms-2">12:40 PM</span>
                                </div>
                                <p class="mb-1">
                                    So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype.
                                </p>
                                <a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
                            </div>
                        </div>
                        <div>
                            <div class="more-menu">
                                <div class="d-flex align-items-start mb-3">
                                    <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="assets/img/profiles/avatar-05.jpg" alt="Img">
                                    </a>
                                    <div class="bg-light rounded flex-fill p-2">
                                        <div class="d-flex align-items-center mb-1">
                                            <h6><a href="javascript:void(0);">Samuel Butler</a></h6>
                                            <span class="ms-2">12:40 PM</span>
                                        </div>
                                        <p class="mb-1">
                                            So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype.
                                        </p>
                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
                                    </div>
                                </div>
                                <div class="d-flex align-items-start mb-3">
                                    <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="assets/img/profiles/avatar-06.jpg" alt="Img">
                                    </a>
                                    <div class="bg-light rounded flex-fill p-2">
                                        <div class="d-flex align-items-center mb-1">
                                            <h6><a href="javascript:void(0);">Samuel Butler</a></h6>
                                            <span class="ms-2">12:40 PM</span>
                                        </div>
                                        <p class="mb-1">
                                            So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype.
                                        </p>
                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="view-all text-center mb-3">
                                <a href="javascript:void(0);" class="viewall-button text-primary fw-medium"><span>View All 200 Comments</span><i class="fa fa-chevron-down fs-10 ms-2"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-start">
                            <span class="avatar avatar-rounded me-2 flex-shrink-0"><img src="assets/img/users/user-05.jpg" alt="Img"></span>
                            <input type="text" class="form-control" placeholder="Enter Comments">
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div>
        </div><!-- end col -->
        <div class="col-xl-3 theiaStickySidebar">
            <div class="card">
                <div class="card-body">
                    <h6 class="mb-3">Peoples</h6>
                    <ul class="nav nav-pills border d-flex p-2 rounded mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link btn active w-100" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-selected="true">
                                General
                            </button>
                        </li>
                        <li class="nav-item flex-fill" role="presentation">
                            <button class="nav-link btn w-100" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-selected="false">
                                Primary
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel">
                            <div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/profiles/avatar-01.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                                                <a href="javascript:void(0);">Anthony Lewis</a>
                                                <i class="ti ti-circle-check-filled text-success ms-1"></i>
                                            </h6>
                                            <span class="fs-12 d-block">United States</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-01.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                                                <a href="javascript:void(0);">Harvey Smith</a>
                                            </h6>
                                            <span class="fs-12 d-block">Ukrain</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-01.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fw-medium mb-1">
                                                <a href="javascript:void(0);">Stephan Peralt</a>
                                            </h6>
                                            <span class="fs-12 d-block">Isreal</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-02.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                                                <a href="javascript:void(0);">Doglas Martini</a>
                                            </h6>
                                            <span class="fs-12 d-block">Belgium</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-09.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                                                <a href="javascript:void(0);">Brian Villalobos</a>
                                                <i class="ti ti-circle-check-filled text-success ms-1"></i>
                                            </h6>
                                            <span class="fs-12 d-block">United Kingdom</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-02.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                                                <a href="javascript:void(0);">Linda Ray</a>
                                            </h6>
                                            <span class="fs-12 d-block">Argentina</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                            </div>
                            <div>
                                <a href="javascript:void(0);" class="btn btn-white w-100 border">View All <i class="ti ti-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel">
                            <div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/profiles/avatar-11.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex fs-14 align-items-center fw-medium mb-1">
                                                <a href="javascript:void(0);">Anthony Lewis</a>
                                                <i class="ti ti-circle-check-filled text-success ms-1"></i>
                                            </h6>
                                            <span class="fs-12 d-block">United States</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-10.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                                                <a href="javascript:void(0);">Harvey Smith</a>
                                            </h6>
                                            <span class="fs-12 d-block">Ukrain</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-09.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fs-14  fw-medium mb-1">
                                                <a href="javascript:void(0);">Stephan Peralt</a>
                                            </h6>
                                            <span class="fs-12 d-block">Isreal</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-08.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex fs-14 align-items-center fw-medium mb-1">
                                                <a href="javascript:void(0);">Doglas Martini</a>
                                            </h6>
                                            <span class="fs-12 d-block">Belgium</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-07.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex fs-14 align-items-center fw-medium mb-1">
                                                <a href="javascript:void(0);">Brian Villalobos</a>
                                                <i class="ti ti-circle-check-filled text-success ms-1"></i>
                                            </h6>
                                            <span class="fs-12 d-block">United Kingdom</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/users/user-06.jpg" alt="Img">
                                        </a>
                                        <div>
                                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                                                <a href="javascript:void(0);">Linda Ray</a>
                                            </h6>
                                            <span class="fs-12 d-block">Argentina</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
                                </div>
                            </div>
                            <div>
                                <a href="javascript:void(0);" class="btn btn-white w-100 border">View All <i class="ti ti-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
            <div class="card">
                <div class="card-body">
                    <h6 class="mb-3">Saved Feeds</h6>
                    <div class="bg-light rounded p-2 mb-2">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                            <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span><img src="assets/img/icons/feeds-01.svg" class="me-2" alt="Img"></span>
                                <p class="fs-12 fw-medium">World Health</p>
                            </a>
                            <a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
                        </div>
                        <p class="text-dark fw-medium"><a href="javascript:void(0);">Retail investor party continues even as</a></p>
                    </div>
                    <div class="bg-light rounded p-2 mb-2">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                            <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span><img src="assets/img/icons/feeds-02.svg" class="me-2" alt="Img"></span>
                                <p class="fs-12 fw-medium">T3 Tech</p>
                            </a>
                            <a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
                        </div>
                        <p class="text-dark fw-medium"><a href="javascript:void(0);">Ipad Air (2020) vs Samsung Galaxy Tab</a></p>
                    </div>
                    <div class="bg-light rounded p-2 mb-2">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                            <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span><img src="assets/img/icons/feeds-03.svg" class="me-2" alt="Img"></span>
                                <p class="fs-12 fw-medium">Fstoppers</p>
                            </a>
                            <a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
                        </div>
                        <p class="text-dark fw-medium"><a href="javascript:void(0);">Beyond capital gains tax! Top 50 stock</a></p>
                    </div>
                    <div class="bg-light rounded p-2">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                            <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span><img src="assets/img/icons/feeds-04.svg" class="me-2" alt="Img"></span>
                                <p class="fs-12 fw-medium">Evernote</p>
                            </a>
                            <a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
                        </div>
                        <p class="text-dark fw-medium"><a href="javascript:void(0);">Sony Just Destroyed the Competition</a></p>
                    </div>
                    <div class="mt-3">
                        <a href="javascript:void(0);" class="btn btn-white w-100 border">View All <i class="ti ti-arrow-right ms-2"></i></a>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
            <div class="card">
                <div class="card-body">
                    <h6 class="mb-3">Trending Hastags</h6>
                    <div class="d-flex align-items-center flex-wrap gap-1">
                        <a href="javascript:void(0);" class="text-info d-inline-flex link-hover">#HealthTips</a>
                        <a href="javascript:void(0);" class="text-info d-inline-flex link-hover">#Wellness</a>
                        <a href="javascript:void(0);" class="text-info d-inline-flex link-hover">#Motivation</a>
                        <a href="javascript:void(0);" class="text-info d-inline-flex link-hover">#Inspiration </a>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
            <div class="card">
                <div class="card-body">
                    <div class="card-img card-img-hover mb-3">
                        <a href="javascript:void(0);" class="rounded"><img src="assets/img/social/social-feed-04.jpg" class="rounded" alt="Img"></a>
                    </div>
                    <h6 class="text-center fs-14"><a href="javascript:void(0);">Enjoy Unlimited Access on a small price monthly.</a></h6>
                    <div class="mt-3">
                        <a href="javascript:void(0);" class="btn btn-white w-100 border">Upgrade Now <i class="ti ti-arrow-right ms-2"></i></a>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
            <div class="d-flex align-items-center flex-wrap justify-content-center template-more-links gap-3">
                <a href="javascript:void(0);" class="d-inline-flex">About</a>
                <a href="javascript:void(0);" class="d-inline-flex">Privacy</a>
                <a href="javascript:void(0);" class="d-inline-flex">Terms</a>
                <a href="javascript:void(0);" class="d-inline-flex">Help</a>
            </div>
        </div><!-- end col -->
    </div>
    <!-- end row -->

</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SocialFeedComponent, { className: "SocialFeedComponent", filePath: "src/app/features/application/social-feed/social-feed.component.ts", lineNumber: 15 });
})();
export {
  SocialFeedComponent
};
//# sourceMappingURL=chunk-EG5GUMD5.js.map
