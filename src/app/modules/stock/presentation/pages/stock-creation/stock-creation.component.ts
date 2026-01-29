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
import { CreateStockMovementDto, StockMovementDto, ProductDto } from '../../../application/dto/stock.dto';
import { StockMovementType } from '../../../domain/entities/stock-movement.entity';
import { StockCreationReason } from '../../../domain/entities/stock-creation-reason.enum';

@Component({
    selector: 'app-stock-creation',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        DataTableComponent,
        FormBuilderComponent,
        ModalComponent
    ],
    templateUrl: './stock-creation.component.html',
    styleUrls: ['./stock-creation.component.scss']
})
export class StockCreationComponent implements OnInit {
    loading = false;
    showModal = false;
    movements: StockMovementDto[] = [];
    products: ProductDto[] = [];

    StockCreationReason = StockCreationReason;

    modalConfig: ModalConfig = {
        title: 'stock.creation.create',
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
        { key: 'creationReason', label: 'stock.creation.reason', type: 'custom', sortable: true },
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
                name: 'creationReason',
                label: 'stock.creation.reason',
                type: 'select',
                required: true,
                options: [
                    { value: StockCreationReason.INTERNAL_PRODUCTION, label: 'stock.creation.reasons.internalProduction' },
                    { value: StockCreationReason.INITIAL_INVENTORY, label: 'stock.creation.reasons.initialInventory' },
                    { value: StockCreationReason.CORRECTION, label: 'stock.creation.reasons.correction' },
                    { value: StockCreationReason.FOUND, label: 'stock.creation.reasons.found' },
                    { value: StockCreationReason.RETURN, label: 'stock.creation.reasons.return' },
                    { value: StockCreationReason.OTHER, label: 'stock.creation.reasons.other' }
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
            // Filter only STOCK_CREATION movements
            this.movements = result.value.filter(m => m.type === StockMovementType.STOCK_CREATION);
        } else {
            this.toastService.error('Erreur lors du chargement des mouvements');
        }

        this.loading = false;
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

        const dto: CreateStockMovementDto = {
            type: StockMovementType.STOCK_CREATION,
            productId: formData.productId,
            warehouseId: formData.warehouseId,
            quantity: Math.abs(formData.quantity), // Ensure positive
            creationReason: formData.creationReason,
            movementDate: formData.movementDate,
            notes: formData.notes
        };

        const result = await this.createStockMovementUseCase.execute(dto);

        if (result.isSuccess) {
            this.toastService.success('Stock créé avec succès');
            this.showModal = false;
            await this.loadMovements();
        } else {
            this.toastService.error('Erreur lors de la création du stock');
        }
    }

    onFormCancel(): void {
        this.showModal = false;
    }

    getReasonClass(reason: StockCreationReason): string {
        switch (reason) {
            case StockCreationReason.INTERNAL_PRODUCTION:
                return 'bg-primary';
            case StockCreationReason.INITIAL_INVENTORY:
                return 'bg-info';
            case StockCreationReason.CORRECTION:
                return 'bg-warning';
            case StockCreationReason.FOUND:
                return 'bg-success';
            case StockCreationReason.RETURN:
                return 'bg-secondary';
            case StockCreationReason.OTHER:
                return 'bg-dark';
            default:
                return 'bg-secondary';
        }
    }

    getReasonLabel(reason: StockCreationReason): string {
        return `stock.creation.reasons.${this.getReasonKey(reason)}`;
    }

    private getReasonKey(reason: StockCreationReason): string {
        const map: Record<StockCreationReason, string> = {
            [StockCreationReason.INTERNAL_PRODUCTION]: 'internalProduction',
            [StockCreationReason.INITIAL_INVENTORY]: 'initialInventory',
            [StockCreationReason.CORRECTION]: 'correction',
            [StockCreationReason.FOUND]: 'found',
            [StockCreationReason.RETURN]: 'return',
            [StockCreationReason.OTHER]: 'other'
        };
        return map[reason] || 'other';
    }

    onExport(): void {
        this.toastService.info('Export en cours...');
    }
}
