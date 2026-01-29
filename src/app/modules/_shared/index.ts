// ==================== BASE CLASSES ====================
export { ValueObject } from './domain/base/value-object.base';

// ==================== DOMAIN ENTITIES ====================
export type { User, UserId, UserCreateCommand, UserUpdateCommand } from './domain/entities/user.entity';
export { UserEntity } from './domain/entities/user.entity';
export type { Tenant, TenantId, TenantCreateCommand, TenantUpdateCommand } from './domain/entities/tenant.entity';
export { TenantEntity } from './domain/entities/tenant.entity';
export type { Permission, PermissionId, PermissionCreateCommand, PermissionUpdateCommand } from './domain/entities/permission.entity';
export { PermissionEntity, PermissionType } from './domain/entities/permission.entity';

// ==================== VALUE OBJECTS ====================
// Existing
export type { Money } from './domain/value-objects/money.vo';
export { MoneyVO } from './domain/value-objects/money.vo';
export type { DateRange } from './domain/value-objects/date-range.vo';
export { DateRangeVO } from './domain/value-objects/date-range.vo';

// New - Clean Architecture// Value Objects
export * from './domain/base/value-object.base';
export * from './domain/value-objects/email.vo';
export * from './domain/value-objects/phone-number.vo';
export * from './domain/value-objects/user-name.vo';
export * from './domain/value-objects/user-status.vo';

// Result Pattern
export * from './domain/types/result.type';

// Domain Errors
export * from './domain/errors/domain.error';

// ==================== ERRORS ====================
export {
    DomainError,
    ValidationError,
    NotFoundError,
    AlreadyExistsError,
    UnauthorizedError,
    BusinessRuleViolationError,
    InfrastructureError
} from './domain/errors/domain.error';

// Repository Interfaces
export type { UserRepository, UserRepositoryQueryOptions, UserRepositorySearchResult } from './domain/repositories/user.repository';
export { BaseUserRepository } from './domain/repositories/user.repository';
export type { TenantRepository, TenantRepositoryQueryOptions, TenantRepositorySearchResult } from './domain/repositories/tenant.repository';
export { BaseTenantRepository } from './domain/repositories/tenant.repository';

// ==================== APPLICATION PORTS ====================
export type { ApplicationContext } from './application/ports/application-context.port';
export { APPLICATION_CONTEXT } from './application/ports/application-context.port';

// ==================== USE CASES ====================
export { AuthenticateUserUseCase } from './application/use-cases/authenticate-user.use-case';
export type { LoginCredentials, LoginResult, RegisterCommand, RegisterResult } from './application/use-cases/authenticate-user.use-case';

// ==================== INFRASTRUCTURE ====================
// Adapters
export { LocalStorageContextAdapter } from './infrastructure/adapters/local-storage-context.adapter';

// Mappers
export { UserMapper } from './infrastructure/mappers/user.mapper';

// ==================== MODULE ====================
export { SharedModule } from './_shared.module';
