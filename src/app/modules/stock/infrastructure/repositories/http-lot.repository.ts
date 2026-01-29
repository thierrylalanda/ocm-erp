import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { BaseLotRepository } from '../../domain/repositories/lot.repository';
import { Lot, CreateLot, UpdateLot } from '../../domain/entities/lot.entity';
import { LotStatus } from '../../domain/entities/lot-status.enum';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError, InfrastructureError } from '../../../_shared/domain/errors/domain.error';
import { environment } from '../../../../../environments/environment';

/**
 * Implémentation HTTP du repository Lot
 */
@Injectable()
export class HttpLotRepository extends BaseLotRepository {
    private readonly apiUrl = `${environment.api}lots`;

    constructor(private http: HttpClient) {
        super();
    }

    async findById(id: string): Promise<Result<Lot | null, DomainError>> {
        try {
            const lot = await firstValueFrom(
                this.http.get<Lot>(`${this.apiUrl}/${id}`)
            );
            return Result.ok(lot);
        } catch (error: any) {
            if (error.status === 404) {
                return Result.ok(null);
            }
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch lot'));
        }
    }

    async findByProductId(productId: string): Promise<Result<Lot[], DomainError>> {
        try {
            const params = new HttpParams().set('productId', productId);
            const lots = await firstValueFrom(
                this.http.get<Lot[]>(this.apiUrl, { params })
            );
            return Result.ok(lots);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch lots by product'));
        }
    }

    async findByStatus(status: LotStatus): Promise<Result<Lot[], DomainError>> {
        try {
            const params = new HttpParams().set('status', status);
            const lots = await firstValueFrom(
                this.http.get<Lot[]>(this.apiUrl, { params })
            );
            return Result.ok(lots);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch lots by status'));
        }
    }

    async getExpiringLots(daysBeforeExpiration: number = 30): Promise<Result<Lot[], DomainError>> {
        try {
            const params = new HttpParams().set('daysBeforeExpiration', daysBeforeExpiration.toString());
            const lots = await firstValueFrom(
                this.http.get<Lot[]>(`${this.apiUrl}/expiring`, { params })
            );
            return Result.ok(lots);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch expiring lots'));
        }
    }

    async getActiveLotsByProduct(productId: string): Promise<Result<Lot[], DomainError>> {
        try {
            const params = new HttpParams()
                .set('productId', productId)
                .set('status', LotStatus.ACTIVE);
            const lots = await firstValueFrom(
                this.http.get<Lot[]>(`${this.apiUrl}/active`, { params })
            );
            return Result.ok(lots);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch active lots'));
        }
    }

    async create(lot: CreateLot): Promise<Result<Lot, DomainError>> {
        try {
            const createdLot = await firstValueFrom(
                this.http.post<Lot>(this.apiUrl, lot)
            );
            return Result.ok(createdLot);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to create lot'));
        }
    }

    async update(id: string, lot: UpdateLot): Promise<Result<Lot, DomainError>> {
        try {
            const updatedLot = await firstValueFrom(
                this.http.put<Lot>(`${this.apiUrl}/${id}`, lot)
            );
            return Result.ok(updatedLot);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to update lot'));
        }
    }

    async delete(id: string): Promise<Result<void, DomainError>> {
        try {
            await firstValueFrom(
                this.http.delete<void>(`${this.apiUrl}/${id}`)
            );
            return Result.ok(undefined);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to delete lot'));
        }
    }

    async updateQuantity(id: string, quantity: number): Promise<Result<Lot, DomainError>> {
        try {
            const updatedLot = await firstValueFrom(
                this.http.patch<Lot>(`${this.apiUrl}/${id}/quantity`, { quantity })
            );
            return Result.ok(updatedLot);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to update lot quantity'));
        }
    }

    async updateLotStatuses(): Promise<Result<number, DomainError>> {
        try {
            const result = await firstValueFrom(
                this.http.post<{ updated: number }>(`${this.apiUrl}/update-statuses`, {})
            );
            return Result.ok(result.updated);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to update lot statuses'));
        }
    }
}
