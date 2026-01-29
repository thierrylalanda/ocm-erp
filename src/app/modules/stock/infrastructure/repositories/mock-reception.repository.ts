import { ReceptionRepository } from '../../domain/repositories/reception.repository';
import { PendingReceptionDto } from '../../application/dto/stock.dto';
import { ReceptionStatus } from '../../domain/entities/reception-status.enum';

export class MockReceptionRepository implements ReceptionRepository {
    async getPendingReceptions(limit: number): Promise<PendingReceptionDto[]> {
        return [
            {
                id: '1',
                reference: 'REC-2024-001',
                supplierName: 'Fournisseur A',
                expectedDate: new Date('2024-02-01'),
                itemsCount: 5,
                totalAmount: 15000,
                status: ReceptionStatus.PENDING,
                createdAt: new Date('2024-01-25')
            },
            {
                id: '2',
                reference: 'REC-2024-002',
                supplierName: 'Fournisseur B',
                expectedDate: new Date('2024-02-03'),
                itemsCount: 3,
                totalAmount: 8500,
                status: ReceptionStatus.PARTIAL,
                createdAt: new Date('2024-01-26')
            },
            {
                id: '3',
                reference: 'REC-2024-003',
                supplierName: 'Tech Solutions Inc.',
                expectedDate: new Date('2024-02-05'),
                itemsCount: 12,
                totalAmount: 45000,
                status: ReceptionStatus.PENDING,
                createdAt: new Date('2024-01-28')
            }
        ].slice(0, limit);
    }
}
