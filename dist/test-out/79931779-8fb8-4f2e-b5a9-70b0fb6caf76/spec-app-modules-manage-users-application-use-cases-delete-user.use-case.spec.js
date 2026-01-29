import {
  BusinessRuleViolationError,
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
  __esm
} from "./chunk-BFXOQ5QK.js";

// src/app/modules/manage-users/application/use-cases/delete-user.use-case.ts
var DeleteUserUseCaseImpl, DELETE_USER_USE_CASE;
var init_delete_user_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/delete-user.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_user_repository();
    init_shared();
    DeleteUserUseCaseImpl = class DeleteUserUseCaseImpl2 {
      userRepository;
      constructor(userRepository) {
        this.userRepository = userRepository;
      }
      execute(userId, currentUserId) {
        return __async(this, null, function* () {
          try {
            if (userId === currentUserId) {
              return Result.fail(new BusinessRuleViolationError("Vous ne pouvez pas supprimer votre propre compte"));
            }
            const user = yield this.userRepository.findById({ value: userId });
            if (!user) {
              return Result.fail(new NotFoundError("Utilisateur", userId));
            }
            yield this.userRepository.delete({ value: userId });
            return Result.ok(void 0);
          } catch (error) {
            return Result.fail(new InfrastructureError(`Erreur lors de la suppression de l'utilisateur: ${error instanceof Error ? error.message : "Erreur inconnue"}`, error instanceof Error ? error : void 0));
          }
        });
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [USER_REPOSITORY] }] }
      ];
    };
    DeleteUserUseCaseImpl = __decorate([
      Injectable()
    ], DeleteUserUseCaseImpl);
    DELETE_USER_USE_CASE = new InjectionToken("DeleteUserUseCase");
  }
});

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
