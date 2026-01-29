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

// angular:jit:template:src/app/features/reports/reports.component.html
var reports_component_default;
var init_reports_component = __esm({
  "angular:jit:template:src/app/features/reports/reports.component.html"() {
    reports_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/reports/reports.component.scss
var reports_component_default2;
var init_reports_component2 = __esm({
  "angular:jit:style:src/app/features/reports/reports.component.scss"() {
    reports_component_default2 = "/* src/app/features/reports/reports.component.scss */\n/*# sourceMappingURL=reports.component.css.map */\n";
  }
});

// src/app/features/reports/reports.component.ts
var ReportsComponent;
var init_reports_component3 = __esm({
  "src/app/features/reports/reports.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_reports_component();
    init_reports_component2();
    init_core();
    init_router();
    ReportsComponent = class ReportsComponent2 {
    };
    ReportsComponent = __decorate([
      Component({
        selector: "app-reports",
        imports: [RouterModule],
        template: reports_component_default,
        styles: [reports_component_default2]
      })
    ], ReportsComponent);
  }
});

// src/app/features/reports/reports.component.spec.ts
var require_reports_component_spec = __commonJS({
  "src/app/features/reports/reports.component.spec.ts"(exports) {
    init_testing();
    init_reports_component3();
    describe("ReportsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ReportsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ReportsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_reports_component_spec();
//# sourceMappingURL=spec-app-features-reports-reports.component.spec.js.map
