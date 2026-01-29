import { Inject, Injectable, InjectionToken } from '@angular/core';
import { UserRepository, USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { Result, DomainError, NotFoundError, InfrastructureError } from '../../../_shared';

/**
 * Use Case: Activate User
 * 
 * Activates a user account, allowing them to log in and use the system.
 * 
 * @example
 * const result = await activateUserUseCase.execute(userId);
 * if (result.isSuccess) {
 *   console.log('User activated');
 * } else {
 *   console.error(result.error.message);
 * }
 */
export interface ActivateUserUseCase {
    execute(userId: number): Promise<Result<void, DomainError>>;
}

@Injectable()
export class ActivateUserUseCaseImpl implements ActivateUserUseCase {
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

            // Activate the user
            await this.userRepository.activateUser({ value: userId });

            return Result.ok(undefined);
        } catch (error) {
            return Result.fail(
                new InfrastructureError(
                    `Erreur lors de l'activation de l'utilisateur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`,
                    error instanceof Error ? error : undefined
                )
            );
        }
    }
}

/**
 * Injection token for ActivateUserUseCase
 */
export const ACTIVATE_USER_USE_CASE = new InjectionToken<ActivateUserUseCase>('ActivateUserUseCase');
