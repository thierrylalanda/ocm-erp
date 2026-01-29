import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { LotDto } from '../../dto/lot.dto';

/**
 * Use case pour récupérer les lots en alerte ou périmés
 */
export interface GetExpiringLotsUseCase {
    /**
     * Exécute le use case
     * @param daysBeforeExpiration Nombre de jours avant péremption pour considérer un lot en alerte
     * @returns Liste des lots en alerte ou périmés
     */
    execute(daysBeforeExpiration?: number): Promise<Result<LotDto[], DomainError>>;
}

export const GET_EXPIRING_LOTS_USE_CASE = new InjectionToken<GetExpiringLotsUseCase>('GetExpiringLotsUseCase');
