import { InjectionToken } from '@angular/core';
import { ProductCategory } from '../entities/product-category.entity';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError } from '../../../_shared/domain/errors/domain.error';

/**
 * Interface du repository ProductCategory
 */
export interface ProductCategoryRepository {
    /**
     * Obtenir toutes les catégories
     */
    getAll(): Promise<Result<ProductCategory[], DomainError>>;

    /**
     * Obtenir une catégorie par ID
     */
    getById(id: string): Promise<Result<ProductCategory, DomainError>>;

    /**
     * Créer une catégorie
     */
    create(category: Omit<ProductCategory, 'id' | 'createdAt' | 'updatedAt'>): Promise<Result<ProductCategory, DomainError>>;

    /**
     * Mettre à jour une catégorie
     */
    update(id: string, category: Partial<ProductCategory>): Promise<Result<ProductCategory, DomainError>>;

    /**
     * Supprimer une catégorie
     */
    delete(id: string): Promise<Result<void, DomainError>>;

    /**
     * Obtenir les sous-catégories
     */
    getByParentId(parentId: string): Promise<Result<ProductCategory[], DomainError>>;
}

/**
 * Token d'injection pour ProductCategoryRepository
 */
export const PRODUCT_CATEGORY_REPOSITORY = new InjectionToken<ProductCategoryRepository>('ProductCategoryRepository');
