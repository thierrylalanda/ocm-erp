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

// src/app/features/content/location/countries/countries.component.ts
var _c0 = () => ({ standalone: true });
function CountriesComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 96)(2, "div", 97)(3, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_For_64_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 99)(10, "a", 100);
    \u0275\u0275element(11, "img", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "h6", 102)(14, "a", 103);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.countryId);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/flags/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.country);
  }
}
function CountriesComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CountriesComponent_app_custom_pagination_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CountriesComponent = class _CountriesComponent {
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
    this.data.getCountries().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.countries) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCountries().subscribe((apiRes) => {
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
  static \u0275fac = function CountriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountriesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountriesComponent, selectors: [["app-countries"]], decls: 311, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "mb-0"], [1, "avatar", "avatar-xs", "me-2"], ["src", "assets/img/flags/us.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/ca.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/de.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/fr.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/ar.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/in.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/it.png", "alt", "img", 1, "flex-shrink-0"], ["src", "assets/img/flags/au.png", "alt", "img", 1, "flex-shrink-0"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "col-md-12"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "placeholder", "AU", 1, "form-control"], ["type", "text", "placeholder", "036", 1, "form-control"], ["type", "text", "placeholder", "Australia", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-xs", "me-2", "flex-shrink-0"], ["alt", "img", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CountriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Countries");
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
      \u0275\u0275text(20, "New Country ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CountriesComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275listener("matSortChange", function CountriesComponent_Template_table_matSortChange_49_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(50, "thead", 28)(51, "tr")(52, "th", 29)(53, "div", 30);
      \u0275\u0275listener("click", function CountriesComponent_Template_div_click_53_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(54, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "th", 29);
      \u0275\u0275text(56, "Country Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 29);
      \u0275\u0275text(58, "Country Id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 29);
      \u0275\u0275text(60, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "th", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "tbody");
      \u0275\u0275repeaterCreate(63, CountriesComponent_For_64_Template, 28, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(65, CountriesComponent_Conditional_65_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(66, CountriesComponent_app_custom_pagination_66_Template, 1, 0, "app-custom-pagination", 32);
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
      \u0275\u0275elementStart(79, "div", 21)(80, "a", 42);
      \u0275\u0275text(81, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 43)(83, "div", 10)(84, "div", 44)(85, "span", 45);
      \u0275\u0275element(86, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275element(87, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "ul", 10)(89, "li", 48)(90, "label", 49);
      \u0275\u0275element(91, "input", 50);
      \u0275\u0275text(92, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "a", 51);
      \u0275\u0275text(94, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "li")(96, "label", 52);
      \u0275\u0275element(97, "input", 53);
      \u0275\u0275text(98, " US ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li")(100, "label", 52);
      \u0275\u0275element(101, "input", 53);
      \u0275\u0275text(102, " DE ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "label", 52);
      \u0275\u0275element(105, "input", 53);
      \u0275\u0275text(106, " IN ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "li")(108, "label", 52);
      \u0275\u0275element(109, "input", 53);
      \u0275\u0275text(110, " AU ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "label", 52);
      \u0275\u0275element(113, "input", 53);
      \u0275\u0275text(114, " BR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "li")(116, "label", 52);
      \u0275\u0275element(117, "input", 53);
      \u0275\u0275text(118, " CN ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "li")(120, "label", 52);
      \u0275\u0275element(121, "input", 53);
      \u0275\u0275text(122, " AR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "li")(124, "label", 52);
      \u0275\u0275element(125, "input", 53);
      \u0275\u0275text(126, " RU ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "li")(128, "label", 52);
      \u0275\u0275element(129, "input", 53);
      \u0275\u0275text(130, " CA ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "li")(132, "label", 52);
      \u0275\u0275element(133, "input", 53);
      \u0275\u0275text(134, " IT ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "div", 54)(136, "div", 55)(137, "a", 56);
      \u0275\u0275text(138, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 55)(140, "a", 57);
      \u0275\u0275text(141, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(142, "div", 58)(143, "label", 41);
      \u0275\u0275text(144, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "div", 21)(146, "a", 42);
      \u0275\u0275text(147, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 43)(149, "div", 10)(150, "div", 44)(151, "span", 45);
      \u0275\u0275element(152, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275element(153, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "ul", 10)(155, "li", 48)(156, "label", 49);
      \u0275\u0275element(157, "input", 50);
      \u0275\u0275text(158, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "a", 51);
      \u0275\u0275text(160, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "li")(162, "label", 52);
      \u0275\u0275element(163, "input", 53);
      \u0275\u0275elementStart(164, "span", 59);
      \u0275\u0275element(165, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, "United States ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "li")(168, "label", 52);
      \u0275\u0275element(169, "input", 53);
      \u0275\u0275elementStart(170, "span", 59);
      \u0275\u0275element(171, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275text(172, "Canada ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "li")(174, "label", 52);
      \u0275\u0275element(175, "input", 53);
      \u0275\u0275elementStart(176, "span", 59);
      \u0275\u0275element(177, "img", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275text(178, "Germany ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "li")(180, "label", 52);
      \u0275\u0275element(181, "input", 53);
      \u0275\u0275elementStart(182, "span", 59);
      \u0275\u0275element(183, "img", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275text(184, "France ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "li")(186, "label", 52);
      \u0275\u0275element(187, "input", 53);
      \u0275\u0275elementStart(188, "span", 59);
      \u0275\u0275element(189, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275text(190, "Argentina ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "li")(192, "label", 52);
      \u0275\u0275element(193, "input", 53);
      \u0275\u0275elementStart(194, "span", 59);
      \u0275\u0275element(195, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275text(196, "India ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "li")(198, "label", 52);
      \u0275\u0275element(199, "input", 53);
      \u0275\u0275elementStart(200, "span", 59);
      \u0275\u0275element(201, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275text(202, "Italy ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "li")(204, "label", 52);
      \u0275\u0275element(205, "input", 53);
      \u0275\u0275elementStart(206, "span", 59);
      \u0275\u0275element(207, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275text(208, "Australia ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "div", 54)(210, "div", 55)(211, "a", 56);
      \u0275\u0275text(212, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "div", 55)(214, "a", 57);
      \u0275\u0275text(215, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(216, "div", 68)(217, "div", 54)(218, "div", 55)(219, "a", 69);
      \u0275\u0275text(220, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "div", 55)(222, "button", 70);
      \u0275\u0275text(223, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(224, "div", 71)(225, "div", 72)(226, "div", 73)(227, "div", 74)(228, "h4", 75);
      \u0275\u0275text(229, "Add New Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "button", 76);
      \u0275\u0275element(231, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "form")(233, "div", 77)(234, "div", 78)(235, "div", 10)(236, "label", 41);
      \u0275\u0275text(237, "Country Code ");
      \u0275\u0275elementStart(238, "span", 79);
      \u0275\u0275text(239, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(240, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "div", 78)(242, "div", 10)(243, "label", 41);
      \u0275\u0275text(244, "Country Id ");
      \u0275\u0275elementStart(245, "span", 79);
      \u0275\u0275text(246, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(247, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 78)(249, "div", 58)(250, "label", 41);
      \u0275\u0275text(251, "Country Name ");
      \u0275\u0275elementStart(252, "span", 79);
      \u0275\u0275text(253, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(254, "input", 80);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(255, "div", 81)(256, "button", 82);
      \u0275\u0275text(257, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "button", 83);
      \u0275\u0275text(259, "Save");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(260, "div", 84)(261, "div", 72)(262, "div", 73)(263, "div", 74)(264, "h4", 75);
      \u0275\u0275text(265, "Edit Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "button", 76);
      \u0275\u0275element(267, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "form")(269, "div", 77)(270, "div", 78)(271, "div", 10)(272, "label", 41);
      \u0275\u0275text(273, "Country Code ");
      \u0275\u0275elementStart(274, "span", 79);
      \u0275\u0275text(275, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(276, "input", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "div", 78)(278, "div", 10)(279, "label", 41);
      \u0275\u0275text(280, "Country Id ");
      \u0275\u0275elementStart(281, "span", 79);
      \u0275\u0275text(282, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(283, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "div", 78)(285, "div", 58)(286, "label", 41);
      \u0275\u0275text(287, "Country Name ");
      \u0275\u0275elementStart(288, "span", 79);
      \u0275\u0275text(289, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(290, "input", 87);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(291, "div", 81)(292, "button", 82);
      \u0275\u0275text(293, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "button", 83);
      \u0275\u0275text(295, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(296, "div", 88)(297, "div", 89)(298, "div", 73)(299, "div", 90)(300, "div", 10);
      \u0275\u0275element(301, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "h6", 92);
      \u0275\u0275text(303, "Delete Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "p", 10);
      \u0275\u0275text(305, "Are you sure, you want to delete Country?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "div", 93)(307, "a", 94);
      \u0275\u0275text(308, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "a", 95);
      \u0275\u0275text(310, "Yes, Delete");
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
  }, dependencies: [
    CommonModule,
    NgIf,
    NgxEditorModule,
    MatSelectModule,
    CustomPaginationComponent,
    MatSortModule,
    MatSort,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountriesComponent, [{
    type: Component,
    args: [{ selector: "app-countries", imports: [
      CommonModule,
      NgxEditorModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule
    ], template: '			<!-- Start Content -->\n            <div class="content-two">\n\n                <!-- Page Header -->\n                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n                    <div>\n                        <h6>Countries</h6>\n                    </div>\n                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n                        <div class="dropdown me-1">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                <i class="isax isax-export-1 me-1"></i>Export\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div>\n                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n                                <i class="isax isax-add-circle5 me-1"></i>New Country\n\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n                <!-- Table Search Start -->\n                <div class="mb-3">\n                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="table-search d-flex align-items-center mb-0">\n                                <div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n                            </div>\n                            <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                                <i class="isax isax-filter me-1"></i>Filter\n                            </a>\n                        </div>\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="dropdown">\n                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                    <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                                </a>\n                                <ul class="dropdown-menu  dropdown-menu-end">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <!-- Table Search End -->\n\n                <!-- Table List Start -->\n                <div class="table-responsive">\n                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n                        <thead class="thead-light">\n                            <tr>\n                                <th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n                                <th class="no-sort">Country Code</th>\n                                <th class="no-sort">Country Id</th>\n                                <th class="no-sort">Country</th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            @for (data of tableData;track data){\n                            <tr>\n                                <td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n                                <td>{{data.countryCode}}</td>\n                                <td>{{data.countryId}}</td>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-xs me-2 flex-shrink-0">\n                                            <img src="assets/img/flags/{{data.img}}" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.country}}</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        } @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n                        </tbody>\n                    </table>\n                </div>\n                <!-- Table List End -->\n                <app-custom-pagination *ngIf="row"/>\n            </div>\n			<!-- End Content -->\n\n\n                    <!-- Start Filter -->\n        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n            <div class="offcanvas-header d-block pb-0">\n                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n                    <h6 class="offcanvas-title">Filter</h6>\n                    <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                </div>\n            </div>\n            <div class="offcanvas-body pt-3">\n                <form action="#">\n                    <div class="mb-3">\n                        <label class="form-label">Country Code</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li class="d-flex align-items-center justify-content-between mb-3">\n                                        <label class="d-inline-flex align-items-center text-gray-9">\n                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                        </label>\n                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> US\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> DE\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> IN\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> AU\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> BR\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> CN\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> AR\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> RU\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> CA\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> IT\n                                        </label>\n                                    </li>\n                                </ul>\n                                <div class="row g-2">\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                                    </div>\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-0">\n                        <label class="form-label">Country</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li class="d-flex align-items-center justify-content-between mb-3">\n                                        <label class="d-inline-flex align-items-center text-gray-9">\n                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                        </label>\n                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-xs me-2"><img src="assets/img/flags/us.png" class="flex-shrink-0" alt="img"></span>United States\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-xs me-2"><img src="assets/img/flags/ca.png" class="flex-shrink-0" alt="img"></span>Canada\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-xs me-2"><img src="assets/img/flags/de.png" class="flex-shrink-0" alt="img"></span>Germany\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-xs me-2"><img src="assets/img/flags/fr.png" class="flex-shrink-0" alt="img"></span>France\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-xs me-2"><img src="assets/img/flags/ar.png" class="flex-shrink-0" alt="img"></span>Argentina\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-xs me-2"><img src="assets/img/flags/in.png" class="flex-shrink-0" alt="img"></span>India\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-xs me-2"><img src="assets/img/flags/it.png" class="flex-shrink-0" alt="img"></span>Italy\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-xs me-2"><img src="assets/img/flags/au.png" class="flex-shrink-0" alt="img"></span>Australia\n                                        </label>\n                                    </li>\n                                </ul>\n                                <div class="row g-2">\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                                    </div>\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="offcanvas-footer">\n                        <div class="row g-2">\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>\n                            </div>\n                            <div class="col-6">\n                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <!-- End Filter -->\n\n        <!-- Start Edit Modal  -->\n        <div id="add_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add New Country</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Country Code <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Country Id <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-0">\n                                    <label class="form-label">Country Name <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Modal -->\n\n        <!-- Start Edit Modal  -->\n        <div id="edit_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit  Country</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Country Code <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" placeholder="AU">\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Country Id <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" placeholder="036">\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-0">\n                                    <label class="form-label">Country Name <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" placeholder="Australia">\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Modal -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Country</h6>\n                        <p class="mb-3">Are you sure, you want to delete Country?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountriesComponent, { className: "CountriesComponent", filePath: "src/app/features/content/location/countries/countries.component.ts", lineNumber: 21 });
})();
export {
  CountriesComponent
};
//# sourceMappingURL=chunk-KBFYML2E.js.map
