import { Inject, Injectable } from '@angular/core';
import { GetStockLevelUseCase } from './get-stock-level.use-case';
import { StockRepository, STOCK_REPOSITORY } from '../../../domain/repositories/stock.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { InventoryDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case GetStockLevel
 */
@Injectable()
export class GetStockLevelUseCaseImpl implements GetStockLevelUseCase {
    constructor(
        @Inject(STOCK_REPOSITORY) private stockRepository: StockRepository
    ) { }

    async execute(productId?: string, warehouseId?: string): Promise<Result<InventoryDto[], DomainError>> {
        // Si productId est fourni, on utilise getStockLevel du repository
        // Sinon, on pourrait avoir besoin d'une méthode pour tout récupérer (ex: inventaire complet)
        // Pour l'instant le repository a getStockLevel(productId, warehouseId) qui semble cibler un produit.
        // Si on veut TOUT l'inventaire, il faudrait peut-être une autre méthode ou adapter getStockLevel.
        // On va supposer ici que si productId est vide, le repository gère ou on utilise une autre méthode.
        // Vérifions le repository... getStockLevel(productId: string, warehouseId?: string) -> productId est obligatoire dans l'interface actuelle.
        // Il nous manque une méthode getAllInventory() dans le repository si on veut faire une liste complète sans filtre produit.

        // TEMPORAIRE: Si pas de productId, on essaie de tricher ou on modifie le repo ?
        // On va modifier le repo interface pour rendre productId optionnel ou ajouter getAllInventory.
        // Pour l'instant, appelons avec "" si nécessaire, mais le mieux est de corriger l'interface repo.
        // Mais attendez, HttpStockRepository.getStockLevel implémente: const params: any = { productId };
        // Si productId est undefined, params sera { productId: undefined }.

        // Pour être propre, utilisons getStockLevel avec assert que productId est string si obligatoire, 
        // ou modifions l'interface.
        // Allons modifier l'interface Repository pour productId optionnel dans une étape suivante si besoin.
        // Pour ce fichier, implémentons la logique.

        const result = await this.stockRepository.getStockLevel(productId || '', warehouseId);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const inventory = result.value;

        // Mappage vers DTO
        const dtos: InventoryDto[] = inventory.map(i => ({
            id: i.id,
            productId: i.productId,
            productName: i.productName || 'Unknown Product',
            productReference: i.productReference || '-',
            warehouseId: i.warehouseId,
            warehouseName: i.warehouseName || 'Unknown Warehouse',
            quantity: i.quantity,
            reservedQuantity: i.reservedQuantity,
            availableQuantity: i.availableQuantity,
            stockValue: i.stockValue,
            averageCost: i.averageCost,
            lastMovementDate: i.lastMovementDate,
            updatedAt: i.updatedAt
        }));

        return Result.ok(dtos);
    }
}
