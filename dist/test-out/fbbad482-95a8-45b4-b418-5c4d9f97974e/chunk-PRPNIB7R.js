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

// src/app/modules/_shared/domain/value-objects/user-status.vo.ts
var UserStatus;
var init_user_status_vo = __esm({
  "src/app/modules/_shared/domain/value-objects/user-status.vo.ts"() {
    "use strict";
    init_value_object_base();
    init_result_type();
    init_domain_error();
    UserStatus = class _UserStatus extends ValueObject {
      constructor(value) {
        super(value);
      }
      /**
       * Crée un nouveau UserStatus
       * @param status Statut à valider
       * @returns Result contenant le UserStatus ou une erreur de validation
       */
      static create(status) {
        const validStatuses = ["ACTIF", "INACTIF", "SUSPENDU", "BLOQUE"];
        if (!status || status.trim().length === 0) {
          return Result.fail(new ValidationError("Le statut ne peut pas \xEAtre vide"));
        }
        const upperStatus = status.toUpperCase();
        if (!validStatuses.includes(upperStatus)) {
          return Result.fail(new ValidationError(`Statut invalide: "${status}". Valeurs accept\xE9es: ${validStatuses.join(", ")}`));
        }
        return Result.ok(new _UserStatus(upperStatus));
      }
      /**
       * Vérifie si l'utilisateur est actif
       */
      isActive() {
        return this.value === "ACTIF";
      }
      /**
       * Vérifie si l'utilisateur est inactif
       */
      isInactive() {
        return this.value === "INACTIF";
      }
      /**
       * Vérifie si l'utilisateur est suspendu
       */
      isSuspended() {
        return this.value === "SUSPENDU";
      }
      /**
       * Vérifie si l'utilisateur est bloqué
       */
      isBlocked() {
        return this.value === "BLOQUE";
      }
      /**
       * Retourne la représentation string du statut
       */
      toString() {
        return this.value;
      }
      /**
       * Retourne une représentation lisible du statut
       */
      toDisplayString() {
        const displayMap = {
          "ACTIF": "Actif",
          "INACTIF": "Inactif",
          "SUSPENDU": "Suspendu",
          "BLOQUE": "Bloqu\xE9"
        };
        return displayMap[this.value];
      }
    };
  }
});

export {
  UserStatus,
  init_user_status_vo
};
//# sourceMappingURL=chunk-PRPNIB7R.js.map
