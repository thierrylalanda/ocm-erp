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

// angular:jit:template:src/app/features/application/calls/voice-call/voice-call.component.html
var voice_call_component_default;
var init_voice_call_component = __esm({
  "angular:jit:template:src/app/features/application/calls/voice-call/voice-call.component.html"() {
    voice_call_component_default = '			<!-- Start Content -->\n			<div class="content-two">\n                <div class="col-xxl-12">\n					<div class="card incoming-call mb-0 shadow-none">\n						<div class="card-header">\n							<div class="d-flex align-items-center justify-content-between">\n								<div class="d-flex align-items-center">\n									<span class="avatar avatar-lg avatar-rounded me-2">\n										<img src="assets/img/users/user-01.jpg" class="img-fluid rounded-circle" alt="img">\n									</span>\n									<div>\n										<h6 class="mb-1"><a href="javascript:void(0);">Anthony Lewis</a></h6>\n										<span class="d-block">Online</span>\n									</div>\n								</div>\n								<a href="javascript:void(0);" class="avatar avatar-md rounded-circle bg-light text-dark">\n									<i class="ti ti-user-plus fs-20"></i>\n								</a>\n							</div>\n						</div> <!-- end card-header -->\n						<div class="card-body position-relative text-center d-flex flex-column justify-content-center">\n							<div class="voice-call-img mb-3">\n								<img src="assets/img/users/user-01.jpg" class="img-fluid rounded-circle" alt="img">\n							</div>\n							<h5>Anthony Lewis</h5>\n							<p>00:24</p>\n							<a href="javascript:void(0);" class="avatar avatar-xl position-absolute end-0 bottom-0 m-3"><img src="assets/img/users/user-05.jpg" alt="Img"></a>\n						</div> <!-- end card-body -->\n						<div class="card-footer bg-white">\n							<div class="d-flex align-items-center justify-content-center">\n								<a href="javascript:void(0);" class="btn btn-light call-item p-0 d-flex align-items-center justify-content-center me-3"><i class="ti ti-video fs-20"></i></a>\n								<a href="javascript:void(0);" class="btn btn-danger call-item p-0 d-flex align-items-center justify-content-center me-3"><i class="ti ti-phone fs-20"></i></a>\n								<a href="javascript:void(0);" class="btn btn-light call-item p-0 d-flex align-items-center justify-content-center"><i class="ti ti-microphone fs-20"></i></a>\n							</div>\n						</div> <!-- end card-footer -->\n					</div> <!-- end card -->\n                </div><!-- end col -->\n		    </div>\n            <!-- container-->';
  }
});

// angular:jit:style:src/app/features/application/calls/voice-call/voice-call.component.scss
var voice_call_component_default2;
var init_voice_call_component2 = __esm({
  "angular:jit:style:src/app/features/application/calls/voice-call/voice-call.component.scss"() {
    voice_call_component_default2 = "/* src/app/features/application/calls/voice-call/voice-call.component.scss */\n/*# sourceMappingURL=voice-call.component.css.map */\n";
  }
});

// src/app/features/application/calls/voice-call/voice-call.component.ts
var VoiceCallComponent;
var init_voice_call_component3 = __esm({
  "src/app/features/application/calls/voice-call/voice-call.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_voice_call_component();
    init_voice_call_component2();
    init_common();
    init_core();
    VoiceCallComponent = class VoiceCallComponent2 {
    };
    VoiceCallComponent = __decorate([
      Component({
        selector: "app-voice-call",
        template: voice_call_component_default,
        imports: [CommonModule],
        styles: [voice_call_component_default2]
      })
    ], VoiceCallComponent);
  }
});

// src/app/features/application/calls/voice-call/voice-call.component.spec.ts
var require_voice_call_component_spec = __commonJS({
  "src/app/features/application/calls/voice-call/voice-call.component.spec.ts"(exports) {
    init_testing();
    init_voice_call_component3();
    describe("VoiceCallComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [VoiceCallComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(VoiceCallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_voice_call_component_spec();
//# sourceMappingURL=spec-app-features-application-calls-voice-call-voice-call.component.spec.js.map
