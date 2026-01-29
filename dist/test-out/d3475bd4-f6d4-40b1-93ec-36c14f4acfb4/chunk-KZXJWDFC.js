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

// src/app/modules/_shared/domain/value-objects/email.vo.ts
var Email;
var init_email_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/email.vo.ts"() {
    "use strict";
    init_value_object_base();
    init_result_type();
    init_domain_error();
    Email = class _Email extends ValueObject {
      static EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      static MAX_LENGTH = 255;
      constructor(value) {
        super(value);
      }
      /**
       * Create an Email value object
       *
       * @param email - The email string to validate
       * @returns Result with Email or ValidationError
       */
      static create(email) {
        if (!email || email.trim().length === 0) {
          return Result.fail(new ValidationError("Email requis", "email"));
        }
        const normalizedEmail = email.trim().toLowerCase();
        if (normalizedEmail.length > this.MAX_LENGTH) {
          return Result.fail(new ValidationError(`Email trop long (max ${this.MAX_LENGTH} caract\xE8res)`, "email"));
        }
        if (!this.EMAIL_REGEX.test(normalizedEmail)) {
          return Result.fail(new ValidationError("Format d'email invalide", "email"));
        }
        return Result.ok(new _Email(normalizedEmail));
      }
      /**
       * Get the domain part of the email
       * @example email.getDomain() // 'example.com'
       */
      getDomain() {
        return this.value.split("@")[1];
      }
      /**
       * Get the local part of the email
       * @example email.getLocalPart() // 'user'
       */
      getLocalPart() {
        return this.value.split("@")[0];
      }
      /**
       * Check if email is from a specific domain
       */
      isFromDomain(domain) {
        return this.getDomain().toLowerCase() === domain.toLowerCase();
      }
    };
  }
});

export {
  Email,
  init_email_vo
};
//# sourceMappingURL=chunk-KZXJWDFC.js.map
