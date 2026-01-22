import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BZYHLAL5.js";
import {
  DateRangePickerComponent
} from "./chunk-2I7DAYVQ.js";
import {
  BsDatepickerModule
} from "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import "./chunk-NAWYXTZ5.js";
import {
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/super-admin/dashboard/dashboard.component.ts
var _c0 = ["chart"];
var DashboardComponent = class _DashboardComponent {
  routes = routes;
  chart;
  chartOptions;
  constructor() {
    this.chartOptions = {
      chart: {
        height: 390,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadius: 10,
          borderRadiusApplication: "end",
          // this makes only the top of vertical bars rounded
          endingShape: "rounded"
        }
      },
      colors: ["#7539FF"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      series: [{
        name: "Income",
        data: [28, 28, 43, 75, 45, 38, 47, 28, 33, 23, 58, 40]
      }],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
          style: {
            colors: "#051321",
            fontSize: "14px"
          }
        }
      },
      yaxis: {
        max: 100,
        labels: {
          offsetX: -15,
          style: {
            colors: "#051321",
            fontSize: "14px"
          }
        }
      },
      grid: {
        borderColor: "#CED2D4",
        strokeDashArray: 5,
        padding: {
          left: -8,
          right: -15
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "" + val + "%";
          }
        }
      }
    };
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 997, vars: 26, consts: [[1, ""], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "row"], [1, "col-xl-4"], [1, "card", "bg-primary", "rounded-3", "px-3", "position-relative", "z-0"], ["src", "assets/img/icons/dashboard-icon-02.svg", "alt", "img", 1, "dashboard-bg-2", "d-lg-flex", "d-none"], [1, "col-lg-12", "py-3"], [1, "text-white", "d-inline-flex", "align-items-center", "mb-2", "text-truncate", "line-clamb-1"], [1, "isax", "isax-sun-1", "fs-20", "me-1"], [1, "fs-16", "text-white", "mb-lg-5", "mb-3", "text-truncate"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-sm", "btn-blue", "fw-medium", "me-2", "px-xl-2", "px-lg-3", 3, "routerLink"], [1, "btn", "btn-sm", "btn-outline-blue", "fw-medium", "px-xl-2", "px-lg-3", 3, "routerLink"], [1, "col-xl-8"], [1, "col-md-3", "d-flex"], [1, "card", "bg-light", "shadow-none", "flex-fill", "w-100", "rounded-3"], [1, "card-body", "p-3"], [1, "avatar", "avatar-xl", "bg-white", "rounded-3", "mb-3"], ["src", "assets/img/icons/info-icon-01.svg", "alt", "img", 1, "rounded-3", "img-fluid", "w-auto", "h-auto"], [1, "mb-1", "text-gray-9", "text-truncate"], [1, "mb-1", "fs-16", "fw-semibold"], [1, "fs-13", "mb-0", "text-truncate"], [1, "text-success", "fs-14"], [1, "isax", "isax-send", "text-success", "me-1"], ["src", "assets/img/icons/info-icon-02.svg", "alt", "img", 1, "rounded-3", "img-fluid", "w-auto", "h-auto"], ["src", "assets/img/icons/info-icon-03.svg", "alt", "img", 1, "rounded-3", "img-fluid", "w-auto", "h-auto"], ["src", "assets/img/icons/info-icon-04.svg", "alt", "img", 1, "rounded-3", "img-fluid", "w-auto", "h-auto"], [1, "col-xl-4", "d-flex"], [1, "card", "rounded-3", "shadow-none", "flex-fill", "w-100"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "pb-3", "border-bottom", "mb-3"], [1, "fs-16", "fw-semibold", "text-truncate"], [1, "dropdown", "flex-shrink-0"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "fw-normal", "d-inline-flex", "align-items-center", "border"], [1, "isax", "isax-calendar-2", "ms-2", "text-gray-9"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "bg-light", "rounded-3", "p-3"], [1, "d-flex", "align-items-center", "mb-2", "justify-content-between", "gap-2", "flex-wrap", "flex-md-nowrap"], [1, "avatar", "avatar-lg", "bg-white", "rounded-3"], ["src", "assets/img/icons/company-logo-01.svg", "alt", "img", 1, "rounded-3", "img-fluid", "w-auto", "h-auto"], [1, "ms-2"], [1, "mb-1"], [1, "text-gray-9", "fw-medium"], [1, "mb-0"], [1, "text-end"], [1, "text-gray-9"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "border", "fw-normal", "d-inline-flex", "align-items-center"], [1, "d-flex", "align-items-center", "mb-2", "justify-content-between", "gap-2", "flex-wrap", "flex-lg-nowrap"], ["src", "assets/img/icons/company-logo-02.svg", "alt", "img", 1, "rounded-3", "img-fluid", "w-auto", "h-auto"], [1, "mb-1", "fw-medium", "text-gray-9"], [1, "mb-0", "text-truncate"], [1, "text-gray-9", "flex-shrink-0"], [1, "d-flex", "align-items-center", "mb-2", "justify-content-between", "gap-2", "flex-wrap"], ["src", "assets/img/icons/company-logo-03.svg", "alt", "img", 1, "rounded-3", "img-fluid", "w-auto", "h-auto"], [1, "col-xl-6", "d-flex"], [1, "card", "shadow-none", "rounded-3", "flex-fill", "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "flex-wrap", "gap-2"], [1, "btn", "btn-sm", "btn-dark", 3, "routerLink"], [1, "table-responsive", "no-filter", "no-paginaion"], [1, "table", "table-nowrap", "datatable"], [1, "thead-light"], [1, "no-sort"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/icons/company-01.svg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "action-item"], ["href", "javascript:void(0);", 1, "rounded-2", "w-auto", "h-auto", "bg-light", "fs-14", "border-0", "p-1", "d-inline-flex", "align-items-center", "justify-content-around"], [1, "isax", "isax-eye", "d-inline-flex", "align-item-center", "justify-content-center"], ["src", "assets/img/icons/company-02.svg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/icons/company-03.svg", "alt", "img", 1, "rounded-0"], ["src", "assets/img/icons/company-04.svg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/icons/company-05.svg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/icons/company-06.svg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/icons/company-07.svg", "alt", "img", 1, "rounded-circle"], [1, "card-body", "pb-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fw-semibold", "fs-16"], [1, "d-inline-flex", "align-items-center", "me-4", "mb-0"], [1, "fa-solid", "fa-square", "text-primary", "fs-12", "me-1"], [1, "input-icon-end", "position-relative"], ["type", "text", "value", "2024", 1, "form-control", "form-control-sm", "yearpicker"], [1, "input-icon-addon", "text-dark"], [1, "isax", "isax-calendar-2"], ["id", "earnings-chart", 1, "chart-set"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "xaxis", "colors"], [1, "col-lg-7", "d-flex"], [1, "card", "shadow-none", "w-100", "rounded-3"], [1, "mb-3"], ["src", "assets/img/icons/company-08.svg", "alt", "img", 1, "rounded-circle"], [1, "isax", "isax-eye", "d-inline-flex"], ["src", "assets/img/icons/company-09.svg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/icons/company-10.svg", "alt", "img", 1, "rounded-0"], ["src", "assets/img/icons/company-11.svg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/icons/company-12.svg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/icons/company-13.svg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/icons/company-14.svg", "alt", "img", 1, "rounded-circle"], [1, "col-lg-5", "d-flex"], [1, "d-flex", "align-item-center"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-soft-danger", "d-inline-flex", "align-item-center", "justify-content-center", "p-1", "fs-14", "border-0", "me-2"], [1, "isax", "isax-close-circle"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-soft-success", "d-inline-flex", "align-item-center", "justify-content-center", "p-1", "fs-14", "border-0"], [1, "isax", "isax-tick-square"], ["href", "javascript:void(0);", 1, "btn", "p-1", "rounded-2", "bg-danger-subtle", "fs-14", "border-0", "me-1", "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", 1, "btn", "p-1", "rounded-2", "bg-success-subtle", "fs-14", "border-0", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-6", "d-flex"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "isax", "isax-calendar-2", "ms-2"], ["id", "register-chart", 1, "chart-set"], [1, "d-flex", "align-item-center", "justify-content-between", "mb-2"], [1, "btn", "btn-dark", "btn-sm", 3, "routerLink"], ["id", "plane-chart"], [1, "col-lg-12"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], ["href", "javascript:void(0);", 1, "link-default"], [1, "badge", "badge-sm", "badge-soft-success", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle", "ms-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], [1, "isax", "isax-edit", "me-2"], [1, "isax", "isax-trash", "me-2"], ["src", "assets/img/icons/company-03.svg", "alt", "img", 1, "rounded-circle"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "badge", "badge-sm", "badge-soft-danger", "d-inline-flex", "align-items-center"], [1, "isax", "isax-close-circle", "ms-1"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275element(6, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div", 5);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementStart(11, "div", 3)(12, "div", 7)(13, "h5", 8);
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275text(15, "Good Morning, John");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 10);
      \u0275\u0275text(17, "14 New Companies Subscribed Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "a", 12);
      \u0275\u0275text(20, "View Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 13);
      \u0275\u0275text(22, "All Packages");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(23, "div", 14)(24, "div", 3)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18);
      \u0275\u0275element(29, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 20);
      \u0275\u0275text(31, "Total Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h6", 21);
      \u0275\u0275text(33, "987");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 22)(35, "span", 23);
      \u0275\u0275element(36, "i", 24);
      \u0275\u0275text(37, "14%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 15)(40, "div", 16)(41, "div", 17)(42, "div", 18);
      \u0275\u0275element(43, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 20);
      \u0275\u0275text(45, "Active Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "h6", 21);
      \u0275\u0275text(47, "154");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 22)(49, "span", 23);
      \u0275\u0275element(50, "i", 24);
      \u0275\u0275text(51, "8.36%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 15)(54, "div", 16)(55, "div", 17)(56, "div", 18);
      \u0275\u0275element(57, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 20);
      \u0275\u0275text(59, "Inactive Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h6", 21);
      \u0275\u0275text(61, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p", 22)(63, "span", 23);
      \u0275\u0275element(64, "i", 24);
      \u0275\u0275text(65, "12.8%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 15)(68, "div", 16)(69, "div", 17)(70, "div", 18);
      \u0275\u0275element(71, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 20);
      \u0275\u0275text(73, "Total Active Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h6", 21);
      \u0275\u0275text(75, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 22)(77, "span", 23);
      \u0275\u0275element(78, "i", 24);
      \u0275\u0275text(79, "16%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " last month");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(81, "div", 3)(82, "div", 28)(83, "div", 29)(84, "div", 30)(85, "div", 31)(86, "h6", 32);
      \u0275\u0275text(87, "Most Ordered Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 33)(89, "a", 34);
      \u0275\u0275text(90, "This Month");
      \u0275\u0275element(91, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "ul", 36)(93, "li")(94, "a", 37);
      \u0275\u0275text(95, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "a", 37);
      \u0275\u0275text(98, "This Week");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li")(100, "a", 37);
      \u0275\u0275text(101, "This Year");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(102, "div", 38)(103, "div", 39)(104, "div", 11)(105, "span", 40);
      \u0275\u0275element(106, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 42)(108, "p", 43)(109, "span", 44);
      \u0275\u0275text(110, "Enterprise");
      \u0275\u0275elementEnd();
      \u0275\u0275text(111, " (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 45);
      \u0275\u0275text(113, "Total Order : 201");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(114, "div", 46)(115, "p", 47);
      \u0275\u0275text(116, "$549.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(117, "div", 28)(118, "div", 29)(119, "div", 30)(120, "div", 31)(121, "h6", 32);
      \u0275\u0275text(122, "Top Company with Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 33)(124, "a", 48);
      \u0275\u0275text(125, " Today");
      \u0275\u0275element(126, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "ul", 36)(128, "li")(129, "a", 37);
      \u0275\u0275text(130, "This Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "li")(132, "a", 37);
      \u0275\u0275text(133, "This Week");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "li")(135, "a", 37);
      \u0275\u0275text(136, "This Year");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(137, "div", 38)(138, "div", 49)(139, "div", 11)(140, "span", 40);
      \u0275\u0275element(141, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 42)(143, "p", 51);
      \u0275\u0275text(144, "Tech Bazaar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p", 52);
      \u0275\u0275text(146, "rebazaar@example.com");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 46)(148, "p", 53);
      \u0275\u0275text(149, "10 Plans");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(150, "div", 28)(151, "div", 29)(152, "div", 30)(153, "div", 31)(154, "h6", 32);
      \u0275\u0275text(155, "Most Domains");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 33)(157, "a", 48);
      \u0275\u0275text(158, "This Week");
      \u0275\u0275element(159, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "ul", 36)(161, "li")(162, "a", 37);
      \u0275\u0275text(163, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "li")(165, "a", 37);
      \u0275\u0275text(166, "This Week");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "li")(168, "a", 37);
      \u0275\u0275text(169, "This Year");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(170, "div", 38)(171, "div", 54)(172, "div", 11)(173, "span", 40);
      \u0275\u0275element(174, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 42)(176, "p", 51);
      \u0275\u0275text(177, "Quick Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "p", 45);
      \u0275\u0275text(179, "qc.example.com");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(180, "div", 46)(181, "p", 47);
      \u0275\u0275text(182, "150 Users");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(183, "div", 3)(184, "div", 56)(185, "div", 57)(186, "div", 30)(187, "div", 58)(188, "h6");
      \u0275\u0275text(189, "Latest Registered Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "a", 59);
      \u0275\u0275text(191, "View all");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "div", 60)(193, "table", 61)(194, "thead", 62)(195, "tr")(196, "th");
      \u0275\u0275text(197, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "th");
      \u0275\u0275text(199, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "th");
      \u0275\u0275text(201, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "th", 63);
      \u0275\u0275text(203, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "tbody")(205, "tr")(206, "td")(207, "div", 11)(208, "a", 64);
      \u0275\u0275element(209, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div")(211, "h6", 66)(212, "a", 67);
      \u0275\u0275text(213, "Trend Hive");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(214, "td");
      \u0275\u0275text(215, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "td");
      \u0275\u0275text(217, "04 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "td", 68)(219, "a", 69);
      \u0275\u0275element(220, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "tr")(222, "td")(223, "div", 11)(224, "a", 64);
      \u0275\u0275element(225, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div")(227, "h6", 66)(228, "a", 67);
      \u0275\u0275text(229, "Quick Cart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(230, "td");
      \u0275\u0275text(231, "Basic (Yearly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "td");
      \u0275\u0275text(233, "20 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "td", 68)(235, "a", 69);
      \u0275\u0275element(236, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "tr")(238, "td")(239, "div", 11)(240, "a", 64);
      \u0275\u0275element(241, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "div")(243, "h6", 66)(244, "a", 67);
      \u0275\u0275text(245, "Tech Bazaar");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(246, "td");
      \u0275\u0275text(247, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "td");
      \u0275\u0275text(249, "12 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "td", 68)(251, "a", 69);
      \u0275\u0275element(252, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "tr")(254, "td")(255, "div", 11)(256, "a", 64);
      \u0275\u0275element(257, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div")(259, "h6", 66)(260, "a", 67);
      \u0275\u0275text(261, "Harvest Basket");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(262, "td");
      \u0275\u0275text(263, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "td");
      \u0275\u0275text(265, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "td", 68)(267, "a", 69);
      \u0275\u0275element(268, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(269, "tr")(270, "td")(271, "div", 11)(272, "a", 64);
      \u0275\u0275element(273, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div")(275, "h6", 66)(276, "a", 67);
      \u0275\u0275text(277, "Elite Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(278, "td");
      \u0275\u0275text(279, "Enterprise (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "td");
      \u0275\u0275text(281, "18 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "td", 68)(283, "a", 69);
      \u0275\u0275element(284, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(285, "tr")(286, "td")(287, "div", 11)(288, "a", 64);
      \u0275\u0275element(289, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "div")(291, "h6", 66)(292, "a", 67);
      \u0275\u0275text(293, "Prime Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(294, "td");
      \u0275\u0275text(295, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "td");
      \u0275\u0275text(297, "22 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "td", 68)(299, "a", 69);
      \u0275\u0275element(300, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "tr")(302, "td")(303, "div", 11)(304, "a", 64);
      \u0275\u0275element(305, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "div")(307, "h6", 66)(308, "a", 67);
      \u0275\u0275text(309, "Trend Crafters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(310, "td");
      \u0275\u0275text(311, "Enterprise (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "td");
      \u0275\u0275text(313, "15 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "td", 68)(315, "a", 69);
      \u0275\u0275element(316, "i", 70);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(317, "div", 56)(318, "div", 57)(319, "div", 77)(320, "div", 78)(321, "h6", 79);
      \u0275\u0275text(322, "Earnings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div", 11)(324, "p", 80);
      \u0275\u0275element(325, "i", 81);
      \u0275\u0275text(326, "Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 82);
      \u0275\u0275element(328, "input", 83);
      \u0275\u0275elementStart(329, "span", 84);
      \u0275\u0275element(330, "i", 85);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(331, "div", 86);
      \u0275\u0275element(332, "apx-chart", 87);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(333, "div", 3)(334, "div", 88)(335, "div", 89)(336, "div", 30)(337, "h6", 90);
      \u0275\u0275text(338, "Recent Plan Expired");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "div", 60)(340, "table", 61)(341, "thead", 62)(342, "tr")(343, "th");
      \u0275\u0275text(344, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "th");
      \u0275\u0275text(346, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "th");
      \u0275\u0275text(348, "Expired On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "th", 63);
      \u0275\u0275text(350, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(351, "tbody")(352, "tr")(353, "td")(354, "div", 11)(355, "a", 64);
      \u0275\u0275element(356, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "div")(358, "h6", 66)(359, "a", 67);
      \u0275\u0275text(360, "Fresh Nest");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(361, "td");
      \u0275\u0275text(362, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "td");
      \u0275\u0275text(364, "04 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "td", 68)(366, "a", 69);
      \u0275\u0275element(367, "i", 92);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(368, "tr")(369, "td")(370, "div", 11)(371, "a", 64);
      \u0275\u0275element(372, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "div")(374, "h6", 66)(375, "a", 67);
      \u0275\u0275text(376, "Gizmo Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(377, "td");
      \u0275\u0275text(378, "Basic (Yearly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "td");
      \u0275\u0275text(380, "20 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "td", 68)(382, "a", 69);
      \u0275\u0275element(383, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(384, "tr")(385, "td")(386, "div", 11)(387, "a", 64);
      \u0275\u0275element(388, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "div")(390, "h6", 66)(391, "a", 67);
      \u0275\u0275text(392, "Dream Space");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(393, "td");
      \u0275\u0275text(394, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "td");
      \u0275\u0275text(396, "12 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "td", 68)(398, "a", 69);
      \u0275\u0275element(399, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(400, "tr")(401, "td")(402, "div", 11)(403, "a", 64);
      \u0275\u0275element(404, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "div")(406, "h6", 66)(407, "a", 67);
      \u0275\u0275text(408, "Mega Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(409, "td");
      \u0275\u0275text(410, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "td");
      \u0275\u0275text(412, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "td", 68)(414, "a", 69);
      \u0275\u0275element(415, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(416, "tr")(417, "td")(418, "div", 11)(419, "a", 64);
      \u0275\u0275element(420, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "div")(422, "h6", 66)(423, "a", 67);
      \u0275\u0275text(424, "Decor Ease");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(425, "td");
      \u0275\u0275text(426, "Enterprise (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "td");
      \u0275\u0275text(428, "18 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "td", 68)(430, "a", 69);
      \u0275\u0275element(431, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(432, "tr")(433, "td")(434, "div", 11)(435, "a", 64);
      \u0275\u0275element(436, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "div")(438, "h6", 66)(439, "a", 67);
      \u0275\u0275text(440, "Electro World");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(441, "td");
      \u0275\u0275text(442, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "td");
      \u0275\u0275text(444, "22 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "td", 68)(446, "a", 69);
      \u0275\u0275element(447, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(448, "tr")(449, "td")(450, "div", 11)(451, "a", 64);
      \u0275\u0275element(452, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "div")(454, "h6", 66)(455, "a", 67);
      \u0275\u0275text(456, "Urban Home");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(457, "td");
      \u0275\u0275text(458, "Enterprise (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "td");
      \u0275\u0275text(460, "15 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "td", 68)(462, "a", 69);
      \u0275\u0275element(463, "i", 70);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(464, "div", 99)(465, "div", 89)(466, "div", 30)(467, "h6", 90);
      \u0275\u0275text(468, "Recent Domain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "div", 60)(470, "table", 61)(471, "thead", 62)(472, "tr")(473, "th");
      \u0275\u0275text(474, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "th");
      \u0275\u0275text(476, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "th", 63);
      \u0275\u0275text(478, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(479, "tbody")(480, "tr")(481, "td")(482, "div", 11)(483, "a", 64);
      \u0275\u0275element(484, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "div")(486, "h6", 66)(487, "a", 67);
      \u0275\u0275text(488, "Urban Home");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(489, "td");
      \u0275\u0275text(490, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "td", 68)(492, "div", 100)(493, "a", 101);
      \u0275\u0275element(494, "i", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "a", 103);
      \u0275\u0275element(496, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(497, "tr")(498, "td")(499, "div", 11)(500, "a", 64);
      \u0275\u0275element(501, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "div")(503, "h6", 66)(504, "a", 67);
      \u0275\u0275text(505, "Trend Hive");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(506, "td");
      \u0275\u0275text(507, "Basic (Yearly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "td", 68)(509, "div", 100)(510, "a", 101);
      \u0275\u0275element(511, "i", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "a", 103);
      \u0275\u0275element(513, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(514, "tr")(515, "td")(516, "div", 11)(517, "a", 64);
      \u0275\u0275element(518, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "div")(520, "h6", 66)(521, "a", 67);
      \u0275\u0275text(522, "Gizmo Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(523, "td");
      \u0275\u0275text(524, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "td", 68)(526, "div", 100)(527, "a", 105);
      \u0275\u0275element(528, "i", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "a", 106);
      \u0275\u0275element(530, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(531, "tr")(532, "td")(533, "div", 11)(534, "a", 64);
      \u0275\u0275element(535, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "div")(537, "h6", 66)(538, "a", 67);
      \u0275\u0275text(539, "Harvest Basket");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(540, "td");
      \u0275\u0275text(541, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "td", 68)(543, "div", 100)(544, "a", 105);
      \u0275\u0275element(545, "i", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "a", 106);
      \u0275\u0275element(547, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(548, "tr")(549, "td")(550, "div", 11)(551, "a", 64);
      \u0275\u0275element(552, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "div")(554, "h6", 66)(555, "a", 67);
      \u0275\u0275text(556, "Mega Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(557, "td");
      \u0275\u0275text(558, "Enterprise (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "td", 68)(560, "div", 100)(561, "a", 105);
      \u0275\u0275element(562, "i", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "a", 106);
      \u0275\u0275element(564, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(565, "tr")(566, "td")(567, "div", 11)(568, "a", 64);
      \u0275\u0275element(569, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "div")(571, "h6", 66)(572, "a", 67);
      \u0275\u0275text(573, "Prime Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(574, "td");
      \u0275\u0275text(575, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(576, "td", 68)(577, "div", 100)(578, "a", 105);
      \u0275\u0275element(579, "i", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "a", 106);
      \u0275\u0275element(581, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(582, "tr")(583, "td")(584, "div", 11)(585, "a", 64);
      \u0275\u0275element(586, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "div")(588, "h6", 66)(589, "a", 67);
      \u0275\u0275text(590, "Trend Crafters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(591, "td");
      \u0275\u0275text(592, "Enterprise (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "td", 68)(594, "div", 100)(595, "a", 105);
      \u0275\u0275element(596, "i", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(597, "a", 106);
      \u0275\u0275element(598, "i", 104);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(599, "div", 3)(600, "div", 107)(601, "div", 89)(602, "div", 77)(603, "div", 108)(604, "h6");
      \u0275\u0275text(605, "Companies Registered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "div", 33)(607, "a", 48);
      \u0275\u0275text(608, " This Week");
      \u0275\u0275element(609, "i", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(610, "ul", 36)(611, "li")(612, "a", 37);
      \u0275\u0275text(613, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(614, "li")(615, "a", 37);
      \u0275\u0275text(616, "This Week");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(617, "li")(618, "a", 37);
      \u0275\u0275text(619, "This Year");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(620, "div", 110);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(621, "div", 107)(622, "div", 89)(623, "div", 30)(624, "div", 111)(625, "h6");
      \u0275\u0275text(626, "Top Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "a", 112);
      \u0275\u0275text(628, "View all");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(629, "div", 113);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(630, "div", 3)(631, "div", 114)(632, "div", 89)(633, "div", 30)(634, "div", 115)(635, "h6");
      \u0275\u0275text(636, "Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "a", 59);
      \u0275\u0275text(638, "View all Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(639, "div", 60)(640, "table", 61)(641, "thead", 62)(642, "tr")(643, "th", 63);
      \u0275\u0275text(644, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(645, "th");
      \u0275\u0275text(646, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(647, "th");
      \u0275\u0275text(648, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(649, "th");
      \u0275\u0275text(650, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(651, "th");
      \u0275\u0275text(652, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(653, "th");
      \u0275\u0275text(654, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(655, "th");
      \u0275\u0275text(656, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(657, "th", 63);
      \u0275\u0275text(658, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(659, "th", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(660, "tbody")(661, "tr")(662, "td")(663, "a", 116);
      \u0275\u0275text(664, "INV00025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(665, "td")(666, "div", 11)(667, "a", 64);
      \u0275\u0275element(668, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(669, "div")(670, "h6", 66)(671, "a", 67);
      \u0275\u0275text(672, "Trend Hive");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(673, "td");
      \u0275\u0275text(674, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(675, "td");
      \u0275\u0275text(676, "22 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(677, "td");
      \u0275\u0275text(678, "22 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "td");
      \u0275\u0275text(680, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(681, "td");
      \u0275\u0275text(682, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "td")(684, "span", 117);
      \u0275\u0275text(685, "Paid ");
      \u0275\u0275element(686, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(687, "td", 68)(688, "a", 119);
      \u0275\u0275element(689, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(690, "ul", 36)(691, "li")(692, "a", 121);
      \u0275\u0275element(693, "i", 122);
      \u0275\u0275text(694, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "li")(696, "a", 121);
      \u0275\u0275element(697, "i", 123);
      \u0275\u0275text(698, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(699, "li")(700, "a", 121);
      \u0275\u0275element(701, "i", 124);
      \u0275\u0275text(702, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(703, "tr")(704, "td")(705, "a", 116);
      \u0275\u0275text(706, "INV00024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(707, "td")(708, "div", 11)(709, "a", 64);
      \u0275\u0275element(710, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(711, "div")(712, "h6", 66)(713, "a", 67);
      \u0275\u0275text(714, "Quick Cart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(715, "td");
      \u0275\u0275text(716, "Basic (Yearly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(717, "td");
      \u0275\u0275text(718, "07 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(719, "td");
      \u0275\u0275text(720, "07 Feb 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "td");
      \u0275\u0275text(722, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(723, "td");
      \u0275\u0275text(724, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(725, "td")(726, "span", 117);
      \u0275\u0275text(727, "Paid ");
      \u0275\u0275element(728, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(729, "td", 68)(730, "a", 119);
      \u0275\u0275element(731, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(732, "ul", 36)(733, "li")(734, "a", 121);
      \u0275\u0275element(735, "i", 122);
      \u0275\u0275text(736, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "li")(738, "a", 121);
      \u0275\u0275element(739, "i", 123);
      \u0275\u0275text(740, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(741, "li")(742, "a", 121);
      \u0275\u0275element(743, "i", 124);
      \u0275\u0275text(744, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(745, "tr")(746, "td")(747, "a", 116);
      \u0275\u0275text(748, "INV00023");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(749, "td")(750, "div", 11)(751, "a", 64);
      \u0275\u0275element(752, "img", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(753, "div")(754, "h6", 66)(755, "a", 67);
      \u0275\u0275text(756, "Tech Bazaar");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(757, "td");
      \u0275\u0275text(758, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(759, "td");
      \u0275\u0275text(760, "09 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(761, "td");
      \u0275\u0275text(762, "09 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "td");
      \u0275\u0275text(764, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(765, "td");
      \u0275\u0275text(766, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "td")(768, "span", 117);
      \u0275\u0275text(769, "Paid ");
      \u0275\u0275element(770, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(771, "td", 68)(772, "a", 119);
      \u0275\u0275element(773, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(774, "ul", 36)(775, "li")(776, "a", 121);
      \u0275\u0275element(777, "i", 122);
      \u0275\u0275text(778, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(779, "li")(780, "a", 121);
      \u0275\u0275element(781, "i", 123);
      \u0275\u0275text(782, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(783, "li")(784, "a", 121);
      \u0275\u0275element(785, "i", 124);
      \u0275\u0275text(786, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(787, "tr")(788, "td")(789, "a", 116);
      \u0275\u0275text(790, "INV00022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(791, "td")(792, "div", 11)(793, "a", 64);
      \u0275\u0275element(794, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "div")(796, "h6", 66)(797, "a", 67);
      \u0275\u0275text(798, "Harvest Basket");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(799, "td");
      \u0275\u0275text(800, "Basic (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(801, "td");
      \u0275\u0275text(802, "30 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "td");
      \u0275\u0275text(804, "30 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(805, "td");
      \u0275\u0275text(806, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(807, "td");
      \u0275\u0275text(808, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(809, "td")(810, "span", 117);
      \u0275\u0275text(811, "Paid ");
      \u0275\u0275element(812, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(813, "td", 68)(814, "a", 119);
      \u0275\u0275element(815, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(816, "ul", 36)(817, "li")(818, "a", 126);
      \u0275\u0275element(819, "i", 122);
      \u0275\u0275text(820, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(821, "li")(822, "a", 126);
      \u0275\u0275element(823, "i", 123);
      \u0275\u0275text(824, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(825, "li")(826, "a", 127);
      \u0275\u0275element(827, "i", 124);
      \u0275\u0275text(828, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(829, "tr")(830, "td")(831, "a", 116);
      \u0275\u0275text(832, "INV00016");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(833, "td")(834, "div", 11)(835, "a", 64);
      \u0275\u0275element(836, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(837, "div")(838, "h6", 66)(839, "a", 67);
      \u0275\u0275text(840, "Elite Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(841, "td");
      \u0275\u0275text(842, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(843, "td");
      \u0275\u0275text(844, "12 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(845, "td");
      \u0275\u0275text(846, "12 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(847, "td");
      \u0275\u0275text(848, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(849, "td");
      \u0275\u0275text(850, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(851, "td")(852, "span", 117);
      \u0275\u0275text(853, "Paid ");
      \u0275\u0275element(854, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(855, "td", 68)(856, "a", 119);
      \u0275\u0275element(857, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(858, "ul", 36)(859, "li")(860, "a", 126);
      \u0275\u0275element(861, "i", 122);
      \u0275\u0275text(862, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(863, "li")(864, "a", 126);
      \u0275\u0275element(865, "i", 123);
      \u0275\u0275text(866, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(867, "li")(868, "a", 127);
      \u0275\u0275element(869, "i", 124);
      \u0275\u0275text(870, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(871, "tr")(872, "td")(873, "a", 116);
      \u0275\u0275text(874, "INV00015");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(875, "td")(876, "div", 11)(877, "a", 64);
      \u0275\u0275element(878, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(879, "div")(880, "h6", 66)(881, "a", 67);
      \u0275\u0275text(882, "Prime Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(883, "td");
      \u0275\u0275text(884, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(885, "td");
      \u0275\u0275text(886, "05 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(887, "td");
      \u0275\u0275text(888, "05 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(889, "td");
      \u0275\u0275text(890, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(891, "td");
      \u0275\u0275text(892, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(893, "td")(894, "span", 128);
      \u0275\u0275text(895, "Unpaid ");
      \u0275\u0275element(896, "i", 129);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(897, "td", 68)(898, "a", 119);
      \u0275\u0275element(899, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(900, "ul", 36)(901, "li")(902, "a", 126);
      \u0275\u0275element(903, "i", 122);
      \u0275\u0275text(904, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(905, "li")(906, "a", 126);
      \u0275\u0275element(907, "i", 123);
      \u0275\u0275text(908, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(909, "li")(910, "a", 127);
      \u0275\u0275element(911, "i", 124);
      \u0275\u0275text(912, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(913, "tr")(914, "td")(915, "a", 116);
      \u0275\u0275text(916, "INV00014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(917, "td")(918, "div", 11)(919, "a", 64);
      \u0275\u0275element(920, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(921, "div")(922, "h6", 66)(923, "a", 67);
      \u0275\u0275text(924, "Gizmo Mart");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(925, "td");
      \u0275\u0275text(926, "Premium (Yearly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(927, "td");
      \u0275\u0275text(928, "09 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(929, "td");
      \u0275\u0275text(930, "09 Sep 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(931, "td");
      \u0275\u0275text(932, "$3600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(933, "td");
      \u0275\u0275text(934, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(935, "td")(936, "span", 117);
      \u0275\u0275text(937, "Paid ");
      \u0275\u0275element(938, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(939, "td", 68)(940, "a", 119);
      \u0275\u0275element(941, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(942, "ul", 36)(943, "li")(944, "a", 126);
      \u0275\u0275element(945, "i", 122);
      \u0275\u0275text(946, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(947, "li")(948, "a", 126);
      \u0275\u0275element(949, "i", 123);
      \u0275\u0275text(950, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(951, "li")(952, "a", 127);
      \u0275\u0275element(953, "i", 124);
      \u0275\u0275text(954, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(955, "tr")(956, "td")(957, "a", 116);
      \u0275\u0275text(958, "INV00013");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(959, "td")(960, "div", 11)(961, "a", 64);
      \u0275\u0275element(962, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(963, "div")(964, "h6", 66)(965, "a", 67);
      \u0275\u0275text(966, "Trend Crafters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(967, "td");
      \u0275\u0275text(968, "Premium (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(969, "td");
      \u0275\u0275text(970, "02 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(971, "td");
      \u0275\u0275text(972, "02 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(973, "td");
      \u0275\u0275text(974, "$300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(975, "td");
      \u0275\u0275text(976, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(977, "td")(978, "span", 117);
      \u0275\u0275text(979, "Paid ");
      \u0275\u0275element(980, "i", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(981, "td", 68)(982, "a", 119);
      \u0275\u0275element(983, "i", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(984, "ul", 36)(985, "li")(986, "a", 126);
      \u0275\u0275element(987, "i", 122);
      \u0275\u0275text(988, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(989, "li")(990, "a", 126);
      \u0275\u0275element(991, "i", 123);
      \u0275\u0275text(992, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(993, "li")(994, "a", 127);
      \u0275\u0275element(995, "i", 124);
      \u0275\u0275text(996, "Delete");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.companies);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.packages);
      \u0275\u0275advance(169);
      \u0275\u0275property("routerLink", ctx.routes.companies);
      \u0275\u0275advance(142);
      \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("fill", ctx.chartOptions.fill);
      \u0275\u0275advance(295);
      \u0275\u0275property("routerLink", ctx.routes.subscriptions);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(181);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
    }
  }, dependencies: [CommonModule, RouterLink, NgApexchartsModule, ChartComponent, DateRangePickerComponent, BsDatepickerModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [CommonModule, RouterLink, NgApexchartsModule, DateRangePickerComponent, BsDatepickerModule], template: '<!-- Start Content -->\n<div class="">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Dashboard</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <app-date-range-picker/>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-xl-4">\n            <div class="card bg-primary rounded-3 px-3 position-relative z-0">\n                <img src="assets/img/icons/dashboard-icon-02.svg" alt="img" class="dashboard-bg-2 d-lg-flex d-none">\n                \n                <!-- start row -->\n                <div class="row">\n                    <div class="col-lg-12 py-3">\n                        <h5 class="text-white d-inline-flex align-items-center mb-2 text-truncate line-clamb-1"><i class="isax isax-sun-1 fs-20 me-1"></i>Good Morning, John</h5>\n                        <p class="fs-16 text-white mb-lg-5 mb-3 text-truncate">14 New Companies Subscribed Today</p>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.companies" class="btn btn-sm btn-blue fw-medium me-2 px-xl-2 px-lg-3">View Companies</a>\n                            <a [routerLink]="routes.packages" class="btn btn-sm btn-outline-blue fw-medium px-xl-2 px-lg-3">All Packages</a>\n                        </div>\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n        </div><!-- end col -->\n        <div class="col-xl-8">\n\n            <!-- start row -->\n            <div class="row">\n                <div class="col-md-3 d-flex">\n                    <div class="card bg-light shadow-none flex-fill w-100 rounded-3">\n                        <div class="card-body p-3">\n                            <div class="avatar avatar-xl bg-white rounded-3 mb-3">\n                                <img src="assets/img/icons/info-icon-01.svg" alt="img" class="rounded-3 img-fluid w-auto h-auto">\n                            </div>\n                            <p class="mb-1 text-gray-9 text-truncate">Total Companies</p>\n                            <h6 class="mb-1 fs-16 fw-semibold">987</h6>\n                            <p class="fs-13 mb-0 text-truncate"><span class="text-success fs-14"><i class="isax isax-send text-success me-1"></i>14%</span> last month</p>\n                        </div><!-- end card body -->\n                    </div><!-- end card -->\n                </div><!-- end col -->\n                <div class="col-md-3 d-flex">\n                    <div class="card bg-light shadow-none flex-fill w-100 rounded-3">\n                        <div class="card-body p-3">\n                            <div class="avatar avatar-xl bg-white rounded-3 mb-3">\n                                <img src="assets/img/icons/info-icon-02.svg" alt="img" class="rounded-3 img-fluid w-auto h-auto">\n                            </div>\n                            <p class="mb-1 text-gray-9 text-truncate">Active Companies</p>\n                            <h6 class="mb-1 fs-16 fw-semibold">154</h6>\n                            <p class="fs-13 mb-0 text-truncate"><span class="text-success fs-14"><i class="isax isax-send text-success me-1"></i>8.36%</span> last month</p>\n                        </div><!-- end card body -->\n                    </div><!-- end card -->\n                </div><!-- end col -->\n                <div class="col-md-3 d-flex">\n                    <div class="card bg-light shadow-none flex-fill w-100 rounded-3">\n                        <div class="card-body p-3">\n                            <div class="avatar avatar-xl bg-white rounded-3 mb-3">\n                                <img src="assets/img/icons/info-icon-03.svg" alt="img" class="rounded-3 img-fluid w-auto h-auto">\n                            </div>\n                            <p class="mb-1 text-gray-9 text-truncate">Inactive Companies</p>\n                            <h6 class="mb-1 fs-16 fw-semibold">2</h6>\n                            <p class="fs-13 mb-0 text-truncate"><span class="text-success fs-14"><i class="isax isax-send text-success me-1"></i>12.8%</span> last month</p>\n                        </div><!-- end card body -->\n                    </div><!-- end card -->\n                </div><!-- end col -->\n                <div class="col-md-3 d-flex">\n                    <div class="card bg-light shadow-none flex-fill w-100 rounded-3">\n                        <div class="card-body p-3">\n                            <div class="avatar avatar-xl bg-white rounded-3 mb-3">\n                                <img src="assets/img/icons/info-icon-04.svg" alt="img" class="rounded-3 img-fluid w-auto h-auto">\n                            </div>\n                            <p class="mb-1 text-gray-9 text-truncate">Total Active Plans</p>\n                            <h6 class="mb-1 fs-16 fw-semibold">6</h6>\n                            <p class="fs-13 mb-0 text-truncate"><span class="text-success fs-14"><i class="isax isax-send text-success me-1"></i>16%</span> last month</p>\n                        </div><!-- end card body -->\n                    </div><!-- end card -->\n                </div><!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n    </div>\n    <!-- end row -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-xl-4 d-flex">\n            <div class="card rounded-3 shadow-none flex-fill w-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">\n                        <h6 class="fs-16 fw-semibold text-truncate">Most Ordered Plan</h6>\n                        <div class="dropdown flex-shrink-0">\n                            <a href="javascript:void(0);" class="btn btn-light fw-normal d-inline-flex align-items-center border" data-bs-toggle="dropdown" aria-expanded="false">This Month<i class="isax isax-calendar-2 ms-2 text-gray-9"></i></a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Today</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Week</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Year</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class="bg-light rounded-3 p-3">\n                        <div class="d-flex align-items-center mb-2 justify-content-between gap-2 flex-wrap flex-md-nowrap">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg bg-white rounded-3">\n                                <img src="assets/img/icons/company-logo-01.svg" alt="img" class="rounded-3 img-fluid w-auto h-auto">\n                            </span>\n                                <div class="ms-2">\n                                    <p class="mb-1"><span class="text-gray-9 fw-medium">Enterprise</span> (Monthly)</p>\n                                    <p class="mb-0">Total Order : 201</p>\n                                </div>\n                            </div>                                        \n                        </div>\n                        <div class="text-end">\n                            <p class="text-gray-9">$549.00</p>\n                        </div>                                    \n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <div class="col-xl-4 d-flex">\n            <div class="card rounded-3 shadow-none flex-fill w-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">\n                        <h6 class="fs-16 fw-semibold text-truncate">Top Company with Plan</h6>\n                        <div class="dropdown flex-shrink-0">\n                            <a href="javascript:void(0);" class="btn btn-light border fw-normal d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\n                        Today<i class="isax isax-calendar-2 ms-2 text-gray-9"></i>\n                        </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Month</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Week</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Year</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class="bg-light rounded-3 p-3">\n                        <div class="d-flex align-items-center mb-2 justify-content-between gap-2 flex-wrap flex-lg-nowrap">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg bg-white rounded-3">\n                                <img src="assets/img/icons/company-logo-02.svg" alt="img" class="rounded-3 img-fluid w-auto h-auto">\n                            </span>\n                                <div class="ms-2">\n                                    <p class="mb-1 fw-medium text-gray-9">Tech Bazaar</p>\n                                    <p class="mb-0 text-truncate">rebazaar&#64;example.com</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="text-end">\n                            <p class="text-gray-9 flex-shrink-0">10 Plans</p>\n                        </div> \n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <div class="col-xl-4 d-flex">\n            <div class="card rounded-3 shadow-none flex-fill w-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">\n                        <h6 class="fs-16 fw-semibold text-truncate">Most Domains</h6>\n                        <div class="dropdown flex-shrink-0">\n                            <a href="javascript:void(0);" class="btn btn-light border fw-normal d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">This Week<i class="isax isax-calendar-2 ms-2 text-gray-9"></i></a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Today</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Week</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Year</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class="bg-light rounded-3 p-3">\n                        <div class="d-flex align-items-center mb-2 justify-content-between gap-2 flex-wrap">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg bg-white rounded-3">\n                                <img src="assets/img/icons/company-logo-03.svg" alt="img" class="rounded-3 img-fluid w-auto h-auto">\n                            </span>\n                                <div class="ms-2">\n                                    <p class="mb-1 fw-medium text-gray-9">Quick Cart</p>\n                                    <p class="mb-0">qc.example.com</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="text-end">\n                            <p class="text-gray-9">150 Users</p>\n                        </div> \n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n    </div>\n    <!-- end row -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-xl-6 d-flex">\n            <div class="card shadow-none rounded-3 flex-fill w-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">\n                        <h6>Latest Registered Companies</h6>\n                        <a [routerLink]="routes.companies" class="btn btn-sm btn-dark">View all</a>\n                    </div>\n                    <!-- Table List -->\n                    <div class="table-responsive no-filter no-paginaion">\n                        <table class="table table-nowrap datatable">\n                            <thead class="thead-light">\n                                <tr>\n                                    <th>Company</th>\n                                    <th>Plan</th>\n                                    <th>Due Date</th>\n                                    <th class="no-sort">Status</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-01.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Trend Hive</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>04 Mar 2025</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-02.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Quick Cart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Basic (Yearly)</td>\n                                    <td>20 Feb 2025</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-03.svg" class="rounded-0" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Tech Bazaar</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>12 Nov 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-04.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Harvest Basket</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>25 Oct 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-05.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Elite Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Enterprise (Monthly)</td>\n                                    <td>18 Oct 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-06.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Prime Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>22 Sep 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-07.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Trend Crafters</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Enterprise (Monthly)</td>\n                                    <td>15 Sep 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- /Table List -->\n                </div><!-- end card body -->\n            </div><!-- card end  -->\n        </div>\n\n        <!-- earnings -->\n        <div class="col-xl-6 d-flex">\n            <div class="card shadow-none rounded-3 flex-fill w-100">\n                <div class="card-body pb-0">\n                    <div class="d-flex justify-content-between align-items-center">\n                        <h6 class="fw-semibold fs-16">Earnings</h6>\n                        <div class="d-flex align-items-center">\n                            <p class="d-inline-flex align-items-center me-4 mb-0"><i class="fa-solid fa-square text-primary fs-12 me-1"></i>Income</p>\n                            <div class="input-icon-end position-relative">\n                                <input type="text" class="form-control form-control-sm yearpicker" value="2024">\n                                <span class="input-icon-addon text-dark">\n                                    <i class="isax isax-calendar-2"></i>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div id="earnings-chart" class="chart-set">\n                        <apx-chart [series]="chartOptions.series" \n                        [chart]="chartOptions.chart"\n                        [dataLabels]="chartOptions.dataLabels"\n                        [plotOptions]="chartOptions.plotOptions"\n                        [yaxis]="chartOptions.yaxis" \n                        [legend]="chartOptions.legend" \n                        [fill]="chartOptions.fill"\n                        [stroke]="chartOptions.stroke" \n                        [xaxis]="chartOptions.xaxis"\n                        [colors]="chartOptions.colors"\n                        [fill]="chartOptions.fill"></apx-chart>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n    </div>\n    <!-- end row -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-lg-7 d-flex">\n            <div class="card shadow-none w-100 rounded-3">\n                <div class="card-body">\n                    <h6 class="mb-3">Recent Plan Expired</h6>\n                    <!-- Table List -->\n                    <div class="table-responsive no-filter no-paginaion">\n                        <table class="table table-nowrap datatable">\n                            <thead class="thead-light">\n                                <tr>\n                                    <th>Company</th>\n                                    <th>Plan</th>\n                                    <th>Expired On</th>\n                                    <th class="no-sort">Status</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-08.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Fresh Nest</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>04 Mar 2025</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-09.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Gizmo Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Basic (Yearly)</td>\n                                    <td>20 Feb 2025</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-10.svg" class="rounded-0" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Dream Space</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>12 Nov 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-11.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Mega Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>25 Oct 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-12.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Decor Ease</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Enterprise (Monthly)</td>\n                                    <td>18 Oct 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-13.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Electro World</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>22 Sep 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-14.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Urban Home</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Enterprise (Monthly)</td>\n                                    <td>15 Sep 2024</td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" class="rounded-2 w-auto h-auto bg-light fs-14 border-0 p-1 d-inline-flex align-items-center justify-content-around">\n                                            <i class="isax isax-eye d-inline-flex align-item-center justify-content-center"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- /Table List -->\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <div class="col-lg-5 d-flex">\n            <div class="card shadow-none w-100 rounded-3">\n                <div class="card-body">\n                    <h6 class="mb-3">Recent Domain</h6>\n                    <!-- Table List -->\n                    <div class="table-responsive no-filter no-paginaion">\n                        <table class="table table-nowrap datatable">\n                            <thead class="thead-light">\n                                <tr>\n                                    <th>Company</th>\n                                    <th>Plan</th>\n                                    <th class="no-sort">Status</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-14.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Urban Home</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td class="action-item">\n                                        <div class="d-flex align-item-center">\n                                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-danger d-inline-flex align-item-center justify-content-center p-1 fs-14 border-0 me-2">\n                                                <i class="isax isax-close-circle"></i>\n                                            </a>\n                                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-success d-inline-flex align-item-center justify-content-center p-1 fs-14 border-0">\n                                                <i class="isax isax-tick-square"></i>\n                                            </a>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-01.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Trend Hive</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Basic (Yearly)</td>\n                                    <td class="action-item">\n                                        <div class="d-flex align-item-center">\n                                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-danger d-inline-flex align-item-center justify-content-center p-1 fs-14 border-0 me-2">\n                                                <i class="isax isax-close-circle"></i>\n                                            </a>\n                                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-success d-inline-flex align-item-center justify-content-center p-1 fs-14 border-0">\n                                                <i class="isax isax-tick-square"></i>\n                                            </a>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-09.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Gizmo Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td class="action-item">\n                                        <div class="d-flex align-item-center">\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-danger-subtle fs-14 border-0 me-1 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-close-circle"></i>\n                                            </a>\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-success-subtle fs-14 border-0 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-tick-square"></i>\n                                            </a>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-04.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Harvest Basket</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td class="action-item">\n                                        <div class="d-flex align-item-center">\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-danger-subtle fs-14 border-0 me-1 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-close-circle"></i>\n                                            </a>\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-success-subtle fs-14 border-0 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-tick-square"></i>\n                                            </a>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-11.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Mega Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Enterprise (Monthly)</td>\n                                    <td class="action-item">\n                                        <div class="d-flex align-item-center">\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-danger-subtle fs-14 border-0 me-1 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-close-circle"></i>\n                                            </a>\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-success-subtle fs-14 border-0 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-tick-square"></i>\n                                            </a>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-06.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Prime Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td class="action-item">\n                                        <div class="d-flex align-item-center">\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-danger-subtle fs-14 border-0 me-1 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-close-circle"></i>\n                                            </a>\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-success-subtle fs-14 border-0 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-tick-square"></i>\n                                            </a>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-07.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Trend Crafters</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Enterprise (Monthly)</td>\n                                    <td class="action-item">\n                                        <div class="d-flex align-item-center">\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-danger-subtle fs-14 border-0 me-1 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-close-circle"></i>\n                                            </a>\n                                            <a href="javascript:void(0);" class="btn p-1 rounded-2 bg-success-subtle fs-14 border-0 d-flex align-items-center justify-content-center">\n                                                <i class="isax isax-tick-square"></i>\n                                            </a>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- /Table List -->\n                </div><!-- end card body -->\n            </div><!-- card end  -->\n        </div>\n    </div>\n    <!-- end row -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-lg-6 d-flex">\n            <div class="card shadow-none w-100 rounded-3">\n                <div class="card-body pb-0">\n                    <div class="d-flex align-items-center justify-content-between">\n                        <h6>Companies Registered</h6>\n                        <div class="dropdown flex-shrink-0">\n                            <a href="javascript:void(0);" class="btn btn-light border fw-normal d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\n                         This Week<i class="isax isax-calendar-2 ms-2"></i>\n                        </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Today</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Week</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">This Year</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div id="register-chart" class="chart-set"></div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <div class="col-lg-6 d-flex">\n            <div class="card shadow-none w-100 rounded-3">\n                <div class="card-body">\n                    <div class="d-flex align-item-center justify-content-between mb-2">\n                        <h6>Top Plans</h6>\n                        <a [routerLink]="routes.subscriptions" class="btn btn-dark btn-sm">View all</a>\n                    </div>\n                    <div id="plane-chart"></div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n    </div>\n    <!-- end row -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-lg-12">\n            <div class="card shadow-none w-100 rounded-3">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <h6>Invoices</h6>\n                        <a [routerLink]="routes.invoiceList" class="btn btn-sm btn-dark">View all Invoices</a>\n                    </div>\n                    <!-- Table List -->\n                    <div class="table-responsive no-filter no-paginaion">\n                        <table class="table table-nowrap datatable">\n                            <thead class="thead-light">\n                                <tr>\n                                    <th class="no-sort">ID</th>\n                                    <th>Company</th>\n                                    <th>Plan</th>\n                                    <th>Created On</th>\n                                    <th>Expiring On</th>\n                                    <th>Amount</th>\n                                    <th>Payment Mode</th>\n                                    <th class="no-sort">Status</th>\n                                    <th class="no-sort"></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td><a href="javascript:void(0);" class="link-default">INV00025</a></td>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-01.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Trend Hive</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>22 Feb 2025</td>\n                                    <td>22 Mar 2025</td>\n                                    <td>$200</td>\n                                    <td>Cash</td>\n                                    <td>\n                                        <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center">Paid\n                                        <i class="isax isax-tick-circle ms-1"></i>\n                                    </span>\n                                    </td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                            <i class="isax isax-more"></i>\n                                        </a>\n                                        <ul class="dropdown-menu">\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-trash me-2"></i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td><a href="javascript:void(0);" class="link-default">INV00024</a></td>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-02.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Quick Cart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Basic (Yearly)</td>\n                                    <td>07 Feb 2025</td>\n                                    <td>07 Feb 2026</td>\n                                    <td>$600</td>\n                                    <td>Check</td>\n                                    <td>\n                                        <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center">Paid\n                                        <i class="isax isax-tick-circle ms-1"></i>\n                                    </span>\n                                    </td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                            <i class="isax isax-more"></i>\n                                        </a>\n                                        <ul class="dropdown-menu">\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-trash me-2"></i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td><a href="javascript:void(0);" class="link-default">INV00023</a></td>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-03.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Tech Bazaar</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>09 Dec 2024</td>\n                                    <td>09 Jan 2025</td>\n                                    <td>$400</td>\n                                    <td>Check</td>\n                                    <td>\n                                        <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center">Paid\n                                        <i class="isax isax-tick-circle ms-1"></i>\n                                    </span>\n                                    </td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                            <i class="isax isax-more"></i>\n                                        </a>\n                                        <ul class="dropdown-menu">\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-trash me-2"></i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td><a href="javascript:void(0);" class="link-default">INV00022</a></td>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-04.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Harvest Basket</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Basic (Monthly)</td>\n                                    <td>30 Nov 2024</td>\n                                    <td>30 Dec 2024</td>\n                                    <td>$50</td>\n                                    <td>Check</td>\n                                    <td>\n                                        <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center">Paid\n                                        <i class="isax isax-tick-circle ms-1"></i>\n                                    </span>\n                                    </td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                            <i class="isax isax-more"></i>\n                                        </a>\n                                        <ul class="dropdown-menu">\n                                            <li>\n                                                <a [routerLink]="routes.invoiceList" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                            </li>\n                                            <li>\n                                                <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td><a href="javascript:void(0);" class="link-default">INV00016</a></td>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-05.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Elite Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>12 Oct 2024</td>\n                                    <td>12 Nov 2024</td>\n                                    <td>$400</td>\n                                    <td>Cash</td>\n                                    <td>\n                                        <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center">Paid\n                                        <i class="isax isax-tick-circle ms-1"></i>\n                                    </span>\n                                    </td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                            <i class="isax isax-more"></i>\n                                        </a>\n                                        <ul class="dropdown-menu">\n                                            <li>\n                                                <a [routerLink]="routes.invoiceList" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                            </li>\n                                            <li>\n                                                <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td><a href="javascript:void(0);" class="link-default">INV00015</a></td>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-06.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Prime Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Advanced (Monthly)</td>\n                                    <td>05 Oct 2024</td>\n                                    <td>05 Nov 2024</td>\n                                    <td>$200</td>\n                                    <td>Check</td>\n                                    <td>\n                                        <span class="badge badge-sm badge-soft-danger d-inline-flex align-items-center">Unpaid\n                                        <i class="isax isax-close-circle ms-1"></i>\n                                    </span>\n                                    </td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                            <i class="isax isax-more"></i>\n                                        </a>\n                                        <ul class="dropdown-menu">\n                                            <li>\n                                                <a [routerLink]="routes.invoiceList" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                            </li>\n                                            <li>\n                                                <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td><a href="javascript:void(0);" class="link-default">INV00014</a></td>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-09.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Gizmo Mart</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Premium (Yearly)</td>\n                                    <td>09 Sep 2024</td>\n                                    <td>09 Sep 2025</td>\n                                    <td>$3600</td>\n                                    <td>Cash</td>\n                                    <td>\n                                        <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center">Paid\n                                        <i class="isax isax-tick-circle ms-1"></i>\n                                    </span>\n                                    </td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                            <i class="isax isax-more"></i>\n                                        </a>\n                                        <ul class="dropdown-menu">\n                                            <li>\n                                                <a [routerLink]="routes.invoiceList" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                            </li>\n                                            <li>\n                                                <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td><a href="javascript:void(0);" class="link-default">INV00013</a></td>\n                                    <td>\n                                        <div class="d-flex align-items-center">\n                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                                <img src="assets/img/icons/company-07.svg" class="rounded-circle" alt="img">\n                                            </a>\n                                            <div>\n                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Trend Crafters</a></h6>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>Premium (Monthly)</td>\n                                    <td>02 Sep 2024</td>\n                                    <td>02 Oct 2024</td>\n                                    <td>$300</td>\n                                    <td>Check</td>\n                                    <td>\n                                        <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center">Paid\n                                        <i class="isax isax-tick-circle ms-1"></i>\n                                    </span>\n                                    </td>\n                                    <td class="action-item">\n                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                            <i class="isax isax-more"></i>\n                                        </a>\n                                        <ul class="dropdown-menu">\n                                            <li>\n                                                <a [routerLink]="routes.invoiceList" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                            </li>\n                                            <li>\n                                                <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                            </li>\n                                            <li>\n                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- /Table List -->\n                </div>\n                <!-- end card body -->\n            </div>\n            <!-- card end  -->\n        </div>\n    </div>\n    <!-- end row -->\n</div>\n<!-- End Content -->' }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/super-admin/dashboard/dashboard.component.ts", lineNumber: 46 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-74W3OO2J.js.map
