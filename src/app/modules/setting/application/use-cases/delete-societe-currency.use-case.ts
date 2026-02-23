import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, InfrastructureError } from '../../../_shared';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Delete Company Currency
 */
export interface DeleteSocieteCurrencyUseCase {
    execute(id: number): Promise<Result<void, DomainError>>;
}

export const DELETE_SOCIETE_CURRENCY_USE_CASE = new InjectionToken<DeleteSocieteCurrencyUseCase>('DeleteSocieteCurrencyUseCase');

@Injectable()
export class DeleteSocieteCurrencyUseCaseImpl implements DeleteSocieteCurrencyUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(id: number): Promise<Result<void, DomainError>> {
        try {
            await this.currencyService.deleteSocieteCurrency(id).toPromise();
            return Result.ok<void>(undefined as any);
        } catch (error: any) {
            console.error('DeleteSocieteCurrencyUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error deleting currency'));
        }
    }
}
