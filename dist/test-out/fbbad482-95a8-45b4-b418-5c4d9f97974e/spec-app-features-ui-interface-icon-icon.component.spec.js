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

// angular:jit:template:src/app/features/ui-interface/icon/icon.component.html
var icon_component_default;
var init_icon_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/icon/icon.component.html"() {
    icon_component_default = "<router-outlet></router-outlet>\n";
  }
});

// angular:jit:style:src/app/features/ui-interface/icon/icon.component.scss
var icon_component_default2;
var init_icon_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/icon/icon.component.scss"() {
    icon_component_default2 = "/* src/app/features/ui-interface/icon/icon.component.scss */\n/*# sourceMappingURL=icon.component.css.map */\n";
  }
});

// src/app/features/ui-interface/icon/icon.component.ts
var IconComponent;
var init_icon_component3 = __esm({
  "src/app/features/ui-interface/icon/icon.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_icon_component();
    init_icon_component2();
    init_core();
    init_router();
    IconComponent = class IconComponent2 {
    };
    IconComponent = __decorate([
      Component({
        selector: "app-icon",
        template: icon_component_default,
        imports: [RouterModule],
        styles: [icon_component_default2]
      })
    ], IconComponent);
  }
});

// src/app/features/ui-interface/icon/icon.component.spec.ts
var require_icon_component_spec = __commonJS({
  "src/app/features/ui-interface/icon/icon.component.spec.ts"(exports) {
    init_testing();
    init_icon_component3();
    describe("IconComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [IconComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_icon_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-icon-icon.component.spec.js.map
