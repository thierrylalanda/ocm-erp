import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateCompanyUseCase } from '../../../application/use-cases/create-company.use-case';
import { CREATE_COMPANY_USE_CASE } from '../../../application/use-cases/create-company.use-case.token';
import { CreateCompanyDto } from '../../../application/dto/create-company.dto';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="companyForm" (ngSubmit)="onSubmit()" class="company-form">
      <h2>Créer une nouvelle société</h2>
      
      <div class="form-group">
        <label for="nom">Nom de la société *</label>
        <input 
          id="nom" 
          type="text" 
          formControlName="nom" 
          placeholder="Entrez le nom de la société"
          [class.is-invalid]="companyForm.get('nom')?.invalid && companyForm.get('nom')?.touched"
        >
        <div *ngIf="companyForm.get('nom')?.invalid && companyForm.get('nom')?.touched" class="error-message">
          Le nom de la société est requis
        </div>
      </div>

      <div class="form-group">
        <label for="activite">Activité principale *</label>
        <input 
          id="activite" 
          type="text" 
          formControlName="activite" 
          placeholder="Entrez l'activité principale"
          [class.is-invalid]="companyForm.get('activite')?.invalid && companyForm.get('activite')?.touched"
        >
        <div *ngIf="companyForm.get('activite')?.invalid && companyForm.get('activite')?.touched" class="error-message">
          L'activité est requise
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="email">Email *</label>
          <input 
            id="email" 
            type="email" 
            formControlName="email" 
            placeholder="contact@societe.com"
            [class.is-invalid]="companyForm.get('email')?.invalid && companyForm.get('email')?.touched"
          >
          <div *ngIf="companyForm.get('email')?.invalid && companyForm.get('email')?.touched" class="error-message">
            Un email valide est requis
          </div>
        </div>

        <div class="form-group">
          <label for="telephone">Téléphone</label>
          <input 
            id="telephone" 
            type="tel" 
            formControlName="telephone" 
            placeholder="+237 6 XX XX XX XX"
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="nc">Numéro Contribuable (NC) *</label>
          <input 
            id="nc" 
            type="text" 
            formControlName="nc" 
            placeholder="NCXXXXXXXXX"
            [class.is-invalid]="companyForm.get('nc')?.invalid && companyForm.get('nc')?.touched"
          >
          <div *ngIf="companyForm.get('nc')?.invalid && companyForm.get('nc')?.touched" class="error-message">
            Le numéro contribuable est requis
          </div>
        </div>

        <div class="form-group">
          <label for="rccm">RCCM *</label>
          <input 
            id="rccm" 
            type="text" 
            formControlName="rccm" 
            placeholder="RCCMXXXXXXXXX"
            [class.is-invalid]="companyForm.get('rccm')?.invalid && companyForm.get('rccm')?.touched"
          >
          <div *ngIf="companyForm.get('rccm')?.invalid && companyForm.get('rccm')?.touched" class="error-message">
            Le RCCM est requis
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="regimeFiscal">Régime Fiscal *</label>
          <select 
            id="regimeFiscal" 
            formControlName="regimeFiscal"
            [class.is-invalid]="companyForm.get('regimeFiscal')?.invalid && companyForm.get('regimeFiscal')?.touched"
          >
            <option value="">Sélectionnez un régime</option>
            <option value="Régime réel simplifié">Régime réel simplifié</option>
            <option value="Régime réel normal">Régime réel normal</option>
            <option value="Régime forfaitaire">Régime forfaitaire</option>
            <option value="Régime libératoire">Régime libératoire</option>
          </select>
          <div *ngIf="companyForm.get('regimeFiscal')?.invalid && companyForm.get('regimeFiscal')?.touched" class="error-message">
            Le régime fiscal est requis
          </div>
        </div>

        <div class="form-group">
          <label for="devise">Devise *</label>
          <select 
            id="devise" 
            formControlName="devise"
            [class.is-invalid]="companyForm.get('devise')?.invalid && companyForm.get('devise')?.touched"
          >
            <option value="">Sélectionnez une devise</option>
            <option value="XAF">Franc CFA (XAF)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="USD">Dollar US (USD)</option>
            <option value="XOF">Franc CFA Ouest (XOF)</option>
          </select>
          <div *ngIf="companyForm.get('devise')?.invalid && companyForm.get('devise')?.touched" class="error-message">
            La devise est requise
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="adresse">Adresse</label>
        <textarea 
          id="adresse" 
          formControlName="adresse" 
          placeholder="Entrez l'adresse complète"
          rows="2"
        ></textarea>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="pays">Pays</label>
          <input 
            id="pays" 
            type="text" 
            formControlName="pays" 
            placeholder="Cameroun"
          >
        </div>

        <div class="form-group">
          <label for="region">Région</label>
          <input 
            id="region" 
            type="text" 
            formControlName="region" 
            placeholder="Centre"
          >
        </div>

        <div class="form-group">
          <label for="boitePostal">Boîte Postale</label>
          <input 
            id="boitePostal" 
            type="text" 
            formControlName="boitePostal" 
            placeholder="BP 1234"
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="siteWeb">Site Web</label>
          <input 
            id="siteWeb" 
            type="url" 
            formControlName="siteWeb" 
            placeholder="https://www.societe.com"
          >
        </div>

        <div class="form-group">
          <label for="logo">Logo (URL)</label>
          <input 
            id="logo" 
            type="url" 
            formControlName="logo" 
            placeholder="https://www.societe.com/logo.png"
          >
        </div>
      </div>

      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" formControlName="actif">
          Société active
        </label>
      </div>

      <div class="form-actions">
        <button type="submit" [disabled]="companyForm.invalid || isLoading">
          <span *ngIf="!isLoading">Créer la société</span>
          <span *ngIf="isLoading">Création en cours...</span>
        </button>
        <button type="button" (click)="onCancel()">Annuler</button>
      </div>

      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <div *ngIf="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </form>
  `,
  styles: [`
    .company-form {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h2 {
      margin-bottom: 24px;
      color: #333;
      text-align: center;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-row {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
    }

    .form-row .form-group {
      flex: 1;
      margin-bottom: 0;
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 500;
      color: #555;
    }

    input, select, textarea {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
    }

    input.is-invalid, select.is-invalid {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 12px;
      margin-top: 4px;
    }

    .success-message {
      color: #28a745;
      font-size: 14px;
      margin-top: 12px;
      padding: 10px;
      background-color: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .checkbox-label input {
      width: auto;
      margin: 0;
    }

    .form-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid #eee;
    }

    button {
      flex: 1;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button[type="submit"] {
      background-color: #007bff;
      color: white;
    }

    button[type="submit"]:hover:not(:disabled) {
      background-color: #0056b3;
    }

    button[type="submit"]:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }

    button[type="button"] {
      background-color: #6c757d;
      color: white;
    }

    button[type="button"]:hover {
      background-color: #545b62;
    }
  `]
})
export class CompanyFormComponent {
  @Output() companyCreated = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  companyForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    @Inject(CREATE_COMPANY_USE_CASE) private createCompanyUseCase: CreateCompanyUseCase
  ) {
    this.companyForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      activite: ['', [Validators.required, Validators.minLength(3)]],
      adresse: [''],
      boitePostal: [''],
      pays: ['Cameroun'],
      region: [''],
      telephone: [''],
      nc: ['', [Validators.required]],
      rccm: ['', [Validators.required]],
      regimeFiscal: ['', [Validators.required]],
      devise: ['XAF', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      siteWeb: [''],
      logo: [''],
      favicon: [''],
      actif: [true]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.companyForm.invalid) {
      this.markFormGroupTouched(this.companyForm);
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      const companyData: CreateCompanyDto = this.companyForm.value;
      const result = await this.createCompanyUseCase.execute(companyData);
      
      this.successMessage = `Société "${result.nom}" créée avec succès ! ID: ${result.id}`;
      this.companyCreated.emit(result);
      
      // Réinitialiser le formulaire après un délai
      setTimeout(() => {
        this.companyForm.reset({
          pays: 'Cameroun',
          devise: 'XAF',
          actif: true
        });
      }, 2000);
    } catch (error: any) {
      this.errorMessage = error.message || 'Une erreur est survenue lors de la création de la société';
      console.error('Erreur création société:', error);
    } finally {
      this.isLoading = false;
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
