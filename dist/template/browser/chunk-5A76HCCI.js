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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/purchases/purchases/purchase-list/purchase-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function PurchaseListComponent_For_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 102)(2, "div", 103)(3, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_For_128_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 106)(11, "a", 107);
    \u0275\u0275element(12, "img", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h6", 109)(15, "a", 110);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(17, "td", 111);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 111);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 106)(23, "span", 112);
    \u0275\u0275text(24);
    \u0275\u0275element(25, "i", 113);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td", 114)(27, "a", 115);
    \u0275\u0275element(28, "i", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul", 6)(30, "li")(31, "a", 117);
    \u0275\u0275element(32, "i", 118);
    \u0275\u0275text(33, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li")(35, "a", 119);
    \u0275\u0275element(36, "i", 120);
    \u0275\u0275text(37, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "li")(39, "a", 121);
    \u0275\u0275element(40, "i", 122);
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
    \u0275\u0275property("routerLink", ctx_r2.routes.editPurchase);
  }
}
function PurchaseListComponent_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 123);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseListComponent_app_custom_pagination_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PurchaseListComponent = class _PurchaseListComponent {
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
    this.data.getpurchase().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.purchaseList) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getpurchase().subscribe((apiRes) => {
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
  static \u0275fac = function PurchaseListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseListComponent, selectors: [["app-purchase-list"]], decls: 330, vars: 17, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "vendor"], ["mat-sort-header", "amount"], ["mat-sort-header", "tatus"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], ["href", "javascript:void(0);", 1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PurchaseListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Purchase");
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
      \u0275\u0275text(20, "New Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PurchaseListComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275text(58, "ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 30);
      \u0275\u0275element(61, "i", 31)(62, "input", 32);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 30);
      \u0275\u0275element(67, "i", 31)(68, "input", 32);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Vendor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 30);
      \u0275\u0275element(73, "i", 31)(74, "input", 32);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 30);
      \u0275\u0275element(79, "i", 31)(80, "input", 33);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "li")(84, "label", 30);
      \u0275\u0275element(85, "i", 31)(86, "input", 33);
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(89, "div", 34)(90, "h6", 35);
      \u0275\u0275text(91, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 36)(93, "span", 37);
      \u0275\u0275text(94, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, "Vendors Selected");
      \u0275\u0275elementStart(96, "span", 38);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_span_click_96_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(97, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "span", 36)(99, "span", 37);
      \u0275\u0275text(100, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, "$10,000 - $25,500");
      \u0275\u0275elementStart(102, "span", 38);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_span_click_102_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(103, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "a", 40);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_a_click_104_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(105, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 41)(107, "table", 42);
      \u0275\u0275listener("matSortChange", function PurchaseListComponent_Template_table_matSortChange_107_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(108, "thead")(109, "tr")(110, "th", 43)(111, "div", 44);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_div_click_111_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(112, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_input_ngModelChange_112_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "th", 43);
      \u0275\u0275text(114, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 46);
      \u0275\u0275text(116, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 47);
      \u0275\u0275text(118, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th", 48);
      \u0275\u0275text(120, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 43);
      \u0275\u0275text(122, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 49);
      \u0275\u0275text(124, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(125, "th", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "tbody");
      \u0275\u0275repeaterCreate(127, PurchaseListComponent_For_128_Template, 42, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(129, PurchaseListComponent_Conditional_129_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(130, PurchaseListComponent_app_custom_pagination_130_Template, 1, 0, "app-custom-pagination", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "div", 51)(132, "div", 52)(133, "div", 53)(134, "h6", 54);
      \u0275\u0275text(135, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "button", 55);
      \u0275\u0275element(137, "i", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "div", 57)(139, "form", 58)(140, "div", 10)(141, "label", 59);
      \u0275\u0275text(142, "Vendor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 26)(144, "a", 60);
      \u0275\u0275text(145, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 61)(147, "div", 10)(148, "div", 62)(149, "span", 63);
      \u0275\u0275element(150, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275element(151, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "ul", 10)(153, "li", 66)(154, "label", 67);
      \u0275\u0275element(155, "input", 68);
      \u0275\u0275text(156, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "a", 69);
      \u0275\u0275text(158, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "li")(160, "label", 70);
      \u0275\u0275element(161, "input", 33);
      \u0275\u0275elementStart(162, "span", 71);
      \u0275\u0275element(163, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(164, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "li")(166, "label", 70);
      \u0275\u0275element(167, "input", 33);
      \u0275\u0275elementStart(168, "span", 71);
      \u0275\u0275element(169, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(170, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "li")(172, "label", 70);
      \u0275\u0275element(173, "input", 33);
      \u0275\u0275elementStart(174, "span", 71);
      \u0275\u0275element(175, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(176, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "li")(178, "label", 70);
      \u0275\u0275element(179, "input", 33);
      \u0275\u0275elementStart(180, "span", 71);
      \u0275\u0275element(181, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(182, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "li")(184, "label", 70);
      \u0275\u0275element(185, "input", 33);
      \u0275\u0275elementStart(186, "span", 71);
      \u0275\u0275element(187, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(188, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "li")(190, "label", 70);
      \u0275\u0275element(191, "input", 33);
      \u0275\u0275elementStart(192, "span", 71);
      \u0275\u0275element(193, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(194, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(195, "div", 78)(196, "div", 79)(197, "a", 80);
      \u0275\u0275text(198, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "div", 79)(200, "a", 81);
      \u0275\u0275text(201, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(202, "div", 10)(203, "label", 59);
      \u0275\u0275text(204, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 26)(206, "a", 60);
      \u0275\u0275text(207, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 61)(209, "div", 10)(210, "div", 62)(211, "span", 63);
      \u0275\u0275element(212, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275element(213, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "ul", 10)(215, "li", 66)(216, "label", 67);
      \u0275\u0275element(217, "input", 68);
      \u0275\u0275text(218, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "a", 69);
      \u0275\u0275text(220, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "li")(222, "label", 70);
      \u0275\u0275element(223, "input", 33);
      \u0275\u0275text(224, " Cah ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "li")(226, "label", 70);
      \u0275\u0275element(227, "input", 33);
      \u0275\u0275text(228, " Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "li")(230, "label", 70);
      \u0275\u0275element(231, "input", 33);
      \u0275\u0275text(232, " Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "li")(234, "label", 70);
      \u0275\u0275element(235, "input", 33);
      \u0275\u0275text(236, " Bank Trnsfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "li")(238, "label", 70);
      \u0275\u0275element(239, "input", 33);
      \u0275\u0275text(240, " Stripe ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(241, "div", 78)(242, "div", 79)(243, "a", 80);
      \u0275\u0275text(244, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 79)(246, "a", 81);
      \u0275\u0275text(247, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(248, "div", 10)(249, "label", 59);
      \u0275\u0275text(250, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 61)(252, "div", 82)(253, "div", 83)(254, "span", 84);
      \u0275\u0275text(255, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "span", 84);
      \u0275\u0275text(257, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "mat-slider", 85);
      \u0275\u0275element(259, "input", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "p");
      \u0275\u0275text(261, "Range : ");
      \u0275\u0275elementStart(262, "span", 87);
      \u0275\u0275text(263, "$200 - $5695");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(264, "div", 10)(265, "label", 88);
      \u0275\u0275text(266, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "div", 89);
      \u0275\u0275element(268, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 10)(270, "label", 59);
      \u0275\u0275text(271, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "div", 26)(273, "a", 60);
      \u0275\u0275text(274, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "div", 61)(276, "div", 10)(277, "div", 62)(278, "span", 63);
      \u0275\u0275element(279, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "ul", 10)(282, "li", 66)(283, "label", 67);
      \u0275\u0275element(284, "input", 68);
      \u0275\u0275text(285, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "a", 69);
      \u0275\u0275text(287, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "label", 70);
      \u0275\u0275element(290, "input", 33);
      \u0275\u0275text(291, " Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li")(293, "label", 70);
      \u0275\u0275element(294, "input", 33);
      \u0275\u0275text(295, " Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "li")(297, "label", 70);
      \u0275\u0275element(298, "input", 33);
      \u0275\u0275text(299, " Cancelled ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(300, "div", 78)(301, "div", 79)(302, "a", 80);
      \u0275\u0275text(303, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 79)(305, "a", 81);
      \u0275\u0275text(306, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(307, "div", 90)(308, "div", 78)(309, "div", 79)(310, "a", 91);
      \u0275\u0275text(311, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "div", 79)(313, "button", 92);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_button_click_313_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(314, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(315, "div", 93)(316, "div", 94)(317, "div", 95)(318, "div", 96)(319, "div", 10);
      \u0275\u0275element(320, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "h6", 98);
      \u0275\u0275text(322, "Delete Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "p", 10);
      \u0275\u0275text(324, "Are you sure, you want to delete purchase?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "div", 99)(326, "a", 100);
      \u0275\u0275text(327, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "a", 101);
      \u0275\u0275text(329, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.addPurchase);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(59);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 129 : -1);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseListComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-list", imports: [
      DateRangePickerComponent,
      MatSliderModule,
      CommonModule,
      FormsModule,
      CustomPaginationComponent,
      MatSortModule,
      RouterLink
    ], template: `			<!-- Start Container -->
            <div class="content-two">

                <!-- Start Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Purchase</h6>
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
                            <a [routerLink]="routes.addPurchase" class="btn btn-primary d-flex align-items-center"><i class="isax isax-add-circle5 me-1"></i>New Purchase</a>
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
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Vendors Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
                    </div>
                    <!-- /Filter Info -->

                </div>
                <!-- /Table Search -->

                <!-- Table List -->
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
                                            <a [routerLink]="routes.editPurchase" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
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
                <!-- /Table List -->

            </div>
			<!-- End Container -->


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
                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Filter -->

		<!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Purchase</h6>
                        <p class="mb-3">Are you sure, you want to delete purchase?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
					</div><!-- End modal body-->
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
        </div>
		<!-- End Delete Modal  -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseListComponent, { className: "PurchaseListComponent", filePath: "src/app/features/purchases/purchases/purchase-list/purchase-list.component.ts", lineNumber: 23 });
})();
export {
  PurchaseListComponent
};
//# sourceMappingURL=chunk-5A76HCCI.js.map
