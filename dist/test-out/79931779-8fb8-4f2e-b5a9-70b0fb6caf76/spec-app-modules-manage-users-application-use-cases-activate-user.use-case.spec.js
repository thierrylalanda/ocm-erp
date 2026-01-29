import {
  InfrastructureError,
  NotFoundError,
  Result,
  USER_REPOSITORY,
  __decorate,
  init_shared,
  init_tslib_es6,
  init_user_repository
} from "./chunk-GIF4VLBP.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  init_core
} from "./chunk-CKWTLFXU.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-BFXOQ5QK.js";

// src/app/modules/manage-users/application/use-cases/activate-user.use-case.ts
var ActivateUserUseCaseImpl, ACTIVATE_USER_USE_CASE;
var init_activate_user_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/activate-user.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_user_repository();
    init_shared();
    ActivateUserUseCaseImpl = class ActivateUserUseCaseImpl2 {
      userRepository;
      constructor(userRepository) {
        this.userRepository = userRepository;
      }
      execute(userId) {
        return __async(this, null, function* () {
          try {
            const user = yield this.userRepository.findById({ value: userId });
            if (!user) {
              return Result.fail(new NotFoundError("Utilisateur", userId));
            }
            yield this.userRepository.activateUser({ value: userId });
            return Result.ok(void 0);
          } catch (error) {
            return Result.fail(new InfrastructureError(`Erreur lors de l'activation de l'utilisateur: ${error instanceof Error ? error.message : "Erreur inconnue"}`, error instanceof Error ? error : void 0));
          }
        });
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [USER_REPOSITORY] }] }
      ];
    };
    ActivateUserUseCaseImpl = __decorate([
      Injectable()
    ], ActivateUserUseCaseImpl);
    ACTIVATE_USER_USE_CASE = new InjectionToken("ActivateUserUseCase");
  }
});

// src/app/modules/manage-users/application/use-cases/activate-user.use-case.spec.ts
var require_activate_user_use_case_spec = __commonJS({
  "src/app/modules/manage-users/application/use-cases/activate-user.use-case.spec.ts"(exports) {
    init_activate_user_use_case();
    init_shared();
    describe("ActivateUserUseCase", () => {
      let useCase;
      let mockRepository;
      beforeEach(() => {
        mockRepository = jasmine.createSpyObj("UserRepository", ["findById", "activateUser"]);
        useCase = new ActivateUserUseCaseImpl(mockRepository);
      });
      describe("execute", () => {
        it("should activate user successfully", () => __async(null, null, function* () {
          const userId = 1;
          const mockUser = {
            id: userId,
            nomPrenom: "John Doe",
            email: "john@example.com",
            statut: "INACTIF"
          };
          mockRepository.findById.and.returnValue(Promise.resolve(mockUser));
          mockRepository.activateUser.and.returnValue(Promise.resolve(__spreadProps(__spreadValues({}, mockUser), { statut: "ACTIF" })));
          const result = yield useCase.execute(userId);
          expect(result.isSuccess).toBe(true);
          expect(mockRepository.findById).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
          expect(mockRepository.activateUser).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
        }));
        it("should fail when user not found", () => __async(null, null, function* () {
          const userId = 999;
          mockRepository.findById.and.returnValue(Promise.resolve(null));
          const result = yield useCase.execute(userId);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(NotFoundError);
          expect(result.error.message).toContain("999");
          expect(mockRepository.activateUser).not.toHaveBeenCalled();
        }));
      });
    });
  }
});
export default require_activate_user_use_case_spec();
//# sourceMappingURL=spec-app-modules-manage-users-application-use-cases-activate-user.use-case.spec.js.map
