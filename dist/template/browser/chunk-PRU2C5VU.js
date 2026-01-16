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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/finance/expense/expense.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function ExpenseComponent_For_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 135)(2, "div", 136)(3, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseComponent_For_143_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 138);
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
    \u0275\u0275elementStart(13, "td")(14, "a", 139);
    \u0275\u0275element(15, "i", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "p", 141);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "p", 141);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "span", 142);
    \u0275\u0275text(24);
    \u0275\u0275element(25, "i", 143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 144)(27, "a", 145);
    \u0275\u0275element(28, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul", 6)(30, "li")(31, "a", 147);
    \u0275\u0275element(32, "i", 148);
    \u0275\u0275text(33, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li")(35, "a", 149);
    \u0275\u0275element(36, "i", 150);
    \u0275\u0275text(37, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "li")(39, "a", 151);
    \u0275\u0275element(40, "i", 152);
    \u0275\u0275text(41, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "li")(43, "a", 153);
    \u0275\u0275element(44, "i", 154);
    \u0275\u0275text(45, "Download");
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
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "badge-soft-warning" : data_r2.status === "Cancelled" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "isax-timer" : data_r2.status === "Cancelled" ? "isax-close-circle" : "isax-tick-circle");
  }
}
function ExpenseComponent_Conditional_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 155);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function ExpenseComponent_app_custom_pagination_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var ExpenseComponent = class _ExpenseComponent {
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
    this.data.getExpensesList().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.expenses) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getExpensesList().subscribe((apiRes) => {
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
  static \u0275fac = function ExpenseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpenseComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseComponent, selectors: [["app-expense"]], decls: 508, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "my-xl-auto", "d-flex", "align-items-center", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_expence", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "pay"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-purple", "me-1"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_expence", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-md-12"], [1, "form-control"], [1, "row-gap-3", "bg-light", "w-100", "rounded", "p-3"], [1, "d-flex", "align-items-center", "justify-content-center", "me-2", "flex-shrink-0"], [1, "isax", "isax-folder-open", "fs-16", "text-primary"], [1, "profile-upload", "text-center"], [1, "profile-uploader", "d-flex", "align-items-center", "justify-content-center"], [1, "drag-upload-btn", "me-2", "text-dark", "bg-light", "border-0", "fw-normal", "fs-14"], [1, "text-primary", "border-bottom", "border-primary"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "fs-13"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_expence", 1, "modal", "fade"], ["type", "text", "value", "EXP00025", 1, "form-control"], ["type", "text", "value", "PO-202402-012", 1, "form-control"], ["type", "text", "value", "$10,000", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate1"], ["type", "text", "value", "22 Feb 2025", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], ["placeholder", "Cash", 1, "custom-mat-select", "select"], ["placeholder", "Paid", 1, "custom-mat-select", "select"], [1, "col-md-4"], [1, "border", "d-flex", "justify-content-between", "align-items-center", "rounded", "p-3"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/file.png", "alt", "User Img", 1, "me-2"], [1, "text-dark", "mb-1", "text-gray-9", "fw-medium"], [1, "avatar", "avatar-sm", "rounded-circle", "text-dark", "bg-light"], [1, "isax", "isax-trash"], ["id", "details_expense", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "flex-wrap", "gap-2"], [1, "fw-semibold", "text-dark", "mb-0"], [1, "text-dark", "mb-1"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "btn", "p-1", "bg-light", "text-dark", "d-inline-flex", "align-item-center", "justify-content-center"], [1, "isax", "isax-document-text5", "fs-12"], [1, "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", "badge-sm", "badge-sm", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#details_expense", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_expence", 1, "dropdown-item", "d-flex", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-document-download4", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function ExpenseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Expense");
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
      \u0275\u0275text(19, "New Expense");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "a", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 17)(28, "label")(29, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ExpenseComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ExpenseComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "a", 19);
      \u0275\u0275element(31, "i", 20);
      \u0275\u0275text(32, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 12)(34, "div", 3)(35, "a", 21);
      \u0275\u0275element(36, "i", 22);
      \u0275\u0275text(37, "Sort By : ");
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
      \u0275\u0275element(78, "i", 29)(79, "input", 30);
      \u0275\u0275elementStart(80, "span");
      \u0275\u0275text(81, "Attachment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "li")(83, "label", 28);
      \u0275\u0275element(84, "i", 29)(85, "input", 31);
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "li")(89, "label", 28);
      \u0275\u0275element(90, "i", 29)(91, "input", 31);
      \u0275\u0275elementStart(92, "span");
      \u0275\u0275text(93, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "li")(95, "label", 28);
      \u0275\u0275element(96, "i", 29)(97, "input", 31);
      \u0275\u0275elementStart(98, "span");
      \u0275\u0275text(99, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(100, "div", 32)(101, "h6", 33);
      \u0275\u0275text(102, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span", 34)(104, "span", 35);
      \u0275\u0275text(105, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, "Status Selected");
      \u0275\u0275elementStart(107, "span", 36);
      \u0275\u0275listener("click", function ExpenseComponent_Template_span_click_107_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(108, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "span", 34)(110, "span", 35);
      \u0275\u0275text(111, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(112, "$10,000 - $25,500");
      \u0275\u0275elementStart(113, "span", 36);
      \u0275\u0275listener("click", function ExpenseComponent_Template_span_click_113_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(114, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "a", 38);
      \u0275\u0275listener("click", function ExpenseComponent_Template_a_click_115_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(116, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 39)(118, "table", 40);
      \u0275\u0275listener("matSortChange", function ExpenseComponent_Template_table_matSortChange_118_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(119, "thead")(120, "tr")(121, "th", 41)(122, "div", 42);
      \u0275\u0275listener("click", function ExpenseComponent_Template_div_click_122_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(123, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ExpenseComponent_Template_input_ngModelChange_123_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "th", 41);
      \u0275\u0275text(125, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th", 44);
      \u0275\u0275text(127, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th", 41);
      \u0275\u0275text(129, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th", 41);
      \u0275\u0275text(131, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th", 41);
      \u0275\u0275text(133, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "th", 41);
      \u0275\u0275text(135, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "th", 45);
      \u0275\u0275text(137, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "th", 41);
      \u0275\u0275text(139, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(140, "th", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "tbody");
      \u0275\u0275repeaterCreate(142, ExpenseComponent_For_143_Template, 46, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(144, ExpenseComponent_Conditional_144_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(145, ExpenseComponent_app_custom_pagination_145_Template, 1, 0, "app-custom-pagination", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 47)(147, "div", 48)(148, "div", 49)(149, "h6", 50);
      \u0275\u0275text(150, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "button", 51);
      \u0275\u0275element(152, "i", 52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "div", 53)(154, "form", 54)(155, "div", 10)(156, "label", 55);
      \u0275\u0275text(157, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 3)(159, "a", 56);
      \u0275\u0275text(160, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 57)(162, "div", 58)(163, "div", 59)(164, "span", 60);
      \u0275\u0275text(165, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "span", 60);
      \u0275\u0275text(167, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "mat-slider", 61);
      \u0275\u0275element(169, "input", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p");
      \u0275\u0275text(171, "Range : ");
      \u0275\u0275elementStart(172, "span", 63);
      \u0275\u0275text(173, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(174, "div", 10)(175, "label", 55);
      \u0275\u0275text(176, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 3)(178, "a", 56);
      \u0275\u0275text(179, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 57)(181, "ul", 10)(182, "li")(183, "label", 64);
      \u0275\u0275element(184, "input", 30)(185, "i", 65);
      \u0275\u0275text(186, "Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "li")(188, "label", 64);
      \u0275\u0275element(189, "input", 31)(190, "i", 66);
      \u0275\u0275text(191, "Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "li")(193, "label", 64);
      \u0275\u0275element(194, "input", 31)(195, "i", 67);
      \u0275\u0275text(196, "Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "li")(198, "label", 64);
      \u0275\u0275element(199, "input", 31)(200, "i", 68);
      \u0275\u0275text(201, "Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "li")(203, "label", 64);
      \u0275\u0275element(204, "input", 31)(205, "i", 68);
      \u0275\u0275text(206, "Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(207, "div", 10)(208, "label", 69);
      \u0275\u0275text(209, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 70);
      \u0275\u0275element(211, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div")(213, "label", 55);
      \u0275\u0275text(214, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 3)(216, "a", 56);
      \u0275\u0275text(217, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "div", 57)(219, "ul", 10)(220, "li")(221, "label", 64);
      \u0275\u0275element(222, "input", 31)(223, "i", 65);
      \u0275\u0275text(224, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "li")(226, "label", 64);
      \u0275\u0275element(227, "input", 31)(228, "i", 67);
      \u0275\u0275text(229, "Inactive ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(230, "div", 71)(231, "div", 72)(232, "div", 73)(233, "a", 74);
      \u0275\u0275text(234, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "div", 73)(236, "button", 75);
      \u0275\u0275listener("click", function ExpenseComponent_Template_button_click_236_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(237, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(238, "div", 76)(239, "div", 77)(240, "div", 78)(241, "div", 79)(242, "h4", 80);
      \u0275\u0275text(243, "Add New Expense");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "button", 81);
      \u0275\u0275element(245, "i", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "form")(247, "div", 82)(248, "div", 83)(249, "div", 84)(250, "div", 10)(251, "label", 55);
      \u0275\u0275text(252, "Expense ID ");
      \u0275\u0275elementStart(253, "span", 85);
      \u0275\u0275text(254, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(255, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "div", 84)(257, "div", 10)(258, "label", 55);
      \u0275\u0275text(259, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(260, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 84)(262, "div", 10)(263, "label", 55);
      \u0275\u0275text(264, "Amount ");
      \u0275\u0275elementStart(265, "span", 85);
      \u0275\u0275text(266, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(267, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "div", 84)(269, "div", 10)(270, "label", 55);
      \u0275\u0275text(271, "Expense Date ");
      \u0275\u0275elementStart(272, "span", 85);
      \u0275\u0275text(273, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 87);
      \u0275\u0275element(275, "input", 88);
      \u0275\u0275elementStart(276, "span", 89);
      \u0275\u0275element(277, "i", 90);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(278, "div", 84)(279, "div", 10)(280, "label", 55);
      \u0275\u0275text(281, "Payment Mode ");
      \u0275\u0275elementStart(282, "span", 85);
      \u0275\u0275text(283, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "mat-select", 91)(285, "mat-option", 92);
      \u0275\u0275text(286, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "mat-option", 92);
      \u0275\u0275text(288, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "mat-option", 92);
      \u0275\u0275text(290, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "mat-option", 92);
      \u0275\u0275text(292, "Bank Transfer");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(293, "div", 84)(294, "div", 10)(295, "label", 55);
      \u0275\u0275text(296, "Payment Status ");
      \u0275\u0275elementStart(297, "span", 85);
      \u0275\u0275text(298, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "mat-select", 91)(300, "mat-option", 92);
      \u0275\u0275text(301, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "mat-option", 92);
      \u0275\u0275text(303, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "mat-option", 92);
      \u0275\u0275text(305, "Pending");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(306, "div", 93)(307, "div", 10)(308, "label", 55);
      \u0275\u0275text(309, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(310, "textarea", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "div", 93)(312, "div", 10)(313, "label", 55);
      \u0275\u0275text(314, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "div", 95)(316, "div", 96);
      \u0275\u0275element(317, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "div", 98)(319, "div", 99)(320, "div", 100);
      \u0275\u0275text(321, " Drop your files here or ");
      \u0275\u0275elementStart(322, "span", 101);
      \u0275\u0275text(323, "browse");
      \u0275\u0275elementEnd();
      \u0275\u0275element(324, "input", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "p", 103);
      \u0275\u0275text(326, "Maximum size : 50 MB");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(327, "div", 104)(328, "button", 105);
      \u0275\u0275text(329, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "button", 106);
      \u0275\u0275text(331, "Create ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(332, "div", 107)(333, "div", 77)(334, "div", 78)(335, "div", 79)(336, "h4", 80);
      \u0275\u0275text(337, "Edit Expense");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "button", 81);
      \u0275\u0275element(339, "i", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "form")(341, "div", 82)(342, "div", 83)(343, "div", 84)(344, "div", 10)(345, "label", 55);
      \u0275\u0275text(346, "Expense ID ");
      \u0275\u0275elementStart(347, "span", 85);
      \u0275\u0275text(348, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(349, "input", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "div", 84)(351, "div", 10)(352, "label", 55);
      \u0275\u0275text(353, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(354, "input", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "div", 84)(356, "div", 10)(357, "label", 55);
      \u0275\u0275text(358, "Amount ");
      \u0275\u0275elementStart(359, "span", 85);
      \u0275\u0275text(360, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(361, "input", 110);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(362, "div", 84)(363, "div", 10)(364, "label", 55);
      \u0275\u0275text(365, "Expense Date ");
      \u0275\u0275elementStart(366, "span", 85);
      \u0275\u0275text(367, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(368, "div", 111);
      \u0275\u0275element(369, "input", 112);
      \u0275\u0275elementStart(370, "span", 89);
      \u0275\u0275element(371, "i", 90);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(372, "div", 84)(373, "div", 10)(374, "label", 55);
      \u0275\u0275text(375, "Payment Mode ");
      \u0275\u0275elementStart(376, "span", 85);
      \u0275\u0275text(377, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(378, "mat-select", 113)(379, "mat-option", 92);
      \u0275\u0275text(380, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "mat-option", 92);
      \u0275\u0275text(382, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "mat-option", 92);
      \u0275\u0275text(384, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "mat-option", 92);
      \u0275\u0275text(386, "Bank Transfer");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(387, "div", 84)(388, "div", 10)(389, "label", 55);
      \u0275\u0275text(390, "Payment Status ");
      \u0275\u0275elementStart(391, "span", 85);
      \u0275\u0275text(392, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(393, "mat-select", 114)(394, "mat-option", 92);
      \u0275\u0275text(395, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "mat-option", 92);
      \u0275\u0275text(397, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "mat-option", 92);
      \u0275\u0275text(399, "Pending");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(400, "div", 93)(401, "div", 10)(402, "label", 55);
      \u0275\u0275text(403, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "textarea", 94);
      \u0275\u0275text(405, "Payment for raw materials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(406, "div", 93)(407, "div", 10)(408, "label", 55);
      \u0275\u0275text(409, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "div", 95)(411, "div", 96);
      \u0275\u0275element(412, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "div", 98)(414, "div", 99)(415, "div", 100);
      \u0275\u0275text(416, " Drop your files here or ");
      \u0275\u0275elementStart(417, "span", 101);
      \u0275\u0275text(418, "browse");
      \u0275\u0275elementEnd();
      \u0275\u0275element(419, "input", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "p", 103);
      \u0275\u0275text(421, "Maximum size : 50 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(422, "div", 115)(423, "div", 116)(424, "div", 117);
      \u0275\u0275element(425, "img", 118);
      \u0275\u0275elementStart(426, "div")(427, "p", 119);
      \u0275\u0275text(428, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "p", 103);
      \u0275\u0275text(430, "15.45 KB");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(431, "span", 120);
      \u0275\u0275element(432, "i", 121);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(433, "div", 104)(434, "button", 105);
      \u0275\u0275text(435, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "button", 106);
      \u0275\u0275text(437, "Save Changes ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(438, "div", 122)(439, "div", 123)(440, "div", 78)(441, "div", 79)(442, "h4", 80);
      \u0275\u0275text(443, "Expense Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "button", 81);
      \u0275\u0275element(445, "i", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(446, "form")(447, "div", 82)(448, "div", 124)(449, "div")(450, "p", 125);
      \u0275\u0275text(451, "Expense ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "p");
      \u0275\u0275text(453, "EXP00025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(454, "div")(455, "p", 125);
      \u0275\u0275text(456, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "p");
      \u0275\u0275text(458, "PO-202402-012");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(459, "div")(460, "p", 125);
      \u0275\u0275text(461, "Expense Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "p");
      \u0275\u0275text(463, "22 Feb 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(464, "div", 124)(465, "div")(466, "p", 125);
      \u0275\u0275text(467, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "p");
      \u0275\u0275text(469, "$10,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(470, "div")(471, "p", 125);
      \u0275\u0275text(472, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "p");
      \u0275\u0275text(474, "Cash");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(475, "div")(476, "p", 125);
      \u0275\u0275text(477, "Payment Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "p");
      \u0275\u0275text(479, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(480, "div", 10)(481, "p", 125);
      \u0275\u0275text(482, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "p");
      \u0275\u0275text(484, "Payment for raw materials");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(485, "div", 116)(486, "div", 117);
      \u0275\u0275element(487, "img", 118);
      \u0275\u0275elementStart(488, "div")(489, "p", 126);
      \u0275\u0275text(490, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "p", 103);
      \u0275\u0275text(492, "15.45 KB");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(493, "div", 127)(494, "div", 128)(495, "div", 78)(496, "div", 129)(497, "div", 10);
      \u0275\u0275element(498, "img", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "h6", 131);
      \u0275\u0275text(500, "Delete Expense");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "p", 10);
      \u0275\u0275text(502, "Are you sure, you want to delete expense?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "div", 132)(504, "a", 133);
      \u0275\u0275text(505, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "a", 134);
      \u0275\u0275text(507, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(71);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 144 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(23);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DateRangePickerComponent, MatSliderModule, MatSlider, MatSliderThumb, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseComponent, [{
    type: Component,
    args: [{ selector: "app-expense", imports: [
      CommonModule,
      DateRangePickerComponent,
      MatSliderModule,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule,
      MatSelectModule,
      BsDatepickerModule
    ], template: ` <!-- Start Content -->
 <div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Expense</h6>
        </div>
        <div class="my-xl-auto d-flex align-items-center gap-2">
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

            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_expence"><i class="isax isax-add-circle5 me-1"></i>New Expense</a>
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
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Attachment</span>
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
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >1</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
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
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th class="no-sort">ID</th>
                    <th mat-sort-header="date">Date</th>
                    <th class="no-sort">Reference Number</th>
                    <th class="no-sort">Description</th>
                    <th class="no-sort">Attachment</th>
                    <th class="no-sort">Amount</th>
                    <th mat-sort-header="pay">Payment Mode</th>
                    <th class="no-sort">Status</th>
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
                    <td><a href="javascript:void(0);">{{data.id}}</a></td>
                    <td>{{data.date}}</td>
                    <td>{{data.referenceNumber}}</td>
                    <td>{{data.description}}</td>
                    <td>
                        <a href="javascript:void(0);" class="btn p-1 bg-light text-dark d-inline-flex align-item-center justify-content-center"><i class="isax isax-document-text5 fs-12"></i></a>
                    </td>
                    <td>
                        <p class="text-dark">{{data.amount}}</p>
                    </td>
                    <td>

                        <p class="text-dark">{{data.paymentMode}}</p>
                    </td>
                    <td>
                        <span class="badge d-inline-flex align-items-center badge-sm badge-sm"
                        [ngClass]="data.status==='Pending'?'badge-soft-warning':data.status==='Cancelled'?'badge-soft-danger':'badge-soft-success'">
                        {{data.status}}
                        <i class="isax ms-1"
                        [ngClass]="data.status==='Pending'?'isax-timer':data.status==='Cancelled'?'isax-close-circle':'isax-tick-circle'"></i>
                    </span>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#details_expense"><i class="isax isax-eye me-2"></i>View</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_expence"><i class="isax isax-edit me-2"></i>Edit</a>
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
    <!-- end Table List -->

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
                <label for="dateRangePicker" class="form-label">Date Range</label>
                <div class="filter-daterange">
                    <app-date-range-picker></app-date-range-picker>
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


<!-- start Add Modal  -->
<div id="add_expence" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Expense</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Expense ID <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Reference Number</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Expense Date <span class="text-danger">*</span></label>
                                <div class="input-group position-relative mb-3 ngxdate">
                                    <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                                    <span class="input-icon-addon fs-16 text-gray-9">
                                        <i class="isax isax-calendar-2"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
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
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Payment Status <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Paid</mat-option>
                                    <mat-option value="1">Cancelled</mat-option>
                                    <mat-option value="1">Pending</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <textarea class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Attachment</label>
                                <div class="row-gap-3 bg-light w-100 rounded p-3">
                                    <div class="d-flex align-items-center justify-content-center me-2 flex-shrink-0">
                                        <i class="isax isax-folder-open fs-16  text-primary"></i>
                                    </div>
                                    <div class="profile-upload text-center">
                                        <div class="profile-uploader d-flex align-items-center justify-content-center">
                                            <div class="drag-upload-btn me-2 text-dark bg-light border-0 fw-normal fs-14">
                                                Drop your files here or <span class="text-primary border-bottom border-primary">browse</span>
                                                <input type="file" class="form-control image-sign" multiple="">
                                            </div>
                                        </div>
                                        <p class="fs-13">Maximum size : 50 MB</p>
                                    </div>
                                </div>
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
<!-- end Add Modal -->

<!-- start Edit Modal  -->
<div id="edit_expence" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Expense</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Expense ID <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="EXP00025">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Reference Number</label>
                                <input type="text" class="form-control" value="PO-202402-012">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="$10,000">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Expense Date <span class="text-danger">*</span></label>
                                <div class="input-group position-relative mb-3 ngxdate1">
                                    <input type="text" class="form-control datetimepicker rounded-end" value="22 Feb 2025" bsDatepicker container=".ngxdate1" placeholder="dd/mm/yyyy">
                                    <span class="input-icon-addon fs-16 text-gray-9">
                                        <i class="isax isax-calendar-2"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
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
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Payment Status <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Paid">
                                    <mat-option value="1">Paid</mat-option>
                                    <mat-option value="1">Cancelled</mat-option>
                                    <mat-option value="1">Pending</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <textarea class="form-control">Payment for raw materials</textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Attachment</label>
                                <div class="row-gap-3 bg-light w-100 rounded p-3">
                                    <div class="d-flex align-items-center justify-content-center me-2 flex-shrink-0">
                                        <i class="isax isax-folder-open fs-16  text-primary"></i>
                                    </div>
                                    <div class="profile-upload text-center">
                                        <div class="profile-uploader d-flex align-items-center justify-content-center">
                                            <div class="drag-upload-btn me-2 text-dark bg-light border-0 fw-normal fs-14">
                                                Drop your files here or <span class="text-primary border-bottom border-primary">browse</span>
                                                <input type="file" class="form-control image-sign" multiple="">
                                            </div>
                                        </div>
                                        <p class="fs-13">Maximum size : 50 MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="border d-flex justify-content-between align-items-center rounded p-3">
                                <div class="d-flex align-items-center">
                                    <img src="assets/img/icons/file.png" class="me-2" alt="User Img">
                                    <div>
                                        <p class="text-dark mb-1 text-gray-9 fw-medium">Attachment</p>
                                        <p class="fs-13">15.45 KB</p>
                                    </div>
                                </div>
                                <span class="avatar avatar-sm rounded-circle text-dark bg-light"><i class="isax isax-trash"></i></span>
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
<div id="details_expense" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Expense Details</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                        <div>
                            <p class="fw-semibold text-dark mb-0">Expense ID</p>
                            <p>EXP00025</p>
                        </div>
                        <div>
                            <p class="fw-semibold text-dark mb-0">Reference Number</p>
                            <p>PO-202402-012</p>
                        </div>
                        <div>
                            <p class="fw-semibold text-dark mb-0">Expense Date</p>
                            <p>22 Feb 2025</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                        <div>
                            <p class="fw-semibold text-dark mb-0">Amount</p>
                            <p>$10,000</p>
                        </div>
                        <div>
                            <p class="fw-semibold text-dark mb-0">Payment Mode</p>
                            <p>Cash</p>
                        </div>
                        <div>
                            <p class="fw-semibold text-dark mb-0">Payment Status</p>
                            <p>Paid</p>
                        </div>
                    </div>
                    <div class="mb-3">
                        <p class="fw-semibold text-dark mb-0">Description</p>
                        <p>Payment for raw materials</p>
                    </div>
                    <div class="border d-flex justify-content-between align-items-center rounded p-3">
                        <div class="d-flex align-items-center">
                            <img src="assets/img/icons/file.png" class="me-2" alt="User Img">
                            <div>
                                <p class="text-dark mb-1">Attachment</p>
                                <p class="fs-13">15.45 KB</p>
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
                <h6 class="mb-1">Delete Expense</h6>
                <p class="mb-3">Are you sure, you want to delete expense?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseComponent, { className: "ExpenseComponent", filePath: "src/app/features/finance/expense/expense.component.ts", lineNumber: 24 });
})();
export {
  ExpenseComponent
};
//# sourceMappingURL=chunk-PRU2C5VU.js.map
