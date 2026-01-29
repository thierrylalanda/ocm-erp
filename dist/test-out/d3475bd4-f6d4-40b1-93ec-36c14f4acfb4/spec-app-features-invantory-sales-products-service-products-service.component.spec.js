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

// angular:jit:template:src/app/features/invantory-sales/products-service/products-service.component.html
var products_service_component_default;
var init_products_service_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/products-service/products-service.component.html"() {
    products_service_component_default = "<router-outlet></router-outlet>\n\n";
  }
});

// angular:jit:style:src/app/features/invantory-sales/products-service/products-service.component.scss
var products_service_component_default2;
var init_products_service_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/products-service/products-service.component.scss"() {
    products_service_component_default2 = "/* src/app/features/invantory-sales/products-service/products-service.component.scss */\n/*# sourceMappingURL=products-service.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/products-service/products-service.component.ts
var ProductsServiceComponent;
var init_products_service_component3 = __esm({
  "src/app/features/invantory-sales/products-service/products-service.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_products_service_component();
    init_products_service_component2();
    init_core();
    init_router();
    ProductsServiceComponent = class ProductsServiceComponent2 {
    };
    ProductsServiceComponent = __decorate([
      Component({
        selector: "app-products-service",
        template: products_service_component_default,
        imports: [RouterModule],
        styles: [products_service_component_default2]
      })
    ], ProductsServiceComponent);
  }
});

// src/app/features/invantory-sales/products-service/products-service.component.spec.ts
var require_products_service_component_spec = __commonJS({
  "src/app/features/invantory-sales/products-service/products-service.component.spec.ts"(exports) {
    init_testing();
    init_products_service_component3();
    describe("ProductsServiceComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ProductsServiceComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductsServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_products_service_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-products-service-products-service.component.spec.js.map
