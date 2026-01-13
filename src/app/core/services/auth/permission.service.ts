import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class PermissionService {
    private readonly PERMISSION_KEY = window.btoa("PERMISSION_KEY");
    permissions = signal<string[]>([]);

    constructor() {
        const stored = localStorage.getItem('permissions');
        this.permissions.set(stored ? JSON.parse(stored) : []);
         if(localStorage.getItem(this.PERMISSION_KEY)){
            const decodedBytes = new Uint8Array(window.atob(localStorage.getItem(this.PERMISSION_KEY)!).split('').map((c) => c.charCodeAt(0)));
            this.permissions.set(JSON.parse(new TextDecoder().decode(decodedBytes)));
            console.log(this.permissions());
        }
    }

    setPermissions(perms: string[]) {
        this.permissions.set(perms);
        const utf8Bytes = new TextEncoder().encode(JSON.stringify(perms));
        localStorage.setItem(this.PERMISSION_KEY, window.btoa(String.fromCharCode(...utf8Bytes)));

       // localStorage.setItem('permissions', JSON.stringify(perms));
    }

    clear() {
        this.permissions.set([]);
        localStorage.removeItem(this.PERMISSION_KEY);
    }

    has(permission: string): boolean {
        return this.permissions().includes(permission);
    }

    hasSome(required: string[]): boolean {
        return required.some(p => this.has(p));
    }

    hasAll(required: string[]): boolean {
        return required.every(p => this.has(p));
    }
}

