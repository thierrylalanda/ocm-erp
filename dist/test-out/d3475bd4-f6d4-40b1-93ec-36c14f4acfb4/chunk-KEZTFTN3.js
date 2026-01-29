import {
  InjectionToken,
  init_core
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __esm
} from "./chunk-FWMZPJRE.js";

// src/app/modules/manage-users/domain/repositories/user.repository.ts
var USER_REPOSITORY, BaseUserRepository;
var init_user_repository = __esm({
  "src/app/modules/manage-users/domain/repositories/user.repository.ts"() {
    "use strict";
    init_core();
    USER_REPOSITORY = new InjectionToken("UserRepository");
    BaseUserRepository = class {
      // Méthodes étendues
      findWithOptions(options) {
        return __async(this, null, function* () {
          const response = yield this.findAllPaginated(options);
          return {
            users: response.content.map((userResponse) => this.mapResponseToUser(userResponse)),
            total: response.totalElements,
            hasMore: response.page < response.totalPages - 1,
            currentPage: response.page,
            totalPages: response.totalPages
          };
        });
      }
      countByStatus(status) {
        return __async(this, null, function* () {
          const response = yield this.findByStatus(status);
          return response.totalElements;
        });
      }
      countBySite(siteId) {
        return __async(this, null, function* () {
          const response = yield this.findBySite(siteId);
          return response.totalElements;
        });
      }
      countByDepartment(departmentId) {
        return __async(this, null, function* () {
          const response = yield this.findByDepartment(departmentId);
          return response.totalElements;
        });
      }
      findActiveUsers(options) {
        return __async(this, null, function* () {
          return this.findByStatus("ACTIF", options);
        });
      }
      findInactiveUsers(options) {
        return __async(this, null, function* () {
          return this.findByStatus("INACTIF", options);
        });
      }
    };
  }
});

export {
  USER_REPOSITORY,
  BaseUserRepository,
  init_user_repository
};
//# sourceMappingURL=chunk-KEZTFTN3.js.map
