import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, NotFoundError, BusinessRuleViolationError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { SiteService } from '../services/site.service';

/**
 * Interface du Use Case DeleteSite
 */
export interface DeleteSiteUseCase {
    execute(id: number): Promise<Result<void, DomainError>>;
}

/**
 * Token d'injection pour DeleteSiteUseCase
 */
export const DELETE_SITE_USE_CASE = 'DELETE_SITE_USE_CASE';

/**
 * Implémentation du Use Case DeleteSite
 * 
 * Responsabilités:
 * - Vérifier que le site existe
 * - Vérifier les règles métier (site peut être supprimé)
 * - Supprimer le site via le service
 * - Retourner un Result avec succès ou une erreur
 */
@Injectable()
export class DeleteSiteUseCaseImpl implements DeleteSiteUseCase {
    constructor(
        private siteService: SiteService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(id: number): Promise<Result<void, DomainError>> {
        try {
            // 1. Vérifier que le site existe
            const site = await this.siteService.getSite(id).toPromise();

            if (!site) {
                return Result.fail(
                    new NotFoundError('Site', id)
                );
            }

            // 2. Règle métier: Vérifier si le site peut être supprimé
            // (Par exemple, ne pas supprimer un site avec des employés actifs)
            // Cette logique dépend des règles métier de votre application

            // 3. Supprimer le site
            await this.siteService.deleteSite(id).toPromise();

            // 4. Retourner le succès
            return Result.ok(undefined);

        } catch (error: any) {
            console.error('DeleteSiteUseCase error:', error);

            // Si l'erreur contient un message spécifique sur une contrainte
            if (error.message?.includes('contrainte') || error.message?.includes('constraint')) {
                return Result.fail(
                    new BusinessRuleViolationError(
                        'Impossible de supprimer ce site car il est utilisé par d\'autres entités'
                    )
                );
            }

            return Result.fail(
                new InfrastructureError(
                    error.message || 'Erreur lors de la suppression du site'
                )
            );
        }
    }
}
