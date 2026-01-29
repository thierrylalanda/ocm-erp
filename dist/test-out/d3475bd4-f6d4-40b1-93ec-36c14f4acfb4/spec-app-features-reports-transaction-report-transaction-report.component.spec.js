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

// angular:jit:template:src/app/features/reports/transaction-report/transaction-report.component.html
var transaction_report_component_default;
var init_transaction_report_component = __esm({
  "angular:jit:template:src/app/features/reports/transaction-report/transaction-report.component.html"() {
    transaction_report_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/reports/transaction-report/transaction-report.component.scss
var transaction_report_component_default2;
var init_transaction_report_component2 = __esm({
  "angular:jit:style:src/app/features/reports/transaction-report/transaction-report.component.scss"() {
    transaction_report_component_default2 = "/* src/app/features/reports/transaction-report/transaction-report.component.scss */\n/*# sourceMappingURL=transaction-report.component.css.map */\n";
  }
});

// src/app/features/reports/transaction-report/transaction-report.component.ts
var TransactionReportComponent;
var init_transaction_report_component3 = __esm({
  "src/app/features/reports/transaction-report/transaction-report.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_transaction_report_component();
    init_transaction_report_component2();
    init_core();
    init_router();
    TransactionReportComponent = class TransactionReportComponent2 {
    };
    TransactionReportComponent = __decorate([
      Component({
        selector: "app-transaction-report",
        imports: [RouterModule],
        template: transaction_report_component_default,
        styles: [transaction_report_component_default2]
      })
    ], TransactionReportComponent);
  }
});

// src/app/features/reports/transaction-report/transaction-report.component.spec.ts
var require_transaction_report_component_spec = __commonJS({
  "src/app/features/reports/transaction-report/transaction-report.component.spec.ts"(exports) {
    init_testing();
    init_transaction_report_component3();
    describe("TransactionReportComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [TransactionReportComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TransactionReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_transaction_report_component_spec();
//# sourceMappingURL=spec-app-features-reports-transaction-report-transaction-report.component.spec.js.map
