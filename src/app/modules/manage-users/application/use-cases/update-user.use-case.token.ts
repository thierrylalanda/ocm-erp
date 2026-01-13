import { InjectionToken } from '@angular/core';
import { UpdateUserUseCase } from './update-user.use-case';

/**
 * Token d'injection pour le use case de modification d'utilisateur
 */
export const UPDATE_USER_USE_CASE = new InjectionToken<UpdateUserUseCase>('UpdateUserUseCase');
