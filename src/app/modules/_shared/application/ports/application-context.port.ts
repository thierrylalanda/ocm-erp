import { InjectionToken } from '@angular/core';

/**
 * Application Context Port (Interface)
 * 
 * Provides access to application-wide context information like:
 * - Current user
 * - Current company (société)
 * - Authentication state
 * 
 * This is a port (interface) in Clean Architecture terms.
 * The actual implementation (adapter) can use localStorage, sessionStorage,
 * or any other mechanism.
 * 
 * Benefits:
 * - Decouples repositories from storage mechanism
 * - Easy to test (mock the context)
 * - Easy to change storage implementation
 * - Single source of truth for context data
 * 
 * @example
 * // In repository
 * constructor(
 *   @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
 * ) {}
 * 
 * async findAll(): Promise<User[]> {
 *   const societeId = this.context.getSocieteId();
 *   return this.http.get(`/users?societeId=${societeId}`);
 * }
 */
export interface ApplicationContext {
    /**
     * Get the current société (company) ID
     */
    getSocieteId(): number;

    /**
     * Get the current user ID
     */
    getUserId(): number;

    /**
     * Get the current site ID (if applicable)
     */
    getSiteId(): number | null;

    /**
     * Get the current département ID (if applicable)
     */
    getDepartementId(): number | null;

    /**
     * Get the authentication token
     */
    getToken(): string | null;

    /**
     * Check if user is authenticated
     */
    isAuthenticated(): boolean;

    /**
     * Get user permissions
     */
    getPermissions(): string[];

    /**
     * Check if user has a specific permission
     */
    hasPermission(permission: string): boolean;

    /**
     * Get user roles
     */
    getRoles(): string[];

    /**
     * Check if user has a specific role
     */
    hasRole(role: string): boolean;

    /**
     * Get user language preference
     */
    getLanguage(): string;

    /**
     * Set société ID
     */
    setSocieteId(id: number): void;

    /**
     * Set user ID
     */
    setUserId(id: number): void;

    /**
     * Set authentication token
     */
    setToken(token: string): void;

    /**
     * Clear all context data (logout)
     */
    clear(): void;
}

/**
 * Injection token for ApplicationContext
 */
export const APPLICATION_CONTEXT = new InjectionToken<ApplicationContext>('ApplicationContext');
