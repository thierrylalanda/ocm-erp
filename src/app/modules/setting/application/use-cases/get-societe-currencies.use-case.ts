import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { SocieteCurrencyDto } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Get Company Currencies
 * 
 * Retrieves all currencies for a specific company.
 */
export interface GetSocieteCurrenciesUseCase {
    execute(societeId: number): Promise<Result<SocieteCurrencyDto[], DomainError>>;
}

export const GET_SOCIETE_CURRENCIES_USE_CASE = new InjectionToken<GetSocieteCurrenciesUseCase>('GetSocieteCurrenciesUseCase');

@Injectable()
export class GetSocieteCurrenciesUseCaseImpl implements GetSocieteCurrenciesUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(societeId: number): Promise<Result<SocieteCurrencyDto[], DomainError>> {
        try {
            if (!societeId) {
                return Result.fail(new InfrastructureError('Societe ID is required'));
            }

            const currencies = await this.currencyService.getSocieteCurrencies(societeId).toPromise();

            if (!currencies) {
                return Result.fail(new InfrastructureError('Error retrieving company currencies'));
            }

            return Result.ok(currencies);
        } catch (error: any) {
            console.error('GetSocieteCurrenciesUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error retrieving company currencies'));
        }
    }
}
