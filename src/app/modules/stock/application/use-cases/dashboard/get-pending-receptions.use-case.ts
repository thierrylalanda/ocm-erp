import { InjectionToken, Inject, Injectable } from '@angular/core';
import { DomainError, InfrastructureError } from '../../../../_shared/domain/errors/domain.error';
import { Result } from '../../../../_shared/domain/types/result.type';
import { PendingReceptionDto } from '../../dto/stock.dto';
import { RECEPTION_REPOSITORY, ReceptionRepository } from '../../../domain/repositories/reception.repository';

export interface GetPendingReceptionsUseCase {
    execute(limit?: number): Promise<Result<PendingReceptionDto[], DomainError>>;
}

export const GET_PENDING_RECEPTIONS_USE_CASE = new InjectionToken<GetPendingReceptionsUseCase>('GetPendingReceptionsUseCase');

@Injectable()
export class GetPendingReceptionsUseCaseImpl implements GetPendingReceptionsUseCase {
    constructor(
        @Inject(RECEPTION_REPOSITORY) private receptionRepository: ReceptionRepository
    ) { }

    async execute(limit: number = 5): Promise<Result<PendingReceptionDto[], DomainError>> {
        try {
            const receptions = await this.receptionRepository.getPendingReceptions(limit);
            return Result.ok(receptions);
        } catch (error: any) {
            return Result.fail(new InfrastructureError('GET_PENDING_RECEPTIONS_ERROR: ' + (error.message || 'Erreur inconnue')));
        }
    }
}
