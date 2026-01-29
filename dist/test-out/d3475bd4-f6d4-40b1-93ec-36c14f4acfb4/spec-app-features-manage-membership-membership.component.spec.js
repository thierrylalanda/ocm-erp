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

// angular:jit:template:src/app/features/manage/membership/membership.component.html
var membership_component_default;
var init_membership_component = __esm({
  "angular:jit:template:src/app/features/manage/membership/membership.component.html"() {
    membership_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/manage/membership/membership.component.scss
var membership_component_default2;
var init_membership_component2 = __esm({
  "angular:jit:style:src/app/features/manage/membership/membership.component.scss"() {
    membership_component_default2 = "/* src/app/features/manage/membership/membership.component.scss */\n/*# sourceMappingURL=membership.component.css.map */\n";
  }
});

// src/app/features/manage/membership/membership.component.ts
var MembershipComponent;
var init_membership_component3 = __esm({
  "src/app/features/manage/membership/membership.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_membership_component();
    init_membership_component2();
    init_core();
    init_router();
    MembershipComponent = class MembershipComponent2 {
    };
    MembershipComponent = __decorate([
      Component({
        selector: "app-membership",
        imports: [RouterModule],
        template: membership_component_default,
        styles: [membership_component_default2]
      })
    ], MembershipComponent);
  }
});

// src/app/features/manage/membership/membership.component.spec.ts
var require_membership_component_spec = __commonJS({
  "src/app/features/manage/membership/membership.component.spec.ts"(exports) {
    init_testing();
    init_membership_component3();
    describe("MembershipComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [MembershipComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(MembershipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_membership_component_spec();
//# sourceMappingURL=spec-app-features-manage-membership-membership.component.spec.js.map
