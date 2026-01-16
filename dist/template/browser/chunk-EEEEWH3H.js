import {
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import {
  RouterLink
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
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
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.ts
var LanguageSettingsComponent = class _LanguageSettingsComponent {
  routes = routes;
  static \u0275fac = function LanguageSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSettingsComponent, selectors: [["app-language-settings"]], decls: 207, vars: 20, consts: [[1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "fw-bold", "mb-0"], [1, "d-flex", "align-items-center"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-language-square", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg", "p-2"], [1, "dropdown-item", "d-flex", "align-items-center", "rounded-1"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "flex-wrap", "gap-2"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "input-icon-start", "position-relative", "me-2"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm", "bg-white"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-import", "me-1"], [1, "custom-datatable-filter", "table-nowrap", "table-responsive", "border", "rounded", "mb-3"], [1, "table", "mb-0", "dataTable"], [1, "table-light"], [1, "me-2", "flex-shrink-0", 3, "routerLink"], ["src", "assets/img/flags/us.svg", "alt", "img", 1, "avatar", "avatar-xs", "rounded-circle"], [3, "routerLink"], [1, "form-check", "form-check-sm", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input", "form-label"], [1, "btn", "btn-sm", "btn-outline-white", "me-2", 3, "routerLink"], [1, "btn", "btn-sm", "btn-outline-white", 3, "routerLink"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-white", "d-inline-flex", "rounded-circle", "p-1", "align-items-center", "justify-content-center", "btn-sm"], [1, "isax", "isax-more"], [1, "dropdown-menu", "dropdown-menu-end", "p-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_testimonial", 1, "dropdown-item", "rounded-1"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_testimonials", 1, "dropdown-item", "rounded-1"], [1, "isax", "isax-trash", "me-2"], [1, "flex-shrink-0", "me-2", 3, "routerLink"], ["src", "assets/img/flags/de.svg", "alt", "img", 1, "avatar", "avatar-xs", "rounded-circle"], ["type", "checkbox", "role", "switch", 1, "form-check-input", "form-label"], ["src", "assets/img/flags/ae.svg", "alt", "img", 1, "avatar", "avatar-xs", "rounded-circle"], ["src", "assets/img/flags/fr.svg", "alt", "img", 1, "avatar", "avatar-xs", "rounded-circle"]], template: function LanguageSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "a", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, "Language ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ul", 7)(10, "li")(11, "label", 8);
      \u0275\u0275text(12, " English ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "label", 8);
      \u0275\u0275text(15, " German ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "label", 8);
      \u0275\u0275text(18, " Arabic ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "label", 8);
      \u0275\u0275text(21, " French ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "a", 9);
      \u0275\u0275element(23, "i", 10);
      \u0275\u0275text(24, "Add New Language");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 11)(26, "div", 12)(27, "div", 13)(28, "span", 14);
      \u0275\u0275element(29, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "a", 17);
      \u0275\u0275element(32, "i", 18);
      \u0275\u0275text(33, "Import Sample");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 19)(35, "table", 20)(36, "thead", 21)(37, "tr")(38, "th");
      \u0275\u0275text(39, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th");
      \u0275\u0275text(43, "RTL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th");
      \u0275\u0275text(45, "Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "th")(49, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "tbody")(51, "tr")(52, "td")(53, "div", 3)(54, "a", 22);
      \u0275\u0275element(55, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "a", 24);
      \u0275\u0275text(57, "English");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "td");
      \u0275\u0275text(59, " en ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "td")(61, "div", 25);
      \u0275\u0275element(62, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "td")(64, "div", 25);
      \u0275\u0275element(65, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "td")(67, "div", 25);
      \u0275\u0275element(68, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "td")(70, "div", 3)(71, "a", 27);
      \u0275\u0275text(72, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 27);
      \u0275\u0275text(74, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 28);
      \u0275\u0275text(76, "Admin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "td")(78, "div", 29)(79, "a", 30);
      \u0275\u0275element(80, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "ul", 32)(82, "li")(83, "a", 33);
      \u0275\u0275element(84, "i", 34);
      \u0275\u0275text(85, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 35);
      \u0275\u0275element(88, "i", 36);
      \u0275\u0275text(89, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(90, "tr")(91, "td")(92, "div", 3)(93, "a", 37);
      \u0275\u0275element(94, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "a", 24);
      \u0275\u0275text(96, "German");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "td");
      \u0275\u0275text(98, " de ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "td")(100, "div", 25);
      \u0275\u0275element(101, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "td")(103, "div", 25);
      \u0275\u0275element(104, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "td")(106, "div", 25);
      \u0275\u0275element(107, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "td")(109, "div", 3)(110, "a", 27);
      \u0275\u0275text(111, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "a", 27);
      \u0275\u0275text(113, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 28);
      \u0275\u0275text(115, "Admin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "td")(117, "div", 29)(118, "a", 30);
      \u0275\u0275element(119, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "ul", 32)(121, "li")(122, "a", 33);
      \u0275\u0275element(123, "i", 34);
      \u0275\u0275text(124, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "li")(126, "a", 35);
      \u0275\u0275element(127, "i", 36);
      \u0275\u0275text(128, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(129, "tr")(130, "td")(131, "div", 3)(132, "a", 37);
      \u0275\u0275element(133, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "a", 24);
      \u0275\u0275text(135, "Arabic");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "td");
      \u0275\u0275text(137, " ar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "td")(139, "div", 25);
      \u0275\u0275element(140, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "td")(142, "div", 25);
      \u0275\u0275element(143, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "td")(145, "div", 25);
      \u0275\u0275element(146, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "td")(148, "div", 3)(149, "a", 27);
      \u0275\u0275text(150, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "a", 27);
      \u0275\u0275text(152, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "a", 28);
      \u0275\u0275text(154, "Admin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "td")(156, "div", 29)(157, "a", 30);
      \u0275\u0275element(158, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "ul", 32)(160, "li")(161, "a", 33);
      \u0275\u0275element(162, "i", 34);
      \u0275\u0275text(163, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "li")(165, "a", 35);
      \u0275\u0275element(166, "i", 36);
      \u0275\u0275text(167, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(168, "tr")(169, "td")(170, "div", 3)(171, "a", 37);
      \u0275\u0275element(172, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "a", 24);
      \u0275\u0275text(174, "French");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "td");
      \u0275\u0275text(176, " fr ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "td")(178, "div", 25);
      \u0275\u0275element(179, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "td")(181, "div", 25);
      \u0275\u0275element(182, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "td")(184, "div", 25);
      \u0275\u0275element(185, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "td")(187, "div", 3)(188, "a", 27);
      \u0275\u0275text(189, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "a", 27);
      \u0275\u0275text(191, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "a", 28);
      \u0275\u0275text(193, "Admin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "td")(195, "div", 29)(196, "a", 30);
      \u0275\u0275element(197, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "ul", 32)(199, "li")(200, "a", 33);
      \u0275\u0275element(201, "i", 34);
      \u0275\u0275text(202, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "li")(204, "a", 35);
      \u0275\u0275element(205, "i", 36);
      \u0275\u0275text(206, "Delete");
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(54);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings2);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-language-settings", imports: [CommonModule, RouterLink], template: '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-3">\n        <h6 class="fw-bold mb-0">Language</h6>\n        <div class="d-flex align-items-center">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                    <i class="isax isax-language-square me-1"></i>Language\n                </a>\n                <ul class="dropdown-menu dropdown-menu-lg p-2">\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            English\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            German\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            Arabic\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            French\n                        </label>\n                    </li>\n                </ul>\n            </div>\n            <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center"><i class="isax isax-add-circle5 me-1"></i>Add New Language</a>\n        </div>\n    </div>\n\n    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="input-icon-start position-relative me-2">\n                <span class="input-icon-addon">\n                    <i class="isax isax-search-normal"></i>\n                </span>\n                <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">                                      \n            </div>\n        </div>\n        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-import me-1"></i>Import Sample</a>\n    </div>\n\n    <!-- Custom Data Table -->\n    <div class="custom-datatable-filter table-nowrap table-responsive border rounded mb-3">\n        <table class="table mb-0 dataTable">\n            <thead class="table-light">\n                <tr>\n                    <th>Language</th>\n                    <th>Code</th>\n                    <th>RTL</th>\n                    <th>Default</th>\n                    <th>Status</th>\n                    <th></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class=" me-2 flex-shrink-0"><img src="assets/img/flags/us.svg" alt="img" class="avatar avatar-xs rounded-circle"></a>\n                            <a [routerLink]="routes.languageSettings2">English</a>\n                        </div>\n                    </td>\n                    <td>\n                        en\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex rounded-circle p-1 align-items-center justify-content-center btn-sm" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="flex-shrink-0 me-2"><img src="assets/img/flags/de.svg" alt="img" class="avatar avatar-xs rounded-circle"></a>\n                            <a [routerLink]="routes.languageSettings2">German</a>\n                        </div>\n                    </td>\n                    <td>\n                        de\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch">\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex rounded-circle p-1 align-items-center justify-content-center btn-sm" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="flex-shrink-0 me-2"><img src="assets/img/flags/ae.svg" alt="img" class="avatar avatar-xs rounded-circle"></a>\n                            <a [routerLink]="routes.languageSettings2">Arabic</a>\n                        </div>\n                    </td>\n                    <td>\n                        ar\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch">\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex rounded-circle p-1 align-items-center justify-content-center btn-sm" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="flex-shrink-0 me-2"><img src="assets/img/flags/fr.svg" alt="img" class="avatar avatar-xs rounded-circle"></a>\n                            <a [routerLink]="routes.languageSettings2">French</a>\n                        </div>\n                    </td>\n                    <td>\n                        fr\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch">\n                        </div>\n                    </td>\n                    <td>\n                        <div class="form-check form-check-sm form-switch">\n                            <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a [routerLink]="routes.languageSettings2" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex rounded-circle p-1 align-items-center justify-content-center btn-sm" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <!-- Custom Data Table -->\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSettingsComponent, { className: "LanguageSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/language-settings/language-settings.component.ts", lineNumber: 12 });
})();
export {
  LanguageSettingsComponent
};
//# sourceMappingURL=chunk-EEEEWH3H.js.map
