import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, ValidationError, NotFoundError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { UpdateCompanyRequestDto, CompanyResponseDto } from '../../domain/dto/company.dto';
import { CompanyService } from '../services/company.service';

export interface UpdateCurrentCompanyUseCase {
    execute(dto: UpdateCompanyRequestDto): Promise<Result<CompanyResponseDto, DomainError>>;
}

export const UPDATE_CURRENT_COMPANY_USE_CASE = 'UPDATE_CURRENT_COMPANY_USE_CASE';

@Injectable()
export class UpdateCurrentCompanyUseCaseImpl implements UpdateCurrentCompanyUseCase {
    constructor(
        private companyService: CompanyService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(dto: UpdateCompanyRequestDto): Promise<Result<CompanyResponseDto, DomainError>> {
        try {
            // 1. Validation
            if (dto.nom && dto.nom.trim().length === 0) {
                return Result.fail(new ValidationError('Le nom de la société ne peut pas être vide'));
            }

            // 2. Récupérer societeId
            const societeId = this.context.getSocieteId();
            if (!societeId) {
                return Result.fail(new NotFoundError('Société', 0));
            }

            // 3. Mettre à jour
            const company = await this.companyService.updateCompany(societeId, dto).toPromise();

            if (!company) {
                return Result.fail(new InfrastructureError('Erreur lors de la mise à jour de la société'));
            }

            return Result.ok(company);
        } catch (error: any) {
            console.error('UpdateCurrentCompanyUseCase error:', error);

            if (error.status === 404) {
                return Result.fail(new NotFoundError('Société', this.context.getSocieteId()));
            }

            return Result.fail(new InfrastructureError(error.message || 'Erreur lors de la mise à jour de la société'));
        }
    }
}
