import { Inject, Injectable } from '@angular/core';
import { UpdateProductCategoryUseCase } from './update-product-category.use-case';
import { ProductCategoryRepository, PRODUCT_CATEGORY_REPOSITORY } from '../../../domain/repositories/product-category.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError, UnauthorizedError } from '../../../../_shared/domain/errors/domain.error';
import { ApplicationContext, APPLICATION_CONTEXT } from '../../../../_shared/application/ports/application-context.port';
import { UpdateProductCategoryDto, ProductCategoryDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case UpdateProductCategory
 */
@Injectable()
export class UpdateProductCategoryUseCaseImpl implements UpdateProductCategoryUseCase {
    constructor(
        @Inject(PRODUCT_CATEGORY_REPOSITORY) private categoryRepository: ProductCategoryRepository,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(id: string, dto: UpdateProductCategoryDto): Promise<Result<ProductCategoryDto, DomainError>> {
        if (!this.context.isAuthenticated()) {
            return Result.fail(new UnauthorizedError('update category'));
        }

        const result = await this.categoryRepository.update(id, dto);

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const updatedCategory = result.value;

        return Result.ok({
            id: updatedCategory.id,
            name: updatedCategory.name,
            description: updatedCategory.description,
            parentId: updatedCategory.parentId,
            code: updatedCategory.code,
            order: updatedCategory.order,
            isActive: updatedCategory.isActive,
            createdAt: updatedCategory.createdAt,
            updatedAt: updatedCategory.updatedAt
        });
    }
}
