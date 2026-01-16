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
  Router,
  RouterLink
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/content/blogs/blog-categories/blog-categories.component.ts
var _c0 = () => ({ standalone: true });
function BlogCategoriesComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 54)(2, "div", 55)(3, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function BlogCategoriesComponent_For_50_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 58);
    \u0275\u0275text(11);
    \u0275\u0275element(12, "i", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 60)(14, "a", 61);
    \u0275\u0275element(15, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ul", 63)(17, "li")(18, "a", 64);
    \u0275\u0275element(19, "i", 65);
    \u0275\u0275text(20, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "a", 66);
    \u0275\u0275element(23, "i", 67);
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "badge-soft-danger" : "badge-soft-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.status === "Inactive" ? "isax-close-circle" : "isax-tick-circle");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r2.routes.blogtag);
  }
}
function BlogCategoriesComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 68);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function BlogCategoriesComponent_app_custom_pagination_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var BlogCategoriesComponent = class _BlogCategoriesComponent {
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
    this.data.getBlogCategories().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.blogCategories) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBlogCategories().subscribe((apiRes) => {
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
  static \u0275fac = function BlogCategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogCategoriesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCategoriesComponent, selectors: [["app-blog-categories"]], decls: 120, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "mb-0"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "Accounting", 1, "form-control"], ["placeholder", "Active", 1, "custom-mat-select", "select"], ["value", "1"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "fw-medium"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "isax", "ms-1", 3, "ngClass"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], [1, "dropdown-menu"], ["data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function BlogCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div")(7, "a", 3);
      \u0275\u0275element(8, "i", 4);
      \u0275\u0275text(9, "New Categories ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "a", 10);
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "label")(19, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function BlogCategoriesComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BlogCategoriesComponent_Template_input_ngModelChange_19_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(20, "div", 7)(21, "div", 14)(22, "a", 15);
      \u0275\u0275element(23, "i", 16);
      \u0275\u0275text(24, "Sort By : ");
      \u0275\u0275elementStart(25, "span", 17);
      \u0275\u0275text(26, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "ul", 18)(28, "li")(29, "a", 19);
      \u0275\u0275text(30, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "a", 19);
      \u0275\u0275text(33, "Oldest");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(34, "div", 20)(35, "table", 21);
      \u0275\u0275listener("matSortChange", function BlogCategoriesComponent_Template_table_matSortChange_35_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(36, "thead", 22)(37, "tr")(38, "th", 23)(39, "div", 24);
      \u0275\u0275listener("click", function BlogCategoriesComponent_Template_div_click_39_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(40, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function BlogCategoriesComponent_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "th", 23);
      \u0275\u0275text(42, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 23);
      \u0275\u0275text(44, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 23);
      \u0275\u0275text(46, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "th", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "tbody");
      \u0275\u0275repeaterCreate(49, BlogCategoriesComponent_For_50_Template, 25, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(51, BlogCategoriesComponent_Conditional_51_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(52, BlogCategoriesComponent_app_custom_pagination_52_Template, 1, 0, "app-custom-pagination", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 27)(54, "div", 28)(55, "div", 29)(56, "div", 30)(57, "h4", 31);
      \u0275\u0275text(58, "Add New Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 32);
      \u0275\u0275element(60, "i", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "form")(62, "div", 34)(63, "div", 35)(64, "label", 36);
      \u0275\u0275text(65, "Category Name");
      \u0275\u0275elementStart(66, "span", 37);
      \u0275\u0275text(67, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(68, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 39)(70, "button", 40);
      \u0275\u0275text(71, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 41);
      \u0275\u0275text(73, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(74, "div", 42)(75, "div", 28)(76, "div", 29)(77, "div", 30)(78, "h4", 31);
      \u0275\u0275text(79, "Edit Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "button", 32);
      \u0275\u0275element(81, "i", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "form")(83, "div", 34)(84, "div", 5)(85, "label", 36);
      \u0275\u0275text(86, "Category Name");
      \u0275\u0275elementStart(87, "span", 37);
      \u0275\u0275text(88, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(89, "input", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 35)(91, "label", 36);
      \u0275\u0275text(92, "Status");
      \u0275\u0275elementStart(93, "span", 37);
      \u0275\u0275text(94, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "mat-select", 44)(96, "mat-option", 45);
      \u0275\u0275text(97, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "mat-option", 45);
      \u0275\u0275text(99, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(100, "div", 39)(101, "button", 40);
      \u0275\u0275text(102, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "button", 41);
      \u0275\u0275text(104, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(105, "div", 46)(106, "div", 47)(107, "div", 29)(108, "div", 48)(109, "div", 5);
      \u0275\u0275element(110, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "h6", 50);
      \u0275\u0275text(112, "Delete Blog Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 5);
      \u0275\u0275text(114, "Are you sure, you want to delete Blog Category?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 51)(116, "a", 52);
      \u0275\u0275text(117, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "a", 53);
      \u0275\u0275text(119, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, NgxEditorModule, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, MatSortModule, MatSort, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogCategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-blog-categories", imports: [
      CommonModule,
      NgxEditorModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule,
      RouterLink
    ], template: `            <!-- Start Content -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Categories</h6>
                    </div>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
                        <div>
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                                <i class="isax isax-add-circle5 me-1"></i>New Categories
                            </a>
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

                        </div>
                    </div>
                </div>
                <!-- End Table Search -->

                <!-- Start Table List -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead class="thead-light">
                            <tr>
                                <th class="no-sort">
                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                                    </div>
                                </th>
                                <th class="no-sort">Category</th>
                                <th class="no-sort">Date</th>
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
                                <td><a href="javascript:void(0);" class="fw-medium">{{data.category}}</a></td>
                                <td>{{data.date}}</td>
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
                                            <a [routerLink]="routes.blogtag" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
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
                <!-- End Table List -->
                <app-custom-pagination *ngIf="row"/>
            </div>
            <!-- End Content -->


            
        <!-- Start Add Modal  -->
        <div id="add_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Category</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="mb-0">
                                <label class="form-label">Category Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
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
        <!-- End Add Modal -->


        <!-- Start Edit Modal  -->
        <div id="edit_modal" class="modal fade">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Category</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Category Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Accounting">
                            </div>
                            <div class="mb-0">
                                <label class="form-label">Status<span class="text-danger ms-1">*</span></label>
                                <mat-select class="custom-mat-select select" placeholder="Active">
                                    <mat-option value="1">Active</mat-option>
                                    <mat-option value="1">Inactive</mat-option>
                                </mat-select>
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
        <!-- End Edit Modal -->

        <!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Blog Category</h6>
                        <p class="mb-3">Are you sure, you want to delete Blog Category?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCategoriesComponent, { className: "BlogCategoriesComponent", filePath: "src/app/features/content/blogs/blog-categories/blog-categories.component.ts", lineNumber: 22 });
})();
export {
  BlogCategoriesComponent
};
//# sourceMappingURL=chunk-2E4BWXYD.js.map
