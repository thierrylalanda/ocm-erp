import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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

// src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.ts
var FormGridGuttersComponent = class _FormGridGuttersComponent {
  static \u0275fac = function FormGridGuttersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGridGuttersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormGridGuttersComponent, selectors: [["app-form-grid-gutters"]], decls: 150, vars: 0, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "First Name", 1, "form-control"], ["type", "text", "placeholder", "Last Name", 1, "form-control"], [1, "col-xl-12", "mb-3"], ["type", "text", "placeholder", "Street", 1, "form-control"], ["type", "text", "placeholder", "Landmark", 1, "form-control"], [1, "col-xxl-6", "col-xl-12", "mb-3"], ["type", "text", "placeholder", "City", 1, "form-control"], ["id", "inputState1", 1, "form-select"], ["selected", ""], ["type", "text", "placeholder", "Postal/Zip code", 1, "form-control"], ["id", "inputCountry", 1, "form-select"], ["type", "email", "placeholder", "Email", 1, "form-control"], ["type", "date", "bsDatepicker", "", 1, "form-control"], [1, "form-label", "mb-1"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "status-married", "required", "", 1, "form-check-input"], ["for", "status-married", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "status-unmarried", "required", "", 1, "form-check-input"], ["for", "status-unmarried", 1, "form-check-label"], [1, "col-xl-12"], ["type", "number", "placeholder", "Phone Number", 1, "form-control"], [1, "col-md-12"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], [1, "row", "g-3", "mt-0"], [1, "col-md-6"], ["for", "inputEmail4", 1, "form-label"], ["type", "email", "id", "inputEmail4", 1, "form-control"], ["for", "inputPassword4", 1, "form-label"], ["type", "password", "id", "inputPassword4", 1, "form-control"], [1, "col-12"], ["for", "inputAddress", 1, "form-label"], ["type", "text", "id", "inputAddress", 1, "form-control"], ["for", "inputAddress2", 1, "form-label"], ["type", "text", "id", "inputAddress2", 1, "form-control"], ["for", "inputCity", 1, "form-label"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "col-md-4"], ["for", "inputState", 1, "form-label"], ["id", "inputState", 1, "form-select"], [1, "col-md-2"], ["for", "inputZip", 1, "form-label"], ["type", "text", "id", "inputZip", 1, "form-control"], ["type", "checkbox", "id", "gridCheck3", 1, "form-check-input"], ["for", "gridCheck3", 1, "form-check-label"]], template: function FormGridGuttersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Grid Gutters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Grid Gutters");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12);
      \u0275\u0275text(19, " Form Grid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 8)(22, "div", 14)(23, "label", 15);
      \u0275\u0275text(24, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14)(27, "label", 15);
      \u0275\u0275text(28, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 14)(31, "label", 15);
      \u0275\u0275text(32, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 8)(34, "div", 18);
      \u0275\u0275element(35, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 18);
      \u0275\u0275element(37, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 21);
      \u0275\u0275element(39, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 21)(41, "select", 23)(42, "option", 24);
      \u0275\u0275text(43, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option");
      \u0275\u0275text(45, "...");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 21);
      \u0275\u0275element(47, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 21)(49, "select", 26)(50, "option", 24);
      \u0275\u0275text(51, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option");
      \u0275\u0275text(53, "...");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "div", 14)(55, "div", 8)(56, "div", 18)(57, "label", 15);
      \u0275\u0275text(58, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 18)(61, "label", 15);
      \u0275\u0275text(62, "DOB");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 18)(65, "div", 8)(66, "label", 29);
      \u0275\u0275text(67, "Maritial Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 9)(69, "div", 30);
      \u0275\u0275element(70, "input", 31);
      \u0275\u0275elementStart(71, "label", 32);
      \u0275\u0275text(72, " Married ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 9)(74, "div", 30);
      \u0275\u0275element(75, "input", 33);
      \u0275\u0275elementStart(76, "label", 34);
      \u0275\u0275text(77, " Single ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(78, "div", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 14)(80, "label", 15);
      \u0275\u0275text(81, "Contact Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 14)(84, "label", 15);
      \u0275\u0275text(85, "Alternative Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 37)(88, "div", 38);
      \u0275\u0275element(89, "input", 39);
      \u0275\u0275elementStart(90, "label", 40);
      \u0275\u0275text(91, " Check me out ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 37)(93, "button", 41);
      \u0275\u0275text(94, "Sign in");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "div", 9)(96, "div", 10)(97, "div", 11)(98, "div", 12);
      \u0275\u0275text(99, " Gutters ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 13)(101, "form", 42)(102, "div", 43)(103, "label", 15);
      \u0275\u0275text(104, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(105, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 43)(107, "label", 15);
      \u0275\u0275text(108, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 43)(111, "label", 44);
      \u0275\u0275text(112, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(113, "input", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 43)(115, "label", 46);
      \u0275\u0275text(116, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "input", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 48)(119, "label", 49);
      \u0275\u0275text(120, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(121, "input", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 48)(123, "label", 51);
      \u0275\u0275text(124, "Address 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(125, "input", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 43)(127, "label", 53);
      \u0275\u0275text(128, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(129, "input", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 55)(131, "label", 56);
      \u0275\u0275text(132, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "select", 57)(134, "option", 24);
      \u0275\u0275text(135, "Choose...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option");
      \u0275\u0275text(137, "...");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "div", 58)(139, "label", 59);
      \u0275\u0275text(140, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(141, "input", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 48)(143, "div", 30);
      \u0275\u0275element(144, "input", 61);
      \u0275\u0275elementStart(145, "label", 62);
      \u0275\u0275text(146, " Check me out ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 48)(148, "button", 41);
      \u0275\u0275text(149, "Sign in");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGridGuttersComponent, [{
    type: Component,
    args: [{ selector: "app-form-grid-gutters", imports: [CommonModule, FormsModule], template: '              <!-- Page Header -->\n              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n                <div class="flex-grow-1">\n                    <h4 class="fs-18 fw-semibold mb-0">Grid Gutters</h4>\n                </div>\n                <div class="text-end">\n                    <ol class="breadcrumb m-0 py-0">\n                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                        <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n                        <li class="breadcrumb-item active">Grid Gutters</li>\n                    </ol>\n                </div>\n            </div>\n            <!-- End Page Header -->\n<div class="row">\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Form Grid\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="row">\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">First Name</label>\n                        <input type="text" class="form-control" placeholder="First Name">\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">Last Name</label>\n                        <input type="text" class="form-control" placeholder="Last Name">\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">Address</label>\n                        <div class="row">\n                            <div class="col-xl-12 mb-3">\n                                <input type="text" class="form-control" placeholder="Street">\n                            </div>\n                            <div class="col-xl-12 mb-3">\n                                <input type="text" class="form-control" placeholder="Landmark">\n                            </div>\n                            <div class="col-xxl-6 col-xl-12 mb-3">\n                                <input type="text" class="form-control" placeholder="City">\n                            </div>\n                            <div class="col-xxl-6 col-xl-12 mb-3">\n                                <select id="inputState1" class="form-select">\n                                    <option selected="">State</option>\n                                    <option>...</option>\n                                </select>\n                            </div>\n                            <div class="col-xxl-6 col-xl-12 mb-3">\n                                <input type="text" class="form-control" placeholder="Postal/Zip code">\n                            </div>\n                            <div class="col-xxl-6 col-xl-12 mb-3">\n                                <select id="inputCountry" class="form-select">\n                                    <option selected="">Country</option>\n                                    <option>...</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <div class="row">\n                            <div class="col-xl-12 mb-3">\n                                <label class="form-label">Email</label>\n                                <input type="email" class="form-control" placeholder="Email">\n                            </div>\n                            <div class="col-xl-12 mb-3">\n                                <label class="form-label">DOB</label>\n                                <input type="date" class="form-control" bsDatepicker>\n                            </div>\n                            <div class="col-xl-12 mb-3">\n                                <div class="row">\n                                    <label class="form-label mb-1">Maritial Status</label>\n                                    <div class="col-xl-6">\n                                        <div class="form-check">\n                                            <input class="form-check-input" type="checkbox" value="" id="status-married" required="">\n                                            <label class="form-check-label" for="status-married">\n                                                Married\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div class="col-xl-6">\n                                        <div class="form-check">\n                                            <input class="form-check-input" type="checkbox" value="" id="status-unmarried" required="">\n                                            <label class="form-check-label" for="status-unmarried">\n                                                Single\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-xl-12">\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">Contact Number</label>\n                        <input type="number" class="form-control" placeholder="Phone Number">\n                    </div>\n                    <div class="col-md-6 mb-3">\n                        <label class="form-label">Alternative Contact</label>\n                        <input type="number" class="form-control" placeholder="Phone Number">\n                    </div>\n                    <div class="col-md-12">\n                        <div class="form-check mb-3">\n                            <input class="form-check-input" type="checkbox" id="gridCheck">\n                            <label class="form-check-label" for="gridCheck">\n                                Check me out\n                            </label>\n                        </div>\n                    </div>\n                    <div class="col-md-12">\n                        <button type="submit" class="btn btn-primary">Sign in</button>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Gutters\n                </div>\n                \n            </div>\n            <div class="card-body">\n                <form class="row g-3 mt-0">\n                    <div class="col-md-6">\n                        <label class="form-label">First Name</label>\n                        <input type="text" class="form-control" placeholder="First Name">\n                    </div>\n                    <div class="col-md-6">\n                        <label class="form-label">Last Name</label>\n                        <input type="text" class="form-control" placeholder="Last Name">\n                    </div>\n                    <div class="col-md-6">\n                        <label for="inputEmail4" class="form-label">Email</label>\n                        <input type="email" class="form-control" id="inputEmail4">\n                    </div>\n                    <div class="col-md-6">\n                        <label for="inputPassword4" class="form-label">Password</label>\n                        <input type="password" class="form-control" id="inputPassword4">\n                    </div>\n                    <div class="col-12">\n                        <label for="inputAddress" class="form-label">Address</label>\n                        <input type="text" class="form-control" id="inputAddress">\n                    </div>\n                    <div class="col-12">\n                        <label for="inputAddress2" class="form-label">Address 2</label>\n                        <input type="text" class="form-control" id="inputAddress2">\n                    </div>\n                    <div class="col-md-6">\n                        <label for="inputCity" class="form-label">City</label>\n                        <input type="text" class="form-control" id="inputCity">\n                    </div>\n                    <div class="col-md-4">\n                        <label for="inputState" class="form-label">State</label>\n                        <select id="inputState" class="form-select">\n                            <option selected="">Choose...</option>\n                            <option>...</option>\n                        </select>\n                    </div>\n                    <div class="col-md-2">\n                        <label for="inputZip" class="form-label">Zip</label>\n                        <input type="text" class="form-control" id="inputZip">\n                    </div>\n                    <div class="col-12">\n                        <div class="form-check">\n                            <input class="form-check-input" type="checkbox" id="gridCheck3">\n                            <label class="form-check-label" for="gridCheck3">\n                                Check me out\n                            </label>\n                        </div>\n                    </div>\n                    <div class="col-12">\n                        <button type="submit" class="btn btn-primary">Sign in</button>\n                    </div>\n                </form>\n            </div>\n            \n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormGridGuttersComponent, { className: "FormGridGuttersComponent", filePath: "src/app/features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component.ts", lineNumber: 11 });
})();
export {
  FormGridGuttersComponent
};
//# sourceMappingURL=chunk-YDTLXAMH.js.map
