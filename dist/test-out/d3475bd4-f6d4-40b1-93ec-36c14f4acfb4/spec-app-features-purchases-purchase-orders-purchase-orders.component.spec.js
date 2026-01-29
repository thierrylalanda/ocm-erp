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

// angular:jit:template:src/app/features/purchases/purchase-orders/purchase-orders.component.html
var purchase_orders_component_default;
var init_purchase_orders_component = __esm({
  "angular:jit:template:src/app/features/purchases/purchase-orders/purchase-orders.component.html"() {
    purchase_orders_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/purchases/purchase-orders/purchase-orders.component.scss
var purchase_orders_component_default2;
var init_purchase_orders_component2 = __esm({
  "angular:jit:style:src/app/features/purchases/purchase-orders/purchase-orders.component.scss"() {
    purchase_orders_component_default2 = "/* src/app/features/purchases/purchase-orders/purchase-orders.component.scss */\n/*# sourceMappingURL=purchase-orders.component.css.map */\n";
  }
});

// src/app/features/purchases/purchase-orders/purchase-orders.component.ts
var PurchaseOrdersComponent;
var init_purchase_orders_component3 = __esm({
  "src/app/features/purchases/purchase-orders/purchase-orders.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_purchase_orders_component();
    init_purchase_orders_component2();
    init_core();
    init_router();
    PurchaseOrdersComponent = class PurchaseOrdersComponent2 {
    };
    PurchaseOrdersComponent = __decorate([
      Component({
        selector: "app-purchase-orders",
        imports: [RouterModule],
        template: purchase_orders_component_default,
        styles: [purchase_orders_component_default2]
      })
    ], PurchaseOrdersComponent);
  }
});

// src/app/features/purchases/purchase-orders/purchase-orders.component.spec.ts
var require_purchase_orders_component_spec = __commonJS({
  "src/app/features/purchases/purchase-orders/purchase-orders.component.spec.ts"(exports) {
    init_testing();
    init_purchase_orders_component3();
    describe("PurchaseOrdersComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PurchaseOrdersComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PurchaseOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_purchase_orders_component_spec();
//# sourceMappingURL=spec-app-features-purchases-purchase-orders-purchase-orders.component.spec.js.map
