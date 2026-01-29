import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { WarehouseRepository } from '../../domain/repositories/warehouse.repository';
import { Warehouse } from '../../domain/entities/warehouse.entity';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError, InfrastructureError, NotFoundError } from '../../../_shared/domain/errors/domain.error';
import { environment } from '../../../../../environments/environment';

/**
 * Implémentation HTTP du repository Warehouse
 */
@Injectable()
export class HttpWarehouseRepository implements WarehouseRepository {
    private readonly apiUrl = `${environment.api}stock/warehouses`;

    constructor(private http: HttpClient) { }

    async getAll(): Promise<Result<Warehouse[], DomainError>> {
        try {
            const warehouses = await firstValueFrom(
                this.http.get<Warehouse[]>(this.apiUrl)
            );
            return Result.ok(warehouses || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch warehouses', error));
        }
    }

    async getById(id: string): Promise<Result<Warehouse, DomainError>> {
        try {
            const warehouse = await firstValueFrom(
                this.http.get<Warehouse>(`${this.apiUrl}/${id}`)
            );
            return Result.ok(warehouse);
        } catch (error: any) {
            if (error.status === 404) {
                return Result.fail(new NotFoundError('Warehouse', id));
            }
            return Result.fail(new InfrastructureError(error.message || `Failed to fetch warehouse ${id}`, error));
        }
    }

    async create(warehouse: Omit<Warehouse, 'id' | 'createdAt' | 'updatedAt'>): Promise<Result<Warehouse, DomainError>> {
        try {
            const created = await firstValueFrom(
                this.http.post<Warehouse>(this.apiUrl, warehouse)
            );
            return Result.ok(created);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to create warehouse', error));
        }
    }

    async update(id: string, warehouse: Partial<Warehouse>): Promise<Result<Warehouse, DomainError>> {
        try {
            const updated = await firstValueFrom(
                this.http.put<Warehouse>(`${this.apiUrl}/${id}`, warehouse)
            );
            return Result.ok(updated);
        } catch (error: any) {
            if (error.status === 404) {
                return Result.fail(new NotFoundError('Warehouse', id));
            }
            return Result.fail(new InfrastructureError(error.message || `Failed to update warehouse ${id}`, error));
        }
    }

    async delete(id: string): Promise<Result<void, DomainError>> {
        try {
            await firstValueFrom(
                this.http.delete<void>(`${this.apiUrl}/${id}`)
            );
            return Result.ok(undefined);
        } catch (error: any) {
            if (error.status === 404) {
                return Result.fail(new NotFoundError('Warehouse', id));
            }
            return Result.fail(new InfrastructureError(error.message || `Failed to delete warehouse ${id}`, error));
        }
    }
}
