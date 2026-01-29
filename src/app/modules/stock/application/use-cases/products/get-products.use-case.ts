import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductDto } from '../../dto/stock.dto';

/**
 * Use case pour obtenir tous les produits
 */
export interface GetProductsUseCase {
    execute(): Promise<Result<ProductDto[], DomainError>>;
}

export const GET_PRODUCTS_USE_CASE = new InjectionToken<GetProductsUseCase>('GetProductsUseCase');
