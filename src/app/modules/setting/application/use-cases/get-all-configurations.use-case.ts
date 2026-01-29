import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, ValidationError, InfrastructureError } from '../../../_shared';
import { ConfigurationParameterDto, PaginatedResponse } from '../../domain/dto/configuration.dto';
import { ConfigurationService } from '../services/configuration.service';

/**
 * Use Case: Get All Configurations
 * 
 * Retrieves all configuration parameters from the system.
 * This is used for global configuration management.
 */
export interface GetAllConfigurationsUseCase {
    execute(params?: GetAllConfigurationsParams): Promise<Result<PaginatedResponse<ConfigurationParameterDto>, DomainError>>;
}

export interface GetAllConfigurationsParams {
    page?: number;
    size?: number;
    sort?: string;
}

export const GET_ALL_CONFIGURATIONS_USE_CASE = new InjectionToken<GetAllConfigurationsUseCase>('GetAllConfigurationsUseCase');

@Injectable()
export class GetAllConfigurationsUseCaseImpl implements GetAllConfigurationsUseCase {
    constructor(
        private configurationService: ConfigurationService
    ) { }

    async execute(params: GetAllConfigurationsParams = {}): Promise<Result<PaginatedResponse<ConfigurationParameterDto>, DomainError>> {
        try {
            // 1. Validation pagination
            if (params.page !== undefined && params.page < 0) {
                return Result.fail(new ValidationError('Le numéro de page doit être positif'));
            }

            if (params.size !== undefined && (params.size <= 0 || params.size > 1000)) {
                return Result.fail(new ValidationError('La taille de page doit être entre 1 et 1000'));
            }

            // 2. Récupérer toutes les configurations
            const configurations = await this.configurationService.getAllConfigurations(
                params.page ?? 0,
                params.size ?? 100,
                params.sort ?? ''
            ).toPromise();

            if (!configurations) {
                return Result.fail(new InfrastructureError('Erreur lors de la récupération des configurations'));
            }

            return Result.ok(configurations);
        } catch (error: any) {
            console.error('GetAllConfigurationsUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Erreur lors de la récupération des configurations'));
        }
    }
}
