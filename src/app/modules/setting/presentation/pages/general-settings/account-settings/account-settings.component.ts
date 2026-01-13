import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserService } from '../../../../application/services/user.service';
import { UserResponseDto, UpdateUserRequestDto } from '../../../../domain/dto/user.dto';

@Component({
  selector: 'app-account-settings',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  userForm: FormGroup;
  passwordForm: FormGroup;
  isLoading = false;
  isSaving = false;
  isChangingPassword = false;
  errorMessage = '';
  successMessage = '';
  passwordSuccessMessage = '';
  passwordErrorMessage = '';
  user: UserResponseDto | null = null;

  // Options pour les sélecteurs
  statutOptions = ['ACTIF', 'INACTIF'];
  langueOptions = ['fr', 'en', 'es', 'de'];

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.createUserForm();
    this.passwordForm = this.createPasswordForm();
  }

  ngOnInit(): void {
    this.loadUser();
  }

  createUserForm(): FormGroup {
    return this.fb.group({
      nomPrenom: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pwdText: ['', [Validators.minLength(6)]],
      societeId: [{ value: '', disabled: true }],
      siteId: [{ value: '', disabled: true }],
      departementId: [{ value: '', disabled: true }],
      statut: ['ACTIF', [Validators.required]],
      photo: [''],
      signature: [''],
      langue: ['fr', [Validators.required]]
    });
  }

  createPasswordForm(): FormGroup {
    return this.fb.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  loadUser(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.user = user;
        this.userForm.patchValue({
          nomPrenom: user.nomPrenom,
          telephone: user.telephone,
          adresse: user.adresse,
          email: user.email,
          pwdText: '', // Ne pas pré-remplir le mot de passe
          societeId: user.societeId,
          siteId: user.siteId,
          departementId: user.departementId,
          statut: user.statut,
          photo: user.photo,
          signature: user.signature,
          langue: user.langue || 'fr'
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors du chargement des données utilisateur: ' + (error.error?.message || error.message);
        this.isLoading = false;
        console.error('Error loading user:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.markFormGroupTouched(this.userForm);
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData = this.userForm.value as UpdateUserRequestDto;
    // Ajouter les champs requis qui sont désactivés
    formData.societeId = this.user?.societeId || 0;
    formData.siteId = this.user?.siteId || 0;
    formData.departementId = this.user?.departementId || 0;

    this.userService.updateCurrentUser(formData).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.successMessage = 'Les modifications ont été enregistrées avec succès.';
        this.isSaving = false;
        
        // Reset form state to show it's saved
        this.userForm.markAsPristine();
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la mise à jour: ' + (error.error?.message || error.message);
        this.isSaving = false;
        console.error('Error updating user:', error);
      }
    });
  }

  onChangePassword(): void {
    if (this.passwordForm.invalid) {
      this.markFormGroupTouched(this.passwordForm);
      return;
    }

    this.isChangingPassword = true;
    this.passwordErrorMessage = '';
    this.passwordSuccessMessage = '';

    const { currentPassword, newPassword } = this.passwordForm.value;

    this.userService.updateCurrentUserPassword(currentPassword, newPassword).subscribe({
      next: () => {
        this.passwordSuccessMessage = 'Mot de passe modifié avec succès.';
        this.isChangingPassword = false;
        this.passwordForm.reset();
      },
      error: (error) => {
        this.passwordErrorMessage = 'Erreur lors du changement de mot de passe: ' + (error.error?.message || error.message);
        this.isChangingPassword = false;
        console.error('Error changing password:', error);
      }
    });
  }

  onCancel(): void {
    if (this.user) {
      this.userForm.patchValue({
        nomPrenom: this.user.nomPrenom,
        telephone: this.user.telephone,
        adresse: this.user.adresse,
        email: this.user.email,
        pwdText: '',
        statut: this.user.statut,
        photo: this.user.photo,
        signature: this.user.signature,
        langue: this.user.langue || 'fr'
      });
      this.userForm.markAsPristine();
    }
    this.errorMessage = '';
    this.successMessage = '';
  }

  onCancelPassword(): void {
    this.passwordForm.reset();
    this.passwordErrorMessage = '';
    this.passwordSuccessMessage = '';
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
  hasError(controlName: string, errorName: string, form: FormGroup = this.userForm): boolean {
    const control = form.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }

  isFieldInvalid(controlName: string, form: FormGroup = this.userForm): boolean {
    const control = form.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  getPasswordMismatchError(): boolean {
    const newPasswordTouched = this.passwordForm.get('newPassword')?.touched || false;
    const confirmPasswordTouched = this.passwordForm.get('confirmPassword')?.touched || false;
    return this.passwordForm.hasError('mismatch') && newPasswordTouched && confirmPasswordTouched;
  }
}
