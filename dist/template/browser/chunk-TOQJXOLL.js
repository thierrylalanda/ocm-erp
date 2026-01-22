import {
  MatInputModule
} from "./chunk-232YOOVM.js";
import {
  MatFormFieldModule,
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MUITGCTV.js";
import "./chunk-O6CHOV5Y.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-ZTQFL2WC.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  BsDatepickerModule
} from "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-NAWYXTZ5.js";
import {
  AuthService
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import {
  HttpClient
} from "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/application/services/user.service.ts
var UserService = class _UserService {
  http;
  authService;
  baseUrl = environment.api + "hierarchie/utilisateurs";
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  /**
   * Get user by ID
   * @param id User ID
   * @returns Observable with user data
   */
  getUser(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /**
   * Get current authenticated user
   * @returns Observable with user data
   */
  getCurrentUser() {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error("User not authenticated or user ID not found");
    }
    return this.getUser(user.id);
  }
  /**
   * Update user
   * @param id User ID
   * @param data User data to update
   * @returns Observable with updated user data
   */
  updateUser(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  /**
   * Update current authenticated user
   * @param data User data to update
   * @returns Observable with updated user data
   */
  updateCurrentUser(data) {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error("User not authenticated or user ID not found");
    }
    return this.updateUser(user.id, data);
  }
  /**
   * Update user password
   * @param id User ID
   * @param currentPassword Current password
   * @param newPassword New password
   * @returns Observable with success status
   */
  updatePassword(id, currentPassword, newPassword) {
    return this.http.post(`${this.baseUrl}/${id}/change-password`, {
      currentPassword,
      newPassword
    });
  }
  /**
   * Update current user password
   * @param currentPassword Current password
   * @param newPassword New password
   * @returns Observable with success status
   */
  updateCurrentUserPassword(currentPassword, newPassword) {
    const user = this.authService.user;
    if (!user || !user.id) {
      throw new Error("User not authenticated or user ID not found");
    }
    return this.updatePassword(user.id, currentPassword, newPassword);
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

// src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.ts
function AccountSettingsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Chargement des donn\xE9es utilisateur...");
    \u0275\u0275elementEnd()();
  }
}
function AccountSettingsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function AccountSettingsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function AccountSettingsComponent_form_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Le nom et pr\xE9nom sont requis. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " L'email est requis. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Veuillez entrer un email valide. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Le t\xE9l\xE9phone est requis. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const statut_r3 = ctx.$implicit;
    \u0275\u0275property("value", statut_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(statut_r3);
  }
}
function AccountSettingsComponent_form_7_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Le statut est requis. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_mat_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const langue_r4 = ctx.$implicit;
    \u0275\u0275property("value", langue_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(langue_r4);
  }
}
function AccountSettingsComponent_form_7_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " La langue est requise. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Le mot de passe doit contenir au moins 6 caract\xE8res. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " L'adresse est requise. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.passwordErrorMessage, " ");
  }
}
function AccountSettingsComponent_form_7_div_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.passwordSuccessMessage, " ");
  }
}
function AccountSettingsComponent_form_7_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Le mot de passe actuel est requis. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Au moins 6 caract\xE8res. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Le nouveau mot de passe est requis. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Au moins 6 caract\xE8res. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " La confirmation est requise. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Au moins 6 caract\xE8res. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_div_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_span_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Changer le mot de passe");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_span_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 59);
    \u0275\u0275text(2, " Changement... ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_span_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enregistrer les modifications");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_span_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 59);
    \u0275\u0275text(2, " Enregistrement... ");
    \u0275\u0275elementEnd();
  }
}
function AccountSettingsComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 13);
    \u0275\u0275listener("ngSubmit", function AccountSettingsComponent_form_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 15)(3, "span", 16);
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h6", 18);
    \u0275\u0275text(6, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "div", 20)(9, "div", 0)(10, "label", 21);
    \u0275\u0275text(11, "Nom & Pr\xE9nom ");
    \u0275\u0275elementStart(12, "span", 22);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275template(15, AccountSettingsComponent_form_7_div_15_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20)(17, "div", 0)(18, "label", 21);
    \u0275\u0275text(19, "Email ");
    \u0275\u0275elementStart(20, "span", 22);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 25);
    \u0275\u0275template(23, AccountSettingsComponent_form_7_div_23_Template, 2, 0, "div", 24)(24, AccountSettingsComponent_form_7_div_24_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 20)(26, "div", 0)(27, "label", 21);
    \u0275\u0275text(28, "T\xE9l\xE9phone ");
    \u0275\u0275elementStart(29, "span", 22);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 26);
    \u0275\u0275template(32, AccountSettingsComponent_form_7_div_32_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 20)(34, "div", 0)(35, "label", 21);
    \u0275\u0275text(36, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-select", 27)(38, "mat-option", 28);
    \u0275\u0275text(39, "S\xE9lectionner");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, AccountSettingsComponent_form_7_mat_option_40_Template, 2, 2, "mat-option", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, AccountSettingsComponent_form_7_div_41_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 20)(43, "div", 0)(44, "label", 21);
    \u0275\u0275text(45, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-select", 30)(47, "mat-option", 28);
    \u0275\u0275text(48, "S\xE9lectionner");
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, AccountSettingsComponent_form_7_mat_option_49_Template, 2, 2, "mat-option", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, AccountSettingsComponent_form_7_div_50_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 20)(52, "div", 0)(53, "label", 21);
    \u0275\u0275text(54, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 31);
    \u0275\u0275template(56, AccountSettingsComponent_form_7_div_56_Template, 2, 0, "div", 24);
    \u0275\u0275elementStart(57, "small", 32);
    \u0275\u0275text(58, "Laissez vide pour ne pas modifier");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 33)(60, "div", 15)(61, "span", 16);
    \u0275\u0275element(62, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "h6", 18);
    \u0275\u0275text(64, "Informations d'adresse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 19)(66, "div", 34)(67, "div", 0)(68, "label", 21);
    \u0275\u0275text(69, "Adresse ");
    \u0275\u0275elementStart(70, "span", 22);
    \u0275\u0275text(71, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(72, "input", 35);
    \u0275\u0275template(73, AccountSettingsComponent_form_7_div_73_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 36)(75, "div", 0)(76, "label", 21);
    \u0275\u0275text(77, "Soci\xE9t\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "input", 37);
    \u0275\u0275elementStart(79, "small", 32);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 36)(82, "div", 0)(83, "label", 21);
    \u0275\u0275text(84, "Site");
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "input", 38);
    \u0275\u0275elementStart(86, "small", 32);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "div", 36)(89, "div", 0)(90, "label", 21);
    \u0275\u0275text(91, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "input", 39);
    \u0275\u0275elementStart(93, "small", 32);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(95, "div", 36)(96, "div", 0)(97, "label", 21);
    \u0275\u0275text(98, "Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 40);
    \u0275\u0275elementStart(100, "small", 32);
    \u0275\u0275text(101, "URL de la photo de profil");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "div", 41)(103, "div", 0)(104, "label", 21);
    \u0275\u0275text(105, "Signature");
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "input", 42);
    \u0275\u0275elementStart(107, "small", 32);
    \u0275\u0275text(108, "URL de la signature");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(109, "div", 43)(110, "div", 15)(111, "span", 16);
    \u0275\u0275element(112, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "h6", 18);
    \u0275\u0275text(114, "Changement de mot de passe");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(115, AccountSettingsComponent_form_7_div_115_Template, 2, 1, "div", 4)(116, AccountSettingsComponent_form_7_div_116_Template, 2, 1, "div", 5);
    \u0275\u0275elementStart(117, "div", 45)(118, "div", 19)(119, "div", 46)(120, "div", 0)(121, "label", 21);
    \u0275\u0275text(122, "Mot de passe actuel ");
    \u0275\u0275elementStart(123, "span", 22);
    \u0275\u0275text(124, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(125, "input", 47);
    \u0275\u0275template(126, AccountSettingsComponent_form_7_div_126_Template, 2, 0, "div", 24)(127, AccountSettingsComponent_form_7_div_127_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 46)(129, "div", 0)(130, "label", 21);
    \u0275\u0275text(131, "Nouveau mot de passe ");
    \u0275\u0275elementStart(132, "span", 22);
    \u0275\u0275text(133, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(134, "input", 48);
    \u0275\u0275template(135, AccountSettingsComponent_form_7_div_135_Template, 2, 0, "div", 24)(136, AccountSettingsComponent_form_7_div_136_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 46)(138, "div", 0)(139, "label", 21);
    \u0275\u0275text(140, "Confirmer le mot de passe ");
    \u0275\u0275elementStart(141, "span", 22);
    \u0275\u0275text(142, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(143, "input", 49);
    \u0275\u0275template(144, AccountSettingsComponent_form_7_div_144_Template, 2, 0, "div", 24)(145, AccountSettingsComponent_form_7_div_145_Template, 2, 0, "div", 24)(146, AccountSettingsComponent_form_7_div_146_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(147, "div", 50)(148, "button", 51);
    \u0275\u0275listener("click", function AccountSettingsComponent_form_7_Template_button_click_148_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCancelPassword());
    });
    \u0275\u0275text(149, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "button", 52);
    \u0275\u0275listener("click", function AccountSettingsComponent_form_7_Template_button_click_150_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onChangePassword());
    });
    \u0275\u0275template(151, AccountSettingsComponent_form_7_span_151_Template, 2, 0, "span", 53)(152, AccountSettingsComponent_form_7_span_152_Template, 3, 0, "span", 53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(153, "div", 54)(154, "button", 55);
    \u0275\u0275listener("click", function AccountSettingsComponent_form_7_Template_button_click_154_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCancel());
    });
    \u0275\u0275text(155, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "button", 56);
    \u0275\u0275template(157, AccountSettingsComponent_form_7_span_157_Template, 2, 0, "span", 53)(158, AccountSettingsComponent_form_7_span_158_Template, 3, 0, "span", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.userForm);
    \u0275\u0275advance(14);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("nomPrenom"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("nomPrenom", "required"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("email", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("email", "email"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("telephone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("telephone", "required"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("statut"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.statutOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("statut", "required"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("langue"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.langueOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("langue", "required"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("pwdText", "minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("pwdText", "minlength"));
    \u0275\u0275advance(16);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("adresse"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("adresse", "required"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("ID: ", ctx_r0.user == null ? null : ctx_r0.user.societeId, " - ", ctx_r0.user == null ? null : ctx_r0.user.societeNom);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("ID: ", ctx_r0.user == null ? null : ctx_r0.user.siteId, " - ", ctx_r0.user == null ? null : ctx_r0.user.siteNom);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("ID: ", ctx_r0.user == null ? null : ctx_r0.user.departementId, " - ", ctx_r0.user == null ? null : ctx_r0.user.departementNom);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngIf", ctx_r0.passwordErrorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.passwordSuccessMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.passwordForm);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("currentPassword", ctx_r0.passwordForm));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("currentPassword", "required", ctx_r0.passwordForm));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("currentPassword", "minlength", ctx_r0.passwordForm));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("newPassword", ctx_r0.passwordForm));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("newPassword", "required", ctx_r0.passwordForm));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("newPassword", "minlength", ctx_r0.passwordForm));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("confirmPassword", ctx_r0.passwordForm) || ctx_r0.getPasswordMismatchError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("confirmPassword", "required", ctx_r0.passwordForm));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("confirmPassword", "minlength", ctx_r0.passwordForm));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getPasswordMismatchError());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isChangingPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.passwordForm.invalid || ctx_r0.isChangingPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isChangingPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isChangingPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.userForm.invalid || ctx_r0.isSaving || !ctx_r0.userForm.dirty);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
  }
}
var AccountSettingsComponent = class _AccountSettingsComponent {
  fb;
  userService;
  userForm;
  passwordForm;
  isLoading = false;
  isSaving = false;
  isChangingPassword = false;
  errorMessage = "";
  successMessage = "";
  passwordSuccessMessage = "";
  passwordErrorMessage = "";
  user = null;
  // Options pour les sélecteurs
  statutOptions = ["ACTIF", "INACTIF"];
  langueOptions = ["fr", "en", "es", "de"];
  constructor(fb, userService) {
    this.fb = fb;
    this.userService = userService;
    this.userForm = this.createUserForm();
    this.passwordForm = this.createPasswordForm();
  }
  ngOnInit() {
    this.loadUser();
  }
  createUserForm() {
    return this.fb.group({
      nomPrenom: ["", [Validators.required]],
      telephone: ["", [Validators.required]],
      adresse: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      pwdText: ["", [Validators.minLength(6)]],
      societeId: [{ value: "", disabled: true }],
      siteId: [{ value: "", disabled: true }],
      departementId: [{ value: "", disabled: true }],
      statut: ["ACTIF", [Validators.required]],
      photo: [""],
      signature: [""],
      langue: ["fr", [Validators.required]]
    });
  }
  createPasswordForm() {
    return this.fb.group({
      currentPassword: ["", [Validators.required, Validators.minLength(6)]],
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6)]]
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(form) {
    const newPassword = form.get("newPassword")?.value;
    const confirmPassword = form.get("confirmPassword")?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }
  loadUser() {
    this.isLoading = true;
    this.errorMessage = "";
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.user = user;
        this.userForm.patchValue({
          nomPrenom: user.nomPrenom,
          telephone: user.telephone,
          adresse: user.adresse,
          email: user.email,
          pwdText: "",
          // Ne pas pré-remplir le mot de passe
          societeId: user.societeId,
          siteId: user.siteId,
          departementId: user.departementId,
          statut: user.statut,
          photo: user.photo,
          signature: user.signature,
          langue: user.langue || "fr"
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du chargement des donn\xE9es utilisateur: " + (error.error?.message || error.message);
        this.isLoading = false;
        console.error("Error loading user:", error);
      }
    });
  }
  onSubmit() {
    if (this.userForm.invalid) {
      this.markFormGroupTouched(this.userForm);
      return;
    }
    this.isSaving = true;
    this.errorMessage = "";
    this.successMessage = "";
    const formData = this.userForm.value;
    formData.societeId = this.user?.societeId || 0;
    formData.siteId = this.user?.siteId || 0;
    formData.departementId = this.user?.departementId || 0;
    this.userService.updateCurrentUser(formData).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.successMessage = "Les modifications ont \xE9t\xE9 enregistr\xE9es avec succ\xE8s.";
        this.isSaving = false;
        this.userForm.markAsPristine();
      },
      error: (error) => {
        this.errorMessage = "Erreur lors de la mise \xE0 jour: " + (error.error?.message || error.message);
        this.isSaving = false;
        console.error("Error updating user:", error);
      }
    });
  }
  onChangePassword() {
    if (this.passwordForm.invalid) {
      this.markFormGroupTouched(this.passwordForm);
      return;
    }
    this.isChangingPassword = true;
    this.passwordErrorMessage = "";
    this.passwordSuccessMessage = "";
    const { currentPassword, newPassword } = this.passwordForm.value;
    this.userService.updateCurrentUserPassword(currentPassword, newPassword).subscribe({
      next: () => {
        this.passwordSuccessMessage = "Mot de passe modifi\xE9 avec succ\xE8s.";
        this.isChangingPassword = false;
        this.passwordForm.reset();
      },
      error: (error) => {
        this.passwordErrorMessage = "Erreur lors du changement de mot de passe: " + (error.error?.message || error.message);
        this.isChangingPassword = false;
        console.error("Error changing password:", error);
      }
    });
  }
  onCancel() {
    if (this.user) {
      this.userForm.patchValue({
        nomPrenom: this.user.nomPrenom,
        telephone: this.user.telephone,
        adresse: this.user.adresse,
        email: this.user.email,
        pwdText: "",
        statut: this.user.statut,
        photo: this.user.photo,
        signature: this.user.signature,
        langue: this.user.langue || "fr"
      });
      this.userForm.markAsPristine();
    }
    this.errorMessage = "";
    this.successMessage = "";
  }
  onCancelPassword() {
    this.passwordForm.reset();
    this.passwordErrorMessage = "";
    this.passwordSuccessMessage = "";
  }
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  // Helper methods for template
  hasError(controlName, errorName, form = this.userForm) {
    const control = form.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }
  isFieldInvalid(controlName, form = this.userForm) {
    const control = form.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
  getPasswordMismatchError() {
    const newPasswordTouched = this.passwordForm.get("newPassword")?.touched || false;
    const confirmPasswordTouched = this.passwordForm.get("confirmPassword")?.touched || false;
    return this.passwordForm.hasError("mismatch") && newPasswordTouched && confirmPasswordTouched;
  }
  static \u0275fac = function AccountSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountSettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountSettingsComponent, selectors: [["app-account-settings"]], decls: 8, vars: 4, consts: [[1, "mb-3"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [3, "ngSubmit", "formGroup"], [1, "border-bottom", "mb-3", "pb-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "bg-dark", "avatar", "avatar-sm", "me-2", "flex-shrink-0"], [1, "isax", "isax-info-circle", "fs-14"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nomPrenom", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "telephone", 1, "form-control"], ["formControlName", "statut", 1, "custom-mat-select", "select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "langue", 1, "custom-mat-select", "select"], ["type", "password", "formControlName", "pwdText", 1, "form-control"], [1, "text-muted"], [1, "border-bottom", "mb-3"], [1, "col-lg-12"], ["type", "text", "formControlName", "adresse", 1, "form-control"], [1, "col-md-6"], ["type", "text", "formControlName", "societeId", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "siteId", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "departementId", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "photo", 1, "form-control"], [1, "col-md-12"], ["type", "text", "formControlName", "signature", 1, "form-control"], [1, "border-bottom", "mb-3", "pb-3"], [1, "isax", "isax-lock", "fs-14"], [3, "formGroup"], [1, "col-md-4"], ["type", "password", "formControlName", "currentPassword", 1, "form-control"], ["type", "password", "formControlName", "newPassword", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-4"], ["type", "button", 1, "btn", "btn-outline-white", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "invalid-feedback", "d-block"], [3, "value"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"]], template: function AccountSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Account Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, AccountSettingsComponent_div_4_Template, 6, 0, "div", 3)(5, AccountSettingsComponent_div_5_Template, 2, 1, "div", 4)(6, AccountSettingsComponent_div_6_Template, 2, 1, "div", 5)(7, AccountSettingsComponent_form_7_Template, 159, 55, "form", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    BsDatepickerModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-account-settings", imports: [
      CommonModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      BsDatepickerModule
    ], template: `<div class="mb-3">
    <div class="pb-3 border-bottom mb-3">
        <h6 class="mb-0">Account Settings</h6>
    </div>
    
    <!-- Loading indicator -->
    <div *ngIf="isLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Chargement des donn\xE9es utilisateur...</p>
    </div>
    
    <!-- Error message -->
    <div *ngIf="errorMessage && !isLoading" class="alert alert-danger">
        {{ errorMessage }}
    </div>
    
    <!-- Success message -->
    <div *ngIf="successMessage" class="alert alert-success">
        {{ successMessage }}
    </div>
    
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()" *ngIf="!isLoading">
        <div class="border-bottom mb-3 pb-2">
            <div class="d-flex align-items-center mb-3">
                <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-info-circle fs-14"></i></span>
                <h6 class="fs-16 fw-semibold mb-0">Informations g\xE9n\xE9rales</h6>
            </div>

            <!-- start row -->
            <div class="row gx-3">
                <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Nom & Pr\xE9nom <span class="text-danger">*</span></label>
                        <input type="text" formControlName="nomPrenom" class="form-control" [class.is-invalid]="isFieldInvalid('nomPrenom')">
                        <div *ngIf="hasError('nomPrenom', 'required')" class="invalid-feedback d-block">
                            Le nom et pr\xE9nom sont requis.
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Email <span class="text-danger">*</span></label>
                        <input type="email" formControlName="email" class="form-control" [class.is-invalid]="isFieldInvalid('email')">
                        <div *ngIf="hasError('email', 'required')" class="invalid-feedback d-block">
                            L'email est requis.
                        </div>
                        <div *ngIf="hasError('email', 'email')" class="invalid-feedback d-block">
                            Veuillez entrer un email valide.
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                        <label class="form-label">T\xE9l\xE9phone <span class="text-danger">*</span></label>
                        <input type="text" formControlName="telephone" class="form-control" [class.is-invalid]="isFieldInvalid('telephone')">
                        <div *ngIf="hasError('telephone', 'required')" class="invalid-feedback d-block">
                            Le t\xE9l\xE9phone est requis.
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Statut</label>
                        <mat-select formControlName="statut" class="custom-mat-select select" [class.is-invalid]="isFieldInvalid('statut')">
                            <mat-option value="">S\xE9lectionner</mat-option>
                            <mat-option *ngFor="let statut of statutOptions" [value]="statut">{{ statut }}</mat-option>
                        </mat-select>
                        <div *ngIf="hasError('statut', 'required')" class="invalid-feedback d-block">
                            Le statut est requis.
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Langue</label>
                        <mat-select formControlName="langue" class="custom-mat-select select" [class.is-invalid]="isFieldInvalid('langue')">
                            <mat-option value="">S\xE9lectionner</mat-option>
                            <mat-option *ngFor="let langue of langueOptions" [value]="langue">{{ langue }}</mat-option>
                        </mat-select>
                        <div *ngIf="hasError('langue', 'required')" class="invalid-feedback d-block">
                            La langue est requise.
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Mot de passe</label>
                        <input type="password" formControlName="pwdText" class="form-control" [class.is-invalid]="hasError('pwdText', 'minlength')">
                        <div *ngIf="hasError('pwdText', 'minlength')" class="invalid-feedback d-block">
                            Le mot de passe doit contenir au moins 6 caract\xE8res.
                        </div>
                        <small class="text-muted">Laissez vide pour ne pas modifier</small>
                    </div>
                </div><!-- end col -->
            </div><!-- end row -->
        </div>
        <div class="border-bottom mb-3">
            <div class="d-flex align-items-center mb-3">
                <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-info-circle fs-14"></i></span>
                <h6 class="fs-16 fw-semibold mb-0">Informations d'adresse</h6>
            </div>

            <!-- start row -->
            <div class="row gx-3">
                <div class="col-lg-12">
                    <div class="mb-3">
                        <label class="form-label">Adresse <span class="text-danger">*</span></label>
                        <input type="text" formControlName="adresse" class="form-control" [class.is-invalid]="isFieldInvalid('adresse')">
                        <div *ngIf="hasError('adresse', 'required')" class="invalid-feedback d-block">
                            L'adresse est requise.
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Soci\xE9t\xE9</label>
                        <input type="text" formControlName="societeId" class="form-control" readonly>
                        <small class="text-muted">ID: {{ user?.societeId }} - {{ user?.societeNom }}</small>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Site</label>
                        <input type="text" formControlName="siteId" class="form-control" readonly>
                        <small class="text-muted">ID: {{ user?.siteId }} - {{ user?.siteNom }}</small>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">D\xE9partement</label>
                        <input type="text" formControlName="departementId" class="form-control" readonly>
                        <small class="text-muted">ID: {{ user?.departementId }} - {{ user?.departementNom }}</small>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Photo</label>
                        <input type="text" formControlName="photo" class="form-control">
                        <small class="text-muted">URL de la photo de profil</small>
                    </div>
                </div><!-- end col -->
                <div class="col-md-12">
                    <div class="mb-3">
                        <label class="form-label">Signature</label>
                        <input type="text" formControlName="signature" class="form-control">
                        <small class="text-muted">URL de la signature</small>
                    </div>
                </div><!-- end col -->
            </div>
            <!-- end row -->
        </div>
        
        <!-- Section changement de mot de passe -->
        <div class="border-bottom mb-3 pb-3">
            <div class="d-flex align-items-center mb-3">
                <span class="bg-dark avatar avatar-sm me-2 flex-shrink-0"><i class="isax isax-lock fs-14"></i></span>
                <h6 class="fs-16 fw-semibold mb-0">Changement de mot de passe</h6>
            </div>
            
            <!-- Password error/success messages -->
            <div *ngIf="passwordErrorMessage" class="alert alert-danger">
                {{ passwordErrorMessage }}
            </div>
            <div *ngIf="passwordSuccessMessage" class="alert alert-success">
                {{ passwordSuccessMessage }}
            </div>
            
            <div [formGroup]="passwordForm">
                <!-- start row -->
                <div class="row gx-3">
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Mot de passe actuel <span class="text-danger">*</span></label>
                            <input type="password" formControlName="currentPassword" class="form-control" [class.is-invalid]="isFieldInvalid('currentPassword', passwordForm)">
                            <div *ngIf="hasError('currentPassword', 'required', passwordForm)" class="invalid-feedback d-block">
                                Le mot de passe actuel est requis.
                            </div>
                            <div *ngIf="hasError('currentPassword', 'minlength', passwordForm)" class="invalid-feedback d-block">
                                Au moins 6 caract\xE8res.
                            </div>
                        </div>
                    </div><!-- end col -->
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Nouveau mot de passe <span class="text-danger">*</span></label>
                            <input type="password" formControlName="newPassword" class="form-control" [class.is-invalid]="isFieldInvalid('newPassword', passwordForm)">
                            <div *ngIf="hasError('newPassword', 'required', passwordForm)" class="invalid-feedback d-block">
                                Le nouveau mot de passe est requis.
                            </div>
                            <div *ngIf="hasError('newPassword', 'minlength', passwordForm)" class="invalid-feedback d-block">
                                Au moins 6 caract\xE8res.
                            </div>
                        </div>
                    </div><!-- end col -->
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Confirmer le mot de passe <span class="text-danger">*</span></label>
                            <input type="password" formControlName="confirmPassword" class="form-control" [class.is-invalid]="isFieldInvalid('confirmPassword', passwordForm) || getPasswordMismatchError()">
                            <div *ngIf="hasError('confirmPassword', 'required', passwordForm)" class="invalid-feedback d-block">
                                La confirmation est requise.
                            </div>
                            <div *ngIf="hasError('confirmPassword', 'minlength', passwordForm)" class="invalid-feedback d-block">
                                Au moins 6 caract\xE8res.
                            </div>
                            <div *ngIf="getPasswordMismatchError()" class="invalid-feedback d-block">
                                Les mots de passe ne correspondent pas.
                            </div>
                        </div>
                    </div><!-- end col -->
                </div>
                <!-- end row -->
                
                <div class="d-flex align-items-center justify-content-between mt-3">
                    <button type="button" class="btn btn-outline-secondary" (click)="onCancelPassword()" [disabled]="isChangingPassword">Annuler</button>
                    <button type="button" class="btn btn-primary" (click)="onChangePassword()" [disabled]="passwordForm.invalid || isChangingPassword">
                        <span *ngIf="!isChangingPassword">Changer le mot de passe</span>
                        <span *ngIf="isChangingPassword">
                            <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                            Changement...
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <div class="d-flex align-items-center justify-content-between mt-4">
            <button type="button" class="btn btn-outline-white" (click)="onCancel()" [disabled]="isSaving">Annuler</button>
            <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid || isSaving || !userForm.dirty">
                <span *ngIf="!isSaving">Enregistrer les modifications</span>
                <span *ngIf="isSaving">
                    <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                    Enregistrement...
                </span>
            </button>
        </div>
        
    </form>
</div>
` }]
  }], () => [{ type: FormBuilder }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountSettingsComponent, { className: "AccountSettingsComponent", filePath: "src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.ts", lineNumber: 24 });
})();
export {
  AccountSettingsComponent
};
//# sourceMappingURL=chunk-TOQJXOLL.js.map
