import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { SocieteCurrencyDto } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Toggle Company Currency Active Status
 */
export interface ToggleSocieteCurrencyUseCase {
    execute(id: number, actif: boolean): Promise<Result<SocieteCurrencyDto, DomainError>>;
}

export const TOGGLE_SOCIETE_CURRENCY_USE_CASE = new InjectionToken<ToggleSocieteCurrencyUseCase>('ToggleSocieteCurrencyUseCase');

@Injectable()
export class ToggleSocieteCurrencyUseCaseImpl implements ToggleSocieteCurrencyUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(id: number, actif: boolean): Promise<Result<SocieteCurrencyDto, DomainError>> {
        try {
            const currency = await this.currencyService.toggleSocieteCurrencyActive(id, actif).toPromise();

            if (!currency) {
                return Result.fail(new InfrastructureError('Error toggling currency status'));
            }

            return Result.ok(currency);
        } catch (error: any) {
            console.error('ToggleSocieteCurrencyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error toggling currency status'));
        }
    }
}
