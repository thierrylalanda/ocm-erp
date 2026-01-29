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

// angular:jit:template:src/app/features/ui-interface/base-ui/base-ui.component.html
var base_ui_component_default;
var init_base_ui_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/base-ui/base-ui.component.html"() {
    base_ui_component_default = "\n  <router-outlet></router-outlet>\n";
  }
});

// angular:jit:style:src/app/features/ui-interface/base-ui/base-ui.component.scss
var base_ui_component_default2;
var init_base_ui_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/base-ui/base-ui.component.scss"() {
    base_ui_component_default2 = "/* src/app/features/ui-interface/base-ui/base-ui.component.scss */\n/*# sourceMappingURL=base-ui.component.css.map */\n";
  }
});

// src/app/features/ui-interface/base-ui/base-ui.component.ts
var BaseUIComponent;
var init_base_ui_component3 = __esm({
  "src/app/features/ui-interface/base-ui/base-ui.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_base_ui_component();
    init_base_ui_component2();
    init_core();
    init_router();
    BaseUIComponent = class BaseUIComponent2 {
      page = "";
      base = "";
      layoutPosition = "";
    };
    BaseUIComponent = __decorate([
      Component({
        selector: "app-base-ui",
        template: base_ui_component_default,
        imports: [RouterModule],
        styles: [base_ui_component_default2]
      })
    ], BaseUIComponent);
  }
});

// src/app/features/ui-interface/base-ui/base-ui.component.spec.ts
var require_base_ui_component_spec = __commonJS({
  "src/app/features/ui-interface/base-ui/base-ui.component.spec.ts"(exports) {
    init_testing();
    init_base_ui_component3();
    describe("BaseUIComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [BaseUIComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BaseUIComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_base_ui_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-base-ui-base-ui.component.spec.js.map
