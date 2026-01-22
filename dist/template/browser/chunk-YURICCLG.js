import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
import {
  CustomPaginationComponent
} from "./chunk-53DCEYLO.js";
import {
  MatSort,
  MatSortModule
} from "./chunk-T4Z6NTOQ.js";
import {
  PaginationService
} from "./chunk-OQ3NIM27.js";
import {
  MatTableDataSource
} from "./chunk-L6DWDL26.js";
import {
  MatSelectModule
} from "./chunk-MUITGCTV.js";
import "./chunk-O6CHOV5Y.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-ZTQFL2WC.js";
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

// src/app/features/reports/item-report/stock-history/stock-history.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function StockHistoryComponent_For_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 101)(2, "div", 102)(3, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function StockHistoryComponent_For_191_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 104);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 105)(9, "a", 106);
    \u0275\u0275element(10, "img", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 108)(13, "a", 109);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
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
    \u0275\u0275textInterpolate(data_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.addedQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.soldQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.defectiveQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.closingQuantity);
  }
}
function StockHistoryComponent_Conditional_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 110);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function StockHistoryComponent_app_custom_pagination_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var StockHistoryComponent = class _StockHistoryComponent {
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
    this.data.getStockHistory().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.stockHistory) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getStockHistory().subscribe((apiRes) => {
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
  static \u0275fac = function StockHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockHistoryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockHistoryComponent, selectors: [["app-stock-history"]], decls: 273, vars: 12, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-1"], [1, "text-truncate"], [1, "text-success"], [1, "isax", "isax-send", "fs-10", "me-1"], [1, "badge", "badge-soft-primary", "border", "border-primary", "rounded", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "position-absolute", "end-0", "bottom-0"], ["src", "assets/img/bg/card-overlay-17.svg", "alt", "User Img"], [1, "badge", "badge-soft-success", "border", "border-success", "rounded", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-bag-2", "fs-16"], ["src", "assets/img/bg/card-overlay-18.svg", "alt", "User Img"], [1, "badge", "badge-soft-warning", "border", "border-warning", "rounded", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-bag-timer", "fs-16"], ["src", "assets/img/bg/card-overlay-20.svg", "alt", "User Img"], [1, "text-danger"], [1, "isax", "isax-received", "fs-10", "me-1"], [1, "badge", "badge-soft-danger", "border", "border-danger", "rounded", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-timer", "fs-16"], ["src", "assets/img/bg/card-overlay-19.svg", "alt", "User Img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "text-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function StockHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Stock History Report");
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
      \u0275\u0275text(25, "Total Stock Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h6", 16);
      \u0275\u0275text(27, "5,200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 17)(29, "span", 18);
      \u0275\u0275element(30, "i", 19);
      \u0275\u0275text(31, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div")(34, "span", 20);
      \u0275\u0275element(35, "i", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "span", 22);
      \u0275\u0275element(37, "img", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 11)(39, "div", 12)(40, "div", 13)(41, "div", 14)(42, "div")(43, "p", 15);
      \u0275\u0275text(44, "Stock Added");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h6", 16);
      \u0275\u0275text(46, "$1,500,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 17)(48, "span", 18);
      \u0275\u0275element(49, "i", 19);
      \u0275\u0275text(50, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div")(53, "span", 24);
      \u0275\u0275element(54, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "span", 22);
      \u0275\u0275element(56, "img", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 11)(58, "div", 12)(59, "div", 13)(60, "div", 14)(61, "div")(62, "p", 15);
      \u0275\u0275text(63, "Stock Sold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "h6", 16);
      \u0275\u0275text(65, "$2,200,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p", 17)(67, "span", 18);
      \u0275\u0275element(68, "i", 19);
      \u0275\u0275text(69, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div")(72, "span", 27);
      \u0275\u0275element(73, "i", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "span", 22);
      \u0275\u0275element(75, "img", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 11)(77, "div", 12)(78, "div", 13)(79, "div", 14)(80, "div")(81, "p", 15);
      \u0275\u0275text(82, "Stock Adjustments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "h6", 16);
      \u0275\u0275text(84, "$300,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p", 17)(86, "span", 30);
      \u0275\u0275element(87, "i", 31);
      \u0275\u0275text(88, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div")(91, "span", 32);
      \u0275\u0275element(92, "i", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "span", 22);
      \u0275\u0275element(94, "img", 34);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "div", 35)(96, "div", 36)(97, "div", 37)(98, "div", 38)(99, "div", 39)(100, "a", 40);
      \u0275\u0275element(101, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 42)(103, "label")(104, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function StockHistoryComponent_Template_input_ngModelChange_104_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StockHistoryComponent_Template_input_ngModelChange_104_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(105, "app-date-range-picker-2");
      \u0275\u0275elementStart(106, "a", 44);
      \u0275\u0275element(107, "i", 45);
      \u0275\u0275text(108, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 46)(110, "div", 4)(111, "a", 47);
      \u0275\u0275element(112, "i", 48);
      \u0275\u0275text(113, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "ul", 49)(115, "li")(116, "label", 50);
      \u0275\u0275element(117, "i", 51)(118, "input", 52);
      \u0275\u0275elementStart(119, "span");
      \u0275\u0275text(120, "SKU");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "li")(122, "label", 50);
      \u0275\u0275element(123, "i", 51)(124, "input", 52);
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "li")(128, "label", 50);
      \u0275\u0275element(129, "i", 51)(130, "input", 52);
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Initial Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "li")(134, "label", 50);
      \u0275\u0275element(135, "i", 51)(136, "input", 52);
      \u0275\u0275elementStart(137, "span");
      \u0275\u0275text(138, "Added Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "li")(140, "label", 50);
      \u0275\u0275element(141, "i", 51)(142, "input", 52);
      \u0275\u0275elementStart(143, "span");
      \u0275\u0275text(144, "Sold Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "li")(146, "label", 50);
      \u0275\u0275element(147, "i", 51)(148, "input", 52);
      \u0275\u0275elementStart(149, "span");
      \u0275\u0275text(150, "Defective Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "li")(152, "label", 50);
      \u0275\u0275element(153, "i", 51)(154, "input", 52);
      \u0275\u0275elementStart(155, "span");
      \u0275\u0275text(156, "Final Quantity");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(157, "div", 53)(158, "h6", 54);
      \u0275\u0275text(159, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span", 55)(161, "span", 56);
      \u0275\u0275text(162, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, "Product Selected");
      \u0275\u0275elementStart(164, "span", 57);
      \u0275\u0275listener("click", function StockHistoryComponent_Template_span_click_164_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(165, "i", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "a", 59);
      \u0275\u0275listener("click", function StockHistoryComponent_Template_a_click_166_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(167, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 60)(169, "table", 61);
      \u0275\u0275listener("matSortChange", function StockHistoryComponent_Template_table_matSortChange_169_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(170, "thead")(171, "tr")(172, "th", 62)(173, "div", 63);
      \u0275\u0275listener("click", function StockHistoryComponent_Template_div_click_173_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(174, "input", 64);
      \u0275\u0275twoWayListener("ngModelChange", function StockHistoryComponent_Template_input_ngModelChange_174_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "th");
      \u0275\u0275text(176, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th");
      \u0275\u0275text(178, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "th");
      \u0275\u0275text(180, "Initial Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "th", 62);
      \u0275\u0275text(182, "Added Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "th", 62);
      \u0275\u0275text(184, "Sold Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "th", 62);
      \u0275\u0275text(186, "Defective Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "th", 62);
      \u0275\u0275text(188, "Final Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "tbody");
      \u0275\u0275repeaterCreate(190, StockHistoryComponent_For_191_Template, 25, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(192, StockHistoryComponent_Conditional_192_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(193, StockHistoryComponent_app_custom_pagination_193_Template, 1, 0, "app-custom-pagination", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 66)(195, "div", 67)(196, "div", 68)(197, "h6", 69);
      \u0275\u0275text(198, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 70);
      \u0275\u0275element(200, "i", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(201, "div", 72)(202, "form", 73)(203, "div", 35)(204, "label", 74);
      \u0275\u0275text(205, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 4)(207, "a", 75);
      \u0275\u0275text(208, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 76)(210, "div", 35)(211, "div", 77)(212, "span", 78);
      \u0275\u0275element(213, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "ul", 35)(216, "li", 81)(217, "label", 82);
      \u0275\u0275element(218, "input", 83);
      \u0275\u0275text(219, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "a", 84);
      \u0275\u0275text(221, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "label", 85);
      \u0275\u0275element(224, "input", 86);
      \u0275\u0275elementStart(225, "span", 87);
      \u0275\u0275element(226, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(227, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "li")(229, "label", 85);
      \u0275\u0275element(230, "input", 86);
      \u0275\u0275elementStart(231, "span", 87);
      \u0275\u0275element(232, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(233, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "li")(235, "label", 85);
      \u0275\u0275element(236, "input", 86);
      \u0275\u0275elementStart(237, "span", 87);
      \u0275\u0275element(238, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(239, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "li")(241, "label", 85);
      \u0275\u0275element(242, "input", 86);
      \u0275\u0275elementStart(243, "span", 87);
      \u0275\u0275element(244, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(245, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "li")(247, "label", 85);
      \u0275\u0275element(248, "input", 86);
      \u0275\u0275elementStart(249, "span", 87);
      \u0275\u0275element(250, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(251, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "li")(253, "label", 85);
      \u0275\u0275element(254, "input", 86);
      \u0275\u0275elementStart(255, "span", 87);
      \u0275\u0275element(256, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275text(257, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(258, "div", 94)(259, "div", 95)(260, "a", 96);
      \u0275\u0275text(261, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "div", 95)(263, "a", 97);
      \u0275\u0275text(264, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(265, "div", 98)(266, "div", 94)(267, "div", 95)(268, "a", 99);
      \u0275\u0275text(269, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 95)(271, "button", 100);
      \u0275\u0275listener("click", function StockHistoryComponent_Template_button_click_271_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(272, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(104);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(53);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 192 : -1);
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
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    DateRangePicker2Component
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-stock-history", imports: [
      CommonModule,
      FormsModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component
    ], template: `			<!-- Start Content -->
			<div class="content-two">

				<!-- Page Header -->
				<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
					<div>
						<h6 class="mb-0">Stock History Report</h6>
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
											<p class="mb-1 text-truncate">Total Stock Transactions</p>
											<h6 class="fs-16 fw-semibold mb-1">5,200</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>5.62%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-primary border border-primary rounded p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-dollar-circle fs-16"></i>
											</span>
										</div>
									</div>
									<span class="position-absolute end-0 bottom-0">
										<img src="assets/img/bg/card-overlay-17.svg" alt="User Img">
									</span>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->

						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Stock Added</p>
											<h6 class="fs-16 fw-semibold mb-1">$1,500,000</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>11.4%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-success border border-success rounded p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-bag-2 fs-16"></i>
											</span>
										</div>
									</div>
									<span class="position-absolute end-0 bottom-0">
										<img src="assets/img/bg/card-overlay-18.svg" alt="User Img">
									</span>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->

						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Stock Sold</p>
											<h6 class="fs-16 fw-semibold mb-1">$2,200,000</h6>
											<p class="text-truncate">
												<span class="text-success"><i class="isax isax-send fs-10 me-1"></i>8.52%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-warning border border-warning rounded p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-bag-timer fs-16"></i>
											</span>
										</div>
									</div>
									<span class="position-absolute end-0 bottom-0">
										<img src="assets/img/bg/card-overlay-20.svg" alt="User Img">
									</span>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->

						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<p class="mb-1 text-truncate">Stock Adjustments</p>
											<h6 class="fs-16 fw-semibold mb-1">$300,000</h6>
											<p class="text-truncate">
												<span class="text-danger"><i class="isax isax-received fs-10 me-1"></i>5.62%</span> from last month
											</p>
										</div>
										<div>
											<span class="badge badge-soft-danger border border-danger rounded p-2 d-inline-flex align-items-center justify-content-center">
												<i class="isax isax-timer fs-16"></i>
											</span>
										</div>
									</div>
									<span class="position-absolute end-0 bottom-0">
										<img src="assets/img/bg/card-overlay-19.svg" alt="User Img">
									</span>
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
											<span>Initial Quantity</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Added Quantity</span>
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
											<span>Defective Quantity</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Final Quantity</span>
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
								<th>SKU</th>
								<th>Product</th>
								<th>Initial Quantity</th>
								<th class="no-sort">Added Quantity</th>
								<th class="no-sort">Sold Quantity</th>
								<th class="no-sort">Defective Quantity</th>
								<th class="no-sort">Final Quantity</th>
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
                                <td>{{data.quantity}}</td>
                                <td>{{data.addedQuantity}}</td>
                                <td>{{data.soldQuantity}}</td>
                                <td>{{data.defectiveQuantity}}</td>
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
					<div class="offcanvas-footer">
						<div class="row g-2">
							<div class="col-6">
								<a href="javascript:void(0);"  class="btn btn-outline-white w-100">Reset</a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockHistoryComponent, { className: "StockHistoryComponent", filePath: "src/app/features/reports/item-report/stock-history/stock-history.component.ts", lineNumber: 21 });
})();
export {
  StockHistoryComponent
};
//# sourceMappingURL=chunk-YURICCLG.js.map
