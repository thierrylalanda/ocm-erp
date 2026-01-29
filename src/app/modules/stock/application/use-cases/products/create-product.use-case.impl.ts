import { Inject, Injectable } from '@angular/core';
import { CreateProductUseCase } from './create-product.use-case';
import { ProductRepository, PRODUCT_REPOSITORY } from '../../../domain/repositories/product.repository';
import { ApplicationContext, APPLICATION_CONTEXT } from '../../../../_shared/application/ports/application-context.port';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError, UnauthorizedError } from '../../../../_shared/domain/errors/domain.error';
import { CreateProductDto, ProductDto } from '../../dto/stock.dto';

/**
 * Implémentation du use case CreateProduct
 */
@Injectable()
export class CreateProductUseCaseImpl implements CreateProductUseCase {
    constructor(
        @Inject(PRODUCT_REPOSITORY) private productRepository: ProductRepository,
        @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
    ) { }

    async execute(dto: CreateProductDto): Promise<Result<ProductDto, DomainError>> {
        if (!this.context.isAuthenticated()) {
            return Result.fail(new UnauthorizedError('create product'));
        }

        const userId = this.context.getUserId();

        // Créer le produit
        const result = await this.productRepository.create({
            ...dto,
            trackStock: dto.trackStock ?? true, // Default to true if not specified
            isActive: true,
            createdBy: userId.toString(),
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
