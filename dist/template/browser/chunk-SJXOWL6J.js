import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/content/pages/pages.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "show": a0 });
var _c2 = (a0) => ({ "d-none": a0 });
function PagesComponent_For_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 118)(2, "div", 119)(3, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function PagesComponent_For_73_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 121);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 122);
    \u0275\u0275text(11);
    \u0275\u0275element(12, "i", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 124)(14, "a", 125);
    \u0275\u0275element(15, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ul", 6)(17, "li")(18, "a", 127);
    \u0275\u0275element(19, "i", 128);
    \u0275\u0275text(20, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "a", 129);
    \u0275\u0275element(23, "i", 130);
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.pages);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.pageSlug);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "isax-close-circle" : "isax-tick-circle");
  }
}
function PagesComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 131);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function PagesComponent_app_custom_pagination_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var PagesComponent = class _PagesComponent {
  data;
  router;
  pagination;
  routes = routes;
  formatLabel(value) {
    if (value >= 1e3) {
      return Math.round(value / 1e3) + "k";
    }
    return `${value}`;
  }
  showFilter = false;
  selectedFilter = [false];
  isFilter() {
    this.showFilter = !this.showFilter;
  }
  isSelectedFilter(index) {
    this.selectedFilter[index] = !this.selectedFilter[index];
  }
  editor;
  editor1;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  ngOnInit() {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
    this.editor1.destroy();
  }
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
    this.data.getPages().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.pages) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPages().subscribe((apiRes) => {
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
  static \u0275fac = function PagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagesComponent, selectors: [["app-pages"]], decls: 456, vars: 24, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3", 3, "ngClass"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge", 3, "ngClass"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close", 3, "click"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-0"], ["placeholder", "Select", 1, "custom-mat-select", "select2-color"], ["value", "1", 1, "text-success"], ["value", "1", 1, "text-danger"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100", 3, "click"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "specialist", 1, "input-tags", "form-control"], [1, "col-lg-4"], [1, "d-flex", "align-items-center"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "text-danger", "ms-1"], [1, "col-md-12"], [3, "editor"], [3, "editor", "toolbar"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "About Us", 1, "form-control"], ["type", "text", "value", "abot-us", 1, "form-control"], ["id", "inputBox2", "type", "text", "data-role", "tagsinput", "name", "specialist", "value", "Badge", 1, "input-tags", "form-control"], ["for", "Radio-sm-3", 1, "form-check-label"], ["for", "Radio-sm-4", 1, "form-check-label"], ["placeholder", "English", 1, "custom-mat-select", "select"], ["placeholder", "Active", 1, "custom-mat-select", "select"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function PagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Pages");
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
      \u0275\u0275text(20, "New Pages");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function PagesComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PagesComponent_Template_input_ngModelChange_30_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "a", 19);
      \u0275\u0275element(32, "i", 20);
      \u0275\u0275text(33, "Filter ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 21)(35, "h6", 22);
      \u0275\u0275text(36, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 23)(38, "span", 24);
      \u0275\u0275text(39, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, "Vendors Selected");
      \u0275\u0275elementStart(41, "span", 25);
      \u0275\u0275listener("click", function PagesComponent_Template_span_click_41_listener() {
        return ctx.isSelectedFilter(1);
      });
      \u0275\u0275element(42, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "span", 23)(44, "span", 24);
      \u0275\u0275text(45, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, "Status Selected");
      \u0275\u0275elementStart(47, "span", 25);
      \u0275\u0275listener("click", function PagesComponent_Template_span_click_47_listener() {
        return ctx.isSelectedFilter(2);
      });
      \u0275\u0275element(48, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "span", 23)(50, "span", 24);
      \u0275\u0275text(51, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, "Units Selected");
      \u0275\u0275elementStart(53, "span", 25);
      \u0275\u0275listener("click", function PagesComponent_Template_span_click_53_listener() {
        return ctx.isSelectedFilter(3);
      });
      \u0275\u0275element(54, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "a", 27);
      \u0275\u0275listener("click", function PagesComponent_Template_a_click_55_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(56, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 28)(58, "table", 29);
      \u0275\u0275listener("matSortChange", function PagesComponent_Template_table_matSortChange_58_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(59, "thead")(60, "tr")(61, "th", 30)(62, "div", 31);
      \u0275\u0275listener("click", function PagesComponent_Template_div_click_62_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(63, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function PagesComponent_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "th", 30);
      \u0275\u0275text(65, "Pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 30);
      \u0275\u0275text(67, "Page slug");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 30);
      \u0275\u0275text(69, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "th", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "tbody");
      \u0275\u0275repeaterCreate(72, PagesComponent_For_73_Template, 25, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(74, PagesComponent_Conditional_74_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(75, PagesComponent_app_custom_pagination_75_Template, 1, 0, "app-custom-pagination", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 34)(77, "div", 35)(78, "div", 36)(79, "h6", 37);
      \u0275\u0275text(80, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 38);
      \u0275\u0275element(82, "i", 39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 40)(84, "form", 41)(85, "div", 10)(86, "label", 42);
      \u0275\u0275text(87, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 3)(89, "a", 43);
      \u0275\u0275text(90, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 44)(92, "div", 10)(93, "div", 45)(94, "span", 46);
      \u0275\u0275element(95, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "ul", 10)(98, "li", 49)(99, "label", 50);
      \u0275\u0275element(100, "input", 51);
      \u0275\u0275text(101, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "a", 52);
      \u0275\u0275text(103, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "li")(105, "label", 53);
      \u0275\u0275element(106, "input", 54);
      \u0275\u0275elementStart(107, "span", 55);
      \u0275\u0275element(108, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275text(109, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "li")(111, "label", 53);
      \u0275\u0275element(112, "input", 54);
      \u0275\u0275elementStart(113, "span", 55);
      \u0275\u0275element(114, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275text(115, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "li")(117, "label", 53);
      \u0275\u0275element(118, "input", 54);
      \u0275\u0275elementStart(119, "span", 55);
      \u0275\u0275element(120, "img", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275text(121, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "li")(123, "label", 53);
      \u0275\u0275element(124, "input", 54);
      \u0275\u0275elementStart(125, "span", 55);
      \u0275\u0275element(126, "img", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "li")(129, "label", 53);
      \u0275\u0275element(130, "input", 54);
      \u0275\u0275elementStart(131, "span", 55);
      \u0275\u0275element(132, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "li")(135, "label", 53);
      \u0275\u0275element(136, "input", 54);
      \u0275\u0275elementStart(137, "span", 55);
      \u0275\u0275element(138, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 62)(141, "div", 63)(142, "a", 64);
      \u0275\u0275text(143, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 63)(145, "a", 65);
      \u0275\u0275text(146, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(147, "div", 10)(148, "label", 42);
      \u0275\u0275text(149, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 3)(151, "a", 43);
      \u0275\u0275text(152, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 44)(154, "div", 10)(155, "div", 45)(156, "span", 46);
      \u0275\u0275element(157, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275element(158, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "ul", 10)(160, "li", 49)(161, "label", 50);
      \u0275\u0275element(162, "input", 51);
      \u0275\u0275text(163, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "a", 52);
      \u0275\u0275text(165, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "li")(167, "label", 53);
      \u0275\u0275element(168, "input", 54);
      \u0275\u0275text(169, " Smartphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "li")(171, "label", 53);
      \u0275\u0275element(172, "input", 54);
      \u0275\u0275text(173, " Headphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "li")(175, "label", 53);
      \u0275\u0275element(176, "input", 54);
      \u0275\u0275text(177, " Men's Apparel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "li")(179, "label", 53);
      \u0275\u0275element(180, "input", 54);
      \u0275\u0275text(181, " Footwear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "li")(183, "label", 53);
      \u0275\u0275element(184, "input", 54);
      \u0275\u0275text(185, " Kitchen ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "li")(187, "label", 53);
      \u0275\u0275element(188, "input", 54);
      \u0275\u0275text(189, " Cleaning ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "li")(191, "label", 53);
      \u0275\u0275element(192, "input", 54);
      \u0275\u0275text(193, " Skincare ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "li")(195, "label", 53);
      \u0275\u0275element(196, "input", 54);
      \u0275\u0275text(197, " Bike & Accessories ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "div", 62)(199, "div", 63)(200, "a", 64);
      \u0275\u0275text(201, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 63)(203, "a", 65);
      \u0275\u0275text(204, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(205, "div", 10)(206, "label", 42);
      \u0275\u0275text(207, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "mat-select", 66)(209, "mat-option", 67);
      \u0275\u0275text(210, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "mat-option", 67);
      \u0275\u0275text(212, "Kilograms (Kg)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "mat-option", 67);
      \u0275\u0275text(214, "Gram (g)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "mat-option", 67);
      \u0275\u0275text(216, "Liter (l)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "mat-option", 67);
      \u0275\u0275text(218, "Millimetre (mm)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "mat-option", 67);
      \u0275\u0275text(220, "Milliliter (ml)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "mat-option", 67);
      \u0275\u0275text(222, "Pack (pk)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "mat-option", 67);
      \u0275\u0275text(224, "Piece (pc)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(225, "div", 68)(226, "label", 42);
      \u0275\u0275text(227, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "mat-select", 69)(229, "mat-option", 67);
      \u0275\u0275text(230, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "mat-option", 70);
      \u0275\u0275text(232, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "mat-option", 71);
      \u0275\u0275text(234, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "div", 72)(236, "div", 62)(237, "div", 63)(238, "a", 73);
      \u0275\u0275text(239, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "div", 63)(241, "button", 74);
      \u0275\u0275listener("click", function PagesComponent_Template_button_click_241_listener() {
        return ctx.isFilter();
      });
      \u0275\u0275text(242, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(243, "div", 75)(244, "div", 76)(245, "div", 77)(246, "div", 78)(247, "h4", 79);
      \u0275\u0275text(248, "Add Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "button", 80);
      \u0275\u0275element(250, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "form")(252, "div", 81)(253, "div", 82)(254, "div", 83)(255, "div", 10)(256, "label", 42);
      \u0275\u0275text(257, "Title ");
      \u0275\u0275elementStart(258, "span", 84);
      \u0275\u0275text(259, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(260, "input", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 83)(262, "div", 10)(263, "label", 42);
      \u0275\u0275text(264, "Slug ");
      \u0275\u0275elementStart(265, "span", 84);
      \u0275\u0275text(266, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(267, "input", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "div", 83)(269, "div", 10)(270, "label", 42);
      \u0275\u0275text(271, "Description ");
      \u0275\u0275elementStart(272, "span");
      \u0275\u0275text(273, " (Meta Tag) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "span", 84);
      \u0275\u0275text(275, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(276, "input", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "div", 83)(278, "div", 10)(279, "label", 42);
      \u0275\u0275text(280, "Keywords ");
      \u0275\u0275elementStart(281, "span");
      \u0275\u0275text(282, " (Meta Tag) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "span", 84);
      \u0275\u0275text(284, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(285, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "div", 87)(287, "div", 10)(288, "label", 42);
      \u0275\u0275text(289, "Location ");
      \u0275\u0275elementStart(290, "span", 84);
      \u0275\u0275text(291, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "div", 88)(293, "div", 89);
      \u0275\u0275element(294, "input", 90);
      \u0275\u0275elementStart(295, "label", 91);
      \u0275\u0275text(296, " Top Menu ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "div", 92);
      \u0275\u0275element(298, "input", 93);
      \u0275\u0275elementStart(299, "label", 94);
      \u0275\u0275text(300, " Quick Links ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(301, "div", 87)(302, "div", 10)(303, "label", 42);
      \u0275\u0275text(304, "Language ");
      \u0275\u0275elementStart(305, "span", 95);
      \u0275\u0275text(306, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "mat-select", 66)(308, "mat-option", 67);
      \u0275\u0275text(309, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-option", 67);
      \u0275\u0275text(311, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "mat-option", 67);
      \u0275\u0275text(313, "German");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "mat-option", 67);
      \u0275\u0275text(315, "Arabic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "mat-option", 67);
      \u0275\u0275text(317, "French");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(318, "div", 87)(319, "div", 10)(320, "label", 42);
      \u0275\u0275text(321, "Status ");
      \u0275\u0275elementStart(322, "span", 95);
      \u0275\u0275text(323, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "mat-select", 66)(325, "mat-option", 67);
      \u0275\u0275text(326, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "mat-option", 67);
      \u0275\u0275text(328, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "mat-option", 67);
      \u0275\u0275text(330, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(331, "div", 96)(332, "div")(333, "label", 42);
      \u0275\u0275text(334, "Textarea");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "ngx-editor", 97);
      \u0275\u0275element(336, "ngx-editor-menu", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(337, "div", 99)(338, "button", 100);
      \u0275\u0275text(339, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "button", 101);
      \u0275\u0275text(341, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(342, "div", 102)(343, "div", 76)(344, "div", 77)(345, "div", 78)(346, "h4", 79);
      \u0275\u0275text(347, "Edit Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "button", 80);
      \u0275\u0275element(349, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "form")(351, "div", 81)(352, "div", 82)(353, "div", 83)(354, "div", 10)(355, "label", 42);
      \u0275\u0275text(356, "Title ");
      \u0275\u0275elementStart(357, "span", 84);
      \u0275\u0275text(358, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(359, "input", 103);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "div", 83)(361, "div", 10)(362, "label", 42);
      \u0275\u0275text(363, "Slug ");
      \u0275\u0275elementStart(364, "span", 84);
      \u0275\u0275text(365, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(366, "input", 104);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "div", 83)(368, "div", 10)(369, "label", 42);
      \u0275\u0275text(370, "Description ");
      \u0275\u0275elementStart(371, "span");
      \u0275\u0275text(372, " (Meta Tag) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "span", 84);
      \u0275\u0275text(374, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(375, "input", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "div", 83)(377, "div", 10)(378, "label", 42);
      \u0275\u0275text(379, "Keywords ");
      \u0275\u0275elementStart(380, "span");
      \u0275\u0275text(381, " (Meta Tag) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "span", 84);
      \u0275\u0275text(383, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(384, "input", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(385, "div", 87)(386, "div", 10)(387, "label", 42);
      \u0275\u0275text(388, "Location ");
      \u0275\u0275elementStart(389, "span", 84);
      \u0275\u0275text(390, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "div", 88)(392, "div", 89);
      \u0275\u0275element(393, "input", 90);
      \u0275\u0275elementStart(394, "label", 106);
      \u0275\u0275text(395, " Top Menu ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(396, "div", 92);
      \u0275\u0275element(397, "input", 93);
      \u0275\u0275elementStart(398, "label", 107);
      \u0275\u0275text(399, " Quick Links ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(400, "div", 87)(401, "div", 10)(402, "label", 42);
      \u0275\u0275text(403, "Language ");
      \u0275\u0275elementStart(404, "span", 95);
      \u0275\u0275text(405, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(406, "mat-select", 108)(407, "mat-option", 67);
      \u0275\u0275text(408, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "mat-option", 67);
      \u0275\u0275text(410, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "mat-option", 67);
      \u0275\u0275text(412, "German");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "mat-option", 67);
      \u0275\u0275text(414, "Arabic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "mat-option", 67);
      \u0275\u0275text(416, "French");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(417, "div", 87)(418, "div", 10)(419, "label", 42);
      \u0275\u0275text(420, "Status ");
      \u0275\u0275elementStart(421, "span", 95);
      \u0275\u0275text(422, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(423, "mat-select", 109)(424, "mat-option", 67);
      \u0275\u0275text(425, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "mat-option", 67);
      \u0275\u0275text(427, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "mat-option", 67);
      \u0275\u0275text(429, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(430, "div", 96)(431, "div")(432, "label", 42);
      \u0275\u0275text(433, "Textarea");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "ngx-editor", 97);
      \u0275\u0275element(435, "ngx-editor-menu", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(436, "div", 99)(437, "button", 100);
      \u0275\u0275text(438, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "button", 101);
      \u0275\u0275text(440, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(441, "div", 110)(442, "div", 111)(443, "div", 77)(444, "div", 112)(445, "div", 10);
      \u0275\u0275element(446, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "h6", 114);
      \u0275\u0275text(448, "Delete Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "p", 10);
      \u0275\u0275text(450, "Are you sure, you want to delete Page?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "div", 115)(452, "a", 116);
      \u0275\u0275text(453, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "a", 117);
      \u0275\u0275text(455, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c1, ctx.showFilter));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c2, ctx.selectedFilter[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c2, ctx.selectedFilter[2]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c2, ctx.selectedFilter[3]));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 74 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
      \u0275\u0275advance(260);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(98);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, NgxEditorModule, NgxEditorComponent, MenuComponent, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, MatSortModule, MatSort, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagesComponent, [{
    type: Component,
    args: [{ selector: "app-pages", imports: [
      CommonModule,
      NgxEditorModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule
    ], template: `            <!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Pages</h6>
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
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>New Pages</a>
                        </div>
                    </div>
                </div>
                <!-- End Page Header -->

                <!-- Start Table Search -->
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

                    </div>

                    <!-- Filter Info -->
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Vendors Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[3]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Units Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(3)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
                    </div>
                    <!-- /Filter Info -->

                </div>
                <!-- End Table Search -->

                <!-- Start Table List -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead>
                            <tr>
                                <th class="no-sort">
                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                    </div>
                                </th>
                                <th class="no-sort">Pages</th>
                                <th class="no-sort">Page slug</th>
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
                                    <a href="javascript:void(0);" class="link-default">{{data.pages}}</a>
                                </td>

                                <td>{{data.pageSlug}}</td>
                                <td>
                                    <span class="badge  d-inline-flex align-items-center"
                                    [ngClass]="data.status==='Inactive'?'badge-soft-danger':'badge-soft-success'">{{data.status}} 
                                    <i class="isax  ms-1"
                                    [ngClass]="data.status==='Inactive'?'isax-close-circle':'isax-tick-circle'"></i></span>
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
                </div>
                <!-- End Table List -->
                 <app-custom-pagination *ngIf="row"/>

            </div>
            <!-- End Content -->


                    <!-- Start Filter -->
        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">
            <div class="offcanvas-header d-block pb-0">
                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
                    <h6 class="offcanvas-title">Filter</h6>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>
            <div class="offcanvas-body pt-3">
                <form action="#">
                    <div class="mb-3">
                        <label class="form-label">Products/Services</label>
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
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Apple iPhone 15
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dell XPS 13 9310
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-03.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Bose QuietComfort 45
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Nike Dri-FIT T-shirt
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-05.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Adidas Ultraboost 22 Running Shoe
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Samsung French Door Refrigerator
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
                        <label class="form-label">Category</label>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Smartphones
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Headphones
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Men's Apparel
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Footwear
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Kitchen
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Cleaning
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Skincare
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Bike & Accessories
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
                        <label class="form-label">Units</label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1">Kilograms (Kg)</mat-option>
                            <mat-option value="1">Gram (g)</mat-option>
                            <mat-option value="1">Liter (l)</mat-option>
                            <mat-option value="1">Millimetre (mm)</mat-option>
                            <mat-option value="1">Milliliter (ml)</mat-option>
                            <mat-option value="1">Pack (pk)</mat-option>
                            <mat-option value="1">Piece (pc)</mat-option>
                        </mat-select>
                    </div>
                    <div class="mb-0">
                        <label class="form-label">Status</label>
                        <mat-select class="custom-mat-select select2-color" placeholder="Select">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1" class="text-success">Active</mat-option>
                            <mat-option value="1" class="text-danger">Inactive</mat-option>
                        </mat-select>
                    </div>
                    <div class="offcanvas-footer">
                        <div class="row g-2">
                            <div class="col-6">
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
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

        <!-- Start Add Page Modal  -->
        <div id="add_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Page</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Title <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Slug <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Description <span> (Meta Tag) </span> <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Keywords <span> (Meta Tag) </span> <span class="text-danger"> *</span></label>
                                        <input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput" name="specialist">
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label class="form-label">Location <span class="text-danger">*</span></label>
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-3">
                                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1" checked="">
                                                <label class="form-check-label" for="Radio-sm-1">
                                                    Top Menu
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2">
                                                <label class="form-check-label" for="Radio-sm-2">
                                                    Quick Links
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label class="form-label">Language <span class="text-danger ms-1">*</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">English</mat-option>
                                            <mat-option value="1">German</mat-option>
                                            <mat-option value="1">Arabic</mat-option>
                                            <mat-option value="1">French</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label class="form-label">Status <span class="text-danger ms-1">*</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Active</mat-option>
                                            <mat-option value="1">Inactive</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div>
                                        <label class="form-label">Textarea</label>
                                        <ngx-editor [editor]="editor">
                                            <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                                            </ngx-editor-menu>
                                         </ngx-editor>
                                    </div>
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
        <!-- End Add Page Modal -->

        <!-- Start Edit Page Modal  -->
        <div id="edit_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Page</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Title <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" value="About Us">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Slug <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" value="abot-us">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Description <span> (Meta Tag) </span> <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Keywords <span> (Meta Tag) </span> <span class="text-danger"> *</span></label>
                                        <input class="input-tags form-control" id="inputBox2" type="text" data-role="tagsinput" name="specialist" value="Badge">
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label class="form-label">Location <span class="text-danger">*</span></label>
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-3">
                                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1" checked="">
                                                <label class="form-check-label" for="Radio-sm-3">
                                                    Top Menu
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2">
                                                <label class="form-check-label" for="Radio-sm-4">
                                                    Quick Links
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label class="form-label">Language <span class="text-danger ms-1">*</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="English">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">English</mat-option>
                                            <mat-option value="1">German</mat-option>
                                            <mat-option value="1">Arabic</mat-option>
                                            <mat-option value="1">French</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label class="form-label">Status <span class="text-danger ms-1">*</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="Active">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Active</mat-option>
                                            <mat-option value="1">Inactive</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div>
                                        <label class="form-label">Textarea</label>
                                        <ngx-editor [editor]="editor1">
                                            <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >
                                            </ngx-editor-menu>
                                         </ngx-editor>
                                    </div>
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
        <!-- End Edit Page Modal -->

        <!-- Start Modal -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Page</h6>
                        <p class="mb-3">Are you sure, you want to delete Page?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Modal -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagesComponent, { className: "PagesComponent", filePath: "src/app/features/content/pages/pages.component.ts", lineNumber: 22 });
})();
export {
  PagesComponent
};
//# sourceMappingURL=chunk-SJXOWL6J.js.map
