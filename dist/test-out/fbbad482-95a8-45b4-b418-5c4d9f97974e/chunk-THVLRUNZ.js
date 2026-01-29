import {
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

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

// src/app/modules/_shared/domain/errors/domain.error.ts
var DomainError, ValidationError, NotFoundError, AlreadyExistsError, UnauthorizedError, BusinessRuleViolationError, InfrastructureError;
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
    ValidationError = class extends DomainError {
      field;
      constructor(message, field) {
        super(message, "VALIDATION_ERROR");
        this.field = field;
      }
      toJSON() {
        return __spreadProps(__spreadValues({}, super.toJSON()), {
          field: this.field
        });
      }
    };
    NotFoundError = class extends DomainError {
      constructor(entityName, identifier) {
        super(`${entityName} avec l'identifiant ${identifier} introuvable`, "NOT_FOUND");
      }
    };
    AlreadyExistsError = class extends DomainError {
      constructor(entityName, field, value) {
        super(`${entityName} avec ${field} '${value}' existe d\xE9j\xE0`, "ALREADY_EXISTS");
      }
    };
    UnauthorizedError = class extends DomainError {
      constructor(action) {
        super(`Non autoris\xE9 \xE0 effectuer l'action: ${action}`, "UNAUTHORIZED");
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

export {
  Result,
  init_result_type,
  ValidationError,
  NotFoundError,
  AlreadyExistsError,
  UnauthorizedError,
  BusinessRuleViolationError,
  InfrastructureError,
  init_domain_error
};
//# sourceMappingURL=chunk-THVLRUNZ.js.map
