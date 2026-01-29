import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockMovementDto, CreateStockMovementDto } from '../../dto/stock.dto';

/**
 * Use case pour créer un mouvement de stock
 */
export interface CreateStockMovementUseCase {
    execute(dto: CreateStockMovementDto): Promise<Result<StockMovementDto, DomainError>>;
}

export const CREATE_STOCK_MOVEMENT_USE_CASE = new InjectionToken<CreateStockMovementUseCase>('CreateStockMovementUseCase');
