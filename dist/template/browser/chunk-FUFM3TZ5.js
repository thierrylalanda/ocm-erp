import {
  DateRangePicker2Component
} from "./chunk-XI2R5BYV.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/item-report/stock-summary/stock-summary.component.ts
var _c0 = () => ({ standalone: true });
function StockSummaryComponent_For_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 114)(2, "div", 115)(3, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function StockSummaryComponent_For_190_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 117)(6, "a", 118);
    \u0275\u0275element(7, "img", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 120)(10, "a", 121);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td", 122);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 122);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 122);
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
    \u0275\u0275textInterpolate(data_r2.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.totalPrice);
  }
}
function StockSummaryComponent_Conditional_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 123);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function StockSummaryComponent_app_custom_pagination_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var StockSummaryComponent = class _StockSummaryComponent {
  data;
  router;
  pagination;
  routes = routes;
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
    this.data.getStockSummary().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.stockSummary) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getStockSummary().subscribe((apiRes) => {
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
  static \u0275fac = function StockSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockSummaryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockSummaryComponent, selectors: [["app-stock-summary"]], decls: 312, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "avatar", "bg-primary", "rounded-circle"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "bg-dark", "py-2", "px-3", "rounded"], [1, "fs-13", "mb-0", "text-white", "text-truncate"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "start-0", "top-0"], ["src", "assets/img/bg/card-overlay-05.svg", "alt", "User Img"], [1, "avatar", "bg-success", "rounded-circle"], [1, "isax", "isax-bag-2", "fs-16"], ["src", "assets/img/bg/card-overlay-06.svg", "alt", "User Img"], [1, "avatar", "bg-danger", "rounded-circle"], [1, "isax", "isax-timer", "fs-16"], ["src", "assets/img/bg/card-overlay-07.svg", "alt", "User Img"], [1, "avatar", "bg-info", "rounded-circle"], [1, "isax", "isax-bag-timer", "fs-16"], ["src", "assets/img/bg/card-overlay-08.svg", "alt", "User Img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "price"], ["mat-sort-header", "qty"], ["mat-sort-header", "total"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "filter-range"], ["type", "text", "id", "range_03"], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function StockSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Stock Summary Report");
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
      \u0275\u0275text(24, "Total Stock Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 15);
      \u0275\u0275text(26, "$8,500,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "span", 16);
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 18)(31, "p", 19)(32, "span", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "span", 22);
      \u0275\u0275element(37, "img", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "div", 13)(42, "div")(43, "p", 14);
      \u0275\u0275text(44, "Low Stock Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h6", 15);
      \u0275\u0275text(46, "25 Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div")(48, "span", 24);
      \u0275\u0275element(49, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 18)(51, "p", 19)(52, "span", 20);
      \u0275\u0275element(53, "i", 21);
      \u0275\u0275text(54, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "span", 22);
      \u0275\u0275element(57, "img", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 10)(59, "div", 11)(60, "div", 12)(61, "div", 13)(62, "div")(63, "p", 14);
      \u0275\u0275text(64, "Pending Reorders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "h6", 15);
      \u0275\u0275text(66, "$750,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div")(68, "span", 27);
      \u0275\u0275element(69, "i", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 18)(71, "p", 19)(72, "span", 20);
      \u0275\u0275element(73, "i", 21);
      \u0275\u0275text(74, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "span", 22);
      \u0275\u0275element(77, "img", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "div", 10)(79, "div", 11)(80, "div", 12)(81, "div", 13)(82, "div")(83, "p", 14);
      \u0275\u0275text(84, "Out of Stock Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "h6", 15);
      \u0275\u0275text(86, "10 Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div")(88, "span", 30);
      \u0275\u0275element(89, "i", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 18)(91, "p", 19)(92, "span", 20);
      \u0275\u0275element(93, "i", 21);
      \u0275\u0275text(94, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "span", 22);
      \u0275\u0275element(97, "img", 32);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(98, "div", 33)(99, "div", 34)(100, "div", 35)(101, "div", 36)(102, "div", 37)(103, "a", 38);
      \u0275\u0275element(104, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 40)(106, "label")(107, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function StockSummaryComponent_Template_input_ngModelChange_107_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StockSummaryComponent_Template_input_ngModelChange_107_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(108, "app-date-range-picker-2");
      \u0275\u0275elementStart(109, "a", 42);
      \u0275\u0275element(110, "i", 43);
      \u0275\u0275text(111, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 44)(113, "div", 4)(114, "a", 45);
      \u0275\u0275element(115, "i", 46);
      \u0275\u0275text(116, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "ul", 47)(118, "li")(119, "label", 48);
      \u0275\u0275element(120, "i", 49)(121, "input", 50);
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "li")(125, "label", 48);
      \u0275\u0275element(126, "i", 49)(127, "input", 50);
      \u0275\u0275elementStart(128, "span");
      \u0275\u0275text(129, "Unit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "li")(131, "label", 48);
      \u0275\u0275element(132, "i", 49)(133, "input", 50);
      \u0275\u0275elementStart(134, "span");
      \u0275\u0275text(135, "Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "li")(137, "label", 48);
      \u0275\u0275element(138, "i", 49)(139, "input", 50);
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "li")(143, "label", 48);
      \u0275\u0275element(144, "i", 49)(145, "input", 50);
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "Total Price");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(148, "div", 51)(149, "h6", 52);
      \u0275\u0275text(150, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "span", 53)(152, "span", 54);
      \u0275\u0275text(153, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(154, "Customers Selected");
      \u0275\u0275elementStart(155, "span", 55);
      \u0275\u0275element(156, "i", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "span", 53)(158, "span", 54);
      \u0275\u0275text(159, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(160, "Status Selected");
      \u0275\u0275elementStart(161, "span", 55);
      \u0275\u0275element(162, "i", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "span", 53)(164, "span", 54);
      \u0275\u0275text(165, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, "Units Selected");
      \u0275\u0275elementStart(167, "span", 55);
      \u0275\u0275element(168, "i", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "a", 57);
      \u0275\u0275text(170, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 58)(172, "table", 59);
      \u0275\u0275listener("matSortChange", function StockSummaryComponent_Template_table_matSortChange_172_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(173, "thead")(174, "tr")(175, "th", 60)(176, "div", 61);
      \u0275\u0275listener("click", function StockSummaryComponent_Template_div_click_176_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(177, "input", 62);
      \u0275\u0275twoWayListener("ngModelChange", function StockSummaryComponent_Template_input_ngModelChange_177_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "th", 60);
      \u0275\u0275text(179, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "th", 60);
      \u0275\u0275text(181, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "th", 63);
      \u0275\u0275text(183, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "th", 64);
      \u0275\u0275text(185, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "th", 65);
      \u0275\u0275text(187, "Total Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(188, "tbody");
      \u0275\u0275repeaterCreate(189, StockSummaryComponent_For_190_Template, 20, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(191, StockSummaryComponent_Conditional_191_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(192, StockSummaryComponent_app_custom_pagination_192_Template, 1, 0, "app-custom-pagination", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 67)(194, "div", 68)(195, "div", 69)(196, "h6", 70);
      \u0275\u0275text(197, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "button", 71);
      \u0275\u0275element(199, "i", 72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(200, "div", 73)(201, "form", 74)(202, "div", 33)(203, "label", 75);
      \u0275\u0275text(204, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 4)(206, "a", 76);
      \u0275\u0275text(207, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 77)(209, "div", 33)(210, "div", 78)(211, "span", 79);
      \u0275\u0275element(212, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(213, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "ul", 33)(215, "li", 13)(216, "label", 82);
      \u0275\u0275element(217, "input", 83);
      \u0275\u0275text(218, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "a", 84);
      \u0275\u0275text(220, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "li")(222, "label", 85);
      \u0275\u0275element(223, "input", 86);
      \u0275\u0275elementStart(224, "span", 87);
      \u0275\u0275element(225, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(226, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "li")(228, "label", 85);
      \u0275\u0275element(229, "input", 86);
      \u0275\u0275elementStart(230, "span", 87);
      \u0275\u0275element(231, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(232, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "li")(234, "label", 85);
      \u0275\u0275element(235, "input", 86);
      \u0275\u0275elementStart(236, "span", 87);
      \u0275\u0275element(237, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(238, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li")(240, "label", 85);
      \u0275\u0275element(241, "input", 86);
      \u0275\u0275elementStart(242, "span", 87);
      \u0275\u0275element(243, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(244, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "li")(246, "label", 85);
      \u0275\u0275element(247, "input", 86);
      \u0275\u0275elementStart(248, "span", 87);
      \u0275\u0275element(249, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(250, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "li")(252, "label", 85);
      \u0275\u0275element(253, "input", 86);
      \u0275\u0275elementStart(254, "span", 87);
      \u0275\u0275element(255, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275text(256, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(257, "div", 94)(258, "div", 95)(259, "a", 96);
      \u0275\u0275text(260, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 95)(262, "a", 97);
      \u0275\u0275text(263, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(264, "div", 33)(265, "label", 75);
      \u0275\u0275text(266, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "mat-select", 98)(268, "mat-option", 99);
      \u0275\u0275text(269, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "mat-option", 99);
      \u0275\u0275text(271, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "mat-option", 99);
      \u0275\u0275text(273, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "mat-option", 99);
      \u0275\u0275text(275, "Liter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(276, "div", 33)(277, "label", 75);
      \u0275\u0275text(278, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "div", 4)(280, "a", 76);
      \u0275\u0275text(281, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "div", 77)(283, "div", 100);
      \u0275\u0275element(284, "input", 101);
      \u0275\u0275elementStart(285, "p");
      \u0275\u0275text(286, "Range : ");
      \u0275\u0275elementStart(287, "span", 102);
      \u0275\u0275text(288, "Range : $200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(289, "div", 103)(290, "div", 94)(291, "div", 95)(292, "a", 104);
      \u0275\u0275text(293, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "div", 95)(295, "button", 105);
      \u0275\u0275text(296, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(297, "div", 106)(298, "div", 107)(299, "div", 108)(300, "div", 109)(301, "div", 33);
      \u0275\u0275element(302, "img", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "h6", 14);
      \u0275\u0275text(304, "Delete Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "p", 33);
      \u0275\u0275text(306, "Are you sure, you want to delete product?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "div", 111)(308, "a", 112);
      \u0275\u0275text(309, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "a", 113);
      \u0275\u0275text(311, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(107);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(70);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 191 : -1);
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
    MatSelect,
    MatOption,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    MatSortHeader,
    DateRangePicker2Component
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockSummaryComponent, [{
    type: Component,
    args: [{ selector: "app-stock-summary", imports: [
      CommonModule,
      FormsModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component
    ], template: '            <!-- Start Content -->\n            <div class="content-two">\n\n                <!-- Page Header -->\n                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n                    <div>\n                        <h6 class="mb-0">Stock Summary Report</h6>\n                    </div>\n                    <div class="my-xl-auto">\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                <i class="isax isax-export-1 me-1"></i>Export\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n                <!-- start row -->\n                <div class="row">\n                    <div class="col-xl-3 col-lg-4 col-md-6"> \n                        <div class="card position-relative"> \n                            <div class="card-body">\n                                <div class="d-flex align-items-center justify-content-between mb-3">\n                                    <div>\n                                        <p class="mb-1">Total Stock Value</p>\n                                        <h6 class="fs-16 fw-semibold mb-0">$8,500,000</h6>\n                                    </div>\n                                    <div>\n                                        <span class="avatar bg-primary rounded-circle">\n											<i class="isax isax-dollar-circle fs-16"></i>\n										</span>\n                                    </div>\n                                </div>\n                                <div class="bg-dark py-2 px-3 rounded">\n                                    <p class="fs-13 mb-0 text-white text-truncate">\n                                        <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month\n                                    </p>\n                                </div>\n                                <span class="position-absolute start-0 top-0">\n									<img src="assets/img/bg/card-overlay-05.svg" alt="User Img">\n								</span>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n                    <div class="col-xl-3 col-lg-4 col-md-6"> \n                        <div class="card position-relative"> \n                            <div class="card-body">\n                                <div class="d-flex align-items-center justify-content-between mb-3">\n                                    <div>\n                                        <p class="mb-1">Low Stock Items</p>\n                                        <h6 class="fs-16 fw-semibold mb-0">25 Products</h6>\n                                    </div>\n                                    <div>\n                                        <span class="avatar bg-success rounded-circle">\n											<i class="isax isax-bag-2 fs-16"></i>\n										</span>\n                                    </div>\n                                </div>\n                                <div class="bg-dark py-2 px-3 rounded">\n                                    <p class="fs-13 mb-0 text-white text-truncate">\n                                        <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month\n                                    </p>\n                                </div>\n                                <span class="position-absolute start-0 top-0">\n									<img src="assets/img/bg/card-overlay-06.svg" alt="User Img">\n								</span>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n                    <div class="col-xl-3 col-lg-4 col-md-6"> \n                        <div class="card position-relative"> \n                            <div class="card-body">\n                                <div class="d-flex align-items-center justify-content-between mb-3">\n                                    <div>\n                                        <p class="mb-1">Pending Reorders</p>\n                                        <h6 class="fs-16 fw-semibold mb-0">$750,000</h6>\n                                    </div>\n                                    <div>\n                                        <span class="avatar bg-danger rounded-circle">\n											<i class="isax isax-timer fs-16"></i>\n										</span>\n                                    </div>\n                                </div>\n                                <div class="bg-dark py-2 px-3 rounded">\n                                    <p class="fs-13 mb-0 text-white text-truncate">\n                                        <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month\n                                    </p>\n                                </div>\n                                <span class="position-absolute start-0 top-0">\n									<img src="assets/img/bg/card-overlay-07.svg" alt="User Img">\n								</span>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n                    <div class="col-xl-3 col-lg-4 col-md-6"> \n                        <div class="card position-relative"> \n                            <div class="card-body">\n                                <div class="d-flex align-items-center justify-content-between mb-3">\n                                    <div>\n                                        <p class="mb-1">Out of Stock Items</p>\n                                        <h6 class="fs-16 fw-semibold mb-0">10 Products</h6>\n                                    </div>\n                                    <div>\n                                        <span class="avatar bg-info rounded-circle">\n											<i class="isax isax-bag-timer fs-16"></i>\n										</span>\n                                    </div>\n                                </div>\n                                <div class="bg-dark py-2 px-3 rounded">\n                                    <p class="fs-13 mb-0 text-white text-truncate">\n                                        <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month\n                                    </p>\n                                </div>\n                                <span class="position-absolute start-0 top-0">\n									<img src="assets/img/bg/card-overlay-08.svg" alt="User Img">\n								</span>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n                <!-- Start Table Search -->\n                <div class="mb-3">\n                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                        <div class="d-flex align-items-center gap-2 flex-wrap">\n                            <div class="table-search d-flex align-items-center mb-0">\n                                <div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n                            </div>\n                           <app-date-range-picker-2/>\n                            <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                                <i class="isax isax-filter me-1"></i>Filter\n                            </a>\n                        </div>\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="dropdown">\n                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                                    <i class="isax isax-grid-3 me-1"></i>Column\n                                </a>\n                                <ul class="dropdown-menu  dropdown-menu">\n                                    <li>\n                                        <label class="dropdown-item d-flex align-items-center form-switch">\n                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                            <span>Product</span>\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item d-flex align-items-center form-switch">\n                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                            <span>Unit</span>\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item d-flex align-items-center form-switch">\n                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                            <span>Price</span>\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item d-flex align-items-center form-switch">\n                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                            <span>Quantity</span>\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item d-flex align-items-center form-switch">\n                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                            <span>Total Price</span>\n                                        </label>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Filter Info -->\n                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3">\n                        <h6 class="fs-13 fw-semibold">Filters</h6>\n                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Customers Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Status Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Units Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>\n                    </div>\n                    <!-- /Filter Info -->\n\n                </div>\n                <!-- End Table Search -->\n\n                <!-- Start Table List -->\n                <div class="table-responsive">\n                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n                        <thead>\n                            <tr>\n                                <th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n                                <th class="no-sort">Product</th>\n                                <th class="no-sort">Unit</th>\n                                <th mat-sort-header="price">Price</th>\n                                <th mat-sort-header="qty">Quantity</th>\n                                <th mat-sort-header="total">Total Price</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            @for (data of tableData;track data){\n                            <tr>\n                                <td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/products/{{data.img}}" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.product}}</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">{{data.unit}}</td>\n                                <td class="text-dark">{{data.price}}</td>\n                                <td>{{data.quantity}}</td>\n                                <td class="text-dark">{{data.totalPrice}}</td>\n                            </tr>\n                        } @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n                        </tbody>\n                    </table>\n                </div>\n                <!-- End Table List -->\n                <app-custom-pagination *ngIf="row"/>\n            </div>\n            <!-- End Content -->\n\n\n                    <!-- Start Filter -->\n        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n            <div class="offcanvas-header d-block pb-0">\n                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n                    <h6 class="offcanvas-title">Filter</h6>\n                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                </div>\n            </div>\n            <div class="offcanvas-body pt-3">\n                <form action="#">\n                    <div class="mb-3">\n                        <label class="form-label">Product</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li class="d-flex align-items-center justify-content-between mb-3">\n                                        <label class="d-inline-flex align-items-center text-gray-9">\n                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                        </label>\n                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Apple iPhone 15\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dell XPS 13 9310\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-03.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Bose QuietComfort 45\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Nike Dri-FIT T-shirt\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-05.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Adidas Ultraboost 22 Running Shoe\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Samsung French Door Refrigerator\n                                        </label>\n                                    </li>\n                                </ul>\n                                <div class="row g-2">\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                                    </div>\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Units</label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">Piece</mat-option>\n                            <mat-option value="1">Pack</mat-option>\n                            <mat-option value="1">Liter</mat-option>\n                        </mat-select>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Price</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="filter-range">\n                                    <input type="text" id="range_03">\n                                    <p>Range : <span class="text-gray-9">Range : $200 - $5695</span></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="offcanvas-footer">\n                        <div class="row g-2">\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>\n                            </div>\n                            <div class="col-6">\n                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <!-- End Filter -->\n\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Product</h6>\n                        <p class="mb-3">Are you sure, you want to delete product?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockSummaryComponent, { className: "StockSummaryComponent", filePath: "src/app/features/reports/item-report/stock-summary/stock-summary.component.ts", lineNumber: 22 });
})();
export {
  StockSummaryComponent
};
//# sourceMappingURL=chunk-FUFM3TZ5.js.map
