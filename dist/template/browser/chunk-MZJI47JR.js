import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BLAAMQ2R.js";
import {
  AuthService
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import {
  HttpClient
} from "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  Injectable,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/setting/application/services/email-config.service.ts
var EmailConfigService = class _EmailConfigService {
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
    return this.http.patch(`${this.baseUrl}/${id}/status`, { isActive });
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
  static \u0275fac = function EmailConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailConfigService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailConfigService, factory: _EmailConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

// src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.ts
function EmailSettingsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 59);
    \u0275\u0275listener("click", function EmailSettingsComponent_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.error = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.error, " ");
  }
}
function EmailSettingsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 59);
    \u0275\u0275listener("click", function EmailSettingsComponent_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.success = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.success, " ");
  }
}
function EmailSettingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "span", 64);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5, "Chargement des configurations email...");
    \u0275\u0275elementEnd()();
  }
}
function EmailSettingsComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 22);
    \u0275\u0275element(2, "img", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6", 68);
    \u0275\u0275text(4, "Aucune configuration email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 69);
    \u0275\u0275text(6, "Commencez par ajouter une configuration email pour envoyer des emails depuis votre application.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function EmailSettingsComponent_div_11_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreateModal());
    });
    \u0275\u0275element(8, "i", 6);
    \u0275\u0275text(9, "Ajouter une configuration ");
    \u0275\u0275elementEnd()();
  }
}
function EmailSettingsComponent_div_11_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "div", 74)(4, "div", 75)(5, "span", 76);
    \u0275\u0275element(6, "img", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "p", 78);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275element(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 79)(16, "strong");
    \u0275\u0275text(17, "Exp\xE9diteur :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 79)(20, "strong");
    \u0275\u0275text(21, "Authentification :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 80)(24, "strong");
    \u0275\u0275text(25, "Cr\xE9\xE9 le :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 81)(28, "div", 82)(29, "div", 82)(30, "button", 83);
    \u0275\u0275listener("click", function EmailSettingsComponent_div_11_div_2_div_1_Template_button_click_30_listener() {
      const config_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDeleteModal(config_r7));
    });
    \u0275\u0275element(31, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 85);
    \u0275\u0275listener("click", function EmailSettingsComponent_div_11_div_2_div_1_Template_button_click_32_listener() {
      const config_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditModal(config_r7));
    });
    \u0275\u0275element(33, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 87);
    \u0275\u0275listener("click", function EmailSettingsComponent_div_11_div_2_div_1_Template_button_click_34_listener() {
      const config_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openTestModal(config_r7));
    });
    \u0275\u0275element(35, "i", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 89)(37, "input", 90);
    \u0275\u0275listener("change", function EmailSettingsComponent_div_11_div_2_div_1_Template_input_change_37_listener($event) {
      const config_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleConfigStatus(config_r7, $event));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const config_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r2.getConfigIcon(config_r7), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getConfigType(config_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", config_r7.host, ":", config_r7.port);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge " + ctx_r2.getStatusBadge(config_r7).class + " d-flex align-items-center");
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-dot " + (config_r7.isActive ? "bg-success" : "bg-dark") + " me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusBadge(config_r7).text, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", config_r7.fromName, " <", config_r7.fromAdress, "> ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", config_r7.authType, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(config_r7.dateCreation), " ");
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", config_r7.isActive);
  }
}
function EmailSettingsComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, EmailSettingsComponent_div_11_div_2_div_1_Template, 38, 14, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.emailConfigs);
  }
}
function EmailSettingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, EmailSettingsComponent_div_11_div_1_Template, 10, 0, "div", 9)(2, EmailSettingsComponent_div_11_div_2_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.emailConfigs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.emailConfigs.length > 0);
  }
}
function EmailSettingsComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r8.label);
  }
}
function EmailSettingsComponent_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    \u0275\u0275property("value", option_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r9.label);
  }
}
function EmailSettingsComponent_small_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, "Laissez vide pour ne pas modifier");
    \u0275\u0275elementEnd();
  }
}
function EmailSettingsComponent_span_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function EmailSettingsComponent_div_128_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", config_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.getConfigType(config_r11), " (", config_r11.host, ") ");
  }
}
function EmailSettingsComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 22)(2, "label", 23);
    \u0275\u0275text(3, "Configuration \xE0 tester");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 93);
    \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_div_128_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.testEmailData.configId, $event) || (ctx_r2.testEmailData.configId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 91);
    \u0275\u0275text(6, "Configuration par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, EmailSettingsComponent_div_128_option_7_Template, 2, 3, "option", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.testEmailData.configId);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.emailConfigs);
  }
}
function EmailSettingsComponent_span_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function EmailSettingsComponent_p_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, " \xCAtes-vous s\xFBr de vouloir supprimer la configuration ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " ? ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.configToDelete.host);
  }
}
function EmailSettingsComponent_span_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
var EmailSettingsComponent = class _EmailSettingsComponent {
  emailConfigService = inject(EmailConfigService);
  authService = inject(AuthService);
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
    auth: "PLAIN",
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
      auth: "PLAIN",
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
    }, 300);
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
        },
        error: (error) => {
          console.error("Erreur lors de la mise \xE0 jour:", error);
          this.error = error.message || "Erreur lors de la mise \xE0 jour";
          this.saving = false;
          this.closeModals();
        }
      });
    } else {
      this.emailConfigService.createEmailConfig(this.formData).subscribe({
        next: (response) => {
          this.success = "Configuration cr\xE9\xE9e avec succ\xE8s";
          this.loadEmailConfigs();
          this.closeModals();
          this.saving = false;
        },
        error: (error) => {
          console.error("Erreur lors de la cr\xE9ation:", error);
          this.error = error.message || "Erreur lors de la cr\xE9ation";
          this.saving = false;
          this.closeModals();
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
      },
      error: (error) => {
        console.error("Erreur lors de la suppression:", error);
        this.error = error.message || "Erreur lors de la suppression";
        this.saving = false;
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
        setTimeout(() => {
          this.closeModals();
        }, 2e3);
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi de l'email de test:", error);
        this.error = error.message || "Erreur lors de l'envoi de l'email de test";
        this.testing = false;
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
      },
      error: (error) => {
        console.error("Erreur lors du changement de statut:", error);
        this.error = error.message || "Erreur lors du changement de statut";
        target.checked = !isActive;
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
  static \u0275fac = function EmailSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailSettingsComponent, selectors: [["app-email-settings"]], decls: 151, vars: 54, consts: [["configForm", "ngForm"], ["testForm", "ngForm"], [1, ""], [1, "pb-3", "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "isax", "isax-add", "me-1"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "mb-0", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close", 3, "click"], [1, "fa-solid", "fa-x"], [3, "ngSubmit"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "host", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted"], ["type", "number", "name", "port", "required", "", "min", "1", "max", "65535", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "smtpSecure", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "authType", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "passwordTxt", 1, "form-control", 3, "ngModelChange", "ngModel", "required"], ["class", "text-muted", 4, "ngIf"], ["type", "email", "name", "fromAdress", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "fromName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-12"], ["type", "email", "name", "testEmail", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "role", "switch", "name", "isActive", "id", "isActive", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "isActive", 1, "form-check-label"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", 1, "btn", "btn-outline-white", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "modal-dialog", "modal-dialog-centered"], ["type", "email", "name", "emailAddress", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "col-md-12", 4, "ngIf"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "Suppression"], [1, "mb-1"], ["class", "mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-outline-white", "me-3", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], [1, "modal-backdrop", "fade"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-danger", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], ["class", "row", 4, "ngIf"], ["src", "assets/img/icons/email.svg", "alt", "Aucune configuration", 1, "img-fluid", 2, "max-width", "100px"], [1, "mb-2"], [1, "text-muted", "mb-4"], ["class", "col-md-6 d-flex", 4, "ngFor", "ngForOf"], [1, "col-md-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "bg-light", "me-2", "p-2", "flex-shrink-0"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "text-gray-9", "fw-medium", "mb-0"], [1, "fs-13", "mb-2"], [1, "fs-13", "mb-0"], [1, "card-footer", "bg-light"], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "button", "title", "Supprimer", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2", 3, "click"], [1, "isax", "isax-trash", "fs-14"], ["type", "button", "title", "Modifier", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2", 3, "click"], [1, "isax", "isax-setting-2", "fs-14"], ["type", "button", "title", "Tester", 1, "btn", "btn-sm", "btn-dark", "rounded-2", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2", 3, "click"], [1, "isax", "isax-send-25", "fs-14"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", 1, "form-check-input", "ms-0", 3, "change", "checked"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["name", "configId", 1, "form-select", 3, "ngModelChange", "ngModel"]], template: function EmailSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "div", 3)(3, "h6", 4);
      \u0275\u0275text(4, "Param\xE8tres Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 5);
      \u0275\u0275listener("click", function EmailSettingsComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreateModal());
      });
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275text(7, "Ajouter une configuration ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, EmailSettingsComponent_div_8_Template, 4, 1, "div", 7)(9, EmailSettingsComponent_div_9_Template, 4, 1, "div", 8)(10, EmailSettingsComponent_div_10_Template, 6, 0, "div", 9)(11, EmailSettingsComponent_div_11_Template, 3, 2, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "h4", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 16);
      \u0275\u0275listener("click", function EmailSettingsComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModals());
      });
      \u0275\u0275element(19, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "form", 18, 0);
      \u0275\u0275listener("ngSubmit", function EmailSettingsComponent_Template_form_ngSubmit_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.submitConfig());
      });
      \u0275\u0275elementStart(22, "div", 19)(23, "div", 20)(24, "div", 21)(25, "div", 22)(26, "label", 23);
      \u0275\u0275text(27, "Serveur SMTP ");
      \u0275\u0275elementStart(28, "span", 24);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.host, $event) || (ctx.formData.host = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "small", 26);
      \u0275\u0275text(32, "Ex: smtp.gmail.com, smtp.office365.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 21)(34, "div", 22)(35, "label", 23);
      \u0275\u0275text(36, "Port ");
      \u0275\u0275elementStart(37, "span", 24);
      \u0275\u0275text(38, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.port, $event) || (ctx.formData.port = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "small", 26);
      \u0275\u0275text(41, "Ex: 587 (TLS), 465 (SSL), 25 (standard)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 21)(43, "div", 22)(44, "label", 23);
      \u0275\u0275text(45, "S\xE9curit\xE9 SMTP ");
      \u0275\u0275elementStart(46, "span", 24);
      \u0275\u0275text(47, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "select", 28);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_select_ngModelChange_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.smtpSecure, $event) || (ctx.formData.smtpSecure = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(49, EmailSettingsComponent_option_49_Template, 2, 2, "option", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 21)(51, "div", 22)(52, "label", 23);
      \u0275\u0275text(53, "Type d'authentification ");
      \u0275\u0275elementStart(54, "span", 24);
      \u0275\u0275text(55, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "select", 30);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_select_ngModelChange_56_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.authType, $event) || (ctx.formData.authType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(57, EmailSettingsComponent_option_57_Template, 2, 2, "option", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 21)(59, "div", 22)(60, "label", 23);
      \u0275\u0275text(61, "Nom d'utilisateur ");
      \u0275\u0275elementStart(62, "span", 24);
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_64_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.username, $event) || (ctx.formData.username = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "small", 26);
      \u0275\u0275text(66, "G\xE9n\xE9ralement votre adresse email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 21)(68, "div", 22)(69, "label", 23);
      \u0275\u0275text(70, "Mot de passe ");
      \u0275\u0275elementStart(71, "span", 24);
      \u0275\u0275text(72, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_73_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.passwordTxt, $event) || (ctx.formData.passwordTxt = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(74, EmailSettingsComponent_small_74_Template, 2, 0, "small", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 21)(76, "div", 22)(77, "label", 23);
      \u0275\u0275text(78, "Adresse d'exp\xE9dition ");
      \u0275\u0275elementStart(79, "span", 24);
      \u0275\u0275text(80, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_81_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.fromAdress, $event) || (ctx.formData.fromAdress = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 21)(83, "div", 22)(84, "label", 23);
      \u0275\u0275text(85, "Nom d'exp\xE9diteur ");
      \u0275\u0275elementStart(86, "span", 24);
      \u0275\u0275text(87, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_88_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.fromName, $event) || (ctx.formData.fromName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 36)(90, "div", 22)(91, "label", 23);
      \u0275\u0275text(92, "Email de test");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_93_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.testEmail, $event) || (ctx.formData.testEmail = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "small", 26);
      \u0275\u0275text(95, "Adresse email pour les tests de configuration");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 36)(97, "div", 38)(98, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_98_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.isActive, $event) || (ctx.formData.isActive = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "label", 40);
      \u0275\u0275text(100, "Configuration active");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(101, "div", 41)(102, "button", 42);
      \u0275\u0275listener("click", function EmailSettingsComponent_Template_button_click_102_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModals());
      });
      \u0275\u0275text(103, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "button", 43);
      \u0275\u0275template(105, EmailSettingsComponent_span_105_Template, 1, 0, "span", 44);
      \u0275\u0275text(106);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(107, "div", 11)(108, "div", 45)(109, "div", 13)(110, "div", 14)(111, "h4", 15);
      \u0275\u0275text(112, "Test d'envoi d'email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "button", 16);
      \u0275\u0275listener("click", function EmailSettingsComponent_Template_button_click_113_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModals());
      });
      \u0275\u0275element(114, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "form", 18, 1);
      \u0275\u0275listener("ngSubmit", function EmailSettingsComponent_Template_form_ngSubmit_115_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendTestEmail());
      });
      \u0275\u0275elementStart(117, "div", 19)(118, "div", 20)(119, "div", 36)(120, "div", 22)(121, "label", 23);
      \u0275\u0275text(122, "Adresse email de test ");
      \u0275\u0275elementStart(123, "span", 24);
      \u0275\u0275text(124, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function EmailSettingsComponent_Template_input_ngModelChange_125_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.testEmailData.emailAddress, $event) || (ctx.testEmailData.emailAddress = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "small", 26);
      \u0275\u0275text(127, "L'email de test sera envoy\xE9 \xE0 cette adresse");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(128, EmailSettingsComponent_div_128_Template, 8, 3, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 41)(130, "button", 42);
      \u0275\u0275listener("click", function EmailSettingsComponent_Template_button_click_130_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModals());
      });
      \u0275\u0275text(131, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "button", 43);
      \u0275\u0275template(133, EmailSettingsComponent_span_133_Template, 1, 0, "span", 44);
      \u0275\u0275text(134, " Envoyer le test ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(135, "div", 11)(136, "div", 48)(137, "div", 13)(138, "div", 49)(139, "div", 22);
      \u0275\u0275element(140, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "h6", 51);
      \u0275\u0275text(142, "Confirmer la suppression");
      \u0275\u0275elementEnd();
      \u0275\u0275template(143, EmailSettingsComponent_p_143_Template, 5, 1, "p", 52);
      \u0275\u0275elementStart(144, "div", 53)(145, "button", 54);
      \u0275\u0275listener("click", function EmailSettingsComponent_Template_button_click_145_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModals());
      });
      \u0275\u0275text(146, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "button", 55);
      \u0275\u0275listener("click", function EmailSettingsComponent_Template_button_click_147_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.deleteConfig());
      });
      \u0275\u0275template(148, EmailSettingsComponent_span_148_Template, 1, 0, "span", 44);
      \u0275\u0275text(149, " Supprimer ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(150, "div", 56);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showConfigModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showConfigModal)("d-block", ctx.showConfigModal);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Modifier la configuration" : "Nouvelle configuration");
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.host);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.port);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.smtpSecure);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.smtpSecureOptions);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.authType);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.authTypeOptions);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.username);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.passwordTxt);
      \u0275\u0275property("required", !ctx.isEditMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditMode);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.fromAdress);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.fromName);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.testEmail);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.isActive);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showTestModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showTestModal)("d-block", ctx.showTestModal);
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.testEmailData.emailAddress);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.emailConfigs.length > 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.testing);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.testing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.testing);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("display", ctx.showDeleteModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showDeleteModal)("d-block", ctx.showDeleteModal);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.configToDelete);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("display", ctx.showConfigModal || ctx.showTestModal || ctx.showDeleteModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showConfigModal || ctx.showTestModal || ctx.showDeleteModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-email-settings", imports: [CommonModule, FormsModule], template: `<div class="">
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
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailSettingsComponent, { className: "EmailSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/system-settings/email-settings/email-settings.component.ts", lineNumber: 19 });
})();
export {
  EmailSettingsComponent
};
//# sourceMappingURL=chunk-MZJI47JR.js.map
