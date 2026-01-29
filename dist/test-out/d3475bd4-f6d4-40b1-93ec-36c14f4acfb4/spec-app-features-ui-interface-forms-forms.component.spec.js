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
  init_testing,
  waitForAsync
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/features/ui-interface/forms/forms.component.spec.ts
init_testing();

// src/app/features/ui-interface/forms/forms.component.ts
init_tslib_es6();

// angular:jit:template:src/app/features/ui-interface/forms/forms.component.html
var forms_component_default = "  <router-outlet></router-outlet>\n";

// angular:jit:style:src/app/features/ui-interface/forms/forms.component.scss
var forms_component_default2 = "/* src/app/features/ui-interface/forms/forms.component.scss */\n/*# sourceMappingURL=forms.component.css.map */\n";

// src/app/features/ui-interface/forms/forms.component.ts
init_core();
init_router();
var FormsComponent = class FormsComponent2 {
  innerHeight;
};
FormsComponent = __decorate([
  Component({
    selector: "app-forms",
    template: forms_component_default,
    imports: [RouterModule],
    styles: [forms_component_default2]
  })
], FormsComponent);

// src/app/features/ui-interface/forms/forms.component.spec.ts
describe("FormsComponent", () => {
  let component;
  let fixture;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FormsComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-features-ui-interface-forms-forms.component.spec.js.map
