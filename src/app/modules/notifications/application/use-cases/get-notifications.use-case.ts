import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, ValidationError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { NotificationDto, NotificationFiltersDto, NotificationsPagedResponseDto } from '../../domain/dto/notification.dto';
import { NotificationService } from '../services/notification.service';

/**
 * Interface du Use Case GetNotifications
 */
export interface GetNotificationsUseCase {
    execute(filters?: NotificationFiltersDto): Promise<Result<NotificationsPagedResponseDto, DomainError>>;
}

/**
 * Token d'injection pour GetNotificationsUseCase
 */
export const GET_NOTIFICATIONS_USE_CASE = 'GET_NOTIFICATIONS_USE_CASE';

/**
 * Implémentation du Use Case GetNotifications
 * 
 * Responsabilités:
 * - Valider les paramètres de pagination
 * - Récupérer les notifications de l'utilisateur courant
 * - Retourner un Result avec les notifications paginées ou une erreur
 */
@Injectable()
export class GetNotificationsUseCaseImpl implements GetNotificationsUseCase {
    constructor(
        private notificationService: NotificationService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(filters: NotificationFiltersDto = {}): Promise<Result<NotificationsPagedResponseDto, DomainError>> {
        try {
            // 1. Validation des paramètres de pagination
            if (filters.page !== undefined && filters.page < 0) {
                return Result.fail(
                    new ValidationError('Le numéro de page doit être positif')
                );
            }

            if (filters.size !== undefined && (filters.size <= 0 || filters.size > 100)) {
                return Result.fail(
                    new ValidationError('La taille de page doit être entre 1 et 100')
                );
            }

            // 2. Définir les valeurs par défaut
            const finalFilters: NotificationFiltersDto = {
                page: filters.page ?? 0,
                size: filters.size ?? 20,
                sort: filters.sort ?? 'nsDateCreation,desc',
                ...filters
            };

            // 3. Récupérer les notifications
            const notifications = await this.notificationService
                .getNotifications(finalFilters)
                .toPromise();

            if (!notifications) {
                return Result.fail(
                    new InfrastructureError('Erreur lors de la récupération des notifications')
                );
            }

            // 4. Retourner le résultat
            return Result.ok(notifications);

        } catch (error: any) {
            console.error('GetNotificationsUseCase error:', error);

            return Result.fail(
                new InfrastructureError(
                    error.message || 'Erreur lors de la récupération des notifications'
                )
            );
        }
    }
}
