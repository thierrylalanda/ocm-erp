import { InjectionToken } from '@angular/core';
import { Product } from '../entities/product.entity';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError } from '../../../_shared/domain/errors/domain.error';

/**
 * Interface du repository Product
 */
export interface ProductRepository {
    /**
     * Obtenir tous les produits
     */
    getAll(): Promise<Result<Product[], DomainError>>;

    /**
     * Obtenir un produit par ID
     */
    getById(id: string): Promise<Result<Product, DomainError>>;

    /**
     * Créer un produit
     */
    create(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Result<Product, DomainError>>;

    /**
     * Mettre à jour un produit
     */
    update(id: string, product: Partial<Product>): Promise<Result<Product, DomainError>>;

    /**
     * Supprimer un produit
     */
    delete(id: string): Promise<Result<void, DomainError>>;

    /**
     * Rechercher des produits
     */
    search(query: string): Promise<Result<Product[], DomainError>>;

    /**
     * Obtenir les produits par catégorie
     */
    getByCategory(categoryId: string): Promise<Result<Product[], DomainError>>;
}

/**
 * Token d'injection pour ProductRepository
 */
export const PRODUCT_REPOSITORY = new InjectionToken<ProductRepository>('ProductRepository');
