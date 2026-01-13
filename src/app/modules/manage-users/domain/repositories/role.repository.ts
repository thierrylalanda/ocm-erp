import { Observable } from 'rxjs';
import { CreateRoleDto, RoleResponseDto, UpdateRoleDto, CopyRoleDto } from '../../application/dto/create-role.dto';

/**
 * Interface pour le repository des rôles
 */
export interface RoleRepository {
  /**
   * Crée un nouveau rôle
   */
  create(role: CreateRoleDto): Observable<RoleResponseDto>;

  /**
   * Récupère tous les rôles d'une société
   */
  findAllBySociete(societeId: number): Observable<RoleResponseDto[]>;

  /**
   * Récupère un rôle par son ID
   */
  findById(id: number): Observable<RoleResponseDto>;

  /**
   * Met à jour un rôle
   */
  update(id: number, role: UpdateRoleDto): Observable<RoleResponseDto>;

  /**
   * Supprime un rôle
   */
  delete(id: number): Observable<void>;

  /**
   * Copie un rôle existant
   */
  copy(id: number, copyData: CopyRoleDto): Observable<RoleResponseDto>;
}
