import {
  UPDATE_USER_USE_CASE,
  UpdateUserUseCaseImpl
} from "./chunk-XZKI7TJW.js";
import {
  SiteService
} from "./chunk-RZDGB625.js";
import {
  MatInputModule
} from "./chunk-YMQR4YQC.js";
import {
  MatError,
  MatFormFieldModule,
  MatOption,
  MatOptionModule,
  MatSelect,
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import {
  DepartementService
} from "./chunk-CFEWFPCM.js";
import "./chunk-5H6GXSFV.js";
import "./chunk-YETY7SH2.js";
import "./chunk-M4MC2D7Y.js";
import "./chunk-UNWSAGEL.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import {
  CREATE_USER_USE_CASE,
  CreateUserUseCaseImpl
} from "./chunk-LPA3SJPD.js";
import {
  GET_USERS_USE_CASE,
  USER_REPOSITORY
} from "./chunk-RGTECRIG.js";
import "./chunk-7SCMAJTM.js";
import {
  TranslatePipe
} from "./chunk-VQ4LU4VK.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
import {
  AuthService
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import {
  Router
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import {
  HttpClientModule
} from "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate5,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-U4CEU3KS.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/modules/manage-users/presentation/components/user-form/user-form.component.ts
function UserFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function UserFormComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success = false);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? \u0275\u0275pipeBind1(3, 1, "forms.userForm.successEdit") : \u0275\u0275pipeBind1(4, 3, "forms.userForm.successCreate"), " ");
  }
}
function UserFormComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function UserFormComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function UserFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("nomPrenom"), " ");
  }
}
function UserFormComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("email"), " ");
  }
}
function UserFormComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("userName"), " ");
  }
}
function UserFormComponent_div_33_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("password"), " ");
  }
}
function UserFormComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 51);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275template(8, UserFormComponent_div_33_div_8_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "forms.userForm.password"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("password"));
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(7, 8, "forms.userForm.passwordPlaceholder")));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("password"));
  }
}
function UserFormComponent_div_34_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("confirmPassword"), " ");
  }
}
function UserFormComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 53);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275template(8, UserFormComponent_div_34_div_8_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "forms.userForm.confirmPassword"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("confirmPassword"));
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(7, 8, "forms.userForm.confirmPasswordPlaceholder")));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("confirmPassword"));
  }
}
function UserFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("telephone"), " ");
  }
}
function UserFormComponent_mat_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const site_r4 = ctx.$implicit;
    \u0275\u0275property("value", site_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", site_r4.label, " ");
  }
}
function UserFormComponent_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("siteId"), " ");
  }
}
function UserFormComponent_mat_option_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r5 = ctx.$implicit;
    \u0275\u0275property("value", dept_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r5.label, " ");
  }
}
function UserFormComponent_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("departementId"), " ");
  }
}
function UserFormComponent_mat_option_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r6 = ctx.$implicit;
    \u0275\u0275property("value", status_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r6.label, " ");
  }
}
function UserFormComponent_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("statut"), " ");
  }
}
function UserFormComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function UserFormComponent_i_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 56);
  }
}
var UserFormComponent = class _UserFormComponent {
  fb = inject(FormBuilder);
  createUserUseCase = inject(CREATE_USER_USE_CASE);
  updateUserUseCase = inject(UPDATE_USER_USE_CASE);
  siteService = inject(SiteService);
  departementService = inject(DepartementService);
  authService = inject(AuthService);
  user;
  // Pour l'édition
  isEditMode = false;
  userSaved = new EventEmitter();
  cancelled = new EventEmitter();
  userForm;
  loading = false;
  error = null;
  success = false;
  // Options pour les listes déroulantes
  statusOptions = [
    { value: "ACTIF", label: "forms.userForm.statuses.ACTIF" },
    { value: "INACTIF", label: "forms.userForm.statuses.INACTIF" },
    { value: "EN_ATTENTE", label: "forms.userForm.statuses.EN_ATTENTE" }
  ];
  siteOptions = [];
  departmentOptions = [];
  ngOnInit() {
    this.initForm();
    this.loadSites();
    this.loadDepartements();
  }
  /**
   * Hook appelé quand les inputs changent
   */
  ngOnChanges() {
    if (this.user && this.isEditMode) {
      setTimeout(() => {
        this.populateForm(this.user);
      }, 100);
    }
  }
  /**
   * Initialise le formulaire
   */
  initForm() {
    this.userForm = this.fb.group({
      id: [null],
      nomPrenom: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      telephone: ["", [Validators.pattern(/^[0-9+\s\-()]{10,}$/)]],
      adresse: [""],
      siteId: ["", Validators.required],
      departementId: ["", Validators.required],
      statut: ["ACTIF", Validators.required],
      // Champs supplémentaires
      userName: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", this.isEditMode ? [] : [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", this.isEditMode ? [] : [Validators.required]],
      societeId: [this.authService.idUser, Validators.required],
      // Valeur par défaut
      pwdText: [""],
      photo: [""],
      signature: [""],
      langue: ["fr"]
    }, { validators: this.passwordMatchValidator });
  }
  /**
   * Remplit le formulaire avec les données d'un utilisateur existant
   */
  populateForm(user) {
    this.userForm.patchValue({
      id: user.id,
      nomPrenom: user.nomPrenom,
      email: user.email,
      telephone: user.telephone || "",
      adresse: user.adresse || "",
      siteId: user.siteId || "",
      departementId: user.departementId || "",
      statut: user.statut || "ACTIF",
      userName: user.userName || user.email.split("@")[0],
      societeId: user.societeId || 1,
      pwdText: user.pwdText || "",
      photo: user.photo || "",
      signature: user.signature || "",
      langue: user.langue || "fr"
    });
    this.userForm.get("password")?.clearValidators();
    this.userForm.get("confirmPassword")?.clearValidators();
    this.userForm.get("password")?.updateValueAndValidity();
    this.userForm.get("confirmPassword")?.updateValueAndValidity();
  }
  /**
   * Validateur pour vérifier que les mots de passe correspondent
   */
  passwordMatchValidator(form) {
    const password = form.get("password")?.value;
    const confirmPassword = form.get("confirmPassword")?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
  /**
   * Soumet le formulaire
   */
  onSubmit() {
    return __async(this, null, function* () {
      if (this.userForm.invalid) {
        this.markFormGroupTouched(this.userForm);
        return;
      }
      this.loading = true;
      this.error = null;
      this.success = false;
      try {
        const formValue = this.userForm.value;
        const userData = {
          id: formValue.id,
          nomPrenom: formValue.nomPrenom,
          email: formValue.email,
          telephone: formValue.telephone || "",
          adresse: formValue.adresse || "",
          userName: formValue.userName,
          password: formValue.password || "",
          pwdText: formValue.password || "",
          // Pour l'instant, même que le mot de passe
          societeId: formValue.societeId,
          siteId: formValue.siteId,
          departementId: formValue.departementId,
          statut: formValue.statut,
          photo: formValue.photo || "",
          signature: formValue.signature || "",
          langue: formValue.langue || "fr"
        };
        let result;
        if (this.isEditMode && this.user) {
          result = yield this.updateUserUseCase.execute(userData.id, userData);
        } else {
          result = yield this.createUserUseCase.execute(userData);
        }
        this.success = true;
        this.userSaved.emit(result);
        if (!this.isEditMode) {
          setTimeout(() => {
            this.userForm.reset({
              statut: "ACTIF",
              siteId: "",
              departementId: "",
              societeId: 1,
              langue: "fr"
            });
            this.success = false;
          }, 2e3);
        }
      } catch (error) {
        console.error("Erreur lors de la sauvegarde de l'utilisateur:", error);
        this.error = error.message || "Une erreur est survenue lors de la sauvegarde. Veuillez r\xE9essayer.";
      } finally {
        this.loading = false;
      }
    });
  }
  /**
   * Annule l'opération
   */
  onCancel() {
    this.cancelled.emit();
  }
  /**
   * Marque tous les champs du formulaire comme touchés pour afficher les erreurs
   */
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  /**
   * Vérifie si un champ est invalide et a été touché
   */
  isFieldInvalid(fieldName) {
    const field = this.userForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
  /**
   * Récupère le message d'erreur pour un champ
   */
  getFieldError(fieldName) {
    const field = this.userForm.get(fieldName);
    if (!field || !field.errors) {
      return "";
    }
    if (field.errors["required"]) {
      return "forms.validation.required";
    }
    if (field.errors["email"]) {
      return "forms.validation.email";
    }
    if (field.errors["minlength"]) {
      const requiredLength = field.errors["minlength"].requiredLength;
      return `forms.validation.minLength`.replace("{min}", requiredLength.toString());
    }
    if (field.errors["pattern"]) {
      return "Format invalide";
    }
    if (field.errors["passwordMismatch"]) {
      return "forms.validation.passwordMismatch";
    }
    return "Valeur invalide";
  }
  /**
   * Génère un nom d'utilisateur à partir de l'email
   */
  generateUsername() {
    const email = this.userForm.get("email")?.value;
    if (email && !this.userForm.get("userName")?.value) {
      const username = email.split("@")[0];
      this.userForm.get("userName")?.setValue(username);
    }
  }
  /**
   * Charge la liste des sites
   */
  loadSites() {
    this.siteService.getSites({ page: 0, size: 100 }).subscribe({
      next: (response) => {
        this.siteOptions = response.content.map((site) => ({
          value: site.id,
          label: `${site.nom} (${site.code})`
        }));
      },
      error: (error) => {
        console.error("Erreur lors du chargement des sites:", error);
        this.siteOptions = [];
      }
    });
  }
  /**
   * Charge la liste des départements
   */
  loadDepartements() {
    this.departementService.getDepartements(void 0, 0, 100).subscribe({
      next: (response) => {
        this.departmentOptions = response.content.map((departement) => ({
          value: departement.id,
          label: departement.nom
        }));
      },
      error: (error) => {
        console.error("Erreur lors du chargement des d\xE9partements:", error);
        this.departmentOptions = [];
      }
    });
  }
  static \u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["app-user-form"]], inputs: { user: "user", isEditMode: "isEditMode" }, outputs: { userSaved: "userSaved", cancelled: "cancelled" }, features: [\u0275\u0275ProvidersFeature([
    // Providers pour les use cases
    {
      provide: CREATE_USER_USE_CASE,
      useClass: CreateUserUseCaseImpl
    },
    {
      provide: UPDATE_USER_USE_CASE,
      useClass: UpdateUserUseCaseImpl
    }
  ]), \u0275\u0275NgOnChangesFeature], decls: 121, vars: 108, consts: [[1, "user-form"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["novalidate", "", 1, "needs-validation", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-column"], [1, "form-group"], ["for", "nomPrenom", 1, "form-label"], [1, "required"], ["type", "text", "id", "nomPrenom", "formControlName", "nomPrenom", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "blur", "placeholder"], ["for", "userName", 1, "form-label"], ["type", "text", "id", "userName", "formControlName", "userName", 1, "form-control", 3, "placeholder"], ["class", "form-group", 4, "ngIf"], ["for", "telephone", 1, "form-label"], ["type", "tel", "id", "telephone", "formControlName", "telephone", 1, "form-control", 3, "placeholder"], [1, "form-label"], ["id", "siteId", "formControlName", "siteId", 1, "custom-mat-select", "select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "departementId", "formControlName", "departementId", 1, "custom-mat-select", "select"], ["id", "statut", "formControlName", "statut", 1, "custom-mat-select", "select"], ["id", "langue", "formControlName", "langue", 1, "custom-mat-select", "select"], ["value", "fr"], ["value", "en"], ["value", "es"], ["for", "adresse", 1, "form-label"], ["id", "adresse", "formControlName", "adresse", "rows", "2", 1, "form-control", 3, "placeholder"], ["type", "hidden", "formControlName", "societeId"], ["type", "hidden", "formControlName", "pwdText"], ["type", "hidden", "formControlName", "photo"], ["type", "hidden", "formControlName", "signature"], [1, "form-actions"], [1, "action-buttons", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "fas", "fa-times", "me-1"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "fas fa-save me-1", 4, "ngIf"], [1, "form-help"], [1, "help-text"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "invalid-feedback"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control", 3, "placeholder"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "placeholder"], [3, "value"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "fas", "fa-save", "me-1"]], template: function UserFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, UserFormComponent_div_1_Template, 6, 5, "div", 1)(2, UserFormComponent_div_2_Template, 4, 1, "div", 2);
      \u0275\u0275elementStart(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function UserFormComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "label", 7);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275template(14, UserFormComponent_div_14_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6)(16, "label", 11);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementStart(19, "span", 8);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "input", 12);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275listener("blur", function UserFormComponent_Template_input_blur_21_listener() {
        return ctx.generateUsername();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, UserFormComponent_div_23_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 6)(25, "label", 13);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementStart(28, "span", 8);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "input", 14);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275template(32, UserFormComponent_div_32_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, UserFormComponent_div_33_Template, 9, 10, "div", 15)(34, UserFormComponent_div_34_Template, 9, 10, "div", 15);
      \u0275\u0275elementStart(35, "div", 6)(36, "label", 16);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 17);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275template(41, UserFormComponent_div_41_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 5)(43, "div", 6)(44, "label", 18);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementStart(47, "span", 8);
      \u0275\u0275text(48, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "mat-select", 19)(50, "mat-option", 20);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, UserFormComponent_mat_option_53_Template, 2, 2, "mat-option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(54, UserFormComponent_mat_error_54_Template, 2, 1, "mat-error", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 6)(56, "label", 18);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementStart(59, "span", 8);
      \u0275\u0275text(60, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "mat-select", 23)(62, "mat-option", 20);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(65, UserFormComponent_mat_option_65_Template, 2, 2, "mat-option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(66, UserFormComponent_mat_error_66_Template, 2, 1, "mat-error", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 6)(68, "label", 18);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementStart(71, "span", 8);
      \u0275\u0275text(72, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "mat-select", 24);
      \u0275\u0275template(74, UserFormComponent_mat_option_74_Template, 2, 2, "mat-option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(75, UserFormComponent_mat_error_75_Template, 2, 1, "mat-error", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 6)(77, "label", 18);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementStart(80, "span", 8);
      \u0275\u0275text(81, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "mat-select", 25)(83, "mat-option", 26);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "mat-option", 27);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "mat-option", 28);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 6)(93, "label", 29);
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "textarea", 30);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 31)(99, "input", 32)(100, "input", 33)(101, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 35)(103, "div", 36)(104, "button", 37);
      \u0275\u0275listener("click", function UserFormComponent_Template_button_click_104_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275element(105, "i", 38);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "button", 39);
      \u0275\u0275template(109, UserFormComponent_span_109_Template, 1, 0, "span", 40)(110, UserFormComponent_i_110_Template, 1, 0, "i", 41);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 42)(116, "p", 43)(117, "span", 8);
      \u0275\u0275text(118, "*");
      \u0275\u0275elementEnd();
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.userForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 60, "forms.userForm.fullName"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("nomPrenom"));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(13, 62, "forms.userForm.fullNamePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("nomPrenom"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 64, "forms.userForm.email"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("email"));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(22, 66, "forms.userForm.emailPlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 68, "forms.userForm.username"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("userName"));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(31, 70, "forms.userForm.usernamePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("userName"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditMode);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 72, "forms.userForm.phone"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("telephone"));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(40, 74, "forms.userForm.phonePlaceholder")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("telephone"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 76, "forms.userForm.site"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("siteId"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 78, "forms.userForm.sitePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.siteOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("siteId"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(58, 80, "forms.userForm.department"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("departementId"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 82, "forms.userForm.departmentPlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.departmentOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("departementId"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(70, 84, "forms.userForm.status"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("statut"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.statusOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("statut"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(79, 86, "forms.userForm.language"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 88, "forms.userForm.languages.fr"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 90, "forms.userForm.languages.en"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 92, "forms.userForm.languages.es"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 94, "forms.userForm.address"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(97, 96, "forms.userForm.addressPlaceholder")));
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(107, 98, "forms.userForm.cancel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.userForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? \u0275\u0275pipeBind1(112, 100, "forms.userForm.saving") : ctx.isEditMode ? \u0275\u0275pipeBind1(113, 102, "forms.userForm.edit") : \u0275\u0275pipeBind1(114, 104, "forms.userForm.create"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(120, 106, "forms.userForm.requiredField"), " ");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    // Angular Material modules
    MatSelectModule,
    MatError,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    // Traduction
    TranslatePipe
  ], styles: ["\n\n.user-form[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #eaeaea;\n}\n.form-title[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.form-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.95rem;\n  margin-bottom: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n.form-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #555;\n  margin-bottom: 6px;\n  font-size: 0.9rem;\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-left: 2px;\n}\n.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 10px 12px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n  background-color: #fff;\n  width: 100%;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #4a90e2;\n  box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);\n  outline: none;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  min-height: 80px;\n  resize: vertical;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin-top: 4px;\n  color: #dc3545;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%] {\n  min-height: 48px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background-color: #fff;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-flex[_ngcontent-%COMP%] {\n  align-items: center;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.mat-mdc-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #dc3545;\n  margin-top: 4px;\n}\n.mat-mdc-option[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.mat-mdc-option[_ngcontent-%COMP%]:hover {\n  background-color: rgba(74, 144, 226, 0.1);\n}\n.mat-mdc-select-panel[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  border: none;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.btn-close[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.form-actions[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  border-top: 1px solid #eaeaea;\n  margin-top: 24px;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n.form-help[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  text-align: center;\n}\n.help-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.85rem;\n  margin-bottom: 0;\n}\n.help-text[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n@media (max-width: 768px) {\n  .user-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .form-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.9rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-control[_ngcontent-%COMP%], \nmat-form-field[_ngcontent-%COMP%], \n.alert[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n/*# sourceMappingURL=user-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{ selector: "app-user-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      // Angular Material modules
      MatSelectModule,
      MatFormFieldModule,
      MatOptionModule,
      MatInputModule,
      // Traduction
      TranslatePipe
    ], providers: [
      // Providers pour les use cases
      {
        provide: CREATE_USER_USE_CASE,
        useClass: CreateUserUseCaseImpl
      },
      {
        provide: UPDATE_USER_USE_CASE,
        useClass: UpdateUserUseCaseImpl
      }
    ], template: `<div class="user-form">
  <!-- Message de succ\xE8s -->
  <div *ngIf="success" class="alert alert-success alert-dismissible fade show" role="alert">
    <i class="fas fa-check-circle me-2"></i>
    {{ isEditMode ? ('forms.userForm.successEdit' | translate) : ('forms.userForm.successCreate' | translate) }}
    <button type="button" class="btn-close" (click)="success = false" aria-label="Close"></button>
  </div>

  <!-- Message d'erreur -->
  <div *ngIf="error" class="alert alert-danger alert-dismissible fade show" role="alert">
    <i class="fas fa-exclamation-circle me-2"></i>
    {{ error }}
    <button type="button" class="btn-close" (click)="error = null" aria-label="Close"></button>
  </div>

  <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="needs-validation" novalidate>
    <div class="form-grid">
      <!-- Colonne gauche -->
      <div class="form-column">
        <!-- Nom et Pr\xE9nom -->
        <div class="form-group">
          <label for="nomPrenom" class="form-label">
            {{ 'forms.userForm.fullName' | translate }} <span class="required">*</span>
          </label>
          <input
            type="text"
            id="nomPrenom"
            class="form-control"
            [class.is-invalid]="isFieldInvalid('nomPrenom')"
            formControlName="nomPrenom"
            placeholder="{{ 'forms.userForm.fullNamePlaceholder' | translate }}"
          >
          <div *ngIf="isFieldInvalid('nomPrenom')" class="invalid-feedback">
            {{ getFieldError('nomPrenom') }}
          </div>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email" class="form-label">
            {{ 'forms.userForm.email' | translate }} <span class="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            class="form-control"
            [class.is-invalid]="isFieldInvalid('email')"
            formControlName="email"
            placeholder="{{ 'forms.userForm.emailPlaceholder' | translate }}"
            (blur)="generateUsername()"
          >
          <div *ngIf="isFieldInvalid('email')" class="invalid-feedback">
            {{ getFieldError('email') }}
          </div>
        </div>

        <!-- Nom d'utilisateur -->
        <div class="form-group">
          <label for="userName" class="form-label">
            {{ 'forms.userForm.username' | translate }} <span class="required">*</span>
          </label>
          <input
            type="text"
            id="userName"
            class="form-control"
            [class.is-invalid]="isFieldInvalid('userName')"
            formControlName="userName"
            placeholder="{{ 'forms.userForm.usernamePlaceholder' | translate }}"
          >
          <div *ngIf="isFieldInvalid('userName')" class="invalid-feedback">
            {{ getFieldError('userName') }}
          </div>
        </div>

        <!-- Mot de passe -->
        <div class="form-group" *ngIf="!isEditMode">
          <label for="password" class="form-label">
            {{ 'forms.userForm.password' | translate }} <span class="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            class="form-control"
            [class.is-invalid]="isFieldInvalid('password')"
            formControlName="password"
            placeholder="{{ 'forms.userForm.passwordPlaceholder' | translate }}"
          >
          <div *ngIf="isFieldInvalid('password')" class="invalid-feedback">
            {{ getFieldError('password') }}
          </div>
        </div>

        <!-- Confirmation du mot de passe -->
        <div class="form-group" *ngIf="!isEditMode">
          <label for="confirmPassword" class="form-label">
            {{ 'forms.userForm.confirmPassword' | translate }} <span class="required">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            class="form-control"
            [class.is-invalid]="isFieldInvalid('confirmPassword')"
            formControlName="confirmPassword"
            placeholder="{{ 'forms.userForm.confirmPasswordPlaceholder' | translate }}"
          >
          <div *ngIf="isFieldInvalid('confirmPassword')" class="invalid-feedback">
            {{ getFieldError('confirmPassword') }}
          </div>
        </div>

        <!-- T\xE9l\xE9phone -->
        <div class="form-group">
          <label for="telephone" class="form-label">{{ 'forms.userForm.phone' | translate }}</label>
          <input
            type="tel"
            id="telephone"
            class="form-control"
            [class.is-invalid]="isFieldInvalid('telephone')"
            formControlName="telephone"
            placeholder="{{ 'forms.userForm.phonePlaceholder' | translate }}"
          >
          <div *ngIf="isFieldInvalid('telephone')" class="invalid-feedback">
            {{ getFieldError('telephone') }}
          </div>
        </div>
      </div>

      <!-- Colonne droite -->
      <div class="form-column">
       

        <!-- Site -->
        <div class="form-group">
          <label class="form-label">{{ 'forms.userForm.site' | translate }} <span class="required">*</span></label>
         
            <mat-select
              class="custom-mat-select select" 
              id="siteId"
              formControlName="siteId"
              [class.is-invalid]="isFieldInvalid('siteId')"
            >
              <mat-option value="" disabled>{{ 'forms.userForm.sitePlaceholder' | translate }}</mat-option>
              <mat-option *ngFor="let site of siteOptions" [value]="site.value">
                {{ site.label }}
              </mat-option>
            </mat-select>
            <mat-error *ngIf="isFieldInvalid('siteId')">
              {{ getFieldError('siteId') }}
            </mat-error>
        </div>

        <!-- D\xE9partement -->
        <div class="form-group">
          <label class="form-label">{{ 'forms.userForm.department' | translate }} <span class="required">*</span></label>
           <mat-select
              class="custom-mat-select select" 
              id="departementId"
              formControlName="departementId"
              [class.is-invalid]="isFieldInvalid('departementId')"
            >
              <mat-option value="" disabled>{{ 'forms.userForm.departmentPlaceholder' | translate }}</mat-option>
              <mat-option *ngFor="let dept of departmentOptions" [value]="dept.value">
                {{ dept.label }}
              </mat-option>
            </mat-select>
            <mat-error *ngIf="isFieldInvalid('departementId')">
              {{ getFieldError('departementId') }}
            </mat-error>
        </div>

        <!-- Statut -->
        <div class="form-group">
          <label class="form-label">{{ 'forms.userForm.status' | translate }} <span class="required">*</span></label>
         
            <mat-select
             class="custom-mat-select select" 
              id="statut"
              formControlName="statut"
              [class.is-invalid]="isFieldInvalid('statut')"
            >
              <mat-option *ngFor="let status of statusOptions" [value]="status.value">
                {{ status.label }}
              </mat-option>
            </mat-select>
            <mat-error *ngIf="isFieldInvalid('statut')">
              {{ getFieldError('statut') }}
            </mat-error>
        </div>

        <!-- Langue -->
        <div class="form-group">
           <label class="form-label">{{ 'forms.userForm.language' | translate }} <span class="required">*</span></label>
           <mat-select  class="custom-mat-select select"  id="langue" formControlName="langue">
              <mat-option value="fr">{{ 'forms.userForm.languages.fr' | translate }}</mat-option>
              <mat-option value="en">{{ 'forms.userForm.languages.en' | translate }}</mat-option>
              <mat-option value="es">{{ 'forms.userForm.languages.es' | translate }}</mat-option>
            </mat-select>
        </div>
         <!-- Adresse -->
        <div class="form-group">
          <label for="adresse" class="form-label">{{ 'forms.userForm.address' | translate }}</label>
          <textarea
            id="adresse"
            class="form-control"
            formControlName="adresse"
            rows="2"
            placeholder="{{ 'forms.userForm.addressPlaceholder' | translate }}"
          ></textarea>
        </div>

        <!-- Champs cach\xE9s -->
        <input type="hidden" formControlName="societeId">
        <input type="hidden" formControlName="pwdText">
        <input type="hidden" formControlName="photo">
        <input type="hidden" formControlName="signature">
      </div>
    </div>

    <!-- Boutons d'action -->
    <div class="form-actions ">
      <div class="action-buttons d-flex align-items-center justify-content-between gap-1">
        <button
          type="button"
          class="btn btn-secondary"
          (click)="onCancel()"
          [disabled]="loading"
        >
          <i class="fas fa-times me-1"></i> {{ 'forms.userForm.cancel' | translate }}
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="userForm.invalid || loading"
        >
          <span *ngIf="loading" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
          <i *ngIf="!loading" class="fas fa-save me-1"></i>
          {{ loading ? ('forms.userForm.saving' | translate) : (isEditMode ? ('forms.userForm.edit' | translate) : ('forms.userForm.create' | translate)) }}
        </button>
      </div>
    </div>

    <!-- Aide sur les champs obligatoires -->
    <div class="form-help">
      <p class="help-text">
        <span class="required">*</span> {{ 'forms.userForm.requiredField' | translate }}
      </p>
    </div>
  </form>
</div>
`, styles: ["/* src/app/modules/manage-users/presentation/components/user-form/user-form.component.scss */\n.user-form {\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.form-header {\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #eaeaea;\n}\n.form-title {\n  color: #333;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.form-description {\n  color: #666;\n  font-size: 0.95rem;\n  margin-bottom: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n.form-column {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-label {\n  font-weight: 500;\n  color: #555;\n  margin-bottom: 6px;\n  font-size: 0.9rem;\n}\n.form-label .required {\n  color: #dc3545;\n  margin-left: 2px;\n}\n.form-control {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 10px 12px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n  background-color: #fff;\n  width: 100%;\n}\n.form-control:focus {\n  border-color: #4a90e2;\n  box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);\n  outline: none;\n}\n.form-control.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\ntextarea.form-control {\n  min-height: 80px;\n  resize: vertical;\n}\n.invalid-feedback {\n  font-size: 0.85rem;\n  margin-top: 4px;\n  color: #dc3545;\n}\nmat-form-field {\n  width: 100%;\n}\nmat-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\nmat-form-field .mat-mdc-form-field-infix {\n  min-height: 48px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nmat-form-field .mat-mdc-text-field-wrapper {\n  border-radius: 6px;\n  background-color: #fff;\n}\nmat-form-field .mat-mdc-form-field-flex {\n  align-items: center;\n}\nmat-form-field .mat-mdc-select-value {\n  font-size: 0.95rem;\n}\n.mat-mdc-form-field.mat-form-field-invalid .mat-mdc-text-field-wrapper {\n  border-color: #dc3545;\n}\n.mat-mdc-form-field-error {\n  font-size: 0.85rem;\n  color: #dc3545;\n  margin-top: 4px;\n}\n.mat-mdc-option {\n  font-size: 0.95rem;\n}\n.mat-mdc-option:hover {\n  background-color: rgba(74, 144, 226, 0.1);\n}\n.mat-mdc-select-panel {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.alert {\n  border-radius: 6px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  border: none;\n}\n.alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n}\n.alert.alert-danger {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.btn-close {\n  opacity: 0.7;\n}\n.btn-close:hover {\n  opacity: 1;\n}\n.form-actions {\n  padding-top: 20px;\n  border-top: 1px solid #eaeaea;\n  margin-top: 24px;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n.form-help {\n  margin-top: 16px;\n  text-align: center;\n}\n.help-text {\n  color: #6c757d;\n  font-size: 0.85rem;\n  margin-bottom: 0;\n}\n.help-text .required {\n  color: #dc3545;\n}\n@media (max-width: 768px) {\n  .user-form {\n    padding: 16px;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .form-title {\n    font-size: 1.3rem;\n  }\n  .btn {\n    padding: 8px 16px;\n    font-size: 0.9rem;\n  }\n  .action-buttons {\n    flex-direction: column;\n  }\n  .action-buttons .btn {\n    width: 100%;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-control,\nmat-form-field,\n.alert {\n  animation: fadeIn 0.3s ease-out;\n}\n/*# sourceMappingURL=user-form.component.css.map */\n"] }]
  }], null, { user: [{
    type: Input
  }], isEditMode: [{
    type: Input
  }], userSaved: [{
    type: Output
  }], cancelled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "src/app/modules/manage-users/presentation/components/user-form/user-form.component.ts", lineNumber: 58 });
})();

// src/app/modules/manage-users/presentation/pages/users/users.component.ts
var _c0 = ["userFormModal"];
var _c1 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function UsersComponent_li_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 43);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, "Chargement... ");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_li_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 8);
    \u0275\u0275listener("click", function UsersComponent_li_97_Template_a_click_1_listener() {
      const site_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filterBySite(site_r3.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const site_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", site_r3.nom, " ");
  }
}
function UsersComponent_li_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 43);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, "Chargement... ");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_li_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 8);
    \u0275\u0275listener("click", function UsersComponent_li_107_Template_a_click_1_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filterByDepartment(dept_r6.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dept_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", dept_r6.nom, " ");
  }
}
function UsersComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5, "Chargement des utilisateurs...");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 51);
    \u0275\u0275listener("click", function UsersComponent_div_109_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.error = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.error, " ");
  }
}
function UsersComponent_div_110_For_33_li_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 73);
    \u0275\u0275listener("click", function UsersComponent_div_110_For_33_li_43_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const user_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deactivateUser(user_r9));
    });
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275text(3, "D\xE9sactiver ");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_110_For_33_li_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 75);
    \u0275\u0275listener("click", function UsersComponent_div_110_For_33_li_44_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const user_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.activateUser(user_r9));
    });
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275text(3, "Activer ");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_110_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 57)(3, "div", 58);
    \u0275\u0275element(4, "img", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h6", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "a", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 63);
    \u0275\u0275listener("click", function UsersComponent_div_110_For_33_Template_button_click_13_listener() {
      const user_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.copyEmail(user_r9));
    });
    \u0275\u0275element(14, "i", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td")(28, "span", 65);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td", 55)(31, "div", 4)(32, "a", 66);
    \u0275\u0275element(33, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ul", 25)(35, "li")(36, "a", 68);
    \u0275\u0275listener("click", function UsersComponent_div_110_For_33_Template_a_click_36_listener() {
      const user_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewUserDetails(user_r9));
    });
    \u0275\u0275element(37, "i", 69);
    \u0275\u0275text(38, "Voir d\xE9tails ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "li")(40, "a", 68);
    \u0275\u0275listener("click", function UsersComponent_div_110_For_33_Template_a_click_40_listener() {
      const user_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditUserModal(user_r9));
    });
    \u0275\u0275element(41, "i", 70);
    \u0275\u0275text(42, "Modifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, UsersComponent_div_110_For_33_li_43_Template, 4, 0, "li", 28)(44, UsersComponent_div_110_For_33_li_44_Template, 4, 0, "li", 28);
    \u0275\u0275elementStart(45, "li")(46, "a", 71);
    \u0275\u0275listener("click", function UsersComponent_div_110_For_33_Template_a_click_46_listener() {
      const user_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteUser(user_r9));
    });
    \u0275\u0275element(47, "i", 72);
    \u0275\u0275text(48, "Supprimer ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", user_r9.photo || "assets/img/profiles/avatar-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r9.nomPrenom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r9.userName);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275interpolate1("mailto:", user_r9.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r9.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r9.telephone || \u0275\u0275pipeBind1(17, 15, "manageUsers.notProvided"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r9.siteNom || "Site " + user_r9.siteId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r9.departementNom || "D\xE9partement " + user_r9.departementId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r9.derniereConnexion ? ctx_r3.formatDate(user_r9.derniereConnexion) : \u0275\u0275pipeBind1(24, 17, "manageUsers.never"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(user_r9.dateCreation));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.getStatusClass(user_r9.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusText(user_r9.statut), " ");
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", user_r9.statut === "ACTIF");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r9.statut === "INACTIF" || user_r9.statut === "EN_ATTENTE");
  }
}
function UsersComponent_div_110_ForEmpty_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77)(2, "div", 78);
    \u0275\u0275element(3, "i", 79);
    \u0275\u0275elementStart(4, "h6", 80);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 81);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "manageUsers.noUsers"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "manageUsers.noUsersMessage"));
  }
}
function UsersComponent_div_110_Conditional_35_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 83)(1, "a", 84);
    \u0275\u0275listener("click", function UsersComponent_div_110_Conditional_35_For_12_Template_a_click_1_listener() {
      const page_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.changePage(page_r14));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r14 === ctx_r3.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", page_r14 + 1, " ");
  }
}
function UsersComponent_div_110_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "nav")(7, "ul", 82)(8, "li", 83)(9, "a", 84);
    \u0275\u0275listener("click", function UsersComponent_div_110_Conditional_35_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(ctx_r3.currentPage - 1));
    });
    \u0275\u0275element(10, "i", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(11, UsersComponent_div_110_Conditional_35_For_12_Template, 3, 3, "li", 86, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(13, "li", 83)(14, "a", 84);
    \u0275\u0275listener("click", function UsersComponent_div_110_Conditional_35_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(ctx_r3.currentPage + 1));
    });
    \u0275\u0275element(15, "i", 87);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "a", 88);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 7)(21, "li")(22, "a", 8);
    \u0275\u0275listener("click", function UsersComponent_div_110_Conditional_35_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePageSize(5));
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "li")(26, "a", 8);
    \u0275\u0275listener("click", function UsersComponent_div_110_Conditional_35_Template_a_click_26_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePageSize(10));
    });
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li")(30, "a", 8);
    \u0275\u0275listener("click", function UsersComponent_div_110_Conditional_35_Template_a_click_30_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePageSize(25));
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 8);
    \u0275\u0275listener("click", function UsersComponent_div_110_Conditional_35_Template_a_click_34_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePageSize(50));
    });
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate5(" ", \u0275\u0275pipeBind1(3, 15, "manageUsers.showing"), " ", ctx_r3.users.length, " ", \u0275\u0275pipeBind1(4, 17, "manageUsers.of"), " ", ctx_r3.totalElements, " ", \u0275\u0275pipeBind1(5, 19, "manageUsers.users"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("disabled", ctx_r3.currentPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.getPageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r3.currentPage === ctx_r3.totalPages - 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r3.pageSize, " ", \u0275\u0275pipeBind1(19, 21, "manageUsers.perPage"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("5 ", \u0275\u0275pipeBind1(24, 23, "manageUsers.perPage"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("10 ", \u0275\u0275pipeBind1(28, 25, "manageUsers.perPage"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("25 ", \u0275\u0275pipeBind1(32, 27, "manageUsers.perPage"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("50 ", \u0275\u0275pipeBind1(36, 29, "manageUsers.perPage"));
  }
}
function UsersComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "table", 53)(2, "thead", 54)(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 55);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275repeaterCreate(32, UsersComponent_div_110_For_33_Template, 49, 19, "tr", null, _forTrack0, false, UsersComponent_div_110_ForEmpty_34_Template, 10, 6, "tr");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, UsersComponent_div_110_Conditional_35_Template, 37, 31, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "manageUsers.user"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "manageUsers.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "manageUsers.phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "manageUsers.site"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 19, "manageUsers.department"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 21, "manageUsers.lastLogin"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 23, "manageUsers.creationDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, "manageUsers.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "manageUsers.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.users);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.totalPages > 1 ? 35 : -1);
  }
}
function UsersComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 89);
  }
  if (rf & 2) {
    \u0275\u0275classProp("show", false);
  }
}
var UsersComponent = class _UsersComponent {
  // Use cases injectés
  getUsersUseCase = inject(GET_USERS_USE_CASE);
  createUserUseCase = inject(CREATE_USER_USE_CASE);
  // Repository injecté
  userRepository = inject(USER_REPOSITORY);
  // Services injectés
  siteService = inject(SiteService);
  departementService = inject(DepartementService);
  authService = inject(AuthService);
  router = inject(Router);
  // Référence à la modale
  userFormModal;
  // Données
  users = [];
  loading = false;
  error = null;
  // Gestion de la modal
  selectedUser = null;
  isEditMode = false;
  modalTitle = "Cr\xE9er un nouvel utilisateur";
  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  totalPages = 0;
  // Filtres
  searchQuery = "";
  statusFilter = "";
  siteFilter = null;
  departmentFilter = null;
  // Données pour les filtres
  sites = [];
  departments = [];
  loadingFilters = false;
  constructor() {
  }
  ngOnInit() {
    this.loadUsers();
    this.loadFiltersData();
  }
  /**
   * Charge la liste des utilisateurs avec les filtres appropriés
   */
  loadUsers() {
    return __async(this, null, function* () {
      this.loading = true;
      this.error = null;
      try {
        const options = {
          page: this.currentPage,
          size: this.pageSize,
          search: this.searchQuery || void 0,
          sortBy: "nomPrenom",
          sortOrder: "asc"
        };
        let response;
        if (this.siteFilter) {
          response = yield this.getUsersUseCase.executeBySite(this.siteFilter, options);
        } else if (this.departmentFilter) {
          response = yield this.getUsersUseCase.executeByDepartment(this.departmentFilter, options);
        } else {
          response = yield this.getUsersUseCase.execute(options);
        }
        this.users = response.content;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
      } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs:", error);
        this.error = "Impossible de charger la liste des utilisateurs. Veuillez r\xE9essayer.";
        this.users = [];
      } finally {
        this.loading = false;
      }
    });
  }
  /**
   * Charge les données pour les filtres (sites et départements)
   */
  loadFiltersData() {
    return __async(this, null, function* () {
      this.loadingFilters = true;
      try {
        const user = this.authService.user;
        const societeId = user?.societeId;
        if (!societeId) {
          console.warn("Aucune soci\xE9t\xE9 trouv\xE9e pour l'utilisateur connect\xE9");
          this.sites = [];
          this.departments = [];
          return;
        }
        const sitesResponse = yield this.siteService.getSites({
          societeId,
          page: 0,
          size: 100,
          // Charger tous les sites
          actif: true
          // Seulement les sites actifs
        }).toPromise();
        if (sitesResponse?.content) {
          this.sites = sitesResponse.content.map((site) => ({
            id: site.id,
            nom: site.nom || `Site ${site.id}`
          }));
        } else {
          this.sites = [];
        }
        const departementsResponse = yield this.departementService.getDepartements(
          societeId,
          0,
          // page
          100,
          // size - Charger tous les départements
          void 0,
          // search
          true
          // actif - Seulement les départements actifs
        ).toPromise();
        if (departementsResponse?.content) {
          this.departments = departementsResponse.content.map((dept) => ({
            id: dept.id,
            nom: dept.nom || `D\xE9partement ${dept.id}`
          }));
        } else {
          this.departments = [];
        }
      } catch (error) {
        console.error("Erreur lors du chargement des filtres:", error);
        this.sites = [];
        this.departments = [];
      } finally {
        this.loadingFilters = false;
      }
    });
  }
  /**
   * Recherche des utilisateurs
   */
  onSearch() {
    this.currentPage = 0;
    this.loadUsers();
  }
  /**
   * Réinitialise les filtres
   */
  resetFilters() {
    this.searchQuery = "";
    this.statusFilter = "";
    this.siteFilter = null;
    this.departmentFilter = null;
    this.currentPage = 0;
    this.loadUsers();
  }
  /**
   * Filtre par site
   */
  filterBySite(siteId) {
    this.siteFilter = siteId;
    this.departmentFilter = null;
    this.currentPage = 0;
    this.loadUsers();
  }
  /**
   * Filtre par département
   */
  filterByDepartment(departmentId) {
    this.departmentFilter = departmentId;
    this.siteFilter = null;
    this.currentPage = 0;
    this.loadUsers();
  }
  /**
   * Retourne le nom du site sélectionné
   */
  getSelectedSiteName() {
    if (!this.siteFilter)
      return "Tous";
    const site = this.sites.find((s) => s.id === this.siteFilter);
    return site ? site.nom : `Site ${this.siteFilter}`;
  }
  /**
   * Retourne le nom du département sélectionné
   */
  getSelectedDepartmentName() {
    if (!this.departmentFilter)
      return "Tous";
    const dept = this.departments.find((d) => d.id === this.departmentFilter);
    return dept ? dept.nom : `D\xE9partement ${this.departmentFilter}`;
  }
  /**
   * Change de page
   */
  changePage(page) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadUsers();
    }
  }
  /**
   * Change la taille de la page
   */
  changePageSize(size) {
    this.pageSize = size;
    this.currentPage = 0;
    this.loadUsers();
  }
  /**
   * Ouvre le modal de création d'utilisateur
   */
  openCreateUserModal() {
    this.selectedUser = null;
    this.isEditMode = false;
    this.modalTitle = "Cr\xE9er un nouvel utilisateur";
    this.openModal();
  }
  /**
   * Ouvre le modal d'édition d'utilisateur
   */
  openEditUserModal(user) {
    this.selectedUser = user;
    this.isEditMode = true;
    this.modalTitle = `Modifier l'utilisateur ${user.nomPrenom}`;
    this.openModal();
  }
  /**
   * Ouvre la modal
   */
  openModal() {
    const modalElement = this.userFormModal?.nativeElement;
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error("\xC9l\xE9ment modal non trouv\xE9");
    }
  }
  /**
   * Active un utilisateur
   */
  activateUser(user) {
    return __async(this, null, function* () {
      try {
        yield this.userRepository.activateUser({ value: user.id });
        yield this.loadUsers();
        alert(`L'utilisateur ${user.nomPrenom} a \xE9t\xE9 activ\xE9 avec succ\xE8s.`);
      } catch (error) {
        console.error("Erreur lors de l'activation:", error);
        this.error = "Impossible d'activer l'utilisateur.";
        alert("Erreur lors de l'activation de l'utilisateur.");
      }
    });
  }
  /**
   * Désactive un utilisateur
   */
  deactivateUser(user) {
    return __async(this, null, function* () {
      try {
        yield this.userRepository.deactivateUser({ value: user.id });
        yield this.loadUsers();
        alert(`L'utilisateur ${user.nomPrenom} a \xE9t\xE9 d\xE9sactiv\xE9 avec succ\xE8s.`);
      } catch (error) {
        console.error("Erreur lors de la d\xE9sactivation:", error);
        this.error = "Impossible de d\xE9sactiver l'utilisateur.";
        alert("Erreur lors de la d\xE9sactivation de l'utilisateur.");
      }
    });
  }
  /**
   * Supprime un utilisateur
   */
  deleteUser(user) {
    return __async(this, null, function* () {
      if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer l'utilisateur ${user.nomPrenom} ?`)) {
        try {
          console.log("Supprimer utilisateur:", user);
          yield this.loadUsers();
        } catch (error) {
          console.error("Erreur lors de la suppression:", error);
          this.error = "Impossible de supprimer l'utilisateur.";
        }
      }
    });
  }
  /**
   * Exporte la liste des utilisateurs
   */
  exportUsers() {
    console.log("Exporter la liste des utilisateurs");
    alert("Fonctionnalit\xE9 d'exportation \xE0 impl\xE9menter");
  }
  /**
   * Importe des utilisateurs
   */
  importUsers() {
    console.log("Importer des utilisateurs");
    alert("Fonctionnalit\xE9 d'importation \xE0 impl\xE9menter");
  }
  /**
   * Génère un rapport d'utilisateurs
   */
  generateReport() {
    console.log("G\xE9n\xE9rer un rapport d'utilisateurs");
    alert("Fonctionnalit\xE9 de rapport \xE0 impl\xE9menter");
  }
  /**
   * Ouvre les détails d'un utilisateur
   */
  viewUserDetails(user) {
    this.router.navigate(["/app/manage-users/user-detail", user.id]);
  }
  /**
   * Copie l'email de l'utilisateur
   */
  copyEmail(user) {
    navigator.clipboard.writeText(user.email).then(() => {
      console.log("Email copi\xE9:", user.email);
      alert("Email copi\xE9 dans le presse-papier");
    }).catch((err) => {
      console.error("Erreur lors de la copie:", err);
      alert("Erreur lors de la copie de l'email");
    });
  }
  /**
   * Formate la date pour l'affichage
   */
  formatDate(dateString) {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Date invalide";
      }
      return date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (error) {
      return "Date invalide";
    }
  }
  /**
   * Retourne la classe CSS pour le statut
   */
  getStatusClass(status) {
    switch (status) {
      case "ACTIF":
        return "badge bg-success";
      case "INACTIF":
        return "badge bg-danger";
      case "EN_ATTENTE":
        return "badge bg-warning";
      default:
        return "badge bg-secondary";
    }
  }
  /**
   * Retourne le texte du statut
   */
  getStatusText(status) {
    switch (status) {
      case "ACTIF":
        return "Actif";
      case "INACTIF":
        return "Inactif";
      case "EN_ATTENTE":
        return "En attente";
      default:
        return status;
    }
  }
  // Nouvelles méthodes pour le template
  /**
   * Change le tri
   */
  changeSort(sortBy, sortOrder) {
    console.log(`Trier par ${sortBy} (${sortOrder})`);
    this.loadUsers();
  }
  /**
   * Filtre par statut
   */
  filterByStatus(status) {
    this.statusFilter = status;
    this.currentPage = 0;
    this.loadUsers();
  }
  /**
   * Retourne les numéros de page pour la pagination
   */
  getPageNumbers() {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(0, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(0, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  /**
   * Gère la sauvegarde d'un utilisateur
   */
  onUserSaved(user) {
    console.log("Utilisateur sauvegard\xE9:", user);
    this.loadUsers();
    this.closeModal();
  }
  /**
   * Gère l'annulation du formulaire
   */
  onFormCancelled() {
    console.log("Formulaire annul\xE9");
    this.closeModal();
  }
  /**
   * Ferme la modale
   */
  closeModal() {
    const modalElement = this.userFormModal?.nativeElement;
    if (modalElement) {
      const modal = window.bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.userFormModal = _t.first);
    }
  }, decls: 122, vars: 72, consts: [["userFormModal", ""], [1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-refresh", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "isax", "isax-filter", "me-1"], [1, "isax", "isax-building", "me-1"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "isax", "isax-building-3", "me-1"], ["class", "text-center py-4", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "userSaved", "cancelled", "user", "isEditMode"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["href", "javascript:void(0);", 1, "dropdown-item", "disabled"], [1, "fas", "fa-spinner", "fa-spin", "me-2"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-circle", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "table-responsive"], [1, "table", "table-nowrap", "dataTable", "datatable"], [1, "thead-light"], [1, "text-end"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "Avatar", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [1, "text-muted"], [1, "text-primary", 3, "href"], ["title", "Copier l'email", 1, "btn", "btn-sm", "btn-link", "text-muted", "p-0", "ms-1", 3, "click"], [1, "fas", "fa-copy"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-white"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-eye", "me-2"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", "text-danger", 3, "click"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", "text-warning", 3, "click"], [1, "isax", "isax-pause-circle", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", "text-success", 3, "click"], [1, "isax", "isax-play-circle", "me-2"], ["colspan", "9", 1, "text-center", "py-4"], [1, "empty-state"], [1, "isax", "isax-user-square", "fs-48", "text-muted", "mb-3"], [1, "mb-2"], [1, "text-muted", "mb-0"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:void(0);", 1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], [1, "page-item", 3, "active"], [1, "fas", "fa-chevron-right"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "btn-sm", "dropdown-toggle"], [1, "modal-backdrop", "fade"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h6");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul", 7)(13, "li")(14, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportUsers());
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportUsers());
      });
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div")(22, "a", 9);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreateUserModal());
      });
      \u0275\u0275element(23, "i", 10);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 11)(27, "div", 12)(28, "div", 13)(29, "div", 14)(30, "div", 15)(31, "a", 16);
      \u0275\u0275element(32, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 18)(34, "label")(35, "input", 19);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function UsersComponent_Template_input_ngModelChange_35_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearch());
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "a", 20);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275element(38, "i", 21);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 13)(42, "div", 4)(43, "a", 22);
      \u0275\u0275element(44, "i", 23);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementStart(47, "span", 24);
      \u0275\u0275text(48, "Nom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "ul", 25)(50, "li")(51, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_51_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeSort("nomPrenom", "asc"));
      });
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_55_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeSort("nomPrenom", "desc"));
      });
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_59_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeSort("dateCreation", "desc"));
      });
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeSort("dateCreation", "asc"));
      });
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 4)(67, "a", 22);
      \u0275\u0275element(68, "i", 26);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "ul", 7)(72, "li")(73, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_73_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterByStatus(""));
      });
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_77_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterByStatus("ACTIF"));
      });
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_81_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterByStatus("INACTIF"));
      });
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "li")(85, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_85_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterByStatus("EN_ATTENTE"));
      });
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "div", 4)(89, "a", 22);
      \u0275\u0275element(90, "i", 27);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "ul", 7)(93, "li")(94, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_94_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterBySite(null));
      });
      \u0275\u0275text(95, " Tous les sites ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(96, UsersComponent_li_96_Template, 4, 0, "li", 28)(97, UsersComponent_li_97_Template, 3, 1, "li", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 4)(99, "a", 22);
      \u0275\u0275element(100, "i", 30);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "ul", 7)(103, "li")(104, "a", 8);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_104_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterByDepartment(null));
      });
      \u0275\u0275text(105, " Tous les d\xE9partements ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(106, UsersComponent_li_106_Template, 4, 0, "li", 28)(107, UsersComponent_li_107_Template, 3, 1, "li", 29);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(108, UsersComponent_div_108_Template, 6, 0, "div", 31)(109, UsersComponent_div_109_Template, 4, 1, "div", 32)(110, UsersComponent_div_110_Template, 36, 29, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 34, 0)(113, "div", 35)(114, "div", 36)(115, "div", 37)(116, "h5", 38);
      \u0275\u0275text(117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "button", 39);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_118_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFormCancelled());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 40)(120, "app-user-form", 41);
      \u0275\u0275listener("userSaved", function UsersComponent_Template_app_user_form_userSaved_120_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUserSaved($event));
      })("cancelled", function UsersComponent_Template_app_user_form_cancelled_120_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFormCancelled());
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(121, UsersComponent_div_121_Template, 1, 2, "div", 42);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 37, "manageUsers.title"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 39, "manageUsers.export"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 41, "manageUsers.exportPdf"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 43, "manageUsers.exportExcel"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 45, "manageUsers.newUser"), " ");
      \u0275\u0275advance(11);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(36, 47, "manageUsers.search")));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(71, _c1));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 49, "manageUsers.reset"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 51, "manageUsers.sortBy"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 53, "manageUsers.sortNameAsc"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 55, "manageUsers.sortNameDesc"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 57, "manageUsers.sortRecent"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 59, "manageUsers.sortOldest"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(70, 61, "manageUsers.filterStatus"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 63, "manageUsers.filterAll"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 65, "manageUsers.filterActive"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 67, "manageUsers.filterInactive"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 69, "manageUsers.filterPending"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Site: ", ctx.getSelectedSiteName(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loadingFilters);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.sites);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" D\xE9partement: ", ctx.getSelectedDepartmentName(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loadingFilters);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", "none");
      \u0275\u0275classProp("show", false);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.modalTitle, " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("user", ctx.selectedUser || void 0)("isEditMode", ctx.isEditMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", false);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    HttpClientModule,
    UserFormComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      UserFormComponent,
      TranslatePipe
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>{{ 'manageUsers.title' | translate }}</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown">
                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i class="isax isax-export-1 me-1"></i>{{ 'manageUsers.export' | translate }}
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);" (click)="exportUsers()">{{ 'manageUsers.exportPdf' | translate }}</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);" (click)="exportUsers()">{{ 'manageUsers.exportExcel' | translate }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" (click)="openCreateUserModal()">
                    <i class="isax isax-add-circle5 me-1"></i>{{ 'manageUsers.newUser' | translate }}
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

    <div class="mb-3">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="table-search d-flex align-items-center mb-0">
                    <div class="search-input">
                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>
                        <div id="DataTables_Table_0_filter" class="dataTables_filter">
                            <label>
                                <input type="search" [(ngModel)]="searchQuery" [ngModelOptions]="{ standalone: true }" (ngModelChange)="onSearch()" class="form-control form-control-sm" placeholder="{{ 'manageUsers.search' | translate }}" aria-controls="DataTables_Table_0">
                            </label>
                        </div>
                    </div>
                </div>
                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" (click)="resetFilters()">
                    <i class="isax isax-refresh me-1"></i>{{ 'manageUsers.reset' | translate }}
                </a>
            </div>
            <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                        <i class="isax isax-sort me-1"></i>{{ 'manageUsers.sortBy' | translate }} <span class="fw-normal ms-1">Nom</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="changeSort('nomPrenom', 'asc')">{{ 'manageUsers.sortNameAsc' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="changeSort('nomPrenom', 'desc')">{{ 'manageUsers.sortNameDesc' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="changeSort('dateCreation', 'desc')">{{ 'manageUsers.sortRecent' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="changeSort('dateCreation', 'asc')">{{ 'manageUsers.sortOldest' | translate }}</a>
                        </li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                        <i class="isax isax-filter me-1"></i>{{ 'manageUsers.filterStatus' | translate }}
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByStatus('')">{{ 'manageUsers.filterAll' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByStatus('ACTIF')">{{ 'manageUsers.filterActive' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByStatus('INACTIF')">{{ 'manageUsers.filterInactive' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByStatus('EN_ATTENTE')">{{ 'manageUsers.filterPending' | translate }}</a>
                        </li>
                    </ul>
                </div>
                
                <!-- Filtre par site -->
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                        <i class="isax isax-building me-1"></i>
                        Site: {{ getSelectedSiteName() }}
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterBySite(null)">
                                Tous les sites
                            </a>
                        </li>
                        <li *ngIf="loadingFilters">
                            <a href="javascript:void(0);" class="dropdown-item disabled">
                                <i class="fas fa-spinner fa-spin me-2"></i>Chargement...
                            </a>
                        </li>
                        <li *ngFor="let site of sites">
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterBySite(site.id)">
                                {{ site.nom }}
                            </a>
                        </li>
                    </ul>
                </div>
                
                <!-- Filtre par d\xE9partement -->
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                        <i class="isax isax-building-3 me-1"></i>
                        D\xE9partement: {{ getSelectedDepartmentName() }}
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByDepartment(null)">
                                Tous les d\xE9partements
                            </a>
                        </li>
                        <li *ngIf="loadingFilters">
                            <a href="javascript:void(0);" class="dropdown-item disabled">
                                <i class="fas fa-spinner fa-spin me-2"></i>Chargement...
                            </a>
                        </li>
                        <li *ngFor="let dept of departments">
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByDepartment(dept.id)">
                                {{ dept.nom }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Loading Indicator -->
    <div *ngIf="loading" class="text-center py-4">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Chargement...</span>
        </div>
        <p class="mt-2">Chargement des utilisateurs...</p>
    </div>

    <!-- Error Message -->
    <div *ngIf="error && !loading" class="alert alert-danger alert-dismissible fade show" role="alert">
        <i class="fas fa-exclamation-circle me-2"></i>
        {{ error }}
        <button type="button" class="btn-close" (click)="error = null" aria-label="Close"></button>
    </div>

    <!-- Users Table -->
    <div *ngIf="!loading && !error" class="table-responsive">
        <table class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th>{{ 'manageUsers.user' | translate }}</th>
                    <th>{{ 'manageUsers.email' | translate }}</th>
                    <th>{{ 'manageUsers.phone' | translate }}</th>
                    <th>{{ 'manageUsers.site' | translate }}</th>
                    <th>{{ 'manageUsers.department' | translate }}</th>
                    <th>{{ 'manageUsers.lastLogin' | translate }}</th>
                    <th>{{ 'manageUsers.creationDate' | translate }}</th>
                    <th>{{ 'manageUsers.status' | translate }}</th>
                    <th class="text-end">{{ 'manageUsers.actions' | translate }}</th>
                </tr>
            </thead>
            <tbody>
                @for (user of users; track user.id) {
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img [src]="user.photo || 'assets/img/profiles/avatar-01.jpg'" class="rounded-circle" alt="Avatar">
                            </div>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0">{{ user.nomPrenom }}</h6>
                                <small class="text-muted">{{ user.userName }}</small>
                            </div>
                        </div>
                    </td>
                    <td>
                        <a href="mailto:{{ user.email }}" class="text-primary">{{ user.email }}</a>
                        <button class="btn btn-sm btn-link text-muted p-0 ms-1" (click)="copyEmail(user)" title="Copier l'email">
                            <i class="fas fa-copy"></i>
                        </button>
                    </td>
                    <td>{{ user.telephone || ('manageUsers.notProvided' | translate) }}</td>
                    <td>{{ user.siteNom || 'Site ' + user.siteId }}</td>
                    <td>{{ user.departementNom || 'D\xE9partement ' + user.departementId }}</td>
                    <td>{{ user.derniereConnexion ? formatDate(user.derniereConnexion) : ('manageUsers.never' | translate) }}</td>
                    <td>{{ formatDate(user.dateCreation) }}</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center" [ngClass]="getStatusClass(user.statut)">
                            {{ getStatusText(user.statut) }}
                        </span>
                    </td>
                    <td class="text-end">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white" data-bs-toggle="dropdown">
                                <i class="isax isax-more"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" (click)="viewUserDetails(user)">
                                        <i class="isax isax-eye me-2"></i>Voir d\xE9tails
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" (click)="openEditUserModal(user)">
                                        <i class="isax isax-edit me-2"></i>Modifier
                                    </a>
                                </li>
                                <li *ngIf="user.statut === 'ACTIF'">
                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center text-warning" (click)="deactivateUser(user)">
                                        <i class="isax isax-pause-circle me-2"></i>D\xE9sactiver
                                    </a>
                                </li>
                                <li *ngIf="user.statut === 'INACTIF' || user.statut === 'EN_ATTENTE'">
                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center text-success" (click)="activateUser(user)">
                                        <i class="isax isax-play-circle me-2"></i>Activer
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center text-danger" (click)="deleteUser(user)">
                                        <i class="isax isax-trash me-2"></i>Supprimer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                } @empty {
                <tr>
                    <td colspan="9" class="text-center py-4">
                        <div class="empty-state">
                            <i class="isax isax-user-square fs-48 text-muted mb-3"></i>
                            <h6 class="mb-2">{{ 'manageUsers.noUsers' | translate }}</h6>
                            <p class="text-muted mb-0">{{ 'manageUsers.noUsersMessage' | translate }}</p>
                        </div>
                    </td>
                </tr>
                }
            </tbody>
        </table>

        <!-- Pagination -->
        @if (totalPages > 1) {
        <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="text-muted">
                {{ 'manageUsers.showing' | translate }} {{ users.length }} {{ 'manageUsers.of' | translate }} {{ totalElements }} {{ 'manageUsers.users' | translate }}
            </div>
            <nav>
                <ul class="pagination pagination-sm mb-0">
                    <li class="page-item" [class.disabled]="currentPage === 0">
                        <a class="page-link" href="javascript:void(0);" (click)="changePage(currentPage - 1)">
                            <i class="fas fa-chevron-left"></i>
                        </a>
                    </li>
                    
                    @for (page of getPageNumbers(); track page) {
                    <li class="page-item" [class.active]="page === currentPage">
                        <a class="page-link" href="javascript:void(0);" (click)="changePage(page)">
                            {{ page + 1 }}
                        </a>
                    </li>
                    }
                    
                    <li class="page-item" [class.disabled]="currentPage === totalPages - 1">
                        <a class="page-link" href="javascript:void(0);" (click)="changePage(currentPage + 1)">
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="dropdown">
                <a href="javascript:void(0);" class="btn btn-outline-white btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                    {{ pageSize }} {{ 'manageUsers.perPage' | translate }}
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void(0);" (click)="changePageSize(5)">5 {{ 'manageUsers.perPage' | translate }}</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);" (click)="changePageSize(10)">10 {{ 'manageUsers.perPage' | translate }}</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);" (click)="changePageSize(25)">25 {{ 'manageUsers.perPage' | translate }}</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);" (click)="changePageSize(50)">50 {{ 'manageUsers.perPage' | translate }}</a></li>
                </ul>
            </div>
        </div>
        }
    </div>

</div>
<!-- End Content -->

<!-- Modal Formulaire Utilisateur -->
<div #userFormModal class="modal fade" [class.show]="false" [style.display]="'none'" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          {{ modalTitle }}
        </h5>
        <button type="button" class="btn-close" (click)="onFormCancelled()"></button>
      </div>
      <div class="modal-body">
        <app-user-form 
          [user]="selectedUser || undefined"
          [isEditMode]="isEditMode"
          (userSaved)="onUserSaved($event)" 
          (cancelled)="onFormCancelled()">
        </app-user-form>
      </div>
    </div>
  </div>
</div>

<!-- Backdrop du modal -->
<div class="modal-backdrop fade" [class.show]="false" *ngIf="false"></div>
` }]
  }], () => [], { userFormModal: [{
    type: ViewChild,
    args: ["userFormModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/modules/manage-users/presentation/pages/users/users.component.ts", lineNumber: 43 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-TQZQXSQ7.js.map
