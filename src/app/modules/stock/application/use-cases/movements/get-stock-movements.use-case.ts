import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockMovementDto } from '../../dto/stock.dto';

/**
 * Filtres pour la recherche de mouvements de stock
 */
export interface GetStockMovementsFilter {
    productId?: string;
    warehouseId?: string;
    startDate?: Date;
    endDate?: Date;
    type?: string;
}

/**
 * Use case pour obtenir les mouvements de stock
 */
export interface GetStockMovementsUseCase {
    execute(filter?: GetStockMovementsFilter): Promise<Result<StockMovementDto[], DomainError>>;
}

export const GET_STOCK_MOVEMENTS_USE_CASE = new InjectionToken<GetStockMovementsUseCase>('GetStockMovementsUseCase');
