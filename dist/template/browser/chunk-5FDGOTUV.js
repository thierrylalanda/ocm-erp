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
import {
  MatOption,
  MatSelect,
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
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-6H2KZBXU.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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

// src/app/features/manage/membership/membership-addons/membership-addons.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function MembershipAddonsComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "p", 107);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "p", 108);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 109);
    \u0275\u0275text(14);
    \u0275\u0275element(15, "i", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 111)(17, "a", 112);
    \u0275\u0275element(18, "i", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 114)(20, "li")(21, "a", 115);
    \u0275\u0275element(22, "i", 116);
    \u0275\u0275text(23, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "a", 117);
    \u0275\u0275element(26, "i", 118);
    \u0275\u0275text(27, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.addonName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.planName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.createdOn, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.price);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Inactive" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r1.status === "Inactive" ? "isax-close-circle" : "isax-tick-circle");
  }
}
function MembershipAddonsComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 119);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function MembershipAddonsComponent_app_custom_pagination_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var MembershipAddonsComponent = class _MembershipAddonsComponent {
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
    this.data.getMembershipAddons().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.membershipAddons) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getMembershipAddons().subscribe((apiRes) => {
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
  static \u0275fac = function MembershipAddonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MembershipAddonsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembershipAddonsComponent, selectors: [["app-membership-addons"]], decls: 318, vars: 17, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "nav", "nav-tabs", "nav-bordered", "mb-3"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", "active", 3, "routerLink"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_addon", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "plan"], ["mat-sort-header", "date"], ["mat-sort-header", "price"], [1, "no-sort"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-purple", "me-1"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_addon", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "col-md-12"], ["type", "text", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_addon", 1, "modal", "fade"], ["type", "text", "value", "Extra Storage (Invoices)", 1, "form-control"], ["type", "text", "value", "$350", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "31 Jan 2025", 1, "form-control", "datetimepicker", "rounded-end"], ["placeholder", "Active", 1, "custom-mat-select", "select"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "text-dark", "fw-medium"], [1, "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_addon", 1, "dropdown-item", "d-flex", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function MembershipAddonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Membership");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "ul", 2)(6, "li", 3)(7, "a", 4);
      \u0275\u0275text(8, "Membership Plans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 3)(10, "a", 5);
      \u0275\u0275text(11, "Membership Add-ons");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "a", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "label")(21, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function MembershipAddonsComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MembershipAddonsComponent_Template_input_ngModelChange_21_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(22, "a", 15);
      \u0275\u0275element(23, "i", 16);
      \u0275\u0275text(24, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 8)(26, "div", 17)(27, "a", 18);
      \u0275\u0275element(28, "i", 19);
      \u0275\u0275text(29, "Sort By : ");
      \u0275\u0275elementStart(30, "span", 20);
      \u0275\u0275text(31, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "ul", 21)(33, "li")(34, "a", 22);
      \u0275\u0275text(35, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li")(37, "a", 22);
      \u0275\u0275text(38, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "a", 23);
      \u0275\u0275element(40, "i", 24);
      \u0275\u0275text(41, "New Addon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 25)(43, "h6", 26);
      \u0275\u0275text(44, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 27)(46, "span", 28);
      \u0275\u0275text(47, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, "Plan Selected");
      \u0275\u0275elementStart(49, "span", 29);
      \u0275\u0275listener("click", function MembershipAddonsComponent_Template_span_click_49_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(50, "i", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "span", 27)(52, "span", 28);
      \u0275\u0275text(53, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, "Status Selected");
      \u0275\u0275elementStart(55, "span", 29);
      \u0275\u0275listener("click", function MembershipAddonsComponent_Template_span_click_55_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(56, "i", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "a", 31);
      \u0275\u0275listener("click", function MembershipAddonsComponent_Template_a_click_57_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(58, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 32)(60, "table", 33);
      \u0275\u0275listener("matSortChange", function MembershipAddonsComponent_Template_table_matSortChange_60_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(61, "thead")(62, "tr")(63, "th", 34);
      \u0275\u0275text(64, "Addon Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 35);
      \u0275\u0275text(66, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 36);
      \u0275\u0275text(68, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 37);
      \u0275\u0275text(70, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 38);
      \u0275\u0275text(72, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "th", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "tbody");
      \u0275\u0275repeaterCreate(75, MembershipAddonsComponent_For_76_Template, 28, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(77, MembershipAddonsComponent_Conditional_77_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(78, MembershipAddonsComponent_app_custom_pagination_78_Template, 1, 0, "app-custom-pagination", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 40)(80, "div", 41)(81, "div", 42)(82, "h6", 43);
      \u0275\u0275text(83, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 44);
      \u0275\u0275element(85, "i", 45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 46)(87, "form", 47)(88, "div", 6)(89, "label", 48);
      \u0275\u0275text(90, "Addon Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 17)(92, "a", 49);
      \u0275\u0275text(93, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 50)(95, "div", 6)(96, "div", 51)(97, "span", 52);
      \u0275\u0275element(98, "i", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275element(99, "input", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "ul", 6)(101, "li")(102, "label", 55);
      \u0275\u0275element(103, "input", 56);
      \u0275\u0275text(104, " Advanced Reports ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "li")(106, "label", 55);
      \u0275\u0275element(107, "input", 57);
      \u0275\u0275text(108, " Audit Logs ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "li")(110, "label", 55);
      \u0275\u0275element(111, "input", 57);
      \u0275\u0275text(112, " Financial Forecasting ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "li")(114, "label", 55);
      \u0275\u0275element(115, "input", 56);
      \u0275\u0275text(116, " Extra Storage (Invoices) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "li")(118, "label", 55);
      \u0275\u0275element(119, "input", 57);
      \u0275\u0275text(120, " Payment Gateway Integration ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "li")(122, "label", 55);
      \u0275\u0275element(123, "input", 56);
      \u0275\u0275text(124, " Real-time Notifications ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "li")(126, "label", 55);
      \u0275\u0275element(127, "input", 56);
      \u0275\u0275text(128, " Recurring Invoice Automation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "li")(130, "label", 55);
      \u0275\u0275element(131, "input", 57);
      \u0275\u0275text(132, " Custom Invoice Due Dates ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "li")(134, "label", 55);
      \u0275\u0275element(135, "input", 57);
      \u0275\u0275text(136, " E-signature for Invoices ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "li")(138, "label", 55);
      \u0275\u0275element(139, "input", 56);
      \u0275\u0275text(140, " Priority Support ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(141, "div", 6)(142, "label", 48);
      \u0275\u0275text(143, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 17)(145, "a", 49);
      \u0275\u0275text(146, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 50)(148, "ul", 6)(149, "li")(150, "label", 55);
      \u0275\u0275element(151, "input", 57)(152, "i", 58);
      \u0275\u0275text(153, "Free ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "li")(155, "label", 55);
      \u0275\u0275element(156, "input", 57)(157, "i", 59);
      \u0275\u0275text(158, "Starter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "li")(160, "label", 55);
      \u0275\u0275element(161, "input", 57)(162, "i", 60);
      \u0275\u0275text(163, "Business ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "li")(165, "label", 55);
      \u0275\u0275element(166, "input", 57)(167, "i", 61);
      \u0275\u0275text(168, "Enterprise ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(169, "div", 6)(170, "label", 62);
      \u0275\u0275text(171, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "div", 63);
      \u0275\u0275element(173, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "div", 6)(175, "label", 48);
      \u0275\u0275text(176, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 17)(178, "a", 49);
      \u0275\u0275text(179, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 50)(181, "div", 64)(182, "div", 65)(183, "span", 66);
      \u0275\u0275text(184, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "span", 66);
      \u0275\u0275text(186, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "mat-slider", 67);
      \u0275\u0275element(188, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p");
      \u0275\u0275text(190, "Range : ");
      \u0275\u0275elementStart(191, "span", 69);
      \u0275\u0275text(192, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(193, "div")(194, "label", 48);
      \u0275\u0275text(195, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 17)(197, "a", 49);
      \u0275\u0275text(198, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 50)(200, "ul", 6)(201, "li")(202, "label", 55);
      \u0275\u0275element(203, "input", 57)(204, "i", 58);
      \u0275\u0275text(205, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "li")(207, "label", 55);
      \u0275\u0275element(208, "input", 57)(209, "i", 60);
      \u0275\u0275text(210, "Inactive ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(211, "div", 70)(212, "div", 71)(213, "div", 72)(214, "a", 73);
      \u0275\u0275text(215, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "div", 72)(217, "button", 74);
      \u0275\u0275listener("click", function MembershipAddonsComponent_Template_button_click_217_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(218, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(219, "div", 75)(220, "div", 76)(221, "div", 77)(222, "div", 78)(223, "h4", 79);
      \u0275\u0275text(224, "Add New Addon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "button", 80);
      \u0275\u0275element(226, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "form")(228, "div", 81)(229, "div", 82)(230, "div", 6)(231, "label", 48);
      \u0275\u0275text(232, "Addon Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(233, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "div", 82)(235, "div", 6)(236, "label", 48);
      \u0275\u0275text(237, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(238, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "div", 82)(240, "div", 6)(241, "label", 48);
      \u0275\u0275text(242, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 84);
      \u0275\u0275element(244, "input", 85);
      \u0275\u0275elementStart(245, "span", 86);
      \u0275\u0275element(246, "i", 87);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(247, "div", 82)(248, "div")(249, "label", 48);
      \u0275\u0275text(250, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "mat-select", 88)(252, "mat-option", 89);
      \u0275\u0275text(253, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "mat-option", 89);
      \u0275\u0275text(255, "Inactive");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(256, "div", 90)(257, "button", 91);
      \u0275\u0275text(258, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "button", 92);
      \u0275\u0275text(260, "Create ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(261, "div", 93)(262, "div", 76)(263, "div", 77)(264, "div", 78)(265, "h4", 79);
      \u0275\u0275text(266, "Edit Addon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "button", 80);
      \u0275\u0275element(268, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "form")(270, "div", 81)(271, "div", 82)(272, "div", 6)(273, "label", 48);
      \u0275\u0275text(274, "Addon Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(275, "input", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 82)(277, "div", 6)(278, "label", 48);
      \u0275\u0275text(279, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "div", 82)(282, "div", 6)(283, "label", 48);
      \u0275\u0275text(284, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 96);
      \u0275\u0275element(286, "input", 97);
      \u0275\u0275elementStart(287, "span", 86);
      \u0275\u0275element(288, "i", 87);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(289, "div", 82)(290, "div")(291, "label", 48);
      \u0275\u0275text(292, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "mat-select", 98)(294, "mat-option", 89);
      \u0275\u0275text(295, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "mat-option", 89);
      \u0275\u0275text(297, "Inactive");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(298, "div", 90)(299, "button", 91);
      \u0275\u0275text(300, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "button", 92);
      \u0275\u0275text(302, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(303, "div", 99)(304, "div", 100)(305, "div", 77)(306, "div", 101)(307, "div", 6);
      \u0275\u0275element(308, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "h6", 103);
      \u0275\u0275text(310, "Delete Addon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "p", 6);
      \u0275\u0275text(312, "Are you sure, you want to delete addon?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "div", 104)(314, "a", 105);
      \u0275\u0275text(315, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "a", 106);
      \u0275\u0275text(317, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.membershipPlans);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.membershipAddons);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(21);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(24);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 77 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(109);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [MatSliderModule, MatSlider, MatSliderThumb, DateRangePickerComponent, CustomPaginationComponent, CommonModule, NgClass, NgIf, MatSortModule, MatSort, MatSortHeader, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MembershipAddonsComponent, [{
    type: Component,
    args: [{ selector: "app-membership-addons", imports: [MatSliderModule, DateRangePickerComponent, CustomPaginationComponent, CommonModule, MatSortModule, FormsModule, RouterLink, MatSelectModule, BsDatepickerModule], template: `            <!-- Start conatiner -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Membership</h6>
                    </div>
                   </div>
                <!-- End Page Header -->

                <ul class="nav nav-tabs nav-bordered mb-3">
                    <li class="nav-item"><a class="nav-link " [routerLink]="routes.membershipPlans">Membership Plans</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="routes.membershipAddons">Membership Add-ons</a></li>
                </ul>

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
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_addon"><i class="isax isax-add-circle5 me-1" ></i>New Addon</a>
                        </div>
                    </div>

                    <!-- Filter Info -->
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Plan Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
                    </div>
                    <!-- /Filter Info -->

                </div>
                <!-- End Table Search -->

                <!-- Start Table List -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead>
                            <tr>
                                <th mat-sort-header="name">Addon Name</th>
                                <th mat-sort-header="plan">Plan Name</th>
                                <th mat-sort-header="date">Created On</th>
                                <th mat-sort-header="price">Price</th>
                                <th class="no-sort">Status</th>
                                <th class="no-sort"></th>
                            </tr>
                        </thead>
                        <tbody>
                            @for (data of tableData;track data){
                            <tr>
                                <td>
                                    <p class="text-dark fw-medium">{{data.addonName}}</p>
                                </td>
                                <td>
                                    <p class="text-dark fw-medium">{{data.planName}}</p>
                                </td>
                                <td>
                                    {{data.createdOn}}
                                </td>
                                <td>
                                    <p class="text-dark">{{data.price}}</p>
                                </td>
                                <td>
                                    <span class="badge  d-inline-flex align-items-center"
                                    [ngClass]="data.status==='Inactive'?'badge-soft-danger':'badge-soft-success'">
                                    {{data.status}} 
                                    <i class="isax  ms-1"
                                    [ngClass]="data.status==='Inactive'?'isax-close-circle':'isax-tick-circle'"></i>
                                </span>
                                </td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_addon"><i class="isax isax-edit me-2"></i>Edit</a>
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
                <!-- End Table List -->
                <app-custom-pagination *ngIf="row"/>

            </div>
            <!-- conatiner -->



                   <!-- Start Filter -->
        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">
            <div class="offcanvas-header d-block pb-0">
                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
                    <h6 class="offcanvas-title">Filter</h6>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>
            <div class="offcanvas-body pt-3">
                <form action="#">
                    <div class="mb-3">
                        <label class="form-label">Addon Name</label>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Advanced Reports
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Audit Logs
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Financial Forecasting
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Extra Storage (Invoices)
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Payment Gateway Integration
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Real-time Notifications
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Recurring Invoice Automation
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Custom Invoice Due Dates
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> E-signature for Invoices
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Priority Support
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Plan Name</label>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <ul class="mb-3">
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Free
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Starter
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Business
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-purple me-1"></i>Enterprise
                                        </label>
                                    </li>
                                </ul>
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
                    <div>
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
                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Filter -->

        <!-- Start Add Modal  -->
        <div id="add_addon" class="modal fade">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Addon</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Addon Name</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label class="form-label">Price</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label class="form-label">Created On</label>
                                    <div class="input-group position-relative mb-3 ngxdate">
                                        <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                                        <span class="input-icon-addon fs-16 text-gray-9">
                                            <i class="isax isax-calendar-2"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Status</label>
                                    <mat-select class="custom-mat-select select" placeholder="Select">
                                        <mat-option value="1">Active</mat-option>
                                        <mat-option value="1">Inactive</mat-option>
                                    </mat-select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Add Modal -->

        <!-- Start Add Modal  -->
        <div id="edit_addon" class="modal fade">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Addon</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Addon Name</label>
                                    <input type="text" class="form-control" value="Extra Storage (Invoices)">
                                </div>
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label class="form-label">Price</label>
                                    <input type="text" class="form-control" value="$350">
                                </div>
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label class="form-label">Created On</label>
                                    <div class="input-group position-relative mb-3 ngxdate1">
                                        <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate1" placeholder="31 Jan 2025">
                                        <span class="input-icon-addon fs-16 text-gray-9">
                                            <i class="isax isax-calendar-2"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Status</label>
                                    <mat-select class="custom-mat-select select" placeholder="Active">
                                        <mat-option value="1">Active</mat-option>
                                        <mat-option value="1">Inactive</mat-option>
                                    </mat-select>
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
        <!-- End Add Modal -->

        <!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Addon</h6>
                        <p class="mb-3">Are you sure, you want to delete addon?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Delete Modal  -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembershipAddonsComponent, { className: "MembershipAddonsComponent", filePath: "src/app/features/manage/membership/membership-addons/membership-addons.component.ts", lineNumber: 22 });
})();
export {
  MembershipAddonsComponent
};
//# sourceMappingURL=chunk-5FDGOTUV.js.map
