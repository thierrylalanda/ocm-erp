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

// src/app/features/ui-interface/base-ui/spinner/spinner.component.ts
var SpinnerComponent = class _SpinnerComponent {
  static \u0275fac = function SpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinnerComponent, selectors: [["app-spinner"]], decls: 158, vars: 0, consts: [[1, ""], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["role", "status", 1, "spinner-border", "m-2"], [1, "visually-hidden"], ["role", "status", 1, "spinner-border", "text-primary", "m-2"], ["role", "status", 1, "spinner-border", "text-secondary", "m-2"], ["role", "status", 1, "spinner-border", "text-success", "m-2"], ["role", "status", 1, "spinner-border", "text-danger", "m-2"], ["role", "status", 1, "spinner-border", "text-warning", "m-2"], ["role", "status", 1, "spinner-border", "text-info", "m-2"], ["role", "status", 1, "spinner-border", "text-light", "m-2"], ["role", "status", 1, "spinner-border", "text-dark", "m-2"], ["role", "status", 1, "spinner-grow", "m-2"], [1, "card", "card-h-100"], ["role", "status", 1, "spinner-grow", "text-primary", "m-2"], ["role", "status", 1, "spinner-grow", "text-secondary", "m-2"], ["role", "status", 1, "spinner-grow", "text-success", "m-2"], ["role", "status", 1, "spinner-grow", "text-danger", "m-2"], ["role", "status", 1, "spinner-grow", "text-warning", "m-2"], ["role", "status", 1, "spinner-grow", "text-info", "m-2"], ["role", "status", 1, "spinner-grow", "text-light", "m-2"], ["role", "status", 1, "spinner-grow", "text-dark", "m-2"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "d-flex", "align-items-center"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "ms-auto"], [1, "col-lg-6"], ["role", "status", 1, "spinner-border", "avatar-lg", "text-primary", "m-2"], ["role", "status", 1, "spinner-grow", "avatar-lg", "text-secondary", "m-2"], ["role", "status", 1, "spinner-border", "avatar-md", "text-primary", "m-2"], ["role", "status", 1, "spinner-grow", "avatar-md", "text-secondary", "m-2"], ["role", "status", 1, "spinner-border", "avatar-sm", "text-primary", "m-2"], ["role", "status", 1, "spinner-grow", "avatar-sm", "text-secondary", "m-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "m-2"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "m-2"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", "disabled", "", 1, "btn", "btn-primary"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm", "me-1"]], template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Spinners");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li", 6)(11, "a", 7);
      \u0275\u0275text(12, "Base UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 8);
      \u0275\u0275text(14, "Spinners");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h5", 13);
      \u0275\u0275text(20, "Border Spinner");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 14)(22, "p");
      \u0275\u0275text(23, "Use the border spinners for a lightweight loading indicator.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "div", 15)(25, "span", 16);
      \u0275\u0275text(26, "Loading...");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(27, "div", 10)(28, "div", 11)(29, "div", 12)(30, "h5", 13);
      \u0275\u0275text(31, "Colors");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div", 14)(33, "p");
      \u0275\u0275text(34, "You can use any of our text color utilities on the standard spinner.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(35, "div", 17)(36, "div", 18)(37, "div", 19)(38, "div", 20)(39, "div", 21)(40, "div", 22)(41, "div", 23)(42, "div", 24);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(43, "div", 9)(44, "div", 10)(45, "div", 11)(46, "div", 12)(47, "h5", 13);
      \u0275\u0275text(48, "Growing Spinner");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(49, "div", 14)(50, "p");
      \u0275\u0275text(51, "If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically spin, it does repeatedly grow!");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "div", 25)(53, "span", 16);
      \u0275\u0275text(54, "Loading...");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(55, "div", 10)(56, "div", 26)(57, "div", 12)(58, "h5", 13);
      \u0275\u0275text(59, "Color Growing Spinner");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(60, "div", 14)(61, "p");
      \u0275\u0275text(62, "You can use any of our text color utilities on the standard spinner.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(63, "div", 27)(64, "div", 28)(65, "div", 29)(66, "div", 30)(67, "div", 31)(68, "div", 32)(69, "div", 33)(70, "div", 34);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(71, "div", 9)(72, "div", 10)(73, "div", 11)(74, "div", 12)(75, "h5", 13);
      \u0275\u0275text(76, "Alignment");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(77, "div", 14)(78, "p");
      \u0275\u0275text(79, "Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(80, "div", 35);
      \u0275\u0275domElement(81, "div", 36);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(82, "div", 10)(83, "div", 11)(84, "div", 12)(85, "h5", 13);
      \u0275\u0275text(86, "Placement");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(87, "div", 14)(88, "p");
      \u0275\u0275text(89, "Use ");
      \u0275\u0275domElementStart(90, "code");
      \u0275\u0275text(91, "flexbox utilities");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(92, ", ");
      \u0275\u0275domElementStart(93, "code");
      \u0275\u0275text(94, "float utilities");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(95, ", or ");
      \u0275\u0275domElementStart(96, "code");
      \u0275\u0275text(97, "text alignment");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(98, " utilities to place spinners exactly where you need them in any situation.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(99, "div", 37)(100, "strong");
      \u0275\u0275text(101, "Loading...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(102, "div", 38);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(103, "div", 9)(104, "div", 10)(105, "div", 11)(106, "div", 12)(107, "h5", 13);
      \u0275\u0275text(108, "Size");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(109, "div", 14)(110, "p");
      \u0275\u0275text(111, "Add ");
      \u0275\u0275domElementStart(112, "code");
      \u0275\u0275text(113, ".spinner-border-sm");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(114, " and ");
      \u0275\u0275domElementStart(115, "code");
      \u0275\u0275text(116, ".spinner-border.avatar-**");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(117, " to make a smaller spinner that can quickly be used within other components. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(118, "div", 9)(119, "div", 39);
      \u0275\u0275domElement(120, "div", 40)(121, "div", 41);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(122, "div", 39);
      \u0275\u0275domElement(123, "div", 42)(124, "div", 43);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "div", 39);
      \u0275\u0275domElement(126, "div", 44)(127, "div", 45);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(128, "div", 39);
      \u0275\u0275domElement(129, "div", 46)(130, "div", 47);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(131, "div", 10)(132, "div", 26)(133, "div", 12)(134, "h5", 13);
      \u0275\u0275text(135, "Buttons Spinner");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(136, "div", 14)(137, "p");
      \u0275\u0275text(138, "Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(139, "div", 9)(140, "div", 39)(141, "div", 48)(142, "button", 49);
      \u0275\u0275domElement(143, "span", 50);
      \u0275\u0275domElementStart(144, "span", 16);
      \u0275\u0275text(145, "Loading...");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(146, "button", 49);
      \u0275\u0275domElement(147, "span", 51);
      \u0275\u0275text(148, " Loading... ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(149, "div", 39)(150, "div", 48)(151, "button", 49);
      \u0275\u0275domElement(152, "span", 52);
      \u0275\u0275domElementStart(153, "span", 16);
      \u0275\u0275text(154, "Loading...");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(155, "button", 49);
      \u0275\u0275domElement(156, "span", 53);
      \u0275\u0275text(157, " Loading... ");
      \u0275\u0275domElementEnd()()()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{ selector: "app-spinner", imports: [CommonModule], template: '			<!-- Start Content -->\n      <div class="">\n\n        <!-- Page Header -->\n        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n            <div class="flex-grow-1">\n                <h4 class="fs-18 fw-semibold mb-0">Spinners</h4>\n            </div>\n\n            <div class="text-end">\n                <ol class="breadcrumb m-0 py-0">\n                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                    <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>\n                    <li class="breadcrumb-item active">Spinners</li>\n                </ol>\n            </div>\n        </div>\n<!-- End page header -->\n        \n        <div class="row">\n\n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Border Spinner</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Use the border spinners for a lightweight loading indicator.</p>\n\n                        <div class="spinner-border m-2" role="status">\n                            <span class="visually-hidden">Loading...</span>\n                        </div>\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n  \n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Colors</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>You can use any of our text color utilities on the standard spinner.</p>\n\n                        <div class="spinner-border text-primary m-2" role="status"></div>\n                        <div class="spinner-border text-secondary m-2" role="status"></div>\n                        <div class="spinner-border text-success m-2" role="status"></div>\n                        <div class="spinner-border text-danger m-2" role="status"></div>\n                        <div class="spinner-border text-warning m-2" role="status"></div>\n                        <div class="spinner-border text-info m-2" role="status"></div>\n                        <div class="spinner-border text-light m-2" role="status"></div>\n                        <div class="spinner-border text-dark m-2" role="status"></div>\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n</div> <!-- end row -->\n        \n        <div class="row">\n\n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Growing Spinner</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically spin, it does repeatedly grow!</p>\n\n                        <div class="spinner-grow m-2" role="status">\n                            <span class="visually-hidden">Loading...</span>\n                        </div>\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n  \n            <div class="col-xl-6">\n\n                <div class="card card-h-100">\n                    <div class="card-header">\n                        <h5 class="card-title">Color Growing Spinner</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>You can use any of our text color utilities on the standard spinner.</p>\n\n                        <div class="spinner-grow text-primary m-2" role="status"></div>\n                        <div class="spinner-grow text-secondary m-2" role="status"></div>\n                        <div class="spinner-grow text-success m-2" role="status"></div>\n                        <div class="spinner-grow text-danger m-2" role="status"></div>\n                        <div class="spinner-grow text-warning m-2" role="status"></div>\n                        <div class="spinner-grow text-info m-2" role="status"></div>\n                        <div class="spinner-grow text-light m-2" role="status"></div>\n                        <div class="spinner-grow text-dark m-2" role="status"></div>\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n</div> <!-- end row -->                \n\n        <div class="row">\n            <div class="col-xl-6">\n\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Alignment</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.</p>\n\n                        <div class="d-flex justify-content-center">\n                            <div class="spinner-border" role="status"></div>\n                        </div>\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n  \n            <div class="col-xl-6">\n\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Placement</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Use <code>flexbox utilities</code>, <code>float utilities</code>, or <code>text alignment</code> utilities to place spinners exactly where you need them in any situation.</p>\n\n                        <div class="d-flex align-items-center">\n                            <strong>Loading...</strong>\n                            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>\n                        </div>\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n</div> <!-- end row -->\n        \n        <div class="row">\n            <div class="col-xl-6">\n\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Size</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Add <code>.spinner-border-sm</code> and <code>.spinner-border.avatar-**</code> to make a smaller spinner that can quickly be used within other components.\n                        </p>\n                        <div class="row">\n                            <div class="col-lg-6">\n                                <div class="spinner-border avatar-lg text-primary m-2" role="status"></div>\n                                <div class="spinner-grow avatar-lg text-secondary m-2" role="status"></div>\n                            </div><!-- end col -->\n\n                            <div class="col-lg-6">\n                                <div class="spinner-border avatar-md text-primary m-2" role="status"></div>\n                                <div class="spinner-grow avatar-md text-secondary m-2" role="status"></div>\n                            </div><!-- end col -->\n\n                            <div class="col-lg-6">\n                                <div class="spinner-border avatar-sm text-primary m-2" role="status"></div>\n                                <div class="spinner-grow avatar-sm text-secondary m-2" role="status"></div>\n                            </div><!-- end col -->\n\n                            <div class="col-lg-6">\n                                <div class="spinner-border spinner-border-sm m-2" role="status"></div>\n                                <div class="spinner-grow spinner-grow-sm m-2" role="status"></div>\n                            </div><!-- end col -->\n                        </div><!--end row -->\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n            </div> <!-- end col -->\n\n            <div class="col-xl-6">\n\n                <div class="card card-h-100">\n                    <div class="card-header">\n                        <h5 class="card-title">Buttons Spinner</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Use spinners within buttons to indicate an action is currently processing or taking place.\n                            You may also swap the text out of the spinner element and utilize button text as needed.\n        </p>\n\n                        <div class="row">\n                            <div class="col-lg-6">\n                                <div class="d-flex flex-wrap gap-2">\n                                    <button class="btn btn-primary" type="button" disabled>\n                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="visually-hidden">Loading...</span>\n                                    </button>\n                                    <button class="btn btn-primary" type="button" disabled>\n                                        <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>\n                                        Loading...\n                                    </button>\n                                </div>\n                            </div><!-- end col -->\n                            <div class="col-lg-6">\n                                <div class="d-flex flex-wrap gap-2">\n                                    <button class="btn btn-primary" type="button" disabled>\n                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> <span class="visually-hidden">Loading...</span>\n                                    </button>\n                                    <button class="btn btn-primary" type="button" disabled>\n                                        <span class="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span>\n                                        Loading...\n                                    </button>\n                                </div>\n                            </div><!-- end col -->\n                        </div> <!-- end row -->\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n            </div> <!-- end col -->\n        </div>\n        <!-- end row -->\n\n    </div>\n<!-- End Content -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnerComponent, { className: "SpinnerComponent", filePath: "src/app/features/ui-interface/base-ui/spinner/spinner.component.ts", lineNumber: 10 });
})();
export {
  SpinnerComponent
};
//# sourceMappingURL=chunk-N6MTERK4.js.map
