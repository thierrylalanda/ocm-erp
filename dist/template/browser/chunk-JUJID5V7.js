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

// src/app/features/customers/customer-quotations/customer-quotations.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function CustomerQuotationsComponent_For_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 92)(2, "div", 93)(3, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerQuotationsComponent_For_77_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 95);
    \u0275\u0275text(6, "QU0014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 96)(9, "a", 97);
    \u0275\u0275element(10, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 99)(13, "a", 100);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 101);
    \u0275\u0275text(19);
    \u0275\u0275element(20, "i", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 103)(22, "a", 104);
    \u0275\u0275element(23, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 7)(25, "li")(26, "a", 106);
    \u0275\u0275element(27, "i", 107);
    \u0275\u0275text(28, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li")(30, "a", 108);
    \u0275\u0275element(31, "i", 109);
    \u0275\u0275text(32, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 110);
    \u0275\u0275element(35, "i", 111);
    \u0275\u0275text(36, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(7);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Declined" ? "badge-soft-danger" : data_r2.status === "Sent" ? "badge-soft-info" : data_r2.status === "Expired" ? "badge-soft-light text-dark" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Declined" ? "isax-close-circle" : data_r2.status === "Sent" ? "isax-arrow-right-2" : data_r2.status === "Expired" ? "isax-timer-pause" : "isax-tick-circle");
  }
}
function CustomerQuotationsComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 112);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CustomerQuotationsComponent_app_custom_pagination_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CustomerQuotationsComponent = class _CustomerQuotationsComponent {
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
    this.data.getquotation().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerQuotations) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getquotation().subscribe((apiRes) => {
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
  static \u0275fac = function CustomerQuotationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerQuotationsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerQuotationsComponent, selectors: [["app-customer-quotations"]], decls: 221, vars: 13, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap", "flex-lg-nowrap", "flex-md-nowrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "created"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-info", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-dark", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-semibold", "text-gray-5"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "me-3"], [1, "isax", "isax-close-circle5", "fs-36"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_quotation", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-document-download", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CustomerQuotationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Quotations");
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
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div")(18, "a", 9);
      \u0275\u0275element(19, "i", 10);
      \u0275\u0275text(20, "New Quotations ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "a", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18)(29, "label")(30, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function CustomerQuotationsComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CustomerQuotationsComponent_Template_input_ngModelChange_30_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "a", 20);
      \u0275\u0275element(32, "i", 21);
      \u0275\u0275text(33, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 22)(35, "div", 23)(36, "a", 24);
      \u0275\u0275element(37, "i", 25);
      \u0275\u0275text(38, "Sort By : ");
      \u0275\u0275elementStart(39, "span", 26);
      \u0275\u0275text(40, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "ul", 27)(42, "li")(43, "a", 8);
      \u0275\u0275text(44, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 8);
      \u0275\u0275text(47, "Oldest");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(48, "div", 28)(49, "h6", 29);
      \u0275\u0275text(50, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 30)(52, "span", 31);
      \u0275\u0275text(53, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, "Account Holders Selected");
      \u0275\u0275elementStart(55, "span", 32);
      \u0275\u0275listener("click", function CustomerQuotationsComponent_Template_span_click_55_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(56, "i", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "a", 34);
      \u0275\u0275listener("click", function CustomerQuotationsComponent_Template_a_click_57_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(58, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 35)(60, "table", 36);
      \u0275\u0275listener("matSortChange", function CustomerQuotationsComponent_Template_table_matSortChange_60_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(61, "thead", 37)(62, "tr")(63, "th", 38)(64, "div", 39);
      \u0275\u0275listener("click", function CustomerQuotationsComponent_Template_div_click_64_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(65, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function CustomerQuotationsComponent_Template_input_ngModelChange_65_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "th", 38);
      \u0275\u0275text(67, "Quotation ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 41);
      \u0275\u0275text(69, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 42);
      \u0275\u0275text(71, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 38);
      \u0275\u0275text(73, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "th", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "tbody");
      \u0275\u0275repeaterCreate(76, CustomerQuotationsComponent_For_77_Template, 37, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(78, CustomerQuotationsComponent_Conditional_78_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(79, CustomerQuotationsComponent_app_custom_pagination_79_Template, 1, 0, "app-custom-pagination", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 44)(81, "div", 45)(82, "div", 46)(83, "h6", 47);
      \u0275\u0275text(84, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "button", 48);
      \u0275\u0275element(86, "i", 49);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 50)(88, "form")(89, "div", 11)(90, "label", 51);
      \u0275\u0275text(91, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 23)(93, "a", 52);
      \u0275\u0275text(94, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 53)(96, "div", 11)(97, "div", 54)(98, "span", 55);
      \u0275\u0275element(99, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "ul", 11)(102, "li", 58)(103, "label", 59);
      \u0275\u0275element(104, "input", 60);
      \u0275\u0275text(105, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "a", 61);
      \u0275\u0275text(107, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "li")(109, "label", 62);
      \u0275\u0275element(110, "input", 63);
      \u0275\u0275elementStart(111, "span", 64);
      \u0275\u0275element(112, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275text(113, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "li")(115, "label", 62);
      \u0275\u0275element(116, "input", 63);
      \u0275\u0275elementStart(117, "span", 64);
      \u0275\u0275element(118, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275text(119, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "li")(121, "label", 62);
      \u0275\u0275element(122, "input", 63);
      \u0275\u0275elementStart(123, "span", 64);
      \u0275\u0275element(124, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275text(125, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "li")(127, "label", 62);
      \u0275\u0275element(128, "input", 63);
      \u0275\u0275elementStart(129, "span", 64);
      \u0275\u0275element(130, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275text(131, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 69)(133, "div", 70)(134, "a", 71);
      \u0275\u0275text(135, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 70)(137, "a", 72);
      \u0275\u0275text(138, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(139, "div", 11)(140, "label", 73);
      \u0275\u0275text(141, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 74);
      \u0275\u0275element(143, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 11)(145, "label", 51);
      \u0275\u0275text(146, "Quotation Id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 23)(148, "a", 52);
      \u0275\u0275text(149, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 53)(151, "div", 11)(152, "div", 54)(153, "span", 55);
      \u0275\u0275element(154, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275element(155, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "ul", 11)(157, "li")(158, "label", 62);
      \u0275\u0275element(159, "input", 63);
      \u0275\u0275text(160, " QU0014 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "li")(162, "label", 62);
      \u0275\u0275element(163, "input", 63);
      \u0275\u0275text(164, " QU0013 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "li")(166, "label", 62);
      \u0275\u0275element(167, "input", 63);
      \u0275\u0275text(168, " QU0012 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "li")(170, "label", 62);
      \u0275\u0275element(171, "input", 63);
      \u0275\u0275text(172, " QU0011 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(173, "div", 11)(174, "label", 51);
      \u0275\u0275text(175, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 23)(177, "a", 52);
      \u0275\u0275text(178, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 53)(180, "ul", 11)(181, "li")(182, "label", 62);
      \u0275\u0275element(183, "input", 63)(184, "i", 75);
      \u0275\u0275text(185, "Accepted ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "li")(187, "label", 62);
      \u0275\u0275element(188, "input", 63)(189, "i", 76);
      \u0275\u0275text(190, "Declined ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "li")(192, "label", 62);
      \u0275\u0275element(193, "input", 63)(194, "i", 77);
      \u0275\u0275text(195, "Sent ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "li")(197, "label", 62);
      \u0275\u0275element(198, "input", 63)(199, "i", 78);
      \u0275\u0275text(200, "Expired ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(201, "div", 79)(202, "div", 69)(203, "div", 70)(204, "a", 80);
      \u0275\u0275text(205, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 70)(207, "button", 81);
      \u0275\u0275listener("click", function CustomerQuotationsComponent_Template_button_click_207_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(208, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(209, "div", 82)(210, "div", 83)(211, "div", 84)(212, "div", 85)(213, "div", 86)(214, "span", 87);
      \u0275\u0275text(215, "Selected 1 Record");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "div", 88)(217, "a", 89);
      \u0275\u0275text(218, "Yes, Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "a", 90);
      \u0275\u0275element(220, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.customeraddQuotations);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(18);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 78 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerQuotationsComponent, [{
    type: Component,
    args: [{ selector: "app-customer-quotations", imports: [
      CommonModule,
      MatSliderModule,
      DateRangePickerComponent,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule,
      RouterLink
    ], template: `<!-- Start Container -->
<div class="content-two">

    <!-- Start Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Quotations</h6>
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
                <a [routerLink]="routes.customeraddQuotations" class="btn btn-primary d-flex align-items-center">
                    <i class="isax isax-add-circle5 me-1"></i>New Quotations
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->
    
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
            </div>
        </div>

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">6</span>Account Holders Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
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
                    <th mat-sort-header="created">Created On</th>
                    <th class="no-sort"	>Status</th>
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
                        <a href="javascript:void(0);" class="link-default">QU0014</a>
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
                    <td>
                        <span class="badge d-inline-flex align-items-center"
                        [ngClass]="data.status==='Declined'?'badge-soft-danger':data.status==='Sent'?'badge-soft-info' :data.status==='Expired'?'badge-soft-light text-dark':'badge-soft-success'">
                        {{data.status}} 
                        <i class="isax  ms-1"
                        [ngClass]="data.status==='Declined'?'isax-close-circle':data.status==='Sent'?'isax-arrow-right-2':data.status==='Expired'?'isax-timer-pause':'isax-tick-circle'"></i>
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
    <app-custom-pagination *ngIf="row"/>
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
				<form>
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
						<label for="dateRangePicker" class="form-label">Date Range</label>
						<div class="filter-daterange">
                            <app-date-range-picker></app-date-range-picker>
                        </div>
					</div>	
					<div class="mb-3">
						<label class="form-label">Quotation Id</label>
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
											<input class="form-check-input m-0 me-2" type="checkbox">
											QU0014
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											QU0013
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											QU0012
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											QU0011
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
											<i class="fa-solid fa-circle fs-6 text-success me-1"></i>Accepted
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Declined
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-info me-1"></i>Sent
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-dark me-1"></i>Expired
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
								
					<div class="offcanvas-footer">
						<div class="row g-2">
							<div class="col-6">
								<a href="javascript:void(0);"  class="btn btn-outline-white w-100">Reset</a>
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

		<!-- Start Delete Modal  -->
		<div class="modal fade" id="delete_modal">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<div class="modal-content">
					<div class="modal-body text-center">
						<div class="d-flex align-items-center justify-content-between">
							<span class="fw-semibold text-gray-5">Selected 1 Record</span>
							<div class="d-flex align-items-center justify-content-center">
								<a href="javascript:void(0);" class="btn btn-danger me-2" data-bs-dismiss="modal">Yes, Delete</a>
								<a href="javascript:void(0);" class="me-3" data-bs-dismiss="modal"><i class="isax isax-close-circle5 fs-36"></i></a>
							</div>
						</div>
					</div><!-- End modal body-->
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- End Delete Modal  -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerQuotationsComponent, { className: "CustomerQuotationsComponent", filePath: "src/app/features/customers/customer-quotations/customer-quotations.component.ts", lineNumber: 22 });
})();
export {
  CustomerQuotationsComponent
};
//# sourceMappingURL=chunk-JUJID5V7.js.map
