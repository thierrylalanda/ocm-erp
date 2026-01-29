import { Inject, Injectable } from '@angular/core';
import { UpdateProductUseCase } from './update-product.use-case';
import { ProductRepository, PRODUCT_REPOSITORY } from '../../../domain/repositories/product.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError, UnauthorizedError } from '../../../../_shared/domain/errors/domain.error';
import { ApplicationContext, APPLICATION_CONTEXT } from '../../../../_shared/application/ports/application-context.port';
import { UpdateProductDto, ProductDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case UpdateProduct
 */
@Injectable()
export class UpdateProductUseCaseImpl implements UpdateProductUseCase {
    constructor(
        @Inject(PRODUCT_REPOSITORY) private productRepository: ProductRepository,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(id: string, dto: UpdateProductDto): Promise<Result<ProductDto, DomainError>> {
        if (!this.context.isAuthenticated()) {
            return Result.fail(new UnauthorizedError('update product'));
        }

        const userId = this.context.getUserId();

        // Mettre à jour le produit
        const result = await this.productRepository.update(id, {
            ...dto,
            updatedBy: userId.toString()
        });

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        const product = result.value;

        // Mapper vers DTO
        const productDto: ProductDto = {
            id: product.id,
            reference: product.reference,
            name: product.name,
            description: product.description,
            type: product.type,
            trackStock: product.trackStock,
            categoryId: product.categoryId,
            unitPrice: product.unitPrice,
            unitCost: product.unitCost,
            unit: product.unit,
            barcode: product.barcode,
            sku: product.sku,
            minStock: product.minStock,
            maxStock: product.maxStock,
            isActive: product.isActive,
            trackByLot: product.trackByLot,
            trackBySerial: product.trackBySerial,
            imageUrl: product.imageUrl,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt
        };

        return Result.ok(productDto);
    }
}
