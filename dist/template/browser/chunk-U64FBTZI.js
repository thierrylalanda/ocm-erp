import {
  DateRangePicker2Component
} from "./chunk-U2UZGCVB.js";
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

// src/app/features/reports/user-reports/customers-report/customers-report.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function CustomersReportComponent_For_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 116)(2, "div", 117)(3, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersReportComponent_For_183_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 119)(6, "a", 120);
    \u0275\u0275element(7, "img", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 122)(10, "a", 123);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 119)(16, "a", 124);
    \u0275\u0275element(17, "img", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "h6", 122)(20, "a", 123);
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
    \u0275\u0275elementStart(28, "td")(29, "span", 126);
    \u0275\u0275text(30);
    \u0275\u0275element(31, "i", 127);
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.phone);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/flags/", data_r2.flag), \u0275\u0275sanitizeUrl);
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
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "isax-close-circle " : "isax-tick-circle ");
  }
}
function CustomersReportComponent_Conditional_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 128);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CustomersReportComponent_app_custom_pagination_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CustomersReportComponent = class _CustomersReportComponent {
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
    this.data.getCustomerReport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCustomerReport().subscribe((apiRes) => {
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
  static \u0275fac = function CustomersReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomersReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersReportComponent, selectors: [["app-customers-report"]], decls: 375, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-end", "border-bottom", "border-3", "border-primary"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "badge", "badge-soft-primary", "p-2", "rounded-circle", "border", "border-primary"], [1, "isax", "isax-profile-2user", "fs-16"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-end", "border-bottom", "border-3", "border-success"], [1, "badge", "badge-soft-success", "p-2", "rounded-circle", "border", "border-success"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-end", "border-bottom", "border-3", "border-warning"], [1, "badge", "badge-soft-warning", "p-2", "rounded-circle", "border", "border-warning"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "card", "shadow-lg", "position-relative", "border-0", "border-end", "border-bottom", "border-3", "border-info"], [1, "badge", "badge-soft-info", "p-2", "rounded-circle", "border", "border-info"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "cusotmer"], ["mat-sort-header", "phone"], ["mat-sort-header", "country"], ["mat-sort-header", "balance"], ["mat-sort-header", "total"], ["mat-sort-header", "date"], ["mat-sort-header", "status"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "avatar", "avatar-xs", "me-2"], ["src", "assets/img/flags/us.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/ca.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/de.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/gb.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/fr.png", "alt", "img", 1, "flex-shrink-0"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "badge-dot", "bg-success", "me-1"], [1, "badge-dot", "bg-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "avatar", "avatar-xs", "me-2", "flex-shrink-0"], ["alt", "img", 1, "", 3, "src"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CustomersReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Customers Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div")(24, "p", 15);
      \u0275\u0275text(25, "Total Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h6", 16);
      \u0275\u0275text(27, "1,200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div")(29, "span", 17);
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "p", 19)(32, "span", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 22)(38, "div", 13)(39, "div", 14)(40, "div")(41, "p", 15);
      \u0275\u0275text(42, "New Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h6", 16);
      \u0275\u0275text(44, "135");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div")(46, "span", 23);
      \u0275\u0275element(47, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "p", 19)(49, "span", 20);
      \u0275\u0275element(50, "i", 21);
      \u0275\u0275text(51, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 11)(54, "div", 24)(55, "div", 13)(56, "div", 14)(57, "div")(58, "p", 15);
      \u0275\u0275text(59, " Total Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h6", 16);
      \u0275\u0275text(61, "$250,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div")(63, "span", 25);
      \u0275\u0275element(64, "i", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "p", 19)(66, "span", 20);
      \u0275\u0275element(67, "i", 21);
      \u0275\u0275text(68, "8.52%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " from last month ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div", 11)(71, "div", 27)(72, "div", 13)(73, "div", 14)(74, "div")(75, "p", 15);
      \u0275\u0275text(76, "Average Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h6", 16);
      \u0275\u0275text(78, "$20,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div")(80, "span", 28);
      \u0275\u0275element(81, "i", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "p", 19)(83, "span", 20);
      \u0275\u0275element(84, "i", 21);
      \u0275\u0275text(85, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(86, " from last month ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(87, "div", 29)(88, "div", 30)(89, "div", 31)(90, "div", 32)(91, "div", 33)(92, "a", 34);
      \u0275\u0275element(93, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 36)(95, "label")(96, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function CustomersReportComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CustomersReportComponent_Template_input_ngModelChange_96_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(97, "app-date-range-picker-2");
      \u0275\u0275elementStart(98, "a", 38);
      \u0275\u0275element(99, "i", 39);
      \u0275\u0275text(100, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 40)(102, "div", 4)(103, "a", 41);
      \u0275\u0275element(104, "i", 42);
      \u0275\u0275text(105, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "ul", 43)(107, "li")(108, "label", 44);
      \u0275\u0275element(109, "i", 45)(110, "input", 46);
      \u0275\u0275elementStart(111, "span");
      \u0275\u0275text(112, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "li")(114, "label", 44);
      \u0275\u0275element(115, "i", 45)(116, "input", 46);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "li")(120, "label", 44);
      \u0275\u0275element(121, "i", 45)(122, "input", 46);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "li")(126, "label", 44);
      \u0275\u0275element(127, "i", 45)(128, "input", 46);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "li")(132, "label", 44);
      \u0275\u0275element(133, "i", 45)(134, "input", 47);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "li")(138, "label", 44);
      \u0275\u0275element(139, "i", 45)(140, "input", 47);
      \u0275\u0275elementStart(141, "span");
      \u0275\u0275text(142, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(143, "div", 48)(144, "h6", 49);
      \u0275\u0275text(145, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "span", 50)(147, "span", 51);
      \u0275\u0275text(148, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, "Vendors Selected");
      \u0275\u0275elementStart(150, "span", 52);
      \u0275\u0275listener("click", function CustomersReportComponent_Template_span_click_150_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(151, "i", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "span", 50)(153, "span", 51);
      \u0275\u0275text(154, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(155, "Status Selected");
      \u0275\u0275elementStart(156, "span", 52);
      \u0275\u0275listener("click", function CustomersReportComponent_Template_span_click_156_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(157, "i", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "a", 54);
      \u0275\u0275listener("click", function CustomersReportComponent_Template_a_click_158_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(159, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "div", 55)(161, "table", 56);
      \u0275\u0275listener("matSortChange", function CustomersReportComponent_Template_table_matSortChange_161_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(162, "thead", 57)(163, "tr")(164, "th", 58)(165, "div", 59);
      \u0275\u0275listener("click", function CustomersReportComponent_Template_div_click_165_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(166, "input", 60);
      \u0275\u0275twoWayListener("ngModelChange", function CustomersReportComponent_Template_input_ngModelChange_166_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "th", 61);
      \u0275\u0275text(168, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "th", 62);
      \u0275\u0275text(170, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "th", 63);
      \u0275\u0275text(172, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "th", 64);
      \u0275\u0275text(174, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "th", 65);
      \u0275\u0275text(176, "Total Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th", 66);
      \u0275\u0275text(178, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "th", 67);
      \u0275\u0275text(180, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "tbody");
      \u0275\u0275repeaterCreate(182, CustomersReportComponent_For_183_Template, 32, 15, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(184, CustomersReportComponent_Conditional_184_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(185, CustomersReportComponent_app_custom_pagination_185_Template, 1, 0, "app-custom-pagination", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 69)(187, "div", 70)(188, "div", 71)(189, "h6", 72);
      \u0275\u0275text(190, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "button", 73);
      \u0275\u0275element(192, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "div", 75)(194, "form")(195, "div", 29)(196, "label", 76);
      \u0275\u0275text(197, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 4)(199, "a", 77);
      \u0275\u0275text(200, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 78)(202, "div", 29)(203, "div", 79)(204, "span", 80);
      \u0275\u0275element(205, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275element(206, "input", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "ul", 29)(208, "li", 83)(209, "label", 84);
      \u0275\u0275element(210, "input", 85);
      \u0275\u0275text(211, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "a", 86);
      \u0275\u0275text(213, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "li")(215, "label", 87);
      \u0275\u0275element(216, "input", 47);
      \u0275\u0275elementStart(217, "span", 88);
      \u0275\u0275element(218, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(219, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "li")(221, "label", 87);
      \u0275\u0275element(222, "input", 47);
      \u0275\u0275elementStart(223, "span", 88);
      \u0275\u0275element(224, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(225, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "li")(227, "label", 87);
      \u0275\u0275element(228, "input", 47);
      \u0275\u0275elementStart(229, "span", 88);
      \u0275\u0275element(230, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(231, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "li")(233, "label", 87);
      \u0275\u0275element(234, "input", 47);
      \u0275\u0275elementStart(235, "span", 88);
      \u0275\u0275element(236, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(237, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "li")(239, "label", 87);
      \u0275\u0275element(240, "input", 47);
      \u0275\u0275elementStart(241, "span", 88);
      \u0275\u0275element(242, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275text(243, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(244, "div", 94)(245, "div", 95)(246, "a", 96);
      \u0275\u0275text(247, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 95)(249, "a", 97);
      \u0275\u0275text(250, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(251, "div", 29)(252, "label", 76);
      \u0275\u0275text(253, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "div", 4)(255, "a", 77);
      \u0275\u0275text(256, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div", 78)(258, "div", 29)(259, "div", 79)(260, "span", 80);
      \u0275\u0275element(261, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275element(262, "input", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "ul", 29)(264, "li", 83)(265, "label", 84);
      \u0275\u0275element(266, "input", 85);
      \u0275\u0275text(267, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "a", 86);
      \u0275\u0275text(269, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "li")(271, "label", 87);
      \u0275\u0275element(272, "input", 47);
      \u0275\u0275elementStart(273, "span", 98);
      \u0275\u0275element(274, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275text(275, "United States ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li")(277, "label", 87);
      \u0275\u0275element(278, "input", 47);
      \u0275\u0275elementStart(279, "span", 98);
      \u0275\u0275element(280, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275text(281, "Canada ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "li")(283, "label", 87);
      \u0275\u0275element(284, "input", 47);
      \u0275\u0275elementStart(285, "span", 98);
      \u0275\u0275element(286, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275text(287, "Germany ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "label", 87);
      \u0275\u0275element(290, "input", 47);
      \u0275\u0275elementStart(291, "span", 98);
      \u0275\u0275element(292, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275text(293, "United Kingdom ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "li")(295, "label", 87);
      \u0275\u0275element(296, "input", 47);
      \u0275\u0275elementStart(297, "span", 98);
      \u0275\u0275element(298, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275text(299, "France ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(300, "div", 94)(301, "div", 95)(302, "a", 96);
      \u0275\u0275text(303, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 95)(305, "a", 97);
      \u0275\u0275text(306, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(307, "div", 29)(308, "label", 76);
      \u0275\u0275text(309, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "div", 104);
      \u0275\u0275element(311, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "div", 29)(313, "label", 76);
      \u0275\u0275text(314, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "div", 4)(316, "a", 77);
      \u0275\u0275text(317, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "div", 78)(319, "div", 105)(320, "div", 106)(321, "span", 107);
      \u0275\u0275text(322, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "span", 107);
      \u0275\u0275text(324, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "mat-slider", 108);
      \u0275\u0275element(326, "input", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "p");
      \u0275\u0275text(328, "Range : ");
      \u0275\u0275elementStart(329, "span", 110);
      \u0275\u0275text(330, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(331, "div", 29)(332, "label", 76);
      \u0275\u0275text(333, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "div", 4)(335, "a", 77);
      \u0275\u0275text(336, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "div", 78)(338, "div", 29)(339, "div", 79)(340, "span", 80);
      \u0275\u0275element(341, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275element(342, "input", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "ul", 29)(344, "li", 83)(345, "label", 84);
      \u0275\u0275element(346, "input", 85);
      \u0275\u0275text(347, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "a", 86);
      \u0275\u0275text(349, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "li")(351, "label", 87);
      \u0275\u0275element(352, "input", 47)(353, "span", 111);
      \u0275\u0275text(354, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "li")(356, "label", 87);
      \u0275\u0275element(357, "input", 47)(358, "span", 112);
      \u0275\u0275text(359, "Inactive ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(360, "div", 94)(361, "div", 95)(362, "a", 96);
      \u0275\u0275text(363, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(364, "div", 95)(365, "a", 97);
      \u0275\u0275text(366, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(367, "div", 113)(368, "div", 94)(369, "div", 95)(370, "a", 114);
      \u0275\u0275text(371, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(372, "div", 95)(373, "button", 115);
      \u0275\u0275listener("click", function CustomersReportComponent_Template_button_click_373_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(374, "Submit");
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
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 184 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(140);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSliderModule, MatSlider, MatSliderThumb, DateRangePickerComponent, RouterLink, DateRangePicker2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomersReportComponent, [{
    type: Component,
    args: [{ selector: "app-customers-report", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSliderModule,
      DateRangePickerComponent,
      RouterLink,
      DateRangePicker2Component
    ], template: `<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Customers Report</h6>
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
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card shadow-lg position-relative border-0 border-end border-bottom border-3 border-primary">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <div>
                                <p class="mb-1">Total Customers</p>
                                <h6 class="fs-16 fw-semibold mb-0">1,200</h6>
                            </div>
                            <div>
                                <span class="badge badge-soft-primary p-2 rounded-circle border border-primary">
                                <i class="isax isax-profile-2user fs-16"></i>
                            </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div> <!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card shadow-lg position-relative border-0 border-end border-bottom border-3 border-success">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <div>
                                <p class="mb-1">New Customers</p>
                                <h6 class="fs-16 fw-semibold mb-0">135</h6>
                            </div>
                            <div>
                                <span class="badge badge-soft-success p-2 rounded-circle border border-success">
                                <i class="isax isax-profile-2user fs-16"></i>
                            </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div> <!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card shadow-lg position-relative border-0 border-end border-bottom border-3 border-warning">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <div>
                                <p class="mb-1"> Total Revenue</p>
                                <h6 class="fs-16 fw-semibold mb-0">$250,000</h6>
                            </div>
                            <div>
                                <span class="badge badge-soft-warning p-2 rounded-circle border border-warning">
                                <i class="isax isax-dollar-circle fs-16"></i>
                            </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div> <!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card shadow-lg position-relative border-0 border-end border-bottom border-3 border-info">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <div>
                                <p class="mb-1">Average Revenue</p>
                                <h6 class="fs-16 fw-semibold mb-0">$20,000</h6>
                            </div>
                            <div>
                                <span class="badge badge-soft-info p-2 rounded-circle border border-info">
                                <i class="isax isax-dollar-circle fs-16"></i>
                            </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>7.45%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

    </div>

    <!-- Table Search Start-->
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
    <!-- /Table Search End-->

    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th mat-sort-header="cusotmer">Customer</th>
                    <th mat-sort-header="phone">Phone</th>
                    <th mat-sort-header="country">Country</th>
                    <th mat-sort-header="balance">Balance</th>
                    <th mat-sort-header="total">Total Invoice</th>
                    <th mat-sort-header="date">Created On</th>
                    <th mat-sort-header="status">Status</th>
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
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.customer}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.phone}}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-xs me-2 flex-shrink-0">
                                <img src="assets/img/flags/{{data.flag}}" class="" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.country}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.balance}}</td>
                    <td>{{data.totalInvoice}}</td>
                    <td>{{data.createdOn}}</td>
                    <td><span class="badge d-inline-flex align-items-center"
                        [ngClass]="data.status==='Inactive'?'badge-soft-danger':'badge-soft-success'">{{data.status}}
                        <i class="isax ms-1"
                        [ngClass]="data.status==='Inactive'?'isax-close-circle ':'isax-tick-circle '"></i></span></td>
                </tr>
            } @if(tableData.length === 0){
                <tr>
                  <td colspan="12" class="text-center text-dark">No matching records found</td>
                </tr>
              }
            </tbody>
        </table>
    </div>
    <!-- Table List End-->
    <app-custom-pagination *ngIf="row"/>
</div>


        <!-- Start Filter-->
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
                                            <span class="avatar avatar-xs me-2">
                                                <img src="assets/img/flags/us.png" class="flex-shrink-0" alt="img">
                                            </span>United States
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="assets/img/flags/ca.png" class="flex-shrink-0" alt="img">
                                            </span>Canada
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="assets/img/flags/de.png" class="flex-shrink-0" alt="img">
                                            </span>Germany
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="assets/img/flags/gb.png" class="flex-shrink-0 " alt="img">
                                            </span>United Kingdom
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="assets/img/flags/fr.png" class="flex-shrink-0" alt="img">
                                            </span>France
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
                                            <span class="badge-dot bg-success me-1"></span>Active
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="badge-dot bg-danger me-1"></span>Inactive
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
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas" >Reset</a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersReportComponent, { className: "CustomersReportComponent", filePath: "src/app/features/reports/user-reports/customers-report/customers-report.component.ts", lineNumber: 23 });
})();
export {
  CustomersReportComponent
};
//# sourceMappingURL=chunk-U64FBTZI.js.map
