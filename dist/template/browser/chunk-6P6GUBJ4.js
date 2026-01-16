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

// src/app/features/invantory-sales/products-service/category/category.component.ts
var _c0 = () => ({ standalone: true });
function CategoryComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 60)(2, "div", 61)(3, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryComponent_For_35_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 31)(6, "a", 63);
    \u0275\u0275element(7, "img", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 65)(10, "a", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 67);
    \u0275\u0275element(16, "input", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 69)(18, "a", 70);
    \u0275\u0275element(19, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 72)(21, "li")(22, "a", 73);
    \u0275\u0275element(23, "i", 74);
    \u0275\u0275text(24, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "li")(26, "a", 75);
    \u0275\u0275element(27, "i", 76);
    \u0275\u0275text(28, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.noOfProducts);
  }
}
function CategoryComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function CategoryComponent_app_custom_pagination_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var CategoryComponent = class _CategoryComponent {
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
  showFilter = false;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  row = true;
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getCategory().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.category) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCategory().subscribe((apiRes) => {
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
  static \u0275fac = function CategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["app-category"]], decls: 132, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "category"], [4, "ngIf"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "modal-body"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "isax", "isax-image", "text-primary", "fs-24"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9", "fs-12"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/products/product-05.jpg", "alt", "", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], ["type", "text", "value", "Shoes", 1, "form-control"], ["type", "text", "placeholder", "Shoes", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis-vertical"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function CategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div")(7, "a", 3);
      \u0275\u0275element(8, "i", 4);
      \u0275\u0275text(9, "New Category");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "a", 10);
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "label")(19, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function CategoryComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CategoryComponent_Template_input_ngModelChange_19_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(20, "div", 14)(21, "table", 15);
      \u0275\u0275listener("matSortChange", function CategoryComponent_Template_table_matSortChange_21_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(22, "thead", 16)(23, "tr")(24, "th", 17)(25, "div", 18);
      \u0275\u0275listener("click", function CategoryComponent_Template_div_click_25_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(26, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function CategoryComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "th", 20);
      \u0275\u0275text(28, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 17);
      \u0275\u0275text(30, "No of Products");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "th", 17)(32, "th", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "tbody");
      \u0275\u0275repeaterCreate(34, CategoryComponent_For_35_Template, 29, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(36, CategoryComponent_Conditional_36_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(37, CategoryComponent_app_custom_pagination_37_Template, 1, 0, "app-custom-pagination", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 22)(39, "div", 23)(40, "div", 24)(41, "div", 25)(42, "h4", 26);
      \u0275\u0275text(43, "Add Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 27);
      \u0275\u0275element(45, "i", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "form")(47, "div", 29)(48, "div", 5)(49, "span", 30);
      \u0275\u0275text(50, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 31)(52, "div", 32);
      \u0275\u0275element(53, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 34)(55, "div", 35);
      \u0275\u0275element(56, "i", 36);
      \u0275\u0275text(57, "Upload Image ");
      \u0275\u0275element(58, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 38);
      \u0275\u0275text(60, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 5)(62, "label", 39);
      \u0275\u0275text(63, "Name");
      \u0275\u0275elementStart(64, "span", 40);
      \u0275\u0275text(65, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(66, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div")(68, "label", 39);
      \u0275\u0275text(69, "Slug");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "input", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 42)(72, "button", 43);
      \u0275\u0275text(73, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 44);
      \u0275\u0275text(75, "Add New");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(76, "div", 45)(77, "div", 23)(78, "div", 24)(79, "div", 25)(80, "h4", 26);
      \u0275\u0275text(81, "Edit Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "button", 27);
      \u0275\u0275element(83, "i", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "form")(85, "div", 29)(86, "div", 5)(87, "span", 30);
      \u0275\u0275text(88, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 31)(90, "div", 32)(91, "div", 46);
      \u0275\u0275element(92, "img", 47);
      \u0275\u0275elementStart(93, "a", 48);
      \u0275\u0275element(94, "i", 49);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 34)(96, "div", 35);
      \u0275\u0275element(97, "i", 36);
      \u0275\u0275text(98, "Upload Image ");
      \u0275\u0275element(99, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "span", 38);
      \u0275\u0275text(101, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 5)(103, "label", 39);
      \u0275\u0275text(104, "Name");
      \u0275\u0275elementStart(105, "span", 40);
      \u0275\u0275text(106, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(107, "input", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div")(109, "label", 39);
      \u0275\u0275text(110, "Slug");
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 42)(113, "button", 43);
      \u0275\u0275text(114, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "button", 44);
      \u0275\u0275text(116, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(117, "div", 52)(118, "div", 53)(119, "div", 24)(120, "div", 54)(121, "div", 5);
      \u0275\u0275element(122, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "h6", 56);
      \u0275\u0275text(124, "Delete Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "p", 5);
      \u0275\u0275text(126, "Are you sure, you want to delete category?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 57)(128, "a", 58);
      \u0275\u0275text(129, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "a", 59);
      \u0275\u0275text(131, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CustomPaginationComponent, CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryComponent, [{
    type: Component,
    args: [{ selector: "app-category", imports: [CustomPaginationComponent, CommonModule, FormsModule, MatSortModule], template: '<div class="content-two">\n\n  <!-- Breadcrumb -->\n  <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n      <div>\n          <h6>Category</h6>\n      </div>\n      <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n          <div>\n              <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>New Category</a>\n          </div>\n      </div>\n  </div>\n  <!-- /Breadcrumb -->\n\n  <!-- Table Search -->\n  <div class="mb-3">\n\n      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n          <div class="d-flex align-items-center flex-wrap gap-2">\n              <div class="table-search d-flex align-items-center mb-0">\n                <div class="search-input">\n                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                      <label> \n                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                    </label>\n                  </div>\n                 </div>\n              </div>\n          </div>\n      </div>\n\n  </div>\n  <!-- /Table Search -->\n\n  <!-- Table List -->\n  <div class="table-responsive">\n    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n          <thead class="thead-light">\n              <tr>\n                <th class="no-sort">\n                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                    </div>\n                </th>\n                  <th mat-sort-header="category">Category</th>\n                  <th class="no-sort">No of Products</th>\n                  <th class="no-sort"></th>\n                  <th class="no-sort"></th>\n              </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData;track data){\n              <tr>\n                <td class="sorting_1">\n                    <div class="form-check form-check-md" >\n                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                    </div>\n                </td>\n                  <td>\n                      <div class="d-flex align-items-center">\n                          <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                              <img src="assets/img/products/{{data.img}}" class="rounded-circle" alt="img">\n                          </a>\n                          <div>\n                              <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.category}}</a></h6>\n                          </div>\n                      </div>\n                  </td>\n                  <td>{{data.noOfProducts}}</td>\n                  <td>\n                      <div class="form-check form-switch">\n                          <input class="form-check-input" type="checkbox" role="switch" checked>\n                      </div>\n                  </td>\n                  <td class="action-item">\n                      <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                          <i class="fa-solid fa-ellipsis-vertical"></i>\n                      </a>\n                      <ul class="dropdown-menu">\n                          <li>\n                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                          </li>\n                          <li>\n                              <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                          </li>\n                      </ul>\n                  </td>\n              </tr>\n            }\n            @if(tableData.length === 0){\n                <tr>\n                  <td colspan="12" class="text-center text-dark">No matching records found</td>\n                </tr>\n              }\n          </tbody>\n      </table>\n  </div>\n  <app-custom-pagination *ngIf="row"/>\n  <!-- /Table List -->\n\n</div>\n\n\n        <!-- Add Modal Start -->\n        <div id="add_modal" class="modal fade">\n          <div class="modal-dialog modal-dialog-centered">\n              <div class="modal-content">\n                  <div class="modal-header">\n                      <h4 class="modal-title">Add Category</h4>\n                      <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                  </div>\n                  <form >\n                      <div class="modal-body">\n                          <div class="mb-3">\n                              <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>\n                              <div class="d-flex align-items-center">\n                                  <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                      <i class="isax isax-image text-primary fs-24"></i>\n                                  </div>\n                                  <div class="d-inline-flex flex-column align-items-start">\n                                      <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                          <i class="isax isax-image me-1"></i>Upload Image\n                                          <input type="file" class="form-control image-sign" multiple="">\n                                      </div>\n                                      <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class="mb-3">\n                              <label class="form-label">Name<span class="text-danger ms-1">*</span></label>\n                              <input type="text" class="form-control">\n                          </div>\n                          <div>\n                              <label class="form-label">Slug</label>\n                              <input type="text" class="form-control">\n                          </div>\n                      </div>\n                      <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                          <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n      <!-- Add Modal End -->\n\n      <!-- Edit Modal Start -->\n      <div id="edit_modal" class="modal fade">\n          <div class="modal-dialog modal-dialog-centered">\n              <div class="modal-content">\n                  <div class="modal-header">\n                      <h4 class="modal-title">Edit  Category</h4>\n                      <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                  </div>\n                  <form >\n                      <div class="modal-body">\n                          <div class="mb-3">\n                              <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>\n                              <div class="d-flex align-items-center">\n                                  <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                      <div class="position-relative d-flex align-items-center">\n                                          <img src="assets/img/products/product-05.jpg" class="avatar avatar-xl" alt="">\n                                          <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                                      </div>\n                                  </div>\n                                  <div class="d-inline-flex flex-column align-items-start">\n                                      <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">\n                                          <i class="isax isax-image me-1"></i>Upload Image\n                                          <input type="file" class="form-control image-sign" multiple="">\n                                      </div>\n                                      <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class="mb-3">\n                              <label class="form-label">Name<span class="text-danger ms-1">*</span></label>\n                              <input type="text" class="form-control" value="Shoes">\n                          </div>\n                          <div>\n                              <label class="form-label">Slug</label>\n                              <input type="text" class="form-control" placeholder="Shoes">\n                          </div>\n                      </div>\n                      <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                          <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n      <!-- Edit Modal End -->\n\n      <!-- Delete Modal Start -->\n      <div class="modal fade" id="delete_modal">\n          <div class="modal-dialog modal-dialog-centered modal-sm">\n              <div class="modal-content">\n                  <div class="modal-body text-center">\n                      <div class="mb-3">\n                          <img src="assets/img/icons/delete.svg" alt="img">\n                      </div>\n                      <h6 class="mb-1">Delete Category</h6>\n                      <p class="mb-3">Are you sure, you want to delete category?</p>\n                      <div class="d-flex justify-content-center">\n                          <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- Delete Modal End  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryComponent, { className: "CategoryComponent", filePath: "src/app/features/invantory-sales/products-service/category/category.component.ts", lineNumber: 19 });
})();
export {
  CategoryComponent
};
//# sourceMappingURL=chunk-6P6GUBJ4.js.map
