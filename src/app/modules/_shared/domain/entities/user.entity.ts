export interface UserId {
    value: string;
}

export interface User {
    id: UserId;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    isActive: boolean;
    isEmailVerified: boolean;
    lastLoginAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;

    // Relations
    tenantId: string;
    roles: string[];
    permissions: string[];
}

export interface UserCreateCommand {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    tenantId: string;
    roles?: string[];
}

export interface UserUpdateCommand {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    isActive?: boolean;
    roles?: string[];
}

export class UserEntity implements User {
    constructor(
        public readonly id: UserId,
        public readonly username: string,
        public readonly email: string,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phoneNumber: string | undefined,
        public readonly isActive: boolean,
        public readonly isEmailVerified: boolean,
        public readonly lastLoginAt: Date | undefined,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
        public readonly deletedAt: Date | undefined,
        public readonly tenantId: string,
        public readonly roles: string[],
        public readonly permissions: string[]
    ) { }

    // Domain logic
    static create(command: UserCreateCommand): UserEntity {
        const now = new Date();
        const userId: UserId = { value: this.generateId() };

        return new UserEntity(
            userId,
            command.username,
            command.email,
            command.firstName,
            command.lastName,
            command.phoneNumber,
            true, // isActive
            false, // isEmailVerified
            undefined, // lastLoginAt
            now, // createdAt
            now, // updatedAt
            undefined, // deletedAt
            command.tenantId,
            command.roles || [],
            [] // permissions will be populated from roles
        );
    }

    update(command: UserUpdateCommand): UserEntity {
        return new UserEntity(
            this.id,
            this.username,
            this.email,
            command.firstName ?? this.firstName,
            command.lastName ?? this.lastName,
            command.phoneNumber ?? this.phoneNumber,
            command.isActive ?? this.isActive,
            this.isEmailVerified,
            this.lastLoginAt,
            this.createdAt,
            new Date(), // updatedAt
            this.deletedAt,
            this.tenantId,
            command.roles ?? this.roles,
            this.permissions
        );
    }

    markAsDeleted(): UserEntity {
        return new UserEntity(
            this.id,
            this.username,
            this.email,
            this.firstName,
            this.lastName,
            this.phoneNumber,
            false, // isActive
            this.isEmailVerified,
            this.lastLoginAt,
            this.createdAt,
            new Date(), // updatedAt
            new Date(), // deletedAt
            this.tenantId,
            this.roles,
            this.permissions
        );
    }

    recordLogin(): UserEntity {
        return new UserEntity(
            this.id,
            this.username,
            this.email,
            this.firstName,
            this.lastName,
            this.phoneNumber,
            this.isActive,
            this.isEmailVerified,
            new Date(), // lastLoginAt
            this.createdAt,
            new Date(), // updatedAt
            this.deletedAt,
            this.tenantId,
            this.roles,
            this.permissions
        );
    }

    hasPermission(permission: string): boolean {
        return this.permissions.includes(permission);
    }

    hasAnyPermission(permissions: string[]): boolean {
        return permissions.some(permission => this.hasPermission(permission));
    }

    hasAllPermissions(permissions: string[]): boolean {
        return permissions.every(permission => this.hasPermission(permission));
    }

    private static generateId(): string {
        return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
}
