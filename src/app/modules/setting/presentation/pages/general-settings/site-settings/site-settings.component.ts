import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { SiteService } from '../../../../application/services/site.service';
import {
  CreateSiteDto,
  SiteResponseDto,
  SiteType,
  SITE_TYPE_LABELS,
  COUNTRIES,
  generateSiteCode,
  getSiteTypeLabel,
  getCountryName
} from '../../../../domain/dto/site.dto';

@Component({
  selector: 'app-site-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.scss']
})
export class SiteSettingsComponent implements OnInit, OnDestroy {
  // Données
  sites: SiteResponseDto[] = [];
  filteredSites: SiteResponseDto[] = [];
  paginatedSites: SiteResponseDto[] = [];
  
  // Formulaire
  siteForm: FormGroup;
  
  // États
  isLoading = false;
  isSaving = false;
  showModal = false;
  isEditMode = false;
  currentSiteId?: number;
  
  // Messages
  errorMessage = '';
  successMessage = '';
  
  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  totalElements = 0;
  
  // Filtres
  searchTerm = '';
  filterType: SiteType | '' = '';
  filterStatus: 'active' | 'inactive' | '' = '';
  filterPays = '';
  
  // Options
  siteTypes: { value: SiteType; label: string }[] = [];
  countries = COUNTRIES;
  responsables: any[] = [];
  
  // Statistiques
  statistics = {
    total: 0,
    actifs: 0,
    inactifs: 0,
    parType: {} as Record<string, number>
  };
  
  // Société de l'utilisateur
  currentUserSocieteId: number | null = null;
  
  // Unsubscribe
  private destroy$ = new Subject<void>();

  // Expose global objects for template
  readonly Object = Object;
  readonly Math = Math;

  constructor(
    private fb: FormBuilder,
    private siteService: SiteService
  ) {
    this.siteForm = this.createSiteForm();
    this.initializeSiteTypes();
  }

  ngOnInit(): void {
    this.currentUserSocieteId = this.siteService.getCurrentUserSocieteId();
    
    if (this.currentUserSocieteId) {
      this.loadSites();
      this.loadStatistics();
    } else {
      this.errorMessage = 'Impossible de récupérer les informations de votre société.';
    }
    
    this.setupCodeGeneration();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Initialise les types de sites
   */
  private initializeSiteTypes(): void {
    this.siteTypes = Object.entries(SITE_TYPE_LABELS).map(([value, label]) => ({
      value: value as SiteType,
      label
    }));
  }

  /**
   * Crée le formulaire de site
   */
  private createSiteForm(): FormGroup {
    return this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      code: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{3,20}$/)]],
      description: ['', [Validators.maxLength(500)]],
      ville: ['', [Validators.required, Validators.minLength(2)]],
      pays: ['', [Validators.required]],
      type: ['SIEGE' as SiteType, [Validators.required]],
      responsableId: [null],
      getEmplacement: [null],
      superficie: [null, [Validators.min(0)]],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.pattern(/^[+]?[\d\s\-().]{8,20}$/)]],
      actif: [true]
    });
  }

  /**
   * Configure la génération automatique du code
   */
  private setupCodeGeneration(): void {
    this.siteForm.get('nom')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(nom => {
        if (nom && !this.siteForm.get('code')?.touched && !this.isEditMode) {
          const generatedCode = generateSiteCode(nom);
          this.siteForm.get('code')?.setValue(generatedCode);
        }
      });
  }

  /**
   * Charge la liste des sites
   */
  loadSites(): void {
    if (!this.currentUserSocieteId) return;
    
    this.isLoading = true;
    this.errorMessage = '';
    
    const params: any = {
      page: this.currentPage,
      size: this.pageSize,
      societeId: this.currentUserSocieteId
    };
    
    if (this.filterType) {
      params.type = this.filterType;
    }
    if (this.filterStatus === 'active') {
      params.actif = true;
    } else if (this.filterStatus === 'inactive') {
      params.actif = false;
    }
    if (this.filterPays) {
      params.pays = this.filterPays;
    }
    
    this.siteService.getSites(params).subscribe({
      next: (response) => {
        this.sites = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.applyClientSideFilters();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    });
  }

  /**
   * Charge les statistiques
   */
  loadStatistics(): void {
    if (!this.currentUserSocieteId) return;
    
    this.siteService.getSiteStatistics(this.currentUserSocieteId).subscribe({
      next: (stats) => {
        this.statistics = stats;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des statistiques:', error);
      }
    });
  }

  /**
   * Applique les filtres côté client (recherche)
   */
  applyClientSideFilters(): void {
    let filtered = [...this.sites];
    
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(site =>
        site.nom.toLowerCase().includes(term) ||
        site.code.toLowerCase().includes(term) ||
        site.ville.toLowerCase().includes(term) ||
        (site.email && site.email.toLowerCase().includes(term))
      );
    }
    
    this.filteredSites = filtered;
    this.updatePagination();
  }

  /**
   * Met à jour la pagination
   */
  updatePagination(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedSites = this.filteredSites.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.filteredSites.length / this.pageSize);
  }

  /**
   * Recherche avec debounce
   */
  onSearch(term: string): void {
    this.searchTerm = term;
    this.currentPage = 0;
    this.applyClientSideFilters();
  }

  /**
   * Applique un filtre
   */
  onFilterChange(): void {
    this.currentPage = 0;
    this.loadSites();
  }

  /**
   * Ouvre le modal de création
   */
  openCreateModal(): void {
    this.isEditMode = false;
    this.currentSiteId = undefined;
    this.siteForm.reset({
      actif: true,
      type: 'SIEGE'
    });
    this.showModal = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  /**
   * Ouvre le modal d'édition
   */
  openEditModal(site: SiteResponseDto): void {
    this.isEditMode = true;
    this.currentSiteId = site.id;
    
    this.siteForm.patchValue({
      nom: site.nom,
      code: site.code,
      description: site.description,
      ville: site.ville,
      pays: site.pays,
      type: site.type,
      responsableId: site.responsableId,
      getEmplacement: site.getEmplacement,
      superficie: site.superficie,
      email: site.email,
      telephone: site.telephone,
      actif: site.actif
    });
    
    this.showModal = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  /**
   * Ferme le modal
   */
  closeModal(): void {
    this.showModal = false;
    this.siteForm.reset();
    this.isEditMode = false;
    this.currentSiteId = undefined;
  }

  /**
   * Soumet le formulaire
   */
  onSubmit(): void {
    if (this.siteForm.invalid || !this.currentUserSocieteId) {
      this.markFormGroupTouched(this.siteForm);
      return;
    }
    
    this.isSaving = true;
    this.errorMessage = '';
    
    const formData: CreateSiteDto = {
      ...this.siteForm.value,
      societeId: this.currentUserSocieteId
    };
    
    const operation = this.isEditMode && this.currentSiteId
      ? this.siteService.updateSite(this.currentSiteId, { ...formData, id: this.currentSiteId })
      : this.siteService.createSite(formData);
    
    operation.subscribe({
      next: () => {
        this.successMessage = this.isEditMode
          ? 'Site mis à jour avec succès'
          : 'Site créé avec succès';
        this.isSaving = false;
        this.closeModal();
        this.loadSites();
        this.loadStatistics();
        
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isSaving = false;
      }
    });
  }

  /**
   * Supprime un site
   */
  deleteSite(site: SiteResponseDto): void {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer le site "${site.nom}" ?`)) {
      return;
    }
    
    this.siteService.deleteSite(site.id).subscribe({
      next: () => {
        this.successMessage = 'Site supprimé avec succès';
        this.loadSites();
        this.loadStatistics();
        
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  /**
   * Change le statut d'un site
   */
  toggleSiteStatus(site: SiteResponseDto): void {
    const newStatus = !site.actif;
    
    this.siteService.toggleSiteStatus(site.id, newStatus).subscribe({
      next: () => {
        site.actif = newStatus;
        this.successMessage = `Site ${newStatus ? 'activé' : 'désactivé'} avec succès`;
        this.loadStatistics();
        
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  /**
   * Pagination
   */
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadSites();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadSites();
    }
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadSites();
    }
  }

  /**
   * Helpers de validation
   */
  hasError(controlName: string, errorName: string): boolean {
    const control = this.siteForm.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }

  isFieldInvalid(controlName: string): boolean {
    const control = this.siteForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  /**
   * Helpers de formatage
   */
  getSiteTypeLabel(type: SiteType): string {
    return getSiteTypeLabel(type);
  }

  getCountryName(code: string): string {
    return getCountryName(code);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  /**
   * Calcule les pages pour la pagination
   */
  get paginationPages(): number[] {
    const maxPages = 5;
    const pages: number[] = [];
    
    let startPage = Math.max(0, this.currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxPages - 1);
    
    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(0, endPage - maxPages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }
}
