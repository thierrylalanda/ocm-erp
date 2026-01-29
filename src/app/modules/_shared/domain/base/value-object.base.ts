/**
 * Base class for Value Objects
 * 
 * Value Objects are immutable objects that represent a descriptive aspect of the domain
 * with no conceptual identity. They are defined only by their attributes.
 * 
 * @example
 * export class Email extends ValueObject<string> {
 *   private constructor(value: string) {
 *     super(value);
 *   }
 *   
 *   static create(email: string): Result<Email, ValidationError> {
 *     if (!this.isValid(email)) {
 *       return Result.fail(new ValidationError('Email invalide'));
 *     }
 *     return Result.ok(new Email(email));
 *   }
 * }
 */
export abstract class ValueObject<T> {
    protected readonly value: T;

    protected constructor(value: T) {
        this.value = Object.freeze(value);
    }

    /**
     * Get the value
     */
    getValue(): T {
        return this.value;
    }

    /**
     * Compare two value objects for equality
     */
    equals(vo?: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }

        if (vo.value === undefined) {
            return false;
        }

        return JSON.stringify(this.value) === JSON.stringify(vo.value);
    }

    /**
     * Convert to string representation
     */
    toString(): string {
        return String(this.value);
    }
}
