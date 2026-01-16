import {
  CommonModule,
  DecimalPipe
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/advanced-ui/counter/counter.component.ts
var CounterComponent = class _CounterComponent {
  clients = 0;
  sales = 0;
  projects = 0;
  countUP = 0;
  countDownFromThree = 259200;
  countDownFromThirty = 30;
  countDownFromTen = 10;
  countFromZero = "00 Day 00 : 00 : 00";
  countFromThree = "00 Day 00 : 03 : 00";
  countFromThirty = "00 Day 00 : 00 : 30";
  countFromTen = "00 Day 00 : 00 : 10";
  countFromThreeWithUnit = "00 Day 00 : 00 : 10";
  firstCounter;
  secondCounter;
  thirdCounter;
  fourthCounter;
  constructor() {
    this.startTimer();
    this.startCounter();
  }
  startCounter() {
    for (var i = 0; i < 3e3; i++) {
      for (var i = 0; i < 1e4; i++) {
        for (var i = 0; i < 15e3; i++) {
          setTimeout(() => {
            if (this.clients < 3e3)
              this.clients++;
            if (this.sales < 1e4)
              this.sales++;
            if (this.projects < 15e3)
              this.projects++;
          });
        }
      }
    }
  }
  startTimer() {
    this.firstCounter = setInterval(() => {
      if (this.countUP === 0) {
        this.countUP++;
      } else {
        this.countUP++;
      }
      this.countFromZero = this.transform(this.countUP);
    }, 1e3);
    this.secondCounter = setInterval(() => {
      if (this.countDownFromThree === 0) {
        this.countDownFromThree--;
      } else {
        this.countDownFromThree--;
      }
      this.countFromThree = this.transform(this.countDownFromThree);
      this.countFromThreeWithUnit = this.transformWithUnit(this.countDownFromThree);
    }, 1e3);
    this.thirdCounter = setInterval(() => {
      if (this.countDownFromThirty <= 30 && this.countDownFromThirty > 20) {
        this.countDownFromThirty--;
      }
      this.countFromThirty = this.transform(this.countDownFromThirty);
    }, 1e3);
    this.fourthCounter = setInterval(() => {
      if (this.countDownFromTen <= 10 && this.countDownFromTen >= 1) {
        this.countDownFromTen--;
      }
      this.countFromTen = this.transform(this.countDownFromTen);
    }, 1e3);
  }
  transform(value) {
    const space = " ";
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return days + space + "Day" + space + (hours - days * 24) + space + ":" + space + (minutes - days * 1440 - (hours - days * 24) * 60) + space + ":" + space + seconds;
  }
  transformWithUnit(value) {
    const space = " ";
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return days + space + " Day" + space + (hours - days * 24) + " Hours" + space + ":" + space + (minutes - days * 1440 - (hours - days * 24) * 60) + " Minutes " + space + ":" + space + seconds + " Sec..";
  }
  static \u0275fac = function CounterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CounterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CounterComponent, selectors: [["app-counter"]], decls: 89, vars: 16, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-4"], [1, "card"], [1, "card-body"], [1, "counter"], [1, "card-header"], [1, "card-title"], ["id", "timer-countdown"], ["id", "timer-countinbetween"], ["id", "timer-countercallback"], ["id", "timer-outputpattern"]], template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Counter");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Advanced UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "li", 7);
      \u0275\u0275text(13, "Counter");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5");
      \u0275\u0275text(19, "Clients");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "h6", 12);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "number");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(23, "div", 9)(24, "div", 10)(25, "div", 11)(26, "h5");
      \u0275\u0275text(27, "Total Sales");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "h6", 12);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "number");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(31, "div", 9)(32, "div", 10)(33, "div", 11)(34, "h5");
      \u0275\u0275text(35, "Total Projects");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "h6", 12);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "number");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(39, "div", 9)(40, "div", 10)(41, "div", 13)(42, "h5", 14);
      \u0275\u0275text(43, "Count Down");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(44, "div", 11)(45, "h6");
      \u0275\u0275text(46, "Time Count from 3");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "span", 15);
      \u0275\u0275text(48);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(49, "div", 9)(50, "div", 10)(51, "div", 13)(52, "h5", 14);
      \u0275\u0275text(53, "Count Up");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "div", 11)(55, "h6");
      \u0275\u0275text(56, "Time Counting From 0");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "span", 15);
      \u0275\u0275text(58);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(59, "div", 9)(60, "div", 10)(61, "div", 13)(62, "h5", 14);
      \u0275\u0275text(63, "Count In between");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(64, "div", 11)(65, "h6");
      \u0275\u0275text(66, "Time counting from 30 to 20");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "span", 16);
      \u0275\u0275text(68);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(69, "div", 9)(70, "div", 10)(71, "div", 13)(72, "h5", 14);
      \u0275\u0275text(73, "Count Callback");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(74, "div", 11)(75, "h6");
      \u0275\u0275text(76, "Count from 10 to 0 and calls timer end callback");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(77, "span", 17);
      \u0275\u0275text(78);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(79, "div", 9)(80, "div", 10)(81, "div", 13)(82, "h5", 14);
      \u0275\u0275text(83, "Custom Output");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(84, "div", 11)(85, "h6");
      \u0275\u0275text(86, "Changed output pattern");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "span", 18);
      \u0275\u0275text(88);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 10, ctx.clients));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 12, ctx.sales));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 14, ctx.projects));
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.countFromThree, " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.countFromZero, " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.countFromThirty, " ");
      \u0275\u0275advance(9);
      \u0275\u0275classProp("counterCompleted", ctx.countDownFromTen === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.countFromTen, " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.countFromThreeWithUnit, " ");
    }
  }, dependencies: [CommonModule, DecimalPipe], styles: ["\n\n.counterCompleted[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=counter.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterComponent, [{
    type: Component,
    args: [{ selector: "app-counter", imports: [CommonModule], template: '<!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Counter</h4>\n  </div>\n\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n\n          <li class="breadcrumb-item active">Counter</li>\n      </ol>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-body">\n        <h5>Clients</h5>\n        <h6 class="counter">{{ clients | number }}</h6>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-body">\n        <h5>Total Sales</h5>\n        <h6 class="counter">{{ sales  | number}}</h6>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-body">\n        <h5>Total Projects</h5>\n        <h6 class="counter">{{ projects  | number}}</h6>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Count Down</h5>\n      </div>\n      <div class="card-body">\n        <h6>Time Count from 3</h6>\n        <!-- <span id="timer-countdown"> 00 Day 00 : 03 : 00 </span> -->\n        <span id="timer-countdown"> {{ countFromThree }} </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Count Up</h5>\n      </div>\n      <div class="card-body">\n        <h6>Time Counting From 0</h6>\n        <span id="timer-countdown">{{ countFromZero }} </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Count In between</h5>\n      </div>\n      <div class="card-body">\n        <h6>Time counting from 30 to 20</h6>\n        <span id="timer-countinbetween">\n          {{ countFromThirty }}\n        </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Count Callback</h5>\n      </div>\n      <div class="card-body">\n        <h6>Count from 10 to 0 and calls timer end callback</h6>\n        <span\n          [class.counterCompleted]="countDownFromTen ===0"\n          id="timer-countercallback"\n        >\n          {{ countFromTen }}\n        </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Custom Output</h5>\n      </div>\n      <div class="card-body">\n        <h6>Changed output pattern</h6>\n        <span id="timer-outputpattern"> {{countFromThreeWithUnit}} </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n</div>\n', styles: ["/* src/app/features/ui-interface/advanced-ui/counter/counter.component.scss */\n.counterCompleted {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=counter.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CounterComponent, { className: "CounterComponent", filePath: "src/app/features/ui-interface/advanced-ui/counter/counter.component.ts", lineNumber: 11 });
})();
export {
  CounterComponent
};
//# sourceMappingURL=chunk-7N2HJQDX.js.map
