import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, ValidationError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { ConfigurationParameterDto } from '../../domain/dto/configuration.dto';
import { ConfigurationService } from '../services/configuration.service';

export interface SaveConfigurationUseCase {
    execute(config: any): Promise<Result<any, DomainError>>;
}

export const SAVE_CONFIGURATION_USE_CASE = 'SAVE_CONFIGURATION_USE_CASE';

@Injectable()
export class SaveConfigurationUseCaseImpl implements SaveConfigurationUseCase {
    constructor(
        private configurationService: ConfigurationService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(config: any): Promise<Result<any, DomainError>> {
        try {
            // 1. Validation
            if (!config) {
                return Result.fail(new ValidationError('Configuration invalide'));
            }

            // 2. Sauvegarder
            const savedConfig = await this.configurationService.saveConfiguration(config).toPromise();

            if (!savedConfig) {
                return Result.fail(new InfrastructureError('Erreur lors de la sauvegarde de la configuration'));
            }

            return Result.ok(savedConfig);
        } catch (error: any) {
            console.error('SaveConfigurationUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Erreur lors de la sauvegarde de la configuration'));
        }
    }
}
