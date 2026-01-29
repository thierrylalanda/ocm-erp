import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

/**
 * Type de toast
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';

/**
 * Position du toast
 */
export type ToastPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

/**
 * Configuration d'un toast
 */
export interface Toast {
    /** ID unique */
    id: string;
    /** Type */
    type: ToastType;
    /** Titre */
    title?: string;
    /** Message */
    message: string;
    /** Durée d'affichage (ms), 0 = permanent */
    duration?: number;
    /** Position */
    position?: ToastPosition;
    /** Afficher le bouton de fermeture */
    showCloseButton?: boolean;
    /** Action personnalisée */
    action?: {
        label: string;
        callback: () => void;
    };
}

/**
 * Service de gestion des toasts
 */
@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private toasts$ = new BehaviorSubject<Toast[]>([]);

    getToasts() {
        return this.toasts$.asObservable();
    }

    /**
     * Afficher un toast
     */
    show(toast: Omit<Toast, 'id'>): string {
        const id = this.generateId();
        const newToast: Toast = {
            id,
            duration: 5000,
            position: 'top-right',
            showCloseButton: true,
            ...toast
        };

        const currentToasts = this.toasts$.value;
        this.toasts$.next([...currentToasts, newToast]);

        // Auto-dismiss
        if (newToast.duration && newToast.duration > 0) {
            setTimeout(() => this.remove(id), newToast.duration);
        }

        return id;
    }

    /**
     * Afficher un toast de succès
     */
    success(message: string, title?: string, duration?: number): string {
        return this.show({ type: 'success', message, title, duration });
    }

    /**
     * Afficher un toast d'erreur
     */
    error(message: string, title?: string, duration?: number): string {
        return this.show({ type: 'error', message, title, duration });
    }

    /**
     * Afficher un toast d'avertissement
     */
    warning(message: string, title?: string, duration?: number): string {
        return this.show({ type: 'warning', message, title, duration });
    }

    /**
     * Afficher un toast d'information
     */
    info(message: string, title?: string, duration?: number): string {
        return this.show({ type: 'info', message, title, duration });
    }

    /**
     * Supprimer un toast
     */
    remove(id: string): void {
        const currentToasts = this.toasts$.value;
        this.toasts$.next(currentToasts.filter(t => t.id !== id));
    }

    /**
     * Supprimer tous les toasts
     */
    clear(): void {
        this.toasts$.next([]);
    }

    /**
     * Générer un ID unique
     */
    private generateId(): string {
        return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}

/**
 * Composant Toast Container
 * 
 * Features:
 * - 4 types (success, error, warning, info)
 * - Positions configurables
 * - Auto-dismiss
 * - Actions personnalisées
 * - Animations
 * 
 * @example
 * ```html
 * <app-toast-container></app-toast-container>
 * ```
 * 
 * ```typescript
 * constructor(private toastService: ToastService) {}
 * 
 * showSuccess() {
 *   this.toastService.success('Opération réussie !');
 * }
 * ```
 */
@Component({
    selector: 'app-toast-container',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="toast-container" *ngFor="let position of positions" [class]="'toast-' + position">
      <div
        *ngFor="let toast of getToastsByPosition(position)"
        class="toast"
        [class]="'toast-' + toast.type"
        [@slideIn]>
        
        <div class="toast-icon">
          <i class="isax" [ngClass]="getIcon(toast.type)"></i>
        </div>

        <div class="toast-content">
          <div *ngIf="toast.title" class="toast-title">{{ toast.title }}</div>
          <div class="toast-message">{{ toast.message }}</div>
          <button
            *ngIf="toast.action"
            class="toast-action"
            (click)="onAction(toast)">
            {{ toast.action.label }}
          </button>
        </div>

        <button
          *ngIf="toast.showCloseButton"
          class="toast-close"
          (click)="close(toast.id)">
          <i class="isax isax-close-circle"></i>
        </button>
      </div>
    </div>
  `,
    styleUrls: ['./toast.component.scss']
})
export class ToastContainerComponent {
    toasts: Toast[] = [];
    positions: ToastPosition[] = [
        'top-left', 'top-center', 'top-right',
        'bottom-left', 'bottom-center', 'bottom-right'
    ];

    constructor(private toastService: ToastService) {
        this.toastService.getToasts().subscribe(toasts => {
            this.toasts = toasts;
        });
    }

    getToastsByPosition(position: ToastPosition): Toast[] {
        return this.toasts.filter(t => t.position === position);
    }

    close(id: string): void {
        this.toastService.remove(id);
    }

    onAction(toast: Toast): void {
        if (toast.action) {
            toast.action.callback();
            this.close(toast.id);
        }
    }

    getIcon(type: ToastType): string {
        switch (type) {
            case 'success': return 'isax-tick-circle';
            case 'error': return 'isax-close-circle';
            case 'warning': return 'isax-warning-2';
            case 'info': return 'isax-info-circle';
            default: return 'isax-info-circle';
        }
    }
}
