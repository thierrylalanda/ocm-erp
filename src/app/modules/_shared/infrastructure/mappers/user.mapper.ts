import { User, UserId, UserEntity } from '../../domain/entities/user.entity';

export class UserMapper {
    static toEntity(user: User): UserEntity {
        return new UserEntity(
            user.id,
            user.username,
            user.email,
            user.firstName,
            user.lastName,
            user.phoneNumber,
            user.isActive,
            user.isEmailVerified,
            user.lastLoginAt,
            user.createdAt,
            user.updatedAt,
            user.deletedAt,
            user.tenantId,
            user.roles,
            user.permissions
        );
    }

    static fromEntity(entity: UserEntity): User {
        return {
            id: entity.id,
            username: entity.username,
            email: entity.email,
            firstName: entity.firstName,
            lastName: entity.lastName,
            phoneNumber: entity.phoneNumber,
            isActive: entity.isActive,
            isEmailVerified: entity.isEmailVerified,
            lastLoginAt: entity.lastLoginAt,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
            tenantId: entity.tenantId,
            roles: entity.roles,
            permissions: entity.permissions
        };
    }

    static toEntityList(users: User[]): UserEntity[] {
        return users.map(user => this.toEntity(user));
    }

    static fromEntityList(entities: UserEntity[]): User[] {
        return entities.map(entity => this.fromEntity(entity));
    }
}
