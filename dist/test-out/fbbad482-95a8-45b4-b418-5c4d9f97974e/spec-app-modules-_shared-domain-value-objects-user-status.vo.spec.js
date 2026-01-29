import {
  UserStatus,
  init_user_status_vo
} from "./chunk-PRPNIB7R.js";
import "./chunk-N3H5GIVS.js";
import {
  ValidationError,
  init_domain_error
} from "./chunk-THVLRUNZ.js";
import "./chunk-FWMZPJRE.js";

// src/app/modules/_shared/domain/value-objects/user-status.vo.spec.ts
init_user_status_vo();
init_domain_error();
describe("UserStatus Value Object", () => {
  describe("create", () => {
    it("should create a valid ACTIF status", () => {
      const result = UserStatus.create("ACTIF");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("ACTIF");
    });
    it("should create a valid INACTIF status", () => {
      const result = UserStatus.create("INACTIF");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("INACTIF");
    });
    it("should create a valid SUSPENDU status", () => {
      const result = UserStatus.create("SUSPENDU");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("SUSPENDU");
    });
    it("should create a valid BLOQUE status", () => {
      const result = UserStatus.create("BLOQUE");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("BLOQUE");
    });
    it("should normalize status to uppercase", () => {
      const result = UserStatus.create("actif");
      expect(result.isSuccess).toBe(true);
      expect(result.value.getValue()).toBe("ACTIF");
    });
    it("should fail for empty status", () => {
      const result = UserStatus.create("");
      expect(result.isFailure).toBe(true);
      expect(result.error).toBeInstanceOf(ValidationError);
      expect(result.error.message).toContain("ne peut pas \xEAtre vide");
    });
    it("should fail for invalid status", () => {
      const result = UserStatus.create("INVALID");
      expect(result.isFailure).toBe(true);
      expect(result.error).toBeInstanceOf(ValidationError);
      expect(result.error.message).toContain("Statut invalide");
    });
  });
  describe("helper methods", () => {
    it("should correctly identify active status", () => {
      const status = UserStatus.create("ACTIF").value;
      expect(status.isActive()).toBe(true);
      expect(status.isInactive()).toBe(false);
      expect(status.isSuspended()).toBe(false);
      expect(status.isBlocked()).toBe(false);
    });
    it("should correctly identify inactive status", () => {
      const status = UserStatus.create("INACTIF").value;
      expect(status.isActive()).toBe(false);
      expect(status.isInactive()).toBe(true);
      expect(status.isSuspended()).toBe(false);
      expect(status.isBlocked()).toBe(false);
    });
    it("should correctly identify suspended status", () => {
      const status = UserStatus.create("SUSPENDU").value;
      expect(status.isActive()).toBe(false);
      expect(status.isInactive()).toBe(false);
      expect(status.isSuspended()).toBe(true);
      expect(status.isBlocked()).toBe(false);
    });
    it("should correctly identify blocked status", () => {
      const status = UserStatus.create("BLOQUE").value;
      expect(status.isActive()).toBe(false);
      expect(status.isInactive()).toBe(false);
      expect(status.isSuspended()).toBe(false);
      expect(status.isBlocked()).toBe(true);
    });
  });
  describe("toString and toDisplayString", () => {
    it("should return correct string representation", () => {
      const status = UserStatus.create("ACTIF").value;
      expect(status.toString()).toBe("ACTIF");
    });
    it("should return correct display string", () => {
      const status = UserStatus.create("ACTIF").value;
      expect(status.toDisplayString()).toBe("Actif");
    });
    it("should return correct display string for all statuses", () => {
      expect(UserStatus.create("ACTIF").value.toDisplayString()).toBe("Actif");
      expect(UserStatus.create("INACTIF").value.toDisplayString()).toBe("Inactif");
      expect(UserStatus.create("SUSPENDU").value.toDisplayString()).toBe("Suspendu");
      expect(UserStatus.create("BLOQUE").value.toDisplayString()).toBe("Bloqu\xE9");
    });
  });
  describe("equality", () => {
    it("should be equal for same status values", () => {
      const status1 = UserStatus.create("ACTIF").value;
      const status2 = UserStatus.create("ACTIF").value;
      expect(status1.equals(status2)).toBe(true);
    });
    it("should not be equal for different status values", () => {
      const status1 = UserStatus.create("ACTIF").value;
      const status2 = UserStatus.create("INACTIF").value;
      expect(status1.equals(status2)).toBe(false);
    });
  });
});
//# sourceMappingURL=spec-app-modules-_shared-domain-value-objects-user-status.vo.spec.js.map
