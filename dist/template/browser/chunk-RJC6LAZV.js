import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
import {
  MatSliderModule
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
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-SFILXEE7.js";
import "./chunk-A5LCI4UV.js";
import "./chunk-QSJG5NOL.js";
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-5H6GXSFV.js";
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
  Router
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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/manage/manage-users/users/users.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function UsersComponent_For_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 139)(2, "div", 140)(3, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_For_128_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 96)(6, "a", 142);
    \u0275\u0275element(7, "img", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 144)(10, "a", 145);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 146);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 146);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 147);
    \u0275\u0275text(22);
    \u0275\u0275element(23, "i", 148);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 149)(25, "a", 150);
    \u0275\u0275element(26, "i", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ul", 6)(28, "li")(29, "a", 152);
    \u0275\u0275element(30, "i", 153);
    \u0275\u0275text(31, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li")(33, "a", 154);
    \u0275\u0275element(34, "i", 155);
    \u0275\u0275text(35, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.lastActivity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "isax-close-circle " : "isax-tick-circle ");
  }
}
function UsersComponent_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 156);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_app_custom_pagination_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var UsersComponent = class _UsersComponent {
  data;
  router;
  pagination;
  routes = routes;
  show_password = [false];
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
    this.data.getUsers().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.users) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getUsers().subscribe((apiRes) => {
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
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 453, vars: 23, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "user"], ["mat-sort-header", "phone"], ["mat-sort-header", "role"], ["mat-sort-header", "date"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info", "p-3"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/users/user-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/users/user-26.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/users/user-27.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/users/user-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info", "p-2"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body", "pb-0"], [1, "row"], [1, "col-md-12"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "isax", "isax-image", "text-primary", "fs-24"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9", "fs-12"], [1, "col-md-6"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "form-label", "d-block"], ["type", "text", "id", "phone", 1, "form-control"], [1, "position-relative"], ["type", "password", 1, "pass-inputa", "form-control", 3, "type"], [1, "isax", "toggle-password", 3, "click", "ngClass"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/users/user-26.jpg", "alt", "User Img", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], ["type", "text", "value", "Daniel", 1, "form-control"], ["type", "text", "value", "Patrick", 1, "form-control"], ["type", "text", "value", "Daniel Patrick", 1, "form-control"], ["type", "text", "value", "danial@example.com", 1, "form-control"], ["type", "text", "id", "phone2", 1, "form-control"], ["type", "password", "value", "123456", 1, "pass-inputa", "form-control", 3, "type"], ["placeholder", "Admin", 1, "custom-mat-select", "select"], ["placeholder", "Active", 1, "custom-mat-select", "select"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Users");
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
      \u0275\u0275text(20, "New User ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function UsersComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275text(58, "User");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 28);
      \u0275\u0275element(61, "i", 29)(62, "input", 30);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Phone");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 28);
      \u0275\u0275element(67, "i", 29)(68, "input", 30);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Role");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 28);
      \u0275\u0275element(73, "i", 29)(74, "input", 31);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Last Activity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 28);
      \u0275\u0275element(79, "i", 29)(80, "input", 30);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "li")(84, "label", 28);
      \u0275\u0275element(85, "i", 29)(86, "input", 30);
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(89, "div", 32)(90, "h6", 33);
      \u0275\u0275text(91, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 34)(93, "span", 35);
      \u0275\u0275text(94, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, "Users Selected");
      \u0275\u0275elementStart(96, "span", 36);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_96_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(97, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "span", 34)(99, "span", 35);
      \u0275\u0275text(100, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, "Status Selected");
      \u0275\u0275elementStart(102, "span", 36);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_102_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(103, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "a", 38);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_104_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(105, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 39)(107, "table", 40);
      \u0275\u0275listener("matSortChange", function UsersComponent_Template_table_matSortChange_107_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(108, "thead", 41)(109, "tr")(110, "th", 42)(111, "div", 43);
      \u0275\u0275listener("click", function UsersComponent_Template_div_click_111_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(112, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_112_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "th", 45);
      \u0275\u0275text(114, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 46);
      \u0275\u0275text(116, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 47);
      \u0275\u0275text(118, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th", 42);
      \u0275\u0275text(120, "Last Activity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 48);
      \u0275\u0275text(122, "Create On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 42);
      \u0275\u0275text(124, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(125, "th", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "tbody");
      \u0275\u0275repeaterCreate(127, UsersComponent_For_128_Template, 36, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(129, UsersComponent_Conditional_129_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(130, UsersComponent_app_custom_pagination_130_Template, 1, 0, "app-custom-pagination", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 50)(132, "div", 51)(133, "div", 52)(134, "h6", 53);
      \u0275\u0275text(135, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "button", 54);
      \u0275\u0275element(137, "i", 55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "div", 56)(139, "form", 57)(140, "div", 10)(141, "label", 58);
      \u0275\u0275text(142, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 3)(144, "a", 59);
      \u0275\u0275text(145, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 60)(147, "div", 10)(148, "div", 61)(149, "span", 62);
      \u0275\u0275element(150, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(151, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "ul", 10)(153, "li", 65)(154, "label", 66);
      \u0275\u0275element(155, "input", 67);
      \u0275\u0275text(156, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "a", 68);
      \u0275\u0275text(158, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "li")(160, "label", 69);
      \u0275\u0275element(161, "input", 31);
      \u0275\u0275elementStart(162, "span", 70);
      \u0275\u0275element(163, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(164, "Sarah Michelle ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "li")(166, "label", 69);
      \u0275\u0275element(167, "input", 31);
      \u0275\u0275elementStart(168, "span", 70);
      \u0275\u0275element(169, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(170, "Daniel Patrick ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "li")(172, "label", 69);
      \u0275\u0275element(173, "input", 31);
      \u0275\u0275elementStart(174, "span", 70);
      \u0275\u0275element(175, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(176, "Emily Lauren ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "li")(178, "label", 69);
      \u0275\u0275element(179, "input", 31);
      \u0275\u0275elementStart(180, "span", 70);
      \u0275\u0275element(181, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(182, "Braun Kelton ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 75)(184, "div", 76)(185, "a", 77);
      \u0275\u0275text(186, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "div", 76)(188, "a", 78);
      \u0275\u0275text(189, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(190, "div", 10)(191, "label", 58);
      \u0275\u0275text(192, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 79);
      \u0275\u0275element(194, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "div", 10)(196, "label", 58);
      \u0275\u0275text(197, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 3)(199, "a", 59);
      \u0275\u0275text(200, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 80)(202, "ul", 10)(203, "li")(204, "label", 69);
      \u0275\u0275element(205, "input", 31)(206, "i", 81);
      \u0275\u0275text(207, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "li")(209, "label", 69);
      \u0275\u0275element(210, "input", 31)(211, "i", 82);
      \u0275\u0275text(212, "Inactive ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(213, "div", 83)(214, "div", 75)(215, "div", 76)(216, "a", 84);
      \u0275\u0275text(217, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "div", 76)(219, "button", 85);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_219_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(220, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(221, "div", 86)(222, "div", 87)(223, "div", 88)(224, "div", 89)(225, "h4", 90);
      \u0275\u0275text(226, "Add New User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "button", 91);
      \u0275\u0275element(228, "i", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "form")(230, "div", 92)(231, "div", 93)(232, "div", 94)(233, "div", 10)(234, "span", 95);
      \u0275\u0275text(235, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "div", 96)(237, "div", 97);
      \u0275\u0275element(238, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "div", 99)(240, "div", 100);
      \u0275\u0275element(241, "i", 101);
      \u0275\u0275text(242, "Upload Image ");
      \u0275\u0275element(243, "input", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "span", 103);
      \u0275\u0275text(245, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(246, "div", 104)(247, "div", 10)(248, "label", 58);
      \u0275\u0275text(249, "First Name");
      \u0275\u0275elementStart(250, "span", 105);
      \u0275\u0275text(251, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(252, "input", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 104)(254, "div", 10)(255, "label", 58);
      \u0275\u0275text(256, "Last Name");
      \u0275\u0275elementStart(257, "span", 105);
      \u0275\u0275text(258, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(259, "input", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 94)(261, "div", 10)(262, "label", 58);
      \u0275\u0275text(263, "User Name");
      \u0275\u0275elementStart(264, "span", 105);
      \u0275\u0275text(265, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(266, "input", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "div", 104)(268, "div", 10)(269, "label", 58);
      \u0275\u0275text(270, "Email");
      \u0275\u0275elementStart(271, "span", 105);
      \u0275\u0275text(272, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(273, "input", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 104)(275, "div", 10)(276, "label", 107);
      \u0275\u0275text(277, "Phone Number");
      \u0275\u0275elementStart(278, "span", 105);
      \u0275\u0275text(279, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(280, "input", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "div", 104)(282, "div", 10)(283, "label", 58);
      \u0275\u0275text(284, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 109);
      \u0275\u0275element(286, "input", 110);
      \u0275\u0275elementStart(287, "span", 111);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_287_listener() {
        return ctx.show_password[3] = !ctx.show_password[3];
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(288, "div", 104)(289, "div", 10)(290, "label", 58);
      \u0275\u0275text(291, "Confirm Password");
      \u0275\u0275elementStart(292, "span", 105);
      \u0275\u0275text(293, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "div", 109);
      \u0275\u0275element(295, "input", 110);
      \u0275\u0275elementStart(296, "span", 111);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_296_listener() {
        return ctx.show_password[2] = !ctx.show_password[2];
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(297, "div", 104)(298, "div", 10)(299, "label", 58);
      \u0275\u0275text(300, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "mat-select", 112)(302, "mat-option", 113);
      \u0275\u0275text(303, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "mat-option", 113);
      \u0275\u0275text(305, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "mat-option", 113);
      \u0275\u0275text(307, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "mat-option", 113);
      \u0275\u0275text(309, "Shop Owner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-option", 113);
      \u0275\u0275text(311, "Receptionist");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(312, "div", 104)(313, "div", 10)(314, "label", 58);
      \u0275\u0275text(315, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "mat-select", 112)(317, "mat-option", 113);
      \u0275\u0275text(318, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "mat-option", 113);
      \u0275\u0275text(320, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "mat-option", 113);
      \u0275\u0275text(322, "Inactive");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(323, "div", 114)(324, "button", 115);
      \u0275\u0275text(325, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "button", 116);
      \u0275\u0275text(327, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(328, "div", 117)(329, "div", 87)(330, "div", 88)(331, "div", 89)(332, "h4", 90);
      \u0275\u0275text(333, "Edit User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "button", 91);
      \u0275\u0275element(335, "i", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(336, "form")(337, "div", 92)(338, "div", 93)(339, "div", 94)(340, "div", 10)(341, "span", 95);
      \u0275\u0275text(342, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "div", 96)(344, "div", 97)(345, "div", 118);
      \u0275\u0275element(346, "img", 119);
      \u0275\u0275elementStart(347, "a", 120);
      \u0275\u0275element(348, "i", 121);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(349, "div", 99)(350, "div", 100);
      \u0275\u0275element(351, "i", 101);
      \u0275\u0275text(352, "Upload Image ");
      \u0275\u0275element(353, "input", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "span", 103);
      \u0275\u0275text(355, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(356, "div", 104)(357, "div", 10)(358, "label", 58);
      \u0275\u0275text(359, "First Name");
      \u0275\u0275elementStart(360, "span", 105);
      \u0275\u0275text(361, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(362, "input", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "div", 104)(364, "div", 10)(365, "label", 58);
      \u0275\u0275text(366, "Last Name");
      \u0275\u0275elementStart(367, "span", 105);
      \u0275\u0275text(368, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(369, "input", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(370, "div", 94)(371, "div", 10)(372, "label", 58);
      \u0275\u0275text(373, "User Name");
      \u0275\u0275elementStart(374, "span", 105);
      \u0275\u0275text(375, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(376, "input", 124);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(377, "div", 104)(378, "div", 10)(379, "label", 58);
      \u0275\u0275text(380, "Email");
      \u0275\u0275elementStart(381, "span", 105);
      \u0275\u0275text(382, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(383, "input", 125);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "div", 104)(385, "div", 10)(386, "label", 107);
      \u0275\u0275text(387, "Phone Number");
      \u0275\u0275elementStart(388, "span", 105);
      \u0275\u0275text(389, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(390, "input", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "div", 104)(392, "div", 10)(393, "label", 58);
      \u0275\u0275text(394, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "div", 109);
      \u0275\u0275element(396, "input", 110);
      \u0275\u0275elementStart(397, "span", 111);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_397_listener() {
        return ctx.show_password[1] = !ctx.show_password[1];
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(398, "div", 104)(399, "div", 10)(400, "label", 58);
      \u0275\u0275text(401, "Confirm Password");
      \u0275\u0275elementStart(402, "span", 105);
      \u0275\u0275text(403, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(404, "div", 109);
      \u0275\u0275element(405, "input", 127);
      \u0275\u0275elementStart(406, "span", 111);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_406_listener() {
        return ctx.show_password[0] = !ctx.show_password[0];
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(407, "div", 104)(408, "div", 10)(409, "label", 58);
      \u0275\u0275text(410, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "mat-select", 128)(412, "mat-option", 113);
      \u0275\u0275text(413, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "mat-option", 113);
      \u0275\u0275text(415, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "mat-option", 113);
      \u0275\u0275text(417, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "mat-option", 113);
      \u0275\u0275text(419, "Shop Owner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "mat-option", 113);
      \u0275\u0275text(421, "Receptionist");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(422, "div", 104)(423, "div", 10)(424, "label", 58);
      \u0275\u0275text(425, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "mat-select", 129)(427, "mat-option", 113);
      \u0275\u0275text(428, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "mat-option", 113);
      \u0275\u0275text(430, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "mat-option", 113);
      \u0275\u0275text(432, "Inactive");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(433, "div", 114)(434, "button", 115);
      \u0275\u0275text(435, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "button", 130);
      \u0275\u0275text(437, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(438, "div", 131)(439, "div", 132)(440, "div", 88)(441, "div", 133)(442, "div", 10);
      \u0275\u0275element(443, "img", 134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "h6", 135);
      \u0275\u0275text(445, "Delete User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "p", 10);
      \u0275\u0275text(447, "Are you sure, you want to delete User?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "div", 136)(449, "a", 137);
      \u0275\u0275text(450, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "a", 138);
      \u0275\u0275text(452, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance(59);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 129 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(156);
      \u0275\u0275property("type", ctx.show_password[3] === true ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.show_password[3] === true ? "toggle-password isax-eye" : "toggle-password isax-eye-slash");
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.show_password[2] === true ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.show_password[2] === true ? "toggle-password isax-eye" : "toggle-password isax-eye-slash");
      \u0275\u0275advance(100);
      \u0275\u0275property("type", ctx.show_password[1] === true ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.show_password[1] === true ? "toggle-password isax-eye" : "toggle-password isax-eye-slash");
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.show_password[0] === true ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.show_password[0] === true ? "toggle-password isax-eye" : "toggle-password isax-eye-slash");
    }
  }, dependencies: [MatSliderModule, DateRangePickerComponent, CustomPaginationComponent, CommonModule, NgClass, NgIf, MatSortModule, MatSort, MatSortHeader, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", imports: [MatSliderModule, DateRangePickerComponent, CustomPaginationComponent, CommonModule, MatSortModule, FormsModule, MatSelectModule], template: `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Users</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown">
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
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                    <i class="isax isax-add-circle5 me-1"></i>New User
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

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
                                <span>User</span>
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
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Role</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span>Last Activity</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
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
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Users Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->

    </div>

    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th mat-sort-header="user">User</th>
                    <th mat-sort-header="phone">Phone</th>
                    <th mat-sort-header="role">Role</th>
                    <th class="no-sort">Last Activity</th>
                    <th mat-sort-header="date">Create On</th>
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
                                <img src="assets/img/users/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.user}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.phone}}</td>
                    <td class="text-dark">{{data.role}}</td>
                    <td class="text-dark">{{data.lastActivity}}</td>
                    <td>{{data.createdOn}}</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center"
                        [ngClass]="data.status==='Inactive'?'badge-soft-danger':'badge-soft-success'">{{data.status}}
                            <i class="isax ms-1"
                            [ngClass]="data.status==='Inactive'?'isax-close-circle ':'isax-tick-circle '"></i>
                        </span>
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
        <app-custom-pagination *ngIf="row"></app-custom-pagination>
        <!-- end table -->
         
    </div>

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
                <label class="form-label">Users</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
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
                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sarah Michelle
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-26.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Daniel Patrick
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-27.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Lauren
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Braun Kelton
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
            <div class="mb-3">
                <label class="form-label">Status</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-2">
                        <ul class="mb-3">
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Active
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Inactive
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
                    </div> <!-- end col -->
                    <div class="col-6">
                        <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
                    </div> <!-- end col -->
                </div> <!-- end row -->
            </div>
        </form>
    </div>
</div>
<!-- End Filter -->

<!-- Start Modal  -->
<div id="add_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New User</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div> <!-- end modal-header -->
            <form>
                <div class="modal-body pb-0">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
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
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">User Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label d-block">Phone Number<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" id="phone">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <div class="position-relative">
                                    <input type="password" [type]="show_password[3] === true?'text':'password'" class="pass-inputa form-control">
                                    <span class="isax toggle-password "(click)="show_password[3] = !show_password[3]"
                                    [ngClass]="
                                    show_password[3] === true
                                        ? 'toggle-password isax-eye'
                                        : 'toggle-password isax-eye-slash'
                                    "></span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
                                <div class="position-relative">
                                    <input type="password" [type]="show_password[2] === true?'text':'password'" class="pass-inputa form-control">
                                    <span class="isax toggle-password "(click)="show_password[2] = !show_password[2]"
                                    [ngClass]="
                                    show_password[2] === true
                                        ? 'toggle-password isax-eye'
                                        : 'toggle-password isax-eye-slash'
                                    "></span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Role</label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Admin</mat-option>
                                    <mat-option value="1">Customer</mat-option>
                                    <mat-option value="1">Shop Owner</mat-option>
                                    <mat-option value="1">Receptionist</mat-option>
                                </mat-select>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Active</mat-option>
                                    <mat-option value="1">Inactive</mat-option>
                                </mat-select>
                            </div>
                        </div> <!-- end col -->
                    </div> <!-- end row -->
                </div> <!-- end modal-body -->
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Create</button>
                </div> <!-- end modal-footer -->
            </form>
        </div> <!-- end modal-content -->
    </div>
</div>
<!-- End Modal -->

<!-- Start Modal  -->
<div id="edit_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit User</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div> <!-- end modal-header -->
            <form>
                <div class="modal-body pb-0">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                        <div class="position-relative d-flex align-items-center">
                                            <img src="assets/img/users/user-26.jpg" class="avatar avatar-xl" alt="User Img">
                                            <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>
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
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Daniel">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Patrick">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">User Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Daniel Patrick">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="danial@example.com">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label d-block">Phone Number<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" id="phone2">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <div class="position-relative">
                                    <input type="password" [type]="show_password[1] === true?'text':'password'" class="pass-inputa form-control">
                                    <span class="isax toggle-password "(click)="show_password[1] = !show_password[1]"
                                    [ngClass]="
                                    show_password[1] === true
                                        ? 'toggle-password isax-eye'
                                        : 'toggle-password isax-eye-slash'
                                    "></span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
                                <div class="position-relative">
                                    <input type="password" [type]="show_password[0] === true?'text':'password'" class="pass-inputa form-control" value="123456">
                                    <span class="isax toggle-password "(click)="show_password[0] = !show_password[0]"
                                    [ngClass]="
                                    show_password[0] === true
                                        ? 'toggle-password isax-eye'
                                        : 'toggle-password isax-eye-slash'
                                    "></span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Role</label>
                                <mat-select class="custom-mat-select select" placeholder="Admin">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Admin</mat-option>
                                    <mat-option value="1">Customer</mat-option>
                                    <mat-option value="1">Shop Owner</mat-option>
                                    <mat-option value="1">Receptionist</mat-option>
                                </mat-select>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <mat-select class="custom-mat-select select" placeholder="Active">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Active</mat-option>
                                    <mat-option value="1">Inactive</mat-option>
                                </mat-select>
                            </div>
                        </div> <!-- end col -->
                    </div> <!-- end row -->
                </div> <!-- end modal-body -->
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                </div> <!-- end modal-footer -->
            </form>
        </div> <!-- end modal-content -->
    </div>
</div>
<!-- End Modal -->

<!-- Start Modal  -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete User</h6>
                <p class="mb-3">Are you sure, you want to delete User?</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-white me-3" data-bs-dismiss="modal">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                </div>
            </div> <!-- end modal-body -->
        </div> <!-- end modal-content -->
    </div>
</div>
<!-- End Modal  -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/features/manage/manage-users/users/users.component.ts", lineNumber: 21 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-RJC6LAZV.js.map
