import {
  Chart,
  registerables
} from "./chunk-CRH4G5U2.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-Z3POZ3YG.js";
import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
import {
  SettingsService
} from "./chunk-GULTOLI6.js";
import "./chunk-6H2KZBXU.js";
import "./chunk-KKWHEPUK.js";
import "./chunk-BLAAMQ2R.js";
import {
  CommonService,
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
  ɵɵdirectiveInject,
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

// src/app/features/dashboard/modal-dashboard/modal-dashboard.component.ts
var _c0 = ["chart"];
Chart.register(...registerables);
var ModalDashboardComponent = class _ModalDashboardComponent {
  common;
  layout;
  routes = routes;
  base = "";
  chart;
  revenueChart;
  invoiceIncome;
  salesChart;
  constructor(common, layout) {
    this.common = common;
    this.layout = layout;
    this.common.baseRoute.subscribe((res) => {
      this.base = res;
      if (this.base === "layout-single") {
        layout.changeLayoutMode("single");
      } else if (this.base === "layout-default") {
        layout.changeLayoutMode("default");
      } else if (this.base === "layout-mini") {
        layout.changeLayoutMode("mini");
      } else if (this.base === "layout-transparent") {
        layout.changeLayoutMode("transparent");
      } else if (this.base === "layout-without-header") {
        layout.changeLayoutMode("without-header");
      } else if (this.base === "layout-rtl") {
        layout.changeLayoutMode("rtl");
      } else if (this.base === "layout-boxed") {
        layout.changeLayoutWidth("box");
      } else if (this.base === "layout-dark") {
        layout.changeThemeColor("dark");
      } else {
      }
    });
    this.revenueChart = {
      chart: {
        height: 360,
        type: "bar",
        stacked: true,
        toolbar: {
          show: false
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {}
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
          borderRadiusWhenStacked: "all",
          endingShape: "rounded"
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#7539FF", "#F8F5FF"],
      series: [{
        name: "Outstanding",
        data: [0, 10, 30, 50, 25, 38, 40]
      }, {
        name: "Received ",
        data: [30, 30, 80, 70, 80, 80, 80]
      }],
      grid: {
        borderColor: "#E2E4E6",
        strokeDashArray: 5,
        padding: {
          right: -10,
          left: -10
        }
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: { show: false }
      },
      fill: {
        opacity: 1
      }
    };
    this.invoiceIncome = {
      chart: {
        height: 60,
        type: "area",
        background: "#ffffff",
        toolbar: {
          show: false
        }
      },
      colors: ["#27AE60"],
      fill: {
        type: "solid",
        opacity: 0
        // Ensure solid fill
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      series: [{
        name: "Income",
        data: [30, 35, 45, 40, 55, 45, 56, 53, 68, 63, 70, 80]
      }],
      grid: {
        show: false,
        // Set false to hide all grid lines
        padding: { left: -10, right: -10, top: -30, bottom: -28 }
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: { show: false }
        // Hides Y-axis values
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: { show: false }
      }
    };
    this.salesChart = {
      series: [35, 40, 25],
      // Percentages for each section
      chart: {
        type: "donut",
        height: 300
      },
      labels: ["Dell XPS 13", "Nike T-shirt", "Apple iPhone 15"],
      // Labels for the data
      colors: ["#F38BBB", "#5297FE", "#7DCEA0"],
      // Colors from the image
      plotOptions: {
        pie: {
          startAngle: -110,
          // Start from the top
          endAngle: 110,
          // End at the bottom
          donut: {
            size: "60%",
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
        enabled: false
      },
      legend: {
        show: false
      },
      label: {
        show: false
      }
    };
  }
  ngOnDestroy() {
    this.layout.layoutMode.next("default");
    this.layout.themeColor.next("light");
    this.layout.changeLayoutMode("default");
    this.layout.changeLayoutWidth("fluid");
    this.layout.changeThemeColor("light");
  }
  static \u0275fac = function ModalDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalDashboardComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(SettingsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalDashboardComponent, selectors: [["app-modal-dashboard"]], viewQuery: function ModalDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 849, vars: 102, consts: [[1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-4"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["data-bs-toggle", "dropdown", "href", "javascript:void(0);", "role", "button", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-start"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-money-send", "me-2"], [1, "isax", "isax-money-add", "me-2"], [1, "isax", "isax-money-recive", "me-2"], [1, "isax", "isax-document", "me-2"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-document-forward", "me-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "bg-primary", "rounded", "welcome-wrap", "position-relative", "mb-4"], [1, "row"], [1, "col-lg-8", "col-md-9", "col-sm-7"], [1, "text-white", "mb-1"], [1, "text-white", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "fs-13", "text-white", "mb-0"], [1, "isax", "isax-calendar5", "me-1"], [1, "isax", "isax-clock5", "me-1"], [1, "position-absolute", "end-0", "top-50", "translate-middle-y", "p-2", "d-none", "d-sm-block"], ["src", "assets/img/icons/dashboard.svg", "alt", "img"], [1, "col-md-4", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "mb-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "isax", "isax-category5", "text-default", "me-2"], [1, "row", "g-4"], [1, "col-xl-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-44", "avatar-rounded", "bg-primary-subtle", "text-primary", "flex-shrink-0", "me-2"], [1, "isax", "isax-document-text-1", "fs-20"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-0", "text-truncate"], [1, "d-flex", "align-items-center", "me-2"], [1, "avatar", "avatar-44", "avatar-rounded", "bg-success-subtle", "text-success-emphasis", "flex-shrink-0", "me-2"], [1, "isax", "isax-profile-2user", "fs-20"], [1, "avatar", "avatar-44", "avatar-rounded", "bg-warning-subtle", "text-warning-emphasis", "flex-shrink-0", "me-2"], [1, "isax", "isax-dcube", "fs-20"], [1, "avatar", "avatar-44", "avatar-rounded", "bg-info-subtle", "text-info-emphasis", "flex-shrink-0", "me-2"], [1, "isax", "isax-document-text", "fs-20"], [1, "isax", "isax-chart-215", "text-default", "me-2"], [1, "isax", "isax-document-forward", "fs-20"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "isax", "isax-programming-arrow", "fs-20"], [1, "isax", "isax-dollar-circle", "fs-20"], [1, "mb-1", "mb-0"], [1, "fs-16", "fw-semibold", "text-truncate"], [1, "isax", "isax-flag", "fs-20"], [1, "isax", "isax-chart-success5", "text-default", "me-2"], [1, "isax", "isax-document", "fs-20"], [1, "isax", "isax-document-previous", "fs-20"], [1, "isax", "isax-dislike", "fs-20"], [1, "fs-16", "fw-semibold", "text-truncate", "mb-0"], [1, "col-md-6", "col-xl-4", "d-flex", "flex-column"], [1, "card", "overflow-hidden", "z-1", "flex-fill"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-2", "pb-2"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "me-2"], [1, "badge", "badge-sm", "badge-soft-success"], [1, "isax", "isax-arrow-up-15", "ms-1"], [1, "avatar", "avatar-lg", "bg-light", "text-dark", "avatar-rounded"], [1, "isax", "isax-document-text", "fs-16"], [1, "fw-medium", "text-decoration-underline", 3, "routerLink"], [1, "position-absolute", "end-0", "bottom-0", "z-n1"], ["src", "assets/img/bg/card-bg-01.svg", "alt", "img"], ["src", "assets/img/bg/card-bg-02.svg", "alt", "img"], ["src", "assets/img/bg/card-bg-03.svg", "alt", "img"], [1, "col-md-6", "col-xl-4", "d-flex"], [1, "card-body", "pb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "fs-13", "text-dark", "d-flex", "align-items-center", "mb-0"], [1, "fa-solid", "fa-circle", "text-primary-transparent", "fs-12", "me-1"], [1, "fa-solid", "fa-circle", "text-primary", "fs-12", "me-1"], ["id", "revenue_chart"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "colors"], [1, "col-xl-4", "d-flex"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-borderless", "custom-table"], [1, "avatar", "avatar-lg", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["src", "assets/img/users/user-06.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-medium", "mb-1"], [3, "routerLink"], [1, "fs-13"], [1, "fs-14", "fw-semibold"], [1, "d-flex", "align-items-center", "justify-content-end", "gap-2"], ["data-bs-toggle", "tooltip", "data-bs-title", "New Invoice", 1, "btn", "btn-icon", "btn-sm", "btn-light", 3, "routerLink"], [1, "isax", "isax-add-circle"], ["data-bs-toggle", "tooltip", "data-bs-title", "Add Ledger"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_ledger", 1, "btn", "btn-icon", "btn-sm", "btn-light"], [1, "isax", "isax-document-text-1"], ["src", "assets/img/users/user-01.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-38.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-12.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-02.jpg", "alt", "img", 1, "rounded-circle"], [1, "btn", "btn-light", "btn-lg", "w-100", "text-decoration-underline", "mt-3", 3, "routerLink"], [1, "col-md-12"], [1, "card"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "flex-wrap", "mb-3"], [1, "btn", "btn-primary", "mb-1", 3, "routerLink"], [1, "table-responsive", "no-filter", "no-pagination"], [1, "table", "table-nowrap", "border", "datatable"], [1, "position-relative", "overflow-hidden"], [1, "link-default", 3, "routerLink"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["src", "assets/img/users/user-22.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-medium", "mb-0"], [1, "text-dark"], ["src", "assets/img/users/user-07.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-16.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-08.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-15.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-27.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-14.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-25.jpg", "alt", "img", 1, "rounded-circle"], [1, "col-lg-12", "col-xl-4", "d-flex"], [1, "card-body", "pb-1"], [1, "fs-14", "fw-semibold", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "flex-shrink-0", "me-2"], ["src", "assets/img/icons/transaction-01.svg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-semibold", "mb-1"], ["href", "javascript:void(0);"], [1, "text-end"], [1, "badge", "badge-lg", "badge-soft-success"], ["src", "assets/img/icons/transaction-02.svg", "alt", "img", 1, "rounded-circle"], [1, "badge", "badge-lg", "badge-soft-danger"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "avatar", "avatar-lg", "flex-shrink-0", "me-2", 3, "routerLink"], [1, "badge", "badge-sm", "badge-soft-success", "d-inline-flex", "align-items-center", "mb-1"], [1, "isax", "isax-tick-circle", "ms-1"], [1, "badge", "badge-sm", "badge-soft-info", "d-inline-flex", "align-items-center", "mb-1"], [1, "isax", "isax-arrow-right-24", "ms-1"], [1, "badge", "badge-sm", "badge-soft-light", "d-inline-flex", "align-items-center", "text-dark", "mb-1"], [1, "isax", "isax-timer-pause", "ms-1"], [1, "badge", "badge-sm", "badge-soft-danger", "d-inline-flex", "align-items-center", "mb-1"], [1, "isax", "isax-close-circle", "ms-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "card", "d-flex"], [1, "card-body", "flex-fill"], [1, "fs-16", "fw-semibold"], [1, "isax", "isax-arrow-circle-up4", "text-success"], ["id", "invoice_income"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "fill", "tooltip", "xaxis", "colors", "grid"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-1", "mb-3"], [1, "d-flex", "align-items-center", "fs-13", "text-dark", "mb-0"], [1, "fa-solid", "fa-circle", "fs-8", "me-1", "text-pink"], [1, "fa-solid", "fa-circle", "fs-8", "me-1", "text-secondary"], [1, "fa-solid", "fa-circle", "fs-8", "me-1", "text-success"], ["id", "total_sales"], [3, "series", "labels", "chart", "dataLabels", "plotOptions", "yaxis", "fill", "tooltip", "xaxis", "colors", "legend", "grid"], ["id", "add_ledger", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body", "pb-1"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "input-group", "position-relative", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function ModalDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h6");
      \u0275\u0275text(3, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 1);
      \u0275\u0275element(5, "app-date-range-picker");
      \u0275\u0275elementStart(6, "div", 2)(7, "a", 3);
      \u0275\u0275text(8, " Create New ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ul", 4)(10, "li")(11, "a", 5);
      \u0275\u0275element(12, "i", 6);
      \u0275\u0275text(13, "Invoice ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 5);
      \u0275\u0275element(16, "i", 7);
      \u0275\u0275text(17, "Expense ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 5);
      \u0275\u0275element(20, "i", 8);
      \u0275\u0275text(21, "Credit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 5);
      \u0275\u0275element(24, "i", 9);
      \u0275\u0275text(25, "Debit Notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 5);
      \u0275\u0275element(28, "i", 10);
      \u0275\u0275text(29, "Purchase Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 5);
      \u0275\u0275element(32, "i", 11);
      \u0275\u0275text(33, "Quotation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li")(35, "a", 5);
      \u0275\u0275element(36, "i", 12);
      \u0275\u0275text(37, "Delivery Challan ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 13)(39, "a", 14);
      \u0275\u0275element(40, "i", 15);
      \u0275\u0275text(41, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul", 16)(43, "li")(44, "a", 17);
      \u0275\u0275text(45, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 17);
      \u0275\u0275text(48, "Download as Excel");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(49, "div", 18)(50, "div", 19)(51, "div", 20)(52, "div")(53, "h5", 21);
      \u0275\u0275text(54, "Good Morning, Jafna Cremson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 22);
      \u0275\u0275text(56, "You have 15+ invoices saved to draft that has to send to customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 23)(58, "p", 24);
      \u0275\u0275element(59, "i", 25);
      \u0275\u0275text(60, "Friday, 24 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 24);
      \u0275\u0275element(62, "i", 26);
      \u0275\u0275text(63, "11:24 AM");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(64, "div", 27);
      \u0275\u0275element(65, "img", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 19)(67, "div", 29)(68, "div", 30)(69, "div", 31)(70, "div", 32)(71, "h6", 33);
      \u0275\u0275element(72, "i", 34);
      \u0275\u0275text(73, "Overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 35)(75, "div", 36)(76, "div", 37)(77, "span", 38);
      \u0275\u0275element(78, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div")(80, "p", 40);
      \u0275\u0275text(81, "Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h6", 41);
      \u0275\u0275text(83, "1,041");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "div", 36)(85, "div", 42)(86, "span", 43);
      \u0275\u0275element(87, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div")(89, "p", 40);
      \u0275\u0275text(90, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "h6", 41);
      \u0275\u0275text(92, "3,462");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(93, "div", 36)(94, "div", 37)(95, "span", 45);
      \u0275\u0275element(96, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div")(98, "p", 40);
      \u0275\u0275text(99, "Amount Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "h6", 41);
      \u0275\u0275text(101, "$1,642");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 36)(103, "div", 42)(104, "span", 47);
      \u0275\u0275element(105, "i", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div")(107, "p", 40);
      \u0275\u0275text(108, "Quotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "h6", 41);
      \u0275\u0275text(110, "2,150");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(111, "div", 29)(112, "div", 30)(113, "div", 31)(114, "div", 32)(115, "h6", 33);
      \u0275\u0275element(116, "i", 49);
      \u0275\u0275text(117, "Sales Analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 35)(119, "div", 36)(120, "div", 37)(121, "span", 38);
      \u0275\u0275element(122, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div")(124, "p", 40);
      \u0275\u0275text(125, "Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "h6", 51);
      \u0275\u0275text(127, "$40,569");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(128, "div", 36)(129, "div", 42)(130, "span", 43);
      \u0275\u0275element(131, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div")(133, "p", 40);
      \u0275\u0275text(134, "Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "h6", 41);
      \u0275\u0275text(136, "$1,54,220");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(137, "div", 36)(138, "div", 37)(139, "span", 45);
      \u0275\u0275element(140, "i", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div")(142, "p", 54);
      \u0275\u0275text(143, "Expenses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "h6", 55);
      \u0275\u0275text(145, "$10,041");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(146, "div", 36)(147, "div", 42)(148, "span", 47);
      \u0275\u0275element(149, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div")(151, "p", 40);
      \u0275\u0275text(152, "Credits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "h6", 41);
      \u0275\u0275text(154, "$12,150");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(155, "div", 29)(156, "div", 30)(157, "div", 31)(158, "div", 32)(159, "h6", 33);
      \u0275\u0275element(160, "i", 57);
      \u0275\u0275text(161, "Invoice Statistics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 35)(163, "div", 36)(164, "div", 37)(165, "span", 38);
      \u0275\u0275element(166, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "div")(168, "p", 40);
      \u0275\u0275text(169, "Invoiced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "h6", 51);
      \u0275\u0275text(171, "$21,132");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 36)(173, "div", 42)(174, "span", 43);
      \u0275\u0275element(175, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div")(177, "p", 40);
      \u0275\u0275text(178, "Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "h6", 41);
      \u0275\u0275text(180, "$10,763");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(181, "div", 36)(182, "div", 37)(183, "span", 45);
      \u0275\u0275element(184, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div")(186, "p", 40);
      \u0275\u0275text(187, "Outstanding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "h6", 41);
      \u0275\u0275text(189, "$8041");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "div", 36)(191, "div", 42)(192, "span", 47);
      \u0275\u0275element(193, "i", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div")(195, "p", 40);
      \u0275\u0275text(196, "Overdue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "h6", 61);
      \u0275\u0275text(198, "$41,811.2");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(199, "div", 19)(200, "div", 62)(201, "div", 63)(202, "div", 31)(203, "div", 64)(204, "div")(205, "p", 65);
      \u0275\u0275text(206, "Total Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "div", 37)(208, "h6", 66);
      \u0275\u0275text(209, "897");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "span", 67);
      \u0275\u0275text(211, "+45");
      \u0275\u0275element(212, "i", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(213, "span", 69);
      \u0275\u0275element(214, "i", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "a", 71);
      \u0275\u0275text(216, "View Inventory");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 72);
      \u0275\u0275element(218, "img", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 63)(220, "div", 31)(221, "div", 64)(222, "div")(223, "p", 65);
      \u0275\u0275text(224, "Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 37)(226, "h6", 66);
      \u0275\u0275text(227, "645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "span", 67);
      \u0275\u0275text(229, "+45");
      \u0275\u0275element(230, "i", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "span", 69);
      \u0275\u0275element(232, "i", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "a", 71);
      \u0275\u0275text(234, "View Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "div", 72);
      \u0275\u0275element(236, "img", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 63)(238, "div", 31)(239, "div", 64)(240, "div")(241, "p", 65);
      \u0275\u0275text(242, "Total Quotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 37)(244, "h6", 66);
      \u0275\u0275text(245, "128");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "span", 67);
      \u0275\u0275text(247, "+45");
      \u0275\u0275element(248, "i", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(249, "span", 69);
      \u0275\u0275element(250, "i", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "a", 71);
      \u0275\u0275text(252, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 72);
      \u0275\u0275element(254, "img", 75);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(255, "div", 76)(256, "div", 30)(257, "div", 77)(258, "div", 32)(259, "h6", 65);
      \u0275\u0275text(260, "Revenue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 78)(262, "div")(263, "p", 65);
      \u0275\u0275text(264, "Total Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div", 37)(266, "h6", 66);
      \u0275\u0275text(267, "897");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "span", 67);
      \u0275\u0275text(269, "+45");
      \u0275\u0275element(270, "i", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(271, "div", 79)(272, "p", 80);
      \u0275\u0275element(273, "i", 81);
      \u0275\u0275text(274, "Received ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "p", 80);
      \u0275\u0275element(276, "i", 82);
      \u0275\u0275text(277, "Outstanding");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "div", 83);
      \u0275\u0275element(279, "apx-chart", 84);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(280, "div", 85)(281, "div", 30)(282, "div", 31)(283, "div", 32)(284, "h6", 65);
      \u0275\u0275text(285, "Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "div", 86)(287, "table", 87)(288, "tbody")(289, "tr")(290, "td")(291, "div", 37)(292, "a", 88);
      \u0275\u0275element(293, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div")(295, "h6", 90)(296, "a", 91);
      \u0275\u0275text(297, "Emily Clark");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "p", 92);
      \u0275\u0275text(299, "No of Invoices : 45");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(300, "td")(301, "p", 65);
      \u0275\u0275text(302, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "h6", 93);
      \u0275\u0275text(304, "$3589");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "td")(306, "div", 94)(307, "a", 95);
      \u0275\u0275element(308, "i", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "div", 97)(310, "a", 98);
      \u0275\u0275element(311, "i", 99);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(312, "tr")(313, "td")(314, "div", 37)(315, "a", 88);
      \u0275\u0275element(316, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "div")(318, "h6", 90)(319, "a", 91);
      \u0275\u0275text(320, "John Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(321, "p", 92);
      \u0275\u0275text(322, "No of Invoices : 16");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(323, "td")(324, "p", 65);
      \u0275\u0275text(325, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "h6", 93);
      \u0275\u0275text(327, "$5426");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "td")(329, "div", 94)(330, "a", 95);
      \u0275\u0275element(331, "i", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "div", 97)(333, "a", 98);
      \u0275\u0275element(334, "i", 99);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(335, "tr")(336, "td")(337, "div", 37)(338, "a", 88);
      \u0275\u0275element(339, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "div")(341, "h6", 90)(342, "a", 91);
      \u0275\u0275text(343, "Olivia Harris");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "p", 92);
      \u0275\u0275text(345, "No of Invoices : 23");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(346, "td")(347, "p", 65);
      \u0275\u0275text(348, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "h6", 93);
      \u0275\u0275text(350, "$1493");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "td")(352, "div", 94)(353, "a", 95);
      \u0275\u0275element(354, "i", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "div", 97)(356, "a", 98);
      \u0275\u0275element(357, "i", 99);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(358, "tr")(359, "td")(360, "div", 37)(361, "a", 88);
      \u0275\u0275element(362, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "div")(364, "h6", 90)(365, "a", 91);
      \u0275\u0275text(366, "William Parker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "p", 92);
      \u0275\u0275text(368, "No of Invoices : 58");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(369, "td")(370, "p", 65);
      \u0275\u0275text(371, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "h6", 93);
      \u0275\u0275text(373, "$7854");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "td")(375, "div", 94)(376, "a", 95);
      \u0275\u0275element(377, "i", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "div", 97)(379, "a", 98);
      \u0275\u0275element(380, "i", 99);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(381, "tr")(382, "td")(383, "div", 37)(384, "a", 88);
      \u0275\u0275element(385, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "div")(387, "h6", 90)(388, "a", 91);
      \u0275\u0275text(389, "Charlotte Brown");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "p", 92);
      \u0275\u0275text(391, "No of Invoices : 09");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(392, "td")(393, "p", 65);
      \u0275\u0275text(394, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "h6", 93);
      \u0275\u0275text(396, "$4989");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(397, "td")(398, "div", 94)(399, "a", 95);
      \u0275\u0275element(400, "i", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(401, "div", 97)(402, "a", 98);
      \u0275\u0275element(403, "i", 99);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(404, "a", 104);
      \u0275\u0275text(405, "All Customers");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(406, "div", 19)(407, "div", 105)(408, "div", 106)(409, "div", 31)(410, "div", 107)(411, "h6", 65);
      \u0275\u0275text(412, "Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "a", 108);
      \u0275\u0275text(414, "View all Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(415, "div", 109)(416, "table", 110)(417, "thead")(418, "tr")(419, "th", 111);
      \u0275\u0275text(420, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "th", 111);
      \u0275\u0275text(422, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "th", 111);
      \u0275\u0275text(424, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "th", 111);
      \u0275\u0275text(426, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "th", 111);
      \u0275\u0275text(428, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "th", 111);
      \u0275\u0275text(430, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "th", 111);
      \u0275\u0275text(432, "Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(433, "tbody")(434, "tr")(435, "td")(436, "a", 112);
      \u0275\u0275text(437, "INV00025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(438, "td")(439, "div", 37)(440, "a", 113);
      \u0275\u0275element(441, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "div")(443, "h6", 115)(444, "a", 91);
      \u0275\u0275text(445, "Emily Clark");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(446, "td");
      \u0275\u0275text(447, "22 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "td", 116);
      \u0275\u0275text(449, "$10,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "td");
      \u0275\u0275text(451, "$5,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "td", 116);
      \u0275\u0275text(453, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "td");
      \u0275\u0275text(455, "04 Mar 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(456, "tr")(457, "td")(458, "a", 112);
      \u0275\u0275text(459, "INV00024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(460, "td")(461, "div", 37)(462, "a", 113);
      \u0275\u0275element(463, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "div")(465, "h6", 115)(466, "a", 91);
      \u0275\u0275text(467, "John Carter");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(468, "td");
      \u0275\u0275text(469, "07 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "td", 116);
      \u0275\u0275text(471, "$25,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "td");
      \u0275\u0275text(473, "$5,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "td", 116);
      \u0275\u0275text(475, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "td");
      \u0275\u0275text(477, "20 Feb 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(478, "tr")(479, "td")(480, "a", 112);
      \u0275\u0275text(481, "INV00023");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(482, "td")(483, "div", 37)(484, "a", 113);
      \u0275\u0275element(485, "img", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "div")(487, "h6", 115)(488, "a", 91);
      \u0275\u0275text(489, "Sophia White");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(490, "td");
      \u0275\u0275text(491, "09 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "td", 116);
      \u0275\u0275text(493, "$1,20,500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(494, "td");
      \u0275\u0275text(495, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "td", 116);
      \u0275\u0275text(497, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "td");
      \u0275\u0275text(499, "12 Nov 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(500, "tr")(501, "td")(502, "a", 112);
      \u0275\u0275text(503, "INV00022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "td")(505, "div", 37)(506, "a", 113);
      \u0275\u0275element(507, "img", 119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "div")(509, "h6", 115)(510, "a", 91);
      \u0275\u0275text(511, "Michael Johnson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(512, "td");
      \u0275\u0275text(513, "30 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "td", 116);
      \u0275\u0275text(515, "$7,50,300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "td");
      \u0275\u0275text(517, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "td", 116);
      \u0275\u0275text(519, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(520, "td");
      \u0275\u0275text(521, "25 Oct 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(522, "tr")(523, "td")(524, "a", 112);
      \u0275\u0275text(525, "INV00016");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(526, "td")(527, "div", 37)(528, "a", 113);
      \u0275\u0275element(529, "img", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(530, "div")(531, "h6", 115)(532, "a", 91);
      \u0275\u0275text(533, "Daniel Martinez");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(534, "td");
      \u0275\u0275text(535, "12 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "td", 116);
      \u0275\u0275text(537, "$9,99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "td");
      \u0275\u0275text(539, "$4,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "td", 116);
      \u0275\u0275text(541, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "td");
      \u0275\u0275text(543, "18 Oct 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(544, "tr")(545, "td")(546, "a", 112);
      \u0275\u0275text(547, "INV00015");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(548, "td")(549, "div", 37)(550, "a", 113);
      \u0275\u0275element(551, "img", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "div")(553, "h6", 115)(554, "a", 91);
      \u0275\u0275text(555, "Charlotte Brown");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(556, "td");
      \u0275\u0275text(557, "05 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(558, "td", 116);
      \u0275\u0275text(559, "$87,650");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(560, "td");
      \u0275\u0275text(561, "$40,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "td", 116);
      \u0275\u0275text(563, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "td");
      \u0275\u0275text(565, "22 Sep 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(566, "tr")(567, "td")(568, "a", 112);
      \u0275\u0275text(569, "INV00014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(570, "td")(571, "div", 37)(572, "a", 113);
      \u0275\u0275element(573, "img", 122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "div")(575, "h6", 115)(576, "a", 91);
      \u0275\u0275text(577, "William Parker");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(578, "td");
      \u0275\u0275text(579, "09 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "td", 116);
      \u0275\u0275text(581, "$69,420");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "td");
      \u0275\u0275text(583, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "td", 116);
      \u0275\u0275text(585, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "td");
      \u0275\u0275text(587, "15 Sep 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(588, "tr")(589, "td")(590, "a", 112);
      \u0275\u0275text(591, "INV00013");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(592, "td")(593, "div", 37)(594, "a", 113);
      \u0275\u0275element(595, "img", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "div")(597, "h6", 115)(598, "a", 91);
      \u0275\u0275text(599, "Mia Thompson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(600, "td");
      \u0275\u0275text(601, "02 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "td", 116);
      \u0275\u0275text(603, "$33,210");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(604, "td");
      \u0275\u0275text(605, "$15,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "td", 116);
      \u0275\u0275text(607, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "td");
      \u0275\u0275text(609, "20 Aug 2024");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(610, "div", 19)(611, "div", 124)(612, "div", 30)(613, "div", 125)(614, "div", 32)(615, "h6", 65);
      \u0275\u0275text(616, "Recent Transactions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(617, "h6", 126);
      \u0275\u0275text(618, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(619, "div", 127)(620, "div", 37)(621, "a", 128);
      \u0275\u0275element(622, "img", 129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(623, "div")(624, "h6", 130)(625, "a", 131);
      \u0275\u0275text(626, "Andrew James");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(627, "p", 92)(628, "a", 112);
      \u0275\u0275text(629, "#INV45478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(630, "div", 132)(631, "span", 133);
      \u0275\u0275text(632, "+ $989.15");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(633, "div", 127)(634, "div", 37)(635, "a", 128);
      \u0275\u0275element(636, "img", 134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "div")(638, "h6", 130)(639, "a", 131);
      \u0275\u0275text(640, "John Carter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(641, "p", 92)(642, "a", 112);
      \u0275\u0275text(643, "#INV45477");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(644, "div", 132)(645, "span", 135);
      \u0275\u0275text(646, "- $300.12");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(647, "hr");
      \u0275\u0275elementStart(648, "h6", 126);
      \u0275\u0275text(649, "Yesterday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(650, "div", 127)(651, "div", 37)(652, "a", 128);
      \u0275\u0275element(653, "img", 134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(654, "div")(655, "h6", 130)(656, "a", 131);
      \u0275\u0275text(657, "Sophia White");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(658, "p", 92)(659, "a", 112);
      \u0275\u0275text(660, "#INV45476");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(661, "div", 132)(662, "span", 133);
      \u0275\u0275text(663, " + $669");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(664, "div", 127)(665, "div", 37)(666, "a", 128);
      \u0275\u0275element(667, "img", 134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "div")(669, "h6", 130)(670, "a", 131);
      \u0275\u0275text(671, "Daniel Martinez");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(672, "p", 92)(673, "a", 112);
      \u0275\u0275text(674, "#INV45475");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(675, "div", 132)(676, "span", 133);
      \u0275\u0275text(677, " + $474.22");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(678, "div", 127)(679, "div", 37)(680, "a", 128);
      \u0275\u0275element(681, "img", 129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(682, "div")(683, "h6", 130)(684, "a", 131);
      \u0275\u0275text(685, "Amelia Robinson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(686, "p", 92)(687, "a", 112);
      \u0275\u0275text(688, "#INV45474");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(689, "div", 132)(690, "span", 133);
      \u0275\u0275text(691, " + $339.79");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(692, "div", 76)(693, "div", 30)(694, "div", 31)(695, "div", 32)(696, "h6", 65);
      \u0275\u0275text(697, "Quotations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(698, "div", 136)(699, "div", 37)(700, "a", 137);
      \u0275\u0275element(701, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(702, "div")(703, "h6", 130)(704, "a", 91);
      \u0275\u0275text(705, "Emily Clark");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(706, "p", 92);
      \u0275\u0275text(707, "QU0014");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(708, "div", 132)(709, "span", 138);
      \u0275\u0275text(710, "Accepted");
      \u0275\u0275element(711, "i", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(712, "p", 92);
      \u0275\u0275text(713, "25 Mar 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(714, "div", 136)(715, "div", 37)(716, "a", 137);
      \u0275\u0275element(717, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(718, "div")(719, "h6", 130)(720, "a", 91);
      \u0275\u0275text(721, "David Anderson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(722, "p", 92);
      \u0275\u0275text(723, "QU0147");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(724, "div", 132)(725, "span", 140);
      \u0275\u0275text(726, "Sent");
      \u0275\u0275element(727, "i", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "p", 92);
      \u0275\u0275text(729, "12 Feb 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(730, "div", 136)(731, "div", 37)(732, "a", 137);
      \u0275\u0275element(733, "img", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(734, "div")(735, "h6", 130)(736, "a", 91);
      \u0275\u0275text(737, "Sophia White");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(738, "p", 92);
      \u0275\u0275text(739, "QU1947");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(740, "div", 132)(741, "span", 142);
      \u0275\u0275text(742, "Expired");
      \u0275\u0275element(743, "i", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(744, "p", 92);
      \u0275\u0275text(745, "08 Mar 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(746, "div", 136)(747, "div", 37)(748, "a", 137);
      \u0275\u0275element(749, "img", 119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "div")(751, "h6", 130)(752, "a", 91);
      \u0275\u0275text(753, "Michael Johnson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(754, "p", 92);
      \u0275\u0275text(755, "QU2842");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(756, "div", 132)(757, "span", 144);
      \u0275\u0275text(758, "Declined");
      \u0275\u0275element(759, "i", 145);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(760, "p", 92);
      \u0275\u0275text(761, "31 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(762, "div", 146)(763, "div", 37)(764, "a", 137);
      \u0275\u0275element(765, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(766, "div")(767, "h6", 130)(768, "a", 91);
      \u0275\u0275text(769, "Emily Clark");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(770, "p", 92);
      \u0275\u0275text(771, "QU7868");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(772, "div", 132)(773, "span", 138);
      \u0275\u0275text(774, "Accepted");
      \u0275\u0275element(775, "i", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(776, "p", 92);
      \u0275\u0275text(777, "18 Jan 2025");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(778, "div", 62)(779, "div", 147)(780, "div", 148)(781, "div", 146)(782, "div")(783, "p", 65);
      \u0275\u0275text(784, "Total Income on Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(785, "h6", 149);
      \u0275\u0275text(786, "$98,545");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(787, "div")(788, "h6", 130);
      \u0275\u0275text(789, "30.2 ");
      \u0275\u0275element(790, "i", 150);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(791, "p", 92);
      \u0275\u0275text(792, "Vs Last Week");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(793, "div", 151);
      \u0275\u0275element(794, "apx-chart", 152);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(795, "div", 147)(796, "div", 148)(797, "h6", 32);
      \u0275\u0275text(798, "Top Sales Statistics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(799, "div", 153)(800, "p", 154);
      \u0275\u0275element(801, "i", 155);
      \u0275\u0275text(802, "Dell XPS 13");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "p", 154);
      \u0275\u0275element(804, "i", 156);
      \u0275\u0275text(805, "Nike T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(806, "p", 154);
      \u0275\u0275element(807, "i", 157);
      \u0275\u0275text(808, "Apple iPhone 15");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(809, "div", 158);
      \u0275\u0275element(810, "apx-chart", 159);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(811, "div", 160)(812, "div", 161)(813, "div", 162)(814, "div", 163)(815, "h4", 164);
      \u0275\u0275text(816, "Add New Ledger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(817, "button", 165);
      \u0275\u0275element(818, "i", 166);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(819, "form")(820, "div", 167)(821, "div", 32)(822, "label", 168);
      \u0275\u0275text(823, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(824, "input", 169);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(825, "div", 32)(826, "label", 168);
      \u0275\u0275text(827, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "div", 170);
      \u0275\u0275element(829, "input", 171);
      \u0275\u0275elementStart(830, "span", 172);
      \u0275\u0275element(831, "i", 173);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(832, "div", 32)(833, "label", 168);
      \u0275\u0275text(834, "Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(835, "div", 37)(836, "div", 174);
      \u0275\u0275element(837, "input", 175);
      \u0275\u0275elementStart(838, "label", 176);
      \u0275\u0275text(839, " Credit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(840, "div", 177);
      \u0275\u0275element(841, "input", 178);
      \u0275\u0275elementStart(842, "label", 179);
      \u0275\u0275text(843, " Debit ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(844, "div", 180)(845, "button", 181);
      \u0275\u0275text(846, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(847, "button", 182);
      \u0275\u0275text(848, "Create");
      \u0275\u0275elementEnd()()()()()();
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
      \u0275\u0275advance(180);
      \u0275\u0275property("routerLink", ctx.routes.allInventory);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.quotations);
      \u0275\u0275advance(28);
      \u0275\u0275property("series", ctx.revenueChart.series)("chart", ctx.revenueChart.chart)("dataLabels", ctx.revenueChart.dataLabels)("plotOptions", ctx.revenueChart.plotOptions)("yaxis", ctx.revenueChart.yaxis)("legend", ctx.revenueChart.legend)("fill", ctx.revenueChart.fill)("stroke", ctx.revenueChart.stroke)("tooltip", ctx.revenueChart.tooltip)("xaxis", ctx.revenueChart.xaxis)("colors", ctx.revenueChart.colors)("fill", ctx.revenueChart.fill);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.customerList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.invoiceList);
      \u0275\u0275advance(23);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(30);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.invoiceDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.customerDetails);
      \u0275\u0275advance(26);
      \u0275\u0275property("series", ctx.invoiceIncome.series)("chart", ctx.invoiceIncome.chart)("dataLabels", ctx.invoiceIncome.dataLabels)("plotOptions", ctx.invoiceIncome.plotOptions)("yaxis", ctx.invoiceIncome.yaxis)("fill", ctx.invoiceIncome.fill)("tooltip", ctx.invoiceIncome.tooltip)("xaxis", ctx.invoiceIncome.xaxis)("colors", ctx.invoiceIncome.colors)("grid", ctx.invoiceIncome.grid)("fill", ctx.invoiceIncome.fill);
      \u0275\u0275advance(16);
      \u0275\u0275property("series", ctx.salesChart.series)("labels", ctx.salesChart.labels)("chart", ctx.salesChart.chart)("dataLabels", ctx.salesChart.dataLabels)("plotOptions", ctx.salesChart.plotOptions)("yaxis", ctx.salesChart.yaxis)("fill", ctx.salesChart.fill)("tooltip", ctx.salesChart.tooltip)("xaxis", ctx.salesChart.xaxis)("colors", ctx.salesChart.colors)("legend", ctx.salesChart.legend)("grid", ctx.salesChart.grid)("fill", ctx.salesChart.fill);
    }
  }, dependencies: [CommonModule, NgApexchartsModule, ChartComponent, RouterLink, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-modal-dashboard", imports: [CommonModule, NgApexchartsModule, RouterLink, DateRangePickerComponent], template: '\n\n  <!-- Start Breadcrumb -->\n  <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-4">\n    <div>\n      <h6>Dashboard</h6>\n    </div>\n    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n      <app-date-range-picker/>\n      <div class="dropdown me-1">\n        <a class="btn btn-primary d-flex align-items-center justify-content-center dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">\n          Create New\n        </a>\n        <ul class="dropdown-menu dropdown-menu-start">\n          <li>\n            <a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-document-text-1 me-2"></i>Invoice\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-money-send me-2"></i>Expense\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-money-add me-2"></i>Credit Notes\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-money-recive me-2"></i>Debit Notes\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-document me-2"></i>Purchase Order\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-document-download me-2"></i>Quotation\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-document-forward me-2"></i>Delivery Challan\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class="dropdown">\n        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"  data-bs-toggle="dropdown">\n          <i class="isax isax-export-1 me-1"></i>Export\n        </a>\n        <ul class="dropdown-menu">\n          <li>\n            <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n          </li>\n          <li>\n            <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <!-- End Breadcrumb -->\n\n  <!-- Start row -->\n  <div class="bg-primary rounded welcome-wrap position-relative mb-4">\n    <div class="row">\n      <div class="col-lg-8 col-md-9 col-sm-7">\n        <div>\n          <h5 class="text-white mb-1">Good Morning, Jafna Cremson</h5>\n          <p class="text-white mb-3">You have 15+ invoices saved to draft that has to send to customers</p>\n          <div class="d-flex align-items-center flex-wrap gap-3">\n            <p class="d-flex align-items-center fs-13 text-white mb-0"><i class="isax isax-calendar5 me-1"></i>Friday, 24 Mar 2025</p>\n            <p class="d-flex align-items-center fs-13 text-white mb-0"><i class="isax isax-clock5 me-1"></i>11:24 AM</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class="position-absolute end-0 top-50 translate-middle-y p-2 d-none d-sm-block">\n      <img src="assets/img/icons/dashboard.svg" alt="img">\n    </div>\n  </div>\n  <!-- End row -->\n\n  <!-- Start row -->\n  <div class="row">\n\n    <div class="col-md-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="d-flex align-items-center mb-1"><i class="isax isax-category5 text-default me-2"></i>Overview</h6>\n          </div>\n          <div class="row g-4">\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">\n                  <i class="isax isax-document-text-1 fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Invoices</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">1,041</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-profile-2user fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Customers</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">3,462</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-dcube fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Amount Due</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$1,642</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-document-text fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Quotations</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">2,150</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="d-flex align-items-center mb-1"><i class="isax isax-chart-215 text-default me-2"></i>Sales Analytics</h6>\n          </div>\n          <div class="row g-4">\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">\n                  <i class="isax isax-document-forward fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Total Sales</p>\n                  <h6 class="fs-16 fw-semibold mb-0">$40,569</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-programming-arrow fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Purchase</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$1,54,220</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-dollar-circle fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 mb-0">Expenses</p>\n                  <h6 class="fs-16 fw-semibold text-truncate">$10,041</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-flag fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Credits</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$12,150</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="d-flex align-items-center mb-1"><i class="isax isax-chart-success5 text-default me-2"></i>Invoice Statistics</h6>\n          </div>\n          <div class="row g-4">\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">\n                  <i class="isax isax-document fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Invoiced</p>\n                  <h6 class="fs-16 fw-semibold mb-0">$21,132</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-document-forward fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Received</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$10,763</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-document-previous fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Outstanding</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$8041</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-dislike fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Overdue</p>\n                  <h6 class="fs-16 fw-semibold text-truncate mb-0">$41,811.2</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n  </div>\n  <!-- End row -->\n\n  <!-- Start row -->\n  <div class="row">\n\n    <div class="col-md-6 col-xl-4 d-flex flex-column">\n\n      <div class="card overflow-hidden z-1 flex-fill">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n            <div>										\n              <p class="mb-1">Total Products</p>\n              <div class="d-flex align-items-center">\n                <h6 class="fs-16 fw-semibold me-2">897</h6>\n                <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>\n              </div>\n            </div>\n            <span class="avatar avatar-lg bg-light text-dark avatar-rounded">\n              <i class="isax isax-document-text fs-16"></i>\n            </span>\n          </div>\n          <a [routerLink]="routes.allInventory" class="fw-medium text-decoration-underline">View Inventory</a>\n        </div> <!-- end card body -->\n        <div class="position-absolute end-0 bottom-0 z-n1">\n          <img src="assets/img/bg/card-bg-01.svg" alt="img">\n        </div>\n      </div> <!-- end card -->\n\n      <div class="card overflow-hidden z-1 flex-fill">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n            <div>										\n              <p class="mb-1">Total Sales</p>\n              <div class="d-flex align-items-center">\n                <h6 class="fs-16 fw-semibold me-2">645</h6>\n                <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>\n              </div>\n            </div>\n            <span class="avatar avatar-lg bg-light text-dark avatar-rounded">\n              <i class="isax isax-document-text fs-16"></i>\n            </span>\n          </div>\n          <a [routerLink]="routes.invoiceList" class="fw-medium text-decoration-underline">View Invoices</a>\n        </div> <!-- end card body -->\n        <div class="position-absolute end-0 bottom-0 z-n1">\n          <img src="assets/img/bg/card-bg-02.svg" alt="img">\n        </div>\n      </div> <!-- end card -->\n\n      <div class="card overflow-hidden z-1 flex-fill">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n            <div>										\n              <p class="mb-1">Total Quotations</p>\n              <div class="d-flex align-items-center">\n                <h6 class="fs-16 fw-semibold me-2">128</h6>\n                <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>\n              </div>\n            </div>\n            <span class="avatar avatar-lg bg-light text-dark avatar-rounded">\n              <i class="isax isax-document-text fs-16"></i>\n            </span>\n          </div>\n          <a [routerLink]="routes.quotations" class="fw-medium text-decoration-underline">View All</a>\n        </div> <!-- end card body -->\n        <div class="position-absolute end-0 bottom-0 z-n1">\n          <img src="assets/img/bg/card-bg-03.svg" alt="img">\n        </div>\n      </div> <!-- end card -->\n\n    </div> <!-- end col -->\n\n    <div class="col-md-6 col-xl-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body pb-0">\n          <div class="mb-3">\n            <h6 class="mb-1">Revenue</h6>\n          </div>\n          <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div>\n              <p class="mb-1">Total Revenue</p>\n              <div class="d-flex align-items-center">\n                <h6 class="fs-16 fw-semibold me-2">897</h6>\n                <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>\n              </div>\n            </div>\n            <div class="d-flex align-items-center gap-2">\n              <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-circle text-primary-transparent fs-12 me-1"></i>Received </p>\n              <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-circle text-primary fs-12 me-1"></i>Outstanding</p>\n            </div>\n          </div>\n          <div id="revenue_chart">\n            <apx-chart [series]="revenueChart.series" \n                       [chart]="revenueChart.chart"\n                       [dataLabels]="revenueChart.dataLabels"\n                       [plotOptions]="revenueChart.plotOptions"\n                       [yaxis]="revenueChart.yaxis" \n                       [legend]="revenueChart.legend" \n                       [fill]="revenueChart.fill"\n                       [stroke]="revenueChart.stroke" \n                       [tooltip]="revenueChart.tooltip" \n                       [xaxis]="revenueChart.xaxis"\n                       [colors]="revenueChart.colors"\n                       [fill]="revenueChart.fill"></apx-chart>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-xl-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="mb-1">Customers</h6>\n          </div>\n          <div class="table-responsive">\n            <table class="table table-nowrap table-borderless custom-table">\n              <tbody>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-06.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>\n                        <p class="fs-13">No of Invoices : 45</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$3589</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-01.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">John Smith</a></h6>\n                        <p class="fs-13">No of Invoices : 16</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$5426</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-38.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Olivia Harris</a></h6>\n                        <p class="fs-13">No of Invoices : 23</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$1493</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-12.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">William Parker</a></h6>\n                        <p class="fs-13">No of Invoices : 58</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$7854</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-02.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Charlotte Brown</a></h6>\n                        <p class="fs-13">No of Invoices : 09</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$4989</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <a [routerLink]="routes.customerList" class="btn btn-light btn-lg w-100 text-decoration-underline mt-3">All Customers</a>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n  </div>\n  <!-- End row -->\n\n  <!-- Start row -->\n  <div class="row">\n    <div class="col-md-12">\n      <div class="card"> \n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">\n            <h6 class="mb-1">Invoices</h6>\n            <a [routerLink]="routes.invoiceList" class="btn btn-primary mb-1">View all Invoices</a>\n          </div>\n          <div class="table-responsive no-filter no-pagination">\n            <table class="table table-nowrap border datatable">\n              <thead>\n                <tr>\n                  <th class="position-relative overflow-hidden">ID</th>\n                  <th class="position-relative overflow-hidden">Customer</th>\n                  <th class="position-relative overflow-hidden">Created On</th>\n                  <th class="position-relative overflow-hidden">Amount</th>\n                  <th class="position-relative overflow-hidden">Paid</th>\n                  <th class="position-relative overflow-hidden">Payment Mode</th>\n                  <th class="position-relative overflow-hidden">Due Date</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00025</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>22 Feb 2025</td>\n                  <td class="text-dark">$10,000</td>\n                  <td>$5,000</td>\n                  <td class="text-dark">Cash</td>	\n                  <td>04 Mar 2025</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00024</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-07.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">John Carter</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>07 Feb 2025</td>\n                  <td class="text-dark">$25,750</td>\n                  <td>$5,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>20 Feb 2025</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00023</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-16.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Sophia White</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>09 Dec 2024</td>\n                  <td class="text-dark">$1,20,500</td>\n                  <td>$60,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>12 Nov 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00022</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-08.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Michael Johnson</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>30 Nov 2024</td>\n                  <td class="text-dark">$7,50,300</td>\n                  <td>$60,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>25 Oct 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00016</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-15.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Daniel Martinez</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>12 Oct 2024</td>\n                  <td class="text-dark">$9,99,999</td>\n                  <td>$4,00,000</td>\n                  <td class="text-dark">Cash</td>\n                  <td>18 Oct 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00015</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-27.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Charlotte Brown</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>05 Oct 2024</td>\n                  <td class="text-dark">$87,650</td>\n                  <td>$40,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>22 Sep 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00014</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-14.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">William Parker</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>09 Sep 2024</td>\n                  <td class="text-dark">$69,420</td>\n                  <td>$30,000</td>\n                  <td class="text-dark">Cash</td>\n                  <td>15 Sep 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00013</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-25.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Mia Thompson</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>02 Sep 2024</td>\n                  <td class="text-dark">$33,210</td>\n                  <td>$15,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>20 Aug 2024</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n  </div>\n  <!-- End row -->\n\n  <!-- Start row -->\n  <div class="row">\n\n    <div class="col-lg-12 col-xl-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body pb-1">\n          <div class="mb-3">\n            <h6 class="mb-1">Recent Transactions</h6>\n          </div>\n          <h6 class="fs-14 fw-semibold mb-3">Today</h6>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-01.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Andrew James</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45478</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-success">+ $989.15</span>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">John Carter</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45477</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-danger">- $300.12</span>\n            </div>\n          </div>\n          <hr>\n          <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Sophia White</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45476</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-success"> + $669</span>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Daniel Martinez</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45475</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-success"> + $474.22</span>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-01.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Amelia Robinson</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45474</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-success"> + $339.79</span>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-6 col-xl-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="mb-1">Quotations</h6>\n          </div>\n          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-02.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>\n                <p class="fs-13">QU0014</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center mb-1">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n              <p class="fs-13">25 Mar 2025</p>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-07.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">David Anderson</a></h6>\n                <p class="fs-13">QU0147</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-info d-inline-flex align-items-center mb-1">Sent<i class="isax isax-arrow-right-24 ms-1"></i></span>\n              <p class="fs-13">12 Feb 2025</p>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-16.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Sophia White</a></h6>\n                <p class="fs-13">QU1947</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-light d-inline-flex align-items-center text-dark mb-1">Expired<i class="isax isax-timer-pause ms-1"></i></span>\n              <p class="fs-13">08 Mar 2025</p>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-08.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Michael Johnson</a></h6>\n                <p class="fs-13">QU2842</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-danger d-inline-flex align-items-center mb-1">Declined<i class="isax isax-close-circle ms-1"></i></span>\n              <p class="fs-13">31 Jan 2025</p>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>\n                <p class="fs-13">QU7868</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center mb-1">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n              <p class="fs-13">18 Jan 2025</p>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-6 col-xl-4 d-flex flex-column">\n      <div class="card d-flex">\n        <div class="card-body flex-fill">\n          <div class="d-flex align-items-center justify-content-between">\n            <div>\n              <p class="mb-1">Total Income on Invoice</p>\n              <h6 class="fs-16 fw-semibold">$98,545</h6>\n            </div>\n            <div>\n              <h6 class="fs-14 fw-semibold mb-1">30.2 <i class="isax isax-arrow-circle-up4 text-success"></i></h6>\n              <p class="fs-13">Vs Last Week</p>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n        <div id="invoice_income">\n          <apx-chart [series]="invoiceIncome.series" \n                       [chart]="invoiceIncome.chart"\n                       [dataLabels]="invoiceIncome.dataLabels"\n                       [plotOptions]="invoiceIncome.plotOptions"\n                       [yaxis]="invoiceIncome.yaxis" \n                       [fill]="invoiceIncome.fill"\n                       [tooltip]="invoiceIncome.tooltip" \n                       [xaxis]="invoiceIncome.xaxis"\n                       [colors]="invoiceIncome.colors"\n                       [grid]="invoiceIncome.grid"\n                       [fill]="invoiceIncome.fill"></apx-chart>\n        </div>\n      </div> <!-- end card -->\n      <div class="card d-flex">\n        <div class="card-body flex-fill">\n          <h6 class="mb-3">Top Sales Statistics</h6>\n          <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">\n            <p class="d-flex align-items-center fs-13 text-dark mb-0"><i class="fa-solid fa-circle fs-8 me-1 text-pink"></i>Dell XPS 13</p>\n            <p class="d-flex align-items-center fs-13 text-dark mb-0"><i class="fa-solid fa-circle fs-8 me-1 text-secondary"></i>Nike T-shirt</p>\n            <p class="d-flex align-items-center fs-13 text-dark mb-0"><i class="fa-solid fa-circle fs-8 me-1 text-success"></i>Apple iPhone 15</p>\n          </div>								\n          <div id="total_sales">\n            <apx-chart [series]="salesChart.series" \n                       [labels]="salesChart.labels"\n                       [chart]="salesChart.chart"\n                       [dataLabels]="salesChart.dataLabels"\n                       [plotOptions]="salesChart.plotOptions"\n                       [yaxis]="salesChart.yaxis" \n                       [fill]="salesChart.fill"\n                       [tooltip]="salesChart.tooltip" \n                       [xaxis]="salesChart.xaxis"\n                       [colors]="salesChart.colors"\n                       [legend]="salesChart.legend"\n                       [grid]="salesChart.grid"\n                       [fill]="salesChart.fill"></apx-chart>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n  </div>\n  <!-- End row -->\n\n\n  		<!-- Start Add Ledger  -->\n      <div id="add_ledger" class="modal fade">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h4 class="modal-title">Add New Ledger</h4>\n              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n            </div>\n            <form>\n              <div class="modal-body pb-1">\n                <div class="mb-3">\n                  <label class="form-label">Amount</label>\n                  <input type="text" class="form-control">\n                </div>\n                <div class="mb-3">\n                  <label class="form-label">Date</label>\n                  <div class="input-group position-relative ngxdate">\n                    <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">\n                    <span class="input-icon-addon fs-16 text-gray-9">\n                      <i class="isax isax-calendar-2"></i>\n                    </span>\n                  </div>\n                </div>\n                <div class="mb-3">\n                  <label class="form-label">Mode</label>\n                  <div class="d-flex align-items-center">\n                    <div class="form-check me-3">\n                      <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1">\n                      <label class="form-check-label" for="Radio-sm-1">\n                        Credit\n                      </label>\n                    </div>\n                    <div class="form-check">\n                      <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2" checked="">\n                      <label class="form-check-label" for="Radio-sm-2">\n                        Debit\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!-- End Add Ledger -->' }]
  }], () => [{ type: CommonService }, { type: SettingsService }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalDashboardComponent, { className: "ModalDashboardComponent", filePath: "src/app/features/dashboard/modal-dashboard/modal-dashboard.component.ts", lineNumber: 54 });
})();
export {
  ModalDashboardComponent
};
//# sourceMappingURL=chunk-TWVG6QH5.js.map
