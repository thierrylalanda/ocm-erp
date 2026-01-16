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
import "./chunk-BLAAMQ2R.js";
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

// src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.ts
var SaasSettingsComponent = class _SaasSettingsComponent {
  static \u0275fac = function SaasSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaasSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaasSettingsComponent, selectors: [["app-saas-settings"]], decls: 60, vars: 0, consts: [[1, ""], [1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "card-body", "vh-100", "border-bottom", "mb-3"], [1, "row", "align-items-center", "mb-3"], [1, "col-md-8", "col-sm-12"], [1, "form-label", "fw-medium"], [1, "col-md-4", "col-sm-12"], ["placeholder", "Dollar", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], [1, "col-9"], [1, "col-3", "d-flex", "justify-content-end"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], [1, "row", "align-items-center"], [1, "modal-footer", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-back", "me-2", "border"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function SaasSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
      \u0275\u0275text(4, "Saas Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "form")(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
      \u0275\u0275text(10, "Default Currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "mat-select", 9)(13, "mat-option", 10);
      \u0275\u0275text(14, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-option", 10);
      \u0275\u0275text(16, "USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-option", 10);
      \u0275\u0275text(18, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-option", 10);
      \u0275\u0275text(20, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-option", 10);
      \u0275\u0275text(22, "Rupee");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 5)(24, "div", 6)(25, "label", 7);
      \u0275\u0275text(26, "Days between initial warning and subscription ends");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 8);
      \u0275\u0275element(28, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 5)(30, "div", 6)(31, "label", 7);
      \u0275\u0275text(32, "Interval days between warnings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 8);
      \u0275\u0275element(34, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 5)(36, "div", 6)(37, "label", 7);
      \u0275\u0275text(38, "Maximum Free Domain A Subscriber Can Create");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 8);
      \u0275\u0275element(40, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 5)(42, "div", 12)(43, "label", 7);
      \u0275\u0275text(44, "Email Verification");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 13)(46, "div", 14);
      \u0275\u0275element(47, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 16)(49, "div", 12)(50, "label", 7);
      \u0275\u0275text(51, "Auto approve Domain creation request");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 13)(53, "div", 14);
      \u0275\u0275element(54, "input", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 17)(56, "a", 18);
      \u0275\u0275text(57, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "a", 19);
      \u0275\u0275text(59, "Save Changes");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [CommonModule, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaasSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-saas-settings", imports: [CommonModule, MatSelectModule], template: '<div class="">\n    <div class="mb-3">\n        <div class="pb-3 border-bottom mb-3">\n            <h6 class="mb-0">Saas Settings</h6>\n        </div>\n        <form>\n            <div class="card-body vh-100 border-bottom mb-3">\n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Default Currency</label>\n                    </div>\n                    <div class="col-md-4 col-sm-12">\n                        <mat-select class="custom-mat-select select" placeholder="Dollar">\n                            <mat-option value="1">Dollar</mat-option>\n                            <mat-option value="1">USD</mat-option>\n                            <mat-option value="1">Euro</mat-option>\n                            <mat-option value="1">Pound</mat-option>\n                            <mat-option value="1">Rupee</mat-option>\n                        </mat-select>\n                    </div>\n                </div>\n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Days between initial warning and subscription ends</label>\n                    </div>\n                    <div class="col-md-4 col-sm-12">\n                        <input type="text" class="form-control">\n                    </div>\n                </div> \n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Interval days between warnings</label>\n                    </div>\n                    <div class="col-md-4 col-sm-12">\n                        <input type="text" class="form-control">\n                    </div>\n                </div>\n                <div class="row align-items-center mb-3">\n                    <div class="col-md-8 col-sm-12">\n                        <label class="form-label fw-medium">Maximum Free Domain A Subscriber Can Create</label>\n                    </div>\n                    <div class="col-md-4 col-sm-12">\n                        <input type="text" class="form-control">\n                    </div>\n                </div>\n                <div class="row align-items-center mb-3">\n                    <div class="col-9">\n                        <label class="form-label fw-medium">Email Verification</label>\n                    </div>\n                    <div class="col-3 d-flex justify-content-end">\n                        <div class="form-check form-switch">\n                            <input class="form-check-input" type="checkbox" role="switch" checked>\n                        </div>\n                    </div>\n                </div>\n                <div class="row align-items-center">\n                    <div class="col-9">\n                        <label class="form-label fw-medium">Auto approve Domain creation request</label>\n                    </div>\n                    <div class="col-3 d-flex justify-content-end">\n                        <div class="form-check form-switch">\n                            <input class="form-check-input" type="checkbox" role="switch" checked />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class="modal-footer justify-content-between">\n                <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-back me-2 border">Cancel</a>\n                <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary">Save Changes</a>\n            </div>\n        </form>\n    </div>\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaasSettingsComponent, { className: "SaasSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/app-settings/saas-settings/saas-settings.component.ts", lineNumber: 11 });
})();
export {
  SaasSettingsComponent
};
//# sourceMappingURL=chunk-JDDPMYP6.js.map
