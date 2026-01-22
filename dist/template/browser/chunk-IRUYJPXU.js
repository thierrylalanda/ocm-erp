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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/products-service/product-list/product-list.component.ts
var _c0 = () => ({ standalone: true });
function ProductListComponent_For_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 99)(2, "div", 100)(3, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_For_149_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 102);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 103)(9, "a", 104);
    \u0275\u0275element(10, "img", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 106)(13, "a", 107);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 108);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 108);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 108);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "div", 109);
    \u0275\u0275element(27, "input", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 111)(29, "a", 112);
    \u0275\u0275element(30, "i", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul", 6)(32, "li")(33, "a", 114);
    \u0275\u0275element(34, "i", 115);
    \u0275\u0275text(35, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "li")(37, "a", 116);
    \u0275\u0275element(38, "i", 117);
    \u0275\u0275text(39, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.code);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.sellingPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.purchasePrice);
    \u0275\u0275advance(9);
    \u0275\u0275property("routerLink", ctx_r2.routes.editProducts);
  }
}
function ProductListComponent_Conditional_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 118);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_app_custom_pagination_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var ProductListComponent = class _ProductListComponent {
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
    this.data.getProductlist().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.productlist) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getProductlist().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
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
  static \u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 336, vars: 7, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "qty"], ["mat-sort-header", "sprice"], ["mat-sort-header", "pprice"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-0"], ["placeholder", "Select", 1, "custom-mat-select", "select2-color"], [1, "fa-solid", "fa-circle", "fs-6", "me-1", "text-success"], [1, "fa-solid", "fa-circle", "fs-6", "me-1", "text-danger"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis-vertical"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Products");
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
      \u0275\u0275text(20, "New Product");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 26)(49, "a", 27);
      \u0275\u0275element(50, "i", 28);
      \u0275\u0275text(51, "Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "ul", 29)(53, "li")(54, "label", 30);
      \u0275\u0275element(55, "i", 31)(56, "input", 32);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Code");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 30);
      \u0275\u0275element(61, "i", 31)(62, "input", 32);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 30);
      \u0275\u0275element(67, "i", 31)(68, "input", 32);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Category");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 30);
      \u0275\u0275element(73, "i", 31)(74, "input", 32);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Unit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 30);
      \u0275\u0275element(79, "i", 31)(80, "input", 32);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "li")(84, "label", 30);
      \u0275\u0275element(85, "i", 31)(86, "input", 32);
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Selling Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "li")(90, "label", 30);
      \u0275\u0275element(91, "i", 31)(92, "input", 33);
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, "Purchase Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "li")(96, "label", 30);
      \u0275\u0275element(97, "i", 31)(98, "input", 33);
      \u0275\u0275elementStart(99, "span");
      \u0275\u0275text(100, "Status");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(101, "div", 34)(102, "h6", 35);
      \u0275\u0275text(103, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "span", 36)(105, "span", 37);
      \u0275\u0275text(106, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(107, "Products Selected");
      \u0275\u0275elementStart(108, "span", 38);
      \u0275\u0275element(109, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "span", 36)(111, "span", 37);
      \u0275\u0275text(112, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(113, "Unit Selected");
      \u0275\u0275elementStart(114, "span", 38);
      \u0275\u0275element(115, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "span", 36)(117, "span", 37);
      \u0275\u0275text(118, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(119, "Price Selected");
      \u0275\u0275elementStart(120, "span", 38);
      \u0275\u0275element(121, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "a", 40);
      \u0275\u0275text(123, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 41)(125, "table", 42);
      \u0275\u0275listener("matSortChange", function ProductListComponent_Template_table_matSortChange_125_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(126, "thead")(127, "tr")(128, "th", 43)(129, "div", 44);
      \u0275\u0275listener("click", function ProductListComponent_Template_div_click_129_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(130, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_130_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "th", 43);
      \u0275\u0275text(132, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 43);
      \u0275\u0275text(134, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 43);
      \u0275\u0275text(136, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "th", 43);
      \u0275\u0275text(138, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "th", 46);
      \u0275\u0275text(140, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "th", 47);
      \u0275\u0275text(142, "Selling Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "th", 48);
      \u0275\u0275text(144, "Purchase Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(145, "th", 43)(146, "th", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "tbody");
      \u0275\u0275repeaterCreate(148, ProductListComponent_For_149_Template, 40, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(150, ProductListComponent_Conditional_150_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(151, ProductListComponent_app_custom_pagination_151_Template, 1, 0, "app-custom-pagination", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 50)(153, "div", 51)(154, "div", 52)(155, "h6", 53);
      \u0275\u0275text(156, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "button", 54);
      \u0275\u0275element(158, "i", 55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(159, "div", 56)(160, "form", 57)(161, "div", 10)(162, "label", 58);
      \u0275\u0275text(163, "Products/Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 26)(165, "a", 59);
      \u0275\u0275text(166, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "div", 60)(168, "div", 10)(169, "div", 61)(170, "span", 62);
      \u0275\u0275element(171, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(172, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "ul", 10)(174, "li", 65)(175, "label", 66);
      \u0275\u0275element(176, "input", 67);
      \u0275\u0275text(177, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "a", 68);
      \u0275\u0275text(179, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "li")(181, "label", 69);
      \u0275\u0275element(182, "input", 33);
      \u0275\u0275elementStart(183, "span", 70);
      \u0275\u0275element(184, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(185, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "li")(187, "label", 69);
      \u0275\u0275element(188, "input", 33);
      \u0275\u0275elementStart(189, "span", 70);
      \u0275\u0275element(190, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275text(191, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "li")(193, "label", 69);
      \u0275\u0275element(194, "input", 33);
      \u0275\u0275elementStart(195, "span", 70);
      \u0275\u0275element(196, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(197, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "li")(199, "label", 69);
      \u0275\u0275element(200, "input", 33);
      \u0275\u0275elementStart(201, "span", 70);
      \u0275\u0275element(202, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(203, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "label", 69);
      \u0275\u0275element(206, "input", 33);
      \u0275\u0275elementStart(207, "span", 70);
      \u0275\u0275element(208, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(209, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "label", 69);
      \u0275\u0275element(212, "input", 33);
      \u0275\u0275elementStart(213, "span", 70);
      \u0275\u0275element(214, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(215, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "div", 77)(217, "div", 78)(218, "a", 79);
      \u0275\u0275text(219, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "div", 78)(221, "a", 80);
      \u0275\u0275text(222, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(223, "div", 10)(224, "label", 58);
      \u0275\u0275text(225, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 26)(227, "a", 59);
      \u0275\u0275text(228, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 60)(230, "div", 10)(231, "div", 61)(232, "span", 62);
      \u0275\u0275element(233, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275element(234, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "ul", 10)(236, "li", 65)(237, "label", 66);
      \u0275\u0275element(238, "input", 67);
      \u0275\u0275text(239, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "a", 68);
      \u0275\u0275text(241, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li")(243, "label", 69);
      \u0275\u0275element(244, "input", 33);
      \u0275\u0275text(245, " Smartphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "li")(247, "label", 69);
      \u0275\u0275element(248, "input", 33);
      \u0275\u0275text(249, " Headphones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "li")(251, "label", 69);
      \u0275\u0275element(252, "input", 33);
      \u0275\u0275text(253, " Men's Apparel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "li")(255, "label", 69);
      \u0275\u0275element(256, "input", 33);
      \u0275\u0275text(257, " Footwear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "li")(259, "label", 69);
      \u0275\u0275element(260, "input", 33);
      \u0275\u0275text(261, " Kitchen ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "li")(263, "label", 69);
      \u0275\u0275element(264, "input", 33);
      \u0275\u0275text(265, " Cleaning ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "li")(267, "label", 69);
      \u0275\u0275element(268, "input", 33);
      \u0275\u0275text(269, " Skincare ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "li")(271, "label", 69);
      \u0275\u0275element(272, "input", 33);
      \u0275\u0275text(273, " Bike & Accessories ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(274, "div", 77)(275, "div", 78)(276, "a", 79);
      \u0275\u0275text(277, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "div", 78)(279, "a", 80);
      \u0275\u0275text(280, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(281, "div", 10)(282, "label", 58);
      \u0275\u0275text(283, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "mat-select", 81)(285, "mat-option", 82);
      \u0275\u0275text(286, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "mat-option", 82);
      \u0275\u0275text(288, "Kilograms (Kg)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "mat-option", 82);
      \u0275\u0275text(290, "Gram (g)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "mat-option", 82);
      \u0275\u0275text(292, "Liter (l)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "mat-option", 82);
      \u0275\u0275text(294, "Millimetre (mm)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "mat-option", 82);
      \u0275\u0275text(296, "Milliliter (ml)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "mat-option", 82);
      \u0275\u0275text(298, "Pack (pk)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "mat-option", 82);
      \u0275\u0275text(300, "Piece (pc)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "div", 83)(302, "label", 58);
      \u0275\u0275text(303, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "mat-select", 84)(305, "mat-option", 82);
      \u0275\u0275text(306, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "mat-option", 82);
      \u0275\u0275element(308, "i", 85);
      \u0275\u0275text(309, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-option", 82);
      \u0275\u0275element(311, "i", 86);
      \u0275\u0275text(312, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(313, "div", 87)(314, "div", 77)(315, "div", 78)(316, "a", 88);
      \u0275\u0275text(317, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "div", 78)(319, "button", 89);
      \u0275\u0275text(320, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(321, "div", 90)(322, "div", 91)(323, "div", 92)(324, "div", 93)(325, "div", 10);
      \u0275\u0275element(326, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "h6", 95);
      \u0275\u0275text(328, "Delete Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "p", 10);
      \u0275\u0275text(330, "Are you sure, you want to delete product?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "div", 96)(332, "a", 97);
      \u0275\u0275text(333, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "a", 98);
      \u0275\u0275text(335, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.addProducts);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(100);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 150 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgIf, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{ selector: "app-product-list", imports: [MatSelectModule, CustomPaginationComponent, RouterLink, FormsModule, CommonModule, MatSortModule], template: `	<!-- Start Container  -->
  <div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
      <div>
        <h6>Products</h6>
      </div>
      <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
        <div class="dropdown me-1">
          <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"  data-bs-toggle="dropdown">
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
          <a [routerLink]="routes.addProducts" class="btn btn-primary d-flex align-items-center"><i class="isax isax-add-circle5 me-1"></i>New Product</a>
        </div>
      </div>
    </div>
    <!-- End Breadcrumb -->
    
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
        <div class="d-flex align-items-center flex-wrap gap-2">
          <div class="dropdown me-2">
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
          <div class="dropdown">
            <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              <i class="isax isax-grid-3 me-1"></i>Column
            </a>
            <ul class="dropdown-menu  dropdown-menu">
              <li>
                <label class="dropdown-item d-flex align-items-center form-switch">
                  <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                  <input class="form-check-input m-0 me-2" type="checkbox" checked>
                  <span>Code</span>
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center form-switch">
                  <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                  <input class="form-check-input m-0 me-2" type="checkbox" checked>
                  <span>Product</span>
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center form-switch">
                  <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                  <input class="form-check-input m-0 me-2" type="checkbox" checked>
                  <span>Category</span>
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center form-switch">
                  <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                  <input class="form-check-input m-0 me-2" type="checkbox" checked>
                  <span>Unit</span>
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center form-switch">
                  <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                  <input class="form-check-input m-0 me-2" type="checkbox" checked>
                  <span>Quantity</span>
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center form-switch">
                  <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                  <input class="form-check-input m-0 me-2" type="checkbox" checked>
                  <span>Selling Price</span>
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center form-switch">
                  <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                  <input class="form-check-input m-0 me-2" type="checkbox">
                  <span>Purchase Price</span>
                </label>
              </li>
              <li>
                <label class="dropdown-item d-flex align-items-center form-switch">
                  <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                  <input class="form-check-input m-0 me-2" type="checkbox">
                  <span>Status</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>				

      <!-- Filter Info -->
      <div class="align-items-center gap-2 flex-wrap filter-info mt-3">
        <h6 class="fs-13 fw-semibold">Filters</h6>
        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Products Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>					
        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Unit Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>					
        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Price Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>
        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>
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
            <th class="no-sort">Code</th>
            <th class="no-sort">Product</th>
            <th class="no-sort">Category</th>
            <th class="no-sort">Unit</th>
            <th  mat-sort-header="qty">Quantity</th>
            <th  mat-sort-header="sprice">Selling Price</th>
            <th  mat-sort-header="pprice">Purchase Price</th>
            <th class="no-sort"></th>
            <th class="no-sort"></th>
          </tr>
        </thead>
        <tbody>
          @for(data of tableData;track data){
          <tr>
            <td class="sorting_1">
              <div class="form-check form-check-md" >
                  <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">
              </div>
          </td>
            <td>
              <a href="javascript:void(0);" class="link-default">{{data.code}}</a>
            </td>
            <td>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                    <img src="assets/img/products/{{data.img}}" class="rounded-circle" alt="img">
                  </a>
                <div>
                  <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.product}}</a></h6>
                </div>
              </div>
            </td>
            <td>{{data.category}}</td>
            <td class="text-dark">{{data.unit}}</td>
            <td>{{data.quantity}}</td>
            <td class="text-dark">{{data.sellingPrice}}</td>
            <td class="text-dark">{{data.purchasePrice}}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" checked>
              </div>
            </td>
            <td class="action-item">
                  <a href="javascript:void(0);" data-bs-toggle="dropdown">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                  <ul class="dropdown-menu">
                      <li>
                          <a [routerLink]="routes.editProducts" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>
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
    <app-custom-pagination *ngIf="row"/>
    
    <!-- End Table List -->

  </div>
  <!-- End Container  -->

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
                      <input class="form-check-input select-all m-0 me-2" type="checkbox">
                      Select All
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
                      <input class="form-check-input select-all m-0 me-2" type="checkbox">
                      Select All
                    </label>
                    <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                      <input class="form-check-input m-0 me-2" type="checkbox">
                      Smartphones
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                      <input class="form-check-input m-0 me-2" type="checkbox">
                      Headphones
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                      <input class="form-check-input m-0 me-2" type="checkbox">
                      Men's Apparel
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                      <input class="form-check-input m-0 me-2" type="checkbox">
                      Footwear
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                      <input class="form-check-input m-0 me-2" type="checkbox">
                      Kitchen
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                      <input class="form-check-input m-0 me-2" type="checkbox">
                      Cleaning
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                      <input class="form-check-input m-0 me-2" type="checkbox">
                      Skincare
                    </label>
                  </li>
                  <li>
                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                      <input class="form-check-input m-0 me-2" type="checkbox">
                      Bike & Accessories
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
              <mat-option value="1"> <i class="fa-solid fa-circle fs-6 me-1 text-success"></i>Active</mat-option>
              <mat-option value="1"><i class="fa-solid fa-circle fs-6 me-1 text-danger"></i>Inactive</mat-option>
            </mat-select>
          </div>					
          <div class="offcanvas-footer">
            <div class="row g-2"> 
              <div class="col-6">
                <a href="javascript:void(0);"  class="btn btn-outline-white w-100" data-bs-dismiss="modal">Reset</a>
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

    <!-- Start Delete -->
		<div class="modal fade" id="delete_modal">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<div class="modal-content">
					<div class="modal-body text-center">
						<div class="mb-3">
							<img src="assets/img/icons/delete.svg" alt="img">
						</div>
						<h6 class="mb-1">Delete Product</h6>
						<p class="mb-3">Are you sure,  you want to delete product?</p>
						<div class="d-flex justify-content-center">
							<a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
							<a href="javascript:void(0);" class="btn btn-primary"  data-bs-dismiss="modal">Yes, Delete</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Delete -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/features/invantory-sales/products-service/product-list/product-list.component.ts", lineNumber: 19 });
})();
export {
  ProductListComponent
};
//# sourceMappingURL=chunk-IRUYJPXU.js.map
