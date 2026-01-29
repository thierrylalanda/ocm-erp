import { Routes } from '@angular/router';
import { STOCK_REPOSITORY_PROVIDERS } from './infrastructure/stock-infrastructure.providers';
import { STOCK_USE_CASE_PROVIDERS } from './application/stock.providers';

/**
 * Routes Angular du module Stock
 */
export const StockRoutes: Routes = [
    {
        path: '',
        providers: [
            ...STOCK_REPOSITORY_PROVIDERS,
            ...STOCK_USE_CASE_PROVIDERS
        ],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./presentation/pages/stock-home/stock-home.component')
                    .then(m => m.StockHomeComponent)
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./presentation/pages/stock-dashboard/stock-dashboard.component')
                    .then(m => m.StockDashboardComponent)
            },
            {
                path: 'products',
                loadComponent: () => import('./presentation/pages/products-management/products-management.component')
                    .then(m => m.ProductsManagementComponent)
            },
            {
                path: 'categories',
                loadComponent: () => import('./presentation/pages/product-categories/product-categories.component')
                    .then(m => m.ProductCategoriesComponent)
            },
            {
                path: 'movements',
                loadComponent: () => import('./presentation/pages/stock-movements/stock-movements.component')
                    .then(m => m.StockMovementsComponent)
            },
            {
                path: 'inventory',
                loadComponent: () => import('./presentation/pages/inventory/inventory.component')
                    .then(m => m.InventoryComponent)
            },
            {
                path: 'warehouses',
                loadComponent: () => import('./presentation/pages/warehouses/warehouses.component')
                    .then(m => m.WarehousesComponent)
            },
            {
                path: 'settings',
                loadComponent: () => import('./presentation/pages/settings/stock-settings.component')
                    .then(m => m.StockSettingsComponent)
            },
            {
                path: 'lots',
                loadComponent: () => import('./presentation/pages/lots-management/lots-management.component')
                    .then(m => m.LotsManagementComponent)
            },
            {
                path: 'lots/expiring',
                loadComponent: () => import('./presentation/pages/expiring-lots-report/expiring-lots-report.component')
                    .then(m => m.ExpiringLotsReportComponent)
            },
            {
                path: 'creation',
                loadComponent: () => import('./presentation/pages/stock-creation/stock-creation.component')
                    .then(m => m.StockCreationComponent)
            },
            {
                path: 'consumption',
                loadComponent: () => import('./presentation/pages/stock-consumption/stock-consumption.component')
                    .then(m => m.StockConsumptionComponent)
            },
            {
                path: 'receptions',
                loadComponent: () => import('./presentation/pages/stock-reception/stock-reception.component')
                    .then(m => m.StockReceptionComponent)
            },
            {
                path: 'shipments',
                loadComponent: () => import('./presentation/pages/stock-shipment/stock-shipment.component')
                    .then(m => m.StockShipmentComponent)
            },
            {
                path: 'reports',
                loadComponent: () => import('./presentation/pages/stock-reports/stock-reports.component')
                    .then(m => m.StockReportsComponent)
            },
            {
                path: 'reports/valuation',
                loadComponent: () => import('./presentation/pages/stock-valuation-report/stock-valuation-report.component')
                    .then(m => m.StockValuationReportComponent)
            },
            {
                path: 'reports/lot-history',
                loadComponent: () => import('./presentation/pages/lot-history-report/lot-history-report.component')
                    .then(m => m.LotHistoryReportComponent)
            }
        ]
    }
];
