import { Injectable, Inject } from '@angular/core';
import { UserRepository, USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { UserEntity, UserCreateCommand } from '../../domain/entities/user.entity';
import { UserMapper } from '../../infrastructure/mappers/user.mapper';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResult {
    success: boolean;
    user?: UserEntity;
    token?: string;
    refreshToken?: string;
    error?: string;
}

export interface RegisterCommand {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    tenantId: string;
}

export interface RegisterResult {
    success: boolean;
    user?: UserEntity;
    error?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthenticateUserUseCase {
    constructor(@Inject(USER_REPOSITORY) private userRepository: UserRepository) { }

    async login(credentials: LoginCredentials): Promise<LoginResult> {
        try {
            // Validate input
            if (!credentials.email || !credentials.password) {
                return {
                    success: false,
                    error: 'Email and password are required'
                };
            }

            // Find user by email
            const user = await this.userRepository.findByEmail(credentials.email);
            if (!user) {
                return {
                    success: false,
                    error: 'Invalid credentials'
                };
            }

            // Convert to entity
            const userEntity = UserMapper.toEntity(user);

            // Check if user is active
            if (!userEntity.isActive) {
                return {
                    success: false,
                    error: 'Account is deactivated'
                };
            }

            // Verify password (in real implementation, this would use bcrypt or similar)
            const isValidPassword = await this.verifyPassword(credentials.password, userEntity);
            if (!isValidPassword) {
                return {
                    success: false,
                    error: 'Invalid credentials'
                };
            }

            // Update last login
            const updatedUser = userEntity.recordLogin();
            await this.userRepository.update(UserMapper.fromEntity(updatedUser));

            // Generate tokens (in real implementation, this would use JWT)
            const token = this.generateToken(updatedUser);
            const refreshToken = this.generateRefreshToken(updatedUser);

            return {
                success: true,
                user: updatedUser,
                token,
                refreshToken
            };

        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                error: 'An unexpected error occurred'
            };
        }
    }

    async register(command: RegisterCommand): Promise<RegisterResult> {
        try {
            // Validate input
            if (!command.email || !command.password || !command.firstName || !command.lastName) {
                return {
                    success: false,
                    error: 'All required fields must be provided'
                };
            }

            // Check if user already exists
            const existingUser = await this.userRepository.findByEmail(command.email);
            if (existingUser) {
                return {
                    success: false,
                    error: 'User with this email already exists'
                };
            }

            // Create user entity
            const createCommand: UserCreateCommand = {
                username: command.email, // Using email as username for now
                email: command.email,
                password: command.password, // In real implementation, this would be hashed
                firstName: command.firstName,
                lastName: command.lastName,
                phoneNumber: command.phoneNumber,
                tenantId: command.tenantId,
                roles: ['user'] // Default role
            };

            const user = UserEntity.create(createCommand);

            // Save user
            const savedUser = await this.userRepository.create(user);

            return {
                success: true,
                user: user
            };

        } catch (error) {
            console.error('Registration error:', error);
            return {
                success: false,
                error: 'An unexpected error occurred during registration'
            };
        }
    }

    async logout(userId: string): Promise<void> {
        try {
            // In a real implementation, you might:
            // - Invalidate the token on the server
            // - Clear any session data
            // - Update user status if needed

            console.log(`User ${userId} logged out`);

        } catch (error) {
            console.error('Logout error:', error);
            throw new Error('Failed to logout');
        }
    }

    async refreshToken(refreshToken: string): Promise<LoginResult> {
        try {
            // In a real implementation, this would:
            // - Validate the refresh token
            // - Generate a new access token
            // - Return the new token

            // For now, return an error as this is a placeholder
            return {
                success: false,
                error: 'Token refresh not implemented'
            };

        } catch (error) {
            console.error('Token refresh error:', error);
            return {
                success: false,
                error: 'Failed to refresh token'
            };
        }
    }

    async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
        try {
            // Find user
            const user = await this.userRepository.findById({ value: userId });
            if (!user) {
                return {
                    success: false,
                    error: 'User not found'
                };
            }

            // Convert to entity
            const userEntity = UserMapper.toEntity(user);

            // Verify current password
            const isValidCurrentPassword = await this.verifyPassword(currentPassword, userEntity);
            if (!isValidCurrentPassword) {
                return {
                    success: false,
                    error: 'Current password is incorrect'
                };
            }

            // Update password (in real implementation, this would hash the new password)
            // For now, we'll just update the user entity
            const updatedUser = userEntity.update({});
            await this.userRepository.update(UserMapper.fromEntity(updatedUser));

            return {
                success: true
            };

        } catch (error) {
            console.error('Password change error:', error);
            return {
                success: false,
                error: 'Failed to change password'
            };
        }
    }

    async resetPassword(email: string): Promise<{ success: boolean; error?: string }> {
        try {
            // Find user by email
            const user = await this.userRepository.findByEmail(email);
            if (!user) {
                // Don't reveal whether email exists for security
                return {
                    success: true
                };
            }

            // In a real implementation, this would:
            // - Generate a reset token
            // - Send an email with reset instructions
            // - Store the reset token with expiration

            console.log(`Password reset requested for user: ${user.email}`);

            return {
                success: true
            };

        } catch (error) {
            console.error('Password reset error:', error);
            return {
                success: false,
                error: 'Failed to process password reset request'
            };
        }
    }

    // Private helper methods
    private async verifyPassword(password: string, user: UserEntity): Promise<boolean> {
        // In a real implementation, this would compare hashed passwords
        // For now, we'll use a simple placeholder
        // In production, NEVER store passwords in plain text
        return password === 'password'; // This is just for demonstration
    }

    private generateToken(user: UserEntity): string {
        // In a real implementation, this would generate a JWT token
        // For now, return a placeholder
        return `token_${user.id.value}_${Date.now()}`;
    }

    private generateRefreshToken(user: UserEntity): string {
        // In a real implementation, this would generate a refresh token
        // For now, return a placeholder
        return `refresh_${user.id.value}_${Date.now()}`;
    }
}
