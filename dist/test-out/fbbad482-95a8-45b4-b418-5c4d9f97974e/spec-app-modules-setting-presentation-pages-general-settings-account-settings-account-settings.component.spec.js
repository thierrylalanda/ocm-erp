import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-CPWNUJAP.js";
import {
  BsDatepickerModule,
  init_ngx_bootstrap_datepicker
} from "./chunk-WSBEZP5X.js";
import {
  MatFormFieldModule,
  MatSelectModule,
  init_select
} from "./chunk-PJP4EZYQ.js";
import "./chunk-ZLTBFUHR.js";
import "./chunk-N2Q3HONL.js";
import "./chunk-ZQVU7KV2.js";
import "./chunk-Y46UO4F7.js";
import "./chunk-WYJ2IQUD.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import "./chunk-SR4JAI3W.js";
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import {
  environment,
  init_environment
} from "./chunk-Q2A5OOYR.js";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
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
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.html
var account_settings_component_default;
var init_account_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.html"() {
    account_settings_component_default = `<div class="mb-3">
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
`;
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.scss
var account_settings_component_default2;
var init_account_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.scss"() {
    account_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.scss */\n/*# sourceMappingURL=account-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/application/services/user.service.ts
var UserService;
var init_user_service = __esm({
  "src/app/modules/setting/application/services/user.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_auth_service();
    init_environment();
    UserService = class UserService2 {
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
      static ctorParameters = () => [
        { type: HttpClient },
        { type: AuthService }
      ];
    };
    UserService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], UserService);
  }
});

// src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.ts
var AccountSettingsComponent;
var init_account_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_account_settings_component();
    init_account_settings_component2();
    init_common();
    init_core();
    init_forms();
    init_select();
    init_input();
    init_form_field();
    init_ngx_bootstrap_datepicker();
    init_user_service();
    AccountSettingsComponent = class AccountSettingsComponent2 {
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
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: UserService }
      ];
    };
    AccountSettingsComponent = __decorate([
      Component({
        selector: "app-account-settings",
        imports: [
          CommonModule,
          MatSelectModule,
          MatInputModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          BsDatepickerModule
        ],
        template: account_settings_component_default,
        styles: [account_settings_component_default2]
      })
    ], AccountSettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.spec.ts
var require_account_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/general-settings/account-settings/account-settings.component.spec.ts"(exports) {
    init_testing();
    init_account_settings_component3();
    describe("AccountSettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AccountSettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AccountSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_account_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-general-settings-account-settings-account-settings.component.spec.js.map
