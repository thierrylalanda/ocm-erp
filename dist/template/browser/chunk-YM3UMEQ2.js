import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  TranslatePipe
} from "./chunk-42UJGEGX.js";
import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  KeyValuePipe,
  NgForOf,
  NgIf
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  Injectable,
  InjectionToken,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/manage-users/application/dto/permission.dto.ts
var PermissionModule;
(function(PermissionModule2) {
  PermissionModule2["CAISSE"] = "CAISSE";
  PermissionModule2["STOCK"] = "STOCK";
  PermissionModule2["PRODUCTION"] = "PRODUCTION";
  PermissionModule2["COMPTABILITE"] = "COMPTABILITE";
  PermissionModule2["APPROVISIONNEMENT"] = "APPROVISIONNEMENT";
})(PermissionModule || (PermissionModule = {}));
var PermissionAction;
(function(PermissionAction2) {
  PermissionAction2["CREATE"] = "CREATE";
  PermissionAction2["READ"] = "READ";
  PermissionAction2["UPDATE"] = "UPDATE";
  PermissionAction2["DELETE"] = "DELETE";
  PermissionAction2["EXPORT"] = "EXPORT";
  PermissionAction2["IMPORT"] = "IMPORT";
  PermissionAction2["PRINT"] = "PRINT";
})(PermissionAction || (PermissionAction = {}));

// src/app/modules/manage-users/application/use-cases/get-permissions.use-case.token.ts
var GET_PERMISSIONS_USE_CASE = new InjectionToken("GET_PERMISSIONS_USE_CASE");

// src/app/modules/manage-users/domain/repositories/permission.repository.token.ts
var PERMISSION_REPOSITORY = new InjectionToken("PERMISSION_REPOSITORY");

// src/app/modules/manage-users/application/use-cases/get-permissions.use-case.ts
var GetPermissionsUseCaseImpl = class _GetPermissionsUseCaseImpl {
  permissionRepository = inject(PERMISSION_REPOSITORY);
  execute(page = 0, size = 100) {
    return this.permissionRepository.getAllPermissions(page, size);
  }
  static \u0275fac = function GetPermissionsUseCaseImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetPermissionsUseCaseImpl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GetPermissionsUseCaseImpl, factory: _GetPermissionsUseCaseImpl.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetPermissionsUseCaseImpl, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/manage-users/infrastructure/repositories/http-permission.repository.ts
var HttpPermissionRepository = class _HttpPermissionRepository {
  http = inject(HttpClient);
  baseUrl = `${environment.api}security`;
  getAllPermissions(page = 0, size = 100) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.baseUrl}/permissions`, { params });
  }
  getRolePermissions(roleId) {
    return this.http.get(`${this.baseUrl}/roles/${roleId}/permissions`);
  }
  assignPermissionToRole(roleId, permission) {
    return this.http.post(`${this.baseUrl}/roles/${roleId}/permissions`, permission);
  }
  removePermissionFromRole(roleId, permissionId) {
    return this.http.delete(`${this.baseUrl}/roles/${roleId}/permissions/${permissionId}`);
  }
  assignPermissionsBatch(roleId, permissionIds) {
    const batchData = { permissionIds };
    return this.http.post(`${this.baseUrl}/roles/${roleId}/permissions/batch`, batchData);
  }
  static \u0275fac = function HttpPermissionRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpPermissionRepository)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HttpPermissionRepository, factory: _HttpPermissionRepository.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpPermissionRepository, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/manage-users/presentation/pages/permission/permission.component.ts
function PermissionComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function PermissionComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissSaveSuccess());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "permissions.permissionManagement.saveSuccess"), " ");
  }
}
function PermissionComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275listener("click", function PermissionComponent_div_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissSaveError());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveError, " ");
  }
}
function PermissionComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "permissions.permissionManagement.loading"));
  }
}
function PermissionComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 26);
    \u0275\u0275listener("click", function PermissionComponent_div_24_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "permissions.permissionManagement.retry"));
  }
}
function PermissionComponent_div_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
}
function PermissionComponent_div_25_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function PermissionComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function PermissionComponent_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275template(2, PermissionComponent_div_25_span_2_Template, 1, 0, "span", 29)(3, PermissionComponent_div_25_i_3_Template, 1, 0, "i", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.hasChanges() || ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? \u0275\u0275pipeBind1(5, 4, "permissions.permissionManagement.saving") : \u0275\u0275pipeBind1(6, 6, "permissions.permissionManagement.saveButton"), " ");
  }
}
function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_li_1_ng_container_2_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 59);
  }
  if (rf & 2) {
    const permission_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", permission_r12.permDescription);
    \u0275\u0275attribute("data-bs-toggle", "popover")("data-bs-trigger", "hover focus")("data-bs-placement", "top")("data-bs-content", permission_r12.permDescription);
  }
}
function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 54)(2, "div", 55)(3, "input", 56);
    \u0275\u0275listener("change", function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_li_1_ng_container_2_Template_input_change_3_listener($event) {
      const permission_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.onPermissionChange(permission_r12.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_li_1_ng_container_2_i_6_Template, 1, 5, "i", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const permission_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "permission-" + permission_r12.id)("checked", ctx_r1.isPermissionAssigned(permission_r12.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "permission-" + permission_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", permission_r12.permNom || permission_r12.permCode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", permission_r12.permDescription);
  }
}
function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 37)(1, "ul", 53);
    \u0275\u0275template(2, PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_li_1_ng_container_2_Template, 7, 5, "ng-container", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const actionEntry_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", actionEntry_r13.value);
  }
}
function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_li_1_Template, 3, 1, "li", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const actionEntry_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", actionEntry_r13.value.length > 0);
  }
}
function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 43);
    \u0275\u0275template(1, PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_ng_container_1_Template, 2, 1, "ng-container", 35);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subModuleEntry_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, subModuleEntry_r10.value));
  }
}
function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 37)(2, "div", 45)(3, "div", 46);
    \u0275\u0275listener("click", function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_Template_div_click_3_listener() {
      const subModuleIndex_r9 = \u0275\u0275restoreView(_r8).index;
      const moduleIndex_r7 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSubModuleExpansion(moduleIndex_r7, subModuleIndex_r9));
    });
    \u0275\u0275element(4, "i", 47);
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 49)(8, "input", 50);
    \u0275\u0275listener("change", function PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_Template_input_change_8_listener($event) {
      const subModuleEntry_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAllPermissionsForSubModule(subModuleEntry_r10.value, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 51);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_ul_12_Template, 3, 3, "ul", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subModuleEntry_r10 = ctx.$implicit;
    const subModuleIndex_r9 = ctx.index;
    const moduleIndex_r7 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("rotate-90", ctx_r1.isSubModuleExpanded(moduleIndex_r7, subModuleIndex_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subModuleEntry_r10.key);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isAllPermissionsAssignedForSubModule(subModuleEntry_r10.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "permissions.permissionManagement.allowAll"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isSubModuleExpanded(moduleIndex_r7, subModuleIndex_r9));
  }
}
function PermissionComponent_div_26_ng_container_2_ul_9_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "p", 62);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "permissions.permissionManagement.noModulePermissions"));
  }
}
function PermissionComponent_div_26_ng_container_2_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 43);
    \u0275\u0275template(1, PermissionComponent_div_26_ng_container_2_ul_9_ng_container_1_Template, 13, 8, "ng-container", 35);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275template(3, PermissionComponent_div_26_ng_container_2_ul_9_li_3_Template, 5, 3, "li", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 2, ctx_r1.getPermissionsBySubModule(module_r14)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getPermissionsBySubModule(module_r14).size === 0);
  }
}
function PermissionComponent_div_26_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 37)(2, "div", 38);
    \u0275\u0275listener("click", function PermissionComponent_div_26_ng_container_2_Template_div_click_2_listener() {
      const moduleIndex_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleModuleExpansion(moduleIndex_r7));
    });
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, PermissionComponent_div_26_ng_container_2_ul_9_Template, 4, 4, "ul", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const module_r14 = ctx.$implicit;
    const moduleIndex_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("rotate-90", ctx_r1.isModuleExpanded(moduleIndex_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, ctx_r1.getModuleDisplayName(module_r14)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPermissionsBySubModule(module_r14).size);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isModuleExpanded(moduleIndex_r7));
  }
}
function PermissionComponent_div_26_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "h5", 65);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 66);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "permissions.permissionManagement.noPermissions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "permissions.permissionManagement.noPermissionsMessage"));
  }
}
function PermissionComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "ul", 34);
    \u0275\u0275template(2, PermissionComponent_div_26_ng_container_2_Template, 10, 7, "ng-container", 35)(3, PermissionComponent_div_26_li_3_Template, 8, 6, "li", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getAvailableModules());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getAvailableModules().length === 0 && !ctx_r1.loading);
  }
}
var PermissionComponent = class _PermissionComponent {
  route = inject(ActivatedRoute);
  getPermissionsUseCase = inject(GET_PERMISSIONS_USE_CASE);
  permissionRepository = inject(PERMISSION_REPOSITORY);
  // Données du rôle
  roleId = null;
  roleCode = "";
  roleNom = "";
  // Données des permissions
  allPermissions = [];
  rolePermissions = /* @__PURE__ */ new Set();
  // IDs des permissions du rôle (état initial)
  selectedPermissions = /* @__PURE__ */ new Set();
  // IDs des permissions sélectionnées (état actuel)
  loading = false;
  saving = false;
  error = null;
  saveSuccess = false;
  saveError = null;
  // Groupes de permissions par module
  groupedPermissions = /* @__PURE__ */ new Map();
  // Routes
  routes = routes;
  // Exposer PermissionAction au template
  PermissionAction = PermissionAction;
  // Gestion de l'expansion des modules et sous-modules
  expandedModules = /* @__PURE__ */ new Set();
  expandedSubModules = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.loadRoleId();
    this.loadData();
  }
  /**
   * Charge l'ID du rôle depuis les paramètres de route
   */
  loadRoleId() {
    this.route.paramMap.subscribe((params) => {
      const roleIdParam = params.get("roleId");
      this.roleId = roleIdParam ? parseInt(roleIdParam, 10) : null;
    });
  }
  /**
   * Charge toutes les données nécessaires
   */
  loadData() {
    if (!this.roleId) {
      this.error = "ID du r\xF4le non sp\xE9cifi\xE9";
      return;
    }
    this.loading = true;
    this.error = null;
    this.permissionRepository.getRolePermissions(this.roleId).subscribe({
      next: (rolePermissions) => {
        this.roleCode = rolePermissions.roleCode;
        this.roleNom = rolePermissions.roleNom;
        this.rolePermissions = new Set(rolePermissions.permissions.map((p) => p.permissionId));
        this.selectedPermissions = new Set(this.rolePermissions);
        this.loadAllPermissions();
      },
      error: (error) => {
        this.error = "Erreur lors du chargement des permissions du r\xF4le";
        this.loading = false;
      }
    });
  }
  /**
   * Charge toutes les permissions de l'application
   */
  loadAllPermissions() {
    this.getPermissionsUseCase.execute().subscribe({
      next: (response) => {
        this.allPermissions = response.content || [];
        this.groupPermissionsByModule();
        this.loading = false;
      },
      error: (error) => {
        this.error = "Erreur lors du chargement des permissions";
        this.loading = false;
      }
    });
  }
  /**
   * Groupe les permissions par module
   */
  groupPermissionsByModule() {
    this.groupedPermissions.clear();
    this.allPermissions.forEach((permission) => {
      const module = permission.permModule;
      if (!this.groupedPermissions.has(module)) {
        this.groupedPermissions.set(module, []);
      }
      this.groupedPermissions.get(module).push(permission);
    });
  }
  /**
   * Extrait le sous-module d'un code de permission
   * Format attendu: MODULE:SOUS_MODULE:ACTION
   * Exemple: SECURITY:ROLE:CREATE -> sous-module = ROLE
   */
  getSubModuleFromPermissionCode(permCode) {
    const parts = permCode.split(":");
    if (parts.length >= 2) {
      return parts[1];
    }
    return permCode;
  }
  /**
   * Groupe les permissions par sous-module pour un module donné
   * Retourne un Map où la clé est le sous-module et la valeur est un Map d'actions -> permissions
   */
  getPermissionsBySubModule(module) {
    const subModuleMap = /* @__PURE__ */ new Map();
    const permissions = this.getPermissionsByModule(module);
    permissions.forEach((permission) => {
      const subModule = this.getSubModuleFromPermissionCode(permission.permCode);
      if (!subModuleMap.has(subModule)) {
        subModuleMap.set(subModule, /* @__PURE__ */ new Map());
      }
      const actionMap = subModuleMap.get(subModule);
      const action = permission.permAction;
      if (!actionMap.has(action)) {
        actionMap.set(action, []);
      }
      actionMap.get(action).push(permission);
    });
    return subModuleMap;
  }
  /**
   * Vérifie si une permission est assignée au rôle (état actuel)
   */
  isPermissionAssigned(permissionId) {
    return this.selectedPermissions.has(permissionId);
  }
  /**
   * Vérifie s'il y a des changements par rapport à l'état initial
   */
  hasChanges() {
    if (this.rolePermissions.size !== this.selectedPermissions.size) {
      return true;
    }
    for (const permissionId of this.rolePermissions) {
      if (!this.selectedPermissions.has(permissionId)) {
        return true;
      }
    }
    for (const permissionId of this.selectedPermissions) {
      if (!this.rolePermissions.has(permissionId)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Gère le changement d'état d'une checkbox de permission (localement)
   */
  onPermissionChange(permissionId, event) {
    const target = event.target;
    const checked = target.checked;
    const newSelectedPermissions = new Set(this.selectedPermissions);
    if (checked) {
      newSelectedPermissions.add(permissionId);
    } else {
      newSelectedPermissions.delete(permissionId);
    }
    this.selectedPermissions = newSelectedPermissions;
  }
  /**
   * Enregistre toutes les permissions en une seule fois via l'API batch
   */
  savePermissions() {
    if (!this.roleId || !this.hasChanges())
      return;
    this.saving = true;
    this.saveError = null;
    this.saveSuccess = false;
    const permissionIds = Array.from(this.selectedPermissions);
    this.permissionRepository.assignPermissionsBatch(this.roleId, permissionIds).subscribe({
      next: (response) => {
        this.rolePermissions = new Set(this.selectedPermissions);
        if (response.roleCode) {
          this.roleCode = response.roleCode;
          this.roleNom = response.roleNom;
        }
        this.saveSuccess = true;
        this.saving = false;
        setTimeout(() => {
          this.loadData();
        }, 2e3);
      },
      error: (error) => {
        this.saveError = error.message || "Erreur lors de l'enregistrement des permissions";
        this.saving = false;
      }
    });
  }
  /**
   * Masque le message de succès
   */
  dismissSaveSuccess() {
    this.saveSuccess = false;
  }
  /**
   * Masque le message d'erreur
   */
  dismissSaveError() {
    this.saveError = null;
  }
  /**
   * Formate le nom du module pour l'affichage
   */
  getModuleDisplayName(module) {
    const moduleKeys = {
      [PermissionModule.CAISSE]: "permissions.permissionManagement.modules.INVOICING",
      [PermissionModule.STOCK]: "permissions.permissionManagement.modules.STOCK",
      [PermissionModule.PRODUCTION]: "permissions.permissionManagement.modules.PRODUCTION",
      [PermissionModule.COMPTABILITE]: "permissions.permissionManagement.modules.ACCOUNTING",
      [PermissionModule.APPROVISIONNEMENT]: "permissions.permissionManagement.modules.STOCK"
    };
    const key = moduleKeys[module] || module;
    return key;
  }
  /**
   * Formate le nom de l'action pour l'affichage
   */
  getActionDisplayName(action) {
    const actionKeys = {
      [PermissionAction.CREATE]: "permissions.permissionManagement.actions.CREATE",
      [PermissionAction.READ]: "permissions.permissionManagement.actions.READ",
      [PermissionAction.UPDATE]: "permissions.permissionManagement.actions.UPDATE",
      [PermissionAction.DELETE]: "permissions.permissionManagement.actions.DELETE",
      [PermissionAction.EXPORT]: "permissions.permissionManagement.actions.EXPORT",
      [PermissionAction.IMPORT]: "permissions.permissionManagement.actions.IMPORT",
      [PermissionAction.PRINT]: "permissions.permissionManagement.actions.PRINT"
    };
    const key = actionKeys[action] || action;
    return key;
  }
  /**
   * Récupère les permissions d'un module spécifique
   */
  getPermissionsByModule(module) {
    return this.groupedPermissions.get(module) || [];
  }
  /**
   * Récupère les modules disponibles
   */
  getAvailableModules() {
    return Array.from(this.groupedPermissions.keys());
  }
  /**
   * Vérifie si toutes les permissions d'un sous-module sont assignées
   */
  isAllPermissionsAssignedForSubModule(actionMap) {
    let allAssigned = true;
    for (const [action, permissions] of actionMap) {
      for (const permission of permissions) {
        if (!this.isPermissionAssigned(permission.id)) {
          allAssigned = false;
          break;
        }
      }
      if (!allAssigned)
        break;
    }
    return allAssigned;
  }
  /**
   * Bascule toutes les permissions d'un sous-module (localement)
   */
  toggleAllPermissionsForSubModule(actionMap, event) {
    const target = event.target;
    const checked = target.checked;
    const allPermissionIds = [];
    for (const [action, permissions] of actionMap) {
      for (const permission of permissions) {
        allPermissionIds.push(permission.id);
      }
    }
    const newSelectedPermissions = new Set(this.selectedPermissions);
    if (checked) {
      allPermissionIds.forEach((permissionId) => {
        newSelectedPermissions.add(permissionId);
      });
    } else {
      allPermissionIds.forEach((permissionId) => {
        newSelectedPermissions.delete(permissionId);
      });
    }
    this.selectedPermissions = newSelectedPermissions;
  }
  /**
   * Bascule l'expansion d'un module
   */
  toggleModuleExpansion(moduleIndex) {
    if (this.expandedModules.has(moduleIndex)) {
      this.expandedModules.delete(moduleIndex);
    } else {
      this.expandedModules.add(moduleIndex);
    }
  }
  /**
   * Vérifie si un module est expandé
   */
  isModuleExpanded(moduleIndex) {
    return this.expandedModules.has(moduleIndex);
  }
  /**
   * Bascule l'expansion d'un sous-module
   */
  toggleSubModuleExpansion(moduleIndex, subModuleIndex) {
    if (!this.expandedSubModules.has(moduleIndex)) {
      this.expandedSubModules.set(moduleIndex, /* @__PURE__ */ new Set());
    }
    const subModuleSet = this.expandedSubModules.get(moduleIndex);
    if (subModuleSet.has(subModuleIndex)) {
      subModuleSet.delete(subModuleIndex);
    } else {
      subModuleSet.add(subModuleIndex);
    }
  }
  /**
   * Vérifie si un sous-module est expandé
   */
  isSubModuleExpanded(moduleIndex, subModuleIndex) {
    const subModuleSet = this.expandedSubModules.get(moduleIndex);
    return subModuleSet ? subModuleSet.has(subModuleIndex) : false;
  }
  /**
   * Obtient la description d'une action
   */
  getActionDescription(action) {
    const actionDescriptions = {
      [PermissionAction.CREATE]: "Permet de cr\xE9er de nouveaux \xE9l\xE9ments",
      [PermissionAction.READ]: "Permet de visualiser les \xE9l\xE9ments",
      [PermissionAction.UPDATE]: "Permet de modifier les \xE9l\xE9ments existants",
      [PermissionAction.DELETE]: "Permet de supprimer des \xE9l\xE9ments",
      [PermissionAction.EXPORT]: "Permet d'exporter des donn\xE9es",
      [PermissionAction.IMPORT]: "Permet d'importer des donn\xE9es",
      [PermissionAction.PRINT]: "Permet d'imprimer des documents"
    };
    return actionDescriptions[action] || "Aucune description disponible";
  }
  static \u0275fac = function PermissionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionComponent, selectors: [["app-permission"]], features: [\u0275\u0275ProvidersFeature([
    {
      provide: PERMISSION_REPOSITORY,
      useClass: HttpPermissionRepository
    },
    {
      provide: GET_PERMISSIONS_USE_CASE,
      useClass: GetPermissionsUseCaseImpl
    },
    // Provider pour localStorage
    {
      provide: "LOCAL_STORAGE",
      useValue: localStorage
    }
  ])], decls: 27, vars: 20, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-1"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "d-flex justify-content-end mb-3", 4, "ngIf"], ["class", "treeview-container", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-danger", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "ms-2", 3, "click"], [1, "d-flex", "justify-content-end", "mb-3"], ["type", "button", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "isax isax-save-2 me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "isax", "isax-save-2", "me-1"], [1, "treeview-container"], [1, "treeview"], [4, "ngFor", "ngForOf"], ["class", "treeview-item text-center py-5", 4, "ngIf"], [1, "treeview-item"], [1, "treeview-header", "d-flex", "align-items-center", "cursor-pointer", 3, "click"], [1, "isax", "isax-arrow-down-1", "me-2", "transition-icon"], [1, "fw-bold"], [1, "badge", "bg-primary", "rounded-pill", "ms-2"], ["class", "treeview-submenu", 4, "ngIf"], [1, "treeview-submenu"], ["class", "treeview-item text-center py-3", 4, "ngIf"], [1, "treeview-header", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "flex-grow-1", "cursor-pointer", 3, "click"], [1, "isax", "isax-arrow-right-1", "me-2", "transition-icon"], [1, "fw-semibold"], [1, "form-check", "m-0"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "form-check-label", "small", "ms-1"], ["class", "treeview-item", 4, "ngIf"], [1, "treeview-permissions"], [1, "treeview-permission-item"], [1, "form-check", "d-flex", "align-items-center"], ["type", "checkbox", 1, "form-check-input", "me-2", 3, "change", "id", "checked"], [1, "form-check-label", "flex-grow-1", 3, "for"], ["class", "isax isax-info-circle ms-2 text-muted cursor-help", 3, "title", 4, "ngIf"], [1, "isax", "isax-info-circle", "ms-2", "text-muted", "cursor-help", 3, "title"], [1, "treeview-item", "text-center", "py-3"], [1, "isax", "isax-shield-slash", "fs-24", "text-muted", "mb-2", "d-block"], [1, "text-muted", "mb-0", "small"], [1, "treeview-item", "text-center", "py-5"], [1, "isax", "isax-shield-slash", "fs-48", "text-muted", "mb-3", "d-block"], [1, "text-muted", "mb-2"], [1, "text-muted", "mb-0"]], template: function PermissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6")(4, "a", 2);
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "a", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementStart(13, "span", 7);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "ul", 8)(17, "li")(18, "a", 9);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(21, PermissionComponent_div_21_Template, 5, 3, "div", 10)(22, PermissionComponent_div_22_Template, 4, 1, "div", 11)(23, PermissionComponent_div_23_Template, 7, 3, "div", 12)(24, PermissionComponent_div_24_Template, 6, 4, "div", 13)(25, PermissionComponent_div_25_Template, 7, 8, "div", 14)(26, PermissionComponent_div_26_Template, 4, 2, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.rolePermissions);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "permissions.permissionManagement.title"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "permissions.permissionManagement.role"), " : ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.roleNom || \u0275\u0275pipeBind1(15, 16, "permissions.permissionManagement.roleLoading"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(20, 18, "permissions.permissionManagement.roleCode"), ": ", ctx.roleCode);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.saveSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saveError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, KeyValuePipe, TranslatePipe], styles: ["\n\n.treeview-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n}\n.treeview[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.treeview-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.treeview-header[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.treeview-header[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #0d6efd;\n}\n.treeview-submenu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 1.5rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-left: 2px solid #dee2e6;\n}\n.treeview-action-header[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n.treeview-permissions[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 1rem;\n  margin-bottom: 0.5rem;\n}\n.treeview-permission-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  background-color: white;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  margin-bottom: 0.25rem;\n}\n.treeview-permission-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cursor-help[_ngcontent-%COMP%] {\n  cursor: help;\n}\n.transition-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.rotate-90[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.rotate-90.isax-arrow-down-1[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n/*# sourceMappingURL=permission.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionComponent, [{
    type: Component,
    args: [{ selector: "app-permission", imports: [CommonModule, RouterLink, TranslatePipe], providers: [
      {
        provide: PERMISSION_REPOSITORY,
        useClass: HttpPermissionRepository
      },
      {
        provide: GET_PERMISSIONS_USE_CASE,
        useClass: GetPermissionsUseCaseImpl
      },
      // Provider pour localStorage
      {
        provide: "LOCAL_STORAGE",
        useValue: localStorage
      }
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>
                <a [routerLink]="routes.rolePermissions">
                    <i class="isax isax-arrow-left me-1"></i>
                    {{ 'permissions.permissionManagement.title' | translate }}
                </a>
            </h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    {{ 'permissions.permissionManagement.role' | translate }} : <span class="fw-normal ms-1">{{ roleNom || ('permissions.permissionManagement.roleLoading' | translate) }}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item">{{ 'permissions.permissionManagement.roleCode' | translate }}: {{ roleCode }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

    <!-- Success Message -->
    <div *ngIf="saveSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
        <i class="isax isax-tick-circle me-2"></i> {{ 'permissions.permissionManagement.saveSuccess' | translate }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" (click)="dismissSaveSuccess()"></button>
    </div>

    <!-- Error Message -->
    <div *ngIf="saveError" class="alert alert-danger alert-dismissible fade show" role="alert">
        <i class="isax isax-danger me-2"></i> {{ saveError }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" (click)="dismissSaveError()"></button>
    </div>

    <!-- Loading State -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">{{ 'permissions.permissionManagement.loading' | translate }}</p>
    </div>

    <!-- Error State -->
    <div *ngIf="error && !loading" class="alert alert-danger" role="alert">
        <i class="isax isax-danger me-2"></i> {{ error }}
        <button type="button" class="btn btn-sm btn-outline-danger ms-2" (click)="loadData()">{{ 'permissions.permissionManagement.retry' | translate }}</button>
    </div>

    <!-- Save Button -->
    <div *ngIf="!loading && !error" class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-primary d-inline-flex align-items-center" (click)="savePermissions()" [disabled]="!hasChanges() || saving">
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>
            <i *ngIf="!saving" class="isax isax-save-2 me-1"></i>
            {{ saving ? ('permissions.permissionManagement.saving' | translate) : ('permissions.permissionManagement.saveButton' | translate) }}
        </button>
    </div>

    <!-- Start Treeview Structure -->
    <div *ngIf="!loading && !error" class="treeview-container">
        <!-- Modules List -->
        <ul class="treeview">
            <ng-container *ngFor="let module of getAvailableModules(); let moduleIndex = index">
                <li class="treeview-item">
                    <!-- Module Header -->
                    <div class="treeview-header d-flex align-items-center cursor-pointer" 
                         (click)="toggleModuleExpansion(moduleIndex)">
                        <i class="isax isax-arrow-down-1 me-2 transition-icon" 
                           [class.rotate-90]="isModuleExpanded(moduleIndex)"></i>
                        <span class="fw-bold">{{ getModuleDisplayName(module) | translate }}</span>
                        <span class="badge bg-primary rounded-pill ms-2">{{ getPermissionsBySubModule(module).size }}</span>
                    </div>
                    
                    <!-- Module Content (Collapsible) -->
                    <ul *ngIf="isModuleExpanded(moduleIndex)" class="treeview-submenu">
                        <ng-container *ngFor="let subModuleEntry of getPermissionsBySubModule(module) | keyvalue; let subModuleIndex = index">
                            <li class="treeview-item">
                                <!-- Sub-module Header -->
                                <div class="treeview-header d-flex align-items-center">
                                    <!-- Zone cliquable pour l'expansion (fl\xE8che + texte) -->
                                    <div class="d-flex align-items-center flex-grow-1 cursor-pointer"
                                         (click)="toggleSubModuleExpansion(moduleIndex, subModuleIndex)">
                                        <i class="isax isax-arrow-right-1 me-2 transition-icon" 
                                           [class.rotate-90]="isSubModuleExpanded(moduleIndex, subModuleIndex)"></i>
                                        <span class="fw-semibold">{{ subModuleEntry.key }}</span>
                                    </div>
                                    <!-- Zone de la checkbox "Allow All" (s\xE9par\xE9e) -->
                                    <div class="form-check m-0">
                                        <input class="form-check-input" 
                                               type="checkbox"
                                               [checked]="isAllPermissionsAssignedForSubModule(subModuleEntry.value)"
                                               (change)="toggleAllPermissionsForSubModule(subModuleEntry.value, $event)">
                                        <label class="form-check-label small ms-1">
                                            {{ 'permissions.permissionManagement.allowAll' | translate }}
                                        </label>
                                    </div>
                                </div>
                                
                                <!-- Sub-module Content (Collapsible) -->
                                <ul *ngIf="isSubModuleExpanded(moduleIndex, subModuleIndex)" class="treeview-submenu">
                                    <ng-container *ngFor="let actionEntry of subModuleEntry.value | keyvalue">
                                        <li *ngIf="actionEntry.value.length > 0" class="treeview-item">
                                            <!-- Action Header -->
                                          
                                            
                                            <!-- Permissions List -->
                                            <ul class="treeview-permissions">
                                                <ng-container *ngFor="let permission of actionEntry.value">
                                                    <li class="treeview-permission-item">
                                                        <div class="form-check d-flex align-items-center">
                                                            <input class="form-check-input me-2" 
                                                                   type="checkbox" 
                                                                   [id]="'permission-' + permission.id"
                                                                   [checked]="isPermissionAssigned(permission.id)"
                                                                   (change)="onPermissionChange(permission.id, $event)">
                                                            <label class="form-check-label flex-grow-1" [for]="'permission-' + permission.id">
                                                                {{ permission.permNom || permission.permCode }}
                                                            </label>
                                                            <!-- Permission Help Icon -->
                                                            <i *ngIf="permission.permDescription" 
                                                               class="isax isax-info-circle ms-2 text-muted cursor-help"
                                                               [attr.data-bs-toggle]="'popover'"
                                                               [attr.data-bs-trigger]="'hover focus'"
                                                               [attr.data-bs-placement]="'top'"
                                                               [attr.data-bs-content]="permission.permDescription"
                                                               [title]="permission.permDescription"></i>
                                                        </div>
                                                    </li>
                                                </ng-container>
                                            </ul>
                                        </li>
                                    </ng-container>
                                </ul>
                            </li>
                        </ng-container>

                        <!-- No sub-modules message -->
                        <li *ngIf="getPermissionsBySubModule(module).size === 0" class="treeview-item text-center py-3">
                            <i class="isax isax-shield-slash fs-24 text-muted mb-2 d-block"></i>
                            <p class="text-muted mb-0 small">{{ 'permissions.permissionManagement.noModulePermissions' | translate }}</p>
                        </li>
                    </ul>
                </li>
            </ng-container>

            <!-- No permissions message -->
            <li *ngIf="getAvailableModules().length === 0 && !loading" class="treeview-item text-center py-5">
                <i class="isax isax-shield-slash fs-48 text-muted mb-3 d-block"></i>
                <h5 class="text-muted mb-2">{{ 'permissions.permissionManagement.noPermissions' | translate }}</h5>
                <p class="text-muted mb-0">{{ 'permissions.permissionManagement.noPermissionsMessage' | translate }}</p>
            </li>
        </ul>
    </div>
    <!-- End Treeview Structure -->

</div>
<!-- End Content -->

<style>
.treeview-container {
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
}

.treeview {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
}

.treeview-item {
    margin-bottom: 0.5rem;
}

.treeview-header {
    padding: 0.75rem 1rem;
    background-color: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    transition: all 0.2s ease;
}

.treeview-header:hover {
    background-color: #f8f9fa;
    border-color: #0d6efd;
}

.treeview-submenu {
    list-style: none;
    padding-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-left: 2px solid #dee2e6;
}

.treeview-action-header {
    padding: 0.5rem 0.75rem;
    background-color: #f8f9fa;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.treeview-permissions {
    list-style: none;
    padding-left: 1rem;
    margin-bottom: 0.5rem;
}

.treeview-permission-item {
    padding: 0.5rem 0.75rem;
    background-color: white;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    margin-bottom: 0.25rem;
}

.treeview-permission-item:hover {
    background-color: #f8f9fa;
}

.cursor-pointer {
    cursor: pointer;
}

.cursor-help {
    cursor: help;
}

.transition-icon {
    transition: transform 0.3s ease;
}

.rotate-90 {
    transform: rotate(90deg);
}

.rotate-90.isax-arrow-down-1 {
    transform: rotate(180deg);
}

.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
}
</style>
`, styles: ["/* angular:styles/component:css;f05a175daff950e14bc133436880ffb60e9221c26db8f4485567b7c4e807e4c0;/Users/a1/Documents/angularProjects/ocm/src/app/modules/manage-users/presentation/pages/permission/permission.component.html */\n.treeview-container {\n  padding: 1rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n}\n.treeview {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.treeview-item {\n  margin-bottom: 0.5rem;\n}\n.treeview-header {\n  padding: 0.75rem 1rem;\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.treeview-header:hover {\n  background-color: #f8f9fa;\n  border-color: #0d6efd;\n}\n.treeview-submenu {\n  list-style: none;\n  padding-left: 1.5rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-left: 2px solid #dee2e6;\n}\n.treeview-action-header {\n  padding: 0.5rem 0.75rem;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n.treeview-permissions {\n  list-style: none;\n  padding-left: 1rem;\n  margin-bottom: 0.5rem;\n}\n.treeview-permission-item {\n  padding: 0.5rem 0.75rem;\n  background-color: white;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  margin-bottom: 0.25rem;\n}\n.treeview-permission-item:hover {\n  background-color: #f8f9fa;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.cursor-help {\n  cursor: help;\n}\n.transition-icon {\n  transition: transform 0.3s ease;\n}\n.rotate-90 {\n  transform: rotate(90deg);\n}\n.rotate-90.isax-arrow-down-1 {\n  transform: rotate(180deg);\n}\n.form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n/*# sourceMappingURL=permission.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionComponent, { className: "PermissionComponent", filePath: "src/app/modules/manage-users/presentation/pages/permission/permission.component.ts", lineNumber: 44 });
})();
export {
  PermissionComponent
};
//# sourceMappingURL=chunk-YM3UMEQ2.js.map
