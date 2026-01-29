import { ValueObject } from '../base/value-object.base';
import { Result } from '../types/result.type';
import { ValidationError } from '../errors/domain.error';

/**
 * PhoneNumber Value Object
 * 
 * Validates and normalizes phone numbers.
 * Supports international format with country code.
 * 
 * @example
 * const phoneResult = PhoneNumber.create('+237690123456');
 * if (phoneResult.isSuccess) {
 *   const phone = phoneResult.value;
 *   console.log(phone.getFormatted()); // '+237 690 123 456'
 * }
 */
export class PhoneNumber extends ValueObject<string> {
    private static readonly PHONE_REGEX = /^[\d\s\-\+\(\)]{8,20}$/;
    private static readonly MIN_LENGTH = 8;
    private static readonly MAX_LENGTH = 20;

    private constructor(value: string) {
        super(value);
    }

    /**
     * Create a PhoneNumber value object
     * 
     * @param phone - The phone number string to validate
     * @returns Result with PhoneNumber or ValidationError
     */
    static create(phone: string): Result<PhoneNumber, ValidationError> {
        // Check if empty
        if (!phone || phone.trim().length === 0) {
            return Result.fail(new ValidationError('Numéro de téléphone requis', 'telephone'));
        }

        // Normalize (remove spaces)
        const normalizedPhone = phone.trim();

        // Check length
        if (normalizedPhone.length < this.MIN_LENGTH) {
            return Result.fail(
                new ValidationError(`Numéro de téléphone trop court (min ${this.MIN_LENGTH} caractères)`, 'telephone')
            );
        }

        if (normalizedPhone.length > this.MAX_LENGTH) {
            return Result.fail(
                new ValidationError(`Numéro de téléphone trop long (max ${this.MAX_LENGTH} caractères)`, 'telephone')
            );
        }

        // Check format
        if (!this.PHONE_REGEX.test(normalizedPhone)) {
            return Result.fail(new ValidationError('Format de numéro de téléphone invalide', 'telephone'));
        }

        return Result.ok(new PhoneNumber(normalizedPhone));
    }

    /**
     * Get formatted phone number
     * @example '+237690123456' -> '+237 690 123 456'
     */
    getFormatted(): string {
        // Remove all non-digit characters except +
        const cleaned = this.value.replace(/[^\d+]/g, '');

        // Format with spaces
        if (cleaned.startsWith('+')) {
            const countryCode = cleaned.substring(0, 4);
            const rest = cleaned.substring(4);
            return `${countryCode} ${rest.match(/.{1,3}/g)?.join(' ') || rest}`;
        }

        return cleaned.match(/.{1,3}/g)?.join(' ') || cleaned;
    }

    /**
     * Get digits only (no formatting)
     */
    getDigitsOnly(): string {
        return this.value.replace(/\D/g, '');
    }

    /**
     * Check if phone number is international (starts with +)
     */
    isInternational(): boolean {
        return this.value.startsWith('+');
    }

    /**
     * Get country code (if international)
     */
    getCountryCode(): string | null {
        if (!this.isInternational()) {
            return null;
        }

        // Extract country code (usually 1-4 digits after +)
        const match = this.value.match(/^\+(\d{1,4})/);
        return match ? match[1] : null;
    }
}
