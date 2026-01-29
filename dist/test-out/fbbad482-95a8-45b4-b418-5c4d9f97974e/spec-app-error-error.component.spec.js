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

// angular:jit:template:src/app/error/error.component.html
var error_component_default;
var init_error_component = __esm({
  "angular:jit:template:src/app/error/error.component.html"() {
    error_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/error/error.component.scss
var error_component_default2;
var init_error_component2 = __esm({
  "angular:jit:style:src/app/error/error.component.scss"() {
    error_component_default2 = "/* src/app/error/error.component.scss */\n/*# sourceMappingURL=error.component.css.map */\n";
  }
});

// src/app/error/error.component.ts
var ErrorComponent;
var init_error_component3 = __esm({
  "src/app/error/error.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_error_component();
    init_error_component2();
    init_core();
    init_router();
    ErrorComponent = class ErrorComponent2 {
    };
    ErrorComponent = __decorate([
      Component({
        selector: "app-error",
        imports: [RouterModule],
        template: error_component_default,
        styles: [error_component_default2]
      })
    ], ErrorComponent);
  }
});

// src/app/error/error.component.spec.ts
var require_error_component_spec = __commonJS({
  "src/app/error/error.component.spec.ts"(exports) {
    init_testing();
    init_error_component3();
    describe("ErrorComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ErrorComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_error_component_spec();
//# sourceMappingURL=spec-app-error-error.component.spec.js.map
