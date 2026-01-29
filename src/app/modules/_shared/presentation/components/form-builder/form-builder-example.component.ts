import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent, FormConfig, FormFieldConfig } from './form-builder.component';

/**
 * Exemple d'utilisation du composant FormBuilder
 */
@Component({
    selector: 'app-form-builder-example',
    standalone: true,
    imports: [CommonModule, FormBuilderComponent],
    template: `
    <div class="container-fluid p-4">
      <h2>Exemple FormBuilder</h2>

      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <app-form-builder
                [config]="formConfig"
                [initialValues]="initialValues"
                (formSubmit)="onSubmit($event)"
                (formCancel)="onCancel()"
                (formChange)="onChange($event)">
              </app-form-builder>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5>Valeurs du Formulaire</h5>
            </div>
            <div class="card-body">
              <pre>{{ currentValues | json }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FormBuilderExampleComponent {
    currentValues: any = {};

    // Valeurs initiales
    initialValues = {
        firstName: 'Jean',
        email: 'jean@example.com'
    };

    // Configuration du formulaire
    formConfig: FormConfig = {
        layout: 'vertical',
        showLabels: true,
        fields: [
            // Section Informations personnelles
            {
                name: 'firstName',
                label: 'Prénom',
                type: 'text',
                placeholder: 'Entrez votre prénom',
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 50
                },
                width: 6
            },
            {
                name: 'lastName',
                label: 'Nom',
                type: 'text',
                placeholder: 'Entrez votre nom',
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 50
                },
                width: 6
            },
            {
                name: 'email',
                label: 'Email',
                type: 'email',
                placeholder: 'exemple@email.com',
                helpText: 'Nous ne partagerons jamais votre email',
                validation: {
                    required: true,
                    email: true
                },
                width: 6
            },
            {
                name: 'phone',
                label: 'Téléphone',
                type: 'tel',
                placeholder: '+33 6 12 34 56 78',
                validation: {
                    pattern: /^(\+33|0)[1-9](\d{2}){4}$/
                },
                width: 6
            },
            {
                name: 'birthDate',
                label: 'Date de naissance',
                type: 'date',
                validation: {
                    required: true
                },
                width: 6
            },
            {
                name: 'gender',
                label: 'Genre',
                type: 'select',
                placeholder: 'Sélectionnez votre genre',
                options: [
                    { label: 'Homme', value: 'male' },
                    { label: 'Femme', value: 'female' },
                    { label: 'Autre', value: 'other' }
                ],
                validation: {
                    required: true
                },
                width: 6
            },

            // Section Adresse
            {
                name: 'address',
                label: 'Adresse',
                type: 'textarea',
                placeholder: 'Entrez votre adresse complète',
                validation: {
                    required: true
                },
                width: 12
            },
            {
                name: 'city',
                label: 'Ville',
                type: 'text',
                placeholder: 'Paris',
                validation: {
                    required: true
                },
                width: 6
            },
            {
                name: 'postalCode',
                label: 'Code postal',
                type: 'text',
                placeholder: '75001',
                validation: {
                    required: true,
                    pattern: /^\d{5}$/
                },
                width: 6
            },

            // Section Préférences
            {
                name: 'newsletter',
                label: 'S\'abonner à la newsletter',
                type: 'checkbox',
                defaultValue: false,
                width: 12
            },
            {
                name: 'notificationMethod',
                label: 'Méthode de notification préférée',
                type: 'radio',
                options: [
                    { label: 'Email', value: 'email' },
                    { label: 'SMS', value: 'sms' },
                    { label: 'Push', value: 'push' }
                ],
                defaultValue: 'email',
                visible: true,
                visibleWhen: (formValue) => formValue.newsletter === true,
                width: 12
            },

            // Section Professionnel
            {
                name: 'company',
                label: 'Entreprise',
                type: 'text',
                placeholder: 'Nom de l\'entreprise',
                width: 6
            },
            {
                name: 'position',
                label: 'Poste',
                type: 'text',
                placeholder: 'Votre poste',
                width: 6
            },
            {
                name: 'experience',
                label: 'Années d\'expérience',
                type: 'number',
                validation: {
                    min: 0,
                    max: 50
                },
                width: 6
            },
            {
                name: 'salary',
                label: 'Salaire souhaité (€)',
                type: 'number',
                validation: {
                    min: 0
                },
                width: 6
            },

            // Section Documents
            {
                name: 'cv',
                label: 'CV (PDF)',
                type: 'file',
                helpText: 'Format PDF uniquement, max 5MB',
                width: 12
            },

            // Section Commentaires
            {
                name: 'comments',
                label: 'Commentaires',
                type: 'textarea',
                placeholder: 'Vos commentaires...',
                width: 12
            }
        ],
        submitButton: {
            label: 'Enregistrer',
            class: 'btn btn-primary'
        },
        cancelButton: {
            label: 'Annuler',
            class: 'btn btn-secondary'
        }
    };

    onSubmit(values: any): void {
        console.log('Form submitted:', values);
        alert('Formulaire soumis avec succès !');
    }

    onCancel(): void {
        console.log('Form cancelled');
    }

    onChange(values: any): void {
        this.currentValues = values;
    }
}
