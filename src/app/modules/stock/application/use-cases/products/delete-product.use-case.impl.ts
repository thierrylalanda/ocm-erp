import { Inject, Injectable } from '@angular/core';
import { DeleteProductUseCase } from './delete-product.use-case';
import { ProductRepository, PRODUCT_REPOSITORY } from '../../../domain/repositories/product.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError, UnauthorizedError } from '../../../../_shared/domain/errors/domain.error';
import { ApplicationContext, APPLICATION_CONTEXT } from '../../../../_shared/application/ports/application-context.port';

/**
 * Implémentation du use case DeleteProduct
 */
@Injectable()
export class DeleteProductUseCaseImpl implements DeleteProductUseCase {
    constructor(
        @Inject(PRODUCT_REPOSITORY) private productRepository: ProductRepository,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(id: string): Promise<Result<void, DomainError>> {
        if (!this.context.isAuthenticated()) {
            return Result.fail(new UnauthorizedError('delete product'));
        }

        return this.productRepository.delete(id);
    }
}
