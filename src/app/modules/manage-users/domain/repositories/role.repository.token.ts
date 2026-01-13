import { InjectionToken } from '@angular/core';
import { RoleRepository } from './role.repository';

/**
 * Token d'injection pour le repository des rôles
 */
export const ROLE_REPOSITORY = new InjectionToken<RoleRepository>('RoleRepository');
