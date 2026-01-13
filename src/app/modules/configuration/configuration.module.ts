import { NgModule } from '@angular/core';
import { COMPANY_REPOSITORY } from './domain/repositories/company.repository.token';
import { CREATE_COMPANY_USE_CASE } from './application/use-cases/create-company.use-case.token';
import { InMemoryCompanyRepository } from './infrastructure/repositories/in-memory-company.repository';
import { CreateCompanyUseCaseImpl } from './application/use-cases/create-company.use-case';

@NgModule({
  providers: [
    {
      provide: COMPANY_REPOSITORY,
      useClass: InMemoryCompanyRepository,
    },
    {
      provide: CREATE_COMPANY_USE_CASE,
      useClass: CreateCompanyUseCaseImpl,
    },
    CreateCompanyUseCaseImpl,
  ]
})
export class ConfigurationModule { }
