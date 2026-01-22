import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function BalanceSheetComponent_For_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 106)(3, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_For_167_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 108)(6, "a", 109);
    \u0275\u0275element(7, "img", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 111)(10, "a", 112);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.Image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.AccountHolderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.BankAccountNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Credit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Debit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Balance);
  }
}
function BalanceSheetComponent_Conditional_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 113);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function BalanceSheetComponent_app_custom_pagination_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var BalanceSheetComponent = class _BalanceSheetComponent {
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
    this.data.getBalancesheet().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.balanceSheet) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBalancesheet().subscribe((apiRes) => {
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
  static \u0275fac = function BalanceSheetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BalanceSheetComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BalanceSheetComponent, selectors: [["app-balance-sheet"]], decls: 262, vars: 13, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative", "shadow-lg"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-1", "border-bottom"], [1, "fs-16", "fw-semibold", "mb-1"], [1, "mb-1"], [1, "badge", "badge-soft-primary", "p-2", "rounded-circle"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "badge", "badge-soft-success", "p-2", "rounded-circle"], [1, "isax", "isax-tick-circle", "fs-16"], [1, "badge", "badge-soft-warning", "p-2", "rounded-circle"], [1, "isax", "isax-wallet-3", "fs-16"], [1, "badge", "badge-soft-danger", "p-2", "rounded-circle"], [1, "isax", "isax-wallet-money", "fs-16"], [1, "isax", "isax-received", "text-success", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "holder"], ["mat-sort-header", "bank"], ["mat-sort-header", "credit"], ["mat-sort-header", "debit"], ["mat-sort-header", "balance"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function BalanceSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Balance Sheet Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div")(24, "h6", 15);
      \u0275\u0275text(25, "$30,000,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 16);
      \u0275\u0275text(27, "Total Assets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div")(29, "span", 17);
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "p", 19)(32, "span", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 12)(38, "div", 13)(39, "div", 14)(40, "div")(41, "h6", 15);
      \u0275\u0275text(42, "$100,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 16);
      \u0275\u0275text(44, "Total Liabilities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div")(46, "span", 22);
      \u0275\u0275element(47, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "p", 19)(49, "span", 20);
      \u0275\u0275element(50, "i", 21);
      \u0275\u0275text(51, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 11)(54, "div", 12)(55, "div", 13)(56, "div", 14)(57, "div")(58, "h6", 15);
      \u0275\u0275text(59, "$400,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 16);
      \u0275\u0275text(61, "Net Worth (Equity)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div")(63, "span", 24);
      \u0275\u0275element(64, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "p", 19)(66, "span", 20);
      \u0275\u0275element(67, "i", 21);
      \u0275\u0275text(68, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div", 11)(71, "div", 12)(72, "div", 13)(73, "div", 14)(74, "div")(75, "h6", 15);
      \u0275\u0275text(76, "80%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 16);
      \u0275\u0275text(78, "Equity Ratio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div")(80, "span", 26);
      \u0275\u0275element(81, "i", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "p", 19)(83, "span", 20);
      \u0275\u0275element(84, "i", 28);
      \u0275\u0275text(85, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(86, " from last month ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(87, "div", 29)(88, "div", 30)(89, "div", 31)(90, "div", 32)(91, "div", 33)(92, "a", 34);
      \u0275\u0275element(93, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 36)(95, "label")(96, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_96_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(97, "app-date-range-picker-2");
      \u0275\u0275elementStart(98, "a", 38);
      \u0275\u0275element(99, "i", 39);
      \u0275\u0275text(100, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 40)(102, "div", 4)(103, "a", 41);
      \u0275\u0275element(104, "i", 42);
      \u0275\u0275text(105, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "ul", 43)(107, "li")(108, "label", 44);
      \u0275\u0275element(109, "i", 45)(110, "input", 46);
      \u0275\u0275elementStart(111, "span");
      \u0275\u0275text(112, "Account Holder Name");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "li")(114, "label", 44);
      \u0275\u0275element(115, "i", 45)(116, "input", 46);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "Bank & Account No");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "li")(120, "label", 44);
      \u0275\u0275element(121, "i", 45)(122, "input", 46);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Credit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "li")(126, "label", 44);
      \u0275\u0275element(127, "i", 45)(128, "input", 47);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Debit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "li")(132, "label", 44);
      \u0275\u0275element(133, "i", 45)(134, "input", 46);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Balance");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(137, "div", 48)(138, "h6", 49);
      \u0275\u0275text(139, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "span", 50)(141, "span", 51);
      \u0275\u0275text(142, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(143, "Account Holders Selected");
      \u0275\u0275elementStart(144, "span", 52);
      \u0275\u0275listener("click", function BalanceSheetComponent_Template_span_click_144_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(145, "i", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "a", 54);
      \u0275\u0275listener("click", function BalanceSheetComponent_Template_a_click_146_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(147, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "div", 55)(149, "table", 56);
      \u0275\u0275listener("matSortChange", function BalanceSheetComponent_Template_table_matSortChange_149_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(150, "thead", 57)(151, "tr")(152, "th", 58)(153, "div", 59);
      \u0275\u0275listener("click", function BalanceSheetComponent_Template_div_click_153_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(154, "input", 60);
      \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_154_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "th", 61);
      \u0275\u0275text(156, "Account Holder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "th", 62);
      \u0275\u0275text(158, "Bank & Account No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "th", 63);
      \u0275\u0275text(160, "Credit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "th", 64);
      \u0275\u0275text(162, "Debit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "th", 65);
      \u0275\u0275text(164, "Balance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(165, "tbody");
      \u0275\u0275repeaterCreate(166, BalanceSheetComponent_For_167_Template, 20, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(168, BalanceSheetComponent_Conditional_168_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(169, BalanceSheetComponent_app_custom_pagination_169_Template, 1, 0, "app-custom-pagination", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 67)(171, "div", 68)(172, "div", 69)(173, "h6", 70);
      \u0275\u0275text(174, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "button", 71);
      \u0275\u0275element(176, "i", 72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 73)(178, "form", 74)(179, "div", 29)(180, "label", 75);
      \u0275\u0275text(181, "Account Holder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 4)(183, "a", 76);
      \u0275\u0275text(184, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 77)(186, "div", 29)(187, "div", 78)(188, "span", 79);
      \u0275\u0275element(189, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(190, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "ul", 29)(192, "li", 82)(193, "label", 83);
      \u0275\u0275element(194, "input", 84);
      \u0275\u0275text(195, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "a", 85);
      \u0275\u0275text(197, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "li")(199, "label", 86);
      \u0275\u0275element(200, "input", 47);
      \u0275\u0275elementStart(201, "span", 87);
      \u0275\u0275element(202, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(203, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "label", 86);
      \u0275\u0275element(206, "input", 47);
      \u0275\u0275elementStart(207, "span", 87);
      \u0275\u0275element(208, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(209, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "label", 86);
      \u0275\u0275element(212, "input", 47);
      \u0275\u0275elementStart(213, "span", 87);
      \u0275\u0275element(214, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(215, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "li")(217, "label", 86);
      \u0275\u0275element(218, "input", 47);
      \u0275\u0275elementStart(219, "span", 87);
      \u0275\u0275element(220, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(221, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "label", 86);
      \u0275\u0275element(224, "input", 47);
      \u0275\u0275elementStart(225, "span", 87);
      \u0275\u0275element(226, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(227, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(228, "div", 93)(229, "div", 94)(230, "a", 95);
      \u0275\u0275text(231, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "div", 94)(233, "a", 96);
      \u0275\u0275text(234, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(235, "div", 29)(236, "label", 75);
      \u0275\u0275text(237, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 4)(239, "a", 76);
      \u0275\u0275text(240, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 77)(242, "div", 97)(243, "div", 98)(244, "span", 99);
      \u0275\u0275text(245, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "span", 99);
      \u0275\u0275text(247, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "mat-slider", 100);
      \u0275\u0275element(249, "input", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "p");
      \u0275\u0275text(251, "Range : ");
      \u0275\u0275elementStart(252, "span", 102);
      \u0275\u0275text(253, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(254, "div", 103)(255, "div", 93)(256, "div", 94)(257, "a", 104);
      \u0275\u0275text(258, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 94)(260, "button", 105);
      \u0275\u0275listener("click", function BalanceSheetComponent_Template_button_click_260_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(261, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(96);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 168 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(79);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, DateRangePicker2Component, MatSliderModule, MatSlider, MatSliderThumb], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BalanceSheetComponent, [{
    type: Component,
    args: [{ selector: "app-balance-sheet", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component,
      MatSliderModule
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Balance Sheet Report</h6>
        </div>
        <div class="my-xl-auto">
            <div class="dropdown">
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
    <!-- Start Breadcrumb -->

    <div class="border-bottom mb-3">

        <!-- start row -->
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom">
                            <div>
                                <h6 class="fs-16 fw-semibold mb-1">$30,000,000</h6>
                                <p class="mb-1">Total Assets</p>
                            </div>
                            <div>
                                <span class="badge badge-soft-primary p-2 rounded-circle">
                                    <i class="isax isax-dollar-circle fs-16"></i>
                                </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom">
                            <div>
                                <h6 class="fs-16 fw-semibold mb-1">$100,000</h6>
                                <p class="mb-1">Total Liabilities</p>
                            </div>
                            <div>
                                <span class="badge badge-soft-success p-2 rounded-circle">
                                    <i class="isax isax-tick-circle fs-16"></i>
                                </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom">
                            <div>
                                <h6 class="fs-16 fw-semibold mb-1">$400,000</h6>
                                <p class="mb-1">Net Worth (Equity)</p>
                            </div>
                            <div>
                                <span class="badge badge-soft-warning p-2 rounded-circle">
                                    <i class="isax isax-wallet-3 fs-16"></i>
                                </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom">
                            <div>
                                <h6 class="fs-16 fw-semibold mb-1">80%</h6>
                                <p class="mb-1">Equity Ratio</p>
                            </div>
                            <div>
                                <span class="badge badge-soft-danger p-2 rounded-circle">
                                    <i class="isax isax-wallet-money fs-16"></i>
                                </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-received text-success me-1"></i>7.45%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div><!-- end col -->
        </div>
        <!-- end row -->

    </div>

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
                    <ul class="dropdown-menu  dropdown-menu-lg">
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Account Holder Name</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Bank & Account No</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Credit</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span>Debit</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Balance</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">6</span>Account Holders Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- End Table Search -->

    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th mat-sort-header="holder">Account Holder Name</th>
                    <th mat-sort-header="bank">Bank & Account No</th>
                    <th mat-sort-header="credit">Credit</th>
                    <th mat-sort-header="debit">Debit</th>
                    <th mat-sort-header="balance">Balance</th>
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
                                <img src="assets/img/profiles/{{data.Image}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.AccountHolderName}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.BankAccountNo}}</td>
                    <td>{{data.Credit}}</td>
                    <td>{{data.Debit}}</td>
                    <td>{{data.Balance}}</td>
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
    <!-- Table List End -->
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
                <label class="form-label">Account Holder</label>
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
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>Emily Clark
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>Sophia White
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>Michael Johnson
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>Olivia Harris
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>David Anderson
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
<!-- End Filter -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BalanceSheetComponent, { className: "BalanceSheetComponent", filePath: "src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.ts", lineNumber: 22 });
})();
export {
  BalanceSheetComponent
};
//# sourceMappingURL=chunk-ZYDNP5N3.js.map
