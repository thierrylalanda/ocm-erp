import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
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
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
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

// src/app/features/super-admin/purchase-transaction/purchase-transaction.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function PurchaseTransactionComponent_For_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 146)(3, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseTransactionComponent_For_132_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 148);
    \u0275\u0275text(6, " INV00025 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 149)(9, "a", 150);
    \u0275\u0275element(10, "img", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 152)(13, "a", 148);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "p", 118);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "p", 118);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 153);
    \u0275\u0275text(27);
    \u0275\u0275element(28, "i", 154);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 155)(30, "a", 156);
    \u0275\u0275element(31, "i", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ul", 6)(33, "li")(34, "a", 158);
    \u0275\u0275element(35, "i", 159);
    \u0275\u0275text(36, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li")(38, "a", 160);
    \u0275\u0275element(39, "i", 161);
    \u0275\u0275text(40, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "li")(42, "a", 162);
    \u0275\u0275element(43, "i", 163);
    \u0275\u0275text(44, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(7);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/icons/", data_r2.Image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.Customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CreatedOn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.Amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.PaymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.Status === "Approved" ? "badge-soft-success" : data_r2.Status === "Pending" ? "badge-soft-warning" : "badge-soft-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.Status === "Approved" ? " isax-tick-circle" : data_r2.Status === "Pending" ? " isax-timer" : " isax-close-circle");
  }
}
function PurchaseTransactionComponent_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 164);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseTransactionComponent_app_custom_pagination_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PurchaseTransactionComponent = class _PurchaseTransactionComponent {
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
    this.data.getPurchaseTransaction().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.purchaseTransaction) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPurchaseTransaction().subscribe((apiRes) => {
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
  static \u0275fac = function PurchaseTransactionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseTransactionComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseTransactionComponent, selectors: [["app-purchase-transaction"]], decls: 450, vars: 15, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "email"], ["mat-sort-header", "created"], ["mat-sort-header", "amount"], ["mat-sort-header", "payment"], ["mat-sort-header", "status"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/icons/company-01.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-02.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-03.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-04.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "view_invoice_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], [1, "card"], [1, "card-body"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", "User Img"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2", "position-relative", "z-1"], [1, "mb-1"], [1, "me-4"], [1, "fs-14", "fw-semibold", "mb-1"], ["src", "assets/img/icons/not-paid.png", "alt", "User Img", "width", "48", "height", "48"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], [1, "row", "gy-3", "position-relative", "z-1"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "bg-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "avatar", "avatar-lg", "flex-shrink-0", "me-2"], ["src", "assets/img/billing-icon.jpg", "alt", "User Img"], [1, "fs-14", "fw-semibold", "text-dark"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table"], [1, "thead-dark"], [1, "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "me-3"], [1, "mb-2"], ["src", "assets/img/icons/qr.png", "alt", "User Img"], [1, "mb-0"], [1, "fs-14", "fw-semibold"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);", 1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-document-download", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PurchaseTransactionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Purchase Transaction");
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
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "label")(26, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseTransactionComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PurchaseTransactionComponent_Template_input_ngModelChange_26_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "a", 17);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275text(29, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 10)(31, "div", 19)(32, "a", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "Sort By : ");
      \u0275\u0275elementStart(35, "span", 22);
      \u0275\u0275text(36, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "ul", 23)(38, "li")(39, "a", 7);
      \u0275\u0275text(40, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 7);
      \u0275\u0275text(43, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 19)(45, "a", 24);
      \u0275\u0275element(46, "i", 25);
      \u0275\u0275text(47, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 26)(49, "li")(50, "label", 27);
      \u0275\u0275element(51, "i", 28)(52, "input", 29);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "li")(56, "label", 27);
      \u0275\u0275element(57, "i", 28)(58, "input", 29);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "li")(62, "label", 27);
      \u0275\u0275element(63, "i", 28)(64, "input", 29);
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "Email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "li")(68, "label", 27);
      \u0275\u0275element(69, "i", 28)(70, "input", 30);
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "li")(74, "label", 27);
      \u0275\u0275element(75, "i", 28)(76, "input", 29);
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "li")(80, "label", 27);
      \u0275\u0275element(81, "i", 28)(82, "input", 30);
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "li")(86, "label", 27);
      \u0275\u0275element(87, "i", 28)(88, "input", 29);
      \u0275\u0275elementStart(89, "span");
      \u0275\u0275text(90, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(91, "div", 31)(92, "h6", 32);
      \u0275\u0275text(93, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span", 33)(95, "span", 34);
      \u0275\u0275text(96, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, "Companies Selected");
      \u0275\u0275elementStart(98, "span", 35);
      \u0275\u0275listener("click", function PurchaseTransactionComponent_Template_span_click_98_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(99, "i", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "span", 33)(101, "span", 34);
      \u0275\u0275text(102, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(103, "Status Selected");
      \u0275\u0275elementStart(104, "span", 35);
      \u0275\u0275listener("click", function PurchaseTransactionComponent_Template_span_click_104_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(105, "i", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "a", 37);
      \u0275\u0275listener("click", function PurchaseTransactionComponent_Template_a_click_106_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(107, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 38)(109, "table", 39);
      \u0275\u0275listener("matSortChange", function PurchaseTransactionComponent_Template_table_matSortChange_109_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(110, "thead", 40)(111, "tr")(112, "th", 41)(113, "div", 42);
      \u0275\u0275listener("click", function PurchaseTransactionComponent_Template_div_click_113_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(114, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseTransactionComponent_Template_input_ngModelChange_114_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "th", 41);
      \u0275\u0275text(116, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 44);
      \u0275\u0275text(118, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th", 45);
      \u0275\u0275text(120, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 46);
      \u0275\u0275text(122, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 47);
      \u0275\u0275text(124, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th", 48);
      \u0275\u0275text(126, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 49);
      \u0275\u0275text(128, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(129, "th", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "tbody");
      \u0275\u0275repeaterCreate(131, PurchaseTransactionComponent_For_132_Template, 45, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(133, PurchaseTransactionComponent_Conditional_133_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(134, PurchaseTransactionComponent_app_custom_pagination_134_Template, 1, 0, "app-custom-pagination", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 51)(136, "div", 52)(137, "div", 53)(138, "h6", 54);
      \u0275\u0275text(139, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "button", 55);
      \u0275\u0275element(141, "i", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 57)(143, "form", 58)(144, "div", 8)(145, "label", 59);
      \u0275\u0275text(146, "Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 19)(148, "a", 60);
      \u0275\u0275text(149, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 61)(151, "div", 8)(152, "div", 62)(153, "span", 63);
      \u0275\u0275element(154, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275element(155, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "ul", 8)(157, "li", 66)(158, "label", 67);
      \u0275\u0275element(159, "input", 68);
      \u0275\u0275text(160, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "a", 69);
      \u0275\u0275text(162, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "li")(164, "label", 70);
      \u0275\u0275element(165, "input", 30);
      \u0275\u0275elementStart(166, "span", 71);
      \u0275\u0275element(167, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(168, "Trend Hive ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "li")(170, "label", 70);
      \u0275\u0275element(171, "input", 30);
      \u0275\u0275elementStart(172, "span", 71);
      \u0275\u0275element(173, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(174, "Quick Cart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "li")(176, "label", 70);
      \u0275\u0275element(177, "input", 30);
      \u0275\u0275elementStart(178, "span", 71);
      \u0275\u0275element(179, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(180, "Tech Bazaar ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "li")(182, "label", 70);
      \u0275\u0275element(183, "input", 30);
      \u0275\u0275elementStart(184, "span", 71);
      \u0275\u0275element(185, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(186, "Harvest Basket ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(187, "div", 76)(188, "div", 77)(189, "a", 78);
      \u0275\u0275text(190, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 77)(192, "a", 79);
      \u0275\u0275text(193, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(194, "div", 8)(195, "label", 80);
      \u0275\u0275text(196, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div", 81);
      \u0275\u0275element(198, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "div", 8)(200, "label", 59);
      \u0275\u0275text(201, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 19)(203, "a", 60);
      \u0275\u0275text(204, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 61)(206, "ul", 8)(207, "li")(208, "label", 70);
      \u0275\u0275element(209, "input", 30)(210, "i", 82);
      \u0275\u0275text(211, "Approved ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "li")(213, "label", 70);
      \u0275\u0275element(214, "input", 30)(215, "i", 83);
      \u0275\u0275text(216, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "li")(218, "label", 70);
      \u0275\u0275element(219, "input", 30)(220, "i", 84);
      \u0275\u0275text(221, "Rejected ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(222, "div", 85)(223, "div", 76)(224, "div", 77)(225, "a", 86);
      \u0275\u0275text(226, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 77)(228, "button", 87);
      \u0275\u0275text(229, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(230, "div", 88)(231, "div", 89)(232, "div", 90)(233, "div", 91)(234, "h4", 92);
      \u0275\u0275text(235, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "button", 93);
      \u0275\u0275element(237, "i", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "form", 58)(239, "div", 94)(240, "div", 95)(241, "div", 96)(242, "div")(243, "div", 97)(244, "div", 98)(245, "a", 99);
      \u0275\u0275element(246, "i", 100);
      \u0275\u0275text(247, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "a", 99);
      \u0275\u0275element(249, "i", 101);
      \u0275\u0275text(250, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "a", 99);
      \u0275\u0275element(252, "i", 102);
      \u0275\u0275text(253, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(254, "div", 103)(255, "div", 104)(256, "div", 105)(257, "div", 106);
      \u0275\u0275element(258, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 108)(260, "div", 8)(261, "h4", 109);
      \u0275\u0275text(262, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "div", 98)(264, "div", 110)(265, "h6", 111);
      \u0275\u0275text(266, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "p");
      \u0275\u0275text(268, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "span");
      \u0275\u0275element(270, "img", 112);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(271, "div", 8);
      \u0275\u0275element(272, "img", 113)(273, "img", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 115)(275, "div", 116)(276, "div")(277, "h6", 117);
      \u0275\u0275text(278, "Invoice Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "div")(280, "p", 109);
      \u0275\u0275text(281, "Invoice Number : ");
      \u0275\u0275elementStart(282, "span", 118);
      \u0275\u0275text(283, "INV215654");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "p", 109);
      \u0275\u0275text(285, "Issued On : ");
      \u0275\u0275elementStart(286, "span", 118);
      \u0275\u0275text(287, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "p", 109);
      \u0275\u0275text(289, "Due Date : ");
      \u0275\u0275elementStart(290, "span", 118);
      \u0275\u0275text(291, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "p", 109);
      \u0275\u0275text(293, "Recurring Invoice : ");
      \u0275\u0275elementStart(294, "span", 118);
      \u0275\u0275text(295, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "span", 119);
      \u0275\u0275text(297, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(298, "div", 116)(299, "div")(300, "h6", 117);
      \u0275\u0275text(301, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "div")(303, "h6", 111);
      \u0275\u0275text(304, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "p", 109);
      \u0275\u0275text(306, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "p", 109);
      \u0275\u0275text(308, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "p", 109);
      \u0275\u0275text(310, "Email : info@xample.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "p", 109);
      \u0275\u0275text(312, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(313, "div", 116)(314, "div")(315, "h6", 117);
      \u0275\u0275text(316, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "div", 120)(318, "div", 121)(319, "div")(320, "span", 122);
      \u0275\u0275element(321, "img", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "p", 124);
      \u0275\u0275text(323, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "p", 109);
      \u0275\u0275text(325, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "p", 109);
      \u0275\u0275text(327, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "p", 109);
      \u0275\u0275text(329, "Email : info@xample.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "p", 109);
      \u0275\u0275text(331, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(332, "div", 8)(333, "h6", 8);
      \u0275\u0275text(334, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "div", 125)(336, "table", 126)(337, "thead", 127)(338, "tr")(339, "th");
      \u0275\u0275text(340, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "th");
      \u0275\u0275text(342, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "th");
      \u0275\u0275text(344, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "th");
      \u0275\u0275text(346, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "th");
      \u0275\u0275text(348, "Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "th");
      \u0275\u0275text(350, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(351, "tbody")(352, "tr")(353, "td");
      \u0275\u0275text(354, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "td", 118);
      \u0275\u0275text(356, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "td");
      \u0275\u0275text(358, "$99.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "td");
      \u0275\u0275text(360, "0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "td");
      \u0275\u0275text(362, "$0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "td");
      \u0275\u0275text(364, "$99.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(365, "div", 128)(366, "div", 95)(367, "div", 129)(368, "div", 130)(369, "div", 131)(370, "p", 132);
      \u0275\u0275text(371, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "span");
      \u0275\u0275element(373, "img", 133);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "div")(375, "h6", 132);
      \u0275\u0275text(376, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div")(378, "p", 109);
      \u0275\u0275text(379, "Bank Name : ");
      \u0275\u0275elementStart(380, "span", 118);
      \u0275\u0275text(381, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(382, "p", 109);
      \u0275\u0275text(383, "Account Number : ");
      \u0275\u0275elementStart(384, "span", 118);
      \u0275\u0275text(385, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "p", 109);
      \u0275\u0275text(387, "IFSC Code : ");
      \u0275\u0275elementStart(388, "span", 118);
      \u0275\u0275text(389, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "p", 134);
      \u0275\u0275text(391, "Payment Reference : ");
      \u0275\u0275elementStart(392, "span", 118);
      \u0275\u0275text(393, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(394, "div", 129)(395, "div", 8)(396, "div", 66)(397, "h6", 135);
      \u0275\u0275text(398, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "h6", 135);
      \u0275\u0275text(400, "$99.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "div", 66)(402, "h6", 135);
      \u0275\u0275text(403, "CGST (0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "h6", 135);
      \u0275\u0275text(405, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(406, "div", 66)(407, "h6", 135);
      \u0275\u0275text(408, "SGST (0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "h6", 135);
      \u0275\u0275text(410, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(411, "div", 136)(412, "h6", 135);
      \u0275\u0275text(413, "Discount (0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "h6", 137);
      \u0275\u0275text(415, "- $0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "div", 136)(417, "h6");
      \u0275\u0275text(418, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "h6");
      \u0275\u0275text(420, "$99.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(421, "div")(422, "h6", 111);
      \u0275\u0275text(423, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "p");
      \u0275\u0275text(425, "Ninety Nine Dollars");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(426, "div", 138)(427, "div")(428, "h6", 111);
      \u0275\u0275text(429, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "p");
      \u0275\u0275text(431, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(432, "div");
      \u0275\u0275element(433, "img", 113)(434, "img", 114);
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(435, "div", 139)(436, "div", 140)(437, "div", 90)(438, "div", 141)(439, "div", 8);
      \u0275\u0275element(440, "img", 142);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(441, "h6", 109);
      \u0275\u0275text(442, "Delete Purchase Transaction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "p", 8);
      \u0275\u0275text(444, "Are you sure, you want to delete purchase transaction?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "div", 143)(446, "a", 144);
      \u0275\u0275text(447, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "a", 145);
      \u0275\u0275text(449, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(65);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 133 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DateRangePickerComponent, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseTransactionComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-transaction", imports: [CommonModule, DateRangePickerComponent, CustomPaginationComponent, FormsModule, MatSortModule], template: `<!-- Start Content -->
<div class="content-two">

  <!-- Page Header -->
  <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
      <div>
          <h6>Purchase Transaction</h6>
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
                  <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center fw-medium" data-bs-toggle="dropdown">
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
                              <span>Customer</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Email</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox">
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
                              <input class="form-check-input m-0 me-2" type="checkbox">
                              <span>Payment Mode</span>
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
          <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Companies Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
          <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
          <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
      </div>
      <!-- /Filter Info -->
  </div>
  <!-- /Table Search -->

  <!-- Table List -->
  <div class="table-responsive">
    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">
          <thead class="thead-light">
              <tr>
                  <th class="no-sort">
                      <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                          <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">
                      </div>
                  </th>
                  <th class="no-sort">ID</th>
                  <th mat-sort-header="customer">Customer</th>
                  <th mat-sort-header="email">Email</th>
                  <th mat-sort-header="created">Created On</th>
                  <th mat-sort-header="amount">Amount</th>
                  <th mat-sort-header="payment">Payment Mode</th>
                  <th mat-sort-header="status">Status</th>
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
                      <a href="javascript:void(0);">
                          INV00025
                      </a>
                  </td>
                  <td>
                      <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                              <img src="assets/img/icons/{{data.Image}}" class="rounded-circle" alt="img">
                          </a>
                          <div>
                              <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.Customer}}</a></h6>
                          </div>
                      </div>
                  </td>
                  <td>{{data.Email}}</td>
                  <td>{{data.CreatedOn}}</td>
                  <td>
                      <p class="text-dark">{{data.Amount}}</p>
                  </td>
                  <td>
                      <p class="text-dark">{{data.PaymentMode}}</p>
                  </td>
                  <td>
                    <span href="javascript:void(0);" class="badge badge-sm d-inline-flex align-items-center"
                      [ngClass]="data.Status==='Approved'?'badge-soft-success':data.Status==='Pending'?'badge-soft-warning':'badge-soft-danger'">
                        {{data.Status}} 
                        <i class="isax ms-1"
                      [ngClass]="data.Status==='Approved'?' isax-tick-circle':data.Status==='Pending'?' isax-timer':' isax-close-circle'"></i>
                    </span>
                  </td>
                  <td class="action-item">
                      <a href="javascript:void(0);" data-bs-toggle="dropdown">
                          <i class="fa-solid fa-ellipsis"></i>
                      </a>
                      <ul class="dropdown-menu">
                          <li>
                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_invoice_modal"><i class="isax isax-eye me-2"></i>View</a>
                          </li>
                          <li>
                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download</a>
                          </li>
                          <li>
                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
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
  <!-- /Table List -->
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
              <label class="form-label">Companies</label>
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
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-01.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Trend Hive
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-02.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Quick Cart
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-03.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Tech Bazaar
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-04.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Harvest Basket
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
                                  <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Approved
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
                                  <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Rejected
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
                      <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
                  </div>
              </div>
          </div>
      </form>
  </div>
</div>
<!-- End Filter -->

<!-- Invoice View Modal  -->
<div id="view_invoice_modal" class="modal fade">
  <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
          <!-- Start modal header -->
          <div class="modal-header">
              <h4 class="modal-title">Preview</h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
          </div>
          
          <form action="#">
              <div class="modal-body">

                  <!-- start row -->
                  <div class="row">
                      <div class="mx-auto">
                          <div>
                              <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
                                  <div class="d-flex align-items-center flex-wrap row-gap-3">
                                      <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-document-like me-1"></i>Download PDF</a>
                                      <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-message-notif me-1"></i>Send Email</a>
                                      <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-printer me-1"></i>Print</a>
                                  </div>
                              </div>
                              <div class="card">
                                  <div class="card-body">
                                      <div class="bg-light p-4 rounded position-relative mb-3">
                                          <div class="position-absolute top-0 end-0">
                                              <img src="assets/img/bg/card-bg.png" alt="User Img">
                                          </div>
                                          <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2 position-relative z-1">
                                              <div class="mb-3">
                                                  <h4 class="mb-1">Invoice</h4>
                                                  <div class="d-flex align-items-center flex-wrap row-gap-3">
                                                      <div class="me-4">
                                                          <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                                          <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                                      </div>
                                                      <span><img src="assets/img/icons/not-paid.png" alt="User Img" width="48" height="48"></span>
                                                  </div>
                                              </div>
                                              <div class="mb-3">
                                                  <img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
                                <img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
                                              </div>
                                          </div>
                                          <div class="row gy-3 position-relative z-1">
                                              <div class="col-lg-4">
                                                  <div>
                                                      <h6 class="mb-2 fs-16 fw-semibold">Invoice Details</h6>
                                                      <div>
                                                          <p class="mb-1">Invoice Number : <span class="text-dark">INV215654</span></p>
                                                          <p class="mb-1">Issued On : <span class="text-dark">25 Jan 2025</span></p>
                                                          <p class="mb-1">Due Date : <span class="text-dark">31 Jan 2025</span></p>
                                                          <p class="mb-1">Recurring Invoice : <span class="text-dark">Monthly</span></p>
                                                          <span class="badge bg-danger">Due in 8 days</span>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-lg-4">
                                                  <div>
                                                      <h6 class="mb-2 fs-16 fw-semibold">Billing From</h6>
                                                      <div>
                                                          <h6 class="fs-14 fw-semibold mb-1">Kanakku Invoice Management</h6>
                                                          <p class="mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>
                                                          <p class="mb-1">Phone : +1 54664 75945</p>
                                                          <p class="mb-1">Email : info&#64;xample.com</p>
                                                          <p class="mb-1">GST : 243E45767889</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-lg-4">
                                                  <div>
                                                      <h6 class="mb-2 fs-16 fw-semibold">Billing To</h6>
                                                      <div class="bg-white rounded p-3">
                                                          <div class="d-flex align-items-center mb-1">
                                                              <div>
                                                                  <span class="avatar avatar-lg flex-shrink-0 me-2">
                                                                      <img src="assets/img/billing-icon.jpg" alt="User Img">
                                                                  </span>
                                                              </div>
                                                              <p class="fs-14 fw-semibold text-dark">Timesquare Tech</p>
                                                          </div>
                                                          <p class="mb-1">299 Star Trek Drive, Florida, 3240, USA</p>
                                                          <p class="mb-1">Phone : +1 54664 75945</p>
                                                          <p class="mb-1">Email : info&#64;xample.com</p>
                                                          <p class="mb-1">GST : 243E45767889</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="mb-3">
                                          <h6 class="mb-3">Product / Service Items</h6>
                                          <div class="table-responsive rounded border-bottom-0 border">
                                              <table class="table">
                                                  <thead class="thead-dark">
                                                      <tr>
                                                          <th>#</th>
                                                          <th>Plan Name</th>
                                                          <th>Rate</th>
                                                          <th>Discount</th>
                                                          <th>Tax</th>
                                                          <th>Amount</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td>1</td>
                                                          <td class="text-dark">Basic</td>
                                                          <td>$99.00</td>
                                                          <td>0%</td>
                                                          <td>$0.00</td>
                                                          <td>$99.00</td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                      <div class="border-bottom mb-3">
                                          <!-- start row -->
                                          <div class="row">
                                              <div class="col-lg-6">
                                                  <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                                                      <div class="me-3">
                                                          <p class="mb-2">Scan to the pay</p>
                                                          <span><img src="assets/img/icons/qr.png" alt="User Img"></span>
                                                      </div>
                                                      <div>
                                                          <h6 class="mb-2">Bank Details</h6>
                                                          <div>
                                                              <p class="mb-1">Bank Name : <span class="text-dark">ABC Bank</span></p>
                                                              <p class="mb-1">Account Number : <span class="text-dark">782459739212</span></p>
                                                              <p class="mb-1">IFSC Code : <span class="text-dark">ABC0001345</span></p>
                                                              <p class="mb-0">Payment Reference : <span class="text-dark">INV-20250220-001</span></p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div><!-- end col -->
                                              <div class="col-lg-6">
                                                  <div class="mb-3">
                                                      <div class="d-flex align-items-center justify-content-between mb-3">
                                                          <h6 class="fs-14 fw-semibold">Amount</h6>
                                                          <h6 class="fs-14 fw-semibold">$99.00</h6>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between mb-3">
                                                          <h6 class="fs-14 fw-semibold">CGST (0%)</h6>
                                                          <h6 class="fs-14 fw-semibold">$0.00</h6>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between mb-3">
                                                          <h6 class="fs-14 fw-semibold">SGST (0%)</h6>
                                                          <h6 class="fs-14 fw-semibold">$0.00</h6>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                                          <h6 class="fs-14 fw-semibold">Discount (0%)</h6>
                                                          <h6 class="fs-14 fw-semibold text-danger">- $0</h6>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                                          <h6>Total (USD)</h6>
                                                          <h6>$99.00</h6>
                                                      </div>
                                                      <div>
                                                          <h6 class="fs-14 fw-semibold mb-1">Total In Words</h6>
                                                          <p>Ninety Nine Dollars</p>
                                                      </div>
                                                  </div>
                                              </div><!-- end col -->
                                          </div>
                                          <!-- end row -->
                                      </div>
                                      <div class="bg-light d-flex align-items-center justify-content-between p-4 rounded card-bg">
                                          <div>
                                              <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                              <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                          </div>
                                          <div>
                                              <img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
                            <img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
                                          </div>
                                      </div>
                                  </div><!-- end card body -->
                              </div><!-- end card -->
                          </div>
                      </div>
                  </div>
                  <!-- end row -->
                   
              </div>
          </form>
      </div><!-- End modal content-->
  </div><!-- End modal dialog-->
</div>
<!-- /Invoice View Modal -->

<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
  <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
          <div class="modal-body text-center">
              <div class="mb-3">
                  <img src="assets/img/icons/delete.svg" alt="img">
              </div>
              <h6 class="mb-1">Delete Purchase Transaction</h6>
              <p class="mb-3">Are you sure, you want to delete purchase transaction?</p>
              <div class="d-flex justify-content-center">
                  <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                  <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
              </div>
          </div><!-- End modal body-->
</div><!-- End modal content-->
</div><!-- End modal dialog-->
</div>
<!-- End Delete Modal  -->
` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseTransactionComponent, { className: "PurchaseTransactionComponent", filePath: "src/app/features/super-admin/purchase-transaction/purchase-transaction.component.ts", lineNumber: 19 });
})();
export {
  PurchaseTransactionComponent
};
//# sourceMappingURL=chunk-B243Y24G.js.map
