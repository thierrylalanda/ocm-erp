import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { SiteCurrencyDto } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Toggle Site Currency Active Status
 */
export interface ToggleSiteCurrencyUseCase {
    execute(id: number, actif: boolean): Promise<Result<SiteCurrencyDto, DomainError>>;
}

export const TOGGLE_SITE_CURRENCY_USE_CASE = new InjectionToken<ToggleSiteCurrencyUseCase>('ToggleSiteCurrencyUseCase');

@Injectable()
export class ToggleSiteCurrencyUseCaseImpl implements ToggleSiteCurrencyUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(id: number, actif: boolean): Promise<Result<SiteCurrencyDto, DomainError>> {
        try {
            const currency = await this.currencyService.toggleSiteCurrencyActive(id, actif).toPromise();

            if (!currency) {
                return Result.fail(new InfrastructureError('Error toggling site currency status'));
            }

            return Result.ok(currency);
        } catch (error: any) {
            console.error('ToggleSiteCurrencyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error toggling site currency status'));
        }
    }
}
