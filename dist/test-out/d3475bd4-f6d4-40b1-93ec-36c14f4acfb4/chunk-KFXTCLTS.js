import {
  NgScrollbarModule,
  init_ngx_scrollbar
} from "./chunk-4AUJWHIX.js";
import {
  AuthService,
  DataService,
  SideBarService,
  init_core_index,
  init_side_bar_service,
  routes
} from "./chunk-NSLU4XKJ.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/common/side-menus/side-menu-three/side-menu-three.component.html
var side_menu_three_component_default;
var init_side_menu_three_component = __esm({
  "angular:jit:template:src/app/features/common/side-menus/side-menu-three/side-menu-three.component.html"() {
    side_menu_three_component_default = `<!-- Sidebar -->
<div
class="two-col-sidebar d-block" id="two-col-sidebar"
  (mouseover)="miniSideBarMouseHover('over')"
  (focus)="miniSideBarMouseHover('over')"
  (mouseout)="miniSideBarMouseHover('out')"
  (blur)="miniSideBarMouseHover('out')"
  >
  <div class="twocol-mini">
    <!-- Add -->
    <div class="dropdown">
      <a class="btn btn-primary bg-gradient btn-sm btn-icon rounded-circle d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" href="javascript:void(0);" role="button"  data-bs-display="static" data-bs-reference="parent">
        <i class="isax isax-add"></i>
      </a>
      <ul class="dropdown-menu dropdown-menu-start">
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
          <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document me-2"></i>Purchase Order
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-download me-2"></i>Quotation
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-forward me-2"></i>Delivery Challan
          </a>
        </li>
      </ul>
    </div>
    <!-- /Add -->

    <ul class="menu-list">
      <li>
        <a [routerLink]="routes.customerAccountsettings" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>						
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Changelog"><i class="isax isax-cloud-change5"></i></a>						
      </li>
      <li>
        <a [routerLink]="routes.login"><i class="isax isax-login-15"></i></a>				
      </li>
    </ul>
  </div>
  <div class="sidebar" id="sidebar-two">
    <!-- Logo -->
    <div class="sidebar-logo">
      <a [routerLink]="routes.index" class="logo logo-normal">
        <img src="assets/img/logo.svg" alt="Logo">
      </a>
      <a [routerLink]="routes.index" class="logo-small">
        <img src="assets/img/logo-small.svg" alt="Logo">
      </a>
      <a [routerLink]="routes.index" class="dark-logo">
        <img src="assets/img/logo-white.svg" alt="Logo">
      </a>
              
      <a id="toggle_btn" href="javascript:void(0);" (click)="toggleSidebar()">
        <i class="isax isax-menu-1"></i>
      </a>
    </div>
    <!-- /Logo -->
        
    <!-- Search -->
    <div class="sidebar-search">
      <div class="input-icon-end position-relative">
        <input type="text" class="form-control" placeholder="Search">
        <span class="input-icon-addon">
          <i class="isax isax-search-normal"></i>
        </span>
      </div>
    </div>
    <!-- /Search -->
<ng-scrollbar>
  <div class="sidebar-inner slimscroll">
    <div id="sidebar-menu" class="sidebar-menu">
      <ul>
        @for(mainMenus of side_bar_data;track mainMenus){
          <li>
            <ul>
              @for(menu of mainMenus.menu;track menu){
                @if(menu.hasSubRoute===true){
              <li class="submenu">
                  <a href="javascript:void(0);" (click)="expandSubMenus(menu)"
                  [ngClass]="{ 'subdrop': menu.showSubRoute === true}" [class.active]="page===menu.base || page===menu.base2">
                    <i class="isax text-dark" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <ul [ngClass]="
                  menu.showSubRoute === true
                    ? 'd-block'
                    : 'd-none'
                ">
                    <li>
                      @for(subMenu of menu.subMenus;track subMenu){
                        <a [routerLink]="subMenu.route" routerLinkActive="active">{{subMenu.menuValue}}</a>
                      }
                    </li>
                  </ul>
                </li>
                }
                @if(menu.hasSubRoute===false){
                  <li [class.active]="page===menu.base">
                    <a [routerLink]="menu.route" >
                      <i class="isax text-dark" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                    </a>
                  </li>
                }
              }
            </ul>
          </li>
        }
      </ul>
      <div class="sidebar-footer" [hidden]="sidebarfooter">
        <div class="trial-item bg-white text-center border">
          <div class="bg-light p-3 text-center">
            <img src="assets/img/icons/upgrade.svg" alt="img">
          </div>
          <div class="p-2">
            <h6 class="fs-14 fw-semibold mb-1">Upgrade to More</h6>
            <p class="fs-13 mb-2">Subscribe to get more with Premium Features</p>
            <a [routerLink]="routes.customerPlanssettings" class="btn btn-sm btn-primary w-100 d-flex align-items-center justify-content-center"><i class="isax isax-crown5 me-1"></i>Upgrade</a>
          </div>
          <a href="javascript:void(0);" class="close-icon" (click)="closefooter()"><i class="fa-solid fa-x"></i></a>
        </div>
                      <ul class="menu-list">
                          <li>
                              <a [routerLink]="routes.customerAccountsettings" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
                          </li>
                          <li>
                              <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>						
                          </li>
                          <li>
                              <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Changelog"><i class="isax isax-cloud-change5"></i></a>						
                          </li>
                          <li>
                              <a [routerLink]="routes.login" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Login"><i class="isax isax-login-15"></i></a>				
                          </li>
                      </ul>
      </div>
    </div>
  </div>
</ng-scrollbar>
  </div>


</div>
<!-- /Sidebar -->
        `;
  }
});

// angular:jit:style:src/app/features/common/side-menus/side-menu-three/side-menu-three.component.scss
var side_menu_three_component_default2;
var init_side_menu_three_component2 = __esm({
  "angular:jit:style:src/app/features/common/side-menus/side-menu-three/side-menu-three.component.scss"() {
    side_menu_three_component_default2 = "/* src/app/features/common/side-menus/side-menu-three/side-menu-three.component.scss */\n/*# sourceMappingURL=side-menu-three.component.css.map */\n";
  }
});

// src/app/features/common/side-menus/side-menu-three/side-menu-three.component.ts
var SideMenuThreeComponent;
var init_side_menu_three_component3 = __esm({
  "src/app/features/common/side-menus/side-menu-three/side-menu-three.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_side_menu_three_component();
    init_side_menu_three_component2();
    init_core();
    init_router();
    init_core_index();
    init_side_bar_service();
    init_common();
    init_ngx_scrollbar();
    SideMenuThreeComponent = class SideMenuThreeComponent2 {
      router;
      data;
      sideBar;
      auth;
      routes = routes;
      headerSidebarStyle = "1";
      primarySkinStyle = "1";
      mobileSidebar = false;
      base = "dashboard";
      page = "";
      last = "";
      currentRoute = "";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      side_bar_data = [];
      toggleSidebar() {
        this.sideBar.switchSideMenuPosition();
      }
      constructor(router, data, sideBar, auth) {
        this.router = router;
        this.data = data;
        this.sideBar = sideBar;
        this.auth = auth;
        router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.getRoutes(event);
          }
        });
        this.getRoutes(this.router);
        this.sideBar.headerSidebarStyle.subscribe((res) => {
          this.headerSidebarStyle = res;
        });
        this.sideBar.primarySkinStyle.subscribe((res) => {
          this.primarySkinStyle = res;
        });
        this.data.getSideBar3Data.subscribe((res) => {
          this.side_bar_data = res;
        });
      }
      getRoutes(route) {
        const splitVal = route.url.split("/");
        this.currentRoute = route.url;
        this.base = splitVal[1];
        this.page = splitVal[2];
        this.last = splitVal[3];
      }
      miniSideBarMouseHover(position) {
        if (position == "over") {
          this.sideBar.expandSideBar.next("true");
        } else {
          this.sideBar.expandSideBar.next("false");
        }
      }
      expandSubMenus(menu) {
        sessionStorage.setItem("menuValue", menu.menuValue);
        this.side_bar_data.map((mainMenus) => {
          mainMenus.menu.map((resMenu) => {
            if (resMenu.menuValue == menu.menuValue) {
              menu.showSubRoute = !menu.showSubRoute;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
      ngOnDestroy() {
        this.sideBar.resetMiniSidebar();
      }
      logOut() {
        this.auth.logout();
      }
      navigateAuth(menuValue) {
        if (menuValue == "Authentication")
          localStorage.removeItem("authenticated");
      }
      sidebarfooter = false;
      closefooter() {
        this.sidebarfooter = true;
      }
      static ctorParameters = () => [
        { type: Router },
        { type: DataService },
        { type: SideBarService },
        { type: AuthService }
      ];
    };
    SideMenuThreeComponent = __decorate([
      Component({
        selector: "app-side-menu-three",
        template: side_menu_three_component_default,
        imports: [CommonModule, RouterLink, NgScrollbarModule],
        styles: [side_menu_three_component_default2]
      })
    ], SideMenuThreeComponent);
  }
});

export {
  SideMenuThreeComponent,
  init_side_menu_three_component3 as init_side_menu_three_component
};
//# sourceMappingURL=chunk-KFXTCLTS.js.map
