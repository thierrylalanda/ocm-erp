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
  Router,
  RouterLink
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
  ɵɵnextContext,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/finance/transactions/transactions.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function TransactionsComponent_For_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 86)(2, "div", 87)(3, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_For_117_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "a", 90);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "div", 91)(12, "a", 92);
    \u0275\u0275element(13, "img", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "h6", 94)(16, "a", 95);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 96);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r2.transactionId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r2.routes.invoiceDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.invoiceId);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.paidDate, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
  }
}
function TransactionsComponent_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 97);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_app_custom_pagination_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var TransactionsComponent = class _TransactionsComponent {
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
    this.data.getTransaction().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.transactions) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getTransaction().subscribe((apiRes) => {
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
  static \u0275fac = function TransactionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsComponent, selectors: [["app-transactions"]], decls: 239, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "id", "close-filter", 1, "btn", "btn-outline-white", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "text-gray-5"], [1, "link-default", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function TransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Transactions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 6)(11, "li")(12, "a", 7);
      \u0275\u0275text(13, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 7);
      \u0275\u0275text(16, "Download as Excel");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "label")(26, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_26_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "a", 17);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275text(29, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 10)(31, "div", 3)(32, "a", 19);
      \u0275\u0275element(33, "i", 20);
      \u0275\u0275text(34, "Sort By : ");
      \u0275\u0275elementStart(35, "span", 21);
      \u0275\u0275text(36, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "ul", 22)(38, "li")(39, "a", 7);
      \u0275\u0275text(40, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 7);
      \u0275\u0275text(43, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 3)(45, "a", 23);
      \u0275\u0275element(46, "i", 24);
      \u0275\u0275text(47, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 25)(49, "li")(50, "label", 26);
      \u0275\u0275element(51, "i", 27)(52, "input", 28);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Cusomer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "li")(56, "label", 26);
      \u0275\u0275element(57, "i", 27)(58, "input", 28);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Payment ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "li")(62, "label", 26);
      \u0275\u0275element(63, "i", 27)(64, "input", 28);
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "Paid Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "li")(68, "label", 26);
      \u0275\u0275element(69, "i", 27)(70, "input", 28);
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "li")(74, "label", 26);
      \u0275\u0275element(75, "i", 27)(76, "input", 29);
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "Payment Mode");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(79, "div", 30)(80, "h6", 31);
      \u0275\u0275text(81, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 32)(83, "span", 33);
      \u0275\u0275text(84, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(85, "Customers Selected");
      \u0275\u0275elementStart(86, "span", 34);
      \u0275\u0275listener("click", function TransactionsComponent_Template_span_click_86_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(87, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "span", 32)(89, "span", 33);
      \u0275\u0275text(90, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, "$10,000 - $25,500");
      \u0275\u0275elementStart(92, "span", 34);
      \u0275\u0275listener("click", function TransactionsComponent_Template_span_click_92_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(93, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "a", 36);
      \u0275\u0275listener("click", function TransactionsComponent_Template_a_click_94_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(95, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 37)(97, "table", 38);
      \u0275\u0275listener("matSortChange", function TransactionsComponent_Template_table_matSortChange_97_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(98, "thead", 39)(99, "tr")(100, "th", 40)(101, "div", 41);
      \u0275\u0275listener("click", function TransactionsComponent_Template_div_click_101_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(102, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_102_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "th", 40);
      \u0275\u0275text(104, "Transaction ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th", 40);
      \u0275\u0275text(106, "Invoice ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 40);
      \u0275\u0275text(108, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 43);
      \u0275\u0275text(110, "Paid Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 44);
      \u0275\u0275text(112, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 40);
      \u0275\u0275text(114, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "tbody");
      \u0275\u0275repeaterCreate(116, TransactionsComponent_For_117_Template, 24, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(118, TransactionsComponent_Conditional_118_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(119, TransactionsComponent_app_custom_pagination_119_Template, 1, 0, "app-custom-pagination", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 46)(121, "div", 47)(122, "div", 48)(123, "h6", 49);
      \u0275\u0275text(124, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "button", 50);
      \u0275\u0275element(126, "i", 51);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "div", 52)(128, "form", 53)(129, "div", 8)(130, "label", 54);
      \u0275\u0275text(131, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 3)(133, "a", 55);
      \u0275\u0275text(134, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 56)(136, "div", 8)(137, "div", 57)(138, "span", 58);
      \u0275\u0275element(139, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275element(140, "input", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "ul", 8)(142, "li", 61)(143, "label", 62);
      \u0275\u0275element(144, "input", 63);
      \u0275\u0275text(145, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "a", 64);
      \u0275\u0275text(147, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "li")(149, "label", 65);
      \u0275\u0275element(150, "input", 29);
      \u0275\u0275elementStart(151, "span", 66);
      \u0275\u0275element(152, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275text(153, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "li")(155, "label", 65);
      \u0275\u0275element(156, "input", 29);
      \u0275\u0275elementStart(157, "span", 66);
      \u0275\u0275element(158, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "li")(161, "label", 65);
      \u0275\u0275element(162, "input", 29);
      \u0275\u0275elementStart(163, "span", 66);
      \u0275\u0275element(164, "img", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275text(165, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "li")(167, "label", 65);
      \u0275\u0275element(168, "input", 29);
      \u0275\u0275elementStart(169, "span", 66);
      \u0275\u0275element(170, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275text(171, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(172, "div", 71)(173, "div", 72)(174, "a", 73);
      \u0275\u0275text(175, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 72)(177, "a", 74);
      \u0275\u0275text(178, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(179, "div", 8)(180, "label", 54);
      \u0275\u0275text(181, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 3)(183, "a", 55);
      \u0275\u0275text(184, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 56)(186, "div", 75)(187, "div", 76)(188, "span", 77);
      \u0275\u0275text(189, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "span", 77);
      \u0275\u0275text(191, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "mat-slider", 78);
      \u0275\u0275element(193, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "p");
      \u0275\u0275text(195, "Range : ");
      \u0275\u0275elementStart(196, "span", 80);
      \u0275\u0275text(197, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(198, "div", 8)(199, "label", 54);
      \u0275\u0275text(200, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 3)(202, "a", 55);
      \u0275\u0275text(203, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 56)(205, "ul", 8)(206, "li")(207, "label", 65);
      \u0275\u0275element(208, "input", 29);
      \u0275\u0275text(209, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "label", 65);
      \u0275\u0275element(212, "input", 29);
      \u0275\u0275text(213, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "li")(215, "label", 65);
      \u0275\u0275element(216, "input", 29);
      \u0275\u0275text(217, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "li")(219, "label", 65);
      \u0275\u0275element(220, "input", 29);
      \u0275\u0275text(221, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "label", 65);
      \u0275\u0275element(224, "input", 29);
      \u0275\u0275text(225, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(226, "div", 8)(227, "label", 81);
      \u0275\u0275text(228, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 82);
      \u0275\u0275element(230, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "div", 83)(232, "div", 71)(233, "div", 72)(234, "a", 84);
      \u0275\u0275text(235, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "div", 72)(237, "button", 85);
      \u0275\u0275listener("click", function TransactionsComponent_Template_button_click_237_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(238, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(53);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 118 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(73);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DateRangePickerComponent, MatSliderModule, MatSlider, MatSliderThumb, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-transactions", imports: [
      CommonModule,
      DateRangePickerComponent,
      MatSliderModule,
      CustomPaginationComponent,
      MatSortModule,
      RouterLink,
      FormsModule
    ], template: `  <!-- Start Content -->
  <div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Transactions</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
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
    <!-- End Page Header -->

    <!-- Table Search -->
    <div class="mb-3">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div class="d-flex align-items-center flex-wrap gap-2">
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
                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
                    <i class="isax isax-filter me-1"></i>Filter
                </a>
            </div>
            <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center fw-medium" data-bs-toggle="dropdown">
                        <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item">Latest</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item">Oldest</a>
                        </li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <i class="isax isax-grid-3 me-1"></i>Column
                    </a>
                    <ul class="dropdown-menu  dropdown-menu">
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Cusomer</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Payment ID</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Paid Date</span>
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
                    </ul>
                </div>
            </div>
        </div>

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Customers Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- Table Search End -->

    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th class="no-sort">Transaction ID</th>
                    <th class="no-sort">Invoice ID</th>
                    <th class="no-sort">Customer</th>
                    <th mat-sort-header="date">Paid Date</th>
                    <th mat-sort-header="amount">Amount</th>
                    <th class="no-sort">Payment Mode</th>
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
                    <td> <a href="javascript:void(0);" class="text-gray-5"> {{data.transactionId}} </a> </td>
                    <td> <a [routerLink]="routes.invoiceDetails" class="link-default">{{data.invoiceId}}</a> </td>
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
                    <td>
                        {{data.paidDate}}
                    </td>
                    <td class="text-dark">{{data.amount}}</td>
                    <td>{{data.paymentMode}}</td>
                </tr>
            }@if(tableData.length === 0){
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
            <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
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
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" id="close-filter">Cancel</a>
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
                <label id="dateRangePicker" class="form-label">Date Range</label>
                <div class="filter-daterange">
                    <app-date-range-picker></app-date-range-picker>
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
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsComponent, { className: "TransactionsComponent", filePath: "src/app/features/finance/transactions/transactions.component.ts", lineNumber: 22 });
})();
export {
  TransactionsComponent
};
//# sourceMappingURL=chunk-ZCIQ3GWG.js.map
