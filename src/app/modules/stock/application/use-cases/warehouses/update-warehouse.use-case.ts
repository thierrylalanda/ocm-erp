import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { WarehouseDto } from '../../dto/stock.dto';

/**
 * Use case pour mettre à jour un magasin
 */
export interface UpdateWarehouseUseCase {
    execute(id: string, dto: Partial<WarehouseDto>): Promise<Result<WarehouseDto, DomainError>>;
}

export const UPDATE_WAREHOUSE_USE_CASE = new InjectionToken<UpdateWarehouseUseCase>('UpdateWarehouseUseCase');
