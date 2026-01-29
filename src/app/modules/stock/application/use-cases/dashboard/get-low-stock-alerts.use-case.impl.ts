import { Inject, Injectable } from '@angular/core';
import { GetLowStockAlertsUseCase } from './get-low-stock-alerts.use-case';
import { StockRepository, STOCK_REPOSITORY } from '../../../domain/repositories/stock.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { InventoryDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case GetLowStockAlerts
 */
@Injectable()
export class GetLowStockAlertsUseCaseImpl implements GetLowStockAlertsUseCase {
    constructor(
        @Inject(STOCK_REPOSITORY) private stockRepository: StockRepository
    ) { }

    async execute(): Promise<Result<InventoryDto[], DomainError>> {
        const result = await this.stockRepository.getLowStockProducts();

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const inventory = result.value;

        // Mappage vers DTO
        const dtos: InventoryDto[] = inventory.map(i => ({
            id: i.id,
            productId: i.productId,
            productName: i.productName || 'Unknown Product',
            productReference: i.productReference || '-',
            warehouseId: i.warehouseId,
            warehouseName: i.warehouseName || 'Unknown Warehouse',
            quantity: i.quantity,
            reservedQuantity: i.reservedQuantity,
            availableQuantity: i.availableQuantity,
            stockValue: i.stockValue,
            averageCost: i.averageCost,
            lastMovementDate: i.lastMovementDate,
            updatedAt: i.updatedAt
        }));

        return Result.ok(dtos);
    }
}
