import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, NotFoundError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { NotificationService } from '../services/notification.service';

/**
 * Interface du Use Case DeleteNotification
 */
export interface DeleteNotificationUseCase {
    execute(notificationId: number): Promise<Result<void, DomainError>>;
}

/**
 * Token d'injection pour DeleteNotificationUseCase
 */
export const DELETE_NOTIFICATION_USE_CASE = 'DELETE_NOTIFICATION_USE_CASE';

/**
 * Implémentation du Use Case DeleteNotification
 * 
 * Responsabilités:
 * - Supprimer une notification
 * - Retourner un Result avec succès ou une erreur
 */
@Injectable()
export class DeleteNotificationUseCaseImpl implements DeleteNotificationUseCase {
    constructor(
        private notificationService: NotificationService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(notificationId: number): Promise<Result<void, DomainError>> {
        try {
            // 1. Validation de l'ID
            if (!notificationId || notificationId <= 0) {
                return Result.fail(
                    new NotFoundError('Notification', notificationId)
                );
            }

            // 2. Supprimer la notification
            await this.notificationService
                .deleteNotification(notificationId)
                .toPromise();

            // 3. Retourner le succès
            return Result.ok(undefined);

        } catch (error: any) {
            console.error('DeleteNotificationUseCase error:', error);

            // Si erreur 404, notification introuvable
            if (error.status === 404) {
                return Result.fail(
                    new NotFoundError('Notification', notificationId)
                );
            }

            return Result.fail(
                new InfrastructureError(
                    error.message || 'Erreur lors de la suppression de la notification'
                )
            );
        }
    }
}
