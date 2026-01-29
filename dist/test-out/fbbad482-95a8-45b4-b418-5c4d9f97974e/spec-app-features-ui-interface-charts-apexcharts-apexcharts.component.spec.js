import {
  NgApexchartsModule,
  init_ng_apexcharts
} from "./chunk-PWEWZXBA.js";
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
  ViewChild,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/charts/apexcharts/apexcharts.component.html
var apexcharts_component_default;
var init_apexcharts_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/charts/apexcharts/apexcharts.component.html"() {
    apexcharts_component_default = ' <!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n <div class="flex-grow-1">\n     <h4 class="fs-18 fw-semibold mb-0">Apex Chart</h4>\n </div>\n <div class="text-end">\n     <ol class="breadcrumb m-0 py-0">\n         <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n         <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n         <li class="breadcrumb-item active">Apex Chart</li>\n     </ol>\n </div>\n</div>\n<!-- End Page Header -->\n\n<div class="row">\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Apex Simple</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsOne.series"\n            [chart]="chartOptionsOne.chart"\n            [xaxis]="chartOptionsOne.xaxis"\n            [dataLabels]="chartOptionsOne.dataLabels"\n            [grid]="chartOptionsOne.grid"\n            [stroke]="chartOptionsOne.stroke"\n            [title]="chartOptionsOne.title"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Area Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsTwo.series"\n            [chart]="chartOptionsTwo.chart"\n            [xaxis]="chartOptionsTwo.xaxis"\n            [stroke]="chartOptionsTwo.stroke"\n            [tooltip]="chartOptionsTwo.tooltip"\n            [dataLabels]="chartOptionsTwo.dataLabels"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Column Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsThree.series"\n            [chart]="chartOptionsThree.chart"\n            [dataLabels]="chartOptionsThree.dataLabels"\n            [plotOptions]="chartOptionsThree.plotOptions"\n            [yaxis]="chartOptionsThree.yaxis"\n            [legend]="chartOptionsThree.legend"\n            [fill]="chartOptionsThree.fill"\n            [stroke]="chartOptionsThree.stroke"\n            [tooltip]="chartOptionsThree.tooltip"\n            [xaxis]="chartOptionsThree.xaxis"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Column Stacked Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsFour.series"\n            [chart]="chartOptionsFour.chart"\n            [dataLabels]="chartOptionsFour.dataLabels"\n            [plotOptions]="chartOptionsFour.plotOptions"\n            [responsive]="chartOptionsFour.responsive"\n            [xaxis]="chartOptionsFour.xaxis"\n            [legend]="chartOptionsFour.legend"\n            [fill]="chartOptionsFour.fill"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Bar Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsFive.series"\n            [chart]="chartOptionsFive.chart"\n            [dataLabels]="chartOptionsFive.dataLabels"\n            [plotOptions]="chartOptionsFive.plotOptions"\n            [xaxis]="chartOptionsFive.xaxis"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Mixed Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsSix.series"\n            [chart]="chartOptionsSix.chart"\n            [yaxis]="chartOptionsSix.yaxis"\n            [xaxis]="chartOptionsSix.xaxis"\n            [labels]="chartOptionsSix.labels"\n            [stroke]="chartOptionsSix.stroke"\n            [title]="chartOptionsSix.title"\n            [dataLabels]="chartOptionsSix.dataLabels"\n            [fill]="chartOptionsSix.fill"\n            [tooltip]="chartOptionsSix.tooltip"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Donut Chart</h5>\n      </div>\n      <div class="card-body">\n        <div  class="chart">\n          <apx-chart\n            [series]="chartOptionsSeven.series"\n            [chart]="chartOptionsSeven.chart"\n            [labels]="chartOptionsSeven.labels"\n            [responsive]="chartOptionsSeven.responsive"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6 d-flex">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Radial Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsEight.series"\n            [chart]="chartOptionsEight.chart"\n            [plotOptions]="chartOptionsEight.plotOptions"\n            [labels]="chartOptionsEight.labels"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n</div>\n';
  }
});

// angular:jit:style:src/app/features/ui-interface/charts/apexcharts/apexcharts.component.scss
var apexcharts_component_default2;
var init_apexcharts_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/charts/apexcharts/apexcharts.component.scss"() {
    apexcharts_component_default2 = "/* src/app/features/ui-interface/charts/apexcharts/apexcharts.component.scss */\n/*# sourceMappingURL=apexcharts.component.css.map */\n";
  }
});

// src/app/features/ui-interface/charts/apexcharts/apexcharts.component.ts
var ApexchartsComponent;
var init_apexcharts_component3 = __esm({
  "src/app/features/ui-interface/charts/apexcharts/apexcharts.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_apexcharts_component();
    init_apexcharts_component2();
    init_core();
    init_common();
    init_ng_apexcharts();
    ApexchartsComponent = class ApexchartsComponent2 {
      chart;
      chartOptionsOne;
      chartOptionsTwo;
      chartOptionsThree;
      chartOptionsFour;
      chartOptionsFive;
      chartOptionsSix;
      chartOptionsSeven;
      chartOptionsEight;
      constructor() {
        this.chartOptionsOne = {
          series: [
            {
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }
          ],
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "straight"
          },
          title: {
            text: "Product Trends by Month",
            align: "left"
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.5
            }
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep"
            ]
          }
        };
        this.chartOptionsTwo = {
          series: [
            {
              name: "series1",
              data: [31, 40, 28, 51, 42, 109, 100]
            },
            {
              name: "series2",
              data: [11, 32, 45, 32, 34, 52, 41]
            }
          ],
          chart: {
            height: 350,
            type: "area"
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z"
            ]
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm"
            }
          }
        };
        this.chartOptionsThree = {
          series: [
            {
              name: "Net Profit",
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            },
            {
              name: "Revenue",
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }
          ],
          chart: {
            type: "bar",
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%"
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },
          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct"
            ]
          },
          yaxis: {
            title: {
              text: "$ (thousands)"
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return "$ " + val + " thousands";
              }
            }
          }
        };
        this.chartOptionsFour = {
          series: [
            {
              name: "PRODUCT A",
              data: [44, 55, 41, 67, 22, 43]
            },
            {
              name: "PRODUCT B",
              data: [13, 23, 20, 8, 13, 27]
            },
            {
              name: "PRODUCT C",
              data: [11, 17, 15, 15, 21, 14]
            },
            {
              name: "PRODUCT D",
              data: [21, 7, 25, 13, 22, 8]
            }
          ],
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }
          ],
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          xaxis: {
            type: "category",
            categories: [
              "01/2011",
              "02/2011",
              "03/2011",
              "04/2011",
              "05/2011",
              "06/2011"
            ]
          },
          legend: {
            position: "right",
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        };
        this.chartOptionsFive = {
          series: [
            {
              name: "basic",
              data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }
          ],
          chart: {
            type: "bar",
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [
              "South Korea",
              "Canada",
              "United Kingdom",
              "Netherlands",
              "Italy",
              "France",
              "Japan",
              "United States",
              "China",
              "Germany"
            ]
          }
        };
        this.chartOptionsSix = {
          series: [
            {
              name: "Website Blog",
              type: "column",
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            },
            {
              name: "Social Media",
              type: "line",
              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }
          ],
          chart: {
            height: 350,
            type: "line"
          },
          stroke: {
            width: [0, 4]
          },
          title: {
            text: "Traffic Sources"
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels: [
            "01 Jan 2001",
            "02 Jan 2001",
            "03 Jan 2001",
            "04 Jan 2001",
            "05 Jan 2001",
            "06 Jan 2001",
            "07 Jan 2001",
            "08 Jan 2001",
            "09 Jan 2001",
            "10 Jan 2001",
            "11 Jan 2001",
            "12 Jan 2001"
          ],
          xaxis: {
            type: "datetime"
          },
          yaxis: [
            {
              title: {
                text: "Website Blog"
              }
            },
            {
              opposite: true,
              title: {
                text: "Social Media"
              }
            }
          ]
        };
        this.chartOptionsSeven = {
          series: [44, 55, 13, 43, 22],
          chart: {
            type: "donut"
          },
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                  height: 350
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        };
        this.chartOptionsEight = {
          series: [44, 55, 67, 83],
          chart: {
            height: 350,
            type: "radialBar"
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: "22px"
                },
                value: {
                  fontSize: "16px"
                },
                total: {
                  show: true,
                  label: "Total",
                  formatter: function() {
                    return "249";
                  }
                }
              }
            }
          },
          labels: ["Apples", "Oranges", "Bananas", "Berries"]
        };
      }
      static ctorParameters = () => [];
      static propDecorators = {
        chart: [{ type: ViewChild, args: ["chart"] }]
      };
    };
    ApexchartsComponent = __decorate([
      Component({
        selector: "app-apexcharts",
        template: apexcharts_component_default,
        imports: [CommonModule, NgApexchartsModule],
        styles: [apexcharts_component_default2]
      })
    ], ApexchartsComponent);
  }
});

// src/app/features/ui-interface/charts/apexcharts/apexcharts.component.spec.ts
var require_apexcharts_component_spec = __commonJS({
  "src/app/features/ui-interface/charts/apexcharts/apexcharts.component.spec.ts"(exports) {
    init_testing();
    init_apexcharts_component3();
    describe("ApexchartsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ApexchartsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ApexchartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_apexcharts_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-charts-apexcharts-apexcharts.component.spec.js.map
