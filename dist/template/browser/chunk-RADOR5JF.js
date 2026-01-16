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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/credit-notes/credit-note-list/credit-note-list.component.ts
var _c0 = () => ({ standalone: true });
function CreditNoteListComponent_For_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 150)(2, "div", 151)(3, "input", 152);
    \u0275\u0275twoWayListener("ngModelChange", function CreditNoteListComponent_For_136_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 153);
    \u0275\u0275text(6, "CN0014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 154)(9, "a", 155);
    \u0275\u0275element(10, "img", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 157)(13, "a", 158);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td", 84);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "a", 153);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 84);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 159);
    \u0275\u0275text(26);
    \u0275\u0275element(27, "i", 160);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 161)(29, "a", 162);
    \u0275\u0275element(30, "i", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul", 6)(32, "li")(33, "a", 164);
    \u0275\u0275element(34, "i", 165);
    \u0275\u0275text(35, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "li")(37, "a", 166);
    \u0275\u0275element(38, "i", 167);
    \u0275\u0275text(39, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li")(41, "a", 168);
    \u0275\u0275element(42, "i", 169);
    \u0275\u0275text(43, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "li")(45, "a", 170);
    \u0275\u0275element(46, "i", 171);
    \u0275\u0275text(47, "Send");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "li")(49, "a", 170);
    \u0275\u0275element(50, "i", 172);
    \u0275\u0275text(51, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(7);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.relatedTo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "badge-soft-warning" : data_r2.status === "Cancelled" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "isax-timer" : data_r2.status === "Cancelled" ? "isax-close-circle" : "isax-tick-circle");
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", ctx_r2.routes.editCreditNotes);
  }
}
function CreditNoteListComponent_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 173);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CreditNoteListComponent_app_custom_pagination_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CreditNoteListComponent = class _CreditNoteListComponent {
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
    this.data.getcreditnotes().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.creditNotes) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getcreditnotes().subscribe((apiRes) => {
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
  static \u0275fac = function CreditNoteListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreditNoteListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditNoteListComponent, selectors: [["app-credit-note-list"]], decls: 570, vars: 8, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "amount"], ["mat-sort-header", "created"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "mb-0"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "view_notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-body"], [1, "d-flex", "mb-3", "pb-3", "align-items-center", "justify-content-between", "border-bottom"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "text-danger", "bg-transparent", "border-0", "outline-0", "p-0", "lh-sm"], [1, "isax", "isax-close-circle5", "fs-16"], [1, "d-flex", "align-items-center", "justify-content-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", ""], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2", "position-relative", "z-1"], [1, "mb-1"], [1, "me-4"], [1, "fs-14", "fw-semibold", "mb-1"], ["src", "assets/img/icons/not-paid.png", "alt", "", "width", "48", "height", "48"], ["src", "assets/img/invoice-logo.svg", "alt", ""], [1, "row", "gy-3", "position-relative", "z-1"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "badge-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "me-2"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "fs-14", "fw-semibold"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table", "mb-0"], [1, "table-dark"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-8", "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "me-3"], [1, "mb-2"], ["src", "assets/img/icons/qr.png", "alt", ""], [1, "col-xl-4", "col-lg-6"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "col-lg-7"], [1, "col-lg-5"], [1, "text-lg-end", "mb-3"], ["src", "assets/img/icons/sign.png", "alt", ""], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg", "flex-wrap", "gap-2"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_notes", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_notes", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-2"], [1, "isax", "isax-document-download", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CreditNoteListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Credit Notes (Sales Returns)");
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
      \u0275\u0275elementStart(17, "div")(18, "a", 8);
      \u0275\u0275element(19, "i", 9);
      \u0275\u0275text(20, "New Credit Notes ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function CreditNoteListComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CreditNoteListComponent_Template_input_ngModelChange_30_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "a", 19);
      \u0275\u0275element(32, "i", 20);
      \u0275\u0275text(33, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 12)(35, "div", 21)(36, "a", 22);
      \u0275\u0275element(37, "i", 23);
      \u0275\u0275text(38, "Sort By : ");
      \u0275\u0275elementStart(39, "span", 24);
      \u0275\u0275text(40, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "ul", 25)(42, "li")(43, "a", 7);
      \u0275\u0275text(44, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 7);
      \u0275\u0275text(47, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 26)(49, "a", 27);
      \u0275\u0275element(50, "i", 28);
      \u0275\u0275text(51, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "ul", 29)(53, "li")(54, "label", 30);
      \u0275\u0275element(55, "i", 31)(56, "input", 32);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Credit Note ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 30);
      \u0275\u0275element(61, "i", 31)(62, "input", 32);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 30);
      \u0275\u0275element(67, "i", 31)(68, "input", 32);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 30);
      \u0275\u0275element(73, "i", 31)(74, "input", 33);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Related To");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 30);
      \u0275\u0275element(79, "i", 31)(80, "input", 32);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "li")(84, "label", 30);
      \u0275\u0275element(85, "i", 31)(86, "input", 33);
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "li")(90, "label", 30);
      \u0275\u0275element(91, "i", 31)(92, "input", 32);
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(95, "div", 34)(96, "h6", 35);
      \u0275\u0275text(97, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span", 36)(99, "span", 37);
      \u0275\u0275text(100, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, "Customers Selected");
      \u0275\u0275elementStart(102, "span", 38);
      \u0275\u0275element(103, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "span", 36)(105, "span", 37);
      \u0275\u0275text(106, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(107, "Status Selected");
      \u0275\u0275elementStart(108, "span", 38);
      \u0275\u0275element(109, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "a", 40);
      \u0275\u0275text(111, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 41)(113, "table", 42);
      \u0275\u0275listener("matSortChange", function CreditNoteListComponent_Template_table_matSortChange_113_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(114, "thead", 43)(115, "tr")(116, "th", 44)(117, "div", 45);
      \u0275\u0275listener("click", function CreditNoteListComponent_Template_div_click_117_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(118, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function CreditNoteListComponent_Template_input_ngModelChange_118_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "th", 44);
      \u0275\u0275text(120, "Credit Note ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 47);
      \u0275\u0275text(122, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 48);
      \u0275\u0275text(124, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th", 44);
      \u0275\u0275text(126, "Related To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 44);
      \u0275\u0275text(128, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 49);
      \u0275\u0275text(130, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th", 44);
      \u0275\u0275text(132, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(133, "th", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "tbody");
      \u0275\u0275repeaterCreate(135, CreditNoteListComponent_For_136_Template, 52, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(137, CreditNoteListComponent_Conditional_137_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(138, CreditNoteListComponent_app_custom_pagination_138_Template, 1, 0, "app-custom-pagination", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 51)(140, "div", 52)(141, "div", 53)(142, "h6", 54);
      \u0275\u0275text(143, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "button", 55);
      \u0275\u0275element(145, "i", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "div", 57)(147, "form")(148, "div", 10)(149, "label", 58);
      \u0275\u0275text(150, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 26)(152, "a", 59);
      \u0275\u0275text(153, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 60)(155, "div", 10)(156, "div", 61)(157, "span", 62);
      \u0275\u0275element(158, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(159, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "ul", 10)(161, "li", 65)(162, "label", 66);
      \u0275\u0275element(163, "input", 67);
      \u0275\u0275text(164, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "a", 68);
      \u0275\u0275text(166, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "li")(168, "label", 69);
      \u0275\u0275element(169, "input", 33);
      \u0275\u0275elementStart(170, "span", 70);
      \u0275\u0275element(171, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(172, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "li")(174, "label", 69);
      \u0275\u0275element(175, "input", 33);
      \u0275\u0275elementStart(176, "span", 70);
      \u0275\u0275element(177, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(178, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "li")(180, "label", 69);
      \u0275\u0275element(181, "input", 33);
      \u0275\u0275elementStart(182, "span", 70);
      \u0275\u0275element(183, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(184, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "li")(186, "label", 69);
      \u0275\u0275element(187, "input", 33);
      \u0275\u0275elementStart(188, "span", 70);
      \u0275\u0275element(189, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(190, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(191, "div", 75)(192, "div", 76)(193, "a", 77);
      \u0275\u0275text(194, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "div", 76)(196, "a", 78);
      \u0275\u0275text(197, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(198, "div", 10)(199, "label", 58);
      \u0275\u0275text(200, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 26)(202, "a", 59);
      \u0275\u0275text(203, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 60)(205, "div", 79)(206, "div", 80)(207, "span", 81);
      \u0275\u0275text(208, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "span", 81);
      \u0275\u0275text(210, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "mat-slider", 82);
      \u0275\u0275element(212, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "p");
      \u0275\u0275text(214, "Range : ");
      \u0275\u0275elementStart(215, "span", 84);
      \u0275\u0275text(216, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(217, "div", 10)(218, "label", 58);
      \u0275\u0275text(219, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 26)(221, "a", 59);
      \u0275\u0275text(222, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 60)(224, "ul", 85)(225, "li")(226, "label", 69);
      \u0275\u0275element(227, "input", 33);
      \u0275\u0275text(228, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "li")(230, "label", 69);
      \u0275\u0275element(231, "input", 33);
      \u0275\u0275text(232, " Check ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "li")(234, "label", 69);
      \u0275\u0275element(235, "input", 33);
      \u0275\u0275text(236, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "li")(238, "label", 69);
      \u0275\u0275element(239, "input", 33);
      \u0275\u0275text(240, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "li")(242, "label", 69);
      \u0275\u0275element(243, "input", 33);
      \u0275\u0275text(244, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(245, "div", 10)(246, "label", 58);
      \u0275\u0275text(247, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 86);
      \u0275\u0275element(249, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 10)(251, "label", 58);
      \u0275\u0275text(252, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 26)(254, "a", 59);
      \u0275\u0275text(255, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "div", 60)(257, "ul", 85)(258, "li")(259, "label", 69);
      \u0275\u0275element(260, "input", 33)(261, "i", 87);
      \u0275\u0275text(262, "Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "li")(264, "label", 69);
      \u0275\u0275element(265, "input", 33)(266, "i", 88);
      \u0275\u0275text(267, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "li")(269, "label", 69);
      \u0275\u0275element(270, "input", 33)(271, "i", 89);
      \u0275\u0275text(272, "Cancelled ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(273, "div", 90)(274, "div", 75)(275, "div", 76)(276, "a", 91);
      \u0275\u0275text(277, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "div", 76)(279, "button", 92);
      \u0275\u0275text(280, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(281, "div", 93)(282, "div", 94)(283, "div", 95)(284, "div", 96)(285, "div", 97)(286, "h5", 85);
      \u0275\u0275text(287, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "button", 98);
      \u0275\u0275element(289, "i", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "div")(291, "div", 100)(292, "div", 101)(293, "a", 102);
      \u0275\u0275element(294, "i", 103);
      \u0275\u0275text(295, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "a", 102);
      \u0275\u0275element(297, "i", 104);
      \u0275\u0275text(298, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "a", 102);
      \u0275\u0275element(300, "i", 105);
      \u0275\u0275text(301, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(302, "div", 106)(303, "div", 107);
      \u0275\u0275element(304, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "div", 109)(306, "div", 10)(307, "h4", 110);
      \u0275\u0275text(308, "Credit Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "div", 101)(310, "div", 111)(311, "h6", 112);
      \u0275\u0275text(312, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "p");
      \u0275\u0275text(314, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(315, "span");
      \u0275\u0275element(316, "img", 113);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "div", 10);
      \u0275\u0275element(318, "img", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "div", 115)(320, "div", 116)(321, "div")(322, "h6", 117);
      \u0275\u0275text(323, "Credit Notes Details Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "div")(325, "p", 110);
      \u0275\u0275text(326, "Credit Note Id : ");
      \u0275\u0275elementStart(327, "span", 118);
      \u0275\u0275text(328, "9876543");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "p", 110);
      \u0275\u0275text(330, "Credit Note Date : ");
      \u0275\u0275elementStart(331, "span", 118);
      \u0275\u0275text(332, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "p", 110);
      \u0275\u0275text(334, "Due Date : ");
      \u0275\u0275elementStart(335, "span", 118);
      \u0275\u0275text(336, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "span", 119);
      \u0275\u0275text(338, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(339, "div", 116)(340, "div")(341, "h6", 117);
      \u0275\u0275text(342, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "div")(344, "h6", 112);
      \u0275\u0275text(345, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "p", 110);
      \u0275\u0275text(347, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "p", 110);
      \u0275\u0275text(349, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "p", 110);
      \u0275\u0275text(351, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "p", 110);
      \u0275\u0275text(353, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(354, "div", 116)(355, "div")(356, "h6", 117);
      \u0275\u0275text(357, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 120)(359, "div", 121)(360, "div", 122)(361, "span");
      \u0275\u0275element(362, "img", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "h6", 124);
      \u0275\u0275text(364, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "p", 110);
      \u0275\u0275text(366, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "p", 110);
      \u0275\u0275text(368, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "p", 110);
      \u0275\u0275text(370, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "p", 85);
      \u0275\u0275text(372, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(373, "div", 10)(374, "h6", 10);
      \u0275\u0275text(375, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "div", 125)(377, "table", 126)(378, "thead", 127)(379, "tr")(380, "th");
      \u0275\u0275text(381, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "th");
      \u0275\u0275text(383, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "th");
      \u0275\u0275text(385, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "th");
      \u0275\u0275text(387, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "th");
      \u0275\u0275text(389, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "th");
      \u0275\u0275text(391, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "th");
      \u0275\u0275text(393, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "th");
      \u0275\u0275text(395, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(396, "tbody")(397, "tr")(398, "td");
      \u0275\u0275text(399, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "td", 118);
      \u0275\u0275text(401, "T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "td");
      \u0275\u0275text(403, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "td");
      \u0275\u0275text(405, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "td");
      \u0275\u0275text(407, "$200.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "td");
      \u0275\u0275text(409, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "td");
      \u0275\u0275text(411, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "td");
      \u0275\u0275text(413, "$396.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(414, "tr")(415, "td");
      \u0275\u0275text(416, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "td", 118);
      \u0275\u0275text(418, "Office Chair");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "td");
      \u0275\u0275text(420, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "td");
      \u0275\u0275text(422, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "td");
      \u0275\u0275text(424, "$350.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "td");
      \u0275\u0275text(426, "5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "td");
      \u0275\u0275text(428, "$33.25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "td");
      \u0275\u0275text(430, "$365.75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "tr")(432, "td");
      \u0275\u0275text(433, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "td", 118);
      \u0275\u0275text(435, "LED Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "td");
      \u0275\u0275text(437, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "td");
      \u0275\u0275text(439, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "td");
      \u0275\u0275text(441, "$399.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "td");
      \u0275\u0275text(443, "2%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "td");
      \u0275\u0275text(445, "$39.10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "td");
      \u0275\u0275text(447, "$398.90");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "tr")(449, "td");
      \u0275\u0275text(450, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "td", 118);
      \u0275\u0275text(452, "Smartphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "td");
      \u0275\u0275text(454, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "td");
      \u0275\u0275text(456, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "td");
      \u0275\u0275text(458, "$100.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "td");
      \u0275\u0275text(460, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "td");
      \u0275\u0275text(462, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "td");
      \u0275\u0275text(464, "$396.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(465, "div", 128)(466, "div", 129)(467, "div", 130)(468, "div", 131)(469, "div", 132)(470, "p", 133);
      \u0275\u0275text(471, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "span");
      \u0275\u0275element(473, "img", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(474, "div")(475, "h6", 133);
      \u0275\u0275text(476, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "div")(478, "p", 110);
      \u0275\u0275text(479, "Bank Name : ");
      \u0275\u0275elementStart(480, "span", 118);
      \u0275\u0275text(481, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(482, "p", 110);
      \u0275\u0275text(483, "Account Number : ");
      \u0275\u0275elementStart(484, "span", 118);
      \u0275\u0275text(485, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(486, "p", 110);
      \u0275\u0275text(487, "IFSC Code : ");
      \u0275\u0275elementStart(488, "span", 118);
      \u0275\u0275text(489, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "p", 85);
      \u0275\u0275text(491, "Payment Reference : ");
      \u0275\u0275elementStart(492, "span", 118);
      \u0275\u0275text(493, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(494, "div", 135)(495, "div", 10)(496, "div", 65)(497, "h6", 124);
      \u0275\u0275text(498, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "h6", 124);
      \u0275\u0275text(500, "$1,793.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "div", 65)(502, "h6", 124);
      \u0275\u0275text(503, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "h6", 124);
      \u0275\u0275text(505, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(506, "div", 65)(507, "h6", 124);
      \u0275\u0275text(508, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "h6", 124);
      \u0275\u0275text(510, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(511, "div", 136)(512, "h6", 124);
      \u0275\u0275text(513, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "h6", 137);
      \u0275\u0275text(515, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(516, "div", 136)(517, "h6");
      \u0275\u0275text(518, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "h6");
      \u0275\u0275text(520, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(521, "div")(522, "h6", 112);
      \u0275\u0275text(523, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "p");
      \u0275\u0275text(525, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(526, "div", 129)(527, "div", 138)(528, "div", 10)(529, "div", 10)(530, "h6", 112);
      \u0275\u0275text(531, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "p");
      \u0275\u0275text(533, "The Payment must be returned in the same condition.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "div")(535, "h6", 112);
      \u0275\u0275text(536, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "p");
      \u0275\u0275text(538, "All charges are final and include applicable taxes, fees, and additional costs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(539, "div", 139)(540, "div", 140)(541, "span");
      \u0275\u0275element(542, "img", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "h6", 112);
      \u0275\u0275text(544, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "p");
      \u0275\u0275text(546, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(547, "div", 142)(548, "div")(549, "h6", 112);
      \u0275\u0275text(550, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "p");
      \u0275\u0275text(552, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "div");
      \u0275\u0275element(554, "img", 114);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(555, "div", 143)(556, "div", 144)(557, "div", 95)(558, "div", 145)(559, "div", 10);
      \u0275\u0275element(560, "img", 146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(561, "h6", 110);
      \u0275\u0275text(562, "Delete Credits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "p", 10);
      \u0275\u0275text(564, "Are you sure, you want to delete credit?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "div", 147)(566, "a", 148);
      \u0275\u0275text(567, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "a", 149);
      \u0275\u0275text(569, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.addCreditNotes);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(88);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 137 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(73);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [DateRangePickerComponent, MatSliderModule, MatSlider, MatSliderThumb, CommonModule, NgClass, NgIf, CustomPaginationComponent, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditNoteListComponent, [{
    type: Component,
    args: [{ selector: "app-credit-note-list", imports: [DateRangePickerComponent, MatSliderModule, CommonModule, CustomPaginationComponent, RouterLink, FormsModule, MatSortModule], template: `			<!-- Start Container -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Credit Notes (Sales Returns)</h6>
                    </div>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
                        <div class="dropdown me-1">
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
                        <div>
                            <a [routerLink]="routes.addCreditNotes" class="btn btn-primary d-flex align-items-center">
                                <i class="isax isax-add-circle5 me-1"></i>New Credit Notes
                            </a>
                        </div>
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
                            <div class="dropdown me-2">
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
                                <ul class="dropdown-menu  dropdown-menu">
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Credit Note ID</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Customer</span>
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
                                            <span>Related To</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Payment Mode</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span>Created On</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Status</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Filter Info -->
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Customers Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Status Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
                    </div>
                    <!-- /Filter Info -->
                </div>
                <!-- End Table Search -->

                <!-- Start Table List -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead class="thead-light">
                            <tr>
                                <th class="no-sort">
                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                    </div>
                                </th>
                                <th class="no-sort">Credit Note ID</th>
                                <th mat-sort-header="customer">Customer</th>
                                <th mat-sort-header="amount">Amount</th>
                                <th class="no-sort">Related To</th>
                                <th class="no-sort">Payment Mode</th>
                                <th mat-sort-header="created">Created On</th>
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
                                <td>
                                    <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal" data-bs-target="#view_notes">CN0014</a>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                            <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                                        </a>
                                        <div>
                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.customer}}</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-gray-9">{{data.amount}}</td>
                                <td><a href="javascript:void(0);" class="link-default" data-bs-toggle="modal" data-bs-target="#view_notes">{{data.relatedTo}}</a></td>
                                <td class="text-gray-9">{{data.paymentMode}}</td>
                                <td>{{data.createdOn}}</td>
                                <td>
                                    <span class="badge d-inline-flex align-items-center"
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
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_notes"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a [routerLink]="routes.editCreditNotes" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Send</a>
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
                <app-custom-pagination *ngIf="row"></app-custom-pagination>
                <!-- End Table List -->

            </div>
			<!-- container -->


                    <!-- Start Filter -->
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
                                <ul class="mb-0">
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
                    <div class="mb-3">
                        <label class="form-label">Date Range</label>
                        <div class="filter-daterange">
                            <app-date-range-picker></app-date-range-picker>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Status</label>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <ul class="mb-0">
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Paid
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Pending
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Cancelled
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
                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Filter -->

        <!-- Start view notes -->
        <div class="modal fade" id="view_notes">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex mb-3 pb-3 align-items-center justify-content-between border-bottom">
                            <h5 class="mb-0">Preview</h5>
                            <button type="button" class="text-danger bg-transparent border-0 outline-0 p-0 lh-sm" data-bs-dismiss="modal" aria-label="Close">
                                <i class="isax isax-close-circle5 fs-16"></i>
                            </button>
                        </div>
                        <div>
                            <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
                                <div class="d-flex align-items-center flex-wrap row-gap-3">
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-document-like me-1"></i>Download PDF</a>
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-message-notif me-1"></i>Send Email</a>
                                    <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-3"><i class="isax isax-printer me-1"></i>Print</a>
                                </div>
                            </div>
                            <div class="bg-light p-4 rounded position-relative mb-3">
                                <div class="position-absolute top-0 end-0">
                                    <img src="assets/img/bg/card-bg.png" alt="">
                                </div>
                                <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2 position-relative z-1">
                                    <div class="mb-3">
                                        <h4 class="mb-1">Credit Notes</h4>
                                        <div class="d-flex align-items-center flex-wrap row-gap-3">
                                            <div class="me-4">
                                                <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                                <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                            </div>
                                            <span><img src="assets/img/icons/not-paid.png" alt="" width="48" height="48"></span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <img src="assets/img/invoice-logo.svg" alt="">
                                    </div>
                                </div>
                                <div class="row gy-3 position-relative z-1">
                                    <div class="col-lg-4">
                                        <div>
                                            <h6 class="mb-2 fs-16 fw-semibold">Credit Notes Details Details</h6>
                                            <div>
                                                <p class="mb-1">Credit Note Id : <span class="text-dark">9876543</span></p>
                                                <p class="mb-1">Credit Note Date : <span class="text-dark">25 Jan 2025</span></p>
                                                <p class="mb-1">Due Date : <span class="text-dark">31 Jan 2025</span></p>
                                                <span class="badge badge-danger">Due in 8 days</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div>
                                            <h6 class="mb-2 fs-16 fw-semibold">Billing From</h6>
                                            <div>
                                                <h6 class="fs-14 fw-semibold mb-1">Kanakku Invoice Management</h6>
                                                <p class="mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>
                                                <p class="mb-1">Phone : +1 54664 75945</p>
                                                <p class="mb-1">Email : info&#64;example.com</p>
                                                <p class="mb-1">GST : 243E45767889</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div>
                                            <h6 class="mb-2 fs-16 fw-semibold">Billing To</h6>
                                            <div class="bg-white rounded p-3">
                                                <div class="d-flex align-items-center mb-1">
                                                    <div class="me-2">
                                                        <span><img src="assets/img/icons/timesquare-icon.svg" alt="image" class="img-fluid rounded"></span>
                                                    </div>
                                                    <h6 class="fs-14 fw-semibold">Timesquare Tech</h6>
                                                </div>
                                                <p class="mb-1">299 Star Trek Drive, Florida, 3240, USA</p>
                                                <p class="mb-1">Phone : +1 54664 75945</p>
                                                <p class="mb-1">Email : info&#64;example.com</p>
                                                <p class="mb-0">GST : 243E45767889</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <h6 class="mb-3">Product / Service Items</h6>
                                <div class="table-responsive rounded border-bottom-0 border">
                                    <table class="table mb-0">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>#</th>
                                                <th>Product/Service</th>
                                                <th>Quantity</th>
                                                <th>Unit</th>
                                                <th>Rate</th>
                                                <th>Discount</th>
                                                <th>Tax (%)</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td class="text-dark">T-Shirt</td>
                                                <td>2</td>
                                                <td>Pcs</td>
                                                <td>$200.00</td>
                                                <td>10%</td>
                                                <td>$36.00</td>
                                                <td>$396.00</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td class="text-dark">Office Chair</td>
                                                <td>1</td>
                                                <td>Pcs</td>
                                                <td>$350.00</td>
                                                <td>5%</td>
                                                <td>$33.25</td>
                                                <td>$365.75</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td class="text-dark">LED Monitor</td>
                                                <td>1</td>
                                                <td>Pcs</td>
                                                <td>$399.00</td>
                                                <td>2%</td>
                                                <td>$39.10</td>
                                                <td>$398.90</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td class="text-dark">Smartphone</td>
                                                <td>4</td>
                                                <td>Pcs</td>
                                                <td>$100.00</td>
                                                <td>10%</td>
                                                <td>$36.00</td>
                                                <td>$396.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="border-bottom mb-3">
                                <div class="row">
                                    <div class="col-xl-8 col-lg-6">
                                        <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                                            <div class="me-3">
                                                <p class="mb-2">Scan to the pay</p>
                                                <span><img src="assets/img/icons/qr.png" alt=""></span>
                                            </div>
                                            <div>
                                                <h6 class="mb-2">Bank Details</h6>
                                                <div>
                                                    <p class="mb-1">Bank Name : <span class="text-dark">ABC Bank</span></p>
                                                    <p class="mb-1">Account Number : <span class="text-dark">782459739212</span></p>
                                                    <p class="mb-1">IFSC Code : <span class="text-dark">ABC0001345</span></p>
                                                    <p class="mb-0">Payment Reference : <span class="text-dark">INV-20250220-001</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6">
                                        <div class="mb-3">
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <h6 class="fs-14 fw-semibold">Amount</h6>
                                                <h6 class="fs-14 fw-semibold">$1,793.12</h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <h6 class="fs-14 fw-semibold">CGST (9%)</h6>
                                                <h6 class="fs-14 fw-semibold">$18</h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <h6 class="fs-14 fw-semibold">SGST (9%)</h6>
                                                <h6 class="fs-14 fw-semibold">$18</h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                                <h6 class="fs-14 fw-semibold">Discount</h6>
                                                <h6 class="fs-14 fw-semibold text-danger">$18</h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                                <h6>Total (USD)</h6>
                                                <h6>$596</h6>
                                            </div>
                                            <div>
                                                <h6 class="fs-14 fw-semibold mb-1">Total In Words</h6>
                                                <p>Five Hundred &amp; Ninety Six Dollars</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <h6 class="fs-14 fw-semibold mb-1">Terms and Conditions</h6>
                                            <p>The Payment must be returned in the same condition.</p>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Notes</h6>
                                            <p>All charges are final and include applicable taxes, fees, and additional costs</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="text-lg-end mb-3">
                                        <span><img src="assets/img/icons/sign.png" alt=""></span>
                                        <h6 class="fs-14 fw-semibold mb-1">Ted M. Davis</h6>
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light d-flex align-items-center justify-content-between p-4 rounded card-bg flex-wrap gap-2">
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                    <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                </div>
                                <div>
                                    <img src="assets/img/invoice-logo.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End view notes -->

        <!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Credits</h6>
                        <p class="mb-3">Are you sure, you want to delete credit?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditNoteListComponent, { className: "CreditNoteListComponent", filePath: "src/app/features/invantory-sales/credit-notes/credit-note-list/credit-note-list.component.ts", lineNumber: 20 });
})();
export {
  CreditNoteListComponent
};
//# sourceMappingURL=chunk-RADOR5JF.js.map
