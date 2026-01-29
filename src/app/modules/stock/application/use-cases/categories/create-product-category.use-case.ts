import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductCategoryDto, CreateProductCategoryDto } from '../../dto/stock.dto';

/**
 * Use case pour créer une catégorie de produit
 */
export interface CreateProductCategoryUseCase {
    execute(dto: CreateProductCategoryDto): Promise<Result<ProductCategoryDto, DomainError>>;
}

export const CREATE_PRODUCT_CATEGORY_USE_CASE = new InjectionToken<CreateProductCategoryUseCase>('CreateProductCategoryUseCase');
