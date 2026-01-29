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

// angular:jit:template:src/app/features/manage/manage-users/manage-users.component.html
var manage_users_component_default;
var init_manage_users_component = __esm({
  "angular:jit:template:src/app/features/manage/manage-users/manage-users.component.html"() {
    manage_users_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/manage/manage-users/manage-users.component.scss
var manage_users_component_default2;
var init_manage_users_component2 = __esm({
  "angular:jit:style:src/app/features/manage/manage-users/manage-users.component.scss"() {
    manage_users_component_default2 = "/* src/app/features/manage/manage-users/manage-users.component.scss */\n/*# sourceMappingURL=manage-users.component.css.map */\n";
  }
});

// src/app/features/manage/manage-users/manage-users.component.ts
var ManageUsersComponent;
var init_manage_users_component3 = __esm({
  "src/app/features/manage/manage-users/manage-users.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_manage_users_component();
    init_manage_users_component2();
    init_core();
    init_router();
    ManageUsersComponent = class ManageUsersComponent2 {
    };
    ManageUsersComponent = __decorate([
      Component({
        selector: "app-manage-users",
        imports: [RouterModule],
        template: manage_users_component_default,
        styles: [manage_users_component_default2]
      })
    ], ManageUsersComponent);
  }
});

// src/app/features/manage/manage-users/manage-users.component.spec.ts
var require_manage_users_component_spec = __commonJS({
  "src/app/features/manage/manage-users/manage-users.component.spec.ts"(exports) {
    init_testing();
    init_manage_users_component3();
    describe("ManageUsersComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ManageUsersComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ManageUsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_manage_users_component_spec();
//# sourceMappingURL=spec-app-features-manage-manage-users-manage-users.component.spec.js.map
