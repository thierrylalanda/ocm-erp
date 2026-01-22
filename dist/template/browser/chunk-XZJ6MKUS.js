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

// src/app/features/finance/bank-accounts/bank-accounts-list/bank-accounts-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function BankAccountsListComponent_For_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 118)(2, "div", 119)(3, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function BankAccountsListComponent_For_129_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 121)(6, "a", 122);
    \u0275\u0275element(7, "img", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 124)(10, "a", 125);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 126);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 121)(22, "span", 127);
    \u0275\u0275text(23);
    \u0275\u0275element(24, "i", 128);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td", 129)(26, "a", 130);
    \u0275\u0275element(27, "i", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul", 7)(29, "li")(30, "a", 132);
    \u0275\u0275element(31, "i", 133);
    \u0275\u0275text(32, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 134);
    \u0275\u0275element(35, "i", 135);
    \u0275\u0275text(36, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.accountHolderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.accountNo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.accountType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.notes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.openingBalance);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
  }
}
function BankAccountsListComponent_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 136);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function BankAccountsListComponent_app_custom_pagination_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var BankAccountsListComponent = class _BankAccountsListComponent {
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
    this.data.getbankaccount().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.bankAccountList) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getbankaccount().subscribe((apiRes) => {
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
  static \u0275fac = function BankAccountsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankAccountsListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankAccountsListComponent, selectors: [["app-bank-accounts-list"]], decls: 402, vars: 17, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-0"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-dark", "d-inline-flex", "align-items-center", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "open"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "filter-range"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "irs", 2, "visibility", "visible"], ["min", "0", "max", "1000", "discrete", "", 3, "displayWith"], ["value", "350", "matSliderThumb", ""], [1, "text-gray-9"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["rows", "5", "cols", "5", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "Emily Clark", 1, "form-control"], ["type", "text", "value", "3298784309485", 1, "form-control"], ["type", "text", "value", "Global Trust Bank", 1, "form-control"], ["type", "text", "value", "GTBK0001234", 1, "form-control"], ["type", "text", "value", "New York", 1, "form-control"], ["placeholder", "Savings Account", 1, "custom-mat-select", "select"], ["type", "text", "value", "$200", 1, "form-control"], [1, "col-md-13"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "badge", "badge-soft-success", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle4", "ms-1"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function BankAccountsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
      \u0275\u0275text(4, "Bank Accounts");
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
      \u0275\u0275elementStart(17, "a", 9);
      \u0275\u0275text(18, "Account Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 10);
      \u0275\u0275element(20, "i", 11);
      \u0275\u0275text(21, "New Bank Account ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "a", 17);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19)(30, "label")(31, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function BankAccountsListComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BankAccountsListComponent_Template_input_ngModelChange_31_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "a", 21);
      \u0275\u0275element(33, "i", 22);
      \u0275\u0275text(34, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 14)(36, "div", 23)(37, "a", 24);
      \u0275\u0275element(38, "i", 25);
      \u0275\u0275text(39, "Sort By : ");
      \u0275\u0275elementStart(40, "span", 26);
      \u0275\u0275text(41, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "ul", 27)(43, "li")(44, "a", 8);
      \u0275\u0275text(45, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 8);
      \u0275\u0275text(48, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "div", 23)(50, "a", 28);
      \u0275\u0275element(51, "i", 29);
      \u0275\u0275text(52, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "ul", 30)(54, "li")(55, "label", 31);
      \u0275\u0275element(56, "i", 32)(57, "input", 33);
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "Account Holder");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "li")(61, "label", 31);
      \u0275\u0275element(62, "i", 32)(63, "input", 33);
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Account No");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "li")(67, "label", 31);
      \u0275\u0275element(68, "i", 32)(69, "input", 33);
      \u0275\u0275elementStart(70, "span");
      \u0275\u0275text(71, "Account Type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "li")(73, "label", 31);
      \u0275\u0275element(74, "i", 32)(75, "input", 33);
      \u0275\u0275elementStart(76, "span");
      \u0275\u0275text(77, "Notes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "li")(79, "label", 31);
      \u0275\u0275element(80, "i", 32)(81, "input", 33);
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "Opening Balance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "li")(85, "label", 31);
      \u0275\u0275element(86, "i", 32)(87, "input", 34);
      \u0275\u0275elementStart(88, "span");
      \u0275\u0275text(89, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(90, "div", 35)(91, "h6", 36);
      \u0275\u0275text(92, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span", 37)(94, "span", 38);
      \u0275\u0275text(95, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(96, "Account Holders Selected");
      \u0275\u0275elementStart(97, "span", 39);
      \u0275\u0275listener("click", function BankAccountsListComponent_Template_span_click_97_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(98, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "span", 37)(100, "span", 38);
      \u0275\u0275text(101, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, "$10,000 - $25,500");
      \u0275\u0275elementStart(103, "span", 39);
      \u0275\u0275listener("click", function BankAccountsListComponent_Template_span_click_103_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(104, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "a", 41);
      \u0275\u0275listener("click", function BankAccountsListComponent_Template_a_click_105_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(106, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 42)(108, "table", 43);
      \u0275\u0275listener("matSortChange", function BankAccountsListComponent_Template_table_matSortChange_108_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(109, "thead", 44)(110, "tr")(111, "th", 45)(112, "div", 46);
      \u0275\u0275listener("click", function BankAccountsListComponent_Template_div_click_112_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(113, "input", 47);
      \u0275\u0275twoWayListener("ngModelChange", function BankAccountsListComponent_Template_input_ngModelChange_113_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "th", 45);
      \u0275\u0275text(115, "Account Holder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 45);
      \u0275\u0275text(117, "Account No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 45);
      \u0275\u0275text(119, "Account Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 45);
      \u0275\u0275text(121, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th", 48);
      \u0275\u0275text(123, "Opening Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th", 45);
      \u0275\u0275text(125, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(126, "th", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "tbody");
      \u0275\u0275repeaterCreate(128, BankAccountsListComponent_For_129_Template, 37, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(130, BankAccountsListComponent_Conditional_130_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(131, BankAccountsListComponent_app_custom_pagination_131_Template, 1, 0, "app-custom-pagination", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 50)(133, "div", 51)(134, "div", 52)(135, "h6", 53);
      \u0275\u0275text(136, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "button", 54);
      \u0275\u0275element(138, "i", 55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "div", 56)(140, "form", 57)(141, "div", 12)(142, "label", 58);
      \u0275\u0275text(143, "Opening Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 23)(145, "a", 59);
      \u0275\u0275text(146, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 60)(148, "div", 61)(149, "div", 62)(150, "span", 63);
      \u0275\u0275text(151, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "span", 63);
      \u0275\u0275text(153, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "mat-slider", 64);
      \u0275\u0275element(155, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p");
      \u0275\u0275text(157, "Range : ");
      \u0275\u0275elementStart(158, "span", 66);
      \u0275\u0275text(159, "$200 - $5695");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(160, "div", 12)(161, "label", 58);
      \u0275\u0275text(162, "Account Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 23)(164, "a", 59);
      \u0275\u0275text(165, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 60)(167, "div", 12)(168, "div", 67)(169, "span", 68);
      \u0275\u0275element(170, "i", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275element(171, "input", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "ul", 12)(173, "li", 71)(174, "label", 72);
      \u0275\u0275element(175, "input", 73);
      \u0275\u0275text(176, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "a", 74);
      \u0275\u0275text(178, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "li")(180, "label", 75);
      \u0275\u0275element(181, "input", 34);
      \u0275\u0275text(182, " Current Account ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "li")(184, "label", 75);
      \u0275\u0275element(185, "input", 34);
      \u0275\u0275text(186, " Savings Account ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(187, "div", 76)(188, "div", 77)(189, "a", 78);
      \u0275\u0275text(190, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 77)(192, "a", 79);
      \u0275\u0275text(193, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(194, "div", 12)(195, "label", 58);
      \u0275\u0275text(196, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div", 23)(198, "a", 59);
      \u0275\u0275text(199, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 60)(201, "div", 12)(202, "div", 67)(203, "span", 68);
      \u0275\u0275element(204, "i", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275element(205, "input", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "ul", 12)(207, "li", 71)(208, "label", 72);
      \u0275\u0275element(209, "input", 73);
      \u0275\u0275text(210, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "a", 74);
      \u0275\u0275text(212, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "li")(214, "label", 75);
      \u0275\u0275element(215, "input", 34);
      \u0275\u0275text(216, " Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "li")(218, "label", 75);
      \u0275\u0275element(219, "input", 34);
      \u0275\u0275text(220, " Inactive ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "div", 76)(222, "div", 77)(223, "a", 78);
      \u0275\u0275text(224, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div", 77)(226, "a", 79);
      \u0275\u0275text(227, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(228, "div", 80)(229, "div", 76)(230, "div", 77)(231, "a", 81);
      \u0275\u0275text(232, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 77)(234, "button", 82);
      \u0275\u0275listener("click", function BankAccountsListComponent_Template_button_click_234_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(235, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(236, "div", 83)(237, "div", 84)(238, "div", 85)(239, "div", 86)(240, "h4", 87);
      \u0275\u0275text(241, "Add New Bank Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "button", 88);
      \u0275\u0275element(243, "i", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "form")(245, "div", 89)(246, "div", 90)(247, "div", 91)(248, "div", 12)(249, "label", 58);
      \u0275\u0275text(250, "Account Holder Name");
      \u0275\u0275elementStart(251, "span", 92);
      \u0275\u0275text(252, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(253, "input", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "div", 94)(255, "div", 12)(256, "label", 58);
      \u0275\u0275text(257, "Account Number");
      \u0275\u0275elementStart(258, "span", 92);
      \u0275\u0275text(259, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(260, "input", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 94)(262, "div", 12)(263, "label", 58);
      \u0275\u0275text(264, "Bank Name");
      \u0275\u0275elementStart(265, "span", 92);
      \u0275\u0275text(266, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(267, "input", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "div", 94)(269, "div", 12)(270, "label", 58);
      \u0275\u0275text(271, "IFSC Code");
      \u0275\u0275elementStart(272, "span", 92);
      \u0275\u0275text(273, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(274, "input", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "div", 94)(276, "div", 12)(277, "label", 58);
      \u0275\u0275text(278, "Branch");
      \u0275\u0275elementStart(279, "span", 92);
      \u0275\u0275text(280, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(281, "input", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "div", 94)(283, "div")(284, "label", 58);
      \u0275\u0275text(285, "Account Type");
      \u0275\u0275elementStart(286, "span", 92);
      \u0275\u0275text(287, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "mat-select", 95)(289, "mat-option", 96);
      \u0275\u0275text(290, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "mat-option", 96);
      \u0275\u0275text(292, "Savings Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "mat-option", 96);
      \u0275\u0275text(294, "Current Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(295, "div", 94)(296, "div", 12)(297, "label", 58);
      \u0275\u0275text(298, "Opening Balance");
      \u0275\u0275elementStart(299, "span", 92);
      \u0275\u0275text(300, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(301, "input", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "div", 91)(303, "label", 58);
      \u0275\u0275text(304, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(305, "textarea", 97);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(306, "div", 98)(307, "button", 99);
      \u0275\u0275text(308, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "button", 100);
      \u0275\u0275text(310, "Add New");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(311, "div", 101)(312, "div", 84)(313, "div", 85)(314, "div", 86)(315, "h4", 87);
      \u0275\u0275text(316, "Edit Bank Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "button", 88);
      \u0275\u0275element(318, "i", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "form")(320, "div", 89)(321, "div", 90)(322, "div", 91)(323, "div", 12)(324, "label", 58);
      \u0275\u0275text(325, "Account Holder Name");
      \u0275\u0275elementStart(326, "span", 92);
      \u0275\u0275text(327, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(328, "input", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div", 94)(330, "div", 12)(331, "label", 58);
      \u0275\u0275text(332, "Account Number");
      \u0275\u0275elementStart(333, "span", 92);
      \u0275\u0275text(334, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(335, "input", 103);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(336, "div", 94)(337, "div", 12)(338, "label", 58);
      \u0275\u0275text(339, "Bank Name");
      \u0275\u0275elementStart(340, "span", 92);
      \u0275\u0275text(341, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(342, "input", 104);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "div", 94)(344, "div", 12)(345, "label", 58);
      \u0275\u0275text(346, "IFSC Code");
      \u0275\u0275elementStart(347, "span", 92);
      \u0275\u0275text(348, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(349, "input", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "div", 94)(351, "div", 12)(352, "label", 58);
      \u0275\u0275text(353, "Branch");
      \u0275\u0275elementStart(354, "span", 92);
      \u0275\u0275text(355, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(356, "input", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "div", 94)(358, "div")(359, "label", 58);
      \u0275\u0275text(360, "Account Type");
      \u0275\u0275elementStart(361, "span", 92);
      \u0275\u0275text(362, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "mat-select", 107)(364, "mat-option", 96);
      \u0275\u0275text(365, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "mat-option", 96);
      \u0275\u0275text(367, "Savings Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "mat-option", 96);
      \u0275\u0275text(369, "Current Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(370, "div", 94)(371, "div", 12)(372, "label", 58);
      \u0275\u0275text(373, "Opening Balance");
      \u0275\u0275elementStart(374, "span", 92);
      \u0275\u0275text(375, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(376, "input", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(377, "div", 109)(378, "label", 58);
      \u0275\u0275text(379, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "textarea", 97);
      \u0275\u0275text(381, " Account that allows individuals to save money");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(382, "div", 98)(383, "button", 99);
      \u0275\u0275text(384, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "button", 100);
      \u0275\u0275text(386, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(387, "div", 110)(388, "div", 111)(389, "div", 85)(390, "div", 112)(391, "div", 12);
      \u0275\u0275element(392, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "h6", 114);
      \u0275\u0275text(394, "Delete Bank Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "p", 12);
      \u0275\u0275text(396, "Are you sure, you want to delete bank account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "div", 115)(398, "a", 116);
      \u0275\u0275text(399, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "a", 117);
      \u0275\u0275text(401, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.bankAccountsType);
      \u0275\u0275advance(14);
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
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 130 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(23);
      \u0275\u0275property("displayWith", ctx.formatLabel);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, MatSliderModule, MatSlider, MatSliderThumb, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankAccountsListComponent, [{
    type: Component,
    args: [{ selector: "app-bank-accounts-list", imports: [
      CommonModule,
      MatSliderModule,
      CustomPaginationComponent,
      MatSortModule,
      RouterLink,
      FormsModule,
      MatSelectModule
    ], template: ` <!-- Start Content -->
 <div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Bank Accounts</h6>
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
            <a [routerLink]="routes.bankAccountsType" class="btn btn-dark d-inline-flex align-items-center">Account Type</a>
            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                <i class="isax isax-add-circle5 me-1"></i>New Bank Account
            </a>
        </div>
    </div>
    <!-- End Breadcrumb -->

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
                                <span>Account Holder</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Account No</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Account Type</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Notes</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Opening Balance</span>
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
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Account Holders Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>$10,000 - $25,500<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
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
                    <th class="no-sort">Account Holder Name</th>
                    <th class="no-sort">Account No</th>
                    <th class="no-sort">Account Type</th>
                    <th class="no-sort">Notes</th>
                    <th mat-sort-header="open">Opening Balance</th>
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
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.accountHolderName}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        {{data.accountNo}}
                    </td>
                    <td>
                        {{data.accountType}}
                    </td>
                    <td>{{data.notes}}</td>
                    <td class="text-dark">{{data.openingBalance}}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">
                                {{data.status}} <i class="isax isax-tick-circle4 ms-1"></i>
                            </span>
                        </div>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-ellipsis"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
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
    <app-custom-pagination *ngIf="row"/>
    <!-- End Table List -->

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
                <label class="form-label">Opening Balance</label>
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
                <label class="form-label">Account Type</label>
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
                                    <input class="form-check-input m-0 me-2" type="checkbox"> Current Account
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> Savings Account
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
                                    <input class="form-check-input m-0 me-2" type="checkbox"> Active
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox"> Inactive
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
<div id="add_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Bank Account</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Account Holder Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Account Number<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Bank Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">IFSC Code<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Branch<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Savings Account</mat-option>
                                    <mat-option value="1">Current Account</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Opening Balance<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label class="form-label">Notes</label>
                            <textarea rows="5" cols="5" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Add Modal -->

<!-- Start Edit Modal  -->
<div id="edit_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Bank Account</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Account Holder Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Emily Clark">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Account Number<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="3298784309485">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Bank Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Global Trust Bank">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">IFSC Code<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="GTBK0001234">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Branch<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="New York">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Savings Account">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Savings Account</mat-option>
                                    <mat-option value="1">Current Account</mat-option>
                                </mat-select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Opening Balance<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="$200">
                            </div>
                        </div>
                        <div class="col-md-13">
                            <label class="form-label">Notes</label>
                            <textarea rows="5" cols="5" class="form-control"> Account that allows individuals to save money</textarea>
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
<!-- End Edit Modal -->

<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete Bank Account</h6>
                <p class="mb-3">Are you sure, you want to delete bank account?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankAccountsListComponent, { className: "BankAccountsListComponent", filePath: "src/app/features/finance/bank-accounts/bank-accounts-list/bank-accounts-list.component.ts", lineNumber: 22 });
})();
export {
  BankAccountsListComponent
};
//# sourceMappingURL=chunk-XZJ6MKUS.js.map
