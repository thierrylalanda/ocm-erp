/**
 * DTO pour la création d'un rôle
 */
export interface CreateRoleDto {
  roleCode: string;
  roleNom: string;
  roleDescription: string;
  roleNiveau: number;
  roleActif: boolean;
  societeId: number;
}

/**
 * DTO pour la réponse d'un rôle
 */
export interface RoleResponseDto {
  id: number;
  roleCode: string;
  roleNom: string;
  roleDescription: string;
  roleNiveau: number;
  roleActif: boolean;
  roleDateCreation: string;
  societeId: number;
  societeNom: string;
}

/**
 * DTO pour la mise à jour d'un rôle
 */
export interface UpdateRoleDto {
  roleCode?: string;
  roleNom?: string;
  roleDescription?: string;
  roleNiveau?: number;
  roleActif?: boolean;
  societeId?: number;
}

/**
 * DTO pour copier un rôle
 */
export interface CopyRoleDto {
  newRoleCode: string;
  newRoleNom: string;
}
