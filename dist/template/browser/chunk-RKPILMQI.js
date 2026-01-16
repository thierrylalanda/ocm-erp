import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/base-ui/grid/grid.component.ts
var GridComponent = class _GridComponent {
  static \u0275fac = function GridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridComponent, selectors: [["app-grid"]], decls: 233, vars: 0, consts: [[1, ""], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-muted"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-bordered", "table-striped", "mb-0"], [1, "text-center"], ["scope", "row", 1, "text-nowrap"], [1, "fw-normal"], ["colspan", "6"], [1, "grid-structure"], [1, "col-lg-12"], [1, "grid-container"], [1, "col-lg-11"], [1, "col-lg-1"], [1, "col-lg-10"], [1, "col-lg-2"], [1, "col-lg-9"], [1, "col-lg-3"], [1, "col-lg-8"], [1, "col-lg-4"], [1, "col-lg-7"], [1, "col-lg-5"], [1, "col-lg-6"]], template: function GridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Grid System");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li", 6)(11, "a", 7);
      \u0275\u0275text(12, "Base UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 8);
      \u0275\u0275text(14, "Grid System");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h5", 13);
      \u0275\u0275text(20, "Grid Options");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 14)(22, "p", 15);
      \u0275\u0275text(23, " See how aspects of the Bootstrap grid system work across multiple devices with a handy table. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "div", 16)(25, "table", 17)(26, "thead")(27, "tr");
      \u0275\u0275domElement(28, "th");
      \u0275\u0275domElementStart(29, "th", 18);
      \u0275\u0275text(30, " Extra small");
      \u0275\u0275domElement(31, "br");
      \u0275\u0275domElementStart(32, "small");
      \u0275\u0275text(33, "<576px");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(34, "th", 18);
      \u0275\u0275text(35, " Small");
      \u0275\u0275domElement(36, "br");
      \u0275\u0275domElementStart(37, "small");
      \u0275\u0275text(38, "\u2265576px");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "th", 18);
      \u0275\u0275text(40, " Medium");
      \u0275\u0275domElement(41, "br");
      \u0275\u0275domElementStart(42, "small");
      \u0275\u0275text(43, "\u2265768px");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(44, "th", 18);
      \u0275\u0275text(45, " Large");
      \u0275\u0275domElement(46, "br");
      \u0275\u0275domElementStart(47, "small");
      \u0275\u0275text(48, "\u2265992px");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(49, "th", 18);
      \u0275\u0275text(50, " Extra Large");
      \u0275\u0275domElement(51, "br");
      \u0275\u0275domElementStart(52, "small");
      \u0275\u0275text(53, "\u22651200px");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "th", 18);
      \u0275\u0275text(55, " Extra Large");
      \u0275\u0275domElement(56, "br");
      \u0275\u0275domElementStart(57, "small");
      \u0275\u0275text(58, "\u22651400px");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(59, "tbody")(60, "tr")(61, "th", 19);
      \u0275\u0275text(62, "Container ");
      \u0275\u0275domElementStart(63, "code", 20);
      \u0275\u0275text(64, "max-width");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(65, "td");
      \u0275\u0275text(66, "None (auto)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "td");
      \u0275\u0275text(68, "540px");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(69, "td");
      \u0275\u0275text(70, "720px");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "td");
      \u0275\u0275text(72, "960px");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "td");
      \u0275\u0275text(74, "1140px");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "td");
      \u0275\u0275text(76, "1320px");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(77, "tr")(78, "th", 19);
      \u0275\u0275text(79, "Class prefix");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(80, "td")(81, "code");
      \u0275\u0275text(82, ".col-");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(83, "td")(84, "code");
      \u0275\u0275text(85, ".col-sm-");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(86, "td")(87, "code");
      \u0275\u0275text(88, ".col-md-");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(89, "td")(90, "code");
      \u0275\u0275text(91, ".col-lg-");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(92, "td")(93, "code");
      \u0275\u0275text(94, ".col-xl-");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(95, "td")(96, "code");
      \u0275\u0275text(97, ".col-xxl-");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(98, "tr")(99, "th", 19);
      \u0275\u0275text(100, "# of columns");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(101, "td", 21);
      \u0275\u0275text(102, "12");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(103, "tr")(104, "th", 19);
      \u0275\u0275text(105, "Gutter width");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(106, "td", 21);
      \u0275\u0275text(107, "2rem (1rem on left and right)");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(108, "tr")(109, "th", 19);
      \u0275\u0275text(110, "Custom gutters");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(111, "td", 21);
      \u0275\u0275text(112, "Yes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(113, "tr")(114, "th", 19);
      \u0275\u0275text(115, "Nestable");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(116, "td", 21);
      \u0275\u0275text(117, "Yes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(118, "tr")(119, "th", 19);
      \u0275\u0275text(120, "Column ordering");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(121, "td", 21);
      \u0275\u0275text(122, "Yes");
      \u0275\u0275domElementEnd()()()()()()()()();
      \u0275\u0275domElementStart(123, "div", 9)(124, "div", 10)(125, "div", 11)(126, "div", 12)(127, "h5", 13);
      \u0275\u0275text(128, "Grid Example");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(129, "div", 14)(130, "p", 15);
      \u0275\u0275text(131, "You may use predefined grid classes. Using ");
      \u0275\u0275domElementStart(132, "code");
      \u0275\u0275text(133, ".col-lg-* ");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(134, "you can set the grid system. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(135, "div", 22)(136, "div", 9)(137, "div", 23)(138, "div", 24);
      \u0275\u0275text(139, " col-lg-12 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(140, "div", 9)(141, "div", 25)(142, "div", 24);
      \u0275\u0275text(143, " col-lg-11 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(144, "div", 26)(145, "div", 24);
      \u0275\u0275text(146, " col-lg-1 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(147, "div", 9)(148, "div", 27)(149, "div", 24);
      \u0275\u0275text(150, " col-lg-10 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(151, "div", 28)(152, "div", 24);
      \u0275\u0275text(153, " col-lg-2 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(154, "div", 9)(155, "div", 29)(156, "div", 24);
      \u0275\u0275text(157, " col-lg-9 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(158, "div", 30)(159, "div", 24);
      \u0275\u0275text(160, " col-lg-3 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(161, "div", 9)(162, "div", 31)(163, "div", 24);
      \u0275\u0275text(164, " col-lg-8 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(165, "div", 32)(166, "div", 24);
      \u0275\u0275text(167, " col-lg-4 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(168, "div", 9)(169, "div", 33)(170, "div", 24);
      \u0275\u0275text(171, " col-lg-7 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(172, "div", 34)(173, "div", 24);
      \u0275\u0275text(174, " col-lg-5 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(175, "div", 9)(176, "div", 35)(177, "div", 24);
      \u0275\u0275text(178, " col-lg-6 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(179, "div", 35)(180, "div", 24);
      \u0275\u0275text(181, " col-lg-6 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(182, "div", 9)(183, "div", 34)(184, "div", 24);
      \u0275\u0275text(185, " col-lg-5 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(186, "div", 33)(187, "div", 24);
      \u0275\u0275text(188, " col-lg-7 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(189, "div", 9)(190, "div", 32)(191, "div", 24);
      \u0275\u0275text(192, " col-lg-4 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(193, "div", 31)(194, "div", 24);
      \u0275\u0275text(195, " col-lg-8 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(196, "div", 9)(197, "div", 30)(198, "div", 24);
      \u0275\u0275text(199, " col-lg-3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(200, "div", 29)(201, "div", 24);
      \u0275\u0275text(202, " col-lg-9 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(203, "div", 9)(204, "div", 28)(205, "div", 24);
      \u0275\u0275text(206, " col-lg-2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(207, "div", 27)(208, "div", 24);
      \u0275\u0275text(209, " col-lg-10 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(210, "div", 9)(211, "div", 26)(212, "div", 24);
      \u0275\u0275text(213, " col-lg-1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(214, "div", 25)(215, "div", 24);
      \u0275\u0275text(216, " col-lg-11 ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(217, "div", 9)(218, "div", 28)(219, "div", 24);
      \u0275\u0275text(220, " col-lg-2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(221, "div", 30)(222, "div", 24);
      \u0275\u0275text(223, " col-lg-3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(224, "div", 32)(225, "div", 24);
      \u0275\u0275text(226, " col-lg-4 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(227, "div", 28)(228, "div", 24);
      \u0275\u0275text(229, " col-lg-2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(230, "div", 26)(231, "div", 24);
      \u0275\u0275text(232, " col-lg-1 ");
      \u0275\u0275domElementEnd()()()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridComponent, [{
    type: Component,
    args: [{ selector: "app-grid", imports: [CommonModule], template: '			<!-- Start Content -->\n      <div class="">\n\n        <!-- Page Header -->\n        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n            <div class="flex-grow-1">\n                <h4 class="fs-18 fw-semibold mb-0">Grid System</h4>\n            </div>\n\n            <div class="text-end">\n                <ol class="breadcrumb m-0 py-0">\n                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                    \n                    <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>\n                    \n                    <li class="breadcrumb-item active">Grid System</li>\n                </ol>\n            </div>\n        </div>\n<!-- End Page Header -->\n\n<!-- start row -->\n        <div class="row">\n            <div class="col-12">\n                <div class="card">\n      <div class="card-header">\n                        <h5 class="card-title">Grid Options</h5>\n      </div>\n                    <div class="card-body">\n                        <p class="text-muted">\n                            See how aspects of the Bootstrap grid system work across multiple devices with a handy table.\n                        </p>\n                        <div class="table-responsive">\n                            <table class="table table-nowrap table-bordered table-striped mb-0">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class="text-center">\n                                            Extra small<br><small>&lt;576px</small>\n                                        </th>\n                                        <th class="text-center">\n                                            Small<br><small>\u2265576px</small>\n                                        </th>\n                                        <th class="text-center">\n                                            Medium<br><small>\u2265768px</small>\n                                        </th>\n                                        <th class="text-center">\n                                            Large<br><small>\u2265992px</small>\n                                        </th>\n                                        <th class="text-center">\n                                            Extra Large<br><small>\u22651200px</small>\n                                        </th>\n                                        <th class="text-center">\n                                            Extra Large<br><small>\u22651400px</small>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <th class="text-nowrap" scope="row">Container <code class="fw-normal">max-width</code></th>\n                                        <td>None (auto)</td>\n                                        <td>540px</td>\n                                        <td>720px</td>\n                                        <td>960px</td>\n                                        <td>1140px</td>\n                                        <td>1320px</td>\n                                    </tr>\n                                    <tr>\n                                        <th class="text-nowrap" scope="row">Class prefix</th>\n                                        <td><code>.col-</code></td>\n                                        <td><code>.col-sm-</code></td>\n                                        <td><code>.col-md-</code></td>\n                                        <td><code>.col-lg-</code></td>\n                                        <td><code>.col-xl-</code></td>\n                                        <td><code>.col-xxl-</code></td>\n                                    </tr>\n                                    <tr>\n                                        <th class="text-nowrap" scope="row"># of columns</th>\n                                        <td colspan="6">12</td>\n                                    </tr>\n                                    <tr>\n                                        <th class="text-nowrap" scope="row">Gutter width</th>\n                                        <td colspan="6">2rem (1rem on left and right)</td>\n                                    </tr>\n                                    <tr>\n                                        <th class="text-nowrap" scope="row">Custom gutters</th>\n                                        <td colspan="6">Yes</td>\n                                    </tr>\n                                    <tr>\n                                        <th class="text-nowrap" scope="row">Nestable</th>\n                                        <td colspan="6">Yes</td>\n                                    </tr>\n                                    <tr>\n                                        <th class="text-nowrap" scope="row">Column ordering</th>\n                                        <td colspan="6">Yes</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div> <!-- end table responsive -->\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n            </div> <!-- end col -->\n        </div>\n        <!-- end row -->\n\n<!-- start row -->\n        <div class="row">\n            <div class="col-12">\n                <div class="card">\n      <div class="card-header">\n                        <h5 class="card-title">Grid Example</h5>\n      </div>\n                    <div class="card-body">\n        <p class="text-muted">You may use predefined grid classes. Using\n                            <code>.col-lg-* </code>you can set the grid system.\n                        </p>\n\n                        <div class="grid-structure">\n                            <div class="row">\n                                <div class="col-lg-12">\n                                    <div class="grid-container">\n                                        col-lg-12\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-11">\n                                    <div class="grid-container">\n                                        col-lg-11\n                                    </div>\n                                </div>\n                                <div class="col-lg-1">\n                                    <div class="grid-container">\n                                        col-lg-1\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-10">\n                                    <div class="grid-container">\n                                        col-lg-10\n                                    </div>\n                                </div>\n                                <div class="col-lg-2">\n                                    <div class="grid-container">\n                                        col-lg-2\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-9">\n                                    <div class="grid-container">\n                                        col-lg-9\n                                    </div>\n                                </div>\n                                <div class="col-lg-3">\n                                    <div class="grid-container">\n                                        col-lg-3\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-8">\n                                    <div class="grid-container">\n                                        col-lg-8\n                                    </div>\n                                </div>\n                                <div class="col-lg-4">\n                                    <div class="grid-container">\n                                        col-lg-4\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-7">\n                                    <div class="grid-container">\n                                        col-lg-7\n                                    </div>\n                                </div>\n                                <div class="col-lg-5">\n                                    <div class="grid-container">\n                                        col-lg-5\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-6">\n                                    <div class="grid-container">\n                                        col-lg-6\n                                    </div>\n                                </div>\n                                <div class="col-lg-6">\n                                    <div class="grid-container">\n                                        col-lg-6\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-5">\n                                    <div class="grid-container">\n                                        col-lg-5\n                                    </div>\n                                </div>\n                                <div class="col-lg-7">\n                                    <div class="grid-container">\n                                        col-lg-7\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-4">\n                                    <div class="grid-container">\n                                        col-lg-4\n                                    </div>\n                                </div>\n                                <div class="col-lg-8">\n                                    <div class="grid-container">\n                                        col-lg-8\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-3">\n                                    <div class="grid-container">\n                                        col-lg-3\n                                    </div>\n                                </div>\n                                <div class="col-lg-9">\n                                    <div class="grid-container">\n                                        col-lg-9\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-2">\n                                    <div class="grid-container">\n                                        col-lg-2\n                                    </div>\n                                </div>\n                                <div class="col-lg-10">\n                                    <div class="grid-container">\n                                        col-lg-10\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-1">\n                                    <div class="grid-container">\n                                        col-lg-1\n                                    </div>\n                                </div>\n                                <div class="col-lg-11">\n                                    <div class="grid-container">\n                                        col-lg-11\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-2">\n                                    <div class="grid-container">\n                                        col-lg-2\n                                    </div>\n                                </div>\n                                <div class="col-lg-3">\n                                    <div class="grid-container">\n                                        col-lg-3\n                                    </div>\n                                </div>\n                                <div class="col-lg-4">\n                                    <div class="grid-container">\n                                        col-lg-4\n                                    </div>\n                                </div>\n                                <div class="col-lg-2">\n                                    <div class="grid-container">\n                                        col-lg-2\n                                    </div>\n                                </div>\n                                <div class="col-lg-1">\n                                    <div class="grid-container">\n                                        col-lg-1\n                                    </div>\n                                </div>\n                            </div> <!-- end row -->\n                        </div> <!-- grid structure -->\n\n                    </div> <!-- end card body-->\n                </div> <!-- end card-->\n            </div> <!-- end col-->\n        </div>\n        <!-- end row-->\n\n    </div>\n<!-- End Content -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridComponent, { className: "GridComponent", filePath: "src/app/features/ui-interface/base-ui/grid/grid.component.ts", lineNumber: 10 });
})();
export {
  GridComponent
};
//# sourceMappingURL=chunk-RKPILMQI.js.map
