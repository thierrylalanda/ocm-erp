
import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    DataTableComponent,
    DataTableColumn,
    DataTableConfig,
    ToastService
} from '../../../../_shared/presentation/components';
import { GET_PRODUCTS_USE_CASE, GetProductsUseCase } from '../../../application/use-cases/products/get-products.use-case';
import { GET_STOCK_LEVEL_USE_CASE, GetStockLevelUseCase } from '../../../application/use-cases/inventory/get-stock-level.use-case';
import { GET_STOCK_SETTINGS_USE_CASE, GetStockSettingsUseCase } from '../../../application/use-cases/settings/get-stock-settings.use-case';
import { ProductDto, InventoryDto } from '../../../application/dto/stock.dto';
import { StockValuationMethod } from '../../../domain/entities/stock-settings.entity';

@Component({
    selector: 'app-stock-valuation-report',
    standalone: true,
    imports: [CommonModule, TranslatePipe, DataTableComponent, RouterLink],
    templateUrl: './stock-valuation-report.component.html',
    styleUrls: ['./stock-valuation-report.component.scss']
})
export class StockValuationReportComponent implements OnInit {
    loading = false;
    valuationData: any[] = [];
    totalValue = 0;
    valuationMethod = StockValuationMethod.FIFO;
    currency = 'EUR';

    columns: DataTableColumn[] = [
        { key: 'reference', label: 'stock.products.reference', sortable: true },
        { key: 'name', label: 'stock.products.name', sortable: true, filterable: true },
        { key: 'quantity', label: 'stock.inventory.available', type: 'number', sortable: true },
        { key: 'unitCost', label: 'stock.products.unitCost', type: 'number', sortable: true, format: (v) => v ? v.toFixed(2) : '-' },
        { key: 'totalValue', label: 'stock.inventory.value', type: 'number', sortable: true, format: (v) => v ? v.toFixed(2) : '-' }
    ];

    tableConfig: DataTableConfig = {
        showRowNumbers: true,
        selectable: false,
        exportable: true,
        pageSize: 20
    };

    constructor(
        @Inject(GET_PRODUCTS_USE_CASE) private getProductsUseCase: GetProductsUseCase,
        @Inject(GET_STOCK_LEVEL_USE_CASE) private getStockLevelUseCase: GetStockLevelUseCase,
        @Inject(GET_STOCK_SETTINGS_USE_CASE) private getSettingsUseCase: GetStockSettingsUseCase,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.loadData();
    }

    async loadData(): Promise<void> {
        this.loading = true;
        try {
            // 1. Get Settings for Valuation Method
            const settingsResult = await this.getSettingsUseCase.execute();
            if (settingsResult.isSuccess && settingsResult.value) {
                this.valuationMethod = settingsResult.value.valuationMethod || StockValuationMethod.FIFO;
                this.currency = settingsResult.value.defaultCurrency || 'EUR';
            }

            // 2. Get Inventory
            const inventoryResult = await this.getStockLevelUseCase.execute();
            if (!inventoryResult.isSuccess) throw new Error('Failed to load inventory');

            // 3. Get Products (for cost info if not in inventory)
            const productsResult = await this.getProductsUseCase.execute();
            if (!productsResult.isSuccess) throw new Error('Failed to load products');

            this.processData(inventoryResult.value, productsResult.value);
        } catch (error) {
            this.toastService.error('Erreur lors du chargement du rapport');
        } finally {
            this.loading = false;
        }
    }

    processData(inventory: InventoryDto[], products: ProductDto[]): void {
        // Aggregate inventory by product
        const productStats = new Map<string, { qty: number, value: number, name: string, ref: string, cost: number }>();

        inventory.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            if (!product) return;

            const existing = productStats.get(item.productId) || {
                qty: 0,
                value: 0,
                name: product.name,
                ref: product.reference,
                cost: product.unitCost || 0
            };

            existing.qty += item.quantity;
            // Simple valuation logic for now: Qty * UnitCost
            // In a real scenario, this would depend on the Valuation Method (FIFO layers, etc.)
            // Here we assume UnitCost on Product is the Weighted Average or Standard Cost
            existing.value += item.quantity * existing.cost;

            productStats.set(item.productId, existing);
        });

        this.valuationData = Array.from(productStats.values()).map(stat => ({
            reference: stat.ref,
            name: stat.name,
            quantity: stat.qty,
            unitCost: stat.cost,
            totalValue: stat.value
        }));

        this.totalValue = this.valuationData.reduce((acc, curr) => acc + curr.totalValue, 0);
    }
}
