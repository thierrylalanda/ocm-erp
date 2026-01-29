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

// angular:jit:template:src/app/features/content/location/location.component.html
var location_component_default;
var init_location_component = __esm({
  "angular:jit:template:src/app/features/content/location/location.component.html"() {
    location_component_default = "<router-outlet/>";
  }
});

// angular:jit:style:src/app/features/content/location/location.component.scss
var location_component_default2;
var init_location_component2 = __esm({
  "angular:jit:style:src/app/features/content/location/location.component.scss"() {
    location_component_default2 = "/* src/app/features/content/location/location.component.scss */\n/*# sourceMappingURL=location.component.css.map */\n";
  }
});

// src/app/features/content/location/location.component.ts
var LocationComponent;
var init_location_component3 = __esm({
  "src/app/features/content/location/location.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_location_component();
    init_location_component2();
    init_core();
    init_router();
    LocationComponent = class LocationComponent2 {
    };
    LocationComponent = __decorate([
      Component({
        selector: "app-location",
        imports: [RouterModule],
        template: location_component_default,
        styles: [location_component_default2]
      })
    ], LocationComponent);
  }
});

// src/app/features/content/location/location.component.spec.ts
var require_location_component_spec = __commonJS({
  "src/app/features/content/location/location.component.spec.ts"(exports) {
    init_testing();
    init_location_component3();
    describe("LocationComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [LocationComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LocationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_location_component_spec();
//# sourceMappingURL=spec-app-features-content-location-location.component.spec.js.map
