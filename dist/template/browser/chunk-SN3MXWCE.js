import {
  BsDatepickerModule,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective
} from "./chunk-6H2KZBXU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BLAAMQ2R.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
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
} from "./chunk-U4CEU3KS.js";

// src/app/features/common/date-range-picker/date-range-picker.component.ts
var _c0 = () => ({ adaptivePosition: true });
var DateRangePickerComponent = class _DateRangePickerComponent {
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  static \u0275fac = function DateRangePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangePickerComponent, selectors: [["app-date-range-picker"]], decls: 4, vars: 3, consts: [[1, "input-icon-end", "position-relative", "ngx-dates"], ["type", "text", "container", ".ngx-dates", "placeholder", "dd/mm/yyyy - dd/mm/yyyy", "bsDaterangepicker", "", "name", "time", 1, "form-control", "bookingrange", 3, "ngModelChange", "ngModel", "bsConfig"], [1, "input-icon-addon", "text-title"], [1, "isax", "isax-calendar-2"]], template: function DateRangePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
      \u0275\u0275twoWayListener("ngModelChange", function DateRangePickerComponent_Template_input_ngModelChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.bsRangeValue, $event) || (ctx.bsRangeValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.bsRangeValue);
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
  ], styles: ["\n\n.input-icon-addon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n/*# sourceMappingURL=date-range-picker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePickerComponent, [{
    type: Component,
    args: [{ selector: "app-date-range-picker", imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BsDatepickerModule
    ], template: '<div class="input-icon-end position-relative  ngx-dates">\n  <input type="text" class="form-control bookingrange" container=".ngx-dates" placeholder="dd/mm/yyyy - dd/mm/yyyy" bsDaterangepicker [(ngModel)]="bsRangeValue" name="time" [bsConfig]="{ adaptivePosition: true }">\n  <span class="input-icon-addon text-title">\n      <i class="isax isax-calendar-2"></i>\n  </span>\n</div>\n\n', styles: ["/* src/app/features/common/date-range-picker/date-range-picker.component.scss */\n.input-icon-addon {\n  left: auto;\n  right: 0;\n}\n/*# sourceMappingURL=date-range-picker.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangePickerComponent, { className: "DateRangePickerComponent", filePath: "src/app/features/common/date-range-picker/date-range-picker.component.ts", lineNumber: 17 });
})();

export {
  DateRangePickerComponent
};
//# sourceMappingURL=chunk-SN3MXWCE.js.map
