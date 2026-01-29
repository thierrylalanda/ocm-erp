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

// angular:jit:template:src/app/features/application/calls/outgoing-call/outgoing-call.component.html
var outgoing_call_component_default;
var init_outgoing_call_component = __esm({
  "angular:jit:template:src/app/features/application/calls/outgoing-call/outgoing-call.component.html"() {
    outgoing_call_component_default = '            <!-- Start Container  -->\n            <div class="content-two">\n\n                <!-- start row  -->\n                <div class="row">\n                    <div class="col-xxl-12">\n                        <div class="card incoming-call mb-0 shadow-none">\n                            <div class="card-body text-center d-flex flex-column justify-content-center">\n                                <div class="voice-call-img mb-3">\n                                    <img src="assets/img/users/user-01.jpg" class="img-fluid rounded-circle" alt="img">\n                                </div>\n                                <h5>Anthony Lewis</h5>\n                                <p>Calling...</p>\n                                <div class="d-flex align-items-center justify-content-center">\n                                    <a href="javascript:void(0);" class="btn btn-light call-item p-0 d-flex align-items-center justify-content-center me-3"><i class="ti ti-video fs-20"></i></a>\n                                    <a href="javascript:void(0);" class="btn btn-light call-item p-0 d-flex align-items-center justify-content-center me-3"><i class="ti ti-microphone fs-20"></i></a>\n                                    <a href="javascript:void(0);" class="btn btn-danger call-item p-0 d-flex align-items-center justify-content-center me-3"><i class="ti ti-phone-off fs-20"></i></a>\n                                    <a href="javascript:void(0);" class="btn btn-light call-item p-0 d-flex align-items-center justify-content-center me-3"><i class="ti ti-user-plus fs-20"></i></a>\n                                    <a href="javascript:void(0);" class="btn btn-light call-item p-0 d-flex align-items-center justify-content-center"><i class="ti ti-volume fs-20"></i></a>\n                                </div>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n                </div>\n                <!-- end row  -->\n\n            </div>\n            <!-- container  -->';
  }
});

// angular:jit:style:src/app/features/application/calls/outgoing-call/outgoing-call.component.scss
var outgoing_call_component_default2;
var init_outgoing_call_component2 = __esm({
  "angular:jit:style:src/app/features/application/calls/outgoing-call/outgoing-call.component.scss"() {
    outgoing_call_component_default2 = "/* src/app/features/application/calls/outgoing-call/outgoing-call.component.scss */\n/*# sourceMappingURL=outgoing-call.component.css.map */\n";
  }
});

// src/app/features/application/calls/outgoing-call/outgoing-call.component.ts
var OutgoingCallComponent;
var init_outgoing_call_component3 = __esm({
  "src/app/features/application/calls/outgoing-call/outgoing-call.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_outgoing_call_component();
    init_outgoing_call_component2();
    init_core();
    init_common();
    OutgoingCallComponent = class OutgoingCallComponent2 {
    };
    OutgoingCallComponent = __decorate([
      Component({
        selector: "app-outgoing-call",
        template: outgoing_call_component_default,
        imports: [CommonModule],
        styles: [outgoing_call_component_default2]
      })
    ], OutgoingCallComponent);
  }
});

// src/app/features/application/calls/outgoing-call/outgoing-call.component.spec.ts
var require_outgoing_call_component_spec = __commonJS({
  "src/app/features/application/calls/outgoing-call/outgoing-call.component.spec.ts"(exports) {
    init_testing();
    init_outgoing_call_component3();
    describe("OutgoingCallComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [OutgoingCallComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(OutgoingCallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_outgoing_call_component_spec();
//# sourceMappingURL=spec-app-features-application-calls-outgoing-call-outgoing-call.component.spec.js.map
