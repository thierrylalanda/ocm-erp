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

// angular:jit:template:src/app/features/pages/starter/starter.component.html
var starter_component_default;
var init_starter_component = __esm({
  "angular:jit:template:src/app/features/pages/starter/starter.component.html"() {
    starter_component_default = '<div class="content-two">\n    <h6 class="mb-0">Starter Page</h6>\n  </div>';
  }
});

// angular:jit:style:src/app/features/pages/starter/starter.component.scss
var starter_component_default2;
var init_starter_component2 = __esm({
  "angular:jit:style:src/app/features/pages/starter/starter.component.scss"() {
    starter_component_default2 = "/* src/app/features/pages/starter/starter.component.scss */\n/*# sourceMappingURL=starter.component.css.map */\n";
  }
});

// src/app/features/pages/starter/starter.component.ts
var StarterComponent;
var init_starter_component3 = __esm({
  "src/app/features/pages/starter/starter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_starter_component();
    init_starter_component2();
    init_core();
    StarterComponent = class StarterComponent2 {
    };
    StarterComponent = __decorate([
      Component({
        selector: "app-starter",
        imports: [],
        template: starter_component_default,
        styles: [starter_component_default2]
      })
    ], StarterComponent);
  }
});

// src/app/features/pages/starter/starter.component.spec.ts
var require_starter_component_spec = __commonJS({
  "src/app/features/pages/starter/starter.component.spec.ts"(exports) {
    init_testing();
    init_starter_component3();
    describe("StarterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [StarterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(StarterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_starter_component_spec();
//# sourceMappingURL=spec-app-features-pages-starter-starter.component.spec.js.map
