import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-CPWNUJAP.js";
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
  init_translation
} from "./chunk-O7BLCUFK.js";
import {
  TranslatePipe
} from "./chunk-YTCUO5R2.js";
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
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
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

// angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.html
var company_settings_component_default;
var init_company_settings_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.html"() {
    company_settings_component_default = `<div class="mb-3 pb-2">
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
`;
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.scss
var company_settings_component_default2;
var init_company_settings_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.scss"() {
    company_settings_component_default2 = "/* src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.scss */\n/*# sourceMappingURL=company-settings.component.css.map */\n";
  }
});

// src/app/modules/setting/application/services/company.service.ts
var CompanyService;
var init_company_service = __esm({
  "src/app/modules/setting/application/services/company.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_auth_service();
    init_environment();
    CompanyService = class CompanyService2 {
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
      static ctorParameters = () => [
        { type: HttpClient },
        { type: AuthService }
      ];
    };
    CompanyService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], CompanyService);
  }
});

// src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.ts
var CompanySettingsComponent;
var init_company_settings_component3 = __esm({
  "src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_company_settings_component();
    init_company_settings_component2();
    init_common();
    init_core();
    init_forms();
    init_select();
    init_input();
    init_form_field();
    init_company_service();
    init_translation();
    CompanySettingsComponent = class CompanySettingsComponent2 {
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
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: CompanyService }
      ];
    };
    CompanySettingsComponent = __decorate([
      Component({
        selector: "app-company-settings",
        standalone: true,
        imports: [
          CommonModule,
          MatSelectModule,
          MatInputModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          TranslatePipe
        ],
        template: company_settings_component_default,
        styles: [company_settings_component_default2]
      })
    ], CompanySettingsComponent);
  }
});

// src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.spec.ts
var require_company_settings_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/website-settings/company-settings/company-settings.component.spec.ts"(exports) {
    init_testing();
    init_company_settings_component3();
    describe("CompanySettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CompanySettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CompanySettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_company_settings_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-website-settings-company-settings-company-settings.component.spec.js.map
