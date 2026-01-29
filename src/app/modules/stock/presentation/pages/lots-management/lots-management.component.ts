import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    DataTableComponent,
    DataTableColumn,
    DataTableConfig,
    ToastService,
    ModalComponent,
    ModalConfig
} from '../../../../_shared/presentation/components';
import { GET_LOTS_BY_PRODUCT_USE_CASE, GetLotsByProductUseCase } from '../../../application/use-cases/lots/get-lots-by-product.use-case';
import { GET_EXPIRING_LOTS_USE_CASE, GetExpiringLotsUseCase } from '../../../application/use-cases/lots/get-expiring-lots.use-case';
import { CREATE_LOT_USE_CASE, CreateLotUseCase } from '../../../application/use-cases/lots/create-lot.use-case';
import { GET_PRODUCTS_USE_CASE, GetProductsUseCase } from '../../../application/use-cases/products/get-products.use-case';
import { LotDto, CreateLotDto } from '../../../application/dto/lot.dto';
import { ProductDto } from '../../../application/dto/stock.dto';
import { LotStatus } from '../../../domain/entities/lot-status.enum';

@Component({
    selector: 'app-lots-management',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        DataTableComponent,
        ModalComponent
    ],
    templateUrl: './lots-management.component.html',
    styleUrls: ['./lots-management.component.scss']
})
export class LotsManagementComponent implements OnInit {
    lots: LotDto[] = [];
    products: ProductDto[] = [];
    loading = false;

    // Filters
    selectedProductId?: string;
    selectedStatus?: LotStatus;

    // Modal
    showLotModal = false;
    lotModalConfig: ModalConfig = {
        title: 'Nouveau Lot',
        size: 'lg'
    };
    currentLot: CreateLotDto = this.getEmptyLot();

    // Columns
    columns: DataTableColumn[] = [
        { key: 'lotNumber', label: 'stock.lots.number', sortable: true, filterable: true },
        { key: 'productName', label: 'stock.products.product', sortable: true, filterable: true },
        { key: 'manufacturingDate', label: 'stock.lots.manufacturingDate', type: 'date', sortable: true },
        { key: 'expirationDate', label: 'stock.lots.expirationDate', type: 'date', sortable: true },
        { key: 'currentQuantity', label: 'stock.lots.quantity', type: 'number', sortable: true },
        { key: 'status', label: 'common.status', sortable: true, format: (v) => this.formatStatus(v) }
    ];

    tableConfig: DataTableConfig = {
        showRowNumbers: true,
        selectable: false,
        exportable: true
    };

    LotStatus = LotStatus;

    constructor(
        @Inject(GET_LOTS_BY_PRODUCT_USE_CASE) private getLotsByProductUseCase: GetLotsByProductUseCase,
        @Inject(GET_EXPIRING_LOTS_USE_CASE) private getExpiringLotsUseCase: GetExpiringLotsUseCase,
        @Inject(CREATE_LOT_USE_CASE) private createLotUseCase: CreateLotUseCase,
        @Inject(GET_PRODUCTS_USE_CASE) private getProductsUseCase: GetProductsUseCase,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.loadProducts();
        this.loadLots();
    }

    async loadProducts(): Promise<void> {
        const result = await this.getProductsUseCase.execute();
        if (result.isSuccess) {
            this.products = result.value;
        }
    }

    async loadLots(): Promise<void> {
        this.loading = true;

        try {
            let result;

            if (this.selectedProductId) {
                result = await this.getLotsByProductUseCase.execute(this.selectedProductId);
            } else {
                result = await this.getExpiringLotsUseCase.execute(365); // All lots within 1 year
            }

            if (result.isSuccess) {
                this.lots = this.enrichLots(result.value);

                // Apply status filter if selected
                if (this.selectedStatus) {
                    this.lots = this.lots.filter(lot => lot.status === this.selectedStatus);
                }
            } else {
                this.toastService.error('Erreur lors du chargement des lots');
            }
        } finally {
            this.loading = false;
        }
    }

    private enrichLots(lots: LotDto[]): LotDto[] {
        return lots.map(lot => ({
            ...lot,
            productName: lot.productName || this.products.find(p => p.id === lot.productId)?.name || 'Inconnu'
        }));
    }

    onFilterChange(): void {
        this.loadLots();
    }

    openCreateModal(): void {
        this.currentLot = this.getEmptyLot();
        this.lotModalConfig.title = 'Nouveau Lot';
        this.showLotModal = true;
    }

    async onSubmit(): Promise<void> {
        if (!this.validateLot()) {
            return;
        }

        this.loading = true;
        const result = await this.createLotUseCase.execute(this.currentLot);

        if (result.isSuccess) {
            this.toastService.success('Lot créé avec succès');
            this.showLotModal = false;
            await this.loadLots();
        } else {
            this.toastService.error('Erreur lors de la création du lot');
        }
        this.loading = false;
    }

    private validateLot(): boolean {
        if (!this.currentLot.lotNumber) {
            this.toastService.error('Le numéro de lot est requis');
            return false;
        }
        if (!this.currentLot.productId) {
            this.toastService.error('Le produit est requis');
            return false;
        }
        if (this.currentLot.initialQuantity <= 0) {
            this.toastService.error('La quantité doit être supérieure à 0');
            return false;
        }
        return true;
    }

    private getEmptyLot(): CreateLotDto {
        return {
            lotNumber: '',
            productId: '',
            initialQuantity: 0,
            currentQuantity: 0
        };
    }

    private formatStatus(status: LotStatus): string {
        const statusMap: Record<LotStatus, string> = {
            [LotStatus.ACTIVE]: 'Actif',
            [LotStatus.ALERT]: 'Alerte',
            [LotStatus.EXPIRED]: 'Périmé',
            [LotStatus.BLOCKED]: 'Bloqué'
        };
        return statusMap[status] || status;
    }

    getStatusClass(status: LotStatus): string {
        const classMap: Record<LotStatus, string> = {
            [LotStatus.ACTIVE]: 'badge bg-success',
            [LotStatus.ALERT]: 'badge bg-warning',
            [LotStatus.EXPIRED]: 'badge bg-danger',
            [LotStatus.BLOCKED]: 'badge bg-secondary'
        };
        return classMap[status] || 'badge bg-secondary';
    }
}
