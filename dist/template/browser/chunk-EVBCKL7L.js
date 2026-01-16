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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/application/contacts/contacts.component.ts
var _c0 = () => ({ standalone: true });
function ContactsComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 85)(2, "div", 86)(3, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function ContactsComponent_For_67_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 88)(6, "a", 89);
    \u0275\u0275element(7, "img", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 91);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 92);
    \u0275\u0275element(18, "i", 93);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 94)(21, "a", 95);
    \u0275\u0275element(22, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ul", 97)(24, "li")(25, "a", 98);
    \u0275\u0275element(26, "i", 99);
    \u0275\u0275text(27, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "li")(29, "a", 100);
    \u0275\u0275element(30, "i", 101);
    \u0275\u0275text(31, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.role);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.status);
  }
}
function ContactsComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 102);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function ContactsComponent_app_custom_pagination_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var ContactsComponent = class _ContactsComponent {
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
    this.data.getContacts().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.contacts) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getContacts().subscribe((apiRes) => {
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
  static \u0275fac = function ContactsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["app-contacts"]], decls: 222, vars: 6, consts: [[1, "content-two"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set", "mb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "mb-3", "pb-1", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "btn-md", "d-inline-flex", "align-items-center", "fw-medium"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-contact", 1, "btn", "btn-primary", "text-white", "ms-2"], [1, "ti", "ti-circle-plus", "me-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "name"], ["mat-sort-header", "email"], ["mat-sort-header", "phone"], ["mat-sort-header", "role"], ["mat-sort-header", "status"], [4, "ngIf"], ["id", "add-contact", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "new-employee-field"], [1, "profile-pic-upload", "bg-light"], [1, "profile-pic"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "mt-2"], [1, "row"], [1, "col-lg-6", "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-lg-12", "mb-3"], ["type", "email", 1, "form-control"], ["type", "tel", 1, "form-control"], [1, "col-lg-12"], [1, "mb-0"], [1, "text-danger"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-light", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-contact", 1, "modal", "fade"], [1, "profile-pic-upload", "image-field"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/users/user-01.jpg", "alt", "User Img", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], ["type", "text", "value", "Carl", 1, "form-control"], ["type", "text", "value", "Evans", 1, "form-control"], ["type", "email", "value", "carlevans@example.com", 1, "form-control"], ["type", "tel", "value", "+12163547758 ", 1, "form-control"], ["placeholder", "Admin", 1, "custom-mat-select", "select"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "me-2"], ["alt", "product", 1, "rounded-circle", 3, "src"], ["href", "javascript:void(0);"], [1, "d-inline-flex", "align-items-center", "p-1", "pe-2", "rounded-1", "badge", "badge-soft-success", "text-success", "fs-10"], [1, "ti", "ti-point-filled", "me-1", "fs-11"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-contact", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function ContactsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Contacts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "a", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "label")(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ContactsComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ContactsComponent_Template_input_ngModelChange_13_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "a", 13);
      \u0275\u0275text(17, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "ul", 14)(19, "li")(20, "a", 15);
      \u0275\u0275text(21, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 15);
      \u0275\u0275text(24, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "a", 17);
      \u0275\u0275text(27, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "ul", 14)(29, "li")(30, "a", 15);
      \u0275\u0275text(31, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 15);
      \u0275\u0275text(34, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "li")(36, "a", 15);
      \u0275\u0275text(37, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 15);
      \u0275\u0275text(40, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 15);
      \u0275\u0275text(43, "Last 7 Days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "a", 18);
      \u0275\u0275element(45, "i", 19);
      \u0275\u0275text(46, "Add Contact");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 20)(48, "table", 21);
      \u0275\u0275listener("matSortChange", function ContactsComponent_Template_table_matSortChange_48_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(49, "thead", 22)(50, "tr")(51, "th", 23)(52, "div", 24);
      \u0275\u0275listener("click", function ContactsComponent_Template_div_click_52_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(53, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function ContactsComponent_Template_input_ngModelChange_53_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "th", 26);
      \u0275\u0275text(55, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 27);
      \u0275\u0275text(57, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 28);
      \u0275\u0275text(59, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 29);
      \u0275\u0275text(61, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 30);
      \u0275\u0275text(63, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "th", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "tbody");
      \u0275\u0275repeaterCreate(66, ContactsComponent_For_67_Template, 32, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(68, ContactsComponent_Conditional_68_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(69, ContactsComponent_app_custom_pagination_69_Template, 1, 0, "app-custom-pagination", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 32)(71, "div", 33)(72, "div", 34)(73, "div", 35)(74, "div", 36)(75, "h5");
      \u0275\u0275text(76, "Add Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "button", 37);
      \u0275\u0275element(78, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "form")(80, "div", 39)(81, "div", 40)(82, "div", 41)(83, "div", 42)(84, "span");
      \u0275\u0275element(85, "i", 43);
      \u0275\u0275text(86, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 1)(88, "div", 44);
      \u0275\u0275element(89, "input", 45);
      \u0275\u0275elementStart(90, "div", 46)(91, "h4");
      \u0275\u0275text(92, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "p", 47);
      \u0275\u0275text(94, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "div", 48)(96, "div", 49)(97, "label", 50);
      \u0275\u0275text(98, "First Name");
      \u0275\u0275elementStart(99, "span", 51);
      \u0275\u0275text(100, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(101, "input", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 49)(103, "label", 50);
      \u0275\u0275text(104, "Last Name");
      \u0275\u0275elementStart(105, "span", 51);
      \u0275\u0275text(106, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(107, "input", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 53)(109, "label", 50);
      \u0275\u0275text(110, "Email");
      \u0275\u0275elementStart(111, "span", 51);
      \u0275\u0275text(112, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(113, "input", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 53)(115, "label", 50);
      \u0275\u0275text(116, "Phone");
      \u0275\u0275elementStart(117, "span", 51);
      \u0275\u0275text(118, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(119, "input", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 56)(121, "div", 57)(122, "label", 50);
      \u0275\u0275text(123, "Contact Type ");
      \u0275\u0275elementStart(124, "span", 58);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "mat-select", 59)(127, "mat-option", 60);
      \u0275\u0275text(128, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-option", 60);
      \u0275\u0275text(130, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "mat-option", 60);
      \u0275\u0275text(132, "Salesman");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(133, "div", 61)(134, "button", 62);
      \u0275\u0275text(135, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "button", 63);
      \u0275\u0275text(137, "Add Contact");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(138, "div", 64)(139, "div", 33)(140, "div", 34)(141, "div", 35)(142, "div", 36)(143, "h5");
      \u0275\u0275text(144, "Edit Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "button", 37);
      \u0275\u0275element(146, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "form")(148, "div", 39)(149, "div", 40)(150, "div", 65)(151, "div", 66)(152, "div", 67);
      \u0275\u0275element(153, "img", 68);
      \u0275\u0275elementStart(154, "a", 69);
      \u0275\u0275element(155, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(156, "div", 1)(157, "div", 44);
      \u0275\u0275element(158, "input", 45);
      \u0275\u0275elementStart(159, "div", 46)(160, "h4");
      \u0275\u0275text(161, "Change Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "p", 47);
      \u0275\u0275text(163, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(164, "div", 48)(165, "div", 49)(166, "label", 50);
      \u0275\u0275text(167, "First Name");
      \u0275\u0275elementStart(168, "span", 51);
      \u0275\u0275text(169, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(170, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "div", 49)(172, "label", 50);
      \u0275\u0275text(173, "Last Name");
      \u0275\u0275elementStart(174, "span", 51);
      \u0275\u0275text(175, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(176, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 53)(178, "label", 50);
      \u0275\u0275text(179, "Email");
      \u0275\u0275elementStart(180, "span", 51);
      \u0275\u0275text(181, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(182, "input", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "div", 53)(184, "label", 50);
      \u0275\u0275text(185, "Phone");
      \u0275\u0275elementStart(186, "span", 51);
      \u0275\u0275text(187, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(188, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "div", 56)(190, "div", 57)(191, "label", 50);
      \u0275\u0275text(192, "Contact Type ");
      \u0275\u0275elementStart(193, "span", 58);
      \u0275\u0275text(194, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "mat-select", 75)(196, "mat-option", 60);
      \u0275\u0275text(197, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "mat-option", 60);
      \u0275\u0275text(199, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "mat-option", 60);
      \u0275\u0275text(201, "Salesman");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(202, "div", 61)(203, "button", 62);
      \u0275\u0275text(204, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "button", 76);
      \u0275\u0275text(206, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(207, "div", 77)(208, "div", 78)(209, "div", 34)(210, "div", 79)(211, "div", 1);
      \u0275\u0275element(212, "img", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "h6", 81);
      \u0275\u0275text(214, "Delete Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "p", 1);
      \u0275\u0275text(216, "Are you sure, you want to delete ontact?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 82)(218, "a", 83);
      \u0275\u0275text(219, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "a", 84);
      \u0275\u0275text(221, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(40);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 68 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgIf, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactsComponent, [{
    type: Component,
    args: [{ selector: "app-contacts", imports: [CommonModule, MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule], template: '			<!-- Start Content -->\n            <div class="content-two">\n				<div class="mb-3">\n					<h4>Contacts</h4>\n				</div>\n                <div class=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n                    <div class="search-set mb-0">\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="table-search d-flex align-items-center mb-0">\n                                <div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">\n\n                        <div class="dropdown me-2">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                Status\n                            </a>\n                            <ul class="dropdown-menu  dropdown-menu-end p-3">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                                </li>\n\n                            </ul>\n                        </div>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white btn-md d-inline-flex align-items-center fw-medium" data-bs-toggle="dropdown">\n                                Sort By : Last 7 Days\n                            </a>\n                            <ul class="dropdown-menu  dropdown-menu-end p-3">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <a href="javascript:void(0);" class="btn btn-primary text-white ms-2" data-bs-toggle="modal" data-bs-target="#add-contact"><i class="ti ti-circle-plus me-1"></i>Add Contact</a>\n                    </div>\n                </div>\n                <div class="table-responsive">\n                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n                        <thead class="thead-light">\n                            <tr>\n                                <th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n                                <th mat-sort-header="name">Name</th>\n                                <th mat-sort-header="email">Email</th>\n                                <th mat-sort-header="phone">Phone</th>\n                                <th mat-sort-header="role">Role</th>\n                                <th mat-sort-header="status">Status</th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            @for (data of tableData;track data){\n                            <tr>\n                                <td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm me-2">\n                                            <img src="assets/img/users/{{data.img}}" alt="product" class="rounded-circle">\n                                        </a>\n                                        <a href="javascript:void(0);">{{data.name}}</a>\n                                    </div>\n                                </td>\n                                <td>{{data.email}}</td>\n                                <td>{{data.phone}}</td>\n                                <td>{{data.role}}</td>\n                                <td><span class="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10"><i class="ti ti-point-filled me-1 fs-11"></i>{{data.status}}</span></td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="fa-solid fa-ellipsis"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit-contact"><i class="isax isax-eye me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        } @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n                \n                        </tbody>\n                    </table>\n                </div>\n                <app-custom-pagination *ngIf="row"/>\n            </div>\n			<!-- End Content -->\n\n\n\n                    <!-- Start Add Customer -->\n        <div class="modal fade" id="add-contact">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <div class="page-title">\n                            <h5>Add Contact</h5>\n                        </div>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="new-employee-field">\n                                <div class="profile-pic-upload bg-light">\n                                    <div class="profile-pic">\n                                        <span><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>\n                                    </div>\n                                    <div class="mb-3">\n                                        <div class="image-upload mb-0">\n                                            <input type="file">\n                                            <div class="image-uploads">\n                                                <h4>Upload Image</h4>\n                                            </div>\n                                        </div>\n                                        <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-6 mb-3">\n                                    <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                                <div class="col-lg-6 mb-3">\n                                    <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                                <div class="col-lg-12 mb-3">\n                                    <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                                    <input type="email" class="form-control">\n                                </div>\n                                <div class="col-lg-12 mb-3">\n                                    <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n                                    <input type="tel" class="form-control">\n                                </div>\n                                <div class="col-lg-12">\n                                    <div class="mb-0">\n                                        <label class="form-label">Contact Type <span class="text-danger">*</span></label>\n                                        <mat-select class="custom-mat-select select" placeholder="Select">\n                                            <mat-option value="1">Select</mat-option>\n                                            <mat-option value="1">Admin</mat-option>\n                                            <mat-option value="1">Salesman</mat-option>\n                                        </mat-select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="modal-footer">\n                            <button type="button" class="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Contact</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Add Customer -->\n\n        <!-- Start Edit Customer -->\n        <div class="modal fade" id="edit-contact">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <div class="page-title">\n                            <h5>Edit Contact</h5>\n                        </div>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="new-employee-field">\n                                <div class="profile-pic-upload image-field">\n                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                        <div class="position-relative d-flex align-items-center">\n                                            <img src="assets/img/users/user-01.jpg" class="avatar avatar-xl " alt="User Img">\n                                            <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                                        </div>\n                                    </div>\n                                    <div class="mb-3">\n                                        <div class="image-upload mb-0">\n                                            <input type="file">\n                                            <div class="image-uploads">\n                                                <h4>Change Image</h4>\n                                            </div>\n                                        </div>\n                                        <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-6 mb-3">\n                                    <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control" value="Carl">\n                                </div>\n                                <div class="col-lg-6 mb-3">\n                                    <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control" value="Evans">\n                                </div>\n                                <div class="col-lg-12 mb-3">\n                                    <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                                    <input type="email" class="form-control" value="carlevans@example.com">\n                                </div>\n                                <div class="col-lg-12 mb-3">\n                                    <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n                                    <input type="tel" class="form-control" value="+12163547758 ">\n                                </div>\n                                <div class="col-lg-12">\n                                    <div class="mb-0">\n                                        <label class="form-label">Contact Type <span class="text-danger">*</span></label>\n                                        <mat-select class="custom-mat-select select" placeholder="Admin">\n                                            <mat-option value="1">Select</mat-option>\n                                            <mat-option value="1">Admin</mat-option>\n                                            <mat-option value="1">Salesman</mat-option>\n                                        </mat-select>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class="modal-footer">\n                            <button type="button" class="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Customer -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Contact</h6>\n                        <p class="mb-3">Are you sure, you want to delete ontact?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent", filePath: "src/app/features/application/contacts/contacts.component.ts", lineNumber: 19 });
})();
export {
  ContactsComponent
};
//# sourceMappingURL=chunk-EVBCKL7L.js.map
