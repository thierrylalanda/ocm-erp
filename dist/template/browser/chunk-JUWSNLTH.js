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

// src/app/features/manage/tickets/ticket-lists/ticket-lists.component.ts
var _c0 = () => ({ standalone: true });
function TicketListsComponent_For_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 143)(2, "div", 144)(3, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function TicketListsComponent_For_134_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 146);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 3)(11, "a", 147);
    \u0275\u0275element(12, "img", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h6", 149)(15, "a", 150);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "div", 3)(21, "span", 151);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "div", 3)(27, "a", 147);
    \u0275\u0275element(28, "img", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "h6", 149)(31, "a", 150);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "td")(34, "div", 3)(35, "span", 151);
    \u0275\u0275text(36);
    \u0275\u0275element(37, "i", 152);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "td", 153)(39, "a", 154);
    \u0275\u0275element(40, "i", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul", 13)(42, "li")(43, "a", 156);
    \u0275\u0275element(44, "i", 157);
    \u0275\u0275text(45, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "li")(47, "a", 158);
    \u0275\u0275element(48, "i", 159);
    \u0275\u0275text(49, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "li")(51, "a", 160);
    \u0275\u0275element(52, "i", 161);
    \u0275\u0275text(53, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "li")(55, "a", 162);
    \u0275\u0275element(56, "i", 163);
    \u0275\u0275text(57, "Activate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "li")(59, "a", 162);
    \u0275\u0275element(60, "i", 164);
    \u0275\u0275text(61, "Deactivate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r2.routes.ticketDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.ticketId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.subject);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.assigned);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.assignedDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", data_r2.priority === "Low" ? "badge-soft-info" : data_r2.priority === "High" ? "badge-soft-danger" : "badge-soft-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.priority, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img2), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.assignee);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "badge-soft-warning" : data_r2.status === "Closed" ? "badge-soft-danger" : data_r2.status === "Open" ? "badge-soft-info" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "isax-slash" : data_r2.status === "Closed" ? "isax-close-circle" : data_r2.status === "Open" ? "isax-timer" : "isax-tick-circle");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r2.routes.ticketDetails);
  }
}
function TicketListsComponent_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 165);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function TicketListsComponent_app_custom_pagination_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var TicketListsComponent = class _TicketListsComponent {
  data;
  router;
  pagination;
  routes = routes;
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
    this.data.getTicketLists().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.ticketLists) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getTicketLists().subscribe((apiRes) => {
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
  static \u0275fac = function TicketListsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TicketListsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketListsComponent, selectors: [["app-ticket-lists"]], decls: 588, vars: 9, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-primary", "p-2", "d-inline-flex", "align-items-center", "justify-content-center", "me-2", 3, "routerLink"], [1, "isax", "isax-menu-1"], [1, "btn", "btn-outline-white", "p-2", "d-inline-flex", "align-items-center", "justify-content-center", "me-2", 3, "routerLink"], [1, "isax", "isax-grid-25"], [1, "btn", "btn-outline-white", "p-2", "d-inline-flex", "align-items-center", "justify-content-center", "me-1", 3, "routerLink"], [1, "isax", "isax-kanban"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "subject", 1, ""], ["mat-sort-header", "assigned", 1, ""], ["mat-sort-header", "date", 1, ""], ["mat-sort-header", "date1", 1, ""], ["mat-sort-header", "assignee", 1, ""], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], ["id", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-15.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-14.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "badge-dot", "bg-warning", "me-2"], [1, "badge-dot", "bg-info", "me-2"], [1, "badge-dot", "bg-danger", "me-2"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-22.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-09.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "badge-dot", "bg-success", "me-2"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "input-group", "position-relative", "mb-3", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-group", "position-relative", "mb-3", "ngxdate2"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate2", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-md-12"], [1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "Management", 1, "form-control"], ["type", "text", "value", "Joh Carter", 1, "form-control"], [1, "input-group", "position-relative", "mb-3", "ngxdate3"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate3", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-group", "position-relative", "mb-3", "ngxdate4"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate4", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], [1, "input-group", "position-relative", "mb-3", "ngxdate5"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate5", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", "rounded-end"], ["type", "text", "value", "Emma Lewis", 1, "form-control"], ["placeholder", "High", 1, "custom-mat-select", "select"], ["placeholder", "Open", 1, "custom-mat-select", "select"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [3, "routerLink"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "badge", "badge-sm", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-notification", "me-2"], [1, "isax", "isax-notification-bing", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function TicketListsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Tickets List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275text(16, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ul", 13)(18, "li")(19, "a", 14);
      \u0275\u0275text(20, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 14);
      \u0275\u0275text(23, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div")(25, "a", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, "New Tickets ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "a", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 24)(36, "label")(37, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function TicketListsComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TicketListsComponent_Template_input_ngModelChange_37_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "a", 26);
      \u0275\u0275element(39, "i", 27);
      \u0275\u0275text(40, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 19)(42, "div", 28)(43, "a", 29);
      \u0275\u0275element(44, "i", 30);
      \u0275\u0275text(45, "Sort By : ");
      \u0275\u0275elementStart(46, "span", 31);
      \u0275\u0275text(47, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "ul", 32)(49, "li")(50, "a", 14);
      \u0275\u0275text(51, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 14);
      \u0275\u0275text(54, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 28)(56, "a", 33);
      \u0275\u0275element(57, "i", 34);
      \u0275\u0275text(58, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "ul", 35)(60, "li")(61, "label", 36);
      \u0275\u0275element(62, "i", 37)(63, "input", 38);
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "li")(67, "label", 36);
      \u0275\u0275element(68, "i", 37)(69, "input", 38);
      \u0275\u0275elementStart(70, "span");
      \u0275\u0275text(71, "Plan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "li")(73, "label", 36);
      \u0275\u0275element(74, "i", 37)(75, "input", 38);
      \u0275\u0275elementStart(76, "span");
      \u0275\u0275text(77, "Billing Cycle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "li")(79, "label", 36);
      \u0275\u0275element(80, "i", 37)(81, "input", 39);
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "Payment Mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "li")(85, "label", 36);
      \u0275\u0275element(86, "i", 37)(87, "input", 38);
      \u0275\u0275elementStart(88, "span");
      \u0275\u0275text(89, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "li")(91, "label", 36);
      \u0275\u0275element(92, "i", 37)(93, "input", 38);
      \u0275\u0275elementStart(94, "span");
      \u0275\u0275text(95, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "li")(97, "label", 36);
      \u0275\u0275element(98, "i", 37)(99, "input", 38);
      \u0275\u0275elementStart(100, "span");
      \u0275\u0275text(101, "Expiring Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "li")(103, "label", 36);
      \u0275\u0275element(104, "i", 37)(105, "input", 38);
      \u0275\u0275elementStart(106, "span");
      \u0275\u0275text(107, "Status");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(108, "div", 40)(109, "table", 41);
      \u0275\u0275listener("matSortChange", function TicketListsComponent_Template_table_matSortChange_109_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(110, "thead", 42)(111, "tr")(112, "th", 43)(113, "div", 44);
      \u0275\u0275listener("click", function TicketListsComponent_Template_div_click_113_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(114, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function TicketListsComponent_Template_input_ngModelChange_114_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "th", 43);
      \u0275\u0275text(116, "Ticket ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 46);
      \u0275\u0275text(118, "Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th", 47);
      \u0275\u0275text(120, "Assigned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 48);
      \u0275\u0275text(122, "Assigned Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 43);
      \u0275\u0275text(124, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th", 49);
      \u0275\u0275text(126, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 50);
      \u0275\u0275text(128, "Assignee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 43);
      \u0275\u0275text(130, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(131, "th", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "tbody");
      \u0275\u0275repeaterCreate(133, TicketListsComponent_For_134_Template, 62, 18, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(135, TicketListsComponent_Conditional_135_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(136, TicketListsComponent_app_custom_pagination_136_Template, 1, 0, "app-custom-pagination", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 52)(138, "div", 53)(139, "div", 54)(140, "h6", 55);
      \u0275\u0275text(141, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "button", 56);
      \u0275\u0275element(143, "i", 57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "div", 58)(145, "form", 59)(146, "div", 17)(147, "label", 60);
      \u0275\u0275text(148, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 61);
      \u0275\u0275element(150, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 17)(152, "label", 62);
      \u0275\u0275text(153, "Assigned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 28)(155, "a", 63);
      \u0275\u0275text(156, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 64)(158, "div", 17)(159, "div", 61);
      \u0275\u0275element(160, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "ul", 17)(162, "li", 65)(163, "label", 66);
      \u0275\u0275element(164, "input", 67);
      \u0275\u0275text(165, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "a", 68);
      \u0275\u0275text(167, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "li")(169, "label", 69);
      \u0275\u0275element(170, "input", 39);
      \u0275\u0275elementStart(171, "span", 70);
      \u0275\u0275element(172, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(173, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "li")(175, "label", 69);
      \u0275\u0275element(176, "input", 39);
      \u0275\u0275elementStart(177, "span", 70);
      \u0275\u0275element(178, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(179, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "li")(181, "label", 69);
      \u0275\u0275element(182, "input", 39);
      \u0275\u0275elementStart(183, "span", 70);
      \u0275\u0275element(184, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(185, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "li")(187, "label", 69);
      \u0275\u0275element(188, "input", 39);
      \u0275\u0275elementStart(189, "span", 70);
      \u0275\u0275element(190, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(191, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "li")(193, "label", 69);
      \u0275\u0275element(194, "input", 39);
      \u0275\u0275elementStart(195, "span", 70);
      \u0275\u0275element(196, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(197, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "li")(199, "label", 69);
      \u0275\u0275element(200, "input", 39);
      \u0275\u0275elementStart(201, "span", 70);
      \u0275\u0275element(202, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(203, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "div", 76)(205, "div", 77)(206, "a", 78);
      \u0275\u0275text(207, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "div", 77)(209, "a", 79);
      \u0275\u0275text(210, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(211, "div", 17)(212, "label", 62);
      \u0275\u0275text(213, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "div", 28)(215, "a", 63);
      \u0275\u0275text(216, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 64)(218, "div", 17)(219, "div", 80)(220, "span", 81);
      \u0275\u0275element(221, "i", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275element(222, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "ul", 17)(224, "li", 65)(225, "label", 66);
      \u0275\u0275element(226, "input", 67);
      \u0275\u0275text(227, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "a", 68);
      \u0275\u0275text(229, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li")(231, "label", 69);
      \u0275\u0275element(232, "input", 39)(233, "span", 84);
      \u0275\u0275text(234, "Medium ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "li")(236, "label", 69);
      \u0275\u0275element(237, "input", 39)(238, "span", 85);
      \u0275\u0275text(239, "Low ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "li")(241, "label", 69);
      \u0275\u0275element(242, "input", 39)(243, "span", 86);
      \u0275\u0275text(244, "High ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(245, "div", 76)(246, "div", 77)(247, "a", 78);
      \u0275\u0275text(248, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "div", 77)(250, "a", 79);
      \u0275\u0275text(251, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(252, "div", 17)(253, "label", 62);
      \u0275\u0275text(254, "Assignee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 28)(256, "a", 63);
      \u0275\u0275text(257, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div", 64)(259, "div", 17)(260, "div", 80)(261, "span", 81);
      \u0275\u0275element(262, "i", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275element(263, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "ul", 17)(265, "li", 65)(266, "label", 66);
      \u0275\u0275element(267, "input", 67);
      \u0275\u0275text(268, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "a", 68);
      \u0275\u0275text(270, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "li")(272, "label", 69);
      \u0275\u0275element(273, "input", 39);
      \u0275\u0275elementStart(274, "span", 70);
      \u0275\u0275element(275, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275text(276, "Sarah Michelle ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "li")(278, "label", 69);
      \u0275\u0275element(279, "input", 39);
      \u0275\u0275elementStart(280, "span", 70);
      \u0275\u0275element(281, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275text(282, "Daniel Patrick ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "li")(284, "label", 69);
      \u0275\u0275element(285, "input", 39);
      \u0275\u0275elementStart(286, "span", 70);
      \u0275\u0275element(287, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(288, "Emily Lauren ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "li")(290, "label", 69);
      \u0275\u0275element(291, "input", 39);
      \u0275\u0275elementStart(292, "span", 70);
      \u0275\u0275element(293, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(294, "Braun Kelton ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "li")(296, "label", 69);
      \u0275\u0275element(297, "input", 39);
      \u0275\u0275elementStart(298, "span", 70);
      \u0275\u0275element(299, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275text(300, "Jessica Renee ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "li")(302, "label", 69);
      \u0275\u0275element(303, "input", 39);
      \u0275\u0275elementStart(304, "span", 70);
      \u0275\u0275element(305, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275text(306, "Ryan Christopher ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(307, "div", 76)(308, "div", 77)(309, "a", 78);
      \u0275\u0275text(310, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "div", 77)(312, "a", 79);
      \u0275\u0275text(313, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(314, "div", 17)(315, "label", 62);
      \u0275\u0275text(316, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "div", 28)(318, "a", 63);
      \u0275\u0275text(319, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 64)(321, "div", 17)(322, "div", 80)(323, "span", 81);
      \u0275\u0275element(324, "i", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275element(325, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "ul", 17)(327, "li", 65)(328, "label", 66);
      \u0275\u0275element(329, "input", 67);
      \u0275\u0275text(330, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "a", 68);
      \u0275\u0275text(332, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "li")(334, "label", 69);
      \u0275\u0275element(335, "input", 39)(336, "span", 93);
      \u0275\u0275text(337, "Resolved ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(338, "li")(339, "label", 69);
      \u0275\u0275element(340, "input", 39)(341, "span", 86);
      \u0275\u0275text(342, "Closed ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "li")(344, "label", 69);
      \u0275\u0275element(345, "input", 39)(346, "span", 85);
      \u0275\u0275text(347, "Open ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "li")(349, "label", 69);
      \u0275\u0275element(350, "input", 39)(351, "span", 84);
      \u0275\u0275text(352, "Pending ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(353, "div", 76)(354, "div", 77)(355, "a", 78);
      \u0275\u0275text(356, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "div", 77)(358, "a", 79);
      \u0275\u0275text(359, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(360, "div", 94)(361, "div", 76)(362, "div", 77)(363, "a", 95);
      \u0275\u0275text(364, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "div", 77)(366, "button", 96);
      \u0275\u0275text(367, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(368, "div", 97)(369, "div", 98)(370, "div", 99)(371, "div", 100)(372, "h4", 101);
      \u0275\u0275text(373, "Add New Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "button", 102);
      \u0275\u0275element(375, "i", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "form")(377, "div", 103)(378, "div", 104)(379, "div", 105)(380, "div", 17)(381, "label", 62);
      \u0275\u0275text(382, "Subject");
      \u0275\u0275elementStart(383, "span", 106);
      \u0275\u0275text(384, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(385, "input", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "div", 105)(387, "div", 17)(388, "label", 62);
      \u0275\u0275text(389, "Assigned Name");
      \u0275\u0275elementStart(390, "span", 106);
      \u0275\u0275text(391, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(392, "input", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(393, "div", 105)(394, "div", 17)(395, "label", 60);
      \u0275\u0275text(396, "Assigned Date");
      \u0275\u0275elementStart(397, "span", 106);
      \u0275\u0275text(398, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(399, "div", 108);
      \u0275\u0275element(400, "input", 109);
      \u0275\u0275elementStart(401, "span", 110);
      \u0275\u0275element(402, "i", 111);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(403, "div", 105)(404, "div", 17)(405, "label", 60);
      \u0275\u0275text(406, "Created Date");
      \u0275\u0275elementStart(407, "span", 106);
      \u0275\u0275text(408, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(409, "div", 112);
      \u0275\u0275element(410, "input", 113);
      \u0275\u0275elementStart(411, "span", 110);
      \u0275\u0275element(412, "i", 111);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(413, "div", 105)(414, "div", 17)(415, "label", 60);
      \u0275\u0275text(416, "Due Date");
      \u0275\u0275elementStart(417, "span", 106);
      \u0275\u0275text(418, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "div", 114);
      \u0275\u0275element(420, "input", 115);
      \u0275\u0275elementStart(421, "span", 110);
      \u0275\u0275element(422, "i", 111);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(423, "div", 105)(424, "div", 17)(425, "label", 62);
      \u0275\u0275text(426, "Assignee Name");
      \u0275\u0275elementStart(427, "span", 106);
      \u0275\u0275text(428, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(429, "input", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(430, "div", 105)(431, "div", 17)(432, "label", 62);
      \u0275\u0275text(433, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "mat-select", 116)(435, "mat-option", 117);
      \u0275\u0275text(436, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "mat-option", 117);
      \u0275\u0275text(438, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "mat-option", 117);
      \u0275\u0275text(440, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(441, "mat-option", 117);
      \u0275\u0275text(442, "High");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(443, "div", 105)(444, "div", 17)(445, "label", 62);
      \u0275\u0275text(446, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "mat-select", 116)(448, "mat-option", 117);
      \u0275\u0275text(449, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "mat-option", 117);
      \u0275\u0275text(451, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "mat-option", 117);
      \u0275\u0275text(453, "Closed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "mat-option", 117);
      \u0275\u0275text(455, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "mat-option", 117);
      \u0275\u0275text(457, "Pending");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(458, "div", 118)(459, "div")(460, "label", 62);
      \u0275\u0275text(461, "Content");
      \u0275\u0275elementStart(462, "span", 106);
      \u0275\u0275text(463, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(464, "textarea", 119);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(465, "div", 120)(466, "button", 121);
      \u0275\u0275text(467, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "button", 122);
      \u0275\u0275text(469, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(470, "div", 123)(471, "div", 98)(472, "div", 99)(473, "div", 100)(474, "h4", 101);
      \u0275\u0275text(475, "Edit Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "button", 102);
      \u0275\u0275element(477, "i", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(478, "form")(479, "div", 103)(480, "div", 104)(481, "div", 105)(482, "div", 17)(483, "label", 62);
      \u0275\u0275text(484, "Subject");
      \u0275\u0275elementStart(485, "span", 106);
      \u0275\u0275text(486, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(487, "input", 124);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(488, "div", 105)(489, "div", 17)(490, "label", 62);
      \u0275\u0275text(491, "Assigned Name");
      \u0275\u0275elementStart(492, "span", 106);
      \u0275\u0275text(493, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(494, "input", 125);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(495, "div", 105)(496, "div", 17)(497, "label", 60);
      \u0275\u0275text(498, "Assigned Date");
      \u0275\u0275elementStart(499, "span", 106);
      \u0275\u0275text(500, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "div", 126);
      \u0275\u0275element(502, "input", 127);
      \u0275\u0275elementStart(503, "span", 110);
      \u0275\u0275element(504, "i", 111);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(505, "div", 105)(506, "div", 17)(507, "label", 60);
      \u0275\u0275text(508, "Created Date");
      \u0275\u0275elementStart(509, "span", 106);
      \u0275\u0275text(510, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(511, "div", 128);
      \u0275\u0275element(512, "input", 129);
      \u0275\u0275elementStart(513, "span", 110);
      \u0275\u0275element(514, "i", 111);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(515, "div", 105)(516, "div", 17)(517, "label", 60);
      \u0275\u0275text(518, "Due Date");
      \u0275\u0275elementStart(519, "span", 106);
      \u0275\u0275text(520, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(521, "div", 130);
      \u0275\u0275element(522, "input", 131);
      \u0275\u0275elementStart(523, "span", 110);
      \u0275\u0275element(524, "i", 111);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(525, "div", 105)(526, "div", 17)(527, "label", 62);
      \u0275\u0275text(528, "Assignee Name");
      \u0275\u0275elementStart(529, "span", 106);
      \u0275\u0275text(530, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(531, "input", 132);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(532, "div", 105)(533, "div", 17)(534, "label", 62);
      \u0275\u0275text(535, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "mat-select", 133)(537, "mat-option", 117);
      \u0275\u0275text(538, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "mat-option", 117);
      \u0275\u0275text(540, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "mat-option", 117);
      \u0275\u0275text(542, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "mat-option", 117);
      \u0275\u0275text(544, "High");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(545, "div", 105)(546, "div", 17)(547, "label", 62);
      \u0275\u0275text(548, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "mat-select", 134)(550, "mat-option", 117);
      \u0275\u0275text(551, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "mat-option", 117);
      \u0275\u0275text(553, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "mat-option", 117);
      \u0275\u0275text(555, "Closed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "mat-option", 117);
      \u0275\u0275text(557, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(558, "mat-option", 117);
      \u0275\u0275text(559, "Pending");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(560, "div", 118)(561, "div")(562, "label", 62);
      \u0275\u0275text(563, "Content");
      \u0275\u0275elementStart(564, "span", 106);
      \u0275\u0275text(565, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(566, "textarea", 119);
      \u0275\u0275text(567, "Need help? Submit a support ticket, and our team will assist you quickly. Provide your name, email, issue category, and a detailed description of the problem. Choose a priority level and attach relevant files if needed.\n                                        ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(568, "div", 120)(569, "button", 121);
      \u0275\u0275text(570, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(571, "button", 122);
      \u0275\u0275text(572, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(573, "div", 135)(574, "div", 136)(575, "div", 99)(576, "div", 137)(577, "div", 17);
      \u0275\u0275element(578, "img", 138);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(579, "h6", 139);
      \u0275\u0275text(580, "Delete Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(581, "p", 17);
      \u0275\u0275text(582, "Are you sure, you want to delete Ticket?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "div", 140)(584, "a", 141);
      \u0275\u0275text(585, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "a", 142);
      \u0275\u0275text(587, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.ticketLists);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.ticketList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.ticketKanban);
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(77);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 135 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, CustomPaginationComponent, RouterLink, CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketListsComponent, [{
    type: Component,
    args: [{ selector: "app-ticket-lists", imports: [MatSelectModule, DateRangePickerComponent, CustomPaginationComponent, RouterLink, CommonModule, FormsModule, MatSortModule, BsDatepickerModule], template: `            <!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Tickets List</h6>
                    </div>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <a [routerLink]="routes.ticketLists" class="btn btn-primary p-2 d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-menu-1"></i></a>
                            <a [routerLink]="routes.ticketList" class="btn btn-outline-white p-2 d-inline-flex align-items-center justify-content-center me-2"><i class="isax isax-grid-25"></i></a>
                            <a [routerLink]="routes.ticketKanban" class="btn btn-outline-white p-2 d-inline-flex align-items-center justify-content-center me-1"><i class="isax isax-kanban"></i></a>
                        </div>
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
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                <i class="isax isax-add-circle5 me-1"></i>New Tickets

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
                                            <span>Plan</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item d-flex align-items-center form-switch">
                                            <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Billing Cycle</span>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <span>Amount</span>
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
                                            <span>Expiring Date</span>
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
                                <th class="no-sort">Ticket ID</th>
                                <th class="" mat-sort-header="subject">Subject</th>
                                <th class="" mat-sort-header="assigned">Assigned</th>
                                <th class="" mat-sort-header="date">Assigned Date</th>
                                <th class="no-sort">Priority</th>
                                <th class="" mat-sort-header="date1">Created On</th>
                                <th class="" mat-sort-header="assignee">Assignee</th>
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
                                <td><a [routerLink]="routes.ticketDetails">{{data.ticketId}}</a></td>
                                <td>{{data.subject}}</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                            <img src="assets/img/{{data.img}}" class="rounded-circle" alt="img">
                                        </a>
                                        <div>
                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.assigned}}</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td>{{data.assignedDate}}</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <span class="badge badge-sm" [ngClass]="data.priority==='Low'?'badge-soft-info':data.priority==='High'?'badge-soft-danger':'badge-soft-warning'">
                                            {{data.priority}}
										</span>
                                    </div>
                                </td>
                                <td>{{data.createdOn}}</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                            <img src="assets/img/users/{{data.img2}}" class="rounded-circle" alt="img">
                                        </a>
                                        <div>
                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.assignee}}</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <span class="badge badge-sm" [ngClass]="data.status==='Pending'?'badge-soft-warning':data.status==='Closed'?'badge-soft-danger':data.status==='Open'?'badge-soft-info':'badge-soft-success'">
                                            {{data.status}}<i class="isax  ms-1"
                                            [ngClass]="data.status==='Pending'?'isax-slash':data.status==='Closed'?'isax-close-circle':data.status==='Open'?'isax-timer':'isax-tick-circle'"></i>
										</span>
                                    </div>
                                </td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a [routerLink]="routes.ticketDetails" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-notification me-2"></i>Activate</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-notification-bing me-2"></i>Deactivate</a>
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
                <!-- Table List End -->
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
                        <label id="dateRangePicker" class="form-label">Date Range</label>
                        <div class="filter-daterange">
                            <app-date-range-picker></app-date-range-picker>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Assigned</label>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <div class="mb-3">
                                    <div class="filter-daterange">
                                        <app-date-range-picker></app-date-range-picker>
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
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-15.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-14.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Harris
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>David Anderson
                                        </label>
                                    </li>
                                </ul>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Cancel</a>
                                    </div>
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Priority</label>
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
                                            <span class="badge-dot bg-warning me-2"></span>Medium
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="badge-dot bg-info me-2"></span>Low
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="badge-dot bg-danger me-2"></span>High
                                        </label>
                                    </li>
                                </ul>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Cancel</a>
                                    </div>
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Assignee</label>
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
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sarah Michelle
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Daniel Patrick
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-22.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Lauren
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Braun Kelton
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-05.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Jessica Renee
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-09.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Ryan Christopher
                                        </label>
                                    </li>
                                </ul>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Cancel</a>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="badge-dot bg-success me-2"></span>Resolved
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="badge-dot bg-danger me-2"></span>Closed
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="badge-dot bg-info me-2"></span>Open
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="badge-dot bg-warning me-2"></span>Pending
                                        </label>
                                    </li>
                                </ul>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Cancel</a>
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
                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Filter -->

        <!-- Add Modal Start -->
        <div id="add_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Ticket</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Subject<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assigned Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Assigned Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Created Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate1">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate1" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Due Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate2">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate2" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assignee Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                            <mat-option value="1">High</mat-option>

                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Resolved</mat-option>
                                            <mat-option value="1">Closed</mat-option>
                                            <mat-option value="1">Open</mat-option>
                                            <mat-option value="1">Pending</mat-option>
                                        </mat-select>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Content<span class="text-danger ms-1">*</span></label>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Add Modal End -->

        <!-- Edit Modal Start -->
        <div id="edit_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Ticket</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Subject<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control" value="Management">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assigned Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control" value="Joh Carter">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Assigned Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate3">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate3" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Created Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate4">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate4" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label id="dateRangePicker" class="form-label">Due Date<span class="text-danger ms-1">*</span></label>
                                        <div class="input-group position-relative mb-3 ngxdate5">
                                            <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate5" placeholder="dd/mm/yyyy">
                                            <span class="input-icon-addon fs-16 text-gray-9">
                                                <i class="isax isax-calendar-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Assignee Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control" value="Emma Lewis">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority</label>
                                        <mat-select class="custom-mat-select select" placeholder="High">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                            <mat-option value="1">High</mat-option>

                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <mat-select class="custom-mat-select select" placeholder="Open">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Resolved</mat-option>
                                            <mat-option value="1">Closed</mat-option>
                                            <mat-option value="1">Open</mat-option>
                                            <mat-option value="1">Pending</mat-option>
                                        </mat-select>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Content<span class="text-danger ms-1">*</span></label>
                                    <textarea class="form-control">Need help? Submit a support ticket, and our team will assist you quickly. Provide your name, email, issue category, and a detailed description of the problem. Choose a priority level and attach relevant files if needed.
                                        </textarea>
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
        <!-- Edit Modal End -->

        <!-- Delete Modal Start -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Ticket</h6>
                        <p class="mb-3">Are you sure, you want to delete Ticket?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketListsComponent, { className: "TicketListsComponent", filePath: "src/app/features/manage/tickets/ticket-lists/ticket-lists.component.ts", lineNumber: 21 });
})();
export {
  TicketListsComponent
};
//# sourceMappingURL=chunk-JUWSNLTH.js.map
