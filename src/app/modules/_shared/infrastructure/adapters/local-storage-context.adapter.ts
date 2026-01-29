import { Injectable, Inject } from '@angular/core';
import { ApplicationContext } from '../../application/ports/application-context.port';

/**
 * LocalStorage implementation of ApplicationContext
 * 
 * This is an adapter that implements the ApplicationContext port
 * using browser's localStorage.
 * 
 * @example
 * // In app.config.ts
 * providers: [
 *   {
 *     provide: APPLICATION_CONTEXT,
 *     useClass: LocalStorageContextAdapter
 *   }
 * ]
 */
@Injectable({
    providedIn: 'root'
})
export class LocalStorageContextAdapter implements ApplicationContext {
    private static readonly KEYS = {
        SOCIETE_ID: 'societeId',
        USER_ID: 'userId',
        SITE_ID: 'siteId',
        DEPARTEMENT_ID: 'departementId',
        TOKEN: 'authToken',
        PERMISSIONS: 'permissions',
        ROLES: 'roles',
        LANGUAGE: 'language'
    };

    constructor(
        @Inject('LOCAL_STORAGE') private storage: Storage
    ) { }

    getSocieteId(): number {
        const id = this.storage.getItem(LocalStorageContextAdapter.KEYS.SOCIETE_ID);
        return id ? parseInt(id, 10) : 0;
    }

    getUserId(): number {
        const id = this.storage.getItem(LocalStorageContextAdapter.KEYS.USER_ID);
        return id ? parseInt(id, 10) : 0;
    }

    getSiteId(): number | null {
        const id = this.storage.getItem(LocalStorageContextAdapter.KEYS.SITE_ID);
        return id ? parseInt(id, 10) : null;
    }

    getDepartementId(): number | null {
        const id = this.storage.getItem(LocalStorageContextAdapter.KEYS.DEPARTEMENT_ID);
        return id ? parseInt(id, 10) : null;
    }

    getToken(): string | null {
        return this.storage.getItem(LocalStorageContextAdapter.KEYS.TOKEN);
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    getPermissions(): string[] {
        const permissions = this.storage.getItem(LocalStorageContextAdapter.KEYS.PERMISSIONS);
        return permissions ? JSON.parse(permissions) : [];
    }

    hasPermission(permission: string): boolean {
        return this.getPermissions().includes(permission);
    }

    getRoles(): string[] {
        const roles = this.storage.getItem(LocalStorageContextAdapter.KEYS.ROLES);
        return roles ? JSON.parse(roles) : [];
    }

    hasRole(role: string): boolean {
        return this.getRoles().includes(role);
    }

    getLanguage(): string {
        return this.storage.getItem(LocalStorageContextAdapter.KEYS.LANGUAGE) || 'fr';
    }

    setSocieteId(id: number): void {
        this.storage.setItem(LocalStorageContextAdapter.KEYS.SOCIETE_ID, id.toString());
    }

    setUserId(id: number): void {
        this.storage.setItem(LocalStorageContextAdapter.KEYS.USER_ID, id.toString());
    }

    setToken(token: string): void {
        this.storage.setItem(LocalStorageContextAdapter.KEYS.TOKEN, token);
    }

    clear(): void {
        Object.values(LocalStorageContextAdapter.KEYS).forEach(key => {
            this.storage.removeItem(key);
        });
    }
}
