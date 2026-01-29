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

// angular:jit:template:src/app/features/invantory-sales/invoices/invoices.component.html
var invoices_component_default;
var init_invoices_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/invoices/invoices.component.html"() {
    invoices_component_default = "        <router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/invantory-sales/invoices/invoices.component.scss
var invoices_component_default2;
var init_invoices_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/invoices/invoices.component.scss"() {
    invoices_component_default2 = "/* src/app/features/invantory-sales/invoices/invoices.component.scss */\n/*# sourceMappingURL=invoices.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/invoices/invoices.component.ts
var InvoicesComponent;
var init_invoices_component3 = __esm({
  "src/app/features/invantory-sales/invoices/invoices.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_invoices_component();
    init_invoices_component2();
    init_core();
    init_router();
    InvoicesComponent = class InvoicesComponent2 {
    };
    InvoicesComponent = __decorate([
      Component({
        selector: "app-invoices",
        template: invoices_component_default,
        imports: [RouterModule],
        styles: [invoices_component_default2]
      })
    ], InvoicesComponent);
  }
});

// src/app/features/invantory-sales/invoices/invoices.component.spec.ts
var require_invoices_component_spec = __commonJS({
  "src/app/features/invantory-sales/invoices/invoices.component.spec.ts"(exports) {
    init_testing();
    init_invoices_component3();
    describe("InvoicesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [InvoicesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(InvoicesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_invoices_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-invoices-invoices.component.spec.js.map
