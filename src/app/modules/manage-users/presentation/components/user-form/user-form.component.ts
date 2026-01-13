import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// Angular Material imports
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

// Import de la traduction
import { TranslatePipe } from '../../../../../core/services/translation/translate.pipe';

// Import des use cases
import { CREATE_USER_USE_CASE } from '../../../application/use-cases/create-user.use-case.token';
import { UPDATE_USER_USE_CASE } from '../../../application/use-cases/update-user.use-case.token';
import { CreateUserUseCaseImpl } from '../../../application/use-cases/create-user.use-case';
import { UpdateUserUseCaseImpl } from '../../../application/use-cases/update-user.use-case';

// Import des DTOs
import { CreateUserDto, UserResponseDto } from '../../../application/dto/create-user.dto';

// Import des services
import { SiteService } from '../../../../setting/application/services/site.service';
import { DepartementService } from '../../../../setting/application/services/departement.service';
import { AuthService } from '../../../../../core/core.index';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Angular Material modules
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    // Traduction
    TranslatePipe
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [
    // Providers pour les use cases
    {
      provide: CREATE_USER_USE_CASE,
      useClass: CreateUserUseCaseImpl,
    },
    {
      provide: UPDATE_USER_USE_CASE,
      useClass: UpdateUserUseCaseImpl,
    },
  ]
})
export class UserFormComponent implements OnInit, OnChanges {
  private fb = inject(FormBuilder);
  private createUserUseCase = inject(CREATE_USER_USE_CASE);
  private updateUserUseCase = inject(UPDATE_USER_USE_CASE);
  private siteService = inject(SiteService);
  private departementService = inject(DepartementService);
  private authService = inject(AuthService);

  @Input() user?: UserResponseDto; // Pour l'édition
  @Input() isEditMode = false;
  @Output() userSaved = new EventEmitter<UserResponseDto>();
  @Output() cancelled = new EventEmitter<void>();

  userForm!: FormGroup;
  loading = false;
  error: string | null = null;
  success = false;

  // Options pour les listes déroulantes
  statusOptions = [
    { value: 'ACTIF', label: 'forms.userForm.statuses.ACTIF' },
    { value: 'INACTIF', label: 'forms.userForm.statuses.INACTIF' },
    { value: 'EN_ATTENTE', label: 'forms.userForm.statuses.EN_ATTENTE' }
  ];

  siteOptions: { value: number, label: string }[] = [];
  departmentOptions: { value: number, label: string }[] = [];

  ngOnInit(): void {
    this.initForm();
    this.loadSites();
    this.loadDepartements();
  }

  /**
   * Hook appelé quand les inputs changent
   */
  ngOnChanges(): void {
    if (this.user && this.isEditMode) {
      // On attend un peu pour s'assurer que les options sont chargées
      setTimeout(() => {
        this.populateForm(this.user!);
      }, 100);
    }
  }

  /**
   * Initialise le formulaire
   */
  private initForm(): void {
    this.userForm = this.fb.group({
      id:[null],
      nomPrenom: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.pattern(/^[0-9+\s\-()]{10,}$/)]],
      adresse: [''],
      siteId: ['', Validators.required],
      departementId: ['', Validators.required],
      statut: ['ACTIF', Validators.required],
      // Champs supplémentaires
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', this.isEditMode ? [] : [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', this.isEditMode ? [] : [Validators.required]],
      societeId: [this.authService.idUser, Validators.required], // Valeur par défaut
      pwdText: [''],
      photo: [''],
      signature: [''],
      langue: ['fr']
    }, { validators: this.passwordMatchValidator });
  }

  /**
   * Remplit le formulaire avec les données d'un utilisateur existant
   */
  private populateForm(user: UserResponseDto): void {
    this.userForm.patchValue({
      id: user.id,
      nomPrenom: user.nomPrenom,
      email: user.email,
      telephone: user.telephone || '',
      adresse: user.adresse || '',
      siteId: user.siteId || '',
      departementId: user.departementId || '',
      statut: user.statut || 'ACTIF',
      userName: user.userName || user.email.split('@')[0],
      societeId: user.societeId || 1,
      pwdText: user.pwdText || '',
      photo: user.photo || '',
      signature: user.signature || '',
      langue: user.langue || 'fr'
    });

    // Désactive la validation du mot de passe en mode édition
    this.userForm.get('password')?.clearValidators();
    this.userForm.get('confirmPassword')?.clearValidators();
    this.userForm.get('password')?.updateValueAndValidity();
    this.userForm.get('confirmPassword')?.updateValueAndValidity();
  }

  /**
   * Validateur pour vérifier que les mots de passe correspondent
   */
  private passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  /**
   * Soumet le formulaire
   */
  async onSubmit(): Promise<void> {
    if (this.userForm.invalid) {
      this.markFormGroupTouched(this.userForm);
      return;
    }

    this.loading = true;
    this.error = null;
    this.success = false;

    try {
      const formValue = this.userForm.value;
      
      const userData: CreateUserDto = {
        id : formValue.id,
        nomPrenom: formValue.nomPrenom,
        email: formValue.email,
        telephone: formValue.telephone || '',
        adresse: formValue.adresse || '',
        userName: formValue.userName,
        password: formValue.password || '',
        pwdText: formValue.password || '', // Pour l'instant, même que le mot de passe
        societeId: formValue.societeId,
        siteId: formValue.siteId,
        departementId: formValue.departementId,
        statut: formValue.statut,
        photo: formValue.photo || '',
        signature: formValue.signature || '',
        langue: formValue.langue || 'fr'
      };

      let result: UserResponseDto;

      if (this.isEditMode && this.user) {
        // Utiliser le use case de modification
        result = await this.updateUserUseCase.execute(userData.id!, userData);
      } else {
        // Utiliser le use case de création
        result = await this.createUserUseCase.execute(userData);
      }

      this.success = true;
      this.userSaved.emit(result);

      // Réinitialise le formulaire après un succès en mode création
      if (!this.isEditMode) {
        setTimeout(() => {
          this.userForm.reset({
            statut: 'ACTIF',
            siteId: '',
            departementId: '',
            societeId: 1,
            langue: 'fr'
          });
          this.success = false;
        }, 2000);
      }

    } catch (error: any) {
      console.error('Erreur lors de la sauvegarde de l\'utilisateur:', error);
      this.error = error.message || 'Une erreur est survenue lors de la sauvegarde. Veuillez réessayer.';
    } finally {
      this.loading = false;
    }
  }

  /**
   * Annule l'opération
   */
  onCancel(): void {
    this.cancelled.emit();
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
    const field = this.userForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  /**
   * Récupère le message d'erreur pour un champ
   */
  getFieldError(fieldName: string): string {
    const field = this.userForm.get(fieldName);
    
    if (!field || !field.errors) {
      return '';
    }

    if (field.errors['required']) {
      return 'forms.validation.required';
    }

    if (field.errors['email']) {
      return 'forms.validation.email';
    }

    if (field.errors['minlength']) {
      const requiredLength = field.errors['minlength'].requiredLength;
      return `forms.validation.minLength`.replace('{min}', requiredLength.toString());
    }

    if (field.errors['pattern']) {
      return 'Format invalide';
    }

    if (field.errors['passwordMismatch']) {
      return 'forms.validation.passwordMismatch';
    }

    return 'Valeur invalide';
  }

  /**
   * Génère un nom d'utilisateur à partir de l'email
   */
  generateUsername(): void {
    const email = this.userForm.get('email')?.value;
    if (email && !this.userForm.get('userName')?.value) {
      const username = email.split('@')[0];
      this.userForm.get('userName')?.setValue(username);
    }
  }

  /**
   * Charge la liste des sites
   */
  private loadSites(): void {
    this.siteService.getSites({ page: 0, size: 100 }).subscribe({
      next: (response) => {
        this.siteOptions = response.content.map(site => ({
          value: site.id,
          label: `${site.nom} (${site.code})`
        }));
      },
      error: (error) => {
        console.error('Erreur lors du chargement des sites:', error);
        this.siteOptions = [];
      }
    });
  }

  /**
   * Charge la liste des départements
   */
  private loadDepartements(): void {
    this.departementService.getDepartements(undefined, 0, 100).subscribe({
      next: (response) => {
        this.departmentOptions = response.content.map(departement => ({
          value: departement.id,
          label: departement.nom
        }));
      },
      error: (error) => {
        console.error('Erreur lors du chargement des départements:', error);
        this.departmentOptions = [];
      }
    });
  }
}
