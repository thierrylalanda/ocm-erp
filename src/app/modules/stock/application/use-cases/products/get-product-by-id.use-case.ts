import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductDto } from '../../dto/stock.dto';

/**
 * Use case pour récupérer un produit par ID
 */
export interface GetProductByIdUseCase {
    execute(id: string): Promise<Result<ProductDto, DomainError>>;
}

export const GET_PRODUCT_BY_ID_USE_CASE = new InjectionToken<GetProductByIdUseCase>('GetProductByIdUseCase');
