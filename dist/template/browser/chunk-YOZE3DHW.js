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

// src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.ts
var AiConfigurationSettingsComponent = class _AiConfigurationSettingsComponent {
  static \u0275fac = function AiConfigurationSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiConfigurationSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiConfigurationSettingsComponent, selectors: [["app-ai-configuration-settings"]], decls: 50, vars: 0, consts: [[1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], [1, "row", "align-items-center", "mb-3"], [1, "col-md-8"], [1, "form-label", "text-dark", "d-block", "mb-0"], [1, "fs-13"], [1, "col-md-4"], [1, "d-flex", "justify-content-end"], ["type", "text", 1, "form-control"], [1, "col-9"], [1, "form-label", "d-block", "mb-0", "text-dark"], [1, "col-3"], [1, "form-check", "form-check-sm", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input", "form-label"], [1, "pt-4", "mt-4", "border-top", "mb-3"], [1, "d-flex", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AiConfigurationSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "AI Configuration");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "form")(5, "div", 3)(6, "div", 4)(7, "label", 5);
      \u0275\u0275text(8, "API Key");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 6);
      \u0275\u0275text(10, "Enter Your API Key");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7)(12, "div", 8);
      \u0275\u0275domElement(13, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "div", 3)(15, "div", 10)(16, "label", 11);
      \u0275\u0275text(17, "Enable AI Chat Globally");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "span", 6);
      \u0275\u0275text(19, "Seamless AI Chat Support Across the Globe");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "div", 12)(21, "div", 8)(22, "div", 13);
      \u0275\u0275domElement(23, "input", 14);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(24, "div", 3)(25, "div", 10)(26, "label", 11);
      \u0275\u0275text(27, "Enable AI for Admin");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "span", 6);
      \u0275\u0275text(29, "Empower Admins with AI-Driven Automation");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "div", 12)(31, "div", 8)(32, "div", 13);
      \u0275\u0275domElement(33, "input", 14);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(34, "div", 3)(35, "div", 10)(36, "label", 11);
      \u0275\u0275text(37, "Enable AI for Users");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "span", 6);
      \u0275\u0275text(39, "Enhance User Experience with AI Assistance");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "div", 12)(41, "div", 8)(42, "div", 13);
      \u0275\u0275domElement(43, "input", 14);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(44, "div", 15)(45, "div", 16)(46, "a", 17);
      \u0275\u0275text(47, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "button", 18);
      \u0275\u0275text(49, "Save Changes");
      \u0275\u0275domElementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiConfigurationSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-ai-configuration-settings", imports: [], template: '<div class="mb-3 pb-2">\n    <div class="mb-3 pb-3 border-bottom">\n        <h6 class="fw-bold mb-0">AI Configuration</h6>\n    </div>\n    <form>\n\n        <!-- start row -->\n        <div class="row align-items-center mb-3">\n            <div class="col-md-8">\n                <label class="form-label text-dark d-block mb-0">API Key</label>\n                <span class="fs-13">Enter Your API Key</span>\n            </div><!-- end col -->\n            <div class="col-md-4">\n                <div class="d-flex justify-content-end">\n                    <input type="text" class="form-control">\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <!-- start row -->\n        <div class="row align-items-center mb-3">\n            <div class="col-9">\n                <label class="form-label d-block mb-0 text-dark">Enable AI Chat Globally</label>\n                <span class="fs-13">Seamless AI Chat Support Across the Globe</span>\n            </div><!-- end col -->\n            <div class="col-3">\n                <div class="d-flex justify-content-end">\n                    <div class="form-check form-check-sm form-switch">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                    </div>\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <!-- start row -->\n        <div class="row align-items-center mb-3">\n            <div class="col-9">\n                <label class="form-label d-block mb-0 text-dark">Enable AI for Admin</label>\n                <span class="fs-13">Empower Admins with AI-Driven Automation</span>\n            </div><!-- end col -->\n            <div class="col-3">\n                <div class="d-flex justify-content-end">\n                    <div class="form-check form-check-sm form-switch">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                    </div>\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <!-- start row -->\n        <div class="row align-items-center mb-3">\n            <div class="col-9">\n                <label class="form-label d-block mb-0 text-dark">Enable AI for Users</label>\n                <span class="fs-13">Enhance User Experience with AI Assistance</span>\n            </div><!-- end col -->\n            <div class="col-3">\n                <div class="d-flex justify-content-end">\n                    <div class="form-check form-check-sm form-switch">\n                        <input class="form-check-input form-label" type="checkbox" role="switch" checked>\n                    </div>\n                </div>\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n        <div class="pt-4 mt-4 border-top mb-3">\n            <div class="d-flex justify-content-between">\n                <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n        </div>\n    </form>\n</div><!-- end col -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiConfigurationSettingsComponent, { className: "AiConfigurationSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component.ts", lineNumber: 9 });
})();
export {
  AiConfigurationSettingsComponent
};
//# sourceMappingURL=chunk-YOZE3DHW.js.map
