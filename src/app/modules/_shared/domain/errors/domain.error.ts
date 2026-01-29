/**
 * Base class for all domain errors
 * 
 * Domain errors represent business rule violations or domain-specific failures.
 * They should be used instead of generic Error objects for better error handling.
 */
export abstract class DomainError extends Error {
    public readonly timestamp: Date;
    public readonly code: string;

    protected constructor(
        message: string,
        code: string = 'DOMAIN_ERROR'
    ) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.timestamp = new Date();

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if ((Error as any).captureStackTrace) {
            (Error as any).captureStackTrace(this, this.constructor);
        }
    }

    /**
     * Convert error to JSON for logging/API responses
     */
    toJSON(): Record<string, any> {
        return {
            name: this.name,
            code: this.code,
            message: this.message,
            timestamp: this.timestamp.toISOString()
        };
    }
}

/**
 * Validation error - used when input validation fails
 */
export class ValidationError extends DomainError {
    constructor(message: string, public readonly field?: string) {
        super(message, 'VALIDATION_ERROR');
    }

    override toJSON(): Record<string, any> {
        return {
            ...super.toJSON(),
            field: this.field
        };
    }
}

/**
 * Not found error - used when an entity is not found
 */
export class NotFoundError extends DomainError {
    constructor(
        entityName: string,
        identifier: string | number
    ) {
        super(`${entityName} avec l'identifiant ${identifier} introuvable`, 'NOT_FOUND');
    }
}

/**
 * Already exists error - used when trying to create a duplicate
 */
export class AlreadyExistsError extends DomainError {
    constructor(
        entityName: string,
        field: string,
        value: string
    ) {
        super(`${entityName} avec ${field} '${value}' existe déjà`, 'ALREADY_EXISTS');
    }
}

/**
 * Unauthorized error - used when user lacks permissions
 */
export class UnauthorizedError extends DomainError {
    constructor(action: string) {
        super(`Non autorisé à effectuer l'action: ${action}`, 'UNAUTHORIZED');
    }
}

/**
 * Business rule violation error
 */
export class BusinessRuleViolationError extends DomainError {
    constructor(rule: string) {
        super(`Violation de règle métier: ${rule}`, 'BUSINESS_RULE_VIOLATION');
    }
}

/**
 * Infrastructure error - used for technical failures
 */
export class InfrastructureError extends DomainError {
    constructor(message: string, public readonly originalError?: Error) {
        super(message, 'INFRASTRUCTURE_ERROR');
    }

    override toJSON(): Record<string, any> {
        return {
            ...super.toJSON(),
            originalError: this.originalError?.message
        };
    }
}
