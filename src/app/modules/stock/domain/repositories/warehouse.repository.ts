import { InjectionToken } from '@angular/core';
import { Warehouse } from '../entities/warehouse.entity';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError } from '../../../_shared/domain/errors/domain.error';

/**
 * Interface du repository Warehouse
 */
export interface WarehouseRepository {
    /**
     * Obtenir tous les magasins
     */
    getAll(): Promise<Result<Warehouse[], DomainError>>;

    /**
     * Obtenir un magasin par ID
     */
    getById(id: string): Promise<Result<Warehouse, DomainError>>;

    /**
     * Créer un magasin
     */
    create(warehouse: Omit<Warehouse, 'id' | 'createdAt' | 'updatedAt'>): Promise<Result<Warehouse, DomainError>>;

    /**
     * Mettre à jour un magasin
     */
    update(id: string, warehouse: Partial<Warehouse>): Promise<Result<Warehouse, DomainError>>;

    /**
     * Supprimer un magasin
     */
    delete(id: string): Promise<Result<void, DomainError>>;
}

/**
 * Token d'injection pour WarehouseRepository
 */
export const WAREHOUSE_REPOSITORY = new InjectionToken<WarehouseRepository>('WarehouseRepository');
