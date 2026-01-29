import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';

/**
 * Taille du modal
 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Configuration du modal
 */
export interface ModalConfig {
    /** Titre du modal */
    title?: string;
    /** Taille du modal */
    size?: ModalSize;
    /** Afficher le bouton de fermeture */
    showCloseButton?: boolean;
    /** Fermer au clic sur le backdrop */
    closeOnBackdrop?: boolean;
    /** Fermer avec la touche ESC */
    closeOnEscape?: boolean;
    /** Afficher le footer */
    showFooter?: boolean;
    /** Classe CSS personnalisée */
    customClass?: string;
}

/**
 * Composant Modal réutilisable
 * 
 * Features:
 * - Tailles configurables (sm, md, lg, xl, full)
 * - Animations d'ouverture/fermeture
 * - Backdrop
 * - Support clavier (ESC)
 * - Header, body, footer personnalisables
 * - i18n
 * 
 * @example
 * ```html
 * <app-modal
 *   [isOpen]="showModal"
 *   [config]="modalConfig"
 *   (close)="onClose()">
 *   <div modal-header>
 *     <h5>Mon Titre</h5>
 *   </div>
 *   <div modal-body>
 *     <p>Contenu du modal</p>
 *   </div>
 *   <div modal-footer>
 *     <button class="btn btn-primary">OK</button>
 *   </div>
 * </app-modal>
 * ```
 */
@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
    /** État d'ouverture du modal */
    @Input() isOpen = false;

    /** Indique si le modal a un header personnalisé (masque le titre par défaut) */
    @Input() hasCustomHeader = false;

    /** Configuration du modal */
    @Input() config: ModalConfig = {
        size: 'md',
        showCloseButton: true,
        closeOnBackdrop: true,
        closeOnEscape: true,
        showFooter: true
    };

    /** Événement de fermeture */
    @Output() close = new EventEmitter<void>();

    /** Événement d'ouverture */
    @Output() opened = new EventEmitter<void>();

    /** Événement de fermeture complète (après animation) */
    @Output() closed = new EventEmitter<void>();

    /** État d'animation */
    isAnimating = false;

    /** Listener pour la touche ESC */
    private escapeListener?: (event: KeyboardEvent) => void;

    ngOnInit(): void {
        if (this.isOpen) {
            this.open();
        }
    }

    ngOnDestroy(): void {
        this.removeEscapeListener();
        this.enableBodyScroll();
    }

    ngOnChanges(): void {
        if (this.isOpen) {
            this.open();
        } else {
            this.closeModal();
        }
    }

    /**
     * Ouvrir le modal
     */
    private open(): void {
        this.isAnimating = true;
        this.disableBodyScroll();
        this.addEscapeListener();

        // Attendre la fin de l'animation
        setTimeout(() => {
            this.isAnimating = false;
            this.opened.emit();
        }, 300);
    }

    /**
     * Fermer le modal
     */
    closeModal(): void {
        this.isAnimating = true;
        this.removeEscapeListener();

        // Attendre la fin de l'animation
        setTimeout(() => {
            this.isAnimating = false;
            this.enableBodyScroll();
            this.closed.emit();
        }, 300);

        this.close.emit();
    }

    /**
     * Gérer le clic sur le backdrop
     */
    onBackdropClick(event: MouseEvent): void {
        if (this.config.closeOnBackdrop && event.target === event.currentTarget) {
            this.closeModal();
        }
    }

    /**
     * Désactiver le scroll du body
     */
    private disableBodyScroll(): void {
        document.body.style.overflow = 'hidden';
    }

    /**
     * Activer le scroll du body
     */
    private enableBodyScroll(): void {
        document.body.style.overflow = '';
    }

    /**
     * Ajouter le listener pour la touche ESC
     */
    private addEscapeListener(): void {
        if (this.config.closeOnEscape) {
            this.escapeListener = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    this.closeModal();
                }
            };
            document.addEventListener('keydown', this.escapeListener);
        }
    }

    /**
     * Supprimer le listener pour la touche ESC
     */
    private removeEscapeListener(): void {
        if (this.escapeListener) {
            document.removeEventListener('keydown', this.escapeListener);
            this.escapeListener = undefined;
        }
    }

    /**
     * Obtenir la classe de taille
     */
    getSizeClass(): string {
        switch (this.config.size) {
            case 'sm': return 'modal-sm';
            case 'lg': return 'modal-lg';
            case 'xl': return 'modal-xl';
            case 'full': return 'modal-full';
            default: return '';
        }
    }
}
