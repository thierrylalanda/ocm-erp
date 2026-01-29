import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { CreateProductDto, ProductDto } from '../../dto/stock.dto';

/**
 * Use case pour créer un produit
 */
export interface CreateProductUseCase {
    execute(dto: CreateProductDto): Promise<Result<ProductDto, DomainError>>;
}

export const CREATE_PRODUCT_USE_CASE = new InjectionToken<CreateProductUseCase>('CreateProductUseCase');
