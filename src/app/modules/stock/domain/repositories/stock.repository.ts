import { InjectionToken } from '@angular/core';
import { StockMovement } from '../entities/stock-movement.entity';
import { Inventory, StockStats } from '../entities/inventory.entity';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError } from '../../../_shared/domain/errors/domain.error';

/**
 * Interface du repository Stock
 */
export interface StockRepository {
    /**
     * Créer un mouvement de stock
     */
    createMovement(movement: Omit<StockMovement, 'id' | 'createdAt'>): Promise<Result<StockMovement, DomainError>>;

    /**
     * Obtenir les mouvements de stock
     */
    getMovements(filters?: {
        productId?: string;
        warehouseId?: string;
        startDate?: Date;
        endDate?: Date;
        type?: string;
    }): Promise<Result<StockMovement[], DomainError>>;

    /**
     * Obtenir le niveau de stock d'un produit
     */
    getStockLevel(productId: string, warehouseId?: string): Promise<Result<Inventory[], DomainError>>;

    /**
     * Obtenir l'inventaire par magasin
     */
    getInventoryByWarehouse(warehouseId: string): Promise<Result<Inventory[], DomainError>>;

    /**
     * Obtenir les statistiques de stock
     */
    getStockStats(): Promise<Result<StockStats, DomainError>>;

    /**
     * Obtenir les produits en stock faible
     */
    getLowStockProducts(): Promise<Result<Inventory[], DomainError>>;

    /**
     * Valider un mouvement
     */
    validateMovement(movementId: string): Promise<Result<StockMovement, DomainError>>;
}

/**
 * Token d'injection pour StockRepository
 */
export const STOCK_REPOSITORY = new InjectionToken<StockRepository>('StockRepository');
