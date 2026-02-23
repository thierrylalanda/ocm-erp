import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Delete Site Currency
 */
export interface DeleteSiteCurrencyUseCase {
    execute(id: number): Promise<Result<void, DomainError>>;
}

export const DELETE_SITE_CURRENCY_USE_CASE = new InjectionToken<DeleteSiteCurrencyUseCase>('DeleteSiteCurrencyUseCase');

@Injectable()
export class DeleteSiteCurrencyUseCaseImpl implements DeleteSiteCurrencyUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(id: number): Promise<Result<void, DomainError>> {
        try {
            await this.currencyService.deleteSiteCurrency(id).toPromise();
            return Result.ok<void>(undefined as any);
        } catch (error: any) {
            console.error('DeleteSiteCurrencyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error deleting site currency'));
        }
    }
}
