import {
  init_core_index
} from "./chunk-NSLU4XKJ.js";
import {
  SpinnerService
} from "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
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

// angular:jit:template:src/app/app.component.html
var app_component_default;
var init_app_component = __esm({
  "angular:jit:template:src/app/app.component.html"() {
    app_component_default = "<router-outlet></router-outlet>\n<title>{{ page | titlecase }} | OCM ERP - Invoice and Billing Management Admin Dashboard</title>";
  }
});

// angular:jit:style:src/app/app.component.scss
var app_component_default2;
var init_app_component2 = __esm({
  "angular:jit:style:src/app/app.component.scss"() {
    app_component_default2 = "/* src/app/app.component.scss */\n/*# sourceMappingURL=app.component.css.map */\n";
  }
});

// src/app/app.component.ts
var AppComponent;
var init_app_component3 = __esm({
  "src/app/app.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_app_component();
    init_app_component2();
    init_core();
    init_router();
    init_core_index();
    init_common();
    AppComponent = class AppComponent2 {
      spinner;
      router;
      title = "OCM ERP";
      base = "";
      page = "";
      constructor(spinner, router) {
        this.spinner = spinner;
        this.router = router;
        this.router.events.subscribe((event) => {
          if (event instanceof NavigationStart) {
            this.spinner.show();
            const URL = event.url.split("/");
            this.base = URL[1] ? URL[1].replaceAll("-", " ") : "";
            this.page = URL[2] ? URL[2].replace("-", " ") : "";
          }
          if (this.base === "index") {
            this.page = "Admin Dashboard";
          }
          if (this.base === "admin dashboard" || this.base === "inventory" || this.base === "suppliers" || this.base === "supplier payments" || this.base === "expense" || this.base === "incomes" || this.base === "money transfer" || this.base === "pages" || this.base === "designation" || this.base === "attendance" || this.base === "payments" || this.base === "transactions" || this.base === "announcements" || this.base === "newsletters" || this.base === "starter" || this.base === "contact messages" || this.base === "tickets" || this.base === "testimonials" || this.base === "faq" || this.base === "profile" || this.base === "gallery" || this.base === "timeline" || this.base === "pricing" || this.base === "privacy policy" || this.base === "terms and conditions" || this.base === "coming soon" || this.base === "under maintenance" || this.base === "layout single" || this.base === "layout transparent" || this.base === "layout rtl" || this.base === "layout mini" || this.base === "layout without header" || this.base === "layout dark" || this.base === "notifications") {
            this.page = this.base;
          }
          if (event instanceof NavigationEnd) {
            setTimeout(() => {
              this.spinner.hide();
            }, 800);
          }
        });
      }
      static ctorParameters = () => [
        { type: SpinnerService },
        { type: Router }
      ];
    };
    AppComponent = __decorate([
      Component({
        selector: "app-root",
        template: app_component_default,
        encapsulation: ViewEncapsulation.None,
        imports: [RouterOutlet, CommonModule],
        styles: [app_component_default2]
      })
    ], AppComponent);
  }
});

// src/app/app.component.spec.ts
var require_app_component_spec = __commonJS({
  "src/app/app.component.spec.ts"(exports) {
    init_testing();
    init_app_component3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AppComponent]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, template");
      });
    });
  }
});
export default require_app_component_spec();
//# sourceMappingURL=spec-app-app.component.spec.js.map
