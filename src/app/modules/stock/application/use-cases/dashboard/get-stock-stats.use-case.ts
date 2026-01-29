import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockStatsDto } from '../../dto/stock.dto';

/**
 * Use case pour obtenir les statistiques de stock
 */
export interface GetStockStatsUseCase {
    execute(): Promise<Result<StockStatsDto, DomainError>>;
}

export const GET_STOCK_STATS_USE_CASE = new InjectionToken<GetStockStatsUseCase>('GetStockStatsUseCase');
