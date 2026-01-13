import { InjectionToken } from '@angular/core';
import { CreateUserUseCase } from './create-user.use-case';

/**
 * Token d'injection pour CreateUserUseCase
 */
export const CREATE_USER_USE_CASE = new InjectionToken<CreateUserUseCase>('CreateUserUseCase');
