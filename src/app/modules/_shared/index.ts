// Domain Entities
export type { User, UserId, UserCreateCommand, UserUpdateCommand } from './domain/entities/user.entity';
export { UserEntity } from './domain/entities/user.entity';
export type { Tenant, TenantId, TenantCreateCommand, TenantUpdateCommand } from './domain/entities/tenant.entity';
export { TenantEntity } from './domain/entities/tenant.entity';
export type { Permission, PermissionId, PermissionCreateCommand, PermissionUpdateCommand } from './domain/entities/permission.entity';
export { PermissionEntity, PermissionType } from './domain/entities/permission.entity';

// Value Objects
export type { Money } from './domain/value-objects/money.vo';
export { MoneyVO } from './domain/value-objects/money.vo';
export type { DateRange } from './domain/value-objects/date-range.vo';
export { DateRangeVO } from './domain/value-objects/date-range.vo';

// Repository Interfaces
export type { UserRepository, UserRepositoryQueryOptions, UserRepositorySearchResult } from './domain/repositories/user.repository';
export { BaseUserRepository } from './domain/repositories/user.repository';
export type { TenantRepository, TenantRepositoryQueryOptions, TenantRepositorySearchResult } from './domain/repositories/tenant.repository';
export { BaseTenantRepository } from './domain/repositories/tenant.repository';

// Use Cases
export { AuthenticateUserUseCase } from './application/use-cases/authenticate-user.use-case';
export type { LoginCredentials, LoginResult, RegisterCommand, RegisterResult } from './application/use-cases/authenticate-user.use-case';

// Mappers
export { UserMapper } from './infrastructure/mappers/user.mapper';

// Module
export { SharedModule } from './_shared.module';
