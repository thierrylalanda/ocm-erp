


import { Routes } from '@angular/router';

export const FEATURES_ROUTES: Routes = [

  //Features Routes//

  {
    path: '', loadComponent: () => import('./features.component').then(m => m.FeaturesComponent),
    children: [
      {
        path: 'index',
        // canActivate: [hasPermissions(['CLIENT_CREATE', 'CLIENT_VALIDATE'], 'AND')],
        loadComponent: () => import('./dashboard/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
      },
      { path: 'admin-dashboard', loadComponent: () => import('./dashboard/admin-dashboard-2/admin-dashboard-2.component').then(m => m.AdminDashboard2Component) },

      //Application//
      {
        path: 'application', loadComponent: () => import('./application/application.component').then(m => m.ApplicationComponent),
        children: [
          { path: 'chat', loadComponent: () => import('./application/chat/chat.component').then(m => m.ChatComponent) },
          { path: 'calender', loadComponent: () => import('./application/calender/calender.component').then(m => m.CalenderComponent) },
          { path: 'email', loadComponent: () => import('./application/email/email.component').then(m => m.EmailComponent) },
          { path: 'email-reply', loadComponent: () => import('./application/email-reply/email-reply.component').then(m => m.EmailReplyComponent) },
          { path: 'todo', loadComponent: () => import('./application/todo/todo.component').then(m => m.TodoComponent) },
          { path: 'notes', loadComponent: () => import('./application/notes/notes.component').then(m => m.NotesComponent) },
          { path: 'social-feed', loadComponent: () => import('./application/social-feed/social-feed.component').then(m => m.SocialFeedComponent) },
          { path: 'file-manager', loadComponent: () => import('./application/file-manager/file-manager.component').then(m => m.FileManagerComponent) },
          { path: 'kanban-view', loadComponent: () => import('./application/kanban-view/kanban-view.component').then(m => m.KanbanViewComponent) },
          { path: 'contacts', loadComponent: () => import('./application/contacts/contacts.component').then(m => m.ContactsComponent) },
          { path: 'invoice', loadComponent: () => import('./application/invoice/invoice.component').then(m => m.InvoiceComponent) },
          { path: 'search-list', loadComponent: () => import('./application/search-list/search-list.component').then(m => m.SearchListComponent) },
          { path: 'todo-list', loadComponent: () => import('./application/todo-list/todo-list.component').then(m => m.TodoListComponent) },
          {
            path: 'calls', loadComponent: () => import('./application/calls/calls.component').then(m => m.CallsComponent),
            children: [
              { path: 'voice-call', loadComponent: () => import('./application/calls/voice-call/voice-call.component').then(m => m.VoiceCallComponent) },
              { path: 'video-call', loadComponent: () => import('./application/calls/video-call/video-call.component').then(m => m.VideoCallComponent) },
              { path: 'outgoing-call', loadComponent: () => import('./application/calls/outgoing-call/outgoing-call.component').then(m => m.OutgoingCallComponent) },
              { path: 'incoming-call', loadComponent: () => import('./application/calls/incoming-call/incoming-call.component').then(m => m.IncomingCallComponent) },
              { path: 'call-history', loadComponent: () => import('./application/calls/call-history/call-history.component').then(m => m.CallHistoryComponent) }
            ]

          }
        ]
      },

      //Super Admin//
      {
        path: 'super-admin', loadComponent: () => import('./super-admin/super-admin.component').then(m => m.SuperAdminComponent),
        children: [
          { path: 'companies', loadComponent: () => import('./super-admin/companies/companies.component').then(m => m.CompaniesComponent) },
          { path: 'subscriptions', loadComponent: () => import('./super-admin/subscription/subscription.component').then(m => m.SubscriptionComponent) },
          { path: 'packages', loadComponent: () => import('./super-admin/packages/packages.component').then(m => m.PackagesComponent) },
          { path: 'domain-request', loadComponent: () => import('./super-admin/domain-request/domain-request.component').then(m => m.DomainRequestComponent) },
          { path: 'domain', loadComponent: () => import('./super-admin/domain/domain.component').then(m => m.DomainComponent) },
          { path: 'purchase-transaction', loadComponent: () => import('./super-admin/purchase-transaction/purchase-transaction.component').then(m => m.PurchaseTransactionComponent) },
          { path: 'dashboard', loadComponent: () => import('./super-admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
          { path: 'plans-list', loadComponent: () => import('./super-admin/plans-list/plans-list.component').then(m => m.PlansListComponent) },
          { path: 'packages-grid', loadComponent: () => import('./super-admin/packages-grid/packages-grid.component').then(m => m.PackagesGridComponent) }
        ]
      },

      //Customers
      {
        path: 'customer', loadComponent: () => import('./customers/customers.component').then((m) => m.CustomersComponent),
        children: [
          { path: 'dashboard', loadComponent: () => import('./customers/dashboard/dashboard.component').then(m => m.DashboardComponent) },
          { path: 'quotations', loadComponent: () => import('./customers/customer-quotations/customer-quotations.component').then(m => m.CustomerQuotationsComponent) },
          { path: 'add-quotations', loadComponent: () => import('./customers/add-quotations/add-quotations.component').then(m => m.AddQuotationsComponent) },
          { path: 'invoices', loadComponent: () => import('./customers/invoices/invoices.component').then(m => m.InvoicesComponent) },
          { path: 'recurring-invoices', loadComponent: () => import('./customers/recurring-invoices/recurring-invoices.component').then(m => m.RecurringInvoicesComponent) },
          { path: 'transactions', loadComponent: () => import('./customers/transactions/transactions.component').then(m => m.TransactionsComponent) },
          { path: 'payment-summary', loadComponent: () => import('./customers/payment-summary/payment-summary.component').then(m => m.PaymentSummaryComponent) },
          { path: 'invoice-report', loadComponent: () => import('./customers/invoice-report/invoice-report.component').then(m => m.InvoiceReportComponent) },
          {
            path: 'settings', loadComponent: () => import('./customers/settings/settings.component').then(m => m.SettingsComponent),
            children: [
              { path: 'account-settings', loadComponent: () => import('./customers/settings/account-settings/account-settings.component').then(m => m.AccountSettingsComponent) },
              { path: 'security-settings', loadComponent: () => import('./customers/settings/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
              { path: 'plans-billing', loadComponent: () => import('./customers/settings/plans-settings/plans-settings.component').then(m => m.PlansSettingsComponent) },
              { path: 'notification-settings', loadComponent: () => import('./customers/settings/notification-settings/notification-settings.component').then(m => m.NotificationSettingsComponent) },
            ]
          },
          { path: 'invoice-details', loadComponent: () => import('./customers/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent) },
        ]
      },

      //Inventroy
      {
        path: 'invoices', loadComponent: () => import('./invantory-sales/invoices/invoices.component').then(m => m.InvoicesComponent),
        children: [
          { path: 'invoice-list', loadComponent: () => import('./invantory-sales/invoices/invoice-list/invoice-list.component').then(m => m.InvoiceListComponent) },
          { path: 'add-invoice', loadComponent: () => import('./invantory-sales/invoices/add-invoice/add-invoice.component').then(m => m.AddInvoiceComponent) },
          { path: 'edit-invoice', loadComponent: () => import('./invantory-sales/invoices/edit-invoice/edit-invoice.component').then(m => m.EditInvoiceComponent) },
          { path: 'invoice-details', loadComponent: () => import('./invantory-sales/invoices/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent) },
          { path: 'recurring-invoices', loadComponent: () => import('./invantory-sales/invoices/recurring-invoices/recurring-invoices.component').then(m => m.RecurringInvoicesComponent) },
          { path: 'invoice-templates', loadComponent: () => import('./invantory-sales/invoices/invoice-templates/invoice-templates.component').then(m => m.InvoiceTemplatesComponent) },
        ]
      },
      {
        path: 'product-service', loadComponent: () => import('./invantory-sales/products-service/products-service.component').then(m => m.ProductsServiceComponent),
        children: [
          { path: 'product-list', loadComponent: () => import('./invantory-sales/products-service/product-list/product-list.component').then(m => m.ProductListComponent) },
          { path: 'category', loadComponent: () => import('./invantory-sales/products-service/category/category.component').then(m => m.CategoryComponent) },
          { path: 'units', loadComponent: () => import('./invantory-sales/products-service/units/units.component').then(m => m.UnitsComponent) },
          { path: 'add-products', loadComponent: () => import('./invantory-sales/products-service/add-products/add-products.component').then(m => m.AddProductsComponent) },
          { path: 'edit-products', loadComponent: () => import('./invantory-sales/products-service/edit-products/edit-products.component').then(m => m.EditProductsComponent) }
        ]
      },
      { path: 'inventory', loadComponent: () => import('./invantory-sales/inventory/inventory.component').then(m => m.InventoryComponent) },
      {
        path: 'credit-notes', loadComponent: () => import('./invantory-sales/credit-notes/credit-notes.component').then(m => m.CreditNotesComponent),
        children: [
          { path: 'add-credit-notes', loadComponent: () => import('./invantory-sales/credit-notes/add-credit-notes/add-credit-notes.component').then(m => m.AddCreditNotesComponent) },
          { path: 'edit-credit-notes', loadComponent: () => import('./invantory-sales/credit-notes/edit-credit-notes/edit-credit-notes.component').then(m => m.EditCreditNotesComponent) },
          { path: 'credit-note-list', loadComponent: () => import('./invantory-sales/credit-notes/credit-note-list/credit-note-list.component').then(m => m.CreditNoteListComponent) }
        ]
      },
      {
        path: 'quotations', loadComponent: () => import('./invantory-sales/quotations/quotations.component').then(m => m.QuotationsComponent),
        children: [
          { path: 'add-quotation', loadComponent: () => import('./invantory-sales/quotations/add-quotation/add-quotation.component').then(m => m.AddQuotationComponent) },
          { path: 'edit-quotation', loadComponent: () => import('./invantory-sales/quotations/edit-quotation/edit-quotation.component').then(m => m.EditQuotationComponent) },
          { path: 'quotation-list', loadComponent: () => import('./invantory-sales/quotations/quotation-list/quotation-list.component').then(m => m.QuotationListComponent) }
        ]
      },
      {
        path: 'customers', loadComponent: () => import('./invantory-sales/customers/customers.component').then(m => m.CustomersComponent),
        children: [
          { path: 'customer-list', loadComponent: () => import('./invantory-sales/customers/customer-list/customer-list.component').then(m => m.CustomerListComponent) },
          { path: 'customer-details', loadComponent: () => import('./invantory-sales/customers/customer-details/customer-details.component').then(m => m.CustomerDetailsComponent) },
          { path: 'add-customer', loadComponent: () => import('./invantory-sales/customers/add-customer/add-customer.component').then(m => m.AddCustomerComponent) },
          { path: 'edit-customer', loadComponent: () => import('./invantory-sales/customers/edit-customer/edit-customer.component').then(m => m.EditCustomerComponent) },
        ]
      },
      {
        path: 'delivery-challans', loadComponent: () => import('./invantory-sales/delivery-challans/delivery-challans.component').then(m => m.DeliveryChallansComponent),
        children: [
          { path: 'delivery-challan-list', loadComponent: () => import('./invantory-sales/delivery-challans/delivery-challan-list/delivery-challan-list.component').then(m => m.DeliveryChallanListComponent) },
          { path: 'add-delivery-challan', loadComponent: () => import('./invantory-sales/delivery-challans/add-delivery-challan/add-delivery-challan.component').then(m => m.AddDeliveryChallanComponent) },
          { path: 'edit-delivery-challan', loadComponent: () => import('./invantory-sales/delivery-challans/edit-delivery-challan/edit-delivery-challan.component').then(m => m.EditDeliveryChallanComponent) },
        ]
      },

      //Purchase
      {
        path: 'purchases', loadComponent: () => import('./purchases/purchases/purchases.component').then(m => m.PurchasesComponent),
        children: [
          { path: 'purchase-list', loadComponent: () => import('./purchases/purchases/purchase-list/purchase-list.component').then(m => m.PurchaseListComponent) },
          { path: 'add-purchase', loadComponent: () => import('./purchases/purchases/add-purchase/add-purchase.component').then(m => m.AddPurchaseComponent) },
          { path: 'edit-purchase', loadComponent: () => import('./purchases/purchases/edit-purchase/edit-purchase.component').then(m => m.EditPurchaseComponent) }
        ]
      },
      {
        path: 'purchase-orders', loadComponent: () => import('./purchases/purchase-orders/purchase-orders.component').then(m => m.PurchaseOrdersComponent),
        children: [
          { path: 'add-purchases-orders', loadComponent: () => import('./purchases/purchase-orders/add-purchases-orders/add-purchases-orders.component').then(m => m.AddPurchasesOrdersComponent) },
          { path: 'edit-purchases-orders', loadComponent: () => import('./purchases/purchase-orders/edit-purchases-orders/edit-purchases-orders.component').then(m => m.EditPurchasesOrdersComponent) },
          { path: 'purchases-order-list', loadComponent: () => import('./purchases/purchase-orders/purchases-order-list/purchases-order-list.component').then(m => m.PurchasesOrderListComponent) }
        ]
      },
      {
        path: 'debit-notes', loadComponent: () => import('./purchases/debit-notes/debit-notes.component').then(m => m.DebitNotesComponent),
        children: [
          { path: 'add-debit-notes', loadComponent: () => import('./purchases/debit-notes/add-debit-notes/add-debit-notes.component').then(m => m.AddDebitNotesComponent) },
          { path: 'edit-debit-notes', loadComponent: () => import('./purchases/debit-notes/edit-debit-notes/edit-debit-notes.component').then(m => m.EditDebitNotesComponent) },
          { path: 'debit-note-list', loadComponent: () => import('./purchases/debit-notes/debit-note-list/debit-note-list.component').then(m => m.DebitNoteListComponent) }
        ]
      },
      { path: 'suppliers', loadComponent: () => import('./purchases/suppliers/suppliers.component').then(m => m.SuppliersComponent) },
      { path: 'supplier-payments', loadComponent: () => import('./purchases/supplier-payments/supplier-payments.component').then(m => m.SupplierPaymentsComponent) },

      //Finance
      { path: 'expense', loadComponent: () => import('./finance/expense/expense.component').then(m => m.ExpenseComponent) },
      { path: 'incomes', loadComponent: () => import('./finance/incomes/incomes.component').then(m => m.IncomesComponent) },
      { path: 'payments', loadComponent: () => import('./finance/payments/payments.component').then(m => m.PaymentsComponent) },
      { path: 'transactions', loadComponent: () => import('./finance/transactions/transactions.component').then(m => m.TransactionsComponent) },
      {
        path: 'bank-accounts', loadComponent: () => import('./finance/bank-accounts/bank-accounts.component').then(m => m.BankAccountsComponent),
        children: [
          { path: 'bank-accounts-type', loadComponent: () => import('./finance/bank-accounts/bank-accounts-type/bank-accounts-type.component').then(m => m.BankAccountsTypeComponent) },
          { path: 'bank-accounts-list', loadComponent: () => import('./finance/bank-accounts/bank-accounts-list/bank-accounts-list.component').then(m => m.BankAccountsListComponent) }
        ]
      },
      { path: 'money-transfer', loadComponent: () => import('./finance/money-transfer/money-transfer.component').then(m => m.MoneyTransferComponent) },

      //Manage
      {
        path: 'manage-users', loadComponent: () => import('./manage/manage-users/manage-users.component').then(m => m.ManageUsersComponent),
        children: [
          { path: 'users', loadComponent: () => import('./manage/manage-users/users/users.component').then(m => m.UsersComponent) },
          { path: 'roles-permissions', loadComponent: () => import('./manage/manage-users/roles-permissions/roles-permissions.component').then(m => m.RolesPermissionsComponent) },
          { path: 'permission/:roleId', loadComponent: () => import('./manage/manage-users/permission/permission.component').then(m => m.PermissionComponent) },
          { path: 'delete-account-request', loadComponent: () => import('./manage/manage-users/delete-account-request/delete-account-request.component').then(m => m.DeleteAccountRequestComponent) }
        ]
      },
      {
        path: 'membership', loadComponent: () => import('./manage/membership/membership.component').then(m => m.MembershipComponent),
        children: [
          { path: 'membership-plans', loadComponent: () => import('./manage/membership/membership-plans/membership-plans.component').then(m => m.MembershipPlansComponent) },
          { path: 'membership-addons', loadComponent: () => import('./manage/membership/membership-addons/membership-addons.component').then(m => m.MembershipAddonsComponent) },
          { path: 'subscribers', loadComponent: () => import('./manage/membership/subscribers/subscribers.component').then(m => m.SubscribersComponent) },
          { path: 'membership-transactions', loadComponent: () => import('./manage/membership/membership-transactions/membership-transactions.component').then(m => m.MembershipTransactionsComponent) }
        ]
      },
      { path: 'contact-messages', loadComponent: () => import('./manage/contact-messages/contact-messages.component').then(m => m.ContactMessagesComponent) },
      {
        path: 'tickets', loadComponent: () => import('./manage/tickets/tickets.component').then(m => m.TicketsComponent),
        children: [
          { path: 'ticket-list', loadComponent: () => import('./manage/tickets/tickets-list/tickets-list.component').then(m => m.TicketsListComponent) },
          { path: 'ticket-kanban', loadComponent: () => import('./manage/tickets/ticket-kanban/ticket-kanban.component').then(m => m.TicketKanbanComponent) },
          { path: 'ticket-details', loadComponent: () => import('./manage/tickets/ticket-details/ticket-details.component').then(m => m.TicketDetailsComponent) },
          { path: 'ticket-lists', loadComponent: () => import('./manage/tickets/ticket-lists/ticket-lists.component').then(m => m.TicketListsComponent) }
        ]
      },

      //Reports
      {
        path: 'reports', loadComponent: () => import('./reports/reports.component').then((m) => m.ReportsComponent),
        children: [
          {
            path: 'item-report', loadComponent: () => import('./reports/item-report/item-report.component').then(m => m.ItemReportComponent),
            children: [
              { path: 'stock-summary', loadComponent: () => import('./reports/item-report/stock-summary/stock-summary.component').then(m => m.StockSummaryComponent) },
              { path: 'inventory-report', loadComponent: () => import('./reports/item-report/inventory-report/inventory-report.component').then(m => m.InventoryReportComponent) },
              { path: 'best-seller', loadComponent: () => import('./reports/item-report/best-seller/best-seller.component').then(m => m.BestSellerComponent) },
              { path: 'low-stock', loadComponent: () => import('./reports/item-report/low-stock/low-stock.component').then(m => m.LowStockComponent) },
              { path: 'stock-history', loadComponent: () => import('./reports/item-report/stock-history/stock-history.component').then(m => m.StockHistoryComponent) },
              { path: 'sold-stock', loadComponent: () => import('./reports/item-report/sold-stock/sold-stock.component').then(m => m.SoldStockComponent) },
            ]
          },
          {
            path: 'finance-reports', loadComponent: () => import('./reports/finance-reports/finance-reports.component').then(m => m.FinanceReportsComponent),
            children: [
              { path: 'payment-summary', loadComponent: () => import('./reports/finance-reports/payment-summary/payment-summary.component').then(m => m.PaymentSummaryComponent) },
              { path: 'tax-report', loadComponent: () => import('./reports/finance-reports/tax-report/tax-report.component').then(m => m.TaxReportComponent) },
            ]
          },
          {
            path: 'user-reports', loadComponent: () => import('./reports/user-reports/user-reports.component').then(m => m.UserReportsComponent),
            children: [
              { path: 'customer-due-reports', loadComponent: () => import('./reports/user-reports/customer-due-reports/customer-due-reports.component').then(m => m.CustomerDueReportsComponent) },
              { path: 'supplier-reports', loadComponent: () => import('./reports/user-reports/supplier-reports/supplier-reports.component').then(m => m.SupplierReportsComponent) },
              { path: 'customers-report', loadComponent: () => import('./reports/user-reports/customers-report/customers-report.component').then(m => m.CustomersReportComponent) },
            ]
          },
          {
            path: 'transaction-report', loadComponent: () => import('./reports/transaction-report/transaction-report.component').then(m => m.TransactionReportComponent),
            children: [
              { path: 'sales-report', loadComponent: () => import('./reports/transaction-report/sales-report/sales-report.component').then(m => m.SalesReportComponent) },
              { path: 'sales-returns', loadComponent: () => import('./reports/transaction-report/sales-returns/sales-returns.component').then(m => m.SalesReturnsComponent) },
              { path: 'sales-orders', loadComponent: () => import('./reports/transaction-report/sales-orders/sales-orders.component').then(m => m.SalesOrdersComponent) },
              { path: 'purchases-report', loadComponent: () => import('./reports/transaction-report/purchases-report/purchases-report.component').then(m => m.PurchasesReportComponent) },
              { path: 'purchase-return-report', loadComponent: () => import('./reports/transaction-report/purchase-return-report/purchase-return-report.component').then(m => m.PurchaseReturnReportComponent) },
              { path: 'quotation-report', loadComponent: () => import('./reports/transaction-report/quotation-report/quotation-report.component').then(m => m.QuotationReportComponent) },
              { path: 'purchase-orders-reports', loadComponent: () => import('./reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component').then(m => m.PurchaseOrdersReportsComponent) },
            ]
          },
          {
            path: 'accounting-report', loadComponent: () => import('./reports/accounting-report/accounting-report.component').then(m => m.AccountingReportComponent),
            children: [
              { path: 'expense-report', loadComponent: () => import('./reports/accounting-report/expense-report/expense-report.component').then(m => m.ExpenseReportComponent) },
              { path: 'income-report', loadComponent: () => import('./reports/accounting-report/income-report/income-report.component').then(m => m.IncomeReportComponent) },
              { path: 'profit-loss-report', loadComponent: () => import('./reports/accounting-report/profit-loss-report/profit-loss-report.component').then(m => m.ProfitLossReportComponent) },
              { path: 'annual-report', loadComponent: () => import('./reports/accounting-report/annual-report/annual-report.component').then(m => m.AnnualReportComponent) },
              { path: 'balance-sheet', loadComponent: () => import('./reports/accounting-report/balance-sheet/balance-sheet.component').then(m => m.BalanceSheetComponent) },
              { path: 'trial-balance', loadComponent: () => import('./reports/accounting-report/trial-balance/trial-balance.component').then(m => m.TrialBalanceComponent) },
              { path: 'cash-flow', loadComponent: () => import('./reports/accounting-report/cash-flow/cash-flow.component').then(m => m.CashFlowComponent) },
              { path: 'account-statement', loadComponent: () => import('./reports/accounting-report/account-statement/account-statement.component').then(m => m.AccountStatementComponent) },
            ]
          },
        ]
      },




      //Content
      { path: 'pages', loadComponent: () => import('./content/pages/pages.component').then(m => m.PagesComponent) },
      {
        path: 'blogs', loadComponent: () => import('./content/blogs/blogs.component').then(m => m.BlogsComponent),
        children: [
          { path: 'all-blogs', loadComponent: () => import('./content/blogs/all-blogs/all-blogs.component').then(m => m.AllBlogsComponent) },
          { path: 'blog-tags', loadComponent: () => import('./content/blogs/blog-tags/blog-tags.component').then(m => m.BlogTagsComponent) },
          { path: 'blog-categories', loadComponent: () => import('./content/blogs/blog-categories/blog-categories.component').then(m => m.BlogCategoriesComponent) },
          { path: 'blog-comments', loadComponent: () => import('./content/blogs/blog-comments/blog-comments.component').then(m => m.BlogCommentsComponent) },
          { path: 'add-blogs', loadComponent: () => import('./content/blogs/add-blogs/add-blogs.component').then(m => m.AddBlogsComponent) },
          { path: 'edit-blogs', loadComponent: () => import('./content/blogs/edit-blogs/edit-blogs.component').then(m => m.EditBlogsComponent) },
          { path: 'blog-details', loadComponent: () => import('./content/blogs/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) }
        ]
      },
      {
        path: 'location', loadComponent: () => import('./content/location/location.component').then(m => m.LocationComponent),
        children: [
          { path: 'cities', loadComponent: () => import('./content/location/cities/cities.component').then(m => m.CitiesComponent) },
          { path: 'states', loadComponent: () => import('./content/location/states/states.component').then(m => m.StatesComponent) },
          { path: 'countries', loadComponent: () => import('./content/location/countries/countries.component').then(m => m.CountriesComponent) }
        ]
      },
      { path: 'testimonials', loadComponent: () => import('./content/testimonials/testimonials.component').then(m => m.TestimonialsComponent) },
      { path: 'faq', loadComponent: () => import('./content/faq/faq.component').then(m => m.FaqComponent) },

      //pages
      { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
      { path: 'starter', loadComponent: () => import('./pages/starter/starter.component').then(m => m.StarterComponent) },
      { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
      { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent) },
      { path: 'timeline', loadComponent: () => import('./pages/timeline/timeline.component').then(m => m.TimelineComponent) },
      { path: 'api-keys', loadComponent: () => import('./pages/api-keys/api-keys.component').then(m => m.ApiKeysComponent) },
      { path: 'privacy-policy', loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
      { path: 'terms-condition', loadComponent: () => import('./pages/terms-condition/terms-condition.component').then(m => m.TermsConditionComponent) },





      //UI Interface
      {
        path: 'base-ui', loadComponent: () => import('./ui-interface/base-ui/base-ui.component').then(m => m.BaseUIComponent),
        children: [
          { path: 'alert', loadComponent: () => import('./ui-interface/base-ui/alerts/alerts.component').then(m => m.AlertsComponent) },
          { path: 'accordions', loadComponent: () => import('./ui-interface/base-ui/accordions/accordions.component').then(m => m.AccordionsComponent) },
          { path: 'avatar', loadComponent: () => import('./ui-interface/base-ui/avatar/avatar.component').then(m => m.AvatarComponent) },
          { path: 'badges', loadComponent: () => import('./ui-interface/base-ui/badges/badges.component').then(m => m.BadgesComponent) },
          { path: 'buttons', loadComponent: () => import('./ui-interface/base-ui/buttons/buttons.component').then(m => m.ButtonsComponent) },
          { path: 'button-group', loadComponent: () => import('./ui-interface/base-ui/button-group/button-group.component').then(m => m.ButtonGroupComponent) },
          { path: 'breadcrumb', loadComponent: () => import('./ui-interface/base-ui/breadcrumb/breadcrumb.component').then(m => m.BreadcrumbComponent) },
          { path: 'cards', loadComponent: () => import('./ui-interface/base-ui/cards/cards.component').then(m => m.CardsComponent) },
          { path: 'carousel', loadComponent: () => import('./ui-interface/base-ui/carousel/carousel.component').then(m => m.CarouselComponent) },
          { path: 'drop-down', loadComponent: () => import('./ui-interface/base-ui/dropdowns/dropdowns.component').then(m => m.DropdownsComponent) },
          { path: 'grid', loadComponent: () => import('./ui-interface/base-ui/grid/grid.component').then(m => m.GridComponent) },
          { path: 'images', loadComponent: () => import('./ui-interface/base-ui/images/images.component').then(m => m.ImagesComponent) },
          { path: 'modal', loadComponent: () => import('./ui-interface/base-ui/modals/modals.component').then(m => m.ModalsComponent) },
          { path: 'offcanvas', loadComponent: () => import('./ui-interface/base-ui/offcanvas/offcanvas.component').then(m => m.OffcanvasComponent) },
          { path: 'pagination', loadComponent: () => import('./ui-interface/base-ui/pagination/pagination.component').then(m => m.PaginationComponent) },
          { path: 'placeholder', loadComponent: () => import('./ui-interface/base-ui/placeholders/placeholders.component').then(m => m.PlaceholdersComponent) },
          { path: 'popover', loadComponent: () => import('./ui-interface/base-ui/popover/popover.component').then(m => m.PopoverComponent) },
          { path: 'progress-bars', loadComponent: () => import('./ui-interface/base-ui/progress-bars/progress-bars.component').then(m => m.ProgressBarsComponent) },
          { path: 'spinner', loadComponent: () => import('./ui-interface/base-ui/spinner/spinner.component').then(m => m.SpinnerComponent) },
          { path: 'tabs', loadComponent: () => import('./ui-interface/base-ui/tabs/tabs.component').then(m => m.TabsComponent) },
          { path: 'toasts', loadComponent: () => import('./ui-interface/base-ui/toasts/toasts.component').then(m => m.ToastsComponent) },
          { path: 'tooltip', loadComponent: () => import('./ui-interface/base-ui/tooltip/tooltip.component').then(m => m.TooltipComponent) },
          { path: 'typography', loadComponent: () => import('./ui-interface/base-ui/typography/typography.component').then(m => m.TypographyComponent) },
          { path: 'collapse', loadComponent: () => import('./ui-interface/base-ui/collapse/collapse.component').then(m => m.CollapseComponent) },
          { path: 'ratio', loadComponent: () => import('./ui-interface/base-ui/ratio/ratio.component').then(m => m.RatioComponent) },
          { path: 'links', loadComponent: () => import('./ui-interface/base-ui/links/links.component').then(m => m.LinksComponent) },
          { path: 'list-group', loadComponent: () => import('./ui-interface/base-ui/list-group/list-group.component').then(m => m.ListGroupComponent) },
          { path: 'utilities', loadComponent: () => import('./ui-interface/base-ui/utlities/utlities.component').then(m => m.UtlitiesComponent) },
        ]
      },
      {
        path: 'advanced-ui', loadComponent: () => import('./ui-interface/advanced-ui/advanced-ui.component').then(m => m.AdvancedUiComponent),
        children: [
          { path: 'clipboards', loadComponent: () => import('./ui-interface/advanced-ui/clipboards/clipboards.component').then(m => m.ClipboardsComponent) },
          { path: 'drag-drop', loadComponent: () => import('./ui-interface/advanced-ui/drap-drop/drap-drop.component').then(m => m.DrapDropComponent) },
          { path: 'rating', loadComponent: () => import('./ui-interface/advanced-ui/rating/rating.component').then(m => m.RatingComponent) },
          { path: 'text-editor', loadComponent: () => import('./ui-interface/advanced-ui/text-editor/text-editor.component').then(m => m.TextEditorComponent) },
          { path: 'counter', loadComponent: () => import('./ui-interface/advanced-ui/counter/counter.component').then(m => m.CounterComponent) },
          { path: 'scrollbar', loadComponent: () => import('./ui-interface/advanced-ui/scrollbar/scrollbar.component').then(m => m.ScrollbarComponent) },
          { path: 'light-box', loadComponent: () => import('./ui-interface/advanced-ui/lightbox/lightbox.component').then(m => m.LightboxComponent) },
          { path: 'range-slider', loadComponent: () => import('./ui-interface/advanced-ui/rangeslider/rangeslider.component').then(m => m.RangesliderComponent) },
        ]
      },
      {
        path: 'maps', loadComponent: () => import('./ui-interface/maps/maps.component').then(m => m.MapsComponent),
        children: [
          { path: 'leaflets', loadComponent: () => import('./ui-interface/maps/leaflet/leaflet.component').then(m => m.LeafletComponent) }
        ]
      },
      {
        path: 'tables', loadComponent: () => import('./ui-interface/tables/tables.component').then(m => m.TablesComponent),
        children: [
          { path: 'data-table', loadComponent: () => import('./ui-interface/tables/data-tables/data-tables.component').then(m => m.DataTablesComponent) },
          { path: 'basic', loadComponent: () => import('./ui-interface/tables/basic-tables/basic-tables.component').then(m => m.BasicTablesComponent) },
        ]
      },
      {
        path: 'icon', loadComponent: () => import('./ui-interface/icon/icon.component').then(m => m.IconComponent),
        children: [
          { path: 'fontawesome', loadComponent: () => import('./ui-interface/icon/fontawesome/fontawesome.component').then(m => m.FontawesomeComponent) },
          { path: 'feather', loadComponent: () => import('./ui-interface/icon/feathers/feathers.component').then(m => m.FeathersComponent) },
          { path: 'ionic', loadComponent: () => import('./ui-interface/icon/ionic/ionic.component').then(m => m.IonicComponent) },
          { path: 'material', loadComponent: () => import('./ui-interface/icon/material/material.component').then(m => m.MaterialComponent) },
          { path: 'pe7', loadComponent: () => import('./ui-interface/icon/pe7/pe7.component').then(m => m.Pe7Component) },
          { path: 'simple-line', loadComponent: () => import('./ui-interface/icon/simpline/simpline.component').then(m => m.SimplineComponent) },
          { path: 'themify', loadComponent: () => import('./ui-interface/icon/themify/themify.component').then(m => m.ThemifyComponent) },
          { path: 'typicon', loadComponent: () => import('./ui-interface/icon/typicon/typicon.component').then(m => m.TypiconComponent) },
          { path: 'weather', loadComponent: () => import('./ui-interface/icon/weather/weather.component').then(m => m.WeatherComponent) },
          { path: 'flag', loadComponent: () => import('./ui-interface/icon/flag/flag.component').then(m => m.FlagComponent) },
        ]
      },
      {
        path: 'forms', loadComponent: () => import('./ui-interface/forms/forms.component').then(m => m.FormsComponent),
        children: [
          { path: 'basic-inputs', loadComponent: () => import('./ui-interface/forms/basic-inputs/basic-inputs.component').then(m => m.BasicInputsComponent) },
          { path: 'horizontal-form', loadComponent: () => import('./ui-interface/forms/horizontal-form/horizontal-form.component').then(m => m.HorizontalFormComponent) },
          { path: 'vertical-form', loadComponent: () => import('./ui-interface/forms/vertical-form/vertical-form.component').then(m => m.VerticalFormComponent) },
          { path: 'form-mask', loadComponent: () => import('./ui-interface/forms/form-mask/form-mask.component').then(m => m.FormMaskComponent) },
          { path: 'form-validation', loadComponent: () => import('./ui-interface/forms/form-validation/form-validation.component').then(m => m.FormValidationComponent) },
          { path: 'input-groups', loadComponent: () => import('./ui-interface/forms/input-groups/input-groups.component').then(m => m.InputGroupsComponent) },
          { path: 'file-upload', loadComponent: () => import('./ui-interface/forms/form-fileupload/form-fileupload.component').then(m => m.FormFileuploadComponent) },
          { path: 'form-checkbox-radios', loadComponent: () => import('./ui-interface/forms/form-checkbox-radios/form-checkbox-radios.component').then(m => m.FormCheckboxRadiosComponent) },
          { path: 'form-grid-gutters', loadComponent: () => import('./ui-interface/forms/form-grid-gutters/form-grid-gutters.component').then(m => m.FormGridGuttersComponent) },
          { path: 'form-pickers', loadComponent: () => import('./ui-interface/forms/form-pickers/form-pickers.component').then(m => m.FormPickersComponent) },
        ]
      },
      {
        path: 'chart', loadComponent: () => import('./ui-interface/charts/charts.component').then(m => m.ChartsComponent),
        children: [
          { path: 'apex-charts', loadComponent: () => import('./ui-interface/charts/apexcharts/apexcharts.component').then(m => m.ApexchartsComponent) },
          { path: 'prime-ng', loadComponent: () => import('./ui-interface/charts/prime-ng/prime-ng.component').then(m => m.PrimeNgComponent) },
        ]
      },

      //Layout
      { path: 'layout-default', loadComponent: () => import('./dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
      { path: 'layout-single', loadComponent: () => import('./dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
      { path: 'layout-rtl', loadComponent: () => import('./dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
      { path: 'layout-mini', loadComponent: () => import('./dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
      { path: 'layout-transparent', loadComponent: () => import('./dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
      { path: 'layout-without-header', loadComponent: () => import('./dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
      { path: 'layout-boxed', loadComponent: () => import('./dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
      { path: 'layout-dark', loadComponent: () => import('./dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
      { path: 'notifications', loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent) }




    ]
  },
  {
    path: 'invoice-modals', loadComponent: () => import('./invoice-modals/invoice-modals.component').then(m => m.InvoiceModalsComponent),
    children: [
      { path: 'general-invoice-1', loadComponent: () => import('./invoice-modals/general-invoice-1/general-invoice-1.component').then(m => m.GeneralInvoice1Component) },
      { path: 'general-invoice-2', loadComponent: () => import('./invoice-modals/general-invoice-2/general-invoice-2.component').then(m => m.GeneralInvoice2Component) },
      { path: 'general-invoice-3', loadComponent: () => import('./invoice-modals/general-invoice-3/general-invoice-3.component').then(m => m.GeneralInvoice3Component) },
      { path: 'general-invoice-4', loadComponent: () => import('./invoice-modals/general-invoice-4/general-invoice-4.component').then(m => m.GeneralInvoice4Component) },
      { path: 'general-invoice-5', loadComponent: () => import('./invoice-modals/general-invoice-5/general-invoice-5.component').then(m => m.GeneralInvoice5Component) },
      { path: 'general-invoice-6', loadComponent: () => import('./invoice-modals/general-invoice-6/general-invoice-6.component').then(m => m.GeneralInvoice6Component) },
      { path: 'general-invoice-7', loadComponent: () => import('./invoice-modals/general-invoice-7/general-invoice-7.component').then(m => m.GeneralInvoice7Component) },
      { path: 'general-invoice-8', loadComponent: () => import('./invoice-modals/general-invoice-8/general-invoice-8.component').then(m => m.GeneralInvoice8Component) },
      { path: 'general-invoice-9', loadComponent: () => import('./invoice-modals/general-invoice-9/general-invoice-9.component').then(m => m.GeneralInvoice9Component) },
      { path: 'general-invoice-10', loadComponent: () => import('./invoice-modals/general-invoice-10/general-invoice-10.component').then(m => m.GeneralInvoice10Component) },
      { path: 'bus-booking-invoice', loadComponent: () => import('./invoice-modals/bus-booking-invoice/bus-booking-invoice.component').then(m => m.BusBookingInvoiceComponent) },
      { path: 'car-booking-invoice', loadComponent: () => import('./invoice-modals/car-booking-invoice/car-booking-invoice.component').then(m => m.CarBookingInvoiceComponent) },
      { path: 'coffee-shop-invoice', loadComponent: () => import('./invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component').then(m => m.CoffeeShopInvoiceComponent) },
      { path: 'domain-hosting-invoice', loadComponent: () => import('./invoice-modals/domain-hosting-invoice/domain-hosting-invoice.component').then(m => m.DomainHostingInvoiceComponent) },
      { path: 'ecommerce-invoice', loadComponent: () => import('./invoice-modals/ecommerce-invoice/ecommerce-invoice.component').then(m => m.EcommerceInvoiceComponent) },
      { path: 'fitness-center-invoice', loadComponent: () => import('./invoice-modals/fitness-center-invoice/fitness-center-invoice.component').then(m => m.FitnessCenterInvoiceComponent) },
      { path: 'flight-booking-invoice', loadComponent: () => import('./invoice-modals/flight-booking-invoice/flight-booking-invoice.component').then(m => m.FlightBookingInvoiceComponent) },
      { path: 'hotel-booking-invoice', loadComponent: () => import('./invoice-modals/hotel-booking-invoice/hotel-booking-invoice.component').then(m => m.HotelBookingInvoiceComponent) },
      { path: 'internet-billing-invoice', loadComponent: () => import('./invoice-modals/internet-billing-invoice/internet-billing-invoice.component').then(m => m.InternetBillingInvoiceComponent) },
      { path: 'invoice-medical', loadComponent: () => import('./invoice-modals/invoice-medical/invoice-medical.component').then(m => m.InvoiceMedicalComponent) },
      { path: 'money-exchange-invoice', loadComponent: () => import('./invoice-modals/money-exchange-invoice/money-exchange-invoice.component').then(m => m.MoneyExchangeInvoiceComponent) },
      { path: 'movie-ticket-booking-invoice', loadComponent: () => import('./invoice-modals/movie-ticket-booking-invoice/movie-ticket-booking-invoice.component').then(m => m.MovieTicketBookingInvoiceComponent) },
      { path: 'restaurants-invoice', loadComponent: () => import('./invoice-modals/restaurants-invoice/restaurants-invoice.component').then(m => m.RestaurantsInvoiceComponent) },
      { path: 'student-billing-invoice', loadComponent: () => import('./invoice-modals/student-billing-invoice/student-billing-invoice.component').then(m => m.StudentBillingInvoiceComponent) },
      { path: 'train-ticket-invoice', loadComponent: () => import('./invoice-modals/train-ticket-invoice/train-ticket-invoice.component').then(m => m.TrainTicketInvoiceComponent) },
      { path: 'receipt-invoice-1', loadComponent: () => import('./invoice-modals/receipt-invoice-1/receipt-invoice-1.component').then(m => m.ReceiptInvoice1Component) },
      { path: 'receipt-invoice-2', loadComponent: () => import('./invoice-modals/receipt-invoice-2/receipt-invoice-2.component').then(m => m.ReceiptInvoice2Component) },
      { path: 'receipt-invoice-3', loadComponent: () => import('./invoice-modals/receipt-invoice-3/receipt-invoice-3.component').then(m => m.ReceiptInvoice3Component) },
      { path: 'receipt-invoice-', loadComponent: () => import('./invoice-modals/receipt-invoice-4/receipt-invoice-4.component').then(m => m.ReceiptInvoice4Component) },
    ]
  },
  { path: 'coming-soon', loadComponent: () => import('./pages/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent), },
  { path: 'under-maintenance', loadComponent: () => import('./pages/under-maintenance/under-maintenance.component').then((m) => m.UnderMaintenanceComponent) },
  { path: 'under-construction', loadComponent: () => import('./pages/under-construction/under-construction.component').then((m) => m.UnderConstructionComponent) },
  {
    path: 'error', loadComponent: () => import('../error/error.component').then((m) => m.ErrorComponent),
    children: [
      { path: 'error-404', loadComponent: () => import('../error/error-404/error-404.component').then((m) => m.Error404Component) },
      { path: 'error-500', loadComponent: () => import('../error/error-500/error-500.component').then((m) => m.Error500Component) },
    ]
  },
  {
    path: '**',
    redirectTo: '/error/error-404',
    pathMatch: 'full'
  }

] as const;
