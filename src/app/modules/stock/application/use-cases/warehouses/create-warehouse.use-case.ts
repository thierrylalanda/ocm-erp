import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { WarehouseDto } from '../../dto/stock.dto';

/**
 * Use case pour créer un magasin
 */
export interface CreateWarehouseUseCase {
    execute(dto: Omit<WarehouseDto, 'id'>): Promise<Result<WarehouseDto, DomainError>>;
}

export const CREATE_WAREHOUSE_USE_CASE = new InjectionToken<CreateWarehouseUseCase>('CreateWarehouseUseCase');
