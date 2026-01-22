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

// src/app/features/ui-interface/forms/input-groups/input-groups.component.ts
var InputGroupsComponent = class _InputGroupsComponent {
  static \u0275fac = function InputGroupsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputGroupsComponent, selectors: [["app-input-groups"]], decls: 186, vars: 0, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["action", "#"], [1, "input-block", "mb-3", "row"], ["htmlFor", "label", 1, "col-form-label", "col-lg-2"], [1, "col-lg-10"], [1, "input-group"], ["id", "basic-addon1", 1, "input-group-text"], ["id", "label", "type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["id", "label", "type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], [1, "input-group-text"], ["id", "label", "type", "text", 1, "form-control"], [1, "input-block", "mb-3", "row", "mb-0"], [1, "input-group", "input-group-lg"], ["id", "sizing-addon1", 1, "input-group-text"], ["id", "label", "type", "text", "placeholder", "Username", "aria-describedby", "sizing-addon1", 1, "form-control"], ["id", "sizing-addon2", 1, "input-group-text"], ["id", "label", "type", "text", "placeholder", "Username", "aria-describedby", "sizing-addon2", 1, "form-control"], [1, "input-group", "input-group-sm"], ["id", "sizing-addon3", 1, "input-group-text"], ["id", "label", "type", "text", "placeholder", "Username", "aria-describedby", "sizing-addon3", 1, "form-control"], ["id", "label", "type", "checkbox"], ["type", "text", 1, "form-control"], ["id", "label", "type", "radio"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-white", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item"], ["role", "separator", 1, "dropdown-divider"], ["id", "label", "type", "text", "placeholder", "Left dropdown", 1, "form-control"], ["id", "label", "type", "text", "placeholder", "Right dropdown", 1, "form-control"], [1, "dropdown-menu", "dropdown-menu-right"]], template: function InputGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Input Groups");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "li", 7);
      \u0275\u0275text(13, "Input Groups");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Basic Examples");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "div", 13)(21, "form", 14)(22, "div", 15)(23, "label", 16);
      \u0275\u0275text(24, "Group Left");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div", 17)(26, "div", 18)(27, "span", 19);
      \u0275\u0275text(28, "@");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(29, "input", 20);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(30, "div", 15)(31, "label", 16);
      \u0275\u0275text(32, "Group Right");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div", 17)(34, "div", 18);
      \u0275\u0275domElement(35, "input", 21);
      \u0275\u0275domElementStart(36, "span", 22);
      \u0275\u0275text(37, "@example.com");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(38, "div", 15)(39, "label", 16);
      \u0275\u0275text(40, "URL Example");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "div", 17)(42, "div", 18)(43, "span", 23);
      \u0275\u0275text(44, "https://");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(45, "input", 24);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(46, "div", 15)(47, "label", 16);
      \u0275\u0275text(48, "Group with Price");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "div", 17)(50, "div", 18)(51, "span", 23);
      \u0275\u0275text(52, "$");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(53, "input", 24);
      \u0275\u0275domElementStart(54, "span", 23);
      \u0275\u0275text(55, ".00");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(56, "div", 25)(57, "label", 16);
      \u0275\u0275text(58, "Group with Price (Left)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "div", 17)(60, "div", 18)(61, "span", 23);
      \u0275\u0275text(62, "$");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "span", 23);
      \u0275\u0275text(64, "0.00");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(65, "input", 24);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(66, "div", 10)(67, "div", 11)(68, "h5", 12);
      \u0275\u0275text(69, "Sizing");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(70, "div", 13)(71, "form", 14)(72, "div", 15)(73, "label", 16);
      \u0275\u0275text(74, "Input Group Large");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "div", 17)(76, "div", 26)(77, "span", 27);
      \u0275\u0275text(78, "@");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(79, "input", 28);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(80, "div", 15)(81, "label", 16);
      \u0275\u0275text(82, "Input Group Default");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(83, "div", 17)(84, "div", 18)(85, "span", 29);
      \u0275\u0275text(86, "@");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(87, "input", 30);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(88, "div", 25)(89, "label", 16);
      \u0275\u0275text(90, "Input Group Small");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "div", 17)(92, "div", 31)(93, "span", 32);
      \u0275\u0275text(94, "@");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(95, "input", 33);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(96, "div", 10)(97, "div", 11)(98, "h5", 12);
      \u0275\u0275text(99, "Checkbox and Radio Addons");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(100, "div", 13)(101, "form", 14)(102, "div", 15)(103, "label", 16);
      \u0275\u0275text(104, "Checkbox");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(105, "div", 17)(106, "div", 18)(107, "span", 23);
      \u0275\u0275domElement(108, "input", 34);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(109, "input", 35);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(110, "div", 25)(111, "label", 16);
      \u0275\u0275text(112, "Radio");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(113, "div", 17)(114, "div", 18)(115, "span", 23);
      \u0275\u0275domElement(116, "input", 36);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(117, "input", 24);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(118, "div", 10)(119, "div", 11)(120, "h5", 12);
      \u0275\u0275text(121, "Multiple Addons");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(122, "div", 13)(123, "form", 14)(124, "div", 15)(125, "label", 16);
      \u0275\u0275text(126, "Radio and Text Addons");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(127, "div", 17)(128, "div", 18)(129, "span", 23);
      \u0275\u0275domElement(130, "input", 34);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(131, "span", 23);
      \u0275\u0275text(132, "$");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(133, "input", 24);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(134, "div", 25)(135, "label", 16);
      \u0275\u0275text(136, "Two Addons");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(137, "div", 17)(138, "div", 18)(139, "span", 23);
      \u0275\u0275text(140, "$");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(141, "span", 23);
      \u0275\u0275text(142, "0.00");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(143, "input", 24);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(144, "div", 10)(145, "div", 11)(146, "h5", 12);
      \u0275\u0275text(147, "Buttons with dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(148, "div", 13)(149, "form", 14)(150, "div", 15)(151, "label", 16);
      \u0275\u0275text(152, "Radio and Text Addons");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(153, "div", 17)(154, "div", 18)(155, "button", 37);
      \u0275\u0275text(156, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(157, "div", 38)(158, "a", 39);
      \u0275\u0275text(159, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(160, "a", 39);
      \u0275\u0275text(161, "Another action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(162, "a", 39);
      \u0275\u0275text(163, "Something else here");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(164, "div", 40);
      \u0275\u0275domElementStart(165, "a", 39);
      \u0275\u0275text(166, "Separated link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(167, "input", 41);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(168, "div", 25)(169, "label", 16);
      \u0275\u0275text(170, "Two Addons");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(171, "div", 17)(172, "div", 18);
      \u0275\u0275domElement(173, "input", 42);
      \u0275\u0275domElementStart(174, "button", 37);
      \u0275\u0275text(175, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(176, "div", 43)(177, "a", 39);
      \u0275\u0275text(178, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(179, "a", 39);
      \u0275\u0275text(180, "Another action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(181, "a", 39);
      \u0275\u0275text(182, "Something else here");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(183, "div", 40);
      \u0275\u0275domElementStart(184, "a", 39);
      \u0275\u0275text(185, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupsComponent, [{
    type: Component,
    args: [{ selector: "app-input-groups", imports: [CommonModule], template: `

              <!-- Page Header -->
              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                <div class="flex-grow-1">
                    <h4 class="fs-18 fw-semibold mb-0">Input Groups</h4>
                </div>
                <div class="text-end">
                    <ol class="breadcrumb m-0 py-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                        <li class="breadcrumb-item active">Input Groups</li>
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
          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">Group Left</label>
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">&#64;</span>
                <input id="label"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">Group Right</label>
            <div class="col-lg-10">
              <div class="input-group">
                <input id="label"
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2"
                  >&#64;example.com</span
                >
              </div>
            </div>
          </div>
          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">URL Example</label>
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text">https://</span>
                <input id="label" type="text" class="form-control" />
              </div>
            </div>
          </div>

          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">Group with Price</label>
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input id="label" type="text" class="form-control" />
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </div>

          <div class="input-block mb-3 row mb-0">
            <label htmlFor="label" class="col-form-label col-lg-2"
              >Group with Price (Left)</label
            >
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
                <input id="label" type="text" class="form-control" />
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
          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">Input Group Large</label>
            <div class="col-lg-10">
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="sizing-addon1">&#64;</span>
                <input id="label"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-describedby="sizing-addon1"
                />
              </div>
            </div>
          </div>
          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">Input Group Default</label>
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text" id="sizing-addon2">&#64;</span>
                <input id="label"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-describedby="sizing-addon2"
                />
              </div>
            </div>
          </div>
          <div class="input-block mb-3 row mb-0">
            <label htmlFor="label" class="col-form-label col-lg-2">Input Group Small</label>
            <div class="col-lg-10">
              <div class="input-group input-group-sm">
                <span class="input-group-text" id="sizing-addon3">&#64;</span>
                <input id="label"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-describedby="sizing-addon3"
                />
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
          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">Checkbox</label>
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text">
                  <input id="label" type="checkbox" />
                </span>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="input-block mb-3 row mb-0">
            <label htmlFor="label" class="col-form-label col-lg-2">Radio</label>
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text">
                  <input id="label" type="radio" />
                </span>
                <input id="label" type="text" class="form-control" />
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
          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">Radio and Text Addons</label>
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text">
                  <input id="label" type="checkbox" />
                </span>
                <span class="input-group-text">$</span>
                <input id="label" type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="input-block mb-3 row mb-0">
            <label htmlFor="label" class="col-form-label col-lg-2">Two Addons</label>
            <div class="col-lg-10">
              <div class="input-group">
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
                <input id="label" type="text" class="form-control" />
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
          <div class="input-block mb-3 row">
            <label htmlFor="label" class="col-form-label col-lg-2">Radio and Text Addons</label>
            <div class="col-lg-10">
              <div class="input-group">
                <button
                  type="button"
                  class="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Action
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Another action</a
                  >
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Something else here</a
                  >
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Separated link</a
                  >
                </div>
                <input id="label"
                  type="text"
                  class="form-control"
                  placeholder="Left dropdown"
                />
              </div>
            </div>
          </div>

          <div class="input-block mb-3 row mb-0">
            <label htmlFor="label" class="col-form-label col-lg-2">Two Addons</label>
            <div class="col-lg-10">
              <div class="input-group">
                <input id="label"
                  type="text"
                  class="form-control"
                  placeholder="Right dropdown"
                />
                <button
                  type="button"
                  class="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Action
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Another action</a
                  >
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Something else here</a
                  >
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Separated link</a
                  >
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputGroupsComponent, { className: "InputGroupsComponent", filePath: "src/app/features/ui-interface/forms/input-groups/input-groups.component.ts", lineNumber: 10 });
})();
export {
  InputGroupsComponent
};
//# sourceMappingURL=chunk-35IUJ45M.js.map
