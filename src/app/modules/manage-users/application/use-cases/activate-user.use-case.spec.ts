import { ActivateUserUseCaseImpl } from './activate-user.use-case';
import { UserRepository } from '../../domain/repositories/user.repository';
import { NotFoundError, DomainError } from '../../../_shared';
import { Result } from '../../../_shared/domain/types/result.type';

describe('ActivateUserUseCase', () => {
    let useCase: ActivateUserUseCaseImpl;
    let mockRepository: jasmine.SpyObj<UserRepository>;

    beforeEach(() => {
        mockRepository = jasmine.createSpyObj('UserRepository', ['findById', 'activateUser']);
        useCase = new ActivateUserUseCaseImpl(mockRepository);
    });

    describe('execute', () => {
        it('should activate user successfully', async () => {
            const userId = 1;
            const mockUser = {
                id: userId,
                nomPrenom: 'John Doe',
                email: 'john@example.com',
                statut: 'INACTIF'
            };

            mockRepository.findById.and.returnValue(Promise.resolve(mockUser as any));
            mockRepository.activateUser.and.returnValue(Promise.resolve({ ...mockUser, statut: 'ACTIF' } as any));

            const result = await useCase.execute(userId);

            expect(result.isSuccess).toBe(true);
            expect(mockRepository.findById).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
            expect(mockRepository.activateUser).toHaveBeenCalledWith(jasmine.objectContaining({ value: userId }));
        });

        it('should fail when user not found', async () => {
            const userId = 999;
            mockRepository.findById.and.returnValue(Promise.resolve(null));

            const result = await useCase.execute(userId);

            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(NotFoundError);
            expect((result.error as any).message).toContain('999');
            expect(mockRepository.activateUser).not.toHaveBeenCalled();
        });
    });
});
