import {
  CommonModule,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  init_common,
  init_core
} from "./chunk-CKWTLFXU.js";
import {
  __async,
  __esm,
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-BFXOQ5QK.js";

// src/app/modules/_shared/domain/errors/domain.error.ts
var DomainError, NotFoundError, BusinessRuleViolationError, InfrastructureError;
var init_domain_error = __esm({
  "src/app/modules/_shared/domain/errors/domain.error.ts"() {
    "use strict";
    DomainError = class extends Error {
      timestamp;
      code;
      constructor(message, code = "DOMAIN_ERROR") {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.timestamp = /* @__PURE__ */ new Date();
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      }
      /**
       * Convert error to JSON for logging/API responses
       */
      toJSON() {
        return {
          name: this.name,
          code: this.code,
          message: this.message,
          timestamp: this.timestamp.toISOString()
        };
      }
    };
    NotFoundError = class extends DomainError {
      constructor(entityName, identifier) {
        super(`${entityName} avec l'identifiant ${identifier} introuvable`, "NOT_FOUND");
      }
    };
    BusinessRuleViolationError = class extends DomainError {
      constructor(rule) {
        super(`Violation de r\xE8gle m\xE9tier: ${rule}`, "BUSINESS_RULE_VIOLATION");
      }
    };
    InfrastructureError = class extends DomainError {
      originalError;
      constructor(message, originalError) {
        super(message, "INFRASTRUCTURE_ERROR");
        this.originalError = originalError;
      }
      toJSON() {
        return __spreadProps(__spreadValues({}, super.toJSON()), {
          originalError: this.originalError?.message
        });
      }
    };
  }
});

// src/app/modules/_shared/domain/base/value-object.base.ts
var init_value_object_base = __esm({
  "src/app/modules/_shared/domain/base/value-object.base.ts"() {
    "use strict";
  }
});

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

// src/app/modules/_shared/domain/types/result.type.ts
var Result;
var init_result_type = __esm({
  "src/app/modules/_shared/domain/types/result.type.ts"() {
    "use strict";
    Result = class _Result {
      _isSuccess;
      _value;
      _error;
      constructor(_isSuccess, _value, _error) {
        this._isSuccess = _isSuccess;
        this._value = _value;
        this._error = _error;
        Object.freeze(this);
      }
      /**
       * Create a successful result
       */
      static ok(value) {
        return new _Result(true, value, void 0);
      }
      /**
       * Create a failed result
       */
      static fail(error) {
        return new _Result(false, void 0, error);
      }
      /**
       * Check if the result is successful
       */
      get isSuccess() {
        return this._isSuccess;
      }
      /**
       * Check if the result is a failure
       */
      get isFailure() {
        return !this._isSuccess;
      }
      /**
       * Get the value (only available if success)
       * @throws Error if called on a failure result
       */
      get value() {
        if (!this._isSuccess) {
          throw new Error("Cannot get value from a failed result");
        }
        return this._value;
      }
      /**
       * Get the error (only available if failure)
       * @throws Error if called on a success result
       */
      get error() {
        if (this._isSuccess) {
          throw new Error("Cannot get error from a successful result");
        }
        return this._error;
      }
      /**
       * Get the value or a default value if failure
       */
      getValueOrDefault(defaultValue) {
        return this._isSuccess ? this._value : defaultValue;
      }
      /**
       * Get the value or null if failure
       */
      getValueOrNull() {
        return this._isSuccess ? this._value : null;
      }
      /**
       * Map the value to another type
       */
      map(fn) {
        if (this._isSuccess) {
          return _Result.ok(fn(this._value));
        }
        return _Result.fail(this._error);
      }
      /**
       * Map the error to another type
       */
      mapError(fn) {
        if (this._isSuccess) {
          return _Result.ok(this._value);
        }
        return _Result.fail(fn(this._error));
      }
      /**
       * Combine multiple results
       */
      static combine(results) {
        const values = [];
        for (const result of results) {
          if (result.isFailure) {
            return _Result.fail(result.error);
          }
          values.push(result.value);
        }
        return _Result.ok(values);
      }
    };
  }
});

// src/app/modules/_shared/domain/value-objects/email.vo.ts
var init_email_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/email.vo.ts"() {
    "use strict";
    init_value_object_base();
    init_result_type();
    init_domain_error();
  }
});

// src/app/modules/_shared/domain/value-objects/phone-number.vo.ts
var init_phone_number_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/phone-number.vo.ts"() {
    "use strict";
    init_value_object_base();
    init_result_type();
    init_domain_error();
  }
});

// src/app/modules/_shared/domain/value-objects/user-name.vo.ts
var init_user_name_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/user-name.vo.ts"() {
    "use strict";
    init_value_object_base();
    init_result_type();
    init_domain_error();
  }
});

// src/app/modules/_shared/domain/value-objects/user-status.vo.ts
var init_user_status_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/user-status.vo.ts"() {
    "use strict";
    init_value_object_base();
    init_result_type();
    init_domain_error();
  }
});

// node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
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

// src/app/modules/_shared/application/ports/application-context.port.ts
var APPLICATION_CONTEXT;
var init_application_context_port = __esm({
  "src/app/modules/_shared/application/ports/application-context.port.ts"() {
    "use strict";
    init_core();
    APPLICATION_CONTEXT = new InjectionToken("ApplicationContext");
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

// src/app/modules/manage-users/domain/repositories/user.repository.ts
var USER_REPOSITORY2;
var init_user_repository2 = __esm({
  "src/app/modules/manage-users/domain/repositories/user.repository.ts"() {
    "use strict";
    init_core();
    USER_REPOSITORY2 = new InjectionToken("UserRepository");
  }
});

export {
  __decorate,
  init_tslib_es6,
  USER_REPOSITORY2 as USER_REPOSITORY,
  init_user_repository2 as init_user_repository,
  Result,
  NotFoundError,
  BusinessRuleViolationError,
  InfrastructureError,
  init_shared
};
//# sourceMappingURL=chunk-GIF4VLBP.js.map
