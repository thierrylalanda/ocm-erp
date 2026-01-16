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
  Router,
  RouterLink
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
  ɵɵnextContext,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/finance-reports/tax-report/tax-report.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
var _c2 = (a0) => ({ "show": a0 });
var _c3 = (a0) => ({ "d-none": a0 });
function TaxReportComponent_For_196_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 111)(2, "div", 112)(3, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function TaxReportComponent_For_196_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 114);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 115)(9, "a", 116);
    \u0275\u0275element(10, "img", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 118)(13, "a", 119);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 120);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 120);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 120);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 120);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.sku);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.totalPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.mode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.sellingPrice);
  }
}
function TaxReportComponent_Conditional_197_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 121);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function TaxReportComponent_app_custom_pagination_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var TaxReportComponent = class _TaxReportComponent {
  data;
  router;
  pagination;
  routes = routes;
  chart;
  timeChart;
  timeChart2;
  timeChart3;
  timeChart4;
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
  ngOnInit() {
    this.timeChart = {
      series: [{
        name: "Tax Collected",
        data: [4, 6, 9, 9, 7]
      }],
      chart: {
        type: "bar",
        width: 56,
        height: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#fff"
        },
        sparkline: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        colors: ["#7539FF"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#7539FF", "#EFEEFF"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
        labels: {
          show: false
        }
      },
      tooltip: {
        show: false,
        theme: "light",
        fixed: {
          enabled: false
        },
        x: {
          show: true
        },
        marker: {
          show: true
        }
      }
    };
    this.timeChart2 = {
      series: [{
        name: "Tax Collected",
        data: [4, 6, 9, 9, 7]
      }],
      chart: {
        type: "bar",
        width: 56,
        height: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#fff"
        },
        sparkline: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        colors: ["#7539FF"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#27AE60", "#EFEEFF"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
        labels: {
          show: false
        }
      },
      tooltip: {
        show: false,
        theme: "light",
        fixed: {
          enabled: false
        },
        x: {
          show: true
        },
        marker: {
          show: true
        }
      }
    };
    this.timeChart3 = {
      series: [{
        name: "Tax Collected",
        data: [4, 6, 9, 9, 7]
      }],
      chart: {
        type: "bar",
        width: 56,
        height: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#fff"
        },
        sparkline: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        colors: ["#7539FF"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#E2B93B", "#EFEEFF"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
        labels: {
          show: false
        }
      },
      tooltip: {
        show: false,
        theme: "light",
        fixed: {
          enabled: false
        },
        x: {
          show: true
        },
        marker: {
          show: true
        }
      }
    };
    this.timeChart4 = {
      series: [{
        name: "Tax Collected",
        data: [4, 6, 9, 9, 7]
      }],
      chart: {
        type: "bar",
        width: 56,
        height: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#fff"
        },
        sparkline: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        colors: ["#7539FF"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#EF1E1E", "#EEEEEE"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
        labels: {
          show: false
        }
      },
      tooltip: {
        show: false,
        theme: "light",
        fixed: {
          enabled: false
        },
        x: {
          show: true
        },
        marker: {
          show: true
        }
      }
    };
  }
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
    this.data.getTaxReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.taxReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getTaxReport().subscribe((apiRes) => {
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
  static \u0275fac = function TaxReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaxReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaxReportComponent, selectors: [["app-tax-report"]], viewQuery: function TaxReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 364, vars: 48, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "badge", "badge-soft-primary", "border", "border-primary", "rounded-2", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "fs-13", "mb-0"], [1, "badge", "badge-soft-success"], [1, "isax", "isax-arrow-up5", "ms-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-0"], ["id", "time-chart", 1, "time-chart"], [3, "series", "chart", "colors", "fill", "xaxis", "stroke", "tooltip", "dataLabels"], [1, "badge", "badge-soft-success", "border", "border-success", "rounded-2", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-money-3", "fs-16"], ["id", "time-chart02", 1, "time-chart"], [1, "badge", "badge-soft-warning", "border", "border-warning", "rounded-2", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-money-4", "fs-16"], ["id", "time-chart03", 1, "time-chart"], [1, "badge", "badge-soft-danger", "border", "border-danger", "rounded-2", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-money", "fs-16"], ["id", "time-chart04", 1, "time-chart"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "custoemr"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], ["mat-sort-header", "discount"], ["mat-sort-header", "tax"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function TaxReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Tax Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div")(23, "span", 14);
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "p", 16)(26, "span", 17);
      \u0275\u0275text(27, "+5.62%");
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 19)(30, "div")(31, "p", 20);
      \u0275\u0275text(32, "Total Tax Collected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h6", 21);
      \u0275\u0275text(34, "$450,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div")(36, "div", 22);
      \u0275\u0275element(37, "apx-chart", 23);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "div", 13)(42, "div")(43, "span", 24);
      \u0275\u0275element(44, "i", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "p", 16)(46, "span", 17);
      \u0275\u0275text(47, "+11.4%");
      \u0275\u0275element(48, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 19)(50, "div")(51, "p", 20);
      \u0275\u0275text(52, "GST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "h6", 21);
      \u0275\u0275text(54, "$300,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div")(56, "div", 26);
      \u0275\u0275element(57, "apx-chart", 23);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(58, "div", 10)(59, "div", 11)(60, "div", 12)(61, "div", 13)(62, "div")(63, "span", 27);
      \u0275\u0275element(64, "i", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "p", 16)(66, "span", 17);
      \u0275\u0275text(67, "+8.12%");
      \u0275\u0275element(68, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 19)(70, "div")(71, "p", 20);
      \u0275\u0275text(72, "VAT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "h6", 21);
      \u0275\u0275text(74, "$100,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div")(76, "div", 29);
      \u0275\u0275element(77, "apx-chart", 23);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(78, "div", 10)(79, "div", 11)(80, "div", 12)(81, "div", 13)(82, "div")(83, "span", 30);
      \u0275\u0275element(84, "i", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "p", 16)(86, "span", 17);
      \u0275\u0275text(87, "+7.45%");
      \u0275\u0275element(88, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 19)(90, "div")(91, "p", 20);
      \u0275\u0275text(92, "Other Taxes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "h6", 21);
      \u0275\u0275text(94, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div")(96, "div", 32);
      \u0275\u0275element(97, "apx-chart", 23);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(98, "div", 33)(99, "div", 34)(100, "div", 35)(101, "div", 36)(102, "div", 37)(103, "a", 38);
      \u0275\u0275element(104, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 40)(106, "label")(107, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function TaxReportComponent_Template_input_ngModelChange_107_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TaxReportComponent_Template_input_ngModelChange_107_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(108, "app-date-range-picker-2");
      \u0275\u0275elementStart(109, "a", 42);
      \u0275\u0275element(110, "i", 43);
      \u0275\u0275text(111, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 44)(113, "div", 45)(114, "a", 46);
      \u0275\u0275element(115, "i", 47);
      \u0275\u0275text(116, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "ul", 48)(118, "li")(119, "label", 49);
      \u0275\u0275element(120, "i", 50)(121, "input", 51);
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "li")(125, "label", 49);
      \u0275\u0275element(126, "i", 50)(127, "input", 51);
      \u0275\u0275elementStart(128, "span");
      \u0275\u0275text(129, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "li")(131, "label", 49);
      \u0275\u0275element(132, "i", 50)(133, "input", 51);
      \u0275\u0275elementStart(134, "span");
      \u0275\u0275text(135, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "li")(137, "label", 49);
      \u0275\u0275element(138, "i", 50)(139, "input", 51);
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "li")(143, "label", 49);
      \u0275\u0275element(144, "i", 50)(145, "input", 52);
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "li")(149, "label", 49);
      \u0275\u0275element(150, "i", 50)(151, "input", 52);
      \u0275\u0275elementStart(152, "span");
      \u0275\u0275text(153, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(154, "div", 53)(155, "h6", 54);
      \u0275\u0275text(156, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "span", 55)(158, "span", 56);
      \u0275\u0275text(159, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(160, "Vendors Selected");
      \u0275\u0275elementStart(161, "span", 57);
      \u0275\u0275listener("click", function TaxReportComponent_Template_span_click_161_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(162, "i", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "span", 55)(164, "span", 56);
      \u0275\u0275text(165, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, "Status Selected");
      \u0275\u0275elementStart(167, "span", 57);
      \u0275\u0275listener("click", function TaxReportComponent_Template_span_click_167_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(168, "i", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "a", 59);
      \u0275\u0275listener("click", function TaxReportComponent_Template_a_click_169_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(170, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 60)(172, "table", 61);
      \u0275\u0275listener("matSortChange", function TaxReportComponent_Template_table_matSortChange_172_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(173, "thead", 62)(174, "tr")(175, "th", 63)(176, "div", 64);
      \u0275\u0275listener("click", function TaxReportComponent_Template_div_click_176_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(177, "input", 65);
      \u0275\u0275twoWayListener("ngModelChange", function TaxReportComponent_Template_input_ngModelChange_177_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "th", 63);
      \u0275\u0275text(179, "Reference ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "th", 66);
      \u0275\u0275text(181, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "th", 67);
      \u0275\u0275text(183, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "th", 63);
      \u0275\u0275text(185, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "th", 68);
      \u0275\u0275text(187, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "th", 63);
      \u0275\u0275text(189, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "th", 69);
      \u0275\u0275text(191, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "th", 70);
      \u0275\u0275text(193, "Tax Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "tbody");
      \u0275\u0275repeaterCreate(195, TaxReportComponent_For_196_Template, 27, 13, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(197, TaxReportComponent_Conditional_197_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(198, TaxReportComponent_app_custom_pagination_198_Template, 1, 0, "app-custom-pagination", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 72)(200, "div", 73)(201, "div", 74)(202, "h6", 75);
      \u0275\u0275text(203, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "button", 76);
      \u0275\u0275element(205, "i", 77);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(206, "div", 78)(207, "form", 79)(208, "div", 33)(209, "label", 80);
      \u0275\u0275text(210, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "div", 45)(212, "a", 81);
      \u0275\u0275text(213, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "div", 82)(215, "div", 33)(216, "div", 83)(217, "span", 84);
      \u0275\u0275element(218, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275element(219, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "ul", 33)(221, "li", 13)(222, "label", 87);
      \u0275\u0275element(223, "input", 88);
      \u0275\u0275text(224, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "a", 89);
      \u0275\u0275text(226, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "li")(228, "label", 90);
      \u0275\u0275element(229, "input", 52);
      \u0275\u0275elementStart(230, "span", 91);
      \u0275\u0275element(231, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(232, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "li")(234, "label", 90);
      \u0275\u0275element(235, "input", 52);
      \u0275\u0275elementStart(236, "span", 91);
      \u0275\u0275element(237, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275text(238, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li")(240, "label", 90);
      \u0275\u0275element(241, "input", 52);
      \u0275\u0275elementStart(242, "span", 91);
      \u0275\u0275element(243, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275text(244, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "li")(246, "label", 90);
      \u0275\u0275element(247, "input", 52);
      \u0275\u0275elementStart(248, "span", 91);
      \u0275\u0275element(249, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275text(250, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(251, "div", 96)(252, "div", 97)(253, "a", 98);
      \u0275\u0275text(254, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "div", 97)(256, "a", 99);
      \u0275\u0275text(257, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(258, "div", 33)(259, "label", 100);
      \u0275\u0275text(260, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "div", 101);
      \u0275\u0275element(262, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "div", 33)(264, "label", 80);
      \u0275\u0275text(265, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "div", 45)(267, "a", 81);
      \u0275\u0275text(268, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "div", 82)(270, "div", 33)(271, "div", 83)(272, "span", 84);
      \u0275\u0275element(273, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275element(274, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "ul", 33)(276, "li", 13)(277, "label", 87);
      \u0275\u0275element(278, "input", 88);
      \u0275\u0275text(279, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "a", 89);
      \u0275\u0275text(281, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "li")(283, "label", 90);
      \u0275\u0275element(284, "input", 52);
      \u0275\u0275text(285, " Smartphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "li")(287, "label", 90);
      \u0275\u0275element(288, "input", 52);
      \u0275\u0275text(289, " Headphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "li")(291, "label", 90);
      \u0275\u0275element(292, "input", 52);
      \u0275\u0275text(293, " Men's Apparel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "li")(295, "label", 90);
      \u0275\u0275element(296, "input", 52);
      \u0275\u0275text(297, " Footwear ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(298, "div", 33)(299, "label", 80);
      \u0275\u0275text(300, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "div", 45)(302, "a", 81);
      \u0275\u0275text(303, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "div", 82)(305, "div", 102)(306, "div", 103)(307, "span", 104);
      \u0275\u0275text(308, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "span", 104);
      \u0275\u0275text(310, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "mat-slider", 105);
      \u0275\u0275element(312, "input", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "p");
      \u0275\u0275text(314, "Range : ");
      \u0275\u0275elementStart(315, "span", 107);
      \u0275\u0275text(316, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(317, "div", 33)(318, "label", 80);
      \u0275\u0275text(319, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 45)(321, "a", 81);
      \u0275\u0275text(322, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div", 82)(324, "div", 33)(325, "div", 83)(326, "span", 84);
      \u0275\u0275element(327, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275element(328, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "ul", 33)(330, "li", 13)(331, "label", 87);
      \u0275\u0275element(332, "input", 88);
      \u0275\u0275text(333, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "a", 89);
      \u0275\u0275text(335, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(336, "li")(337, "label", 90);
      \u0275\u0275element(338, "input", 52);
      \u0275\u0275text(339, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "li")(341, "label", 90);
      \u0275\u0275element(342, "input", 52);
      \u0275\u0275text(343, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "li")(345, "label", 90);
      \u0275\u0275element(346, "input", 52);
      \u0275\u0275text(347, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "li")(349, "label", 90);
      \u0275\u0275element(350, "input", 52);
      \u0275\u0275text(351, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "li")(353, "label", 90);
      \u0275\u0275element(354, "input", 52);
      \u0275\u0275text(355, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(356, "div", 108)(357, "div", 96)(358, "div", 97)(359, "a", 109);
      \u0275\u0275text(360, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 97)(362, "button", 110);
      \u0275\u0275listener("click", function TaxReportComponent_Template_button_click_362_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(363, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(37);
      \u0275\u0275property("series", ctx.timeChart.series)("chart", ctx.timeChart.chart)("colors", ctx.timeChart.colors)("fill", ctx.timeChart.fill)("xaxis", ctx.timeChart.xaxis)("stroke", ctx.timeChart.stroke)("tooltip", ctx.timeChart.tooltip)("dataLabels", ctx.timeChart.dataLabels);
      \u0275\u0275advance(20);
      \u0275\u0275property("series", ctx.timeChart2.series)("chart", ctx.timeChart2.chart)("colors", ctx.timeChart2.colors)("fill", ctx.timeChart2.fill)("xaxis", ctx.timeChart2.xaxis)("stroke", ctx.timeChart2.stroke)("tooltip", ctx.timeChart2.tooltip)("dataLabels", ctx.timeChart2.dataLabels);
      \u0275\u0275advance(20);
      \u0275\u0275property("series", ctx.timeChart3.series)("chart", ctx.timeChart3.chart)("colors", ctx.timeChart3.colors)("fill", ctx.timeChart3.fill)("xaxis", ctx.timeChart3.xaxis)("stroke", ctx.timeChart3.stroke)("tooltip", ctx.timeChart3.tooltip)("dataLabels", ctx.timeChart3.dataLabels);
      \u0275\u0275advance(20);
      \u0275\u0275property("series", ctx.timeChart4.series)("chart", ctx.timeChart4.chart)("colors", ctx.timeChart4.colors)("fill", ctx.timeChart4.fill)("xaxis", ctx.timeChart4.xaxis)("stroke", ctx.timeChart4.stroke)("tooltip", ctx.timeChart4.tooltip)("dataLabels", ctx.timeChart4.dataLabels);
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
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 197 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(113);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    MatSortHeader,
    NgApexchartsModule,
    ChartComponent,
    MatSliderModule,
    MatSlider,
    MatSliderThumb,
    DateRangePickerComponent,
    RouterLink,
    DateRangePicker2Component
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaxReportComponent, [{
    type: Component,
    args: [{ selector: "app-tax-report", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      NgApexchartsModule,
      MatSliderModule,
      DateRangePickerComponent,
      RouterLink,
      DateRangePicker2Component
    ], template: `            <!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6 class="mb-0">Tax Report</h6>
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
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <span class="badge badge-soft-primary border border-primary rounded-2 p-2 d-inline-flex align-items-center justify-content-center">
											<i class="isax isax-dollar-circle fs-16"></i>
										</span>
                                    </div>
                                    <p class="fs-13 mb-0">
                                        <span class="badge badge-soft-success">+5.62%<i class="isax isax-arrow-up5 ms-1"></i></span>
                                    </p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p class="mb-1">Total Tax Collected</p>
                                        <h6 class="fs-16 fw-semibold mb-0">$450,000</h6>
                                    </div>
                                    <div>
                                        <div class="time-chart" id="time-chart">
                                            <apx-chart
                                                [series]="timeChart.series"
                                                [chart]="timeChart.chart"
                                                [colors]="timeChart.colors"
                                                [fill]="timeChart.fill"
                                                [xaxis]="timeChart.xaxis"
                                                [stroke]="timeChart.stroke"
                                                [tooltip]="timeChart.tooltip"
                                                [dataLabels]="timeChart.dataLabels"
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
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <span class="badge badge-soft-success border border-success rounded-2 p-2 d-inline-flex align-items-center justify-content-center">
											<i class="isax isax-money-3 fs-16"></i>
										</span>
                                    </div>
                                    <p class="fs-13 mb-0">
                                        <span class="badge badge-soft-success">+11.4%<i class="isax isax-arrow-up5 ms-1"></i></span>
                                    </p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p class="mb-1">GST</p>
                                        <h6 class="fs-16 fw-semibold mb-0">$300,000</h6>
                                    </div>
                                    <div>
                                        <div class="time-chart" id="time-chart02">
                                            <apx-chart
                                                [series]="timeChart2.series"
                                                [chart]="timeChart2.chart"
                                                [colors]="timeChart2.colors"
                                                [fill]="timeChart2.fill"
                                                [xaxis]="timeChart2.xaxis"
                                                [stroke]="timeChart2.stroke"
                                                [tooltip]="timeChart2.tooltip"
                                                [dataLabels]="timeChart2.dataLabels"
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
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <span class="badge badge-soft-warning border border-warning rounded-2 p-2 d-inline-flex align-items-center justify-content-center">
											<i class="isax isax-money-4 fs-16"></i>
										</span>
                                    </div>
                                    <p class="fs-13 mb-0">
                                        <span class="badge badge-soft-success">+8.12%<i class="isax isax-arrow-up5 ms-1"></i></span>
                                    </p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p class="mb-1">VAT</p>
                                        <h6 class="fs-16 fw-semibold mb-0">$100,000</h6>
                                    </div>
                                    <div>
                                        <div class="time-chart" id="time-chart03">
                                            <apx-chart
                                                [series]="timeChart3.series"
                                                [chart]="timeChart3.chart"
                                                [colors]="timeChart3.colors"
                                                [fill]="timeChart3.fill"
                                                [xaxis]="timeChart3.xaxis"
                                                [stroke]="timeChart3.stroke"
                                                [tooltip]="timeChart3.tooltip"
                                                [dataLabels]="timeChart3.dataLabels"
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
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <span class="badge badge-soft-danger border border-danger rounded-2 p-2 d-inline-flex align-items-center justify-content-center">
											<i class="isax isax-money fs-16"></i>
										</span>
                                    </div>
                                    <p class="fs-13 mb-0">
                                        <span class="badge badge-soft-success">+7.45%<i class="isax isax-arrow-up5 ms-1"></i></span>
                                    </p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p class="mb-1">Other Taxes</p>
                                        <h6 class="fs-16 fw-semibold mb-0">$50,000</h6>
                                    </div>
                                    <div>
                                        <div class="time-chart" id="time-chart04">
                                            <apx-chart
                                                [series]="timeChart4.series"
                                                [chart]="timeChart4.chart"
                                                [colors]="timeChart4.colors"
                                                [fill]="timeChart4.fill"
                                                [xaxis]="timeChart4.xaxis"
                                                [stroke]="timeChart4.stroke"
                                                [tooltip]="timeChart4.tooltip"
                                                [dataLabels]="timeChart4.dataLabels"
                                            ></apx-chart>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- end col -->
                </div>
                <!-- end row -->

                <!-- Table Search Strat-->
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
                <!-- Table Search End -->

                <!-- Table List Start-->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead class="thead-light">
                            <tr>
                                <th class="no-sort">
                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                    </div>
                                </th>
                                <th class="no-sort">Reference ID</th>
                                <th mat-sort-header="custoemr">Customer</th>
                                <th mat-sort-header="date">Date</th>
                                <th class="no-sort">Category</th>
                                <th mat-sort-header="amount">Amount</th>
                                <th class="no-sort">Payment Mode</th>
                                <th mat-sort-header="discount">Discount</th>
                                <th mat-sort-header="tax">Tax Amount</th>
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
                                    <a href="javascript:void(0);" class="link-default">{{data.sku}}</a>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                            <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                                        </a>
                                        <div>
                                            <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">{{data.customer}}</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td>{{data.date}}</td>
                                <td>{{data.category}}</td>
                                <td class="text-dark">{{data.totalPrice}}</td>
                                <td class="text-dark">{{data.mode}}</td>
                                <td class="text-dark">{{data.price}}</td>
                                <td class="text-dark">{{data.sellingPrice}}</td>
                            </tr>
                            } @if(tableData.length === 0){
                                <tr>
                                  <td colspan="12" class="text-center text-dark">No matching records found</td>
                                </tr>
                              }
                        </tbody>
                    </table>
                </div>
                <!-- Table List End -->
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
                        <label class="form-label">Customers</label>
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
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark
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
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
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
                        <label class="form-label">Category</label>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Smartphones
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Headphones
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Men's Apparel
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Footwear
                                        </label>
                                    </li>
                                </ul>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cash
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cheque
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Bank Transfer
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaxReportComponent, { className: "TaxReportComponent", filePath: "src/app/features/reports/finance-reports/tax-report/tax-report.component.ts", lineNumber: 43 });
})();
export {
  TaxReportComponent
};
//# sourceMappingURL=chunk-3T5FRBAB.js.map
