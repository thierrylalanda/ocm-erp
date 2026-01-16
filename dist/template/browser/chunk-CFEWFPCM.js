import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  AuthService
} from "./chunk-U2VXEBUE.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-PQZYD7EB.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U4CEU3KS.js";

// src/app/modules/setting/application/services/departement.service.ts
var DepartementService = class _DepartementService {
  http;
  authService;
  apiUrl = `${environment.api}hierarchie/departements`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  /**
   * Récupère la liste paginée des départements
   * @param societeId ID de la société (optionnel)
   * @param page Numéro de page (0-based)
   * @param size Taille de la page
   * @param search Terme de recherche
   * @param actif Filtre par statut
   */
  getDepartements(societeId, page = 0, size = 10, search, actif) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (societeId) {
      params = params.set("societeId", societeId.toString());
    }
    if (search) {
      params = params.set("search", search);
    }
    if (actif !== void 0) {
      params = params.set("actif", actif.toString());
    }
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Récupère un département par son ID
   * @param id ID du département
   */
  getDepartement(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /**
   * Crée un nouveau département
   * @param dto Données du département
   */
  createDepartement(dto) {
    return this.http.post(this.apiUrl, dto);
  }
  /**
   * Met à jour un département existant
   * @param id ID du département
   * @param dto Données mises à jour
   */
  updateDepartement(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }
  /**
   * Supprime un département
   * @param id ID du département
   */
  deleteDepartement(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /**
   * Active ou désactive un département
   * @param id ID du département
   * @param actif Nouveau statut
   */
  toggleDepartementStatus(id, actif) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { actif });
  }
  /**
   * Récupère les statistiques des départements
   * @param societeId ID de la société (optionnel)
   */
  getDepartementStatistics(societeId) {
    let params = new HttpParams();
    if (societeId) {
      params = params.set("societeId", societeId.toString());
    }
    return this.http.get(`${this.apiUrl}/statistics`, { params });
  }
  /**
   * Récupère la liste de toutes les sociétés (pour les dropdowns)
   * Note: Cette méthode dépend de l'API des sociétés
   */
  getSocietes() {
    return this.http.get(`${environment.api}societes`);
  }
  /**
  * Récupère la société de l'utilisateur connecté
  */
  getCurrentUserSocieteId() {
    const user = this.authService.user;
    return user?.societeId || null;
  }
  static \u0275fac = function DepartementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartementService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartementService, factory: _DepartementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  DepartementService
};
//# sourceMappingURL=chunk-CFEWFPCM.js.map
