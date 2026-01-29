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

// angular:jit:template:src/app/features/ui-interface/tables/tables.component.html
var tables_component_default;
var init_tables_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/tables/tables.component.html"() {
    tables_component_default = "\n  <router-outlet></router-outlet>\n";
  }
});

// angular:jit:style:src/app/features/ui-interface/tables/tables.component.scss
var tables_component_default2;
var init_tables_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/tables/tables.component.scss"() {
    tables_component_default2 = "/* src/app/features/ui-interface/tables/tables.component.scss */\n/*# sourceMappingURL=tables.component.css.map */\n";
  }
});

// src/app/features/ui-interface/tables/tables.component.ts
var TablesComponent;
var init_tables_component3 = __esm({
  "src/app/features/ui-interface/tables/tables.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_tables_component();
    init_tables_component2();
    init_core();
    init_router();
    TablesComponent = class TablesComponent2 {
    };
    TablesComponent = __decorate([
      Component({
        selector: "app-tables",
        template: tables_component_default,
        imports: [RouterModule],
        styles: [tables_component_default2]
      })
    ], TablesComponent);
  }
});

// src/app/features/ui-interface/tables/tables.component.spec.ts
var require_tables_component_spec = __commonJS({
  "src/app/features/ui-interface/tables/tables.component.spec.ts"(exports) {
    init_testing();
    init_tables_component3();
    describe("TablesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [TablesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TablesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_tables_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-tables-tables.component.spec.js.map
