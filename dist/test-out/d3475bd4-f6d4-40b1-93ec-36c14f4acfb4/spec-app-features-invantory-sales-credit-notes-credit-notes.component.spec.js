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

// angular:jit:template:src/app/features/invantory-sales/credit-notes/credit-notes.component.html
var credit_notes_component_default;
var init_credit_notes_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/credit-notes/credit-notes.component.html"() {
    credit_notes_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/invantory-sales/credit-notes/credit-notes.component.scss
var credit_notes_component_default2;
var init_credit_notes_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/credit-notes/credit-notes.component.scss"() {
    credit_notes_component_default2 = "/* src/app/features/invantory-sales/credit-notes/credit-notes.component.scss */\n/*# sourceMappingURL=credit-notes.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/credit-notes/credit-notes.component.ts
var CreditNotesComponent;
var init_credit_notes_component3 = __esm({
  "src/app/features/invantory-sales/credit-notes/credit-notes.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_credit_notes_component();
    init_credit_notes_component2();
    init_core();
    init_router();
    CreditNotesComponent = class CreditNotesComponent2 {
    };
    CreditNotesComponent = __decorate([
      Component({
        selector: "app-credit-notes",
        imports: [RouterModule],
        template: credit_notes_component_default,
        styles: [credit_notes_component_default2]
      })
    ], CreditNotesComponent);
  }
});

// src/app/features/invantory-sales/credit-notes/credit-notes.component.spec.ts
var require_credit_notes_component_spec = __commonJS({
  "src/app/features/invantory-sales/credit-notes/credit-notes.component.spec.ts"(exports) {
    init_testing();
    init_credit_notes_component3();
    describe("CreditNotesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CreditNotesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CreditNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_credit_notes_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-credit-notes-credit-notes.component.spec.js.map
