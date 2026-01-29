import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';

/**
 * Use case pour supprimer un magasin
 */
export interface DeleteWarehouseUseCase {
    execute(id: string): Promise<Result<void, DomainError>>;
}

export const DELETE_WAREHOUSE_USE_CASE = new InjectionToken<DeleteWarehouseUseCase>('DeleteWarehouseUseCase');
