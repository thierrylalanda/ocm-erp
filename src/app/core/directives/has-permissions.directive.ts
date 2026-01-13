import { Directive, Input, TemplateRef, ViewContainerRef, effect } from '@angular/core';
import { PermissionService } from '../services/auth/permission.service';

@Directive({
    selector: '[hasPermissions]',
    standalone: true
})
export class HasPermissionsDirective {

    private required: string[] = [];
    private mode: 'AND' | 'OR' = 'OR';

    constructor(
        private tpl: TemplateRef<any>,
        private vcr: ViewContainerRef,
        private permService: PermissionService
    ) {
        effect(() => {
            const _ = this.permService.permissions();
            this.updateView();
        });
    }

    /**
     * <!-- AND -->
<button *hasPermissions="{ permissions: ['CLIENT_CREATE','CLIENT_VALIDATE'], mode: 'AND' }">
  Créer & Valider Client
</button>
<!-- OR -->
<button *hasPermissions="{ permissions: ['CLIENT_CREATE','CLIENT_VALIDATE'], mode: 'OR' }">
  Modifier Client
</button>
<!-- Une seule permission -->
<button *hasPermissions="{ permissions: ['CLIENT_CREATE'] }">
  Nouveau Client
</button>
     */
    @Input() set hasPermissions(value: { permissions: string[]; mode?: 'AND' | 'OR' }) {
        this.required = value.permissions;
        this.mode = value.mode ?? 'OR';
        this.updateView();
    }

    @Input() set hasPermissionsMode(mode: 'AND' | 'OR') {
        this.mode = mode;
        this.updateView();
    }

    private updateView() {
        this.vcr.clear();

        const allowed =
            this.mode === 'AND'
                ? this.permService.hasAll(this.required)
                : this.permService.hasSome(this.required);

        if (allowed) {
            this.vcr.createEmbeddedView(this.tpl);
        }
    }
}
