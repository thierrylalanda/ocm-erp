import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    ToastService,
    CalendarComponent,
    CalendarEvent,
    CalendarConfig
} from '../../../../_shared/presentation/components';
import { GET_STOCK_MOVEMENTS_USE_CASE, GetStockMovementsUseCase, GetStockMovementsFilter } from '../../../application/use-cases/movements/get-stock-movements.use-case';
import { CREATE_STOCK_MOVEMENT_USE_CASE, CreateStockMovementUseCase } from '../../../application/use-cases/movements/create-stock-movement.use-case';
import { GET_PRODUCTS_USE_CASE, GetProductsUseCase } from '../../../application/use-cases/products/get-products.use-case';
import { GET_WAREHOUSES_USE_CASE, GetWarehousesUseCase } from '../../../application/use-cases/warehouses/get-warehouses.use-case';
import { GET_LOTS_BY_PRODUCT_USE_CASE, GetLotsByProductUseCase } from '../../../application/use-cases/lots/get-lots-by-product.use-case';
import { StockMovementDto, CreateStockMovementDto, ProductDto, WarehouseDto } from '../../../application/dto/stock.dto';
import { LotDto } from '../../../application/dto/lot.dto';
import { StockMovementType } from '../../../domain/entities/stock-movement.entity';

@Component({
    selector: 'app-stock-movements',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        DataTableComponent,
        FormBuilderComponent,
        ModalComponent,
        CalendarComponent
    ],
    templateUrl: './stock-movements.component.html',
    styleUrls: ['./stock-movements.component.scss']
})
export class StockMovementsComponent implements OnInit {
    movements: StockMovementDto[] = [];
    products: ProductDto[] = [];
    warehouses: WarehouseDto[] = [];
    lots: LotDto[] = [];  // Lots disponibles pour le produit sélectionné
    loading = false;
    viewMode: 'list' | 'calendar' = 'list';

    // Calendar
    calendarEvents: CalendarEvent[] = [];
    calendarConfig: CalendarConfig = {
        defaultView: 'month',
        showEvents: true
    };

    // Filters
    filters: GetStockMovementsFilter = {};

    // Modal & Form
    showModal = false;
    modalConfig: ModalConfig = {
        size: 'lg',
        title: 'stock.movements.create',
        showCloseButton: true
    };

    // Columns
    columns: DataTableColumn[] = [
        { key: 'movementDate', label: 'stock.movements.date', type: 'date', sortable: true, width: '150px' },
        { key: 'type', label: 'stock.movements.type', type: 'custom', sortable: true, width: '120px' },
        { key: 'productName', label: 'stock.movements.product', sortable: true, filterable: true },
        { key: 'quantity', label: 'stock.movements.quantity', type: 'number', sortable: true, width: '100px' },
        { key: 'warehouseName', label: 'stock.movements.warehouse', sortable: true },
        { key: 'destinationWarehouseName', label: 'stock.movements.destination', sortable: true },
        { key: 'documentReference', label: 'stock.movements.reference', sortable: true }
    ];

    tableConfig: DataTableConfig = {
        showRowNumbers: false,
        selectable: false,
        clickableRows: false
    };

    constructor(
        @Inject(GET_STOCK_MOVEMENTS_USE_CASE) private getMovementsUseCase: GetStockMovementsUseCase,
        @Inject(CREATE_STOCK_MOVEMENT_USE_CASE) private createMovementUseCase: CreateStockMovementUseCase,
        @Inject(GET_PRODUCTS_USE_CASE) private getProductsUseCase: GetProductsUseCase,
        @Inject(GET_WAREHOUSES_USE_CASE) private getWarehousesUseCase: GetWarehousesUseCase,
        @Inject(GET_LOTS_BY_PRODUCT_USE_CASE) private getLotsByProductUseCase: GetLotsByProductUseCase,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.loadInitialData();
        this.loadMovements();
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

    async loadMovements(): Promise<void> {
        this.loading = true;
        const result = await this.getMovementsUseCase.execute(this.filters);

        if (result.isSuccess) {
            this.movements = this.enrichMovements(result.value);
            this.updateCalendarEvents();
        } else {
            this.toastService.error('Erreur lors du chargement des mouvements');
        }
        this.loading = false;
    }

    private updateCalendarEvents(): void {
        this.calendarEvents = this.movements.map(m => ({
            id: m.id,
            title: `${this.getTypeLabel(m.type)}: ${m.productName} (${m.quantity})`,
            start: new Date(m.movementDate),
            color: this.getTypeColor(m.type),
            data: m
        }));
    }

    private enrichMovements(movements: StockMovementDto[]): StockMovementDto[] {
        // Ajouter les noms des produits et magasins si manquants dans le DTO (en attendant que le backend le fasse)
        // Dans une vraie app, le backend renverrait ces infos via des DTOs enrichis ou des joins.
        // Ici on simule le join côté client
        return movements.map(m => ({
            ...m,
            productName: this.products.find(p => p.id === m.productId)?.name || m.productId,
            warehouseName: this.warehouses.find(w => w.id === m.warehouseId)?.name || m.warehouseId,
            destinationWarehouseName: m.destinationWarehouseId
                ? (this.warehouses.find(w => w.id === m.destinationWarehouseId)?.name || m.destinationWarehouseId)
                : undefined
        }));
    }

    onFilterChange(): void {
        this.loadMovements();
    }

    openCreateModal(): void {
        this.showModal = true;
    }

    onFormCancel(): void {
        this.showModal = false;
    }

    async onFormSubmit(formData: any): Promise<void> {
        const dto: CreateStockMovementDto = {
            type: formData.type,
            productId: formData.productId,
            quantity: Number(formData.quantity),
            warehouseId: formData.warehouseId,
            destinationWarehouseId: formData.destinationWarehouseId,
            documentReference: formData.documentReference,
            lotId: formData.lotId,  // ID du lot sélectionné
            lotNumber: formData.lotNumber,  // Numéro de lot manuel
            notes: formData.notes,
            movementDate: new Date()
        };

        const result = await this.createMovementUseCase.execute(dto);

        if (result.isSuccess) {
            this.toastService.success('Mouvement créé avec succès');
            this.showModal = false;
            this.loadMovements();
        } else {
            this.toastService.error('Erreur lors de la création du mouvement');
        }
    }

    get formConfig(): FormConfig {
        return {
            fields: [
                {
                    name: 'type',
                    label: 'stock.movements.type',
                    type: 'select',
                    required: true,
                    options: [
                        { value: StockMovementType.ENTRY, label: 'Entrée' },
                        { value: StockMovementType.EXIT, label: 'Sortie' },
                        { value: StockMovementType.TRANSFER, label: 'Transfert' },
                        { value: StockMovementType.ADJUSTMENT, label: 'Ajustement' }
                    ],
                    width: 6
                },
                {
                    name: 'productId',
                    label: 'stock.movements.product',
                    type: 'select',
                    required: true,
                    options: this.products.map(p => ({ value: p.id, label: p.name })),
                    width: 6,
                    placeholder: 'Sélectionner un produit'
                },
                {
                    name: 'quantity',
                    label: 'stock.movements.quantity',
                    type: 'number',
                    required: true,
                    width: 6,
                    min: 1
                },
                {
                    name: 'documentReference',
                    label: 'stock.movements.reference',
                    type: 'text',
                    width: 6
                },
                {
                    name: 'warehouseId',
                    label: 'stock.movements.warehouse',
                    type: 'select',
                    required: true,
                    options: this.warehouses.map(w => ({ value: w.id, label: w.name })),
                    width: 6,
                    placeholder: 'Magasin source'
                },
                {
                    name: 'destinationWarehouseId',
                    label: 'stock.movements.destination',
                    type: 'select',
                    required: false, // Requis seulement si TRANSFER, géré par validation visibleWhen si possible, sinon backend validera
                    options: this.warehouses.map(w => ({ value: w.id, label: w.name })),
                    width: 6,
                    placeholder: 'Magasin destination',
                    visibleWhen: (data) => data.type === StockMovementType.TRANSFER
                },
                {
                    name: 'lotId',
                    label: 'stock.lots.number',
                    type: 'select',
                    required: false,
                    options: this.lots.map(l => ({ value: l.id, label: `${l.lotNumber} (Exp: ${l.expirationDate ? new Date(l.expirationDate).toLocaleDateString() : 'N/A'})` })),
                    width: 6,
                    placeholder: 'Sélectionner un lot existant',
                    visibleWhen: (data) => data.type === StockMovementType.ENTRY && data.productId
                },
                {
                    name: 'lotNumber',
                    label: 'stock.lots.number',
                    type: 'text',
                    required: false,
                    width: 6,
                    placeholder: 'Ou saisir un nouveau numéro de lot',
                    visibleWhen: (data) => data.type === StockMovementType.ENTRY && !data.lotId
                },
                {
                    name: 'notes',
                    label: 'note',
                    type: 'textarea',
                    width: 12,
                    rows: 3
                }
            ],
            submitButton: { label: 'common.create' },
            cancelButton: { label: 'common.cancel' }
        };
    }

    getTypeLabel(type: string): string {
        switch (type) {
            case StockMovementType.ENTRY: return 'Entrée';
            case StockMovementType.EXIT: return 'Sortie';
            case StockMovementType.TRANSFER: return 'Transfert';
            case StockMovementType.ADJUSTMENT: return 'Ajustement';
            default: return type;
        }
    }

    getTypeClass(type: string): string {
        switch (type) {
            case StockMovementType.ENTRY: return 'badge bg-success';
            case StockMovementType.EXIT: return 'badge bg-danger';
            case StockMovementType.TRANSFER: return 'badge bg-info';
            case StockMovementType.ADJUSTMENT: return 'badge bg-warning';
            default: return 'badge bg-secondary';
        }
    }

    getTypeColor(type: string): string {
        switch (type) {
            case StockMovementType.ENTRY: return '#198754';
            case StockMovementType.EXIT: return '#dc3545';
            case StockMovementType.TRANSFER: return '#0dcaf0';
            case StockMovementType.ADJUSTMENT: return '#ffc107';
            default: return '#6c757d';
        }
    }

    onEventClick(event: CalendarEvent): void {
        // TODO: Show details
        console.log('Event clicked', event);
    }
}
