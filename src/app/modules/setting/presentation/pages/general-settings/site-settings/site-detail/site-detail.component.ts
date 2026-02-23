import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SiteInfoComponent } from './site-info/site-info.component';
import { SiteCurrenciesComponent } from './site-currencies/site-currencies.component';
import { SiteService } from '../../../../../application/services/site.service';
import { SiteResponseDto } from '../../../../../domain/dto/site.dto';
import { routes } from '../../../../../../../core/helpers/routes/routes';

import { SettingModule } from '../../../../../setting.module';

@Component({
    selector: 'app-site-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        SiteInfoComponent,
        SiteCurrenciesComponent,
        SettingModule
    ],
    templateUrl: './site-detail.component.html',
    styles: [`
    .nav-tabs .nav-link {
      cursor: pointer;
      color: #6c757d;
      border: none;
      border-bottom: 2px solid transparent;
      padding: 1rem 1.5rem;
      font-weight: 500;
    }
    .nav-tabs .nav-link:hover {
      color: #0d6efd;
      border-color: transparent;
    }
    .nav-tabs .nav-link.active {
      color: #0d6efd;
      background: transparent;
      border-bottom: 2px solid #0d6efd;
    }
    .tab-content {
      padding-top: 20px;
    }
  `]
})
export class SiteDetailComponent implements OnInit {
    activeTab: 'info' | 'currencies' = 'info';
    siteId: number | null = null;
    site: SiteResponseDto | null = null;
    isLoading = false;
    errorMessage = '';
    routes = routes;

    constructor(
        private route: ActivatedRoute,
        private siteService: SiteService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.siteId = +id;
                this.loadSiteDetails(this.siteId);
            }
        });
    }

    loadSiteDetails(id: number): void {
        this.isLoading = true;
        this.siteService.getSite(id).subscribe({
            next: (site: SiteResponseDto) => {
                this.site = site;
                this.isLoading = false;
            },
            error: (error: any) => {
                console.error('Error loading site details:', error);
                this.errorMessage = 'Erreur lors du chargement des détails du site.';
                this.isLoading = false;
            }
        });
    }

    setActiveTab(tab: 'info' | 'currencies'): void {
        this.activeTab = tab;
    }
}
