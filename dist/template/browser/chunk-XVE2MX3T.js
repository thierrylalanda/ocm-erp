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

// src/app/features/manage/tickets/ticket-details/ticket-details.component.ts
var TicketDetailsComponent = class _TicketDetailsComponent {
  static \u0275fac = function TicketDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TicketDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketDetailsComponent, selectors: [["app-ticket-details"]], decls: 208, vars: 0, consts: [[1, ""], [1, "mb-3"], [1, "card", "mb-3"], [1, "card-header", "border-0", "bg-light"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center"], [1, "p-2", "bg-primary", "text-white", "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", "me-2"], [1, "isax", "isax-ticket"], [1, "fs-16"], [1, "text-gray-5"], [1, "badge", "badge-soft-danger", "me-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "isax", "isax-shield", "me-1", "text-gray-9"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center"], [1, "card-body"], [1, "mb-2"], [1, "row", "mb-3", "mx-1"], [1, "col-lg-4", "p-0", "d-flex"], [1, "p-3", "border", "flex-fill", "rounded-left", "border-end-0"], ["src", "assets/img/users/user-08.jpg", "alt", "img", 1, "avatar", "avatar-lg", "rounded-circle", "me-2"], [1, "fs-14", "mb-1"], [1, "fs-13"], [1, "p-3", "border", "flex-fill", "rounded-0", "border-end-0"], [1, "p-3", "border", "flex-fill", "rounded-right"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "border-bottom", "mb-3"], [1, "file-upload", "drag-file", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column", "mb-3"], [1, "upload-img", "d-block", "mb-2"], [1, "isax", "isax-image", "text-primary"], [1, "mb-0", "text-gray-9", "fw-normal"], ["href", "javascript:void(0);", 1, "text-primary", "text-decoration-underline"], ["type", "file", "accept", "video/image"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "rounded", "p-2", "mb-3"], ["src", "assets/img/icons/pdf.svg", "alt", "img", 1, "avatar", "avatar-lg", "me-2"], ["href", "javascript:void(0);", 1, "fs-13"], [1, "d-block", "fs-12"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "btn-md", "rounded-circle", "me-2", "p-2"], [1, "isax", "isax-document-download"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "btn-md", "rounded-circle", "p-2"], [1, "isax", "isax-more"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "rounded", "p-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "avatar", "avatar-lg", "me-2"], [1, "card", "mb-0"], [1, "fw-bold", "border-bottom", "pb-2", "mb-3"], [1, "activity-feed"], [1, "feed-item", "timeline-item"], [1, "mb-1"], [1, "text-dark", "fw-semibold"], [1, "invoice-date"], [1, "isax", "isax-calendar5", "me-1"], [1, "d-flex", "align-items-center", "mt-4"], [1, "btn", "btn-light", "border", "d-flex", "align-items-center", "justify-content-center", "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], ["href", "javascript:void(0);"], ["src", "assets/img/users/user-03.jpg", "alt", "img", 1, "avatar", "avatar-lg", "rounded-circle", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "btn-sm", "text-gray-9"], [1, "isax", "isax-repeat", "me-1"], ["src", "assets/img/users/user-05.jpg", "alt", "img", 1, "avatar", "avatar-lg", "rounded-circle", "me-2"], [1, "form-label"], [1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-end", "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function TicketDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h6");
      \u0275\u0275text(3, "Ticket Overview");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
      \u0275\u0275domElement(9, "i", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "h6", 8);
      \u0275\u0275text(11, "#TK001 - ");
      \u0275\u0275domElementStart(12, "span", 9);
      \u0275\u0275text(13, "New Support Ticket");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "div", 5)(15, "span", 10);
      \u0275\u0275text(16, "Medium");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "div", 11)(18, "a", 12);
      \u0275\u0275domElement(19, "i", 13);
      \u0275\u0275text(20, " Resolved ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "div", 14)(22, "ul", 1)(23, "li")(24, "label", 15);
      \u0275\u0275text(25, " Open ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "li")(27, "label", 15);
      \u0275\u0275text(28, " On Hold ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "li")(30, "label", 15);
      \u0275\u0275text(31, " Reopened ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "li")(33, "label", 15);
      \u0275\u0275text(34, " Resolved ");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(35, "div", 16)(36, "div", 1)(37, "h6", 17);
      \u0275\u0275text(38, "Description");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "p");
      \u0275\u0275text(40, "Need help? Submit a support ticket, and our team will assist you quickly. Provide your name, email, issue category, and a detailed description of the problem. Choose a priority level and attach relevant files if needed. Our support team will review your request and respond as soon as possible. Stay updated on your ticket status and get the assistance you need efficiently!");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "p");
      \u0275\u0275text(42, " Provide your name, email, issue category, and a detailed description of the problem. Choose a priority level and attach relevant files if needed.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(43, "div", 18)(44, "div", 19)(45, "div", 20)(46, "div", 5);
      \u0275\u0275domElement(47, "img", 21);
      \u0275\u0275domElementStart(48, "div")(49, "h6", 22);
      \u0275\u0275text(50, "Created By");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "p", 23);
      \u0275\u0275text(52, "Michael Carter");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(53, "div", 19)(54, "div", 24)(55, "div", 0)(56, "h6", 22);
      \u0275\u0275text(57, "Subject");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(58, "p", 23);
      \u0275\u0275text(59, "Support Ticket");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(60, "div", 19)(61, "div", 25)(62, "div", 0)(63, "h6", 22);
      \u0275\u0275text(64, "Subject");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "p", 23);
      \u0275\u0275text(66, "Support Ticket");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(67, "div", 26)(68, "div", 27)(69, "div", 28)(70, "div", 16)(71, "div", 29)(72, "h6", 17);
      \u0275\u0275text(73, "Attachments");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(74, "div", 30)(75, "span", 31);
      \u0275\u0275domElement(76, "i", 32);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(77, "p", 33);
      \u0275\u0275text(78, "Drop your files here or");
      \u0275\u0275domElementStart(79, "a", 34);
      \u0275\u0275text(80, " browse");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(81, "input", 35);
      \u0275\u0275domElementStart(82, "p");
      \u0275\u0275text(83, "Maximum size : 50 MB");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(84, "div", 36)(85, "div", 5);
      \u0275\u0275domElement(86, "img", 37);
      \u0275\u0275domElementStart(87, "div")(88, "a", 38);
      \u0275\u0275text(89, "Report1.pdf");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(90, "span", 39);
      \u0275\u0275text(91, "45 KB");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(92, "div", 5)(93, "a", 40);
      \u0275\u0275domElement(94, "i", 41);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "a", 42);
      \u0275\u0275domElement(96, "i", 43);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(97, "div", 44)(98, "div", 5);
      \u0275\u0275domElement(99, "img", 45);
      \u0275\u0275domElementStart(100, "div")(101, "a", 38);
      \u0275\u0275text(102, "Image2.jpg");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(103, "span", 39);
      \u0275\u0275text(104, "38 KB");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(105, "div", 5)(106, "a", 40);
      \u0275\u0275domElement(107, "i", 41);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(108, "a", 42);
      \u0275\u0275domElement(109, "i", 43);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(110, "div", 27)(111, "div", 46)(112, "div", 16)(113, "h5", 47);
      \u0275\u0275text(114, "History");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(115, "ul", 48)(116, "li", 49)(117, "p", 50)(118, "span", 51);
      \u0275\u0275text(119, "John Smith");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(120, " Got it now, and I can log in.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(121, "div", 52)(122, "span");
      \u0275\u0275domElement(123, "i", 53);
      \u0275\u0275text(124, "17 Jan 2025");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(125, "li", 49)(126, "p", 50)(127, "span", 51);
      \u0275\u0275text(128, "Forest Kroch ");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(129, " Check your spam folder");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(130, "div", 52)(131, "span");
      \u0275\u0275domElement(132, "i", 53);
      \u0275\u0275text(133, "17 Jan 2025");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(134, "li", 49)(135, "p", 50)(136, "span", 51);
      \u0275\u0275text(137, "Townsend Seary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(138, " I\u2019m not receiving the email confirmation.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(139, "div", 52)(140, "span");
      \u0275\u0275domElement(141, "i", 53);
      \u0275\u0275text(142, "17 Jan 2025");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(143, "li", 49)(144, "p", 50)(145, "span", 51);
      \u0275\u0275text(146, "Margaretta Worvell ");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(147, " Please try resetting your password");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(148, "div", 52)(149, "span");
      \u0275\u0275domElement(150, "i", 53);
      \u0275\u0275text(151, "17 Jan 2025");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(152, "li", 49)(153, "p", 50)(154, "span", 51);
      \u0275\u0275text(155, "Michael Carter ");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(156, " I can\u2019t log in; it says incorrect password.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(157, "div", 52)(158, "span");
      \u0275\u0275domElement(159, "i", 53);
      \u0275\u0275text(160, "17 Jan 2025");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(161, "div", 54)(162, "button", 55);
      \u0275\u0275text(163, "View All");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(164, "div", 1)(165, "h6");
      \u0275\u0275text(166, "Comments");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(167, "div", 2)(168, "div", 16)(169, "div", 56)(170, "div", 5)(171, "a", 57);
      \u0275\u0275domElement(172, "img", 58);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(173, "div")(174, "h6", 22)(175, "a", 57);
      \u0275\u0275text(176, "John Carter");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(177, "p", 23);
      \u0275\u0275text(178, "2 weeks ago");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(179, "a", 59);
      \u0275\u0275domElement(180, "i", 60);
      \u0275\u0275text(181, " Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(182, "p");
      \u0275\u0275text(183, '"This platform has made invoicing and expense tracking so much easier for my business. The automation features save me a lot of time, and the reports are very insightful. Highly recommend it to anyone looking for a reliable accounting solution. Great job, team!');
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(184, "div", 2)(185, "div", 16)(186, "div", 56)(187, "div", 5)(188, "a", 57);
      \u0275\u0275domElement(189, "img", 61);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(190, "div")(191, "h6", 22)(192, "a", 57);
      \u0275\u0275text(193, "Braun Tucker");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(194, "p", 23);
      \u0275\u0275text(195, "3 weeks ago");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(196, "a", 59);
      \u0275\u0275domElement(197, "i", 60);
      \u0275\u0275text(198, " Reply");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(199, "p");
      \u0275\u0275text(200, '"This platform has made invoicing and expense tracking so much easier for my business. The automation features save me a lot of time, and the reports are very insightful. Highly recommend it to anyone looking for a reliable accounting solution. Great job, team!');
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(201, "div", 1)(202, "label", 62);
      \u0275\u0275text(203, "Leave a Comment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(204, "textarea", 63);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(205, "div", 64)(206, "a", 65);
      \u0275\u0275text(207, "Post a Comment");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-ticket-details", imports: [], template: '			<!-- Start Content -->\n            <div class="">\n                <div class="mb-3">\n                    <h6>Ticket Overview</h6>\n                </div>\n                <div class="card mb-3">\n                    <div class="card-header border-0 bg-light">\n                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">\n                            <div class="d-flex align-items-center">\n                                <span class="p-2 bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-ticket"></i></span>\n                                <h6 class="fs-16">#TK001 - <span class="text-gray-5">New Support Ticket</span></h6>\n                            </div>\n                            <div class="d-flex align-items-center">\n                                <span class="badge badge-soft-danger me-3">Medium</span>\n                                <div class="dropdown">\n                                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n                                        <i class="isax isax-shield me-1 text-gray-9"></i> Resolved\n                                    </a>\n                                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                        <ul class="mb-3">\n                                            <li>\n                                                <label class="dropdown-item px-2 d-flex align-items-center">\n                                                    Open\n                                                </label>\n                                            </li>\n                                            <li>\n                                                <label class="dropdown-item px-2 d-flex align-items-center">\n                                                    On Hold\n                                                </label>\n                                            </li>\n                                            <li>\n                                                <label class="dropdown-item px-2 d-flex align-items-center">\n                                                    Reopened\n                                                </label>\n                                            </li>\n                                            <li>\n                                                <label class="dropdown-item px-2 d-flex align-items-center">\n                                                    Resolved\n                                                </label>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div><!-- end card header -->\n                    <div class="card-body">\n                        <div class="mb-3">\n                            <h6 class="mb-2">Description</h6>\n                            <p>Need help? Submit a support ticket, and our team will assist you quickly. Provide your name, email, issue category, and a detailed description of the problem. Choose a priority level and attach relevant files if needed. Our support team will review your request and respond as soon as possible. Stay updated on your ticket status and get the assistance you need efficiently!</p>\n                            <p> Provide your name, email, issue category, and a detailed description of the problem. Choose a priority level and attach relevant files if needed.</p>\n                        </div>\n\n                        <!-- start row -->\n                        <div class="row mb-3 mx-1">\n                            <div class="col-lg-4 p-0 d-flex">\n                                <div class="p-3 border flex-fill rounded-left border-end-0">\n                                    <div class="d-flex align-items-center">\n                                        <img src="assets/img/users/user-08.jpg" class="avatar avatar-lg rounded-circle me-2" alt="img">\n                                        <div>\n                                            <h6 class="fs-14 mb-1">Created By</h6>\n                                            <p class="fs-13">Michael Carter</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-4 p-0 d-flex">\n                                <div class="p-3 border flex-fill rounded-0 border-end-0">\n                                    <div class="">\n                                        <h6 class="fs-14 mb-1">Subject</h6>\n                                        <p class="fs-13">Support Ticket</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-4 p-0 d-flex">\n                                <div class="p-3 border flex-fill rounded-right">\n                                    <div class="">\n                                        <h6 class="fs-14 mb-1">Subject</h6>\n                                        <p class="fs-13">Support Ticket</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n                        <!-- start row -->\n                        <div class="row">\n                            <div class="col-lg-6">\n                                <div class="card">\n                                    <div class="card-body">\n                                        <div class="border-bottom mb-3">\n                                            <h6 class="mb-2">Attachments</h6>\n                                        </div>\n                                        <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column mb-3">\n                                            <span class="upload-img d-block mb-2"><i class="isax isax-image text-primary"></i></span>\n                                            <p class="mb-0 text-gray-9 fw-normal">Drop your files here or<a href="javascript:void(0);" class="text-primary text-decoration-underline">\n                                                    browse</a></p>\n                                            <input type="file" accept="video/image">\n                                            <p>Maximum size : 50 MB</p>\n                                        </div>\n                                        <div class="d-flex align-items-center justify-content-between border rounded p-2 mb-3">\n                                            <div class="d-flex align-items-center">\n                                                <img src="assets/img/icons/pdf.svg" alt="img" class="avatar avatar-lg me-2">\n                                                <div>\n                                                    <a href="javascript:void(0);" class="fs-13">Report1.pdf</a>\n                                                    <span class="d-block fs-12">45 KB</span>\n                                                </div>\n                                            </div>\n                                            <div class="d-flex align-items-center">\n                                                <a href="javascript:void(0);" class="btn btn-primary btn-md rounded-circle me-2 p-2"><i class="isax isax-document-download"></i></a>\n                                                <a href="javascript:void(0);" class="btn btn-light btn-md rounded-circle p-2"><i class="isax isax-more"></i></a>\n                                            </div>\n                                        </div>\n                                        <div class="d-flex align-items-center justify-content-between border rounded p-2">\n                                            <div class="d-flex align-items-center">\n                                                <img src="assets/img/products/product-01.jpg" alt="img" class="avatar avatar-lg me-2">\n                                                <div>\n                                                    <a href="javascript:void(0);" class="fs-13">Image2.jpg</a>\n                                                    <span class="d-block fs-12">38 KB</span>\n                                                </div>\n                                            </div>\n                                            <div class="d-flex align-items-center">\n                                                <a href="javascript:void(0);" class="btn btn-primary btn-md rounded-circle me-2 p-2"><i class="isax isax-document-download"></i></a>\n                                                <a href="javascript:void(0);" class="btn btn-light btn-md rounded-circle p-2"><i class="isax isax-more"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-6">\n                                <div class="card mb-0">\n                                    <div class="card-body">\n                                        <h5 class="fw-bold border-bottom pb-2 mb-3">History</h5>\n\n                                        <ul class="activity-feed">\n                                            <li class="feed-item timeline-item">\n                                                <p class="mb-1"><span class="text-dark fw-semibold">John Smith</span> Got it now, and I can log in.</p>\n                                                <div class="invoice-date"><span><i class="isax isax-calendar5 me-1"></i>17 Jan 2025</span></div>\n                                            </li>\n                                            <li class="feed-item timeline-item">\n                                                <p class="mb-1"><span class="text-dark fw-semibold">Forest Kroch </span> Check your spam folder</p>\n                                                <div class="invoice-date"><span><i class="isax isax-calendar5 me-1"></i>17 Jan 2025</span></div>\n                                            </li>\n                                            <li class="feed-item timeline-item">\n                                                <p class="mb-1"><span class="text-dark fw-semibold">Townsend Seary </span> I\u2019m not receiving the email confirmation.</p>\n                                                <div class="invoice-date"><span><i class="isax isax-calendar5 me-1"></i>17 Jan 2025</span></div>\n                                            </li>\n                                            <li class="feed-item timeline-item">\n                                                <p class="mb-1"><span class="text-dark fw-semibold">Margaretta Worvell </span> Please try resetting your password</p>\n                                                <div class="invoice-date"><span><i class="isax isax-calendar5 me-1"></i>17 Jan 2025</span></div>\n                                            </li>\n                                            <li class="feed-item timeline-item">\n                                                <p class="mb-1"><span class="text-dark fw-semibold">Michael Carter </span> I can\u2019t log in; it says incorrect password.</p>\n                                                <div class="invoice-date"><span><i class="isax isax-calendar5 me-1"></i>17 Jan 2025</span></div>\n                                            </li>\n                                        </ul>\n\n                                        <div class="d-flex align-items-center mt-4">\n                                            <button class="btn btn-light border d-flex align-items-center justify-content-center w-100">View All</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end row -->\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n\n                <div class="mb-3">\n                    <h6>Comments</h6>\n                </div>\n                <div class="card mb-3">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <div class="d-flex align-items-center">\n                                <a href="javascript:void(0);"><img src="assets/img/users/user-03.jpg" class="avatar avatar-lg rounded-circle me-2" alt="img"></a>\n                                <div>\n                                    <h6 class="fs-14 mb-1"><a href="javascript:void(0);">John Carter</a></h6>\n                                    <p class="fs-13">2 weeks ago</p>\n                                </div>\n                            </div>\n                            <a href="javascript:void(0);" class="btn btn-light btn-sm text-gray-9"><i class="isax isax-repeat me-1"></i> Reply</a>\n                        </div>\n                        <p>"This platform has made invoicing and expense tracking so much easier for my business. The automation features save me a lot of time, and the reports are very insightful. Highly recommend it to anyone looking for a reliable accounting\n                            solution. Great job, team!</p>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n                <div class="card mb-3">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <div class="d-flex align-items-center">\n                                <a href="javascript:void(0);"><img src="assets/img/users/user-05.jpg" class="avatar avatar-lg rounded-circle me-2" alt="img"></a>\n                                <div>\n                                    <h6 class="fs-14 mb-1"><a href="javascript:void(0);">Braun Tucker</a></h6>\n                                    <p class="fs-13">3 weeks ago</p>\n                                </div>\n                            </div>\n                            <a href="javascript:void(0);" class="btn btn-light btn-sm text-gray-9"><i class="isax isax-repeat me-1"></i> Reply</a>\n                        </div>\n                        <p>"This platform has made invoicing and expense tracking so much easier for my business. The automation features save me a lot of time, and the reports are very insightful. Highly recommend it to anyone looking for a reliable accounting\n                            solution. Great job, team!</p>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n                <div class="mb-3">\n                    <label class="form-label">Leave a Comment</label>\n                    <textarea class="form-control"></textarea>\n                </div>\n                <div class="d-flex align-items-center justify-content-end mb-3">\n                    <a href="javascript:void(0);" class="btn btn-primary">Post a Comment</a>\n                </div>\n            </div>\n			<!-- End Content -->\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketDetailsComponent, { className: "TicketDetailsComponent", filePath: "src/app/features/manage/tickets/ticket-details/ticket-details.component.ts", lineNumber: 9 });
})();
export {
  TicketDetailsComponent
};
//# sourceMappingURL=chunk-XVE2MX3T.js.map
