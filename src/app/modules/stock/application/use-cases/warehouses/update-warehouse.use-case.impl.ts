import { Inject, Injectable } from '@angular/core';
import { UpdateWarehouseUseCase } from './update-warehouse.use-case';
import { WarehouseRepository, WAREHOUSE_REPOSITORY } from '../../../domain/repositories/warehouse.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { WarehouseDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case UpdateWarehouse
 */
@Injectable()
export class UpdateWarehouseUseCaseImpl implements UpdateWarehouseUseCase {
    constructor(
        @Inject(WAREHOUSE_REPOSITORY) private warehouseRepository: WarehouseRepository
    ) { }

    async execute(id: string, dto: Partial<WarehouseDto>): Promise<Result<WarehouseDto, DomainError>> {
        const result = await this.warehouseRepository.update(id, dto);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const updated = result.value;

        return Result.ok({
            id: updated.id,
            name: updated.name,
            code: updated.code,
            description: updated.description,
            address: updated.address,
            city: updated.city,
            country: updated.country,
            type: updated.type,
            isActive: updated.isActive
        });
    }
}
