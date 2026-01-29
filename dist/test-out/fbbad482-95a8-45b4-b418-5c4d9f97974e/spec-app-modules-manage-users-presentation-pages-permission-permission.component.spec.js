import {
  TranslatePipe,
  init_translate_pipe
} from "./chunk-YTCUO5R2.js";
import {
  environment,
  init_environment
} from "./chunk-Q2A5OOYR.js";
import {
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import {
  ActivatedRoute,
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import {
  HttpClient,
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
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/modules/manage-users/presentation/pages/permission/permission.component.html
var permission_component_default;
var init_permission_component = __esm({
  "angular:jit:template:src/app/modules/manage-users/presentation/pages/permission/permission.component.html"() {
    permission_component_default = `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>
                <a [routerLink]="routes.rolePermissions">
                    <i class="isax isax-arrow-left me-1"></i>
                    {{ 'permissions.permissionManagement.title' | translate }}
                </a>
            </h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    {{ 'permissions.permissionManagement.role' | translate }} : <span class="fw-normal ms-1">{{ roleNom || ('permissions.permissionManagement.roleLoading' | translate) }}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item">{{ 'permissions.permissionManagement.roleCode' | translate }}: {{ roleCode }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

    <!-- Success Message -->
    <div *ngIf="saveSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
        <i class="isax isax-tick-circle me-2"></i> {{ 'permissions.permissionManagement.saveSuccess' | translate }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" (click)="dismissSaveSuccess()"></button>
    </div>

    <!-- Error Message -->
    <div *ngIf="saveError" class="alert alert-danger alert-dismissible fade show" role="alert">
        <i class="isax isax-danger me-2"></i> {{ saveError }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" (click)="dismissSaveError()"></button>
    </div>

    <!-- Loading State -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">{{ 'permissions.permissionManagement.loading' | translate }}</p>
    </div>

    <!-- Error State -->
    <div *ngIf="error && !loading" class="alert alert-danger" role="alert">
        <i class="isax isax-danger me-2"></i> {{ error }}
        <button type="button" class="btn btn-sm btn-outline-danger ms-2" (click)="loadData()">{{ 'permissions.permissionManagement.retry' | translate }}</button>
    </div>

    <!-- Save Button -->
    <div *ngIf="!loading && !error" class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-primary d-inline-flex align-items-center" (click)="savePermissions()" [disabled]="!hasChanges() || saving">
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>
            <i *ngIf="!saving" class="isax isax-save-2 me-1"></i>
            {{ saving ? ('permissions.permissionManagement.saving' | translate) : ('permissions.permissionManagement.saveButton' | translate) }}
        </button>
    </div>

    <!-- Start Treeview Structure -->
    <div *ngIf="!loading && !error" class="treeview-container">
        <!-- Modules List -->
        <ul class="treeview">
            <ng-container *ngFor="let module of getAvailableModules(); let moduleIndex = index">
                <li class="treeview-item">
                    <!-- Module Header -->
                    <div class="treeview-header d-flex align-items-center cursor-pointer" 
                         (click)="toggleModuleExpansion(moduleIndex)">
                        <i class="isax isax-arrow-down-1 me-2 transition-icon" 
                           [class.rotate-90]="isModuleExpanded(moduleIndex)"></i>
                        <span class="fw-bold">{{ getModuleDisplayName(module) | translate }}</span>
                        <span class="badge bg-primary rounded-pill ms-2">{{ getPermissionsBySubModule(module).size }}</span>
                    </div>
                    
                    <!-- Module Content (Collapsible) -->
                    <ul *ngIf="isModuleExpanded(moduleIndex)" class="treeview-submenu">
                        <ng-container *ngFor="let subModuleEntry of getPermissionsBySubModule(module) | keyvalue; let subModuleIndex = index">
                            <li class="treeview-item">
                                <!-- Sub-module Header -->
                                <div class="treeview-header d-flex align-items-center">
                                    <!-- Zone cliquable pour l'expansion (fl\xE8che + texte) -->
                                    <div class="d-flex align-items-center flex-grow-1 cursor-pointer"
                                         (click)="toggleSubModuleExpansion(moduleIndex, subModuleIndex)">
                                        <i class="isax isax-arrow-right-1 me-2 transition-icon" 
                                           [class.rotate-90]="isSubModuleExpanded(moduleIndex, subModuleIndex)"></i>
                                        <span class="fw-semibold">{{ subModuleEntry.key }}</span>
                                    </div>
                                    <!-- Zone de la checkbox "Allow All" (s\xE9par\xE9e) -->
                                    <div class="form-check m-0">
                                        <input class="form-check-input" 
                                               type="checkbox"
                                               [checked]="isAllPermissionsAssignedForSubModule(subModuleEntry.value)"
                                               (change)="toggleAllPermissionsForSubModule(subModuleEntry.value, $event)">
                                        <label class="form-check-label small ms-1">
                                            {{ 'permissions.permissionManagement.allowAll' | translate }}
                                        </label>
                                    </div>
                                </div>
                                
                                <!-- Sub-module Content (Collapsible) -->
                                <ul *ngIf="isSubModuleExpanded(moduleIndex, subModuleIndex)" class="treeview-submenu">
                                    <ng-container *ngFor="let actionEntry of subModuleEntry.value | keyvalue">
                                        <li *ngIf="actionEntry.value.length > 0" class="treeview-item">
                                            <!-- Action Header -->
                                          
                                            
                                            <!-- Permissions List -->
                                            <ul class="treeview-permissions">
                                                <ng-container *ngFor="let permission of actionEntry.value">
                                                    <li class="treeview-permission-item">
                                                        <div class="form-check d-flex align-items-center">
                                                            <input class="form-check-input me-2" 
                                                                   type="checkbox" 
                                                                   [id]="'permission-' + permission.id"
                                                                   [checked]="isPermissionAssigned(permission.id)"
                                                                   (change)="onPermissionChange(permission.id, $event)">
                                                            <label class="form-check-label flex-grow-1" [for]="'permission-' + permission.id">
                                                                {{ permission.permNom || permission.permCode }}
                                                            </label>
                                                            <!-- Permission Help Icon -->
                                                            <i *ngIf="permission.permDescription" 
                                                               class="isax isax-info-circle ms-2 text-muted cursor-help"
                                                               [attr.data-bs-toggle]="'popover'"
                                                               [attr.data-bs-trigger]="'hover focus'"
                                                               [attr.data-bs-placement]="'top'"
                                                               [attr.data-bs-content]="permission.permDescription"
                                                               [title]="permission.permDescription"></i>
                                                        </div>
                                                    </li>
                                                </ng-container>
                                            </ul>
                                        </li>
                                    </ng-container>
                                </ul>
                            </li>
                        </ng-container>

                        <!-- No sub-modules message -->
                        <li *ngIf="getPermissionsBySubModule(module).size === 0" class="treeview-item text-center py-3">
                            <i class="isax isax-shield-slash fs-24 text-muted mb-2 d-block"></i>
                            <p class="text-muted mb-0 small">{{ 'permissions.permissionManagement.noModulePermissions' | translate }}</p>
                        </li>
                    </ul>
                </li>
            </ng-container>

            <!-- No permissions message -->
            <li *ngIf="getAvailableModules().length === 0 && !loading" class="treeview-item text-center py-5">
                <i class="isax isax-shield-slash fs-48 text-muted mb-3 d-block"></i>
                <h5 class="text-muted mb-2">{{ 'permissions.permissionManagement.noPermissions' | translate }}</h5>
                <p class="text-muted mb-0">{{ 'permissions.permissionManagement.noPermissionsMessage' | translate }}</p>
            </li>
        </ul>
    </div>
    <!-- End Treeview Structure -->

</div>
<!-- End Content -->

<style>
.treeview-container {
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
}

.treeview {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
}

.treeview-item {
    margin-bottom: 0.5rem;
}

.treeview-header {
    padding: 0.75rem 1rem;
    background-color: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    transition: all 0.2s ease;
}

.treeview-header:hover {
    background-color: #f8f9fa;
    border-color: #0d6efd;
}

.treeview-submenu {
    list-style: none;
    padding-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-left: 2px solid #dee2e6;
}

.treeview-action-header {
    padding: 0.5rem 0.75rem;
    background-color: #f8f9fa;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.treeview-permissions {
    list-style: none;
    padding-left: 1rem;
    margin-bottom: 0.5rem;
}

.treeview-permission-item {
    padding: 0.5rem 0.75rem;
    background-color: white;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    margin-bottom: 0.25rem;
}

.treeview-permission-item:hover {
    background-color: #f8f9fa;
}

.cursor-pointer {
    cursor: pointer;
}

.cursor-help {
    cursor: help;
}

.transition-icon {
    transition: transform 0.3s ease;
}

.rotate-90 {
    transform: rotate(90deg);
}

.rotate-90.isax-arrow-down-1 {
    transform: rotate(180deg);
}

.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
}
</style>
`;
  }
});

// angular:jit:style:src/app/modules/manage-users/presentation/pages/permission/permission.component.scss
var permission_component_default2;
var init_permission_component2 = __esm({
  "angular:jit:style:src/app/modules/manage-users/presentation/pages/permission/permission.component.scss"() {
    permission_component_default2 = "/* src/app/modules/manage-users/presentation/pages/permission/permission.component.scss */\n/*# sourceMappingURL=permission.component.css.map */\n";
  }
});

// src/app/modules/manage-users/application/dto/permission.dto.ts
var PermissionModule, PermissionAction;
var init_permission_dto = __esm({
  "src/app/modules/manage-users/application/dto/permission.dto.ts"() {
    "use strict";
    (function(PermissionModule2) {
      PermissionModule2["CAISSE"] = "CAISSE";
      PermissionModule2["STOCK"] = "STOCK";
      PermissionModule2["PRODUCTION"] = "PRODUCTION";
      PermissionModule2["COMPTABILITE"] = "COMPTABILITE";
      PermissionModule2["APPROVISIONNEMENT"] = "APPROVISIONNEMENT";
    })(PermissionModule || (PermissionModule = {}));
    (function(PermissionAction2) {
      PermissionAction2["CREATE"] = "CREATE";
      PermissionAction2["READ"] = "READ";
      PermissionAction2["UPDATE"] = "UPDATE";
      PermissionAction2["DELETE"] = "DELETE";
      PermissionAction2["EXPORT"] = "EXPORT";
      PermissionAction2["IMPORT"] = "IMPORT";
      PermissionAction2["PRINT"] = "PRINT";
    })(PermissionAction || (PermissionAction = {}));
  }
});

// src/app/modules/manage-users/application/use-cases/get-permissions.use-case.token.ts
var GET_PERMISSIONS_USE_CASE;
var init_get_permissions_use_case_token = __esm({
  "src/app/modules/manage-users/application/use-cases/get-permissions.use-case.token.ts"() {
    "use strict";
    init_core();
    GET_PERMISSIONS_USE_CASE = new InjectionToken("GET_PERMISSIONS_USE_CASE");
  }
});

// src/app/modules/manage-users/domain/repositories/permission.repository.token.ts
var PERMISSION_REPOSITORY;
var init_permission_repository_token = __esm({
  "src/app/modules/manage-users/domain/repositories/permission.repository.token.ts"() {
    "use strict";
    init_core();
    PERMISSION_REPOSITORY = new InjectionToken("PERMISSION_REPOSITORY");
  }
});

// src/app/modules/manage-users/application/use-cases/get-permissions.use-case.ts
var GetPermissionsUseCaseImpl;
var init_get_permissions_use_case = __esm({
  "src/app/modules/manage-users/application/use-cases/get-permissions.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_permission_repository_token();
    GetPermissionsUseCaseImpl = class GetPermissionsUseCaseImpl2 {
      permissionRepository = inject(PERMISSION_REPOSITORY);
      execute(page = 0, size = 100) {
        return this.permissionRepository.getAllPermissions(page, size);
      }
    };
    GetPermissionsUseCaseImpl = __decorate([
      Injectable()
    ], GetPermissionsUseCaseImpl);
  }
});

// src/app/modules/manage-users/infrastructure/repositories/http-permission.repository.ts
var HttpPermissionRepository;
var init_http_permission_repository = __esm({
  "src/app/modules/manage-users/infrastructure/repositories/http-permission.repository.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_environment();
    HttpPermissionRepository = class HttpPermissionRepository2 {
      http = inject(HttpClient);
      baseUrl = `${environment.api}security`;
      getAllPermissions(page = 0, size = 100) {
        const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
        return this.http.get(`${this.baseUrl}/permissions`, { params });
      }
      getRolePermissions(roleId) {
        return this.http.get(`${this.baseUrl}/roles/${roleId}/permissions`);
      }
      assignPermissionToRole(roleId, permission) {
        return this.http.post(`${this.baseUrl}/roles/${roleId}/permissions`, permission);
      }
      removePermissionFromRole(roleId, permissionId) {
        return this.http.delete(`${this.baseUrl}/roles/${roleId}/permissions/${permissionId}`);
      }
      assignPermissionsBatch(roleId, permissionIds) {
        const batchData = { permissionIds };
        return this.http.post(`${this.baseUrl}/roles/${roleId}/permissions/batch`, batchData);
      }
    };
    HttpPermissionRepository = __decorate([
      Injectable()
    ], HttpPermissionRepository);
  }
});

// src/app/modules/manage-users/presentation/pages/permission/permission.component.ts
var PermissionComponent;
var init_permission_component3 = __esm({
  "src/app/modules/manage-users/presentation/pages/permission/permission.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_permission_component();
    init_permission_component2();
    init_core();
    init_router();
    init_common();
    init_translate_pipe();
    init_permission_dto();
    init_get_permissions_use_case_token();
    init_get_permissions_use_case();
    init_permission_repository_token();
    init_http_permission_repository();
    init_core_index();
    PermissionComponent = class PermissionComponent2 {
      route = inject(ActivatedRoute);
      getPermissionsUseCase = inject(GET_PERMISSIONS_USE_CASE);
      permissionRepository = inject(PERMISSION_REPOSITORY);
      // Données du rôle
      roleId = null;
      roleCode = "";
      roleNom = "";
      // Données des permissions
      allPermissions = [];
      rolePermissions = /* @__PURE__ */ new Set();
      // IDs des permissions du rôle (état initial)
      selectedPermissions = /* @__PURE__ */ new Set();
      // IDs des permissions sélectionnées (état actuel)
      loading = false;
      saving = false;
      error = null;
      saveSuccess = false;
      saveError = null;
      // Groupes de permissions par module
      groupedPermissions = /* @__PURE__ */ new Map();
      // Routes
      routes = routes;
      // Exposer PermissionAction au template
      PermissionAction = PermissionAction;
      // Gestion de l'expansion des modules et sous-modules
      expandedModules = /* @__PURE__ */ new Set();
      expandedSubModules = /* @__PURE__ */ new Map();
      ngOnInit() {
        this.loadRoleId();
        this.loadData();
      }
      /**
       * Charge l'ID du rôle depuis les paramètres de route
       */
      loadRoleId() {
        this.route.paramMap.subscribe((params) => {
          const roleIdParam = params.get("roleId");
          this.roleId = roleIdParam ? parseInt(roleIdParam, 10) : null;
        });
      }
      /**
       * Charge toutes les données nécessaires
       */
      loadData() {
        if (!this.roleId) {
          this.error = "ID du r\xF4le non sp\xE9cifi\xE9";
          return;
        }
        this.loading = true;
        this.error = null;
        this.permissionRepository.getRolePermissions(this.roleId).subscribe({
          next: (rolePermissions) => {
            this.roleCode = rolePermissions.roleCode;
            this.roleNom = rolePermissions.roleNom;
            this.rolePermissions = new Set(rolePermissions.permissions.map((p) => p.permissionId));
            this.selectedPermissions = new Set(this.rolePermissions);
            this.loadAllPermissions();
          },
          error: (error) => {
            this.error = "Erreur lors du chargement des permissions du r\xF4le";
            this.loading = false;
          }
        });
      }
      /**
       * Charge toutes les permissions de l'application
       */
      loadAllPermissions() {
        this.getPermissionsUseCase.execute().subscribe({
          next: (response) => {
            this.allPermissions = response.content || [];
            this.groupPermissionsByModule();
            this.loading = false;
          },
          error: (error) => {
            this.error = "Erreur lors du chargement des permissions";
            this.loading = false;
          }
        });
      }
      /**
       * Groupe les permissions par module
       */
      groupPermissionsByModule() {
        this.groupedPermissions.clear();
        this.allPermissions.forEach((permission) => {
          const module = permission.permModule;
          if (!this.groupedPermissions.has(module)) {
            this.groupedPermissions.set(module, []);
          }
          this.groupedPermissions.get(module).push(permission);
        });
      }
      /**
       * Extrait le sous-module d'un code de permission
       * Format attendu: MODULE:SOUS_MODULE:ACTION
       * Exemple: SECURITY:ROLE:CREATE -> sous-module = ROLE
       */
      getSubModuleFromPermissionCode(permCode) {
        const parts = permCode.split(":");
        if (parts.length >= 2) {
          return parts[1];
        }
        return permCode;
      }
      /**
       * Groupe les permissions par sous-module pour un module donné
       * Retourne un Map où la clé est le sous-module et la valeur est un Map d'actions -> permissions
       */
      getPermissionsBySubModule(module) {
        const subModuleMap = /* @__PURE__ */ new Map();
        const permissions = this.getPermissionsByModule(module);
        permissions.forEach((permission) => {
          const subModule = this.getSubModuleFromPermissionCode(permission.permCode);
          if (!subModuleMap.has(subModule)) {
            subModuleMap.set(subModule, /* @__PURE__ */ new Map());
          }
          const actionMap = subModuleMap.get(subModule);
          const action = permission.permAction;
          if (!actionMap.has(action)) {
            actionMap.set(action, []);
          }
          actionMap.get(action).push(permission);
        });
        return subModuleMap;
      }
      /**
       * Vérifie si une permission est assignée au rôle (état actuel)
       */
      isPermissionAssigned(permissionId) {
        return this.selectedPermissions.has(permissionId);
      }
      /**
       * Vérifie s'il y a des changements par rapport à l'état initial
       */
      hasChanges() {
        if (this.rolePermissions.size !== this.selectedPermissions.size) {
          return true;
        }
        for (const permissionId of this.rolePermissions) {
          if (!this.selectedPermissions.has(permissionId)) {
            return true;
          }
        }
        for (const permissionId of this.selectedPermissions) {
          if (!this.rolePermissions.has(permissionId)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Gère le changement d'état d'une checkbox de permission (localement)
       */
      onPermissionChange(permissionId, event) {
        const target = event.target;
        const checked = target.checked;
        const newSelectedPermissions = new Set(this.selectedPermissions);
        if (checked) {
          newSelectedPermissions.add(permissionId);
        } else {
          newSelectedPermissions.delete(permissionId);
        }
        this.selectedPermissions = newSelectedPermissions;
      }
      /**
       * Enregistre toutes les permissions en une seule fois via l'API batch
       */
      savePermissions() {
        if (!this.roleId || !this.hasChanges())
          return;
        this.saving = true;
        this.saveError = null;
        this.saveSuccess = false;
        const permissionIds = Array.from(this.selectedPermissions);
        this.permissionRepository.assignPermissionsBatch(this.roleId, permissionIds).subscribe({
          next: (response) => {
            this.rolePermissions = new Set(this.selectedPermissions);
            if (response.roleCode) {
              this.roleCode = response.roleCode;
              this.roleNom = response.roleNom;
            }
            this.saveSuccess = true;
            this.saving = false;
            setTimeout(() => {
              this.loadData();
            }, 2e3);
          },
          error: (error) => {
            this.saveError = error.message || "Erreur lors de l'enregistrement des permissions";
            this.saving = false;
          }
        });
      }
      /**
       * Masque le message de succès
       */
      dismissSaveSuccess() {
        this.saveSuccess = false;
      }
      /**
       * Masque le message d'erreur
       */
      dismissSaveError() {
        this.saveError = null;
      }
      /**
       * Formate le nom du module pour l'affichage
       */
      getModuleDisplayName(module) {
        const moduleKeys = {
          [PermissionModule.CAISSE]: "permissions.permissionManagement.modules.INVOICING",
          [PermissionModule.STOCK]: "permissions.permissionManagement.modules.STOCK",
          [PermissionModule.PRODUCTION]: "permissions.permissionManagement.modules.PRODUCTION",
          [PermissionModule.COMPTABILITE]: "permissions.permissionManagement.modules.ACCOUNTING",
          [PermissionModule.APPROVISIONNEMENT]: "permissions.permissionManagement.modules.STOCK"
        };
        const key = moduleKeys[module] || module;
        return key;
      }
      /**
       * Formate le nom de l'action pour l'affichage
       */
      getActionDisplayName(action) {
        const actionKeys = {
          [PermissionAction.CREATE]: "permissions.permissionManagement.actions.CREATE",
          [PermissionAction.READ]: "permissions.permissionManagement.actions.READ",
          [PermissionAction.UPDATE]: "permissions.permissionManagement.actions.UPDATE",
          [PermissionAction.DELETE]: "permissions.permissionManagement.actions.DELETE",
          [PermissionAction.EXPORT]: "permissions.permissionManagement.actions.EXPORT",
          [PermissionAction.IMPORT]: "permissions.permissionManagement.actions.IMPORT",
          [PermissionAction.PRINT]: "permissions.permissionManagement.actions.PRINT"
        };
        const key = actionKeys[action] || action;
        return key;
      }
      /**
       * Récupère les permissions d'un module spécifique
       */
      getPermissionsByModule(module) {
        return this.groupedPermissions.get(module) || [];
      }
      /**
       * Récupère les modules disponibles
       */
      getAvailableModules() {
        return Array.from(this.groupedPermissions.keys());
      }
      /**
       * Vérifie si toutes les permissions d'un sous-module sont assignées
       */
      isAllPermissionsAssignedForSubModule(actionMap) {
        let allAssigned = true;
        for (const [action, permissions] of actionMap) {
          for (const permission of permissions) {
            if (!this.isPermissionAssigned(permission.id)) {
              allAssigned = false;
              break;
            }
          }
          if (!allAssigned)
            break;
        }
        return allAssigned;
      }
      /**
       * Bascule toutes les permissions d'un sous-module (localement)
       */
      toggleAllPermissionsForSubModule(actionMap, event) {
        const target = event.target;
        const checked = target.checked;
        const allPermissionIds = [];
        for (const [action, permissions] of actionMap) {
          for (const permission of permissions) {
            allPermissionIds.push(permission.id);
          }
        }
        const newSelectedPermissions = new Set(this.selectedPermissions);
        if (checked) {
          allPermissionIds.forEach((permissionId) => {
            newSelectedPermissions.add(permissionId);
          });
        } else {
          allPermissionIds.forEach((permissionId) => {
            newSelectedPermissions.delete(permissionId);
          });
        }
        this.selectedPermissions = newSelectedPermissions;
      }
      /**
       * Bascule l'expansion d'un module
       */
      toggleModuleExpansion(moduleIndex) {
        if (this.expandedModules.has(moduleIndex)) {
          this.expandedModules.delete(moduleIndex);
        } else {
          this.expandedModules.add(moduleIndex);
        }
      }
      /**
       * Vérifie si un module est expandé
       */
      isModuleExpanded(moduleIndex) {
        return this.expandedModules.has(moduleIndex);
      }
      /**
       * Bascule l'expansion d'un sous-module
       */
      toggleSubModuleExpansion(moduleIndex, subModuleIndex) {
        if (!this.expandedSubModules.has(moduleIndex)) {
          this.expandedSubModules.set(moduleIndex, /* @__PURE__ */ new Set());
        }
        const subModuleSet = this.expandedSubModules.get(moduleIndex);
        if (subModuleSet.has(subModuleIndex)) {
          subModuleSet.delete(subModuleIndex);
        } else {
          subModuleSet.add(subModuleIndex);
        }
      }
      /**
       * Vérifie si un sous-module est expandé
       */
      isSubModuleExpanded(moduleIndex, subModuleIndex) {
        const subModuleSet = this.expandedSubModules.get(moduleIndex);
        return subModuleSet ? subModuleSet.has(subModuleIndex) : false;
      }
      /**
       * Obtient la description d'une action
       */
      getActionDescription(action) {
        const actionDescriptions = {
          [PermissionAction.CREATE]: "Permet de cr\xE9er de nouveaux \xE9l\xE9ments",
          [PermissionAction.READ]: "Permet de visualiser les \xE9l\xE9ments",
          [PermissionAction.UPDATE]: "Permet de modifier les \xE9l\xE9ments existants",
          [PermissionAction.DELETE]: "Permet de supprimer des \xE9l\xE9ments",
          [PermissionAction.EXPORT]: "Permet d'exporter des donn\xE9es",
          [PermissionAction.IMPORT]: "Permet d'importer des donn\xE9es",
          [PermissionAction.PRINT]: "Permet d'imprimer des documents"
        };
        return actionDescriptions[action] || "Aucune description disponible";
      }
    };
    PermissionComponent = __decorate([
      Component({
        selector: "app-permission",
        imports: [CommonModule, RouterLink, TranslatePipe],
        template: permission_component_default,
        providers: [
          {
            provide: PERMISSION_REPOSITORY,
            useClass: HttpPermissionRepository
          },
          {
            provide: GET_PERMISSIONS_USE_CASE,
            useClass: GetPermissionsUseCaseImpl
          },
          // Provider pour localStorage
          {
            provide: "LOCAL_STORAGE",
            useValue: localStorage
          }
        ],
        styles: [permission_component_default2]
      })
    ], PermissionComponent);
  }
});

// src/app/modules/manage-users/presentation/pages/permission/permission.component.spec.ts
var require_permission_component_spec = __commonJS({
  "src/app/modules/manage-users/presentation/pages/permission/permission.component.spec.ts"(exports) {
    init_testing();
    init_permission_component3();
    describe("PermissionComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PermissionComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PermissionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_permission_component_spec();
//# sourceMappingURL=spec-app-modules-manage-users-presentation-pages-permission-permission.component.spec.js.map
