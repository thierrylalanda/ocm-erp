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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/customers/invoice-report/invoice-report.component.ts
var _c0 = () => ({ standalone: true });
function InvoiceReportComponent_For_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 91);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 92);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 93);
    \u0275\u0275text(12);
    \u0275\u0275element(13, "i", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 92);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.ID);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.CreatedOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Paid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.Status === "Cancelled" || data_r1.Status === "Overdue" ? "badge-soft-danger" : data_r1.Status === "Partially Paid" || data_r1.Status === "Draft" ? "badge-soft-info" : data_r1.Status === "Unpaid" ? "badge-soft-warning" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r1.Status === "Refunded" ? "isax-money-3" : data_r1.Status === "Cancelled" ? "isax-close-circle" : data_r1.Status === "Partially Paid" ? "isax-timer" : data_r1.Status === "Overdue" ? "isax-danger" : data_r1.Status === "Unpaid" ? "isax-slash" : data_r1.Status === "Draft" ? "isax-note" : " isax-tick-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.PaymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.DueDate);
  }
}
function InvoiceReportComponent_Conditional_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 95);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceReportComponent_app_custom_pagination_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var InvoiceReportComponent = class _InvoiceReportComponent {
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
    this.data.getCustomerInvoicereport().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerInvoicereport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCustomerInvoicereport().subscribe((apiRes) => {
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
  static \u0275fac = function InvoiceReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceReportComponent, selectors: [["app-invoice-report"]], decls: 278, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-2", "border-bottom"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "bg-primary", "rounded-circle"], [1, "isax", "isax-receipt-item"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "end-0", "bottom-0"], ["src", "assets/img/bg/card-overlay-01.svg", "alt", "User Img"], [1, "avatar", "bg-success", "rounded-circle"], [1, "isax", "isax-tick-circle"], ["src", "assets/img/bg/card-overlay-02.svg", "alt", "User Img"], [1, "avatar", "bg-warning", "rounded-circle"], [1, "isax", "isax-timer"], ["src", "assets/img/bg/card-overlay-03.svg", "alt", "User Img"], [1, "avatar", "bg-danger", "rounded-circle"], [1, "isax", "isax-information"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], ["src", "assets/img/bg/card-overlay-04.svg", "alt", "User Img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], ["mat-sort-header", "created"], ["mat-sort-header", "amount"], ["mat-sort-header", "paid"], ["mat-sort-header", "duedate"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0)", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["href", "javascript:void(0);", 1, "link-default"], [1, "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function InvoiceReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Invoice Report");
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
      \u0275\u0275elementStart(94, "div", 33)(95, "div", 34)(96, "div", 35)(97, "div", 36)(98, "div", 37)(99, "a", 38);
      \u0275\u0275element(100, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 40)(102, "label")(103, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function InvoiceReportComponent_Template_input_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InvoiceReportComponent_Template_input_ngModelChange_103_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(104, "app-date-range-picker");
      \u0275\u0275elementStart(105, "a", 42);
      \u0275\u0275element(106, "i", 43);
      \u0275\u0275text(107, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 44)(109, "div", 3)(110, "a", 45);
      \u0275\u0275element(111, "i", 46);
      \u0275\u0275text(112, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "ul", 47)(114, "li")(115, "label", 48);
      \u0275\u0275element(116, "i", 49)(117, "input", 50);
      \u0275\u0275elementStart(118, "span");
      \u0275\u0275text(119, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "li")(121, "label", 48);
      \u0275\u0275element(122, "i", 49)(123, "input", 50);
      \u0275\u0275elementStart(124, "span");
      \u0275\u0275text(125, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "li")(127, "label", 48);
      \u0275\u0275element(128, "i", 49)(129, "input", 50);
      \u0275\u0275elementStart(130, "span");
      \u0275\u0275text(131, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "li")(133, "label", 48);
      \u0275\u0275element(134, "i", 49)(135, "input", 50);
      \u0275\u0275elementStart(136, "span");
      \u0275\u0275text(137, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "li")(139, "label", 48);
      \u0275\u0275element(140, "i", 49)(141, "input", 50);
      \u0275\u0275elementStart(142, "span");
      \u0275\u0275text(143, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "li")(145, "label", 48);
      \u0275\u0275element(146, "i", 49)(147, "input", 51);
      \u0275\u0275elementStart(148, "span");
      \u0275\u0275text(149, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "li")(151, "label", 48);
      \u0275\u0275element(152, "i", 49)(153, "input", 51);
      \u0275\u0275elementStart(154, "span");
      \u0275\u0275text(155, "Due Date");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(156, "div", 52)(157, "h6", 53);
      \u0275\u0275text(158, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "span", 54)(160, "span", 55);
      \u0275\u0275text(161, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(162, "Payment Mode Selected");
      \u0275\u0275elementStart(163, "span", 56);
      \u0275\u0275element(164, "i", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "a", 58);
      \u0275\u0275text(166, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "div", 59)(168, "table", 60);
      \u0275\u0275listener("matSortChange", function InvoiceReportComponent_Template_table_matSortChange_168_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(169, "thead", 61)(170, "tr")(171, "th", 62);
      \u0275\u0275text(172, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "th", 63);
      \u0275\u0275text(174, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "th", 64);
      \u0275\u0275text(176, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th", 65);
      \u0275\u0275text(178, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "th", 62);
      \u0275\u0275text(180, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "th", 62);
      \u0275\u0275text(182, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "th", 66);
      \u0275\u0275text(184, "Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "tbody");
      \u0275\u0275repeaterCreate(186, InvoiceReportComponent_For_187_Template, 18, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(188, InvoiceReportComponent_Conditional_188_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(189, InvoiceReportComponent_app_custom_pagination_189_Template, 1, 0, "app-custom-pagination", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "div", 68)(191, "div", 69)(192, "div", 70)(193, "h6", 71);
      \u0275\u0275text(194, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "button", 72);
      \u0275\u0275element(196, "i", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div", 74)(198, "form", 75)(199, "div", 33)(200, "label", 76);
      \u0275\u0275text(201, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 3)(203, "a", 77);
      \u0275\u0275text(204, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 78)(206, "div", 79)(207, "div", 80)(208, "span", 81);
      \u0275\u0275text(209, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "span", 81);
      \u0275\u0275text(211, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "mat-slider", 82);
      \u0275\u0275element(213, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "p");
      \u0275\u0275text(215, "Range : ");
      \u0275\u0275elementStart(216, "span", 84);
      \u0275\u0275text(217, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(218, "div", 33)(219, "label", 76);
      \u0275\u0275text(220, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 3)(222, "a", 77);
      \u0275\u0275text(223, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "div", 78)(225, "ul", 33)(226, "li")(227, "label", 85);
      \u0275\u0275element(228, "input", 51);
      \u0275\u0275text(229, " Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li")(231, "label", 85);
      \u0275\u0275element(232, "input", 51);
      \u0275\u0275text(233, " Unpaid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "li")(235, "label", 85);
      \u0275\u0275element(236, "input", 51);
      \u0275\u0275text(237, " Cancelled ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "li")(239, "label", 85);
      \u0275\u0275element(240, "input", 51);
      \u0275\u0275text(241, " Partially Paid ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(242, "div")(243, "label", 76);
      \u0275\u0275text(244, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div", 3)(246, "a", 77);
      \u0275\u0275text(247, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 78)(249, "ul", 33)(250, "li")(251, "label", 85);
      \u0275\u0275element(252, "input", 51);
      \u0275\u0275text(253, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "li")(255, "label", 85);
      \u0275\u0275element(256, "input", 51);
      \u0275\u0275text(257, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "li")(259, "label", 85);
      \u0275\u0275element(260, "input", 51);
      \u0275\u0275text(261, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "li")(263, "label", 85);
      \u0275\u0275element(264, "input", 51);
      \u0275\u0275text(265, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "li")(267, "label", 85);
      \u0275\u0275element(268, "input", 51);
      \u0275\u0275text(269, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(270, "div", 86)(271, "div", 87)(272, "div", 88)(273, "a", 89);
      \u0275\u0275text(274, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "div", 88)(276, "button", 90);
      \u0275\u0275text(277, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(103);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(83);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 188 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(23);
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
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceReportComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-report", imports: [
      CommonModule,
      MatSliderModule,
      DateRangePickerComponent,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Invoice Report</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
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
                <!-- end card body -->
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
                <!-- end card body -->
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
                <!-- end card body -->
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

    <!-- Table Search Start-->
    <div class="mb-3">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div class="d-flex align-items-center gap-2">
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
                <app-date-range-picker></app-date-range-picker>
                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
                    <i class="isax isax-filter me-1"></i>Filter
                </a>
            </div>
            <div class="d-flex align-items-center flex-wrap gap-2">
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

        <!-- Filter Info Start -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Payment Mode Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
        </div>
        <!-- Filter Info End -->

    </div>
    <!-- Table Search End-->

    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">ID</th>
                    <th  mat-sort-header="created">Created On</th>
                    <th  mat-sort-header="amount">Amount</th>
                    <th  mat-sort-header="paid">Paid</th>
                    <th class="no-sort">Status</th>
                    <th class="no-sort">Payment Mode</th>
                    <th  mat-sort-header="duedate">Due Date</th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){
                <tr>
                    <td>
                        <a href="javascript:void(0);" class="link-default">{{data.ID}}</a>
                    </td>
                    <td>{{data.CreatedOn}}</td>
                    <td class="text-dark">{{data.Amount}}</td>
                    <td>{{data.Paid}}</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center" 
                        [ngClass]="data.Status==='Cancelled' || data.Status==='Overdue'?'badge-soft-danger':data.Status==='Partially Paid'||data.Status==='Draft'?'badge-soft-info':data.Status==='Unpaid'?'badge-soft-warning':'badge-soft-success'">
                            {{data.Status}} 
                            <i class="isax ms-1" 
                            [ngClass]="data.Status==='Refunded'?'isax-money-3':data.Status==='Cancelled'?'isax-close-circle':data.Status==='Partially Paid'?'isax-timer':data.Status==='Overdue'?'isax-danger':data.Status==='Unpaid'?'isax-slash':data.Status==='Draft'?'isax-note':' isax-tick-circle'"></i>
                        </span>
                    </td>
                    <td class="text-dark">{{data.PaymentMode}}</td>
                    <td>{{data.DueDate}}</td>
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
    <!-- Table List End -->
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
                                <ul class="mb-3">
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Paid
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Unpaid
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cancelled
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Partially Paid
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
                                <a href="javascript:void(0)" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
                            </div>
                            <div class="col-6">
                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceReportComponent, { className: "InvoiceReportComponent", filePath: "src/app/features/customers/invoice-report/invoice-report.component.ts", lineNumber: 22 });
})();
export {
  InvoiceReportComponent
};
//# sourceMappingURL=chunk-FRDOQGJJ.js.map
