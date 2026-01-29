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

// angular:jit:template:src/app/auth/auth.component.html
var auth_component_default;
var init_auth_component = __esm({
  "angular:jit:template:src/app/auth/auth.component.html"() {
    auth_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/auth/auth.component.scss
var auth_component_default2;
var init_auth_component2 = __esm({
  "angular:jit:style:src/app/auth/auth.component.scss"() {
    auth_component_default2 = "/* src/app/auth/auth.component.scss */\n/*# sourceMappingURL=auth.component.css.map */\n";
  }
});

// src/app/auth/auth.component.ts
var AuthComponent;
var init_auth_component3 = __esm({
  "src/app/auth/auth.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_auth_component();
    init_auth_component2();
    init_core();
    init_router();
    AuthComponent = class AuthComponent2 {
    };
    AuthComponent = __decorate([
      Component({
        selector: "app-auth",
        imports: [RouterModule],
        template: auth_component_default,
        styles: [auth_component_default2]
      })
    ], AuthComponent);
  }
});

// src/app/auth/auth.component.spec.ts
var require_auth_component_spec = __commonJS({
  "src/app/auth/auth.component.spec.ts"(exports) {
    init_testing();
    init_auth_component3();
    describe("AuthComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AuthComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_auth_component_spec();
//# sourceMappingURL=spec-app-auth-auth.component.spec.js.map
