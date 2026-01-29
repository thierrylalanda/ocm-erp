import {
  environment,
  init_environment
} from "./chunk-Q2A5OOYR.js";
import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  AuthService,
  init_auth_service,
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import {
  ToasterService
} from "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import {
  HttpClient,
  init_http
} from "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.html
var email_settings_component_default;
var init_email_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.html"() {
    email_settings_component_default = `<div class="">
    <div>
        <!-- En-t\xEAte avec bouton d'ajout -->
        <div class="pb-3 d-flex align-items-center justify-content-between border-bottom mb-3">
            <h6 class="mb-0">Param\xE8tres Email</h6>
            <button type="button" class="btn btn-primary" (click)="openCreateModal()">
                <i class="isax isax-add me-1"></i>Ajouter une configuration
            </button>
        </div>

        <!-- Messages d'alerte -->
        <div *ngIf="error" class="alert alert-danger alert-dismissible fade show" role="alert">
            <i class="isax isax-danger me-2"></i>{{ error }}
            <button type="button" class="btn-close" (click)="error = null"></button>
        </div>

        <div *ngIf="success" class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="isax isax-tick-circle me-2"></i>{{ success }}
            <button type="button" class="btn-close" (click)="success = null"></button>
        </div>

        <!-- Chargement -->
        <div *ngIf="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Chargement...</span>
            </div>
            <p class="mt-2">Chargement des configurations email...</p>
        </div>

        <!-- Liste des configurations -->
        <div *ngIf="!loading" class="mb-0">
            <!-- Message si aucune configuration -->
            <div *ngIf="emailConfigs.length === 0" class="text-center py-5">
                <div class="mb-3">
                    <img src="assets/img/icons/email.svg" alt="Aucune configuration" class="img-fluid" style="max-width: 100px;">
                </div>
                <h6 class="mb-2">Aucune configuration email</h6>
                <p class="text-muted mb-4">Commencez par ajouter une configuration email pour envoyer des emails depuis votre application.</p>
                <button type="button" class="btn btn-primary" (click)="openCreateModal()">
                    <i class="isax isax-add me-1"></i>Ajouter une configuration
                </button>
            </div>

            <!-- Grille des configurations -->
            <div class="row" *ngIf="emailConfigs.length > 0">
                <div class="col-md-6 d-flex" *ngFor="let config of emailConfigs">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                                <div class="d-flex align-items-center">
                                    <span class="avatar avatar-lg bg-light me-2 p-2 flex-shrink-0">
                                        <img [src]="getConfigIcon(config)" class="img-fluid" alt="img">
                                    </span>
                                    <div>
                                        <p class="text-gray-9 fw-medium mb-0">{{ getConfigType(config) }}</p>
                                        <small class="text-muted">{{ config.host }}:{{ config.port }}</small>
                                    </div>
                                </div>
                                <span [class]="'badge ' + getStatusBadge(config).class + ' d-flex align-items-center'">
                                    <span [class]="'badge-dot ' + (config.isActive ? 'bg-success' : 'bg-dark') + ' me-1'"></span>
                                    {{ getStatusBadge(config).text }}
                                </span>
                            </div>
                            <p class="fs-13 mb-2">
                                <strong>Exp\xE9diteur :</strong> {{ config.fromName }} <{{ config.fromAdress }}>
                            </p>
                            <p class="fs-13 mb-2">
                                <strong>Authentification :</strong> {{ config.authType }}
                            </p>
                            <p class="fs-13 mb-0">
                                <strong>Cr\xE9\xE9 le :</strong> {{ formatDate(config.dateCreation) }}
                            </p>
                        </div>
                        <div class="card-footer bg-light">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex justify-content-between align-items-center">
                                    <button type="button" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" 
                                            (click)="openDeleteModal(config)" title="Supprimer">
                                        <i class="isax isax-trash fs-14"></i>
                                    </button>
                                    <button type="button" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" 
                                            (click)="openEditModal(config)" title="Modifier">
                                        <i class="isax isax-setting-2 fs-14"></i>
                                    </button>
                                    <button type="button" class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" 
                                            (click)="openTestModal(config)" title="Tester">
                                        <i class="isax isax-send-25 fs-14"></i>
                                    </button>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input ms-0" type="checkbox" role="switch" 
                                           [checked]="config.isActive"
                                           (change)="toggleConfigStatus(config, $event)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal de configuration -->
<div class="modal fade" [class.show]="showConfigModal" [style.display]="showConfigModal ? 'block' : 'none'" 
     [class.d-block]="showConfigModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ isEditMode ? 'Modifier la configuration' : 'Nouvelle configuration' }}</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" (click)="closeModals()" aria-label="Close">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <form (ngSubmit)="submitConfig()" #configForm="ngForm">
                <div class="modal-body">
                    <div class="row">
                        <!-- Serveur SMTP -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Serveur SMTP <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" [(ngModel)]="formData.host" name="host" required>
                                <small class="text-muted">Ex: smtp.gmail.com, smtp.office365.com</small>
                            </div>
                        </div>

                        <!-- Port -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Port <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" [(ngModel)]="formData.port" name="port" required min="1" max="65535">
                                <small class="text-muted">Ex: 587 (TLS), 465 (SSL), 25 (standard)</small>
                            </div>
                        </div>

                        <!-- Type de s\xE9curit\xE9 -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">S\xE9curit\xE9 SMTP <span class="text-danger">*</span></label>
                                <select class="form-select" [(ngModel)]="formData.smtpSecure" name="smtpSecure" required>
                                    <option *ngFor="let option of smtpSecureOptions" [value]="option.value">{{ option.label }}</option>
                                </select>
                            </div>
                        </div>

                        <!-- Type d'authentification -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Type d'authentification <span class="text-danger">*</span></label>
                                <select class="form-select" [(ngModel)]="formData.authType" name="authType" required>
                                    <option *ngFor="let option of authTypeOptions" [value]="option.value">{{ option.label }}</option>
                                </select>
                            </div>
                        </div>

                        <!-- Nom d'utilisateur -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Nom d'utilisateur <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" [(ngModel)]="formData.username" name="username" required>
                                <small class="text-muted">G\xE9n\xE9ralement votre adresse email</small>
                            </div>
                        </div>

                        <!-- Mot de passe -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Mot de passe <span class="text-danger">*</span></label>
                                <input type="password" class="form-control" [(ngModel)]="formData.passwordTxt" name="passwordTxt" [required]="!isEditMode">
                                <small class="text-muted" *ngIf="isEditMode">Laissez vide pour ne pas modifier</small>
                            </div>
                        </div>

                        <!-- Adresse d'exp\xE9dition -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Adresse d'exp\xE9dition <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" [(ngModel)]="formData.fromAdress" name="fromAdress" required>
                            </div>
                        </div>

                        <!-- Nom d'exp\xE9diteur -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Nom d'exp\xE9diteur <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" [(ngModel)]="formData.fromName" name="fromName" required>
                            </div>
                        </div>

                        <!-- Email de test -->
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Email de test</label>
                                <input type="email" class="form-control" [(ngModel)]="formData.testEmail" name="testEmail">
                                <small class="text-muted">Adresse email pour les tests de configuration</small>
                            </div>
                        </div>

                        <!-- Statut actif -->
                        <div class="col-md-12">
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" role="switch" 
                                       [(ngModel)]="formData.isActive" name="isActive" id="isActive">
                                <label class="form-check-label" for="isActive">Configuration active</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" (click)="closeModals()" [disabled]="saving">Annuler</button>
                    <button type="submit" class="btn btn-primary" [disabled]="saving">
                        <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>
                        {{ isEditMode ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Modal de test d'email -->
<div class="modal fade" [class.show]="showTestModal" [style.display]="showTestModal ? 'block' : 'none'" 
     [class.d-block]="showTestModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Test d'envoi d'email</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" (click)="closeModals()" aria-label="Close">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <form (ngSubmit)="sendTestEmail()" #testForm="ngForm">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Adresse email de test <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" [(ngModel)]="testEmailData.emailAddress" name="emailAddress" required>
                                <small class="text-muted">L'email de test sera envoy\xE9 \xE0 cette adresse</small>
                            </div>
                        </div>
                        <div class="col-md-12" *ngIf="emailConfigs.length > 1">
                            <div class="mb-3">
                                <label class="form-label">Configuration \xE0 tester</label>
                                <select class="form-select" [(ngModel)]="testEmailData.configId" name="configId">
                                    <option [value]="undefined">Configuration par d\xE9faut</option>
                                    <option *ngFor="let config of emailConfigs" [value]="config.id">
                                        {{ getConfigType(config) }} ({{ config.host }})
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" (click)="closeModals()" [disabled]="testing">Annuler</button>
                    <button type="submit" class="btn btn-primary" [disabled]="testing">
                        <span *ngIf="testing" class="spinner-border spinner-border-sm me-1"></span>
                        Envoyer le test
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Modal de confirmation de suppression -->
<div class="modal fade" [class.show]="showDeleteModal" [style.display]="showDeleteModal ? 'block' : 'none'" 
     [class.d-block]="showDeleteModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="Suppression">
                </div>
                <h6 class="mb-1">Confirmer la suppression</h6>
                <p class="mb-3" *ngIf="configToDelete">
                    \xCAtes-vous s\xFBr de vouloir supprimer la configuration <strong>{{ configToDelete.host }}</strong> ?
                </p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-white me-3" (click)="closeModals()" [disabled]="saving">Annuler</button>
                    <button type="button" class="btn btn-danger" (click)="deleteConfig()" [disabled]="saving">
                        <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Overlay pour les modals -->
<div class="modal-backdrop fade" [class.show]="showConfigModal || showTestModal || showDeleteModal" 
     [style.display]="(showConfigModal || showTestModal || showDeleteModal) ? 'block' : 'none'"></div>
`;
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.scss
var email_settings_component_default2;
var init_email_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.scss"() {
    email_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.scss */\n/*# sourceMappingURL=email-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/application/services/email-config.service.ts
var EmailConfigService;
var init_email_config_service = __esm({
  "src/app/modules/setting/application/services/email-config.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_auth_service();
    init_environment();
    EmailConfigService = class EmailConfigService2 {
      http;
      authService;
      baseUrl = environment.api + "notification/email-config";
      constructor(http, authService) {
        this.http = http;
        this.authService = authService;
      }
      /**
       * Récupère toutes les configurations email de la société de l'utilisateur courant
       */
      getEmailConfigs(page = 0, size = 10, sort = "id,desc") {
        const user = this.authService.user;
        if (!user || !user.societeId) {
          throw new Error("User not authenticated or company ID not found");
        }
        const params = {
          societeId: user.societeId.toString(),
          page: page.toString(),
          size: size.toString(),
          sort
        };
        return this.http.get(this.baseUrl, { params });
      }
      /**
       * Récupère une configuration email par son ID
       */
      getEmailConfig(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
      }
      /**
       * Crée une nouvelle configuration email
       */
      createEmailConfig(data) {
        const user = this.authService.user;
        if (!user || !user.societeId) {
          throw new Error("User not authenticated or company ID not found");
        }
        const configData = __spreadProps(__spreadValues({}, data), {
          societeId: user.societeId
        });
        return this.http.post(this.baseUrl, configData);
      }
      /**
       * Met à jour une configuration email existante
       */
      updateEmailConfig(id, data) {
        return this.http.put(`${this.baseUrl}/${id}`, data);
      }
      /**
       * Supprime une configuration email
       */
      deleteEmailConfig(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
      }
      /**
       * Active ou désactive une configuration email
       */
      toggleEmailConfigStatus(id, isActive) {
        return this.http.patch(`${this.baseUrl}/${id}/active`, { isActive });
      }
      /**
       * Envoie un email de test
       */
      sendTestEmail(data) {
        return this.http.post(`${this.baseUrl}/${data.configId}/test`, data);
      }
      /**
       * Envoie un email de test avec une configuration spécifique
       */
      sendTestEmailWithConfig(configId, emailAddress) {
        return this.sendTestEmail({
          emailAddress,
          configId
        });
      }
      /**
       * Récupère les options SMTP Secure disponibles
       */
      getSmtpSecureOptions() {
        return [
          { value: "SSL", label: "SSL" },
          { value: "TLS", label: "TLS" },
          { value: "NONE", label: "Aucun" }
        ];
      }
      /**
       * Récupère les types d'authentification disponibles
       */
      getAuthTypeOptions() {
        return [
          { value: "PLAIN", label: "PLAIN" },
          { value: "LOGIN", label: "LOGIN" },
          { value: "CRAM-MD5", label: "CRAM-MD5" }
        ];
      }
      /**
       * Valide une configuration email
       */
      validateEmailConfig(data) {
        const errors = [];
        if (!data.host || data.host.trim() === "") {
          errors.push("Le serveur SMTP est requis");
        }
        if (!data.port || data.port <= 0 || data.port > 65535) {
          errors.push("Le port SMTP doit \xEAtre entre 1 et 65535");
        }
        if (!data.username || data.username.trim() === "") {
          errors.push("Le nom d'utilisateur est requis");
        }
        if ("passwordTxt" in data && (!data.passwordTxt || data.passwordTxt.trim() === "")) {
          errors.push("Le mot de passe est requis");
        }
        if (!data.fromAdress || data.fromAdress.trim() === "") {
          errors.push("L'adresse email d'exp\xE9dition est requise");
        } else if (!this.isValidEmail(data.fromAdress)) {
          errors.push("L'adresse email d'exp\xE9dition n'est pas valide");
        }
        if (!data.fromName || data.fromName.trim() === "") {
          errors.push("Le nom d'exp\xE9diteur est requis");
        }
        return errors;
      }
      /**
       * Valide une adresse email
       */
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: AuthService }
      ];
    };
    EmailConfigService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], EmailConfigService);
  }
});

// src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.ts
var EmailSettingsComponent;
var init_email_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_email_settings_component();
    init_email_settings_component2();
    init_core();
    init_common();
    init_forms();
    init_email_config_service();
    init_core_index();
    EmailSettingsComponent = class EmailSettingsComponent2 {
      emailConfigService = inject(EmailConfigService);
      authService = inject(AuthService);
      toasterService = inject(ToasterService);
      // États
      loading = false;
      saving = false;
      testing = false;
      error = null;
      success = null;
      // Données
      emailConfigs = [];
      currentConfig = null;
      // Formulaire
      formData = {
        host: "",
        port: 587,
        auth: 1,
        authType: "PLAIN",
        username: "",
        passwordTxt: "",
        fromAdress: "",
        fromName: "",
        societeId: 0,
        smtpSecure: "TLS",
        isActive: true,
        testEmail: ""
      };
      testEmailData = {
        emailAddress: "",
        configId: void 0
      };
      // Options
      smtpSecureOptions = this.emailConfigService.getSmtpSecureOptions();
      authTypeOptions = this.emailConfigService.getAuthTypeOptions();
      routes = routes;
      // Modals
      showConfigModal = false;
      showTestModal = false;
      showDeleteModal = false;
      configToDelete = null;
      isEditMode = false;
      ngOnInit() {
        this.loadEmailConfigs();
        this.initializeForm();
      }
      /**
       * Charge les configurations email
       */
      loadEmailConfigs() {
        this.loading = true;
        this.error = null;
        this.emailConfigService.getEmailConfigs(0, 100, "id,desc").subscribe({
          next: (response) => {
            this.emailConfigs = response.content || [];
            this.loading = false;
          },
          error: (error) => {
            console.error("Erreur lors du chargement des configurations email:", error);
            this.error = error.message || "Erreur lors du chargement des configurations email";
            this.loading = false;
          }
        });
      }
      /**
       * Initialise le formulaire avec les données de l'utilisateur
       */
      initializeForm() {
        const user = this.authService.user;
        if (user) {
          this.formData.societeId = user.societeId || 0;
          this.formData.fromName = user.nom || user.nomPrenom || "";
          this.formData.fromAdress = user.email || "";
          this.formData.username = user.email || "";
        }
      }
      /**
       * Ouvre le modal pour créer une nouvelle configuration
       */
      openCreateModal() {
        this.isEditMode = false;
        const user = this.authService.user;
        this.formData = {
          host: "",
          port: 587,
          auth: 1,
          authType: "PLAIN",
          username: user?.email || "",
          passwordTxt: "",
          fromAdress: user?.email || "",
          fromName: user?.nom || user?.nomPrenom || "",
          societeId: user?.societeId || 0,
          smtpSecure: "TLS",
          isActive: true,
          testEmail: ""
        };
        this.showConfigModal = true;
      }
      /**
       * Ouvre le modal pour éditer une configuration existante
       */
      openEditModal(config) {
        this.isEditMode = true;
        this.currentConfig = config;
        this.formData = {
          host: config.host,
          port: config.port,
          auth: config.auth,
          authType: config.authType,
          username: config.username,
          passwordTxt: "",
          // Mot de passe non inclus dans la réponse
          fromAdress: config.fromAdress,
          fromName: config.fromName,
          societeId: config.societeId,
          smtpSecure: config.smtpSecure,
          isActive: config.isActive,
          testEmail: config.testEmail || ""
        };
        this.showConfigModal = true;
      }
      /**
       * Ouvre le modal de confirmation de suppression
       */
      openDeleteModal(config) {
        this.configToDelete = config;
        this.showDeleteModal = true;
      }
      /**
       * Ouvre le modal d'envoi d'email de test
       */
      openTestModal(config) {
        this.testEmailData = {
          emailAddress: "",
          configId: config?.id
        };
        this.showTestModal = true;
      }
      /**
       * Ferme tous les modals
       */
      closeModals() {
        this.showConfigModal = false;
        this.showTestModal = false;
        this.showDeleteModal = false;
        this.configToDelete = null;
        this.currentConfig = null;
        setTimeout(() => {
          this.error = null;
          this.success = null;
        }, 5e3);
      }
      /**
       * Soumet le formulaire de configuration
       */
      submitConfig() {
        const errors = this.emailConfigService.validateEmailConfig(this.formData);
        if (errors.length > 0) {
          this.error = errors.join(", ");
          return;
        }
        this.saving = true;
        this.error = null;
        this.success = null;
        if (this.isEditMode && this.currentConfig) {
          const updateData = {
            host: this.formData.host,
            port: this.formData.port,
            auth: this.formData.auth,
            authType: this.formData.authType,
            username: this.formData.username,
            passwordTxt: this.formData.passwordTxt || void 0,
            fromAdress: this.formData.fromAdress,
            fromName: this.formData.fromName,
            smtpSecure: this.formData.smtpSecure,
            isActive: this.formData.isActive,
            testEmail: this.formData.testEmail || void 0
          };
          this.emailConfigService.updateEmailConfig(this.currentConfig.id, updateData).subscribe({
            next: (response) => {
              this.success = "Configuration mise \xE0 jour avec succ\xE8s";
              this.loadEmailConfigs();
              this.closeModals();
              this.saving = false;
              this.toasterService.typeSuccess(this.success, "Mis a jour config");
            },
            error: (error) => {
              console.error("Erreur lors de la mise \xE0 jour:", error);
              this.error = error.message || "Erreur lors de la mise \xE0 jour";
              this.saving = false;
              this.closeModals();
              this.toasterService.typeError(this.error, "Mise a jour config");
            }
          });
        } else {
          this.emailConfigService.createEmailConfig(this.formData).subscribe({
            next: (response) => {
              this.success = "Configuration cr\xE9\xE9e avec succ\xE8s";
              this.loadEmailConfigs();
              this.closeModals();
              this.saving = false;
              this.toasterService.typeSuccess(this.success, "Creation Config Email");
            },
            error: (error) => {
              console.error("Erreur lors de la cr\xE9ation:", error);
              this.error = error.message || "Erreur lors de la cr\xE9ation";
              this.saving = false;
              this.closeModals();
              this.toasterService.typeError(this.error, "Creation Config Email");
            }
          });
        }
      }
      /**
       * Supprime une configuration
       */
      deleteConfig() {
        if (!this.configToDelete)
          return;
        this.saving = true;
        this.emailConfigService.deleteEmailConfig(this.configToDelete.id).subscribe({
          next: () => {
            this.success = "Configuration supprim\xE9e avec succ\xE8s";
            this.loadEmailConfigs();
            this.closeModals();
            this.saving = false;
            this.toasterService.typeSuccess(this.success, "Suppression Config");
          },
          error: (error) => {
            this.error = error.message || "Erreur lors de la suppression";
            this.saving = false;
            this.toasterService.typeError(this.error, "Suppression Config");
          }
        });
      }
      /**
       * Envoie un email de test
       */
      sendTestEmail() {
        if (!this.testEmailData.emailAddress) {
          this.error = "Veuillez saisir une adresse email";
          return;
        }
        this.testing = true;
        this.error = null;
        this.success = null;
        this.emailConfigService.sendTestEmail(this.testEmailData).subscribe({
          next: (response) => {
            this.success = response.message || "Email de test envoy\xE9 avec succ\xE8s";
            this.testing = false;
            this.toasterService.typeSuccess(this.success, "Email Test");
            setTimeout(() => {
              this.closeModals();
            }, 2e3);
          },
          error: (error) => {
            console.error("Erreur lors de l'envoi de l'email de test:", error);
            this.error = error.message || "Erreur lors de l'envoi de l'email de test";
            this.testing = false;
            this.toasterService.typeError(this.error, "Email Test");
          }
        });
      }
      /**
       * Bascule l'état actif/inactif d'une configuration
       */
      toggleConfigStatus(config, event) {
        event.stopPropagation();
        const target = event.target;
        const isActive = target.checked;
        this.emailConfigService.toggleEmailConfigStatus(config.id, isActive).subscribe({
          next: (response) => {
            config.isActive = response.isActive;
            this.success = `Configuration ${isActive ? "activ\xE9e" : "d\xE9sactiv\xE9e"} avec succ\xE8s`;
            this.toasterService.typeSuccess(this.success, "Status Config");
          },
          error: (error) => {
            console.error("Erreur lors du changement de statut:", error);
            this.error = error.message || "Erreur lors du changement de statut";
            target.checked = !isActive;
            this.toasterService.typeError(this.error, "Status config");
          }
        });
      }
      /**
       * Formate la date pour l'affichage
       */
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
      }
      /**
       * Obtient le badge de statut
       */
      getStatusBadge(config) {
        if (config.isActive) {
          return { class: "badge-soft-success", text: "Connect\xE9" };
        } else {
          return { class: "badge-soft-primary", text: "Non connect\xE9" };
        }
      }
      /**
       * Obtient l'icône en fonction du type de configuration
       */
      getConfigIcon(config) {
        const host = config.host.toLowerCase();
        if (host.includes("gmail") || host.includes("google")) {
          return "assets/img/settings/gmail.svg";
        } else if (host.includes("outlook") || host.includes("office365") || host.includes("microsoft")) {
          return "assets/img/settings/outlook.svg";
        } else if (host.includes("yahoo")) {
          return "assets/img/settings/yahoo.svg";
        } else if (host.includes("sendgrid")) {
          return "assets/img/settings/sendgrid.svg";
        } else {
          return "assets/img/settings/smtp.svg";
        }
      }
      /**
       * Obtient le nom d'affichage du type de configuration
       */
      getConfigType(config) {
        const host = config.host.toLowerCase();
        if (host.includes("gmail") || host.includes("google")) {
          return "Gmail";
        } else if (host.includes("outlook") || host.includes("office365") || host.includes("microsoft")) {
          return "Outlook/Office 365";
        } else if (host.includes("yahoo")) {
          return "Yahoo Mail";
        } else if (host.includes("sendgrid")) {
          return "SendGrid";
        } else {
          return "SMTP Personnalis\xE9";
        }
      }
    };
    EmailSettingsComponent = __decorate([
      Component({
        selector: "app-email-settings",
        imports: [CommonModule, FormsModule],
        template: email_settings_component_default,
        styles: [email_settings_component_default2]
      })
    ], EmailSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.spec.ts
var require_email_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.spec.ts"(exports) {
    init_testing();
    init_email_settings_component3();
    describe("EmailSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [EmailSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(EmailSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_email_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-system-settings-email-settings-email-settings.component.spec.js.map
