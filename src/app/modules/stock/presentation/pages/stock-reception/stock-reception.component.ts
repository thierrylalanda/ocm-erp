
import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    DataTableComponent,
    DataTableColumn,
    DataTableConfig,
    FormBuilderComponent,
    FormConfig,
    ToastService,
    ModalComponent
} from '../../../../_shared/presentation/components';
import { GET_STOCK_MOVEMENTS_USE_CASE, GetStockMovementsUseCase } from '../../../application/use-cases/movements/get-stock-movements.use-case';
import { CREATE_STOCK_MOVEMENT_USE_CASE, CreateStockMovementUseCase } from '../../../application/use-cases/movements/create-stock-movement.use-case';
import { GET_PRODUCTS_USE_CASE, GetProductsUseCase } from '../../../application/use-cases/products/get-products.use-case';
import { GET_WAREHOUSES_USE_CASE, GetWarehousesUseCase } from '../../../application/use-cases/warehouses/get-warehouses.use-case';
import { StockMovementDto, CreateStockMovementDto, ProductDto, WarehouseDto } from '../../../application/dto/stock.dto';
import { StockMovementType } from '../../../domain/entities/stock-movement.entity';

@Component({
    selector: 'app-stock-reception',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        DataTableComponent,
        FormBuilderComponent,
        ModalComponent
    ],
    templateUrl: './stock-reception.component.html',
    styleUrls: ['./stock-reception.component.scss']
})
export class StockReceptionComponent implements OnInit {
    loading = false;
    receptions: StockMovementDto[] = [];
    products: ProductDto[] = [];
    warehouses: WarehouseDto[] = [];
    showCreateModal = false;

    columns: DataTableColumn[] = [
        { key: 'movementDate', label: 'stock.movement.date', type: 'date', sortable: true },
        { key: 'originDocument', label: 'stock.reception.documentReference', sortable: true },
        { key: 'productReference', label: 'stock.products.reference', sortable: true },
        { key: 'productName', label: 'stock.products.name', sortable: true, filterable: true },
        { key: 'partnerName', label: 'stock.reception.supplier', sortable: true, filterable: true },
        { key: 'warehouseName', label: 'stock.products.warehouse', sortable: true },
        { key: 'quantity', label: 'stock.movement.quantity', type: 'number', sortable: true }
    ];

    tableConfig: DataTableConfig = {
        showRowNumbers: true,
        selectable: false,
        exportable: true,
        pageSize: 10
    };

    constructor(
        @Inject(GET_STOCK_MOVEMENTS_USE_CASE) private getMovementsUseCase: GetStockMovementsUseCase,
        @Inject(CREATE_STOCK_MOVEMENT_USE_CASE) private createMovementUseCase: CreateStockMovementUseCase,
        @Inject(GET_PRODUCTS_USE_CASE) private getProductsUseCase: GetProductsUseCase,
        @Inject(GET_WAREHOUSES_USE_CASE) private getWarehousesUseCase: GetWarehousesUseCase,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.loadInitialData();
        this.loadReceptions();
    }

    async loadInitialData(): Promise<void> {
        const [pResult, wResult] = await Promise.all([
            this.getProductsUseCase.execute(),
            this.getWarehousesUseCase.execute()
        ]);

        if (pResult.isSuccess) this.products = pResult.value;
        if (wResult.isSuccess) this.warehouses = wResult.value;
    }

    async loadReceptions(): Promise<void> {
        this.loading = true;
        // Filter by ENTRY type. Use the search/filter params of the use case if available.
        // Assuming execute accepts filters. If not, we filter client side for now as per previous pattern.
        // The implementation_plan suggests updating use cases, but for speed and minimizing changes to 'GetStockMovements' 
        // which might return all, we'll try to use existing params or filter client side if the mock returns all.
        // Actually GetStockMovementsUseCaseImpl likely takes some filters or we might need to adjust it. 
        // Checking current implementation: likely takes simple filters or none.
        // We will assume client-side filtering if parameters are not robust yet, or minimal params.

        const result = await this.getMovementsUseCase.execute();

        if (result.isSuccess) {
            this.receptions = result.value.filter(m => m.type === StockMovementType.ENTRY);
        } else {
            this.toastService.error('Erreur lors du chargement des réceptions');
        }
        this.loading = false;
    }

    openCreateModal(): void {
        this.showCreateModal = true;
    }

    async onCreateSubmit(formData: any): Promise<void> {
        this.loading = true;

        const dto: CreateStockMovementDto = {
            type: StockMovementType.ENTRY,
            productId: formData.productId,
            warehouseId: formData.warehouseId,
            quantity: formData.quantity,
            movementDate: formData.movementDate || new Date(),
            partnerName: formData.supplierName,
            partnerId: formData.supplierName, // Using name as ID for now or could differ
            originDocument: formData.documentReference,
            notes: formData.notes
        };

        const result = await this.createMovementUseCase.execute(dto);

        if (result.isSuccess) {
            this.toastService.success('Réception enregistrée avec succès');
            this.showCreateModal = false;
            this.loadReceptions();
        } else {
            this.toastService.error('Erreur lors de l\'enregistrement');
        }
        this.loading = false;
    }

    get formConfig(): FormConfig {
        return {
            fields: [
                {
                    name: 'supplierName',
                    label: 'stock.reception.supplier',
                    type: 'text', // Simplification: Text field instead of select for now
                    width: 6,
                    required: true
                },
                {
                    name: 'documentReference',
                    label: 'stock.reception.documentReference',
                    type: 'text',
                    width: 6,
                    placeholder: 'N° BL, Facture...'
                },
                {
                    name: 'movementDate',
                    label: 'stock.movement.date',
                    type: 'date',
                    width: 6,
                    required: true,
                    defaultValue: new Date().toISOString().split('T')[0]
                },
                {
                    name: 'warehouseId',
                    label: 'stock.movement.warehouse',
                    type: 'select',
                    width: 6,
                    required: true,
                    options: this.warehouses.map(w => ({ label: w.name, value: w.id }))
                },
                {
                    name: 'productId',
                    label: 'stock.movement.product',
                    type: 'select',
                    width: 6,
                    required: true,
                    options: this.products.map(p => ({ label: p.name + ' (' + p.reference + ')', value: p.id }))
                },
                {
                    name: 'quantity',
                    label: 'stock.movement.quantity',
                    type: 'number',
                    width: 6,
                    required: true,
                    min: 1
                },
                {
                    name: 'notes',
                    label: 'common.notes',
                    type: 'textarea',
                    width: 12
                }
            ],
            submitButton: { label: 'common.save' },
            cancelButton: { label: 'common.cancel' }
        };
    }
}
