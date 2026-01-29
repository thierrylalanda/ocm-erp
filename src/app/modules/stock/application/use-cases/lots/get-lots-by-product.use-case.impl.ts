import { Inject, Injectable } from '@angular/core';
import { GetLotsByProductUseCase } from './get-lots-by-product.use-case';
import { LotRepository, LOT_REPOSITORY } from '../../../domain/repositories/lot.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { LotDto } from '../../dto/lot.dto';

/**
 * Implémentation du use case GetLotsByProduct
 */
@Injectable()
export class GetLotsByProductUseCaseImpl implements GetLotsByProductUseCase {
    constructor(
        @Inject(LOT_REPOSITORY) private lotRepository: LotRepository
    ) { }

    async execute(productId: string): Promise<Result<LotDto[], DomainError>> {
        const result = await this.lotRepository.findByProductId(productId);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const lots = result.value;

        // Mapper vers DTOs
        const lotDtos: LotDto[] = lots.map(lot => ({
            id: lot.id,
            lotNumber: lot.lotNumber,
            productId: lot.productId,
            manufacturingDate: lot.manufacturingDate,
            expirationDate: lot.expirationDate,
            alertDate: lot.alertDate,
            initialQuantity: lot.initialQuantity,
            currentQuantity: lot.currentQuantity,
            status: lot.status,
            supplierId: lot.supplierId,
            receptionId: lot.receptionId,
            notes: lot.notes,
            createdAt: lot.createdAt,
            updatedAt: lot.updatedAt,
            createdBy: lot.createdBy
        }));

        return Result.ok(lotDtos);
    }
}
