import {
  DateRangePicker2Component
} from "./chunk-XI2R5BYV.js";
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
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-5H6GXSFV.js";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/transaction-report/sales-orders/sales-orders.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function SalesOrdersComponent_For_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 108)(2, "div", 109)(3, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function SalesOrdersComponent_For_183_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 111);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 112)(9, "a", 113);
    \u0275\u0275element(10, "img", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 115)(13, "a", 116);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 117);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 117);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.sku);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.soldAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.soldQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.dueDate);
  }
}
function SalesOrdersComponent_Conditional_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 118);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SalesOrdersComponent_app_custom_pagination_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var SalesOrdersComponent = class _SalesOrdersComponent {
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
    this.data.getSalesOrderReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.salesOrders) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSalesOrderReport().subscribe((apiRes) => {
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
  static \u0275fac = function SalesOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesOrdersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesOrdersComponent, selectors: [["app-sales-orders"]], decls: 354, vars: 13, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "highlights-primary", "shadow-lg"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-1"], [1, "text-truncate"], [1, "text-success"], [1, "isax", "isax-send", "fs-10", "me-1"], [1, "badge", "badge-soft-primary", "border", "border-primary", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-bag-2", "fs-16"], [1, "card", "highlights-success", "shadow-lg"], [1, "badge", "badge-soft-success", "border", "border-success", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-tick-circle", "fs-16"], [1, "card", "highlights-warning", "shadow-lg"], [1, "badge", "badge-soft-warning", "border", "border-warning", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-timer", "fs-16"], [1, "card", "highlights-danger", "shadow-lg"], [1, "badge", "badge-soft-danger", "border", "border-danger", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-close-circle", "fs-16"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "sku"], ["mat-sort-header", "product"], ["mat-sort-header", "category"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "text-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SalesOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Sales Orders Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div")(24, "p", 15);
      \u0275\u0275text(25, "Total Sales Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h6", 16);
      \u0275\u0275text(27, "520");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 17)(29, "span", 18);
      \u0275\u0275element(30, "i", 19);
      \u0275\u0275text(31, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div")(34, "span", 20);
      \u0275\u0275element(35, "i", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 22)(38, "div", 13)(39, "div", 14)(40, "div")(41, "p", 15);
      \u0275\u0275text(42, "Completed Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h6", 16);
      \u0275\u0275text(44, "450");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 17)(46, "span", 18);
      \u0275\u0275element(47, "i", 19);
      \u0275\u0275text(48, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div")(51, "span", 23);
      \u0275\u0275element(52, "i", 24);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(53, "div", 11)(54, "div", 25)(55, "div", 13)(56, "div", 14)(57, "div")(58, "p", 15);
      \u0275\u0275text(59, "Pending Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h6", 16);
      \u0275\u0275text(61, "45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p", 17)(63, "span", 18);
      \u0275\u0275element(64, "i", 19);
      \u0275\u0275text(65, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div")(68, "span", 26);
      \u0275\u0275element(69, "i", 27);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(70, "div", 11)(71, "div", 28)(72, "div", 13)(73, "div", 14)(74, "div")(75, "p", 15);
      \u0275\u0275text(76, "Cancelled Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h6", 16);
      \u0275\u0275text(78, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 17)(80, "span", 18);
      \u0275\u0275element(81, "i", 19);
      \u0275\u0275text(82, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div")(85, "span", 29);
      \u0275\u0275element(86, "i", 30);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(87, "div", 31)(88, "div", 32)(89, "div", 33)(90, "div", 34)(91, "div", 35)(92, "a", 36);
      \u0275\u0275element(93, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 38)(95, "label")(96, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function SalesOrdersComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SalesOrdersComponent_Template_input_ngModelChange_96_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(97, "app-date-range-picker-2");
      \u0275\u0275elementStart(98, "a", 40);
      \u0275\u0275element(99, "i", 41);
      \u0275\u0275text(100, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 42)(102, "div", 4)(103, "a", 43);
      \u0275\u0275element(104, "i", 44);
      \u0275\u0275text(105, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "ul", 45)(107, "li")(108, "label", 46);
      \u0275\u0275element(109, "i", 47)(110, "input", 48);
      \u0275\u0275elementStart(111, "span");
      \u0275\u0275text(112, "SKU");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "li")(114, "label", 46);
      \u0275\u0275element(115, "i", 47)(116, "input", 48);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "li")(120, "label", 46);
      \u0275\u0275element(121, "i", 47)(122, "input", 48);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Category");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "li")(126, "label", 46);
      \u0275\u0275element(127, "i", 47)(128, "input", 48);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Sold Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "li")(132, "label", 46);
      \u0275\u0275element(133, "i", 47)(134, "input", 48);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Sold Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "li")(138, "label", 46);
      \u0275\u0275element(139, "i", 47)(140, "input", 48);
      \u0275\u0275elementStart(141, "span");
      \u0275\u0275text(142, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "li")(144, "label", 46);
      \u0275\u0275element(145, "i", 47)(146, "input", 48);
      \u0275\u0275elementStart(147, "span");
      \u0275\u0275text(148, "Due Date");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(149, "div", 49)(150, "h6", 50);
      \u0275\u0275text(151, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "span", 51)(153, "span", 52);
      \u0275\u0275text(154, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(155, "Product Selected");
      \u0275\u0275elementStart(156, "span", 53);
      \u0275\u0275listener("click", function SalesOrdersComponent_Template_span_click_156_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(157, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "a", 55);
      \u0275\u0275listener("click", function SalesOrdersComponent_Template_a_click_158_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(159, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "div", 56)(161, "table", 57);
      \u0275\u0275listener("matSortChange", function SalesOrdersComponent_Template_table_matSortChange_161_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(162, "thead")(163, "tr")(164, "th", 58)(165, "div", 59);
      \u0275\u0275listener("click", function SalesOrdersComponent_Template_div_click_165_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(166, "input", 60);
      \u0275\u0275twoWayListener("ngModelChange", function SalesOrdersComponent_Template_input_ngModelChange_166_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "th", 61);
      \u0275\u0275text(168, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "th", 62);
      \u0275\u0275text(170, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "th", 63);
      \u0275\u0275text(172, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "th", 58);
      \u0275\u0275text(174, "Sold Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "th", 58);
      \u0275\u0275text(176, "Sold Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th", 58);
      \u0275\u0275text(178, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "th", 58);
      \u0275\u0275text(180, "Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "tbody");
      \u0275\u0275repeaterCreate(182, SalesOrdersComponent_For_183_Template, 25, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(184, SalesOrdersComponent_Conditional_184_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(185, SalesOrdersComponent_app_custom_pagination_185_Template, 1, 0, "app-custom-pagination", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 65)(187, "div", 66)(188, "div", 67)(189, "h6", 68);
      \u0275\u0275text(190, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "button", 69);
      \u0275\u0275element(192, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "div", 71)(194, "form", 72)(195, "div", 31)(196, "label", 73);
      \u0275\u0275text(197, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 4)(199, "a", 74);
      \u0275\u0275text(200, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 75)(202, "div", 31)(203, "div", 76)(204, "span", 77);
      \u0275\u0275element(205, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275element(206, "input", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "ul", 31)(208, "li", 80)(209, "label", 81);
      \u0275\u0275element(210, "input", 82);
      \u0275\u0275text(211, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "a", 83);
      \u0275\u0275text(213, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "li")(215, "label", 84);
      \u0275\u0275element(216, "input", 85);
      \u0275\u0275elementStart(217, "span", 86);
      \u0275\u0275element(218, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275text(219, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "li")(221, "label", 84);
      \u0275\u0275element(222, "input", 85);
      \u0275\u0275elementStart(223, "span", 86);
      \u0275\u0275element(224, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(225, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "li")(227, "label", 84);
      \u0275\u0275element(228, "input", 85);
      \u0275\u0275elementStart(229, "span", 86);
      \u0275\u0275element(230, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(231, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "li")(233, "label", 84);
      \u0275\u0275element(234, "input", 85);
      \u0275\u0275elementStart(235, "span", 86);
      \u0275\u0275element(236, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(237, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "li")(239, "label", 84);
      \u0275\u0275element(240, "input", 85);
      \u0275\u0275elementStart(241, "span", 86);
      \u0275\u0275element(242, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(243, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "li")(245, "label", 84);
      \u0275\u0275element(246, "input", 85);
      \u0275\u0275elementStart(247, "span", 86);
      \u0275\u0275element(248, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(249, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(250, "div", 93)(251, "div", 94)(252, "a", 95);
      \u0275\u0275text(253, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "div", 94)(255, "a", 96);
      \u0275\u0275text(256, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(257, "div", 31)(258, "label", 73);
      \u0275\u0275text(259, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "div", 4)(261, "a", 74);
      \u0275\u0275text(262, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "div", 75)(264, "div", 31)(265, "div", 76)(266, "span", 77);
      \u0275\u0275element(267, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275element(268, "input", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "ul", 31)(270, "li", 80)(271, "label", 81);
      \u0275\u0275element(272, "input", 82);
      \u0275\u0275text(273, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "a", 83);
      \u0275\u0275text(275, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li")(277, "label", 84);
      \u0275\u0275element(278, "input", 85);
      \u0275\u0275text(279, " Smartphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "li")(281, "label", 84);
      \u0275\u0275element(282, "input", 85);
      \u0275\u0275text(283, " Headphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "li")(285, "label", 84);
      \u0275\u0275element(286, "input", 85);
      \u0275\u0275text(287, " Men's Apparel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "label", 84);
      \u0275\u0275element(290, "input", 85);
      \u0275\u0275text(291, " Footwear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li")(293, "label", 84);
      \u0275\u0275element(294, "input", 85);
      \u0275\u0275text(295, " Kitchen ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "li")(297, "label", 84);
      \u0275\u0275element(298, "input", 85);
      \u0275\u0275text(299, " Cleaning ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "li")(301, "label", 84);
      \u0275\u0275element(302, "input", 85);
      \u0275\u0275text(303, " Skincare ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "li")(305, "label", 84);
      \u0275\u0275element(306, "input", 85);
      \u0275\u0275text(307, " Bike & Accessories ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(308, "div", 93)(309, "div", 94)(310, "a", 95);
      \u0275\u0275text(311, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "div", 94)(313, "a", 96);
      \u0275\u0275text(314, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(315, "div", 31)(316, "label", 73);
      \u0275\u0275text(317, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "mat-select", 97)(319, "mat-option", 98);
      \u0275\u0275text(320, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "mat-option", 98);
      \u0275\u0275text(322, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "mat-option", 98);
      \u0275\u0275text(324, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "mat-option", 98);
      \u0275\u0275text(326, "Liter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(327, "div", 31)(328, "label", 73);
      \u0275\u0275text(329, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "div", 4)(331, "a", 74);
      \u0275\u0275text(332, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "div", 75)(334, "div", 99)(335, "div", 100)(336, "span", 101);
      \u0275\u0275text(337, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "span", 101);
      \u0275\u0275text(339, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "mat-slider", 102);
      \u0275\u0275element(341, "input", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "p");
      \u0275\u0275text(343, "Range : ");
      \u0275\u0275elementStart(344, "span", 104);
      \u0275\u0275text(345, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(346, "div", 105)(347, "div", 93)(348, "div", 94)(349, "a", 106);
      \u0275\u0275text(350, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "div", 94)(352, "button", 107);
      \u0275\u0275listener("click", function SalesOrdersComponent_Template_button_click_352_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(353, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(96);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(53);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 184 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(155);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, MatSelectModule, MatSelect, MatOption, DateRangePicker2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-sales-orders", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      MatSelectModule,
      DateRangePicker2Component
    ], template: `			<!-- Start Content -->
			<div class="content-two">

				<!-- Page Header -->
				<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
					<div>
						<h6 class="mb-0">Sales Orders Report</h6>
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
							<div class="card highlights-primary shadow-lg">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1">Total Sales Orders</p>
											<h6 class="fs-16 fw-semibold mb-1">520</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>5.62%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-primary border border-primary rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-bag-2 fs-16"></i>
											</span>
										</div>
									</div>
									
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card highlights-success shadow-lg">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1">Completed Orders</p>
											<h6 class="fs-16 fw-semibold mb-1">450</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>11.4%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-success border border-success rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-tick-circle fs-16"></i>
											</span>
										</div>
									</div>
								  
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card highlights-warning shadow-lg">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1">Pending Orders</p>
											<h6 class="fs-16 fw-semibold mb-1">45</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>8.52%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-warning border border-warning rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-timer fs-16"></i>
											</span>
										</div>
									</div>
								   
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card highlights-danger shadow-lg">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1">Cancelled Orders</p>
											<h6 class="fs-16 fw-semibold mb-1">25</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>7.45%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-danger border border-danger rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-close-circle fs-16"></i>
											</span>
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
											<span>SKU</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Product</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Category</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Sold Amount</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Sold Quantity</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Payment Mode</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Due Date</span>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>				

					<!-- Filter Info -->
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Product Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
                    </div>
                    <!-- /Filter Info -->

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
								<th mat-sort-header="sku">SKU</th>
								<th mat-sort-header="product">Product</th>
								<th mat-sort-header="category">Category</th>
								<th class="no-sort">Sold Amount</th>
								<th class="no-sort">Sold Quantity</th>
								<th class="no-sort">Payment Mode</th>
								<th class="no-sort">Due Date</th>
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
                                    <a href="javascript:void(0);" class="text-default">{{data.sku}}</a>
                                </td>
								<td>
                                    <div class="d-flex align-items-center">
										<a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
											<img src="assets/img/products/{{data.img}}" class="rounded-circle" alt="img">
										</a>
										<div>
											<h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.product}}</a></h6>
										</div>
									</div>
                                </td>
                                <td>
                                    {{data.category}}
                                    
                                </td>
								<td class="text-dark">{{data.soldAmount}}</td>
								<td>{{data.soldQuantity}}</td>
								<td class="text-dark">{{data.paymentMode}}</td>
								<td>{{data.dueDate}}</td>
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
						<label class="form-label">Product</label>
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
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Apple iPhone 15
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dell XPS 13 9310
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-03.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Bose QuietComfort 45
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Nike Dri-FIT T-shirt
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-05.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Adidas Ultraboost 22 Running Shoe
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Samsung French Door Refrigerator
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
											<input class="form-check-input select-all m-0 me-2" type="checkbox">
											Select All
										</label>
										<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Smartphones
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Headphones
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Men's Apparel
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Footwear
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Kitchen
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Cleaning
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Skincare
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Bike & Accessories
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
						<label class="form-label">Units</label>
						<mat-select class="custom-mat-select select" placeholder="Select">
							<mat-option value="1">Select</mat-option>
							<mat-option value="1">Piece</mat-option>
							<mat-option value="1">Pack</mat-option>
							<mat-option value="1">Liter</mat-option>
						</mat-select>
					</div>
					<div class="mb-3">
						<label class="form-label">Price</label>
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
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesOrdersComponent, { className: "SalesOrdersComponent", filePath: "src/app/features/reports/transaction-report/sales-orders/sales-orders.component.ts", lineNumber: 23 });
})();
export {
  SalesOrdersComponent
};
//# sourceMappingURL=chunk-VX3XEHKV.js.map
