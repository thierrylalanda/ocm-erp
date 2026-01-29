import { ValueObject } from '../base/value-object.base';
import { Result } from '../types/result.type';
import { ValidationError } from '../errors/domain.error';

/**
 * Email Value Object
 * 
 * Ensures email validity and normalization (lowercase).
 * Immutable and self-validating.
 * 
 * @example
 * const emailResult = Email.create('user@example.com');
 * if (emailResult.isSuccess) {
 *   const email = emailResult.value;
 *   console.log(email.getValue()); // 'user@example.com'
 * }
 */
export class Email extends ValueObject<string> {
    private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    private static readonly MAX_LENGTH = 255;

    private constructor(value: string) {
        super(value);
    }

    /**
     * Create an Email value object
     * 
     * @param email - The email string to validate
     * @returns Result with Email or ValidationError
     */
    static create(email: string): Result<Email, ValidationError> {
        // Check if empty
        if (!email || email.trim().length === 0) {
            return Result.fail(new ValidationError('Email requis', 'email'));
        }

        // Normalize
        const normalizedEmail = email.trim().toLowerCase();

        // Check length
        if (normalizedEmail.length > this.MAX_LENGTH) {
            return Result.fail(
                new ValidationError(`Email trop long (max ${this.MAX_LENGTH} caractères)`, 'email')
            );
        }

        // Check format
        if (!this.EMAIL_REGEX.test(normalizedEmail)) {
            return Result.fail(new ValidationError('Format d\'email invalide', 'email'));
        }

        return Result.ok(new Email(normalizedEmail));
    }

    /**
     * Get the domain part of the email
     * @example email.getDomain() // 'example.com'
     */
    getDomain(): string {
        return this.value.split('@')[1];
    }

    /**
     * Get the local part of the email
     * @example email.getLocalPart() // 'user'
     */
    getLocalPart(): string {
        return this.value.split('@')[0];
    }

    /**
     * Check if email is from a specific domain
     */
    isFromDomain(domain: string): boolean {
        return this.getDomain().toLowerCase() === domain.toLowerCase();
    }
}
