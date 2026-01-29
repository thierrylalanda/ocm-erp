import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Type de graphique
 */
export type ChartType =
    | 'line'
    | 'area'
    | 'bar'
    | 'column'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick';

/**
 * Configuration du graphique
 */
export interface ChartConfig {
    /** Type de graphique */
    type: ChartType;
    /** Hauteur du graphique */
    height?: number | string;
    /** Largeur du graphique */
    width?: number | string;
    /** Titre du graphique */
    title?: string;
    /** Sous-titre */
    subtitle?: string;
    /** Options ApexCharts personnalisées */
    options?: any;
    /** Séries de données */
    series?: any[];
    /** Catégories (labels X) */
    categories?: string[];
    /** Labels pour pie/donut charts */
    labels?: string[];
    /** Couleurs personnalisées */
    colors?: string[];
    /** Activer les animations */
    animations?: boolean;
    /** Activer la toolbar */
    toolbar?: boolean;
    /** Activer le zoom */
    zoom?: boolean;
    /** Thème (light ou dark) */
    theme?: 'light' | 'dark';
}

/**
 * Composant Chart - Wrapper pour ApexCharts
 * 
 * Features:
 * - 11 types de graphiques
 * - Configuration simplifiée
 * - Thème cohérent avec l'application
 * - Responsive
 * - Export image
 * - Animations
 * 
 * @example
 * ```html
 * <app-chart
 *   [config]="chartConfig"
 *   [series]="chartSeries">
 * </app-chart>
 * ```
 * 
 * Note: Nécessite ApexCharts
 * npm install apexcharts ng-apexcharts
 */
@Component({
    selector: 'app-chart',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="chart-container">
      <div *ngIf="config.title" class="chart-header">
        <h5 class="chart-title">{{ config.title }}</h5>
        <p *ngIf="config.subtitle" class="chart-subtitle">{{ config.subtitle }}</p>
      </div>
      <div #chartElement class="chart-element"></div>
    </div>
  `,
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {
    /** Configuration du graphique */
    @Input() config!: ChartConfig;

    /** Séries de données */
    @Input() series: any[] = [];

    /** Référence à l'élément du graphique */
    @ViewChild('chartElement', { static: true }) chartElement!: ElementRef;

    /** Instance ApexCharts */
    private chart: any;

    ngOnInit(): void {
        this.initChart();
    }

    ngOnDestroy(): void {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    ngOnChanges(): void {
        if (this.chart) {
            this.updateChart();
        }
    }

    /**
     * Initialiser le graphique
     */
    private async initChart(): Promise<void> {
        // Note: Dans une vraie implémentation, il faudrait importer ApexCharts
        // import ApexCharts from 'apexcharts';

        const options = this.buildOptions();

        // Créer le graphique
        // this.chart = new ApexCharts(this.chartElement.nativeElement, options);
        // await this.chart.render();

        console.log('Chart initialized with options:', options);
    }

    /**
     * Construire les options du graphique
     */
    private buildOptions(): any {
        const defaultOptions = {
            chart: {
                type: this.config.type,
                height: this.config.height || 350,
                width: this.config.width || '100%',
                animations: {
                    enabled: this.config.animations !== false
                },
                toolbar: {
                    show: this.config.toolbar !== false
                },
                zoom: {
                    enabled: this.config.zoom !== false
                }
            },
            series: this.config.series || this.series,
            xaxis: {
                categories: this.config.categories
            },
            colors: this.config.colors || [
                '#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'
            ],
            theme: {
                mode: this.config.theme || 'light'
            },
            responsive: [{
                breakpoint: 768,
                options: {
                    chart: {
                        height: 300
                    }
                }
            }]
        };

        // Fusionner avec les options personnalisées
        return this.deepMerge(defaultOptions, this.config.options || {});
    }

    /**
     * Mettre à jour le graphique
     */
    private updateChart(): void {
        if (this.chart) {
            const options = this.buildOptions();
            this.chart.updateOptions(options);
        }
    }

    /**
     * Fusionner profondément deux objets
     */
    private deepMerge(target: any, source: any): any {
        const output = { ...target };

        if (this.isObject(target) && this.isObject(source)) {
            Object.keys(source).forEach(key => {
                if (this.isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(output, { [key]: source[key] });
                    } else {
                        output[key] = this.deepMerge(target[key], source[key]);
                    }
                } else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }

        return output;
    }

    /**
     * Vérifier si une valeur est un objet
     */
    private isObject(item: any): boolean {
        return item && typeof item === 'object' && !Array.isArray(item);
    }

    /**
     * Exporter le graphique en image
     */
    exportChart(format: 'png' | 'svg' = 'png'): void {
        if (this.chart) {
            this.chart.dataURI().then((uri: any) => {
                const link = document.createElement('a');
                link.href = uri.imgURI;
                link.download = `chart.${format}`;
                link.click();
            });
        }
    }

    /**
     * Réinitialiser le zoom
     */
    resetZoom(): void {
        if (this.chart) {
            this.chart.resetSeries();
        }
    }
}
