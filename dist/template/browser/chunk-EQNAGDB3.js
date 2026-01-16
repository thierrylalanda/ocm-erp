import {
  COMPANY_REPOSITORY,
  CREATE_COMPANY_USE_CASE,
  CreateCompanyUseCaseImpl,
  mapCreateCompanyDtoToTenantCreateCommand,
  mapTenantToCreateCompanyResponseDto
} from "./chunk-ZH3GTM4L.js";
import {
  environment
} from "./chunk-7SCMAJTM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BLAAMQ2R.js";
import {
  HttpClient,
  HttpClientModule
} from "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  EventEmitter,
  Inject,
  Injectable,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/modules/configuration/presentation/components/company-form/company-form.component.ts
function CompanyFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Le nom de la soci\xE9t\xE9 est requis ");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " L'activit\xE9 est requise ");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Un email valide est requis ");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Le num\xE9ro contribuable est requis ");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Le RCCM est requis ");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Le r\xE9gime fiscal est requis ");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " La devise est requise ");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_span_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Cr\xE9er la soci\xE9t\xE9");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_span_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Cr\xE9ation en cours...");
    \u0275\u0275elementEnd();
  }
}
function CompanyFormComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function CompanyFormComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
var CompanyFormComponent = class _CompanyFormComponent {
  fb;
  createCompanyUseCase;
  companyCreated = new EventEmitter();
  cancel = new EventEmitter();
  companyForm;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  constructor(fb, createCompanyUseCase) {
    this.fb = fb;
    this.createCompanyUseCase = createCompanyUseCase;
    this.companyForm = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(2)]],
      activite: ["", [Validators.required, Validators.minLength(3)]],
      adresse: [""],
      boitePostal: [""],
      pays: ["Cameroun"],
      region: [""],
      telephone: [""],
      nc: ["", [Validators.required]],
      rccm: ["", [Validators.required]],
      regimeFiscal: ["", [Validators.required]],
      devise: ["XAF", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      siteWeb: [""],
      logo: [""],
      favicon: [""],
      actif: [true]
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.companyForm.invalid) {
        this.markFormGroupTouched(this.companyForm);
        return;
      }
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";
      try {
        const companyData = this.companyForm.value;
        const result = yield this.createCompanyUseCase.execute(companyData);
        this.successMessage = `Soci\xE9t\xE9 "${result.nom}" cr\xE9\xE9e avec succ\xE8s ! ID: ${result.id}`;
        this.companyCreated.emit(result);
        setTimeout(() => {
          this.companyForm.reset({
            pays: "Cameroun",
            devise: "XAF",
            actif: true
          });
        }, 2e3);
      } catch (error) {
        this.errorMessage = error.message || "Une erreur est survenue lors de la cr\xE9ation de la soci\xE9t\xE9";
        console.error("Erreur cr\xE9ation soci\xE9t\xE9:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  onCancel() {
    this.cancel.emit();
  }
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  static \u0275fac = function CompanyFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CREATE_COMPANY_USE_CASE));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyFormComponent, selectors: [["app-company-form"]], outputs: { companyCreated: "companyCreated", cancel: "cancel" }, decls: 103, vars: 27, consts: [[1, "company-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "nom"], ["id", "nom", "type", "text", "formControlName", "nom", "placeholder", "Entrez le nom de la soci\xE9t\xE9"], ["class", "error-message", 4, "ngIf"], ["for", "activite"], ["id", "activite", "type", "text", "formControlName", "activite", "placeholder", "Entrez l'activit\xE9 principale"], [1, "form-row"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "contact@societe.com"], ["for", "telephone"], ["id", "telephone", "type", "tel", "formControlName", "telephone", "placeholder", "+237 6 XX XX XX XX"], ["for", "nc"], ["id", "nc", "type", "text", "formControlName", "nc", "placeholder", "NCXXXXXXXXX"], ["for", "rccm"], ["id", "rccm", "type", "text", "formControlName", "rccm", "placeholder", "RCCMXXXXXXXXX"], ["for", "regimeFiscal"], ["id", "regimeFiscal", "formControlName", "regimeFiscal"], ["value", ""], ["value", "R\xE9gime r\xE9el simplifi\xE9"], ["value", "R\xE9gime r\xE9el normal"], ["value", "R\xE9gime forfaitaire"], ["value", "R\xE9gime lib\xE9ratoire"], ["for", "devise"], ["id", "devise", "formControlName", "devise"], ["value", "XAF"], ["value", "EUR"], ["value", "USD"], ["value", "XOF"], ["for", "adresse"], ["id", "adresse", "formControlName", "adresse", "placeholder", "Entrez l'adresse compl\xE8te", "rows", "2"], ["for", "pays"], ["id", "pays", "type", "text", "formControlName", "pays", "placeholder", "Cameroun"], ["for", "region"], ["id", "region", "type", "text", "formControlName", "region", "placeholder", "Centre"], ["for", "boitePostal"], ["id", "boitePostal", "type", "text", "formControlName", "boitePostal", "placeholder", "BP 1234"], ["for", "siteWeb"], ["id", "siteWeb", "type", "url", "formControlName", "siteWeb", "placeholder", "https://www.societe.com"], ["for", "logo"], ["id", "logo", "type", "url", "formControlName", "logo", "placeholder", "https://www.societe.com/logo.png"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "actif"], [1, "form-actions"], ["type", "submit", 3, "disabled"], [4, "ngIf"], ["type", "button", 3, "click"], ["class", "success-message", 4, "ngIf"], [1, "error-message"], [1, "success-message"]], template: function CompanyFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function CompanyFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(1, "h2");
      \u0275\u0275text(2, "Cr\xE9er une nouvelle soci\xE9t\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "label", 2);
      \u0275\u0275text(5, "Nom de la soci\xE9t\xE9 *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "input", 3);
      \u0275\u0275template(7, CompanyFormComponent_div_7_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 1)(9, "label", 5);
      \u0275\u0275text(10, "Activit\xE9 principale *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 6);
      \u0275\u0275template(12, CompanyFormComponent_div_12_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 1)(15, "label", 8);
      \u0275\u0275text(16, "Email *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 9);
      \u0275\u0275template(18, CompanyFormComponent_div_18_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 1)(20, "label", 10);
      \u0275\u0275text(21, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 7)(24, "div", 1)(25, "label", 12);
      \u0275\u0275text(26, "Num\xE9ro Contribuable (NC) *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 13);
      \u0275\u0275template(28, CompanyFormComponent_div_28_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 1)(30, "label", 14);
      \u0275\u0275text(31, "RCCM *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 15);
      \u0275\u0275template(33, CompanyFormComponent_div_33_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 7)(35, "div", 1)(36, "label", 16);
      \u0275\u0275text(37, "R\xE9gime Fiscal *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "select", 17)(39, "option", 18);
      \u0275\u0275text(40, "S\xE9lectionnez un r\xE9gime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 19);
      \u0275\u0275text(42, "R\xE9gime r\xE9el simplifi\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 20);
      \u0275\u0275text(44, "R\xE9gime r\xE9el normal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 21);
      \u0275\u0275text(46, "R\xE9gime forfaitaire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 22);
      \u0275\u0275text(48, "R\xE9gime lib\xE9ratoire");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, CompanyFormComponent_div_49_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 1)(51, "label", 23);
      \u0275\u0275text(52, "Devise *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "select", 24)(54, "option", 18);
      \u0275\u0275text(55, "S\xE9lectionnez une devise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 25);
      \u0275\u0275text(57, "Franc CFA (XAF)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 26);
      \u0275\u0275text(59, "Euro (EUR)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 27);
      \u0275\u0275text(61, "Dollar US (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 28);
      \u0275\u0275text(63, "Franc CFA Ouest (XOF)");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(64, CompanyFormComponent_div_64_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 1)(66, "label", 29);
      \u0275\u0275text(67, "Adresse");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "textarea", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 7)(70, "div", 1)(71, "label", 31);
      \u0275\u0275text(72, "Pays");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 1)(75, "label", 33);
      \u0275\u0275text(76, "R\xE9gion");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 1)(79, "label", 35);
      \u0275\u0275text(80, "Bo\xEEte Postale");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 7)(83, "div", 1)(84, "label", 37);
      \u0275\u0275text(85, "Site Web");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 1)(88, "label", 39);
      \u0275\u0275text(89, "Logo (URL)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "input", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 1)(92, "label", 41);
      \u0275\u0275element(93, "input", 42);
      \u0275\u0275text(94, " Soci\xE9t\xE9 active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 43)(96, "button", 44);
      \u0275\u0275template(97, CompanyFormComponent_span_97_Template, 2, 0, "span", 45)(98, CompanyFormComponent_span_98_Template, 2, 0, "span", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "button", 46);
      \u0275\u0275listener("click", function CompanyFormComponent_Template_button_click_99_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(100, "Annuler");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(101, CompanyFormComponent_div_101_Template, 2, 1, "div", 4)(102, CompanyFormComponent_div_102_Template, 2, 1, "div", 47);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      \u0275\u0275property("formGroup", ctx.companyForm);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ((tmp_1_0 = ctx.companyForm.get("nom")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.companyForm.get("nom")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.companyForm.get("nom")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.companyForm.get("nom")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx.companyForm.get("activite")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.companyForm.get("activite")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.companyForm.get("activite")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.companyForm.get("activite")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx.companyForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.companyForm.get("email")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.companyForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.companyForm.get("email")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx.companyForm.get("nc")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.companyForm.get("nc")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.companyForm.get("nc")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.companyForm.get("nc")) == null ? null : tmp_8_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx.companyForm.get("rccm")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.companyForm.get("rccm")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.companyForm.get("rccm")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.companyForm.get("rccm")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ((tmp_11_0 = ctx.companyForm.get("regimeFiscal")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.companyForm.get("regimeFiscal")) == null ? null : tmp_11_0.touched));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.companyForm.get("regimeFiscal")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.companyForm.get("regimeFiscal")) == null ? null : tmp_12_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx.companyForm.get("devise")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.companyForm.get("devise")) == null ? null : tmp_13_0.touched));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.companyForm.get("devise")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.companyForm.get("devise")) == null ? null : tmp_14_0.touched));
      \u0275\u0275advance(32);
      \u0275\u0275property("disabled", ctx.companyForm.invalid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.company-form[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  color: #333;\n  text-align: center;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 0;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #555;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\ninput.is-invalid[_ngcontent-%COMP%], \nselect.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.success-message[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 14px;\n  margin-top: 12px;\n  padding: 10px;\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 4px;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px solid #eee;\n}\nbutton[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\nbutton[type=submit][_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\nbutton[type=submit][_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n}\nbutton[type=button][_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\nbutton[type=button][_ngcontent-%COMP%]:hover {\n  background-color: #545b62;\n}\n/*# sourceMappingURL=company-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyFormComponent, [{
    type: Component,
    args: [{ selector: "app-company-form", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `
    <form [formGroup]="companyForm" (ngSubmit)="onSubmit()" class="company-form">
      <h2>Cr\xE9er une nouvelle soci\xE9t\xE9</h2>
      
      <div class="form-group">
        <label for="nom">Nom de la soci\xE9t\xE9 *</label>
        <input 
          id="nom" 
          type="text" 
          formControlName="nom" 
          placeholder="Entrez le nom de la soci\xE9t\xE9"
          [class.is-invalid]="companyForm.get('nom')?.invalid && companyForm.get('nom')?.touched"
        >
        <div *ngIf="companyForm.get('nom')?.invalid && companyForm.get('nom')?.touched" class="error-message">
          Le nom de la soci\xE9t\xE9 est requis
        </div>
      </div>

      <div class="form-group">
        <label for="activite">Activit\xE9 principale *</label>
        <input 
          id="activite" 
          type="text" 
          formControlName="activite" 
          placeholder="Entrez l'activit\xE9 principale"
          [class.is-invalid]="companyForm.get('activite')?.invalid && companyForm.get('activite')?.touched"
        >
        <div *ngIf="companyForm.get('activite')?.invalid && companyForm.get('activite')?.touched" class="error-message">
          L'activit\xE9 est requise
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="email">Email *</label>
          <input 
            id="email" 
            type="email" 
            formControlName="email" 
            placeholder="contact@societe.com"
            [class.is-invalid]="companyForm.get('email')?.invalid && companyForm.get('email')?.touched"
          >
          <div *ngIf="companyForm.get('email')?.invalid && companyForm.get('email')?.touched" class="error-message">
            Un email valide est requis
          </div>
        </div>

        <div class="form-group">
          <label for="telephone">T\xE9l\xE9phone</label>
          <input 
            id="telephone" 
            type="tel" 
            formControlName="telephone" 
            placeholder="+237 6 XX XX XX XX"
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="nc">Num\xE9ro Contribuable (NC) *</label>
          <input 
            id="nc" 
            type="text" 
            formControlName="nc" 
            placeholder="NCXXXXXXXXX"
            [class.is-invalid]="companyForm.get('nc')?.invalid && companyForm.get('nc')?.touched"
          >
          <div *ngIf="companyForm.get('nc')?.invalid && companyForm.get('nc')?.touched" class="error-message">
            Le num\xE9ro contribuable est requis
          </div>
        </div>

        <div class="form-group">
          <label for="rccm">RCCM *</label>
          <input 
            id="rccm" 
            type="text" 
            formControlName="rccm" 
            placeholder="RCCMXXXXXXXXX"
            [class.is-invalid]="companyForm.get('rccm')?.invalid && companyForm.get('rccm')?.touched"
          >
          <div *ngIf="companyForm.get('rccm')?.invalid && companyForm.get('rccm')?.touched" class="error-message">
            Le RCCM est requis
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="regimeFiscal">R\xE9gime Fiscal *</label>
          <select 
            id="regimeFiscal" 
            formControlName="regimeFiscal"
            [class.is-invalid]="companyForm.get('regimeFiscal')?.invalid && companyForm.get('regimeFiscal')?.touched"
          >
            <option value="">S\xE9lectionnez un r\xE9gime</option>
            <option value="R\xE9gime r\xE9el simplifi\xE9">R\xE9gime r\xE9el simplifi\xE9</option>
            <option value="R\xE9gime r\xE9el normal">R\xE9gime r\xE9el normal</option>
            <option value="R\xE9gime forfaitaire">R\xE9gime forfaitaire</option>
            <option value="R\xE9gime lib\xE9ratoire">R\xE9gime lib\xE9ratoire</option>
          </select>
          <div *ngIf="companyForm.get('regimeFiscal')?.invalid && companyForm.get('regimeFiscal')?.touched" class="error-message">
            Le r\xE9gime fiscal est requis
          </div>
        </div>

        <div class="form-group">
          <label for="devise">Devise *</label>
          <select 
            id="devise" 
            formControlName="devise"
            [class.is-invalid]="companyForm.get('devise')?.invalid && companyForm.get('devise')?.touched"
          >
            <option value="">S\xE9lectionnez une devise</option>
            <option value="XAF">Franc CFA (XAF)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="USD">Dollar US (USD)</option>
            <option value="XOF">Franc CFA Ouest (XOF)</option>
          </select>
          <div *ngIf="companyForm.get('devise')?.invalid && companyForm.get('devise')?.touched" class="error-message">
            La devise est requise
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="adresse">Adresse</label>
        <textarea 
          id="adresse" 
          formControlName="adresse" 
          placeholder="Entrez l'adresse compl\xE8te"
          rows="2"
        ></textarea>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="pays">Pays</label>
          <input 
            id="pays" 
            type="text" 
            formControlName="pays" 
            placeholder="Cameroun"
          >
        </div>

        <div class="form-group">
          <label for="region">R\xE9gion</label>
          <input 
            id="region" 
            type="text" 
            formControlName="region" 
            placeholder="Centre"
          >
        </div>

        <div class="form-group">
          <label for="boitePostal">Bo\xEEte Postale</label>
          <input 
            id="boitePostal" 
            type="text" 
            formControlName="boitePostal" 
            placeholder="BP 1234"
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="siteWeb">Site Web</label>
          <input 
            id="siteWeb" 
            type="url" 
            formControlName="siteWeb" 
            placeholder="https://www.societe.com"
          >
        </div>

        <div class="form-group">
          <label for="logo">Logo (URL)</label>
          <input 
            id="logo" 
            type="url" 
            formControlName="logo" 
            placeholder="https://www.societe.com/logo.png"
          >
        </div>
      </div>

      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" formControlName="actif">
          Soci\xE9t\xE9 active
        </label>
      </div>

      <div class="form-actions">
        <button type="submit" [disabled]="companyForm.invalid || isLoading">
          <span *ngIf="!isLoading">Cr\xE9er la soci\xE9t\xE9</span>
          <span *ngIf="isLoading">Cr\xE9ation en cours...</span>
        </button>
        <button type="button" (click)="onCancel()">Annuler</button>
      </div>

      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <div *ngIf="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </form>
  `, styles: ["/* angular:styles/component:scss;70498ba1221247accbbb8a7b163922a2d0a3f234ca843c0459a677be4d68ce8a;/Users/a1/Documents/angularProjects/ocm/src/app/modules/configuration/presentation/components/company-form/company-form.component.ts */\n.company-form {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nh2 {\n  margin-bottom: 24px;\n  color: #333;\n  text-align: center;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-row .form-group {\n  flex: 1;\n  margin-bottom: 0;\n}\nlabel {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #555;\n}\ninput,\nselect,\ntextarea {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\ninput.is-invalid,\nselect.is-invalid {\n  border-color: #dc3545;\n}\n.error-message {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.success-message {\n  color: #28a745;\n  font-size: 14px;\n  margin-top: 12px;\n  padding: 10px;\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 4px;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.checkbox-label input {\n  width: auto;\n  margin: 0;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px solid #eee;\n}\nbutton {\n  flex: 1;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\nbutton[type=submit] {\n  background-color: #007bff;\n  color: white;\n}\nbutton[type=submit]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\nbutton[type=submit]:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n}\nbutton[type=button] {\n  background-color: #6c757d;\n  color: white;\n}\nbutton[type=button]:hover {\n  background-color: #545b62;\n}\n/*# sourceMappingURL=company-form.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: void 0, decorators: [{
    type: Inject,
    args: [CREATE_COMPANY_USE_CASE]
  }] }], { companyCreated: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyFormComponent, { className: "CompanyFormComponent", filePath: "src/app/modules/configuration/presentation/components/company-form/company-form.component.ts", lineNumber: 354 });
})();

// src/app/modules/configuration/infrastructure/repositories/http-company.repository.ts
var HttpCompanyRepository = class _HttpCompanyRepository {
  http;
  baseUrl = environment.api + "hierarchie/societes";
  constructor(http) {
    this.http = http;
  }
  create(tenant) {
    const command = {
      nom: tenant.nom,
      code: tenant.code,
      description: tenant.description,
      email: tenant.email,
      phoneNumber: tenant.phoneNumber,
      address: tenant.address,
      city: tenant.city,
      pays: tenant.pays,
      currency: tenant.currency,
      activite: tenant.activite,
      postalBox: tenant.postalBox,
      region: tenant.region,
      taxNumber: tenant.taxNumber,
      tradeRegister: tenant.tradeRegister,
      fiscalRegime: tenant.fiscalRegime,
      faviconUrl: tenant.faviconUrl,
      maxUsers: tenant.maxUsers,
      timezone: tenant.timezone,
      language: tenant.language
    };
    return this.http.post(this.baseUrl, command).toPromise().then((response) => response).catch((error) => {
      console.error("Erreur cr\xE9ation soci\xE9t\xE9:", error);
      throw error;
    });
  }
  update(id, command) {
    return this.http.put(`${this.baseUrl}/${id}`, command).toPromise().then((response) => response).catch((error) => {
      console.error("Erreur mise \xE0 jour soci\xE9t\xE9:", error);
      throw error;
    });
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`).toPromise().catch((error) => {
      console.error("Erreur suppression soci\xE9t\xE9:", error);
      throw error;
    });
  }
  findById(id) {
    return this.http.get(`${this.baseUrl}/${id}`).toPromise().then((response) => response).catch((error) => {
      console.error("Erreur r\xE9cup\xE9ration soci\xE9t\xE9:", error);
      return null;
    });
  }
  setStatut(id, statut) {
    return this.http.patch(`${this.baseUrl}/${id}/statut`, { isActive: statut }).toPromise().then((response) => response).catch((error) => {
      console.error("Erreur changement statut soci\xE9t\xE9:", error);
      return null;
    });
  }
  findAll() {
    return this.http.get(this.baseUrl).toPromise().then((response) => response.content).catch((error) => {
      console.error("Erreur r\xE9cup\xE9ration liste soci\xE9t\xE9s:", error);
      return [];
    });
  }
  findByCode(code) {
    return this.http.get(`${this.baseUrl}?code=${code}`).toPromise().then((response) => response && response.length > 0 ? response[0] : null).catch((error) => {
      console.error("Erreur recherche par code:", error);
      return null;
    });
  }
  findByEmail(email) {
    return this.http.get(`${this.baseUrl}?email=${email}`).toPromise().then((response) => response && response.length > 0 ? response[0] : null).catch((error) => {
      console.error("Erreur recherche par email:", error);
      return null;
    });
  }
  findByTaxNumber(taxNumber) {
    return this.http.get(`${this.baseUrl}?taxNumber=${taxNumber}`).toPromise().then((response) => response && response.length > 0 ? response[0] : null).catch((error) => {
      console.error("Erreur recherche par num\xE9ro fiscal:", error);
      return null;
    });
  }
  findByTradeRegister(tradeRegister) {
    return this.http.get(`${this.baseUrl}?tradeRegister=${tradeRegister}`).toPromise().then((response) => response && response.length > 0 ? response[0] : null).catch((error) => {
      console.error("Erreur recherche par registre commerce:", error);
      return null;
    });
  }
  // Méthodes supplémentaires pour le DTO
  createFromDto(dto) {
    const command = mapCreateCompanyDtoToTenantCreateCommand(dto);
    return this.create(command);
  }
  findAllAsDto() {
    return this.findAll().then((tenants) => tenants.map((tenant) => mapTenantToCreateCompanyResponseDto(tenant)));
  }
  static \u0275fac = function HttpCompanyRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpCompanyRepository)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HttpCompanyRepository, factory: _HttpCompanyRepository.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpCompanyRepository, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/configuration/presentation/pages/company-management/company-management.component.ts
function CompanyManagementComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_43_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "h2");
    \u0275\u0275text(4, "Cr\xE9er une nouvelle soci\xE9t\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "p", 33);
    \u0275\u0275text(9, "Remplissez le formulaire ci-dessous pour ajouter une nouvelle soci\xE9t\xE9 \xE0 votre organisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-company-form", 34);
    \u0275\u0275listener("companyCreated", function CompanyManagementComponent_div_43_Template_app_company_form_companyCreated_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCompanyCreated($event));
    })("cancel", function CompanyManagementComponent_div_43_Template_app_company_form_cancel_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd()()()();
  }
}
function CompanyManagementComponent_div_60_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Aucune soci\xE9t\xE9 ne correspond \xE0 vos crit\xE8res de recherche. ");
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_div_60_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Commencez par cr\xE9er votre premi\xE8re soci\xE9t\xE9. ");
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune soci\xE9t\xE9 trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CompanyManagementComponent_div_60_p_5_Template, 2, 0, "p", 37)(6, CompanyManagementComponent_div_60_p_6_Template, 2, 0, "p", 37);
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_60_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = true);
    });
    \u0275\u0275text(8, " Cr\xE9er une soci\xE9t\xE9 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.filterStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchTerm && !ctx_r1.filterStatus);
  }
}
function CompanyManagementComponent_div_61_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40)(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 43)(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 44);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "div", 45)(26, "button", 46);
    \u0275\u0275text(27, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 47);
    \u0275\u0275text(29, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 48);
    \u0275\u0275text(31, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const company_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(company_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", company_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r4.activite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r4.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("NC: ", company_r4.nc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("RCCM: ", company_r4.rccm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r4.pays);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", company_r4.actif);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", company_r4.actif ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(company_r4.createdAt));
  }
}
function CompanyManagementComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "NC/RCCM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Cr\xE9\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, CompanyManagementComponent_div_61_tr_21_Template, 32, 11, "tr", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCompanies);
  }
}
function CompanyManagementComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "button", 50);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_62_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275text(2, "\u2190 Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 50);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_62_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(6, "Suivant \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.currentPage, " sur ", ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var CompanyManagementComponent = class _CompanyManagementComponent {
  companyRepository;
  companies = [];
  filteredCompanies = [];
  showForm = false;
  searchTerm = "";
  filterStatus = "";
  currentPage = 1;
  pageSize = 10;
  isLoading = false;
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }
  ngOnInit() {
    this.loadCompanies();
  }
  loadCompanies() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        const tenants = yield this.companyRepository.findAll();
        console.log(tenants);
        this.companies = tenants.map((tenant) => ({
          id: tenant.id || 1,
          nom: tenant.nom,
          activite: tenant.activite || "",
          adresse: tenant.address || "",
          boitePostal: tenant.postalBox || "",
          pays: tenant.pays || "",
          region: tenant.region || "",
          telephone: tenant.phoneNumber || "",
          nc: tenant.taxNumber || "",
          rccm: tenant.tradeRegister || "",
          regimeFiscal: tenant.fiscalRegime || "",
          devise: tenant.currency || "XAF",
          email: tenant.email,
          siteWeb: tenant.website || "",
          logo: tenant.logoUrl || "",
          favicon: tenant.faviconUrl || "",
          actif: tenant.isActive,
          createdAt: tenant.createdAt != null ? tenant.createdAt.toISOString() : "",
          updatedAt: tenant.updatedAt != null ? tenant.updatedAt.toISOString() : ""
        }));
        this.filterCompanies();
      } catch (error) {
        console.error("Erreur lors du chargement des soci\xE9t\xE9s:", error);
        this.loadTestData();
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadTestData() {
    this.companies = [
      {
        id: 1,
        nom: "OCM SARL",
        activite: "D\xE9veloppement logiciel",
        adresse: "123 Rue du Commerce",
        boitePostal: "BP 1234",
        pays: "Cameroun",
        region: "Centre",
        telephone: "+237 6 12 34 56 78",
        nc: "NC123456789",
        rccm: "RCCM123456789",
        regimeFiscal: "R\xE9gime r\xE9el simplifi\xE9",
        devise: "XAF",
        email: "contact@ocm.cm",
        siteWeb: "https://ocm.cm",
        logo: "",
        favicon: "",
        actif: true,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 2,
        nom: "Tech Solutions SA",
        activite: "Consulting IT",
        adresse: "456 Avenue des Technologies",
        boitePostal: "BP 5678",
        pays: "France",
        region: "\xCEle-de-France",
        telephone: "+33 1 23 45 67 89",
        nc: "NC987654321",
        rccm: "RCCM987654321",
        regimeFiscal: "R\xE9gime r\xE9el normal",
        devise: "EUR",
        email: "contact@techsolutions.fr",
        siteWeb: "https://techsolutions.fr",
        logo: "",
        favicon: "",
        actif: true,
        createdAt: new Date(Date.now() - 864e5).toISOString(),
        updatedAt: new Date(Date.now() - 864e5).toISOString()
      }
    ];
    this.filterCompanies();
  }
  get activeCompanies() {
    return this.companies.filter((c) => c.actif).length;
  }
  get todayCompanies() {
    const today = (/* @__PURE__ */ new Date()).toDateString();
    return this.companies.filter((c) => new Date(c.createdAt).toDateString() === today).length;
  }
  get uniqueCountries() {
    const countries = new Set(this.companies.map((c) => c.pays).filter(Boolean));
    return countries.size;
  }
  get totalPages() {
    return Math.ceil(this.filteredCompanies.length / this.pageSize);
  }
  onCompanyCreated(company) {
    this.companies.unshift(company);
    this.filterCompanies();
    this.showForm = false;
  }
  onCancel() {
    this.showForm = false;
  }
  filterCompanies() {
    let filtered = this.companies;
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((c) => c.nom.toLowerCase().includes(term) || c.activite.toLowerCase().includes(term) || c.email.toLowerCase().includes(term) || c.nc.toLowerCase().includes(term) || c.rccm.toLowerCase().includes(term));
    }
    if (this.filterStatus === "active") {
      filtered = filtered.filter((c) => c.actif);
    } else if (this.filterStatus === "inactive") {
      filtered = filtered.filter((c) => !c.actif);
    }
    this.filteredCompanies = filtered;
    this.currentPage = 1;
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
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
  static \u0275fac = function CompanyManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyManagementComponent)(\u0275\u0275directiveInject(HttpCompanyRepository));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyManagementComponent, selectors: [["app-company-management"]], features: [\u0275\u0275ProvidersFeature([
    {
      provide: COMPANY_REPOSITORY,
      useClass: HttpCompanyRepository
    },
    {
      provide: CREATE_COMPANY_USE_CASE,
      useClass: CreateCompanyUseCaseImpl
    },
    CreateCompanyUseCaseImpl,
    HttpCompanyRepository
  ])], decls: 87, vars: 11, consts: [[1, "company-management"], [1, "page-header"], [1, "header-content"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "list-section"], [1, "section-header"], [1, "list-controls"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher une soci\xE9t\xE9...", 3, "ngModelChange", "input", "ngModel"], [1, "search-icon"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "active"], ["value", "inactive"], ["class", "empty-state", 4, "ngIf"], ["class", "companies-table", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "quick-actions"], [1, "actions-grid"], [1, "action-card"], [1, "action-icon"], [1, "action-text"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "modal-description"], [3, "companyCreated", "cancel"], [1, "empty-state"], [1, "empty-icon"], [4, "ngIf"], [1, "companies-table"], [4, "ngFor", "ngForOf"], [1, "company-info"], [1, "company-name"], [1, "company-id"], [1, "tax-info"], [1, "status-badge"], [1, "action-buttons"], ["title", "Voir les d\xE9tails", 1, "btn-icon"], ["title", "Modifier", 1, "btn-icon"], ["title", "Supprimer", 1, "btn-icon"], [1, "pagination"], [3, "click", "disabled"]], template: function CompanyManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Gestion des Soci\xE9t\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Cr\xE9ez et g\xE9rez les soci\xE9t\xE9s de votre organisation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "button", 4);
      \u0275\u0275listener("click", function CompanyManagementComponent_Template_button_click_8_listener() {
        return ctx.showForm = !ctx.showForm;
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "div", 7);
      \u0275\u0275text(13, "\u{1F3E2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "h3");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Soci\xE9t\xE9s totales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 6)(20, "div", 7);
      \u0275\u0275text(21, "\u2705");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8)(23, "h3");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "Soci\xE9t\xE9s actives");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 6)(28, "div", 7);
      \u0275\u0275text(29, "\u{1F4C5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 8)(31, "h3");
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p");
      \u0275\u0275text(34, "Cr\xE9\xE9es aujourd'hui");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 6)(36, "div", 7);
      \u0275\u0275text(37, "\u{1F30D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 8)(39, "h3");
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Pays diff\xE9rents");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(43, CompanyManagementComponent_div_43_Template, 11, 0, "div", 9);
      \u0275\u0275elementStart(44, "div", 10)(45, "div", 11)(46, "h2");
      \u0275\u0275text(47, "Liste des soci\xE9t\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 12)(49, "div", 13)(50, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CompanyManagementComponent_Template_input_input_50_listener() {
        return ctx.filterCompanies();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 15);
      \u0275\u0275text(52, "\u{1F50D}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementComponent_Template_select_ngModelChange_53_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CompanyManagementComponent_Template_select_change_53_listener() {
        return ctx.filterCompanies();
      });
      \u0275\u0275elementStart(54, "option", 17);
      \u0275\u0275text(55, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 18);
      \u0275\u0275text(57, "Actives");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 19);
      \u0275\u0275text(59, "Inactives");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(60, CompanyManagementComponent_div_60_Template, 9, 2, "div", 20)(61, CompanyManagementComponent_div_61_Template, 22, 1, "div", 21)(62, CompanyManagementComponent_div_62_Template, 7, 4, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 23)(64, "h3");
      \u0275\u0275text(65, "Actions rapides");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 24)(67, "button", 25)(68, "span", 26);
      \u0275\u0275text(69, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 27);
      \u0275\u0275text(71, "Rapports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "button", 25)(73, "span", 26);
      \u0275\u0275text(74, "\u{1F4C1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span", 27);
      \u0275\u0275text(76, "Exporter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "button", 25)(78, "span", 26);
      \u0275\u0275text(79, "\u{1F504}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 27);
      \u0275\u0275text(81, "Synchroniser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "button", 25)(83, "span", 26);
      \u0275\u0275text(84, "\u2699\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span", 27);
      \u0275\u0275text(86, "Param\xE8tres");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.showForm ? "Masquer le formulaire" : "Nouvelle soci\xE9t\xE9", " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.companies.length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.activeCompanies);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.todayCompanies);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.uniqueCountries);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.filteredCompanies.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredCompanies.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredCompanies.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, HttpClientModule, CompanyFormComponent], styles: ["\n\n.company-management[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #f8f9fa;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 28px;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 16px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 24px;\n  color: #333;\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 32px;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 20px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.list-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 32px;\n}\n.list-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 16px;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 40px 10px 16px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n}\nselect[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 14px;\n  background: white;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  color: #666;\n}\n.companies-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 16px;\n  background: #f8f9fa;\n  color: #333;\n  font-weight: 600;\n  border-bottom: 2px solid #dee2e6;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid #dee2e6;\n  vertical-align: top;\n}\n.company-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.company-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.company-id[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n.tax-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge[_ngcontent-%COMP%]:not(.active) {\n  background: #f8d7da;\n  color: #721c24;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #007bff;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 1px solid #dee2e6;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 20px;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #333;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-description[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  color: #666;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.quick-actions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  color: #333;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n  background: #f8f9fa;\n}\n.action-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.action-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .list-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=company-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyManagementComponent, [{
    type: Component,
    args: [{ selector: "app-company-management", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, CompanyFormComponent], providers: [
      {
        provide: COMPANY_REPOSITORY,
        useClass: HttpCompanyRepository
      },
      {
        provide: CREATE_COMPANY_USE_CASE,
        useClass: CreateCompanyUseCaseImpl
      },
      CreateCompanyUseCaseImpl,
      HttpCompanyRepository
    ], template: `<div class="company-management">
  <!-- Header -->
  <div class="page-header">
    <div class="header-content">
      <h1>Gestion des Soci\xE9t\xE9s</h1>
      <p>Cr\xE9ez et g\xE9rez les soci\xE9t\xE9s de votre organisation</p>
    </div>
    <div class="header-actions">
      <button class="btn btn-primary" (click)="showForm = !showForm">
        {{ showForm ? 'Masquer le formulaire' : 'Nouvelle soci\xE9t\xE9' }}
      </button>
    </div>
  </div>

  <!-- Stats -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">\u{1F3E2}</div>
      <div class="stat-content">
        <h3>{{ companies.length }}</h3>
        <p>Soci\xE9t\xE9s totales</p>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">\u2705</div>
      <div class="stat-content">
        <h3>{{ activeCompanies }}</h3>
        <p>Soci\xE9t\xE9s actives</p>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">\u{1F4C5}</div>
      <div class="stat-content">
        <h3>{{ todayCompanies }}</h3>
        <p>Cr\xE9\xE9es aujourd'hui</p>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">\u{1F30D}</div>
      <div class="stat-content">
        <h3>{{ uniqueCountries }}</h3>
        <p>Pays diff\xE9rents</p>
      </div>
    </div>
  </div>

  <!-- Modal for Creation Form -->
  <div *ngIf="showForm" class="modal-overlay" (click)="onCancel()">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h2>Cr\xE9er une nouvelle soci\xE9t\xE9</h2>
        <button class="modal-close" (click)="onCancel()">\xD7</button>
      </div>
      <div class="modal-body">
        <p class="modal-description">Remplissez le formulaire ci-dessous pour ajouter une nouvelle soci\xE9t\xE9 \xE0 votre organisation</p>
        <app-company-form
          (companyCreated)="onCompanyCreated($event)"
          (cancel)="onCancel()">
        </app-company-form>
      </div>
    </div>
  </div>

  <!-- Companies List -->
  <div class="list-section">
    <div class="section-header">
      <h2>Liste des soci\xE9t\xE9s</h2>
      <div class="list-controls">
        <div class="search-box">
          <input 
            type="text" 
            placeholder="Rechercher une soci\xE9t\xE9..." 
            [(ngModel)]="searchTerm"
            (input)="filterCompanies()"
          >
          <span class="search-icon">\u{1F50D}</span>
        </div>
        <select [(ngModel)]="filterStatus" (change)="filterCompanies()">
          <option value="">Tous les statuts</option>
          <option value="active">Actives</option>
          <option value="inactive">Inactives</option>
        </select>
      </div>
    </div>

    <div *ngIf="filteredCompanies.length === 0" class="empty-state">
      <div class="empty-icon">\u{1F3E2}</div>
      <h3>Aucune soci\xE9t\xE9 trouv\xE9e</h3>
      <p *ngIf="searchTerm || filterStatus">
        Aucune soci\xE9t\xE9 ne correspond \xE0 vos crit\xE8res de recherche.
      </p>
      <p *ngIf="!searchTerm && !filterStatus">
        Commencez par cr\xE9er votre premi\xE8re soci\xE9t\xE9.
      </p>
      <button class="btn btn-primary" (click)="showForm = true">
        Cr\xE9er une soci\xE9t\xE9
      </button>
    </div>

    <div *ngIf="filteredCompanies.length > 0" class="companies-table">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Activit\xE9</th>
            <th>Email</th>
            <th>NC/RCCM</th>
            <th>Pays</th>
            <th>Statut</th>
            <th>Cr\xE9\xE9e le</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let company of filteredCompanies">
            <td>
              <div class="company-info">
                <div class="company-name">{{ company.nom }}</div>
                <div class="company-id">ID: {{ company.id }}</div>
              </div>
            </td>
            <td>{{ company.activite }}</td>
            <td>{{ company.email }}</td>
            <td>
              <div class="tax-info">
                <div>NC: {{ company.nc }}</div>
                <div>RCCM: {{ company.rccm }}</div>
              </div>
            </td>
            <td>{{ company.pays }}</td>
            <td>
              <span class="status-badge" [class.active]="company.actif">
                {{ company.actif ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td>{{ formatDate(company.createdAt) }}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Voir les d\xE9tails">\u{1F441}\uFE0F</button>
                <button class="btn-icon" title="Modifier">\u270F\uFE0F</button>
                <button class="btn-icon" title="Supprimer">\u{1F5D1}\uFE0F</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div *ngIf="filteredCompanies.length > 0" class="pagination">
      <button [disabled]="currentPage === 1" (click)="previousPage()">\u2190 Pr\xE9c\xE9dent</button>
      <span>Page {{ currentPage }} sur {{ totalPages }}</span>
      <button [disabled]="currentPage === totalPages" (click)="nextPage()">Suivant \u2192</button>
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="quick-actions">
    <h3>Actions rapides</h3>
    <div class="actions-grid">
      <button class="action-card">
        <span class="action-icon">\u{1F4CA}</span>
        <span class="action-text">Rapports</span>
      </button>
      <button class="action-card">
        <span class="action-icon">\u{1F4C1}</span>
        <span class="action-text">Exporter</span>
      </button>
      <button class="action-card">
        <span class="action-icon">\u{1F504}</span>
        <span class="action-text">Synchroniser</span>
      </button>
      <button class="action-card">
        <span class="action-icon">\u2699\uFE0F</span>
        <span class="action-text">Param\xE8tres</span>
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/configuration/presentation/pages/company-management/company-management.component.scss */\n.company-management {\n  padding: 24px;\n  background: #f8f9fa;\n  min-height: 100vh;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.header-content h1 {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 28px;\n}\n.header-content p {\n  margin: 0;\n  color: #666;\n  font-size: 16px;\n}\n.btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary {\n  background: #007bff;\n  color: white;\n}\n.btn-primary:hover {\n  background: #0056b3;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.stat-card {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stat-icon {\n  font-size: 32px;\n}\n.stat-content h3 {\n  margin: 0 0 4px 0;\n  font-size: 24px;\n  color: #333;\n}\n.stat-content p {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.form-section {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 32px;\n}\n.section-header {\n  margin-bottom: 24px;\n}\n.section-header h2 {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 20px;\n}\n.section-header p {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.list-section {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 32px;\n}\n.list-controls {\n  display: flex;\n  gap: 16px;\n  margin-top: 16px;\n}\n.search-box {\n  flex: 1;\n  position: relative;\n}\n.search-box input {\n  width: 100%;\n  padding: 10px 40px 10px 16px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.search-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n}\nselect {\n  padding: 10px 16px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 14px;\n  background: white;\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-icon {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  margin: 0 0 8px 0;\n  color: #333;\n}\n.empty-state p {\n  margin: 0 0 24px 0;\n  color: #666;\n}\n.companies-table {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  text-align: left;\n  padding: 16px;\n  background: #f8f9fa;\n  color: #333;\n  font-weight: 600;\n  border-bottom: 2px solid #dee2e6;\n}\ntd {\n  padding: 16px;\n  border-bottom: 1px solid #dee2e6;\n  vertical-align: top;\n}\n.company-info {\n  display: flex;\n  flex-direction: column;\n}\n.company-name {\n  font-weight: 500;\n  color: #333;\n}\n.company-id {\n  font-size: 12px;\n  color: #666;\n}\n.tax-info {\n  font-size: 12px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-badge.active {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge:not(.active) {\n  background: #f8d7da;\n  color: #721c24;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon {\n  padding: 6px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-icon:hover {\n  background: #f8f9fa;\n  border-color: #007bff;\n}\n.pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 1px solid #dee2e6;\n}\n.pagination button {\n  padding: 8px 16px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n}\n.pagination button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.quick-actions {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  animation: fadeIn 0.3s ease;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideIn 0.3s ease;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h2 {\n  margin: 0;\n  color: #333;\n  font-size: 20px;\n}\n.modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.modal-close:hover {\n  background: #e9ecef;\n  color: #333;\n}\n.modal-body {\n  padding: 24px;\n}\n.modal-description {\n  margin: 0 0 20px 0;\n  color: #666;\n  font-size: 14px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.quick-actions h3 {\n  margin: 0 0 20px 0;\n  color: #333;\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n}\n.action-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.action-card:hover {\n  border-color: #007bff;\n  background: #f8f9fa;\n}\n.action-icon {\n  font-size: 32px;\n}\n.action-text {\n  font-size: 14px;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .list-controls {\n    flex-direction: column;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .actions-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=company-management.component.css.map */\n"] }]
  }], () => [{ type: HttpCompanyRepository }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyManagementComponent, { className: "CompanyManagementComponent", filePath: "src/app/modules/configuration/presentation/pages/company-management/company-management.component.ts", lineNumber: 31 });
})();
export {
  CompanyManagementComponent
};
//# sourceMappingURL=chunk-EQNAGDB3.js.map
