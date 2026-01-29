import {
  USER_REPOSITORY,
  init_user_repository
} from "./chunk-KEZTFTN3.js";
import {
  init_shared
} from "./chunk-LUFAATTA.js";
import {
  InfrastructureError,
  NotFoundError,
  Result
} from "./chunk-THVLRUNZ.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __esm
} from "./chunk-FWMZPJRE.js";

// src/app/modules/manage-users/application/use-cases/deactivate-user.use-case.ts
var DeactivateUserUseCaseImpl, DEACTIVATE_USER_USE_CASE;
var init_deactivate_user_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/deactivate-user.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_user_repository();
    init_shared();
    DeactivateUserUseCaseImpl = class DeactivateUserUseCaseImpl2 {
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
            yield this.userRepository.deactivateUser({ value: userId });
            return Result.ok(void 0);
          } catch (error) {
            return Result.fail(new InfrastructureError(`Erreur lors de la d\xE9sactivation de l'utilisateur: ${error instanceof Error ? error.message : "Erreur inconnue"}`, error instanceof Error ? error : void 0));
          }
        });
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [USER_REPOSITORY] }] }
      ];
    };
    DeactivateUserUseCaseImpl = __decorate([
      Injectable()
    ], DeactivateUserUseCaseImpl);
    DEACTIVATE_USER_USE_CASE = new InjectionToken("DeactivateUserUseCase");
  }
});

export {
  DeactivateUserUseCaseImpl,
  DEACTIVATE_USER_USE_CASE,
  init_deactivate_user_use_case
};
//# sourceMappingURL=chunk-ZQAKKL5M.js.map
