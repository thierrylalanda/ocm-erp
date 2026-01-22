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
  Router
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/accounting-report/income-report/income-report.component.ts
var _c0 = () => ({ standalone: true });
function IncomeReportComponent_For_180_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 100)(3, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function IncomeReportComponent_For_180_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 102);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 103);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 103);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.ID);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.ReferenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.PaymentMode);
  }
}
function IncomeReportComponent_Conditional_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 104);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function IncomeReportComponent_app_custom_pagination_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var IncomeReportComponent = class _IncomeReportComponent {
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
    this.data.getIncomereport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.incomeReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getIncomereport().subscribe((apiRes) => {
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
  static \u0275fac = function IncomeReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncomeReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncomeReportComponent, selectors: [["app-income-report"]], decls: 262, vars: 7, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-1"], [1, "fs-16", "fw-semibold", "mb-0"], [1, "badge", "badge-soft-primary", "border", "border-primary", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, ""], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "start-0", "bottom-0"], ["src", "assets/img/bg/income-report-1.svg", "alt", "User Img"], [1, "badge", "badge-soft-success", "border", "border-success", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-bag-2", "fs-16"], ["src", "assets/img/bg/income-report-2.svg", "alt", "User Img"], [1, "badge", "badge-soft-warning", "border", "border-warning", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-wallet-3", "fs-16"], ["src", "assets/img/bg/income-report-3.svg", "alt", "User Img"], [1, "badge", "badge-soft-danger", "border", "border-danger", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-wallet-money", "fs-16"], ["src", "assets/img/bg/income-report-4.svg", "alt", "User Img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], ["for", "dateRangePicker", 1, "form-label"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function IncomeReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Income Report");
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
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div")(23, "p", 14);
      \u0275\u0275text(24, "Total Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 15);
      \u0275\u0275text(26, "$250,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "span", 16);
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 18)(31, "p", 19)(32, "span", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "5.62%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "span", 22);
      \u0275\u0275element(37, "img", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "div", 13)(42, "div")(43, "p", 14);
      \u0275\u0275text(44, "Product Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h6", 15);
      \u0275\u0275text(46, "$100,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div")(48, "span", 24);
      \u0275\u0275element(49, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 18)(51, "p", 19)(52, "span", 20);
      \u0275\u0275element(53, "i", 21);
      \u0275\u0275text(54, "11.4%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "span", 22);
      \u0275\u0275element(57, "img", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 10)(59, "div", 11)(60, "div", 12)(61, "div", 13)(62, "div")(63, "p", 14);
      \u0275\u0275text(64, "Service Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "h6", 15);
      \u0275\u0275text(66, "$400,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div")(68, "span", 27);
      \u0275\u0275element(69, "i", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 18)(71, "p", 19)(72, "span", 20);
      \u0275\u0275element(73, "i", 21);
      \u0275\u0275text(74, "8.12%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "span", 22);
      \u0275\u0275element(77, "img", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "div", 10)(79, "div", 11)(80, "div", 12)(81, "div", 13)(82, "div")(83, "p", 14);
      \u0275\u0275text(84, "Other Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "h6", 15);
      \u0275\u0275text(86, "$300,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div")(88, "span", 30);
      \u0275\u0275element(89, "i", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 18)(91, "p", 19)(92, "span", 20);
      \u0275\u0275element(93, "i", 21);
      \u0275\u0275text(94, "7.45%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "span", 22);
      \u0275\u0275element(97, "img", 32);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(98, "div", 33)(99, "div", 34)(100, "div", 35)(101, "div", 36)(102, "div", 37)(103, "a", 38);
      \u0275\u0275element(104, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 40)(106, "label")(107, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function IncomeReportComponent_Template_input_ngModelChange_107_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function IncomeReportComponent_Template_input_ngModelChange_107_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(108, "app-date-range-picker-2");
      \u0275\u0275elementStart(109, "a", 42);
      \u0275\u0275element(110, "i", 43);
      \u0275\u0275text(111, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 44)(113, "div", 45)(114, "a", 46);
      \u0275\u0275element(115, "i", 47);
      \u0275\u0275text(116, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "ul", 48)(118, "li")(119, "label", 49);
      \u0275\u0275element(120, "i", 50)(121, "input", 51);
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "li")(125, "label", 49);
      \u0275\u0275element(126, "i", 50)(127, "input", 51);
      \u0275\u0275elementStart(128, "span");
      \u0275\u0275text(129, "Reference Number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "li")(131, "label", 49);
      \u0275\u0275element(132, "i", 50)(133, "input", 52);
      \u0275\u0275elementStart(134, "span");
      \u0275\u0275text(135, "Description");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "li")(137, "label", 49);
      \u0275\u0275element(138, "i", 50)(139, "input", 51);
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "li")(143, "label", 49);
      \u0275\u0275element(144, "i", 50)(145, "input", 52);
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "Payment Mode");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(148, "div", 53)(149, "h6", 54);
      \u0275\u0275text(150, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "span", 55)(152, "span", 56);
      \u0275\u0275text(153, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(154, "Payment Mode Selected");
      \u0275\u0275elementStart(155, "span", 57);
      \u0275\u0275element(156, "i", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "a", 59);
      \u0275\u0275text(158, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(159, "div", 60)(160, "table", 61);
      \u0275\u0275listener("matSortChange", function IncomeReportComponent_Template_table_matSortChange_160_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(161, "thead", 62)(162, "tr")(163, "th", 63)(164, "div", 64);
      \u0275\u0275listener("click", function IncomeReportComponent_Template_div_click_164_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(165, "input", 65);
      \u0275\u0275twoWayListener("ngModelChange", function IncomeReportComponent_Template_input_ngModelChange_165_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "th", 63);
      \u0275\u0275text(167, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "th", 66);
      \u0275\u0275text(169, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "th", 63);
      \u0275\u0275text(171, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "th", 63);
      \u0275\u0275text(173, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "th", 67);
      \u0275\u0275text(175, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "th", 63);
      \u0275\u0275text(177, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "tbody");
      \u0275\u0275repeaterCreate(179, IncomeReportComponent_For_180_Template, 17, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(181, IncomeReportComponent_Conditional_181_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(182, IncomeReportComponent_app_custom_pagination_182_Template, 1, 0, "app-custom-pagination", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "div", 69)(184, "div", 70)(185, "div", 71)(186, "h6", 72);
      \u0275\u0275text(187, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "button", 73);
      \u0275\u0275element(189, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "div", 75)(191, "form", 76)(192, "div", 33)(193, "label", 77);
      \u0275\u0275text(194, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275element(195, "app-date-range-picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 33)(197, "label", 78);
      \u0275\u0275text(198, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 45)(200, "a", 79);
      \u0275\u0275text(201, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 80)(203, "div", 81)(204, "div", 82)(205, "span", 83);
      \u0275\u0275text(206, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "span", 83);
      \u0275\u0275text(208, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "mat-slider", 84);
      \u0275\u0275element(210, "input", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "p");
      \u0275\u0275text(212, "Range : ");
      \u0275\u0275elementStart(213, "span", 86);
      \u0275\u0275text(214, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(215, "div", 33)(216, "label", 78);
      \u0275\u0275text(217, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "div", 45)(219, "a", 79);
      \u0275\u0275text(220, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 80)(222, "div", 33)(223, "div", 87)(224, "span", 88);
      \u0275\u0275element(225, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275element(226, "input", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "ul", 33)(228, "li", 13)(229, "label", 91);
      \u0275\u0275element(230, "input", 92);
      \u0275\u0275text(231, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "a", 93);
      \u0275\u0275text(233, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "li")(235, "label", 94);
      \u0275\u0275element(236, "input", 52);
      \u0275\u0275text(237, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "li")(239, "label", 94);
      \u0275\u0275element(240, "input", 52);
      \u0275\u0275text(241, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li")(243, "label", 94);
      \u0275\u0275element(244, "input", 52);
      \u0275\u0275text(245, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "li")(247, "label", 94);
      \u0275\u0275element(248, "input", 52);
      \u0275\u0275text(249, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "li")(251, "label", 94);
      \u0275\u0275element(252, "input", 52);
      \u0275\u0275text(253, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(254, "div", 95)(255, "div", 96)(256, "div", 97)(257, "a", 98);
      \u0275\u0275text(258, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 97)(260, "button", 99);
      \u0275\u0275text(261, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(107);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(58);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 181 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(27);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, DateRangePicker2Component, DateRangePickerComponent, MatSliderModule, MatSlider, MatSliderThumb], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncomeReportComponent, [{
    type: Component,
    args: [{ selector: "app-income-report", imports: [
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component,
      DateRangePickerComponent,
      MatSliderModule
    ], template: '<!-- Start Content -->\n<div class="content-two">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6 class="mb-0">Income Report</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="dropdown me-1">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"  data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-xl-3 col-lg-4 col-md-6">\n            <div class="card position-relative">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Total Income</p>\n                            <h6 class="fs-16 fw-semibold mb-0">$250,000</h6>\n                        </div>\n                        <div>\n                            <span class="badge badge-soft-primary border border-primary rounded-circle p-2 d-inline-flex align-items-center justify-content-center">\n                                <i class="isax isax-dollar-circle fs-16"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class="">\n                        <p class="fs-13 mb-0">\n                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month\n                        </p>\n                    </div>\n                    <span class="position-absolute start-0 bottom-0">\n                        <img src="assets/img/bg/income-report-1.svg" alt="User Img">\n                    </span>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n        <div class="col-xl-3 col-lg-4 col-md-6">\n            <div class="card position-relative">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Product Sales</p>\n                            <h6 class="fs-16 fw-semibold mb-0">$100,000</h6>\n                        </div>\n                        <div>\n                            <span class="badge badge-soft-success border border-success rounded-circle p-2 d-inline-flex align-items-center justify-content-center">\n                                <i class="isax isax-bag-2 fs-16"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class="">\n                        <p class="fs-13 mb-0">\n                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month\n                        </p>\n                    </div>\n                    <span class="position-absolute start-0 bottom-0">\n                        <img src="assets/img/bg/income-report-2.svg" alt="User Img">\n                    </span>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n        <div class="col-xl-3 col-lg-4 col-md-6">\n            <div class="card position-relative">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Service Revenue</p>\n                            <h6 class="fs-16 fw-semibold mb-0">$400,000</h6>\n                        </div>\n                        <div>\n                            <span class="badge badge-soft-warning border border-warning rounded-circle p-2 d-inline-flex align-items-center justify-content-center">\n                                <i class="isax isax-wallet-3 fs-16"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class="">\n                        <p class="fs-13 mb-0">\n                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.12%</span> from last month\n                        </p>\n                    </div>\n                    <span class="position-absolute start-0 bottom-0">\n                        <img src="assets/img/bg/income-report-3.svg" alt="User Img">\n                    </span>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n        <div class="col-xl-3 col-lg-4 col-md-6">\n            <div class="card position-relative">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Other Income</p>\n                            <h6 class="fs-16 fw-semibold mb-0">$300,000</h6>\n                        </div>\n                        <div>\n                            <span class="badge badge-soft-danger border border-danger rounded-circle p-2 d-inline-flex align-items-center justify-content-center">\n                                <i class="isax isax-wallet-money fs-16"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class="">\n                        <p class="fs-13 mb-0">\n                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>7.45%</span> from last month\n                        </p>\n                    </div>\n                    <span class="position-absolute start-0 bottom-0">\n                        <img src="assets/img/bg/income-report-4.svg" alt="User Img">\n                    </span>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n    </div>\n    <!-- end row -->\n    \n    <!-- Start Table Search -->\n    <div class="mb-3">\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center gap-2 flex-wrap">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                      </div>\n                </div>\n                <app-date-range-picker-2/>\n                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                    <i class="isax isax-filter me-1"></i>Filter\n                </a>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                        <i class="isax isax-grid-3 me-1"></i>Column\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu">\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Date</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Reference Number</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox">\n                                <span>Description</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Amount</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox">\n                                <span>Payment Mode</span>\n                            </label>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>	\n\n        <!-- Filter Info -->\n        <div class="align-items-center gap-2 flex-wrap filter-info mt-3">\n            <h6 class="fs-13 fw-semibold">Filters</h6>\n            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Payment Mode Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>											\n            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>\n        </div>\n        <!-- /Filter Info -->			\n    </div>\n    <!-- End Table Search -->\n    \n    <!-- Table List Start -->\n    <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">\n            <thead class="thead-light">\n                <tr>\n                    <th class="no-sort">\n                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                            <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                        </div>\n                    </th>\n                    <th class="no-sort">ID</th>\n                    <th mat-sort-header="date">Date</th>\n                    <th class="no-sort">Reference Number</th>\n                    <th class="no-sort">Description</th>\n                    <th mat-sort-header="amount">Amount</th>\n                    <th class="no-sort">Payment Mode</th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td>\n                        <div class="form-check form-check-md">\n                            <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                        </div>\n                    </td>\n                    <td>\n                        <a href="javascript:void(0);" class="link-default">{{data.ID}}</a>\n                    </td>\n                    <td>{{data.Date}}</td>\n                    <td>{{data.ReferenceNumber}}</td>\n                    <td>{{data.Description}}</td>\n                    <td class="text-dark">{{data.Amount}}</td>\n                    <td class="text-dark">{{data.PaymentMode}}</td>						\n                </tr>\n            }\n            @if(tableData.length === 0){\n              <tr>\n                <td colspan="12" class="text-center text-dark">No matching records found</td>\n              </tr>\n              }\n            </tbody>\n        </table>\n    </div>\n    <!-- Table List End -->\n     <app-custom-pagination *ngIf="row"></app-custom-pagination>\n\n</div>\n<!-- End Content -->\n\n<!-- Start Filter -->\n<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">                                      \n    <div class="offcanvas-header d-block pb-0">\n        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n            <h6 class="offcanvas-title">Filter</h6>\n            <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n        </div>\n    </div>			\n    <div class="offcanvas-body pt-3">  \n        <form action="#">\n            <div class="mb-3">\n                <label for="dateRangePicker" class="form-label">Date Range</label>\n                <app-date-range-picker/>\n            </div>	\n            <div class="mb-3">\n                <label class="form-label">Amount</label>\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n                        Select\n                    </a>\n                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">							\n                        <div class="filter-range">\n                            <div class="d-flex justify-content-between align-items-center">\n                                <span class="irs" style="visibility: visible;">$0</span>\n                                <span class="irs" style="visibility: visible;">$1000</span>\n                            </div>\n                            <mat-slider\n                                min="0"\n                                max="1000"\n                                discrete\n                                [displayWith]="formatLabel"\n                            >\n                                <input value="350" matSliderThumb />\n                            </mat-slider>\n                            <p>Range : <span class="text-gray-9">$200 - $5695</span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="mb-3">\n                <label class="form-label">Payment Mode</label>\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n                        Select\n                    </a>\n                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">							\n                        <div class="mb-3">\n                            <div class="input-icon-start position-relative">\n                                <span class="input-icon-addon fs-12">\n                                    <i class="isax isax-search-normal"></i>\n                                </span>\n                                <input type="text" class="form-control form-control-sm" placeholder="Search">\n                            </div>\n                        </div>\n                        <ul class="mb-3">\n                            <li class="d-flex align-items-center justify-content-between mb-3">\n                                <label class="d-inline-flex align-items-center text-gray-9">\n                                    <input class="form-check-input select-all m-0 me-2" type="checkbox">\n                                    Select All\n                                </label>\n                                <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    Cash\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    Cheque\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    Bank Transfer\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    Paypal\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    Stripe\n                                </label>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n                        \n            <div class="offcanvas-footer">\n                <div class="row g-2">\n                    <div class="col-6">\n                        <a href="javascript:void(0);"  class="btn btn-outline-white w-100">Reset</a>\n                    </div>\n                    <div class="col-6">\n                        <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!-- End Filter -->\n\n' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncomeReportComponent, { className: "IncomeReportComponent", filePath: "src/app/features/reports/accounting-report/income-report/income-report.component.ts", lineNumber: 23 });
})();
export {
  IncomeReportComponent
};
//# sourceMappingURL=chunk-A7EFMXIU.js.map
