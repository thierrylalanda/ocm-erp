import {
  DateRangePicker2Component
} from "./chunk-XI2R5BYV.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-Z3POZ3YG.js";
import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-KGUL6V6Y.js";
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
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-YETY7SH2.js";
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

// src/app/features/reports/transaction-report/purchases-report/purchases-report.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
var _c2 = (a0) => ({ "show": a0 });
var _c3 = (a0) => ({ "d-none": a0 });
function PurchasesReportComponent_For_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 102)(2, "div", 103)(3, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function PurchasesReportComponent_For_161_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 106)(11, "a", 107);
    \u0275\u0275element(12, "img", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h6", 109)(15, "a", 110);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(17, "td", 111);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 111);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 112);
    \u0275\u0275text(23);
    \u0275\u0275element(24, "i", 113);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.date);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.vendor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? " badge-soft-warning" : data_r2.status === "Cancelled" ? " badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? " isax-timer" : data_r2.status === "Cancelled" ? " isax-close-circle" : "isax-tick-circle");
  }
}
function PurchasesReportComponent_Conditional_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 114);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PurchasesReportComponent_app_custom_pagination_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PurchasesReportComponent = class _PurchasesReportComponent {
  data;
  router;
  pagination;
  routes = routes;
  formatLabel(value) {
    if (value >= 1e3) {
      return Math.round(value / 1e3) + "k";
    }
    return `${value}`;
  }
  showFilter = false;
  selectedFilter = [false];
  isFilter() {
    this.showFilter = !this.showFilter;
  }
  isSelectedFilter(index) {
    this.selectedFilter[index] = !this.selectedFilter[index];
  }
  chart;
  reportChart;
  reportChart2;
  reportChart3;
  reportChart4;
  ngOnInit() {
    this.reportChart = {
      series: [{
        data: [0, 6, 24, 14, 20, 15, 37]
      }],
      chart: {
        type: "area",
        width: 70,
        height: 46,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      colors: ["#7539FF"],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function(seriesName) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    this.reportChart2 = {
      series: [{
        data: [0, 6, 24, 14, 20, 15, 37]
      }],
      chart: {
        type: "area",
        width: 70,
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      colors: ["#27AE60"],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function(seriesName) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    this.reportChart3 = {
      series: [{
        data: [0, 6, 24, 14, 20, 15, 37]
      }],
      chart: {
        type: "area",
        width: 70,
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      colors: ["#E2B93B"],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function(seriesName) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    this.reportChart4 = {
      series: [{
        data: [0, 6, 24, 14, 20, 15, 37]
      }],
      chart: {
        type: "area",
        width: 70,
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      colors: ["#EF1E1E"],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function() {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
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
    this.data.getPurchaseReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.purchasesReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPurchaseReport().subscribe((apiRes) => {
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
  static \u0275fac = function PurchasesReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchasesReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchasesReportComponent, selectors: [["app-purchases-report"]], viewQuery: function PurchasesReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 306, vars: 48, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-0"], ["id", "report_chart"], [3, "series", "chart", "colors", "fill", "stroke", "dataLabels", "legend", "plotOptions"], ["id", "report_chart_2"], ["id", "report_chart_3"], ["id", "report_chart_4"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "vendor"], ["mat-sort-header", "amount"], ["mat-sort-header", "pay"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/reports/avatar-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PurchasesReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Purchases Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "a", 5);
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275text(9, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 7)(11, "li")(12, "a", 8);
      \u0275\u0275text(13, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 8);
      \u0275\u0275text(16, "Download as Excel");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div")(24, "p", 15);
      \u0275\u0275text(25, "Total Purchases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h6", 16);
      \u0275\u0275text(27, "$850,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div")(29, "div", 17);
      \u0275\u0275element(30, "apx-chart", 18);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(31, "div", 11)(32, "div", 12)(33, "div", 13)(34, "div", 14)(35, "div")(36, "p", 15);
      \u0275\u0275text(37, "Completed Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "h6", 16);
      \u0275\u0275text(39, "$850,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div")(41, "div", 19);
      \u0275\u0275element(42, "apx-chart", 18);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(43, "div", 11)(44, "div", 12)(45, "div", 13)(46, "div", 14)(47, "div")(48, "p", 15);
      \u0275\u0275text(49, "Pending Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h6", 16);
      \u0275\u0275text(51, "$850,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div")(53, "div", 20);
      \u0275\u0275element(54, "apx-chart", 18);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(55, "div", 11)(56, "div", 12)(57, "div", 13)(58, "div", 14)(59, "div")(60, "p", 15);
      \u0275\u0275text(61, "Cancelled Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h6", 16);
      \u0275\u0275text(63, "$850,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div")(65, "div", 21);
      \u0275\u0275element(66, "apx-chart", 18);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(67, "div", 22)(68, "div", 23)(69, "div", 24)(70, "div", 25)(71, "div", 26)(72, "a", 27);
      \u0275\u0275element(73, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 29)(75, "label")(76, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function PurchasesReportComponent_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PurchasesReportComponent_Template_input_ngModelChange_76_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(77, "app-date-range-picker-2");
      \u0275\u0275elementStart(78, "a", 31);
      \u0275\u0275element(79, "i", 32);
      \u0275\u0275text(80, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 33)(82, "div", 34)(83, "a", 35);
      \u0275\u0275element(84, "i", 36);
      \u0275\u0275text(85, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "ul", 37)(87, "li")(88, "label", 38);
      \u0275\u0275element(89, "i", 39)(90, "input", 40);
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "li")(94, "label", 38);
      \u0275\u0275element(95, "i", 39)(96, "input", 40);
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "li")(100, "label", 38);
      \u0275\u0275element(101, "i", 39)(102, "input", 40);
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "li")(106, "label", 38);
      \u0275\u0275element(107, "i", 39)(108, "input", 40);
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275text(110, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "li")(112, "label", 38);
      \u0275\u0275element(113, "i", 39)(114, "input", 41);
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "li")(118, "label", 38);
      \u0275\u0275element(119, "i", 39)(120, "input", 41);
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(123, "div", 42)(124, "h6", 43);
      \u0275\u0275text(125, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "span", 44)(127, "span", 45);
      \u0275\u0275text(128, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, "Vendors Selected");
      \u0275\u0275elementStart(130, "span", 46);
      \u0275\u0275listener("click", function PurchasesReportComponent_Template_span_click_130_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(131, "i", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "span", 44)(133, "span", 45);
      \u0275\u0275text(134, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(135, "$10,000 - $25,500");
      \u0275\u0275elementStart(136, "span", 46);
      \u0275\u0275listener("click", function PurchasesReportComponent_Template_span_click_136_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(137, "i", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "a", 48);
      \u0275\u0275listener("click", function PurchasesReportComponent_Template_a_click_138_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(139, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 49)(141, "table", 50);
      \u0275\u0275listener("matSortChange", function PurchasesReportComponent_Template_table_matSortChange_141_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(142, "thead", 51)(143, "tr")(144, "th", 52)(145, "div", 53);
      \u0275\u0275listener("click", function PurchasesReportComponent_Template_div_click_145_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(146, "input", 54);
      \u0275\u0275twoWayListener("ngModelChange", function PurchasesReportComponent_Template_input_ngModelChange_146_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "th", 52);
      \u0275\u0275text(148, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "th", 55);
      \u0275\u0275text(150, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "th", 56);
      \u0275\u0275text(152, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "th", 57);
      \u0275\u0275text(154, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "th", 58);
      \u0275\u0275text(156, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "th", 52);
      \u0275\u0275text(158, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(159, "tbody");
      \u0275\u0275repeaterCreate(160, PurchasesReportComponent_For_161_Template, 25, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(162, PurchasesReportComponent_Conditional_162_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(163, PurchasesReportComponent_app_custom_pagination_163_Template, 1, 0, "app-custom-pagination", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 60)(165, "div", 61)(166, "div", 62)(167, "h6", 63);
      \u0275\u0275text(168, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "button", 64);
      \u0275\u0275element(170, "i", 65);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 66)(172, "form", 67)(173, "div", 22)(174, "label", 68);
      \u0275\u0275text(175, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 34)(177, "a", 69);
      \u0275\u0275text(178, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 70)(180, "div", 22)(181, "div", 71)(182, "span", 72);
      \u0275\u0275element(183, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275element(184, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "ul", 22)(186, "li", 75)(187, "label", 76);
      \u0275\u0275element(188, "input", 77);
      \u0275\u0275text(189, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "a", 78);
      \u0275\u0275text(191, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "li")(193, "label", 79);
      \u0275\u0275element(194, "input", 41);
      \u0275\u0275elementStart(195, "span", 80);
      \u0275\u0275element(196, "img", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275text(197, "Emma Rose ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "li")(199, "label", 79);
      \u0275\u0275element(200, "input", 41);
      \u0275\u0275elementStart(201, "span", 80);
      \u0275\u0275element(202, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275text(203, "Ethan James ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "label", 79);
      \u0275\u0275element(206, "input", 41);
      \u0275\u0275elementStart(207, "span", 80);
      \u0275\u0275element(208, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275text(209, "Olivia Grace ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "label", 79);
      \u0275\u0275element(212, "input", 41);
      \u0275\u0275elementStart(213, "span", 80);
      \u0275\u0275element(214, "img", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275text(215, "Liam Michael ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "div", 85)(217, "div", 86)(218, "a", 87);
      \u0275\u0275text(219, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "div", 86)(221, "a", 88);
      \u0275\u0275text(222, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(223, "div", 22)(224, "label", 68);
      \u0275\u0275text(225, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 34)(227, "a", 69);
      \u0275\u0275text(228, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 70)(230, "div", 89)(231, "div", 90)(232, "span", 91);
      \u0275\u0275text(233, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "span", 91);
      \u0275\u0275text(235, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "mat-slider", 92);
      \u0275\u0275element(237, "input", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "p");
      \u0275\u0275text(239, "Range : ");
      \u0275\u0275elementStart(240, "span", 94);
      \u0275\u0275text(241, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(242, "div", 22)(243, "label", 68);
      \u0275\u0275text(244, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div", 34)(246, "a", 69);
      \u0275\u0275text(247, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 70)(249, "ul", 22)(250, "li")(251, "label", 79);
      \u0275\u0275element(252, "input", 40);
      \u0275\u0275text(253, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "li")(255, "label", 79);
      \u0275\u0275element(256, "input", 41);
      \u0275\u0275text(257, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "li")(259, "label", 79);
      \u0275\u0275element(260, "input", 40);
      \u0275\u0275text(261, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "li")(263, "label", 79);
      \u0275\u0275element(264, "input", 41);
      \u0275\u0275text(265, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "li")(267, "label", 79);
      \u0275\u0275element(268, "input", 41);
      \u0275\u0275text(269, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(270, "div", 22)(271, "label", 68);
      \u0275\u0275text(272, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 95);
      \u0275\u0275element(274, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "div", 22)(276, "label", 68);
      \u0275\u0275text(277, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "div", 34)(279, "a", 69);
      \u0275\u0275text(280, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div", 70)(282, "ul", 22)(283, "li")(284, "label", 79);
      \u0275\u0275element(285, "input", 40)(286, "i", 96);
      \u0275\u0275text(287, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "label", 79);
      \u0275\u0275element(290, "input", 41)(291, "i", 97);
      \u0275\u0275text(292, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(293, "li")(294, "label", 79);
      \u0275\u0275element(295, "input", 40)(296, "i", 98);
      \u0275\u0275text(297, "Cancelled ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(298, "div", 99)(299, "div", 85)(300, "div", 86)(301, "a", 100);
      \u0275\u0275text(302, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "div", 86)(304, "button", 101);
      \u0275\u0275listener("click", function PurchasesReportComponent_Template_button_click_304_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(305, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275property("series", ctx.reportChart.series)("chart", ctx.reportChart.chart)("colors", ctx.reportChart.colors)("fill", ctx.reportChart.fill)("stroke", ctx.reportChart.stroke)("dataLabels", ctx.reportChart.dataLabels)("legend", ctx.reportChart.legend)("plotOptions", ctx.reportChart.plotOptions);
      \u0275\u0275advance(12);
      \u0275\u0275property("series", ctx.reportChart2.series)("chart", ctx.reportChart2.chart)("colors", ctx.reportChart2.colors)("fill", ctx.reportChart2.fill)("stroke", ctx.reportChart2.stroke)("dataLabels", ctx.reportChart2.dataLabels)("legend", ctx.reportChart2.legend)("plotOptions", ctx.reportChart2.plotOptions);
      \u0275\u0275advance(12);
      \u0275\u0275property("series", ctx.reportChart3.series)("chart", ctx.reportChart3.chart)("colors", ctx.reportChart3.colors)("fill", ctx.reportChart3.fill)("stroke", ctx.reportChart3.stroke)("dataLabels", ctx.reportChart3.dataLabels)("legend", ctx.reportChart3.legend)("plotOptions", ctx.reportChart3.plotOptions);
      \u0275\u0275advance(12);
      \u0275\u0275property("series", ctx.reportChart4.series)("chart", ctx.reportChart4.chart)("colors", ctx.reportChart4.colors)("fill", ctx.reportChart4.fill)("stroke", ctx.reportChart4.stroke)("dataLabels", ctx.reportChart4.dataLabels)("legend", ctx.reportChart4.legend)("plotOptions", ctx.reportChart4.plotOptions);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(41, _c1));
      \u0275\u0275advance(47);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(42, _c2, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(44, _c3, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(46, _c3, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 162 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(73);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, DateRangePickerComponent, DateRangePicker2Component, NgApexchartsModule, ChartComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchasesReportComponent, [{
    type: Component,
    args: [{ selector: "app-purchases-report", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      DateRangePickerComponent,
      DateRangePicker2Component,
      NgApexchartsModule
    ], template: `			<!-- Start Content -->
			<div class="content-two">

				<!-- Page Header -->
				<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
					<div>
						<h6 class="mb-0">Purchases Report</h6>
					</div>
					<div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
						<div class="dropdown me-1">
							<a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"  data-bs-toggle="dropdown">
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

			    <div class="border-bottom mb-3">

					<!-- start row -->
					<div class="row">
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Total Purchases</p>
											<h6 class="fs-16 fw-semibold mb-0">$850,000</h6>
										</div>
										<div>
											<div id="report_chart">
												<apx-chart
												[series]="reportChart.series"
												[chart]="reportChart.chart"
												[colors]="reportChart.colors"
												[fill]="reportChart.fill"
												[stroke]="reportChart.stroke"
												[dataLabels]="reportChart.dataLabels"
												[legend]="reportChart.legend"
												[plotOptions]="reportChart.plotOptions"
											></apx-chart>
											</div>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Completed Orders</p>
											<h6 class="fs-16 fw-semibold mb-0">$850,000</h6>
										</div>
										<div>
											<div id="report_chart_2">
												<apx-chart
												[series]="reportChart2.series"
												[chart]="reportChart2.chart"
												[colors]="reportChart2.colors"
												[fill]="reportChart2.fill"
												[stroke]="reportChart2.stroke"
												[dataLabels]="reportChart2.dataLabels"
												[legend]="reportChart2.legend"
												[plotOptions]="reportChart2.plotOptions"
											></apx-chart>
											</div>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Pending Orders</p>
											<h6 class="fs-16 fw-semibold mb-0">$850,000</h6>
										</div>
										<div>
											<div id="report_chart_3">
												<apx-chart
												[series]="reportChart3.series"
												[chart]="reportChart3.chart"
												[colors]="reportChart3.colors"
												[fill]="reportChart3.fill"
												[stroke]="reportChart3.stroke"
												[dataLabels]="reportChart3.dataLabels"
												[legend]="reportChart3.legend"
												[plotOptions]="reportChart3.plotOptions"
											></apx-chart>
											</div>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Cancelled Orders</p>
											<h6 class="fs-16 fw-semibold mb-0">$850,000</h6>
										</div>
										<div>
											<div id="report_chart_4">
												<apx-chart
												[series]="reportChart4.series"
												[chart]="reportChart4.chart"
												[colors]="reportChart4.colors"
												[fill]="reportChart4.fill"
												[stroke]="reportChart4.stroke"
												[dataLabels]="reportChart4.dataLabels"
												[legend]="reportChart4.legend"
												[plotOptions]="reportChart4.plotOptions"
											></apx-chart>
											</div>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
					</div>
					<!-- end row -->
				</div>
				
				<!-- Table Search -->
				<div class="mb-3">
					<div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
						<div class="d-flex align-items-center gap-2 flex-wrap">
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
							<app-date-range-picker-2></app-date-range-picker-2>
							<a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
								<i class="isax isax-filter me-1"></i>Filter
							</a>
						</div>
						<div class="d-flex align-items-center flex-wrap gap-2">
							<div class="dropdown">
								<a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
									<i class="isax isax-grid-3 me-1"></i>Column
								</a>
								<ul class="dropdown-menu  dropdown-menu-lg">
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>ID</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Date</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Vendor</span>
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
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span>Payment Mode</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span>Status</span>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				<!-- Filter Info -->
				<div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
					<h6 class="fs-13 fw-semibold">Filters</h6>
					<span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Vendors Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
					<span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
					<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
				</div>
				<!-- /Filter Info -->

				</div>
				<!-- /Table Search -->
				
				<!-- Table List -->
				<div class="table-responsive">
					<table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
						<thead class="thead-light">
							<tr>
								<th class="no-sort">
									<div class="form-check form-check-md" (click)="selectAll(initChecked)">
										<input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
									</div>
								</th>
								<th class="no-sort">ID</th>
								<th mat-sort-header="date">Date</th>
								<th mat-sort-header="vendor">Vendor</th>
								<th mat-sort-header="amount">Amount</th>
								<th mat-sort-header="pay">Payment Mode</th>
								<th class="no-sort"	>Status</th>
							</tr>
						</thead>
						<tbody>
							@for (data of tableData;track data){
							<tr>
								<td class="sorting_1">
									<div class="form-check form-check-md" >
										<input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">
									</div>
								</td>
								<td>
									<a href="javascript:void(0);" class="link-default">{{data.id}}</a>
								</td>                                
								<td>{{data.date}}</td>
								<td>
                                    <div class="d-flex align-items-center">
										<a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
											<img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
										</a>
										<div>
											<h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.vendor}}</a></h6>
										</div>
									</div>
                                </td>
								<td class="text-dark">{{data.amount}}</td>
								<td class="text-dark">{{data.paymentMode}}</td>
								<td>
									<span class="badge d-inline-flex align-items-center"
									[ngClass]="data.status==='Pending'?' badge-soft-warning':data.status==='Cancelled'?' badge-soft-danger':'badge-soft-success'">
									{{data.status}} 
									<i class="isax ms-1"
									[ngClass]="data.status==='Pending'?' isax-timer':data.status==='Cancelled'?' isax-close-circle':'isax-tick-circle'"></i>
								</span>
							</tr>
						} @if(tableData.length === 0){
							<tr>
							  <td colspan="12" class="text-center text-dark">No matching records found</td>
							</tr>
						  }
						</tbody>
					</table>
				</div>
				<!-- /Table List -->

				<app-custom-pagination *ngIf="row"/>
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
						<label class="form-label">Vendor</label>
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
											<input class="form-check-input select-all m-0 me-2" type="checkbox">
											Select All
										</label>
										<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/reports/avatar-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emma Rose
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/reports/avatar-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Ethan James
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/reports/avatar-03.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Grace
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/reports/avatar-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Liam Michael
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
						<label class="form-label">Amount</label>
						<div class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
							<div class="dropdown-menu shadow-lg w-100 dropdown-info">							
								<div class="filter-range">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="irs" style="visibility: visible;">$0</span>
                                        <span class="irs" style="visibility: visible;">$1000</span>
                                    </div>
                                    <mat-slider
                                        min="0"
                                        max="1000"
                                        discrete
                                        [displayWith]="formatLabel"
                                    >
                                        <input value="350" matSliderThumb />
                                    </mat-slider>
                                    <p>Range : <span class="text-gray-9">$200 - $5695</span></p>
                                </div>
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
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											Cash
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Check
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											Bank Transfer
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Paypal
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Stripe
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="mb-3">
						<label class="form-label">Date Range</label>
						<div class="filter-daterange">
							<app-date-range-picker></app-date-range-picker>
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
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<i class="fa-solid fa-circle fs-6 text-success me-1"></i>Paid
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Pending
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Cancelled
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="offcanvas-footer">
						<div class="row g-2">
							<div class="col-6">
								<a href="javascript:void(0);"  class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
							</div>
							<div class="col-6">
								<button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<!-- End Filter -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchasesReportComponent, { className: "PurchasesReportComponent", filePath: "src/app/features/reports/transaction-report/purchases-report/purchases-report.component.ts", lineNumber: 42 });
})();
export {
  PurchasesReportComponent
};
//# sourceMappingURL=chunk-OJSNIO67.js.map
