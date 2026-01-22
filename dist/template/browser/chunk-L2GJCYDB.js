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

// src/app/modules/setting/presentation/pages/website-settings/language-settings2/language-settings2.component.ts
var LanguageSettings2Component = class _LanguageSettings2Component {
  static \u0275fac = function LanguageSettings2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSettings2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSettings2Component, selectors: [["app-language-settings2"]], decls: 163, vars: 0, consts: [[1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "fw-bold", "mb-0"], [1, "d-flex", "align-items-center"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-language-square", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg", "p-2"], [1, "dropdown-item", "d-flex", "align-items-center", "rounded-1"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "gap-2", "flex-wrap"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "input-icon-start", "position-relative", "me-2"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm", "bg-white"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-arrow-left", "me-1"], [1, "custom-datatable-filter", "table-responsive", "border", "rounded", "mb-3"], [1, "table", "mb-0", "dataTable"], [1, "table-light"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-outline-white", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-outline-white"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-white", "rounded-circle", "btn-sm", "d-inline-flex", "align-items-center", "p-1", "justify-content-center"], [1, "isax", "isax-more"], [1, "dropdown-menu", "dropdown-menu-end", "p-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_testimonial", 1, "dropdown-item", "rounded-1"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_testimonials", 1, "dropdown-item", "rounded-1"], [1, "isax", "isax-trash", "me-2"]], template: function LanguageSettings2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Language");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 3)(5, "div", 4)(6, "a", 5);
      \u0275\u0275domElement(7, "i", 6);
      \u0275\u0275text(8, "Language ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "ul", 7)(10, "li")(11, "label", 8);
      \u0275\u0275text(12, " English ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li")(14, "label", 8);
      \u0275\u0275text(15, " German ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "li")(17, "label", 8);
      \u0275\u0275text(18, " Arabic ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "li")(20, "label", 8);
      \u0275\u0275text(21, " French ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(22, "a", 9);
      \u0275\u0275domElement(23, "i", 10);
      \u0275\u0275text(24, "New Language");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(25, "div", 11)(26, "div", 12)(27, "div", 13)(28, "span", 14);
      \u0275\u0275domElement(29, "i", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(30, "input", 16);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "a", 17);
      \u0275\u0275domElement(32, "i", 18);
      \u0275\u0275text(33, "Back to Translations");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(34, "div", 19)(35, "table", 20)(36, "thead", 21)(37, "tr")(38, "th");
      \u0275\u0275text(39, "Module");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "th");
      \u0275\u0275text(41, "Total");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "th");
      \u0275\u0275text(43, "Done");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(44, "th")(45, "th");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(46, "tbody")(47, "tr")(48, "td")(49, "a", 22);
      \u0275\u0275text(50, "Inventory");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(51, "td");
      \u0275\u0275text(52, " 1620 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "td");
      \u0275\u0275text(54, " 1296 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "td")(56, "div", 3)(57, "a", 23);
      \u0275\u0275text(58, "Web");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "a", 23);
      \u0275\u0275text(60, "App");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "a", 24);
      \u0275\u0275text(62, "Admin");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(63, "td")(64, "div", 25)(65, "a", 26);
      \u0275\u0275domElement(66, "i", 27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "ul", 28)(68, "li")(69, "a", 29);
      \u0275\u0275domElement(70, "i", 30);
      \u0275\u0275text(71, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(72, "li")(73, "a", 31);
      \u0275\u0275domElement(74, "i", 32);
      \u0275\u0275text(75, "Delete");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(76, "tr")(77, "td")(78, "a", 22);
      \u0275\u0275text(79, "Sales");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(80, "td");
      \u0275\u0275text(81, " 1620 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(82, "td");
      \u0275\u0275text(83, " 972 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "td")(85, "div", 3)(86, "a", 23);
      \u0275\u0275text(87, "Web");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(88, "a", 23);
      \u0275\u0275text(89, "App");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(90, "a", 24);
      \u0275\u0275text(91, "Admin");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(92, "td")(93, "div", 25)(94, "a", 26);
      \u0275\u0275domElement(95, "i", 27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(96, "ul", 28)(97, "li")(98, "a", 29);
      \u0275\u0275domElement(99, "i", 30);
      \u0275\u0275text(100, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(101, "li")(102, "a", 31);
      \u0275\u0275domElement(103, "i", 32);
      \u0275\u0275text(104, "Delete");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(105, "tr")(106, "td")(107, "a", 22);
      \u0275\u0275text(108, "Purchases");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(109, "td");
      \u0275\u0275text(110, " 1620 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(111, "td");
      \u0275\u0275text(112, " 810 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(113, "td")(114, "div", 3)(115, "a", 23);
      \u0275\u0275text(116, "Web");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(117, "a", 23);
      \u0275\u0275text(118, "App");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(119, "a", 24);
      \u0275\u0275text(120, "Admin");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(121, "td")(122, "div", 25)(123, "a", 26);
      \u0275\u0275domElement(124, "i", 27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "ul", 28)(126, "li")(127, "a", 29);
      \u0275\u0275domElement(128, "i", 30);
      \u0275\u0275text(129, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(130, "li")(131, "a", 31);
      \u0275\u0275domElement(132, "i", 32);
      \u0275\u0275text(133, "Delete");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(134, "tr")(135, "td")(136, "a", 22);
      \u0275\u0275text(137, "Finance & Accounts");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(138, "td");
      \u0275\u0275text(139, " 1620 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(140, "td");
      \u0275\u0275text(141, " 324 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(142, "td")(143, "div", 3)(144, "a", 23);
      \u0275\u0275text(145, "Web");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(146, "a", 23);
      \u0275\u0275text(147, "App");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(148, "a", 24);
      \u0275\u0275text(149, "Admin");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(150, "td")(151, "div", 25)(152, "a", 26);
      \u0275\u0275domElement(153, "i", 27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(154, "ul", 28)(155, "li")(156, "a", 29);
      \u0275\u0275domElement(157, "i", 30);
      \u0275\u0275text(158, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(159, "li")(160, "a", 31);
      \u0275\u0275domElement(161, "i", 32);
      \u0275\u0275text(162, "Delete");
      \u0275\u0275domElementEnd()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSettings2Component, [{
    type: Component,
    args: [{ selector: "app-language-settings2", imports: [], template: '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-3">\n        <h6 class="fw-bold mb-0">Language</h6>\n        <div class="d-flex align-items-center">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                    <i class="isax isax-language-square me-1"></i>Language\n                </a>\n                <ul class="dropdown-menu dropdown-menu-lg p-2">\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            English\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            German\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            Arabic\n                        </label>\n                    </li>\n                    <li>\n                        <label class="dropdown-item d-flex align-items-center rounded-1">\n                            French\n                        </label>\n                    </li>\n                </ul>\n            </div>\n            <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center"><i class="isax isax-add-circle5 me-1"></i>New Language</a>\n        </div>\n    </div>\n\n    <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="input-icon-start position-relative me-2">\n                <span class="input-icon-addon">\n                    <i class="isax isax-search-normal"></i>\n                </span>\n                <input type="text" class="form-control form-control-sm bg-white" placeholder="Search"> \n            </div>\n        </div>\n        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"><i class="isax isax-arrow-left me-1"></i>Back to Translations</a>\n    </div>\n\n    <!-- Custom Data Table -->\n    <div class="custom-datatable-filter table-responsive border rounded mb-3">\n        <table class="table mb-0 dataTable">\n            <thead class="table-light">\n                <tr>\n                    <th>Module</th>\n                    <th>Total</th>\n                    <th>Done</th>\n                    <th></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);">Inventory</a>\n                    </td>\n                    <td>\n                        1620\n                    </td>\n                    <td>\n                        1296\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white rounded-circle btn-sm d-inline-flex align-items-center p-1 justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);">Sales</a>\n                    </td>\n                    <td>\n                        1620\n                    </td>\n                    <td>\n                        972\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white rounded-circle btn-sm d-inline-flex align-items-center p-1 justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);">Purchases</a>\n                    </td>\n                    <td>\n                        1620\n                    </td>\n                    <td>\n                        810\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white rounded-circle btn-sm d-inline-flex align-items-center p-1 justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);">Finance & Accounts</a>\n                    </td>\n                    <td>\n                        1620\n                    </td>\n                    <td>\n                        324\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">Web</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white me-2">App</a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white">Admin</a>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white rounded-circle btn-sm d-inline-flex align-items-center p-1 justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">\n                                <i class="isax isax-more"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-menu-end p-2">\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <!-- Custom Data Table -->\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSettings2Component, { className: "LanguageSettings2Component", filePath: "src/app/modules/setting/presentation/pages/website-settings/language-settings2/language-settings2.component.ts", lineNumber: 9 });
})();
export {
  LanguageSettings2Component
};
//# sourceMappingURL=chunk-L2GJCYDB.js.map
