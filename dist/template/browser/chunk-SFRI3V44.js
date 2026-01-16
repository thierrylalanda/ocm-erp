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
  MatSortModule
} from "./chunk-HOUK7BRS.js";
import {
  PaginationService
} from "./chunk-3QZ7Y34U.js";
import {
  MatTableDataSource
} from "./chunk-D2PNAUHN.js";
import {
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-5H6GXSFV.js";
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/manage/membership/subscribers/subscribers.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function SubscribersComponent_For_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 70)(3, "a", 71);
    \u0275\u0275element(4, "img", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h6", 73)(7, "a", 74);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r1.provider);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.subscription);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.endDate);
  }
}
function SubscribersComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 76);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SubscribersComponent_app_custom_pagination_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var SubscribersComponent = class _SubscribersComponent {
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
    this.data.getSubscribers().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.subscribers) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSubscribers().subscribe((apiRes) => {
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
  static \u0275fac = function SubscribersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscribersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscribersComponent, selectors: [["app-subscribers"]], decls: 263, vars: 14, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/users/user-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/users/user-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/users/user-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/users/user-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SubscribersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Subscribers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "a", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "label")(14, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function SubscribersComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SubscribersComponent_Template_input_ngModelChange_14_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 4)(19, "div", 13)(20, "a", 14);
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275text(22, "Sort By : ");
      \u0275\u0275elementStart(23, "span", 16);
      \u0275\u0275text(24, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "ul", 17)(26, "li")(27, "a", 18);
      \u0275\u0275text(28, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 18);
      \u0275\u0275text(31, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 13)(33, "a", 19);
      \u0275\u0275element(34, "i", 20);
      \u0275\u0275text(35, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "ul", 21)(37, "li")(38, "label", 22);
      \u0275\u0275element(39, "i", 23)(40, "input", 24);
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Provider");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "li")(44, "label", 22);
      \u0275\u0275element(45, "i", 23)(46, "input", 24);
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Subscription");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "li")(50, "label", 22);
      \u0275\u0275element(51, "i", 23)(52, "input", 24);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "li")(56, "label", 22);
      \u0275\u0275element(57, "i", 23)(58, "input", 25);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Subscription Duration");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "li")(62, "label", 22);
      \u0275\u0275element(63, "i", 23)(64, "input", 24);
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "Start Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "li")(68, "label", 22);
      \u0275\u0275element(69, "i", 23)(70, "input", 24);
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "End Date");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(73, "div", 26)(74, "h6", 27);
      \u0275\u0275text(75, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 28)(77, "span", 29);
      \u0275\u0275text(78, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(79, "Providers Selected");
      \u0275\u0275elementStart(80, "span", 30);
      \u0275\u0275listener("click", function SubscribersComponent_Template_span_click_80_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(81, "i", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "span", 28)(83, "span", 29);
      \u0275\u0275text(84, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(85, "Subscription Selected");
      \u0275\u0275elementStart(86, "span", 30);
      \u0275\u0275listener("click", function SubscribersComponent_Template_span_click_86_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(87, "i", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "a", 32);
      \u0275\u0275listener("click", function SubscribersComponent_Template_a_click_88_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(89, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 33)(91, "table", 34);
      \u0275\u0275listener("matSortChange", function SubscribersComponent_Template_table_matSortChange_91_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(92, "thead", 35)(93, "tr")(94, "th");
      \u0275\u0275text(95, "Provider");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th");
      \u0275\u0275text(97, "Subscription");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th");
      \u0275\u0275text(99, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th");
      \u0275\u0275text(101, "Subscription Duration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th");
      \u0275\u0275text(103, "Start Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th");
      \u0275\u0275text(105, "End Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "tbody");
      \u0275\u0275repeaterCreate(107, SubscribersComponent_For_108_Template, 19, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(109, SubscribersComponent_Conditional_109_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(110, SubscribersComponent_app_custom_pagination_110_Template, 1, 0, "app-custom-pagination", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 37)(112, "div", 38)(113, "div", 39)(114, "h6", 40);
      \u0275\u0275text(115, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "button", 41);
      \u0275\u0275element(117, "i", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 43)(119, "form", 44)(120, "div", 2)(121, "label", 45);
      \u0275\u0275text(122, "Providers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 13)(124, "a", 46);
      \u0275\u0275text(125, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 47)(127, "div", 2)(128, "div", 48)(129, "span", 49);
      \u0275\u0275element(130, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275element(131, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "ul", 2)(133, "li", 52)(134, "label", 53);
      \u0275\u0275element(135, "input", 54);
      \u0275\u0275text(136, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "a", 55);
      \u0275\u0275text(138, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "li")(140, "label", 56);
      \u0275\u0275element(141, "input", 25);
      \u0275\u0275elementStart(142, "span", 57);
      \u0275\u0275element(143, "img", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275text(144, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "li")(146, "label", 56);
      \u0275\u0275element(147, "input", 25);
      \u0275\u0275elementStart(148, "span", 57);
      \u0275\u0275element(149, "img", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275text(150, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "li")(152, "label", 56);
      \u0275\u0275element(153, "input", 25);
      \u0275\u0275elementStart(154, "span", 57);
      \u0275\u0275element(155, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275text(156, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "li")(158, "label", 56);
      \u0275\u0275element(159, "input", 25);
      \u0275\u0275elementStart(160, "span", 57);
      \u0275\u0275element(161, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275text(162, "Michael Johnson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 62)(164, "div", 63)(165, "a", 64);
      \u0275\u0275text(166, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 63)(168, "a", 65);
      \u0275\u0275text(169, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(170, "div", 2)(171, "label", 45);
      \u0275\u0275text(172, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 66);
      \u0275\u0275element(174, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 2)(176, "label", 45);
      \u0275\u0275text(177, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 13)(179, "a", 46);
      \u0275\u0275text(180, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "div", 47)(182, "ul", 2)(183, "li")(184, "label", 56);
      \u0275\u0275element(185, "input", 25);
      \u0275\u0275text(186, " $299 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "li")(188, "label", 56);
      \u0275\u0275element(189, "input", 25);
      \u0275\u0275text(190, " $199 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "li")(192, "label", 56);
      \u0275\u0275element(193, "input", 25);
      \u0275\u0275text(194, " $349 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "li")(196, "label", 56);
      \u0275\u0275element(197, "input", 25);
      \u0275\u0275text(198, " $499 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "li")(200, "label", 56);
      \u0275\u0275element(201, "input", 25);
      \u0275\u0275text(202, " $1999 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(203, "div", 2)(204, "label", 45);
      \u0275\u0275text(205, "Subscription");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 13)(207, "a", 46);
      \u0275\u0275text(208, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 47)(210, "ul", 2)(211, "li")(212, "label", 56);
      \u0275\u0275element(213, "input", 25);
      \u0275\u0275text(214, " Basic ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "li")(216, "label", 56);
      \u0275\u0275element(217, "input", 25);
      \u0275\u0275text(218, " Standard ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "li")(220, "label", 56);
      \u0275\u0275element(221, "input", 25);
      \u0275\u0275text(222, " Enterprise ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(223, "div", 2)(224, "label", 45);
      \u0275\u0275text(225, "Subscription Duration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 13)(227, "a", 46);
      \u0275\u0275text(228, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 47)(230, "ul", 2)(231, "li")(232, "label", 56);
      \u0275\u0275element(233, "input", 25);
      \u0275\u0275text(234, " 1 month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "li")(236, "label", 56);
      \u0275\u0275element(237, "input", 25);
      \u0275\u0275text(238, " 2 months ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li")(240, "label", 56);
      \u0275\u0275element(241, "input", 25);
      \u0275\u0275text(242, " 3 months ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "li")(244, "label", 56);
      \u0275\u0275element(245, "input", 25);
      \u0275\u0275text(246, " 6 months ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "li")(248, "label", 56);
      \u0275\u0275element(249, "input", 25);
      \u0275\u0275text(250, " 1 year ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "li")(252, "label", 56);
      \u0275\u0275element(253, "input", 25);
      \u0275\u0275text(254, " 2 years ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(255, "div", 67)(256, "div", 62)(257, "div", 63)(258, "a", 68);
      \u0275\u0275text(259, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 63)(261, "button", 69);
      \u0275\u0275listener("click", function SubscribersComponent_Template_button_click_261_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(262, "Submit");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(59);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 109 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [DateRangePickerComponent, CustomPaginationComponent, CommonModule, NgClass, NgIf, MatSelectModule, MatSortModule, MatSort, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSliderModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscribersComponent, [{
    type: Component,
    args: [{ selector: "app-subscribers", imports: [DateRangePickerComponent, CustomPaginationComponent, CommonModule, MatSelectModule, MatSortModule, FormsModule, MatSliderModule], template: `<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Subscribers</h6>
        </div>
    </div>
    <!-- End Page Header -->
    
    <!-- Start Table Search -->
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
                    <ul class="dropdown-menu  dropdown-menu-lg">
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Provider</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Subscription</span>
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
                                <span>Subscription Duration</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Start Date</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>End Date</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>			
        
        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Providers Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>Subscription Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
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
                    <th>Provider</th>
                    <th>Subscription</th>
                    <th>Amount</th>
                    <th>Subscription Duration</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.provider}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.subscription}}</td>
                    <td class="text-dark">{{data.amount}}</td>
                    <td>{{data.duration}}</td>								
                    <td>{{data.startDate}}</td>
                    <td>{{data.endDate}}</td>
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
						<label class="form-label">Providers</label>
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
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson
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
								<ul class="mb-3">
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											$299
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											$199
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											$349
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											$499
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											$1999
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>	
					<div class="mb-3">
						<label class="form-label">Subscription</label>
						<div class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
							<div class="dropdown-menu shadow-lg w-100 dropdown-info">	
								<ul class="mb-3">
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Basic
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Standard
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Enterprise
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>	
					<div class="mb-3">
						<label class="form-label">Subscription Duration</label>
						<div class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
							<div class="dropdown-menu shadow-lg w-100 dropdown-info">	
								<ul class="mb-3">
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											1 month
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											2 months
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											3 months
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											6 months
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											1 year
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											2 years
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>	
					<div class="offcanvas-footer">
						<!-- start row -->
						<div class="row g-2">
							<div class="col-6">
								<a href="javascript:void(0);"  class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
							</div>
							<div class="col-6">
								<button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
							</div>
						</div>
						<!-- end row -->
					</div>
				</form>
			</div>
		</div>
		<!-- End Filter -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscribersComponent, { className: "SubscribersComponent", filePath: "src/app/features/manage/membership/subscribers/subscribers.component.ts", lineNumber: 21 });
})();
export {
  SubscribersComponent
};
//# sourceMappingURL=chunk-SFRI3V44.js.map
