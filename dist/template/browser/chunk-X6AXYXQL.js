import {
  USER_REPOSITORY,
  UserEntity,
  UserMapper
} from "./chunk-7E3NPM4I.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HKG6HBOI.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/modules/manage-users/application/use-cases/create-user.use-case.token.ts
var CREATE_USER_USE_CASE = new InjectionToken("CreateUserUseCase");

// src/app/modules/manage-users/application/use-cases/create-user.use-case.ts
var CreateUserUseCaseImpl = class _CreateUserUseCaseImpl {
  userRepository;
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  execute(dto) {
    return __async(this, null, function* () {
      this.validateCreateUserDto(dto);
      const existingByEmail = yield this.userRepository.findByEmail(dto.email);
      if (existingByEmail) {
      }
      const existingByUsername = yield this.userRepository.findByUsername(dto.userName);
      if (existingByUsername) {
      }
      const createCommand = UserMapper.toCreateCommand(dto);
      const userEntity = UserEntity.create(createCommand);
      const savedUser = yield this.userRepository.create(userEntity);
      return UserMapper.toResponseDto(savedUser);
    });
  }
  /**
   * Valide les données de création d'utilisateur
   */
  validateCreateUserDto(dto) {
    const errors = [];
    if (!dto.nomPrenom || dto.nomPrenom.trim().length === 0) {
      errors.push("Le nom et pr\xE9nom sont requis");
    }
    if (!dto.userName || dto.userName.trim().length === 0) {
      errors.push("Le nom d'utilisateur est requis");
    }
    if (!dto.email || !this.isValidEmail(dto.email)) {
      errors.push("Un email valide est requis");
    }
    if (!dto.password || dto.password.trim().length < 6) {
      errors.push("Le mot de passe doit contenir au moins 6 caract\xE8res");
    }
    if (!dto.pwdText || dto.pwdText.trim().length === 0) {
      errors.push("Le texte du mot de passe est requis");
    }
    if (!dto.societeId || dto.societeId <= 0) {
      errors.push("Un identifiant de soci\xE9t\xE9 valide est requis");
    }
    if (!dto.siteId || dto.siteId <= 0) {
      errors.push("Un identifiant de site valide est requis");
    }
    if (!dto.departementId || dto.departementId <= 0) {
      errors.push("Un identifiant de d\xE9partement valide est requis");
    }
    if (!dto.statut) {
      errors.push("Le statut est requis");
    }
    if (errors.length > 0) {
      throw new Error(`Validation \xE9chou\xE9e: ${errors.join(", ")}`);
    }
  }
  /**
   * Valide le format d'email
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  /**
   * Valide le numéro de téléphone
   */
  isValidPhoneNumber(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{8,20}$/;
    return phoneRegex.test(phone);
  }
  static \u0275fac = function CreateUserUseCaseImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateUserUseCaseImpl)(\u0275\u0275inject(USER_REPOSITORY));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreateUserUseCaseImpl, factory: _CreateUserUseCaseImpl.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateUserUseCaseImpl, [{
    type: Injectable
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [USER_REPOSITORY]
  }] }], null);
})();

export {
  CREATE_USER_USE_CASE,
  CreateUserUseCaseImpl
};
//# sourceMappingURL=chunk-X6AXYXQL.js.map
