import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { Product } from '../../domain/entities/product.entity';
import { environment } from '../../../../../environments/environment';
import { Result } from '../../../_shared/domain/types/result.type';
import { DomainError, InfrastructureError, NotFoundError } from '../../../_shared/domain/errors/domain.error';

/**
 * Implémentation HTTP du repository Product
 */
@Injectable()
export class HttpProductRepository implements ProductRepository {
    private readonly apiUrl = `${environment.api}stock/products`;

    constructor(private http: HttpClient) { }

    async getAll(): Promise<Result<Product[], DomainError>> {
        try {
            const products = await this.http.get<Product[]>(this.apiUrl).toPromise();
            return Result.ok(products || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch products', error));
        }
    }

    async getById(id: string): Promise<Result<Product, DomainError>> {
        try {
            const product = await this.http.get<Product>(`${this.apiUrl}/${id}`).toPromise();
            if (!product) {
                return Result.fail(new NotFoundError('Product', id));
            }
            return Result.ok(product);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch product', error));
        }
    }

    async create(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Result<Product, DomainError>> {
        try {
            const created = await this.http.post<Product>(this.apiUrl, product).toPromise();
            if (!created) {
                return Result.fail(new InfrastructureError('Failed to create product'));
            }
            return Result.ok(created);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to create product', error));
        }
    }

    async update(id: string, product: Partial<Product>): Promise<Result<Product, DomainError>> {
        try {
            const updated = await this.http.put<Product>(`${this.apiUrl}/${id}`, product).toPromise();
            if (!updated) {
                return Result.fail(new InfrastructureError('Failed to update product'));
            }
            return Result.ok(updated);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to update product', error));
        }
    }

    async delete(id: string): Promise<Result<void, DomainError>> {
        try {
            await this.http.delete(`${this.apiUrl}/${id}`).toPromise();
            return Result.ok(undefined);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to delete product', error));
        }
    }

    async search(query: string): Promise<Result<Product[], DomainError>> {
        try {
            const products = await this.http.get<Product[]>(`${this.apiUrl}/search`, {
                params: { q: query }
            }).toPromise();
            return Result.ok(products || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to search products', error));
        }
    }

    async getByCategory(categoryId: string): Promise<Result<Product[], DomainError>> {
        try {
            const products = await this.http.get<Product[]>(`${this.apiUrl}/category/${categoryId}`).toPromise();
            return Result.ok(products || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch products by category', error));
        }
    }
}
