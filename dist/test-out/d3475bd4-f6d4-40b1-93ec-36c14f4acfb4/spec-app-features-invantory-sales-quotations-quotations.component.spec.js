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

// angular:jit:template:src/app/features/invantory-sales/quotations/quotations.component.html
var quotations_component_default;
var init_quotations_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/quotations/quotations.component.html"() {
    quotations_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/invantory-sales/quotations/quotations.component.scss
var quotations_component_default2;
var init_quotations_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/quotations/quotations.component.scss"() {
    quotations_component_default2 = "/* src/app/features/invantory-sales/quotations/quotations.component.scss */\n/*# sourceMappingURL=quotations.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/quotations/quotations.component.ts
var QuotationsComponent;
var init_quotations_component3 = __esm({
  "src/app/features/invantory-sales/quotations/quotations.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_quotations_component();
    init_quotations_component2();
    init_core();
    init_router();
    QuotationsComponent = class QuotationsComponent2 {
    };
    QuotationsComponent = __decorate([
      Component({
        selector: "app-quotations",
        template: quotations_component_default,
        imports: [RouterModule],
        styles: [quotations_component_default2]
      })
    ], QuotationsComponent);
  }
});

// src/app/features/invantory-sales/quotations/quotations.component.spec.ts
var require_quotations_component_spec = __commonJS({
  "src/app/features/invantory-sales/quotations/quotations.component.spec.ts"(exports) {
    init_testing();
    init_quotations_component3();
    describe("QuotationsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [QuotationsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(QuotationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_quotations_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-quotations-quotations.component.spec.js.map
