import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { LotDto } from '../../dto/lot.dto';

/**
 * Use case pour récupérer les lots d'un produit
 */
export interface GetLotsByProductUseCase {
    /**
     * Exécute le use case
     * @param productId ID du produit
     * @returns Liste des lots du produit
     */
    execute(productId: string): Promise<Result<LotDto[], DomainError>>;
}

export const GET_LOTS_BY_PRODUCT_USE_CASE = new InjectionToken<GetLotsByProductUseCase>('GetLotsByProductUseCase');
