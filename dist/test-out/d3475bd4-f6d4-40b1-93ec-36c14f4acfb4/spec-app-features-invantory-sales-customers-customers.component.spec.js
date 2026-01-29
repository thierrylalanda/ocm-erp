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

// angular:jit:template:src/app/features/invantory-sales/customers/customers.component.html
var customers_component_default;
var init_customers_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/customers/customers.component.html"() {
    customers_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/invantory-sales/customers/customers.component.scss
var customers_component_default2;
var init_customers_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/customers/customers.component.scss"() {
    customers_component_default2 = "/* src/app/features/invantory-sales/customers/customers.component.scss */\n/*# sourceMappingURL=customers.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/customers/customers.component.ts
var CustomersComponent;
var init_customers_component3 = __esm({
  "src/app/features/invantory-sales/customers/customers.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_customers_component();
    init_customers_component2();
    init_core();
    init_router();
    CustomersComponent = class CustomersComponent2 {
    };
    CustomersComponent = __decorate([
      Component({
        selector: "app-customers",
        template: customers_component_default,
        imports: [RouterModule],
        styles: [customers_component_default2]
      })
    ], CustomersComponent);
  }
});

// src/app/features/invantory-sales/customers/customers.component.spec.ts
var require_customers_component_spec = __commonJS({
  "src/app/features/invantory-sales/customers/customers.component.spec.ts"(exports) {
    init_testing();
    init_customers_component3();
    describe("CustomersComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CustomersComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CustomersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_customers_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-customers-customers.component.spec.js.map
