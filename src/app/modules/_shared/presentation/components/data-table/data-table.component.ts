import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../../core/services/translation';

/**
 * Configuration d'une colonne de la table
 */
export interface DataTableAction {
    /** Icône de l'action */
    icon?: string;
    /** Libellé de l'action */
    label: string;
    /** Classe CSS du bouton */
    class?: string;
    /** Callback au clic */
    callback: (row: any) => void;
}

/**
 * Configuration globale de la table
 */
export interface DataTableConfig {
    selectable?: boolean;
    selectionMode?: 'single' | 'multiple';
    pagination?: boolean;
    pageSize?: number;
    sortable?: boolean;
    filterable?: boolean;
    exportable?: boolean;
    showRowNumbers?: boolean;
    clickableRows?: boolean;
}

/**
 * Configuration d'une colonne de la table
 */
export interface DataTableColumn {
    /** Clé de la propriété dans les données */
    key: string;
    /** Libellé de la colonne (clé de traduction) */
    label: string;
    /** Type de données */
    type?: 'text' | 'number' | 'date' | 'boolean' | 'custom';
    /** Largeur de la colonne */
    width?: string;
    /** Colonne triable */
    sortable?: boolean;
    /** Colonne filtrable */
    filterable?: boolean;
    /** Template personnalisé pour le rendu */
    template?: any;
    /** Fonction de formatage personnalisée */
    formatter?: (value: any, row: any) => string;
    /** Format (alias de formatter pour compatibilité) */
    format?: (value: any) => string;
    /** Actions personnalisées (pour type='custom' ou 'actions') */
    actions?: DataTableAction[];
    /** Alignement du contenu */
    align?: 'left' | 'center' | 'right';
}

/**
 * Configuration de la pagination
 */
export interface DataTablePagination {
    /** Page actuelle (1-indexed) */
    currentPage: number;
    /** Nombre d'éléments par page */
    pageSize: number;
    /** Nombre total d'éléments */
    totalItems: number;
    /** Options de taille de page */
    pageSizeOptions?: number[];
}

/**
 * Configuration du tri
 */
export interface DataTableSort {
    /** Colonne triée */
    column: string;
    /** Direction du tri */
    direction: 'asc' | 'desc';
}

/**
 * Événement de sélection de ligne
 */
export interface DataTableSelectionEvent {
    /** Lignes sélectionnées */
    selectedRows: any[];
    /** Indices des lignes sélectionnées */
    selectedIndices: number[];
}

/**
 * Composant DataTable réutilisable
 * 
 * Features:
 * - Tri multi-colonnes
 * - Filtres par colonne
 * - Pagination côté client/serveur
 * - Sélection simple/multiple
 * - Actions en masse
 * - Responsive
 * - i18n
 * 
 * @example
 * ```html
 * <app-data-table
 *   [columns]="columns"
 *   [data]="data"
 *   [loading]="loading"
 *   [pagination]="paginationConfig"
 *   (rowClick)="onRowClick($event)"
 *   (selectionChange)="onSelectionChange($event)">
 * </app-data-table>
 * ```
 */
@Component({
    selector: 'app-data-table',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslatePipe],
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
    /** Configuration des colonnes */
    @Input() columns: DataTableColumn[] = [];

    /** Données à afficher */
    @Input() data: any[] = [];

    /** État de chargement */
    @Input() loading = false;

    /** Configuration de la pagination */
    @Input() pagination?: DataTablePagination;

    /** Activer la sélection de lignes */
    @Input() selectable = false;

    /** Type de sélection (single ou multiple) */
    @Input() selectionMode: 'single' | 'multiple' = 'multiple';

    /** Lignes cliquables (curseur pointer) */
    @Input() clickableRows = true;

    /** Afficher les numéros de ligne */
    @Input() showRowNumbers = false;

    /** Hauteur fixe de la table (scroll vertical) */
    @Input() height?: string;

    /** Classe CSS personnalisée */
    @Input() customClass = '';

    /** Configuration globale */
    @Input() config?: DataTableConfig;

    /** Événement de clic sur une ligne */
    @Output() rowClick = new EventEmitter<any>();

    /** Événement de changement de sélection */
    @Output() selectionChange = new EventEmitter<DataTableSelectionEvent>();

    /** Événement de changement de page */
    @Output() pageChange = new EventEmitter<number>();

    /** Événement de changement de taille de page */
    @Output() pageSizeChange = new EventEmitter<number>();

    /** Événement d'export */
    @Output() export = new EventEmitter<void>();

    /** Événement de changement de tri */
    @Output() sortChange = new EventEmitter<DataTableSort>();

    /** Lignes sélectionnées */
    selectedRows: Set<number> = new Set();

    /** Tri actuel */
    currentSort?: DataTableSort;

    /** Filtres actifs */
    filters: Map<string, string> = new Map();

    /** Données filtrées et triées */
    processedData: any[] = [];

    /** Toutes les lignes sélectionnées */
    allSelected = false;

    /** Référence à Math pour utilisation dans le template */
    protected readonly Math = Math;

    ngOnInit(): void {
        this.processData();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['config']) {
            this.applyConfig();
        }
        if (changes['data'] || changes['columns'] || changes['config']) {
            this.processData();
        }
    }

    private applyConfig(): void {
        if (!this.config) return;

        if (this.config.selectable !== undefined) this.selectable = this.config.selectable;
        if (this.config.selectionMode !== undefined) this.selectionMode = this.config.selectionMode;
        if (this.config.showRowNumbers !== undefined) this.showRowNumbers = this.config.showRowNumbers;
        if (this.config.clickableRows !== undefined) this.clickableRows = this.config.clickableRows;

        if (this.config.pagination && !this.pagination) {
            this.pagination = {
                currentPage: 1,
                pageSize: this.config.pageSize || 10,
                totalItems: 0,
                pageSizeOptions: [5, 10, 25, 50]
            };
        }
    }

    /**
     * Traiter les données (tri, filtre)
     */
    private processData(): void {
        let result = [...this.data];

        // Appliquer les filtres
        if (this.filters.size > 0) {
            result = result.filter(row => {
                return Array.from(this.filters.entries()).every(([key, value]) => {
                    const cellValue = this.getCellValue(row, key);
                    return cellValue?.toString().toLowerCase().includes(value.toLowerCase());
                });
            });
        }

        // Appliquer le tri
        if (this.currentSort) {
            result = this.sortData(result, this.currentSort);
        }

        this.processedData = result;
    }

    /**
     * Trier les données
     */
    private sortData(data: any[], sort: DataTableSort): any[] {
        return [...data].sort((a, b) => {
            const aValue = this.getCellValue(a, sort.column);
            const bValue = this.getCellValue(b, sort.column);

            if (aValue === bValue) return 0;

            const comparison = aValue > bValue ? 1 : -1;
            return sort.direction === 'asc' ? comparison : -comparison;
        });
    }

    /**
     * Obtenir la valeur d'une cellule
     */
    getCellValue(row: any, key: string): any {
        return key.split('.').reduce((obj, k) => obj?.[k], row);
    }

    /**
     * Formater la valeur d'une cellule
     */
    formatCellValue(row: any, column: DataTableColumn): string {
        const value = this.getCellValue(row, column.key);

        if (column.formatter) {
            return column.formatter(value, row);
        }

        if (column.format) {
            return column.format(value);
        }

        if (value === null || value === undefined) {
            return '-';
        }

        switch (column.type) {
            case 'date':
                return new Date(value).toLocaleDateString();
            case 'boolean':
                return value ? '✓' : '✗';
            case 'number':
                return typeof value === 'number' ? value.toLocaleString() : value;
            default:
                return value.toString();
        }
    }

    /**
     * Gérer le clic sur une ligne
     */
    onRowClick(row: any, index: number): void {
        if (this.selectable) {
            this.toggleRowSelection(index);
        }
        this.rowClick.emit(row);
    }

    /**
     * Basculer la sélection d'une ligne
     */
    toggleRowSelection(index: number): void {
        if (this.selectionMode === 'single') {
            this.selectedRows.clear();
            this.selectedRows.add(index);
        } else {
            if (this.selectedRows.has(index)) {
                this.selectedRows.delete(index);
            } else {
                this.selectedRows.add(index);
            }
        }

        this.updateAllSelected();
        this.emitSelectionChange();
    }

    /**
     * Sélectionner/désélectionner toutes les lignes
     */
    toggleAllRows(): void {
        if (this.allSelected) {
            this.selectedRows.clear();
        } else {
            this.processedData.forEach((_, index) => this.selectedRows.add(index));
        }

        this.updateAllSelected();
        this.emitSelectionChange();
    }

    /**
     * Mettre à jour l'état "toutes sélectionnées"
     */
    private updateAllSelected(): void {
        this.allSelected = this.processedData.length > 0 &&
            this.selectedRows.size === this.processedData.length;
    }

    /**
     * Émettre l'événement de changement de sélection
     */
    private emitSelectionChange(): void {
        const selectedIndices = Array.from(this.selectedRows);
        const selectedRowsData = selectedIndices.map(index => this.processedData[index]);

        this.selectionChange.emit({
            selectedRows: selectedRowsData,
            selectedIndices
        });
    }

    /**
     * Gérer le tri d'une colonne
     */
    onSort(column: DataTableColumn): void {
        if (!column.sortable) return;

        if (this.currentSort?.column === column.key) {
            // Inverser la direction
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            // Nouveau tri
            this.currentSort = {
                column: column.key,
                direction: 'asc'
            };
        }

        this.sortChange.emit(this.currentSort);
        this.processData();
    }

    /**
     * Gérer le filtre d'une colonne
     */
    onFilter(column: DataTableColumn, value: string): void {
        if (value) {
            this.filters.set(column.key, value);
        } else {
            this.filters.delete(column.key);
        }

        this.processData();
    }

    /**
     * Gérer le changement de page
     */
    onPageChange(page: number): void {
        if (this.pagination) {
            this.pagination.currentPage = page;
            this.pageChange.emit(page);
        }
    }

    /**
     * Gérer le changement de taille de page
     */
    onPageSizeChange(pageSize: number): void {
        if (this.pagination) {
            this.pagination.pageSize = pageSize;
            this.pagination.currentPage = 1;
            this.pageSizeChange.emit(pageSize);
        }
    }

    /**
     * Obtenir les pages disponibles
     */
    getPages(): number[] {
        if (!this.pagination) return [];

        const totalPages = Math.ceil(this.pagination.totalItems / this.pagination.pageSize);
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    /**
     * Vérifier si une ligne est sélectionnée
     */
    isRowSelected(index: number): boolean {
        return this.selectedRows.has(index);
    }

    /**
     * Obtenir l'icône de tri
     */
    getSortIcon(column: DataTableColumn): string {
        if (!column.sortable) return '';

        if (this.currentSort?.column !== column.key) {
            return 'sort';
        }

        return this.currentSort.direction === 'asc' ? 'sort-up' : 'sort-down';
    }
}
