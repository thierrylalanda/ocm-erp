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

// src/app/features/reports/item-report/low-stock/low-stock.component.ts
var _c0 = () => ({ standalone: true });
function LowStockComponent_For_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 89)(2, "div", 90)(3, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function LowStockComponent_For_159_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 92);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 14)(9, "a", 93);
    \u0275\u0275element(10, "img", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 95)(13, "a", 96);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
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
    \u0275\u0275textInterpolate(data_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.closingQuantity);
  }
}
function LowStockComponent_Conditional_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 97);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function LowStockComponent_app_custom_pagination_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var LowStockComponent = class _LowStockComponent {
  data;
  router;
  pagination;
  routes = routes;
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
    this.data.getLowStock().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.lowStock) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getLowStock().subscribe((apiRes) => {
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
  static \u0275fac = function LowStockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LowStockComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LowStockComponent, selectors: [["app-low-stock"]], decls: 291, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "me-3", "flex-shrink-0"], ["src", "assets/img/icons/report-icon-01.svg", "alt", "User Img", 1, "low-stok-img"], [1, "mb-1", "text-truncate"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "ms-2", "badge", "badge-soft-success", "badge-xs"], [1, "isax", "isax-arrow-up-15", "ms-1"], ["src", "assets/img/icons/report-icon-02.svg", "alt", "User Img", 1, "low-stok-img"], ["src", "assets/img/icons/report-icon-03.svg", "alt", "User Img", 1, "low-stok-img"], [1, "fs-16", "fw-semibold", "text-truncate", "mb-0"], ["src", "assets/img/icons/report-icon-04.svg", "alt", "User Img", 1, "low-stok-img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "text-default"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function LowStockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Low Stock Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div", 15);
      \u0275\u0275element(24, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div")(26, "p", 17);
      \u0275\u0275text(27, "Total Low Stock Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18)(29, "h6", 19);
      \u0275\u0275text(30, "385 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 20);
      \u0275\u0275text(32, "+5.62% ");
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "div", 13)(37, "div", 14)(38, "div", 15);
      \u0275\u0275element(39, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div")(41, "p", 17);
      \u0275\u0275text(42, "Out-of-Stock Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 18)(44, "h6", 19);
      \u0275\u0275text(45, "148 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 20);
      \u0275\u0275text(47, "+11.4% ");
      \u0275\u0275element(48, "i", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(49, "div", 11)(50, "div", 12)(51, "div", 13)(52, "div", 14)(53, "div", 15);
      \u0275\u0275element(54, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div")(56, "p", 17);
      \u0275\u0275text(57, "Restock Required");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 18)(59, "h6", 24);
      \u0275\u0275text(60, "250 Units ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 20);
      \u0275\u0275text(62, "+8.52% ");
      \u0275\u0275element(63, "i", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(64, "div", 11)(65, "div", 12)(66, "div", 13)(67, "div", 14)(68, "div", 15);
      \u0275\u0275element(69, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div")(71, "p", 17);
      \u0275\u0275text(72, "Pending Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 18)(74, "h6", 19);
      \u0275\u0275text(75, "45 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 20);
      \u0275\u0275text(77, "+7.45% ");
      \u0275\u0275element(78, "i", 21);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(79, "div", 26)(80, "div", 27)(81, "div", 28)(82, "div", 29)(83, "div", 30)(84, "a", 31);
      \u0275\u0275element(85, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 33)(87, "label")(88, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function LowStockComponent_Template_input_ngModelChange_88_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function LowStockComponent_Template_input_ngModelChange_88_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(89, "app-date-range-picker-2");
      \u0275\u0275elementStart(90, "a", 35);
      \u0275\u0275element(91, "i", 36);
      \u0275\u0275text(92, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 37)(94, "div", 4)(95, "a", 38);
      \u0275\u0275element(96, "i", 39);
      \u0275\u0275text(97, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "ul", 40)(99, "li")(100, "label", 41);
      \u0275\u0275element(101, "i", 42)(102, "input", 43);
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "SKU");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "li")(106, "label", 41);
      \u0275\u0275element(107, "i", 42)(108, "input", 43);
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275text(110, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "li")(112, "label", 41);
      \u0275\u0275element(113, "i", 42)(114, "input", 43);
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, "Category");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "li")(118, "label", 41);
      \u0275\u0275element(119, "i", 42)(120, "input", 43);
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122, "Opening Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "li")(124, "label", 41);
      \u0275\u0275element(125, "i", 42)(126, "input", 43);
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275text(128, "Closing Quantity");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(129, "div", 44)(130, "h6", 45);
      \u0275\u0275text(131, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span", 46)(133, "span", 47);
      \u0275\u0275text(134, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(135, "Product Selected");
      \u0275\u0275elementStart(136, "span", 48);
      \u0275\u0275element(137, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "a", 50);
      \u0275\u0275text(139, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 51)(141, "table", 52);
      \u0275\u0275listener("matSortChange", function LowStockComponent_Template_table_matSortChange_141_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(142, "thead")(143, "tr")(144, "th", 53)(145, "div", 54);
      \u0275\u0275listener("click", function LowStockComponent_Template_div_click_145_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(146, "input", 55);
      \u0275\u0275twoWayListener("ngModelChange", function LowStockComponent_Template_input_ngModelChange_146_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "th");
      \u0275\u0275text(148, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "th");
      \u0275\u0275text(150, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "th");
      \u0275\u0275text(152, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "th", 53);
      \u0275\u0275text(154, "Opening Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "th", 53);
      \u0275\u0275text(156, "Closing Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "tbody");
      \u0275\u0275repeaterCreate(158, LowStockComponent_For_159_Template, 21, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(160, LowStockComponent_Conditional_160_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(161, LowStockComponent_app_custom_pagination_161_Template, 1, 0, "app-custom-pagination", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 57)(163, "div", 58)(164, "div", 59)(165, "h6", 60);
      \u0275\u0275text(166, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "button", 61);
      \u0275\u0275element(168, "i", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(169, "div", 63)(170, "form", 64)(171, "div", 26)(172, "label", 65);
      \u0275\u0275text(173, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 4)(175, "a", 66);
      \u0275\u0275text(176, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 67)(178, "div", 26)(179, "div", 68)(180, "span", 69);
      \u0275\u0275element(181, "i", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275element(182, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "ul", 26)(184, "li", 72)(185, "label", 73);
      \u0275\u0275element(186, "input", 74);
      \u0275\u0275text(187, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "a", 75);
      \u0275\u0275text(189, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "li")(191, "label", 76);
      \u0275\u0275element(192, "input", 77);
      \u0275\u0275elementStart(193, "span", 78);
      \u0275\u0275element(194, "img", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275text(195, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "li")(197, "label", 76);
      \u0275\u0275element(198, "input", 77);
      \u0275\u0275elementStart(199, "span", 78);
      \u0275\u0275element(200, "img", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(201, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "li")(203, "label", 76);
      \u0275\u0275element(204, "input", 77);
      \u0275\u0275elementStart(205, "span", 78);
      \u0275\u0275element(206, "img", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275text(207, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "li")(209, "label", 76);
      \u0275\u0275element(210, "input", 77);
      \u0275\u0275elementStart(211, "span", 78);
      \u0275\u0275element(212, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275text(213, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "li")(215, "label", 76);
      \u0275\u0275element(216, "input", 77);
      \u0275\u0275elementStart(217, "span", 78);
      \u0275\u0275element(218, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275text(219, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "li")(221, "label", 76);
      \u0275\u0275element(222, "input", 77);
      \u0275\u0275elementStart(223, "span", 78);
      \u0275\u0275element(224, "img", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275text(225, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(226, "div", 85)(227, "div", 86)(228, "a", 87);
      \u0275\u0275text(229, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "div", 86)(231, "a", 88);
      \u0275\u0275text(232, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(233, "div", 26)(234, "label", 65);
      \u0275\u0275text(235, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "div", 4)(237, "a", 66);
      \u0275\u0275text(238, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "div", 67)(240, "div", 26)(241, "div", 68)(242, "span", 69);
      \u0275\u0275element(243, "i", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275element(244, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "ul", 26)(246, "li", 72)(247, "label", 73);
      \u0275\u0275element(248, "input", 74);
      \u0275\u0275text(249, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "a", 75);
      \u0275\u0275text(251, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "li")(253, "label", 76);
      \u0275\u0275element(254, "input", 77);
      \u0275\u0275text(255, " Smartphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "li")(257, "label", 76);
      \u0275\u0275element(258, "input", 77);
      \u0275\u0275text(259, " Headphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "li")(261, "label", 76);
      \u0275\u0275element(262, "input", 77);
      \u0275\u0275text(263, " Men's Apparel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "li")(265, "label", 76);
      \u0275\u0275element(266, "input", 77);
      \u0275\u0275text(267, " Footwear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "li")(269, "label", 76);
      \u0275\u0275element(270, "input", 77);
      \u0275\u0275text(271, " Kitchen ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "li")(273, "label", 76);
      \u0275\u0275element(274, "input", 77);
      \u0275\u0275text(275, " Cleaning ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li")(277, "label", 76);
      \u0275\u0275element(278, "input", 77);
      \u0275\u0275text(279, " Skincare ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "li")(281, "label", 76);
      \u0275\u0275element(282, "input", 77);
      \u0275\u0275text(283, " Bike & Accessories ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(284, "div", 85)(285, "div", 86)(286, "a", 87);
      \u0275\u0275text(287, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div", 86)(289, "a", 88);
      \u0275\u0275text(290, "Select");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(88);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(58);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 160 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [
    CommonModule,
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
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    DateRangePicker2Component
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LowStockComponent, [{
    type: Component,
    args: [{ selector: "app-low-stock", imports: [
      CommonModule,
      FormsModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component
    ], template: `            <!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6 class="mb-0">Low Stock Report</h6>
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
                <!-- End Page Header -->

                <div class="border-bottom mb-3">

                    <!-- start row -->
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 flex-shrink-0">
                                            <img src="assets/img/icons/report-icon-01.svg" alt="User Img" class="low-stok-img">
                                        </div>
                                        <div>
                                            <p class="mb-1 text-truncate">Total Low Stock Items</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="fs-16 fw-semibold mb-0">385 </h6>
                                                <span class="ms-2 badge badge-soft-success badge-xs">+5.62% <i class="isax isax-arrow-up-15 ms-1"></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->

                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 flex-shrink-0">
                                            <img src="assets/img/icons/report-icon-02.svg" alt="User Img" class="low-stok-img">
                                        </div>
                                        <div>
                                            <p class="mb-1 text-truncate">Out-of-Stock Items</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="fs-16 fw-semibold mb-0">148 </h6>
                                                <span class="ms-2 badge badge-soft-success badge-xs">+11.4% <i class="isax isax-arrow-up-15 ms-1"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->

                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 flex-shrink-0">
                                            <img src="assets/img/icons/report-icon-03.svg" alt="User Img" class="low-stok-img">
                                        </div>
                                        <div>
                                            <p class="mb-1 text-truncate">Restock Required</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="fs-16 fw-semibold text-truncate mb-0">250 Units </h6>
                                                <span class="ms-2 badge badge-soft-success badge-xs">+8.52% <i class="isax isax-arrow-up-15 ms-1"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card body-->
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->

                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 flex-shrink-0">
                                            <img src="assets/img/icons/report-icon-04.svg" alt="User Img" class="low-stok-img">
                                        </div>
                                        <div>
                                            <p class="mb-1 text-truncate">Pending Orders</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="fs-16 fw-semibold mb-0">45 </h6>
                                                <span class="ms-2 badge badge-soft-success badge-xs">+7.45% <i class="isax isax-arrow-up-15 ms-1"></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- end card body-->
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->
                </div>

                <!-- start Table Search -->
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
                                            <span>Opening Quantity</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Closing Quantity</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Start Filter Info -->
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Product Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
                    </div>
                    <!-- End Filter Info -->

                </div>
                <!-- End Table Search -->

                <!-- Start Table -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead>
                            <tr>
                                <th class="no-sort">
                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                    </div>
                                </th>
                                <th>SKU</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th class="no-sort">Opening Quantity</th>
                                <th class="no-sort">Closing Quantity</th>
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
                                <td>{{data.quantity}}</td>
                                <td>{{data.closingQuantity}}</td>
                            </tr>
                        } @if(tableData.length === 0){
                            <tr>
                              <td colspan="12" class="text-center text-dark">No matching records found</td>
                            </tr>
                          }
                        </tbody>
                    </table>
                </div>
                <!-- End Table -->
                 <app-custom-pagination *ngIf="row"></app-custom-pagination>
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
                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
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
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Kitchen
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cleaning
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Skincare
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Bike & Accessories
                                        </label>
                                    </li>
                                </ul>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>
                                    </div>
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-primary w-100" >Select</a>
                                    </div>
                                </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LowStockComponent, { className: "LowStockComponent", filePath: "src/app/features/reports/item-report/low-stock/low-stock.component.ts", lineNumber: 21 });
})();
export {
  LowStockComponent
};
//# sourceMappingURL=chunk-LVNU27LV.js.map
