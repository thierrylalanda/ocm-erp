import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MUITGCTV.js";
import "./chunk-O6CHOV5Y.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-ZTQFL2WC.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import "./chunk-NAWYXTZ5.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.ts
var AppearanceSettingsComponent = class _AppearanceSettingsComponent {
  active = [true, false, false];
  toggleActive(index) {
    this.active = this.active.map((_, i) => i === index);
  }
  active2 = [true, false, false];
  toggleActive2(index) {
    this.active2 = this.active2.map((_, i) => i === index);
  }
  static \u0275fac = function AppearanceSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppearanceSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppearanceSettingsComponent, selectors: [["app-appearance-settings"]], decls: 117, vars: 14, consts: [[1, ""], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], [1, "mb-3"], [1, "row", "align-items-center"], [1, "col-xl-4", "col-md-4"], [1, "setting-info", "mb-3"], [1, "fs-14", "mb-1", "fw-semibold"], [1, "col-xl-8", "col-md-8"], [1, "row", "theme-type-images", "d-flex", "align-items-center"], [1, "col-md-4"], [1, "card", "theme-image", 3, "click"], [1, "card-body", "p-2"], ["href", "javascript:void(0);"], [1, "border", "rounded", "border-gray", "mb-2"], ["src", "assets/img/theme/light.jpg", "alt", "theme", 1, "img-fluid", "rounded"], [1, "text-center", "fw-medium", "text-truncate"], ["src", "assets/img/theme/dark.jpg", "alt", "theme", 1, "img-fluid", "rounded"], ["src", "assets/img/theme/automatic.jpg", "alt", "theme", 1, "img-fluid", "rounded"], [1, "theme-colors", "d-flex", "align-items-center", "justify-content-end", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap", "list-unstyled"], [1, "themecolorset", 3, "click"], [1, "primecolor", "bg-primary"], [1, "colorcheck", "text-white"], [1, "ti", "ti-check", "text-primary", "fs-10"], [1, "primecolor", "bg-secondary"], [1, "primecolor", "bg-info"], [1, "primecolor", "bg-danger"], [1, "row", "align-items-center", "justify-content-between", "mb-3"], [1, "col-xl-3", "col-md-4"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "form-check", "form-switch"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0"], [1, "d-flex", "align-items-center", "justify-content-end", "mt-2", "mt-md-0"], ["placeholder", "Medium - 250px", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "Instrument Sans", 1, "custom-mat-select", "select"], [1, "text-end", "settings-bottom-btn", "mt-0", "border-top", "d-flex", "align-items-center", "justify-content-between", "pt-4", "mb-3"], ["type", "button", 1, "btn", "btn-outline-white", "btn-md", "me-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-md"]], template: function AppearanceSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Appearance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form")(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h6", 7);
      \u0275\u0275text(10, "Select Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Choose theme of website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11);
      \u0275\u0275listener("click", function AppearanceSettingsComponent_Template_div_click_16_listener() {
        return ctx.toggleActive(0);
      });
      \u0275\u0275elementStart(17, "div", 12)(18, "a", 13)(19, "div", 14);
      \u0275\u0275element(20, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p", 16);
      \u0275\u0275text(22, "Light");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "div", 10)(24, "div", 11);
      \u0275\u0275listener("click", function AppearanceSettingsComponent_Template_div_click_24_listener() {
        return ctx.toggleActive(1);
      });
      \u0275\u0275elementStart(25, "div", 12)(26, "a", 13)(27, "div", 14);
      \u0275\u0275element(28, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p", 16);
      \u0275\u0275text(30, "Dark");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 10)(32, "div", 11);
      \u0275\u0275listener("click", function AppearanceSettingsComponent_Template_div_click_32_listener() {
        return ctx.toggleActive(2);
      });
      \u0275\u0275elementStart(33, "div", 12)(34, "a", 13)(35, "div", 14);
      \u0275\u0275element(36, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 16);
      \u0275\u0275text(38, "Automatic");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(39, "div", 4)(40, "div", 5)(41, "div", 6)(42, "h6", 7);
      \u0275\u0275text(43, "Accent Color");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Choose accent colour of website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 8)(47, "div", 19)(48, "ul", 20)(49, "li")(50, "span", 21);
      \u0275\u0275listener("click", function AppearanceSettingsComponent_Template_span_click_50_listener() {
        return ctx.toggleActive2(0);
      });
      \u0275\u0275elementStart(51, "span", 22)(52, "span", 23);
      \u0275\u0275element(53, "i", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "li")(55, "span", 21);
      \u0275\u0275listener("click", function AppearanceSettingsComponent_Template_span_click_55_listener() {
        return ctx.toggleActive2(1);
      });
      \u0275\u0275elementStart(56, "span", 25)(57, "span", 23);
      \u0275\u0275element(58, "i", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "li")(60, "span", 21);
      \u0275\u0275listener("click", function AppearanceSettingsComponent_Template_span_click_60_listener() {
        return ctx.toggleActive2(2);
      });
      \u0275\u0275elementStart(61, "span", 26)(62, "span", 23);
      \u0275\u0275element(63, "i", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "li")(65, "span", 21);
      \u0275\u0275listener("click", function AppearanceSettingsComponent_Template_span_click_65_listener() {
        return ctx.toggleActive2(3);
      });
      \u0275\u0275elementStart(66, "span", 27)(67, "span", 23);
      \u0275\u0275element(68, "i", 24);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(69, "div", 28)(70, "div", 5)(71, "div", 0)(72, "h6", 7);
      \u0275\u0275text(73, "Expand Sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75, "Choose expand sidebar");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 29)(77, "div", 30)(78, "div", 31);
      \u0275\u0275element(79, "input", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "div", 28)(81, "div", 5)(82, "div", 0)(83, "h6", 7);
      \u0275\u0275text(84, "Sidebar Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "Select size of the sidebar to display");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 29)(88, "div", 33)(89, "mat-select", 34)(90, "mat-option", 35);
      \u0275\u0275text(91, "Small - 200px ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "mat-option", 35);
      \u0275\u0275text(93, "Medium - 250px");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "mat-option", 35);
      \u0275\u0275text(95, "Large - 300px");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(96, "div", 28)(97, "div", 5)(98, "div", 0)(99, "h6", 7);
      \u0275\u0275text(100, "Font Family");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "span");
      \u0275\u0275text(102, "Select font family of website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "div", 29)(104, "div", 33)(105, "mat-select", 36)(106, "mat-option", 35);
      \u0275\u0275text(107, "Instrument Sans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "mat-option", 35);
      \u0275\u0275text(109, "Nunito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "mat-option", 35);
      \u0275\u0275text(111, "Poppins");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(112, "div", 37)(113, "button", 38);
      \u0275\u0275text(114, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "button", 39);
      \u0275\u0275text(116, "Save Changes");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275classProp("active", ctx.active[0]);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.active[1]);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.active[2]);
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.active2[0]);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.active2[1]);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.active2[2]);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.active2[3]);
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppearanceSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-appearance-settings", imports: [CommonModule, MatSelectModule], template: '<div class="">\n    <div class="mb-3 pb-3 border-bottom">\n        <h6 class="fw-bold mb-0">Appearance</h6>\n    </div>\n    <form>\n        <div class="mb-3">\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-xl-4 col-md-4">\n                    <div class="setting-info mb-3">\n                        <h6 class="fs-14 mb-1 fw-semibold">Select Theme</h6>\n                        <span>Choose theme of website</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-8 col-md-8">\n                    <div class="row theme-type-images d-flex align-items-center">\n                        <div class="col-md-4">\n                            <div class="card theme-image" [class.active]="active[0]" (click)="toggleActive(0)">\n                                <div class="card-body p-2">\n                                    <a href="javascript:void(0);">\n                                        <div class="border rounded border-gray mb-2">\n                                            <img src="assets/img/theme/light.jpg" class="img-fluid rounded" alt="theme">\n                                        </div>\n                                        <p class="text-center fw-medium text-truncate">Light</p>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-4">\n                            <div class="card theme-image" [class.active]="active[1]" (click)="toggleActive(1)">\n                                <div class="card-body p-2">\n                                    <a href="javascript:void(0);">\n                                        <div class="border rounded border-gray mb-2">\n                                            <img src="assets/img/theme/dark.jpg" class="img-fluid rounded" alt="theme">\n                                        </div>\n                                        <p class="text-center fw-medium text-truncate">Dark</p>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-4">\n                            <div class="card theme-image" [class.active]="active[2]" (click)="toggleActive(2)">\n                                <div class="card-body p-2">\n                                    <a href="javascript:void(0);">\n                                        <div class="border rounded border-gray mb-2">\n                                            <img src="assets/img/theme/automatic.jpg" class="img-fluid rounded" alt="theme">\n                                        </div>\n                                        <p class="text-center fw-medium text-truncate">Automatic</p>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center">\n                <div class="col-xl-4 col-md-4">\n                    <div class="setting-info mb-3">\n                        <h6 class="fs-14 mb-1 fw-semibold">Accent Color</h6>\n                        <span>Choose accent colour of website</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-8 col-md-8">\n                    <div class="theme-colors d-flex align-items-center justify-content-end mb-3">\n                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">\n                            <li>\n                                <span class="themecolorset" [class.active]="active2[0]" (click)="toggleActive2(0)">\n                                    <span class="primecolor bg-primary">\n                                        <span class="colorcheck text-white"><i class="ti ti-check text-primary fs-10"></i></span>\n                                </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class="themecolorset" [class.active]="active2[1]" (click)="toggleActive2(1)">\n                                    <span class="primecolor bg-secondary">\n                                        <span class="colorcheck text-white"><i class="ti ti-check text-primary fs-10"></i></span>\n                                </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class="themecolorset" [class.active]="active2[2]" (click)="toggleActive2(2)">\n                                    <span class="primecolor bg-info">\n                                        <span class="colorcheck text-white"><i class="ti ti-check text-primary fs-10"></i></span>\n                                </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class="themecolorset" [class.active]="active2[3]" (click)="toggleActive2(3)">\n                                    <span class="primecolor bg-danger">\n                                        <span class="colorcheck text-white"><i class="ti ti-check text-primary fs-10"></i></span>\n                                </span>\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center justify-content-between mb-3">\n                <div class="col-xl-4 col-md-4">\n                    <div class="">\n                        <h6 class="fs-14 mb-1 fw-semibold">Expand Sidebar</h6>\n                        <span>Choose expand sidebar</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-3 col-md-4">\n                    <div class="d-flex align-items-center justify-content-end">\n                        <div class="form-check form-switch">\n                            <input class="form-check-input m-0" type="checkbox" checked="">\n                        </div>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center justify-content-between mb-3">\n                <div class="col-xl-4 col-md-4">\n                    <div class="">\n                        <h6 class="fs-14 mb-1 fw-semibold">Sidebar Size</h6>\n                        <span>Select size of the sidebar to display</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-3 col-md-4">\n                    <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">\n                        <mat-select class="custom-mat-select select" placeholder="Medium - 250px">\n                            <mat-option value="1">Small - 200px </mat-option>\n                            <mat-option value="1">Medium - 250px</mat-option>\n                            <mat-option value="1">Large - 300px</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n            <!-- start row -->\n            <div class="row align-items-center justify-content-between mb-3">\n                <div class="col-xl-4 col-md-4">\n                    <div class="">\n                        <h6 class="fs-14 mb-1 fw-semibold">Font Family</h6>\n                        <span>Select font family of website</span>\n                    </div>\n                </div><!-- end col -->\n                <div class="col-xl-3 col-md-4">\n                    <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">\n                        <mat-select class="custom-mat-select select" placeholder="Instrument Sans">\n                            <mat-option value="1">Instrument Sans</mat-option>\n                            <mat-option value="1">Nunito</mat-option>\n                            <mat-option value="1">Poppins</mat-option>\n                        </mat-select>\n                    </div>\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n\n        <div class="text-end settings-bottom-btn mt-0 border-top d-flex align-items-center justify-content-between pt-4 mb-3">\n            <button type="button" class="btn btn-outline-white btn-md me-2">Cancel</button>\n            <button type="submit" class="btn btn-primary btn-md">Save Changes</button>\n        </div>\n\n    </form>\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppearanceSettingsComponent, { className: "AppearanceSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component.ts", lineNumber: 11 });
})();
export {
  AppearanceSettingsComponent
};
//# sourceMappingURL=chunk-5HYLTN5A.js.map
