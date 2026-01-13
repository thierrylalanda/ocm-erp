import { Tenant, TenantId, TenantCreateCommand, TenantUpdateCommand } from '../entities/tenant.entity';

export interface TenantRepository {
    // Basic CRUD operations
    findById(id: TenantId): Promise<Tenant | null>;
    findByCode(code: string): Promise<Tenant | null>;
    findByEmail(email: string): Promise<Tenant | null>;
    findAll(): Promise<Tenant[]>;

    // Create and update
    create(tenant: Tenant): Promise<Tenant>;
    update(tenant: Tenant): Promise<Tenant>;
    delete(id: TenantId): Promise<void>;

    // Business operations
    activate(id: TenantId): Promise<void>;
    deactivate(id: TenantId): Promise<void>;
    updateSubscription(id: TenantId, plan: string, expiresAt: Date): Promise<void>;

    // Search and filtering
    search(query: string): Promise<Tenant[]>;
    findByStatus(isActive: boolean): Promise<Tenant[]>;
    findBySubscriptionPlan(plan: string): Promise<Tenant[]>;

    // Validation
    existsByCode(code: string): Promise<boolean>;
    existsByEmail(email: string): Promise<boolean>;

    // Statistics
    count(): Promise<number>;
    countActive(): Promise<number>;
    countInactive(): Promise<number>;

    // Bulk operations
    createMany(tenants: Tenant[]): Promise<Tenant[]>;
    updateMany(tenants: Tenant[]): Promise<Tenant[]>;
}

export interface TenantRepositoryQueryOptions {
    isActive?: boolean;
    subscriptionPlan?: string;
    country?: string;
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

export interface TenantRepositorySearchResult {
    tenants: Tenant[];
    total: number;
    hasMore: boolean;
}

export abstract class BaseTenantRepository implements TenantRepository {
    abstract findById(id: TenantId): Promise<Tenant | null>;
    abstract findByCode(code: string): Promise<Tenant | null>;
    abstract findByEmail(email: string): Promise<Tenant | null>;
    abstract findAll(): Promise<Tenant[]>;
    abstract create(tenant: Tenant): Promise<Tenant>;
    abstract update(tenant: Tenant): Promise<Tenant>;
    abstract delete(id: TenantId): Promise<void>;
    abstract activate(id: TenantId): Promise<void>;
    abstract deactivate(id: TenantId): Promise<void>;
    abstract updateSubscription(id: TenantId, plan: string, expiresAt: Date): Promise<void>;
    abstract search(query: string): Promise<Tenant[]>;
    abstract findByStatus(isActive: boolean): Promise<Tenant[]>;
    abstract findBySubscriptionPlan(plan: string): Promise<Tenant[]>;
    abstract existsByCode(code: string): Promise<boolean>;
    abstract existsByEmail(email: string): Promise<boolean>;
    abstract count(): Promise<number>;
    abstract countActive(): Promise<number>;
    abstract countInactive(): Promise<number>;
    abstract createMany(tenants: Tenant[]): Promise<Tenant[]>;
    abstract updateMany(tenants: Tenant[]): Promise<Tenant[]>;

    // Extended query methods
    async findWithOptions(options: TenantRepositoryQueryOptions): Promise<TenantRepositorySearchResult> {
        let tenants = await this.findAll();

        // Apply filters
        if (options.isActive !== undefined) {
            tenants = tenants.filter(tenant => tenant.isActive === options.isActive);
        }

        if (options.subscriptionPlan) {
            tenants = tenants.filter(tenant => tenant.subscriptionPlan === options.subscriptionPlan);
        }

        if (options.country) {
            tenants = tenants.filter(tenant => tenant.pays === options.country);
        }

        // Apply sorting
        if (options.sortBy) {
            tenants = this.sortTenants(tenants, options.sortBy, options.sortOrder || 'asc');
        }

        // Apply pagination
        const total = tenants.length;
        const offset = options.offset || 0;
        const limit = options.limit || total;
        const paginatedTenants = tenants.slice(offset, offset + limit);
        const hasMore = offset + limit < total;

        return {
            tenants: paginatedTenants,
            total,
            hasMore
        };
    }

    async findExpiringSubscriptions(days: number): Promise<Tenant[]> {
        const tenants = await this.findAll();
        const threshold = new Date();
        threshold.setDate(threshold.getDate() + days);

        return tenants.filter(tenant =>
            tenant.subscriptionExpiresAt &&
            tenant.subscriptionExpiresAt <= threshold &&
            tenant.isActive
        );
    }

    async findExpiredSubscriptions(): Promise<Tenant[]> {
        const tenants = await this.findAll();
        const now = new Date();

        return tenants.filter(tenant =>
            tenant.subscriptionExpiresAt &&
            tenant.subscriptionExpiresAt <= now &&
            tenant.isActive
        );
    }

    async findWithoutSubscription(): Promise<Tenant[]> {
        const tenants = await this.findAll();
        return tenants.filter(tenant => !tenant.subscriptionPlan);
    }

    async findByCountry(country: string): Promise<Tenant[]> {
        const tenants = await this.findAll();
        return tenants.filter(tenant => tenant.pays === country);
    }

    async countByCountry(country: string): Promise<number> {
        const tenants = await this.findByCountry(country);
        return tenants.length;
    }

    async countBySubscriptionPlan(plan: string): Promise<number> {
        const tenants = await this.findBySubscriptionPlan(plan);
        return tenants.length;
    }

    async getTenantStatistics(): Promise<{
        total: number;
        active: number;
        inactive: number;
        withSubscription: number;
        withoutSubscription: number;
        byCountry: Record<string, number>;
        bySubscriptionPlan: Record<string, number>;
    }> {
        const tenants = await this.findAll();
        const active = tenants.filter(t => t.isActive).length;
        const inactive = tenants.filter(t => !t.isActive).length;
        const withSubscription = tenants.filter(t => t.subscriptionPlan).length;
        const withoutSubscription = tenants.filter(t => !t.subscriptionPlan).length;

        const byCountry: Record<string, number> = {};
        const bySubscriptionPlan: Record<string, number> = {};

        tenants.forEach(tenant => {
            if (tenant.pays) {
                byCountry[tenant.pays] = (byCountry[tenant.pays] || 0) + 1;
            }
            if (tenant.subscriptionPlan) {
                bySubscriptionPlan[tenant.subscriptionPlan] = (bySubscriptionPlan[tenant.subscriptionPlan] || 0) + 1;
            }
        });

        return {
            total: tenants.length,
            active,
            inactive,
            withSubscription,
            withoutSubscription,
            byCountry,
            bySubscriptionPlan
        };
    }

    private sortTenants(tenants: Tenant[], sortBy: string, sortOrder: 'asc' | 'desc'): Tenant[] {
        return [...tenants].sort((a, b) => {
            let aValue: any;
            let bValue: any;

            switch (sortBy) {
                case 'name':
                    aValue = a.nom;
                    bValue = b.nom;
                    break;
                case 'code':
                    aValue = a.code;
                    bValue = b.code;
                    break;
                case 'email':
                    aValue = a.email;
                    bValue = b.email;
                    break;
                case 'country':
                    aValue = a.pays || '';
                    bValue = b.pays || '';
                    break;
                case 'createdAt':
                    aValue = a.createdAt;
                    bValue = b.createdAt;
                    break;
                case 'subscriptionExpiresAt':
                    aValue = a.subscriptionExpiresAt || new Date(0);
                    bValue = b.subscriptionExpiresAt || new Date(0);
                    break;
                case 'maxUsers':
                    aValue = a.maxUsers;
                    bValue = b.maxUsers;
                    break;
                default:
                    aValue = a.nom;
                    bValue = b.nom;
            }

            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }
}
