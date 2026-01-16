import {
  DateRangePicker2Component
} from "./chunk-XI2R5BYV.js";
import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
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
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
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

// src/app/features/reports/user-reports/supplier-reports/supplier-reports.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function SupplierReportsComponent_For_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 112)(2, "div", 113)(3, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierReportsComponent_For_187_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 115)(6, "a", 116);
    \u0275\u0275element(7, "img", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 118)(10, "a", 119);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.currency);
  }
}
function SupplierReportsComponent_Conditional_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 120);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SupplierReportsComponent_app_custom_pagination_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var SupplierReportsComponent = class _SupplierReportsComponent {
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
    this.data.getSupplier().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.supplierReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSupplier().subscribe((apiRes) => {
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
  static \u0275fac = function SupplierReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierReportsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierReportsComponent, selectors: [["app-supplier-reports"]], decls: 287, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card", "position-relative", "shadow-lg", "overflow-hidden"], ["src", "assets/img/reports/supplier-report-01.svg", "alt", "img", 1, "img-fluid", "supplier-report-01"], ["src", "assets/img/reports/supplier-report-02.svg", "alt", "img", 1, "img-fluid", "supplier-report-02"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "badge", "badge-soft-primary", "p-2", "rounder", "border", "border-primary"], [1, "isax", "isax-profile-2user", "fs-16"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "card", "shadow-lg", "position-relative", "overflow-hidden"], ["src", "assets/img/reports/supplier-report-03.svg", "alt", "img", 1, "img-fluid", "supplier-report-01"], ["src", "assets/img/reports/supplier-report-04.svg", "alt", "img", 1, "img-fluid", "supplier-report-02"], [1, "badge", "badge-soft-success", "p-2", "rounded", "border", "border-success"], ["src", "assets/img/reports/supplier-report-05.svg", "alt", "img", 1, "img-fluid", "supplier-report-01"], ["src", "assets/img/reports/supplier-report-06.svg", "alt", "img", 1, "img-fluid", "supplier-report-02"], [1, "badge", "badge-soft-warning", "p-2", "rounded", "border", "border-warning"], [1, "isax", "isax-dollar-circle", "fs-16"], ["src", "assets/img/reports/supplier-report-07.svg", "alt", "img", 1, "img-fluid", "supplier-report-01"], ["src", "assets/img/reports/supplier-report-08.svg", "alt", "img", 1, "img-fluid", "supplier-report-02"], [1, "badge", "badge-soft-danger", "p-2", "rounded", "border", "border-danger"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "supplier"], ["mat-sort-header", "phone"], ["mat-sort-header", "date"], ["mat-sort-header", "balance"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SupplierReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Supplier Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12);
      \u0275\u0275element(21, "img", 13)(22, "img", 14);
      \u0275\u0275elementStart(23, "div", 15)(24, "div", 16)(25, "div")(26, "p", 17);
      \u0275\u0275text(27, "Total Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h6", 18);
      \u0275\u0275text(29, "1,200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div")(31, "span", 19);
      \u0275\u0275element(32, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "p", 21)(34, "span", 22);
      \u0275\u0275element(35, "i", 23);
      \u0275\u0275text(36, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 11)(39, "div", 24);
      \u0275\u0275element(40, "img", 25)(41, "img", 26);
      \u0275\u0275elementStart(42, "div", 15)(43, "div", 16)(44, "div")(45, "p", 17);
      \u0275\u0275text(46, "New Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h6", 18);
      \u0275\u0275text(48, "135");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div")(50, "span", 27);
      \u0275\u0275element(51, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "p", 21)(53, "span", 22);
      \u0275\u0275element(54, "i", 23);
      \u0275\u0275text(55, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 11)(58, "div", 12);
      \u0275\u0275element(59, "img", 28)(60, "img", 29);
      \u0275\u0275elementStart(61, "div", 15)(62, "div", 16)(63, "div")(64, "p", 17);
      \u0275\u0275text(65, "Total Purchases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h6", 18);
      \u0275\u0275text(67, "$250,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div")(69, "span", 30);
      \u0275\u0275element(70, "i", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "p", 21)(72, "span", 22);
      \u0275\u0275element(73, "i", 23);
      \u0275\u0275text(74, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 11)(77, "div", 12);
      \u0275\u0275element(78, "img", 32)(79, "img", 33);
      \u0275\u0275elementStart(80, "div", 15)(81, "div", 16)(82, "div")(83, "p", 17);
      \u0275\u0275text(84, "Average Spend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "h6", 18);
      \u0275\u0275text(86, "$20,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div")(88, "span", 34);
      \u0275\u0275element(89, "i", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "p", 21)(91, "span", 22);
      \u0275\u0275element(92, "i", 23);
      \u0275\u0275text(93, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(94, " from last month ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "div", 35)(96, "div", 36)(97, "div", 37)(98, "div", 38)(99, "div", 39)(100, "a", 40);
      \u0275\u0275element(101, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 42)(103, "label")(104, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function SupplierReportsComponent_Template_input_ngModelChange_104_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SupplierReportsComponent_Template_input_ngModelChange_104_listener() {
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
      \u0275\u0275text(120, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "li")(122, "label", 50);
      \u0275\u0275element(123, "i", 51)(124, "input", 52);
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "li")(128, "label", 50);
      \u0275\u0275element(129, "i", 51)(130, "input", 52);
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "li")(134, "label", 50);
      \u0275\u0275element(135, "i", 51)(136, "input", 52);
      \u0275\u0275elementStart(137, "span");
      \u0275\u0275text(138, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "li")(140, "label", 50);
      \u0275\u0275element(141, "i", 51)(142, "input", 53);
      \u0275\u0275elementStart(143, "span");
      \u0275\u0275text(144, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "li")(146, "label", 50);
      \u0275\u0275element(147, "i", 51)(148, "input", 53);
      \u0275\u0275elementStart(149, "span");
      \u0275\u0275text(150, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(151, "div", 54)(152, "h6", 55);
      \u0275\u0275text(153, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "span", 56)(155, "span", 57);
      \u0275\u0275text(156, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(157, "Vendors Selected");
      \u0275\u0275elementStart(158, "span", 58);
      \u0275\u0275listener("click", function SupplierReportsComponent_Template_span_click_158_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(159, "i", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "span", 56)(161, "span", 57);
      \u0275\u0275text(162, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, "Status Selected");
      \u0275\u0275elementStart(164, "span", 58);
      \u0275\u0275listener("click", function SupplierReportsComponent_Template_span_click_164_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(165, "i", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "a", 60);
      \u0275\u0275listener("click", function SupplierReportsComponent_Template_a_click_166_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(167, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 61)(169, "table", 62);
      \u0275\u0275listener("matSortChange", function SupplierReportsComponent_Template_table_matSortChange_169_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(170, "thead", 63)(171, "tr")(172, "th", 64)(173, "div", 65);
      \u0275\u0275listener("click", function SupplierReportsComponent_Template_div_click_173_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(174, "input", 66);
      \u0275\u0275twoWayListener("ngModelChange", function SupplierReportsComponent_Template_input_ngModelChange_174_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "th", 67);
      \u0275\u0275text(176, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th", 68);
      \u0275\u0275text(178, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "th", 69);
      \u0275\u0275text(180, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "th", 70);
      \u0275\u0275text(182, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "th", 64);
      \u0275\u0275text(184, "Currency");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "tbody");
      \u0275\u0275repeaterCreate(186, SupplierReportsComponent_For_187_Template, 20, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(188, SupplierReportsComponent_Conditional_188_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(189, SupplierReportsComponent_app_custom_pagination_189_Template, 1, 0, "app-custom-pagination", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "div", 72)(191, "div", 73)(192, "div", 74)(193, "h6", 75);
      \u0275\u0275text(194, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "button", 76);
      \u0275\u0275element(196, "i", 77);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div", 78)(198, "form", 79)(199, "div", 35)(200, "label", 80);
      \u0275\u0275text(201, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 4)(203, "a", 81);
      \u0275\u0275text(204, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 82)(206, "div", 35)(207, "div", 83)(208, "span", 84);
      \u0275\u0275element(209, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275element(210, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "ul", 35)(212, "li", 87)(213, "label", 88);
      \u0275\u0275element(214, "input", 89);
      \u0275\u0275text(215, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "a", 90);
      \u0275\u0275text(217, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "li")(219, "label", 91);
      \u0275\u0275element(220, "input", 53);
      \u0275\u0275elementStart(221, "span", 92);
      \u0275\u0275element(222, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275text(223, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "li")(225, "label", 91);
      \u0275\u0275element(226, "input", 53);
      \u0275\u0275elementStart(227, "span", 92);
      \u0275\u0275element(228, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275text(229, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li")(231, "label", 91);
      \u0275\u0275element(232, "input", 53);
      \u0275\u0275elementStart(233, "span", 92);
      \u0275\u0275element(234, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275text(235, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 91);
      \u0275\u0275element(238, "input", 53);
      \u0275\u0275elementStart(239, "span", 92);
      \u0275\u0275element(240, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275text(241, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li")(243, "label", 91);
      \u0275\u0275element(244, "input", 53);
      \u0275\u0275elementStart(245, "span", 92);
      \u0275\u0275element(246, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275text(247, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(248, "div", 98)(249, "div", 99)(250, "a", 100);
      \u0275\u0275text(251, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "div", 99)(253, "a", 101);
      \u0275\u0275text(254, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(255, "div", 35)(256, "label", 80);
      \u0275\u0275text(257, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div", 102);
      \u0275\u0275element(259, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 35)(261, "label", 80);
      \u0275\u0275text(262, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "div", 4)(264, "a", 81);
      \u0275\u0275text(265, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "div", 82)(267, "div", 103)(268, "div", 104)(269, "span", 105);
      \u0275\u0275text(270, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "span", 105);
      \u0275\u0275text(272, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "mat-slider", 106);
      \u0275\u0275element(274, "input", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "p");
      \u0275\u0275text(276, "Range : ");
      \u0275\u0275elementStart(277, "span", 108);
      \u0275\u0275text(278, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(279, "div", 109)(280, "div", 98)(281, "div", 99)(282, "a", 110);
      \u0275\u0275text(283, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "div", 99)(285, "button", 111);
      \u0275\u0275listener("click", function SupplierReportsComponent_Template_button_click_285_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(286, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(104);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(47);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 188 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(84);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, DateRangePickerComponent, DateRangePicker2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierReportsComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-reports", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      DateRangePickerComponent,
      DateRangePicker2Component
    ], template: `			<!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6 class="mb-0">Supplier Report</h6>
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
						<div class="col-xl-3 col-lg-6 col-md-6">
							<div class="card position-relative shadow-lg overflow-hidden">
								<img src="assets/img/reports/supplier-report-01.svg" alt="img" class="img-fluid supplier-report-01">
								<img src="assets/img/reports/supplier-report-02.svg" alt="img" class="img-fluid supplier-report-02">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between mb-2">
										<div>
											<p class="mb-1">Total Supplier</p>
											<h6 class="fs-16 fw-semibold mb-0">1,200</h6>
										</div>
										<div>
											<span class="badge badge-soft-primary p-2 rounder border border-primary">
												<i class="isax isax-profile-2user fs-16"></i>
											</span>
										</div>
									</div>
									<p class="fs-13 mb-0">
										<span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month
									</p>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-6 col-md-6">
							<div class="card shadow-lg position-relative overflow-hidden">
								<img src="assets/img/reports/supplier-report-03.svg" alt="img" class="img-fluid supplier-report-01">
								<img src="assets/img/reports/supplier-report-04.svg" alt="img" class="img-fluid supplier-report-02">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between mb-2">
										<div>
											<p class="mb-1">New Supplier</p>
											<h6 class="fs-16 fw-semibold mb-0">135</h6>
										</div>
										<div>
											<span class="badge badge-soft-success p-2 rounded border border-success">
												<i class="isax isax-profile-2user fs-16"></i>
											</span>
										</div>
									</div>
									<p class="fs-13 mb-0">
										<span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month
									</p>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-6 col-md-6">
							<div class="card position-relative shadow-lg overflow-hidden">
								<img src="assets/img/reports/supplier-report-05.svg" alt="img" class="img-fluid supplier-report-01">
								<img src="assets/img/reports/supplier-report-06.svg" alt="img" class="img-fluid supplier-report-02">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between mb-2">
										<div>
											<p class="mb-1">Total Purchases</p>
											<h6 class="fs-16 fw-semibold mb-0">$250,000</h6>
										</div>
										<div>
											<span class="badge badge-soft-warning p-2 rounded border border-warning">
												<i class="isax isax-dollar-circle fs-16"></i>
											</span>
										</div>
									</div>
									<p class="fs-13 mb-0">
										<span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month
									</p>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-6 col-md-6">
							<div class="card position-relative shadow-lg overflow-hidden">
								<img src="assets/img/reports/supplier-report-07.svg" alt="img" class="img-fluid supplier-report-01">
								<img src="assets/img/reports/supplier-report-08.svg" alt="img" class="img-fluid supplier-report-02">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between mb-2">
										<div>
											<p class="mb-1">Average Spend</p>
											<h6 class="fs-16 fw-semibold mb-0">$20,000</h6>
										</div>
										<div>
											<span class="badge badge-soft-danger p-2 rounded border border-danger">
												<i class="isax isax-dollar-circle fs-16"></i>
											</span>
										</div>
									</div>
									<p class="fs-13 mb-0">
										<span class="text-success"><i class="isax isax-send text-success me-1"></i>7.45%</span> from last month
									</p>
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
											<span>ID</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Date</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Vendor</span>
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
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span>Status</span>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
                    <!-- Filter Info -->
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Vendors Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
                    </div>
                    <!-- /Filter Info -->
					 
				</div>
				<!-- /Table Search -->

                <!-- Table List -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead class="thead-light">
                            <tr>
                                <th class="no-sort">
                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                    </div>
                                </th>
                                <th mat-sort-header="supplier">Supplier</th>
                                <th mat-sort-header="phone">Phone</th>
                                <th mat-sort-header="date">Created On</th>
                                <th mat-sort-header="balance">Balance</th>
                                <th class="no-sort">Currency</th>
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
                                            <img src="assets/img/profiles/{{data.image}}" class="rounded-circle" alt="img">
                                        </a>
                                        <div>
                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.supplier}}</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td>{{data.phone}}</td>
                                <td>{{data.createdOn}}</td>
                                <td>{{data.balance}}</td>
                                <td>{{data.currency}}</td>
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
                        <label class="form-label">Vendor</label>
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
                                            <span class="avatar avatar-sm rounded-circle me-2">
                                                <img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                            </span>Emily Clark
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2">
                                                <img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                            </span>Sophia White
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2">
                                                <img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                            </span>Michael Johnson
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2">
                                                <img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                            </span>Olivia Harris
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2">
                                                <img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                            </span>David Anderson
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
                        <label class="form-label">Date Range</label>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierReportsComponent, { className: "SupplierReportsComponent", filePath: "src/app/features/reports/user-reports/supplier-reports/supplier-reports.component.ts", lineNumber: 23 });
})();
export {
  SupplierReportsComponent
};
//# sourceMappingURL=chunk-WOMT6W2H.js.map
