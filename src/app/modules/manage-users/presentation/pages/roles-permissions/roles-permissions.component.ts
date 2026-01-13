import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// Import de la traduction
import { TranslatePipe } from '../../../../../core/services/translation/translate.pipe';

// Import des use cases
import { CREATE_ROLE_USE_CASE } from '../../../application/use-cases/create-role.use-case.token';
import { GET_ROLES_USE_CASE } from '../../../application/use-cases/get-roles.use-case.token';
import { COPY_ROLE_USE_CASE } from '../../../application/use-cases/copy-role.use-case.token';
import { ROLE_REPOSITORY } from '../../../domain/repositories/role.repository.token';
import { CreateRoleUseCaseImpl } from '../../../application/use-cases/create-role.use-case';
import { GetRolesUseCaseImpl } from '../../../application/use-cases/get-roles.use-case';
import { CopyRoleUseCaseImpl } from '../../../application/use-cases/copy-role.use-case';
import { HttpRoleRepository } from '../../../infrastructure/repositories/http-role.repository';
import { RoleResponseDto, CopyRoleDto } from '../../../application/dto/create-role.dto';
import { AuthService } from '../../../../../core/core.index';

@Component({
  selector: 'app-roles-permissions',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './roles-permissions.component.html',
  styleUrls: ['./roles-permissions.component.scss'],
  providers: [
    {
      provide: ROLE_REPOSITORY,
      useClass: HttpRoleRepository,
    },
    {
      provide: CREATE_ROLE_USE_CASE,
      useClass: CreateRoleUseCaseImpl,
    },
    {
      provide: GET_ROLES_USE_CASE,
      useClass: GetRolesUseCaseImpl,
    },
    {
      provide: COPY_ROLE_USE_CASE,
      useClass: CopyRoleUseCaseImpl,
    },
  ]
})
export class RolesPermissionsComponent implements OnInit {
  private fb = inject(FormBuilder);
  private createRoleUseCase = inject(CREATE_ROLE_USE_CASE);
  private getRolesUseCase = inject(GET_ROLES_USE_CASE);
  private copyRoleUseCase = inject(COPY_ROLE_USE_CASE);
  private authService = inject(AuthService);

  roleForm!: FormGroup;
  editForm!: FormGroup;
  copyForm!: FormGroup;
  roles: RoleResponseDto[] = [];
  loading = false;
  error: string | null = null;
  success = false;
  editSuccess = false;
  editError: string | null = null;
  copySuccess = false;
  copyError: string | null = null;
  selectedRole: RoleResponseDto | null = null;
  routes = {
    permission: (roleId: number) => `/app/manage-users/permission/${roleId}`
  };

  ngOnInit(): void {
    this.initForm();
    this.initEditForm();
    this.initCopyForm();
    this.loadRoles();
  }

  /**
   * Initialise le formulaire de création de rôle
   */
  private initForm(): void {
    this.roleForm = this.fb.group({
      roleCode: ['', [Validators.required, Validators.minLength(3)]],
      roleNom: ['', [Validators.required, Validators.minLength(3)]],
      roleDescription: [''],
      roleNiveau: [1, [Validators.required, Validators.min(1)]],
      roleActif: [true]
    });
  }

  /**
   * Initialise le formulaire d'édition de rôle
   */
  private initEditForm(): void {
    this.editForm = this.fb.group({
      roleNom: ['', [Validators.required, Validators.minLength(3)]],
      roleDescription: [''],
      roleNiveau: [1, [Validators.required, Validators.min(1)]],
      roleActif: [true]
    });
  }

  /**
   * Charge la liste des rôles
   */
  loadRoles(): void {
    this.loading = true;
    this.error = null;

    // Pour l'instant, on utilise l'ID de société 1
    const societeId = this.authService.user.societeId;

    (this.getRolesUseCase.execute(societeId) as Observable<RoleResponseDto[]>).subscribe({
      next: (roles) => {
        this.roles = roles;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des rôles:', error);
        this.error = 'Erreur lors du chargement des rôles';
        this.loading = false;
      }
    });
  }

  /**
   * Soumet le formulaire de création de rôle
   */
  onSubmit(): void {
    if (this.roleForm.invalid) {
      this.markFormGroupTouched(this.roleForm);
      return;
    }

    this.loading = true;
    this.error = null;
    this.success = false;

    const roleData = {
      ...this.roleForm.value,
      societeId: 1 // Pour l'instant, on utilise l'ID de société 1
    };

    (this.createRoleUseCase.execute(roleData) as Observable<RoleResponseDto>).subscribe({
      next: (role) => {
        this.success = true;
        this.roles.push(role);
        this.roleForm.reset({
          roleNiveau: 1,
          roleActif: true
        });
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la création du rôle:', error);
        this.error = error.message || 'Erreur lors de la création du rôle';
        this.loading = false;
      }
    });
  }

  /**
   * Marque tous les champs du formulaire comme touchés pour afficher les erreurs
   */
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  /**
   * Vérifie si un champ est invalide et a été touché
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.roleForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  /**
   * Récupère le message d'erreur pour un champ
   */
  getFieldError(fieldName: string): string {
    const field = this.roleForm.get(fieldName);
    
    if (!field || !field.errors) {
      return '';
    }

    if (field.errors['required']) {
      return 'Ce champ est obligatoire';
    }

    if (field.errors['minlength']) {
      return `Minimum ${field.errors['minlength'].requiredLength} caractères`;
    }

    if (field.errors['min']) {
      return `La valeur minimale est ${field.errors['min'].min}`;
    }

    return 'Valeur invalide';
  }

  /**
   * Formate la date pour l'affichage
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  /**
   * Retourne le statut du rôle sous forme de texte
   */
  getRoleStatus(role: RoleResponseDto): string {
    return role.roleActif ? 'Actif' : 'Inactif';
  }

  /**
   * Retourne la classe CSS pour le statut du rôle
   */
  getRoleStatusClass(role: RoleResponseDto): string {
    return role.roleActif ? 'badge bg-success' : 'badge bg-danger';
  }

  /**
   * Initialise le formulaire de copie de rôle
   */
  private initCopyForm(): void {
    this.copyForm = this.fb.group({
      newRoleCode: ['', [Validators.required, Validators.minLength(3)]],
      newRoleNom: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  /**
   * Ouvre la modal d'édition pour un rôle
   */
  openEditModal(role: RoleResponseDto): void {
    this.selectedRole = role;
    this.editForm.patchValue({
      roleNom: role.roleNom,
      roleDescription: role.roleDescription || '',
      roleNiveau: role.roleNiveau,
      roleActif: role.roleActif
    });
    this.editError = null;
    this.editSuccess = false;
  }

  /**
   * Ferme la modal d'édition
   */
  closeEditModal(): void {
    this.selectedRole = null;
    this.editForm.reset({
      roleNiveau: 1,
      roleActif: true
    });
    this.editError = null;
    this.editSuccess = false;
  }

  /**
   * Soumet le formulaire d'édition de rôle
   */
  onEditSubmit(): void {
    if (this.editForm.invalid || !this.selectedRole) {
      this.markFormGroupTouched(this.editForm);
      return;
    }

    this.loading = true;
    this.editError = null;
    this.editSuccess = false;

    const updateData = {
      ...this.editForm.value,
      id: this.selectedRole.id,
      societeId: 1 // Pour l'instant, on utilise l'ID de société 1
    };

    // TODO: Implémenter l'appel API pour mettre à jour le rôle
    // Pour l'instant, on simule la mise à jour
    setTimeout(() => {
      // Mettre à jour le rôle dans la liste
      const index = this.roles.findIndex(r => r.id === this.selectedRole!.id);
      if (index !== -1) {
        this.roles[index] = {
          ...this.roles[index],
          ...updateData
        };
      }
      
      this.editSuccess = true;
      this.loading = false;
      
      // Fermer la modal après 2 secondes
      setTimeout(() => {
        this.closeEditModal();
      }, 2000);
    }, 1000);
  }

  /**
   * Vérifie si un champ du formulaire d'édition est invalide
   */
  isEditFieldInvalid(fieldName: string): boolean {
    const field = this.editForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  /**
   * Récupère le message d'erreur pour un champ du formulaire d'édition
   */
  getEditFieldError(fieldName: string): string {
    const field = this.editForm.get(fieldName);
    
    if (!field || !field.errors) {
      return '';
    }

    if (field.errors['required']) {
      return 'Ce champ est obligatoire';
    }

    if (field.errors['minlength']) {
      return `Minimum ${field.errors['minlength'].requiredLength} caractères`;
    }

    if (field.errors['min']) {
      return `La valeur minimale est ${field.errors['min'].min}`;
    }

    return 'Valeur invalide';
  }

  /**
   * Ouvre la modal de copie pour un rôle
   */
  openCopyModal(role: RoleResponseDto): void {
    this.selectedRole = role;
    this.copyForm.reset({
      newRoleCode: `${role.roleCode}_COPY`,
      newRoleNom: `${role.roleNom} (Copie)`
    });
    this.copyError = null;
    this.copySuccess = false;
  }

  /**
   * Ferme la modal de copie
   */
  closeCopyModal(): void {
    this.selectedRole = null;
    this.copyForm.reset();
    this.copyError = null;
    this.copySuccess = false;
  }

  /**
   * Soumet le formulaire de copie de rôle
   */
  onCopySubmit(): void {
    if (this.copyForm.invalid || !this.selectedRole) {
      this.markFormGroupTouched(this.copyForm);
      return;
    }

    this.loading = true;
    this.copyError = null;
    this.copySuccess = false;

    const copyData: CopyRoleDto = this.copyForm.value;

    (this.copyRoleUseCase.execute(this.selectedRole.id, copyData) as Observable<RoleResponseDto>).subscribe({
      next: (role) => {
        this.copySuccess = true;
        this.roles.push(role);
        this.loading = false;
        // Fermer la modal après 2 secondes
        setTimeout(() => {
          this.closeCopyModal();
        }, 2000);
      },
      error: (error) => {
        console.error('Erreur lors de la copie du rôle:', error);
        this.copyError = error.message || 'Erreur lors de la copie du rôle';
        this.loading = false;
      }
    });
  }

  /**
   * Vérifie si un champ du formulaire de copie est invalide
   */
  isCopyFieldInvalid(fieldName: string): boolean {
    const field = this.copyForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  /**
   * Récupère le message d'erreur pour un champ du formulaire de copie
   */
  getCopyFieldError(fieldName: string): string {
    const field = this.copyForm.get(fieldName);
    
    if (!field || !field.errors) {
      return '';
    }

    if (field.errors['required']) {
      return 'Ce champ est obligatoire';
    }

    if (field.errors['minlength']) {
      return `Minimum ${field.errors['minlength'].requiredLength} caractères`;
    }

    return 'Valeur invalide';
  }

  /**
   * Tronque la description à 50 caractères et ajoute "..." si nécessaire
   */
  truncateDescription(description: string): string {
    if (!description) return '-';
    
    const maxLength = 50;
    if (description.length <= maxLength) {
      return description;
    }
    
    return description.substring(0, maxLength) + '...';
  }
}
