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
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
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

// src/app/features/super-admin/domain/domain.component.ts
var _c0 = () => ({ standalone: true });
function DomainComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 117)(3, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function DomainComponent_For_99_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 119)(6, "a", 120);
    \u0275\u0275element(7, "img", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 98)(10, "a", 94);
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
    \u0275\u0275elementStart(18, "td")(19, "span", 122);
    \u0275\u0275text(20);
    \u0275\u0275element(21, "i", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 124)(23, "a", 125);
    \u0275\u0275element(24, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ul", 6)(26, "li")(27, "a", 127);
    \u0275\u0275element(28, "i", 128);
    \u0275\u0275text(29, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li")(31, "a", 129);
    \u0275\u0275element(32, "i", 130);
    \u0275\u0275text(33, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/icons/", data_r2.Image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.Company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.DomainURL);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CreatedOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.Status === "Approved" ? "badge-soft-success" : data_r2.Status === "Pending" ? "badge-soft-warning" : "badge-soft-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.Status === "Approved" ? " isax-tick-circle" : data_r2.Status === "Pending" ? " isax-timer" : " isax-close-circle");
  }
}
function DomainComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 131);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function DomainComponent_app_custom_pagination_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var DomainComponent = class _DomainComponent {
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
    this.data.getDomain().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.domain) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getDomain().subscribe((apiRes) => {
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
  static \u0275fac = function DomainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainComponent, selectors: [["app-domain"]], decls: 453, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "created"], ["mat-sort-header", "status"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/icons/company-01.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-02.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-03.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-04.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-05.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-06.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "id", "close-filter", 1, "btn", "btn-outline-white", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["href", "javascript:void(0);", "id", "close-filter-1", 1, "btn", "btn-outline-white", "w-100"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-warning", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "domain_approved", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "d-flex", "align-items-center"], [1, "badge", "badge-soft-success", "d-inline-flex", "align-items-center", "badge-xs", "ms-2", "border"], [1, "isax", "isax-tick-circle", "ms-1"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body", "pb-0"], [1, "row"], [1, "col-md-12"], [1, "p-3", "mb-3", "br-5", "bg-light", "border"], [1, "d-flex", "align-items-center", "file-name-icon", "position-relative", "z-1"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "border", "avatar-rounded"], ["src", "assets/img/icons/company-01.svg", "alt", "img", 1, "img-fluid"], [1, "ms-2"], ["href", "javascript:void(0);"], ["src", "assets/img/bg/domin-bg-1.png", "alt", "img", 1, "img-fluid", "position-absolute", "end-0", "z-n1"], [1, "col-md-4"], [1, "fs-13"], [1, "fs-14", "fw-medium", "mb-0"], ["id", "domain_pending", 1, "modal", "fade"], [1, "badge", "badge-soft-warning", "d-inline-flex", "align-items-center", "badge-xs", "ms-2"], [1, "p-3", "mb-3", "br-5", "bg-light"], [1, "col-md-6"], ["src", "assets/img/bg/domin-bg-1.png", "alt", "img", 1, "img-fluid", "position-absolute", "end-0", "bottom-0", "top-0", "z-n1"], [1, "col-md-6", "text-end"], [1, "badge", "badge-soft-success", "d-inline-flex", "align-items-center", "badge-xs", "ms-2"], [1, "badge", "badge-soft-danger", "d-inline-flex", "align-items-center", "badge-xs", "ms-2"], [1, "isax", "isax-close-circle", "ms-1"], ["id", "domain_rejected", 1, "modal", "fade"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], ["href", "javascript:void(0);", 1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#domain_approved", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function DomainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Domain");
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
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "label")(26, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function DomainComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DomainComponent_Template_input_ngModelChange_26_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "a", 17);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275text(29, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 10)(31, "div", 19)(32, "a", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "Sort By : ");
      \u0275\u0275elementStart(35, "span", 22);
      \u0275\u0275text(36, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "ul", 23)(38, "li")(39, "a", 7);
      \u0275\u0275text(40, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 7);
      \u0275\u0275text(43, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 19)(45, "a", 24);
      \u0275\u0275element(46, "i", 25);
      \u0275\u0275text(47, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 26)(49, "li")(50, "label", 27);
      \u0275\u0275element(51, "i", 28)(52, "input", 29);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "li")(56, "label", 27);
      \u0275\u0275element(57, "i", 28)(58, "input", 29);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Domain URL");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "li")(62, "label", 27);
      \u0275\u0275element(63, "i", 28)(64, "input", 29);
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "Plan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "li")(68, "label", 27);
      \u0275\u0275element(69, "i", 28)(70, "input", 30);
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "li")(74, "label", 27);
      \u0275\u0275element(75, "i", 28)(76, "input", 30);
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "Status");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(79, "div", 31)(80, "table", 32);
      \u0275\u0275listener("matSortChange", function DomainComponent_Template_table_matSortChange_80_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(81, "thead", 33)(82, "tr")(83, "th", 34)(84, "div", 35);
      \u0275\u0275listener("click", function DomainComponent_Template_div_click_84_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(85, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function DomainComponent_Template_input_ngModelChange_85_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "th", 34);
      \u0275\u0275text(87, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 34);
      \u0275\u0275text(89, "Domain URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 34);
      \u0275\u0275text(91, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 37);
      \u0275\u0275text(93, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 38);
      \u0275\u0275text(95, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "tbody");
      \u0275\u0275repeaterCreate(98, DomainComponent_For_99_Template, 34, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(100, DomainComponent_Conditional_100_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(101, DomainComponent_app_custom_pagination_101_Template, 1, 0, "app-custom-pagination", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 40)(103, "div", 41)(104, "div", 42)(105, "h6", 43);
      \u0275\u0275text(106, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "button", 44);
      \u0275\u0275element(108, "i", 45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "div", 46)(110, "form", 47)(111, "div", 8)(112, "label", 48);
      \u0275\u0275text(113, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 19)(115, "a", 49);
      \u0275\u0275text(116, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 50)(118, "div", 8)(119, "div", 51)(120, "span", 52);
      \u0275\u0275element(121, "i", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "input", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "ul", 8)(124, "li", 55)(125, "label", 56);
      \u0275\u0275element(126, "input", 57);
      \u0275\u0275text(127, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 58);
      \u0275\u0275text(129, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "li")(131, "label", 59);
      \u0275\u0275element(132, "input", 30);
      \u0275\u0275elementStart(133, "span", 60);
      \u0275\u0275element(134, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275text(135, "Trend Hive ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "li")(137, "label", 59);
      \u0275\u0275element(138, "input", 30);
      \u0275\u0275elementStart(139, "span", 60);
      \u0275\u0275element(140, "img", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275text(141, "Quick Cart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "li")(143, "label", 59);
      \u0275\u0275element(144, "input", 30);
      \u0275\u0275elementStart(145, "span", 60);
      \u0275\u0275element(146, "img", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, "Tech Bazaar ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "li")(149, "label", 59);
      \u0275\u0275element(150, "input", 30);
      \u0275\u0275elementStart(151, "span", 60);
      \u0275\u0275element(152, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275text(153, "Harvest Basket ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "li")(155, "label", 59);
      \u0275\u0275element(156, "input", 30);
      \u0275\u0275elementStart(157, "span", 60);
      \u0275\u0275element(158, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, "Elite Mart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "li")(161, "label", 59);
      \u0275\u0275element(162, "input", 30);
      \u0275\u0275elementStart(163, "span", 60);
      \u0275\u0275element(164, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275text(165, "Prime Mart ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "div", 67)(167, "div", 68)(168, "a", 69);
      \u0275\u0275text(169, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 68)(171, "a", 70);
      \u0275\u0275text(172, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(173, "div", 8)(174, "label", 48);
      \u0275\u0275text(175, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 19)(177, "a", 49);
      \u0275\u0275text(178, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 50)(180, "div", 8)(181, "div", 51)(182, "span", 52);
      \u0275\u0275element(183, "i", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275element(184, "input", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "ul", 8)(186, "li", 55)(187, "label", 56);
      \u0275\u0275element(188, "input", 57);
      \u0275\u0275text(189, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "a", 58);
      \u0275\u0275text(191, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "li")(193, "label", 59);
      \u0275\u0275element(194, "input", 30);
      \u0275\u0275text(195, " Advanced (Monthly) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "li")(197, "label", 59);
      \u0275\u0275element(198, "input", 30);
      \u0275\u0275text(199, " Basic (Yearly) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "li")(201, "label", 59);
      \u0275\u0275element(202, "input", 30);
      \u0275\u0275text(203, " Enterprise (Monthly) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "div", 67)(205, "div", 68)(206, "a", 71);
      \u0275\u0275text(207, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "div", 68)(209, "a", 70);
      \u0275\u0275text(210, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(211, "div", 8)(212, "label", 48);
      \u0275\u0275text(213, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "div", 19)(215, "a", 49);
      \u0275\u0275text(216, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 50)(218, "ul", 8)(219, "li")(220, "label", 59);
      \u0275\u0275element(221, "input", 30)(222, "i", 72);
      \u0275\u0275text(223, "Approved ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "li")(225, "label", 59);
      \u0275\u0275element(226, "input", 30)(227, "i", 73);
      \u0275\u0275text(228, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "li")(230, "label", 59);
      \u0275\u0275element(231, "input", 30)(232, "i", 74);
      \u0275\u0275text(233, "Rejected ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(234, "div", 75)(235, "div", 67)(236, "div", 68)(237, "a", 76);
      \u0275\u0275text(238, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "div", 68)(240, "button", 77);
      \u0275\u0275text(241, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(242, "div", 78)(243, "div", 79)(244, "div", 80)(245, "div", 81)(246, "h4", 82);
      \u0275\u0275text(247, " Domain Detail ");
      \u0275\u0275elementStart(248, "span", 83);
      \u0275\u0275text(249, " Approved");
      \u0275\u0275element(250, "i", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "button", 85);
      \u0275\u0275element(252, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "form")(254, "div", 86)(255, "div", 87)(256, "div", 88)(257, "div", 8)(258, "div", 89)(259, "div", 87)(260, "div", 88)(261, "div", 90)(262, "a", 91);
      \u0275\u0275element(263, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 93)(265, "h6")(266, "a", 94);
      \u0275\u0275text(267, "Trend Hive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(268, "img", 95);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(269, "div", 96)(270, "div", 8)(271, "span", 97);
      \u0275\u0275text(272, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "h6", 98);
      \u0275\u0275text(274, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(275, "div", 96)(276, "div", 8)(277, "span", 97);
      \u0275\u0275text(278, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "h6", 98);
      \u0275\u0275text(280, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(281, "div", 96)(282, "div", 8)(283, "span", 97);
      \u0275\u0275text(284, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "h6", 98);
      \u0275\u0275text(286, "th.example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(287, "div", 96)(288, "div", 8)(289, "span", 97);
      \u0275\u0275text(290, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "h6", 98);
      \u0275\u0275text(292, "$200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(293, "div", 96)(294, "div", 8)(295, "span", 97);
      \u0275\u0275text(296, "Register Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "h6", 98);
      \u0275\u0275text(298, "03 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(299, "div", 96)(300, "div", 8)(301, "span", 97);
      \u0275\u0275text(302, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "h6", 98);
      \u0275\u0275text(304, "03 Feb 2025");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(305, "div", 99)(306, "div", 79)(307, "div", 80)(308, "div", 81)(309, "h4", 82);
      \u0275\u0275text(310, " Domain Detail ");
      \u0275\u0275elementStart(311, "span", 100);
      \u0275\u0275text(312, " Pending");
      \u0275\u0275element(313, "i", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "button", 85);
      \u0275\u0275element(315, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "form")(317, "div", 86)(318, "div", 87)(319, "div", 88)(320, "div", 8)(321, "div", 101)(322, "div", 87)(323, "div", 102)(324, "div", 90)(325, "a", 91);
      \u0275\u0275element(326, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 93)(328, "h6")(329, "a", 94);
      \u0275\u0275text(330, "Trend Hive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(331, "img", 103);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div", 104)(333, "span", 105);
      \u0275\u0275text(334, " Approved");
      \u0275\u0275element(335, "i", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "span", 106);
      \u0275\u0275text(337, " Rejected");
      \u0275\u0275element(338, "i", 107);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(339, "div", 96)(340, "div", 8)(341, "span", 97);
      \u0275\u0275text(342, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "h6", 98);
      \u0275\u0275text(344, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(345, "div", 96)(346, "div", 8)(347, "span", 97);
      \u0275\u0275text(348, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "h6", 98);
      \u0275\u0275text(350, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(351, "div", 96)(352, "div", 8)(353, "span", 97);
      \u0275\u0275text(354, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "h6", 98);
      \u0275\u0275text(356, "th.example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(357, "div", 96)(358, "div", 8)(359, "span", 97);
      \u0275\u0275text(360, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "h6", 98);
      \u0275\u0275text(362, "$200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(363, "div", 96)(364, "div", 8)(365, "span", 97);
      \u0275\u0275text(366, "Register Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "h6", 98);
      \u0275\u0275text(368, "03 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(369, "div", 96)(370, "div", 8)(371, "span", 97);
      \u0275\u0275text(372, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "h6", 98);
      \u0275\u0275text(374, "03 Feb 2025");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(375, "div", 108)(376, "div", 79)(377, "div", 80)(378, "div", 81)(379, "h4", 82);
      \u0275\u0275text(380, " Domain Detail ");
      \u0275\u0275elementStart(381, "span", 106);
      \u0275\u0275text(382, " Rejected");
      \u0275\u0275element(383, "i", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "button", 85);
      \u0275\u0275element(385, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "form")(387, "div", 86)(388, "div", 87)(389, "div", 88)(390, "div", 8)(391, "div", 101)(392, "div", 87)(393, "div", 88)(394, "div", 90)(395, "a", 91);
      \u0275\u0275element(396, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "div", 93)(398, "h6")(399, "a", 94);
      \u0275\u0275text(400, "Trend Hive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(401, "img", 95);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(402, "div", 96)(403, "div", 8)(404, "span", 97);
      \u0275\u0275text(405, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "h6", 98);
      \u0275\u0275text(407, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(408, "div", 96)(409, "div", 8)(410, "span", 97);
      \u0275\u0275text(411, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "h6", 98);
      \u0275\u0275text(413, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(414, "div", 96)(415, "div", 8)(416, "span", 97);
      \u0275\u0275text(417, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "h6", 98);
      \u0275\u0275text(419, "th.example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(420, "div", 96)(421, "div", 8)(422, "span", 97);
      \u0275\u0275text(423, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "h6", 98);
      \u0275\u0275text(425, "$200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(426, "div", 96)(427, "div", 8)(428, "span", 97);
      \u0275\u0275text(429, "Register Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "h6", 98);
      \u0275\u0275text(431, "03 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(432, "div", 96)(433, "div", 8)(434, "span", 97);
      \u0275\u0275text(435, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "h6", 98);
      \u0275\u0275text(437, "03 Feb 2025");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(438, "div", 109)(439, "div", 110)(440, "div", 80)(441, "div", 111)(442, "div", 8);
      \u0275\u0275element(443, "img", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "h6", 113);
      \u0275\u0275text(445, "Delete Domain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "p", 8);
      \u0275\u0275text(447, "Are you sure, you want to delete domain?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "div", 114)(449, "a", 115);
      \u0275\u0275text(450, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "a", 116);
      \u0275\u0275text(452, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(59);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 100 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainComponent, [{
    type: Component,
    args: [{ selector: "app-domain", imports: [CommonModule, CustomPaginationComponent, FormsModule, MatSortModule], template: ` <!-- Start Content -->
 <div class="content-two">
  <!-- Page Header -->
  <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
      <div>
          <h6>Domain</h6>
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
                  <ul class="dropdown-menu  dropdown-menu-lg">
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Company</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Domain URL</span>
                          </label>
                      </li>
                      <li>
                          <label class="dropdown-item d-flex align-items-center form-switch">
                              <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                              <input class="form-check-input m-0 me-2" type="checkbox" checked>
                              <span>Plan</span>
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
                              <span>Status</span>
                          </label>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  <!-- /Table Search End -->

  <!-- Table List Start -->
        <div class="table-responsive">
          <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">
            <thead class="thead-light">
              <tr>
                <th class="no-sort">
                  <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                    <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">
                  </div>
                </th>
                  <th class="no-sort">Company</th>
                  <th class="no-sort">Domain URL</th>
                  <th class="no-sort">Plan</th>
                  <th mat-sort-header="created">Created On</th>
                  <th mat-sort-header="status">Status</th>
                  <th class="no-sort"></th>
              </tr>
          </thead>
          <tbody>
            @for (data of tableData;track data){
              <tr>
                  <td>
                      <div class="form-check form-check-md">
                          <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">
                      </div>
                  </td>
                  <td>
                      <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                              <img src="assets/img/icons/{{data.Image}}" class="rounded-circle" alt="img">
                          </a>
                          <div>
                              <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.Company}}</a></h6>
                          </div>
                      </div>
                  </td>
                  <td>{{data.DomainURL}}</td>
                  <td>{{data.Plan}}</td>
                  <td>{{data.CreatedOn}}</td>
                  <td>
                      <span href="javascript:void(0);" class="badge badge-sm d-inline-flex align-items-center"
                          [ngClass]="data.Status==='Approved'?'badge-soft-success':data.Status==='Pending'?'badge-soft-warning':'badge-soft-danger'">
                            {{data.Status}} 
                          <i class="isax ms-1"
                          [ngClass]="data.Status==='Approved'?' isax-tick-circle':data.Status==='Pending'?' isax-timer':' isax-close-circle'"></i>
										</span>
                  </td>
                  <td class="action-item">
                      <a href="javascript:void(0);" data-bs-toggle="dropdown">
                          <i class="fa-solid fa-ellipsis"></i>
                      </a>
                      <ul class="dropdown-menu">
                          <li>
                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#domain_approved"><i class="isax isax-eye me-2"></i>View</a>
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
  <!-- /Table List End -->
  <app-custom-pagination *ngIf="row"></app-custom-pagination>

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
              <label class="form-label">Company</label>
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
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-01.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Trend Hive
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-02.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Quick Cart
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-03.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Tech Bazaar
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-04.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Harvest Basket
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-05.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Elite Mart
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/icons/company-06.svg" class="flex-shrink-0 rounded-circle" alt="img"></span>Prime Mart
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
              <label class="form-label">Plan</label>
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
                                  <input class="form-check-input m-0 me-2" type="checkbox"> Advanced (Monthly)
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox"> Basic (Yearly)
                              </label>
                          </li>
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox"> Enterprise (Monthly)
                              </label>
                          </li>
                      </ul>
                      <div class="row g-2">
                          <div class="col-6">
                              <a href="javascript:void(0);" class="btn btn-outline-white w-100" id="close-filter-1">Cancel</a>
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
                      <ul class="mb-3">
                          <li>
                              <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input class="form-check-input m-0 me-2" type="checkbox">
                                  <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Approved
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
                                  <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Rejected
                              </label>
                          </li>
                      </ul>
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
<!-- /Filter End -->

<!-- Domain Details Start -->
<div class="modal fade" id="domain_approved">
  <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title d-flex align-items-center">
                Domain Detail
                <span class="badge badge-soft-success d-inline-flex align-items-center badge-xs ms-2 border">
                  Approved<i class="isax isax-tick-circle ms-1"></i>
                </span>
              </h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
          </div>
          <form>
              <div class="modal-body pb-0">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="mb-3">
                              <div class="p-3 mb-3 br-5 bg-light border">
                                  <div class="row">
                                      <div class="col-md-12">
                                          <div class="d-flex align-items-center file-name-icon position-relative z-1">
                                              <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                                                  <img src="assets/img/icons/company-01.svg" class="img-fluid" alt="img">
                                              </a>
                                              <div class="ms-2">
                                                  <h6><a href="javascript:void(0);">Trend Hive</a></h6>
                                              </div>
                                              <img src="assets/img/bg/domin-bg-1.png" class="img-fluid position-absolute end-0 z-n1" alt="img">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Plan Name</span>
                              <h6 class="fs-14 fw-medium mb-0">Advanced</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Plan Type</span>
                              <h6 class="fs-14 fw-medium mb-0">Monthly</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Account URL</span>
                              <h6 class="fs-14 fw-medium mb-0">th.example.com</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Price</span>
                              <h6 class="fs-14 fw-medium mb-0">$200</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Register Date</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Jan 2025</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Expiring On</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Feb 2025</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </div>
  </div>
</div>
<!-- /Domain Details End -->

<!-- Domain Details Start -->
<div class="modal fade" id="domain_pending">
  <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title d-flex align-items-center">
    Domain Detail
    <span class="badge badge-soft-warning d-inline-flex align-items-center badge-xs ms-2">
      Pending<i class="isax isax-tick-circle ms-1"></i>
    </span>
  </h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fa-solid fa-x"></i>
              </button>
          </div>
          <form>
              <div class="modal-body pb-0">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="mb-3">
                              <div class="p-3 mb-3 br-5 bg-light">
                                  <div class="row">
                                      <div class="col-md-6">
                                          <div class="d-flex align-items-center file-name-icon position-relative z-1">
                                              <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                                                  <img src="assets/img/icons/company-01.svg" class="img-fluid" alt="img">
                                              </a>
                                              <div class="ms-2">
                                                  <h6><a href="javascript:void(0);">Trend Hive</a></h6>
                                              </div>
                                              <img src="assets/img/bg/domin-bg-1.png" class="img-fluid position-absolute end-0 bottom-0 top-0 z-n1" alt="img">
                                          </div>
                                      </div>
                                      <div class="col-md-6 text-end">
                                          <span class="badge badge-soft-success d-inline-flex align-items-center badge-xs ms-2">
                  Approved<i class="isax isax-tick-circle ms-1"></i>
                </span>
                                          <span class="badge badge-soft-danger d-inline-flex align-items-center badge-xs ms-2">
                  Rejected<i class="isax isax-close-circle ms-1"></i>
                </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Plan Name</span>
                              <h6 class="fs-14 fw-medium mb-0">Advanced</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Plan Type</span>
                              <h6 class="fs-14 fw-medium mb-0">Monthly</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Account URL</span>
                              <h6 class="fs-14 fw-medium mb-0">th.example.com</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Price</span>
                              <h6 class="fs-14 fw-medium mb-0">$200</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Register Date</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Jan 2025</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Expiring On</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Feb 2025</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </div>
  </div>
</div>
<!-- /Domain Details End -->

<!-- Domain Details Start -->
<div class="modal fade" id="domain_rejected">
  <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title d-flex align-items-center">
                Domain Detail
                <span class="badge badge-soft-danger d-inline-flex align-items-center badge-xs ms-2">
                  Rejected<i class="isax isax-tick-circle ms-1"></i>
                </span>
              </h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
          </div>
          <form>
              <div class="modal-body pb-0">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="mb-3">
                              <div class="p-3 mb-3 br-5 bg-light">
                                  <div class="row">
                                      <div class="col-md-12">
                                          <div class="d-flex align-items-center file-name-icon position-relative z-1">
                                              <a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
                                                  <img src="assets/img/icons/company-01.svg" class="img-fluid" alt="img">
                                              </a>
                                              <div class="ms-2">
                                                  <h6><a href="javascript:void(0);">Trend Hive</a></h6>
                                              </div>
                                              <img src="assets/img/bg/domin-bg-1.png" class="img-fluid position-absolute end-0 z-n1" alt="img">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Plan Name</span>
                              <h6 class="fs-14 fw-medium mb-0">Advanced</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Plan Type</span>
                              <h6 class="fs-14 fw-medium mb-0">Monthly</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Account URL</span>
                              <h6 class="fs-14 fw-medium mb-0">th.example.com</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Price</span>
                              <h6 class="fs-14 fw-medium mb-0">$200</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Register Date</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Jan 2025</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Expiring On</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Feb 2025</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </div>
  </div>
</div>
<!-- /Domain Details End -->

<!-- Delete Modal Start  -->
<div class="modal fade" id="delete_modal">
  <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
          <div class="modal-body text-center">
              <div class="mb-3">
                  <img src="assets/img/icons/delete.svg" alt="img">
              </div>
              <h6 class="mb-1">Delete Domain</h6>
              <p class="mb-3">Are you sure, you want to delete domain?</p>
              <div class="d-flex justify-content-center">
                  <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                  <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
              </div>
          </div>
      </div>
  </div>
</div>
<!-- /Delete Modal  End -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainComponent, { className: "DomainComponent", filePath: "src/app/features/super-admin/domain/domain.component.ts", lineNumber: 18 });
})();
export {
  DomainComponent
};
//# sourceMappingURL=chunk-WCWYN6U6.js.map
