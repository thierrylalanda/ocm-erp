import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';

/**
 * Étape du wizard
 */
export interface WizardStep {
    /** ID de l'étape */
    id: string;
    /** Titre */
    title: string;
    /** Description */
    description?: string;
    /** Icône */
    icon?: string;
    /** Étape valide */
    valid?: boolean;
    /** Étape complétée */
    completed?: boolean;
    /** Étape optionnelle */
    optional?: boolean;
    /** Fonction de validation personnalisée */
    validate?: () => boolean | Promise<boolean>;
}

/**
 * Configuration du wizard
 */
export interface WizardConfig {
    /** Afficher la progression */
    showProgress?: boolean;
    /** Permettre la navigation libre */
    allowFreeNavigation?: boolean;
    /** Afficher les numéros d'étapes */
    showStepNumbers?: boolean;
    /** Orientation (horizontal ou vertical) */
    orientation?: 'horizontal' | 'vertical';
    /** Valider avant de passer à l'étape suivante */
    validateOnNext?: boolean;
}

/**
 * Composant Wizard - Formulaires multi-étapes
 * 
 * Features:
 * - Navigation entre étapes
 * - Validation par étape
 * - Progression visuelle
 * - Navigation libre (optionnel)
 * - Étapes optionnelles
 * - Callbacks de navigation
 * 
 * @example
 * ```html
 * <app-wizard
 *   [steps]="wizardSteps"
 *   [config]="wizardConfig"
 *   (stepChanged)="onStepChanged($event)"
 *   (completed)="onWizardCompleted()">
 *   
 *   <div *wizardStep="'step1'">
 *     Contenu étape 1
 *   </div>
 *   
 *   <div *wizardStep="'step2'">
 *     Contenu étape 2
 *   </div>
 * </app-wizard>
 * ```
 */
@Component({
    selector: 'app-wizard',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {
    /** Étapes du wizard */
    @Input() steps: WizardStep[] = [];

    /** Configuration */
    @Input() config: WizardConfig = {
        showProgress: true,
        allowFreeNavigation: false,
        showStepNumbers: true,
        orientation: 'horizontal',
        validateOnNext: true
    };

    /** Événement de changement d'étape */
    @Output() stepChanged = new EventEmitter<{ from: number; to: number }>();

    /** Événement de complétion */
    @Output() completed = new EventEmitter<void>();

    /** Événement d'annulation */
    @Output() cancelled = new EventEmitter<void>();

    /** Index de l'étape courante */
    currentStepIndex = 0;

    /** Étape courante */
    get currentStep(): WizardStep {
        return this.steps[this.currentStepIndex];
    }

    /** Première étape */
    get isFirstStep(): boolean {
        return this.currentStepIndex === 0;
    }

    /** Dernière étape */
    get isLastStep(): boolean {
        return this.currentStepIndex === this.steps.length - 1;
    }

    /** Progression (pourcentage) */
    get progress(): number {
        return ((this.currentStepIndex + 1) / this.steps.length) * 100;
    }

    /**
     * Aller à l'étape suivante
     */
    async next(): Promise<void> {
        if (this.isLastStep) {
            await this.complete();
            return;
        }

        // Valider l'étape courante si nécessaire
        if (this.config.validateOnNext) {
            const isValid = await this.validateCurrentStep();
            if (!isValid) {
                return;
            }
        }

        // Marquer l'étape comme complétée
        this.currentStep.completed = true;

        const fromIndex = this.currentStepIndex;
        this.currentStepIndex++;
        this.stepChanged.emit({ from: fromIndex, to: this.currentStepIndex });
    }

    /**
     * Aller à l'étape précédente
     */
    previous(): void {
        if (!this.isFirstStep) {
            const fromIndex = this.currentStepIndex;
            this.currentStepIndex--;
            this.stepChanged.emit({ from: fromIndex, to: this.currentStepIndex });
        }
    }

    /**
     * Aller à une étape spécifique
     */
    async goToStep(index: number): Promise<void> {
        if (index < 0 || index >= this.steps.length) {
            return;
        }

        // Vérifier si la navigation libre est autorisée
        if (!this.config.allowFreeNavigation) {
            // Autoriser seulement si l'étape est déjà complétée ou si c'est l'étape suivante
            if (index > this.currentStepIndex && !this.steps[index - 1].completed) {
                return;
            }
        }

        const fromIndex = this.currentStepIndex;
        this.currentStepIndex = index;
        this.stepChanged.emit({ from: fromIndex, to: this.currentStepIndex });
    }

    /**
     * Valider l'étape courante
     */
    private async validateCurrentStep(): Promise<boolean> {
        const step = this.currentStep;

        // Vérifier si l'étape est optionnelle
        if (step.optional) {
            return true;
        }

        // Utiliser la fonction de validation personnalisée si disponible
        if (step.validate) {
            const result = await step.validate();
            step.valid = result;
            return result;
        }

        // Par défaut, considérer l'étape comme valide
        step.valid = true;
        return true;
    }

    /**
     * Compléter le wizard
     */
    private async complete(): Promise<void> {
        // Valider la dernière étape
        if (this.config.validateOnNext) {
            const isValid = await this.validateCurrentStep();
            if (!isValid) {
                return;
            }
        }

        this.currentStep.completed = true;
        this.completed.emit();
    }

    /**
     * Annuler le wizard
     */
    cancel(): void {
        this.cancelled.emit();
    }

    /**
     * Réinitialiser le wizard
     */
    reset(): void {
        this.currentStepIndex = 0;
        this.steps.forEach(step => {
            step.completed = false;
            step.valid = undefined;
        });
    }

    /**
     * Vérifier si une étape est accessible
     */
    isStepAccessible(index: number): boolean {
        if (this.config.allowFreeNavigation) {
            return true;
        }

        // L'étape courante est toujours accessible
        if (index === this.currentStepIndex) {
            return true;
        }

        // Les étapes précédentes sont accessibles
        if (index < this.currentStepIndex) {
            return true;
        }

        // L'étape suivante est accessible si l'étape courante est complétée
        if (index === this.currentStepIndex + 1 && this.currentStep.completed) {
            return true;
        }

        return false;
    }

    /**
     * Obtenir la classe CSS pour une étape
     */
    getStepClass(index: number): string {
        const classes: string[] = [];

        if (index === this.currentStepIndex) {
            classes.push('active');
        }

        if (this.steps[index].completed) {
            classes.push('completed');
        }

        if (!this.isStepAccessible(index)) {
            classes.push('disabled');
        }

        return classes.join(' ');
    }
}
