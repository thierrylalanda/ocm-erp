import { routes } from "../../core/helpers/routes/routes";

export const SettingRoute = [
  {
    tittle: 'Administration',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Reports',
        hasSubRouteTwo: true,
        showSubRoute: false,
        icon: 'chart-35',
        base: 'reports',
        permissions: ['jJHHHD'],
        subMenus: [
          {
            menuValue: 'Item Report',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'item-report',
            subMenus: [
              {
                menuValue: 'Stock Summary',
                route: routes.stockSummary,
                base: 'stock-summary',
              },
              {
                menuValue: 'Inventory',
                route: routes.inventoryReport,
                base: 'inventory-report',
              },
              {
                menuValue: 'Best Seller',
                route: routes.bestSeller,
                base: 'best-seller',
              },
              {
                menuValue: 'Low Stock',
                route: routes.lowStock,
                base: 'low-stock',
              },
              {
                menuValue: 'Stock History',
                route: routes.stockHistory,
                base: 'stock-history',
              },
              {
                menuValue: 'Sold Stock',
                route: routes.soldStock,
                base: 'sold-stock',
              },
            ]
          },
          {
            menuValue: 'Transaction Reports',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'transcaction-report',
            subMenus: [
              {
                menuValue: 'Sales',
                route: routes.salesReport,
                base: 'sales-report',
              },
              {
                menuValue: 'Sales Return',
                route: routes.salesReturns,
                base: 'sales-returns',
              },
              {
                menuValue: 'Sales Order',
                route: routes.salesOrders,
                base: 'sales-orders',
              },
              {
                menuValue: 'Purchases',
                route: routes.purchasesReport,
                base: 'purchases-report',
              },
              {
                menuValue: 'Purchase Return',
                route: routes.purchasesReturnReport,
                base: 'purchases-return-report',
              },
              {
                menuValue: 'Purchase Orders',
                route: routes.purchasesOrdersReport,
                base: 'purchases-orders-report',
              },
              {
                menuValue: 'Quotation',
                route: routes.quotationReport,
                base: 'quotation-report',
              },
            ]
          },
          {
            menuValue: 'Finance Reports',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'finance-reports',
            subMenus: [
              {
                menuValue: 'Payment Summary',
                route: routes.paymentSummary,
                base: 'payment-summary',
              },
              {
                menuValue: 'Taxes',
                route: routes.taxReport,
                base: 'tax-report',
              },
            ]
          },
          {
            menuValue: 'Accounting Reports',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'accounting-report',
            subMenus: [
              {
                menuValue: 'Expenses',
                route: routes.expenseReport,
                base: 'expense-report',
              },
              {
                menuValue: 'Income',
                route: routes.incomeReport,
                base: 'income-report',
              },
              {
                menuValue: 'Profit & Loss',
                route: routes.profitlossReport,
                base: 'profit-loss-report',
              },
              {
                menuValue: 'Annual Report',
                route: routes.annualReport,
                base: 'annual-report',
              },
              {
                menuValue: 'Balance Sheet',
                route: routes.balanceSheet,
                base: 'balance-sheet',
              },
              {
                menuValue: 'Trial Balance',
                route: routes.trialBalance,
                base: 'trial-balance',
              },
              {
                menuValue: 'Cash Flow',
                route: routes.cashFlow,
                base: 'cash-flow',
              },
              {
                menuValue: 'Account Statement',
                route: routes.accountStatement,
                base: 'cash-flow',
              },
            ]
          },
          {
            menuValue: 'User Reports',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'user-reports',
            subMenus: [
              {
                menuValue: 'Customers',
                route: routes.customerReport,
                base: 'customer-reports',
              },
              {
                menuValue: 'Customer Due Report',
                route: routes.customerDueReport,
                base: 'customer-due-reports',
              },
              {
                menuValue: 'Supplier',
                route: routes.supplierReport,
                base: 'supplier-reports',
              },
            ]
          },
        ],
      },
      {
        menuValue: 'Settings',
        hasSubRouteTwo: true,
        showSubRoute: false,
        icon: 'setting-25',
        base: 'settings',
        subMenus: [
          {
            menuValue: 'General Settings',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'general-settings',
            icon: 'setting-2',
            subMenus: [
              {
                menuValue: 'Company Settings',
                route: routes.companySettings,
                base: 'comapany-settings',
              },
              {
                menuValue: 'Config general',
                route: routes.generalConfiguration,
                base: 'general-configuration',

                permissions: ['SECURITY:GLOBAL:MANAGE']
              },
              {
                menuValue: 'Account Settings',
                route: routes.accountSettings,
                base: 'account-settings',
              },
              {
                menuValue: 'Site Settings',
                route: routes.siteSettings,
                base: 'site-settings',
              },
              {
                menuValue: 'Départements',
                route: routes.departementSettings,
                base: 'departement-settings',
              },

              {
                menuValue: 'Security',
                route: routes.securitySettings,
                base: 'security-settings',
              },
              {
                menuValue: 'Plans & Billings',
                route: routes.plansBillings,
                base: 'plans-billings',
              },
              {
                menuValue: 'Notifications',
                route: routes.notificationSettings,
                base: 'notification-settings',
              },
              {
                menuValue: 'Integration',
                route: routes.integrationsSettings,
                base: 'integrations-settings',
              },
              {
                menuValue: 'Preference',
                route: routes.preferenceSettings,
                base: 'preference-settings',
              },
              {
                menuValue: 'Language',
                route: routes.languageSettings,
                base: 'language-settings',
              },
              {
                menuValue: 'Appreance',
                route: routes.appearanceSettings,
                base: 'appearance-settings',
              },
            ]
          },
          {
            menuValue: 'Website Settings',
            hasSubRoute: true,
            showSubRoute: false,
            icon: 'global ',
            page: 'website-settings',
            subMenus: [
              {
                menuValue: 'Localization',
                route: routes.localizationSettings,
                base: 'localization-settings',
              },
              {
                menuValue: 'Prefixes',
                route: routes.prefixesSettings,
                base: 'prefixes-settings',
              },

              {
                menuValue: 'SEO Setup',
                route: routes.seoSetup,
                base: 'seo-setup',
              },
              {
                menuValue: 'Maintenance Mode',
                route: routes.maintenanceMode,
                base: 'maintenance-mode',
              },
              {
                menuValue: 'Authentication',
                route: routes.authenticationSettings,
                base: 'authentication-settings',
              },
              {
                menuValue: 'Ai Configuration',
                route: routes.aiConfigurationSettings,
                base: 'ai-configuration-settings',
              },

              {
                menuValue: 'Plugin Manager',
                route: routes.pluginManager,
                base: 'plugin-manager',
              },
            ]
          },
          {
            menuValue: 'App Settings',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'app-settings',
            icon: 'shapes ',
            subMenus: [
              {
                menuValue: 'Invoice Settings',
                route: routes.invoiceSettings,
                base: 'invoice-settings',
              },
              {
                menuValue: 'Invoice Templates',
                route: routes.invoiceTemplates,
                base: 'invoice-templates',
              },
              {
                menuValue: 'esignatures',
                route: routes.esignatures,
                base: 'esignatures',
              },
              {
                menuValue: 'Barcode',
                route: routes.barcodeSettings,
                base: 'barcode-settings',
              },
              {
                menuValue: 'Thermal Printer',
                route: routes.thermalPrinter,
                base: 'thermal-printer',
              },
              {
                menuValue: 'Custom Fields',
                route: routes.customFields,
                base: 'custom-fields',
              },
              {
                menuValue: 'SaaS Settings',
                route: routes.saasSettings,
                base: 'sass-settings',
              },
            ]
          },
          {
            menuValue: 'System Settings',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'system-settings',
            icon: 'more-2',
            subMenus: [
              {
                menuValue: 'Email Settings',
                route: routes.emailSettings,
                base: 'email-settings',
              },
              {
                menuValue: 'Email Templates',
                route: routes.emailTemplates,
                base: 'email-templates',
              },
              {
                menuValue: 'SMS Gateways',
                route: routes.smsGateways,
                base: 'sms-gateways',
              },
              {
                menuValue: 'GDPR Cookies',
                route: routes.gdprCookies,
                base: 'gdpr-cookies',
              },
            ]
          },
          {
            menuValue: 'Finance Settings',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'finance-settings',
            icon: 'money-3',
            subMenus: [
              {
                menuValue: 'Payment Methods',
                route: routes.paymentMethods,
                base: 'payment-methods',
              },
              {
                menuValue: 'Bank Accounts',
                route: routes.bankAccountsSettings,
                base: 'bank-accounts-settings',
              },
              {
                menuValue: 'Tax Rates',
                route: routes.taxRates,
                base: 'tax-rates',
              },
              {
                menuValue: 'Currencies',
                route: routes.currencies,
                base: 'currencies',
              },
            ]
          },

          {
            menuValue: 'Other Settings',
            hasSubRoute: true,
            showSubRoute: false,
            page: 'other-settings',
            icon: 'document',
            permissions: ['LIST'],
            subMenus: [
              {
                menuValue: 'Custom Css',
                route: routes.customCss,
                base: 'custom-css',
                permissions: ['LIST'],
              },
              {
                menuValue: 'Custom Js',
                route: routes.customJs,
                base: 'custom-js',
              },
              {
                menuValue: 'Sitemap',
                route: routes.sitemap,
                base: 'sitemap',
              },
              {
                menuValue: 'Clear Cache',
                route: routes.clearCache,
                base: 'clear-cache',
              },
              {
                menuValue: 'Storage',
                route: routes.storage,
                base: 'storage',
              },
              {
                menuValue: 'Cronjob',
                route: routes.cronjob,
                base: 'cronjob',
              },
              {
                menuValue: 'System Backup',
                route: routes.systemBackup,
                base: 'system-backup',
              },
              {
                menuValue: 'Database Backup',
                route: routes.databaseBackup,
                base: 'database-backup',
              },
              {
                menuValue: 'System Update',
                route: routes.systemUpdate,
                base: 'system-update',
              },
            ]
          },
        ],
      },
    ],
  },
]
