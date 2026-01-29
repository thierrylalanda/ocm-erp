import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationParameterDto } from '../../../domain/dto/configuration.dto';
import { DynamicConfigFormComponent } from '../../components/dynamic-config-form/dynamic-config-form.component';
import { GetAllConfigurationsUseCase, GET_ALL_CONFIGURATIONS_USE_CASE } from '../../../application/use-cases/get-all-configurations.use-case';
import { GetAllConfigurationsUseCaseImpl } from '../../../application/use-cases/get-all-configurations.use-case';
import { APPLICATION_CONTEXT, LocalStorageContextAdapter } from '../../../../_shared';
import { ConfigurationService } from '../../../application/services/configuration.service';

@Component({
  selector: 'app-global-configuration',
  standalone: true,
  imports: [CommonModule, DynamicConfigFormComponent],
  providers: [
    {
      provide: APPLICATION_CONTEXT,
      useClass: LocalStorageContextAdapter
    },
    {
      provide: GET_ALL_CONFIGURATIONS_USE_CASE,
      useClass: GetAllConfigurationsUseCaseImpl
    },
    ConfigurationService
  ],
  templateUrl: './global-configuration.component.html',
  styleUrls: ['./global-configuration.component.scss']
})
export class GlobalConfigurationComponent implements OnInit {
  private getAllConfigsUseCase = inject(GET_ALL_CONFIGURATIONS_USE_CASE);

  categories: string[] = ['SYSTEME', 'SECURITE', 'STOCK', 'RESERVATIONS_STOCK', 'SEUILS_STOCK', 'MOUVEMENTS_STOCK', 'INVENTAIRE', 'COMPTABILITE'];
  activeTab: string = 'SYSTEME';

  // Category labels mapping
  private categoryLabels: { [key: string]: string } = {
    'SYSTEME': 'Paramètres généraux',
    'SECURITE': 'Sécurité',
    'STOCK': 'Gestion de stock',
    'RESERVATIONS_STOCK': 'Réservations de stock',
    'SEUILS_STOCK': 'Seuils de stock',
    'MOUVEMENTS_STOCK': 'Mouvements de stock',
    'INVENTAIRE': 'Inventaire',
    'COMPTABILITE': 'Comptabilité'
  };

  async ngOnInit() {
    // Set first category as active by default
    if (this.categories.length > 0) {
      this.activeTab = this.categories[0];
    }

    const result = await this.getAllConfigsUseCase.execute({ page: 0, size: 500 });

    if (result.isFailure) {
      console.error('Error loading configurations:', result.error.message);
      return;
    }

    const configs = result.value.content;
    this.categories = this.getUniqueMpCategories(configs);
    //creer un objet categoryLabels a partir de this.categories et de la description de chaque categorie dans l'objet configs
    this.categoryLabels = this.categories.reduce((acc, category) => {
      acc[category] = configs.find((c: ConfigurationParameterDto) => c.categorie === category)?.categorie || category;
      return acc;
    }, {} as { [key: string]: string });
  }

  setActiveTab(category: string) {
    this.activeTab = category;
  }

  getCategoryLabel(category: string): string {
    return this.categoryLabels[category] || category;
  }

  getUniqueMpCategories(data: ConfigurationParameterDto[]): string[] {
    const categories = data
      .map(item => item.categorie)
      .filter((cat): cat is string => !!cat); // enlève null/undefined

    return [...new Set(categories)];
  }
}
