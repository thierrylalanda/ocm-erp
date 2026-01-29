import {
  DeactivateUserUseCaseImpl,
  init_deactivate_user_use_case
} from "./chunk-ZQAKKL5M.js";
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
  NotFoundError
} from "./chunk-THVLRUNZ.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// src/app/modules/manage-users/application/use-cases/deactivate-user.use-case.spec.ts
var require_deactivate_user_use_case_spec = __commonJS({
  "src/app/modules/manage-users/application/use-cases/deactivate-user.use-case.spec.ts"(exports) {
    init_deactivate_user_use_case();
    init_shared();
    describe("DeactivateUserUseCase", () => {
      let useCase;
      let mockRepository;
      beforeEach(() => {
        mockRepository = jasmine.createSpyObj("UserRepository", ["findById", "deactivateUser"]);
        useCase = new DeactivateUserUseCaseImpl(mockRepository);
      });
      describe("execute", () => {
        it("should deactivate user successfully", () => __async(null, null, function* () {
          const userId = 1;
          const mockUser = {
            id: userId,
            nomPrenom: "John Doe",
            email: "john@example.com",
            statut: "ACTIF"
          };
          mockRepository.findById.and.returnValue(Promise.resolve(mockUser));
          mockRepository.deactivateUser.and.returnValue(Promise.resolve(__spreadProps(__spreadValues({}, mockUser), { statut: "INACTIF" })));
          const result = yield useCase.execute(userId);
          expect(result.isSuccess).toBe(true);
          expect(mockRepository.findById).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
          expect(mockRepository.deactivateUser).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
        }));
        it("should fail when user not found", () => __async(null, null, function* () {
          const userId = 999;
          mockRepository.findById.and.returnValue(Promise.resolve(null));
          const result = yield useCase.execute(userId);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(NotFoundError);
          expect(mockRepository.deactivateUser).not.toHaveBeenCalled();
        }));
      });
    });
  }
});
export default require_deactivate_user_use_case_spec();
//# sourceMappingURL=spec-app-modules-manage-users-application-use-cases-deactivate-user.use-case.spec.js.map
