import { Routes } from '@angular/router';
import { SettingComponent } from '../features/setting/setting.component';
import { LoggedInGuard } from '../core/guards/loggedIn/logged-in.guard';

export const MODULES_ROUTES: Routes = [
  {
    path: '', loadComponent: () => import('./modules').then(m => m.ModulesComponent),
    canActivate: [LoggedInGuard],
    canActivateChild: [LoggedInGuard],
    children: [
      {        
        path: 'gestion-societes',
        loadComponent: () => import('./configuration/presentation/pages/company-demo/company-demo.component').then(m => m.CompanyDemoComponent)
      },
      {
        path: 'societe',
        loadComponent: () => import('./configuration/presentation/pages/company-management/company-management.component').then(m => m.CompanyManagementComponent)
      },
      //Manage
      {
        path: 'manage-users', loadComponent: () => import('./manage-users/manage-users.component').then(m => m.ManageUsersComponent),
        children: [
          { path: 'users', loadComponent: () => import('./manage-users/presentation/pages/users/users.component').then(m => m.UsersComponent) },
          { path: 'user-detail/:id', loadComponent: () => import('./manage-users/presentation/pages/user-detail/user-detail.component').then(m => m.UserDetailComponent) },
          { path: 'roles-permissions', loadComponent: () => import('./manage-users/presentation/pages/roles-permissions/roles-permissions.component').then(m => m.RolesPermissionsComponent) },
          { path: 'permission/:roleId', loadComponent: () => import('./manage-users/presentation/pages/permission/permission.component').then(m => m.PermissionComponent) },
          { path: 'delete-account-request', loadComponent: () => import('./manage-users/presentation/pages/delete-account-request/delete-account-request.component').then(m => m.DeleteAccountRequestComponent) }
        ]
      },
      //Settings
      {
        path: 'settings', loadComponent: () => import('../features/setting/setting.component').then(m => SettingComponent),
        children: [
          {
            path: 'general-settings', loadComponent: () => import('./setting/presentation/pages/general-settings/general-settings.component').then(m => m.GeneralSettingsComponent),
            children: [
              { path: 'account-settings', loadComponent: () => import('./setting/presentation/pages/general-settings/account-settings/account-settings.component').then(m => m.AccountSettingsComponent), },
              { path: 'site-settings', loadComponent: () => import('./setting/presentation/pages/general-settings/site-settings/site-settings.component').then(m => m.SiteSettingsComponent) },
              { path: 'departement-settings', loadComponent: () => import('./setting/presentation/pages/general-settings/departement-settings/departement-settings.component').then(m => m.DepartementSettingsComponent) },
              { path: 'security-settings', loadComponent: () => import('./setting/presentation/pages/general-settings/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
              { path: 'plans-billings', loadComponent: () => import('./setting/presentation/pages/general-settings/plans-billings/plans-billings.component').then(m => m.PlansBillingsComponent) },
              { path: 'notifications-settings', loadComponent: () => import('./setting/presentation/pages/general-settings/notifications-settings/notifications-settings.component').then(m => m.NotificationsSettingsComponent) },
              { path: 'integrations-settings', loadComponent: () => import('./setting/presentation/pages/general-settings/integrations-settings/integrations-settings.component').then(m => m.IntegrationsSettingsComponent) },
            ]
          },
          {
            path: 'website-settings', loadComponent: () => import('../features/setting/website-settings/website-settings.component').then(m => m.WebsiteSettingsComponent),
            children: [
              { path: 'company-settings', loadComponent: () => import('./setting/presentation/pages/website-settings/company-settings/company-settings.component').then(m => m.CompanySettingsComponent) },
              { path: 'localization-settings', loadComponent: () => import('./setting/presentation/pages/website-settings/localization-settings/localization-settings.component').then(m => m.LocalizationSettingsComponent) },
              { path: 'prefixes-settings', loadComponent: () => import('./setting/presentation/pages/website-settings/prefixes-settings/prefixes-settings.component').then(m => m.PrefixesSettingsComponent) },
              { path: 'preference-settings', loadComponent: () => import('./setting/presentation/pages/website-settings/preference-settings/preference-settings.component').then(m => m.PreferenceSettingsComponent) },
              { path: 'seo-setup', loadComponent: () => import('./setting/presentation/pages/website-settings/seo-setup/seo-setup.component').then(m => m.SeoSetupComponent) },
              { path: 'language-settings', loadComponent: () => import('./setting/presentation/pages/website-settings/language-settings/language-settings.component').then(m => m.LanguageSettingsComponent) },
              { path: 'language-settings2', loadComponent: () => import('./setting/presentation/pages/website-settings/language-settings2/language-settings2.component').then(m => m.LanguageSettings2Component) },
              { path: 'maintenance-mode', loadComponent: () => import('./setting/presentation/pages/website-settings/maintenance-mode/maintenance-mode.component').then(m => m.MaintenanceModeComponent) },
              { path: 'authentication-settings', loadComponent: () => import('./setting/presentation/pages/website-settings/authentication-settings/authentication-settings.component').then(m => m.AuthenticationSettingsComponent) },
              { path: 'ai-configuration-settings', loadComponent: () => import('./setting/presentation/pages/website-settings/ai-configuration-settings/ai-configuration-settings.component').then(m => m.AiConfigurationSettingsComponent) },
              { path: 'appearance-settings', loadComponent: () => import('./setting/presentation/pages/website-settings/appearance-settings/appearance-settings.component').then(m => m.AppearanceSettingsComponent) },
              { path: 'plugin-manager', loadComponent: () => import('./setting/presentation/pages/website-settings/plugin-manager/plugin-manager.component').then(m => m.PluginManagerComponent) },
            ]
          },
          {
            path: 'app-settings', loadComponent: () => import('./setting/presentation/pages/app-settings/app-settings.component').then(m => m.AppSettingsComponent),
            children: [
              { path: 'invoice-settings', loadComponent: () => import('./setting/presentation/pages/app-settings/invoice-settings/invoice-settings.component').then(m => m.InvoiceSettingsComponent) },
              { path: 'invoice-templates', loadComponent: () => import('./setting/presentation/pages/app-settings/invoice-templates/invoice-templates.component').then(m => m.InvoiceTemplatesComponent) },
              { path: 'esignatures', loadComponent: () => import('./setting/presentation/pages/app-settings/esignatures/esignatures.component').then(m => m.EsignaturesComponent) },
              { path: 'barcode-settings', loadComponent: () => import('./setting/presentation/pages/app-settings/barcode-settings/barcode-settings.component').then(m => m.BarcodeSettingsComponent) },
              { path: 'thermal-printer', loadComponent: () => import('./setting/presentation/pages/app-settings/thermal-printer/thermal-printer.component').then(m => m.ThermalPrinterComponent) },
              { path: 'custom-fields', loadComponent: () => import('./setting/presentation/pages/app-settings/custom-fields/custom-fields.component').then(m => m.CustomFieldsComponent) },
              { path: 'saas-settings', loadComponent: () => import('./setting/presentation/pages/app-settings/saas-settings/saas-settings.component').then(m => m.SaasSettingsComponent) },
            ]
          },
          {
            path: 'finance-settings', loadComponent: () => import('./setting/presentation/pages/finance-settings/finance-settings.component').then(m => m.FinanceSettingsComponent),
            children: [
              { path: 'payment-methods', loadComponent: () => import('./setting/presentation/pages/finance-settings/payment-methods/payment-methods.component').then(m => m.PaymentMethodsComponent) },
              { path: 'bank-accounts-settings', loadComponent: () => import('./setting/presentation/pages/finance-settings/bank-accounts-settings/bank-accounts-settings.component').then(m => m.BankAccountsSettingsComponent) },
              { path: 'tax-rates', loadComponent: () => import('./setting/presentation/pages/finance-settings/tax-rates/tax-rates.component').then(m => m.TaxRatesComponent) },
              { path: 'currencies', loadComponent: () => import('./setting/presentation/pages/finance-settings/currencies/currencies.component').then(m => m.CurrenciesComponent) },
            ]
          },
          {
            path: 'system-settings', loadComponent: () => import('./setting/presentation/pages/system-settings/system-settings.component').then(m => m.SystemSettingsComponent),
            children: [
              { path: 'email-settings', loadComponent: () => import('./setting/presentation/pages/system-settings/email-settings/email-settings.component').then(m => m.EmailSettingsComponent) },
              { path: 'email-templates', loadComponent: () => import('./setting/presentation/pages/system-settings/email-templates/email-templates.component').then(m => m.EmailTemplatesComponent) },
              { path: 'sms-gateways', loadComponent: () => import('./setting/presentation/pages/system-settings/sms-gateways/sms-gateways.component').then(m => m.SmsGatewaysComponent) },
              { path: 'gdpr-cookies', loadComponent: () => import('./setting/presentation/pages/system-settings/gdpr-cookies/gdpr-cookies.component').then(m => m.GdprCookiesComponent) },
            ]
          },
          {
            path: 'other-settings', loadComponent: () => import('./setting/presentation/pages/other-settings/other-settings.component').then(m => m.OtherSettingsComponent),
            children: [
              { path: 'custom-css', loadComponent: () => import('./setting/presentation/pages/other-settings/custom-css/custom-css.component').then(m => m.CustomCssComponent) },
              { path: 'custom-js', loadComponent: () => import('./setting/presentation/pages/other-settings/custom-js/custom-js.component').then(m => m.CustomJsComponent) },
              { path: 'sitemap', loadComponent: () => import('./setting/presentation/pages/other-settings/sitemap/sitemap.component').then(m => m.SitemapComponent) },
              { path: 'clear-cache', loadComponent: () => import('./setting/presentation/pages/other-settings/clear-cache/clear-cache.component').then(m => m.ClearCacheComponent) },
              { path: 'storage', loadComponent: () => import('./setting/presentation/pages/other-settings/storage/storage.component').then(m => m.StorageComponent) },
              { path: 'cronjob', loadComponent: () => import('./setting/presentation/pages/other-settings/cronjob/cronjob.component').then(m => m.CronjobComponent) },
              { path: 'system-backup', loadComponent: () => import('./setting/presentation/pages/other-settings/system-backup/system-backup.component').then(m => m.SystemBackupComponent) },
              { path: 'database-backup', loadComponent: () => import('./setting/presentation/pages/other-settings/database-backup/database-backup.component').then(m => m.DatabaseBackupComponent) },
              { path: 'system-update', loadComponent: () => import('./setting/presentation/pages/other-settings/system-update/system-update.component').then(m => m.SystemUpdateComponent) },
            ]
          },
        ],
      },
      //Layout
      { path: 'notifications', loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent) }
    ],
  }
];
