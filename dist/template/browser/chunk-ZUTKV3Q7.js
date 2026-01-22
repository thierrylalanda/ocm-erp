import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/application/calls/video-call/video-call.component.ts
var VideoCallComponent = class _VideoCallComponent {
  elem = document.documentElement;
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  static \u0275fac = function VideoCallComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VideoCallComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoCallComponent, selectors: [["app-video-call"]], decls: 47, vars: 0, consts: [[1, "content-two", "video-call-content"], [1, "d-flex", "mb-3", "right-content", "align-items-center", "flex-wrap", "justify-content-between"], [1, "me-2", "mb-2"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "mb-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "btn-lg", "d-flex", "align-items-center"], [1, "ti", "ti-circle-plus", "me-2"], [1, "row"], [1, "col-xxl-12"], [1, "single-video", "d-flex"], [1, "join-video", "flex-fill"], ["src", "assets/img/media/video.jpg", "alt", "Logo", 1, "img-fluid"], [1, "chat-active-users"], [1, "video-avatar"], ["src", "./assets/img/users/user-01.jpg", "alt", "Logo", 1, "img-fluid"], [1, "user-name"], [1, "record-item", "d-flex", "align-items-center"], [1, "record-time", "me-2"], ["href", "javascript:void(0);", 1, "video-expand", "btnFullscreen", 3, "click"], [1, "ti", "ti-maximize"], [1, "more-icon"], ["href", "javascript:void(0);", 1, "mic-off"], [1, "bx", "bx-microphone-off"], [1, "call-overlay-bottom", "d-flex", "justify-content-sm-between", "align-items-center", "flex-wrap", "w-100"], ["href", "javascript:void(0);", 1, "options-icon", "d-flex", "align-items-center", "justify-content-center", "guest-off", "rounded"], [1, "ti", "ti-user-off"], [1, "call-option", "rounded-pill", "d-flex", "justify-content-center", "align-items-center"], ["href", "javascript:void(0);", 1, "options-icon", "bg-light", "d-flex", "justify-content-center", "align-items-center", "rounded", "me-2"], [1, "ti", "ti-microphone"], [1, "ti", "ti-video"], ["href", "javascript:void(0);", 1, "call-icon", "btn-danger", "d-flex", "justify-content-center", "align-items-center", "rounded"], [1, "ti", "ti-phone"], ["href", "javascript:void(0);", 1, "options-icon", "bg-light", "d-flex", "justify-content-center", "align-items-center", "rounded", "mx-2"], [1, "ti", "ti-volume"], ["href", "javascript:void(0);", 1, "options-icon", "bg-light", "d-flex", "justify-content-center", "align-items-center", "rounded"], [1, "ti", "ti-device-imac-share"], ["href", "javascript:void(0);", "id", "show-message", 1, "options-icon", "bg-light", "d-flex", "align-items-center", "justify-content-center", "rounded"], [1, "ti", "ti-dots"]], template: function VideoCallComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275domElement(5, "i", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(6, "input", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 7)(8, "a", 8);
      \u0275\u0275domElement(9, "i", 9);
      \u0275\u0275text(10, "Add People");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13);
      \u0275\u0275domElement(15, "img", 14);
      \u0275\u0275domElementStart(16, "div", 15)(17, "div", 16);
      \u0275\u0275domElement(18, "img", 17);
      \u0275\u0275domElementStart(19, "div", 18)(20, "span");
      \u0275\u0275text(21, "Joanne Conner");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(22, "div", 19)(23, "div", 20)(24, "span");
      \u0275\u0275text(25, "40:12");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "a", 21);
      \u0275\u0275domListener("click", function VideoCallComponent_Template_a_click_26_listener() {
        return ctx.fullscreen();
      });
      \u0275\u0275domElement(27, "i", 22);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(28, "div", 23)(29, "a", 24);
      \u0275\u0275domElement(30, "i", 25);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "div", 26)(32, "a", 27);
      \u0275\u0275domElement(33, "i", 28);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "div", 29)(35, "a", 30);
      \u0275\u0275domElement(36, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "a", 30);
      \u0275\u0275domElement(38, "i", 32);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "a", 33);
      \u0275\u0275domElement(40, "i", 34);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "a", 35);
      \u0275\u0275domElement(42, "i", 36);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "a", 37);
      \u0275\u0275domElement(44, "i", 38);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(45, "a", 39);
      \u0275\u0275domElement(46, "i", 40);
      \u0275\u0275domElementEnd()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoCallComponent, [{
    type: Component,
    args: [{ selector: "app-video-call", imports: [CommonModule], template: '            <!-- Start Content -->\n            <div class="content-two video-call-content">\n\n                <!-- Page Header -->\n                <div class="d-flex mb-3 right-content align-items-center flex-wrap justify-content-between">\n                    <div class="me-2 mb-2">\n                        <div class="input-icon-start position-relative">\n                            <span class="input-icon-addon">\n                        <i class="ti ti-search"></i>\n                    </span>\n                            <input type="text" class="form-control" placeholder="Search">\n                        </div>\n                    </div>\n                    <div class="mb-2">\n                        <a href="javascript:void(0);" class="btn btn-primary btn-lg d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add People</a>\n                    </div>\n                </div>\n                <!-- end page header -->\n\n                <!-- start row -->\n                <div class="row">\n                    <div class="col-xxl-12">\n                        <div class="single-video d-flex">\n                            <div class="join-video flex-fill">\n                                <img src="assets/img/media/video.jpg" class="img-fluid" alt="Logo">\n                                <div class="chat-active-users">\n                                    <div class="video-avatar">\n                                        <img src="./assets/img/users/user-01.jpg" class="img-fluid" alt="Logo">\n                                        <div class="user-name">\n                                            <span>Joanne Conner</span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="record-item d-flex align-items-center">\n                                    <div class="record-time me-2">\n                                        <span>40:12</span>\n                                    </div>\n                                    <a href="javascript:void(0);" class="video-expand btnFullscreen	" (click)="fullscreen()">\n                                        <i class="ti ti-maximize"></i>\n                                    </a>\n                                </div>\n                                <div class="more-icon">\n                                    <a href="javascript:void(0);" class="mic-off">\n                                        <i class="bx bx-microphone-off"></i>\n                                    </a>\n                                </div>\n                                <div class="call-overlay-bottom d-flex justify-content-sm-between align-items-center flex-wrap w-100">\n                                    <a href="javascript:void(0);" class="options-icon d-flex align-items-center justify-content-center guest-off rounded"><i class="ti ti-user-off"></i></a>\n                                    <div class="call-option rounded-pill d-flex justify-content-center align-items-center">\n                                        <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"><i class="ti ti-microphone"></i></a>\n                                        <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"><i class="ti ti-video"></i></a>\n                                        <a href="javascript:void(0);" class="call-icon btn-danger d-flex justify-content-center align-items-center rounded"><i class="ti ti-phone"></i></a>\n                                        <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded mx-2"><i class="ti ti-volume"></i></a>\n                                        <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded"><i class="ti ti-device-imac-share"></i></a>\n                                    </div>\n                                    <a href="javascript:void(0);" class="options-icon bg-light d-flex align-items-center justify-content-center rounded" id="show-message"><i class="ti ti-dots"></i></a>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n            <!-- End Content -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoCallComponent, { className: "VideoCallComponent", filePath: "src/app/features/application/calls/video-call/video-call.component.ts", lineNumber: 10 });
})();
export {
  VideoCallComponent
};
//# sourceMappingURL=chunk-ZUTKV3Q7.js.map
