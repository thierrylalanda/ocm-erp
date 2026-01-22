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
  Router
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

// src/app/features/purchases/supplier-payments/supplier-payments.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function SupplierPaymentsComponent_For_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 149)(2, "div", 150)(3, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierPaymentsComponent_For_120_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 134)(6, "a", 152);
    \u0275\u0275element(7, "img", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 154);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "a", 155);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 156);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 156);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 157)(21, "a", 158);
    \u0275\u0275element(22, "i", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ul", 6)(24, "li")(25, "a", 160);
    \u0275\u0275element(26, "i", 161);
    \u0275\u0275text(27, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "li")(29, "a", 162);
    \u0275\u0275element(30, "i", 163);
    \u0275\u0275text(31, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.supplier);
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
function SupplierPaymentsComponent_Conditional_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 164);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SupplierPaymentsComponent_app_custom_pagination_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var SupplierPaymentsComponent = class _SupplierPaymentsComponent {
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
    this.data.getSupplierPayment().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.supplierPayments) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSupplierPayment().subscribe((apiRes) => {
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
  static \u0275fac = function SupplierPaymentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierPaymentsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierPaymentsComponent, selectors: [["app-supplier-payments"]], decls: 573, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_payment", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "supplier"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-17.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "id", "close-filter", 1, "btn", "btn-outline-white", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_payment", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, ""], [1, "row", "gx-3"], [1, "col-lg-4", "col-md-6"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "text-danger", "ms1"], [1, "input-group", "position-relative", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["type", "text", "value", "$5200", "readonly", "", 1, "form-control"], ["type", "text", "value", "$10000", "readonly", "", 1, "form-control"], [1, "col-lg-12"], ["rows", "3", 1, "form-control"], [1, "mb-3", "pb-3", "border-bottom"], [1, "file-upload", "drag-file", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "d-block", "mb-2"], [1, "isax", "isax-folder-open", "text-primary"], [1, "mb-0", "text-gray-9"], ["href", "javascript:void(0);", 1, "text-primary", "text-decoration-underline"], ["type", "file", "accept", "video/image"], [1, "d-flex", "align-items-center", "justify-content-between"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_payment", 1, "modal", "fade"], ["type", "text", "value", "PAY00025", 1, "form-control"], ["placeholder", "Emma Rose", 1, "custom-mat-select", "select"], ["placeholder", "INC00025", 1, "custom-mat-select", "select"], ["type", "text", "value", "REF17420", 1, "form-control"], [1, "input-group", "position-relative", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "22 Feb 2025", 1, "form-control", "datetimepicker", "rounded-end"], ["placeholder", "Cash", 1, "custom-mat-select", "select"], ["type", "text", "value", "$4800", 1, "form-control"], [1, "mb-3", "pb-3"], [1, "col-4"], [1, "p-3", "mb-3", "border", "rounded-2"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/document-icon.svg", "alt", "document-icon"], [1, "ms-2"], [1, "text-dark", "fw-medium", "mb-0"], [1, "btn", "btn-sm", "bg-light", "text-dark", "rounded-circle"], [1, "isax", "isax-trash"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-3"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);", 1, "link-default"], [1, "text-dark"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_payment", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SupplierPaymentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Supplier Payments");
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
      \u0275\u0275twoWayListener("ngModelChange", function SupplierPaymentsComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SupplierPaymentsComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275text(58, "Suppliers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 29);
      \u0275\u0275element(61, "i", 30)(62, "input", 31);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Payment ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 29);
      \u0275\u0275element(67, "i", 30)(68, "input", 31);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Paid Date");
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
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(83, "div", 33)(84, "h6", 34);
      \u0275\u0275text(85, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span", 35)(87, "span", 36);
      \u0275\u0275text(88, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, "Suppliers Selected");
      \u0275\u0275elementStart(90, "span", 37);
      \u0275\u0275listener("click", function SupplierPaymentsComponent_Template_span_click_90_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(91, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "span", 35)(93, "span", 36);
      \u0275\u0275text(94, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, "$10,000 - $25,500");
      \u0275\u0275elementStart(96, "span", 37);
      \u0275\u0275listener("click", function SupplierPaymentsComponent_Template_span_click_96_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(97, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "a", 39);
      \u0275\u0275listener("click", function SupplierPaymentsComponent_Template_a_click_98_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(99, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 40)(101, "table", 41);
      \u0275\u0275listener("matSortChange", function SupplierPaymentsComponent_Template_table_matSortChange_101_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(102, "thead", 42)(103, "tr")(104, "th", 43)(105, "div", 44);
      \u0275\u0275listener("click", function SupplierPaymentsComponent_Template_div_click_105_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(106, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function SupplierPaymentsComponent_Template_input_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "th", 46);
      \u0275\u0275text(108, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 43);
      \u0275\u0275text(110, "Payment ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 47);
      \u0275\u0275text(112, "Paid Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 48);
      \u0275\u0275text(114, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 43);
      \u0275\u0275text(116, "Payment method");
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "th", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "tbody");
      \u0275\u0275repeaterCreate(119, SupplierPaymentsComponent_For_120_Template, 32, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(121, SupplierPaymentsComponent_Conditional_121_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(122, SupplierPaymentsComponent_app_custom_pagination_122_Template, 1, 0, "app-custom-pagination", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 50)(124, "div", 51)(125, "div", 52)(126, "h6", 53);
      \u0275\u0275text(127, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "button", 54);
      \u0275\u0275element(129, "i", 55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 56)(131, "form", 57)(132, "div", 10)(133, "label", 58);
      \u0275\u0275text(134, "Suppliers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 21)(136, "a", 59);
      \u0275\u0275text(137, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 60)(139, "div", 10)(140, "div", 61)(141, "span", 62);
      \u0275\u0275element(142, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(143, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "ul", 10)(145, "li", 65)(146, "label", 66);
      \u0275\u0275element(147, "input", 67);
      \u0275\u0275text(148, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "a", 68);
      \u0275\u0275text(150, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "li")(152, "label", 69);
      \u0275\u0275element(153, "input", 32);
      \u0275\u0275elementStart(154, "span", 70);
      \u0275\u0275element(155, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(156, "Emma Rose ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "li")(158, "label", 69);
      \u0275\u0275element(159, "input", 32);
      \u0275\u0275elementStart(160, "span", 70);
      \u0275\u0275element(161, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(162, "Ethan James ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "li")(164, "label", 69);
      \u0275\u0275element(165, "input", 32);
      \u0275\u0275elementStart(166, "span", 70);
      \u0275\u0275element(167, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(168, "Olivia Grace ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "li")(170, "label", 69);
      \u0275\u0275element(171, "input", 32);
      \u0275\u0275elementStart(172, "span", 70);
      \u0275\u0275element(173, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(174, "Liam Michael ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "div", 75)(176, "div", 76)(177, "a", 77);
      \u0275\u0275text(178, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 76)(180, "a", 78);
      \u0275\u0275text(181, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(182, "div", 10)(183, "label", 58);
      \u0275\u0275text(184, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 21)(186, "a", 59);
      \u0275\u0275text(187, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 60)(189, "div", 79)(190, "div", 80)(191, "span", 81);
      \u0275\u0275text(192, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "span", 81);
      \u0275\u0275text(194, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "mat-slider", 82);
      \u0275\u0275element(196, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "p");
      \u0275\u0275text(198, "Range : ");
      \u0275\u0275elementStart(199, "span", 84);
      \u0275\u0275text(200, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(201, "div", 10)(202, "label", 58);
      \u0275\u0275text(203, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 21)(205, "a", 59);
      \u0275\u0275text(206, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "div", 60)(208, "div", 10)(209, "div", 61)(210, "span", 62);
      \u0275\u0275element(211, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(212, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "ul", 10)(214, "li", 65)(215, "label", 66);
      \u0275\u0275element(216, "input", 67);
      \u0275\u0275text(217, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "a", 68);
      \u0275\u0275text(219, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "li")(221, "label", 69);
      \u0275\u0275element(222, "input", 32);
      \u0275\u0275text(223, " Cash ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "li")(225, "label", 69);
      \u0275\u0275element(226, "input", 32);
      \u0275\u0275text(227, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "li")(229, "label", 69);
      \u0275\u0275element(230, "input", 32);
      \u0275\u0275text(231, " Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "li")(233, "label", 69);
      \u0275\u0275element(234, "input", 32);
      \u0275\u0275text(235, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "label", 69);
      \u0275\u0275element(238, "input", 32);
      \u0275\u0275text(239, " Stripe ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(240, "div", 10)(241, "label", 58);
      \u0275\u0275text(242, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 85);
      \u0275\u0275element(244, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 86)(246, "div", 75)(247, "div", 76)(248, "a", 87);
      \u0275\u0275text(249, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 76)(251, "button", 88);
      \u0275\u0275listener("click", function SupplierPaymentsComponent_Template_button_click_251_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(252, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(253, "div", 89)(254, "div", 90)(255, "div", 91)(256, "div", 92)(257, "h4", 93);
      \u0275\u0275text(258, "Add New Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "button", 94);
      \u0275\u0275element(260, "i", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 95)(262, "div", 96)(263, "form")(264, "div", 97)(265, "div", 98)(266, "div", 10)(267, "label", 58);
      \u0275\u0275text(268, "Payment ID");
      \u0275\u0275elementStart(269, "span", 99);
      \u0275\u0275text(270, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(271, "input", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "div", 98)(273, "div", 10)(274, "label", 58);
      \u0275\u0275text(275, "Supplier");
      \u0275\u0275elementStart(276, "span", 99);
      \u0275\u0275text(277, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "mat-select", 101)(279, "mat-option", 102);
      \u0275\u0275text(280, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "mat-option", 102);
      \u0275\u0275text(282, "Emma Rose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "mat-option", 102);
      \u0275\u0275text(284, "Ethan James");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "mat-option", 102);
      \u0275\u0275text(286, "Olivia Grace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "mat-option", 102);
      \u0275\u0275text(288, "Liam Michael");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "mat-option", 102);
      \u0275\u0275text(290, "Sophia Marie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "mat-option", 102);
      \u0275\u0275text(292, "Noah Daniel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "mat-option", 102);
      \u0275\u0275text(294, "Isabella Faith");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(295, "div", 98)(296, "div", 10)(297, "label", 58);
      \u0275\u0275text(298, "Invoice");
      \u0275\u0275elementStart(299, "span", 99);
      \u0275\u0275text(300, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "mat-select", 101)(302, "mat-option", 102);
      \u0275\u0275text(303, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "mat-option", 102);
      \u0275\u0275text(305, "INC00025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "mat-option", 102);
      \u0275\u0275text(307, "INC00024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "mat-option", 102);
      \u0275\u0275text(309, "INC00023");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-option", 102);
      \u0275\u0275text(311, "INC00022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "mat-option", 102);
      \u0275\u0275text(313, "INC00021");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "mat-option", 102);
      \u0275\u0275text(315, "INC00020");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "mat-option", 102);
      \u0275\u0275text(317, "INC00019");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(318, "div", 98)(319, "div", 10)(320, "label", 58);
      \u0275\u0275text(321, "Reference Number");
      \u0275\u0275elementStart(322, "span", 103);
      \u0275\u0275text(323, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(324, "input", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "div", 98)(326, "div", 10)(327, "label", 58);
      \u0275\u0275text(328, "Payment Date");
      \u0275\u0275elementStart(329, "span", 99);
      \u0275\u0275text(330, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "div", 104);
      \u0275\u0275element(332, "input", 105);
      \u0275\u0275elementStart(333, "span", 106);
      \u0275\u0275element(334, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(335, "div", 98)(336, "div", 10)(337, "label", 58);
      \u0275\u0275text(338, "Payment Mode");
      \u0275\u0275elementStart(339, "span", 99);
      \u0275\u0275text(340, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "mat-select", 101)(342, "mat-option", 102);
      \u0275\u0275text(343, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "mat-option", 102);
      \u0275\u0275text(345, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "mat-option", 102);
      \u0275\u0275text(347, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "mat-option", 102);
      \u0275\u0275text(349, "Bank Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "mat-option", 102);
      \u0275\u0275text(351, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "mat-option", 102);
      \u0275\u0275text(353, "Stripe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(354, "div", 98)(355, "div", 10)(356, "label", 58);
      \u0275\u0275text(357, "Amount");
      \u0275\u0275elementStart(358, "span", 99);
      \u0275\u0275text(359, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(360, "input", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 98)(362, "div", 10)(363, "label", 58);
      \u0275\u0275text(364, "Paid Amount");
      \u0275\u0275elementStart(365, "span", 99);
      \u0275\u0275text(366, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(367, "input", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(368, "div", 98)(369, "div", 10)(370, "label", 58);
      \u0275\u0275text(371, "Due Amount");
      \u0275\u0275elementStart(372, "span", 99);
      \u0275\u0275text(373, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(374, "input", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(375, "div", 110)(376, "div", 10)(377, "label", 58);
      \u0275\u0275text(378, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(379, "textarea", 111);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "div", 110)(381, "div", 112)(382, "label", 58);
      \u0275\u0275text(383, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "div", 113)(385, "span", 114);
      \u0275\u0275element(386, "i", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "p", 116);
      \u0275\u0275text(388, "Drop your files here or ");
      \u0275\u0275elementStart(389, "a", 117);
      \u0275\u0275text(390, " Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(391, "input", 118);
      \u0275\u0275elementStart(392, "p");
      \u0275\u0275text(393, "Maximum size : 50 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(394, "div", 119)(395, "button", 120);
      \u0275\u0275text(396, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "button", 121);
      \u0275\u0275text(398, "Create");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(399, "div", 122)(400, "div", 90)(401, "div", 91)(402, "div", 92)(403, "h4", 93);
      \u0275\u0275text(404, "Edit Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "button", 94);
      \u0275\u0275element(406, "i", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(407, "div", 95)(408, "div", 96)(409, "form")(410, "div", 97)(411, "div", 98)(412, "div", 10)(413, "label", 58);
      \u0275\u0275text(414, "Payment ID");
      \u0275\u0275elementStart(415, "span", 99);
      \u0275\u0275text(416, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(417, "input", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(418, "div", 98)(419, "div", 10)(420, "label", 58);
      \u0275\u0275text(421, "Supplier");
      \u0275\u0275elementStart(422, "span", 99);
      \u0275\u0275text(423, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(424, "mat-select", 124)(425, "mat-option", 102);
      \u0275\u0275text(426, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "mat-option", 102);
      \u0275\u0275text(428, "Emma Rose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "mat-option", 102);
      \u0275\u0275text(430, "Ethan James");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "mat-option", 102);
      \u0275\u0275text(432, "Olivia Grace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "mat-option", 102);
      \u0275\u0275text(434, "Liam Michael");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "mat-option", 102);
      \u0275\u0275text(436, "Sophia Marie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "mat-option", 102);
      \u0275\u0275text(438, "Noah Daniel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "mat-option", 102);
      \u0275\u0275text(440, "Isabella Faith");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(441, "div", 98)(442, "div", 10)(443, "label", 58);
      \u0275\u0275text(444, "Invoice");
      \u0275\u0275elementStart(445, "span", 99);
      \u0275\u0275text(446, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "mat-select", 125)(448, "mat-option", 102);
      \u0275\u0275text(449, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "mat-option", 102);
      \u0275\u0275text(451, "INC00025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "mat-option", 102);
      \u0275\u0275text(453, "INC00024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "mat-option", 102);
      \u0275\u0275text(455, "INC00023");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "mat-option", 102);
      \u0275\u0275text(457, "INC00022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "mat-option", 102);
      \u0275\u0275text(459, "INC00021");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "mat-option", 102);
      \u0275\u0275text(461, "INC00020");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "mat-option", 102);
      \u0275\u0275text(463, "INC00019");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(464, "div", 98)(465, "div", 10)(466, "label", 58);
      \u0275\u0275text(467, "Reference Number");
      \u0275\u0275elementStart(468, "span", 99);
      \u0275\u0275text(469, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(470, "input", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(471, "div", 98)(472, "div", 10)(473, "label", 58);
      \u0275\u0275text(474, "Payment Date");
      \u0275\u0275elementStart(475, "span", 99);
      \u0275\u0275text(476, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(477, "div", 127);
      \u0275\u0275element(478, "input", 128);
      \u0275\u0275elementStart(479, "span", 106);
      \u0275\u0275element(480, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(481, "div", 98)(482, "div", 10)(483, "label", 58);
      \u0275\u0275text(484, "Payment Mode");
      \u0275\u0275elementStart(485, "span", 99);
      \u0275\u0275text(486, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(487, "mat-select", 129)(488, "mat-option", 102);
      \u0275\u0275text(489, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "mat-option", 102);
      \u0275\u0275text(491, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "mat-option", 102);
      \u0275\u0275text(493, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(494, "mat-option", 102);
      \u0275\u0275text(495, "Bank Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "mat-option", 102);
      \u0275\u0275text(497, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "mat-option", 102);
      \u0275\u0275text(499, "Stripe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(500, "div", 98)(501, "div", 10)(502, "label", 58);
      \u0275\u0275text(503, "Amount");
      \u0275\u0275elementStart(504, "span", 99);
      \u0275\u0275text(505, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(506, "input", 130);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "div", 98)(508, "div", 10)(509, "label", 58);
      \u0275\u0275text(510, "Paid Amount");
      \u0275\u0275elementStart(511, "span", 99);
      \u0275\u0275text(512, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(513, "input", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(514, "div", 98)(515, "div", 10)(516, "label", 58);
      \u0275\u0275text(517, "Due Amount");
      \u0275\u0275elementStart(518, "span", 99);
      \u0275\u0275text(519, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(520, "input", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(521, "div", 110)(522, "div", 10)(523, "label", 58);
      \u0275\u0275text(524, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "textarea", 111);
      \u0275\u0275text(526, "Payment for raw materials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(527, "div", 110)(528, "div", 131)(529, "label", 58);
      \u0275\u0275text(530, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(531, "div", 113)(532, "span", 114);
      \u0275\u0275element(533, "i", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "p", 116);
      \u0275\u0275text(535, "Drop your files here or ");
      \u0275\u0275elementStart(536, "a", 117);
      \u0275\u0275text(537, " Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(538, "input", 118);
      \u0275\u0275elementStart(539, "p");
      \u0275\u0275text(540, "Maximum size : 50 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(541, "div", 132)(542, "div", 133)(543, "div", 119)(544, "div", 134);
      \u0275\u0275element(545, "img", 135);
      \u0275\u0275elementStart(546, "div", 136)(547, "p", 137);
      \u0275\u0275text(548, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "p");
      \u0275\u0275text(550, "15.45 KB");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(551, "a", 138);
      \u0275\u0275element(552, "i", 139);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(553, "div", 140)(554, "button", 120);
      \u0275\u0275text(555, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "button", 121);
      \u0275\u0275text(557, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(558, "div", 141)(559, "div", 142)(560, "div", 91)(561, "div", 143)(562, "div", 10);
      \u0275\u0275element(563, "img", 144);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "h6", 145);
      \u0275\u0275text(565, "Delete Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "p", 10);
      \u0275\u0275text(567, "Are you sure, you want to delete Payment?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "div", 146)(569, "a", 147);
      \u0275\u0275text(570, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(571, "a", 148);
      \u0275\u0275text(572, "Yes, Delete");
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
  }, dependencies: [
    MatSelectModule,
    MatSelect,
    MatOption,
    DateRangePickerComponent,
    MatSliderModule,
    MatSlider,
    MatSliderThumb,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    MatSortHeader,
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
    BsDatepickerModule,
    BsDatepickerDirective,
    BsDatepickerInputDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierPaymentsComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-payments", imports: [
      MatSelectModule,
      DateRangePickerComponent,
      MatSliderModule,
      CustomPaginationComponent,
      MatSortModule,
      CommonModule,
      FormsModule,
      BsDatepickerModule
    ], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Supplier Payments</h6>
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
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_payment">
                    <i class="isax isax-add-circle5 me-1"></i>New payment
                </a>
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
                                <span>Suppliers</span>
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
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Suppliers Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->

    </div>
    <!-- Table Search End -->

    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th mat-sort-header="supplier">Supplier</th>
                    <th class="no-sort">Payment ID</th>
                    <th mat-sort-header="date">Paid Date</th>
                    <th mat-sort-header="amount">Amount</th>
                    <th class="no-sort">Payment method</th>
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
                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0">{{data.supplier}}</h6>
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
                            <i class="isax isax-more"></i>
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
            } @if(tableData.length === 0){
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
                        <label class="form-label">Suppliers</label>
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
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-17.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emma Rose
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-05.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Ethan James
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Grace
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Liam Michael
                                        </label>
                                    </li>
                                </ul>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100" id="close-filter">Cancel</a>
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
                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
                                        </label>
                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cash
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cheque
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
        <!-- End Filter -->

<!-- Add Customer Modal Start -->
<div id="add_payment" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Payment</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <div class="modal-body">
                <div class="">
                    <form>
                        <div class="row gx-3">
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Payment ID<span class="text-danger ms-1">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Supplier<span class="text-danger ms-1">*</span></label>
                                    <mat-select class="custom-mat-select select" placeholder="Select">
                                        <mat-option value="1">Select</mat-option>
                                        <mat-option value="1">Emma Rose</mat-option>
                                        <mat-option value="1">Ethan James</mat-option>
                                        <mat-option value="1">Olivia Grace</mat-option>
                                        <mat-option value="1">Liam Michael</mat-option>
                                        <mat-option value="1">Sophia Marie</mat-option>
                                        <mat-option value="1">Noah Daniel</mat-option>
                                        <mat-option value="1">Isabella Faith</mat-option>
                                    </mat-select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Invoice<span class="text-danger ms-1">*</span></label>
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
                                    <label class="form-label">Reference Number<span class="text-danger ms1">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Payment Date<span class="text-danger ms-1">*</span></label>
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
                                    <label class="form-label">Payment Mode<span class="text-danger ms-1">*</span></label>
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
                                    <label class="form-label">Amount<span class="text-danger ms-1">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Paid Amount<span class="text-danger ms-1">*</span></label>
                                    <input type="text" class="form-control" value="$5200" readonly>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Due Amount<span class="text-danger ms-1">*</span></label>
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
                                <div class="mb-3 pb-3 border-bottom">
                                    <label class="form-label">Attachment</label>
                                    <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                                        <span class="upload-img d-block mb-2"><i class="isax isax-folder-open text-primary"></i></span>
                                        <p class="mb-0 text-gray-9">Drop your files here or <a href="javascript:void(0);" class="text-primary text-decoration-underline">
                                                Browse</a></p>
                                        <input type="file" accept="video/image">
                                        <p>Maximum size : 50 MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Add Customer Modal End -->

<!-- Edit Customer Modal Start -->
<div id="edit_payment" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Payment</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <div class="modal-body">
                <div class="">
                    <form>
                        <div class="row gx-3">
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Payment ID<span class="text-danger ms-1">*</span></label>
                                    <input type="text" class="form-control" value="PAY00025">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Supplier<span class="text-danger ms-1">*</span></label>
                                    <mat-select class="custom-mat-select select" placeholder="Emma Rose">
                                        <mat-option value="1">Select</mat-option>
                                        <mat-option value="1">Emma Rose</mat-option>
                                        <mat-option value="1">Ethan James</mat-option>
                                        <mat-option value="1">Olivia Grace</mat-option>
                                        <mat-option value="1">Liam Michael</mat-option>
                                        <mat-option value="1">Sophia Marie</mat-option>
                                        <mat-option value="1">Noah Daniel</mat-option>
                                        <mat-option value="1">Isabella Faith</mat-option>
                                    </mat-select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Invoice<span class="text-danger ms-1">*</span></label>
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
                                    <label class="form-label">Reference Number<span class="text-danger ms-1">*</span></label>
                                    <input type="text" class="form-control" value="REF17420">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Payment Date<span class="text-danger ms-1">*</span></label>
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
                                    <label class="form-label">Payment Mode<span class="text-danger ms-1">*</span></label>
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
                                    <label class="form-label">Amount<span class="text-danger ms-1">*</span></label>
                                    <input type="text" class="form-control" value="$4800">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Paid Amount<span class="text-danger ms-1">*</span></label>
                                    <input type="text" class="form-control" value="$5200" readonly>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Due Amount<span class="text-danger ms-1">*</span></label>
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
                                <div class="mb-3 pb-3">
                                    <label class="form-label">Attachment</label>
                                    <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                                        <span class="upload-img d-block mb-2"><i class="isax isax-folder-open text-primary"></i></span>
                                        <p class="mb-0 text-gray-9">Drop your files here or <a href="javascript:void(0);" class="text-primary text-decoration-underline">
                                                Browse</a></p>
                                        <input type="file" accept="video/image">
                                        <p>Maximum size : 50 MB</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="p-3 mb-3 border rounded-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img src="assets/img/icons/document-icon.svg" alt="document-icon">
                                            <div class="ms-2">
                                                <p class="text-dark fw-medium mb-0">Attachment</p>
                                                <p>15.45 KB</p>
                                            </div>
                                        </div>
                                        <a class="btn btn-sm bg-light text-dark rounded-circle"><i class="isax isax-trash"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between border-top pt-3">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Edit Customer Modal End -->

<!-- Delete Modal Satrt -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Payment</h6>
                <p class="mb-3">Are you sure, you want to delete Payment?</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Delete Modal End -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierPaymentsComponent, { className: "SupplierPaymentsComponent", filePath: "src/app/features/purchases/supplier-payments/supplier-payments.component.ts", lineNumber: 26 });
})();
export {
  SupplierPaymentsComponent
};
//# sourceMappingURL=chunk-YZTXW5QJ.js.map
