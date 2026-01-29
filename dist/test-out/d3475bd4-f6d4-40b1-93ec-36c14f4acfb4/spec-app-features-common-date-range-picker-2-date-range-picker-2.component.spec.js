import {
  DateRangePicker2Component,
  init_date_range_picker_2_component
} from "./chunk-HMAGJIZR.js";
import "./chunk-WSBEZP5X.js";
import "./chunk-SR4JAI3W.js";
import "./chunk-2RBILSOV.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS
} from "./chunk-FWMZPJRE.js";

// src/app/features/common/date-range-picker-2/date-range-picker-2.component.spec.ts
var require_date_range_picker_2_component_spec = __commonJS({
  "src/app/features/common/date-range-picker-2/date-range-picker-2.component.spec.ts"(exports) {
    init_testing();
    init_date_range_picker_2_component();
    describe("DateRangePicker2Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DateRangePicker2Component]
        }).compileComponents();
        fixture = TestBed.createComponent(DateRangePicker2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_date_range_picker_2_component_spec();
//# sourceMappingURL=spec-app-features-common-date-range-picker-2-date-range-picker-2.component.spec.js.map
