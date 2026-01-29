import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockRepository } from '../../domain/repositories/stock.repository';
import { StockMovement } from '../../domain/entities/stock-movement.entity';
import { Inventory, StockStats } from '../../domain/entities/inventory.entity';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError, InfrastructureError } from '../../../_shared/domain/errors/domain.error';
import { environment } from '../../../../../environments/environment';

/**
 * Implémentation HTTP du repository Stock
 */
@Injectable()
export class HttpStockRepository implements StockRepository {
    private readonly apiUrl = `${environment.api}stock`;

    constructor(private http: HttpClient) { }

    async createMovement(movement: Omit<StockMovement, 'id' | 'createdAt'>): Promise<Result<StockMovement, DomainError>> {
        try {
            const created = await this.http.post<StockMovement>(`${this.apiUrl}/movements`, movement).toPromise();
            if (!created) {
                return Result.fail(new InfrastructureError('Failed to create movement'));
            }
            return Result.ok(created);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to create movement', error));
        }
    }

    async getMovements(filters?: any): Promise<Result<StockMovement[], DomainError>> {
        try {
            const movements = await this.http.get<StockMovement[]>(`${this.apiUrl}/movements`, {
                params: filters || {}
            }).toPromise();
            return Result.ok(movements || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch movements', error));
        }
    }

    async getStockLevel(productId: string, warehouseId?: string): Promise<Result<Inventory[], DomainError>> {
        try {
            const params: any = { productId };
            if (warehouseId) params.warehouseId = warehouseId;

            const inventory = await this.http.get<Inventory[]>(`${this.apiUrl}/inventory`, { params }).toPromise();
            return Result.ok(inventory || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch stock level', error));
        }
    }

    async getInventoryByWarehouse(warehouseId: string): Promise<Result<Inventory[], DomainError>> {
        try {
            const inventory = await this.http.get<Inventory[]>(`${this.apiUrl}/inventory/warehouse/${warehouseId}`).toPromise();
            return Result.ok(inventory || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch inventory', error));
        }
    }

    async getStockStats(): Promise<Result<StockStats, DomainError>> {
        try {
            const stats = await this.http.get<StockStats>(`${this.apiUrl}/stats`).toPromise();
            if (!stats) {
                return Result.fail(new InfrastructureError('Failed to fetch stats'));
            }
            return Result.ok(stats);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch stock stats', error));
        }
    }

    async getLowStockProducts(): Promise<Result<Inventory[], DomainError>> {
        try {
            const inventory = await this.http.get<Inventory[]>(`${this.apiUrl}/inventory/low-stock`).toPromise();
            return Result.ok(inventory || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch low stock products', error));
        }
    }

    async validateMovement(movementId: string): Promise<Result<StockMovement, DomainError>> {
        try {
            const movement = await this.http.post<StockMovement>(`${this.apiUrl}/movements/${movementId}/validate`, {}).toPromise();
            if (!movement) {
                return Result.fail(new InfrastructureError('Failed to validate movement'));
            }
            return Result.ok(movement);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to validate movement', error));
        }
    }
}
