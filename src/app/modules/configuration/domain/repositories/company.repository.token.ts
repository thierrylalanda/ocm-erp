import { InjectionToken } from '@angular/core';
import { CompanyRepository } from './company.repository';

export const COMPANY_REPOSITORY = new InjectionToken<CompanyRepository>('CompanyRepository');
