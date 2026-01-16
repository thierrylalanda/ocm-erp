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

// src/app/features/reports/transaction-report/sales-returns/sales-returns.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
function SalesReturnsComponent_For_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 100)(2, "div", 101)(3, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function SalesReturnsComponent_For_154_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 103);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 104)(9, "a", 105);
    \u0275\u0275element(10, "img", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 107)(13, "a", 108);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td", 109);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "a", 103);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 109);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 110);
    \u0275\u0275text(26);
    \u0275\u0275element(27, "i", 111);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.creditNoteId);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.amount, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.relatedTo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.paymentMode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.createdOn, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? " badge-soft-warning" : data_r2.status === "Cancelled" ? " badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? " isax-timer" : data_r2.status === "Cancelled" ? " isax-close-circle" : "isax-tick-circle");
  }
}
function SalesReturnsComponent_Conditional_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 112);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SalesReturnsComponent_app_custom_pagination_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var SalesReturnsComponent = class _SalesReturnsComponent {
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
    this.data.getSalesReturnReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.salesReturns) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSalesReturnReport().subscribe((apiRes) => {
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
  static \u0275fac = function SalesReturnsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesReturnsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesReturnsComponent, selectors: [["app-sales-returns"]], viewQuery: function SalesReturnsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 311, vars: 39, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "mb-2"], [1, "d-flex", "align-items-end", "justify-content-between", "mt-1"], [1, "fs-16", "fw-semibold", "mb-1"], [1, "text-success", "fw-normal", "fs-13", "ms-2"], [1, "isax", "isax-send", "fs-10"], [1, "fs-13", "text-truncate"], ["id", "report_chart"], [3, "series", "chart", "colors", "fill", "stroke", "dataLabels", "legend", "plotOptions"], ["id", "report_chart_2"], [1, "mb-2", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-1", "d-flex", "flex-wrap"], ["id", "report_chart_3"], ["id", "report_chart_4"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "amount"], ["mat-sort-header", "date"], ["mat-sort-header", "status"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SalesReturnsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Sales Return Report");
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
      \u0275\u0275text(24, "Total Returns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15)(26, "div")(27, "h6", 16);
      \u0275\u0275text(28, "$50,000 ");
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275text(31, "5.62%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "p", 19);
      \u0275\u0275text(33, "Compare to last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275element(35, "apx-chart", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 12)(38, "div", 13)(39, "div")(40, "p", 14);
      \u0275\u0275text(41, "Returned Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 15)(43, "div")(44, "h6", 16);
      \u0275\u0275text(45, "154");
      \u0275\u0275elementStart(46, "span", 17);
      \u0275\u0275element(47, "i", 18);
      \u0275\u0275text(48, "11.4%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "p", 19);
      \u0275\u0275text(50, "Compare to last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 22);
      \u0275\u0275element(52, "apx-chart", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(53, "div", 11)(54, "div", 12)(55, "div", 13)(56, "div")(57, "p", 23);
      \u0275\u0275text(58, "Total Sales Loss Due to Returns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 15)(60, "div")(61, "h6", 24);
      \u0275\u0275text(62, "$25,000");
      \u0275\u0275elementStart(63, "span", 17);
      \u0275\u0275element(64, "i", 18);
      \u0275\u0275text(65, "8.52%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "p", 19);
      \u0275\u0275text(67, "Compare to last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 25);
      \u0275\u0275element(69, "apx-chart", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(70, "div", 11)(71, "div", 12)(72, "div", 13)(73, "div")(74, "p", 14);
      \u0275\u0275text(75, "Total Returns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 15)(77, "div")(78, "h6", 16);
      \u0275\u0275text(79, "$50,000 ");
      \u0275\u0275elementStart(80, "span", 17);
      \u0275\u0275element(81, "i", 18);
      \u0275\u0275text(82, "5.62%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "p", 19);
      \u0275\u0275text(84, "Compare to last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 26);
      \u0275\u0275element(86, "apx-chart", 21);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(87, "div", 27)(88, "div", 28)(89, "div", 29)(90, "div", 30)(91, "div", 31)(92, "a", 32);
      \u0275\u0275element(93, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 34)(95, "label")(96, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function SalesReturnsComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SalesReturnsComponent_Template_input_ngModelChange_96_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(97, "app-date-range-picker-2");
      \u0275\u0275elementStart(98, "a", 36);
      \u0275\u0275element(99, "i", 37);
      \u0275\u0275text(100, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 38)(102, "div", 4)(103, "a", 39);
      \u0275\u0275element(104, "i", 40);
      \u0275\u0275text(105, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "ul", 41)(107, "li")(108, "label", 42);
      \u0275\u0275element(109, "i", 43)(110, "input", 44);
      \u0275\u0275elementStart(111, "span");
      \u0275\u0275text(112, "Quotation ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "li")(114, "label", 42);
      \u0275\u0275element(115, "i", 43)(116, "input", 44);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "li")(120, "label", 42);
      \u0275\u0275element(121, "i", 43)(122, "input", 44);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "li")(126, "label", 42);
      \u0275\u0275element(127, "i", 43)(128, "input", 44);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Created On");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(131, "div", 45)(132, "table", 46);
      \u0275\u0275listener("matSortChange", function SalesReturnsComponent_Template_table_matSortChange_132_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(133, "thead")(134, "tr")(135, "th", 47)(136, "div", 48);
      \u0275\u0275listener("click", function SalesReturnsComponent_Template_div_click_136_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(137, "input", 49);
      \u0275\u0275twoWayListener("ngModelChange", function SalesReturnsComponent_Template_input_ngModelChange_137_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "th", 47);
      \u0275\u0275text(139, "Credit Note ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "th", 50);
      \u0275\u0275text(141, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "th", 51);
      \u0275\u0275text(143, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "th", 47);
      \u0275\u0275text(145, "Related To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "th", 47);
      \u0275\u0275text(147, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "th", 52);
      \u0275\u0275text(149, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "th", 53);
      \u0275\u0275text(151, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "tbody");
      \u0275\u0275repeaterCreate(153, SalesReturnsComponent_For_154_Template, 28, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(155, SalesReturnsComponent_Conditional_155_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(156, SalesReturnsComponent_app_custom_pagination_156_Template, 1, 0, "app-custom-pagination", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 55)(158, "div", 56)(159, "div", 57)(160, "h6", 58);
      \u0275\u0275text(161, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "button", 59);
      \u0275\u0275element(163, "i", 60);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(164, "div", 61)(165, "form", 62)(166, "div", 27)(167, "label", 63);
      \u0275\u0275text(168, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "div", 4)(170, "a", 64);
      \u0275\u0275text(171, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "div", 65)(173, "div", 27)(174, "div", 66)(175, "span", 67);
      \u0275\u0275element(176, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "input", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "ul", 27)(179, "li", 70)(180, "label", 71);
      \u0275\u0275element(181, "input", 72);
      \u0275\u0275text(182, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "a", 73);
      \u0275\u0275text(184, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "li")(186, "label", 74);
      \u0275\u0275element(187, "input", 75);
      \u0275\u0275elementStart(188, "span", 76);
      \u0275\u0275element(189, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(190, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "li")(192, "label", 74);
      \u0275\u0275element(193, "input", 75);
      \u0275\u0275elementStart(194, "span", 76);
      \u0275\u0275element(195, "img", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(196, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "li")(198, "label", 74);
      \u0275\u0275element(199, "input", 75);
      \u0275\u0275elementStart(200, "span", 76);
      \u0275\u0275element(201, "img", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275text(202, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "li")(204, "label", 74);
      \u0275\u0275element(205, "input", 75);
      \u0275\u0275elementStart(206, "span", 76);
      \u0275\u0275element(207, "img", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(208, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "li")(210, "label", 74);
      \u0275\u0275element(211, "input", 75);
      \u0275\u0275elementStart(212, "span", 76);
      \u0275\u0275element(213, "img", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275text(214, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "li")(216, "label", 74);
      \u0275\u0275element(217, "input", 75);
      \u0275\u0275elementStart(218, "span", 76);
      \u0275\u0275element(219, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275text(220, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "div", 83)(222, "div", 84)(223, "a", 85);
      \u0275\u0275text(224, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div", 84)(226, "a", 86);
      \u0275\u0275text(227, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(228, "div", 27)(229, "label", 63);
      \u0275\u0275text(230, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "div", 4)(232, "a", 64);
      \u0275\u0275text(233, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "div", 65)(235, "div", 87)(236, "div", 88)(237, "span", 89);
      \u0275\u0275text(238, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "span", 89);
      \u0275\u0275text(240, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "mat-slider", 90);
      \u0275\u0275element(242, "input", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "p");
      \u0275\u0275text(244, "Range : ");
      \u0275\u0275elementStart(245, "span", 92);
      \u0275\u0275text(246, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(247, "div", 27)(248, "label", 63);
      \u0275\u0275text(249, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "div", 4)(251, "a", 64);
      \u0275\u0275text(252, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 65)(254, "ul", 2)(255, "li")(256, "label", 74);
      \u0275\u0275element(257, "input", 75);
      \u0275\u0275text(258, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "li")(260, "label", 74);
      \u0275\u0275element(261, "input", 75);
      \u0275\u0275text(262, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "li")(264, "label", 74);
      \u0275\u0275element(265, "input", 75);
      \u0275\u0275text(266, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "li")(268, "label", 74);
      \u0275\u0275element(269, "input", 75);
      \u0275\u0275text(270, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "li")(272, "label", 74);
      \u0275\u0275element(273, "input", 75);
      \u0275\u0275text(274, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(275, "div", 27)(276, "label", 63);
      \u0275\u0275text(277, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "div", 93);
      \u0275\u0275element(279, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "div", 27)(281, "label", 63);
      \u0275\u0275text(282, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "div", 4)(284, "a", 64);
      \u0275\u0275text(285, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "div", 65)(287, "ul", 2)(288, "li")(289, "label", 74);
      \u0275\u0275element(290, "input", 75)(291, "i", 94);
      \u0275\u0275text(292, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(293, "li")(294, "label", 74);
      \u0275\u0275element(295, "input", 75)(296, "i", 95);
      \u0275\u0275text(297, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "li")(299, "label", 74);
      \u0275\u0275element(300, "input", 75)(301, "i", 96);
      \u0275\u0275text(302, "Cancelled ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(303, "div", 97)(304, "div", 83)(305, "div", 84)(306, "a", 98);
      \u0275\u0275text(307, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "div", 84)(309, "button", 99);
      \u0275\u0275text(310, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275property("series", ctx.reportChart.series)("chart", ctx.reportChart.chart)("colors", ctx.reportChart.colors)("fill", ctx.reportChart.fill)("stroke", ctx.reportChart.stroke)("dataLabels", ctx.reportChart.dataLabels)("legend", ctx.reportChart.legend)("plotOptions", ctx.reportChart.plotOptions);
      \u0275\u0275advance(17);
      \u0275\u0275property("series", ctx.reportChart2.series)("chart", ctx.reportChart2.chart)("colors", ctx.reportChart2.colors)("fill", ctx.reportChart2.fill)("stroke", ctx.reportChart2.stroke)("dataLabels", ctx.reportChart2.dataLabels)("legend", ctx.reportChart2.legend)("plotOptions", ctx.reportChart2.plotOptions);
      \u0275\u0275advance(17);
      \u0275\u0275property("series", ctx.reportChart3.series)("chart", ctx.reportChart3.chart)("colors", ctx.reportChart3.colors)("fill", ctx.reportChart3.fill)("stroke", ctx.reportChart3.stroke)("dataLabels", ctx.reportChart3.dataLabels)("legend", ctx.reportChart3.legend)("plotOptions", ctx.reportChart3.plotOptions);
      \u0275\u0275advance(17);
      \u0275\u0275property("series", ctx.reportChart4.series)("chart", ctx.reportChart4.chart)("colors", ctx.reportChart4.colors)("fill", ctx.reportChart4.fill)("stroke", ctx.reportChart4.stroke)("dataLabels", ctx.reportChart4.dataLabels)("legend", ctx.reportChart4.legend)("plotOptions", ctx.reportChart4.plotOptions);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(38, _c1));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 155 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(85);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, DateRangePickerComponent, DateRangePicker2Component, NgApexchartsModule, ChartComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesReturnsComponent, [{
    type: Component,
    args: [{ selector: "app-sales-returns", imports: [
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
						<h6 class="mb-0">Sales Return Report</h6>
					</div>
					<div class="my-xl-auto">
						<div class="dropdown">
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
									<div>
										<p class="mb-2">Total Returns</p>
										<div class="d-flex align-items-end justify-content-between  mt-1">
											<div>
												<h6 class="fs-16 fw-semibold mb-1">$50,000 <span class="text-success fw-normal fs-13 ms-2"><i class="isax isax-send fs-10"></i>5.62%</span></h6>
												<p class="fs-13 text-truncate">Compare to last month</p>
											</div>
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
									<div>
										<p class="mb-2">Returned Invoices</p>
										<div class="d-flex align-items-end justify-content-between  mt-1">
											<div>
												<h6 class="fs-16 fw-semibold mb-1">154<span class="text-success fw-normal fs-13 ms-2"><i class="isax isax-send fs-10"></i>11.4%</span></h6>
												<p class="fs-13 text-truncate">Compare to last month</p>
											</div>
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
									<div>
										<p class="mb-2 text-truncate">Total Sales Loss Due to Returns</p>
										<div class="d-flex align-items-end justify-content-between  mt-1">
											<div>
												<h6 class="fs-16 fw-semibold mb-1 d-flex flex-wrap">$25,000<span class="text-success fw-normal fs-13 ms-2"><i class="isax isax-send fs-10"></i>8.52%</span></h6>
												<p class="fs-13 text-truncate">Compare to last month</p>
											</div>
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
									<div>
										<p class="mb-2">Total Returns</p>
										<div class="d-flex align-items-end justify-content-between  mt-1">
											<div>
												<h6 class="fs-16 fw-semibold mb-1">$50,000 <span class="text-success fw-normal fs-13 ms-2"><i class="isax isax-send fs-10"></i>5.62%</span></h6>
												<p class="fs-13 text-truncate">Compare to last month</p>
											</div>
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
					<div class="d-flex align-items-center justify-content-between gap-3 flex-wrap">
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
											<span>Quotation ID</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Customer</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Status</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Created On</span>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>				

				</div>
				<!-- /Table Search -->
				
				<!-- Table List -->
				<div class="table-responsive">
					<table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
						<thead>
							<tr>
								<th class="no-sort">
									<div class="form-check form-check-md" (click)="selectAll(initChecked)">
										<input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
									</div>
								</th>
								<th class="no-sort">Credit Note ID</th>
								<th mat-sort-header="customer">Customer</th>
								<th mat-sort-header="amount">Amount</th>
								<th class="no-sort">Related To</th>
								<th class="no-sort">Payment Mode</th>
								<th mat-sort-header="date">Created On</th>
								<th mat-sort-header="status">Status</th>
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
									<a href="javascript:void(0);" class="link-default">{{data.creditNoteId}}</a>
								</td>
								<td>
                                    <div class="d-flex align-items-center">
										<a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
											<img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
										</a>
										<div>
											<h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.customer}}</a></h6>
										</div>
									</div>
                                </td>
								<td class="text-dark">
									{{data.amount}}
								</td>
								<td><a href="javascript:void(0);" class="link-default">{{data.relatedTo}}</a></td>
								<td class="text-dark">
									{{data.paymentMode}}
								</td>
								<td>
									{{data.createdOn}}
								</td>
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
						<label class="form-label">Customer</label>
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
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-18.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Harris
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>David Anderson
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
								<ul class="mb-0">
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
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
											<input class="form-check-input m-0 me-2" type="checkbox">
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
								<ul class="mb-0">
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
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
											<input class="form-check-input m-0 me-2" type="checkbox">
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
								<button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesReturnsComponent, { className: "SalesReturnsComponent", filePath: "src/app/features/reports/transaction-report/sales-returns/sales-returns.component.ts", lineNumber: 42 });
})();
export {
  SalesReturnsComponent
};
//# sourceMappingURL=chunk-P33BVD7F.js.map
