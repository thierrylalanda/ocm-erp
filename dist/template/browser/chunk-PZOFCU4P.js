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

// src/app/features/reports/accounting-report/expense-report/expense-report.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
var _c2 = (a0) => ({ "show": a0 });
var _c3 = (a0) => ({ "d-none": a0 });
function ExpenseReportComponent_For_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 95)(3, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseReportComponent_For_182_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 98);
    \u0275\u0275element(15, "i", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 100);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 100);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 101);
    \u0275\u0275text(22);
    \u0275\u0275element(23, "i", 102);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.ID);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.ReferenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r2.Amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.PaymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.Status === "Paid" ? "badge-soft-success" : data_r2.Status === "Pending" ? "badge-soft-warning" : "badge-soft-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.Status === "Paid" ? " isax-tick-circle" : data_r2.Status === "Pending" ? " isax-timer" : " isax-close-circle");
  }
}
function ExpenseReportComponent_Conditional_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 103);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function ExpenseReportComponent_app_custom_pagination_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var ExpenseReportComponent = class _ExpenseReportComponent {
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
            size: "60%",
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
            size: "60%",
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
            size: "60%",
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
            size: "60%",
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
    this.data.getExpensereport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.expenseReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getExpensereport().subscribe((apiRes) => {
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
  static \u0275fac = function ExpenseReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpenseReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseReportComponent, selectors: [["app-expense-report"]], viewQuery: function ExpenseReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 287, vars: 49, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-0"], ["id", "radial-chart10", 1, "chart-set"], [3, "series", "chart", "colors", "fill", "xaxis", "stroke", "dataLabels", "legend", "plotOptions"], [1, "bg-light", "py-2", "px-3", "rounded"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], ["id", "radial-chart7", 1, "chart-set"], ["id", "radial-chart8", 1, "chart-set"], ["id", "radial-chart9", 1, "chart-set"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], ["for", "dateRangePicker", 1, "form-label"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "badge", "badge-soft-light", "d-inline-flex", "align-items-center", "text-dark"], [1, "isax", "isax-document-text5"], [1, "text-dark"], ["href", "javascript:void(0);", 1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function ExpenseReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Expense Report");
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
      \u0275\u0275text(24, "Total Expense");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 15);
      \u0275\u0275text(26, "$750,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "div", 16);
      \u0275\u0275element(29, "apx-chart", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 18)(31, "p", 19)(32, "span", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " from last month ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(36, "div", 10)(37, "div", 11)(38, "div", 12)(39, "div", 13)(40, "div")(41, "p", 14);
      \u0275\u0275text(42, "Approved Expense");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h6", 15);
      \u0275\u0275text(44, "$550,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div")(46, "div", 22);
      \u0275\u0275element(47, "apx-chart", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 18)(49, "p", 19)(50, "span", 20);
      \u0275\u0275element(51, "i", 21);
      \u0275\u0275text(52, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " from last month ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "div", 10)(55, "div", 11)(56, "div", 12)(57, "div", 13)(58, "div")(59, "p", 14);
      \u0275\u0275text(60, "Pending Expense");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "h6", 15);
      \u0275\u0275text(62, "$150,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div")(64, "div", 23);
      \u0275\u0275element(65, "apx-chart", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 18)(67, "p", 19)(68, "span", 20);
      \u0275\u0275element(69, "i", 21);
      \u0275\u0275text(70, "8.12%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(71, " from last month ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(72, "div", 10)(73, "div", 11)(74, "div", 12)(75, "div", 13)(76, "div")(77, "p", 14);
      \u0275\u0275text(78, "Rejected Expense");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "h6", 15);
      \u0275\u0275text(80, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div")(82, "div", 24);
      \u0275\u0275element(83, "apx-chart", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 18)(85, "p", 19)(86, "span", 20);
      \u0275\u0275element(87, "i", 21);
      \u0275\u0275text(88, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, " from last month ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(90, "div", 25)(91, "div", 26)(92, "div", 27)(93, "div", 28)(94, "div", 29)(95, "a", 30);
      \u0275\u0275element(96, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 32)(98, "label")(99, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function ExpenseReportComponent_Template_input_ngModelChange_99_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ExpenseReportComponent_Template_input_ngModelChange_99_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(100, "app-date-range-picker-2");
      \u0275\u0275elementStart(101, "a", 34);
      \u0275\u0275element(102, "i", 35);
      \u0275\u0275text(103, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 36)(105, "div", 37)(106, "a", 38);
      \u0275\u0275element(107, "i", 39);
      \u0275\u0275text(108, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "ul", 40)(110, "li")(111, "label", 41);
      \u0275\u0275element(112, "i", 42)(113, "input", 43);
      \u0275\u0275elementStart(114, "span");
      \u0275\u0275text(115, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "li")(117, "label", 41);
      \u0275\u0275element(118, "i", 42)(119, "input", 43);
      \u0275\u0275elementStart(120, "span");
      \u0275\u0275text(121, "Reference Number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "li")(123, "label", 41);
      \u0275\u0275element(124, "i", 42)(125, "input", 43);
      \u0275\u0275elementStart(126, "span");
      \u0275\u0275text(127, "Description");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "li")(129, "label", 41);
      \u0275\u0275element(130, "i", 42)(131, "input", 43);
      \u0275\u0275elementStart(132, "span");
      \u0275\u0275text(133, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "li")(135, "label", 41);
      \u0275\u0275element(136, "i", 42)(137, "input", 44);
      \u0275\u0275elementStart(138, "span");
      \u0275\u0275text(139, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "li")(141, "label", 41);
      \u0275\u0275element(142, "i", 42)(143, "input", 43);
      \u0275\u0275elementStart(144, "span");
      \u0275\u0275text(145, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(146, "div", 45)(147, "h6", 46);
      \u0275\u0275text(148, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "span", 47)(150, "span", 48);
      \u0275\u0275text(151, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(152, "Status Selected");
      \u0275\u0275elementStart(153, "span", 49);
      \u0275\u0275listener("click", function ExpenseReportComponent_Template_span_click_153_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(154, "i", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "a", 51);
      \u0275\u0275listener("click", function ExpenseReportComponent_Template_a_click_155_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(156, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "div", 52)(158, "table", 53);
      \u0275\u0275listener("matSortChange", function ExpenseReportComponent_Template_table_matSortChange_158_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(159, "thead", 54)(160, "tr")(161, "th", 55)(162, "div", 56);
      \u0275\u0275listener("click", function ExpenseReportComponent_Template_div_click_162_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(163, "input", 57);
      \u0275\u0275twoWayListener("ngModelChange", function ExpenseReportComponent_Template_input_ngModelChange_163_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(164, "th", 55);
      \u0275\u0275text(165, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "th", 58);
      \u0275\u0275text(167, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "th", 55);
      \u0275\u0275text(169, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "th", 55);
      \u0275\u0275text(171, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "th", 55);
      \u0275\u0275text(173, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "th", 59);
      \u0275\u0275text(175, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "th", 55);
      \u0275\u0275text(177, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "th", 55);
      \u0275\u0275text(179, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "tbody");
      \u0275\u0275repeaterCreate(181, ExpenseReportComponent_For_182_Template, 24, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(183, ExpenseReportComponent_Conditional_183_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(184, ExpenseReportComponent_app_custom_pagination_184_Template, 1, 0, "app-custom-pagination", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 61)(186, "div", 62)(187, "div", 63)(188, "h6", 64);
      \u0275\u0275text(189, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "button", 65);
      \u0275\u0275element(191, "i", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(192, "div", 67)(193, "form", 68)(194, "div", 25)(195, "label", 69);
      \u0275\u0275text(196, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275element(197, "app-date-range-picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 25)(199, "label", 70);
      \u0275\u0275text(200, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 37)(202, "a", 71);
      \u0275\u0275text(203, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 72)(205, "div", 73)(206, "div", 74)(207, "span", 75);
      \u0275\u0275text(208, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "span", 75);
      \u0275\u0275text(210, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "mat-slider", 76);
      \u0275\u0275element(212, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "p");
      \u0275\u0275text(214, "Range : ");
      \u0275\u0275elementStart(215, "span", 78);
      \u0275\u0275text(216, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(217, "div", 25)(218, "label", 70);
      \u0275\u0275text(219, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 37)(221, "a", 71);
      \u0275\u0275text(222, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 72)(224, "div", 25)(225, "div", 79)(226, "span", 80);
      \u0275\u0275element(227, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275element(228, "input", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "ul", 25)(230, "li", 13)(231, "label", 83);
      \u0275\u0275element(232, "input", 84);
      \u0275\u0275text(233, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "a", 85);
      \u0275\u0275text(235, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 86);
      \u0275\u0275element(238, "input", 44);
      \u0275\u0275text(239, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "li")(241, "label", 86);
      \u0275\u0275element(242, "input", 44);
      \u0275\u0275text(243, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "li")(245, "label", 86);
      \u0275\u0275element(246, "input", 44);
      \u0275\u0275text(247, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "li")(249, "label", 86);
      \u0275\u0275element(250, "input", 44);
      \u0275\u0275text(251, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "li")(253, "label", 86);
      \u0275\u0275element(254, "input", 44);
      \u0275\u0275text(255, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(256, "div", 25)(257, "label", 70);
      \u0275\u0275text(258, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 37)(260, "a", 71);
      \u0275\u0275text(261, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "div", 72)(263, "ul", 25)(264, "li")(265, "label", 86);
      \u0275\u0275element(266, "input", 44)(267, "i", 87);
      \u0275\u0275text(268, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "li")(270, "label", 86);
      \u0275\u0275element(271, "input", 44)(272, "i", 88);
      \u0275\u0275text(273, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "li")(275, "label", 86);
      \u0275\u0275element(276, "input", 44)(277, "i", 89);
      \u0275\u0275text(278, "Cancelled ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(279, "div", 90)(280, "div", 91)(281, "div", 92)(282, "a", 93);
      \u0275\u0275text(283, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "div", 92)(285, "button", 94);
      \u0275\u0275text(286, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275property("series", ctx.radialChart.series)("chart", ctx.radialChart.chart)("colors", ctx.radialChart.colors)("fill", ctx.radialChart.fill)("xaxis", ctx.radialChart.xaxis)("stroke", ctx.radialChart.stroke)("dataLabels", ctx.radialChart.dataLabels)("legend", ctx.radialChart.legend)("plotOptions", ctx.radialChart.plotOptions);
      \u0275\u0275advance(18);
      \u0275\u0275property("series", ctx.radialChart2.series)("chart", ctx.radialChart2.chart)("colors", ctx.radialChart2.colors)("fill", ctx.radialChart2.fill)("xaxis", ctx.radialChart2.xaxis)("stroke", ctx.radialChart2.stroke)("dataLabels", ctx.radialChart2.dataLabels)("legend", ctx.radialChart2.legend)("plotOptions", ctx.radialChart2.plotOptions);
      \u0275\u0275advance(18);
      \u0275\u0275property("series", ctx.radialChart3.series)("chart", ctx.radialChart3.chart)("colors", ctx.radialChart3.colors)("fill", ctx.radialChart3.fill)("xaxis", ctx.radialChart3.xaxis)("stroke", ctx.radialChart3.stroke)("dataLabels", ctx.radialChart3.dataLabels)("legend", ctx.radialChart3.legend)("plotOptions", ctx.radialChart3.plotOptions);
      \u0275\u0275advance(18);
      \u0275\u0275property("series", ctx.radialChart4.series)("chart", ctx.radialChart4.chart)("colors", ctx.radialChart4.colors)("fill", ctx.radialChart4.fill)("xaxis", ctx.radialChart4.xaxis)("stroke", ctx.radialChart4.stroke)("dataLabels", ctx.radialChart4.dataLabels)("legend", ctx.radialChart4.legend)("plotOptions", ctx.radialChart4.plotOptions);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(44, _c1));
      \u0275\u0275advance(47);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(45, _c2, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(47, _c3, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 183 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(27);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, NgApexchartsModule, ChartComponent, DateRangePicker2Component, DateRangePickerComponent, MatSliderModule, MatSlider, MatSliderThumb], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseReportComponent, [{
    type: Component,
    args: [{ selector: "app-expense-report", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      NgApexchartsModule,
      DateRangePicker2Component,
      DateRangePickerComponent,
      MatSliderModule
    ], template: ` <!-- Start Content -->
 <div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Expense Report</h6>
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
                            <p class="mb-1">Total Expense</p>
                            <h6 class="fs-16 fw-semibold mb-0">$750,000</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart10">
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
                    <div class="bg-light py-2 px-3 rounded">
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month
                        </p>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div><!-- end col -->
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            <p class="mb-1">Approved Expense</p>
                            <h6 class="fs-16 fw-semibold mb-0">$550,000</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart7">
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
                    <div class="bg-light py-2 px-3 rounded">
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month
                        </p>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div><!-- end col -->
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            <p class="mb-1">Pending Expense</p>
                            <h6 class="fs-16 fw-semibold mb-0">$150,000</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart8">
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
                    <div class="bg-light py-2 px-3 rounded">
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.12%</span> from last month
                        </p>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div><!-- end col -->
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            <p class="mb-1">Rejected Expense</p>
                            <h6 class="fs-16 fw-semibold mb-0">$50,000</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart9">
                                <apx-chart
                                [series]="radialChart4.series"
                                [chart]="radialChart4.chart"
                                [colors]="radialChart4.colors"
                                [fill]="radialChart4.fill"
                                [xaxis]="radialChart4.xaxis"
                                [stroke]="radialChart4.stroke"
                                [dataLabels]="radialChart4.dataLabels"
                                [legend]="radialChart4.legend"
                                [plotOptions]="radialChart4.plotOptions"
                            ></apx-chart>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light py-2 px-3 rounded">
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>7.45%</span> from last month
                        </p>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div><!-- end col -->
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
                  <app-date-range-picker-2/>
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
                                <span>Date</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Reference Number</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Description</span>
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
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- End Table Search -->


    <!-- start Table List -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th class="no-sort">ID</th>
                    <th mat-sort-header="date">Date</th>
                    <th class="no-sort">Reference Number</th>
                    <th class="no-sort">Description</th>
                    <th class="no-sort">Attachment</th>
                    <th mat-sort-header="amount">Amount</th>
                    <th class="no-sort">Payment Mode</th>
                    <th class="no-sort">Status</th>
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
                        <a href="javascript:void(0);" class="link-default">{{data.ID}}</a>
                    </td>
                    <td>{{data.Date}}</td>
                    <td>{{data.ReferenceNumber}}</td>
                    <td>{{data.Description}}</td>
                    <td>
                        <span class="badge badge-soft-light d-inline-flex align-items-center text-dark"><i class="isax isax-document-text5"></i></span>
                    </td>
                    <td class="text-dark">{{data.Amount}}</td>
                    <td class="text-dark">{{data.PaymentMode}}</td>
                    <td>
                        <span href="javascript:void(0);" class="badge badge-sm d-inline-flex align-items-center"
                      [ngClass]="data.Status==='Paid'?'badge-soft-success':data.Status==='Pending'?'badge-soft-warning':'badge-soft-danger'">
                        {{data.Status}} 
                        <i class="isax ms-1"
                      [ngClass]="data.Status==='Paid'?' isax-tick-circle':data.Status==='Pending'?' isax-timer':' isax-close-circle'"></i>
                    </span>
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
                <label for="dateRangePicker" class="form-label">Date Range</label>
                <app-date-range-picker/>
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
                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseReportComponent, { className: "ExpenseReportComponent", filePath: "src/app/features/reports/accounting-report/expense-report/expense-report.component.ts", lineNumber: 42 });
})();
export {
  ExpenseReportComponent
};
//# sourceMappingURL=chunk-PZOFCU4P.js.map
