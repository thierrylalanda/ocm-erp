import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslatePipe } from '../../../../../core/services/translation';
import { routes } from '../../../../../core/helpers/routes/routes';

interface ReportCard {
    title: string;
    description: string;
    icon: string;
    route: string;
    color: string;
}

@Component({
    selector: 'app-stock-reports',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './stock-reports.component.html',
    styleUrls: ['./stock-reports.component.scss']
})
export class StockReportsComponent {
    reports: ReportCard[] = [
        {
            title: 'stock.reports.valuation.title',
            description: 'stock.reports.valuation.description',
            icon: 'moneys',
            route: routes.stockValuation,
            color: 'primary'
        },
        {
            title: 'stock.reports.lotHistory.title',
            description: 'stock.reports.lotHistory.description',
            icon: 'timer-1',
            route: routes.stockLotHistory,
            color: 'info'
        },
        {
            title: 'stock.reports.lowStock.title',
            description: 'stock.reports.lowStock.description',
            icon: 'warning-2',
            route: routes.stockDashboard,
            color: 'warning'
        },
        {
            title: 'stock.reports.expiring.title',
            description: 'stock.reports.expiring.description',
            icon: 'calendar-timeout',
            route: routes.expiringLots,
            color: 'danger'
        }
    ];

    constructor(private router: Router) { }

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }
}
