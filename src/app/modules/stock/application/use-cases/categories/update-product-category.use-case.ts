import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductCategoryDto, UpdateProductCategoryDto } from '../../dto/stock.dto';

/**
 * Use case pour mettre à jour une catégorie de produit
 */
export interface UpdateProductCategoryUseCase {
    execute(id: string, dto: UpdateProductCategoryDto): Promise<Result<ProductCategoryDto, DomainError>>;
}

export const UPDATE_PRODUCT_CATEGORY_USE_CASE = new InjectionToken<UpdateProductCategoryUseCase>('UpdateProductCategoryUseCase');
