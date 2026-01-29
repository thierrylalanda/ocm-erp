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

// angular:jit:template:src/app/features/application/calls/incoming-call/incoming-call.component.html
var incoming_call_component_default;
var init_incoming_call_component = __esm({
  "angular:jit:template:src/app/features/application/calls/incoming-call/incoming-call.component.html"() {
    incoming_call_component_default = '<div class="content-two">\n             \n    <!-- start row -->\n    <div class="row">\n        <div class="col-xxl-12">\n            <div class="card incoming-call mb-0 shadow-none">\n                <div class="card-body text-center d-flex flex-column justify-content-center">\n                    <div class="voice-call-img mb-3">\n                        <img src="assets/img/users/user-01.jpg" class="img-fluid rounded-circle" alt="img">\n                    </div>\n                    <h5>Anthony Lewis</h5>\n                    <p>Calling...</p>\n                    <div class="d-flex align-items-center justify-content-center">\n                        <a href="javascript:void(0);" class="btn btn-success call-item p-0 d-flex align-items-center justify-content-center me-3"><i class="ti ti-phone fs-20"></i></a>\n                        <a href="javascript:void(0);" class="btn btn-danger call-item p-0 d-flex align-items-center justify-content-center"><i class="ti ti-phone-off fs-20"></i></a>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n    </div>\n    <!-- end row -->\n\n</div>';
  }
});

// angular:jit:style:src/app/features/application/calls/incoming-call/incoming-call.component.scss
var incoming_call_component_default2;
var init_incoming_call_component2 = __esm({
  "angular:jit:style:src/app/features/application/calls/incoming-call/incoming-call.component.scss"() {
    incoming_call_component_default2 = "/* src/app/features/application/calls/incoming-call/incoming-call.component.scss */\n/*# sourceMappingURL=incoming-call.component.css.map */\n";
  }
});

// src/app/features/application/calls/incoming-call/incoming-call.component.ts
var IncomingCallComponent;
var init_incoming_call_component3 = __esm({
  "src/app/features/application/calls/incoming-call/incoming-call.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_incoming_call_component();
    init_incoming_call_component2();
    init_core();
    init_common();
    IncomingCallComponent = class IncomingCallComponent2 {
    };
    IncomingCallComponent = __decorate([
      Component({
        selector: "app-incoming-call",
        template: incoming_call_component_default,
        imports: [CommonModule],
        styles: [incoming_call_component_default2]
      })
    ], IncomingCallComponent);
  }
});

// src/app/features/application/calls/incoming-call/incoming-call.component.spec.ts
var require_incoming_call_component_spec = __commonJS({
  "src/app/features/application/calls/incoming-call/incoming-call.component.spec.ts"(exports) {
    init_testing();
    init_incoming_call_component3();
    describe("IncomingCallComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [IncomingCallComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(IncomingCallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_incoming_call_component_spec();
//# sourceMappingURL=spec-app-features-application-calls-incoming-call-incoming-call.component.spec.js.map
