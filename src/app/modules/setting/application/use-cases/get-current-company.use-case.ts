import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, NotFoundError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { CompanyResponseDto } from '../../domain/dto/company.dto';
import { CompanyService } from '../services/company.service';

export interface GetCurrentCompanyUseCase {
    execute(): Promise<Result<CompanyResponseDto, DomainError>>;
}

export const GET_CURRENT_COMPANY_USE_CASE = 'GET_CURRENT_COMPANY_USE_CASE';

@Injectable()
export class GetCurrentCompanyUseCaseImpl implements GetCurrentCompanyUseCase {
    constructor(
        private companyService: CompanyService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(): Promise<Result<CompanyResponseDto, DomainError>> {
        try {
            // 1. Récupérer societeId depuis le contexte
            const societeId = this.context.getSocieteId();
            if (!societeId) {
                return Result.fail(new NotFoundError('Société', 0));
            }

            // 2. Récupérer la société
            const company = await this.companyService.getCompany(societeId).toPromise();

            if (!company) {
                return Result.fail(new NotFoundError('Société', societeId));
            }

            return Result.ok(company);
        } catch (error: any) {
            console.error('GetCurrentCompanyUseCase error:', error);

            if (error.status === 404) {
                return Result.fail(new NotFoundError('Société', this.context.getSocieteId()));
            }

            return Result.fail(new InfrastructureError(error.message || 'Erreur lors de la récupération de la société'));
        }
    }
}
