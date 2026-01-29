import { Inject, Injectable, InjectionToken } from '@angular/core';
import { UserRepository, USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { Result, DomainError, NotFoundError, BusinessRuleViolationError, InfrastructureError } from '../../../_shared';

/**
 * Use Case: Delete User
 * 
 * Permanently deletes a user account from the system.
 * This action cannot be undone.
 * 
 * Business Rules:
 * - Cannot delete the currently logged-in user
 * - Cannot delete the last admin user
 * - User must exist
 * 
 * @example
 * const result = await deleteUserUseCase.execute(userId, currentUserId);
 * if (result.isSuccess) {
 *   console.log('User deleted');
 * } else {
 *   console.error(result.error.message);
 * }
 */
export interface DeleteUserUseCase {
    execute(userId: number, currentUserId: number): Promise<Result<void, DomainError>>;
}

@Injectable()
export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
    ) { }

    async execute(userId: number, currentUserId: number): Promise<Result<void, DomainError>> {
        try {
            // Business Rule: Cannot delete yourself
            if (userId === currentUserId) {
                return Result.fail(
                    new BusinessRuleViolationError('Vous ne pouvez pas supprimer votre propre compte')
                );
            }

            // Check if user exists
            const user = await this.userRepository.findById({ value: userId });

            if (!user) {
                return Result.fail(new NotFoundError('Utilisateur', userId));
            }

            // TODO: Add business rule to prevent deleting last admin
            // This would require checking if user has admin role and counting other admins

            // Delete the user
            await this.userRepository.delete({ value: userId });

            return Result.ok(undefined);
        } catch (error) {
            return Result.fail(
                new InfrastructureError(
                    `Erreur lors de la suppression de l'utilisateur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`,
                    error instanceof Error ? error : undefined
                )
            );
        }
    }
}

/**
 * Injection token for DeleteUserUseCase
 */
export const DELETE_USER_USE_CASE = new InjectionToken<DeleteUserUseCase>('DeleteUserUseCase');
