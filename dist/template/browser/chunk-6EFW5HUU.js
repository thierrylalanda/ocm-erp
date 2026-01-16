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
import "./chunk-BLAAMQ2R.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/app-settings/custom-fields/custom-fields.component.ts
var CustomFieldsComponent = class _CustomFieldsComponent {
  static \u0275fac = function CustomFieldsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomFieldsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomFieldsComponent, selectors: [["app-custom-fields"]], decls: 228, vars: 0, consts: [[1, ""], [1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm", "bg-white"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_customfield", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-2"], [1, "table-responsive", "table-nowrap"], [1, "table", "border", "dataTable"], [1, "table-light"], [1, "no-sort"], ["href", "javascript:void(0);", 1, "text-dark"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_customfield", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["type", "checkbox", "role", "switch", 1, "form-check-input"], ["id", "add_customfield", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "form-label"], [1, "text-danger"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_customfield", 1, "modal", "fade"], ["placeholder", "Customers", 1, "custom-mat-select", "select"], ["type", "text", "value", "Type", 1, "form-control"], ["type", "text", "value", "Retail", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function CustomFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
      \u0275\u0275text(4, "Custom Fields");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "form")(6, "div", 1)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 5)(14, "a", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275text(16, "New Field");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 12)(18, "table", 13)(19, "thead", 14)(20, "tr")(21, "th", 15);
      \u0275\u0275text(22, "Module");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Default Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Required");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "th", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "tbody")(35, "tr")(36, "td")(37, "a", 16);
      \u0275\u0275text(38, "Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "td");
      \u0275\u0275text(40, "Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "td");
      \u0275\u0275text(42, "Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "td");
      \u0275\u0275text(44, "Retail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "td")(46, "div", 17);
      \u0275\u0275element(47, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "td")(49, "div", 17);
      \u0275\u0275element(50, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "td", 19)(52, "a", 20);
      \u0275\u0275element(53, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 22)(55, "li")(56, "a", 23);
      \u0275\u0275element(57, "i", 24);
      \u0275\u0275text(58, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 25);
      \u0275\u0275element(61, "i", 26);
      \u0275\u0275text(62, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(63, "tr")(64, "td")(65, "a", 16);
      \u0275\u0275text(66, "Supplier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "td");
      \u0275\u0275text(68, "Payment Method ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td");
      \u0275\u0275text(70, "Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "td");
      \u0275\u0275text(72, "PayPal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "td")(74, "div", 17);
      \u0275\u0275element(75, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "td")(77, "div", 17);
      \u0275\u0275element(78, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "td", 19)(80, "a", 20);
      \u0275\u0275element(81, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "ul", 22)(83, "li")(84, "a", 23);
      \u0275\u0275element(85, "i", 24);
      \u0275\u0275text(86, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "li")(88, "a", 25);
      \u0275\u0275element(89, "i", 26);
      \u0275\u0275text(90, "Delete");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(91, "div", 28)(92, "div", 29)(93, "div", 30)(94, "div", 31)(95, "h4", 32);
      \u0275\u0275text(96, "Add Custom Field");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "button", 33);
      \u0275\u0275element(98, "i", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "form")(100, "div", 35)(101, "div", 1)(102, "label", 36);
      \u0275\u0275text(103, "Module ");
      \u0275\u0275elementStart(104, "span", 37);
      \u0275\u0275text(105, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "mat-select", 38)(107, "mat-option", 39);
      \u0275\u0275text(108, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "mat-option", 39);
      \u0275\u0275text(110, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "mat-option", 39);
      \u0275\u0275text(112, "Supplier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "div", 1)(114, "label", 36);
      \u0275\u0275text(115, "Input Type ");
      \u0275\u0275elementStart(116, "span", 37);
      \u0275\u0275text(117, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "mat-select", 38)(119, "mat-option", 39);
      \u0275\u0275text(120, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "mat-option", 39);
      \u0275\u0275text(122, "Select");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 1)(124, "label", 36);
      \u0275\u0275text(125, "Label ");
      \u0275\u0275elementStart(126, "span", 37);
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 1)(130, "label", 36);
      \u0275\u0275text(131, "Default Value ");
      \u0275\u0275elementStart(132, "span", 37);
      \u0275\u0275text(133, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(134, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div")(136, "div", 41)(137, "label", 36);
      \u0275\u0275text(138, "Required ");
      \u0275\u0275elementStart(139, "span", 37);
      \u0275\u0275text(140, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 17);
      \u0275\u0275element(142, "input", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(143, "div", 42)(144, "button", 43);
      \u0275\u0275text(145, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "button", 44);
      \u0275\u0275text(147, "Add New");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(148, "div", 45)(149, "div", 29)(150, "div", 30)(151, "div", 31)(152, "h4", 32);
      \u0275\u0275text(153, "Edit Custom Field");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "button", 33);
      \u0275\u0275element(155, "i", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "form")(157, "div", 35)(158, "div", 1)(159, "label", 36);
      \u0275\u0275text(160, "Module ");
      \u0275\u0275elementStart(161, "span", 37);
      \u0275\u0275text(162, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "mat-select", 46)(164, "mat-option", 39);
      \u0275\u0275text(165, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "mat-option", 39);
      \u0275\u0275text(167, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "mat-option", 39);
      \u0275\u0275text(169, "Supplier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(170, "div", 1)(171, "label", 36);
      \u0275\u0275text(172, "Input Type ");
      \u0275\u0275elementStart(173, "span", 37);
      \u0275\u0275text(174, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "mat-select", 38)(176, "mat-option", 39);
      \u0275\u0275text(177, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 39);
      \u0275\u0275text(179, "Select");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 1)(181, "label", 36);
      \u0275\u0275text(182, "Label ");
      \u0275\u0275elementStart(183, "span", 37);
      \u0275\u0275text(184, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(185, "input", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 1)(187, "label", 36);
      \u0275\u0275text(188, "Default Value ");
      \u0275\u0275elementStart(189, "span", 37);
      \u0275\u0275text(190, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(191, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 1)(193, "div", 41)(194, "label", 36);
      \u0275\u0275text(195, "Required ");
      \u0275\u0275elementStart(196, "span", 37);
      \u0275\u0275text(197, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "div", 17);
      \u0275\u0275element(199, "input", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(200, "div")(201, "div", 41)(202, "label", 36);
      \u0275\u0275text(203, "Status ");
      \u0275\u0275elementStart(204, "span", 37);
      \u0275\u0275text(205, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 17);
      \u0275\u0275element(207, "input", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(208, "div", 42)(209, "button", 43);
      \u0275\u0275text(210, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "button", 44);
      \u0275\u0275text(212, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(213, "div", 49)(214, "div", 50)(215, "div", 30)(216, "div", 51)(217, "div", 1);
      \u0275\u0275element(218, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "h6", 53);
      \u0275\u0275text(220, "Delete Custom Field");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "p", 1);
      \u0275\u0275text(222, "Are you sure, you want to delete custom field?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 54)(224, "a", 55);
      \u0275\u0275text(225, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "a", 56);
      \u0275\u0275text(227, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomFieldsComponent, [{
    type: Component,
    args: [{ selector: "app-custom-fields", imports: [CommonModule, MatSelectModule], template: '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Custom Fields</h6>\n        </div>\n        <form>\n            <div class="mb-3">\n                <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                    <div class="d-flex align-items-center flex-wrap gap-2">\n                        <div class="input-icon-start position-relative">\n                            <span class="input-icon-addon">\n                                <i class="isax isax-search-normal"></i>\n                            </span>\n                            <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center flex-wrap gap-2">\n                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_customfield" class="btn btn-primary d-flex align-items-center"><i class="isax isax-add-circle5 me-2"></i>New Field</a>\n                    </div>\n                </div>\n            </div>\n            <div class="table-responsive table-nowrap">\n                <table class="table border dataTable">\n                    <thead class="table-light">\n                        <tr>\n                            <th class="no-sort">Module</th>\n                            <th>Label</th>\n                            <th>Type</th>\n                            <th>Default Value</th>\n                            <th>Required</th>\n                            <th>Status</th>\n                            <th class="no-sort"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <a href="javascript:void(0);" class="text-dark">Customers</a>\n                            </td>\n                            <td>Type </td>\n                            <td>Select </td>\n                            <td>Retail</td>\n                            <td>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                </div>\n                            </td>\n                            <td>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                </div>\n                            </td>\n                            <td class="action-item">\n                                <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                    <i class="isax isax-more"></i>\n                                </a>\n                                <ul class="dropdown-menu">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_customfield"><i class="isax isax-edit me-2"></i>Edit</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                    </li>\n                                </ul>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <a href="javascript:void(0);" class="text-dark">Supplier</a>\n                            </td>\n                            <td>Payment Method </td>\n                            <td>Select </td>\n                            <td>PayPal</td>\n                            <td>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch">\n                                </div>\n                            </td>\n                            <td>\n                                <div class="form-check form-switch">\n                                    <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                </div>\n                            </td>\n                            <td class="action-item">\n                                <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                    <i class="isax isax-more"></i>\n                                </a>\n                                <ul class="dropdown-menu">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_customfield"><i class="isax isax-edit me-2"></i>Edit</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                    </li>\n                                </ul>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </form>\n    </div>\n</div><!-- end col -->\n\n\n\n        <!-- Start Add Modal  -->\n        <div id="add_customfield" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add Custom Field</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-3">\n                                <label class="form-label">Module <span class="text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Customers</mat-option>\n                                    <mat-option value="1">Supplier</mat-option>\n                                </mat-select>\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Input Type <span class="text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Select</mat-option>\n                                </mat-select>\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Label <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Default Value <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div>\n                                <div class="d-flex align-items-center justify-content-between">\n                                    <label class="form-label">Required <span class="text-danger">*</span></label>\n                                    <div class="form-check form-switch">\n                                        <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Add Modal -->\n\n        <!-- Start Edit Modal  -->\n        <div id="edit_customfield" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit Custom Field</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="mb-3">\n                                <label class="form-label">Module <span class="text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Customers">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Customers</mat-option>\n                                    <mat-option value="1">Supplier</mat-option>\n                                </mat-select>\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Input Type <span class="text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Select</mat-option>\n                                </mat-select>\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Label <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control" value="Type">\n                            </div>\n                            <div class="mb-3">\n                                <label class="form-label">Default Value <span class="text-danger">*</span></label>\n                                <input type="text" class="form-control" value="Retail">\n                            </div>\n                            <div class="mb-3">\n                                <div class="d-flex align-items-center justify-content-between">\n                                    <label class="form-label">Required <span class="text-danger">*</span></label>\n                                    <div class="form-check form-switch">\n                                        <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                    </div>\n                                </div>\n                            </div>\n                            <div>\n                                <div class="d-flex align-items-center justify-content-between">\n                                    <label class="form-label">Status <span class="text-danger">*</span></label>\n                                    <div class="form-check form-switch">\n                                        <input class="form-check-input" type="checkbox" role="switch" checked="">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Modal -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Custom Field</h6>\n                        <p class="mb-3">Are you sure, you want to delete custom field?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomFieldsComponent, { className: "CustomFieldsComponent", filePath: "src/app/modules/setting/presentation/pages/app-settings/custom-fields/custom-fields.component.ts", lineNumber: 11 });
})();
export {
  CustomFieldsComponent
};
//# sourceMappingURL=chunk-6EFW5HUU.js.map
