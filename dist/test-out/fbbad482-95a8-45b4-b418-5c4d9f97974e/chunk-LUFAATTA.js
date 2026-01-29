import {
  init_application_context_port
} from "./chunk-MU4ENZR6.js";
import {
  init_email_vo
} from "./chunk-KZXJWDFC.js";
import {
  init_phone_number_vo
} from "./chunk-DJVIHOKC.js";
import {
  init_user_name_vo
} from "./chunk-4XZF5GTU.js";
import {
  init_user_status_vo
} from "./chunk-PRPNIB7R.js";
import {
  init_value_object_base
} from "./chunk-N3H5GIVS.js";
import {
  init_domain_error,
  init_result_type
} from "./chunk-THVLRUNZ.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __esm,
  __publicField
} from "./chunk-FWMZPJRE.js";

// src/app/modules/_shared/domain/entities/user.entity.ts
var UserEntity;
var init_user_entity = __esm({
  "src/app/modules/_shared/domain/entities/user.entity.ts"() {
    "use strict";
    UserEntity = class _UserEntity {
      id;
      username;
      email;
      firstName;
      lastName;
      phoneNumber;
      isActive;
      isEmailVerified;
      lastLoginAt;
      createdAt;
      updatedAt;
      deletedAt;
      tenantId;
      roles;
      permissions;
      constructor(id, username, email, firstName, lastName, phoneNumber, isActive, isEmailVerified, lastLoginAt, createdAt, updatedAt, deletedAt, tenantId, roles, permissions) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.isActive = isActive;
        this.isEmailVerified = isEmailVerified;
        this.lastLoginAt = lastLoginAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.tenantId = tenantId;
        this.roles = roles;
        this.permissions = permissions;
      }
      // Domain logic
      static create(command) {
        const now = /* @__PURE__ */ new Date();
        const userId = { value: this.generateId() };
        return new _UserEntity(
          userId,
          command.username,
          command.email,
          command.firstName,
          command.lastName,
          command.phoneNumber,
          true,
          // isActive
          false,
          // isEmailVerified
          void 0,
          // lastLoginAt
          now,
          // createdAt
          now,
          // updatedAt
          void 0,
          // deletedAt
          command.tenantId,
          command.roles || [],
          []
          // permissions will be populated from roles
        );
      }
      update(command) {
        return new _UserEntity(
          this.id,
          this.username,
          this.email,
          command.firstName ?? this.firstName,
          command.lastName ?? this.lastName,
          command.phoneNumber ?? this.phoneNumber,
          command.isActive ?? this.isActive,
          this.isEmailVerified,
          this.lastLoginAt,
          this.createdAt,
          /* @__PURE__ */ new Date(),
          // updatedAt
          this.deletedAt,
          this.tenantId,
          command.roles ?? this.roles,
          this.permissions
        );
      }
      markAsDeleted() {
        return new _UserEntity(
          this.id,
          this.username,
          this.email,
          this.firstName,
          this.lastName,
          this.phoneNumber,
          false,
          // isActive
          this.isEmailVerified,
          this.lastLoginAt,
          this.createdAt,
          /* @__PURE__ */ new Date(),
          // updatedAt
          /* @__PURE__ */ new Date(),
          // deletedAt
          this.tenantId,
          this.roles,
          this.permissions
        );
      }
      recordLogin() {
        return new _UserEntity(
          this.id,
          this.username,
          this.email,
          this.firstName,
          this.lastName,
          this.phoneNumber,
          this.isActive,
          this.isEmailVerified,
          /* @__PURE__ */ new Date(),
          // lastLoginAt
          this.createdAt,
          /* @__PURE__ */ new Date(),
          // updatedAt
          this.deletedAt,
          this.tenantId,
          this.roles,
          this.permissions
        );
      }
      hasPermission(permission) {
        return this.permissions.includes(permission);
      }
      hasAnyPermission(permissions) {
        return permissions.some((permission) => this.hasPermission(permission));
      }
      hasAllPermissions(permissions) {
        return permissions.every((permission) => this.hasPermission(permission));
      }
      static generateId() {
        return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      }
    };
  }
});

// src/app/modules/_shared/domain/entities/tenant.entity.ts
var init_tenant_entity = __esm({
  "src/app/modules/_shared/domain/entities/tenant.entity.ts"() {
    "use strict";
  }
});

// src/app/modules/_shared/domain/entities/permission.entity.ts
var PermissionType;
var init_permission_entity = __esm({
  "src/app/modules/_shared/domain/entities/permission.entity.ts"() {
    "use strict";
    (function(PermissionType2) {
      PermissionType2["READ"] = "read";
      PermissionType2["WRITE"] = "write";
      PermissionType2["CREATE"] = "create";
      PermissionType2["UPDATE"] = "update";
      PermissionType2["DELETE"] = "delete";
      PermissionType2["VALIDATE"] = "validate";
      PermissionType2["EXPORT"] = "export";
      PermissionType2["IMPORT"] = "import";
      PermissionType2["ADMIN"] = "admin";
    })(PermissionType || (PermissionType = {}));
  }
});

// src/app/modules/_shared/domain/value-objects/money.vo.ts
var init_money_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/money.vo.ts"() {
    "use strict";
  }
});

// src/app/modules/_shared/domain/value-objects/date-range.vo.ts
var init_date_range_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/date-range.vo.ts"() {
    "use strict";
  }
});

// src/app/modules/_shared/domain/repositories/user.repository.ts
var USER_REPOSITORY;
var init_user_repository = __esm({
  "src/app/modules/_shared/domain/repositories/user.repository.ts"() {
    "use strict";
    init_core();
    USER_REPOSITORY = new InjectionToken("UserRepository");
  }
});

// src/app/modules/_shared/domain/repositories/tenant.repository.ts
var init_tenant_repository = __esm({
  "src/app/modules/_shared/domain/repositories/tenant.repository.ts"() {
    "use strict";
  }
});

// src/app/modules/_shared/infrastructure/mappers/user.mapper.ts
var UserMapper;
var init_user_mapper = __esm({
  "src/app/modules/_shared/infrastructure/mappers/user.mapper.ts"() {
    "use strict";
    init_user_entity();
    UserMapper = class {
      static toEntity(user) {
        return new UserEntity(user.id, user.username, user.email, user.firstName, user.lastName, user.phoneNumber, user.isActive, user.isEmailVerified, user.lastLoginAt, user.createdAt, user.updatedAt, user.deletedAt, user.tenantId, user.roles, user.permissions);
      }
      static fromEntity(entity) {
        return {
          id: entity.id,
          username: entity.username,
          email: entity.email,
          firstName: entity.firstName,
          lastName: entity.lastName,
          phoneNumber: entity.phoneNumber,
          isActive: entity.isActive,
          isEmailVerified: entity.isEmailVerified,
          lastLoginAt: entity.lastLoginAt,
          createdAt: entity.createdAt,
          updatedAt: entity.updatedAt,
          deletedAt: entity.deletedAt,
          tenantId: entity.tenantId,
          roles: entity.roles,
          permissions: entity.permissions
        };
      }
      static toEntityList(users) {
        return users.map((user) => this.toEntity(user));
      }
      static fromEntityList(entities) {
        return entities.map((entity) => this.fromEntity(entity));
      }
    };
  }
});

// src/app/modules/_shared/application/use-cases/authenticate-user.use-case.ts
var AuthenticateUserUseCase;
var init_authenticate_user_use_case = __esm({
  "src/app/modules/_shared/application/use-cases/authenticate-user.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_user_repository();
    init_user_entity();
    init_user_mapper();
    AuthenticateUserUseCase = class AuthenticateUserUseCase2 {
      userRepository;
      constructor(userRepository) {
        this.userRepository = userRepository;
      }
      login(credentials) {
        return __async(this, null, function* () {
          try {
            if (!credentials.email || !credentials.password) {
              return {
                success: false,
                error: "Email and password are required"
              };
            }
            const user = yield this.userRepository.findByEmail(credentials.email);
            if (!user) {
              return {
                success: false,
                error: "Invalid credentials"
              };
            }
            const userEntity = UserMapper.toEntity(user);
            if (!userEntity.isActive) {
              return {
                success: false,
                error: "Account is deactivated"
              };
            }
            const isValidPassword = yield this.verifyPassword(credentials.password, userEntity);
            if (!isValidPassword) {
              return {
                success: false,
                error: "Invalid credentials"
              };
            }
            const updatedUser = userEntity.recordLogin();
            yield this.userRepository.update(UserMapper.fromEntity(updatedUser));
            const token = this.generateToken(updatedUser);
            const refreshToken = this.generateRefreshToken(updatedUser);
            return {
              success: true,
              user: updatedUser,
              token,
              refreshToken
            };
          } catch (error) {
            console.error("Login error:", error);
            return {
              success: false,
              error: "An unexpected error occurred"
            };
          }
        });
      }
      register(command) {
        return __async(this, null, function* () {
          try {
            if (!command.email || !command.password || !command.firstName || !command.lastName) {
              return {
                success: false,
                error: "All required fields must be provided"
              };
            }
            const existingUser = yield this.userRepository.findByEmail(command.email);
            if (existingUser) {
              return {
                success: false,
                error: "User with this email already exists"
              };
            }
            const createCommand = {
              username: command.email,
              // Using email as username for now
              email: command.email,
              password: command.password,
              // In real implementation, this would be hashed
              firstName: command.firstName,
              lastName: command.lastName,
              phoneNumber: command.phoneNumber,
              tenantId: command.tenantId,
              roles: ["user"]
              // Default role
            };
            const user = UserEntity.create(createCommand);
            const savedUser = yield this.userRepository.create(user);
            return {
              success: true,
              user
            };
          } catch (error) {
            console.error("Registration error:", error);
            return {
              success: false,
              error: "An unexpected error occurred during registration"
            };
          }
        });
      }
      logout(userId) {
        return __async(this, null, function* () {
          try {
            console.log(`User ${userId} logged out`);
          } catch (error) {
            console.error("Logout error:", error);
            throw new Error("Failed to logout");
          }
        });
      }
      refreshToken(refreshToken) {
        return __async(this, null, function* () {
          try {
            return {
              success: false,
              error: "Token refresh not implemented"
            };
          } catch (error) {
            console.error("Token refresh error:", error);
            return {
              success: false,
              error: "Failed to refresh token"
            };
          }
        });
      }
      changePassword(userId, currentPassword, newPassword) {
        return __async(this, null, function* () {
          try {
            const user = yield this.userRepository.findById({ value: userId });
            if (!user) {
              return {
                success: false,
                error: "User not found"
              };
            }
            const userEntity = UserMapper.toEntity(user);
            const isValidCurrentPassword = yield this.verifyPassword(currentPassword, userEntity);
            if (!isValidCurrentPassword) {
              return {
                success: false,
                error: "Current password is incorrect"
              };
            }
            const updatedUser = userEntity.update({});
            yield this.userRepository.update(UserMapper.fromEntity(updatedUser));
            return {
              success: true
            };
          } catch (error) {
            console.error("Password change error:", error);
            return {
              success: false,
              error: "Failed to change password"
            };
          }
        });
      }
      resetPassword(email) {
        return __async(this, null, function* () {
          try {
            const user = yield this.userRepository.findByEmail(email);
            if (!user) {
              return {
                success: true
              };
            }
            console.log(`Password reset requested for user: ${user.email}`);
            return {
              success: true
            };
          } catch (error) {
            console.error("Password reset error:", error);
            return {
              success: false,
              error: "Failed to process password reset request"
            };
          }
        });
      }
      // Private helper methods
      verifyPassword(password, user) {
        return __async(this, null, function* () {
          return password === "password";
        });
      }
      generateToken(user) {
        return `token_${user.id.value}_${Date.now()}`;
      }
      generateRefreshToken(user) {
        return `refresh_${user.id.value}_${Date.now()}`;
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [USER_REPOSITORY] }] }
      ];
    };
    AuthenticateUserUseCase = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AuthenticateUserUseCase);
  }
});

// src/app/modules/_shared/infrastructure/adapters/local-storage-context.adapter.ts
var LocalStorageContextAdapter_1, _a, LocalStorageContextAdapter;
var init_local_storage_context_adapter = __esm({
  "src/app/modules/_shared/infrastructure/adapters/local-storage-context.adapter.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    LocalStorageContextAdapter = (_a = class {
      storage;
      constructor(storage) {
        this.storage = storage;
      }
      getSocieteId() {
        const id = this.storage.getItem(LocalStorageContextAdapter_1.KEYS.SOCIETE_ID);
        return id ? parseInt(id, 10) : 0;
      }
      getUserId() {
        const id = this.storage.getItem(LocalStorageContextAdapter_1.KEYS.USER_ID);
        return id ? parseInt(id, 10) : 0;
      }
      getSiteId() {
        const id = this.storage.getItem(LocalStorageContextAdapter_1.KEYS.SITE_ID);
        return id ? parseInt(id, 10) : null;
      }
      getDepartementId() {
        const id = this.storage.getItem(LocalStorageContextAdapter_1.KEYS.DEPARTEMENT_ID);
        return id ? parseInt(id, 10) : null;
      }
      getToken() {
        return this.storage.getItem(LocalStorageContextAdapter_1.KEYS.TOKEN);
      }
      isAuthenticated() {
        return !!this.getToken();
      }
      getPermissions() {
        const permissions = this.storage.getItem(LocalStorageContextAdapter_1.KEYS.PERMISSIONS);
        return permissions ? JSON.parse(permissions) : [];
      }
      hasPermission(permission) {
        return this.getPermissions().includes(permission);
      }
      getRoles() {
        const roles = this.storage.getItem(LocalStorageContextAdapter_1.KEYS.ROLES);
        return roles ? JSON.parse(roles) : [];
      }
      hasRole(role) {
        return this.getRoles().includes(role);
      }
      getLanguage() {
        return this.storage.getItem(LocalStorageContextAdapter_1.KEYS.LANGUAGE) || "fr";
      }
      setSocieteId(id) {
        this.storage.setItem(LocalStorageContextAdapter_1.KEYS.SOCIETE_ID, id.toString());
      }
      setUserId(id) {
        this.storage.setItem(LocalStorageContextAdapter_1.KEYS.USER_ID, id.toString());
      }
      setToken(token) {
        this.storage.setItem(LocalStorageContextAdapter_1.KEYS.TOKEN, token);
      }
      clear() {
        Object.values(LocalStorageContextAdapter_1.KEYS).forEach((key) => {
          this.storage.removeItem(key);
        });
      }
    }, LocalStorageContextAdapter_1 = _a, __publicField(_a, "KEYS", {
      SOCIETE_ID: "societeId",
      USER_ID: "userId",
      SITE_ID: "siteId",
      DEPARTEMENT_ID: "departementId",
      TOKEN: "authToken",
      PERMISSIONS: "permissions",
      ROLES: "roles",
      LANGUAGE: "language"
    }), __publicField(_a, "ctorParameters", () => [
      { type: Storage, decorators: [{ type: Inject, args: ["LOCAL_STORAGE"] }] }
    ]), _a);
    LocalStorageContextAdapter = LocalStorageContextAdapter_1 = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], LocalStorageContextAdapter);
  }
});

// src/app/modules/_shared/_shared.module.ts
var SharedModule;
var init_shared_module = __esm({
  "src/app/modules/_shared/_shared.module.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_common();
    SharedModule = class SharedModule2 {
    };
    SharedModule = __decorate([
      NgModule({
        declarations: [],
        imports: [
          CommonModule
        ],
        providers: [
          // Use Cases are already provided in root via @Injectable({providedIn: 'root'})
          // No need to provide them here again
        ],
        exports: [
          // Export types and classes that other modules might need
        ]
      })
    ], SharedModule);
  }
});

// src/app/modules/_shared/index.ts
var init_shared = __esm({
  "src/app/modules/_shared/index.ts"() {
    "use strict";
    init_value_object_base();
    init_user_entity();
    init_tenant_entity();
    init_permission_entity();
    init_money_vo();
    init_date_range_vo();
    init_value_object_base();
    init_email_vo();
    init_phone_number_vo();
    init_user_name_vo();
    init_user_status_vo();
    init_result_type();
    init_domain_error();
    init_domain_error();
    init_user_repository();
    init_tenant_repository();
    init_application_context_port();
    init_authenticate_user_use_case();
    init_local_storage_context_adapter();
    init_user_mapper();
    init_shared_module();
  }
});

export {
  LocalStorageContextAdapter,
  init_local_storage_context_adapter,
  init_shared
};
//# sourceMappingURL=chunk-LUFAATTA.js.map
