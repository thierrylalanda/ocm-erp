import { Inject, Injectable } from '@angular/core';
import { GetProductCategoriesUseCase } from './get-product-categories.use-case';
import { ProductCategoryRepository, PRODUCT_CATEGORY_REPOSITORY } from '../../../domain/repositories/product-category.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductCategoryDto } from '../../dto/stock.dto';
import { ProductCategory } from '../../../domain/entities/product-category.entity';

/**
 * Implémentation du use case GetProductCategories
 */
@Injectable()
export class GetProductCategoriesUseCaseImpl implements GetProductCategoriesUseCase {
    constructor(
        @Inject(PRODUCT_CATEGORY_REPOSITORY) private categoryRepository: ProductCategoryRepository
    ) { }

    async execute(): Promise<Result<ProductCategoryDto[], DomainError>> {
        const result = await this.categoryRepository.getAll();

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const categories = result.value;
        const tree = this.buildTree(categories);

        return Result.ok(tree);
    }

    /**
     * Construit l'arbre des catégories
     */
    private buildTree(categories: ProductCategory[]): ProductCategoryDto[] {
        const categoryMap = new Map<string, ProductCategoryDto>();
        const roots: ProductCategoryDto[] = [];

        // 1. Convertir en DTOs et mettre dans la Map
        categories.forEach(cat => {
            categoryMap.set(cat.id, {
                id: cat.id,
                name: cat.name,
                description: cat.description,
                parentId: cat.parentId,
                code: cat.code,
                order: cat.order,
                isActive: cat.isActive,
                createdAt: cat.createdAt,
                updatedAt: cat.updatedAt,
                children: [] // Initialiser les enfants
            });
        });

        // 2. Construire la hiérarchie
        categories.forEach(cat => {
            const dto = categoryMap.get(cat.id)!;

            if (cat.parentId && categoryMap.has(cat.parentId)) {
                // Ajouter aux enfants du parent
                const parent = categoryMap.get(cat.parentId)!;
                parent.children = parent.children || [];
                parent.children.push(dto);
                // Trier par ordre
                parent.children.sort((a, b) => (a.order || 0) - (b.order || 0));
            } else {
                // C'est une racine
                roots.push(dto);
            }
        });

        // Trier les racines par ordre
        return roots.sort((a, b) => (a.order || 0) - (b.order || 0));
    }
}
