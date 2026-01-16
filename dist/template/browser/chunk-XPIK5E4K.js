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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/customers/invoices/invoices.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function InvoicesComponent_For_238_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 182);
    \u0275\u0275element(3, "input", 183);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "a", 184);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 118);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 185);
    \u0275\u0275text(15);
    \u0275\u0275element(16, "i", 186);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 118);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "button", 187);
    \u0275\u0275text(23, "Pay Now");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 188)(25, "a", 189);
    \u0275\u0275element(26, "i", 190);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ul", 6)(28, "li")(29, "a", 191);
    \u0275\u0275element(30, "i", 192);
    \u0275\u0275text(31, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li")(33, "a", 193);
    \u0275\u0275element(34, "i", 194);
    \u0275\u0275text(35, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "li")(37, "a", 195);
    \u0275\u0275element(38, "i", 196);
    \u0275\u0275text(39, "Download Invoices as PDF");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r1.routes.customerInvoiceDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Cancelled" || data_r1.status === "Overdue" ? "badge-soft-danger" : data_r1.status === "Partially Paid" || data_r1.status === "Draft" ? "badge-soft-info" : data_r1.status === "Unpaid" ? "badge-soft-warning" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r1.status === "Refunded" ? "isax-money-3" : data_r1.status === "Cancelled" ? "isax-close-circle" : data_r1.status === "Partially Paid" ? "isax-timer" : data_r1.status === "Overdue" ? "isax-danger" : data_r1.status === "Unpaid" ? "isax-slash" : data_r1.status === "Draft" ? "isax-note" : " isax-tick-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.dueDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Paid" ? "btn-light" : "btn-primary")("disabled", data_r1.status === "Paid");
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", ctx_r1.routes.customerInvoiceDetails);
  }
}
function InvoicesComponent_Conditional_239_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 197);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function InvoicesComponent_app_custom_pagination_240_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var InvoicesComponent = class _InvoicesComponent {
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
  modal = false;
  closeModal() {
    this.modal = !this.modal;
    const backdrop = document.querySelector(".modal-backdrop.fade.show");
    if (backdrop) {
      backdrop.classList.add("d-none");
    }
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
    this.data.getinvoice().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerInvoices) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getinvoice().subscribe((apiRes) => {
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
  static \u0275fac = function InvoicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoicesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesComponent, selectors: [["app-invoices"]], decls: 628, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-2", "border-bottom"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "bg-primary", "rounded-circle"], [1, "isax", "isax-receipt-item"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "end-0", "bottom-0"], ["src", "assets/img/bg/card-overlay-01.svg", "alt", "User Img"], [1, "avatar", "bg-success", "rounded-circle"], [1, "isax", "isax-tick-circle"], ["src", "assets/img/bg/card-overlay-02.svg", "alt", "User Img"], [1, "avatar", "bg-warning", "rounded-circle"], [1, "isax", "isax-timer"], ["src", "assets/img/bg/card-overlay-03.svg", "alt", "User Img"], [1, "avatar", "bg-danger", "rounded-circle"], [1, "isax", "isax-information"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], ["src", "assets/img/bg/card-overlay-04.svg", "alt", "User Img"], [1, "nav", "nav-tabs", "nav-tabs-bottom", "border-bottom", "mb-3"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", "active"], ["href", "javascript:void(0);", 1, "nav-link"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "createdon"], ["mat-sort-header", "amount"], ["mat-sort-header", "paid"], ["mat-sort-header", "duedate"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-purple", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-orange", "me-1"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["tabindex", "-1", "id", "customcanvas2", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "activity-feed", "bg-light", "rounded", "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "text-primary", "fw-semibold", "mb-1"], [1, "fs-13"], [1, "text-dark"], [1, "text-dark", "fw-semibold", "mb-1"], ["type", "text", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fs-16"], ["data-bs-dismiss", "offcanvas", "data-bs-toggle", "modal", "data-bs-target", "#add_card", 1, "d-flex", "align-items-center", "text-dark"], [1, "isax", "isax-add-circle5", "text-primary", "me-1"], [1, "border", "rounded", "px-3", "py-2", "mb-2"], [1, "form-check", "d-flex", "align-items-center"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input", "mt-0"], [1, "ms-2"], ["for", "flexRadioDefault1", 1, "form-check-label", "fw-semibold", "text-dark"], [1, "fs-13", "text-gray-5", "fw-normal", "mb-0"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input", "mt-0"], ["for", "flexRadioDefault2", 1, "form-check-label", "fw-semibold", "text-dark"], [1, "border", "rounded", "px-3", "py-2", "mb-2", "d-flex", "align-items-center", "h-60"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault3", 1, "form-check-input", "mt-0"], ["for", "flexRadioDefault3", 1, "form-check-label", "fw-semibold", "text-dark"], [1, "border", "rounded", "px-3", "py-2", "mb-2", "d-flex", "align-items-center", "h-60", "mb-3"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault4", 1, "form-check-input", "mt-0"], ["for", "flexRadioDefault4", 1, "form-check-label", "fw-semibold", "text-dark"], [1, "border-bottom", "mb-3"], [1, "fs-16", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-3", "d-flex", "align-items-center", "justify-content-between"], [1, "bg-success-100", "p-2", "d-flex", "align-items-center", "justify-content-center", "mb-3"], [1, "isax", "isax-security-safe5", "text-success", "fs-40", "me-2"], [1, "text-dark", "fw-semibold", "mb-0"], [1, "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#success_modal", 1, "btn", "btn-primary", "w-100"], ["data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["id", "add_card", 1, "modal", "fade"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row", "mb-3"], [1, "col-md-6"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["type", "text", 1, "form-control", "rounded-end"], [1, "isax", "isax-lock-1"], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "success_modal", 1, "modal", "fade", "custom-modal", 3, "ngClass"], [1, "isax", "isax-tick-circle5", "fs-48", "text-success"], [1, "mb-3", "text-center"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas3", 1, "btn", "btn-primary", "close-modal", 3, "click"], ["tabindex", "-1", "id", "customcanvas3", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "fs-16", "fw-semibold", "mb-2"], [1, "border-bottom", "mb-3", "pb-3"], [1, "fs-14", "fw-semibold", "mb-1"], [1, "d-flex", "align-items-center"], [1, "badge", "bg-danger", "ms-2"], [1, "activity-feed", "bg-light", "rounded"], [1, "feed-item", "timeline-item"], [1, "text-dark", "fw-semibold"], [1, "invoice-date"], [1, "isax", "isax-calendar", "me-1"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input"], [1, "link-default", 3, "routerLink"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas2", 1, "btn", "btn-sm", 3, "ngClass", "disabled"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-document-download", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function InvoicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Invoices");
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
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "div")(23, "p", 13);
      \u0275\u0275text(24, "Total Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 14);
      \u0275\u0275text(26, "$25,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "span", 15);
      \u0275\u0275element(29, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "p", 17)(31, "span", 18);
      \u0275\u0275element(32, "i", 19);
      \u0275\u0275text(33, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 20);
      \u0275\u0275element(36, "img", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "div")(42, "p", 13);
      \u0275\u0275text(43, "Paid Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h6", 14);
      \u0275\u0275text(45, "$18,500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "span", 22);
      \u0275\u0275element(48, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "p", 17)(50, "span", 18);
      \u0275\u0275element(51, "i", 19);
      \u0275\u0275text(52, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 20);
      \u0275\u0275element(55, "img", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "div", 9)(57, "div", 10)(58, "div", 11)(59, "div", 12)(60, "div")(61, "p", 13);
      \u0275\u0275text(62, "Pending Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h6", 14);
      \u0275\u0275text(64, "$6,500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div")(66, "span", 25);
      \u0275\u0275element(67, "i", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "p", 17)(69, "span", 18);
      \u0275\u0275element(70, "i", 19);
      \u0275\u0275text(71, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 20);
      \u0275\u0275element(74, "img", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 9)(76, "div", 10)(77, "div", 11)(78, "div", 12)(79, "div")(80, "p", 13);
      \u0275\u0275text(81, "Overdue Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h6", 14);
      \u0275\u0275text(83, "$2,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div")(85, "span", 28);
      \u0275\u0275element(86, "i", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "p", 17)(88, "span", 30);
      \u0275\u0275element(89, "i", 31);
      \u0275\u0275text(90, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 20);
      \u0275\u0275element(93, "img", 32);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(94, "ul", 33)(95, "li", 34)(96, "a", 35);
      \u0275\u0275text(97, "All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "li", 34)(99, "a", 36);
      \u0275\u0275text(100, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "li", 34)(102, "a", 36);
      \u0275\u0275text(103, "Overdue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "li", 34)(105, "a", 36);
      \u0275\u0275text(106, "Upcoming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "li", 34)(108, "a", 36);
      \u0275\u0275text(109, "Cancelled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "li", 34)(111, "a", 36);
      \u0275\u0275text(112, "Partially Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "li", 34)(114, "a", 36);
      \u0275\u0275text(115, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "li", 34)(117, "a", 36);
      \u0275\u0275text(118, "Refunded");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "li", 34)(120, "a", 36);
      \u0275\u0275text(121, "Draft");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "div", 37)(123, "div", 38)(124, "div", 39)(125, "div", 40)(126, "div", 41)(127, "a", 42);
      \u0275\u0275element(128, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 44)(130, "label")(131, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function InvoicesComponent_Template_input_ngModelChange_131_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InvoicesComponent_Template_input_ngModelChange_131_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(132, "a", 46);
      \u0275\u0275element(133, "i", 47);
      \u0275\u0275text(134, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 39)(136, "div", 48)(137, "a", 49);
      \u0275\u0275element(138, "i", 50);
      \u0275\u0275text(139, "Sort By : ");
      \u0275\u0275elementStart(140, "span", 51);
      \u0275\u0275text(141, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "ul", 52)(143, "li")(144, "a", 7);
      \u0275\u0275text(145, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "li")(147, "a", 7);
      \u0275\u0275text(148, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(149, "div", 48)(150, "a", 53);
      \u0275\u0275element(151, "i", 54);
      \u0275\u0275text(152, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "ul", 55)(154, "li")(155, "label", 56);
      \u0275\u0275element(156, "i", 57)(157, "input", 58);
      \u0275\u0275elementStart(158, "span");
      \u0275\u0275text(159, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "li")(161, "label", 56);
      \u0275\u0275element(162, "i", 57)(163, "input", 58);
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "li")(167, "label", 56);
      \u0275\u0275element(168, "i", 57)(169, "input", 58);
      \u0275\u0275elementStart(170, "span");
      \u0275\u0275text(171, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(172, "li")(173, "label", 56);
      \u0275\u0275element(174, "i", 57)(175, "input", 58);
      \u0275\u0275elementStart(176, "span");
      \u0275\u0275text(177, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "li")(179, "label", 56);
      \u0275\u0275element(180, "i", 57)(181, "input", 58);
      \u0275\u0275elementStart(182, "span");
      \u0275\u0275text(183, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(184, "li")(185, "label", 56);
      \u0275\u0275element(186, "i", 57)(187, "input", 59);
      \u0275\u0275elementStart(188, "span");
      \u0275\u0275text(189, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "li")(191, "label", 56);
      \u0275\u0275element(192, "i", 57)(193, "input", 59);
      \u0275\u0275elementStart(194, "span");
      \u0275\u0275text(195, "Due Date");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(196, "div", 60)(197, "h6", 61);
      \u0275\u0275text(198, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "span", 62)(200, "span", 63);
      \u0275\u0275text(201, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(202, "$10,000 - $25,500");
      \u0275\u0275elementStart(203, "span", 64);
      \u0275\u0275listener("click", function InvoicesComponent_Template_span_click_203_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(204, "i", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "span", 62)(206, "span", 63);
      \u0275\u0275text(207, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(208, "Status Selected");
      \u0275\u0275elementStart(209, "span", 64);
      \u0275\u0275listener("click", function InvoicesComponent_Template_span_click_209_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(210, "i", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "a", 66);
      \u0275\u0275listener("click", function InvoicesComponent_Template_a_click_211_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(212, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(213, "div", 67)(214, "table", 68);
      \u0275\u0275listener("matSortChange", function InvoicesComponent_Template_table_matSortChange_214_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(215, "thead", 69)(216, "tr")(217, "th", 70)(218, "div", 71);
      \u0275\u0275listener("click", function InvoicesComponent_Template_div_click_218_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(219, "input", 72);
      \u0275\u0275twoWayListener("ngModelChange", function InvoicesComponent_Template_input_ngModelChange_219_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(220, "th", 70);
      \u0275\u0275text(221, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "th", 73);
      \u0275\u0275text(223, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "th", 74);
      \u0275\u0275text(225, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "th", 75);
      \u0275\u0275text(227, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "th", 70);
      \u0275\u0275text(229, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "th", 70);
      \u0275\u0275text(231, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "th", 76);
      \u0275\u0275text(233, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(234, "th", 70)(235, "th", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "tbody");
      \u0275\u0275repeaterCreate(237, InvoicesComponent_For_238_Template, 40, 13, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(239, InvoicesComponent_Conditional_239_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(240, InvoicesComponent_app_custom_pagination_240_Template, 1, 0, "app-custom-pagination", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 78)(242, "div", 79)(243, "div", 80)(244, "h6", 81);
      \u0275\u0275text(245, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "button", 82);
      \u0275\u0275element(247, "i", 83);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(248, "div", 84)(249, "form", 85)(250, "div", 37)(251, "label", 86);
      \u0275\u0275text(252, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 87);
      \u0275\u0275element(254, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "div", 37)(256, "label", 88);
      \u0275\u0275text(257, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div", 48)(259, "a", 89);
      \u0275\u0275text(260, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "div", 90)(262, "div", 37)(263, "div", 91)(264, "span", 92);
      \u0275\u0275element(265, "i", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275element(266, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "ul", 37)(268, "li")(269, "label", 95);
      \u0275\u0275element(270, "input", 59);
      \u0275\u0275text(271, " $10,000 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "li")(273, "label", 95);
      \u0275\u0275element(274, "input", 59);
      \u0275\u0275text(275, " $25,750 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li")(277, "label", 95);
      \u0275\u0275element(278, "input", 59);
      \u0275\u0275text(279, " $50,125 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "li")(281, "label", 95);
      \u0275\u0275element(282, "input", 59);
      \u0275\u0275text(283, " $75,900 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(284, "div", 37)(285, "label", 88);
      \u0275\u0275text(286, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "div", 48)(288, "a", 89);
      \u0275\u0275text(289, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "div", 90)(291, "ul", 37)(292, "li")(293, "label", 95);
      \u0275\u0275element(294, "input", 59)(295, "i", 96);
      \u0275\u0275text(296, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "li")(298, "label", 95);
      \u0275\u0275element(299, "input", 59)(300, "i", 97);
      \u0275\u0275text(301, "Unpaid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "li")(303, "label", 95);
      \u0275\u0275element(304, "input", 59)(305, "i", 98);
      \u0275\u0275text(306, "Cancelled ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "li")(308, "label", 95);
      \u0275\u0275element(309, "input", 59)(310, "i", 99);
      \u0275\u0275text(311, "Partially Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "li")(313, "label", 95);
      \u0275\u0275element(314, "input", 59)(315, "i", 100);
      \u0275\u0275text(316, "Overdue ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(317, "div")(318, "label", 88);
      \u0275\u0275text(319, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 48)(321, "a", 89);
      \u0275\u0275text(322, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div", 90)(324, "ul", 37)(325, "li")(326, "label", 95);
      \u0275\u0275element(327, "input", 59);
      \u0275\u0275text(328, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "li")(330, "label", 95);
      \u0275\u0275element(331, "input", 59);
      \u0275\u0275text(332, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "li")(334, "label", 95);
      \u0275\u0275element(335, "input", 59);
      \u0275\u0275text(336, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "li")(338, "label", 95);
      \u0275\u0275element(339, "input", 59);
      \u0275\u0275text(340, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "li")(342, "label", 95);
      \u0275\u0275element(343, "input", 59);
      \u0275\u0275text(344, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(345, "div", 101)(346, "div", 102)(347, "div", 103)(348, "a", 104);
      \u0275\u0275text(349, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "div", 103)(351, "button", 105);
      \u0275\u0275listener("click", function InvoicesComponent_Template_button_click_351_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(352, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(353, "div", 106)(354, "div", 107)(355, "div", 108)(356, "div", 109)(357, "div", 37);
      \u0275\u0275element(358, "img", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "h6", 13);
      \u0275\u0275text(360, "Delete Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "p", 37);
      \u0275\u0275text(362, "Are you sure, you want to delete Invoice?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "div", 111)(364, "a", 112);
      \u0275\u0275text(365, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "a", 113);
      \u0275\u0275text(367, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(368, "div", 114)(369, "div", 79)(370, "div", 80)(371, "h6", 81);
      \u0275\u0275text(372, "Pay Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "button", 82);
      \u0275\u0275element(374, "i", 83);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(375, "div", 84)(376, "form", 85)(377, "div", 115)(378, "div")(379, "p", 116);
      \u0275\u0275text(380, "#INV00001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "p", 117);
      \u0275\u0275text(382, "Due Date :\xA0");
      \u0275\u0275elementStart(383, "span", 118);
      \u0275\u0275text(384, "03 Jun 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(385, "div")(386, "p", 119);
      \u0275\u0275text(387, "Invoice Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "p", 117);
      \u0275\u0275text(389, "$2560.25");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(390, "div", 37)(391, "label", 88);
      \u0275\u0275text(392, "Amount to be Paid ");
      \u0275\u0275elementStart(393, "span", 30);
      \u0275\u0275text(394, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(395, "input", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "div", 37)(397, "div", 121)(398, "h6", 122);
      \u0275\u0275text(399, "Select a Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "span", 123);
      \u0275\u0275element(401, "i", 124);
      \u0275\u0275text(402, "Add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(403, "div", 125)(404, "div", 126);
      \u0275\u0275element(405, "input", 127);
      \u0275\u0275elementStart(406, "div", 128)(407, "label", 129);
      \u0275\u0275text(408, " Visa *******5658 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "P", 130);
      \u0275\u0275text(410, "Expires on: 12/26");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(411, "div", 125)(412, "div", 126);
      \u0275\u0275element(413, "input", 131);
      \u0275\u0275elementStart(414, "div", 128)(415, "label", 132);
      \u0275\u0275text(416, " Visa *******5258 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "P", 130);
      \u0275\u0275text(418, "Expires on: 10/26");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(419, "div", 133)(420, "div", 126);
      \u0275\u0275element(421, "input", 134);
      \u0275\u0275elementStart(422, "div", 128)(423, "label", 135);
      \u0275\u0275text(424, " Stripe ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(425, "div", 136)(426, "div", 126);
      \u0275\u0275element(427, "input", 137);
      \u0275\u0275elementStart(428, "div", 128)(429, "label", 138);
      \u0275\u0275text(430, " Paypal ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(431, "div", 139)(432, "h6", 140);
      \u0275\u0275text(433, "Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "div", 37)(435, "div", 141)(436, "p", 142);
      \u0275\u0275text(437, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "p");
      \u0275\u0275text(439, "$565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(440, "div", 143)(441, "p", 142);
      \u0275\u0275text(442, "Platform Fees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "p");
      \u0275\u0275text(444, "$18");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(445, "div", 144)(446, "h6");
      \u0275\u0275text(447, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "h6");
      \u0275\u0275text(449, "$596");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(450, "div", 145);
      \u0275\u0275element(451, "i", 146);
      \u0275\u0275elementStart(452, "div")(453, "p", 147);
      \u0275\u0275text(454, "100% Cashback Guarantee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "p", 117);
      \u0275\u0275text(456, "We Protect Your Money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(457, "div", 148)(458, "a", 149);
      \u0275\u0275text(459, "Pay Now $596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(460, "div", 101)(461, "button", 150);
      \u0275\u0275text(462, "Cancel");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(463, "div", 151)(464, "div", 107)(465, "div", 108)(466, "div", 152)(467, "h5", 153);
      \u0275\u0275text(468, "Add New Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "button", 154);
      \u0275\u0275element(470, "i", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(471, "div", 155)(472, "form")(473, "div", 37)(474, "label", 88);
      \u0275\u0275text(475, "Card Number ");
      \u0275\u0275elementStart(476, "span", 30);
      \u0275\u0275text(477, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(478, "input", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "div", 37)(480, "label", 88);
      \u0275\u0275text(481, "Name on Card ");
      \u0275\u0275elementStart(482, "span", 30);
      \u0275\u0275text(483, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(484, "input", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "div", 156)(486, "div", 157)(487, "label", 88);
      \u0275\u0275text(488, "Expiry Date ");
      \u0275\u0275elementStart(489, "span", 30);
      \u0275\u0275text(490, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(491, "div", 158);
      \u0275\u0275element(492, "input", 159);
      \u0275\u0275elementStart(493, "span", 160);
      \u0275\u0275element(494, "i", 161);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(495, "div", 157)(496, "label", 88);
      \u0275\u0275text(497, "Security Number ");
      \u0275\u0275elementStart(498, "span", 30);
      \u0275\u0275text(499, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(500, "div", 158);
      \u0275\u0275element(501, "input", 162);
      \u0275\u0275elementStart(502, "span", 160);
      \u0275\u0275element(503, "i", 163);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(504, "div", 164)(505, "a", 112);
      \u0275\u0275text(506, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "button", 165);
      \u0275\u0275text(508, "Add");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(509, "div", 166)(510, "div", 107)(511, "div", 108)(512, "div", 109)(513, "div", 37);
      \u0275\u0275element(514, "i", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "h6", 13);
      \u0275\u0275text(516, "Payment Successful");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "p", 168);
      \u0275\u0275text(518, "Your invoice payment has been successfully completed! Reference Number: #INV54896");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "div", 111)(520, "a", 112);
      \u0275\u0275text(521, "Back to Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "a", 169);
      \u0275\u0275listener("click", function InvoicesComponent_Template_a_click_522_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(523, "View Details");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(524, "div", 170)(525, "div", 79)(526, "div", 80)(527, "h6", 81);
      \u0275\u0275text(528, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "button", 82);
      \u0275\u0275element(530, "i", 83);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(531, "div", 84)(532, "form", 85)(533, "div", 37)(534, "label", 88);
      \u0275\u0275text(535, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "div", 48)(537, "a", 89);
      \u0275\u0275text(538, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "div", 90)(540, "ul", 37)(541, "li")(542, "label", 95);
      \u0275\u0275element(543, "input", 59)(544, "i", 96);
      \u0275\u0275text(545, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(546, "li")(547, "label", 95);
      \u0275\u0275element(548, "input", 59)(549, "i", 97);
      \u0275\u0275text(550, "Unpaid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(551, "li")(552, "label", 95);
      \u0275\u0275element(553, "input", 59)(554, "i", 98);
      \u0275\u0275text(555, "Cancelled ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(556, "li")(557, "label", 95);
      \u0275\u0275element(558, "input", 59)(559, "i", 99);
      \u0275\u0275text(560, "Partially Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "li")(562, "label", 95);
      \u0275\u0275element(563, "input", 59)(564, "i", 100);
      \u0275\u0275text(565, "Overdue ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(566, "div")(567, "h6", 171);
      \u0275\u0275text(568, "Payment Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "div", 172)(570, "div", 8)(571, "div", 103)(572, "div", 37)(573, "h6", 173);
      \u0275\u0275text(574, "PayPal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "p");
      \u0275\u0275text(576, "examplepaypal.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(577, "div", 103)(578, "div", 37)(579, "h6", 173);
      \u0275\u0275text(580, "Account ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(581, "p");
      \u0275\u0275text(582, "examplepaypal.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(583, "div", 103)(584, "div", 37)(585, "h6", 173);
      \u0275\u0275text(586, "Payment Term");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "p", 174);
      \u0275\u0275text(588, "15 Days ");
      \u0275\u0275elementStart(589, "span", 175);
      \u0275\u0275text(590, "Due in 8 days");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(591, "div")(592, "h6", 140);
      \u0275\u0275text(593, "Invoice History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "ul", 176)(595, "li", 177)(596, "p", 13);
      \u0275\u0275text(597, "Status Changed to ");
      \u0275\u0275elementStart(598, "span", 178);
      \u0275\u0275text(599, "Partially Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(600, "div", 179)(601, "span");
      \u0275\u0275element(602, "i", 180);
      \u0275\u0275text(603, "17 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(604, "li", 177)(605, "p", 13)(606, "span", 178);
      \u0275\u0275text(607, "$300 ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(608, " Partial Amount Paid on ");
      \u0275\u0275elementStart(609, "span", 178);
      \u0275\u0275text(610, "Paypal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(611, "div", 179)(612, "span");
      \u0275\u0275element(613, "i", 180);
      \u0275\u0275text(614, "16 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(615, "li", 177)(616, "p", 13)(617, "span", 178);
      \u0275\u0275text(618, "John Smith ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(619, " Created ");
      \u0275\u0275elementStart(620, "span", 178);
      \u0275\u0275text(621, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "a", 181);
      \u0275\u0275text(623, "#INV1254");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(624, "div", 179)(625, "span");
      \u0275\u0275element(626, "i", 180);
      \u0275\u0275text(627, "16 Jan 2025");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(131);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(65);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 239 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(269);
      \u0275\u0275property("ngClass", ctx.modal ? "d-none" : "");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    MatSliderModule,
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
    NgForm,
    RouterLink
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoicesComponent, [{
    type: Component,
    args: [{ selector: "app-invoices", imports: [
      CommonModule,
      MatSliderModule,
      DateRangePickerComponent,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule,
      RouterLink
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Invoices</h6>
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
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                        <div>
                            <p class="mb-1">Total Invoices</p>
                            <h6 class="fs-16 fw-semibold">$25,000</h6>
                        </div>
                        <div>
                            <span class="avatar bg-primary rounded-circle">
                                <i class="isax isax-receipt-item"></i>
                            </span>
                        </div>
                    </div>
                    <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month</p>
                    <span class="position-absolute end-0 bottom-0">
                        <img src="assets/img/bg/card-overlay-01.svg" alt="User Img">
                    </span>
                </div>
            </div>
            <!-- end card -->
        </div><!-- end col -->
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                        <div>
                            <p class="mb-1">Paid Invoices</p>
                            <h6 class="fs-16 fw-semibold">$18,500</h6>
                        </div>
                        <div>
                            <span class="avatar bg-success rounded-circle">
                                <i class="isax isax-tick-circle"></i>
                            </span>
                        </div>
                    </div>
                    <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month</p>
                    <span class="position-absolute end-0 bottom-0">
                        <img src="assets/img/bg/card-overlay-02.svg" alt="User Img">
                    </span>
                </div>
            </div>
            <!-- end card -->
        </div><!-- end col -->
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                        <div>
                            <p class="mb-1">Pending Invoices</p>
                            <h6 class="fs-16 fw-semibold">$6,500</h6>
                        </div>
                        <div>
                            <span class="avatar bg-warning rounded-circle">
                                <i class="isax isax-timer"></i>
                            </span>
                        </div>
                    </div>
                    <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month</p>
                    <span class="position-absolute end-0 bottom-0">
                        <img src="assets/img/bg/card-overlay-03.svg" alt="User Img">
                    </span>
                </div>
            </div>
            <!-- end card -->
        </div><!-- end col -->
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                        <div>
                            <p class="mb-1">Overdue Invoices</p>
                            <h6 class="fs-16 fw-semibold">$2,000</h6>
                        </div>
                        <div>
                            <span class="avatar bg-danger rounded-circle">
                                <i class="isax isax-information"></i>
                            </span>
                        </div>
                    </div>
                    <p class="fs-13 mb-0"><span class="text-danger"><i class="isax isax-received text-danger me-1"></i>7.45%</span> from last month</p>
                    <span class="position-absolute end-0 bottom-0">
                        <img src="assets/img/bg/card-overlay-04.svg" alt="User Img">
                    </span>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div><!-- end col -->
    </div>
    <!-- end row -->

    <ul class="nav nav-tabs nav-tabs-bottom border-bottom mb-3">
        <li class="nav-item"><a class="nav-link active" href="javascript:void(0);">All</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Paid</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Overdue</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Upcoming</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Cancelled</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Partially Paid</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Unpaid</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Refunded</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Draft</a></li>
    </ul>

    <!-- Table Search Start -->
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
                    <ul class="dropdown-menu  dropdown-menu-lg">
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
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Amount</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Paid</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Status</span>
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
                                <span>Due Date</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->

    </div>
    <!-- Table Search End -->

    <!-- Table List Start -->
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
                    <th mat-sort-header="amount">Amount</th>
                    <th mat-sort-header="paid">Paid</th>
                    <th class="no-sort">Status</th>
                    <th class="no-sort">Payment Mode</th>
                    <th mat-sort-header="duedate">Due Date</th>
                    <th class="no-sort"></th>
                    <th class="no-sort"></th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){
                <tr>
                    <td>
                        <div class="form-check form-check-md">
                            <input class="form-check-input" type="checkbox">
                        </div>
                    </td>
                    <td>
                        <a [routerLink]="routes.customerInvoiceDetails" class="link-default">{{data.id}}</a>
                    </td>
                    <td>{{data.createdOn}}</td>
                    <td class="text-dark">{{data.amount}}</td>
                    <td>{{data.paid}}</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center" 
                        [ngClass]="data.status==='Cancelled' || data.status==='Overdue'?'badge-soft-danger':data.status==='Partially Paid'||data.status==='Draft'?'badge-soft-info':data.status==='Unpaid'?'badge-soft-warning':'badge-soft-success'">
                            {{data.status}} 
                            <i class="isax ms-1" 
                            [ngClass]="data.status==='Refunded'?'isax-money-3':data.status==='Cancelled'?'isax-close-circle':data.status==='Partially Paid'?'isax-timer':data.status==='Overdue'?'isax-danger':data.status==='Unpaid'?'isax-slash':data.status==='Draft'?'isax-note':' isax-tick-circle'"></i>
                        </span>
                    </td>
                    <td class="text-dark">{{data.paymentMode}}</td>
                    <td>{{data.dueDate}}</td>
                    <td>
                        <button type="button" class="btn btn-sm" [ngClass]="data.status==='Paid'?'btn-light':'btn-primary'" [disabled]="data.status==='Paid'" data-bs-toggle="offcanvas" data-bs-target="#customcanvas2">Pay Now</button>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a [routerLink]="routes.customerInvoiceDetails" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
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
    <!-- /Table List End -->
    <app-custom-pagination *ngIf="row"></app-custom-pagination>

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
                <label for="dateRangePicker" class="form-label">Date Range</label>
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
                        <div class="mb-3">
                            <div class="input-icon-start position-relative">
                                <span class="input-icon-addon fs-12">
                                    <i class="isax isax-search-normal"></i>
                                </span>
                                <input type="text" class="form-control form-control-sm" placeholder="Search">
                            </div>
                        </div>
                        <ul class="mb-3">
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> $10,000
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> $25,750
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> $50,125
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> $75,900
                                </label>
                            </li>
                        </ul>
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
                        <ul class="mb-3">
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Paid
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Unpaid
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
                                    <i class="fa-solid fa-circle fs-6 text-orange me-1"></i>Overdue
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <label class="form-label">Payment Mode</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                        <ul class="mb-3">
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
                    </div>
                </div>
            </div>

            <div class="offcanvas-footer">
                <div class="row g-2">
                    <div class="col-6">
                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>
                    </div>
                    <div class="col-6">
                        <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<!-- End Filter -->

<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Invoice</h6>
                <p class="mb-3">Are you sure, you want to delete Invoice?</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Start Delete Modal  -->

<!-- Start Filter -->
<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas2">
    <div class="offcanvas-header d-block pb-0">
        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
            <h6 class="offcanvas-title">Pay Invoice</h6>
            <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>
    <div class="offcanvas-body pt-3">
        <form action="#">
            <div class="activity-feed bg-light rounded d-flex align-items-center justify-content-between mb-3">
                <div>
                    <p class="text-primary fw-semibold mb-1">#INV00001</p>
                    <p class="fs-13">Due Date :\xA0<span class="text-dark">03 Jun 2025</span></p>
                </div>
                <div>
                    <p class="text-dark fw-semibold mb-1">Invoice Total</p>
                    <p class="fs-13">$2560.25</p>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Amount to be Paid <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <h6 class="fs-16">Select a Payment Method</h6>
                    <span class="d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" data-bs-toggle="modal" data-bs-target="#add_card"><i class="isax isax-add-circle5 text-primary me-1"></i>Add</span>
                </div>
                <div class="border rounded px-3 py-2 mb-2">
                    <div class="form-check d-flex align-items-center">
                        <input class="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <div class="ms-2">
                            <label class="form-check-label fw-semibold text-dark" for="flexRadioDefault1">
                                Visa *******5658
                            </label>
                            <P class="fs-13 text-gray-5 fw-normal mb-0">Expires on: 12/26</P>
                        </div>
                    </div>
                </div>
                <div class="border rounded px-3 py-2 mb-2">
                    <div class="form-check d-flex align-items-center">
                        <input class="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <div class="ms-2">
                            <label class="form-check-label fw-semibold text-dark" for="flexRadioDefault2">
                                Visa *******5258
                            </label>
                            <P class="fs-13 text-gray-5 fw-normal mb-0">Expires on: 10/26</P>
                        </div>
                    </div>
                </div>
                <div class="border rounded px-3 py-2 mb-2 d-flex align-items-center h-60">
                    <div class="form-check d-flex align-items-center">
                        <input class="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                        <div class="ms-2">
                            <label class="form-check-label fw-semibold text-dark" for="flexRadioDefault3">
                                Stripe
                            </label>
                        </div>
                    </div>
                </div>
                <div class="border rounded px-3 py-2 mb-2 d-flex align-items-center h-60 mb-3">
                    <div class="form-check d-flex align-items-center">
                        <input class="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                        <div class="ms-2">
                            <label class="form-check-label fw-semibold text-dark" for="flexRadioDefault4">
                                Paypal
                            </label>
                        </div>
                    </div>
                </div>
                <div class="border-bottom mb-3">
                    <h6 class="fs-16 mb-2">Summary</h6>
                    <div class=" mb-3">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                            <p class="mb-0">Payment</p>
                            <p>$565</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0">Platform Fees</p>
                            <p>$18</p>
                        </div>
                    </div>
                </div>
                <div class="mb-3 d-flex align-items-center justify-content-between">
                    <h6>Total (USD)</h6>
                    <h6>$596</h6>
                </div>
            </div>
            <div class="bg-success-100 p-2 d-flex align-items-center justify-content-center mb-3">
                <i class="isax isax-security-safe5 text-success fs-40 me-2"></i>
                <div>
                    <p class="text-dark fw-semibold mb-0">100% Cashback Guarantee</p>
                    <p class="fs-13">We Protect Your Money</p>
                </div>
            </div>
            <div class="mb-2">
                <a href="javascript:void(0);" class="btn btn-primary w-100 " data-bs-toggle="modal" data-bs-target="#success_modal">Pay Now $596</a>
            </div>
            <div class="offcanvas-footer">
                <button data-bs-dismiss="offcanvas" class="btn btn-outline-white w-100">Cancel</button>
            </div>
        </form>
    </div>
</div>
<!-- End Filter -->

<!-- Add New Card -->
<div class="modal fade" id="add_card">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Card</h5>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Card Number <span class="text-danger">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Name on Card <span class="text-danger">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label">Expiry Date <span class="text-danger">*</span></label>
                            <div class="input-group position-relative mb-3">
                                <input type="text" class="form-control datetimepicker rounded-end">
                                <span class="input-icon-addon fs-16 text-gray-9">
                                    <i class="isax isax-calendar-2"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Security Number <span class="text-danger">*</span></label>
                            <div class="input-group position-relative mb-3">
                                <input type="text" class="form-control rounded-end">
                                <span class="input-icon-addon fs-16 text-gray-9">
                                    <i class="isax isax-lock-1"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Add New Card -->

<!-- Success -->
<div class="modal fade custom-modal" id="success_modal" [ngClass]="modal?'d-none':''">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <i class="isax isax-tick-circle5 fs-48 text-success"></i>
                </div>
                <h6 class="mb-1">Payment Successful</h6>
                <p class="mb-3 text-center">Your invoice payment has been successfully completed! Reference Number: #INV54896</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Back to Invoices</a>
                    <a href="javascript:void(0);" class="btn btn-primary close-modal" data-bs-toggle="offcanvas" data-bs-target="#customcanvas3" (click)="closeModal()">View  Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Success -->

<!-- Start Filter -->
<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas3">
    <div class="offcanvas-header d-block pb-0">
        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
            <h6 class="offcanvas-title">Details</h6>
            <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>
    <div class="offcanvas-body pt-3">
        <form action="#">
            <div class="mb-3">
                <label class="form-label">Status</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                        <ul class="mb-3">
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Paid
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Unpaid
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
                                    <i class="fa-solid fa-circle fs-6 text-orange me-1"></i>Overdue
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h6 class="fs-16 fw-semibold mb-2">Payment Details</h6>
                <div class="border-bottom mb-3 pb-3">
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <h6 class="fs-14 fw-semibold mb-1">PayPal</h6>
                                <p>examplepaypal.com</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <h6 class="fs-14 fw-semibold mb-1">Account </h6>
                                <p>examplepaypal.com</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <h6 class="fs-14 fw-semibold mb-1">Payment Term</h6>
                                <p class="d-flex align-items-center">15 Days <span class="badge bg-danger ms-2">Due in 8 days</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6 class="fs-16 mb-2">Invoice History</h6>
                <ul class="activity-feed bg-light rounded">
                    <li class="feed-item timeline-item">
                        <p class="mb-1">Status Changed to <span class="text-dark fw-semibold">Partially Paid</span></p>
                        <div class="invoice-date"><span><i class="isax isax-calendar me-1"></i>17 Jan 2025</span></div>
                    </li>
                    <li class="feed-item timeline-item">
                        <p class="mb-1"><span class="text-dark fw-semibold">$300 </span> Partial Amount Paid on <span class="text-dark fw-semibold">Paypal</span></p>
                        <div class="invoice-date"><span><i class="isax isax-calendar me-1"></i>16 Jan 2025</span></div>
                    </li>
                    <li class="feed-item timeline-item">
                        <p class="mb-1"><span class="text-dark fw-semibold">John Smith </span> Created <span class="text-dark fw-semibold">Invoice</span><a href="javascript:void(0);" class="text-primary">#INV1254</a></p>
                        <div class="invoice-date"><span><i class="isax isax-calendar me-1"></i>16 Jan 2025</span></div>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</div>
<!-- End Filter -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesComponent, { className: "InvoicesComponent", filePath: "src/app/features/customers/invoices/invoices.component.ts", lineNumber: 22 });
})();
export {
  InvoicesComponent
};
//# sourceMappingURL=chunk-XPIK5E4K.js.map
