import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, ValidationError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { PagedSiteResponse } from '../../domain/dto/site.dto';
import { SiteService } from '../services/site.service';

/**
 * Interface du Use Case GetSites
 */
export interface GetSitesUseCase {
    execute(params: GetSitesParams): Promise<Result<PagedSiteResponse, DomainError>>;
}

/**
 * Paramètres pour la récupération des sites
 */
export interface GetSitesParams {
    page?: number;
    size?: number;
    type?: string;
    actif?: boolean;
    ville?: string;
    pays?: string;
}

/**
 * Token d'injection pour GetSitesUseCase
 */
export const GET_SITES_USE_CASE = 'GET_SITES_USE_CASE';

/**
 * Implémentation du Use Case GetSites
 * 
 * Responsabilités:
 * - Valider les paramètres de pagination
 * - Récupérer les sites de la société courante
 * - Retourner un Result avec les sites paginés ou une erreur
 */
@Injectable()
export class GetSitesUseCaseImpl implements GetSitesUseCase {
    constructor(
        private siteService: SiteService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(params: GetSitesParams = {}): Promise<Result<PagedSiteResponse, DomainError>> {
        try {
            // 1. Validation des paramètres
            if (params.page !== undefined && params.page < 0) {
                return Result.fail(
                    new ValidationError('Le numéro de page doit être positif')
                );
            }

            if (params.size !== undefined && (params.size <= 0 || params.size > 100)) {
                return Result.fail(
                    new ValidationError('La taille de page doit être entre 1 et 100')
                );
            }

            // 2. Récupérer la société depuis le contexte
            const societeId = this.context.getSocieteId();
            if (!societeId) {
                return Result.fail(
                    new ValidationError('Société non trouvée dans le contexte')
                );
            }

            // 3. Récupérer les sites
            const sites = await this.siteService.getSites({
                ...params,
                societeId
            }).toPromise();

            if (!sites) {
                return Result.fail(
                    new InfrastructureError('Erreur lors de la récupération des sites')
                );
            }

            // 4. Retourner le résultat
            return Result.ok(sites);

        } catch (error: any) {
            console.error('GetSitesUseCase error:', error);

            return Result.fail(
                new InfrastructureError(
                    error.message || 'Erreur lors de la récupération des sites'
                )
            );
        }
    }
}
