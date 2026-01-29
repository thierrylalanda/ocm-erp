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
import "./chunk-FWMZPJRE.js";

// src/app/features/super-admin/super-admin.component.spec.ts
init_testing();

// src/app/features/super-admin/super-admin.component.ts
init_tslib_es6();

// angular:jit:template:src/app/features/super-admin/super-admin.component.html
var super_admin_component_default = "<router-outlet></router-outlet>";

// angular:jit:style:src/app/features/super-admin/super-admin.component.scss
var super_admin_component_default2 = "/* src/app/features/super-admin/super-admin.component.scss */\n/*# sourceMappingURL=super-admin.component.css.map */\n";

// src/app/features/super-admin/super-admin.component.ts
init_core();
init_router();
var SuperAdminComponent = class SuperAdminComponent2 {
};
SuperAdminComponent = __decorate([
  Component({
    selector: "app-super-admin",
    template: super_admin_component_default,
    imports: [RouterModule],
    styles: [super_admin_component_default2]
  })
], SuperAdminComponent);

// src/app/features/super-admin/super-admin.component.spec.ts
describe("SuperAdminComponent", () => {
  let component;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminComponent]
    });
    fixture = TestBed.createComponent(SuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-features-super-admin-super-admin.component.spec.js.map
