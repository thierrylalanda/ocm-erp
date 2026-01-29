import { Inject, Injectable } from '@angular/core';
import { GetProductByIdUseCase } from './get-product-by-id.use-case';
import { ProductRepository, PRODUCT_REPOSITORY } from '../../../domain/repositories/product.repository';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { ProductDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case GetProductById
 */
@Injectable()
export class GetProductByIdUseCaseImpl implements GetProductByIdUseCase {
    constructor(
        @Inject(PRODUCT_REPOSITORY) private productRepository: ProductRepository
    ) { }

    async execute(id: string): Promise<Result<ProductDto, DomainError>> {
        const result = await this.productRepository.getById(id);

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
