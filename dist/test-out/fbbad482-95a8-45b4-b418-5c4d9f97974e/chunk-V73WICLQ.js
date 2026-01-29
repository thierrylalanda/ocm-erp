import {
  NotificationService,
  NotificationsComponent,
  init_notification_service,
  init_notifications_component
} from "./chunk-FPUSID64.js";
import {
  LanguageSelectorComponent,
  init_translation
} from "./chunk-O7BLCUFK.js";
import {
  LocalStorageContextAdapter,
  init_local_storage_context_adapter,
  init_shared
} from "./chunk-LUFAATTA.js";
import {
  APPLICATION_CONTEXT
} from "./chunk-MU4ENZR6.js";
import {
  InfrastructureError,
  NotFoundError,
  Result,
  ValidationError
} from "./chunk-THVLRUNZ.js";
import {
  AuthService,
  DataService,
  SideBarService,
  init_core_index,
  init_side_bar_service,
  routes
} from "./chunk-SDAHDEJE.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  init_router
} from "./chunk-EDGRTZKC.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  Component,
  Inject,
  Injectable,
  NgModule,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __esm,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/common/headers/header-one/header-one.component.html
var header_one_component_default;
var init_header_one_component = __esm({
  "angular:jit:template:src/app/features/common/headers/header-one/header-one.component.html"() {
    header_one_component_default = `<div class="header">
	<div class="main-header">

		<!-- Logo -->
		<div class="header-left">
			<a [routerLink]="routes.index" class="logo">
				<img src="assets/img/logo.svg" alt="Logo">
			</a>
			<a [routerLink]="routes.index" class="dark-logo">
				<img src="assets/img/logo-white.svg" alt="Logo">
			</a>
		</div>

		<!-- Sidebar Menu Toggle Button -->
		<a id="mobile_btn" class="mobile_btn" href="javascript:void(0);" (click)="toggleMobileIcon()">
			<span class="bar-icon">
				<span></span>
				<span></span>
				<span></span>
			</span>
		</a>

		<div class="header-user">
			<div class="nav user-menu nav-list">
				<div class="me-auto d-flex align-items-center" id="header-search">

					<!-- Add -->
					<div class="dropdown me-3">
						<a class="btn btn-primary bg-gradient btn-xs btn-icon rounded-circle d-flex align-items-center justify-content-center"
							data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
							<i class="isax isax-add text-white"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-start p-2">
							<li>
								<a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-document-text-1 me-2"></i>Invoice
								</a>
							</li>
							<li>
								<a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-money-send me-2"></i>Expense
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-money-add me-2"></i>Credit Notes
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-money-recive me-2"></i>Debit Notes
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addPurchaseOrder"
									class="dropdown-item d-flex align-items-center">
									<i class="isax isax-document me-2"></i>Purchase Order
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">
									<i class="isax isax-document-download me-2"></i>Quotation
								</a>
							</li>
							<li>
								<a [routerLink]="routes.addDeliveryChallan"
									class="dropdown-item d-flex align-items-center">
									<i class="isax isax-document-forward me-2"></i>Delivery Challan
								</a>
							</li>
						</ul>
					</div>

					<!-- Breadcrumb -->
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb breadcrumb-divide mb-0">
							<li class="breadcrumb-item d-flex align-items-center">
								<a [routerLink]="routes.index">
									<i class="isax isax-home-2 me-1"></i>Home
								</a>
							</li>
							<ng-container *ngFor="let mainMenus of bread_Crumb">
								<li *ngIf="!mainMenus.hasSubData && (base === mainMenus.base || page === mainMenus.base)"
									class="breadcrumb-item active" aria-current="page">
									{{ mainMenus.data }}
								</li>
								<ng-container
									*ngIf="mainMenus.hasSubData && (page === mainMenus.page || last === mainMenus.page)">
									<li class="breadcrumb-item d-flex align-items-center">
										<a [routerLink]="mainMenus.route">{{ mainMenus.data }}</a>
									</li>
									<li class="breadcrumb-item active" aria-current="page">
										{{ mainMenus.data2 }}
									</li>
								</ng-container>

							</ng-container>
						</ol>

					</nav>

				</div>

				<div class="d-flex align-items-center">

					<!-- Search -->
					<div class="input-icon-end position-relative me-2">
						<input type="text" class="form-control" placeholder="Search">
						<span class="input-icon-addon">
							<i class="isax isax-search-normal"></i>
						</span>
					</div>
					<!-- /Search -->

					<!-- Language Selector -->
					<div class="nav-item flag-nav me-2">
						<app-language-selector></app-language-selector>
					</div>

					<!-- Notification -->
					<div class="notification_item me-2">
						<a href="javascript:void(0);" class="btn btn-menubar position-relative" id="notification_popup"
							data-bs-toggle="dropdown" data-bs-auto-close="outside">
							<i class="isax isax-notification-bing5"></i>
							<span *ngIf="unreadCount > 0"
								class="position-absolute badge bg-success border border-white">{{ unreadCount }}</span>
						</a>
						<div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg" style="min-height: 300px;">

							<div class="p-2 border-bottom">
								<div class="row align-items-center">
									<div class="col">
										<h6 class="m-0 fs-16 fw-semibold"> Notifications</h6>
									</div>
									<div class="col-auto">
										<div class="dropdown">
											<a href="javascript:void(0);"
												class="dropdown-toggle drop-arrow-none link-dark"
												data-bs-toggle="dropdown" data-bs-offset="0,15" aria-expanded="false">
												<i class="isax isax-setting-2 fs-16 text-body align-middle"></i>
											</a>
											<div class="dropdown-menu dropdown-menu-end">
												<!-- item-->
												<a href="javascript:void(0);" class="dropdown-item"><i
														class="ti ti-bell-check me-1"></i>Mark as Read</a>
												<!-- item-->
												<a href="javascript:void(0);" class="dropdown-item"><i
														class="ti ti-trash me-1"></i>Delete All</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Notification Dropdown -->
							<div class="notification-body position-relative z-2 rounded-0" data-simplebar>

								<!-- Loading State -->
								<div *ngIf="loadingNotifications" class="text-center py-4">
									<div class="spinner-border spinner-border-sm text-primary" role="status">
										<span class="visually-hidden">Loading...</span>
									</div>
								</div>

								<!-- Empty State -->
								<div *ngIf="!loadingNotifications && notifications.length === 0"
									class="text-center py-4">
									<i class="isax isax-notification fs-1 text-muted mb-2"></i>
									<p class="text-muted mb-0">Aucune notification</p>
								</div>

								<!-- Notifications List -->
								<ng-container *ngIf="!loadingNotifications && notifications.length > 0">
									<div *ngFor="let notification of notifications; let i = index"
										class="dropdown-item notification-item py-2 text-wrap border-bottom"
										[class.bg-light]="notification.nsStatut !== 'LU'"
										[id]="'notification-' + notification.id">
										<div class="d-flex">
											<div class="flex-shrink-0">
												<div class="avatar-sm me-2">
													<span
														class="avatar-title bg-soft-primary text-primary fs-18 rounded-circle">
														<i [class]="getNotificationIcon(notification)"></i>
													</span>
												</div>
											</div>
											<div class="flex-grow-1">
												<p class="mb-0 fw-semibold text-dark">{{ notification.nsTitre }}</p>
												<p class="mb-1 text-wrap fs-14">{{ notification.nsMessage }}</p>
												<div class="d-flex justify-content-between align-items-center">
													<span class="fs-12">
														<i class="isax isax-clock me-1"></i>{{
														formatNotificationDate(notification.nsDateCreation) }}
													</span>
													<div
														class="notification-action d-flex align-items-center float-end gap-2">
														<a *ngIf="notification.nsStatut !== 'LU'"
															href="javascript:void(0);"
															class="notification-read rounded-circle bg-info"
															(click)="markNotificationAsRead(notification, $event)"
															data-bs-toggle="tooltip" title="Marquer comme lu"></a>
														<button class="btn rounded-circle text-danger p-0"
															(click)="deleteNotification(notification, $event)">
															<i class="isax isax-close-circle fs-12"></i>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</ng-container>

							</div>

							<!-- View All-->
							<div class="p-2 rounded-bottom border-top text-center">
								<a [routerLink]="routes.notifications" class="text-center fw-medium fs-14 mb-0">
									View All
								</a>
							</div>

						</div>
					</div>

					<!-- Light/Dark Mode Button -->
					<div class="me-2 theme-item" [ngClass]="{'d-none':base==='layout-dark'}">
						<a href="javascript:void(0);" id="dark-mode-toggle" class="theme-toggle btn btn-menubar"
							[ngClass]="{'activate' : themeColor==='light'}" (click)="sideBar.changeThemeColor('dark')">
							<i class="isax isax-moon"></i>
						</a>
						<a href="javascript:void(0);" id="light-mode-toggle" class="theme-toggle btn btn-menubar"
							[ngClass]="{'activate' : themeColor==='dark'}" (click)="sideBar.changeThemeColor('light')">
							<i class="isax isax-sun-1"></i>
						</a>
					</div>

					<!-- User Dropdown -->
					<div class="dropdown profile-dropdown">
						<a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center"
							data-bs-toggle="dropdown" data-bs-auto-close="outside">
							<span class="avatar online">
								<img [src]="getUserAvatar()" alt="Img" class="img-fluid rounded-circle">
							</span>
						</a>
						<div class="dropdown-menu p-2">
							<div class="d-flex align-items-center bg-light rounded-1 p-2 mb-2">
								<span class="avatar avatar-lg me-2">
									<img [src]="getUserAvatar()" alt="img" class="rounded-circle">
								</span>
								<div>
									<h6 class="fs-14 fw-medium mb-1">{{ currentUser?.nomPrenom || 'Utilisateur' }}</h6>
									<p class="fs-13">{{ currentUser?.roles?.[0] || 'Administrator' }}</p>
								</div>
							</div>

							<!-- Item-->
							<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.accountSettings">
								<i class="isax isax-profile-circle me-2"></i>Profile Settings
							</a>

							<!-- Item-->
							<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.inventoryReport">
								<i class="isax isax-document-text me-2"></i>Reports
							</a>

							<!-- Item-->
							<div
								class="form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0">
								<label class="form-check-label" for="notify"><i
										class="isax isax-notification me-2"></i>Notifications</label>
								<input class="form-check-input" type="checkbox" role="switch" id="notify">
							</div>

							<hr class="dropdown-divider my-2">

							<!-- Item-->
							<a class="dropdown-item logout d-flex align-items-center" (click)="logOut()">
								<i class="isax isax-logout me-2"></i>Sign Out
							</a>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		<div class="dropdown mobile-user-menu profile-dropdown">
			<a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown"
				data-bs-auto-close="outside">
				<span class="avatar avatar-md online">
					<img [src]="getUserAvatar()" alt="Img" class="img-fluid rounded-circle">
				</span>
			</a>
			<div class="dropdown-menu p-2 mt-0">
				<div class="d-flex align-items-center bg-light rounded-1 p-2 mb-2">
					<span class="avatar avatar-lg me-2">
						<img [src]="getUserAvatar()" alt="img" class="rounded-circle">
					</span>
					<div>
						<h6 class="fs-14 fw-medium mb-1">{{ currentUser?.nomPrenom || 'Utilisateur' }}</h6>
						<p class="fs-13">{{ currentUser?.roles?.[0] || 'Administrator' }}</p>
					</div>
				</div>
				<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.profile">
					<i class="isax isax-profile-circle me-2"></i>Profile Settings
				</a>
				<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.stockSummary">
					<i class="isax isax-document-text me-2"></i>Reports
				</a>
				<a class="dropdown-item d-flex align-items-center" [routerLink]="routes.accountSettings">
					<i class="isax isax-setting me-2"></i>Settings
				</a>
				<a class="dropdown-item logout d-flex align-items-center" (click)="logOut()">
					<i class="isax isax-logout me-2"></i>Signout
				</a>
			</div>
		</div>
		<!-- /Mobile Menu -->

	</div>
</div>`;
  }
});

// angular:jit:style:src/app/features/common/headers/header-one/header-one.component.scss
var header_one_component_default2;
var init_header_one_component2 = __esm({
  "angular:jit:style:src/app/features/common/headers/header-one/header-one.component.scss"() {
    header_one_component_default2 = "/* src/app/features/common/headers/header-one/header-one.component.scss */\n/*# sourceMappingURL=header-one.component.css.map */\n";
  }
});

// src/app/modules/notifications/domain/dto/notification.dto.ts
var init_notification_dto = __esm({
  "src/app/modules/notifications/domain/dto/notification.dto.ts"() {
    "use strict";
  }
});

// src/app/modules/notifications/application/use-cases/get-notifications.use-case.ts
var GET_NOTIFICATIONS_USE_CASE, GetNotificationsUseCaseImpl;
var init_get_notifications_use_case = __esm({
  "src/app/modules/notifications/application/use-cases/get-notifications.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_shared();
    init_notification_service();
    GET_NOTIFICATIONS_USE_CASE = "GET_NOTIFICATIONS_USE_CASE";
    GetNotificationsUseCaseImpl = class GetNotificationsUseCaseImpl2 {
      notificationService;
      context;
      constructor(notificationService, context) {
        this.notificationService = notificationService;
        this.context = context;
      }
      execute() {
        return __async(this, arguments, function* (filters = {}) {
          try {
            if (filters.page !== void 0 && filters.page < 0) {
              return Result.fail(new ValidationError("Le num\xE9ro de page doit \xEAtre positif"));
            }
            if (filters.size !== void 0 && (filters.size <= 0 || filters.size > 100)) {
              return Result.fail(new ValidationError("La taille de page doit \xEAtre entre 1 et 100"));
            }
            const finalFilters = __spreadValues({
              page: filters.page ?? 0,
              size: filters.size ?? 20,
              sort: filters.sort ?? "nsDateCreation,desc"
            }, filters);
            const notifications = yield this.notificationService.getNotifications(finalFilters).toPromise();
            if (!notifications) {
              return Result.fail(new InfrastructureError("Erreur lors de la r\xE9cup\xE9ration des notifications"));
            }
            return Result.ok(notifications);
          } catch (error) {
            console.error("GetNotificationsUseCase error:", error);
            return Result.fail(new InfrastructureError(error.message || "Erreur lors de la r\xE9cup\xE9ration des notifications"));
          }
        });
      }
      static ctorParameters = () => [
        { type: NotificationService },
        { type: void 0, decorators: [{ type: Inject, args: [APPLICATION_CONTEXT] }] }
      ];
    };
    GetNotificationsUseCaseImpl = __decorate([
      Injectable()
    ], GetNotificationsUseCaseImpl);
  }
});

// src/app/modules/notifications/application/use-cases/mark-notification-as-read.use-case.ts
var MARK_NOTIFICATION_AS_READ_USE_CASE, MarkNotificationAsReadUseCaseImpl;
var init_mark_notification_as_read_use_case = __esm({
  "src/app/modules/notifications/application/use-cases/mark-notification-as-read.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_shared();
    init_notification_service();
    MARK_NOTIFICATION_AS_READ_USE_CASE = "MARK_NOTIFICATION_AS_READ_USE_CASE";
    MarkNotificationAsReadUseCaseImpl = class MarkNotificationAsReadUseCaseImpl2 {
      notificationService;
      context;
      constructor(notificationService, context) {
        this.notificationService = notificationService;
        this.context = context;
      }
      execute(notificationId) {
        return __async(this, null, function* () {
          try {
            if (!notificationId || notificationId <= 0) {
              return Result.fail(new NotFoundError("Notification", notificationId));
            }
            const notification = yield this.notificationService.markAsRead(notificationId).toPromise();
            if (!notification) {
              return Result.fail(new InfrastructureError("Erreur lors du marquage de la notification"));
            }
            return Result.ok(notification);
          } catch (error) {
            console.error("MarkNotificationAsReadUseCase error:", error);
            if (error.status === 404) {
              return Result.fail(new NotFoundError("Notification", notificationId));
            }
            return Result.fail(new InfrastructureError(error.message || "Erreur lors du marquage de la notification"));
          }
        });
      }
      static ctorParameters = () => [
        { type: NotificationService },
        { type: void 0, decorators: [{ type: Inject, args: [APPLICATION_CONTEXT] }] }
      ];
    };
    MarkNotificationAsReadUseCaseImpl = __decorate([
      Injectable()
    ], MarkNotificationAsReadUseCaseImpl);
  }
});

// src/app/modules/notifications/application/use-cases/delete-notification.use-case.ts
var DELETE_NOTIFICATION_USE_CASE, DeleteNotificationUseCaseImpl;
var init_delete_notification_use_case = __esm({
  "src/app/modules/notifications/application/use-cases/delete-notification.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_shared();
    init_notification_service();
    DELETE_NOTIFICATION_USE_CASE = "DELETE_NOTIFICATION_USE_CASE";
    DeleteNotificationUseCaseImpl = class DeleteNotificationUseCaseImpl2 {
      notificationService;
      context;
      constructor(notificationService, context) {
        this.notificationService = notificationService;
        this.context = context;
      }
      execute(notificationId) {
        return __async(this, null, function* () {
          try {
            if (!notificationId || notificationId <= 0) {
              return Result.fail(new NotFoundError("Notification", notificationId));
            }
            yield this.notificationService.deleteNotification(notificationId).toPromise();
            return Result.ok(void 0);
          } catch (error) {
            console.error("DeleteNotificationUseCase error:", error);
            if (error.status === 404) {
              return Result.fail(new NotFoundError("Notification", notificationId));
            }
            return Result.fail(new InfrastructureError(error.message || "Erreur lors de la suppression de la notification"));
          }
        });
      }
      static ctorParameters = () => [
        { type: NotificationService },
        { type: void 0, decorators: [{ type: Inject, args: [APPLICATION_CONTEXT] }] }
      ];
    };
    DeleteNotificationUseCaseImpl = __decorate([
      Injectable()
    ], DeleteNotificationUseCaseImpl);
  }
});

// src/app/modules/notifications/application/use-cases/index.ts
var init_use_cases = __esm({
  "src/app/modules/notifications/application/use-cases/index.ts"() {
    "use strict";
    init_get_notifications_use_case();
    init_mark_notification_as_read_use_case();
    init_delete_notification_use_case();
  }
});

// src/app/modules/notifications/notifications.route.ts
var NOTIFICATIONS_ROUTES;
var init_notifications_route = __esm({
  "src/app/modules/notifications/notifications.route.ts"() {
    "use strict";
    init_notifications_component();
    NOTIFICATIONS_ROUTES = [
      {
        path: "",
        component: NotificationsComponent,
        data: {
          title: "Notifications",
          breadcrumb: [
            {
              label: "Accueil",
              url: "/"
            },
            {
              label: "Notifications",
              url: ""
            }
          ]
        }
      }
    ];
  }
});

// src/app/modules/notifications/notifications.module.ts
var NotificationsModule;
var init_notifications_module = __esm({
  "src/app/modules/notifications/notifications.module.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_router();
    init_notifications_component();
    init_notifications_route();
    NotificationsModule = class NotificationsModule2 {
    };
    NotificationsModule = __decorate([
      NgModule({
        imports: [
          NotificationsComponent,
          RouterModule.forChild(NOTIFICATIONS_ROUTES)
        ]
      })
    ], NotificationsModule);
  }
});

// src/app/modules/notifications/index.ts
var init_notifications = __esm({
  "src/app/modules/notifications/index.ts"() {
    "use strict";
    init_notification_dto();
    init_notification_service();
    init_use_cases();
    init_notifications_component();
    init_notifications_module();
    init_notifications_route();
  }
});

// src/app/features/common/headers/header-one/header-one.component.ts
var HeaderOneComponent;
var init_header_one_component3 = __esm({
  "src/app/features/common/headers/header-one/header-one.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_header_one_component();
    init_header_one_component2();
    init_core();
    init_core_index();
    init_side_bar_service();
    init_router();
    init_common();
    init_translation();
    init_notifications();
    init_shared();
    init_local_storage_context_adapter();
    HeaderOneComponent = class HeaderOneComponent2 {
      auth;
      sideBar;
      data;
      router;
      notificationService;
      getNotificationsUseCase;
      markAsReadUseCase;
      deleteNotificationUseCase;
      miniSidebar = false;
      headerSidebarStyle = "1";
      routes = routes;
      base = "";
      page = "";
      last = "";
      currentRoute = "";
      themeColor = "light";
      themeMode = "";
      mobileSidebar = false;
      elem = document.documentElement;
      bread_Crumb = [];
      currentUser = null;
      // Notification properties
      notifications = [];
      unreadCount = 0;
      loadingNotifications = false;
      subscriptions = [];
      constructor(auth, sideBar, data, router, notificationService, getNotificationsUseCase, markAsReadUseCase, deleteNotificationUseCase) {
        this.auth = auth;
        this.sideBar = sideBar;
        this.data = data;
        this.router = router;
        this.notificationService = notificationService;
        this.getNotificationsUseCase = getNotificationsUseCase;
        this.markAsReadUseCase = markAsReadUseCase;
        this.deleteNotificationUseCase = deleteNotificationUseCase;
        this.sideBar.toggleSideBar.subscribe((res) => {
          if (res == "true") {
            this.miniSidebar = true;
          } else {
            this.miniSidebar = false;
          }
        });
        router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.getRoutes(event);
          }
        });
        this.getRoutes(this.router);
        this.sideBar.headerSidebarStyle.subscribe((res) => {
          this.headerSidebarStyle = res;
        });
        this.data.getBreadCrumb.subscribe((res) => {
          this.bread_Crumb = res;
        });
        this.sideBar.themeColors.subscribe((res) => {
          this.themeColor = res;
        });
        this.currentUser = this.auth.user;
      }
      getRoutes(route) {
        const splitVal = route.url.split("/");
        this.currentRoute = route.url;
        this.base = splitVal[1];
        this.page = splitVal[2];
        this.last = splitVal[3];
      }
      logOut() {
        return __async(this, null, function* () {
          yield this.auth.logout();
        });
      }
      toggleSideBar() {
        this.sideBar.switchSideMenuPosition();
      }
      toggleMobileIcon() {
        this.sideBar.switchMobileSideBarPosition();
        this.mobileSidebar = !this.mobileSidebar;
      }
      overlayClose() {
        this.mobileSidebar = false;
      }
      fullscreen() {
        if (!document.fullscreenElement) {
          this.elem.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
      ngOnInit() {
        const themeColor = localStorage.getItem("themeColor") || "light";
        this.sideBar.changeThemeColor(themeColor);
        this.loadNotifications();
        this.loadUnreadCount();
      }
      ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
      }
      /**
       * Load recent notifications for the dropdown
       */
      loadNotifications() {
        return __async(this, null, function* () {
          this.loadingNotifications = true;
          const result = yield this.getNotificationsUseCase.execute({ page: 0, size: 5, sort: "nsDateCreation,desc" });
          if (result.isSuccess) {
            this.notifications = result.value.content;
          } else {
            console.error("Error loading notifications:", result.error);
          }
          this.loadingNotifications = false;
        });
      }
      /**
       * Load unread notification count
       */
      loadUnreadCount() {
        const sub = this.notificationService.getUnreadCount().subscribe({
          next: (response) => {
            this.unreadCount = response.count;
          },
          error: (error) => {
            console.error("Error loading unread count:", error);
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Mark a notification as read
       */
      markNotificationAsRead(notification, event) {
        return __async(this, null, function* () {
          event.stopPropagation();
          if (notification.nsStatut === "LU")
            return;
          const result = yield this.markAsReadUseCase.execute(notification.id);
          if (result.isSuccess) {
            notification.nsStatut = result.value.nsStatut;
            this.unreadCount = Math.max(0, this.unreadCount - 1);
          } else {
            console.error("Error marking notification as read:", result.error);
          }
        });
      }
      /**
       * Mark all notifications as read
       */
      markAllNotificationsAsRead() {
        const sub = this.notificationService.markAllAsRead().subscribe({
          next: (response) => {
            this.notifications.forEach((n) => n.nsStatut = "LU");
            this.unreadCount = 0;
          },
          error: (error) => {
            console.error("Error marking all as read:", error);
          }
        });
        this.subscriptions.push(sub);
      }
      /**
       * Delete a notification
       */
      deleteNotification(notification, event) {
        return __async(this, null, function* () {
          event.stopPropagation();
          const result = yield this.deleteNotificationUseCase.execute(notification.id);
          if (result.isSuccess) {
            this.notifications = this.notifications.filter((n) => n.id !== notification.id);
            if (notification.nsStatut !== "LU") {
              this.unreadCount = Math.max(0, this.unreadCount - 1);
            }
          } else {
            console.error("Error deleting notification:", result.error);
          }
        });
      }
      /**
       * Get notification icon based on type
       */
      getNotificationIcon(notification) {
        return this.notificationService.getNotificationIcon(notification.nsType);
      }
      /**
       * Format notification date
       */
      formatNotificationDate(dateString) {
        return this.notificationService.formatDate(dateString);
      }
      /**
       * Get user avatar URL or generate initials avatar
       */
      getUserAvatar() {
        if (this.currentUser?.photo && this.currentUser.photo != "string") {
          return this.currentUser.photo;
        }
        return "assets/img/profiles/avatar-01.jpg";
      }
      /**
       * Get user initials for avatar
       */
      getUserInitials() {
        if (!this.currentUser?.nomPrenom) {
          return "U";
        }
        const names = this.currentUser.nomPrenom.split(" ");
        if (names.length >= 2) {
          return (names[0].charAt(0) + names[1].charAt(0)).toUpperCase();
        }
        return names[0].charAt(0).toUpperCase();
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: SideBarService },
        { type: DataService },
        { type: Router },
        { type: NotificationService },
        { type: void 0, decorators: [{ type: Inject, args: [GET_NOTIFICATIONS_USE_CASE] }] },
        { type: void 0, decorators: [{ type: Inject, args: [MARK_NOTIFICATION_AS_READ_USE_CASE] }] },
        { type: void 0, decorators: [{ type: Inject, args: [DELETE_NOTIFICATION_USE_CASE] }] }
      ];
    };
    HeaderOneComponent = __decorate([
      Component({
        selector: "app-header-one",
        template: header_one_component_default,
        imports: [CommonModule, RouterLink, LanguageSelectorComponent],
        providers: [
          { provide: "LOCAL_STORAGE", useValue: localStorage },
          { provide: APPLICATION_CONTEXT, useClass: LocalStorageContextAdapter },
          { provide: GET_NOTIFICATIONS_USE_CASE, useClass: GetNotificationsUseCaseImpl },
          { provide: MARK_NOTIFICATION_AS_READ_USE_CASE, useClass: MarkNotificationAsReadUseCaseImpl },
          { provide: DELETE_NOTIFICATION_USE_CASE, useClass: DeleteNotificationUseCaseImpl }
        ],
        styles: [header_one_component_default2]
      })
    ], HeaderOneComponent);
  }
});

export {
  HeaderOneComponent,
  init_header_one_component3 as init_header_one_component
};
//# sourceMappingURL=chunk-V73WICLQ.js.map
