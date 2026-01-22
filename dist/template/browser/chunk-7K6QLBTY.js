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
import "./chunk-CMWWECF4.js";
import {
  TranslatePipe
} from "./chunk-42UJGEGX.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/setting/application/services/company.service.ts
var CompanyService = class _CompanyService {
  http;
  authService;
  baseUrl = environment.api + "hierarchie/societes";
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  /**
   * Get company by ID
   * @param id Company ID
   * @returns Observable with company data
   */
  getCompany(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /**
   * Get current user's company
   * @returns Observable with company data
   */
  getCurrentUserCompany() {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error("User not authenticated or company ID not found");
    }
    return this.getCompany(user.societeId);
  }
  /**
   * Update company
   * @param id Company ID
   * @param data Company data to update
   * @returns Observable with updated company data
   */
  updateCompany(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  /**
   * Update current user's company
   * @param data Company data to update
   * @returns Observable with updated company data
   */
  updateCurrentUserCompany(data) {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error("User not authenticated or company ID not found");
    }
    return this.updateCompany(user.societeId, data);
  }
  /**
   * Upload logo for company
   * @param id Company ID
   * @param logoFile Logo file to upload
   * @returns Observable with updated company data
   */
  uploadLogo(id, logoFile) {
    const formData = new FormData();
    formData.append("file", logoFile);
    return this.http.post(`${this.baseUrl}/${id}/logo`, formData);
  }
  /**
   * Upload logo for current user's company
   * @param logoFile Logo file to upload
   * @returns Observable with updated company data
   */
  uploadCurrentUserCompanyLogo(logoFile) {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error("User not authenticated or company ID not found");
    }
    return this.uploadLogo(user.societeId, logoFile);
  }
  /**
   * Delete logo for company
   * @param id Company ID
   * @returns Observable with updated company data
   */
  deleteLogo(id) {
    return this.http.delete(`${this.baseUrl}/${id}/logo`);
  }
  /**
   * Delete logo for current user's company
   * @returns Observable with updated company data
   */
  deleteCurrentUserCompanyLogo() {
    const user = this.authService.user;
    if (!user || !user.societeId) {
      throw new Error("User not authenticated or company ID not found");
    }
    return this.deleteLogo(user.societeId);
  }
  static \u0275fac = function CompanyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

// src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.ts
function CompanySettingsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "companySettings.loading"));
  }
}
function CompanySettingsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function CompanySettingsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function CompanySettingsComponent_form_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.companyNameRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.emailRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.emailInvalid"), " ");
  }
}
function CompanySettingsComponent_form_8_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.phoneRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.activityRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_div_103_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "companySettings.uploadLogo"));
  }
}
function CompanySettingsComponent_form_8_div_103_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "companySettings.uploading"), " ");
  }
}
function CompanySettingsComponent_form_8_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 86);
    \u0275\u0275element(2, "i", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 88);
    \u0275\u0275listener("click", function CompanySettingsComponent_form_8_div_103_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.uploadLogo());
    });
    \u0275\u0275template(5, CompanySettingsComponent_form_8_div_103_span_5_Template, 3, 3, "span", 84)(6, CompanySettingsComponent_form_8_div_103_span_6_Template, 4, 3, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 89);
    \u0275\u0275listener("click", function CompanySettingsComponent_form_8_div_103_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.selectedLogoFile = null;
      ctx_r0.logoPreview = null;
      return \u0275\u0275resetView(ctx_r0.updateLogoPreview());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedLogoFile.name, " (", (ctx_r0.selectedLogoFile.size / 1024).toFixed(2), " KB) ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isUploadingLogo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isUploadingLogo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isUploadingLogo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "common.cancel"), " ");
  }
}
function CompanySettingsComponent_form_8_div_106_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "common.delete"), " ");
  }
}
function CompanySettingsComponent_form_8_div_106_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "companySettings.deleting"), " ");
  }
}
function CompanySettingsComponent_form_8_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275element(1, "img", 92);
    \u0275\u0275elementStart(2, "div", 11)(3, "button", 93);
    \u0275\u0275listener("click", function CompanySettingsComponent_form_8_div_106_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteLogo());
    });
    \u0275\u0275template(4, CompanySettingsComponent_form_8_div_106_span_4_Template, 4, 3, "span", 84)(5, CompanySettingsComponent_form_8_div_106_span_5_Template, 4, 3, "span", 84);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.logoPreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isDeletingLogo || !(ctx_r0.company == null ? null : ctx_r0.company.logo));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isDeletingLogo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isDeletingLogo);
  }
}
function CompanySettingsComponent_form_8_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275elementStart(2, "p", 97);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "companySettings.noLogo"));
  }
}
function CompanySettingsComponent_form_8_div_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.addressRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_mat_option_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pays_r5 = ctx.$implicit;
    \u0275\u0275property("value", pays_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pays_r5);
  }
}
function CompanySettingsComponent_form_8_div_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.countryRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_mat_option_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r6 = ctx.$implicit;
    \u0275\u0275property("value", region_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(region_r6);
  }
}
function CompanySettingsComponent_form_8_div_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.regionRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_mat_option_197_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const devise_r7 = ctx.$implicit;
    \u0275\u0275property("value", devise_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(devise_r7);
  }
}
function CompanySettingsComponent_form_8_div_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.currencyRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_mat_option_210_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const devise_r8 = ctx.$implicit;
    \u0275\u0275property("value", devise_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(devise_r8);
  }
}
function CompanySettingsComponent_form_8_div_211_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.mainCurrencyRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_mat_option_223_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const methode_r9 = ctx.$implicit;
    \u0275\u0275property("value", methode_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(methode_r9);
  }
}
function CompanySettingsComponent_form_8_div_224_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.valuationMethodRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_div_233_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.currentFiscalYearRequired"), " ");
  }
}
function CompanySettingsComponent_form_8_div_234_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.yearRangeError"), " ");
  }
}
function CompanySettingsComponent_form_8_div_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "companySettings.negativeCapitalError"), " ");
  }
}
function CompanySettingsComponent_form_8_span_258_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "companySettings.saveChanges"));
  }
}
function CompanySettingsComponent_form_8_span_259_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "companySettings.saving"), " ");
  }
}
function CompanySettingsComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 14);
    \u0275\u0275listener("ngSubmit", function CompanySettingsComponent_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16)(3, "h6", 17)(4, "span", 18);
    \u0275\u0275element(5, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "div", 21)(10, "div", 22)(11, "label", 23);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "span", 24);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 25);
    \u0275\u0275template(17, CompanySettingsComponent_form_8_div_17_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 21)(19, "div", 22)(20, "label", 23);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "span", 24);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 27);
    \u0275\u0275template(26, CompanySettingsComponent_form_8_div_26_Template, 3, 3, "div", 26)(27, CompanySettingsComponent_form_8_div_27_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 28)(29, "div", 22)(30, "label", 23);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementStart(33, "span", 24);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 29);
    \u0275\u0275template(36, CompanySettingsComponent_form_8_div_36_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 28)(38, "div", 22)(39, "label", 23);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementStart(42, "span", 24);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "input", 30);
    \u0275\u0275template(45, CompanySettingsComponent_form_8_div_45_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 20)(47, "div", 28)(48, "div", 22)(49, "label", 23);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 28)(54, "div", 22)(55, "label", 23);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 28)(60, "div", 22)(61, "label", 23);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 28)(66, "div", 22)(67, "label", 23);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 35)(72, "div", 16)(73, "h6", 17)(74, "span", 18);
    \u0275\u0275element(75, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 37)(79, "div", 38)(80, "div", 39)(81, "div", 40)(82, "div", 41)(83, "h6", 42);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p", 43);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "div", 40)(90, "div", 44)(91, "div", 45)(92, "div", 46)(93, "div", 47)(94, "input", 48);
    \u0275\u0275listener("change", function CompanySettingsComponent_form_8_Template_input_change_94_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLogoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 49)(96, "h4");
    \u0275\u0275element(97, "i", 50);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "span", 43);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, CompanySettingsComponent_form_8_div_103_Template, 10, 8, "div", 51);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(104, "div", 52)(105, "div", 53);
    \u0275\u0275template(106, CompanySettingsComponent_form_8_div_106_Template, 6, 4, "div", 54)(107, CompanySettingsComponent_form_8_ng_template_107_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 20)(110, "div", 55)(111, "div", 22)(112, "label", 23);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 56);
    \u0275\u0275element(116, "input", 57);
    \u0275\u0275elementStart(117, "button", 58);
    \u0275\u0275pipe(118, "translate");
    \u0275\u0275listener("click", function CompanySettingsComponent_form_8_Template_button_click_117_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copyLogoUrl());
    });
    \u0275\u0275element(119, "i", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "small", 60);
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(123, "div", 61)(124, "div", 16)(125, "h6", 62)(126, "span", 18);
    \u0275\u0275element(127, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 20)(131, "div", 55)(132, "div", 22)(133, "label", 23);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementStart(136, "span", 24);
    \u0275\u0275text(137, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(138, "input", 64);
    \u0275\u0275template(139, CompanySettingsComponent_form_8_div_139_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 28)(141, "div", 22)(142, "label", 23);
    \u0275\u0275text(143);
    \u0275\u0275pipe(144, "translate");
    \u0275\u0275elementStart(145, "span", 24);
    \u0275\u0275text(146, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "mat-select", 65)(148, "mat-option", 66);
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(151, CompanySettingsComponent_form_8_mat_option_151_Template, 2, 2, "mat-option", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(152, CompanySettingsComponent_form_8_div_152_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "div", 28)(154, "div", 22)(155, "label", 23);
    \u0275\u0275text(156);
    \u0275\u0275pipe(157, "translate");
    \u0275\u0275elementStart(158, "span", 24);
    \u0275\u0275text(159, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "mat-select", 68)(161, "mat-option", 66);
    \u0275\u0275text(162);
    \u0275\u0275pipe(163, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(164, CompanySettingsComponent_form_8_mat_option_164_Template, 2, 2, "mat-option", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(165, CompanySettingsComponent_form_8_div_165_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(166, "div", 28)(167, "div", 22)(168, "label", 23);
    \u0275\u0275text(169);
    \u0275\u0275pipe(170, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(171, "input", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "div", 28)(173, "div", 22)(174, "label", 23);
    \u0275\u0275text(175);
    \u0275\u0275pipe(176, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(177, "input", 70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(178, "div", 71)(179, "div", 16)(180, "h6", 62)(181, "span", 18);
    \u0275\u0275element(182, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(183);
    \u0275\u0275pipe(184, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(185, "div", 20)(186, "div", 28)(187, "div", 22)(188, "label", 23);
    \u0275\u0275text(189);
    \u0275\u0275pipe(190, "translate");
    \u0275\u0275elementStart(191, "span", 24);
    \u0275\u0275text(192, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(193, "mat-select", 73)(194, "mat-option", 66);
    \u0275\u0275text(195);
    \u0275\u0275pipe(196, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(197, CompanySettingsComponent_form_8_mat_option_197_Template, 2, 2, "mat-option", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(198, CompanySettingsComponent_form_8_div_198_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(199, "div", 28)(200, "div", 22)(201, "label", 23);
    \u0275\u0275text(202);
    \u0275\u0275pipe(203, "translate");
    \u0275\u0275elementStart(204, "span", 24);
    \u0275\u0275text(205, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(206, "mat-select", 74)(207, "mat-option", 66);
    \u0275\u0275text(208);
    \u0275\u0275pipe(209, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(210, CompanySettingsComponent_form_8_mat_option_210_Template, 2, 2, "mat-option", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(211, CompanySettingsComponent_form_8_div_211_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(212, "div", 28)(213, "div", 22)(214, "label", 23);
    \u0275\u0275text(215);
    \u0275\u0275pipe(216, "translate");
    \u0275\u0275elementStart(217, "span", 24);
    \u0275\u0275text(218, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(219, "mat-select", 75)(220, "mat-option", 66);
    \u0275\u0275text(221);
    \u0275\u0275pipe(222, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(223, CompanySettingsComponent_form_8_mat_option_223_Template, 2, 2, "mat-option", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(224, CompanySettingsComponent_form_8_div_224_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(225, "div", 28)(226, "div", 22)(227, "label", 23);
    \u0275\u0275text(228);
    \u0275\u0275pipe(229, "translate");
    \u0275\u0275elementStart(230, "span", 24);
    \u0275\u0275text(231, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(232, "input", 76);
    \u0275\u0275template(233, CompanySettingsComponent_form_8_div_233_Template, 3, 3, "div", 26)(234, CompanySettingsComponent_form_8_div_234_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(235, "div", 28)(236, "div", 22)(237, "label", 23);
    \u0275\u0275text(238);
    \u0275\u0275pipe(239, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(240, "input", 77);
    \u0275\u0275template(241, CompanySettingsComponent_form_8_div_241_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(242, "div", 28)(243, "div", 22)(244, "label", 23);
    \u0275\u0275text(245);
    \u0275\u0275pipe(246, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(247, "div", 78);
    \u0275\u0275element(248, "input", 79);
    \u0275\u0275elementStart(249, "label", 80);
    \u0275\u0275text(250);
    \u0275\u0275pipe(251, "translate");
    \u0275\u0275pipe(252, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(253, "div", 81)(254, "button", 82);
    \u0275\u0275listener("click", function CompanySettingsComponent_form_8_Template_button_click_254_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCancel());
    });
    \u0275\u0275text(255);
    \u0275\u0275pipe(256, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "button", 83);
    \u0275\u0275template(258, CompanySettingsComponent_form_8_span_258_Template, 3, 3, "span", 84)(259, CompanySettingsComponent_form_8_span_259_Template, 4, 3, "span", 84);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_72_0;
    const noLogoTemplate_r10 = \u0275\u0275reference(108);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.companyForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 89, "companySettings.generalInformation"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 91, "companySettings.companyName"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("nom"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("nom", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 93, "companySettings.email"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("email", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("email", "email"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 95, "companySettings.phone"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("telephone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("telephone", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 97, "companySettings.activity"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("activite"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("activite", "required"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 99, "companySettings.accountingNumber"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 101, "companySettings.rccm"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 103, "companySettings.taxRegime"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 105, "companySettings.legalForm"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 107, "companySettings.logoManagement"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 109, "companySettings.companyLogo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 111, "companySettings.logoDescription"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 113, "companySettings.selectFile"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 115, "companySettings.recommendedSize"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedLogoFile);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.logoPreview)("ngIfElse", noLogoTemplate_r10);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(114, 117, "companySettings.logoUrl"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(118, 119, "companySettings.copyUrl")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(122, 121, "companySettings.logoUrlDescription"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(129, 123, "companySettings.addressInformation"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(135, 125, "companySettings.address"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("adresse"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("adresse", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(144, 127, "companySettings.country"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("pays"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(150, 129, "companySettings.selectOption"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.paysOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("pays", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(157, 131, "companySettings.region"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("region"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(163, 133, "companySettings.selectOption"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.regionOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("region", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(170, 135, "companySettings.postalBox"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(176, 137, "companySettings.website"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(184, 139, "companySettings.financialInformation"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(190, 141, "companySettings.currency"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("devise"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(196, 143, "companySettings.selectOption"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.deviseOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("devise", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(203, 145, "companySettings.mainCurrency"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("devisePrincipale"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(209, 147, "companySettings.selectOption"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.deviseOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("devisePrincipale", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(216, 149, "companySettings.valuationMethod"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("methodeValorisation"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(222, 151, "companySettings.selectOption"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.methodeValorisationOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("methodeValorisation", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(229, 153, "companySettings.currentFiscalYear"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r0.isFieldInvalid("exerciceEnCours"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("exerciceEnCours", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("exerciceEnCours", "min") || ctx_r0.hasError("exerciceEnCours", "max"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(239, 155, "companySettings.capital"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("capital", "min"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasError("capital", "min"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(246, 157, "companySettings.status"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_72_0 = ctx_r0.companyForm.get("actif")) == null ? null : tmp_72_0.value) ? \u0275\u0275pipeBind1(251, 159, "companySettings.active") : \u0275\u0275pipeBind1(252, 161, "companySettings.inactive"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(256, 163, "common.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.companyForm.invalid || ctx_r0.isSaving || !ctx_r0.companyForm.dirty);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
  }
}
var CompanySettingsComponent = class _CompanySettingsComponent {
  fb;
  companyService;
  companyForm;
  isLoading = false;
  isSaving = false;
  isUploadingLogo = false;
  isDeletingLogo = false;
  errorMessage = "";
  successMessage = "";
  company = null;
  selectedLogoFile = null;
  logoPreview = null;
  // Options pour les sélecteurs
  methodeValorisationOptions = ["FIFO", "LIFO", "MOYENNE"];
  deviseOptions = ["USD", "EUR", "XAF", "XOF", "GBP"];
  paysOptions = ["Cameroun", "France", "USA", "Canada", "Belgique"];
  regionOptions = ["Centre", "Littoral", "Ouest", "Nord", "Sud"];
  constructor(fb, companyService) {
    this.fb = fb;
    this.companyService = companyService;
    this.companyForm = this.createForm();
  }
  ngOnInit() {
    this.loadCompany();
  }
  createForm() {
    return this.fb.group({
      nom: ["", [Validators.required]],
      activite: ["", [Validators.required]],
      adresse: ["", [Validators.required]],
      boitePostal: [""],
      pays: ["", [Validators.required]],
      region: ["", [Validators.required]],
      telephone: ["", [Validators.required]],
      nc: [""],
      rccm: [""],
      regimeFiscal: [""],
      devise: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      siteWeb: [""],
      logo: [""],
      favicon: [""],
      actif: [true],
      methodeValorisation: ["FIFO", [Validators.required]],
      devisePrincipale: ["", [Validators.required]],
      exerciceEnCours: [(/* @__PURE__ */ new Date()).getFullYear(), [Validators.required, Validators.min(2e3), Validators.max(2100)]],
      capital: [0, [Validators.min(0)]],
      formeJuridique: [""]
    });
  }
  loadCompany() {
    this.isLoading = true;
    this.errorMessage = "";
    this.companyService.getCurrentUserCompany().subscribe({
      next: (company) => {
        this.company = company;
        this.companyForm.patchValue(company);
        this.updateLogoPreview();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du chargement des donn\xE9es de la soci\xE9t\xE9: " + (error.error?.message || error.message);
        this.isLoading = false;
        console.error("Error loading company:", error);
      }
    });
  }
  onSubmit() {
    if (this.companyForm.invalid) {
      this.markFormGroupTouched(this.companyForm);
      return;
    }
    this.isSaving = true;
    this.errorMessage = "";
    this.successMessage = "";
    const formData = this.companyForm.value;
    this.companyService.updateCurrentUserCompany(formData).subscribe({
      next: (updatedCompany) => {
        this.company = updatedCompany;
        this.successMessage = "Les modifications ont \xE9t\xE9 enregistr\xE9es avec succ\xE8s.";
        this.isSaving = false;
        this.companyForm.markAsPristine();
      },
      error: (error) => {
        this.errorMessage = "Erreur lors de la mise \xE0 jour: " + (error.error?.message || error.message);
        this.isSaving = false;
        console.error("Error updating company:", error);
      }
    });
  }
  onCancel() {
    if (this.company) {
      this.companyForm.reset(this.company);
      this.companyForm.markAsPristine();
    }
    this.errorMessage = "";
    this.successMessage = "";
    this.selectedLogoFile = null;
    this.logoPreview = null;
    this.updateLogoPreview();
  }
  onLogoSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.selectedLogoFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result;
      };
      reader.readAsDataURL(this.selectedLogoFile);
    }
  }
  uploadLogo() {
    if (!this.selectedLogoFile) {
      this.errorMessage = "Veuillez s\xE9lectionner un fichier logo.";
      return;
    }
    this.isUploadingLogo = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.companyService.uploadCurrentUserCompanyLogo(this.selectedLogoFile).subscribe({
      next: (updatedCompany) => {
        this.company = updatedCompany;
        this.companyForm.patchValue({ logo: updatedCompany.logo });
        this.successMessage = "Logo t\xE9l\xE9charg\xE9 avec succ\xE8s.";
        this.isUploadingLogo = false;
        this.selectedLogoFile = null;
        this.updateLogoPreview();
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du t\xE9l\xE9chargement du logo: " + (error.error?.message || error.message);
        this.isUploadingLogo = false;
        console.error("Error uploading logo:", error);
      }
    });
  }
  deleteLogo() {
    if (!confirm("\xCAtes-vous s\xFBr de vouloir supprimer le logo ?")) {
      return;
    }
    this.isDeletingLogo = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.companyService.deleteCurrentUserCompanyLogo().subscribe({
      next: (updatedCompany) => {
        this.company = updatedCompany;
        this.companyForm.patchValue({ logo: "" });
        this.successMessage = "Logo supprim\xE9 avec succ\xE8s.";
        this.isDeletingLogo = false;
        this.updateLogoPreview();
      },
      error: (error) => {
        this.errorMessage = "Erreur lors de la suppression du logo: " + (error.error?.message || error.message);
        this.isDeletingLogo = false;
        console.error("Error deleting logo:", error);
      }
    });
  }
  updateLogoPreview() {
    if (this.company?.logo) {
      this.logoPreview = this.company.logo;
    } else {
      this.logoPreview = null;
    }
  }
  copyLogoUrl() {
    const logoUrl = this.companyForm.get("logo")?.value;
    if (logoUrl) {
      navigator.clipboard.writeText(logoUrl).then(() => {
        this.successMessage = "URL du logo copi\xE9e dans le presse-papier.";
        setTimeout(() => {
          if (this.successMessage === "URL du logo copi\xE9e dans le presse-papier.") {
            this.successMessage = "";
          }
        }, 3e3);
      }).catch((err) => {
        console.error("Failed to copy: ", err);
        this.errorMessage = "\xC9chec de la copie de l'URL.";
      });
    }
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
  hasError(controlName, errorName) {
    const control = this.companyForm.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }
  isFieldInvalid(controlName) {
    const control = this.companyForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
  static \u0275fac = function CompanySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanySettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanySettingsComponent, selectors: [["app-company-settings"]], decls: 9, vars: 7, consts: [["noLogoTemplate", ""], [1, "mb-3", "pb-2"], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-bold", "mb-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [3, "ngSubmit", "formGroup"], [1, "border-bottom", "mb-3"], [1, "card-title-head"], [1, "fs-16", "fw-semibold", "mb-3", "d-flex", "align-items-center"], [1, "fs-16", "me-2", "p-1", "rounded", "bg-dark", "text-white", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-info-circle"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-4"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nom", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "col-md-6"], ["type", "text", "formControlName", "telephone", 1, "form-control"], ["type", "text", "formControlName", "activite", 1, "form-control"], ["type", "text", "formControlName", "nc", 1, "form-control"], ["type", "text", "formControlName", "rccm", 1, "form-control"], ["type", "text", "formControlName", "regimeFiscal", 1, "form-control"], ["type", "text", "formControlName", "formeJuridique", 1, "form-control"], [1, "border-bottom", "mb-3", "pb-3"], [1, "isax", "isax-image"], [1, "row", "align-items-center", "pb-3", "mb-3"], [1, "col-xl-9"], [1, "row", "gy-3", "align-items-center"], [1, "col-lg-6"], [1, "logo-info"], [1, "fs-14", "fw-medium", "mb-1"], [1, "fs-12"], [1, "profile-pic-upload", "mb-0", "justify-content-lg-end"], [1, "new-employee-field"], [1, "mb-0"], [1, "image-upload", "mb-1"], ["type", "file", "accept", ".jpg,.jpeg,.png,.svg,.gif", "id", "logoUpload", 3, "change"], [1, "image-uploads"], [1, "ti", "ti-upload", "me-1"], ["class", "mt-2", 4, "ngIf"], [1, "col-xl-3"], [1, "new-logo", "ms-xl-auto", "bg-light", "border", "text-center", "p-3"], ["class", "logo-preview-container", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], [1, "input-group"], ["type", "text", "formControlName", "logo", "readonly", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "title"], [1, "isax", "isax-copy"], [1, "text-muted"], [1, "company-address", "pb-2", "mb-3", "border-bottom"], [1, "fs-16", "fw-bold", "mb-3", "d-flex", "align-items-center"], [1, "isax", "isax-map"], ["type", "text", "formControlName", "adresse", 1, "form-control"], ["formControlName", "pays", 1, "custom-mat-select", "select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "region", 1, "custom-mat-select", "select"], ["type", "text", "formControlName", "boitePostal", 1, "form-control"], ["type", "text", "formControlName", "siteWeb", 1, "form-control"], [1, "company-financial", "pb-2", "mb-3", "border-bottom"], [1, "isax", "isax-dollar-circle"], ["formControlName", "devise", 1, "custom-mat-select", "select"], ["formControlName", "devisePrincipale", 1, "custom-mat-select", "select"], ["formControlName", "methodeValorisation", 1, "custom-mat-select", "select"], ["type", "number", "formControlName", "exerciceEnCours", 1, "form-control"], ["type", "number", "formControlName", "capital", 1, "form-control"], [1, "form-check", "form-switch", "mt-2"], ["type", "checkbox", "formControlName", "actif", "id", "actifSwitch", 1, "form-check-input"], ["for", "actifSwitch", 1, "form-check-label"], [1, "d-flex", "align-items-center", "justify-content-between", "settings-bottom-btn", "mt-0"], ["type", "button", 1, "btn", "btn-outline-white", "me-2", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback", "d-block"], [1, "alert", "alert-info", "py-2", "mb-2"], [1, "isax", "isax-document", "me-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-2", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "logo-preview-container"], ["alt", "Logo de la soci\xE9t\xE9", 1, "img-fluid", 2, "max-height", "100px", 3, "src"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "disabled"], [1, "isax", "isax-trash", "me-1"], [1, "text-muted", "py-4"], [1, "isax", "isax-image", "fs-1"], [1, "mt-2", "mb-0", "fs-12"], [3, "value"]], template: function CompanySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h6", 3);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, CompanySettingsComponent_div_5_Template, 7, 3, "div", 4)(6, CompanySettingsComponent_div_6_Template, 2, 1, "div", 5)(7, CompanySettingsComponent_div_7_Template, 2, 1, "div", 6)(8, CompanySettingsComponent_form_8_Template, 260, 165, "form", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "companySettings.title"));
      \u0275\u0275advance(2);
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
    NumberValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanySettingsComponent, [{
    type: Component,
    args: [{ selector: "app-company-settings", standalone: true, imports: [
      CommonModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      TranslatePipe
    ], template: `<div class="mb-3 pb-2">
    <div class="mb-3 pb-3 border-bottom">
        <h6 class="fw-bold mb-0">{{ 'companySettings.title' | translate }}</h6>
    </div>
    
    <!-- Loading indicator -->
    <div *ngIf="isLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">{{ 'companySettings.loading' | translate }}</p>
    </div>
    
    <!-- Error message -->
    <div *ngIf="errorMessage && !isLoading" class="alert alert-danger">
        {{ errorMessage }}
    </div>
    
    <!-- Success message -->
    <div *ngIf="successMessage" class="alert alert-success">
        {{ successMessage }}
    </div>
    
    <form [formGroup]="companyForm" (ngSubmit)="onSubmit()" *ngIf="!isLoading">
        <div class="border-bottom mb-3">
            <div class="card-title-head">
                <h6 class="fs-16 fw-semibold mb-3 d-flex align-items-center">
                    <span class="fs-16 me-2 p-1 rounded bg-dark text-white d-inline-flex align-items-center justify-content-center"><i class="isax isax-info-circle"></i></span> 
                    {{ 'companySettings.generalInformation' | translate }}
                </h6>
            </div>

            <!-- start row -->
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-4">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.companyName' | translate }} <span class="text-danger">*</span>
                        </label>
                        <input type="text" formControlName="nom" class="form-control" [class.is-invalid]="isFieldInvalid('nom')">
                        <div *ngIf="hasError('nom', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.companyNameRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-xl-6 col-lg-6 col-md-4">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.email' | translate }} <span class="text-danger">*</span>
                        </label>
                        <input type="email" formControlName="email" class="form-control" [class.is-invalid]="isFieldInvalid('email')">
                        <div *ngIf="hasError('email', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.emailRequired' | translate }}
                        </div>
                        <div *ngIf="hasError('email', 'email')" class="invalid-feedback d-block">
                            {{ 'companySettings.emailInvalid' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.phone' | translate }} <span class="text-danger">*</span>
                        </label>
                        <input type="text" formControlName="telephone" class="form-control" [class.is-invalid]="isFieldInvalid('telephone')">
                        <div *ngIf="hasError('telephone', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.phoneRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.activity' | translate }} <span class="text-danger">*</span>
                        </label>
                        <input type="text" formControlName="activite" class="form-control" [class.is-invalid]="isFieldInvalid('activite')">
                        <div *ngIf="hasError('activite', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.activityRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
            </div>
            <!-- end row -->
            
            <!-- start row -->
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.accountingNumber' | translate }}
                        </label>
                        <input type="text" formControlName="nc" class="form-control">
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.rccm' | translate }}
                        </label>
                        <input type="text" formControlName="rccm" class="form-control">
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.taxRegime' | translate }}
                        </label>
                        <input type="text" formControlName="regimeFiscal" class="form-control">
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.legalForm' | translate }}
                        </label>
                        <input type="text" formControlName="formeJuridique" class="form-control">
                    </div>
                </div><!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <div class="border-bottom mb-3 pb-3">
            <div class="card-title-head">
                <h6 class="fs-16 fw-semibold mb-3 d-flex align-items-center">
                    <span class="fs-16 me-2 p-1 rounded bg-dark text-white d-inline-flex align-items-center justify-content-center"><i class="isax isax-image"></i></span> 
                    {{ 'companySettings.logoManagement' | translate }}
                </h6>
            </div>

            <!-- Logo preview and actions -->
            <div class="row align-items-center pb-3 mb-3">
                <div class="col-xl-9">
                    <div class="row gy-3 align-items-center">
                        <div class="col-lg-6">
                            <div class="logo-info">
                            <h6 class="fs-14 fw-medium mb-1">{{ 'companySettings.companyLogo' | translate }}</h6>
                            <p class="fs-12">{{ 'companySettings.logoDescription' | translate }}</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="profile-pic-upload mb-0 justify-content-lg-end">
                                <div class="new-employee-field">
                                    <div class="mb-0">
                                        <div class="image-upload mb-1">
                                            <input type="file" (change)="onLogoSelected($event)" accept=".jpg,.jpeg,.png,.svg,.gif" id="logoUpload">
                                            <div class="image-uploads">
                                                <h4><i class="ti ti-upload me-1"></i>{{ 'companySettings.selectFile' | translate }}</h4>
                                            </div>
                                        </div>
                                        <span class="fs-12">{{ 'companySettings.recommendedSize' | translate }}</span>
                                        
                                        <!-- File selected info -->
                                        <div *ngIf="selectedLogoFile" class="mt-2">
                                            <div class="alert alert-info py-2 mb-2">
                                                <i class="isax isax-document me-1"></i>
                                                {{ selectedLogoFile.name }} ({{ (selectedLogoFile.size / 1024).toFixed(2) }} KB)
                                            </div>
                                            <button type="button" class="btn btn-primary btn-sm me-2" (click)="uploadLogo()" [disabled]="isUploadingLogo">
                                                <span *ngIf="!isUploadingLogo">{{ 'companySettings.uploadLogo' | translate }}</span>
                                                <span *ngIf="isUploadingLogo">
                                                    <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                                    {{ 'companySettings.uploading' | translate }}
                                                </span>
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary btn-sm" (click)="selectedLogoFile = null; logoPreview = null; updateLogoPreview()">
                                                {{ 'common.cancel' | translate }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-xl-3">
                    <div class="new-logo ms-xl-auto bg-light border text-center p-3">
                        <!-- Logo preview -->
                        <div *ngIf="logoPreview; else noLogoTemplate" class="logo-preview-container">
                            <img [src]="logoPreview" alt="Logo de la soci\xE9t\xE9" class="img-fluid" style="max-height: 100px;">
                            <div class="mt-2">
                                <button type="button" class="btn btn-outline-danger btn-sm" (click)="deleteLogo()" [disabled]="isDeletingLogo || !company?.logo">
                                    <span *ngIf="!isDeletingLogo">
                                        <i class="isax isax-trash me-1"></i>{{ 'common.delete' | translate }}
                                    </span>
                                    <span *ngIf="isDeletingLogo">
                                        <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                        {{ 'companySettings.deleting' | translate }}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <ng-template #noLogoTemplate>
                            <div class="text-muted py-4">
                                <i class="isax isax-image fs-1"></i>
                                <p class="mt-2 mb-0 fs-12">{{ 'companySettings.noLogo' | translate }}</p>
                            </div>
                        </ng-template>
                    </div>
                </div><!-- end col -->
            </div>
            <!-- end row -->

            <!-- Logo URL field (readonly) -->
            <div class="row">
                <div class="col-md-12">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.logoUrl' | translate }}
                        </label>
                        <div class="input-group">
                            <input type="text" formControlName="logo" class="form-control" readonly>
                            <button class="btn btn-outline-secondary" type="button" (click)="copyLogoUrl()" title="{{ 'companySettings.copyUrl' | translate }}">
                                <i class="isax isax-copy"></i>
                            </button>
                        </div>
                        <small class="text-muted">{{ 'companySettings.logoUrlDescription' | translate }}</small>
                    </div>
                </div>
            </div>

        </div>
        <div class="company-address pb-2 mb-3 border-bottom">
            <div class="card-title-head">
                <h6 class="fs-16 fw-bold mb-3 d-flex align-items-center">
                    <span class="fs-16 me-2 p-1 rounded bg-dark text-white d-inline-flex align-items-center justify-content-center"><i class="isax isax-map"></i></span> 
                    {{ 'companySettings.addressInformation' | translate }}
                </h6>
            </div>

            <!-- start row -->
            <div class="row">
                <div class="col-md-12">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.address' | translate }} <span class="text-danger">*</span>
                        </label>
                        <input type="text" formControlName="adresse" class="form-control" [class.is-invalid]="isFieldInvalid('adresse')">
                        <div *ngIf="hasError('adresse', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.addressRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.country' | translate }} <span class="text-danger">*</span>
                        </label>
                        <mat-select formControlName="pays" class="custom-mat-select select" [class.is-invalid]="isFieldInvalid('pays')">
                            <mat-option value="">{{ 'companySettings.selectOption' | translate }}</mat-option>
                            <mat-option *ngFor="let pays of paysOptions" [value]="pays">{{ pays }}</mat-option>
                        </mat-select>
                        <div *ngIf="hasError('pays', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.countryRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.region' | translate }} <span class="text-danger">*</span>
                        </label>
                        <mat-select formControlName="region" class="custom-mat-select select" [class.is-invalid]="isFieldInvalid('region')">
                            <mat-option value="">{{ 'companySettings.selectOption' | translate }}</mat-option>
                            <mat-option *ngFor="let region of regionOptions" [value]="region">{{ region }}</mat-option>
                        </mat-select>
                        <div *ngIf="hasError('region', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.regionRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.postalBox' | translate }}
                        </label>
                        <input type="text" formControlName="boitePostal" class="form-control">
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.website' | translate }}
                        </label>
                        <input type="text" formControlName="siteWeb" class="form-control">
                    </div>
                </div><!-- end col -->
            </div>
            <!-- end row -->

        </div>
        
        <div class="company-financial pb-2 mb-3 border-bottom">
            <div class="card-title-head">
                <h6 class="fs-16 fw-bold mb-3 d-flex align-items-center">
                    <span class="fs-16 me-2 p-1 rounded bg-dark text-white d-inline-flex align-items-center justify-content-center"><i class="isax isax-dollar-circle"></i></span> 
                    {{ 'companySettings.financialInformation' | translate }}
                </h6>
            </div>

            <!-- start row -->
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.currency' | translate }} <span class="text-danger">*</span>
                        </label>
                        <mat-select formControlName="devise" class="custom-mat-select select" [class.is-invalid]="isFieldInvalid('devise')">
                            <mat-option value="">{{ 'companySettings.selectOption' | translate }}</mat-option>
                            <mat-option *ngFor="let devise of deviseOptions" [value]="devise">{{ devise }}</mat-option>
                        </mat-select>
                        <div *ngIf="hasError('devise', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.currencyRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.mainCurrency' | translate }} <span class="text-danger">*</span>
                        </label>
                        <mat-select formControlName="devisePrincipale" class="custom-mat-select select" [class.is-invalid]="isFieldInvalid('devisePrincipale')">
                            <mat-option value="">{{ 'companySettings.selectOption' | translate }}</mat-option>
                            <mat-option *ngFor="let devise of deviseOptions" [value]="devise">{{ devise }}</mat-option>
                        </mat-select>
                        <div *ngIf="hasError('devisePrincipale', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.mainCurrencyRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.valuationMethod' | translate }} <span class="text-danger">*</span>
                        </label>
                        <mat-select formControlName="methodeValorisation" class="custom-mat-select select" [class.is-invalid]="isFieldInvalid('methodeValorisation')">
                            <mat-option value="">{{ 'companySettings.selectOption' | translate }}</mat-option>
                            <mat-option *ngFor="let methode of methodeValorisationOptions" [value]="methode">{{ methode }}</mat-option>
                        </mat-select>
                        <div *ngIf="hasError('methodeValorisation', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.valuationMethodRequired' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.currentFiscalYear' | translate }} <span class="text-danger">*</span>
                        </label>
                        <input type="number" formControlName="exerciceEnCours" class="form-control" [class.is-invalid]="isFieldInvalid('exerciceEnCours')">
                        <div *ngIf="hasError('exerciceEnCours', 'required')" class="invalid-feedback d-block">
                            {{ 'companySettings.currentFiscalYearRequired' | translate }}
                        </div>
                        <div *ngIf="hasError('exerciceEnCours', 'min') || hasError('exerciceEnCours', 'max')" class="invalid-feedback d-block">
                            {{ 'companySettings.yearRangeError' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">
                            {{ 'companySettings.capital' | translate }}
                        </label>
                        <input type="number" formControlName="capital" class="form-control" [class.is-invalid]="hasError('capital', 'min')">
                        <div *ngIf="hasError('capital', 'min')" class="invalid-feedback d-block">
                            {{ 'companySettings.negativeCapitalError' | translate }}
                        </div>
                    </div>
                </div><!-- end col -->
                <div class="col-md-6">
                    <div class="mb-3">
                            <label class="form-label">
                            {{ 'companySettings.status' | translate }}
                        </label>
                        <div class="form-check form-switch mt-2">
                            <input class="form-check-input" type="checkbox" formControlName="actif" id="actifSwitch">
                            <label class="form-check-label" for="actifSwitch">
                                {{ companyForm.get('actif')?.value ? ('companySettings.active' | translate) : ('companySettings.inactive' | translate) }}
                            </label>
                        </div>
                    </div>
                </div><!-- end col -->
            </div>
            <!-- end row -->
        </div>
        
        <div class="d-flex align-items-center justify-content-between settings-bottom-btn mt-0">
            <button type="button" class="btn btn-outline-white me-2" (click)="onCancel()" [disabled]="isSaving">{{ 'common.cancel' | translate }}</button>
            <button type="submit" class="btn btn-primary" [disabled]="companyForm.invalid || isSaving || !companyForm.dirty">
                <span *ngIf="!isSaving">{{ 'companySettings.saveChanges' | translate }}</span>
                <span *ngIf="isSaving">
                    <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                    {{ 'companySettings.saving' | translate }}
                </span>
            </button>
        </div>
    </form>
</div><!-- end col -->
` }]
  }], () => [{ type: FormBuilder }, { type: CompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanySettingsComponent, { className: "CompanySettingsComponent", filePath: "src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.ts", lineNumber: 25 });
})();
export {
  CompanySettingsComponent
};
//# sourceMappingURL=chunk-7K6QLBTY.js.map
