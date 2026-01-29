import { Inject, Injectable } from '@angular/core';
import { CreateStockMovementUseCase } from './create-stock-movement.use-case';
import { StockRepository, STOCK_REPOSITORY } from '../../../domain/repositories/stock.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError, UnauthorizedError } from '../../../../_shared/domain/errors/domain.error';
import { ApplicationContext, APPLICATION_CONTEXT } from '../../../../_shared/application/ports/application-context.port';
import { CreateStockMovementDto, StockMovementDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case CreateStockMovement
 */
@Injectable()
export class CreateStockMovementUseCaseImpl implements CreateStockMovementUseCase {
    constructor(
        @Inject(STOCK_REPOSITORY) private stockRepository: StockRepository,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(dto: CreateStockMovementDto): Promise<Result<StockMovementDto, DomainError>> {
        if (!this.context.isAuthenticated()) {
            return Result.fail(new UnauthorizedError('create stock movement'));
        }

        const userId = this.context.getUserId();

        const movement = {
            type: dto.type,
            productId: dto.productId,
            quantity: dto.quantity,
            warehouseId: dto.warehouseId,
            destinationWarehouseId: dto.destinationWarehouseId,
            documentReference: dto.documentReference,
            lotNumber: dto.lotNumber,
            serialNumber: dto.serialNumber,
            unitCost: dto.unitCost,
            reason: dto.reason,
            notes: dto.notes,
            movementDate: dto.movementDate || new Date(),
            createdBy: userId ? userId.toString() : 'system',
            isValidated: false
        };

        const result = await this.stockRepository.createMovement(movement);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const createdMovement = result.value;

        return Result.ok({
            id: createdMovement.id,
            type: createdMovement.type,
            productId: createdMovement.productId,
            quantity: createdMovement.quantity,
            warehouseId: createdMovement.warehouseId,
            destinationWarehouseId: createdMovement.destinationWarehouseId,
            documentReference: createdMovement.documentReference,
            lotNumber: createdMovement.lotNumber,
            serialNumber: createdMovement.serialNumber,
            unitCost: createdMovement.unitCost,
            reason: createdMovement.reason,
            notes: createdMovement.notes,
            movementDate: createdMovement.movementDate,
            createdAt: createdMovement.createdAt,
            createdBy: createdMovement.createdBy,
            isValidated: createdMovement.isValidated,
            validatedAt: createdMovement.validatedAt,
            validatedBy: createdMovement.validatedBy
        });
    }
}
