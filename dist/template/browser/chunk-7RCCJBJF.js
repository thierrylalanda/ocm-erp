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
  MatSortModule
} from "./chunk-T4Z6NTOQ.js";
import {
  PaginationService
} from "./chunk-OQ3NIM27.js";
import {
  MatTableDataSource
} from "./chunk-L6DWDL26.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MUITGCTV.js";
import "./chunk-O6CHOV5Y.js";
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-ZTQFL2WC.js";
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
  NgClass
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reports/item-report/best-seller/best-seller.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function BestSellerComponent_For_175_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 103)(2, "div", 104)(3, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function BestSellerComponent_For_175_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 106);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 107)(9, "a", 108);
    \u0275\u0275element(10, "img", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 110)(13, "a", 111);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 112);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.sku);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.sellingPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.date);
  }
}
function BestSellerComponent_Conditional_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 113);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
var BestSellerComponent = class _BestSellerComponent {
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
    this.data.getBestSeller().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.bestSeller) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBestSeller().subscribe((apiRes) => {
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
  static \u0275fac = function BestSellerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BestSellerComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BestSellerComponent, selectors: [["app-best-seller"]], decls: 346, vars: 12, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "my-xl-auto"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold", "mb-0", "d-inline-flex", "flex-wrap", "gap-2", "flex-column"], [1, "badge", "badge-soft-success", "badge-xs"], [1, "isax", "isax-arrow-up-15", "ms-1"], [1, "badge", "badge-soft-primary", "border", "p-2", "border-primary", "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-dollar-circle", "fs-16"], [1, "position-absolute", "end-0", "bottom-0"], ["src", "assets/img/bg/card-overlay-13.svg", "alt", "User Img"], [1, "badge", "badge-soft-success", "border", "border-success", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-bag-2", "fs-16"], ["src", "assets/img/bg/card-overlay-14.svg", "alt", "User Img"], [1, "badge", "badge-soft-warning", "border", "border-warning", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/bg/card-overlay-15.svg", "alt", "User Img"], [1, "badge", "badge-soft-danger", "border", "border-danger", "rounded-circle", "p-2", "d-inline-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/bg/card-overlay-16.svg", "alt", "User Img"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "text-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function BestSellerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Best Seller Report");
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
      \u0275\u0275text(25, "Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h6", 16);
      \u0275\u0275text(27, "$8,500,00 ");
      \u0275\u0275elementStart(28, "span", 17);
      \u0275\u0275text(29, "+5.62% ");
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div")(32, "span", 19);
      \u0275\u0275element(33, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "span", 21);
      \u0275\u0275element(35, "img", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 12)(38, "div", 13)(39, "div", 14)(40, "div")(41, "p", 15);
      \u0275\u0275text(42, "Highest Selling Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h6", 16);
      \u0275\u0275text(44, "Earbuds ");
      \u0275\u0275elementStart(45, "span", 17);
      \u0275\u0275text(46, "+11.4% ");
      \u0275\u0275element(47, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div")(49, "span", 23);
      \u0275\u0275element(50, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "span", 21);
      \u0275\u0275element(52, "img", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 11)(54, "div", 12)(55, "div", 13)(56, "div", 14)(57, "div")(58, "p", 15);
      \u0275\u0275text(59, "Average Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h6", 16);
      \u0275\u0275text(61, "$12,500 ");
      \u0275\u0275elementStart(62, "span", 17);
      \u0275\u0275text(63, "+8.52% ");
      \u0275\u0275element(64, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div")(66, "span", 26);
      \u0275\u0275element(67, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "span", 21);
      \u0275\u0275element(69, "img", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div", 11)(71, "div", 12)(72, "div", 13)(73, "div", 14)(74, "div")(75, "p", 15);
      \u0275\u0275text(76, "Accessories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h6", 16);
      \u0275\u0275text(78, "$15,000 ");
      \u0275\u0275elementStart(79, "span", 17);
      \u0275\u0275text(80, "+7.45% ");
      \u0275\u0275element(81, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div")(83, "span", 28);
      \u0275\u0275element(84, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "span", 21);
      \u0275\u0275element(86, "img", 29);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(87, "div", 30)(88, "div", 31)(89, "div", 32)(90, "div", 33)(91, "div", 34)(92, "a", 35);
      \u0275\u0275element(93, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 37)(95, "label")(96, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function BestSellerComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BestSellerComponent_Template_input_ngModelChange_96_listener() {
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
      \u0275\u0275text(112, "SKU");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "li")(114, "label", 45);
      \u0275\u0275element(115, "i", 46)(116, "input", 47);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "li")(120, "label", 45);
      \u0275\u0275element(121, "i", 46)(122, "input", 47);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Category");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "li")(126, "label", 45);
      \u0275\u0275element(127, "i", 46)(128, "input", 47);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Sold Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "li")(132, "label", 45);
      \u0275\u0275element(133, "i", 46)(134, "input", 47);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Sold Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "li")(138, "label", 45);
      \u0275\u0275element(139, "i", 46)(140, "input", 47);
      \u0275\u0275elementStart(141, "span");
      \u0275\u0275text(142, "Due Date");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(143, "div", 48)(144, "h6", 49);
      \u0275\u0275text(145, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "span", 50)(147, "span", 51);
      \u0275\u0275text(148, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, "Product Selected");
      \u0275\u0275elementStart(150, "span", 52);
      \u0275\u0275listener("click", function BestSellerComponent_Template_span_click_150_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(151, "i", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "a", 54);
      \u0275\u0275listener("click", function BestSellerComponent_Template_a_click_152_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(153, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "div", 55)(155, "table", 56);
      \u0275\u0275listener("matSortChange", function BestSellerComponent_Template_table_matSortChange_155_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(156, "thead")(157, "tr")(158, "th", 57)(159, "div", 58);
      \u0275\u0275listener("click", function BestSellerComponent_Template_div_click_159_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(160, "input", 59);
      \u0275\u0275twoWayListener("ngModelChange", function BestSellerComponent_Template_input_ngModelChange_160_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(161, "th");
      \u0275\u0275text(162, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "th");
      \u0275\u0275text(164, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "th");
      \u0275\u0275text(166, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "th", 57);
      \u0275\u0275text(168, "Sold Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "th", 57);
      \u0275\u0275text(170, "Sold Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "th", 57);
      \u0275\u0275text(172, "Due Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "tbody");
      \u0275\u0275repeaterCreate(174, BestSellerComponent_For_175_Template, 23, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(176, BestSellerComponent_Conditional_176_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(177, "app-custom-pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 60)(179, "div", 61)(180, "div", 62)(181, "h6", 63);
      \u0275\u0275text(182, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "button", 64);
      \u0275\u0275element(184, "i", 65);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "div", 66)(186, "form", 67)(187, "div", 30)(188, "label", 68);
      \u0275\u0275text(189, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "div", 4)(191, "a", 69);
      \u0275\u0275text(192, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 70)(194, "div", 30)(195, "div", 71)(196, "span", 72);
      \u0275\u0275element(197, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275element(198, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "ul", 30)(200, "li", 75)(201, "label", 76);
      \u0275\u0275element(202, "input", 77);
      \u0275\u0275text(203, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "a", 78);
      \u0275\u0275text(205, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "li")(207, "label", 79);
      \u0275\u0275element(208, "input", 80);
      \u0275\u0275elementStart(209, "span", 81);
      \u0275\u0275element(210, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275text(211, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "li")(213, "label", 79);
      \u0275\u0275element(214, "input", 80);
      \u0275\u0275elementStart(215, "span", 81);
      \u0275\u0275element(216, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275text(217, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "li")(219, "label", 79);
      \u0275\u0275element(220, "input", 80);
      \u0275\u0275elementStart(221, "span", 81);
      \u0275\u0275element(222, "img", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275text(223, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "li")(225, "label", 79);
      \u0275\u0275element(226, "input", 80);
      \u0275\u0275elementStart(227, "span", 81);
      \u0275\u0275element(228, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275text(229, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li")(231, "label", 79);
      \u0275\u0275element(232, "input", 80);
      \u0275\u0275elementStart(233, "span", 81);
      \u0275\u0275element(234, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275text(235, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 79);
      \u0275\u0275element(238, "input", 80);
      \u0275\u0275elementStart(239, "span", 81);
      \u0275\u0275element(240, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275text(241, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(242, "div", 88)(243, "div", 89)(244, "a", 90);
      \u0275\u0275text(245, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 89)(247, "a", 91);
      \u0275\u0275text(248, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(249, "div", 30)(250, "label", 68);
      \u0275\u0275text(251, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "div", 4)(253, "a", 69);
      \u0275\u0275text(254, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 70)(256, "div", 30)(257, "div", 71)(258, "span", 72);
      \u0275\u0275element(259, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275element(260, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "ul", 30)(262, "li", 75)(263, "label", 76);
      \u0275\u0275element(264, "input", 77);
      \u0275\u0275text(265, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "a", 78);
      \u0275\u0275text(267, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "li")(269, "label", 79);
      \u0275\u0275element(270, "input", 80);
      \u0275\u0275text(271, " Smartphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "li")(273, "label", 79);
      \u0275\u0275element(274, "input", 80);
      \u0275\u0275text(275, " Headphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li")(277, "label", 79);
      \u0275\u0275element(278, "input", 80);
      \u0275\u0275text(279, " Men's Apparel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "li")(281, "label", 79);
      \u0275\u0275element(282, "input", 80);
      \u0275\u0275text(283, " Footwear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "li")(285, "label", 79);
      \u0275\u0275element(286, "input", 80);
      \u0275\u0275text(287, " Kitchen ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "label", 79);
      \u0275\u0275element(290, "input", 80);
      \u0275\u0275text(291, " Cleaning ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li")(293, "label", 79);
      \u0275\u0275element(294, "input", 80);
      \u0275\u0275text(295, " Skincare ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "li")(297, "label", 79);
      \u0275\u0275element(298, "input", 80);
      \u0275\u0275text(299, " Bike & Accessories ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(300, "div", 88)(301, "div", 89)(302, "a", 90);
      \u0275\u0275text(303, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 89)(305, "a", 91);
      \u0275\u0275text(306, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(307, "div", 30)(308, "label", 68);
      \u0275\u0275text(309, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-select", 92)(311, "mat-option", 93);
      \u0275\u0275text(312, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "mat-option", 93);
      \u0275\u0275text(314, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "mat-option", 93);
      \u0275\u0275text(316, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "mat-option", 93);
      \u0275\u0275text(318, "Liter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(319, "div", 30)(320, "label", 68);
      \u0275\u0275text(321, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "div", 4)(323, "a", 69);
      \u0275\u0275text(324, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "div", 70)(326, "div", 94)(327, "div", 95)(328, "span", 96);
      \u0275\u0275text(329, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "span", 96);
      \u0275\u0275text(331, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "mat-slider", 97);
      \u0275\u0275element(333, "input", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "p");
      \u0275\u0275text(335, "Range : ");
      \u0275\u0275elementStart(336, "span", 99);
      \u0275\u0275text(337, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(338, "div", 100)(339, "div", 88)(340, "div", 89)(341, "a", 101);
      \u0275\u0275text(342, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "div", 89)(344, "button", 102);
      \u0275\u0275listener("click", function BestSellerComponent_Template_button_click_344_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(345, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(96);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(47);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 176 : -1);
      \u0275\u0275advance(156);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    MatSelectModule,
    MatSelect,
    MatOption,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    DateRangePicker2Component,
    MatSliderModule,
    MatSlider,
    MatSliderThumb
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BestSellerComponent, [{
    type: Component,
    args: [{ selector: "app-best-seller", imports: [
      CommonModule,
      FormsModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePicker2Component,
      MatSliderModule
    ], template: `			<!-- Start Content -->
            <div class=" content-two">

                <!-- Start Breadcrumb -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6 class="mb-0">Best Seller Report</h6>
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
                <!-- End Breadcrumb -->

                <div class="border-bottom mb-3">

					<!-- start row -->
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-1 text-truncate">Total Sales</p>
                                            <h6 class="fs-16 fw-semibold mb-0 d-inline-flex flex-wrap gap-2 flex-column">$8,500,00 <span class="badge badge-soft-success badge-xs">+5.62% <i class="isax isax-arrow-up-15 ms-1"></i></span></h6>
                                        </div>
                                        <div>
                                            <span class="badge badge-soft-primary border p-2 border-primary rounded-circle d-inline-flex align-items-center justify-content-center">
                                                <i class="isax isax-dollar-circle fs-16"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span class="position-absolute end-0 bottom-0">
                                        <img src="assets/img/bg/card-overlay-13.svg" alt="User Img">
                                    </span>
                                </div><!-- end card body -->
                            </div><!-- end card -->
                        </div><!-- end col -->
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-1 text-truncate">Highest Selling Product</p>
                                            <h6 class="fs-16 fw-semibold mb-0 d-inline-flex flex-wrap gap-2 flex-column">Earbuds <span class="badge badge-soft-success badge-xs">+11.4% <i class="isax isax-arrow-up-15 ms-1"></i></span></h6>
                                        </div>
                                        <div>
                                            <span class="badge badge-soft-success border border-success rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
                                                <i class="isax isax-bag-2 fs-16"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span class="position-absolute end-0 bottom-0">
                                        <img src="assets/img/bg/card-overlay-14.svg" alt="User Img">
                                    </span>
                                </div><!-- end card body -->
                            </div><!-- end card -->
                        </div><!-- end col -->
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-1 text-truncate">Average Sales</p>
                                            <h6 class="fs-16 fw-semibold mb-0 d-inline-flex flex-wrap gap-2 flex-column">$12,500 <span class="badge badge-soft-success badge-xs">+8.52% <i class="isax isax-arrow-up-15 ms-1"></i></span></h6>
                                        </div>
                                        <div>
                                            <span class="badge badge-soft-warning border border-warning rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
                                                <i class="isax isax-dollar-circle fs-16"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span class="position-absolute end-0 bottom-0">
                                        <img src="assets/img/bg/card-overlay-15.svg" alt="User Img">
                                    </span>
                                </div><!-- end card body -->
                            </div><!-- end card -->
                        </div><!-- end col -->
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="card position-relative">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-1 text-truncate">Accessories</p>
                                            <h6 class="fs-16 fw-semibold mb-0 d-inline-flex flex-wrap gap-2 flex-column">$15,000 <span class="badge badge-soft-success badge-xs">+7.45% <i class="isax isax-arrow-up-15 ms-1"></i></span></h6>
                                        </div>
                                        <div>
                                            <span class="badge badge-soft-danger border border-danger rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
                                                <i class="isax isax-dollar-circle fs-16"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span class="position-absolute end-0 bottom-0">
                                        <img src="assets/img/bg/card-overlay-16.svg" alt="User Img">
                                    </span>
                                </div><!-- end card body -->
                            </div><!-- end card -->
                        </div><!-- end col -->
                    </div>
					<!-- end row -->

                </div>

                <!-- Table Search -->
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
                           <app-date-range-picker-2/>
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
                                            <span>SKU</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Product</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Category</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Sold Amount</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Sold Quantity</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Due Date</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Filter Info -->
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Product Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
                    </div>
                    <!-- /Filter Info -->

                </div>
                <!-- /Table Search -->

                <!-- Table List -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead>
                            <tr>
                                <th class="no-sort">
                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                    </div>
                                </th>
                                <th>SKU</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th class="no-sort">Sold Amount</th>
                                <th class="no-sort">Sold Quantity</th>
                                <th class="no-sort">Due Date</th>
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
                                    <a href="javascript:void(0);" class="text-default">{{data.sku}}</a>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                            <img src="assets/img/products/{{data.img}}" class="rounded-circle" alt="img">
                                        </a>
                                        <div>
                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.product}}</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {{data.category}}

                                </td>
                                <td class="text-dark">{{data.sellingPrice}}</td>
                                <td>{{data.quantity}}</td>
                                <td>{{data.date}}</td>
                            </tr>
                        } @if(tableData.length === 0){
                            <tr>
                              <td colspan="12" class="text-center text-dark">No matching records found</td>
                            </tr>
                          }
                        </tbody>
                    </table>
                </div>
                <!-- /Table List -->
                <app-custom-pagination/>
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
                        <label class="form-label">Product</label>
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
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Apple iPhone 15
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dell XPS 13 9310
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-03.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Bose QuietComfort 45
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Nike Dri-FIT T-shirt
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-05.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Adidas Ultraboost 22 Running Shoe
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Samsung French Door Refrigerator
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
                        <label class="form-label">Category</label>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Smartphones
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Headphones
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Men's Apparel
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Footwear
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Kitchen
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cleaning
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Skincare
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Bike & Accessories
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
                        <label class="form-label">Units</label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1">Piece</mat-option>
                            <mat-option value="1">Pack</mat-option>
                            <mat-option value="1">Liter</mat-option>
                        </mat-select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Price</label>
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
        <!-- End Filter -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BestSellerComponent, { className: "BestSellerComponent", filePath: "src/app/features/reports/item-report/best-seller/best-seller.component.ts", lineNumber: 22 });
})();
export {
  BestSellerComponent
};
//# sourceMappingURL=chunk-7RCCJBJF.js.map
