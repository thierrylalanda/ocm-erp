import { Inject, Injectable } from '@angular/core';
import { GetWarehousesUseCase } from './get-warehouses.use-case';
import { WarehouseRepository, WAREHOUSE_REPOSITORY } from '../../../domain/repositories/warehouse.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { WarehouseDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case GetWarehouses
 */
@Injectable()
export class GetWarehousesUseCaseImpl implements GetWarehousesUseCase {
    constructor(
        @Inject(WAREHOUSE_REPOSITORY) private warehouseRepository: WarehouseRepository
    ) { }

    async execute(): Promise<Result<WarehouseDto[], DomainError>> {
        const result = await this.warehouseRepository.getAll();

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const warehouses = result.value;

        // Mapper vers DTO
        const dtos: WarehouseDto[] = warehouses.map(w => ({
            id: w.id,
            name: w.name,
            code: w.code,
            description: w.description,
            address: w.address,
            city: w.city,
            country: w.country,
            type: w.type,
            isActive: w.isActive
        }));

        return Result.ok(dtos);
    }
}
