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
import {
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
  Router,
  RouterLink
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
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/finance/bank-accounts/bank-accounts-type/bank-accounts-type.component.ts
var _c0 = () => ({ standalone: true });
function BankAccountsTypeComponent_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 2)(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275element(9, "i", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 71)(11, "a", 72);
    \u0275\u0275element(12, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 9)(14, "li")(15, "a", 74);
    \u0275\u0275element(16, "i", 75);
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 76);
    \u0275\u0275element(20, "i", 77);
    \u0275\u0275text(21, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.accountType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.createdOn);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r1.status, " ");
  }
}
function BankAccountsTypeComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 78);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function BankAccountsTypeComponent_app_custom_pagination_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var BankAccountsTypeComponent = class _BankAccountsTypeComponent {
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
    this.data.getBankAccountType().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.bankAccountsType) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBankAccountType().subscribe((apiRes) => {
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
  static \u0275fac = function BankAccountsTypeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankAccountsTypeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankAccountsTypeComponent, selectors: [["app-bank-accounts-type"]], decls: 159, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "align-items-center"], [3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2", "fs-14"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu-lg"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], ["mat-sort-header", "date"], [4, "ngIf"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "Salary Account", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Active", 1, "custom-mat-select", "select"], ["value", "1"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "badge", "badge-soft-success", "badge-sm", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle4", "ms-1"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function BankAccountsTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2)(4, "a", 3);
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275text(6, "Bank Accounts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "a", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11, "Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul", 9)(13, "li")(14, "a", 10);
      \u0275\u0275text(15, "Download as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 10);
      \u0275\u0275text(18, "Download as Excel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275element(20, "i", 12);
      \u0275\u0275text(21, "New Account Type ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "a", 18);
      \u0275\u0275element(28, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 20)(30, "label")(31, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function BankAccountsTypeComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BankAccountsTypeComponent_Template_input_ngModelChange_31_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(32, "div", 15)(33, "div", 22)(34, "a", 23);
      \u0275\u0275element(35, "i", 24);
      \u0275\u0275text(36, "Sort By : ");
      \u0275\u0275elementStart(37, "span", 25);
      \u0275\u0275text(38, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "ul", 26)(40, "li")(41, "a", 10);
      \u0275\u0275text(42, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li")(44, "a", 10);
      \u0275\u0275text(45, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 22)(47, "a", 27);
      \u0275\u0275element(48, "i", 28);
      \u0275\u0275text(49, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ul", 29)(51, "li")(52, "label", 30);
      \u0275\u0275element(53, "i", 31)(54, "input", 32);
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56, "Account Type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "li")(58, "label", 30);
      \u0275\u0275element(59, "i", 31)(60, "input", 32);
      \u0275\u0275elementStart(61, "span");
      \u0275\u0275text(62, "Created On");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "li")(64, "label", 30);
      \u0275\u0275element(65, "i", 31)(66, "input", 33);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Status");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(69, "div", 34)(70, "table", 35);
      \u0275\u0275listener("matSortChange", function BankAccountsTypeComponent_Template_table_matSortChange_70_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(71, "thead", 36)(72, "tr")(73, "th", 37);
      \u0275\u0275text(74, "Account Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 38);
      \u0275\u0275text(76, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 37);
      \u0275\u0275text(78, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "th", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "tbody");
      \u0275\u0275repeaterCreate(81, BankAccountsTypeComponent_For_82_Template, 22, 3, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(83, BankAccountsTypeComponent_Conditional_83_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(84, BankAccountsTypeComponent_app_custom_pagination_84_Template, 1, 0, "app-custom-pagination", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 40)(86, "div", 41)(87, "div", 42)(88, "div", 43)(89, "h4", 44);
      \u0275\u0275text(90, "Add New Account Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "button", 45);
      \u0275\u0275element(92, "i", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "form")(94, "div", 47)(95, "div", 48)(96, "div", 49)(97, "div", 13)(98, "label", 50);
      \u0275\u0275text(99, "Account Type");
      \u0275\u0275elementStart(100, "span", 51);
      \u0275\u0275text(101, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(102, "input", 52);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 53)(104, "button", 54);
      \u0275\u0275text(105, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "button", 55);
      \u0275\u0275text(107, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(108, "div", 56)(109, "div", 41)(110, "div", 42)(111, "div", 43)(112, "h4", 44);
      \u0275\u0275text(113, "Edit Account Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "button", 45);
      \u0275\u0275element(115, "i", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "form")(117, "div", 47)(118, "div", 48)(119, "div", 49)(120, "div", 13)(121, "label", 50);
      \u0275\u0275text(122, "Account Type");
      \u0275\u0275elementStart(123, "span", 51);
      \u0275\u0275text(124, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(125, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 58)(127, "div")(128, "label", 50);
      \u0275\u0275text(129, "Status");
      \u0275\u0275elementStart(130, "span", 51);
      \u0275\u0275text(131, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "mat-select", 59)(133, "mat-option", 60);
      \u0275\u0275text(134, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "mat-option", 60);
      \u0275\u0275text(136, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "mat-option", 60);
      \u0275\u0275text(138, "Inactive");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(139, "div", 53)(140, "button", 54);
      \u0275\u0275text(141, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "button", 55);
      \u0275\u0275text(143, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(144, "div", 61)(145, "div", 62)(146, "div", 42)(147, "div", 63)(148, "div", 13);
      \u0275\u0275element(149, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "h6", 65);
      \u0275\u0275text(151, "Delete Bank Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p", 13);
      \u0275\u0275text(153, "Are you sure, you want to delete account type?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 66)(155, "a", 67);
      \u0275\u0275text(156, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "a", 68);
      \u0275\u0275text(158, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.bankAccounts);
      \u0275\u0275advance(27);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(50);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 83 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgIf, MatSliderModule, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankAccountsTypeComponent, [{
    type: Component,
    args: [{ selector: "app-bank-accounts-type", imports: [
      CommonModule,
      MatSliderModule,
      CustomPaginationComponent,
      MatSortModule,
      RouterLink,
      FormsModule,
      MatSelectModule
    ], template: ' <!-- Start Content -->\n <div class="content-two">\n\n    <!-- Start Breadcrumb -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6 class="d-flex align-items-center"><a [routerLink]="routes.bankAccounts"> <i class="isax isax-arrow-left me-2 fs-14"></i>Bank Accounts</a></h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="dropdown me-1">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n                <i class="isax isax-add-circle5 me-1"></i>New Account Type\n            </a>\n        </div>\n    </div>\n    <!-- End Breadcrumb -->\n\n    <!-- Start Table Search -->\n    <div class="mb-3">\n\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                     </div>\n                </div>\n\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                        <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-end">\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                        <i class="isax isax-grid-3 me-1"></i>Column\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-lg">\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Account Type</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Created On</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox">\n                                <span>Status</span>\n                            </label>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n    <!-- End Table Search -->\n\n    <!-- Start Table List -->\n    <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n            <thead class="thead-light">\n                <tr>\n                    <th class="no-sort">Account Type</th>\n                    <th mat-sort-header="date">Created On</th>\n                    <th class="no-sort">Status</th>\n                    <th class="no-sort"></th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td>\n                        {{data.accountType}}\n                    </td>\n                    <td>{{data.createdOn}}</td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">\n                                {{data.status}} <i class="isax isax-tick-circle4 ms-1"></i>\n                            </span>\n                        </div>\n                    </td>\n                    <td class="action-item">\n                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                            <i class="isax isax-more"></i>\n                        </a>\n                        <ul class="dropdown-menu">\n                            <li>\n                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                            </li>\n                            <li>\n                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                            </li>\n                        </ul>\n                    </td>\n                </tr>\n            } @if(tableData.length === 0){\n                <tr>\n                  <td colspan="12" class="text-center text-dark">No matching records found</td>\n                </tr>\n              }\n            </tbody>\n        </table>\n    </div>\n    <!-- End Table List -->\n    <app-custom-pagination *ngIf="row"/>\n</div>\n<!-- End Content -->\n\n\n        <!-- Start Add Modal  -->\n        <div id="add_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add New Account Type</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="row">\n                                <div class="col-md-12">\n                                    <div class="mb-3">\n                                        <label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>\n                                        <input type="text" class="form-control">\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Add Modal -->\n\n        <!-- Start Edit Modal  -->\n        <div id="edit_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit Account Type</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="row">\n                                <div class="col-md-12">\n                                    <div class="mb-3">\n                                        <label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>\n                                        <input type="text" class="form-control" value="Salary Account">\n                                    </div>\n                                </div>\n                                <div class="col-md-6">\n                                    <div>\n                                        <label class="form-label">Status<span class="text-danger ms-1">*</span></label>\n                                        <mat-select class="custom-mat-select select" placeholder="Active">\n                                            <mat-option value="1">Select</mat-option>\n                                            <mat-option value="1">Active</mat-option>\n                                            <mat-option value="1">Inactive</mat-option>\n                                        </mat-select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Modal -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Bank Type</h6>\n                        <p class="mb-3">Are you sure, you want to delete account type?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankAccountsTypeComponent, { className: "BankAccountsTypeComponent", filePath: "src/app/features/finance/bank-accounts/bank-accounts-type/bank-accounts-type.component.ts", lineNumber: 22 });
})();
export {
  BankAccountsTypeComponent
};
//# sourceMappingURL=chunk-ZJH2QB2N.js.map
