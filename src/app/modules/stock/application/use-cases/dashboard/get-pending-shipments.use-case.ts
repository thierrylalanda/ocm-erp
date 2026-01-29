import { InjectionToken, Inject, Injectable } from '@angular/core';
import { DomainError, InfrastructureError } from '../../../../_shared/domain/errors/domain.error';
import { Result } from '../../../../_shared/domain/types/result.type';
import { PendingShipmentDto } from '../../dto/stock.dto';
import { SHIPMENT_REPOSITORY, ShipmentRepository } from '../../../domain/repositories/shipment.repository';

export interface GetPendingShipmentsUseCase {
    execute(limit?: number): Promise<Result<PendingShipmentDto[], DomainError>>;
}

export const GET_PENDING_SHIPMENTS_USE_CASE = new InjectionToken<GetPendingShipmentsUseCase>('GetPendingShipmentsUseCase');

@Injectable()
export class GetPendingShipmentsUseCaseImpl implements GetPendingShipmentsUseCase {
    constructor(
        @Inject(SHIPMENT_REPOSITORY) private shipmentRepository: ShipmentRepository
    ) { }

    async execute(limit: number = 5): Promise<Result<PendingShipmentDto[], DomainError>> {
        try {
            const shipments = await this.shipmentRepository.getPendingShipments(limit);
            return Result.ok(shipments);
        } catch (error: any) {
            return Result.fail(new InfrastructureError('GET_PENDING_SHIPMENTS_ERROR: ' + (error.message || 'Erreur inconnue')));
        }
    }
}
