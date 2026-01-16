import {
  DateRangePicker2Component
} from "./chunk-XI2R5BYV.js";
import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
import {
  MatSliderModule
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
  Router,
  RouterLink
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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/transaction-report/quotation-report/quotation-report.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function QuotationReportComponent_For_180_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 110)(2, "div", 111)(3, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function QuotationReportComponent_For_180_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 113);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 18)(9, "a", 114);
    \u0275\u0275element(10, "img", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 116)(13, "a", 117);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 118);
    \u0275\u0275text(19);
    \u0275\u0275element(20, "i", 119);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.quotationId);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Declined" ? "badge-soft-danger" : data_r2.status === "Sent" ? "badge-soft-info" : data_r2.status === "Expired" ? "bg-light text-dark" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Declined" ? "isax-close-circle4" : data_r2.status === "Sent" ? "isax-arrow-right-2" : data_r2.status === "Expired" ? "isax-timer-pause" : "isax-tick-circle");
  }
}
function QuotationReportComponent_Conditional_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 120);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function QuotationReportComponent_app_custom_pagination_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var QuotationReportComponent = class _QuotationReportComponent {
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
    this.data.getQuotationReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.quotationReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getQuotationReport().subscribe((apiRes) => {
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
  static \u0275fac = function QuotationReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuotationReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuotationReportComponent, selectors: [["app-quotation-report"]], decls: 307, vars: 15, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-12", "d-flex"], [1, "row", "flex-fill"], [1, "col-xl-3", "col-lg-6", "col-md-6", "d-flex"], [1, "card", "invoice-report", "flex-fill"], [1, "invoice-report-badge"], [1, "card-body", "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "flex-column", "overflow-hidden"], [1, "fs-14", "fw-normal", "text-truncate", "mb-1"], [1, "d-flex", "align-items-center"], [1, "fs-16", "fw-semibold", "me-2", "mb-0"], [1, "badge", "badge-sm", "badge-soft-success", "me-3"], [1, "isax", "isax-arrow-up-15"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "avatar", "avatar-md", "br-5", "d-flex", "align-items-center", "justify-content-center", "bg-transparent-primary", "border", "border-primary"], [1, "text-primary", "d-flex"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "invoice-report-badge-success"], [1, "avatar", "avatar-md", "br-5", "d-flex", "align-items-center", "justify-content-center", "bg-transparent-success", "border", "border-success"], [1, "text-success", "d-flex"], [1, "isax", "isax-tick-circle4", "fs-16"], [1, "invoice-report-badge-warning"], [1, "avatar", "avatar-md", "br-5", "d-flex", "align-items-center", "justify-content-center", "border", "border-warning"], [1, "text-warning", "d-flex"], [1, "isax", "isax-timer"], [1, "invoice-report-bg-danger"], [1, "avatar", "avatar-md", "br-5", "d-flex", "align-items-center", "justify-content-center", "bg-transparent-danger", "border", "border-danger"], [1, "text-danger", "d-flex"], [1, "isax", "isax-close-circle4"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap", "flex-lg-nowrap", "flex-md-nowrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "date"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function QuotationReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Quotation Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13);
      \u0275\u0275element(22, "span", 14);
      \u0275\u0275elementStart(23, "div", 15)(24, "div", 16)(25, "div")(26, "div")(27, "span", 17);
      \u0275\u0275text(28, "Total Quotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 18)(30, "h5", 19);
      \u0275\u0275text(31, "250");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 20);
      \u0275\u0275text(33, "+5.62% ");
      \u0275\u0275element(34, "i", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 22)(36, "span", 23)(37, "span", 24);
      \u0275\u0275element(38, "i", 25);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(39, "div", 12)(40, "div", 13);
      \u0275\u0275element(41, "span", 26);
      \u0275\u0275elementStart(42, "div", 15)(43, "div", 16)(44, "div")(45, "div")(46, "span", 17);
      \u0275\u0275text(47, "Accecpted Quotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "h5", 19);
      \u0275\u0275text(50, "185");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 20);
      \u0275\u0275text(52, "+5.62% ");
      \u0275\u0275element(53, "i", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "div", 22)(55, "span", 27)(56, "span", 28);
      \u0275\u0275element(57, "i", 29);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(58, "div", 12)(59, "div", 13);
      \u0275\u0275element(60, "span", 30);
      \u0275\u0275elementStart(61, "div", 15)(62, "div", 16)(63, "div")(64, "div")(65, "span", 17);
      \u0275\u0275text(66, "Pending Quotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 18)(68, "h5", 19);
      \u0275\u0275text(69, "50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 20);
      \u0275\u0275text(71, "+5.62% ");
      \u0275\u0275element(72, "i", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(73, "div", 22)(74, "span", 31)(75, "span", 32);
      \u0275\u0275element(76, "i", 33);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(77, "div", 12)(78, "div", 13);
      \u0275\u0275element(79, "span", 34);
      \u0275\u0275elementStart(80, "div", 15)(81, "div", 16)(82, "div")(83, "div")(84, "span", 17);
      \u0275\u0275text(85, "Rejected Quotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 18)(87, "h5", 19);
      \u0275\u0275text(88, "15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "span", 20);
      \u0275\u0275text(90, "+5.62% ");
      \u0275\u0275element(91, "i", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(92, "div", 22)(93, "span", 35)(94, "span", 36);
      \u0275\u0275element(95, "i", 37);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(96, "div", 38)(97, "div", 39)(98, "div", 40)(99, "div", 41)(100, "div", 42)(101, "a", 43);
      \u0275\u0275element(102, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 45)(104, "label")(105, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationReportComponent_Template_input_ngModelChange_105_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function QuotationReportComponent_Template_input_ngModelChange_105_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(106, "app-date-range-picker-2");
      \u0275\u0275elementStart(107, "a", 47);
      \u0275\u0275element(108, "i", 48);
      \u0275\u0275text(109, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 49)(111, "div", 50)(112, "a", 51);
      \u0275\u0275element(113, "i", 52);
      \u0275\u0275text(114, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "ul", 53)(116, "li")(117, "label", 54);
      \u0275\u0275element(118, "i", 55)(119, "input", 56);
      \u0275\u0275elementStart(120, "span");
      \u0275\u0275text(121, "Account Holder Name");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "li")(123, "label", 54);
      \u0275\u0275element(124, "i", 55)(125, "input", 56);
      \u0275\u0275elementStart(126, "span");
      \u0275\u0275text(127, "Bank & Account No");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "li")(129, "label", 54);
      \u0275\u0275element(130, "i", 55)(131, "input", 56);
      \u0275\u0275elementStart(132, "span");
      \u0275\u0275text(133, "Credit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "li")(135, "label", 54);
      \u0275\u0275element(136, "i", 55)(137, "input", 57);
      \u0275\u0275elementStart(138, "span");
      \u0275\u0275text(139, "Debit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "li")(141, "label", 54);
      \u0275\u0275element(142, "i", 55)(143, "input", 56);
      \u0275\u0275elementStart(144, "span");
      \u0275\u0275text(145, "Balance");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(146, "div", 58)(147, "h6", 59);
      \u0275\u0275text(148, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "span", 60)(150, "span", 61);
      \u0275\u0275text(151, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(152, "Vendors Selected");
      \u0275\u0275elementStart(153, "span", 62);
      \u0275\u0275listener("click", function QuotationReportComponent_Template_span_click_153_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(154, "i", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "span", 60)(156, "span", 61);
      \u0275\u0275text(157, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(158, "Status Selected");
      \u0275\u0275elementStart(159, "span", 62);
      \u0275\u0275listener("click", function QuotationReportComponent_Template_span_click_159_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(160, "i", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "a", 64);
      \u0275\u0275listener("click", function QuotationReportComponent_Template_a_click_161_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(162, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 65)(164, "table", 66);
      \u0275\u0275listener("matSortChange", function QuotationReportComponent_Template_table_matSortChange_164_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(165, "thead", 67)(166, "tr")(167, "th", 68)(168, "div", 69);
      \u0275\u0275listener("click", function QuotationReportComponent_Template_div_click_168_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(169, "input", 70);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationReportComponent_Template_input_ngModelChange_169_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(170, "th", 68);
      \u0275\u0275text(171, "Quotation ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "th", 71);
      \u0275\u0275text(173, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "th", 72);
      \u0275\u0275text(175, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "th", 68);
      \u0275\u0275text(177, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "tbody");
      \u0275\u0275repeaterCreate(179, QuotationReportComponent_For_180_Template, 21, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(181, QuotationReportComponent_Conditional_181_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(182, QuotationReportComponent_app_custom_pagination_182_Template, 1, 0, "app-custom-pagination", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "div", 74)(184, "div", 75)(185, "div", 76)(186, "h6", 77);
      \u0275\u0275text(187, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "button", 78);
      \u0275\u0275element(189, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "div", 80)(191, "form", 81)(192, "div", 38)(193, "label", 82);
      \u0275\u0275text(194, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 50)(196, "a", 83);
      \u0275\u0275text(197, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 84)(199, "div", 38)(200, "div", 85)(201, "span", 86);
      \u0275\u0275element(202, "i", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275element(203, "input", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "ul", 38)(205, "li", 89)(206, "label", 90);
      \u0275\u0275element(207, "input", 91);
      \u0275\u0275text(208, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "a", 92);
      \u0275\u0275text(210, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "li")(212, "label", 93);
      \u0275\u0275element(213, "input", 57);
      \u0275\u0275elementStart(214, "span", 94);
      \u0275\u0275element(215, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275text(216, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "li")(218, "label", 93);
      \u0275\u0275element(219, "input", 57);
      \u0275\u0275elementStart(220, "span", 94);
      \u0275\u0275element(221, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275text(222, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "li")(224, "label", 93);
      \u0275\u0275element(225, "input", 57);
      \u0275\u0275elementStart(226, "span", 94);
      \u0275\u0275element(227, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275text(228, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "li")(230, "label", 93);
      \u0275\u0275element(231, "input", 57);
      \u0275\u0275elementStart(232, "span", 94);
      \u0275\u0275element(233, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275text(234, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "li")(236, "label", 93);
      \u0275\u0275element(237, "input", 57);
      \u0275\u0275elementStart(238, "span", 94);
      \u0275\u0275element(239, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275text(240, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "li")(242, "label", 93);
      \u0275\u0275element(243, "input", 57);
      \u0275\u0275elementStart(244, "span", 94);
      \u0275\u0275element(245, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275text(246, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(247, "div", 101)(248, "div", 102)(249, "a", 103);
      \u0275\u0275text(250, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "div", 102)(252, "a", 104);
      \u0275\u0275text(253, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(254, "div", 38)(255, "label", 105);
      \u0275\u0275text(256, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div", 106);
      \u0275\u0275element(258, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 38)(260, "label", 82);
      \u0275\u0275text(261, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "div", 50)(263, "a", 83);
      \u0275\u0275text(264, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div", 84)(266, "div", 38)(267, "div", 106);
      \u0275\u0275element(268, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "ul", 38)(270, "li", 89)(271, "label", 90);
      \u0275\u0275element(272, "input", 91);
      \u0275\u0275text(273, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "a", 92);
      \u0275\u0275text(275, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li")(277, "label", 93);
      \u0275\u0275element(278, "input", 57);
      \u0275\u0275text(279, " Acceped ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "li")(281, "label", 93);
      \u0275\u0275element(282, "input", 57);
      \u0275\u0275text(283, " Sent ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "li")(285, "label", 93);
      \u0275\u0275element(286, "input", 57);
      \u0275\u0275text(287, " Declined ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "label", 93);
      \u0275\u0275element(290, "input", 57);
      \u0275\u0275text(291, " Expired ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(292, "div", 101)(293, "div", 102)(294, "a", 103);
      \u0275\u0275text(295, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "div", 102)(297, "a", 104);
      \u0275\u0275text(298, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(299, "div", 107)(300, "div", 101)(301, "div", 102)(302, "a", 108);
      \u0275\u0275text(303, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 102)(305, "button", 109);
      \u0275\u0275listener("click", function QuotationReportComponent_Template_button_click_305_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(306, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(105);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 181 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, DateRangePickerComponent, RouterLink, DateRangePicker2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuotationReportComponent, [{
    type: Component,
    args: [{ selector: "app-quotation-report", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      DateRangePickerComponent,
      RouterLink,
      DateRangePicker2Component
    ], template: `			<!-- Start Content -->
			<div class="content-two">

<!-- Page Header -->
<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
    <div>
        <h6 class="mb-0">Quotation Report</h6>
    </div>
    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
        <div class="dropdown me-1">
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
    <div class="col-xl-12 d-flex">

        <!-- start row -->
        <div class="row flex-fill">
            <div class="col-xl-3 col-lg-6 col-md-6 d-flex">
                <div class="card invoice-report  flex-fill">
                    <span class="invoice-report-badge">
                    </span>
                    <div class="card-body d-flex flex-wrap align-items-center justify-content-between">
                        <div class="d-flex align-items-center flex-column overflow-hidden">
                            <div>
                                <div>
                                    <span class="fs-14 fw-normal text-truncate mb-1">Total Quotations</span>
                                    <div class="d-flex align-items-center">
                                        <h5 class="fs-16 fw-semibold me-2 mb-0">250</h5>
                                        <span class="badge badge-sm badge-soft-success me-3">+5.62% <i class="isax isax-arrow-up-15"></i></span>
                                    </div>
                                    
                                </div>		
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <span  class="avatar avatar-md br-5 d-flex align-items-center justify-content-center  bg-transparent-primary border border-primary">
                                <span class="text-primary d-flex"><i class=" isax isax-dollar-circle fs-16"></i></span>
                            </span>
                        </div>
                        
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-6 col-md-6 d-flex">
                <div class="card invoice-report  flex-fill">
                    <span class="invoice-report-badge-success">
                    </span>
                    <div class="card-body d-flex flex-wrap align-items-center justify-content-between">
                        <div class="d-flex align-items-center flex-column overflow-hidden">
                            <div>
                                <div>
                                    <span class="fs-14 fw-normal text-truncate mb-1">Accecpted Quotations</span>
                                    <div class="d-flex align-items-center">
                                        <h5 class="fs-16 fw-semibold me-2 mb-0">185</h5>
                                        <span class="badge badge-sm badge-soft-success me-3">+5.62% <i class="isax isax-arrow-up-15"></i></span>
                                    </div>
                                    
                                </div>		
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <span class="avatar avatar-md br-5 d-flex align-items-center justify-content-center  bg-transparent-success border border-success">
                                <span class="text-success d-flex"><i class=" isax isax-tick-circle4 fs-16"></i></span>
                            </span>
                        </div>
                        
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-6 col-md-6 d-flex">
                <div class="card invoice-report  flex-fill">
                    <span class="invoice-report-badge-warning">
                    </span>
                    <div class="card-body d-flex flex-wrap align-items-center justify-content-between">
                        <div class="d-flex align-items-center flex-column overflow-hidden">
                            <div>
                                <div>
                                    <span class="fs-14 fw-normal text-truncate mb-1">Pending Quotations</span>
                                    <div class="d-flex align-items-center">
                                        <h5 class="fs-16 fw-semibold me-2 mb-0">50</h5>
                                        <span class="badge badge-sm badge-soft-success me-3">+5.62% <i class="isax isax-arrow-up-15"></i></span>
                                    </div>
                                    
                                </div>		
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <span class="avatar avatar-md br-5 d-flex align-items-center justify-content-center  border border-warning">
                                <span class="text-warning d-flex"><i class="isax isax-timer"></i></span>
                            </span>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-6 col-md-6 d-flex">
                <div class="card invoice-report  flex-fill">
                    <span class="invoice-report-bg-danger">
                    </span>
                    <div class="card-body d-flex flex-wrap align-items-center justify-content-between">
                        <div class="d-flex align-items-center flex-column overflow-hidden">
                            <div>
                                <div>
                                    <span class="fs-14 fw-normal text-truncate mb-1">Rejected Quotations</span>
                                    <div class="d-flex align-items-center">
                                        <h5 class="fs-16 fw-semibold me-2 mb-0">15</h5>
                                        <span class="badge badge-sm badge-soft-success me-3">+5.62% <i class="isax isax-arrow-up-15"></i></span>
                                    </div>
                                    
                                </div>		
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <span  class="avatar avatar-md br-5 d-flex align-items-center justify-content-center bg-transparent-danger border border-danger">
                                <span class="text-danger d-flex"><i class="isax isax-close-circle4"></i></span>
                            </span>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div>
        </div>
        <!-- end row -->
        
    </div><!-- end col -->
</div>
<!-- end row -->
				
				<!-- Table Search -->
                <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="d-flex align-items-center gap-2 flex-wrap flex-lg-nowrap flex-md-nowrap">
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
                                            <span>Account Holder Name</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Bank & Account No</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Credit</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span>Debit</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Balance</span>
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
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
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
								<th class="no-sort">Quotation ID</th>
								<th mat-sort-header="customer">Customer</th>
								<th mat-sort-header="date">Created On</th>
								<th class="no-sort"	>Status</th>
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
									<a href="javascript:void(0);" class="link-default">{{data.quotationId}}</a>
								</td>
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
								<td>{{data.createdOn}}</td>
								<td>
									<span class="badge  d-inline-flex align-items-center"
                                    [ngClass]="data.status==='Declined'?'badge-soft-danger':data.status==='Sent'?'badge-soft-info':data.status==='Expired'?'bg-light text-dark':'badge-soft-success'">
                                    {{data.status}} 
                                    <i class="isax  ms-1"
                                    [ngClass]="data.status==='Declined'?'isax-close-circle4':data.status==='Sent'?'isax-arrow-right-2':data.status==='Expired'?'isax-timer-pause':'isax-tick-circle'"></i>
                                </span>
								</td>
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
						<label class="form-label">Customer</label>
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
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-18.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark
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
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Harris
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>David Anderson
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
						<label for="dateRangePicker" class="form-label">Date Range</label>
                        <div class="filter-daterange">
                            <app-date-range-picker></app-date-range-picker>
                        </div>
					</div>	
					<div class="mb-3">
						<label class="form-label">Status</label>
						<div class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
							<div class="dropdown-menu shadow-lg w-100 dropdown-info">							
								<div class="mb-3">
                                    <div class="filter-daterange">
                                        <app-date-range-picker></app-date-range-picker>
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
											Acceped
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Sent
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Declined
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Expired
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuotationReportComponent, { className: "QuotationReportComponent", filePath: "src/app/features/reports/transaction-report/quotation-report/quotation-report.component.ts", lineNumber: 22 });
})();
export {
  QuotationReportComponent
};
//# sourceMappingURL=chunk-6XNMF3B6.js.map
