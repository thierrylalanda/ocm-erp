import {
  NgxEditorModule
} from "./chunk-I5UCRYM6.js";
import {
  CustomPaginationComponent
} from "./chunk-MFJENDE3.js";
import {
  MatSort,
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

// src/app/features/content/location/cities/cities.component.ts
var _c0 = () => ({ standalone: true });
function CitiesComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 55)(2, "div", 56)(3, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function CitiesComponent_For_49_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 58)(6, "a", 59);
    \u0275\u0275element(7, "img", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 61)(10, "a", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 63)(17, "a", 64);
    \u0275\u0275element(18, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 66)(20, "li")(21, "a", 67);
    \u0275\u0275element(22, "i", 68);
    \u0275\u0275text(23, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "a", 69);
    \u0275\u0275element(26, "i", 70);
    \u0275\u0275text(27, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/flags/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.city);
  }
}
function CitiesComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 71);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CitiesComponent_app_custom_pagination_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CitiesComponent = class _CitiesComponent {
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
    this.data.getCities().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.cities) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCities().subscribe((apiRes) => {
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
  static \u0275fac = function CitiesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CitiesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CitiesComponent, selectors: [["app-cities"]], decls: 203, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "col-md-12"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-0"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "New South Wales", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-xs", "me-2", "flex-shrink-0"], ["alt", "img", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CitiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Cities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "a", 3);
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "New City ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "a", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "label")(18, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function CitiesComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CitiesComponent_Template_input_ngModelChange_18_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 14)(21, "a", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275text(23, "Sort By : ");
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275text(25, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "ul", 18)(27, "li")(28, "a", 19);
      \u0275\u0275text(29, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 19);
      \u0275\u0275text(32, "Oldest");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(33, "div", 20)(34, "table", 21);
      \u0275\u0275listener("matSortChange", function CitiesComponent_Template_table_matSortChange_34_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(35, "thead", 22)(36, "tr")(37, "th", 23)(38, "div", 24);
      \u0275\u0275listener("click", function CitiesComponent_Template_div_click_38_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(39, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function CitiesComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "th", 23);
      \u0275\u0275text(41, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 23);
      \u0275\u0275text(43, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 23);
      \u0275\u0275text(45, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "th", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "tbody");
      \u0275\u0275repeaterCreate(48, CitiesComponent_For_49_Template, 28, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(50, CitiesComponent_Conditional_50_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(51, CitiesComponent_app_custom_pagination_51_Template, 1, 0, "app-custom-pagination", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 27)(53, "div", 28)(54, "div", 29)(55, "div", 30)(56, "h4", 31);
      \u0275\u0275text(57, "Add New City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 32);
      \u0275\u0275element(59, "i", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "form")(61, "div", 34)(62, "div", 35)(63, "div", 5)(64, "label", 36);
      \u0275\u0275text(65, "Country Name");
      \u0275\u0275elementStart(66, "span", 37);
      \u0275\u0275text(67, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "mat-select", 38)(69, "mat-option", 39);
      \u0275\u0275text(70, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 39);
      \u0275\u0275text(72, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-option", 39);
      \u0275\u0275text(74, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "mat-option", 39);
      \u0275\u0275text(76, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "mat-option", 39);
      \u0275\u0275text(78, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "mat-option", 39);
      \u0275\u0275text(80, "France");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "mat-option", 39);
      \u0275\u0275text(82, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "mat-option", 39);
      \u0275\u0275text(84, "Italy");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(85, "div", 35)(86, "div", 5)(87, "label", 36);
      \u0275\u0275text(88, "State Name");
      \u0275\u0275elementStart(89, "span", 37);
      \u0275\u0275text(90, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "mat-select", 38)(92, "mat-option", 39);
      \u0275\u0275text(93, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "mat-option", 39);
      \u0275\u0275text(95, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "mat-option", 39);
      \u0275\u0275text(97, "England");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "mat-option", 39);
      \u0275\u0275text(99, "Le-de-France");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "mat-option", 39);
      \u0275\u0275text(101, "Buenos Aires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "mat-option", 39);
      \u0275\u0275text(103, "Maharashtra");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "mat-option", 39);
      \u0275\u0275text(105, "Lombardy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "mat-option", 39);
      \u0275\u0275text(107, "Wellington");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(108, "div", 35)(109, "div", 40)(110, "label", 36);
      \u0275\u0275text(111, "City Name");
      \u0275\u0275elementStart(112, "span", 37);
      \u0275\u0275text(113, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(114, "input", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 42)(116, "button", 43);
      \u0275\u0275text(117, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "button", 44);
      \u0275\u0275text(119, "Save");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(120, "div", 45)(121, "div", 28)(122, "div", 29)(123, "div", 30)(124, "h4", 31);
      \u0275\u0275text(125, "Edit City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "button", 32);
      \u0275\u0275element(127, "i", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "form")(129, "div", 34)(130, "div", 35)(131, "div", 5)(132, "label", 36);
      \u0275\u0275text(133, "Country Name");
      \u0275\u0275elementStart(134, "span", 37);
      \u0275\u0275text(135, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "mat-select", 38)(137, "mat-option", 39);
      \u0275\u0275text(138, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "mat-option", 39);
      \u0275\u0275text(140, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "mat-option", 39);
      \u0275\u0275text(142, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "mat-option", 39);
      \u0275\u0275text(144, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "mat-option", 39);
      \u0275\u0275text(146, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "mat-option", 39);
      \u0275\u0275text(148, "France");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "mat-option", 39);
      \u0275\u0275text(150, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "mat-option", 39);
      \u0275\u0275text(152, "Italy");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(153, "div", 35)(154, "div", 5)(155, "label", 36);
      \u0275\u0275text(156, "State Name");
      \u0275\u0275elementStart(157, "span", 37);
      \u0275\u0275text(158, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "mat-select", 38)(160, "mat-option", 39);
      \u0275\u0275text(161, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "mat-option", 39);
      \u0275\u0275text(163, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "mat-option", 39);
      \u0275\u0275text(165, "England");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "mat-option", 39);
      \u0275\u0275text(167, "Le-de-France");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "mat-option", 39);
      \u0275\u0275text(169, "Buenos Aires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "mat-option", 39);
      \u0275\u0275text(171, "Maharashtra");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "mat-option", 39);
      \u0275\u0275text(173, "Lombardy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "mat-option", 39);
      \u0275\u0275text(175, "Wellington");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(176, "div", 35)(177, "div", 40)(178, "label", 36);
      \u0275\u0275text(179, "State Name");
      \u0275\u0275elementStart(180, "span", 37);
      \u0275\u0275text(181, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(182, "input", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 42)(184, "button", 43);
      \u0275\u0275text(185, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "button", 44);
      \u0275\u0275text(187, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(188, "div", 47)(189, "div", 48)(190, "div", 29)(191, "div", 49)(192, "div", 5);
      \u0275\u0275element(193, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "h6", 51);
      \u0275\u0275text(195, "Delete City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "p", 5);
      \u0275\u0275text(197, "Are you sure, you want to delete city?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 52)(199, "a", 53);
      \u0275\u0275text(200, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "a", 54);
      \u0275\u0275text(202, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgIf, NgxEditorModule, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, MatSortModule, MatSort, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CitiesComponent, [{
    type: Component,
    args: [{ selector: "app-cities", imports: [
      CommonModule,
      NgxEditorModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule
    ], template: '			<!-- Start Content -->\n            <div class="content-two">\n\n                <!-- Page Header -->\n                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n                    <div>\n                        <h6>Cities</h6>\n                    </div>\n                    <div class="d-flex">\n                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n                            <i class="isax isax-add-circle5 me-1"></i>New City\n                        </a>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n                <!-- Table Search Start -->\n                <div class="mb-3">\n                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="table-search d-flex align-items-center mb-0">\n                                <div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n                            </div>\n                        </div>\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="dropdown">\n                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                    <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                                </a>\n                                <ul class="dropdown-menu  dropdown-menu-end">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <!-- Table Search End -->\n\n                <!-- Table List Start -->\n                <div class="table-responsive">\n                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n                        <thead class="thead-light">\n                            <tr>\n                                <th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n                                <th class="no-sort">Country</th>\n                                <th class="no-sort">State</th>\n                                <th class="no-sort">City</th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            @for (data of tableData;track data){\n                            <tr>\n                                <td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-xs me-2 flex-shrink-0">\n                                            <img src="assets/img/flags/{{data.img}}" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.country}}</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>{{data.state}}</td>\n                                <td>{{data.city}}</td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        } @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n                        </tbody>\n                    </table>\n                </div>\n                <!-- /Table List End -->\n                <app-custom-pagination *ngIf="row"/>\n            </div>\n			<!-- End Content -->\n\n\n                    <!-- Add Modal Start -->\n        <div id="add_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add New City</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Country Name<span class="text-danger ms-1">*</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">United States</mat-option>\n                                        <mat-option value="1">Canada</mat-option>\n                                        <mat-option value="1">Germany</mat-option>\n                                        <mat-option value="1">United Kingdom</mat-option>\n                                        <mat-option value="1">France</mat-option>\n                                        <mat-option value="1">India</mat-option>\n                                        <mat-option value="1">Italy</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">State Name<span class="text-danger ms-1">*</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">California</mat-option>\n                                        <mat-option value="1">England</mat-option>\n                                        <mat-option value="1">Le-de-France</mat-option>\n                                        <mat-option value="1">Buenos Aires</mat-option>\n                                        <mat-option value="1">Maharashtra</mat-option>\n                                        <mat-option value="1">Lombardy</mat-option>\n                                        <mat-option value="1">Wellington</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-0">\n                                    <label class="form-label">City Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Save</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- Add Modal End -->\n\n        <!-- edit Modal Start -->\n        <div id="edit_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit City</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Country Name<span class="text-danger ms-1">*</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">United States</mat-option>\n                                        <mat-option value="1">United States</mat-option>\n                                        <mat-option value="1">Canada</mat-option>\n                                        <mat-option value="1">Germany</mat-option>\n                                        <mat-option value="1">United Kingdom</mat-option>\n                                        <mat-option value="1">France</mat-option>\n                                        <mat-option value="1">India</mat-option>\n                                        <mat-option value="1">Italy</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">State Name<span class="text-danger ms-1">*</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">California</mat-option>\n                                        <mat-option value="1">California</mat-option>\n                                        <mat-option value="1">England</mat-option>\n                                        <mat-option value="1">Le-de-France</mat-option>\n                                        <mat-option value="1">Buenos Aires</mat-option>\n                                        <mat-option value="1">Maharashtra</mat-option>\n                                        <mat-option value="1">Lombardy</mat-option>\n                                        <mat-option value="1">Wellington</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-0">\n                                    <label class="form-label">State Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control" value="New South Wales">\n                                </div>\n                            </div>\n\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- Edit Modal End -->\n\n        <!-- Delete Modal Start -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete City</h6>\n                        <p class="mb-3">Are you sure, you want to delete city?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Delete Modal End -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CitiesComponent, { className: "CitiesComponent", filePath: "src/app/features/content/location/cities/cities.component.ts", lineNumber: 21 });
})();
export {
  CitiesComponent
};
//# sourceMappingURL=chunk-TO3INWTH.js.map
