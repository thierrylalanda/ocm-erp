import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/customers/settings/settings.component.ts
var SettingsComponent = class _SettingsComponent {
  routes = routes;
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 32, vars: 4, consts: [[1, ""], [1, "row", "justify-content-center"], [1, "col-xl-11"], [1, "row", "settings-wrapper", "d-flex"], [1, "col-xl-3", "col-lg-4"], [1, "card", "settings-card"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "sidebars", "settings-sidebar"], [1, "sidebar-inner"], [1, "sidebar-menu", "p-0"], ["routerLinkActive", "active", 1, "fs-14", "fw-medium", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-user-octagon", "fs-18", "me-1"], ["routerLinkActive", "active", 1, "fs-14", "fw-medium", "d-flex", "align-items-center", "active", 3, "routerLink"], [1, "isax", "isax-security-safe", "fs-18", "me-1"], [1, "isax", "isax-transaction-minus", "fs-18", "me-1"], [1, "isax", "isax-notification", "fs-18", "me-1"], [1, "col-xl-9", "col-lg-8"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h6", 7);
      \u0275\u0275text(8, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "ul")(14, "li")(15, "a", 12);
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17, "Account Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 14);
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21, "Security");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 12);
      \u0275\u0275element(24, "i", 16);
      \u0275\u0275text(25, "Plans & Billings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 12);
      \u0275\u0275element(28, "i", 17);
      \u0275\u0275text(29, "Notifications");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275element(31, "router-outlet");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.customerAccountsettings);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerSecuritysettings);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerPlanssettings);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerNotificationsettings);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [RouterModule], template: '			<!-- Start Content -->\n            <div class="">\n\n				<!-- start row -->\n                <div class="row justify-content-center">\n                    <div class="col-xl-11">\n\n						<!-- start row -->\n                        <div class=" row settings-wrapper d-flex">\n                            <div class="col-xl-3 col-lg-4">\n                                <div class="card settings-card">\n                                    <div class="card-header">\n                                        <h6 class="mb-0">Settings</h6>\n                                    </div>\n                                    <div class="card-body">\n                                        <div class="sidebars settings-sidebar">\n                                            <div class="sidebar-inner">\n                                                <div class="sidebar-menu p-0">\n                                                    <ul>\n                                                        <li>\n                                                            <a [routerLink]="routes.customerAccountsettings" routerLinkActive="active" class="fs-14 fw-medium d-flex align-items-center"><i class="isax isax-user-octagon fs-18 me-1"></i>Account Settings</a>\n                                                        </li>\n                                                        <li>\n                                                            <a [routerLink]="routes.customerSecuritysettings" routerLinkActive="active" class="fs-14 fw-medium d-flex align-items-center active"><i class="isax isax-security-safe fs-18 me-1"></i>Security</a>\n                                                        </li>\n                                                        <li>\n                                                            <a [routerLink]="routes.customerPlanssettings" routerLinkActive="active" class="fs-14 fw-medium d-flex align-items-center"><i class="isax isax-transaction-minus fs-18 me-1"></i>Plans & Billings</a>\n                                                        </li>\n                                                        <li>\n                                                            <a [routerLink]="routes.customerNotificationsettings" routerLinkActive="active" class="fs-14 fw-medium d-flex align-items-center"><i class="isax isax-notification fs-18 me-1"></i>Notifications</a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div><!-- end col -->\n                            <div class="col-xl-9 col-lg-8">\n                                <router-outlet></router-outlet>\n                            </div><!-- end col -->\n                        </div>\n						<!-- end row -->\n\n                    </div><!-- end col -->\n                </div>\n				<!-- end row -->\n\n            </div>\n			<!-- End Content -->\n\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/customers/settings/settings.component.ts", lineNumber: 11 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-WF3XK6G3.js.map
