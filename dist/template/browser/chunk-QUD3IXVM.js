import {
  DateRangePickerComponent
} from "./chunk-2I7DAYVQ.js";
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
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
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
  Router,
  RouterLink
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/invoices/invoice-list/invoice-list.component.ts
var _c0 = () => ({ standalone: true });
function InvoiceListComponent_For_245_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 200)(2, "div", 92)(3, "input", 201);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceListComponent_For_245_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 96)(9, "a", 97);
    \u0275\u0275element(10, "img", 202);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 99)(13, "a", 100);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 101);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 203);
    \u0275\u0275text(23);
    \u0275\u0275element(24, "i", 204);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 101);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 104)(30, "a", 105);
    \u0275\u0275element(31, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ul", 13)(33, "li")(34, "a", 107);
    \u0275\u0275element(35, "i", 108);
    \u0275\u0275text(36, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li")(38, "a", 109);
    \u0275\u0275element(39, "i", 110);
    \u0275\u0275text(40, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "li")(42, "a", 111);
    \u0275\u0275element(43, "i", 112);
    \u0275\u0275text(44, "Resend");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "li")(46, "a", 111);
    \u0275\u0275element(47, "i", 113);
    \u0275\u0275text(48, "Download Invoices as PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "li")(50, "a", 111);
    \u0275\u0275element(51, "i", 114);
    \u0275\u0275text(52, "Convert to Sales Return");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "li")(54, "a", 111);
    \u0275\u0275element(55, "i", 115);
    \u0275\u0275text(56, "Clone as Invoice");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Cancelled" || data_r2.status === "Overdue" ? "badge-soft-danger" : data_r2.status === "Partially Paid" || data_r2.status === "Draft" ? "badge-soft-info" : data_r2.status === "Unpaid" ? "badge-soft-warning" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Refunded" ? "isax-money-3" : data_r2.status === "Cancelled" ? "isax-close-circle" : data_r2.status === "Partially Paid" ? "isax-timer" : data_r2.status === "Overdue" ? "isax-danger" : data_r2.status === "Unpaid" ? "isax-slash" : data_r2.status === "Draft" ? "isax-note" : " isax-tick-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.dueDate);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r2.routes.editInvoice);
  }
}
function InvoiceListComponent_Conditional_246_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 205);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceListComponent_app_custom_pagination_1424_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var InvoiceListComponent = class _InvoiceListComponent {
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
  showFilter = false;
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
        if (this.router.url == this.routes.invoiceList) {
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
  static \u0275fac = function InvoiceListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceListComponent, selectors: [["app-invoice-list"]], decls: 1602, vars: 24, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "avatar-list-stacked", "me-1"], [1, "avatar", "avatar-rounded", "avatar-sm"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "img"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-2", "border-bottom"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "bg-primary", "rounded-circle"], [1, "isax", "isax-receipt-item"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "end-0", "bottom-0"], ["src", "assets/img/bg/card-overlay-01.svg", "alt", ""], [1, "avatar", "bg-success", "rounded-circle"], [1, "isax", "isax-tick-circle"], ["src", "assets/img/bg/card-overlay-02.svg", "alt", ""], [1, "avatar", "bg-warning", "rounded-circle"], [1, "isax", "isax-timer"], ["src", "assets/img/bg/card-overlay-03.svg", "alt", ""], [1, "avatar", "bg-danger", "rounded-circle"], [1, "isax", "isax-information"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], ["src", "assets/img/bg/card-overlay-04.svg", "alt", ""], [1, "nav", "nav-tabs", "nav-bordered", "mb-3"], [1, "nav-item"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab1", 1, "nav-link", "active"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab2", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab3", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab4", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab5", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab6", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab7", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab8", 1, "nav-link"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#tab9", 1, "nav-link"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "tab-content"], ["id", "tab1", 1, "tab-pane", "active", "show"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "createdon"], ["mat-sort-header", "amount"], ["mat-sort-header", "paid"], ["mat-sort-header", "due"], ["id", "tab2", 1, "tab-pane"], [1, "table", "table-nowrap", "datatable"], [1, "form-check", "form-check-md"], ["type", "checkbox", "id", "select-all2", 1, "form-check-input"], ["type", "checkbox", 1, "form-check-input"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "badge", "badge-soft-success", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle", "ms-1"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis-vertical"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-2"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-convert", "me-2"], [1, "isax", "isax-copy", "me-2"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/profiles/avatar-08.jpg", "alt", "img", 1, "rounded-circle"], ["id", "tab3", 1, "tab-pane"], ["type", "checkbox", "id", "select-all3", 1, "form-check-input"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "rounded-circle"], [1, "badge", "badge-soft-danger", "d-inline-flex", "align-items-center"], [1, "isax", "isax-danger", "ms-1"], ["src", "assets/img/profiles/avatar-31.jpg", "alt", "img", 1, "rounded-circle"], ["id", "tab4", 1, "tab-pane"], ["type", "checkbox", "id", "select-all4", 1, "form-check-input"], [1, "badge", "badge-soft-info", "d-inline-flex", "align-items-center"], [1, "isax", "isax-arrow-square-up", "ms-1"], ["id", "tab5", 1, "tab-pane"], ["type", "checkbox", "id", "select-all5", 1, "form-check-input"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "rounded-circle"], [1, "isax", "isax-close-circle", "ms-1"], ["src", "assets/img/profiles/avatar-23.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img", 1, "rounded-circle"], ["id", "tab6", 1, "tab-pane"], ["type", "checkbox", "id", "select-all6", 1, "form-check-input"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "rounded-circle"], [1, "isax", "isax-timer", "ms-1"], ["src", "assets/img/profiles/avatar-07.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/profiles/avatar-26.jpg", "alt", "img", 1, "rounded-circle"], ["id", "tab7", 1, "tab-pane"], ["type", "checkbox", "id", "select-all7", 1, "form-check-input"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "rounded-circle"], [1, "badge", "badge-soft-warning", "d-inline-flex", "align-items-center"], [1, "isax", "isax-slash", "ms-1"], ["src", "assets/img/profiles/avatar-17.jpg", "alt", "img", 1, "rounded-circle"], ["src", "assets/img/profiles/avatar-10.jpg", "alt", "img", 1, "rounded-circle"], ["id", "tab8", 1, "tab-pane"], ["type", "checkbox", "id", "select-all8", 1, "form-check-input"], [1, "isax", "isax-money-3", "ms-1"], ["id", "tab9", 1, "tab-pane"], ["type", "checkbox", "id", "select-all9", 1, "form-check-input"], [1, "isax", "isax-note", "ms-1"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-purple", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-orange", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function InvoiceListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "span", 4);
      \u0275\u0275element(8, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 4);
      \u0275\u0275element(12, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 4);
      \u0275\u0275element(14, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 4);
      \u0275\u0275element(16, "img", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "a", 11);
      \u0275\u0275element(19, "i", 12);
      \u0275\u0275text(20, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ul", 13)(22, "li")(23, "a", 14);
      \u0275\u0275text(24, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 14);
      \u0275\u0275text(27, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div")(29, "a", 15);
      \u0275\u0275element(30, "i", 16);
      \u0275\u0275text(31, "New Invoice ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 17)(33, "div", 18)(34, "div", 19)(35, "div", 20)(36, "div", 21)(37, "div")(38, "p", 22);
      \u0275\u0275text(39, "Total Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "h6", 23);
      \u0275\u0275text(41, "$25,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div")(43, "span", 24);
      \u0275\u0275element(44, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "p", 26)(46, "span", 27);
      \u0275\u0275element(47, "i", 28);
      \u0275\u0275text(48, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 29);
      \u0275\u0275element(51, "img", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 18)(53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "div")(57, "p", 22);
      \u0275\u0275text(58, "Paid Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h6", 23);
      \u0275\u0275text(60, "$18,500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div")(62, "span", 31);
      \u0275\u0275element(63, "i", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "p", 26)(65, "span", 27);
      \u0275\u0275element(66, "i", 28);
      \u0275\u0275text(67, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span", 29);
      \u0275\u0275element(70, "img", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 18)(72, "div", 19)(73, "div", 20)(74, "div", 21)(75, "div")(76, "p", 22);
      \u0275\u0275text(77, "Pending Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "h6", 23);
      \u0275\u0275text(79, "$6,500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div")(81, "span", 34);
      \u0275\u0275element(82, "i", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "p", 26)(84, "span", 27);
      \u0275\u0275element(85, "i", 28);
      \u0275\u0275text(86, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 29);
      \u0275\u0275element(89, "img", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 18)(91, "div", 19)(92, "div", 20)(93, "div", 21)(94, "div")(95, "p", 22);
      \u0275\u0275text(96, "Overdue Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "h6", 23);
      \u0275\u0275text(98, "$2,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div")(100, "span", 37);
      \u0275\u0275element(101, "i", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "p", 26)(103, "span", 39);
      \u0275\u0275element(104, "i", 40);
      \u0275\u0275text(105, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, " from last month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "span", 29);
      \u0275\u0275element(108, "img", 41);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(109, "ul", 42)(110, "li", 43)(111, "a", 44);
      \u0275\u0275text(112, "All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "li", 43)(114, "a", 45);
      \u0275\u0275text(115, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "li", 43)(117, "a", 46);
      \u0275\u0275text(118, "Overdue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "li", 43)(120, "a", 47);
      \u0275\u0275text(121, "Upcoming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "li", 43)(123, "a", 48);
      \u0275\u0275text(124, "Cancelled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "li", 43)(126, "a", 49);
      \u0275\u0275text(127, "Partially Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "li", 43)(129, "a", 50);
      \u0275\u0275text(130, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "li", 43)(132, "a", 51);
      \u0275\u0275text(133, "Refunded");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "li", 43)(135, "a", 52);
      \u0275\u0275text(136, "Draft");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 53)(138, "div", 54)(139, "div", 55)(140, "div", 56)(141, "div", 57)(142, "a", 58);
      \u0275\u0275element(143, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 60)(145, "label")(146, "input", 61);
      \u0275\u0275twoWayListener("ngModelChange", function InvoiceListComponent_Template_input_ngModelChange_146_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InvoiceListComponent_Template_input_ngModelChange_146_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(147, "a", 62);
      \u0275\u0275element(148, "i", 63);
      \u0275\u0275text(149, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 55)(151, "div", 64)(152, "a", 65);
      \u0275\u0275element(153, "i", 66);
      \u0275\u0275text(154, "Sort By : ");
      \u0275\u0275elementStart(155, "span", 67);
      \u0275\u0275text(156, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "ul", 68)(158, "li")(159, "a", 14);
      \u0275\u0275text(160, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "li")(162, "a", 14);
      \u0275\u0275text(163, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(164, "div", 69)(165, "a", 70);
      \u0275\u0275element(166, "i", 71);
      \u0275\u0275text(167, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "ul", 72)(169, "li")(170, "label", 73);
      \u0275\u0275element(171, "i", 74)(172, "input", 75);
      \u0275\u0275elementStart(173, "span");
      \u0275\u0275text(174, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "li")(176, "label", 73);
      \u0275\u0275element(177, "i", 74)(178, "input", 75);
      \u0275\u0275elementStart(179, "span");
      \u0275\u0275text(180, "Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "li")(182, "label", 73);
      \u0275\u0275element(183, "i", 74)(184, "input", 75);
      \u0275\u0275elementStart(185, "span");
      \u0275\u0275text(186, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(187, "li")(188, "label", 73);
      \u0275\u0275element(189, "i", 74)(190, "input", 75);
      \u0275\u0275elementStart(191, "span");
      \u0275\u0275text(192, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "li")(194, "label", 73);
      \u0275\u0275element(195, "i", 74)(196, "input", 75);
      \u0275\u0275elementStart(197, "span");
      \u0275\u0275text(198, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(199, "li")(200, "label", 73);
      \u0275\u0275element(201, "i", 74)(202, "input", 75);
      \u0275\u0275elementStart(203, "span");
      \u0275\u0275text(204, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "li")(206, "label", 73);
      \u0275\u0275element(207, "i", 74)(208, "input", 76);
      \u0275\u0275elementStart(209, "span");
      \u0275\u0275text(210, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "li")(212, "label", 73);
      \u0275\u0275element(213, "i", 74)(214, "input", 76);
      \u0275\u0275elementStart(215, "span");
      \u0275\u0275text(216, "Due Date");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(217, "div", 77)(218, "div", 78)(219, "div", 79)(220, "table", 80);
      \u0275\u0275listener("matSortChange", function InvoiceListComponent_Template_table_matSortChange_220_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(221, "thead", 81)(222, "tr")(223, "th", 82)(224, "div", 83);
      \u0275\u0275listener("click", function InvoiceListComponent_Template_div_click_224_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(225, "input", 84);
      \u0275\u0275twoWayListener("ngModelChange", function InvoiceListComponent_Template_input_ngModelChange_225_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(226, "th", 82);
      \u0275\u0275text(227, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "th", 85);
      \u0275\u0275text(229, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "th", 86);
      \u0275\u0275text(231, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "th", 87);
      \u0275\u0275text(233, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "th", 88);
      \u0275\u0275text(235, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "th", 82);
      \u0275\u0275text(237, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "th", 82);
      \u0275\u0275text(239, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "th", 89);
      \u0275\u0275text(241, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(242, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "tbody");
      \u0275\u0275repeaterCreate(244, InvoiceListComponent_For_245_Template, 57, 14, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(246, InvoiceListComponent_Conditional_246_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(247, "div", 90)(248, "div", 79)(249, "table", 91)(250, "thead", 81)(251, "tr")(252, "th", 82)(253, "div", 92);
      \u0275\u0275element(254, "input", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "th", 82);
      \u0275\u0275text(256, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "th");
      \u0275\u0275text(258, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "th");
      \u0275\u0275text(260, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "th");
      \u0275\u0275text(262, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "th");
      \u0275\u0275text(264, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "th", 82);
      \u0275\u0275text(266, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "th", 82);
      \u0275\u0275text(268, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "th");
      \u0275\u0275text(270, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(271, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "tbody")(273, "tr")(274, "td")(275, "div", 92);
      \u0275\u0275element(276, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "td")(278, "a", 95);
      \u0275\u0275text(279, "INV00025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "td")(281, "div", 96)(282, "a", 97);
      \u0275\u0275element(283, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "div")(285, "h6", 99)(286, "a", 100);
      \u0275\u0275text(287, "Emily Clark");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(288, "td");
      \u0275\u0275text(289, "22 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "td", 101);
      \u0275\u0275text(291, "$10,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "td");
      \u0275\u0275text(293, "$5,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "td")(295, "span", 102);
      \u0275\u0275text(296, "Paid ");
      \u0275\u0275element(297, "i", 103);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "td", 101);
      \u0275\u0275text(299, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "td");
      \u0275\u0275text(301, "04 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "td", 104)(303, "a", 105);
      \u0275\u0275element(304, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "ul", 13)(306, "li")(307, "a", 107);
      \u0275\u0275element(308, "i", 108);
      \u0275\u0275text(309, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "li")(311, "a", 109);
      \u0275\u0275element(312, "i", 110);
      \u0275\u0275text(313, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "li")(315, "a", 111);
      \u0275\u0275element(316, "i", 112);
      \u0275\u0275text(317, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "li")(319, "a", 111);
      \u0275\u0275element(320, "i", 113);
      \u0275\u0275text(321, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "li")(323, "a", 111);
      \u0275\u0275element(324, "i", 114);
      \u0275\u0275text(325, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "li")(327, "a", 111);
      \u0275\u0275element(328, "i", 115);
      \u0275\u0275text(329, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(330, "tr")(331, "td")(332, "div", 92);
      \u0275\u0275element(333, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "td")(335, "a", 95);
      \u0275\u0275text(336, "INV00020");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "td")(338, "div", 96)(339, "a", 97);
      \u0275\u0275element(340, "img", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "div")(342, "h6", 99)(343, "a", 100);
      \u0275\u0275text(344, "David Anderson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(345, "td");
      \u0275\u0275text(346, "09 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "td", 101);
      \u0275\u0275text(348, "$1,20,500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "td");
      \u0275\u0275text(350, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "td")(352, "span", 102);
      \u0275\u0275text(353, "Paid ");
      \u0275\u0275element(354, "i", 103);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "td", 101);
      \u0275\u0275text(356, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "td");
      \u0275\u0275text(358, "22 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "td", 104)(360, "a", 105);
      \u0275\u0275element(361, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "ul", 13)(363, "li")(364, "a", 107);
      \u0275\u0275element(365, "i", 108);
      \u0275\u0275text(366, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "li")(368, "a", 109);
      \u0275\u0275element(369, "i", 110);
      \u0275\u0275text(370, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "li")(372, "a", 111);
      \u0275\u0275element(373, "i", 112);
      \u0275\u0275text(374, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(375, "li")(376, "a", 111);
      \u0275\u0275element(377, "i", 113);
      \u0275\u0275text(378, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(379, "li")(380, "a", 111);
      \u0275\u0275element(381, "i", 114);
      \u0275\u0275text(382, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(383, "li")(384, "a", 111);
      \u0275\u0275element(385, "i", 115);
      \u0275\u0275text(386, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(387, "tr")(388, "td")(389, "div", 92);
      \u0275\u0275element(390, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "td")(392, "a", 95);
      \u0275\u0275text(393, "INV00015");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "td")(395, "div", 96)(396, "a", 97);
      \u0275\u0275element(397, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "div")(399, "h6", 99)(400, "a", 100);
      \u0275\u0275text(401, "Charlotte Brown");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(402, "td");
      \u0275\u0275text(403, "05 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "td", 101);
      \u0275\u0275text(405, "$87,650");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "td");
      \u0275\u0275text(407, "$40,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "td")(409, "span", 102);
      \u0275\u0275text(410, "Paid ");
      \u0275\u0275element(411, "i", 103);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(412, "td", 101);
      \u0275\u0275text(413, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "td");
      \u0275\u0275text(415, "18 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "td", 104)(417, "a", 105);
      \u0275\u0275element(418, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "ul", 13)(420, "li")(421, "a", 107);
      \u0275\u0275element(422, "i", 108);
      \u0275\u0275text(423, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(424, "li")(425, "a", 109);
      \u0275\u0275element(426, "i", 110);
      \u0275\u0275text(427, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(428, "li")(429, "a", 111);
      \u0275\u0275element(430, "i", 112);
      \u0275\u0275text(431, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(432, "li")(433, "a", 111);
      \u0275\u0275element(434, "i", 113);
      \u0275\u0275text(435, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(436, "li")(437, "a", 111);
      \u0275\u0275element(438, "i", 114);
      \u0275\u0275text(439, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(440, "li")(441, "a", 111);
      \u0275\u0275element(442, "i", 115);
      \u0275\u0275text(443, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(444, "div", 118)(445, "div", 79)(446, "table", 91)(447, "thead", 81)(448, "tr")(449, "th", 82)(450, "div", 92);
      \u0275\u0275element(451, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(452, "th", 82);
      \u0275\u0275text(453, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "th");
      \u0275\u0275text(455, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "th");
      \u0275\u0275text(457, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "th");
      \u0275\u0275text(459, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "th");
      \u0275\u0275text(461, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "th", 82);
      \u0275\u0275text(463, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "th", 82);
      \u0275\u0275text(465, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "th");
      \u0275\u0275text(467, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(468, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(469, "tbody")(470, "tr")(471, "td")(472, "div", 92);
      \u0275\u0275element(473, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(474, "td")(475, "a", 95);
      \u0275\u0275text(476, "INV00021");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(477, "td")(478, "div", 96)(479, "a", 97);
      \u0275\u0275element(480, "img", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "div")(482, "h6", 99)(483, "a", 100);
      \u0275\u0275text(484, "Olivia Harris");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(485, "td");
      \u0275\u0275text(486, "04 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(487, "td", 101);
      \u0275\u0275text(488, "$99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "td");
      \u0275\u0275text(490, "$80,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "td")(492, "span", 121);
      \u0275\u0275text(493, "Overdue ");
      \u0275\u0275element(494, "i", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(495, "td", 101);
      \u0275\u0275text(496, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "td");
      \u0275\u0275text(498, "17 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "td", 104)(500, "a", 105);
      \u0275\u0275element(501, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "ul", 13)(503, "li")(504, "a", 107);
      \u0275\u0275element(505, "i", 108);
      \u0275\u0275text(506, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "li")(508, "a", 109);
      \u0275\u0275element(509, "i", 110);
      \u0275\u0275text(510, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(511, "li")(512, "a", 111);
      \u0275\u0275element(513, "i", 112);
      \u0275\u0275text(514, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(515, "li")(516, "a", 111);
      \u0275\u0275element(517, "i", 113);
      \u0275\u0275text(518, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "li")(520, "a", 111);
      \u0275\u0275element(521, "i", 114);
      \u0275\u0275text(522, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(523, "li")(524, "a", 111);
      \u0275\u0275element(525, "i", 115);
      \u0275\u0275text(526, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(527, "tr")(528, "td")(529, "div", 92);
      \u0275\u0275element(530, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(531, "td")(532, "a", 95);
      \u0275\u0275text(533, "INV00016");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "td")(535, "div", 96)(536, "a", 97);
      \u0275\u0275element(537, "img", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "div")(539, "h6", 99)(540, "a", 100);
      \u0275\u0275text(541, "Daniel Martinez");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(542, "td");
      \u0275\u0275text(543, "12 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(544, "td", 101);
      \u0275\u0275text(545, "$9,99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "td");
      \u0275\u0275text(547, "$4,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(548, "td")(549, "span", 121);
      \u0275\u0275text(550, "Overdue ");
      \u0275\u0275element(551, "i", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(552, "td", 101);
      \u0275\u0275text(553, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "td");
      \u0275\u0275text(555, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "td", 104)(557, "a", 105);
      \u0275\u0275element(558, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "ul", 13)(560, "li")(561, "a", 107);
      \u0275\u0275element(562, "i", 108);
      \u0275\u0275text(563, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "li")(565, "a", 109);
      \u0275\u0275element(566, "i", 110);
      \u0275\u0275text(567, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(568, "li")(569, "a", 111);
      \u0275\u0275element(570, "i", 112);
      \u0275\u0275text(571, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(572, "li")(573, "a", 111);
      \u0275\u0275element(574, "i", 113);
      \u0275\u0275text(575, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "li")(577, "a", 111);
      \u0275\u0275element(578, "i", 114);
      \u0275\u0275text(579, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(580, "li")(581, "a", 111);
      \u0275\u0275element(582, "i", 115);
      \u0275\u0275text(583, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(584, "div", 124)(585, "div", 79)(586, "table", 91)(587, "thead", 81)(588, "tr")(589, "th", 82)(590, "div", 92);
      \u0275\u0275element(591, "input", 125);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(592, "th", 82);
      \u0275\u0275text(593, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "th");
      \u0275\u0275text(595, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "th");
      \u0275\u0275text(597, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "th");
      \u0275\u0275text(599, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "th");
      \u0275\u0275text(601, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "th", 82);
      \u0275\u0275text(603, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(604, "th", 82);
      \u0275\u0275text(605, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "th");
      \u0275\u0275text(607, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(608, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(609, "tbody")(610, "tr")(611, "td")(612, "div", 92);
      \u0275\u0275element(613, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(614, "td")(615, "a", 95);
      \u0275\u0275text(616, "INV00016");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(617, "td")(618, "div", 96)(619, "a", 97);
      \u0275\u0275element(620, "img", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(621, "div")(622, "h6", 99)(623, "a", 100);
      \u0275\u0275text(624, "Daniel Martinez");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(625, "td");
      \u0275\u0275text(626, "12 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "td", 101);
      \u0275\u0275text(628, "$9,99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "td");
      \u0275\u0275text(630, "$4,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "td")(632, "span", 126);
      \u0275\u0275text(633, "Upcoming ");
      \u0275\u0275element(634, "i", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(635, "td", 101);
      \u0275\u0275text(636, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "td");
      \u0275\u0275text(638, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(639, "td", 104)(640, "a", 105);
      \u0275\u0275element(641, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(642, "ul", 13)(643, "li")(644, "a", 107);
      \u0275\u0275element(645, "i", 108);
      \u0275\u0275text(646, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(647, "li")(648, "a", 109);
      \u0275\u0275element(649, "i", 110);
      \u0275\u0275text(650, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(651, "li")(652, "a", 111);
      \u0275\u0275element(653, "i", 112);
      \u0275\u0275text(654, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(655, "li")(656, "a", 111);
      \u0275\u0275element(657, "i", 113);
      \u0275\u0275text(658, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(659, "li")(660, "a", 111);
      \u0275\u0275element(661, "i", 114);
      \u0275\u0275text(662, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(663, "li")(664, "a", 111);
      \u0275\u0275element(665, "i", 115);
      \u0275\u0275text(666, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(667, "div", 128)(668, "div", 79)(669, "table", 91)(670, "thead", 81)(671, "tr")(672, "th", 82)(673, "div", 92);
      \u0275\u0275element(674, "input", 129);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(675, "th", 82);
      \u0275\u0275text(676, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(677, "th");
      \u0275\u0275text(678, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "th");
      \u0275\u0275text(680, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(681, "th");
      \u0275\u0275text(682, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "th");
      \u0275\u0275text(684, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(685, "th", 82);
      \u0275\u0275text(686, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(687, "th", 82);
      \u0275\u0275text(688, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(689, "th");
      \u0275\u0275text(690, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(691, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(692, "tbody")(693, "tr")(694, "td")(695, "div", 92);
      \u0275\u0275element(696, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(697, "td")(698, "a", 95);
      \u0275\u0275text(699, "INV00023");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(700, "td")(701, "div", 96)(702, "a", 97);
      \u0275\u0275element(703, "img", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "div")(705, "h6", 99)(706, "a", 100);
      \u0275\u0275text(707, "Sophia White");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(708, "td");
      \u0275\u0275text(709, "30 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(710, "td", 101);
      \u0275\u0275text(711, "$50,125");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(712, "td");
      \u0275\u0275text(713, "$20,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(714, "td")(715, "span", 121);
      \u0275\u0275text(716, "Cancelled");
      \u0275\u0275element(717, "i", 131);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(718, "td", 101);
      \u0275\u0275text(719, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(720, "td");
      \u0275\u0275text(721, "13 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(722, "td", 104)(723, "a", 105);
      \u0275\u0275element(724, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(725, "ul", 13)(726, "li")(727, "a", 107);
      \u0275\u0275element(728, "i", 108);
      \u0275\u0275text(729, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(730, "li")(731, "a", 109);
      \u0275\u0275element(732, "i", 110);
      \u0275\u0275text(733, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(734, "li")(735, "a", 111);
      \u0275\u0275element(736, "i", 112);
      \u0275\u0275text(737, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(738, "li")(739, "a", 111);
      \u0275\u0275element(740, "i", 113);
      \u0275\u0275text(741, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(742, "li")(743, "a", 111);
      \u0275\u0275element(744, "i", 114);
      \u0275\u0275text(745, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(746, "li")(747, "a", 111);
      \u0275\u0275element(748, "i", 115);
      \u0275\u0275text(749, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(750, "tr")(751, "td")(752, "div", 92);
      \u0275\u0275element(753, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(754, "td")(755, "a", 95);
      \u0275\u0275text(756, "INV00018");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(757, "td")(758, "div", 96)(759, "a", 97);
      \u0275\u0275element(760, "img", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(761, "div")(762, "h6", 99)(763, "a", 100);
      \u0275\u0275text(764, "Robert Thomas");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(765, "td");
      \u0275\u0275text(766, "15 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "td", 101);
      \u0275\u0275text(768, "$5,00,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(769, "td");
      \u0275\u0275text(770, "$5,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "td")(772, "span", 121);
      \u0275\u0275text(773, "Cancelled ");
      \u0275\u0275element(774, "i", 131);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(775, "td", 101);
      \u0275\u0275text(776, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(777, "td");
      \u0275\u0275text(778, "28 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(779, "td", 104)(780, "a", 105);
      \u0275\u0275element(781, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(782, "ul", 13)(783, "li")(784, "a", 107);
      \u0275\u0275element(785, "i", 108);
      \u0275\u0275text(786, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(787, "li")(788, "a", 109);
      \u0275\u0275element(789, "i", 110);
      \u0275\u0275text(790, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(791, "li")(792, "a", 111);
      \u0275\u0275element(793, "i", 112);
      \u0275\u0275text(794, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(795, "li")(796, "a", 111);
      \u0275\u0275element(797, "i", 113);
      \u0275\u0275text(798, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(799, "li")(800, "a", 111);
      \u0275\u0275element(801, "i", 114);
      \u0275\u0275text(802, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(803, "li")(804, "a", 111);
      \u0275\u0275element(805, "i", 115);
      \u0275\u0275text(806, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(807, "tr")(808, "td")(809, "div", 92);
      \u0275\u0275element(810, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(811, "td")(812, "a", 95);
      \u0275\u0275text(813, "INV00013");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(814, "td")(815, "div", 96)(816, "a", 97);
      \u0275\u0275element(817, "img", 133);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(818, "div")(819, "h6", 99)(820, "a", 100);
      \u0275\u0275text(821, "Mia Thompson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(822, "td");
      \u0275\u0275text(823, "02 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(824, "td", 101);
      \u0275\u0275text(825, "$33,210");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(826, "td");
      \u0275\u0275text(827, "$15,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "td")(829, "span", 121);
      \u0275\u0275text(830, "Cancelled ");
      \u0275\u0275element(831, "i", 131);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(832, "td", 101);
      \u0275\u0275text(833, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(834, "td");
      \u0275\u0275text(835, "15 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(836, "td", 104)(837, "a", 105);
      \u0275\u0275element(838, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(839, "ul", 13)(840, "li")(841, "a", 107);
      \u0275\u0275element(842, "i", 108);
      \u0275\u0275text(843, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(844, "li")(845, "a", 109);
      \u0275\u0275element(846, "i", 110);
      \u0275\u0275text(847, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(848, "li")(849, "a", 111);
      \u0275\u0275element(850, "i", 112);
      \u0275\u0275text(851, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(852, "li")(853, "a", 111);
      \u0275\u0275element(854, "i", 113);
      \u0275\u0275text(855, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(856, "li")(857, "a", 111);
      \u0275\u0275element(858, "i", 114);
      \u0275\u0275text(859, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(860, "li")(861, "a", 111);
      \u0275\u0275element(862, "i", 115);
      \u0275\u0275text(863, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(864, "div", 134)(865, "div", 79)(866, "table", 91)(867, "thead", 81)(868, "tr")(869, "th", 82)(870, "div", 92);
      \u0275\u0275element(871, "input", 135);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(872, "th", 82);
      \u0275\u0275text(873, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(874, "th");
      \u0275\u0275text(875, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "th");
      \u0275\u0275text(877, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(878, "th");
      \u0275\u0275text(879, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(880, "th");
      \u0275\u0275text(881, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(882, "th", 82);
      \u0275\u0275text(883, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(884, "th", 82);
      \u0275\u0275text(885, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(886, "th");
      \u0275\u0275text(887, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(888, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(889, "tbody")(890, "tr")(891, "td")(892, "div", 92);
      \u0275\u0275element(893, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(894, "td")(895, "a", 95);
      \u0275\u0275text(896, "INV00022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(897, "td")(898, "div", 96)(899, "a", 97);
      \u0275\u0275element(900, "img", 136);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(901, "div")(902, "h6", 99)(903, "a", 100);
      \u0275\u0275text(904, "Michael Johnson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(905, "td");
      \u0275\u0275text(906, "17 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(907, "td", 101);
      \u0275\u0275text(908, "$75,900");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(909, "td");
      \u0275\u0275text(910, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(911, "td")(912, "span", 126);
      \u0275\u0275text(913, "Partially Paid ");
      \u0275\u0275element(914, "i", 137);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(915, "td", 101);
      \u0275\u0275text(916, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(917, "td");
      \u0275\u0275text(918, "30 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(919, "td", 104)(920, "a", 105);
      \u0275\u0275element(921, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(922, "ul", 13)(923, "li")(924, "a", 107);
      \u0275\u0275element(925, "i", 108);
      \u0275\u0275text(926, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(927, "li")(928, "a", 109);
      \u0275\u0275element(929, "i", 110);
      \u0275\u0275text(930, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(931, "li")(932, "a", 111);
      \u0275\u0275element(933, "i", 112);
      \u0275\u0275text(934, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(935, "li")(936, "a", 111);
      \u0275\u0275element(937, "i", 113);
      \u0275\u0275text(938, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(939, "li")(940, "a", 111);
      \u0275\u0275element(941, "i", 114);
      \u0275\u0275text(942, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(943, "li")(944, "a", 111);
      \u0275\u0275element(945, "i", 115);
      \u0275\u0275text(946, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(947, "tr")(948, "td")(949, "div", 92);
      \u0275\u0275element(950, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(951, "td")(952, "a", 95);
      \u0275\u0275text(953, "INV00017");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(954, "td")(955, "div", 96)(956, "a", 97);
      \u0275\u0275element(957, "img", 138);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(958, "div")(959, "h6", 99)(960, "a", 100);
      \u0275\u0275text(961, "Isabella Scott");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(962, "td");
      \u0275\u0275text(963, "30 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(964, "td", 101);
      \u0275\u0275text(965, "$7,50,300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(966, "td");
      \u0275\u0275text(967, "$2,50,500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(968, "td")(969, "span", 126);
      \u0275\u0275text(970, "Partially Paid ");
      \u0275\u0275element(971, "i", 137);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(972, "td", 101);
      \u0275\u0275text(973, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(974, "td");
      \u0275\u0275text(975, "12 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(976, "td", 104)(977, "a", 105);
      \u0275\u0275element(978, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(979, "ul", 13)(980, "li")(981, "a", 107);
      \u0275\u0275element(982, "i", 108);
      \u0275\u0275text(983, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(984, "li")(985, "a", 109);
      \u0275\u0275element(986, "i", 110);
      \u0275\u0275text(987, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(988, "li")(989, "a", 111);
      \u0275\u0275element(990, "i", 112);
      \u0275\u0275text(991, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(992, "li")(993, "a", 111);
      \u0275\u0275element(994, "i", 113);
      \u0275\u0275text(995, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(996, "li")(997, "a", 111);
      \u0275\u0275element(998, "i", 114);
      \u0275\u0275text(999, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1e3, "li")(1001, "a", 111);
      \u0275\u0275element(1002, "i", 115);
      \u0275\u0275text(1003, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1004, "tr")(1005, "td")(1006, "div", 92);
      \u0275\u0275element(1007, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1008, "td")(1009, "a", 95);
      \u0275\u0275text(1010, "INV00012");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1011, "td")(1012, "div", 96)(1013, "a", 97);
      \u0275\u0275element(1014, "img", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1015, "div")(1016, "h6", 99)(1017, "a", 100);
      \u0275\u0275text(1018, "Amelia Robinson");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1019, "td");
      \u0275\u0275text(1020, "07 Aug 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1021, "td", 101);
      \u0275\u0275text(1022, "$2,10,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1023, "td");
      \u0275\u0275text(1024, "$1,50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1025, "td")(1026, "span", 126);
      \u0275\u0275text(1027, "Partially Paid ");
      \u0275\u0275element(1028, "i", 137);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1029, "td", 101);
      \u0275\u0275text(1030, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1031, "td");
      \u0275\u0275text(1032, "20 Aug 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1033, "td", 104)(1034, "a", 105);
      \u0275\u0275element(1035, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1036, "ul", 13)(1037, "li")(1038, "a", 107);
      \u0275\u0275element(1039, "i", 108);
      \u0275\u0275text(1040, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1041, "li")(1042, "a", 109);
      \u0275\u0275element(1043, "i", 110);
      \u0275\u0275text(1044, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1045, "li")(1046, "a", 111);
      \u0275\u0275element(1047, "i", 112);
      \u0275\u0275text(1048, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1049, "li")(1050, "a", 111);
      \u0275\u0275element(1051, "i", 113);
      \u0275\u0275text(1052, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1053, "li")(1054, "a", 111);
      \u0275\u0275element(1055, "i", 114);
      \u0275\u0275text(1056, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1057, "li")(1058, "a", 111);
      \u0275\u0275element(1059, "i", 115);
      \u0275\u0275text(1060, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(1061, "div", 140)(1062, "div", 79)(1063, "table", 91)(1064, "thead", 81)(1065, "tr")(1066, "th", 82)(1067, "div", 92);
      \u0275\u0275element(1068, "input", 141);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1069, "th", 82);
      \u0275\u0275text(1070, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1071, "th");
      \u0275\u0275text(1072, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1073, "th");
      \u0275\u0275text(1074, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1075, "th");
      \u0275\u0275text(1076, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1077, "th");
      \u0275\u0275text(1078, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1079, "th", 82);
      \u0275\u0275text(1080, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1081, "th", 82);
      \u0275\u0275text(1082, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1083, "th");
      \u0275\u0275text(1084, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1085, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1086, "tbody")(1087, "tr")(1088, "td")(1089, "div", 92);
      \u0275\u0275element(1090, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1091, "td")(1092, "a", 95);
      \u0275\u0275text(1093, "INV00024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1094, "td")(1095, "div", 96)(1096, "a", 97);
      \u0275\u0275element(1097, "img", 142);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1098, "div")(1099, "h6", 99)(1100, "a", 100);
      \u0275\u0275text(1101, "John Carter");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1102, "td");
      \u0275\u0275text(1103, "07 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1104, "td", 101);
      \u0275\u0275text(1105, "$25,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1106, "td");
      \u0275\u0275text(1107, "$10,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1108, "td")(1109, "span", 143);
      \u0275\u0275text(1110, "Unpaid");
      \u0275\u0275element(1111, "i", 144);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1112, "td", 101);
      \u0275\u0275text(1113, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1114, "td");
      \u0275\u0275text(1115, "20 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1116, "td", 104)(1117, "a", 105);
      \u0275\u0275element(1118, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1119, "ul", 13)(1120, "li")(1121, "a", 107);
      \u0275\u0275element(1122, "i", 108);
      \u0275\u0275text(1123, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1124, "li")(1125, "a", 109);
      \u0275\u0275element(1126, "i", 110);
      \u0275\u0275text(1127, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1128, "li")(1129, "a", 111);
      \u0275\u0275element(1130, "i", 112);
      \u0275\u0275text(1131, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1132, "li")(1133, "a", 111);
      \u0275\u0275element(1134, "i", 113);
      \u0275\u0275text(1135, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1136, "li")(1137, "a", 111);
      \u0275\u0275element(1138, "i", 114);
      \u0275\u0275text(1139, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1140, "li")(1141, "a", 111);
      \u0275\u0275element(1142, "i", 115);
      \u0275\u0275text(1143, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1144, "tr")(1145, "td")(1146, "div", 92);
      \u0275\u0275element(1147, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1148, "td")(1149, "a", 95);
      \u0275\u0275text(1150, "INV00019");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1151, "td")(1152, "div", 96)(1153, "a", 97);
      \u0275\u0275element(1154, "img", 145);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1155, "div")(1156, "h6", 99)(1157, "a", 100);
      \u0275\u0275text(1158, "Emma Lewis");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1159, "td");
      \u0275\u0275text(1160, "02 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1161, "td", 101);
      \u0275\u0275text(1162, "$2,50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1163, "td");
      \u0275\u0275text(1164, "$1,25,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1165, "td")(1166, "span", 143);
      \u0275\u0275text(1167, "Unpaid ");
      \u0275\u0275element(1168, "i", 144);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1169, "td", 101);
      \u0275\u0275text(1170, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1171, "td");
      \u0275\u0275text(1172, "15 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1173, "td", 104)(1174, "a", 105);
      \u0275\u0275element(1175, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1176, "ul", 13)(1177, "li")(1178, "a", 107);
      \u0275\u0275element(1179, "i", 108);
      \u0275\u0275text(1180, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1181, "li")(1182, "a", 109);
      \u0275\u0275element(1183, "i", 110);
      \u0275\u0275text(1184, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1185, "li")(1186, "a", 111);
      \u0275\u0275element(1187, "i", 112);
      \u0275\u0275text(1188, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1189, "li")(1190, "a", 111);
      \u0275\u0275element(1191, "i", 113);
      \u0275\u0275text(1192, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1193, "li")(1194, "a", 111);
      \u0275\u0275element(1195, "i", 114);
      \u0275\u0275text(1196, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1197, "li")(1198, "a", 111);
      \u0275\u0275element(1199, "i", 115);
      \u0275\u0275text(1200, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1201, "tr")(1202, "td")(1203, "div", 92);
      \u0275\u0275element(1204, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1205, "td")(1206, "a", 95);
      \u0275\u0275text(1207, "INV00014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1208, "td")(1209, "div", 96)(1210, "a", 97);
      \u0275\u0275element(1211, "img", 146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1212, "div")(1213, "h6", 99)(1214, "a", 100);
      \u0275\u0275text(1215, "William Parker");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1216, "td");
      \u0275\u0275text(1217, "05 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1218, "td", 101);
      \u0275\u0275text(1219, "$87,650");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1220, "td");
      \u0275\u0275text(1221, "$40,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1222, "td")(1223, "span", 143);
      \u0275\u0275text(1224, "Unpaid ");
      \u0275\u0275element(1225, "i", 144);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1226, "td", 101);
      \u0275\u0275text(1227, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1228, "td");
      \u0275\u0275text(1229, "18 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1230, "td", 104)(1231, "a", 105);
      \u0275\u0275element(1232, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1233, "ul", 13)(1234, "li")(1235, "a", 107);
      \u0275\u0275element(1236, "i", 108);
      \u0275\u0275text(1237, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1238, "li")(1239, "a", 109);
      \u0275\u0275element(1240, "i", 110);
      \u0275\u0275text(1241, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1242, "li")(1243, "a", 111);
      \u0275\u0275element(1244, "i", 112);
      \u0275\u0275text(1245, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1246, "li")(1247, "a", 111);
      \u0275\u0275element(1248, "i", 113);
      \u0275\u0275text(1249, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1250, "li")(1251, "a", 111);
      \u0275\u0275element(1252, "i", 114);
      \u0275\u0275text(1253, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1254, "li")(1255, "a", 111);
      \u0275\u0275element(1256, "i", 115);
      \u0275\u0275text(1257, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(1258, "div", 147)(1259, "div", 79)(1260, "table", 91)(1261, "thead", 81)(1262, "tr")(1263, "th", 82)(1264, "div", 92);
      \u0275\u0275element(1265, "input", 148);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1266, "th", 82);
      \u0275\u0275text(1267, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1268, "th");
      \u0275\u0275text(1269, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1270, "th");
      \u0275\u0275text(1271, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1272, "th");
      \u0275\u0275text(1273, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1274, "th");
      \u0275\u0275text(1275, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1276, "th", 82);
      \u0275\u0275text(1277, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1278, "th", 82);
      \u0275\u0275text(1279, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1280, "th");
      \u0275\u0275text(1281, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1282, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1283, "tbody")(1284, "tr")(1285, "td")(1286, "div", 92);
      \u0275\u0275element(1287, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1288, "td")(1289, "a", 95);
      \u0275\u0275text(1290, "INV00024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1291, "td")(1292, "div", 96)(1293, "a", 97);
      \u0275\u0275element(1294, "img", 142);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1295, "div")(1296, "h6", 99)(1297, "a", 100);
      \u0275\u0275text(1298, "John Carter");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1299, "td");
      \u0275\u0275text(1300, "07 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1301, "td", 101);
      \u0275\u0275text(1302, "$25,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1303, "td");
      \u0275\u0275text(1304, "$10,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1305, "td")(1306, "span", 102);
      \u0275\u0275text(1307, "Refunded");
      \u0275\u0275element(1308, "i", 149);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1309, "td", 101);
      \u0275\u0275text(1310, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1311, "td");
      \u0275\u0275text(1312, "20 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1313, "td", 104)(1314, "a", 105);
      \u0275\u0275element(1315, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1316, "ul", 13)(1317, "li")(1318, "a", 107);
      \u0275\u0275element(1319, "i", 108);
      \u0275\u0275text(1320, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1321, "li")(1322, "a", 109);
      \u0275\u0275element(1323, "i", 110);
      \u0275\u0275text(1324, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1325, "li")(1326, "a", 111);
      \u0275\u0275element(1327, "i", 112);
      \u0275\u0275text(1328, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1329, "li")(1330, "a", 111);
      \u0275\u0275element(1331, "i", 113);
      \u0275\u0275text(1332, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1333, "li")(1334, "a", 111);
      \u0275\u0275element(1335, "i", 114);
      \u0275\u0275text(1336, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1337, "li")(1338, "a", 111);
      \u0275\u0275element(1339, "i", 115);
      \u0275\u0275text(1340, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(1341, "div", 150)(1342, "div", 79)(1343, "table", 91)(1344, "thead", 81)(1345, "tr")(1346, "th", 82)(1347, "div", 92);
      \u0275\u0275element(1348, "input", 151);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1349, "th", 82);
      \u0275\u0275text(1350, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1351, "th");
      \u0275\u0275text(1352, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1353, "th");
      \u0275\u0275text(1354, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1355, "th");
      \u0275\u0275text(1356, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1357, "th");
      \u0275\u0275text(1358, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1359, "th", 82);
      \u0275\u0275text(1360, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1361, "th", 82);
      \u0275\u0275text(1362, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1363, "th");
      \u0275\u0275text(1364, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1365, "th", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1366, "tbody")(1367, "tr")(1368, "td")(1369, "div", 92);
      \u0275\u0275element(1370, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1371, "td")(1372, "a", 95);
      \u0275\u0275text(1373, "INV00018");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1374, "td")(1375, "div", 96)(1376, "a", 97);
      \u0275\u0275element(1377, "img", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1378, "div")(1379, "h6", 99)(1380, "a", 100);
      \u0275\u0275text(1381, "Robert Thomas");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1382, "td");
      \u0275\u0275text(1383, "15 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1384, "td", 101);
      \u0275\u0275text(1385, "$5,00,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1386, "td");
      \u0275\u0275text(1387, "$5,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1388, "td")(1389, "span", 126);
      \u0275\u0275text(1390, "Draft ");
      \u0275\u0275element(1391, "i", 152);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1392, "td", 101);
      \u0275\u0275text(1393, "Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1394, "td");
      \u0275\u0275text(1395, "28 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1396, "td", 104)(1397, "a", 105);
      \u0275\u0275element(1398, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1399, "ul", 13)(1400, "li")(1401, "a", 107);
      \u0275\u0275element(1402, "i", 108);
      \u0275\u0275text(1403, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1404, "li")(1405, "a", 109);
      \u0275\u0275element(1406, "i", 110);
      \u0275\u0275text(1407, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1408, "li")(1409, "a", 111);
      \u0275\u0275element(1410, "i", 112);
      \u0275\u0275text(1411, "Resend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1412, "li")(1413, "a", 111);
      \u0275\u0275element(1414, "i", 113);
      \u0275\u0275text(1415, "Download Invoices as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1416, "li")(1417, "a", 111);
      \u0275\u0275element(1418, "i", 114);
      \u0275\u0275text(1419, "Convert to Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1420, "li")(1421, "a", 111);
      \u0275\u0275element(1422, "i", 115);
      \u0275\u0275text(1423, "Clone as Invoice");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275template(1424, InvoiceListComponent_app_custom_pagination_1424_Template, 1, 0, "app-custom-pagination", 153);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1425, "div", 154)(1426, "div", 155)(1427, "div", 156)(1428, "h6", 157);
      \u0275\u0275text(1429, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1430, "button", 158);
      \u0275\u0275element(1431, "i", 159);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1432, "div", 160)(1433, "form", 161)(1434, "div", 53)(1435, "label", 162);
      \u0275\u0275text(1436, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1437, "div", 69)(1438, "a", 163);
      \u0275\u0275text(1439, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1440, "div", 164)(1441, "div", 53)(1442, "div", 165)(1443, "span", 166);
      \u0275\u0275element(1444, "i", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1445, "input", 168);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1446, "ul", 53)(1447, "li", 169)(1448, "label", 170);
      \u0275\u0275element(1449, "input", 171);
      \u0275\u0275text(1450, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1451, "a", 172);
      \u0275\u0275text(1452, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1453, "li")(1454, "label", 173);
      \u0275\u0275element(1455, "input", 76);
      \u0275\u0275elementStart(1456, "span", 174);
      \u0275\u0275element(1457, "img", 175);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1458, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1459, "li")(1460, "label", 173);
      \u0275\u0275element(1461, "input", 76);
      \u0275\u0275elementStart(1462, "span", 174);
      \u0275\u0275element(1463, "img", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1464, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1465, "li")(1466, "label", 173);
      \u0275\u0275element(1467, "input", 76);
      \u0275\u0275elementStart(1468, "span", 174);
      \u0275\u0275element(1469, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1470, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1471, "li")(1472, "label", 173);
      \u0275\u0275element(1473, "input", 76);
      \u0275\u0275elementStart(1474, "span", 174);
      \u0275\u0275element(1475, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1476, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1477, "div", 179)(1478, "div", 180)(1479, "a", 181);
      \u0275\u0275text(1480, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1481, "div", 180)(1482, "a", 182);
      \u0275\u0275text(1483, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1484, "div", 53)(1485, "label", 162);
      \u0275\u0275text(1486, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1487, "div", 183);
      \u0275\u0275element(1488, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1489, "div", 53)(1490, "label", 162);
      \u0275\u0275text(1491, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1492, "div", 69)(1493, "a", 163);
      \u0275\u0275text(1494, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1495, "div", 164)(1496, "div", 53)(1497, "div", 165)(1498, "span", 166);
      \u0275\u0275element(1499, "i", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1500, "input", 168);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1501, "ul", 53)(1502, "li")(1503, "label", 173);
      \u0275\u0275element(1504, "input", 76);
      \u0275\u0275text(1505, " $10,000 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1506, "li")(1507, "label", 173);
      \u0275\u0275element(1508, "input", 76);
      \u0275\u0275text(1509, " $25,750 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1510, "li")(1511, "label", 173);
      \u0275\u0275element(1512, "input", 76);
      \u0275\u0275text(1513, " $50,125 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1514, "li")(1515, "label", 173);
      \u0275\u0275element(1516, "input", 76);
      \u0275\u0275text(1517, " $75,900 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1518, "div", 53)(1519, "label", 162);
      \u0275\u0275text(1520, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1521, "div", 69)(1522, "a", 163);
      \u0275\u0275text(1523, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1524, "div", 164)(1525, "ul", 53)(1526, "li")(1527, "label", 173);
      \u0275\u0275element(1528, "input", 76)(1529, "i", 184);
      \u0275\u0275text(1530, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1531, "li")(1532, "label", 173);
      \u0275\u0275element(1533, "input", 76)(1534, "i", 185);
      \u0275\u0275text(1535, "Unpaid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1536, "li")(1537, "label", 173);
      \u0275\u0275element(1538, "input", 76)(1539, "i", 186);
      \u0275\u0275text(1540, "Cancelled ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1541, "li")(1542, "label", 173);
      \u0275\u0275element(1543, "input", 76)(1544, "i", 187);
      \u0275\u0275text(1545, "Partially Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1546, "li")(1547, "label", 173);
      \u0275\u0275element(1548, "input", 76)(1549, "i", 188);
      \u0275\u0275text(1550, "Uncollectable ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1551, "div")(1552, "label", 162);
      \u0275\u0275text(1553, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1554, "div", 69)(1555, "a", 163);
      \u0275\u0275text(1556, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1557, "div", 164)(1558, "ul", 53)(1559, "li")(1560, "label", 173);
      \u0275\u0275element(1561, "input", 76);
      \u0275\u0275text(1562, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1563, "li")(1564, "label", 173);
      \u0275\u0275element(1565, "input", 76);
      \u0275\u0275text(1566, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1567, "li")(1568, "label", 173);
      \u0275\u0275element(1569, "input", 76);
      \u0275\u0275text(1570, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1571, "li")(1572, "label", 173);
      \u0275\u0275element(1573, "input", 76);
      \u0275\u0275text(1574, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1575, "li")(1576, "label", 173);
      \u0275\u0275element(1577, "input", 76);
      \u0275\u0275text(1578, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1579, "div", 189)(1580, "div", 179)(1581, "div", 180)(1582, "a", 190);
      \u0275\u0275text(1583, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1584, "div", 180)(1585, "button", 191);
      \u0275\u0275text(1586, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1587, "div", 192)(1588, "div", 193)(1589, "div", 194)(1590, "div", 195)(1591, "div", 53);
      \u0275\u0275element(1592, "img", 196);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1593, "h6", 22);
      \u0275\u0275text(1594, "Delete Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1595, "p", 53);
      \u0275\u0275text(1596, "Are you sure, you want to delete Invoice?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1597, "div", 197)(1598, "a", 198);
      \u0275\u0275text(1599, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1600, "a", 199);
      \u0275\u0275text(1601, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275property("routerLink", ctx.routes.addInvoice);
      \u0275\u0275advance(117);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c0));
      \u0275\u0275advance(79);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 246 : -1);
      \u0275\u0275advance(61);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(83);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(83);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(83);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(83);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(83);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(57);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(83);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(83);
      \u0275\u0275property("routerLink", ctx.routes.editInvoice);
      \u0275\u0275advance(23);
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, CustomPaginationComponent, DateRangePickerComponent, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceListComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-list", imports: [CommonModule, CustomPaginationComponent, DateRangePickerComponent, RouterLink, FormsModule, MatSortModule], template: `<div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Invoices</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="avatar-list-stacked me-1">
                <span class="avatar avatar-rounded avatar-sm">
                    <img src="assets/img/profiles/avatar-05.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded avatar-sm">
                    <img src="assets/img/profiles/avatar-12.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded avatar-sm">
                    <img src="assets/img/profiles/avatar-06.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded avatar-sm">
                    <img src="assets/img/profiles/avatar-18.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded avatar-sm">
                    <img src="assets/img/profiles/avatar-16.jpg" alt="img">
                </span>
            </div>
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
            <div>
                <a [routerLink]="routes.addInvoice" class="btn btn-primary d-flex align-items-center">
                    <i class="isax isax-add-circle5 me-1"></i>New Invoice
                </a>
            </div>
        </div>
    </div>
    <!-- End Breadcrumb -->

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
                        <img src="assets/img/bg/card-overlay-01.svg" alt="">
                    </span>
                </div>
            </div>
        </div>
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
                        <img src="assets/img/bg/card-overlay-02.svg" alt="">
                    </span>
                </div>
            </div>
        </div>
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
                        <img src="assets/img/bg/card-overlay-03.svg" alt="">
                    </span>
                </div>
            </div>
        </div>
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
                        <img src="assets/img/bg/card-overlay-04.svg" alt="">
                    </span>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
     
    <ul class="nav nav-tabs nav-bordered mb-3">
        <li class="nav-item"><a class="nav-link active" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab1">All</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab2">Paid</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab3">Overdue</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab4">Upcoming</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab5">Cancelled</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab6">Partially Paid</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab7">Unpaid</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab8">Refunded</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#tab9">Draft</a></li>
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
    </div>
    <!-- /Table Search End -->

    <!-- Table List Start -->
    <div class="tab-content">
        <div class="tab-pane active show" id="tab1">
            <div class="table-responsive">
                <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                    <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th mat-sort-header="customer">Customer</th>
                            <th mat-sort-header="createdon">Created On</th>
                            <th mat-sort-header="amount">Amount</th>
                            <th mat-sort-header="paid">Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th mat-sort-header="due">Due Date</th>
                            <th class="no-sort"></th>
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
                                <a href="javascript:void(0);" class="link-default">{{data.id}}</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.customer}}</a></h6>
                                    </div>
                                </div>
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
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
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
        </div>
        <div class="tab-pane" id="tab2">
            <div class="table-responsive">
                <table class="table table-nowrap datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all2">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th>Customer</th>
                            <th>Created On</th>
                            <th>Amount</th>
                            <th>Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th>Due Date</th>
                            <th class="no-sort"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00025</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-28.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Emily Clark</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>22 Feb 2025</td>
                            <td class="text-dark">$10,000</td>
                            <td>$5,000</td>
                            <td>
                                <span class="badge badge-soft-success d-inline-flex align-items-center">Paid <i class="isax isax-tick-circle ms-1"></i></span>
                            </td>
                            <td class="text-dark">Cash</td>
                            <td>04 Mar 2025</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00020</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-16.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">David Anderson</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>09 Dec 2024</td>
                            <td class="text-dark">$1,20,500</td>
                            <td>$60,000</td>
                            <td>
                                <span class="badge badge-soft-success d-inline-flex align-items-center">Paid
                                    <i class="isax isax-tick-circle ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Cash</td>
                            <td>22 Dec 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00015</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-08.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Charlotte Brown</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>05 Oct 2024</td>
                            <td class="text-dark">$87,650</td>
                            <td>$40,000</td>
                            <td>
                                <span class="badge badge-soft-success d-inline-flex align-items-center">Paid
                                    <i class="isax isax-tick-circle ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>18 Oct 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane" id="tab3">
            <div class="table-responsive">
                <table class="table table-nowrap datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all3">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th>Customer</th>
                            <th>Created On</th>
                            <th>Amount</th>
                            <th>Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th>Due Date</th>
                            <th class="no-sort"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00021</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-30.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Olivia Harris</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>04 Jan 2025</td>
                            <td class="text-dark">$99,999</td>
                            <td>$80,000</td>
                            <td>
                                <span class="badge badge-soft-danger d-inline-flex align-items-center">Overdue
                                    <i class="isax isax-danger ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>17 Jan 2025</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00016</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-31.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Daniel Martinez</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>12 Oct 2024</td>
                            <td class="text-dark">$9,99,999</td>
                            <td>$4,00,000</td>
                            <td>
                                <span class="badge badge-soft-danger d-inline-flex align-items-center">Overdue
                                    <i class="isax isax-danger ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Cash</td>
                            <td>25 Oct 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane" id="tab4">
            <div class="table-responsive">
                <table class="table table-nowrap datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all4">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th>Customer</th>
                            <th>Created On</th>
                            <th>Amount</th>
                            <th>Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th>Due Date</th>
                            <th class="no-sort"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00016</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-31.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Daniel Martinez</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>12 Oct 2024</td>
                            <td class="text-dark">$9,99,999</td>
                            <td>$4,00,000</td>
                            <td>
                                <span class="badge badge-soft-info d-inline-flex align-items-center">Upcoming
                                    <i class="isax isax-arrow-square-up ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Cash</td>
                            <td>25 Oct 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane" id="tab5">
            <div class="table-responsive">
                <table class="table table-nowrap datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all5">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th>Customer</th>
                            <th>Created On</th>
                            <th>Amount</th>
                            <th>Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th>Due Date</th>
                            <th class="no-sort"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00023</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-12.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Sophia White</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>30 Jan 2025</td>
                            <td class="text-dark">$50,125</td>
                            <td>$20,000</td>
                            <td>
                                <span class="badge badge-soft-danger d-inline-flex align-items-center">Cancelled<i class="isax isax-close-circle ms-1"></i></span>
                            </td>
                            <td class="text-dark">Cash</td>
                            <td>13 Feb 2025</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00018</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-23.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Robert Thomas</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>15 Nov 2024</td>
                            <td class="text-dark">$5,00,750</td>
                            <td>$5,00,000</td>
                            <td>
                                <span class="badge badge-soft-danger d-inline-flex align-items-center">Cancelled
                                    <i class="isax isax-close-circle ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>28 Nov 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00013</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-18.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Mia Thompson</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>02 Sep 2024</td>
                            <td class="text-dark">$33,210</td>
                            <td>$15,000</td>
                            <td>
                                <span class="badge badge-soft-danger d-inline-flex align-items-center">Cancelled
                                    <i class="isax isax-close-circle ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>15 Sep 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane" id="tab6">
            <div class="table-responsive">
                <table class="table table-nowrap datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all6">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th>Customer</th>
                            <th>Created On</th>
                            <th>Amount</th>
                            <th>Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th>Due Date</th>
                            <th class="no-sort"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00022</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-06.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Michael Johnson</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>17 Jan 2025</td>
                            <td class="text-dark">$75,900</td>
                            <td>$50,000</td>
                            <td>
                                <span class="badge badge-soft-info d-inline-flex align-items-center">Partially Paid
                                    <i class="isax isax-timer ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>30 Jan 2025</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00017</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-07.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Isabella Scott</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>30 Nov 2024</td>
                            <td class="text-dark">$7,50,300</td>
                            <td>$2,50,500</td>
                            <td>
                                <span class="badge badge-soft-info d-inline-flex align-items-center">Partially Paid
                                    <i class="isax isax-timer ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>12 Nov 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00012</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-26.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Amelia Robinson</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>07 Aug 2024</td>
                            <td class="text-dark">$2,10,000</td>
                            <td>$1,50,000</td>
                            <td>
                                <span class="badge badge-soft-info d-inline-flex align-items-center">Partially Paid
                                    <i class="isax isax-timer ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>20 Aug 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane" id="tab7">
            <div class="table-responsive">
                <table class="table table-nowrap datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all7">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th>Customer</th>
                            <th>Created On</th>
                            <th>Amount</th>
                            <th>Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th>Due Date</th>
                            <th class="no-sort"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00024</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-29.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">John Carter</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>07 Feb 2025</td>
                            <td class="text-dark">$25,750</td>
                            <td>$10,750</td>
                            <td>
                                <span class="badge badge-soft-warning d-inline-flex align-items-center">Unpaid<i class="isax isax-slash ms-1"></i></span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>20 Feb 2025</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00019</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-17.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Emma Lewis</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>02 Dec 2024</td>
                            <td class="text-dark">$2,50,000</td>
                            <td>$1,25,000</td>
                            <td>
                                <span class="badge badge-soft-warning d-inline-flex align-items-center">Unpaid
                                    <i class="isax isax-slash ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Cash</td>
                            <td>15 Dec 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00014</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-10.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">William Parker</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>05 Oct 2024</td>
                            <td class="text-dark">$87,650</td>
                            <td>$40,000</td>
                            <td>
                                <span class="badge badge-soft-warning d-inline-flex align-items-center">Unpaid
                                    <i class="isax isax-slash ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Cash</td>
                            <td>18 Oct 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane" id="tab8">
            <div class="table-responsive">
                <table class="table table-nowrap datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all8">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th>Customer</th>
                            <th>Created On</th>
                            <th>Amount</th>
                            <th>Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th>Due Date</th>
                            <th class="no-sort"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00024</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-29.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">John Carter</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>07 Feb 2025</td>
                            <td class="text-dark">$25,750</td>
                            <td>$10,750</td>
                            <td>
                                <span class="badge badge-soft-success d-inline-flex align-items-center">Refunded<i class="isax isax-money-3 ms-1"></i></span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>20 Feb 2025</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane" id="tab9">
            <div class="table-responsive">
                <table class="table table-nowrap datatable">
                    <thead class="thead-light">
                        <tr>
                            <th class="no-sort">
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all9">
                                </div>
                            </th>
                            <th class="no-sort">ID</th>
                            <th>Customer</th>
                            <th>Created On</th>
                            <th>Amount</th>
                            <th>Paid</th>
                            <th class="no-sort">Status</th>
                            <th class="no-sort">Payment Mode</th>
                            <th>Due Date</th>
                            <th class="no-sort"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void(0);" class="link-default">INV00018</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                        <img src="assets/img/profiles/avatar-23.jpg" class="rounded-circle" alt="img">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Robert Thomas</a></h6>
                                    </div>
                                </div>
                            </td>
                            <td>15 Nov 2024</td>
                            <td class="text-dark">$5,00,750</td>
                            <td>$5,00,000</td>
                            <td>
                                <span class="badge badge-soft-info d-inline-flex align-items-center">Draft
                                    <i class="isax isax-note ms-1"></i>
                                </span>
                            </td>
                            <td class="text-dark">Check</td>
                            <td>28 Nov 2024</td>
                            <td class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a [routerLink]="routes.editInvoice" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Resend</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download Invoices as PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-convert me-2"></i>Convert to Sales Return</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <app-custom-pagination *ngIf="row"></app-custom-pagination>
    </div>
    <!-- /Table List End -->

</div>



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
                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
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
                                            <i class="fa-solid fa-circle fs-6 text-orange me-1"></i>Uncollectable
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
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
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

        <!-- Delete Modal  -->
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
        <!-- /Delete Modal  -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceListComponent, { className: "InvoiceListComponent", filePath: "src/app/features/invantory-sales/invoices/invoice-list/invoice-list.component.ts", lineNumber: 19 });
})();
export {
  InvoiceListComponent
};
//# sourceMappingURL=chunk-QUD3IXVM.js.map
