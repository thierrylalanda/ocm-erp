import { InjectionToken } from '@angular/core';
import { CreateCompanyUseCase } from './create-company.use-case';

export const CREATE_COMPANY_USE_CASE = new InjectionToken<CreateCompanyUseCase>('CreateCompanyUseCase');
