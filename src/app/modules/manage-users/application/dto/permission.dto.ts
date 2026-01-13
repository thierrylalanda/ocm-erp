/**
 * Module enum pour les permissions
 */
export enum PermissionModule {
  CAISSE = 'CAISSE',
  STOCK = 'STOCK',
  PRODUCTION = 'PRODUCTION',
  COMPTABILITE = 'COMPTABILITE',
  APPROVISIONNEMENT = 'APPROVISIONNEMENT'
}

/**
 * Action enum pour les permissions
 */
export enum PermissionAction {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  EXPORT = 'EXPORT',
  IMPORT = 'IMPORT',
  PRINT = 'PRINT'
}

/**
 * DTO pour une permission
 */
export interface PermissionDto {
  id: number;
  permCode: string;
  permNom: string;
  permModule: PermissionModule;
  permAction: PermissionAction;
  permDescription: string;
}

/**
 * DTO pour une permission de rôle
 */
export interface RolePermissionDto {
  id: number;
  permissionId: number;
  permCode: string;
  permNom: string;
  permModule: PermissionModule;
  permAction: PermissionAction;
  dateAttribution: string;
  attribueParNom: string;
}

/**
 * DTO pour les permissions d'un rôle
 */
export interface RolePermissionsResponseDto {
  roleId: number;
  roleCode: string;
  roleNom: string;
  permissions: RolePermissionDto[];
}

/**
 * DTO pour la réponse paginée des permissions
 */
export interface PermissionsPagedResponseDto {
  content: PermissionDto[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

/**
 * DTO pour assigner une permission à un rôle
 */
export interface AssignPermissionDto {
  permissionId: number;
}
