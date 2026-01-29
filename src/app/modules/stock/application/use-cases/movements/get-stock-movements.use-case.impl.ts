import { Inject, Injectable } from '@angular/core';
import { GetStockMovementsUseCase, GetStockMovementsFilter } from './get-stock-movements.use-case';
import { StockRepository, STOCK_REPOSITORY } from '../../../domain/repositories/stock.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockMovementDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case GetStockMovements
 */
@Injectable()
export class GetStockMovementsUseCaseImpl implements GetStockMovementsUseCase {
    constructor(
        @Inject(STOCK_REPOSITORY) private stockRepository: StockRepository
    ) { }

    async execute(filter?: GetStockMovementsFilter): Promise<Result<StockMovementDto[], DomainError>> {
        const result = await this.stockRepository.getMovements(filter);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const movements = result.value;

        // Mapper vers DTO
        const dtos: StockMovementDto[] = movements.map(m => ({
            id: m.id,
            type: m.type,
            productId: m.productId,
            quantity: m.quantity,
            warehouseId: m.warehouseId,
            destinationWarehouseId: m.destinationWarehouseId,
            documentReference: m.documentReference,
            lotNumber: m.lotNumber,
            serialNumber: m.serialNumber,
            unitCost: m.unitCost,
            reason: m.reason,
            notes: m.notes,
            movementDate: m.movementDate,
            createdAt: m.createdAt,
            createdBy: m.createdBy,
            isValidated: m.isValidated,
            validatedAt: m.validatedAt,
            validatedBy: m.validatedBy
        }));

        return Result.ok(dtos);
    }
}
