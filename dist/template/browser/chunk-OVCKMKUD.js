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

// src/app/features/reports/transaction-report/sales-report/sales-report.component.ts
var _c0 = () => ({ standalone: true });
function SalesReportComponent_For_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 116)(2, "div", 117)(3, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function SalesReportComponent_For_191_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 119);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 120)(9, "a", 121);
    \u0275\u0275element(10, "img", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 123)(13, "a", 124);
    \u0275\u0275text(14, "Apple iPhone 15");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 125);
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
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n", data_r2.product, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.soldAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.soldQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.instockQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.dueDate);
  }
}
function SalesReportComponent_Conditional_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 126);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SalesReportComponent_app_custom_pagination_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var SalesReportComponent = class _SalesReportComponent {
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
    this.data.getSalesReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.salesReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSalesReport().subscribe((apiRes) => {
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
  static \u0275fac = function SalesReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesReportComponent, selectors: [["app-sales-report"]], decls: 362, vars: 7, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-2"], [1, "text-truncate"], [1, "text-success"], [1, "isax", "isax-send", "fs-10", "me-1"], [1, "badge", "badge-soft-primary", "report-icon", "avatar-md", "border", "border-primary", "rounded", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "position-absolute", "start-0", "top-0"], ["src", "assets/img/icons/sales-card-bg-1.svg", "alt", "User Img"], [1, "badge", "badge-soft-success", "report-icon", "avatar-md", "border", "border-success", "rounded", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-tick-circle", "fs-16"], ["src", "assets/img/icons/sales-card-bg-2.svg", "alt", "User Img"], [1, "badge", "badge-soft-warning", "report-icon", "avatar-md", "border", "border-warning", "rounded", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-user", "fs-16"], ["src", "assets/img/icons/sales-card-bg-3.svg", "alt", "User Img"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-2", "text-truncate"], [1, "text-danger"], [1, "isax", "isax-received", "fs-10", "me-1"], [1, "badge", "badge-soft-danger", "report-icon", "avatar-md", "border", "border-danger", "rounded", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-chart", "fs-16"], ["src", "assets/img/icons/sales-card-bg-4.svg", "alt", "User Img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "sku"], ["mat-sort-header", "product"], ["mat-sort-header", "category"], ["mat-sort-header", "amount"], ["mat-sort-header", "qty"], ["mat-sort-header", "inqty"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "filter-range"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "text-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark10"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SalesReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Sales Report");
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
      \u0275\u0275text(25, "Total Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h6", 16);
      \u0275\u0275text(27, "$1,200,000");
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
      \u0275\u0275text(44, "Active Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h6", 16);
      \u0275\u0275text(46, "950");
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
      \u0275\u0275text(63, "Top Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "h6", 16);
      \u0275\u0275text(65, "XYZ Pvt.Ltd.");
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
      \u0275\u0275elementStart(76, "div", 11)(77, "div", 12)(78, "div", 13)(79, "div", 14)(80, "div")(81, "p", 30);
      \u0275\u0275text(82, "Best-Selling Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "h6", 31);
      \u0275\u0275text(84, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p", 17)(86, "span", 32);
      \u0275\u0275element(87, "i", 33);
      \u0275\u0275text(88, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div")(91, "span", 34);
      \u0275\u0275element(92, "i", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "span", 22);
      \u0275\u0275element(94, "img", 36);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "div", 37)(96, "div", 38)(97, "div", 39)(98, "div", 40)(99, "div", 41)(100, "a", 42);
      \u0275\u0275element(101, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 44)(103, "label")(104, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function SalesReportComponent_Template_input_ngModelChange_104_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SalesReportComponent_Template_input_ngModelChange_104_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(105, "app-date-range-picker-2");
      \u0275\u0275elementStart(106, "a", 46);
      \u0275\u0275element(107, "i", 47);
      \u0275\u0275text(108, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 48)(110, "div", 4)(111, "a", 49);
      \u0275\u0275element(112, "i", 50);
      \u0275\u0275text(113, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "ul", 51)(115, "li")(116, "label", 52);
      \u0275\u0275element(117, "i", 53)(118, "input", 54);
      \u0275\u0275elementStart(119, "span");
      \u0275\u0275text(120, "SKU");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "li")(122, "label", 52);
      \u0275\u0275element(123, "i", 53)(124, "input", 54);
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "li")(128, "label", 52);
      \u0275\u0275element(129, "i", 53)(130, "input", 54);
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Category");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "li")(134, "label", 52);
      \u0275\u0275element(135, "i", 53)(136, "input", 54);
      \u0275\u0275elementStart(137, "span");
      \u0275\u0275text(138, "Sold Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "li")(140, "label", 52);
      \u0275\u0275element(141, "i", 53)(142, "input", 54);
      \u0275\u0275elementStart(143, "span");
      \u0275\u0275text(144, "Sold Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "li")(146, "label", 52);
      \u0275\u0275element(147, "i", 53)(148, "input", 54);
      \u0275\u0275elementStart(149, "span");
      \u0275\u0275text(150, "Instock Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "li")(152, "label", 52);
      \u0275\u0275element(153, "i", 53)(154, "input", 54);
      \u0275\u0275elementStart(155, "span");
      \u0275\u0275text(156, "Due Date");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(157, "div", 55)(158, "h6", 56);
      \u0275\u0275text(159, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span", 57)(161, "span", 58);
      \u0275\u0275text(162, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, "Product Selected");
      \u0275\u0275elementStart(164, "span", 59);
      \u0275\u0275element(165, "i", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "a", 61);
      \u0275\u0275text(167, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 62)(169, "table", 63);
      \u0275\u0275listener("matSortChange", function SalesReportComponent_Template_table_matSortChange_169_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(170, "thead")(171, "tr")(172, "th", 64)(173, "div", 65);
      \u0275\u0275listener("click", function SalesReportComponent_Template_div_click_173_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(174, "input", 66);
      \u0275\u0275twoWayListener("ngModelChange", function SalesReportComponent_Template_input_ngModelChange_174_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "th", 67);
      \u0275\u0275text(176, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th", 68);
      \u0275\u0275text(178, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "th", 69);
      \u0275\u0275text(180, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "th", 70);
      \u0275\u0275text(182, "Sold Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "th", 71);
      \u0275\u0275text(184, "Sold Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "th", 72);
      \u0275\u0275text(186, "Instock Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "th", 64);
      \u0275\u0275text(188, "Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "tbody");
      \u0275\u0275repeaterCreate(190, SalesReportComponent_For_191_Template, 25, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(192, SalesReportComponent_Conditional_192_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(193, SalesReportComponent_app_custom_pagination_193_Template, 1, 0, "app-custom-pagination", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 74)(195, "div", 75)(196, "div", 76)(197, "h6", 77);
      \u0275\u0275text(198, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 78);
      \u0275\u0275element(200, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(201, "div", 80)(202, "form", 81)(203, "div", 37)(204, "label", 82);
      \u0275\u0275text(205, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 4)(207, "a", 83);
      \u0275\u0275text(208, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 84)(210, "div", 37)(211, "div", 85)(212, "span", 86);
      \u0275\u0275element(213, "i", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "input", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "ul", 37)(216, "li", 89)(217, "label", 90);
      \u0275\u0275element(218, "input", 91);
      \u0275\u0275text(219, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "a", 92);
      \u0275\u0275text(221, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "label", 93);
      \u0275\u0275element(224, "input", 94);
      \u0275\u0275elementStart(225, "span", 95);
      \u0275\u0275element(226, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275text(227, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "li")(229, "label", 93);
      \u0275\u0275element(230, "input", 94);
      \u0275\u0275elementStart(231, "span", 95);
      \u0275\u0275element(232, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275text(233, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "li")(235, "label", 93);
      \u0275\u0275element(236, "input", 94);
      \u0275\u0275elementStart(237, "span", 95);
      \u0275\u0275element(238, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275text(239, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "li")(241, "label", 93);
      \u0275\u0275element(242, "input", 94);
      \u0275\u0275elementStart(243, "span", 95);
      \u0275\u0275element(244, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275text(245, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "li")(247, "label", 93);
      \u0275\u0275element(248, "input", 94);
      \u0275\u0275elementStart(249, "span", 95);
      \u0275\u0275element(250, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275text(251, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "li")(253, "label", 93);
      \u0275\u0275element(254, "input", 94);
      \u0275\u0275elementStart(255, "span", 95);
      \u0275\u0275element(256, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275text(257, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(258, "div", 102)(259, "div", 103)(260, "a", 104);
      \u0275\u0275text(261, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "div", 103)(263, "a", 105);
      \u0275\u0275text(264, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(265, "div", 37)(266, "label", 82);
      \u0275\u0275text(267, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 4)(269, "a", 83);
      \u0275\u0275text(270, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "div", 84)(272, "div", 37)(273, "div", 85)(274, "span", 86);
      \u0275\u0275element(275, "i", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275element(276, "input", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "ul", 37)(278, "li", 89)(279, "label", 90);
      \u0275\u0275element(280, "input", 91);
      \u0275\u0275text(281, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "a", 92);
      \u0275\u0275text(283, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "li")(285, "label", 93);
      \u0275\u0275element(286, "input", 94);
      \u0275\u0275text(287, " Smartphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "label", 93);
      \u0275\u0275element(290, "input", 94);
      \u0275\u0275text(291, " Headphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li")(293, "label", 93);
      \u0275\u0275element(294, "input", 94);
      \u0275\u0275text(295, " Men's Apparel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "li")(297, "label", 93);
      \u0275\u0275element(298, "input", 94);
      \u0275\u0275text(299, " Footwear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "li")(301, "label", 93);
      \u0275\u0275element(302, "input", 94);
      \u0275\u0275text(303, " Kitchen ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "li")(305, "label", 93);
      \u0275\u0275element(306, "input", 94);
      \u0275\u0275text(307, " Cleaning ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "li")(309, "label", 93);
      \u0275\u0275element(310, "input", 94);
      \u0275\u0275text(311, " Skincare ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "li")(313, "label", 93);
      \u0275\u0275element(314, "input", 94);
      \u0275\u0275text(315, " Bike & Accessories ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(316, "div", 102)(317, "div", 103)(318, "a", 104);
      \u0275\u0275text(319, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "div", 103)(321, "a", 105);
      \u0275\u0275text(322, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(323, "div", 37)(324, "label", 82);
      \u0275\u0275text(325, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "mat-select", 106)(327, "mat-option", 107);
      \u0275\u0275text(328, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "mat-option", 107);
      \u0275\u0275text(330, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "mat-option", 107);
      \u0275\u0275text(332, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "mat-option", 107);
      \u0275\u0275text(334, "Liter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(335, "div", 37)(336, "label", 82);
      \u0275\u0275text(337, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "div", 4)(339, "a", 83);
      \u0275\u0275text(340, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "div", 84)(342, "div", 108)(343, "div", 14)(344, "span", 109);
      \u0275\u0275text(345, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "span", 109);
      \u0275\u0275text(347, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "mat-slider", 110);
      \u0275\u0275element(349, "input", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "p");
      \u0275\u0275text(351, "Range : ");
      \u0275\u0275elementStart(352, "span", 112);
      \u0275\u0275text(353, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(354, "div", 113)(355, "div", 102)(356, "div", 103)(357, "a", 114);
      \u0275\u0275text(358, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "div", 103)(360, "button", 115);
      \u0275\u0275text(361, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(104);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(70);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 192 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(155);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, MatSelectModule, MatSelect, MatOption, DateRangePicker2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesReportComponent, [{
    type: Component,
    args: [{ selector: "app-sales-report", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      MatSelectModule,
      DateRangePicker2Component
    ], template: `		<!-- Start Content -->
        <div class="content-two">

            <!-- Page Header -->
            <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                <div>
                    <h6 class="mb-0">Sales Report</h6>
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
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="mb-1">Total Revenue</p>
                                        <h6 class="fs-16 fw-semibold mb-2">$1,200,000</h6>
                                        <p class="text-truncate">
                                            <span class="text-success"><i class="isax isax-send fs-10 me-1"></i>5.62%</span> from last month
                                        </p>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-primary report-icon avatar-md border border-primary rounded p-2 d-inline-flex align-items-center justify-content-center">
                                            <i class="isax isax-dollar-circle fs-16"></i>
                                        </span>
                                    </div>
                                </div>
                                <span class="position-absolute start-0 top-0">
                                    <img src="assets/img/icons/sales-card-bg-1.svg" alt="User Img">
                                </span>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- Start col -->
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="mb-1">Active Invoices</p>
                                        <h6 class="fs-16 fw-semibold mb-2">950</h6>
                                        <p class="text-truncate">
                                            <span class="text-success"><i class="isax isax-send fs-10 me-1"></i>11.4%</span> from last month
                                        </p>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-success report-icon avatar-md border border-success rounded p-2 d-inline-flex align-items-center justify-content-center">
                                            <i class="isax isax-tick-circle fs-16"></i>
                                        </span>
                                    </div>
                                </div>
                                <span class="position-absolute start-0 top-0">
                                    <img src="assets/img/icons/sales-card-bg-2.svg" alt="User Img">
                                </span>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- Start col -->
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="mb-1">Top Client</p>
                                        <h6 class="fs-16 fw-semibold mb-2">XYZ  Pvt.Ltd.</h6>
                                        <p class="text-truncate">
                                            <span class="text-success"><i class="isax isax-send fs-10 me-1"></i>8.52%</span> from last month
                                        </p>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-warning report-icon avatar-md border border-warning rounded p-2 d-inline-flex align-items-center justify-content-center">
                                            <i class="isax isax-user fs-16"></i>
                                        </span>
                                    </div>
                                </div>
                                <span class="position-absolute start-0 top-0">
                                    <img src="assets/img/icons/sales-card-bg-3.svg" alt="User Img">
                                </span>
                            </div>
                        </div>
                    </div><!-- Start col -->
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card position-relative">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="mb-1 text-truncate">Best-Selling Product</p>
                                        <h6 class="fs-16 fw-semibold mb-2 text-truncate">Apple iPhone 15</h6>
                                        <p class="text-truncate">
                                            <span class="text-danger"><i class="isax isax-received fs-10 me-1"></i>5.62%</span> from last month
                                        </p>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-danger report-icon avatar-md border border-danger rounded p-2 d-inline-flex align-items-center justify-content-center">
                                            <i class="isax isax-chart fs-16"></i>
                                        </span>
                                    </div>
                                </div>
                                <span class="position-absolute start-0 top-0">
                                    <img src="assets/img/icons/sales-card-bg-4.svg" alt="User Img">
                                </span>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- Start col -->
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
                                        <span>Instock Quantity</span>
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
                <div class="align-items-center gap-2 flex-wrap filter-info mt-3">
                    <h6 class="fs-13 fw-semibold">Filters</h6>
                    <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Product Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>	
                    <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
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
                            <th mat-sort-header="amount">Sold Amount</th>
                            <th mat-sort-header="qty">Sold Quantity</th>
                            <th mat-sort-header="inqty">Instock Quantity</th>
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
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Apple iPhone 15</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>
{{data.product}}                            </td>
                            <td class="text-dark10">{{data.soldAmount}}</td>
                            <td>{{data.soldQuantity}}</td>
                            <td>{{data.instockQuantity}}</td>
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
								<a href="javascript:void(0);"  class="btn btn-outline-white w-100">Reset</a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesReportComponent, { className: "SalesReportComponent", filePath: "src/app/features/reports/transaction-report/sales-report/sales-report.component.ts", lineNumber: 23 });
})();
export {
  SalesReportComponent
};
//# sourceMappingURL=chunk-OVCKMKUD.js.map
