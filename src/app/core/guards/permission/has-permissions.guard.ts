import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { computed } from '@angular/core';
import { PermissionService } from '../../services/auth/permission.service';

export function hasPermissions(
    permissions: string[],
    mode: 'AND' | 'OR' = 'OR'
) {
    return () => {
        const permService = inject(PermissionService);
        const router = inject(Router);

        // computed → devient réactif automatiquement selon les permissions()
        const isAllowed = computed(() => {
            return mode === 'AND'
                ? permService.hasAll(permissions)
                : permService.hasSome(permissions);
        });

        if (!isAllowed()) {
            router.navigate(['/auth/login']);
            return false;
        }

        return true;
    };
}
