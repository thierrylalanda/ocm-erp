import { ShipmentRepository } from '../../domain/repositories/shipment.repository';
import { PendingShipmentDto } from '../../application/dto/stock.dto';
import { ShipmentStatus } from '../../domain/entities/shipment-status.enum';

export class MockShipmentRepository implements ShipmentRepository {
    async getPendingShipments(limit: number): Promise<PendingShipmentDto[]> {
        return [
            {
                id: '1',
                reference: 'EXP-2024-001',
                customerName: 'Client A',
                expectedDate: new Date('2024-02-02'),
                itemsCount: 4,
                totalAmount: 12000,
                status: ShipmentStatus.PREPARING,
                createdAt: new Date('2024-01-27')
            },
            {
                id: '2',
                reference: 'EXP-2024-002',
                customerName: 'Client B',
                expectedDate: new Date('2024-02-04'),
                itemsCount: 2,
                totalAmount: 5500,
                status: ShipmentStatus.READY,
                createdAt: new Date('2024-01-28')
            },
            {
                id: '3',
                reference: 'EXP-2024-003',
                customerName: 'Global Corp',
                expectedDate: new Date('2024-02-06'),
                itemsCount: 8,
                totalAmount: 24000,
                status: ShipmentStatus.PENDING,
                createdAt: new Date('2024-01-29')
            }
        ].slice(0, limit);
    }
}
