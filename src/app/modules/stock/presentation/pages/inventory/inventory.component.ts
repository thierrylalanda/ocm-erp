import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    DataTableComponent,
    DataTableColumn,
    DataTableConfig,
    ToastService,
    ChartComponent,
    ChartConfig,
    ModalComponent,
    ModalConfig
} from '../../../../_shared/presentation/components';
import { GET_STOCK_LEVEL_USE_CASE, GetStockLevelUseCase } from '../../../application/use-cases/inventory/get-stock-level.use-case';
import { GET_PRODUCTS_USE_CASE, GetProductsUseCase } from '../../../application/use-cases/products/get-products.use-case';
import { GET_WAREHOUSES_USE_CASE, GetWarehousesUseCase } from '../../../application/use-cases/warehouses/get-warehouses.use-case';
import { InventoryDto, ProductDto, WarehouseDto, CreateStockMovementDto } from '../../../application/dto/stock.dto';
import { StockMovementType } from '../../../domain/entities/stock-movement.entity';
import { ImportExportService } from '../../../../_shared/infrastructure/services/import-export.service';
import { CREATE_STOCK_MOVEMENT_USE_CASE, CreateStockMovementUseCase } from '../../../application/use-cases/movements/create-stock-movement.use-case';

@Component({
    selector: 'app-inventory',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        DataTableComponent,
        ChartComponent,
        ModalComponent
    ],
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    inventory: InventoryDto[] = [];
    products: ProductDto[] = [];
    warehouses: WarehouseDto[] = [];
    loading = false;

    // Filters
    selectedProductId?: string;
    selectedWarehouseId?: string;

    // Charts
    stockValueChartConfig?: ChartConfig;
    stockValueSeries: any[] = [];

    // Physical Count Modal
    showPhysicalCountModal = false;
    physicalCountModalConfig: ModalConfig = {
        title: 'Comptage Physique',
        size: 'lg'
    };
    physicalCountData: { inventoryId: string; currentQty: number; countedQty: number; productName: string; warehouseName: string }[] = [];

    // Columns
    columns: DataTableColumn[] = [
        { key: 'productReference', label: 'stock.products.reference', sortable: true },
        { key: 'productName', label: 'stock.products.name', sortable: true, filterable: true },
        { key: 'warehouseName', label: 'stock.products.warehouse', sortable: true },
        { key: 'lotNumber', label: 'stock.lots.number', sortable: true, filterable: true },
        { key: 'expirationDate', label: 'stock.lots.expirationDate', type: 'date', sortable: true },
        { key: 'quantity', label: 'stock.products.stock', type: 'number', sortable: true },
        { key: 'reservedQuantity', label: 'stock.inventory.reserved', type: 'number', sortable: true },
        { key: 'availableQuantity', label: 'stock.inventory.available', type: 'number', sortable: true },
        { key: 'stockValue', label: 'stock.inventory.value', type: 'number', sortable: true, format: (v) => v ? v.toLocaleString() + ' €' : '-' },
        { key: 'updatedAt', label: 'common.updatedAt', type: 'date', sortable: true }
    ];

    tableConfig: DataTableConfig = {
        showRowNumbers: true,
        selectable: false,
        exportable: true
    };

    constructor(
        @Inject(GET_STOCK_LEVEL_USE_CASE) private getStockLevelUseCase: GetStockLevelUseCase,
        @Inject(GET_PRODUCTS_USE_CASE) private getProductsUseCase: GetProductsUseCase,
        @Inject(GET_WAREHOUSES_USE_CASE) private getWarehousesUseCase: GetWarehousesUseCase,
        @Inject(CREATE_STOCK_MOVEMENT_USE_CASE) private createStockMovementUseCase: CreateStockMovementUseCase,
        private toastService: ToastService,
        private importExportService: ImportExportService
    ) { }

    ngOnInit(): void {
        this.loadInitialData();
        this.loadInventory();
    }

    async loadInitialData(): Promise<void> {
        const [productsResult, warehousesResult] = await Promise.all([
            this.getProductsUseCase.execute(),
            this.getWarehousesUseCase.execute()
        ]);

        if (productsResult.isSuccess) {
            this.products = productsResult.value;
        }

        if (warehousesResult.isSuccess) {
            this.warehouses = warehousesResult.value;
        }
    }

    async loadInventory(): Promise<void> {
        this.loading = true;

        // Note: Le useCase actuel prend productId en premier argument.
        // Si on veut filtrer par warehouse, il faudra que le useCase le supporte.
        // On a implémenté (productId, warehouseId) dans le useCase.
        const result = await this.getStockLevelUseCase.execute(
            this.selectedProductId,
            this.selectedWarehouseId
        );

        if (result.isSuccess) {
            this.inventory = this.enrichInventory(result.value);
            this.updateCharts();
        } else {
            this.toastService.error('Erreur lors du chargement de l\'inventaire');
        }
        this.loading = false;
    }

    private updateCharts(): void {
        // Stock Value Distribution by Warehouse
        const warehouseValues = new Map<string, number>();
        this.inventory.forEach(item => {
            const current = warehouseValues.get(item.warehouseName) || 0;
            warehouseValues.set(item.warehouseName, current + (item.stockValue || 0));
        });

        this.stockValueSeries = [{
            name: 'Valeur Stock',
            data: Array.from(warehouseValues.values())
        }];

        this.stockValueChartConfig = {
            title: 'Répartition de la Valeur du Stock',
            type: 'donut',
            height: 350,
            labels: Array.from(warehouseValues.keys()),
            colors: ['#546E7A', '#26a69a', '#66BB6A', '#FFA726', '#EF5350']
        };
    }

    private enrichInventory(inventory: InventoryDto[]): InventoryDto[] {
        return inventory.map(item => ({
            ...item,
            productName: item.productName || this.products.find(p => p.id === item.productId)?.name || 'Inconnu',
            productReference: item.productReference || this.products.find(p => p.id === item.productId)?.reference || '-',
            warehouseName: item.warehouseName || this.warehouses.find(w => w.id === item.warehouseId)?.name || 'Inconnu'
        }));
    }

    onFilterChange(): void {
        this.loadInventory();
    }

    onExport(): void {
        this.toastService.info('Export en cours...');
        const dataToExport = this.inventory.map(i => ({
            ProductReference: i.productReference,
            ProductName: i.productName,
            Warehouse: i.warehouseName,
            Quantity: i.quantity,
            Available: i.availableQuantity,
            Reserved: i.reservedQuantity,
            Value: i.stockValue,
            UpdatedAt: i.updatedAt ? new Date(i.updatedAt).toLocaleDateString() : '-'
        }));
        this.importExportService.exportToExcel(dataToExport, 'inventory_export');
        this.toastService.success('Export terminé');
    }

    triggerImport(): void {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.xlsx, .xls, .csv';
        fileInput.onchange = (e: any) => this.onFileSelected(e);
        fileInput.click();
    }

    async onFileSelected(event: any): Promise<void> {
        const file = event.target.files[0];
        if (!file) return;

        this.toastService.info('Import en cours...');
        try {
            const data: any[] = await this.importExportService.readExcel(file);
            let successCount = 0;
            let errorCount = 0;

            for (const row of data) {
                // Expects: ProductReference, WarehouseName, Quantity
                // We need to find IDs from Names/References. 
                // This is a naive implementation relying on pre-loaded lists.
                const product = this.products.find(p => p.reference === row.ProductReference);
                const warehouse = this.warehouses.find(w => w.name === row.WarehouseName || w.code === row.WarehouseName);

                if (product && warehouse && row.Quantity > 0) {
                    try {
                        const dto: CreateStockMovementDto = {
                            productId: product.id,
                            warehouseId: warehouse.id,
                            type: StockMovementType.ENTRY,
                            quantity: parseInt(row.Quantity),
                            reason: 'Import Initial',
                            documentReference: `IMP-${new Date().getTime()}`,
                            movementDate: new Date()
                        };

                        const result = await this.createStockMovementUseCase.execute(dto);
                        if (result.isSuccess) successCount++;
                        else errorCount++;
                    } catch {
                        errorCount++;
                    }
                } else {
                    errorCount++;
                }
            }

            this.toastService.success(`Import terminé : ${successCount} entrées créées, ${errorCount} erreurs`);
            await this.loadInventory();
        } catch (error) {
            this.toastService.error('Erreur lors de la lecture');
        }
    }

    downloadTemplate(): void {
        const headers = ['ProductReference', 'WarehouseName', 'Quantity'];
        this.importExportService.generateTemplate(headers, 'inventory_import_template');
    }

    openPhysicalCountModal(): void {
        // Prepare data for physical count
        this.physicalCountData = this.inventory.map(item => ({
            inventoryId: item.id,
            productName: item.productName,
            warehouseName: item.warehouseName,
            currentQty: item.quantity,
            countedQty: item.quantity // Default to current
        }));
        this.showPhysicalCountModal = true;
    }

    async submitPhysicalCount(): Promise<void> {
        this.toastService.info('Enregistrement du comptage...');
        let adjustmentCount = 0;

        for (const item of this.physicalCountData) {
            const difference = item.countedQty - item.currentQty;
            if (difference !== 0) {
                const inventoryItem = this.inventory.find(i => i.id === item.inventoryId);
                if (!inventoryItem) continue;

                const dto: CreateStockMovementDto = {
                    productId: inventoryItem.productId,
                    warehouseId: inventoryItem.warehouseId,
                    type: StockMovementType.ADJUSTMENT,
                    quantity: Math.abs(difference),
                    reason: `Comptage physique - ${difference > 0 ? 'Surplus' : 'Manquant'}`,
                    documentReference: `COUNT-${new Date().getTime()}`,
                    movementDate: new Date()
                };

                const result = await this.createStockMovementUseCase.execute(dto);
                if (result.isSuccess) adjustmentCount++;
            }
        }

        this.toastService.success(`${adjustmentCount} ajustements enregistrés`);
        this.showPhysicalCountModal = false;
        await this.loadInventory();
    }
}
