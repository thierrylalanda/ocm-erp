import { Inject, Injectable } from '@angular/core';
import { DeleteWarehouseUseCase } from './delete-warehouse.use-case';
import { WarehouseRepository, WAREHOUSE_REPOSITORY } from '../../../domain/repositories/warehouse.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';

/**
 * Implémentation du use case DeleteWarehouse
 */
@Injectable()
export class DeleteWarehouseUseCaseImpl implements DeleteWarehouseUseCase {
    constructor(
        @Inject(WAREHOUSE_REPOSITORY) private warehouseRepository: WarehouseRepository
    ) { }

    async execute(id: string): Promise<Result<void, DomainError>> {
        return this.warehouseRepository.delete(id);
    }
}
