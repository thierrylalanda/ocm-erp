import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, ValidationError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { PagedDepartementResponse } from '../../domain/dto/departement.dto';
import { DepartementService } from '../services/departement.service';

export interface GetDepartementsUseCase {
    execute(params?: GetDepartementsParams): Promise<Result<PagedDepartementResponse, DomainError>>;
}

export interface GetDepartementsParams {
    page?: number;
    size?: number;
    search?: string;
    actif?: boolean;
}

export const GET_DEPARTEMENTS_USE_CASE = 'GET_DEPARTEMENTS_USE_CASE';

@Injectable()
export class GetDepartementsUseCaseImpl implements GetDepartementsUseCase {
    constructor(
        private departementService: DepartementService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(params: GetDepartementsParams = {}): Promise<Result<PagedDepartementResponse, DomainError>> {
        try {
            // 1. Validation pagination
            if (params.page !== undefined && params.page < 0) {
                return Result.fail(new ValidationError('Le numéro de page doit être positif'));
            }

            if (params.size !== undefined && (params.size <= 0 || params.size > 100)) {
                return Result.fail(new ValidationError('La taille de page doit être entre 1 et 100'));
            }

            // 2. Récupérer societeId
            const societeId = this.context.getSocieteId();

            // 3. Récupérer les départements
            const departements = await this.departementService.getDepartements(
                societeId,
                params.page ?? 0,
                params.size ?? 10,
                params.search,
                params.actif
            ).toPromise();

            if (!departements) {
                return Result.fail(new InfrastructureError('Erreur lors de la récupération des départements'));
            }

            return Result.ok(departements);
        } catch (error: any) {
            console.error('GetDepartementsUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Erreur lors de la récupération des départements'));
        }
    }
}
