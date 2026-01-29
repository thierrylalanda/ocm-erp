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

// angular:jit:template:src/app/features/common/date-range-picker/date-range-picker.component.html
var date_range_picker_component_default;
var init_date_range_picker_component = __esm({
  "angular:jit:template:src/app/features/common/date-range-picker/date-range-picker.component.html"() {
    date_range_picker_component_default = '<div class="input-icon-end position-relative  ngx-dates">\n  <input type="text" class="form-control bookingrange" container=".ngx-dates" placeholder="dd/mm/yyyy - dd/mm/yyyy" bsDaterangepicker [(ngModel)]="bsRangeValue" name="time" [bsConfig]="{ adaptivePosition: true }">\n  <span class="input-icon-addon text-title">\n      <i class="isax isax-calendar-2"></i>\n  </span>\n</div>\n\n';
  }
});

// angular:jit:style:src/app/features/common/date-range-picker/date-range-picker.component.scss
var date_range_picker_component_default2;
var init_date_range_picker_component2 = __esm({
  "angular:jit:style:src/app/features/common/date-range-picker/date-range-picker.component.scss"() {
    date_range_picker_component_default2 = "/* src/app/features/common/date-range-picker/date-range-picker.component.scss */\n.input-icon-addon {\n  left: auto;\n  right: 0;\n}\n/*# sourceMappingURL=date-range-picker.component.css.map */\n";
  }
});

// src/app/features/common/date-range-picker/date-range-picker.component.ts
var DateRangePickerComponent;
var init_date_range_picker_component3 = __esm({
  "src/app/features/common/date-range-picker/date-range-picker.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_date_range_picker_component();
    init_date_range_picker_component2();
    init_common();
    init_core();
    init_forms();
    init_ngx_bootstrap_datepicker();
    DateRangePickerComponent = class DateRangePickerComponent2 {
      bsValue = /* @__PURE__ */ new Date();
      bsRangeValue;
      maxDate = /* @__PURE__ */ new Date();
      constructor() {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
      }
      static ctorParameters = () => [];
    };
    DateRangePickerComponent = __decorate([
      Component({
        selector: "app-date-range-picker",
        template: date_range_picker_component_default,
        imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          BsDatepickerModule
        ],
        styles: [date_range_picker_component_default2]
      })
    ], DateRangePickerComponent);
  }
});

export {
  DateRangePickerComponent,
  init_date_range_picker_component3 as init_date_range_picker_component
};
//# sourceMappingURL=chunk-ASDSEI3A.js.map
