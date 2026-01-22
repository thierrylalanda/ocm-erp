import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/coming-soon/coming-soon.component.ts
var ComingSoonComponent = class _ComingSoonComponent {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  countdownExpired = false;
  email = "";
  countdownInterval;
  ngOnInit() {
    this.setCountdown();
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  setCountdown() {
    const countdownDate = (/* @__PURE__ */ new Date("Jul 29, 2026 16:00:00")).getTime();
    this.countdownInterval = setInterval(() => {
      const todayDate = (/* @__PURE__ */ new Date()).getTime();
      const distance = countdownDate - todayDate;
      this.days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      this.minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      this.seconds = Math.floor(distance % (1e3 * 60) / 1e3);
      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.countdownExpired = true;
      }
    }, 1e3);
  }
  static \u0275fac = function ComingSoonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComingSoonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 77, vars: 4, consts: [[1, "bg-white", "coming-soon"], [1, "auth-bg"], [1, "container-fuild"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-lg-6", "mx-auto"], [1, "card"], [1, "comming-soon-pg", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "mb-2", "p-4"], ["src", "assets/img/favicon.png", "alt", "logo", 1, "img-fluid"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-2"], [1, "text-primary", "text-center"], [1, "text-dark"], [1, "fs-16", "text-gray", "text-center"], [1, "d-inline-flex", "list-unstyled", "align-items-center", "justify-content-center", "mb-3"], [1, "me-sm-3", "me-2"], [1, "d-flex", "flex-column", "align-items-center"], [1, "d-fle", "align-items-center", "mb-2", "justify-content-center", "flex-column", "border", "rounded", "bg-light", "px-sm-4", "py-sm-3", "p-2"], [1, "days", "fs-sm-30", "text-dark", "fs-24"], [1, "text-gray", "fw-medium", "fs-16"], [1, "text-dark", "fw-normal", "fs-18", "me-sm-3", "mb-2", "me-2"], [1, "d-flex", "align-items-center", "mb-2", "justify-content-center", "flex-column", "border", "rounded", "bg-light", "px-sm-4", "py-sm-3", "p-2"], [1, "hours", "fs-sm-30", "text-dark", "fs-24"], [1, "minutes", "fs-sm-30", "text-dark", "fs-24"], [1, "seconds", "fs-sm-30", "text-dark", "fs-24"], [1, "w-75"], [1, "subscribe-form", "w-100"], [1, "mb-3"], [1, "d-flex", "text-gray-9", "text-center", "justify-content-center", "fw-normal", "fs-16"], [1, "bg-transparent", "border", "p-2", "d-flex", "align-items-center", "rounded", "ps-0", "mb-3"], ["type", "email", "placeholder", "Enter Your Email", 1, "form-control", "bg-transparent", "border-0"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "d-flex", "flex-wrap", "justify-content-center", "align-items-center", "pb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "rounded-circle", "btn-icon", "btn-sm", "me-2", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/facebook-white.svg", 1, "img-fluid"], ["src", "assets/img/icons/instagram.svg", 1, "img-fluid"], ["src", "assets/img/icons/twitter.svg", 1, "img-fluid"], ["src", "assets/img/icons/pinterest.svg", 1, "img-fluid"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "rounded-circle", "btn-icon", "btn-sm", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/linkedin.svg", 1, "img-fluid"]], template: function ComingSoonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
      \u0275\u0275domElement(9, "img", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div")(11, "p", 10);
      \u0275\u0275text(12, "Our Website is");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 11)(14, "h1", 12);
      \u0275\u0275text(15, "COMING ");
      \u0275\u0275domElementStart(16, "span", 13);
      \u0275\u0275text(17, "SOON");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(18, "p", 14);
      \u0275\u0275text(19, "Please check back later, We are working hard to get ");
      \u0275\u0275domElement(20, "br");
      \u0275\u0275text(21, " everything just right.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "ul", 15)(23, "li", 16)(24, "div", 17)(25, "div", 18)(26, "h3", 19);
      \u0275\u0275text(27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "p", 20);
      \u0275\u0275text(29, "Days");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(30, "li", 21);
      \u0275\u0275text(31, ":");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "li", 16)(33, "div", 17)(34, "div", 22)(35, "h3", 23);
      \u0275\u0275text(36);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "p", 20);
      \u0275\u0275text(38, "Hrs");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(39, "li", 21);
      \u0275\u0275text(40, ":");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "li", 16)(42, "div", 17)(43, "div", 22)(44, "h3", 24);
      \u0275\u0275text(45);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "p", 20);
      \u0275\u0275text(47, "Min");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(48, "li", 21);
      \u0275\u0275text(49, ":");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "li")(51, "div", 17)(52, "div", 22)(53, "h3", 25);
      \u0275\u0275text(54);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "p", 20);
      \u0275\u0275text(56, "Sec");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(57, "div", 26)(58, "div", 27)(59, "div", 28)(60, "p", 29);
      \u0275\u0275text(61, "Subscribe to get notified!");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(62, "div", 30);
      \u0275\u0275domElement(63, "input", 31);
      \u0275\u0275domElementStart(64, "a", 32);
      \u0275\u0275text(65, "Subscribe");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(66, "div", 33)(67, "a", 34);
      \u0275\u0275domElement(68, "img", 35);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(69, "a", 34);
      \u0275\u0275domElement(70, "img", 36);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "a", 34);
      \u0275\u0275domElement(72, "img", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "a", 34);
      \u0275\u0275domElement(74, "img", 38);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "a", 39);
      \u0275\u0275domElement(76, "img", 40);
      \u0275\u0275domElementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275textInterpolate(ctx.days);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.hours);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.minutes);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.seconds);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComingSoonComponent, [{
    type: Component,
    args: [{ selector: "app-coming-soon", imports: [], template: '  <!-- Start Content -->\n   <div class="bg-white coming-soon">\n       <div class="auth-bg">\n           <div class="container-fuild">\n             <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">\n         \n                 <!-- start row -->\n                 <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">\n                     <div class="col-lg-6 mx-auto">\n                         <div class="card">\n                             <div class="comming-soon-pg d-flex flex-column align-items-center justify-content-center">\n                                 <div class="mb-2 p-4">\n                                     <img src="assets/img/favicon.png" alt="logo" class="img-fluid">\n                                 </div>\n                                 <div>\n                                     <p class="mb-2">Our Website is</p>\n                                 </div>\n                                 <div class="d-flex align-items-center justify-content-center mb-2">\n                                     <h1 class="text-primary text-center">COMING <span class="text-dark">SOON</span></h1>\n                                 </div>\n                                 <p class="fs-16 text-gray text-center">Please check back later, We are working hard to get\n                                     <br> everything just right.</p>\n                                 <ul class="d-inline-flex list-unstyled align-items-center justify-content-center mb-3">\n                                     <li class="me-sm-3 me-2">\n                                         <div class="d-flex flex-column align-items-center">\n                                             <div class="d-fle align-items-center mb-2 justify-content-center flex-column border rounded bg-light px-sm-4 py-sm-3 p-2">\n                                                 <h3 class="days fs-sm-30 text-dark fs-24">{{ days }}</h3>\n                                                 <p class="text-gray fw-medium fs-16">Days</p>\n                                             </div>\n                                         </div>\n                                     </li>\n                                     <li class="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">:</li>\n                                     <li class="me-sm-3 me-2">\n                                         <div class="d-flex flex-column align-items-center">\n                                             <div class="d-flex align-items-center mb-2 justify-content-center flex-column border rounded bg-light px-sm-4 py-sm-3 p-2">\n                                                 <h3 class="hours fs-sm-30 text-dark fs-24">{{ hours }}</h3>\n                                                 <p class="text-gray fw-medium fs-16">Hrs</p>\n                                             </div>\n                                         </div>\n                                         <li class="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">:</li>\n                                         <li class="me-sm-3 me-2">\n                                             <div class="d-flex flex-column align-items-center">\n                                                 <div class="d-flex align-items-center mb-2 justify-content-center flex-column border rounded bg-light px-sm-4 py-sm-3 p-2">\n                                                     <h3 class="minutes fs-sm-30 text-dark fs-24">{{ minutes }}</h3>\n                                                     <p class="text-gray fw-medium fs-16">Min</p>\n                                                 </div>\n                                             </div>\n                                         </li>\n                                         <li class="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">:</li>\n                                         <li>\n                                             <div class="d-flex flex-column align-items-center">\n                                                 <div class="d-flex align-items-center mb-2 justify-content-center flex-column border rounded bg-light px-sm-4 py-sm-3 p-2">\n                                                     <h3 class="seconds fs-sm-30 text-dark fs-24">{{ seconds }}</h3>\n                                                     <p class="text-gray fw-medium fs-16">Sec</p>\n                                                 </div>\n                                             </div>\n                                         </li>\n                                 </ul>\n                                 <div class="w-75">\n                                     <div class="subscribe-form w-100">\n                                         <div class="mb-3">\n                                             <p class="d-flex text-gray-9 text-center justify-content-center fw-normal fs-16">Subscribe to get notified!</p>\n                                         </div>\n                                         <div class="bg-transparent border p-2 d-flex align-items-center rounded ps-0 mb-3">\n                                             <input type="email" class="form-control bg-transparent border-0" placeholder="Enter Your Email">\n                                             <a href="javascript:void(0);" class="btn btn-primary">Subscribe</a>\n                                         </div>\n                                     </div>\n                                     <div class="d-flex flex-wrap justify-content-center align-items-center pb-3">\n                                         <a href="javascript:void(0);" class="btn btn-dark rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center">\n                                             <img src="assets/img/icons/facebook-white.svg" class="img-fluid">\n                                         </a>\n                                         <a href="javascript:void(0);" class="btn btn-dark rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center">\n                                             <img src="assets/img/icons/instagram.svg" class="img-fluid">\n                                         </a>\n                                         <a href="javascript:void(0);" class="btn btn-dark rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center">\n                                             <img src="assets/img/icons/twitter.svg" class="img-fluid">\n                                         </a>\n                                         <a href="javascript:void(0);" class="btn btn-dark rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center">\n                                             <img src="assets/img/icons/pinterest.svg" class="img-fluid">\n                                         </a>\n                                         <a href="javascript:void(0);" class="btn btn-dark rounded-circle btn-icon btn-sm d-flex align-items-center justify-content-center">\n                                             <img src="assets/img/icons/linkedin.svg" class="img-fluid">\n                                         </a>\n                                     </div>\n                                 </div>\n                             </div>\n                         </div>\n                     </div><!-- end col -->\n                 </div>\n                 <!-- end row -->\n         \n             </div>\n         </div>\n       </div>\n   </div>\n<!-- End Content -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonComponent, { className: "ComingSoonComponent", filePath: "src/app/features/pages/coming-soon/coming-soon.component.ts", lineNumber: 9 });
})();
export {
  ComingSoonComponent
};
//# sourceMappingURL=chunk-2JFY5LRD.js.map
