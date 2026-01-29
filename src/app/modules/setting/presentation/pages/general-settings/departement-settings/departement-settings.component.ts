import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartementService } from '../../../../application/services/departement.service';
import {
  CreateDepartementDto,
  UpdateDepartementDto,
  DepartementResponseDto,
  PagedDepartementResponse,
  DepartementStatistics,
  formatDate,
  truncateText,
  getStatusBadge
} from '../../../../domain/dto/departement.dto';
import { TranslatePipe } from '../../../../../../core/services/translation/translate.pipe';
import { GlobalConfigurationComponent } from '../../global-configuration/global-configuration.component';

@Component({
  selector: 'app-departement-settings',
  templateUrl: './departement-settings.component.html',
  styleUrls: ['./departement-settings.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TranslatePipe],
  standalone: true,

})
export class DepartementSettingsComponent implements OnInit {
  // États
  isLoading = false;
  isSaving = false;
  isEditMode = false;
  showModal = false;

  // Données
  departements: DepartementResponseDto[] = [];
  paginatedDepartements: DepartementResponseDto[] = [];
  selectedDepartement: DepartementResponseDto | null = null;
  societes: any[] = [];

  // Filtres
  searchTerm = '';
  filterSocieteId?: number;
  filterStatus?: boolean;

  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  totalPages = 0;

  // Statistiques
  statistics: DepartementStatistics = {
    total: 0,
    actifs: 0,
    inactifs: 0
  };

  // Messages
  successMessage = '';
  errorMessage = '';

  // Formulaire
  departementForm: FormGroup;

  constructor(
    private departementService: DepartementService,
    private fb: FormBuilder
  ) {
    this.departementForm = this.createForm();
  }

  ngOnInit(): void {
    this.loadData();
    this.loadSocietes();
  }

  // Initialisation du formulaire
  private createForm(): FormGroup {
    return this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      societeId: [this.departementService.getCurrentUserSocieteId(), []],
      actif: [true]
    });
  }

  // Chargement des données
  loadData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    // Charger les statistiques
    this.departementService.getDepartementStatistics(this.filterSocieteId).subscribe({
      next: (stats) => {
        this.statistics = stats;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des statistiques:', error);
      }
    });

    // Charger la liste paginée
    this.departementService.getDepartements(
      this.filterSocieteId,
      this.currentPage,
      this.pageSize,
      this.searchTerm,
      this.filterStatus
    ).subscribe({
      next: (response: PagedDepartementResponse) => {
        this.departements = response.content;
        this.paginatedDepartements = response.content;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors du chargement des départements. Veuillez réessayer.';
        this.isLoading = false;
        console.error('Erreur:', error);
      }
    });
  }

  // Charger la liste des sociétés
  loadSocietes(): void {
    this.departementService.getSocietes().subscribe({
      next: (societes) => {
        this.societes = societes;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des sociétés:', error);
      }
    });
  }

  // Gestion des filtres
  onSearch(term: string): void {
    this.searchTerm = term;
    this.currentPage = 0;
    this.loadData();
  }

  onFilterChange(): void {
    this.currentPage = 0;
    this.loadData();
  }

  // Gestion de la pagination
  get paginationPages(): number[] {
    const pages: number[] = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(0, this.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(0, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadData();
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadData();
    }
  }

  // Gestion des modals
  openCreateModal(): void {
    this.isEditMode = false;
    this.selectedDepartement = null;
    this.departementForm.reset({
      nom: '',
      description: '',
      societeId: null,
      actif: true
    });
    this.showModal = true;
    this.errorMessage = '';
  }

  openEditModal(departement: DepartementResponseDto): void {
    this.isEditMode = true;
    this.selectedDepartement = departement;
    this.departementForm.patchValue({
      nom: departement.nom,
      description: departement.description || '',
      societeId: departement.societeId,
      actif: departement.actif
    });
    this.showModal = true;
    this.errorMessage = '';
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedDepartement = null;
    this.departementForm.reset();
  }

  // Soumission du formulaire
  onSubmit(): void {
    if (this.departementForm.invalid) {
      this.markFormGroupTouched(this.departementForm);
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';

    const formValue = this.departementForm.value;
    formValue.societeId = this.departementService.getCurrentUserSocieteId();
    if (this.isEditMode && this.selectedDepartement) {
      // Mise à jour
      const updateDto: UpdateDepartementDto = {
        id: this.selectedDepartement.id,
        ...formValue
      };

      this.departementService.updateDepartement(this.selectedDepartement.id, updateDto).subscribe({
        next: (response) => {
          this.successMessage = 'Département mis à jour avec succès.';
          this.closeModal();
          this.loadData();
          this.isSaving = false;
        },
        error: (error) => {
          this.errorMessage = error.message || 'Erreur lors de la mise à jour du département.';
          this.isSaving = false;
        }
      });
    } else {
      // Création
      const createDto: CreateDepartementDto = formValue;
      console.log(createDto);
      this.departementService.createDepartement(createDto).subscribe({
        next: (response) => {
          this.successMessage = 'Département créé avec succès.';
          this.closeModal();
          this.loadData();
          this.isSaving = false;
        },
        error: (error) => {
          this.errorMessage = error.message || 'Erreur lors de la création du département.';
          this.isSaving = false;
        }
      });
    }
  }

  // Suppression d'un département
  deleteDepartement(departement: DepartementResponseDto): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le département "${departement.nom}" ?`)) {
      this.departementService.deleteDepartement(departement.id).subscribe({
        next: () => {
          this.successMessage = 'Département supprimé avec succès.';
          this.loadData();
        },
        error: (error) => {
          this.errorMessage = error.message || 'Erreur lors de la suppression du département.';
        }
      });
    }
  }

  // Activation/désactivation
  toggleDepartementStatus(departement: DepartementResponseDto): void {
    const newStatus = !departement.actif;

    this.departementService.toggleDepartementStatus(departement.id, newStatus).subscribe({
      next: (response) => {
        this.successMessage = `Département ${newStatus ? 'activé' : 'désactivé'} avec succès.`;
        departement.actif = newStatus;
      },
      error: (error) => {
        this.errorMessage = error.message || 'Erreur lors du changement de statut.';
        // Revert the toggle
        departement.actif = !newStatus;
      }
    });
  }

  // Utilitaires pour le template
  formatDate(dateString: string): string {
    return formatDate(dateString);
  }

  truncateText(text: string, maxLength: number = 50): string {
    return truncateText(text, maxLength);
  }

  getStatusBadge(actif: boolean): { label: string, class: string } {
    return getStatusBadge(actif);
  }

  getSocieteName(societeId: number): string {
    const societe = this.societes.find(s => s.id === societeId);
    return societe ? societe.nom : `ID: ${societeId}`;
  }

  // Validation du formulaire
  isFieldInvalid(fieldName: string): boolean {
    const field = this.departementForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  hasError(fieldName: string, errorType: string): boolean {
    const field = this.departementForm.get(fieldName);
    return field ? field.hasError(errorType) : false;
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Méthodes utilitaires pour le template
  Math = Math;
}
