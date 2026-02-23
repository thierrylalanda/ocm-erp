import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { SiteCurrencyDto } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Set Default Site Currency
 */
export interface SetDefaultSiteCurrencyUseCase {
    execute(id: number): Promise<Result<SiteCurrencyDto, DomainError>>;
}

export const SET_DEFAULT_SITE_CURRENCY_USE_CASE = new InjectionToken<SetDefaultSiteCurrencyUseCase>('SetDefaultSiteCurrencyUseCase');

@Injectable()
export class SetDefaultSiteCurrencyUseCaseImpl implements SetDefaultSiteCurrencyUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(id: number): Promise<Result<SiteCurrencyDto, DomainError>> {
        try {
            const currency = await this.currencyService.setSiteCurrencyDefault(id).toPromise();

            if (!currency) {
                return Result.fail(new InfrastructureError('Error setting default site currency'));
            }

            return Result.ok(currency);
        } catch (error: any) {
            console.error('SetDefaultSiteCurrencyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error setting default site currency'));
        }
    }
}
