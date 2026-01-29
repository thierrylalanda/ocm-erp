import {
  NgScrollbarModule,
  init_ngx_scrollbar
} from "./chunk-4AUJWHIX.js";
import {
  AuthService,
  DataService,
  PermissionService,
  SideBarService,
  init_core_index,
  init_permission_service,
  init_side_bar_service,
  routes
} from "./chunk-NSLU4XKJ.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  init_router
} from "./chunk-EDGRTZKC.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  Component,
  __decorate,
  effect,
  init_core,
  init_tslib_es6,
  signal
} from "./chunk-W6MIRXHE.js";
import {
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/common/side-menus/side-menu-one/side-menu-one.component.html
var side_menu_one_component_default;
var init_side_menu_one_component = __esm({
  "angular:jit:template:src/app/features/common/side-menus/side-menu-one/side-menu-one.component.html"() {
    side_menu_one_component_default = `<!-- Sidebar -->
<div class="two-col-sidebar d-block" id="two-col-sidebar" (mouseover)="miniSideBarMouseHover('over')"
  (focus)="miniSideBarMouseHover('over')" (mouseout)="miniSideBarMouseHover('out')"
  (blur)="miniSideBarMouseHover('out')">
  <div class="twocol-mini">
    <!-- Add -->
    <div class="dropdown">
      <a class="btn btn-primary bg-gradient btn-sm btn-icon rounded-circle d-flex align-items-center justify-content-center"
        data-bs-toggle="dropdown" href="javascript:void(0);" role="button" data-bs-display="static"
        data-bs-reference="parent">
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
        <a [routerLink]="routes.accountSettings" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>
      </li>
      <li>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Changelog"><i
            class="isax isax-cloud-change5"></i></a>
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
            @for(mainMenus of side_bar_data();track mainMenus){
            <li class="menu-title"><span>{{mainMenus.tittle}}</span></li>
            <li>
              <ul>
                @for(menu of mainMenus.menu;track menu){
                @if(menu.hasSubRoute===true){

                <li class="submenu">
                  <a href="javascript:void(0);" (click)="expandSubMenus(menu)"
                    [ngClass]="{ 'subdrop': menu.showSubRoute === true }"
                    [class.active]="base===menu.base || base===menu.base1">
                    <i class="isax" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <ul [ngClass]="
                  menu.showSubRoute === true
                    ? 'd-block'
                    : 'd-none'
                ">
                    <li>
                      @for(subMenu of menu.subMenus;track subMenu){
                      @if(subMenu.hasSubRouteTwo2===true){
                    <li class="submenu submenu-two">
                      <a [routerLink]="subMenu.route" [class.active]="page===subMenu.page"
                        (click)="openSubmenuOne(subMenu)" [class.active]="page===subMenu.page"
                        [ngClass]="{ subdrop: openSubmenuOneItem === subMenu }">{{subMenu.menuValue}}<span
                          class="menu-arrow inside-submenu"></span></a>
                      <ul [ngClass]="
                                                openSubmenuOneItem === subMenu ? 'd-block' : 'd-none'
                                              ">
                        @for(subMenu2 of subMenu.subMenus;track subMenu2){
                        <li><a [routerLink]="subMenu2.route" routerLinkActive="active">{{subMenu2.menuValue}}</a></li>

                        }
                      </ul>
                    </li>
                    }
                    @else{
                    <a [routerLink]="subMenu.route" routerLinkActive="active"
                      (click)="openSubmenuOne(subMenu)">{{subMenu.menuValue}}</a>
                    }
                    }

                </li>
              </ul>

            </li>
            }
            @if(menu.hasSubRouteTwo===true){
            <li class="submenu">
              <a href="javascript:void(0);" [class.active]="base===menu.base"
                [ngClass]="{ 'subdrop': menu.showSubRoute === true}" (click)="expandSubMenus(menu)">
                <i class="isax" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
                <span class="menu-arrow"></span>
              </a>
              <ul [ngClass]="
                    menu.showSubRoute === true
                      ? 'd-block'
                      : 'd-none'
                  ">
                @for(subMenu of menu.subMenus;track subMenu){
                <li class="submenu submenu-two">
                  <a href="javascript:void(0);" (click)="openSubmenuOne(subMenu)" [class.active]="page===subMenu.page"
                    [ngClass]="{ subdrop: openSubmenuOneItem === subMenu  }">{{subMenu.menuValue}}<span
                      class="menu-arrow"></span></a>
                  <ul [ngClass]="
                            openSubmenuOneItem === subMenu ? 'd-block' : 'd-none'
                          ">
                    @for(subMenu2 of subMenu.subMenus;track subMenu2){
                    <li><a [routerLink]="subMenu2.route"
                        [class.active]="last===subMenu2.base">{{subMenu2.menuValue}}</a></li>
                    }
                  </ul>
                </li>
                }
              </ul>
            </li>
            }
            @if(menu.hasSubRoute===false){
            <li [class.active]="base===menu.base">
              <a [routerLink]="menu.route" (click)="expandSubMenus(menu)">
                <i class="isax" [class]="'isax-' + menu.icon"></i><span>{{menu.menuValue}}</span>
              </a>
            </li>
            }
            }
          </ul>
          </li>
          }
          <li>
          <li class="menu-title"><span>Help</span></li>
          <li [ngStyle]="{'min-height':sidebarfooter?'190px':'0'}">
            <ul>
              <li>
                <a href="javascript:void(0);"><i class="isax isax-document-code-25"></i><span>Documentation</span></a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="isax isax-programming-arrows5"></i><span>Changelog</span><span
                    class="badge bg-primary ms-2 badge-sm text-white fs-12 fw-medium">v2.0.9</span></a>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);" (click)="multiLevelOne()">
                  <i class="isax isax-layer5"></i><span>Multi Level</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul [ngStyle]="{'display':multiLevel1?'block':''}">
                  <li><a href="javascript:void(0);">Multilevel 1</a></li>
                  <li class="submenu submenu-two" (click)="multiLevelTwo()">
                    <a href="javascript:void(0);">Multilevel 2<span class="menu-arrow inside-submenu"></span></a>
                    <ul [ngStyle]="{'display':multiLevel2?'block':''}">
                      <li><a href="javascript:void(0);">Multilevel 2.1</a></li>
                      <li class="submenu submenu-two submenu-three" (click)="multiLevelThree()">
                        <a href="javascript:void(0);">Multilevel 2.2<span
                            class="menu-arrow inside-submenu inside-submenu-two"></span></a>
                        <ul [ngStyle]="{'display':multiLevel3?'block':''}">
                          <li><a href="javascript:void(0);">Multilevel 2.2.1</a></li>
                          <li><a href="javascript:void(0);">Multilevel 2.2.2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0);">Multilevel 3</a></li>
                </ul>
              </li>
            </ul>
          </li>

          </ul>
          <div class="sidebar-footer" [hidden]="sidebarfooter">
            <div class="trial-item bg-white text-center border">
              <div class="bg-light p-3 text-center">
                <img src="assets/img/icons/upgrade.svg" alt="img">
              </div>
              <div class="p-2">
                <h6 class="fs-14 fw-semibold mb-1">Upgrade to More</h6>
                <p class="fs-13 mb-2">Subscribe to get more with Premium Features</p>
                <a [routerLink]="routes.plansBillings"
                  class="btn btn-sm btn-primary w-100 d-flex align-items-center justify-content-center"><i
                    class="isax isax-crown5 me-1"></i>Upgrade</a>
              </div>
              <a href="javascript:void(0);" class="close-icon" (click)="closefooter()"><i class="fa-solid fa-x"></i></a>
            </div>
            <ul class="menu-list">
              <li>
                <a [routerLink]="routes.accountSettings" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-title="Settings"><i class="isax isax-setting-25"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-title="Documentation"><i class="isax isax-document-normal4"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-title="Changelog"><i class="isax isax-cloud-change5"></i></a>
              </li>
              <li>
                <a [routerLink]="routes.login" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Login"><i
                    class="isax isax-login-15"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ng-scrollbar>
  </div>


</div>
<!-- /Sidebar -->`;
  }
});

// angular:jit:style:src/app/features/common/side-menus/side-menu-one/side-menu-one.component.scss
var side_menu_one_component_default2;
var init_side_menu_one_component2 = __esm({
  "angular:jit:style:src/app/features/common/side-menus/side-menu-one/side-menu-one.component.scss"() {
    side_menu_one_component_default2 = "/* src/app/features/common/side-menus/side-menu-one/side-menu-one.component.scss */\n/*# sourceMappingURL=side-menu-one.component.css.map */\n";
  }
});

// src/app/features/common/side-menus/side-menu-one/side-menu-one.component.ts
function filterSideBar(menuData, permService) {
  return menuData.map((item) => {
    const filteredSubMenus = item.subMenus ? filterSideBar(item.subMenus, permService) : [];
    const filteredMenuItems = item.menu ? filterSideBar(item.menu, permService) : [];
    const hasPermission = !item.permissions || item.permissions.length === 0 ? true : permService.hasSome(item.permissions);
    if (item.permissions && item.permissions.length != 0 && !permService.hasSome(item.permissions))
      return null;
    if (!hasPermission && filteredSubMenus.length === 0 && filteredMenuItems.length === 0)
      return null;
    return __spreadProps(__spreadValues({}, item), {
      subMenus: filteredSubMenus,
      menu: filteredMenuItems
    });
  }).filter(Boolean);
}
var SideMenuOneComponent;
var init_side_menu_one_component3 = __esm({
  "src/app/features/common/side-menus/side-menu-one/side-menu-one.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_side_menu_one_component();
    init_side_menu_one_component2();
    init_common();
    init_core();
    init_router();
    init_core_index();
    init_side_bar_service();
    init_ngx_scrollbar();
    init_permission_service();
    SideMenuOneComponent = class SideMenuOneComponent2 {
      router;
      data;
      sideBar;
      auth;
      perm;
      routes = routes;
      headerSidebarStyle = "1";
      primarySkinStyle = "0";
      mobileSidebar = false;
      multilevel = [false, false, false];
      toggleSidebar() {
        this.sideBar.switchSideMenuPosition();
      }
      base = "index";
      page = "";
      last = "";
      currentRoute = "";
      openMenuItem = null;
      openSubmenuOneItem = null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      side_bar_data = signal([]);
      side_bar_data1 = [];
      constructor(router, data, sideBar, auth, perm) {
        this.router = router;
        this.data = data;
        this.sideBar = sideBar;
        this.auth = auth;
        this.perm = perm;
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
        this.sideBar.toggleMobileSideBar.subscribe((res) => {
          if (res == "true") {
            this.mobileSidebar = true;
          } else {
            this.mobileSidebar = false;
          }
        });
        this.data.getSideBarData.subscribe((res) => {
        });
        effect(() => {
          const _ = this.perm.permissions();
          const allMenus = this.data.sideBar;
          this.side_bar_data.set(filterSideBar(allMenus, this.perm));
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
        this.side_bar_data().map((mainMenus) => {
          mainMenus.menu.map((resMenu) => {
            if (resMenu.menuValue == menu.menuValue) {
              menu.showSubRoute = !menu.showSubRoute;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
      isOpen = false;
      expandSubMenusActive() {
        const activeMenu = sessionStorage.getItem("menuValue");
        if (!Array.isArray(this.side_bar_data)) {
          console.warn("side_bar_data is not initialized");
          return;
        }
        this.side_bar_data.forEach((mainMenu) => {
          if (!Array.isArray(mainMenu.menu))
            return;
          mainMenu.menu.forEach((resMenu) => {
            if (activeMenu) {
              resMenu.showSubRoute = resMenu.menuValue === activeMenu;
            } else {
              resMenu.showSubRoute = resMenu.base === "index";
            }
          });
        });
        this.isOpen = !activeMenu;
      }
      openMenu(menu) {
        if (this.openMenuItem === menu) {
          this.openMenuItem = null;
        } else {
          this.openMenuItem = menu;
        }
      }
      openSubmenuOne(subMenus) {
        if (this.openSubmenuOneItem === subMenus) {
          this.openSubmenuOneItem = null;
        } else {
          this.openSubmenuOneItem = subMenus;
        }
      }
      navigateAuth(menuValue) {
        if (menuValue == "Authentication")
          localStorage.removeItem("authenticated");
      }
      ngOnInit() {
        this.expandSubMenusActive();
      }
      ngOnDestroy() {
        this.sideBar.resetMiniSidebar();
      }
      logOut() {
        this.auth.logout();
      }
      multiLevel1 = false;
      multiLevel2 = false;
      multiLevel3 = false;
      multiLevelOne() {
        this.multiLevel1 = !this.multiLevel1;
      }
      multiLevelTwo() {
        this.multiLevel2 = !this.multiLevel2;
      }
      multiLevelThree() {
        this.multiLevel3 = !this.multiLevel3;
        this.multiLevel2 = true;
      }
      sidebarfooter = false;
      closefooter() {
        this.sidebarfooter = true;
      }
      static ctorParameters = () => [
        { type: Router },
        { type: DataService },
        { type: SideBarService },
        { type: AuthService },
        { type: PermissionService }
      ];
    };
    SideMenuOneComponent = __decorate([
      Component({
        selector: "app-side-menu-one",
        template: side_menu_one_component_default,
        imports: [CommonModule, RouterLink, NgScrollbarModule, RouterLinkActive],
        styles: [side_menu_one_component_default2]
      })
    ], SideMenuOneComponent);
  }
});

export {
  SideMenuOneComponent,
  init_side_menu_one_component3 as init_side_menu_one_component
};
//# sourceMappingURL=chunk-MHVCYVDN.js.map
