import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { InventoryDto } from '../../dto/stock.dto';

/**
 * Use case pour obtenir les alertes de stock faible
 */
export interface GetLowStockAlertsUseCase {
    /**
     * Exécute le use case
     * @returns Liste des produits en stock faible
     */
    execute(): Promise<Result<InventoryDto[], DomainError>>;
}

export const GET_LOW_STOCK_ALERTS_USE_CASE = new InjectionToken<GetLowStockAlertsUseCase>('GetLowStockAlertsUseCase');
