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

// src/app/features/invantory-sales/invoices/recurring-invoices/recurring-invoices.component.ts
var _c0 = () => ({ standalone: true });
function RecurringInvoicesComponent_For_230_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 181)(3, "input", 182);
    \u0275\u0275twoWayListener("ngModelChange", function RecurringInvoicesComponent_For_230_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 183);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 184)(9, "a", 185);
    \u0275\u0275element(10, "img", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 187)(13, "a", 188);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 150);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 150);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td")(28, "span", 189);
    \u0275\u0275text(29);
    \u0275\u0275element(30, "i", 190);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td", 191)(32, "a", 192);
    \u0275\u0275element(33, "i", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ul", 6)(35, "li")(36, "a", 194);
    \u0275\u0275element(37, "i", 195);
    \u0275\u0275text(38, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "li")(40, "a", 196);
    \u0275\u0275element(41, "i", 197);
    \u0275\u0275text(42, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "li")(44, "a", 198);
    \u0275\u0275element(45, "i", 199);
    \u0275\u0275text(46, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.ID);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.Image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.Customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CreatedOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.RecurringCycle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.IssueDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.DueDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Paid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.DueAmount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.Status === "Cancelled" || data_r2.Status === "Overdue" ? "badge-soft-danger" : data_r2.Status === "Partially Paid" || data_r2.Status === "Draft" ? "badge-soft-info" : data_r2.Status === "Unpaid" ? "badge-soft-warning" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.Status === "Refunded" ? "isax-money-3" : data_r2.Status === "Cancelled" ? "isax-close-circle" : data_r2.Status === "Partially Paid" ? "isax-timer" : data_r2.Status === "Overdue" ? "isax-danger" : data_r2.Status === "Unpaid" ? "isax-slash" : data_r2.Status === "Draft" ? "isax-note" : " isax-tick-circle");
  }
}
function RecurringInvoicesComponent_Conditional_231_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 200);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function RecurringInvoicesComponent_app_custom_pagination_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var RecurringInvoicesComponent = class _RecurringInvoicesComponent {
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
  showFilter = false;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  row = true;
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getRecurringinvoices().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.recurringInvoices) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getRecurringinvoices().subscribe((apiRes) => {
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
  static \u0275fac = function RecurringInvoicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecurringInvoicesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurringInvoicesComponent, selectors: [["app-recurring-invoices"]], decls: 650, vars: 8, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative", "shadow-sm"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-2"], [1, "text-truncate"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold"], [1, "avatar", "avatar-lg", "bg-primary-subtle", "rounded-circle"], [1, "isax", "isax-maximize-circle", "fs-24", "text-primary"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-xs", "mb-2", "progress-animate"], [1, "progress-bar", "bg-primary", 2, "width", "80%"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "mb-1"], [1, "avatar", "avatar-lg", "bg-success-subtle", "rounded-circle"], [1, "isax", "isax-tick-circle", "fs-24", "text-success"], [1, "progress-bar", "bg-success", 2, "width", "80%"], [1, "avatar", "avatar-lg", "bg-warning-subtle", "rounded-circle"], [1, "isax", "isax-info-circle", "fs-24", "text-warning"], [1, "progress-bar", "bg-warning", 2, "width", "80%"], [1, "avatar", "avatar-lg", "bg-danger-subtle", "rounded-circle"], [1, "isax", "isax-dollar-circle", "fs-24", "text-danger"], [1, "progress-bar", "bg-danger", 2, "width", "30%"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "createdon"], ["mat-sort-header", "reccuring"], ["mat-sort-header", "issuedate"], ["mat-sort-header", "duedate"], ["mat-sort-header", "paid"], ["mat-sort-header", "dueamount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "mb-0"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-purple", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-orange", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "view_invoice", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-body"], [1, "d-flex", "mb-3", "pb-3", "align-items-center", "justify-content-between", "border-bottom"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "text-danger", "bg-transparent", "border-0", "outline-0", "p-0", "lh-sm"], [1, "isax", "isax-close-circle5", "fs-16"], [1, "d-flex", "align-items-center", "justify-content-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", ""], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2", "position-relative", "z-1"], [1, "me-4"], [1, "fs-14", "fw-semibold", "mb-1"], ["src", "assets/img/icons/not-paid.png", "alt", "", "width", "48", "height", "48"], ["src", "assets/img/invoice-logo.svg", "alt", ""], [1, "row", "gy-3", "position-relative", "z-1"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "badge-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "me-2"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "fs-14", "fw-semibold"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table"], [1, "thead-dark"], [1, "border-bottom", "mb-3"], [1, "col-xl-8", "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "me-3"], [1, "mb-2"], ["src", "assets/img/icons/qr.png", "alt", ""], [1, "col-xl-4", "col-lg-6"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "col-lg-7"], [1, "col-lg-5"], [1, "text-lg-end", "mb-3"], ["src", "assets/img/icons/sign.png", "alt", ""], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg", "flex-wrap", "gap-2"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_quotation", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-document-download", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function RecurringInvoicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Recurring Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 6)(11, "li")(12, "a", 7);
      \u0275\u0275text(13, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 7);
      \u0275\u0275text(16, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div")(18, "a", 8);
      \u0275\u0275element(19, "i", 9);
      \u0275\u0275text(20, "New Invoice ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "p", 16);
      \u0275\u0275text(28, "Total Recurring Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h6", 17);
      \u0275\u0275text(30, "950");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div")(32, "span", 18);
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275element(35, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 22)(37, "span", 23);
      \u0275\u0275element(38, "i", 24);
      \u0275\u0275text(39, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " from last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 11)(42, "div", 12)(43, "div", 13)(44, "div", 14)(45, "div")(46, "p", 25);
      \u0275\u0275text(47, "Paid Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "h6", 17);
      \u0275\u0275text(49, "800");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div")(51, "span", 26);
      \u0275\u0275element(52, "i", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 20);
      \u0275\u0275element(54, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 22)(56, "span", 23);
      \u0275\u0275element(57, "i", 24);
      \u0275\u0275text(58, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " from last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 11)(61, "div", 12)(62, "div", 13)(63, "div", 14)(64, "div")(65, "p", 25);
      \u0275\u0275text(66, "Expired Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h6", 17);
      \u0275\u0275text(68, "150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div")(70, "span", 29);
      \u0275\u0275element(71, "i", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 20);
      \u0275\u0275element(73, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 22)(75, "span", 23);
      \u0275\u0275element(76, "i", 24);
      \u0275\u0275text(77, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(78, " from last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 11)(80, "div", 12)(81, "div", 13)(82, "div", 14)(83, "div")(84, "p", 25);
      \u0275\u0275text(85, "Total Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "h6", 17);
      \u0275\u0275text(87, "\u20B9500,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div")(89, "span", 32);
      \u0275\u0275element(90, "i", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 20);
      \u0275\u0275element(92, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 22)(94, "span", 35);
      \u0275\u0275element(95, "i", 36);
      \u0275\u0275text(96, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, " from last month");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(98, "div", 37)(99, "div", 38)(100, "div", 39)(101, "div", 40)(102, "div", 41)(103, "a", 42);
      \u0275\u0275element(104, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 44)(106, "label")(107, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function RecurringInvoicesComponent_Template_input_ngModelChange_107_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RecurringInvoicesComponent_Template_input_ngModelChange_107_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(108, "a", 46);
      \u0275\u0275element(109, "i", 47);
      \u0275\u0275text(110, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 39)(112, "div", 48)(113, "a", 49);
      \u0275\u0275element(114, "i", 50);
      \u0275\u0275text(115, "Sort By : ");
      \u0275\u0275elementStart(116, "span", 51);
      \u0275\u0275text(117, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "ul", 52)(119, "li")(120, "a", 7);
      \u0275\u0275text(121, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "li")(123, "a", 7);
      \u0275\u0275text(124, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "div", 53)(126, "a", 54);
      \u0275\u0275element(127, "i", 55);
      \u0275\u0275text(128, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "ul", 56)(130, "li")(131, "label", 57);
      \u0275\u0275element(132, "i", 58)(133, "input", 59);
      \u0275\u0275elementStart(134, "span");
      \u0275\u0275text(135, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "li")(137, "label", 57);
      \u0275\u0275element(138, "i", 58)(139, "input", 59);
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "li")(143, "label", 57);
      \u0275\u0275element(144, "i", 58)(145, "input", 59);
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "li")(149, "label", 57);
      \u0275\u0275element(150, "i", 58)(151, "input", 60);
      \u0275\u0275elementStart(152, "span");
      \u0275\u0275text(153, "Recurring Cycle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "li")(155, "label", 57);
      \u0275\u0275element(156, "i", 58)(157, "input", 60);
      \u0275\u0275elementStart(158, "span");
      \u0275\u0275text(159, "Issue Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "li")(161, "label", 57);
      \u0275\u0275element(162, "i", 58)(163, "input", 60);
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, "Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "li")(167, "label", 57);
      \u0275\u0275element(168, "i", 58)(169, "input", 59);
      \u0275\u0275elementStart(170, "span");
      \u0275\u0275text(171, "Paid ($)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(172, "li")(173, "label", 57);
      \u0275\u0275element(174, "i", 58)(175, "input", 59);
      \u0275\u0275elementStart(176, "span");
      \u0275\u0275text(177, "Due Amount ($)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "li")(179, "label", 57);
      \u0275\u0275element(180, "i", 58)(181, "input", 59);
      \u0275\u0275elementStart(182, "span");
      \u0275\u0275text(183, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(184, "div", 61)(185, "h6", 62);
      \u0275\u0275text(186, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "span", 63)(188, "span", 64);
      \u0275\u0275text(189, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(190, "Customers Selected");
      \u0275\u0275elementStart(191, "span", 65);
      \u0275\u0275element(192, "i", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "span", 63)(194, "span", 64);
      \u0275\u0275text(195, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(196, "Status Selected");
      \u0275\u0275elementStart(197, "span", 65);
      \u0275\u0275element(198, "i", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "a", 67);
      \u0275\u0275text(200, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(201, "div", 68)(202, "div", 68)(203, "table", 69);
      \u0275\u0275listener("matSortChange", function RecurringInvoicesComponent_Template_table_matSortChange_203_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(204, "thead", 70)(205, "tr")(206, "th", 71)(207, "div", 72);
      \u0275\u0275listener("click", function RecurringInvoicesComponent_Template_div_click_207_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(208, "input", 73);
      \u0275\u0275twoWayListener("ngModelChange", function RecurringInvoicesComponent_Template_input_ngModelChange_208_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "th", 71);
      \u0275\u0275text(210, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "th", 74);
      \u0275\u0275text(212, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "th", 74);
      \u0275\u0275text(214, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "th", 75);
      \u0275\u0275text(216, "Recurring Cycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "th", 76);
      \u0275\u0275text(218, "Issue Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "th", 77);
      \u0275\u0275text(220, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "th", 78);
      \u0275\u0275text(222, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "th", 79);
      \u0275\u0275text(224, "Due Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "th", 71);
      \u0275\u0275text(226, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(227, "th", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "tbody");
      \u0275\u0275repeaterCreate(229, RecurringInvoicesComponent_For_230_Template, 47, 16, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(231, RecurringInvoicesComponent_Conditional_231_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(232, RecurringInvoicesComponent_app_custom_pagination_232_Template, 1, 0, "app-custom-pagination", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 81)(234, "div", 82)(235, "div", 83)(236, "h6", 84);
      \u0275\u0275text(237, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "button", 85);
      \u0275\u0275element(239, "i", 86);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "div", 87)(241, "form", 88)(242, "div", 37)(243, "label", 89);
      \u0275\u0275text(244, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div", 53)(246, "a", 90);
      \u0275\u0275text(247, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 91)(249, "div", 37)(250, "div", 92)(251, "span", 93);
      \u0275\u0275element(252, "i", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275element(253, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "ul", 37)(255, "li", 96)(256, "label", 97);
      \u0275\u0275element(257, "input", 98);
      \u0275\u0275text(258, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "a", 99);
      \u0275\u0275text(260, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "li")(262, "label", 100);
      \u0275\u0275element(263, "input", 60);
      \u0275\u0275elementStart(264, "span", 101);
      \u0275\u0275element(265, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275text(266, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "li")(268, "label", 100);
      \u0275\u0275element(269, "input", 60);
      \u0275\u0275elementStart(270, "span", 101);
      \u0275\u0275element(271, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275text(272, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "li")(274, "label", 100);
      \u0275\u0275element(275, "input", 60);
      \u0275\u0275elementStart(276, "span", 101);
      \u0275\u0275element(277, "img", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275text(278, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "li")(280, "label", 100);
      \u0275\u0275element(281, "input", 60);
      \u0275\u0275elementStart(282, "span", 101);
      \u0275\u0275element(283, "img", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275text(284, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(285, "div", 106)(286, "div", 107)(287, "a", 108);
      \u0275\u0275text(288, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "div", 107)(290, "a", 109);
      \u0275\u0275text(291, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(292, "div", 37)(293, "label", 89);
      \u0275\u0275text(294, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "div", 110);
      \u0275\u0275element(296, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "div", 37)(298, "label", 89);
      \u0275\u0275text(299, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "div", 53)(301, "a", 90);
      \u0275\u0275text(302, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "div", 91)(304, "div", 111)(305, "div", 112)(306, "span", 113);
      \u0275\u0275text(307, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "span", 113);
      \u0275\u0275text(309, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "mat-slider", 114);
      \u0275\u0275element(311, "input", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "p");
      \u0275\u0275text(313, "Range : ");
      \u0275\u0275elementStart(314, "span", 116);
      \u0275\u0275text(315, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(316, "div", 37)(317, "label", 89);
      \u0275\u0275text(318, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "div", 53)(320, "a", 90);
      \u0275\u0275text(321, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "div", 91)(323, "ul", 117)(324, "li")(325, "label", 100);
      \u0275\u0275element(326, "input", 60)(327, "i", 118);
      \u0275\u0275text(328, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "li")(330, "label", 100);
      \u0275\u0275element(331, "input", 60)(332, "i", 119);
      \u0275\u0275text(333, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "li")(335, "label", 100);
      \u0275\u0275element(336, "input", 60)(337, "i", 120);
      \u0275\u0275text(338, "Cancelled ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "li")(340, "label", 100);
      \u0275\u0275element(341, "input", 60)(342, "i", 121);
      \u0275\u0275text(343, "Partially Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "li")(345, "label", 100);
      \u0275\u0275element(346, "input", 60)(347, "i", 122);
      \u0275\u0275text(348, "Uncollectable ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(349, "div", 123)(350, "div", 106)(351, "div", 107)(352, "a", 124);
      \u0275\u0275text(353, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(354, "div", 107)(355, "button", 125);
      \u0275\u0275text(356, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(357, "div", 126)(358, "div", 127)(359, "div", 128)(360, "div", 129)(361, "div", 130)(362, "h5", 117);
      \u0275\u0275text(363, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "button", 131);
      \u0275\u0275element(365, "i", 132);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "div")(367, "div", 133)(368, "div", 134)(369, "a", 135);
      \u0275\u0275element(370, "i", 136);
      \u0275\u0275text(371, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "a", 135);
      \u0275\u0275element(373, "i", 137);
      \u0275\u0275text(374, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "a", 135);
      \u0275\u0275element(376, "i", 138);
      \u0275\u0275text(377, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(378, "div", 139)(379, "div", 140);
      \u0275\u0275element(380, "img", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "div", 142)(382, "div", 37)(383, "h4", 25);
      \u0275\u0275text(384, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "div", 134)(386, "div", 143)(387, "h6", 144);
      \u0275\u0275text(388, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "p");
      \u0275\u0275text(390, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "span");
      \u0275\u0275element(392, "img", 145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(393, "div", 37);
      \u0275\u0275element(394, "img", 146);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(395, "div", 147)(396, "div", 148)(397, "div")(398, "h6", 149);
      \u0275\u0275text(399, "Invoice Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "div")(401, "p", 25);
      \u0275\u0275text(402, "Invoice Number : ");
      \u0275\u0275elementStart(403, "span", 150);
      \u0275\u0275text(404, "INV215654");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(405, "p", 25);
      \u0275\u0275text(406, "Issued On : ");
      \u0275\u0275elementStart(407, "span", 150);
      \u0275\u0275text(408, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(409, "p", 25);
      \u0275\u0275text(410, "Due Date : ");
      \u0275\u0275elementStart(411, "span", 150);
      \u0275\u0275text(412, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(413, "p", 25);
      \u0275\u0275text(414, "Recurring Invoice : ");
      \u0275\u0275elementStart(415, "span", 150);
      \u0275\u0275text(416, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(417, "span", 151);
      \u0275\u0275text(418, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(419, "div", 148)(420, "div")(421, "h6", 149);
      \u0275\u0275text(422, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "div")(424, "h6", 144);
      \u0275\u0275text(425, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "p", 25);
      \u0275\u0275text(427, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "p", 25);
      \u0275\u0275text(429, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "p", 25);
      \u0275\u0275text(431, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "p", 25);
      \u0275\u0275text(433, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(434, "div", 148)(435, "div")(436, "h6", 149);
      \u0275\u0275text(437, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "div", 152)(439, "div", 153)(440, "div", 154)(441, "span");
      \u0275\u0275element(442, "img", 155);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(443, "h6", 156);
      \u0275\u0275text(444, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "p", 25);
      \u0275\u0275text(446, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "p", 25);
      \u0275\u0275text(448, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "p", 25);
      \u0275\u0275text(450, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "p", 117);
      \u0275\u0275text(452, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(453, "div", 37)(454, "h6", 37);
      \u0275\u0275text(455, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "div", 157)(457, "table", 158)(458, "thead", 159)(459, "tr")(460, "th");
      \u0275\u0275text(461, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "th");
      \u0275\u0275text(463, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "th");
      \u0275\u0275text(465, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "th");
      \u0275\u0275text(467, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "th");
      \u0275\u0275text(469, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "th");
      \u0275\u0275text(471, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "th");
      \u0275\u0275text(473, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "th");
      \u0275\u0275text(475, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(476, "tbody")(477, "tr")(478, "td");
      \u0275\u0275text(479, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "td", 150);
      \u0275\u0275text(481, "T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "td");
      \u0275\u0275text(483, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "td");
      \u0275\u0275text(485, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "td");
      \u0275\u0275text(487, "$200.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "td");
      \u0275\u0275text(489, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "td");
      \u0275\u0275text(491, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "td");
      \u0275\u0275text(493, "$396.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "tr")(495, "td");
      \u0275\u0275text(496, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "td", 150);
      \u0275\u0275text(498, "Office Chair");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "td");
      \u0275\u0275text(500, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "td");
      \u0275\u0275text(502, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "td");
      \u0275\u0275text(504, "$350.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "td");
      \u0275\u0275text(506, "5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "td");
      \u0275\u0275text(508, "$33.25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "td");
      \u0275\u0275text(510, "$365.75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(511, "tr")(512, "td");
      \u0275\u0275text(513, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "td", 150);
      \u0275\u0275text(515, "LED Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "td");
      \u0275\u0275text(517, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "td");
      \u0275\u0275text(519, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(520, "td");
      \u0275\u0275text(521, "$399.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "td");
      \u0275\u0275text(523, "2%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "td");
      \u0275\u0275text(525, "$39.10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "td");
      \u0275\u0275text(527, "$398.90");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(528, "tr")(529, "td");
      \u0275\u0275text(530, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(531, "td", 150);
      \u0275\u0275text(532, "Smartphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "td");
      \u0275\u0275text(534, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "td");
      \u0275\u0275text(536, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "td");
      \u0275\u0275text(538, "$100.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "td");
      \u0275\u0275text(540, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "td");
      \u0275\u0275text(542, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "td");
      \u0275\u0275text(544, "$396.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(545, "div", 160)(546, "div", 10)(547, "div", 161)(548, "div", 162)(549, "div", 163)(550, "p", 164);
      \u0275\u0275text(551, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "span");
      \u0275\u0275element(553, "img", 165);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(554, "div")(555, "h6", 164);
      \u0275\u0275text(556, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "div")(558, "p", 25);
      \u0275\u0275text(559, "Bank Name : ");
      \u0275\u0275elementStart(560, "span", 150);
      \u0275\u0275text(561, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(562, "p", 25);
      \u0275\u0275text(563, "Account Number : ");
      \u0275\u0275elementStart(564, "span", 150);
      \u0275\u0275text(565, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(566, "p", 25);
      \u0275\u0275text(567, "IFSC Code : ");
      \u0275\u0275elementStart(568, "span", 150);
      \u0275\u0275text(569, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(570, "p", 117);
      \u0275\u0275text(571, "Payment Reference : ");
      \u0275\u0275elementStart(572, "span", 150);
      \u0275\u0275text(573, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(574, "div", 166)(575, "div", 37)(576, "div", 96)(577, "h6", 156);
      \u0275\u0275text(578, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(579, "h6", 156);
      \u0275\u0275text(580, "$1,793.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(581, "div", 96)(582, "h6", 156);
      \u0275\u0275text(583, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "h6", 156);
      \u0275\u0275text(585, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(586, "div", 96)(587, "h6", 156);
      \u0275\u0275text(588, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(589, "h6", 156);
      \u0275\u0275text(590, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(591, "div", 167)(592, "h6", 156);
      \u0275\u0275text(593, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "h6", 168);
      \u0275\u0275text(595, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(596, "div", 167)(597, "h6");
      \u0275\u0275text(598, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "h6");
      \u0275\u0275text(600, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(601, "div")(602, "h6", 144);
      \u0275\u0275text(603, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(604, "p");
      \u0275\u0275text(605, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(606, "div", 10)(607, "div", 169)(608, "div", 37)(609, "div", 37)(610, "h6", 144);
      \u0275\u0275text(611, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(612, "p");
      \u0275\u0275text(613, "The Payment must be returned in the same condition.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(614, "div")(615, "h6", 144);
      \u0275\u0275text(616, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "p");
      \u0275\u0275text(618, "All charges are final and include applicable taxes, fees, and additional costs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(619, "div", 170)(620, "div", 171)(621, "span");
      \u0275\u0275element(622, "img", 172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(623, "h6", 144);
      \u0275\u0275text(624, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "p");
      \u0275\u0275text(626, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(627, "div", 173)(628, "div")(629, "h6", 144);
      \u0275\u0275text(630, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "p");
      \u0275\u0275text(632, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(633, "div");
      \u0275\u0275element(634, "img", 146);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(635, "div", 174)(636, "div", 175)(637, "div", 128)(638, "div", 176)(639, "div", 37);
      \u0275\u0275element(640, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(641, "h6", 25);
      \u0275\u0275text(642, "Delete Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(643, "p", 37);
      \u0275\u0275text(644, "Are you sure, you want to delete invoice?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(645, "div", 178)(646, "a", 179);
      \u0275\u0275text(647, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(648, "a", 180);
      \u0275\u0275text(649, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(89);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(101);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(21);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 231 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(78);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [
    MatSliderModule,
    MatSlider,
    MatSliderThumb,
    DateRangePickerComponent,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    MatSortHeader,
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
    RouterLink
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurringInvoicesComponent, [{
    type: Component,
    args: [{ selector: "app-recurring-invoices", imports: [
      MatSliderModule,
      DateRangePickerComponent,
      CustomPaginationComponent,
      MatSortModule,
      CommonModule,
      FormsModule,
      RouterLink
    ], template: `			<!-- Start Container -->
			<div class="content-two">

				<!-- Start Page Header -->
				<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
					<div>
						<h6>Recurring Invoices</h6>
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
                        <div>
							<a [routerLink]="routes.addInvoice" class="btn btn-primary d-flex align-items-center">
								<i class="isax isax-add-circle5 me-1"></i>New Invoice
							</a>
						</div>
					</div>
				</div>
				<!-- End Page Header -->

				<!-- start row -->
                <div class="row">
					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="card position-relative shadow-sm">
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between mb-2 pb-2">
									<div class="text-truncate">
										<p class="mb-1 text-truncate">Total Recurring Invoices</p>
										<h6 class="fs-16 fw-semibold">950</h6>
									</div>
									<div>
										<span class="avatar avatar-lg bg-primary-subtle rounded-circle">
											<i class="isax isax-maximize-circle fs-24 text-primary"></i>
										</span>
									</div>
								</div>
                                <div class="progress progress-xs mb-2 progress-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-primary" style="width: 80%">
                                    </div>
                                </div>
								<p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month</p>
							</div><!-- end card body -->
						</div><!-- end card -->
					</div><!-- end col -->
                    <div class="col-xl-3 col-lg-4 col-md-6">
						<div class="card position-relative shadow-sm">
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between mb-2 pb-2">
									<div>
										<p class="mb-1">Paid Invoices</p>
										<h6 class="fs-16 fw-semibold">800</h6>
									</div>
									<div>
										<span class="avatar avatar-lg bg-success-subtle rounded-circle">
											<i class="isax isax-tick-circle fs-24 text-success"></i>
										</span>
									</div>
								</div>
                                <div class="progress progress-xs mb-2 progress-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-success" style="width: 80%">
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month</p>	
							</div><!-- end card body -->
						</div><!-- end card -->
					</div><!-- end col -->
                    <div class="col-xl-3 col-lg-4 col-md-6">
						<div class="card position-relative shadow-sm">
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between mb-2 pb-2">
									<div>
										<p class="mb-1">Expired Invoices</p>
										<h6 class="fs-16 fw-semibold">150</h6>
									</div>
									<div>
										<span class="avatar avatar-lg bg-warning-subtle rounded-circle">
											<i class="isax isax-info-circle fs-24 text-warning"></i>
										</span>
									</div>
								</div>
                                <div class="progress progress-xs mb-2 progress-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning" style="width: 80%">
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month</p>
                            </div><!-- end card body -->
						</div><!-- end card -->
					</div><!-- end col -->
                    <div class="col-xl-3 col-lg-4 col-md-6">
						<div class="card position-relative shadow-sm">
							<div class="card-body">
								<div class="d-flex align-items-center justify-content-between mb-2 pb-2">
									<div>
										<p class="mb-1">Total Revenue</p>
										<h6 class="fs-16 fw-semibold">\u20B9500,000</h6>
									</div>
									<div>
										<span class="avatar avatar-lg bg-danger-subtle rounded-circle">
											<i class="isax isax-dollar-circle fs-24 text-danger"></i>
										</span>
									</div>
								</div>
                                <div class="progress progress-xs mb-2 progress-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-danger" style="width: 30%">
                                    </div>
                                </div>
                                <p class="fs-13 mb-0"><span class="text-danger"><i class="isax isax-received text-danger me-1"></i>7.45%</span> from last month</p>
                            </div><!-- end card body -->
						</div><!-- end card -->
					</div><!-- end col -->
				</div>
				<!-- end row -->
				
				<!-- Table Search -->
				<div class="mb-3">

					<div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
						<div class="d-flex align-items-center flex-wrap gap-2">
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
							<a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
								<i class="isax isax-filter me-1"></i>Filter
							</a>
						</div>
						<div class="d-flex align-items-center flex-wrap gap-2">
							<div class="dropdown me-2">
								<a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
									<i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>
								</a>
								<ul class="dropdown-menu  dropdown-menu-end">
									<li>
										<a href="javascript:void(0);" class="dropdown-item">Latest</a>
									</li>
									<li>
										<a href="javascript:void(0);" class="dropdown-item">Oldest</a>
									</li>
								</ul>
							</div>
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
											<span>Customer</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Created On</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span>Recurring Cycle</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span>Issue Date</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span>Due Date</span>
										</label>
									</li>
                                    <li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Paid ($)</span>
										</label>
									</li>
                                    <li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Due Amount ($)</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Status</span>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>	

                    <!-- Filter Info -->
					<div class="align-items-center gap-2 flex-wrap filter-info mt-3">
						<h6 class="fs-13 fw-semibold">Filters</h6>
						<span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Customers Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>					
						<span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Status Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>											
						<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
					</div>
					<!-- /Filter Info -->			
				</div>
				<!-- /Table Search -->
				
				
				<!-- Table List -->
				<div class="table-responsive">
                    <div class="table-responsive">
                        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                            <thead class="thead-light">
                                <tr>
                                    <th class="no-sort">
                                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                            <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">
                                        </div>
                                    </th>
                                    <th class="no-sort">ID</th>
                                    <th mat-sort-header="createdon">Customer</th>
                                    <th mat-sort-header="createdon">Created On</th>
                                    <th mat-sort-header="reccuring">Recurring Cycle</th>
                                    <th mat-sort-header="issuedate">Issue Date</th>
                                    <th mat-sort-header="duedate">Due Date</th>
                                    <th mat-sort-header="paid">Paid</th>
                                    <th mat-sort-header="dueamount">Due Amount</th>
                                    <th class="no-sort">Status</th>
                                    <th class="no-sort"></th>
                                </tr>
                            </thead>
                            <tbody>
                                @for (data of tableData;track data){
                                    <tr>
                                        <td>
                                            <div class="form-check form-check-md">
                                                <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">
                                            </div>
                                        </td>
                                        <td>
                                            <a href="javascript:void(0);" class="link-default">{{data.ID}}</a>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                                    <img src="assets/img/profiles/{{data.Image}}" class="rounded-circle" alt="img">
                                                </a>
                                                <div>
                                                    <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">{{data.Customer}}</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{data.CreatedOn}}</td>
                                        <td class="text-dark">{{data.RecurringCycle}}</td>
                                        <td>{{data.IssueDate}}</td>
                                        <td>{{data.DueDate}}</td>
                                        <td>{{data.Paid}}</td>
                                        <td class="text-dark">{{data.DueAmount}}</td>
                                        <td>
                                            <span class="badge d-inline-flex align-items-center" 
                                            [ngClass]="data.Status==='Cancelled' || data.Status==='Overdue'?'badge-soft-danger':data.Status==='Partially Paid'||data.Status==='Draft'?'badge-soft-info':data.Status==='Unpaid'?'badge-soft-warning':'badge-soft-success'">
                                                {{data.Status}} 
                                                <i class="isax ms-1" 
                                                [ngClass]="data.Status==='Refunded'?'isax-money-3':data.Status==='Cancelled'?'isax-close-circle':data.Status==='Partially Paid'?'isax-timer':data.Status==='Overdue'?'isax-danger':data.Status==='Unpaid'?'isax-slash':data.Status==='Draft'?'isax-note':' isax-tick-circle'"></i>
                                            </span>
                                        </td>
                                        <td class="action-item">
                                            <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                <i class="isax isax-more"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_quotation"><i class="isax isax-eye me-2"></i>View</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                }
                                @if(tableData.length === 0){
                                    <tr>
                                      <td colspan="12" class="text-center text-dark">No matching records found</td>
                                    </tr>
                                  }
                            </tbody>
                        </table>
                    </div>
                    <app-custom-pagination *ngIf="row"></app-custom-pagination>
				</div>
				<!-- /Table List -->

			</div>
			<!-- End Container -->


            <!-- Filter -->
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
						<label class="form-label">Customers</label>
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
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark
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
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
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
					<div class="mb-3">
						<label class="form-label">Status</label>
						<div class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
							<div class="dropdown-menu shadow-lg w-100 dropdown-info">	
								<ul class="mb-0">
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-success me-1"></i>Paid
										</label>
									</li>
                                    <li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Pending
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Cancelled
										</label>
									</li>	
                                    <li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-purple me-1"></i>Partially Paid
										</label>
									</li>
                                    <li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-orange me-1"></i>Uncollectable
										</label>
									</li>						
								</ul>
							</div>
						</div>
					</div>
								
					<div class="offcanvas-footer">
						<div class="row g-2">
							<div class="col-6">
								<a href="javascript:void(0);"  class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
							</div>
							<div class="col-6">
								<button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<!-- /Filter -->

        <!-- Start view notes -->
        <div class="modal fade" id="view_invoice">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">			
                    <div class="modal-body">
                        <div class="d-flex mb-3 pb-3 align-items-center justify-content-between border-bottom">
                            <h5 class="mb-0">Preview</h5>
                            <button type="button" class="text-danger bg-transparent border-0 outline-0 p-0 lh-sm" data-bs-dismiss="modal" aria-label="Close">
                                <i class="isax isax-close-circle5 fs-16"></i>
                            </button>
                        </div>
                        <div>
                            <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
                                <div class="d-flex align-items-center flex-wrap row-gap-3">
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-document-like me-1"></i>Download PDF</a>
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-message-notif me-1"></i>Send Email</a>
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-printer me-1"></i>Print</a>								
                                </div>
                            </div>
                            <div class="bg-light p-4 rounded position-relative mb-3">
                                <div class="position-absolute top-0 end-0">
                                    <img src="assets/img/bg/card-bg.png" alt="">
                                </div>
                                <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2 position-relative z-1">
                                    <div class="mb-3">
                                        <h4 class="mb-1">Invoice</h4>
                                        <div class="d-flex align-items-center flex-wrap row-gap-3">
                                            <div class="me-4">
                                                <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                                <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                            </div>
                                            <span><img src="assets/img/icons/not-paid.png" alt="" width="48" height="48"></span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <img src="assets/img/invoice-logo.svg" alt="">
                                    </div>
                                </div>
								<!-- start row -->
                                <div class="row gy-3 position-relative z-1">
                                    <div class="col-lg-4">
                                        <div>
                                            <h6 class="mb-2 fs-16 fw-semibold">Invoice Details</h6>
                                            <div>
                                                <p class="mb-1">Invoice Number : <span class="text-dark">INV215654</span></p>
                                                <p class="mb-1">Issued On : <span class="text-dark">25 Jan 2025</span></p>
                                                <p class="mb-1">Due Date :  <span class="text-dark">31 Jan 2025</span></p>
                                                <p class="mb-1">Recurring Invoice  :  <span class="text-dark">Monthly</span></p>
                                                <span class="badge badge-danger">Due in 8 days</span>
                                            </div>
                                        </div>
                                    </div><!-- end col -->
                                    <div class="col-lg-4">
                                        <div>
                                            <h6 class="mb-2 fs-16 fw-semibold">Billing From</h6>
                                            <div>
                                                <h6 class="fs-14 fw-semibold mb-1">Kanakku Invoice Management</h6>
                                                <p class="mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>
                                                <p class="mb-1">Phone : +1 54664 75945</p>
                                                <p class="mb-1">Email : info&#64;example.com</p>
                                                <p class="mb-1">GST : 243E45767889</p>
                                            </div>
                                        </div>
                                    </div><!-- end col -->
                                    <div class="col-lg-4">
                                        <div>
                                            <h6 class="mb-2 fs-16 fw-semibold">Billing To</h6>                             
                                            <div class="bg-white rounded p-3">
                                                <div class="d-flex align-items-center mb-1">
                                                    <div class="me-2">
                                                        <span><img src="assets/img/icons/timesquare-icon.svg" alt="image" class="img-fluid rounded"></span>
                                                    </div>
                                                    <h6 class="fs-14 fw-semibold">Timesquare Tech</h6>
                                                </div>
                                                <p class="mb-1">299 Star Trek Drive, Florida, 3240, USA</p>
                                                <p class="mb-1">Phone : +1 54664 75945</p>
                                                <p class="mb-1">Email : info&#64;example.com</p>
                                                <p class="mb-0">GST : 243E45767889</p>
                                            </div>
                                        </div>
                                    </div><!-- end col -->
                                </div>
								<!-- end row -->
                            </div>
                            <div class="mb-3">
                                <h6 class="mb-3">Product / Service Items</h6>
                                <div class="table-responsive rounded border-bottom-0 border">
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>#</th>
                                                <th>Product/Service</th>
                                                <th>Quantity</th>
                                                <th>Unit</th>
                                                <th>Rate</th>
                                                <th>Discount</th>
                                                <th>Tax (%)</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td class="text-dark">T-Shirt</td>
                                                <td>2</td>
                                                <td>Pcs</td>
                                                <td>$200.00</td>
                                                <td>10%</td>
                                                <td>$36.00</td>
                                                <td>$396.00</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td class="text-dark">Office Chair</td>
                                                <td>1</td>
                                                <td>Pcs</td>
                                                <td>$350.00</td>
                                                <td>5%</td>
                                                <td>$33.25</td>
                                                <td>$365.75</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td class="text-dark">LED Monitor</td>
                                                <td>1</td>
                                                <td>Pcs</td>
                                                <td>$399.00</td>
                                                <td>2%</td>
                                                <td>$39.10</td>
                                                <td>$398.90</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td class="text-dark">Smartphone</td>
                                                <td>4</td>
                                                <td>Pcs</td>
                                                <td>$100.00</td>
                                                <td>10%</td>
                                                <td>$36.00</td>
                                                <td>$396.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="border-bottom mb-3">
								<!-- start row -->
                                <div class="row">
                                    <div class="col-xl-8 col-lg-6">
                                        <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                                            <div class="me-3">
                                                <p class="mb-2">Scan to the pay</p>
                                                <span><img src="assets/img/icons/qr.png" alt=""></span>
                                            </div>
                                            <div>
                                                <h6 class="mb-2">Bank Details</h6>
                                                <div>
                                                    <p class="mb-1">Bank Name :  <span class="text-dark">ABC Bank</span></p>
                                                    <p class="mb-1">Account Number :  <span class="text-dark">782459739212</span></p>
                                                    <p class="mb-1">IFSC Code :  <span class="text-dark">ABC0001345</span></p>
                                                    <p class="mb-0">Payment Reference :  <span class="text-dark">INV-20250220-001</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- end col -->
                                    <div class="col-xl-4 col-lg-6">
                                        <div class="mb-3">
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <h6 class="fs-14 fw-semibold">Amount</h6>
                                                <h6 class="fs-14 fw-semibold">$1,793.12</h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <h6 class="fs-14 fw-semibold">CGST (9%)</h6>
                                                <h6 class="fs-14 fw-semibold">$18</h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <h6 class="fs-14 fw-semibold">SGST (9%)</h6>
                                                <h6 class="fs-14 fw-semibold">$18</h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                                <h6 class="fs-14 fw-semibold">Discount</h6>
                                                <h6 class="fs-14 fw-semibold text-danger">$18</h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                                <h6>Total (USD)</h6>
                                                <h6>$596</h6>
                                            </div>
                                            <div>
                                                <h6 class="fs-14 fw-semibold mb-1">Total In Words</h6>
                                                <p>Five Hundred &amp; Ninety Six Dollars</p>
                                            </div>
                                        </div>
                                    </div><!-- end col -->
                                </div>
								<!-- end row -->
                            </div>
							<!-- start row -->
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <h6 class="fs-14 fw-semibold mb-1">Terms and Conditions</h6>
                                            <p>The Payment must be returned in the same condition.</p>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Notes</h6>
                                            <p>All charges are final and include applicable taxes, fees, and additional costs</p>
                                        </div>
                                    </div>
                                </div><!-- end col -->
                                <div class="col-lg-5">
                                    <div class="text-lg-end mb-3">
                                        <span><img src="assets/img/icons/sign.png" alt=""></span>
                                        <h6 class="fs-14 fw-semibold mb-1">Ted M. Davis</h6>
                                        <p>Manager</p>
                                    </div>
                                </div><!-- end col -->
                            </div>
							<!-- end row -->
                            <div class="bg-light d-flex align-items-center justify-content-between p-4 rounded card-bg flex-wrap gap-2">
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                    <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                </div>
                                <div>
                                    <img src="assets/img/invoice-logo.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div><!-- End modal body -->
                </div><!-- End modal content-->
			</div><!-- End modal dialog-->
        </div>
        <!-- End view notes -->

		<!-- Start Delete Modal  -->
		<div class="modal fade" id="delete_modal">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<div class="modal-content">
					<div class="modal-body text-center">
						<div class="mb-3">
							<img src="assets/img/icons/delete.svg" alt="img">
						</div>
						<h6 class="mb-1">Delete Invoice</h6>
						<p class="mb-3">Are you sure,  you want to delete invoice?</p>
						<div class="d-flex justify-content-center">
							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
						</div>
					</div><!-- End modal body-->
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- End Delete Modal  -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurringInvoicesComponent, { className: "RecurringInvoicesComponent", filePath: "src/app/features/invantory-sales/invoices/recurring-invoices/recurring-invoices.component.ts", lineNumber: 22 });
})();
export {
  RecurringInvoicesComponent
};
//# sourceMappingURL=chunk-FVA6NVEQ.js.map
