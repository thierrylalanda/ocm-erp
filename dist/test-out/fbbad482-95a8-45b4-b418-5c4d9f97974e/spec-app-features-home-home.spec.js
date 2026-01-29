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

// angular:jit:template:src/app/features/home/home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src/app/features/home/home.html"() {
    home_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/home/home.scss
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src/app/features/home/home.scss"() {
    home_default2 = "/* src/app/features/home/home.scss */\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/features/home/home.ts
var Home;
var init_home3 = __esm({
  "src/app/features/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_router();
    Home = class Home2 {
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        imports: [RouterModule],
        template: home_default,
        styles: [home_default2]
      })
    ], Home);
  }
});

// src/app/features/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/features/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-app-features-home-home.spec.js.map
