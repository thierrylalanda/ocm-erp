import {
  DateRangePickerComponent
} from "./chunk-2I7DAYVQ.js";
import {
  require_intlTelInput
} from "./chunk-SOAGTYBX.js";
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
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/purchases/suppliers/suppliers.component.ts
var import_intl_tel_input = __toESM(require_intlTelInput());
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function SuppliersComponent_For_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 131)(2, "div", 132)(3, "input", 133);
    \u0275\u0275twoWayListener("ngModelChange", function SuppliersComponent_For_121_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 100)(6, "a", 134);
    \u0275\u0275element(7, "img", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 136)(10, "a", 137);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 138);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 139)(22, "a", 140);
    \u0275\u0275element(23, "i", 141);
    \u0275\u0275text(24, "Ledger");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td", 142)(26, "a", 143);
    \u0275\u0275element(27, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul", 6)(29, "li")(30, "a", 145);
    \u0275\u0275element(31, "i", 146);
    \u0275\u0275text(32, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 147);
    \u0275\u0275element(35, "i", 148);
    \u0275\u0275text(36, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.currency);
  }
}
function SuppliersComponent_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 149);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function SuppliersComponent_app_custom_pagination_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var SuppliersComponent = class _SuppliersComponent {
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
  ngAfterViewInit() {
    const input = document.querySelector("#phone");
    const input2 = document.querySelector("#phone2");
    (0, import_intl_tel_input.default)(input, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    (0, import_intl_tel_input.default)(input2, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9+()-\s]/g, "");
    });
    input2.addEventListener("input", () => {
      input2.value = input2.value.replace(/[^0-9+()-\s]/g, "");
    });
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
    this.data.getSupplier().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.suppliers) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSupplier().subscribe((apiRes) => {
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
  static \u0275fac = function SuppliersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuppliersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuppliersComponent, selectors: [["app-suppliers"]], decls: 329, vars: 16, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "supplier"], ["mat-sort-header", "phone"], ["mat-sort-header", "date"], ["mat-sort-header", "balance"], ["mat-sort-header", "currency"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-17.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "mb-0"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "isax", "isax-image", "text-primary", "fs-24"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9", "fs-12"], ["type", "text", 1, "form-control"], [1, "col-md-6"], ["type", "text", "id", "phone", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "User Img", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], ["type", "text", "value", "Ethan James", 1, "form-control"], ["type", "text", "value", "johnson@example.com", 1, "form-control"], ["type", "text", "id", "phone2", 1, "form-control"], ["type", "text", "value", "$450", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#ledger_modal", 1, "btn", "btn-outline-white", "btn-sm", "justify-content-center", "d-flex", "align-items-center"], [1, "isax", "isax-document-text-1", "me-1"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function SuppliersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Supplier");
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
      \u0275\u0275text(20, "New Supplier");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function SuppliersComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuppliersComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275text(58, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 29);
      \u0275\u0275element(61, "i", 30)(62, "input", 31);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Phone");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 29);
      \u0275\u0275element(67, "i", 30)(68, "input", 32);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 29);
      \u0275\u0275element(73, "i", 30)(74, "input", 32);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Balance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 29);
      \u0275\u0275element(79, "i", 30)(80, "input", 32);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(83, "div", 33)(84, "h6", 34);
      \u0275\u0275text(85, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span", 35)(87, "span", 36);
      \u0275\u0275text(88, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, "Suppliers Selected");
      \u0275\u0275elementStart(90, "span", 37);
      \u0275\u0275listener("click", function SuppliersComponent_Template_span_click_90_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(91, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "span", 35)(93, "span", 36);
      \u0275\u0275text(94, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, "$10,000 - $25,500");
      \u0275\u0275elementStart(96, "span", 37);
      \u0275\u0275listener("click", function SuppliersComponent_Template_span_click_96_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(97, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "a", 39);
      \u0275\u0275listener("click", function SuppliersComponent_Template_a_click_98_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(99, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 40)(101, "table", 41);
      \u0275\u0275listener("matSortChange", function SuppliersComponent_Template_table_matSortChange_101_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(102, "thead")(103, "tr")(104, "th", 42)(105, "div", 43);
      \u0275\u0275listener("click", function SuppliersComponent_Template_div_click_105_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(106, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function SuppliersComponent_Template_input_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "th", 45);
      \u0275\u0275text(108, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 46);
      \u0275\u0275text(110, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 47);
      \u0275\u0275text(112, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 48);
      \u0275\u0275text(114, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 49);
      \u0275\u0275text(116, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "th", 42)(118, "th", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "tbody");
      \u0275\u0275repeaterCreate(120, SuppliersComponent_For_121_Template, 37, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(122, SuppliersComponent_Conditional_122_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(123, SuppliersComponent_app_custom_pagination_123_Template, 1, 0, "app-custom-pagination", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 51)(125, "div", 52)(126, "div", 53)(127, "h6", 54);
      \u0275\u0275text(128, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "button", 55);
      \u0275\u0275element(130, "i", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "div", 57)(132, "form", 58)(133, "div", 10)(134, "label", 59);
      \u0275\u0275text(135, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 21)(137, "a", 60);
      \u0275\u0275text(138, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 61)(140, "div", 10)(141, "div", 62)(142, "span", 63);
      \u0275\u0275element(143, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275element(144, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "ul", 10)(146, "li", 66)(147, "label", 67);
      \u0275\u0275element(148, "input", 68);
      \u0275\u0275text(149, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "a", 69);
      \u0275\u0275text(151, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "li")(153, "label", 70);
      \u0275\u0275element(154, "input", 32);
      \u0275\u0275elementStart(155, "span", 71);
      \u0275\u0275element(156, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(157, "Emma Rose ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "li")(159, "label", 70);
      \u0275\u0275element(160, "input", 32);
      \u0275\u0275elementStart(161, "span", 71);
      \u0275\u0275element(162, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, "Ethan James ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "li")(165, "label", 70);
      \u0275\u0275element(166, "input", 32);
      \u0275\u0275elementStart(167, "span", 71);
      \u0275\u0275element(168, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(169, "Olivia Grace ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "li")(171, "label", 70);
      \u0275\u0275element(172, "input", 32);
      \u0275\u0275elementStart(173, "span", 71);
      \u0275\u0275element(174, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(175, "Liam Michael ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(176, "div", 76)(177, "div", 77)(178, "a", 78);
      \u0275\u0275text(179, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 77)(181, "a", 79);
      \u0275\u0275text(182, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(183, "div", 10)(184, "label", 59);
      \u0275\u0275text(185, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 80);
      \u0275\u0275element(187, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "div", 81)(189, "label", 59);
      \u0275\u0275text(190, "Account Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "div", 21)(192, "a", 60);
      \u0275\u0275text(193, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 61)(195, "div", 82)(196, "div", 83)(197, "span", 84);
      \u0275\u0275text(198, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "span", 84);
      \u0275\u0275text(200, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "mat-slider", 85);
      \u0275\u0275element(202, "input", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "p");
      \u0275\u0275text(204, "Range : ");
      \u0275\u0275elementStart(205, "span", 87);
      \u0275\u0275text(206, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(207, "div", 88)(208, "div", 76)(209, "div", 77)(210, "a", 89);
      \u0275\u0275text(211, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 77)(213, "button", 90);
      \u0275\u0275listener("click", function SuppliersComponent_Template_button_click_213_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(214, " Submit ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(215, "div", 91)(216, "div", 92)(217, "div", 93)(218, "div", 94)(219, "h4", 95);
      \u0275\u0275text(220, "Add New Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "button", 96);
      \u0275\u0275element(222, "i", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "form")(224, "div", 97)(225, "div", 98)(226, "div", 99)(227, "div", 10)(228, "div", 100)(229, "div", 101);
      \u0275\u0275element(230, "i", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "div", 103)(232, "div", 104);
      \u0275\u0275element(233, "i", 105);
      \u0275\u0275text(234, "Upload Image ");
      \u0275\u0275element(235, "input", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "span", 107);
      \u0275\u0275text(237, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(238, "div", 99)(239, "div", 10)(240, "label", 59);
      \u0275\u0275text(241, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(242, "input", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "div", 109)(244, "div", 10)(245, "label", 59);
      \u0275\u0275text(246, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(247, "input", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 109)(249, "div", 10)(250, "label", 59);
      \u0275\u0275text(251, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(252, "input", 110);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 99)(254, "div", 81)(255, "label", 59);
      \u0275\u0275text(256, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275element(257, "input", 108);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(258, "div", 111)(259, "button", 112);
      \u0275\u0275text(260, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "button", 113);
      \u0275\u0275text(262, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(263, "div", 114)(264, "div", 92)(265, "div", 93)(266, "div", 94)(267, "h4", 95);
      \u0275\u0275text(268, "Edit Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "button", 96);
      \u0275\u0275element(270, "i", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "form")(272, "div", 97)(273, "div", 98)(274, "div", 99)(275, "div", 10)(276, "div", 100)(277, "div", 101)(278, "div", 115);
      \u0275\u0275element(279, "img", 116);
      \u0275\u0275elementStart(280, "a", 117);
      \u0275\u0275element(281, "i", 118);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(282, "div", 103)(283, "div", 104);
      \u0275\u0275element(284, "i", 105);
      \u0275\u0275text(285, "Upload Image ");
      \u0275\u0275element(286, "input", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "span", 107);
      \u0275\u0275text(288, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(289, "div", 99)(290, "div", 10)(291, "label", 59);
      \u0275\u0275text(292, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(293, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "div", 109)(295, "div", 10)(296, "label", 59);
      \u0275\u0275text(297, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(298, "input", 120);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "div", 109)(300, "div", 10)(301, "label", 59);
      \u0275\u0275text(302, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(303, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 109)(305, "div", 81)(306, "label", 59);
      \u0275\u0275text(307, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275element(308, "input", 122);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(309, "div", 111)(310, "button", 112);
      \u0275\u0275text(311, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "button", 113);
      \u0275\u0275text(313, " Save Changes ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(314, "div", 123)(315, "div", 124)(316, "div", 93)(317, "div", 125)(318, "div", 10);
      \u0275\u0275element(319, "img", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "h6", 127);
      \u0275\u0275text(321, "Delete Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "p", 10);
      \u0275\u0275text(323, "Are you sure, you want to delete supplier?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "div", 128)(325, "a", 129);
      \u0275\u0275text(326, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "a", 130);
      \u0275\u0275text(328, "Yes, Delete");
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
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 122 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(78);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [MatSliderModule, MatSlider, MatSliderThumb, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSelectModule, DateRangePickerComponent, CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuppliersComponent, [{
    type: Component,
    args: [{ selector: "app-suppliers", imports: [MatSliderModule, CustomPaginationComponent, MatSortModule, MatSelectModule, DateRangePickerComponent, CommonModule, FormsModule], template: ` <!-- Start Content -->
 <div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Supplier</h6>
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
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>New Supplier</a>
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
                        <i class="isax isax-sort me-1"></i>Sort By :
                        <span class="fw-normal ms-1">Latest</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
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
                    <ul class="dropdown-menu dropdown-menu">
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
                                <span>Phone</span>
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
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span>Balance</span>
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
            <thead>
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th mat-sort-header="supplier">Supplier</th>
                    <th mat-sort-header="phone">Phone</th>
                    <th mat-sort-header="date">Created On</th>
                    <th mat-sort-header="balance">Balance</th>
                    <th mat-sort-header="currency">Currency</th>
                    <th class="no-sort"></th>
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
                                <img src="assets/img/profiles/{{data.image}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0">
                                    <a href="javascript:void(0);">{{data.supplier}}</a>
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.phone}}</td>
                    <td>{{data.createdOn}}</td>
                    <td class="text-dark">{{data.balance}}</td>
                    <td>{{data.currency}}</td>
                    <td>
                        <div class="d-flex">
                            <a href="javascript:void(0);" class="btn btn-outline-white btn-sm justify-content-center d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#ledger_modal"><i
                                    class="isax isax-document-text-1 me-1"></i>Ledger</a>
                        </div>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                        class="isax isax-trash me-2"></i>Delete</a>
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
    <app-custom-pagination *ngIf="row"></app-custom-pagination>
    <!-- Table List End -->

</div>
<!-- End Content -->


 <!-- Start Filter -->
 <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">
    <div class="offcanvas-header d-block pb-0">
        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
            <h6 class="offcanvas-title">Filter</h6>
            <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-x"></i>
            </button>
        </div>
    </div>
    <div class="offcanvas-body pt-3">
        <form action="#">
            <div class="mb-3">
                <label class="form-label">Supplier</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
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
                                    <span class="avatar avatar-sm rounded-circle me-2"><img
                                            src="assets/img/profiles/avatar-17.jpg"
                                            class="flex-shrink-0 rounded-circle" alt="img"></span>Emma Rose
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img
                                            src="assets/img/profiles/avatar-05.jpg"
                                            class="flex-shrink-0 rounded-circle" alt="img"></span>Ethan James
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img
                                            src="assets/img/profiles/avatar-12.jpg"
                                            class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Grace
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img
                                            src="assets/img/profiles/avatar-29.jpg"
                                            class="flex-shrink-0 rounded-circle" alt="img"></span>Liam Michael
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
            <div class="mb-0">
                <label class="form-label">Account Type</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
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
                        <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
                    </div>
                    <div class="col-6">
                        <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<!-- End Filter -->

<!-- Add Modal Start -->
<div id="add_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Supplier</h4>
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                        <i class="isax isax-image text-primary fs-24"></i>
                                    </div>
                                    <div class="d-inline-flex flex-column align-items-start">
                                        <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                            <i class="isax isax-image me-1"></i>Upload Image
                                            <input type="file" class="form-control image-sign" multiple="">
                                        </div>
                                        <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="phone">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-0">
                                <label class="form-label">Balance</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Add Modal End -->

<!-- Edit Modal Start -->
<div id="edit_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Supplier</h4>
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                        <div class="position-relative d-flex align-items-center">
                                            <img src="assets/img/profiles/avatar-05.jpg" class="avatar avatar-xl" alt="User Img">
                                            <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i
                                                    class="isax isax-trash"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-column align-items-start">
                                        <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                            <i class="isax isax-image me-1"></i>Upload Image
                                            <input type="file" class="form-control image-sign" multiple="">
                                        </div>
                                        <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" value="Ethan James">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="text" class="form-control" value="johnson@example.com">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="phone2">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-0">
                                <label class="form-label">Balance</label>
                                <input type="text" class="form-control" value="$450">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Edit Modal End -->

<!-- Delete Modal Start -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Supplier</h6>
                <p class="mb-3">Are you sure, you want to delete supplier?</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- Delete Modal End -->
` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuppliersComponent, { className: "SuppliersComponent", filePath: "src/app/features/purchases/suppliers/suppliers.component.ts", lineNumber: 22 });
})();
export {
  SuppliersComponent
};
//# sourceMappingURL=chunk-DVDGH5I2.js.map
