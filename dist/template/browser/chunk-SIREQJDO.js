import {
  HeaderOneComponent,
  LayoutComponent,
  SideMenuOneComponent,
  SideMenuThreeComponent,
  SideMenuTwoComponent
} from "./chunk-PBIUV5QF.js";
import {
  SettingsService
} from "./chunk-GULTOLI6.js";
import "./chunk-5H6GXSFV.js";
import "./chunk-YETY7SH2.js";
import "./chunk-M4MC2D7Y.js";
import {
  BreakpointObserver
} from "./chunk-UNWSAGEL.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import "./chunk-KKWHEPUK.js";
import "./chunk-6JYD3OCR.js";
import "./chunk-VQ4LU4VK.js";
import "./chunk-BLAAMQ2R.js";
import {
  CommonService,
  DataService,
  SideBarService,
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgClass
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/features.component.ts
var _c0 = (a0, a1, a2, a3, a4, a5) => ({ "menu-opened": a0, "expand-menu": a1, "mini-sidebar": a2, "slide-nav": a3, fluid: a4, "layout-box-mode": a5 });
var _c1 = (a0) => ({ "d-none": a0 });
var _c2 = (a0) => ({ "p-0": a0 });
var _c3 = (a0, a1) => ({ opened: a0, "d-none": a1 });
function FeaturesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-side-menu-two");
  }
}
function FeaturesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-side-menu-three");
  }
}
var FeaturesComponent = class _FeaturesComponent {
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
  static \u0275fac = function FeaturesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesComponent)(\u0275\u0275directiveInject(SideBarService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BreakpointObserver));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesComponent, selectors: [["app-features"]], decls: 20, vars: 28, consts: [[1, "main-wrapper", 3, "ngClass"], [3, "ngClass"], [1, "page-wrapper"], [1, "content", 3, "ngClass"], [1, "footer", "d-sm-flex", "align-items-center", "justify-content-between", "bg-white", "py-2", "px-4", "border-top"], [1, "text-title", "mb-0"], ["href", "javascript:void(0);", 1, "link-primary"], [1, "text-title"], [1, "sidebar-overlay", 3, "click", "ngClass"]], template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header-one", 1)(2, "app-side-menu-one", 1);
      \u0275\u0275conditionalCreate(3, FeaturesComponent_Conditional_3_Template, 1, 0, "app-side-menu-two");
      \u0275\u0275conditionalCreate(4, FeaturesComponent_Conditional_4_Template, 1, 0, "app-side-menu-three");
      \u0275\u0275elementStart(5, "div")(6, "div", 2)(7, "div", 3)(8, "div");
      \u0275\u0275element(9, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "p", 5);
      \u0275\u0275text(12, "\xA9 2025 ");
      \u0275\u0275elementStart(13, "a", 6);
      \u0275\u0275text(14, "Kanakku");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, ", All Rights Reserved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 7);
      \u0275\u0275text(17, "Version : 1.3.8");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 8);
      \u0275\u0275listener("click", function FeaturesComponent_Template_div_click_18_listener() {
        return ctx.toggleMobileIcon();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "app-layout", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(10, _c0, ctx.mobileSidebar === true, ctx.expandMenu === "true" && ctx.miniSidebar === true, ctx.miniSidebar === true, ctx.mobileSidebar === true, ctx.layoutWidth === "1", ctx.layoutWidth === "box"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c1, ctx.hideheader === false));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c1, ctx.hideheader === false || ctx.base === "customer" || ctx.base === "super admin"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.base === "customer" ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.base === "super admin" ? 4 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c2, ctx.page === "email" || ctx.page === "email reply"));
      \u0275\u0275advance();
      \u0275\u0275classProp("scroll-content", ctx.getScrollContentPages() === true);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(23, _c3, ctx.mobileSidebar === true, ctx.mobileSidebar === false));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c1, ctx.base === "layout single" || ctx.base === "layout without header" || ctx.base === "layout transparent" || ctx.base === "layout default" || ctx.base === "layout rtl" || ctx.base === "layout dark" || ctx.base === "layout mini"));
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterOutlet, SideMenuThreeComponent, SideMenuTwoComponent, SideMenuOneComponent, HeaderOneComponent, LayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesComponent, [{
    type: Component,
    args: [{ selector: "app-features", encapsulation: ViewEncapsulation.None, imports: [CommonModule, RouterModule, SideMenuThreeComponent, SideMenuTwoComponent, SideMenuOneComponent, HeaderOneComponent, LayoutComponent], template: `
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
` }]
  }], () => [{ type: SideBarService }, { type: Router }, { type: DataService }, { type: CommonService }, { type: SettingsService }, { type: BreakpointObserver }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesComponent, { className: "FeaturesComponent", filePath: "src/app/features/features.component.ts", lineNumber: 30 });
})();
export {
  FeaturesComponent
};
//# sourceMappingURL=chunk-SIREQJDO.js.map
