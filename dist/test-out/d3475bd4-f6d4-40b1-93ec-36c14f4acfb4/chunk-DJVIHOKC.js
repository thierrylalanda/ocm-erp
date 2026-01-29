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

// src/app/modules/_shared/domain/value-objects/phone-number.vo.ts
var PhoneNumber;
var init_phone_number_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/phone-number.vo.ts"() {
    "use strict";
    init_value_object_base();
    init_result_type();
    init_domain_error();
    PhoneNumber = class _PhoneNumber extends ValueObject {
      static PHONE_REGEX = /^[\d\s\-\+\(\)]{8,20}$/;
      static MIN_LENGTH = 8;
      static MAX_LENGTH = 20;
      constructor(value) {
        super(value);
      }
      /**
       * Create a PhoneNumber value object
       *
       * @param phone - The phone number string to validate
       * @returns Result with PhoneNumber or ValidationError
       */
      static create(phone) {
        if (!phone || phone.trim().length === 0) {
          return Result.fail(new ValidationError("Num\xE9ro de t\xE9l\xE9phone requis", "telephone"));
        }
        const normalizedPhone = phone.trim();
        if (normalizedPhone.length < this.MIN_LENGTH) {
          return Result.fail(new ValidationError(`Num\xE9ro de t\xE9l\xE9phone trop court (min ${this.MIN_LENGTH} caract\xE8res)`, "telephone"));
        }
        if (normalizedPhone.length > this.MAX_LENGTH) {
          return Result.fail(new ValidationError(`Num\xE9ro de t\xE9l\xE9phone trop long (max ${this.MAX_LENGTH} caract\xE8res)`, "telephone"));
        }
        if (!this.PHONE_REGEX.test(normalizedPhone)) {
          return Result.fail(new ValidationError("Format de num\xE9ro de t\xE9l\xE9phone invalide", "telephone"));
        }
        return Result.ok(new _PhoneNumber(normalizedPhone));
      }
      /**
       * Get formatted phone number
       * @example '+237690123456' -> '+237 690 123 456'
       */
      getFormatted() {
        const cleaned = this.value.replace(/[^\d+]/g, "");
        if (cleaned.startsWith("+")) {
          const countryCode = cleaned.substring(0, 4);
          const rest = cleaned.substring(4);
          return `${countryCode} ${rest.match(/.{1,3}/g)?.join(" ") || rest}`;
        }
        return cleaned.match(/.{1,3}/g)?.join(" ") || cleaned;
      }
      /**
       * Get digits only (no formatting)
       */
      getDigitsOnly() {
        return this.value.replace(/\D/g, "");
      }
      /**
       * Check if phone number is international (starts with +)
       */
      isInternational() {
        return this.value.startsWith("+");
      }
      /**
       * Get country code (if international)
       */
      getCountryCode() {
        if (!this.isInternational()) {
          return null;
        }
        const match = this.value.match(/^\+(\d{1,4})/);
        return match ? match[1] : null;
      }
    };
  }
});

export {
  PhoneNumber,
  init_phone_number_vo
};
//# sourceMappingURL=chunk-DJVIHOKC.js.map
