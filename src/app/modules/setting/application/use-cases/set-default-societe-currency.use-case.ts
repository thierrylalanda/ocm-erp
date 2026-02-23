import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { SocieteCurrencyDto } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Set Default Company Currency
 */
export interface SetDefaultSocieteCurrencyUseCase {
    execute(id: number): Promise<Result<SocieteCurrencyDto, DomainError>>;
}

export const SET_DEFAULT_SOCIETE_CURRENCY_USE_CASE = new InjectionToken<SetDefaultSocieteCurrencyUseCase>('SetDefaultSocieteCurrencyUseCase');

@Injectable()
export class SetDefaultSocieteCurrencyUseCaseImpl implements SetDefaultSocieteCurrencyUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(id: number): Promise<Result<SocieteCurrencyDto, DomainError>> {
        try {
            const currency = await this.currencyService.setSocieteCurrencyDefault(id).toPromise();

            if (!currency) {
                return Result.fail(new InfrastructureError('Error setting default currency'));
            }

            return Result.ok(currency);
        } catch (error: any) {
            console.error('SetDefaultSocieteCurrencyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error setting default currency'));
        }
    }
}
