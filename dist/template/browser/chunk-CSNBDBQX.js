import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NAWYXTZ5.js";
import {
  CommonModule
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
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/forms/form-validation/form-validation.component.ts
var FormValidationComponent = class _FormValidationComponent {
  static \u0275fac = function FormValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormValidationComponent, selectors: [["app-form-validation"]], decls: 291, vars: 2, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-2"], [1, "card-text"], ["href", "https://getbootstrap.com/docs/4.1/components/forms/#server-side", "target", "_blank"], [1, "card-body"], [1, "col-sm"], ["novalidate", "", 1, "needs-validation"], [1, "col-md-4", "mb-3"], ["for", "validationCustom01"], ["type", "text", "id", "validationCustom01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-feedback"], ["for", "validationCustom02"], ["type", "text", "id", "validationCustom02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationCustomUsername"], [1, "input-group"], ["id", "inputGroupPrepend", 1, "input-group-text"], ["type", "text", "id", "validationCustomUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-6", "mb-3"], ["for", "validationCustom03"], ["type", "text", "id", "validationCustom03", "placeholder", "City", "required", "", 1, "form-control"], [1, "col-md-3", "mb-3"], ["for", "validationCustom04"], ["type", "text", "id", "validationCustom04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationCustom05"], ["type", "text", "id", "validationCustom05", "placeholder", "Zip", "required", "", 1, "form-control"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "invalidCheck", "required", "", 1, "form-check-input"], ["for", "invalidCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["for", "validationDefault01"], ["type", "text", "id", "validationDefault01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], ["for", "validationDefault02"], ["type", "text", "id", "validationDefault02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationDefaultUsername"], ["id", "inputGroupPrepend2", 1, "input-group-text"], ["type", "text", "id", "validationDefaultUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend2", "required", "", 1, "form-control"], ["for", "validationDefault03"], ["type", "text", "id", "validationDefault03", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationDefault04"], ["type", "text", "id", "validationDefault04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationDefault05"], ["type", "text", "id", "validationDefault05", "placeholder", "Zip", "required", "", 1, "form-control"], ["type", "checkbox", "value", "", "id", "invalidCheck2", "required", "", 1, "form-check-input"], ["for", "invalidCheck2", 1, "form-check-label"], ["for", "validationServer01"], ["type", "text", "id", "validationServer01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control", "is-valid"], ["for", "validationServer02"], ["type", "text", "id", "validationServer02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control", "is-valid"], ["for", "validationServerUsername"], ["id", "inputGroupPrepend3", 1, "input-group-text"], ["type", "text", "id", "validationServerUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend3", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer03"], ["type", "text", "id", "validationServer03", "placeholder", "City", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer04"], ["type", "text", "id", "validationServer04", "placeholder", "State", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer05"], ["type", "text", "id", "validationServer05", "placeholder", "Zip", "required", "", 1, "form-control", "is-invalid"], ["type", "checkbox", "value", "", "id", "invalidCheck3", "required", "", 1, "form-check-input", "is-invalid"], ["for", "invalidCheck3", 1, "form-check-label"], [1, "was-validated"], [1, "form-check", "custom-checkbox", "mb-3"], ["type", "checkbox", "id", "customControlValidation1", "required", "", 1, "form-check-input"], ["for", "customControlValidation1", 1, "form-check-label"], [1, "form-check", "custom-radio"], ["type", "radio", "id", "customControlValidation2", "name", "radio-stacked", "required", "", 1, "form-check-input"], ["for", "customControlValidation2", 1, "form-check-label"], [1, "form-check", "custom-radio", "mb-3"], ["type", "radio", "id", "customControlValidation3", "name", "radio-stacked", "required", "", 1, "form-check-input"], ["for", "customControlValidation3", 1, "form-check-label"], ["required", "", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "file", "id", "validatedCustomFile", "required", "", 1, "form-control"], ["for", "validationTooltip01"], ["type", "text", "id", "validationTooltip01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-tooltip"], ["for", "validationTooltip02"], ["type", "text", "id", "validationTooltip02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationTooltipUsername"], ["type", "text", "id", "validationTooltipUsername", "placeholder", "Username", "required", "", 1, "form-control"], [1, "invalid-tooltip"], ["for", "validationTooltip03"], ["type", "text", "id", "validationTooltip03", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationTooltip04"], ["type", "text", "id", "validationTooltip04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationTooltip05"], ["type", "text", "id", "validationTooltip05", "placeholder", "Zip", "required", "", 1, "form-control"]], template: function FormValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Form Validation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Form Validation");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Custom Bootstrap Form Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21, " For custom Bootstrap form validation messages, you\u2019ll need to add the ");
      \u0275\u0275elementStart(22, "code");
      \u0275\u0275text(23, "novalidate");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " boolean attribute to your form. For server side validation ");
      \u0275\u0275elementStart(25, "a", 14);
      \u0275\u0275text(26, "read full documentation");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, ". ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 15)(29, "div", 8)(30, "div", 16)(31, "form", 17)(32, "div", 8)(33, "div", 18)(34, "label", 19);
      \u0275\u0275text(35, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 20);
      \u0275\u0275elementStart(37, "div", 21);
      \u0275\u0275text(38, "Looks good!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 18)(40, "label", 22);
      \u0275\u0275text(41, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 23);
      \u0275\u0275elementStart(43, "div", 21);
      \u0275\u0275text(44, "Looks good!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 18)(46, "label", 24);
      \u0275\u0275text(47, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 25)(49, "span", 26);
      \u0275\u0275text(50, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 27);
      \u0275\u0275elementStart(52, "div", 28);
      \u0275\u0275text(53, " Please choose a username. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 8)(55, "div", 29)(56, "label", 30);
      \u0275\u0275text(57, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 31);
      \u0275\u0275elementStart(59, "div", 28);
      \u0275\u0275text(60, " Please provide a valid city. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 32)(62, "label", 33);
      \u0275\u0275text(63, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 34);
      \u0275\u0275elementStart(65, "div", 28);
      \u0275\u0275text(66, " Please provide a valid state. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 32)(68, "label", 35);
      \u0275\u0275text(69, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "input", 36);
      \u0275\u0275elementStart(71, "div", 28);
      \u0275\u0275text(72, " Please provide a valid zip. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 37)(74, "div", 38);
      \u0275\u0275element(75, "input", 39);
      \u0275\u0275elementStart(76, "label", 40);
      \u0275\u0275text(77, " Agree to terms and conditions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 28);
      \u0275\u0275text(79, " You must agree before submitting. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "button", 41);
      \u0275\u0275text(81, "Submit form");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(82, "div", 10)(83, "div", 11)(84, "h5", 12);
      \u0275\u0275text(85, "Browser defaults");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p", 13);
      \u0275\u0275text(87, " Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 15)(89, "div", 8)(90, "div", 16)(91, "form")(92, "div", 8)(93, "div", 18)(94, "label", 42);
      \u0275\u0275text(95, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "input", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 18)(98, "label", 44);
      \u0275\u0275text(99, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "input", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 18)(102, "label", 46);
      \u0275\u0275text(103, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 25)(105, "span", 47);
      \u0275\u0275text(106, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(107, "input", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 8)(109, "div", 29)(110, "label", 49);
      \u0275\u0275text(111, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "input", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 32)(114, "label", 51);
      \u0275\u0275text(115, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "input", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 32)(118, "label", 53);
      \u0275\u0275text(119, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(120, "input", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 37)(122, "div", 38);
      \u0275\u0275element(123, "input", 55);
      \u0275\u0275elementStart(124, "label", 56);
      \u0275\u0275text(125, " Agree to terms and conditions ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "button", 41);
      \u0275\u0275text(127, "Submit form");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(128, "div", 10)(129, "div", 11)(130, "h5", 12);
      \u0275\u0275text(131, "Server side");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "p", 13);
      \u0275\u0275text(133, " We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with ");
      \u0275\u0275elementStart(134, "code");
      \u0275\u0275text(135, ".is-invalid");
      \u0275\u0275elementEnd();
      \u0275\u0275text(136, " and ");
      \u0275\u0275elementStart(137, "code");
      \u0275\u0275text(138, ".is-valid");
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, ". Note that ");
      \u0275\u0275elementStart(140, "code");
      \u0275\u0275text(141, ".invalid-feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275text(142, " is also supported with these classes. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 15)(144, "form")(145, "div", 8)(146, "div", 18)(147, "label", 57);
      \u0275\u0275text(148, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(149, "input", 58);
      \u0275\u0275elementStart(150, "div", 21);
      \u0275\u0275text(151, "Looks good!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 18)(153, "label", 59);
      \u0275\u0275text(154, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(155, "input", 60);
      \u0275\u0275elementStart(156, "div", 21);
      \u0275\u0275text(157, "Looks good!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 18)(159, "label", 61);
      \u0275\u0275text(160, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 25)(162, "span", 62);
      \u0275\u0275text(163, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(164, "input", 63);
      \u0275\u0275elementStart(165, "div", 28);
      \u0275\u0275text(166, "Please choose a username.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(167, "div", 8)(168, "div", 29)(169, "label", 64);
      \u0275\u0275text(170, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(171, "input", 65);
      \u0275\u0275elementStart(172, "div", 28);
      \u0275\u0275text(173, "Please provide a valid city.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "div", 32)(175, "label", 66);
      \u0275\u0275text(176, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "input", 67);
      \u0275\u0275elementStart(178, "div", 28);
      \u0275\u0275text(179, "Please provide a valid state.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 32)(181, "label", 68);
      \u0275\u0275text(182, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(183, "input", 69);
      \u0275\u0275elementStart(184, "div", 28);
      \u0275\u0275text(185, "Please provide a valid zip.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(186, "div", 37)(187, "div", 38);
      \u0275\u0275element(188, "input", 70);
      \u0275\u0275elementStart(189, "label", 71);
      \u0275\u0275text(190, " Agree to terms and conditions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "div", 28);
      \u0275\u0275text(192, " You must agree before submitting. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "button", 41);
      \u0275\u0275text(194, "Submit form");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(195, "div", 10)(196, "div", 11)(197, "h5", 12);
      \u0275\u0275text(198, "Supported elements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "p", 13);
      \u0275\u0275text(200, " Form validation styles are also available for bootstrap custom form controls. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 15)(202, "div", 8)(203, "div", 16)(204, "form", 72)(205, "div", 73);
      \u0275\u0275element(206, "input", 74);
      \u0275\u0275elementStart(207, "label", 75);
      \u0275\u0275text(208, "Check this custom checkbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 28);
      \u0275\u0275text(210, " Example invalid feedback text ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 76);
      \u0275\u0275element(212, "input", 77);
      \u0275\u0275elementStart(213, "label", 78);
      \u0275\u0275text(214, "Toggle this custom radio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "div", 79);
      \u0275\u0275element(216, "input", 80);
      \u0275\u0275elementStart(217, "label", 81);
      \u0275\u0275text(218, "Or toggle this other custom radio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "div", 28);
      \u0275\u0275text(220, " More example invalid feedback text ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "div", 37)(222, "select", 82)(223, "option", 83);
      \u0275\u0275text(224, "Open this select menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "option", 84);
      \u0275\u0275text(226, "One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "option", 85);
      \u0275\u0275text(228, "Two");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "option", 86);
      \u0275\u0275text(230, "Three");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "div", 28);
      \u0275\u0275text(232, " Example invalid custom select feedback ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 37);
      \u0275\u0275element(234, "input", 87);
      \u0275\u0275elementStart(235, "div", 28);
      \u0275\u0275text(236, " Example invalid custom file feedback ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(237, "div", 10)(238, "div", 11)(239, "h5", 12);
      \u0275\u0275text(240, "Tooltips");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "p", 13);
      \u0275\u0275text(242, " You can swap the ");
      \u0275\u0275elementStart(243, "code");
      \u0275\u0275text(244);
      \u0275\u0275elementEnd();
      \u0275\u0275text(245, " classes for ");
      \u0275\u0275elementStart(246, "code");
      \u0275\u0275text(247);
      \u0275\u0275elementEnd();
      \u0275\u0275text(248, " classes to display validation feedback in a styled tooltip. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "div", 15)(250, "form", 17)(251, "div", 8)(252, "div", 18)(253, "label", 88);
      \u0275\u0275text(254, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(255, "input", 89);
      \u0275\u0275elementStart(256, "div", 90);
      \u0275\u0275text(257, "Looks good!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "div", 18)(259, "label", 91);
      \u0275\u0275text(260, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(261, "input", 92);
      \u0275\u0275elementStart(262, "div", 90);
      \u0275\u0275text(263, "Looks good!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "div", 18)(265, "label", 93);
      \u0275\u0275text(266, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(267, "input", 94);
      \u0275\u0275elementStart(268, "div", 95);
      \u0275\u0275text(269, " Please choose a unique and valid username. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(270, "div", 8)(271, "div", 29)(272, "label", 96);
      \u0275\u0275text(273, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(274, "input", 97);
      \u0275\u0275elementStart(275, "div", 95);
      \u0275\u0275text(276, "Please provide a valid city.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "div", 32)(278, "label", 98);
      \u0275\u0275text(279, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "input", 99);
      \u0275\u0275elementStart(281, "div", 95);
      \u0275\u0275text(282, "Please provide a valid state.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "div", 32)(284, "label", 100);
      \u0275\u0275text(285, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(286, "input", 101);
      \u0275\u0275elementStart(287, "div", 95);
      \u0275\u0275text(288, "Please provide a valid zip.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "button", 41);
      \u0275\u0275text(290, "Submit form");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(244);
      \u0275\u0275textInterpolate1(".", "valid|invalid", "-feedback");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(".", "valid|invalid", "-tooltip");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormValidationComponent, [{
    type: Component,
    args: [{ selector: "app-form-validation", imports: [CommonModule, FormsModule], template: '    <!-- Page Header -->\n    <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n      <div class="flex-grow-1">\n          <h4 class="fs-18 fw-semibold mb-0">Form Validation</h4>\n      </div>\n      <div class="text-end">\n          <ol class="breadcrumb m-0 py-0">\n              <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n              <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n              <li class="breadcrumb-item active">Form Validation</li>\n          </ol>\n      </div>\n  </div>\n  <!-- End Page Header -->\n\n<!-- Row -->\n<div class="row">\n  <div class="col-sm-12">\n    <!-- Custom Boostrap Validation -->\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title mb-2">Custom Bootstrap Form Validation</h5>\n        <p class="card-text">\n          For custom Bootstrap form validation messages, you\u2019ll need to add the\n          <code>novalidate</code> boolean attribute to your form. For server\n          side validation\n          <a\n            href="https://getbootstrap.com/docs/4.1/components/forms/#server-side"\n            target="_blank"\n            >read full documentation</a>.\n        </p>\n      </div>\n      <div class="card-body">\n        <div class="row">\n          <div class="col-sm">\n            <form class="needs-validation" novalidate>\n              <div class="row">\n                <div class="col-md-4 mb-3">\n                  <label for="validationCustom01">First name</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationCustom01"\n                    placeholder="First name"\n                    value="Mark"\n                    required\n                  />\n                  <div class="valid-feedback">Looks good!</div>\n                </div>\n                <div class="col-md-4 mb-3">\n                  <label for="validationCustom02">Last name</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationCustom02"\n                    placeholder="Last name"\n                    value="Otto"\n                    required\n                  />\n                  <div class="valid-feedback">Looks good!</div>\n                </div>\n                <div class="col-md-4 mb-3">\n                  <label for="validationCustomUsername">Username</label>\n                  <div class="input-group">\n                    <span class="input-group-text" id="inputGroupPrepend"\n                      >&#64;</span\n                    >\n                    <input\n                      type="text"\n                      class="form-control"\n                      id="validationCustomUsername"\n                      placeholder="Username"\n                      aria-describedby="inputGroupPrepend"\n                      required\n                    />\n                    <div class="invalid-feedback">\n                      Please choose a username.\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-md-6 mb-3">\n                  <label for="validationCustom03">City</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationCustom03"\n                    placeholder="City"\n                    required\n                  />\n                  <div class="invalid-feedback">\n                    Please provide a valid city.\n                  </div>\n                </div>\n                <div class="col-md-3 mb-3">\n                  <label for="validationCustom04">State</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationCustom04"\n                    placeholder="State"\n                    required\n                  />\n                  <div class="invalid-feedback">\n                    Please provide a valid state.\n                  </div>\n                </div>\n                <div class="col-md-3 mb-3">\n                  <label for="validationCustom05">Zip</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationCustom05"\n                    placeholder="Zip"\n                    required\n                  />\n                  <div class="invalid-feedback">\n                    Please provide a valid zip.\n                  </div>\n                </div>\n              </div>\n              <div class="form-group">\n                <div class="form-check">\n                  <input\n                    class="form-check-input"\n                    type="checkbox"\n                    value=""\n                    id="invalidCheck"\n                    required\n                  />\n                  <label class="form-check-label" for="invalidCheck">\n                    Agree to terms and conditions\n                  </label>\n                  <div class="invalid-feedback">\n                    You must agree before submitting.\n                  </div>\n                </div>\n              </div>\n              <button class="btn btn-primary" type="submit">Submit form</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /Custom Boostrap Validation -->\n\n    <!-- Default Browser Validation -->\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title mb-2">Browser defaults</h5>\n        <p class="card-text">\n          Not interested in custom validation feedback messages or writing\n          JavaScript to change form behaviors? All good, you can use the browser\n          defaults. Try submitting the form below.\n        </p>\n      </div>\n      <div class="card-body">\n        <div class="row">\n          <div class="col-sm">\n            <form>\n              <div class="row">\n                <div class="col-md-4 mb-3">\n                  <label for="validationDefault01">First name</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationDefault01"\n                    placeholder="First name"\n                    value="Mark"\n                    required\n                  />\n                </div>\n                <div class="col-md-4 mb-3">\n                  <label for="validationDefault02">Last name</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationDefault02"\n                    placeholder="Last name"\n                    value="Otto"\n                    required\n                  />\n                </div>\n                <div class="col-md-4 mb-3">\n                  <label for="validationDefaultUsername">Username</label>\n                  <div class="input-group">\n                    <span class="input-group-text" id="inputGroupPrepend2"\n                      >&#64;</span\n                    >\n                    <input\n                      type="text"\n                      class="form-control"\n                      id="validationDefaultUsername"\n                      placeholder="Username"\n                      aria-describedby="inputGroupPrepend2"\n                      required\n                    />\n                  </div>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-md-6 mb-3">\n                  <label for="validationDefault03">City</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationDefault03"\n                    placeholder="City"\n                    required\n                  />\n                </div>\n                <div class="col-md-3 mb-3">\n                  <label for="validationDefault04">State</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationDefault04"\n                    placeholder="State"\n                    required\n                  />\n                </div>\n                <div class="col-md-3 mb-3">\n                  <label for="validationDefault05">Zip</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="validationDefault05"\n                    placeholder="Zip"\n                    required\n                  />\n                </div>\n              </div>\n              <div class="form-group">\n                <div class="form-check">\n                  <input\n                    class="form-check-input"\n                    type="checkbox"\n                    value=""\n                    id="invalidCheck2"\n                    required\n                  />\n                  <label class="form-check-label" for="invalidCheck2">\n                    Agree to terms and conditions\n                  </label>\n                </div>\n              </div>\n              <button class="btn btn-primary" type="submit">Submit form</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /Default Browser Validation -->\n\n    <!-- Server Side Validation -->\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title mb-2">Server side</h5>\n        <p class="card-text">\n          We recommend using client side validation, but in case you require\n          server side, you can indicate invalid and valid form fields with\n          <code>.is-invalid</code> and <code>.is-valid</code>. Note that\n          <code>.invalid-feedback</code> is also supported with these classes.\n        </p>\n      </div>\n      <div class="card-body">\n        <form>\n          <div class="row">\n            <div class="col-md-4 mb-3">\n              <label for="validationServer01">First name</label>\n              <input\n                type="text"\n                class="form-control is-valid"\n                id="validationServer01"\n                placeholder="First name"\n                value="Mark"\n                required\n              />\n              <div class="valid-feedback">Looks good!</div>\n            </div>\n            <div class="col-md-4 mb-3">\n              <label for="validationServer02">Last name</label>\n              <input\n                type="text"\n                class="form-control is-valid"\n                id="validationServer02"\n                placeholder="Last name"\n                value="Otto"\n                required\n              />\n              <div class="valid-feedback">Looks good!</div>\n            </div>\n            <div class="col-md-4 mb-3">\n              <label for="validationServerUsername">Username</label>\n              <div class="input-group">\n                <span class="input-group-text" id="inputGroupPrepend3">&#64;</span>\n                <input\n                  type="text"\n                  class="form-control is-invalid"\n                  id="validationServerUsername"\n                  placeholder="Username"\n                  aria-describedby="inputGroupPrepend3"\n                  required\n                />\n                <div class="invalid-feedback">Please choose a username.</div>\n              </div>\n            </div>\n          </div>\n          <div class="row">\n            <div class="col-md-6 mb-3">\n              <label for="validationServer03">City</label>\n              <input\n                type="text"\n                class="form-control is-invalid"\n                id="validationServer03"\n                placeholder="City"\n                required\n              />\n              <div class="invalid-feedback">Please provide a valid city.</div>\n            </div>\n            <div class="col-md-3 mb-3">\n              <label for="validationServer04">State</label>\n              <input\n                type="text"\n                class="form-control is-invalid"\n                id="validationServer04"\n                placeholder="State"\n                required\n              />\n              <div class="invalid-feedback">Please provide a valid state.</div>\n            </div>\n            <div class="col-md-3 mb-3">\n              <label for="validationServer05">Zip</label>\n              <input\n                type="text"\n                class="form-control is-invalid"\n                id="validationServer05"\n                placeholder="Zip"\n                required\n              />\n              <div class="invalid-feedback">Please provide a valid zip.</div>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="form-check">\n              <input\n                class="form-check-input is-invalid"\n                type="checkbox"\n                value=""\n                id="invalidCheck3"\n                required\n              />\n              <label class="form-check-label" for="invalidCheck3">\n                Agree to terms and conditions\n              </label>\n              <div class="invalid-feedback">\n                You must agree before submitting.\n              </div>\n            </div>\n          </div>\n          <button class="btn btn-primary" type="submit">Submit form</button>\n        </form>\n      </div>\n    </div>\n    <!-- /Server Side Validation -->\n\n    <!-- Supported Elements -->\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title mb-2">Supported elements</h5>\n        <p class="card-text">\n          Form validation styles are also available for bootstrap custom form\n          controls.\n        </p>\n      </div>\n      <div class="card-body">\n        <div class="row">\n          <div class="col-sm">\n            <form class="was-validated">\n              <div class="form-check custom-checkbox mb-3">\n                <input\n                  type="checkbox"\n                  class="form-check-input"\n                  id="customControlValidation1"\n                  required\n                />\n                <label class="form-check-label" for="customControlValidation1"\n                  >Check this custom checkbox</label\n                >\n                <div class="invalid-feedback">\n                  Example invalid feedback text\n                </div>\n              </div>\n              <div class="form-check custom-radio">\n                <input\n                  type="radio"\n                  class="form-check-input"\n                  id="customControlValidation2"\n                  name="radio-stacked"\n                  required\n                />\n                <label class="form-check-label" for="customControlValidation2"\n                  >Toggle this custom radio</label\n                >\n              </div>\n              <div class="form-check custom-radio mb-3">\n                <input\n                  type="radio"\n                  class="form-check-input"\n                  id="customControlValidation3"\n                  name="radio-stacked"\n                  required\n                />\n                <label class="form-check-label" for="customControlValidation3"\n                  >Or toggle this other custom radio</label\n                >\n                <div class="invalid-feedback">\n                  More example invalid feedback text\n                </div>\n              </div>\n              <div class="form-group">\n                <select class="form-select" required>\n                  <option value="">Open this select menu</option>\n                  <option value="1">One</option>\n                  <option value="2">Two</option>\n                  <option value="3">Three</option>\n                </select>\n                <div class="invalid-feedback">\n                  Example invalid custom select feedback\n                </div>\n              </div>\n\n              <div class="form-group">\n                <input\n                  type="file"\n                  class="form-control"\n                  id="validatedCustomFile"\n                  required\n                />\n                <div class="invalid-feedback">\n                  Example invalid custom file feedback\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /Supported Elements -->\n\n    <!-- Validation Tooltips -->\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title mb-2">Tooltips</h5>\n        <p class="card-text">\n          You can swap the <code>.{{ "valid|invalid" }}-feedback</code> classes\n          for <code>.{{ "valid|invalid" }}-tooltip</code> classes to display\n          validation feedback in a styled tooltip.\n        </p>\n      </div>\n      <div class="card-body">\n        <form class="needs-validation" novalidate>\n          <div class="row">\n            <div class="col-md-4 mb-3">\n              <label for="validationTooltip01">First name</label>\n              <input\n                type="text"\n                class="form-control"\n                id="validationTooltip01"\n                placeholder="First name"\n                value="Mark"\n                required\n              />\n              <div class="valid-tooltip">Looks good!</div>\n            </div>\n            <div class="col-md-4 mb-3">\n              <label for="validationTooltip02">Last name</label>\n              <input\n                type="text"\n                class="form-control"\n                id="validationTooltip02"\n                placeholder="Last name"\n                value="Otto"\n                required\n              />\n              <div class="valid-tooltip">Looks good!</div>\n            </div>\n            <div class="col-md-4 mb-3">\n              <label for="validationTooltipUsername">Username</label>\n              <input\n                type="text"\n                class="form-control"\n                id="validationTooltipUsername"\n                placeholder="Username"\n                required\n              />\n              <div class="invalid-tooltip">\n                Please choose a unique and valid username.\n              </div>\n            </div>\n          </div>\n          <div class="row">\n            <div class="col-md-6 mb-3">\n              <label for="validationTooltip03">City</label>\n              <input\n                type="text"\n                class="form-control"\n                id="validationTooltip03"\n                placeholder="City"\n                required\n              />\n              <div class="invalid-tooltip">Please provide a valid city.</div>\n            </div>\n            <div class="col-md-3 mb-3">\n              <label for="validationTooltip04">State</label>\n              <input\n                type="text"\n                class="form-control"\n                id="validationTooltip04"\n                placeholder="State"\n                required\n              />\n              <div class="invalid-tooltip">Please provide a valid state.</div>\n            </div>\n            <div class="col-md-3 mb-3">\n              <label for="validationTooltip05">Zip</label>\n              <input\n                type="text"\n                class="form-control"\n                id="validationTooltip05"\n                placeholder="Zip"\n                required\n              />\n              <div class="invalid-tooltip">Please provide a valid zip.</div>\n            </div>\n          </div>\n          <button class="btn btn-primary" type="submit">Submit form</button>\n        </form>\n      </div>\n    </div>\n    <!-- /Validation Tooltips -->\n  </div>\n</div>\n<!-- /Row -->\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormValidationComponent, { className: "FormValidationComponent", filePath: "src/app/features/ui-interface/forms/form-validation/form-validation.component.ts", lineNumber: 11 });
})();
export {
  FormValidationComponent
};
//# sourceMappingURL=chunk-CSNBDBQX.js.map
