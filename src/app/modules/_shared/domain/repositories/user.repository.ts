import { Injectable, InjectionToken } from '@angular/core';
import { User, UserId, UserCreateCommand, UserUpdateCommand } from '../entities/user.entity';

// Injection token for UserRepository
export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');

export interface UserRepository {
    // Basic CRUD operations
    findById(id: UserId): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    findByTenant(tenantId: string): Promise<User[]>;

    // Create and update
    create(user: User): Promise<User>;
    update(user: User): Promise<User>;
    delete(id: UserId): Promise<void>;

    // Business operations
    updateLastLogin(id: UserId): Promise<void>;
    updatePermissions(id: UserId, permissions: string[]): Promise<void>;
    updateRoles(id: UserId, roles: string[]): Promise<void>;

    // Search and filtering
    search(query: string, tenantId: string): Promise<User[]>;
    findByRole(role: string, tenantId: string): Promise<User[]>;
    findByPermission(permission: string, tenantId: string): Promise<User[]>;

    // Validation
    existsByEmail(email: string): Promise<boolean>;
    existsByUsername(username: string): Promise<boolean>;

    // Bulk operations
    createMany(users: User[]): Promise<User[]>;
    updateMany(users: User[]): Promise<User[]>;
}

export interface UserRepositoryQueryOptions {
    tenantId?: string;
    isActive?: boolean;
    roles?: string[];
    permissions?: string[];
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

export interface UserRepositorySearchResult {
    users: User[];
    total: number;
    hasMore: boolean;
}

export abstract class BaseUserRepository implements UserRepository {
    abstract findById(id: UserId): Promise<User | null>;
    abstract findByEmail(email: string): Promise<User | null>;
    abstract findByUsername(username: string): Promise<User | null>;
    abstract findAll(): Promise<User[]>;
    abstract findByTenant(tenantId: string): Promise<User[]>;
    abstract create(user: User): Promise<User>;
    abstract update(user: User): Promise<User>;
    abstract delete(id: UserId): Promise<void>;
    abstract updateLastLogin(id: UserId): Promise<void>;
    abstract updatePermissions(id: UserId, permissions: string[]): Promise<void>;
    abstract updateRoles(id: UserId, roles: string[]): Promise<void>;
    abstract search(query: string, tenantId: string): Promise<User[]>;
    abstract findByRole(role: string, tenantId: string): Promise<User[]>;
    abstract findByPermission(permission: string, tenantId: string): Promise<User[]>;
    abstract existsByEmail(email: string): Promise<boolean>;
    abstract existsByUsername(username: string): Promise<boolean>;
    abstract createMany(users: User[]): Promise<User[]>;
    abstract updateMany(users: User[]): Promise<User[]>;

    // Extended query methods
    async findWithOptions(options: UserRepositoryQueryOptions): Promise<UserRepositorySearchResult> {
        let users = await this.findAll();

        // Apply filters
        if (options.tenantId) {
            users = users.filter(user => user.tenantId === options.tenantId);
        }

        if (options.isActive !== undefined) {
            users = users.filter(user => user.isActive === options.isActive);
        }

        if (options.roles && options.roles.length > 0) {
            users = users.filter(user =>
                options.roles!.some(role => user.roles.includes(role))
            );
        }

        if (options.permissions && options.permissions.length > 0) {
            users = users.filter(user =>
                options.permissions!.some(permission => user.permissions.includes(permission))
            );
        }

        // Apply sorting
        if (options.sortBy) {
            users = this.sortUsers(users, options.sortBy, options.sortOrder || 'asc');
        }

        // Apply pagination
        const total = users.length;
        const offset = options.offset || 0;
        const limit = options.limit || total;
        const paginatedUsers = users.slice(offset, offset + limit);
        const hasMore = offset + limit < total;

        return {
            users: paginatedUsers,
            total,
            hasMore
        };
    }

    async countByTenant(tenantId: string): Promise<number> {
        const users = await this.findByTenant(tenantId);
        return users.length;
    }

    async countActiveByTenant(tenantId: string): Promise<number> {
        const users = await this.findByTenant(tenantId);
        return users.filter(user => user.isActive).length;
    }

    async findActiveByTenant(tenantId: string): Promise<User[]> {
        const users = await this.findByTenant(tenantId);
        return users.filter(user => user.isActive);
    }

    async findInactiveByTenant(tenantId: string): Promise<User[]> {
        const users = await this.findByTenant(tenantId);
        return users.filter(user => !user.isActive);
    }

    async findWithAnyPermission(permissions: string[], tenantId: string): Promise<User[]> {
        const users = await this.findByTenant(tenantId);
        return users.filter(user =>
            permissions.some(permission => user.permissions.includes(permission))
        );
    }

    async findWithAllPermissions(permissions: string[], tenantId: string): Promise<User[]> {
        const users = await this.findByTenant(tenantId);
        return users.filter(user =>
            permissions.every(permission => user.permissions.includes(permission))
        );
    }

    private sortUsers(users: User[], sortBy: string, sortOrder: 'asc' | 'desc'): User[] {
        return [...users].sort((a, b) => {
            let aValue: any;
            let bValue: any;

            switch (sortBy) {
                case 'firstName':
                    aValue = a.firstName;
                    bValue = b.firstName;
                    break;
                case 'lastName':
                    aValue = a.lastName;
                    bValue = b.lastName;
                    break;
                case 'email':
                    aValue = a.email;
                    bValue = b.email;
                    break;
                case 'username':
                    aValue = a.username;
                    bValue = b.username;
                    break;
                case 'createdAt':
                    aValue = a.createdAt;
                    bValue = b.createdAt;
                    break;
                case 'lastLoginAt':
                    aValue = a.lastLoginAt || new Date(0);
                    bValue = b.lastLoginAt || new Date(0);
                    break;
                default:
                    aValue = a.firstName;
                    bValue = b.firstName;
            }

            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }
}
