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

// src/app/modules/setting/presentation/pages/other-settings/system-update/system-update.component.ts
var SystemUpdateComponent = class _SystemUpdateComponent {
  static \u0275fac = function SystemUpdateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemUpdateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemUpdateComponent, selectors: [["app-system-update"]], decls: 36, vars: 0, consts: [[1, ""], [1, "d-flex", "justify-content-between", "align-items-center", "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "d-flex", "align-items-center", "mb-3", "pb-1"], [1, "avatar", "avatar-md", "bg-light", "rounded-circle", "me-2"], [1, "isax", "isax-tick-circle5", "text-primary", "fs-24"], [1, "text-dark", "fw-medium", "mb-1"], [1, "ms-2", "badge", "badge-soft-primary", "badge-sm"], [1, "fs-13"], [1, "mb-3"], ["role", "alert", 1, "alert", "alert-dismissible", "d-flex", "align-items-center", "fade", "show", "bg-light", "border", "mb-1"], [1, "isax", "isax-info-circle", "text-info", "me-2"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"]], template: function SystemUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "form")(2, "div", 1)(3, "h6", 2);
      \u0275\u0275text(4, "System Update");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "a", 3);
      \u0275\u0275text(6, "Check for Updates");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "span", 5);
      \u0275\u0275domElement(9, "i", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div")(11, "p", 7);
      \u0275\u0275text(12, "You are up to date ");
      \u0275\u0275domElementStart(13, "span", 8);
      \u0275\u0275text(14, "Current Version : 8.0");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "p", 9);
      \u0275\u0275text(16, "Last Checked : Today 10:30 AM");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(17, "div", 10)(18, "div", 11);
      \u0275\u0275domElement(19, "i", 12);
      \u0275\u0275text(20, "Before updating, it's best to back up your files and database and review the changelog. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 13)(22, "div", 14)(23, "div")(24, "label", 15);
      \u0275\u0275text(25, "Purchase Key ");
      \u0275\u0275domElementStart(26, "span", 16);
      \u0275\u0275text(27, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(28, "input", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "div", 14)(30, "div")(31, "label", 15);
      \u0275\u0275text(32, "User Name ");
      \u0275\u0275domElementStart(33, "span", 16);
      \u0275\u0275text(34, "*");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(35, "input", 17);
      \u0275\u0275domElementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemUpdateComponent, [{
    type: Component,
    args: [{ selector: "app-system-update", imports: [], template: `<div class="">
    <form>
        <div class="d-flex justify-content-between align-items-center pb-3 border-bottom mb-3">
            <h6 class="mb-0">System Update</h6>
            <a href="javascript:void(0);" class="btn btn-primary">Check for Updates</a>
        </div>
        <div class="d-flex align-items-center mb-3 pb-1">
            <span class="avatar avatar-md bg-light rounded-circle me-2"><i class="isax isax-tick-circle5 text-primary fs-24"></i></span>
            <div>
                <p class="text-dark fw-medium mb-1">You are up to date <span class="ms-2 badge badge-soft-primary badge-sm">Current Version : 8.0</span></p>
                <p class="fs-13">Last Checked : Today 10:30 AM</p>
            </div>
        </div>
        <div class="mb-3">
            <div class="alert alert-dismissible d-flex align-items-center fade show bg-light border mb-1" role="alert">
                <i class="isax isax-info-circle text-info me-2"></i>Before updating, it's best to back up your files and database and review the changelog.
            </div>
        </div>
        <!-- start row -->
        <div class="row">
            <div class="col-md-6 mb-3">
                <div>
                    <label class="form-label">Purchase Key <span class="text-danger">*</span></label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div>
                    <label class="form-label">User Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
        <!-- end row -->
    </form>
</div><!-- end col -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemUpdateComponent, { className: "SystemUpdateComponent", filePath: "src/app/modules/setting/presentation/pages/other-settings/system-update/system-update.component.ts", lineNumber: 9 });
})();
export {
  SystemUpdateComponent
};
//# sourceMappingURL=chunk-PFGYRV57.js.map
