import {
  TranslatePipe,
  init_translate_pipe
} from "./chunk-YTCUO5R2.js";
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
  init_core_index
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import {
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
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
  InjectionToken,
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

// angular:jit:template:src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.html
var roles_permissions_component_default;
var init_roles_permissions_component = __esm({
  "angular:jit:template:src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.html"() {
    roles_permissions_component_default = `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>{{ 'rolesPermissions.title' | translate }}</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown">
                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i class="isax isax-export-1 me-1"></i>{{ 'rolesPermissions.export' | translate }}
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);">{{ 'rolesPermissions.exportPdf' | translate }}</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);">{{ 'rolesPermissions.exportExcel' | translate }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                    <i class="isax isax-add-circle5 me-1"></i>{{ 'rolesPermissions.newRole' | translate }}
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

    <!-- start row -->
    <div class="row">
        <div class="col-md-3">
            <div class="input-group mb-3">
                <span class="input-group-text bg-white border-end-0">
                    <i class="isax isax-search-normal fs-12"></i>
                </span>
                <input type="text" class="form-control border-start-0 ps-0 bg-white" placeholder="{{ 'rolesPermissions.search' | translate }}">
            </div>
        </div><!-- end col -->
    </div>
    <!-- end row -->

    <!-- Loading State -->
    <div *ngIf="loading && roles.length === 0" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">{{ 'rolesPermissions.loading' | translate }}</p>
    </div>

    <!-- Error State -->
    <div *ngIf="error && roles.length === 0" class="alert alert-danger" role="alert">
        <i class="isax isax-danger me-2"></i> {{ error }}
        <button type="button" class="btn btn-sm btn-outline-danger ms-2" (click)="loadRoles()">{{ 'common.retry' | translate }}</button>
    </div>

    <!-- Success Message -->
    <div *ngIf="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <i class="isax isax-tick-circle me-2"></i> {{ 'rolesPermissions.saveSuccess' | translate }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <!-- Table List -->
    <div *ngIf="!loading || roles.length > 0" class="table-responsive table-nowrap">
        <table class="table border mb-0">
            <thead class="table-light">
                <tr>
                    <th>{{ 'rolesPermissions.roleName' | translate }}</th>
                    <th>{{ 'rolesPermissions.roleName' | translate }}</th>
                    <th>{{ 'rolesPermissions.description' | translate }}</th>
                    <th>{{ 'rolesPermissions.level' | translate }}</th>
                    <th>{{ 'rolesPermissions.status' | translate }}</th>
                    <th>{{ 'rolesPermissions.createdDate' | translate }}</th>
                    <th class="no-sort"></th>
                    <th class="no-sort"></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let role of roles">
                    <td>{{ role.roleCode }}</td>
                    <td>{{ role.roleNom }}</td>
                    <td>
                        <span *ngIf="role.roleDescription; else noDescription"
                              [attr.data-bs-toggle]="role.roleDescription.length > 50 ? 'popover' : null"
                              [attr.data-bs-trigger]="role.roleDescription.length > 50 ? 'hover focus' : null"
                              [attr.data-bs-placement]="role.roleDescription.length > 50 ? 'top' : null"
                              [attr.data-bs-content]="role.roleDescription.length > 50 ? role.roleDescription : null"
                              [attr.title]="role.roleDescription.length > 50 ? role.roleDescription : null">
                            {{ truncateDescription(role.roleDescription) }}
                        </span>
                        <ng-template #noDescription>-</ng-template>
                    </td>
                    <td>{{ role.roleNiveau }}</td>
                    <td>
                        <span [class]="getRoleStatusClass(role)">{{ getRoleStatus(role) }}</span>
                    </td>
                    <td>{{ formatDate(role.roleDateCreation) }}</td>
                    <td>
                        <a [routerLink]="routes.permission(role.id)" class="btn btn-outline-white d-inline-flex align-items-center">
                            <i class="isax isax-shield-tick me-1"></i> {{ 'rolesPermissions.permissions' | translate }}
                        </a>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" (click)="openEditModal(role)" data-bs-toggle="modal" data-bs-target="#edit_modal">
                                    <i class="isax isax-edit me-2"></i>{{ 'rolesPermissions.edit' | translate }}
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" (click)="openCopyModal(role)" data-bs-toggle="modal" data-bs-target="#copy_modal">
                                    <i class="isax isax-copy me-2"></i>{{ 'rolesPermissions.copy' | translate }}
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                    <i class="isax isax-trash me-2"></i>{{ 'rolesPermissions.delete' | translate }}
                                </a>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr *ngIf="roles.length === 0 && !loading">
                    <td colspan="8" class="text-center py-4">
                        <i class="isax isax-user-square fs-24 text-muted mb-2 d-block"></i>
                        <p class="text-muted mb-0">{{ 'rolesPermissions.noRoles' | translate }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- /Table List -->

</div>
<!-- End Content -->

<!-- Start Add Modal -->
<div id="add_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <!-- Start modal header -->
            <div class="modal-header">
                <h4 class="modal-title">{{ 'permissions.roleForm.addTitle' | translate }}</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <!-- End modal header -->

            <form [formGroup]="roleForm" (ngSubmit)="onSubmit()">
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleCode' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="roleCode" placeholder="{{ 'permissions.roleForm.roleCodePlaceholder' | translate }}">
                        <div *ngIf="isFieldInvalid('roleCode')" class="text-danger small mt-1">
                            {{ getFieldError('roleCode') }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleName' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="roleNom" placeholder="{{ 'permissions.roleForm.roleNamePlaceholder' | translate }}">
                        <div *ngIf="isFieldInvalid('roleNom')" class="text-danger small mt-1">
                            {{ getFieldError('roleNom') }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.description' | translate }}</label>
                        <textarea class="form-control" formControlName="roleDescription" rows="2" placeholder="{{ 'permissions.roleForm.descriptionPlaceholder' | translate }}"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.level' | translate }} <span class="text-danger">*</span></label>
                        <input type="number" class="form-control" formControlName="roleNiveau" min="1">
                        <div *ngIf="isFieldInvalid('roleNiveau')" class="text-danger small mt-1">
                            {{ getFieldError('roleNiveau') }}
                        </div>
                    </div>
                    <div class="mb-0">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" formControlName="roleActif" id="roleActif">
                            <label class="form-check-label" for="roleActif">{{ 'permissions.roleForm.active' | translate }}</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">{{ 'permissions.roleForm.cancel' | translate }}</button>
                    <button type="submit" class="btn btn-primary" [disabled]="roleForm.invalid || loading">
                        <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                        {{ loading ? ('permissions.roleForm.saving' | translate) : ('permissions.roleForm.create' | translate) }}
                    </button>
                </div>
            </form>
        </div><!-- End modal content-->
    </div><!-- End modal dialog-->
</div>
<!-- / End Add Modal -->

<!-- Start Edit Modal -->
<div id="edit_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <!-- Start modal header -->
            <div class="modal-header">
                <h4 class="modal-title">{{ 'permissions.roleForm.editTitle' | translate }}</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="closeEditModal()">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <!-- End modal header -->

            <form [formGroup]="editForm" (ngSubmit)="onEditSubmit()">
                <div class="modal-body">
                    <!-- Success Message -->
                    <div *ngIf="editSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                        <i class="isax isax-tick-circle me-2"></i> {{ 'permissions.roleForm.successEdit' | translate }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <!-- Error Message -->
                    <div *ngIf="editError" class="alert alert-danger" role="alert">
                        <i class="isax isax-danger me-2"></i> {{ editError }}
                    </div>

                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleCode' | translate }}</label>
                        <input type="text" class="form-control bg-light" [value]="selectedRole?.roleCode || ''" readonly>
                        <p class="text-muted small mt-1">{{ 'permissions.roleForm.codeReadonly' | translate }}</p>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleName' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="roleNom" placeholder="{{ 'permissions.roleForm.roleNamePlaceholder' | translate }}">
                        <div *ngIf="isEditFieldInvalid('roleNom')" class="text-danger small mt-1">
                            {{ getEditFieldError('roleNom') }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.description' | translate }}</label>
                        <textarea class="form-control" formControlName="roleDescription" rows="2" placeholder="{{ 'permissions.roleForm.descriptionPlaceholder' | translate }}"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.level' | translate }} <span class="text-danger">*</span></label>
                        <input type="number" class="form-control" formControlName="roleNiveau" min="1">
                        <div *ngIf="isEditFieldInvalid('roleNiveau')" class="text-danger small mt-1">
                            {{ getEditFieldError('roleNiveau') }}
                        </div>
                    </div>
                    <div class="mb-0">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" formControlName="roleActif" id="editRoleActif">
                            <label class="form-check-label" for="editRoleActif">{{ 'permissions.roleForm.active' | translate }}</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal" (click)="closeEditModal()">{{ 'permissions.roleForm.cancel' | translate }}</button>
                    <button type="submit" class="btn btn-primary" [disabled]="editForm.invalid || loading">
                        <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                        {{ loading ? ('permissions.roleForm.saving' | translate) : ('permissions.roleForm.save' | translate) }}
                    </button>
                </div>
            </form>
        </div><!-- End modal content-->
    </div><!-- End modal dialog-->
</div>
<!-- / End Edit Modal -->

<!-- Start Delete Modal -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
                <div class="modal-body text-center">
                    <div class="mb-3">
                        <img src="assets/img/icons/delete.svg" alt="img">
                    </div>
                    <h6 class="mb-1">{{ 'permissions.roleForm.deleteTitle' | translate }}</h6>
                    <p class="mb-3">{{ 'permissions.roleForm.deleteConfirm' | translate }}</p>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">{{ 'permissions.roleForm.cancel' | translate }}</a>
                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">{{ 'permissions.roleForm.delete' | translate }}</a>
                    </div>
            </div><!-- End modal body -->
        </div><!-- End modal content-->
    </div><!-- End modal dialog-->
</div>
<!-- / End Delete Modal -->

<!-- Start Copy Modal -->
<div id="copy_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <!-- Start modal header -->
            <div class="modal-header">
                <h4 class="modal-title">{{ 'permissions.roleForm.copyTitle' | translate }}</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="closeCopyModal()">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <!-- End modal header -->

            <form [formGroup]="copyForm" (ngSubmit)="onCopySubmit()">
                <div class="modal-body">
                    <!-- Success Message -->
                    <div *ngIf="copySuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                        <i class="isax isax-tick-circle me-2"></i> {{ 'permissions.roleForm.successCopy' | translate }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <!-- Error Message -->
                    <div *ngIf="copyError" class="alert alert-danger" role="alert">
                        <i class="isax isax-danger me-2"></i> {{ copyError }}
                    </div>

                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleCode' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="newRoleCode" placeholder="{{ 'permissions.roleForm.roleCodePlaceholder' | translate }}">
                        <div *ngIf="isCopyFieldInvalid('newRoleCode')" class="text-danger small mt-1">
                            {{ getCopyFieldError('newRoleCode') }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ 'permissions.roleForm.roleName' | translate }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" formControlName="newRoleNom" placeholder="{{ 'permissions.roleForm.roleNamePlaceholder' | translate }}">
                        <div *ngIf="isCopyFieldInvalid('newRoleNom')" class="text-danger small mt-1">
                            {{ getCopyFieldError('newRoleNom') }}
                        </div>
                    </div>
                    <div class="mb-0">
                        <p class="text-muted small">
                            <i class="isax isax-info-circle me-1"></i>
                            {{ 'permissions.roleForm.copyInfo' | translate }}
                        </p>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal" (click)="closeCopyModal()">{{ 'permissions.roleForm.cancel' | translate }}</button>
                    <button type="submit" class="btn btn-primary" [disabled]="copyForm.invalid || loading">
                        <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                        {{ loading ? ('permissions.roleForm.saving' | translate) : ('permissions.roleForm.copy' | translate) }}
                    </button>
                </div>
            </form>
        </div><!-- End modal content-->
    </div><!-- End modal dialog-->
</div>
<!-- / End Copy Modal -->
`;
  }
});

// angular:jit:style:src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.scss
var roles_permissions_component_default2;
var init_roles_permissions_component2 = __esm({
  "angular:jit:style:src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.scss"() {
    roles_permissions_component_default2 = "/* src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.scss */\n/*# sourceMappingURL=roles-permissions.component.css.map */\n";
  }
});

// src/app/modules/manage-users/application/use-cases/create-role.use-case.token.ts
var CREATE_ROLE_USE_CASE;
var init_create_role_use_case_token = __esm({
  "src/app/modules/manage-users/application/use-cases/create-role.use-case.token.ts"() {
    "use strict";
    init_core();
    CREATE_ROLE_USE_CASE = new InjectionToken("CreateRoleUseCase");
  }
});

// src/app/modules/manage-users/application/use-cases/get-roles.use-case.token.ts
var GET_ROLES_USE_CASE;
var init_get_roles_use_case_token = __esm({
  "src/app/modules/manage-users/application/use-cases/get-roles.use-case.token.ts"() {
    "use strict";
    init_core();
    GET_ROLES_USE_CASE = new InjectionToken("GetRolesUseCase");
  }
});

// src/app/modules/manage-users/application/use-cases/copy-role.use-case.token.ts
var COPY_ROLE_USE_CASE;
var init_copy_role_use_case_token = __esm({
  "src/app/modules/manage-users/application/use-cases/copy-role.use-case.token.ts"() {
    "use strict";
    init_core();
    COPY_ROLE_USE_CASE = new InjectionToken("COPY_ROLE_USE_CASE");
  }
});

// src/app/modules/manage-users/domain/repositories/role.repository.token.ts
var ROLE_REPOSITORY;
var init_role_repository_token = __esm({
  "src/app/modules/manage-users/domain/repositories/role.repository.token.ts"() {
    "use strict";
    init_core();
    ROLE_REPOSITORY = new InjectionToken("RoleRepository");
  }
});

// src/app/modules/manage-users/application/use-cases/create-role.use-case.ts
var CreateRoleUseCaseImpl;
var init_create_role_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/create-role.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_role_repository_token();
    CreateRoleUseCaseImpl = class CreateRoleUseCaseImpl2 {
      roleRepository = inject(ROLE_REPOSITORY);
      execute(role) {
        this.validateRole(role);
        return this.roleRepository.create(role);
      }
      /**
       * Valide les données du rôle
       */
      validateRole(role) {
        if (!role.roleCode || role.roleCode.trim().length === 0) {
          throw new Error("Le code du r\xF4le est obligatoire");
        }
        if (!role.roleNom || role.roleNom.trim().length === 0) {
          throw new Error("Le nom du r\xF4le est obligatoire");
        }
        if (role.roleNiveau === void 0 || role.roleNiveau === null) {
          throw new Error("Le niveau du r\xF4le est obligatoire");
        }
        if (role.societeId === void 0 || role.societeId === null) {
          throw new Error("L'ID de la soci\xE9t\xE9 est obligatoire");
        }
      }
    };
    CreateRoleUseCaseImpl = __decorate([
      Injectable()
    ], CreateRoleUseCaseImpl);
  }
});

// src/app/modules/manage-users/application/use-cases/get-roles.use-case.ts
var GetRolesUseCaseImpl;
var init_get_roles_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/get-roles.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_role_repository_token();
    GetRolesUseCaseImpl = class GetRolesUseCaseImpl2 {
      roleRepository = inject(ROLE_REPOSITORY);
      execute(societeId) {
        if (societeId === void 0 || societeId === null) {
          throw new Error("L'ID de la soci\xE9t\xE9 est obligatoire");
        }
        return this.roleRepository.findAllBySociete(societeId);
      }
    };
    GetRolesUseCaseImpl = __decorate([
      Injectable()
    ], GetRolesUseCaseImpl);
  }
});

// src/app/modules/manage-users/application/use-cases/copy-role.use-case.ts
var CopyRoleUseCaseImpl;
var init_copy_role_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/copy-role.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_role_repository_token();
    CopyRoleUseCaseImpl = class CopyRoleUseCaseImpl2 {
      roleRepository = inject(ROLE_REPOSITORY);
      execute(id, copyData) {
        this.validateCopyData(copyData);
        return this.roleRepository.copy(id, copyData);
      }
      /**
       * Valide les données de copie
       */
      validateCopyData(copyData) {
        if (!copyData.newRoleCode || copyData.newRoleCode.trim().length === 0) {
          throw new Error("Le code du nouveau r\xF4le est obligatoire");
        }
        if (!copyData.newRoleNom || copyData.newRoleNom.trim().length === 0) {
          throw new Error("Le nom du nouveau r\xF4le est obligatoire");
        }
      }
    };
    CopyRoleUseCaseImpl = __decorate([
      Injectable()
    ], CopyRoleUseCaseImpl);
  }
});

// src/app/modules/manage-users/infrastructure/repositories/http-role.repository.ts
var HttpRoleRepository;
var init_http_role_repository = __esm({
  "src/app/modules/manage-users/infrastructure/repositories/http-role.repository.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_environment();
    HttpRoleRepository = class HttpRoleRepository2 {
      http = inject(HttpClient);
      baseUrl = `${environment.api}security/roles`;
      create(role) {
        return this.http.post(this.baseUrl, role);
      }
      findAllBySociete(societeId) {
        return this.http.get(`${this.baseUrl}/societe/${societeId}`);
      }
      findById(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
      }
      update(id, role) {
        return this.http.put(`${this.baseUrl}/${id}`, role);
      }
      delete(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
      }
      copy(id, copyData) {
        return this.http.post(`${this.baseUrl}/${id}/copy`, copyData);
      }
    };
    HttpRoleRepository = __decorate([
      Injectable()
    ], HttpRoleRepository);
  }
});

// src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.ts
var RolesPermissionsComponent;
var init_roles_permissions_component3 = __esm({
  "src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_roles_permissions_component();
    init_roles_permissions_component2();
    init_core();
    init_router();
    init_common();
    init_forms();
    init_translate_pipe();
    init_create_role_use_case_token();
    init_get_roles_use_case_token();
    init_copy_role_use_case_token();
    init_role_repository_token();
    init_create_role_use_case();
    init_get_roles_use_case();
    init_copy_role_use_case();
    init_http_role_repository();
    init_core_index();
    RolesPermissionsComponent = class RolesPermissionsComponent2 {
      fb = inject(FormBuilder);
      createRoleUseCase = inject(CREATE_ROLE_USE_CASE);
      getRolesUseCase = inject(GET_ROLES_USE_CASE);
      copyRoleUseCase = inject(COPY_ROLE_USE_CASE);
      authService = inject(AuthService);
      roleForm;
      editForm;
      copyForm;
      roles = [];
      loading = false;
      error = null;
      success = false;
      editSuccess = false;
      editError = null;
      copySuccess = false;
      copyError = null;
      selectedRole = null;
      routes = {
        permission: (roleId) => `/app/manage-users/permission/${roleId}`
      };
      ngOnInit() {
        this.initForm();
        this.initEditForm();
        this.initCopyForm();
        this.loadRoles();
      }
      /**
       * Initialise le formulaire de création de rôle
       */
      initForm() {
        this.roleForm = this.fb.group({
          roleCode: ["", [Validators.required, Validators.minLength(3)]],
          roleNom: ["", [Validators.required, Validators.minLength(3)]],
          roleDescription: [""],
          roleNiveau: [1, [Validators.required, Validators.min(1)]],
          roleActif: [true]
        });
      }
      /**
       * Initialise le formulaire d'édition de rôle
       */
      initEditForm() {
        this.editForm = this.fb.group({
          roleNom: ["", [Validators.required, Validators.minLength(3)]],
          roleDescription: [""],
          roleNiveau: [1, [Validators.required, Validators.min(1)]],
          roleActif: [true]
        });
      }
      /**
       * Charge la liste des rôles
       */
      loadRoles() {
        this.loading = true;
        this.error = null;
        const societeId = this.authService.user.societeId;
        this.getRolesUseCase.execute(societeId).subscribe({
          next: (roles) => {
            this.roles = roles;
            this.loading = false;
          },
          error: (error) => {
            console.error("Erreur lors du chargement des r\xF4les:", error);
            this.error = "Erreur lors du chargement des r\xF4les";
            this.loading = false;
          }
        });
      }
      /**
       * Soumet le formulaire de création de rôle
       */
      onSubmit() {
        if (this.roleForm.invalid) {
          this.markFormGroupTouched(this.roleForm);
          return;
        }
        this.loading = true;
        this.error = null;
        this.success = false;
        const roleData = __spreadProps(__spreadValues({}, this.roleForm.value), {
          societeId: 1
          // Pour l'instant, on utilise l'ID de société 1
        });
        this.createRoleUseCase.execute(roleData).subscribe({
          next: (role) => {
            this.success = true;
            this.roles.push(role);
            this.roleForm.reset({
              roleNiveau: 1,
              roleActif: true
            });
            this.loading = false;
          },
          error: (error) => {
            console.error("Erreur lors de la cr\xE9ation du r\xF4le:", error);
            this.error = error.message || "Erreur lors de la cr\xE9ation du r\xF4le";
            this.loading = false;
          }
        });
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
        const field = this.roleForm.get(fieldName);
        return field ? field.invalid && (field.dirty || field.touched) : false;
      }
      /**
       * Récupère le message d'erreur pour un champ
       */
      getFieldError(fieldName) {
        const field = this.roleForm.get(fieldName);
        if (!field || !field.errors) {
          return "";
        }
        if (field.errors["required"]) {
          return "Ce champ est obligatoire";
        }
        if (field.errors["minlength"]) {
          return `Minimum ${field.errors["minlength"].requiredLength} caract\xE8res`;
        }
        if (field.errors["min"]) {
          return `La valeur minimale est ${field.errors["min"].min}`;
        }
        return "Valeur invalide";
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
       * Retourne le statut du rôle sous forme de texte
       */
      getRoleStatus(role) {
        return role.roleActif ? "Actif" : "Inactif";
      }
      /**
       * Retourne la classe CSS pour le statut du rôle
       */
      getRoleStatusClass(role) {
        return role.roleActif ? "badge bg-success" : "badge bg-danger";
      }
      /**
       * Initialise le formulaire de copie de rôle
       */
      initCopyForm() {
        this.copyForm = this.fb.group({
          newRoleCode: ["", [Validators.required, Validators.minLength(3)]],
          newRoleNom: ["", [Validators.required, Validators.minLength(3)]]
        });
      }
      /**
       * Ouvre la modal d'édition pour un rôle
       */
      openEditModal(role) {
        this.selectedRole = role;
        this.editForm.patchValue({
          roleNom: role.roleNom,
          roleDescription: role.roleDescription || "",
          roleNiveau: role.roleNiveau,
          roleActif: role.roleActif
        });
        this.editError = null;
        this.editSuccess = false;
      }
      /**
       * Ferme la modal d'édition
       */
      closeEditModal() {
        this.selectedRole = null;
        this.editForm.reset({
          roleNiveau: 1,
          roleActif: true
        });
        this.editError = null;
        this.editSuccess = false;
      }
      /**
       * Soumet le formulaire d'édition de rôle
       */
      onEditSubmit() {
        if (this.editForm.invalid || !this.selectedRole) {
          this.markFormGroupTouched(this.editForm);
          return;
        }
        this.loading = true;
        this.editError = null;
        this.editSuccess = false;
        const updateData = __spreadProps(__spreadValues({}, this.editForm.value), {
          id: this.selectedRole.id,
          societeId: 1
          // Pour l'instant, on utilise l'ID de société 1
        });
        setTimeout(() => {
          const index = this.roles.findIndex((r) => r.id === this.selectedRole.id);
          if (index !== -1) {
            this.roles[index] = __spreadValues(__spreadValues({}, this.roles[index]), updateData);
          }
          this.editSuccess = true;
          this.loading = false;
          setTimeout(() => {
            this.closeEditModal();
          }, 2e3);
        }, 1e3);
      }
      /**
       * Vérifie si un champ du formulaire d'édition est invalide
       */
      isEditFieldInvalid(fieldName) {
        const field = this.editForm.get(fieldName);
        return field ? field.invalid && (field.dirty || field.touched) : false;
      }
      /**
       * Récupère le message d'erreur pour un champ du formulaire d'édition
       */
      getEditFieldError(fieldName) {
        const field = this.editForm.get(fieldName);
        if (!field || !field.errors) {
          return "";
        }
        if (field.errors["required"]) {
          return "Ce champ est obligatoire";
        }
        if (field.errors["minlength"]) {
          return `Minimum ${field.errors["minlength"].requiredLength} caract\xE8res`;
        }
        if (field.errors["min"]) {
          return `La valeur minimale est ${field.errors["min"].min}`;
        }
        return "Valeur invalide";
      }
      /**
       * Ouvre la modal de copie pour un rôle
       */
      openCopyModal(role) {
        this.selectedRole = role;
        this.copyForm.reset({
          newRoleCode: `${role.roleCode}_COPY`,
          newRoleNom: `${role.roleNom} (Copie)`
        });
        this.copyError = null;
        this.copySuccess = false;
      }
      /**
       * Ferme la modal de copie
       */
      closeCopyModal() {
        this.selectedRole = null;
        this.copyForm.reset();
        this.copyError = null;
        this.copySuccess = false;
      }
      /**
       * Soumet le formulaire de copie de rôle
       */
      onCopySubmit() {
        if (this.copyForm.invalid || !this.selectedRole) {
          this.markFormGroupTouched(this.copyForm);
          return;
        }
        this.loading = true;
        this.copyError = null;
        this.copySuccess = false;
        const copyData = this.copyForm.value;
        this.copyRoleUseCase.execute(this.selectedRole.id, copyData).subscribe({
          next: (role) => {
            this.copySuccess = true;
            this.roles.push(role);
            this.loading = false;
            setTimeout(() => {
              this.closeCopyModal();
            }, 2e3);
          },
          error: (error) => {
            console.error("Erreur lors de la copie du r\xF4le:", error);
            this.copyError = error.message || "Erreur lors de la copie du r\xF4le";
            this.loading = false;
          }
        });
      }
      /**
       * Vérifie si un champ du formulaire de copie est invalide
       */
      isCopyFieldInvalid(fieldName) {
        const field = this.copyForm.get(fieldName);
        return field ? field.invalid && (field.dirty || field.touched) : false;
      }
      /**
       * Récupère le message d'erreur pour un champ du formulaire de copie
       */
      getCopyFieldError(fieldName) {
        const field = this.copyForm.get(fieldName);
        if (!field || !field.errors) {
          return "";
        }
        if (field.errors["required"]) {
          return "Ce champ est obligatoire";
        }
        if (field.errors["minlength"]) {
          return `Minimum ${field.errors["minlength"].requiredLength} caract\xE8res`;
        }
        return "Valeur invalide";
      }
      /**
       * Tronque la description à 50 caractères et ajoute "..." si nécessaire
       */
      truncateDescription(description) {
        if (!description)
          return "-";
        const maxLength = 50;
        if (description.length <= maxLength) {
          return description;
        }
        return description.substring(0, maxLength) + "...";
      }
    };
    RolesPermissionsComponent = __decorate([
      Component({
        selector: "app-roles-permissions",
        imports: [CommonModule, RouterLink, ReactiveFormsModule, TranslatePipe],
        template: roles_permissions_component_default,
        providers: [
          {
            provide: ROLE_REPOSITORY,
            useClass: HttpRoleRepository
          },
          {
            provide: CREATE_ROLE_USE_CASE,
            useClass: CreateRoleUseCaseImpl
          },
          {
            provide: GET_ROLES_USE_CASE,
            useClass: GetRolesUseCaseImpl
          },
          {
            provide: COPY_ROLE_USE_CASE,
            useClass: CopyRoleUseCaseImpl
          }
        ],
        styles: [roles_permissions_component_default2]
      })
    ], RolesPermissionsComponent);
  }
});

// src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.spec.ts
var require_roles_permissions_component_spec = __commonJS({
  "src/app/modules/manage-users/presentation/pages/roles-permissions/roles-permissions.component.spec.ts"(exports) {
    init_testing();
    init_roles_permissions_component3();
    describe("RolesPermissionsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [RolesPermissionsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(RolesPermissionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_roles_permissions_component_spec();
//# sourceMappingURL=spec-app-modules-manage-users-presentation-pages-roles-permissions-roles-permissions.component.spec.js.map
