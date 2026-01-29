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

// angular:jit:template:src/app/features/purchases/debit-notes/debit-notes.component.html
var debit_notes_component_default;
var init_debit_notes_component = __esm({
  "angular:jit:template:src/app/features/purchases/debit-notes/debit-notes.component.html"() {
    debit_notes_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/purchases/debit-notes/debit-notes.component.scss
var debit_notes_component_default2;
var init_debit_notes_component2 = __esm({
  "angular:jit:style:src/app/features/purchases/debit-notes/debit-notes.component.scss"() {
    debit_notes_component_default2 = "/* src/app/features/purchases/debit-notes/debit-notes.component.scss */\n/*# sourceMappingURL=debit-notes.component.css.map */\n";
  }
});

// src/app/features/purchases/debit-notes/debit-notes.component.ts
var DebitNotesComponent;
var init_debit_notes_component3 = __esm({
  "src/app/features/purchases/debit-notes/debit-notes.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_debit_notes_component();
    init_debit_notes_component2();
    init_core();
    init_router();
    DebitNotesComponent = class DebitNotesComponent2 {
    };
    DebitNotesComponent = __decorate([
      Component({
        selector: "app-debit-notes",
        imports: [RouterModule],
        template: debit_notes_component_default,
        styles: [debit_notes_component_default2]
      })
    ], DebitNotesComponent);
  }
});

// src/app/features/purchases/debit-notes/debit-notes.component.spec.ts
var require_debit_notes_component_spec = __commonJS({
  "src/app/features/purchases/debit-notes/debit-notes.component.spec.ts"(exports) {
    init_testing();
    init_debit_notes_component3();
    describe("DebitNotesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [DebitNotesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DebitNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_debit_notes_component_spec();
//# sourceMappingURL=spec-app-features-purchases-debit-notes-debit-notes.component.spec.js.map
