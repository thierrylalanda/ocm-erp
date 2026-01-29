import { InjectionToken } from '@angular/core';
import { Lot, CreateLot, UpdateLot } from '../entities/lot.entity';
import { LotStatus } from '../entities/lot-status.enum';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError } from '../../../_shared/domain/errors/domain.error';

/**
 * Repository pour la gestion des lots
 */
export interface LotRepository {
    /**
     * Récupérer un lot par son ID
     */
    findById(id: string): Promise<Result<Lot | null, DomainError>>;

    /**
     * Récupérer tous les lots d'un produit
     */
    findByProductId(productId: string): Promise<Result<Lot[], DomainError>>;

    /**
     * Récupérer les lots par statut
     */
    findByStatus(status: LotStatus): Promise<Result<Lot[], DomainError>>;

    /**
     * Récupérer les lots en alerte ou périmés
     */
    getExpiringLots(daysBeforeExpiration?: number): Promise<Result<Lot[], DomainError>>;

    /**
     * Récupérer les lots actifs d'un produit (disponibles pour utilisation)
     */
    getActiveLotsByProduct(productId: string): Promise<Result<Lot[], DomainError>>;

    /**
     * Créer un nouveau lot
     */
    create(lot: CreateLot): Promise<Result<Lot, DomainError>>;

    /**
     * Mettre à jour un lot
     */
    update(id: string, lot: UpdateLot): Promise<Result<Lot, DomainError>>;

    /**
     * Supprimer un lot
     */
    delete(id: string): Promise<Result<void, DomainError>>;

    /**
     * Mettre à jour la quantité d'un lot
     */
    updateQuantity(id: string, quantity: number): Promise<Result<Lot, DomainError>>;

    /**
     * Vérifier et mettre à jour les statuts des lots (périmés, alertes)
     */
    updateLotStatuses(): Promise<Result<number, DomainError>>;
}

/**
 * Token d'injection pour le repository
 */
export const LOT_REPOSITORY = new InjectionToken<LotRepository>('LotRepository');

/**
 * Repository de base abstrait
 */
export abstract class BaseLotRepository implements LotRepository {
    abstract findById(id: string): Promise<Result<Lot | null, DomainError>>;
    abstract findByProductId(productId: string): Promise<Result<Lot[], DomainError>>;
    abstract findByStatus(status: LotStatus): Promise<Result<Lot[], DomainError>>;
    abstract getExpiringLots(daysBeforeExpiration?: number): Promise<Result<Lot[], DomainError>>;
    abstract getActiveLotsByProduct(productId: string): Promise<Result<Lot[], DomainError>>;
    abstract create(lot: CreateLot): Promise<Result<Lot, DomainError>>;
    abstract update(id: string, lot: UpdateLot): Promise<Result<Lot, DomainError>>;
    abstract delete(id: string): Promise<Result<void, DomainError>>;
    abstract updateQuantity(id: string, quantity: number): Promise<Result<Lot, DomainError>>;
    abstract updateLotStatuses(): Promise<Result<number, DomainError>>;
}
