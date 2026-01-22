import {
  DateRangePickerComponent
} from "./chunk-2I7DAYVQ.js";
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
import "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import {
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/super-admin/packages/packages.component.ts
var _c0 = () => ({ standalone: true });
function PackagesComponent_For_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 156);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 157);
    \u0275\u0275text(14);
    \u0275\u0275element(15, "i", 158);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 159)(17, "a", 160);
    \u0275\u0275element(18, "i", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 12)(20, "li")(21, "a", 162);
    \u0275\u0275element(22, "i", 163);
    \u0275\u0275text(23, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "a", 164);
    \u0275\u0275element(26, "i", 165);
    \u0275\u0275text(27, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r1.Plan, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.PlanType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.TotalSubscribers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.Amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.CreatedOn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r1.Status, " ");
  }
}
function PackagesComponent_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 166);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PackagesComponent_app_custom_pagination_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PackagesComponent = class _PackagesComponent {
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
    this.data.getPackages().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.packages) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPackages().subscribe((apiRes) => {
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
  static \u0275fac = function PackagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackagesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackagesComponent, selectors: [["app-packages"]], decls: 766, vars: 7, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "me-2"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-icon", "btn-sm", "active", "border", "rounded", "bg-primary", "text-white", "me-1", 3, "routerLink"], [1, "isax", "isax-menu-1"], [1, "btn", "btn-icon", "border", "rounded", "btn-sm", 3, "routerLink"], [1, "isax", "isax-grid-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_plans", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-lg-3", "col-md-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "overflow-hidden"], [1, "fs-14", "mb-1", "text-truncate"], [1, "fs-16", "fw-semibold"], [1, "avatar", "avatar-lg", "bg-warning", "flex-shrink-0"], [1, "isax", "isax-box5", "fs-32"], [1, "avatar", "avatar-lg", "bg-success", "flex-shrink-0"], [1, "isax", "isax-box-tick5", "fs-32"], [1, "avatar", "avatar-lg", "bg-danger", "flex-shrink-0"], [1, "isax", "isax-box-remove5", "fs-32"], [1, "avatar", "avatar-lg", "bg-info", "flex-shrink-0"], [1, "isax", "isax-box-25", "fs-32"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "plan"], ["mat-sort-header", "plantype"], ["mat-sort-header", "total"], ["mat-sort-header", "amount"], ["mat-sort-header", "created"], ["mat-sort-header", "status"], [1, "no-sort"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/icons/company-01.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-02.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-03.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-04.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "add_plans", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa", "fa-x"], [1, "modal-body", "pb-0"], [1, "col-md-12"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "isax", "isax-image", "text-primary", "fs-24"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9"], [1, "col-md-6"], [1, "text-danger"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "d-flex", "justify-content-between"], [1, "text-primary"], [1, "fa-solid", "fa-circle-exclamation", "me-2"], [1, "col-md-3"], [1, "pass-group"], ["type", "text", 1, "form-control"], [1, "col-lg-3"], [1, "col-lg-12"], [1, "form-check", "d-flex", "align-items-center"], [1, "form-check-label", "mt-0", "text-dark", "fw-medium"], ["type", "checkbox", "id", "select-all", 1, "form-check-input"], [1, "col-lg-3", "col-sm-6"], [1, "form-check", "form-check-md", "d-flex", "align-items-center", "mb-3"], ["type", "checkbox", 1, "form-check-input"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "form-switch", "me-2"], ["type", "checkbox", "role", "switch", 1, "form-check-input", "me-2"], [1, "form-check-label", "mt-0", "me-2", "text-dark", "fw-semibold", "fs-16"], [1, "row", "align-items-center", "gx-3"], [1, "col-md-4"], [1, "flex-fill"], [1, "d-block", "align-items-center", "ms-3"], [1, "form-check-label", "mt-0", "me-2", "text-dark"], [1, "col-md-5"], [1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit_plans", 1, "modal", "fade"], ["type", "checkbox", "id", "select-all2", 1, "form-check-input"], [1, "form-check-label", "mt-0", "text-dark", "fw-semibold", "fs-16"], [1, "col-md-9"], [1, "d-flex", "align-items-start", "flex-column", "ms-2"], [1, "form-check", "form-switch", "mb-1"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["href", "javascript:void(0);", 1, "text-dark"], [1, "badge", "badge-soft-success", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle", "ms-1"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_plans", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PackagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Packages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9)(13, "a", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275text(15, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul", 12)(17, "li")(18, "a", 13);
      \u0275\u0275text(19, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 13);
      \u0275\u0275text(22, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div")(24, "a", 14);
      \u0275\u0275element(25, "i", 15);
      \u0275\u0275text(26, "New Plan");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 16)(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div")(33, "p", 21);
      \u0275\u0275text(34, "Total Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h4", 22);
      \u0275\u0275text(36, "08");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div")(38, "span", 23);
      \u0275\u0275element(39, "i", 24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 17)(41, "div", 18)(42, "div", 19)(43, "div", 20)(44, "div")(45, "p", 21);
      \u0275\u0275text(46, "Active Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h4", 22);
      \u0275\u0275text(48, "07");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div")(50, "span", 25);
      \u0275\u0275element(51, "i", 26);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(52, "div", 17)(53, "div", 18)(54, "div", 19)(55, "div", 20)(56, "div")(57, "p", 21);
      \u0275\u0275text(58, "Inactive Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h4", 22);
      \u0275\u0275text(60, "0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div")(62, "span", 27);
      \u0275\u0275element(63, "i", 28);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(64, "div", 17)(65, "div", 18)(66, "div", 19)(67, "div", 20)(68, "div")(69, "p", 21);
      \u0275\u0275text(70, "No Of Plan Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h4", 22);
      \u0275\u0275text(72, "04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div")(74, "span", 29);
      \u0275\u0275element(75, "i", 30);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(76, "div", 31)(77, "div", 32)(78, "div", 33)(79, "div", 34)(80, "div", 35)(81, "a", 36);
      \u0275\u0275element(82, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 38)(84, "label")(85, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function PackagesComponent_Template_input_ngModelChange_85_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PackagesComponent_Template_input_ngModelChange_85_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(86, "div", 33)(87, "div", 40)(88, "a", 41);
      \u0275\u0275element(89, "i", 42);
      \u0275\u0275text(90, "Sort By : ");
      \u0275\u0275elementStart(91, "span", 43);
      \u0275\u0275text(92, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "ul", 44)(94, "li")(95, "a", 13);
      \u0275\u0275text(96, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "li")(98, "a", 13);
      \u0275\u0275text(99, "Oldest");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(100, "div", 45)(101, "table", 46);
      \u0275\u0275listener("matSortChange", function PackagesComponent_Template_table_matSortChange_101_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(102, "thead", 47)(103, "tr")(104, "th", 48);
      \u0275\u0275text(105, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 49);
      \u0275\u0275text(107, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 50);
      \u0275\u0275text(109, "Total Subscribers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 51);
      \u0275\u0275text(111, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 52);
      \u0275\u0275text(113, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 53);
      \u0275\u0275text(115, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "th", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "tbody");
      \u0275\u0275repeaterCreate(118, PackagesComponent_For_119_Template, 28, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(120, PackagesComponent_Conditional_120_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(121, PackagesComponent_app_custom_pagination_121_Template, 1, 0, "app-custom-pagination", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 56)(123, "div", 57)(124, "div", 58)(125, "h6", 59);
      \u0275\u0275text(126, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "button", 60);
      \u0275\u0275element(128, "i", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "div", 62)(130, "form", 63)(131, "div", 31)(132, "label", 64);
      \u0275\u0275text(133, "Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div", 40)(135, "a", 65);
      \u0275\u0275text(136, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 66)(138, "div", 31)(139, "div", 67)(140, "span", 68);
      \u0275\u0275element(141, "i", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275element(142, "input", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "ul", 31)(144, "li", 71)(145, "label", 72);
      \u0275\u0275element(146, "input", 73);
      \u0275\u0275text(147, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "a", 74);
      \u0275\u0275text(149, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "li")(151, "label", 75);
      \u0275\u0275element(152, "input", 73);
      \u0275\u0275elementStart(153, "span", 76);
      \u0275\u0275element(154, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(155, "Trend Hive ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "li")(157, "label", 75);
      \u0275\u0275element(158, "input", 73);
      \u0275\u0275elementStart(159, "span", 76);
      \u0275\u0275element(160, "img", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275text(161, "Quick Cart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "li")(163, "label", 75);
      \u0275\u0275element(164, "input", 73);
      \u0275\u0275elementStart(165, "span", 76);
      \u0275\u0275element(166, "img", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275text(167, "Tech Bazaar ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "li")(169, "label", 75);
      \u0275\u0275element(170, "input", 73);
      \u0275\u0275elementStart(171, "span", 76);
      \u0275\u0275element(172, "img", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275text(173, "Harvest Basket ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(174, "div", 81)(175, "div", 82)(176, "a", 83);
      \u0275\u0275text(177, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 82)(179, "a", 84);
      \u0275\u0275text(180, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(181, "div", 31)(182, "label", 85);
      \u0275\u0275text(183, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 86);
      \u0275\u0275element(185, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "div", 31)(187, "label", 64);
      \u0275\u0275text(188, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "div", 40)(190, "a", 65);
      \u0275\u0275text(191, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 66)(193, "ul", 31)(194, "li")(195, "label", 75);
      \u0275\u0275element(196, "input", 73)(197, "i", 87);
      \u0275\u0275text(198, "Approved ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "li")(200, "label", 75);
      \u0275\u0275element(201, "input", 73)(202, "i", 88);
      \u0275\u0275text(203, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "label", 75);
      \u0275\u0275element(206, "input", 73)(207, "i", 89);
      \u0275\u0275text(208, "Rejected ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(209, "div", 90)(210, "div", 81)(211, "div", 82)(212, "a", 91);
      \u0275\u0275text(213, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "div", 82)(215, "button", 92);
      \u0275\u0275text(216, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(217, "div", 93)(218, "div", 94)(219, "div", 95)(220, "div", 96)(221, "h4", 97);
      \u0275\u0275text(222, "Add New Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "button", 98);
      \u0275\u0275element(224, "i", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "form")(226, "div", 100)(227, "div", 16)(228, "div", 101)(229, "div", 31)(230, "span", 102);
      \u0275\u0275text(231, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 4)(233, "div", 103);
      \u0275\u0275element(234, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "div", 105)(236, "div", 106);
      \u0275\u0275element(237, "i", 107);
      \u0275\u0275text(238, "Upload Image ");
      \u0275\u0275element(239, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "span", 109);
      \u0275\u0275text(241, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(242, "div", 110)(243, "div", 31)(244, "label", 64);
      \u0275\u0275text(245, "Plan Name");
      \u0275\u0275elementStart(246, "span", 111);
      \u0275\u0275text(247, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "mat-select", 112)(249, "mat-option", 113);
      \u0275\u0275text(250, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "mat-option", 113);
      \u0275\u0275text(252, "Advanced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "mat-option", 113);
      \u0275\u0275text(254, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "mat-option", 113);
      \u0275\u0275text(256, "Enterprise");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(257, "div", 110)(258, "div", 31)(259, "label", 64);
      \u0275\u0275text(260, "Plan Type");
      \u0275\u0275elementStart(261, "span", 111);
      \u0275\u0275text(262, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "mat-select", 112)(264, "mat-option", 113);
      \u0275\u0275text(265, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "mat-option", 113);
      \u0275\u0275text(267, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "mat-option", 113);
      \u0275\u0275text(269, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(270, "div", 110)(271, "div", 31)(272, "label", 64);
      \u0275\u0275text(273, "Plan Position");
      \u0275\u0275elementStart(274, "span", 111);
      \u0275\u0275text(275, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "mat-select", 112)(277, "mat-option", 113);
      \u0275\u0275text(278, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "mat-option", 113);
      \u0275\u0275text(280, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "mat-option", 113);
      \u0275\u0275text(282, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "mat-option", 113);
      \u0275\u0275text(284, "3");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(285, "div", 110)(286, "div", 31)(287, "label", 64);
      \u0275\u0275text(288, "Plan Currency");
      \u0275\u0275elementStart(289, "span", 111);
      \u0275\u0275text(290, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "mat-select", 112)(292, "mat-option", 113);
      \u0275\u0275text(293, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "mat-option", 113);
      \u0275\u0275text(295, "USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "mat-option", 113);
      \u0275\u0275text(297, "EURO");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(298, "div", 110)(299, "div", 31)(300, "div", 114)(301, "label", 64);
      \u0275\u0275text(302, "Plan Currency");
      \u0275\u0275elementStart(303, "span", 111);
      \u0275\u0275text(304, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "span", 115);
      \u0275\u0275element(306, "i", 116);
      \u0275\u0275text(307, "Set 0 for free");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "mat-select", 112)(309, "mat-option", 113);
      \u0275\u0275text(310, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "mat-option", 113);
      \u0275\u0275text(312, "Fixed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "mat-option", 113);
      \u0275\u0275text(314, "Percentage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(315, "div", 117)(316, "div", 31)(317, "label", 64);
      \u0275\u0275text(318, "Discount Type");
      \u0275\u0275elementStart(319, "span", 111);
      \u0275\u0275text(320, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(321, "div", 118)(322, "mat-select", 112)(323, "mat-option", 113);
      \u0275\u0275text(324, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "mat-option", 113);
      \u0275\u0275text(326, "Fixed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "mat-option", 113);
      \u0275\u0275text(328, "Percentage");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(329, "div", 117)(330, "div", 31)(331, "label", 64);
      \u0275\u0275text(332, "Discount");
      \u0275\u0275elementStart(333, "span", 111);
      \u0275\u0275text(334, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "div", 118);
      \u0275\u0275element(336, "input", 119);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "div", 120)(338, "div", 31)(339, "label", 64);
      \u0275\u0275text(340, "Limitations Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275element(341, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "div", 120)(343, "div", 31)(344, "label", 64);
      \u0275\u0275text(345, "Max Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275element(346, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(347, "div", 120)(348, "div", 31)(349, "label", 64);
      \u0275\u0275text(350, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275element(351, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "div", 120)(353, "div", 31)(354, "label", 64);
      \u0275\u0275text(355, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(356, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "div", 121)(358, "div", 71)(359, "h6");
      \u0275\u0275text(360, "Plan Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "div", 122)(362, "label", 123);
      \u0275\u0275element(363, "input", 124);
      \u0275\u0275text(364, " Select All ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(365, "div", 16)(366, "div", 125)(367, "div", 126)(368, "label", 123);
      \u0275\u0275element(369, "input", 127);
      \u0275\u0275text(370, " Employees ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(371, "div", 125)(372, "div", 126)(373, "label", 123);
      \u0275\u0275element(374, "input", 127);
      \u0275\u0275text(375, " Invoices ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(376, "div", 125)(377, "div", 126)(378, "label", 123);
      \u0275\u0275element(379, "input", 127);
      \u0275\u0275text(380, " Reports ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(381, "div", 125)(382, "div", 126)(383, "label", 123);
      \u0275\u0275element(384, "input", 127);
      \u0275\u0275text(385, " Contacts ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(386, "div", 125)(387, "div", 126)(388, "label", 123);
      \u0275\u0275element(389, "input", 127);
      \u0275\u0275text(390, " Clients ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(391, "div", 125)(392, "div", 126)(393, "label", 123);
      \u0275\u0275element(394, "input", 127);
      \u0275\u0275text(395, " Estimates ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(396, "div", 125)(397, "div", 126)(398, "label", 123);
      \u0275\u0275element(399, "input", 127);
      \u0275\u0275text(400, " Goals ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(401, "div", 125)(402, "div", 126)(403, "label", 123);
      \u0275\u0275element(404, "input", 127);
      \u0275\u0275text(405, " Deals ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(406, "div", 125)(407, "div", 126)(408, "label", 123);
      \u0275\u0275element(409, "input", 127);
      \u0275\u0275text(410, " Projects ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(411, "div", 125)(412, "div", 126)(413, "label", 123);
      \u0275\u0275element(414, "input", 127);
      \u0275\u0275text(415, " Payments ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(416, "div", 125)(417, "div", 126)(418, "label", 123);
      \u0275\u0275element(419, "input", 127);
      \u0275\u0275text(420, " Assets ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(421, "div", 125)(422, "div", 126)(423, "label", 123);
      \u0275\u0275element(424, "input", 127);
      \u0275\u0275text(425, " Leads ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(426, "div", 125)(427, "div", 126)(428, "label", 123);
      \u0275\u0275element(429, "input", 127);
      \u0275\u0275text(430, " Tickets ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(431, "div", 125)(432, "div", 126)(433, "label", 123);
      \u0275\u0275element(434, "input", 127);
      \u0275\u0275text(435, " Taxes ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(436, "div", 125)(437, "div", 126)(438, "label", 123);
      \u0275\u0275element(439, "input", 127);
      \u0275\u0275text(440, " Activities ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(441, "div", 125)(442, "div", 126)(443, "label", 123);
      \u0275\u0275element(444, "input", 127);
      \u0275\u0275text(445, " Pipelines ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(446, "div", 110)(447, "div", 128)(448, "div", 129);
      \u0275\u0275element(449, "input", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "label", 131);
      \u0275\u0275text(451, " Access Trial ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(452, "div", 132)(453, "div", 133)(454, "div", 128)(455, "div", 134)(456, "label", 64);
      \u0275\u0275text(457, "Trial Days");
      \u0275\u0275elementEnd();
      \u0275\u0275element(458, "input", 119);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(459, "div", 117)(460, "div", 135)(461, "label", 136);
      \u0275\u0275text(462, " Is Recommended ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "div", 129);
      \u0275\u0275element(464, "input", 130);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(465, "div", 137)(466, "div", 31)(467, "label", 64);
      \u0275\u0275text(468, "Status");
      \u0275\u0275elementStart(469, "span", 111);
      \u0275\u0275text(470, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(471, "mat-select", 112)(472, "mat-option", 113);
      \u0275\u0275text(473, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "mat-option", 113);
      \u0275\u0275text(475, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "mat-option", 113);
      \u0275\u0275text(477, "Inactive");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(478, "div", 101)(479, "div", 31)(480, "label", 64);
      \u0275\u0275text(481, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(482, "textarea", 138);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(483, "div", 139)(484, "button", 140);
      \u0275\u0275text(485, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "button", 141);
      \u0275\u0275text(487, "Add Plan");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(488, "div", 142)(489, "div", 94)(490, "div", 95)(491, "div", 96)(492, "h4", 97);
      \u0275\u0275text(493, "Edit Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(494, "button", 98);
      \u0275\u0275element(495, "i", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(496, "form")(497, "div", 100)(498, "div", 16)(499, "div", 101)(500, "div", 31)(501, "span", 102);
      \u0275\u0275text(502, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "div", 4)(504, "div", 103);
      \u0275\u0275element(505, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "div", 105)(507, "div", 106);
      \u0275\u0275element(508, "i", 107);
      \u0275\u0275text(509, "Upload Image ");
      \u0275\u0275element(510, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(511, "span", 109);
      \u0275\u0275text(512, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(513, "div", 110)(514, "div", 31)(515, "label", 64);
      \u0275\u0275text(516, "Plan Name");
      \u0275\u0275elementStart(517, "span", 111);
      \u0275\u0275text(518, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "mat-select", 112)(520, "mat-option", 113);
      \u0275\u0275text(521, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "mat-option", 113);
      \u0275\u0275text(523, "Advanced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "mat-option", 113);
      \u0275\u0275text(525, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "mat-option", 113);
      \u0275\u0275text(527, "Enterprise");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(528, "div", 110)(529, "div", 31)(530, "label", 64);
      \u0275\u0275text(531, "Plan Type");
      \u0275\u0275elementStart(532, "span", 111);
      \u0275\u0275text(533, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "mat-select", 112)(535, "mat-option", 113);
      \u0275\u0275text(536, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "mat-option", 113);
      \u0275\u0275text(538, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "mat-option", 113);
      \u0275\u0275text(540, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(541, "div", 110)(542, "div", 31)(543, "label", 64);
      \u0275\u0275text(544, "Plan Position");
      \u0275\u0275elementStart(545, "span", 111);
      \u0275\u0275text(546, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(547, "mat-select", 112)(548, "mat-option", 113);
      \u0275\u0275text(549, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "mat-option", 113);
      \u0275\u0275text(551, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "mat-option", 113);
      \u0275\u0275text(553, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "mat-option", 113);
      \u0275\u0275text(555, "3");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(556, "div", 110)(557, "div", 31)(558, "label", 64);
      \u0275\u0275text(559, "Plan Currency");
      \u0275\u0275elementStart(560, "span", 111);
      \u0275\u0275text(561, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(562, "mat-select", 112)(563, "mat-option", 113);
      \u0275\u0275text(564, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "mat-option", 113);
      \u0275\u0275text(566, "USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(567, "mat-option", 113);
      \u0275\u0275text(568, "EURO");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(569, "div", 110)(570, "div", 31)(571, "div", 114)(572, "label", 64);
      \u0275\u0275text(573, "Plan Currency");
      \u0275\u0275elementStart(574, "span", 111);
      \u0275\u0275text(575, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "span", 115);
      \u0275\u0275element(577, "i", 116);
      \u0275\u0275text(578, "Set 0 for free");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(579, "mat-select", 112)(580, "mat-option", 113);
      \u0275\u0275text(581, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "mat-option", 113);
      \u0275\u0275text(583, "Fixed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "mat-option", 113);
      \u0275\u0275text(585, "Percentage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(586, "div", 117)(587, "div", 31)(588, "label", 64);
      \u0275\u0275text(589, "Discount Type");
      \u0275\u0275elementStart(590, "span", 111);
      \u0275\u0275text(591, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(592, "div", 118)(593, "mat-select", 112)(594, "mat-option", 113);
      \u0275\u0275text(595, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "mat-option", 113);
      \u0275\u0275text(597, "Fixed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "mat-option", 113);
      \u0275\u0275text(599, "Percentage");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(600, "div", 117)(601, "div", 31)(602, "label", 64);
      \u0275\u0275text(603, "Discount");
      \u0275\u0275elementStart(604, "span", 111);
      \u0275\u0275text(605, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(606, "div", 118);
      \u0275\u0275element(607, "input", 119);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(608, "div", 120)(609, "div", 31)(610, "label", 64);
      \u0275\u0275text(611, "Limitations Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275element(612, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(613, "div", 120)(614, "div", 31)(615, "label", 64);
      \u0275\u0275text(616, "Max Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275element(617, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(618, "div", 120)(619, "div", 31)(620, "label", 64);
      \u0275\u0275text(621, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275element(622, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(623, "div", 120)(624, "div", 31)(625, "label", 64);
      \u0275\u0275text(626, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(627, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(628, "div", 121)(629, "div", 71)(630, "h6");
      \u0275\u0275text(631, "Plan Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(632, "div", 122)(633, "label", 123);
      \u0275\u0275element(634, "input", 143);
      \u0275\u0275text(635, " Select All ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(636, "div", 16)(637, "div", 125)(638, "div", 126)(639, "label", 123);
      \u0275\u0275element(640, "input", 127);
      \u0275\u0275text(641, " Employees ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(642, "div", 125)(643, "div", 126)(644, "label", 123);
      \u0275\u0275element(645, "input", 127);
      \u0275\u0275text(646, " Invoices ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(647, "div", 125)(648, "div", 126)(649, "label", 123);
      \u0275\u0275element(650, "input", 127);
      \u0275\u0275text(651, " Reports ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(652, "div", 125)(653, "div", 126)(654, "label", 123);
      \u0275\u0275element(655, "input", 127);
      \u0275\u0275text(656, " Contacts ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(657, "div", 125)(658, "div", 126)(659, "label", 123);
      \u0275\u0275element(660, "input", 127);
      \u0275\u0275text(661, " Clients ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(662, "div", 125)(663, "div", 126)(664, "label", 123);
      \u0275\u0275element(665, "input", 127);
      \u0275\u0275text(666, " Estimates ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(667, "div", 125)(668, "div", 126)(669, "label", 123);
      \u0275\u0275element(670, "input", 127);
      \u0275\u0275text(671, " Goals ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(672, "div", 125)(673, "div", 126)(674, "label", 123);
      \u0275\u0275element(675, "input", 127);
      \u0275\u0275text(676, " Deals ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(677, "div", 125)(678, "div", 126)(679, "label", 123);
      \u0275\u0275element(680, "input", 127);
      \u0275\u0275text(681, " Projects ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(682, "div", 125)(683, "div", 126)(684, "label", 123);
      \u0275\u0275element(685, "input", 127);
      \u0275\u0275text(686, " Payments ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(687, "div", 125)(688, "div", 126)(689, "label", 123);
      \u0275\u0275element(690, "input", 127);
      \u0275\u0275text(691, " Assets ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(692, "div", 125)(693, "div", 126)(694, "label", 123);
      \u0275\u0275element(695, "input", 127);
      \u0275\u0275text(696, " Leads ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(697, "div", 125)(698, "div", 126)(699, "label", 123);
      \u0275\u0275element(700, "input", 127);
      \u0275\u0275text(701, " Tickets ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(702, "div", 125)(703, "div", 126)(704, "label", 123);
      \u0275\u0275element(705, "input", 127);
      \u0275\u0275text(706, " Taxes ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(707, "div", 125)(708, "div", 126)(709, "label", 123);
      \u0275\u0275element(710, "input", 127);
      \u0275\u0275text(711, " Activities ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(712, "div", 125)(713, "div", 126)(714, "label", 123);
      \u0275\u0275element(715, "input", 127);
      \u0275\u0275text(716, " Pipelines ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(717, "div", 110)(718, "div", 128)(719, "div", 129);
      \u0275\u0275element(720, "input", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "label", 144);
      \u0275\u0275text(722, " Access Trial ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(723, "div", 132)(724, "div", 145)(725, "div", 128)(726, "div", 134)(727, "label", 64);
      \u0275\u0275text(728, "Trial Days");
      \u0275\u0275elementEnd();
      \u0275\u0275element(729, "input", 119);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(730, "div", 117)(731, "div", 146)(732, "div", 147);
      \u0275\u0275element(733, "input", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(734, "label", 123);
      \u0275\u0275text(735, " Is Recommended ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(736, "div", 101)(737, "div", 31)(738, "label", 64);
      \u0275\u0275text(739, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(740, "textarea", 138);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(741, "div", 101)(742, "div", 31)(743, "label", 64);
      \u0275\u0275text(744, "Account Url");
      \u0275\u0275elementEnd();
      \u0275\u0275element(745, "input", 119);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(746, "div", 139)(747, "button", 140);
      \u0275\u0275text(748, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(749, "button", 141);
      \u0275\u0275text(750, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(751, "div", 148)(752, "div", 149)(753, "div", 95)(754, "div", 150)(755, "div", 31);
      \u0275\u0275element(756, "img", 151);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(757, "h6", 152);
      \u0275\u0275text(758, "Delete Purchase Package");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(759, "p", 31);
      \u0275\u0275text(760, "Are you sure, you want to delete purchase Package?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(761, "div", 153)(762, "a", 154);
      \u0275\u0275text(763, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(764, "a", 155);
      \u0275\u0275text(765, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.packages);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.packagesGrid);
      \u0275\u0275advance(75);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(33);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 120 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgIf, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.edit-delete-content[_ngcontent-%COMP%] {\n  margin-left: -5px;\n}\n/*# sourceMappingURL=packages.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackagesComponent, [{
    type: Component,
    args: [{ selector: "app-packages", imports: [CommonModule, MatSelectModule, DateRangePickerComponent, CustomPaginationComponent, MatSortModule, FormsModule, RouterLink], template: '<!-- Start Content -->\n<div class="content-two">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Packages</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="me-2">\n                <div class="d-flex align-items-center">\n                    <a [routerLink]="routes.packages" class="btn btn-icon btn-sm active border rounded bg-primary text-white me-1"><i class="isax isax-menu-1"></i></a>\n                    <a [routerLink]="routes.packagesGrid" class="btn btn-icon border rounded btn-sm"><i class="isax isax-grid-2"></i></a>\n                </div>\n            </div>\n            <div class="dropdown me-1">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n            <div>\n                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_plans"><i class="isax isax-add-circle5 me-1"></i>New Plan</a>\n            </div>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-lg-3 col-md-6 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body d-flex align-items-center justify-content-between">\n                    <div class="d-flex align-items-center overflow-hidden">\n                        <div>\n                            <p class="fs-14 mb-1 text-truncate">Total Plans</p>\n                            <h4 class="fs-16 fw-semibold">08</h4>\n                        </div>\n                    </div>\n                    <div>\n                        <span class="avatar avatar-lg bg-warning flex-shrink-0">\n                            <i class="isax isax-box5 fs-32"></i>\n                        </span>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n\n        <div class="col-lg-3 col-md-6 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body d-flex align-items-center justify-content-between">\n                    <div class="d-flex align-items-center overflow-hidden">\n                        <div>\n                            <p class="fs-14 mb-1 text-truncate">Active Plans</p>\n                            <h4 class="fs-16 fw-semibold">07</h4>\n                        </div>\n                    </div>\n                    <div>\n                        <span class="avatar avatar-lg bg-success flex-shrink-0">\n                            <i class="isax isax-box-tick5 fs-32"></i>\n                        </span>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n\n        <div class="col-lg-3 col-md-6 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body d-flex align-items-center justify-content-between">\n                    <div class="d-flex align-items-center overflow-hidden">\n                        <div>\n                            <p class="fs-14 mb-1 text-truncate">Inactive Plans</p>\n                            <h4 class="fs-16 fw-semibold">0</h4>\n                        </div>\n                    </div>\n                    <div>\n                        <span class="avatar avatar-lg bg-danger flex-shrink-0">\n                            <i class="isax isax-box-remove5 fs-32"></i>\n                        </span>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n\n        <div class="col-lg-3 col-md-6 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body d-flex align-items-center justify-content-between">\n                    <div class="d-flex align-items-center overflow-hidden">\n                        <div>\n                            <p class="fs-14 mb-1 text-truncate">No Of Plan Types</p>\n                            <h4 class="fs-16 fw-semibold">04</h4>\n                        </div>\n                    </div>\n                    <div>\n                        <span class="avatar avatar-lg bg-info flex-shrink-0">\n                            <i class="isax isax-box-25 fs-32"></i>\n                        </span>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div><!-- end col -->\n    </div>\n    <!-- end row -->\n\n    <!-- Start Table Search -->\n    <div class="mb-3">\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                      </div>\n                </div>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center fw-medium" data-bs-toggle="dropdown">\n                        <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-end">\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End Table Search -->\n\n    <!-- Start Table List -->\n    <div class="table-responsive">\n        <table  matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">\n            <thead class="thead-light">\n                <tr>\n                    <th mat-sort-header="plan">Plan</th>\n                    <th mat-sort-header="plantype">Plan Type</th>\n                    <th mat-sort-header="total">Total Subscribers</th>\n                    <th mat-sort-header="amount">Amount</th>\n                    <th mat-sort-header="created">Created On</th>\n                    <th mat-sort-header="status">Status</th>\n                    <th class="no-sort"></th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td>\n                        <a href="javascript:void(0);" class="text-dark">\n                            {{data.Plan}}\n                        </a>\n                    </td>\n                    <td>\n                        {{data.PlanType}}\n                    </td>\n                    <td>{{data.TotalSubscribers}}</td>\n                    <td>{{data.Amount}}</td>\n                    <td>{{data.CreatedOn}}</td>\n                    <td>\n                        <span class="badge badge-soft-success d-inline-flex align-items-center">{{data.Status}}\n                            <i class="isax isax-tick-circle ms-1"></i>\n                        </span>\n                    </td>\n                    <td class="action-item">\n                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                            <i class="fa-solid fa-ellipsis"></i>\n                        </a>\n                        <ul class="dropdown-menu">\n                            <li>\n                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_plans"><i class="isax isax-edit me-2"></i>Edit</a>\n                            </li>\n                            <li>\n                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                            </li>\n                        </ul>\n                    </td>\n                </tr>\n            }\n            @if(tableData.length === 0){\n              <tr>\n                <td colspan="12" class="text-center text-dark">No matching records found</td>\n              </tr>\n              }\n            </tbody>\n        </table>\n    </div>\n    <!-- End Table List -->\n    <app-custom-pagination *ngIf="row"></app-custom-pagination>\n\n</div>\n<!-- End Content -->\n\n <!-- Start Filter -->\n <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n    <div class="offcanvas-header d-block pb-0">\n        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n            <h6 class="offcanvas-title">Filter</h6>\n            <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n        </div>\n    </div>\n    <div class="offcanvas-body pt-3">\n        <form action="#">\n            <div class="mb-3">\n                <label class="form-label">Companies</label>\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n                        Select\n                    </a>\n                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                        <div class="mb-3">\n                            <div class="input-icon-start position-relative">\n                                <span class="input-icon-addon fs-12">\n                                    <i class="isax isax-search-normal"></i>\n                                </span>\n                                <input type="text" class="form-control form-control-sm" placeholder="Search">\n                            </div>\n                        </div>\n                        <ul class="mb-3">\n                            <li class="d-flex align-items-center justify-content-between mb-3">\n                                <label class="d-inline-flex align-items-center text-gray-9">\n                                    <input class="form-check-input m-0 me-2" type="checkbox"> Select All\n                                </label>\n                                <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-01.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Trend Hive\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-02.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Quick Cart\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-03.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Tech Bazaar\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-04.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Harvest Basket\n                                </label>\n                            </li>\n                        </ul>\n                        <div class="row g-2">\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                            </div>\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="mb-3">\n                <label id="dateRangePicker" class="form-label">Date Range</label>\n                <div class="filter-daterange">\n                    <app-date-range-picker></app-date-range-picker>\n                </div>\n            </div>\n            <div class="mb-3">\n                <label class="form-label">Status</label>\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n                        Select\n                    </a>\n                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                        <ul class="mb-3">\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Approved\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Pending\n                                </label>\n                            </li>\n                            <li>\n                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                    <input class="form-check-input m-0 me-2" type="checkbox">\n                                    <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Rejected\n                                </label>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="offcanvas-footer">\n                <div class="row g-2">\n                    <div class="col-6">\n                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>\n                    </div>\n                    <div class="col-6">\n                        <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!-- End Filter -->\n\n<!-- Start Add Plan -->\n<div class="modal fade" id="add_plans">\n    <div class="modal-dialog modal-dialog-centered modal-lg">\n        <div class="modal-content">\n            <div class="modal-header">\n                <h4 class="modal-title">Add New Plan</h4>\n                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n                    <i class="fa fa-x"></i>\n                </button>\n            </div>\n            <form>\n                <div class="modal-body pb-0">\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div class="mb-3">\n                                <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>\n                                <div class="d-flex align-items-center">\n                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                        <i class="isax isax-image text-primary fs-24"></i>\n                                    </div>\n                                    <div class="d-inline-flex flex-column align-items-start">\n                                        <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                            <i class="isax isax-image me-1"></i>Upload Image\n                                            <input type="file" class="form-control image-sign" multiple="">\n                                        </div>\n                                        <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3 ">\n                                <label class="form-label">Plan Name<span class="text-danger"> *</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Advanced</mat-option>\n                                    <mat-option value="1">Basic</mat-option>\n                                    <mat-option value="1">Enterprise</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3 ">\n                                <label class="form-label">Plan Type<span class="text-danger"> *</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Monthly</mat-option>\n                                    <mat-option value="1">Yearly</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3 ">\n                                <label class="form-label">Plan Position<span class="text-danger"> *</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">1</mat-option>\n                                    <mat-option value="1">2</mat-option>\n                                    <mat-option value="1">3</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3 ">\n                                <label class="form-label">Plan Currency<span class="text-danger"> *</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">USD</mat-option>\n                                    <mat-option value="1">EURO</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <div class="d-flex justify-content-between">\n                                    <label class="form-label">Plan Currency<span class="text-danger"> *</span></label>\n                                    <span class="text-primary"><i class="fa-solid fa-circle-exclamation me-2"></i>Set 0 for free</span>\n                                </div>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Fixed</mat-option>\n                                    <mat-option value="1">Percentage</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-3">\n                            <div class="mb-3 ">\n                                <label class="form-label">Discount Type<span class="text-danger"> *</span></label>\n                                <div class="pass-group">\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">Fixed</mat-option>\n                                        <mat-option value="1">Percentage</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-3">\n                            <div class="mb-3 ">\n                                <label class="form-label">Discount<span class="text-danger"> *</span></label>\n                                <div class="pass-group">\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="mb-3">\n                                <label class="form-label">Limitations Invoices</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="mb-3">\n                                <label class="form-label">Max Customers</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="mb-3">\n                                <label class="form-label">Product</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="mb-3">\n                                <label class="form-label">Supplier</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="col-lg-12">\n                            <div class="d-flex align-items-center justify-content-between mb-3">\n                                <h6>Plan Modules</h6>\n                                <div class="form-check d-flex align-items-center">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox" id="select-all"> Select All\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row">\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Employees\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Invoices\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Reports\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Contacts\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Clients\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Estimates\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Goals\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Deals\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Projects\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Payments\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Assets\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Leads\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Tickets\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Taxes\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Activities\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Pipelines\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-md-6">\n                                <div class="d-flex align-items-center mb-3">\n                                    <div class="form-check form-switch me-2">\n                                        <input class="form-check-input me-2" type="checkbox" role="switch">\n                                    </div>\n                                    <label class="form-check-label mt-0 me-2 text-dark fw-semibold fs-16">\n                                        Access Trial\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row align-items-center gx-3">\n                            <div class="col-md-4">\n                                <div class="d-flex align-items-center mb-3">\n                                    <div class="flex-fill">\n                                        <label class="form-label">Trial Days</label>\n                                        <input type="text" class="form-control">\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class="col-md-3">\n                                <div class="d-block align-items-center ms-3">\n                                    <label class="form-check-label mt-0 me-2 text-dark">\n                                        Is Recommended\n                                    </label>\n                                    <div class="form-check form-switch me-2">\n                                        <input class="form-check-input me-2" type="checkbox" role="switch">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-5">\n                                <div class="mb-3 ">\n                                    <label class="form-label">Status<span class="text-danger"> *</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">Active</mat-option>\n                                        <mat-option value="1">Inactive</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-12">\n                            <div class="mb-3">\n                                <label class="form-label">Description</label>\n                                <textarea class="form-control"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="modal-footer">\n                    <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary">Add Plan</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<!-- End Add Plan -->\n\n<!-- Start Edit Plan -->\n<div class="modal fade" id="edit_plans">\n    <div class="modal-dialog modal-dialog-centered modal-lg">\n        <div class="modal-content">\n            <div class="modal-header">\n                <h4 class="modal-title">Edit Plan</h4>\n                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n                    <i class="fa-solid fa-x"></i>\n                </button>\n            </div>\n            <form>\n                <div class="modal-body pb-0">\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div class="mb-3">\n                                <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>\n                                <div class="d-flex align-items-center">\n                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                        <i class="isax isax-image text-primary fs-24"></i>\n                                    </div>\n                                    <div class="d-inline-flex flex-column align-items-start">\n                                        <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                            <i class="isax isax-image me-1"></i>Upload Image\n                                            <input type="file" class="form-control image-sign" multiple="">\n                                        </div>\n                                        <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3 ">\n                                <label class="form-label">Plan Name<span class="text-danger"> *</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Advanced</mat-option>\n                                    <mat-option value="1">Basic</mat-option>\n                                    <mat-option value="1">Enterprise</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3 ">\n                                <label class="form-label">Plan Type<span class="text-danger"> *</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Monthly</mat-option>\n                                    <mat-option value="1">Yearly</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3 ">\n                                <label class="form-label">Plan Position<span class="text-danger"> *</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">1</mat-option>\n                                    <mat-option value="1">2</mat-option>\n                                    <mat-option value="1">3</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3 ">\n                                <label class="form-label">Plan Currency<span class="text-danger"> *</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">USD</mat-option>\n                                    <mat-option value="1">EURO</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <div class="d-flex justify-content-between">\n                                    <label class="form-label">Plan Currency<span class="text-danger"> *</span></label>\n                                    <span class="text-primary"><i class="fa-solid fa-circle-exclamation me-2"></i>Set 0 for free</span>\n                                </div>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                    <mat-option value="1">Fixed</mat-option>\n                                    <mat-option value="1">Percentage</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-3">\n                            <div class="mb-3 ">\n                                <label class="form-label">Discount Type<span class="text-danger"> *</span></label>\n                                <div class="pass-group">\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">Fixed</mat-option>\n                                        <mat-option value="1">Percentage</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-3">\n                            <div class="mb-3 ">\n                                <label class="form-label">Discount<span class="text-danger"> *</span></label>\n                                <div class="pass-group">\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="mb-3">\n                                <label class="form-label">Limitations Invoices</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="mb-3">\n                                <label class="form-label">Max Customers</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="mb-3">\n                                <label class="form-label">Product</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="mb-3">\n                                <label class="form-label">Supplier</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                        <div class="col-lg-12">\n                            <div class="d-flex align-items-center justify-content-between mb-3">\n                                <h6>Plan Modules</h6>\n                                <div class="form-check d-flex align-items-center">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox" id="select-all2"> Select All\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row">\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Employees\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Invoices\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Reports\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Contacts\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Clients\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Estimates\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Goals\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Deals\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Projects\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Payments\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Assets\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Leads\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Tickets\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Taxes\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Activities\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-lg-3 col-sm-6">\n                                <div class="form-check form-check-md d-flex align-items-center mb-3">\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        <input class="form-check-input" type="checkbox"> Pipelines\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="col-md-6">\n                                <div class="d-flex align-items-center mb-3">\n                                    <div class="form-check form-switch me-2">\n                                        <input class="form-check-input me-2" type="checkbox" role="switch">\n                                    </div>\n                                    <label class="form-check-label mt-0 text-dark fw-semibold fs-16">\n                                        Access Trial\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row align-items-center gx-3">\n                            <div class="col-md-9">\n                                <div class="d-flex align-items-center mb-3">\n                                    <div class="flex-fill">\n                                        <label class="form-label">Trial Days</label>\n                                        <input type="text" class="form-control">\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class="col-md-3">\n                                <div class="d-flex align-items-start flex-column ms-2">\n                                    <div class="form-check form-switch mb-1">\n                                        <input class="form-check-input me-2" type="checkbox" role="switch">\n                                    </div>\n                                    <label class="form-check-label mt-0 text-dark fw-medium">\n                                        Is Recommended\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-12">\n                            <div class="mb-3">\n                                <label class="form-label">Description</label>\n                                <textarea class="form-control"></textarea>\n                            </div>\n                        </div>\n                        <div class="col-md-12">\n                            <div class="mb-3">\n                                <label class="form-label">Account Url</label>\n                                <input type="text" class="form-control">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="modal-footer">\n                    <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary">Save Changes</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<!-- End Edit Plan -->\n\n<!-- Start Delete Modal  -->\n<div class="modal fade" id="delete_modal">\n    <div class="modal-dialog modal-dialog-centered modal-sm">\n        <div class="modal-content">\n            <div class="modal-body text-center">\n                <div class="mb-3">\n                    <img src="assets/img/icons/delete.svg" alt="img">\n                </div>\n                <h6 class="mb-1">Delete Purchase Package</h6>\n                <p class="mb-3">Are you sure, you want to delete purchase Package?</p>\n                <div class="d-flex justify-content-center">\n                    <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Delete Modal  -->', styles: ["/* src/app/features/super-admin/packages/packages.component.scss */\n.edit-delete-content {\n  margin-left: -5px;\n}\n/*# sourceMappingURL=packages.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackagesComponent, { className: "PackagesComponent", filePath: "src/app/features/super-admin/packages/packages.component.ts", lineNumber: 22 });
})();
export {
  PackagesComponent
};
//# sourceMappingURL=chunk-C6HV7IDU.js.map
