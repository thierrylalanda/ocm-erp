import {
  CustomPaginationComponent,
  init_custom_pagination_component
} from "./chunk-LDAP2XKN.js";
import "./chunk-MK4VFZLN.js";
import "./chunk-2RBILSOV.js";
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

// src/app/shared/custom-pagination/custom-pagination.component.spec.ts
var require_custom_pagination_component_spec = __commonJS({
  "src/app/shared/custom-pagination/custom-pagination.component.spec.ts"(exports) {
    init_testing();
    init_custom_pagination_component();
    describe("CustomPaginationComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CustomPaginationComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CustomPaginationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_custom_pagination_component_spec();
//# sourceMappingURL=spec-app-shared-custom-pagination-custom-pagination.component.spec.js.map
