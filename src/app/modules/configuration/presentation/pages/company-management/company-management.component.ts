import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyFormComponent } from '../../components/company-form/company-form.component';
import { CreateCompanyResponseDto } from '../../../application/dto/create-company.dto';
import { COMPANY_REPOSITORY } from '../../../domain/repositories/company.repository.token';
import { CREATE_COMPANY_USE_CASE } from '../../../application/use-cases/create-company.use-case.token';
import { HttpCompanyRepository } from '../../../infrastructure/repositories/http-company.repository';
import { CreateCompanyUseCaseImpl } from '../../../application/use-cases/create-company.use-case';

@Component({
  selector: 'app-company-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, CompanyFormComponent],
  providers: [
    {
      provide: COMPANY_REPOSITORY,
      useClass: HttpCompanyRepository,
    },
    {
      provide: CREATE_COMPANY_USE_CASE,
      useClass: CreateCompanyUseCaseImpl,
    },
    CreateCompanyUseCaseImpl,
    HttpCompanyRepository,
  ],
  templateUrl:'./company-management.component.html',
  styleUrl:'./company-management.component.scss',
})
export class CompanyManagementComponent implements OnInit {
  companies: CreateCompanyResponseDto[] = [];
  filteredCompanies: CreateCompanyResponseDto[] = [];
  showForm = false;
  searchTerm = '';
  filterStatus = '';
  currentPage = 1;
  pageSize = 10;
  isLoading = false;

  constructor(private companyRepository: HttpCompanyRepository) {}

  ngOnInit(): void {
    // Charger les sociétés existantes depuis l'API
    this.loadCompanies();
  }

  async loadCompanies(): Promise<void> {
    this.isLoading = true;
    try {
      const tenants = await this.companyRepository.findAll();
      console.log(tenants);
      // Convertir les tenants en DTO pour l'affichage
      this.companies = tenants.map(tenant => ({
        id: tenant.id||1,
        nom: tenant.nom,
        activite: tenant.activite || '',
        adresse: tenant.address || '',
        boitePostal: tenant.postalBox || '',
        pays: tenant.pays || '',
        region: tenant.region || '',
        telephone: tenant.phoneNumber || '',
        nc: tenant.taxNumber || '',
        rccm: tenant.tradeRegister || '',
        regimeFiscal: tenant.fiscalRegime || '',
        devise: tenant.currency || 'XAF',
        email: tenant.email,
        siteWeb: tenant.website || '',
        logo: tenant.logoUrl || '',
        favicon: tenant.faviconUrl || '',
        actif: tenant.isActive,
        createdAt: tenant.createdAt !=null ? tenant.createdAt.toISOString(): '',
        updatedAt: tenant.updatedAt !=null ? tenant.updatedAt.toISOString():''
      }));
      this.filterCompanies();
    } catch (error) {
      console.error('Erreur lors du chargement des sociétés:', error);
      // En cas d'erreur, utiliser des données de test
      this.loadTestData();
    } finally {
      this.isLoading = false;
    }
  }

  loadTestData(): void {
    this.companies = [
      {
        id: 1,
        nom: 'OCM SARL',
        activite: 'Développement logiciel',
        adresse: '123 Rue du Commerce',
        boitePostal: 'BP 1234',
        pays: 'Cameroun',
        region: 'Centre',
        telephone: '+237 6 12 34 56 78',
        nc: 'NC123456789',
        rccm: 'RCCM123456789',
        regimeFiscal: 'Régime réel simplifié',
        devise: 'XAF',
        email: 'contact@ocm.cm',
        siteWeb: 'https://ocm.cm',
        logo: '',
        favicon: '',
        actif: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 2,
        nom: 'Tech Solutions SA',
        activite: 'Consulting IT',
        adresse: '456 Avenue des Technologies',
        boitePostal: 'BP 5678',
        pays: 'France',
        region: 'Île-de-France',
        telephone: '+33 1 23 45 67 89',
        nc: 'NC987654321',
        rccm: 'RCCM987654321',
        regimeFiscal: 'Régime réel normal',
        devise: 'EUR',
        email: 'contact@techsolutions.fr',
        siteWeb: 'https://techsolutions.fr',
        logo: '',
        favicon: '',
        actif: true,
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 86400000).toISOString()
      }
    ];
    this.filterCompanies();
  }

  get activeCompanies(): number {
    return this.companies.filter(c => c.actif).length;
  }

  get todayCompanies(): number {
    const today = new Date().toDateString();
    return this.companies.filter(c => new Date(c.createdAt).toDateString() === today).length;
  }

  get uniqueCountries(): number {
    const countries = new Set(this.companies.map(c => c.pays).filter(Boolean));
    return countries.size;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCompanies.length / this.pageSize);
  }

  onCompanyCreated(company: CreateCompanyResponseDto): void {
    this.companies.unshift(company);
    this.filterCompanies();
    this.showForm = false;
  }

  onCancel(): void {
    this.showForm = false;
  }

  filterCompanies(): void {
    let filtered = this.companies;

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(c => 
        c.nom.toLowerCase().includes(term) ||
        c.activite.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        c.nc.toLowerCase().includes(term) ||
        c.rccm.toLowerCase().includes(term)
      );
    }

    if (this.filterStatus === 'active') {
      filtered = filtered.filter(c => c.actif);
    } else if (this.filterStatus === 'inactive') {
      filtered = filtered.filter(c => !c.actif);
    }

    this.filteredCompanies = filtered;
    this.currentPage = 1;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

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
}
