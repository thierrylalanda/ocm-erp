import {
  UserName,
  init_user_name_vo
} from "./chunk-4XZF5GTU.js";
import "./chunk-N3H5GIVS.js";
import {
  ValidationError,
  init_domain_error
} from "./chunk-THVLRUNZ.js";
import "./chunk-FWMZPJRE.js";

// src/app/modules/_shared/domain/value-objects/user-name.vo.spec.ts
init_user_name_vo();
init_domain_error();
describe("UserName Value Object", () => {
  describe("create", () => {
    it("should create valid username", () => {
      const result = UserName.create("john.doe");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("john.doe");
    });
    it("should normalize to lowercase", () => {
      const result = UserName.create("John.Doe");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("john.doe");
    });
    it("should accept alphanumeric characters", () => {
      const result = UserName.create("user123");
      expect(result.isSuccess).toBe(true);
    });
    it("should accept dots", () => {
      const result = UserName.create("john.doe");
      expect(result.isSuccess).toBe(true);
    });
    it("should accept underscores", () => {
      const result = UserName.create("john_doe");
      expect(result.isSuccess).toBe(true);
    });
    it("should accept hyphens", () => {
      const result = UserName.create("john-doe");
      expect(result.isSuccess).toBe(true);
    });
    it("should fail for empty username", () => {
      const result = UserName.create("");
      expect(result.isFailure).toBe(true);
      expect(result.error).toBeInstanceOf(ValidationError);
      expect(result.error.message).toContain("requis");
    });
    it("should fail for too short username", () => {
      const result = UserName.create("ab");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("trop court");
    });
    it("should fail for too long username", () => {
      const result = UserName.create("a".repeat(31));
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("trop long");
    });
    it("should fail for invalid characters", () => {
      const result = UserName.create("john@doe");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("invalide");
    });
    it("should fail for spaces", () => {
      const result = UserName.create("john doe");
      expect(result.isFailure).toBe(true);
    });
    it("should fail for reserved names", () => {
      const reservedNames = ["admin", "root", "system", "administrator", "test"];
      reservedNames.forEach((name) => {
        const result = UserName.create(name);
        expect(result.isFailure).toBe(true);
        expect(result.error.message).toContain("r\xE9serv\xE9");
      });
    });
    it("should fail for consecutive special characters", () => {
      const result = UserName.create("john..doe");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("cons\xE9cutifs");
    });
    it("should fail for starting with special character", () => {
      const result = UserName.create(".johndoe");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("commencer");
    });
    it("should fail for ending with special character", () => {
      const result = UserName.create("johndoe.");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("finir");
    });
    it("should trim whitespace", () => {
      const result = UserName.create("  johndoe  ");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("johndoe");
    });
  });
  describe("isAlphanumericOnly", () => {
    it("should return true for alphanumeric only", () => {
      const username = UserName.create("user123").value;
      expect(username.isAlphanumericOnly()).toBe(true);
    });
    it("should return false for username with special characters", () => {
      const username = UserName.create("user.name").value;
      expect(username.isAlphanumericOnly()).toBe(false);
    });
  });
  describe("getDisplayName", () => {
    it("should capitalize first letter", () => {
      const username = UserName.create("johndoe").value;
      expect(username.getDisplayName()).toBe("Johndoe");
    });
    it("should handle already capitalized", () => {
      const username = UserName.create("JohnDoe").value;
      expect(username.getDisplayName()).toBe("Johndoe");
    });
  });
  describe("equals", () => {
    it("should return true for same username", () => {
      const username1 = UserName.create("johndoe").value;
      const username2 = UserName.create("johndoe").value;
      expect(username1.equals(username2)).toBe(true);
    });
    it("should return true for same username with different case", () => {
      const username1 = UserName.create("johndoe").value;
      const username2 = UserName.create("JohnDoe").value;
      expect(username1.equals(username2)).toBe(true);
    });
    it("should return false for different usernames", () => {
      const username1 = UserName.create("johndoe").value;
      const username2 = UserName.create("janedoe").value;
      expect(username1.equals(username2)).toBe(false);
    });
  });
  describe("edge cases", () => {
    it("should handle minimum length username", () => {
      const result = UserName.create("abc");
      expect(result.isSuccess).toBe(true);
    });
    it("should handle maximum length username", () => {
      const result = UserName.create("a".repeat(30));
      expect(result.isSuccess).toBe(true);
    });
    it("should handle mixed case reserved names", () => {
      const result = UserName.create("Admin");
      expect(result.isFailure).toBe(true);
      expect(result.error.message).toContain("r\xE9serv\xE9");
    });
  });
});
//# sourceMappingURL=spec-app-modules-_shared-domain-value-objects-user-name.vo.spec.js.map
