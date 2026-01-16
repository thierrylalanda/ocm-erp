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
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
import {
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import "./chunk-PCRWA3NK.js";
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.ts
var _c0 = () => ({ standalone: true });
function HorizontalFormComponent_For_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275property("value", data_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.value, " ");
  }
}
function HorizontalFormComponent_For_228_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275property("value", data_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.value, " ");
  }
}
function HorizontalFormComponent_For_268_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275property("value", data_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3.value, " ");
  }
}
function HorizontalFormComponent_For_350_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275property("value", data_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4.value, " ");
  }
}
function HorizontalFormComponent_For_378_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    \u0275\u0275property("value", data_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r5.value, " ");
  }
}
var HorizontalFormComponent = class _HorizontalFormComponent {
  routes = routes;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedList1 = [
    { value: "A+" },
    { value: "O+" },
    { value: "B+" },
    { value: "AB+" }
  ];
  selectedList2 = [
    { value: "Select State" },
    { value: "California" },
    { value: "Texas" },
    { value: "Florida" }
  ];
  selectedList3 = [
    { value: "Select Country" },
    { value: "USA" },
    { value: "France" },
    { value: "India" },
    { value: "Spain" }
  ];
  selectedList4 = [
    { value: "Choose..." },
    { value: "One" },
    { value: "Two" },
    { value: "Three" }
  ];
  selectedList5 = [
    { value: "Choose..." },
    { value: "One" },
    { value: "Two" },
    { value: "Three" }
  ];
  static \u0275fac = function HorizontalFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HorizontalFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HorizontalFormComponent, selectors: [["app-horizontal-form"]], decls: 387, vars: 15, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["action", "#"], [1, "row", "mb-3"], [1, "col-lg-3", "col-form-label"], [1, "col-lg-9"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["type", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-md-12"], [1, "card"], [1, "mb-3"], [1, "col-xl-6"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "gender", "id", "gender_male", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "gender_male", 1, "form-check-label"], ["type", "radio", "name", "gender", "id", "gender_female", "value", "option2", 1, "form-check-input"], ["for", "gender_female", 1, "form-check-label"], ["placeholder", "Select", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["placeholder", "Select State", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["rows", "4", "cols", "5", "placeholder", "Enter message", 1, "form-control"], [1, "col-md-6"], ["type", "text", "placeholder", "First Name", 1, "form-control"], ["type", "text", "placeholder", "Last Name", 1, "form-control"], [1, "row", "mt-4"], ["placeholder", "Select Country", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "ZIP code", 1, "form-control"], ["type", "text", "placeholder", "State/Province", 1, "form-control"], ["type", "text", "placeholder", "City", 1, "form-control"], [1, "card-header", "justify-content-between"], ["for", "inputEmail1", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], [1, "input-group"], ["type", "email", "id", "inputEmail1", 1, "form-control"], [1, "input-group-text"], [1, "feather", "icon-mail"], ["for", "inputPassword1", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "inputPassword1", 1, "form-control"], [1, "feather", "icon-lock"], ["for", "colFormLabelSm", 1, "col-sm-2", "col-form-label", "col-form-label-sm"], ["type", "email", "id", "colFormLabelSm", "placeholder", "col-form-label-sm", 1, "form-control", "form-control-sm"], ["for", "colFormLabel", 1, "col-sm-2", "col-form-label"], ["type", "email", "id", "colFormLabel", "placeholder", "col-form-label", 1, "form-control"], ["for", "colFormLabelLg", 1, "col-sm-2", "col-form-label", "col-form-label-lg"], ["type", "email", "id", "colFormLabelLg", "placeholder", "col-form-label-lg", 1, "form-control", "form-control-lg"], [1, "col-xl-12"], [1, "row", "gy-2", "gx-3", "align-items-center", "mb-4"], [1, "col-auto"], ["for", "autoSizingInput", 1, "visually-hidden"], ["type", "text", "id", "autoSizingInput", "placeholder", "Jane Doe", 1, "form-control"], ["for", "autoSizingInputGroup", 1, "visually-hidden"], ["type", "text", "id", "autoSizingInputGroup", "placeholder", "Username", 1, "form-control"], ["for", "autoSizingSelect", 1, "visually-hidden"], ["placeholder", "Choose...", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "form-check"], ["type", "checkbox", "id", "autoSizingCheck", 1, "form-check-input"], ["for", "autoSizingCheck", 1, "form-check-label"], [1, "fw-semibold", "mb-1", "text-muted"], [1, "row", "gx-3", "gy-2", "align-items-center", "mt-0"], [1, "col-sm-3"], ["for", "specificSizeInputName", 1, "visually-hidden"], ["type", "text", "id", "specificSizeInputName", "placeholder", "Jane Doe", 1, "form-control"], ["for", "specificSizeInputGroupUsername", 1, "visually-hidden"], ["type", "text", "id", "specificSizeInputGroupUsername", "placeholder", "Username", 1, "form-control"], ["for", "specificSizeSelect", 1, "visually-hidden"], ["type", "checkbox", "id", "autoSizingCheck2", 1, "form-check-input"], ["for", "autoSizingCheck2", 1, "form-check-label"]], template: function HorizontalFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Horizontal Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Horizontal Form");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Basic Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "form", 14)(22, "div", 15)(23, "label", 16);
      \u0275\u0275text(24, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17);
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 15)(28, "label", 16);
      \u0275\u0275text(29, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17);
      \u0275\u0275element(31, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 15)(33, "label", 16);
      \u0275\u0275text(34, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 17);
      \u0275\u0275element(36, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 15)(38, "label", 16);
      \u0275\u0275text(39, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 17);
      \u0275\u0275element(41, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 15)(43, "label", 16);
      \u0275\u0275text(44, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 17);
      \u0275\u0275element(46, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 15)(48, "label", 16);
      \u0275\u0275text(49, "Repeat Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 17);
      \u0275\u0275element(51, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 3)(53, "button", 21);
      \u0275\u0275text(54, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(55, "div", 9)(56, "div", 10)(57, "div", 11)(58, "h5", 12);
      \u0275\u0275text(59, "Address Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 13)(61, "form", 14)(62, "div", 15)(63, "label", 16);
      \u0275\u0275text(64, "Address 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 17);
      \u0275\u0275element(66, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 15)(68, "label", 16);
      \u0275\u0275text(69, "Address 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 17);
      \u0275\u0275element(71, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 15)(73, "label", 16);
      \u0275\u0275text(74, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 17);
      \u0275\u0275element(76, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 15)(78, "label", 16);
      \u0275\u0275text(79, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 17);
      \u0275\u0275element(81, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 15)(83, "label", 16);
      \u0275\u0275text(84, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 17);
      \u0275\u0275element(86, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 15)(88, "label", 16);
      \u0275\u0275text(89, "Postal Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 17);
      \u0275\u0275element(91, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 3)(93, "button", 21);
      \u0275\u0275text(94, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(95, "div", 8)(96, "div", 22)(97, "div", 23)(98, "div", 11)(99, "h5", 12);
      \u0275\u0275text(100, "Two Column Horizontal Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 13)(102, "h6", 24);
      \u0275\u0275text(103, "Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "form", 14)(105, "div", 8)(106, "div", 25)(107, "div", 15)(108, "label", 16);
      \u0275\u0275text(109, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 17);
      \u0275\u0275element(111, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 15)(113, "label", 16);
      \u0275\u0275text(114, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 17);
      \u0275\u0275element(116, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 15)(118, "label", 16);
      \u0275\u0275text(119, "Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 17)(121, "div", 26);
      \u0275\u0275element(122, "input", 27);
      \u0275\u0275elementStart(123, "label", 28);
      \u0275\u0275text(124, " Male ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 26);
      \u0275\u0275element(126, "input", 29);
      \u0275\u0275elementStart(127, "label", 30);
      \u0275\u0275text(128, " Female ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(129, "div", 15)(130, "label", 16);
      \u0275\u0275text(131, "Blood Group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 17)(133, "mat-select", 31);
      \u0275\u0275twoWayListener("ngModelChange", function HorizontalFormComponent_Template_mat_select_ngModelChange_133_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(134, HorizontalFormComponent_For_135_Template, 2, 2, "mat-option", 32, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 25)(137, "div", 15)(138, "label", 16);
      \u0275\u0275text(139, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 17);
      \u0275\u0275element(141, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 15)(143, "label", 16);
      \u0275\u0275text(144, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "div", 17);
      \u0275\u0275element(146, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 15)(148, "label", 16);
      \u0275\u0275text(149, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 17);
      \u0275\u0275element(151, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 15)(153, "label", 16);
      \u0275\u0275text(154, "Repeat Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 17);
      \u0275\u0275element(156, "input", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(157, "h6", 24);
      \u0275\u0275text(158, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 8)(160, "div", 25)(161, "div", 15)(162, "label", 16);
      \u0275\u0275text(163, "Address Line 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 17);
      \u0275\u0275element(165, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 15)(167, "label", 16);
      \u0275\u0275text(168, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "div", 17);
      \u0275\u0275element(170, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 15)(172, "label", 16);
      \u0275\u0275text(173, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 17);
      \u0275\u0275element(175, "input", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(176, "div", 25)(177, "div", 15)(178, "label", 16);
      \u0275\u0275text(179, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 17);
      \u0275\u0275element(181, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 15)(183, "label", 16);
      \u0275\u0275text(184, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 17);
      \u0275\u0275element(186, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "div", 15)(188, "label", 16);
      \u0275\u0275text(189, "Postal Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "div", 17);
      \u0275\u0275element(191, "input", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(192, "div", 3)(193, "button", 21);
      \u0275\u0275text(194, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(195, "div", 8)(196, "div", 22)(197, "div", 23)(198, "div", 11)(199, "h5", 12);
      \u0275\u0275text(200, "Two Column Horizontal Form 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 13)(202, "form", 14)(203, "div", 8)(204, "div", 25)(205, "h6", 24);
      \u0275\u0275text(206, "Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "div", 15)(208, "label", 16);
      \u0275\u0275text(209, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 17);
      \u0275\u0275element(211, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 15)(213, "label", 16);
      \u0275\u0275text(214, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 17);
      \u0275\u0275element(216, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 15)(218, "label", 16);
      \u0275\u0275text(219, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 17);
      \u0275\u0275element(221, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 15)(223, "label", 16);
      \u0275\u0275text(224, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 17)(226, "mat-select", 33);
      \u0275\u0275twoWayListener("ngModelChange", function HorizontalFormComponent_Template_mat_select_ngModelChange_226_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(227, HorizontalFormComponent_For_228_Template, 2, 2, "mat-option", 32, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(229, "div", 15)(230, "label", 16);
      \u0275\u0275text(231, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 17);
      \u0275\u0275element(233, "textarea", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(234, "div", 25)(235, "h6", 24);
      \u0275\u0275text(236, "Personal Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "div", 8)(238, "label", 16);
      \u0275\u0275text(239, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "div", 17)(241, "div", 8)(242, "div", 35)(243, "div", 24);
      \u0275\u0275element(244, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 35)(246, "div", 24);
      \u0275\u0275element(247, "input", 37);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(248, "div", 15)(249, "label", 16);
      \u0275\u0275text(250, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 17);
      \u0275\u0275element(252, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 15)(254, "label", 16);
      \u0275\u0275text(255, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "div", 17);
      \u0275\u0275element(257, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "div", 15)(259, "label", 16);
      \u0275\u0275text(260, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "div", 17);
      \u0275\u0275element(262, "input", 18);
      \u0275\u0275elementStart(263, "div", 38)(264, "div", 35)(265, "div", 24)(266, "mat-select", 39);
      \u0275\u0275twoWayListener("ngModelChange", function HorizontalFormComponent_Template_mat_select_ngModelChange_266_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(267, HorizontalFormComponent_For_268_Template, 2, 2, "mat-option", 32, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 24);
      \u0275\u0275element(270, "input", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "div", 35)(272, "div", 24);
      \u0275\u0275element(273, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div", 24);
      \u0275\u0275element(275, "input", 42);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(276, "div", 3)(277, "button", 21);
      \u0275\u0275text(278, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(279, "div", 8)(280, "div", 25)(281, "div", 23)(282, "div", 43)(283, "div", 12);
      \u0275\u0275text(284, " Horizontal form With Icons ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 13)(286, "form")(287, "div", 15)(288, "label", 44);
      \u0275\u0275text(289, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "div", 45)(291, "div", 46);
      \u0275\u0275element(292, "input", 47);
      \u0275\u0275elementStart(293, "div", 48);
      \u0275\u0275element(294, "i", 49);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(295, "div", 15)(296, "label", 50);
      \u0275\u0275text(297, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div", 45)(299, "div", 46);
      \u0275\u0275element(300, "input", 51);
      \u0275\u0275elementStart(301, "div", 48);
      \u0275\u0275element(302, "i", 52);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(303, "button", 21);
      \u0275\u0275text(304, "Sign in");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(305, "div", 25)(306, "div", 23)(307, "div", 43)(308, "div", 12);
      \u0275\u0275text(309, " Horizontal form label sizing ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "div", 13)(311, "div", 15)(312, "label", 53);
      \u0275\u0275text(313, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div", 45);
      \u0275\u0275element(315, "input", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "div", 15)(317, "label", 55);
      \u0275\u0275text(318, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "div", 45);
      \u0275\u0275element(320, "input", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(321, "div", 8)(322, "label", 57);
      \u0275\u0275text(323, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "div", 45);
      \u0275\u0275element(325, "input", 58);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(326, "div", 8)(327, "div", 59)(328, "div", 23)(329, "div", 43)(330, "div", 12);
      \u0275\u0275text(331, " Auto sizing ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div", 13)(333, "form", 60)(334, "div", 61)(335, "label", 62);
      \u0275\u0275text(336, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(337, "input", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "div", 61)(339, "label", 64);
      \u0275\u0275text(340, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "div", 46)(342, "div", 48);
      \u0275\u0275text(343, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(344, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "div", 61)(346, "label", 66);
      \u0275\u0275text(347, "Preference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "mat-select", 67);
      \u0275\u0275twoWayListener("ngModelChange", function HorizontalFormComponent_Template_mat_select_ngModelChange_348_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(349, HorizontalFormComponent_For_350_Template, 2, 2, "mat-option", 32, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "div", 61)(352, "div", 68);
      \u0275\u0275element(353, "input", 69);
      \u0275\u0275elementStart(354, "label", 70);
      \u0275\u0275text(355, " Remember me ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(356, "div", 61)(357, "button", 21);
      \u0275\u0275text(358, "Submit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(359, "span", 71);
      \u0275\u0275text(360, "You can then remix that once again with size-specific column classes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "form", 72)(362, "div", 73)(363, "label", 74);
      \u0275\u0275text(364, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(365, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "div", 73)(367, "label", 76);
      \u0275\u0275text(368, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "div", 46)(370, "div", 48);
      \u0275\u0275text(371, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(372, "input", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "div", 73)(374, "label", 78);
      \u0275\u0275text(375, "Preference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "mat-select", 67);
      \u0275\u0275twoWayListener("ngModelChange", function HorizontalFormComponent_Template_mat_select_ngModelChange_376_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(377, HorizontalFormComponent_For_378_Template, 2, 2, "mat-option", 32, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(379, "div", 61)(380, "div", 68);
      \u0275\u0275element(381, "input", 79);
      \u0275\u0275elementStart(382, "label", 80);
      \u0275\u0275text(383, " Remember me ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(384, "div", 61)(385, "button", 21);
      \u0275\u0275text(386, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(133);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(92);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue2);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList2);
      \u0275\u0275advance(39);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue3);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList3);
      \u0275\u0275advance(81);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue4);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList4);
      \u0275\u0275advance(27);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue5);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList5);
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HorizontalFormComponent, [{
    type: Component,
    args: [{ selector: "app-horizontal-form", imports: [CommonModule, MatSelectModule, FormsModule], template: '    <!-- Page Header -->\n    <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n    <div class="flex-grow-1">\n        <h4 class="fs-18 fw-semibold mb-0">Horizontal Form</h4>\n    </div>\n    <div class="text-end">\n        <ol class="breadcrumb m-0 py-0">\n            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n            <li class="breadcrumb-item active">Horizontal Form</li>\n        </ol>\n    </div>\n</div>\n<!-- End Page Header -->\n  \n  <div class="row">\n    <div class="col-xl-6 d-flex">\n      <div class="card flex-fill">\n        <div class="card-header">\n          <h5 class="card-title">Basic Form</h5>\n        </div>\n        <div class="card-body">\n          <form action="#">\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">First Name</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Last Name</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Email Address</label>\n              <div class="col-lg-9">\n                <input type="email" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Username</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Password</label>\n              <div class="col-lg-9">\n                <input type="password" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Repeat Password</label>\n              <div class="col-lg-9">\n                <input type="password" class="form-control">\n              </div>\n            </div>\n            <div class="text-end">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class="col-xl-6 d-flex">\n      <div class="card flex-fill">\n        <div class="card-header">\n          <h5 class="card-title">Address Form</h5>\n        </div>\n        <div class="card-body">\n          <form action="#">\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Address 1</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Address 2</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">City</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">State</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Country</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label class="col-lg-3 col-form-label">Postal Code</label>\n              <div class="col-lg-9">\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="text-end">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-12">\n      <div class="card">\n        <div class="card-header">\n          <h5 class="card-title">Two Column Horizontal Form</h5>\n        </div>\n        <div class="card-body">\n          <h6 class="mb-3">Personal Information</h6>\n          <form action="#">\n            <div class="row">\n              <div class="col-xl-6">\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">First Name</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Last Name</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Gender</label>\n                  <div class="col-lg-9">\n                    <div class="form-check form-check-inline">\n                      <input class="form-check-input" type="radio" name="gender" id="gender_male" value="option1" checked>\n                      <label class="form-check-label" for="gender_male">\n                        Male\n                      </label>\n                    </div>\n                    <div class="form-check form-check-inline">\n                      <input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2">\n                      <label class="form-check-label" for="gender_female">\n                        Female\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Blood Group</label>\n                  <div class="col-lg-9">\n                    <mat-select [(ngModel)]="selectedValue1" [ngModelOptions]="{standalone: true}" class="select"\n                      placeholder="Select">\n                      @for (data of selectedList1; track data) {\n                      <mat-option [value]="data.value">\n                        {{data.value}}\n                      </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6">\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Username</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Email</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Password</label>\n                  <div class="col-lg-9">\n                    <input type="password" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Repeat Password</label>\n                  <div class="col-lg-9">\n                    <input type="password" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <h6 class="mb-3">Address</h6>\n            <div class="row">\n              <div class="col-xl-6">\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Address Line 1</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Address Line 2</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">State</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6">\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">City</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Country</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Postal Code</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="text-end">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-12">\n      <div class="card">\n        <div class="card-header">\n          <h5 class="card-title">Two Column Horizontal Form 2</h5>\n        </div>\n        <div class="card-body">\n          <form action="#">\n            <div class="row">\n              <div class="col-xl-6">\n                <h6 class="mb-3">Personal Information</h6>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">First Name</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Last Name</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Password</label>\n                  <div class="col-lg-9">\n                    <input type="password" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">State</label>\n                  <div class="col-lg-9">\n                    <mat-select [(ngModel)]="selectedValue2" [ngModelOptions]="{standalone: true}" class="select"\n                      placeholder="Select State">\n                      @for (data of selectedList2; track data) {\n                      <mat-option [value]="data.value">\n                        {{data.value}}\n                      </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">About</label>\n                  <div class="col-lg-9">\n                    <textarea rows="4" cols="5" class="form-control" placeholder="Enter message"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6">\n                <h6 class="mb-3">Personal Details</h6>\n                <div class="row">\n                  <label class="col-lg-3 col-form-label">Name</label>\n                  <div class="col-lg-9">\n                    <div class="row">\n                      <div class="col-md-6">\n                        <div class="mb-3">\n                          <input type="text" placeholder="First Name" class="form-control">\n                        </div>\n                      </div>\n                      <div class="col-md-6">\n                        <div class="mb-3">\n                          <input type="text" placeholder="Last Name" class="form-control">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Email</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Phone</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="row mb-3">\n                  <label class="col-lg-3 col-form-label">Address</label>\n                  <div class="col-lg-9">\n                    <input type="text" class="form-control">\n                    <div class="row mt-4">\n                      <div class="col-md-6">\n                        <div class="mb-3">\n                          <mat-select [(ngModel)]="selectedValue3" [ngModelOptions]="{standalone: true}" class="select"\n                            placeholder="Select Country">\n                            @for (data of selectedList3; track data) {\n                            <mat-option [value]="data.value">\n                              {{data.value}}\n                            </mat-option>\n                            }\n                          </mat-select>\n                        </div>\n                        <div class="mb-3">\n                          <input type="text" placeholder="ZIP code" class="form-control">\n                        </div>\n                      </div>\n                      <div class="col-md-6">\n                        <div class="mb-3">\n                          <input type="text" placeholder="State/Province" class="form-control">\n                        </div>\n                        <div class="mb-3">\n                          <input type="text" placeholder="City" class="form-control">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="text-end">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n  \n    <div class="col-xl-6">\n      <div class="card">\n        <div class="card-header justify-content-between">\n          <div class="card-title">\n            Horizontal form With Icons\n          </div>\n  \n        </div>\n        <div class="card-body">\n          <form>\n            <div class="row mb-3">\n              <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>\n              <div class="col-sm-10">\n                <div class="input-group">\n                  <input type="email" class="form-control" id="inputEmail1">\n                  <div class="input-group-text">\n                    <i class="feather icon-mail"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="row mb-3">\n              <label for="inputPassword1" class="col-sm-2 col-form-label">Password</label>\n              <div class="col-sm-10">\n                <div class="input-group">\n                  <input type="password" class="form-control" id="inputPassword1">\n                  <div class="input-group-text">\n                    <i class="feather icon-lock"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n  \n            <button type="submit" class="btn btn-primary">Sign in</button>\n          </form>\n        </div>\n  \n      </div>\n    </div>\n    <div class="col-xl-6">\n      <div class="card">\n        <div class="card-header justify-content-between">\n          <div class="card-title">\n            Horizontal form label sizing\n          </div>\n  \n        </div>\n        <div class="card-body">\n          <div class="row mb-3">\n            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>\n            <div class="col-sm-10">\n              <input type="email" class="form-control form-control-sm" id="colFormLabelSm"\n                placeholder="col-form-label-sm">\n            </div>\n          </div>\n          <div class="row mb-3">\n            <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>\n            <div class="col-sm-10">\n              <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">\n            </div>\n          </div>\n          <div class="row">\n            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>\n            <div class="col-sm-10">\n              <input type="email" class="form-control form-control-lg" id="colFormLabelLg"\n                placeholder="col-form-label-lg">\n            </div>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-xl-12">\n      <div class="card">\n        <div class="card-header justify-content-between">\n          <div class="card-title">\n            Auto sizing\n          </div>\n  \n        </div>\n        <div class="card-body">\n          <form class="row gy-2 gx-3 align-items-center mb-4">\n            <div class="col-auto">\n              <label class="visually-hidden" for="autoSizingInput">Name</label>\n              <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">\n            </div>\n            <div class="col-auto">\n              <label class="visually-hidden" for="autoSizingInputGroup">Username</label>\n              <div class="input-group">\n                <div class="input-group-text">&#64;</div>\n                <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">\n              </div>\n            </div>\n            <div class="col-auto">\n              <label class="visually-hidden" for="autoSizingSelect">Preference</label>\n              <mat-select [(ngModel)]="selectedValue4" [ngModelOptions]="{standalone: true}" class="select"\n                placeholder="Choose...">\n                @for (data of selectedList4; track data) {\n                <mat-option [value]="data.value">\n                  {{data.value}}\n                </mat-option>\n                }\n              </mat-select>\n            </div>\n            <div class="col-auto">\n              <div class="form-check">\n                <input class="form-check-input" type="checkbox" id="autoSizingCheck">\n                <label class="form-check-label" for="autoSizingCheck">\n                  Remember me\n                </label>\n              </div>\n            </div>\n            <div class="col-auto">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n          <span class="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific column\n            classes.</span>\n          <form class="row gx-3 gy-2 align-items-center mt-0">\n            <div class="col-sm-3">\n              <label class="visually-hidden" for="specificSizeInputName">Name</label>\n              <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">\n            </div>\n            <div class="col-sm-3">\n              <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>\n              <div class="input-group">\n                <div class="input-group-text">&#64;</div>\n                <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">\n              </div>\n            </div>\n            <div class="col-sm-3">\n              <label class="visually-hidden" for="specificSizeSelect">Preference</label>\n              <mat-select [(ngModel)]="selectedValue5" [ngModelOptions]="{standalone: true}" class="select"\n                placeholder="Choose...">\n                @for (data of selectedList5; track data) {\n                <mat-option [value]="data.value">\n                  {{data.value}}\n                </mat-option>\n                }\n              </mat-select>\n            </div>\n            <div class="col-auto">\n              <div class="form-check">\n                <input class="form-check-input" type="checkbox" id="autoSizingCheck2">\n                <label class="form-check-label" for="autoSizingCheck2">\n                  Remember me\n                </label>\n              </div>\n            </div>\n            <div class="col-auto">\n              <button type="submit" class="btn btn-primary">Submit</button>\n            </div>\n          </form>\n        </div>\n  \n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HorizontalFormComponent, { className: "HorizontalFormComponent", filePath: "src/app/features/ui-interface/forms/horizontal-form/horizontal-form.component.ts", lineNumber: 15 });
})();
export {
  HorizontalFormComponent
};
//# sourceMappingURL=chunk-VMAMGOKA.js.map
