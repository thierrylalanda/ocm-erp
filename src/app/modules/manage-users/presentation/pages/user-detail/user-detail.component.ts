import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// Import de la traduction
import { TranslatePipe } from '../../../../../core/services/translation/translate.pipe';

// Import des use cases
import { GET_USERS_USE_CASE } from '../../../application/use-cases/get-users.use-case.token';
import { UPDATE_USER_USE_CASE } from '../../../application/use-cases/update-user.use-case.token';
import { GET_ROLES_USE_CASE } from '../../../application/use-cases/get-roles.use-case.token';
import { GetUsersUseCase } from '../../../application/use-cases/get-users.use-case';
import { UpdateUserUseCase } from '../../../application/use-cases/update-user.use-case';
import { GetRolesUseCase } from '../../../application/use-cases/get-roles.use-case';

// Import des repositories et use cases
import { USER_REPOSITORY } from '../../../domain/repositories/user.repository';
import { ROLE_REPOSITORY } from '../../../domain/repositories/role.repository.token';
import { HttpUserRepository } from '../../../infrastructure/repositories/http-user.repository';
import { HttpRoleRepository } from '../../../infrastructure/repositories/http-role.repository';
import { CreateUserUseCaseImpl } from '../../../application/use-cases/create-user.use-case';
import { UpdateUserUseCaseImpl } from '../../../application/use-cases/update-user.use-case';
import { GetUsersUseCaseImpl } from '../../../application/use-cases/get-users.use-case';
import { GetRolesUseCaseImpl } from '../../../application/use-cases/get-roles.use-case';

// Import des DTOs
import { UserResponseDto } from '../../../application/dto/create-user.dto';

// Import des services
import { SiteService } from '../../../../setting/application/services/site.service';
import { DepartementService } from '../../../../setting/application/services/departement.service';
import { AuthService } from '../../../../../core/services/auth/auth.service';
import { UserRoleService, UserRoleResponseDto, UserRolePageResponseDto, ChangePasswordRequestDto, } from '../../../application/services/user-role.service';
import { routes, ToasterService } from '../../../../../core/core.index';
@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,

    // Angular Material modules
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,

    // Traduction
    TranslatePipe
  ],
  providers: [
    // Providers pour les repositories
    {
      provide: USER_REPOSITORY,
      useClass: HttpUserRepository,
    },
    {
      provide: ROLE_REPOSITORY,
      useClass: HttpRoleRepository,
    },
    // Providers pour les use cases
    {
      provide: GET_USERS_USE_CASE,
      useClass: GetUsersUseCaseImpl,
    },
    {
      provide: UPDATE_USER_USE_CASE,
      useClass: UpdateUserUseCaseImpl,
    },
    {
      provide: GET_ROLES_USE_CASE,
      useClass: GetRolesUseCaseImpl,
    },
  ],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  // Use cases
  private getUsersUseCase = inject(GET_USERS_USE_CASE);
  private updateUserUseCase = inject(UPDATE_USER_USE_CASE);
  private getRolesUseCase = inject(GET_ROLES_USE_CASE);

  // Services
  private siteService = inject(SiteService);
  private departementService = inject(DepartementService);
  private authService = inject(AuthService);
  private userRoleService = inject(UserRoleService);
  private toasterService = inject(ToasterService);
  routes = routes;

  // Données
  user: UserResponseDto | null = null;
  loading = true;
  error: string | null = null;

  // Onglets
  selectedTabIndex = 0;

  // Formulaire informations de base
  basicInfoForm!: FormGroup;

  // Formulaire changement de mot de passe
  passwordForm!: FormGroup;

  // Données pour les listes déroulantes
  siteOptions: { value: number, label: string }[] = [];
  departmentOptions: { value: number, label: string }[] = [];
  statusOptions = [
    { value: 'ACTIF', label: 'forms.userForm.statuses.ACTIF' },
    { value: 'INACTIF', label: 'forms.userForm.statuses.INACTIF' },
    { value: 'EN_ATTENTE', label: 'forms.userForm.statuses.EN_ATTENTE' }
  ];

  // Gestion des rôles
  userRoles: UserRoleResponseDto[] = [];
  availableRoles: any[] = [];
  loadingRoles = false;
  roleForm!: FormGroup;
  roleToDelete: UserRoleResponseDto | null = null;

  constructor() {
    this.initForms();
  }

  ngOnInit(): void {
    this.loadUser();
    this.loadSites();
    this.loadDepartements();

  }

  /**
   * Initialise les formulaires
   */
  private initForms(): void {
    // Formulaire informations de base
    this.basicInfoForm = this.fb.group({
      nomPrenom: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.pattern(/^[0-9+\s\-()]{10,}$/)]],
      adresse: [''],
      siteId: ['', Validators.required],
      departementId: ['', Validators.required],
      statut: ['ACTIF', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      societeId: ['', Validators.required],
      photo: [''],
      signature: [''],
      langue: ['fr']
    });

    // Formulaire changement de mot de passe
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    // Formulaire ajout de rôle
    this.roleForm = this.fb.group({
      roleId: ['', [Validators.required]],
      dateExpiration: [null, []],
      actif: [true]
    });
  }

  /**
   * Charge les données de l'utilisateur
   */
  private async loadUser(): Promise<void> {
    const userId = this.route.snapshot.paramMap.get('id');
    if (!userId) {
      this.error = 'ID utilisateur non spécifié';
      this.loading = false;
      return;
    }

    try {
      this.loading = true;
      const options = { page: 0, size: 1, search: userId };
      const response = await this.getUsersUseCase.execute(options);

      if (response.content.length > 0) {
        this.user = response.content[0];
        this.populateBasicInfoForm();
        await this.loadUserRoles();
        this.loadAvailableRoles();
      } else {
        this.error = 'Utilisateur non trouvé';
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement de l\'utilisateur:', error);
      this.error = 'Impossible de charger les données de l\'utilisateur';
    } finally {
      this.loading = false;
    }
  }

  /**
   * Remplit le formulaire d'informations de base
   */
  private populateBasicInfoForm(): void {
    if (!this.user) return;

    this.basicInfoForm.patchValue({
      nomPrenom: this.user.nomPrenom,
      email: this.user.email,
      telephone: this.user.telephone || '',
      adresse: this.user.adresse || '',
      siteId: this.user.siteId || '',
      departementId: this.user.departementId || '',
      statut: this.user.statut || 'ACTIF',
      userName: this.user.userName || this.user.email.split('@')[0],
      societeId: this.user.societeId || 1,
      photo: this.user.photo || '',
      signature: this.user.signature || '',
      langue: this.user.langue || 'fr'
    });
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

  /**
   * Charge les rôles disponibles
   */
  private loadAvailableRoles(): void {
    // Utilise le GetRolesUseCase pour charger les rôles depuis le module role
    const societeId = this.user?.societeId || 1; // Utilise l'ID de la société de l'utilisateur ou 1 par défaut

    this.getRolesUseCase.execute(societeId).subscribe({
      next: (roles) => {
        this.availableRoles = roles.map(role => ({
          id: role.id,
          code: role.roleCode,
          nom: role.roleNom
        }));
      },
      error: (error) => {
        console.error('Erreur lors du chargement des rôles:', error);
        // Fallback sur des données mockées en cas d'erreur
        this.availableRoles = [
          { id: 1, code: 'ADMIN', nom: 'Administrateur' },
          { id: 2, code: 'MANAGER', nom: 'Manager' },
          { id: 3, code: 'USER', nom: 'Utilisateur' }
        ];
      }
    });
  }

  /**
   * Charge les rôles de l'utilisateur
   */
  private async loadUserRoles(): Promise<void> {
    if (!this.user) return;

    this.loadingRoles = true;
    try {
      var roles = await this.userRoleService.getUserRoles(this.user.id).toPromise();
      this.userRoles = roles || [];
    } catch (error) {
      console.error('Erreur lors du chargement des rôles:', error);
      this.userRoles = [];
    } finally {
      this.loadingRoles = false;
    }
  }

  /**
   * Validateur pour vérifier que les mots de passe correspondent
   */
  private passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  /**
   * Sauvegarde les informations de base
   */
  async saveBasicInfo(): Promise<void> {
    if (this.basicInfoForm.invalid || !this.user) {
      this.markFormGroupTouched(this.basicInfoForm);
      return;
    }

    try {
      const formValue = this.basicInfoForm.value;
      const userData = {
        id: this.user.id,
        ...formValue
      };

      await this.updateUserUseCase.execute(this.user.id, userData);
      this.showSuccess('Informations mises à jour avec succès');
    } catch (error: any) {
      console.error('Erreur lors de la mise à jour:', error);
      this.showError(error.message || 'Erreur lors de la mise à jour');
    }
  }

  /**
   * Change le mot de passe
   */
  async changePassword(): Promise<void> {
    if (this.passwordForm.invalid || !this.user) {
      this.markFormGroupTouched(this.passwordForm);
      return;
    }

    try {
      const formValue = this.passwordForm.value;
      const passwordData: ChangePasswordRequestDto = {
        username: this.user.userName || this.user.email,
        password: formValue.newPassword
      };

      await this.userRoleService.changeUserPassword(this.user.id, passwordData).toPromise();

      this.showSuccess('Mot de passe changé avec succès');
      this.passwordForm.reset();
    } catch (error: any) {
      console.error('Erreur lors du changement de mot de passe:', error);
      this.showError(error.message || 'Erreur lors du changement de mot de passe');
    }
  }

  /**
   * Ajoute un rôle à l'utilisateur
   */
  async addRole(): Promise<void> {
    if (this.roleForm.invalid || !this.user) {
      this.markFormGroupTouched(this.roleForm);
      return;
    }

    try {
      const formValue = this.roleForm.value;
      const requestData = {
        utilisateurId: this.user.id,
        roleId: formValue.roleId,
        dateExpiration: formValue.dateExpiration,
        actif: formValue.actif,
        attribueParId: this.authService.user?.id || 1
      };

      await this.userRoleService.addUserRole(requestData).toPromise();

      this.showSuccess('Rôle ajouté avec succès');
      this.roleForm.reset({ actif: true });
      await this.loadUserRoles();
    } catch (error: any) {
      console.error('Erreur lors de l\'ajout du rôle:', error);
      this.showError(error.message || 'Erreur lors de l\'ajout du rôle');
    }
  }

  /**
   * Active un rôle
   */
  async activateRole(roleId: number): Promise<void> {
    try {
      await this.userRoleService.activateUserRole(roleId).toPromise();

      this.showSuccess('Rôle activé avec succès');
      await this.loadUserRoles();
    } catch (error: any) {
      this.showError(error.message || 'Erreur lors de l\'activation du rôle');
    }
  }

  /**
   * Désactive un rôle
   */
  async deactivateRole(roleId: number): Promise<void> {
    try {
      await this.userRoleService.deactivateUserRole(roleId).toPromise();

      this.showSuccess('Rôle désactivé avec succès');
      await this.loadUserRoles();
    } catch (error: any) {
      this.showError(error.message || 'Erreur lors de la désactivation du rôle');
    }
  }

  /**
   * Supprime un rôle
   */
  /**
   * Prépare la suppression d'un rôle
   */
  prepareDeleteRole(role: UserRoleResponseDto): void {
    this.roleToDelete = role;
  }

  /**
   * Confirme la suppression d'un rôle
   */
  async confirmDeleteRole(): Promise<void> {
    if (!this.roleToDelete) return;

    try {
      await this.userRoleService.deleteUserRole(this.roleToDelete.id).toPromise();
      this.showSuccess('Rôle supprimé avec succès');
      this.roleToDelete = null;
      await this.loadUserRoles();
    } catch (error: any) {
      this.showError(error.message || 'Erreur lors de la suppression du rôle');
    }
  }

  /**
   * Retourne à la liste des utilisateurs
   */
  goBack(): void {
    this.router.navigate(['/manage-users/users']);
  }

  /**
   * Affiche un message de succès
   */
  private showSuccess(message: string): void {
    this.toasterService.typeSuccess(message);
  }

  /**
   * Affiche un message d'erreur
   */
  private showError(message: string): void {
    this.toasterService.typeError(message);
  }

  /**
   * Marque tous les champs du formulaire comme touchés
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
   * Vérifie si un champ est invalide
   */
  isFieldInvalid(form: FormGroup, fieldName: string): boolean {
    const field = form.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  /**
   * Formate une date pour l'affichage
   */
  formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Date invalide';
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch {
      return 'Date invalide';
    }
  }
}
