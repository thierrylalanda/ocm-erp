import {
  BsDatepickerModule,
  init_ngx_bootstrap_datepicker
} from "./chunk-WSBEZP5X.js";
import {
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/common/date-range-picker-2/date-range-picker-2.component.html
var date_range_picker_2_component_default;
var init_date_range_picker_2_component = __esm({
  "angular:jit:template:src/app/features/common/date-range-picker-2/date-range-picker-2.component.html"() {
    date_range_picker_2_component_default = '<div id="reportrange" class="reportrange-picker d-flex align-items-center ngxdate1">\n    <i class="isax isax-calendar text-gray-5 fs-14 me-1"></i><input class="reportrange-picker-field border-0 " container=".ngx-dates1" placeholder="dd/mm/yyyy - dd/mm/yyyy" bsDaterangepicker [(ngModel)]="bsRangeValue1" name="time" [bsConfig]="{ adaptivePosition: true }"/>\n</div>  ';
  }
});

// angular:jit:style:src/app/features/common/date-range-picker-2/date-range-picker-2.component.scss
var date_range_picker_2_component_default2;
var init_date_range_picker_2_component2 = __esm({
  "angular:jit:style:src/app/features/common/date-range-picker-2/date-range-picker-2.component.scss"() {
    date_range_picker_2_component_default2 = "/* src/app/features/common/date-range-picker-2/date-range-picker-2.component.scss */\n/*# sourceMappingURL=date-range-picker-2.component.css.map */\n";
  }
});

// src/app/features/common/date-range-picker-2/date-range-picker-2.component.ts
var DateRangePicker2Component;
var init_date_range_picker_2_component3 = __esm({
  "src/app/features/common/date-range-picker-2/date-range-picker-2.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_date_range_picker_2_component();
    init_date_range_picker_2_component2();
    init_common();
    init_core();
    init_forms();
    init_ngx_bootstrap_datepicker();
    DateRangePicker2Component = class DateRangePicker2Component2 {
      bsValue1 = /* @__PURE__ */ new Date();
      bsRangeValue1;
      maxDate1 = /* @__PURE__ */ new Date();
      constructor() {
        this.maxDate1.setDate(this.maxDate1.getDate() + 7);
        this.bsRangeValue1 = [this.bsValue1, this.maxDate1];
      }
      static ctorParameters = () => [];
    };
    DateRangePicker2Component = __decorate([
      Component({
        selector: "app-date-range-picker-2",
        template: date_range_picker_2_component_default,
        imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          BsDatepickerModule
        ],
        styles: [date_range_picker_2_component_default2]
      })
    ], DateRangePicker2Component);
  }
});

export {
  DateRangePicker2Component,
  init_date_range_picker_2_component3 as init_date_range_picker_2_component
};
//# sourceMappingURL=chunk-HMAGJIZR.js.map
