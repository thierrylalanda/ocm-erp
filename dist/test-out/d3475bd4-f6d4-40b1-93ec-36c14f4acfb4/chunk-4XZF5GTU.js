import {
  ValueObject,
  init_value_object_base
} from "./chunk-N3H5GIVS.js";
import {
  Result,
  ValidationError,
  init_domain_error,
  init_result_type
} from "./chunk-THVLRUNZ.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// src/app/modules/_shared/domain/value-objects/user-name.vo.ts
var UserName;
var init_user_name_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/user-name.vo.ts"() {
    "use strict";
    init_value_object_base();
    init_result_type();
    init_domain_error();
    UserName = class _UserName extends ValueObject {
      static USERNAME_REGEX = /^[a-zA-Z0-9._-]{3,30}$/;
      static MIN_LENGTH = 3;
      static MAX_LENGTH = 30;
      static RESERVED_NAMES = [
        "admin",
        "administrator",
        "root",
        "system",
        "superuser",
        "test",
        "demo",
        "guest",
        "anonymous",
        "null",
        "undefined"
      ];
      constructor(value) {
        super(value);
      }
      /**
       * Create a UserName value object
       *
       * @param username - The username string to validate
       * @returns Result with UserName or ValidationError
       */
      static create(username) {
        if (!username || username.trim().length === 0) {
          return Result.fail(new ValidationError("Nom d'utilisateur requis", "userName"));
        }
        const normalizedUsername = username.trim().toLowerCase();
        if (normalizedUsername.length < this.MIN_LENGTH) {
          return Result.fail(new ValidationError(`Nom d'utilisateur trop court (min ${this.MIN_LENGTH} caract\xE8res)`, "userName"));
        }
        if (normalizedUsername.length > this.MAX_LENGTH) {
          return Result.fail(new ValidationError(`Nom d'utilisateur trop long (max ${this.MAX_LENGTH} caract\xE8res)`, "userName"));
        }
        if (!this.USERNAME_REGEX.test(normalizedUsername)) {
          return Result.fail(new ValidationError("Nom d'utilisateur invalide (lettres, chiffres, ., _, - uniquement)", "userName"));
        }
        if (this.RESERVED_NAMES.includes(normalizedUsername)) {
          return Result.fail(new ValidationError("Ce nom d'utilisateur est r\xE9serv\xE9", "userName"));
        }
        if (/[._-]{2,}/.test(normalizedUsername)) {
          return Result.fail(new ValidationError("Le nom d'utilisateur ne peut pas contenir de caract\xE8res sp\xE9ciaux cons\xE9cutifs", "userName"));
        }
        if (/^[._-]|[._-]$/.test(normalizedUsername)) {
          return Result.fail(new ValidationError("Le nom d'utilisateur ne peut pas commencer ou finir par un caract\xE8re sp\xE9cial", "userName"));
        }
        return Result.ok(new _UserName(normalizedUsername));
      }
      /**
       * Check if username contains only alphanumeric characters
       */
      isAlphanumericOnly() {
        return /^[a-zA-Z0-9]+$/.test(this.value);
      }
      /**
       * Get display name (capitalize first letter)
       */
      getDisplayName() {
        return this.value.charAt(0).toUpperCase() + this.value.slice(1);
      }
    };
  }
});

export {
  UserName,
  init_user_name_vo
};
//# sourceMappingURL=chunk-4XZF5GTU.js.map
