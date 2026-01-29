import { PendingReceptionDto } from '../../application/dto/stock.dto';
import { InjectionToken } from '@angular/core';

export interface ReceptionRepository {
    getPendingReceptions(limit: number): Promise<PendingReceptionDto[]>;
}

export const RECEPTION_REPOSITORY = new InjectionToken<ReceptionRepository>('ReceptionRepository');
