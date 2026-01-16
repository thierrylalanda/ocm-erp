import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
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

// src/app/features/ui-interface/forms/basic-inputs/basic-inputs.component.ts
var BasicInputsComponent = class _BasicInputsComponent {
  selectedValue = "";
  selectedList = [
    { value: "-- Select --" },
    { value: "Option 1" },
    { value: "Option 2" },
    { value: "Option 3" },
    { value: "Option 4" },
    { value: "Option 5" }
  ];
  static \u0275fac = function BasicInputsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BasicInputsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicInputsComponent, selectors: [["app-basic-inputs"]], decls: 252, vars: 0, consts: [[1, "cardhead"], [1, "container-fluid"], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["action", "#"], [1, "mb-3", "row"], [1, "col-form-label", "col-lg-2"], [1, "col-lg-10"], [1, "input-group"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], [1, "mb-3", "row", "mb-0"], [1, "input-group", "mb-3"], ["type", "text", 1, "form-control"], ["aria-label", "With textarea", 1, "form-control"], [1, "input-group", "input-group-lg"], ["id", "inputGroup-sizing-lg", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-lg", 1, "form-control"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "input-group", "input-group-sm"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["type", "checkbox", "value", "", "aria-label", "Checkbox for following text input", 1, "form-check-input"], ["type", "text", "aria-label", "Text input with checkbox", 1, "form-control"], ["type", "radio", "value", "", "aria-label", "Radio button for following text input", 1, "form-check-input"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control"], ["type", "checkbox"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-end"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-primary", "dropdown-toggle"], ["type", "text", "aria-label", "Text input with 2 dropdown buttons", 1, "form-control"]], template: function BasicInputsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      \u0275\u0275text(5, "Basic Inputs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "ol", 6)(8, "li", 7)(9, "a", 8);
      \u0275\u0275text(10, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li", 7)(12, "a", 8);
      \u0275\u0275text(13, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li", 9);
      \u0275\u0275text(15, "Basic Inputs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "h5", 14);
      \u0275\u0275text(21, "Basic Examples");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15)(23, "form", 16)(24, "div", 17)(25, "label", 18);
      \u0275\u0275text(26, "Group Left");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "span", 21);
      \u0275\u0275text(30, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 17)(33, "label", 18);
      \u0275\u0275text(34, "Group Right");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 19)(36, "div", 20);
      \u0275\u0275element(37, "input", 23);
      \u0275\u0275elementStart(38, "span", 24);
      \u0275\u0275text(39, "@example.com");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 17)(41, "label", 18);
      \u0275\u0275text(42, "URL Example");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 19)(44, "div", 20)(45, "span", 25);
      \u0275\u0275text(46, "https://example.com/users/");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "input", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 17)(49, "label", 18);
      \u0275\u0275text(50, "Group with Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 19)(52, "div", 20)(53, "span", 27);
      \u0275\u0275text(54, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 28);
      \u0275\u0275elementStart(56, "span", 27);
      \u0275\u0275text(57, ".00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 29)(59, "label", 18);
      \u0275\u0275text(60, "Group with Price (Left)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 19)(62, "div", 30)(63, "span", 27);
      \u0275\u0275text(64, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 27);
      \u0275\u0275text(66, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 20)(69, "span", 27);
      \u0275\u0275text(70, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 28);
      \u0275\u0275elementStart(72, "span", 27);
      \u0275\u0275text(73, ".00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "div", 29)(75, "label", 18);
      \u0275\u0275text(76, "With textarea");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 19)(78, "div", 20)(79, "span", 27);
      \u0275\u0275text(80, "With textarea");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "textarea", 32);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(82, "div", 12)(83, "div", 13)(84, "h5", 14);
      \u0275\u0275text(85, "Sizing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 15)(87, "form", 16)(88, "div", 17)(89, "label", 18);
      \u0275\u0275text(90, "Input Group Large");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 19)(92, "div", 33)(93, "span", 34);
      \u0275\u0275text(94, "Large");
      \u0275\u0275elementEnd();
      \u0275\u0275element(95, "input", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 17)(97, "label", 18);
      \u0275\u0275text(98, "Input Group Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 19)(100, "div", 20)(101, "span", 36);
      \u0275\u0275text(102, "Default");
      \u0275\u0275elementEnd();
      \u0275\u0275element(103, "input", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 29)(105, "label", 18);
      \u0275\u0275text(106, "Input Group Small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 19)(108, "div", 38)(109, "span", 39);
      \u0275\u0275text(110, "Small");
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "input", 40);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(112, "div", 12)(113, "div", 13)(114, "h5", 14);
      \u0275\u0275text(115, "Checkbox and Radio Addons");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 15)(117, "form", 16)(118, "div", 17)(119, "label", 18);
      \u0275\u0275text(120, "Checkbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 19)(122, "div", 20)(123, "div", 27);
      \u0275\u0275element(124, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275element(125, "input", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 29)(127, "label", 18);
      \u0275\u0275text(128, "Radio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 19)(130, "div", 20)(131, "div", 27);
      \u0275\u0275element(132, "input", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275element(133, "input", 44);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(134, "div", 12)(135, "div", 13)(136, "h5", 14);
      \u0275\u0275text(137, "Multiple Addons");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 15)(139, "form", 16)(140, "div", 17)(141, "label", 18);
      \u0275\u0275text(142, "Radio and Text Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 19)(144, "div", 20)(145, "span", 27);
      \u0275\u0275element(146, "input", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "span", 27);
      \u0275\u0275text(148, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(149, "input", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 29)(151, "label", 18);
      \u0275\u0275text(152, "Two Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 19)(154, "div", 20)(155, "span", 27);
      \u0275\u0275text(156, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "span", 27);
      \u0275\u0275text(158, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275element(159, "input", 31);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(160, "div", 12)(161, "div", 13)(162, "h5", 14);
      \u0275\u0275text(163, "Buttons with dropdowns");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 15)(165, "form", 16)(166, "div", 17)(167, "label", 18);
      \u0275\u0275text(168, "Left Dropdown Text Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "div", 19)(170, "div", 20)(171, "button", 46);
      \u0275\u0275text(172, "Dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "ul", 47)(174, "li")(175, "a", 48);
      \u0275\u0275text(176, "Action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "li")(178, "a", 48);
      \u0275\u0275text(179, "Another action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "li")(181, "a", 48);
      \u0275\u0275text(182, "Something else here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "li");
      \u0275\u0275element(184, "hr", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "li")(186, "a", 48);
      \u0275\u0275text(187, "Separated link");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(188, "input", 50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "div", 29)(190, "label", 18);
      \u0275\u0275text(191, "Right Dropdown Text Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 19)(193, "div", 20);
      \u0275\u0275element(194, "input", 50);
      \u0275\u0275elementStart(195, "button", 51);
      \u0275\u0275text(196, "Dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "ul", 52)(198, "li")(199, "a", 48);
      \u0275\u0275text(200, "Action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "li")(202, "a", 48);
      \u0275\u0275text(203, "Another action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "a", 48);
      \u0275\u0275text(206, "Something else here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "li");
      \u0275\u0275element(208, "hr", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "li")(210, "a", 48);
      \u0275\u0275text(211, "Separated link");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(212, "div", 29)(213, "label", 18);
      \u0275\u0275text(214, "Right Dropdown Text Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 19)(216, "div", 20)(217, "button", 53);
      \u0275\u0275text(218, "Dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "ul", 47)(220, "li")(221, "a", 48);
      \u0275\u0275text(222, "Action before");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "li")(224, "a", 48);
      \u0275\u0275text(225, "Another action before");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "li")(227, "a", 48);
      \u0275\u0275text(228, "Something else here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "li");
      \u0275\u0275element(230, "hr", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "li")(232, "a", 48);
      \u0275\u0275text(233, "Separated link");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(234, "input", 54);
      \u0275\u0275elementStart(235, "button", 53);
      \u0275\u0275text(236, "Dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "ul", 52)(238, "li")(239, "a", 48);
      \u0275\u0275text(240, "Action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "li")(242, "a", 48);
      \u0275\u0275text(243, "Another action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "li")(245, "a", 48);
      \u0275\u0275text(246, "Something else here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "li");
      \u0275\u0275element(248, "hr", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "li")(250, "a", 48);
      \u0275\u0275text(251, "Separated link");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicInputsComponent, [{
    type: Component,
    args: [{ selector: "app-basic-inputs", imports: [CommonModule, FormsModule], template: `<div class="cardhead">
  <div class=" container-fluid">

                  <!-- Page Header -->
                  <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                    <div class="flex-grow-1">
                        <h4 class="fs-18 fw-semibold mb-0">Basic Inputs</h4>
                    </div>
                    <div class="text-end">
                        <ol class="breadcrumb m-0 py-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                            <li class="breadcrumb-item active">Basic Inputs</li>
                        </ol>
                    </div>
                </div>
                <!-- End Page Header -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Basic Examples</h5>
          </div>
          <div class="card-body">
            <form action="#">
              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">Group Left</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">&#64;</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">Group Right</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <span class="input-group-text" id="basic-addon2">&#64;example.com</span>
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">URL Example</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                  </div>
                </div>
              </div>

              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">Group with Price</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </div>

              <div class="mb-3 row mb-0">
                <label class="col-form-label col-lg-2">Group with Price (Left)</label>
                <div class="col-lg-10">
                  <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                    <input type="text" class="form-control">
                  </div>
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </div>

              <div class="mb-3 row mb-0">
                <label class="col-form-label col-lg-2">With textarea</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <span class="input-group-text">With textarea</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Sizing</h5>
          </div>
          <div class="card-body">
            <form action="#">
              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">Input Group Large</label>
                <div class="col-lg-10">
                  <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">Input Group Default</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                </div>
              </div>
              <div class="mb-3 row mb-0">
                <label class="col-form-label col-lg-2">Input Group Small</label>
                <div class="col-lg-10">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Checkbox and Radio Addons</h5>
          </div>
          <div class="card-body">
            <form action="#">
              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">Checkbox</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <div class="input-group-text">
                      <input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with checkbox">
                  </div>
                </div>
              </div>
              <div class="mb-3 row mb-0">
                <label class="col-form-label col-lg-2">Radio</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <div class="input-group-text">
                      <input class="form-check-input" type="radio" value="" aria-label="Radio button for following text input">
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with radio button">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Multiple Addons</h5>
          </div>
          <div class="card-body">
            <form action="#">
              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">Radio and Text Addons</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <span class="input-group-text">
                      <input type="checkbox">
                    </span>
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
              <div class="mb-3 row mb-0">
                <label class="col-form-label col-lg-2">Two Addons</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Buttons with dropdowns</h5>
          </div>
          <div class="card-body">
            <form action="#">
              <div class="mb-3 row">
                <label class="col-form-label col-lg-2">Left Dropdown Text Addons</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button">
                  </div>
                </div>
              </div>

              <div class="mb-3 row mb-0">
                <label class="col-form-label col-lg-2">Right Dropdown Text Addons</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <input type="text" class="form-control" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="mb-3 row mb-0">
                <label class="col-form-label col-lg-2">Right Dropdown Text Addons</label>
                <div class="col-lg-10">
                  <div class="input-group">
                    <button class="btn btn-soft-primary dropdown-toggle" type="button"
                      data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action before</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action before</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                    <input type="text" class="form-control"
                      aria-label="Text input with 2 dropdown buttons">
                    <button class="btn btn-soft-primary dropdown-toggle" type="button"
                      data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicInputsComponent, { className: "BasicInputsComponent", filePath: "src/app/features/ui-interface/forms/basic-inputs/basic-inputs.component.ts", lineNumber: 13 });
})();
export {
  BasicInputsComponent
};
//# sourceMappingURL=chunk-D4UPQJDH.js.map
