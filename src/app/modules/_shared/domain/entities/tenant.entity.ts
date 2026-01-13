export interface TenantId {
    value: string;
}

export interface Tenant {
    id: number;
    nom: string;
    code: string;
    description?: string;
    logoUrl?: string;
    website?: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    city?: string;
    pays?: string;
    timezone: string;
    language: string;
    currency: string;
    isActive: boolean;
    subscriptionPlan?: string;
    subscriptionExpiresAt?: Date;
    maxUsers: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    
    // Nouveaux champs pour la gestion des sociétés
    activite?: string;           // activite
    postalBox?: string;          // boitePostal
    region?: string;             // region
    taxNumber?: string;          // nc (numéro contribuable)
    tradeRegister?: string;      // rccm (registre du commerce)
    fiscalRegime?: string;       // regimeFiscal
    faviconUrl?: string;         // favicon
}

export interface TenantCreateCommand {
    id?: number;
    nom: string;
    code: string;
    description?: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    city?: string;
    pays?: string;
    timezone?: string;
    language?: string;
    currency?: string;
    maxUsers?: number;
    
    // Nouveaux champs pour la création de sociétés
    activite?: string;           // activite
    postalBox?: string;          // boitePostal
    region?: string;             // region
    taxNumber?: string;          // nc (numéro contribuable)
    tradeRegister?: string;      // rccm (registre du commerce)
    fiscalRegime?: string;       // regimeFiscal
    faviconUrl?: string;         // favicon
}

export interface TenantUpdateCommand {
    nom?: string;
    description?: string;
    logoUrl?: string;
    website?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
    city?: string;
    country?: string;
    timezone?: string;
    language?: string;
    currency?: string;
    isActive?: boolean;
    maxUsers?: number;
    
    // Nouveaux champs pour la mise à jour de sociétés
    activity?: string;           // activite
    postalBox?: string;          // boitePostal
    region?: string;             // region
    taxNumber?: string;          // nc (numéro contribuable)
    tradeRegister?: string;      // rccm (registre du commerce)
    fiscalRegime?: string;       // regimeFiscal
    faviconUrl?: string;         // favicon
}

export class TenantEntity implements Tenant {
    constructor(
        public readonly id: number,
        public readonly nom: string,
        public readonly code: string,
        public readonly description: string | undefined,
        public readonly logoUrl: string | undefined,
        public readonly website: string | undefined,
        public readonly email: string,
        public readonly phoneNumber: string | undefined,
        public readonly address: string | undefined,
        public readonly city: string | undefined,
        public readonly country: string | undefined,
        public readonly timezone: string,
        public readonly language: string,
        public readonly currency: string,
        public readonly isActive: boolean,
        public readonly subscriptionPlan: string | undefined,
        public readonly subscriptionExpiresAt: Date | undefined,
        public readonly maxUsers: number,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
        public readonly deletedAt: Date | undefined,
        
        // Nouveaux champs pour la gestion des sociétés
        public readonly activity: string | undefined = undefined,
        public readonly postalBox: string | undefined = undefined,
        public readonly region: string | undefined = undefined,
        public readonly taxNumber: string | undefined = undefined,
        public readonly tradeRegister: string | undefined = undefined,
        public readonly fiscalRegime: string | undefined = undefined,
        public readonly faviconUrl: string | undefined = undefined
    ) { }

    // Domain logic
    static create(command: TenantCreateCommand): TenantEntity {
        const now = new Date();
        const tenantId: TenantId = { value: this.generateId() };

        return new TenantEntity(
            command.id!,
            command.nom,
            command.code,
            command.description,
            undefined, // logoUrl
            undefined, // website
            command.email,
            command.phoneNumber,
            command.address,
            command.city,
            command.pays,
            command.timezone || 'UTC',
            command.language || 'fr',
            command.currency || 'XAF',
            true, // isActive
            undefined, // subscriptionPlan
            undefined, // subscriptionExpiresAt
            command.maxUsers || 10,
            now, // createdAt
            now, // updatedAt
            undefined, // deletedAt
            command.activite,
            command.postalBox,
            command.region,
            command.taxNumber,
            command.tradeRegister,
            command.fiscalRegime,
            command.faviconUrl
        );
    }

    update(command: TenantUpdateCommand): TenantEntity {
        return new TenantEntity(
            this.id,
            command.nom ?? this.nom,
            this.code, // code cannot be changed
            command.description ?? this.description,
            command.logoUrl ?? this.logoUrl,
            command.website ?? this.website,
            command.email ?? this.email,
            command.phoneNumber ?? this.phoneNumber,
            command.address ?? this.address,
            command.city ?? this.city,
            command.country ?? this.country,
            command.timezone ?? this.timezone,
            command.language ?? this.language,
            command.currency ?? this.currency,
            command.isActive ?? this.isActive,
            this.subscriptionPlan,
            this.subscriptionExpiresAt,
            command.maxUsers ?? this.maxUsers,
            this.createdAt,
            new Date(), // updatedAt
            this.deletedAt,
            command.activity ?? this.activity,
            command.postalBox ?? this.postalBox,
            command.region ?? this.region,
            command.taxNumber ?? this.taxNumber,
            command.tradeRegister ?? this.tradeRegister,
            command.fiscalRegime ?? this.fiscalRegime,
            command.faviconUrl ?? this.faviconUrl
        );
    }

    markAsDeleted(): TenantEntity {
        return new TenantEntity(
            this.id,
            this.nom,
            this.code,
            this.description,
            this.logoUrl,
            this.website,
            this.email,
            this.phoneNumber,
            this.address,
            this.city,
            this.country,
            this.timezone,
            this.language,
            this.currency,
            false, // isActive
            this.subscriptionPlan,
            this.subscriptionExpiresAt,
            this.maxUsers,
            this.createdAt,
            new Date(), // updatedAt
            new Date(), // deletedAt
            this.activity,
            this.postalBox,
            this.region,
            this.taxNumber,
            this.tradeRegister,
            this.fiscalRegime,
            this.faviconUrl
        );
    }

    activate(): TenantEntity {
        return new TenantEntity(
            this.id,
            this.nom,
            this.code,
            this.description,
            this.logoUrl,
            this.website,
            this.email,
            this.phoneNumber,
            this.address,
            this.city,
            this.country,
            this.timezone,
            this.language,
            this.currency,
            true, // isActive
            this.subscriptionPlan,
            this.subscriptionExpiresAt,
            this.maxUsers,
            this.createdAt,
            new Date(), // updatedAt
            this.deletedAt,
            this.activity,
            this.postalBox,
            this.region,
            this.taxNumber,
            this.tradeRegister,
            this.fiscalRegime,
            this.faviconUrl
        );
    }

    deactivate(): TenantEntity {
        return new TenantEntity(
            this.id,
            this.nom,
            this.code,
            this.description,
            this.logoUrl,
            this.website,
            this.email,
            this.phoneNumber,
            this.address,
            this.city,
            this.country,
            this.timezone,
            this.language,
            this.currency,
            false, // isActive
            this.subscriptionPlan,
            this.subscriptionExpiresAt,
            this.maxUsers,
            this.createdAt,
            new Date(), // updatedAt
            this.deletedAt,
            this.activity,
            this.postalBox,
            this.region,
            this.taxNumber,
            this.tradeRegister,
            this.fiscalRegime,
            this.faviconUrl
        );
    }

    updateSubscription(plan: string, expiresAt: Date): TenantEntity {
        return new TenantEntity(
            this.id,
            this.nom,
            this.code,
            this.description,
            this.logoUrl,
            this.website,
            this.email,
            this.phoneNumber,
            this.address,
            this.city,
            this.country,
            this.timezone,
            this.language,
            this.currency,
            this.isActive,
            plan,
            expiresAt,
            this.maxUsers,
            this.createdAt,
            new Date(), // updatedAt
            this.deletedAt,
            this.activity,
            this.postalBox,
            this.region,
            this.taxNumber,
            this.tradeRegister,
            this.fiscalRegime,
            this.faviconUrl
        );
    }

    canAddMoreUsers(currentUserCount: number): boolean {
        return currentUserCount < this.maxUsers;
    }

    isSubscriptionActive(): boolean {
        if (!this.subscriptionExpiresAt) {
            return false;
        }
        return this.subscriptionExpiresAt > new Date();
    }

    private static generateId(): string {
        return `tenant_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
}
