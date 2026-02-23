import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../../core/services/translation';
import { ChartComponent, ChartConfig } from '../../../../_shared/presentation/components';
import { GET_STOCK_STATS_USE_CASE, GetStockStatsUseCase } from '../../../application/use-cases/dashboard/get-stock-stats.use-case';
import { StockStatsDto } from '../../../application/dto/stock.dto';
import { GridsterComponent, GridsterItemComponent, GridsterConfig, GridsterItem } from 'angular-gridster2';

/**
 * Interface pour un widget du dashboard
 */
export interface DashboardWidget extends GridsterItem {
    id: string;
    type: 'kpi' | 'chart' | 'table';
    name: string;
    title: string;
    icon?: string;
    colorClass?: string;
    bgClass?: string;
    // cols & rows sont hérités de GridsterItem
    visible: boolean;
    data?: any;
    filters?: {
        startDate?: string;
        endDate?: string;
        period?: 'day' | 'week' | 'month' | 'year';
    };
}

/**
 * Composant Stock Dashboard
 * Page d'accueil du module Stock avec KPIs et graphiques
 */
@Component({
    selector: 'app-stock-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        ChartComponent,
        GridsterComponent,
        GridsterItemComponent
    ],
    templateUrl: './stock-dashboard.component.html',
    styleUrls: ['./stock-dashboard.component.scss']
})
export class StockDashboardComponent implements OnInit {
    /** Mode édition */
    isEditing = false;

    /** Configuration Gridster */
    options: GridsterConfig = {};

    /** Liste des widgets personnalisables (Source de vérité) */
    widgets: DashboardWidget[] = [];

    /** Widgets affichés dans la grille (Subset visible) */
    gridWidgets: DashboardWidget[] = [];

    /** Vérifie s'il y a des widgets cachés à afficher */
    get hasHiddenWidgets(): boolean {
        return this.widgets.some(w => !w.visible);
    }

    /** Statistiques de stock */
    stats: StockStatsDto | null = null;

    /** Liste des sites pour le multi-site */
    sites: any[] = [];

    /** Site sélectionné */
    selectedSiteId: string = 'all';

    /** Liste des articles pour le filtre */
    articles: any[] = [];

    /** Article sélectionné */
    selectedArticleId: string = 'all';

    /** Chargement en cours */
    loading = false;

    /** Données résumées pour les tableaux (Jour/Mois/Année) */
    summaryEntries: any[] = [
        { period: 'Entrées du jour', quantity: 12 },
        { period: 'Entrées du Mois', quantity: 145 },
        { period: 'Entrées annuelle', quantity: 1450 }
    ];

    summaryExits: any[] = [
        { period: 'Sorties du jour', quantity: 8 },
        { period: 'Sorties du Mois', quantity: 98 },
        { period: 'Sorties annuelle', quantity: 1120 }
    ];

    /** Configuration du graphique des mouvements */
    movementsChartConfig: any = {
        type: 'line',
        title: 'Mouvements de Stock',
        height: '100%', // Adaptatif
        categories: [],
        colors: ['#546DFE', '#2dce89']
    };

    /** Séries du graphique des mouvements */
    movementsSeries: any[] = [];

    /** Configuration du graphique de répartition */
    distributionChartConfig: any = {
        type: 'donut',
        title: 'Répartition du Stock',
        height: '100%', // Adaptatif
        colors: ['#546DFE', '#2dce89', '#fb6340', '#11cdef']
    };

    /** Séries du graphique de répartition */
    distributionSeries: any[] = [];

    /** Configuration du graphique de valeur par entrepôt */
    warehouseValueChartConfig: any = {
        type: 'bar',
        title: 'Valeur du Stock par Entrepôt',
        height: '100%',
        categories: [],
        colors: ['#546DFE']
    };

    /** Séries du graphique de valeur par entrepôt */
    warehouseValueSeries: any[] = [];

    /** Configuration du graphique Top 10 Sorties */
    topProductsChartConfig: any = {
        type: 'bar', // Horizontal bar 
        title: 'Top 10 des Sorties',
        height: '100%',
        categories: [],
        colors: ['#f5365c'], // Red/Pink for exits
        horizontal: true
    };

    /** Séries du graphique Top 10 */
    topProductsSeries: any[] = [];

    /** Données simulées pour les tableaux */
    recentEntries: any[] = [
        { date: '17/02/2026', reference: 'REF-001', product: 'Chaise de Bureau Ergonomique', quantity: 50, user: 'Admin' },
        { date: '16/02/2026', reference: 'REF-042', product: 'Écran 27" 4K', quantity: 20, user: 'Paul M.' },
        { date: '16/02/2026', reference: 'REF-103', product: 'Clavier Mécanique', quantity: 15, user: 'Sarah L.' },
        { date: '15/02/2026', reference: 'REF-099', product: 'Souris Sans Fil', quantity: 30, user: 'Admin' },
        { date: '14/02/2026', reference: 'REF-005', product: 'Bureau Assis-Debout', quantity: 5, user: 'Paul M.' }
    ];

    recentExits: any[] = [
        { date: '17/02/2026', reference: 'REF-001', product: 'Chaise de Bureau Ergonomique', quantity: 2, user: 'Client A' },
        { date: '17/02/2026', reference: 'REF-042', product: 'Écran 27" 4K', quantity: 1, user: 'Client B' },
        { date: '16/02/2026', reference: 'REF-001', product: 'Chaise de Bureau Ergonomique', quantity: 1, user: 'Client C' },
        { date: '15/02/2026', reference: 'REF-200', product: 'Support Laptop', quantity: 5, user: 'Interne' },
        { date: '14/02/2026', reference: 'REF-103', product: 'Clavier Mécanique', quantity: 2, user: 'Client A' }
    ];

    constructor(
        @Inject(GET_STOCK_STATS_USE_CASE) private getStockStatsUseCase: GetStockStatsUseCase
    ) { }

    ngOnInit(): void {
        this.initGridsterOptions();
        this.loadSites();
        this.loadStats();
        this.initCharts();
        this.initWidgets();
        this.updateGridWidgets();
    }

    /**
     * Configuration de Gridster
     */
    private initGridsterOptions(): void {
        this.options = {
            gridType: 'verticalFixed', // Scroll vertical, largeur fixe ou 'fit' selon besoin
            fixedRowHeight: 120, // Hauteur de ligne de base
            minCols: 12, // Grille de 12 colonnes
            maxCols: 12,
            pushItems: true, // Pousse les items automatiquement
            draggable: {
                enabled: this.isEditing // Activé uniquement en mode édition
            },
            resizable: {
                enabled: this.isEditing // Activé uniquement en mode édition
            },
            margin: 16, // Espacement entre widgets
            outerMargin: false,
            displayGrid: 'onDrag&Resize', // Affiche la grille lors du drag
            scrollToNewItems: true
        };
    }

    /**
     * Initialiser la liste des widgets par défaut
     */
    private initWidgets(): void {
        this.widgets = [
            // Ligne 1 : KPIs de base
            { id: 'kpi-value', type: 'kpi', name: 'totalValue', title: 'stock.dashboard.totalValue', icon: 'isax-wallet-money', colorClass: 'text-primary', bgClass: 'bg-primary-soft', cols: 3, rows: 1, y: 0, x: 0, visible: true },
            { id: 'kpi-products', type: 'kpi', name: 'totalProducts', title: 'stock.dashboard.productsCount', icon: 'isax-box', colorClass: 'text-success', bgClass: 'bg-success-soft', cols: 3, rows: 1, y: 0, x: 3, visible: true },
            { id: 'kpi-low-stock', type: 'kpi', name: 'lowStockCount', title: 'stock.dashboard.lowStockAlerts', icon: 'isax-warning-2', colorClass: 'text-warning', bgClass: 'bg-warning-soft', cols: 3, rows: 1, y: 0, x: 6, visible: true },
            { id: 'kpi-movements', type: 'kpi', name: 'todayMovements', title: 'stock.dashboard.todayMovements', icon: 'isax-arrow-swap-horizontal', colorClass: 'text-info', bgClass: 'bg-info-soft', cols: 3, rows: 1, y: 0, x: 9, visible: true },

            // Ligne 2 : Nouveaux KPIs + Transit
            { id: 'kpi-turnover', type: 'kpi', name: 'stockTurnover', title: 'Rotation de Stock', icon: 'isax-refresh-2', colorClass: 'text-purple', bgClass: 'bg-purple-soft', cols: 3, rows: 1, y: 1, x: 0, visible: true },
            { id: 'kpi-transit', type: 'kpi', name: 'transitTransfers', title: 'Transferts en Transit', icon: 'isax-routing', colorClass: 'text-indigo', bgClass: 'bg-indigo-soft', cols: 3, rows: 1, y: 1, x: 3, visible: true },
            { id: 'kpi-pending-receptions', type: 'kpi', name: 'pendingReceptions', title: 'Réceptions en Attente', icon: 'isax-truck', colorClass: 'text-orange', bgClass: 'bg-orange-soft', cols: 3, rows: 1, y: 1, x: 6, visible: true },
            { id: 'kpi-pending-shipments', type: 'kpi', name: 'pendingShipments', title: 'Expéditions à Faire', icon: 'isax-box-tick', colorClass: 'text-teal', bgClass: 'bg-teal-soft', cols: 3, rows: 1, y: 1, x: 9, visible: true },

            // Ligne 3 : Graphiques Principaux + Top 10
            { id: 'chart-movements', type: 'chart', name: 'movements', title: 'Mouvements', cols: 8, rows: 3, y: 2, x: 0, visible: true },
            { id: 'chart-top-products', type: 'chart', name: 'topProducts', title: 'Top 10 des Sorties', cols: 4, rows: 3, y: 2, x: 8, visible: true },

            // Ligne 4 : Tables Récapitulatives (Jour/Mois/Année)
            { id: 'table-summary-exits', type: 'table', name: 'summaryExits', title: 'Tableau des sorties', cols: 6, rows: 4, y: 5, x: 0, visible: true },
            { id: 'table-summary-entries', type: 'table', name: 'summaryEntries', title: 'Tableau des entrées', cols: 6, rows: 4, y: 5, x: 6, visible: true },

            // Ligne 5 : Autres Graphiques (décalés)
            { id: 'chart-distribution', type: 'chart', name: 'distribution', title: 'Répartition par Catégorie', cols: 6, rows: 3, y: 8, x: 0, visible: true },
            { id: 'chart-warehouse-value', type: 'chart', name: 'warehouseValue', title: 'Valeur par Entrepôt', cols: 6, rows: 3, y: 8, x: 6, visible: true }
        ];
    }

    /**
     * Basculer le mode édition et mettre à jour les options Gridster
     */
    toggleEditing(): void {
        this.isEditing = !this.isEditing;

        if (this.options && this.options.draggable && this.options.resizable) {
            this.options.draggable.enabled = this.isEditing;
            this.options.resizable.enabled = this.isEditing;
            this.options.api?.optionsChanged?.();
        }
    }

    /**
     * Supprimer un widget (le cacher)
     */
    /**
     * Supprimer un widget (le cacher)
     */
    removeWidget(id: string): void {
        const widget = this.widgets.find(w => w.id === id);
        if (widget) {
            widget.visible = false;
            this.updateGridWidgets();
        }
    }

    /**
     * Ajouter un widget (le réafficher ou créer - pour l'instant réafficher)
     */
    addWidget(id: string): void {
        const widget = this.widgets.find(w => w.id === id);
        if (widget) {
            widget.visible = true;
            this.updateGridWidgets();
        }
    }

    /**
     * Mettre à jour la liste des widgets affichés dans la grille
     */
    private updateGridWidgets(): void {
        this.gridWidgets = this.widgets.filter(w => w.visible);
    }

    /**
     * Charger la liste des sites
     */
    loadSites(): void {
        // Simulation de chargement des sites (à lier au service structure hiérarchique plus tard)
        this.sites = [
            { id: 'all', name: 'Tous les sites' },
            { id: 'site-1', name: 'Dépôt Central - Douala' },
            { id: 'site-2', name: 'Magasin Nord - Garoua' }
        ];

        // Simulation de chargement des articles
        this.articles = [
            { id: 'all', name: 'Tous les articles' },
            { id: 'art-1', name: 'Chaise de Bureau Ergonomique' },
            { id: 'art-2', name: 'Écran 27" 4K' },
            { id: 'art-3', name: 'Clavier Mécanique' }
        ];
    }

    /**
     * Changer de site
     */
    onSiteChange(siteId: string): void {
        this.selectedSiteId = siteId;
        this.loadStats();
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
        this.distributionChartConfig.categories = ['Électronique', 'Mobilier', 'Vêtements', 'Accessoires'];

        // Graphique de valeur par entrepôt (exemple)
        this.warehouseValueSeries = [{
            name: 'Valeur estimée',
            data: [12500000, 8400000, 3200000]
        }];
        this.warehouseValueChartConfig.categories = ['Dépôt Central', 'Magasin Nord', 'Magasin Sud'];

        // Graphique Top 10 Sorties
        this.topProductsSeries = [{
            name: 'Sorties',
            data: [120, 95, 88, 75, 60, 55, 48, 40, 35, 30]
        }];
        this.topProductsChartConfig.categories = ['Produit A', 'Produit B', 'Produit C', 'Produit D', 'Produit E', 'Produit F', 'Produit G', 'Produit H', 'Produit I', 'Produit J'];
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

    /**
     * Gérer les changements de filtre
     */
    onFilterChange(widget: DashboardWidget): void {
        console.log(`Filtre modifié pour le widget ${widget.id}:`, widget.filters);
        // Simulation de rechargement des données
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 500);
    }
}
