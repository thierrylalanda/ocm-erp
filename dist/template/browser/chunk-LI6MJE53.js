import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  HttpClient
} from "./chunk-ZCJVS2AD.js";
import {
  Injectable,
  InjectionToken,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-HKG6HBOI.js";

// src/app/modules/manage-users/application/use-cases/get-roles.use-case.token.ts
var GET_ROLES_USE_CASE = new InjectionToken("GetRolesUseCase");

// src/app/modules/manage-users/domain/repositories/role.repository.token.ts
var ROLE_REPOSITORY = new InjectionToken("RoleRepository");

// src/app/modules/manage-users/infrastructure/repositories/http-role.repository.ts
var HttpRoleRepository = class _HttpRoleRepository {
  http = inject(HttpClient);
  baseUrl = `${environment.api}security/roles`;
  create(role) {
    return this.http.post(this.baseUrl, role);
  }
  findAllBySociete(societeId) {
    return this.http.get(`${this.baseUrl}/societe/${societeId}`);
  }
  findById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  update(id, role) {
    return this.http.put(`${this.baseUrl}/${id}`, role);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  copy(id, copyData) {
    return this.http.post(`${this.baseUrl}/${id}/copy`, copyData);
  }
  static \u0275fac = function HttpRoleRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpRoleRepository)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HttpRoleRepository, factory: _HttpRoleRepository.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpRoleRepository, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/manage-users/application/use-cases/get-roles.use-case.ts
var GetRolesUseCaseImpl = class _GetRolesUseCaseImpl {
  roleRepository = inject(ROLE_REPOSITORY);
  execute(societeId) {
    if (societeId === void 0 || societeId === null) {
      throw new Error("L'ID de la soci\xE9t\xE9 est obligatoire");
    }
    return this.roleRepository.findAllBySociete(societeId);
  }
  static \u0275fac = function GetRolesUseCaseImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetRolesUseCaseImpl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GetRolesUseCaseImpl, factory: _GetRolesUseCaseImpl.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetRolesUseCaseImpl, [{
    type: Injectable
  }], null, null);
})();

export {
  GET_ROLES_USE_CASE,
  ROLE_REPOSITORY,
  HttpRoleRepository,
  GetRolesUseCaseImpl
};
//# sourceMappingURL=chunk-LI6MJE53.js.map
