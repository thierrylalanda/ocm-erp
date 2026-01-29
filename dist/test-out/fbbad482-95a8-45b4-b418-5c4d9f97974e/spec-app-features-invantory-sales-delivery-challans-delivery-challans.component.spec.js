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

// angular:jit:template:src/app/features/invantory-sales/delivery-challans/delivery-challans.component.html
var delivery_challans_component_default;
var init_delivery_challans_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/delivery-challans/delivery-challans.component.html"() {
    delivery_challans_component_default = "<router-outlet></router-outlet>\n";
  }
});

// angular:jit:style:src/app/features/invantory-sales/delivery-challans/delivery-challans.component.scss
var delivery_challans_component_default2;
var init_delivery_challans_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/delivery-challans/delivery-challans.component.scss"() {
    delivery_challans_component_default2 = "/* src/app/features/invantory-sales/delivery-challans/delivery-challans.component.scss */\n/*# sourceMappingURL=delivery-challans.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/delivery-challans/delivery-challans.component.ts
var DeliveryChallansComponent;
var init_delivery_challans_component3 = __esm({
  "src/app/features/invantory-sales/delivery-challans/delivery-challans.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_delivery_challans_component();
    init_delivery_challans_component2();
    init_core();
    init_router();
    DeliveryChallansComponent = class DeliveryChallansComponent2 {
    };
    DeliveryChallansComponent = __decorate([
      Component({
        selector: "app-delivery-challans",
        template: delivery_challans_component_default,
        imports: [RouterModule],
        styles: [delivery_challans_component_default2]
      })
    ], DeliveryChallansComponent);
  }
});

// src/app/features/invantory-sales/delivery-challans/delivery-challans.component.spec.ts
var require_delivery_challans_component_spec = __commonJS({
  "src/app/features/invantory-sales/delivery-challans/delivery-challans.component.spec.ts"(exports) {
    init_testing();
    init_delivery_challans_component3();
    describe("DeliveryChallansComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [DeliveryChallansComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DeliveryChallansComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_delivery_challans_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-delivery-challans-delivery-challans.component.spec.js.map
