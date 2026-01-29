import {
  PhoneNumber,
  init_phone_number_vo
} from "./chunk-DJVIHOKC.js";
import "./chunk-N3H5GIVS.js";
import {
  ValidationError,
  init_domain_error
} from "./chunk-THVLRUNZ.js";
import "./chunk-FWMZPJRE.js";

// src/app/modules/_shared/domain/value-objects/phone-number.vo.spec.ts
init_phone_number_vo();
init_domain_error();
describe("PhoneNumber Value Object", () => {
  describe("create", () => {
    it("should create valid phone number", () => {
      const result = PhoneNumber.create("+237690123456");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("+237690123456");
    });
    it("should create valid phone with spaces", () => {
      const result = PhoneNumber.create("+237 690 123 456");
      expect(result.isSuccess).toBe(true);
    });
    it("should create valid phone with hyphens", () => {
      const result = PhoneNumber.create("+237-690-123-456");
      expect(result.isSuccess).toBe(true);
    });
    it("should fail for empty phone", () => {
      const result = PhoneNumber.create("");
      expect(result.isFailure).toBe(true);
      expect(result.error).toBeInstanceOf(ValidationError);
      expect(result.error.message).toContain("requis");
    });
    it("should fail for too short phone", () => {
      const result = PhoneNumber.create("123");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("trop court");
    });
    it("should fail for too long phone", () => {
      const result = PhoneNumber.create("123456789012345678901");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("trop long");
    });
    it("should fail for invalid characters", () => {
      const result = PhoneNumber.create("abc123def456");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("invalide");
    });
    it("should trim whitespace", () => {
      const result = PhoneNumber.create("  +237690123456  ");
      expect(result.isSuccess).toBe(true);
    });
  });
  describe("getFormatted", () => {
    it("should format international number", () => {
      const phone = PhoneNumber.create("+237690123456").value;
      const formatted = phone.getFormatted();
      expect(formatted).toContain("+237");
      expect(formatted).toContain(" ");
    });
    it("should format local number", () => {
      const phone = PhoneNumber.create("690123456").value;
      const formatted = phone.getFormatted();
      expect(formatted).toContain(" ");
    });
    it("should handle already formatted number", () => {
      const phone = PhoneNumber.create("+237 690 123 456").value;
      const formatted = phone.getFormatted();
      expect(formatted).toBeTruthy();
    });
  });
  describe("getDigitsOnly", () => {
    it("should return only digits", () => {
      const phone = PhoneNumber.create("+237 690-123-456").value;
      expect(phone.getDigitsOnly()).toBe("237690123456");
    });
    it("should remove all non-digit characters", () => {
      const phone = PhoneNumber.create("+237 (690) 123-456").value;
      expect(phone.getDigitsOnly()).toBe("237690123456");
    });
  });
  describe("isInternational", () => {
    it("should return true for international number", () => {
      const phone = PhoneNumber.create("+237690123456").value;
      expect(phone.isInternational()).toBe(true);
    });
    it("should return false for local number", () => {
      const phone = PhoneNumber.create("690123456").value;
      expect(phone.isInternational()).toBe(false);
    });
  });
  describe("getCountryCode", () => {
    it("should return country code for international number", () => {
      const phone = PhoneNumber.create("+237690123456").value;
      expect(phone.getCountryCode()).toBe("237");
    });
    it("should return null for local number", () => {
      const phone = PhoneNumber.create("690123456").value;
      expect(phone.getCountryCode()).toBeNull();
    });
    it("should handle different country code lengths", () => {
      const phone1 = PhoneNumber.create("+1234567890").value;
      expect(phone1.getCountryCode()).toBeTruthy();
      const phone2 = PhoneNumber.create("+33123456789").value;
      expect(phone2.getCountryCode()).toBeTruthy();
    });
  });
  describe("equals", () => {
    it("should return true for same phone number", () => {
      const phone1 = PhoneNumber.create("+237690123456").value;
      const phone2 = PhoneNumber.create("+237690123456").value;
      expect(phone1.equals(phone2)).toBe(true);
    });
    it("should return false for different phone numbers", () => {
      const phone1 = PhoneNumber.create("+237690123456").value;
      const phone2 = PhoneNumber.create("+237690123457").value;
      expect(phone1.equals(phone2)).toBe(false);
    });
  });
});
//# sourceMappingURL=spec-app-modules-_shared-domain-value-objects-phone-number.vo.spec.js.map
