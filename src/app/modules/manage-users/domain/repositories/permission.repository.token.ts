import { InjectionToken } from '@angular/core';
import { PermissionRepository } from './permission.repository';

/**
 * Token d'injection pour le repository des permissions
 */
export const PERMISSION_REPOSITORY = new InjectionToken<PermissionRepository>('PERMISSION_REPOSITORY');
