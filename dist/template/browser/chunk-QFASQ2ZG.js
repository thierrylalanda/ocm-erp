import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BZYHLAL5.js";
import {
  MatSliderModule
} from "./chunk-Z5WPXIQX.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import {
  FormsModule
} from "./chunk-NAWYXTZ5.js";
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

// src/app/features/customers/dashboard/dashboard.component.ts
var _c0 = ["chart"];
var DashboardComponent = class _DashboardComponent {
  routes = routes;
  chart;
  radialChart;
  constructor() {
    this.radialChart = {
      chart: {
        type: "donut",
        height: 164
      },
      series: [30, 10, 30, 30],
      labels: ["Total", "Total", "Total", "Total"],
      colors: ["#7539FF", "#E2B93B", "#27AE60", "#DD2590"],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false
        // No gap between segments
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "70%",
            labels: {
              show: true,
              // ✅ Ensure donut center is always visible
              name: {
                show: true,
                text: "Total",
                fontSize: "13px",
                offsetY: -4,
                color: "#5D6772"
              },
              value: {
                show: true,
                fontSize: "18px",
                fontWeight: 700,
                offsetY: 10,
                color: "#051321",
                formatter: function() {
                  return "$3656";
                }
              }
            }
          }
        }
      },
      tooltip: {
        enabled: false
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
  }, decls: 482, vars: 20, consts: [[1, ""], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "custom-daterange-customer"], [1, "row"], [1, "col-sm-6", "col-xl-3", "d-flex"], [1, "card", "overflow-hidden", "z-1", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "avatar-lg", "bg-primary", "text-white", "avatar-rounded"], [1, "isax", "isax-dollar-circle", "fs-24"], [1, "fs-13"], [1, "text-success", "d-inline-flex", "align-items-center"], [1, "isax", "isax-send", "me-1"], [1, "position-absolute", "start-0", "bottom-0", "z-n1"], ["src", "assets/img/bg/income-report-1.svg", "alt", "img"], [1, "avatar", "avatar-lg", "bg-success", "text-white", "avatar-rounded"], [1, "isax", "isax-bag-2", "fs-24"], ["src", "assets/img/bg/income-report-2.svg", "alt", "img"], [1, "avatar", "avatar-lg", "bg-warning", "text-white", "avatar-rounded"], [1, "isax", "isax-wallet-3", "fs-24"], ["src", "assets/img/bg/income-report-3.svg", "alt", "img"], [1, "avatar", "avatar-lg", "bg-danger", "text-white", "avatar-rounded"], [1, "isax", "isax-wallet-money", "fs-24"], ["src", "assets/img/bg/income-report-4.svg", "alt", "img"], [1, "col-xl-4", "d-flex"], [1, "card", "flex-fill"], [1, "mb-3"], [1, "bg-dark-gradient", "p-3", "rounded", "mb-2"], [1, "fs-16", "fw-semibold", "text-white"], [1, "badge", "badge-sm", "bg-danger", "bg-danger"], [1, "col"], [1, "fs-13", "text-light", "mb-1"], [1, "fs-14", "text-white", "fw-semibold", "text-truncate"], [1, "card", "border-0", "bg-light", "mb-3", "shadow-none"], [1, "mb-3", "pb-2", "border-bottom"], [1, "text-dark", "mb-1"], [1, "float-end"], [1, "text-danger", "float-end"], [1, "row", "g-2"], [1, "col", "pt-1"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-money-send5", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "w-100", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-document-download5", "me-1"], [1, "col-xl-4", "col-lg-6", "d-flex"], [1, "mb-2"], ["id", "radial-chart2", 1, "chart-set"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "xaxis", "colors", "labels"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-center", "gap-2", "mb-3"], [1, "fs-13", "text-dark", "d-flex", "align-items-center", "mb-0"], [1, "fa-solid", "fa-square", "text-success", "fs-11", "me-1"], [1, "fa-solid", "fa-square", "text-primary", "fs-11", "me-1"], [1, "fa-solid", "fa-square", "text-warning", "fs-11", "me-1"], [1, "fa-solid", "fa-square", "text-pink", "fs-11", "me-1"], [1, "border", "rounded", "p-2", "mb-3"], [1, "col", "d-flex", "border-end"], [1, "text-center", "flex-fill"], [1, "fs-13", "mb-1"], [1, "col", "d-flex"], [1, "d-flex", "align-items-center", "justify-content-between", "pt-1", "gap-3"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "rounded-2", "bg-light", "flex-shrink-0", "fs-16", "text-gray-9", "border"], [1, "isax", "isax-refresh", "fs-16"], [1, "card", "flex-fill", "overflow-hidden"], [1, "card-body", "pb-0"], [1, "mb-1", "pb-3", "mb-3", "border-bottom"], [1, "recent-activities"], [1, "d-flex", "align-items-center", "pb-3"], [1, "border", "z-1", "border-primary", "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", "bg-white", "p-1"], [1, "fa", "fa-circle", "fs-8", "text-primary"], [1, "recent-activities-flow"], [1, "text-gray-9", "fw-semibold"], [1, "mb-0", "d-inline-flex", "align-items-center", "fs-13"], [1, "isax", "isax-calendar-25", "me-1"], [1, "d-flex", "align-items-center", "pb-0"], ["href", "javascript:void(0);", 1, "btn", "w-100", "fs-14", "py-2", "shadow-lg", "fw-medium"], [1, "col-xl-8", "d-flex"], [1, "card", "flex-fill", "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "flex-wrap", "mb-3"], [1, "btn", "btn-sm", "btn-dark", "mb-1", 3, "routerLink"], [1, "table-responsive", "border", "recent-invoice-table", "table-nowrap"], [1, "table", "m-0"], [1, "table-light"], [1, "link-default", 3, "routerLink"], [1, "text-dark"], [1, "badge", "badge-soft-success", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle", "ms-1"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-primary", "d-inline-flex", "align-items-center"], [1, "badge", "badge-soft-warning", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-slash", "ms-1"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-soft-info", "d-inline-flex", "align-items-center", "border-0", "text-gray-3"], [1, "badge", "badge-soft-danger", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-close-circle", "ms-1"], [1, "badge", "badge-soft-info", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-timer", "ms-1"], [1, "border-white"], [1, "fs-14", "fw-semibold", "mb-3"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "rounded-pill", "border", "bg-light", "p-2", "flex-shrink-0"], ["src", "assets/img/icons/paypal-icon.svg", "alt", "img", 1, "img-fluid"], [1, "ms-2"], [1, "fs-14", "fw-semibold", "mb-1"], [1, "badge", "badge-soft-success", "badge-lg", "d-inline-flex", "align-items-center"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-3"], ["src", "assets/img/icons/card-icon.svg", "alt", "img", 1, "img-fluid"], [1, "badge", "badge-soft-danger", "badge-lg", "d-inline-flex", "align-items-center"], [1, "d-flex", "align-items-center", "justify-content-between"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275element(6, "app-date-range-picker-2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div")(13, "p", 8);
      \u0275\u0275text(14, "Total Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h6", 9);
      \u0275\u0275text(16, " \u20B9250,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "span", 10);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "p", 12)(20, "span", 13);
      \u0275\u0275element(21, "i", 14);
      \u0275\u0275text(22, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275element(25, "img", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 4)(27, "div", 5)(28, "div", 6)(29, "div", 7)(30, "div")(31, "p", 8);
      \u0275\u0275text(32, "Outstanding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h6", 9);
      \u0275\u0275text(34, "\u20B9100,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "span", 17);
      \u0275\u0275element(36, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "p", 12)(38, "span", 13);
      \u0275\u0275element(39, "i", 14);
      \u0275\u0275text(40, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 15);
      \u0275\u0275element(43, "img", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 4)(45, "div", 5)(46, "div", 6)(47, "div", 7)(48, "div")(49, "p", 8);
      \u0275\u0275text(50, "Overdue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "h6", 9);
      \u0275\u0275text(52, "\u20B9400,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "span", 20);
      \u0275\u0275element(54, "i", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "p", 12)(56, "span", 13);
      \u0275\u0275element(57, "i", 14);
      \u0275\u0275text(58, "8.12%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 15);
      \u0275\u0275element(61, "img", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 4)(63, "div", 5)(64, "div", 6)(65, "div", 7)(66, "div")(67, "p", 8);
      \u0275\u0275text(68, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "h6", 9);
      \u0275\u0275text(70, "\u20B9300,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "span", 23);
      \u0275\u0275element(72, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "p", 12)(74, "span", 13);
      \u0275\u0275element(75, "i", 14);
      \u0275\u0275text(76, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(77, " from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 15);
      \u0275\u0275element(79, "img", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "div", 3)(81, "div", 26)(82, "div", 27)(83, "div", 6)(84, "div", 28)(85, "h6", 8);
      \u0275\u0275text(86, "Invoice Detail");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 29)(88, "div", 7)(89, "h6", 30);
      \u0275\u0275text(90, "#INV215654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span", 31);
      \u0275\u0275text(92, "Due in 8 days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 3)(94, "div", 32)(95, "div")(96, "p", 33);
      \u0275\u0275text(97, "Issued On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "h6", 34);
      \u0275\u0275text(99, "25 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 32)(101, "div")(102, "p", 33);
      \u0275\u0275text(103, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "h6", 34);
      \u0275\u0275text(105, "31 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 32)(107, "div")(108, "p", 33);
      \u0275\u0275text(109, "Recurring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "h6", 34);
      \u0275\u0275text(111, "Monthly");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(112, "div", 35)(113, "div", 6)(114, "div", 36)(115, "p", 37);
      \u0275\u0275text(116, "Amount ");
      \u0275\u0275elementStart(117, "span", 38);
      \u0275\u0275text(118, "$565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "p", 37);
      \u0275\u0275text(120, "GST (9%) ");
      \u0275\u0275elementStart(121, "span", 38);
      \u0275\u0275text(122, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "p", 37);
      \u0275\u0275text(124, "Amount ");
      \u0275\u0275elementStart(125, "span", 39);
      \u0275\u0275text(126, "- $18");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "h6");
      \u0275\u0275text(128, "Total (USD) ");
      \u0275\u0275elementStart(129, "span", 38);
      \u0275\u0275text(130, "$596");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(131, "div", 40)(132, "div", 41)(133, "a", 42);
      \u0275\u0275element(134, "i", 43);
      \u0275\u0275text(135, "Pay");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 41)(137, "a", 44);
      \u0275\u0275element(138, "i", 45);
      \u0275\u0275text(139, "Download");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(140, "div", 46)(141, "div", 27)(142, "div", 6)(143, "div", 28)(144, "h6", 8);
      \u0275\u0275text(145, "Payment Statistics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 47)(147, "div", 48);
      \u0275\u0275element(148, "apx-chart", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 50)(150, "p", 51);
      \u0275\u0275element(151, "i", 52);
      \u0275\u0275text(152, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "p", 51);
      \u0275\u0275element(154, "i", 53);
      \u0275\u0275text(155, "Partially");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p", 51);
      \u0275\u0275element(157, "i", 54);
      \u0275\u0275text(158, "Unpaid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "p", 51);
      \u0275\u0275element(160, "i", 55);
      \u0275\u0275text(161, "Overdue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 56)(163, "div", 40)(164, "div", 57)(165, "div", 58)(166, "p", 59);
      \u0275\u0275text(167, "Invoiced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "h6", 9);
      \u0275\u0275text(169, "$9965");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(170, "div", 57)(171, "div", 58)(172, "p", 59);
      \u0275\u0275text(173, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "h6", 9);
      \u0275\u0275text(175, "$996");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(176, "div", 57)(177, "div", 58)(178, "p", 59);
      \u0275\u0275text(179, "Partial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "h6", 9);
      \u0275\u0275text(181, "$6562");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "div", 60)(183, "div", 58)(184, "p", 59);
      \u0275\u0275text(185, "Unpaid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "h6", 9);
      \u0275\u0275text(187, "$478");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(188, "div", 61)(189, "p", 62);
      \u0275\u0275text(190, "Updated from the last transaction on Sunday, 24 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "a", 63);
      \u0275\u0275element(192, "i", 64);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(193, "div", 46)(194, "div", 65)(195, "div", 66)(196, "div", 62)(197, "h6", 67);
      \u0275\u0275text(198, "Recent Activities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 68)(200, "div", 69)(201, "span", 70);
      \u0275\u0275element(202, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "div", 72)(204, "p", 8);
      \u0275\u0275text(205, "Status Changed to ");
      \u0275\u0275elementStart(206, "span", 73);
      \u0275\u0275text(207, "Partially Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "p", 74);
      \u0275\u0275element(209, "i", 75);
      \u0275\u0275text(210, "19 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 69)(212, "span", 70);
      \u0275\u0275element(213, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "div", 72)(215, "p", 8)(216, "span", 73);
      \u0275\u0275text(217, "$300");
      \u0275\u0275elementEnd();
      \u0275\u0275text(218, " Partial Amount Paid on ");
      \u0275\u0275elementStart(219, "span", 73);
      \u0275\u0275text(220, "Paypal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "p", 74);
      \u0275\u0275element(222, "i", 75);
      \u0275\u0275text(223, "18 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(224, "div", 69)(225, "span", 70);
      \u0275\u0275element(226, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "div", 72)(228, "p", 8);
      \u0275\u0275text(229, "New Expenses added ");
      \u0275\u0275elementStart(230, "span", 73);
      \u0275\u0275text(231, "#TR018756");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "p", 74);
      \u0275\u0275element(233, "i", 75);
      \u0275\u0275text(234, "18 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "div", 69)(236, "span", 70);
      \u0275\u0275element(237, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 72)(239, "p", 8);
      \u0275\u0275text(240, "Estimate Created ");
      \u0275\u0275elementStart(241, "span", 73);
      \u0275\u0275text(242, "#ES458789");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "p", 74);
      \u0275\u0275element(244, "i", 75);
      \u0275\u0275text(245, "17 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(246, "div", 76)(247, "span", 70);
      \u0275\u0275element(248, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "div", 72)(250, "p", 8)(251, "span", 73);
      \u0275\u0275text(252, "$147");
      \u0275\u0275elementEnd();
      \u0275\u0275text(253, " Partial Amount Paid on ");
      \u0275\u0275elementStart(254, "span", 73);
      \u0275\u0275text(255, "Stripe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "p", 74);
      \u0275\u0275element(257, "i", 75);
      \u0275\u0275text(258, "17 Jan 2025");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(259, "a", 77);
      \u0275\u0275text(260, "View All");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(261, "div", 3)(262, "div", 78)(263, "div", 79)(264, "div", 6)(265, "div", 80)(266, "h6", 8);
      \u0275\u0275text(267, "Recent Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "a", 81);
      \u0275\u0275text(269, "View all Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 82)(271, "table", 83)(272, "thead", 84)(273, "tr")(274, "th");
      \u0275\u0275text(275, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "th");
      \u0275\u0275text(277, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "th");
      \u0275\u0275text(279, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "th");
      \u0275\u0275text(281, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "th");
      \u0275\u0275text(283, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "th");
      \u0275\u0275text(285, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(286, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "tbody")(288, "tr")(289, "td")(290, "a", 85);
      \u0275\u0275text(291, "INV00025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "td", 86);
      \u0275\u0275text(293, "$10,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "td");
      \u0275\u0275text(295, "$5,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "td")(297, "span", 87);
      \u0275\u0275text(298, "Paid");
      \u0275\u0275element(299, "i", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "td", 86);
      \u0275\u0275text(301, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "td");
      \u0275\u0275text(303, "04 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "td")(305, "a", 89);
      \u0275\u0275element(306, "i", 43);
      \u0275\u0275text(307, "Pay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(308, "tr")(309, "td")(310, "a", 85);
      \u0275\u0275text(311, "INV00024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "td", 86);
      \u0275\u0275text(313, "$25,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "td");
      \u0275\u0275text(315, "$10,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "td")(317, "span", 90);
      \u0275\u0275text(318, "Unpaid");
      \u0275\u0275element(319, "i", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "td", 86);
      \u0275\u0275text(321, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "td");
      \u0275\u0275text(323, "20 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "td")(325, "a", 92);
      \u0275\u0275element(326, "i", 43);
      \u0275\u0275text(327, "Pay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(328, "tr")(329, "td")(330, "a", 85);
      \u0275\u0275text(331, "INV00023");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "td", 86);
      \u0275\u0275text(333, "$1,20,500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "td");
      \u0275\u0275text(335, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "td")(337, "span", 93);
      \u0275\u0275text(338, "Cancelled");
      \u0275\u0275element(339, "i", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "td", 86);
      \u0275\u0275text(341, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "td");
      \u0275\u0275text(343, "12 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "td")(345, "a", 89);
      \u0275\u0275element(346, "i", 43);
      \u0275\u0275text(347, "Pay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(348, "tr")(349, "td")(350, "a", 85);
      \u0275\u0275text(351, "INV00022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "td", 86);
      \u0275\u0275text(353, "$7,50,300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "td");
      \u0275\u0275text(355, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "td")(357, "span", 95);
      \u0275\u0275text(358, "Partially Paid");
      \u0275\u0275element(359, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "td", 86);
      \u0275\u0275text(361, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "td");
      \u0275\u0275text(363, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "td")(365, "a", 89);
      \u0275\u0275element(366, "i", 43);
      \u0275\u0275text(367, "Pay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(368, "tr")(369, "td")(370, "a", 85);
      \u0275\u0275text(371, "INV00016");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(372, "td", 86);
      \u0275\u0275text(373, "$9,99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "td");
      \u0275\u0275text(375, "$4,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "td")(377, "span", 95);
      \u0275\u0275text(378, "Partially Paid");
      \u0275\u0275element(379, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "td", 86);
      \u0275\u0275text(381, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "td");
      \u0275\u0275text(383, "18 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "td")(385, "a", 89);
      \u0275\u0275element(386, "i", 43);
      \u0275\u0275text(387, "Pay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(388, "tr")(389, "td")(390, "a", 85);
      \u0275\u0275text(391, "INV00015");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(392, "td", 86);
      \u0275\u0275text(393, "$87,650");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "td");
      \u0275\u0275text(395, "$40,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "td")(397, "span", 87);
      \u0275\u0275text(398, "Paid");
      \u0275\u0275element(399, "i", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "td", 86);
      \u0275\u0275text(401, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "td");
      \u0275\u0275text(403, "22 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "td")(405, "a", 92);
      \u0275\u0275element(406, "i", 43);
      \u0275\u0275text(407, "Pay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(408, "tr", 97)(409, "td")(410, "a", 85);
      \u0275\u0275text(411, "INV00014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(412, "td", 86);
      \u0275\u0275text(413, "$69,420");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "td");
      \u0275\u0275text(415, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "td")(417, "span", 95);
      \u0275\u0275text(418, "Partially Paid");
      \u0275\u0275element(419, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "td", 86);
      \u0275\u0275text(421, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "td");
      \u0275\u0275text(423, "15 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "td")(425, "a", 89);
      \u0275\u0275element(426, "i", 43);
      \u0275\u0275text(427, "Pay");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(428, "div", 26)(429, "div", 79)(430, "div", 6)(431, "div", 62)(432, "h6", 28);
      \u0275\u0275text(433, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "h6", 98);
      \u0275\u0275text(435, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "div", 7)(437, "div", 99)(438, "span", 100);
      \u0275\u0275element(439, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "div", 102)(441, "h6", 103);
      \u0275\u0275text(442, "Andrew James");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "p");
      \u0275\u0275text(444, "#INV45478");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(445, "span", 104);
      \u0275\u0275text(446, "+ $989.15");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "div", 105)(448, "div", 99)(449, "span", 100);
      \u0275\u0275element(450, "img", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "div", 102)(452, "h6", 103);
      \u0275\u0275text(453, "John Carter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "p");
      \u0275\u0275text(455, "#INV45477");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(456, "span", 107);
      \u0275\u0275text(457, "- $300.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(458, "h6", 98);
      \u0275\u0275text(459, "Yesterday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "div", 7)(461, "div", 99)(462, "span", 100);
      \u0275\u0275element(463, "img", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "div", 102)(465, "h6", 103);
      \u0275\u0275text(466, "Sophia White");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "p");
      \u0275\u0275text(468, "#INV45476");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(469, "span", 104);
      \u0275\u0275text(470, "+ $669");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(471, "div", 108)(472, "div", 99)(473, "span", 100);
      \u0275\u0275element(474, "img", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "div", 102)(476, "h6", 103);
      \u0275\u0275text(477, "Daniel Martinez");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "p");
      \u0275\u0275text(479, "#INV45475");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(480, "span", 104);
      \u0275\u0275text(481, "+ $474.22");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(148);
      \u0275\u0275property("series", ctx.radialChart.series)("chart", ctx.radialChart.chart)("dataLabels", ctx.radialChart.dataLabels)("plotOptions", ctx.radialChart.plotOptions)("yaxis", ctx.radialChart.yaxis)("legend", ctx.radialChart.legend)("fill", ctx.radialChart.fill)("stroke", ctx.radialChart.stroke)("xaxis", ctx.radialChart.xaxis)("colors", ctx.radialChart.colors)("labels", ctx.radialChart.labels)("fill", ctx.radialChart.fill);
      \u0275\u0275advance(120);
      \u0275\u0275property("routerLink", ctx.routes.customerInvoicereport);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
    }
  }, dependencies: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    RouterLink,
    NgApexchartsModule,
    ChartComponent,
    DateRangePicker2Component
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [
      CommonModule,
      MatSliderModule,
      FormsModule,
      RouterLink,
      NgApexchartsModule,
      DateRangePicker2Component
    ], template: '<!-- Start Content -->\n<div class="">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Dashboard</h6>\n        </div>\n        <div class="custom-daterange-customer">\n            <app-date-range-picker-2/>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Total Invoice</p>\n                            <h6 class="fs-16 fw-semibold"> \u20B9250,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-primary text-white avatar-rounded">\n                            <i class="isax isax-dollar-circle fs-24"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>5.62%</span> from last month</p>\n                </div><!-- end card body -->\n                <div class="position-absolute start-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/income-report-1.svg" alt="img">\n                </div>\n            </div><!-- end card -->\n        </div><!-- end col -->\n\n        <!-- Outstanding -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Outstanding</p>\n                            <h6 class="fs-16 fw-semibold">\u20B9100,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-success text-white avatar-rounded">\n                            <i class="isax isax-bag-2 fs-24"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>11.4%</span> from last month</p>\n                </div><!-- end card body -->\n                <div class="position-absolute start-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/income-report-2.svg" alt="img">\n                </div>\n            </div><!-- end card -->\n        </div>\n        <!-- /Outstanding -->\n\n        <!-- Overdue -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Overdue</p>\n                            <h6 class="fs-16 fw-semibold">\u20B9400,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-warning text-white avatar-rounded">\n                            <i class="isax isax-wallet-3 fs-24"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>8.12%</span> from last month</p>\n                </div><!-- end card body -->\n                <div class="position-absolute start-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/income-report-3.svg" alt="img">\n                </div>\n            </div><!-- end card -->\n        </div>\n        <!-- /Overdue -->\n\n        <!-- Cancelled -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Cancelled</p>\n                            <h6 class="fs-16 fw-semibold">\u20B9300,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-danger text-white avatar-rounded">\n                            <i class="isax isax-wallet-money fs-24"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>7.45%</span> from last month</p>\n                </div><!-- end card body -->\n                <div class="position-absolute start-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/income-report-4.svg" alt="img">\n                </div>\n            </div><!-- end card -->\n        </div>\n        <!-- /Cancelled -->\n\n    </div>\n    <!-- end row -->\n\n    <div class="row">\n\n        <!-- Start Sales Analytics -->\n        <div class="col-xl-4 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body">\n                    <div class="mb-3">\n                        <h6 class="mb-1">Invoice Detail</h6>\n                    </div>\n                    <div class="bg-dark-gradient  p-3 rounded mb-2">\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <h6 class="fs-16 fw-semibold  text-white">#INV215654</h6>\n                            <span class="badge badge-sm bg-danger bg-danger">Due in 8 days</span>\n                        </div>\n                        <div class="row">\n                            <div class="col">\n                                <div>\n                                    <p class="fs-13 text-light mb-1">Issued On</p>\n                                    <h6 class="fs-14 text-white fw-semibold text-truncate">25 Jan 2025</h6>\n                                </div>\n                            </div>\n                            <div class="col">\n                                <div>\n                                    <p class="fs-13 text-light mb-1">Due Date</p>\n                                    <h6 class="fs-14 text-white fw-semibold text-truncate">31 Jan 2025</h6>\n                                </div>\n                            </div>\n                            <div class="col">\n                                <div>\n                                    <p class="fs-13 text-light mb-1">Recurring</p>\n                                    <h6 class="fs-14 text-white fw-semibold text-truncate">Monthly</h6>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card border-0 bg-light mb-3 shadow-none">\n                        <div class="card-body">\n                            <div class="mb-3 pb-2 border-bottom">\n                                <p class="text-dark mb-1">Amount <span class="float-end">$565</span></p>\n                                <p class="text-dark mb-1">GST (9%) <span class="float-end">$18</span></p>\n                                <p class="text-dark mb-1">Amount <span class="text-danger float-end">- $18</span></p>\n                            </div>\n                            <h6>Total (USD) <span class="float-end">$596</span></h6>\n                        </div>\n                    </div>\n                    <div class="row g-2">\n                        <div class="col pt-1">\n                            <a href="javascript:void(0);" class="btn btn-primary w-100 d-flex align-items-center justify-content-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                        </div>\n                        <div class="col pt-1">\n                            <a href="javascript:void(0);" class="btn btn-dark w-100 d-flex align-items-center justify-content-center"><i class="isax isax-document-download5 me-1"></i>Download</a>\n                        </div>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <!-- End Sales Analytics -->\n\n        <!-- Start Invoice Analytics -->\n        <div class="col-xl-4 col-lg-6 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body">\n                    <div class="mb-3">\n                        <h6 class="mb-1">Payment Statistics</h6>\n                    </div>\n                    <div class="mb-2">\n                        <div id="radial-chart2" class="chart-set">\n                            <apx-chart [series]="radialChart.series" \n                       [chart]="radialChart.chart"\n                       [dataLabels]="radialChart.dataLabels"\n                       [plotOptions]="radialChart.plotOptions"\n                       [yaxis]="radialChart.yaxis" \n                       [legend]="radialChart.legend" \n                       [fill]="radialChart.fill"\n                       [stroke]="radialChart.stroke" \n                       [xaxis]="radialChart.xaxis"\n                       [colors]="radialChart.colors"\n                       [labels]="radialChart.labels"\n                       [fill]="radialChart.fill"></apx-chart>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center flex-wrap justify-content-center gap-2 mb-3">\n                        <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-square text-success fs-11 me-1"></i>Paid</p>\n                        <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-square text-primary fs-11 me-1"></i>Partially</p>\n                        <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-square text-warning fs-11 me-1"></i>Unpaid</p>\n                        <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-square text-pink fs-11 me-1"></i>Overdue</p>\n                    </div>\n                    <div class="border rounded p-2 mb-3">\n                        <div class="row g-2">\n                            <div class="col d-flex border-end">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Invoiced</p>\n                                    <h6 class="fs-16 fw-semibold">$9965</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex border-end">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Paid</p>\n                                    <h6 class="fs-16 fw-semibold">$996</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex border-end">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Partial</p>\n                                    <h6 class="fs-16 fw-semibold">$6562</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Unpaid</p>\n                                    <h6 class="fs-16 fw-semibold">$478</h6>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between pt-1 gap-3">\n                        <p class="mb-0">Updated from the last transaction on Sunday, 24 Mar 2025</p>\n                        <a href="javascript:void(0);" class="btn btn-md rounded-2 bg-light flex-shrink-0 fs-16 text-gray-9 border"><i class="isax isax-refresh fs-16"></i></a>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <!-- End Invoice Analytics -->\n\n        <!-- Start Recent Activities -->\n        <div class="col-xl-4 col-lg-6 d-flex">\n            <div class="card flex-fill overflow-hidden">\n                <div class="card-body pb-0">\n                    <div class="mb-0">\n                        <h6 class="mb-1 pb-3 mb-3 border-bottom">Recent Activities</h6>\n                        <div class="recent-activities">\n                            <div class="d-flex align-items-center pb-3">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1">Status Changed to <span class="text-gray-9 fw-semibold">Partially Paid</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>19 Jan 2025</p>\n                                </div>\n                            </div>\n                            <div class="d-flex align-items-center pb-3">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1"><span class="text-gray-9 fw-semibold">$300</span> Partial Amount Paid on <span class="text-gray-9 fw-semibold">Paypal</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>18 Jan 2025</p>\n                                </div>\n                            </div>\n                            <div class="d-flex align-items-center pb-3">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1">New Expenses added <span class="text-gray-9 fw-semibold">#TR018756</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>18 Jan 2025</p>\n                                </div>\n                            </div>\n                            <div class="d-flex align-items-center pb-3">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1">Estimate Created <span class="text-gray-9 fw-semibold">#ES458789</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>17 Jan 2025</p>\n                                </div>\n                            </div>\n                            <div class="d-flex align-items-center pb-0">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1"><span class="text-gray-9 fw-semibold">$147</span> Partial Amount Paid on <span class="text-gray-9 fw-semibold">Stripe</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>17 Jan 2025</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div><!-- end card body -->\n                <a href="javascript:void(0);" class="btn w-100 fs-14 py-2 shadow-lg fw-medium">View All</a>\n            </div><!-- end card -->\n        </div>\n        <!-- End Recent Activities -->\n\n    </div>\n\n    <div class="row">\n\n        <!-- Start Recent Invoices -->\n        <div class="col-xl-8 d-flex">\n            <div class="card flex-fill w-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">\n                        <h6 class="mb-1">Recent Invoices</h6>\n                        <a [routerLink]="routes.customerInvoicereport" class="btn btn-sm btn-dark mb-1">View all Invoices</a>\n                    </div>\n                    <div class="table-responsive border recent-invoice-table table-nowrap">\n                        <table class="table m-0">\n                            <thead class="table-light">\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Amount</th>\n                                    <th>Paid</th>\n                                    <th>Status</th>\n                                    <th>Payment Mode</th>\n                                    <th>Due Date</th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00025</a>\n                                    </td>\n                                    <td class="text-dark">$10,000</td>\n                                    <td>$5,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Paid<i class="isax isax-tick-circle ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Cash</td>\n                                    <td>04 Mar 2025</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00024</a>\n                                    </td>\n                                    <td class="text-dark">$25,750</td>\n                                    <td>$10,750</td>\n                                    <td>\n                                        <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center">Unpaid<i class="isax isax-slash ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Check</td>\n                                    <td>20 Feb 2025</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-soft-info d-inline-flex align-items-center border-0 text-gray-3"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00023</a>\n                                    </td>\n                                    <td class="text-dark">$1,20,500</td>\n                                    <td>$60,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-danger badge-sm d-inline-flex align-items-center">Cancelled<i class="isax isax-close-circle ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Check</td>\n                                    <td>12 Nov 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00022</a>\n                                    </td>\n                                    <td class="text-dark">$7,50,300</td>\n                                    <td>$60,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Partially Paid<i class="isax isax-timer ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Check</td>\n                                    <td>25 Oct 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00016</a>\n                                    </td>\n                                    <td class="text-dark">$9,99,999</td>\n                                    <td>$4,00,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Partially Paid<i class="isax isax-timer ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Cash</td>\n                                    <td>18 Oct 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00015</a>\n                                    </td>\n                                    <td class="text-dark">$87,650</td>\n                                    <td>$40,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Paid<i class="isax isax-tick-circle ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Check</td>\n                                    <td>22 Sep 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-soft-info d-inline-flex align-items-center border-0 text-gray-3"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr class="border-white">\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00014</a>\n                                    </td>\n                                    <td class="text-dark">$69,420</td>\n                                    <td>$30,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Partially Paid<i class="isax isax-timer ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Cash</td>\n                                    <td>15 Sep 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <!-- End Recent Invoices -->\n\n        <!-- Start Recent Transactions -->\n        <div class="col-xl-4 d-flex">\n            <div class="card flex-fill w-100">\n                <div class="card-body">\n                    <div class="mb-0">\n                        <h6 class="mb-3">Recent Transactions</h6>\n                        <h6 class="fs-14 fw-semibold mb-3">Today</h6>\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg rounded-pill border bg-light p-2 flex-shrink-0"><img src="assets/img/icons/paypal-icon.svg" alt="img" class="img-fluid"></span>\n                                <div class="ms-2">\n                                    <h6 class="fs-14 fw-semibold mb-1">Andrew James</h6>\n                                    <p>#INV45478</p>\n                                </div>\n                            </div>\n                            <span class="badge badge-soft-success badge-lg d-inline-flex align-items-center">+ $989.15</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg rounded-pill border bg-light p-2 flex-shrink-0"><img src="assets/img/icons/card-icon.svg" alt="img" class="img-fluid"></span>\n                                <div class="ms-2">\n                                    <h6 class="fs-14 fw-semibold mb-1">John Carter</h6>\n                                    <p>#INV45477</p>\n                                </div>\n                            </div>\n                            <span class="badge badge-soft-danger badge-lg d-inline-flex align-items-center">- $300.12</span>\n                        </div>\n                        <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg rounded-pill border bg-light p-2 flex-shrink-0"><img src="assets/img/icons/card-icon.svg" alt="img" class="img-fluid"></span>\n                                <div class="ms-2">\n                                    <h6 class="fs-14 fw-semibold mb-1">Sophia White</h6>\n                                    <p>#INV45476</p>\n                                </div>\n                            </div>\n                            <span class="badge badge-soft-success badge-lg d-inline-flex align-items-center">+ $669</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg rounded-pill border bg-light p-2 flex-shrink-0"><img src="assets/img/icons/card-icon.svg" alt="img" class="img-fluid"></span>\n                                <div class="ms-2">\n                                    <h6 class="fs-14 fw-semibold mb-1">Daniel Martinez</h6>\n                                    <p>#INV45475</p>\n                                </div>\n                            </div>\n                            <span class="badge badge-soft-success badge-lg d-inline-flex align-items-center">+ $474.22</span>\n                        </div>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <!-- End Recent Transactions -->\n\n    </div>\n</div>\n<!-- End Content -->' }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/customers/dashboard/dashboard.component.ts", lineNumber: 53 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-QFASQ2ZG.js.map
