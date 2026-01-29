import {
  SideMenuTwoComponent,
  init_side_menu_two_component
} from "./chunk-66N4XTWR.js";
import {
  HeaderOneComponent,
  init_header_one_component
} from "./chunk-V73WICLQ.js";
import {
  SideMenuOneComponent,
  init_side_menu_one_component
} from "./chunk-C5A466GX.js";
import {
  SideMenuThreeComponent,
  init_side_menu_three_component
} from "./chunk-QR4OHCSV.js";
import "./chunk-SIXG2OLR.js";
import "./chunk-SR4JAI3W.js";
import {
  LayoutComponent,
  init_layout_component
} from "./chunk-IUQL4NJ4.js";
import {
  SettingsService,
  init_settings_service
} from "./chunk-HBVQWAFR.js";
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import {
  init_layout
} from "./chunk-I2GXMQDC.js";
import {
  BreakpointObserver
} from "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import "./chunk-FPUSID64.js";
import "./chunk-O7BLCUFK.js";
import "./chunk-YTCUO5R2.js";
import "./chunk-LUFAATTA.js";
import "./chunk-MU4ENZR6.js";
import "./chunk-KZXJWDFC.js";
import "./chunk-DJVIHOKC.js";
import "./chunk-4XZF5GTU.js";
import "./chunk-PRPNIB7R.js";
import "./chunk-N3H5GIVS.js";
import "./chunk-THVLRUNZ.js";
import "./chunk-Q2A5OOYR.js";
import "./chunk-2RBILSOV.js";
import {
  DataService,
  SideBarService,
  init_core_index,
  init_side_bar_service,
  routes
} from "./chunk-SDAHDEJE.js";
import {
  CommonService
} from "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import {
  NavigationEnd,
  Router,
  RouterModule,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  ViewEncapsulation,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/modules/modules.html
var modules_default;
var init_modules = __esm({
  "angular:jit:template:src/app/modules/modules.html"() {
    modules_default = `
<div class="main-wrapper" [ngClass]="{
      'menu-opened': mobileSidebar === true,
      'expand-menu':
      expandMenu === 'true' && miniSidebar === true,
      'mini-sidebar': miniSidebar === true ,
      'slide-nav': mobileSidebar === true,
      fluid: layoutWidth === '1',
      'layout-box-mode': layoutWidth === 'box',
    }">

  <app-header-one [ngClass]="{'d-none':hideheader === false}"></app-header-one>
  <app-side-menu-one [ngClass]="{'d-none':hideheader === false || base==='customer' || base==='super admin'}"></app-side-menu-one>
  
  @if (base === 'customer') {
  <app-side-menu-two></app-side-menu-two>
  }
  @if (base === 'super admin') {
  <app-side-menu-three></app-side-menu-three>
  }

 

  <div >

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content" [ngClass]="{'p-0':page==='email'|| page==='email reply'}" >
        <div [class.scroll-content]="getScrollContentPages() === true">
          <router-outlet></router-outlet>

        </div>
      </div>
      <!-- Footer Start -->
      <div class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top">
        <p class="text-title mb-0">&copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
          Rights Reserved</p>
        <p class="text-title">Version : 1.3.8</p>
      </div>
      <!-- Footer End -->
    </div>
    <!-- /Page Wrapper -->
    <!-- <app-settings-menu></app-settings-menu> -->



    <div class="sidebar-overlay" (click)="toggleMobileIcon()" [ngClass]="{
          opened: mobileSidebar === true,'d-none':mobileSidebar === false
        }"></div>
  </div>
  <app-layout [ngClass]="{'d-none': base === 'layout single' || base === 'layout without header' || base === 'layout transparent' || base === 'layout default'
  || base === 'layout rtl' || base === 'layout dark' || base === 'layout mini'
}"></app-layout>
</div>
`;
  }
});

// angular:jit:style:src/app/modules/modules.scss
var modules_default2;
var init_modules2 = __esm({
  "angular:jit:style:src/app/modules/modules.scss"() {
    modules_default2 = "/* src/app/modules/modules.scss */\n/*# sourceMappingURL=modules.css.map */\n";
  }
});

// src/app/modules/modules.ts
var ModulesComponent;
var init_modules3 = __esm({
  "src/app/modules/modules.ts"() {
    "use strict";
    init_tslib_es6();
    init_modules();
    init_modules2();
    init_core();
    init_router();
    init_layout();
    init_core_index();
    init_side_bar_service();
    init_settings_service();
    init_common();
    init_side_menu_three_component();
    init_side_menu_two_component();
    init_side_menu_one_component();
    init_header_one_component();
    init_layout_component();
    ModulesComponent = class ModulesComponent2 {
      sideBar;
      router;
      data;
      common;
      settings;
      breakpointObserver;
      toggle = false;
      miniSidebar = false;
      expandMenu = false;
      mobileSidebar = false;
      base = "";
      page = "";
      last = "";
      routes = routes;
      hideheader = true;
      sidebar = true;
      stickysidebar = false;
      layoutMode = "fluid";
      layoutWidth = "fluid";
      showPreloader = false;
      selectedColor = "84, 109, 254, 1";
      selectedColor1 = "555, 555, 555, 1";
      horizontalColor = "555, 555, 555, 1";
      dthemeColor = "84, 109, 254, 1";
      constructor(sideBar, router, data, common, settings, breakpointObserver) {
        this.sideBar = sideBar;
        this.router = router;
        this.data = data;
        this.common = common;
        this.settings = settings;
        this.breakpointObserver = breakpointObserver;
        this.getRoutes(this.router);
        this.common.baseRoute.subscribe((res) => {
          this.base = res?.replace("-", " ");
        });
        this.common.pageRoute.subscribe((res) => {
          this.page = res?.replace("-", " ");
        });
        this.common.lastRoute.subscribe((res) => {
          this.last = res?.replace("-", " ");
        });
        router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.getRoutes(event);
            localStorage.removeItem("isMobileSidebar");
            this.mobileSidebar = false;
            this.sessionOut();
          }
        });
        this.sideBar.toggleSideBar.subscribe((res) => {
          if (res == "true") {
            this.miniSidebar = true;
          } else {
            this.miniSidebar = false;
          }
        });
        this.sideBar.toggleMobileSideBar.subscribe((res) => {
          if (res == "true" || res == "true") {
            this.mobileSidebar = true;
          } else {
            this.mobileSidebar = false;
          }
        });
        this.sideBar.expandSideBar.subscribe((res) => {
          this.expandMenu = res;
          if (res == false && this.miniSidebar == true) {
            this.data.sideBar.map((mainMenus) => {
              mainMenus.menu.map((resMenu) => {
                resMenu.showSubRoute = false;
              });
            });
          }
          if (res == true && this.miniSidebar == false) {
            this.data.sideBar.map((mainMenus) => {
              mainMenus.menu.map((resMenu) => {
                const menuValue = sessionStorage.getItem("menuValue");
                if (menuValue && menuValue == resMenu.menuValue) {
                  resMenu.showSubRoute = true;
                } else {
                  resMenu.showSubRoute = false;
                }
              });
            });
          }
        });
        this.settings.layoutMode.subscribe((layout) => {
          this.layoutMode = layout;
          if (layout == "mini") {
            this.miniSidebar = true;
          } else {
            this.miniSidebar = false;
          }
        });
        this.settings.layoutWidth.subscribe((layout) => {
          this.layoutWidth = layout;
          if (layout == "box") {
            this.miniSidebar = true;
          } else {
            this.miniSidebar = false;
          }
        });
        this.settings.sidebarColor2.subscribe((res) => {
          this.selectedColor = res;
        });
        this.settings.topbarColor3.subscribe((res) => {
          this.selectedColor1 = res;
        });
        this.settings.topbarColor4.subscribe((res) => {
          this.horizontalColor = res;
        });
        this.settings.primaryColor1.subscribe((res) => {
          this.dthemeColor = res;
        });
        this.sideBar.layoutWidth.subscribe((res) => {
          this.layoutWidth = res;
        });
        this.sessionOut();
      }
      getScrollContentPages() {
        if (this.base == "dashboard" || this.base == "customer" || this.page == "categories" || this.base == "reports" || this.base == "expenses" || this.base == "payments" || this.base == "estimates" || this.base == "invoices" || this.page == "calls")
          return false;
        else
          return true;
      }
      getRoutes(route) {
        const splitVal = route?.url.split("/");
        this.common.currentRoute.next(route.url);
        this.common.baseRoute.next(splitVal[1]);
        this.common.pageRoute.next(splitVal[2]);
        this.common.lastRoute.next(splitVal[3]);
        if (this.common.pageRoute.getValue() == "general-invoice1") {
          this.sidebar = false;
        } else {
          this.sidebar = true;
        }
      }
      sessionOut() {
        const loginTime = localStorage.getItem("timeOut") || Date();
        const timeOut = new Date(loginTime);
      }
      toggleMobileIcon() {
        this.sideBar.switchMobileSideBarPosition();
      }
      // handleMouseEnter(event: MouseEvent): void {
      //   if (this.expandMenuCondition()) {
      //     const target = event.target as HTMLElement;
      //     const closestSidebar = target.closest('.sidebar');
      //     if (closestSidebar) {
      //       // Handle adding classes and sliding down
      //     } else {
      //       // Handle removing classes and sliding up
      //     }
      //   }
      // }
      ngOnInit() {
        this.breakpointObserver.observe(["(min-width: 991.98px)"]).subscribe((result) => {
          if (result.matches) {
            this.mobileSidebar = false;
          }
        });
      }
      ngOnDestroy() {
        this.sideBar.changeThemeColor("light");
      }
      static ctorParameters = () => [
        { type: SideBarService },
        { type: Router },
        { type: DataService },
        { type: CommonService },
        { type: SettingsService },
        { type: BreakpointObserver }
      ];
    };
    ModulesComponent = __decorate([
      Component({
        selector: "app-modules",
        template: modules_default,
        encapsulation: ViewEncapsulation.None,
        imports: [CommonModule, RouterModule, SideMenuThreeComponent, SideMenuTwoComponent, SideMenuOneComponent, HeaderOneComponent, LayoutComponent],
        styles: [modules_default2]
      })
    ], ModulesComponent);
  }
});

// src/app/modules/modules.spec.ts
var require_modules_spec = __commonJS({
  "src/app/modules/modules.spec.ts"(exports) {
    init_testing();
    init_modules3();
    describe("ModulesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ModulesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ModulesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_modules_spec();
//# sourceMappingURL=spec-app-modules-modules.spec.js.map
