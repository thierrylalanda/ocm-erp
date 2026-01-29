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

// angular:jit:template:src/app/features/reports/accounting-report/accounting-report.component.html
var accounting_report_component_default;
var init_accounting_report_component = __esm({
  "angular:jit:template:src/app/features/reports/accounting-report/accounting-report.component.html"() {
    accounting_report_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/reports/accounting-report/accounting-report.component.scss
var accounting_report_component_default2;
var init_accounting_report_component2 = __esm({
  "angular:jit:style:src/app/features/reports/accounting-report/accounting-report.component.scss"() {
    accounting_report_component_default2 = "/* src/app/features/reports/accounting-report/accounting-report.component.scss */\n/*# sourceMappingURL=accounting-report.component.css.map */\n";
  }
});

// src/app/features/reports/accounting-report/accounting-report.component.ts
var AccountingReportComponent;
var init_accounting_report_component3 = __esm({
  "src/app/features/reports/accounting-report/accounting-report.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_accounting_report_component();
    init_accounting_report_component2();
    init_core();
    init_router();
    AccountingReportComponent = class AccountingReportComponent2 {
    };
    AccountingReportComponent = __decorate([
      Component({
        selector: "app-accounting-report",
        imports: [RouterModule],
        template: accounting_report_component_default,
        styles: [accounting_report_component_default2]
      })
    ], AccountingReportComponent);
  }
});

// src/app/features/reports/accounting-report/accounting-report.component.spec.ts
var require_accounting_report_component_spec = __commonJS({
  "src/app/features/reports/accounting-report/accounting-report.component.spec.ts"(exports) {
    init_testing();
    init_accounting_report_component3();
    describe("AccountingReportComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AccountingReportComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AccountingReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_accounting_report_component_spec();
//# sourceMappingURL=spec-app-features-reports-accounting-report-accounting-report.component.spec.js.map
