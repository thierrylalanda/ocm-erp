import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/accounting-report/cash-flow/cash-flow.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function CashFlowComponent_For_173_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 108)(3, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function CashFlowComponent_For_173_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.BankAccountNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Credit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Debit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.AccountBalance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.TotalBalance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.PaymentMode);
  }
}
function CashFlowComponent_Conditional_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 110);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CashFlowComponent_app_custom_pagination_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CashFlowComponent = class _CashFlowComponent {
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
    this.data.getCashflow().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.cashFlow) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCashflow().subscribe((apiRes) => {
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
  static \u0275fac = function CashFlowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CashFlowComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CashFlowComponent, selectors: [["app-cash-flow"]], decls: 263, vars: 13, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-start", "border-3", "border-primary"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "me-2"], [1, "fs-16", "fw-semibold", "me-2", "mb-1"], [1, "mb-1", "text-truncate"], [1, "fs-13", "mb-0", "text-truncate"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "p-2", "bg-primary", "d-flex", "align-items-center", "justify-content-center", "rounded", "text-white"], [1, "isax", "isax-dollar-circle", "fs-24"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-start", "border-3", "border-success"], [1, "fs-16", "fw-semibold", "mb-1"], [1, "p-2", "bg-success", "d-flex", "align-items-center", "justify-content-center", "rounded", "text-white"], [1, "isax", "isax-money-2", "fs-24"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-start", "border-3", "border-warning"], [1, "p-2", "bg-warning", "d-flex", "align-items-center", "justify-content-center", "rounded", "text-white"], [1, "isax", "isax-wallet-3", "fs-24"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-start", "border-3", "border-danger"], [1, "p-2", "bg-danger", "d-flex", "align-items-center", "justify-content-center", "rounded", "text-white"], [1, "isax", "isax-wallet-money", "fs-24"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "bank"], ["mat-sort-header", "description"], ["mat-sort-header", "credit"], ["mat-sort-header", "debit"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-info-circle5", "ms-1"], ["mat-sort-header", "payment"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], [1, "filter-daterange"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CashFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Cash Flow Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "h6", 16);
      \u0275\u0275text(25, "$5,000,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 17);
      \u0275\u0275text(27, "Opening Cash Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 18)(29, "span", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275text(31, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "span", 21);
      \u0275\u0275element(34, "i", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 11)(36, "div", 23)(37, "div", 13)(38, "div", 14)(39, "div", 15)(40, "h6", 24);
      \u0275\u0275text(41, "$7,500,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 17);
      \u0275\u0275text(43, "Closing Cash Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 18)(45, "span", 19);
      \u0275\u0275element(46, "i", 20);
      \u0275\u0275text(47, "11.42%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "span", 25);
      \u0275\u0275element(50, "i", 26);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(51, "div", 11)(52, "div", 27)(53, "div", 13)(54, "div", 14)(55, "div", 15)(56, "h6", 24);
      \u0275\u0275text(57, "+$2,500,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 17);
      \u0275\u0275text(59, " Net Cash Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 18)(61, "span", 19);
      \u0275\u0275element(62, "i", 20);
      \u0275\u0275text(63, "8.12%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "span", 28);
      \u0275\u0275element(66, "i", 29);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 11)(68, "div", 30)(69, "div", 13)(70, "div", 14)(71, "div", 15)(72, "h6", 16);
      \u0275\u0275text(73, "60%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 17);
      \u0275\u0275text(75, "Cash Inflows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 18)(77, "span", 19);
      \u0275\u0275element(78, "i", 20);
      \u0275\u0275text(79, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "span", 31);
      \u0275\u0275element(82, "i", 32);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(83, "div", 33)(84, "div", 34)(85, "div", 35)(86, "div", 36)(87, "div", 37)(88, "a", 38);
      \u0275\u0275element(89, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 40)(91, "label")(92, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function CashFlowComponent_Template_input_ngModelChange_92_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CashFlowComponent_Template_input_ngModelChange_92_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(93, "app-date-range-picker-2");
      \u0275\u0275elementStart(94, "a", 42);
      \u0275\u0275element(95, "i", 43);
      \u0275\u0275text(96, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 44)(98, "div", 4)(99, "a", 45);
      \u0275\u0275element(100, "i", 46);
      \u0275\u0275text(101, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "ul", 47)(103, "li")(104, "label", 48);
      \u0275\u0275element(105, "i", 49)(106, "input", 50);
      \u0275\u0275elementStart(107, "span");
      \u0275\u0275text(108, "Account Holder Name");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "li")(110, "label", 48);
      \u0275\u0275element(111, "i", 49)(112, "input", 50);
      \u0275\u0275elementStart(113, "span");
      \u0275\u0275text(114, "Bank & Account No");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "li")(116, "label", 48);
      \u0275\u0275element(117, "i", 49)(118, "input", 50);
      \u0275\u0275elementStart(119, "span");
      \u0275\u0275text(120, "Credit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "li")(122, "label", 48);
      \u0275\u0275element(123, "i", 49)(124, "input", 51);
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, "Debit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "li")(128, "label", 48);
      \u0275\u0275element(129, "i", 49)(130, "input", 50);
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Balance");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(133, "div", 52)(134, "h6", 53);
      \u0275\u0275text(135, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "span", 54)(137, "span", 55);
      \u0275\u0275text(138, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, "Account Holders Selected");
      \u0275\u0275elementStart(140, "span", 56);
      \u0275\u0275listener("click", function CashFlowComponent_Template_span_click_140_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(141, "i", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "a", 58);
      \u0275\u0275listener("click", function CashFlowComponent_Template_a_click_142_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(143, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "div", 59)(145, "table", 60);
      \u0275\u0275listener("matSortChange", function CashFlowComponent_Template_table_matSortChange_145_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(146, "thead", 61)(147, "tr")(148, "th", 62)(149, "div", 63);
      \u0275\u0275listener("click", function CashFlowComponent_Template_div_click_149_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(150, "input", 64);
      \u0275\u0275twoWayListener("ngModelChange", function CashFlowComponent_Template_input_ngModelChange_150_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "th", 65);
      \u0275\u0275text(152, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "th", 66);
      \u0275\u0275text(154, "Bank & Account No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "th", 67);
      \u0275\u0275text(156, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "th", 68);
      \u0275\u0275text(158, "Credit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "th", 69);
      \u0275\u0275text(160, "Debit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "th")(162, "span", 70);
      \u0275\u0275text(163, "Account Balance");
      \u0275\u0275element(164, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "th")(166, "span", 70);
      \u0275\u0275text(167, "Total Balance");
      \u0275\u0275element(168, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "th", 72);
      \u0275\u0275text(170, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "tbody");
      \u0275\u0275repeaterCreate(172, CashFlowComponent_For_173_Template, 20, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(174, CashFlowComponent_Conditional_174_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(175, CashFlowComponent_app_custom_pagination_175_Template, 1, 0, "app-custom-pagination", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 74)(177, "div", 75)(178, "div", 76)(179, "h6", 77);
      \u0275\u0275text(180, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "button", 78);
      \u0275\u0275element(182, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 80)(184, "form", 81)(185, "div", 33)(186, "label", 82);
      \u0275\u0275text(187, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 83);
      \u0275\u0275element(189, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "div", 33)(191, "label", 82);
      \u0275\u0275text(192, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 4)(194, "a", 84);
      \u0275\u0275text(195, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 85)(197, "div", 86)(198, "div", 87)(199, "span", 88);
      \u0275\u0275text(200, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "span", 88);
      \u0275\u0275text(202, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "mat-slider", 89);
      \u0275\u0275element(204, "input", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "p");
      \u0275\u0275text(206, "Range : ");
      \u0275\u0275elementStart(207, "span", 91);
      \u0275\u0275text(208, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(209, "div", 33)(210, "label", 82);
      \u0275\u0275text(211, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 4)(213, "a", 84);
      \u0275\u0275text(214, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 85)(216, "div", 33)(217, "div", 92)(218, "span", 93);
      \u0275\u0275element(219, "i", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275element(220, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "ul", 33)(222, "li", 96)(223, "label", 97);
      \u0275\u0275element(224, "input", 98);
      \u0275\u0275text(225, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "a", 99);
      \u0275\u0275text(227, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "li")(229, "label", 100);
      \u0275\u0275element(230, "input", 51);
      \u0275\u0275text(231, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "li")(233, "label", 100);
      \u0275\u0275element(234, "input", 51);
      \u0275\u0275text(235, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 100);
      \u0275\u0275element(238, "input", 51);
      \u0275\u0275text(239, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "li")(241, "label", 100);
      \u0275\u0275element(242, "input", 51);
      \u0275\u0275text(243, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "li")(245, "label", 100);
      \u0275\u0275element(246, "input", 51);
      \u0275\u0275text(247, " Stripe ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(248, "div", 101)(249, "div", 102)(250, "a", 103);
      \u0275\u0275text(251, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "div", 102)(253, "a", 104);
      \u0275\u0275text(254, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(255, "div", 105)(256, "div", 101)(257, "div", 102)(258, "a", 106);
      \u0275\u0275text(259, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 102)(261, "button", 107);
      \u0275\u0275text(262, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(92);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 174 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(28);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, DateRangePicker2Component, DateRangePickerComponent, MatSliderModule, MatSlider, MatSliderThumb], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CashFlowComponent, [{
    type: Component,
    args: [{ selector: "app-cash-flow", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component,
      DateRangePickerComponent,
      MatSliderModule
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Cash Flow Report</h6>
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
    <!-- End Breadcrumb -->

    <div class="border-bottom mb-3">

        <!-- start row -->
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card shadow-lg position-relative border-0 border-start border-3 border-primary">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="mb-0 me-2">
                                <h6 class="fs-16 fw-semibold me-2 mb-1">$5,000,000</h6>
                                <p class="mb-1 text-truncate">Opening Cash Balance</p>
                                <p class="fs-13 mb-0 text-truncate">
                                    <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month
                                </p>
                            </div>
                            <span class="p-2 bg-primary d-flex align-items-center justify-content-center rounded text-white">
                                <i class="isax isax-dollar-circle fs-24"></i>
                            </span>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card shadow-lg position-relative border-0 border-start border-3 border-success">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="mb-0 me-2">
                                <h6 class="fs-16 fw-semibold mb-1">$7,500,000</h6>
                                <p class="mb-1 text-truncate">Closing Cash Balance</p>
                                <p class="fs-13 mb-0 text-truncate">
                                    <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.42%</span> from last month
                                </p>
                            </div>
                            <span class="p-2 bg-success d-flex align-items-center justify-content-center rounded text-white">
                                <i class="isax isax-money-2 fs-24"></i>
                            </span>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card shadow-lg position-relative border-0 border-start border-3 border-warning">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="mb-0 me-2">
                                <h6 class="fs-16 fw-semibold mb-1">+$2,500,000</h6>
                                <p class="mb-1 text-truncate"> Net Cash Flow</p>
                                <p class="fs-13 mb-0 text-truncate">
                                    <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.12%</span> from last month
                                </p>
                            </div>
                            <span class="p-2 bg-warning d-flex align-items-center justify-content-center rounded text-white">
                                <i class="isax isax-wallet-3 fs-24"></i>
                            </span>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card shadow-lg position-relative border-0 border-start border-3 border-danger">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="mb-0 me-2">
                                <h6 class="fs-16 fw-semibold me-2 mb-1">60%</h6>
                                <p class="mb-1 text-truncate">Cash Inflows</p>
                                <p class="fs-13 mb-0 text-truncate">
                                    <span class="text-success"><i class="isax isax-send text-success me-1"></i>7.45%</span> from last month
                                </p>
                            </div>
                            <span class="p-2 bg-danger d-flex align-items-center justify-content-center rounded text-white">
                                <i class="isax isax-wallet-money fs-24"></i>
                            </span>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
        </div>
        <!-- end row -->

    </div>

    <!-- Table Search Start -->
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
    <!-- Table Search End -->

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
                    <th mat-sort-header="date">Date</th>
                    <th mat-sort-header="bank">Bank & Account No</th>
                    <th mat-sort-header="description">Description</th>
                    <th mat-sort-header="credit">Credit</th>
                    <th mat-sort-header="debit">Debit</th>
                    <th><span class="d-flex align-items-center">Account Balance<i class="isax isax-info-circle5 ms-1"></i></span></th>
                    <th><span class="d-flex align-items-center">Total Balance<i class="isax isax-info-circle5 ms-1"></i></span></th>
                    <th mat-sort-header="payment">Payment Mode</th>
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
                    <td>{{data.Date}}</td>
                    <td>{{data.BankAccountNo}}</td>
                    <td>{{data.Description}}</td>
                    <td>{{data.Credit}}</td>
                    <td>{{data.Debit}}</td>
                    <td>{{data.AccountBalance}}</td>
                    <td>{{data.TotalBalance}}</td>
                    <td>{{data.PaymentMode}}</td>
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
                <label class="form-label">Date Range</label>
                <div class="filter-daterange">
                    <app-date-range-picker></app-date-range-picker>
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
                                    <input class="form-check-input m-0 me-2" type="checkbox"> Check
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
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CashFlowComponent, { className: "CashFlowComponent", filePath: "src/app/features/reports/accounting-report/cash-flow/cash-flow.component.ts", lineNumber: 23 });
})();
export {
  CashFlowComponent
};
//# sourceMappingURL=chunk-OZYJZDFF.js.map
