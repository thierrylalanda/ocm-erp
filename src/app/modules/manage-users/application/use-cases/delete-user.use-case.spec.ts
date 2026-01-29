import { DeleteUserUseCaseImpl } from './delete-user.use-case';
import { UserRepository } from '../../domain/repositories/user.repository';
import { NotFoundError, DomainError, BusinessRuleViolationError } from '../../../_shared';
import { Result } from '../../../_shared/domain/types/result.type';

describe('DeleteUserUseCase', () => {
    let useCase: DeleteUserUseCaseImpl;
    let mockRepository: jasmine.SpyObj<UserRepository>;

    beforeEach(() => {
        mockRepository = jasmine.createSpyObj('UserRepository', ['findById', 'delete', 'deleteUser']);
        // deleteUser method might not exist in interface but was used in previous spec? 
        // Checking interface: delete(id) exists.
        // I will use 'delete' in spy.
        useCase = new DeleteUserUseCaseImpl(mockRepository);
    });

    describe('execute', () => {
        it('should delete user successfully', async () => {
            const userId = 2; // Different from currentUserId
            const currentUserId = 1;
            const mockUser = {
                id: userId,
                nomPrenom: 'John Doe'
            };

            mockRepository.findById.and.returnValue(Promise.resolve(mockUser as any));
            mockRepository.delete.and.returnValue(Promise.resolve());

            const result = await useCase.execute(userId, currentUserId);

            expect(result.isSuccess).toBe(true);
            expect(mockRepository.findById).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
            expect(mockRepository.delete).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
        });

        it('should fail if deleting self', async () => {
            const userId = 1;
            const currentUserId = 1;

            const result = await useCase.execute(userId, currentUserId);

            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(BusinessRuleViolationError);
            expect(mockRepository.delete).not.toHaveBeenCalled();
        });

        it('should fail when user not found', async () => {
            const userId = 999;
            const currentUserId = 1;
            mockRepository.findById.and.returnValue(Promise.resolve(null));

            const result = await useCase.execute(userId, currentUserId);

            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(NotFoundError);
            expect(mockRepository.delete).not.toHaveBeenCalled();
        });
    });
});
