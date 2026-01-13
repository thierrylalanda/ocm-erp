import { routes } from "../../core/helpers/routes/routes";

export const ConfigurationRoute = [
    {
        menuValue: 'Admin Config',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'element-45',
        base: 'index',
        base1: 'admin-dashboard',
        subMenus: [
            {
                separateRoute: true,
                menuValue: 'Societe',
                tittle: 'Admin Dashboard',
                route: routes.configSociete,
                icon: 'home',
                base: 'index',
                showAsTab: false,
                activeMenu: '',
                permissions: []
            },
            {
                separateRoute: true,
                menuValue: 'Admin Dashboard 2',
                tittle: 'Admin Dashboard 2',
                route: routes.AdminDashboard2,
                icon: 'home',
                base: 'admin-dashboard',
                showAsTab: false,
            },
            {
                separateRoute: true,
                menuValue: 'Customer Dashboard',
                tittle: 'Customer Dashboard',
                route: routes.customerDashboard,
                base: routes.index,
                icon: 'home',
                showAsTab: false,
            },
            {
                separateRoute: true,
                menuValue: 'Super Admin Dashboard',
                tittle: 'Super Admin Dashboard',
                route: routes.superAdminDashboard,
                base: 'super-admin',
                icon: 'home',
                showAsTab: false,
            },
        ],
    },
]

