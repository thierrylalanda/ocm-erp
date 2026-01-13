import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import des use cases
import { GetUsersUseCase } from '../../../application/use-cases/get-users.use-case';
import { CreateUserUseCase } from '../../../application/use-cases/create-user.use-case';
import { CREATE_USER_USE_CASE } from '../../../application/use-cases/create-user.use-case.token';
import { GET_USERS_USE_CASE } from '../../../application/use-cases/get-users.use-case.token';

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
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // Use cases injectés
  private getUsersUseCase = inject(GET_USERS_USE_CASE);
  private createUserUseCase = inject(CREATE_USER_USE_CASE);

  // Services injectés
  private siteService = inject(SiteService);
  private departementService = inject(DepartementService);
  private authService = inject(AuthService);

  // Référence à la modale
  @ViewChild('userFormModal') userFormModal!: ElementRef;

  // Données
  users: UserResponseDto[] = [];
  loading = false;
  error: string | null = null;

  // Gestion de la modal
  selectedUser: UserResponseDto | null = null;
  isEditMode = false;
  modalTitle =  'Créer un nouvel utilisateur';

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

  constructor() {}

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
    try {
      // TODO: Implémenter l'activation via un use case dédié
      console.log('Activer utilisateur:', user);
      await this.loadUsers(); // Recharger la liste
    } catch (error) {
      console.error('Erreur lors de l\'activation:', error);
      this.error = 'Impossible d\'activer l\'utilisateur.';
    }
  }

  /**
   * Désactive un utilisateur
   */
  async deactivateUser(user: UserResponseDto): Promise<void> {
    try {
      // TODO: Implémenter la désactivation via un use case dédié
      console.log('Désactiver utilisateur:', user);
      await this.loadUsers(); // Recharger la liste
    } catch (error) {
      console.error('Erreur lors de la désactivation:', error);
      this.error = 'Impossible de désactiver l\'utilisateur.';
    }
  }

  /**
   * Supprime un utilisateur
   */
  async deleteUser(user: UserResponseDto): Promise<void> {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${user.nomPrenom} ?`)) {
      try {
        // TODO: Implémenter la suppression via un use case dédié
        console.log('Supprimer utilisateur:', user);
        await this.loadUsers(); // Recharger la liste
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        this.error = 'Impossible de supprimer l\'utilisateur.';
      }
    }
  }

  /**
   * Exporte la liste des utilisateurs
   */
  exportUsers(): void {
    // TODO: Implémenter l'exportation
    console.log('Exporter la liste des utilisateurs');
    alert('Fonctionnalité d\'exportation à implémenter');
  }

  /**
   * Importe des utilisateurs
   */
  importUsers(): void {
    // TODO: Implémenter l'importation
    console.log('Importer des utilisateurs');
    alert('Fonctionnalité d\'importation à implémenter');
  }

  /**
   * Génère un rapport d'utilisateurs
   */
  generateReport(): void {
    // TODO: Implémenter la génération de rapport
    console.log('Générer un rapport d\'utilisateurs');
    alert('Fonctionnalité de rapport à implémenter');
  }

  /**
   * Ouvre les détails d'un utilisateur
   */
  viewUserDetails(user: UserResponseDto): void {
    // TODO: Implémenter la navigation vers les détails
    console.log('Voir les détails de:', user);
    alert(`Détails de l'utilisateur: ${user.nomPrenom}\nEmail: ${user.email}\nStatut: ${user.statut}`);
  }

  /**
   * Copie l'email de l'utilisateur
   */
  copyEmail(user: UserResponseDto): void {
    navigator.clipboard.writeText(user.email)
      .then(() => {
        console.log('Email copié:', user.email);
        // TODO: Afficher un message de succès
        alert('Email copié dans le presse-papier');
      })
      .catch(err => {
        console.error('Erreur lors de la copie:', err);
        alert('Erreur lors de la copie de l\'email');
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
    console.log('Utilisateur sauvegardé:', user);
    this.loadUsers();
    this.closeModal();
  }

  /**
   * Gère l'annulation du formulaire
   */
  onFormCancelled(): void {
    console.log('Formulaire annulé');
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
