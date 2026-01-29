import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-CPWNUJAP.js";
import {
  DEACTIVATE_USER_USE_CASE,
  DeactivateUserUseCaseImpl,
  init_deactivate_user_use_case
} from "./chunk-ZQAKKL5M.js";
import {
  DELETE_USER_USE_CASE,
  DeleteUserUseCaseImpl,
  init_delete_user_use_case
} from "./chunk-LM2IENTT.js";
import {
  SiteService,
  init_site_service
} from "./chunk-X76KMRRK.js";
import {
  ACTIVATE_USER_USE_CASE,
  ActivateUserUseCaseImpl,
  init_activate_user_use_case
} from "./chunk-CMEJMNVT.js";
import {
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  init_index_ZUoC96yG,
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
import {
  CREATE_USER_USE_CASE,
  CreateUserUseCaseImpl,
  GET_USERS_USE_CASE,
  GetUsersUseCaseImpl,
  HttpUserRepository,
  UserMapper,
  init_create_user_dto,
  init_create_user_use_case,
  init_create_user_use_case_token,
  init_get_users_use_case,
  init_get_users_use_case_token,
  init_http_user_repository
} from "./chunk-WFCRFQRJ.js";
import {
  USER_REPOSITORY,
  init_user_repository
} from "./chunk-KEZTFTN3.js";
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import {
  init_translation
} from "./chunk-O7BLCUFK.js";
import {
  TranslatePipe,
  init_translate_pipe
} from "./chunk-YTCUO5R2.js";
import {
  LocalStorageContextAdapter,
  init_shared
} from "./chunk-LUFAATTA.js";
import {
  APPLICATION_CONTEXT
} from "./chunk-MU4ENZR6.js";
import "./chunk-KZXJWDFC.js";
import "./chunk-DJVIHOKC.js";
import "./chunk-4XZF5GTU.js";
import "./chunk-PRPNIB7R.js";
import "./chunk-N3H5GIVS.js";
import "./chunk-THVLRUNZ.js";
import {
  environment,
  init_environment
} from "./chunk-Q2A5OOYR.js";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  AuthService,
  init_auth_service,
  init_core_index
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import {
  ToasterService
} from "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import {
  Router,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import {
  HttpClient,
  HttpClientModule,
  HttpParams,
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
  EventEmitter,
  FactoryTarget,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  LOCALE_ID,
  NgModule,
  Output,
  Subject,
  Version,
  ViewChild,
  __decorate,
  core_exports,
  init_core,
  init_esm,
  init_tslib_es6,
  inject,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/modules/manage-users/presentation/pages/users/users.component.html
var users_component_default;
var init_users_component = __esm({
  "angular:jit:template:src/app/modules/manage-users/presentation/pages/users/users.component.html"() {
    users_component_default = `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>{{ 'manageUsers.title' | translate }}</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown">
                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown">
                    <i class="isax isax-export-1 me-1"></i>{{ 'manageUsers.export' | translate }}
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);" (click)="exportUsers()">{{
                            'manageUsers.exportPdf' | translate }}</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);" (click)="exportUsers()">{{
                            'manageUsers.exportExcel' | translate }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center"
                    (click)="openCreateUserModal()">
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
                        <a href="javascript:void(0);" class="btn-searchset"><i
                                class="isax isax-search-normal fs-12"></i></a>
                        <div id="DataTables_Table_0_filter" class="dataTables_filter">
                            <label>
                                <input type="search" [(ngModel)]="searchQuery" [ngModelOptions]="{ standalone: true }"
                                    (ngModelChange)="onSearch()" class="form-control form-control-sm"
                                    placeholder="{{ 'manageUsers.search' | translate }}"
                                    aria-controls="DataTables_Table_0">
                            </label>
                        </div>
                    </div>
                </div>
                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);"
                    (click)="resetFilters()">
                    <i class="isax isax-refresh me-1"></i>{{ 'manageUsers.reset' | translate }}
                </a>
            </div>
            <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="dropdown">
                    <a href="javascript:void(0);"
                        class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown">
                        <i class="isax isax-sort me-1"></i>{{ 'manageUsers.sortBy' | translate }} <span
                            class="fw-normal ms-1">Nom</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item"
                                (click)="changeSort('nomPrenom', 'asc')">{{ 'manageUsers.sortNameAsc' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item"
                                (click)="changeSort('nomPrenom', 'desc')">{{ 'manageUsers.sortNameDesc' | translate
                                }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item"
                                (click)="changeSort('dateCreation', 'desc')">{{ 'manageUsers.sortRecent' | translate
                                }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item"
                                (click)="changeSort('dateCreation', 'asc')">{{ 'manageUsers.sortOldest' | translate
                                }}</a>
                        </li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a href="javascript:void(0);"
                        class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown">
                        <i class="isax isax-filter me-1"></i>{{ 'manageUsers.filterStatus' | translate }}
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByStatus('')">{{
                                'manageUsers.filterAll' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByStatus('ACTIF')">{{
                                'manageUsers.filterActive' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item" (click)="filterByStatus('INACTIF')">{{
                                'manageUsers.filterInactive' | translate }}</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item"
                                (click)="filterByStatus('EN_ATTENTE')">{{ 'manageUsers.filterPending' | translate }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Filtre par site -->
                <div class="dropdown">
                    <a href="javascript:void(0);"
                        class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown">
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
                    <a href="javascript:void(0);"
                        class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown">
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
                                <img [src]="user.photo || 'assets/img/profiles/avatar-01.jpg'" class="rounded-circle"
                                    alt="Avatar">
                            </div>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0">{{ user.nomPrenom }}</h6>
                                <small class="text-muted">{{ user.userName }}</small>
                            </div>
                        </div>
                    </td>
                    <td>
                        <a href="mailto:{{ user.email }}" class="text-primary">{{ user.email }}</a>
                        <button class="btn btn-sm btn-link text-muted p-0 ms-1" (click)="copyEmail(user)"
                            title="Copier l'email">
                            <i class="fas fa-copy"></i>
                        </button>
                    </td>
                    <td>{{ user.telephone || ('manageUsers.notProvided' | translate) }}</td>
                    <td>{{ user.siteNom || 'Site ' + user.siteId }}</td>
                    <td>{{ user.departementNom || 'D\xE9partement ' + user.departementId }}</td>
                    <td>{{ user.derniereConnexion ? formatDate(user.derniereConnexion) : ('manageUsers.never' |
                        translate) }}</td>
                    <td>{{ formatDate(user.dateCreation) }}</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center" [ngClass]="getStatusClass(user.statut)">
                            {{ getStatusText(user.statut) }}
                        </span>
                    </td>


                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"
                                    (click)="viewUserDetails(user)">
                                    <i class="isax isax-eye me-2"></i>Voir d\xE9tails
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"
                                    (click)="openEditUserModal(user)">
                                    <i class="isax isax-edit me-2"></i>Modifier
                                </a>
                            </li>
                            <li *ngIf="user.statut === 'ACTIF'">
                                <a href="javascript:void(0);"
                                    class="dropdown-item d-flex align-items-center text-warning"
                                    (click)="deactivateUser(user)">
                                    <i class="isax isax-pause-circle me-2"></i>D\xE9sactiver
                                </a>
                            </li>
                            <li *ngIf="user.statut === 'INACTIF' || user.statut === 'EN_ATTENTE'">
                                <a href="javascript:void(0);"
                                    class="dropdown-item d-flex align-items-center text-success"
                                    (click)="activateUser(user)">
                                    <i class="isax isax-play-circle me-2"></i>Activer
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"
                                    class="dropdown-item d-flex align-items-center text-danger"
                                    (click)="deleteUser(user)">
                                    <i class="isax isax-trash me-2"></i>Supprimer
                                </a>
                            </li>
                        </ul>
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
                {{ 'manageUsers.showing' | translate }} {{ users.length }} {{ 'manageUsers.of' | translate }} {{
                totalElements }} {{ 'manageUsers.users' | translate }}
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
                <a href="javascript:void(0);" class="btn btn-outline-white btn-sm dropdown-toggle"
                    data-bs-toggle="dropdown">
                    {{ pageSize }} {{ 'manageUsers.perPage' | translate }}
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void(0);" (click)="changePageSize(5)">5 {{
                            'manageUsers.perPage' | translate }}</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);" (click)="changePageSize(10)">10 {{
                            'manageUsers.perPage' | translate }}</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);" (click)="changePageSize(25)">25 {{
                            'manageUsers.perPage' | translate }}</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);" (click)="changePageSize(50)">50 {{
                            'manageUsers.perPage' | translate }}</a></li>
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
                <app-user-form [user]="selectedUser || undefined" [isEditMode]="isEditMode"
                    (userSaved)="onUserSaved($event)" (cancelled)="onFormCancelled()">
                </app-user-form>
            </div>
        </div>
    </div>
</div>

<!-- Backdrop du modal -->
<div class="modal-backdrop fade" [class.show]="false" *ngIf="false"></div>`;
  }
});

// angular:jit:style:src/app/modules/manage-users/presentation/pages/users/users.component.scss
var users_component_default2;
var init_users_component2 = __esm({
  "angular:jit:style:src/app/modules/manage-users/presentation/pages/users/users.component.scss"() {
    users_component_default2 = "/* src/app/modules/manage-users/presentation/pages/users/users.component.scss */\n/*# sourceMappingURL=users.component.css.map */\n";
  }
});

// src/app/modules/manage-users/presentation/pages/users/users.view-model.ts
var UsersViewModel;
var init_users_view_model = __esm({
  "src/app/modules/manage-users/presentation/pages/users/users.view-model.ts"() {
    "use strict";
    UsersViewModel = class {
      /**
       * Format a date string for display
       */
      formatDate(dateString) {
        if (!dateString) {
          return "N/A";
        }
        try {
          const date = typeof dateString === "string" ? new Date(dateString) : dateString;
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
       * Get CSS class for user status badge
       */
      getStatusClass(status) {
        const statusMap = {
          "ACTIF": "badge bg-success",
          "INACTIF": "badge bg-danger",
          "SUSPENDU": "badge bg-warning",
          "BLOQUE": "badge bg-dark",
          "EN_ATTENTE": "badge bg-info"
        };
        return statusMap[status] || "badge bg-secondary";
      }
      /**
       * Get human-readable text for user status
       */
      getStatusText(status) {
        const textMap = {
          "ACTIF": "Actif",
          "INACTIF": "Inactif",
          "SUSPENDU": "Suspendu",
          "BLOQUE": "Bloqu\xE9",
          "EN_ATTENTE": "En attente"
        };
        return textMap[status] || status;
      }
      /**
       * Calculate page numbers for pagination
       */
      getPageNumbers(currentPage, totalPages, maxVisible = 5) {
        if (totalPages <= maxVisible) {
          return Array.from({ length: totalPages }, (_, i) => i);
        }
        const half = Math.floor(maxVisible / 2);
        let startPage = Math.max(0, currentPage - half);
        let endPage = Math.min(totalPages - 1, startPage + maxVisible - 1);
        if (endPage - startPage + 1 < maxVisible) {
          startPage = Math.max(0, endPage - maxVisible + 1);
        }
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
      }
      /**
       * Check if user can be activated
       */
      canActivate(status) {
        return status !== "ACTIF";
      }
      /**
       * Check if user can be deactivated
       */
      canDeactivate(status) {
        return status === "ACTIF";
      }
      /**
       * Get icon for user status
       */
      getStatusIcon(status) {
        const iconMap = {
          "ACTIF": "check-circle",
          "INACTIF": "x-circle",
          "SUSPENDU": "pause-circle",
          "BLOQUE": "lock",
          "EN_ATTENTE": "clock"
        };
        return iconMap[status] || "help-circle";
      }
      /**
       * Format phone number for display
       */
      formatPhoneNumber(phone) {
        if (!phone) {
          return "N/A";
        }
        const cleaned = phone.replace(/[^\d+]/g, "");
        if (cleaned.startsWith("+")) {
          const countryCode = cleaned.substring(0, 4);
          const rest = cleaned.substring(4);
          return `${countryCode} ${rest.match(/.{1,3}/g)?.join(" ") || rest}`;
        }
        return cleaned.match(/.{1,3}/g)?.join(" ") || cleaned;
      }
      /**
       * Get initials from name for avatar
       */
      getInitials(name) {
        if (!name) {
          return "?";
        }
        const parts = name.trim().split(" ");
        if (parts.length >= 2) {
          return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
      }
      /**
       * Get color for avatar based on name
       */
      getAvatarColor(name) {
        const colors = [
          "#1abc9c",
          "#2ecc71",
          "#3498db",
          "#9b59b6",
          "#34495e",
          "#16a085",
          "#27ae60",
          "#2980b9",
          "#8e44ad",
          "#2c3e50",
          "#f39c12",
          "#e67e22",
          "#e74c3c",
          "#95a5a6",
          "#d35400"
        ];
        const hash = name.split("").reduce((acc, char) => {
          return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);
        return colors[Math.abs(hash) % colors.length];
      }
      /**
       * Truncate text with ellipsis
       */
      truncate(text, maxLength = 50) {
        if (!text || text.length <= maxLength) {
          return text;
        }
        return text.substring(0, maxLength) + "...";
      }
      /**
       * Get pagination info text
       */
      getPaginationInfo(currentPage, pageSize, totalElements) {
        const start = currentPage * pageSize + 1;
        const end = Math.min((currentPage + 1) * pageSize, totalElements);
        return `Affichage de ${start} \xE0 ${end} sur ${totalElements} utilisateurs`;
      }
    };
  }
});

// angular:jit:template:src/app/modules/manage-users/presentation/components/user-form/user-form.component.html
var user_form_component_default;
var init_user_form_component = __esm({
  "angular:jit:template:src/app/modules/manage-users/presentation/components/user-form/user-form.component.html"() {
    user_form_component_default = `<div class="user-form">
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
`;
  }
});

// angular:jit:style:src/app/modules/manage-users/presentation/components/user-form/user-form.component.scss
var user_form_component_default2;
var init_user_form_component2 = __esm({
  "angular:jit:style:src/app/modules/manage-users/presentation/components/user-form/user-form.component.scss"() {
    user_form_component_default2 = "/* src/app/modules/manage-users/presentation/components/user-form/user-form.component.scss */\n.user-form {\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.form-header {\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #eaeaea;\n}\n.form-title {\n  color: #333;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.form-description {\n  color: #666;\n  font-size: 0.95rem;\n  margin-bottom: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n.form-column {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-label {\n  font-weight: 500;\n  color: #555;\n  margin-bottom: 6px;\n  font-size: 0.9rem;\n}\n.form-label .required {\n  color: #dc3545;\n  margin-left: 2px;\n}\n.form-control {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 10px 12px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n  background-color: #fff;\n  width: 100%;\n}\n.form-control:focus {\n  border-color: #4a90e2;\n  box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);\n  outline: none;\n}\n.form-control.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\ntextarea.form-control {\n  min-height: 80px;\n  resize: vertical;\n}\n.invalid-feedback {\n  font-size: 0.85rem;\n  margin-top: 4px;\n  color: #dc3545;\n}\nmat-form-field {\n  width: 100%;\n}\nmat-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\nmat-form-field .mat-mdc-form-field-infix {\n  min-height: 48px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nmat-form-field .mat-mdc-text-field-wrapper {\n  border-radius: 6px;\n  background-color: #fff;\n}\nmat-form-field .mat-mdc-form-field-flex {\n  align-items: center;\n}\nmat-form-field .mat-mdc-select-value {\n  font-size: 0.95rem;\n}\n.mat-mdc-form-field.mat-form-field-invalid .mat-mdc-text-field-wrapper {\n  border-color: #dc3545;\n}\n.mat-mdc-form-field-error {\n  font-size: 0.85rem;\n  color: #dc3545;\n  margin-top: 4px;\n}\n.mat-mdc-option {\n  font-size: 0.95rem;\n}\n.mat-mdc-option:hover {\n  background-color: rgba(74, 144, 226, 0.1);\n}\n.mat-mdc-select-panel {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.alert {\n  border-radius: 6px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  border: none;\n}\n.alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n}\n.alert.alert-danger {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.btn-close {\n  opacity: 0.7;\n}\n.btn-close:hover {\n  opacity: 1;\n}\n.form-actions {\n  padding-top: 20px;\n  border-top: 1px solid #eaeaea;\n  margin-top: 24px;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n.form-help {\n  margin-top: 16px;\n  text-align: center;\n}\n.help-text {\n  color: #6c757d;\n  font-size: 0.85rem;\n  margin-bottom: 0;\n}\n.help-text .required {\n  color: #dc3545;\n}\n@media (max-width: 768px) {\n  .user-form {\n    padding: 16px;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .form-title {\n    font-size: 1.3rem;\n  }\n  .btn {\n    padding: 8px 16px;\n    font-size: 0.9rem;\n  }\n  .action-buttons {\n    flex-direction: column;\n  }\n  .action-buttons .btn {\n    width: 100%;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-control,\nmat-form-field,\n.alert {\n  animation: fadeIn 0.3s ease-out;\n}\n/*# sourceMappingURL=user-form.component.css.map */\n";
  }
});

// node_modules/@angular/material/fesm2022/date-formats-K6TQue-Y.mjs
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var MAT_DATE_LOCALE, NOT_IMPLEMENTED, DateAdapter, MAT_DATE_FORMATS;
var init_date_formats_K6TQue_Y = __esm({
  "node_modules/@angular/material/fesm2022/date-formats-K6TQue-Y.mjs"() {
    "use strict";
    init_core();
    init_esm();
    MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
      providedIn: "root",
      factory: MAT_DATE_LOCALE_FACTORY
    });
    NOT_IMPLEMENTED = "Method not implemented";
    DateAdapter = class {
      /** The locale to use for all dates. */
      locale;
      _localeChanges = new Subject();
      /** A stream that emits when the locale changes. */
      localeChanges = this._localeChanges;
      /**
       * Sets the time of one date to the time of another.
       * @param target Date whose time will be set.
       * @param hours New hours to set on the date object.
       * @param minutes New minutes to set on the date object.
       * @param seconds New seconds to set on the date object.
       */
      setTime(target, hours, minutes, seconds) {
        throw new Error(NOT_IMPLEMENTED);
      }
      /**
       * Gets the hours component of the given date.
       * @param date The date to extract the hours from.
       */
      getHours(date) {
        throw new Error(NOT_IMPLEMENTED);
      }
      /**
       * Gets the minutes component of the given date.
       * @param date The date to extract the minutes from.
       */
      getMinutes(date) {
        throw new Error(NOT_IMPLEMENTED);
      }
      /**
       * Gets the seconds component of the given date.
       * @param date The date to extract the seconds from.
       */
      getSeconds(date) {
        throw new Error(NOT_IMPLEMENTED);
      }
      /**
       * Parses a date with a specific time from a user-provided value.
       * @param value The value to parse.
       * @param parseFormat The expected format of the value being parsed
       *     (type is implementation-dependent).
       */
      parseTime(value, parseFormat) {
        throw new Error(NOT_IMPLEMENTED);
      }
      /**
       * Adds an amount of seconds to the specified date.
       * @param date Date to which to add the seconds.
       * @param amount Amount of seconds to add to the date.
       */
      addSeconds(date, amount) {
        throw new Error(NOT_IMPLEMENTED);
      }
      /**
       * Given a potential date object, returns that same date object if it is
       * a valid date, or `null` if it's not a valid date.
       * @param obj The object to check.
       * @returns A date or `null`.
       */
      getValidDateOrNull(obj) {
        return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
      }
      /**
       * Attempts to deserialize a value to a valid date object. This is different from parsing in that
       * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
       * string). The default implementation does not allow any deserialization, it simply checks that
       * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
       * method on all of its `@Input()` properties that accept dates. It is therefore possible to
       * support passing values from your backend directly to these properties by overriding this method
       * to also deserialize the format used by your backend.
       * @param value The value to be deserialized into a date object.
       * @returns The deserialized date object, either a valid date, null if the value can be
       *     deserialized into a null date (e.g. the empty string), or an invalid date.
       */
      deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
          return value;
        }
        return this.invalid();
      }
      /**
       * Sets the locale used for all dates.
       * @param locale The new locale.
       */
      setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
      }
      /**
       * Compares two dates.
       * @param first The first date to compare.
       * @param second The second date to compare.
       * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
       *     a number greater than 0 if the first date is later.
       */
      compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
      }
      /**
       * Compares the time values of two dates.
       * @param first First date to compare.
       * @param second Second date to compare.
       * @returns 0 if the times are equal, a number less than 0 if the first time is earlier,
       *     a number greater than 0 if the first time is later.
       */
      compareTime(first, second) {
        return this.getHours(first) - this.getHours(second) || this.getMinutes(first) - this.getMinutes(second) || this.getSeconds(first) - this.getSeconds(second);
      }
      /**
       * Checks if two dates are equal.
       * @param first The first date to check.
       * @param second The second date to check.
       * @returns Whether the two dates are equal.
       *     Null dates are considered equal to other null dates.
       */
      sameDate(first, second) {
        if (first && second) {
          let firstValid = this.isValid(first);
          let secondValid = this.isValid(second);
          if (firstValid && secondValid) {
            return !this.compareDate(first, second);
          }
          return firstValid == secondValid;
        }
        return first == second;
      }
      /**
       * Checks if the times of two dates are equal.
       * @param first The first date to check.
       * @param second The second date to check.
       * @returns Whether the times of the two dates are equal.
       *     Null dates are considered equal to other null dates.
       */
      sameTime(first, second) {
        if (first && second) {
          const firstValid = this.isValid(first);
          const secondValid = this.isValid(second);
          if (firstValid && secondValid) {
            return !this.compareTime(first, second);
          }
          return firstValid == secondValid;
        }
        return first == second;
      }
      /**
       * Clamp the given date between min and max dates.
       * @param date The date to clamp.
       * @param min The minimum value to allow. If null or omitted no min is enforced.
       * @param max The maximum value to allow. If null or omitted no max is enforced.
       * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
       *     otherwise `date`.
       */
      clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
          return min;
        }
        if (max && this.compareDate(date, max) > 0) {
          return max;
        }
        return date;
      }
    };
    MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");
  }
});

// node_modules/@angular/material/fesm2022/core.mjs
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: formats }
  ];
}
var VERSION, ISO_8601_REGEX, TIME_REGEX, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, NativeDateModule, MatNativeDateModule;
var init_core2 = __esm({
  "node_modules/@angular/material/fesm2022/core.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_date_formats_K6TQue_Y();
    init_index_ZUoC96yG();
    VERSION = new Version("20.1.4");
    ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
    TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
    NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
      /**
       * @deprecated No longer being used. To be removed.
       * @breaking-change 14.0.0
       */
      useUtcForDisplay = false;
      /** The injected locale. */
      _matDateLocale = inject(MAT_DATE_LOCALE, { optional: true });
      constructor() {
        super();
        const matDateLocale = inject(MAT_DATE_LOCALE, { optional: true });
        if (matDateLocale !== void 0) {
          this._matDateLocale = matDateLocale;
        }
        super.setLocale(this._matDateLocale);
      }
      getYear(date) {
        return date.getFullYear();
      }
      getMonth(date) {
        return date.getMonth();
      }
      getDate(date) {
        return date.getDate();
      }
      getDayOfWeek(date) {
        return date.getDay();
      }
      getMonthNames(style) {
        const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: "utc" });
        return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
      }
      getDateNames() {
        const dtf = new Intl.DateTimeFormat(this.locale, { day: "numeric", timeZone: "utc" });
        return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
      }
      getDayOfWeekNames(style) {
        const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: "utc" });
        return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
      }
      getYearName(date) {
        const dtf = new Intl.DateTimeFormat(this.locale, { year: "numeric", timeZone: "utc" });
        return this._format(dtf, date);
      }
      getFirstDayOfWeek() {
        if (typeof Intl !== "undefined" && Intl.Locale) {
          const locale = new Intl.Locale(this.locale);
          const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
          return firstDay === 7 ? 0 : firstDay;
        }
        return 0;
      }
      getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
      }
      clone(date) {
        return new Date(date.getTime());
      }
      createDate(year, month, date) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
          }
          if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
          }
        }
        let result = this._createDateWithOverflow(year, month, date);
        if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
      }
      today() {
        return /* @__PURE__ */ new Date();
      }
      parse(value, parseFormat) {
        if (typeof value == "number") {
          return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
      }
      format(date, displayFormat) {
        if (!this.isValid(date)) {
          throw Error("NativeDateAdapter: Cannot format invalid date.");
        }
        const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), { timeZone: "utc" }));
        return this._format(dtf, date);
      }
      addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
      }
      addCalendarMonths(date, months) {
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
          newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
      }
      addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
      }
      toIso8601(date) {
        return [
          date.getUTCFullYear(),
          this._2digit(date.getUTCMonth() + 1),
          this._2digit(date.getUTCDate())
        ].join("-");
      }
      /**
       * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
       * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
       * invalid date for all other values.
       */
      deserialize(value) {
        if (typeof value === "string") {
          if (!value) {
            return null;
          }
          if (ISO_8601_REGEX.test(value)) {
            let date = new Date(value);
            if (this.isValid(date)) {
              return date;
            }
          }
        }
        return super.deserialize(value);
      }
      isDateInstance(obj) {
        return obj instanceof Date;
      }
      isValid(date) {
        return !isNaN(date.getTime());
      }
      invalid() {
        return /* @__PURE__ */ new Date(NaN);
      }
      setTime(target, hours, minutes, seconds) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!inRange(hours, 0, 23)) {
            throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
          }
          if (!inRange(minutes, 0, 59)) {
            throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
          }
          if (!inRange(seconds, 0, 59)) {
            throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
          }
        }
        const clone = this.clone(target);
        clone.setHours(hours, minutes, seconds, 0);
        return clone;
      }
      getHours(date) {
        return date.getHours();
      }
      getMinutes(date) {
        return date.getMinutes();
      }
      getSeconds(date) {
        return date.getSeconds();
      }
      parseTime(userValue, parseFormat) {
        if (typeof userValue !== "string") {
          return userValue instanceof Date ? new Date(userValue.getTime()) : null;
        }
        const value = userValue.trim();
        if (value.length === 0) {
          return null;
        }
        let result = this._parseTimeString(value);
        if (result === null) {
          const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
          if (withoutExtras.length > 0) {
            result = this._parseTimeString(withoutExtras);
          }
        }
        return result || this.invalid();
      }
      addSeconds(date, amount) {
        return new Date(date.getTime() + amount * 1e3);
      }
      /** Creates a date but allows the month and date to overflow. */
      _createDateWithOverflow(year, month, date) {
        const d = /* @__PURE__ */ new Date();
        d.setFullYear(year, month, date);
        d.setHours(0, 0, 0, 0);
        return d;
      }
      /**
       * Pads a number to make it two digits.
       * @param n The number to pad.
       * @returns The padded number.
       */
      _2digit(n) {
        return ("00" + n).slice(-2);
      }
      /**
       * When converting Date object to string, javascript built-in functions may return wrong
       * results because it applies its internal DST rules. The DST rules around the world change
       * very frequently, and the current valid rule is not always valid in previous years though.
       * We work around this problem building a new Date object which has its internal UTC
       * representation with the local date and time.
       * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
       *    timeZone set to 'utc' to work fine.
       * @param date Date from which we want to get the string representation according to dtf
       * @returns A Date object with its UTC representation based on the passed in date info
       */
      _format(dtf, date) {
        const d = /* @__PURE__ */ new Date();
        d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
        return dtf.format(d);
      }
      /**
       * Attempts to parse a time string into a date object. Returns null if it cannot be parsed.
       * @param value Time string to parse.
       */
      _parseTimeString(value) {
        const parsed = value.toUpperCase().match(TIME_REGEX);
        if (parsed) {
          let hours = parseInt(parsed[1]);
          const minutes = parseInt(parsed[2]);
          let seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
          const amPm = parsed[4];
          if (hours === 12) {
            hours = amPm === "AM" ? 0 : hours;
          } else if (amPm === "PM") {
            hours += 12;
          }
          if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
            return this.setTime(this.today(), hours, minutes, seconds || 0);
          }
        }
        return null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NativeDateAdapter, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NativeDateAdapter });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NativeDateAdapter, decorators: [{
      type: Injectable
    }], ctorParameters: () => [] });
    MAT_NATIVE_DATE_FORMATS = {
      parse: {
        dateInput: null,
        timeInput: null
      },
      display: {
        dateInput: { year: "numeric", month: "numeric", day: "numeric" },
        timeInput: { hour: "numeric", minute: "numeric" },
        monthYearLabel: { year: "numeric", month: "short" },
        dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
        monthYearA11yLabel: { year: "numeric", month: "long" },
        timeOptionLabel: { hour: "numeric", minute: "numeric" }
      }
    };
    NativeDateModule = class _NativeDateModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NativeDateModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _NativeDateModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _NativeDateModule, providers: [{ provide: DateAdapter, useClass: NativeDateAdapter }] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: NativeDateModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [{ provide: DateAdapter, useClass: NativeDateAdapter }]
      }]
    }] });
    MatNativeDateModule = class _MatNativeDateModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatNativeDateModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatNativeDateModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatNativeDateModule, providers: [provideNativeDateAdapter()] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatNativeDateModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [provideNativeDateAdapter()]
      }]
    }] });
  }
});

// src/app/modules/manage-users/application/use-cases/update-user.use-case.token.ts
var UPDATE_USER_USE_CASE;
var init_update_user_use_case_token = __esm({
  "src/app/modules/manage-users/application/use-cases/update-user.use-case.token.ts"() {
    "use strict";
    init_core();
    UPDATE_USER_USE_CASE = new InjectionToken("UpdateUserUseCase");
  }
});

// src/app/modules/manage-users/application/use-cases/update-user.use-case.ts
var UpdateUserUseCaseImpl;
var init_update_user_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/update-user.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_user_repository();
    init_create_user_dto();
    UpdateUserUseCaseImpl = class UpdateUserUseCaseImpl2 {
      userRepository;
      constructor(userRepository) {
        this.userRepository = userRepository;
      }
      execute(id, dto) {
        return __async(this, null, function* () {
          this.validateUpdateUserDto(dto);
          const userId = { value: id };
          const existingUser = yield this.userRepository.findById(userId);
          if (!existingUser) {
            throw new Error(`L'utilisateur avec l'ID ${id} n'existe pas`);
          }
          if (dto.email !== existingUser.email) {
            const existingByEmail = yield this.userRepository.findByEmail(dto.email);
            if (existingByEmail && existingByEmail.id !== id) {
              throw new Error(`Un autre utilisateur avec l'email ${dto.email} existe d\xE9j\xE0`);
            }
          }
          if (dto.userName !== existingUser.userName) {
            const existingByUsername = yield this.userRepository.findByUsername(dto.userName);
            if (existingByUsername && existingByUsername.id !== id) {
              throw new Error(`Un autre utilisateur avec le nom d'utilisateur ${dto.userName} existe d\xE9j\xE0`);
            }
          }
          const updateCommand = UserMapper.toUpdateCommand(dto);
          const updatedUser = __spreadProps(__spreadValues({}, existingUser), {
            societeId: updateCommand.societeId ?? existingUser.societeId,
            nomPrenom: updateCommand.nomPrenom ?? existingUser.nomPrenom,
            telephone: updateCommand.telephone ?? existingUser.telephone,
            adresse: updateCommand.adresse ?? existingUser.adresse,
            userName: updateCommand.userName ?? existingUser.userName,
            email: updateCommand.email ?? existingUser.email,
            statut: updateCommand.statut ?? existingUser.statut,
            siteId: updateCommand.siteId ?? existingUser.siteId,
            departementId: updateCommand.departementId ?? existingUser.departementId,
            photo: updateCommand.photo ?? existingUser.photo,
            signature: updateCommand.signature ?? existingUser.signature,
            langue: updateCommand.langue ?? existingUser.langue
            // Note: pwdText n'est pas mis à jour via updateCommand
            // Les autres champs restent inchangés
          });
          const savedUser = yield this.userRepository.update(updatedUser);
          return UserMapper.toResponseDto(savedUser);
        });
      }
      /**
       * Valide les données de modification d'utilisateur
       * Note: Le mot de passe n'est pas obligatoire en mode édition
       */
      validateUpdateUserDto(dto) {
        const errors = [];
        if (!dto.nomPrenom || dto.nomPrenom.trim().length === 0) {
          errors.push("Le nom et pr\xE9nom sont requis");
        }
        if (!dto.userName || dto.userName.trim().length === 0) {
          errors.push("Le nom d'utilisateur est requis");
        }
        if (!dto.email || !this.isValidEmail(dto.email)) {
          errors.push("Un email valide est requis");
        }
        if (dto.password && dto.password.trim().length > 0 && dto.password.trim().length < 6) {
          errors.push("Le mot de passe doit contenir au moins 6 caract\xE8res");
        }
        if (dto.pwdText && (!dto.pwdText || dto.pwdText.trim().length === 0)) {
          errors.push("Le texte du mot de passe est requis");
        }
        if (!dto.societeId || dto.societeId <= 0) {
          errors.push("Un identifiant de soci\xE9t\xE9 valide est requis");
        }
        if (!dto.siteId || dto.siteId <= 0) {
          errors.push("Un identifiant de site valide est requis");
        }
        if (!dto.departementId || dto.departementId <= 0) {
          errors.push("Un identifiant de d\xE9partement valide est requis");
        }
        if (!dto.statut) {
          errors.push("Le statut est requis");
        }
        if (errors.length > 0) {
          throw new Error(`Validation \xE9chou\xE9e: ${errors.join(", ")}`);
        }
      }
      /**
       * Valide le format d'email
       */
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
      /**
       * Valide le numéro de téléphone
       */
      isValidPhoneNumber(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]{8,20}$/;
        return phoneRegex.test(phone);
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [USER_REPOSITORY] }] }
      ];
    };
    UpdateUserUseCaseImpl = __decorate([
      Injectable()
    ], UpdateUserUseCaseImpl);
  }
});

// src/app/modules/setting/application/services/departement.service.ts
var DepartementService;
var init_departement_service = __esm({
  "src/app/modules/setting/application/services/departement.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_environment();
    init_auth_service();
    DepartementService = class DepartementService2 {
      http;
      authService;
      apiUrl = `${environment.api}hierarchie/departements`;
      constructor(http, authService) {
        this.http = http;
        this.authService = authService;
      }
      /**
       * Récupère la liste paginée des départements
       * @param societeId ID de la société (optionnel)
       * @param page Numéro de page (0-based)
       * @param size Taille de la page
       * @param search Terme de recherche
       * @param actif Filtre par statut
       */
      getDepartements(societeId, page = 0, size = 10, search, actif) {
        let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
        if (societeId) {
          params = params.set("societeId", societeId.toString());
        }
        if (search) {
          params = params.set("search", search);
        }
        if (actif !== void 0) {
          params = params.set("actif", actif.toString());
        }
        return this.http.get(this.apiUrl, { params });
      }
      /**
       * Récupère un département par son ID
       * @param id ID du département
       */
      getDepartement(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
      }
      /**
       * Crée un nouveau département
       * @param dto Données du département
       */
      createDepartement(dto) {
        return this.http.post(this.apiUrl, dto);
      }
      /**
       * Met à jour un département existant
       * @param id ID du département
       * @param dto Données mises à jour
       */
      updateDepartement(id, dto) {
        return this.http.put(`${this.apiUrl}/${id}`, dto);
      }
      /**
       * Supprime un département
       * @param id ID du département
       */
      deleteDepartement(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
      }
      /**
       * Active ou désactive un département
       * @param id ID du département
       * @param actif Nouveau statut
       */
      toggleDepartementStatus(id, actif) {
        return this.http.patch(`${this.apiUrl}/${id}/status`, { actif });
      }
      /**
       * Récupère les statistiques des départements
       * @param societeId ID de la société (optionnel)
       */
      getDepartementStatistics(societeId) {
        let params = new HttpParams();
        if (societeId) {
          params = params.set("societeId", societeId.toString());
        }
        return this.http.get(`${this.apiUrl}/statistics`, { params });
      }
      /**
       * Récupère la liste de toutes les sociétés (pour les dropdowns)
       * Note: Cette méthode dépend de l'API des sociétés
       */
      getSocietes() {
        return this.http.get(`${environment.api}societes`);
      }
      /**
      * Récupère la société de l'utilisateur connecté
      */
      getCurrentUserSocieteId() {
        const user = this.authService.user;
        return user?.societeId || null;
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: AuthService }
      ];
    };
    DepartementService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], DepartementService);
  }
});

// src/app/modules/manage-users/presentation/components/user-form/user-form.component.ts
var UserFormComponent;
var init_user_form_component3 = __esm({
  "src/app/modules/manage-users/presentation/components/user-form/user-form.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_form_component();
    init_user_form_component2();
    init_core();
    init_common();
    init_forms();
    init_select();
    init_form_field();
    init_core2();
    init_input();
    init_translate_pipe();
    init_create_user_use_case_token();
    init_update_user_use_case_token();
    init_create_user_use_case();
    init_update_user_use_case();
    init_site_service();
    init_departement_service();
    init_core_index();
    UserFormComponent = class UserFormComponent2 {
      fb = inject(FormBuilder);
      createUserUseCase = inject(CREATE_USER_USE_CASE);
      updateUserUseCase = inject(UPDATE_USER_USE_CASE);
      siteService = inject(SiteService);
      departementService = inject(DepartementService);
      authService = inject(AuthService);
      user;
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
      static propDecorators = {
        user: [{ type: Input }],
        isEditMode: [{ type: Input }],
        userSaved: [{ type: Output }],
        cancelled: [{ type: Output }]
      };
    };
    UserFormComponent = __decorate([
      Component({
        selector: "app-user-form",
        standalone: true,
        imports: [
          CommonModule,
          ReactiveFormsModule,
          // Angular Material modules
          MatSelectModule,
          MatFormFieldModule,
          MatOptionModule,
          MatInputModule,
          // Traduction
          TranslatePipe
        ],
        template: user_form_component_default,
        providers: [
          // Providers pour les use cases
          {
            provide: CREATE_USER_USE_CASE,
            useClass: CreateUserUseCaseImpl
          },
          {
            provide: UPDATE_USER_USE_CASE,
            useClass: UpdateUserUseCaseImpl
          }
        ],
        styles: [user_form_component_default2]
      })
    ], UserFormComponent);
  }
});

// angular:jit:template:src/app/modules/_shared/presentation/components/form-builder/form-builder.component.html
var form_builder_component_default;
var init_form_builder_component = __esm({
  "angular:jit:template:src/app/modules/_shared/presentation/components/form-builder/form-builder.component.html"() {
    form_builder_component_default = `<form [formGroup]="form" (ngSubmit)="onSubmit()" class="form-builder"
    [class.form-horizontal]="config.layout === 'horizontal'">
    <div class="row">
        <ng-container *ngFor="let field of config.fields">
            <!-- Field container -->
            <div *ngIf="isFieldVisible(field)" [ngClass]="getFieldWidthClass(field)" class="mb-3">

                <!-- Label -->
                <label *ngIf="config.showLabels !== false && field.type !== 'hidden'" [for]="field.name"
                    class="form-label" [class.required]="field.validation?.required">
                    {{ field.label | translate }}
                    <span *ngIf="field.validation?.required" class="text-danger">*</span>
                </label>

                <!-- Text Input -->
                <input
                    *ngIf="field.type === 'text' || field.type === 'email' || field.type === 'password' || field.type === 'tel' || field.type === 'url'"
                    [type]="field.type" [id]="field.name" [formControlName]="field.name"
                    [placeholder]="field.placeholder ? (field.placeholder | translate) : ''" [readonly]="field.readonly"
                    class="form-control" [class.is-invalid]="hasError(field.name)" />

                <!-- Number Input -->
                <input *ngIf="field.type === 'number'" type="number" [id]="field.name" [formControlName]="field.name"
                    [placeholder]="field.placeholder ? (field.placeholder | translate) : ''" [readonly]="field.readonly"
                    [min]="field.validation?.min ?? null" [max]="field.validation?.max ?? null" class="form-control"
                    [class.is-invalid]="hasError(field.name)" />

                <!-- Textarea -->
                <textarea *ngIf="field.type === 'textarea'" [id]="field.name" [formControlName]="field.name"
                    [placeholder]="field.placeholder ? (field.placeholder | translate) : ''" [readonly]="field.readonly"
                    rows="4" class="form-control" [class.is-invalid]="hasError(field.name)">
        </textarea>

                <!-- Select -->
                <select *ngIf="field.type === 'select'" [id]="field.name" [formControlName]="field.name"
                    class="form-select" [class.is-invalid]="hasError(field.name)">
                    <option value="" disabled selected>
                        {{ field.placeholder ? (field.placeholder | translate) : ('form.selectOption' | translate) }}
                    </option>
                    <option *ngFor="let option of field.options" [value]="option.value"
                        [disabled]="option.disabled || false">
                        {{ option.label | translate }}
                    </option>
                </select>

                <!-- Radio Buttons -->
                <div *ngIf="field.type === 'radio'" class="form-radio-group">
                    <div *ngFor="let option of field.options" class="form-check"
                        [class.form-check-inline]="config.layout === 'horizontal'">
                        <input type="radio" [id]="field.name + '_' + option.value" [formControlName]="field.name"
                            [value]="option.value" [disabled]="option.disabled || false" class="form-check-input" />
                        <label [for]="field.name + '_' + option.value" class="form-check-label">
                            {{ option.label | translate }}
                        </label>
                    </div>
                </div>

                <!-- Checkbox -->
                <div *ngIf="field.type === 'checkbox'" class="form-check">
                    <input type="checkbox" [id]="field.name" [formControlName]="field.name" class="form-check-input"
                        [class.is-invalid]="hasError(field.name)" />
                    <label [for]="field.name" class="form-check-label">
                        {{ field.label | translate }}
                    </label>
                </div>

                <!-- Date Input -->
                <input *ngIf="field.type === 'date'" type="date" [id]="field.name" [formControlName]="field.name"
                    [readonly]="field.readonly" class="form-control" [class.is-invalid]="hasError(field.name)" />

                <!-- Time Input -->
                <input *ngIf="field.type === 'time'" type="time" [id]="field.name" [formControlName]="field.name"
                    [readonly]="field.readonly" class="form-control" [class.is-invalid]="hasError(field.name)" />

                <!-- Datetime Input -->
                <input *ngIf="field.type === 'datetime'" type="datetime-local" [id]="field.name"
                    [formControlName]="field.name" [readonly]="field.readonly" class="form-control"
                    [class.is-invalid]="hasError(field.name)" />

                <!-- File Input -->
                <input *ngIf="field.type === 'file'" type="file" [id]="field.name" class="form-control"
                    [class.is-invalid]="hasError(field.name)" />

                <!-- Hidden Input -->
                <input *ngIf="field.type === 'hidden'" type="hidden" [id]="field.name" [formControlName]="field.name" />

                <!-- Help Text -->
                <small *ngIf="field.helpText && !hasError(field.name)" class="form-text text-muted">
                    {{ field.helpText | translate }}
                </small>

                <!-- Error Message -->
                <div *ngIf="hasError(field.name)" class="invalid-feedback d-block">
                    {{ getErrorMessage(field) | translate }}
                </div>
            </div>
        </ng-container>
    </div>

    <!-- Form Actions -->
    <div class="form-actions mt-4" *ngIf="config.submitButton || config.cancelButton">
        <button *ngIf="config.submitButton" type="submit" [class]="config.submitButton.class || 'btn btn-primary'"
            [disabled]="readonly">
            {{ config.submitButton.label | translate }}
        </button>

        <button *ngIf="config.cancelButton" type="button"
            [class]="config.cancelButton.class || 'btn btn-secondary ms-2'" (click)="onCancel()">
            {{ config.cancelButton.label | translate }}
        </button>
    </div>
</form>`;
  }
});

// angular:jit:style:src/app/modules/_shared/presentation/components/form-builder/form-builder.component.scss
var form_builder_component_default2;
var init_form_builder_component2 = __esm({
  "angular:jit:style:src/app/modules/_shared/presentation/components/form-builder/form-builder.component.scss"() {
    form_builder_component_default2 = "/* src/app/modules/_shared/presentation/components/form-builder/form-builder.component.scss */\n.form-builder {\n  width: 100%;\n}\n.form-builder .form-label.required {\n  font-weight: 600;\n}\n.form-builder .form-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-builder.form-horizontal .form-radio-group {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.form-builder .form-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--bs-border-color);\n}\n.form-builder .form-actions button {\n  min-width: 120px;\n}\n.form-builder .invalid-feedback {\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n@media (max-width: 768px) {\n  .form-builder .form-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .form-builder .form-actions button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=form-builder.component.css.map */\n";
  }
});

// src/app/modules/_shared/presentation/components/form-builder/form-builder.component.ts
var FormBuilderComponent;
var init_form_builder_component3 = __esm({
  "src/app/modules/_shared/presentation/components/form-builder/form-builder.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_form_builder_component();
    init_form_builder_component2();
    init_core();
    init_common();
    init_forms();
    init_translation();
    FormBuilderComponent = class FormBuilderComponent2 {
      fb;
      config;
      initialValues;
      readonly = false;
      showErrorsOnLoad = false;
      formSubmit = new EventEmitter();
      formCancel = new EventEmitter();
      formChange = new EventEmitter();
      /** FormGroup Angular */
      form;
      /** Formulaire soumis */
      submitted = false;
      constructor(fb) {
        this.fb = fb;
      }
      ngOnInit() {
        this.buildForm();
        if (this.initialValues) {
          this.form.patchValue(this.initialValues);
        }
        this.form.valueChanges.subscribe((value) => {
          this.formChange.emit(value);
          this.updateConditionalFields();
        });
      }
      /**
       * Construire le FormGroup à partir de la configuration
       */
      buildForm() {
        const group = {};
        this.config.fields.forEach((field) => {
          const validators = this.getValidators(field.validation);
          const value = field.defaultValue !== void 0 ? field.defaultValue : null;
          group[field.name] = [
            { value, disabled: field.disabled || this.readonly },
            validators
          ];
        });
        this.form = this.fb.group(group);
      }
      /**
       * Obtenir les validateurs pour un champ
       */
      getValidators(validation) {
        if (!validation)
          return [];
        const validators = [];
        if (validation.required) {
          validators.push(Validators.required);
        }
        if (validation.minLength) {
          validators.push(Validators.minLength(validation.minLength));
        }
        if (validation.maxLength) {
          validators.push(Validators.maxLength(validation.maxLength));
        }
        if (validation.min !== void 0) {
          validators.push(Validators.min(validation.min));
        }
        if (validation.max !== void 0) {
          validators.push(Validators.max(validation.max));
        }
        if (validation.pattern) {
          validators.push(Validators.pattern(validation.pattern));
        }
        if (validation.email) {
          validators.push(Validators.email);
        }
        if (validation.custom) {
          validators.push(validation.custom);
        }
        return validators;
      }
      /**
       * Mettre à jour les champs conditionnels
       */
      updateConditionalFields() {
        const formValue = this.form.value;
        this.config.fields.forEach((field) => {
          if (field.visibleWhen) {
            const shouldBeVisible = field.visibleWhen(formValue);
            field.visible = shouldBeVisible;
            const control = this.form.get(field.name);
            if (control) {
              if (!shouldBeVisible) {
                control.disable();
                control.setValue(null);
              } else if (!field.disabled && !this.readonly) {
                control.enable();
              }
            }
          }
        });
      }
      /**
       * Soumettre le formulaire
       */
      onSubmit() {
        this.submitted = true;
        if (this.form.valid) {
          this.formSubmit.emit(this.form.value);
        } else {
          this.markFormGroupTouched(this.form);
        }
      }
      /**
       * Annuler le formulaire
       */
      onCancel() {
        this.formCancel.emit();
      }
      /**
       * Marquer tous les champs comme touchés
       */
      markFormGroupTouched(formGroup) {
        Object.keys(formGroup.controls).forEach((key) => {
          const control = formGroup.get(key);
          control?.markAsTouched();
          if (control instanceof FormGroup) {
            this.markFormGroupTouched(control);
          }
        });
      }
      /**
       * Vérifier si un champ a une erreur
       */
      hasError(fieldName) {
        const control = this.form.get(fieldName);
        return !!(control && control.invalid && (control.touched || this.submitted || this.showErrorsOnLoad));
      }
      /**
       * Obtenir le message d'erreur pour un champ
       */
      getErrorMessage(field) {
        const control = this.form.get(field.name);
        if (!control || !control.errors)
          return "";
        const errors = control.errors;
        if (errors["required"]) {
          return "form.errors.required";
        }
        if (errors["minlength"]) {
          return "form.errors.minLength";
        }
        if (errors["maxlength"]) {
          return "form.errors.maxLength";
        }
        if (errors["min"]) {
          return "form.errors.min";
        }
        if (errors["max"]) {
          return "form.errors.max";
        }
        if (errors["pattern"]) {
          return "form.errors.pattern";
        }
        if (errors["email"]) {
          return "form.errors.email";
        }
        return "form.errors.invalid";
      }
      /**
       * Vérifier si un champ est visible
       */
      isFieldVisible(field) {
        if (field.visible === false)
          return false;
        if (field.visibleWhen) {
          return field.visibleWhen(this.form.value);
        }
        return true;
      }
      /**
       * Obtenir la classe de largeur pour un champ
       */
      getFieldWidthClass(field) {
        let cssClass = field.width ? `col-md-${field.width}` : "col-md-12";
        if (field.customClass) {
          cssClass += ` ${field.customClass}`;
        }
        return cssClass;
      }
      /**
       * Réinitialiser le formulaire
       */
      reset() {
        this.form.reset();
        this.submitted = false;
      }
      /**
       * Définir les valeurs du formulaire
       */
      setValue(values) {
        this.form.patchValue(values);
      }
      /**
       * Obtenir les valeurs du formulaire
       */
      getValue() {
        return this.form.value;
      }
      /**
       * Vérifier si le formulaire est valide
       */
      isValid() {
        return this.form.valid;
      }
      static ctorParameters = () => [
        { type: FormBuilder }
      ];
      static propDecorators = {
        config: [{ type: Input }],
        initialValues: [{ type: Input }],
        readonly: [{ type: Input }],
        showErrorsOnLoad: [{ type: Input }],
        formSubmit: [{ type: Output }],
        formCancel: [{ type: Output }],
        formChange: [{ type: Output }]
      };
    };
    FormBuilderComponent = __decorate([
      Component({
        selector: "app-form-builder",
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
        template: form_builder_component_default,
        styles: [form_builder_component_default2]
      })
    ], FormBuilderComponent);
  }
});

// src/app/modules/_shared/presentation/components/form-builder/form-builder-example.component.ts
var FormBuilderExampleComponent;
var init_form_builder_example_component = __esm({
  "src/app/modules/_shared/presentation/components/form-builder/form-builder-example.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_common();
    init_form_builder_component3();
    FormBuilderExampleComponent = class FormBuilderExampleComponent2 {
      currentValues = {};
      // Valeurs initiales
      initialValues = {
        firstName: "Jean",
        email: "jean@example.com"
      };
      // Configuration du formulaire
      formConfig = {
        layout: "vertical",
        showLabels: true,
        fields: [
          // Section Informations personnelles
          {
            name: "firstName",
            label: "Pr\xE9nom",
            type: "text",
            placeholder: "Entrez votre pr\xE9nom",
            validation: {
              required: true,
              minLength: 2,
              maxLength: 50
            },
            width: 6
          },
          {
            name: "lastName",
            label: "Nom",
            type: "text",
            placeholder: "Entrez votre nom",
            validation: {
              required: true,
              minLength: 2,
              maxLength: 50
            },
            width: 6
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "exemple@email.com",
            helpText: "Nous ne partagerons jamais votre email",
            validation: {
              required: true,
              email: true
            },
            width: 6
          },
          {
            name: "phone",
            label: "T\xE9l\xE9phone",
            type: "tel",
            placeholder: "+33 6 12 34 56 78",
            validation: {
              pattern: /^(\+33|0)[1-9](\d{2}){4}$/
            },
            width: 6
          },
          {
            name: "birthDate",
            label: "Date de naissance",
            type: "date",
            validation: {
              required: true
            },
            width: 6
          },
          {
            name: "gender",
            label: "Genre",
            type: "select",
            placeholder: "S\xE9lectionnez votre genre",
            options: [
              { label: "Homme", value: "male" },
              { label: "Femme", value: "female" },
              { label: "Autre", value: "other" }
            ],
            validation: {
              required: true
            },
            width: 6
          },
          // Section Adresse
          {
            name: "address",
            label: "Adresse",
            type: "textarea",
            placeholder: "Entrez votre adresse compl\xE8te",
            validation: {
              required: true
            },
            width: 12
          },
          {
            name: "city",
            label: "Ville",
            type: "text",
            placeholder: "Paris",
            validation: {
              required: true
            },
            width: 6
          },
          {
            name: "postalCode",
            label: "Code postal",
            type: "text",
            placeholder: "75001",
            validation: {
              required: true,
              pattern: /^\d{5}$/
            },
            width: 6
          },
          // Section Préférences
          {
            name: "newsletter",
            label: "S'abonner \xE0 la newsletter",
            type: "checkbox",
            defaultValue: false,
            width: 12
          },
          {
            name: "notificationMethod",
            label: "M\xE9thode de notification pr\xE9f\xE9r\xE9e",
            type: "radio",
            options: [
              { label: "Email", value: "email" },
              { label: "SMS", value: "sms" },
              { label: "Push", value: "push" }
            ],
            defaultValue: "email",
            visible: true,
            visibleWhen: (formValue) => formValue.newsletter === true,
            width: 12
          },
          // Section Professionnel
          {
            name: "company",
            label: "Entreprise",
            type: "text",
            placeholder: "Nom de l'entreprise",
            width: 6
          },
          {
            name: "position",
            label: "Poste",
            type: "text",
            placeholder: "Votre poste",
            width: 6
          },
          {
            name: "experience",
            label: "Ann\xE9es d'exp\xE9rience",
            type: "number",
            validation: {
              min: 0,
              max: 50
            },
            width: 6
          },
          {
            name: "salary",
            label: "Salaire souhait\xE9 (\u20AC)",
            type: "number",
            validation: {
              min: 0
            },
            width: 6
          },
          // Section Documents
          {
            name: "cv",
            label: "CV (PDF)",
            type: "file",
            helpText: "Format PDF uniquement, max 5MB",
            width: 12
          },
          // Section Commentaires
          {
            name: "comments",
            label: "Commentaires",
            type: "textarea",
            placeholder: "Vos commentaires...",
            width: 12
          }
        ],
        submitButton: {
          label: "Enregistrer",
          class: "btn btn-primary"
        },
        cancelButton: {
          label: "Annuler",
          class: "btn btn-secondary"
        }
      };
      onSubmit(values) {
        console.log("Form submitted:", values);
        alert("Formulaire soumis avec succ\xE8s !");
      }
      onCancel() {
        console.log("Form cancelled");
      }
      onChange(values) {
        this.currentValues = values;
      }
    };
    FormBuilderExampleComponent = __decorate([
      Component({
        selector: "app-form-builder-example",
        standalone: true,
        imports: [CommonModule, FormBuilderComponent],
        template: `
    <div class="container-fluid p-4">
      <h2>Exemple FormBuilder</h2>

      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <app-form-builder
                [config]="formConfig"
                [initialValues]="initialValues"
                (formSubmit)="onSubmit($event)"
                (formCancel)="onCancel()"
                (formChange)="onChange($event)">
              </app-form-builder>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5>Valeurs du Formulaire</h5>
            </div>
            <div class="card-body">
              <pre>{{ currentValues | json }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
      })
    ], FormBuilderExampleComponent);
  }
});

// src/app/modules/manage-users/presentation/pages/users/users.component.ts
var UsersComponent;
var init_users_component3 = __esm({
  "src/app/modules/manage-users/presentation/pages/users/users.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_users_component();
    init_users_component2();
    init_core();
    init_common();
    init_forms();
    init_http();
    init_router();
    init_create_user_use_case_token();
    init_get_users_use_case_token();
    init_activate_user_use_case();
    init_deactivate_user_use_case();
    init_delete_user_use_case();
    init_users_view_model();
    init_user_form_component3();
    init_site_service();
    init_departement_service();
    init_auth_service();
    init_translate_pipe();
    init_core_index();
    init_get_users_use_case();
    init_create_user_use_case();
    init_activate_user_use_case();
    init_deactivate_user_use_case();
    init_delete_user_use_case();
    init_shared();
    init_user_repository();
    init_http_user_repository();
    init_form_builder_example_component();
    UsersComponent = class UsersComponent2 {
      // Use cases injectés
      getUsersUseCase = inject(GET_USERS_USE_CASE);
      createUserUseCase = inject(CREATE_USER_USE_CASE);
      activateUserUseCase = inject(ACTIVATE_USER_USE_CASE);
      deactivateUserUseCase = inject(DEACTIVATE_USER_USE_CASE);
      deleteUserUseCase = inject(DELETE_USER_USE_CASE);
      // ViewModel pour la logique de présentation
      viewModel = new UsersViewModel();
      // Services injectés
      siteService = inject(SiteService);
      departementService = inject(DepartementService);
      authService = inject(AuthService);
      router = inject(Router);
      toastService = inject(ToasterService);
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
          const result = yield this.activateUserUseCase.execute(user.id);
          if (result.isFailure) {
            this.toastService.typeError(result.error.message);
            return;
          }
          this.toastService.typeSuccess(`L'utilisateur ${user.nomPrenom} a \xE9t\xE9 activ\xE9 avec succ\xE8s.`);
          yield this.loadUsers();
        });
      }
      /**
       * Désactive un utilisateur
       */
      deactivateUser(user) {
        return __async(this, null, function* () {
          const result = yield this.deactivateUserUseCase.execute(user.id);
          if (result.isFailure) {
            this.toastService.typeError(result.error.message);
            return;
          }
          this.toastService.typeSuccess(`L'utilisateur ${user.nomPrenom} a \xE9t\xE9 d\xE9sactiv\xE9 avec succ\xE8s.`);
          yield this.loadUsers();
        });
      }
      /**
       * Supprime un utilisateur
       */
      deleteUser(user) {
        return __async(this, null, function* () {
          if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer l'utilisateur ${user.nomPrenom} ?`)) {
            try {
              yield this.loadUsers();
            } catch (error) {
              this.error = "Impossible de supprimer l'utilisateur.";
              this.toastService.typeError("Erreur lors de la suppression de l'utilisateur.");
            }
          }
        });
      }
      /**
       * Exporte la liste des utilisateurs
       */
      exportUsers() {
        this.toastService.typeSuccess("Exporter la liste des utilisateurs");
      }
      /**
       * Importe des utilisateurs
       */
      importUsers() {
        this.toastService.typeSuccess("Importer des utilisateurs");
      }
      /**
       * Génère un rapport d'utilisateurs
       */
      generateReport() {
        this.toastService.typeSuccess("G\xE9n\xE9rer un rapport d'utilisateurs");
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
          this.toastService.typeSuccess("Email copi\xE9 dans le presse-papier");
        }).catch((err) => {
          this.toastService.typeError("Erreur lors de la copie de l'email");
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
        this.toastService.typeSuccess("Utilisateur sauvegard\xE9");
        this.loadUsers();
        this.closeModal();
      }
      /**
       * Gère l'annulation du formulaire
       */
      onFormCancelled() {
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
      static ctorParameters = () => [];
      static propDecorators = {
        userFormModal: [{ type: ViewChild, args: ["userFormModal"] }]
      };
    };
    UsersComponent = __decorate([
      Component({
        selector: "app-users",
        standalone: true,
        imports: [
          CommonModule,
          FormsModule,
          HttpClientModule,
          UserFormComponent,
          TranslatePipe,
          FormBuilderExampleComponent
        ],
        providers: [
          // ApplicationContext
          {
            provide: APPLICATION_CONTEXT,
            useClass: LocalStorageContextAdapter
          },
          // Repository
          {
            provide: USER_REPOSITORY,
            useClass: HttpUserRepository
          },
          // Use Cases
          {
            provide: GET_USERS_USE_CASE,
            useClass: GetUsersUseCaseImpl
          },
          {
            provide: CREATE_USER_USE_CASE,
            useClass: CreateUserUseCaseImpl
          },
          {
            provide: ACTIVATE_USER_USE_CASE,
            useClass: ActivateUserUseCaseImpl
          },
          {
            provide: DEACTIVATE_USER_USE_CASE,
            useClass: DeactivateUserUseCaseImpl
          },
          {
            provide: DELETE_USER_USE_CASE,
            useClass: DeleteUserUseCaseImpl
          },
          // Services
          SiteService,
          DepartementService,
          AuthService,
          ToasterService
        ],
        template: users_component_default,
        styles: [users_component_default2]
      })
    ], UsersComponent);
  }
});

// src/app/modules/manage-users/presentation/pages/users/users.component.spec.ts
var require_users_component_spec = __commonJS({
  "src/app/modules/manage-users/presentation/pages/users/users.component.spec.ts"(exports) {
    init_testing();
    init_users_component3();
    describe("UsersComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [UsersComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_users_component_spec();
//# sourceMappingURL=spec-app-modules-manage-users-presentation-pages-users-users.component.spec.js.map
