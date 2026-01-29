import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Result, DomainError, ValidationError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { ConfigurationParameterDto, PaginatedResponse } from '../../domain/dto/configuration.dto';
import { ConfigurationService } from '../services/configuration.service';

export interface GetConfigurationsByCompanyUseCase {
    execute(params?: GetConfigurationsParams): Promise<Result<PaginatedResponse<ConfigurationParameterDto>, DomainError>>;
}

export interface GetConfigurationsParams {
    page?: number;
    size?: number;
    sort?: string;
}

export const GET_CONFIGURATIONS_BY_COMPANY_USE_CASE = new InjectionToken<GetConfigurationsByCompanyUseCase>('GetConfigurationsByCompanyUseCase');

@Injectable()
export class GetConfigurationsByCompanyUseCaseImpl implements GetConfigurationsByCompanyUseCase {
    constructor(
        private configurationService: ConfigurationService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(params: GetConfigurationsParams = {}): Promise<Result<PaginatedResponse<ConfigurationParameterDto>, DomainError>> {
        try {
            // 1. Validation pagination
            if (params.page !== undefined && params.page < 0) {
                return Result.fail(new ValidationError('Le numéro de page doit être positif'));
            }

            if (params.size !== undefined && (params.size <= 0 || params.size > 100)) {
                return Result.fail(new ValidationError('La taille de page doit être entre 1 et 100'));
            }

            // 2. Récupérer societeId
            const societeId = this.context.getSocieteId();
            if (!societeId) {
                return Result.fail(new ValidationError('Société non trouvée dans le contexte'));
            }

            // 3. Récupérer les configurations
            const configurations = await this.configurationService.getConfigurationsByCompany(
                societeId,
                params.page ?? 0,
                params.size ?? 10,
                params.sort ?? ''
            ).toPromise();

            if (!configurations) {
                return Result.fail(new InfrastructureError('Erreur lors de la récupération des configurations'));
            }

            return Result.ok(configurations);
        } catch (error: any) {
            console.error('GetConfigurationsByCompanyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Erreur lors de la récupération des configurations'));
        }
    }
}
