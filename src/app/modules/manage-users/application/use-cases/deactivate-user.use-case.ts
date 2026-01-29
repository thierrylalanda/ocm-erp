import { Inject, Injectable, InjectionToken } from '@angular/core';
import { UserRepository, USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { Result, DomainError, NotFoundError, InfrastructureError } from '../../../_shared';

/**
 * Use Case: Deactivate User
 * 
 * Deactivates a user account, preventing them from logging in.
 * The user data is preserved but access is revoked.
 * 
 * @example
 * const result = await deactivateUserUseCase.execute(userId);
 * if (result.isSuccess) {
 *   console.log('User deactivated');
 * } else {
 *   console.error(result.error.message);
 * }
 */
export interface DeactivateUserUseCase {
    execute(userId: number): Promise<Result<void, DomainError>>;
}

@Injectable()
export class DeactivateUserUseCaseImpl implements DeactivateUserUseCase {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
    ) { }

    async execute(userId: number): Promise<Result<void, DomainError>> {
        try {
            // Check if user exists
            const user = await this.userRepository.findById({ value: userId });

            if (!user) {
                return Result.fail(new NotFoundError('Utilisateur', userId));
            }

            // Deactivate the user
            await this.userRepository.deactivateUser({ value: userId });

            return Result.ok(undefined);
        } catch (error) {
            return Result.fail(
                new InfrastructureError(
                    `Erreur lors de la désactivation de l'utilisateur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`,
                    error instanceof Error ? error : undefined
                )
            );
        }
    }
}

/**
 * Injection token for DeactivateUserUseCase
 */
export const DEACTIVATE_USER_USE_CASE = new InjectionToken<DeactivateUserUseCase>('DeactivateUserUseCase');
