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

// angular:jit:template:src/app/features/reports/user-reports/user-reports.component.html
var user_reports_component_default;
var init_user_reports_component = __esm({
  "angular:jit:template:src/app/features/reports/user-reports/user-reports.component.html"() {
    user_reports_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/reports/user-reports/user-reports.component.scss
var user_reports_component_default2;
var init_user_reports_component2 = __esm({
  "angular:jit:style:src/app/features/reports/user-reports/user-reports.component.scss"() {
    user_reports_component_default2 = "/* src/app/features/reports/user-reports/user-reports.component.scss */\n/*# sourceMappingURL=user-reports.component.css.map */\n";
  }
});

// src/app/features/reports/user-reports/user-reports.component.ts
var UserReportsComponent;
var init_user_reports_component3 = __esm({
  "src/app/features/reports/user-reports/user-reports.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_reports_component();
    init_user_reports_component2();
    init_core();
    init_router();
    UserReportsComponent = class UserReportsComponent2 {
    };
    UserReportsComponent = __decorate([
      Component({
        selector: "app-user-reports",
        imports: [RouterModule],
        template: user_reports_component_default,
        styles: [user_reports_component_default2]
      })
    ], UserReportsComponent);
  }
});

// src/app/features/reports/user-reports/user-reports.component.spec.ts
var require_user_reports_component_spec = __commonJS({
  "src/app/features/reports/user-reports/user-reports.component.spec.ts"(exports) {
    init_testing();
    init_user_reports_component3();
    describe("UserReportsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [UserReportsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(UserReportsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_user_reports_component_spec();
//# sourceMappingURL=spec-app-features-reports-user-reports-user-reports.component.spec.js.map
