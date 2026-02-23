import { Injectable, InjectionToken } from '@angular/core';
import { Result, DomainError, ValidationError, InfrastructureError } from '../../../_shared';
import { CurrencyDto, PaginatedResponse } from '../../domain/dto/currency.dto';
import { CurrencyService } from '../services/currency.service';

/**
 * Use Case: Get All Currencies
 * 
 * Retrieves all currencies from the system.
 */
export interface GetCurrenciesUseCase {
    execute(params?: GetCurrenciesParams): Promise<Result<PaginatedResponse<CurrencyDto>, DomainError>>;
}

export interface GetCurrenciesParams {
    page?: number;
    size?: number;
    sort?: string;
}

export const GET_CURRENCIES_USE_CASE = new InjectionToken<GetCurrenciesUseCase>('GetCurrenciesUseCase');

@Injectable()
export class GetCurrenciesUseCaseImpl implements GetCurrenciesUseCase {
    constructor(
        private currencyService: CurrencyService
    ) { }

    async execute(params: GetCurrenciesParams = {}): Promise<Result<PaginatedResponse<CurrencyDto>, DomainError>> {
        try {
            // 1. Validation pagination
            if (params.page !== undefined && params.page < 0) {
                return Result.fail(new ValidationError('Page number must be positive'));
            }

            if (params.size !== undefined && (params.size <= 0 || params.size > 1000)) {
                return Result.fail(new ValidationError('Page size must be between 1 and 1000'));
            }

            // 2. Retrieve all currencies
            const currencies = await this.currencyService.getAllCurrencies(
                params.page ?? 0,
                params.size ?? 10,
                params.sort ?? ''
            ).toPromise();

            if (!currencies) {
                return Result.fail(new InfrastructureError('Error retrieving currencies'));
            }

            return Result.ok(currencies);
        } catch (error: any) {
            console.error('GetCurrenciesUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Error retrieving currencies'));
        }
    }
}
