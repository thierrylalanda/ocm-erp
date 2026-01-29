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

// angular:jit:template:src/app/features/application/application.component.html
var application_component_default;
var init_application_component = __esm({
  "angular:jit:template:src/app/features/application/application.component.html"() {
    application_component_default = "\n  <router-outlet></router-outlet>\n";
  }
});

// angular:jit:style:src/app/features/application/application.component.scss
var application_component_default2;
var init_application_component2 = __esm({
  "angular:jit:style:src/app/features/application/application.component.scss"() {
    application_component_default2 = "/* src/app/features/application/application.component.scss */\n/*# sourceMappingURL=application.component.css.map */\n";
  }
});

// src/app/features/application/application.component.ts
var ApplicationComponent;
var init_application_component3 = __esm({
  "src/app/features/application/application.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_application_component();
    init_application_component2();
    init_core();
    init_router();
    ApplicationComponent = class ApplicationComponent2 {
    };
    ApplicationComponent = __decorate([
      Component({
        selector: "app-application",
        template: application_component_default,
        imports: [RouterModule],
        styles: [application_component_default2]
      })
    ], ApplicationComponent);
  }
});

// src/app/features/application/application.component.spec.ts
var require_application_component_spec = __commonJS({
  "src/app/features/application/application.component.spec.ts"(exports) {
    init_testing();
    init_application_component3();
    describe("ApplicationComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ApplicationComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ApplicationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_application_component_spec();
//# sourceMappingURL=spec-app-features-application-application.component.spec.js.map
