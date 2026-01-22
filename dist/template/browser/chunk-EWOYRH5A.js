import {
  DateRangePickerComponent
} from "./chunk-2I7DAYVQ.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-Z5WPXIQX.js";
import {
  CustomPaginationComponent
} from "./chunk-53DCEYLO.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-T4Z6NTOQ.js";
import {
  PaginationService
} from "./chunk-OQ3NIM27.js";
import {
  MatTableDataSource
} from "./chunk-L6DWDL26.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/customers/recurring-invoices/recurring-invoices.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function RecurringInvoicesComponent_For_205_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 174)(3, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function RecurringInvoicesComponent_For_205_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 176);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 143);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 143);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 177);
    \u0275\u0275text(21);
    \u0275\u0275element(22, "i", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 179)(24, "a", 180);
    \u0275\u0275element(25, "i", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul", 6)(27, "li")(28, "a", 182);
    \u0275\u0275element(29, "i", 183);
    \u0275\u0275text(30, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "li")(32, "a", 184);
    \u0275\u0275element(33, "i", 185);
    \u0275\u0275text(34, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li")(36, "a", 186);
    \u0275\u0275element(37, "i", 187);
    \u0275\u0275text(38, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.ID);
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
function RecurringInvoicesComponent_Conditional_206_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 188);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function RecurringInvoicesComponent_app_custom_pagination_207_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var RecurringInvoicesComponent = class _RecurringInvoicesComponent {
  data;
  router;
  pagination;
  showFilter = false;
  selectedFilter = [false];
  isFilter() {
    this.showFilter = !this.showFilter;
  }
  isSelectedFilter(index) {
    this.selectedFilter[index] = !this.selectedFilter[index];
  }
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
    this.data.getRecurringinvoices().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerRecurringInvoices) {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurringInvoicesComponent, selectors: [["app-recurring-invoices"]], decls: 625, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative", "shadow-sm"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-2"], [1, "text-truncate"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold"], [1, "avatar", "avatar-lg", "bg-primary-subtle", "rounded-circle"], [1, "isax", "isax-maximize-circle", "fs-24", "text-primary"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-xs", "mb-2", "progress-animate"], [1, "progress-bar", "bg-primary", 2, "width", "80%"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "mb-1"], [1, "avatar", "avatar-lg", "bg-success-subtle", "rounded-circle"], [1, "isax", "isax-tick-circle", "fs-24", "text-success"], [1, "progress-bar", "bg-success", 2, "width", "80%"], [1, "avatar", "avatar-lg", "bg-warning-subtle", "rounded-circle"], [1, "isax", "isax-info-circle", "fs-24", "text-warning"], [1, "progress-bar", "bg-warning", 2, "width", "80%"], [1, "avatar", "avatar-lg", "bg-danger-subtle", "rounded-circle"], [1, "isax", "isax-dollar-circle", "fs-24", "text-danger"], [1, "progress-bar", "bg-danger", 2, "width", "30%"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "createdon"], ["mat-sort-header", "reccuring"], ["mat-sort-header", "issuedate"], ["mat-sort-header", "duedate"], ["mat-sort-header", "paid"], ["mat-sort-header", "dueamount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "mb-0"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-purple", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-orange", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "view_invoice", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-body"], [1, "d-flex", "mb-3", "pb-3", "align-items-center", "justify-content-between", "border-bottom"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "text-danger", "bg-transparent", "border-0", "outline-0", "p-0", "lh-sm"], [1, "isax", "isax-close-circle5", "fs-16"], [1, "d-flex", "align-items-center", "justify-content-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", ""], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2", "position-relative", "z-1"], [1, "me-4"], [1, "fs-14", "fw-semibold", "mb-1"], ["src", "assets/img/icons/not-paid.png", "alt", "", "width", "48", "height", "48"], ["src", "assets/img/invoice-logo.svg", "alt", ""], [1, "row", "gy-3", "position-relative", "z-1"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "badge-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "me-2"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "fs-14", "fw-semibold"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table"], [1, "thead-dark"], [1, "border-bottom", "mb-3"], [1, "col-xl-8", "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "me-3"], [1, "mb-2"], ["src", "assets/img/icons/qr.png", "alt", ""], [1, "col-xl-4", "col-lg-6"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "col-lg-7"], [1, "col-lg-5"], [1, "text-lg-end", "mb-3"], ["src", "assets/img/icons/sign.png", "alt", ""], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg", "flex-wrap", "gap-2"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_quotation", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-document-download", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function RecurringInvoicesComponent_Template(rf, ctx) {
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
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "div", 13)(23, "p", 14);
      \u0275\u0275text(24, "Total Recurring Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 15);
      \u0275\u0275text(26, "950");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "span", 16);
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275element(31, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 20)(33, "span", 21);
      \u0275\u0275element(34, "i", 22);
      \u0275\u0275text(35, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " from last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "div")(42, "p", 23);
      \u0275\u0275text(43, "Paid Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h6", 15);
      \u0275\u0275text(45, "800");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "span", 24);
      \u0275\u0275element(48, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 18);
      \u0275\u0275element(50, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 20)(52, "span", 21);
      \u0275\u0275element(53, "i", 22);
      \u0275\u0275text(54, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " from last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "div", 9)(57, "div", 10)(58, "div", 11)(59, "div", 12)(60, "div")(61, "p", 23);
      \u0275\u0275text(62, "Expired Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h6", 15);
      \u0275\u0275text(64, "150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div")(66, "span", 27);
      \u0275\u0275element(67, "i", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 18);
      \u0275\u0275element(69, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 20)(71, "span", 21);
      \u0275\u0275element(72, "i", 22);
      \u0275\u0275text(73, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(74, " from last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 9)(76, "div", 10)(77, "div", 11)(78, "div", 12)(79, "div")(80, "p", 23);
      \u0275\u0275text(81, "Total Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h6", 15);
      \u0275\u0275text(83, "\u20B9500,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div")(85, "span", 30);
      \u0275\u0275element(86, "i", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 18);
      \u0275\u0275element(88, "div", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p", 20)(90, "span", 33);
      \u0275\u0275element(91, "i", 34);
      \u0275\u0275text(92, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(93, " from last month");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(94, "div", 35)(95, "div", 36)(96, "div", 37)(97, "div", 38)(98, "div", 39)(99, "a", 40);
      \u0275\u0275element(100, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 42)(102, "label")(103, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function RecurringInvoicesComponent_Template_input_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RecurringInvoicesComponent_Template_input_ngModelChange_103_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(104, "a", 44);
      \u0275\u0275element(105, "i", 45);
      \u0275\u0275text(106, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 37)(108, "div", 46)(109, "a", 47);
      \u0275\u0275element(110, "i", 48);
      \u0275\u0275text(111, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "ul", 49)(113, "li")(114, "label", 50);
      \u0275\u0275element(115, "i", 51)(116, "input", 52);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "li")(120, "label", 50);
      \u0275\u0275element(121, "i", 51)(122, "input", 52);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "li")(126, "label", 50);
      \u0275\u0275element(127, "i", 51)(128, "input", 53);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Recurring Cycle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "li")(132, "label", 50);
      \u0275\u0275element(133, "i", 51)(134, "input", 53);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Issue Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "li")(138, "label", 50);
      \u0275\u0275element(139, "i", 51)(140, "input", 53);
      \u0275\u0275elementStart(141, "span");
      \u0275\u0275text(142, "Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "li")(144, "label", 50);
      \u0275\u0275element(145, "i", 51)(146, "input", 52);
      \u0275\u0275elementStart(147, "span");
      \u0275\u0275text(148, "Paid ($)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(149, "li")(150, "label", 50);
      \u0275\u0275element(151, "i", 51)(152, "input", 52);
      \u0275\u0275elementStart(153, "span");
      \u0275\u0275text(154, "Due Amount ($)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "li")(156, "label", 50);
      \u0275\u0275element(157, "i", 51)(158, "input", 52);
      \u0275\u0275elementStart(159, "span");
      \u0275\u0275text(160, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(161, "div", 54)(162, "h6", 55);
      \u0275\u0275text(163, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "span", 56)(165, "span", 57);
      \u0275\u0275text(166, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(167, "Customers Selected");
      \u0275\u0275elementStart(168, "span", 58);
      \u0275\u0275listener("click", function RecurringInvoicesComponent_Template_span_click_168_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(169, "i", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "span", 56)(171, "span", 57);
      \u0275\u0275text(172, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(173, "Status Selected");
      \u0275\u0275elementStart(174, "span", 58);
      \u0275\u0275listener("click", function RecurringInvoicesComponent_Template_span_click_174_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(175, "i", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "a", 60);
      \u0275\u0275listener("click", function RecurringInvoicesComponent_Template_a_click_176_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(177, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "div", 61)(179, "div", 61)(180, "table", 62);
      \u0275\u0275listener("matSortChange", function RecurringInvoicesComponent_Template_table_matSortChange_180_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(181, "thead", 63)(182, "tr")(183, "th", 64)(184, "div", 65);
      \u0275\u0275listener("click", function RecurringInvoicesComponent_Template_div_click_184_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(185, "input", 66);
      \u0275\u0275twoWayListener("ngModelChange", function RecurringInvoicesComponent_Template_input_ngModelChange_185_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(186, "th", 64);
      \u0275\u0275text(187, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "th", 67);
      \u0275\u0275text(189, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "th", 68);
      \u0275\u0275text(191, "Recurring Cycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "th", 69);
      \u0275\u0275text(193, "Issue Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "th", 70);
      \u0275\u0275text(195, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "th", 71);
      \u0275\u0275text(197, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "th", 72);
      \u0275\u0275text(199, "Due Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "th", 64);
      \u0275\u0275text(201, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(202, "th", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "tbody");
      \u0275\u0275repeaterCreate(204, RecurringInvoicesComponent_For_205_Template, 39, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(206, RecurringInvoicesComponent_Conditional_206_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(207, RecurringInvoicesComponent_app_custom_pagination_207_Template, 1, 0, "app-custom-pagination", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "div", 74)(209, "div", 75)(210, "div", 76)(211, "h6", 77);
      \u0275\u0275text(212, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "button", 78);
      \u0275\u0275element(214, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(215, "div", 80)(216, "form", 81)(217, "div", 35)(218, "label", 82);
      \u0275\u0275text(219, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 46)(221, "a", 83);
      \u0275\u0275text(222, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 84)(224, "div", 35)(225, "div", 85)(226, "span", 86);
      \u0275\u0275element(227, "i", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275element(228, "input", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "ul", 35)(230, "li", 89)(231, "label", 90);
      \u0275\u0275element(232, "input", 91);
      \u0275\u0275text(233, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "a", 92);
      \u0275\u0275text(235, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 93);
      \u0275\u0275element(238, "input", 53);
      \u0275\u0275elementStart(239, "span", 94);
      \u0275\u0275element(240, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275text(241, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li")(243, "label", 93);
      \u0275\u0275element(244, "input", 53);
      \u0275\u0275elementStart(245, "span", 94);
      \u0275\u0275element(246, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275text(247, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "li")(249, "label", 93);
      \u0275\u0275element(250, "input", 53);
      \u0275\u0275elementStart(251, "span", 94);
      \u0275\u0275element(252, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275text(253, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "li")(255, "label", 93);
      \u0275\u0275element(256, "input", 53);
      \u0275\u0275elementStart(257, "span", 94);
      \u0275\u0275element(258, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275text(259, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(260, "div", 99)(261, "div", 100)(262, "a", 101);
      \u0275\u0275text(263, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "div", 100)(265, "a", 102);
      \u0275\u0275text(266, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(267, "div", 35)(268, "label", 82);
      \u0275\u0275text(269, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div", 103);
      \u0275\u0275element(271, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "div", 35)(273, "label", 82);
      \u0275\u0275text(274, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "div", 46)(276, "a", 83);
      \u0275\u0275text(277, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "div", 84)(279, "div", 104)(280, "div", 105)(281, "span", 106);
      \u0275\u0275text(282, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "span", 106);
      \u0275\u0275text(284, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "mat-slider", 107);
      \u0275\u0275element(286, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "p");
      \u0275\u0275text(288, "Range : ");
      \u0275\u0275elementStart(289, "span", 109);
      \u0275\u0275text(290, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(291, "div", 35)(292, "label", 82);
      \u0275\u0275text(293, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div", 46)(295, "a", 83);
      \u0275\u0275text(296, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "div", 84)(298, "ul", 110)(299, "li")(300, "label", 93);
      \u0275\u0275element(301, "input", 53)(302, "i", 111);
      \u0275\u0275text(303, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "li")(305, "label", 93);
      \u0275\u0275element(306, "input", 53)(307, "i", 112);
      \u0275\u0275text(308, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "li")(310, "label", 93);
      \u0275\u0275element(311, "input", 53)(312, "i", 113);
      \u0275\u0275text(313, "Cancelled ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "li")(315, "label", 93);
      \u0275\u0275element(316, "input", 53)(317, "i", 114);
      \u0275\u0275text(318, "Partially Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "li")(320, "label", 93);
      \u0275\u0275element(321, "input", 53)(322, "i", 115);
      \u0275\u0275text(323, "Uncollectable ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(324, "div", 116)(325, "div", 99)(326, "div", 100)(327, "a", 117);
      \u0275\u0275text(328, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div", 100)(330, "button", 118);
      \u0275\u0275listener("click", function RecurringInvoicesComponent_Template_button_click_330_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(331, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(332, "div", 119)(333, "div", 120)(334, "div", 121)(335, "div", 122)(336, "div", 123)(337, "h5", 110);
      \u0275\u0275text(338, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "button", 124);
      \u0275\u0275element(340, "i", 125);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "div")(342, "div", 126)(343, "div", 127)(344, "a", 128);
      \u0275\u0275element(345, "i", 129);
      \u0275\u0275text(346, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "a", 128);
      \u0275\u0275element(348, "i", 130);
      \u0275\u0275text(349, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "a", 128);
      \u0275\u0275element(351, "i", 131);
      \u0275\u0275text(352, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(353, "div", 132)(354, "div", 133);
      \u0275\u0275element(355, "img", 134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "div", 135)(357, "div", 35)(358, "h4", 23);
      \u0275\u0275text(359, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "div", 127)(361, "div", 136)(362, "h6", 137);
      \u0275\u0275text(363, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "p");
      \u0275\u0275text(365, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "span");
      \u0275\u0275element(367, "img", 138);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(368, "div", 35);
      \u0275\u0275element(369, "img", 139);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(370, "div", 140)(371, "div", 141)(372, "div")(373, "h6", 142);
      \u0275\u0275text(374, "Invoice Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "div")(376, "p", 23);
      \u0275\u0275text(377, "Invoice Number : ");
      \u0275\u0275elementStart(378, "span", 143);
      \u0275\u0275text(379, "INV215654");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "p", 23);
      \u0275\u0275text(381, "Issued On : ");
      \u0275\u0275elementStart(382, "span", 143);
      \u0275\u0275text(383, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "p", 23);
      \u0275\u0275text(385, "Due Date : ");
      \u0275\u0275elementStart(386, "span", 143);
      \u0275\u0275text(387, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(388, "p", 23);
      \u0275\u0275text(389, "Recurring Invoice : ");
      \u0275\u0275elementStart(390, "span", 143);
      \u0275\u0275text(391, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(392, "span", 144);
      \u0275\u0275text(393, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(394, "div", 141)(395, "div")(396, "h6", 142);
      \u0275\u0275text(397, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "div")(399, "h6", 137);
      \u0275\u0275text(400, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(401, "p", 23);
      \u0275\u0275text(402, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "p", 23);
      \u0275\u0275text(404, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "p", 23);
      \u0275\u0275text(406, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "p", 23);
      \u0275\u0275text(408, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(409, "div", 141)(410, "div")(411, "h6", 142);
      \u0275\u0275text(412, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "div", 145)(414, "div", 146)(415, "div", 147)(416, "span");
      \u0275\u0275element(417, "img", 148);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(418, "h6", 149);
      \u0275\u0275text(419, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "p", 23);
      \u0275\u0275text(421, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "p", 23);
      \u0275\u0275text(423, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "p", 23);
      \u0275\u0275text(425, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "p", 110);
      \u0275\u0275text(427, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(428, "div", 35)(429, "h6", 35);
      \u0275\u0275text(430, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "div", 150)(432, "table", 151)(433, "thead", 152)(434, "tr")(435, "th");
      \u0275\u0275text(436, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "th");
      \u0275\u0275text(438, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "th");
      \u0275\u0275text(440, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(441, "th");
      \u0275\u0275text(442, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "th");
      \u0275\u0275text(444, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "th");
      \u0275\u0275text(446, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "th");
      \u0275\u0275text(448, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "th");
      \u0275\u0275text(450, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(451, "tbody")(452, "tr")(453, "td");
      \u0275\u0275text(454, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "td", 143);
      \u0275\u0275text(456, "T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "td");
      \u0275\u0275text(458, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "td");
      \u0275\u0275text(460, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "td");
      \u0275\u0275text(462, "$200.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "td");
      \u0275\u0275text(464, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "td");
      \u0275\u0275text(466, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "td");
      \u0275\u0275text(468, "$396.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(469, "tr")(470, "td");
      \u0275\u0275text(471, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "td", 143);
      \u0275\u0275text(473, "Office Chair");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "td");
      \u0275\u0275text(475, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "td");
      \u0275\u0275text(477, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "td");
      \u0275\u0275text(479, "$350.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "td");
      \u0275\u0275text(481, "5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "td");
      \u0275\u0275text(483, "$33.25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "td");
      \u0275\u0275text(485, "$365.75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(486, "tr")(487, "td");
      \u0275\u0275text(488, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "td", 143);
      \u0275\u0275text(490, "LED Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "td");
      \u0275\u0275text(492, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "td");
      \u0275\u0275text(494, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "td");
      \u0275\u0275text(496, "$399.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "td");
      \u0275\u0275text(498, "2%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "td");
      \u0275\u0275text(500, "$39.10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "td");
      \u0275\u0275text(502, "$398.90");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(503, "tr")(504, "td");
      \u0275\u0275text(505, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "td", 143);
      \u0275\u0275text(507, "Smartphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "td");
      \u0275\u0275text(509, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "td");
      \u0275\u0275text(511, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "td");
      \u0275\u0275text(513, "$100.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "td");
      \u0275\u0275text(515, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "td");
      \u0275\u0275text(517, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "td");
      \u0275\u0275text(519, "$396.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(520, "div", 153)(521, "div", 8)(522, "div", 154)(523, "div", 155)(524, "div", 156)(525, "p", 157);
      \u0275\u0275text(526, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "span");
      \u0275\u0275element(528, "img", 158);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(529, "div")(530, "h6", 157);
      \u0275\u0275text(531, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "div")(533, "p", 23);
      \u0275\u0275text(534, "Bank Name : ");
      \u0275\u0275elementStart(535, "span", 143);
      \u0275\u0275text(536, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(537, "p", 23);
      \u0275\u0275text(538, "Account Number : ");
      \u0275\u0275elementStart(539, "span", 143);
      \u0275\u0275text(540, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(541, "p", 23);
      \u0275\u0275text(542, "IFSC Code : ");
      \u0275\u0275elementStart(543, "span", 143);
      \u0275\u0275text(544, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(545, "p", 110);
      \u0275\u0275text(546, "Payment Reference : ");
      \u0275\u0275elementStart(547, "span", 143);
      \u0275\u0275text(548, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(549, "div", 159)(550, "div", 35)(551, "div", 89)(552, "h6", 149);
      \u0275\u0275text(553, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "h6", 149);
      \u0275\u0275text(555, "$1,793.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(556, "div", 89)(557, "h6", 149);
      \u0275\u0275text(558, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "h6", 149);
      \u0275\u0275text(560, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "div", 89)(562, "h6", 149);
      \u0275\u0275text(563, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "h6", 149);
      \u0275\u0275text(565, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(566, "div", 160)(567, "h6", 149);
      \u0275\u0275text(568, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "h6", 161);
      \u0275\u0275text(570, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(571, "div", 160)(572, "h6");
      \u0275\u0275text(573, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "h6");
      \u0275\u0275text(575, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "div")(577, "h6", 137);
      \u0275\u0275text(578, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(579, "p");
      \u0275\u0275text(580, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(581, "div", 8)(582, "div", 162)(583, "div", 35)(584, "div", 35)(585, "h6", 137);
      \u0275\u0275text(586, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "p");
      \u0275\u0275text(588, "The Payment must be returned in the same condition.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(589, "div")(590, "h6", 137);
      \u0275\u0275text(591, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(592, "p");
      \u0275\u0275text(593, "All charges are final and include applicable taxes, fees, and additional costs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(594, "div", 163)(595, "div", 164)(596, "span");
      \u0275\u0275element(597, "img", 165);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "h6", 137);
      \u0275\u0275text(599, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "p");
      \u0275\u0275text(601, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(602, "div", 166)(603, "div")(604, "h6", 137);
      \u0275\u0275text(605, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "p");
      \u0275\u0275text(607, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(608, "div");
      \u0275\u0275element(609, "img", 139);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(610, "div", 167)(611, "div", 168)(612, "div", 121)(613, "div", 169)(614, "div", 35);
      \u0275\u0275element(615, "img", 170);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "h6", 23);
      \u0275\u0275text(617, "Delete Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(618, "p", 35);
      \u0275\u0275text(619, "Are you sure, you want to delete invoice?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(620, "div", 171)(621, "a", 172);
      \u0275\u0275text(622, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(623, "a", 173);
      \u0275\u0275text(624, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(103);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(58);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 206 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(78);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    MatSliderModule,
    MatSlider,
    MatSliderThumb,
    DateRangePickerComponent,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    MatSortHeader,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurringInvoicesComponent, [{
    type: Component,
    args: [{ selector: "app-recurring-invoices", imports: [
      CommonModule,
      MatSliderModule,
      DateRangePickerComponent,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule
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
					<div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
						<h6 class="fs-13 fw-semibold">Filters</h6>
						<span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Customers Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>					
						<span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>											
						<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
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
								<button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurringInvoicesComponent, { className: "RecurringInvoicesComponent", filePath: "src/app/features/customers/recurring-invoices/recurring-invoices.component.ts", lineNumber: 22 });
})();
export {
  RecurringInvoicesComponent
};
//# sourceMappingURL=chunk-EWOYRH5A.js.map
