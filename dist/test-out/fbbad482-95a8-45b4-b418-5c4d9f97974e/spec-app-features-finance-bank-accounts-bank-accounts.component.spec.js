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

// angular:jit:template:src/app/features/finance/bank-accounts/bank-accounts.component.html
var bank_accounts_component_default;
var init_bank_accounts_component = __esm({
  "angular:jit:template:src/app/features/finance/bank-accounts/bank-accounts.component.html"() {
    bank_accounts_component_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/features/finance/bank-accounts/bank-accounts.component.scss
var bank_accounts_component_default2;
var init_bank_accounts_component2 = __esm({
  "angular:jit:style:src/app/features/finance/bank-accounts/bank-accounts.component.scss"() {
    bank_accounts_component_default2 = "/* src/app/features/finance/bank-accounts/bank-accounts.component.scss */\n/*# sourceMappingURL=bank-accounts.component.css.map */\n";
  }
});

// src/app/features/finance/bank-accounts/bank-accounts.component.ts
var BankAccountsComponent;
var init_bank_accounts_component3 = __esm({
  "src/app/features/finance/bank-accounts/bank-accounts.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_bank_accounts_component();
    init_bank_accounts_component2();
    init_core();
    init_router();
    BankAccountsComponent = class BankAccountsComponent2 {
    };
    BankAccountsComponent = __decorate([
      Component({
        selector: "app-bank-accounts",
        imports: [RouterModule],
        template: bank_accounts_component_default,
        styles: [bank_accounts_component_default2]
      })
    ], BankAccountsComponent);
  }
});

// src/app/features/finance/bank-accounts/bank-accounts.component.spec.ts
var require_bank_accounts_component_spec = __commonJS({
  "src/app/features/finance/bank-accounts/bank-accounts.component.spec.ts"(exports) {
    init_testing();
    init_bank_accounts_component3();
    describe("BankAccountsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [BankAccountsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BankAccountsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_bank_accounts_component_spec();
//# sourceMappingURL=spec-app-features-finance-bank-accounts-bank-accounts.component.spec.js.map
