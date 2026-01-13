import { InjectionToken } from '@angular/core';
import { CreateRoleUseCase } from './create-role.use-case';

/**
 * Token d'injection pour le use case de création de rôle
 */
export const CREATE_ROLE_USE_CASE = new InjectionToken<CreateRoleUseCase>('CreateRoleUseCase');
