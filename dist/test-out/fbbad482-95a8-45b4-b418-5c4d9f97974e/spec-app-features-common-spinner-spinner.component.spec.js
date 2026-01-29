import {
  init_core_index
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import {
  SpinnerService
} from "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-EDGRTZKC.js";
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

// angular:jit:template:src/app/features/common/spinner/spinner.component.html
var spinner_component_default;
var init_spinner_component = __esm({
  "angular:jit:template:src/app/features/common/spinner/spinner.component.html"() {
    spinner_component_default = '@if (loading$ | async) {\n  <div class="spinner_lay"></div>\n}\n\n@if (loading$ | async) {\n  <div class="d-flex justify-content-center">\n    <div class="spinner-border spinner" role="status"></div>\n  </div>\n}\n';
  }
});

// angular:jit:style:src/app/features/common/spinner/spinner.component.scss
var spinner_component_default2;
var init_spinner_component2 = __esm({
  "angular:jit:style:src/app/features/common/spinner/spinner.component.scss"() {
    spinner_component_default2 = "/* src/app/features/common/spinner/spinner.component.scss */\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 999999;\n  color: #7638ff;\n}\n.spinner_lay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.4;\n  z-index: 1000000;\n}\n/*# sourceMappingURL=spinner.component.css.map */\n";
  }
});

// src/app/features/common/spinner/spinner.component.ts
var SpinnerComponent;
var init_spinner_component3 = __esm({
  "src/app/features/common/spinner/spinner.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_spinner_component();
    init_spinner_component2();
    init_core();
    init_core_index();
    init_common();
    SpinnerComponent = class SpinnerComponent2 {
      spinner;
      loading$;
      constructor(spinner) {
        this.spinner = spinner;
      }
      ngOnInit() {
        this.loading$ = this.spinner.loading$;
      }
      static ctorParameters = () => [
        { type: SpinnerService }
      ];
    };
    SpinnerComponent = __decorate([
      Component({
        selector: "app-spinner",
        template: spinner_component_default,
        imports: [CommonModule],
        styles: [spinner_component_default2]
      })
    ], SpinnerComponent);
  }
});

// src/app/features/common/spinner/spinner.component.spec.ts
var require_spinner_component_spec = __commonJS({
  "src/app/features/common/spinner/spinner.component.spec.ts"(exports) {
    init_testing();
    init_spinner_component3();
    describe("SpinnerComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SpinnerComponent]
        }).compileComponents();
      }));
      beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_spinner_component_spec();
//# sourceMappingURL=spec-app-features-common-spinner-spinner.component.spec.js.map
