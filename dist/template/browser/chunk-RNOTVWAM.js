import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BZYHLAL5.js";
import {
  DateRangePickerComponent
} from "./chunk-2I7DAYVQ.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-Z5WPXIQX.js";
import {
  CustomPaginationComponent
} from "./chunk-53DCEYLO.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-T4Z6NTOQ.js";
import {
  PaginationService
} from "./chunk-OQ3NIM27.js";
import {
  MatTableDataSource
} from "./chunk-L6DWDL26.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-OWHJPR44.js";
import "./chunk-5PLILXVY.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
import "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-NAWYXTZ5.js";
import {
  DataService,
  routes
} from "./chunk-YJY3UYMJ.js";
import "./chunk-AWXYRVJS.js";
import {
  Router
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-LNSVVXVJ.js";
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/transaction-report/purchase-return-report/purchase-return-report.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
var _c2 = (a0) => ({ "show": a0 });
var _c3 = (a0) => ({ "d-none": a0 });
function PurchaseReturnReportComponent_For_173_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 110)(2, "div", 111)(3, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseReturnReportComponent_For_173_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 113);
    \u0275\u0275text(6, "PUR00025");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8, "22 Feb 2025");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 15)(11, "a", 114);
    \u0275\u0275element(12, "img", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h6", 116)(15, "a", 117);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(17, "td")(18, "span", 118);
    \u0275\u0275text(19);
    \u0275\u0275element(20, "i", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 120);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 120);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(9);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/reports/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.vendor);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? " badge-soft-warning" : data_r2.status === "Cancelled" ? " badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? " isax-timer" : data_r2.status === "Cancelled" ? " isax-close-circle" : "isax-tick-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
  }
}
function PurchaseReturnReportComponent_Conditional_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 121);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseReturnReportComponent_app_custom_pagination_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PurchaseReturnReportComponent = class _PurchaseReturnReportComponent {
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
    this.data.getPurchaseReturnReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.purchasesReturnReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPurchaseReturnReport().subscribe((apiRes) => {
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
  static \u0275fac = function PurchaseReturnReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseReturnReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseReturnReportComponent, selectors: [["app-purchase-return-report"]], viewQuery: function PurchaseReturnReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 318, vars: 48, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "me-2"], [1, "badge", "badge-soft-primary", "border", "border-primary", "rounded-circle", "p-1", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-document-text"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-0"], ["id", "report_chart"], [3, "series", "chart", "colors", "fill", "stroke", "dataLabels", "legend", "plotOptions"], [1, "badge", "badge-soft-success", "border", "border-success", "rounded-circle", "p-1", "d-inline-flex", "align-items-center", "justify-content-center"], ["id", "report_chart_2"], [1, "badge", "badge-soft-warning", "border", "border-warning", "rounded-circle", "p-1", "d-inline-flex", "align-items-center", "justify-content-center"], ["id", "report_chart_3"], [1, "badge", "badge-soft-danger", "border", "border-danger", "rounded-circle", "p-1", "d-inline-flex", "align-items-center", "justify-content-center"], ["id", "report_chart_4"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "dte"], ["mat-sort-header", "vendor"], ["mat-sort-header", "amount"], ["mat-sort-header", "pay"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/reports/avatar-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/reports/avatar-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PurchaseReturnReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Purchase Return Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "span", 17);
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "p", 19);
      \u0275\u0275text(29, "Total Returns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h6", 20);
      \u0275\u0275text(31, "$120,000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 21);
      \u0275\u0275element(33, "apx-chart", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "div", 13)(37, "div", 14)(38, "div", 15)(39, "div", 16)(40, "span", 23);
      \u0275\u0275element(41, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div")(43, "p", 19);
      \u0275\u0275text(44, "Returned Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h6", 20);
      \u0275\u0275text(46, "125");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 24);
      \u0275\u0275element(48, "apx-chart", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(49, "div", 11)(50, "div", 12)(51, "div", 13)(52, "div", 14)(53, "div", 15)(54, "div", 16)(55, "span", 25);
      \u0275\u0275element(56, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div")(58, "p", 19);
      \u0275\u0275text(59, "Defective Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h6", 20);
      \u0275\u0275text(61, "75%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 26);
      \u0275\u0275element(63, "apx-chart", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(64, "div", 11)(65, "div", 12)(66, "div", 13)(67, "div", 14)(68, "div", 15)(69, "div", 16)(70, "span", 27);
      \u0275\u0275element(71, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div")(73, "p", 19);
      \u0275\u0275text(74, "Supplier Issues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "h6", 20);
      \u0275\u0275text(76, "25%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 28);
      \u0275\u0275element(78, "apx-chart", 22);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(79, "div", 29)(80, "div", 30)(81, "div", 31)(82, "div", 32)(83, "div", 33)(84, "a", 34);
      \u0275\u0275element(85, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 36)(87, "label")(88, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseReturnReportComponent_Template_input_ngModelChange_88_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PurchaseReturnReportComponent_Template_input_ngModelChange_88_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(89, "app-date-range-picker-2");
      \u0275\u0275elementStart(90, "a", 38);
      \u0275\u0275element(91, "i", 39);
      \u0275\u0275text(92, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 40)(94, "div", 41)(95, "a", 42);
      \u0275\u0275element(96, "i", 43);
      \u0275\u0275text(97, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "ul", 44)(99, "li")(100, "label", 45);
      \u0275\u0275element(101, "i", 46)(102, "input", 47);
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "li")(106, "label", 45);
      \u0275\u0275element(107, "i", 46)(108, "input", 47);
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275text(110, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "li")(112, "label", 45);
      \u0275\u0275element(113, "i", 46)(114, "input", 47);
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "li")(118, "label", 45);
      \u0275\u0275element(119, "i", 46)(120, "input", 47);
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "li")(124, "label", 45);
      \u0275\u0275element(125, "i", 46)(126, "input", 48);
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275text(128, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "li")(130, "label", 45);
      \u0275\u0275element(131, "i", 46)(132, "input", 48);
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(135, "div", 49)(136, "h6", 50);
      \u0275\u0275text(137, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "span", 51)(139, "span", 52);
      \u0275\u0275text(140, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(141, "Vendors Selected");
      \u0275\u0275elementStart(142, "span", 53);
      \u0275\u0275listener("click", function PurchaseReturnReportComponent_Template_span_click_142_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(143, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "span", 51)(145, "span", 52);
      \u0275\u0275text(146, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, "Status Selected");
      \u0275\u0275elementStart(148, "span", 53);
      \u0275\u0275listener("click", function PurchaseReturnReportComponent_Template_span_click_148_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(149, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "a", 55);
      \u0275\u0275listener("click", function PurchaseReturnReportComponent_Template_a_click_150_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(151, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "div", 56)(153, "table", 57);
      \u0275\u0275listener("matSortChange", function PurchaseReturnReportComponent_Template_table_matSortChange_153_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(154, "thead", 58)(155, "tr")(156, "th", 59)(157, "div", 60);
      \u0275\u0275listener("click", function PurchaseReturnReportComponent_Template_div_click_157_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(158, "input", 61);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseReturnReportComponent_Template_input_ngModelChange_158_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(159, "th", 59);
      \u0275\u0275text(160, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "th", 62);
      \u0275\u0275text(162, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "th", 63);
      \u0275\u0275text(164, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "th", 59);
      \u0275\u0275text(166, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "th", 64);
      \u0275\u0275text(168, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "th", 65);
      \u0275\u0275text(170, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "tbody");
      \u0275\u0275repeaterCreate(172, PurchaseReturnReportComponent_For_173_Template, 25, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(174, PurchaseReturnReportComponent_Conditional_174_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(175, PurchaseReturnReportComponent_app_custom_pagination_175_Template, 1, 0, "app-custom-pagination", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 67)(177, "div", 68)(178, "div", 69)(179, "h6", 70);
      \u0275\u0275text(180, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "button", 71);
      \u0275\u0275element(182, "i", 72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 73)(184, "form", 74)(185, "div", 29)(186, "label", 75);
      \u0275\u0275text(187, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 41)(189, "a", 76);
      \u0275\u0275text(190, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "div", 77)(192, "div", 29)(193, "div", 78)(194, "span", 79);
      \u0275\u0275element(195, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(196, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "ul", 29)(198, "li", 82)(199, "label", 83);
      \u0275\u0275element(200, "input", 84);
      \u0275\u0275text(201, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "a", 85);
      \u0275\u0275text(203, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "label", 86);
      \u0275\u0275element(206, "input", 48);
      \u0275\u0275elementStart(207, "span", 87);
      \u0275\u0275element(208, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(209, "Emma Rose ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "label", 86);
      \u0275\u0275element(212, "input", 48);
      \u0275\u0275elementStart(213, "span", 87);
      \u0275\u0275element(214, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(215, "Ethan James ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "li")(217, "label", 86);
      \u0275\u0275element(218, "input", 48);
      \u0275\u0275elementStart(219, "span", 87);
      \u0275\u0275element(220, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(221, "Olivia Grace ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "label", 86);
      \u0275\u0275element(224, "input", 48);
      \u0275\u0275elementStart(225, "span", 87);
      \u0275\u0275element(226, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(227, "Liam Michael ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(228, "div", 92)(229, "div", 93)(230, "a", 94);
      \u0275\u0275text(231, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "div", 93)(233, "a", 95);
      \u0275\u0275text(234, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(235, "div", 29)(236, "label", 75);
      \u0275\u0275text(237, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 41)(239, "a", 76);
      \u0275\u0275text(240, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 77)(242, "div", 96)(243, "div", 97)(244, "span", 98);
      \u0275\u0275text(245, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "span", 98);
      \u0275\u0275text(247, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "mat-slider", 99);
      \u0275\u0275element(249, "input", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "p");
      \u0275\u0275text(251, "Range : ");
      \u0275\u0275elementStart(252, "span", 101);
      \u0275\u0275text(253, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(254, "div", 29)(255, "label", 75);
      \u0275\u0275text(256, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div", 41)(258, "a", 76);
      \u0275\u0275text(259, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "div", 77)(261, "ul", 29)(262, "li")(263, "label", 86);
      \u0275\u0275element(264, "input", 47);
      \u0275\u0275text(265, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "li")(267, "label", 86);
      \u0275\u0275element(268, "input", 48);
      \u0275\u0275text(269, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "li")(271, "label", 86);
      \u0275\u0275element(272, "input", 47);
      \u0275\u0275text(273, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "li")(275, "label", 86);
      \u0275\u0275element(276, "input", 48);
      \u0275\u0275text(277, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "li")(279, "label", 86);
      \u0275\u0275element(280, "input", 48);
      \u0275\u0275text(281, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(282, "div", 29)(283, "label", 102);
      \u0275\u0275text(284, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 103);
      \u0275\u0275element(286, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 29)(288, "label", 75);
      \u0275\u0275text(289, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "div", 41)(291, "a", 76);
      \u0275\u0275text(292, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "div", 77)(294, "ul", 29)(295, "li")(296, "label", 86);
      \u0275\u0275element(297, "input", 47)(298, "i", 104);
      \u0275\u0275text(299, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "li")(301, "label", 86);
      \u0275\u0275element(302, "input", 48)(303, "i", 105);
      \u0275\u0275text(304, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "li")(306, "label", 86);
      \u0275\u0275element(307, "input", 47)(308, "i", 106);
      \u0275\u0275text(309, "Cancelled ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(310, "div", 107)(311, "div", 92)(312, "div", 93)(313, "a", 108);
      \u0275\u0275text(314, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(315, "div", 93)(316, "button", 109);
      \u0275\u0275listener("click", function PurchaseReturnReportComponent_Template_button_click_316_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(317, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(33);
      \u0275\u0275property("series", ctx.reportChart.series)("chart", ctx.reportChart.chart)("colors", ctx.reportChart.colors)("fill", ctx.reportChart.fill)("stroke", ctx.reportChart.stroke)("dataLabels", ctx.reportChart.dataLabels)("legend", ctx.reportChart.legend)("plotOptions", ctx.reportChart.plotOptions);
      \u0275\u0275advance(15);
      \u0275\u0275property("series", ctx.reportChart2.series)("chart", ctx.reportChart2.chart)("colors", ctx.reportChart2.colors)("fill", ctx.reportChart2.fill)("stroke", ctx.reportChart2.stroke)("dataLabels", ctx.reportChart2.dataLabels)("legend", ctx.reportChart2.legend)("plotOptions", ctx.reportChart2.plotOptions);
      \u0275\u0275advance(15);
      \u0275\u0275property("series", ctx.reportChart3.series)("chart", ctx.reportChart3.chart)("colors", ctx.reportChart3.colors)("fill", ctx.reportChart3.fill)("stroke", ctx.reportChart3.stroke)("dataLabels", ctx.reportChart3.dataLabels)("legend", ctx.reportChart3.legend)("plotOptions", ctx.reportChart3.plotOptions);
      \u0275\u0275advance(15);
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
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 174 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(73);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, DateRangePickerComponent, DateRangePicker2Component, NgApexchartsModule, ChartComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseReturnReportComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-return-report", imports: [
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
						<h6 class="mb-0">Purchase Return Report</h6>
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
										 <div class="d-flex align-items-center">
											<div class="me-2">
												<span class="badge badge-soft-primary border border-primary rounded-circle p-1 d-inline-flex align-items-center justify-content-center">
													<i class="isax isax-document-text"></i>
												</span>
											</div>
											<div>
												<p class="mb-1 text-truncate">Total Returns</p>
												<h6 class="fs-16 fw-semibold mb-0">$120,000</h6>
											</div>
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
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between">
										<div class="d-flex align-items-center">
											<div class="me-2">
												<span class="badge badge-soft-success border border-success rounded-circle p-1 d-inline-flex align-items-center justify-content-center">
													<i class="isax isax-document-text"></i>
												</span>
											</div>
											<div>
												<p class="mb-1 text-truncate">Returned Orders</p>
												<h6 class="fs-16 fw-semibold mb-0">125</h6>
											</div>
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
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between">
										<div class="d-flex align-items-center">
											<div class="me-2">
												<span class="badge badge-soft-warning border border-warning rounded-circle p-1 d-inline-flex align-items-center justify-content-center">
													<i class="isax isax-document-text"></i>
												</span>
											</div>
											<div>
												<p class="mb-1 text-truncate">Defective Items</p>
												<h6 class="fs-16 fw-semibold mb-0">75%</h6>
											</div>
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
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between">
										<div class="d-flex align-items-center">
											<div class="me-2">
												<span class="badge badge-soft-danger border border-danger rounded-circle p-1 d-inline-flex align-items-center justify-content-center">
													<i class="isax isax-document-text"></i>
												</span>
											</div>
											<div>
												<p class="mb-1 text-truncate">Supplier Issues</p>
												<h6 class="fs-16 fw-semibold mb-0">25%</h6>
											</div>
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
								<th mat-sort-header="dte">Date</th>
								<th mat-sort-header="vendor">Vendor</th>								
								<th class="no-sort"	>Status</th>
								<th mat-sort-header="amount">Amount</th>
								<th mat-sort-header="pay">Payment Mode</th>
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
									<a href="javascript:void(0);" class="link-default">PUR00025</a>
								</td>                                
								<td>22 Feb 2025</td>
								<td>
                                    <div class="d-flex align-items-center">
										<a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
											<img src="assets/img/reports/{{data.img}}" class="rounded-circle" alt="img">
										</a>
										<div>
											<h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.vendor}}</a></h6>
										</div>
									</div>
                                </td>
								<td>
									<span class="badge d-inline-flex align-items-center"
									[ngClass]="data.status==='Pending'?' badge-soft-warning':data.status==='Cancelled'?' badge-soft-danger':'badge-soft-success'">
									{{data.status}} 
									<i class="isax ms-1"
									[ngClass]="data.status==='Pending'?' isax-timer':data.status==='Cancelled'?' isax-close-circle':'isax-tick-circle'"></i>
								</span>
								</td>
								<td class="text-dark">{{data.amount}}</td>
								<td class="text-dark">{{data.paymentMode}}</td>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseReturnReportComponent, { className: "PurchaseReturnReportComponent", filePath: "src/app/features/reports/transaction-report/purchase-return-report/purchase-return-report.component.ts", lineNumber: 42 });
})();
export {
  PurchaseReturnReportComponent
};
//# sourceMappingURL=chunk-RNOTVWAM.js.map
