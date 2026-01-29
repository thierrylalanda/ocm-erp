import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, ValidationError, AlreadyExistsError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { CreateSiteDto, SiteResponseDto } from '../../domain/dto/site.dto';
import { SiteService } from '../services/site.service';

/**
 * Interface du Use Case CreateSite
 */
export interface CreateSiteUseCase {
    execute(dto: CreateSiteDto): Promise<Result<SiteResponseDto, DomainError>>;
}

/**
 * Token d'injection pour CreateSiteUseCase
 */
export const CREATE_SITE_USE_CASE = 'CREATE_SITE_USE_CASE';

/**
 * Implémentation du Use Case CreateSite
 * 
 * Responsabilités:
 * - Valider les données du site
 * - Vérifier que le code n'existe pas déjà
 * - Créer le site via le service
 * - Retourner un Result avec le site créé ou une erreur
 */
@Injectable()
export class CreateSiteUseCaseImpl implements CreateSiteUseCase {
    constructor(
        private siteService: SiteService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(dto: CreateSiteDto): Promise<Result<SiteResponseDto, DomainError>> {
        try {
            // 1. Validation des données
            if (!dto.nom || dto.nom.trim().length === 0) {
                return Result.fail(
                    new ValidationError('Le nom du site est requis')
                );
            }

            if (!dto.code || dto.code.trim().length === 0) {
                return Result.fail(
                    new ValidationError('Le code du site est requis')
                );
            }

            // 2. Récupérer la société depuis le contexte
            const societeId = this.context.getSocieteId();
            if (!societeId) {
                return Result.fail(
                    new ValidationError('Société non trouvée dans le contexte')
                );
            }

            // 3. Vérifier si le code existe déjà
            const codeAvailable = await this.siteService
                .checkCodeAvailability(dto.code, societeId)
                .toPromise();

            if (!codeAvailable) {
                return Result.fail(
                    new AlreadyExistsError('Site', 'code', dto.code)
                );
            }

            // 4. Créer le site
            const site = await this.siteService.createSite({
                ...dto,
                societeId
            }).toPromise();

            if (!site) {
                return Result.fail(
                    new InfrastructureError('Erreur lors de la création du site')
                );
            }

            // 5. Retourner le résultat
            return Result.ok(site);

        } catch (error: any) {
            // Gestion des erreurs inattendues
            console.error('CreateSiteUseCase error:', error);

            return Result.fail(
                new InfrastructureError(
                    error.message || 'Erreur lors de la création du site'
                )
            );
        }
    }
}
