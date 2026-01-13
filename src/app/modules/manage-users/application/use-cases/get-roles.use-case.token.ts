import { InjectionToken } from '@angular/core';
import { GetRolesUseCase } from './get-roles.use-case';

/**
 * Token d'injection pour le use case de récupération des rôles
 */
export const GET_ROLES_USE_CASE = new InjectionToken<GetRolesUseCase>('GetRolesUseCase');
