import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { WarehouseDto } from '../../dto/stock.dto';

/**
 * Use case pour obtenir les magasins
 */
export interface GetWarehousesUseCase {
    execute(): Promise<Result<WarehouseDto[], DomainError>>;
}

export const GET_WAREHOUSES_USE_CASE = new InjectionToken<GetWarehousesUseCase>('GetWarehousesUseCase');
