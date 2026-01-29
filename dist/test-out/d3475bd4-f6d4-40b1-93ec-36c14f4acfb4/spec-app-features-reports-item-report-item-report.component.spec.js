import {
  RouterModule,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/reports/item-report/item-report.component.html
var item_report_component_default;
var init_item_report_component = __esm({
  "angular:jit:template:src/app/features/reports/item-report/item-report.component.html"() {
    item_report_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/reports/item-report/item-report.component.scss
var item_report_component_default2;
var init_item_report_component2 = __esm({
  "angular:jit:style:src/app/features/reports/item-report/item-report.component.scss"() {
    item_report_component_default2 = "/* src/app/features/reports/item-report/item-report.component.scss */\n/*# sourceMappingURL=item-report.component.css.map */\n";
  }
});

// src/app/features/reports/item-report/item-report.component.ts
var ItemReportComponent;
var init_item_report_component3 = __esm({
  "src/app/features/reports/item-report/item-report.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_item_report_component();
    init_item_report_component2();
    init_core();
    init_router();
    ItemReportComponent = class ItemReportComponent2 {
    };
    ItemReportComponent = __decorate([
      Component({
        selector: "app-item-report",
        imports: [RouterModule],
        template: item_report_component_default,
        styles: [item_report_component_default2]
      })
    ], ItemReportComponent);
  }
});

// src/app/features/reports/item-report/item-report.component.spec.ts
var require_item_report_component_spec = __commonJS({
  "src/app/features/reports/item-report/item-report.component.spec.ts"(exports) {
    init_testing();
    init_item_report_component3();
    describe("ItemReportComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ItemReportComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ItemReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_item_report_component_spec();
//# sourceMappingURL=spec-app-features-reports-item-report-item-report.component.spec.js.map
