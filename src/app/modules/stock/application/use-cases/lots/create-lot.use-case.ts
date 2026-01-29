import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { CreateLotDto, LotDto } from '../../dto/lot.dto';

/**
 * Use case pour créer un lot
 */
export interface CreateLotUseCase {
    /**
     * Exécute le use case
     * @param dto Données du lot à créer
     * @returns Le lot créé
     */
    execute(dto: CreateLotDto): Promise<Result<LotDto, DomainError>>;
}

export const CREATE_LOT_USE_CASE = new InjectionToken<CreateLotUseCase>('CreateLotUseCase');
