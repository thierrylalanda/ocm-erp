import { routes } from '../../core/helpers/routes/routes';

export const stockBreadCrumbs = [
    {
        hasSubData: false,
        data: 'Stock Dashboard',
        base: 'stock/dashboard'
    },
    {
        hasSubData: true,
        data2: 'Products',
        data: 'Stock',
        route: routes.stockHome,
        page: 'products',
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Categories',
        route: routes.stockHome,
        page: 'categories',
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Movements',
        route: routes.stockHome,
        page: 'movements'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Inventory',
        route: routes.stockHome,
        page: 'inventory'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Warehouses',
        route: routes.stockHome,
        page: 'warehouses'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Settings',
        route: routes.stockHome,
        page: 'settings'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Lots',
        route: routes.stockHome,
        page: 'lots'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Expiring Lots',
        route: routes.stockHome,
        page: 'expiring-lots'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Creation',
        route: routes.stockHome,
        page: 'creation'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Consumption',
        route: routes.stockHome,
        page: 'consumption'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Receptions',
        route: routes.stockHome,
        page: 'receptions'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Shipments',
        route: routes.stockHome,
        page: 'shipments'
    },
    {
        hasSubData: true,
        data: 'Stock',
        data2: 'Reports',
        route: routes.stockHome,
        page: 'reports'
    },
    {
        hasSubData: true,
        data: 'Stock Reports',
        data2: 'Valuation',
        route: routes.stockReports,
        page: 'valuation'
    },
    {
        hasSubData: true,
        data: 'Stock Reports',
        data2: 'Lot History',
        route: routes.stockReports,
        page: 'lot-history'
    }
];
