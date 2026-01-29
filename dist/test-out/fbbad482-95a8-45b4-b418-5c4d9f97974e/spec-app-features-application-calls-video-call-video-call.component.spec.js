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

// angular:jit:template:src/app/features/application/calls/video-call/video-call.component.html
var video_call_component_default;
var init_video_call_component = __esm({
  "angular:jit:template:src/app/features/application/calls/video-call/video-call.component.html"() {
    video_call_component_default = '            <!-- Start Content -->\n            <div class="content-two video-call-content">\n\n                <!-- Page Header -->\n                <div class="d-flex mb-3 right-content align-items-center flex-wrap justify-content-between">\n                    <div class="me-2 mb-2">\n                        <div class="input-icon-start position-relative">\n                            <span class="input-icon-addon">\n                        <i class="ti ti-search"></i>\n                    </span>\n                            <input type="text" class="form-control" placeholder="Search">\n                        </div>\n                    </div>\n                    <div class="mb-2">\n                        <a href="javascript:void(0);" class="btn btn-primary btn-lg d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add People</a>\n                    </div>\n                </div>\n                <!-- end page header -->\n\n                <!-- start row -->\n                <div class="row">\n                    <div class="col-xxl-12">\n                        <div class="single-video d-flex">\n                            <div class="join-video flex-fill">\n                                <img src="assets/img/media/video.jpg" class="img-fluid" alt="Logo">\n                                <div class="chat-active-users">\n                                    <div class="video-avatar">\n                                        <img src="./assets/img/users/user-01.jpg" class="img-fluid" alt="Logo">\n                                        <div class="user-name">\n                                            <span>Joanne Conner</span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="record-item d-flex align-items-center">\n                                    <div class="record-time me-2">\n                                        <span>40:12</span>\n                                    </div>\n                                    <a href="javascript:void(0);" class="video-expand btnFullscreen	" (click)="fullscreen()">\n                                        <i class="ti ti-maximize"></i>\n                                    </a>\n                                </div>\n                                <div class="more-icon">\n                                    <a href="javascript:void(0);" class="mic-off">\n                                        <i class="bx bx-microphone-off"></i>\n                                    </a>\n                                </div>\n                                <div class="call-overlay-bottom d-flex justify-content-sm-between align-items-center flex-wrap w-100">\n                                    <a href="javascript:void(0);" class="options-icon d-flex align-items-center justify-content-center guest-off rounded"><i class="ti ti-user-off"></i></a>\n                                    <div class="call-option rounded-pill d-flex justify-content-center align-items-center">\n                                        <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"><i class="ti ti-microphone"></i></a>\n                                        <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"><i class="ti ti-video"></i></a>\n                                        <a href="javascript:void(0);" class="call-icon btn-danger d-flex justify-content-center align-items-center rounded"><i class="ti ti-phone"></i></a>\n                                        <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded mx-2"><i class="ti ti-volume"></i></a>\n                                        <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded"><i class="ti ti-device-imac-share"></i></a>\n                                    </div>\n                                    <a href="javascript:void(0);" class="options-icon bg-light d-flex align-items-center justify-content-center rounded" id="show-message"><i class="ti ti-dots"></i></a>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n            <!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/application/calls/video-call/video-call.component.scss
var video_call_component_default2;
var init_video_call_component2 = __esm({
  "angular:jit:style:src/app/features/application/calls/video-call/video-call.component.scss"() {
    video_call_component_default2 = "/* src/app/features/application/calls/video-call/video-call.component.scss */\n/*# sourceMappingURL=video-call.component.css.map */\n";
  }
});

// src/app/features/application/calls/video-call/video-call.component.ts
var VideoCallComponent;
var init_video_call_component3 = __esm({
  "src/app/features/application/calls/video-call/video-call.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_video_call_component();
    init_video_call_component2();
    init_core();
    init_common();
    VideoCallComponent = class VideoCallComponent2 {
      elem = document.documentElement;
      fullscreen() {
        if (!document.fullscreenElement) {
          this.elem.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };
    VideoCallComponent = __decorate([
      Component({
        selector: "app-video-call",
        template: video_call_component_default,
        imports: [CommonModule],
        styles: [video_call_component_default2]
      })
    ], VideoCallComponent);
  }
});

// src/app/features/application/calls/video-call/video-call.component.spec.ts
var require_video_call_component_spec = __commonJS({
  "src/app/features/application/calls/video-call/video-call.component.spec.ts"(exports) {
    init_testing();
    init_video_call_component3();
    describe("VideoCallComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [VideoCallComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(VideoCallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_video_call_component_spec();
//# sourceMappingURL=spec-app-features-application-calls-video-call-video-call.component.spec.js.map
