import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Import de la traduction
import { TranslatePipe } from '../../../../../core/services/translation/translate.pipe';

// Import des DTOs
import { 
  PermissionDto, 
  RolePermissionsResponseDto,
  PermissionModule,
  PermissionAction 
} from '../../../application/dto/permission.dto';

// Import des use cases
import { GET_PERMISSIONS_USE_CASE } from '../../../application/use-cases/get-permissions.use-case.token';
import { GetPermissionsUseCase, GetPermissionsUseCaseImpl } from '../../../application/use-cases/get-permissions.use-case';
import { PERMISSION_REPOSITORY } from '../../../domain/repositories/permission.repository.token';
import { PermissionRepository } from '../../../domain/repositories/permission.repository';
import { HttpPermissionRepository } from '../../../infrastructure/repositories/http-permission.repository';
import { routes } from '../../../../../core/core.index';

@Component({
  selector: 'app-permission',
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
  providers: [
      
      {
        provide: PERMISSION_REPOSITORY,
        useClass: HttpPermissionRepository,
      },
      {
        provide: GET_PERMISSIONS_USE_CASE,
        useClass: GetPermissionsUseCaseImpl,
      },
      // Provider pour localStorage
      {
        provide: 'LOCAL_STORAGE',
        useValue: localStorage
      }
    ]
})
export class PermissionComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private getPermissionsUseCase = inject(GET_PERMISSIONS_USE_CASE);
  private permissionRepository = inject(PERMISSION_REPOSITORY);

  // Données du rôle
  roleId: number | null = null;
  roleCode: string = '';
  roleNom: string = '';
  
  // Données des permissions
  allPermissions: PermissionDto[] = [];
  rolePermissions: Set<number> = new Set(); // IDs des permissions du rôle (état initial)
  selectedPermissions: Set<number> = new Set(); // IDs des permissions sélectionnées (état actuel)
  loading = false;
  saving = false;
  error: string | null = null;
  saveSuccess = false;
  saveError: string | null = null;
  
  // Groupes de permissions par module
  groupedPermissions: Map<PermissionModule, PermissionDto[]> = new Map();
  
  // Routes
 routes = routes



  // Exposer PermissionAction au template
  PermissionAction = PermissionAction;

  ngOnInit(): void {
    this.loadRoleId();
    this.loadData();
  }

  /**
   * Charge l'ID du rôle depuis les paramètres de route
   */
  private loadRoleId(): void {
    this.route.paramMap.subscribe(params => {
      const roleIdParam = params.get('roleId');
      this.roleId = roleIdParam ? parseInt(roleIdParam, 10) : null;
    });
  }

  /**
   * Charge toutes les données nécessaires
   */
  loadData(): void {
    if (!this.roleId) {
      this.error = 'ID du rôle non spécifié';
      return;
    }

    this.loading = true;
    this.error = null;

    // Charge les permissions du rôle
    this.permissionRepository.getRolePermissions(this.roleId).subscribe({
      next: (rolePermissions) => {
        this.roleCode = rolePermissions.roleCode;
        this.roleNom = rolePermissions.roleNom;
        
        // Stocke les IDs des permissions du rôle (état initial)
        this.rolePermissions = new Set(rolePermissions.permissions.map(p => p.permissionId));
        // Initialise les permissions sélectionnées avec l'état initial
        this.selectedPermissions = new Set(this.rolePermissions);
        
        // Charge toutes les permissions de l'application
        this.loadAllPermissions();
      },
      error: (error) => {
        console.error('Erreur lors du chargement des permissions du rôle:', error);
        this.error = 'Erreur lors du chargement des permissions du rôle';
        this.loading = false;
      }
    });
  }

  /**
   * Charge toutes les permissions de l'application
   */
  private loadAllPermissions(): void {
    (this.getPermissionsUseCase.execute() as Observable<any>).subscribe({
      next: (response) => {
        this.allPermissions = response.content || [];
        this.groupPermissionsByModule();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des permissions:', error);
        this.error = 'Erreur lors du chargement des permissions';
        this.loading = false;
      }
    });
  }

  /**
   * Groupe les permissions par module
   */
  private groupPermissionsByModule(): void {
    this.groupedPermissions.clear();
    
    this.allPermissions.forEach(permission => {
      const module = permission.permModule;
      if (!this.groupedPermissions.has(module)) {
        this.groupedPermissions.set(module, []);
      }
      this.groupedPermissions.get(module)!.push(permission);
    });
  }

  /**
   * Extrait le sous-module d'un code de permission
   * Format attendu: MODULE:SOUS_MODULE:ACTION
   * Exemple: SECURITY:ROLE:CREATE -> sous-module = ROLE
   */
  getSubModuleFromPermissionCode(permCode: string): string {
    const parts = permCode.split(':');
    if (parts.length >= 2) {
      return parts[1]; // Le sous-module est la deuxième partie
    }
    return permCode; // Fallback: retourne le code complet
  }

  /**
   * Extrait l'action d'un code de permission
   * Format attendu: MODULE:SOUS_MODULE:ACTION
   * Exemple: SECURITY:ROLE:CREATE -> action = CREATE
   */
  getActionFromPermissionCode(permCode: string): string {
    const parts = permCode.split(':');
    if (parts.length >= 3) {
      return parts[2]; // L'action est la troisième partie
    }
    return permCode; // Fallback: retourne le code complet
  }

  /**
   * Groupe les permissions par sous-module pour un module donné
   * Retourne un Map où la clé est le sous-module et la valeur est un Map d'actions -> permissions
   */
  getPermissionsBySubModule(module: PermissionModule): Map<string, Map<PermissionAction, PermissionDto[]>> {
    const subModuleMap = new Map<string, Map<PermissionAction, PermissionDto[]>>();
    
    const permissions = this.getPermissionsByModule(module);
    permissions.forEach(permission => {
      const subModule = this.getSubModuleFromPermissionCode(permission.permCode);
      
      if (!subModuleMap.has(subModule)) {
        subModuleMap.set(subModule, new Map<PermissionAction, PermissionDto[]>());
      }
      
      const actionMap = subModuleMap.get(subModule)!;
      const action = permission.permAction;
      
      if (!actionMap.has(action)) {
        actionMap.set(action, []);
      }
      
      actionMap.get(action)!.push(permission);
    });
    
    return subModuleMap;
  }

  /**
   * Récupère les actions disponibles pour un sous-module donné
   */
  getAvailableActionsForSubModule(subModuleMap: Map<PermissionAction, PermissionDto[]>): PermissionAction[] {
    return Array.from(subModuleMap.keys());
  }

  /**
   * Vérifie si une permission est assignée au rôle (état actuel)
   */
  isPermissionAssigned(permissionId: number): boolean {
    return this.selectedPermissions.has(permissionId);
  }

  /**
   * Vérifie s'il y a des changements par rapport à l'état initial
   */
  hasChanges(): boolean {
    if (this.rolePermissions.size !== this.selectedPermissions.size) {
      return true;
    }
    
    // Vérifie si tous les éléments de rolePermissions sont dans selectedPermissions
    for (const permissionId of this.rolePermissions) {
      if (!this.selectedPermissions.has(permissionId)) {
        return true;
      }
    }
    
    // Vérifie si tous les éléments de selectedPermissions sont dans rolePermissions
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
  onPermissionChange(permissionId: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    if (checked) {
      this.selectedPermissions.add(permissionId);
    } else {
      this.selectedPermissions.delete(permissionId);
    }
  }

  /**
   * Enregistre toutes les permissions en une seule fois via l'API batch
   */
  savePermissions(): void {
    if (!this.roleId || !this.hasChanges()) return;

    this.saving = true;
    this.saveError = null;
    this.saveSuccess = false;

    // Convertir le Set en tableau pour l'API
    const permissionIds = Array.from(this.selectedPermissions);

    // Appeler l'API batch
    this.permissionRepository.assignPermissionsBatch(this.roleId, permissionIds).subscribe({
      next: (response) => {
        // Mettre à jour l'état initial avec l'état actuel
        this.rolePermissions = new Set(this.selectedPermissions);
        // Mettre à jour les informations du rôle si nécessaire
        if (response.roleCode) {
          this.roleCode = response.roleCode;
          this.roleNom = response.roleNom;
        }
        
        this.saveSuccess = true;
        this.saving = false;
        
        // Recharger les données après 2 secondes pour s'assurer de la synchronisation
        setTimeout(() => {
          this.loadData();
        }, 2000);
      },
      error: (error) => {
        console.error('Erreur lors de l\'enregistrement des permissions:', error);
        this.saveError = error.message || 'Erreur lors de l\'enregistrement des permissions';
        this.saving = false;
      }
    });
  }

  /**
   * Masque le message de succès
   */
  dismissSaveSuccess(): void {
    this.saveSuccess = false;
  }

  /**
   * Masque le message d'erreur
   */
  dismissSaveError(): void {
    this.saveError = null;
  }

  /**
   * Formate le nom du module pour l'affichage
   */
  getModuleDisplayName(module: PermissionModule): string {
    const moduleKeys: Record<PermissionModule, string> = {
      [PermissionModule.CAISSE]: 'permissions.permissionManagement.modules.INVOICING',
      [PermissionModule.STOCK]: 'permissions.permissionManagement.modules.STOCK',
      [PermissionModule.PRODUCTION]: 'permissions.permissionManagement.modules.PRODUCTION',
      [PermissionModule.COMPTABILITE]: 'permissions.permissionManagement.modules.ACCOUNTING',
      [PermissionModule.APPROVISIONNEMENT]: 'permissions.permissionManagement.modules.STOCK'
    };
    const key = moduleKeys[module] || module;
    // Le pipe translate sera utilisé dans le template, donc on retourne la clé
    return key;
  }

  /**
   * Formate le nom de l'action pour l'affichage
   */
  getActionDisplayName(action: PermissionAction): string {
    const actionKeys: Record<PermissionAction, string> = {
      [PermissionAction.CREATE]: 'permissions.permissionManagement.actions.CREATE',
      [PermissionAction.READ]: 'permissions.permissionManagement.actions.READ',
      [PermissionAction.UPDATE]: 'permissions.permissionManagement.actions.UPDATE',
      [PermissionAction.DELETE]: 'permissions.permissionManagement.actions.DELETE',
      [PermissionAction.EXPORT]: 'permissions.permissionManagement.actions.EXPORT',
      [PermissionAction.IMPORT]: 'permissions.permissionManagement.actions.IMPORT',
      [PermissionAction.PRINT]: 'permissions.permissionManagement.actions.PRINT'
    };
    const key = actionKeys[action] || action;
    // Le pipe translate sera utilisé dans le template, donc on retourne la clé
    return key;
  }

  /**
   * Récupère les permissions d'un module spécifique
   */
  getPermissionsByModule(module: PermissionModule): PermissionDto[] {
    return this.groupedPermissions.get(module) || [];
  }

  /**
   * Récupère les modules disponibles
   */
  getAvailableModules(): PermissionModule[] {
    return Array.from(this.groupedPermissions.keys());
  }

  /**
   * Vérifie si toutes les permissions d'un sous-module sont assignées
   */
  isAllPermissionsAssignedForSubModule(actionMap: Map<PermissionAction, PermissionDto[]>): boolean {
    let allAssigned = true;
    
    for (const [action, permissions] of actionMap) {
      for (const permission of permissions) {
        if (!this.isPermissionAssigned(permission.id)) {
          allAssigned = false;
          break;
        }
      }
      if (!allAssigned) break;
    }
    
    return allAssigned;
  }

  /**
   * Bascule toutes les permissions d'un sous-module (localement)
   */
  toggleAllPermissionsForSubModule(actionMap: Map<PermissionAction, PermissionDto[]>, event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    // Collecter toutes les permissions du sous-module
    const allPermissionIds: number[] = [];
    for (const [action, permissions] of actionMap) {
      for (const permission of permissions) {
        allPermissionIds.push(permission.id);
      }
    }

    // Appliquer le changement à toutes les permissions
    if (checked) {
      // Ajouter toutes les permissions
      allPermissionIds.forEach(permissionId => {
        this.selectedPermissions.add(permissionId);
      });
    } else {
      // Retirer toutes les permissions
      allPermissionIds.forEach(permissionId => {
        this.selectedPermissions.delete(permissionId);
      });
    }
  }
}
