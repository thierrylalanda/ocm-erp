import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-Z3POZ3YG.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/charts/apexcharts/apexcharts.component.ts
var _c0 = ["chart"];
var ApexchartsComponent = class _ApexchartsComponent {
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
  static \u0275fac = function ApexchartsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApexchartsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApexchartsComponent, selectors: [["app-apexcharts"]], viewQuery: function ApexchartsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 79, vars: 54, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "chart"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "legend", "fill"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis"], [3, "series", "chart", "yaxis", "xaxis", "labels", "stroke", "title", "dataLabels", "fill", "tooltip"], [3, "series", "chart", "labels", "responsive"], [1, "col-md-6", "d-flex"], [3, "series", "chart", "plotOptions", "labels"]], template: function ApexchartsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Apex Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Apex Chart");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Apex Simple");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
      \u0275\u0275element(22, "apx-chart", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 9)(24, "div", 10)(25, "div", 11)(26, "h5", 12);
      \u0275\u0275text(27, "Area Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 13)(29, "div", 14);
      \u0275\u0275element(30, "apx-chart", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 9)(32, "div", 10)(33, "div", 11)(34, "h5", 12);
      \u0275\u0275text(35, "Column Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 13)(37, "div", 14);
      \u0275\u0275element(38, "apx-chart", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 9)(40, "div", 10)(41, "div", 11)(42, "h5", 12);
      \u0275\u0275text(43, "Column Stacked Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 13)(45, "div", 14);
      \u0275\u0275element(46, "apx-chart", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 9)(48, "div", 10)(49, "div", 11)(50, "h5", 12);
      \u0275\u0275text(51, "Bar Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 13)(53, "div", 14);
      \u0275\u0275element(54, "apx-chart", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 9)(56, "div", 10)(57, "div", 11)(58, "h5", 12);
      \u0275\u0275text(59, "Mixed Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 13)(61, "div", 14);
      \u0275\u0275element(62, "apx-chart", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 9)(64, "div", 10)(65, "div", 11)(66, "h5", 12);
      \u0275\u0275text(67, "Donut Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 13)(69, "div", 14);
      \u0275\u0275element(70, "apx-chart", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 22)(72, "div", 10)(73, "div", 11)(74, "h5", 12);
      \u0275\u0275text(75, "Radial Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 13)(77, "div", 14);
      \u0275\u0275element(78, "apx-chart", 23);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("series", ctx.chartOptionsOne.series)("chart", ctx.chartOptionsOne.chart)("xaxis", ctx.chartOptionsOne.xaxis)("dataLabels", ctx.chartOptionsOne.dataLabels)("grid", ctx.chartOptionsOne.grid)("stroke", ctx.chartOptionsOne.stroke)("title", ctx.chartOptionsOne.title);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.chartOptionsTwo.series)("chart", ctx.chartOptionsTwo.chart)("xaxis", ctx.chartOptionsTwo.xaxis)("stroke", ctx.chartOptionsTwo.stroke)("tooltip", ctx.chartOptionsTwo.tooltip)("dataLabels", ctx.chartOptionsTwo.dataLabels);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.chartOptionsThree.series)("chart", ctx.chartOptionsThree.chart)("dataLabels", ctx.chartOptionsThree.dataLabels)("plotOptions", ctx.chartOptionsThree.plotOptions)("yaxis", ctx.chartOptionsThree.yaxis)("legend", ctx.chartOptionsThree.legend)("fill", ctx.chartOptionsThree.fill)("stroke", ctx.chartOptionsThree.stroke)("tooltip", ctx.chartOptionsThree.tooltip)("xaxis", ctx.chartOptionsThree.xaxis);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.chartOptionsFour.series)("chart", ctx.chartOptionsFour.chart)("dataLabels", ctx.chartOptionsFour.dataLabels)("plotOptions", ctx.chartOptionsFour.plotOptions)("responsive", ctx.chartOptionsFour.responsive)("xaxis", ctx.chartOptionsFour.xaxis)("legend", ctx.chartOptionsFour.legend)("fill", ctx.chartOptionsFour.fill);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.chartOptionsFive.series)("chart", ctx.chartOptionsFive.chart)("dataLabels", ctx.chartOptionsFive.dataLabels)("plotOptions", ctx.chartOptionsFive.plotOptions)("xaxis", ctx.chartOptionsFive.xaxis);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.chartOptionsSix.series)("chart", ctx.chartOptionsSix.chart)("yaxis", ctx.chartOptionsSix.yaxis)("xaxis", ctx.chartOptionsSix.xaxis)("labels", ctx.chartOptionsSix.labels)("stroke", ctx.chartOptionsSix.stroke)("title", ctx.chartOptionsSix.title)("dataLabels", ctx.chartOptionsSix.dataLabels)("fill", ctx.chartOptionsSix.fill)("tooltip", ctx.chartOptionsSix.tooltip);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.chartOptionsSeven.series)("chart", ctx.chartOptionsSeven.chart)("labels", ctx.chartOptionsSeven.labels)("responsive", ctx.chartOptionsSeven.responsive);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.chartOptionsEight.series)("chart", ctx.chartOptionsEight.chart)("plotOptions", ctx.chartOptionsEight.plotOptions)("labels", ctx.chartOptionsEight.labels);
    }
  }, dependencies: [CommonModule, NgApexchartsModule, ChartComponent], styles: ["\n\n/*# sourceMappingURL=apexcharts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApexchartsComponent, [{
    type: Component,
    args: [{ selector: "app-apexcharts", imports: [CommonModule, NgApexchartsModule], template: ' <!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n <div class="flex-grow-1">\n     <h4 class="fs-18 fw-semibold mb-0">Apex Chart</h4>\n </div>\n <div class="text-end">\n     <ol class="breadcrumb m-0 py-0">\n         <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n         <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n         <li class="breadcrumb-item active">Apex Chart</li>\n     </ol>\n </div>\n</div>\n<!-- End Page Header -->\n\n<div class="row">\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Apex Simple</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsOne.series"\n            [chart]="chartOptionsOne.chart"\n            [xaxis]="chartOptionsOne.xaxis"\n            [dataLabels]="chartOptionsOne.dataLabels"\n            [grid]="chartOptionsOne.grid"\n            [stroke]="chartOptionsOne.stroke"\n            [title]="chartOptionsOne.title"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Area Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsTwo.series"\n            [chart]="chartOptionsTwo.chart"\n            [xaxis]="chartOptionsTwo.xaxis"\n            [stroke]="chartOptionsTwo.stroke"\n            [tooltip]="chartOptionsTwo.tooltip"\n            [dataLabels]="chartOptionsTwo.dataLabels"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Column Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsThree.series"\n            [chart]="chartOptionsThree.chart"\n            [dataLabels]="chartOptionsThree.dataLabels"\n            [plotOptions]="chartOptionsThree.plotOptions"\n            [yaxis]="chartOptionsThree.yaxis"\n            [legend]="chartOptionsThree.legend"\n            [fill]="chartOptionsThree.fill"\n            [stroke]="chartOptionsThree.stroke"\n            [tooltip]="chartOptionsThree.tooltip"\n            [xaxis]="chartOptionsThree.xaxis"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Column Stacked Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsFour.series"\n            [chart]="chartOptionsFour.chart"\n            [dataLabels]="chartOptionsFour.dataLabels"\n            [plotOptions]="chartOptionsFour.plotOptions"\n            [responsive]="chartOptionsFour.responsive"\n            [xaxis]="chartOptionsFour.xaxis"\n            [legend]="chartOptionsFour.legend"\n            [fill]="chartOptionsFour.fill"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Bar Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsFive.series"\n            [chart]="chartOptionsFive.chart"\n            [dataLabels]="chartOptionsFive.dataLabels"\n            [plotOptions]="chartOptionsFive.plotOptions"\n            [xaxis]="chartOptionsFive.xaxis"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Mixed Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsSix.series"\n            [chart]="chartOptionsSix.chart"\n            [yaxis]="chartOptionsSix.yaxis"\n            [xaxis]="chartOptionsSix.xaxis"\n            [labels]="chartOptionsSix.labels"\n            [stroke]="chartOptionsSix.stroke"\n            [title]="chartOptionsSix.title"\n            [dataLabels]="chartOptionsSix.dataLabels"\n            [fill]="chartOptionsSix.fill"\n            [tooltip]="chartOptionsSix.tooltip"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Donut Chart</h5>\n      </div>\n      <div class="card-body">\n        <div  class="chart">\n          <apx-chart\n            [series]="chartOptionsSeven.series"\n            [chart]="chartOptionsSeven.chart"\n            [labels]="chartOptionsSeven.labels"\n            [responsive]="chartOptionsSeven.responsive"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n\n  <!-- Chart -->\n  <div class="col-md-6 d-flex">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Radial Chart</h5>\n      </div>\n      <div class="card-body">\n        <div class="chart">\n          <apx-chart\n            [series]="chartOptionsEight.series"\n            [chart]="chartOptionsEight.chart"\n            [plotOptions]="chartOptionsEight.plotOptions"\n            [labels]="chartOptionsEight.labels"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Chart -->\n</div>\n', styles: ["/* src/app/features/ui-interface/charts/apexcharts/apexcharts.component.scss */\n/*# sourceMappingURL=apexcharts.component.css.map */\n"] }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApexchartsComponent, { className: "ApexchartsComponent", filePath: "src/app/features/ui-interface/charts/apexcharts/apexcharts.component.ts", lineNumber: 46 });
})();
export {
  ApexchartsComponent
};
//# sourceMappingURL=chunk-PB73CFAT.js.map
