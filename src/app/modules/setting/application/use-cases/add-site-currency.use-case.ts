import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { SiteCurrencyDto } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Add Site Currency
 */
export interface AddSiteCurrencyUseCase {
    execute(data: { siteId: number, currencyId: number, actif: boolean, isDefault: boolean }): Promise<Result<SiteCurrencyDto, DomainError>>;
}

export const ADD_SITE_CURRENCY_USE_CASE = new InjectionToken<AddSiteCurrencyUseCase>('AddSiteCurrencyUseCase');

@Injectable()
export class AddSiteCurrencyUseCaseImpl implements AddSiteCurrencyUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(data: { siteId: number, currencyId: number, actif: boolean, isDefault: boolean }): Promise<Result<SiteCurrencyDto, DomainError>> {
        try {
            const result = await this.currencyService.addSiteCurrency(data).toPromise();
            if (!result) {
                return Result.fail(new InfrastructureError('Failed to add site currency'));
            }
            return Result.ok(result);
        } catch (error: any) {
            console.error('AddSiteCurrencyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error adding site currency'));
        }
    }
}
