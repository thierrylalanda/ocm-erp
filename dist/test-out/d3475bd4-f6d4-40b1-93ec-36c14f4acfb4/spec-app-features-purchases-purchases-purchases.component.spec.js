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

// angular:jit:template:src/app/features/purchases/purchases/purchases.component.html
var purchases_component_default;
var init_purchases_component = __esm({
  "angular:jit:template:src/app/features/purchases/purchases/purchases.component.html"() {
    purchases_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/purchases/purchases/purchases.component.scss
var purchases_component_default2;
var init_purchases_component2 = __esm({
  "angular:jit:style:src/app/features/purchases/purchases/purchases.component.scss"() {
    purchases_component_default2 = "/* src/app/features/purchases/purchases/purchases.component.scss */\n/*# sourceMappingURL=purchases.component.css.map */\n";
  }
});

// src/app/features/purchases/purchases/purchases.component.ts
var PurchasesComponent;
var init_purchases_component3 = __esm({
  "src/app/features/purchases/purchases/purchases.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_purchases_component();
    init_purchases_component2();
    init_core();
    init_router();
    PurchasesComponent = class PurchasesComponent2 {
    };
    PurchasesComponent = __decorate([
      Component({
        selector: "app-purchases",
        imports: [RouterModule],
        template: purchases_component_default,
        styles: [purchases_component_default2]
      })
    ], PurchasesComponent);
  }
});

// src/app/features/purchases/purchases/purchases.component.spec.ts
var require_purchases_component_spec = __commonJS({
  "src/app/features/purchases/purchases/purchases.component.spec.ts"(exports) {
    init_testing();
    init_purchases_component3();
    describe("PurchasesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PurchasesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PurchasesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_purchases_component_spec();
//# sourceMappingURL=spec-app-features-purchases-purchases-purchases.component.spec.js.map
