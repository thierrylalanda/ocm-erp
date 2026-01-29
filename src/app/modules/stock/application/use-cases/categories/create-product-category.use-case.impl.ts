import { Inject, Injectable } from '@angular/core';
import { CreateProductCategoryUseCase } from './create-product-category.use-case';
import { ProductCategoryRepository, PRODUCT_CATEGORY_REPOSITORY } from '../../../domain/repositories/product-category.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError, UnauthorizedError } from '../../../../_shared/domain/errors/domain.error';
import { ApplicationContext, APPLICATION_CONTEXT } from '../../../../_shared/application/ports/application-context.port';
import { CreateProductCategoryDto, ProductCategoryDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case CreateProductCategory
 */
@Injectable()
export class CreateProductCategoryUseCaseImpl implements CreateProductCategoryUseCase {
    constructor(
        @Inject(PRODUCT_CATEGORY_REPOSITORY) private categoryRepository: ProductCategoryRepository,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(dto: CreateProductCategoryDto): Promise<Result<ProductCategoryDto, DomainError>> {
        if (!this.context.isAuthenticated()) {
            return Result.fail(new UnauthorizedError('create category'));
        }

        const category = {
            name: dto.name,
            description: dto.description,
            parentId: dto.parentId,
            code: dto.code,
            order: dto.order,
            isActive: dto.isActive !== undefined ? dto.isActive : true
        };

        const result = await this.categoryRepository.create(category);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const createdCategory = result.value;

        return Result.ok({
            id: createdCategory.id,
            name: createdCategory.name,
            description: createdCategory.description,
            parentId: createdCategory.parentId,
            code: createdCategory.code,
            order: createdCategory.order,
            isActive: createdCategory.isActive,
            createdAt: createdCategory.createdAt,
            updatedAt: createdCategory.updatedAt
        });
    }
}
