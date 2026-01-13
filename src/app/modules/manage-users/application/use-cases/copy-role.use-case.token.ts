import { InjectionToken } from '@angular/core';
import { CopyRoleUseCase } from './copy-role.use-case';

/**
 * Token d'injection pour le use case de copie de rôle
 */
export const COPY_ROLE_USE_CASE = new InjectionToken<CopyRoleUseCase>('COPY_ROLE_USE_CASE');
