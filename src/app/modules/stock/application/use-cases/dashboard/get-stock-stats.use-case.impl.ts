import { Inject, Injectable } from '@angular/core';
import { GetStockStatsUseCase } from './get-stock-stats.use-case';
import { StockRepository, STOCK_REPOSITORY } from '../../../domain/repositories/stock.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockStatsDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case GetStockStats
 */
@Injectable()
export class GetStockStatsUseCaseImpl implements GetStockStatsUseCase {
    constructor(
        @Inject(STOCK_REPOSITORY) private stockRepository: StockRepository
    ) { }

    async execute(): Promise<Result<StockStatsDto, DomainError>> {
        const result = await this.stockRepository.getStockStats();

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const stats = result.value;

        // Mapper vers DTO
        const statsDto: StockStatsDto = {
            totalValue: stats.totalValue,
            totalProducts: stats.totalProducts,
            lowStockCount: stats.lowStockCount,
            outOfStockCount: stats.outOfStockCount,
            todayMovements: stats.todayMovements,
            monthlyEntries: stats.monthlyEntries,
            monthlyExits: stats.monthlyExits
        };

        return Result.ok(statsDto);
    }
}
