import { TestBed } from '@angular/core/testing';
import { CreateStockMovementUseCaseImpl } from './create-stock-movement.use-case.impl';
import { STOCK_REPOSITORY, StockRepository } from '../../../domain/repositories/stock.repository';
import { APPLICATION_CONTEXT, ApplicationContext } from '../../../../_shared/application/ports/application-context.port';
import { Result } from '../../../../_shared/domain/types/result.type';
import { CreateStockMovementDto } from '../../dto/stock.dto';
import { StockMovement, StockMovementType } from '../../../domain/entities/stock-movement.entity';
import { UnauthorizedError } from '../../../../_shared/domain/errors/domain.error';

describe('CreateStockMovementUseCaseImpl', () => {
    let useCase: CreateStockMovementUseCaseImpl;
    let mockStockRepository: jasmine.SpyObj<StockRepository>;
    let mockApplicationContext: jasmine.SpyObj<ApplicationContext>;

    beforeEach(() => {
        mockStockRepository = jasmine.createSpyObj('StockRepository', ['createMovement']);
        mockApplicationContext = jasmine.createSpyObj('ApplicationContext', ['isAuthenticated', 'getUserId']);

        TestBed.configureTestingModule({
            providers: [
                CreateStockMovementUseCaseImpl,
                { provide: STOCK_REPOSITORY, useValue: mockStockRepository },
                { provide: APPLICATION_CONTEXT, useValue: mockApplicationContext }
            ]
        });

        useCase = TestBed.inject(CreateStockMovementUseCaseImpl);
    });

    it('should be created', () => {
        expect(useCase).toBeTruthy();
    });

    it('should return error if user is not authenticated', async () => {
        mockApplicationContext.isAuthenticated.and.returnValue(false);
        const dto: CreateStockMovementDto = {
            productId: '1',
            warehouseId: '1',
            quantity: 10,
            type: StockMovementType.ENTRY
        };

        const result = await useCase.execute(dto);

        expect(result.isFailure).toBeTrue();
        expect(result.error).toBeInstanceOf(UnauthorizedError);
        expect(mockStockRepository.createMovement).not.toHaveBeenCalled();
    });

    it('should create movement successfully when authenticated', async () => {
        mockApplicationContext.isAuthenticated.and.returnValue(true);
        mockApplicationContext.getUserId.and.returnValue(123);
        const date = new Date();

        const dto: CreateStockMovementDto = {
            productId: 'prod1',
            warehouseId: 'wh1',
            quantity: 10,
            type: StockMovementType.ENTRY,
            reason: 'Test'
        };

        const createdMovement: StockMovement = {
            id: 'mov1',
            ...dto,
            movementDate: date,
            createdAt: date,
            createdBy: '123',
            isValidated: false
        };

        mockStockRepository.createMovement.and.returnValue(Promise.resolve(Result.ok(createdMovement)));

        const result = await useCase.execute(dto);

        expect(result.isSuccess).toBeTrue();
        expect(result.value.id).toBe('mov1');
        expect(result.value.createdBy).toBe('123');
        expect(mockStockRepository.createMovement).toHaveBeenCalledWith(jasmine.objectContaining({
            productId: 'prod1',
            createdBy: '123'
        }));
    });
});
