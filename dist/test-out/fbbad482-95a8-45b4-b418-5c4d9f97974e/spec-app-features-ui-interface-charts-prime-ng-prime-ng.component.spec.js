import {
  Chart,
  init_chart,
  registerables
} from "./chunk-G2YEAOLU.js";
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

// angular:jit:template:src/app/features/ui-interface/charts/prime-ng/prime-ng.component.html
var prime_ng_component_default;
var init_prime_ng_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/charts/prime-ng/prime-ng.component.html"() {
    prime_ng_component_default = ' <!-- Page Header -->\n <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Prime NG Chart</h4>\n  </div>\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n          <li class="breadcrumb-item active">Prime NG Chart</li>\n      </ol>\n  </div>\n </div>\n <!-- End Page Header -->\n<div class="cardhead">\n\n  <!-- Page Header -->\n  <div class="page-header">\n      <div class="row">\n          <div class="col-sm-12">\n              <h3 class="page-title">Charts</h3>\n          </div>\n      </div>\n  </div>\n  <!-- /Page Header -->\n  <div class="row">\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Bar Chart</div>\n              </div>\n              <div class="card-body">\n                  <div>\n                      <div class="chart-container">\n                          <canvas id="piechart" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Transparency </div>\n              </div>\n              <div class="card-body">\n                  <div>\n                      <div class="chart-container">\n                          <canvas id="pieschart" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Gradient Bar Chart</div>\n              </div>\n              <div class="card-body">\n                  <div>\n                      <div class="chart-container">\n                          <canvas id="piecharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Horizontal Bar Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="horcharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Horizontal Bar Chart Style2</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="stackcharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Vertical Stacked Bar Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="verstackcharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Donut Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="doughcharts" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Pie Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="peichrt" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n      <!-- Chart -->\n      <div class="col-md-6">\n          <div class="card">\n              <div class="card-header">\n                  <div class="card-title">Area Chart</div>\n              </div>\n              <div class="card-body">\n                  <div class="chartjs-wrapper-demo">\n                      <div class="chart-container">\n                          <canvas id="MyChart" class="h-300"></canvas>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- /Chart -->\n\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/ui-interface/charts/prime-ng/prime-ng.component.scss
var prime_ng_component_default2;
var init_prime_ng_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/charts/prime-ng/prime-ng.component.scss"() {
    prime_ng_component_default2 = "/* src/app/features/ui-interface/charts/prime-ng/prime-ng.component.scss */\n/*# sourceMappingURL=prime-ng.component.css.map */\n";
  }
});

// src/app/features/ui-interface/charts/prime-ng/prime-ng.component.ts
var PrimeNgComponent;
var init_prime_ng_component3 = __esm({
  "src/app/features/ui-interface/charts/prime-ng/prime-ng.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_prime_ng_component();
    init_prime_ng_component2();
    init_core();
    init_common();
    init_chart();
    Chart.register(...registerables);
    PrimeNgComponent = class PrimeNgComponent2 {
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
    };
    PrimeNgComponent = __decorate([
      Component({
        selector: "app-prime-ng",
        template: prime_ng_component_default,
        imports: [CommonModule],
        styles: [prime_ng_component_default2]
      })
    ], PrimeNgComponent);
  }
});

// src/app/features/ui-interface/charts/prime-ng/prime-ng.component.spec.ts
var require_prime_ng_component_spec = __commonJS({
  "src/app/features/ui-interface/charts/prime-ng/prime-ng.component.spec.ts"(exports) {
    init_testing();
    init_prime_ng_component3();
    describe("PrimeNgComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PrimeNgComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PrimeNgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_prime_ng_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-charts-prime-ng-prime-ng.component.spec.js.map
