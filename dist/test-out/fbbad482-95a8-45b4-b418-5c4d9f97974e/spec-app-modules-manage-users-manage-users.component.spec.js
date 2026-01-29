import {
  CREATE_USER_USE_CASE,
  CreateUserUseCaseImpl,
  GET_USERS_USE_CASE,
  GetUsersUseCaseImpl,
  HttpUserRepository,
  init_create_user_use_case,
  init_create_user_use_case_token,
  init_get_users_use_case,
  init_get_users_use_case_token,
  init_http_user_repository
} from "./chunk-WFCRFQRJ.js";
import {
  USER_REPOSITORY,
  init_user_repository
} from "./chunk-KEZTFTN3.js";
import "./chunk-LUFAATTA.js";
import "./chunk-MU4ENZR6.js";
import "./chunk-KZXJWDFC.js";
import "./chunk-DJVIHOKC.js";
import "./chunk-4XZF5GTU.js";
import "./chunk-PRPNIB7R.js";
import "./chunk-N3H5GIVS.js";
import "./chunk-THVLRUNZ.js";
import "./chunk-Q2A5OOYR.js";
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

// angular:jit:template:src/app/modules/manage-users/manage-users.component.html
var manage_users_component_default;
var init_manage_users_component = __esm({
  "angular:jit:template:src/app/modules/manage-users/manage-users.component.html"() {
    manage_users_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/modules/manage-users/manage-users.component.scss
var manage_users_component_default2;
var init_manage_users_component2 = __esm({
  "angular:jit:style:src/app/modules/manage-users/manage-users.component.scss"() {
    manage_users_component_default2 = "/* src/app/modules/manage-users/manage-users.component.scss */\n/*# sourceMappingURL=manage-users.component.css.map */\n";
  }
});

// src/app/modules/manage-users/manage-users.component.ts
var ManageUsersComponent;
var init_manage_users_component3 = __esm({
  "src/app/modules/manage-users/manage-users.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_manage_users_component();
    init_manage_users_component2();
    init_core();
    init_router();
    init_user_repository();
    init_create_user_use_case_token();
    init_get_users_use_case_token();
    init_http_user_repository();
    init_create_user_use_case();
    init_get_users_use_case();
    ManageUsersComponent = class ManageUsersComponent2 {
    };
    ManageUsersComponent = __decorate([
      Component({
        selector: "app-manage-user",
        imports: [RouterModule],
        template: manage_users_component_default,
        providers: [
          {
            provide: USER_REPOSITORY,
            useClass: HttpUserRepository
          },
          {
            provide: CREATE_USER_USE_CASE,
            useClass: CreateUserUseCaseImpl
          },
          {
            provide: GET_USERS_USE_CASE,
            useClass: GetUsersUseCaseImpl
          },
          // Provider pour localStorage
          {
            provide: "LOCAL_STORAGE",
            useValue: localStorage
          }
        ],
        styles: [manage_users_component_default2]
      })
    ], ManageUsersComponent);
  }
});

// src/app/modules/manage-users/manage-users.component.spec.ts
var require_manage_users_component_spec = __commonJS({
  "src/app/modules/manage-users/manage-users.component.spec.ts"(exports) {
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
//# sourceMappingURL=spec-app-modules-manage-users-manage-users.component.spec.js.map
