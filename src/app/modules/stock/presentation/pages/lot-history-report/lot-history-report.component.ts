
import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    ToastService,
    DataTableComponent,
    DataTableColumn
} from '../../../../_shared/presentation/components';
import { GET_STOCK_MOVEMENTS_USE_CASE, GetStockMovementsUseCase } from '../../../application/use-cases/movements/get-stock-movements.use-case';
import { StockMovementDto } from '../../../application/dto/stock.dto';

@Component({
    selector: 'app-lot-history-report',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslatePipe, DataTableComponent, RouterLink],
    templateUrl: './lot-history-report.component.html',
    styleUrls: ['./lot-history-report.component.scss']
})
export class LotHistoryReportComponent implements OnInit {
    loading = false;
    searchLotNumber = '';
    movements: StockMovementDto[] = [];
    lotFound = false;

    // Timeline data structure
    timeline: { date: Date, title: string, description: string, icon: string, color: string }[] = [];

    columns: DataTableColumn[] = [
        { key: 'movementDate', label: 'stock.movement.date', type: 'date', sortable: true },
        { key: 'type', label: 'stock.movement.type', sortable: true },
        { key: 'quantity', label: 'stock.movement.quantity', type: 'number', sortable: true },
        { key: 'warehouseName', label: 'stock.movement.warehouse', sortable: true },
        { key: 'documentReference', label: 'stock.reception.documentReference', sortable: true }
    ];

    constructor(
        @Inject(GET_STOCK_MOVEMENTS_USE_CASE) private getMovementsUseCase: GetStockMovementsUseCase,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
    }

    async onSearch(): Promise<void> {
        if (!this.searchLotNumber.trim()) return;

        this.loading = true;
        this.lotFound = false;

        try {
            // In a real scenario, use a specific UseCase like GetMovementsByLot
            // searching all movements for now as per minimal implementation pattern
            const result = await this.getMovementsUseCase.execute();

            if (result.isSuccess) {
                // Filter by Lot Number
                this.movements = result.value.filter(m => m.lotNumber === this.searchLotNumber);

                if (this.movements.length > 0) {
                    this.lotFound = true;
                    this.buildTimeline();
                } else {
                    this.toastService.info('Aucun mouvement trouvé pour ce lot');
                }
            } else {
                this.toastService.error('Erreur lors de la recherche');
            }
        } catch (error) {
            this.toastService.error('Erreur technique');
        } finally {
            this.loading = false;
        }
    }

    buildTimeline(): void {
        this.timeline = this.movements
            .sort((a, b) => new Date(a.movementDate).getTime() - new Date(b.movementDate).getTime())
            .map(m => {
                let icon = 'box';
                let color = 'primary';
                let title: string = m.type;

                if (m.type === 'ENTRY') {
                    icon = 'import';
                    color = 'success';
                    title = 'Réception';
                } else if (m.type === 'EXIT') {
                    icon = 'export';
                    color = 'warning';
                    title = 'Expédition / Sortie';
                }

                return {
                    date: m.movementDate,
                    title: title,
                    description: `${m.quantity > 0 ? '+' : ''}${m.quantity} (${m.warehouseName}) - ${m.documentReference || 'Sans ref'}`,
                    icon: icon,
                    color: color
                };
            });
    }
}
