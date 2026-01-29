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

// angular:jit:template:src/app/features/ui-interface/advanced-ui/counter/counter.component.html
var counter_component_default;
var init_counter_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/counter/counter.component.html"() {
    counter_component_default = '<!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Counter</h4>\n  </div>\n\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n\n          <li class="breadcrumb-item active">Counter</li>\n      </ol>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-body">\n        <h5>Clients</h5>\n        <h6 class="counter">{{ clients | number }}</h6>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-body">\n        <h5>Total Sales</h5>\n        <h6 class="counter">{{ sales  | number}}</h6>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-body">\n        <h5>Total Projects</h5>\n        <h6 class="counter">{{ projects  | number}}</h6>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Count Down</h5>\n      </div>\n      <div class="card-body">\n        <h6>Time Count from 3</h6>\n        <!-- <span id="timer-countdown"> 00 Day 00 : 03 : 00 </span> -->\n        <span id="timer-countdown"> {{ countFromThree }} </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Count Up</h5>\n      </div>\n      <div class="card-body">\n        <h6>Time Counting From 0</h6>\n        <span id="timer-countdown">{{ countFromZero }} </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Count In between</h5>\n      </div>\n      <div class="card-body">\n        <h6>Time counting from 30 to 20</h6>\n        <span id="timer-countinbetween">\n          {{ countFromThirty }}\n        </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Count Callback</h5>\n      </div>\n      <div class="card-body">\n        <h6>Count from 10 to 0 and calls timer end callback</h6>\n        <span\n          [class.counterCompleted]="countDownFromTen ===0"\n          id="timer-countercallback"\n        >\n          {{ countFromTen }}\n        </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n\n  <!-- Counter -->\n  <div class="col-md-4">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Custom Output</h5>\n      </div>\n      <div class="card-body">\n        <h6>Changed output pattern</h6>\n        <span id="timer-outputpattern"> {{countFromThreeWithUnit}} </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Counter -->\n</div>\n';
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/counter/counter.component.scss
var counter_component_default2;
var init_counter_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/counter/counter.component.scss"() {
    counter_component_default2 = "/* src/app/features/ui-interface/advanced-ui/counter/counter.component.scss */\n.counterCompleted {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=counter.component.css.map */\n";
  }
});

// src/app/features/ui-interface/advanced-ui/counter/counter.component.ts
var CounterComponent;
var init_counter_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/counter/counter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_counter_component();
    init_counter_component2();
    init_core();
    init_common();
    CounterComponent = class CounterComponent2 {
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
      static ctorParameters = () => [];
    };
    CounterComponent = __decorate([
      Component({
        selector: "app-counter",
        template: counter_component_default,
        imports: [CommonModule],
        styles: [counter_component_default2]
      })
    ], CounterComponent);
  }
});

// src/app/features/ui-interface/advanced-ui/counter/counter.component.spec.ts
var require_counter_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/counter/counter.component.spec.ts"(exports) {
    init_testing();
    init_counter_component3();
    describe("CounterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CounterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_counter_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-counter-counter.component.spec.js.map
