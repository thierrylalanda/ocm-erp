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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/customers/payment-summary/payment-summary.component.ts
var _c0 = () => ({ standalone: true });
function PaymentSummaryComponent_For_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 110)(2, "div", 111)(3, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentSummaryComponent_For_166_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 113);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 114);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 114);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.date, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.totalPrice, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.mode);
  }
}
function PaymentSummaryComponent_Conditional_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 115);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PaymentSummaryComponent_app_custom_pagination_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PaymentSummaryComponent = class _PaymentSummaryComponent {
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
    this.data.getPaymentSummary().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customerPaymentSummary) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPaymentSummary().subscribe((apiRes) => {
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
  static \u0275fac = function PaymentSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentSummaryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentSummaryComponent, selectors: [["app-payment-summary"]], decls: 318, vars: 7, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "pb-2", "border-bottom"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "bg-primary", "rounded-circle"], [1, "isax", "isax-receipt-item"], [1, "fs-13", "mb-0"], [1, "text-success"], [1, "isax", "isax-send", "text-success", "me-1"], [1, "position-absolute", "end-0", "bottom-0"], ["src", "assets/img/bg/card-overlay-01.svg", "alt", "User Img"], [1, "avatar", "bg-success", "rounded-circle"], [1, "isax", "isax-tick-circle"], ["src", "assets/img/bg/card-overlay-02.svg", "alt", "User Img"], [1, "avatar", "bg-warning", "rounded-circle"], [1, "isax", "isax-timer"], ["src", "assets/img/bg/card-overlay-03.svg", "alt", "User Img"], [1, "avatar", "bg-danger", "rounded-circle"], [1, "isax", "isax-information"], [1, "text-danger"], [1, "isax", "isax-received", "text-danger", "me-1"], ["src", "assets/img/bg/card-overlay-04.svg", "alt", "User Img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "payment"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "w-100"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PaymentSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Payment Summary Report");
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
      \u0275\u0275text(24, "Total Payments Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h6", 14);
      \u0275\u0275text(26, "\u20B92,000,000");
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
      \u0275\u0275text(43, "Bank Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h6", 14);
      \u0275\u0275text(45, "\u20B91,200,000");
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
      \u0275\u0275text(62, "UPI & Digital Wallets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h6", 14);
      \u0275\u0275text(64, "\u20B9500,000");
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
      \u0275\u0275text(81, "Cash & Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h6", 14);
      \u0275\u0275text(83, "\u20B9300,000");
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
      \u0275\u0275twoWayListener("ngModelChange", function PaymentSummaryComponent_Template_input_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PaymentSummaryComponent_Template_input_ngModelChange_103_listener() {
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
      \u0275\u0275text(119, "Payment ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "li")(121, "label", 48);
      \u0275\u0275element(122, "i", 49)(123, "input", 50);
      \u0275\u0275elementStart(124, "span");
      \u0275\u0275text(125, "Paid Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "li")(127, "label", 48);
      \u0275\u0275element(128, "i", 49)(129, "input", 50);
      \u0275\u0275elementStart(130, "span");
      \u0275\u0275text(131, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "li")(133, "label", 48);
      \u0275\u0275element(134, "i", 49)(135, "input", 51);
      \u0275\u0275elementStart(136, "span");
      \u0275\u0275text(137, "Payment Mode");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(138, "div", 52)(139, "h6", 53);
      \u0275\u0275text(140, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "span", 54)(142, "span", 55);
      \u0275\u0275text(143, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(144, "Payment Mode Selected");
      \u0275\u0275elementStart(145, "span", 56);
      \u0275\u0275element(146, "i", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "a", 58);
      \u0275\u0275text(148, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(149, "div", 59)(150, "table", 60);
      \u0275\u0275listener("matSortChange", function PaymentSummaryComponent_Template_table_matSortChange_150_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(151, "thead")(152, "tr")(153, "th", 61)(154, "div", 62);
      \u0275\u0275listener("click", function PaymentSummaryComponent_Template_div_click_154_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(155, "input", 63);
      \u0275\u0275twoWayListener("ngModelChange", function PaymentSummaryComponent_Template_input_ngModelChange_155_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(156, "th", 64);
      \u0275\u0275text(157, "Payment ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "th", 65);
      \u0275\u0275text(159, "Paid Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "th", 66);
      \u0275\u0275text(161, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "th", 61);
      \u0275\u0275text(163, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(164, "tbody");
      \u0275\u0275repeaterCreate(165, PaymentSummaryComponent_For_166_Template, 13, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(167, PaymentSummaryComponent_Conditional_167_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(168, PaymentSummaryComponent_app_custom_pagination_168_Template, 1, 0, "app-custom-pagination", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "div", 68)(170, "div", 69)(171, "div", 70)(172, "h6", 71);
      \u0275\u0275text(173, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "button", 72);
      \u0275\u0275element(175, "i", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(176, "div", 74)(177, "form", 75)(178, "div", 33)(179, "label", 76);
      \u0275\u0275text(180, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "div", 3)(182, "a", 77);
      \u0275\u0275text(183, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 78)(185, "div", 33)(186, "div", 79)(187, "span", 80);
      \u0275\u0275element(188, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275element(189, "input", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "ul", 33)(191, "li", 83)(192, "label", 84);
      \u0275\u0275element(193, "input", 85);
      \u0275\u0275text(194, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "a", 86);
      \u0275\u0275text(196, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "li")(198, "label", 87);
      \u0275\u0275element(199, "input", 51);
      \u0275\u0275elementStart(200, "span", 88);
      \u0275\u0275element(201, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(202, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "li")(204, "label", 87);
      \u0275\u0275element(205, "input", 51);
      \u0275\u0275elementStart(206, "span", 88);
      \u0275\u0275element(207, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(208, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "li")(210, "label", 87);
      \u0275\u0275element(211, "input", 51);
      \u0275\u0275elementStart(212, "span", 88);
      \u0275\u0275element(213, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(214, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "li")(216, "label", 87);
      \u0275\u0275element(217, "input", 51);
      \u0275\u0275elementStart(218, "span", 88);
      \u0275\u0275element(219, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(220, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "li")(222, "label", 87);
      \u0275\u0275element(223, "input", 51);
      \u0275\u0275elementStart(224, "span", 88);
      \u0275\u0275element(225, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275text(226, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "li")(228, "label", 87);
      \u0275\u0275element(229, "input", 51);
      \u0275\u0275elementStart(230, "span", 88);
      \u0275\u0275element(231, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275text(232, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(233, "div", 95)(234, "div", 96)(235, "a", 97);
      \u0275\u0275text(236, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 96)(238, "a", 98);
      \u0275\u0275text(239, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(240, "div", 33)(241, "label", 99);
      \u0275\u0275text(242, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 100);
      \u0275\u0275element(244, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 33)(246, "label", 76);
      \u0275\u0275text(247, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 3)(249, "a", 77);
      \u0275\u0275text(250, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 78)(252, "div", 101)(253, "div", 102)(254, "span", 103);
      \u0275\u0275text(255, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "span", 103);
      \u0275\u0275text(257, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "mat-slider", 104);
      \u0275\u0275element(259, "input", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "p");
      \u0275\u0275text(261, "Range : ");
      \u0275\u0275elementStart(262, "span", 106);
      \u0275\u0275text(263, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(264, "div", 33)(265, "label", 76);
      \u0275\u0275text(266, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "div", 3)(268, "a", 77);
      \u0275\u0275text(269, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div", 78)(271, "div", 33)(272, "div", 79)(273, "span", 80);
      \u0275\u0275element(274, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275element(275, "input", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "ul", 33)(277, "li", 83)(278, "label", 84);
      \u0275\u0275element(279, "input", 85);
      \u0275\u0275text(280, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "a", 86);
      \u0275\u0275text(282, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "li")(284, "label", 87);
      \u0275\u0275element(285, "input", 51);
      \u0275\u0275text(286, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "li")(288, "label", 87);
      \u0275\u0275element(289, "input", 51);
      \u0275\u0275text(290, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "li")(292, "label", 87);
      \u0275\u0275element(293, "input", 51);
      \u0275\u0275text(294, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "li")(296, "label", 87);
      \u0275\u0275element(297, "input", 51);
      \u0275\u0275text(298, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "li")(300, "label", 87);
      \u0275\u0275element(301, "input", 51);
      \u0275\u0275text(302, " Stripe ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(303, "div", 95)(304, "div", 96)(305, "a", 97);
      \u0275\u0275text(306, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "div", 96)(308, "a", 98);
      \u0275\u0275text(309, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(310, "div", 107)(311, "div", 95)(312, "div", 96)(313, "a", 108);
      \u0275\u0275text(314, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(315, "div", 96)(316, "button", 109);
      \u0275\u0275text(317, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(103);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(52);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 167 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(90);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [
    CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentSummaryComponent, [{
    type: Component,
    args: [{ selector: "app-payment-summary", imports: [
      CommonModule,
      MatSliderModule,
      DateRangePickerComponent,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule
    ], template: '<!-- Start Content -->\n<div class="content-two">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Payment Summary Report</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-xl-3 col-lg-4 col-md-6">\n            <div class="card position-relative">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">\n                        <div>\n                            <p class="mb-1">Total Payments Received</p>\n                            <h6 class="fs-16 fw-semibold">\u20B92,000,000</h6>\n                        </div>\n                        <div>\n                            <span class="avatar bg-primary rounded-circle">\n                                <i class="isax isax-receipt-item"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month</p>\n                    <span class="position-absolute end-0 bottom-0">\n                        <img src="assets/img/bg/card-overlay-01.svg" alt="User Img">\n                    </span>\n                </div>\n                <!-- end card body -->\n            </div>\n            <!-- end card -->\n        </div> <!-- end col -->\n        <div class="col-xl-3 col-lg-4 col-md-6">\n            <div class="card position-relative">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">\n                        <div>\n                            <p class="mb-1">Bank Transfer</p>\n                            <h6 class="fs-16 fw-semibold">\u20B91,200,000</h6>\n                        </div>\n                        <div>\n                            <span class="avatar bg-success rounded-circle">\n                                <i class="isax isax-tick-circle"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month</p>\n                    <span class="position-absolute end-0 bottom-0">\n                        <img src="assets/img/bg/card-overlay-02.svg" alt="User Img">\n                    </span>\n                </div>\n                <!-- end card body -->\n            </div>\n            <!-- end card -->\n        </div> <!-- end col -->\n        <div class="col-xl-3 col-lg-4 col-md-6">\n            <div class="card position-relative">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">\n                        <div>\n                            <p class="mb-1">UPI & Digital Wallets</p>\n                            <h6 class="fs-16 fw-semibold">\u20B9500,000</h6>\n                        </div>\n                        <div>\n                            <span class="avatar bg-warning rounded-circle">\n                                <i class="isax isax-timer"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <p class="fs-13 mb-0"><span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month</p>\n                    <span class="position-absolute end-0 bottom-0">\n                        <img src="assets/img/bg/card-overlay-03.svg" alt="User Img">\n                    </span>\n                </div>\n                <!-- end card body -->\n            </div>\n            <!-- end card -->\n        </div> <!-- end col -->\n        <div class="col-xl-3 col-lg-4 col-md-6">\n            <div class="card position-relative">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">\n                        <div>\n                            <p class="mb-1">Cash & Cheque</p>\n                            <h6 class="fs-16 fw-semibold">\u20B9300,000</h6>\n                        </div>\n                        <div>\n                            <span class="avatar bg-danger rounded-circle">\n                                <i class="isax isax-information"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <p class="fs-13 mb-0"><span class="text-danger"><i class="isax isax-received text-danger me-1"></i>7.45%</span> from last month</p>\n                    <span class="position-absolute end-0 bottom-0">\n                        <img src="assets/img/bg/card-overlay-04.svg" alt="User Img">\n                    </span>\n                </div>\n                <!-- end card body -->\n            </div>\n            <!-- end card -->\n        </div> <!-- end col -->\n    </div>\n    <!-- end row -->\n\n    <!-- Table Search Start -->\n    <div class="mb-3">\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center gap-2">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                     </div>\n                </div>\n                <app-date-range-picker></app-date-range-picker>\n                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                    <i class="isax isax-filter me-1"></i>Filter\n                </a>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                        <i class="isax isax-grid-3 me-1"></i>Column\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-lg">\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Payment ID</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Paid Date</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Amount</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox">\n                                <span>Payment Mode</span>\n                            </label>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <!-- Filter Info -->\n        <div class="align-items-center gap-2 flex-wrap filter-info mt-3">\n            <h6 class="fs-13 fw-semibold">Filters</h6>\n            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Payment Mode Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>\n        </div>\n        <!-- /Filter Info -->\n\n    </div>\n    <!-- Table Search End -->\n\n    <!-- Table List Start -->\n    <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n            <thead>\n                <tr>\n                    <th class="no-sort">\n                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                        </div>\n                    </th>\n                    <th mat-sort-header="payment">Payment ID</th>\n                    <th mat-sort-header="date">Paid Date</th>\n                    <th mat-sort-header="amount">Amount</th>\n                    <th class="no-sort">Payment Mode</th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td class="sorting_1">\n                        <div class="form-check form-check-md" >\n                            <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                        </div>\n                    </td>\n                    <td>\n                        <a href="javascript:void(0);" class="link-default">{{data.sku}}</a>\n                    </td>\n                    <td>\n                        {{data.date}}\n                    </td>\n                    <td class="text-dark">\n                        {{data.totalPrice}}\n                    </td>\n                    <td class="text-dark">{{data.mode}}</td>\n                </tr>\n            } @if(tableData.length === 0){\n                <tr>\n                  <td colspan="12" class="text-center text-dark">No matching records found</td>\n                </tr>\n              }\n\n            </tbody>\n        </table>\n    </div>\n    <!-- /Table List End -->\n    <app-custom-pagination *ngIf="row"/>\n\n</div>\n<!-- End Content -->\n\n\n        <!-- Start Filter -->\n        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n            <div class="offcanvas-header d-block pb-0">\n                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n                    <h6 class="offcanvas-title">Filter</h6>\n                    <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                </div>\n            </div>\n            <div class="offcanvas-body pt-3">\n                <form action="#">\n                    <div class="mb-3">\n                        <label class="form-label">Customer</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li class="d-flex align-items-center justify-content-between mb-3">\n                                        <label class="d-inline-flex align-items-center text-gray-9">\n                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                        </label>\n                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-18.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Harris\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>David Anderson\n                                        </label>\n                                    </li>\n                                </ul>\n                                <div class="row g-2">\n                                    <div class="col-6">\n                                        <a href="javascript:void(0)" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                                    </div>\n                                    <div class="col-6">\n                                        <a href="javascript:void(0)" class="btn btn-primary w-100">Select</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <label id="dateRangePicker" class="form-label">Date Range</label>\n                        <div class="filter-daterange">\n                            <app-date-range-picker></app-date-range-picker>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Amount</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="filter-range">\n                                    <div class="d-flex justify-content-between align-items-center">\n                                        <span class="irs" style="visibility: visible;">$0</span>\n                                        <span class="irs" style="visibility: visible;">$1000</span>\n                                    </div>\n                                    <mat-slider\n                                        min="0"\n                                        max="1000"\n                                        discrete\n                                        [displayWith]="formatLabel"\n                                    >\n                                        <input value="350" matSliderThumb />\n                                    </mat-slider>\n                                    <p>Range : <span class="text-gray-9">$200 - $5695</span></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Payment Mode</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li class="d-flex align-items-center justify-content-between mb-3">\n                                        <label class="d-inline-flex align-items-center text-gray-9">\n                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                        </label>\n                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cash\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> Check\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> Bank Transfer\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> Paypal\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> Stripe\n                                        </label>\n                                    </li>\n                                </ul>\n                                <div class="row g-2">\n                                    <div class="col-6">\n                                        <a href="javascript:void(0)" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                                    </div>\n                                    <div class="col-6">\n                                        <a href="javascript:void(0)" class="btn btn-primary w-100">Select</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="offcanvas-footer">\n                        <div class="row g-2">\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>\n                            </div>\n                            <div class="col-6">\n                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <!-- End Filter -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentSummaryComponent, { className: "PaymentSummaryComponent", filePath: "src/app/features/customers/payment-summary/payment-summary.component.ts", lineNumber: 22 });
})();
export {
  PaymentSummaryComponent
};
//# sourceMappingURL=chunk-AVK6JQUV.js.map
