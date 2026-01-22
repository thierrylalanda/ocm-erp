import {
  BsDatepickerModule,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective
} from "./chunk-MR3VQUUR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-NAWYXTZ5.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";

// src/app/features/common/date-range-picker-2/date-range-picker-2.component.ts
var _c0 = () => ({ adaptivePosition: true });
var DateRangePicker2Component = class _DateRangePicker2Component {
  bsValue1 = /* @__PURE__ */ new Date();
  bsRangeValue1;
  maxDate1 = /* @__PURE__ */ new Date();
  constructor() {
    this.maxDate1.setDate(this.maxDate1.getDate() + 7);
    this.bsRangeValue1 = [this.bsValue1, this.maxDate1];
  }
  static \u0275fac = function DateRangePicker2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePicker2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangePicker2Component, selectors: [["app-date-range-picker-2"]], decls: 3, vars: 3, consts: [["id", "reportrange", 1, "reportrange-picker", "d-flex", "align-items-center", "ngxdate1"], [1, "isax", "isax-calendar", "text-gray-5", "fs-14", "me-1"], ["container", ".ngx-dates1", "placeholder", "dd/mm/yyyy - dd/mm/yyyy", "bsDaterangepicker", "", "name", "time", 1, "reportrange-picker-field", "border-0", 3, "ngModelChange", "ngModel", "bsConfig"]], template: function DateRangePicker2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275elementStart(2, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function DateRangePicker2Component_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.bsRangeValue1, $event) || (ctx.bsRangeValue1 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.bsRangeValue1);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(2, _c0));
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ReactiveFormsModule,
    BsDatepickerModule,
    BsDaterangepickerDirective,
    BsDaterangepickerInputDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePicker2Component, [{
    type: Component,
    args: [{ selector: "app-date-range-picker-2", imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BsDatepickerModule
    ], template: '<div id="reportrange" class="reportrange-picker d-flex align-items-center ngxdate1">\n    <i class="isax isax-calendar text-gray-5 fs-14 me-1"></i><input class="reportrange-picker-field border-0 " container=".ngx-dates1" placeholder="dd/mm/yyyy - dd/mm/yyyy" bsDaterangepicker [(ngModel)]="bsRangeValue1" name="time" [bsConfig]="{ adaptivePosition: true }"/>\n</div>  ' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangePicker2Component, { className: "DateRangePicker2Component", filePath: "src/app/features/common/date-range-picker-2/date-range-picker-2.component.ts", lineNumber: 18 });
})();

export {
  DateRangePicker2Component
};
//# sourceMappingURL=chunk-U2UZGCVB.js.map
