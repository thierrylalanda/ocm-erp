import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';
import { ChartComponent, ChartConfig } from '../../../../_shared/presentation/components';
import { GET_STOCK_STATS_USE_CASE, GetStockStatsUseCase } from '../../../application/use-cases/dashboard/get-stock-stats.use-case';
import { StockStatsDto } from '../../../application/dto/stock.dto';

/**
 * Composant Stock Dashboard
 * Page d'accueil du module Stock avec KPIs et graphiques
 */
@Component({
    selector: 'app-stock-dashboard',
    standalone: true,
    imports: [CommonModule, TranslatePipe, ChartComponent],
    templateUrl: './stock-dashboard.component.html',
    styleUrls: ['./stock-dashboard.component.scss']
})
export class StockDashboardComponent implements OnInit {
    /** Statistiques de stock */
    stats: StockStatsDto | null = null;

    /** Chargement en cours */
    loading = false;

    /** Configuration du graphique des mouvements */
    movementsChartConfig: ChartConfig = {
        type: 'line',
        title: 'Mouvements de Stock',
        height: 350,
        categories: [],
        colors: ['#008FFB', '#00E396']
    };

    /** Séries du graphique des mouvements */
    movementsSeries: any[] = [];

    /** Configuration du graphique de répartition */
    distributionChartConfig: ChartConfig = {
        type: 'donut',
        title: 'Répartition du Stock',
        height: 350
    };

    /** Séries du graphique de répartition */
    distributionSeries: any[] = [];

    constructor(
        @Inject(GET_STOCK_STATS_USE_CASE) private getStockStatsUseCase: GetStockStatsUseCase
    ) { }

    ngOnInit(): void {
        this.loadStats();
        this.initCharts();
    }

    /**
     * Charger les statistiques
     */
    async loadStats(): Promise<void> {
        this.loading = true;

        const result = await this.getStockStatsUseCase.execute();

        if (result.isSuccess) {
            this.stats = result.value;
        }

        this.loading = false;
    }

    /**
     * Initialiser les graphiques
     */
    private initCharts(): void {
        // Graphique des mouvements (exemple avec données fictives)
        this.movementsChartConfig.categories = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'];
        this.movementsSeries = [
            {
                name: 'Entrées',
                data: [30, 40, 35, 50, 49, 60]
            },
            {
                name: 'Sorties',
                data: [25, 35, 30, 45, 40, 55]
            }
        ];

        // Graphique de répartition (exemple)
        this.distributionSeries = [44, 55, 13, 33];
        this.distributionChartConfig.categories = ['Catégorie A', 'Catégorie B', 'Catégorie C', 'Catégorie D'];
    }

    /**
     * Formater un montant
     */
    formatCurrency(value: number): string {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'XAF'
        }).format(value);
    }
}
