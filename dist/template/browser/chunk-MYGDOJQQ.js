import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/user-reports/customer-due-reports/customer-due-reports.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function CustomerDueReportsComponent_For_181_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 111)(2, "div", 112)(3, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDueReportsComponent_For_181_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 114);
    \u0275\u0275text(6, "INV00025");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 115)(9, "a", 116);
    \u0275\u0275element(10, "img", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 118)(13, "a", 119);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 120);
    \u0275\u0275text(21);
    \u0275\u0275element(22, "i", 121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.totalAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "badge-soft-warning" : data_r2.status === "Cancelled" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "isax-timer" : data_r2.status === "Cancelled" ? "isax-close-circle" : "isax-tick-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.due);
  }
}
function CustomerDueReportsComponent_Conditional_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 122);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CustomerDueReportsComponent_app_custom_pagination_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CustomerDueReportsComponent = class _CustomerDueReportsComponent {
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
    this.data.getCustomerDueReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerDueReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCustomerDueReport().subscribe((apiRes) => {
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
  static \u0275fac = function CustomerDueReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerDueReportsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerDueReportsComponent, selectors: [["app-customer-due-reports"]], decls: 317, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-bottom", "border-3", "border-primary", "custom-border"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-2"], [1, "me-2"], [1, "avatar", "bg-primary", "rounded-circle", "border", "border-primary", "text-white"], [1, "isax", "isax-profile-2user", "fs-16"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-bottom", "border-3", "border-success", "custom-border"], [1, "avatar", "bg-success", "rounded-circle", "border", "border-success", "text-white"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-bottom", "border-3", "border-warning", "custom-border"], [1, "avatar", "bg-warning", "rounded-circle", "border", "border-warning", "text-white"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-bottom", "border-3", "border-danger", "custom-border"], [1, "avatar", "bg-danger", "rounded-circle", "border", "border-danger", "text-white"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "id"], ["mat-sort-header", "customer"], ["mat-sort-header", "total"], ["mat-sort-header", "paid"], ["mat-sort-header", "status"], ["mat-sort-header", "due"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "badge-dot", "bg-success", "me-1"], [1, "badge-dot", "bg-warning", "me-1"], [1, "badge-dot", "bg-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CustomerDueReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Customer Due Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "span", 16);
      \u0275\u0275element(25, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div")(27, "p", 18);
      \u0275\u0275text(28, "Total Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h6", 19);
      \u0275\u0275text(30, "320");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "p", 20)(32, "span", 21);
      \u0275\u0275element(33, "i", 22);
      \u0275\u0275text(34, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 23)(38, "div", 13)(39, "div", 14)(40, "div", 15)(41, "span", 24);
      \u0275\u0275element(42, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div")(44, "p", 18);
      \u0275\u0275text(45, "Outstanding Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "h6", 19);
      \u0275\u0275text(47, "$3,500,000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "p", 20)(49, "span", 21);
      \u0275\u0275element(50, "i", 22);
      \u0275\u0275text(51, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 11)(54, "div", 25)(55, "div", 13)(56, "div", 14)(57, "div", 15)(58, "span", 26);
      \u0275\u0275element(59, "i", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div")(61, "p", 18);
      \u0275\u0275text(62, "Overdue Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h6", 19);
      \u0275\u0275text(64, "$1,200,000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "p", 20)(66, "span", 21);
      \u0275\u0275element(67, "i", 22);
      \u0275\u0275text(68, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div", 11)(71, "div", 28)(72, "div", 13)(73, "div", 14)(74, "div", 15)(75, "span", 29);
      \u0275\u0275element(76, "i", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div")(78, "p", 18);
      \u0275\u0275text(79, "Margin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "h6", 19);
      \u0275\u0275text(81, "65%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "p", 20)(83, "span", 21);
      \u0275\u0275element(84, "i", 22);
      \u0275\u0275text(85, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(86, " from last month ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(87, "div", 30)(88, "div", 31)(89, "div", 32)(90, "div", 33)(91, "div", 34)(92, "a", 35);
      \u0275\u0275element(93, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 37)(95, "label")(96, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function CustomerDueReportsComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CustomerDueReportsComponent_Template_input_ngModelChange_96_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(97, "app-date-range-picker-2");
      \u0275\u0275elementStart(98, "a", 39);
      \u0275\u0275element(99, "i", 40);
      \u0275\u0275text(100, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 41)(102, "div", 4)(103, "a", 42);
      \u0275\u0275element(104, "i", 43);
      \u0275\u0275text(105, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "ul", 44)(107, "li")(108, "label", 45);
      \u0275\u0275element(109, "i", 46)(110, "input", 47);
      \u0275\u0275elementStart(111, "span");
      \u0275\u0275text(112, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "li")(114, "label", 45);
      \u0275\u0275element(115, "i", 46)(116, "input", 47);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "li")(120, "label", 45);
      \u0275\u0275element(121, "i", 46)(122, "input", 47);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "li")(126, "label", 45);
      \u0275\u0275element(127, "i", 46)(128, "input", 47);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "li")(132, "label", 45);
      \u0275\u0275element(133, "i", 46)(134, "input", 48);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "li")(138, "label", 45);
      \u0275\u0275element(139, "i", 46)(140, "input", 48);
      \u0275\u0275elementStart(141, "span");
      \u0275\u0275text(142, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(143, "div", 49)(144, "h6", 50);
      \u0275\u0275text(145, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "span", 51)(147, "span", 52);
      \u0275\u0275text(148, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, "Vendors Selected");
      \u0275\u0275elementStart(150, "span", 53);
      \u0275\u0275listener("click", function CustomerDueReportsComponent_Template_span_click_150_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(151, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "span", 51)(153, "span", 52);
      \u0275\u0275text(154, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(155, "Status Selected");
      \u0275\u0275elementStart(156, "span", 53);
      \u0275\u0275listener("click", function CustomerDueReportsComponent_Template_span_click_156_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(157, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "a", 55);
      \u0275\u0275listener("click", function CustomerDueReportsComponent_Template_a_click_158_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(159, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "div", 56)(161, "table", 57);
      \u0275\u0275listener("matSortChange", function CustomerDueReportsComponent_Template_table_matSortChange_161_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(162, "thead", 58)(163, "tr")(164, "th", 59)(165, "div", 60);
      \u0275\u0275listener("click", function CustomerDueReportsComponent_Template_div_click_165_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(166, "input", 61);
      \u0275\u0275twoWayListener("ngModelChange", function CustomerDueReportsComponent_Template_input_ngModelChange_166_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "th", 62);
      \u0275\u0275text(168, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "th", 63);
      \u0275\u0275text(170, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "th", 64);
      \u0275\u0275text(172, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "th", 65);
      \u0275\u0275text(174, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "th", 66);
      \u0275\u0275text(176, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th", 67);
      \u0275\u0275text(178, "Due");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(179, "tbody");
      \u0275\u0275repeaterCreate(180, CustomerDueReportsComponent_For_181_Template, 25, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(182, CustomerDueReportsComponent_Conditional_182_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(183, CustomerDueReportsComponent_app_custom_pagination_183_Template, 1, 0, "app-custom-pagination", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 69)(185, "div", 70)(186, "div", 71)(187, "h6", 72);
      \u0275\u0275text(188, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "button", 73);
      \u0275\u0275element(190, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(191, "div", 75)(192, "form", 76)(193, "div", 30)(194, "label", 77);
      \u0275\u0275text(195, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 4)(197, "a", 78);
      \u0275\u0275text(198, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 79)(200, "div", 30)(201, "div", 80)(202, "span", 81);
      \u0275\u0275element(203, "i", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275element(204, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "ul", 30)(206, "li", 84)(207, "label", 85);
      \u0275\u0275element(208, "input", 86);
      \u0275\u0275text(209, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "a", 87);
      \u0275\u0275text(211, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "li")(213, "label", 88);
      \u0275\u0275element(214, "input", 48);
      \u0275\u0275elementStart(215, "span", 89);
      \u0275\u0275element(216, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(217, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "li")(219, "label", 88);
      \u0275\u0275element(220, "input", 48);
      \u0275\u0275elementStart(221, "span", 89);
      \u0275\u0275element(222, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(223, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "li")(225, "label", 88);
      \u0275\u0275element(226, "input", 48);
      \u0275\u0275elementStart(227, "span", 89);
      \u0275\u0275element(228, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(229, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li")(231, "label", 88);
      \u0275\u0275element(232, "input", 48);
      \u0275\u0275elementStart(233, "span", 89);
      \u0275\u0275element(234, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275text(235, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 88);
      \u0275\u0275element(238, "input", 48);
      \u0275\u0275elementStart(239, "span", 89);
      \u0275\u0275element(240, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275text(241, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(242, "div", 95)(243, "div", 96)(244, "a", 97);
      \u0275\u0275text(245, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 96)(247, "a", 98);
      \u0275\u0275text(248, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(249, "div", 30)(250, "label", 77);
      \u0275\u0275text(251, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "div", 4)(253, "a", 78);
      \u0275\u0275text(254, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 79)(256, "div", 99)(257, "div", 100)(258, "span", 101);
      \u0275\u0275text(259, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "span", 101);
      \u0275\u0275text(261, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "mat-slider", 102);
      \u0275\u0275element(263, "input", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "p");
      \u0275\u0275text(265, "Range : ");
      \u0275\u0275elementStart(266, "span", 104);
      \u0275\u0275text(267, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(268, "div", 30)(269, "label", 77);
      \u0275\u0275text(270, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "div", 4)(272, "a", 78);
      \u0275\u0275text(273, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div", 79)(275, "div", 30)(276, "div", 80)(277, "span", 81);
      \u0275\u0275element(278, "i", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275element(279, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "ul", 30)(281, "li", 84)(282, "label", 85);
      \u0275\u0275element(283, "input", 86);
      \u0275\u0275text(284, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "a", 87);
      \u0275\u0275text(286, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "li")(288, "label", 88);
      \u0275\u0275element(289, "input", 48)(290, "span", 105);
      \u0275\u0275text(291, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li")(293, "label", 88);
      \u0275\u0275element(294, "input", 48)(295, "span", 106);
      \u0275\u0275text(296, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "li")(298, "label", 88);
      \u0275\u0275element(299, "input", 48)(300, "span", 107);
      \u0275\u0275text(301, "Cancelled ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(302, "div", 95)(303, "div", 96)(304, "a", 97);
      \u0275\u0275text(305, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 96)(307, "a", 98);
      \u0275\u0275text(308, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(309, "div", 108)(310, "div", 95)(311, "div", 96)(312, "a", 109);
      \u0275\u0275text(313, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "div", 96)(315, "button", 110);
      \u0275\u0275listener("click", function CustomerDueReportsComponent_Template_button_click_315_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(316, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(96);
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
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 182 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(79);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, RouterLink, DateRangePicker2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerDueReportsComponent, [{
    type: Component,
    args: [{ selector: "app-customer-due-reports", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      RouterLink,
      DateRangePicker2Component
    ], template: `    <!-- Start Content -->
    <div class="content-two">

        <!-- Page Header -->
        <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
            <div>
                <h6 class="mb-0">Customer Due Report</h6>
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
                    <div class="card shadow-lg position-relative border-0 border-bottom border-3 border-primary custom-border">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">
                                    <span class="avatar bg-primary rounded-circle border border-primary text-white">
                                        <i class="isax isax-profile-2user fs-16"></i>
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-1 text-truncate">Total Customers</p>
                                    <h6 class="fs-16 fw-semibold mb-0">320</h6>
                                </div>
                            </div>
                            <p class="fs-13 mb-0">
                                <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month
                            </p>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->
                <div class="col-xl-3 col-lg-6 col-md-6">
                    <div class="card shadow-lg position-relative border-0 border-bottom border-3 border-success custom-border">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">
                                    <span class="avatar bg-success rounded-circle border border-success text-white">
                                        <i class="isax isax-profile-2user fs-16"></i>
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-1 text-truncate">Outstanding Amount</p>
                                    <h6 class="fs-16 fw-semibold mb-0">$3,500,000</h6>
                                </div>
                            </div>
                            <p class="fs-13 mb-0">
                                <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month
                            </p>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->
                <div class="col-xl-3 col-lg-6 col-md-6">
                    <div class="card shadow-lg position-relative border-0 border-bottom border-3 border-warning custom-border">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">
                                    <span class="avatar bg-warning rounded-circle border border-warning text-white">
                                        <i class="isax isax-dollar-circle fs-16"></i>
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-1 text-truncate">Overdue Payments</p>
                                    <h6 class="fs-16 fw-semibold mb-0">$1,200,000</h6>
                                </div>
                            </div>
                            <p class="fs-13 mb-0">
                                <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month
                            </p>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->
                <div class="col-xl-3 col-lg-6 col-md-6">
                    <div class="card shadow-lg position-relative border-0 border-bottom border-3 border-danger custom-border">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">
                                    <span class="avatar bg-danger rounded-circle border border-danger text-white">
                                        <i class="isax isax-dollar-circle fs-16"></i>
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-1 text-truncate">Margin</p>
                                    <h6 class="fs-16 fw-semibold mb-0">65%</h6>
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

        <!-- Start Table List -->
        <div class="table-responsive">
            <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                <thead class="thead-light">
                    <tr>
                        <th class="no-sort">
                            <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                            </div>
                        </th>
                        <th mat-sort-header="id">ID</th>
                        <th mat-sort-header="customer">Customer</th>
                        <th mat-sort-header="total">Total Amount</th>
                        <th mat-sort-header="paid">Paid</th>
                        <th mat-sort-header="status">Status</th>
                        <th mat-sort-header="due">Due</th>
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
                        <td><a href="javascript:void(0);">INV00025</a></td>
                        <td>
                            <div class="d-flex align-items-center">
                                <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                    <img src="assets/img/profiles/{{data.image}}" class="rounded-circle" alt="img">
                                </a>
                                <div>
                                    <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">{{data.customer}}</a></h6>
                                </div>
                            </div>
                        </td>
                        <td>{{data.totalAmount}}</td>
                        <td>{{data.paid}}</td>
                        <td>
                            <span class="badge d-inline-flex align-items-center"
                            [ngClass]="data.status==='Pending'?'badge-soft-warning':data.status==='Cancelled'?'badge-soft-danger':'badge-soft-success'">
                            {{data.status}} 
                            <i class="isax  ms-1"
                            [ngClass]="data.status==='Pending'?'isax-timer':data.status==='Cancelled'?'isax-close-circle':'isax-tick-circle'"></i>
                            </span>
                        </td>
                        <td>{{data.due}}</td>
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
                                        <span class="badge-dot bg-success me-1"></span>Paid
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <span class="badge-dot bg-warning me-1"></span>Pending
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <span class="badge-dot bg-danger me-1"></span>Cancelled
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerDueReportsComponent, { className: "CustomerDueReportsComponent", filePath: "src/app/features/reports/user-reports/customer-due-reports/customer-due-reports.component.ts", lineNumber: 22 });
})();
export {
  CustomerDueReportsComponent
};
//# sourceMappingURL=chunk-MYGDOJQQ.js.map
