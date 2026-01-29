import {
  RouterModule,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
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

// angular:jit:template:src/app/features/manage/tickets/tickets.component.html
var tickets_component_default;
var init_tickets_component = __esm({
  "angular:jit:template:src/app/features/manage/tickets/tickets.component.html"() {
    tickets_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/manage/tickets/tickets.component.scss
var tickets_component_default2;
var init_tickets_component2 = __esm({
  "angular:jit:style:src/app/features/manage/tickets/tickets.component.scss"() {
    tickets_component_default2 = "/* src/app/features/manage/tickets/tickets.component.scss */\n/*# sourceMappingURL=tickets.component.css.map */\n";
  }
});

// src/app/features/manage/tickets/tickets.component.ts
var TicketsComponent;
var init_tickets_component3 = __esm({
  "src/app/features/manage/tickets/tickets.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_tickets_component();
    init_tickets_component2();
    init_core();
    init_router();
    TicketsComponent = class TicketsComponent2 {
    };
    TicketsComponent = __decorate([
      Component({
        selector: "app-tickets",
        imports: [RouterModule],
        template: tickets_component_default,
        styles: [tickets_component_default2]
      })
    ], TicketsComponent);
  }
});

// src/app/features/manage/tickets/tickets.component.spec.ts
var require_tickets_component_spec = __commonJS({
  "src/app/features/manage/tickets/tickets.component.spec.ts"(exports) {
    init_testing();
    init_tickets_component3();
    describe("TicketsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [TicketsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(TicketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_tickets_component_spec();
//# sourceMappingURL=spec-app-features-manage-tickets-tickets.component.spec.js.map
