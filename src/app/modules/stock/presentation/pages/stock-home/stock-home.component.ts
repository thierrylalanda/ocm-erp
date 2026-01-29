import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    DataTableComponent,
    DataTableColumn,
    DataTableConfig,
    ToastService
} from '../../../../_shared/presentation/components';
import { GET_LOW_STOCK_ALERTS_USE_CASE, GetLowStockAlertsUseCase } from '../../../application/use-cases/dashboard/get-low-stock-alerts.use-case';
import { GET_PENDING_RECEPTIONS_USE_CASE, GetPendingReceptionsUseCase } from '../../../application/use-cases/dashboard/get-pending-receptions.use-case';
import { GET_PENDING_SHIPMENTS_USE_CASE, GetPendingShipmentsUseCase } from '../../../application/use-cases/dashboard/get-pending-shipments.use-case';
import { InventoryDto, PendingReceptionDto, PendingShipmentDto } from '../../../application/dto/stock.dto';
import { ReceptionStatus } from '../../../domain/entities/reception-status.enum';
import { ShipmentStatus } from '../../../domain/entities/shipment-status.enum';

interface QuickAction {
    title: string;
    icon: string;
    route: string;
    queryParams?: any;
    color: string;
    description: string;
}

@Component({
    selector: 'app-stock-home',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        DataTableComponent
    ],
    templateUrl: './stock-home.component.html',
    styleUrls: ['./stock-home.component.scss']
})
export class StockHomeComponent implements OnInit {
    loading = false;
    loadingReceptions = false;
    loadingShipments = false;
    lowStockProducts: InventoryDto[] = [];
    pendingReceptions: PendingReceptionDto[] = [];
    pendingShipments: PendingShipmentDto[] = [];

    quickActions: QuickAction[] = [
        {
            title: 'stock.home.reception',
            icon: 'isax-box-add',
            route: '/app/stock/movements',
            queryParams: { type: 'ENTRY' },
            color: 'primary',
            description: 'stock.home.receptionDesc'
        },
        {
            title: 'stock.home.shipment',
            icon: 'isax-box-remove',
            route: '/app/stock/movements',
            queryParams: { type: 'EXIT' },
            color: 'danger',
            description: 'stock.home.shipmentDesc'
        },
        {
            title: 'stock.home.inventory',
            icon: 'isax-clipboard-text',
            route: '/app/stock/inventory',
            color: 'info',
            description: 'stock.home.inventoryDesc'
        },
        {
            title: 'stock.home.createStock',
            icon: 'isax-add-circle',
            route: '/app/stock/creation',
            queryParams: {},
            color: 'success',
            description: 'stock.home.createStockDesc'
        }
    ];

    // Columns for low stock alerts
    lowStockColumns: DataTableColumn[] = [
        { key: 'productReference', label: 'stock.products.reference', sortable: true },
        { key: 'productName', label: 'stock.products.name', sortable: true },
        { key: 'quantity', label: 'stock.products.stock', type: 'number', sortable: true },
        { key: 'warehouseName', label: 'stock.products.warehouse', sortable: true }
    ];

    lowStockTableConfig: DataTableConfig = {
        showRowNumbers: false,
        selectable: false,
        exportable: false,
        pageSize: 5
    };

    // Columns for pending receptions
    receptionColumns: DataTableColumn[] = [
        { key: 'reference', label: 'stock.home.reference', sortable: true },
        { key: 'supplierName', label: 'stock.home.supplier', sortable: true },
        { key: 'expectedDate', label: 'stock.home.expectedDate', type: 'date', sortable: true },
        { key: 'itemsCount', label: 'stock.home.items', type: 'number', sortable: true },
        { key: 'status', label: 'stock.home.status', type: 'custom', sortable: true }
    ];

    // Columns for pending shipments
    shipmentColumns: DataTableColumn[] = [
        { key: 'reference', label: 'stock.home.reference', sortable: true },
        { key: 'customerName', label: 'stock.home.customer', sortable: true },
        { key: 'expectedDate', label: 'stock.home.expectedDate', type: 'date', sortable: true },
        { key: 'itemsCount', label: 'stock.home.items', type: 'number', sortable: true },
        { key: 'status', label: 'stock.home.status', type: 'custom', sortable: true }
    ];

    constructor(
        @Inject(GET_LOW_STOCK_ALERTS_USE_CASE) private getLowStockAlertsUseCase: GetLowStockAlertsUseCase,
        @Inject(GET_PENDING_RECEPTIONS_USE_CASE) private getPendingReceptionsUseCase: GetPendingReceptionsUseCase,
        @Inject(GET_PENDING_SHIPMENTS_USE_CASE) private getPendingShipmentsUseCase: GetPendingShipmentsUseCase,
        private router: Router,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.loadLowStockAlerts();
        this.loadPendingReceptions();
        this.loadPendingShipments();
    }

    async loadLowStockAlerts(): Promise<void> {
        this.loading = true;
        const result = await this.getLowStockAlertsUseCase.execute();

        if (result.isSuccess) {
            this.lowStockProducts = result.value.slice(0, 5); // Top 5 alerts
        } else {
            this.toastService.error('Erreur lors du chargement des alertes stock');
        }
        this.loading = false;
    }

    async loadPendingReceptions(): Promise<void> {
        this.loadingReceptions = true;

        const result = await this.getPendingReceptionsUseCase.execute(5);

        if (result.isSuccess) {
            this.pendingReceptions = result.value;
        }

        this.loadingReceptions = false;
    }

    async loadPendingShipments(): Promise<void> {
        this.loadingShipments = true;

        const result = await this.getPendingShipmentsUseCase.execute(5);

        if (result.isSuccess) {
            this.pendingShipments = result.value;
        }

        this.loadingShipments = false;
    }

    getReceptionStatusClass(status: ReceptionStatus): string {
        switch (status) {
            case ReceptionStatus.PENDING: return 'bg-warning';
            case ReceptionStatus.PARTIAL: return 'bg-info';
            case ReceptionStatus.COMPLETED: return 'bg-success';
            case ReceptionStatus.CANCELLED: return 'bg-danger';
            default: return 'bg-secondary';
        }
    }

    getShipmentStatusClass(status: ShipmentStatus): string {
        switch (status) {
            case ShipmentStatus.PENDING: return 'bg-warning';
            case ShipmentStatus.PREPARING: return 'bg-info';
            case ShipmentStatus.READY: return 'bg-primary';
            case ShipmentStatus.SHIPPED: return 'bg-success';
            case ShipmentStatus.DELIVERED: return 'bg-success';
            case ShipmentStatus.CANCELLED: return 'bg-danger';
            default: return 'bg-secondary';
        }
    }

    navigateToAction(action: QuickAction): void {
        this.router.navigate([action.route], { queryParams: action.queryParams });
    }

    navigateToDashboard(): void {
        this.router.navigate(['/app/stock/dashboard']);
    }

    getActionColorClass(color: string): string {
        return `action-card-${color}`;
    }
}
