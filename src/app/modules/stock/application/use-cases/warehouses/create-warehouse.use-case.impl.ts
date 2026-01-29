import { Inject, Injectable } from '@angular/core';
import { CreateWarehouseUseCase } from './create-warehouse.use-case';
import { WarehouseRepository, WAREHOUSE_REPOSITORY } from '../../../domain/repositories/warehouse.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { WarehouseDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case CreateWarehouse
 */
@Injectable()
export class CreateWarehouseUseCaseImpl implements CreateWarehouseUseCase {
    constructor(
        @Inject(WAREHOUSE_REPOSITORY) private warehouseRepository: WarehouseRepository
    ) { }

    async execute(dto: Omit<WarehouseDto, 'id'>): Promise<Result<WarehouseDto, DomainError>> {
        const warehouse = {
            name: dto.name,
            code: dto.code,
            description: dto.description,
            address: dto.address,
            city: dto.city,
            country: dto.country,
            type: dto.type,
            isActive: dto.isActive
        };

        const result = await this.warehouseRepository.create(warehouse);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const created = result.value;

        return Result.ok({
            id: created.id,
            name: created.name,
            code: created.code,
            description: created.description,
            address: created.address,
            city: created.city,
            country: created.country,
            type: created.type,
            isActive: created.isActive
        });
    }
}
