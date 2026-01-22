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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/presentation/pages/system-settings/gdpr-cookies/gdpr-cookies.component.ts
var GdprCookiesComponent = class _GdprCookiesComponent {
  static \u0275fac = function GdprCookiesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GdprCookiesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GdprCookiesComponent, selectors: [["app-gdpr-cookies"]], decls: 79, vars: 0, consts: [[1, ""], [1, "mb-3"], [1, "pb-3", "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3"], [1, "mb-0"], [1, "row", "mb-3", "align-items-center", "justify-content-between"], [1, "col-xl-4", "d-flex"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "form-label"], [1, "text-danger"], [1, "col-xl-6"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], [1, "row", "mb-3", "align-items-center"], [1, "col-9", "d-flex"], [1, "col-3"], [1, "form-check", "form-check-sm", "form-switch", "text-end"], [1, "form-check-label", "form-label", "m-0"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input", "form-label"], [1, "row", "mb-3"], [1, "col-xl-8"], [1, "summernote"], [1, "row", "align-items-center"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-4"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function GdprCookiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
      \u0275\u0275text(4, "GDPR Cookies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "form")(6, "div", 1)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "label", 7);
      \u0275\u0275text(11, "Cookies Position ");
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 9)(15, "div")(16, "mat-select", 10)(17, "mat-option", 11);
      \u0275\u0275text(18, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-option", 11);
      \u0275\u0275text(20, "Right");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-option", 11);
      \u0275\u0275text(22, "Left");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "div", 4)(24, "div", 5)(25, "div", 6)(26, "label", 7);
      \u0275\u0275text(27, "Agree Button Text ");
      \u0275\u0275elementStart(28, "span", 8);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 9)(31, "div");
      \u0275\u0275element(32, "input", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 4)(34, "div", 5)(35, "div", 6)(36, "label", 7);
      \u0275\u0275text(37, "Decline Button Text ");
      \u0275\u0275elementStart(38, "span", 8);
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 9)(41, "div");
      \u0275\u0275element(42, "input", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 13)(44, "div", 14)(45, "div", 6)(46, "label", 7);
      \u0275\u0275text(47, "Show Decline Button ");
      \u0275\u0275elementStart(48, "span", 8);
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 15)(51, "div", 16)(52, "label", 17);
      \u0275\u0275element(53, "input", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 19)(55, "div", 5)(56, "div", 6)(57, "label", 7);
      \u0275\u0275text(58, "Cookies Content Text ");
      \u0275\u0275elementStart(59, "span", 8);
      \u0275\u0275text(60, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 20)(62, "div");
      \u0275\u0275element(63, "div", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 22)(65, "div", 5)(66, "div", 6)(67, "label", 7);
      \u0275\u0275text(68, "Links for Cookies Page ");
      \u0275\u0275elementStart(69, "span", 8);
      \u0275\u0275text(70, "*");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 20)(72, "div");
      \u0275\u0275element(73, "input", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "div", 23)(75, "a", 24);
      \u0275\u0275text(76, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 25);
      \u0275\u0275text(78, "Save Changes");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GdprCookiesComponent, [{
    type: Component,
    args: [{ selector: "app-gdpr-cookies", imports: [CommonModule, MatSelectModule], template: '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 d-flex align-items-center justify-content-between border-bottom mb-3">\n            <h6 class="mb-0">GDPR Cookies</h6>\n        </div>\n        <form>\n        <div class="mb-3">\n            <div class="row mb-3 align-items-center justify-content-between">\n                <div class="col-xl-4 d-flex">\n                    <div class="d-flex align-items-center justify-content-center">\n                        <label class="form-label">Cookies Position <span class="text-danger">*</span></label>\n                    </div>\n                </div> <!-- end col -->\n                <div class="col-xl-6">\n                    <div>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">Right</mat-option>\n                            <mat-option value="1">Left</mat-option>\n                        </mat-select>\n                    </div> \n                </div> <!-- end col -->\n            </div> <!-- end row -->\n            <div class="row mb-3 align-items-center justify-content-between">\n                <div class="col-xl-4 d-flex">\n                    <div class="d-flex align-items-center justify-content-center">\n                        <label class="form-label">Agree Button Text <span class="text-danger">*</span></label>\n                    </div>\n                </div> <!-- end col -->\n                <div class="col-xl-6">\n                    <div>\n                        <input type="text" class="form-control">\n                    </div> \n                </div> <!-- end col -->\n            </div> <!-- end row -->\n            <div class="row mb-3 align-items-center justify-content-between">\n                <div class="col-xl-4 d-flex">\n                    <div class="d-flex align-items-center justify-content-center">\n                        <label class="form-label">Decline Button Text <span class="text-danger">*</span></label>\n                    </div>\n                </div> <!-- end col -->\n                <div class="col-xl-6">\n                    <div>\n                        <input type="text" class="form-control">\n                    </div> \n                </div> <!-- end col -->\n            </div> <!-- end row -->\n            <div class="row mb-3 align-items-center">\n                <div class="col-9 d-flex">\n                    <div class="d-flex align-items-center justify-content-center">\n                        <label class="form-label">Show Decline Button <span class="text-danger">*</span></label>\n                    </div>\n                </div> <!-- end col -->\n                <div class="col-3">\n                    <div class="form-check form-check-sm form-switch text-end">\n                        <label class="form-check-label form-label m-0">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked="">\n                        </label>\n                    </div>\n                </div> <!-- end col -->\n            </div> <!-- end row -->\n            <div class="row mb-3 ">\n                <div class="col-xl-4 d-flex">\n                    <div class="d-flex align-items-center justify-content-center">\n                        <label class="form-label">Cookies Content Text <span class="text-danger">*</span></label>\n                    </div>\n                </div> <!-- end col -->\n                <div class="col-xl-8">\n                    <div>\n                        <div class="summernote"></div>\n                    </div>\n                </div> <!-- end col -->\n            </div> <!-- end row -->																			\n            <div class="row align-items-center">\n                <div class="col-xl-4 d-flex">\n                    <div class="d-flex align-items-center justify-content-center">\n                        <label class="form-label">Links for Cookies Page <span class="text-danger">*</span></label>\n                    </div>\n                </div> <!-- end col -->\n                <div class="col-xl-8">\n                    <div>\n                        <input type="text" class="form-control">\n                    </div> \n                </div> <!-- end col -->\n            </div> <!-- end row -->\n        </div>\n        <div class="d-flex align-items-center justify-content-between border-top pt-4">\n            <a href="javascript:void(0);" class="btn btn-outline-white">Cancel</a>\n            <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>\n        </div>\n    </form>\n    </div>\n</div> <!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GdprCookiesComponent, { className: "GdprCookiesComponent", filePath: "src/app/modules/setting/presentation/pages/system-settings/gdpr-cookies/gdpr-cookies.component.ts", lineNumber: 11 });
})();
export {
  GdprCookiesComponent
};
//# sourceMappingURL=chunk-3S6WZX5N.js.map
