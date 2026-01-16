import {
  DateRangePickerComponent
} from "./chunk-SN3MXWCE.js";
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
import "./chunk-BVBMCBML.js";
import "./chunk-KA6DODO3.js";
import "./chunk-KEUB2FQU.js";
import "./chunk-T3U7HIOV.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/content/blogs/blog-comments/blog-comments.component.ts
var _c0 = () => ({ standalone: true });
function BlogCommentsComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 76)(2, "div", 77)(3, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function BlogCommentsComponent_For_62_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 79)(6, "a", 80);
    \u0275\u0275element(7, "img", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 82)(10, "a", 83);
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
    \u0275\u0275elementStart(18, "td", 84)(19, "a", 85);
    \u0275\u0275element(20, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ul", 6)(22, "li")(23, "a", 87);
    \u0275\u0275element(24, "i", 88);
    \u0275\u0275text(25, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.customerDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
  }
}
function BlogCommentsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function BlogCommentsComponent_app_custom_pagination_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var BlogCommentsComponent = class _BlogCommentsComponent {
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
    this.data.getBlogComment().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.blogcomments) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBlogComment().subscribe((apiRes) => {
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
  static \u0275fac = function BlogCommentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogCommentsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCommentsComponent, selectors: [["app-blog-comments"]], decls: 164, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-21.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function BlogCommentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Blog Comments");
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
      \u0275\u0275twoWayListener("ngModelChange", function BlogCommentsComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BlogCommentsComponent_Template_input_ngModelChange_26_listener() {
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
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(44, "div", 24)(45, "table", 25);
      \u0275\u0275listener("matSortChange", function BlogCommentsComponent_Template_table_matSortChange_45_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(46, "thead", 26)(47, "tr")(48, "th", 27)(49, "div", 28);
      \u0275\u0275listener("click", function BlogCommentsComponent_Template_div_click_49_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(50, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function BlogCommentsComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "th", 27);
      \u0275\u0275text(52, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 27);
      \u0275\u0275text(54, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 27);
      \u0275\u0275text(56, "Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th");
      \u0275\u0275text(58, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "th", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "tbody");
      \u0275\u0275repeaterCreate(61, BlogCommentsComponent_For_62_Template, 26, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(63, BlogCommentsComponent_Conditional_63_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(64, BlogCommentsComponent_app_custom_pagination_64_Template, 1, 0, "app-custom-pagination", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 31)(66, "div", 32)(67, "div", 33)(68, "h6", 34);
      \u0275\u0275text(69, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 35);
      \u0275\u0275element(71, "i", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 37)(73, "form", 38)(74, "div", 8)(75, "label", 39);
      \u0275\u0275text(76, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 19)(78, "a", 40);
      \u0275\u0275text(79, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 41)(81, "div", 8)(82, "div", 42)(83, "span", 43);
      \u0275\u0275element(84, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "input", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "ul", 8)(87, "li", 46)(88, "label", 47);
      \u0275\u0275element(89, "input", 48);
      \u0275\u0275text(90, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "a", 49);
      \u0275\u0275text(92, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li")(94, "label", 50);
      \u0275\u0275element(95, "input", 51);
      \u0275\u0275elementStart(96, "span", 52);
      \u0275\u0275element(97, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275text(98, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li")(100, "label", 50);
      \u0275\u0275element(101, "input", 51);
      \u0275\u0275elementStart(102, "span", 52);
      \u0275\u0275element(103, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275text(104, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "li")(106, "label", 50);
      \u0275\u0275element(107, "input", 51);
      \u0275\u0275elementStart(108, "span", 52);
      \u0275\u0275element(109, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275text(110, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "label", 50);
      \u0275\u0275element(113, "input", 51);
      \u0275\u0275elementStart(114, "span", 52);
      \u0275\u0275element(115, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275text(116, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "li")(118, "label", 50);
      \u0275\u0275element(119, "input", 51);
      \u0275\u0275elementStart(120, "span", 52);
      \u0275\u0275element(121, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275text(122, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "li")(124, "label", 50);
      \u0275\u0275element(125, "input", 51);
      \u0275\u0275elementStart(126, "span", 52);
      \u0275\u0275element(127, "img", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275text(128, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "div", 59)(130, "div", 60)(131, "a", 61);
      \u0275\u0275text(132, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 60)(134, "a", 62);
      \u0275\u0275text(135, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(136, "div")(137, "label", 39);
      \u0275\u0275text(138, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 63);
      \u0275\u0275element(140, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 64)(142, "div", 59)(143, "div", 60)(144, "a", 65);
      \u0275\u0275text(145, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 60)(147, "button", 66);
      \u0275\u0275text(148, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(149, "div", 67)(150, "div", 68)(151, "div", 69)(152, "div", 70)(153, "div", 8);
      \u0275\u0275element(154, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "h6", 72);
      \u0275\u0275text(156, "Delete Blog Comment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "p", 8);
      \u0275\u0275text(158, "Are you sure, you want to delete Blog Tag?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 73)(160, "a", 74);
      \u0275\u0275text(161, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "a", 75);
      \u0275\u0275text(163, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 63 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgIf, CustomPaginationComponent, MatSortModule, MatSort, DateRangePickerComponent, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogCommentsComponent, [{
    type: Component,
    args: [{ selector: "app-blog-comments", imports: [
      CommonModule,
      CustomPaginationComponent,
      MatSortModule,
      DateRangePickerComponent,
      RouterLink,
      FormsModule
    ], template: '<div class="content-two">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Blog Comments</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="dropdown me-1">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- Start Table Search -->\n    <div class="mb-3">\n\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                     </div>\n                </div>\n                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                    <i class="isax isax-filter me-1"></i>Filter\n                </a>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                        <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-end">\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- End Table Search -->\n\n    <!-- Start Table List -->\n    <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n            <thead class="thead-light">\n                <tr>\n                    <th class="no-sort">\n                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                        </div>\n                    </th>\n                    <th class="no-sort">Customer</th>\n                    <th class="no-sort">Email</th>\n                    <th class="no-sort">Content</th>\n                    <th>Created On</th>\n                    <th class="no-sort"></th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td class="sorting_1">\n                        <div class="form-check form-check-md" >\n                            <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                        </div>\n                    </td>\n\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">\n                            </a>\n                            <div>\n                                <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">{{data.customer}}</a></h6>\n                            </div>\n                        </div>\n                    </td>\n                    <td>{{data.email}}</td>\n                    <td>{{data.content}}</td>\n                    <td>{{data.createdOn}}</td>\n                    <td class="action-item">\n                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                            <i class="isax isax-more"></i>\n                        </a>\n                        <ul class="dropdown-menu">\n\n                            <li>\n                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                            </li>\n                        </ul>\n                    </td>\n                </tr>\n            } @if(tableData.length === 0){\n                <tr>\n                  <td colspan="12" class="text-center text-dark">No matching records found</td>\n                </tr>\n              }\n            </tbody>\n        </table>\n    </div>\n    <!-- End Table List -->\n    <app-custom-pagination *ngIf="row"/>\n\n</div>\n\n        <!-- Start Filter -->\n        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n            <div class="offcanvas-header d-block pb-0">\n                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n                    <h6 class="offcanvas-title">Filter</h6>\n                    <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                </div>\n            </div>\n            <div class="offcanvas-body pt-3">\n                <form action="#">\n                    <div class="mb-3">\n                        <label class="form-label">Customer</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li class="d-flex align-items-center justify-content-between mb-3">\n                                        <label class="d-inline-flex align-items-center text-gray-9">\n                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                        </label>\n                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-21.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Harris\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>David Anderson\n                                        </label>\n                                    </li>\n                                </ul>\n                                <div class="row g-2">\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                                    </div>\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <label class="form-label">Date</label>\n                        <div class="filter-daterange">\n                            <app-date-range-picker></app-date-range-picker>\n                        </div>\n                    </div>\n                    <div class="offcanvas-footer">\n                        <div class="row g-2">\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>\n                            </div>\n                            <div class="col-6">\n                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <!-- End Filter -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Blog Comment</h6>\n                        <p class="mb-3">Are you sure, you want to delete Blog Tag?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCommentsComponent, { className: "BlogCommentsComponent", filePath: "src/app/features/content/blogs/blog-comments/blog-comments.component.ts", lineNumber: 21 });
})();
export {
  BlogCommentsComponent
};
//# sourceMappingURL=chunk-POQIWI6J.js.map
