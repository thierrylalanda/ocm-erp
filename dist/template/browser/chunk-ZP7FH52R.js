import {
  CommonService,
  DataService,
  SideBarService,
  routes
} from "./chunk-YJY3UYMJ.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-WOBWH5QA.js";
import {
  CommonModule,
  NgClass
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HKG6HBOI.js";

// src/app/features/setting/sidemenu/sidemenu.component.ts
var _c0 = (a0) => ({ subdrop: a0 });
function SidemenuComponent_For_12_For_1_Conditional_0_For_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu2_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subMenu2_r4.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu2_r4.menuValue);
  }
}
function SidemenuComponent_For_12_For_1_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8)(1, "a", 9);
    \u0275\u0275listener("click", function SidemenuComponent_For_12_For_1_Conditional_0_For_1_Template_a_click_1_listener() {
      const subMenu_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openSubmenuOne(subMenu_r2));
    });
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 13);
    \u0275\u0275repeaterCreate(7, SidemenuComponent_For_12_For_1_Conditional_0_For_1_For_8_Template, 3, 2, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.page === subMenu_r2.page);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx_r2.openSubmenuOneItem === subMenu_r2));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax-" + subMenu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subMenu_r2.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.openSubmenuOneItem === subMenu_r2 ? "d-block" : "d-none");
    \u0275\u0275advance();
    \u0275\u0275repeater(subMenu_r2.subMenus);
  }
}
function SidemenuComponent_For_12_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SidemenuComponent_For_12_For_1_Conditional_0_For_1_Template, 9, 9, "li", 8, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const menu_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(menu_r5.subMenus);
  }
}
function SidemenuComponent_For_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidemenuComponent_For_12_For_1_Conditional_0_Template, 2, 0);
  }
  if (rf & 2) {
    const menu_r5 = ctx.$implicit;
    \u0275\u0275conditional(menu_r5.menuValue === "Settings" ? 0 : -1);
  }
}
function SidemenuComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SidemenuComponent_For_12_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const mainMenus_r6 = ctx.$implicit;
    \u0275\u0275repeater(mainMenus_r6.menu);
  }
}
var SidemenuComponent = class _SidemenuComponent {
  router;
  sideBar;
  data;
  common;
  url;
  routes = routes;
  side_bar_data = [];
  openMenuItem = null;
  openSubmenuOneItem = null;
  base = "";
  page = "";
  last = "";
  currentRoute = "";
  constructor(router, sideBar, data, common) {
    this.router = router;
    this.sideBar = sideBar;
    this.data = data;
    this.common = common;
    this.url = this.router.url;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });
    this.common.baseRoute.subscribe((res) => {
      this.base = res;
    });
    this.common.pageRoute.subscribe((res) => {
      this.page = res;
    });
    this.common.lastRoute.subscribe((res) => {
      this.last = res;
    });
    this.getRoutes(this.router);
    this.data.getSideBarData.subscribe((res) => {
      this.side_bar_data = res;
    });
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
  getRoutes(route) {
    const splitVal = route.url.split("/");
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }
  static \u0275fac = function SidemenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidemenuComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SideBarService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidemenuComponent, selectors: [["app-sidemenu"]], decls: 13, vars: 0, consts: [[1, "card", "settings-card"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "sidebars", "settings-sidebar"], [1, "sidebar-inner"], [1, "sidebar-menu", "p-0"], [1, "submenu-open"], [1, "submenu"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "isax", "fs-18"], [1, "fs-14", "fw-medium", "ms-2"], [1, "isax", "isax-arrow-down-1", "arrow-menu", "ms-auto"], [3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink"]], template: function SidemenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      \u0275\u0275text(3, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "ul")(9, "li", 7)(10, "ul");
      \u0275\u0275repeaterCreate(11, SidemenuComponent_For_12_Template, 2, 0, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.side_bar_data);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidemenuComponent, [{
    type: Component,
    args: [{ selector: "app-sidemenu", imports: [CommonModule, RouterLink, RouterLinkActive], template: `<div class="card settings-card">
  <div class="card-header">
      <h6 class="mb-0">Settings</h6>
  </div>
  <div class="card-body">
      <div class="sidebars settings-sidebar">
          <div class="sidebar-inner">
              <div class="sidebar-menu p-0">
                  <ul>
                      <li class="submenu-open">
                          <ul>
                            @for(mainMenus of side_bar_data;track mainMenus){
                                @for(menu of mainMenus.menu;track menu){
                                    @if(menu.menuValue==='Settings'){
                                        @for(subMenu of menu.subMenus;track subMenu){
                                        <li class="submenu">
                                            <a href="javascript:void(0);" (click)="openSubmenuOne(subMenu)" 
                                            [ngClass]="{ subdrop: openSubmenuOneItem === subMenu}"
                                            [class.active]="page===subMenu.page">
                                                <i class="isax fs-18" [class]="'isax-'+subMenu.icon"></i>
                                                <span class="fs-14 fw-medium ms-2">{{subMenu.menuValue}}</span>
                                                <span class="isax isax-arrow-down-1 arrow-menu ms-auto"></span>
                                            </a>
                                            <ul  [ngClass]="openSubmenuOneItem === subMenu ? 'd-block' : 'd-none'">
                                                @for(subMenu2 of subMenu.subMenus;track subMenu2){
                                                <li><a [routerLink]="subMenu2.route" routerLinkActive="active">{{subMenu2.menuValue}}</a></li>
                                               
                                                }
                                            </ul>
                                        </li>
                                        }
                                    }
                                }
                            }
                              
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div><!-- end card body -->
</div><!-- end card -->` }]
  }], () => [{ type: Router }, { type: SideBarService }, { type: DataService }, { type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidemenuComponent, { className: "SidemenuComponent", filePath: "src/app/features/setting/sidemenu/sidemenu.component.ts", lineNumber: 15 });
})();

// src/app/features/setting/setting.component.ts
var SettingComponent = class _SettingComponent {
  static \u0275fac = function SettingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingComponent, selectors: [["app-setting"]], decls: 8, vars: 0, consts: [[1, "row", "justify-content-center"], [1, "col-xl-12"], [1, "row", "settings-wrapper", "d-flex"], [1, "col-xl-3", "col-md-4"], [1, "col-xl-9", "col-md-8"], [1, "scroll-content"]], template: function SettingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "app-sidemenu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "router-outlet");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [RouterModule, RouterOutlet, SidemenuComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingComponent, [{
    type: Component,
    args: [{ selector: "app-setting", imports: [RouterModule, SidemenuComponent], template: '<div class="row justify-content-center">\n  <div class="col-xl-12">\n    <div class="row settings-wrapper d-flex">\n      <div class="col-xl-3 col-md-4">\n        <app-sidemenu></app-sidemenu>\n      </div>\n\n      <div class="col-xl-9 col-md-8">\n        <div class="scroll-content">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingComponent, { className: "SettingComponent", filePath: "src/app/features/setting/setting.component.ts", lineNumber: 12 });
})();

export {
  SettingComponent
};
//# sourceMappingURL=chunk-ZP7FH52R.js.map
