import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-AWXYRVJS.js";
import {
  Router
} from "./chunk-WOBWH5QA.js";
import {
  DomSanitizer
} from "./chunk-KYBWVUSB.js";
import {
  HttpClient
} from "./chunk-ZCJVS2AD.js";
import {
  NgIf
} from "./chunk-LNSVVXVJ.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Observable,
  RendererFactory2,
  SecurityContext,
  Subject,
  catchError,
  inject,
  makeEnvironmentProviders,
  map,
  of,
  setClassMetadata,
  signal,
  tap,
  throwError,
  timeout,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-HKG6HBOI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/helpers/routes/routes.ts
var defaultRoute = "/app/";
var routes = {
  layoutDirection: void 0,
  Url: "",
  rtl: void 0,
  adminDashboard: void 0,
  // Authentication
  login: "/auth/login",
  forgot_password: "/auth/forgot-password",
  register: "/auth/register",
  emailVerification: "/auth/email-verification",
  twoStepVerification: "/auth/two-step-verification",
  resetPassword: "/auth/reset-password",
  success: "/auth/success",
  lock_screen: "/auth/lock-screen",
  index: "/index",
  AdminDashboard2: "/admin-dashboard",
  notifications: defaultRoute + "notifications",
  //configuration
  configSociete: defaultRoute + "societe",
  //Manage user 
  usersList: defaultRoute + "manage-users/users",
  rolePermissions: defaultRoute + "manage-users/roles-permissions",
  manageAllUsers: defaultRoute + "manage-users",
  allUsers: defaultRoute + "manage-users/users",
  permissions: defaultRoute + "manage-users/permission",
  //deleteAccountRequest: '/manage-users/delete-account-request',
  // Customer Module
  customerDashboard: "/customer/dashboard",
  customerQuotations: "/customer/quotations",
  customeraddQuotations: "/customer/add-quotations",
  customereditQuotations: "/customer/edit-quotations",
  customerInvoices: "/customer/invoices",
  customerRecurringInvoices: "/customer/recurring-invoices",
  customerTransactions: "/customer/transactions",
  customerPaymentSummary: "/customer/payment-summary",
  customerInvoicereport: "/customer/invoice-report",
  customerSettings: "/customer/settings",
  customerAccountsettings: "/customer/settings/account-settings",
  customerSecuritysettings: "/customer/settings/security-settings",
  customerPlanssettings: "/customer/settings/plans-billing",
  customerNotificationsettings: "/customer/settings/notification-settings",
  customerInvoiceDetails: "/customer/invoice-details",
  activecustomer: "/customer/active-customers",
  deactivecustomer: "/customer/deactive-customers",
  // UI Components
  baseUi: "/base-ui",
  blankPage: "/blank-page",
  alert: "/base-ui/alert",
  accordions: "/base-ui/accordions",
  avatar: "/base-ui/avatar",
  badges: "/base-ui/badges",
  buttons: "/base-ui/buttons",
  buttonGroup: "/base-ui/button-group",
  breadcrumb: "/base-ui/breadcrumb",
  cards: "/base-ui/cards",
  carousel: "/base-ui/carousel",
  collapse: "/base-ui/collapse",
  dropDown: "/base-ui/drop-down",
  ratio: "/base-ui/ratio",
  links: "/base-ui/links",
  listGroup: "/base-ui/list-group",
  grid: "/base-ui/grid",
  images: "/base-ui/images",
  lightBox: "/advanced-ui/light-box",
  modal: "/base-ui/modal",
  offcanvas: "/base-ui/offcanvas",
  pagination: "/base-ui/pagination",
  placeholder: "/base-ui/placeholder",
  popover: "/base-ui/popover",
  progressBars: "/base-ui/progress-bars",
  rangeSlider: "/advanced-ui/range-slider",
  spinner: "/base-ui/spinner",
  tabs: "/base-ui/tabs",
  sweetAlert: "/base-ui/sweet-alerts",
  toasts: "/base-ui/toasts",
  tooltip: "/base-ui/tooltip",
  typography: "/base-ui/typography",
  utilities: "/base-ui/utilities",
  advancedUi: "/advanced-ui",
  ribbon: "/advanced-ui/ribbon",
  clipboards: "/advanced-ui/clipboards",
  dragDrop: "/advanced-ui/drag-drop",
  rating: "/advanced-ui/rating",
  textEditor: "/advanced-ui/text-editor",
  counter: "/advanced-ui/counter",
  scrollbar: "/advanced-ui/scrollbar",
  table: "/tables",
  basicTable: "/tables/basic",
  dataTable: "/tables/data-table",
  icon: "/icon",
  fontawesome: "/icon/fontawesome",
  leaftlet: "/maps/leaflets",
  feather: "/icon/feather",
  ionic: "/icon/ionic",
  material: "/icon/material",
  pe7: "/icon/pe7",
  themify: "/icon/themify",
  typicon: "/icon/typicon",
  weather: "/icon/weather",
  simpleLine: "/icon/simple-line",
  flag: "/icon/flag",
  forms: "/forms",
  basicForm: "/forms/basic-inputs",
  checkboxRadios: "/forms/form-checkbox-radios",
  gridGutters: "/forms/form-grid-gutters",
  horizontalForm: "/forms/horizontal-form",
  verticalForm: "/forms/vertical-form",
  formMask: "/forms/form-mask",
  formValidation: "/forms/form-validation",
  inputGroups: "/forms/input-groups",
  fileUpload: "/forms/file-upload",
  chart: "/chart",
  apexChart: "/chart/apex-charts",
  ngTwoCharts: "/chart/ng2-charts",
  primeng: "/chart/prime-ng",
  googleMaps: "/google-maps",
  //Application
  chat: "/application/chat",
  calender: "/application/calender",
  email: "/application/email",
  emailReply: "/application/email-reply",
  todo: "/application/todo",
  todoList: "/application/todo-list",
  notes: "/application/notes",
  socialFeed: "/application/social-feed",
  fileManager: "/application/file-manager",
  kanbanView: "/application/kanban-view",
  contacts: "/application/contacts",
  applicationInvoice: "/application/invoice",
  searchList: "/application/search-list",
  voiceCall: "/application/calls/voice-call",
  videoCall: "/application/calls/video-call",
  outgoingCall: "/application/calls/outgoing-call",
  incomingCall: "/application/calls/incoming-call",
  callHistory: "/application/calls/call-history",
  //Finance and Accounts
  expenses: "/expense",
  incomes: "/incomes",
  payments: "/payments",
  transactions: "/transactions",
  bankAccounts: "/bank-accounts",
  bankAccountList: "/bank-accounts/bank-accounts-list",
  bankAccountsType: "/bank-accounts/bank-accounts-type",
  moneyTransfer: "/money-transfer",
  //Manage
  manageUsers: "/manage-users",
  users: "/manage-users/users",
  rolesPermissions: "/manage-users/roles-permissions",
  permission: "/manage-users/permission",
  deleteAccountRequest: "/manage-users/delete-account-request",
  //Membership
  membership: "/membership",
  membershipPlans: "/membership/membership-plans",
  membershipAddons: "/membership/membership-addons",
  subscribers: "/membership/subscribers",
  membershipTransactions: "/membership/membership-transactions",
  contactMessages: "/contact-messages",
  tickets: "/tickets",
  ticketList: "/tickets/ticket-list",
  ticketLists: "/tickets/ticket-lists",
  ticketKanban: "/tickets/ticket-kanban",
  ticketDetails: "/tickets/ticket-details",
  items: "/items",
  invoiceItems: "/items/invoice-items",
  allInventory: "/inventory",
  invoiceItemList: "/items/invoice-list",
  invoiceItemCategory: "/items/invoice-category",
  invoice: "/invoices",
  invoiceList: "/invoices/invoice-list",
  invoiceTemplate: "/invoices/invoice-templates",
  addInvoice: "/invoices/add-invoice",
  editInvoice: "/invoices/edit-invoice",
  invoiceDetails: "/invoices/invoice-details",
  recurringInvoices: "/invoices/recurring-invoices",
  // Credit Notes
  creditNote: "/credit-notes",
  creditNotes: "/credit-notes/credit-note-list",
  addCreditNotes: "/credit-notes/add-credit-notes",
  editCreditNotes: "/credit-notes/edit-credit-notes",
  // Quotations
  quotations: "/quotations",
  quotationList: "/quotations/quotation-list",
  addQuotations: "/quotations/add-quotation",
  editQuotations: "/quotations/edit-quotation",
  // Delivery Challans
  deliveryChallan: "/delivery-challans",
  deliveryChallanList: "/delivery-challans/delivery-challan-list",
  addDeliveryChallan: "/delivery-challans/add-delivery-challan",
  editDeliveryChallan: "/delivery-challans/edit-delivery-challan",
  // Customers
  customers: "/customers",
  customerList: "/customers/customer-list",
  customerDetails: "/customers/customer-details",
  addCustomer: "/customers/add-customer",
  editCustomer: "/customers/edit-customer",
  // Purchases
  purchases: "/purchases",
  purchaseList: "/purchases/purchase-list",
  addPurchase: "/purchases/add-purchase",
  editPurchase: "/purchases/edit-purchase",
  // Purchase Orders
  purchaseOrder: "/purchase-orders",
  purchaseOrderList: "/purchase-orders/purchases-order-list",
  addPurchaseOrder: "/purchase-orders/add-purchases-orders",
  editPurchaseOrder: "/purchase-orders/edit-purchases-orders",
  // Debit Notes
  debitNotes: "/debit-notes",
  debitNoteList: "/debit-notes/debit-note-list",
  addDebitNotes: "/debit-notes/add-debit-notes",
  editDebitNotes: "/debit-notes/edit-debit-notes",
  suppliers: "/suppliers",
  supplierPayments: "/supplier-payments",
  //Report
  stockSummary: "/reports/item-report/stock-summary",
  inventoryReport: "/reports/item-report/inventory-report",
  bestSeller: "/reports/item-report/best-seller",
  lowStock: "/reports/item-report/low-stock",
  stockHistory: "/reports/item-report/stock-history",
  soldStock: "/reports/item-report/sold-stock",
  expenseReport: "/reports/accounting-report/expense-report",
  incomeReport: "/reports/accounting-report/income-report",
  profitlossReport: "/reports/accounting-report/profit-loss-report",
  annualReport: "/reports/accounting-report/annual-report",
  balanceSheet: "/reports/accounting-report/balance-sheet",
  trialBalance: "/reports/accounting-report/trial-balance",
  cashFlow: "/reports/accounting-report/cash-flow",
  accountStatement: "/reports/accounting-report/account-statement",
  paymentSummary: "/reports/finance-reports/payment-summary",
  taxReport: "/reports/finance-reports/tax-report",
  customerReport: "/reports/user-reports/customers-report",
  customerDueReport: "/reports/user-reports/customer-due-reports",
  supplierReport: "/reports/user-reports/supplier-reports",
  salesReport: "/reports/transaction-report/sales-report",
  salesReturns: "/reports/transaction-report/sales-returns",
  salesOrders: "/reports/transaction-report/sales-orders",
  purchasesReport: "/reports/transaction-report/purchases-report",
  purchasesReturnReport: "/reports/transaction-report/purchase-return-report",
  purchasesOrdersReport: "/reports/transaction-report/purchase-orders-reports",
  quotationReport: "/reports/transaction-report/quotation-report",
  //Setting NEW
  accountSettings: defaultRoute + "settings/general-settings/account-settings",
  siteSettings: defaultRoute + "settings/general-settings/site-settings",
  departementSettings: defaultRoute + "settings/general-settings/departement-settings",
  securitySettings: defaultRoute + "settings/general-settings/security-settings",
  plansBillings: defaultRoute + "settings/general-settings/plans-billings",
  notificationSettings: defaultRoute + "settings/general-settings/notifications-settings",
  integrationsSettings: defaultRoute + "settings/general-settings/integrations-settings",
  companySettings: defaultRoute + "settings/website-settings/company-settings",
  localizationSettings: defaultRoute + "settings/website-settings/localization-settings",
  prefixesSettings: defaultRoute + "settings/website-settings/prefixes-settings",
  preferenceSettings: defaultRoute + "settings/website-settings/preference-settings",
  seoSetup: defaultRoute + "settings/website-settings/seo-setup",
  languageSettings: defaultRoute + "settings/website-settings/language-settings",
  languageSettings2: defaultRoute + "settings/website-settings/language-settings2",
  maintenanceMode: defaultRoute + "settings/website-settings/maintenance-mode",
  authenticationSettings: defaultRoute + "settings/website-settings/authentication-settings",
  aiConfigurationSettings: defaultRoute + "settings/website-settings/ai-configuration-settings",
  appearanceSettings: defaultRoute + "settings/website-settings/appearance-settings",
  pluginManager: defaultRoute + "settings/website-settings/plugin-manager",
  invoiceSettings: defaultRoute + "settings/app-settings/invoice-settings",
  invoiceTemplates: defaultRoute + "settings/app-settings/invoice-templates",
  esignatures: defaultRoute + "settings/app-settings/esignatures",
  barcodeSettings: defaultRoute + "settings/app-settings/barcode-settings",
  thermalPrinter: defaultRoute + "settings/app-settings/thermal-printer",
  customFields: defaultRoute + "settings/app-settings/custom-fields",
  saasSettings: defaultRoute + "settings/app-settings/saas-settings",
  paymentMethods: defaultRoute + "settings/finance-settings/payment-methods",
  bankAccountsSettings: defaultRoute + "settings/finance-settings/bank-accounts-settings",
  taxRates: defaultRoute + "settings/finance-settings/tax-rates",
  currencies: defaultRoute + "settings/finance-settings/currencies",
  emailSettings: defaultRoute + "settings/system-settings/email-settings",
  emailTemplates: defaultRoute + "settings/system-settings/email-templates",
  smsGateways: defaultRoute + "settings/system-settings/sms-gateways",
  gdprCookies: defaultRoute + "settings/system-settings/gdpr-cookies",
  customCss: defaultRoute + "settings/other-settings/custom-css",
  customJs: defaultRoute + "settings/other-settings/custom-js",
  sitemap: defaultRoute + "settings/other-settings/sitemap",
  clearCache: defaultRoute + "settings/other-settings/clear-cache",
  storage: defaultRoute + "settings/other-settings/storage",
  cronjob: defaultRoute + "settings/other-settings/cronjob",
  systemBackup: defaultRoute + "settings/other-settings/system-backup",
  databaseBackup: defaultRoute + "settings/other-settings/database-backup",
  systemUpdate: defaultRoute + "settings/other-settings/system-update",
  //Content
  pages: "/pages",
  blogs: "/blogs",
  addBlogs: "/blogs/add-blogs",
  editblogs: "/blogs/edit-blogs",
  allBlogs: "/blogs/all-blogs",
  blogcomments: "/blogs/blog-comments",
  blogtag: "/blogs/blog-tags",
  blogCategories: "/blogs/blog-categories",
  blogDetails: "/blogs/blog-details",
  countries: "/location/countries",
  states: "/location/states",
  cities: "/location/cities",
  testimonials: "/testimonials",
  faq: "/faq",
  //Pages
  profile: "/profile",
  starter: "/starter",
  gallery: "/gallery",
  pricing: "/pricing",
  timelines: "/timeline",
  apiKeys: "/api-keys",
  privacyPolicy: "/privacy-policy",
  termsCondition: "/terms-condition",
  comingSoon: "/coming-soon",
  underMaintenance: "/under-maintenance",
  underConstruction: "/under-construction",
  error404: "/error/error-404",
  error500: "/error/error-500",
  //New General Invoices 
  generalInvoice1: "/invoice-modals/general-invoice-1",
  generalInvoice2: "/invoice-modals/general-invoice-2",
  generalInvoice3: "/invoice-modals/general-invoice-3",
  generalInvoice4: "/invoice-modals/general-invoice-4",
  generalInvoice5: "/invoice-modals/general-invoice-5",
  generalInvoice6: "/invoice-modals/general-invoice-6",
  generalInvoice7: "/invoice-modals/general-invoice-7",
  generalInvoice8: "/invoice-modals/general-invoice-8",
  generalInvoice9: "/invoice-modals/general-invoice-9",
  generalInvoice10: "/invoice-modals/general-invoice-10",
  busBookingInvoice: "/invoice-modals/bus-booking-invoice",
  carBookingInvoice: "/invoice-modals/car-booking-invoice",
  coffeeShopInvoice: "/invoice-modals/coffee-shop-invoice",
  domainHostingInvoice: "/invoice-modals/domain-hosting-invoice",
  ecommerceInvoice: "/invoice-modals/ecommerce-invoice",
  fitnessCenterInvoice: "/invoice-modals/fitness-center-invoice",
  flightBookingInvoice: "/invoice-modals/flight-booking-invoice",
  hotelBookingInvoice: "/invoice-modals/hotel-booking-invoice",
  internetBillingInvoice: "/invoice-modals/internet-billing-invoice",
  invoiceMedical: "/invoice-modals/invoice-medical",
  moneyExchangeInvoice: "/invoice-modals/money-exchange-invoice",
  movieTicketBookingInvoice: "/invoice-modals/movie-ticket-booking-invoice",
  restaurantsInvoice: "/invoice-modals/restaurants-invoice",
  studentBillingInvoice: "/invoice-modals/student-billing-invoice",
  trainTicketInvoice: "/invoice-modals/train-ticket-invoice",
  receiptInvoice1: "/invoice-modals/receipt-invoice-1",
  receiptInvoice2: "/invoice-modals/receipt-invoice-2",
  receiptInvoice3: "/invoice-modals/receipt-invoice-3",
  receiptInvoice4: "/invoice-modals/receipt-invoice-4",
  //
  addProducts: "/product-service/add-products",
  editProducts: "/product-service/edit-products",
  productlist: "/product-service/product-list",
  category: "/product-service/category",
  units: "/product-service/units",
  addunits: "/product-service/add-units",
  editunits: "/product-service/edit-units",
  creditnotepage: "/credit-note-pages",
  creditnotes: "/creditnotepage/credit-notes",
  payonline: "/pay-online",
  mailpayinvoice: "/mail-pay-invoice",
  report: "/report",
  companies: "/super-admin/companies",
  subscriptions: "/super-admin/subscriptions",
  packages: "/super-admin/packages",
  packagesGrid: "/super-admin/packages-grid",
  domainRequest: "/super-admin/domain-request",
  domain: "/super-admin/domain",
  purchaseTransaction: "/super-admin/purchase-transaction",
  superAdminDashboard: "/super-admin/dashboard",
  plansList: "/super-admin/plans-list",
  formpickers: "/forms/form-pickers",
  planBilling: "/settings/plan-billing",
  twoFactor: "/settings/two-factor",
  customField: "/settings/custom-field",
  dataTables: "/tables/data-table",
  deliveryChallansList: "/delivery-challans/list",
  addDeliveryChallans: "/delivery-challans/add-delivery-challans",
  editDeliveryChallans: "/delivery-challans/edit-delivery-challans",
  emailTemplate: "/settings/email-template",
  seoSetting: "/settings/seo-settings",
  sassSetting: "/settings/sass-settings",
  //Layout Pages
  default: "/layout-default",
  single: "/layout-single",
  mini: "/layout-mini",
  transparent: "/layout-transparent",
  withoutHeader: "/layout-without-header",
  Boxed: "/layout-boxed",
  RTL: "/layout-rtl",
  Dark: "/layout-dark"
};

// src/app/features/super-admin/super-admin.route.ts
var SuperAdminRoute = [
  {
    menuValue: "Dashboard",
    hasSubRoute: true,
    showSubRoute: false,
    icon: "element-45",
    base: "index",
    base1: "admin-dashboard",
    subMenus: [
      {
        separateRoute: true,
        menuValue: "Admin Dashboard",
        tittle: "Admin Dashboard",
        route: routes.index,
        icon: "home",
        base: "index",
        showAsTab: false,
        activeMenu: "",
        permissions: []
      },
      {
        separateRoute: true,
        menuValue: "Admin Dashboard 2",
        tittle: "Admin Dashboard 2",
        route: routes.AdminDashboard2,
        icon: "home",
        base: "admin-dashboard",
        showAsTab: false
      },
      {
        separateRoute: true,
        menuValue: "Customer Dashboard",
        tittle: "Customer Dashboard",
        route: routes.customerDashboard,
        base: routes.index,
        icon: "home",
        showAsTab: false
      },
      {
        separateRoute: true,
        menuValue: "Super Admin Dashboard",
        tittle: "Super Admin Dashboard",
        route: routes.superAdminDashboard,
        base: "super-admin",
        icon: "home",
        showAsTab: false
      }
    ]
  }
];

// src/app/modules/configuration/configuration.route.ts
var ConfigurationRoute = [
  {
    menuValue: "Admin Config",
    hasSubRoute: true,
    showSubRoute: false,
    icon: "element-45",
    base: "index",
    base1: "admin-dashboard",
    subMenus: [
      {
        separateRoute: true,
        menuValue: "Societe",
        tittle: "Admin Dashboard",
        route: routes.configSociete,
        icon: "home",
        base: "index",
        showAsTab: false,
        activeMenu: "",
        permissions: []
      },
      {
        separateRoute: true,
        menuValue: "Admin Dashboard 2",
        tittle: "Admin Dashboard 2",
        route: routes.AdminDashboard2,
        icon: "home",
        base: "admin-dashboard",
        showAsTab: false
      },
      {
        separateRoute: true,
        menuValue: "Customer Dashboard",
        tittle: "Customer Dashboard",
        route: routes.customerDashboard,
        base: routes.index,
        icon: "home",
        showAsTab: false
      },
      {
        separateRoute: true,
        menuValue: "Super Admin Dashboard",
        tittle: "Super Admin Dashboard",
        route: routes.superAdminDashboard,
        base: "super-admin",
        icon: "home",
        showAsTab: false
      }
    ]
  }
];

// src/app/modules/manage-users/manage-users.route.ts
var ManageUsersRoute = [{
  tittle: "Manage",
  active: false,
  icon: "airplay",
  showAsTab: false,
  separateRoute: false,
  menu: [
    {
      menuValue: "Manage User",
      hasSubRoute: true,
      showSubRoute: false,
      icon: "profile-2user5",
      base: "manage-users",
      subMenus: [
        {
          menuValue: "Users",
          route: routes.allUsers,
          base: "users",
          permissions: ["HIERARCHIE:UTILISATEUR:LIST"]
        },
        {
          menuValue: "Roles & Permission",
          route: routes.rolePermissions,
          base: "roles-permission",
          permissions: ["SECURITY:ROLE:LIST"]
        },
        {
          menuValue: "Delect Account Request",
          route: routes.deleteAccountRequest,
          base: "delete-account-request",
          permissions: ["HIERARCHIE:UTILISATEUR:DELETE"]
        }
      ]
    },
    {
      menuValue: "Membership",
      hasSubRoute: true,
      showSubRoute: false,
      icon: "star-15",
      base: "membership",
      subMenus: [
        {
          menuValue: "Membership Plans",
          route: routes.membershipPlans,
          base: "membership-plans"
        },
        {
          menuValue: "Membership Addons",
          route: routes.membershipAddons,
          base: "membership-addons"
        },
        {
          menuValue: "Subscribers",
          route: routes.subscribers,
          base: "subscribers"
        },
        {
          menuValue: "Transactions",
          route: routes.membershipTransactions,
          base: "transactions"
        }
      ]
    },
    {
      menuValue: "Contact Messages",
      route: routes.contactMessages,
      hasSubRoute: false,
      showSubRoute: false,
      icon: "messages-25",
      base: "contact-messages",
      subMenus: []
    },
    {
      menuValue: "Tickets",
      hasSubRoute: true,
      showSubRoute: false,
      icon: "ticket-25",
      base: "tickets",
      subMenus: [
        {
          menuValue: "Ticket List",
          route: routes.ticketList,
          base: "ticket-list"
        },
        {
          menuValue: "Ticket Kanban",
          route: routes.ticketKanban,
          base: "ticket-kanban"
        },
        {
          menuValue: "Ticket Details",
          route: routes.ticketDetails,
          base: "ticket-details"
        }
      ]
    }
  ]
}];

// src/app/modules/setting/setting.route.ts
var SettingRoute = [
  {
    tittle: "Administration",
    active: false,
    icon: "airplay",
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: "Reports",
        hasSubRouteTwo: true,
        showSubRoute: false,
        icon: "chart-35",
        base: "reports",
        permissions: ["jJHHHD"],
        subMenus: [
          {
            menuValue: "Item Report",
            hasSubRoute: true,
            showSubRoute: false,
            page: "item-report",
            subMenus: [
              {
                menuValue: "Stock Summary",
                route: routes.stockSummary,
                base: "stock-summary"
              },
              {
                menuValue: "Inventory",
                route: routes.inventoryReport,
                base: "inventory-report"
              },
              {
                menuValue: "Best Seller",
                route: routes.bestSeller,
                base: "best-seller"
              },
              {
                menuValue: "Low Stock",
                route: routes.lowStock,
                base: "low-stock"
              },
              {
                menuValue: "Stock History",
                route: routes.stockHistory,
                base: "stock-history"
              },
              {
                menuValue: "Sold Stock",
                route: routes.soldStock,
                base: "sold-stock"
              }
            ]
          },
          {
            menuValue: "Transaction Reports",
            hasSubRoute: true,
            showSubRoute: false,
            page: "transcaction-report",
            subMenus: [
              {
                menuValue: "Sales",
                route: routes.salesReport,
                base: "sales-report"
              },
              {
                menuValue: "Sales Return",
                route: routes.salesReturns,
                base: "sales-returns"
              },
              {
                menuValue: "Sales Order",
                route: routes.salesOrders,
                base: "sales-orders"
              },
              {
                menuValue: "Purchases",
                route: routes.purchasesReport,
                base: "purchases-report"
              },
              {
                menuValue: "Purchase Return",
                route: routes.purchasesReturnReport,
                base: "purchases-return-report"
              },
              {
                menuValue: "Purchase Orders",
                route: routes.purchasesOrdersReport,
                base: "purchases-orders-report"
              },
              {
                menuValue: "Quotation",
                route: routes.quotationReport,
                base: "quotation-report"
              }
            ]
          },
          {
            menuValue: "Finance Reports",
            hasSubRoute: true,
            showSubRoute: false,
            page: "finance-reports",
            subMenus: [
              {
                menuValue: "Payment Summary",
                route: routes.paymentSummary,
                base: "payment-summary"
              },
              {
                menuValue: "Taxes",
                route: routes.taxReport,
                base: "tax-report"
              }
            ]
          },
          {
            menuValue: "Accounting Reports",
            hasSubRoute: true,
            showSubRoute: false,
            page: "accounting-report",
            subMenus: [
              {
                menuValue: "Expenses",
                route: routes.expenseReport,
                base: "expense-report"
              },
              {
                menuValue: "Income",
                route: routes.incomeReport,
                base: "income-report"
              },
              {
                menuValue: "Profit & Loss",
                route: routes.profitlossReport,
                base: "profit-loss-report"
              },
              {
                menuValue: "Annual Report",
                route: routes.annualReport,
                base: "annual-report"
              },
              {
                menuValue: "Balance Sheet",
                route: routes.balanceSheet,
                base: "balance-sheet"
              },
              {
                menuValue: "Trial Balance",
                route: routes.trialBalance,
                base: "trial-balance"
              },
              {
                menuValue: "Cash Flow",
                route: routes.cashFlow,
                base: "cash-flow"
              },
              {
                menuValue: "Account Statement",
                route: routes.accountStatement,
                base: "cash-flow"
              }
            ]
          },
          {
            menuValue: "User Reports",
            hasSubRoute: true,
            showSubRoute: false,
            page: "user-reports",
            subMenus: [
              {
                menuValue: "Customers",
                route: routes.customerReport,
                base: "customer-reports"
              },
              {
                menuValue: "Customer Due Report",
                route: routes.customerDueReport,
                base: "customer-due-reports"
              },
              {
                menuValue: "Supplier",
                route: routes.supplierReport,
                base: "supplier-reports"
              }
            ]
          }
        ]
      },
      {
        menuValue: "Settings",
        hasSubRouteTwo: true,
        showSubRoute: false,
        icon: "setting-25",
        base: "settings",
        subMenus: [
          {
            menuValue: "General Settings",
            hasSubRoute: true,
            showSubRoute: false,
            page: "general-settings",
            icon: "setting-2",
            subMenus: [
              {
                menuValue: "Company Settings",
                route: routes.companySettings,
                base: "comapany-settings"
              },
              {
                menuValue: "Account Settings",
                route: routes.accountSettings,
                base: "account-settings"
              },
              {
                menuValue: "Site Settings",
                route: routes.siteSettings,
                base: "site-settings"
              },
              {
                menuValue: "D\xE9partements",
                route: routes.departementSettings,
                base: "departement-settings"
              },
              {
                menuValue: "Security",
                route: routes.securitySettings,
                base: "security-settings"
              },
              {
                menuValue: "Plans & Billings",
                route: routes.plansBillings,
                base: "plans-billings"
              },
              {
                menuValue: "Notifications",
                route: routes.notificationSettings,
                base: "notification-settings"
              },
              {
                menuValue: "Integration",
                route: routes.integrationsSettings,
                base: "integrations-settings"
              },
              {
                menuValue: "Preference",
                route: routes.preferenceSettings,
                base: "preference-settings"
              },
              {
                menuValue: "Language",
                route: routes.languageSettings,
                base: "language-settings"
              },
              {
                menuValue: "Appreance",
                route: routes.appearanceSettings,
                base: "appearance-settings"
              }
            ]
          },
          {
            menuValue: "Website Settings",
            hasSubRoute: true,
            showSubRoute: false,
            icon: "global ",
            page: "website-settings",
            subMenus: [
              {
                menuValue: "Localization",
                route: routes.localizationSettings,
                base: "localization-settings"
              },
              {
                menuValue: "Prefixes",
                route: routes.prefixesSettings,
                base: "prefixes-settings"
              },
              {
                menuValue: "SEO Setup",
                route: routes.seoSetup,
                base: "seo-setup"
              },
              {
                menuValue: "Maintenance Mode",
                route: routes.maintenanceMode,
                base: "maintenance-mode"
              },
              {
                menuValue: "Authentication",
                route: routes.authenticationSettings,
                base: "authentication-settings"
              },
              {
                menuValue: "Ai Configuration",
                route: routes.aiConfigurationSettings,
                base: "ai-configuration-settings"
              },
              {
                menuValue: "Plugin Manager",
                route: routes.pluginManager,
                base: "plugin-manager"
              }
            ]
          },
          {
            menuValue: "App Settings",
            hasSubRoute: true,
            showSubRoute: false,
            page: "app-settings",
            icon: "shapes ",
            subMenus: [
              {
                menuValue: "Invoice Settings",
                route: routes.invoiceSettings,
                base: "invoice-settings"
              },
              {
                menuValue: "Invoice Templates",
                route: routes.invoiceTemplates,
                base: "invoice-templates"
              },
              {
                menuValue: "esignatures",
                route: routes.esignatures,
                base: "esignatures"
              },
              {
                menuValue: "Barcode",
                route: routes.barcodeSettings,
                base: "barcode-settings"
              },
              {
                menuValue: "Thermal Printer",
                route: routes.thermalPrinter,
                base: "thermal-printer"
              },
              {
                menuValue: "Custom Fields",
                route: routes.customFields,
                base: "custom-fields"
              },
              {
                menuValue: "SaaS Settings",
                route: routes.saasSettings,
                base: "sass-settings"
              }
            ]
          },
          {
            menuValue: "System Settings",
            hasSubRoute: true,
            showSubRoute: false,
            page: "system-settings",
            icon: "more-2",
            subMenus: [
              {
                menuValue: "Email Settings",
                route: routes.emailSettings,
                base: "email-settings"
              },
              {
                menuValue: "Email Templates",
                route: routes.emailTemplates,
                base: "email-templates"
              },
              {
                menuValue: "SMS Gateways",
                route: routes.smsGateways,
                base: "sms-gateways"
              },
              {
                menuValue: "GDPR Cookies",
                route: routes.gdprCookies,
                base: "gdpr-cookies"
              }
            ]
          },
          {
            menuValue: "Finance Settings",
            hasSubRoute: true,
            showSubRoute: false,
            page: "finance-settings",
            icon: "money-3",
            subMenus: [
              {
                menuValue: "Payment Methods",
                route: routes.paymentMethods,
                base: "payment-methods"
              },
              {
                menuValue: "Bank Accounts",
                route: routes.bankAccountsSettings,
                base: "bank-accounts-settings"
              },
              {
                menuValue: "Tax Rates",
                route: routes.taxRates,
                base: "tax-rates"
              },
              {
                menuValue: "Currencies",
                route: routes.currencies,
                base: "currencies"
              }
            ]
          },
          {
            menuValue: "Other Settings",
            hasSubRoute: true,
            showSubRoute: false,
            page: "other-settings",
            icon: "document",
            permissions: ["LIST"],
            subMenus: [
              {
                menuValue: "Custom Css",
                route: routes.customCss,
                base: "custom-css",
                permissions: ["LIST"]
              },
              {
                menuValue: "Custom Js",
                route: routes.customJs,
                base: "custom-js"
              },
              {
                menuValue: "Sitemap",
                route: routes.sitemap,
                base: "sitemap"
              },
              {
                menuValue: "Clear Cache",
                route: routes.clearCache,
                base: "clear-cache"
              },
              {
                menuValue: "Storage",
                route: routes.storage,
                base: "storage"
              },
              {
                menuValue: "Cronjob",
                route: routes.cronjob,
                base: "cronjob"
              },
              {
                menuValue: "System Backup",
                route: routes.systemBackup,
                base: "system-backup"
              },
              {
                menuValue: "Database Backup",
                route: routes.databaseBackup,
                base: "database-backup"
              },
              {
                menuValue: "System Update",
                route: routes.systemUpdate,
                base: "system-update"
              }
            ]
          }
        ]
      }
    ]
  }
];

// src/app/core/services/data/data.service.ts
var DataService = class _DataService {
  http;
  constructor(http) {
    this.http = http;
  }
  getEvents() {
    return this.http.get("assets/JSON/scheduleevents.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomers() {
    return this.http.get("assets/JSON/customers.json").pipe(map((res) => {
      return res;
    }));
  }
  getActive() {
    return this.http.get("assets/JSON/activecustomer.json").pipe(map((res) => {
      return res;
    }));
  }
  getDeactive() {
    return this.http.get("assets/JSON/deactivecustomer.json").pipe(map((res) => {
      return res;
    }));
  }
  getBlogs() {
    return this.http.get("assets/JSON/blogs.json").pipe(map((res) => {
      return res;
    }));
  }
  getBlogCategories() {
    return this.http.get("assets/JSON/categories.json").pipe(map((res) => {
      return res;
    }));
  }
  getBlogTag() {
    return this.http.get("assets/JSON/blogtag.json").pipe(map((res) => {
      return res;
    }));
  }
  getBlogComment() {
    return this.http.get("assets/JSON/blogcomment.json").pipe(map((res) => {
      return res;
    }));
  }
  getExpensesList() {
    return this.http.get("assets/JSON/expenses.json").pipe(map((res) => {
      return res;
    }));
  }
  getPaymentList() {
    return this.http.get("assets/JSON/payments.json").pipe(map((res) => {
      return res;
    }));
  }
  getInvoiceItem() {
    return this.http.get("assets/JSON/itemList.json").pipe(map((res) => {
      return res;
    }));
  }
  getEstimatesList() {
    return this.http.get("assets/JSON/estimates.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketList() {
    return this.http.get("assets/JSON/ticket.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketopenList() {
    return this.http.get("assets/JSON/ticket.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketPending() {
    return this.http.get("assets/JSON/ticketsPending.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketOpen() {
    return this.http.get("assets/JSON/ticketsopen.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketresolved() {
    return this.http.get("assets/JSON/ticketsresolved.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketOverdue() {
    return this.http.get("assets/JSON/ticketsOverdue.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketclosed() {
    return this.http.get("assets/JSON/ticketclosed.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketCancelled() {
    return this.http.get("assets/JSON/ticketCancelled.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketRecurring() {
    return this.http.get("assets/JSON/ticketrecurring.json").pipe(map((res) => {
      return res;
    }));
  }
  getCountries() {
    return this.http.get("assets/JSON/countries.json").pipe(map((res) => {
      return res;
    }));
  }
  getbankaccount() {
    return this.http.get("assets/JSON/bankaccount.json").pipe(map((res) => {
      return res;
    }));
  }
  getCities() {
    return this.http.get("assets/JSON/city.json").pipe(map((res) => {
      return res;
    }));
  }
  getDeliverychallan() {
    return this.http.get("assets/JSON/deliverychallens.json").pipe(map((res) => {
      return res;
    }));
  }
  getMessages() {
    return this.http.get("assets/JSON/message.json").pipe(map((res) => {
      return res;
    }));
  }
  getFaq() {
    return this.http.get("assets/JSON/faq.json").pipe(map((res) => {
      return res;
    }));
  }
  getTestimonials() {
    return this.http.get("assets/JSON/testimonials.json").pipe(map((res) => {
      return res;
    }));
  }
  getVendors() {
    return this.http.get("assets/JSON/vendors.json").pipe(map((res) => {
      return res;
    }));
  }
  getLedger() {
    return this.http.get("assets/JSON/ledger.json").pipe(map((res) => {
      return res;
    }));
  }
  recurringinvoice() {
    return this.http.get("assets/JSON/recurringinvoice.json").pipe(map((res) => {
      return res;
    }));
  }
  recurringPending() {
    return this.http.get("assets/JSON/recurringpending.json").pipe(map((res) => {
      return res;
    }));
  }
  recurringOverdue() {
    return this.http.get("assets/JSON/recurringoverdue.json").pipe(map((res) => {
      return res;
    }));
  }
  recurring() {
    return this.http.get("assets/JSON/recurring.json").pipe(map((res) => {
      return res;
    }));
  }
  recurringCancelled() {
    return this.http.get("assets/JSON/recurringcancelled.json").pipe(map((res) => {
      return res;
    }));
  }
  recurringDraft() {
    return this.http.get("assets/JSON/recurringdraft.json").pipe(map((res) => {
      return res;
    }));
  }
  getUnits() {
    return this.http.get("assets/JSON/units.json").pipe(map((res) => {
      return res;
    }));
  }
  getCategory() {
    return this.http.get("assets/JSON/category.json").pipe(map((res) => {
      return res;
    }));
  }
  getProductlist() {
    return this.http.get("assets/JSON/productlist.json").pipe(map((res) => {
      return res;
    }));
  }
  getcreditnotes() {
    return this.http.get("assets/JSON/creditnotes.json").pipe(map((res) => {
      return res;
    }));
  }
  getEditcreditnotes() {
    return this.http.get("assets/JSON/editcreditnotes.json").pipe(map((res) => {
      return res;
    }));
  }
  getCreditnotespending() {
    return this.http.get("assets/JSON/creditnotespending.json").pipe(map((res) => {
      return res;
    }));
  }
  getCreditnotesoverdue() {
    return this.http.get("assets/JSON/creditnotesoverdue.json").pipe(map((res) => {
      return res;
    }));
  }
  getCreditnotesdraft() {
    return this.http.get("assets/JSON/creditnotesdraft.json").pipe(map((res) => {
      return res;
    }));
  }
  getCreditnoterecurring() {
    return this.http.get("assets/JSON/creditnotesrecurring.json").pipe(map((res) => {
      return res;
    }));
  }
  getCreditnotecancel() {
    return this.http.get("assets/JSON/creditnotescancel.json").pipe(map((res) => {
      return res;
    }));
  }
  getinvoice() {
    return this.http.get("assets/JSON/invoice.json").pipe(map((res) => {
      return res;
    }));
  }
  getinvoicepaid() {
    return this.http.get("assets/JSON/invoicepaid.json").pipe(map((res) => {
      return res;
    }));
  }
  getinvoiceoverdue() {
    return this.http.get("assets/JSON/invoiceoverdue.json").pipe(map((res) => {
      return res;
    }));
  }
  getinvoicedraft() {
    return this.http.get("assets/JSON/invoicedraft.json").pipe(map((res) => {
      return res;
    }));
  }
  getinvoicerecurring() {
    return this.http.get("assets/JSON/invoicerecurring.json").pipe(map((res) => {
      return res;
    }));
  }
  getinvoicecancelled() {
    return this.http.get("assets/JSON/invoicecancelled.json").pipe(map((res) => {
      return res;
    }));
  }
  getinventory() {
    return this.http.get("assets/JSON/inventory.json").pipe(map((res) => {
      return res;
    }));
  }
  getpurchase() {
    return this.http.get("assets/JSON/purchase.json").pipe(map((res) => {
      return res;
    }));
  }
  getpurchaseorder() {
    return this.http.get("assets/JSON/purchaseorder.json").pipe(map((res) => {
      return res;
    }));
  }
  getdebitnotes() {
    return this.http.get("assets/JSON/debitnotes.json").pipe(map((res) => {
      return res;
    }));
  }
  getquotation() {
    return this.http.get("assets/JSON/quotations.json").pipe(map((res) => {
      return res;
    }));
  }
  getpaymentsummary() {
    return this.http.get("assets/JSON/paymentsummary.json").pipe(map((res) => {
      return res;
    }));
  }
  getSubscribers() {
    return this.http.get("assets/JSON/subscribers.json").pipe(map((res) => {
      return res;
    }));
  }
  getTransaction() {
    return this.http.get("assets/JSON/transactions.json").pipe(map((res) => {
      return res;
    }));
  }
  getrole() {
    return this.http.get("assets/JSON/role.json").pipe(map((res) => {
      return res;
    }));
  }
  getdeleteaccount() {
    return this.http.get("assets/JSON/deleteaccount.json").pipe(map((res) => {
      return res;
    }));
  }
  getUsers() {
    return this.http.get("assets/JSON/user.json").pipe(map((res) => {
      return res;
    }));
  }
  getaddpages() {
    return this.http.get("assets/JSON/addpages.json").pipe(map((res) => {
      return res;
    }));
  }
  getstates() {
    return this.http.get("assets/JSON/states.json").pipe(map((res) => {
      return res;
    }));
  }
  getsignature() {
    return this.http.get("assets/JSON/signature.json").pipe(map((res) => {
      return res;
    }));
  }
  getinvoiceone() {
    return this.http.get("assets/JSON/invoiceone.json").pipe(map((res) => {
      return res;
    }));
  }
  getCompanies() {
    return this.http.get("assets/JSON/companies.json").pipe(map((res) => {
      return res;
    }));
  }
  getPackages() {
    return this.http.get("assets/JSON/packages.json").pipe(map((res) => {
      return res;
    }));
  }
  getSubscription() {
    return this.http.get("assets/JSON/subscription.json").pipe(map((res) => {
      return res;
    }));
  }
  getDomainRequest() {
    return this.http.get("assets/JSON/domain-request.json").pipe(map((res) => {
      return res;
    }));
  }
  getDomain() {
    return this.http.get("assets/JSON/domain.json").pipe(map((res) => {
      return res;
    }));
  }
  getPurchaseTransaction() {
    return this.http.get("assets/JSON/purchase-transaction.json").pipe(map((res) => {
      return res;
    }));
  }
  getTaxPurchase() {
    return this.http.get("assets/JSON/tax-purchase.json").pipe(map((res) => {
      return res;
    }));
  }
  getTaxPurchase2() {
    return this.http.get("assets/JSON/tax-purchase2.json").pipe(map((res) => {
      return res;
    }));
  }
  getPlanBilling() {
    return this.http.get("assets/JSON/plan-billing.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomField() {
    return this.http.get("assets/JSON/custom-field.json").pipe(map((res) => {
      return res;
    }));
  }
  getInventoryHistory() {
    return this.http.get("assets/JSON/inventory-history.json").pipe(map((res) => {
      return res;
    }));
  }
  getDataTables() {
    return this.http.get("assets/JSON/data-tables.json").pipe(map((res) => {
      return res;
    }));
  }
  getPlansList() {
    return this.http.get("assets/JSON/plans-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierPayment() {
    return this.http.get("assets/JSON/supplier-payment.json").pipe(map((res) => {
      return res;
    }));
  }
  getIncome() {
    return this.http.get("assets/JSON/income.json").pipe(map((res) => {
      return res;
    }));
  }
  getMoneyTransfer() {
    return this.http.get("assets/JSON/money-transfer.json").pipe(map((res) => {
      return res;
    }));
  }
  getBankAccountType() {
    return this.http.get("assets/JSON/bank-account-type.json").pipe(map((res) => {
      return res;
    }));
  }
  getMembershipAddons() {
    return this.http.get("assets/JSON/membership-addons.json").pipe(map((res) => {
      return res;
    }));
  }
  getMembershipTransaction() {
    return this.http.get("assets/JSON/membership-transaction.json").pipe(map((res) => {
      return res;
    }));
  }
  getContactMessage() {
    return this.http.get("assets/JSON/contact-message.json").pipe(map((res) => {
      return res;
    }));
  }
  getTicketLists() {
    return this.http.get("assets/JSON/ticketlists.json").pipe(map((res) => {
      return res;
    }));
  }
  getStockSummary() {
    return this.http.get("assets/JSON/stock-summary.json").pipe(map((res) => {
      return res;
    }));
  }
  getExpensereport() {
    return this.http.get("assets/JSON/expense-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getBalancesheet() {
    return this.http.get("assets/JSON/balance-sheet.json").pipe(map((res) => {
      return res;
    }));
  }
  getTrialbalance() {
    return this.http.get("assets/JSON/trial-balance.json").pipe(map((res) => {
      return res;
    }));
  }
  getCashflow() {
    return this.http.get("assets/JSON/cash-flow.json").pipe(map((res) => {
      return res;
    }));
  }
  getAccountstatement() {
    return this.http.get("assets/JSON/account-statement.json").pipe(map((res) => {
      return res;
    }));
  }
  getIncomereport() {
    return this.http.get("assets/JSON/income-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getInventoryReport() {
    return this.http.get("assets/JSON/inventory-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getBestSeller() {
    return this.http.get("assets/JSON/best-seller.json").pipe(map((res) => {
      return res;
    }));
  }
  getLowStock() {
    return this.http.get("assets/JSON/low-stock.json").pipe(map((res) => {
      return res;
    }));
  }
  getSoldStock() {
    return this.http.get("assets/JSON/sold-stock.json").pipe(map((res) => {
      return res;
    }));
  }
  getStockHistory() {
    return this.http.get("assets/JSON/stock-history.json").pipe(map((res) => {
      return res;
    }));
  }
  getPaymentSummary() {
    return this.http.get("assets/JSON/payment-summary.json").pipe(map((res) => {
      return res;
    }));
  }
  getTaxReport() {
    return this.http.get("assets/JSON/tax-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getRecurringinvoices() {
    return this.http.get("assets/JSON/recurring.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomertransaction() {
    return this.http.get("assets/JSON/customer-transactions.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomerInvoicereport() {
    return this.http.get("assets/JSON/customer-invoice-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomerReport() {
    return this.http.get("assets/JSON/customer-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomerDueReport() {
    return this.http.get("assets/JSON/customer-due-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplier() {
    return this.http.get("assets/JSON/supplier.json").pipe(map((res) => {
      return res;
    }));
  }
  getPages() {
    return this.http.get("assets/JSON/pages.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesReport() {
    return this.http.get("assets/JSON/sales-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesReturnReport() {
    return this.http.get("assets/JSON/salesreturn-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesOrderReport() {
    return this.http.get("assets/JSON/salesorder.json").pipe(map((res) => {
      return res;
    }));
  }
  getPurchaseReport() {
    return this.http.get("assets/JSON/purchase-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getPurchaseReturnReport() {
    return this.http.get("assets/JSON/purchasereturn-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getQuotationReport() {
    return this.http.get("assets/JSON/quotation-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getContacts() {
    return this.http.get("assets/JSON/contacts.json").pipe(map((res) => {
      return res;
    }));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sideBar = [
    {
      tittle: "Main",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      showSubRoute: true,
      menu: [
        ...SuperAdminRoute,
        ...ConfigurationRoute,
        {
          menuValue: "Super Admin",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "shapes5",
          base: "super-admin",
          subMenus: [
            {
              separateRoute: true,
              menuValue: "Dashboard",
              route: routes.superAdminDashboard,
              base: routes.superAdminDashboard,
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Companies",
              route: routes.companies,
              base: routes.companies,
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Subscriptions",
              route: routes.subscriptions,
              base: routes.subscriptions,
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Packages",
              route: routes.packages,
              base: routes.packages,
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Domain",
              route: routes.domain,
              base: routes.domain,
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Purchase Transaction",
              route: routes.purchaseTransaction,
              base: routes.purchaseTransaction,
              showAsTab: false
            }
          ]
        },
        {
          menuValue: "Applications",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "category-25",
          base: "application",
          subMenus: [
            {
              separateRoute: true,
              menuValue: "Chat",
              tittle: "Chat",
              route: routes.chat,
              base: routes.chat,
              showAsTab: false
            },
            {
              menuValue: "Calls",
              hasSubRouteTwo2: true,
              showSubRoute: false,
              page: "calls",
              icon: "document",
              subMenus: [
                {
                  menuValue: "Voice Call",
                  route: routes.voiceCall,
                  base: "voice-call"
                },
                {
                  menuValue: "video Call",
                  route: routes.videoCall,
                  base: "video-call"
                },
                {
                  menuValue: "Outgoing Call",
                  route: routes.outgoingCall,
                  base: "outgoing-call"
                },
                {
                  menuValue: "Incoming Call",
                  route: routes.incomingCall,
                  base: "incoming-call"
                },
                {
                  menuValue: "Call History",
                  route: routes.callHistory,
                  base: "call-history"
                }
              ]
            },
            {
              separateRoute: true,
              menuValue: "Calendar",
              tittle: "Calendar",
              route: routes.calender,
              base: routes.calender,
              icon: "calendar",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Email",
              tittle: "Email",
              route: routes.email,
              base: routes.email,
              icon: "mail",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "To Do",
              route: routes.todo,
              base: "todo",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Notes",
              route: routes.notes,
              base: "notes",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Social Feed",
              route: routes.socialFeed,
              base: "social-feed",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "File Manager",
              route: routes.fileManager,
              base: "file-manager",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Kanban",
              route: routes.kanbanView,
              base: "kanban-view",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Contacts",
              route: routes.contacts,
              base: "contacts",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Invoices",
              route: routes.applicationInvoice,
              base: "invoice",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Search List",
              route: routes.searchList,
              base: "search-list",
              showAsTab: false
            }
          ]
        }
      ]
    },
    ...ManageUsersRoute,
    ...SettingRoute,
    {
      tittle: "Inventory & Sales",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Products / Services",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "box5",
          base: "product-service",
          subMenus: [
            {
              menuValue: "Product List",
              route: routes.productlist,
              base: "product-list",
              base1: "add-products",
              base2: "edit-products"
            },
            {
              menuValue: "Category",
              route: routes.category,
              base: "category"
            },
            {
              menuValue: "Units",
              route: routes.units,
              base: "units"
            }
          ]
        },
        {
          menuValue: "Inventory",
          route: routes.allInventory,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "lifebuoy5",
          base: "inventory",
          subMenus: []
        },
        {
          menuValue: "Invoice",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "receipt-item5",
          base: "invoices",
          subMenus: [
            {
              menuValue: "Invoices",
              route: routes.invoiceList,
              base: "invoices"
            },
            {
              menuValue: "Create Invoice",
              route: routes.addInvoice,
              base: "add-invoice"
            },
            {
              menuValue: "Invoice Details",
              route: routes.invoiceDetails,
              base: "invoice-details"
            },
            {
              menuValue: "Invoice Templates",
              route: routes.invoiceTemplate,
              base: "invoice-templates"
            },
            {
              menuValue: "Recurring Invoices",
              route: routes.recurringInvoices,
              base: "recurring-invoices"
            }
          ]
        },
        {
          menuValue: "Credit Notes",
          route: routes.creditNotes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "note5",
          base: "credit-notes",
          subMenus: []
        },
        {
          menuValue: "Quotations",
          route: routes.quotationList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "strongbox5",
          base: "quotations",
          subMenus: []
        },
        {
          menuValue: "Delivery Challans",
          route: routes.deliveryChallanList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "bookmark-25",
          base: "delivery-challans",
          subMenus: []
        },
        {
          menuValue: "Customers",
          view: false,
          hasSubRoute: true,
          showSubRoute: false,
          icon: "profile-2user5",
          base: "customers",
          subMenus: [
            {
              separateRoute: true,
              menuValue: "Customers",
              route: routes.customerList,
              base: "customer-list",
              icon: "clipboard",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Customer Details",
              route: routes.customerDetails,
              base: "customer-details",
              icon: "box",
              showAsTab: false
            }
          ]
        }
      ]
    },
    {
      tittle: "Purchases",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Purchases",
          route: routes.purchaseList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "bag-tick-25",
          base: "purchases",
          subMenus: []
        },
        {
          menuValue: "Purchase Orders",
          route: routes.purchaseOrderList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "document-forward5",
          base: "purchase-orders",
          subMenus: []
        },
        {
          menuValue: "Debit Notes",
          route: routes.debitNoteList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "document-text5",
          base: "debit-notes",
          subMenus: []
        },
        {
          menuValue: "Suppliers",
          route: routes.suppliers,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "security-user5",
          base: "suppliers",
          subMenus: []
        },
        {
          menuValue: "Supplier Payments",
          route: routes.supplierPayments,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "coin-15",
          base: "supplier-payments",
          subMenus: []
        }
      ]
    },
    {
      tittle: "Finance & Accounts",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Expenses",
          route: routes.expenses,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "money-send5",
          base: "expense",
          subMenus: []
        },
        {
          menuValue: "Incomes",
          route: routes.incomes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "money-send5",
          base: "incomes",
          subMenus: []
        },
        {
          menuValue: "Payments",
          route: routes.payments,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "money-tick5",
          base: "payments",
          subMenus: []
        },
        {
          menuValue: "Transactions",
          route: routes.transactions,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "moneys5",
          base: "transactions",
          subMenus: []
        },
        {
          menuValue: "Bank Accounts",
          route: routes.bankAccountList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "card-tick-15",
          base: "bank-accounts",
          subMenus: []
        },
        {
          menuValue: "Money Transfer",
          route: routes.moneyTransfer,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "convert-card5",
          base: "money-transfer",
          subMenus: []
        }
      ]
    },
    {
      tittle: "Layouts",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Default",
          route: routes.default,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "row-horizontal5",
          base: "layout-default",
          subMenus: []
        },
        {
          menuValue: "Single",
          route: routes.single,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "grid-95",
          base: "layout-single",
          subMenus: []
        },
        {
          menuValue: "Mini",
          route: routes.mini,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "grid-45",
          base: "layout-mini",
          subMenus: []
        },
        {
          menuValue: "Transparent",
          route: routes.transparent,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "grid-25",
          base: "layout-transparent",
          subMenus: []
        },
        {
          menuValue: "Without Header",
          route: routes.withoutHeader,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "slider-vertical-15",
          base: "layout-without-header",
          subMenus: []
        },
        {
          menuValue: "RTL",
          route: routes.RTL,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "sidebar-left5",
          base: "layout-rtl",
          subMenus: []
        },
        {
          menuValue: "Dark",
          route: routes.Dark,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "moon5",
          base: "layout-dark",
          subMenus: []
        }
      ]
    },
    {
      tittle: "Content",
      active: false,
      icon: "file",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Pages",
          route: routes.pages,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "document-15",
          base: "pages",
          subMenus: []
        },
        {
          menuValue: "Blogs",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "book5",
          base: "blogs",
          subMenus: [
            {
              menuValue: "All Blogs",
              route: routes.allBlogs,
              base: "all-blogs"
            },
            {
              menuValue: "Categories",
              route: routes.blogCategories,
              base: "blog-categories"
            },
            {
              menuValue: "Blog Tags",
              route: routes.blogtag,
              base: "blog-tags"
            },
            {
              menuValue: "Comments",
              route: routes.blogcomments,
              base: "blog-comments"
            }
          ]
        },
        {
          menuValue: "Location",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "map5",
          base: "location",
          subMenus: [
            {
              menuValue: "Countries",
              route: routes.countries,
              base: "countries"
            },
            {
              menuValue: "States",
              route: routes.states,
              base: "states"
            },
            {
              menuValue: "Cities",
              route: routes.cities,
              base: "cities"
            }
          ]
        },
        {
          menuValue: "Testimonials",
          route: routes.testimonials,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "messages-15",
          base: "testimonial-page",
          subMenus: []
        },
        {
          menuValue: "FAQ",
          route: routes.faq,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "message-question5",
          base: "faq",
          subMenus: []
        }
      ]
    },
    {
      tittle: "Pages",
      active: false,
      icon: "file",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Profile",
          route: routes.profile,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "profile-tick5",
          base: "profile",
          subMenus: []
        },
        {
          menuValue: "Starter",
          route: routes.starter,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "document-favorite5",
          base: "starter"
        },
        {
          menuValue: "Gallery",
          route: routes.gallery,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "image5",
          base: "gallery",
          subMenus: []
        },
        {
          menuValue: "Pricing",
          route: routes.pricing,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "money-45",
          base: "pricing",
          subMenus: []
        },
        {
          menuValue: "Timeline",
          route: routes.timelines,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "timer-pause5",
          base: "timeline",
          subMenus: []
        },
        {
          menuValue: "Coming Soon",
          route: routes.comingSoon,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "security-time5",
          base: "coming-soon",
          subMenus: []
        },
        {
          menuValue: "Under Maintenance",
          route: routes.underMaintenance,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "paintbucket5",
          base: "under-maintenance",
          subMenus: []
        },
        {
          menuValue: "Under Construction",
          route: routes.underConstruction,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "forward-item5",
          base: "under-construction",
          subMenus: []
        },
        {
          menuValue: "Error Pages",
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: "device-message5",
          base: "",
          subMenus: [
            { menuValue: "Error 404", route: routes.error404, base: "error-404" },
            {
              menuValue: "Error 500",
              route: routes.error500,
              base: "error-500"
            }
          ]
        },
        {
          menuValue: "API Keys",
          route: routes.apiKeys,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "key-square5",
          base: "api-keys",
          subMenus: []
        },
        {
          menuValue: "Privacy Policy",
          route: routes.privacyPolicy,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "document-copy5",
          base: "privacy-policy",
          subMenus: []
        },
        {
          menuValue: "Terms & Conditions",
          route: routes.termsCondition,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "note-15",
          base: "terms-condition",
          subMenus: []
        }
      ]
    },
    {
      tittle: "Authentication",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Login",
          route: routes.login,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "login-15",
          base: "expenses",
          subMenus: []
        },
        {
          menuValue: "Register",
          route: routes.register,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "lock-15",
          base: "payments",
          subMenus: []
        },
        {
          menuValue: "Forgot Password",
          route: routes.forgot_password,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "password-check5",
          base: "payments",
          subMenus: []
        },
        {
          menuValue: "Reset Password",
          route: routes.resetPassword,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "refresh-right-square5",
          base: "payments",
          subMenus: []
        },
        {
          menuValue: "Email Verification",
          route: routes.emailVerification,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "sms-tracking5",
          base: "payments",
          subMenus: []
        },
        {
          menuValue: "2 Step Verification",
          route: routes.twoStepVerification,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "security5",
          base: "payments",
          subMenus: []
        },
        {
          menuValue: "Lock Screen",
          route: routes.lock_screen,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "lock-circle5",
          base: "payments",
          subMenus: []
        }
      ]
    },
    {
      tittle: "UI Interface",
      active: false,
      icon: "layers",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Base UI",
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: "designtools5",
          base: "base-ui",
          subMenus: [
            {
              menuValue: "Accordions",
              route: routes.accordions,
              base: routes.accordions
            },
            {
              menuValue: "Alerts",
              route: routes.alert,
              base: routes.alert
            },
            {
              menuValue: "Avatar",
              route: routes.avatar,
              base: routes.avatar
            },
            {
              menuValue: "Badges",
              route: routes.badges,
              base: routes.badges
            },
            {
              menuValue: "Breadcrumb",
              route: routes.breadcrumb,
              base: routes.breadcrumb
            },
            {
              menuValue: "Buttons",
              route: routes.buttons,
              base: routes.buttons
            },
            {
              menuValue: "Button Group",
              route: routes.buttonGroup,
              base: routes.buttonGroup
            },
            { menuValue: "Cards", route: routes.cards, base: routes.cards },
            {
              menuValue: "Carousel",
              route: routes.carousel,
              base: routes.carousel
            },
            {
              menuValue: "Collapse",
              route: routes.collapse,
              base: routes.collapse
            },
            {
              menuValue: "Dropdowns",
              route: routes.dropDown,
              base: routes.dropDown
            },
            {
              menuValue: "Ratio",
              route: routes.ratio,
              base: routes.ratio
            },
            { menuValue: "Grid", route: routes.grid, base: routes.grid },
            { menuValue: "Images", route: routes.images, base: routes.images },
            {
              menuValue: "Links",
              route: routes.links,
              base: routes.links
            },
            {
              menuValue: "List Group",
              route: routes.listGroup,
              base: routes.listGroup
            },
            { menuValue: "Modals", route: routes.modal, base: routes.modal },
            {
              menuValue: "Offcanvas",
              route: routes.offcanvas,
              base: routes.offcanvas
            },
            {
              menuValue: "Pagination",
              route: routes.pagination,
              base: routes.pagination
            },
            {
              menuValue: "Placeholders",
              route: routes.placeholder,
              base: routes.placeholder
            },
            {
              menuValue: "Progress",
              route: routes.progressBars,
              base: routes.progressBars
            },
            {
              menuValue: "Spinner",
              route: routes.spinner,
              base: routes.rangeSlider
            },
            { menuValue: "Tabs", route: routes.tabs, base: routes.tabs },
            { menuValue: "Toasts", route: routes.toasts, base: routes.toasts },
            {
              menuValue: "Tooltip",
              route: routes.tooltip,
              base: routes.tooltip
            },
            {
              menuValue: "Typography",
              route: routes.typography,
              base: routes.typography
            },
            { menuValue: "Utilities", route: routes.utilities, base: routes.utilities }
          ]
        },
        {
          menuValue: "Advanced UI",
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: "pen-tool5",
          base: "advanced-ui",
          subMenus: [
            {
              menuValue: "Drag & Drop",
              route: routes.dragDrop,
              base: routes.dragDrop
            },
            {
              menuValue: "Clipboard",
              route: routes.clipboards,
              base: routes.clipboards
            },
            {
              menuValue: "Range Slider",
              route: routes.rangeSlider,
              base: routes.rangeSlider
            },
            {
              menuValue: "Light Box",
              route: routes.lightBox,
              base: routes.lightBox
            },
            {
              menuValue: "Rating",
              route: routes.rating,
              base: routes.rating
            },
            {
              menuValue: "Text Editor",
              route: routes.textEditor,
              base: routes.textEditor
            },
            {
              menuValue: "Counter",
              route: routes.counter,
              base: routes.counter
            },
            {
              menuValue: "Scrollbar",
              route: routes.scrollbar,
              base: routes.scrollbar
            }
          ]
        },
        {
          menuValue: "Forms",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "password-check5",
          base: "forms",
          subMenus: [
            {
              menuValue: "Form Elements",
              hasSubRouteTwo2: true,
              showSubRoute: false,
              icon: "password-check5",
              base: "forms",
              subMenus: [
                {
                  menuValue: "Basic Inputs",
                  route: routes.basicForm,
                  base: routes.basicForm
                },
                {
                  menuValue: "Checkbox & Radios",
                  route: routes.checkboxRadios,
                  base: routes.checkboxRadios
                },
                {
                  menuValue: "Input Groups",
                  route: routes.inputGroups,
                  base: routes.inputGroups
                },
                {
                  menuValue: "Grid & Gutters",
                  route: routes.gridGutters,
                  base: routes.gridGutters
                },
                {
                  menuValue: "Input Masks",
                  route: routes.formMask,
                  base: routes.formMask
                },
                {
                  menuValue: "File Uploads",
                  route: routes.fileUpload,
                  base: routes.fileUpload
                }
              ]
            },
            {
              menuValue: "Layouts",
              hasSubRouteTwo2: true,
              showSubRoute: false,
              base: "forms",
              subMenus: [
                {
                  menuValue: "Horizontal Form",
                  route: routes.horizontalForm,
                  base: routes.horizontalForm
                },
                {
                  menuValue: "Vertical Form",
                  route: routes.verticalForm,
                  base: routes.verticalForm
                }
              ]
            },
            {
              menuValue: "Form Validation",
              route: routes.formValidation,
              base: routes.formValidation
            },
            {
              menuValue: "Form Picker",
              route: routes.formpickers,
              base: routes.formpickers
            }
          ]
        },
        {
          menuValue: "Tables",
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: "grid-75",
          base: "tables",
          subMenus: [
            {
              menuValue: "Basic Tables",
              route: routes.basicTable,
              base: routes.basicTable
            },
            {
              menuValue: "Data Tables",
              route: routes.dataTable,
              base: routes.dataTable
            }
          ]
        },
        {
          menuValue: "Charts",
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: "designtools5",
          base: "chart",
          subMenus: [
            {
              menuValue: "Apex Charts",
              route: routes.apexChart,
              base: routes.apexChart
            },
            {
              menuValue: "Prime Ng Charts",
              route: routes.primeng,
              base: routes.primeng
            }
          ]
        },
        {
          menuValue: "Icons",
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: "shapes-15",
          base: "icon",
          subMenus: [
            {
              menuValue: "Fontawesome Icons",
              route: routes.fontawesome,
              base: routes.fontawesome
            },
            {
              menuValue: "Feather Icons",
              route: routes.feather,
              base: routes.feather
            },
            {
              menuValue: "Ionic Icons",
              route: routes.ionic,
              base: routes.ionic
            },
            {
              menuValue: "Material Icons",
              route: routes.material,
              base: routes.material
            },
            { menuValue: "pe7 Icons", route: routes.pe7, base: routes.pe7 },
            {
              menuValue: "Simpleline Icons",
              route: routes.simpleLine,
              base: routes.simpleLine
            },
            {
              menuValue: "Themify Icons",
              route: routes.themify,
              base: routes.themify
            },
            {
              menuValue: "Weather Icons",
              route: routes.weather,
              base: routes.weather
            },
            {
              menuValue: "Typicon Icons",
              route: routes.typicon,
              base: routes.typicon
            },
            { menuValue: "Flag Icons", route: routes.flag, base: routes.flag }
          ]
        },
        {
          menuValue: "Maps",
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: "map-15",
          base: "maps",
          subMenus: [
            {
              menuValue: "Leaflets",
              route: routes.leaftlet,
              base: routes.leaftlet
            }
          ]
        }
      ]
    }
  ];
  sideBar2 = [
    {
      tittle: "Main",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      showSubRoute: true,
      menu: [
        {
          menuValue: "Dashboard",
          hasSubRoute: false,
          showSubRoute: true,
          route: routes.customerDashboard,
          icon: "home-25",
          base: "dashboard",
          subMenus: []
        },
        {
          menuValue: "Quotations",
          route: routes.customerQuotations,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "document-normal4",
          base: "quotations",
          subMenus: []
        },
        {
          menuValue: "Invoices",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "document-text5",
          base: "invoices",
          base2: "recurring-invoices",
          subMenus: [
            {
              separateRoute: true,
              menuValue: "Invoices",
              route: routes.customerInvoices,
              base: "invoices",
              icon: "message-square",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Recurring Invoices",
              route: routes.customerRecurringInvoices,
              base: "recurring-invoices",
              icon: "calendar",
              showAsTab: false
            }
          ]
        },
        {
          menuValue: "Transactions",
          route: routes.customerTransactions,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "document-forward5",
          base: "transactions",
          subMenus: []
        },
        {
          menuValue: "Reports",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "document-upload5",
          base: "payment-summary",
          base2: "invoice-report",
          subMenus: [
            {
              separateRoute: true,
              menuValue: "Payment Summary",
              route: routes.customerPaymentSummary,
              base: "payment-summary",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Invoice Report",
              route: routes.customerInvoicereport,
              base: "invoice-report",
              showAsTab: false
            }
          ]
        },
        {
          menuValue: "Settings",
          hasSubRoute: true,
          showSubRoute: false,
          icon: "setting-5",
          base: "application",
          subMenus: [
            {
              separateRoute: true,
              menuValue: "Account Settings",
              route: routes.customerAccountsettings,
              base: "account-settings",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Security",
              route: routes.customerSecuritysettings,
              base: "security-settings",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Plans & Billing",
              route: routes.customerPlanssettings,
              base: "plans-billing",
              showAsTab: false
            },
            {
              separateRoute: true,
              menuValue: "Notification",
              route: routes.customerNotificationsettings,
              base: "notification-settings",
              showAsTab: false
            }
          ]
        }
      ]
    }
  ];
  sideBar3 = [
    {
      tittle: "Main",
      active: false,
      icon: "airplay",
      showAsTab: false,
      separateRoute: false,
      showSubRoute: true,
      menu: [
        {
          menuValue: "Dashboard",
          hasSubRoute: false,
          showSubRoute: true,
          route: routes.superAdminDashboard,
          icon: "home-25",
          base: "dashboard",
          subMenus: []
        },
        {
          menuValue: "Companies",
          route: routes.companies,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "buildings-25",
          base: "companies",
          subMenus: []
        },
        {
          menuValue: "Subscriptions",
          route: routes.subscriptions,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "receipt-text5",
          base: "subscriptions",
          subMenus: []
        },
        {
          menuValue: "Packages",
          route: routes.packages,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "layer5 ",
          base: "packages",
          subMenus: []
        },
        {
          menuValue: "Domain",
          route: routes.domain,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "global5",
          base: "domain",
          subMenus: []
        },
        {
          menuValue: "Purchase Transaction",
          route: routes.purchaseTransaction,
          hasSubRoute: false,
          showSubRoute: false,
          icon: "document-text5",
          base: "purchase-transaction",
          subMenus: []
        }
      ]
    }
  ];
  breadCrumb = [
    {
      hasSubData: true,
      data: "Super Admin",
      route: routes.superAdminDashboard,
      data2: "Subscription",
      page: "subscriptions"
    },
    {
      hasSubData: true,
      data: "Super Admin",
      route: routes.superAdminDashboard,
      data2: "Packages",
      page: "packages"
    },
    {
      hasSubData: true,
      data: "Super Admin",
      route: routes.superAdminDashboard,
      data2: "Companies",
      page: "companies"
    },
    {
      hasSubData: true,
      data: "Super Admin",
      route: routes.superAdminDashboard,
      data2: "Domain",
      page: "domain"
    },
    {
      hasSubData: true,
      data: "Super Admin",
      route: routes.superAdminDashboard,
      data2: "Purchase Transaction",
      page: "purchase-transaction"
    },
    {
      hasSubData: false,
      data: "Payment Summary Report",
      base: "payment-summary"
    },
    {
      hasSubData: false,
      data: "Invoice Report",
      base: "invoice-report"
    },
    {
      hasSubData: false,
      data: "Quotations",
      base: "quotations"
    },
    {
      hasSubData: false,
      data: "Recurring Invoices",
      base: "recurring-invoices"
    },
    {
      hasSubData: false,
      data: "Invoices",
      base: "invoices"
    },
    {
      hasSubData: false,
      data: "Dashboard",
      base: "index"
    },
    {
      hasSubData: false,
      data: "Dashboard",
      base: "admin-dashboard"
    },
    {
      hasSubData: false,
      data: "Product",
      base: "product-list"
    },
    {
      hasSubData: false,
      data: "Product",
      base: "add-products"
    },
    {
      hasSubData: false,
      data: "Product",
      base: "edit-products"
    },
    {
      hasSubData: false,
      data: "Category",
      base: "category"
    },
    {
      hasSubData: false,
      data: "Unit",
      base: "units"
    },
    {
      hasSubData: false,
      data: "Inventory",
      base: "inventory"
    },
    {
      hasSubData: false,
      data: "Invoices",
      base: "invoice-list"
    },
    {
      hasSubData: false,
      data: "Invoice Templates",
      base: "invoice-templates"
    },
    {
      hasSubData: true,
      data: "Invoices",
      data2: "Create New Invoice",
      route: routes.invoiceList,
      page: "add-invoice"
    },
    {
      hasSubData: true,
      data: "Invoices",
      data2: "Edit Invoice",
      route: routes.invoiceList,
      page: "edit-invoice"
    },
    {
      hasSubData: false,
      data: "Invoice Detail Admin",
      base: "invoice-details"
    },
    {
      hasSubData: false,
      data: "Credit Notes",
      base: "credit-note-list"
    },
    {
      hasSubData: true,
      data: "Credit Notes",
      data2: "Add Credit Notes",
      route: routes.creditNotes,
      page: "add-credit-notes"
    },
    {
      hasSubData: true,
      data: "Credit Notes",
      data2: "Edit Credit Notes",
      route: routes.creditNotes,
      page: "edit-credit-notes"
    },
    {
      hasSubData: false,
      data: "Quotations",
      base: "quotation-list"
    },
    {
      hasSubData: true,
      data: "Quotations",
      data2: "Add Quotations",
      route: routes.quotationList,
      page: "add-quotation"
    },
    {
      hasSubData: true,
      data: "Quotations",
      data2: "Edit Quotations",
      route: routes.quotationList,
      page: "edit-quotation"
    },
    {
      hasSubData: false,
      data: "Delivery Challans",
      base: "delivery-challan-list"
    },
    {
      hasSubData: true,
      data: "Delivery Challans",
      data2: "Create New Delivery Challan",
      route: routes.deliveryChallanList,
      page: "add-delivery-challan"
    },
    {
      hasSubData: true,
      data: "Delivery Challans",
      data2: "Edit Delivery Challan",
      route: routes.deliveryChallanList,
      page: "edit-delivery-challan"
    },
    {
      hasSubData: false,
      data: "Customers",
      base: "customer-list"
    },
    {
      hasSubData: true,
      data: "Customers",
      data2: "Add New Customer",
      route: routes.customerList,
      page: "add-customer"
    },
    {
      hasSubData: true,
      data: "Customers",
      data2: "Add New Customer",
      route: routes.customerList,
      page: "edit-customer"
    },
    {
      hasSubData: false,
      data: "Purchases Order",
      base: "purchases-order-list"
    },
    {
      hasSubData: true,
      data: "Purchase Order",
      data2: "Add Purchases Order",
      route: routes.purchaseOrderList,
      page: "add-purchases-orders"
    },
    {
      hasSubData: true,
      data: "Purchase Order",
      data2: "Edit Purchases Order",
      route: routes.purchaseOrderList,
      page: "edit-purchases-orders"
    },
    {
      hasSubData: false,
      data: "Debit Notes",
      base: "debit-note-list"
    },
    {
      hasSubData: false,
      data: "Purchase",
      base: "purchase-list"
    },
    {
      hasSubData: true,
      data: "Debit Notes",
      data2: "Add Debit Note",
      route: routes.debitNoteList,
      page: "add-debit-notes"
    },
    {
      hasSubData: true,
      data: "Purchase",
      data2: "Add Purchase",
      route: routes.purchaseList,
      page: "add-purchase"
    },
    {
      hasSubData: true,
      data: "Purchase",
      data2: "Edit Purchase",
      route: routes.purchaseList,
      page: "edit-purchase"
    },
    {
      hasSubData: true,
      data: "Purchase",
      data2: "Edit Debit Note",
      route: routes.debitNoteList,
      page: "edit-debit-notes"
    },
    {
      hasSubData: false,
      data: "Suppliers",
      base: "suppliers"
    },
    {
      hasSubData: false,
      data: "Supplier Payments",
      base: "supplier-payments"
    },
    {
      hasSubData: false,
      data: "Expenses",
      base: "expense"
    },
    {
      hasSubData: false,
      data: "Income",
      base: "incomes"
    },
    {
      hasSubData: false,
      data: "Payments",
      base: "payments"
    },
    {
      hasSubData: false,
      data: "Transactions",
      base: "transactions"
    },
    {
      hasSubData: false,
      data: "Bank Accounts",
      base: "bank-accounts-list"
    },
    {
      hasSubData: false,
      data: "Money Transfer",
      base: "money-transfer"
    },
    {
      hasSubData: true,
      data: "Bank Accounts",
      data2: "Bank Accounts Type",
      route: routes.bankAccountList,
      page: "bank-accounts-type"
    },
    {
      hasSubData: true,
      data: "Roles",
      data2: "Permission",
      route: routes.rolesPermissions,
      page: "permission"
    },
    {
      hasSubData: false,
      data: "Roles & Permission",
      base: "roles-permissions"
    },
    {
      hasSubData: false,
      data: "Delete Account Request",
      base: "delete-account-request"
    },
    {
      hasSubData: false,
      data: "Users",
      base: "users"
    },
    {
      hasSubData: false,
      data: "Membership",
      base: "membership-plans"
    },
    {
      hasSubData: false,
      data: "Membership",
      base: "membership-addons"
    },
    {
      hasSubData: true,
      data: "Membership",
      data2: "Subscribes",
      route: routes.membershipPlans,
      page: "subscribers"
    },
    {
      hasSubData: true,
      data: "Membership",
      data2: "Transactions",
      route: routes.membershipPlans,
      page: "membership-transactions"
    },
    {
      hasSubData: false,
      data: "Contact Messages",
      base: "contact-messages"
    },
    {
      hasSubData: false,
      data: "Tickets List",
      base: "ticket-list"
    },
    {
      hasSubData: false,
      data: "Tickets Kanban View",
      base: "ticket-kanban"
    },
    {
      hasSubData: false,
      data: "Tickets List",
      base: "ticket-lists"
    },
    {
      hasSubData: false,
      data: "Ticket Overview",
      base: "ticket-details"
    },
    {
      hasSubData: false,
      data: "Settings",
      base: "settings"
    },
    {
      hasSubData: false,
      data: "Pages",
      base: "pages"
    },
    {
      hasSubData: true,
      data: "Blogs",
      route: routes.allBlogs,
      data2: "All Blogs",
      page: "all-blogs"
    },
    {
      hasSubData: true,
      data: "Blogs",
      route: routes.allBlogs,
      data2: "Add Blogs",
      page: "add-blogs"
    },
    {
      hasSubData: true,
      data: "Blogs",
      route: routes.allBlogs,
      data2: "Edit Blogs",
      page: "edit-blogs"
    },
    {
      hasSubData: true,
      data: "Blogs",
      route: routes.allBlogs,
      data2: "Blog Details",
      page: "blog-details"
    },
    {
      hasSubData: false,
      data: "Categories",
      base: "blog-categories"
    },
    {
      hasSubData: false,
      data: "Countries",
      base: "countries"
    },
    {
      hasSubData: false,
      data: "States",
      base: "states"
    },
    {
      hasSubData: false,
      data: "Cities",
      base: "cities"
    },
    {
      hasSubData: false,
      data: "Testimonials",
      base: "testimonials"
    },
    {
      hasSubData: false,
      data: "FAQ",
      base: "faq"
    },
    {
      hasSubData: false,
      data: "Notifications",
      base: "notifications"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Sales Report",
      page: "sales-report"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Sales Return",
      page: "sales-returns"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Sales Order Reports",
      page: "sales-orders"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Purchases Reports",
      page: "purchases-report"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Purchases Return Report",
      page: "purchase-return-report"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Purchases Order Report",
      page: "purchase-orders-reports"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Quotation Report",
      page: "quotation-report"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Expense Report",
      page: "expense-report"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Income Report",
      page: "income-report"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Profit Loss Report",
      page: "profit-loss-report"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Annual Report",
      page: "annual-report"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Balance Sheet",
      page: "balance-sheet"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Trial Balance",
      page: "trial-balance"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Cash Flow",
      page: "cash-flow"
    },
    {
      hasSubData: true,
      data: "Reports",
      data2: "Account Statement",
      page: "account-statement"
    },
    {
      hasSubData: false,
      data: "Profile",
      base: "profile"
    },
    {
      hasSubData: false,
      data: "Starter",
      base: "starter"
    },
    {
      hasSubData: false,
      data: "Timeline",
      base: "timeline"
    },
    {
      hasSubData: false,
      data: "Gallery",
      base: "gallery"
    },
    {
      hasSubData: false,
      data: "Pricing",
      base: "pricing"
    },
    {
      hasSubData: false,
      data: "API Keys",
      base: "api-keys"
    },
    {
      hasSubData: false,
      data: "Privacy Policy",
      base: "privacy-policy"
    },
    {
      hasSubData: false,
      data: "Terms & Condition",
      base: "terms-condition"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Chat",
      page: "chat"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Voice Call",
      page: "voice-call"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Video Call",
      page: "video-call"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Outgoing Call",
      page: "outgoing-call"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Incoming Call",
      page: "incoming-call"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Call History",
      page: "call-history"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Calender",
      page: "calender"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Email",
      page: "email"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Email",
      page: "email-reply"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "To Do",
      page: "todo"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Notes",
      page: "notes"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Kanban View",
      page: "kanban-view"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Contacts",
      page: "contacts"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Invoice",
      page: "invoice"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "File Manager",
      page: "file-manager"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Social Feed",
      page: "social-feed"
    },
    {
      hasSubData: true,
      data: "Application",
      data2: "Search List",
      page: "search-list"
    },
    {
      hasSubData: false,
      data: "Maps",
      base: "leaflets"
    },
    {
      hasSubData: false,
      data: "Fontawesome",
      base: "fontawesome"
    },
    {
      hasSubData: false,
      data: "Feather",
      base: "feather"
    },
    {
      hasSubData: false,
      data: "Ionic",
      base: "ionic"
    },
    {
      hasSubData: false,
      data: "Material",
      base: "material"
    },
    {
      hasSubData: false,
      data: "Pe7",
      base: "pe7"
    },
    {
      hasSubData: false,
      data: "Simpleline",
      base: "simple-line"
    },
    {
      hasSubData: false,
      data: "Themify",
      base: "themify"
    },
    {
      hasSubData: false,
      data: "Weather",
      base: "weather"
    },
    {
      hasSubData: false,
      data: "Typicon",
      base: "typicon"
    },
    {
      hasSubData: false,
      data: "flag",
      base: "flag"
    },
    {
      hasSubData: false,
      data: "Apex Charts",
      base: "apex-charts"
    },
    {
      hasSubData: false,
      data: "Prime Ng",
      base: "prime-ng"
    },
    {
      hasSubData: false,
      data: "Basic Table",
      base: "basic"
    },
    {
      hasSubData: false,
      data: "Data Table",
      base: "data-table"
    },
    {
      hasSubData: false,
      data: "Basic Inputs",
      base: "basic-inputs"
    },
    {
      hasSubData: false,
      data: "Checkbox & Radios",
      base: "form-checkbox-radios"
    },
    {
      hasSubData: false,
      data: "Input Groups",
      base: "input-groups"
    },
    {
      hasSubData: false,
      data: "Grid Gutters",
      base: "form-grid-gutters"
    },
    {
      hasSubData: false,
      data: "Input Mask",
      base: "form-mask"
    },
    {
      hasSubData: false,
      data: "File Upload",
      base: "file-upload"
    },
    {
      hasSubData: false,
      data: "Horizontal",
      base: "horizontal-form"
    },
    {
      hasSubData: false,
      data: "Vertical",
      base: "vertical-form"
    },
    {
      hasSubData: false,
      data: "Form Validation",
      base: "form-validation"
    },
    {
      hasSubData: false,
      data: "Form Pickers",
      base: "form-pickers"
    },
    {
      hasSubData: false,
      data: "Drag Drop",
      base: "drag-drop"
    },
    {
      hasSubData: false,
      data: "Clipboards",
      base: "clipboards"
    },
    {
      hasSubData: false,
      data: "Range Slider",
      base: "range-slider"
    },
    {
      hasSubData: false,
      data: "Light Box",
      base: "light-box"
    },
    {
      hasSubData: false,
      data: "Rating",
      base: "rating"
    },
    {
      hasSubData: false,
      data: "Text Editor",
      base: "text-editor"
    },
    {
      hasSubData: false,
      data: "Scrollbar",
      base: "scrollbar"
    },
    {
      hasSubData: false,
      data: "Counter",
      base: "counter"
    },
    {
      hasSubData: false,
      data: "Accordions",
      base: "accordions"
    },
    {
      hasSubData: false,
      data: "Alerts",
      base: "alert"
    },
    {
      hasSubData: false,
      data: "Avatar",
      base: "avatar"
    },
    {
      hasSubData: false,
      data: "Badges",
      base: "badges"
    },
    {
      hasSubData: false,
      data: "Breadcrumb",
      base: "breadcrumb"
    },
    {
      hasSubData: false,
      data: "Button Group",
      base: "button-group"
    },
    {
      hasSubData: false,
      data: "Buttons",
      base: "buttons"
    },
    {
      hasSubData: false,
      data: "Cards",
      base: "cards"
    },
    {
      hasSubData: false,
      data: "Carousel",
      base: "carousel"
    },
    {
      hasSubData: false,
      data: "Collapse",
      base: "collapse"
    },
    {
      hasSubData: false,
      data: "Dropdowns",
      base: "drop-down"
    },
    {
      hasSubData: false,
      data: "Grid",
      base: "grid"
    },
    {
      hasSubData: false,
      data: "Images",
      base: "images"
    },
    {
      hasSubData: false,
      data: "Links",
      base: "links"
    },
    {
      hasSubData: false,
      data: "List Group",
      base: "list-group"
    },
    {
      hasSubData: false,
      data: "Modals",
      base: "modal"
    },
    {
      hasSubData: false,
      data: "Offcanvas",
      base: "offcanvas"
    },
    {
      hasSubData: false,
      data: "Pagination",
      base: "pagination"
    },
    {
      hasSubData: false,
      data: "Placeholders",
      base: "placeholder"
    },
    {
      hasSubData: false,
      data: "Progress",
      base: "progress-bars"
    },
    {
      hasSubData: false,
      data: "Range Slider",
      base: "range-slider"
    },
    {
      hasSubData: false,
      data: "Ratio",
      base: "ratio"
    },
    {
      hasSubData: false,
      data: "Toasts",
      base: "toasts"
    },
    {
      hasSubData: false,
      data: "Spinner",
      base: "spinner"
    },
    {
      hasSubData: false,
      data: "Nav Tabs",
      base: "tabs"
    },
    {
      hasSubData: false,
      data: "Tooltip",
      base: "tooltip"
    },
    {
      hasSubData: false,
      data: "Typography",
      base: "typography"
    },
    {
      hasSubData: false,
      data: "Utilities",
      base: "utilities"
    },
    {
      hasSubData: false,
      data: "Dashboard",
      base: "dashboard"
    },
    {
      hasSubData: false,
      data: "Dashboard",
      base: "layout-default"
    },
    {
      hasSubData: false,
      data: "Dashboard",
      base: "layout-single"
    },
    {
      hasSubData: false,
      data: "Dashboard",
      base: "layout-mini"
    },
    {
      hasSubData: false,
      data: "Dashboard",
      base: "layout-transparent"
    },
    {
      hasSubData: false,
      data: "Dashboard",
      base: "layout-rtl"
    }
  ];
  getSideBarData = new BehaviorSubject(this.sideBar);
  getSideBar2Data = new BehaviorSubject(this.sideBar2);
  getSideBar3Data = new BehaviorSubject(this.sideBar3);
  getBreadCrumb = new BehaviorSubject(this.breadCrumb);
  resetData() {
    this.sideBar.map((res) => {
      res.showAsTab = false;
      res.menu.map((menus) => {
        menus.showSubRoute = false;
      });
    });
  }
  planBillingOwl = [
    {
      name: "Basic",
      remainingDays: "36 days remaining",
      price: "$49.99",
      billingPeriod: "Monthly",
      text: "Cancel Subscription",
      img: "assets/img/icons/basic.svg",
      customClass: true
    },
    {
      name: "ENTERPRISES",
      remainingDays: "365 days remaining",
      price: "$199.99",
      billingPeriod: "Yearly",
      text: "Upgrade",
      img: "assets/img/icons/basic.svg",
      customClass: false
    },
    {
      name: "Basic",
      remainingDays: "36 days remaining",
      price: "$49.99",
      billingPeriod: "Monthly",
      text: "Cancel Subscription",
      img: "assets/img/icons/basic.svg",
      customClass: false
    },
    {
      name: "ENTERPRISES",
      remainingDays: "365 days remaining",
      price: "$199.99",
      billingPeriod: "Yearly",
      text: "Upgrade",
      img: "assets/img/icons/basic.svg",
      customClass: false
    }
  ];
  static \u0275fac = function DataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/common/common.service.ts
var CommonService = class _CommonService {
  baseRoute = new BehaviorSubject("");
  pageRoute = new BehaviorSubject("");
  lastRoute = new BehaviorSubject("");
  currentRoute = new BehaviorSubject("");
  static \u0275fac = function CommonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommonService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommonService, factory: _CommonService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/side-bar/side-bar.service.ts
var SideBarService = class _SideBarService {
  data;
  common;
  renderer;
  toggleSideBar = new BehaviorSubject(localStorage.getItem("isMiniSidebar") || "false");
  toggleMobileSideBar = new BehaviorSubject(localStorage.getItem("isMobileSidebar") || "false");
  expandSideBar = new BehaviorSubject("false");
  layoutPosition = new BehaviorSubject(localStorage.getItem("layoutPosition") || "1");
  layoutDirection = new BehaviorSubject(localStorage.getItem("layoutDirection") || "ltr");
  layoutColor = new BehaviorSubject(localStorage.getItem("layoutColor") || "1");
  layoutWidth = new BehaviorSubject(localStorage.getItem("layoutWidth") || "1");
  layoutTopColor = new BehaviorSubject(localStorage.getItem("layoutTopColor") || "1");
  layoutSidebarColor = new BehaviorSubject(localStorage.getItem("layoutSidebarColor") || "1");
  layoutPositionScroll = new BehaviorSubject(localStorage.getItem("layoutPositionScroll") || "1");
  layoutSidebarSize = new BehaviorSubject(localStorage.getItem("layoutSidebarSize") || "1");
  layoutSidebarView = new BehaviorSubject(localStorage.getItem("layoutSidebarView") || "1");
  sideBarPosition = new BehaviorSubject(localStorage.getItem("sideBarPosition") || "false");
  headerSidebarStyle = new BehaviorSubject(localStorage.getItem("headerSidebarStyle") || "1");
  primarySkinStyle = new BehaviorSubject(localStorage.getItem("primarySkinStyle") || "0");
  constructor(data, rendererFactory, common) {
    this.data = data;
    this.common = common;
    this.renderer = rendererFactory.createRenderer(null, null);
    if (localStorage.getItem("isMiniSidebar") == "true") {
      this.expandSideBar.next("false");
    } else {
      this.expandSideBar.next("true");
    }
  }
  switchSideMenuPosition() {
    if (localStorage.getItem("isMiniSidebar")) {
      this.toggleSideBar.next("false");
      this.expandSideBar.next("true");
      localStorage.removeItem("isMiniSidebar");
      this.data.sideBar.map((mainMenus) => {
        mainMenus.menu.map((resMenu) => {
          const menuValue = sessionStorage.getItem("menuValue");
          if (menuValue && menuValue == resMenu.menuValue) {
            resMenu.showSubRoute = true;
          }
        });
      });
    } else {
      this.toggleSideBar.next("true");
      this.expandSideBar.next("false");
      localStorage.setItem("isMiniSidebar", "true");
      this.data.sideBar.map((mainMenus) => {
        mainMenus.menu.map((resMenu) => {
          resMenu.showSubRoute = false;
        });
      });
    }
  }
  themeColors = new BehaviorSubject(localStorage.getItem("themeColor") || "light");
  switchMobileSideBarPosition() {
    if (localStorage.getItem("isMobileSidebar")) {
      this.toggleMobileSideBar.next("false");
      localStorage.removeItem("isMobileSidebar");
    } else {
      this.toggleMobileSideBar.next("true");
      localStorage.setItem("isMobileSidebar", "true");
    }
  }
  // <* to check layout colors *>
  changeColors(position) {
    this.layoutColor.next(position);
    localStorage.setItem("layoutColor", position);
  }
  // <* to check layout Width *>
  changeWidth(position) {
    this.layoutWidth.next(position);
    localStorage.setItem("layoutWidth", position);
  }
  // <* to check layout sidebar color *>
  changeSidebarColor(position) {
    this.layoutSidebarColor.next(position);
    localStorage.setItem("layoutSidebarColor", position);
  }
  // <* to check layout color *>
  changeTopcolor(position) {
    this.layoutTopColor.next(position);
    localStorage.setItem("layoutTopColor", position);
  }
  // <* to check layout Scroll *>
  changepositionscroll(position) {
    this.layoutPositionScroll.next(position);
    localStorage.setItem("layoutPositionScroll", position);
  }
  // <* to check layout position *>
  changeSidebarSize(position) {
    this.layoutSidebarSize.next(position);
    localStorage.setItem("layoutSidebarSize", position);
  }
  // <* to check layout position *>
  changeSidebarView(position) {
    this.layoutSidebarView.next(position);
    localStorage.setItem("layoutSidebarView", position);
  }
  changeLayout(position) {
    this.layoutPosition.next(position);
    localStorage.setItem("layoutPosition", position);
  }
  changeStyle(style2) {
    this.headerSidebarStyle.next(style2);
    localStorage.setItem("headerSidebarStyle", style2);
  }
  changePrimarySkinStyle(style2) {
    if (localStorage.getItem("primarySkinStyle") == style2) {
      this.primarySkinStyle.next("0");
      localStorage.setItem("primarySkinStyle", "0");
    } else {
      this.primarySkinStyle.next(style2);
      localStorage.setItem("primarySkinStyle", style2);
    }
  }
  changeThemeColor(themeColors) {
    this.themeColors.next(themeColors);
    localStorage.setItem("themeColor", themeColors);
    this.renderer.setAttribute(document.documentElement, "data-bs-theme", themeColors === "light" ? "light" : "dark");
  }
  resetMiniSidebar() {
    this.toggleSideBar.next("false");
    this.toggleSideBar.next("false");
    localStorage.removeItem("isMiniSidebar");
  }
  static \u0275fac = function SideBarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideBarService)(\u0275\u0275inject(DataService), \u0275\u0275inject(RendererFactory2), \u0275\u0275inject(CommonService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SideBarService, factory: _SideBarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideBarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: DataService }, { type: RendererFactory2 }, { type: CommonService }], null);
})();

// node_modules/ngx-toastr/fesm2022/ngx-toastr.mjs
var _c0 = ["toast-component", ""];
function Toast_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function Toast_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "\xD7");
    \u0275\u0275elementEnd()();
  }
}
function Toast_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[", ctx_r1.duplicatesCount + 1, "]");
  }
}
function Toast_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275template(2, Toast_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.options.titleClass);
    \u0275\u0275attribute("aria-label", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.duplicatesCount);
  }
}
function Toast_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.options.messageClass);
    \u0275\u0275property("innerHTML", ctx_r1.message, \u0275\u0275sanitizeHtml);
  }
}
function Toast_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.options.messageClass);
    \u0275\u0275attribute("aria-label", ctx_r1.message);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message, " ");
  }
}
function Toast_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.width() + "%");
  }
}
function ToastNoAnimation_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ToastNoAnimation_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "\xD7");
    \u0275\u0275elementEnd()();
  }
}
function ToastNoAnimation_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[", ctx_r1.duplicatesCount + 1, "]");
  }
}
function ToastNoAnimation_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ToastNoAnimation_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.options.titleClass);
    \u0275\u0275attribute("aria-label", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.duplicatesCount);
  }
}
function ToastNoAnimation_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.options.messageClass);
    \u0275\u0275property("innerHTML", ctx_r1.message, \u0275\u0275sanitizeHtml);
  }
}
function ToastNoAnimation_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.options.messageClass);
    \u0275\u0275attribute("aria-label", ctx_r1.message);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message, " ");
  }
}
function ToastNoAnimation_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.width() + "%");
  }
}
var ToastContainerDirective = class _ToastContainerDirective {
  el;
  constructor(el) {
    this.el = el;
  }
  getContainerElement() {
    return this.el.nativeElement;
  }
  static \u0275fac = function ToastContainerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ToastContainerDirective,
    selectors: [["", "toastContainer", ""]],
    exportAs: ["toastContainer"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[toastContainer]",
      exportAs: "toastContainer",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var ComponentPortal = class {
  _attachedHost;
  /** The type of the component that will be instantiated for attachment. */
  component;
  /**
   * [Optional] Where the attached component should live in Angular's *logical* component tree.
   * This is different from where the component *renders*, which is determined by the PortalHost.
   * The origin necessary when the host is outside of the Angular application context.
   */
  viewContainerRef;
  /** Injector used for the instantiation of the component. */
  injector;
  constructor(component, injector) {
    this.component = component;
    this.injector = injector;
  }
  /** Attach this portal to a host. */
  attach(host, newestOnTop) {
    this._attachedHost = host;
    return host.attach(this, newestOnTop);
  }
  /** Detach this portal from its host */
  detach() {
    const host = this._attachedHost;
    if (host) {
      this._attachedHost = void 0;
      return host.detach();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalHost reference without performing `attach()`. This is used directly by
   * the PortalHost when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var BasePortalHost = class {
  /** The portal currently attached to the host. */
  _attachedPortal;
  /** A function that will permanently dispose this host. */
  _disposeFn;
  attach(portal, newestOnTop) {
    this._attachedPortal = portal;
    return this.attachComponentPortal(portal, newestOnTop);
  }
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost();
    }
    this._attachedPortal = void 0;
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = void 0;
    }
  }
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
};
var ToastRef = class {
  _overlayRef;
  /** The instance of component opened into the toast. */
  componentInstance;
  /** Count of duplicates of this toast */
  duplicatesCount = 0;
  /** Subject for notifying the user that the toast has finished closing. */
  _afterClosed = new Subject();
  /** triggered when toast is activated */
  _activate = new Subject();
  /** notifies the toast that it should close before the timeout */
  _manualClose = new Subject();
  /** notifies the toast that it should reset the timeouts */
  _resetTimeout = new Subject();
  /** notifies the toast that it should count a duplicate toast */
  _countDuplicate = new Subject();
  constructor(_overlayRef) {
    this._overlayRef = _overlayRef;
  }
  manualClose() {
    this._manualClose.next();
    this._manualClose.complete();
  }
  manualClosed() {
    return this._manualClose.asObservable();
  }
  timeoutReset() {
    return this._resetTimeout.asObservable();
  }
  countDuplicate() {
    return this._countDuplicate.asObservable();
  }
  /**
   * Close the toast.
   */
  close() {
    this._overlayRef.detach();
    this._afterClosed.next();
    this._manualClose.next();
    this._afterClosed.complete();
    this._manualClose.complete();
    this._activate.complete();
    this._resetTimeout.complete();
    this._countDuplicate.complete();
  }
  /** Gets an observable that is notified when the toast is finished closing. */
  afterClosed() {
    return this._afterClosed.asObservable();
  }
  isInactive() {
    return this._activate.isStopped;
  }
  activate() {
    this._activate.next();
    this._activate.complete();
  }
  /** Gets an observable that is notified when the toast has started opening. */
  afterActivate() {
    return this._activate.asObservable();
  }
  /** Reset the toast timouts and count duplicates */
  onDuplicate(resetTimeout, countDuplicate) {
    if (resetTimeout) {
      this._resetTimeout.next();
    }
    if (countDuplicate) {
      this._countDuplicate.next(++this.duplicatesCount);
    }
  }
};
var ToastPackage = class {
  toastId;
  config;
  message;
  title;
  toastType;
  toastRef;
  _onTap = new Subject();
  _onAction = new Subject();
  constructor(toastId, config, message, title, toastType, toastRef) {
    this.toastId = toastId;
    this.config = config;
    this.message = message;
    this.title = title;
    this.toastType = toastType;
    this.toastRef = toastRef;
    this.toastRef.afterClosed().subscribe(() => {
      this._onAction.complete();
      this._onTap.complete();
    });
  }
  /** Fired on click */
  triggerTap() {
    this._onTap.next();
    if (this.config.tapToDismiss) {
      this._onTap.complete();
    }
  }
  onTap() {
    return this._onTap.asObservable();
  }
  /** available for use in custom toast */
  triggerAction(action) {
    this._onAction.next(action);
  }
  onAction() {
    return this._onAction.asObservable();
  }
};
var DefaultNoComponentGlobalConfig = {
  maxOpened: 0,
  autoDismiss: false,
  newestOnTop: true,
  preventDuplicates: false,
  countDuplicates: false,
  resetTimeoutOnDuplicate: false,
  includeTitleDuplicates: false,
  iconClasses: {
    error: "toast-error",
    info: "toast-info",
    success: "toast-success",
    warning: "toast-warning"
  },
  // Individual
  closeButton: false,
  disableTimeOut: false,
  timeOut: 5e3,
  extendedTimeOut: 1e3,
  enableHtml: false,
  progressBar: false,
  toastClass: "ngx-toastr",
  positionClass: "toast-top-right",
  titleClass: "toast-title",
  messageClass: "toast-message",
  easing: "ease-in",
  easeTime: 300,
  tapToDismiss: true,
  onActivateTick: false,
  progressAnimation: "decreasing"
};
var TOAST_CONFIG = new InjectionToken("ToastConfig");
var DomPortalHost = class extends BasePortalHost {
  _hostDomElement;
  _componentFactoryResolver;
  _appRef;
  constructor(_hostDomElement, _componentFactoryResolver, _appRef) {
    super();
    this._hostDomElement = _hostDomElement;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   */
  attachComponentPortal(portal, newestOnTop) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
    let componentRef;
    componentRef = componentFactory.create(portal.injector);
    this._appRef.attachView(componentRef.hostView);
    this.setDisposeFn(() => {
      this._appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
    if (newestOnTop) {
      this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
    } else {
      this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
    }
    return componentRef;
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var OverlayContainer = class _OverlayContainer {
  _document = inject(DOCUMENT);
  _containerElement;
  ngOnDestroy() {
    if (this._containerElement && this._containerElement.parentNode) {
      this._containerElement.parentNode.removeChild(this._containerElement);
    }
  }
  /**
   * This method returns the overlay container element. It will lazily
   * create the element the first time  it is called to facilitate using
   * the container in non-browser environments.
   * @returns the container element
   */
  getContainerElement() {
    if (!this._containerElement) {
      this._createContainer();
    }
    return this._containerElement;
  }
  /**
   * Create the overlay container element, which is simply a div
   * with the 'cdk-overlay-container' class on the document body
   * and 'aria-live="polite"'
   */
  _createContainer() {
    const container = this._document.createElement("div");
    container.classList.add("overlay-container");
    container.setAttribute("aria-live", "polite");
    this._document.body.appendChild(container);
    this._containerElement = container;
  }
  static \u0275fac = function OverlayContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayContainer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayContainer,
    factory: _OverlayContainer.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OverlayRef = class {
  _portalHost;
  constructor(_portalHost) {
    this._portalHost = _portalHost;
  }
  attach(portal, newestOnTop = true) {
    return this._portalHost.attach(portal, newestOnTop);
  }
  /**
   * Detaches an overlay from a portal.
   * @returns Resolves when the overlay has been detached.
   */
  detach() {
    return this._portalHost.detach();
  }
};
var Overlay = class _Overlay {
  _overlayContainer = inject(OverlayContainer);
  _componentFactoryResolver = inject(ComponentFactoryResolver$1);
  _appRef = inject(ApplicationRef);
  _document = inject(DOCUMENT);
  // Namespace panes by overlay container
  _paneElements = /* @__PURE__ */ new Map();
  /**
   * Creates an overlay.
   * @returns A reference to the created overlay.
   */
  create(positionClass, overlayContainer) {
    return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
  }
  getPaneElement(positionClass = "", overlayContainer) {
    if (!this._paneElements.get(overlayContainer)) {
      this._paneElements.set(overlayContainer, {});
    }
    if (!this._paneElements.get(overlayContainer)[positionClass]) {
      this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
    }
    return this._paneElements.get(overlayContainer)[positionClass];
  }
  /**
   * Creates the DOM element for an overlay and appends it to the overlay container.
   * @returns Newly-created pane element
   */
  _createPaneElement(positionClass, overlayContainer) {
    const pane = this._document.createElement("div");
    pane.id = "toast-container";
    pane.classList.add(positionClass);
    pane.classList.add("toast-container");
    if (!overlayContainer) {
      this._overlayContainer.getContainerElement().appendChild(pane);
    } else {
      overlayContainer.getContainerElement().appendChild(pane);
    }
    return pane;
  }
  /**
   * Create a DomPortalHost into which the overlay content can be loaded.
   * @param pane The DOM element to turn into a portal host.
   * @returns A portal host for the given DOM element.
   */
  _createPortalHost(pane) {
    return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
  }
  /**
   * Creates an OverlayRef for an overlay in the given DOM element.
   * @param pane DOM element for the overlay
   */
  _createOverlayRef(pane) {
    return new OverlayRef(this._createPortalHost(pane));
  }
  static \u0275fac = function Overlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Overlay)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Overlay,
    factory: _Overlay.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ToastrService = class _ToastrService {
  overlay;
  _injector;
  sanitizer;
  ngZone;
  toastrConfig;
  currentlyActive = 0;
  toasts = [];
  overlayContainer;
  previousToastMessage;
  index = 0;
  constructor(token, overlay, _injector, sanitizer, ngZone) {
    this.overlay = overlay;
    this._injector = _injector;
    this.sanitizer = sanitizer;
    this.ngZone = ngZone;
    this.toastrConfig = __spreadValues(__spreadValues({}, token.default), token.config);
    if (token.config.iconClasses) {
      this.toastrConfig.iconClasses = __spreadValues(__spreadValues({}, token.default.iconClasses), token.config.iconClasses);
    }
  }
  /** show toast */
  show(message, title, override = {}, type = "") {
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show successful toast */
  success(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.success || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show error toast */
  error(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.error || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show info toast */
  info(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.info || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show warning toast */
  warning(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.warning || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /**
   * Remove all or a single toast by id
   */
  clear(toastId) {
    for (const toast of this.toasts) {
      if (toastId !== void 0) {
        if (toast.toastId === toastId) {
          toast.toastRef.manualClose();
          return;
        }
      } else {
        toast.toastRef.manualClose();
      }
    }
  }
  /**
   * Remove and destroy a single toast by id
   */
  remove(toastId) {
    const found = this._findToast(toastId);
    if (!found) {
      return false;
    }
    found.activeToast.toastRef.close();
    this.toasts.splice(found.index, 1);
    this.currentlyActive = this.currentlyActive - 1;
    if (!this.toastrConfig.maxOpened || !this.toasts.length) {
      return false;
    }
    if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
      const p = this.toasts[this.currentlyActive].toastRef;
      if (!p.isInactive()) {
        this.currentlyActive = this.currentlyActive + 1;
        p.activate();
      }
    }
    return true;
  }
  /**
   * Determines if toast message is already shown
   */
  findDuplicate(title = "", message = "", resetOnDuplicate, countDuplicates) {
    const {
      includeTitleDuplicates
    } = this.toastrConfig;
    for (const toast of this.toasts) {
      const hasDuplicateTitle = includeTitleDuplicates && toast.title === title;
      if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
        toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
        return toast;
      }
    }
    return null;
  }
  /** create a clone of global config and apply individual settings */
  applyConfig(override = {}) {
    return __spreadValues(__spreadValues({}, this.toastrConfig), override);
  }
  /**
   * Find toast object by id
   */
  _findToast(toastId) {
    for (let i = 0; i < this.toasts.length; i++) {
      if (this.toasts[i].toastId === toastId) {
        return {
          index: i,
          activeToast: this.toasts[i]
        };
      }
    }
    return null;
  }
  /**
   * Determines the need to run inside angular's zone then builds the toast
   */
  _preBuildNotification(toastType, message, title, config) {
    if (config.onActivateTick) {
      return this.ngZone.run(() => this._buildNotification(toastType, message, title, config));
    }
    return this._buildNotification(toastType, message, title, config);
  }
  /**
   * Creates and attaches toast data to component
   * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
   */
  _buildNotification(toastType, message, title, config) {
    if (!config.toastComponent) {
      throw new Error("toastComponent required");
    }
    const duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);
    if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) {
      return duplicate;
    }
    this.previousToastMessage = message;
    let keepInactive = false;
    if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
      keepInactive = true;
      if (this.toastrConfig.autoDismiss) {
        this.clear(this.toasts[0].toastId);
      }
    }
    const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
    this.index = this.index + 1;
    let sanitizedMessage = message;
    if (message && config.enableHtml) {
      sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
    }
    const toastRef = new ToastRef(overlayRef);
    const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
    const providers = [{
      provide: ToastPackage,
      useValue: toastPackage
    }];
    const toastInjector = Injector.create({
      providers,
      parent: this._injector
    });
    const component = new ComponentPortal(config.toastComponent, toastInjector);
    const portal = overlayRef.attach(component, config.newestOnTop);
    toastRef.componentInstance = portal.instance;
    const ins = {
      toastId: this.index,
      title: title || "",
      message: message || "",
      toastRef,
      onShown: toastRef.afterActivate(),
      onHidden: toastRef.afterClosed(),
      onTap: toastPackage.onTap(),
      onAction: toastPackage.onAction(),
      portal
    };
    if (!keepInactive) {
      this.currentlyActive = this.currentlyActive + 1;
      setTimeout(() => {
        ins.toastRef.activate();
      });
    }
    this.toasts.push(ins);
    return ins;
  }
  static \u0275fac = function ToastrService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastrService)(\u0275\u0275inject(TOAST_CONFIG), \u0275\u0275inject(Overlay), \u0275\u0275inject(Injector), \u0275\u0275inject(DomSanitizer), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastrService,
    factory: _ToastrService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastrService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [TOAST_CONFIG]
    }]
  }, {
    type: Overlay
  }, {
    type: Injector
  }, {
    type: DomSanitizer
  }, {
    type: NgZone
  }], null);
})();
var Toast = class _Toast {
  toastrService;
  toastPackage;
  ngZone;
  message;
  title;
  options;
  duplicatesCount;
  originalTimeout;
  /** width of progress bar */
  width = signal(-1);
  /** a combination of toast type and options.toastClass */
  toastClasses = "";
  state;
  /** controls animation */
  get _state() {
    return this.state();
  }
  /** hides component when waiting to be displayed */
  get displayStyle() {
    if (this.state().value === "inactive") {
      return "none";
    }
    return;
  }
  timeout;
  intervalId;
  hideTime;
  sub;
  sub1;
  sub2;
  sub3;
  constructor(toastrService, toastPackage, ngZone) {
    this.toastrService = toastrService;
    this.toastPackage = toastPackage;
    this.ngZone = ngZone;
    this.message = toastPackage.message;
    this.title = toastPackage.title;
    this.options = toastPackage.config;
    this.originalTimeout = toastPackage.config.timeOut;
    this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
    this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
      this.activateToast();
    });
    this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
      this.remove();
    });
    this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
      this.resetTimeout();
    });
    this.sub3 = toastPackage.toastRef.countDuplicate().subscribe((count) => {
      this.duplicatesCount = count;
    });
    this.state = signal({
      value: "inactive",
      params: {
        easeTime: this.toastPackage.config.easeTime,
        easing: "ease-in"
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    clearInterval(this.intervalId);
    clearTimeout(this.timeout);
  }
  /**
   * activates toast and sets timeout
   */
  activateToast() {
    this.state.update((state2) => __spreadProps(__spreadValues({}, state2), {
      value: "active"
    }));
    if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === "timeOut") && this.options.timeOut) {
      this.outsideTimeout(() => this.remove(), this.options.timeOut);
      this.hideTime = (/* @__PURE__ */ new Date()).getTime() + this.options.timeOut;
      if (this.options.progressBar) {
        this.outsideInterval(() => this.updateProgress(), 10);
      }
    }
  }
  /**
   * updates progress bar width
   */
  updateProgress() {
    if (this.width() === 0 || this.width() === 100 || !this.options.timeOut) {
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    const remaining = this.hideTime - now;
    this.width.set(remaining / this.options.timeOut * 100);
    if (this.options.progressAnimation === "increasing") {
      this.width.update((width) => 100 - width);
    }
    if (this.width() <= 0) {
      this.width.set(0);
    }
    if (this.width() >= 100) {
      this.width.set(100);
    }
  }
  resetTimeout() {
    clearTimeout(this.timeout);
    clearInterval(this.intervalId);
    this.state.update((state2) => __spreadProps(__spreadValues({}, state2), {
      value: "active"
    }));
    this.outsideTimeout(() => this.remove(), this.originalTimeout);
    this.options.timeOut = this.originalTimeout;
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
    this.width.set(-1);
    if (this.options.progressBar) {
      this.outsideInterval(() => this.updateProgress(), 10);
    }
  }
  /**
   * tells toastrService to remove this toast after animation time
   */
  remove() {
    if (this.state().value === "removed") {
      return;
    }
    clearTimeout(this.timeout);
    this.state.update((state2) => __spreadProps(__spreadValues({}, state2), {
      value: "removed"
    }));
    this.outsideTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime);
  }
  tapToast() {
    if (this.state().value === "removed") {
      return;
    }
    this.toastPackage.triggerTap();
    if (this.options.tapToDismiss) {
      this.remove();
    }
  }
  stickAround() {
    if (this.state().value === "removed") {
      return;
    }
    if (this.options.disableTimeOut !== "extendedTimeOut") {
      clearTimeout(this.timeout);
      this.options.timeOut = 0;
      this.hideTime = 0;
      clearInterval(this.intervalId);
      this.width.set(0);
    }
  }
  delayedHideToast() {
    if (this.options.disableTimeOut === true || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state().value === "removed") {
      return;
    }
    this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut);
    this.options.timeOut = this.options.extendedTimeOut;
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
    this.width.set(-1);
    if (this.options.progressBar) {
      this.outsideInterval(() => this.updateProgress(), 10);
    }
  }
  outsideTimeout(func, timeout2) {
    if (this.ngZone) {
      this.ngZone.runOutsideAngular(() => this.timeout = setTimeout(() => this.runInsideAngular(func), timeout2));
    } else {
      this.timeout = setTimeout(() => func(), timeout2);
    }
  }
  outsideInterval(func, timeout2) {
    if (this.ngZone) {
      this.ngZone.runOutsideAngular(() => this.intervalId = setInterval(() => this.runInsideAngular(func), timeout2));
    } else {
      this.intervalId = setInterval(() => func(), timeout2);
    }
  }
  runInsideAngular(func) {
    if (this.ngZone) {
      this.ngZone.run(() => func());
    } else {
      func();
    }
  }
  static \u0275fac = function Toast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toast)(\u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ToastPackage), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["", "toast-component", ""]],
    hostVars: 5,
    hostBindings: function Toast_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function Toast_click_HostBindingHandler() {
          return ctx.tapToast();
        })("mouseenter", function Toast_mouseenter_HostBindingHandler() {
          return ctx.stickAround();
        })("mouseleave", function Toast_mouseleave_HostBindingHandler() {
          return ctx.delayedHideToast();
        });
      }
      if (rf & 2) {
        \u0275\u0275syntheticHostProperty("@flyInOut", ctx._state);
        \u0275\u0275classMap(ctx.toastClasses);
        \u0275\u0275styleProp("display", ctx.displayStyle);
      }
    },
    attrs: _c0,
    decls: 5,
    vars: 5,
    consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Toast_button_0_Template, 3, 0, "button", 0)(1, Toast_div_1_Template, 3, 5, "div", 1)(2, Toast_div_2_Template, 1, 3, "div", 2)(3, Toast_div_3_Template, 2, 4, "div", 3)(4, Toast_div_4_Template, 2, 2, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.options.closeButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.message && ctx.options.enableHtml);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.message && !ctx.options.enableHtml);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.options.progressBar);
      }
    },
    dependencies: [NgIf],
    encapsulation: 2,
    data: {
      animation: [trigger("flyInOut", [state("inactive", style({
        opacity: 0
      })), state("active", style({
        opacity: 1
      })), state("removed", style({
        opacity: 0
      })), transition("inactive => active", animate("{{ easeTime }}ms {{ easing }}")), transition("active => removed", animate("{{ easeTime }}ms {{ easing }}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "[toast-component]",
      template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width() + '%'"></div>
  </div>
  `,
      animations: [trigger("flyInOut", [state("inactive", style({
        opacity: 0
      })), state("active", style({
        opacity: 1
      })), state("removed", style({
        opacity: 0
      })), transition("inactive => active", animate("{{ easeTime }}ms {{ easing }}")), transition("active => removed", animate("{{ easeTime }}ms {{ easing }}"))])],
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: ToastrService
  }, {
    type: ToastPackage
  }, {
    type: NgZone
  }], {
    toastClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    _state: [{
      type: HostBinding,
      args: ["@flyInOut"]
    }],
    displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    tapToast: [{
      type: HostListener,
      args: ["click"]
    }],
    stickAround: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    delayedHideToast: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var DefaultGlobalConfig = __spreadProps(__spreadValues({}, DefaultNoComponentGlobalConfig), {
  toastComponent: Toast
});
var provideToastr = (config = {}) => {
  const providers = [{
    provide: TOAST_CONFIG,
    useValue: {
      default: DefaultGlobalConfig,
      config
    }
  }];
  return makeEnvironmentProviders(providers);
};
var ToastrModule = class _ToastrModule {
  static forRoot(config = {}) {
    return {
      ngModule: _ToastrModule,
      providers: [provideToastr(config)]
    };
  }
  static \u0275fac = function ToastrModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastrModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastrModule,
    imports: [Toast],
    exports: [Toast]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastrModule, [{
    type: NgModule,
    args: [{
      imports: [Toast],
      exports: [Toast]
    }]
  }], null, null);
})();
var ToastrComponentlessModule = class _ToastrComponentlessModule {
  static forRoot(config = {}) {
    return {
      ngModule: ToastrModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultNoComponentGlobalConfig,
          config
        }
      }]
    };
  }
  static \u0275fac = function ToastrComponentlessModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastrComponentlessModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastrComponentlessModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastrComponentlessModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var ToastNoAnimation = class _ToastNoAnimation {
  toastrService;
  toastPackage;
  appRef;
  message;
  title;
  options;
  duplicatesCount;
  originalTimeout;
  /** width of progress bar */
  width = signal(-1);
  /** a combination of toast type and options.toastClass */
  toastClasses = "";
  /** hides component when waiting to be displayed */
  get displayStyle() {
    if (this.state() === "inactive") {
      return "none";
    }
    return null;
  }
  /** controls animation */
  state = signal("inactive");
  timeout;
  intervalId;
  hideTime;
  sub;
  sub1;
  sub2;
  sub3;
  constructor(toastrService, toastPackage, appRef) {
    this.toastrService = toastrService;
    this.toastPackage = toastPackage;
    this.appRef = appRef;
    this.message = toastPackage.message;
    this.title = toastPackage.title;
    this.options = toastPackage.config;
    this.originalTimeout = toastPackage.config.timeOut;
    this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
    this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
      this.activateToast();
    });
    this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
      this.remove();
    });
    this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
      this.resetTimeout();
    });
    this.sub3 = toastPackage.toastRef.countDuplicate().subscribe((count) => {
      this.duplicatesCount = count;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    clearInterval(this.intervalId);
    clearTimeout(this.timeout);
  }
  /**
   * activates toast and sets timeout
   */
  activateToast() {
    this.state.set("active");
    if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === "timeOut") && this.options.timeOut) {
      this.timeout = setTimeout(() => {
        this.remove();
      }, this.options.timeOut);
      this.hideTime = (/* @__PURE__ */ new Date()).getTime() + this.options.timeOut;
      if (this.options.progressBar) {
        this.intervalId = setInterval(() => this.updateProgress(), 10);
      }
    }
    if (this.options.onActivateTick) {
      this.appRef.tick();
    }
  }
  /**
   * updates progress bar width
   */
  updateProgress() {
    if (this.width() === 0 || this.width() === 100 || !this.options.timeOut) {
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    const remaining = this.hideTime - now;
    this.width.set(remaining / this.options.timeOut * 100);
    if (this.options.progressAnimation === "increasing") {
      this.width.update((width) => 100 - width);
    }
    if (this.width() <= 0) {
      this.width.set(0);
    }
    if (this.width() >= 100) {
      this.width.set(100);
    }
  }
  resetTimeout() {
    clearTimeout(this.timeout);
    clearInterval(this.intervalId);
    this.state.set("active");
    this.options.timeOut = this.originalTimeout;
    this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.originalTimeout || 0);
    this.width.set(-1);
    if (this.options.progressBar) {
      this.intervalId = setInterval(() => this.updateProgress(), 10);
    }
  }
  /**
   * tells toastrService to remove this toast after animation time
   */
  remove() {
    if (this.state() === "removed") {
      return;
    }
    clearTimeout(this.timeout);
    this.state.set("removed");
    this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
  }
  tapToast() {
    if (this.state() === "removed") {
      return;
    }
    this.toastPackage.triggerTap();
    if (this.options.tapToDismiss) {
      this.remove();
    }
  }
  stickAround() {
    if (this.state() === "removed") {
      return;
    }
    clearTimeout(this.timeout);
    this.options.timeOut = 0;
    this.hideTime = 0;
    clearInterval(this.intervalId);
    this.width.set(0);
  }
  delayedHideToast() {
    if (this.options.disableTimeOut === true || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state() === "removed") {
      return;
    }
    this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
    this.options.timeOut = this.options.extendedTimeOut;
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
    this.width.set(-1);
    if (this.options.progressBar) {
      this.intervalId = setInterval(() => this.updateProgress(), 10);
    }
  }
  static \u0275fac = function ToastNoAnimation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastNoAnimation)(\u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ToastPackage), \u0275\u0275directiveInject(ApplicationRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastNoAnimation,
    selectors: [["", "toast-component", ""]],
    hostVars: 4,
    hostBindings: function ToastNoAnimation_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ToastNoAnimation_click_HostBindingHandler() {
          return ctx.tapToast();
        })("mouseenter", function ToastNoAnimation_mouseenter_HostBindingHandler() {
          return ctx.stickAround();
        })("mouseleave", function ToastNoAnimation_mouseleave_HostBindingHandler() {
          return ctx.delayedHideToast();
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.toastClasses);
        \u0275\u0275styleProp("display", ctx.displayStyle);
      }
    },
    attrs: _c0,
    decls: 5,
    vars: 5,
    consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]],
    template: function ToastNoAnimation_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ToastNoAnimation_button_0_Template, 3, 0, "button", 0)(1, ToastNoAnimation_div_1_Template, 3, 5, "div", 1)(2, ToastNoAnimation_div_2_Template, 1, 3, "div", 2)(3, ToastNoAnimation_div_3_Template, 2, 4, "div", 3)(4, ToastNoAnimation_div_4_Template, 2, 2, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.options.closeButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.message && ctx.options.enableHtml);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.message && !ctx.options.enableHtml);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.options.progressBar);
      }
    },
    dependencies: [NgIf],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNoAnimation, [{
    type: Component,
    args: [{
      selector: "[toast-component]",
      template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width() + '%'"></div>
  </div>
  `,
      standalone: true,
      imports: [NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: ToastrService
  }, {
    type: ToastPackage
  }, {
    type: ApplicationRef
  }], {
    toastClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    tapToast: [{
      type: HostListener,
      args: ["click"]
    }],
    stickAround: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    delayedHideToast: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var DefaultNoAnimationsGlobalConfig = __spreadProps(__spreadValues({}, DefaultNoComponentGlobalConfig), {
  toastComponent: ToastNoAnimation
});
var ToastNoAnimationModule = class _ToastNoAnimationModule {
  static forRoot(config = {}) {
    return {
      ngModule: _ToastNoAnimationModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultNoAnimationsGlobalConfig,
          config
        }
      }]
    };
  }
  static \u0275fac = function ToastNoAnimationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastNoAnimationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastNoAnimationModule,
    imports: [ToastNoAnimation],
    exports: [ToastNoAnimation]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNoAnimationModule, [{
    type: NgModule,
    args: [{
      imports: [ToastNoAnimation],
      exports: [ToastNoAnimation]
    }]
  }], null, null);
})();

// src/app/core/services/toaster/toaster.service.ts
var ToasterService = class _ToasterService {
  toaster;
  constructor(toaster) {
    this.toaster = toaster;
  }
  typeSuccess(message, tittle) {
    this.toaster.success(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-right"
    });
  }
  typeInfo(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-right"
    });
  }
  typeWarning(message, tittle) {
    this.toaster.warning(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-right"
    });
  }
  typeError(message, tittle) {
    this.toaster.error(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-right"
    });
  }
  topLeft(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-left"
    });
  }
  topCenter(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-center"
    });
  }
  topRight(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-right"
    });
  }
  topFullWidth(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-full-width"
    });
  }
  bottomLeft(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-bottom-left"
    });
  }
  bottomCenter(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-bottom-center"
    });
  }
  bottomRight(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 5e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-bottom-right"
    });
  }
  bottomFullWidth(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: 1e3,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-bottom-full-width"
    });
  }
  notification(message, tittle) {
    this.toaster.success(message, tittle || "OCM", {
      timeOut: 1e3
    });
  }
  closeButton(message, tittle) {
    this.toaster.success(message, tittle || "OCM", {
      closeButton: true,
      positionClass: "toast-top-right",
      timeOut: 5e3
    });
  }
  progressBar(message, tittle) {
    this.toaster.success(message, tittle || "OCM", {
      closeButton: true,
      positionClass: "toast-top-right",
      progressBar: true,
      progressAnimation: "increasing",
      timeOut: 1e3
    });
  }
  clearToast(message, tittle) {
    this.toaster.info(message, tittle || "OCM", {
      closeButton: true,
      positionClass: "toast-top-right",
      timeOut: 5e3
    });
  }
  showRemove(message, tittle) {
    this.toaster.warning(message, tittle || "OCM", {
      disableTimeOut: true,
      timeOut: 5e3,
      positionClass: "toast-top-right"
    });
  }
  removeAllToast() {
    this.toaster.clear();
  }
  fastDuration(message, tittle, duration) {
    this.toaster.info(message, tittle || "OCM", {
      timeOut: duration,
      positionClass: "toast-top-right"
    });
  }
  slowDuration(message, tittle, duration) {
    this.toaster.warning(message, tittle || "OCM", {
      timeOut: duration,
      positionClass: "toast-top-right"
    });
  }
  timeouts(message, tittle, durationTimeOut) {
    this.toaster.error(message, tittle || "OCM", {
      timeOut: durationTimeOut,
      positionClass: "toast-top-right"
    });
  }
  stickys(message, tittle, duration) {
    this.toaster.success(message, tittle || "OCM", {
      disableTimeOut: true,
      timeOut: duration,
      positionClass: "toast-top-right"
    });
  }
  static \u0275fac = function ToasterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToasterService)(\u0275\u0275inject(ToastrService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToasterService, factory: _ToasterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ToastrService }], null);
})();

// src/app/core/services/spinner/spinner.service.ts
var SpinnerService = class _SpinnerService {
  http;
  constructor(http) {
    this.http = http;
  }
  _loading = new BehaviorSubject(false);
  loading$ = this._loading.asObservable();
  show() {
    this._loading.next(true);
  }
  hide() {
    this._loading.next(false);
  }
  static \u0275fac = function SpinnerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpinnerService, factory: _SpinnerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/auth/permission.service.ts
var PermissionService = class _PermissionService {
  PERMISSION_KEY = window.btoa("PERMISSION_KEY");
  permissions = signal([], ...ngDevMode ? [{ debugName: "permissions" }] : []);
  constructor() {
    const stored = localStorage.getItem("permissions");
    this.permissions.set(stored ? JSON.parse(stored) : []);
    if (localStorage.getItem(this.PERMISSION_KEY)) {
      const decodedBytes = new Uint8Array(window.atob(localStorage.getItem(this.PERMISSION_KEY)).split("").map((c) => c.charCodeAt(0)));
      this.permissions.set(JSON.parse(new TextDecoder().decode(decodedBytes)));
      console.log(this.permissions());
    }
  }
  setPermissions(perms) {
    this.permissions.set(perms);
    const utf8Bytes = new TextEncoder().encode(JSON.stringify(perms));
    localStorage.setItem(this.PERMISSION_KEY, window.btoa(String.fromCharCode(...utf8Bytes)));
  }
  clear() {
    this.permissions.set([]);
    localStorage.removeItem(this.PERMISSION_KEY);
  }
  has(permission) {
    return this.permissions().includes(permission);
  }
  hasSome(required) {
    return required.some((p) => this.has(p));
  }
  hasAll(required) {
    return required.every((p) => this.has(p));
  }
  static \u0275fac = function PermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionService, factory: _PermissionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/core/services/auth/auth.service.ts
var AuthService = class _AuthService {
  router;
  sidebar;
  http;
  permissionService;
  baseUrl = "http://192.168.1.25:8080/erp/auth/";
  USER_KEY = window.btoa("user");
  TOKEN_KEY = window.btoa("accessToken");
  REFRESH_TOKEN_KEY = window.btoa("refreshToken");
  checkAuth = new BehaviorSubject(localStorage.getItem("authenticated") || "true");
  // Properties for authentication data
  _accessToken = "";
  _tokenType = "Bearer";
  _refreshToken = "";
  _expiresAt = "";
  _expiresIn = 0;
  _user = null;
  constructor(router, sidebar, http, permissionService) {
    this.router = router;
    this.sidebar = sidebar;
    this.http = http;
    this.permissionService = permissionService;
    this.loadAuthData();
  }
  // Getters and setters for authentication properties
  get accessToken() {
    return this._accessToken || localStorage.getItem(this.TOKEN_KEY) || "";
  }
  set accessToken(value) {
    this._accessToken = value;
    if (value) {
      localStorage.setItem(this.TOKEN_KEY, value);
    } else {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }
  get tokenType() {
    return this._tokenType;
  }
  set tokenType(value) {
    this._tokenType = value;
  }
  get refreshToken() {
    return this._refreshToken || localStorage.getItem(this.REFRESH_TOKEN_KEY) || "";
  }
  set refreshToken(value) {
    this._refreshToken = value;
    if (value) {
      localStorage.setItem(this.REFRESH_TOKEN_KEY, value);
    } else {
      localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    }
  }
  get expiresAt() {
    return this._expiresAt;
  }
  set expiresAt(value) {
    this._expiresAt = value;
  }
  get expiresIn() {
    return this._expiresIn;
  }
  set expiresIn(value) {
    this._expiresIn = value;
  }
  get user() {
    if (localStorage.getItem(this.USER_KEY)) {
      const decodedBytes = new Uint8Array(window.atob(localStorage.getItem(this.USER_KEY)).split("").map((c) => c.charCodeAt(0)));
      return JSON.parse(new TextDecoder().decode(decodedBytes));
    }
    return null;
  }
  set user(us) {
    const utf8Bytes = new TextEncoder().encode(JSON.stringify(us));
    localStorage.setItem(this.USER_KEY, window.btoa(String.fromCharCode(...utf8Bytes)));
  }
  get idUser() {
    return window.atob(localStorage.getItem("idUser")) ?? "";
  }
  set idUser(us) {
    localStorage.setItem("idUser", window.btoa(us));
  }
  /**
   * Load authentication data from localStorage
   */
  loadAuthData() {
  }
  /**
   * Clear all authentication data from memory and localStorage
   */
  clearAuthData() {
    this._accessToken = "";
    this._tokenType = "Bearer";
    this._refreshToken = "";
    this._expiresAt = "";
    this._expiresIn = 0;
    this._user = null;
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem("authenticated");
    localStorage.removeItem("timeOut");
  }
  /**
   * Clear local storage and redirect to login page
   */
  clearLocalStorageAndRedirect() {
    this.clearAuthData();
    this.checkAuth.next("false");
    this.router.navigate(["/auth/login"]);
  }
  login() {
    this.checkAuth.next("true");
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("timeOut", Date());
    this.router.navigate([routes.index]);
    localStorage.setItem("layoutPosition", "1");
  }
  /**
   * Authenticate user with username and password
   * @param username
   * @param password
   * @param rememberMe
   * @returns Observable with login response
   */
  authenticate(username, password, rememberMe = false) {
    const loginData = { username, password, rememberMe };
    return new Observable((observer) => {
      this.http.post(this.baseUrl + "login", loginData).subscribe({
        next: (response) => {
          this.accessToken = response.accessToken;
          this.tokenType = response.tokenType;
          this.refreshToken = response.refreshToken;
          this.expiresAt = response.expiresAt;
          this.expiresIn = response.expiresIn;
          this.user = response.user;
          if (response.user?.permissions) {
            console.log("Setting permissions:", response.user.permissions);
            this.permissionService.setPermissions(response.user.permissions);
          }
          this.login();
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }
  /**
   * Refresh the access token using the refresh token
   * @returns Observable with new login response
   */
  refresh() {
    const refreshToken = this.refreshToken;
    console.log("AuthService.refresh(): Checking refresh token availability");
    console.log("Refresh token exists:", !!refreshToken);
    console.log("Refresh token length:", refreshToken?.length);
    console.log("Refresh token first 10 chars:", refreshToken?.substring(0, 10) + "...");
    if (!refreshToken || refreshToken.trim() === "") {
      console.error("AuthService.refresh(): No refresh token available");
      return throwError(() => new Error("No refresh token available"));
    }
    if (refreshToken.length < 10) {
      console.error("AuthService.refresh(): Refresh token appears invalid (too short)");
      return throwError(() => new Error("Invalid refresh token"));
    }
    const refreshData = { refreshToken };
    const refreshUrl = this.baseUrl + "refresh";
    console.log("AuthService.refresh(): Sending refresh request to", refreshUrl);
    console.log("AuthService.refresh(): Request body:", { refreshToken: "***" + refreshToken.substring(refreshToken.length - 4) });
    console.log("AuthService.refresh(): Full URL:", refreshUrl);
    return this.http.post(refreshUrl, refreshData).pipe(
      timeout(5e3),
      // 5 second timeout for faster feedback
      tap((response) => {
        console.log("AuthService.refresh(): Token refresh successful");
        console.log("New access token length:", response.accessToken?.length);
        console.log("New refresh token length:", response.refreshToken?.length);
        console.log("Response has user:", !!response.user);
        console.log("Response has permissions:", !!response.user?.permissions);
        this.accessToken = response.accessToken;
        this.tokenType = response.tokenType;
        this.refreshToken = response.refreshToken;
        this.expiresAt = response.expiresAt;
        this.expiresIn = response.expiresIn;
        this.user = response.user;
        if (response.user?.permissions) {
          this.permissionService.setPermissions(response.user.permissions);
          console.log("Token refreshed successfully - permissions updated");
        } else {
          console.warn("AuthService.refresh(): No permissions in response");
        }
      }),
      catchError((error) => {
        console.error("AuthService.refresh(): Token refresh failed with error:", error);
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        console.error("Error status:", error.status);
        console.error("Error URL:", error.url);
        console.error("Error headers:", error.headers);
        console.error("Error error:", error.error);
        if (error.name === "TimeoutError") {
          console.error("AuthService.refresh(): Timeout after 5 seconds - server is not reachable");
          console.error("AuthService.refresh(): Server URL:", this.baseUrl);
          console.error("AuthService.refresh(): The request timed out before reaching the server");
          console.error("AuthService.refresh(): This means the server is offline or network is blocked");
        }
        if (error.status === 401) {
          console.error("AuthService.refresh(): 401 Unauthorized - refresh token may be invalid or expired");
        }
        if (error.status === 404) {
          console.error("AuthService.refresh(): 404 Not Found - endpoint may not exist");
          console.error("AuthService.refresh(): Check if endpoint exists:", refreshUrl);
        }
        if (error.status === 0) {
          console.error("AuthService.refresh(): Status 0 - Network error or CORS issue");
          console.error("AuthService.refresh(): The request was blocked by browser (CORS)");
          console.error("AuthService.refresh(): Server must allow requests from:", window.location.origin);
        }
        const detailedError = new Error(`Refresh failed: ${error.message || "Server unreachable"}`);
        detailedError.originalError = error;
        detailedError.serverUrl = this.baseUrl;
        detailedError.isNetworkError = error.status === 0 || error.name === "TimeoutError";
        return throwError(() => detailedError);
      })
    );
  }
  /**
   * Logout user by calling API and clearing local storage
   * Automatically subscribes to the API call
   */
  logout() {
    const accessToken = this.accessToken;
    if (accessToken && accessToken.trim() !== "") {
      this.http.post(this.baseUrl + "logout", {}, {
        headers: {
          "Authorization": "Bearer " + accessToken
        }
      }).subscribe({
        next: () => {
          this.clearLocalStorageAndRedirect();
        },
        error: (error) => {
          console.error("Logout API call failed:", error);
          this.clearLocalStorageAndRedirect();
        }
      });
    } else {
      this.clearLocalStorageAndRedirect();
    }
  }
  /**
   * Logout user and return Observable for API call (for components that need to handle response)
   * @returns Observable for API call
   */
  logoutWithObservable() {
    const accessToken = this.accessToken;
    if (accessToken && accessToken.trim() !== "") {
      return this.http.post(this.baseUrl + "logout", {}, {
        headers: {
          "Authorization": "Bearer " + accessToken
        }
      }).pipe(tap(() => {
        this.clearLocalStorageAndRedirect();
      }), catchError((error) => {
        console.error("Logout API call failed:", error);
        this.clearLocalStorageAndRedirect();
        return throwError(() => error);
      }));
    } else {
      this.clearLocalStorageAndRedirect();
      return of({ success: true });
    }
  }
  /**
   * Check if user is authenticated
   * @returns boolean indicating authentication status
   */
  isAuthenticated() {
    return !!this.accessToken && this.accessToken.trim() !== "";
  }
  /**
   * Get current user (for components that need it)
   * @returns Current user or null
   */
  getCurrentUser() {
    return this.user;
  }
  /**
   * Get authorization header for HTTP requests
   * @returns Authorization header value or empty string
   */
  getAuthorizationHeader() {
    if (this.accessToken && this.tokenType) {
      return `${this.tokenType} ${this.accessToken}`;
    }
    return "";
  }
  /**
   * Check authentication status
   * @returns Observable with authentication status (true/false)
   */
  check() {
    return new Observable((observer) => {
      const isAuthenticated = this.isAuthenticated();
      observer.next(isAuthenticated);
      observer.complete();
    });
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(Router), \u0275\u0275inject(SideBarService), \u0275\u0275inject(HttpClient), \u0275\u0275inject(PermissionService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: SideBarService }, { type: HttpClient }, { type: PermissionService }], null);
})();

export {
  PermissionService,
  AuthService,
  routes,
  DataService,
  CommonService,
  SideBarService,
  provideToastr,
  ToasterService,
  SpinnerService
};
//# sourceMappingURL=chunk-YJY3UYMJ.js.map
