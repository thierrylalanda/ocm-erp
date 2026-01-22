import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BZYHLAL5.js";
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/accounting-report/trial-balance/trial-balance.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
function TrialBalanceComponent_For_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 103);
    \u0275\u0275element(3, "input", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, "PNB - 5475878970090");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7, "$22,500");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9, "$7,500");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "td");
    \u0275\u0275elementEnd();
  }
}
function TrialBalanceComponent_Conditional_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 105);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function TrialBalanceComponent_app_custom_pagination_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var TrialBalanceComponent = class _TrialBalanceComponent {
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
    this.data.getTrialbalance().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.trialBalance) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getTrialbalance().subscribe((apiRes) => {
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
  static \u0275fac = function TrialBalanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrialBalanceComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrialBalanceComponent, selectors: [["app-trial-balance"]], viewQuery: function TrialBalanceComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 261, vars: 43, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative", "shadow-lg"], [1, "card-body"], [1, "mb-1"], [1, "p-2", "badge", "badge-soft-primary", "d-inline-flex", "align-items-center", "justify-content-center", "rounded", "border", "border-primary"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "me-2", "mb-1"], [1, "badge", "badge-soft-success"], [1, "isax", "isax-arrow-up-15"], ["id", "radial-chart3", 1, "chart-set"], [3, "series", "chart", "colors", "fill", "xaxis", "stroke", "dataLabels", "legend", "plotOptions"], [1, "p-2", "badge", "badge-soft-success", "d-inline-flex", "align-items-center", "justify-content-center", "rounded", "border", "border-success"], [1, "isax", "isax-money-2", "fs-16"], ["id", "radial-chart4", 1, "chart-set"], [1, "p-2", "badge", "badge-soft-warning", "d-inline-flex", "align-items-center", "justify-content-center", "rounded", "border", "border-warning"], [1, "isax", "isax-wallet-3", "fs-16"], ["id", "radial-chart5", 1, "chart-set"], [1, "p-2", "badge", "badge-soft-danger", "d-inline-flex", "align-items-center", "justify-content-center", "rounded", "border", "border-danger"], ["id", "radial-chart6", 1, "chart-set"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "account"], ["mat-sort-header", "credit"], ["mat-sort-header", "debit"], [1, "bg-light", "border-top"], [1, "fw-semibold"], [1, "fw-semibold", "text-end"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function TrialBalanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Trial Balance Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "span", 15);
      \u0275\u0275element(24, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "div", 2)(28, "p", 19);
      \u0275\u0275text(29, "Total Debits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div")(31, "h6", 20);
      \u0275\u0275text(32, "$750,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 21);
      \u0275\u0275text(34, "+5.62%");
      \u0275\u0275element(35, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 23);
      \u0275\u0275element(37, "apx-chart", 24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 11)(39, "div", 12)(40, "div", 13)(41, "div", 14)(42, "span", 25);
      \u0275\u0275element(43, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 17)(45, "div", 18)(46, "div", 2)(47, "p", 19);
      \u0275\u0275text(48, "Total Credits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div")(50, "h6", 20);
      \u0275\u0275text(51, "$550,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 21);
      \u0275\u0275text(53, "+11.4%");
      \u0275\u0275element(54, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 27);
      \u0275\u0275element(56, "apx-chart", 24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "div", 11)(58, "div", 12)(59, "div", 13)(60, "div", 14)(61, "span", 28);
      \u0275\u0275element(62, "i", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 17)(64, "div", 18)(65, "div", 2)(66, "p", 19);
      \u0275\u0275text(67, "Cash & Bank Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div")(69, "h6", 20);
      \u0275\u0275text(70, "$150,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span", 21);
      \u0275\u0275text(72, "+8.12%");
      \u0275\u0275element(73, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "div", 30);
      \u0275\u0275element(75, "apx-chart", 24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(76, "div", 11)(77, "div", 12)(78, "div", 13)(79, "div", 14)(80, "span", 31);
      \u0275\u0275element(81, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 17)(83, "div", 18)(84, "div", 2)(85, "p", 19);
      \u0275\u0275text(86, "Cash & Bank Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div")(88, "h6", 20);
      \u0275\u0275text(89, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span", 21);
      \u0275\u0275text(91, "7.45%");
      \u0275\u0275element(92, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(93, "div", 32);
      \u0275\u0275element(94, "apx-chart", 24);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(95, "div", 33)(96, "div", 34)(97, "div", 35)(98, "div", 36)(99, "div", 37)(100, "a", 38);
      \u0275\u0275element(101, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 40)(103, "label")(104, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function TrialBalanceComponent_Template_input_ngModelChange_104_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TrialBalanceComponent_Template_input_ngModelChange_104_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(105, "app-date-range-picker-2");
      \u0275\u0275elementStart(106, "a", 42);
      \u0275\u0275element(107, "i", 43);
      \u0275\u0275text(108, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 44)(110, "div", 4)(111, "a", 45);
      \u0275\u0275element(112, "i", 46);
      \u0275\u0275text(113, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "ul", 47)(115, "li")(116, "label", 48);
      \u0275\u0275element(117, "i", 49)(118, "input", 50);
      \u0275\u0275elementStart(119, "span");
      \u0275\u0275text(120, "Account Holder Name");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "li")(122, "label", 48);
      \u0275\u0275element(123, "i", 49)(124, "input", 50);
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, "Bank & Account No");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "li")(128, "label", 48);
      \u0275\u0275element(129, "i", 49)(130, "input", 50);
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Credit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "li")(134, "label", 48);
      \u0275\u0275element(135, "i", 49)(136, "input", 51);
      \u0275\u0275elementStart(137, "span");
      \u0275\u0275text(138, "Debit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "li")(140, "label", 48);
      \u0275\u0275element(141, "i", 49)(142, "input", 50);
      \u0275\u0275elementStart(143, "span");
      \u0275\u0275text(144, "Balance");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(145, "div", 52)(146, "h6", 53);
      \u0275\u0275text(147, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "span", 54)(149, "span", 55);
      \u0275\u0275text(150, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(151, "Account Holders Selected");
      \u0275\u0275elementStart(152, "span", 56);
      \u0275\u0275element(153, "i", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "a", 58);
      \u0275\u0275text(155, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(156, "div", 59)(157, "table", 60);
      \u0275\u0275listener("matSortChange", function TrialBalanceComponent_Template_table_matSortChange_157_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(158, "thead", 61)(159, "tr")(160, "th", 62)(161, "div", 63);
      \u0275\u0275listener("click", function TrialBalanceComponent_Template_div_click_161_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(162, "input", 64);
      \u0275\u0275twoWayListener("ngModelChange", function TrialBalanceComponent_Template_input_ngModelChange_162_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "th", 65);
      \u0275\u0275text(164, "Account Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "th", 66);
      \u0275\u0275text(166, "Credit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "th", 67);
      \u0275\u0275text(168, "Debit");
      \u0275\u0275elementEnd();
      \u0275\u0275element(169, "th", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "tbody");
      \u0275\u0275repeaterCreate(171, TrialBalanceComponent_For_172_Template, 11, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(173, TrialBalanceComponent_Conditional_173_Template, 3, 0, "tr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "tfoot")(175, "tr", 68);
      \u0275\u0275element(176, "td");
      \u0275\u0275elementStart(177, "td", 69);
      \u0275\u0275text(178, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "td", 69);
      \u0275\u0275text(180, "$425,500.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "td", 69);
      \u0275\u0275text(182, "$154,000.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "td", 70);
      \u0275\u0275text(184, "$154,000.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(185, TrialBalanceComponent_app_custom_pagination_185_Template, 1, 0, "app-custom-pagination", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 72)(187, "div", 73)(188, "div", 74)(189, "h6", 75);
      \u0275\u0275text(190, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "button", 76);
      \u0275\u0275element(192, "i", 77);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "div", 78)(194, "form", 79)(195, "div", 33)(196, "label", 80);
      \u0275\u0275text(197, "Account Holder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 4)(199, "a", 81);
      \u0275\u0275text(200, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 82)(202, "div", 33)(203, "div", 83)(204, "span", 84);
      \u0275\u0275element(205, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275element(206, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "ul", 33)(208, "li", 87)(209, "label", 88);
      \u0275\u0275element(210, "input", 89);
      \u0275\u0275text(211, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "a", 90);
      \u0275\u0275text(213, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "li")(215, "label", 91);
      \u0275\u0275element(216, "input", 51);
      \u0275\u0275text(217, " ETB - 4324356677889 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "li")(219, "label", 91);
      \u0275\u0275element(220, "input", 51);
      \u0275\u0275text(221, " NPB - 2343547586900 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "label", 91);
      \u0275\u0275element(224, "input", 51);
      \u0275\u0275text(225, " SDB - 3354456565687 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "li")(227, "label", 91);
      \u0275\u0275element(228, "input", 51);
      \u0275\u0275text(229, " MFB - 1597534682597 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li")(231, "label", 91);
      \u0275\u0275element(232, "input", 51);
      \u0275\u0275text(233, " ETB - 4324356677889 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(234, "div", 33)(235, "label", 80);
      \u0275\u0275text(236, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "div", 4)(238, "a", 81);
      \u0275\u0275text(239, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "div", 82)(241, "div", 92)(242, "div", 93)(243, "span", 94);
      \u0275\u0275text(244, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "span", 94);
      \u0275\u0275text(246, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "mat-slider", 95);
      \u0275\u0275element(248, "input", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "p");
      \u0275\u0275text(250, "Range : ");
      \u0275\u0275elementStart(251, "span", 97);
      \u0275\u0275text(252, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(253, "div", 98)(254, "div", 99)(255, "div", 100)(256, "a", 101);
      \u0275\u0275text(257, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "div", 100)(259, "button", 102);
      \u0275\u0275text(260, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(37);
      \u0275\u0275property("series", ctx.radialChart.series)("chart", ctx.radialChart.chart)("colors", ctx.radialChart.colors)("fill", ctx.radialChart.fill)("xaxis", ctx.radialChart.xaxis)("stroke", ctx.radialChart.stroke)("dataLabels", ctx.radialChart.dataLabels)("legend", ctx.radialChart.legend)("plotOptions", ctx.radialChart.plotOptions);
      \u0275\u0275advance(19);
      \u0275\u0275property("series", ctx.radialChart2.series)("chart", ctx.radialChart2.chart)("colors", ctx.radialChart2.colors)("fill", ctx.radialChart2.fill)("xaxis", ctx.radialChart2.xaxis)("stroke", ctx.radialChart2.stroke)("dataLabels", ctx.radialChart2.dataLabels)("legend", ctx.radialChart2.legend)("plotOptions", ctx.radialChart2.plotOptions);
      \u0275\u0275advance(19);
      \u0275\u0275property("series", ctx.radialChart3.series)("chart", ctx.radialChart3.chart)("colors", ctx.radialChart3.colors)("fill", ctx.radialChart3.fill)("xaxis", ctx.radialChart3.xaxis)("stroke", ctx.radialChart3.stroke)("dataLabels", ctx.radialChart3.dataLabels)("legend", ctx.radialChart3.legend)("plotOptions", ctx.radialChart3.plotOptions);
      \u0275\u0275advance(19);
      \u0275\u0275property("series", ctx.radialChart4.series)("chart", ctx.radialChart4.chart)("colors", ctx.radialChart4.colors)("fill", ctx.radialChart4.fill)("xaxis", ctx.radialChart4.xaxis)("stroke", ctx.radialChart4.stroke)("dataLabels", ctx.radialChart4.dataLabels)("legend", ctx.radialChart4.legend)("plotOptions", ctx.radialChart4.plotOptions);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(42, _c1));
      \u0275\u0275advance(58);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 173 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(62);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, NgApexchartsModule, ChartComponent, DateRangePicker2Component, MatSliderModule, MatSlider, MatSliderThumb], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrialBalanceComponent, [{
    type: Component,
    args: [{ selector: "app-trial-balance", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      NgApexchartsModule,
      DateRangePicker2Component,
      MatSliderModule
    ], template: ' <!-- Start Content -->\n <div class="content-two">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6 class="mb-0">Trial Balance Report</h6>\n        </div>\n        <div class="my-xl-auto">\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <div class="border-bottom mb-3">\n\n        <!-- start row -->\n        <div class="row">\n            <div class="col-xl-3 col-lg-4 col-md-6">\n                <div class="card position-relative shadow-lg">\n                    <div class="card-body">\n                        <div class="mb-1">\n                            <span class="p-2 badge badge-soft-primary d-inline-flex align-items-center justify-content-center rounded border border-primary">\n                                <i class="isax isax-dollar-circle fs-16"></i>\n                            </span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <div class="mb-0">\n                                    <p class="mb-1 text-truncate">Total Debits</p>\n                                    <div>\n                                        <h6 class="fs-16 fw-semibold me-2 mb-1">$750,000</h6>\n                                        <span class="badge badge-soft-success">+5.62%<i class="isax isax-arrow-up-15"></i></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="chart-set" id="radial-chart3">\n                                <apx-chart\n                                    [series]="radialChart.series"\n                                    [chart]="radialChart.chart"\n                                    [colors]="radialChart.colors"\n                                    [fill]="radialChart.fill"\n                                    [xaxis]="radialChart.xaxis"\n                                    [stroke]="radialChart.stroke"\n                                    [dataLabels]="radialChart.dataLabels"\n                                    [legend]="radialChart.legend"\n                                    [plotOptions]="radialChart.plotOptions"\n                                ></apx-chart>\n                            </div>\n                        </div>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n            </div><!-- end col -->\n            <div class="col-xl-3 col-lg-4 col-md-6">\n                <div class="card position-relative shadow-lg">\n                    <div class="card-body">\n                        <div class="mb-1">\n                            <span class="p-2 badge badge-soft-success d-inline-flex align-items-center justify-content-center rounded border border-success">\n                                <i class="isax isax-money-2 fs-16"></i>\n                            </span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <div class="mb-0">\n                                    <p class="mb-1 text-truncate">Total Credits</p>\n                                    <div>\n                                        <h6 class="fs-16 fw-semibold me-2 mb-1">$550,000</h6>\n                                        <span class="badge badge-soft-success">+11.4%<i class="isax isax-arrow-up-15"></i></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="chart-set" id="radial-chart4">\n                                <apx-chart\n                                    [series]="radialChart2.series"\n                                    [chart]="radialChart2.chart"\n                                    [colors]="radialChart2.colors"\n                                    [fill]="radialChart2.fill"\n                                    [xaxis]="radialChart2.xaxis"\n                                    [stroke]="radialChart2.stroke"\n                                    [dataLabels]="radialChart2.dataLabels"\n                                    [legend]="radialChart2.legend"\n                                    [plotOptions]="radialChart2.plotOptions"\n                                ></apx-chart>\n                            </div>\n                        </div>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n            </div><!-- end col -->\n            <div class="col-xl-3 col-lg-4 col-md-6">\n                <div class="card position-relative shadow-lg">\n                    <div class="card-body">\n                        <div class="mb-1">\n                            <span class="p-2 badge badge-soft-warning d-inline-flex align-items-center justify-content-center rounded border border-warning">\n                                <i class="isax isax-wallet-3 fs-16"></i>\n                            </span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <div class="mb-0">\n                                    <p class="mb-1 text-truncate">Cash & Bank Balance</p>\n                                    <div>\n                                        <h6 class="fs-16 fw-semibold me-2 mb-1">$150,000</h6>\n                                        <span class="badge badge-soft-success">+8.12%<i class="isax isax-arrow-up-15"></i></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="chart-set" id="radial-chart5">\n                                <apx-chart\n                                    [series]="radialChart3.series"\n                                    [chart]="radialChart3.chart"\n                                    [colors]="radialChart3.colors"\n                                    [fill]="radialChart3.fill"\n                                    [xaxis]="radialChart3.xaxis"\n                                    [stroke]="radialChart3.stroke"\n                                    [dataLabels]="radialChart3.dataLabels"\n                                    [legend]="radialChart3.legend"\n                                    [plotOptions]="radialChart3.plotOptions"\n                                ></apx-chart>\n                            </div>\n                        </div>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n            </div><!-- end col -->\n            <div class="col-xl-3 col-lg-4 col-md-6">\n                <div class="card position-relative shadow-lg">\n                    <div class="card-body">\n                        <div class="mb-1">\n                            <span class="p-2 badge badge-soft-danger d-inline-flex align-items-center justify-content-center rounded border border-danger">\n                                <i class="isax isax-dollar-circle fs-16"></i>\n                            </span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <div class="mb-0">\n                                    <p class="mb-1 text-truncate">Cash & Bank Balance</p>\n                                    <div>\n                                        <h6 class="fs-16 fw-semibold me-2 mb-1">$50,000</h6>\n                                        <span class="badge badge-soft-success">7.45%<i class="isax isax-arrow-up-15"></i></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="chart-set" id="radial-chart6">\n                                <apx-chart\n                                    [series]="radialChart4.series"\n                                    [chart]="radialChart4.chart"\n                                    [colors]="radialChart4.colors"\n                                    [fill]="radialChart4.fill"\n                                    [xaxis]="radialChart4.xaxis"\n                                    [stroke]="radialChart4.stroke"\n                                    [dataLabels]="radialChart4.dataLabels"\n                                    [legend]="radialChart4.legend"\n                                    [plotOptions]="radialChart4.plotOptions"\n                                ></apx-chart>\n                            </div>\n                        </div>\n                    </div><!-- end card body -->\n                </div><!-- end card -->\n            </div><!-- end col -->\n        </div>\n        <!-- end row -->\n\n    </div>\n\n    <!-- Table Search -->\n    <div class="mb-3">\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center gap-2 flex-wrap">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                      </div>\n                </div>\n                <app-date-range-picker-2/>\n                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                    <i class="isax isax-filter me-1"></i>Filter\n                </a>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                        <i class="isax isax-grid-3 me-1"></i>Column\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu">\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Account Holder Name</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Bank & Account No</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Credit</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox">\n                                <span>Debit</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Balance</span>\n                            </label>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <!-- Filter Info -->\n        <div class="align-items-center gap-2 flex-wrap filter-info mt-3">\n            <h6 class="fs-13 fw-semibold">Filters</h6>\n            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">6</span>Account Holders Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>\n        </div>\n        <!-- /Filter Info -->\n    </div>\n    <!-- /Table Search -->\n\n    <!-- Table List -->\n    <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">\n            <thead class="thead-light">\n                <tr>\n                    <th class="no-sort">\n                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                            <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                        </div>\n                    </th>\n                    <th mat-sort-header="account">Account Name</th>\n                    <th mat-sort-header="credit">Credit</th>\n                    <th mat-sort-header="debit">Debit</th>\n                    <th class="no-sort"></th>\n                </tr>\n            </thead>\n            <tbody>\n                \n                @for (data of tableData;track data){\n                <tr>\n                    <td>\n                        <div class="form-check form-check-md">\n                            <input class="form-check-input" type="checkbox">\n                        </div>\n                    </td>\n                    <td>PNB - 5475878970090</td>\n                    <td>$22,500</td>\n                    <td>$7,500</td>\n                    <td></td>\n                </tr>\n            }\n            @if(tableData.length === 0){\n              <tr>\n                <td colspan="12" class="text-center text-dark">No matching records found</td>\n              </tr>\n              }\n            </tbody>\n            <tfoot>\n                <tr class="bg-light border-top">\n                    <td></td>\n                    <td class="fw-semibold">Total</td>\n                    <td class="fw-semibold">$425,500.</td>\n                    <td class="fw-semibold">$154,000.</td>\n                    <td class="fw-semibold text-end">$154,000.</td>\n                </tr>\n            </tfoot>\n        </table>\n    </div>\n    <!-- /Table List -->\n    <app-custom-pagination *ngIf="row"></app-custom-pagination>\n\n</div>\n<!-- End Content -->\n\n<!-- Start Filter -->\n<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n    <div class="offcanvas-header d-block pb-0">\n        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n            <h6 class="offcanvas-title">Filter</h6>\n            <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n        </div>\n    </div>\n    <div class="offcanvas-body pt-3">\n        <form action="#">\n            <div class="mb-3">\n                <label class="form-label">Account Holder</label>\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n                        Select\n                    </a>\n                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                        <div class="mb-3">\n                            <div class="input-icon-start position-relative">\n                                <span class="input-icon-addon fs-12">\n                                    <i class="isax isax-search-normal"></i>\n                                </span>\n                                <input type="text" class="form-control form-control-sm" placeholder="Search">\n                            </div>\n                        </div>\n                        <ul class="mb-3">\n                            <li class="d-flex align-items-center justify-content-between mb-3">\n                                <label class="d-inline-flex align-items-center text-gray-9">\n                                    <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                </label>\n                                <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox"> ETB - 4324356677889\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox"> NPB - 2343547586900\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox"> SDB - 3354456565687\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox"> MFB - 1597534682597\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox"> ETB - 4324356677889\n                                </label>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="mb-3">\n                <label class="form-label">Amount</label>\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n                        Select\n                    </a>\n                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                        <div class="filter-range">\n                            <div class="d-flex justify-content-between align-items-center">\n                                <span class="irs" style="visibility: visible;">$0</span>\n                                <span class="irs" style="visibility: visible;">$1000</span>\n                            </div>\n                            <mat-slider\n                                min="0"\n                                max="1000"\n                                discrete\n                                [displayWith]="formatLabel"\n                            >\n                                <input value="350" matSliderThumb />\n                            </mat-slider>\n                            <p>Range : <span class="text-gray-9">$200 - $5695</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="offcanvas-footer">\n                <div class="row g-2">\n                    <div class="col-6">\n                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>\n                    </div>\n                    <div class="col-6">\n                        <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!-- End Filter -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrialBalanceComponent, { className: "TrialBalanceComponent", filePath: "src/app/features/reports/accounting-report/trial-balance/trial-balance.component.ts", lineNumber: 41 });
})();
export {
  TrialBalanceComponent
};
//# sourceMappingURL=chunk-VFVEXOJV.js.map
