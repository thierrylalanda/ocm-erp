import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    DataTableComponent,
    DataTableColumn,
    DataTableConfig,
    ToastService
} from '../../../../_shared/presentation/components';
import { GET_EXPIRING_LOTS_USE_CASE, GetExpiringLotsUseCase } from '../../../application/use-cases/lots/get-expiring-lots.use-case';
import { LotDto } from '../../../application/dto/lot.dto';
import { LotStatus } from '../../../domain/entities/lot-status.enum';

@Component({
    selector: 'app-expiring-lots-report',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        DataTableComponent
    ],
    templateUrl: './expiring-lots-report.component.html',
    styleUrls: ['./expiring-lots-report.component.scss']
})
export class ExpiringLotsReportComponent implements OnInit {
    lots: LotDto[] = [];
    loading = false;
    daysBeforeExpiration = 30;

    // Columns
    columns: DataTableColumn[] = [
        { key: 'lotNumber', label: 'stock.lots.number', sortable: true },
        { key: 'productName', label: 'stock.products.product', sortable: true },
        { key: 'expirationDate', label: 'stock.lots.expirationDate', type: 'date', sortable: true },
        {
            key: 'daysUntilExpiration',
            label: 'stock.lots.daysRemaining',
            type: 'number',
            sortable: true,
            format: (v) => this.formatDaysRemaining(v)
        },
        { key: 'currentQuantity', label: 'stock.lots.quantity', type: 'number', sortable: true },
        { key: 'status', label: 'common.status', sortable: true, format: (v) => this.formatStatus(v) }
    ];

    tableConfig: DataTableConfig = {
        showRowNumbers: true,
        selectable: false,
        exportable: true
    };

    constructor(
        @Inject(GET_EXPIRING_LOTS_USE_CASE) private getExpiringLotsUseCase: GetExpiringLotsUseCase,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.loadExpiringLots();
    }

    async loadExpiringLots(): Promise<void> {
        this.loading = true;

        const result = await this.getExpiringLotsUseCase.execute(this.daysBeforeExpiration);

        if (result.isSuccess) {
            this.lots = this.enrichLots(result.value);
        } else {
            this.toastService.error('Erreur lors du chargement des lots en alerte');
        }
        this.loading = false;
    }

    private enrichLots(lots: LotDto[]): LotDto[] {
        return lots.map(lot => ({
            ...lot,
            daysUntilExpiration: this.calculateDaysUntilExpiration(lot.expirationDate)
        } as any));
    }

    private calculateDaysUntilExpiration(expirationDate?: Date): number {
        if (!expirationDate) return -1;
        const now = new Date();
        const expDate = new Date(expirationDate);
        const diffTime = expDate.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    private formatDaysRemaining(days: number): string {
        if (days < 0) return 'Périmé';
        if (days === 0) return 'Aujourd\'hui';
        if (days === 1) return '1 jour';
        return `${days} jours`;
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

    onDaysFilterChange(): void {
        this.loadExpiringLots();
    }
}
