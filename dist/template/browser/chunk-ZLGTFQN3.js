import {
  DateRangePicker2Component
} from "./chunk-XI2R5BYV.js";
import {
  NgApexchartsModule
} from "./chunk-Z3POZ3YG.js";
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

// src/app/features/reports/finance-reports/payment-summary/payment-summary.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function PaymentSummaryComponent_For_195_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 118)(2, "div", 119)(3, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentSummaryComponent_For_195_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 121)(6, "a", 122);
    \u0275\u0275element(7, "img", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 124)(10, "a", 125);
    \u0275\u0275text(11, "Emily Clark");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td")(13, "a", 126);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 127);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 127);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.date, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.totalPrice, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.mode);
  }
}
function PaymentSummaryComponent_Conditional_196_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 128);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PaymentSummaryComponent_app_custom_pagination_197_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PaymentSummaryComponent = class _PaymentSummaryComponent {
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
    this.data.getPaymentSummary().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.paymentSummary) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPaymentSummary().subscribe((apiRes) => {
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
  static \u0275fac = function PaymentSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentSummaryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentSummaryComponent, selectors: [["app-payment-summary"]], decls: 347, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-12", "d-flex"], [1, "row", "flex-fill"], [1, "col-xl-3", "col-lg-6", "col-md-6", "d-flex"], [1, "card", "invoice-report", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "flex-column", "overflow-hidden"], [1, "fs-14", "fw-normal", "text-truncate", "mb-1"], [1, "fs-16", "fw-semibold", "me-2", "text-truncate", "mb-1"], [1, "badge", "badge-sm", "badge-soft-success", "me-3"], [1, "isax", "isax-arrow-up-15"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "avatar", "avatar-md", "br-5", "bg-transparent-primary", "border", "border-primary"], [1, "text-primary"], [1, "isax", "isax-dollar-circle", "fs-16", "custom-icons"], ["id", "payment_report_chart"], [1, "fs-16", "fw-semibold", "me-2", "mb-1"], [1, "avatar", "avatar-md", "br-5", "bg-transparent-success", "border", "border-success"], [1, "text-success"], [1, "isax", "isax-bank", "fs-16"], ["id", "payment_report_chart_2"], [1, "avatar", "avatar-md", "br-5", "border", "border-warning"], [1, "text-warning"], [1, "isax", "isax-empty-wallet"], ["id", "payment_report_chart_3"], [1, "avatar", "avatar-md", "br-5", "bg-transparent-danger", "border", "border-danger"], [1, "text-danger"], [1, "isax", "isax-money"], ["id", "payment_report_chart_4"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "payment"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], ["href", "javascript:void(0);", 1, "link-default"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PaymentSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Payment Summary Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div")(26, "div")(27, "span", 17);
      \u0275\u0275text(28, "Total Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "h5", 18);
      \u0275\u0275text(31, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 19);
      \u0275\u0275text(33, "+5.62% ");
      \u0275\u0275element(34, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 21)(36, "span", 22)(37, "span", 23);
      \u0275\u0275element(38, "i", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div");
      \u0275\u0275element(40, "div", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 12)(42, "div", 13)(43, "div", 14)(44, "div", 15)(45, "div", 16)(46, "div")(47, "div")(48, "span", 17);
      \u0275\u0275text(49, "Bank Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div")(51, "h5", 26);
      \u0275\u0275text(52, "$120,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 19);
      \u0275\u0275text(54, "+11.4%");
      \u0275\u0275element(55, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "div", 21)(57, "span", 27)(58, "span", 28);
      \u0275\u0275element(59, "i", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(60, "div", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 12)(62, "div", 13)(63, "div", 14)(64, "div", 15)(65, "div", 16)(66, "div")(67, "div")(68, "span", 17);
      \u0275\u0275text(69, "UPI & Digital Wallets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div")(71, "h5", 26);
      \u0275\u0275text(72, "$500,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 19);
      \u0275\u0275text(74, "+8.12%");
      \u0275\u0275element(75, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(76, "div", 21)(77, "span", 31)(78, "span", 32);
      \u0275\u0275element(79, "i", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "div");
      \u0275\u0275element(81, "div", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(82, "div", 12)(83, "div", 13)(84, "div", 14)(85, "div", 15)(86, "div", 16)(87, "div")(88, "div")(89, "span", 17);
      \u0275\u0275text(90, "Cash & Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "h5", 26);
      \u0275\u0275text(93, "$300,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span", 19);
      \u0275\u0275text(95, "+7.45");
      \u0275\u0275element(96, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(97, "div", 21)(98, "span", 35)(99, "span", 36);
      \u0275\u0275element(100, "i", 37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(101, "div");
      \u0275\u0275element(102, "div", 38);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(103, "div", 39)(104, "div", 40)(105, "div", 41)(106, "div", 42)(107, "div", 43)(108, "a", 44);
      \u0275\u0275element(109, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 46)(111, "label")(112, "input", 47);
      \u0275\u0275twoWayListener("ngModelChange", function PaymentSummaryComponent_Template_input_ngModelChange_112_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PaymentSummaryComponent_Template_input_ngModelChange_112_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(113, "app-date-range-picker-2");
      \u0275\u0275elementStart(114, "a", 48);
      \u0275\u0275element(115, "i", 49);
      \u0275\u0275text(116, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 50)(118, "div", 51)(119, "a", 52);
      \u0275\u0275element(120, "i", 53);
      \u0275\u0275text(121, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "ul", 54)(123, "li")(124, "label", 55);
      \u0275\u0275element(125, "i", 56)(126, "input", 57);
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275text(128, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "li")(130, "label", 55);
      \u0275\u0275element(131, "i", 56)(132, "input", 57);
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "li")(136, "label", 55);
      \u0275\u0275element(137, "i", 56)(138, "input", 57);
      \u0275\u0275elementStart(139, "span");
      \u0275\u0275text(140, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "li")(142, "label", 55);
      \u0275\u0275element(143, "i", 56)(144, "input", 57);
      \u0275\u0275elementStart(145, "span");
      \u0275\u0275text(146, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "li")(148, "label", 55);
      \u0275\u0275element(149, "i", 56)(150, "input", 58);
      \u0275\u0275elementStart(151, "span");
      \u0275\u0275text(152, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "li")(154, "label", 55);
      \u0275\u0275element(155, "i", 56)(156, "input", 58);
      \u0275\u0275elementStart(157, "span");
      \u0275\u0275text(158, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(159, "div", 59)(160, "h6", 60);
      \u0275\u0275text(161, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "span", 61)(163, "span", 62);
      \u0275\u0275text(164, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(165, "Vendors Selected");
      \u0275\u0275elementStart(166, "span", 63);
      \u0275\u0275listener("click", function PaymentSummaryComponent_Template_span_click_166_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(167, "i", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "span", 61)(169, "span", 62);
      \u0275\u0275text(170, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(171, "Status Selected");
      \u0275\u0275elementStart(172, "span", 63);
      \u0275\u0275listener("click", function PaymentSummaryComponent_Template_span_click_172_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(173, "i", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "a", 65);
      \u0275\u0275listener("click", function PaymentSummaryComponent_Template_a_click_174_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(175, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(176, "div", 66)(177, "table", 67);
      \u0275\u0275listener("matSortChange", function PaymentSummaryComponent_Template_table_matSortChange_177_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(178, "thead")(179, "tr")(180, "th", 68)(181, "div", 69);
      \u0275\u0275listener("click", function PaymentSummaryComponent_Template_div_click_181_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(182, "input", 70);
      \u0275\u0275twoWayListener("ngModelChange", function PaymentSummaryComponent_Template_input_ngModelChange_182_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "th", 71);
      \u0275\u0275text(184, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "th", 72);
      \u0275\u0275text(186, "Payment ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "th", 73);
      \u0275\u0275text(188, "Paid Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "th", 74);
      \u0275\u0275text(190, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "th", 68);
      \u0275\u0275text(192, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "tbody");
      \u0275\u0275repeaterCreate(194, PaymentSummaryComponent_For_195_Template, 21, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(196, PaymentSummaryComponent_Conditional_196_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(197, PaymentSummaryComponent_app_custom_pagination_197_Template, 1, 0, "app-custom-pagination", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 76)(199, "div", 77)(200, "div", 78)(201, "h6", 79);
      \u0275\u0275text(202, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "button", 80);
      \u0275\u0275element(204, "i", 81);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "div", 82)(206, "form", 83)(207, "div", 39)(208, "label", 84);
      \u0275\u0275text(209, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 51)(211, "a", 85);
      \u0275\u0275text(212, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div", 86)(214, "div", 39)(215, "div", 87)(216, "span", 88);
      \u0275\u0275element(217, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275element(218, "input", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "ul", 39)(220, "li", 91)(221, "label", 92);
      \u0275\u0275element(222, "input", 93);
      \u0275\u0275text(223, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "a", 94);
      \u0275\u0275text(225, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "li")(227, "label", 95);
      \u0275\u0275element(228, "input", 58);
      \u0275\u0275elementStart(229, "span", 96);
      \u0275\u0275element(230, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275text(231, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "li")(233, "label", 95);
      \u0275\u0275element(234, "input", 58);
      \u0275\u0275elementStart(235, "span", 96);
      \u0275\u0275element(236, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275text(237, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "li")(239, "label", 95);
      \u0275\u0275element(240, "input", 58);
      \u0275\u0275elementStart(241, "span", 96);
      \u0275\u0275element(242, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275text(243, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "li")(245, "label", 95);
      \u0275\u0275element(246, "input", 58);
      \u0275\u0275elementStart(247, "span", 96);
      \u0275\u0275element(248, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275text(249, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "li")(251, "label", 95);
      \u0275\u0275element(252, "input", 58);
      \u0275\u0275elementStart(253, "span", 96);
      \u0275\u0275element(254, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275text(255, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "li")(257, "label", 95);
      \u0275\u0275element(258, "input", 58);
      \u0275\u0275elementStart(259, "span", 96);
      \u0275\u0275element(260, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275text(261, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(262, "div", 103)(263, "div", 104)(264, "a", 105);
      \u0275\u0275text(265, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "div", 104)(267, "a", 106);
      \u0275\u0275text(268, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(269, "div", 39)(270, "label", 107);
      \u0275\u0275text(271, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "div", 108);
      \u0275\u0275element(273, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 39)(275, "label", 84);
      \u0275\u0275text(276, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "div", 51)(278, "a", 85);
      \u0275\u0275text(279, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "div", 86)(281, "div", 109)(282, "div", 110)(283, "span", 111);
      \u0275\u0275text(284, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "span", 111);
      \u0275\u0275text(286, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "mat-slider", 112);
      \u0275\u0275element(288, "input", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "p");
      \u0275\u0275text(290, "Range : ");
      \u0275\u0275elementStart(291, "span", 114);
      \u0275\u0275text(292, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(293, "div", 39)(294, "label", 84);
      \u0275\u0275text(295, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "div", 51)(297, "a", 85);
      \u0275\u0275text(298, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "div", 86)(300, "div", 39)(301, "div", 87)(302, "span", 88);
      \u0275\u0275element(303, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275element(304, "input", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "ul", 39)(306, "li", 91)(307, "label", 92);
      \u0275\u0275element(308, "input", 93);
      \u0275\u0275text(309, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "a", 94);
      \u0275\u0275text(311, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "li")(313, "label", 95);
      \u0275\u0275element(314, "input", 58);
      \u0275\u0275text(315, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "li")(317, "label", 95);
      \u0275\u0275element(318, "input", 58);
      \u0275\u0275text(319, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "li")(321, "label", 95);
      \u0275\u0275element(322, "input", 58);
      \u0275\u0275text(323, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "li")(325, "label", 95);
      \u0275\u0275element(326, "input", 58);
      \u0275\u0275text(327, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "li")(329, "label", 95);
      \u0275\u0275element(330, "input", 58);
      \u0275\u0275text(331, " Stripe ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(332, "div", 103)(333, "div", 104)(334, "a", 105);
      \u0275\u0275text(335, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(336, "div", 104)(337, "a", 106);
      \u0275\u0275text(338, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(339, "div", 115)(340, "div", 103)(341, "div", 104)(342, "a", 116);
      \u0275\u0275text(343, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "div", 104)(345, "button", 117);
      \u0275\u0275listener("click", function PaymentSummaryComponent_Template_button_click_345_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(346, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(112);
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
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 196 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(90);
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
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    MatSortHeader,
    NgApexchartsModule,
    MatSliderModule,
    MatSlider,
    MatSliderThumb,
    DateRangePickerComponent,
    RouterLink,
    DateRangePicker2Component
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentSummaryComponent, [{
    type: Component,
    args: [{ selector: "app-payment-summary", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      NgApexchartsModule,
      MatSliderModule,
      DateRangePickerComponent,
      RouterLink,
      DateRangePicker2Component
    ], template: `			<!-- Start conatiner -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6 class="mb-0">Payment Summary Report</h6>
                    </div>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
                        <div class="dropdown me-1">
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

				<!-- start row -->
                <div class="row">
                    <div class="col-xl-12 d-flex">

						<!-- start row -->
                        <div class="row flex-fill">
                            <div class="col-xl-3 col-lg-6 col-md-6 d-flex">
                                <div class="card invoice-report  flex-fill">
                                    <div class="card-body">
                                        <div class=" d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span class="fs-14 fw-normal text-truncate mb-1">Total Payments</span>
                                                        <div>
                                                            <h5 class="fs-16 fw-semibold me-2 text-truncate mb-1">$60,000</h5>
                                                            <span class="badge badge-sm badge-soft-success me-3">+5.62% <i class="isax isax-arrow-up-15"></i></span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                                                <span class="avatar avatar-md br-5  bg-transparent-primary border border-primary">
													<span class="text-primary"><i class=" isax isax-dollar-circle fs-16 custom-icons"></i></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div id="payment_report_chart"></div>
                                        </div>
                                    </div> <!-- end card body -->
                                </div> <!-- end card -->
                            </div> <!-- end col -->

                            <div class="col-xl-3 col-lg-6 col-md-6 d-flex">
                                <div class="card invoice-report flex-fill">
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span class="fs-14 fw-normal text-truncate mb-1">Bank Transfer</span>
                                                        <div>
                                                            <h5 class="fs-16 fw-semibold me-2 mb-1">$120,000</h5>
                                                            <span class="badge badge-sm badge-soft-success me-3">+11.4%<i class="isax isax-arrow-up-15"></i></span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                                                <span class="avatar avatar-md br-5  bg-transparent-success border border-success">
													<span class="text-success"><i class=" isax isax-bank fs-16"></i></span>
                                                </span>
                                            </div>

                                        </div>
                                        <div id="payment_report_chart_2"></div>
                                    </div> <!-- end card body -->
                                </div> <!-- card col -->
                            </div> <!-- end col -->

                            <div class="col-xl-3 col-lg-6 col-md-6 d-flex">
                                <div class="card invoice-report flex-fill">
                                    <div class="card-body">
                                        <div class=" d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span class="fs-14 fw-normal text-truncate mb-1">UPI & Digital Wallets</span>
                                                        <div>
                                                            <h5 class="fs-16 fw-semibold me-2 mb-1">$500,000</h5>
                                                            <span class="badge badge-sm badge-soft-success me-3">+8.12%<i class="isax isax-arrow-up-15"></i></span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                                                <span class="avatar avatar-md br-5  border border-warning">
													<span class="text-warning"><i class="isax isax-empty-wallet"></i></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div id="payment_report_chart_3"></div>
                                        </div>
                                    </div> <!-- end card body -->
                                </div> <!-- end card -->
                            </div>  <!-- end col -->

                            <div class="col-xl-3 col-lg-6 col-md-6 d-flex">
                                <div class="card invoice-report  flex-fill">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span class="fs-14 fw-normal text-truncate mb-1">Cash & Cheque</span>
                                                        <div>
                                                            <h5 class="fs-16 fw-semibold me-2 mb-1">$300,000</h5>
                                                            <span class="badge badge-sm badge-soft-success me-3">+7.45<i class="isax isax-arrow-up-15"></i></span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                                                <span class="avatar avatar-md br-5 bg-transparent-danger border border-danger">
													<span class="text-danger"><i class="isax isax-money"></i></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div id="payment_report_chart_4"></div>
                                        </div>
                                    </div> <!-- end card body -->
                                </div> <!-- end card -->
                            </div> <!-- end col -->
                        </div>
						<!-- end row -->

                    </div><!-- end col -->
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
                <!-- End Table Search -->

                <!-- End tartTable List -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead>
                            <tr>
                                <th class="no-sort">
                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                    </div>
                                </th>
                                <th mat-sort-header="customer">Customer</th>
                                <th mat-sort-header="payment">Payment ID</th>
                                <th mat-sort-header="date">Paid Date</th>
                                <th mat-sort-header="amount">Amount</th>
                                <th class="no-sort">Payment Mode</th>
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
                                        <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                            <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                                        </a>
                                        <div>
                                            <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a href="javascript:void(0);" class="link-default">{{data.sku}}</a>
                                </td>
                                <td>
                                    {{data.date}}
                                </td>
                                <td class="text-dark">
                                    {{data.totalPrice}}
                                </td>
                                <td class="text-dark">{{data.mode}}</td>
                            </tr>
                        } @if(tableData.length === 0){
                            <tr>
                              <td colspan="12" class="text-center text-dark">No matching records found</td>
                            </tr>
                          }

                        </tbody>
                    </table>
                </div>
                <!-- End Table List -->
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
                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
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
                        <label id="dateRangePicker" class="form-label">Date Range</label>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cash
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Check
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentSummaryComponent, { className: "PaymentSummaryComponent", filePath: "src/app/features/reports/finance-reports/payment-summary/payment-summary.component.ts", lineNumber: 25 });
})();
export {
  PaymentSummaryComponent
};
//# sourceMappingURL=chunk-ZLGTFQN3.js.map
