import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { InventoryDto } from '../../dto/stock.dto';

/**
 * Use case pour obtenir le niveau de stock (inventaire global ou par produit)
 */
export interface GetStockLevelUseCase {
    /**
    * Exécute le use case
    * @param productId ID du produit (optionnel, si non fourni, retourne tout l'inventaire)
    * @param warehouseId ID du magasin (optionnel)
    */
    execute(productId?: string, warehouseId?: string): Promise<Result<InventoryDto[], DomainError>>;
}

export const GET_STOCK_LEVEL_USE_CASE = new InjectionToken<GetStockLevelUseCase>('GetStockLevelUseCase');
