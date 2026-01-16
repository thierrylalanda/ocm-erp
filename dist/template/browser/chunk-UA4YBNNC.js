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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/finance/incomes/incomes.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function IncomesComponent_For_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 116)(2, "div", 117)(3, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function IncomesComponent_For_127_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 119);
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
    \u0275\u0275elementStart(13, "td")(14, "p", 120);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "p", 120);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 121)(20, "a", 122);
    \u0275\u0275element(21, "i", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ul", 6)(23, "li")(24, "a", 124);
    \u0275\u0275element(25, "i", 125);
    \u0275\u0275text(26, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "li")(28, "a", 126);
    \u0275\u0275element(29, "i", 127);
    \u0275\u0275text(30, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "li")(32, "a", 128);
    \u0275\u0275element(33, "i", 129);
    \u0275\u0275text(34, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li")(36, "a", 130);
    \u0275\u0275element(37, "i", 131);
    \u0275\u0275text(38, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
  }
}
function IncomesComponent_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 132);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function IncomesComponent_app_custom_pagination_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var IncomesComponent = class _IncomesComponent {
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
    this.data.getIncome().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.incomes) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getIncome().subscribe((apiRes) => {
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
  static \u0275fac = function IncomesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncomesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncomesComponent, selectors: [["app-incomes"]], decls: 393, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "my-xl-auto", "d-flex", "align-items-center", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_income", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "dateRangePicker"], ["mat-sort-header", "mode"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-purple", "me-1"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_income", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_income", 1, "modal", "fade"], ["type", "text", "value", "INC00025", 1, "form-control"], ["type", "text", "value", "REF17420", 1, "form-control"], ["type", "text", "value", "$10,000", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "value", "22 Feb 2025", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], ["placeholder", "Cash", 1, "custom-mat-select", "select"], ["id", "details_income", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "col-md-6"], [1, "fw-semibold", "text-dark", "mb-0"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#details_income"], [1, "text-dark"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#details_income", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_income", 1, "dropdown-item", "d-flex", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-document-download4", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function IncomesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Income");
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
      \u0275\u0275elementStart(17, "a", 8);
      \u0275\u0275element(18, "i", 9);
      \u0275\u0275text(19, "New Income");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "a", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 17)(28, "label")(29, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function IncomesComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function IncomesComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "a", 19);
      \u0275\u0275element(31, "i", 20);
      \u0275\u0275text(32, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 12)(34, "div", 3)(35, "a", 21);
      \u0275\u0275element(36, "i", 22);
      \u0275\u0275text(37, " Sort By : ");
      \u0275\u0275elementStart(38, "span", 23);
      \u0275\u0275text(39, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "ul", 24)(41, "li")(42, "a", 7);
      \u0275\u0275text(43, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 7);
      \u0275\u0275text(46, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 3)(48, "a", 25);
      \u0275\u0275element(49, "i", 26);
      \u0275\u0275text(50, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 27)(52, "li")(53, "label", 28);
      \u0275\u0275element(54, "i", 29)(55, "input", 30);
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "li")(59, "label", 28);
      \u0275\u0275element(60, "i", 29)(61, "input", 30);
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "li")(65, "label", 28);
      \u0275\u0275element(66, "i", 29)(67, "input", 30);
      \u0275\u0275elementStart(68, "span");
      \u0275\u0275text(69, "Reference Number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "li")(71, "label", 28);
      \u0275\u0275element(72, "i", 29)(73, "input", 30);
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75, "Description");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "li")(77, "label", 28);
      \u0275\u0275element(78, "i", 29)(79, "input", 31);
      \u0275\u0275elementStart(80, "span");
      \u0275\u0275text(81, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "li")(83, "label", 28);
      \u0275\u0275element(84, "i", 29)(85, "input", 31);
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "Payment Mode");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(88, "div", 32)(89, "h6", 33);
      \u0275\u0275text(90, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span", 34)(92, "span", 35);
      \u0275\u0275text(93, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(94, "Payment Mode Selected");
      \u0275\u0275elementStart(95, "span", 36);
      \u0275\u0275listener("click", function IncomesComponent_Template_span_click_95_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(96, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "span", 34)(98, "span", 35);
      \u0275\u0275text(99, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, "$10,000 - $25,500");
      \u0275\u0275elementStart(101, "span", 36);
      \u0275\u0275listener("click", function IncomesComponent_Template_span_click_101_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(102, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "a", 38);
      \u0275\u0275listener("click", function IncomesComponent_Template_a_click_103_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(104, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "div", 39)(106, "table", 40);
      \u0275\u0275listener("matSortChange", function IncomesComponent_Template_table_matSortChange_106_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(107, "thead")(108, "tr")(109, "th", 41)(110, "div", 42);
      \u0275\u0275listener("click", function IncomesComponent_Template_div_click_110_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(111, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function IncomesComponent_Template_input_ngModelChange_111_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "th", 41);
      \u0275\u0275text(113, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 44);
      \u0275\u0275text(115, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 41);
      \u0275\u0275text(117, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 41);
      \u0275\u0275text(119, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 41);
      \u0275\u0275text(121, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th", 45);
      \u0275\u0275text(123, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(124, "th", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "tbody");
      \u0275\u0275repeaterCreate(126, IncomesComponent_For_127_Template, 39, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(128, IncomesComponent_Conditional_128_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(129, IncomesComponent_app_custom_pagination_129_Template, 1, 0, "app-custom-pagination", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 47)(131, "div", 48)(132, "div", 49)(133, "h6", 50);
      \u0275\u0275text(134, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "button", 51);
      \u0275\u0275element(136, "i", 52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 53)(138, "form", 54)(139, "div", 10)(140, "label", 55);
      \u0275\u0275text(141, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 3)(143, "a", 56);
      \u0275\u0275text(144, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "div", 57)(146, "div", 58)(147, "div", 59)(148, "span", 60);
      \u0275\u0275text(149, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "span", 60);
      \u0275\u0275text(151, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "mat-slider", 61);
      \u0275\u0275element(153, "input", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p");
      \u0275\u0275text(155, "Range : ");
      \u0275\u0275elementStart(156, "span", 63);
      \u0275\u0275text(157, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(158, "div", 10)(159, "label", 55);
      \u0275\u0275text(160, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 3)(162, "a", 56);
      \u0275\u0275text(163, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 57)(165, "ul", 10)(166, "li")(167, "label", 64);
      \u0275\u0275element(168, "input", 30)(169, "i", 65);
      \u0275\u0275text(170, "Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "li")(172, "label", 64);
      \u0275\u0275element(173, "input", 31)(174, "i", 66);
      \u0275\u0275text(175, "Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "li")(177, "label", 64);
      \u0275\u0275element(178, "input", 31)(179, "i", 67);
      \u0275\u0275text(180, "Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "li")(182, "label", 64);
      \u0275\u0275element(183, "input", 31)(184, "i", 68);
      \u0275\u0275text(185, "Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "li")(187, "label", 64);
      \u0275\u0275element(188, "input", 31)(189, "i", 68);
      \u0275\u0275text(190, "Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(191, "div", 10)(192, "label", 69);
      \u0275\u0275text(193, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 70);
      \u0275\u0275element(195, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "div", 71)(197, "div", 72)(198, "div", 73)(199, "a", 74);
      \u0275\u0275text(200, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 73)(202, "button", 75);
      \u0275\u0275listener("click", function IncomesComponent_Template_button_click_202_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(203, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(204, "div", 76)(205, "div", 77)(206, "div", 78)(207, "div", 79)(208, "h4", 80);
      \u0275\u0275text(209, "Add New Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "button", 81);
      \u0275\u0275element(211, "i", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "form")(213, "div", 82)(214, "div", 83)(215, "div", 84)(216, "div", 10)(217, "label", 55);
      \u0275\u0275text(218, "Income ID ");
      \u0275\u0275elementStart(219, "span", 85);
      \u0275\u0275text(220, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(221, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 84)(223, "div", 10)(224, "label", 55);
      \u0275\u0275text(225, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(226, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 84)(228, "div", 10)(229, "label", 55);
      \u0275\u0275text(230, "Amount ");
      \u0275\u0275elementStart(231, "span", 85);
      \u0275\u0275text(232, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(233, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "div", 84)(235, "div", 10)(236, "label", 55);
      \u0275\u0275text(237, "Income Date ");
      \u0275\u0275elementStart(238, "span", 85);
      \u0275\u0275text(239, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "div", 87);
      \u0275\u0275element(241, "input", 88);
      \u0275\u0275elementStart(242, "span", 89);
      \u0275\u0275element(243, "i", 90);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(244, "div", 84)(245, "div", 10)(246, "label", 55);
      \u0275\u0275text(247, "Payment Mode ");
      \u0275\u0275elementStart(248, "span", 85);
      \u0275\u0275text(249, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "mat-select", 91)(251, "mat-option", 92);
      \u0275\u0275text(252, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "mat-option", 92);
      \u0275\u0275text(254, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "mat-option", 92);
      \u0275\u0275text(256, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "mat-option", 92);
      \u0275\u0275text(258, "Bank Transfer");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(259, "div", 84)(260, "div")(261, "label", 55);
      \u0275\u0275text(262, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(263, "textarea", 93);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(264, "div", 94)(265, "button", 95);
      \u0275\u0275text(266, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "button", 96);
      \u0275\u0275text(268, "Create ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(269, "div", 97)(270, "div", 77)(271, "div", 78)(272, "div", 79)(273, "h4", 80);
      \u0275\u0275text(274, "Edit Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "button", 81);
      \u0275\u0275element(276, "i", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "form")(278, "div", 82)(279, "div", 83)(280, "div", 84)(281, "div", 10)(282, "label", 55);
      \u0275\u0275text(283, "Income ID ");
      \u0275\u0275elementStart(284, "span", 85);
      \u0275\u0275text(285, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(286, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 84)(288, "div", 10)(289, "label", 55);
      \u0275\u0275text(290, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(291, "input", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "div", 84)(293, "div", 10)(294, "label", 55);
      \u0275\u0275text(295, "Amount ");
      \u0275\u0275elementStart(296, "span", 85);
      \u0275\u0275text(297, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(298, "input", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "div", 84)(300, "div", 10)(301, "label", 55);
      \u0275\u0275text(302, "Income Date ");
      \u0275\u0275elementStart(303, "span", 85);
      \u0275\u0275text(304, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "div", 101);
      \u0275\u0275element(306, "input", 102);
      \u0275\u0275elementStart(307, "span", 89);
      \u0275\u0275element(308, "i", 90);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(309, "div", 84)(310, "div", 10)(311, "label", 55);
      \u0275\u0275text(312, "Payment Mode ");
      \u0275\u0275elementStart(313, "span", 85);
      \u0275\u0275text(314, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(315, "mat-select", 103)(316, "mat-option", 92);
      \u0275\u0275text(317, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "mat-option", 92);
      \u0275\u0275text(319, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "mat-option", 92);
      \u0275\u0275text(321, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "mat-option", 92);
      \u0275\u0275text(323, "Bank Transfer");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(324, "div", 84)(325, "div")(326, "label", 55);
      \u0275\u0275text(327, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "textarea", 93);
      \u0275\u0275text(329, "Sale of laptops");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(330, "div", 94)(331, "button", 95);
      \u0275\u0275text(332, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "button", 96);
      \u0275\u0275text(334, "Save Changes ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(335, "div", 104)(336, "div", 105)(337, "div", 78)(338, "div", 79)(339, "h4", 80);
      \u0275\u0275text(340, "Income Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "button", 81);
      \u0275\u0275element(342, "i", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "form")(344, "div", 82)(345, "div", 83)(346, "div", 106)(347, "div", 10)(348, "p", 107);
      \u0275\u0275text(349, "Income ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "p");
      \u0275\u0275text(351, "INC00025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "div", 10)(353, "p", 107);
      \u0275\u0275text(354, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "p");
      \u0275\u0275text(356, "$10,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "div")(358, "p", 107);
      \u0275\u0275text(359, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "p");
      \u0275\u0275text(361, "Cash");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(362, "div", 106)(363, "div", 10)(364, "p", 107);
      \u0275\u0275text(365, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "p");
      \u0275\u0275text(367, "PO-202402-012");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(368, "div", 10)(369, "p", 107);
      \u0275\u0275text(370, "Expense Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "p");
      \u0275\u0275text(372, "22 Feb 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "div")(374, "p", 107);
      \u0275\u0275text(375, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "p");
      \u0275\u0275text(377, "Payment for raw materials");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(378, "div", 108)(379, "div", 109)(380, "div", 78)(381, "div", 110)(382, "div", 10);
      \u0275\u0275element(383, "img", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "h6", 112);
      \u0275\u0275text(385, "Delete Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "p", 10);
      \u0275\u0275text(387, "Are you sure, you want to delete income?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "div", 113)(389, "a", 114);
      \u0275\u0275text(390, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "a", 115);
      \u0275\u0275text(392, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(59);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 128 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(23);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DateRangePickerComponent, MatSliderModule, MatSlider, MatSliderThumb, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncomesComponent, [{
    type: Component,
    args: [{ selector: "app-incomes", imports: [
      CommonModule,
      DateRangePickerComponent,
      MatSliderModule,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule,
      MatSelectModule,
      BsDatepickerModule
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Income</h6>
        </div>
        <div class="my-xl-auto d-flex align-items-center gap-2">
            <div class="dropdown">
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
            
            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_income"><i class="isax isax-add-circle5 me-1"></i>New Income</a>
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
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center fw-medium" data-bs-toggle="dropdown">
                        <i class="isax isax-sort me-1"></i> Sort By : <span class="fw-normal ms-1">Latest</span>
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
                                <span>Reference Number</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Description</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
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
                    </ul>
                </div>
            </div>
        </div>				

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >1</span>Payment Mode Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->

    </div>
    <!-- End Table Search -->
    
    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead>
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th class="no-sort">ID</th>
                    <th mat-sort-header="dateRangePicker">Date</th>
                    <th class="no-sort">Reference Number</th>
                    <th class="no-sort">Description</th>
                    <th class="no-sort">Amount</th>
                    <th mat-sort-header="mode">Payment Mode</th>
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
                    <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#details_income">{{data.id}}</a></td>
                    <td>{{data.date}}</td>
                    <td>{{data.referenceNumber}}</td>
                    <td>{{data.description}}</td>
                    
                    <td>
                        <p class="text-dark">{{data.amount}}</p>
                    </td>
                    <td>
                        
                        <p class="text-dark">{{data.paymentMode}}</p>
                    </td>
                    
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#details_income"><i class="isax isax-eye me-2"></i>View</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_income"><i class="isax isax-edit me-2"></i>Edit</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download4 me-2"></i>Download</a>
                            </li>
                        </ul>
                    </td>
                </tr>
            }@if(tableData.length === 0){
                <tr>
                  <td colspan="12" class="text-center text-dark">No matching records found</td>
                </tr>
              }
            </tbody>
        </table>
    </div>
    <app-custom-pagination *ngIf="row"/>
    <!-- Table List End -->

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
                <label class="form-label">Payment Mode</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">	
                        <ul class="mb-3">
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Cash
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Cheque
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Paypal
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-purple me-1"></i>Bank Transfer
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-purple me-1"></i>Stripe
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
            <div class="offcanvas-footer">
                <div class="row g-2">
                    <div class="col-6">
                        <a href="javascript:void(0);"  class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
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
<div id="add_income" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Income</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Income ID <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Reference Number</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Income Date <span class="text-danger">*</span></label>
                                <div class="input-group position-relative mb-3 ngxdate">
                                    <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                                    <span class="input-icon-addon fs-16 text-gray-9">
                                        <i class="isax isax-calendar-2"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Payment Mode <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Cash</mat-option>
                                    <mat-option value="1">Cheque</mat-option>
                                    <mat-option value="1">Stripe</mat-option>
                                    <mat-option value="1">Bank Transfer</mat-option>
                                </mat-select>
                            </div>
                        </div> 
                        <div class="col-md-12">
                            <div>
                                <label class="form-label">Description</label>
                                <textarea class="form-control"></textarea>
                            </div>
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

<!-- Start Edit Modal  -->
<div id="edit_income" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Income</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Income ID <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="INC00025">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Reference Number</label>
                                <input type="text" class="form-control" value="REF17420">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="$10,000">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Income Date <span class="text-danger">*</span></label>
                                <div class="input-group position-relative mb-3 ngxdate1">
                                    <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate1" value="22 Feb 2025" placeholder="dd/mm/yyyy">
                                    <span class="input-icon-addon fs-16 text-gray-9">
                                        <i class="isax isax-calendar-2"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Payment Mode <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Cash">
                                    <mat-option value="1">Cash</mat-option>
                                    <mat-option value="1">Cheque</mat-option>
                                    <mat-option value="1">Stripe</mat-option>
                                    <mat-option value="1">Bank Transfer</mat-option>
                                </mat-select>
                            </div>
                        </div> 
                        <div class="col-md-12">
                            <div>
                                <label class="form-label">Description</label>
                                <textarea class="form-control">Sale of laptops</textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes </button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Edit Modal -->

<!-- Start Detail Modal  -->
<div id="details_income" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Income Details</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <p class="fw-semibold text-dark mb-0">Income ID</p>
                                <p>INC00025</p>
                            </div>
                            <div class="mb-3">
                                <p class="fw-semibold text-dark mb-0">Amount</p>
                                <p>$10,000</p>
                            </div>
                            <div>
                                <p class="fw-semibold text-dark mb-0">Payment Mode</p>
                                <p>Cash</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <p class="fw-semibold text-dark mb-0">Reference Number</p>
                                <p>PO-202402-012</p>
                            </div>
                            <div class="mb-3">
                                <p class="fw-semibold text-dark mb-0">Expense Date</p>
                                <p>22 Feb 2025</p>
                            </div>
                            <div>
                                <p class="fw-semibold text-dark mb-0">Description</p>
                                <p>Payment for raw materials</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Detail Modal -->

<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Income</h6>
                <p class="mb-3">Are you sure,  you want to delete income?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncomesComponent, { className: "IncomesComponent", filePath: "src/app/features/finance/incomes/incomes.component.ts", lineNumber: 24 });
})();
export {
  IncomesComponent
};
//# sourceMappingURL=chunk-UA4YBNNC.js.map
