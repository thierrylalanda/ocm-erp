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
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-MR3VQUUR.js";
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/finance/payments/payments.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function PaymentsComponent_For_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 145)(2, "div", 146)(3, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentsComponent_For_120_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 131)(6, "a", 148);
    \u0275\u0275element(7, "img", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 150)(10, "a", 151);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td")(13, "a", 152);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 153);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 153);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 154)(22, "a", 155);
    \u0275\u0275element(23, "i", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 6)(25, "li")(26, "a", 157);
    \u0275\u0275element(27, "i", 158);
    \u0275\u0275text(28, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li")(30, "a", 159);
    \u0275\u0275element(31, "i", 160);
    \u0275\u0275text(32, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.paymentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paidDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paymentMethod);
  }
}
function PaymentsComponent_Conditional_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 161);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PaymentsComponent_app_custom_pagination_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PaymentsComponent = class _PaymentsComponent {
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
    this.data.getPaymentList().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.payments) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPaymentList().subscribe((apiRes) => {
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
  static \u0275fac = function PaymentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentsComponent, selectors: [["app-payments"]], decls: 571, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_payment", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], ["mat-sort-header", "pay"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "id", "close-filter", 1, "btn", "btn-outline-white", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_payment", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "input-group", "position-relative", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["type", "text", "value", "$5200", "readonly", "", 1, "form-control"], ["type", "text", "value", "$10000", "readonly", "", 1, "form-control"], [1, "col-lg-12"], ["rows", "3", 1, "form-control"], [1, "file-upload", "drag-file", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "d-block", "mb-2"], [1, "isax", "isax-image", "text-primary"], [1, "mb-0", "text-gray-9"], ["href", "javascript:void(0);", 1, "text-primary", "text-decoration-underline"], ["type", "file", "accept", "video/image"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_payment", 1, "modal", "fade"], ["type", "text", "value", "PAY00025", 1, "form-control"], ["placeholder", "Emily Clark", 1, "custom-mat-select", "select"], ["placeholder", "INC00025", 1, "custom-mat-select", "select"], ["type", "text", "value", "REF17420", 1, "form-control"], [1, "input-group", "position-relative", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "22 Feb 2025", 1, "form-control", "datetimepicker", "rounded-end"], ["placeholder", "Cash", 1, "custom-mat-select", "select"], ["type", "text", "value", "$4800", 1, "form-control"], [1, "col-4"], [1, "p-3", "border", "rounded-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/document-icon.svg", "alt", "document-icon"], [1, "ms-2"], [1, "text-dark", "fw-medium", "mb-0"], [1, "avatar", "avatar-sm", "bg-light", "text-dark", "rounded-circle"], [1, "isax", "isax-trash"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], ["href", "javascript:void(0);", 1, "link-default"], [1, "text-dark"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_payment", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PaymentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Payments");
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
      \u0275\u0275text(20, "New payment ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function PaymentsComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PaymentsComponent_Template_input_ngModelChange_30_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "a", 19);
      \u0275\u0275element(32, "i", 20);
      \u0275\u0275text(33, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 12)(35, "div", 3)(36, "a", 21);
      \u0275\u0275element(37, "i", 22);
      \u0275\u0275text(38, "Sort By : ");
      \u0275\u0275elementStart(39, "span", 23);
      \u0275\u0275text(40, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "ul", 24)(42, "li")(43, "a", 7);
      \u0275\u0275text(44, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 7);
      \u0275\u0275text(47, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 3)(49, "a", 25);
      \u0275\u0275element(50, "i", 26);
      \u0275\u0275text(51, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "ul", 27)(53, "li")(54, "label", 28);
      \u0275\u0275element(55, "i", 29)(56, "input", 30);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Cusomer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 28);
      \u0275\u0275element(61, "i", 29)(62, "input", 30);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Payment ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 28);
      \u0275\u0275element(67, "i", 29)(68, "input", 30);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Paid Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 28);
      \u0275\u0275element(73, "i", 29)(74, "input", 30);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 28);
      \u0275\u0275element(79, "i", 29)(80, "input", 31);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Payment Mode");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(83, "div", 32)(84, "h6", 33);
      \u0275\u0275text(85, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span", 34)(87, "span", 35);
      \u0275\u0275text(88, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, "Customers Selected");
      \u0275\u0275elementStart(90, "span", 36);
      \u0275\u0275listener("click", function PaymentsComponent_Template_span_click_90_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(91, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "span", 34)(93, "span", 35);
      \u0275\u0275text(94, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, "$10,000 - $25,500");
      \u0275\u0275elementStart(96, "span", 36);
      \u0275\u0275listener("click", function PaymentsComponent_Template_span_click_96_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(97, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "a", 38);
      \u0275\u0275listener("click", function PaymentsComponent_Template_a_click_98_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(99, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 39)(101, "table", 40);
      \u0275\u0275listener("matSortChange", function PaymentsComponent_Template_table_matSortChange_101_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(102, "thead", 41)(103, "tr")(104, "th", 42)(105, "div", 43);
      \u0275\u0275listener("click", function PaymentsComponent_Template_div_click_105_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(106, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function PaymentsComponent_Template_input_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "th", 42);
      \u0275\u0275text(108, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 42);
      \u0275\u0275text(110, "Payment ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 45);
      \u0275\u0275text(112, "Paid Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 46);
      \u0275\u0275text(114, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 47);
      \u0275\u0275text(116, "Payment method");
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "th", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "tbody");
      \u0275\u0275repeaterCreate(119, PaymentsComponent_For_120_Template, 33, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(121, PaymentsComponent_Conditional_121_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(122, PaymentsComponent_app_custom_pagination_122_Template, 1, 0, "app-custom-pagination", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 49)(124, "div", 50)(125, "div", 51)(126, "h6", 52);
      \u0275\u0275text(127, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "button", 53);
      \u0275\u0275element(129, "i", 54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 55)(131, "form", 56)(132, "div", 10)(133, "label", 57);
      \u0275\u0275text(134, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 3)(136, "a", 58);
      \u0275\u0275text(137, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 59)(139, "div", 10)(140, "div", 60)(141, "span", 61);
      \u0275\u0275element(142, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275element(143, "input", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "ul", 10)(145, "li", 64)(146, "label", 65);
      \u0275\u0275element(147, "input", 66);
      \u0275\u0275text(148, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "a", 67);
      \u0275\u0275text(150, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "li")(152, "label", 68);
      \u0275\u0275element(153, "input", 31);
      \u0275\u0275elementStart(154, "span", 69);
      \u0275\u0275element(155, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275text(156, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "li")(158, "label", 68);
      \u0275\u0275element(159, "input", 31);
      \u0275\u0275elementStart(160, "span", 69);
      \u0275\u0275element(161, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(162, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "li")(164, "label", 68);
      \u0275\u0275element(165, "input", 31);
      \u0275\u0275elementStart(166, "span", 69);
      \u0275\u0275element(167, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(168, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "li")(170, "label", 68);
      \u0275\u0275element(171, "input", 31);
      \u0275\u0275elementStart(172, "span", 69);
      \u0275\u0275element(173, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(174, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "div", 74)(176, "div", 75)(177, "a", 76);
      \u0275\u0275text(178, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 75)(180, "a", 77);
      \u0275\u0275text(181, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(182, "div", 10)(183, "label", 57);
      \u0275\u0275text(184, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 3)(186, "a", 58);
      \u0275\u0275text(187, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 59)(189, "div", 78)(190, "div", 79)(191, "span", 80);
      \u0275\u0275text(192, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "span", 80);
      \u0275\u0275text(194, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "mat-slider", 81);
      \u0275\u0275element(196, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "p");
      \u0275\u0275text(198, "Range : ");
      \u0275\u0275elementStart(199, "span", 83);
      \u0275\u0275text(200, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(201, "div", 10)(202, "label", 57);
      \u0275\u0275text(203, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 3)(205, "a", 58);
      \u0275\u0275text(206, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "div", 59)(208, "div", 10)(209, "div", 60)(210, "span", 61);
      \u0275\u0275element(211, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275element(212, "input", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "ul", 10)(214, "li", 64)(215, "label", 65);
      \u0275\u0275element(216, "input", 66);
      \u0275\u0275text(217, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "a", 67);
      \u0275\u0275text(219, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "li")(221, "label", 68);
      \u0275\u0275element(222, "input", 31);
      \u0275\u0275text(223, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "li")(225, "label", 68);
      \u0275\u0275element(226, "input", 31);
      \u0275\u0275text(227, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "li")(229, "label", 68);
      \u0275\u0275element(230, "input", 31);
      \u0275\u0275text(231, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "li")(233, "label", 68);
      \u0275\u0275element(234, "input", 31);
      \u0275\u0275text(235, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 68);
      \u0275\u0275element(238, "input", 31);
      \u0275\u0275text(239, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(240, "div", 10)(241, "label", 84);
      \u0275\u0275text(242, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 85);
      \u0275\u0275element(244, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 86)(246, "div", 74)(247, "div", 75)(248, "a", 87);
      \u0275\u0275text(249, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 75)(251, "button", 88);
      \u0275\u0275listener("click", function PaymentsComponent_Template_button_click_251_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(252, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(253, "div", 89)(254, "div", 90)(255, "div", 91)(256, "div", 92)(257, "h4", 93);
      \u0275\u0275text(258, "Add New Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "button", 94);
      \u0275\u0275element(260, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "form")(262, "div", 95)(263, "div", 96)(264, "div", 97)(265, "div", 10)(266, "label", 57);
      \u0275\u0275text(267, "Payment ID ");
      \u0275\u0275elementStart(268, "span", 98);
      \u0275\u0275text(269, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(270, "input", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "div", 97)(272, "div", 10)(273, "label", 57);
      \u0275\u0275text(274, "Customer ");
      \u0275\u0275elementStart(275, "span", 98);
      \u0275\u0275text(276, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "mat-select", 100)(278, "mat-option", 101);
      \u0275\u0275text(279, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "mat-option", 101);
      \u0275\u0275text(281, "Emily Clark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "mat-option", 101);
      \u0275\u0275text(283, "John Carter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "mat-option", 101);
      \u0275\u0275text(285, "Sophia White");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "mat-option", 101);
      \u0275\u0275text(287, "Michael Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "mat-option", 101);
      \u0275\u0275text(289, "Olivia Harris");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "mat-option", 101);
      \u0275\u0275text(291, "David Anderson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "mat-option", 101);
      \u0275\u0275text(293, "Emma Lewis");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(294, "div", 97)(295, "div", 10)(296, "label", 57);
      \u0275\u0275text(297, "Invoice ID ");
      \u0275\u0275elementStart(298, "span", 98);
      \u0275\u0275text(299, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "mat-select", 100)(301, "mat-option", 101);
      \u0275\u0275text(302, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "mat-option", 101);
      \u0275\u0275text(304, "INC00025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "mat-option", 101);
      \u0275\u0275text(306, "INC00024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "mat-option", 101);
      \u0275\u0275text(308, "INC00023");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "mat-option", 101);
      \u0275\u0275text(310, "INC00022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "mat-option", 101);
      \u0275\u0275text(312, "INC00021");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "mat-option", 101);
      \u0275\u0275text(314, "INC00020");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "mat-option", 101);
      \u0275\u0275text(316, "INC00019");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(317, "div", 97)(318, "div", 10)(319, "label", 57);
      \u0275\u0275text(320, "Reference Number ");
      \u0275\u0275elementStart(321, "span", 98);
      \u0275\u0275text(322, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(323, "input", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "div", 97)(325, "div", 10)(326, "label", 57);
      \u0275\u0275text(327, "Payment Date ");
      \u0275\u0275elementStart(328, "span", 98);
      \u0275\u0275text(329, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "div", 102);
      \u0275\u0275element(331, "input", 103);
      \u0275\u0275elementStart(332, "span", 104);
      \u0275\u0275element(333, "i", 105);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(334, "div", 97)(335, "div", 10)(336, "label", 57);
      \u0275\u0275text(337, "Payment Mode ");
      \u0275\u0275elementStart(338, "span", 98);
      \u0275\u0275text(339, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "mat-select", 100)(341, "mat-option", 101);
      \u0275\u0275text(342, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "mat-option", 101);
      \u0275\u0275text(344, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "mat-option", 101);
      \u0275\u0275text(346, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "mat-option", 101);
      \u0275\u0275text(348, "Bank Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "mat-option", 101);
      \u0275\u0275text(350, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "mat-option", 101);
      \u0275\u0275text(352, "Stripe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(353, "div", 97)(354, "div", 10)(355, "label", 57);
      \u0275\u0275text(356, "Amount ");
      \u0275\u0275elementStart(357, "span", 98);
      \u0275\u0275text(358, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(359, "input", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "div", 97)(361, "div", 10)(362, "label", 57);
      \u0275\u0275text(363, "Paid Amount ");
      \u0275\u0275elementStart(364, "span", 98);
      \u0275\u0275text(365, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(366, "input", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "div", 97)(368, "div", 10)(369, "label", 57);
      \u0275\u0275text(370, "Due Amount ");
      \u0275\u0275elementStart(371, "span", 98);
      \u0275\u0275text(372, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(373, "input", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "div", 108)(375, "div", 10)(376, "label", 57);
      \u0275\u0275text(377, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(378, "textarea", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(379, "div", 108)(380, "div")(381, "label", 57);
      \u0275\u0275text(382, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "div", 110)(384, "span", 111);
      \u0275\u0275element(385, "i", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "p", 113);
      \u0275\u0275text(387, "Drop your files here or ");
      \u0275\u0275elementStart(388, "a", 114);
      \u0275\u0275text(389, " Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(390, "input", 115);
      \u0275\u0275elementStart(391, "p");
      \u0275\u0275text(392, "Maximum size : 50 MB");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(393, "div", 116)(394, "button", 117);
      \u0275\u0275text(395, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "button", 118);
      \u0275\u0275text(397, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(398, "div", 119)(399, "div", 90)(400, "div", 91)(401, "div", 92)(402, "h4", 93);
      \u0275\u0275text(403, "Edit Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "button", 94);
      \u0275\u0275element(405, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(406, "form")(407, "div", 95)(408, "div", 96)(409, "div", 97)(410, "div", 10)(411, "label", 57);
      \u0275\u0275text(412, "Payment ID ");
      \u0275\u0275elementStart(413, "span", 98);
      \u0275\u0275text(414, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(415, "input", 120);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "div", 97)(417, "div", 10)(418, "label", 57);
      \u0275\u0275text(419, "Customer ");
      \u0275\u0275elementStart(420, "span", 98);
      \u0275\u0275text(421, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(422, "mat-select", 121)(423, "mat-option", 101);
      \u0275\u0275text(424, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "mat-option", 101);
      \u0275\u0275text(426, "Emily Clark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "mat-option", 101);
      \u0275\u0275text(428, "John Carter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "mat-option", 101);
      \u0275\u0275text(430, "Sophia White");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "mat-option", 101);
      \u0275\u0275text(432, "Michael Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "mat-option", 101);
      \u0275\u0275text(434, "Olivia Harris");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "mat-option", 101);
      \u0275\u0275text(436, "David Anderson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "mat-option", 101);
      \u0275\u0275text(438, "Emma Lewis");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(439, "div", 97)(440, "div", 10)(441, "label", 57);
      \u0275\u0275text(442, "Invoice ID ");
      \u0275\u0275elementStart(443, "span", 98);
      \u0275\u0275text(444, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "mat-select", 122)(446, "mat-option", 101);
      \u0275\u0275text(447, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "mat-option", 101);
      \u0275\u0275text(449, "INC00025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "mat-option", 101);
      \u0275\u0275text(451, "INC00024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "mat-option", 101);
      \u0275\u0275text(453, "INC00023");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "mat-option", 101);
      \u0275\u0275text(455, "INC00022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "mat-option", 101);
      \u0275\u0275text(457, "INC00021");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "mat-option", 101);
      \u0275\u0275text(459, "INC00020");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "mat-option", 101);
      \u0275\u0275text(461, "INC00019");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(462, "div", 97)(463, "div", 10)(464, "label", 57);
      \u0275\u0275text(465, "Reference Number ");
      \u0275\u0275elementStart(466, "span", 98);
      \u0275\u0275text(467, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(468, "input", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(469, "div", 97)(470, "div", 10)(471, "label", 57);
      \u0275\u0275text(472, "Payment Date ");
      \u0275\u0275elementStart(473, "span", 98);
      \u0275\u0275text(474, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(475, "div", 124);
      \u0275\u0275element(476, "input", 125);
      \u0275\u0275elementStart(477, "span", 104);
      \u0275\u0275element(478, "i", 105);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(479, "div", 97)(480, "div", 10)(481, "label", 57);
      \u0275\u0275text(482, "Payment Mode ");
      \u0275\u0275elementStart(483, "span", 98);
      \u0275\u0275text(484, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(485, "mat-select", 126)(486, "mat-option", 101);
      \u0275\u0275text(487, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "mat-option", 101);
      \u0275\u0275text(489, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "mat-option", 101);
      \u0275\u0275text(491, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "mat-option", 101);
      \u0275\u0275text(493, "Bank Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(494, "mat-option", 101);
      \u0275\u0275text(495, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "mat-option", 101);
      \u0275\u0275text(497, "Stripe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(498, "div", 97)(499, "div", 10)(500, "label", 57);
      \u0275\u0275text(501, "Amount ");
      \u0275\u0275elementStart(502, "span", 98);
      \u0275\u0275text(503, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(504, "input", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(505, "div", 97)(506, "div", 10)(507, "label", 57);
      \u0275\u0275text(508, "Paid Amount ");
      \u0275\u0275elementStart(509, "span", 98);
      \u0275\u0275text(510, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(511, "input", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(512, "div", 97)(513, "div", 10)(514, "label", 57);
      \u0275\u0275text(515, "Due Amount ");
      \u0275\u0275elementStart(516, "span", 98);
      \u0275\u0275text(517, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(518, "input", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "div", 108)(520, "div", 10)(521, "label", 57);
      \u0275\u0275text(522, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "textarea", 109);
      \u0275\u0275text(524, "Payment for raw materials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(525, "div", 108)(526, "div", 10)(527, "label", 57);
      \u0275\u0275text(528, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "div", 110)(530, "span", 111);
      \u0275\u0275element(531, "i", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "p", 113);
      \u0275\u0275text(533, "Drop your files here or ");
      \u0275\u0275elementStart(534, "a", 114);
      \u0275\u0275text(535, " Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(536, "input", 115);
      \u0275\u0275elementStart(537, "p");
      \u0275\u0275text(538, "Maximum size : 50 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(539, "div", 128)(540, "div", 129)(541, "div", 130)(542, "div", 131);
      \u0275\u0275element(543, "img", 132);
      \u0275\u0275elementStart(544, "div", 133)(545, "p", 134);
      \u0275\u0275text(546, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "p");
      \u0275\u0275text(548, "15.45 KB");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(549, "span", 135);
      \u0275\u0275element(550, "i", 136);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(551, "div", 116)(552, "button", 117);
      \u0275\u0275text(553, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "button", 118);
      \u0275\u0275text(555, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(556, "div", 137)(557, "div", 138)(558, "div", 91)(559, "div", 139)(560, "div", 10);
      \u0275\u0275element(561, "img", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "h6", 141);
      \u0275\u0275text(563, "Delete Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "p", 10);
      \u0275\u0275text(565, "Are you sure, you want to delete Payment?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "div", 142)(567, "a", 143);
      \u0275\u0275text(568, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "a", 144);
      \u0275\u0275text(570, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(53);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 121 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(73);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DateRangePickerComponent, MatSliderModule, MatSlider, MatSliderThumb, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsComponent, [{
    type: Component,
    args: [{ selector: "app-payments", imports: [
      CommonModule,
      DateRangePickerComponent,
      MatSliderModule,
      CustomPaginationComponent,
      MatSortModule,
      RouterLink,
      FormsModule,
      MatSelectModule,
      BsDatepickerModule
    ], template: `<!-- Start Conatiner  -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Payments</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
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
            <div>
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_payment">
                    <i class="isax isax-add-circle5 me-1"></i>New payment
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->
    
    <!-- Table Search -->
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
                                <span>Cusomer</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Payment ID</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Paid Date</span>
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
                    </ul>
                </div>
            </div>
        </div>	

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Customers Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
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
                    <th class="no-sort">Customer</th>
                    <th class="no-sort">Payment ID</th>
                    <th mat-sort-header="date">Paid Date</th>
                    <th mat-sort-header="amount">Amount</th>
                    <th mat-sort-header="pay">Payment method</th>
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
                        <div class="d-flex align-items-center">
                            <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">{{data.customer}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <a href="javascript:void(0);" class="link-default">{{data.paymentId}}</a>
                    </td>
                    <td>{{data.paidDate}}</td>
                    <td class="text-dark">{{data.amount}}</td>
                    <td class="text-dark">{{data.paymentMethod}}</td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-ellipsis"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_payment"><i class="isax isax-edit me-2"></i>Edit</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
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
    <!-- /Table List -->
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
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100"  id="close-filter">Cancel</a>
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
                                    Cash
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    Cheque
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    Bank Transfer
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    Paypal
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    Stripe
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

<!-- Start Add Customer Modal  -->
<div id="add_payment" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Payment</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row gx-3">
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Payment ID <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Customer <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Emily Clark</mat-option>
                                    <mat-option value="1">John Carter</mat-option>
                                    <mat-option value="1">Sophia White</mat-option>
                                    <mat-option value="1">Michael Johnson</mat-option>
                                    <mat-option value="1">Olivia Harris</mat-option>
                                    <mat-option value="1">David Anderson</mat-option>
                                    <mat-option value="1">Emma Lewis</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Invoice ID <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">INC00025</mat-option>
                                    <mat-option value="1">INC00024</mat-option>
                                    <mat-option value="1">INC00023</mat-option>
                                    <mat-option value="1">INC00022</mat-option>
                                    <mat-option value="1">INC00021</mat-option>
                                    <mat-option value="1">INC00020</mat-option>
                                    <mat-option value="1">INC00019</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Reference Number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Payment Date <span class="text-danger">*</span></label>
                                <div class="input-group position-relative ngxdate">
                                    <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                                    <span class="input-icon-addon fs-16 text-gray-9">
                                        <i class="isax isax-calendar-2"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Payment Mode <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Cash</mat-option>
                                    <mat-option value="1">Cheque</mat-option>
                                    <mat-option value="1">Bank Transfer</mat-option>
                                    <mat-option value="1">Paypal</mat-option>
                                    <mat-option value="1">Stripe</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Paid Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="$5200" readonly>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Due Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="$10000" readonly>
                            </div>
                        </div>                                    
                        <div class="col-lg-12">
                            <div class="mb-3">
                                <label class="form-label">Notes</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div>
                                <label class="form-label">Attachment</label>
                                <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                                    <span class="upload-img d-block mb-2"><i class="isax isax-image text-primary"></i></span>
                                    <p class="mb-0 text-gray-9">Drop your files here or <a href="javascript:void(0);" class="text-primary text-decoration-underline"> Browse</a></p>
                                    <input type="file" accept="video/image">
                                    <p>Maximum size : 50 MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Add Customer Modal -->

<!-- Start Edit Customer Modal  -->
<div id="edit_payment" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Payment</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row gx-3">
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Payment ID <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="PAY00025">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Customer <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Emily Clark">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Emily Clark</mat-option>
                                    <mat-option value="1">John Carter</mat-option>
                                    <mat-option value="1">Sophia White</mat-option>
                                    <mat-option value="1">Michael Johnson</mat-option>
                                    <mat-option value="1">Olivia Harris</mat-option>
                                    <mat-option value="1">David Anderson</mat-option>
                                    <mat-option value="1">Emma Lewis</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Invoice ID <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="INC00025">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">INC00025</mat-option>
                                    <mat-option value="1">INC00024</mat-option>
                                    <mat-option value="1">INC00023</mat-option>
                                    <mat-option value="1">INC00022</mat-option>
                                    <mat-option value="1">INC00021</mat-option>
                                    <mat-option value="1">INC00020</mat-option>
                                    <mat-option value="1">INC00019</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Reference Number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="REF17420">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Payment Date <span class="text-danger">*</span></label>
                                <div class="input-group position-relative ngxdate1">
                                    <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate1" placeholder="22 Feb 2025">
                                    <span class="input-icon-addon fs-16 text-gray-9">
                                        <i class="isax isax-calendar-2"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Payment Mode <span class="text-danger">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Cash">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Cash</mat-option>
                                    <mat-option value="1">Cheque</mat-option>
                                    <mat-option value="1">Bank Transfer</mat-option>
                                    <mat-option value="1">Paypal</mat-option>
                                    <mat-option value="1">Stripe</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="$4800">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Paid Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="$5200" readonly>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Due Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="$10000" readonly>
                            </div>
                        </div>                                    
                        <div class="col-lg-12">
                            <div class="mb-3">
                                <label class="form-label">Notes</label>
                                <textarea class="form-control" rows="3">Payment for raw materials</textarea>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-3">
                                <label class="form-label">Attachment</label>
                                <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                                    <span class="upload-img d-block mb-2"><i class="isax isax-image text-primary"></i></span>
                                    <p class="mb-0 text-gray-9">Drop your files here or <a href="javascript:void(0);" class="text-primary text-decoration-underline"> Browse</a></p>
                                    <input type="file" accept="video/image">
                                    <p>Maximum size : 50 MB</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="p-3 border rounded-2">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/img/icons/document-icon.svg" alt="document-icon">
                                        <div class="ms-2">
                                            <p class="text-dark fw-medium mb-0">Attachment</p>
                                            <p>15.45 KB</p>
                                        </div>
                                    </div>
                                    <span class="avatar avatar-sm bg-light text-dark rounded-circle"><i class="isax isax-trash"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Edit Customer Modal -->

<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Payment</h6>
                <p class="mb-3">Are you sure,  you want to delete Payment?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentsComponent, { className: "PaymentsComponent", filePath: "src/app/features/finance/payments/payments.component.ts", lineNumber: 24 });
})();
export {
  PaymentsComponent
};
//# sourceMappingURL=chunk-AHFJCVEU.js.map
