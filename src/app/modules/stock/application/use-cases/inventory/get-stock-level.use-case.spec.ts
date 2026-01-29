import { TestBed } from '@angular/core/testing';
import { GetStockLevelUseCaseImpl } from './get-stock-level.use-case.impl';
import { STOCK_REPOSITORY, StockRepository } from '../../../domain/repositories/stock.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { InfrastructureError } from '../../../../_shared/domain/errors/domain.error';
import { Inventory } from '../../../domain/entities/inventory.entity';

describe('GetStockLevelUseCaseImpl', () => {
    let useCase: GetStockLevelUseCaseImpl;
    let mockStockRepository: jasmine.SpyObj<StockRepository>;

    beforeEach(() => {
        mockStockRepository = jasmine.createSpyObj('StockRepository', ['getStockLevel']);

        TestBed.configureTestingModule({
            providers: [
                GetStockLevelUseCaseImpl,
                { provide: STOCK_REPOSITORY, useValue: mockStockRepository }
            ]
        });

        useCase = TestBed.inject(GetStockLevelUseCaseImpl);
    });

    it('should be created', () => {
        expect(useCase).toBeTruthy();
    });

    it('should return mapped inventory dtos on success', async () => {
        const mockDate = new Date();
        const mockInventory: Inventory[] = [{
            id: '1',
            productId: 'prod1',
            productName: 'Product 1',
            productReference: 'REF1',
            warehouseId: 'wh1',
            warehouseName: 'Warehouse 1',
            quantity: 10,
            reservedQuantity: 2,
            availableQuantity: 8,
            stockValue: 100,
            averageCost: 10,
            lastMovementDate: mockDate,
            updatedAt: mockDate
        }];

        mockStockRepository.getStockLevel.and.returnValue(Promise.resolve(Result.ok(mockInventory)));

        const result = await useCase.execute();

        expect(result.isSuccess).toBeTrue();
        expect(result.value.length).toBe(1);
        expect(result.value[0].productName).toBe('Product 1');
        expect(result.value[0].availableQuantity).toBe(8);
        expect(mockStockRepository.getStockLevel).toHaveBeenCalled();
    });

    it('should propagate error on failure', async () => {
        const error = new InfrastructureError('Failed');
        mockStockRepository.getStockLevel.and.returnValue(Promise.resolve(Result.fail(error)));

        const result = await useCase.execute();

        expect(result.isFailure).toBeTrue();
        expect(result.error).toEqual(error);
    });
});
