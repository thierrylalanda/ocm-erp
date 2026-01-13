import { InjectionToken } from '@angular/core';
import { GetPermissionsUseCase } from './get-permissions.use-case';

/**
 * Token d'injection pour le use case de récupération des permissions
 */
export const GET_PERMISSIONS_USE_CASE = new InjectionToken<GetPermissionsUseCase>('GET_PERMISSIONS_USE_CASE');
