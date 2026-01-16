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

// src/app/features/reports/item-report/inventory-report/inventory-report.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function InventoryReportComponent_For_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 112)(2, "div", 113)(3, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryReportComponent_For_190_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 115);
    \u0275\u0275text(6, "PR00025");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 116)(9, "a", 117);
    \u0275\u0275element(10, "img", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 119)(13, "a", 120);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 121);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 121);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 121);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(7);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", data_r2.sellingPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", data_r2.purchasePrice);
  }
}
function InventoryReportComponent_Conditional_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 122);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function InventoryReportComponent_app_custom_pagination_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var InventoryReportComponent = class _InventoryReportComponent {
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
    this.data.getInventoryReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.inventoryReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInventoryReport().subscribe((apiRes) => {
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
  static \u0275fac = function InventoryReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryReportComponent, selectors: [["app-inventory-report"]], decls: 361, vars: 13, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-1"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "avatar", "bg-primary", "rounded"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "start-0", "top-0"], ["src", "assets/img/bg/card-overlay-12.svg", "alt", "User Img"], [1, "avatar", "bg-success", "rounded"], [1, "isax", "isax-bag-2", "fs-16"], ["src", "assets/img/bg/card-overlay-11.svg", "alt", "User Img"], [1, "avatar", "bg-warning", "rounded"], [1, "isax", "isax-bag-timer", "fs-16"], ["src", "assets/img/bg/card-overlay-10.svg", "alt", "User Img"], [1, "avatar", "bg-info", "rounded"], [1, "isax", "isax-timer", "fs-16"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], ["src", "assets/img/bg/card-overlay-09.svg", "alt", "User Img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "code"], ["mat-sort-header", "product"], ["mat-sort-header", "category"], ["mat-sort-header", "unit"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "text-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function InventoryReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Inventory Report");
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
      \u0275\u0275text(24, "Total Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 15);
      \u0275\u0275text(26, "$8,500,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "span", 16);
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "p", 18)(31, "span", 19);
      \u0275\u0275element(32, "i", 20);
      \u0275\u0275text(33, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " from last month ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 21);
      \u0275\u0275element(36, "img", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 10)(38, "div", 11)(39, "div", 12)(40, "div", 13)(41, "div")(42, "p", 14);
      \u0275\u0275text(43, "Low Stock Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h6", 15);
      \u0275\u0275text(45, "25 Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "span", 23);
      \u0275\u0275element(48, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "p", 18)(50, "span", 19);
      \u0275\u0275element(51, "i", 20);
      \u0275\u0275text(52, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " from last month ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 21);
      \u0275\u0275element(55, "img", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "div", 10)(57, "div", 11)(58, "div", 12)(59, "div", 13)(60, "div")(61, "p", 14);
      \u0275\u0275text(62, "Out-of-Stock Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h6", 15);
      \u0275\u0275text(64, "10 Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div")(66, "span", 26);
      \u0275\u0275element(67, "i", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "p", 18)(69, "span", 19);
      \u0275\u0275element(70, "i", 20);
      \u0275\u0275text(71, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " from last month ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 21);
      \u0275\u0275element(74, "img", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 10)(76, "div", 11)(77, "div", 12)(78, "div", 13)(79, "div")(80, "p", 14);
      \u0275\u0275text(81, "Pending Reorders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h6", 15);
      \u0275\u0275text(83, "$750,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div")(85, "span", 29);
      \u0275\u0275element(86, "i", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "p", 18)(88, "span", 31);
      \u0275\u0275element(89, "i", 32);
      \u0275\u0275text(90, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, " from last month ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 21);
      \u0275\u0275element(93, "img", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(94, "div", 34)(95, "div", 35)(96, "div", 36)(97, "div", 37)(98, "div", 38)(99, "a", 39);
      \u0275\u0275element(100, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 41)(102, "label")(103, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryReportComponent_Template_input_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InventoryReportComponent_Template_input_ngModelChange_103_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(104, "app-date-range-picker-2");
      \u0275\u0275elementStart(105, "a", 43);
      \u0275\u0275element(106, "i", 44);
      \u0275\u0275text(107, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 45)(109, "div", 4)(110, "a", 46);
      \u0275\u0275element(111, "i", 47);
      \u0275\u0275text(112, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "ul", 48)(114, "li")(115, "label", 49);
      \u0275\u0275element(116, "i", 50)(117, "input", 51);
      \u0275\u0275elementStart(118, "span");
      \u0275\u0275text(119, "Code");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "li")(121, "label", 49);
      \u0275\u0275element(122, "i", 50)(123, "input", 51);
      \u0275\u0275elementStart(124, "span");
      \u0275\u0275text(125, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "li")(127, "label", 49);
      \u0275\u0275element(128, "i", 50)(129, "input", 51);
      \u0275\u0275elementStart(130, "span");
      \u0275\u0275text(131, "Category");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "li")(133, "label", 49);
      \u0275\u0275element(134, "i", 50)(135, "input", 51);
      \u0275\u0275elementStart(136, "span");
      \u0275\u0275text(137, "Unit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "li")(139, "label", 49);
      \u0275\u0275element(140, "i", 50)(141, "input", 51);
      \u0275\u0275elementStart(142, "span");
      \u0275\u0275text(143, "Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "li")(145, "label", 49);
      \u0275\u0275element(146, "i", 50)(147, "input", 51);
      \u0275\u0275elementStart(148, "span");
      \u0275\u0275text(149, "Selling Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "li")(151, "label", 49);
      \u0275\u0275element(152, "i", 50)(153, "input", 51);
      \u0275\u0275elementStart(154, "span");
      \u0275\u0275text(155, "Purchase Price");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(156, "div", 52)(157, "h6", 53);
      \u0275\u0275text(158, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "span", 54)(160, "span", 55);
      \u0275\u0275text(161, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(162, "Product Selected");
      \u0275\u0275elementStart(163, "span", 56);
      \u0275\u0275listener("click", function InventoryReportComponent_Template_span_click_163_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(164, "i", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "a", 58);
      \u0275\u0275listener("click", function InventoryReportComponent_Template_a_click_165_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(166, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "div", 59)(168, "table", 60);
      \u0275\u0275listener("matSortChange", function InventoryReportComponent_Template_table_matSortChange_168_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(169, "thead")(170, "tr")(171, "th", 61)(172, "div", 62);
      \u0275\u0275listener("click", function InventoryReportComponent_Template_div_click_172_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(173, "input", 63);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryReportComponent_Template_input_ngModelChange_173_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(174, "th", 64);
      \u0275\u0275text(175, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "th", 65);
      \u0275\u0275text(177, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "th", 66);
      \u0275\u0275text(179, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "th", 67);
      \u0275\u0275text(181, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "th", 61);
      \u0275\u0275text(183, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "th", 61);
      \u0275\u0275text(185, "Selling Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "th", 61);
      \u0275\u0275text(187, "Purchase Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(188, "tbody");
      \u0275\u0275repeaterCreate(189, InventoryReportComponent_For_190_Template, 25, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(191, InventoryReportComponent_Conditional_191_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(192, InventoryReportComponent_app_custom_pagination_192_Template, 1, 0, "app-custom-pagination", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 69)(194, "div", 70)(195, "div", 71)(196, "h6", 72);
      \u0275\u0275text(197, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "button", 73);
      \u0275\u0275element(199, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(200, "div", 75)(201, "form", 76)(202, "div", 34)(203, "label", 77);
      \u0275\u0275text(204, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 4)(206, "a", 78);
      \u0275\u0275text(207, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 79)(209, "div", 34)(210, "div", 80)(211, "span", 81);
      \u0275\u0275element(212, "i", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275element(213, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "ul", 34)(215, "li", 84)(216, "label", 85);
      \u0275\u0275element(217, "input", 86);
      \u0275\u0275text(218, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "a", 87);
      \u0275\u0275text(220, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "li")(222, "label", 88);
      \u0275\u0275element(223, "input", 89);
      \u0275\u0275elementStart(224, "span", 90);
      \u0275\u0275element(225, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(226, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "li")(228, "label", 88);
      \u0275\u0275element(229, "input", 89);
      \u0275\u0275elementStart(230, "span", 90);
      \u0275\u0275element(231, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(232, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "li")(234, "label", 88);
      \u0275\u0275element(235, "input", 89);
      \u0275\u0275elementStart(236, "span", 90);
      \u0275\u0275element(237, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275text(238, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li")(240, "label", 88);
      \u0275\u0275element(241, "input", 89);
      \u0275\u0275elementStart(242, "span", 90);
      \u0275\u0275element(243, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275text(244, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "li")(246, "label", 88);
      \u0275\u0275element(247, "input", 89);
      \u0275\u0275elementStart(248, "span", 90);
      \u0275\u0275element(249, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275text(250, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "li")(252, "label", 88);
      \u0275\u0275element(253, "input", 89);
      \u0275\u0275elementStart(254, "span", 90);
      \u0275\u0275element(255, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275text(256, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(257, "div", 97)(258, "div", 98)(259, "a", 99);
      \u0275\u0275text(260, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 98)(262, "a", 100);
      \u0275\u0275text(263, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(264, "div", 34)(265, "label", 77);
      \u0275\u0275text(266, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "div", 4)(268, "a", 78);
      \u0275\u0275text(269, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div", 79)(271, "div", 34)(272, "div", 80)(273, "span", 81);
      \u0275\u0275element(274, "i", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275element(275, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "ul", 34)(277, "li", 84)(278, "label", 85);
      \u0275\u0275element(279, "input", 86);
      \u0275\u0275text(280, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "a", 87);
      \u0275\u0275text(282, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "li")(284, "label", 88);
      \u0275\u0275element(285, "input", 89);
      \u0275\u0275text(286, " Smartphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "li")(288, "label", 88);
      \u0275\u0275element(289, "input", 89);
      \u0275\u0275text(290, " Headphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "li")(292, "label", 88);
      \u0275\u0275element(293, "input", 89);
      \u0275\u0275text(294, " Men's Apparel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "li")(296, "label", 88);
      \u0275\u0275element(297, "input", 89);
      \u0275\u0275text(298, " Footwear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "li")(300, "label", 88);
      \u0275\u0275element(301, "input", 89);
      \u0275\u0275text(302, " Kitchen ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "li")(304, "label", 88);
      \u0275\u0275element(305, "input", 89);
      \u0275\u0275text(306, " Cleaning ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "li")(308, "label", 88);
      \u0275\u0275element(309, "input", 89);
      \u0275\u0275text(310, " Skincare ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "li")(312, "label", 88);
      \u0275\u0275element(313, "input", 89);
      \u0275\u0275text(314, " Bike & Accessories ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(315, "div", 97)(316, "div", 98)(317, "a", 99);
      \u0275\u0275text(318, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "div", 98)(320, "a", 100);
      \u0275\u0275text(321, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(322, "div", 34)(323, "label", 77);
      \u0275\u0275text(324, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "mat-select", 101)(326, "mat-option", 102);
      \u0275\u0275text(327, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "mat-option", 102);
      \u0275\u0275text(329, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "mat-option", 102);
      \u0275\u0275text(331, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "mat-option", 102);
      \u0275\u0275text(333, "Liter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(334, "div", 34)(335, "label", 77);
      \u0275\u0275text(336, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "div", 4)(338, "a", 78);
      \u0275\u0275text(339, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "div", 79)(341, "div", 103)(342, "div", 104)(343, "span", 105);
      \u0275\u0275text(344, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "span", 105);
      \u0275\u0275text(346, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(347, "mat-slider", 106);
      \u0275\u0275element(348, "input", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "p");
      \u0275\u0275text(350, "Range : ");
      \u0275\u0275elementStart(351, "span", 108);
      \u0275\u0275text(352, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(353, "div", 109)(354, "div", 97)(355, "div", 98)(356, "a", 110);
      \u0275\u0275text(357, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div", 98)(359, "button", 111);
      \u0275\u0275listener("click", function InventoryReportComponent_Template_button_click_359_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(360, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(103);
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
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 191 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(155);
      \u0275\u0275property("displayWith", ctx.formatLabel);
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
    MatSortHeader,
    DateRangePicker2Component,
    MatSliderModule,
    MatSlider,
    MatSliderThumb
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryReportComponent, [{
    type: Component,
    args: [{ selector: "app-inventory-report", imports: [
      CommonModule,
      FormsModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component,
      MatSliderModule
    ], template: `			<!-- Start Content -->
			<div class="content-two">

				<!-- Page Header -->
				<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
					<div>
						<h6 class="mb-0">Inventory Report</h6>
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
				
				<!-- start row -->
				<div class="row">
					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="card position-relative">
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between mb-2 pb-1">
									<div>
										<p class="mb-1">Total Inventory</p>
										<h6 class="fs-16 fw-semibold mb-0">$8,500,000</h6>
									</div>
									<div>
										<span class="avatar bg-primary rounded">
											<i class="isax isax-dollar-circle fs-16"></i>
										</span>
									</div>
								</div>
                                <p class="fs-13 mb-0">
                                    <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month
                                </p>
								<span class="position-absolute start-0 top-0">
									<img src="assets/img/bg/card-overlay-12.svg" alt="User Img">
								</span>
							</div> <!-- end card body -->
						</div> <!-- end card -->
					</div> <!-- end col -->

					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="card position-relative">
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between mb-2 pb-1">
									<div>
										<p class="mb-1">Low Stock Items</p>
										<h6 class="fs-16 fw-semibold mb-0">25 Products</h6>
									</div>
									<div>
										<span class="avatar bg-success rounded">
											<i class="isax isax-bag-2 fs-16"></i>
										</span>
									</div>
								</div>
                                <p class="fs-13 mb-0">
                                    <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month
                                </p>
								<span class="position-absolute start-0 top-0">
									<img src="assets/img/bg/card-overlay-11.svg" alt="User Img">
								</span>
							</div> <!-- end card body -->
						</div> <!-- end card -->
					</div> <!-- end col -->

					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="card position-relative">
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between mb-2 pb-1">
									<div>
										<p class="mb-1">Out-of-Stock Items</p>
										<h6 class="fs-16 fw-semibold mb-0">10 Products</h6>
									</div>
									<div>
										<span class="avatar bg-warning rounded">
											<i class="isax isax-bag-timer fs-16"></i>
										</span>
									</div>
								</div>
                                <p class="fs-13 mb-0">
                                    <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month
                                </p>
								<span class="position-absolute start-0 top-0">
									<img src="assets/img/bg/card-overlay-10.svg" alt="User Img">
								</span>
							</div> <!-- end card body -->
						</div> <!-- end card -->
					</div> <!-- end col -->

					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="card position-relative">
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between mb-2 pb-1">
									<div>
										<p class="mb-1">Pending Reorders</p>
										<h6 class="fs-16 fw-semibold mb-0">$750,000</h6>
									</div>
									<div>
										<span class="avatar bg-info rounded">											
											<i class="isax isax-timer fs-16"></i>
										</span>
									</div>
								</div>
                                <p class="fs-13 mb-0">
                                    <span class="text-danger"><i class="isax isax-received text-danger me-1"></i>7.45%</span> from last month
                                </p>
								<span class="position-absolute start-0 top-0">
									<img src="assets/img/bg/card-overlay-09.svg" alt="User Img">
								</span>
							</div> <!-- end card body -->
						</div> <!-- end card -->
					</div> <!-- end col -->
				</div>
				<!-- end row -->

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
								<ul class="dropdown-menu  dropdown-menu">
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Code</span>
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
											<span>Selling Price</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Purchase Price</span>
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
				<!-- End Table Search -->
				
				<!-- Table List Start -->
				<div class="table-responsive">
					<table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
						<thead>
							<tr>
								<th class="no-sort">
									<div class="form-check form-check-md" (click)="selectAll(initChecked)">
										<input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
									</div>
								</th>
								<th mat-sort-header="code">Code</th>
								<th mat-sort-header="product">Product</th>
								<th mat-sort-header="category">Category</th>
								<th mat-sort-header="unit">Unit</th>
								<th class="no-sort">Quantity</th>
								<th class="no-sort">Selling Price</th>
								<th class="no-sort">Purchase Price</th>
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
                                   <a href="javascript:void(0);" class="text-default">PR00025</a> 
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
								<td class="text-dark">{{data.unit}}</td>
								<td>{{data.quantity}}</td>
								<td class="text-dark">\${{data.sellingPrice}}</td>
								<td class="text-dark">\${{data.purchasePrice}}</td>
							</tr>
						} @if(tableData.length === 0){
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryReportComponent, { className: "InventoryReportComponent", filePath: "src/app/features/reports/item-report/inventory-report/inventory-report.component.ts", lineNumber: 23 });
})();
export {
  InventoryReportComponent
};
//# sourceMappingURL=chunk-ULEOU2P3.js.map
