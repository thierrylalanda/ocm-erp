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

// angular:jit:template:src/app/features/ui-interface/charts/charts.component.html
var charts_component_default;
var init_charts_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/charts/charts.component.html"() {
    charts_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/ui-interface/charts/charts.component.scss
var charts_component_default2;
var init_charts_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/charts/charts.component.scss"() {
    charts_component_default2 = "/* src/app/features/ui-interface/charts/charts.component.scss */\n/*# sourceMappingURL=charts.component.css.map */\n";
  }
});

// src/app/features/ui-interface/charts/charts.component.ts
var ChartsComponent;
var init_charts_component3 = __esm({
  "src/app/features/ui-interface/charts/charts.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_charts_component();
    init_charts_component2();
    init_core();
    init_router();
    ChartsComponent = class ChartsComponent2 {
    };
    ChartsComponent = __decorate([
      Component({
        selector: "app-charts",
        template: charts_component_default,
        imports: [RouterModule],
        styles: [charts_component_default2]
      })
    ], ChartsComponent);
  }
});

// src/app/features/ui-interface/charts/charts.component.spec.ts
var require_charts_component_spec = __commonJS({
  "src/app/features/ui-interface/charts/charts.component.spec.ts"(exports) {
    init_testing();
    init_charts_component3();
    describe("ChartsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ChartsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ChartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_charts_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-charts-charts.component.spec.js.map
