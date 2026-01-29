import { Inject, Injectable } from '@angular/core';
import { GetExpiringLotsUseCase } from './get-expiring-lots.use-case';
import { LotRepository, LOT_REPOSITORY } from '../../../domain/repositories/lot.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { LotDto } from '../../dto/lot.dto';

/**
 * Implémentation du use case GetExpiringLots
 */
@Injectable()
export class GetExpiringLotsUseCaseImpl implements GetExpiringLotsUseCase {
    constructor(
        @Inject(LOT_REPOSITORY) private lotRepository: LotRepository
    ) { }

    async execute(daysBeforeExpiration: number = 30): Promise<Result<LotDto[], DomainError>> {
        const result = await this.lotRepository.getExpiringLots(daysBeforeExpiration);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const lots = result.value;

        // Mapper vers DTOs et trier par date de péremption
        const lotDtos: LotDto[] = lots
            .map(lot => ({
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
            }))
            .sort((a, b) => {
                if (!a.expirationDate) return 1;
                if (!b.expirationDate) return -1;
                return new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();
            });

        return Result.ok(lotDtos);
    }
}
