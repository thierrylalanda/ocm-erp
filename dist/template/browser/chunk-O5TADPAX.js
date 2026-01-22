import {
  NgxEditorModule
} from "./chunk-T6JEQ3C5.js";
import {
  CustomPaginationComponent
} from "./chunk-53DCEYLO.js";
import {
  MatSort,
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
  Router
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
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/content/location/states/states.component.ts
var _c0 = () => ({ standalone: true });
function StatesComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 96)(2, "div", 97)(3, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_For_64_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 99)(8, "a", 100);
    \u0275\u0275element(9, "img", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "h6", 102)(12, "a", 103);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 104)(17, "a", 105);
    \u0275\u0275element(18, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 6)(20, "li")(21, "a", 107);
    \u0275\u0275element(22, "i", 108);
    \u0275\u0275text(23, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "a", 109);
    \u0275\u0275element(26, "i", 110);
    \u0275\u0275text(27, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.countryCode);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/flags/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.state);
  }
}
function StatesComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function StatesComponent_app_custom_pagination_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var StatesComponent = class _StatesComponent {
  data;
  router;
  pagination;
  routes = routes;
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
    this.data.getstates().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.states) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getstates().subscribe((apiRes) => {
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
  static \u0275fac = function StatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatesComponent, selectors: [["app-states"]], decls: 479, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "avatar", "avatar-xs", "me-2"], ["src", "assets/img/flags/us.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/ca.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/de.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/fr.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/ar.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/in.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/it.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/au.png", "alt", "img", 1, "flex-shrink-0"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "text-danger"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-0"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-xs", "me-2", "flex-shrink-0"], ["alt", "img", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function StatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "State");
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
      \u0275\u0275text(20, "New State ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StatesComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(48, "div", 26)(49, "table", 27);
      \u0275\u0275listener("matSortChange", function StatesComponent_Template_table_matSortChange_49_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(50, "thead", 28)(51, "tr")(52, "th", 29)(53, "div", 30);
      \u0275\u0275listener("click", function StatesComponent_Template_div_click_53_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(54, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "th", 29);
      \u0275\u0275text(56, "Country Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 29);
      \u0275\u0275text(58, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 29);
      \u0275\u0275text(60, "State ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "th", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "tbody");
      \u0275\u0275repeaterCreate(63, StatesComponent_For_64_Template, 28, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(65, StatesComponent_Conditional_65_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(66, StatesComponent_app_custom_pagination_66_Template, 1, 0, "app-custom-pagination", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 33)(68, "div", 34)(69, "div", 35)(70, "h6", 36);
      \u0275\u0275text(71, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 37);
      \u0275\u0275element(73, "i", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 39)(75, "form", 40)(76, "div", 10)(77, "label", 41);
      \u0275\u0275text(78, "Country Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 42)(80, "a", 43);
      \u0275\u0275text(81, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 44)(83, "div", 10)(84, "div", 45)(85, "span", 46);
      \u0275\u0275element(86, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275element(87, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "ul", 10)(89, "li", 49)(90, "label", 50);
      \u0275\u0275element(91, "input", 51);
      \u0275\u0275text(92, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "a", 52);
      \u0275\u0275text(94, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "li")(96, "label", 53);
      \u0275\u0275element(97, "input", 54);
      \u0275\u0275text(98, " US ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li")(100, "label", 53);
      \u0275\u0275element(101, "input", 54);
      \u0275\u0275text(102, " DE ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "label", 53);
      \u0275\u0275element(105, "input", 54);
      \u0275\u0275text(106, " IN ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "li")(108, "label", 53);
      \u0275\u0275element(109, "input", 54);
      \u0275\u0275text(110, " AU ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "label", 53);
      \u0275\u0275element(113, "input", 54);
      \u0275\u0275text(114, " BR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "li")(116, "label", 53);
      \u0275\u0275element(117, "input", 54);
      \u0275\u0275text(118, " CN ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "li")(120, "label", 53);
      \u0275\u0275element(121, "input", 54);
      \u0275\u0275text(122, " AR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "li")(124, "label", 53);
      \u0275\u0275element(125, "input", 54);
      \u0275\u0275text(126, " RU ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "li")(128, "label", 53);
      \u0275\u0275element(129, "input", 54);
      \u0275\u0275text(130, " CA ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "li")(132, "label", 53);
      \u0275\u0275element(133, "input", 54);
      \u0275\u0275text(134, " IT ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "div", 55)(136, "div", 56)(137, "a", 57);
      \u0275\u0275text(138, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 56)(140, "a", 58);
      \u0275\u0275text(141, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(142, "div", 10)(143, "label", 41);
      \u0275\u0275text(144, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "div", 42)(146, "a", 43);
      \u0275\u0275text(147, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 44)(149, "div", 10)(150, "div", 45)(151, "span", 46);
      \u0275\u0275element(152, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275element(153, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "ul", 10)(155, "li", 49)(156, "label", 50);
      \u0275\u0275element(157, "input", 51);
      \u0275\u0275text(158, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "a", 52);
      \u0275\u0275text(160, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "li")(162, "label", 53);
      \u0275\u0275element(163, "input", 54);
      \u0275\u0275elementStart(164, "span", 59);
      \u0275\u0275element(165, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, "United States ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "li")(168, "label", 53);
      \u0275\u0275element(169, "input", 54);
      \u0275\u0275elementStart(170, "span", 59);
      \u0275\u0275element(171, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275text(172, "Canada ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "li")(174, "label", 53);
      \u0275\u0275element(175, "input", 54);
      \u0275\u0275elementStart(176, "span", 59);
      \u0275\u0275element(177, "img", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275text(178, "Germany ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "li")(180, "label", 53);
      \u0275\u0275element(181, "input", 54);
      \u0275\u0275elementStart(182, "span", 59);
      \u0275\u0275element(183, "img", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275text(184, "France ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "li")(186, "label", 53);
      \u0275\u0275element(187, "input", 54);
      \u0275\u0275elementStart(188, "span", 59);
      \u0275\u0275element(189, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275text(190, "Argentina ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "li")(192, "label", 53);
      \u0275\u0275element(193, "input", 54);
      \u0275\u0275elementStart(194, "span", 59);
      \u0275\u0275element(195, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275text(196, "India ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "li")(198, "label", 53);
      \u0275\u0275element(199, "input", 54);
      \u0275\u0275elementStart(200, "span", 59);
      \u0275\u0275element(201, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275text(202, "Italy ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "li")(204, "label", 53);
      \u0275\u0275element(205, "input", 54);
      \u0275\u0275elementStart(206, "span", 59);
      \u0275\u0275element(207, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275text(208, "Australia ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "div", 55)(210, "div", 56)(211, "a", 57);
      \u0275\u0275text(212, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "div", 56)(214, "a", 58);
      \u0275\u0275text(215, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(216, "div", 10)(217, "label", 41);
      \u0275\u0275text(218, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "div", 42)(220, "a", 43);
      \u0275\u0275text(221, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "div", 44)(223, "div", 10)(224, "div", 45)(225, "span", 46);
      \u0275\u0275element(226, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275element(227, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "ul", 10)(229, "li", 49)(230, "label", 50);
      \u0275\u0275element(231, "input", 51);
      \u0275\u0275text(232, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "a", 52);
      \u0275\u0275text(234, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "li")(236, "label", 53);
      \u0275\u0275element(237, "input", 54);
      \u0275\u0275text(238, " California ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li")(240, "label", 53);
      \u0275\u0275element(241, "input", 54);
      \u0275\u0275text(242, " Ontario ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "li")(244, "label", 53);
      \u0275\u0275element(245, "input", 54);
      \u0275\u0275text(246, " England ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "li")(248, "label", 53);
      \u0275\u0275element(249, "input", 54);
      \u0275\u0275text(250, " Bavaria ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "li")(252, "label", 53);
      \u0275\u0275element(253, "input", 54);
      \u0275\u0275text(254, " Le-de-France ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "li")(256, "label", 53);
      \u0275\u0275element(257, "input", 54);
      \u0275\u0275text(258, " Buenos Aires ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "li")(260, "label", 53);
      \u0275\u0275element(261, "input", 54);
      \u0275\u0275text(262, " Maharashtra ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "li")(264, "label", 53);
      \u0275\u0275element(265, "input", 54);
      \u0275\u0275text(266, " Lombardy ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "li")(268, "label", 53);
      \u0275\u0275element(269, "input", 54);
      \u0275\u0275text(270, " Wellington ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "li")(272, "label", 53);
      \u0275\u0275element(273, "input", 54);
      \u0275\u0275text(274, " New South Wales ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(275, "div", 55)(276, "div", 56)(277, "a", 57);
      \u0275\u0275text(278, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div", 56)(280, "a", 58);
      \u0275\u0275text(281, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(282, "div", 68)(283, "div", 55)(284, "div", 56)(285, "a", 69);
      \u0275\u0275text(286, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 56)(288, "button", 70);
      \u0275\u0275text(289, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(290, "div", 71)(291, "div", 72)(292, "div", 73)(293, "div", 74)(294, "h4", 75);
      \u0275\u0275text(295, "Add New State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "button", 76);
      \u0275\u0275element(297, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "form")(299, "div", 77)(300, "div", 78)(301, "div", 79)(302, "div", 10)(303, "label", 41);
      \u0275\u0275text(304, "Country Code ");
      \u0275\u0275elementStart(305, "span", 80);
      \u0275\u0275text(306, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "mat-select", 81)(308, "mat-option", 82);
      \u0275\u0275text(309, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-option", 82);
      \u0275\u0275text(311, "US");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "mat-option", 82);
      \u0275\u0275text(313, "DE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "mat-option", 82);
      \u0275\u0275text(315, "IN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "mat-option", 82);
      \u0275\u0275text(317, "AU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "mat-option", 82);
      \u0275\u0275text(319, "BR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "mat-option", 82);
      \u0275\u0275text(321, "CN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "mat-option", 82);
      \u0275\u0275text(323, "AR");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(324, "div", 79)(325, "div", 10)(326, "label", 41);
      \u0275\u0275text(327, "Country Name ");
      \u0275\u0275elementStart(328, "span", 80);
      \u0275\u0275text(329, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "mat-select", 81)(331, "mat-option", 82);
      \u0275\u0275text(332, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "mat-option", 82);
      \u0275\u0275text(334, "Australia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "mat-option", 82);
      \u0275\u0275text(336, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "mat-option", 82);
      \u0275\u0275text(338, "England");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "mat-option", 82);
      \u0275\u0275text(340, "Argentina");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "mat-option", 82);
      \u0275\u0275text(342, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "mat-option", 82);
      \u0275\u0275text(344, "Italy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "mat-option", 82);
      \u0275\u0275text(346, "New Zealand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "mat-option", 82);
      \u0275\u0275text(348, "UK");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(349, "div", 79)(350, "div", 83)(351, "label", 41);
      \u0275\u0275text(352, "State Name ");
      \u0275\u0275elementStart(353, "span", 80);
      \u0275\u0275text(354, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "mat-select", 81)(356, "mat-option", 82);
      \u0275\u0275text(357, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "mat-option", 82);
      \u0275\u0275text(359, "New South Wales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "mat-option", 82);
      \u0275\u0275text(361, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "mat-option", 82);
      \u0275\u0275text(363, "Ontario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "mat-option", 82);
      \u0275\u0275text(365, "England");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "mat-option", 82);
      \u0275\u0275text(367, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "mat-option", 82);
      \u0275\u0275text(369, "Le-de-France");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "mat-option", 82);
      \u0275\u0275text(371, "Buenos Aires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "mat-option", 82);
      \u0275\u0275text(373, "Maharashtra");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(374, "div", 84)(375, "button", 85);
      \u0275\u0275text(376, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "button", 86);
      \u0275\u0275text(378, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(379, "div", 87)(380, "div", 72)(381, "div", 73)(382, "div", 74)(383, "h4", 75);
      \u0275\u0275text(384, "Edit State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "button", 76);
      \u0275\u0275element(386, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(387, "form")(388, "div", 77)(389, "div", 78)(390, "div", 79)(391, "div", 10)(392, "label", 41);
      \u0275\u0275text(393, "Country Code ");
      \u0275\u0275elementStart(394, "span", 80);
      \u0275\u0275text(395, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(396, "mat-select", 81)(397, "mat-option", 82);
      \u0275\u0275text(398, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "mat-option", 82);
      \u0275\u0275text(400, "US");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(401, "mat-option", 82);
      \u0275\u0275text(402, "DE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "mat-option", 82);
      \u0275\u0275text(404, "IN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "mat-option", 82);
      \u0275\u0275text(406, "AU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "mat-option", 82);
      \u0275\u0275text(408, "BR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "mat-option", 82);
      \u0275\u0275text(410, "CN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "mat-option", 82);
      \u0275\u0275text(412, "AR");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(413, "div", 79)(414, "div", 10)(415, "label", 41);
      \u0275\u0275text(416, "Country Name ");
      \u0275\u0275elementStart(417, "span", 80);
      \u0275\u0275text(418, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "mat-select", 81)(420, "mat-option", 82);
      \u0275\u0275text(421, "Australia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "mat-option", 82);
      \u0275\u0275text(423, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "mat-option", 82);
      \u0275\u0275text(425, "England");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "mat-option", 82);
      \u0275\u0275text(427, "Argentina");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "mat-option", 82);
      \u0275\u0275text(429, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "mat-option", 82);
      \u0275\u0275text(431, "Italy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "mat-option", 82);
      \u0275\u0275text(433, "New Zealand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "mat-option", 82);
      \u0275\u0275text(435, "UK");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(436, "div", 79)(437, "div", 83)(438, "label", 41);
      \u0275\u0275text(439, "State Name ");
      \u0275\u0275elementStart(440, "span", 80);
      \u0275\u0275text(441, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(442, "mat-select", 81)(443, "mat-option", 82);
      \u0275\u0275text(444, "New South Wales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "mat-option", 82);
      \u0275\u0275text(446, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "mat-option", 82);
      \u0275\u0275text(448, "Ontario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "mat-option", 82);
      \u0275\u0275text(450, "England");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "mat-option", 82);
      \u0275\u0275text(452, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "mat-option", 82);
      \u0275\u0275text(454, "Le-de-France");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "mat-option", 82);
      \u0275\u0275text(456, "Buenos Aires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "mat-option", 82);
      \u0275\u0275text(458, "Maharashtra");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(459, "div", 84)(460, "button", 85);
      \u0275\u0275text(461, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "button", 86);
      \u0275\u0275text(463, "Save");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(464, "div", 88)(465, "div", 89)(466, "div", 73)(467, "div", 90)(468, "div", 10);
      \u0275\u0275element(469, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "h6", 92);
      \u0275\u0275text(471, "Delete State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "p", 10);
      \u0275\u0275text(473, "Are you sure, you want to delete State?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "div", 93)(475, "a", 94);
      \u0275\u0275text(476, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "a", 95);
      \u0275\u0275text(478, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 65 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgIf, NgxEditorModule, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, MatSortModule, MatSort, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatesComponent, [{
    type: Component,
    args: [{ selector: "app-states", imports: [
      CommonModule,
      NgxEditorModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule
    ], template: '			<!-- Start Content -->\n			<div class="content-two">\n\n				<!-- Page Header -->\n				<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n					<div>\n						<h6>State</h6>\n					</div>\n					<div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n						<div class="dropdown me-1">\n							<a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"  data-bs-toggle="dropdown">\n								<i class="isax isax-export-1 me-1"></i>Export\n							</a>\n							<ul class="dropdown-menu">\n								<li>\n									<a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n								</li>\n								<li>\n									<a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n								</li>\n							</ul>\n						</div>\n                        <div>\n							<a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n								<i class="isax isax-add-circle5 me-1"></i>New State\n								\n							</a>\n						</div>\n					</div>\n				</div>\n				<!-- End Page Header -->\n				\n				<!-- Table Search -->\n				<div class="mb-3">\n					<div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n						<div class="d-flex align-items-center flex-wrap gap-2">\n							<div class="table-search d-flex align-items-center mb-0">\n								<div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n							</div>\n							<a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n								<i class="isax isax-filter me-1"></i>Filter\n							</a>\n						</div>\n						<div class="d-flex align-items-center flex-wrap gap-2">\n							<div class="dropdown me-2">\n								<a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n									<i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n								</a>\n								<ul class="dropdown-menu  dropdown-menu-end">\n									<li>\n										<a href="javascript:void(0);" class="dropdown-item">Latest</a>\n									</li>\n									<li>\n										<a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n									</li>\n								</ul>\n							</div>\n							\n						</div>\n					</div>				\n				</div>\n				<!-- /Table Search -->\n				\n				<!-- Table List -->\n				<div class="table-responsive">\n					<table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n						<thead class="thead-light">\n							<tr>\n								<th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n								<th class="no-sort">Country Code</th>\n								<th class="no-sort">Country</th>\n								<th class="no-sort">State </th>\n								<th class="no-sort"></th>\n							</tr>\n						</thead>\n						<tbody>\n							@for (data of tableData;track data){\n                            <tr>\n								<td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n								<td>{{data.countryCode}}</td>\n                               \n								<td>\n                                    <div class="d-flex align-items-center">\n										<a href="javascript:void(0);" class="avatar avatar-xs me-2 flex-shrink-0">\n											<img src="assets/img/flags/{{data.img}}" alt="img">\n										</a>\n										<div>\n											<h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.country}}</a></h6>\n										</div>\n									</div>\n                                </td>\n                                <td>{{data.state}}</td>\n								<td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n							</tr>\n                        } @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n						</tbody>\n					</table>\n				</div>\n				<!-- /Table List -->\n				<app-custom-pagination *ngIf="row"/>\n			</div>\n			<!-- End Content -->\n\n\n            		<!-- Start Filter -->\n		<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">                                      \n			<div class="offcanvas-header d-block pb-0">\n				<div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n					<h6 class="offcanvas-title">Filter</h6>\n					<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n				</div>\n			</div>			\n			<div class="offcanvas-body pt-3">  \n				<form action="#">\n					<div class="mb-3">\n						<label class="form-label">Country Code</label>\n						<div class="dropdown">\n							<a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n							<div class="dropdown-menu shadow-lg w-100 dropdown-info">							\n								<div class="mb-3">\n									<div class="input-icon-start position-relative">\n										<span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n										<input type="text" class="form-control form-control-sm" placeholder="Search">\n									</div>\n								</div>\n								<ul class="mb-3">\n									<li class="d-flex align-items-center justify-content-between mb-3">\n										<label class="d-inline-flex align-items-center text-gray-9">\n											<input class="form-check-input select-all m-0 me-2" type="checkbox">\n											Select All\n										</label>\n										<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											US\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											DE\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											IN\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											AU\n										</label>\n									</li>	\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											BR\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											CN\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											AR\n										</label>\n									</li>	\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											RU\n										</label>\n									</li>	\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											CA\n										</label>\n									</li>	\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											IT\n										</label>\n									</li>					\n								</ul>\n								<div class="row g-2">\n									<div class="col-6">\n										<a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n									</div>\n									<div class="col-6">\n										<a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class="mb-3">\n						<label class="form-label">Country</label>\n						<div class="dropdown">\n							<a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n							<div class="dropdown-menu shadow-lg w-100 dropdown-info">							\n								<div class="mb-3">\n									<div class="input-icon-start position-relative">\n										<span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n										<input type="text" class="form-control form-control-sm" placeholder="Search">\n									</div>\n								</div>\n								<ul class="mb-3">\n									<li class="d-flex align-items-center justify-content-between mb-3">\n										<label class="d-inline-flex align-items-center text-gray-9">\n											<input class="form-check-input select-all m-0 me-2" type="checkbox">\n											Select All\n										</label>\n										<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											<span class="avatar avatar-xs me-2"><img src="assets/img/flags/us.png" class="flex-shrink-0" alt="img"></span>United States\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											<span class="avatar avatar-xs me-2"><img src="assets/img/flags/ca.png" class="flex-shrink-0" alt="img"></span>Canada\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											<span class="avatar avatar-xs me-2"><img src="assets/img/flags/de.png" class="flex-shrink-0" alt="img"></span>Germany\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											<span class="avatar avatar-xs me-2"><img src="assets/img/flags/fr.png" class="flex-shrink-0" alt="img"></span>France\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											<span class="avatar avatar-xs me-2"><img src="assets/img/flags/ar.png" class="flex-shrink-0" alt="img"></span>Argentina\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											<span class="avatar avatar-xs me-2"><img src="assets/img/flags/in.png" class="flex-shrink-0" alt="img"></span>India\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											<span class="avatar avatar-xs me-2"><img src="assets/img/flags/it.png" class="flex-shrink-0" alt="img"></span>Italy\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											<span class="avatar avatar-xs me-2"><img src="assets/img/flags/au.png" class="flex-shrink-0" alt="img"></span>Australia\n										</label>\n									</li>\n								</ul>\n								<div class="row g-2">\n									<div class="col-6">\n										<a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n									</div>\n									<div class="col-6">\n										<a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class="mb-3">\n						<label class="form-label">State</label>\n						<div class="dropdown">\n							<a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n							<div class="dropdown-menu shadow-lg w-100 dropdown-info">							\n								<div class="mb-3">\n									<div class="input-icon-start position-relative">\n										<span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n										<input type="text" class="form-control form-control-sm" placeholder="Search">\n									</div>\n								</div>\n								<ul class="mb-3">\n									<li class="d-flex align-items-center justify-content-between mb-3">\n										<label class="d-inline-flex align-items-center text-gray-9">\n											<input class="form-check-input select-all m-0 me-2" type="checkbox">\n											Select All\n										</label>\n										<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											California\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											Ontario\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											England\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											Bavaria\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											Le-de-France\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											Buenos Aires\n										</label>\n									</li>	\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											Maharashtra\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											Lombardy\n										</label>\n									</li>\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											Wellington\n										</label>\n									</li>		\n									<li>\n										<label class="dropdown-item px-2 d-flex align-items-center text-dark">\n											<input class="form-check-input m-0 me-2" type="checkbox">\n											New South Wales\n										</label>\n									</li>					\n								</ul>\n								<div class="row g-2">\n									<div class="col-6">\n										<a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n									</div>\n									<div class="col-6">\n										<a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>			\n					<div class="offcanvas-footer">\n						<div class="row g-2">\n							<div class="col-6">\n								<a href="javascript:void(0);"  class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>\n							</div>\n							<div class="col-6">\n								<button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n							</div>\n						</div>\n					</div>\n				</form>\n			</div>\n		</div>\n		<!-- End Filter -->\n\n		<!-- Start Add Modal  -->\n		<div id="add_modal" class="modal fade">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<h4 class="modal-title">Add New State</h4>\n						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n					</div>\n\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-md-12">\n									<div class="mb-3">\n										<label class="form-label">Country Code <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">US</mat-option>\n											<mat-option value="1">DE</mat-option>\n											<mat-option value="1">IN</mat-option>\n											<mat-option value="1">AU</mat-option>\n											<mat-option value="1">BR</mat-option>\n											<mat-option value="1">CN</mat-option>\n											<mat-option value="1">AR</mat-option>\n										</mat-select>\n									</div>\n								</div>\n									\n								<div class="col-md-12">\n									<div class="mb-3">\n										<label class="form-label">Country Name <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Australia</mat-option>\n											<mat-option value="1">California</mat-option>\n											<mat-option value="1">England</mat-option>\n											<mat-option value="1">Argentina</mat-option>\n											<mat-option value="1">India</mat-option>\n											<mat-option value="1">Italy</mat-option>\n											<mat-option value="1">New Zealand</mat-option>\n											<mat-option value="1">UK</mat-option>\n										</mat-select>\n									</div>\n								</div>\n									\n								<div class="col-md-12">\n									<div class="mb-0">\n										<label class="form-label">State Name <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">New South Wales</mat-option>\n											<mat-option value="1">California</mat-option>\n											<mat-option value="1">Ontario</mat-option>\n											<mat-option value="1">England</mat-option>\n											<mat-option value="1">Bavaria</mat-option>\n											<mat-option value="1">Le-de-France</mat-option>\n											<mat-option value="1">Buenos Aires</mat-option>\n											<mat-option value="1">Maharashtra</mat-option>\n										</mat-select>\n									</div>\n								</div>	\n							</div>															\n						</div><!-- End modal body -->\n						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>\n						</div><!-- End modal footer -->\n					</form>\n			    </div><!-- End modal content-->\n			</div>\n		</div>\n		<!-- End Add Modal  -->\n			\n		<!-- Start Edit Modal  -->\n		<div id="edit_modal" class="modal fade">\n			<div class="modal-dialog modal-dialog-centered">\n				 <div class="modal-content">\n						<div class="modal-header">\n							<h4 class="modal-title">Edit State</h4>\n							<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n						</div>\n\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-md-12">\n									<div class="mb-3">\n										<label class="form-label">Country Code <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">US</mat-option>\n											<mat-option value="1">DE</mat-option>\n											<mat-option value="1">IN</mat-option>\n											<mat-option value="1">AU</mat-option>\n											<mat-option value="1">BR</mat-option>\n											<mat-option value="1">CN</mat-option>\n											<mat-option value="1">AR</mat-option>\n										</mat-select>\n									</div>\n								</div>\n									\n								<div class="col-md-12">\n									<div class="mb-3">\n										<label class="form-label">Country Name <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Australia</mat-option>\n											<mat-option value="1">California</mat-option>\n											<mat-option value="1">England</mat-option>\n											<mat-option value="1">Argentina</mat-option>\n											<mat-option value="1">India</mat-option>\n											<mat-option value="1">Italy</mat-option>\n											<mat-option value="1">New Zealand</mat-option>\n											<mat-option value="1">UK</mat-option>\n										</mat-select>\n									</div>\n								</div>\n									\n								<div class="col-md-12">\n									<div class="mb-0">\n										<label class="form-label">State Name <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">New South Wales</mat-option>\n											<mat-option value="1">California</mat-option>\n											<mat-option value="1">Ontario</mat-option>\n											<mat-option value="1">England</mat-option>\n											<mat-option value="1">Bavaria</mat-option>\n											<mat-option value="1">Le-de-France</mat-option>\n											<mat-option value="1">Buenos Aires</mat-option>\n											<mat-option value="1">Maharashtra</mat-option>\n										</mat-select>\n									</div>\n								</div>	\n							</div>															\n						</div><!-- End modal body -->\n						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save</button>\n						</div><!-- End modal footer -->\n					</form>\n				 </div><!-- End modal content-->\n			</div><!-- End modal dialog-->\n		</div>\n	    <!-- End Edit Modal -->\n\n		<!-- Start Delete Modal  -->\n		<div class="modal fade" id="delete_modal">\n			<div class="modal-dialog modal-dialog-centered modal-sm">\n				<div class="modal-content">\n					<div class="modal-body text-center">\n						<div class="mb-3">\n							<img src="assets/img/icons/delete.svg" alt="img">\n						</div>\n						<h6 class="mb-1">Delete State</h6>\n						<p class="mb-3">Are you sure,  you want to delete State?</p>\n						<div class="d-flex justify-content-center">\n							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n						</div>\n					</div>\n				</div><!-- End modal content-->\n			</div><!-- End modal dialog-->\n		</div>\n		<!-- / End Delete Modal  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatesComponent, { className: "StatesComponent", filePath: "src/app/features/content/location/states/states.component.ts", lineNumber: 22 });
})();
export {
  StatesComponent
};
//# sourceMappingURL=chunk-O5TADPAX.js.map
