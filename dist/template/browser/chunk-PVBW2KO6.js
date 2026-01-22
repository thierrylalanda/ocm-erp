import {
  GetUsersUseCaseImpl,
  HttpUserRepository
} from "./chunk-BPLKYSYX.js";
import {
  CREATE_USER_USE_CASE,
  CreateUserUseCaseImpl
} from "./chunk-X6AXYXQL.js";
import {
  GET_USERS_USE_CASE,
  USER_REPOSITORY
} from "./chunk-7E3NPM4I.js";
import "./chunk-7SCMAJTM.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/manage-users/manage-users.component.ts
var ManageUsersComponent = class _ManageUsersComponent {
  static \u0275fac = function ManageUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageUsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageUsersComponent, selectors: [["app-manage-user"]], features: [\u0275\u0275ProvidersFeature([
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
  ])], decls: 1, vars: 0, template: function ManageUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageUsersComponent, [{
    type: Component,
    args: [{ selector: "app-manage-user", imports: [RouterModule], providers: [
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
    ], template: "<router-outlet></router-outlet>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageUsersComponent, { className: "ManageUsersComponent", filePath: "src/app/modules/manage-users/manage-users.component.ts", lineNumber: 35 });
})();
export {
  ManageUsersComponent
};
//# sourceMappingURL=chunk-PVBW2KO6.js.map
