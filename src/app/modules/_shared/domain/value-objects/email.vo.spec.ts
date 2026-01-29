import { Email } from './email.vo';
import { ValidationError } from '../errors/domain.error';

describe('Email Value Object', () => {
    describe('create', () => {
        it('should create valid email', () => {
            const result = Email.create('user@example.com');

            expect(result.isSuccess).toBe(true);
            expect(result.value.getValue()).toBe('user@example.com');
        });

        it('should normalize email to lowercase', () => {
            const result = Email.create('USER@EXAMPLE.COM');

            expect(result.isSuccess).toBe(true);
            expect(result.value.getValue()).toBe('user@example.com');
        });

        it('should fail for empty email', () => {
            const result = Email.create('');

            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(ValidationError);
            expect(result.error.message).toContain('Email requis');
        });

        it('should fail for email without @', () => {
            const result = Email.create('invalidemail.com');

            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(ValidationError);
            expect(result.error.message).toContain('invalide');
        });

        it('should fail for email without domain', () => {
            const result = Email.create('user@');

            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(ValidationError);
        });

        it('should fail for email too long', () => {
            const longEmail = 'a'.repeat(250) + '@example.com';
            const result = Email.create(longEmail);

            expect(result.isFailure).toBe(true);
            expect(result.error.message).toContain('trop long');
        });

        it('should trim whitespace', () => {
            const result = Email.create('  user@example.com  ');

            expect(result.isSuccess).toBe(true);
            expect(result.value.getValue()).toBe('user@example.com');
        });
    });

    describe('getDomain', () => {
        it('should return domain part', () => {
            const email = Email.create('user@example.com').value;

            expect(email.getDomain()).toBe('example.com');
        });

        it('should return subdomain correctly', () => {
            const email = Email.create('user@mail.example.com').value;

            expect(email.getDomain()).toBe('mail.example.com');
        });
    });

    describe('getLocalPart', () => {
        it('should return local part', () => {
            const email = Email.create('user@example.com').value;

            expect(email.getLocalPart()).toBe('user');
        });

        it('should handle dots in local part', () => {
            const email = Email.create('first.last@example.com').value;

            expect(email.getLocalPart()).toBe('first.last');
        });
    });

    describe('isFromDomain', () => {
        it('should return true for matching domain', () => {
            const email = Email.create('user@example.com').value;

            expect(email.isFromDomain('example.com')).toBe(true);
        });

        it('should return false for different domain', () => {
            const email = Email.create('user@example.com').value;

            expect(email.isFromDomain('other.com')).toBe(false);
        });

        it('should be case insensitive', () => {
            const email = Email.create('user@example.com').value;

            expect(email.isFromDomain('EXAMPLE.COM')).toBe(true);
        });
    });

    describe('equals', () => {
        it('should return true for same email', () => {
            const email1 = Email.create('user@example.com').value;
            const email2 = Email.create('user@example.com').value;

            expect(email1.equals(email2)).toBe(true);
        });

        it('should return true for same email with different case', () => {
            const email1 = Email.create('user@example.com').value;
            const email2 = Email.create('USER@EXAMPLE.COM').value;

            expect(email1.equals(email2)).toBe(true);
        });

        it('should return false for different emails', () => {
            const email1 = Email.create('user1@example.com').value;
            const email2 = Email.create('user2@example.com').value;

            expect(email1.equals(email2)).toBe(false);
        });
    });

    describe('toString', () => {
        it('should return email as string', () => {
            const email = Email.create('user@example.com').value;

            expect(email.toString()).toBe('user@example.com');
        });
    });
});
