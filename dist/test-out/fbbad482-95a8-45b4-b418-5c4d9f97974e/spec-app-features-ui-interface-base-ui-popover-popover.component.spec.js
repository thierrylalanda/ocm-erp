import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
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

// angular:jit:template:src/app/features/ui-interface/base-ui/popover/popover.component.html
var popover_component_default;
var init_popover_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/base-ui/popover/popover.component.html"() {
    popover_component_default = "";
  }
});

// angular:jit:style:src/app/features/ui-interface/base-ui/popover/popover.component.scss
var popover_component_default2;
var init_popover_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/base-ui/popover/popover.component.scss"() {
    popover_component_default2 = "/* src/app/features/ui-interface/base-ui/popover/popover.component.scss */\n.popover-list .example-popover {\n  margin-left: 2px;\n}\n.popover-list .btn {\n  position: relative;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=popover.component.css.map */\n";
  }
});

// src/app/features/ui-interface/base-ui/popover/popover.component.ts
var PopoverComponent;
var init_popover_component3 = __esm({
  "src/app/features/ui-interface/base-ui/popover/popover.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_popover_component();
    init_popover_component2();
    init_core();
    init_common();
    PopoverComponent = class PopoverComponent2 {
    };
    PopoverComponent = __decorate([
      Component({
        selector: "app-popover",
        template: popover_component_default,
        imports: [CommonModule],
        styles: [popover_component_default2]
      })
    ], PopoverComponent);
  }
});

// src/app/features/ui-interface/base-ui/popover/popover.component.spec.ts
var require_popover_component_spec = __commonJS({
  "src/app/features/ui-interface/base-ui/popover/popover.component.spec.ts"(exports) {
    init_testing();
    init_popover_component3();
    describe("PopoverComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PopoverComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PopoverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_popover_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-base-ui-popover-popover.component.spec.js.map
