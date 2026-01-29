import {
  DeleteUserUseCaseImpl,
  init_delete_user_use_case
} from "./chunk-LM2IENTT.js";
import "./chunk-KEZTFTN3.js";
import {
  init_shared
} from "./chunk-LUFAATTA.js";
import "./chunk-MU4ENZR6.js";
import "./chunk-KZXJWDFC.js";
import "./chunk-DJVIHOKC.js";
import "./chunk-4XZF5GTU.js";
import "./chunk-PRPNIB7R.js";
import "./chunk-N3H5GIVS.js";
import {
  BusinessRuleViolationError,
  NotFoundError
} from "./chunk-THVLRUNZ.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS
} from "./chunk-FWMZPJRE.js";

// src/app/modules/manage-users/application/use-cases/delete-user.use-case.spec.ts
var require_delete_user_use_case_spec = __commonJS({
  "src/app/modules/manage-users/application/use-cases/delete-user.use-case.spec.ts"(exports) {
    init_delete_user_use_case();
    init_shared();
    describe("DeleteUserUseCase", () => {
      let useCase;
      let mockRepository;
      beforeEach(() => {
        mockRepository = jasmine.createSpyObj("UserRepository", ["findById", "delete", "deleteUser"]);
        useCase = new DeleteUserUseCaseImpl(mockRepository);
      });
      describe("execute", () => {
        it("should delete user successfully", () => __async(null, null, function* () {
          const userId = 2;
          const currentUserId = 1;
          const mockUser = {
            id: userId,
            nomPrenom: "John Doe"
          };
          mockRepository.findById.and.returnValue(Promise.resolve(mockUser));
          mockRepository.delete.and.returnValue(Promise.resolve());
          const result = yield useCase.execute(userId, currentUserId);
          expect(result.isSuccess).toBe(true);
          expect(mockRepository.findById).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
          expect(mockRepository.delete).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
        }));
        it("should fail if deleting self", () => __async(null, null, function* () {
          const userId = 1;
          const currentUserId = 1;
          const result = yield useCase.execute(userId, currentUserId);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(BusinessRuleViolationError);
          expect(mockRepository.delete).not.toHaveBeenCalled();
        }));
        it("should fail when user not found", () => __async(null, null, function* () {
          const userId = 999;
          const currentUserId = 1;
          mockRepository.findById.and.returnValue(Promise.resolve(null));
          const result = yield useCase.execute(userId, currentUserId);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(NotFoundError);
          expect(mockRepository.delete).not.toHaveBeenCalled();
        }));
      });
    });
  }
});
export default require_delete_user_use_case_spec();
//# sourceMappingURL=spec-app-modules-manage-users-application-use-cases-delete-user.use-case.spec.js.map
