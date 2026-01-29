import {
  LayoutComponent,
  init_layout_component
} from "./chunk-YMRZW2MV.js";
import "./chunk-HBVQWAFR.js";
import "./chunk-2RBILSOV.js";
import "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS
} from "./chunk-FWMZPJRE.js";

// src/app/features/common/layout/layout.component.spec.ts
var require_layout_component_spec = __commonJS({
  "src/app/features/common/layout/layout.component.spec.ts"(exports) {
    init_testing();
    init_layout_component();
    describe("LayoutComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [LayoutComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_layout_component_spec();
//# sourceMappingURL=spec-app-features-common-layout-layout.component.spec.js.map
