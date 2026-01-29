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

// angular:jit:template:src/app/features/application/calls/calls.component.html
var calls_component_default;
var init_calls_component = __esm({
  "angular:jit:template:src/app/features/application/calls/calls.component.html"() {
    calls_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/application/calls/calls.component.scss
var calls_component_default2;
var init_calls_component2 = __esm({
  "angular:jit:style:src/app/features/application/calls/calls.component.scss"() {
    calls_component_default2 = "/* src/app/features/application/calls/calls.component.scss */\n/*# sourceMappingURL=calls.component.css.map */\n";
  }
});

// src/app/features/application/calls/calls.component.ts
var CallsComponent;
var init_calls_component3 = __esm({
  "src/app/features/application/calls/calls.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_calls_component();
    init_calls_component2();
    init_core();
    init_router();
    CallsComponent = class CallsComponent2 {
    };
    CallsComponent = __decorate([
      Component({
        selector: "app-calls",
        template: calls_component_default,
        imports: [RouterModule],
        styles: [calls_component_default2]
      })
    ], CallsComponent);
  }
});

// src/app/features/application/calls/calls.component.spec.ts
var require_calls_component_spec = __commonJS({
  "src/app/features/application/calls/calls.component.spec.ts"(exports) {
    init_testing();
    init_calls_component3();
    describe("CallsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CallsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CallsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_calls_component_spec();
//# sourceMappingURL=spec-app-features-application-calls-calls.component.spec.js.map
