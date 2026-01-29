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

// angular:jit:template:src/app/features/invoice-modals/invoice-modals.component.html
var invoice_modals_component_default;
var init_invoice_modals_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/invoice-modals.component.html"() {
    invoice_modals_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/invoice-modals/invoice-modals.component.scss
var invoice_modals_component_default2;
var init_invoice_modals_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/invoice-modals.component.scss"() {
    invoice_modals_component_default2 = "/* src/app/features/invoice-modals/invoice-modals.component.scss */\n/*# sourceMappingURL=invoice-modals.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/invoice-modals.component.ts
var InvoiceModalsComponent;
var init_invoice_modals_component3 = __esm({
  "src/app/features/invoice-modals/invoice-modals.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_invoice_modals_component();
    init_invoice_modals_component2();
    init_core();
    init_router();
    InvoiceModalsComponent = class InvoiceModalsComponent2 {
    };
    InvoiceModalsComponent = __decorate([
      Component({
        selector: "app-invoice-modals",
        imports: [RouterModule],
        template: invoice_modals_component_default,
        styles: [invoice_modals_component_default2]
      })
    ], InvoiceModalsComponent);
  }
});

// src/app/features/invoice-modals/invoice-modals.component.spec.ts
var require_invoice_modals_component_spec = __commonJS({
  "src/app/features/invoice-modals/invoice-modals.component.spec.ts"(exports) {
    init_testing();
    init_invoice_modals_component3();
    describe("InvoiceModalsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [InvoiceModalsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(InvoiceModalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_invoice_modals_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-invoice-modals.component.spec.js.map
