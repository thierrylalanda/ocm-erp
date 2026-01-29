import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// Import des use cases
import { GetUsersUseCase } from '../../../application/use-cases/get-users.use-case';
import { CreateUserUseCase } from '../../../application/use-cases/create-user.use-case';
import { CREATE_USER_USE_CASE } from '../../../application/use-cases/create-user.use-case.token';
import { GET_USERS_USE_CASE } from '../../../application/use-cases/get-users.use-case.token';
import { ACTIVATE_USER_USE_CASE, ActivateUserUseCase } from '../../../application/use-cases/activate-user.use-case';
import { DEACTIVATE_USER_USE_CASE, DeactivateUserUseCase } from '../../../application/use-cases/deactivate-user.use-case';
import { DELETE_USER_USE_CASE, DeleteUserUseCase } from '../../../application/use-cases/delete-user.use-case';

// Import du ViewModel
import { UsersViewModel } from './users.view-model';

// Import des DTOs
import { UserResponseDto, UsersPaginationOptionsDto } from '../../../application/dto/create-user.dto';

// Import des composants
import { UserFormComponent } from '../../components/user-form/user-form.component';

// Import des services
import { SiteService } from '../../../../setting/application/services/site.service';
import { DepartementService } from '../../../../setting/application/services/departement.service';
import { AuthService } from '../../../../../core/services/auth/auth.service';

// Import de la traduction
import { TranslatePipe } from '../../../../../core/services/translation/translate.pipe';
import { ToasterService } from '../../../../../core/core.index';

// Import des implémentations et providers
import { GetUsersUseCaseImpl } from '../../../application/use-cases/get-users.use-case';
import { CreateUserUseCaseImpl } from '../../../application/use-cases/create-user.use-case';
import { ActivateUserUseCaseImpl } from '../../../application/use-cases/activate-user.use-case';
import { DeactivateUserUseCaseImpl } from '../../../application/use-cases/deactivate-user.use-case';
import { DeleteUserUseCaseImpl } from '../../../application/use-cases/delete-user.use-case';
import { APPLICATION_CONTEXT, LocalStorageContextAdapter } from '../../../../_shared';
import { USER_REPOSITORY } from '../../../domain/repositories/user.repository';
import { HttpUserRepository } from '../../../infrastructure/repositories/http-user.repository';
import { FormBuilderExampleComponent } from '../../../../_shared/presentation/components/form-builder/form-builder-example.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserFormComponent,
    TranslatePipe
  ],
  providers: [
    // ApplicationContext
    {
      provide: APPLICATION_CONTEXT,
      useClass: LocalStorageContextAdapter
    },
    // Repository
    {
      provide: USER_REPOSITORY,
      useClass: HttpUserRepository
    },
    // Use Cases
    {
      provide: GET_USERS_USE_CASE,
      useClass: GetUsersUseCaseImpl
    },
    {
      provide: CREATE_USER_USE_CASE,
      useClass: CreateUserUseCaseImpl
    },
    {
      provide: ACTIVATE_USER_USE_CASE,
      useClass: ActivateUserUseCaseImpl
    },
    {
      provide: DEACTIVATE_USER_USE_CASE,
      useClass: DeactivateUserUseCaseImpl
    },
    {
      provide: DELETE_USER_USE_CASE,
      useClass: DeleteUserUseCaseImpl
    },
    // Services
    SiteService,
    DepartementService,
    AuthService,
    ToasterService
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // Use cases injectés
  private getUsersUseCase = inject(GET_USERS_USE_CASE);
  private createUserUseCase = inject(CREATE_USER_USE_CASE);
  private activateUserUseCase = inject(ACTIVATE_USER_USE_CASE);
  private deactivateUserUseCase = inject(DEACTIVATE_USER_USE_CASE);
  private deleteUserUseCase = inject(DELETE_USER_USE_CASE);

  // ViewModel pour la logique de présentation
  viewModel = new UsersViewModel();

  // Services injectés
  private siteService = inject(SiteService);
  private departementService = inject(DepartementService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToasterService);

  // Référence à la modale
  @ViewChild('userFormModal') userFormModal!: ElementRef;

  // Données
  users: UserResponseDto[] = [];
  loading = false;
  error: string | null = null;

  // Gestion de la modal
  selectedUser: UserResponseDto | null = null;
  isEditMode = false;
  modalTitle = 'Créer un nouvel utilisateur';

  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  totalPages = 0;

  // Filtres
  searchQuery = '';
  statusFilter = '';
  siteFilter: number | null = null;
  departmentFilter: number | null = null;

  // Données pour les filtres
  sites: any[] = [];
  departments: any[] = [];
  loadingFilters = false;

  constructor() { }

  ngOnInit(): void {
    this.loadUsers();
    this.loadFiltersData();
  }

  /**
   * Charge la liste des utilisateurs avec les filtres appropriés
   */
  async loadUsers(): Promise<void> {
    this.loading = true;
    this.error = null;

    try {
      const options: UsersPaginationOptionsDto = {
        page: this.currentPage,
        size: this.pageSize,
        search: this.searchQuery || undefined,
        sortBy: 'nomPrenom',
        sortOrder: 'asc'
      };

      let response;

      // Déterminer quelle API utiliser en fonction des filtres
      if (this.siteFilter) {
        // Utiliser l'API spécifique pour le site
        response = await this.getUsersUseCase.executeBySite(this.siteFilter, options);
      } else if (this.departmentFilter) {
        // Utiliser l'API spécifique pour le département
        response = await this.getUsersUseCase.executeByDepartment(this.departmentFilter, options);
      } else {
        // Utiliser l'API par défaut (filtrée par société de l'utilisateur connecté)
        response = await this.getUsersUseCase.execute(options);
      }

      this.users = response.content;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;

    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs:', error);
      this.error = 'Impossible de charger la liste des utilisateurs. Veuillez réessayer.';
      this.users = [];
    } finally {
      this.loading = false;
    }
  }

  /**
   * Charge les données pour les filtres (sites et départements)
   */
  async loadFiltersData(): Promise<void> {
    this.loadingFilters = true;
    try {
      // Récupérer l'ID de la société de l'utilisateur connecté
      const user = this.authService.user;
      const societeId = user?.societeId;

      if (!societeId) {
        console.warn('Aucune société trouvée pour l\'utilisateur connecté');
        this.sites = [];
        this.departments = [];
        return;
      }

      // Charger les sites
      const sitesResponse = await this.siteService.getSites({
        societeId,
        page: 0,
        size: 100, // Charger tous les sites
        actif: true // Seulement les sites actifs
      }).toPromise();

      if (sitesResponse?.content) {
        this.sites = sitesResponse.content.map(site => ({
          id: site.id,
          nom: site.nom || `Site ${site.id}`
        }));
      } else {
        this.sites = [];
      }

      // Charger les départements
      const departementsResponse = await this.departementService.getDepartements(
        societeId,
        0, // page
        100, // size - Charger tous les départements
        undefined, // search
        true // actif - Seulement les départements actifs
      ).toPromise();

      if (departementsResponse?.content) {
        this.departments = departementsResponse.content.map(dept => ({
          id: dept.id,
          nom: dept.nom || `Département ${dept.id}`
        }));
      } else {
        this.departments = [];
      }
    } catch (error) {
      console.error('Erreur lors du chargement des filtres:', error);
      this.sites = [];
      this.departments = [];
    } finally {
      this.loadingFilters = false;
    }
  }

  /**
   * Recherche des utilisateurs
   */
  onSearch(): void {
    this.currentPage = 0;
    this.loadUsers();
  }

  /**
   * Réinitialise les filtres
   */
  resetFilters(): void {
    this.searchQuery = '';
    this.statusFilter = '';
    this.siteFilter = null;
    this.departmentFilter = null;
    this.currentPage = 0;
    this.loadUsers();
  }

  /**
   * Filtre par site
   */
  filterBySite(siteId: number | null): void {
    this.siteFilter = siteId;
    this.departmentFilter = null; // Réinitialiser le filtre département si on change de site
    this.currentPage = 0;
    this.loadUsers();
  }

  /**
   * Filtre par département
   */
  filterByDepartment(departmentId: number | null): void {
    this.departmentFilter = departmentId;
    this.siteFilter = null; // Réinitialiser le filtre site si on change de département
    this.currentPage = 0;
    this.loadUsers();
  }

  /**
   * Retourne le nom du site sélectionné
   */
  getSelectedSiteName(): string {
    if (!this.siteFilter) return 'Tous';
    const site = this.sites.find(s => s.id === this.siteFilter);
    return site ? site.nom : `Site ${this.siteFilter}`;
  }

  /**
   * Retourne le nom du département sélectionné
   */
  getSelectedDepartmentName(): string {
    if (!this.departmentFilter) return 'Tous';
    const dept = this.departments.find(d => d.id === this.departmentFilter);
    return dept ? dept.nom : `Département ${this.departmentFilter}`;
  }

  /**
   * Change de page
   */
  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadUsers();
    }
  }

  /**
   * Change la taille de la page
   */
  changePageSize(size: number): void {
    this.pageSize = size;
    this.currentPage = 0;
    this.loadUsers();
  }

  /**
   * Ouvre le modal de création d'utilisateur
   */
  openCreateUserModal(): void {
    this.selectedUser = null;
    this.isEditMode = false;
    this.modalTitle = 'Créer un nouvel utilisateur';
    this.openModal();
  }

  /**
   * Ouvre le modal d'édition d'utilisateur
   */
  openEditUserModal(user: UserResponseDto): void {
    this.selectedUser = user;
    this.isEditMode = true;
    this.modalTitle = `Modifier l'utilisateur ${user.nomPrenom}`;
    this.openModal();
  }

  /**
   * Ouvre la modal
   */
  private openModal(): void {
    const modalElement = this.userFormModal?.nativeElement;
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Élément modal non trouvé');
    }
  }

  /**
   * Active un utilisateur
   */
  async activateUser(user: UserResponseDto): Promise<void> {
    const result = await this.activateUserUseCase.execute(user.id);

    if (result.isFailure) {
      this.toastService.typeError(result.error.message);
      return;
    }

    this.toastService.typeSuccess(`L'utilisateur ${user.nomPrenom} a été activé avec succès.`);
    await this.loadUsers(); // Recharger la liste
  }

  /**
   * Désactive un utilisateur
   */
  async deactivateUser(user: UserResponseDto): Promise<void> {
    const result = await this.deactivateUserUseCase.execute(user.id);

    if (result.isFailure) {
      this.toastService.typeError(result.error.message);
      return;
    }

    this.toastService.typeSuccess(`L'utilisateur ${user.nomPrenom} a été désactivé avec succès.`);
    await this.loadUsers(); // Recharger la liste
  }

  /**
   * Supprime un utilisateur
   */
  async deleteUser(user: UserResponseDto): Promise<void> {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${user.nomPrenom} ?`)) {
      try {
        // TODO: Implémenter la suppression via un use case dédié
        await this.loadUsers(); // Recharger la liste
      } catch (error) {
        this.error = 'Impossible de supprimer l\'utilisateur.';
        this.toastService.typeError('Erreur lors de la suppression de l\'utilisateur.');
      }
    }
  }

  /**
   * Exporte la liste des utilisateurs
   */
  exportUsers(): void {
    // TODO: Implémenter l'exportation
    this.toastService.typeSuccess('Exporter la liste des utilisateurs');
  }

  /**
   * Importe des utilisateurs
   */
  importUsers(): void {
    // TODO: Implémenter l'importation
    this.toastService.typeSuccess('Importer des utilisateurs');
  }

  /**
   * Génère un rapport d'utilisateurs
   */
  generateReport(): void {
    // TODO: Implémenter la génération de rapport
    this.toastService.typeSuccess('Générer un rapport d\'utilisateurs');
  }

  /**
   * Ouvre les détails d'un utilisateur
   */
  viewUserDetails(user: UserResponseDto): void {
    // Navigation vers la page de détail de l'utilisateur
    this.router.navigate(['/app/manage-users/user-detail', user.id]);
  }

  /**
   * Copie l'email de l'utilisateur
   */
  copyEmail(user: UserResponseDto): void {
    navigator.clipboard.writeText(user.email)
      .then(() => {
        this.toastService.typeSuccess('Email copié dans le presse-papier');
      })
      .catch(err => {
        this.toastService.typeError('Erreur lors de la copie de l\'email');
      });
  }

  /**
   * Formate la date pour l'affichage
   */
  formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Date invalide';
      }
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Date invalide';
    }
  }

  /**
   * Retourne la classe CSS pour le statut
   */
  getStatusClass(status: string): string {
    switch (status) {
      case 'ACTIF':
        return 'badge bg-success';
      case 'INACTIF':
        return 'badge bg-danger';
      case 'EN_ATTENTE':
        return 'badge bg-warning';
      default:
        return 'badge bg-secondary';
    }
  }

  /**
   * Retourne le texte du statut
   */
  getStatusText(status: string): string {
    switch (status) {
      case 'ACTIF':
        return 'Actif';
      case 'INACTIF':
        return 'Inactif';
      case 'EN_ATTENTE':
        return 'En attente';
      default:
        return status;
    }
  }

  // Nouvelles méthodes pour le template

  /**
   * Change le tri
   */
  changeSort(sortBy: string, sortOrder: 'asc' | 'desc'): void {
    // TODO: Implémenter le changement de tri
    console.log(`Trier par ${sortBy} (${sortOrder})`);
    this.loadUsers();
  }

  /**
   * Filtre par statut
   */
  filterByStatus(status: string): void {
    this.statusFilter = status;
    this.currentPage = 0;
    this.loadUsers();
  }

  /**
   * Retourne les numéros de page pour la pagination
   */
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(0, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(0, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  /**
   * Gère la sauvegarde d'un utilisateur
   */
  onUserSaved(user: UserResponseDto): void {
    this.toastService.typeSuccess('Utilisateur sauvegardé');
    this.loadUsers();
    this.closeModal();
  }

  /**
   * Gère l'annulation du formulaire
   */
  onFormCancelled(): void {
    this.closeModal();
  }

  /**
   * Ferme la modale
   */
  private closeModal(): void {
    const modalElement = this.userFormModal?.nativeElement;
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
}