import {
  DateRangePicker2Component
} from "./chunk-XI2R5BYV.js";
import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
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
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-M4MC2D7Y.js";
import "./chunk-UNWSAGEL.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import "./chunk-6H2KZBXU.js";
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
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/quotations/quotation-list/quotation-list.component.ts
var _c0 = () => ({ standalone: true });
function QuotationListComponent_For_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 94)(2, "div", 95)(3, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_For_100_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 97);
    \u0275\u0275text(6, "QU0014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 98)(9, "a", 99);
    \u0275\u0275element(10, "img", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 101)(13, "a", 102);
    \u0275\u0275text(14, "Emily Clark");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16, "22 Feb 2025");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 103);
    \u0275\u0275text(19);
    \u0275\u0275element(20, "i", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 105)(22, "a", 106);
    \u0275\u0275element(23, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 7)(25, "li")(26, "a", 108);
    \u0275\u0275element(27, "i", 109);
    \u0275\u0275text(28, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li")(30, "a", 110);
    \u0275\u0275element(31, "i", 111);
    \u0275\u0275text(32, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 112);
    \u0275\u0275element(35, "i", 113);
    \u0275\u0275text(36, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li")(38, "a", 108);
    \u0275\u0275element(39, "i", 114);
    \u0275\u0275text(40, "Convert to Invoice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "li")(42, "a", 108);
    \u0275\u0275element(43, "i", 115);
    \u0275\u0275text(44, "Mark as Sent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "li")(46, "a", 108);
    \u0275\u0275element(47, "i", 116);
    \u0275\u0275text(48, "Send");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "li")(50, "a", 108);
    \u0275\u0275element(51, "i", 117);
    \u0275\u0275text(52, "Clone as Invoice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "li")(54, "a", 108);
    \u0275\u0275element(55, "i", 118);
    \u0275\u0275text(56, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(7);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", data_r2.status === "Declined" ? "badge-soft-danger" : data_r2.status === "Sent" || data_r2.status === "Expired" ? "badge-soft-info" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Declined" ? "isax-close-circle" : data_r2.status === "Sent" ? "isax-arrow-right-2" : data_r2.status === "Expired" ? "isax-timer-pause" : "isax-tick-circle");
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", ctx_r2.routes.editQuotations);
  }
}
function QuotationListComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 119);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function QuotationListComponent_app_custom_pagination_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var QuotationListComponent = class _QuotationListComponent {
  data;
  router;
  pagination;
  routes = routes;
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
  showFilter = false;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  row = true;
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getquotation().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.quotationList) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getquotation().subscribe((apiRes) => {
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
  static \u0275fac = function QuotationListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuotationListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuotationListComponent, selectors: [["app-quotation-list"]], decls: 244, vars: 7, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap", "flex-lg-nowrap", "flex-md-nowrap"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "created"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-info", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-dark", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-semibold", "text-gray-5"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "me-3"], [1, "isax", "isax-close-circle5", "fs-36"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "custom-elipse"], [1, "fa-solid", "fa-ellipsis-vertical"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-arrow-right-2", "me-2"], [1, "isax", "isax-send-2", "me-2"], [1, "isax", "isax-copy", "me-2"], [1, "isax", "isax-document-download", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function QuotationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Quotations");
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
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div")(18, "a", 9);
      \u0275\u0275element(19, "i", 10);
      \u0275\u0275text(20, "New Quotations ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "a", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18)(29, "label")(30, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_30_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(31, "app-date-range-picker-2");
      \u0275\u0275elementStart(32, "a", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 22)(36, "div", 23)(37, "a", 24);
      \u0275\u0275element(38, "i", 25);
      \u0275\u0275text(39, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "ul", 26)(41, "li")(42, "label", 27);
      \u0275\u0275element(43, "i", 28)(44, "input", 29);
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "Account Holder Name");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "li")(48, "label", 27);
      \u0275\u0275element(49, "i", 28)(50, "input", 29);
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Bank & Account No");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "li")(54, "label", 27);
      \u0275\u0275element(55, "i", 28)(56, "input", 29);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Credit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 27);
      \u0275\u0275element(61, "i", 28)(62, "input", 30);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Debit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 27);
      \u0275\u0275element(67, "i", 28)(68, "input", 29);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Balance");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(71, "div", 31)(72, "h6", 32);
      \u0275\u0275text(73, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 33)(75, "span", 34);
      \u0275\u0275text(76, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(77, "Account Holders Selected");
      \u0275\u0275elementStart(78, "span", 35);
      \u0275\u0275element(79, "i", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "a", 37);
      \u0275\u0275text(81, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 38)(83, "table", 39);
      \u0275\u0275listener("matSortChange", function QuotationListComponent_Template_table_matSortChange_83_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(84, "thead", 40)(85, "tr")(86, "th", 41)(87, "div", 42);
      \u0275\u0275listener("click", function QuotationListComponent_Template_div_click_87_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(88, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_88_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "th", 41);
      \u0275\u0275text(90, "Quotation ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 44);
      \u0275\u0275text(92, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 45);
      \u0275\u0275text(94, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 41);
      \u0275\u0275text(96, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "th", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "tbody");
      \u0275\u0275repeaterCreate(99, QuotationListComponent_For_100_Template, 57, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(101, QuotationListComponent_Conditional_101_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(102, QuotationListComponent_app_custom_pagination_102_Template, 1, 0, "app-custom-pagination", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 47)(104, "div", 48)(105, "div", 49)(106, "h6", 50);
      \u0275\u0275text(107, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "button", 51);
      \u0275\u0275element(109, "i", 52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "div", 53)(111, "form")(112, "div", 11)(113, "label", 54);
      \u0275\u0275text(114, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 23)(116, "a", 55);
      \u0275\u0275text(117, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 56)(119, "div", 11)(120, "div", 57)(121, "span", 58);
      \u0275\u0275element(122, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275element(123, "input", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "ul", 11)(125, "li", 61)(126, "label", 62);
      \u0275\u0275element(127, "input", 63);
      \u0275\u0275text(128, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "a", 64);
      \u0275\u0275text(130, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "li")(132, "label", 65);
      \u0275\u0275element(133, "input", 30);
      \u0275\u0275elementStart(134, "span", 66);
      \u0275\u0275element(135, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275text(136, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "li")(138, "label", 65);
      \u0275\u0275element(139, "input", 30);
      \u0275\u0275elementStart(140, "span", 66);
      \u0275\u0275element(141, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275text(142, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "li")(144, "label", 65);
      \u0275\u0275element(145, "input", 30);
      \u0275\u0275elementStart(146, "span", 66);
      \u0275\u0275element(147, "img", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275text(148, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "li")(150, "label", 65);
      \u0275\u0275element(151, "input", 30);
      \u0275\u0275elementStart(152, "span", 66);
      \u0275\u0275element(153, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275text(154, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "div", 71)(156, "div", 72)(157, "a", 73);
      \u0275\u0275text(158, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 72)(160, "a", 74);
      \u0275\u0275text(161, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(162, "div", 11)(163, "label", 75);
      \u0275\u0275text(164, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 76);
      \u0275\u0275element(166, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 11)(168, "label", 54);
      \u0275\u0275text(169, "Quotation Id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 23)(171, "a", 55);
      \u0275\u0275text(172, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 56)(174, "div", 11)(175, "div", 57)(176, "span", 58);
      \u0275\u0275element(177, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275element(178, "input", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "ul", 11)(180, "li")(181, "label", 65);
      \u0275\u0275element(182, "input", 30);
      \u0275\u0275text(183, " QU0014 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "li")(185, "label", 65);
      \u0275\u0275element(186, "input", 30);
      \u0275\u0275text(187, " QU0013 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "li")(189, "label", 65);
      \u0275\u0275element(190, "input", 30);
      \u0275\u0275text(191, " QU0012 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "li")(193, "label", 65);
      \u0275\u0275element(194, "input", 30);
      \u0275\u0275text(195, " QU0011 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(196, "div", 11)(197, "label", 54);
      \u0275\u0275text(198, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 23)(200, "a", 55);
      \u0275\u0275text(201, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 56)(203, "ul", 11)(204, "li")(205, "label", 65);
      \u0275\u0275element(206, "input", 30)(207, "i", 77);
      \u0275\u0275text(208, "Accepted ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "li")(210, "label", 65);
      \u0275\u0275element(211, "input", 30)(212, "i", 78);
      \u0275\u0275text(213, "Declined ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "li")(215, "label", 65);
      \u0275\u0275element(216, "input", 30)(217, "i", 79);
      \u0275\u0275text(218, "Sent ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "li")(220, "label", 65);
      \u0275\u0275element(221, "input", 30)(222, "i", 80);
      \u0275\u0275text(223, "Expired ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(224, "div", 81)(225, "div", 71)(226, "div", 72)(227, "a", 82);
      \u0275\u0275text(228, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "div", 72)(230, "button", 83);
      \u0275\u0275text(231, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(232, "div", 84)(233, "div", 85)(234, "div", 86)(235, "div", 87)(236, "div", 88)(237, "span", 89);
      \u0275\u0275text(238, "Selected 1 Record");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "div", 90)(240, "a", 91);
      \u0275\u0275text(241, "Yes, Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "a", 92);
      \u0275\u0275element(243, "i", 93);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.addQuotations);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(58);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 101 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [DateRangePickerComponent, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgClass, NgIf, DateRangePicker2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuotationListComponent, [{
    type: Component,
    args: [{ selector: "app-quotation-list", imports: [
      DateRangePickerComponent,
      CustomPaginationComponent,
      MatSortModule,
      RouterLink,
      FormsModule,
      CommonModule,
      DateRangePicker2Component
    ], template: `<!-- Start Container -->
<div class="content-two">

    <!-- Start Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Quotations</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown me-1">
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
            <div>
                <a [routerLink]="routes.addQuotations" class="btn btn-primary d-flex align-items-center">
                    <i class="isax isax-add-circle5 me-1"></i>New Quotations
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->
    
    <!-- Table Search -->
    <div class="mb-3">

        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div class="d-flex align-items-center gap-2 flex-wrap flex-lg-nowrap flex-md-nowrap">
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
                                <span>Account Holder Name</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Bank & Account No</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Credit</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span>Debit</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Balance</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">6</span>Account Holders Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- /Table Search -->
    
    
    <!-- Table List -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th class="no-sort">Quotation ID</th>
                    <th mat-sort-header="customer">Customer</th>
                    <th mat-sort-header="created">Created On</th>
                    <th class="no-sort"	>Status</th>
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
                    <td>
                        <a href="javascript:void(0);" class="link-default">QU0014</a>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Emily Clark</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>22 Feb 2025</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center"
                        [ngClass]="data.status==='Declined'?'badge-soft-danger':data.status==='Sent'||data.status==='Expired'?'badge-soft-info':'badge-soft-success'">
                        {{data.status}} 
                        <i class="isax  ms-1"
                        [ngClass]="data.status==='Declined'?'isax-close-circle':data.status==='Sent'?'isax-arrow-right-2':data.status==='Expired'?'isax-timer-pause':'isax-tick-circle'"></i>
                    </span>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown" class="custom-elipse">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>
                            </li>
                            <li>
                                <a [routerLink]="routes.editQuotations" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-text-1 me-2"></i>Convert to Invoice</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-arrow-right-2 me-2"></i>Mark as Sent</a>
                            </li>                                        
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Send</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone as Invoice</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download</a>
                            </li>
                        </ul>
                    </td>
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
    <app-custom-pagination *ngIf="row"/>
    <!-- /Table List -->

</div>
<!-- End Container -->


		<!-- Filter -->
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
											<input class="form-check-input select-all m-0 me-2" type="checkbox">
											Select All
										</label>
										<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
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
						<label for="dateRangePicker" class="form-label">Date Range</label>
						<div class="filter-daterange">
                            <app-date-range-picker></app-date-range-picker>
                        </div>
					</div>	
					<div class="mb-3">
						<label class="form-label">Quotation Id</label>
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
											<input class="form-check-input m-0 me-2" type="checkbox">
											QU0014
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											QU0013
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											QU0012
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											QU0011
										</label>
									</li>
								</ul>
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
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-success me-1"></i>Accepted
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Declined
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-info me-1"></i>Sent
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<i class="fa-solid fa-circle fs-6 text-dark me-1"></i>Expired
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
								
					<div class="offcanvas-footer">
						<div class="row g-2">
							<div class="col-6">
								<a href="javascript:void(0);"  class="btn btn-outline-white w-100">Reset</a>
							</div>
							<div class="col-6">
								<button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<!-- /Filter -->

		<!-- Start Delete Modal  -->
		<div class="modal fade" id="delete_modal">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<div class="modal-content">
					<div class="modal-body text-center">
						<div class="d-flex align-items-center justify-content-between">
							<span class="fw-semibold text-gray-5">Selected 1 Record</span>
							<div class="d-flex align-items-center justify-content-center">
								<a href="javascript:void(0);" class="btn btn-danger me-2" data-bs-dismiss="modal">Yes, Delete</a>
								<a href="javascript:void(0);" class="me-3" data-bs-dismiss="modal"><i class="isax isax-close-circle5 fs-36"></i></a>
							</div>
						</div>
					</div><!-- End modal body-->
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- End Delete Modal  -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuotationListComponent, { className: "QuotationListComponent", filePath: "src/app/features/invantory-sales/quotations/quotation-list/quotation-list.component.ts", lineNumber: 22 });
})();
export {
  QuotationListComponent
};
//# sourceMappingURL=chunk-RLUZHCSL.js.map
