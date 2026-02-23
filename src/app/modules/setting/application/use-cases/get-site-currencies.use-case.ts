import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { SiteCurrencyDto } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Get Site Currencies
 */
export interface GetSiteCurrenciesUseCase {
    execute(siteId: number): Promise<Result<SiteCurrencyDto[], DomainError>>;
}

export const GET_SITE_CURRENCIES_USE_CASE = new InjectionToken<GetSiteCurrenciesUseCase>('GetSiteCurrenciesUseCase');

@Injectable()
export class GetSiteCurrenciesUseCaseImpl implements GetSiteCurrenciesUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(siteId: number): Promise<Result<SiteCurrencyDto[], DomainError>> {
        try {
            const currencies = await this.currencyService.getSiteCurrencies(siteId).toPromise();
            if (!currencies) {
                return Result.fail(new InfrastructureError('Failed to load site currencies'));
            }
            return Result.ok(currencies);
        } catch (error: any) {
            console.error('GetSiteCurrenciesUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error loading site currencies'));
        }
    }
}
