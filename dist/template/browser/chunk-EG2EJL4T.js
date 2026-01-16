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
  CustomPaginationComponent
} from "./chunk-MFJENDE3.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-HOUK7BRS.js";
import {
  PaginationService
} from "./chunk-3QZ7Y34U.js";
import {
  MatTableDataSource
} from "./chunk-D2PNAUHN.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-M4MC2D7Y.js";
import "./chunk-UNWSAGEL.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import "./chunk-6H2KZBXU.js";
import "./chunk-KKWHEPUK.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-BLAAMQ2R.js";
import {
  DataService,
  routes
} from "./chunk-U2VXEBUE.js";
import "./chunk-SCUCSJ4X.js";
import {
  Router
} from "./chunk-PCRWA3NK.js";
import "./chunk-ZM5T2PIK.js";
import "./chunk-PQZYD7EB.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/super-admin/subscription/subscription.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
var _c2 = (a0) => ({ "show": a0 });
var _c3 = (a0) => ({ "d-none": a0 });
function SubscriptionComponent_For_209_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 156)(3, "input", 157);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionComponent_For_209_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 158)(6, "a", 159);
    \u0275\u0275element(7, "img", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 161)(10, "a", 162);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "p", 127);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "p", 127);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "span", 163);
    \u0275\u0275text(28);
    \u0275\u0275element(29, "i", 164);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td", 165)(31, "a", 166);
    \u0275\u0275element(32, "i", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ul", 6)(34, "li")(35, "a", 168);
    \u0275\u0275element(36, "i", 169);
    \u0275\u0275text(37, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "li")(39, "a", 170);
    \u0275\u0275element(40, "i", 171);
    \u0275\u0275text(41, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "li")(43, "a", 172);
    \u0275\u0275element(44, "i", 173);
    \u0275\u0275text(45, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/icons/", data_r2.Image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.Company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.BillingCycle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.PaymentMode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.Amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CreatedOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.ExpiringOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.Status === "Paid" ? "badge-soft-success" : "badge-soft-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.Status === "Paid" ? " isax-tick-circle" : "isax-close-circle");
  }
}
function SubscriptionComponent_Conditional_210_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 174);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SubscriptionComponent_app_custom_pagination_211_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
Chart.register(...registerables);
var SubscriptionComponent = class _SubscriptionComponent {
  data;
  router;
  pagination;
  routes = routes;
  showFilter = false;
  selectedFilter = [false];
  isFilter() {
    this.showFilter = !this.showFilter;
  }
  isSelectedFilter(index) {
    this.selectedFilter[index] = !this.selectedFilter[index];
  }
  formatLabel(value) {
    if (value >= 1e3) {
      return Math.round(value / 1e3) + "k";
    }
    return `${value}`;
  }
  smalltask1;
  smalltask2;
  smalltask3;
  smalltask4;
  chart;
  ngOnInit() {
    this.smalltask1 = {
      chart: {
        width: 100,
        height: 80,
        type: "donut",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%"
            // Adjusts the size of the donut hole
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [90, 10],
      colors: ["#7539FF", "rgba(67, 87, 133, .09)"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        show: false
      }
    };
    this.smalltask2 = {
      chart: {
        width: 100,
        height: 80,
        type: "donut",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%"
            // Adjusts the size of the donut hole
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [70, 30],
      colors: ["#3F8BFE", "rgba(67, 87, 133, .09)"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        show: false
      }
    };
    this.smalltask3 = {
      chart: {
        width: 100,
        height: 80,
        type: "donut",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%"
            // Adjusts the size of the donut hole
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [30, 70],
      colors: ["#27AE60", "rgba(67, 87, 133, .09)"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        show: false
      }
    };
    this.smalltask4 = {
      chart: {
        width: 100,
        height: 80,
        type: "donut",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%"
            // Adjusts the size of the donut hole
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [20, 80],
      colors: ["#EF1E1E", "rgba(67, 87, 133, .09)"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        show: false
      }
    };
  }
  // pagination variables
  initChecked = false;
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  row = true;
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getSubscription().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.subscriptions) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSubscription().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  searchData(value) {
    this.searchDataValue = value.trim().toLowerCase();
    this.dataSource.filter = this.searchDataValue;
    this.tableData = this.dataSource.filteredData;
    this.row = this.tableData.length > 0;
    if (this.searchDataValue !== "") {
      this.pagination.calculatePageSize.next({
        totalData: this.tableData.length,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.tableData.map((_, i) => i + 1)
        // Generates serials like [1, 2, 3...]
      });
    } else {
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    }
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
      });
    }
  }
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  selectAll(initChecked) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
  static \u0275fac = function SubscriptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionComponent, selectors: [["app-subscription"]], viewQuery: function SubscriptionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 557, vars: 43, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-1"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "data-attributes"], [1, "task-chart", 3, "series", "chart", "colors", "dataLabels", "plotOptions", "legend", "responsive"], [1, "fs-13", "text-center", "border", "rounded-1", "p-2", "bg-light", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "plan"], ["mat-sort-header", "billing"], ["mat-sort-header", "payment"], ["mat-sort-header", "amount"], ["mat-sort-header", "created"], ["mat-sort-header", "expiring"], ["mat-sort-header", "status"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/icons/company-01.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-02.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-03.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-04.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "view_invoice_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], [1, "card"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", "User Img"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2", "position-relative", "z-1"], [1, "me-4"], [1, "fs-14", "fw-semibold", "mb-1"], ["src", "assets/img/icons/not-paid.png", "alt", "User Img", "width", "48", "height", "48"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], [1, "row", "gy-3", "position-relative", "z-1"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "bg-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "avatar", "avatar-lg", "flex-shrink-0", "me-2"], ["src", "assets/img/billing-icon.jpg", "alt", "User Img"], [1, "fs-14", "fw-semibold", "text-dark"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table"], [1, "thead-dark"], [1, "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "me-3"], [1, "mb-2"], ["src", "assets/img/icons/qr.png", "alt", "User Img"], [1, "mb-0"], [1, "fs-14", "fw-semibold"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg"], ["src", "assets/img/invoice-logo.svg", "alt", "User Img"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-document-download", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SubscriptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Subscriptions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 6)(11, "li")(12, "a", 7);
      \u0275\u0275text(13, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 7);
      \u0275\u0275text(16, "Download as Excel");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "div")(23, "p", 13);
      \u0275\u0275text(24, "Total Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 14);
      \u0275\u0275text(26, "$5,340");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "p", 15);
      \u0275\u0275element(29, "apx-chart", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "p", 17)(31, "span", 18);
      \u0275\u0275element(32, "i", 19);
      \u0275\u0275text(33, "5.62% ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 9)(36, "div", 10)(37, "div", 11)(38, "div", 12)(39, "div")(40, "p", 13);
      \u0275\u0275text(41, "Total Subscribers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h6", 14);
      \u0275\u0275text(43, "600");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div")(45, "p", 15);
      \u0275\u0275element(46, "apx-chart", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "p", 17)(48, "span", 18);
      \u0275\u0275element(49, "i", 19);
      \u0275\u0275text(50, "11.4% ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 9)(53, "div", 10)(54, "div", 11)(55, "div", 12)(56, "div")(57, "p", 13);
      \u0275\u0275text(58, "Active Subscribers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h6", 14);
      \u0275\u0275text(60, "560");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div")(62, "p", 15);
      \u0275\u0275element(63, "apx-chart", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "p", 17)(65, "span", 18);
      \u0275\u0275element(66, "i", 19);
      \u0275\u0275text(67, "8.12% ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "div", 9)(70, "div", 10)(71, "div", 11)(72, "div", 12)(73, "div")(74, "p", 13);
      \u0275\u0275text(75, "Expired Subscribers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "h6", 14);
      \u0275\u0275text(77, "40");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div")(79, "p", 15);
      \u0275\u0275element(80, "apx-chart", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "p", 17)(82, "span", 18);
      \u0275\u0275element(83, "i", 19);
      \u0275\u0275text(84, "7.15% ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(85, " from last month ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(86, "div", 20)(87, "div", 21)(88, "div", 22)(89, "div", 23)(90, "div", 24)(91, "a", 25);
      \u0275\u0275element(92, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 27)(94, "label")(95, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function SubscriptionComponent_Template_input_ngModelChange_95_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SubscriptionComponent_Template_input_ngModelChange_95_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(96, "a", 29);
      \u0275\u0275element(97, "i", 30);
      \u0275\u0275text(98, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 22)(100, "div", 31)(101, "a", 32);
      \u0275\u0275element(102, "i", 33);
      \u0275\u0275text(103, "Sort By : ");
      \u0275\u0275elementStart(104, "span", 34);
      \u0275\u0275text(105, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "ul", 35)(107, "li")(108, "a", 7);
      \u0275\u0275text(109, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "li")(111, "a", 7);
      \u0275\u0275text(112, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(113, "div", 31)(114, "a", 36);
      \u0275\u0275element(115, "i", 37);
      \u0275\u0275text(116, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "ul", 38)(118, "li")(119, "label", 39);
      \u0275\u0275element(120, "i", 40)(121, "input", 41);
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "li")(125, "label", 39);
      \u0275\u0275element(126, "i", 40)(127, "input", 41);
      \u0275\u0275elementStart(128, "span");
      \u0275\u0275text(129, "Plan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "li")(131, "label", 39);
      \u0275\u0275element(132, "i", 40)(133, "input", 41);
      \u0275\u0275elementStart(134, "span");
      \u0275\u0275text(135, "Billing Cycle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "li")(137, "label", 39);
      \u0275\u0275element(138, "i", 40)(139, "input", 42);
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "li")(143, "label", 39);
      \u0275\u0275element(144, "i", 40)(145, "input", 41);
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "li")(149, "label", 39);
      \u0275\u0275element(150, "i", 40)(151, "input", 41);
      \u0275\u0275elementStart(152, "span");
      \u0275\u0275text(153, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "li")(155, "label", 39);
      \u0275\u0275element(156, "i", 40)(157, "input", 41);
      \u0275\u0275elementStart(158, "span");
      \u0275\u0275text(159, "Expiring Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "li")(161, "label", 39);
      \u0275\u0275element(162, "i", 40)(163, "input", 41);
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(166, "div", 43)(167, "h6", 44);
      \u0275\u0275text(168, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "span", 45)(170, "span", 46);
      \u0275\u0275text(171, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(172, "Companies Selected");
      \u0275\u0275elementStart(173, "span", 47);
      \u0275\u0275listener("click", function SubscriptionComponent_Template_span_click_173_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(174, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "span", 45)(176, "span", 46);
      \u0275\u0275text(177, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(178, "Plans Selected");
      \u0275\u0275elementStart(179, "span", 47);
      \u0275\u0275listener("click", function SubscriptionComponent_Template_span_click_179_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(180, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "a", 49);
      \u0275\u0275listener("click", function SubscriptionComponent_Template_a_click_181_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(182, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 50)(184, "table", 51);
      \u0275\u0275listener("matSortChange", function SubscriptionComponent_Template_table_matSortChange_184_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(185, "thead", 52)(186, "tr")(187, "th", 53)(188, "div", 54);
      \u0275\u0275listener("click", function SubscriptionComponent_Template_div_click_188_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(189, "input", 55);
      \u0275\u0275twoWayListener("ngModelChange", function SubscriptionComponent_Template_input_ngModelChange_189_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "th", 53);
      \u0275\u0275text(191, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "th", 56);
      \u0275\u0275text(193, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "th", 57);
      \u0275\u0275text(195, "Billing Cycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "th", 58);
      \u0275\u0275text(197, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "th", 59);
      \u0275\u0275text(199, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "th", 60);
      \u0275\u0275text(201, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "th", 61);
      \u0275\u0275text(203, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "th", 62);
      \u0275\u0275text(205, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(206, "th", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "tbody");
      \u0275\u0275repeaterCreate(208, SubscriptionComponent_For_209_Template, 46, 13, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(210, SubscriptionComponent_Conditional_210_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(211, SubscriptionComponent_app_custom_pagination_211_Template, 1, 0, "app-custom-pagination", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 64)(213, "div", 65)(214, "div", 66)(215, "h6", 67);
      \u0275\u0275text(216, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "button", 68);
      \u0275\u0275element(218, "i", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(219, "div", 70)(220, "form", 71)(221, "div", 20)(222, "label", 72);
      \u0275\u0275text(223, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "div", 31)(225, "a", 73);
      \u0275\u0275text(226, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "div", 74)(228, "div", 20)(229, "div", 75)(230, "span", 76);
      \u0275\u0275element(231, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275element(232, "input", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "ul", 20)(234, "li", 79)(235, "label", 80);
      \u0275\u0275element(236, "input", 81);
      \u0275\u0275text(237, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "a", 82);
      \u0275\u0275text(239, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "li")(241, "label", 83);
      \u0275\u0275element(242, "input", 42);
      \u0275\u0275elementStart(243, "span", 84);
      \u0275\u0275element(244, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275text(245, "Trend Hive ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "li")(247, "label", 83);
      \u0275\u0275element(248, "input", 42);
      \u0275\u0275elementStart(249, "span", 84);
      \u0275\u0275element(250, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275text(251, "Quick Cart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "li")(253, "label", 83);
      \u0275\u0275element(254, "input", 42);
      \u0275\u0275elementStart(255, "span", 84);
      \u0275\u0275element(256, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275text(257, "Tech Bazaar ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "li")(259, "label", 83);
      \u0275\u0275element(260, "input", 42);
      \u0275\u0275elementStart(261, "span", 84);
      \u0275\u0275element(262, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(263, "Harvest Basket ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(264, "div", 89)(265, "div", 90)(266, "a", 91);
      \u0275\u0275text(267, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "div", 90)(269, "a", 92);
      \u0275\u0275text(270, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(271, "div", 20)(272, "label", 93);
      \u0275\u0275text(273, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div", 94);
      \u0275\u0275element(275, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 20)(277, "label", 72);
      \u0275\u0275text(278, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "div", 31)(280, "a", 73);
      \u0275\u0275text(281, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "div", 74)(283, "ul", 20)(284, "li")(285, "label", 83);
      \u0275\u0275element(286, "input", 42);
      \u0275\u0275text(287, " Advanced (Monthly) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "label", 83);
      \u0275\u0275element(290, "input", 42);
      \u0275\u0275text(291, " Basic (Yearly) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li")(293, "label", 83);
      \u0275\u0275element(294, "input", 42);
      \u0275\u0275text(295, " Enterprise (Monthly) ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(296, "div", 20)(297, "label", 72);
      \u0275\u0275text(298, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "div", 31)(300, "a", 73);
      \u0275\u0275text(301, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "div", 74)(303, "ul", 20)(304, "li")(305, "label", 83);
      \u0275\u0275element(306, "input", 42);
      \u0275\u0275text(307, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "li")(309, "label", 83);
      \u0275\u0275element(310, "input", 42);
      \u0275\u0275text(311, " Cheque ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(312, "div", 20)(313, "label", 72);
      \u0275\u0275text(314, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "div", 31)(316, "a", 73);
      \u0275\u0275text(317, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "div", 74)(319, "ul", 20)(320, "li")(321, "label", 83);
      \u0275\u0275element(322, "input", 42)(323, "i", 95);
      \u0275\u0275text(324, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "li")(326, "label", 83);
      \u0275\u0275element(327, "input", 42)(328, "i", 96);
      \u0275\u0275text(329, "Unpaid ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(330, "div", 97)(331, "div", 89)(332, "div", 90)(333, "a", 98);
      \u0275\u0275text(334, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "div", 90)(336, "button", 99);
      \u0275\u0275listener("click", function SubscriptionComponent_Template_button_click_336_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(337, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(338, "div", 100)(339, "div", 101)(340, "div", 102)(341, "div", 103)(342, "h4", 104);
      \u0275\u0275text(343, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "button", 105);
      \u0275\u0275element(345, "i", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "form", 71)(347, "div", 106)(348, "div", 8)(349, "div", 107)(350, "div")(351, "div", 108)(352, "div", 109)(353, "a", 110);
      \u0275\u0275element(354, "i", 111);
      \u0275\u0275text(355, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "a", 110);
      \u0275\u0275element(357, "i", 112);
      \u0275\u0275text(358, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "a", 110);
      \u0275\u0275element(360, "i", 113);
      \u0275\u0275text(361, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(362, "div", 114)(363, "div", 11)(364, "div", 115)(365, "div", 116);
      \u0275\u0275element(366, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "div", 118)(368, "div", 20)(369, "h4", 13);
      \u0275\u0275text(370, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "div", 109)(372, "div", 119)(373, "h6", 120);
      \u0275\u0275text(374, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "p");
      \u0275\u0275text(376, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(377, "span");
      \u0275\u0275element(378, "img", 121);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(379, "div", 20);
      \u0275\u0275element(380, "img", 122)(381, "img", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(382, "div", 124)(383, "div", 125)(384, "div")(385, "h6", 126);
      \u0275\u0275text(386, "Invoice Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "div")(388, "p", 13);
      \u0275\u0275text(389, "Invoice Number : ");
      \u0275\u0275elementStart(390, "span", 127);
      \u0275\u0275text(391, "INV215654");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(392, "p", 13);
      \u0275\u0275text(393, "Issued On : ");
      \u0275\u0275elementStart(394, "span", 127);
      \u0275\u0275text(395, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(396, "p", 13);
      \u0275\u0275text(397, "Due Date : ");
      \u0275\u0275elementStart(398, "span", 127);
      \u0275\u0275text(399, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "p", 13);
      \u0275\u0275text(401, "Recurring Invoice : ");
      \u0275\u0275elementStart(402, "span", 127);
      \u0275\u0275text(403, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(404, "span", 128);
      \u0275\u0275text(405, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(406, "div", 125)(407, "div")(408, "h6", 126);
      \u0275\u0275text(409, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "div")(411, "h6", 120);
      \u0275\u0275text(412, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "p", 13);
      \u0275\u0275text(414, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "p", 13);
      \u0275\u0275text(416, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "p", 13);
      \u0275\u0275text(418, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "p", 13);
      \u0275\u0275text(420, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(421, "div", 125)(422, "div")(423, "h6", 126);
      \u0275\u0275text(424, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "div", 129)(426, "div", 130)(427, "div")(428, "span", 131);
      \u0275\u0275element(429, "img", 132);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(430, "p", 133);
      \u0275\u0275text(431, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(432, "p", 13);
      \u0275\u0275text(433, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "p", 13);
      \u0275\u0275text(435, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "p", 13);
      \u0275\u0275text(437, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "p", 13);
      \u0275\u0275text(439, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(440, "div", 20)(441, "h6", 20);
      \u0275\u0275text(442, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "div", 134)(444, "table", 135)(445, "thead", 136)(446, "tr")(447, "th");
      \u0275\u0275text(448, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "th");
      \u0275\u0275text(450, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "th");
      \u0275\u0275text(452, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "th");
      \u0275\u0275text(454, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "th");
      \u0275\u0275text(456, "Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "th");
      \u0275\u0275text(458, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(459, "tbody")(460, "tr")(461, "td");
      \u0275\u0275text(462, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "td", 127);
      \u0275\u0275text(464, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "td");
      \u0275\u0275text(466, "$99.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "td");
      \u0275\u0275text(468, "0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "td");
      \u0275\u0275text(470, "$0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "td");
      \u0275\u0275text(472, "$99.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(473, "div", 137)(474, "div", 8)(475, "div", 138)(476, "div", 139)(477, "div", 140)(478, "p", 141);
      \u0275\u0275text(479, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "span");
      \u0275\u0275element(481, "img", 142);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(482, "div")(483, "h6", 141);
      \u0275\u0275text(484, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "div")(486, "p", 13);
      \u0275\u0275text(487, "Bank Name : ");
      \u0275\u0275elementStart(488, "span", 127);
      \u0275\u0275text(489, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "p", 13);
      \u0275\u0275text(491, "Account Number : ");
      \u0275\u0275elementStart(492, "span", 127);
      \u0275\u0275text(493, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "p", 13);
      \u0275\u0275text(495, "IFSC Code : ");
      \u0275\u0275elementStart(496, "span", 127);
      \u0275\u0275text(497, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "p", 143);
      \u0275\u0275text(499, "Payment Reference : ");
      \u0275\u0275elementStart(500, "span", 127);
      \u0275\u0275text(501, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(502, "div", 138)(503, "div", 20)(504, "div", 79)(505, "h6", 144);
      \u0275\u0275text(506, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "h6", 144);
      \u0275\u0275text(508, "$99.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(509, "div", 79)(510, "h6", 144);
      \u0275\u0275text(511, "CGST (0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "h6", 144);
      \u0275\u0275text(513, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(514, "div", 79)(515, "h6", 144);
      \u0275\u0275text(516, "SGST (0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "h6", 144);
      \u0275\u0275text(518, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "div", 145)(520, "h6", 144);
      \u0275\u0275text(521, "Discount (0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "h6", 146);
      \u0275\u0275text(523, "- $0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(524, "div", 145)(525, "h6");
      \u0275\u0275text(526, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "h6");
      \u0275\u0275text(528, "$99.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(529, "div")(530, "h6", 120);
      \u0275\u0275text(531, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "p");
      \u0275\u0275text(533, "Ninety Nine Dollars");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(534, "div", 147)(535, "div")(536, "h6", 120);
      \u0275\u0275text(537, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "p");
      \u0275\u0275text(539, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(540, "div");
      \u0275\u0275element(541, "img", 148);
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(542, "div", 149)(543, "div", 150)(544, "div", 102)(545, "div", 151)(546, "div", 20);
      \u0275\u0275element(547, "img", 152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(548, "h6", 13);
      \u0275\u0275text(549, "Delete Subscriptions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "p", 20);
      \u0275\u0275text(551, "Are you sure, you want to delete subscriptions?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "div", 153)(553, "a", 154);
      \u0275\u0275text(554, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "a", 155);
      \u0275\u0275text(556, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275property("series", ctx.smalltask1.series)("chart", ctx.smalltask1.chart)("colors", ctx.smalltask1.colors)("dataLabels", ctx.smalltask1.dataLabels)("plotOptions", ctx.smalltask1.plotOptions)("legend", ctx.smalltask1.legend)("responsive", ctx.smalltask1.responsive);
      \u0275\u0275advance(17);
      \u0275\u0275property("series", ctx.smalltask2.series)("chart", ctx.smalltask2.chart)("colors", ctx.smalltask2.colors)("dataLabels", ctx.smalltask2.dataLabels)("plotOptions", ctx.smalltask2.plotOptions)("legend", ctx.smalltask2.legend)("responsive", ctx.smalltask2.responsive);
      \u0275\u0275advance(17);
      \u0275\u0275property("series", ctx.smalltask3.series)("chart", ctx.smalltask3.chart)("colors", ctx.smalltask3.colors)("dataLabels", ctx.smalltask3.dataLabels)("plotOptions", ctx.smalltask3.plotOptions)("legend", ctx.smalltask3.legend)("responsive", ctx.smalltask3.responsive);
      \u0275\u0275advance(17);
      \u0275\u0275property("series", ctx.smalltask4.series)("chart", ctx.smalltask4.chart)("colors", ctx.smalltask4.colors)("dataLabels", ctx.smalltask4.dataLabels)("plotOptions", ctx.smalltask4.plotOptions)("legend", ctx.smalltask4.legend)("responsive", ctx.smalltask4.responsive);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(36, _c1));
      \u0275\u0275advance(71);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(37, _c2, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(39, _c3, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(41, _c3, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 210 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DateRangePickerComponent, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, NgApexchartsModule, ChartComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionComponent, [{
    type: Component,
    args: [{ selector: "app-subscription", imports: [CommonModule, DateRangePickerComponent, CustomPaginationComponent, FormsModule, MatSortModule, NgApexchartsModule], template: `<!-- Start Content -->
<div class="content-two">

  <!-- Page Header -->
  <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
      <div>
          <h6>Subscriptions</h6>
      </div>
      <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
          <div class="dropdown me-1">
              <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
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
  <!-- End Page Header -->

  <!-- start row -->
  <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card position-relative">
              <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-2 pb-1">
                      <div>
                          <p class="mb-1">Total Transactions</p>
                          <h6 class="fs-16 fw-semibold">$5,340</h6>
                      </div>
                      <div>
                          <p class="data-attributes">
                            <apx-chart class="task-chart"
                            [series]="smalltask1.series"
                            [chart]="smalltask1.chart"
                            [colors]="smalltask1.colors"
                            [dataLabels]="smalltask1.dataLabels"
                            [plotOptions]="smalltask1.plotOptions"
                            [legend]="smalltask1.legend"
                            [responsive]="smalltask1.responsive"
                            ></apx-chart>
                          </p>
                      </div>
                  </div>
                  <p class="fs-13 text-center border rounded-1 p-2 bg-light mb-0">
                      <span class="text-success">
                          <i class="isax isax-send text-success me-1"></i>5.62%
                      </span> from last month
                  </p>
              </div><!-- end card body -->
          </div><!-- end card -->
      </div><!-- end col -->
      <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card position-relative">
              <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-2 pb-1">
                      <div>
                          <p class="mb-1">Total Subscribers</p>
                          <h6 class="fs-16 fw-semibold">600</h6>
                      </div>
                      <div>
                          <p class="data-attributes">
                            <apx-chart class="task-chart"
                            [series]="smalltask2.series"
                            [chart]="smalltask2.chart"
                            [colors]="smalltask2.colors"
                            [dataLabels]="smalltask2.dataLabels"
                            [plotOptions]="smalltask2.plotOptions"
                            [legend]="smalltask2.legend"
                            [responsive]="smalltask2.responsive"
                            ></apx-chart>
                          </p>
                      </div>
                  </div>
                  <p class="fs-13 text-center border rounded-1 p-2 bg-light mb-0">
                      <span class="text-success">
                          <i class="isax isax-send text-success me-1"></i>11.4%
                      </span> from last month
                  </p>
              </div><!-- end card body -->
          </div><!-- end card -->
      </div><!-- end col -->
      <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card position-relative">
              <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-2 pb-1">
                      <div>
                          <p class="mb-1">Active Subscribers</p>
                          <h6 class="fs-16 fw-semibold">560</h6>
                      </div>
                      <div>
                          <p class="data-attributes">
                            <apx-chart class="task-chart"
                            [series]="smalltask3.series"
                            [chart]="smalltask3.chart"
                            [colors]="smalltask3.colors"
                            [dataLabels]="smalltask3.dataLabels"
                            [plotOptions]="smalltask3.plotOptions"
                            [legend]="smalltask3.legend"
                            [responsive]="smalltask3.responsive"
                            ></apx-chart>
                          </p>
                      </div>
                  </div>
                  <p class="fs-13 text-center border rounded-1 p-2 bg-light mb-0">
                      <span class="text-success">
                          <i class="isax isax-send text-success me-1"></i>8.12%
                      </span> from last month
                  </p>
              </div><!-- end card body -->
          </div><!-- end card -->
      </div><!-- end col -->
      <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card position-relative">
              <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-2 pb-1">
                      <div>
                          <p class="mb-1">Expired Subscribers</p>
                          <h6 class="fs-16 fw-semibold">40</h6>
                      </div>
                      <div>
                          <p class="data-attributes">
                            <apx-chart class="task-chart"
                            [series]="smalltask4.series"
                            [chart]="smalltask4.chart"
                            [colors]="smalltask4.colors"
                            [dataLabels]="smalltask4.dataLabels"
                            [plotOptions]="smalltask4.plotOptions"
                            [legend]="smalltask4.legend"
                            [responsive]="smalltask4.responsive"
                            ></apx-chart>
                          </p>
                      </div>
                  </div>
                  <p class="fs-13 text-center border rounded-1 p-2 bg-light mb-0">
                      <span class="text-success">
                          <i class="isax isax-send text-success me-1"></i>7.15%
                      </span> from last month
                  </p>
              </div><!-- end card body -->
          </div><!-- end card -->
      </div><!-- end col -->
  </div>
  <!-- end row -->

  <!-- Start Table Search -->
  <div class="mb-3">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="table-search d-flex align-items-center mb-0">
                <div class="search-input">
                  <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label> 
                    <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">
                  </label>
                </div>
                </div>
              </div>
              <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
                  <i class="isax isax-filter me-1"></i>Filter
              </a>
          </div>
          <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="dropdown">
                  <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center fw-medium" data-bs-toggle="dropdown">
                      <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>
                  </a>
                  <ul class="dropdown-menu  dropdown-menu-end">
                      <li>
                          <a href="javascript:void(0);" class="dropdown-item">Latest</a>
                      </li>
                      <li>
                          <a href="javascript:void(0);" class="dropdown-item">Oldest</a>
                      </li>
                  </ul>
              </div>
              <div class="dropdown">
                  <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <i class="isax isax-grid-3 me-1"></i>Column
                  </a>
                  <ul class="dropdown-menu  dropdown-menu-lg">
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Company</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Plan</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Billing Cycle</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox">
                              <span>Payment Mode</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Amount</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Created On</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Expiring Date</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Status</span>
                          </label>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <!-- Filter Info -->
      <div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
          <h6 class="fs-13 fw-semibold">Filters</h6>
          <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Companies Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
          <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Plans Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
          <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
      </div>
      <!-- /Filter Info -->
  </div>
  <!-- End Table Search -->

  <!-- Start Table List -->
  <div class="table-responsive">
      <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">
          <thead class="thead-light">
              <tr>
                  <th class="no-sort">
                      <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                          <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">
                      </div>
                  </th>
                  <th class="no-sort">Company</th>
                  <th mat-sort-header="plan">Plan</th>
                  <th mat-sort-header="billing">Billing Cycle</th>
                  <th mat-sort-header="payment">Payment Mode</th>
                  <th mat-sort-header="amount">Amount</th>
                  <th mat-sort-header="created">Created On</th>
                  <th mat-sort-header="expiring">Expiring On</th>
                  <th mat-sort-header="status">Status</th>
                  <th class="no-sort"></th>
              </tr>
          </thead>
          <tbody>
            @for (data of tableData;track data){
              <tr>
                  <td>
                      <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">
                      </div>
                  </td>
                  <td>
                      <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                              <img src="assets/img/icons/{{data.Image}}" class="rounded-circle" alt="img">
                          </a>
                          <div>
                              <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.Company}}</a></h6>
                          </div>
                      </div>
                  </td>
                  <td>{{data.Plan}}</td>
                  <td>{{data.BillingCycle}}</td>
                  <td>
                      <p class="text-dark">{{data.PaymentMode}}</p>
                  </td>
                  <td>
                      <p class="text-dark">{{data.Amount}}</p>
                  </td>
                  <td>{{data.CreatedOn}}</td>
                  <td>{{data.ExpiringOn}}</td>
                  <td>
                      <span href="javascript:void(0);" class="badge badge-sm d-inline-flex align-items-center"
                        [ngClass]="data.Status==='Paid'?'badge-soft-success':'badge-soft-danger'">
                        {{data.Status}}
                        <i class="isax ms-1" [ngClass]="data.Status==='Paid'?' isax-tick-circle':'isax-close-circle'"></i>
                      </span>
                  </td>
                  <td class="action-item">
                      <a href="javascript:void(0);" data-bs-toggle="dropdown">
                          <i class="fa-solid fa-ellipsis"></i>
                      </a>
                      <ul class="dropdown-menu">
                          <li>
                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_invoice_modal"><i class="isax isax-eye me-2"></i>View</a>
                          </li>
                          <li>
                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download</a>
                          </li>
                          <li>
                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                          </li>
                      </ul>
                  </td>
              </tr>
            }
            @if(tableData.length === 0){
              <tr>
                <td colspan="12" class="text-center text-dark">No matching records found</td>
              </tr>
              }
          </tbody>
      </table>
  </div>
  <!-- End Table List -->
  <app-custom-pagination *ngIf="row"></app-custom-pagination>

</div>
<!-- End Content -->

<!-- Start Filter -->
<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">
  <div class="offcanvas-header d-block pb-0">
      <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
          <h6 class="offcanvas-title">Filter</h6>
          <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
      </div>
  </div>
  <div class="offcanvas-body pt-3">
      <form action="#">
          <div class="mb-3">
              <label class="form-label">Company</label>
              <div class="dropdown">
                  <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
      Select
    </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div class="mb-3">
                          <div class="input-icon-start position-relative">
                              <span class="input-icon-addon fs-12">
            <i class="isax isax-search-normal"></i>
          </span>
                              <input type="text" class="form-control form-control-sm" placeholder="Search">
                          </div>
                      </div>
                      <ul class="mb-3">
                          <li class="d-flex align-items-center justify-content-between mb-3">
                              <label class="d-inline-flex align-items-center text-gray-9">
                                  <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
                              </label>
                              <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-01.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Trend Hive
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-02.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Quick Cart
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-03.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Tech Bazaar
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-04.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Harvest Basket
                              </label>
                          </li>
                      </ul>
                      <div class="row g-2">
                          <div class="col-6">
                              <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>
                          </div>
                          <div class="col-6">
                              <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="mb-3">
              <label id="dateRangePicker" class="form-label">Date Range</label>
              <div class="filter-daterange">
                <app-date-range-picker></app-date-range-picker>
            </div>
          </div>
          <div class="mb-3">
              <label class="form-label">Plan</label>
              <div class="dropdown">
                  <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
      Select
    </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                      <ul class="mb-3">
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox"> Advanced (Monthly)
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox"> Basic (Yearly)
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox"> Enterprise (Monthly)
                              </label>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="mb-3">
              <label class="form-label">Payment Mode</label>
              <div class="dropdown">
                  <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
      Select
    </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                      <ul class="mb-3">
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox"> Cash
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox"> Cheque
                              </label>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="mb-3">
              <label class="form-label">Status</label>
              <div class="dropdown">
                  <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
      Select
    </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                      <ul class="mb-3">
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Paid
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Unpaid
                              </label>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="offcanvas-footer">
              <div class="row g-2">
                  <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>
                  </div>
                  <div class="col-6">
                      <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
                  </div>
              </div>
          </div>
      </form>
  </div>
</div>
<!-- end Filter -->

<!-- Invoice View Modal Start -->
<div id="view_invoice_modal" class="modal fade">
  <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Preview</h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
          </div>
          <form action="#">
              <div class="modal-body">
                  <!-- start row -->
                  <div class="row">
                      <div class="mx-auto">
                          <div>
                              <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
                                  <div class="d-flex align-items-center flex-wrap row-gap-3">
                                      <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-document-like me-1"></i>Download PDF</a>
                                      <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-message-notif me-1"></i>Send Email</a>
                                      <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-printer me-1"></i>Print</a>
                                  </div>
                              </div>
                              <div class="card">
                                  <div class="card-body">
                                      <div class="bg-light p-4 rounded position-relative mb-3">
                                          <div class="position-absolute top-0 end-0">
                                              <img src="assets/img/bg/card-bg.png" alt="User Img">
                                          </div>
                                          <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2 position-relative z-1">
                                              <div class="mb-3">
                                                  <h4 class="mb-1">Invoice</h4>
                                                  <div class="d-flex align-items-center flex-wrap row-gap-3">
                                                      <div class="me-4">
                                                          <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                                          <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                                      </div>
                                                      <span><img src="assets/img/icons/not-paid.png" alt="User Img" width="48" height="48"></span>
                                                  </div>
                                              </div>
                                              <div class="mb-3">
                                                  <img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
                                                  <img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
                                              </div>
                                          </div>
                                          <div class="row gy-3 position-relative z-1">
                                              <div class="col-lg-4">
                                                  <div>
                                                      <h6 class="mb-2 fs-16 fw-semibold">Invoice Details</h6>
                                                      <div>
                                                          <p class="mb-1">Invoice Number : <span class="text-dark">INV215654</span></p>
                                                          <p class="mb-1">Issued On : <span class="text-dark">25 Jan 2025</span></p>
                                                          <p class="mb-1">Due Date : <span class="text-dark">31 Jan 2025</span></p>
                                                          <p class="mb-1">Recurring Invoice : <span class="text-dark">Monthly</span></p>
                                                          <span class="badge bg-danger">Due in 8 days</span>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-lg-4">
                                                  <div>
                                                      <h6 class="mb-2 fs-16 fw-semibold">Billing From</h6>
                                                      <div>
                                                          <h6 class="fs-14 fw-semibold mb-1">Kanakku Invoice Management</h6>
                                                          <p class="mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>
                                                          <p class="mb-1">Phone : +1 54664 75945</p>
                                                          <p class="mb-1">Email : info&#64;example.com</p>
                                                          <p class="mb-1">GST : 243E45767889</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-lg-4">
                                                  <div>
                                                      <h6 class="mb-2 fs-16 fw-semibold">Billing To</h6>
                                                      <div class="bg-white rounded p-3">
                                                          <div class="d-flex align-items-center mb-1">
                                                              <div>
                                                                  <span class="avatar avatar-lg flex-shrink-0 me-2">
                                                                      <img src="assets/img/billing-icon.jpg" alt="User Img">
                                                                  </span>
                                                              </div>
                                                              <p class="fs-14 fw-semibold text-dark">Timesquare Tech</p>
                                                          </div>
                                                          <p class="mb-1">299 Star Trek Drive, Florida, 3240, USA</p>
                                                          <p class="mb-1">Phone : +1 54664 75945</p>
                                                          <p class="mb-1">Email : info&#64;example.com</p>
                                                          <p class="mb-1">GST : 243E45767889</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="mb-3">
                                          <h6 class="mb-3">Product / Service Items</h6>
                                          <div class="table-responsive rounded border-bottom-0 border">
                                              <table class="table">
                                                  <thead class="thead-dark">
                                                      <tr>
                                                          <th>#</th>
                                                          <th>Plan Name</th>
                                                          <th>Rate</th>
                                                          <th>Discount</th>
                                                          <th>Tax</th>
                                                          <th>Amount</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td>1</td>
                                                          <td class="text-dark">Basic</td>
                                                          <td>$99.00</td>
                                                          <td>0%</td>
                                                          <td>$0.00</td>
                                                          <td>$99.00</td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                      <div class="border-bottom mb-3">
                                          <div class="row">
                                              <div class="col-lg-6">
                                                  <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                                                      <div class="me-3">
                                                          <p class="mb-2">Scan to the pay</p>
                                                          <span><img src="assets/img/icons/qr.png" alt="User Img"></span>
                                                      </div>
                                                      <div>
                                                          <h6 class="mb-2">Bank Details</h6>
                                                          <div>
                                                              <p class="mb-1">Bank Name : <span class="text-dark">ABC Bank</span></p>
                                                              <p class="mb-1">Account Number : <span class="text-dark">782459739212</span></p>
                                                              <p class="mb-1">IFSC Code : <span class="text-dark">ABC0001345</span></p>
                                                              <p class="mb-0">Payment Reference : <span class="text-dark">INV-20250220-001</span></p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-lg-6">
                                                  <div class="mb-3">
                                                      <div class="d-flex align-items-center justify-content-between mb-3">
                                                          <h6 class="fs-14 fw-semibold">Amount</h6>
                                                          <h6 class="fs-14 fw-semibold">$99.00</h6>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between mb-3">
                                                          <h6 class="fs-14 fw-semibold">CGST (0%)</h6>
                                                          <h6 class="fs-14 fw-semibold">$0.00</h6>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between mb-3">
                                                          <h6 class="fs-14 fw-semibold">SGST (0%)</h6>
                                                          <h6 class="fs-14 fw-semibold">$0.00</h6>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                                          <h6 class="fs-14 fw-semibold">Discount (0%)</h6>
                                                          <h6 class="fs-14 fw-semibold text-danger">- $0</h6>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                                          <h6>Total (USD)</h6>
                                                          <h6>$99.00</h6>
                                                      </div>
                                                      <div>
                                                          <h6 class="fs-14 fw-semibold mb-1">Total In Words</h6>
                                                          <p>Ninety Nine Dollars</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="bg-light d-flex align-items-center justify-content-between p-4 rounded card-bg">
                                          <div>
                                              <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                              <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                          </div>
                                          <div>
                                              <img src="assets/img/invoice-logo.svg" alt="User Img">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- end row -->
              </div>
          </form>
      </div>
  </div>
</div>
<!-- /Invoice View Modal End -->

<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
  <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
          <div class="modal-body text-center">
              <div class="mb-3">
                  <img src="assets/img/icons/delete.svg" alt="img">
              </div>
              <h6 class="mb-1">Delete Subscriptions</h6>
              <p class="mb-3">Are you sure, you want to delete subscriptions?</p>
              <div class="d-flex justify-content-center">
                  <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                  <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
              </div>
          </div>
      </div>
  </div>
</div>
<!-- End Delete Modal  -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionComponent, { className: "SubscriptionComponent", filePath: "src/app/features/super-admin/subscription/subscription.component.ts", lineNumber: 40 });
})();
export {
  SubscriptionComponent
};
//# sourceMappingURL=chunk-EG2EJL4T.js.map
