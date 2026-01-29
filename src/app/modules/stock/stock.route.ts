import { routes } from "../../core/helpers/routes/routes";

/**
 * Configuration des routes du module Stock pour le sidebar
 */
export const StockRoute = [


    {
        tittle: "Stock",
        active: false,
        icon: "airplay",
        showAsTab: false,
        separateRoute: false,
        base: "app/stock",
        menu: [
            {
                menuValue: "Dashboard",
                route: routes.stockHome,
                base: 'home',
                icon: "home",
                permissions: [],
                hasSubRoute: false,
                showSubRoute: false,
                subMenus: [],
            },
            {
                menuValue: "Configuration",
                hasSubRoute: true,
                showSubRoute: false,
                icon: "box-25",
                base: "configuration",
                subMenus: [

                    {
                        menuValue: "Products",
                        route: routes.products,
                        base: "products",
                        permissions: []
                    },
                    {
                        menuValue: "Categories",
                        route: routes.productCategories,
                        base: "product-categories",
                        permissions: []
                    },
                    {
                        menuValue: "Lots",
                        route: routes.lots,
                        base: "lots",
                        permissions: []
                    },
                ]
            },
            {
                menuValue: "Stock Management",
                hasSubRoute: true,
                showSubRoute: false,
                icon: "box-25",
                base: "stock",
                subMenus: [

                    {
                        menuValue: "Receptions",
                        route: routes.stockReceptions,
                        base: "receptions",
                        icon: "box-add", // Specific icon for reception
                        permissions: []
                    },
                    {
                        menuValue: "Shipments",
                        route: routes.stockShipments,
                        base: "shipments",
                        icon: "box-remove", // Specific icon for shipment
                        permissions: []
                    },
                    {
                        menuValue: "Special Movements",
                        hasSubRouteTwo2: true,
                        showSubRoute: false,
                        icon: "repeat",
                        base: "special",
                        subMenus: [
                            {
                                menuValue: "Stock Creation",
                                route: routes.stockCreation,
                                base: "creation",
                                icon: "add-circle",
                                permissions: []
                            },
                            {
                                menuValue: "Stock Consumption",
                                route: routes.stockConsumption,
                                base: "consumption",
                                icon: "minus-circle",
                                permissions: []
                            }
                        ]
                    },
                    {
                        menuValue: "Stock Movements",
                        route: routes.stockMovements,
                        base: "stock-movements",
                        permissions: []
                    },
                    {
                        menuValue: "Inventory",
                        route: routes.inventory,
                        base: "inventory",
                        permissions: []
                    },
                    {
                        menuValue: "Warehouses",
                        route: routes.warehouses,
                        base: "warehouses",
                        permissions: []
                    },
                ]
            },
            {
                menuValue: "Reports",
                route: routes.stockReports, // Need to add this to routes constant
                base: "reports",
                icon: "chart-1",
                permissions: [],
                hasSubRoute: false,
                showSubRoute: false,
                subMenus: []
            },
            {
                menuValue: "Settings",
                route: routes.stockSettings,
                base: "settingss",
                icon: "settings",
                permissions: [],
                hasSubRoute: false,
                showSubRoute: false,
                subMenus: [],
            }
        ]
    }];
