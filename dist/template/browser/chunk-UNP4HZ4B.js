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

// src/app/features/invantory-sales/customers/customer-list/customer-list.component.ts
var _c0 = () => ({ standalone: true });
function CustomerListComponent_For_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 173)(2, "div", 174)(3, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerListComponent_For_143_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 108)(6, "a", 176);
    \u0275\u0275element(7, "img", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 117)(10, "a", 118);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 108)(16, "a", 178);
    \u0275\u0275element(17, "img", 179);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "h6", 117)(20, "a", 118);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td")(29, "span", 180);
    \u0275\u0275text(30);
    \u0275\u0275element(31, "i", 181);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td")(33, "div", 108)(34, "a", 182);
    \u0275\u0275element(35, "i", 183);
    \u0275\u0275text(36, " Invoice ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 184);
    \u0275\u0275element(38, "i", 185);
    \u0275\u0275text(39, " Ledger ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "td", 129)(41, "a", 130);
    \u0275\u0275element(42, "i", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ul", 6)(44, "li")(45, "a", 186);
    \u0275\u0275element(46, "i", 133);
    \u0275\u0275text(47, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "li")(49, "a", 187);
    \u0275\u0275element(50, "i", 135);
    \u0275\u0275text(51, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "li")(53, "a", 188);
    \u0275\u0275element(54, "i", 189);
    \u0275\u0275text(55, "Archive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "li")(57, "a", 190);
    \u0275\u0275element(58, "i", 137);
    \u0275\u0275text(59, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.phone, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/icons/", data_r2.flag), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.totalInvoice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "isax-close-circle" : "isax-tick-circle");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.addInvoice);
    \u0275\u0275advance(15);
    \u0275\u0275property("routerLink", ctx_r2.routes.editCustomer);
  }
}
function CustomerListComponent_Conditional_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 191);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CustomerListComponent_app_custom_pagination_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CustomerListComponent = class _CustomerListComponent {
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
    this.data.getCustomers().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerList) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCustomers().subscribe((apiRes) => {
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
  static \u0275fac = function CustomerListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerListComponent, selectors: [["app-customer-list"]], decls: 730, vars: 8, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "phone"], ["mat-sort-header", "country"], ["mat-sort-header", "balance"], ["mat-sort-header", "created"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "me-2"], ["src", "assets/img/icons/flag-1.svg", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/icons/flag-2.svg", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/icons/flag-3.svg", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/icons/flag-4.svg", "alt", "img", 1, "flex-shrink-0"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "view-ledger", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "p-3", "rounded", "mb-3"], [1, "d-flex", "align-items-center"], ["type", "button", 1, "btn", "btn-outline-white", "me-3"], [1, "isax", "isax-printer", "me-1"], ["type", "button", 1, "btn", "btn-outline-white"], [1, "isax", "isax-document-download", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_ledger", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "p-3", "rounded", "mb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "mb-0"], [1, "badge", "badge-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-refresh-circle", "me-1", "text-info"], [1, "badge", "badge-sm", "badge-soft-success", "d-inline-flex", "align-items-center", "me-2"], [1, "fa-solid", "fa-circle", "fs-6", "me-1"], [1, "badge", "badge-sm", "badge-soft-danger", "d-inline-flex", "align-items-center"], [1, "table-responsive", "border", "border-bottom-0"], [1, "table"], [1, "fw-medium", "fs-14"], [1, "text-danger"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_ledger", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_ledger", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_ledger", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], [1, "text-success"], [1, "tfoot-light"], [1, "bg-light"], ["colspan", "2", 1, "text-dark", "fw-semibold"], [1, "text-dark", "fw-semibold"], ["id", "add_ledger", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "pb-1"], ["type", "text", 1, "form-control"], [1, "input-group", "position-relative", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_ledger", 1, "modal", "fade"], ["type", "text", "value", "$450", 1, "form-control"], [1, "input-group", "position-relative", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "31/10/2024", 1, "form-control", "datetimepicker", "rounded-end"], ["id", "delete_ledger", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "delete_modal", 1, "modal", "fade"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], ["href", "javascript:void(0);", 1, "me-2", "flex-shrink-0"], ["alt", "img", 3, "src"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "btn", "btn-sm", "btn-outline-white", "d-inline-flex", "align-items-center", "me-1", 3, "routerLink"], [1, "isax", "isax-add-circle", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-ledger", 1, "btn", "btn-sm", "btn-outline-white", "d-inline-flex", "align-items-center", "me-1"], [1, "isax", "isax-document-text-1", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_customer", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-archive-2", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CustomerListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Customers");
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
      \u0275\u0275text(20, "New Customer ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function CustomerListComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CustomerListComponent_Template_input_ngModelChange_30_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "a", 19);
      \u0275\u0275element(32, "i", 20);
      \u0275\u0275text(33, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 12)(35, "div", 21)(36, "a", 22);
      \u0275\u0275element(37, "i", 23);
      \u0275\u0275text(38, "Sort By : ");
      \u0275\u0275elementStart(39, "span", 24);
      \u0275\u0275text(40, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "ul", 25)(42, "li")(43, "a", 7);
      \u0275\u0275text(44, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 7);
      \u0275\u0275text(47, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 26)(49, "a", 27);
      \u0275\u0275element(50, "i", 28);
      \u0275\u0275text(51, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "ul", 29)(53, "li")(54, "label", 30);
      \u0275\u0275element(55, "i", 31)(56, "input", 32);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 30);
      \u0275\u0275element(61, "i", 31)(62, "input", 32);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Phone");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 30);
      \u0275\u0275element(67, "i", 31)(68, "input", 32);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Counrty");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 30);
      \u0275\u0275element(73, "i", 31)(74, "input", 33);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Balance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 30);
      \u0275\u0275element(79, "i", 31)(80, "input", 32);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Total Invoice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "li")(84, "label", 30);
      \u0275\u0275element(85, "i", 31)(86, "input", 33);
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "li")(90, "label", 30);
      \u0275\u0275element(91, "i", 31)(92, "input", 32);
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(95, "div", 34)(96, "h6", 35);
      \u0275\u0275text(97, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span", 36)(99, "span", 37);
      \u0275\u0275text(100, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, "Customers Selected");
      \u0275\u0275elementStart(102, "span", 38);
      \u0275\u0275element(103, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "span", 36)(105, "span", 37);
      \u0275\u0275text(106, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(107, "$10,000 - $25,000");
      \u0275\u0275elementStart(108, "span", 38);
      \u0275\u0275element(109, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "span", 36)(111, "span", 37);
      \u0275\u0275text(112, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(113, "Status Selected");
      \u0275\u0275elementStart(114, "span", 38);
      \u0275\u0275element(115, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "a", 40);
      \u0275\u0275text(117, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 41)(119, "table", 42);
      \u0275\u0275listener("matSortChange", function CustomerListComponent_Template_table_matSortChange_119_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(120, "thead", 43)(121, "tr")(122, "th", 44)(123, "div", 45);
      \u0275\u0275listener("click", function CustomerListComponent_Template_div_click_123_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(124, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function CustomerListComponent_Template_input_ngModelChange_124_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "th", 47);
      \u0275\u0275text(126, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 48);
      \u0275\u0275text(128, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 49);
      \u0275\u0275text(130, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th", 50);
      \u0275\u0275text(132, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 44);
      \u0275\u0275text(134, "Total Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 51);
      \u0275\u0275text(136, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "th", 44);
      \u0275\u0275text(138, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(139, "th", 44)(140, "th", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "tbody");
      \u0275\u0275repeaterCreate(142, CustomerListComponent_For_143_Template, 60, 16, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(144, CustomerListComponent_Conditional_144_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(145, CustomerListComponent_app_custom_pagination_145_Template, 1, 0, "app-custom-pagination", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 53)(147, "div", 54)(148, "div", 55)(149, "h6", 56);
      \u0275\u0275text(150, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "button", 57);
      \u0275\u0275element(152, "i", 58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "div", 59)(154, "form", 60)(155, "div", 10)(156, "label", 61);
      \u0275\u0275text(157, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 26)(159, "a", 62);
      \u0275\u0275text(160, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 63)(162, "div", 10)(163, "div", 64)(164, "span", 65);
      \u0275\u0275element(165, "i", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275element(166, "input", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "ul", 10)(168, "li", 68)(169, "label", 69);
      \u0275\u0275element(170, "input", 70);
      \u0275\u0275text(171, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "a", 71);
      \u0275\u0275text(173, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "li")(175, "label", 72);
      \u0275\u0275element(176, "input", 33);
      \u0275\u0275elementStart(177, "span", 73);
      \u0275\u0275element(178, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(179, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "li")(181, "label", 72);
      \u0275\u0275element(182, "input", 33);
      \u0275\u0275elementStart(183, "span", 73);
      \u0275\u0275element(184, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(185, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "li")(187, "label", 72);
      \u0275\u0275element(188, "input", 33);
      \u0275\u0275elementStart(189, "span", 73);
      \u0275\u0275element(190, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(191, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "li")(193, "label", 72);
      \u0275\u0275element(194, "input", 33);
      \u0275\u0275elementStart(195, "span", 73);
      \u0275\u0275element(196, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(197, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "div", 78)(199, "div", 79)(200, "a", 80);
      \u0275\u0275text(201, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 79)(203, "a", 81);
      \u0275\u0275text(204, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(205, "div", 10)(206, "label", 61);
      \u0275\u0275text(207, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 26)(209, "a", 62);
      \u0275\u0275text(210, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "div", 63)(212, "div", 10)(213, "div", 64)(214, "span", 65);
      \u0275\u0275element(215, "i", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275element(216, "input", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "ul", 10)(218, "li", 68)(219, "label", 69);
      \u0275\u0275element(220, "input", 70);
      \u0275\u0275text(221, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "a", 71);
      \u0275\u0275text(223, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "li")(225, "label", 72);
      \u0275\u0275element(226, "input", 33);
      \u0275\u0275elementStart(227, "span", 82);
      \u0275\u0275element(228, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275text(229, "United states ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li")(231, "label", 72);
      \u0275\u0275element(232, "input", 33);
      \u0275\u0275elementStart(233, "span", 82);
      \u0275\u0275element(234, "img", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275text(235, "Canada ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 72);
      \u0275\u0275element(238, "input", 33);
      \u0275\u0275elementStart(239, "span", 82);
      \u0275\u0275element(240, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275text(241, "UK ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li")(243, "label", 72);
      \u0275\u0275element(244, "input", 33);
      \u0275\u0275elementStart(245, "span", 82);
      \u0275\u0275element(246, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275text(247, "Germany ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(248, "div", 78)(249, "div", 79)(250, "a", 80);
      \u0275\u0275text(251, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "div", 79)(253, "a", 81);
      \u0275\u0275text(254, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(255, "div", 10)(256, "label", 87);
      \u0275\u0275text(257, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div", 88);
      \u0275\u0275element(259, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 10)(261, "label", 61);
      \u0275\u0275text(262, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "div", 26)(264, "a", 62);
      \u0275\u0275text(265, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "div", 63)(267, "div", 89)(268, "div", 90)(269, "span", 91);
      \u0275\u0275text(270, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "span", 91);
      \u0275\u0275text(272, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "mat-slider", 92);
      \u0275\u0275element(274, "input", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "p");
      \u0275\u0275text(276, "Range : ");
      \u0275\u0275elementStart(277, "span", 94);
      \u0275\u0275text(278, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(279, "div", 10)(280, "label", 61);
      \u0275\u0275text(281, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "div", 26)(283, "a", 62);
      \u0275\u0275text(284, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 63)(286, "ul", 10)(287, "li")(288, "label", 72);
      \u0275\u0275element(289, "input", 33)(290, "i", 95);
      \u0275\u0275text(291, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li")(293, "label", 72);
      \u0275\u0275element(294, "input", 33)(295, "i", 96);
      \u0275\u0275text(296, "Inactive ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(297, "div", 97)(298, "div", 78)(299, "div", 79)(300, "a", 98);
      \u0275\u0275text(301, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "div", 79)(303, "button", 99);
      \u0275\u0275text(304, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(305, "div", 100)(306, "div", 101)(307, "div", 102)(308, "div", 103)(309, "h4", 104);
      \u0275\u0275text(310, "Customer Ledger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "button", 105);
      \u0275\u0275element(312, "i", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(313, "div", 106)(314, "div", 107)(315, "div", 108)(316, "button", 109);
      \u0275\u0275element(317, "i", 110);
      \u0275\u0275text(318, "Print");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "button", 111);
      \u0275\u0275element(320, "i", 112);
      \u0275\u0275text(321, "Download PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div")(323, "a", 113);
      \u0275\u0275element(324, "i", 9);
      \u0275\u0275text(325, "Create Ledger ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(326, "div", 114)(327, "div", 108)(328, "a", 115);
      \u0275\u0275element(329, "img", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "div")(331, "h6", 117)(332, "a", 118);
      \u0275\u0275text(333, "Mitchel Johnson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "p", 119);
      \u0275\u0275text(335, "johnson@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(336, "div", 108)(337, "span", 120);
      \u0275\u0275element(338, "i", 121);
      \u0275\u0275text(339, "Closing Balance : $400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "span", 122);
      \u0275\u0275element(341, "i", 123);
      \u0275\u0275text(342, "Credit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "span", 124);
      \u0275\u0275element(344, "i", 123);
      \u0275\u0275text(345, "Debit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(346, "div", 125)(347, "table", 126)(348, "thead", 43)(349, "tr")(350, "th");
      \u0275\u0275text(351, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "th");
      \u0275\u0275text(353, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "th", 44);
      \u0275\u0275text(355, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "th");
      \u0275\u0275text(357, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "th");
      \u0275\u0275text(359, "Closing Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275element(360, "th", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "tbody")(362, "tr")(363, "td")(364, "h6", 127);
      \u0275\u0275text(365, "PAYOUT -1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "td");
      \u0275\u0275text(367, "22 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "td");
      \u0275\u0275text(369, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "td", 128);
      \u0275\u0275text(371, "$10,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "td");
      \u0275\u0275text(373, "$5,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "td", 129)(375, "a", 130);
      \u0275\u0275element(376, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "ul", 6)(378, "li")(379, "a", 132);
      \u0275\u0275element(380, "i", 133);
      \u0275\u0275text(381, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(382, "li")(383, "a", 134);
      \u0275\u0275element(384, "i", 135);
      \u0275\u0275text(385, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "li")(387, "a", 136);
      \u0275\u0275element(388, "i", 137);
      \u0275\u0275text(389, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(390, "tr")(391, "td")(392, "h6", 127);
      \u0275\u0275text(393, "PAYOUT -2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "td");
      \u0275\u0275text(395, "07 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "td");
      \u0275\u0275text(397, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "td", 128);
      \u0275\u0275text(399, "$25,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "td");
      \u0275\u0275text(401, "$10,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "td", 129)(403, "a", 130);
      \u0275\u0275element(404, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "ul", 6)(406, "li")(407, "a", 132);
      \u0275\u0275element(408, "i", 133);
      \u0275\u0275text(409, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(410, "li")(411, "a", 134);
      \u0275\u0275element(412, "i", 135);
      \u0275\u0275text(413, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(414, "li")(415, "a", 136);
      \u0275\u0275element(416, "i", 137);
      \u0275\u0275text(417, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(418, "tr")(419, "td")(420, "h6", 127);
      \u0275\u0275text(421, "PAYIN -1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(422, "td");
      \u0275\u0275text(423, "30 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "td");
      \u0275\u0275text(425, "Bank Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "td", 138);
      \u0275\u0275text(427, "$50,125");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "td");
      \u0275\u0275text(429, "$20,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "td", 129)(431, "a", 130);
      \u0275\u0275element(432, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "ul", 6)(434, "li")(435, "a", 132);
      \u0275\u0275element(436, "i", 133);
      \u0275\u0275text(437, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(438, "li")(439, "a", 134);
      \u0275\u0275element(440, "i", 135);
      \u0275\u0275text(441, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(442, "li")(443, "a", 136);
      \u0275\u0275element(444, "i", 137);
      \u0275\u0275text(445, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(446, "tr")(447, "td")(448, "h6", 127);
      \u0275\u0275text(449, "PAYIN -2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(450, "td");
      \u0275\u0275text(451, "17 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "td");
      \u0275\u0275text(453, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "td", 138);
      \u0275\u0275text(455, "$75,900");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "td");
      \u0275\u0275text(457, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "td", 129)(459, "a", 130);
      \u0275\u0275element(460, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "ul", 6)(462, "li")(463, "a", 132);
      \u0275\u0275element(464, "i", 133);
      \u0275\u0275text(465, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "li")(467, "a", 134);
      \u0275\u0275element(468, "i", 135);
      \u0275\u0275text(469, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(470, "li")(471, "a", 136);
      \u0275\u0275element(472, "i", 137);
      \u0275\u0275text(473, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(474, "tr")(475, "td")(476, "h6", 127);
      \u0275\u0275text(477, "PAYOUT -3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(478, "td");
      \u0275\u0275text(479, "09 Dec 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "td");
      \u0275\u0275text(481, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "td", 128);
      \u0275\u0275text(483, "$1,20,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "td");
      \u0275\u0275text(485, "$60,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "td", 129)(487, "a", 130);
      \u0275\u0275element(488, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "ul", 6)(490, "li")(491, "a", 132);
      \u0275\u0275element(492, "i", 133);
      \u0275\u0275text(493, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "li")(495, "a", 134);
      \u0275\u0275element(496, "i", 135);
      \u0275\u0275text(497, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "li")(499, "a", 136);
      \u0275\u0275element(500, "i", 137);
      \u0275\u0275text(501, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(502, "tr")(503, "td")(504, "h6", 127);
      \u0275\u0275text(505, "PAYOUT -4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(506, "td");
      \u0275\u0275text(507, "02 Dec 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "td");
      \u0275\u0275text(509, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "td", 128);
      \u0275\u0275text(511, "$2,50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "td");
      \u0275\u0275text(513, "$1,25,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "td", 129)(515, "a", 130);
      \u0275\u0275element(516, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "ul", 6)(518, "li")(519, "a", 132);
      \u0275\u0275element(520, "i", 133);
      \u0275\u0275text(521, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(522, "li")(523, "a", 134);
      \u0275\u0275element(524, "i", 135);
      \u0275\u0275text(525, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(526, "li")(527, "a", 136);
      \u0275\u0275element(528, "i", 137);
      \u0275\u0275text(529, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(530, "tr")(531, "td")(532, "h6", 127);
      \u0275\u0275text(533, "PAYIN -3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "td");
      \u0275\u0275text(535, "15 Nov 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "td");
      \u0275\u0275text(537, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "td", 138);
      \u0275\u0275text(539, "$5,00,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "td");
      \u0275\u0275text(541, "$5,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "td", 129)(543, "a", 130);
      \u0275\u0275element(544, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "ul", 6)(546, "li")(547, "a", 132);
      \u0275\u0275element(548, "i", 133);
      \u0275\u0275text(549, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(550, "li")(551, "a", 134);
      \u0275\u0275element(552, "i", 135);
      \u0275\u0275text(553, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(554, "li")(555, "a", 136);
      \u0275\u0275element(556, "i", 137);
      \u0275\u0275text(557, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(558, "tr")(559, "td")(560, "h6", 127);
      \u0275\u0275text(561, "PAYIN -4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(562, "td");
      \u0275\u0275text(563, "30 Nov 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "td");
      \u0275\u0275text(565, "Bank Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "td", 138);
      \u0275\u0275text(567, "$7,50,300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "td");
      \u0275\u0275text(569, "$5,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "td", 129)(571, "a", 130);
      \u0275\u0275element(572, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(573, "ul", 6)(574, "li")(575, "a", 132);
      \u0275\u0275element(576, "i", 133);
      \u0275\u0275text(577, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(578, "li")(579, "a", 134);
      \u0275\u0275element(580, "i", 135);
      \u0275\u0275text(581, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(582, "li")(583, "a", 136);
      \u0275\u0275element(584, "i", 137);
      \u0275\u0275text(585, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(586, "tr")(587, "td")(588, "h6", 127);
      \u0275\u0275text(589, "PAYOUT -5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(590, "td");
      \u0275\u0275text(591, "12 Oct 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(592, "td");
      \u0275\u0275text(593, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "td", 128);
      \u0275\u0275text(595, "$9,99,999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "td");
      \u0275\u0275text(597, "$4,00,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "td", 129)(599, "a", 130);
      \u0275\u0275element(600, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(601, "ul", 6)(602, "li")(603, "a", 132);
      \u0275\u0275element(604, "i", 133);
      \u0275\u0275text(605, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(606, "li")(607, "a", 134);
      \u0275\u0275element(608, "i", 135);
      \u0275\u0275text(609, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(610, "li")(611, "a", 136);
      \u0275\u0275element(612, "i", 137);
      \u0275\u0275text(613, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(614, "tfoot", 139)(615, "tr", 140)(616, "td", 141);
      \u0275\u0275text(617, "Closing Balance as on 22 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275element(618, "td");
      \u0275\u0275elementStart(619, "td", 142);
      \u0275\u0275text(620, "$5,00,750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(621, "td", 142);
      \u0275\u0275text(622, "$2,50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275element(623, "td");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(624, "div", 143)(625, "div", 144)(626, "div", 102)(627, "div", 103)(628, "h4", 104);
      \u0275\u0275text(629, "Add New Ledger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(630, "button", 105);
      \u0275\u0275element(631, "i", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(632, "form")(633, "div", 145)(634, "div", 10)(635, "label", 61);
      \u0275\u0275text(636, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(637, "input", 146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "div", 10)(639, "label", 61);
      \u0275\u0275text(640, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(641, "div", 147);
      \u0275\u0275element(642, "input", 148);
      \u0275\u0275elementStart(643, "span", 149);
      \u0275\u0275element(644, "i", 150);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(645, "div", 10)(646, "label", 61);
      \u0275\u0275text(647, "Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(648, "div", 108)(649, "div", 151);
      \u0275\u0275element(650, "input", 152);
      \u0275\u0275elementStart(651, "label", 153);
      \u0275\u0275text(652, " Credit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(653, "div", 154);
      \u0275\u0275element(654, "input", 155);
      \u0275\u0275elementStart(655, "label", 156);
      \u0275\u0275text(656, " Debit ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(657, "div", 157)(658, "button", 158);
      \u0275\u0275text(659, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(660, "button", 159);
      \u0275\u0275text(661, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(662, "div", 160)(663, "div", 144)(664, "div", 102)(665, "div", 103)(666, "h4", 104);
      \u0275\u0275text(667, "Edit Ledger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "button", 105);
      \u0275\u0275element(669, "i", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(670, "form")(671, "div", 106)(672, "div", 10)(673, "label", 61);
      \u0275\u0275text(674, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(675, "input", 161);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "div", 10)(677, "label", 61);
      \u0275\u0275text(678, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "div", 162);
      \u0275\u0275element(680, "input", 163);
      \u0275\u0275elementStart(681, "span", 149);
      \u0275\u0275element(682, "i", 150);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(683, "div", 10)(684, "label", 61);
      \u0275\u0275text(685, "Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(686, "div", 108)(687, "div", 151);
      \u0275\u0275element(688, "input", 152);
      \u0275\u0275elementStart(689, "label", 153);
      \u0275\u0275text(690, " Credit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(691, "div", 154);
      \u0275\u0275element(692, "input", 155);
      \u0275\u0275elementStart(693, "label", 156);
      \u0275\u0275text(694, " Debit ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(695, "div", 157)(696, "button", 158);
      \u0275\u0275text(697, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(698, "button", 159);
      \u0275\u0275text(699, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(700, "div", 164)(701, "div", 165)(702, "div", 102)(703, "div", 166)(704, "div", 10);
      \u0275\u0275element(705, "img", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(706, "h6", 168);
      \u0275\u0275text(707, "Delete Ledger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(708, "p", 10);
      \u0275\u0275text(709, "Are you sure, you want to delete Ledger?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(710, "div", 169)(711, "a", 170);
      \u0275\u0275text(712, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(713, "a", 171);
      \u0275\u0275text(714, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(715, "div", 172)(716, "div", 165)(717, "div", 102)(718, "div", 166)(719, "div", 10);
      \u0275\u0275element(720, "img", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "h6", 168);
      \u0275\u0275text(722, "Delete Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(723, "p", 10);
      \u0275\u0275text(724, "Are you sure, you want to delete Customer?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(725, "div", 169)(726, "a", 170);
      \u0275\u0275text(727, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "a", 171);
      \u0275\u0275text(729, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.addCustomer);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(94);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 144 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(128);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [MatSliderModule, MatSlider, MatSliderThumb, DateRangePickerComponent, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerListComponent, [{
    type: Component,
    args: [{ selector: "app-customer-list", imports: [MatSliderModule, DateRangePickerComponent, CustomPaginationComponent, MatSortModule, RouterLink, CommonModule, FormsModule], template: `<!-- Start Container -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Customers</h6>
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
            <div>
                <a [routerLink]="routes.addCustomer" class="btn btn-primary d-flex align-items-center">
                    <i class="isax isax-add-circle5 me-1"></i>New Customer
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

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
                                <span>Customer</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Phone</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Counrty</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span>Balance</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Total Invoice</span>
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
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>$10,000 - $25,000<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Status Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- Table Search End -->

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
                    <th mat-sort-header="customer">Customer</th>
                    <th mat-sort-header="phone">Phone</th>
                    <th mat-sort-header="country">Country</th>
                    <th mat-sort-header="balance">Balance</th>
                    <th class="no-sort">Total Invoice</th>
                    <th mat-sort-header="created">Created On</th>
                    <th class="no-sort">Status</th>
                    <th class="no-sort"></th>
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
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.customer}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        {{data.phone}}
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class=" me-2 flex-shrink-0">
                                <img src="assets/img/icons/{{data.flag}}" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.country}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.balance}}</td>
                    <td>{{data.totalInvoice}}</td>
                    <td>{{data.createdOn}}</td>
                    <td>
                        <span class="badge  d-inline-flex align-items-center" [ngClass]="data.status==='Inactive'?'badge-soft-danger':'badge-soft-success'">
                            {{data.status}} 
                            <i class="isax ms-1" [ngClass]="data.status==='Inactive'?'isax-close-circle':'isax-tick-circle'"></i>
                        </span>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <a [routerLink]="routes.addInvoice" class="btn btn-sm btn-outline-white d-inline-flex align-items-center me-1">
                                <i class="isax isax-add-circle me-1"></i> Invoice
                            </a>
                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-white d-inline-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#view-ledger">
                                <i class="isax isax-document-text-1 me-1"></i> Ledger
                            </a>
                        </div>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_customer"><i class="isax isax-eye me-2"></i>View</a>
                            </li>
                            <li>
                                <a [routerLink]="routes.editCustomer" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-archive-2 me-2"></i>Archive</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                            </li>
                        </ul>
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
    <app-custom-pagination *ngIf="row"></app-custom-pagination>
    <!-- /Table List -->

</div>
<!-- container -->


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
                <label class="form-label">Country</label>
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
                                    <span class=" me-2"><img src="assets/img/icons/flag-1.svg" class="flex-shrink-0" alt="img"></span>United states
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class=" me-2"><img src="assets/img/icons/flag-2.svg" class="flex-shrink-0" alt="img"></span>Canada
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class=" me-2"><img src="assets/img/icons/flag-3.svg" class="flex-shrink-0" alt="img"></span>UK
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class=" me-2"><img src="assets/img/icons/flag-4.svg" class="flex-shrink-0" alt="img"></span>Germany
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
                <label class="form-label">Balance</label>
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
                        <ul class="mb-3">
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Active
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Inactive
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
<!-- End Filter -->

<!-- View Ledger Modal Start -->
<div id="view-ledger" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Customer Ledger</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <div class="modal-body">
                <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 p-3 rounded mb-3">
                    <div class="d-flex align-items-center">
                        <button type="button" class="btn btn-outline-white me-3"><i class="isax isax-printer me-1"></i>Print</button>
                        <button type="button" class="btn btn-outline-white"><i class="isax isax-document-download me-1"></i>Download PDF</button>
                    </div>
                    <div>
                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_ledger">
                            <i class="isax isax-add-circle5 me-1"></i>Create Ledger
                        </a>
                    </div>
                </div>
                <div class="bg-light d-flex align-items-center justify-content-between flex-wrap row-gap-3 p-3 rounded mb-3">
                    <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md rounded-circle me-2 flex-shrink-0">
                            <img src="assets/img/profiles/avatar-16.jpg" class="rounded-circle" alt="img">
                        </a>
                        <div>
                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Mitchel Johnson</a></h6>
                            <p class="mb-0">johnson&#64;example.com</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="badge badge-white d-inline-flex align-items-center me-3"><i class="isax isax-refresh-circle me-1 text-info"></i>Closing Balance : $400</span>
                        <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center me-2"><i class="fa-solid fa-circle fs-6 me-1"></i>Credit</span>
                        <span class="badge badge-sm badge-soft-danger d-inline-flex align-items-center"><i class="fa-solid fa-circle fs-6 me-1"></i>Debit</span>
                    </div>
                </div>
                <!-- Table List -->
                <div class="table-responsive border border-bottom-0">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th class="no-sort">Payment Mode</th>
                                <th>Amount</th>
                                <th>Closing Balance</th>
                                <th class="no-sort"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYOUT -1</h6>
                                </td>
                                <td>22 Feb 2025</td>
                                <td>Cash</td>
                                <td class="text-danger">$10,000</td>
                                <td>$5,000</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYOUT -2</h6>
                                </td>
                                <td>07 Feb 2025</td>
                                <td>Cheque</td>
                                <td class="text-danger">$25,750</td>
                                <td>$10,750</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYIN -1</h6>
                                </td>
                                <td>30 Jan 2025</td>
                                <td>Bank Transfer</td>
                                <td class="text-success">$50,125</td>
                                <td>$20,000</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYIN -2</h6>
                                </td>
                                <td>17 Jan 2025</td>
                                <td>Paypal</td>
                                <td class="text-success">$75,900</td>
                                <td>$50,000</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYOUT -3</h6>
                                </td>
                                <td>09 Dec 2025</td>
                                <td>Stripe</td>
                                <td class="text-danger">$1,20,000</td>
                                <td>$60,000</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYOUT -4</h6>
                                </td>
                                <td>02 Dec 2025</td>
                                <td>Cash</td>
                                <td class="text-danger">$2,50,000</td>
                                <td>$1,25,000</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYIN -3</h6>
                                </td>
                                <td>15 Nov 2025</td>
                                <td>Cheque</td>
                                <td class="text-success">$5,00,750</td>
                                <td>$5,00,000</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYIN -4</h6>
                                </td>
                                <td>30 Nov 2025</td>
                                <td>Bank Transfer</td>
                                <td class="text-success">$7,50,300</td>
                                <td>$5,00,000</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 class="fw-medium fs-14">PAYOUT -5</h6>
                                </td>
                                <td>12 Oct 2025</td>
                                <td>Paypal</td>
                                <td class="text-danger">$9,99,999</td>
                                <td>$4,00,000</td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_ledger"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_ledger"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_ledger"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot class="tfoot-light">
                            <tr class="bg-light">
                                <td class="text-dark fw-semibold" colspan="2">Closing Balance as on 22 Feb 2025</td>
                                <td></td>
                                <td class="text-dark fw-semibold">$5,00,750</td>
                                <td class="text-dark fw-semibold">$2,50,000</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!-- /Table List -->
            </div>
        </div>
    </div>
</div>
<!-- /View Ledger Modal End -->

<!-- Add Ledger Start -->
<div id="add_ledger" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Ledger</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body pb-1">
                    <div class="mb-3">
                        <label class="form-label">Amount</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Date</label>
                        <div class="input-group position-relative ngxdate">
                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                            <span class="input-icon-addon fs-16 text-gray-9">
                                <i class="isax isax-calendar-2"></i>
                            </span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mode</label>
                        <div class="d-flex align-items-center">
                            <div class="form-check me-3">
                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1">
                                <label class="form-check-label" for="Radio-sm-1">
                                    Credit
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2" checked="">
                                <label class="form-check-label" for="Radio-sm-2">
                                    Debit
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /Add Modal End -->

<!-- Edit Ledger Start -->
<div id="edit_ledger" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Ledger</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Amount</label>
                        <input type="text" class="form-control" value="$450">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Date</label>
                        <div class="input-group position-relative ngxdate1">
                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate1" placeholder="31/10/2024">
                            <span class="input-icon-addon fs-16 text-gray-9">
                                <i class="isax isax-calendar-2"></i>
                            </span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mode</label>
                        <div class="d-flex align-items-center">
                            <div class="form-check me-3">
                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1">
                                <label class="form-check-label" for="Radio-sm-1">
                                    Credit
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2" checked="">
                                <label class="form-check-label" for="Radio-sm-2">
                                    Debit
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /Edit Ledger End -->

<!-- Delete Ledger Start -->
<div class="modal fade" id="delete_ledger">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Ledger</h6>
                <p class="mb-3">Are you sure, you want to delete Ledger?</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Delete Ledger  End -->

<!-- Delete Modal Start -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Customer</h6>
                <p class="mb-3">Are you sure, you want to delete Customer?</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Delete Modal  End -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerListComponent, { className: "CustomerListComponent", filePath: "src/app/features/invantory-sales/customers/customer-list/customer-list.component.ts", lineNumber: 20 });
})();
export {
  CustomerListComponent
};
//# sourceMappingURL=chunk-UNP4HZ4B.js.map
