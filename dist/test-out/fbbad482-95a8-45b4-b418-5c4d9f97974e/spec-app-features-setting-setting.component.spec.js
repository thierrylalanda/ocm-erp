import {
  DataService,
  SideBarService,
  init_core_index,
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
  RouterLink,
  RouterLinkActive,
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
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/setting/setting.component.html
var setting_component_default;
var init_setting_component = __esm({
  "angular:jit:template:src/app/features/setting/setting.component.html"() {
    setting_component_default = '<div class="row justify-content-center">\n  <div class="col-xl-12">\n    <div class="row settings-wrapper d-flex">\n      <div class="col-xl-3 col-md-4">\n        <app-sidemenu></app-sidemenu>\n      </div>\n\n      <div class="col-xl-9 col-md-8">\n        <div class="scroll-content">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/setting/setting.component.scss
var setting_component_default2;
var init_setting_component2 = __esm({
  "angular:jit:style:src/app/features/setting/setting.component.scss"() {
    setting_component_default2 = "/* src/app/features/setting/setting.component.scss */\n/*# sourceMappingURL=setting.component.css.map */\n";
  }
});

// angular:jit:template:src/app/features/setting/sidemenu/sidemenu.component.html
var sidemenu_component_default;
var init_sidemenu_component = __esm({
  "angular:jit:template:src/app/features/setting/sidemenu/sidemenu.component.html"() {
    sidemenu_component_default = `<div class="card settings-card">
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
</div><!-- end card -->`;
  }
});

// angular:jit:style:src/app/features/setting/sidemenu/sidemenu.component.scss
var sidemenu_component_default2;
var init_sidemenu_component2 = __esm({
  "angular:jit:style:src/app/features/setting/sidemenu/sidemenu.component.scss"() {
    sidemenu_component_default2 = "/* src/app/features/setting/sidemenu/sidemenu.component.scss */\n/*# sourceMappingURL=sidemenu.component.css.map */\n";
  }
});

// src/app/features/setting/sidemenu/sidemenu.component.ts
var SidemenuComponent;
var init_sidemenu_component3 = __esm({
  "src/app/features/setting/sidemenu/sidemenu.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_sidemenu_component();
    init_sidemenu_component2();
    init_core();
    init_router();
    init_core_index();
    init_common();
    SidemenuComponent = class SidemenuComponent2 {
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
      static ctorParameters = () => [
        { type: Router },
        { type: SideBarService },
        { type: DataService },
        { type: CommonService }
      ];
    };
    SidemenuComponent = __decorate([
      Component({
        selector: "app-sidemenu",
        template: sidemenu_component_default,
        imports: [CommonModule, RouterLink, RouterLinkActive],
        styles: [sidemenu_component_default2]
      })
    ], SidemenuComponent);
  }
});

// src/app/features/setting/setting.component.ts
var SettingComponent;
var init_setting_component3 = __esm({
  "src/app/features/setting/setting.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_setting_component();
    init_setting_component2();
    init_core();
    init_router();
    init_sidemenu_component3();
    SettingComponent = class SettingComponent2 {
    };
    SettingComponent = __decorate([
      Component({
        selector: "app-setting",
        template: setting_component_default,
        imports: [RouterModule, SidemenuComponent],
        styles: [setting_component_default2]
      })
    ], SettingComponent);
  }
});

// src/app/features/setting/setting.component.spec.ts
var require_setting_component_spec = __commonJS({
  "src/app/features/setting/setting.component.spec.ts"(exports) {
    init_testing();
    init_setting_component3();
    describe("SettingComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SettingComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SettingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_setting_component_spec();
//# sourceMappingURL=spec-app-features-setting-setting.component.spec.js.map
