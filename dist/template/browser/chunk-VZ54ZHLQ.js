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

// src/app/features/customers/transactions/transactions.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function TransactionsComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 70);
    \u0275\u0275text(11);
    \u0275\u0275element(12, "i", 71);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.PaymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.Status === "Completed" ? "badge-soft-success" : "badge-soft-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r1.Status === "Completed" ? "isax-tick-circle" : " isax-close-circle");
  }
}
function TransactionsComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_app_custom_pagination_67_Template(rf, ctx) {
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
    this.data.getCustomertransaction().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerTransactions) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCustomertransaction().subscribe((apiRes) => {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsComponent, selectors: [["app-transactions"]], decls: 187, vars: 15, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "type"], ["mat-sort-header", "amount"], ["mat-sort-header", "date"], ["mat-sort-header", "payment"], [1, "no-sort"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "id", "close-filter", 1, "btn", "btn-outline-white", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function TransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Transactions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "a", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "label")(14, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_14_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 4)(19, "div", 13)(20, "a", 14);
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275text(22, "Sort By : ");
      \u0275\u0275elementStart(23, "span", 16);
      \u0275\u0275text(24, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "ul", 17)(26, "li")(27, "a", 18);
      \u0275\u0275text(28, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 18);
      \u0275\u0275text(31, "Oldest");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(32, "div", 19)(33, "h6", 20);
      \u0275\u0275text(34, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 21)(36, "span", 22);
      \u0275\u0275text(37, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, "Type Selected");
      \u0275\u0275elementStart(39, "span", 23);
      \u0275\u0275listener("click", function TransactionsComponent_Template_span_click_39_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(40, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "span", 21)(42, "span", 22);
      \u0275\u0275text(43, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, "Status Selected");
      \u0275\u0275elementStart(45, "span", 23);
      \u0275\u0275listener("click", function TransactionsComponent_Template_span_click_45_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(46, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "a", 25);
      \u0275\u0275listener("click", function TransactionsComponent_Template_a_click_47_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(48, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 26)(50, "table", 27);
      \u0275\u0275listener("matSortChange", function TransactionsComponent_Template_table_matSortChange_50_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(51, "thead", 28)(52, "tr")(53, "th", 29);
      \u0275\u0275text(54, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 30);
      \u0275\u0275text(56, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 31);
      \u0275\u0275text(58, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 32);
      \u0275\u0275text(60, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 33);
      \u0275\u0275text(62, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "tbody");
      \u0275\u0275repeaterCreate(64, TransactionsComponent_For_65_Template, 13, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(66, TransactionsComponent_Conditional_66_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(67, TransactionsComponent_app_custom_pagination_67_Template, 1, 0, "app-custom-pagination", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 35)(69, "div", 36)(70, "div", 37)(71, "h6", 38);
      \u0275\u0275text(72, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 39);
      \u0275\u0275element(74, "i", 40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "div", 41)(76, "form", 42)(77, "div", 2)(78, "label", 43);
      \u0275\u0275text(79, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 13)(81, "a", 44);
      \u0275\u0275text(82, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 45)(84, "div", 2)(85, "div", 46)(86, "span", 47);
      \u0275\u0275element(87, "i", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "ul", 2)(90, "li")(91, "label", 50);
      \u0275\u0275element(92, "input", 51);
      \u0275\u0275text(93, " Wallet Topup ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "li")(95, "label", 50);
      \u0275\u0275element(96, "input", 51);
      \u0275\u0275text(97, " Purchase ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "li")(99, "label", 50);
      \u0275\u0275element(100, "input", 51);
      \u0275\u0275text(101, " Refund ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 52)(103, "div", 53)(104, "a", 54);
      \u0275\u0275text(105, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 53)(107, "a", 55);
      \u0275\u0275text(108, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(109, "div", 2)(110, "label", 56);
      \u0275\u0275text(111, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 57);
      \u0275\u0275element(113, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 2)(115, "label", 43);
      \u0275\u0275text(116, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 13)(118, "a", 44);
      \u0275\u0275text(119, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 45)(121, "div", 58)(122, "div", 59)(123, "span", 60);
      \u0275\u0275text(124, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "span", 60);
      \u0275\u0275text(126, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "mat-slider", 61);
      \u0275\u0275element(128, "input", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p");
      \u0275\u0275text(130, "Range : ");
      \u0275\u0275elementStart(131, "span", 63);
      \u0275\u0275text(132, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(133, "div", 2)(134, "label", 43);
      \u0275\u0275text(135, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 13)(137, "a", 44);
      \u0275\u0275text(138, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 45)(140, "ul", 2)(141, "li")(142, "label", 50);
      \u0275\u0275element(143, "input", 51);
      \u0275\u0275text(144, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "li")(146, "label", 50);
      \u0275\u0275element(147, "input", 51);
      \u0275\u0275text(148, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "li")(150, "label", 50);
      \u0275\u0275element(151, "input", 51);
      \u0275\u0275text(152, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "li")(154, "label", 50);
      \u0275\u0275element(155, "input", 51);
      \u0275\u0275text(156, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "li")(158, "label", 50);
      \u0275\u0275element(159, "input", 51);
      \u0275\u0275text(160, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(161, "div", 2)(162, "label", 43);
      \u0275\u0275text(163, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 13)(165, "a", 44);
      \u0275\u0275text(166, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "div", 45)(168, "ul", 2)(169, "li")(170, "label", 50);
      \u0275\u0275element(171, "input", 51)(172, "i", 64);
      \u0275\u0275text(173, "Completed ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "li")(175, "label", 50);
      \u0275\u0275element(176, "input", 51)(177, "i", 65);
      \u0275\u0275text(178, "Canceled ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(179, "div", 66)(180, "div", 52)(181, "div", 53)(182, "a", 67);
      \u0275\u0275text(183, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 53)(185, "button", 68);
      \u0275\u0275listener("click", function TransactionsComponent_Template_button_click_185_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(186, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(18);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 66 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(60);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    MatSortHeader,
    MatSliderModule,
    MatSlider,
    MatSliderThumb,
    DateRangePickerComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-transactions", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      DateRangePickerComponent
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Transactions</h6>
        </div>
    </div>
    <!-- End Page Header -->

    <!-- Table Search Start -->
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
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
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
            </div>
        </div>

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"  [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>Type Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1"  (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- /Table Search End -->

    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th mat-sort-header="type">Type</th>
                    <th mat-sort-header="amount">Amount</th>
                    <th mat-sort-header="date">Date</th>
                    <th mat-sort-header="payment">Payment Mode</th>
                    <th class="no-sort">Status</th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){ 
                <tr>
                    <td class="text-dark">{{data.Type}}</td>
                    <td class="text-dark">{{data.Amount}}</td>
                    <td>{{data.Date}}</td>
                    <td>{{data.PaymentMode}}</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center" 
                        [ngClass]="data.Status==='Completed'?'badge-soft-success' : 'badge-soft-danger'">
                            {{data.Status}} 
                            <i class="isax ms-1" 
                            [ngClass]="data.Status==='Completed'?'isax-tick-circle':' isax-close-circle'"></i>
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
    <!-- /Table List End -->
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
                <label class="form-label">Type</label>
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
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> Wallet Topup
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> Purchase
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> Refund
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
                <label for="dateRangePicker" class="form-label">Date Range</label>
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
                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Completed
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Canceled
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsComponent, { className: "TransactionsComponent", filePath: "src/app/features/customers/transactions/transactions.component.ts", lineNumber: 22 });
})();
export {
  TransactionsComponent
};
//# sourceMappingURL=chunk-VZ54ZHLQ.js.map
