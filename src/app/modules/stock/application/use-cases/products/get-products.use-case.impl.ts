import { Inject, Injectable } from '@angular/core';
import { GetProductsUseCase } from './get-products.use-case';
import { ProductRepository, PRODUCT_REPOSITORY } from '../../../domain/repositories/product.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case GetProducts
 */
@Injectable()
export class GetProductsUseCaseImpl implements GetProductsUseCase {
    constructor(
        @Inject(PRODUCT_REPOSITORY) private productRepository: ProductRepository
    ) { }

    async execute(): Promise<Result<ProductDto[], DomainError>> {
        const result = await this.productRepository.getAll();

        if (result.isFailure) {
            return Result.fail(result.error);
        }

        // Mapper les entités vers DTOs
        const products = result.value;
        const productDtos = products.map((product: any) => ({
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
        }));

        return Result.ok(productDtos);
    }
}
