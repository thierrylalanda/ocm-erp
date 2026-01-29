# FormBuilder Component - Guide d'Utilisation

## Vue d'Ensemble

Le composant `FormBuilder` génère automatiquement des formulaires Angular à partir d'une configuration JSON. Il gère la validation, les champs conditionnels, et l'internationalisation.

## Installation

```typescript
import { FormBuilderComponent, FormConfig } from '@modules/_shared/presentation/components';
```

## Features

- ✅ Génération automatique de formulaires
- ✅ 14 types de champs supportés
- ✅ Validation intégrée (required, min/max, pattern, email, custom)
- ✅ Champs conditionnels (visibleWhen)
- ✅ Layouts configurables (horizontal/vertical)
- ✅ i18n (multilingue)
- ✅ Valeurs initiales
- ✅ Mode lecture seule
- ✅ Responsive design

## Types de Champs Supportés

| Type | Description | Exemple |
|------|-------------|---------|
| `text` | Champ texte | Nom, prénom |
| `email` | Email avec validation | email@example.com |
| `password` | Mot de passe masqué | ••••••• |
| `number` | Nombre | 42 |
| `tel` | Téléphone | +33 6 12 34 56 78 |
| `url` | URL | https://example.com |
| `textarea` | Zone de texte multiligne | Description |
| `select` | Liste déroulante | Sélection unique |
| `radio` | Boutons radio | Choix unique |
| `checkbox` | Case à cocher | Oui/Non |
| `date` | Sélecteur de date | 2024-01-15 |
| `time` | Sélecteur d'heure | 14:30 |
| `datetime` | Date et heure | 2024-01-15 14:30 |
| `file` | Upload de fichier | CV.pdf |
| `hidden` | Champ caché | ID technique |

## Utilisation Basique

```typescript
import { Component } from '@angular/core';
import { FormBuilderComponent, FormConfig } from '@modules/_shared/presentation/components';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormBuilderComponent],
  template: `
    <app-form-builder
      [config]="formConfig"
      (formSubmit)="onSubmit($event)">
    </app-form-builder>
  `
})
export class MyFormComponent {
  formConfig: FormConfig = {
    fields: [
      {
        name: 'firstName',
        label: 'Prénom',
        type: 'text',
        validation: { required: true }
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        validation: { required: true, email: true }
      }
    ],
    submitButton: { label: 'Enregistrer' }
  };

  onSubmit(values: any): void {
    console.log('Form values:', values);
  }
}
```

## Configuration des Champs

### FormFieldConfig

```typescript
interface FormFieldConfig {
  name: string;                    // Nom du champ (requis)
  label: string;                   // Libellé (clé i18n)
  type: FormFieldType;             // Type de champ (requis)
  defaultValue?: any;              // Valeur par défaut
  placeholder?: string;            // Placeholder (clé i18n)
  helpText?: string;               // Texte d'aide (clé i18n)
  options?: FormFieldOption[];     // Options (select/radio)
  validation?: FormFieldValidation;// Règles de validation
  disabled?: boolean;              // Champ désactivé
  readonly?: boolean;              // Lecture seule
  customClass?: string;            // Classe CSS
  width?: number;                  // Largeur (1-12)
  visible?: boolean;               // Visibilité
  visibleWhen?: (formValue) => boolean; // Condition d'affichage
}
```

### Exemples de Champs

#### Champ Texte Simple

```typescript
{
  name: 'firstName',
  label: 'Prénom',
  type: 'text',
  placeholder: 'Entrez votre prénom',
  validation: {
    required: true,
    minLength: 2,
    maxLength: 50
  }
}
```

#### Champ Email

```typescript
{
  name: 'email',
  label: 'Email',
  type: 'email',
  helpText: 'Nous ne partagerons jamais votre email',
  validation: {
    required: true,
    email: true
  }
}
```

#### Champ Select

```typescript
{
  name: 'country',
  label: 'Pays',
  type: 'select',
  placeholder: 'Sélectionnez un pays',
  options: [
    { label: 'France', value: 'FR' },
    { label: 'Belgique', value: 'BE' },
    { label: 'Suisse', value: 'CH' }
  ],
  validation: { required: true }
}
```

#### Champ Radio

```typescript
{
  name: 'gender',
  label: 'Genre',
  type: 'radio',
  options: [
    { label: 'Homme', value: 'male' },
    { label: 'Femme', value: 'female' },
    { label: 'Autre', value: 'other' }
  ]
}
```

#### Champ Checkbox

```typescript
{
  name: 'newsletter',
  label: 'S\'abonner à la newsletter',
  type: 'checkbox',
  defaultValue: false
}
```

#### Champ Nombre

```typescript
{
  name: 'age',
  label: 'Âge',
  type: 'number',
  validation: {
    required: true,
    min: 18,
    max: 120
  }
}
```

#### Champ Date

```typescript
{
  name: 'birthDate',
  label: 'Date de naissance',
  type: 'date',
  validation: { required: true }
}
```

#### Champ Textarea

```typescript
{
  name: 'description',
  label: 'Description',
  type: 'textarea',
  placeholder: 'Décrivez votre projet...',
  validation: {
    maxLength: 500
  }
}
```

## Validation

### Règles de Validation Disponibles

```typescript
interface FormFieldValidation {
  required?: boolean;              // Champ obligatoire
  minLength?: number;              // Longueur minimale
  maxLength?: number;              // Longueur maximale
  min?: number;                    // Valeur minimale (nombre)
  max?: number;                    // Valeur maximale (nombre)
  pattern?: string | RegExp;       // Pattern regex
  email?: boolean;                 // Validation email
  custom?: (control) => {...};     // Validateur personnalisé
}
```

### Validation Personnalisée

```typescript
{
  name: 'password',
  label: 'Mot de passe',
  type: 'password',
  validation: {
    required: true,
    minLength: 8,
    custom: (control) => {
      const value = control.value;
      if (!value) return null;
      
      const hasNumber = /\d/.test(value);
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      
      if (!hasNumber || !hasUpper || !hasLower) {
        return { weakPassword: true };
      }
      
      return null;
    }
  }
}
```

## Champs Conditionnels

Afficher/masquer des champs selon les valeurs du formulaire :

```typescript
{
  name: 'hasCompany',
  label: 'Avez-vous une entreprise ?',
  type: 'checkbox'
},
{
  name: 'companyName',
  label: 'Nom de l\'entreprise',
  type: 'text',
  visibleWhen: (formValue) => formValue.hasCompany === true,
  validation: { required: true }
}
```

## Layout et Largeur

### Layout Vertical (défaut)

```typescript
formConfig: FormConfig = {
  layout: 'vertical',
  fields: [...]
}
```

### Layout Horizontal

```typescript
formConfig: FormConfig = {
  layout: 'horizontal',
  labelWidth: 3,  // Largeur des labels (col-md-3)
  fields: [...]
}
```

### Largeur des Champs

```typescript
{
  name: 'firstName',
  label: 'Prénom',
  type: 'text',
  width: 6  // col-md-6 (50% de la largeur)
},
{
  name: 'lastName',
  label: 'Nom',
  type: 'text',
  width: 6  // col-md-6 (50% de la largeur)
}
```

## Valeurs Initiales

```typescript
<app-form-builder
  [config]="formConfig"
  [initialValues]="{ firstName: 'Jean', email: 'jean@example.com' }"
  (formSubmit)="onSubmit($event)">
</app-form-builder>
```

## Mode Lecture Seule

```typescript
<app-form-builder
  [config]="formConfig"
  [readonly]="true">
</app-form-builder>
```

## Boutons d'Action

```typescript
formConfig: FormConfig = {
  fields: [...],
  submitButton: {
    label: 'Enregistrer',
    class: 'btn btn-primary'
  },
  cancelButton: {
    label: 'Annuler',
    class: 'btn btn-secondary'
  }
}
```

## Événements

### formSubmit

Émis lors de la soumission du formulaire (si valide) :

```typescript
<app-form-builder
  [config]="formConfig"
  (formSubmit)="onSubmit($event)">
</app-form-builder>

onSubmit(values: any): void {
  console.log('Form values:', values);
  // { firstName: 'Jean', email: 'jean@example.com', ... }
}
```

### formCancel

Émis lors du clic sur le bouton annuler :

```typescript
<app-form-builder
  [config]="formConfig"
  (formCancel)="onCancel()">
</app-form-builder>

onCancel(): void {
  console.log('Form cancelled');
}
```

### formChange

Émis à chaque changement de valeur :

```typescript
<app-form-builder
  [config]="formConfig"
  (formChange)="onChange($event)">
</app-form-builder>

onChange(values: any): void {
  console.log('Form changed:', values);
}
```

## Méthodes Publiques

### reset()

Réinitialiser le formulaire :

```typescript
@ViewChild(FormBuilderComponent) formBuilder!: FormBuilderComponent;

resetForm(): void {
  this.formBuilder.reset();
}
```

### setValue(values)

Définir les valeurs du formulaire :

```typescript
this.formBuilder.setValue({
  firstName: 'Marie',
  email: 'marie@example.com'
});
```

### getValue()

Obtenir les valeurs actuelles :

```typescript
const values = this.formBuilder.getValue();
console.log(values);
```

### isValid()

Vérifier si le formulaire est valide :

```typescript
if (this.formBuilder.isValid()) {
  console.log('Form is valid');
}
```

## Traductions i18n

Clés de traduction utilisées :

```json
{
  "form": {
    "selectOption": "Sélectionnez une option",
    "errors": {
      "required": "Ce champ est obligatoire",
      "minLength": "Longueur minimale non respectée",
      "maxLength": "Longueur maximale dépassée",
      "min": "Valeur minimale non respectée",
      "max": "Valeur maximale dépassée",
      "pattern": "Format invalide",
      "email": "Email invalide",
      "invalid": "Valeur invalide"
    }
  }
}
```

## Exemple Complet

Voir `form-builder-example.component.ts` pour un exemple complet avec tous les types de champs.

## Accessibilité

- Labels associés aux champs
- Messages d'erreur descriptifs
- Navigation au clavier
- ARIA attributes

## Performance

- Validation lazy (au blur)
- Change detection OnPush
- Champs conditionnels optimisés
