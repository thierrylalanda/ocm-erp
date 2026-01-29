import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductCategoryDto } from '../../dto/stock.dto';

/**
 * Use case pour obtenir les catégories de produits (structure arborescente)
 */
export interface GetProductCategoriesUseCase {
    execute(): Promise<Result<ProductCategoryDto[], DomainError>>;
}

export const GET_PRODUCT_CATEGORIES_USE_CASE = new InjectionToken<GetProductCategoriesUseCase>('GetProductCategoriesUseCase');
