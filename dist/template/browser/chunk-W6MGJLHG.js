import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-Z3POZ3YG.js";
import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
import "./chunk-6H2KZBXU.js";
import "./chunk-KKWHEPUK.js";
import "./chunk-BLAAMQ2R.js";
import {
  PermissionService,
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
  Directive,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/core/directives/has-permissions.directive.ts
var HasPermissionsDirective = class _HasPermissionsDirective {
  tpl;
  vcr;
  permService;
  required = [];
  mode = "OR";
  constructor(tpl, vcr, permService) {
    this.tpl = tpl;
    this.vcr = vcr;
    this.permService = permService;
    effect(() => {
      const _ = this.permService.permissions();
      this.updateView();
    });
  }
  /**
       * <!-- AND -->
  <button *hasPermissions="{ permissions: ['CLIENT_CREATE','CLIENT_VALIDATE'], mode: 'AND' }">
    Créer & Valider Client
  </button>
  <!-- OR -->
  <button *hasPermissions="{ permissions: ['CLIENT_CREATE','CLIENT_VALIDATE'], mode: 'OR' }">
    Modifier Client
  </button>
  <!-- Une seule permission -->
  <button *hasPermissions="{ permissions: ['CLIENT_CREATE'] }">
    Nouveau Client
  </button>
       */
  set hasPermissions(value) {
    this.required = value.permissions;
    this.mode = value.mode ?? "OR";
    this.updateView();
  }
  set hasPermissionsMode(mode) {
    this.mode = mode;
    this.updateView();
  }
  updateView() {
    this.vcr.clear();
    const allowed = this.mode === "AND" ? this.permService.hasAll(this.required) : this.permService.hasSome(this.required);
    if (allowed) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
  static \u0275fac = function HasPermissionsDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermissionsDirective)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(PermissionService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermissionsDirective, selectors: [["", "hasPermissions", ""]], inputs: { hasPermissions: "hasPermissions", hasPermissionsMode: "hasPermissionsMode" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HasPermissionsDirective, [{
    type: Directive,
    args: [{
      selector: "[hasPermissions]",
      standalone: true
    }]
  }], () => [{ type: TemplateRef }, { type: ViewContainerRef }, { type: PermissionService }], { hasPermissions: [{
    type: Input
  }], hasPermissionsMode: [{
    type: Input
  }] });
})();

// src/app/features/dashboard/admin-dashboard/admin-dashboard.component.ts
var _c0 = ["chart"];
var _c1 = () => ["CLIENT_CREATE", "CLIENT_VALIDATE"];
var _c2 = (a0) => ({ permissions: a0, mode: "AND" });
var _c3 = (a0) => ({ permissions: a0, mode: "OR" });
var _c4 = () => ["CLIENT_CREATE"];
var _c5 = (a0) => ({ permissions: a0 });
function AdminDashboardComponent_button_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button");
    \u0275\u0275text(1, " Cr\xE9er & Valider Client\n");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button");
    \u0275\u0275text(1, " Modifier Client\n");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button");
    \u0275\u0275text(1, " Nouveau Client\n");
    \u0275\u0275elementEnd();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  routes = routes;
  chart;
  revenueChart;
  invoiceIncome;
  salesChart;
  constructor() {
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
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], viewQuery: function AdminDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 852, vars: 114, consts: [[1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-4"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["data-bs-toggle", "dropdown", "href", "javascript:void(0);", "role", "button", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-start"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-money-send", "me-2"], [1, "isax", "isax-money-add", "me-2"], [1, "isax", "isax-money-recive", "me-2"], [1, "isax", "isax-document", "me-2"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-document-forward", "me-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [4, "hasPermissions"], [1, "bg-primary", "rounded", "welcome-wrap", "position-relative", "mb-4"], [1, "row"], [1, "col-lg-8", "col-md-9", "col-sm-7"], [1, "text-white", "mb-1"], [1, "text-white", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "fs-13", "text-white", "mb-0"], [1, "isax", "isax-calendar5", "me-1"], [1, "isax", "isax-clock5", "me-1"], [1, "position-absolute", "end-0", "top-50", "translate-middle-y", "p-2", "d-none", "d-sm-block"], ["src", "assets/img/icons/dashboard.svg", "alt", "img"], [1, "col-md-4", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "mb-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "isax", "isax-category5", "text-default", "me-2"], [1, "row", "g-4"], [1, "col-xl-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-44", "avatar-rounded", "bg-primary-subtle", "text-primary", "flex-shrink-0", "me-2"], [1, "isax", "isax-document-text-1", "fs-20"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-0", "text-truncate"], [1, "d-flex", "align-items-center", "me-2"], [1, "avatar", "avatar-44", "avatar-rounded", "bg-success-subtle", "text-success-emphasis", "flex-shrink-0", "me-2"], [1, "isax", "isax-profile-2user", "fs-20"], [1, "avatar", "avatar-44", "avatar-rounded", "bg-warning-subtle", "text-warning-emphasis", "flex-shrink-0", "me-2"], [1, "isax", "isax-dcube", "fs-20"], [1, "avatar", "avatar-44", "avatar-rounded", "bg-info-subtle", "text-info-emphasis", "flex-shrink-0", "me-2"], [1, "isax", "isax-document-text", "fs-20"], [1, "isax", "isax-chart-215", "text-default", "me-2"], [1, "isax", "isax-document-forward", "fs-20"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "isax", "isax-programming-arrow", "fs-20"], [1, "isax", "isax-dollar-circle", "fs-20"], [1, "mb-1", "mb-0"], [1, "fs-16", "fw-semibold", "text-truncate"], [1, "isax", "isax-flag", "fs-20"], [1, "isax", "isax-chart-success5", "text-default", "me-2"], [1, "isax", "isax-document", "fs-20"], [1, "isax", "isax-document-previous", "fs-20"], [1, "isax", "isax-dislike", "fs-20"], [1, "fs-16", "fw-semibold", "text-truncate", "mb-0"], [1, "col-md-6", "col-xl-4", "d-flex", "flex-column"], [1, "card", "overflow-hidden", "z-1", "flex-fill"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-2", "pb-2"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "me-2"], [1, "badge", "badge-sm", "badge-soft-success"], [1, "isax", "isax-arrow-up-15", "ms-1"], [1, "avatar", "avatar-lg", "bg-light", "text-dark", "avatar-rounded"], [1, "isax", "isax-document-text", "fs-16"], [1, "fw-medium", "text-decoration-underline", 3, "routerLink"], [1, "position-absolute", "end-0", "bottom-0", "z-n1"], ["src", "assets/img/bg/card-bg-01.svg", "alt", "img"], ["src", "assets/img/bg/card-bg-02.svg", "alt", "img"], ["src", "assets/img/bg/card-bg-03.svg", "alt", "img"], [1, "col-md-6", "col-xl-4", "d-flex"], [1, "card-body", "pb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "fs-13", "text-dark", "d-flex", "align-items-center", "mb-0"], [1, "fa-solid", "fa-circle", "text-primary-transparent", "fs-12", "me-1"], [1, "fa-solid", "fa-circle", "text-primary", "fs-12", "me-1"], ["id", "revenue_chart"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "colors"], [1, "col-xl-4", "d-flex"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-borderless", "custom-table"], [1, "avatar", "avatar-lg", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["src", "assets/img/users/user-06.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-medium", "mb-1"], [3, "routerLink"], [1, "fs-13"], [1, "fs-14", "fw-semibold"], [1, "d-flex", "align-items-center", "justify-content-end", "gap-2"], ["data-bs-toggle", "tooltip", "data-bs-title", "New Invoice", 1, "btn", "btn-icon", "btn-sm", "btn-light", 3, "routerLink"], [1, "isax", "isax-add-circle"], ["data-bs-toggle", "tooltip", "data-bs-title", "Add Ledger"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_ledger", 1, "btn", "btn-icon", "btn-sm", "btn-light"], [1, "isax", "isax-document-text-1"], ["src", "assets/img/users/user-01.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-38.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-12.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-02.jpg", "alt", "img", 1, "rounded-circle"], [1, "btn", "btn-light", "btn-lg", "w-100", "text-decoration-underline", "mt-3", 3, "routerLink"], [1, "col-md-12"], [1, "card"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "flex-wrap", "mb-3"], [1, "btn", "btn-primary", "mb-1", 3, "routerLink"], [1, "table-responsive", "no-filter", "no-pagination"], [1, "table", "table-nowrap", "border", "datatable"], [1, "position-relative", "overflow-hidden"], [1, "link-default", 3, "routerLink"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["src", "assets/img/users/user-22.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-medium", "mb-0"], [1, "text-dark"], ["src", "assets/img/users/user-07.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-16.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-08.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-15.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-27.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-14.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/users/user-25.jpg", "alt", "img", 1, "rounded-circle"], [1, "col-lg-12", "col-xl-4", "d-flex"], [1, "card-body", "pb-1"], [1, "fs-14", "fw-semibold", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "flex-shrink-0", "me-2"], ["src", "assets/img/icons/transaction-01.svg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-semibold", "mb-1"], ["href", "javascript:void(0);"], [1, "text-end"], [1, "badge", "badge-lg", "badge-soft-success"], ["src", "assets/img/icons/transaction-02.svg", "alt", "img", 1, "rounded-circle"], [1, "badge", "badge-lg", "badge-soft-danger"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "avatar", "avatar-lg", "flex-shrink-0", "me-2", 3, "routerLink"], [1, "badge", "badge-sm", "badge-soft-success", "d-inline-flex", "align-items-center", "mb-1"], [1, "isax", "isax-tick-circle", "ms-1"], [1, "badge", "badge-sm", "badge-soft-info", "d-inline-flex", "align-items-center", "mb-1"], [1, "isax", "isax-arrow-right-24", "ms-1"], [1, "badge", "badge-sm", "badge-soft-light", "d-inline-flex", "align-items-center", "text-dark", "mb-1"], [1, "isax", "isax-timer-pause", "ms-1"], [1, "badge", "badge-sm", "badge-soft-danger", "d-inline-flex", "align-items-center", "mb-1"], [1, "isax", "isax-close-circle", "ms-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "card", "d-flex"], [1, "card-body", "flex-fill"], [1, "fs-16", "fw-semibold"], [1, "isax", "isax-arrow-circle-up4", "text-success"], ["id", "invoice_income"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "fill", "tooltip", "xaxis", "colors", "grid"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-1", "mb-3"], [1, "d-flex", "align-items-center", "fs-13", "text-dark", "mb-0"], [1, "fa-solid", "fa-circle", "fs-8", "me-1", "text-pink"], [1, "fa-solid", "fa-circle", "fs-8", "me-1", "text-secondary"], [1, "fa-solid", "fa-circle", "fs-8", "me-1", "text-success"], ["id", "total_sales"], [3, "series", "labels", "chart", "dataLabels", "plotOptions", "yaxis", "fill", "tooltip", "xaxis", "colors", "legend", "grid"], ["id", "add_ledger", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body", "pb-1"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "input-group", "position-relative", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function AdminDashboardComponent_Template(rf, ctx) {
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
      \u0275\u0275template(49, AdminDashboardComponent_button_49_Template, 2, 0, "button", 18)(50, AdminDashboardComponent_button_50_Template, 2, 0, "button", 18)(51, AdminDashboardComponent_button_51_Template, 2, 0, "button", 18);
      \u0275\u0275elementStart(52, "div", 19)(53, "div", 20)(54, "div", 21)(55, "div")(56, "h5", 22);
      \u0275\u0275text(57, "Good Morning, Jafna Cremson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 23);
      \u0275\u0275text(59, "You have 15+ invoices saved to draft that has to send to customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 24)(61, "p", 25);
      \u0275\u0275element(62, "i", 26);
      \u0275\u0275text(63, "Friday, 24 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 25);
      \u0275\u0275element(65, "i", 27);
      \u0275\u0275text(66, "11:24 AM");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 28);
      \u0275\u0275element(68, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 20)(70, "div", 30)(71, "div", 31)(72, "div", 32)(73, "div", 33)(74, "h6", 34);
      \u0275\u0275element(75, "i", 35);
      \u0275\u0275text(76, "Overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 36)(78, "div", 37)(79, "div", 38)(80, "span", 39);
      \u0275\u0275element(81, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div")(83, "p", 41);
      \u0275\u0275text(84, "Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "h6", 42);
      \u0275\u0275text(86, "1,041");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "div", 37)(88, "div", 43)(89, "span", 44);
      \u0275\u0275element(90, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "p", 41);
      \u0275\u0275text(93, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "h6", 42);
      \u0275\u0275text(95, "3,462");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "div", 37)(97, "div", 38)(98, "span", 46);
      \u0275\u0275element(99, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div")(101, "p", 41);
      \u0275\u0275text(102, "Amount Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "h6", 42);
      \u0275\u0275text(104, "$1,642");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(105, "div", 37)(106, "div", 43)(107, "span", 48);
      \u0275\u0275element(108, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div")(110, "p", 41);
      \u0275\u0275text(111, "Quotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "h6", 42);
      \u0275\u0275text(113, "2,150");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(114, "div", 30)(115, "div", 31)(116, "div", 32)(117, "div", 33)(118, "h6", 34);
      \u0275\u0275element(119, "i", 50);
      \u0275\u0275text(120, "Sales Analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 36)(122, "div", 37)(123, "div", 38)(124, "span", 39);
      \u0275\u0275element(125, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div")(127, "p", 41);
      \u0275\u0275text(128, "Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "h6", 52);
      \u0275\u0275text(130, "$40,569");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(131, "div", 37)(132, "div", 43)(133, "span", 44);
      \u0275\u0275element(134, "i", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div")(136, "p", 41);
      \u0275\u0275text(137, "Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "h6", 42);
      \u0275\u0275text(139, "$1,54,220");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(140, "div", 37)(141, "div", 38)(142, "span", 46);
      \u0275\u0275element(143, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div")(145, "p", 55);
      \u0275\u0275text(146, "Expenses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "h6", 56);
      \u0275\u0275text(148, "$10,041");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(149, "div", 37)(150, "div", 43)(151, "span", 48);
      \u0275\u0275element(152, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div")(154, "p", 41);
      \u0275\u0275text(155, "Credits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "h6", 42);
      \u0275\u0275text(157, "$12,150");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(158, "div", 30)(159, "div", 31)(160, "div", 32)(161, "div", 33)(162, "h6", 34);
      \u0275\u0275element(163, "i", 58);
      \u0275\u0275text(164, "Invoice Statistics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 36)(166, "div", 37)(167, "div", 38)(168, "span", 39);
      \u0275\u0275element(169, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div")(171, "p", 41);
      \u0275\u0275text(172, "Invoiced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "h6", 52);
      \u0275\u0275text(174, "$21,132");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(175, "div", 37)(176, "div", 43)(177, "span", 44);
      \u0275\u0275element(178, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div")(180, "p", 41);
      \u0275\u0275text(181, "Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "h6", 42);
      \u0275\u0275text(183, "$10,763");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(184, "div", 37)(185, "div", 38)(186, "span", 46);
      \u0275\u0275element(187, "i", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div")(189, "p", 41);
      \u0275\u0275text(190, "Outstanding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "h6", 42);
      \u0275\u0275text(192, "$8041");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(193, "div", 37)(194, "div", 43)(195, "span", 48);
      \u0275\u0275element(196, "i", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div")(198, "p", 41);
      \u0275\u0275text(199, "Overdue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "h6", 62);
      \u0275\u0275text(201, "$41,811.2");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(202, "div", 20)(203, "div", 63)(204, "div", 64)(205, "div", 32)(206, "div", 65)(207, "div")(208, "p", 66);
      \u0275\u0275text(209, "Total Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 38)(211, "h6", 67);
      \u0275\u0275text(212, "897");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "span", 68);
      \u0275\u0275text(214, "+45");
      \u0275\u0275element(215, "i", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "span", 70);
      \u0275\u0275element(217, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "a", 72);
      \u0275\u0275text(219, "View Inventory");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "div", 73);
      \u0275\u0275element(221, "img", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 64)(223, "div", 32)(224, "div", 65)(225, "div")(226, "p", 66);
      \u0275\u0275text(227, "Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div", 38)(229, "h6", 67);
      \u0275\u0275text(230, "645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "span", 68);
      \u0275\u0275text(232, "+45");
      \u0275\u0275element(233, "i", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(234, "span", 70);
      \u0275\u0275element(235, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "a", 72);
      \u0275\u0275text(237, "View Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "div", 73);
      \u0275\u0275element(239, "img", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "div", 64)(241, "div", 32)(242, "div", 65)(243, "div")(244, "p", 66);
      \u0275\u0275text(245, "Total Quotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div", 38)(247, "h6", 67);
      \u0275\u0275text(248, "128");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "span", 68);
      \u0275\u0275text(250, "+45");
      \u0275\u0275element(251, "i", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(252, "span", 70);
      \u0275\u0275element(253, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "a", 72);
      \u0275\u0275text(255, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "div", 73);
      \u0275\u0275element(257, "img", 76);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(258, "div", 77)(259, "div", 31)(260, "div", 78)(261, "div", 33)(262, "h6", 66);
      \u0275\u0275text(263, "Revenue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "div", 79)(265, "div")(266, "p", 66);
      \u0275\u0275text(267, "Total Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 38)(269, "h6", 67);
      \u0275\u0275text(270, "897");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "span", 68);
      \u0275\u0275text(272, "+45");
      \u0275\u0275element(273, "i", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(274, "div", 80)(275, "p", 81);
      \u0275\u0275element(276, "i", 82);
      \u0275\u0275text(277, "Received ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "p", 81);
      \u0275\u0275element(279, "i", 83);
      \u0275\u0275text(280, "Outstanding");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(281, "div", 84);
      \u0275\u0275element(282, "apx-chart", 85);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(283, "div", 86)(284, "div", 31)(285, "div", 32)(286, "div", 33)(287, "h6", 66);
      \u0275\u0275text(288, "Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "div", 87)(290, "table", 88)(291, "tbody")(292, "tr")(293, "td")(294, "div", 38)(295, "a", 89);
      \u0275\u0275element(296, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "div")(298, "h6", 91)(299, "a", 92);
      \u0275\u0275text(300, "Emily Clark");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "p", 93);
      \u0275\u0275text(302, "No of Invoices : 45");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(303, "td")(304, "p", 66);
      \u0275\u0275text(305, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "h6", 94);
      \u0275\u0275text(307, "$3589");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "td")(309, "div", 95)(310, "a", 96);
      \u0275\u0275element(311, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "div", 98)(313, "a", 99);
      \u0275\u0275element(314, "i", 100);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(315, "tr")(316, "td")(317, "div", 38)(318, "a", 89);
      \u0275\u0275element(319, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div")(321, "h6", 91)(322, "a", 92);
      \u0275\u0275text(323, "John Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "p", 93);
      \u0275\u0275text(325, "No of Invoices : 16");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(326, "td")(327, "p", 66);
      \u0275\u0275text(328, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "h6", 94);
      \u0275\u0275text(330, "$5426");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "td")(332, "div", 95)(333, "a", 96);
      \u0275\u0275element(334, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "div", 98)(336, "a", 99);
      \u0275\u0275element(337, "i", 100);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(338, "tr")(339, "td")(340, "div", 38)(341, "a", 89);
      \u0275\u0275element(342, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "div")(344, "h6", 91)(345, "a", 92);
      \u0275\u0275text(346, "Olivia Harris");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(347, "p", 93);
      \u0275\u0275text(348, "No of Invoices : 23");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(349, "td")(350, "p", 66);
      \u0275\u0275text(351, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "h6", 94);
      \u0275\u0275text(353, "$1493");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(354, "td")(355, "div", 95)(356, "a", 96);
      \u0275\u0275element(357, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 98)(359, "a", 99);
      \u0275\u0275element(360, "i", 100);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(361, "tr")(362, "td")(363, "div", 38)(364, "a", 89);
      \u0275\u0275element(365, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "div")(367, "h6", 91)(368, "a", 92);
      \u0275\u0275text(369, "William Parker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(370, "p", 93);
      \u0275\u0275text(371, "No of Invoices : 58");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(372, "td")(373, "p", 66);
      \u0275\u0275text(374, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "h6", 94);
      \u0275\u0275text(376, "$7854");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(377, "td")(378, "div", 95)(379, "a", 96);
      \u0275\u0275element(380, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "div", 98)(382, "a", 99);
      \u0275\u0275element(383, "i", 100);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(384, "tr")(385, "td")(386, "div", 38)(387, "a", 89);
      \u0275\u0275element(388, "img", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "div")(390, "h6", 91)(391, "a", 92);
      \u0275\u0275text(392, "Charlotte Brown");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(393, "p", 93);
      \u0275\u0275text(394, "No of Invoices : 09");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(395, "td")(396, "p", 66);
      \u0275\u0275text(397, "Outstanding ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "h6", 94);
      \u0275\u0275text(399, "$4989");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "td")(401, "div", 95)(402, "a", 96);
      \u0275\u0275element(403, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "div", 98)(405, "a", 99);
      \u0275\u0275element(406, "i", 100);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(407, "a", 105);
      \u0275\u0275text(408, "All Customers");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(409, "div", 20)(410, "div", 106)(411, "div", 107)(412, "div", 32)(413, "div", 108)(414, "h6", 66);
      \u0275\u0275text(415, "Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "a", 109);
      \u0275\u0275text(417, "View all Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(418, "div", 110)(419, "table", 111)(420, "thead")(421, "tr")(422, "th", 112);
      \u0275\u0275text(423, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "th", 112);
      \u0275\u0275text(425, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "th", 112);
      \u0275\u0275text(427, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "th", 112);
      \u0275\u0275text(429, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "th", 112);
      \u0275\u0275text(431, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "th", 112);
      \u0275\u0275text(433, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "th", 112);
      \u0275\u0275text(435, "Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(436, "tbody")(437, "tr")(438, "td")(439, "a", 113);
      \u0275\u0275text(440, "INV00025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "td")(442, "div", 38)(443, "a", 114);
      \u0275\u0275element(444, "img", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "div")(446, "h6", 116)(447, "a", 92);
      \u0275\u0275text(448, "Emily Clark");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(449, "td");
      \u0275\u0275text(450, "22 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "td", 117);
      \u0275\u0275text(452, "$10,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "td");
      \u0275\u0275text(454, "$5,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "td", 117);
      \u0275\u0275text(456, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "td");
      \u0275\u0275text(458, "04 Mar 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(459, "tr")(460, "td")(461, "a", 113);
      \u0275\u0275text(462, "INV00024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(463, "td")(464, "div", 38)(465, "a", 114);
      \u0275\u0275element(466, "img", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "div")(468, "h6", 116)(469, "a", 92);
      \u0275\u0275text(470, "John Carter");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(471, "td");
      \u0275\u0275text(472, "07 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "td", 117);
      \u0275\u0275text(474, "$25,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "td");
      \u0275\u0275text(476, "$5,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "td", 117);
      \u0275\u0275text(478, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "td");
      \u0275\u0275text(480, "20 Feb 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(481, "tr")(482, "td")(483, "a", 113);
      \u0275\u0275text(484, "INV00023");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(485, "td")(486, "div", 38)(487, "a", 114);
      \u0275\u0275element(488, "img", 119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "div")(490, "h6", 116)(491, "a", 92);
      \u0275\u0275text(492, "Sophia White");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(493, "td");
      \u0275\u0275text(494, "09 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "td", 117);
      \u0275\u0275text(496, "$1,20,500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "td");
      \u0275\u0275text(498, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "td", 117);
      \u0275\u0275text(500, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "td");
      \u0275\u0275text(502, "12 Nov 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(503, "tr")(504, "td")(505, "a", 113);
      \u0275\u0275text(506, "INV00022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "td")(508, "div", 38)(509, "a", 114);
      \u0275\u0275element(510, "img", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(511, "div")(512, "h6", 116)(513, "a", 92);
      \u0275\u0275text(514, "Michael Johnson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(515, "td");
      \u0275\u0275text(516, "30 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "td", 117);
      \u0275\u0275text(518, "$7,50,300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "td");
      \u0275\u0275text(520, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(521, "td", 117);
      \u0275\u0275text(522, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "td");
      \u0275\u0275text(524, "25 Oct 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(525, "tr")(526, "td")(527, "a", 113);
      \u0275\u0275text(528, "INV00016");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(529, "td")(530, "div", 38)(531, "a", 114);
      \u0275\u0275element(532, "img", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "div")(534, "h6", 116)(535, "a", 92);
      \u0275\u0275text(536, "Daniel Martinez");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(537, "td");
      \u0275\u0275text(538, "12 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "td", 117);
      \u0275\u0275text(540, "$9,99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "td");
      \u0275\u0275text(542, "$4,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "td", 117);
      \u0275\u0275text(544, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "td");
      \u0275\u0275text(546, "18 Oct 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(547, "tr")(548, "td")(549, "a", 113);
      \u0275\u0275text(550, "INV00015");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(551, "td")(552, "div", 38)(553, "a", 114);
      \u0275\u0275element(554, "img", 122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "div")(556, "h6", 116)(557, "a", 92);
      \u0275\u0275text(558, "Charlotte Brown");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(559, "td");
      \u0275\u0275text(560, "05 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(561, "td", 117);
      \u0275\u0275text(562, "$87,650");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "td");
      \u0275\u0275text(564, "$40,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "td", 117);
      \u0275\u0275text(566, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(567, "td");
      \u0275\u0275text(568, "22 Sep 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(569, "tr")(570, "td")(571, "a", 113);
      \u0275\u0275text(572, "INV00014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "td")(574, "div", 38)(575, "a", 114);
      \u0275\u0275element(576, "img", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "div")(578, "h6", 116)(579, "a", 92);
      \u0275\u0275text(580, "William Parker");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(581, "td");
      \u0275\u0275text(582, "09 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "td", 117);
      \u0275\u0275text(584, "$69,420");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "td");
      \u0275\u0275text(586, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "td", 117);
      \u0275\u0275text(588, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(589, "td");
      \u0275\u0275text(590, "15 Sep 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(591, "tr")(592, "td")(593, "a", 113);
      \u0275\u0275text(594, "INV00013");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(595, "td")(596, "div", 38)(597, "a", 114);
      \u0275\u0275element(598, "img", 124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "div")(600, "h6", 116)(601, "a", 92);
      \u0275\u0275text(602, "Mia Thompson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(603, "td");
      \u0275\u0275text(604, "02 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "td", 117);
      \u0275\u0275text(606, "$33,210");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "td");
      \u0275\u0275text(608, "$15,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(609, "td", 117);
      \u0275\u0275text(610, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "td");
      \u0275\u0275text(612, "20 Aug 2024");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(613, "div", 20)(614, "div", 125)(615, "div", 31)(616, "div", 126)(617, "div", 33)(618, "h6", 66);
      \u0275\u0275text(619, "Recent Transactions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(620, "h6", 127);
      \u0275\u0275text(621, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "div", 128)(623, "div", 38)(624, "a", 129);
      \u0275\u0275element(625, "img", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(626, "div")(627, "h6", 131)(628, "a", 132);
      \u0275\u0275text(629, "Andrew James");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(630, "p", 93)(631, "a", 113);
      \u0275\u0275text(632, "#INV45478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(633, "div", 133)(634, "span", 134);
      \u0275\u0275text(635, "+ $989.15");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(636, "div", 128)(637, "div", 38)(638, "a", 129);
      \u0275\u0275element(639, "img", 135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "div")(641, "h6", 131)(642, "a", 132);
      \u0275\u0275text(643, "John Carter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(644, "p", 93)(645, "a", 113);
      \u0275\u0275text(646, "#INV45477");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(647, "div", 133)(648, "span", 136);
      \u0275\u0275text(649, "- $300.12");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(650, "hr");
      \u0275\u0275elementStart(651, "h6", 127);
      \u0275\u0275text(652, "Yesterday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(653, "div", 128)(654, "div", 38)(655, "a", 129);
      \u0275\u0275element(656, "img", 135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(657, "div")(658, "h6", 131)(659, "a", 132);
      \u0275\u0275text(660, "Sophia White");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(661, "p", 93)(662, "a", 113);
      \u0275\u0275text(663, "#INV45476");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(664, "div", 133)(665, "span", 134);
      \u0275\u0275text(666, " + $669");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(667, "div", 128)(668, "div", 38)(669, "a", 129);
      \u0275\u0275element(670, "img", 135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(671, "div")(672, "h6", 131)(673, "a", 132);
      \u0275\u0275text(674, "Daniel Martinez");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(675, "p", 93)(676, "a", 113);
      \u0275\u0275text(677, "#INV45475");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(678, "div", 133)(679, "span", 134);
      \u0275\u0275text(680, " + $474.22");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(681, "div", 128)(682, "div", 38)(683, "a", 129);
      \u0275\u0275element(684, "img", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(685, "div")(686, "h6", 131)(687, "a", 132);
      \u0275\u0275text(688, "Amelia Robinson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(689, "p", 93)(690, "a", 113);
      \u0275\u0275text(691, "#INV45474");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(692, "div", 133)(693, "span", 134);
      \u0275\u0275text(694, " + $339.79");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(695, "div", 77)(696, "div", 31)(697, "div", 32)(698, "div", 33)(699, "h6", 66);
      \u0275\u0275text(700, "Quotations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(701, "div", 137)(702, "div", 38)(703, "a", 138);
      \u0275\u0275element(704, "img", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(705, "div")(706, "h6", 131)(707, "a", 92);
      \u0275\u0275text(708, "Emily Clark");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(709, "p", 93);
      \u0275\u0275text(710, "QU0014");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(711, "div", 133)(712, "span", 139);
      \u0275\u0275text(713, "Accepted");
      \u0275\u0275element(714, "i", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(715, "p", 93);
      \u0275\u0275text(716, "25 Mar 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(717, "div", 137)(718, "div", 38)(719, "a", 138);
      \u0275\u0275element(720, "img", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "div")(722, "h6", 131)(723, "a", 92);
      \u0275\u0275text(724, "David Anderson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(725, "p", 93);
      \u0275\u0275text(726, "QU0147");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(727, "div", 133)(728, "span", 141);
      \u0275\u0275text(729, "Sent");
      \u0275\u0275element(730, "i", 142);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(731, "p", 93);
      \u0275\u0275text(732, "12 Feb 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(733, "div", 137)(734, "div", 38)(735, "a", 138);
      \u0275\u0275element(736, "img", 119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(737, "div")(738, "h6", 131)(739, "a", 92);
      \u0275\u0275text(740, "Sophia White");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(741, "p", 93);
      \u0275\u0275text(742, "QU1947");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(743, "div", 133)(744, "span", 143);
      \u0275\u0275text(745, "Expired");
      \u0275\u0275element(746, "i", 144);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(747, "p", 93);
      \u0275\u0275text(748, "08 Mar 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(749, "div", 137)(750, "div", 38)(751, "a", 138);
      \u0275\u0275element(752, "img", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(753, "div")(754, "h6", 131)(755, "a", 92);
      \u0275\u0275text(756, "Michael Johnson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(757, "p", 93);
      \u0275\u0275text(758, "QU2842");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(759, "div", 133)(760, "span", 145);
      \u0275\u0275text(761, "Declined");
      \u0275\u0275element(762, "i", 146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "p", 93);
      \u0275\u0275text(764, "31 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(765, "div", 147)(766, "div", 38)(767, "a", 138);
      \u0275\u0275element(768, "img", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(769, "div")(770, "h6", 131)(771, "a", 92);
      \u0275\u0275text(772, "Emily Clark");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(773, "p", 93);
      \u0275\u0275text(774, "QU7868");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(775, "div", 133)(776, "span", 139);
      \u0275\u0275text(777, "Accepted");
      \u0275\u0275element(778, "i", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(779, "p", 93);
      \u0275\u0275text(780, "18 Jan 2025");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(781, "div", 63)(782, "div", 148)(783, "div", 149)(784, "div", 147)(785, "div")(786, "p", 66);
      \u0275\u0275text(787, "Total Income on Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(788, "h6", 150);
      \u0275\u0275text(789, "$98,545");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(790, "div")(791, "h6", 131);
      \u0275\u0275text(792, "30.2 ");
      \u0275\u0275element(793, "i", 151);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(794, "p", 93);
      \u0275\u0275text(795, "Vs Last Week");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(796, "div", 152);
      \u0275\u0275element(797, "apx-chart", 153);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(798, "div", 148)(799, "div", 149)(800, "h6", 33);
      \u0275\u0275text(801, "Top Sales Statistics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(802, "div", 154)(803, "p", 155);
      \u0275\u0275element(804, "i", 156);
      \u0275\u0275text(805, "Dell XPS 13");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(806, "p", 155);
      \u0275\u0275element(807, "i", 157);
      \u0275\u0275text(808, "Nike T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(809, "p", 155);
      \u0275\u0275element(810, "i", 158);
      \u0275\u0275text(811, "Apple iPhone 15");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(812, "div", 159);
      \u0275\u0275element(813, "apx-chart", 160);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(814, "div", 161)(815, "div", 162)(816, "div", 163)(817, "div", 164)(818, "h4", 165);
      \u0275\u0275text(819, "Add New Ledger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(820, "button", 166);
      \u0275\u0275element(821, "i", 167);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(822, "form")(823, "div", 168)(824, "div", 33)(825, "label", 169);
      \u0275\u0275text(826, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(827, "input", 170);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "div", 33)(829, "label", 169);
      \u0275\u0275text(830, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(831, "div", 171);
      \u0275\u0275element(832, "input", 172);
      \u0275\u0275elementStart(833, "span", 173);
      \u0275\u0275element(834, "i", 174);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(835, "div", 33)(836, "label", 169);
      \u0275\u0275text(837, "Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "div", 38)(839, "div", 175);
      \u0275\u0275element(840, "input", 176);
      \u0275\u0275elementStart(841, "label", 177);
      \u0275\u0275text(842, " Credit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(843, "div", 178);
      \u0275\u0275element(844, "input", 179);
      \u0275\u0275elementStart(845, "label", 180);
      \u0275\u0275text(846, " Debit ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(847, "div", 181)(848, "button", 182);
      \u0275\u0275text(849, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(850, "button", 183);
      \u0275\u0275text(851, "Create");
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
      \u0275\u0275advance(14);
      \u0275\u0275property("hasPermissions", \u0275\u0275pureFunction1(106, _c2, \u0275\u0275pureFunction0(105, _c1)));
      \u0275\u0275advance();
      \u0275\u0275property("hasPermissions", \u0275\u0275pureFunction1(109, _c3, \u0275\u0275pureFunction0(108, _c1)));
      \u0275\u0275advance();
      \u0275\u0275property("hasPermissions", \u0275\u0275pureFunction1(112, _c5, \u0275\u0275pureFunction0(111, _c4)));
      \u0275\u0275advance(167);
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
  }, dependencies: [
    CommonModule,
    NgApexchartsModule,
    ChartComponent,
    RouterLink,
    DateRangePickerComponent,
    HasPermissionsDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", imports: [
      CommonModule,
      NgApexchartsModule,
      RouterLink,
      DateRangePickerComponent,
      HasPermissionsDirective
    ], template: `<!-- Start Breadcrumb -->
<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-4">
  <div>
    <h6>Dashboard</h6>
  </div>
  <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
    <app-date-range-picker />
    <div class="dropdown me-1">
      <a class="btn btn-primary d-flex align-items-center justify-content-center dropdown-toggle"
        data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
        Create New
      </a>
      <ul class="dropdown-menu dropdown-menu-start">
        <li>
          <a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-text-1 me-2"></i>Invoice
          </a>
        </li>
        <li>
          <a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-send me-2"></i>Expense
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-add me-2"></i>Credit Notes
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-money-recive me-2"></i>Debit Notes
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document me-2"></i>Purchase Order
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-download me-2"></i>Quotation
          </a>
        </li>
        <li>
          <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">
            <i class="isax isax-document-forward me-2"></i>Delivery Challan
          </a>
        </li>
      </ul>
    </div>
    <div class="dropdown">
      <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"
        data-bs-toggle="dropdown">
        <i class="isax isax-export-1 me-1"></i>Export
      </a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>
        </li>
        <li>
          <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>
        </li>
      </ul>
    </div>
  </div>
</div>
<!-- End Breadcrumb -->

<!-- AND -->
<button *hasPermissions="{ permissions: ['CLIENT_CREATE','CLIENT_VALIDATE'], mode: 'AND' }">
  Cr\xE9er & Valider Client
</button>
<!-- OR -->
<button *hasPermissions="{ permissions: ['CLIENT_CREATE','CLIENT_VALIDATE'], mode: 'OR' }">
  Modifier Client
</button>
<!-- Une seule permission -->
<button *hasPermissions="{ permissions: ['CLIENT_CREATE'] }">
  Nouveau Client
</button>

<!-- Start row -->
<div class="bg-primary rounded welcome-wrap position-relative mb-4">
  <div class="row">
    <div class="col-lg-8 col-md-9 col-sm-7">
      <div>
        <h5 class="text-white mb-1">Good Morning, Jafna Cremson</h5>
        <p class="text-white mb-3">You have 15+ invoices saved to draft that has to send to customers</p>
        <div class="d-flex align-items-center flex-wrap gap-3">
          <p class="d-flex align-items-center fs-13 text-white mb-0"><i class="isax isax-calendar5 me-1"></i>Friday, 24
            Mar 2025</p>
          <p class="d-flex align-items-center fs-13 text-white mb-0"><i class="isax isax-clock5 me-1"></i>11:24 AM</p>
        </div>
      </div>

    </div>
  </div>
  <div class="position-absolute end-0 top-50 translate-middle-y p-2 d-none d-sm-block">
    <img src="assets/img/icons/dashboard.svg" alt="img">
  </div>
</div>
<!-- End row -->

<!-- Start row -->
<div class="row">

  <div class="col-md-4 d-flex">
    <div class="card flex-fill">
      <div class="card-body">
        <div class="mb-3">
          <h6 class="d-flex align-items-center mb-1"><i class="isax isax-category5 text-default me-2"></i>Overview</h6>
        </div>
        <div class="row g-4">
          <div class="col-xl-6">
            <div class="d-flex align-items-center">
              <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">
                <i class="isax isax-document-text-1 fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Invoices</p>
                <h6 class="fs-16 fw-semibold mb-0 text-truncate">1,041</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center me-2">
              <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">
                <i class="isax isax-profile-2user fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Customers</p>
                <h6 class="fs-16 fw-semibold mb-0 text-truncate">3,462</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center">
              <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">
                <i class="isax isax-dcube fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Amount Due</p>
                <h6 class="fs-16 fw-semibold mb-0 text-truncate">$1,642</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center me-2">
              <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">
                <i class="isax isax-document-text fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Quotations</p>
                <h6 class="fs-16 fw-semibold mb-0 text-truncate">2,150</h6>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->

  <div class="col-md-4 d-flex">
    <div class="card flex-fill">
      <div class="card-body">
        <div class="mb-3">
          <h6 class="d-flex align-items-center mb-1"><i class="isax isax-chart-215 text-default me-2"></i>Sales
            Analytics</h6>
        </div>
        <div class="row g-4">
          <div class="col-xl-6">
            <div class="d-flex align-items-center">
              <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">
                <i class="isax isax-document-forward fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Total Sales</p>
                <h6 class="fs-16 fw-semibold mb-0">$40,569</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center me-2">
              <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">
                <i class="isax isax-programming-arrow fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Purchase</p>
                <h6 class="fs-16 fw-semibold mb-0 text-truncate">$1,54,220</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center">
              <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">
                <i class="isax isax-dollar-circle fs-20"></i>
              </span>
              <div>
                <p class="mb-1 mb-0">Expenses</p>
                <h6 class="fs-16 fw-semibold text-truncate">$10,041</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center me-2">
              <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">
                <i class="isax isax-flag fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Credits</p>
                <h6 class="fs-16 fw-semibold mb-0 text-truncate">$12,150</h6>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->

  <div class="col-md-4 d-flex">
    <div class="card flex-fill">
      <div class="card-body">
        <div class="mb-3">
          <h6 class="d-flex align-items-center mb-1"><i class="isax isax-chart-success5 text-default me-2"></i>Invoice
            Statistics</h6>
        </div>
        <div class="row g-4">
          <div class="col-xl-6">
            <div class="d-flex align-items-center">
              <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">
                <i class="isax isax-document fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Invoiced</p>
                <h6 class="fs-16 fw-semibold mb-0">$21,132</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center me-2">
              <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">
                <i class="isax isax-document-forward fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Received</p>
                <h6 class="fs-16 fw-semibold mb-0 text-truncate">$10,763</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center">
              <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">
                <i class="isax isax-document-previous fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Outstanding</p>
                <h6 class="fs-16 fw-semibold mb-0 text-truncate">$8041</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex align-items-center me-2">
              <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">
                <i class="isax isax-dislike fs-20"></i>
              </span>
              <div>
                <p class="mb-1 text-truncate">Overdue</p>
                <h6 class="fs-16 fw-semibold text-truncate mb-0">$41,811.2</h6>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->

</div>
<!-- End row -->

<!-- Start row -->
<div class="row">

  <div class="col-md-6 col-xl-4 d-flex flex-column">

    <div class="card overflow-hidden z-1 flex-fill">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
          <div>
            <p class="mb-1">Total Products</p>
            <div class="d-flex align-items-center">
              <h6 class="fs-16 fw-semibold me-2">897</h6>
              <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>
            </div>
          </div>
          <span class="avatar avatar-lg bg-light text-dark avatar-rounded">
            <i class="isax isax-document-text fs-16"></i>
          </span>
        </div>
        <a [routerLink]="routes.allInventory" class="fw-medium text-decoration-underline">View Inventory</a>
      </div> <!-- end card body -->
      <div class="position-absolute end-0 bottom-0 z-n1">
        <img src="assets/img/bg/card-bg-01.svg" alt="img">
      </div>
    </div> <!-- end card -->

    <div class="card overflow-hidden z-1 flex-fill">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
          <div>
            <p class="mb-1">Total Sales</p>
            <div class="d-flex align-items-center">
              <h6 class="fs-16 fw-semibold me-2">645</h6>
              <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>
            </div>
          </div>
          <span class="avatar avatar-lg bg-light text-dark avatar-rounded">
            <i class="isax isax-document-text fs-16"></i>
          </span>
        </div>
        <a [routerLink]="routes.invoiceList" class="fw-medium text-decoration-underline">View Invoices</a>
      </div> <!-- end card body -->
      <div class="position-absolute end-0 bottom-0 z-n1">
        <img src="assets/img/bg/card-bg-02.svg" alt="img">
      </div>
    </div> <!-- end card -->

    <div class="card overflow-hidden z-1 flex-fill">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
          <div>
            <p class="mb-1">Total Quotations</p>
            <div class="d-flex align-items-center">
              <h6 class="fs-16 fw-semibold me-2">128</h6>
              <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>
            </div>
          </div>
          <span class="avatar avatar-lg bg-light text-dark avatar-rounded">
            <i class="isax isax-document-text fs-16"></i>
          </span>
        </div>
        <a [routerLink]="routes.quotations" class="fw-medium text-decoration-underline">View All</a>
      </div> <!-- end card body -->
      <div class="position-absolute end-0 bottom-0 z-n1">
        <img src="assets/img/bg/card-bg-03.svg" alt="img">
      </div>
    </div> <!-- end card -->

  </div> <!-- end col -->

  <div class="col-md-6 col-xl-4 d-flex">
    <div class="card flex-fill">
      <div class="card-body pb-0">
        <div class="mb-3">
          <h6 class="mb-1">Revenue</h6>
        </div>
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <p class="mb-1">Total Revenue</p>
            <div class="d-flex align-items-center">
              <h6 class="fs-16 fw-semibold me-2">897</h6>
              <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <p class="fs-13 text-dark d-flex align-items-center mb-0"><i
                class="fa-solid fa-circle text-primary-transparent fs-12 me-1"></i>Received </p>
            <p class="fs-13 text-dark d-flex align-items-center mb-0"><i
                class="fa-solid fa-circle text-primary fs-12 me-1"></i>Outstanding</p>
          </div>
        </div>
        <div id="revenue_chart">
          <apx-chart [series]="revenueChart.series" [chart]="revenueChart.chart" [dataLabels]="revenueChart.dataLabels"
            [plotOptions]="revenueChart.plotOptions" [yaxis]="revenueChart.yaxis" [legend]="revenueChart.legend"
            [fill]="revenueChart.fill" [stroke]="revenueChart.stroke" [tooltip]="revenueChart.tooltip"
            [xaxis]="revenueChart.xaxis" [colors]="revenueChart.colors" [fill]="revenueChart.fill"></apx-chart>
        </div>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->

  <div class="col-xl-4 d-flex">
    <div class="card flex-fill">
      <div class="card-body">
        <div class="mb-3">
          <h6 class="mb-1">Customers</h6>
        </div>
        <div class="table-responsive">
          <table class="table table-nowrap table-borderless custom-table">
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-06.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>
                      <p class="fs-13">No of Invoices : 45</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="mb-1">Outstanding </p>
                  <h6 class="fs-14 fw-semibold">$3589</h6>
                </td>
                <td>
                  <div class="d-flex align-items-center justify-content-end gap-2">
                    <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                      data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>
                    <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">
                      <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light" data-bs-toggle="modal"
                        data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-01.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">John Smith</a></h6>
                      <p class="fs-13">No of Invoices : 16</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="mb-1">Outstanding </p>
                  <h6 class="fs-14 fw-semibold">$5426</h6>
                </td>
                <td>
                  <div class="d-flex align-items-center justify-content-end gap-2">
                    <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                      data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>
                    <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">
                      <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light" data-bs-toggle="modal"
                        data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-38.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Olivia Harris</a></h6>
                      <p class="fs-13">No of Invoices : 23</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="mb-1">Outstanding </p>
                  <h6 class="fs-14 fw-semibold">$1493</h6>
                </td>
                <td>
                  <div class="d-flex align-items-center justify-content-end gap-2">
                    <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                      data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>
                    <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">
                      <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light" data-bs-toggle="modal"
                        data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-12.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">William Parker</a></h6>
                      <p class="fs-13">No of Invoices : 58</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="mb-1">Outstanding </p>
                  <h6 class="fs-14 fw-semibold">$7854</h6>
                </td>
                <td>
                  <div class="d-flex align-items-center justify-content-end gap-2">
                    <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                      data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>
                    <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">
                      <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light" data-bs-toggle="modal"
                        data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-02.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Charlotte Brown</a></h6>
                      <p class="fs-13">No of Invoices : 09</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="mb-1">Outstanding </p>
                  <h6 class="fs-14 fw-semibold">$4989</h6>
                </td>
                <td>
                  <div class="d-flex align-items-center justify-content-end gap-2">
                    <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                      data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>
                    <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">
                      <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light" data-bs-toggle="modal"
                        data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <a [routerLink]="routes.customerList" class="btn btn-light btn-lg w-100 text-decoration-underline mt-3">All
          Customers</a>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->
</div>
<!-- End row -->

<!-- Start row -->
<div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
          <h6 class="mb-1">Invoices</h6>
          <a [routerLink]="routes.invoiceList" class="btn btn-primary mb-1">View all Invoices</a>
        </div>
        <div class="table-responsive no-filter no-pagination">
          <table class="table table-nowrap border datatable">
            <thead>
              <tr>
                <th class="position-relative overflow-hidden">ID</th>
                <th class="position-relative overflow-hidden">Customer</th>
                <th class="position-relative overflow-hidden">Created On</th>
                <th class="position-relative overflow-hidden">Amount</th>
                <th class="position-relative overflow-hidden">Paid</th>
                <th class="position-relative overflow-hidden">Payment Mode</th>
                <th class="position-relative overflow-hidden">Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a [routerLink]="routes.invoiceDetails" class="link-default">INV00025</a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>
                    </div>
                  </div>
                </td>
                <td>22 Feb 2025</td>
                <td class="text-dark">$10,000</td>
                <td>$5,000</td>
                <td class="text-dark">Cash</td>
                <td>04 Mar 2025</td>
              </tr>
              <tr>
                <td>
                  <a [routerLink]="routes.invoiceDetails" class="link-default">INV00024</a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-07.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">John Carter</a></h6>
                    </div>
                  </div>
                </td>
                <td>07 Feb 2025</td>
                <td class="text-dark">$25,750</td>
                <td>$5,000</td>
                <td class="text-dark">Check</td>
                <td>20 Feb 2025</td>
              </tr>
              <tr>
                <td>
                  <a [routerLink]="routes.invoiceDetails" class="link-default">INV00023</a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-16.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Sophia White</a></h6>
                    </div>
                  </div>
                </td>
                <td>09 Dec 2024</td>
                <td class="text-dark">$1,20,500</td>
                <td>$60,000</td>
                <td class="text-dark">Check</td>
                <td>12 Nov 2024</td>
              </tr>
              <tr>
                <td>
                  <a [routerLink]="routes.invoiceDetails" class="link-default">INV00022</a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-08.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Michael Johnson</a></h6>
                    </div>
                  </div>
                </td>
                <td>30 Nov 2024</td>
                <td class="text-dark">$7,50,300</td>
                <td>$60,000</td>
                <td class="text-dark">Check</td>
                <td>25 Oct 2024</td>
              </tr>
              <tr>
                <td>
                  <a [routerLink]="routes.invoiceDetails" class="link-default">INV00016</a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-15.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Daniel Martinez</a></h6>
                    </div>
                  </div>
                </td>
                <td>12 Oct 2024</td>
                <td class="text-dark">$9,99,999</td>
                <td>$4,00,000</td>
                <td class="text-dark">Cash</td>
                <td>18 Oct 2024</td>
              </tr>
              <tr>
                <td>
                  <a [routerLink]="routes.invoiceDetails" class="link-default">INV00015</a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-27.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Charlotte Brown</a></h6>
                    </div>
                  </div>
                </td>
                <td>05 Oct 2024</td>
                <td class="text-dark">$87,650</td>
                <td>$40,000</td>
                <td class="text-dark">Check</td>
                <td>22 Sep 2024</td>
              </tr>
              <tr>
                <td>
                  <a [routerLink]="routes.invoiceDetails" class="link-default">INV00014</a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-14.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">William Parker</a></h6>
                    </div>
                  </div>
                </td>
                <td>09 Sep 2024</td>
                <td class="text-dark">$69,420</td>
                <td>$30,000</td>
                <td class="text-dark">Cash</td>
                <td>15 Sep 2024</td>
              </tr>
              <tr>
                <td>
                  <a [routerLink]="routes.invoiceDetails" class="link-default">INV00013</a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                      <img src="assets/img/users/user-25.jpg" class="rounded-circle" alt="img">
                    </a>
                    <div>
                      <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Mia Thompson</a></h6>
                    </div>
                  </div>
                </td>
                <td>02 Sep 2024</td>
                <td class="text-dark">$33,210</td>
                <td>$15,000</td>
                <td class="text-dark">Check</td>
                <td>20 Aug 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->
</div>
<!-- End row -->

<!-- Start row -->
<div class="row">

  <div class="col-lg-12 col-xl-4 d-flex">
    <div class="card flex-fill">
      <div class="card-body pb-1">
        <div class="mb-3">
          <h6 class="mb-1">Recent Transactions</h6>
        </div>
        <h6 class="fs-14 fw-semibold mb-3">Today</h6>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
              <img src="assets/img/icons/transaction-01.svg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Andrew James</a></h6>
              <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45478</a></p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-lg badge-soft-success">+ $989.15</span>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
              <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">John Carter</a></h6>
              <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45477</a></p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-lg badge-soft-danger">- $300.12</span>
          </div>
        </div>
        <hr>
        <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
              <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Sophia White</a></h6>
              <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45476</a></p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-lg badge-soft-success"> + $669</span>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
              <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Daniel Martinez</a></h6>
              <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45475</a></p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-lg badge-soft-success"> + $474.22</span>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
              <img src="assets/img/icons/transaction-01.svg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Amelia Robinson</a></h6>
              <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45474</a></p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-lg badge-soft-success"> + $339.79</span>
          </div>
        </div>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->

  <div class="col-md-6 col-xl-4 d-flex">
    <div class="card flex-fill">
      <div class="card-body">
        <div class="mb-3">
          <h6 class="mb-1">Quotations</h6>
        </div>
        <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
          <div class="d-flex align-items-center">
            <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">
              <img src="assets/img/users/user-02.jpg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>
              <p class="fs-13">QU0014</p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center mb-1">Accepted<i
                class="isax isax-tick-circle ms-1"></i></span>
            <p class="fs-13">25 Mar 2025</p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
          <div class="d-flex align-items-center">
            <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">
              <img src="assets/img/users/user-07.jpg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">David Anderson</a></h6>
              <p class="fs-13">QU0147</p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-sm badge-soft-info d-inline-flex align-items-center mb-1">Sent<i
                class="isax isax-arrow-right-24 ms-1"></i></span>
            <p class="fs-13">12 Feb 2025</p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
          <div class="d-flex align-items-center">
            <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">
              <img src="assets/img/users/user-16.jpg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Sophia White</a></h6>
              <p class="fs-13">QU1947</p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-sm badge-soft-light d-inline-flex align-items-center text-dark mb-1">Expired<i
                class="isax isax-timer-pause ms-1"></i></span>
            <p class="fs-13">08 Mar 2025</p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
          <div class="d-flex align-items-center">
            <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">
              <img src="assets/img/users/user-08.jpg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Michael Johnson</a></h6>
              <p class="fs-13">QU2842</p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-sm badge-soft-danger d-inline-flex align-items-center mb-1">Declined<i
                class="isax isax-close-circle ms-1"></i></span>
            <p class="fs-13">31 Jan 2025</p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">
              <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">
            </a>
            <div>
              <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>
              <p class="fs-13">QU7868</p>
            </div>
          </div>
          <div class="text-end">
            <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center mb-1">Accepted<i
                class="isax isax-tick-circle ms-1"></i></span>
            <p class="fs-13">18 Jan 2025</p>
          </div>
        </div>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->

  <div class="col-md-6 col-xl-4 d-flex flex-column">
    <div class="card d-flex">
      <div class="card-body flex-fill">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <p class="mb-1">Total Income on Invoice</p>
            <h6 class="fs-16 fw-semibold">$98,545</h6>
          </div>
          <div>
            <h6 class="fs-14 fw-semibold mb-1">30.2 <i class="isax isax-arrow-circle-up4 text-success"></i></h6>
            <p class="fs-13">Vs Last Week</p>
          </div>
        </div>
      </div> <!-- end card body -->
      <div id="invoice_income">
        <apx-chart [series]="invoiceIncome.series" [chart]="invoiceIncome.chart" [dataLabels]="invoiceIncome.dataLabels"
          [plotOptions]="invoiceIncome.plotOptions" [yaxis]="invoiceIncome.yaxis" [fill]="invoiceIncome.fill"
          [tooltip]="invoiceIncome.tooltip" [xaxis]="invoiceIncome.xaxis" [colors]="invoiceIncome.colors"
          [grid]="invoiceIncome.grid" [fill]="invoiceIncome.fill"></apx-chart>
      </div>
    </div> <!-- end card -->
    <div class="card d-flex">
      <div class="card-body flex-fill">
        <h6 class="mb-3">Top Sales Statistics</h6>
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
          <p class="d-flex align-items-center fs-13 text-dark mb-0"><i
              class="fa-solid fa-circle fs-8 me-1 text-pink"></i>Dell XPS 13</p>
          <p class="d-flex align-items-center fs-13 text-dark mb-0"><i
              class="fa-solid fa-circle fs-8 me-1 text-secondary"></i>Nike T-shirt</p>
          <p class="d-flex align-items-center fs-13 text-dark mb-0"><i
              class="fa-solid fa-circle fs-8 me-1 text-success"></i>Apple iPhone 15</p>
        </div>
        <div id="total_sales">
          <apx-chart [series]="salesChart.series" [labels]="salesChart.labels" [chart]="salesChart.chart"
            [dataLabels]="salesChart.dataLabels" [plotOptions]="salesChart.plotOptions" [yaxis]="salesChart.yaxis"
            [fill]="salesChart.fill" [tooltip]="salesChart.tooltip" [xaxis]="salesChart.xaxis"
            [colors]="salesChart.colors" [legend]="salesChart.legend" [grid]="salesChart.grid"
            [fill]="salesChart.fill"></apx-chart>
        </div>
      </div> <!-- end card body -->
    </div> <!-- end card -->
  </div> <!-- end col -->

</div>
<!-- End row -->


<!-- Start Add Ledger  -->
<div id="add_ledger" class="modal fade">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Add New Ledger</h4>
        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal"
          aria-label="Close"><i class="fa-solid fa-x"></i></button>
      </div>
      <form>
        <div class="modal-body pb-1">
          <div class="mb-3">
            <label class="form-label">Amount</label>
            <input type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">Date</label>
            <div class="input-group position-relative ngxdate">
              <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate"
                placeholder="dd/mm/yyyy">
              <span class="input-icon-addon fs-16 text-gray-9">
                <i class="isax isax-calendar-2"></i>
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Mode</label>
            <div class="d-flex align-items-center">
              <div class="form-check me-3">
                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1">
                <label class="form-check-label" for="Radio-sm-1">
                  Credit
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2" checked="">
                <label class="form-check-label" for="Radio-sm-2">
                  Debit
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
          <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- End Add Ledger -->` }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/dashboard/admin-dashboard/admin-dashboard.component.ts", lineNumber: 54 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-W6MGJLHG.js.map
