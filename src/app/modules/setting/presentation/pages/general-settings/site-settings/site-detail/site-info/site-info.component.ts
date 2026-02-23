import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteResponseDto, getSiteTypeLabel, getCountryName } from '../../../../../../domain/dto/site.dto';

@Component({
  selector: 'app-site-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row" *ngIf="site">
      <!-- General Information -->
      <div class="col-md-6 mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-sm bg-primary-light me-3">
                <i class="isax isax-building-3 text-primary fs-4"></i>
              </div>
              <h6 class="mb-0 fw-bold">Informations Générales</h6>
            </div>
          </div>
          <div class="card-body pt-3">
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="text-muted fs-12 mb-1 d-block">Nom du site</label>
                <div class="fw-bold text-dark">{{ site.nom }}</div>
              </div>
              <div class="col-sm-6">
                <label class="text-muted fs-12 mb-1 d-block">Code</label>
                <div class="d-flex align-items-center">
                  <span class="badge bg-light text-dark border">{{ site.code }}</span>
                </div>
              </div>
              <div class="col-sm-6">
                <label class="text-muted fs-12 mb-1 d-block">Type</label>
                <div class="d-flex align-items-center">
                  <i class="isax isax-category-2 text-muted me-2 fs-6"></i>
                  <span>{{ getSiteTypeLabel(site.type) }}</span>
                </div>
              </div>
              <div class="col-sm-6">
                <label class="text-muted fs-12 mb-1 d-block">Statut</label>
                <div>
                  <span class="badge" [ngClass]="site.actif ? 'bg-success-light text-success' : 'bg-danger-light text-danger'">
                    <i class="fas fa-circle fs-10 me-1"></i> {{ site.actif ? 'Actif' : 'Inactif' }}
                  </span>
                </div>
              </div>
              <div class="col-12">
                <label class="text-muted fs-12 mb-1 d-block">Date de création</label>
                <div class="d-flex align-items-center">
                  <i class="isax isax-calendar-1 text-muted me-2 fs-6"></i>
                  <span>{{ site.dateCreation | date:'dd MMM yyyy' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact & Location -->
      <div class="col-md-6 mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-sm bg-info-light me-3">
                <i class="isax isax-location text-info fs-4"></i>
              </div>
              <h6 class="mb-0 fw-bold">Coordonnées & Localisation</h6>
            </div>
          </div>
          <div class="card-body pt-3">
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="text-muted fs-12 mb-1 d-block">Ville</label>
                <div class="d-flex align-items-center">
                  <i class="isax isax-map text-muted me-2 fs-6"></i>
                  <span>{{ site.ville }}</span>
                </div>
              </div>
              <div class="col-sm-6">
                <label class="text-muted fs-12 mb-1 d-block">Pays</label>
                <div class="d-flex align-items-center">
                  <i class="isax isax-global text-muted me-2 fs-6"></i>
                  <span>{{ getCountryName(site.pays) }}</span>
                </div>
              </div>
              <div class="col-sm-6">
                <label class="text-muted fs-12 mb-1 d-block">Responsable</label>
                <div class="d-flex align-items-center">
                  <i class="isax isax-user text-muted me-2 fs-6"></i>
                  <span>{{ site.responsableNom || '-' }}</span>
                </div>
              </div>
              <div class="col-sm-6">
                <label class="text-muted fs-12 mb-1 d-block">Superficie</label>
                <div class="d-flex align-items-center">
                  <i class="isax isax-ruler text-muted me-2 fs-6"></i>
                  <span>{{ site.superficie ? site.superficie + ' m²' : '-' }}</span>
                </div>
              </div>
              <div class="col-12">
                <div class="p-3 bg-light rounded mt-2">
                  <div class="d-flex align-items-center mb-2">
                    <i class="isax isax-sms text-muted me-2"></i>
                    <span class="text-dark">{{ site.email || 'Aucun email' }}</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="isax isax-call text-muted me-2"></i>
                    <span class="text-dark">{{ site.telephone || 'Aucun téléphone' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Description & Additional Info -->
      <div class="col-12" *ngIf="site.description || site.getEmplacement">
        <div class="card border-0 shadow-sm">
           <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-sm bg-warning-light me-3">
                <i class="isax isax-document-text text-warning fs-4"></i>
              </div>
              <h6 class="mb-0 fw-bold">Détails Supplémentaires</h6>
            </div>
          </div>
          <div class="card-body pt-3">
             <div class="row g-4">
                <div class="col-md-8" *ngIf="site.description">
                   <label class="text-muted fs-12 mb-2 d-block">Description</label>
                   <p class="mb-0 text-secondary bg-light p-3 rounded">{{ site.description }}</p>
                </div>
                <div class="col-md-4" *ngIf="site.getEmplacement">
                   <label class="text-muted fs-12 mb-2 d-block">Emplacement Géographique</label>
                   <div class="d-flex align-items-center p-3 border rounded">
                      <i class="isax isax-gps text-danger me-3 fs-3"></i>
                      <div>
                        <div class="fs-12 text-muted">ID Emplacement</div>
                        <div class="fw-bold fs-5">{{ site.getEmplacement }}</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SiteInfoComponent {
  @Input() site: SiteResponseDto | null = null;

  getSiteTypeLabel = getSiteTypeLabel;
  getCountryName = getCountryName;
}
