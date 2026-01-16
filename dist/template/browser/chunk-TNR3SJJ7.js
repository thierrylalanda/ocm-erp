import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-Z3POZ3YG.js";
import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-5H6GXSFV.js";
import "./chunk-YETY7SH2.js";
import "./chunk-M4MC2D7Y.js";
import "./chunk-UNWSAGEL.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import "./chunk-6H2KZBXU.js";
import "./chunk-KKWHEPUK.js";
import "./chunk-BLAAMQ2R.js";
import {
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import {
  RouterLink
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
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

// src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.ts
var _c0 = ["chart"];
var AdminDashboard2Component = class _AdminDashboard2Component {
  routes = routes;
  chart;
  salesChart;
  invoiceChart;
  constructor() {
    this.salesChart = {
      chart: {
        height: 300,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      label: {
        show: false
      },
      colors: ["#2F80ED", "#E2B93B"],
      series: [{
        name: "Received ",
        data: [80, 100, 50, 50, 80, 60, 100, 60, 40, 55, 30, 70]
      }, {
        name: "Pending ",
        data: [40, 60, 60, 60, 20, 80, 40, 20, 50, 70, 40, 60]
      }],
      grid: {
        borderColor: "#E2E4E6",
        strokeDashArray: 5,
        padding: {
          right: -10,
          left: 0
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          offsetX: -15,
          formatter: (val) => {
            return "$" + val / 1;
          }
        }
      },
      fill: {
        opacity: 1
      }
    };
    this.invoiceChart = {
      series: [40, 35, 25],
      // Percentages for each section
      chart: {
        type: "donut",
        height: 240
      },
      labels: ["Invoiced", "Received", "Pending"],
      // Labels for the data
      colors: ["#2F80ED", "#27AE60", "#E2B93B"],
      // Colors from the image
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: false,
              total: {
                show: true,
                label: "Leads",
                formatter: function(w) {
                  return "589";
                }
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true
      },
      legend: {
        show: true,
        position: "bottom"
      },
      label: {
        show: false
      }
    };
  }
  static \u0275fac = function AdminDashboard2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboard2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboard2Component, selectors: [["app-admin-dashboard-2"]], viewQuery: function AdminDashboard2Component_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 497, vars: 35, consts: [[1, ""], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-4"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["data-bs-toggle", "dropdown", "href", "javascript:void(0);", "role", "button", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-start"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-money-send", "me-2"], [1, "isax", "isax-money-add", "me-2"], [1, "isax", "isax-money-recive", "me-2"], [1, "isax", "isax-document", "me-2"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-document-forward", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-sm-6", "col-xl-3", "d-flex"], [1, "card", "overflow-hidden", "z-1", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-2", "pb-2"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "avatar-lg", "bg-primary", "text-white", "avatar-rounded"], [1, "isax", "isax-receipt-item", "fs-16"], [1, "fs-13"], [1, "text-success", "d-inline-flex", "align-items-center"], [1, "isax", "isax-send", "me-1"], [1, "position-absolute", "end-0", "bottom-0", "z-n1"], ["src", "assets/img/bg/card-bg-04.svg", "alt", "img"], [1, "avatar", "avatar-lg", "bg-success", "text-white", "avatar-rounded"], [1, "isax", "isax-tick-circle", "fs-16"], ["src", "assets/img/bg/card-bg-05.svg", "alt", "img"], [1, "avatar", "avatar-lg", "bg-warning", "text-white", "avatar-rounded"], [1, "isax", "isax-timer", "fs-16"], ["src", "assets/img/bg/card-bg-06.svg", "alt", "img"], [1, "avatar", "avatar-lg", "bg-danger", "text-white", "avatar-rounded"], [1, "isax", "isax-information", "fs-16"], [1, "text-danger", "d-inline-flex", "align-items-center"], [1, "isax", "isax-received", "me-1"], ["src", "assets/img/bg/card-bg-07.svg", "alt", "img"], [1, "col-xl-8", "d-flex"], [1, "card", "flex-fill"], [1, "card-body", "pb-0"], [1, "mb-3", "d-flex", "align-items-center", "justify-content-between"], [1, "select-sm", "mb-1"], ["placeholder", "Monthly", 1, "custom-mat-select", "select"], ["value", "1"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3"], [1, "fs-13", "mb-1"], [1, "fs-16", "fw-semibold", "text-primary"], [1, "fs-16", "fw-semibold", "text-success"], [1, "fs-16", "fw-semibold", "text-danger"], [1, "d-flex", "align-items-center", "gap-2"], [1, "fs-13", "text-title", "d-flex", "align-items-center", "mb-0"], [1, "fa-solid", "fa-circle", "text-info", "fs-12", "me-1"], [1, "fa-solid", "fa-circle", "text-warning", "fs-12", "me-1"], ["id", "sales_analytics"], [3, "series", "labels", "chart", "dataLabels", "plotOptions", "yaxis", "fill", "tooltip", "xaxis", "colors", "legend", "grid"], [1, "col-xl-4", "d-flex"], ["id", "invoice_analytics"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-3", "mb-3"], [1, "fa-solid", "fa-square", "text-primary", "fs-12", "me-1"], [1, "fa-solid", "fa-square", "text-success", "fs-12", "me-1"], [1, "fa-solid", "fa-square", "text-warning", "fs-12", "me-1"], [1, "border", "rounded", "p-2"], [1, "row", "g-2"], [1, "col", "d-flex", "border-end"], [1, "text-center", "flex-fill"], [1, "col", "d-flex"], [1, "col-lg-6"], [1, "card"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "flex-wrap", "mb-3"], [1, "btn", "btn-sm", "btn-dark", "mb-1", 3, "routerLink"], [1, "table-responsive", "border", "table-nowrap"], [1, "table", "m-0"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/users/user-25.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "badge", "badge-soft-success", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle", "ms-1"], ["src", "assets/img/users/user-19.jpg", "alt", "img", 1, "rounded-circle"], [1, "badge", "badge-soft-warning", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-slash", "ms-1"], ["src", "assets/img/users/user-16.jpg", "alt", "img", 1, "rounded-circle"], [1, "badge", "badge-soft-danger", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-close-circle", "ms-1"], ["src", "assets/img/users/user-08.jpg", "alt", "img", 1, "rounded-circle"], [1, "badge", "badge-soft-info", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-timer", "ms-1"], ["src", "assets/img/users/user-15.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-39.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-21.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-22.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-05.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-38.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-03.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-24.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-06.jpg", "alt", "img", 1, "rounded-circle"]], template: function AdminDashboard2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "a", 4);
      \u0275\u0275text(8, " Create New ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ul", 5)(10, "li")(11, "a", 6);
      \u0275\u0275element(12, "i", 7);
      \u0275\u0275text(13, "Invoice ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 6);
      \u0275\u0275element(16, "i", 8);
      \u0275\u0275text(17, "Expense ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 6);
      \u0275\u0275element(20, "i", 9);
      \u0275\u0275text(21, "Credit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 6);
      \u0275\u0275element(24, "i", 10);
      \u0275\u0275text(25, "Debit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 6);
      \u0275\u0275element(28, "i", 11);
      \u0275\u0275text(29, "Purchase Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 6);
      \u0275\u0275element(32, "i", 12);
      \u0275\u0275text(33, "Quotation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li")(35, "a", 6);
      \u0275\u0275element(36, "i", 13);
      \u0275\u0275text(37, "Delivery Challan ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 3)(39, "a", 14);
      \u0275\u0275element(40, "i", 15);
      \u0275\u0275text(41, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul", 16)(43, "li")(44, "a", 17);
      \u0275\u0275text(45, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 17);
      \u0275\u0275text(48, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(49, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 18)(51, "div", 19)(52, "div", 20)(53, "div", 21)(54, "div", 22)(55, "div")(56, "p", 23);
      \u0275\u0275text(57, "Amount Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "h6", 24);
      \u0275\u0275text(59, "$25,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "span", 25);
      \u0275\u0275element(61, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "p", 27)(63, "span", 28);
      \u0275\u0275element(64, "i", 29);
      \u0275\u0275text(65, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 30);
      \u0275\u0275element(68, "img", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 19)(70, "div", 20)(71, "div", 21)(72, "div", 22)(73, "div")(74, "p", 23);
      \u0275\u0275text(75, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "h6", 24);
      \u0275\u0275text(77, "18,500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "span", 32);
      \u0275\u0275element(79, "i", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "p", 27)(81, "span", 28);
      \u0275\u0275element(82, "i", 29);
      \u0275\u0275text(83, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(84, " from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 30);
      \u0275\u0275element(86, "img", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 19)(88, "div", 20)(89, "div", 21)(90, "div", 22)(91, "div")(92, "p", 23);
      \u0275\u0275text(93, "Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "h6", 24);
      \u0275\u0275text(95, "6,500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "span", 35);
      \u0275\u0275element(97, "i", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "p", 27)(99, "span", 28);
      \u0275\u0275element(100, "i", 29);
      \u0275\u0275text(101, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, " from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 30);
      \u0275\u0275element(104, "img", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "div", 19)(106, "div", 20)(107, "div", 21)(108, "div", 22)(109, "div")(110, "p", 23);
      \u0275\u0275text(111, "Estimates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "h6", 24);
      \u0275\u0275text(113, "2,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "span", 38);
      \u0275\u0275element(115, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "p", 27)(117, "span", 40);
      \u0275\u0275element(118, "i", 41);
      \u0275\u0275text(119, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(120, " from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 30);
      \u0275\u0275element(122, "img", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(123, "div", 18)(124, "div", 43)(125, "div", 44)(126, "div", 45)(127, "div", 46)(128, "h6", 23);
      \u0275\u0275text(129, "Sales Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 47)(131, "mat-select", 48)(132, "mat-option", 49);
      \u0275\u0275text(133, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-option", 49);
      \u0275\u0275text(135, "Weekly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "mat-option", 49);
      \u0275\u0275text(137, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(138, "div", 50)(139, "div")(140, "div", 51)(141, "div")(142, "p", 52);
      \u0275\u0275text(143, "Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "h6", 53);
      \u0275\u0275text(145, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div")(147, "p", 52);
      \u0275\u0275text(148, "Receipts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "h6", 54);
      \u0275\u0275text(150, "$2100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div")(152, "p", 52);
      \u0275\u0275text(153, "Expenses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "h6", 55);
      \u0275\u0275text(155, "$300");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div")(157, "p", 52);
      \u0275\u0275text(158, "Earnings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "h6", 24);
      \u0275\u0275text(160, "$700");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(161, "div", 56)(162, "p", 57);
      \u0275\u0275element(163, "i", 58);
      \u0275\u0275text(164, "Received ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "p", 57);
      \u0275\u0275element(166, "i", 59);
      \u0275\u0275text(167, "Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 60);
      \u0275\u0275element(169, "apx-chart", 61);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(170, "div", 62)(171, "div", 44)(172, "div", 21)(173, "div", 46)(174, "h6", 23);
      \u0275\u0275text(175, "Invoice Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 47)(177, "mat-select", 48)(178, "mat-option", 49);
      \u0275\u0275text(179, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "mat-option", 49);
      \u0275\u0275text(181, "Weekly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "mat-option", 49);
      \u0275\u0275text(183, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(184, "div", 63);
      \u0275\u0275element(185, "apx-chart", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 64)(187, "p", 57);
      \u0275\u0275element(188, "i", 65);
      \u0275\u0275text(189, "Invoiced ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "p", 57);
      \u0275\u0275element(191, "i", 66);
      \u0275\u0275text(192, "Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "p", 57);
      \u0275\u0275element(194, "i", 67);
      \u0275\u0275text(195, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "div", 68)(197, "div", 69)(198, "div", 70)(199, "div", 71)(200, "p", 52);
      \u0275\u0275text(201, "Invoiced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "h6", 24);
      \u0275\u0275text(203, "$9965");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "div", 70)(205, "div", 71)(206, "p", 52);
      \u0275\u0275text(207, "Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "h6", 24);
      \u0275\u0275text(209, "$996");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(210, "div", 72)(211, "div", 71)(212, "p", 52);
      \u0275\u0275text(213, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "h6", 24);
      \u0275\u0275text(215, "$478");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(216, "div", 18)(217, "div", 73)(218, "div", 74)(219, "div", 21)(220, "div", 75)(221, "h6", 23);
      \u0275\u0275text(222, "Recent Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "a", 76);
      \u0275\u0275text(224, "View all");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div", 77)(226, "table", 78)(227, "thead")(228, "tr")(229, "th");
      \u0275\u0275text(230, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "th");
      \u0275\u0275text(232, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "th");
      \u0275\u0275text(234, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "th");
      \u0275\u0275text(236, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "tbody")(238, "tr")(239, "td")(240, "div", 79)(241, "a", 80);
      \u0275\u0275element(242, "img", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div")(244, "h6", 82)(245, "a", 83);
      \u0275\u0275text(246, "Emily Clark");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(247, "td", 84);
      \u0275\u0275text(248, "$10,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "td");
      \u0275\u0275text(250, "04 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "td")(252, "span", 85);
      \u0275\u0275text(253, "Paid");
      \u0275\u0275element(254, "i", 86);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(255, "tr")(256, "td")(257, "div", 79)(258, "a", 80);
      \u0275\u0275element(259, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "div")(261, "h6", 82)(262, "a", 83);
      \u0275\u0275text(263, "John Carter");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(264, "td", 84);
      \u0275\u0275text(265, "$25,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "td");
      \u0275\u0275text(267, "20 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "td")(269, "span", 88);
      \u0275\u0275text(270, "Partially Paid");
      \u0275\u0275element(271, "i", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(272, "tr")(273, "td")(274, "div", 79)(275, "a", 80);
      \u0275\u0275element(276, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "div")(278, "h6", 82)(279, "a", 83);
      \u0275\u0275text(280, "Sophia White");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(281, "td", 84);
      \u0275\u0275text(282, "$1,20,500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "td");
      \u0275\u0275text(284, "12 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "td")(286, "span", 91);
      \u0275\u0275text(287, "Overdue");
      \u0275\u0275element(288, "i", 92);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "tr")(290, "td")(291, "div", 79)(292, "a", 80);
      \u0275\u0275element(293, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div")(295, "h6", 82)(296, "a", 83);
      \u0275\u0275text(297, "Michael Johnson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(298, "td", 84);
      \u0275\u0275text(299, "$7,50,300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "td");
      \u0275\u0275text(301, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "td")(303, "span", 94);
      \u0275\u0275text(304, "Sent");
      \u0275\u0275element(305, "i", 95);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(306, "tr")(307, "td")(308, "div", 79)(309, "a", 80);
      \u0275\u0275element(310, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "div")(312, "h6", 82)(313, "a", 83);
      \u0275\u0275text(314, "Daniel Martinez");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(315, "td", 84);
      \u0275\u0275text(316, "$9,99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "td");
      \u0275\u0275text(318, "18 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "td")(320, "span", 94);
      \u0275\u0275text(321, "Sent");
      \u0275\u0275element(322, "i", 95);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(323, "tr")(324, "td")(325, "div", 79)(326, "a", 80);
      \u0275\u0275element(327, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "div")(329, "h6", 82)(330, "a", 83);
      \u0275\u0275text(331, "Charlotte Brown");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(332, "td", 84);
      \u0275\u0275text(333, "$87,650");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "td");
      \u0275\u0275text(335, "22 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "td")(337, "span", 85);
      \u0275\u0275text(338, "Paid");
      \u0275\u0275element(339, "i", 86);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(340, "tr")(341, "td")(342, "div", 79)(343, "a", 80);
      \u0275\u0275element(344, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "div")(346, "h6", 82)(347, "a", 83);
      \u0275\u0275text(348, "William Parker");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(349, "td", 84);
      \u0275\u0275text(350, "$69,420");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "td");
      \u0275\u0275text(352, "15 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "td")(354, "span", 94);
      \u0275\u0275text(355, "Sent");
      \u0275\u0275element(356, "i", 95);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(357, "div", 73)(358, "div", 74)(359, "div", 21)(360, "div", 75)(361, "h6", 23);
      \u0275\u0275text(362, "Recent Estimates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "a", 76);
      \u0275\u0275text(364, "View all");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "div", 77)(366, "table", 78)(367, "thead")(368, "tr")(369, "th");
      \u0275\u0275text(370, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "th");
      \u0275\u0275text(372, "Expiry Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "th");
      \u0275\u0275text(374, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "th");
      \u0275\u0275text(376, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(377, "tbody")(378, "tr")(379, "td")(380, "div", 79)(381, "a", 80);
      \u0275\u0275element(382, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "div")(384, "h6", 82)(385, "a", 83);
      \u0275\u0275text(386, "Olivia Harris");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(387, "td");
      \u0275\u0275text(388, "10 Mar 2020");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "td", 84);
      \u0275\u0275text(390, "$24,050");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "td")(392, "span", 85);
      \u0275\u0275text(393, "Accepted");
      \u0275\u0275element(394, "i", 86);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(395, "tr")(396, "td")(397, "div", 79)(398, "a", 80);
      \u0275\u0275element(399, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "div")(401, "h6", 82)(402, "a", 83);
      \u0275\u0275text(403, "David Anderson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(404, "td");
      \u0275\u0275text(405, "26 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "td", 84);
      \u0275\u0275text(407, "$16,362");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "td")(409, "span", 88);
      \u0275\u0275text(410, "Expired");
      \u0275\u0275element(411, "i", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(412, "tr")(413, "td")(414, "div", 79)(415, "a", 80);
      \u0275\u0275element(416, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "div")(418, "h6", 82)(419, "a", 83);
      \u0275\u0275text(420, "Emma Lewis");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(421, "td");
      \u0275\u0275text(422, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "td", 84);
      \u0275\u0275text(424, "$1,45,355");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "td")(426, "span", 94);
      \u0275\u0275text(427, "Sent");
      \u0275\u0275element(428, "i", 95);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(429, "tr")(430, "td")(431, "div", 79)(432, "a", 80);
      \u0275\u0275element(433, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "div")(435, "h6", 82)(436, "a", 83);
      \u0275\u0275text(437, "Robert Thomas");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(438, "td");
      \u0275\u0275text(439, "31 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "td", 84);
      \u0275\u0275text(441, "$35,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "td")(443, "span", 85);
      \u0275\u0275text(444, "Accepted");
      \u0275\u0275element(445, "i", 86);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(446, "tr")(447, "td")(448, "div", 79)(449, "a", 80);
      \u0275\u0275element(450, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "div")(452, "h6", 82)(453, "a", 83);
      \u0275\u0275text(454, "Isabella Scott");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(455, "td");
      \u0275\u0275text(456, "24 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "td", 84);
      \u0275\u0275text(458, "$99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "td")(460, "span", 88);
      \u0275\u0275text(461, "Expired");
      \u0275\u0275element(462, "i", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(463, "tr")(464, "td")(465, "div", 79)(466, "a", 80);
      \u0275\u0275element(467, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "div")(469, "h6", 82)(470, "a", 83);
      \u0275\u0275text(471, "Mia Thompson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(472, "td");
      \u0275\u0275text(473, "28 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "td", 84);
      \u0275\u0275text(475, "$1,27,900");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "td")(477, "span", 94);
      \u0275\u0275text(478, "Sent");
      \u0275\u0275element(479, "i", 95);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(480, "tr")(481, "td")(482, "div", 79)(483, "a", 80);
      \u0275\u0275element(484, "img", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "div")(486, "h6", 82)(487, "a", 83);
      \u0275\u0275text(488, "Amelia Robinson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(489, "td");
      \u0275\u0275text(490, "21 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "td", 84);
      \u0275\u0275text(492, "$39,280");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "td")(494, "span", 85);
      \u0275\u0275text(495, "Accepted");
      \u0275\u0275element(496, "i", 86);
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.expenses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addCreditNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDebitNotes);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addPurchaseOrder);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addQuotations);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.addDeliveryChallan);
      \u0275\u0275advance(134);
      \u0275\u0275property("series", ctx.salesChart.series)("labels", ctx.salesChart.labels)("chart", ctx.salesChart.chart)("dataLabels", ctx.salesChart.dataLabels)("plotOptions", ctx.salesChart.plotOptions)("yaxis", ctx.salesChart.yaxis)("fill", ctx.salesChart.fill)("tooltip", ctx.salesChart.tooltip)("xaxis", ctx.salesChart.xaxis)("colors", ctx.salesChart.colors)("legend", ctx.salesChart.legend)("grid", ctx.salesChart.grid)("fill", ctx.salesChart.fill);
      \u0275\u0275advance(16);
      \u0275\u0275property("series", ctx.invoiceChart.series)("labels", ctx.invoiceChart.labels)("chart", ctx.invoiceChart.chart)("dataLabels", ctx.invoiceChart.dataLabels)("plotOptions", ctx.invoiceChart.plotOptions)("yaxis", ctx.invoiceChart.yaxis)("fill", ctx.invoiceChart.fill)("tooltip", ctx.invoiceChart.tooltip)("xaxis", ctx.invoiceChart.xaxis)("colors", ctx.invoiceChart.colors)("legend", ctx.invoiceChart.legend)("grid", ctx.invoiceChart.grid)("fill", ctx.invoiceChart.fill);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(140);
      \u0275\u0275property("routerLink", ctx.routes.quotationList);
    }
  }, dependencies: [CommonModule, NgApexchartsModule, ChartComponent, RouterLink, DateRangePickerComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboard2Component, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard-2", imports: [CommonModule, NgApexchartsModule, RouterLink, DateRangePickerComponent, MatSelectModule], template: '\n<div class="">\n\n    <!-- Breadcrumb -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-4">\n        <div>\n            <h6>Dashboard</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="dropdown me-1">\n                <a class="btn btn-primary d-flex align-items-center justify-content-center dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">\n                    Create New\n                </a>\n                <ul class="dropdown-menu dropdown-menu-start">\n                    <li>\n                        <a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-document-text-1 me-2"></i>Invoice\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-money-send me-2"></i>Expense\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-money-add me-2"></i>Credit Notes\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-money-recive me-2"></i>Debit Notes\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-document me-2"></i>Purchase Order\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-document-download me-2"></i>Quotation\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-document-forward me-2"></i>Delivery Challan\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class="dropdown me-1">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n            \n            <app-date-range-picker></app-date-range-picker>\n        </div>\n    </div>\n    <!-- /Breadcrumb -->\n\n    <div class="row">\n\n        <!-- Amount -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n                        <div>\n                            <p class="mb-1">Amount Due</p>\n                            <h6 class="fs-16 fw-semibold">$25,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-primary text-white avatar-rounded">\n                            <i class="isax isax-receipt-item fs-16"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>5.62%</span> from last month</p>\n                </div>\n                <div class="position-absolute end-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/card-bg-04.svg" alt="img">\n                </div>\n            </div>\n        </div>\n        <!-- /Amount -->\n\n        <!-- Customers -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n                        <div>\n                            <p class="mb-1">Customers</p>\n                            <h6 class="fs-16 fw-semibold">18,500</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-success text-white avatar-rounded">\n                            <i class="isax isax-tick-circle fs-16"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>11.4%</span> from last month</p>\n                </div>\n                <div class="position-absolute end-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/card-bg-05.svg" alt="img">\n                </div>\n            </div>\n        </div>\n        <!-- /Customers -->\n\n        <!-- Invoices -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n                        <div>\n                            <p class="mb-1">Invoices</p>\n                            <h6 class="fs-16 fw-semibold">6,500</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-warning text-white avatar-rounded">\n                            <i class="isax isax-timer fs-16"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>8.52%</span> from last month</p>\n                </div>\n                <div class="position-absolute end-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/card-bg-06.svg" alt="img">\n                </div>\n            </div>\n        </div>\n        <!-- /Invoices -->\n\n        <!-- Estimates -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n                        <div>\n                            <p class="mb-1">Estimates</p>\n                            <h6 class="fs-16 fw-semibold">2,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-danger text-white avatar-rounded">\n                            <i class="isax isax-information fs-16"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-danger d-inline-flex align-items-center"><i class="isax isax-received me-1"></i>7.45%</span> from last month</p>\n                </div>\n                <div class="position-absolute end-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/card-bg-07.svg" alt="img">\n                </div>\n            </div>\n        </div>\n        <!-- /Estimates -->\n\n    </div>\n\n    <div class="row">\n\n        <!-- Sales Analytics -->\n        <div class="col-xl-8 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body pb-0">\n                    <div class="mb-3 d-flex align-items-center justify-content-between">\n                        <h6 class="mb-1">Sales Analytics</h6>\n                        <div class="select-sm mb-1">\n                            <mat-select class="custom-mat-select select" placeholder="Monthly">\n                                <mat-option value="1">Monthly</mat-option>\n                                <mat-option value="1">Weekly</mat-option>\n                                <mat-option value="1">Yearly</mat-option>\n                            </mat-select>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                        <div>\n                            <div class="d-flex align-items-center flex-wrap gap-3">\n                                <div>\n                                    <p class="fs-13 mb-1">Total Sales</p>\n                                    <h6 class="fs-16 fw-semibold text-primary">$1000</h6>\n                                </div>\n                                <div>\n                                    <p class="fs-13 mb-1">Receipts</p>\n                                    <h6 class="fs-16 fw-semibold text-success">$2100</h6>\n                                </div>\n                                <div>\n                                    <p class="fs-13 mb-1">Expenses</p>\n                                    <h6 class="fs-16 fw-semibold text-danger">$300</h6>\n                                </div>\n                                <div>\n                                    <p class="fs-13 mb-1">Earnings</p>\n                                    <h6 class="fs-16 fw-semibold">$700</h6>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="d-flex align-items-center gap-2">\n                            <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-circle text-info fs-12 me-1"></i>Received </p>\n                            <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-circle text-warning fs-12 me-1"></i>Pending</p>\n                        </div>\n                    </div>\n                    <div id="sales_analytics">\n                        <apx-chart [series]="salesChart.series" \n                       [labels]="salesChart.labels"\n                       [chart]="salesChart.chart"\n                       [dataLabels]="salesChart.dataLabels"\n                       [plotOptions]="salesChart.plotOptions"\n                       [yaxis]="salesChart.yaxis" \n                       [fill]="salesChart.fill"\n                       [tooltip]="salesChart.tooltip" \n                       [xaxis]="salesChart.xaxis"\n                       [colors]="salesChart.colors"\n                       [legend]="salesChart.legend"\n                       [grid]="salesChart.grid"\n                       [fill]="salesChart.fill"></apx-chart>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Sales Analytics -->\n\n        <!-- Invoice Analytics -->\n        <div class="col-xl-4 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body">\n                    <div class="mb-3 d-flex align-items-center justify-content-between">\n                        <h6 class="mb-1">Invoice Analytics</h6>\n                        <div class="select-sm mb-1">\n                            <mat-select class="custom-mat-select select" placeholder="Monthly">\n                                <mat-option value="1">Monthly</mat-option>\n                                <mat-option value="1">Weekly</mat-option>\n                                <mat-option value="1">Yearly</mat-option>\n                            </mat-select>\n                        </div>\n                    </div>\n                    <div id="invoice_analytics">\n                        <apx-chart [series]="invoiceChart.series" \n                        [labels]="invoiceChart.labels"\n                        [chart]="invoiceChart.chart"\n                        [dataLabels]="invoiceChart.dataLabels"\n                        [plotOptions]="invoiceChart.plotOptions"\n                        [yaxis]="invoiceChart.yaxis" \n                        [fill]="invoiceChart.fill"\n                        [tooltip]="invoiceChart.tooltip" \n                        [xaxis]="invoiceChart.xaxis"\n                        [colors]="invoiceChart.colors"\n                        [legend]="invoiceChart.legend"\n                        [grid]="invoiceChart.grid"\n                        [fill]="invoiceChart.fill"></apx-chart>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-center gap-3 mb-3">\n                        <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-square text-primary fs-12 me-1"></i>Invoiced </p>\n                        <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-square text-success fs-12 me-1"></i>Received</p>\n                        <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-square text-warning fs-12 me-1"></i>Pending</p>\n                    </div>\n                    <div class="border rounded p-2">\n                        <div class="row g-2">\n                            <div class="col d-flex border-end ">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Invoiced</p>\n                                    <h6 class="fs-16 fw-semibold">$9965</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex border-end ">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Received</p>\n                                    <h6 class="fs-16 fw-semibold">$996</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Pending</p>\n                                    <h6 class="fs-16 fw-semibold">$478</h6>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Invoice Analytics -->\n\n    </div>\n\n   <!-- Start row -->\n   <div class="row">\n\n    <!-- Start Recent Invoices -->\n    <div class="col-lg-6">\n        <div class="card">\n            <div class="card-body">\n                <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">\n                    <h6 class="mb-1">Recent Invoices</h6>\n                    <a [routerLink]="routes.invoiceList" class="btn btn-sm btn-dark mb-1">View all</a>\n                </div>\n                <div class="table-responsive border table-nowrap">\n                    <table class="table m-0">\n                        <thead>\n                            <tr>\n                                <th>Customer</th>\n                                <th>Amount</th>\n                                <th>Due Date</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-25.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Emily Clark</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$10,000</td>\n                                <td>04 Mar 2025</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Paid<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-19.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">John Carter</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$25,750</td>\n                                <td>20 Feb 2025</td>\n                                <td>\n                                    <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center">Partially Paid<i class="isax isax-slash ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-16.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Sophia White</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$1,20,500</td>\n                                <td>12 Nov 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-danger badge-sm d-inline-flex align-items-center">Overdue<i class="isax isax-close-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-08.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Michael Johnson</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$7,50,300</td>\n                                <td>25 Oct 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-15.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Daniel Martinez</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$9,99,999</td>\n                                <td>18 Oct 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-39.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Charlotte Brown</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$87,650</td>\n                                <td>22 Sep 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Paid<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-21.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">William Parker</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$69,420</td>\n                                <td>15 Sep 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div><!-- End card body -->\n        </div><!-- End card -->\n    </div><!-- End col -->\n    <!-- End Recent Invoices -->\n\n    <!-- Start Recent Estimates -->\n    <div class="col-lg-6">\n        <div class="card">\n            <div class="card-body">\n                <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">\n                    <h6 class="mb-1">Recent Estimates</h6>\n                    <a [routerLink]="routes.quotationList" class="btn btn-sm btn-dark mb-1">View all</a>\n                </div>\n                <div class="table-responsive border table-nowrap">\n                    <table class="table m-0">\n                        <thead>\n                            <tr>\n                                <th>Customer</th>\n                                <th>Expiry Date</th>\n                                <th>Amount</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Olivia Harris</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>10 Mar 2020</td>\n                                <td class="text-dark">$24,050</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-05.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">David Anderson</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>26 Feb 2025</td>\n                                <td class="text-dark">$16,362</td>\n                                <td>\n                                    <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center">Expired<i class="isax isax-slash ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-38.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Emma Lewis</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>18 Nov 2024</td>\n                                <td class="text-dark">$1,45,355</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-03.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Robert Thomas</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>31 Oct 2024</td>\n                                <td class="text-dark">$35,000</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-24.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Isabella Scott</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>24 Oct 2024</td>\n                                <td class="text-dark">$99,999</td>\n                                <td>\n                                    <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center">Expired<i class="isax isax-slash ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Mia Thompson</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>28 Sep 2024</td>\n                                <td class="text-dark">$1,27,900</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-06.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Amelia Robinson</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>21 Sep 2024</td>\n                                <td class="text-dark">$39,280</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div><!-- End card body -->\n        </div><!-- End card -->\n    </div><!-- End col -->\n    <!-- End Recent Estimates -->\n\n</div>\n<!-- End row -->\n</div>\n\n\n\n\n' }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboard2Component, { className: "AdminDashboard2Component", filePath: "src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.ts", lineNumber: 50 });
})();
export {
  AdminDashboard2Component
};
//# sourceMappingURL=chunk-TNR3SJJ7.js.map
