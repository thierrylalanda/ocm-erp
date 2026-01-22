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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/super-admin/companies/companies.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
var _c3 = () => ({ adaptivePosition: true });
function CompaniesComponent_For_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 180)(3, "input", 181);
    \u0275\u0275twoWayListener("ngModelChange", function CompaniesComponent_For_171_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 111)(6, "a", 182);
    \u0275\u0275element(7, "img", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 147)(10, "a", 165);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 184)(18, "p", 185);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 186)(21, "span", 187);
    \u0275\u0275element(22, "i", 188);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 189);
    \u0275\u0275text(27);
    \u0275\u0275element(28, "i", 190);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 191)(30, "a", 192);
    \u0275\u0275element(31, "i", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ul", 6)(33, "li")(34, "a", 194);
    \u0275\u0275element(35, "i", 195);
    \u0275\u0275text(36, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li")(38, "a", 196);
    \u0275\u0275element(39, "i", 197);
    \u0275\u0275text(40, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "li")(42, "a", 198);
    \u0275\u0275element(43, "i", 199);
    \u0275\u0275text(44, "Delete");
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
    \u0275\u0275textInterpolate(data_r2.Email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.AccountURL);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.Plan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r2.CreatedOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.Status === "Active" ? "badge-soft-success" : "badge-soft-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.Status === "Active" ? " isax-tick-circle" : "isax-close-circle");
  }
}
function CompaniesComponent_Conditional_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 200);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CompaniesComponent_app_custom_pagination_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CompaniesComponent = class _CompaniesComponent {
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
    this.data.getCompanies().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.companies) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCompanies().subscribe((apiRes) => {
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
  static \u0275fac = function CompaniesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompaniesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompaniesComponent, selectors: [["app-companies"]], decls: 860, vars: 21, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_companies", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "position-relative"], [1, "card-body"], [1, "d-flex", "align-items-center", "pb-0"], [1, "me-2"], [1, "avatar", "avatar-lg", "bg-soft-info"], [1, "isax", "isax-buildings-25", "text-info", "fs-28"], [1, "mb-1"], [1, "fs-16", "fw-semibold"], [1, "avatar", "avatar-lg", "bg-success-subtle"], [1, "isax", "isax-menu-board5", "text-success", "fs-28"], [1, "avatar", "avatar-lg", "bg-danger-subtle"], [1, "isax", "isax-flash-slash5", "text-danger", "fs-28"], [1, "avatar", "avatar-lg", "bg-primary-subtle"], [1, "isax", "isax-map5", "text-primary", "fs-28"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "datatable", "dataTable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "plan"], ["mat-sort-header", "createdon"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/icons/company-01.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-02.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-03.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-04.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-05.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/icons/company-06.svg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "id", "close-filter", 1, "btn", "btn-outline-white", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], ["href", "javascript:void(0);", "id", "close-filter1", 1, "btn", "btn-outline-white", "w-100"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_companies", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "isax", "isax-image", "text-primary", "fs-24"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9"], [1, "col-md-6"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-md-12"], ["id", "passwordInput", 1, "position-relative"], ["type", "password", 1, "pass-inputs", "form-control", "form-control-lg"], [1, "isax", "toggle-passwords", "isax-eye-slash", "text-gray-7", "fs-14"], [1, "position-relative"], ["type", "password", 1, "pass-inputa", "form-control"], [1, "isax", "toggle-passworda", "isax-eye-slash", "text-gray-7", "fs-14"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit_companies", 1, "modal", "fade"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/icons/shoes.jpg", "alt", "User Img", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], ["id", "view_companies", 1, "modal", "fade"], [1, "bg-transparent-light", "rounded", "border", "mb-3", "p-3", "mx-1"], [1, "fs-14", "fw-semibold"], [1, "col-md-4"], [1, "fs-13"], [1, "fs-14", "fw-medium", "mb-0"], [1, ""], [1, "p-1"], [1, "fs-14", "fw-bold"], [1, "input-group", "position-relative", "mb-3"], ["type", "text", "bsDatepicker", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "datetimepicker", "rounded-end", 3, "bsConfig"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], ["id", "companies_details", 1, "modal", "fade"], [1, "modal-title", "d-flex", "align-items-center"], [1, "modal-body", "pb-0"], [1, "border-bottom", "mb-3"], [1, "p-3", "mb-3", "br-5", "bg-transparent-light"], [1, "d-flex", "align-items-center", "file-name-icon", "justify-content-between"], ["href", "javascript:void(0);", 1, "avatar", "avatar-xxl", "bg-white", "border", "rounded-2"], ["src", "assets/img/icons/company-01.svg", "alt", "img", 1, "img-fluid", "h-75"], [1, "ms-2"], [1, "fw-bold", "fs-14", "mb-2"], ["href", "javascript:void(0);"], [1, "isax", "isax-location", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_companies", 1, "btn", "btn-outline-white", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-1"], [1, "fs-14"], [1, "fs-14", "mb-0"], [1, "badge", "badge-soft-success", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle", "ms-1"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#companies_details", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "ms-3"], [1, "btn", "btn-sm", "btn-light", "p-1", "d-inline-flex", "align-items-center"], [1, "isax", "isax-candle"], ["href", "javascript:void(0);", 1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_companies", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_companies", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CompaniesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Companies");
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
      \u0275\u0275text(20, "New Company ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "span", 16);
      \u0275\u0275element(28, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div")(30, "p", 18);
      \u0275\u0275text(31, "Total Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h6", 19);
      \u0275\u0275text(33, "987");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "div", 13)(37, "div", 14)(38, "div", 15)(39, "span", 20);
      \u0275\u0275element(40, "i", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div")(42, "p", 18);
      \u0275\u0275text(43, "Active Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h6", 19);
      \u0275\u0275text(45, "920");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(46, "div", 11)(47, "div", 12)(48, "div", 13)(49, "div", 14)(50, "div", 15)(51, "span", 22);
      \u0275\u0275element(52, "i", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div")(54, "p", 18);
      \u0275\u0275text(55, "Inactive Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "h6", 19);
      \u0275\u0275text(57, "92");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(58, "div", 11)(59, "div", 12)(60, "div", 13)(61, "div", 14)(62, "div", 15)(63, "span", 24);
      \u0275\u0275element(64, "i", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div")(66, "p", 18);
      \u0275\u0275text(67, "Company Locations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "h6", 19);
      \u0275\u0275text(69, "200");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(70, "div", 26)(71, "div", 27)(72, "div", 28)(73, "div", 29)(74, "div", 30)(75, "a", 31);
      \u0275\u0275element(76, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 33)(78, "label")(79, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function CompaniesComponent_Template_input_ngModelChange_79_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CompaniesComponent_Template_input_ngModelChange_79_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(80, "a", 35);
      \u0275\u0275element(81, "i", 36);
      \u0275\u0275text(82, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 28)(84, "div", 37)(85, "a", 38);
      \u0275\u0275element(86, "i", 39);
      \u0275\u0275text(87, "Sort By : ");
      \u0275\u0275elementStart(88, "span", 40);
      \u0275\u0275text(89, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "ul", 41)(91, "li")(92, "a", 7);
      \u0275\u0275text(93, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "li")(95, "a", 7);
      \u0275\u0275text(96, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "div", 37)(98, "a", 42);
      \u0275\u0275element(99, "i", 43);
      \u0275\u0275text(100, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "ul", 44)(102, "li")(103, "label", 45);
      \u0275\u0275element(104, "i", 46)(105, "input", 47);
      \u0275\u0275elementStart(106, "span");
      \u0275\u0275text(107, "Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "li")(109, "label", 45);
      \u0275\u0275element(110, "i", 46)(111, "input", 47);
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113, "Domain URL");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "li")(115, "label", 45);
      \u0275\u0275element(116, "i", 46)(117, "input", 47);
      \u0275\u0275elementStart(118, "span");
      \u0275\u0275text(119, "Plan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "li")(121, "label", 45);
      \u0275\u0275element(122, "i", 46)(123, "input", 48);
      \u0275\u0275elementStart(124, "span");
      \u0275\u0275text(125, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "li")(127, "label", 45);
      \u0275\u0275element(128, "i", 46)(129, "input", 48);
      \u0275\u0275elementStart(130, "span");
      \u0275\u0275text(131, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(132, "div", 49)(133, "h6", 50);
      \u0275\u0275text(134, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "span", 51)(136, "span", 52);
      \u0275\u0275text(137, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(138, "Companies Selected");
      \u0275\u0275elementStart(139, "span", 53);
      \u0275\u0275listener("click", function CompaniesComponent_Template_span_click_139_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(140, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "span", 51)(142, "span", 52);
      \u0275\u0275text(143, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(144, "Plans Selected");
      \u0275\u0275elementStart(145, "span", 53);
      \u0275\u0275listener("click", function CompaniesComponent_Template_span_click_145_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(146, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "a", 55);
      \u0275\u0275listener("click", function CompaniesComponent_Template_a_click_147_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(148, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(149, "div", 56)(150, "table", 57);
      \u0275\u0275listener("matSortChange", function CompaniesComponent_Template_table_matSortChange_150_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(151, "thead", 58)(152, "tr")(153, "th", 59)(154, "div", 60);
      \u0275\u0275listener("click", function CompaniesComponent_Template_div_click_154_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(155, "input", 61);
      \u0275\u0275twoWayListener("ngModelChange", function CompaniesComponent_Template_input_ngModelChange_155_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(156, "th", 59);
      \u0275\u0275text(157, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "th", 59);
      \u0275\u0275text(159, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "th", 59);
      \u0275\u0275text(161, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "th", 62);
      \u0275\u0275text(163, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "th", 63);
      \u0275\u0275text(165, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "th", 59);
      \u0275\u0275text(167, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(168, "th", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "tbody");
      \u0275\u0275repeaterCreate(170, CompaniesComponent_For_171_Template, 45, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(172, CompaniesComponent_Conditional_172_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(173, CompaniesComponent_app_custom_pagination_173_Template, 1, 0, "app-custom-pagination", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 65)(175, "div", 66)(176, "div", 67)(177, "h6", 68);
      \u0275\u0275text(178, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "button", 69);
      \u0275\u0275element(180, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "div", 71)(182, "form", 72)(183, "div", 26)(184, "label", 73);
      \u0275\u0275text(185, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 37)(187, "a", 74);
      \u0275\u0275text(188, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "div", 75)(190, "div", 26)(191, "div", 76)(192, "span", 77);
      \u0275\u0275element(193, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275element(194, "input", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "ul", 26)(196, "li", 80)(197, "label", 81);
      \u0275\u0275element(198, "input", 82);
      \u0275\u0275text(199, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "a", 83);
      \u0275\u0275text(201, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "li")(203, "label", 84);
      \u0275\u0275element(204, "input", 48);
      \u0275\u0275elementStart(205, "span", 85);
      \u0275\u0275element(206, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275text(207, "Trend Hive ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "li")(209, "label", 84);
      \u0275\u0275element(210, "input", 48);
      \u0275\u0275elementStart(211, "span", 85);
      \u0275\u0275element(212, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275text(213, "Quick Cart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "li")(215, "label", 84);
      \u0275\u0275element(216, "input", 48);
      \u0275\u0275elementStart(217, "span", 85);
      \u0275\u0275element(218, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(219, "Tech Bazaar ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "li")(221, "label", 84);
      \u0275\u0275element(222, "input", 48);
      \u0275\u0275elementStart(223, "span", 85);
      \u0275\u0275element(224, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(225, "Harvest Basket ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "li")(227, "label", 84);
      \u0275\u0275element(228, "input", 48);
      \u0275\u0275elementStart(229, "span", 85);
      \u0275\u0275element(230, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(231, "Elite Mart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "li")(233, "label", 84);
      \u0275\u0275element(234, "input", 48);
      \u0275\u0275elementStart(235, "span", 85);
      \u0275\u0275element(236, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(237, "Prime Mart ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "div", 92)(239, "div", 93)(240, "a", 94);
      \u0275\u0275text(241, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "div", 93)(243, "a", 95);
      \u0275\u0275text(244, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(245, "div", 26)(246, "label", 73);
      \u0275\u0275text(247, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 96);
      \u0275\u0275element(249, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 26)(251, "label", 73);
      \u0275\u0275text(252, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 37)(254, "a", 74);
      \u0275\u0275text(255, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "div", 75)(257, "div", 26)(258, "div", 76)(259, "span", 77);
      \u0275\u0275element(260, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275element(261, "input", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "ul", 26)(263, "li", 80)(264, "label", 81);
      \u0275\u0275element(265, "input", 82);
      \u0275\u0275text(266, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "a", 83);
      \u0275\u0275text(268, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "li")(270, "label", 84);
      \u0275\u0275element(271, "input", 48);
      \u0275\u0275text(272, " Advanced (Monthly) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "li")(274, "label", 84);
      \u0275\u0275element(275, "input", 48);
      \u0275\u0275text(276, " Basic (Yearly) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "li")(278, "label", 84);
      \u0275\u0275element(279, "input", 48);
      \u0275\u0275text(280, " Enterprise (Monthly) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(281, "div", 92)(282, "div", 93)(283, "a", 97);
      \u0275\u0275text(284, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 93)(286, "a", 95);
      \u0275\u0275text(287, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(288, "div", 26)(289, "label", 73);
      \u0275\u0275text(290, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 37)(292, "a", 74);
      \u0275\u0275text(293, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div", 75)(295, "ul", 26)(296, "li")(297, "label", 84);
      \u0275\u0275element(298, "input", 48)(299, "i", 98);
      \u0275\u0275text(300, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "li")(302, "label", 84);
      \u0275\u0275element(303, "input", 48)(304, "i", 99);
      \u0275\u0275text(305, "Inactive ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(306, "div", 100)(307, "div", 92)(308, "div", 93)(309, "a", 101);
      \u0275\u0275text(310, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "div", 93)(312, "button", 102);
      \u0275\u0275listener("click", function CompaniesComponent_Template_button_click_312_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(313, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(314, "div", 103)(315, "div", 104)(316, "div", 105)(317, "div", 106)(318, "h4", 107);
      \u0275\u0275text(319, "Add Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "button", 108);
      \u0275\u0275element(321, "i", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "form")(323, "div", 109)(324, "div", 26)(325, "span", 110);
      \u0275\u0275text(326, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 111)(328, "div", 112);
      \u0275\u0275element(329, "i", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "div", 114)(331, "div", 115);
      \u0275\u0275element(332, "i", 116);
      \u0275\u0275text(333, "Upload Image ");
      \u0275\u0275element(334, "input", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "span", 118);
      \u0275\u0275text(336, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(337, "div", 10)(338, "div", 119)(339, "div", 26)(340, "label", 73);
      \u0275\u0275text(341, "Name");
      \u0275\u0275elementStart(342, "span", 120);
      \u0275\u0275text(343, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(344, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "div", 119)(346, "div", 26)(347, "label", 73);
      \u0275\u0275text(348, "Email Address");
      \u0275\u0275elementStart(349, "span", 120);
      \u0275\u0275text(350, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(351, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "div", 122)(353, "div", 26)(354, "label", 73);
      \u0275\u0275text(355, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(356, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "div", 119)(358, "div", 26)(359, "label", 73);
      \u0275\u0275text(360, "Phone Number");
      \u0275\u0275elementStart(361, "span", 120);
      \u0275\u0275text(362, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(363, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(364, "div", 119)(365, "div", 26)(366, "label", 73);
      \u0275\u0275text(367, "Website");
      \u0275\u0275elementStart(368, "span", 120);
      \u0275\u0275text(369, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(370, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "div", 119)(372, "div", 26)(373, "label", 73);
      \u0275\u0275text(374, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "div", 123);
      \u0275\u0275element(376, "input", 124)(377, "span", 125);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(378, "div", 119)(379, "div", 26)(380, "label", 73);
      \u0275\u0275text(381, "Confirm Password");
      \u0275\u0275elementStart(382, "span", 120);
      \u0275\u0275text(383, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "div", 126);
      \u0275\u0275element(385, "input", 127)(386, "span", 128);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(387, "div", 122)(388, "div", 26)(389, "label", 73);
      \u0275\u0275text(390, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(391, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(392, "div", 119)(393, "div", 26)(394, "label", 73);
      \u0275\u0275text(395, "Plan");
      \u0275\u0275elementStart(396, "span", 120);
      \u0275\u0275text(397, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(398, "mat-select", 129)(399, "mat-option", 130);
      \u0275\u0275text(400, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(401, "mat-option", 130);
      \u0275\u0275text(402, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "mat-option", 130);
      \u0275\u0275text(404, "Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "mat-option", 130);
      \u0275\u0275text(406, "Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "mat-option", 130);
      \u0275\u0275text(408, "Enterprise");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(409, "div", 119)(410, "div", 26)(411, "label", 73);
      \u0275\u0275text(412, "Plan Type");
      \u0275\u0275elementStart(413, "span", 120);
      \u0275\u0275text(414, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(415, "mat-select", 129)(416, "mat-option", 130);
      \u0275\u0275text(417, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "mat-option", 130);
      \u0275\u0275text(419, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "mat-option", 130);
      \u0275\u0275text(421, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(422, "div", 119)(423, "div", 26)(424, "label", 73);
      \u0275\u0275text(425, "Currencies");
      \u0275\u0275elementStart(426, "span", 120);
      \u0275\u0275text(427, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(428, "mat-select", 129)(429, "mat-option", 130);
      \u0275\u0275text(430, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "mat-option", 130);
      \u0275\u0275text(432, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "mat-option", 130);
      \u0275\u0275text(434, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "mat-option", 130);
      \u0275\u0275text(436, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "mat-option", 130);
      \u0275\u0275text(438, "Rupees");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(439, "div", 119)(440, "div", 26)(441, "label", 73);
      \u0275\u0275text(442, "Language");
      \u0275\u0275elementStart(443, "span", 120);
      \u0275\u0275text(444, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "mat-select", 129)(446, "mat-option", 130);
      \u0275\u0275text(447, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "mat-option", 130);
      \u0275\u0275text(449, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "mat-option", 130);
      \u0275\u0275text(451, "French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "mat-option", 130);
      \u0275\u0275text(453, "German");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "mat-option", 130);
      \u0275\u0275text(455, "Arabic");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(456, "div", 131)(457, "button", 132);
      \u0275\u0275text(458, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "button", 133);
      \u0275\u0275text(460, "Add New");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(461, "div", 134)(462, "div", 104)(463, "div", 105)(464, "div", 106)(465, "h4", 107);
      \u0275\u0275text(466, "Edit Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "button", 108);
      \u0275\u0275element(468, "i", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(469, "form")(470, "div", 109)(471, "div", 26)(472, "span", 110);
      \u0275\u0275text(473, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "div", 111)(475, "div", 112)(476, "div", 135);
      \u0275\u0275element(477, "img", 136);
      \u0275\u0275elementStart(478, "a", 137);
      \u0275\u0275element(479, "i", 138);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(480, "div", 114)(481, "div", 115);
      \u0275\u0275element(482, "i", 116);
      \u0275\u0275text(483, "Upload Image ");
      \u0275\u0275element(484, "input", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "span", 118);
      \u0275\u0275text(486, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(487, "div", 10)(488, "div", 119)(489, "div", 26)(490, "label", 73);
      \u0275\u0275text(491, "Name");
      \u0275\u0275elementStart(492, "span", 120);
      \u0275\u0275text(493, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(494, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(495, "div", 119)(496, "div", 26)(497, "label", 73);
      \u0275\u0275text(498, "Email Address");
      \u0275\u0275elementStart(499, "span", 120);
      \u0275\u0275text(500, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(501, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(502, "div", 122)(503, "div", 26)(504, "label", 73);
      \u0275\u0275text(505, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(506, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "div", 119)(508, "div", 26)(509, "label", 73);
      \u0275\u0275text(510, "Phone Number");
      \u0275\u0275elementStart(511, "span", 120);
      \u0275\u0275text(512, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(513, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(514, "div", 119)(515, "div", 26)(516, "label", 73);
      \u0275\u0275text(517, "Website");
      \u0275\u0275elementStart(518, "span", 120);
      \u0275\u0275text(519, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(520, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(521, "div", 119)(522, "div", 26)(523, "label", 73);
      \u0275\u0275text(524, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "div", 123);
      \u0275\u0275element(526, "input", 124)(527, "span", 125);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(528, "div", 119)(529, "div", 26)(530, "label", 73);
      \u0275\u0275text(531, "Confirm Password");
      \u0275\u0275elementStart(532, "span", 120);
      \u0275\u0275text(533, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "div", 126);
      \u0275\u0275element(535, "input", 127)(536, "span", 128);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(537, "div", 122)(538, "div", 26)(539, "label", 73);
      \u0275\u0275text(540, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(541, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(542, "div", 119)(543, "div", 26)(544, "label", 73);
      \u0275\u0275text(545, "Plan");
      \u0275\u0275elementStart(546, "span", 120);
      \u0275\u0275text(547, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(548, "mat-select", 129)(549, "mat-option", 130);
      \u0275\u0275text(550, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "mat-option", 130);
      \u0275\u0275text(552, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "mat-option", 130);
      \u0275\u0275text(554, "Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "mat-option", 130);
      \u0275\u0275text(556, "Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "mat-option", 130);
      \u0275\u0275text(558, "Enterprise");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(559, "div", 119)(560, "div", 26)(561, "label", 73);
      \u0275\u0275text(562, "Plan Type");
      \u0275\u0275elementStart(563, "span", 120);
      \u0275\u0275text(564, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(565, "mat-select", 129)(566, "mat-option", 130);
      \u0275\u0275text(567, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "mat-option", 130);
      \u0275\u0275text(569, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "mat-option", 130);
      \u0275\u0275text(571, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(572, "div", 119)(573, "div", 26)(574, "label", 73);
      \u0275\u0275text(575, "Currencies");
      \u0275\u0275elementStart(576, "span", 120);
      \u0275\u0275text(577, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(578, "mat-select", 129)(579, "mat-option", 130);
      \u0275\u0275text(580, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(581, "mat-option", 130);
      \u0275\u0275text(582, "Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "mat-option", 130);
      \u0275\u0275text(584, "Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "mat-option", 130);
      \u0275\u0275text(586, "Pound");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "mat-option", 130);
      \u0275\u0275text(588, "Rupees");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(589, "div", 119)(590, "div", 26)(591, "label", 73);
      \u0275\u0275text(592, "Language");
      \u0275\u0275elementStart(593, "span", 120);
      \u0275\u0275text(594, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(595, "mat-select", 129)(596, "mat-option", 130);
      \u0275\u0275text(597, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "mat-option", 130);
      \u0275\u0275text(599, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "mat-option", 130);
      \u0275\u0275text(601, "French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "mat-option", 130);
      \u0275\u0275text(603, "German");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(604, "mat-option", 130);
      \u0275\u0275text(605, "Arabic");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(606, "div", 122)(607, "div", 139)(608, "label", 73);
      \u0275\u0275text(609, "Status");
      \u0275\u0275elementStart(610, "span", 120);
      \u0275\u0275text(611, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "div", 140);
      \u0275\u0275element(613, "input", 141);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(614, "div", 131)(615, "button", 132);
      \u0275\u0275text(616, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "button", 133);
      \u0275\u0275text(618, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(619, "div", 142)(620, "div", 104)(621, "div", 105)(622, "div", 106)(623, "h4", 107);
      \u0275\u0275text(624, "Upgrade Package");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "button", 108);
      \u0275\u0275element(626, "i", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(627, "div", 109)(628, "div", 143)(629, "div", 10)(630, "div", 122)(631, "div", 26)(632, "h6", 144);
      \u0275\u0275text(633, "Current Plan Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(634, "div", 145)(635, "div", 26)(636, "span", 146);
      \u0275\u0275text(637, "Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "h6", 147);
      \u0275\u0275text(639, "Trend Hive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(640, "div", 145)(641, "div", 26)(642, "span", 146);
      \u0275\u0275text(643, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "h6", 147);
      \u0275\u0275text(645, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(646, "div", 145)(647, "div", 26)(648, "span", 146);
      \u0275\u0275text(649, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(650, "h6", 147);
      \u0275\u0275text(651, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(652, "div", 145)(653, "div", 148)(654, "span", 146);
      \u0275\u0275text(655, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "h6", 147);
      \u0275\u0275text(657, "$200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(658, "div", 145)(659, "div", 148)(660, "span", 146);
      \u0275\u0275text(661, "Register Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "h6", 147);
      \u0275\u0275text(663, "03 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(664, "div", 145)(665, "div", 148)(666, "span", 146);
      \u0275\u0275text(667, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "h6", 147);
      \u0275\u0275text(669, "03 Feb 2025");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(670, "div", 149)(671, "div", 10)(672, "div", 122)(673, "div", 26)(674, "h6", 150);
      \u0275\u0275text(675, "Change Plan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(676, "div", 119)(677, "div", 26)(678, "label", 73);
      \u0275\u0275text(679, "Plan Name");
      \u0275\u0275elementStart(680, "span", 120);
      \u0275\u0275text(681, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(682, "mat-select", 129)(683, "mat-option", 130);
      \u0275\u0275text(684, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(685, "mat-option", 130);
      \u0275\u0275text(686, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(687, "mat-option", 130);
      \u0275\u0275text(688, "Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(689, "mat-option", 130);
      \u0275\u0275text(690, "Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(691, "mat-option", 130);
      \u0275\u0275text(692, "Enterprise");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(693, "div", 119)(694, "div", 26)(695, "label", 73);
      \u0275\u0275text(696, "Plan Type");
      \u0275\u0275elementStart(697, "span", 120);
      \u0275\u0275text(698, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(699, "mat-select", 129)(700, "mat-option", 130);
      \u0275\u0275text(701, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(702, "mat-option", 130);
      \u0275\u0275text(703, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "mat-option", 130);
      \u0275\u0275text(705, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(706, "div", 119)(707, "div", 26)(708, "label", 73);
      \u0275\u0275text(709, "Amount");
      \u0275\u0275elementStart(710, "span", 120);
      \u0275\u0275text(711, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(712, "input", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(713, "div", 119)(714, "div", 26)(715, "label", 73);
      \u0275\u0275text(716, "Payment Date ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(717, "div", 151);
      \u0275\u0275element(718, "input", 152);
      \u0275\u0275elementStart(719, "span", 153);
      \u0275\u0275element(720, "i", 154);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(721, "div", 119)(722, "div", 26)(723, "label", 73);
      \u0275\u0275text(724, "Next Payment Date ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(725, "div", 151);
      \u0275\u0275element(726, "input", 152);
      \u0275\u0275elementStart(727, "span", 153);
      \u0275\u0275element(728, "i", 154);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(729, "div", 119)(730, "div", 26)(731, "label", 73);
      \u0275\u0275text(732, "Expiring On ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(733, "div", 151);
      \u0275\u0275element(734, "input", 152);
      \u0275\u0275elementStart(735, "span", 153);
      \u0275\u0275element(736, "i", 154);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(737, "div", 155)(738, "div", 104)(739, "div", 105)(740, "div", 106)(741, "h4", 156);
      \u0275\u0275text(742, " Company Detail ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(743, "button", 108);
      \u0275\u0275element(744, "i", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(745, "form", 72)(746, "div", 157)(747, "div", 158)(748, "div", 10)(749, "div", 122)(750, "div", 26)(751, "div", 159)(752, "div", 10)(753, "div", 122)(754, "div", 160)(755, "div", 111)(756, "a", 161);
      \u0275\u0275element(757, "img", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(758, "div", 163)(759, "h6", 164)(760, "a", 165);
      \u0275\u0275text(761, "Trend Hive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(762, "span");
      \u0275\u0275element(763, "i", 166);
      \u0275\u0275text(764, "4712 Cherry Ridge Drive Rochester, NY 14620.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(765, "div")(766, "a", 167);
      \u0275\u0275element(767, "i", 168);
      \u0275\u0275text(768, "Edit Profile ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(769, "div", 122)(770, "div", 26)(771, "h6", 150);
      \u0275\u0275text(772, "Basic Info");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(773, "div", 145)(774, "div", 26)(775, "span", 169);
      \u0275\u0275text(776, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(777, "h6", 147);
      \u0275\u0275text(778, "trendhive@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(779, "div", 145)(780, "div", 26)(781, "span", 169);
      \u0275\u0275text(782, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "h6", 147);
      \u0275\u0275text(784, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(785, "div", 145)(786, "div", 26)(787, "span", 169);
      \u0275\u0275text(788, "Website");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(789, "h6", 147);
      \u0275\u0275text(790, "www.example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(791, "div", 145)(792, "div", 26)(793, "span", 169);
      \u0275\u0275text(794, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "h6", 147);
      \u0275\u0275text(796, "United Stated Dollar (USD)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(797, "div", 145)(798, "div", 26)(799, "span", 169);
      \u0275\u0275text(800, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(801, "h6", 147);
      \u0275\u0275text(802, "English");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(803, "div", 145)(804, "div", 26)(805, "p", 170);
      \u0275\u0275text(806, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(807, "span", 171);
      \u0275\u0275text(808, "Active ");
      \u0275\u0275element(809, "i", 172);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(810, "div", 10)(811, "div", 122)(812, "div", 26)(813, "h6", 150);
      \u0275\u0275text(814, "Plan Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(815, "div", 145)(816, "div", 26)(817, "span", 169);
      \u0275\u0275text(818, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(819, "h6", 147);
      \u0275\u0275text(820, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(821, "div", 145)(822, "div", 26)(823, "span", 169);
      \u0275\u0275text(824, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(825, "h6", 147);
      \u0275\u0275text(826, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(827, "div", 145)(828, "div", 26)(829, "span", 169);
      \u0275\u0275text(830, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(831, "h6", 147);
      \u0275\u0275text(832, "$200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(833, "div", 145)(834, "div", 26)(835, "span", 169);
      \u0275\u0275text(836, "Register Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(837, "h6", 147);
      \u0275\u0275text(838, "03 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(839, "div", 145)(840, "div", 26)(841, "span", 169);
      \u0275\u0275text(842, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(843, "h6", 147);
      \u0275\u0275text(844, "03 Feb 2025");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(845, "div", 173)(846, "div", 174)(847, "div", 105)(848, "div", 175)(849, "div", 26);
      \u0275\u0275element(850, "img", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(851, "h6", 18);
      \u0275\u0275text(852, "Delete Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(853, "p", 26);
      \u0275\u0275text(854, "Are you sure, you want to delete company?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(855, "div", 177)(856, "a", 178);
      \u0275\u0275text(857, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(858, "a", 179);
      \u0275\u0275text(859, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(79);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance(53);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 172 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(545);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(18, _c3));
      \u0275\u0275advance(8);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(19, _c3));
      \u0275\u0275advance(8);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(20, _c3));
    }
  }, dependencies: [CommonModule, NgClass, NgIf, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompaniesComponent, [{
    type: Component,
    args: [{ selector: "app-companies", imports: [CommonModule, BsDatepickerModule, MatSelectModule, DateRangePickerComponent, CustomPaginationComponent, MatSortModule, FormsModule], template: `<!-- Start Content -->
<div class="content-two">

  <!-- Page Header -->
  <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
    <div>
      <h6>Companies</h6>
    </div>
    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
      <div class="dropdown me-1">
        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"
          data-bs-toggle="dropdown">
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
        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal"
          data-bs-target="#add_companies">
          <i class="isax isax-add-circle5 me-1"></i>New Company
        </a>
      </div>
    </div>
  </div>
  <!-- End Page Header -->

  <!-- start row -->
  <div class="row">
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card position-relative">
        <div class="card-body">
          <div class="d-flex align-items-center pb-0">
            <div class="me-2">
              <span class="avatar avatar-lg bg-soft-info">
                <i class="isax isax-buildings-25 text-info fs-28"></i>
              </span>
            </div>
            <div>
              <p class="mb-1">Total Companies</p>
              <h6 class="fs-16 fw-semibold">987</h6>
            </div>
          </div>
        </div><!-- end card body -->
      </div><!-- end card -->
    </div><!-- end col -->
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card position-relative">
        <div class="card-body">
          <div class="d-flex align-items-center pb-0">
            <div class="me-2">
              <span class="avatar avatar-lg bg-success-subtle">
                <i class="isax isax-menu-board5 text-success fs-28"></i>
              </span>
            </div>
            <div>
              <p class="mb-1">Active Companies</p>
              <h6 class="fs-16 fw-semibold">920</h6>
            </div>
          </div>
        </div><!-- end card body -->
      </div><!-- end card -->
    </div><!-- end col -->
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card position-relative">
        <div class="card-body">
          <div class="d-flex align-items-center pb-0">
            <div class="me-2">
              <span class="avatar avatar-lg bg-danger-subtle">
                <i class="isax isax-flash-slash5 text-danger fs-28"></i>
              </span>
            </div>
            <div>
              <p class="mb-1">Inactive Company</p>
              <h6 class="fs-16 fw-semibold">92</h6>
            </div>
          </div>
        </div><!-- end card body -->
      </div><!-- end card -->
    </div><!-- end col -->
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card position-relative">
        <div class="card-body">
          <div class="d-flex align-items-center pb-0">
            <div class="me-2">
              <span class="avatar avatar-lg bg-primary-subtle">
                <i class="isax isax-map5 text-primary fs-28"></i>
              </span>
            </div>
            <div>
              <p class="mb-1">Company Locations</p>
              <h6 class="fs-16 fw-semibold">200</h6>
            </div>
          </div>
        </div><!-- end card body -->
      </div><!-- end card -->
    </div><!-- end col -->
  </div>
  <!-- end row -->

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
        <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);"
          data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
          <i class="isax isax-filter me-1"></i>Filter
        </a>
      </div>
      <div class="d-flex align-items-center flex-wrap gap-2">
        <div class="dropdown">
          <a href="javascript:void(0);"
            class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center fw-medium"
            data-bs-toggle="dropdown">
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
          <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center"
            data-bs-toggle="dropdown" data-bs-auto-close="outside">
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

    <!-- Filter Info -->
    <div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
      <h6 class="fs-13 fw-semibold">Filters</h6>
      <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span
          class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Companies
        Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i
            class="fa-solid fa-x fs-10"></i></span></span>
      <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span
          class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Plans
        Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i
            class="fa-solid fa-x fs-10"></i></span></span>
      <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
    </div>
    <!-- /Filter Info -->

  </div>
  <!-- Table Search End -->

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
          <th class="no-sort">Email</th>
          <th class="no-sort">Account URL</th>
          <th mat-sort-header="plan">Plan</th>
          <th mat-sort-header="createdon">Created On</th>
          <th class="no-sort">Status</th>
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
              <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0"
                data-bs-toggle="modal" data-bs-target="#companies_details">
                <img src="assets/img/icons/{{data.Image}}" class="rounded-circle" alt="img">
              </a>
              <div>
                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.Company}}</a></h6>
              </div>
            </div>
          </td>
          <td>{{data.Email}}</td>
          <td>{{data.AccountURL}}</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-0">{{data.Plan}}</p>
              <a href="javascript:void(0);" class="ms-3"><span
                  class="btn btn-sm btn-light p-1 d-inline-flex align-items-center"><i
                    class="isax isax-candle"></i></span></a>
            </div>
          </td>
          <td>{{data.CreatedOn}}</td>
          <td>
            <span href="javascript:void(0);" class="badge badge-sm d-inline-flex align-items-center"
              [ngClass]="data.Status==='Active'?'badge-soft-success':'badge-soft-danger'">
              {{data.Status}}
              <i class="isax ms-1" [ngClass]="data.Status==='Active'?' isax-tick-circle':'isax-close-circle'"></i>
            </span>
          </td>
          <td class="action-item">
            <a href="javascript:void(0);" data-bs-toggle="dropdown">
              <i class="fa-solid fa-ellipsis"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal"
                  data-bs-target="#view_companies"><i class="isax isax-eye me-2"></i>View</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal"
                  data-bs-target="#edit_companies"><i class="isax isax-edit me-2"></i>Edit</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal"
                  data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
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
  <!-- Table List End -->
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
              <label class="form-label">Date Range</label>
              <div class="filter-daterange">
                <app-date-range-picker></app-date-range-picker>
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
                              <a href="javascript:void(0);" class="btn btn-outline-white w-100" id="close-filter1">Cancel</a>
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

<!-- Start Add Modal  -->
<div id="add_companies" class="modal fade">
  <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Add Company</h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
          </div>
          <form>
              <div class="modal-body">
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
                              <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Name<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Email Address<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="mb-3">
                              <label class="form-label">Account URL</label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Phone Number<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Website<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Password</label>
                              <div class="position-relative" id="passwordInput">
                                  <input type="password" class="pass-inputs form-control form-control-lg">
                                  <span class="isax toggle-passwords isax-eye-slash text-gray-7 fs-14"></span>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
                              <div class="position-relative">
                                  <input type="password" class="pass-inputa form-control">
                                  <span class="isax toggle-passworda isax-eye-slash text-gray-7 fs-14"></span>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="mb-3">
                              <label class="form-label">Address</label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Plan<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">Basic</mat-option>
                                  <mat-option value="1">Standard</mat-option>
                                  <mat-option value="1">Business</mat-option>
                                  <mat-option value="1">Enterprise</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Plan Type<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">Monthly</mat-option>
                                  <mat-option value="1">Yearly</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Currencies<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">Dollar</mat-option>
                                  <mat-option value="1">Euro</mat-option>
                                  <mat-option value="1">Pound</mat-option>
                                  <mat-option value="1">Rupees</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Language<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">English</mat-option>
                                  <mat-option value="1">French</mat-option>
                                  <mat-option value="1">German</mat-option>
                                  <mat-option value="1">Arabic</mat-option>
                              </mat-select>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                  <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary">Add New</button>
              </div>
          </form>
      </div>
  </div>
</div>
<!-- End Add Modal  -->

<!-- Start Edit Modal  -->
<div id="edit_companies" class="modal fade">
  <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Edit Company</h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
          </div>
          <form>
              <div class="modal-body">
                  <div class="mb-3">
                      <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
                      <div class="d-flex align-items-center">
                          <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                              <div class="position-relative d-flex align-items-center">
                                  <img src="assets/img/icons/shoes.jpg" class="avatar avatar-xl " alt="User Img">
                                  <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>
                              </div>
                          </div>
                          <div class="d-inline-flex flex-column align-items-start">
                              <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                  <i class="isax isax-image me-1"></i>Upload Image
                                  <input type="file" class="form-control image-sign" multiple="">
                              </div>
                              <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Name<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Email Address<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="mb-3">
                              <label class="form-label">Account URL</label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Phone Number<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Website<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Password</label>
                              <div class="position-relative" id="passwordInput">
                                  <input type="password" class="pass-inputs form-control form-control-lg">
                                  <span class="isax toggle-passwords isax-eye-slash text-gray-7 fs-14"></span>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
                              <div class="position-relative">
                                  <input type="password" class="pass-inputa form-control">
                                  <span class="isax toggle-passworda isax-eye-slash text-gray-7 fs-14"></span>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="mb-3">
                              <label class="form-label">Address</label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Plan<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">Basic</mat-option>
                                  <mat-option value="1">Standard</mat-option>
                                  <mat-option value="1">Business</mat-option>
                                  <mat-option value="1">Enterprise</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Plan Type<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">Monthly</mat-option>
                                  <mat-option value="1">Yearly</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Currencies<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">Dollar</mat-option>
                                  <mat-option value="1">Euro</mat-option>
                                  <mat-option value="1">Pound</mat-option>
                                  <mat-option value="1">Rupees</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Language<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">English</mat-option>
                                  <mat-option value="1">French</mat-option>
                                  <mat-option value="1">German</mat-option>
                                  <mat-option value="1">Arabic</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="d-flex align-items-center justify-content-between">
                              <label class="form-label">Status<span class="text-danger ms-1">*</span></label>
                              <div class="form-check form-switch">
                                  <input class="form-check-input" type="checkbox" role="switch" checked="">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                  <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary">Save Changes</button>
              </div>
          </form>
      </div>
  </div>
</div>
<!-- End Edit Modal  -->

<!-- Start View Companies -->
<div class="modal fade" id="view_companies">
  <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Upgrade Package</h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
          </div>
          <div class="modal-body">
              <div class="bg-transparent-light rounded border mb-3 p-3 mx-1">
                  <div class="row ">
                      <div class="col-md-12">
                          <div class="mb-3">
                              <h6 class="fs-14 fw-semibold">Current Plan Details</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-13">Company Name</span>
                              <h6 class="fs-14 fw-medium mb-0">Trend Hive</h6>
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
                          <div class="">
                              <span class="fs-13">Price</span>
                              <h6 class="fs-14 fw-medium mb-0">$200</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="">
                              <span class="fs-13">Register Date</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Jan 2025</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="">
                              <span class="fs-13">Expiring On</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Feb 2025</h6>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="p-1">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="mb-3">
                              <h6 class="fs-14 fw-bold">Change Plan</h6>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Plan Name<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">Basic</mat-option>
                                  <mat-option value="1">Standard</mat-option>
                                  <mat-option value="1">Business</mat-option>
                                  <mat-option value="1">Enterprise</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Plan Type<span class="text-danger ms-1">*</span></label>
                              <mat-select class="custom-mat-select select" placeholder="Select">
                                  <mat-option value="1">Select</mat-option>
                                  <mat-option value="1">Monthly</mat-option>
                                  <mat-option value="1">Yearly</mat-option>
                              </mat-select>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Amount<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Payment Date </label>
                              <div class="input-group position-relative mb-3">
                                  <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker [bsConfig]="{ adaptivePosition: true }" placeholder="DD-MM-YYYY">
                                  <span class="input-icon-addon fs-16 text-gray-9">
                                      <i class="isax isax-calendar-2"></i>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Next Payment Date </label>
                              <div class="input-group position-relative mb-3">
                                  <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker [bsConfig]="{ adaptivePosition: true }" placeholder="DD-MM-YYYY">
                                  <span class="input-icon-addon fs-16 text-gray-9">
                                      <i class="isax isax-calendar-2"></i>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label class="form-label">Expiring On </label>
                              <div class="input-group position-relative mb-3">
                                  <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker [bsConfig]="{ adaptivePosition: true }" placeholder="DD-MM-YYYY">
                                  <span class="input-icon-addon fs-16 text-gray-9">
                                      <i class="isax isax-calendar-2"></i>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
<!-- End View Companies -->

<!-- Start Companies Detail-->
<div class="modal fade" id="companies_details">
  <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title d-flex align-items-center">
    Company Detail
  </h4>
              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
          </div>
          <form action="#">
              <div class="modal-body pb-0">
                  <div class="border-bottom mb-3">
                      <div class="row">
                          <div class="col-md-12">
                              <div class="mb-3">
                                  <div class="p-3 mb-3 br-5 bg-transparent-light">
                                      <div class="row">
                                          <div class="col-md-12">
                                              <div class="d-flex align-items-center file-name-icon justify-content-between">
                                                  <div class="d-flex align-items-center">
                                                      <a href="javascript:void(0);" class="avatar avatar-xxl bg-white border rounded-2">
                                                          <img src="assets/img/icons/company-01.svg" class="img-fluid h-75" alt="img">
                                                      </a>
                                                      <div class="ms-2">
                                                          <h6 class="fw-bold fs-14 mb-2"><a href="javascript:void(0);">Trend Hive</a></h6>
                                                          <span><i class="isax isax-location me-1"></i>4712 Cherry Ridge Drive Rochester, NY 14620.</span>
                                                      </div>
                                                  </div>
                                                  <div>
                                                      <a href="javascript:void(0);" class="btn btn-outline-white d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_companies">
                                                          <i class="isax isax-edit me-1"></i>Edit Profile
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-12">
                              <div class="mb-3">
                                  <h6 class="fs-14 fw-bold">Basic Info</h6>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="mb-3">
                                  <span class="fs-14">Email Address</span>
                                  <h6 class="fs-14 fw-medium mb-0">trendhive&#64;example.com</h6>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="mb-3">
                                  <span class="fs-14">Phone</span>
                                  <h6 class="fs-14 fw-medium mb-0">Advanced</h6>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="mb-3">
                                  <span class="fs-14">Website</span>
                                  <h6 class="fs-14 fw-medium mb-0">www.example.com</h6>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="mb-3">
                                  <span class="fs-14">Currency</span>
                                  <h6 class="fs-14 fw-medium mb-0">United Stated Dollar (USD)</h6>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="mb-3">
                                  <span class="fs-14">Language</span>
                                  <h6 class="fs-14 fw-medium mb-0">English</h6>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="mb-3">
                                  <p class="fs-14 mb-0">Status</p>
                                  <span class="badge badge-soft-success d-inline-flex align-items-center">Active
                                      <i class="isax isax-tick-circle ms-1"></i>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="mb-3">
                              <h6 class="fs-14 fw-bold">Plan Details</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-14">Plan Name</span>
                              <h6 class="fs-14 fw-medium mb-0">Advanced</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-14">Plan Type</span>
                              <h6 class="fs-14 fw-medium mb-0">Monthly</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-14">Price</span>
                              <h6 class="fs-14 fw-medium mb-0">$200</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-14">Register Date</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Jan 2025</h6>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="mb-3">
                              <span class="fs-14">Expiring On</span>
                              <h6 class="fs-14 fw-medium mb-0">03 Feb 2025</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </div>
  </div>
</div>
<!-- End Companies Details -->

<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
  <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
          <div class="modal-body text-center">
              <div class="mb-3">
                  <img src="assets/img/icons/delete.svg" alt="img">
              </div>
              <h6 class="mb-1">Delete Company</h6>
              <p class="mb-3">Are you sure, you want to delete company?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompaniesComponent, { className: "CompaniesComponent", filePath: "src/app/features/super-admin/companies/companies.component.ts", lineNumber: 22 });
})();
export {
  CompaniesComponent
};
//# sourceMappingURL=chunk-MGTU6H36.js.map
