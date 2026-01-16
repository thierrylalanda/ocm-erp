import {
  CommonService
} from "./chunk-U2VXEBUE.js";
import {
  BehaviorSubject,
  Injectable,
  RendererFactory2,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U4CEU3KS.js";

// src/app/core/services/settings/settings.service.ts
var SettingsService = class _SettingsService {
  common;
  renderer;
  base = "";
  page = "";
  last = "";
  // Layout Mode
  layoutMode = new BehaviorSubject(localStorage.getItem("layoutMode") || "default");
  // Layout Width
  layoutWidth = new BehaviorSubject(localStorage.getItem("layoutWidth") || "fluid");
  // Sidebar Color
  sidebarColor = new BehaviorSubject(localStorage.getItem("sidebarColor") || "light");
  sidebarColor2 = new BehaviorSubject(localStorage.getItem("sidebarColor2") || "1");
  // Theme Color
  themeColor = new BehaviorSubject(localStorage.getItem("themeColor") || "light");
  // Topbar Color
  topbarColor = new BehaviorSubject(localStorage.getItem("topbarColor") || "white");
  topbarColor2 = new BehaviorSubject(localStorage.getItem("topbarColor2") || "1");
  topbarColor3 = new BehaviorSubject(localStorage.getItem("topbarColor3") || "1");
  topbarColor4 = new BehaviorSubject(localStorage.getItem("topbarColor4") || "1");
  primaryColor = new BehaviorSubject(localStorage.getItem("primaryColor") || "1");
  primaryColor1 = new BehaviorSubject(localStorage.getItem("primaryColor1") || "1");
  sidebarImage = new BehaviorSubject(localStorage.getItem("sidebarImage") || "");
  constructor(rendererFactory, common) {
    this.common = common;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.common.baseRoute.subscribe((res) => {
      this.base = res;
    });
    this.common.pageRoute.subscribe((res) => {
      this.page = res;
    });
    this.common.lastRoute.subscribe((res) => {
      this.last = res;
    });
  }
  changeLayoutMode(layout) {
    this.layoutMode.next(layout);
    localStorage.setItem("layoutMode", layout);
    this.renderer.setAttribute(document.documentElement, "data-layout", layout);
    if (layout === "rtl") {
      this.renderer.addClass(document.body, "layout-mode-rtl");
    } else {
      this.renderer.removeClass(document.body, "layout-mode-rtl");
    }
  }
  changeLayoutWidth(width) {
    this.layoutWidth.next(width);
    localStorage.setItem("layoutWidth", width);
    this.renderer.setAttribute(document.documentElement, "data-width", width);
  }
  changeSidebarColor(sidebarColor) {
    this.sidebarColor.next(sidebarColor);
    localStorage.setItem("sidebarColor", sidebarColor);
    this.renderer.setAttribute(document.documentElement, "data-sidebar", sidebarColor);
  }
  changeThemeColor(themeColor) {
    this.themeColor.next(themeColor);
    localStorage.setItem("themeColor", themeColor);
    this.renderer.setAttribute(document.documentElement, "data-bs-theme", themeColor);
  }
  changeTopbarColor(topbar) {
    this.topbarColor.next(topbar);
    localStorage.setItem("topbarColor", topbar);
    this.renderer.setAttribute(document.documentElement, "data-topbar", topbar);
  }
  changeTopbarColor2(topbar) {
    this.topbarColor2.next(topbar);
    localStorage.setItem("topbarColor2", topbar);
    this.renderer.setAttribute(document.documentElement, "data-topbarcolor", topbar === "1" ? "white" : topbar === "2" ? "primary" : topbar === "3" ? "blackpearl" : topbar === "4" ? "maroon" : topbar === "5" ? "bluegem" : topbar === "6" ? "firefly" : "all");
  }
  changePrimaryColor(color) {
    this.primaryColor.next(color);
    localStorage.setItem("primaryColor", color);
    this.renderer.setAttribute(document.documentElement, "data-color", color);
  }
  changeSidebarImage(img) {
    this.sidebarImage.next(img);
    localStorage.setItem("sidebarImage", img);
    this.renderer.setAttribute(document.body, "data-sidebarbg", img);
  }
  changeSidebarColor2(color) {
    this.sidebarColor2.next(color);
    localStorage.setItem("sidebarColor2", color);
  }
  changeTopbarColor3(color) {
    this.topbarColor3.next(color);
    localStorage.setItem("topbarColor3", color);
  }
  changeTopbarHorizontalColor(color) {
    this.topbarColor4.next(color);
    localStorage.setItem("topbarColor4", color);
  }
  changePrimaryColor1(color) {
    this.primaryColor1.next(color);
    localStorage.setItem("primaryColor1", color);
  }
  static \u0275fac = function SettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsService)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(CommonService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: RendererFactory2 }, { type: CommonService }], null);
})();

export {
  SettingsService
};
//# sourceMappingURL=chunk-GULTOLI6.js.map
