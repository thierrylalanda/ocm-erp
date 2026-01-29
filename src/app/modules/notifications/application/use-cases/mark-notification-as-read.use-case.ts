import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, NotFoundError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { NotificationDto } from '../../domain/dto/notification.dto';
import { NotificationService } from '../services/notification.service';

/**
 * Interface du Use Case MarkNotificationAsRead
 */
export interface MarkNotificationAsReadUseCase {
    execute(notificationId: number): Promise<Result<NotificationDto, DomainError>>;
}

/**
 * Token d'injection pour MarkNotificationAsReadUseCase
 */
export const MARK_NOTIFICATION_AS_READ_USE_CASE = 'MARK_NOTIFICATION_AS_READ_USE_CASE';

/**
 * Implémentation du Use Case MarkNotificationAsRead
 * 
 * Responsabilités:
 * - Marquer une notification comme lue
 * - Retourner un Result avec la notification mise à jour ou une erreur
 */
@Injectable()
export class MarkNotificationAsReadUseCaseImpl implements MarkNotificationAsReadUseCase {
    constructor(
        private notificationService: NotificationService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(notificationId: number): Promise<Result<NotificationDto, DomainError>> {
        try {
            // 1. Validation de l'ID
            if (!notificationId || notificationId <= 0) {
                return Result.fail(
                    new NotFoundError('Notification', notificationId)
                );
            }

            // 2. Marquer comme lue
            const notification = await this.notificationService
                .markAsRead(notificationId)
                .toPromise();

            if (!notification) {
                return Result.fail(
                    new InfrastructureError('Erreur lors du marquage de la notification')
                );
            }

            // 3. Retourner le résultat
            return Result.ok(notification);

        } catch (error: any) {
            console.error('MarkNotificationAsReadUseCase error:', error);

            // Si erreur 404, notification introuvable
            if (error.status === 404) {
                return Result.fail(
                    new NotFoundError('Notification', notificationId)
                );
            }

            return Result.fail(
                new InfrastructureError(
                    error.message || 'Erreur lors du marquage de la notification'
                )
            );
        }
    }
}
