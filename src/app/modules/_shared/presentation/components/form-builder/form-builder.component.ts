import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { TranslatePipe } from '../../../../../core/services/translation';

/**
 * Types de champs supportés
 */
export type FormFieldType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'date'
    | 'time'
    | 'datetime'
    | 'file'
    | 'hidden';

/**
 * Option pour select/radio
 */
export interface FormFieldOption {
    label: string;
    value: any;
    disabled?: boolean;
}

/**
 * Règle de validation
 */
export interface FormFieldValidation {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string | RegExp;
    email?: boolean;
    custom?: (control: AbstractControl) => { [key: string]: any } | null;
}

/**
 * Configuration d'un champ de formulaire
 */
export interface FormFieldConfig {
    /** Nom du champ (clé dans le FormGroup) */
    name: string;
    /** Libellé du champ (clé i18n) */
    label: string;
    /** Type de champ */
    type: FormFieldType;
    /** Valeur par défaut */
    defaultValue?: any;
    /** Placeholder (clé i18n) */
    placeholder?: string;
    /** Texte d'aide (clé i18n) */
    helpText?: string;
    /** Options pour select/radio */
    options?: FormFieldOption[];
    /** Validations */
    validation?: FormFieldValidation;
    /** Champ désactivé */
    disabled?: boolean;
    /** Champ en lecture seule */
    readonly?: boolean;
    /** Classe CSS personnalisée */
    customClass?: string;
    /** Largeur (col-md-X) */
    width?: number;
    /** Afficher le champ */
    visible?: boolean;
    /** Champ requis */
    required?: boolean;
    /** Condition d'affichage (fonction) */
    visibleWhen?: (formValue: any) => boolean;
    /** Nombre de lignes (pour textarea) */
    rows?: number;
    /** Valeur minimum */
    min?: number;
    /** Valeur maximum */
    max?: number;
    /** Pas d'incrémentation */
    step?: number;
}

/**
 * Configuration du formulaire
 */
export interface FormConfig {
    /** Champs du formulaire */
    fields: FormFieldConfig[];
    /** Layout (horizontal ou vertical) */
    layout?: 'horizontal' | 'vertical';
    /** Afficher les labels */
    showLabels?: boolean;
    /** Largeur des labels (pour layout horizontal) */
    labelWidth?: number;
    /** Bouton de soumission */
    submitButton?: {
        label: string;
        class?: string;
    };
    /** Bouton d'annulation */
    cancelButton?: {
        label: string;
        class?: string;
    };
}

/**
 * Composant FormBuilder pour générer des formulaires dynamiques
 * 
 * Features:
 * - Génération automatique de formulaires
 * - Validation intégrée
 * - Support multi-types de champs
 * - Layouts configurables
 * - i18n
 * - Champs conditionnels
 * 
 * @example
 * ```html
 * <app-form-builder
 *   [config]="formConfig"
 *   (formSubmit)="onSubmit($event)"
 *   (formCancel)="onCancel()">
 * </app-form-builder>
 * ```
 */
@Component({
    selector: 'app-form-builder',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
    /** Configuration du formulaire */
    @Input() config!: FormConfig;

    /** Valeurs initiales du formulaire */
    @Input() initialValues?: any;

    /** Mode lecture seule */
    @Input() readonly = false;

    /** Afficher les erreurs immédiatement */
    @Input() showErrorsOnLoad = false;

    /** Événement de soumission du formulaire */
    @Output() formSubmit = new EventEmitter<any>();

    /** Événement d'annulation */
    @Output() formCancel = new EventEmitter<void>();

    /** Événement de changement de valeur */
    @Output() formChange = new EventEmitter<any>();

    /** FormGroup Angular */
    form!: FormGroup;

    /** Formulaire soumis */
    submitted = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.buildForm();

        if (this.initialValues) {
            this.form.patchValue(this.initialValues);
        }

        // Écouter les changements
        this.form.valueChanges.subscribe(value => {
            this.formChange.emit(value);
            this.updateConditionalFields();
        });
    }

    /**
     * Construire le FormGroup à partir de la configuration
     */
    private buildForm(): void {
        const group: any = {};

        this.config.fields.forEach(field => {
            const validators = this.getValidators(field.validation);
            const value = field.defaultValue !== undefined ? field.defaultValue : null;

            group[field.name] = [
                { value, disabled: field.disabled || this.readonly },
                validators
            ];
        });

        this.form = this.fb.group(group);
    }

    /**
     * Obtenir les validateurs pour un champ
     */
    private getValidators(validation?: FormFieldValidation): any[] {
        if (!validation) return [];

        const validators: any[] = [];

        if (validation.required) {
            validators.push(Validators.required);
        }

        if (validation.minLength) {
            validators.push(Validators.minLength(validation.minLength));
        }

        if (validation.maxLength) {
            validators.push(Validators.maxLength(validation.maxLength));
        }

        if (validation.min !== undefined) {
            validators.push(Validators.min(validation.min));
        }

        if (validation.max !== undefined) {
            validators.push(Validators.max(validation.max));
        }

        if (validation.pattern) {
            validators.push(Validators.pattern(validation.pattern));
        }

        if (validation.email) {
            validators.push(Validators.email);
        }

        if (validation.custom) {
            validators.push(validation.custom);
        }

        return validators;
    }

    /**
     * Mettre à jour les champs conditionnels
     */
    private updateConditionalFields(): void {
        const formValue = this.form.value;

        this.config.fields.forEach(field => {
            if (field.visibleWhen) {
                const shouldBeVisible = field.visibleWhen(formValue);
                field.visible = shouldBeVisible;

                // Désactiver le champ s'il n'est pas visible
                const control = this.form.get(field.name);
                if (control) {
                    if (!shouldBeVisible) {
                        control.disable();
                        control.setValue(null);
                    } else if (!field.disabled && !this.readonly) {
                        control.enable();
                    }
                }
            }
        });
    }

    /**
     * Soumettre le formulaire
     */
    onSubmit(): void {
        this.submitted = true;

        if (this.form.valid) {
            this.formSubmit.emit(this.form.value);
        } else {
            this.markFormGroupTouched(this.form);
        }
    }

    /**
     * Annuler le formulaire
     */
    onCancel(): void {
        this.formCancel.emit();
    }

    /**
     * Marquer tous les champs comme touchés
     */
    private markFormGroupTouched(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(key => {
            const control = formGroup.get(key);
            control?.markAsTouched();

            if (control instanceof FormGroup) {
                this.markFormGroupTouched(control);
            }
        });
    }

    /**
     * Vérifier si un champ a une erreur
     */
    hasError(fieldName: string): boolean {
        const control = this.form.get(fieldName);
        return !!(control && control.invalid && (control.touched || this.submitted || this.showErrorsOnLoad));
    }

    /**
     * Obtenir le message d'erreur pour un champ
     */
    getErrorMessage(field: FormFieldConfig): string {
        const control = this.form.get(field.name);
        if (!control || !control.errors) return '';

        const errors = control.errors;

        if (errors['required']) {
            return 'form.errors.required';
        }

        if (errors['minlength']) {
            return 'form.errors.minLength';
        }

        if (errors['maxlength']) {
            return 'form.errors.maxLength';
        }

        if (errors['min']) {
            return 'form.errors.min';
        }

        if (errors['max']) {
            return 'form.errors.max';
        }

        if (errors['pattern']) {
            return 'form.errors.pattern';
        }

        if (errors['email']) {
            return 'form.errors.email';
        }

        return 'form.errors.invalid';
    }

    /**
     * Vérifier si un champ est visible
     */
    isFieldVisible(field: FormFieldConfig): boolean {
        if (field.visible === false) return false;
        if (field.visibleWhen) {
            return field.visibleWhen(this.form.value);
        }
        return true;
    }

    /**
     * Obtenir la classe de largeur pour un champ
     */
    getFieldWidthClass(field: FormFieldConfig): string {
        let cssClass = field.width ? `col-md-${field.width}` : 'col-md-12';

        if (field.customClass) {
            cssClass += ` ${field.customClass}`;
        }

        return cssClass;
    }

    /**
     * Réinitialiser le formulaire
     */
    reset(): void {
        this.form.reset();
        this.submitted = false;
    }

    /**
     * Définir les valeurs du formulaire
     */
    setValue(values: any): void {
        this.form.patchValue(values);
    }

    /**
     * Obtenir les valeurs du formulaire
     */
    getValue(): any {
        return this.form.value;
    }

    /**
     * Vérifier si le formulaire est valide
     */
    isValid(): boolean {
        return this.form.valid;
    }
}
