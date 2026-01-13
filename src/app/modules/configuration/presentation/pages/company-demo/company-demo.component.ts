import { Component } from '@angular/core';
import { CreateCompanyResponseDto } from '../../../application/dto/create-company.dto';
import { CompanyFormComponent } from '../../components/company-form/company-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMPANY_REPOSITORY } from '../../../domain/repositories/company.repository.token';
import { InMemoryCompanyRepository } from '../../../infrastructure/repositories/in-memory-company.repository';
import { CREATE_COMPANY_USE_CASE } from '../../../application/use-cases/create-company.use-case.token';
import { CreateCompanyUseCaseImpl } from '../../../application/use-cases/create-company.use-case';

@Component({
  selector: 'app-company-demo',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
],
  providers: [
    {
      provide: COMPANY_REPOSITORY,
      useClass: InMemoryCompanyRepository,
    },
    {
      provide: CREATE_COMPANY_USE_CASE,
      useClass: CreateCompanyUseCaseImpl,
    },
    CreateCompanyUseCaseImpl,
  ],
  template: `
    <div class="company-demo">
      <header class="demo-header">
        <h1>Démonstration - Gestion des Sociétés</h1>
        <p>Module de configuration ERP OCM - Architecture Clean Architecture</p>
      </header>

      <div class="demo-content">
        <div class="demo-section">
          <h2>Créer une nouvelle société</h2>
          <p class="section-description">
            Utilisez le formulaire ci-dessous pour créer une nouvelle société. 
            Tous les champs marqués d'un astérisque (*) sont obligatoires.
          </p>
         
        </div>

        <div class="demo-section" *ngIf="createdCompanies.length > 0">
          <h2>Sociétés créées</h2>
          <div class="companies-list">
            <div *ngFor="let company of createdCompanies" class="company-card">
              <div class="company-header">
                <h3>{{ company.nom }}</h3>
                <span class="company-status" [class.active]="company.actif">
                  {{ company.actif ? 'Active' : 'Inactive' }}
                </span>
              </div>
              
              <div class="company-details">
                <div class="detail-row">
                  <span class="detail-label">ID:</span>
                  <span class="detail-value">{{ company.id }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Activité:</span>
                  <span class="detail-value">{{ company.activite }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span> 
                  <span class="detail-value">{{ company.email }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">NC:</span>
                  <span class="detail-value">{{ company.nc }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">RCCM:</span>
                  <span class="detail-value">{{ company.rccm }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Créée le:</span>
                  <span class="detail-value">{{ formatDate(company.createdAt) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-section">
          <h2>Architecture du module</h2>
          <div class="architecture-info">
            <div class="architecture-layer">
              <h3>Domain (Métier)</h3>
              <ul>
                <li>Entités métier (TenantEntity)</li>
                <li>Interfaces de repositories</li>
                <li>Règles métier</li>
              </ul>
            </div>
            
            <div class="architecture-layer">
              <h3>Application (Use Cases)</h3>
              <ul>
                <li>CreateCompanyUseCase</li>
                <li>DTOs de transfert</li>
                <li>Validation métier</li>
              </ul>
            </div>
            
            <div class="architecture-layer">
              <h3>Infrastructure</h3>
              <ul>
                <li>Repository in-memory</li>
                <li>Mappers entité↔DTO</li>
                <li>Services externes</li>
              </ul>
            </div>
            
            <div class="architecture-layer">
              <h3>Presentation (UI)</h3>
              <ul>
                <li>CompanyFormComponent</li>
                <li>Pages de démonstration</li>
                <li>Gestion d'état</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer class="demo-footer">
        <p>Module de Configuration - ERP OCM © 2024</p>
        <p>Architecture Clean Architecture - Angular 17+</p>
      </footer>
    </div>
  `,
  styles: [`
    .company-demo {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .demo-header {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      backdrop-filter: blur(10px);
    }

    .demo-header h1 {
      margin: 0 0 10px 0;
      font-size: 2.5rem;
      font-weight: 700;
    }

    .demo-header p {
      margin: 0;
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .demo-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .demo-section {
      background: white;
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 30px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .demo-section h2 {
      color: #333;
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 1.8rem;
      border-bottom: 2px solid #667eea;
      padding-bottom: 10px;
    }

    .section-description {
      color: #666;
      margin-bottom: 25px;
      font-size: 1rem;
      line-height: 1.6;
    }

    .companies-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .company-card {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      border: 1px solid #e9ecef;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .company-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .company-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .company-header h3 {
      margin: 0;
      color: #333;
      font-size: 1.2rem;
    }

    .company-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .company-status.active {
      background: #d4edda;
      color: #155724;
    }

    .company-status:not(.active) {
      background: #f8d7da;
      color: #721c24;
    }

    .company-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .detail-label {
      font-weight: 600;
      color: #555;
      font-size: 0.9rem;
    }

    .detail-value {
      color: #333;
      font-size: 0.9rem;
      text-align: right;
      max-width: 60%;
      word-break: break-word;
    }

    .architecture-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .architecture-layer {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      border-left: 4px solid #667eea;
    }

    .architecture-layer h3 {
      margin-top: 0;
      color: #333;
      font-size: 1.1rem;
    }

    .architecture-layer ul {
      margin: 0;
      padding-left: 20px;
    }

    .architecture-layer li {
      margin-bottom: 8px;
      color: #555;
      font-size: 0.9rem;
    }

    .demo-footer {
      text-align: center;
      color: white;
      margin-top: 40px;
      padding: 20px;
      opacity: 0.8;
      font-size: 0.9rem;
    }

    .demo-footer p {
      margin: 5px 0;
    }

    @media (max-width: 768px) {
      .demo-header h1 {
        font-size: 2rem;
      }

      .demo-section {
        padding: 20px;
      }

      .companies-list {
        grid-template-columns: 1fr;
      }

      .architecture-info {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CompanyDemoComponent {
  createdCompanies: CreateCompanyResponseDto[] = [];

  onCompanyCreated(company: CreateCompanyResponseDto): void {
    this.createdCompanies.unshift(company); // Ajouter au début de la liste
    console.log('Société créée:', company);
  }

  onCancel(): void {
    console.log('Création annulée');
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
