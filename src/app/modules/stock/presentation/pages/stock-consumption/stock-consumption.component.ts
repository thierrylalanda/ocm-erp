import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    DataTableComponent,
    DataTableColumn,
    DataTableConfig,
    FormBuilderComponent,
    FormFieldConfig,
    FormConfig,
    ModalComponent,
    ModalConfig,
    ToastService
} from '../../../../_shared/presentation/components';
import { CREATE_STOCK_MOVEMENT_USE_CASE, CreateStockMovementUseCase } from '../../../application/use-cases/movements/create-stock-movement.use-case';
import { GET_STOCK_MOVEMENTS_USE_CASE, GetStockMovementsUseCase } from '../../../application/use-cases/movements/get-stock-movements.use-case';
import { GET_PRODUCTS_USE_CASE, GetProductsUseCase } from '../../../application/use-cases/products/get-products.use-case';
import { GET_STOCK_LEVEL_USE_CASE, GetStockLevelUseCase } from '../../../application/use-cases/inventory/get-stock-level.use-case';
import { CreateStockMovementDto, StockMovementDto, ProductDto } from '../../../application/dto/stock.dto';
import { StockMovementType } from '../../../domain/entities/stock-movement.entity';
import { StockConsumptionReason } from '../../../domain/entities/stock-consumption-reason.enum';

@Component({
    selector: 'app-stock-consumption',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        DataTableComponent,
        FormBuilderComponent,
        ModalComponent
    ],
    templateUrl: './stock-consumption.component.html',
    styleUrls: ['./stock-consumption.component.scss']
})
export class StockConsumptionComponent implements OnInit {
    loading = false;
    showModal = false;
    movements: StockMovementDto[] = [];
    products: ProductDto[] = [];
    availableStock = 0;
    selectedProductId: string | null = null;

    StockConsumptionReason = StockConsumptionReason;

    modalConfig: ModalConfig = {
        title: 'stock.consumption.create',
        size: 'lg'
    };

    tableConfig: DataTableConfig = {
        pageSize: 10,
        sortable: true,
        filterable: true,
        exportable: true,
        showRowNumbers: true
    };

    tableColumns: DataTableColumn[] = [
        { key: 'movementDate', label: 'stock.movements.date', type: 'date', sortable: true },
        { key: 'productReference', label: 'stock.products.reference', sortable: true },
        { key: 'productName', label: 'stock.products.name', sortable: true },
        { key: 'quantity', label: 'stock.movements.quantity', type: 'number', sortable: true },
        { key: 'consumptionReason', label: 'stock.consumption.reason', type: 'custom', sortable: true },
        { key: 'warehouseName', label: 'stock.movements.warehouse', sortable: true },
        { key: 'notes', label: 'stock.movements.notes' }
    ];

    formConfig: FormConfig = {
        fields: [
            {
                name: 'productId',
                label: 'stock.movements.product',
                type: 'select',
                required: true,
                options: [],
                width: 12
            },
            {
                name: 'warehouseId',
                label: 'stock.movements.warehouse',
                type: 'select',
                required: true,
                options: [
                    { value: '1', label: 'Magasin Principal' },
                    { value: '2', label: 'Magasin Secondaire' }
                ],
                width: 6
            },
            {
                name: 'quantity',
                label: 'stock.movements.quantity',
                type: 'number',
                required: true,
                min: 1,
                placeholder: '0',
                width: 6
            },
            {
                name: 'consumptionReason',
                label: 'stock.consumption.reason',
                type: 'select',
                required: true,
                options: [
                    { value: StockConsumptionReason.SCRAP, label: 'stock.consumption.reasons.scrap' },
                    { value: StockConsumptionReason.INTERNAL_USE, label: 'stock.consumption.reasons.internalUse' },
                    { value: StockConsumptionReason.LOSS, label: 'stock.consumption.reasons.loss' },
                    { value: StockConsumptionReason.DAMAGE, label: 'stock.consumption.reasons.damage' },
                    { value: StockConsumptionReason.SAMPLE, label: 'stock.consumption.reasons.sample' },
                    { value: StockConsumptionReason.EXPIRED, label: 'stock.consumption.reasons.expired' },
                    { value: StockConsumptionReason.THEFT, label: 'stock.consumption.reasons.theft' },
                    { value: StockConsumptionReason.CORRECTION, label: 'stock.consumption.reasons.correction' },
                    { value: StockConsumptionReason.OTHER, label: 'stock.consumption.reasons.other' }
                ],
                width: 6
            },
            {
                name: 'movementDate',
                label: 'stock.movements.date',
                type: 'date',
                required: true,
                defaultValue: new Date(),
                width: 6
            },
            {
                name: 'notes',
                label: 'stock.movements.notes',
                type: 'textarea',
                rows: 3,
                width: 12
            }
        ],
        submitButton: {
            label: 'common.submit'
        },
        cancelButton: {
            label: 'common.cancel'
        }
    };

    constructor(
        @Inject(CREATE_STOCK_MOVEMENT_USE_CASE) private createStockMovementUseCase: CreateStockMovementUseCase,
        @Inject(GET_STOCK_MOVEMENTS_USE_CASE) private getStockMovementsUseCase: GetStockMovementsUseCase,
        @Inject(GET_PRODUCTS_USE_CASE) private getProductsUseCase: GetProductsUseCase,
        @Inject(GET_STOCK_LEVEL_USE_CASE) private getStockLevelUseCase: GetStockLevelUseCase,
        private toastService: ToastService
    ) { }

    async ngOnInit(): Promise<void> {
        await this.loadProducts();
        await this.loadMovements();
    }

    async loadProducts(): Promise<void> {
        const result = await this.getProductsUseCase.execute();

        if (result.isSuccess) {
            this.products = result.value;

            // Update form options
            const productField = this.formConfig.fields.find(f => f.name === 'productId');
            if (productField) {
                productField.options = this.products.map(p => ({
                    value: p.id,
                    label: `${p.reference} - ${p.name}`
                }));
            }
        }
    }

    async loadMovements(): Promise<void> {
        this.loading = true;

        const result = await this.getStockMovementsUseCase.execute();

        if (result.isSuccess) {
            // Filter only STOCK_CONSUMPTION movements
            this.movements = result.value.filter(m => m.type === StockMovementType.STOCK_CONSUMPTION);
        } else {
            this.toastService.error('Erreur lors du chargement des mouvements');
        }

        this.loading = false;
    }

    async onProductChange(productId: string): Promise<void> {
        this.selectedProductId = productId;

        // Get available stock for selected product
        const result = await this.getStockLevelUseCase.execute();

        if (result.isSuccess) {
            // Find inventory for selected product
            const inventory = result.value.find(inv => inv.productId === productId);

            if (inventory) {
                this.availableStock = inventory.quantity;
            } else {
                this.availableStock = 0;
            }

            if (this.availableStock <= 0) {
                this.toastService.warning('Stock insuffisant pour ce produit');
            }
        } else {
            this.availableStock = 0;
        }
    }

    openCreateModal(): void {
        this.showModal = true;
    }

    async onFormSubmit(formData: any): Promise<void> {
        // Validate quantity is positive
        if (formData.quantity <= 0) {
            this.toastService.error('La quantité doit être positive');
            return;
        }

        // Validate available stock
        if (formData.quantity > this.availableStock) {
            this.toastService.error(`Quantité supérieure au stock disponible (${this.availableStock})`);
            return;
        }

        const dto: CreateStockMovementDto = {
            type: StockMovementType.STOCK_CONSUMPTION,
            productId: formData.productId,
            warehouseId: formData.warehouseId,
            quantity: -Math.abs(formData.quantity), // Negative for consumption
            consumptionReason: formData.consumptionReason,
            movementDate: formData.movementDate,
            notes: formData.notes
        };

        const result = await this.createStockMovementUseCase.execute(dto);

        if (result.isSuccess) {
            this.toastService.success('Stock consommé avec succès');
            this.showModal = false;
            await this.loadMovements();
        } else {
            this.toastService.error('Erreur lors de la consommation du stock');
        }
    }

    onFormCancel(): void {
        this.showModal = false;
    }

    getReasonClass(reason: StockConsumptionReason): string {
        switch (reason) {
            case StockConsumptionReason.SCRAP:
                return 'bg-danger';
            case StockConsumptionReason.INTERNAL_USE:
                return 'bg-primary';
            case StockConsumptionReason.LOSS:
                return 'bg-warning';
            case StockConsumptionReason.DAMAGE:
                return 'bg-danger';
            case StockConsumptionReason.SAMPLE:
                return 'bg-info';
            case StockConsumptionReason.EXPIRED:
                return 'bg-dark';
            case StockConsumptionReason.THEFT:
                return 'bg-danger';
            case StockConsumptionReason.CORRECTION:
                return 'bg-warning';
            case StockConsumptionReason.OTHER:
                return 'bg-secondary';
            default:
                return 'bg-secondary';
        }
    }

    getReasonLabel(reason: StockConsumptionReason): string {
        return `stock.consumption.reasons.${this.getReasonKey(reason)}`;
    }

    private getReasonKey(reason: StockConsumptionReason): string {
        const map: Record<StockConsumptionReason, string> = {
            [StockConsumptionReason.SCRAP]: 'scrap',
            [StockConsumptionReason.INTERNAL_USE]: 'internalUse',
            [StockConsumptionReason.LOSS]: 'loss',
            [StockConsumptionReason.DAMAGE]: 'damage',
            [StockConsumptionReason.SAMPLE]: 'sample',
            [StockConsumptionReason.EXPIRED]: 'expired',
            [StockConsumptionReason.THEFT]: 'theft',
            [StockConsumptionReason.CORRECTION]: 'correction',
            [StockConsumptionReason.OTHER]: 'other'
        };
        return map[reason] || 'other';
    }

    onExport(): void {
        this.toastService.info('Export en cours...');
    }
}
