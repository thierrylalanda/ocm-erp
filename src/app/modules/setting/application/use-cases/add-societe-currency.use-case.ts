import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { SocieteCurrencyDto } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Add Company Currency
 * 
 * Adds a currency to a specific company.
 */
export interface AddSocieteCurrencyUseCase {
    execute(data: any): Promise<Result<SocieteCurrencyDto, DomainError>>;
}

export const ADD_SOCIETE_CURRENCY_USE_CASE = new InjectionToken<AddSocieteCurrencyUseCase>('AddSocieteCurrencyUseCase');

@Injectable()
export class AddSocieteCurrencyUseCaseImpl implements AddSocieteCurrencyUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(data: any): Promise<Result<SocieteCurrencyDto, DomainError>> {
        try {
            const currency = await this.currencyService.addSocieteCurrency(data).toPromise();

            if (!currency) {
                return Result.fail(new InfrastructureError('Error adding company currency'));
            }

            return Result.ok(currency);
        } catch (error: any) {
            console.error('AddSocieteCurrencyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error adding company currency'));
        }
    }
}
