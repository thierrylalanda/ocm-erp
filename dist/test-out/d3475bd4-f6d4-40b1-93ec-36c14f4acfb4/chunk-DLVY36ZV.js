import {
  environment,
  init_environment
} from "./chunk-Q2A5OOYR.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-NSLU4XKJ.js";
import {
  HttpClient,
  HttpParams,
  init_http
} from "./chunk-H7VTUQ3B.js";
import {
  Injectable,
  __decorate,
  catchError,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  map,
  of,
  throwError
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// src/app/modules/setting/application/services/site.service.ts
var SiteService;
var init_site_service = __esm({
  "src/app/modules/setting/application/services/site.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_esm();
    init_operators();
    init_environment();
    init_auth_service();
    SiteService = class SiteService2 {
      http;
      authService;
      apiUrl = `${environment.api}hierarchie/sites`;
      constructor(http, authService) {
        this.http = http;
        this.authService = authService;
      }
      /**
       * Récupère la liste paginée des sites
       * @param params Paramètres de pagination et filtrage
       */
      getSites(params) {
        let httpParams = new HttpParams();
        if (params.page !== void 0) {
          httpParams = httpParams.set("page", params.page.toString());
        }
        if (params.size !== void 0) {
          httpParams = httpParams.set("size", params.size.toString());
        }
        if (params.societeId !== void 0) {
          httpParams = httpParams.set("societeId", params.societeId.toString());
        }
        if (params.type) {
          httpParams = httpParams.set("type", params.type);
        }
        if (params.actif !== void 0) {
          httpParams = httpParams.set("actif", params.actif.toString());
        }
        if (params.ville) {
          httpParams = httpParams.set("ville", params.ville);
        }
        if (params.pays) {
          httpParams = httpParams.set("pays", params.pays);
        }
        return this.http.get(this.apiUrl, { params: httpParams }).pipe(catchError((error) => this.handleError(error, "Erreur lors de la r\xE9cup\xE9ration des sites")));
      }
      /**
       * Récupère un site par son ID
       * @param id Identifiant du site
       */
      getSite(id) {
        return this.http.get(`${this.apiUrl}/${id}`).pipe(catchError((error) => this.handleError(error, "Site non trouv\xE9")));
      }
      /**
       * Crée un nouveau site
       * @param site Données du site à créer
       */
      createSite(site) {
        return this.http.post(this.apiUrl, site).pipe(catchError((error) => this.handleError(error, "Erreur lors de la cr\xE9ation du site")));
      }
      /**
       * Met à jour un site existant
       * @param id Identifiant du site
       * @param site Données du site à mettre à jour
       */
      updateSite(id, site) {
        return this.http.put(`${this.apiUrl}/${id}`, site).pipe(catchError((error) => this.handleError(error, "Erreur lors de la mise \xE0 jour du site")));
      }
      /**
       * Supprime un site
       * @param id Identifiant du site
       */
      deleteSite(id) {
        return this.http.delete(`${this.apiUrl}/${id}`).pipe(catchError((error) => this.handleError(error, "Erreur lors de la suppression du site")));
      }
      /**
       * Active ou désactive un site
       * @param id Identifiant du site
       * @param actif Statut actif/inactif
       */
      toggleSiteStatus(id, actif) {
        return this.http.patch(`${this.apiUrl}/${id}/status`, { actif }).pipe(catchError((error) => this.handleError(error, "Erreur lors du changement de statut")));
      }
      /**
       * Récupère la société de l'utilisateur connecté
       */
      getCurrentUserSocieteId() {
        const user = this.authService.user;
        return user?.societeId || null;
      }
      /**
       * Gestion des erreurs HTTP
       * @param error Erreur HTTP
       * @param defaultMessage Message par défaut
       */
      handleError(error, defaultMessage) {
        let errorMessage = defaultMessage;
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Erreur: ${error.error.message}`;
        } else {
          switch (error.status) {
            case 400:
              errorMessage = "Donn\xE9es invalides. V\xE9rifiez les champs du formulaire.";
              if (error.error?.message) {
                errorMessage += ` ${error.error.message}`;
              }
              break;
            case 401:
              errorMessage = "Non autoris\xE9. Veuillez vous reconnecter.";
              break;
            case 403:
              errorMessage = "Acc\xE8s interdit. Vous n'avez pas les permissions n\xE9cessaires.";
              break;
            case 404:
              errorMessage = "Site non trouv\xE9.";
              break;
            case 409:
              errorMessage = "Un site avec ce code existe d\xE9j\xE0 pour cette soci\xE9t\xE9.";
              break;
            case 500:
              errorMessage = "Erreur serveur. Veuillez r\xE9essayer plus tard.";
              break;
            case 503:
              errorMessage = "Service temporairement indisponible. Veuillez r\xE9essayer.";
              break;
            default:
              errorMessage = `${defaultMessage} (Code: ${error.status})`;
              if (error.error?.message) {
                errorMessage += ` - ${error.error.message}`;
              }
          }
        }
        console.error("Site Service Error:", {
          status: error.status,
          message: errorMessage,
          error: error.error
        });
        return throwError(() => new Error(errorMessage));
      }
      /**
       * Vérifie si un code de site est disponible
       * @param code Code à vérifier
       * @param societeId ID de la société
       * @param excludeSiteId ID du site à exclure (lors de la mise à jour)
       */
      checkCodeAvailability(code, societeId, excludeSiteId) {
        let httpParams = new HttpParams().set("code", code).set("societeId", societeId.toString());
        if (excludeSiteId) {
          httpParams = httpParams.set("excludeId", excludeSiteId.toString());
        }
        return this.http.get(`${this.apiUrl}/check-code`, { params: httpParams }).pipe(
          map((response) => response.available),
          catchError(() => of(true))
          // En cas d'erreur, on considère que le code est disponible
        );
      }
      /**
       * Exporte les sites en CSV
       * @param params Paramètres de filtrage
       */
      exportSitesToCsv(params) {
        let httpParams = new HttpParams();
        if (params.societeId !== void 0) {
          httpParams = httpParams.set("societeId", params.societeId.toString());
        }
        if (params.type) {
          httpParams = httpParams.set("type", params.type);
        }
        if (params.actif !== void 0) {
          httpParams = httpParams.set("actif", params.actif.toString());
        }
        return this.http.get(`${this.apiUrl}/export/csv`, {
          params: httpParams,
          responseType: "blob"
        }).pipe(catchError((error) => this.handleError(error, "Erreur lors de l'export")));
      }
      /**
       * Récupère les statistiques des sites
       * @param societeId ID de la société
       */
      getSiteStatistics(societeId) {
        const params = new HttpParams().set("societeId", societeId.toString());
        return this.http.get(`${this.apiUrl}/statistics`, { params }).pipe(catchError(() => of({
          total: 0,
          actifs: 0,
          inactifs: 0,
          parType: {},
          parVille: {},
          parPays: {}
        })));
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: AuthService }
      ];
    };
    SiteService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], SiteService);
  }
});

export {
  SiteService,
  init_site_service
};
//# sourceMappingURL=chunk-DLVY36ZV.js.map
