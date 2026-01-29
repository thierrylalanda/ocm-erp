import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProductCategoryRepository } from '../../domain/repositories/product-category.repository';
import { ProductCategory } from '../../domain/entities/product-category.entity';
import { Result } from '../../../_shared/domain/types/result.type';
import { InfrastructureError, NotFoundError } from '../../../_shared/domain/errors/domain.error';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class HttpProductCategoryRepository implements ProductCategoryRepository {
    private readonly apiUrl = `${environment.api}stock/categories`;

    constructor(private http: HttpClient) { }

    async getAll(): Promise<Result<ProductCategory[], InfrastructureError>> {
        try {
            const categories = await firstValueFrom(
                this.http.get<ProductCategory[]>(this.apiUrl)
            );
            return Result.ok(categories || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to fetch categories', error));
        }
    }

    async getById(id: string): Promise<Result<ProductCategory, InfrastructureError | NotFoundError>> {
        try {
            const category = await firstValueFrom(
                this.http.get<ProductCategory>(`${this.apiUrl}/${id}`)
            );
            return Result.ok(category);
        } catch (error: any) {
            if (error.status === 404) {
                return Result.fail(new NotFoundError('Category', id));
            }
            return Result.fail(new InfrastructureError(error.message || `Failed to fetch category ${id}`, error));
        }
    }

    async create(category: Omit<ProductCategory, 'id' | 'createdAt' | 'updatedAt'>): Promise<Result<ProductCategory, InfrastructureError>> {
        try {
            const createdCategory = await firstValueFrom(
                this.http.post<ProductCategory>(this.apiUrl, category)
            );
            return Result.ok(createdCategory);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || 'Failed to create category', error));
        }
    }

    async update(id: string, category: Partial<ProductCategory>): Promise<Result<ProductCategory, InfrastructureError | NotFoundError>> {
        try {
            const updatedCategory = await firstValueFrom(
                this.http.put<ProductCategory>(`${this.apiUrl}/${id}`, category)
            );
            return Result.ok(updatedCategory);
        } catch (error: any) {
            if (error.status === 404) {
                return Result.fail(new NotFoundError('Category', id));
            }
            return Result.fail(new InfrastructureError(error.message || `Failed to update category ${id}`, error));
        }
    }

    async delete(id: string): Promise<Result<void, InfrastructureError | NotFoundError>> {
        try {
            await firstValueFrom(
                this.http.delete<void>(`${this.apiUrl}/${id}`)
            );
            return Result.ok(undefined);
        } catch (error: any) {
            if (error.status === 404) {
                return Result.fail(new NotFoundError('Category', id));
            }
            return Result.fail(new InfrastructureError(error.message || `Failed to delete category ${id}`, error));
        }
    }

    async getByParentId(parentId: string): Promise<Result<ProductCategory[], InfrastructureError>> {
        try {
            const categories = await firstValueFrom(
                this.http.get<ProductCategory[]>(`${this.apiUrl}/parent/${parentId}`)
            );
            return Result.ok(categories || []);
        } catch (error: any) {
            return Result.fail(new InfrastructureError(error.message || `Failed to fetch sub-categories for parent ${parentId}`, error));
        }
    }
}
