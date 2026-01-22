import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
import {
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/accounting-report/account-statement/account-statement.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function AccountStatementComponent_For_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 98);
    \u0275\u0275element(3, "input", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "a", 100);
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
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 101);
    \u0275\u0275text(17);
    \u0275\u0275element(18, "span", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20, "$10,000");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r1.ReferenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.TransactionType === "Credit" ? "badge-soft-success" : "badge-soft-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.TransactionType, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r1.TransactionType === "Credit" ? " bg-success" : "bg-danger");
  }
}
function AccountStatementComponent_Conditional_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 103);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function AccountStatementComponent_app_custom_pagination_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var AccountStatementComponent = class _AccountStatementComponent {
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
    this.data.getAccountstatement().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.accountStatement) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getAccountstatement().subscribe((apiRes) => {
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
  static \u0275fac = function AccountStatementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountStatementComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountStatementComponent, selectors: [["app-account-statement"]], decls: 241, vars: 13, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative", "shadow-lg"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "p-2", "bg-primary", "d-flex", "align-items-center", "justify-content-center", "rounded", "text-white", "me-2"], [1, "isax", "isax-dollar-circle", "fs-24"], [1, "mb-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "badge", "badge-soft-success"], [1, "isax", "isax-arrow-up-15"], [1, "p-2", "bg-success", "d-flex", "align-items-center", "justify-content-center", "rounded", "text-white", "me-2"], [1, "isax", "isax-bank", "fs-24"], [1, "p-2", "bg-warning", "d-flex", "align-items-center", "justify-content-center", "rounded", "text-white", "me-2"], [1, "isax", "isax-wallet-3", "fs-24"], [1, "p-2", "bg-danger", "d-flex", "align-items-center", "justify-content-center", "rounded", "text-white", "me-2"], [1, "isax", "isax-money-3", "fs-24"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "reference"], ["mat-sort-header", "date"], ["mat-sort-header", "category"], ["mat-sort-header", "description"], ["mat-sort-header", "amount"], ["mat-sort-header", "transaction"], ["mat-sort-header", "balance"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "badge", 3, "ngClass"], [1, "badge-dot", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function AccountStatementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Account Statement Report");
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
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 2)(26, "p", 17);
      \u0275\u0275text(27, "Total Credits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18)(29, "h6", 19);
      \u0275\u0275text(30, "$2,000,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 20);
      \u0275\u0275text(32, "+5.62%");
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "div", 13)(37, "div", 14)(38, "span", 22);
      \u0275\u0275element(39, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 2)(41, "p", 17);
      \u0275\u0275text(42, "Total Debits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 18)(44, "h6", 19);
      \u0275\u0275text(45, "$1,200,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 20);
      \u0275\u0275text(47, "+11.4%");
      \u0275\u0275element(48, "i", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(49, "div", 11)(50, "div", 12)(51, "div", 13)(52, "div", 14)(53, "span", 24);
      \u0275\u0275element(54, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 2)(56, "p", 17);
      \u0275\u0275text(57, " Net Cash Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 18)(59, "h6", 19);
      \u0275\u0275text(60, "$500,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 20);
      \u0275\u0275text(62, "+8.12%");
      \u0275\u0275element(63, "i", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(64, "div", 11)(65, "div", 12)(66, "div", 13)(67, "div", 14)(68, "span", 26);
      \u0275\u0275element(69, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 2)(71, "p", 17);
      \u0275\u0275text(72, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 18)(74, "h6", 19);
      \u0275\u0275text(75, "$300,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 20);
      \u0275\u0275text(77, "+7.45%");
      \u0275\u0275element(78, "i", 21);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(79, "div", 28)(80, "div", 29)(81, "div", 30)(82, "div", 31)(83, "div", 32)(84, "a", 33);
      \u0275\u0275element(85, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 35)(87, "label")(88, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function AccountStatementComponent_Template_input_ngModelChange_88_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AccountStatementComponent_Template_input_ngModelChange_88_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(89, "app-date-range-picker-2");
      \u0275\u0275elementStart(90, "a", 37);
      \u0275\u0275element(91, "i", 38);
      \u0275\u0275text(92, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 18)(94, "div", 4)(95, "a", 39);
      \u0275\u0275element(96, "i", 40);
      \u0275\u0275text(97, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "ul", 41)(99, "li")(100, "label", 42);
      \u0275\u0275element(101, "i", 43)(102, "input", 44);
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "Account Holder Name");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "li")(106, "label", 42);
      \u0275\u0275element(107, "i", 43)(108, "input", 44);
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275text(110, "Bank & Account No");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "li")(112, "label", 42);
      \u0275\u0275element(113, "i", 43)(114, "input", 44);
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, "Credit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "li")(118, "label", 42);
      \u0275\u0275element(119, "i", 43)(120, "input", 45);
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122, "Debit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "li")(124, "label", 42);
      \u0275\u0275element(125, "i", 43)(126, "input", 44);
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275text(128, "Balance");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(129, "div", 46)(130, "h6", 47);
      \u0275\u0275text(131, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span", 48)(133, "span", 49);
      \u0275\u0275text(134, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(135, "Account Holders Selected");
      \u0275\u0275elementStart(136, "span", 50);
      \u0275\u0275listener("click", function AccountStatementComponent_Template_span_click_136_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(137, "i", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "a", 52);
      \u0275\u0275listener("click", function AccountStatementComponent_Template_a_click_138_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(139, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 53)(141, "table", 54);
      \u0275\u0275listener("matSortChange", function AccountStatementComponent_Template_table_matSortChange_141_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(142, "thead", 55)(143, "tr")(144, "th", 56)(145, "div", 57);
      \u0275\u0275listener("click", function AccountStatementComponent_Template_div_click_145_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(146, "input", 58);
      \u0275\u0275twoWayListener("ngModelChange", function AccountStatementComponent_Template_input_ngModelChange_146_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "th", 59);
      \u0275\u0275text(148, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "th", 60);
      \u0275\u0275text(150, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "th", 61);
      \u0275\u0275text(152, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "th", 62);
      \u0275\u0275text(154, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "th", 63);
      \u0275\u0275text(156, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "th", 64);
      \u0275\u0275text(158, "Transaction Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "th", 65);
      \u0275\u0275text(160, "Balance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(161, "tbody");
      \u0275\u0275repeaterCreate(162, AccountStatementComponent_For_163_Template, 21, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(164, AccountStatementComponent_Conditional_164_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(165, AccountStatementComponent_app_custom_pagination_165_Template, 1, 0, "app-custom-pagination", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 67)(167, "div", 68)(168, "div", 69)(169, "h6", 70);
      \u0275\u0275text(170, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "button", 71);
      \u0275\u0275element(172, "i", 72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 73)(174, "form", 74)(175, "div", 28)(176, "label", 75);
      \u0275\u0275text(177, "Account Holder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 4)(179, "a", 76);
      \u0275\u0275text(180, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "div", 77)(182, "div", 28)(183, "div", 78)(184, "span", 79);
      \u0275\u0275element(185, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(186, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "ul")(188, "li", 82)(189, "label", 83);
      \u0275\u0275element(190, "input", 84);
      \u0275\u0275text(191, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "a", 85);
      \u0275\u0275text(193, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "li")(195, "label", 86);
      \u0275\u0275element(196, "input", 45);
      \u0275\u0275text(197, " ETB - 4324356677889 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "li")(199, "label", 86);
      \u0275\u0275element(200, "input", 45);
      \u0275\u0275text(201, " NPB - 2343547586900 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "li")(203, "label", 86);
      \u0275\u0275element(204, "input", 45);
      \u0275\u0275text(205, " SDB - 3354456565687 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "li")(207, "label", 86);
      \u0275\u0275element(208, "input", 45);
      \u0275\u0275text(209, " MFB - 1597534682597 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "label", 86);
      \u0275\u0275element(212, "input", 45);
      \u0275\u0275text(213, " ETB - 4324356677889 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(214, "div", 28)(215, "label", 75);
      \u0275\u0275text(216, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 4)(218, "a", 76);
      \u0275\u0275text(219, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 77)(221, "div", 87)(222, "div", 88)(223, "span", 89);
      \u0275\u0275text(224, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "span", 89);
      \u0275\u0275text(226, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "mat-slider", 90);
      \u0275\u0275element(228, "input", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "p");
      \u0275\u0275text(230, "Range : ");
      \u0275\u0275elementStart(231, "span", 92);
      \u0275\u0275text(232, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(233, "div", 93)(234, "div", 94)(235, "div", 95)(236, "a", 96);
      \u0275\u0275text(237, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "div", 95)(239, "button", 97);
      \u0275\u0275listener("click", function AccountStatementComponent_Template_button_click_239_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(240, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(88);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 164 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(62);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, NgApexchartsModule, DateRangePicker2Component, MatSliderModule, MatSlider, MatSliderThumb], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountStatementComponent, [{
    type: Component,
    args: [{ selector: "app-account-statement", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      NgApexchartsModule,
      DateRangePicker2Component,
      MatSliderModule
    ], template: `<div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Account Statement Report</h6>
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
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <span class="p-2 bg-primary d-flex align-items-center justify-content-center rounded text-white me-2">
                                <i class="isax isax-dollar-circle fs-24"></i>
                            </span>
                            <div class="mb-0">
                                <p class="mb-1">Total Credits</p>
                                <div class="d-flex align-items-center flex-wrap gap-2">
                                    <h6 class="fs-16 fw-semibold mb-0">$2,000,000</h6>
                                    <span class="badge badge-soft-success">+5.62%<i class="isax isax-arrow-up-15"></i></span>
                                </div>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->

            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <span class="p-2 bg-success d-flex align-items-center justify-content-center rounded text-white me-2">
                                <i class="isax isax-bank fs-24"></i>
                            </span>
                            <div class="mb-0">
                                <p class="mb-1">Total Debits</p>
                                <div class="d-flex align-items-center flex-wrap gap-2">
                                    <h6 class="fs-16 fw-semibold mb-0">$1,200,000</h6>
                                    <span class="badge badge-soft-success">+11.4%<i class="isax isax-arrow-up-15"></i></span>
                                </div>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->

            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <span class="p-2 bg-warning d-flex align-items-center justify-content-center rounded text-white me-2">
                                <i class="isax isax-wallet-3 fs-24"></i>
                            </span>
                            <div class="mb-0">
                                <p class="mb-1"> Net Cash Flow</p>
                                <div class="d-flex align-items-center flex-wrap gap-2">
                                    <h6 class="fs-16 fw-semibold mb-0">$500,000</h6>
                                    <span class="badge badge-soft-success">+8.12%<i class="isax isax-arrow-up-15"></i></span>
                                </div>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->

            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <span class="p-2 bg-danger d-flex align-items-center justify-content-center rounded text-white me-2">
                                <i class="isax isax-money-3 fs-24"></i>
                            </span>
                            <div class="mb-0">
                                <p class="mb-1">Balance</p>
                                <div class="d-flex align-items-center flex-wrap gap-2">
                                    <h6 class="fs-16 fw-semibold mb-0">$300,000</h6>
                                    <span class="badge badge-soft-success">+7.45%<i class="isax isax-arrow-up-15"></i></span>
                                </div>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
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

        <!-- Start Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">6</span>Account Holders Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- End Filter Info -->
    </div>
    <!-- End Table Search -->

    <!-- Table List start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th mat-sort-header="reference">Reference Number</th>
                    <th mat-sort-header="date">Date</th>
                    <th mat-sort-header="category">Category</th>
                    <th mat-sort-header="description">Description</th>
                    <th mat-sort-header="amount">Amount</th>
                    <th mat-sort-header="transaction">Transaction Type</th>
                    <th mat-sort-header="balance">Balance</th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){
                <tr>
                    <td>
                        <div class="form-check form-check-md">
                            <input class="form-check-input" type="checkbox">
                        </div>
                    </td>
                    <td>
                        <a href="javascript:void(0);">{{data.ReferenceNumber}}</a>
                    </td>
                    <td>{{data.Date}}</td>
                    <td>{{data.Category}}</td>
                    <td>{{data.Description}}</td>
                    <td>{{data.Amount}}</td>
                    <td>
                        <span href="javascript:void(0);" class="badge"
                      [ngClass]="data.TransactionType==='Credit'?'badge-soft-success':'badge-soft-danger'">
                        {{data.TransactionType}} 
                        <span class="badge-dot"
                      [ngClass]="data.TransactionType==='Credit'?' bg-success':'bg-danger'"></span>
                    </span>
                    </td>
                    <td>$10,000</td>
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
    <!-- /Table List end -->
    <app-custom-pagination *ngIf="row"></app-custom-pagination>

</div>

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
                        <ul>
                            <li class="d-flex align-items-center justify-content-between mb-3">
                                <label class="d-inline-flex align-items-center text-gray-9">
                                    <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
                                </label>
                                <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> ETB - 4324356677889
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> NPB - 2343547586900
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> SDB - 3354456565687
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> MFB - 1597534682597
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> ETB - 4324356677889
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountStatementComponent, { className: "AccountStatementComponent", filePath: "src/app/features/reports/accounting-report/account-statement/account-statement.component.ts", lineNumber: 23 });
})();
export {
  AccountStatementComponent
};
//# sourceMappingURL=chunk-IHDM4AJZ.js.map
