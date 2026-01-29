
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PermissionService } from '../../services/auth/permission.service';
import { ToasterService } from '../../services/toaster/toaster.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {

    constructor(
        private permissionService: PermissionService,
        private toasterService: ToasterService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const permissions: string[] = route.data['permissions'] || [];
        const mode: 'AND' | 'OR' = route.data['mode'] || 'OR';

        if (!permissions.length) return false; // aucune permission → accès autorisé

        const hasPermissions =
            mode === 'AND'
                ? permissions.every(p => this.permissionService.has(p))
                : permissions.some(p => this.permissionService.has(p));

        if (!hasPermissions) {
            // redirection si pas autorisé
            //this.router.navigate(['/forbidden']);
            this.toasterService.typeInfo('Impossible d\'accéder à cette page', 'Erreur');
            return false;
        }

        return true;
    }
}
