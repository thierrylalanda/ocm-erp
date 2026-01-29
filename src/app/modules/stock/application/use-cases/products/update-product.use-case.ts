import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductDto, UpdateProductDto } from '../../dto/stock.dto';

/**
 * Use case pour mettre à jour un produit
 */
export interface UpdateProductUseCase {
    execute(id: string, dto: UpdateProductDto): Promise<Result<ProductDto, DomainError>>;
}

export const UPDATE_PRODUCT_USE_CASE = new InjectionToken<UpdateProductUseCase>('UpdateProductUseCase');
