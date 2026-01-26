import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from '../../../application/services/configuration.service';
import { ConfigurationParameter } from '../../../domain/entities/configuration-parameter';
import { DynamicConfigFormComponent } from '../../components/dynamic-config-form/dynamic-config-form.component';

@Component({
  selector: 'app-global-configuration',
  standalone: true,
  imports: [CommonModule, DynamicConfigFormComponent],
  templateUrl: './global-configuration.component.html',
  styleUrls: ['./global-configuration.component.scss']
})
export class GlobalConfigurationComponent implements OnInit {
  private configService = inject(ConfigurationService);

  categories: string[] = ['SYSTEME', 'SECURITE', 'STOCK', 'SEUILS_STOCK', 'COMPTABILITE'];
  activeTab: string = 'SYSTEME';

  // Category labels mapping
  private categoryLabels: { [key: string]: string } = {
    'SYSTEME': 'Paramètres généraux',
    'SECURITE': 'Sécurité',
    'STOCK': 'Gestion de stock',
    'SEUILS_STOCK': 'Seuils de stock',
    'COMPTABILITE': 'Comptabilité'
  };

  ngOnInit() {
    // Set first category as active by default
    if (this.categories.length > 0) {
      this.activeTab = this.categories[0];
    }
  }

  setActiveTab(category: string) {
    this.activeTab = category;
  }

  getCategoryLabel(category: string): string {
    return this.categoryLabels[category] || category;
  }
}
