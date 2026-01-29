import {
  LabelType,
  init_angular_slider_ngx_slider
} from "./chunk-X7LAX4JP.js";
import {
  MatSliderModule,
  init_slider
} from "./chunk-W5TEORCC.js";
import "./chunk-ZQVU7KV2.js";
import "./chunk-Y46UO4F7.js";
import "./chunk-WYJ2IQUD.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-V5QKIDZC.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import "./chunk-2RBILSOV.js";
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

// angular:jit:template:src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.html
var rangeslider_component_default;
var init_rangeslider_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.html"() {
    rangeslider_component_default = '<!-- Page Header -->\n\n              <!-- Page Header -->\n              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n                <div class="flex-grow-1">\n                    <h4 class="fs-18 fw-semibold mb-0">Range Slider</h4>\n                </div>\n                <div class="text-end">\n                    <ol class="breadcrumb m-0 py-0">\n                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                        <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n                        <li class="breadcrumb-item active">Range Slider</li>\n                    </ol>\n                </div>\n            </div>\n            <!-- End Page Header -->	\n<!-- /Page Header -->	\n<div class="row">\n  <!-- Rangeslider -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Default</h5>\n      </div>\n      <div class="card-body">\n        <mat-slider min="0" max="100" step="10"  discrete [displayWith]="formatLabel">\n          <input matSliderThumb>\n        </mat-slider>\n        \n      </div>\n    </div>\n  </div>\n  <!-- /Rangeslider -->\n\n  <!-- Rangeslider -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Min-Max</h5>\n      </div>\n      <div class="card-body">\n        <mat-slider min="200" max="500"  discrete [displayWith]="formatLabel">\n          <input value="300" matSliderThumb>\n        </mat-slider>\n      </div>\n    </div>\n  </div>\n  <!-- /Rangeslider -->\n\n\n  <!-- Rangeslider -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Range</h5>\n      </div>\n      <div class="card-body">\n        <mat-slider min="200" max="500"  discrete [displayWith]="formatLabel">\n          <input value="300" matSliderStartThumb>\n          <input value="400" matSliderEndThumb>\n        </mat-slider>\n      </div>\n    </div>\n  </div>\n  <!-- /Rangeslider -->\n\n\n  <!-- Rangeslider -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Custom Values</h5>\n      </div>\n      <div class="card-body">\n        <div class="custom-slider">\n          <mat-slider min="1" max="12" step="1"  discrete [displayWith]="formatLabel1">\n            <input matSliderThumb>\n          </mat-slider>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Rangeslider -->\n\n\n \n</div>\n';
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.scss
var rangeslider_component_default2;
var init_rangeslider_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.scss"() {
    rangeslider_component_default2 = "/* src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.scss */\n.custom-slider .ngx-slider .ngx-slider-bar {\n  background: #ffe4d1;\n  height: 2px;\n}\n.custom-slider .ngx-slider .ngx-slider-selection {\n  background: orange;\n}\n.custom-slider .ngx-slider .ngx-slider-pointer {\n  width: 8px;\n  height: 16px;\n  top: auto;\n  bottom: 0;\n  background-color: #333;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.custom-slider .ngx-slider .ngx-slider-pointer:after {\n  display: none;\n}\n.custom-slider .ngx-slider .ngx-slider-bubble {\n  bottom: 14px;\n}\n.custom-slider .ngx-slider .ngx-slider-limit {\n  font-weight: bold;\n  color: orange;\n}\n.custom-slider .ngx-slider .ngx-slider-tick {\n  width: 1px;\n  height: 10px;\n  margin-left: 4px;\n  border-radius: 0;\n  background: #ffe4d1;\n  top: -1px;\n}\n.custom-slider .ngx-slider .ngx-slider-tick.ngx-slider-selected {\n  background: orange;\n}\n/*# sourceMappingURL=rangeslider.component.css.map */\n";
  }
});

// src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.ts
var RangesliderComponent;
var init_rangeslider_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_rangeslider_component();
    init_rangeslider_component2();
    init_angular_slider_ngx_slider();
    init_core();
    init_common();
    init_slider();
    RangesliderComponent = class RangesliderComponent2 {
      value = 100;
      options = {
        floor: 0,
        ceil: 200
      };
      value1 = 40;
      options1 = {
        floor: 0,
        ceil: 200
      };
      values = 40;
      highValue = 60;
      option = {
        floor: 0,
        ceil: 100
      };
      minValue = 100;
      maxValue = 400;
      options2 = {
        floor: 0,
        ceil: 500,
        translate: (value, label) => {
          switch (label) {
            case LabelType.Low:
              return "<b>Min price:</b> $" + value;
            case LabelType.High:
              return "<b>Max price:</b> $" + value;
            default:
              return "$" + value;
          }
        }
      };
      value3 = -500;
      highValue3 = 500;
      options3 = {
        floor: 0,
        ceil: 100,
        step: 10,
        showTicks: true,
        stepsArray: [
          { value: 1, legend: "-1000" },
          { value: 2 },
          { value: 3, legend: "-500" },
          { value: 4 },
          { value: 5, legend: "0" },
          { value: 6 },
          { value: 7, legend: "500" },
          { value: 8 },
          { value: 9, legend: "1000" }
        ]
      };
      value4 = -500;
      highValue4 = 500;
      options4 = {
        floor: 0,
        ceil: 50,
        step: 10,
        showTicks: true,
        stepsArray: [
          { value: 1, legend: "-1000" },
          { value: 2 },
          { value: 3, legend: "-500" },
          { value: 4 },
          { value: 5, legend: "0" },
          { value: 6 },
          { value: 7, legend: "500" },
          { value: 8 },
          { value: 9, legend: "1000" }
        ]
      };
      value5 = 10;
      highValue5 = 90;
      options5 = {
        floor: 0,
        ceil: 100,
        step: 10,
        showTicks: true
      };
      value6 = 0;
      highValue6 = 500;
      options6 = {
        floor: 0,
        ceil: 50,
        step: 10,
        showTicks: true,
        stepsArray: [
          { value: 1, legend: "Jan" },
          { value: 2 },
          { value: 3, legend: "Feb" },
          { value: 4 },
          { value: 5, legend: "Mar" },
          { value: 6 },
          { value: 7, legend: "Apr" },
          { value: 8 },
          { value: 9, legend: "May" },
          { value: 10 },
          { value: 11, legend: "Jun" },
          { value: 12 },
          { value: 13, legend: "July" },
          { value: 14 },
          { value: 15, legend: "Aug" },
          { value: 16 },
          { value: 17, legend: "Sep" },
          { value: 18 },
          { value: 19, legend: "Oct" },
          { value: 20 },
          { value: 21, legend: "Nov" },
          { value: 22 },
          { value: 23, legend: "Dec" }
        ]
      };
      formatLabel(value) {
        if (value >= 1e3) {
          return Math.round(value / 1e3) + "k";
        }
        return `${value}`;
      }
      formatLabel1(value) {
        switch (value) {
          case 1:
            return "Jan";
          case 2:
            return "Feb";
          case 3:
            return "Mar";
          case 4:
            return "Apr";
          case 5:
            return "May";
          case 6:
            return "Jun";
          case 7:
            return "Jly";
          case 8:
            return "Aug";
          case 9:
            return "Sep";
          case 10:
            return "Oct";
          case 11:
            return "Nov";
          case 12:
            return "Dec";
        }
        return `${value}`;
      }
    };
    RangesliderComponent = __decorate([
      Component({
        selector: "app-rangeslider",
        template: rangeslider_component_default,
        imports: [CommonModule, MatSliderModule],
        styles: [rangeslider_component_default2]
      })
    ], RangesliderComponent);
  }
});

// src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.spec.ts
var require_rangeslider_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/rangeslider/rangeslider.component.spec.ts"(exports) {
    init_testing();
    init_rangeslider_component3();
    describe("RangesliderComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [RangesliderComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(RangesliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_rangeslider_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-rangeslider-rangeslider.component.spec.js.map
