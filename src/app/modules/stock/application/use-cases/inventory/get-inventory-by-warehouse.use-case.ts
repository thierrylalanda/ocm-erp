import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { InventoryDto } from '../../dto/stock.dto';

/**
 * Use case pour obtenir l'inventaire par magasin
 */
export interface GetInventoryByWarehouseUseCase {
    execute(warehouseId: string): Promise<Result<InventoryDto[], DomainError>>;
}

export const GET_INVENTORY_BY_WAREHOUSE_USE_CASE = new InjectionToken<GetInventoryByWarehouseUseCase>('GetInventoryByWarehouseUseCase');
