import { DeactivateUserUseCaseImpl } from './deactivate-user.use-case';
import { UserRepository } from '../../domain/repositories/user.repository';
import { NotFoundError, DomainError } from '../../../_shared';
import { Result } from '../../../_shared/domain/types/result.type';

describe('DeactivateUserUseCase', () => {
    let useCase: DeactivateUserUseCaseImpl;
    let mockRepository: jasmine.SpyObj<UserRepository>;

    beforeEach(() => {
        mockRepository = jasmine.createSpyObj('UserRepository', ['findById', 'deactivateUser']);
        useCase = new DeactivateUserUseCaseImpl(mockRepository);
    });

    describe('execute', () => {
        it('should deactivate user successfully', async () => {
            const userId = 1;
            const mockUser = {
                id: userId,
                nomPrenom: 'John Doe',
                email: 'john@example.com',
                statut: 'ACTIF'
            };

            mockRepository.findById.and.returnValue(Promise.resolve(mockUser as any));
            mockRepository.deactivateUser.and.returnValue(Promise.resolve({ ...mockUser, statut: 'INACTIF' } as any));

            const result = await useCase.execute(userId);

            expect(result.isSuccess).toBe(true);
            expect(mockRepository.findById).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
            expect(mockRepository.deactivateUser).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
        });

        it('should fail when user not found', async () => {
            const userId = 999;
            mockRepository.findById.and.returnValue(Promise.resolve(null));

            const result = await useCase.execute(userId);

            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(NotFoundError);
            expect(mockRepository.deactivateUser).not.toHaveBeenCalled();
        });
    });
});
