import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, ValidationError, NotFoundError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { UpdateSiteDto, SiteResponseDto } from '../../domain/dto/site.dto';
import { SiteService } from '../services/site.service';

/**
 * Interface du Use Case UpdateSite
 */
export interface UpdateSiteUseCase {
    execute(id: number, dto: UpdateSiteDto): Promise<Result<SiteResponseDto, DomainError>>;
}

/**
 * Token d'injection pour UpdateSiteUseCase
 */
export const UPDATE_SITE_USE_CASE = 'UPDATE_SITE_USE_CASE';

/**
 * Implémentation du Use Case UpdateSite
 * 
 * Responsabilités:
 * - Valider les données du site
 * - Vérifier que le site existe
 * - Mettre à jour le site via le service
 * - Retourner un Result avec le site mis à jour ou une erreur
 */
@Injectable()
export class UpdateSiteUseCaseImpl implements UpdateSiteUseCase {
    constructor(
        private siteService: SiteService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(id: number, dto: UpdateSiteDto): Promise<Result<SiteResponseDto, DomainError>> {
        try {
            // 1. Validation de l'ID
            if (!id || id <= 0) {
                return Result.fail(
                    new ValidationError('ID du site invalide')
                );
            }

            // 2. Validation des données
            if (dto.nom && dto.nom.trim().length === 0) {
                return Result.fail(
                    new ValidationError('Le nom du site ne peut pas être vide')
                );
            }

            if (dto.code && dto.code.trim().length === 0) {
                return Result.fail(
                    new ValidationError('Le code du site ne peut pas être vide')
                );
            }

            // 3. Vérifier que le site existe
            const existingSite = await this.siteService.getSite(id).toPromise();
            if (!existingSite) {
                return Result.fail(
                    new NotFoundError('Site', id)
                );
            }

            // 4. Mettre à jour le site
            const updatedSite = await this.siteService.updateSite(id, dto).toPromise();

            if (!updatedSite) {
                return Result.fail(
                    new InfrastructureError('Erreur lors de la mise à jour du site')
                );
            }

            // 5. Retourner le résultat
            return Result.ok(updatedSite);

        } catch (error: any) {
            console.error('UpdateSiteUseCase error:', error);

            return Result.fail(
                new InfrastructureError(
                    error.message || 'Erreur lors de la mise à jour du site'
                )
            );
        }
    }
}
