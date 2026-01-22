import {
  Chart,
  registerables
} from "./chunk-CRH4G5U2.js";
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
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/charts/prime-ng/prime-ng.component.ts
Chart.register(...registerables);
var PrimeNgComponent = class _PrimeNgComponent {
  ngOnInit() {
    this.RenderChart();
    this.transchart();
    this.gradchart();
    this.horizonchart();
    this.stackchart();
    this.doughcharts();
    this.verstack();
    this.piecharts();
    this.areacharts();
  }
  RenderChart() {
    new Chart("pieschart", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales",
          data: [19, 3, 7, 5, 2, 3],
          backgroundColor: [
            " #0dcaf0"
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  transchart() {
    new Chart("piechart", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales",
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#6610f2"
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  gradchart() {
    new Chart("piecharts", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales",
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#44c4fa"
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  horizonchart() {
    new Chart("horcharts", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales",
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#664dc9",
            "#44c4fa",
            "#38cb89",
            "#3e80eb",
            "#ffab00",
            "#ef4b4b"
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: "y"
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
      }
    });
  }
  stackchart() {
    new Chart("stackcharts", {
      type: "bar",
      data: {
        labels: [
          "2022-05-10",
          "2022-05-11",
          "2022-05-12",
          "2022-05-13",
          "2022-05-14",
          "2022-05-15",
          "2022-05-16",
          "2022-05-17"
        ],
        datasets: [
          {
            label: "Sales",
            data: [
              "467",
              "576",
              "572",
              "79",
              "92",
              "574",
              "573",
              "576"
            ],
            backgroundColor: "#664dc9"
          },
          {
            label: "Profit",
            data: [
              "542",
              "542",
              "536",
              "327",
              "17",
              "0.00",
              "538",
              "541"
            ],
            backgroundColor: "#3e80eb"
          }
        ]
      },
      options: {
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 2
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right"
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart"
          }
        }
      }
    });
  }
  verstack() {
    new Chart("verstackcharts", {
      type: "bar",
      //this denotes tha type of chart
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Sales",
            data: [
              "467",
              "576",
              "572",
              "79",
              "92",
              "574",
              "573",
              "576"
            ],
            backgroundColor: "#664dc9"
          },
          {
            label: "Profit",
            data: [
              "542",
              "542",
              "536",
              "327",
              "17",
              "0.00",
              "538",
              "541"
            ],
            backgroundColor: "#3e80eb"
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  doughcharts() {
    new Chart("doughcharts", {
      type: "doughnut",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#664dc9",
            "#44c4fa",
            "#38cb89",
            "#3e80eb",
            "#ffab00",
            "#ef4b4b"
          ],
          borderWidth: 1
        }]
      }
    });
  }
  piecharts() {
    new Chart("peichrt", {
      type: "pie",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#664dc9",
            "#44c4fa",
            "#38cb89",
            "#3e80eb",
            "#ffab00",
            "#ef4b4b"
          ],
          borderWidth: 1
        }]
      }
    });
  }
  areacharts() {
    new Chart("MyChart", {
      type: "line",
      //this denotes tha type of chart
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Sales",
            data: [
              "467",
              "576",
              "572",
              "79",
              "92",
              "574",
              "573",
              "576"
            ],
            backgroundColor: "blue"
          },
          {
            label: "Profit",
            data: [
              "542",
              "542",
              "536",
              "327",
              "17",
              "0.00",
              "538",
              "541"
            ],
            backgroundColor: "limegreen"
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  static \u0275fac = function PrimeNgComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeNgComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrimeNgComponent, selectors: [["app-prime-ng"]], decls: 102, vars: 0, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "chart-container"], ["id", "piechart", 1, "h-300"], ["id", "pieschart", 1, "h-300"], ["id", "piecharts", 1, "h-300"], [1, "chartjs-wrapper-demo"], ["id", "horcharts", 1, "h-300"], ["id", "stackcharts", 1, "h-300"], ["id", "verstackcharts", 1, "h-300"], ["id", "doughcharts", 1, "h-300"], ["id", "peichrt", 1, "h-300"], ["id", "MyChart", 1, "h-300"]], template: function PrimeNgComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Prime NG Chart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "li", 7);
      \u0275\u0275text(13, "Prime NG Chart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h3", 12);
      \u0275\u0275text(19, "Charts");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(20, "div", 10)(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16);
      \u0275\u0275text(25, "Bar Chart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 17)(27, "div")(28, "div", 18);
      \u0275\u0275domElement(29, "canvas", 19);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(30, "div", 13)(31, "div", 14)(32, "div", 15)(33, "div", 16);
      \u0275\u0275text(34, "Transparency ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(35, "div", 17)(36, "div")(37, "div", 18);
      \u0275\u0275domElement(38, "canvas", 20);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(39, "div", 13)(40, "div", 14)(41, "div", 15)(42, "div", 16);
      \u0275\u0275text(43, "Gradient Bar Chart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(44, "div", 17)(45, "div")(46, "div", 18);
      \u0275\u0275domElement(47, "canvas", 21);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(48, "div", 13)(49, "div", 14)(50, "div", 15)(51, "div", 16);
      \u0275\u0275text(52, "Horizontal Bar Chart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(53, "div", 17)(54, "div", 22)(55, "div", 18);
      \u0275\u0275domElement(56, "canvas", 23);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(57, "div", 13)(58, "div", 14)(59, "div", 15)(60, "div", 16);
      \u0275\u0275text(61, "Horizontal Bar Chart Style2");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(62, "div", 17)(63, "div", 22)(64, "div", 18);
      \u0275\u0275domElement(65, "canvas", 24);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(66, "div", 13)(67, "div", 14)(68, "div", 15)(69, "div", 16);
      \u0275\u0275text(70, "Vertical Stacked Bar Chart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(71, "div", 17)(72, "div", 22)(73, "div", 18);
      \u0275\u0275domElement(74, "canvas", 25);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(75, "div", 13)(76, "div", 14)(77, "div", 15)(78, "div", 16);
      \u0275\u0275text(79, "Donut Chart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(80, "div", 17)(81, "div", 22)(82, "div", 18);
      \u0275\u0275domElement(83, "canvas", 26);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(84, "div", 13)(85, "div", 14)(86, "div", 15)(87, "div", 16);
      \u0275\u0275text(88, "Pie Chart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(89, "div", 17)(90, "div", 22)(91, "div", 18);
      \u0275\u0275domElement(92, "canvas", 27);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(93, "div", 13)(94, "div", 14)(95, "div", 15)(96, "div", 16);
      \u0275\u0275text(97, "Area Chart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(98, "div", 17)(99, "div", 22)(100, "div", 18);
      \u0275\u0275domElement(101, "canvas", 28);
      \u0275\u0275domElementEnd()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNgComponent, [{
    type: Component,
    args: [{ selector: "app-prime-ng", imports: [CommonModule], template: ' <!-- Page Header -->\n <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Prime NG Chart</h4>\n  </div>\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n          <li class="breadcrumb-item active">Prime NG Chart</li>\n      </ol>\n  </div>\n </div>\n <!-- End Page Header -->\n<div class="cardhead">\n\n  <!-- Page Header -->\n  <div class="page-header">\n      <div class="row">\n          <div class="col-sm-12">\n              <h3 class="page-title">Charts</h3>\n          </div>\n      </div>\n  </div>\n  <!-- /Page Header -->\n  <div class="row">\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Bar Chart</div>\n              </div>\n              <div class="card-body">\n                  <div>\n                      <div class="chart-container">\n                          <canvas id="piechart" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Transparency </div>\n              </div>\n              <div class="card-body">\n                  <div>\n                      <div class="chart-container">\n                          <canvas id="pieschart" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Gradient Bar Chart</div>\n              </div>\n              <div class="card-body">\n                  <div>\n                      <div class="chart-container">\n                          <canvas id="piecharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Horizontal Bar Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="horcharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Horizontal Bar Chart Style2</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="stackcharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Vertical Stacked Bar Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="verstackcharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Donut Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="doughcharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Pie Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="peichrt" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Area Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="MyChart" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n  </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrimeNgComponent, { className: "PrimeNgComponent", filePath: "src/app/features/ui-interface/charts/prime-ng/prime-ng.component.ts", lineNumber: 13 });
})();
export {
  PrimeNgComponent
};
//# sourceMappingURL=chunk-KK52HTPB.js.map
