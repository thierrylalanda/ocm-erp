import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CompanyService } from '../../../../application/services/company.service';
import { CompanyDto, CompanyResponseDto } from '../../../../domain/dto/company.dto';

@Component({
  selector: 'app-company-settings',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {
  companyForm: FormGroup;
  isLoading = false;
  isSaving = false;
  isUploadingLogo = false;
  isDeletingLogo = false;
  errorMessage = '';
  successMessage = '';
  company: CompanyResponseDto | null = null;
  selectedLogoFile: File | null = null;
  logoPreview: string | null = null;

  // Options pour les sélecteurs
  methodeValorisationOptions = ['FIFO', 'LIFO', 'MOYENNE'];
  deviseOptions = ['USD', 'EUR', 'XAF', 'XOF', 'GBP'];
  paysOptions = ['Cameroun', 'France', 'USA', 'Canada', 'Belgique'];
  regionOptions = ['Centre', 'Littoral', 'Ouest', 'Nord', 'Sud'];

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService
  ) {
    this.companyForm = this.createForm();
  }

  ngOnInit(): void {
    this.loadCompany();
  }

  createForm(): FormGroup {
    return this.fb.group({
      nom: ['', [Validators.required]],
      activite: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      boitePostal: [''],
      pays: ['', [Validators.required]],
      region: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      nc: [''],
      rccm: [''],
      regimeFiscal: [''],
      devise: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      siteWeb: [''],
      logo: [''],
      favicon: [''],
      actif: [true],
      methodeValorisation: ['FIFO', [Validators.required]],
      devisePrincipale: ['', [Validators.required]],
      exerciceEnCours: [new Date().getFullYear(), [Validators.required, Validators.min(2000), Validators.max(2100)]],
      capital: [0, [Validators.min(0)]],
      formeJuridique: ['']
    });
  }

  loadCompany(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.companyService.getCurrentUserCompany().subscribe({
      next: (company) => {
        this.company = company;
        this.companyForm.patchValue(company);
        this.updateLogoPreview();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors du chargement des données de la société: ' + (error.error?.message || error.message);
        this.isLoading = false;
        console.error('Error loading company:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.companyForm.invalid) {
      this.markFormGroupTouched(this.companyForm);
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData = this.companyForm.value as CompanyDto;

    this.companyService.updateCurrentUserCompany(formData).subscribe({
      next: (updatedCompany) => {
        this.company = updatedCompany;
        this.successMessage = 'Les modifications ont été enregistrées avec succès.';
        this.isSaving = false;
        
        // Reset form state to show it's saved
        this.companyForm.markAsPristine();
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la mise à jour: ' + (error.error?.message || error.message);
        this.isSaving = false;
        console.error('Error updating company:', error);
      }
    });
  }

  onCancel(): void {
    if (this.company) {
      this.companyForm.reset(this.company);
      this.companyForm.markAsPristine();
    }
    this.errorMessage = '';
    this.successMessage = '';
    this.selectedLogoFile = null;
    this.logoPreview = null;
    this.updateLogoPreview();
  }

  onLogoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedLogoFile = input.files[0];
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedLogoFile);
    }
  }

  uploadLogo(): void {
    if (!this.selectedLogoFile) {
      this.errorMessage = 'Veuillez sélectionner un fichier logo.';
      return;
    }

    this.isUploadingLogo = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.companyService.uploadCurrentUserCompanyLogo(this.selectedLogoFile).subscribe({
      next: (updatedCompany) => {
        this.company = updatedCompany;
        this.companyForm.patchValue({ logo: updatedCompany.logo });
        this.successMessage = 'Logo téléchargé avec succès.';
        this.isUploadingLogo = false;
        this.selectedLogoFile = null;
        this.updateLogoPreview();
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors du téléchargement du logo: ' + (error.error?.message || error.message);
        this.isUploadingLogo = false;
        console.error('Error uploading logo:', error);
      }
    });
  }

  deleteLogo(): void {
    if (!confirm('Êtes-vous sûr de vouloir supprimer le logo ?')) {
      return;
    }

    this.isDeletingLogo = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.companyService.deleteCurrentUserCompanyLogo().subscribe({
      next: (updatedCompany) => {
        this.company = updatedCompany;
        this.companyForm.patchValue({ logo: '' });
        this.successMessage = 'Logo supprimé avec succès.';
        this.isDeletingLogo = false;
        this.updateLogoPreview();
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la suppression du logo: ' + (error.error?.message || error.message);
        this.isDeletingLogo = false;
        console.error('Error deleting logo:', error);
      }
    });
  }

  updateLogoPreview(): void {
    if (this.company?.logo) {
      this.logoPreview = this.company.logo;
    } else {
      this.logoPreview = null;
    }
  }

  copyLogoUrl(): void {
    const logoUrl = this.companyForm.get('logo')?.value;
    if (logoUrl) {
      navigator.clipboard.writeText(logoUrl).then(() => {
        this.successMessage = 'URL du logo copiée dans le presse-papier.';
        setTimeout(() => {
          if (this.successMessage === 'URL du logo copiée dans le presse-papier.') {
            this.successMessage = '';
          }
        }, 3000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
        this.errorMessage = 'Échec de la copie de l\'URL.';
      });
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Helper methods for template
  hasError(controlName: string, errorName: string): boolean {
    const control = this.companyForm.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }

  isFieldInvalid(controlName: string): boolean {
    const control = this.companyForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
}
