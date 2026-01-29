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

// angular:jit:template:src/app/features/ui-interface/maps/maps.component.html
var maps_component_default;
var init_maps_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/maps/maps.component.html"() {
    maps_component_default = "<router-outlet></router-outlet>\n\n";
  }
});

// angular:jit:style:src/app/features/ui-interface/maps/maps.component.scss
var maps_component_default2;
var init_maps_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/maps/maps.component.scss"() {
    maps_component_default2 = "/* src/app/features/ui-interface/maps/maps.component.scss */\n/*# sourceMappingURL=maps.component.css.map */\n";
  }
});

// src/app/features/ui-interface/maps/maps.component.ts
var MapsComponent;
var init_maps_component3 = __esm({
  "src/app/features/ui-interface/maps/maps.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_maps_component();
    init_maps_component2();
    init_core();
    init_router();
    MapsComponent = class MapsComponent2 {
    };
    MapsComponent = __decorate([
      Component({
        selector: "app-maps",
        template: maps_component_default,
        imports: [RouterModule],
        styles: [maps_component_default2]
      })
    ], MapsComponent);
  }
});

// src/app/features/ui-interface/maps/maps.component.spec.ts
var require_maps_component_spec = __commonJS({
  "src/app/features/ui-interface/maps/maps.component.spec.ts"(exports) {
    init_testing();
    init_maps_component3();
    describe("MapsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [MapsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(MapsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_maps_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-maps-maps.component.spec.js.map
