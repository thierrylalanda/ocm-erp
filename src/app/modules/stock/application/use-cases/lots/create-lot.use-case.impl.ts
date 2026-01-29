import { Inject, Injectable } from '@angular/core';
import { CreateLotUseCase } from './create-lot.use-case';
import { LotRepository, LOT_REPOSITORY } from '../../../domain/repositories/lot.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { CreateLotDto, LotDto } from '../../dto/lot.dto';
import { LotStatus } from '../../../domain/entities/lot-status.enum';

/**
 * Implémentation du use case CreateLot
 */
@Injectable()
export class CreateLotUseCaseImpl implements CreateLotUseCase {
    constructor(
        @Inject(LOT_REPOSITORY) private lotRepository: LotRepository
    ) { }

    async execute(dto: CreateLotDto): Promise<Result<LotDto, DomainError>> {
        // Déterminer le statut initial du lot
        const status = this.determineLotStatus(dto.expirationDate, dto.alertDate);

        const createLot = {
            ...dto,
            status
        };

        const result = await this.lotRepository.create(createLot);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const lot = result.value;

        // Mapper vers DTO
        const lotDto: LotDto = {
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
        };

        return Result.ok(lotDto);
    }

    private determineLotStatus(expirationDate?: Date, alertDate?: Date): LotStatus {
        if (!expirationDate) {
            return LotStatus.ACTIVE;
        }

        const now = new Date();

        if (expirationDate < now) {
            return LotStatus.EXPIRED;
        }

        if (alertDate && alertDate < now) {
            return LotStatus.ALERT;
        }

        return LotStatus.ACTIVE;
    }
}
