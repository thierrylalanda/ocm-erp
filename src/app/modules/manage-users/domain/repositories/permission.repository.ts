import { Observable } from 'rxjs';
import { 
  PermissionsPagedResponseDto, 
  RolePermissionsResponseDto, 
  AssignPermissionDto 
} from '../../application/dto/permission.dto';

/**
 * Interface pour le repository des permissions
 */
export interface PermissionRepository {
  /**
   * Récupère toutes les permissions de l'application avec pagination
   */
  getAllPermissions(page?: number, size?: number): Observable<PermissionsPagedResponseDto>;

  /**
   * Récupère les permissions d'un rôle
   */
  getRolePermissions(roleId: number): Observable<RolePermissionsResponseDto>;

  /**
   * Assigne une permission à un rôle
   */
  assignPermissionToRole(roleId: number, permission: AssignPermissionDto): Observable<void>;

  /**
   * Retire une permission d'un rôle
   */
  removePermissionFromRole(roleId: number, permissionId: number): Observable<void>;

  /**
   * Assigne plusieurs permissions à un rôle en une seule requête (batch)
   */
  assignPermissionsBatch(roleId: number, permissionIds: number[]): Observable<RolePermissionsResponseDto>;
}
