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
  Router,
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass,
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/purchases/debit-notes/debit-note-list/debit-note-list.component.ts
var _c0 = () => ({ standalone: true });
function DebitNoteListComponent_For_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 151)(2, "div", 152)(3, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function DebitNoteListComponent_For_129_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 154);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 155)(11, "a", 156);
    \u0275\u0275element(12, "img", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h6", 158)(15, "a", 159);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(17, "td", 119);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 119);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 155)(23, "span", 160);
    \u0275\u0275text(24);
    \u0275\u0275element(25, "i", 161);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td", 162)(27, "a", 163);
    \u0275\u0275element(28, "i", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul", 6)(30, "li")(31, "a", 165);
    \u0275\u0275element(32, "i", 166);
    \u0275\u0275text(33, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li")(35, "a", 167);
    \u0275\u0275element(36, "i", 168);
    \u0275\u0275text(37, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "li")(39, "a", 169);
    \u0275\u0275element(40, "i", 170);
    \u0275\u0275text(41, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.date, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.vendor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paymentMode);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "badge-soft-warning" : data_r2.status === "Cancelled" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? " isax-timer" : data_r2.status === "Cancelled" ? " isax-close-circle4" : " isax-tick-circle4");
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", ctx_r2.routes.editDebitNotes);
  }
}
function DebitNoteListComponent_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 171);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function DebitNoteListComponent_app_custom_pagination_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var DebitNoteListComponent = class _DebitNoteListComponent {
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
    this.data.getdebitnotes().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.debitNoteList) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getdebitnotes().subscribe((apiRes) => {
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
  static \u0275fac = function DebitNoteListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DebitNoteListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebitNoteListComponent, selectors: [["app-debit-note-list"]], decls: 607, vars: 8, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "vendor"], ["mat-sort-header", "amount"], ["mat-sort-header", "tatus"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "view_notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-body"], [1, "d-flex", "mb-3", "pb-3", "align-items-center", "justify-content-between", "border-bottom"], [1, "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "text-danger", "bg-transparent", "border-0", "outline-0", "p-0", "lh-sm"], [1, "isax", "isax-close-circle5", "fs-16"], [1, "d-flex", "align-items-center", "justify-content-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-3"], [1, "isax", "isax-document-like", "me-1"], [1, "isax", "isax-message-notif", "me-1"], [1, "isax", "isax-printer", "me-1"], [1, "bg-light", "p-4", "rounded", "position-relative", "mb-3"], [1, "position-absolute", "top-0", "end-0"], ["src", "assets/img/bg/card-bg.png", "alt", "User Img"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "mb-3", "pb-2", "position-relative", "z-1"], [1, "mb-1"], [1, "me-4"], [1, "fs-14", "fw-semibold", "mb-1"], ["src", "assets/img/icons/not-paid.png", "alt", "User Img", "width", "48", "height", "48"], ["src", "assets/img/invoice-logo.svg", "alt", "img", 1, "invoice-logo-dark"], ["src", "assets/img/invoice-logo-white-2.svg", "alt", "img", 1, "invoice-logo-white"], [1, "row", "gy-3", "position-relative", "z-1"], [1, "col-lg-4"], [1, "mb-2", "fs-16", "fw-semibold"], [1, "text-dark"], [1, "badge", "bg-danger"], [1, "bg-white", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "me-2"], ["src", "assets/img/icons/timesquare-icon.svg", "alt", "image", 1, "img-fluid", "rounded"], [1, "fs-14", "fw-semibold"], [1, "table-responsive", "rounded", "border-bottom-0", "border"], [1, "table", "mb-0"], [1, "table-dark"], [1, "border-bottom", "mb-3"], [1, "row"], [1, "col-xl-8", "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "me-3"], [1, "mb-2"], ["src", "assets/img/icons/qr.png", "alt", "User Img"], [1, "col-xl-4", "col-lg-6"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "fs-14", "fw-semibold", "text-danger"], [1, "col-lg-7"], [1, "col-lg-5"], [1, "text-lg-end", "mb-3"], ["src", "assets/img/icons/sign.png", "alt", "img", 1, "sign-dark"], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "p-4", "rounded", "card-bg", "flex-wrap", "gap-2"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function DebitNoteListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Debit Notes ( Purchase Returns )");
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
      \u0275\u0275text(20, "New Debit Note");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function DebitNoteListComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DebitNoteListComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275elementStart(48, "div", 21)(49, "a", 26);
      \u0275\u0275element(50, "i", 27);
      \u0275\u0275text(51, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "ul", 28)(53, "li")(54, "label", 29);
      \u0275\u0275element(55, "i", 30)(56, "input", 31);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 29);
      \u0275\u0275element(61, "i", 30)(62, "input", 31);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 29);
      \u0275\u0275element(67, "i", 30)(68, "input", 31);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 29);
      \u0275\u0275element(73, "i", 30)(74, "input", 31);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 29);
      \u0275\u0275element(79, "i", 30)(80, "input", 32);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "li")(84, "label", 29);
      \u0275\u0275element(85, "i", 30)(86, "input", 32);
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(89, "div", 33)(90, "h6", 34);
      \u0275\u0275text(91, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 35)(93, "span", 36);
      \u0275\u0275text(94, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, "Vendors Selected");
      \u0275\u0275elementStart(96, "span", 37);
      \u0275\u0275element(97, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "span", 35)(99, "span", 36);
      \u0275\u0275text(100, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, "$10,000 - $25,500");
      \u0275\u0275elementStart(102, "span", 37);
      \u0275\u0275element(103, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "a", 39);
      \u0275\u0275text(105, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 40)(107, "div", 40)(108, "table", 41);
      \u0275\u0275listener("matSortChange", function DebitNoteListComponent_Template_table_matSortChange_108_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(109, "thead")(110, "tr")(111, "th", 42)(112, "div", 43);
      \u0275\u0275listener("click", function DebitNoteListComponent_Template_div_click_112_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(113, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function DebitNoteListComponent_Template_input_ngModelChange_113_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "th", 42);
      \u0275\u0275text(115, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 45);
      \u0275\u0275text(117, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 46);
      \u0275\u0275text(119, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 47);
      \u0275\u0275text(121, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th", 42);
      \u0275\u0275text(123, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th", 48);
      \u0275\u0275text(125, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(126, "th", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "tbody");
      \u0275\u0275repeaterCreate(128, DebitNoteListComponent_For_129_Template, 42, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(130, DebitNoteListComponent_Conditional_130_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(131, DebitNoteListComponent_app_custom_pagination_131_Template, 1, 0, "app-custom-pagination", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div", 50)(133, "div", 51)(134, "div", 52)(135, "h6", 53);
      \u0275\u0275text(136, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "button", 54);
      \u0275\u0275element(138, "i", 55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "div", 56)(140, "form", 57)(141, "div", 10)(142, "label", 58);
      \u0275\u0275text(143, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 21)(145, "a", 59);
      \u0275\u0275text(146, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 60)(148, "div", 10)(149, "div", 61)(150, "span", 62);
      \u0275\u0275element(151, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(152, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "ul", 10)(154, "li", 65)(155, "label", 66);
      \u0275\u0275element(156, "input", 67);
      \u0275\u0275text(157, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "a", 68);
      \u0275\u0275text(159, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "li")(161, "label", 69);
      \u0275\u0275element(162, "input", 32);
      \u0275\u0275elementStart(163, "span", 70);
      \u0275\u0275element(164, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(165, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "li")(167, "label", 69);
      \u0275\u0275element(168, "input", 32);
      \u0275\u0275elementStart(169, "span", 70);
      \u0275\u0275element(170, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(171, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "li")(173, "label", 69);
      \u0275\u0275element(174, "input", 32);
      \u0275\u0275elementStart(175, "span", 70);
      \u0275\u0275element(176, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(177, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "li")(179, "label", 69);
      \u0275\u0275element(180, "input", 32);
      \u0275\u0275elementStart(181, "span", 70);
      \u0275\u0275element(182, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(183, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "li")(185, "label", 69);
      \u0275\u0275element(186, "input", 32);
      \u0275\u0275elementStart(187, "span", 70);
      \u0275\u0275element(188, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(189, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "li")(191, "label", 69);
      \u0275\u0275element(192, "input", 32);
      \u0275\u0275elementStart(193, "span", 70);
      \u0275\u0275element(194, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(195, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(196, "div", 77)(197, "div", 78)(198, "a", 79);
      \u0275\u0275text(199, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div", 78)(201, "a", 80);
      \u0275\u0275text(202, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(203, "div", 10)(204, "label", 58);
      \u0275\u0275text(205, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 21)(207, "a", 59);
      \u0275\u0275text(208, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 60)(210, "div", 10)(211, "div", 61)(212, "span", 62);
      \u0275\u0275element(213, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "ul", 10)(216, "li", 65)(217, "label", 66);
      \u0275\u0275element(218, "input", 67);
      \u0275\u0275text(219, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "a", 68);
      \u0275\u0275text(221, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "label", 69);
      \u0275\u0275element(224, "input", 32);
      \u0275\u0275text(225, " Cah ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "li")(227, "label", 69);
      \u0275\u0275element(228, "input", 32);
      \u0275\u0275text(229, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li")(231, "label", 69);
      \u0275\u0275element(232, "input", 32);
      \u0275\u0275text(233, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "li")(235, "label", 69);
      \u0275\u0275element(236, "input", 32);
      \u0275\u0275text(237, " Bank Trnsfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "li")(239, "label", 69);
      \u0275\u0275element(240, "input", 32);
      \u0275\u0275text(241, " Stripe ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(242, "div", 77)(243, "div", 78)(244, "a", 79);
      \u0275\u0275text(245, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 78)(247, "a", 80);
      \u0275\u0275text(248, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(249, "div", 10)(250, "label", 58);
      \u0275\u0275text(251, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "div", 60)(253, "div", 81)(254, "div", 82)(255, "span", 83);
      \u0275\u0275text(256, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "span", 83);
      \u0275\u0275text(258, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "mat-slider", 84);
      \u0275\u0275element(260, "input", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "p");
      \u0275\u0275text(262, "Range : ");
      \u0275\u0275elementStart(263, "span", 86);
      \u0275\u0275text(264, "$200 - $5695");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(265, "div", 10)(266, "label", 87);
      \u0275\u0275text(267, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 88);
      \u0275\u0275element(269, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 10)(271, "label", 58);
      \u0275\u0275text(272, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 21)(274, "a", 59);
      \u0275\u0275text(275, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "div", 60)(277, "div", 10)(278, "div", 61)(279, "span", 62);
      \u0275\u0275element(280, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(281, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "ul", 10)(283, "li", 65)(284, "label", 66);
      \u0275\u0275element(285, "input", 67);
      \u0275\u0275text(286, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "a", 68);
      \u0275\u0275text(288, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "li")(290, "label", 69);
      \u0275\u0275element(291, "input", 32);
      \u0275\u0275text(292, " Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(293, "li")(294, "label", 69);
      \u0275\u0275element(295, "input", 32);
      \u0275\u0275text(296, " Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "li")(298, "label", 69);
      \u0275\u0275element(299, "input", 32);
      \u0275\u0275text(300, " Cancelled ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "div", 77)(302, "div", 78)(303, "a", 79);
      \u0275\u0275text(304, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "div", 78)(306, "a", 80);
      \u0275\u0275text(307, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(308, "div", 89)(309, "div", 77)(310, "div", 78)(311, "a", 90);
      \u0275\u0275text(312, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(313, "div", 78)(314, "button", 91);
      \u0275\u0275text(315, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(316, "div", 92)(317, "div", 93)(318, "div", 94)(319, "div", 95)(320, "div", 96)(321, "h5", 97);
      \u0275\u0275text(322, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "button", 98);
      \u0275\u0275element(324, "i", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "div")(326, "div", 100)(327, "div", 101)(328, "a", 102);
      \u0275\u0275element(329, "i", 103);
      \u0275\u0275text(330, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "a", 102);
      \u0275\u0275element(332, "i", 104);
      \u0275\u0275text(333, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "a", 102);
      \u0275\u0275element(335, "i", 105);
      \u0275\u0275text(336, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "div", 106)(338, "div", 107);
      \u0275\u0275element(339, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "div", 109)(341, "div", 10)(342, "h4", 110);
      \u0275\u0275text(343, "Debit Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "div", 101)(345, "div", 111)(346, "h6", 112);
      \u0275\u0275text(347, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "p");
      \u0275\u0275text(349, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "span");
      \u0275\u0275element(351, "img", 113);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(352, "div", 10);
      \u0275\u0275element(353, "img", 114)(354, "img", 115);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "div", 116)(356, "div", 117)(357, "div")(358, "h6", 118);
      \u0275\u0275text(359, "Debit Notes Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "div")(361, "p", 110);
      \u0275\u0275text(362, "Debit Note Id : ");
      \u0275\u0275elementStart(363, "span", 119);
      \u0275\u0275text(364, "9876543");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "p", 110);
      \u0275\u0275text(366, "Debit Note Date : ");
      \u0275\u0275elementStart(367, "span", 119);
      \u0275\u0275text(368, "25 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(369, "p", 110);
      \u0275\u0275text(370, "Due Date : ");
      \u0275\u0275elementStart(371, "span", 119);
      \u0275\u0275text(372, "31 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "span", 120);
      \u0275\u0275text(374, "Due in 8 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(375, "div", 117)(376, "div")(377, "h6", 118);
      \u0275\u0275text(378, "Billing From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "div")(380, "h6", 112);
      \u0275\u0275text(381, "Kanakku Invoice Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "p", 110);
      \u0275\u0275text(383, "15 Hodges Mews, HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "p", 110);
      \u0275\u0275text(385, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "p", 110);
      \u0275\u0275text(387, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "p", 110);
      \u0275\u0275text(389, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(390, "div", 117)(391, "div")(392, "h6", 118);
      \u0275\u0275text(393, "Billing To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "div", 121)(395, "div", 122)(396, "div", 123)(397, "span");
      \u0275\u0275element(398, "img", 124);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(399, "h6", 125);
      \u0275\u0275text(400, "Timesquare Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "p", 110);
      \u0275\u0275text(402, "299 Star Trek Drive, Florida, 3240, USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "p", 110);
      \u0275\u0275text(404, "Phone : +1 54664 75945");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "p", 110);
      \u0275\u0275text(406, "Email : info@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "p", 97);
      \u0275\u0275text(408, "GST : 243E45767889");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(409, "div", 10)(410, "h6", 10);
      \u0275\u0275text(411, "Product / Service Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "div", 126)(413, "table", 127)(414, "thead", 128)(415, "tr")(416, "th");
      \u0275\u0275text(417, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "th");
      \u0275\u0275text(419, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "th");
      \u0275\u0275text(421, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "th");
      \u0275\u0275text(423, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "th");
      \u0275\u0275text(425, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "th");
      \u0275\u0275text(427, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "th");
      \u0275\u0275text(429, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "th");
      \u0275\u0275text(431, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(432, "tbody")(433, "tr")(434, "td");
      \u0275\u0275text(435, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "td", 119);
      \u0275\u0275text(437, "T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "td");
      \u0275\u0275text(439, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "td");
      \u0275\u0275text(441, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "td");
      \u0275\u0275text(443, "$200.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "td");
      \u0275\u0275text(445, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "td");
      \u0275\u0275text(447, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "td");
      \u0275\u0275text(449, "$396.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(450, "tr")(451, "td");
      \u0275\u0275text(452, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "td", 119);
      \u0275\u0275text(454, "Office Chair");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "td");
      \u0275\u0275text(456, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "td");
      \u0275\u0275text(458, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "td");
      \u0275\u0275text(460, "$350.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "td");
      \u0275\u0275text(462, "5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "td");
      \u0275\u0275text(464, "$33.25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "td");
      \u0275\u0275text(466, "$365.75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(467, "tr")(468, "td");
      \u0275\u0275text(469, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "td", 119);
      \u0275\u0275text(471, "LED Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "td");
      \u0275\u0275text(473, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "td");
      \u0275\u0275text(475, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "td");
      \u0275\u0275text(477, "$399.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "td");
      \u0275\u0275text(479, "2%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "td");
      \u0275\u0275text(481, "$39.10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "td");
      \u0275\u0275text(483, "$398.90");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(484, "tr")(485, "td");
      \u0275\u0275text(486, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(487, "td", 119);
      \u0275\u0275text(488, "Smartphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "td");
      \u0275\u0275text(490, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "td");
      \u0275\u0275text(492, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "td");
      \u0275\u0275text(494, "$100.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "td");
      \u0275\u0275text(496, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "td");
      \u0275\u0275text(498, "$36.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "td");
      \u0275\u0275text(500, "$396.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(501, "div", 129)(502, "div", 130)(503, "div", 131)(504, "div", 132)(505, "div", 133)(506, "p", 134);
      \u0275\u0275text(507, "Scan to the pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "span");
      \u0275\u0275element(509, "img", 135);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(510, "div")(511, "h6", 134);
      \u0275\u0275text(512, "Bank Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(513, "div")(514, "p", 110);
      \u0275\u0275text(515, "Bank Name : ");
      \u0275\u0275elementStart(516, "span", 119);
      \u0275\u0275text(517, "ABC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(518, "p", 110);
      \u0275\u0275text(519, "Account Number : ");
      \u0275\u0275elementStart(520, "span", 119);
      \u0275\u0275text(521, "782459739212");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(522, "p", 110);
      \u0275\u0275text(523, "IFSC Code : ");
      \u0275\u0275elementStart(524, "span", 119);
      \u0275\u0275text(525, "ABC0001345");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(526, "p", 97);
      \u0275\u0275text(527, "Payment Reference : ");
      \u0275\u0275elementStart(528, "span", 119);
      \u0275\u0275text(529, "INV-20250220-001");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(530, "div", 136)(531, "div", 10)(532, "div", 65)(533, "h6", 125);
      \u0275\u0275text(534, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "h6", 125);
      \u0275\u0275text(536, "$1,793.12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(537, "div", 65)(538, "h6", 125);
      \u0275\u0275text(539, "CGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "h6", 125);
      \u0275\u0275text(541, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(542, "div", 65)(543, "h6", 125);
      \u0275\u0275text(544, "SGST (9%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "h6", 125);
      \u0275\u0275text(546, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(547, "div", 137)(548, "h6", 125);
      \u0275\u0275text(549, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "h6", 138);
      \u0275\u0275text(551, "$18");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(552, "div", 137)(553, "h6");
      \u0275\u0275text(554, "Total (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "h6");
      \u0275\u0275text(556, "$596");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(557, "div")(558, "h6", 112);
      \u0275\u0275text(559, "Total In Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(560, "p");
      \u0275\u0275text(561, "Five Hundred & Ninety Six Dollars");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(562, "div", 130)(563, "div", 139)(564, "div", 10)(565, "div", 10)(566, "h6", 112);
      \u0275\u0275text(567, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "p");
      \u0275\u0275text(569, "The Payment must be returned in the same condition.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(570, "div")(571, "h6", 112);
      \u0275\u0275text(572, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(573, "p");
      \u0275\u0275text(574, "All charges are final and include applicable taxes, fees, and additional costs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(575, "div", 140)(576, "div", 141)(577, "span");
      \u0275\u0275element(578, "img", 142);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(579, "h6", 112);
      \u0275\u0275text(580, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(581, "p");
      \u0275\u0275text(582, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(583, "div", 143)(584, "div")(585, "h6", 112);
      \u0275\u0275text(586, "Dreams Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "p");
      \u0275\u0275text(588, "15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(589, "div");
      \u0275\u0275element(590, "img", 114)(591, "img", 115);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(592, "div", 144)(593, "div", 145)(594, "div", 94)(595, "div", 146)(596, "div", 10);
      \u0275\u0275element(597, "img", 147);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "h6", 110);
      \u0275\u0275text(599, "Delete Debit Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "p", 10);
      \u0275\u0275text(601, "Are you sure, you want to delete Debit Notes?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "div", 148)(603, "a", 149);
      \u0275\u0275text(604, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "a", 150);
      \u0275\u0275text(606, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.addDebitNotes);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(83);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 130 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(128);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [
    DateRangePickerComponent,
    MatSliderModule,
    MatSlider,
    MatSliderThumb,
    CommonModule,
    NgClass,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    MatSortHeader,
    RouterLink
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebitNoteListComponent, [{
    type: Component,
    args: [{ selector: "app-debit-note-list", imports: [
      DateRangePickerComponent,
      MatSliderModule,
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      RouterLink
    ], template: `			<!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Debit Notes ( Purchase Returns )</h6>
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
                            <a [routerLink]="routes.addDebitNotes" class="btn btn-primary d-flex align-items-center"><i class="isax isax-add-circle5 me-1"></i>New Debit Note</a>
                        </div>
                    </div>
                </div>
                <!-- End Page Header -->

                <!-- Table Search Start -->
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
                                            <span>Vendor</span>
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
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Vendors Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>$10,000 - $25,500<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
                    </div>
                    <!-- /Filter Info -->

                </div>
                <!-- Table Search End -->

                <!-- Table List Start -->
                <div class="table-responsive">
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
                                    <th mat-sort-header="vendor">Vendor</th>
                                    <th mat-sort-header="amount">Amount</th>
                                    <th class="no-sort">Payment Mode</th>
                                    <th mat-sort-header="tatus">Status</th>
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
                                        <a href="javascript:void(0);" class="link-default">{{data.id}}</a>
                                    </td>
                                    <td>
                                        {{data.date}}
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                                            </a>
                                            <div>
                                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.vendor}}</a></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-dark">{{data.amount}}</td>
                                    <td class="text-dark">{{data.paymentMode}}</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span href="javascript:void(0);" class="badge badge-sm d-inline-flex align-items-center"
                                            [ngClass]="data.status==='Pending'?'badge-soft-warning':data.status==='Cancelled'?'badge-soft-danger':'badge-soft-success'">
                                                {{data.status}} 
                                                <i class="isax ms-1"
                                                [ngClass]="data.status==='Pending'?' isax-timer':data.status==='Cancelled'?' isax-close-circle4':' isax-tick-circle4'"></i>
                                            </span>
                                        </div>
                                    </td>
                                    <td class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="isax isax-more"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i class="isax isax-eye me-2"></i>View</a>
                                            </li>
                                            <li>
                                                <a [routerLink]="routes.editDebitNotes" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
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
                </div>
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
                        <label class="form-label">Vendor</label>
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
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Harris
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>David Anderson
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
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cah
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cheque
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Paypal
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Bank Trnsfer
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Stripe
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
                    <div class="mb-3">
                        <label for="dateRangePicker" class="form-label">Date Range</label>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Paid
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Pending
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cancelled
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
                    <div class="offcanvas-footer">
                        <div class="row g-2">
                            <div class="col-6">
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>
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
                                    <img src="assets/img/bg/card-bg.png" alt="User Img">
                                </div>
                                <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2 position-relative z-1">
                                    <div class="mb-3">
                                        <h4 class="mb-1">Debit Notes</h4>
                                        <div class="d-flex align-items-center flex-wrap row-gap-3">
                                            <div class="me-4">
                                                <h6 class="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                                <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                            </div>
                                            <span><img src="assets/img/icons/not-paid.png" alt="User Img" width="48" height="48"></span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
									    <img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
                                    </div>
                                </div>
                                <div class="row gy-3 position-relative z-1">
                                    <div class="col-lg-4">
                                        <div>
                                            <h6 class="mb-2 fs-16 fw-semibold">Debit Notes Details</h6>
                                            <div>
                                                <p class="mb-1">Debit Note Id : <span class="text-dark">9876543</span></p>
                                                <p class="mb-1">Debit Note Date : <span class="text-dark">25 Jan 2025</span></p>
                                                <p class="mb-1">Due Date : <span class="text-dark">31 Jan 2025</span></p>
                                                <span class="badge bg-danger">Due in 8 days</span>
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
                                                <span><img src="assets/img/icons/qr.png" alt="User Img"></span>
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
                                        <span><img src="assets/img/icons/sign.png" class="sign-dark" alt="img"></span>
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
                                    <img src="assets/img/invoice-logo.svg" class="invoice-logo-dark" alt="img">
									<img src="assets/img/invoice-logo-white-2.svg" class="invoice-logo-white" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End view notes -->

		<!-- Start delete modal -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Debit Notes</h6>
                        <p class="mb-3">Are you sure, you want to delete Debit Notes?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<!-- End delete modal -->
` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebitNoteListComponent, { className: "DebitNoteListComponent", filePath: "src/app/features/purchases/debit-notes/debit-note-list/debit-note-list.component.ts", lineNumber: 22 });
})();
export {
  DebitNoteListComponent
};
//# sourceMappingURL=chunk-RC3H5WVY.js.map
