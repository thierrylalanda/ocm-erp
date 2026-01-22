import {
  FormsModule
} from "./chunk-NAWYXTZ5.js";
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

// src/app/features/ui-interface/forms/form-checkbox-radios/form-checkbox-radios.component.ts
var FormCheckboxRadiosComponent = class _FormCheckboxRadiosComponent {
  static \u0275fac = function FormCheckboxRadiosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormCheckboxRadiosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCheckboxRadiosComponent, selectors: [["app-form-checkbox-radios"]], decls: 209, vars: 0, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexCheckChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexCheckDisabled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexCheckCheckedDisabled", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDisabled", "id", "flexRadioDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexRadioDisabled", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDisabled", "id", "flexRadioCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexRadioCheckedDisabled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "defaultCheck2", "disabled", "", 1, "form-check-input"], ["for", "defaultCheck2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "exampleRadios3", 1, "form-check-label"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDefault", 1, "form-check-input"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckDisabled", 1, "form-check-label"], [1, "form-check", "form-switch", "mb-0"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckCheckedDisabled", 1, "form-check-label"], [1, "col-xxl-4", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card-body", "d-sm-flex", "align-items-center", "justify-content-between"], ["type", "checkbox", "value", "", "id", "checkebox-sm", "checked", "", 1, "form-check-input"], ["for", "checkebox-sm", 1, "form-check-label"], [1, "form-check", "form-check-md", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-md", "checked", "", 1, "form-check-input"], ["for", "checkebox-md", 1, "form-check-label"], [1, "form-check", "form-check-lg", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-lg", "checked", "", 1, "form-check-input"], ["for", "checkebox-lg", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm", 1, "form-check-input"], ["for", "Radio-sm", 1, "form-check-label"], [1, "form-check", "form-check-md"], ["type", "radio", "name", "Radio", "id", "Radio-md", 1, "form-check-input"], ["for", "Radio-md", 1, "form-check-label"], [1, "form-check", "form-check-lg"], ["type", "radio", "name", "Radio", "id", "Radio-lg", "checked", "", 1, "form-check-input"], ["for", "Radio-lg", 1, "form-check-label"], [1, "card-body", "d-sm-flex", "align-item-center", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "switch-sm", 1, "form-check-input"], ["for", "switch-sm", 1, "form-check-label"], [1, "form-check", "form-check-md", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-md", 1, "form-check-input"], ["for", "switch-md", 1, "form-check-label"], [1, "form-check", "form-check-lg", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-lg", 1, "form-check-input"], ["for", "switch-lg", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option3", "disabled", "", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input", "mt-1"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input", "mt-1"], ["for", "inlineRadio2", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio3", "value", "option3", "disabled", "", 1, "form-check-input", "mt-1"], ["for", "inlineRadio3", 1, "form-check-label"], [1, "card-body", "ms-4"], [1, "me-4"], ["type", "checkbox", "id", "checkboxNoLabel", "value", "", "aria-label", "...", 1, "form-check-input"], ["type", "radio", "name", "radioNoLabel", "id", "radioNoLabel1", "value", "", "aria-label", "...", 1, "form-check-input"]], template: function FormCheckboxRadiosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Checkbox & Radios");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "li", 7);
      \u0275\u0275text(13, "Checkbox & Radios");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Checkbox");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "div", 13)(21, "div", 14);
      \u0275\u0275domElement(22, "input", 15);
      \u0275\u0275domElementStart(23, "label", 16);
      \u0275\u0275text(24, " Default checkbox ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(25, "div", 14);
      \u0275\u0275domElement(26, "input", 17);
      \u0275\u0275domElementStart(27, "label", 18);
      \u0275\u0275text(28, " Checked checkbox ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(29, "div", 9)(30, "div", 10)(31, "div", 11)(32, "h5", 12);
      \u0275\u0275text(33, "Disabled");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(34, "div", 13)(35, "div", 14);
      \u0275\u0275domElement(36, "input", 19);
      \u0275\u0275domElementStart(37, "label", 20);
      \u0275\u0275text(38, " Disabled checkbox ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "div", 14);
      \u0275\u0275domElement(40, "input", 21);
      \u0275\u0275domElementStart(41, "label", 22);
      \u0275\u0275text(42, " Disabled checked checkbox ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(43, "div", 9)(44, "div", 10)(45, "div", 11)(46, "h5", 12);
      \u0275\u0275text(47, "Radios");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "div", 13)(49, "div", 14);
      \u0275\u0275domElement(50, "input", 23);
      \u0275\u0275domElementStart(51, "label", 24);
      \u0275\u0275text(52, " Default radio ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(53, "div", 14);
      \u0275\u0275domElement(54, "input", 25);
      \u0275\u0275domElementStart(55, "label", 26);
      \u0275\u0275text(56, " Default checked radio ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(57, "div", 9)(58, "div", 10)(59, "div", 11)(60, "h5", 12);
      \u0275\u0275text(61, "Radios");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(62, "div", 13)(63, "div", 14);
      \u0275\u0275domElement(64, "input", 27);
      \u0275\u0275domElementStart(65, "label", 28);
      \u0275\u0275text(66, " Disabled radio ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(67, "div", 14);
      \u0275\u0275domElement(68, "input", 29);
      \u0275\u0275domElementStart(69, "label", 30);
      \u0275\u0275text(70, " Disabled checked radio ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(71, "div", 9)(72, "div", 10)(73, "div", 11)(74, "h5", 12);
      \u0275\u0275text(75, "Default (stacked)");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(76, "div", 13)(77, "div", 14);
      \u0275\u0275domElement(78, "input", 31);
      \u0275\u0275domElementStart(79, "label", 32);
      \u0275\u0275text(80, " Default checkbox ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(81, "div", 14);
      \u0275\u0275domElement(82, "input", 33);
      \u0275\u0275domElementStart(83, "label", 34);
      \u0275\u0275text(84, " Disabled checkbox ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(85, "div", 14);
      \u0275\u0275domElement(86, "input", 35);
      \u0275\u0275domElementStart(87, "label", 36);
      \u0275\u0275text(88, " Default radio ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(89, "div", 37);
      \u0275\u0275domElement(90, "input", 38);
      \u0275\u0275domElementStart(91, "label", 39);
      \u0275\u0275text(92, " Disabled radio ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(93, "div", 9)(94, "div", 10)(95, "div", 11)(96, "h5", 12);
      \u0275\u0275text(97, "Switches");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(98, "div", 13)(99, "div", 40);
      \u0275\u0275domElement(100, "input", 41);
      \u0275\u0275domElementStart(101, "label", 42);
      \u0275\u0275text(102, "Default switch checkbox input");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(103, "div", 40);
      \u0275\u0275domElement(104, "input", 43);
      \u0275\u0275domElementStart(105, "label", 44);
      \u0275\u0275text(106, "Checked switch checkbox input");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(107, "div", 40);
      \u0275\u0275domElement(108, "input", 45);
      \u0275\u0275domElementStart(109, "label", 46);
      \u0275\u0275text(110, "Disabled switch checkbox input");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(111, "div", 47);
      \u0275\u0275domElement(112, "input", 48);
      \u0275\u0275domElementStart(113, "label", 49);
      \u0275\u0275text(114, "Disabled checked switch checkbox input");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(115, "div", 50)(116, "div", 10)(117, "div", 11)(118, "div", 12);
      \u0275\u0275text(119, " Checkbox Sizes ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(120, "div", 51)(121, "div", 14);
      \u0275\u0275domElement(122, "input", 52);
      \u0275\u0275domElementStart(123, "label", 53);
      \u0275\u0275text(124, " Default ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(125, "div", 54);
      \u0275\u0275domElement(126, "input", 55);
      \u0275\u0275domElementStart(127, "label", 56);
      \u0275\u0275text(128, " Medium ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(129, "div", 57);
      \u0275\u0275domElement(130, "input", 58);
      \u0275\u0275domElementStart(131, "label", 59);
      \u0275\u0275text(132, " Large ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(133, "div", 50)(134, "div", 10)(135, "div", 11)(136, "div", 12);
      \u0275\u0275text(137, " Radio Sizes ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(138, "div", 51)(139, "div", 14);
      \u0275\u0275domElement(140, "input", 60);
      \u0275\u0275domElementStart(141, "label", 61);
      \u0275\u0275text(142, " Default ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(143, "div", 62);
      \u0275\u0275domElement(144, "input", 63);
      \u0275\u0275domElementStart(145, "label", 64);
      \u0275\u0275text(146, " Medium ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(147, "div", 65);
      \u0275\u0275domElement(148, "input", 66);
      \u0275\u0275domElementStart(149, "label", 67);
      \u0275\u0275text(150, " Large ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(151, "div", 50)(152, "div", 10)(153, "div", 11)(154, "div", 12);
      \u0275\u0275text(155, " Switch Sizes ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(156, "div", 68)(157, "div", 40);
      \u0275\u0275domElement(158, "input", 69);
      \u0275\u0275domElementStart(159, "label", 70);
      \u0275\u0275text(160, "Default");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(161, "div", 71);
      \u0275\u0275domElement(162, "input", 72);
      \u0275\u0275domElementStart(163, "label", 73);
      \u0275\u0275text(164, "Medium");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(165, "div", 74);
      \u0275\u0275domElement(166, "input", 75);
      \u0275\u0275domElementStart(167, "label", 76);
      \u0275\u0275text(168, "Large");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(169, "div", 9)(170, "div", 10)(171, "div", 11)(172, "h5", 12);
      \u0275\u0275text(173, "Inline");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(174, "div", 13)(175, "div", 77);
      \u0275\u0275domElement(176, "input", 78);
      \u0275\u0275domElementStart(177, "label", 79);
      \u0275\u0275text(178, "1");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(179, "div", 77);
      \u0275\u0275domElement(180, "input", 80);
      \u0275\u0275domElementStart(181, "label", 81);
      \u0275\u0275text(182, "2");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(183, "div", 77);
      \u0275\u0275domElement(184, "input", 82);
      \u0275\u0275domElementStart(185, "label", 83);
      \u0275\u0275text(186, "3 (disabled)");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(187, "div", 77);
      \u0275\u0275domElement(188, "input", 84);
      \u0275\u0275domElementStart(189, "label", 85);
      \u0275\u0275text(190, "1");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(191, "div", 77);
      \u0275\u0275domElement(192, "input", 86);
      \u0275\u0275domElementStart(193, "label", 87);
      \u0275\u0275text(194, "2");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(195, "div", 77);
      \u0275\u0275domElement(196, "input", 88);
      \u0275\u0275domElementStart(197, "label", 89);
      \u0275\u0275text(198, "3 (disabled)");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(199, "div", 9)(200, "div", 10)(201, "div", 11)(202, "h5", 12);
      \u0275\u0275text(203, "Without labels");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(204, "div", 90)(205, "span", 91);
      \u0275\u0275domElement(206, "input", 92);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(207, "span");
      \u0275\u0275domElement(208, "input", 93);
      \u0275\u0275domElementEnd()()()()();
    }
  }, dependencies: [CommonModule, FormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckboxRadiosComponent, [{
    type: Component,
    args: [{ selector: "app-form-checkbox-radios", imports: [CommonModule, FormsModule], template: '              <!-- Page Header -->\n              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n                <div class="flex-grow-1">\n                    <h4 class="fs-18 fw-semibold mb-0">Checkbox & Radios</h4>\n                </div>\n                <div class="text-end">\n                    <ol class="breadcrumb m-0 py-0">\n                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                        <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n                        <li class="breadcrumb-item active">Checkbox & Radios</li>\n                    </ol>\n                </div>\n            </div>\n            <!-- End Page Header -->\n\n<div class="row">\n\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Checkbox</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">\n                    <label class="form-check-label" for="flexCheckDefault">\n                        Default checkbox\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="">\n                    <label class="form-check-label" for="flexCheckChecked">\n                        Checked checkbox\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Disabled</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled="">\n                    <label class="form-check-label" for="flexCheckDisabled">\n                        Disabled checkbox\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked="" disabled="">\n                    <label class="form-check-label" for="flexCheckCheckedDisabled">\n                        Disabled checked checkbox\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Radios</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">\n                    <label class="form-check-label" for="flexRadioDefault1">\n                        Default radio\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="">\n                    <label class="form-check-label" for="flexRadioDefault2">\n                        Default checked radio\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Radios</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled="">\n                    <label class="form-check-label" for="flexRadioDisabled">\n                        Disabled radio\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked="" disabled="">\n                    <label class="form-check-label" for="flexRadioCheckedDisabled">\n                        Disabled checked radio\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Default (stacked)</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n                    <label class="form-check-label" for="defaultCheck1">\n                        Default checkbox\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled="">\n                    <label class="form-check-label" for="defaultCheck2">\n                        Disabled checkbox\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="">\n                    <label class="form-check-label" for="exampleRadios1">\n                        Default radio\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="">\n                    <label class="form-check-label" for="exampleRadios3">\n                        Disabled radio\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Switches</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">\n                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch\n                        checkbox input</label>\n                </div>\n                <div class="form-check form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked="">\n                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch\n                        checkbox input</label>\n                </div>\n                <div class="form-check form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled="">\n                    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled\n                        switch\n                        checkbox input</label>\n                </div>\n                <div class="form-check form-switch mb-0">\n                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked="" disabled="">\n                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled\n                        checked switch checkbox input</label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Checkbox Sizes\n                </div>\n                \n            </div>\n            <div class="card-body d-sm-flex align-items-center justify-content-between">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked="">\n                    <label class="form-check-label" for="checkebox-sm">\n                        Default\n                    </label>\n                </div>\n                <div class="form-check form-check-md d-flex align-items-center">\n                    <input class="form-check-input" type="checkbox" value="" id="checkebox-md" checked="">\n                    <label class="form-check-label" for="checkebox-md">\n                        Medium\n                    </label>\n                </div>\n                <div class="form-check form-check-lg d-flex align-items-center">\n                    <input class="form-check-input" type="checkbox" value="" id="checkebox-lg" checked="">\n                    <label class="form-check-label" for="checkebox-lg">\n                        Large\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Radio Sizes\n                </div>\n                \n            </div>\n            <div class="card-body d-sm-flex align-items-center justify-content-between">\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="Radio" id="Radio-sm">\n                    <label class="form-check-label" for="Radio-sm">\n                        Default\n                    </label>\n                </div>\n                <div class="form-check form-check-md">\n                    <input class="form-check-input" type="radio" name="Radio" id="Radio-md">\n                    <label class="form-check-label" for="Radio-md">\n                        Medium\n                    </label>\n                </div>\n                <div class="form-check form-check-lg">\n                    <input class="form-check-input" type="radio" name="Radio" id="Radio-lg" checked="">\n                    <label class="form-check-label" for="Radio-lg">\n                        Large\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                \n                \n            <div class="card-title">\n                    Switch Sizes\n                </div></div>\n            <div class="card-body d-sm-flex align-item-center justify-content-between">\n                <div class="form-check form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="switch-sm">\n                    <label class="form-check-label" for="switch-sm">Default</label>\n                </div>\n                <div class="form-check form-check-md form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="switch-md">\n                    <label class="form-check-label" for="switch-md">Medium</label>\n                </div>\n                <div class="form-check form-check-lg form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="switch-lg">\n                    <label class="form-check-label" for="switch-lg">Large</label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Inline</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="checkbox" id="inlineCheckbox1" value="option1">\n                    <label class="form-check-label" for="inlineCheckbox1">1</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="checkbox" id="inlineCheckbox2" value="option2">\n                    <label class="form-check-label" for="inlineCheckbox2">2</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">\n                    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">\n                    <label class="form-check-label" for="inlineRadio1">1</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">\n                    <label class="form-check-label" for="inlineRadio2">2</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="">\n                    <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Without labels</h5>\n            </div>\n            <div class="card-body ms-4">\n                <span class="me-4">\n                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">\n                </span>\n                <span>\n                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">\n                </span>\n            </div>\n        </div>\n    </div>\n    \n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCheckboxRadiosComponent, { className: "FormCheckboxRadiosComponent", filePath: "src/app/features/ui-interface/forms/form-checkbox-radios/form-checkbox-radios.component.ts", lineNumber: 11 });
})();
export {
  FormCheckboxRadiosComponent
};
//# sourceMappingURL=chunk-KO6YRH6Y.js.map
