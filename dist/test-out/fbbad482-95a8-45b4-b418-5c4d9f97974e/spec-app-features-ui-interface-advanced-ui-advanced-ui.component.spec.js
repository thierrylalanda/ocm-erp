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

// angular:jit:template:src/app/features/ui-interface/advanced-ui/advanced-ui.component.html
var advanced_ui_component_default;
var init_advanced_ui_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/advanced-ui.component.html"() {
    advanced_ui_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/advanced-ui.component.scss
var advanced_ui_component_default2;
var init_advanced_ui_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/advanced-ui.component.scss"() {
    advanced_ui_component_default2 = "/* src/app/features/ui-interface/advanced-ui/advanced-ui.component.scss */\n/*# sourceMappingURL=advanced-ui.component.css.map */\n";
  }
});

// src/app/features/ui-interface/advanced-ui/advanced-ui.component.ts
var AdvancedUiComponent;
var init_advanced_ui_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/advanced-ui.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_advanced_ui_component();
    init_advanced_ui_component2();
    init_core();
    init_router();
    AdvancedUiComponent = class AdvancedUiComponent2 {
    };
    AdvancedUiComponent = __decorate([
      Component({
        selector: "app-advanced-ui",
        template: advanced_ui_component_default,
        imports: [RouterModule],
        styles: [advanced_ui_component_default2]
      })
    ], AdvancedUiComponent);
  }
});

// src/app/features/ui-interface/advanced-ui/advanced-ui.component.spec.ts
var require_advanced_ui_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/advanced-ui.component.spec.ts"(exports) {
    init_testing();
    init_advanced_ui_component3();
    describe("AdvancedUiComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AdvancedUiComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AdvancedUiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_advanced_ui_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-advanced-ui.component.spec.js.map
