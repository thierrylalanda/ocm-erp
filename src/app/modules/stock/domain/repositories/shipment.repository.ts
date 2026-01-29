import { PendingShipmentDto } from '../../application/dto/stock.dto';
import { InjectionToken } from '@angular/core';

export interface ShipmentRepository {
    getPendingShipments(limit: number): Promise<PendingShipmentDto[]>;
}

export const SHIPMENT_REPOSITORY = new InjectionToken<ShipmentRepository>('ShipmentRepository');
