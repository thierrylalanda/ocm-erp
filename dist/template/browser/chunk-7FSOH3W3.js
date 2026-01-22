import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleRenderer,
  defaultRippleAnimationConfig
} from "./chunk-OMNMTJX2.js";
import {
  _animationsDisabled
} from "./chunk-4CMXULEF.js";
import {
  _getEventTarget
} from "./chunk-YWH7SLE3.js";
import {
  Platform
} from "./chunk-EXNS3HGN.js";
import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  AuthService
} from "./chunk-YJY3UYMJ.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-ZCJVS2AD.js";
import {
  DOCUMENT,
  Injectable,
  Injector,
  NgZone,
  RendererFactory2,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HKG6HBOI.js";

// src/app/modules/setting/application/services/site.service.ts
var SiteService = class _SiteService {
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
  static \u0275fac = function SiteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SiteService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SiteService, factory: _SiteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

// node_modules/@angular/material/fesm2022/ripple-loader-wNDzC_j6.mjs
var eventListenerOptions = {
  capture: true
};
var rippleInteractionEvents = ["focus", "mousedown", "mouseenter", "touchstart"];
var matRippleUninitialized = "mat-ripple-loader-uninitialized";
var matRippleClassName = "mat-ripple-loader-class-name";
var matRippleCentered = "mat-ripple-loader-centered";
var matRippleDisabled = "mat-ripple-loader-disabled";
var MatRippleLoader = class _MatRippleLoader {
  _document = inject(DOCUMENT);
  _animationsDisabled = _animationsDisabled();
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _eventCleanups;
  _hosts = /* @__PURE__ */ new Map();
  constructor() {
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    this._eventCleanups = this._ngZone.runOutsideAngular(() => rippleInteractionEvents.map((name) => renderer.listen(this._document, name, this._onInteraction, eventListenerOptions)));
  }
  ngOnDestroy() {
    const hosts = this._hosts.keys();
    for (const host of hosts) {
      this.destroyRipple(host);
    }
    this._eventCleanups.forEach((cleanup) => cleanup());
  }
  /**
   * Configures the ripple that will be rendered by the ripple loader.
   *
   * Stores the given information about how the ripple should be configured on the host
   * element so that it can later be retrived & used when the ripple is actually created.
   */
  configureRipple(host, config) {
    host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? "");
    if (config.className || !host.hasAttribute(matRippleClassName)) {
      host.setAttribute(matRippleClassName, config.className || "");
    }
    if (config.centered) {
      host.setAttribute(matRippleCentered, "");
    }
    if (config.disabled) {
      host.setAttribute(matRippleDisabled, "");
    }
  }
  /** Sets the disabled state on the ripple instance corresponding to the given host element. */
  setDisabled(host, disabled) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.target.rippleDisabled = disabled;
      if (!disabled && !ripple.hasSetUpEvents) {
        ripple.hasSetUpEvents = true;
        ripple.renderer.setupTriggerEvents(host);
      }
    } else if (disabled) {
      host.setAttribute(matRippleDisabled, "");
    } else {
      host.removeAttribute(matRippleDisabled);
    }
  }
  /**
   * Handles creating and attaching component internals
   * when a component is initially interacted with.
   */
  _onInteraction = (event) => {
    const eventTarget = _getEventTarget(event);
    if (eventTarget instanceof HTMLElement) {
      const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ""}"]`);
      if (element) {
        this._createRipple(element);
      }
    }
  };
  /** Creates a MatRipple and appends it to the given element. */
  _createRipple(host) {
    if (!this._document || this._hosts.has(host)) {
      return;
    }
    host.querySelector(".mat-ripple")?.remove();
    const rippleEl = this._document.createElement("span");
    rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
    host.append(rippleEl);
    const globalOptions = this._globalRippleOptions;
    const enterDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.enterDuration ?? defaultRippleAnimationConfig.enterDuration;
    const exitDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.exitDuration ?? defaultRippleAnimationConfig.exitDuration;
    const target = {
      rippleDisabled: this._animationsDisabled || globalOptions?.disabled || host.hasAttribute(matRippleDisabled),
      rippleConfig: {
        centered: host.hasAttribute(matRippleCentered),
        terminateOnPointerUp: globalOptions?.terminateOnPointerUp,
        animation: {
          enterDuration,
          exitDuration
        }
      }
    };
    const renderer = new RippleRenderer(target, this._ngZone, rippleEl, this._platform, this._injector);
    const hasSetUpEvents = !target.rippleDisabled;
    if (hasSetUpEvents) {
      renderer.setupTriggerEvents(host);
    }
    this._hosts.set(host, {
      target,
      renderer,
      hasSetUpEvents
    });
    host.removeAttribute(matRippleUninitialized);
  }
  destroyRipple(host) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.renderer._removeTriggerEvents();
      this._hosts.delete(host);
    }
  }
  static \u0275fac = function MatRippleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRippleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatRippleLoader,
    factory: _MatRippleLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  MatRippleLoader,
  SiteService
};
//# sourceMappingURL=chunk-7FSOH3W3.js.map
