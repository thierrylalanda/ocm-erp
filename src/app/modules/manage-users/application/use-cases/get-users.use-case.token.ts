import { InjectionToken } from '@angular/core';
import { GetUsersUseCase } from './get-users.use-case';

/**
 * Token d'injection pour GetUsersUseCase
 */
export const GET_USERS_USE_CASE = new InjectionToken<GetUsersUseCase>('GetUsersUseCase');
