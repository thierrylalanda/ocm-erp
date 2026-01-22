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

// src/app/features/ui-interface/base-ui/dropdowns/dropdowns.component.ts
var DropdownsComponent = class _DropdownsComponent {
  static \u0275fac = function DropdownsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownsComponent, selectors: [["app-dropdowns"]], decls: 1607, vars: 4, consts: [[1, ""], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "d-flex", "flex-wrap", "gap-2"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "card-body"], ["type", "button", "id", "dropdownMenuButton3", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-dark", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-dark"], [1, "btn-list", "d-flex", "flex-wrap", "gap-2"], [1, "btn-group"], [1, "dropdown-divider"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-success", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-info", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-warning", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-danger", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-success", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-info", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-warning", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-danger", "dropdown-toggle", "rounded-pill"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-primary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-secondary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-success", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-info", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-warning", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-danger", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-primary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-secondary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-success", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-info", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-warning", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-danger", "dropdown-toggle", "rounded-pill"], [1, "card-body", "py-3"], [1, "btn-group", "my-1"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "dropdown-toggle-split", "me-2"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "dropdown-toggle-split", "me-2"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "dropdown-toggle-split", "me-2"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle", "dropdown-toggle-split", "me-2"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle", "dropdown-toggle-split", "me-2"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle", "dropdown-toggle-split", "me-2"], [1, "btn-group", "my-1", "me-2"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-lg", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-success", "btn-lg"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-lg", "btn-success", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-danger", "btn-sm"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-danger", "dropdown-toggle", "dropdown-toggle-split"], [1, "text-muted"], ["href", "javascript:void(0);", "aria-current", "true", 1, "dropdown-item", "active"], [1, "text-muted", "mb-3"], [1, "dropdown-center"], ["type", "button", "id", "dropdownCenterBtn", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownCenterBtn", 1, "dropdown-menu"], [1, "dropup-center", "dropup"], ["type", "button", "id", "dropupCenterBtn", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropupCenterBtn", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenu1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle"], ["aria-labelledby", "dropdownMenu1", 1, "dropdown-menu"], ["type", "button", 1, "dropdown-item"], [1, "d-flex", "align-items-center"], [1, "dropdown", "me-1"], ["type", "button", "id", "dropdownMenuOffset", "data-bs-toggle", "dropdown", "aria-expanded", "false", "data-bs-offset", "10,20", 1, "btn", "btn-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuOffset", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuReference", "data-bs-toggle", "dropdown", "aria-expanded", "false", "data-bs-reference", "parent", 1, "btn", "btn-info", "dropdown-toggle", "dropdown-toggle-split"], ["aria-labelledby", "dropdownMenuReference", 1, "dropdown-menu"], [1, "d-flex", "align", "flex-wrap", "gap-2"], ["type", "button", "id", "defaultDropdown", "data-bs-toggle", "dropdown", "data-bs-auto-close", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], ["aria-labelledby", "defaultDropdown", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuClickableOutside", "data-bs-toggle", "dropdown", "data-bs-auto-close", "inside", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuClickableOutside", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuClickableInside", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuClickableInside", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuClickableInsise", "data-bs-toggle", "dropdown", "data-bs-auto-close", "false", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuClickableInsise", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "mb-0"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "mb-0"], [1, "dropdown-menu", "dropdown-menu-end"], ["type", "button", "data-bs-toggle", "dropdown", "data-bs-display", "static", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "mb-0"], [1, "dropdown-menu", "dropdown-menu-lg-end"], ["type", "button", "data-bs-toggle", "dropdown", "data-bs-display", "static", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle", "mb-0"], [1, "dropdown-menu", "dropdown-menu-end", "dropdown-menu-lg-start"], [1, "btn-group", "dropstart"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle", "mb-0"], [1, "btn-group", "dropend"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle", "mb-0"], [1, "btn-group", "dropup"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "mb-0"], ["type", "button", "id", "dropdownMenu2", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "px-4", "py-3"], [1, "mb-3"], ["for", "exampleDropdownFormEmail1", 1, "form-label"], ["type", "email", "id", "exampleDropdownFormEmail1", "placeholder", "email@example.com", 1, "form-control"], ["for", "exampleDropdownFormPassword1", 1, "form-label"], ["type", "password", "id", "exampleDropdownFormPassword1", "placeholder", "Password", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "dropdownCheck", 1, "form-check-input"], ["for", "dropdownCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", "data-bs-display", "static", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "text-wrap"], ["type", "button", "data-bs-toggle", "dropdown", "data-bs-display", "static", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "text-wrap"], [1, "dropdown-menu", "dropdown-menu-lg-start"], [1, "col-auto"], ["type", "button", "id", "dropdownWithoutArrow", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "drop-arrow-none"], ["aria-labelledby", "dropdownWithoutArrow", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuIcon", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-info", "dropdown-toggle", "drop-arrow-none"], [1, "ti", "ti-chevron-down", "align-middle", "ms-1"], ["aria-labelledby", "dropdownMenuIcon", 1, "dropdown-menu"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-light"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["role", "group", 1, "btn-group", "dropstart"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "dropdown-split", "dropdown-toggle-split"], [1, "dropdown-header"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu", "p-3", "text-muted", 2, "max-width", "200px"], [1, "mb-0"]], template: function DropdownsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li", 6)(11, "a", 7);
      \u0275\u0275text(12, "Base UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 8);
      \u0275\u0275text(14, "Dropdowns");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h5", 13);
      \u0275\u0275text(20, "Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 14)(22, "div", 15)(23, "button", 16);
      \u0275\u0275text(24, " Dropdown Button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "ul", 17)(26, "li")(27, "a", 18);
      \u0275\u0275text(28, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "li")(30, "a", 18);
      \u0275\u0275text(31, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "li")(33, "a", 18);
      \u0275\u0275text(34, "Something else here");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(35, "div", 15)(36, "a", 19);
      \u0275\u0275text(37, " Dropdown Link ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "ul", 17)(39, "li")(40, "a", 18);
      \u0275\u0275text(41, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "li")(43, "a", 18);
      \u0275\u0275text(44, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(45, "li")(46, "a", 18);
      \u0275\u0275text(47, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(48, "div", 10)(49, "div", 11)(50, "div", 12)(51, "h5", 13);
      \u0275\u0275text(52, "Dark Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(53, "div", 20)(54, "div", 15)(55, "button", 21);
      \u0275\u0275text(56, " Dropdown button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "ul", 22)(58, "li")(59, "a", 18);
      \u0275\u0275text(60, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(61, "li")(62, "a", 18);
      \u0275\u0275text(63, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(64, "li")(65, "a", 18);
      \u0275\u0275text(66, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(67, "div", 10)(68, "div", 11)(69, "div", 12)(70, "h5", 13);
      \u0275\u0275text(71, "Single dropdown buttons");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(72, "div", 20)(73, "div", 23)(74, "div", 24)(75, "button", 16);
      \u0275\u0275text(76, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(77, "ul", 17)(78, "li")(79, "a", 18);
      \u0275\u0275text(80, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(81, "li")(82, "a", 18);
      \u0275\u0275text(83, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(84, "li")(85, "a", 18);
      \u0275\u0275text(86, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(87, "li");
      \u0275\u0275domElement(88, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(89, "li")(90, "a", 18);
      \u0275\u0275text(91, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(92, "div", 24)(93, "button", 26);
      \u0275\u0275text(94, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "ul", 17)(96, "li")(97, "a", 18);
      \u0275\u0275text(98, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(99, "li")(100, "a", 18);
      \u0275\u0275text(101, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(102, "li")(103, "a", 18);
      \u0275\u0275text(104, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(105, "li");
      \u0275\u0275domElement(106, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(107, "li")(108, "a", 18);
      \u0275\u0275text(109, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(110, "div", 24)(111, "button", 27);
      \u0275\u0275text(112, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(113, "ul", 17)(114, "li")(115, "a", 18);
      \u0275\u0275text(116, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(117, "li")(118, "a", 18);
      \u0275\u0275text(119, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(120, "li")(121, "a", 18);
      \u0275\u0275text(122, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(123, "li");
      \u0275\u0275domElement(124, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "li")(126, "a", 18);
      \u0275\u0275text(127, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(128, "div", 24)(129, "button", 28);
      \u0275\u0275text(130, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(131, "ul", 17)(132, "li")(133, "a", 18);
      \u0275\u0275text(134, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(135, "li")(136, "a", 18);
      \u0275\u0275text(137, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(138, "li")(139, "a", 18);
      \u0275\u0275text(140, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(141, "li");
      \u0275\u0275domElement(142, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(143, "li")(144, "a", 18);
      \u0275\u0275text(145, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(146, "div", 24)(147, "button", 29);
      \u0275\u0275text(148, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(149, "ul", 17)(150, "li")(151, "a", 18);
      \u0275\u0275text(152, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(153, "li")(154, "a", 18);
      \u0275\u0275text(155, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(156, "li")(157, "a", 18);
      \u0275\u0275text(158, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(159, "li");
      \u0275\u0275domElement(160, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(161, "li")(162, "a", 18);
      \u0275\u0275text(163, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(164, "div", 24)(165, "button", 30);
      \u0275\u0275text(166, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(167, "ul", 17)(168, "li")(169, "a", 18);
      \u0275\u0275text(170, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(171, "li")(172, "a", 18);
      \u0275\u0275text(173, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(174, "li")(175, "a", 18);
      \u0275\u0275text(176, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(177, "li");
      \u0275\u0275domElement(178, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(179, "li")(180, "a", 18);
      \u0275\u0275text(181, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(182, "div", 10)(183, "div", 11)(184, "div", 12)(185, "h5", 13);
      \u0275\u0275text(186, "Rounded Button Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(187, "div", 20)(188, "div", 23)(189, "div", 24)(190, "button", 31);
      \u0275\u0275text(191, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(192, "ul", 17)(193, "li")(194, "a", 18);
      \u0275\u0275text(195, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(196, "li")(197, "a", 18);
      \u0275\u0275text(198, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(199, "li")(200, "a", 18);
      \u0275\u0275text(201, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(202, "li");
      \u0275\u0275domElement(203, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(204, "li")(205, "a", 18);
      \u0275\u0275text(206, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(207, "div", 24)(208, "button", 32);
      \u0275\u0275text(209, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(210, "ul", 17)(211, "li")(212, "a", 18);
      \u0275\u0275text(213, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(214, "li")(215, "a", 18);
      \u0275\u0275text(216, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(217, "li")(218, "a", 18);
      \u0275\u0275text(219, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(220, "li");
      \u0275\u0275domElement(221, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(222, "li")(223, "a", 18);
      \u0275\u0275text(224, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(225, "div", 24)(226, "button", 33);
      \u0275\u0275text(227, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(228, "ul", 17)(229, "li")(230, "a", 18);
      \u0275\u0275text(231, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(232, "li")(233, "a", 18);
      \u0275\u0275text(234, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(235, "li")(236, "a", 18);
      \u0275\u0275text(237, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(238, "li");
      \u0275\u0275domElement(239, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(240, "li")(241, "a", 18);
      \u0275\u0275text(242, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(243, "div", 24)(244, "button", 34);
      \u0275\u0275text(245, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(246, "ul", 17)(247, "li")(248, "a", 18);
      \u0275\u0275text(249, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(250, "li")(251, "a", 18);
      \u0275\u0275text(252, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(253, "li")(254, "a", 18);
      \u0275\u0275text(255, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(256, "li");
      \u0275\u0275domElement(257, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(258, "li")(259, "a", 18);
      \u0275\u0275text(260, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(261, "div", 24)(262, "button", 35);
      \u0275\u0275text(263, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(264, "ul", 17)(265, "li")(266, "a", 18);
      \u0275\u0275text(267, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(268, "li")(269, "a", 18);
      \u0275\u0275text(270, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(271, "li")(272, "a", 18);
      \u0275\u0275text(273, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(274, "li");
      \u0275\u0275domElement(275, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(276, "li")(277, "a", 18);
      \u0275\u0275text(278, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(279, "div", 24)(280, "button", 36);
      \u0275\u0275text(281, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(282, "ul", 17)(283, "li")(284, "a", 18);
      \u0275\u0275text(285, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(286, "li")(287, "a", 18);
      \u0275\u0275text(288, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(289, "li")(290, "a", 18);
      \u0275\u0275text(291, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(292, "li");
      \u0275\u0275domElement(293, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(294, "li")(295, "a", 18);
      \u0275\u0275text(296, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(297, "div", 10)(298, "div", 11)(299, "div", 12)(300, "h5", 13);
      \u0275\u0275text(301, "Outline Button Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(302, "div", 20)(303, "div", 23)(304, "div", 24)(305, "button", 37);
      \u0275\u0275text(306, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(307, "ul", 17)(308, "li")(309, "a", 18);
      \u0275\u0275text(310, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(311, "li")(312, "a", 18);
      \u0275\u0275text(313, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(314, "li")(315, "a", 18);
      \u0275\u0275text(316, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(317, "li");
      \u0275\u0275domElement(318, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(319, "li")(320, "a", 18);
      \u0275\u0275text(321, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(322, "div", 24)(323, "button", 38);
      \u0275\u0275text(324, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(325, "ul", 17)(326, "li")(327, "a", 18);
      \u0275\u0275text(328, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(329, "li")(330, "a", 18);
      \u0275\u0275text(331, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(332, "li")(333, "a", 18);
      \u0275\u0275text(334, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(335, "li");
      \u0275\u0275domElement(336, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(337, "li")(338, "a", 18);
      \u0275\u0275text(339, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(340, "div", 24)(341, "button", 39);
      \u0275\u0275text(342, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(343, "ul", 17)(344, "li")(345, "a", 18);
      \u0275\u0275text(346, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(347, "li")(348, "a", 18);
      \u0275\u0275text(349, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(350, "li")(351, "a", 18);
      \u0275\u0275text(352, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(353, "li");
      \u0275\u0275domElement(354, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(355, "li")(356, "a", 18);
      \u0275\u0275text(357, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(358, "div", 24)(359, "button", 40);
      \u0275\u0275text(360, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(361, "ul", 17)(362, "li")(363, "a", 18);
      \u0275\u0275text(364, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(365, "li")(366, "a", 18);
      \u0275\u0275text(367, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(368, "li")(369, "a", 18);
      \u0275\u0275text(370, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(371, "li");
      \u0275\u0275domElement(372, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(373, "li")(374, "a", 18);
      \u0275\u0275text(375, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(376, "div", 24)(377, "button", 41);
      \u0275\u0275text(378, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(379, "ul", 17)(380, "li")(381, "a", 18);
      \u0275\u0275text(382, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(383, "li")(384, "a", 18);
      \u0275\u0275text(385, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(386, "li")(387, "a", 18);
      \u0275\u0275text(388, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(389, "li");
      \u0275\u0275domElement(390, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(391, "li")(392, "a", 18);
      \u0275\u0275text(393, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(394, "div", 24)(395, "button", 42);
      \u0275\u0275text(396, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(397, "ul", 17)(398, "li")(399, "a", 18);
      \u0275\u0275text(400, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(401, "li")(402, "a", 18);
      \u0275\u0275text(403, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(404, "li")(405, "a", 18);
      \u0275\u0275text(406, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(407, "li");
      \u0275\u0275domElement(408, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(409, "li")(410, "a", 18);
      \u0275\u0275text(411, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(412, "div", 10)(413, "div", 11)(414, "div", 12)(415, "h5", 13);
      \u0275\u0275text(416, "Rounded Outline Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(417, "div", 20)(418, "div", 23)(419, "div", 24)(420, "button", 43);
      \u0275\u0275text(421, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(422, "ul", 17)(423, "li")(424, "a", 18);
      \u0275\u0275text(425, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(426, "li")(427, "a", 18);
      \u0275\u0275text(428, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(429, "li")(430, "a", 18);
      \u0275\u0275text(431, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(432, "li");
      \u0275\u0275domElement(433, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(434, "li")(435, "a", 18);
      \u0275\u0275text(436, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(437, "div", 24)(438, "button", 44);
      \u0275\u0275text(439, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(440, "ul", 17)(441, "li")(442, "a", 18);
      \u0275\u0275text(443, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(444, "li")(445, "a", 18);
      \u0275\u0275text(446, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(447, "li")(448, "a", 18);
      \u0275\u0275text(449, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(450, "li");
      \u0275\u0275domElement(451, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(452, "li")(453, "a", 18);
      \u0275\u0275text(454, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(455, "div", 24)(456, "button", 45);
      \u0275\u0275text(457, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(458, "ul", 17)(459, "li")(460, "a", 18);
      \u0275\u0275text(461, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(462, "li")(463, "a", 18);
      \u0275\u0275text(464, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(465, "li")(466, "a", 18);
      \u0275\u0275text(467, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(468, "li");
      \u0275\u0275domElement(469, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(470, "li")(471, "a", 18);
      \u0275\u0275text(472, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(473, "div", 24)(474, "button", 46);
      \u0275\u0275text(475, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(476, "ul", 17)(477, "li")(478, "a", 18);
      \u0275\u0275text(479, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(480, "li")(481, "a", 18);
      \u0275\u0275text(482, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(483, "li")(484, "a", 18);
      \u0275\u0275text(485, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(486, "li");
      \u0275\u0275domElement(487, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(488, "li")(489, "a", 18);
      \u0275\u0275text(490, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(491, "div", 24)(492, "button", 47);
      \u0275\u0275text(493, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(494, "ul", 17)(495, "li")(496, "a", 18);
      \u0275\u0275text(497, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(498, "li")(499, "a", 18);
      \u0275\u0275text(500, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(501, "li")(502, "a", 18);
      \u0275\u0275text(503, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(504, "li");
      \u0275\u0275domElement(505, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(506, "li")(507, "a", 18);
      \u0275\u0275text(508, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(509, "div", 24)(510, "button", 48);
      \u0275\u0275text(511, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(512, "ul", 17)(513, "li")(514, "a", 18);
      \u0275\u0275text(515, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(516, "li")(517, "a", 18);
      \u0275\u0275text(518, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(519, "li")(520, "a", 18);
      \u0275\u0275text(521, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(522, "li");
      \u0275\u0275domElement(523, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(524, "li")(525, "a", 18);
      \u0275\u0275text(526, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(527, "div", 10)(528, "div", 11)(529, "div", 12)(530, "h5", 13);
      \u0275\u0275text(531, "Soft Button Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(532, "div", 20)(533, "div", 49)(534, "div", 24)(535, "button", 50);
      \u0275\u0275text(536, " Primary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(537, "ul", 17)(538, "li")(539, "a", 18);
      \u0275\u0275text(540, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(541, "li")(542, "a", 18);
      \u0275\u0275text(543, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(544, "li")(545, "a", 18);
      \u0275\u0275text(546, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(547, "li");
      \u0275\u0275domElement(548, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(549, "li")(550, "a", 18);
      \u0275\u0275text(551, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(552, "div", 24)(553, "button", 51);
      \u0275\u0275text(554, " Secondary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(555, "ul", 17)(556, "li")(557, "a", 18);
      \u0275\u0275text(558, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(559, "li")(560, "a", 18);
      \u0275\u0275text(561, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(562, "li")(563, "a", 18);
      \u0275\u0275text(564, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(565, "li");
      \u0275\u0275domElement(566, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(567, "li")(568, "a", 18);
      \u0275\u0275text(569, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(570, "div", 24)(571, "button", 52);
      \u0275\u0275text(572, " Success ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(573, "ul", 17)(574, "li")(575, "a", 18);
      \u0275\u0275text(576, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(577, "li")(578, "a", 18);
      \u0275\u0275text(579, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(580, "li")(581, "a", 18);
      \u0275\u0275text(582, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(583, "li");
      \u0275\u0275domElement(584, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(585, "li")(586, "a", 18);
      \u0275\u0275text(587, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(588, "div", 24)(589, "button", 53);
      \u0275\u0275text(590, " Info ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(591, "ul", 17)(592, "li")(593, "a", 18);
      \u0275\u0275text(594, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(595, "li")(596, "a", 18);
      \u0275\u0275text(597, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(598, "li")(599, "a", 18);
      \u0275\u0275text(600, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(601, "li");
      \u0275\u0275domElement(602, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(603, "li")(604, "a", 18);
      \u0275\u0275text(605, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(606, "div", 24)(607, "button", 54);
      \u0275\u0275text(608, " Warning ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(609, "ul", 17)(610, "li")(611, "a", 18);
      \u0275\u0275text(612, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(613, "li")(614, "a", 18);
      \u0275\u0275text(615, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(616, "li")(617, "a", 18);
      \u0275\u0275text(618, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(619, "li");
      \u0275\u0275domElement(620, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(621, "li")(622, "a", 18);
      \u0275\u0275text(623, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(624, "div", 24)(625, "button", 55);
      \u0275\u0275text(626, " Danger ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(627, "ul", 17)(628, "li")(629, "a", 18);
      \u0275\u0275text(630, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(631, "li")(632, "a", 18);
      \u0275\u0275text(633, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(634, "li")(635, "a", 18);
      \u0275\u0275text(636, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(637, "li");
      \u0275\u0275domElement(638, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(639, "li")(640, "a", 18);
      \u0275\u0275text(641, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(642, "div", 10)(643, "div", 11)(644, "div", 12)(645, "h5", 13);
      \u0275\u0275text(646, "Rounded Soft Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(647, "div", 20)(648, "div", 49)(649, "div", 24)(650, "button", 56);
      \u0275\u0275text(651, " Primary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(652, "ul", 17)(653, "li")(654, "a", 18);
      \u0275\u0275text(655, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(656, "li")(657, "a", 18);
      \u0275\u0275text(658, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(659, "li")(660, "a", 18);
      \u0275\u0275text(661, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(662, "li");
      \u0275\u0275domElement(663, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(664, "li")(665, "a", 18);
      \u0275\u0275text(666, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(667, "div", 24)(668, "button", 57);
      \u0275\u0275text(669, " Secondary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(670, "ul", 17)(671, "li")(672, "a", 18);
      \u0275\u0275text(673, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(674, "li")(675, "a", 18);
      \u0275\u0275text(676, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(677, "li")(678, "a", 18);
      \u0275\u0275text(679, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(680, "li");
      \u0275\u0275domElement(681, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(682, "li")(683, "a", 18);
      \u0275\u0275text(684, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(685, "div", 24)(686, "button", 58);
      \u0275\u0275text(687, " Success ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(688, "ul", 17)(689, "li")(690, "a", 18);
      \u0275\u0275text(691, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(692, "li")(693, "a", 18);
      \u0275\u0275text(694, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(695, "li")(696, "a", 18);
      \u0275\u0275text(697, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(698, "li");
      \u0275\u0275domElement(699, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(700, "li")(701, "a", 18);
      \u0275\u0275text(702, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(703, "div", 24)(704, "button", 59);
      \u0275\u0275text(705, " Info ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(706, "ul", 17)(707, "li")(708, "a", 18);
      \u0275\u0275text(709, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(710, "li")(711, "a", 18);
      \u0275\u0275text(712, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(713, "li")(714, "a", 18);
      \u0275\u0275text(715, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(716, "li");
      \u0275\u0275domElement(717, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(718, "li")(719, "a", 18);
      \u0275\u0275text(720, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(721, "div", 24)(722, "button", 60);
      \u0275\u0275text(723, " Warning ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(724, "ul", 17)(725, "li")(726, "a", 18);
      \u0275\u0275text(727, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(728, "li")(729, "a", 18);
      \u0275\u0275text(730, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(731, "li")(732, "a", 18);
      \u0275\u0275text(733, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(734, "li");
      \u0275\u0275domElement(735, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(736, "li")(737, "a", 18);
      \u0275\u0275text(738, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(739, "div", 24)(740, "button", 61);
      \u0275\u0275text(741, " Danger ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(742, "ul", 17)(743, "li")(744, "a", 18);
      \u0275\u0275text(745, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(746, "li")(747, "a", 18);
      \u0275\u0275text(748, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(749, "li")(750, "a", 18);
      \u0275\u0275text(751, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(752, "li");
      \u0275\u0275domElement(753, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(754, "li")(755, "a", 18);
      \u0275\u0275text(756, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(757, "div", 10)(758, "div", 11)(759, "div", 12)(760, "h5", 13);
      \u0275\u0275text(761, "Split button dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(762, "div", 62)(763, "div", 63)(764, "button", 64);
      \u0275\u0275text(765, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(766, "button", 65)(767, "span", 66);
      \u0275\u0275text(768, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(769, "ul", 17)(770, "li")(771, "a", 18);
      \u0275\u0275text(772, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(773, "li")(774, "a", 18);
      \u0275\u0275text(775, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(776, "li")(777, "a", 18);
      \u0275\u0275text(778, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(779, "li");
      \u0275\u0275domElement(780, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(781, "li")(782, "a", 18);
      \u0275\u0275text(783, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(784, "div", 63)(785, "button", 67);
      \u0275\u0275text(786, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(787, "button", 68)(788, "span", 66);
      \u0275\u0275text(789, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(790, "ul", 17)(791, "li")(792, "a", 18);
      \u0275\u0275text(793, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(794, "li")(795, "a", 18);
      \u0275\u0275text(796, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(797, "li")(798, "a", 18);
      \u0275\u0275text(799, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(800, "li");
      \u0275\u0275domElement(801, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(802, "li")(803, "a", 18);
      \u0275\u0275text(804, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(805, "div", 63)(806, "button", 69);
      \u0275\u0275text(807, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(808, "button", 70)(809, "span", 66);
      \u0275\u0275text(810, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(811, "ul", 17)(812, "li")(813, "a", 18);
      \u0275\u0275text(814, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(815, "li")(816, "a", 18);
      \u0275\u0275text(817, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(818, "li")(819, "a", 18);
      \u0275\u0275text(820, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(821, "li");
      \u0275\u0275domElement(822, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(823, "li")(824, "a", 18);
      \u0275\u0275text(825, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(826, "div", 63)(827, "button", 71);
      \u0275\u0275text(828, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(829, "button", 72)(830, "span", 66);
      \u0275\u0275text(831, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(832, "ul", 17)(833, "li")(834, "a", 18);
      \u0275\u0275text(835, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(836, "li")(837, "a", 18);
      \u0275\u0275text(838, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(839, "li")(840, "a", 18);
      \u0275\u0275text(841, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(842, "li");
      \u0275\u0275domElement(843, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(844, "li")(845, "a", 18);
      \u0275\u0275text(846, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(847, "div", 63)(848, "button", 73);
      \u0275\u0275text(849, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(850, "button", 74)(851, "span", 66);
      \u0275\u0275text(852, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(853, "ul", 17)(854, "li")(855, "a", 18);
      \u0275\u0275text(856, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(857, "li")(858, "a", 18);
      \u0275\u0275text(859, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(860, "li")(861, "a", 18);
      \u0275\u0275text(862, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(863, "li");
      \u0275\u0275domElement(864, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(865, "li")(866, "a", 18);
      \u0275\u0275text(867, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(868, "div", 63)(869, "button", 75);
      \u0275\u0275text(870, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(871, "button", 76)(872, "span", 66);
      \u0275\u0275text(873, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(874, "ul", 17)(875, "li")(876, "a", 18);
      \u0275\u0275text(877, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(878, "li")(879, "a", 18);
      \u0275\u0275text(880, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(881, "li")(882, "a", 18);
      \u0275\u0275text(883, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(884, "li");
      \u0275\u0275domElement(885, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(886, "li")(887, "a", 18);
      \u0275\u0275text(888, "Separated link");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(889, "div", 10)(890, "div", 11)(891, "div", 12)(892, "h5", 13);
      \u0275\u0275text(893, "Dropdown Sizing");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(894, "div", 62)(895, "div", 77)(896, "button", 78);
      \u0275\u0275text(897, " Large button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(898, "ul", 17)(899, "li")(900, "a", 18);
      \u0275\u0275text(901, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(902, "li")(903, "a", 18);
      \u0275\u0275text(904, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(905, "li")(906, "a", 18);
      \u0275\u0275text(907, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(908, "li");
      \u0275\u0275domElement(909, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(910, "li")(911, "a", 18);
      \u0275\u0275text(912, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(913, "div", 77)(914, "button", 79);
      \u0275\u0275text(915, " Large split button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(916, "button", 80)(917, "span", 66);
      \u0275\u0275text(918, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(919, "ul", 17)(920, "li")(921, "a", 18);
      \u0275\u0275text(922, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(923, "li")(924, "a", 18);
      \u0275\u0275text(925, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(926, "li")(927, "a", 18);
      \u0275\u0275text(928, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(929, "li");
      \u0275\u0275domElement(930, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(931, "li")(932, "a", 18);
      \u0275\u0275text(933, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(934, "div", 77)(935, "button", 81);
      \u0275\u0275text(936, " Small button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(937, "ul", 17)(938, "li")(939, "a", 18);
      \u0275\u0275text(940, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(941, "li")(942, "a", 18);
      \u0275\u0275text(943, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(944, "li")(945, "a", 18);
      \u0275\u0275text(946, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(947, "li");
      \u0275\u0275domElement(948, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(949, "li")(950, "a", 18);
      \u0275\u0275text(951, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(952, "div", 63)(953, "button", 82);
      \u0275\u0275text(954, " Small split button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(955, "button", 83)(956, "span", 66);
      \u0275\u0275text(957, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(958, "ul", 17)(959, "li")(960, "a", 18);
      \u0275\u0275text(961, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(962, "li")(963, "a", 18);
      \u0275\u0275text(964, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(965, "li")(966, "a", 18);
      \u0275\u0275text(967, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(968, "li");
      \u0275\u0275domElement(969, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(970, "li")(971, "a", 18);
      \u0275\u0275text(972, "Separated link");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(973, "div", 10)(974, "div", 11)(975, "div", 12)(976, "h5", 13);
      \u0275\u0275text(977, "Active");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(978, "div", 20)(979, "p", 84);
      \u0275\u0275text(980, "Add ");
      \u0275\u0275domElementStart(981, "code");
      \u0275\u0275text(982, ".active");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(983, " to item in the dropdown to ");
      \u0275\u0275domElementStart(984, "strong");
      \u0275\u0275text(985, "style them as active");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(986, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(987, "button", 16);
      \u0275\u0275text(988, " Dropstart ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(989, "ul", 17)(990, "li")(991, "a", 18);
      \u0275\u0275text(992, "Regular link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(993, "li")(994, "a", 85);
      \u0275\u0275text(995, "Active link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(996, "li")(997, "a", 18);
      \u0275\u0275text(998, "Another link");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(999, "div", 10)(1e3, "div", 11)(1001, "div", 12)(1002, "h5", 13);
      \u0275\u0275text(1003, "Disabled");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1004, "div", 20)(1005, "p", 84);
      \u0275\u0275text(1006, "Add ");
      \u0275\u0275domElementStart(1007, "code");
      \u0275\u0275text(1008, ".disabled");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1009, " to items in the dropdown to ");
      \u0275\u0275domElementStart(1010, "strong");
      \u0275\u0275text(1011, "style them as disabled");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1012, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1013, "button", 16);
      \u0275\u0275text(1014, " Dropstart ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1015, "ul", 17)(1016, "li")(1017, "a", 18);
      \u0275\u0275text(1018, "Regular link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1019, "li")(1020, "a", 85);
      \u0275\u0275text(1021, "Active link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1022, "li")(1023, "a", 18);
      \u0275\u0275text(1024, "Another link");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(1025, "div", 10)(1026, "div", 11)(1027, "div", 12)(1028, "h5", 13);
      \u0275\u0275text(1029, "Dropdown menu centered");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1030, "div", 20)(1031, "p", 86);
      \u0275\u0275text(1032, "Use ");
      \u0275\u0275domElementStart(1033, "code");
      \u0275\u0275text(1034, ".dropdown-center");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1035, " on the parent element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1036, "div", 87)(1037, "button", 88);
      \u0275\u0275text(1038, " Centered dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1039, "ul", 89)(1040, "li")(1041, "a", 18);
      \u0275\u0275text(1042, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1043, "li")(1044, "a", 18);
      \u0275\u0275text(1045, "Action two");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1046, "li")(1047, "a", 18);
      \u0275\u0275text(1048, "Action three");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1049, "div", 10)(1050, "div", 11)(1051, "div", 12)(1052, "h5", 13);
      \u0275\u0275text(1053, "Dropup Centered");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1054, "div", 20)(1055, "p", 86);
      \u0275\u0275text(1056, "Use ");
      \u0275\u0275domElementStart(1057, "code");
      \u0275\u0275text(1058, ".dropup-center");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1059, " on the parent element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1060, "div", 90)(1061, "button", 91);
      \u0275\u0275text(1062, " Centered dropup ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1063, "ul", 92)(1064, "li")(1065, "a", 18);
      \u0275\u0275text(1066, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1067, "li")(1068, "a", 18);
      \u0275\u0275text(1069, "Action two");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1070, "li")(1071, "a", 18);
      \u0275\u0275text(1072, "Action three");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1073, "div", 10)(1074, "div", 11)(1075, "div", 12)(1076, "h5", 13);
      \u0275\u0275text(1077, "Menu Items");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1078, "div", 20)(1079, "p", 86);
      \u0275\u0275text(1080, "You can use ");
      \u0275\u0275domElementStart(1081, "code");
      \u0275\u0275text(1082, "<a>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1083, " or ");
      \u0275\u0275domElementStart(1084, "code");
      \u0275\u0275text(1085, "<button>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1086, " as dropdown items.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1087, "div", 15)(1088, "button", 93);
      \u0275\u0275text(1089, " Dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1090, "ul", 94)(1091, "li")(1092, "button", 95);
      \u0275\u0275text(1093, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1094, "li")(1095, "button", 95);
      \u0275\u0275text(1096, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1097, "li")(1098, "button", 95);
      \u0275\u0275text(1099, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1100, "div", 10)(1101, "div", 11)(1102, "div", 12)(1103, "h5", 13);
      \u0275\u0275text(1104, "Dropdown Options");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1105, "div", 20)(1106, "p", 86);
      \u0275\u0275text(1107, "Use ");
      \u0275\u0275domElementStart(1108, "code");
      \u0275\u0275text(1109, "data-bs-offset");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1110, " or ");
      \u0275\u0275domElementStart(1111, "code");
      \u0275\u0275text(1112, "data-bs-reference");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1113, " to change the location of the dropdown.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1114, "div", 96)(1115, "div", 97)(1116, "button", 98);
      \u0275\u0275text(1117, " Offset ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1118, "ul", 99)(1119, "li")(1120, "a", 18);
      \u0275\u0275text(1121, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1122, "li")(1123, "a", 18);
      \u0275\u0275text(1124, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1125, "li")(1126, "a", 18);
      \u0275\u0275text(1127, "Something else here");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1128, "div", 24)(1129, "button", 69);
      \u0275\u0275text(1130, "Reference");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1131, "button", 100)(1132, "span", 66);
      \u0275\u0275text(1133, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1134, "ul", 101)(1135, "li")(1136, "a", 18);
      \u0275\u0275text(1137, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1138, "li")(1139, "a", 18);
      \u0275\u0275text(1140, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1141, "li")(1142, "a", 18);
      \u0275\u0275text(1143, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1144, "li");
      \u0275\u0275domElement(1145, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1146, "li")(1147, "a", 18);
      \u0275\u0275text(1148, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(1149, "div", 10)(1150, "div", 11)(1151, "div", 12)(1152, "h5", 13);
      \u0275\u0275text(1153, "Auto close behavior");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1154, "div", 20)(1155, "p");
      \u0275\u0275text(1156, "You can use the ");
      \u0275\u0275domElementStart(1157, "code");
      \u0275\u0275text(1158, "autoClose");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1159, " option to change this behavior of the dropdown.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1160, "div", 102)(1161, "div", 24)(1162, "button", 103);
      \u0275\u0275text(1163, " Default dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1164, "ul", 104)(1165, "li")(1166, "a", 18);
      \u0275\u0275text(1167, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1168, "li")(1169, "a", 18);
      \u0275\u0275text(1170, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1171, "li")(1172, "a", 18);
      \u0275\u0275text(1173, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1174, "div", 24)(1175, "button", 105);
      \u0275\u0275text(1176, " Clickable outside ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1177, "ul", 106)(1178, "li")(1179, "a", 18);
      \u0275\u0275text(1180, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1181, "li")(1182, "a", 18);
      \u0275\u0275text(1183, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1184, "li")(1185, "a", 18);
      \u0275\u0275text(1186, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1187, "div", 24)(1188, "button", 107);
      \u0275\u0275text(1189, " Clickable inside ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1190, "ul", 108)(1191, "li")(1192, "a", 18);
      \u0275\u0275text(1193, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1194, "li")(1195, "a", 18);
      \u0275\u0275text(1196, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1197, "li")(1198, "a", 18);
      \u0275\u0275text(1199, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1200, "div", 24)(1201, "button", 109);
      \u0275\u0275text(1202, " Manual close ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1203, "ul", 110)(1204, "li")(1205, "a", 18);
      \u0275\u0275text(1206, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1207, "li")(1208, "a", 18);
      \u0275\u0275text(1209, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1210, "li")(1211, "a", 18);
      \u0275\u0275text(1212, "Menu item");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(1213, "div", 10)(1214, "div", 11)(1215, "div", 12)(1216, "h5", 13);
      \u0275\u0275text(1217, "Alignment Options");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1218, "div", 20)(1219, "div", 102)(1220, "div", 24)(1221, "button", 111);
      \u0275\u0275text(1222, " Dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1223, "ul", 112)(1224, "li")(1225, "a", 18);
      \u0275\u0275text(1226, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1227, "li")(1228, "a", 18);
      \u0275\u0275text(1229, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1230, "li")(1231, "a", 18);
      \u0275\u0275text(1232, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1233, "div", 24)(1234, "button", 113);
      \u0275\u0275text(1235, " Right-aligned menu ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1236, "ul", 114)(1237, "li")(1238, "a", 18);
      \u0275\u0275text(1239, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1240, "li")(1241, "a", 18);
      \u0275\u0275text(1242, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1243, "li")(1244, "a", 18);
      \u0275\u0275text(1245, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1246, "div", 24)(1247, "button", 115);
      \u0275\u0275text(1248, " Left-aligned, right-aligned lg ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1249, "ul", 116)(1250, "li")(1251, "a", 18);
      \u0275\u0275text(1252, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1253, "li")(1254, "a", 18);
      \u0275\u0275text(1255, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1256, "li")(1257, "a", 18);
      \u0275\u0275text(1258, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1259, "div", 24)(1260, "button", 117);
      \u0275\u0275text(1261, " Right-aligned, left-aligned lg ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1262, "ul", 118)(1263, "li")(1264, "a", 18);
      \u0275\u0275text(1265, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1266, "li")(1267, "a", 18);
      \u0275\u0275text(1268, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1269, "li")(1270, "a", 18);
      \u0275\u0275text(1271, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1272, "div", 119)(1273, "button", 120);
      \u0275\u0275text(1274, " Dropstart ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1275, "ul", 17)(1276, "li")(1277, "a", 18);
      \u0275\u0275text(1278, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1279, "li")(1280, "a", 18);
      \u0275\u0275text(1281, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1282, "li")(1283, "a", 18);
      \u0275\u0275text(1284, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1285, "div", 121)(1286, "button", 122);
      \u0275\u0275text(1287, " Dropend ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1288, "ul", 17)(1289, "li")(1290, "a", 18);
      \u0275\u0275text(1291, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1292, "li")(1293, "a", 18);
      \u0275\u0275text(1294, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1295, "li")(1296, "a", 18);
      \u0275\u0275text(1297, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1298, "div", 123)(1299, "button", 124);
      \u0275\u0275text(1300, " Dropup ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1301, "ul", 17)(1302, "li")(1303, "a", 18);
      \u0275\u0275text(1304, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1305, "li")(1306, "a", 18);
      \u0275\u0275text(1307, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1308, "li")(1309, "a", 18);
      \u0275\u0275text(1310, "Menu item");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(1311, "div", 10)(1312, "div", 11)(1313, "div", 12)(1314, "h5", 13);
      \u0275\u0275text(1315, "Dropdowns with Forms");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1316, "div", 20)(1317, "p");
      \u0275\u0275text(1318, "Put a form within a dropdown menu, or make it into a dropdown menu");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1319, "button", 125);
      \u0275\u0275text(1320, " Dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1321, "div", 17)(1322, "form", 126)(1323, "div", 127)(1324, "label", 128);
      \u0275\u0275text(1325, "Email address");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(1326, "input", 129);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1327, "div", 127)(1328, "label", 130);
      \u0275\u0275text(1329, "Password");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(1330, "input", 131);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1331, "div", 127)(1332, "div", 132);
      \u0275\u0275domElement(1333, "input", 133);
      \u0275\u0275domElementStart(1334, "label", 134);
      \u0275\u0275text(1335, " Remember me ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(1336, "button", 135);
      \u0275\u0275text(1337, "Sign in");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(1338, "div", 25);
      \u0275\u0275domElementStart(1339, "a", 18);
      \u0275\u0275text(1340, "New around here? Sign up");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1341, "a", 18);
      \u0275\u0275text(1342, "Forgot password?");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(1343, "div", 10)(1344, "div", 11)(1345, "div", 12)(1346, "h5", 13);
      \u0275\u0275text(1347, "Menu Alignment");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1348, "div", 20)(1349, "p", 84);
      \u0275\u0275text(1350, " Add ");
      \u0275\u0275domElementStart(1351, "code");
      \u0275\u0275text(1352, ".dropdown-menu-end");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1353, " to a ");
      \u0275\u0275domElementStart(1354, "code");
      \u0275\u0275text(1355, ".dropdown-menu");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1356, " to right align the dropdown menu. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1357, "div", 24)(1358, "button", 16);
      \u0275\u0275text(1359, " Right-aligned menu example ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1360, "ul", 114)(1361, "li")(1362, "button", 95);
      \u0275\u0275text(1363, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1364, "li")(1365, "button", 95);
      \u0275\u0275text(1366, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1367, "li")(1368, "button", 95);
      \u0275\u0275text(1369, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1370, "div", 10)(1371, "div", 11)(1372, "div", 12)(1373, "h5", 13);
      \u0275\u0275text(1374, "Responsive alignment end");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1375, "div", 20)(1376, "p", 84);
      \u0275\u0275text(1377, "To align ");
      \u0275\u0275domElementStart(1378, "strong");
      \u0275\u0275text(1379, "right");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1380, " the dropdown menu with the given breakpoint or larger, add ");
      \u0275\u0275domElementStart(1381, "code");
      \u0275\u0275text(1382);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1383, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1384, "div", 24)(1385, "button", 136);
      \u0275\u0275text(1386, " Left-aligned but right aligned when large screen ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1387, "ul", 116)(1388, "li")(1389, "button", 95);
      \u0275\u0275text(1390, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1391, "li")(1392, "button", 95);
      \u0275\u0275text(1393, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1394, "li")(1395, "button", 95);
      \u0275\u0275text(1396, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1397, "div", 10)(1398, "div", 11)(1399, "div", 12)(1400, "h5", 13);
      \u0275\u0275text(1401, "Responsive alignment left");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1402, "div", 20)(1403, "p", 84);
      \u0275\u0275text(1404, "To align ");
      \u0275\u0275domElementStart(1405, "strong");
      \u0275\u0275text(1406, "left");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1407, " the dropdown menu with the given breakpoint or larger, add ");
      \u0275\u0275domElementStart(1408, "code");
      \u0275\u0275text(1409, ".dropdown-menu-end");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1410, " and ");
      \u0275\u0275domElementStart(1411, "code");
      \u0275\u0275text(1412);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1413, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1414, "div", 24)(1415, "button", 137);
      \u0275\u0275text(1416, " Left-aligned but right aligned when large screen ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1417, "ul", 138)(1418, "li")(1419, "button", 95);
      \u0275\u0275text(1420, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1421, "li")(1422, "button", 95);
      \u0275\u0275text(1423, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1424, "li")(1425, "button", 95);
      \u0275\u0275text(1426, "Something else here");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(1427, "div", 9)(1428, "div", 10)(1429, "div", 11)(1430, "div", 12)(1431, "h5", 13);
      \u0275\u0275text(1432, "Custom Dropdown Arrow");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1433, "div", 20)(1434, "p", 84);
      \u0275\u0275text(1435, " Any single ");
      \u0275\u0275domElementStart(1436, "code");
      \u0275\u0275text(1437, ".btn");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1438, " can be turned into a dropdown toggle with some markup changes. Here\u2019s how you can put them to work with either ");
      \u0275\u0275domElementStart(1439, "code");
      \u0275\u0275text(1440, "<button>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1441, " elements: ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1442, "div", 9)(1443, "div", 139)(1444, "div", 15)(1445, "button", 140);
      \u0275\u0275text(1446, " Without Arrow ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1447, "ul", 141)(1448, "li")(1449, "a", 18);
      \u0275\u0275text(1450, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1451, "li")(1452, "a", 18);
      \u0275\u0275text(1453, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1454, "li")(1455, "a", 18);
      \u0275\u0275text(1456, "Something else here");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(1457, "div", 139)(1458, "div", 15)(1459, "button", 142);
      \u0275\u0275text(1460, " Tabler Icon ");
      \u0275\u0275domElement(1461, "i", 143);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1462, "ul", 144)(1463, "li")(1464, "a", 18);
      \u0275\u0275text(1465, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1466, "li")(1467, "a", 18);
      \u0275\u0275text(1468, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1469, "li")(1470, "a", 18);
      \u0275\u0275text(1471, "Something else here");
      \u0275\u0275domElementEnd()()()()()()()()();
      \u0275\u0275domElementStart(1472, "div", 10)(1473, "div", 11)(1474, "div", 12)(1475, "h5", 13);
      \u0275\u0275text(1476, "Dropup Variation");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1477, "div", 20)(1478, "p", 84);
      \u0275\u0275text(1479, "Trigger dropdown menus above elements by adding ");
      \u0275\u0275domElementStart(1480, "code");
      \u0275\u0275text(1481, ".dropup");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1482, " to the parent element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1483, "div", 123)(1484, "button", 145);
      \u0275\u0275text(1485, "Dropup");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1486, "ul", 17)(1487, "li")(1488, "a", 18);
      \u0275\u0275text(1489, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1490, "li")(1491, "a", 18);
      \u0275\u0275text(1492, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1493, "li")(1494, "a", 18);
      \u0275\u0275text(1495, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1496, "li");
      \u0275\u0275domElement(1497, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1498, "li")(1499, "a", 18);
      \u0275\u0275text(1500, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1501, "div", 123)(1502, "button", 146);
      \u0275\u0275text(1503, " Split dropup ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1504, "button", 147)(1505, "span", 66);
      \u0275\u0275text(1506, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1507, "ul", 17)(1508, "li")(1509, "a", 18);
      \u0275\u0275text(1510, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1511, "li")(1512, "a", 18);
      \u0275\u0275text(1513, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1514, "li")(1515, "a", 18);
      \u0275\u0275text(1516, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1517, "li");
      \u0275\u0275domElement(1518, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1519, "li")(1520, "a", 18);
      \u0275\u0275text(1521, "Separated link");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1522, "div", 10)(1523, "div", 11)(1524, "div", 12)(1525, "h5", 13);
      \u0275\u0275text(1526, "Dropstart Variation");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1527, "div", 20)(1528, "p", 84);
      \u0275\u0275text(1529, "Trigger dropdown menus at the right of the elements by adding ");
      \u0275\u0275domElementStart(1530, "code");
      \u0275\u0275text(1531, ".dropleft");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1532, " to the parent element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1533, "div", 119)(1534, "button", 148);
      \u0275\u0275text(1535, " Dropstart ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1536, "ul", 17)(1537, "li")(1538, "a", 18);
      \u0275\u0275text(1539, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1540, "li")(1541, "a", 18);
      \u0275\u0275text(1542, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1543, "li")(1544, "a", 18);
      \u0275\u0275text(1545, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1546, "li");
      \u0275\u0275domElement(1547, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1548, "li")(1549, "a", 18);
      \u0275\u0275text(1550, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1551, "div", 24)(1552, "div", 149)(1553, "button", 150)(1554, "span", 66);
      \u0275\u0275text(1555, "Toggle Dropstart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1556, "ul", 17)(1557, "li")(1558, "a", 18);
      \u0275\u0275text(1559, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1560, "li")(1561, "a", 18);
      \u0275\u0275text(1562, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1563, "li")(1564, "a", 18);
      \u0275\u0275text(1565, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1566, "li");
      \u0275\u0275domElement(1567, "hr", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1568, "li")(1569, "a", 18);
      \u0275\u0275text(1570, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1571, "button", 67);
      \u0275\u0275text(1572, " Split dropstart ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(1573, "div", 10)(1574, "div", 11)(1575, "div", 12)(1576, "h5", 13);
      \u0275\u0275text(1577, "Headers");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1578, "div", 20)(1579, "p", 84);
      \u0275\u0275text(1580, "Add a header to label sections of actions in any dropdown menu. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1581, "div", 24)(1582, "button", 148);
      \u0275\u0275text(1583, " Header ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1584, "div", 17)(1585, "h6", 151);
      \u0275\u0275text(1586, "Dropdown header");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1587, "a", 18);
      \u0275\u0275text(1588, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1589, "a", 18);
      \u0275\u0275text(1590, "Another action");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(1591, "div", 10)(1592, "div", 11)(1593, "div", 12)(1594, "h5", 13);
      \u0275\u0275text(1595, "Text");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1596, "div", 20)(1597, "p", 84);
      \u0275\u0275text(1598, "Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you\u2019ll likely need additional sizing styles to constrain the menu width.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1599, "div", 24)(1600, "button", 152);
      \u0275\u0275text(1601, " Text Dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1602, "div", 153)(1603, "p");
      \u0275\u0275text(1604, " Some example text that's free-flowing within the dropdown menu. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1605, "p", 154);
      \u0275\u0275text(1606, " And this is more example text. ");
      \u0275\u0275domElementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(1382);
      \u0275\u0275textInterpolate2(".dropdown-menu", "{", "-sm|-md|-lg|-xl|-xxl", "}", "-end");
      \u0275\u0275advance(30);
      \u0275\u0275textInterpolate2(".dropdown-menu", "{", "-sm|-md|-lg|-xl|-xxl", "}", "-start");
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownsComponent, [{
    type: Component,
    args: [{ selector: "app-dropdowns", imports: [CommonModule], template: `			<!-- Start Content -->
      <div class="">

        <!-- Page Header -->
        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div class="flex-grow-1">
                <h4 class="fs-18 fw-semibold mb-0">Dropdowns</h4>
            </div>

            <div class="text-end">
                <ol class="breadcrumb m-0 py-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                    
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                    
                    <li class="breadcrumb-item active">Dropdowns</li>
                </ol>
            </div>
      </div>
<!-- End Page Header -->
        
<!-- start row -->
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dropdowns</h5>
                    </div>
                    <div class="card-body d-flex flex-wrap gap-2">
      
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown Button
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown Link
          </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </div>
        
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dark Dropdowns</h5>
                    </div>
                    <div class="card-body">
      
                        <div class="dropdown">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </div>
        
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Single dropdown buttons</h5>
                    </div>
                    <div class="card-body">
      
                        <div class="btn-list d-flex flex-wrap gap-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
        
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Rounded Button Dropdowns</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-list d-flex flex-wrap gap-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-success dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-warning dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-danger dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Outline Button Dropdowns</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-list d-flex flex-wrap gap-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Rounded Outline Dropdowns</h5>
                    </div>
                    <div class="card-body">
                        <div class="btn-list d-flex flex-wrap gap-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-primary dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-success dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-info dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-warning dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-danger dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
  
            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Soft Button Dropdowns</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-wrap gap-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Primary
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Secondary
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Success
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Info
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Warning
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Danger
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
  
            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Rounded Soft Dropdowns</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-wrap gap-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-primary dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Primary
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-secondary dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Secondary
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-success dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Success
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-info dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Info
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-warning dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Warning
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-soft-danger dropdown-toggle rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                    Danger
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Split button dropdowns</h5>
                    </div>
                    <div class="card-body py-3">
                        <div class="btn-group my-1">
                            <button type="button" class="btn btn-primary">Action</button>
                            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split me-2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                        <div class="btn-group my-1">
                            <button type="button" class="btn btn-secondary">Action</button>
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split me-2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                        <div class="btn-group my-1">
                            <button type="button" class="btn btn-info">Action</button>
                            <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split me-2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                        <div class="btn-group my-1">
                            <button type="button" class="btn btn-success">Action</button>
                            <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split me-2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                        <div class="btn-group my-1">
                            <button type="button" class="btn btn-warning">Action</button>
                            <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split me-2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                        <div class="btn-group my-1">
                            <button type="button" class="btn btn-danger">Action</button>
                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split me-2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
  
            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dropdown Sizing</h5>
                    </div>
                    <div class="card-body py-3">
      
                        <div class="btn-group my-1 me-2">
                            <button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Large button
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                        <div class="btn-group my-1 me-2">
                            <button class="btn btn-success btn-lg" type="button">
                                Large split button
                            </button>
                            <button type="button" class="btn btn-lg btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
        
                        <div class="btn-group my-1 me-2">
                            <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Small button
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                        <div class="btn-group my-1">
                            <button class="btn btn-danger btn-sm" type="button">
                                Small split button
                            </button>
                            <button type="button" class="btn btn-sm btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Active</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Add <code>.active</code> to item in the dropdown to <strong>style them as active</strong>.</p>
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropstart
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
                            <li><a class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active link</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another link</a></li>
                        </ul>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Disabled</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Add <code>.disabled</code> to items in the dropdown to <strong>style them as disabled</strong>.</p>
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropstart
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
                            <li><a class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active link</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another link</a></li>
                        </ul>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dropdown menu centered</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-3">Use <code>.dropdown-center</code> on the parent element.</p>
                        <div class="dropdown-center">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                Centered dropdown
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownCenterBtn">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Action two</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Action three</a></li>
                            </ul>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dropup Centered</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-3">Use <code>.dropup-center</code> on the parent element.</p>
                        <div class="dropup-center dropup">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                Centered dropup
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropupCenterBtn">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Action two</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Action three</a></li>
                            </ul>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Menu Items</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as dropdown items.</p>
                        <div class="dropdown">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>
                                    <button class="dropdown-item" type="button">Action</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">Another action</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </li>
                            </ul>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
  
            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dropdown Options</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the location of the dropdown.</p>
                        <div class="d-flex align-items-center">
                            <div class="dropdown me-1">
                                <button type="button" class="btn btn-primary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                    Offset
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-info">Reference</button>
                                <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Auto close behavior</h5>
                    </div>
                    <div class="card-body">
        <p>You can use the <code>autoClose</code> option to change this behavior of the dropdown.</p>
                        <div class="d-flex align flex-wrap gap-2">
                            <div class="btn-group">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    Default dropdown
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
                                    Clickable outside
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    Clickable inside
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuClickableInsise" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                    Manual close
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInsise">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Alignment Options</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align flex-wrap gap-2">
                            <div class="btn-group">
                                <button class="btn btn-primary dropdown-toggle mb-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary dropdown-toggle mb-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    Right-aligned menu
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle mb-0" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                    Left-aligned, right-aligned lg
                                </button>
                                <ul class="dropdown-menu dropdown-menu-lg-end">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-warning dropdown-toggle mb-0" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                    Right-aligned, left-aligned lg
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group dropstart">
                                <button type="button" class="btn btn-success dropdown-toggle mb-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropstart
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group dropend">
                                <button type="button" class="btn btn-danger dropdown-toggle mb-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropend
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                            <div class="btn-group dropup">
                                <button type="button" class="btn btn-info dropdown-toggle mb-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropup
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dropdowns with Forms</h5>
                    </div>
                    <div class="card-body">
        <p>Put a form within a dropdown menu, or make it into a dropdown menu</p>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </button>
                        <div class="dropdown-menu">
                            <form class="px-4 py-3">
                                <div class="mb-3">
                                    <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                        <label class="form-check-label" for="dropdownCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </form>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="javascript:void(0);">New around here? Sign up</a>
                            <a class="dropdown-item" href="javascript:void(0);">Forgot password?</a>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Menu Alignment</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">
                            Add <code>.dropdown-menu-end</code> to a <code>.dropdown-menu</code> to right align the dropdown menu.
                        </p>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Right-aligned menu example
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <button class="dropdown-item" type="button">Action</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">Another action</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </li>
                            </ul>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Responsive alignment end</h5>
                    </div>
                    <div class="card-body">
        <p class="text-muted">To align <strong>right</strong> the dropdown menu with the given breakpoint or larger, add <code>.dropdown-menu{{'{'}}-sm|-md|-lg|-xl|-xxl{{'}'}}-end</code>.</p>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle text-wrap" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                Left-aligned but right aligned when large screen
                            </button>
                            <ul class="dropdown-menu dropdown-menu-lg-end">
                                <li>
                                    <button class="dropdown-item" type="button">Action</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">Another action</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </li>
                            </ul>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
  
            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Responsive alignment left</h5>
                    </div>
                    <div class="card-body">
        <p class="text-muted">To align <strong>left</strong> the dropdown menu with the given breakpoint or larger, add <code>.dropdown-menu-end</code> and <code>.dropdown-menu{{'{'}}-sm|-md|-lg|-xl|-xxl{{'}'}}-start</code>.</p>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle text-wrap" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                Left-aligned but right aligned when large screen
                            </button>
                            <ul class="dropdown-menu dropdown-menu-lg-start">
                                <li>
                                    <button class="dropdown-item" type="button">Action</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">Another action</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </li>
                            </ul>
                        </div>
                    </div> <!-- end card body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

        </div>
<!-- end row -->

<!-- start row -->
        <div class="row">

            <div class="col-xl-6">

                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Custom Dropdown Arrow</h5>
                    </div>
                    <div class="card-body">

                        <p class="text-muted">
                            Any single <code>.btn</code> can be turned into a dropdown
                            toggle with some markup changes. Here\u2019s how you can put them to work
                            with either <code>&lt;button&gt;</code>
                            elements:
                        </p>

                        <div class="row">
                            <div class="col-auto">
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle drop-arrow-none" type="button" id="dropdownWithoutArrow" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Without Arrow
                                    </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownWithoutArrow">
                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
              </ul>
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="dropdown">
                                    <button class="btn btn-outline-info dropdown-toggle drop-arrow-none" type="button" id="dropdownMenuIcon" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tabler Icon <i class="ti ti-chevron-down align-middle ms-1"></i>
                                    </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuIcon">
                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
              </ul>
                                </div>
                            </div>
                        </div>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
  </div>

            <div class="col-xl-6">

                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dropup Variation</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Trigger dropdown menus above elements by adding <code>.dropup</code> to the parent element.</p>

                        <!-- Default dropup button -->
                        <div class="btn-group dropup">
                            <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup</button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>

                        <!-- Split dropup button -->
                        <div class="btn-group dropup">
                            <button type="button" class="btn btn-light">
                                Split dropup
                            </button>
                            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
  </div>
  
            <div class="col-xl-6">

                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Dropstart Variation</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Trigger dropdown menus at the right of the elements by adding <code>.dropleft</code> to the parent element.</p>

                        <!-- Default dropstart button -->
                        <div class="btn-group dropstart ">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropstart
                            </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
          </ul>
                        </div>

                        <!-- Split dropstart button -->
                        <div class="btn-group">
                            <div class="btn-group dropstart" role="group">
                                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-split dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropstart</span>
                                </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
            </ul>
                            </div>
                            <button type="button" class="btn btn-secondary">
                                Split dropstart
                            </button>
                        </div>
                    </div> <!-- end card-body -->
                </div> <!-- end card-->
  </div>

            <div class="col-xl-6">

                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Headers</h5>
                    </div>

                    <div class="card-body">
                        <p class="text-muted">Add a header to label sections of actions in any dropdown menu.
                        </p>
                        <!-- Header Item -->
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Header
                            </button>
                            <div class="dropdown-menu">
                                <h6 class="dropdown-header">Dropdown header</h6>
                                <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </div>
                        </div>
                    </div> <!-- end card-body -->
                </div> <!-- end card -->
    
            </div> <!-- end col -->
  
            <div class="col-xl-6">
  
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Text</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Place any freeform text within a dropdown menu with text and use
                            spacing utilities. Note that you\u2019ll likely need additional sizing styles to
                            constrain the menu width.</p>

                        <!-- Text Example -->
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary   dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Text Dropdown
                            </button>
                            <div class="dropdown-menu p-3 text-muted" style="max-width: 200px;">
                                <p>
                                    Some example text that's free-flowing within the dropdown menu.
                                </p>
                                <p class="mb-0">
                                    And this is more example text.
                                </p>
                            </div>
                        </div>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
  
</div>
<!-- end row -->

    </div>
<!-- End Content -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownsComponent, { className: "DropdownsComponent", filePath: "src/app/features/ui-interface/base-ui/dropdowns/dropdowns.component.ts", lineNumber: 10 });
})();
export {
  DropdownsComponent
};
//# sourceMappingURL=chunk-6TDVSUDS.js.map
