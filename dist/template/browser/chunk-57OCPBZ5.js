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

// src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
var _c2 = (a0) => ({ "show": a0 });
var _c3 = (a0) => ({ "d-none": a0 });
function PurchaseOrdersReportsComponent_For_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 102)(2, "div", 103)(3, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrdersReportsComponent_For_160_Template_input_ngModelChange_3_listener($event) {
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
function PurchaseOrdersReportsComponent_Conditional_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 114);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrdersReportsComponent_app_custom_pagination_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PurchaseOrdersReportsComponent = class _PurchaseOrdersReportsComponent {
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
  radialChart;
  radialChart2;
  radialChart3;
  radialChart4;
  ngOnInit() {
    this.radialChart = {
      chart: {
        type: "donut",
        height: 49,
        width: 49
      },
      series: [75, 25],
      // Adjust this for progress percentage
      labels: ["Completed", "Remaining"],
      colors: ["#7539FF", "#EFEEFF"],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            // Adjust for better inner circle spacing
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: "10px",
                // Small font to fit the size
                fontWeight: 600,
                offsetY: 0,
                color: "#7539FF",
                formatter: function() {
                  return "75%";
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
    this.radialChart2 = {
      chart: {
        type: "donut",
        height: 49,
        width: 49
      },
      series: [75, 25],
      // Adjust this for progress percentage
      labels: ["Completed", "Remaining"],
      colors: ["#27AE60", "#E9F7EF"],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            // Adjust for better inner circle spacing
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: "10px",
                // Small font to fit the size
                fontWeight: 600,
                offsetY: 0,
                color: "#7539FF",
                formatter: function() {
                  return "75%";
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
    this.radialChart3 = {
      chart: {
        type: "donut",
        height: 49,
        width: 49
      },
      series: [75, 25],
      // Adjust this for progress percentage
      labels: ["Completed", "Remaining"],
      colors: ["#E2B93B", "#FCF8EB"],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            // Adjust for better inner circle spacing
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: "10px",
                // Small font to fit the size
                fontWeight: 600,
                offsetY: 0,
                color: "#7539FF",
                formatter: function() {
                  return "75%";
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
    this.radialChart4 = {
      chart: {
        type: "donut",
        height: 49,
        width: 49
      },
      series: [75, 25],
      // Adjust this for progress percentage
      labels: ["Completed", "Remaining"],
      colors: ["#EF1E1E", "#FDE9E9"],
      legend: {
        show: false
      },
      dataLabels: {
        show: false,
        enabled: false
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            // Adjust for better inner circle spacing
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: "10px",
                // Small font to fit the size
                fontWeight: 600,
                offsetY: 0,
                color: "#7539FF",
                formatter: function() {
                  return "75%";
                }
              }
            }
          }
        }
      },
      tooltip: {
        show: false,
        enabled: false
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
    this.data.getpurchaseorder().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.purchasesOrdersReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getpurchaseorder().subscribe((apiRes) => {
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
  static \u0275fac = function PurchaseOrdersReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseOrdersReportsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseOrdersReportsComponent, selectors: [["app-purchase-orders-reports"]], viewQuery: function PurchaseOrdersReportsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 305, vars: 51, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-0"], ["id", "radial-chart3", 1, "chart-set"], [3, "series", "chart", "colors", "fill", "xaxis", "stroke", "dataLabels", "legend", "plotOptions"], ["id", "radial-chart4", 1, "chart-set"], ["id", "radial-chart5", 1, "chart-set"], ["id", "radial-chart6", 1, "chart-set", "no-tooltip"], [3, "series", "chart", "colors", "fill", "stroke", "dataLabels", "legend", "plotOptions"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "vendor"], ["mat-sort-header", "amount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/reports/avatar-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PurchaseOrdersReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Purchase Orders Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div")(23, "p", 14);
      \u0275\u0275text(24, "Total Purchase Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 15);
      \u0275\u0275text(26, "280");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "div", 16);
      \u0275\u0275element(29, "apx-chart", 17);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(30, "div", 10)(31, "div", 11)(32, "div", 12)(33, "div", 13)(34, "div")(35, "p", 14);
      \u0275\u0275text(36, " Completed Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h6", 15);
      \u0275\u0275text(38, "240");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div")(40, "div", 18);
      \u0275\u0275element(41, "apx-chart", 17);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(42, "div", 10)(43, "div", 11)(44, "div", 12)(45, "div", 13)(46, "div")(47, "p", 14);
      \u0275\u0275text(48, " Pending Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h6", 15);
      \u0275\u0275text(50, "30");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div")(52, "div", 19);
      \u0275\u0275element(53, "apx-chart", 17);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(54, "div", 10)(55, "div", 11)(56, "div", 12)(57, "div", 13)(58, "div")(59, "p", 14);
      \u0275\u0275text(60, "Cancelled Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "h6", 15);
      \u0275\u0275text(62, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div")(64, "div", 20);
      \u0275\u0275element(65, "apx-chart", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(66, "div", 22)(67, "div", 23)(68, "div", 24)(69, "div", 25)(70, "div", 26)(71, "a", 27);
      \u0275\u0275element(72, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 29)(74, "label")(75, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrdersReportsComponent_Template_input_ngModelChange_75_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PurchaseOrdersReportsComponent_Template_input_ngModelChange_75_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(76, "app-date-range-picker-2");
      \u0275\u0275elementStart(77, "a", 31);
      \u0275\u0275element(78, "i", 32);
      \u0275\u0275text(79, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 33)(81, "div", 34)(82, "a", 35);
      \u0275\u0275element(83, "i", 36);
      \u0275\u0275text(84, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "ul", 37)(86, "li")(87, "label", 38);
      \u0275\u0275element(88, "i", 39)(89, "input", 40);
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "li")(93, "label", 38);
      \u0275\u0275element(94, "i", 39)(95, "input", 40);
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "li")(99, "label", 38);
      \u0275\u0275element(100, "i", 39)(101, "input", 40);
      \u0275\u0275elementStart(102, "span");
      \u0275\u0275text(103, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "li")(105, "label", 38);
      \u0275\u0275element(106, "i", 39)(107, "input", 40);
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275text(109, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "li")(111, "label", 38);
      \u0275\u0275element(112, "i", 39)(113, "input", 41);
      \u0275\u0275elementStart(114, "span");
      \u0275\u0275text(115, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "li")(117, "label", 38);
      \u0275\u0275element(118, "i", 39)(119, "input", 41);
      \u0275\u0275elementStart(120, "span");
      \u0275\u0275text(121, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(122, "div", 42)(123, "h6", 43);
      \u0275\u0275text(124, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "span", 44)(126, "span", 45);
      \u0275\u0275text(127, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(128, "Vendors Selected");
      \u0275\u0275elementStart(129, "span", 46);
      \u0275\u0275listener("click", function PurchaseOrdersReportsComponent_Template_span_click_129_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(130, "i", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "span", 44)(132, "span", 45);
      \u0275\u0275text(133, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(134, "Status Selected");
      \u0275\u0275elementStart(135, "span", 46);
      \u0275\u0275listener("click", function PurchaseOrdersReportsComponent_Template_span_click_135_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(136, "i", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "a", 48);
      \u0275\u0275listener("click", function PurchaseOrdersReportsComponent_Template_a_click_137_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(138, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "div", 49)(140, "table", 50);
      \u0275\u0275listener("matSortChange", function PurchaseOrdersReportsComponent_Template_table_matSortChange_140_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(141, "thead", 51)(142, "tr")(143, "th", 52)(144, "div", 53);
      \u0275\u0275listener("click", function PurchaseOrdersReportsComponent_Template_div_click_144_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(145, "input", 54);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrdersReportsComponent_Template_input_ngModelChange_145_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "th", 52);
      \u0275\u0275text(147, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "th", 55);
      \u0275\u0275text(149, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "th", 56);
      \u0275\u0275text(151, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "th", 57);
      \u0275\u0275text(153, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "th", 52);
      \u0275\u0275text(155, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "th", 52);
      \u0275\u0275text(157, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "tbody");
      \u0275\u0275repeaterCreate(159, PurchaseOrdersReportsComponent_For_160_Template, 25, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(161, PurchaseOrdersReportsComponent_Conditional_161_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(162, PurchaseOrdersReportsComponent_app_custom_pagination_162_Template, 1, 0, "app-custom-pagination", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 59)(164, "div", 60)(165, "div", 61)(166, "h6", 62);
      \u0275\u0275text(167, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "button", 63);
      \u0275\u0275element(169, "i", 64);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(170, "div", 65)(171, "form", 66)(172, "div", 22)(173, "label", 67);
      \u0275\u0275text(174, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 34)(176, "a", 68);
      \u0275\u0275text(177, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 69)(179, "div", 22)(180, "div", 70)(181, "span", 71);
      \u0275\u0275element(182, "i", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275element(183, "input", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "ul", 22)(185, "li", 74)(186, "label", 75);
      \u0275\u0275element(187, "input", 76);
      \u0275\u0275text(188, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "a", 77);
      \u0275\u0275text(190, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "li")(192, "label", 78);
      \u0275\u0275element(193, "input", 41);
      \u0275\u0275elementStart(194, "span", 79);
      \u0275\u0275element(195, "img", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(196, "Emma Rose ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "li")(198, "label", 78);
      \u0275\u0275element(199, "input", 41);
      \u0275\u0275elementStart(200, "span", 79);
      \u0275\u0275element(201, "img", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275text(202, "Ethan James ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "li")(204, "label", 78);
      \u0275\u0275element(205, "input", 41);
      \u0275\u0275elementStart(206, "span", 79);
      \u0275\u0275element(207, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275text(208, "Olivia Grace ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "li")(210, "label", 78);
      \u0275\u0275element(211, "input", 41);
      \u0275\u0275elementStart(212, "span", 79);
      \u0275\u0275element(213, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275text(214, "Liam Michael ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(215, "div", 84)(216, "div", 85)(217, "a", 86);
      \u0275\u0275text(218, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 85)(220, "a", 87);
      \u0275\u0275text(221, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(222, "div", 22)(223, "label", 67);
      \u0275\u0275text(224, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 34)(226, "a", 68);
      \u0275\u0275text(227, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div", 69)(229, "div", 88)(230, "div", 89)(231, "span", 90);
      \u0275\u0275text(232, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "span", 90);
      \u0275\u0275text(234, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "mat-slider", 91);
      \u0275\u0275element(236, "input", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "p");
      \u0275\u0275text(238, "Range : ");
      \u0275\u0275elementStart(239, "span", 93);
      \u0275\u0275text(240, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(241, "div", 22)(242, "label", 67);
      \u0275\u0275text(243, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "div", 34)(245, "a", 68);
      \u0275\u0275text(246, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "div", 69)(248, "ul", 22)(249, "li")(250, "label", 78);
      \u0275\u0275element(251, "input", 40);
      \u0275\u0275text(252, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "li")(254, "label", 78);
      \u0275\u0275element(255, "input", 41);
      \u0275\u0275text(256, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(257, "li")(258, "label", 78);
      \u0275\u0275element(259, "input", 40);
      \u0275\u0275text(260, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "li")(262, "label", 78);
      \u0275\u0275element(263, "input", 41);
      \u0275\u0275text(264, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "li")(266, "label", 78);
      \u0275\u0275element(267, "input", 41);
      \u0275\u0275text(268, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(269, "div", 22)(270, "label", 94);
      \u0275\u0275text(271, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "div", 95);
      \u0275\u0275element(273, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 22)(275, "label", 67);
      \u0275\u0275text(276, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "div", 34)(278, "a", 68);
      \u0275\u0275text(279, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "div", 69)(281, "ul", 22)(282, "li")(283, "label", 78);
      \u0275\u0275element(284, "input", 40)(285, "i", 96);
      \u0275\u0275text(286, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "li")(288, "label", 78);
      \u0275\u0275element(289, "input", 41)(290, "i", 97);
      \u0275\u0275text(291, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li")(293, "label", 78);
      \u0275\u0275element(294, "input", 40)(295, "i", 98);
      \u0275\u0275text(296, "Cancelled ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(297, "div", 99)(298, "div", 84)(299, "div", 85)(300, "a", 100);
      \u0275\u0275text(301, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "div", 85)(303, "button", 101);
      \u0275\u0275listener("click", function PurchaseOrdersReportsComponent_Template_button_click_303_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(304, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275property("series", ctx.radialChart.series)("chart", ctx.radialChart.chart)("colors", ctx.radialChart.colors)("fill", ctx.radialChart.fill)("xaxis", ctx.radialChart.xaxis)("stroke", ctx.radialChart.stroke)("dataLabels", ctx.radialChart.dataLabels)("legend", ctx.radialChart.legend)("plotOptions", ctx.radialChart.plotOptions);
      \u0275\u0275advance(12);
      \u0275\u0275property("series", ctx.radialChart2.series)("chart", ctx.radialChart2.chart)("colors", ctx.radialChart2.colors)("fill", ctx.radialChart2.fill)("xaxis", ctx.radialChart2.xaxis)("stroke", ctx.radialChart2.stroke)("dataLabels", ctx.radialChart2.dataLabels)("legend", ctx.radialChart2.legend)("plotOptions", ctx.radialChart2.plotOptions);
      \u0275\u0275advance(12);
      \u0275\u0275property("series", ctx.radialChart3.series)("chart", ctx.radialChart3.chart)("colors", ctx.radialChart3.colors)("fill", ctx.radialChart3.fill)("xaxis", ctx.radialChart3.xaxis)("stroke", ctx.radialChart3.stroke)("dataLabels", ctx.radialChart3.dataLabels)("legend", ctx.radialChart3.legend)("plotOptions", ctx.radialChart3.plotOptions);
      \u0275\u0275advance(12);
      \u0275\u0275property("series", ctx.radialChart4.series)("chart", ctx.radialChart4.chart)("colors", ctx.radialChart4.colors)("fill", ctx.radialChart4.fill)("stroke", ctx.radialChart4.stroke)("dataLabels", ctx.radialChart4.dataLabels)("legend", ctx.radialChart4.legend)("plotOptions", ctx.radialChart4.plotOptions);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(44, _c1));
      \u0275\u0275advance(47);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(45, _c2, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(47, _c3, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(49, _c3, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 161 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(73);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, DateRangePickerComponent, DateRangePicker2Component, NgApexchartsModule, ChartComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseOrdersReportsComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-orders-reports", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      DateRangePickerComponent,
      DateRangePicker2Component,
      NgApexchartsModule
    ], template: ` <!-- Start Container  -->
 <div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Purchase Orders Report</h6>
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
    <!-- End Breadcrumb -->

    <!-- start row -->
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <p class="mb-1 text-truncate">Total Purchase Orders</p>
                            <h6 class="fs-16 fw-semibold mb-0">280</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart3">
                                <apx-chart
                                    [series]="radialChart.series"
                                    [chart]="radialChart.chart"
                                    [colors]="radialChart.colors"
                                    [fill]="radialChart.fill"
                                    [xaxis]="radialChart.xaxis"
                                    [stroke]="radialChart.stroke"
                                    [dataLabels]="radialChart.dataLabels"
                                    [legend]="radialChart.legend"
                                    [plotOptions]="radialChart.plotOptions"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <p class="mb-1 text-truncate"> Completed Orders</p>
                            <h6 class="fs-16 fw-semibold mb-0">240</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart4">
                                <apx-chart
                                    [series]="radialChart2.series"
                                    [chart]="radialChart2.chart"
                                    [colors]="radialChart2.colors"
                                    [fill]="radialChart2.fill"
                                    [xaxis]="radialChart2.xaxis"
                                    [stroke]="radialChart2.stroke"
                                    [dataLabels]="radialChart2.dataLabels"
                                    [legend]="radialChart2.legend"
                                    [plotOptions]="radialChart2.plotOptions"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <p class="mb-1 text-truncate"> Pending Orders</p>
                            <h6 class="fs-16 fw-semibold mb-0">30</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart5">
                                <apx-chart
                                    [series]="radialChart3.series"
                                    [chart]="radialChart3.chart"
                                    [colors]="radialChart3.colors"
                                    [fill]="radialChart3.fill"
                                    [xaxis]="radialChart3.xaxis"
                                    [stroke]="radialChart3.stroke"
                                    [dataLabels]="radialChart3.dataLabels"
                                    [legend]="radialChart3.legend"
                                    [plotOptions]="radialChart3.plotOptions"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <p class="mb-1 text-truncate">Cancelled Orders</p>
                            <h6 class="fs-16 fw-semibold mb-0">10</h6>
                        </div>
                        <div>
                            <div class="chart-set no-tooltip" id="radial-chart6">
                                <apx-chart
                                    [series]="radialChart4.series"
                                    [chart]="radialChart4.chart"
                                    [colors]="radialChart4.colors"
                                    [fill]="radialChart4.fill"
                                    [stroke]="radialChart4.stroke"
                                    [dataLabels]="radialChart4.dataLabels"
                                    [legend]="radialChart4.legend"
                                    [plotOptions]="radialChart4.plotOptions"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <!-- Start Table Search -->
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
                    <ul class="dropdown-menu  dropdown-menu">
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
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- End Table Search -->

    <!-- Start Table List -->
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
                    <th class="no-sort">Payment Mode</th>
                    <th class="no-sort">Status</th>
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
                    </td>

                </tr>
            } @if(tableData.length === 0){
                <tr>
                  <td colspan="12" class="text-center text-dark">No matching records found</td>
                </tr>
              }
            </tbody>
        </table>
    </div>
    <!-- End Table List -->

    <app-custom-pagination *ngIf="row"/>
</div>
<!-- container  -->


        <!-- Start Filter -->
        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">
            <div class="offcanvas-header d-block pb-0">
                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
                    <h6 class="offcanvas-title">Filter</h6>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
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
                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
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
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Cash
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Check
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Bank Transfer
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Paypal
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Stripe
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="dateRangePicker" class="form-label">Date Range</label>
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
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseOrdersReportsComponent, { className: "PurchaseOrdersReportsComponent", filePath: "src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.ts", lineNumber: 42 });
})();
export {
  PurchaseOrdersReportsComponent
};
//# sourceMappingURL=chunk-57OCPBZ5.js.map
