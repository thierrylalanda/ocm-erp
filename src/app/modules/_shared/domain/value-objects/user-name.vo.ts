import { ValueObject } from '../base/value-object.base';
import { Result } from '../types/result.type';
import { ValidationError } from '../errors/domain.error';

/**
 * UserName Value Object
 * 
 * Validates and normalizes usernames.
 * Ensures uniqueness constraints and format rules.
 * 
 * @example
 * const usernameResult = UserName.create('john.doe');
 * if (usernameResult.isSuccess) {
 *   const username = usernameResult.value;
 *   console.log(username.getValue()); // 'john.doe'
 * }
 */
export class UserName extends ValueObject<string> {
    private static readonly USERNAME_REGEX = /^[a-zA-Z0-9._-]{3,30}$/;
    private static readonly MIN_LENGTH = 3;
    private static readonly MAX_LENGTH = 30;
    private static readonly RESERVED_NAMES = [
        'admin', 'administrator', 'root', 'system', 'superuser',
        'test', 'demo', 'guest', 'anonymous', 'null', 'undefined'
    ];

    private constructor(value: string) {
        super(value);
    }

    /**
     * Create a UserName value object
     * 
     * @param username - The username string to validate
     * @returns Result with UserName or ValidationError
     */
    static create(username: string): Result<UserName, ValidationError> {
        // Check if empty
        if (!username || username.trim().length === 0) {
            return Result.fail(new ValidationError('Nom d\'utilisateur requis', 'userName'));
        }

        // Normalize (trim and lowercase)
        const normalizedUsername = username.trim().toLowerCase();

        // Check length
        if (normalizedUsername.length < this.MIN_LENGTH) {
            return Result.fail(
                new ValidationError(
                    `Nom d'utilisateur trop court (min ${this.MIN_LENGTH} caractères)`,
                    'userName'
                )
            );
        }

        if (normalizedUsername.length > this.MAX_LENGTH) {
            return Result.fail(
                new ValidationError(
                    `Nom d'utilisateur trop long (max ${this.MAX_LENGTH} caractères)`,
                    'userName'
                )
            );
        }

        // Check format (alphanumeric, dots, underscores, hyphens only)
        if (!this.USERNAME_REGEX.test(normalizedUsername)) {
            return Result.fail(
                new ValidationError(
                    'Nom d\'utilisateur invalide (lettres, chiffres, ., _, - uniquement)',
                    'userName'
                )
            );
        }

        // Check reserved names
        if (this.RESERVED_NAMES.includes(normalizedUsername)) {
            return Result.fail(
                new ValidationError('Ce nom d\'utilisateur est réservé', 'userName')
            );
        }

        // Check for consecutive special characters
        if (/[._-]{2,}/.test(normalizedUsername)) {
            return Result.fail(
                new ValidationError(
                    'Le nom d\'utilisateur ne peut pas contenir de caractères spéciaux consécutifs',
                    'userName'
                )
            );
        }

        // Check if starts or ends with special character
        if (/^[._-]|[._-]$/.test(normalizedUsername)) {
            return Result.fail(
                new ValidationError(
                    'Le nom d\'utilisateur ne peut pas commencer ou finir par un caractère spécial',
                    'userName'
                )
            );
        }

        return Result.ok(new UserName(normalizedUsername));
    }

    /**
     * Check if username contains only alphanumeric characters
     */
    isAlphanumericOnly(): boolean {
        return /^[a-zA-Z0-9]+$/.test(this.value);
    }

    /**
     * Get display name (capitalize first letter)
     */
    getDisplayName(): string {
        return this.value.charAt(0).toUpperCase() + this.value.slice(1);
    }
}
