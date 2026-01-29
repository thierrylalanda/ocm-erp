import { Injectable, Inject } from '@angular/core';
import { Result, DomainError, ValidationError, AlreadyExistsError, InfrastructureError, APPLICATION_CONTEXT, ApplicationContext } from '../../../_shared';
import { CreateDepartementDto, DepartementResponseDto } from '../../domain/dto/departement.dto';
import { DepartementService } from '../services/departement.service';

export interface CreateDepartementUseCase {
    execute(dto: CreateDepartementDto): Promise<Result<DepartementResponseDto, DomainError>>;
}

export const CREATE_DEPARTEMENT_USE_CASE = 'CREATE_DEPARTEMENT_USE_CASE';

@Injectable()
export class CreateDepartementUseCaseImpl implements CreateDepartementUseCase {
    constructor(
        private departementService: DepartementService,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(dto: CreateDepartementDto): Promise<Result<DepartementResponseDto, DomainError>> {
        try {
            // 1. Validation
            if (!dto.nom || dto.nom.trim().length === 0) {
                return Result.fail(new ValidationError('Le nom du département est requis'));
            }

            // 2. Récupérer societeId depuis le contexte
            const societeId = this.context.getSocieteId();
            if (!societeId) {
                return Result.fail(new ValidationError('Société non trouvée dans le contexte'));
            }

            // 3. Créer le département
            const departement = await this.departementService.createDepartement({
                ...dto,
                societeId
            }).toPromise();

            if (!departement) {
                return Result.fail(new InfrastructureError('Erreur lors de la création du département'));
            }

            return Result.ok(departement);
        } catch (error: any) {
            console.error('CreateDepartementUseCase error:', error);
            return Result.fail(new InfrastructureError(error.message || 'Erreur lors de la création du département'));
        }
    }
}
