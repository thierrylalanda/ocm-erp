import {
  DateRangePicker2Component
} from "./chunk-XI2R5BYV.js";
import {
  CustomPaginationComponent
} from "./chunk-MFJENDE3.js";
import {
  MatSort,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/item-report/sold-stock/sold-stock.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function SoldStockComponent_For_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 103)(2, "div", 104)(3, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function SoldStockComponent_For_167_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 106)(6, "a", 107);
    \u0275\u0275element(7, "img", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 109)(10, "a", 110);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td", 111);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 111);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 111);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.totalPrice);
  }
}
function SoldStockComponent_Conditional_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 112);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SoldStockComponent_app_custom_pagination_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var SoldStockComponent = class _SoldStockComponent {
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
    this.data.getSoldStock().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.soldStock) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSoldStock().subscribe((apiRes) => {
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
  static \u0275fac = function SoldStockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SoldStockComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SoldStockComponent, selectors: [["app-sold-stock"]], decls: 274, vars: 12, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-1"], [1, "text-truncate"], [1, "text-success"], [1, "isax", "isax-send", "fs-10", "me-1"], [1, "badge", "badge-soft-primary", "border", "border-primary", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "badge", "badge-soft-success", "border", "border-success", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-bag-2", "fs-16"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-1", "text-truncate"], [1, "badge", "badge-soft-warning", "border", "border-warning", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-bag-timer", "fs-16"], [1, "text-danger"], [1, "isax", "isax-received", "fs-10", "me-1"], [1, "badge", "badge-soft-danger", "border", "border-danger", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-timer", "fs-16"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "filter-range"], ["type", "text", "id", "range_03"], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SoldStockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Sold Stock Report");
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
      \u0275\u0275text(25, "Total Stock Sold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h6", 16);
      \u0275\u0275text(27, "$8,500,000");
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
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 12)(38, "div", 13)(39, "div", 14)(40, "div")(41, "p", 15);
      \u0275\u0275text(42, "Total Units Sold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h6", 16);
      \u0275\u0275text(44, "25 Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 17)(46, "span", 18);
      \u0275\u0275element(47, "i", 19);
      \u0275\u0275text(48, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div")(51, "span", 22);
      \u0275\u0275element(52, "i", 23);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(53, "div", 11)(54, "div", 12)(55, "div", 13)(56, "div", 14)(57, "div")(58, "p", 24);
      \u0275\u0275text(59, "Best-Selling Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h6", 25);
      \u0275\u0275text(61, "Earbuds (3,500 Units)");
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
      \u0275\u0275elementStart(70, "div", 11)(71, "div", 12)(72, "div", 13)(73, "div", 14)(74, "div")(75, "p", 24);
      \u0275\u0275text(76, "Slowest Moving Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h6", 25);
      \u0275\u0275text(78, "Wallets (150 Units)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 17)(80, "span", 28);
      \u0275\u0275element(81, "i", 29);
      \u0275\u0275text(82, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div")(85, "span", 30);
      \u0275\u0275element(86, "i", 31);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(87, "div", 32)(88, "div", 33)(89, "div", 34)(90, "div", 35)(91, "div", 36)(92, "a", 37);
      \u0275\u0275element(93, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 39)(95, "label")(96, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function SoldStockComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SoldStockComponent_Template_input_ngModelChange_96_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(97, "app-date-range-picker-2");
      \u0275\u0275elementStart(98, "a", 41);
      \u0275\u0275element(99, "i", 42);
      \u0275\u0275text(100, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 43)(102, "div", 4)(103, "a", 44);
      \u0275\u0275element(104, "i", 45);
      \u0275\u0275text(105, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "ul", 46)(107, "li")(108, "label", 47);
      \u0275\u0275element(109, "i", 48)(110, "input", 49);
      \u0275\u0275elementStart(111, "span");
      \u0275\u0275text(112, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "li")(114, "label", 47);
      \u0275\u0275element(115, "i", 48)(116, "input", 49);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "Unit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "li")(120, "label", 47);
      \u0275\u0275element(121, "i", 48)(122, "input", 49);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "li")(126, "label", 47);
      \u0275\u0275element(127, "i", 48)(128, "input", 49);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Tax Value");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "li")(132, "label", 47);
      \u0275\u0275element(133, "i", 48)(134, "input", 49);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Total Price");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(137, "div", 50)(138, "h6", 51);
      \u0275\u0275text(139, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "span", 52)(141, "span", 53);
      \u0275\u0275text(142, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(143, "Product Selected");
      \u0275\u0275elementStart(144, "span", 54);
      \u0275\u0275listener("click", function SoldStockComponent_Template_span_click_144_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(145, "i", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "a", 56);
      \u0275\u0275listener("click", function SoldStockComponent_Template_a_click_146_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(147, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "div", 57)(149, "table", 58);
      \u0275\u0275listener("matSortChange", function SoldStockComponent_Template_table_matSortChange_149_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(150, "thead")(151, "tr")(152, "th", 59)(153, "div", 60);
      \u0275\u0275listener("click", function SoldStockComponent_Template_div_click_153_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(154, "input", 61);
      \u0275\u0275twoWayListener("ngModelChange", function SoldStockComponent_Template_input_ngModelChange_154_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "th");
      \u0275\u0275text(156, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "th");
      \u0275\u0275text(158, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "th", 59);
      \u0275\u0275text(160, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "th", 59);
      \u0275\u0275text(162, "Tax Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "th", 59);
      \u0275\u0275text(164, "Total Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(165, "tbody");
      \u0275\u0275repeaterCreate(166, SoldStockComponent_For_167_Template, 20, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(168, SoldStockComponent_Conditional_168_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(169, SoldStockComponent_app_custom_pagination_169_Template, 1, 0, "app-custom-pagination", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 63)(171, "div", 64)(172, "div", 65)(173, "h6", 66);
      \u0275\u0275text(174, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "button", 67);
      \u0275\u0275element(176, "i", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 69)(178, "form", 70)(179, "div", 32)(180, "label", 71);
      \u0275\u0275text(181, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 4)(183, "a", 72);
      \u0275\u0275text(184, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 73)(186, "div", 32)(187, "div", 74)(188, "span", 75);
      \u0275\u0275element(189, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275element(190, "input", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "ul", 32)(192, "li", 78)(193, "label", 79);
      \u0275\u0275element(194, "input", 80);
      \u0275\u0275text(195, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "a", 81);
      \u0275\u0275text(197, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "li")(199, "label", 82);
      \u0275\u0275element(200, "input", 83);
      \u0275\u0275elementStart(201, "span", 84);
      \u0275\u0275element(202, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275text(203, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "label", 82);
      \u0275\u0275element(206, "input", 83);
      \u0275\u0275elementStart(207, "span", 84);
      \u0275\u0275element(208, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275text(209, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "label", 82);
      \u0275\u0275element(212, "input", 83);
      \u0275\u0275elementStart(213, "span", 84);
      \u0275\u0275element(214, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275text(215, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "li")(217, "label", 82);
      \u0275\u0275element(218, "input", 83);
      \u0275\u0275elementStart(219, "span", 84);
      \u0275\u0275element(220, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(221, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "label", 82);
      \u0275\u0275element(224, "input", 83);
      \u0275\u0275elementStart(225, "span", 84);
      \u0275\u0275element(226, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(227, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "li")(229, "label", 82);
      \u0275\u0275element(230, "input", 83);
      \u0275\u0275elementStart(231, "span", 84);
      \u0275\u0275element(232, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(233, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(234, "div", 91)(235, "div", 92)(236, "a", 93);
      \u0275\u0275text(237, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "div", 92)(239, "a", 94);
      \u0275\u0275text(240, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(241, "div", 32)(242, "label", 71);
      \u0275\u0275text(243, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "mat-select", 95)(245, "mat-option", 96);
      \u0275\u0275text(246, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "mat-option", 96);
      \u0275\u0275text(248, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "mat-option", 96);
      \u0275\u0275text(250, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "mat-option", 96);
      \u0275\u0275text(252, "Liter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "div", 32)(254, "label", 71);
      \u0275\u0275text(255, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "div", 4)(257, "a", 72);
      \u0275\u0275text(258, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 73)(260, "div", 97);
      \u0275\u0275element(261, "input", 98);
      \u0275\u0275elementStart(262, "p");
      \u0275\u0275text(263, "Range : ");
      \u0275\u0275elementStart(264, "span", 99);
      \u0275\u0275text(265, "Range : $200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(266, "div", 100)(267, "div", 91)(268, "div", 92)(269, "a", 101);
      \u0275\u0275text(270, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "div", 92)(272, "button", 102);
      \u0275\u0275listener("click", function SoldStockComponent_Template_button_click_272_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(273, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(96);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 168 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
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
    MatSelectModule,
    MatSelect,
    MatOption,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    DateRangePicker2Component
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SoldStockComponent, [{
    type: Component,
    args: [{ selector: "app-sold-stock", imports: [
      CommonModule,
      FormsModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component
    ], template: `			<!-- Start Content -->
			<div class=" content-two">

				<!-- Page Header -->
				<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
					<div>
						<h6 class="mb-0">Sold Stock Report</h6>
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
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1">Total Stock Sold</p>
											<h6 class="fs-16 fw-semibold mb-1">$8,500,000</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>5.62%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-primary border border-primary rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-dollar-circle fs-16"></i>
											</span>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1">Total Units Sold</p>
											<h6 class="fs-16 fw-semibold mb-1">25 Products</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>11.4%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-success border border-success rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-bag-2 fs-16"></i>
											</span>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Best-Selling Product</p>
											<h6 class="fs-16 fw-semibold mb-1 text-truncate">Earbuds (3,500 Units)</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>8.52%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-warning border border-warning rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-bag-timer fs-16"></i>
											</span>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Slowest Moving Product</p>
											<h6 class="fs-16 fw-semibold mb-1 text-truncate">Wallets (150 Units)</h6>
											<p class="text-truncate">
												<span class="text-danger"><i class="isax isax-received fs-10 me-1"></i>5.62%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-danger border border-danger rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-timer fs-16"></i>
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
											<span>Product</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Unit</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Quantity</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Tax Value</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Total Price</span>
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
								<th>Product</th>
								<th>Unit</th>
								<th class="no-sort">Quantity</th>
								<th class="no-sort">Tax Value</th>
								<th class="no-sort">Total Price</th>
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
                                    <div class="d-flex align-items-center">
										<a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
											<img src="assets/img/products/{{data.img}}" class="rounded-circle" alt="img">
										</a>
										<div>
											<h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.product}}</a></h6>
										</div>
									</div>
                                </td>
                                
								<td class="text-dark">{{data.unit}}</td>
								<td>{{data.quantity}}</td>
								<td class="text-dark">{{data.price}}</td>
								<td class="text-dark">{{data.totalPrice}}</td>
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
									<input type="text" id="range_03">
									<p>Range : <span class="text-gray-9">Range : $200 - $5695</span></p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SoldStockComponent, { className: "SoldStockComponent", filePath: "src/app/features/reports/item-report/sold-stock/sold-stock.component.ts", lineNumber: 21 });
})();
export {
  SoldStockComponent
};
//# sourceMappingURL=chunk-UVUB7FH7.js.map
