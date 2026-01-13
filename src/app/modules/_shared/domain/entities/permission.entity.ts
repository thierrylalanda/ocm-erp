export interface PermissionId {
    value: string;
}

export interface Permission {
    id: PermissionId;
    name: string;
    code: string;
    description?: string;
    module: string;
    category: string;
    type: PermissionType;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export enum PermissionType {
    READ = 'read',
    WRITE = 'write',
    CREATE = 'create',
    UPDATE = 'update',
    DELETE = 'delete',
    VALIDATE = 'validate',
    EXPORT = 'export',
    IMPORT = 'import',
    ADMIN = 'admin'
}

export interface PermissionCreateCommand {
    name: string;
    code: string;
    description?: string;
    module: string;
    category: string;
    type: PermissionType;
}

export interface PermissionUpdateCommand {
    name?: string;
    description?: string;
    isActive?: boolean;
}

export class PermissionEntity implements Permission {
    constructor(
        public readonly id: PermissionId,
        public readonly name: string,
        public readonly code: string,
        public readonly description: string | undefined,
        public readonly module: string,
        public readonly category: string,
        public readonly type: PermissionType,
        public readonly isActive: boolean,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) { }

    // Domain logic
    static create(command: PermissionCreateCommand): PermissionEntity {
        const now = new Date();
        const permissionId: PermissionId = { value: this.generateId() };

        return new PermissionEntity(
            permissionId,
            command.name,
            command.code,
            command.description,
            command.module,
            command.category,
            command.type,
            true, // isActive
            now, // createdAt
            now // updatedAt
        );
    }

    update(command: PermissionUpdateCommand): PermissionEntity {
        return new PermissionEntity(
            this.id,
            command.name ?? this.name,
            this.code, // code cannot be changed
            command.description ?? this.description,
            this.module,
            this.category,
            this.type,
            command.isActive ?? this.isActive,
            this.createdAt,
            new Date() // updatedAt
        );
    }

    activate(): PermissionEntity {
        return new PermissionEntity(
            this.id,
            this.name,
            this.code,
            this.description,
            this.module,
            this.category,
            this.type,
            true, // isActive
            this.createdAt,
            new Date() // updatedAt
        );
    }

    deactivate(): PermissionEntity {
        return new PermissionEntity(
            this.id,
            this.name,
            this.code,
            this.description,
            this.module,
            this.category,
            this.type,
            false, // isActive
            this.createdAt,
            new Date() // updatedAt
        );
    }

    // Helper methods for permission checking
    isReadPermission(): boolean {
        return this.type === PermissionType.READ;
    }

    isWritePermission(): boolean {
        return this.type === PermissionType.WRITE;
    }

    isCreatePermission(): boolean {
        return this.type === PermissionType.CREATE;
    }

    isUpdatePermission(): boolean {
        return this.type === PermissionType.UPDATE;
    }

    isDeletePermission(): boolean {
        return this.type === PermissionType.DELETE;
    }

    isValidationPermission(): boolean {
        return this.type === PermissionType.VALIDATE;
    }

    isAdminPermission(): boolean {
        return this.type === PermissionType.ADMIN;
    }

    // Permission code generation helpers
    static generateStockPermissions(): PermissionCreateCommand[] {
        return [
            {
                name: 'Voir articles',
                code: 'article.view',
                description: 'Permission de consulter la liste des articles',
                module: 'stock',
                category: 'articles',
                type: PermissionType.READ
            },
            {
                name: 'Créer article',
                code: 'article.create',
                description: 'Permission de créer un nouvel article',
                module: 'stock',
                category: 'articles',
                type: PermissionType.CREATE
            },
            {
                name: 'Modifier article',
                code: 'article.update',
                description: 'Permission de modifier un article',
                module: 'stock',
                category: 'articles',
                type: PermissionType.UPDATE
            },
            {
                name: 'Archiver article',
                code: 'article.archive',
                description: 'Permission d\'archiver un article',
                module: 'stock',
                category: 'articles',
                type: PermissionType.UPDATE
            },
            {
                name: 'Supprimer article',
                code: 'article.delete',
                description: 'Permission de supprimer un article',
                module: 'stock',
                category: 'articles',
                type: PermissionType.DELETE
            },
            {
                name: 'Voir entrepôts',
                code: 'warehouse.view',
                description: 'Permission de consulter les entrepôts',
                module: 'stock',
                category: 'entrepôts',
                type: PermissionType.READ
            },
            {
                name: 'Créer entrepôt',
                code: 'warehouse.create',
                description: 'Permission de créer un entrepôt',
                module: 'stock',
                category: 'entrepôts',
                type: PermissionType.CREATE
            },
            {
                name: 'Modifier entrepôt',
                code: 'warehouse.update',
                description: 'Permission de modifier un entrepôt',
                module: 'stock',
                category: 'entrepôts',
                type: PermissionType.UPDATE
            },
            {
                name: 'Supprimer entrepôt',
                code: 'warehouse.delete',
                description: 'Permission de supprimer un entrepôt',
                module: 'stock',
                category: 'entrepôts',
                type: PermissionType.DELETE
            },
            {
                name: 'Créer entrée stock',
                code: 'stockEntry.create',
                description: 'Permission de créer une entrée en stock',
                module: 'stock',
                category: 'mouvements',
                type: PermissionType.CREATE
            },
            {
                name: 'Valider entrée stock',
                code: 'stockEntry.validate',
                description: 'Permission de valider une entrée en stock',
                module: 'stock',
                category: 'mouvements',
                type: PermissionType.VALIDATE
            },
            {
                name: 'Supprimer entrée stock',
                code: 'stockEntry.delete',
                description: 'Permission de supprimer une entrée en stock',
                module: 'stock',
                category: 'mouvements',
                type: PermissionType.DELETE
            }
        ];
    }

    static generateSalesPermissions(): PermissionCreateCommand[] {
        return [
            {
                name: 'Voir devis',
                code: 'devis.view',
                description: 'Permission de consulter les devis',
                module: 'sales',
                category: 'devis',
                type: PermissionType.READ
            },
            {
                name: 'Créer devis',
                code: 'devis.create',
                description: 'Permission de créer un devis',
                module: 'sales',
                category: 'devis',
                type: PermissionType.CREATE
            },
            {
                name: 'Modifier devis',
                code: 'devis.update',
                description: 'Permission de modifier un devis',
                module: 'sales',
                category: 'devis',
                type: PermissionType.UPDATE
            },
            {
                name: 'Valider devis',
                code: 'devis.validate',
                description: 'Permission de valider un devis',
                module: 'sales',
                category: 'devis',
                type: PermissionType.VALIDATE
            },
            {
                name: 'Supprimer devis',
                code: 'devis.delete',
                description: 'Permission de supprimer un devis',
                module: 'sales',
                category: 'devis',
                type: PermissionType.DELETE
            },
            {
                name: 'Convertir devis en commande',
                code: 'devis.convert',
                description: 'Permission de convertir un devis en commande',
                module: 'sales',
                category: 'devis',
                type: PermissionType.VALIDATE
            }
        ];
    }

    private static generateId(): string {
        return `perm_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
}
