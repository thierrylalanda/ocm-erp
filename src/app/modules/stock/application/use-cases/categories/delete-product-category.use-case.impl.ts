import { Inject, Injectable } from '@angular/core';
import { DeleteProductCategoryUseCase } from './delete-product-category.use-case';
import { ProductCategoryRepository, PRODUCT_CATEGORY_REPOSITORY } from '../../../domain/repositories/product-category.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError, UnauthorizedError } from '../../../../_shared/domain/errors/domain.error';
import { ApplicationContext, APPLICATION_CONTEXT } from '../../../../_shared/application/ports/application-context.port';

/**
 * Implémentation du use case DeleteProductCategory
 */
@Injectable()
export class DeleteProductCategoryUseCaseImpl implements DeleteProductCategoryUseCase {
    constructor(
        @Inject(PRODUCT_CATEGORY_REPOSITORY) private categoryRepository: ProductCategoryRepository,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(id: string): Promise<Result<void, DomainError>> {
        if (!this.context.isAuthenticated()) {
            return Result.fail(new UnauthorizedError('delete category'));
        }

        return this.categoryRepository.delete(id);
    }
}
