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

// angular:jit:template:src/app/features/reports/finance-reports/finance-reports.component.html
var finance_reports_component_default;
var init_finance_reports_component = __esm({
  "angular:jit:template:src/app/features/reports/finance-reports/finance-reports.component.html"() {
    finance_reports_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/reports/finance-reports/finance-reports.component.scss
var finance_reports_component_default2;
var init_finance_reports_component2 = __esm({
  "angular:jit:style:src/app/features/reports/finance-reports/finance-reports.component.scss"() {
    finance_reports_component_default2 = "/* src/app/features/reports/finance-reports/finance-reports.component.scss */\n/*# sourceMappingURL=finance-reports.component.css.map */\n";
  }
});

// src/app/features/reports/finance-reports/finance-reports.component.ts
var FinanceReportsComponent;
var init_finance_reports_component3 = __esm({
  "src/app/features/reports/finance-reports/finance-reports.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_finance_reports_component();
    init_finance_reports_component2();
    init_core();
    init_router();
    FinanceReportsComponent = class FinanceReportsComponent2 {
    };
    FinanceReportsComponent = __decorate([
      Component({
        selector: "app-finance-reports",
        imports: [RouterModule],
        template: finance_reports_component_default,
        styles: [finance_reports_component_default2]
      })
    ], FinanceReportsComponent);
  }
});

// src/app/features/reports/finance-reports/finance-reports.component.spec.ts
var require_finance_reports_component_spec = __commonJS({
  "src/app/features/reports/finance-reports/finance-reports.component.spec.ts"(exports) {
    init_testing();
    init_finance_reports_component3();
    describe("FinanceReportsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [FinanceReportsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(FinanceReportsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_finance_reports_component_spec();
//# sourceMappingURL=spec-app-features-reports-finance-reports-finance-reports.component.spec.js.map
